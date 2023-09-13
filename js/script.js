window.addEventListener("scroll", () => {
  let navbar = document.querySelector("nav");
  navbar.classList.toggle("stickyNav", window.scrollY > 100);
});
// =================LIGHT/DARK MODE=====================>
let modeIcon = document.getElementById("mode");
modeIcon.onclick = function () {
  document.body.classList.toggle("dark-Theme");
  if (document.body.classList.contains("dark-Theme")) {
    modeIcon.innerHTML = "<i class='bx bx-sun'></i>";
  } else {
    modeIcon.innerHTML = "<i class='bx bxs-moon'></i>";
  }
};
// =================BURGER MENU=========================>
const mobileToggle = document.getElementById("mobile-toggle");

mobileToggle.addEventListener("click", () => {
  document.querySelector(".nav-items").classList.toggle("active");
});

const navLinks = document.querySelectorAll(".nav-item").forEach((navItem) => {
  navItem.addEventListener("click", () => {
    document.querySelector(".nav-items").classList.toggle("active");
  });
});
