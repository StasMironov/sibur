import lazyload from './lazyload';
import mask from './mask';

window.jQuery = $;

export default {
	init() {
		lazyload.init();
		mask.init();
	},
};
