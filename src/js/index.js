import './polyfills';
import './utils/slideToggle';
import './utils/scroll';
import './utils/userAgent';

import libs from "./libs";

import { devices } from './utils/breakpoints';

// components
import input from './components/input';
import hint from './components/hint';
import sliders from './components/sliders/index';
import scroll from './components/scroll'
import ParallaxCard from './components/card-parallax/card-parallax';
import ParallaxMeaning from './components/parallax-meaning/parallax-meaning';
import hero from './components/hero/hero'
import cardInfo from './components/card-info/card-info';
import validation from './components/validation';
import FormHandler from './components/form-handler';
import ScrollAnimation from './components/scroll-animation/scroll-animation';

// Api

import DevServer from '../api/mock';

if (process.env.NODE_ENV === 'development') {
	window.devServer = new DevServer();
}

window.UPB = window.UPB || {};
window.breakpoints = devices;

__webpack_public_path__ = window.__webpack_public_path__ || '';


window.addEventListener('load', () => {
	setTimeout(()=>{
		document.documentElement.classList.add('is-loaded');
		new ScrollAnimation();
	},300);
});

document.addEventListener('DOMContentLoaded', () => {
	document.documentElement.classList.add('content-loaded');

	libs.init();

	input.init();
	hint.init();
	sliders.init();
	scroll.init();

	hero.init();

	validation.init();

	

	// Form handler
	new FormHandler();

	window.addEventListener('init.parallaxcard', () => {
		new ParallaxCard({
			init: true,
			wrap: '[data-move-target]',
			target: '[data-card-move]'
		});

		new ParallaxCard({
			init: true,
			wrap: '[data-wrap-inform]',
			target: '[data-inform-target]'
		});
	});

	window.addEventListener('init.parallaxmeaning', () => {
		new ParallaxMeaning({
			init: true,
			wrap: '[data-meaning-wrap]',
			target: '[data-meaning-card]'
		});
	});

	window.addEventListener('init.cardinfo', () => {
		new cardInfo ({
			init: true,
			btn: '[data-card-btn]',
			card: '[data-card-factoid]',
			height: 325
		});
	});

	//cardInfo

	window.dispatchEvent(new CustomEvent('init.parallaxcard'));
	window.dispatchEvent(new CustomEvent('init.parallaxmeaning'));
	window.dispatchEvent(new CustomEvent('init.cardinfo'));
});

window.addEventListener('reinit', () => {
	libs.init();

	input.init();
	hint.init();
	sliders.init();
	validation.init();
	new ScrollAnimation();

	window.dispatchEvent(new CustomEvent('init.parallaxcard'));
});
