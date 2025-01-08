let filmographyData = []; // JSON 데이터를 저장할 변수

// JSON 파일 로드
async function loadFilmographyData() {
    try {
        const response = await fetch('data.json'); // data.json 파일 경로
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        filmographyData = await response.json();
    } catch (error) {
        console.error("JSON 데이터를 가져오는 데 실패했습니다:", error);
    }
}

// 모달창 열 때 선택된 항목의 정보를 설정
function openModal(title, description) {
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");

  modalTitle.textContent = title;
  modalDescription.textContent = description;

  // 선택된 항목의 데이터를 찾음
  const selectedItem = filmographyData.find(item => item.title === title);

  // 아이콘 링크를 업데이트
  const icons = document.querySelectorAll(".modal-icons a");
  const iconTypes = ["wat", "tvi", "wav", "nex", "plu"];

  icons.forEach((icon, index) => {
      const linkType = iconTypes[index];
      const link = selectedItem?.links[linkType];

      if (link) {
          icon.href = link; // 링크 설정
          icon.style.pointerEvents = "auto"; // 클릭 활성화
          icon.style.opacity = "1"; // 시각적으로 활성화 표시
      } else {
          icon.href = "#"; // 기본 링크 제거
          icon.style.pointerEvents = "none"; // 클릭 비활성화
          icon.style.opacity = "0.5"; // 시각적으로 비활성화 표시
      }
  });

  // 모달창을 표시
  document.getElementById("modal").style.display = "flex";
}

// 모달창 닫기
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// 페이지 로드 시 JSON 데이터 로드
window.addEventListener("DOMContentLoaded", () => {
  loadFilmographyData();
});