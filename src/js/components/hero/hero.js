import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

export default {
	init() {
        // const wrp = document.querySelector('[data-tab-container]');
        // if(!wrp) return;

        gsap.to(".hero-special__background img", {
            "clip-path":
              "circle(105% at bottom)",
            scrollTrigger: {
                trigger: ".hero-special",
                start: "top top",
                end: "+=1000",
                pin: true,
                scrub: 1
              }
          }
          );

       

    //   const tl = gsap.timeline({
    //     scrollTrigger: {
    //         trigger : 'body',
    //         start: 500,
    //         toggleClass: {className: 'scrolled', targets: targetEl},
    //         end: () => {
    //         document.documentElement.scrollWidth
    //         },
    //         scrub: true
    //     }
	// 	  });
	}
};
