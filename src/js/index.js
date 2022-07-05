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

window.UPB = window.UPB || {};
window.breakpoints = devices;

__webpack_public_path__ = window.__webpack_public_path__ || '';

document.addEventListener('DOMContentLoaded', () => {
	document.documentElement.classList.add('content-loaded');

	libs.init();

	input.init();
	hint.init();
	sliders.init();
});

window.addEventListener('reinit', () => {
	libs.init();

	input.init();
	hint.init();
	sliders.init();
});
