/*
    Nizhamuddin Ahmad
    250199360
*/



const hamburger =  document.querySelector(".hamburger");
const navMenu =  document.querySelector(".nav-menu");


hamburger.addEventListener("click", () =>{
    console.log("work");
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");    
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))