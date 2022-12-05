<script>
    import { onMount } from 'svelte'
	import anime from 'animejs'
    import "../styles.css"
	import "../app.css";


    onMount(()=> {
        console.log(`%c

                ★°..　　　　.　☾°☆　.*●¸.　　　★　°:.　.•○°★　.　*　.　　　　　.
        　°　.●.　　　　°☾°☆　¸.●.　　★　　★°☾☆¸.¸　★　:.　.•○°★　.　*　.
        　.　　¸.　　°　¸.*●¸.　　　　°☾°　¸.●¸.　　★　°:.　.•°　.　*　:.　.　¸.
        ●¸　　　★　　★☾°★.　　　　.　°☆　.●¸.　　　★　°.　•○°★　.
        　　　　　　　*　.　☾°　¸.*●¸　　　　°☾°☆　.*¸.　　　★　
        ★°..　　　　.　☾°☆　.*●¸.　　　★　°:.　.•○°★　.　*　.　　　　.　°　.
        ●.　　　　°☾°☆　¸.●.　　★　　★°☾☆¸.¸　★　:.　.•○°★　.　*　.　.
        　.　　¸.　　°　¸.*●¸.　　°☾°　¸.●¸.　　★　°:.　.•°
                #
                                            #
                                ^..^ #####
                                =TT=      ;
                                #########
                                # #   # #    lmg (cat)
                                M M   M M
        `, `font-family: monospace`);

        document.addEventListener('keyup', function(event){
        if(event.key==="c"){
            console.log('You have pressed the Tab key');
            anime({
                targets: 'body',
                rotate: 360,
                easing: 'easeInOutQuint',
                opacity: 100,
                duration: 1500,
            });
        }

        });
    });
</script>
