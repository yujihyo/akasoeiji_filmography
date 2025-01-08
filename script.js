function openModal(title, description) {
  // 모달 제목과 설명 설정
  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-description").textContent = description;
  
  // 모달 표시
  const modal = document.getElementById("modal");
  modal.style.display = "flex";
}

function closeModal() {
  // 모달 숨기기
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}
