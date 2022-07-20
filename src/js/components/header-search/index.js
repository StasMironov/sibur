import gsap from 'gsap';
import {debounce} from "throttle-debounce";

export default class HeaderSearch {
	constructor() {
		this.header = document.querySelector('header.header');
		if (!this.header) return;

		this.body = document.body;

		this.searchResult = this.header.querySelector('[data-header-search-result]')
		this.field = this.header.querySelector('[data-field]');
		this.reset = this.header.querySelector('[data-reset]');
		this.submit = this.header.querySelector('[data-submit]');
		this.searchToggle = this.header.querySelector('[data-search-toggle]');
		this.headerContent = this.header.querySelector('[data-header-content]');
		this.searchWrap = this.header.querySelector('[data-header-search]');
		this.timeline = gsap.timeline({
			paused: true
		});

		if (!this.searchResult || !this.field || !this.reset || !this.submit || !this.searchToggle || !this.headerContent || !this.searchWrap) return;

		this.render();
	}

	render() {
		
		this.timeline
			.fromTo(this.headerContent,
				{
					opacity: 1,
				},
				{
					opacity: 0,
					duration: '0.3',
					ease: 'power1.out'
				})
			.set(this.headerContent,
				{
					display: 'none'
				})
			.set(this.searchWrap, {display: 'block'})
			.fromTo(this.searchWrap,
				{
					opacity: 0,
				},
				{
					opacity: 1,
					duration: '0.3',
					ease: 'power1.out'
				})
			.set(this.searchResult,
				{
					display: 'block'
				}, 0)
			.fromTo(this.searchResult,
				{
					opacity: 0
				}, {
					opacity: 1,
					duration: '0.3',
					ease: 'power1.out'
				}, 0.3);

		this.searchToggle.addEventListener('click', () => {
			this.timeline.play();
		});

		document.addEventListener('click', (e) => {
			if (!e.target.hasAttribute('data-header') && !e.target.closest('header.header')) {
				this.timeline.reverse();
			}
		});

		const fieldName = this.field.getAttribute('name');
		const url = this.field.getAttribute('data-url');

		this.field.addEventListener('input', debounce(300, async (e) => {
			const value = e.target.value;

			if (value.length) {
				this.field.classList.add('filled');
			} else {
				this.field.classList.remove('filled');
			}

			if (value.length > 2) {
				await this.sendRequest(value, fieldName, url);
			} else {
				this.searchResult.innerHTML = '';
			}
		}));

		this.reset.addEventListener('click', () => {
			this.field.value = '';
			this.searchResult.innerHTML = '';

			const event = new Event('input',
				{
					"bubbles": false,
					"cancelable": false
				});

			this.field.dispatchEvent(event);
		});
	}

	async sendRequest(query, name, url) {
		const finalUrl = `${url}${[url.indexOf('?') >= 0 ? '&' : '?', `${name}=${query}`].join('')}`;
		const response = await this.getResult(finalUrl);

		if (response) {
			this.responseHandler(response);
		}
	}

	async getResult(url) {
		try {
			const result = await fetch(url, {
				headers: {
					'X-Requested-With': 'XMLHttpRequest',
					'Content-Type': 'multipart/form-data',
				}
			});
			if (!result.ok) {
				console.log('we have some fetching error');
			}

			return await result.text();
		} catch (e) {
			console.log(e);
		}
	}

	responseHandler(response) {
		this.searchResult.innerHTML = response;
	}
};
