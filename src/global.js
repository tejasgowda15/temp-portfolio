
// global.js

// Theme Colors
export const colors = {
    primary: "#3498db",
    secondary: "#2ecc71",
    background: "#f4f4f4",
    text: "#333",
};

// Font family
export const fontFamily = "'Arial', sans-serif";

// Example reusable function
export function applyTheme() {
    document.body.style.backgroundColor = colors.background;
    document.body.style.color = colors.text;
}
