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
                'slide-right2': {
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
                appear: {
                    from: {
                        opacity: 0,
                    },
                    to: {
                        opacity: 1,
                    },
                },
            },
            animation: {
                'slide-right': 'slide-right 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
                'slide-right2': 'slide-right2 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
                'slide-left': 'slide-left 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
                'slide-left2': 'slide-left2 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
                'scale-up': 'scale-up 0.75s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
                'scale-down': 'scale-down 0.75s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
                'rotate-center': 'rotate-center 18s linear infinite both;',
                'rotate-pause': 'rotate-pause 0.5s ease 1 both;',
                appear: 'appear 0.75s ease both;',
            },
            colors: {
                blur: {
                    100: '#ffffff80',
                    200: '#6D6875',
                    300: 'rgba(255,255,255, 0.1)',
                    400: '#ffffff59',
                },
                main: {
                    0: '#2F2739',
                    100: '#231b2e',
                    200: '#170f23',
                    300: '#130c1c',
                    400: '#493961',
                    500: '#34224F',
                },
                hightlight: {
                    100: '#9b4de0',
                },
                overlay: {
                    100: 'rgba(0, 0, 0, 0.1)',
                    300: 'rgba(0, 0, 0, 0.3)',
                    500: 'rgba(0, 0, 0, 0.5)',
                    600: 'rgb(45, 34, 63, 0.8)',
                    700: 'rgba(32,19,53,0.9)',
                    white: 'rgba(255,255,255, 0.3)',
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
