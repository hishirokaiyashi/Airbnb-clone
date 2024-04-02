/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "text-base": "1rem", // tùy chọn fontSize tùy chỉnh với tên 'text-base' và giá trị là 1rem
        "text-h3-footer": "1.375rem",
      },
      colors: {
        textColorFooter: "#717171",
      },
      maxWidth: {
        maxWidthHomePage: "1760px",
      },
      lineHeight: {
        textHeightNav: "1.25rem",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active", "hover"], // Thêm các biến cho backgroundColor
      textColor: ["active", "hover"], // Thêm các biến cho textColor
    },
  },
  plugins: [],
};
