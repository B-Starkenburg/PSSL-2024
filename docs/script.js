function toggleMenu() {
    var sidebar = document.querySelector('.sidebar');
    if (sidebar.style.display === 'block') {
        sidebar.style.display = 'none';
    } 
    if (sidebar.style.display === 'none') {
        sidebar.style.display = 'block';
    }
}
