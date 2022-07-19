import lazyload from './lazyload';
import mask from './mask';

window.jQuery = $;

export default {
	init() {
		require('./jquery.inputmask.bundle');
		require('./jquery.inputmask-multi');
		lazyload.init();
		mask.initMask();
	},
};
