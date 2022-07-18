import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);




export default class ParallaxCard {
	constructor(props) {

		this.init = props.init;
		this.wrap = props.wrap;
		this.target = props.target;

		if (this.init) {
			this.render();
		}
	}

	render() {
		if (!document.querySelector(this.wrap)) return;
		const wrap = this.wrap;
		const target = this.target;

		console.log('cards move');

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
				target,
				{
					yPercent: 0
				},
				{
					yPercent: -35
				}
			)
	}
}
