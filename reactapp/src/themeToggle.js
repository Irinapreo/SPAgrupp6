// Function to toggle between light and dark themes
function toggleTheme() {

    const body = document.body;
    const toggleButton = document.getElementById('theme-toggle');
    const isLightTheme = body.classList.toggle('light-theme');

    // Toggle navbar class
    const navbar = document.querySelector('.navbar');
    if (isLightTheme) {
        toggleButton.textContent = 'Dark Theme';
        toggleButton.style.backgroundColor = '#1F2833';
        toggleButton.style.color = '#E4EDFC';
    } else {
        toggleButton.textContent = 'Light Theme';
        toggleButton.style.backgroundColor = '#E4EDFC';
        toggleButton.style.color = '#1F2833';
    }

    // Store the user's preference in localStorage
    localStorage.setItem('theme', isLightTheme ? 'light' : 'dark');
}

// Apply the theme based on localStorage when the page loads
window.onload = function () {
    const theme = localStorage.getItem('theme');
    const toggleButton = document.getElementById('theme-toggle');
    if (theme === 'light') {
        document.body.classList.add('light-theme');
        toggleButton.textContent = 'Dark Theme';
        toggleButton.style.backgroundColor = '#1F2833'; // Dark background color
        toggleButton.style.color = '#E4EDFC'; // Light text color
    } else {
        toggleButton.textContent = 'Light Theme';
        toggleButton.style.backgroundColor = '#E4EDFC'; // Light background color
        toggleButton.style.color = '#1F2833'; // Dark text color
    }
};