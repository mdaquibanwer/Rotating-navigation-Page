
const hamburgerOpen = document.querySelector("#open");
const hamburgerclose = document.querySelector("#close");
const container = document.querySelector(".container")

hamburgerOpen.addEventListener('click',()=>{
    container.classList.add("show-nav")
})
hamburgerclose.addEventListener('click',()=>{
    container.classList.remove("show-nav")
})