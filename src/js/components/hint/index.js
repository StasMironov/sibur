import tippy from 'tippy.js';

export default {
	init() {
		const hints = document.querySelectorAll('[data-hint]');

		for (let i = 0; i < hints.length; i++) {
			const hint = hints[i];

			const field = hint.closest('.field');
			const boundary = field ? field : document.body;

			if (hint.hasAttribute('data-initialize')) continue;

			const init = tippy(hint, {
				content(reference) {
					return reference.getAttribute('data-hint-content');
				},
				arrow: false,
				maxWidth: '16rem',
				placement: 'bottom-end',
				animation: 'shift-toward',
				offset: [0, 11], // x, y
				trigger: 'mouseenter focus',
				interactive: false,
				appendTo: boundary
			});

			hint.setAttribute('data-initialize', '');

			$(hint).on('mouseenter focus', ()=>{
				let inputEl = $(hint).closest('.input-shell')
				inputEl.addClass('active');
			});

			$(hint).on('mouseleave blur', ()=>{
				
				let inputEl = $(hint).closest('.input-shell')
				inputEl.removeClass('active');
				console.log(inputEl);
			});
		}
	}
};
