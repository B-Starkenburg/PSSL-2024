function toggleMenu() {
    var sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
}

window.onscroll = function() {toggleNavbarOpacity()};

function toggleNavbarOpacity() {
    var navbar = document.querySelector('.navbar');
    var sidebar = document.querySelector('.sidebar');
    
    if (window.pageYOffset > 50) { // Adjust the scroll distance as needed
        navbar.style.backgroundColor = "#333"; // Opaque background when scrolled
        sidebar.style.backgroundColor = "#444"; // Opaque background for sidebar
    } else {
        navbar.style.backgroundColor = "transparent"; // Transparent background at the top
        sidebar.style.backgroundColor = "transparent"; // Transparent sidebar at the top
    }
}