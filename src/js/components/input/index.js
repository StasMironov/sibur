import {throttle} from 'throttle-debounce';

export default {
	init() {
		const inputs = document.querySelectorAll('input.input');

		for (let i = 0; i < inputs.length; i++) {
			const input = inputs[i];

			if (input.hasAttribute('data-initialize')) continue;

			if (input.value) {
				input.classList.add('filled');
			}

			input.addEventListener('input', throttle(300, (e) => {
				const value = e.target.value;

				if (value) {
					input.classList.add('filled')
				} else {
					input.classList.remove('filled')
				}
			}));

			input.setAttribute('data-initialize', '');
		}

		const textareaEls = document.querySelectorAll('textarea');

		

		for (let i = 0; i < textareaEls.length; i++) {
			const textarea = textareaEls[i];

			if (textarea.hasAttribute('data-initialize')) continue;

			if (textarea.value) {
				textarea.classList.add('filled');
			}

			textarea.addEventListener('input', throttle(300, (e) => {
				const value = e.target.value;

				if (value) {
					textarea.classList.add('filled')
				} else {
					textarea.classList.remove('filled')
				}
			}));

			textarea.setAttribute('data-initialize', '');
		}
	}
};
