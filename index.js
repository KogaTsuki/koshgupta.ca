const MenuBtn = document.getElementById("menu")
const MenuCont = document.getElementById("MenuCont")

const AboutBtn = document.getElementById("AboutBtn")
const HomeBtn = document.getElementById("HomeBtn")
const ProjectsBtn = document.getElementById("ProjectsBtn")

const AboutMe = document.getElementById("AboutMe")
const Skills = document.getElementById("Skills")
const Projects = document.getElementById("Projects")
const scrollIntoViewOptions = {block: "center"}

const animateEl = document.querySelectorAll('.observer')

let menu_on = false
let menu_display = false

MenuBtn.addEventListener("click", () => {
    
    if(menu_on === false && menu_display === false){
        MenuCont.classList.remove("unshowMenu")
        MenuCont.classList.remove("hidden")
        MenuCont.classList.add("showMenu")
        menu_on = true
        menu_display = true
    }
    else if(menu_on === false){
        MenuCont.classList.remove("unshowMenu")
        MenuCont.classList.add("showMenu")
        AboutBtn.disabled = false
        HomeBtn.disabled = false
        ProjectsBtn.disabled = false
        menu_on = true
    }
    else if(menu_on === true){
        MenuCont.classList.remove("showMenu")
        MenuCont.classList.add("unshowMenu")
        menu_on = false
        AboutBtn.disabled = true
        HomeBtn.disabled = true
        ProjectsBtn.disabled = true
    }
})

AboutBtn.addEventListener("click", () => {
    location.href = "https://koshgupta.ca/about"
})

HomeBtn.addEventListener("click", () => {
    location.href = "https://koshgupta.ca"
})

ProjectsBtn.addEventListener("click", () => {
    location.href = "https://koshgupta.ca/projects"
})

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if(entry.isIntersecting) {
//             entry.target.classList.add('showCont')
//         }
//         else{
//             entry.target.classList.remove('showCont')
//         }
//     });
// });


// animateEl.forEach((el) => observer.observe(el))