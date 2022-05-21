/*
    Nizhamuddin Ahmad
    250199360
*/

const hamburger =  document.querySelector(".hamburger");
const navMenu =  document.querySelector(".navbar");


hamburger.addEventListener("click", () =>{
    console.log("work");
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    
})
