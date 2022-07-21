import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { isMob } from '../../utils/breakpoints';
import {debounce} from "throttle-debounce";

gsap.registerPlugin(ScrollTrigger);




export default class cardInfo {
	constructor(props) {

		this.init = props.init;
		this.btn = props.btn;
		this.card = props.card;
        this.heightCard = '';
        this.offset = 20;
        this.ratio = false;

		if (this.init) {
            
			this.render();
		}
	}

    handleCard(){
        let buttons = this.getBtn();

        buttons.forEach((button, index)=>{
            button.addEventListener('click', () => {
                this.hideCard();
                this.showActiveCard(button, index, this.ratio);
            })
        });
    }

    getCards(){
        if(document.querySelectorAll(this.card).length > 0) {
            let cards = document.querySelectorAll(this.card);
            return cards;
        }
    }

    getOffsetWrap(){
        if(!document.querySelector(".block-type")) return;
        let block = $(".block-type").parent()[0].offsetTop + $(".block-type").parent().outerHeight();
        return block;
    }

    getOffsetCard(card){
        if(!card) return;
        let innerBlock = card.offsetTop + $(card).children().outerHeight();
        return innerBlock;
    }

    hideCard(){
        let buttons = this.getBtn();
        
        buttons.forEach((btn, j)=>{
            btn.classList.remove('active');
            this.getCards()[j].classList.remove('active');
            $(this.getCards()[j]).closest('.block-type__item').removeClass('active');
            gsap.to(this.getCards()[j], 0.3, {autoAlpha:0});
            gsap.to(this.getCards()[j], 0.3, {height: 0});
        });
    }

    setCard(props){
        let cards = this.getCards();
        let state = Array.from(cards).filter(card=>card.classList.contains('active'));
        $(state).closest('.block-type__item').addClass('active');

        if(state.length){
            gsap.set(state, {autoAlpha:1, height: this.getHeightCard(props).cardAnimHeight});   
        }
        return state;
    }

    showActiveCard(card, index, props){
        if(!card.classList.contains('active')){
            card.classList.add('active');
            this.getCards()[index].classList.add('active');
            $(this.getCards()[index]).closest('.block-type__item').addClass('active');
            gsap.fromTo( this.getCards()[index], {height: 0}, {height:this.getHeightCard(props).cardAnimHeight});

            gsap.fromTo(this.getCards()[index], {y: ($(this.getCards()[index]).children().outerHeight())/2, autoAlpha:0},{autoAlpha: 1, y: ()=>{   
              
                if(!this.ratio){
                   return !(this.getOffsetWrap() > this.getOffsetCard(this.getCards()[index])) ? -($(this.getCards()[index]).children().outerHeight()) + $(this.getCards()[index]).parent().outerHeight()  : 20;
                } else {
                    return 0;
                }
                
            }})
        }

    }

    getHeightCard(props){
        if(document.querySelectorAll(this.card).length > 0) {
            let cardHeight = $(this.card).children().outerHeight();
            this.heightCard =  !props ? 0 : cardHeight;
           
            return {cardHeight: cardHeight, cardAnimHeight: this.heightCard};
        }
    }

    getBtn(){
        if(document.querySelectorAll(this.btn).length > 0) {
            const btns = document.querySelectorAll(this.btn);
            return btns;
        }
    }

    resizeWindow(){
        if (!isMob()) {
            this.ratio = false
            this.setCard(false);
        } else {
            this.ratio = true;
            this.setCard(true);
        }
    }

	render() {
        $(window).resize(()=>{
            this.resizeWindow()
        });

        this.resizeWindow();
        this.handleCard();
	}
}
