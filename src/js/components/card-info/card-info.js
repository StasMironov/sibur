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
        this.heightCard = props.height;
        this.offset = 20;

		if (this.init) {
			this.render();
		}
	}

    showCard(){
        if (!document.querySelectorAll(this.btn).length > 0) return;
		const btns = document.querySelectorAll(this.btn);
		const cards = document.querySelectorAll(this.card);
        let heightCard = this.heightCard;

        let cardsArr = Array.from(cards)

        let state = cardsArr.filter(card=>card.classList.contains('active'));

        let block = $(".block-type").parent()[0].offsetTop + $(".block-type").parent().outerHeight();
        let paddingBottom = $(".block-type").parent()[0];

       

        if(state.length){
            gsap.set(state, {autoAlpha:1, height:heightCard})
        }
        
        btns.forEach((element, index)=>{
            element.addEventListener('click', function(e) {
                let thisBtn = element;
                let currentIndex = index;
                console.log(paddingBottom);
                
                let innerBlock = cards[currentIndex].offsetTop + $(cards[currentIndex]).children().outerHeight();
              
                btns.forEach((btn, j)=>{
                    btn.classList.remove('active');
                    cards[j].classList.remove('active');
                    gsap.to(cards[j], 0.3, {autoAlpha:0});
                    gsap.to(cards[j], 0.3, {height: 0});
                });

                if(!thisBtn.classList.contains('active')){
                    thisBtn.classList.add('active')
                    cards[currentIndex].classList.add('active');
                    gsap.to(cards[currentIndex], 0.3, {height:heightCard});
                   
                    gsap.to(cards[currentIndex], { autoAlpha: 1, y: ()=>{
                        return (innerBlock ) > block ? (-(innerBlock - block) - 40) : 20;
                    }} )
                }
            });
        });
    }

	render() {
        let heightCard = this.heightCard;
        let that = this;


        var adjust_size = function() {
            if (!isMob()) {
                that.heightCard = 'auto';
            } else {
                that.heightCard = heightCard;
            }

           
            that.showCard();
            
            // debounce(300, function() {
            //     console.log('resize');
                
            // })
          };
          adjust_size();
          $(window).resize(adjust_size);
       
	}
}
