/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true, // Centers the container
      padding: {
        DEFAULT: "1rem", // Default padding for smaller screens
        sm: "2rem",
        lg: "5rem", // Increased padding on laptop screens
        xl: "6rem", // Further increase on extra-large screens
        "2xl": "8rem", // Maximum padding for very large screens
      },
    },
    extend: {
      colors: {
        primary: "#2323FF", // A bold blue for primary actions
        secondary: "#fe019a", // A vibrant purple for accents
        // neutral: "#64748b", // A grayish blue for text
        // background: "#f3f4f6", // A light gray background
        // danger: "#dc2626", // Red for error states
        // success: "#16a34a", // Green for success messages
        // warning: "#f59e0b", // Amber for warnings
      },
      fontFamily: {
        sans: ["Inter", "Roboto", "sans-serif"], // Clean and modern sans-serif fonts
        serif: ["Merriweather", "serif"], // Serif for formal text
        mono: ["Fira Code", "monospace"], // Monospace for code snippets
      },
      fontSize: {
        xs: "0.75rem", // Extra small (12px)
        sm: "0.875rem", // Small (14px)
        base: "1rem", // Base (16px)
        lg: "1.125rem", // Large (18px)
        xl: "1.25rem", // Extra large (20px)
        "2xl": "1.5rem", // 2x large (24px)
        "3xl": "1.875rem", // 3x large (30px)
        "4xl": "2.25rem", // 4x large (36px)
        "5xl": "3rem", // 5x large (48px)
        "6xl": "3.75rem", // 6x large (60px)
      },
      spacing: {
        128: "32rem", // Custom spacing (512px)
        144: "36rem", // Custom spacing (576px)
      },
      borderRadius: {
        sm: "0.125rem", // Small radius
        DEFAULT: "0.25rem", // Default radius
        md: "0.375rem", // Medium radius
        lg: "0.5rem", // Large radius
        xl: "0.75rem", // Extra large radius
        "2xl": "1rem", // 2x large radius
        full: "9999px", // Fully rounded
      },
      screens: {
        xs: "480px", // Extra small screens
      },
    },
  },
  plugins: [],
};
