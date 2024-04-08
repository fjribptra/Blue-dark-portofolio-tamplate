const navigation = document.querySelector(".navigation-overlay");
const hamburgerButton = document.querySelector(".hamburger-button");
const navbar = document.querySelector("nav");


document.body.addEventListener("click", (event) => {
  if (event.target.classList.contains("hamburger-button")) {
    navigation.classList.add("active");
  } else {
    navigation.classList.remove("active");
  }
});

// function changeNavBg() {
//     if (window.scrollY > 10) {
//         navbar.style.backgroundColor = "#76abae"

//     } 
//   if (window.screenY === 0) return (navbar.style.backgroundColor = "#222831");
// }

// setInterval(() => {
//   changeNavBg();
// }, 200);
