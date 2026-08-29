document.addEventListener("DOMContentLoaded", () => {
  filterGallery("all");
});

function filterGallery(category, clickedButton = null) {

  if (clickedButton) {
    const buttons = document.querySelectorAll(".filter-btn");
    buttons.forEach(btn => btn.classList.remove("active"));
    clickedButton.classList.add("active");
  }


  const items = document.querySelectorAll(".gallery-item");
  
  items.forEach(item => {
    if (category === "all" || item.classList.contains(category)) {
      item.classList.add("show");
    } else {
      item.classList.remove("show");
    }
  });
}