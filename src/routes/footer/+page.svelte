<script>
    import { onMount } from 'svelte'
    import anime from 'animejs'
    import "../../styles.css"
    import "../../app.css";


    function shootingStar() {
        var tl = anime.timeline({
            targets: '.shooting-star',
        });
            
        tl
        .add({
			targets: '.shooting-star',
			marginLeft: '80%',
			easing: 'easeInOutQuint',
			opacity: [5, 0],
			duration: 2500,
		})
        .add({
			targets: '.shooting-star',
			marginLeft: '-40%',
		});
	}
  
</script>

<p class="shooting-star absolute opacity-0 ml-[-40%]">. . . o</p>
<div class="footer text-center h-[50px]">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="image flex justify-center text-center" on:click={shootingStar}>
        <img class="cat w-[75%] md:w-[80%] lg:w-[40%] 2xl:w-[30%]" src="cat-stars.png" alt="" title="image by rain <3">
    </div>    
</div>
