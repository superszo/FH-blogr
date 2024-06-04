let burger = document.getElementById("burger")
let menu = document.getElementById("nav")


burger.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("show");
})

let menuItems = document.getElementsByClassName("drop")

for (item of Array.from(menuItems)) {
    item.addEventListener("click", (e) => {
        e.target.classList.toggle("clicked")
        e.target.nextElementSibling.classList.toggle("show-drop")
    })
}

menu.addEventListener("click", (e) => {
    e.stopPropagation();
})

document.body.addEventListener("click", () => {
    if (menu.classList.contains("show")) {
        menu.classList.toggle("show")
    }
})