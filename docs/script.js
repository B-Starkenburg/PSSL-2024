function toggleMenu() {
    var mobsidebar = document.querySelector('.mobile-sidebar');
    var menubar = document.querySelector('.menu-icon');

    mobsidebar.classList.toggle('active');

    if (menubar.textContent != '×') {
        menubar.textContent = '×';
    }

    else {
        menubar.textContent = '☰ PSSL 109';
    }
}

window.onscroll = function() {toggleNavbarOpacity()};

function toggleNavbarOpacity() {
    var navbar = document.querySelector('.navbar');
    var sidebar = document.querySelector('.sidebar');
    
    if (window.pageYOffset > 50) { // Adjust the scroll distance as needed
        navbar.style.backgroundColor = "#333"; // Opaque background when scrolled
        sidebar.style.backgroundColor = "#444"; // Opaque background for sidebar
        navbar.style.color = "#b8860b";
    } else {
        navbar.style.backgroundColor = "transparent"; // Transparent background at the top
        sidebar.style.backgroundColor = "transparent"; // Transparent sidebar at the top
        navbar.style.color = "#fff";
    }
}