export default {
	init() {
		const toggles = document.querySelectorAll('[data-lang-toggle]');
		if (!toggles.length > 0) return;

		//console.log(toggles);

		toggles.forEach((toggle) => {

			const action = toggle.querySelector('[data-action]');
			if (!action) return;

			action.addEventListener('click', () => {
				toggle.classList.toggle('is-active');
			});

			document.addEventListener('click', (e) => {
				if (!e.target.closest('[data-lang-toggle]')) {
					toggle.classList.remove('is-active');
				}
			});
		});

		// const actions = toggles.querySelectorAll('[data-action]');
		// if (!actions.length > 0) return;

		// actions.addEventListener('click', () => {
		// 	toggles.classList.toggle('is-active');
		// });

		
	},
};
