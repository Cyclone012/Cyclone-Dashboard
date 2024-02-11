const checkbox = document.getElementById("checkbox");
const sidebar = document.querySelector(".sidebar");
const content = document.querySelector(".content");

// Function to set the theme based on the checkbox state
function setTheme() {
  if (checkbox.checked) {
    document.body.classList.add("light");
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.remove("light");
    localStorage.setItem("theme", "dark");
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
