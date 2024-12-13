/**
 * Changes the theme of the website.
 *
 * @param {bool} darkMode - The current bool value of the state.
 */
export const changeTheme = (darkMode: boolean) => {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;

    if (darkMode) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
    document.documentElement.classList.toggle('dark');
};
