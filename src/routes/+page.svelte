<script>
	import { onMount } from 'svelte'
	import Lines from './lines/+page.svelte';
	import Footer from './footer/+page.svelte';
	import anime from 'animejs'
	import "../styles.css"
	import "../app.css";

	

	onMount(()=> {
		// There is probably a better solution when this lol
		
		const mediaQuery = window.matchMedia('(min-width: 1024px)');
		
		// Check if the media query is true, for the specific animation
		if (mediaQuery.matches) {
			// Then trigger an alert
			// (Computer)
			anime({
				targets: '.header',
				fontSize: '10vw',
				easing: 'easeInOutQuint',
				opacity: 100,
				duration: 1500,
			});
		} else {
			// (mobile)
			anime({
				targets: '.header',
				fontSize: '22vw',
				easing: 'easeInOutQuint',
				opacity: 100,
				duration: 1500,
			});
		  }

		mediaQuery.addEventListener("change", (event) => {
			// Check if the media query is changed, for the specific size
			if (event.matches) {
				// (Computer)
				anime({
					targets: '.header',
					fontSize: '10vw',
					easing: 'easeInOutQuint',
					opacity: 100,
					duration: 1500,
				});
			} else {
				// (mobile)
				anime({
					targets: '.header',
					fontSize: '22vw',
					easing: 'easeInOutQuint',
					opacity: 100,
					duration: 1500,
				});
			}
		});
    });
</script>

<main class="content min-h-[calc(100vh_-_40px)]">

	<Lines></Lines>

	<h1 class="header font-mono font-extrabold text-transparent xl:text-[2vw] text-[8vw] bg-clip-text bg-gradient-to-r text-center mt-32 bg-[#141414] to-[#141414] via-purple-500 from-[#e20f8a] bg-size-200 bg-pos-0">OverLey</h1>

	<div class="social flex flex-col justify-center text-center">
		<h1>Socials</h1>
		<div class="social-child flex flex-wrap outline outline-offset-8 rounded-xl text-center p-10 m-12 ml-88 mr-[12vw] ml-[12vw]">
			<div class="flex-grow">
				<h1><img class="rounded-full h-6 w-6 inline-block" src="https://imgs.search.brave.com/ij3t5KLpcnSaGFABUAAdPh9IARp5fsbQSBZBRQC7UWE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9sb2dv/cy1kb3dubG9hZC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTYvMDkvR2l0SHVi/X2xvZ28ucG5n" alt=""> GitHub</h1>
				<div class="github hover:-translate-y-1 hover:scale-110 transition-all duration-500 bg-[#141414] hover:bg-gradient-to-l to-[#141414] via-purple-500 hover:duration-1000 from-[#141414] bg-size-200 bg-pos-0 hover:bg-pos-100 outline-offset-4 p-7 justify-center rounded-xl shadow-lg flex items-center space-x-4 m-4 w-auto">
					<div class="shrink-0">
					  <img class="rounded-full h-12 w-12" src="https://avatars.githubusercontent.com/u/73314792?v=4" alt="ChitChat Logo">
					</div>
					<div>
					  <h1>OverLey</h1>
					  <p>overley24</p>
					</div>
				</div>
			</div>
			
			<div class="flex-grow">
				<h1><img class="rounded-full h-6 w-6 inline-block" src="https://imgs.search.brave.com/ij3t5KLpcnSaGFABUAAdPh9IARp5fsbQSBZBRQC7UWE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9sb2dv/cy1kb3dubG9hZC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTYvMDkvR2l0SHVi/X2xvZ28ucG5n" alt=""> GitHub</h1>
				<div class="github hover:-translate-y-1 hover:scale-110 transition-all duration-500 bg-[#141414] hover:bg-gradient-to-l to-[#141414] via-purple-500 hover:duration-1000 from-[#141414] bg-size-200 bg-pos-0 hover:bg-pos-100 outline-offset-4 p-7 justify-center rounded-xl shadow-lg flex items-center space-x-4 m-4 min-w-[100px] w-auto">
					<div class="shrink-0">
					  <img class="rounded-full h-12 w-12" src="https://avatars.githubusercontent.com/u/73314792?v=4" alt="ChitChat Logo">
					</div>
					<div>
					  <h1>OverLey</h1>
					  <p>overley24</p>
					</div>
				</div>
			</div>
	
			<div class="flex-grow">
				<h1><img class="rounded-full h-6 w-6 inline-block" src="https://imgs.search.brave.com/ij3t5KLpcnSaGFABUAAdPh9IARp5fsbQSBZBRQC7UWE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9sb2dv/cy1kb3dubG9hZC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTYvMDkvR2l0SHVi/X2xvZ28ucG5n" alt=""> GitHub</h1>
				<div class="github hover:-translate-y-1 hover:scale-110 transition-all duration-500 bg-[#141414] hover:bg-gradient-to-l to-[#141414] via-purple-500 hover:duration-1000 from-[#141414] bg-size-200 bg-pos-0 hover:bg-pos-100 outline-offset-4 p-7 justify-center rounded-xl shadow-lg flex items-center space-x-4 m-4 min-w-[100px] w-auto">
					<div class="shrink-0">
					  <img class="rounded-full h-12 w-12" src="https://avatars.githubusercontent.com/u/73314792?v=4" alt="ChitChat Logo">
					</div>
					<div>
					  <h1>OverLey</h1>
					  <p>overley24</p>
					</div>
				</div>
			</div>
	
			<div class="flex-grow">
				<h1><img class="rounded-full h-6 w-6 inline-block" src="https://imgs.search.brave.com/ij3t5KLpcnSaGFABUAAdPh9IARp5fsbQSBZBRQC7UWE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9sb2dv/cy1kb3dubG9hZC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTYvMDkvR2l0SHVi/X2xvZ28ucG5n" alt=""> GitHub</h1>
				<div class="github hover:-translate-y-1 hover:scale-110 transition-all duration-500 bg-[#141414] hover:bg-gradient-to-l to-[#141414] via-purple-500 hover:duration-1000 from-[#141414] bg-size-200 bg-pos-0 hover:bg-pos-100 outline-offset-4 p-7 justify-center rounded-xl shadow-lg flex items-center space-x-4 m-4 min-w-[100px] w-auto">
					<div class="shrink-0">
					  <img class="rounded-full h-12 w-12" src="https://avatars.githubusercontent.com/u/73314792?v=4" alt="ChitChat Logo">
					</div>
					<div>
					  <h1>OverLey</h1>
					  <p>overley24</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>

<Footer></Footer>