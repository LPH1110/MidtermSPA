/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            keyframes: {
                slideIn: {
                    from: { transform: 'translate(-100%, 0)', opacity: 0 },
                    to: { transform: 'translate(0, 0)', opacity: 1 },
                },
                scrollIn: {
                    from: { transform: 'translate(0, -100%)', opacity: 0 },
                    to: { transform: 'translate(0, 0)', opacity: 1 },
                },
            },
            animation: {
                slideIn: 'slideIn 1.25s ease-in-out',
                scrollIn: 'scrollIn 1.25s ease-in-out',
            },
        },
    },
    plugins: [require('@headlessui/tailwindcss')({ prefix: 'ui' })],
};
