import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

export default {
	init() {
        const wrp = document.querySelector('[data-tab-container]');
        if(!wrp) return;

        const menuAnchors =  wrp.querySelector('[data-anchors]');
        const targetEl = '[data-anchors-target]'; 

        const wrapNav = document.querySelector(targetEl)
        let sections = document.querySelectorAll('[data-section]');

        const tabsStatic = menuAnchors.querySelectorAll('[data-scroll]');
        const tabs = wrapNav.querySelectorAll('[data-scroll]');
        
        sections = gsap.utils.toArray('[data-section]');

        sections.forEach(function(section, index){
            ScrollTrigger.create({
                trigger:section,
                start:"top-=90 center",
                end:"bottom center",
                toggleClass:{targets: tabs[index], className:"tab--active"},
              //  onEnter: () => tabs[index].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
            })

            ScrollTrigger.create({
                trigger:section,
                start:"top-=90 center",
                end:"bottom center",
                toggleClass:{targets: tabsStatic[index], className:"tab--active"},
              //  onEnter: () => tabsStatic[index].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
              })
        })

       const tl = gsap.timeline({
            scrollTrigger: {
                trigger : 'body',
                start: 500,
                toggleClass: {className: 'scrolled', targets: targetEl},
                end: () => {
                document.documentElement.scrollWidth
                },
                scrub: true
            }
		});
	}
};
