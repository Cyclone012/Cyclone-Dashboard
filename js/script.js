const checkbox = document.getElementById("checkbox");
const sidebar = document.querySelector(".sidebar");
const content = document.querySelector(".content");
const labelDarkLight = document.querySelector(".dark-light");
const header = document.querySelector(".header");

// Function to set the theme based on the checkbox state
function setTheme() {
  if (checkbox.checked) {
    document.body.classList.add("light");
    localStorage.setItem("theme", "light");
    labelDarkLight.innerHTML = "Light";
  } else {
    document.body.classList.remove("light");
    localStorage.setItem("theme", "dark");
    labelDarkLight.innerHTML = "Dark";
  }
}

// Function to load the theme from localStorage
function loadTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    checkbox.checked = true;
    setTheme();
  }
}

// Add event listener to the checkbox to toggle the theme
checkbox.addEventListener("change", setTheme);

// Add event listener to the toggle button to collapse navbar and main content
toggle.addEventListener("click", () => {
  sidebar.classList.toggle("collape");
  content.classList.toggle("collape-content");
});

// Add event listeners to navigation links
document.addEventListener("DOMContentLoaded", function (event) {
  const linkColor = document.querySelectorAll(".nav_link");

  function colorLink() {
    linkColor.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  }

  linkColor.forEach((l) => l.addEventListener("click", colorLink));
});

// Load the theme when the DOM content is loaded
document.addEventListener("DOMContentLoaded", loadTheme);

// toggle hamburger button
document.addEventListener("DOMContentLoaded", function () {
  var navIcon = document.querySelector(".hambuger-menu");
  navIcon.addEventListener("click", function () {
    this.classList.toggle("open");
  });
});

// Mobile hover handle
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav_link");

  function togglePopup(event) {
    const popup = this.querySelector(".popup-text");
    if (popup && popup.classList.contains("show")) {
      popup.classList.remove("show");
    } else {
      return true; // Allow default link behavior
    }
    event.preventDefault();
  }

  function handleTouchStart(event) {
    const touch = event.touches[0];
    const link = document.elementFromPoint(touch.clientX, touch.clientY);
    if (link && link.classList.contains("nav_link")) {
      togglePopup.call(link, event);
    }
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", togglePopup);
    link.addEventListener("touchstart", handleTouchStart);
  });
});

// Handle Mobile Scoll
window.addEventListener("scroll", function () {
  const sidebar = document.querySelector(".sidebar");
  const content = document.querySelector(".content");
  const scrollY = window.scrollY || window.pageYOffset;
  const sidebarTop = content.offsetTop;

  if (scrollY >= sidebarTop) {
    sidebar.style.position = "fixed";
    sidebar.style.top = "0";
  } else {
    sidebar.style.position = "absolute";
    sidebar.style.top = "initial";
  }
});

// Function to disable scrolling
function disableScroll() {
  document.body.classList.add("disable-scroll");
}

// Function to enable scrolling
function enableScroll() {
  document.body.classList.remove("disable-scroll");
}

// Add event listeners to sidebar and header
sidebar.addEventListener("mouseover", disableScroll);
sidebar.addEventListener("mouseleave", enableScroll);

header.addEventListener("mouseover", disableScroll);
header.addEventListener("mouseleave", enableScroll);
