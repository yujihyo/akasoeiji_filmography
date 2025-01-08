const filmographyData = [
  {
      "title": "366일",
      "links": {
          "watch": "https://watch-link1.com",
          "info": "https://info-link1.com",
          "share": null,
          "favorite": "https://favorite-link1.com",
          "buy": "https://buy-link1.com"
      }
  },
  {
      "title": "상속탐정",
      "links": {
          "watch": null,
          "info": "https://info-link2.com",
          "share": "https://share-link2.com",
          "favorite": "https://favorite-link2.com",
          "buy": null
      }
  }
];

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
  const iconTypes = ["watch", "info", "share", "favorite", "buy"];

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