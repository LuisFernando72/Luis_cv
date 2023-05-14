const btn = document.querySelector("#menu");
const menuContent = document.querySelector(".menu-content");
btn.addEventListener("click", (e) => {
  menuContent.classList.toggle("menu-active");
});

const btn_download = document.querySelector("#btn-download");
const contenPrint = document.querySelector(".curriculum");
btn_download.addEventListener("click", (e) => {
  
  if (window.print) {
    window.print();
  }
});

