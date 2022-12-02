<script>
    import { onMount } from 'svelte'
    import anime from 'animejs'
    import "../../styles.css"
    import "../../app.css";


        function test() {
			console.log("test");
            anime({
				targets: '.stars',
				marginLeft: '80%',
				easing: 'easeInOutQuint',
				opacity: [10, 0],
				duration: 3500,
			});
	}
  
</script>

<p class="stars opacity-1 ml-[5%]">. . . o</p>
<div class="footer text-center h-[50px]">
    <div class="image flex justify-center text-center" on:click={test}>
        <img class="cat w-[75%] md:w-[80%] lg:w-[40%] 2xl:w-[40%]" src="cat-stars.png" alt="" title="image by rain <3">
    </div>    
</div>






