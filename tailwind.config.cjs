/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'inconsolata': ['Inconsolata', 'monospace'],
    },
    extend: {
        backgroundSize: {
            'size-200': '200% 200%',
        },
        backgroundPosition: {
            'pos-0': '0% 0%',
            'pos-100': '100% 100%',
        },
    },
  },
  plugins: [
  ],
}
