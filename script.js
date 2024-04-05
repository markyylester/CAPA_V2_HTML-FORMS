const dropdownToggle = document.querySelector(".dropdown-toggle");
const submenuToggles = document.querySelectorAll(".submenu-toggle");
const menu = document.querySelector(".menu");

// Toggle the dropdown menu when the toggle button is clicked
dropdownToggle.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent event from bubbling up to document
    menu.classList.toggle("open");
});

// Toggle submenus when their toggle buttons are clicked
submenuToggles.forEach((toggle) => {
    toggle.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent event from bubbling up to document
        const submenu = toggle.nextElementSibling;
        submenu.classList.toggle("open");
    });
});

// Close dropdown when clicking outside of it
document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !dropdownToggle.contains(e.target)) {
        menu.classList.remove("open");
    }
});