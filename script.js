var menuIcon = document.querySelector(".menu-icon")
var sideBar = document.querySelector(".side-bar")
var container = document.querySelector(".container")

menuIcon.onclick = ()=>{
    sideBar.classList.toggle("small-sidebar")
    container.classList.toggle("large-container")
}
