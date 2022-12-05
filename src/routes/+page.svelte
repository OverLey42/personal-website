<script>
	import { onMount } from 'svelte'
	import anime from 'animejs'
	import Lines from './lines/+page.svelte';
	import Header from './Header.svelte';
	import Socials from './Socials.svelte';
	import EasterEggs from './EasterEggs.svelte';
	import Footer from './footer/+page.svelte';
	import "../styles.css"
	import "../app.css";
</script>

<main class="content min-h-[calc(100vh_-_40px)]">

	<Lines></Lines>

	<Header></Header>

	<Socials></Socials>

	<EasterEggs></EasterEggs>

</main>

<!-- The Footer is out of the "main" so the Footer is always on the bottom of the screen -->
<Footer></Footer>
