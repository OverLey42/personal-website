<script>
  import Lines from "./Line.svelte";
  import Header from "./Header.svelte";
  import Socials from "./Socials.svelte";
  import EasterEggs from "./EasterEggs.svelte";
  import Footer from "./Footer.svelte";
</script>

<main class="content min-h-[calc(100vh_-_40px)]">
  <Lines />

  <Header />

  <Socials />

  <EasterEggs />
</main>

<!-- The Footer is out of the "main" so the Footer is always on the bottom of the screen -->
<Footer />
