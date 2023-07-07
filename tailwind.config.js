/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["'Inter'", "san-serif"],
            },
            keyframes: {
                "slide-right": {
                    "0%": {
                        "-webkit-transform": "translateX(-500px)",
                        transform: "translateX(-500px)",
                    },
                    "100%": {
                        "-webkit-transform": "translateX(0)",
                        transform: "translateX(0)",
                    },
                },

                "slide-left": {
                    "0%": {
                        "-webkit-transform": "translateX(500px)",
                        transform: "translateX(500px)",
                    },
                    "100%": {
                        "-webkit-transform": "translateX(0)",
                        transform: "translateX(0)",
                    },
                },
                "slide-left2": {
                    "0%": {
                        "-webkit-transform": "translateX(500px)",
                        transform: "translateX(500px)",
                    },
                    "100%": {
                        "-webkit-transform": "translateX(0)",
                        transform: "translateX(0)",
                    },
                },
            },
            animation: {
                "slide-right":
                    "slide-right 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
                "slide-left":
                    "slide-left 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
                "slide-left2":
                    "slide-left2 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
            },
            colors: {
                blur: {
                    100: "#ffffff80",
                },
                main: {
                    100: "#1b2639",
                    200: "#0f1a2e",
                    300: "#111f3b",
                },
                hightlight: {
                    100: "#158370",
                },
            },
            borderColor: {
                main: "#ffffff0d",
            },
        },
        screens: {
            1600: "1600px",
        },
    },
    plugins: [],
};
