import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

export default {
	init() {
        const targetEl = '[data-anchors]'; 

       const tl = gsap.timeline({
            scrollTrigger: {
                trigger : 'body',
                start: 0,
                toggleClass: {className: 'scrolled', targets: targetEl},
                end: () => {
                document.documentElement.scrollWidth
                },
                scrub: true
            }
		});
	}
};
