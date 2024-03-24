const mobileMenu = document.querySelector(".mobile-menu");
window.onload = ()=>{
  mobileMenu.innerHTML = `<button><img src="./images/icon-menu.svg" alt=""></button>`
};
let isOpen = false;
function toggle(){
  if (isOpen) {
    mobileMenu.innerHTML = `<button><img src="./images/icon-menu.svg" alt=""></button>`;
    isOpen = false;
  }else{
    mobileMenu.innerHTML =`<button><img src="./images/icon-close-menu.svg" alt=""></button>`;
    isOpen =true;
  }
}  
mobileMenu.addEventListener("click", toggle);