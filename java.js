// const main = document.querySelector(".about_main")
// const skill = document.querySelector(".about_skill")

// main.addEventListener("click", () =>{
//     main.classList.toggle("open");
//     skill.classList.toggle("open");
// })
// const title = document.querySelector(".about__title li");
// const desc = document.querySelector(".about__main-skills");

// title.addEventListener("click",() =>{
//     desc.classList.toggle("open");
//     title.classList.toggle("open");
// })
const title = document.querySelector(".about__title li");
const desc = document.querySelector(".about__main-skills");

title.addEventListener("mouseenter", () => {
    desc.classList.add("open");
    title.classList.add("open");
});

title.addEventListener("mouseleave", () => {
    desc.classList.remove("open");
    title.classList.remove("open");
});