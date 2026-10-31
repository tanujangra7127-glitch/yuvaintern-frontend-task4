
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
  const isOpen = menuBtn.getAttribute("aria-expanded") === "true";

  menuBtn.setAttribute("aria-expanded", String(!isOpen));
  menuBtn.setAttribute(
    "aria-label",
    isOpen ? "Open navigation" : "Close navigation"
  );

  navLinks.classList.toggle("show", !isOpen);
});

navLinks.addEventListener("click", function (event) {
  if (event.target.closest("a")) {
    navLinks.classList.remove("show");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Open navigation");
  }
});

document.getElementById("year").textContent =
  new Date().getFullYear();
