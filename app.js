menuIcon = document.querySelector(".menuIcon");
navBar = document.querySelector(".navBar");
closeMenuBtn = document.querySelector("#closeMenuBtn");

menuIcon.addEventListener("click",()=>{
    console.log("menu clicked!!");
    navBar.classList.toggle("active");
});
closeMenuBtn.addEventListener("click",()=>{
    navBar.classList.toggle("active");
});