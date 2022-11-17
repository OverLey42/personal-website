import adapter from 'svelte-adapter-deno';
import preprocess from 'svelte-preprocess';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
		  // default options are shown
		  out: 'build',
		  deps: './deps.ts' // (relative to adapter-deno package)
		})
	  },
	preprocess: [
		preprocess({
		  postcss: true,
		}),
	],
};

export default config;