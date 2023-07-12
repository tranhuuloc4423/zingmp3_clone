/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ["'Inter'", 'san-serif'],
            },
            keyframes: {
                'slide-right': {
                    '0%': {
                        '-webkit-transform': 'translateX(-500px)',
                        transform: 'translateX(-500px)',
                    },
                    '100%': {
                        '-webkit-transform': 'translateX(0)',
                        transform: 'translateX(0)',
                    },
                },

                'slide-left': {
                    '0%': {
                        '-webkit-transform': 'translateX(500px)',
                        transform: 'translateX(500px)',
                    },
                    '100%': {
                        '-webkit-transform': 'translateX(0)',
                        transform: 'translateX(0)',
                    },
                },
                'slide-left2': {
                    '0%': {
                        '-webkit-transform': 'translateX(500px)',
                        transform: 'translateX(500px)',
                    },
                    '100%': {
                        '-webkit-transform': 'translateX(0)',
                        transform: 'translateX(0)',
                    },
                },
                'scale-up': {
                    '0%': {
                        '-webkit-transform': 'scale(1)',
                        transform: 'scale(1)',
                    },
                    '100%': {
                        '-webkit-transform': 'scale(1.15)',
                        transform: 'scale(1.15)',
                    },
                },
                'scale-down': {
                    '0%': {
                        '-webkit-transform': 'scale(1.15)',
                        transform: 'scale(1.15)',
                    },
                    '100%': {
                        '-webkit-transform': 'scale(1)',
                        transform: 'scale(1)',
                    },
                },
                'rotate-center': {
                    from: {
                        '-webkit-transform': 'rotate(0)',
                        transform: 'rotate(0)',
                    },
                    to: {
                        '-webkit-transform': 'rotate(360deg)',
                        transform: 'rotate(360deg)',
                    },
                },
                'rotate-pause': {
                    from: {
                        '-webkit-transform': 'rotate(0)',
                        transform: 'rotate(0)',
                        'border-radius': '9999px',
                    },
                    to: {
                        '-webkit-transform': 'rotate(360deg)',
                        transform: 'rotate(360deg)',
                        'border-radius': '0',
                    },
                },
            },
            animation: {
                'slide-right': 'slide-right 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
                'slide-left': 'slide-left 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
                'slide-left2': 'slide-left2 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
                'scale-up': 'scale-up 1s ease both;',
                'scale-down': 'scale-down 1s ease both;',
                'rotate-center': 'rotate-center 12s linear infinite both;',
                'rotate-pause': 'rotate-pause 0.5s ease 1 both;',
            },
            colors: {
                blur: {
                    100: '#ffffff80',
                },
                main: {
                    100: '#231b2e',
                    200: '#170f23',
                    300: '#130c1c',
                },
                hightlight: {
                    100: '#9b4de0',
                },
                overlay: {
                    100: 'rgba(0, 0, 0, 0.1)',
                    300: 'rgba(0, 0, 0, 0.3)',
                    500: 'rgba(0, 0, 0, 0.5)',
                },
            },
            borderColor: {
                main: '#2b2533',
            },
        },
        screens: {
            1600: '1600px',
        },
    },
    plugins: [],
};
