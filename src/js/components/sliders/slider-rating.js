import Slider from "./constructor";
import render from '../../utils/render';
import { debounce } from 'throttle-debounce';
import { isMob } from '../../utils/breakpoints';

export default {
	init() {
		const slider = new Slider({
			init: true,
			wrap: '[data-slider-rating]',
			slider: '[data-slider]',
			prev: '[data-nav-arrow-prev]',
			next: '[data-nav-arrow-next]',
			iOSEdgeSwipeDetection: true,
			options: {
				slidesPerView: 1,
				loop: false,
				speed: 800,
				a11y: false,
				observer: true,
				observeParents: true,
				spaceBetween: 8,
				pagination: {
					el: '[data-nav-count]',
					type: 'custom',
					renderCustom: render.renderFraction
				},
				lazy: {
					loadPrevNext: true,
					elementClass: 'swiper-lazy',
				},
				breakpoints: {
					[window.breakpoints.lg]: {
						slidesPerView: 3
					},
					[window.breakpoints.md]: {
						slidesPerView: 2
					}
				}
			},
			paginationSelector: '[data-nav-count]'
		});

		// window.addEventListener(
		// 	'load',
		// 	debounce(300, () => {
		// 		if (isMob()) {
		// 			slider.swiper.destroy();
		// 		}
		// 	})
		// );
	}
};
