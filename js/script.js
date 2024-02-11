const checkbox = document.getElementById("checkbox");
const sidebar = document.querySelector(".sidebar");
const content = document.querySelector(".content");
const labelDarkLight = document.querySelector(".dark-light");

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

  // Function to toggle popup on touch events
  function togglePopup(event) {
    const popup = this.querySelector(".popup-text");
    if (popup) {
      popup.classList.toggle("show");
      event.preventDefault(); // Prevent link navigation
    }
  }

  // Add touch event listener to each navigation link
  navLinks.forEach((link) => {
    link.addEventListener("click", togglePopup); // For tap event
    link.addEventListener("touchstart", togglePopup); // For long press event
  });
});
