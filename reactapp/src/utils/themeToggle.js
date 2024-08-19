// Function to toggle between light and dark themes
export function toggleTheme() {
    const body = document.body;
    const toggleButton = document.getElementById('theme-toggle');
    const isLightTheme = body.classList.toggle('light-theme');

    // Update button text based on theme
    if (isLightTheme) {
        toggleButton.textContent = 'Mörkt läge';
    } else {
        toggleButton.textContent = 'Ljust läge';
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
    } else {
        toggleButton.textContent = 'Light Theme';
    }
};