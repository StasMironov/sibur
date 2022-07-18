import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);




export default class ParallaxCard {
	constructor(props) {
        this.supportsTouch = 'ontouchstart' in document.documentElement;
		this.init = props.init;
		this.wrap = props.wrap;
		this.target = props.target;

		if (this.init) {
			this.render();
		}
	}

	render() {
        if (this.supportsTouch) return;

		if (!document.querySelector(this.wrap)) return;
		const wrap = this.wrap;
		const wrapEl = document.querySelector(this.wrap);
        const targetEl = wrapEl.querySelector(`${this.target} img`);

		const tl = gsap.timeline({
			scrollTrigger: {
			trigger : wrap,
			start: 'top top',
			end: 'bottom top',
			scrub: true
			}
		});

		tl
			.fromTo(
				targetEl,
				{
                    scale: 1
				},
				{
					scale: 1.15
				}
			)
	}
}
