<script>
    import { onMount } from 'svelte'
    import anime from 'animejs'
    import "../styles.css"
	import "../app.css";

    
    onMount(()=> {
        // There is probably a better solution for this lol
                
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
     })
</script>

<h1 class="header font-extrabold text-transparent xl:text-[2vw] text-[8vw] bg-clip-text bg-gradient-to-r text-center bg-[#141414] to-[#141414] via-purple-500 from-[#e20f8a] bg-size-200 bg-pos-0 mt-14 sm:mt-32">OverLey</h1>
