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

    // resetState(){
    //     if (!document.querySelectorAll(this.btn).length > 0) return;
	// 	const btns = document.querySelectorAll(this.btn);
	// 	const cards = document.querySelectorAll(this.card);

    //     btns.forEach((element, index)=>{
    //             let thisBtn = element;
    //             let currentIndex = index;

    //             btns.forEach((btn, j)=>{
    //                 btn.classList.remove('active');
    //                 cards[j].classList.remove('active');
    //                 gsap.to(cards[j], 0.3, {autoAlpha:0});
    //                 gsap.to(cards[j], 0.3, {height: 0});
    //             });

    //             if(!thisBtn.classList.contains('active')){
    //                 thisBtn.classList.add('active')
    //                 cards[currentIndex].classList.add('active');
                    
    //                 gsap.to(cards[currentIndex], 0.3, {height:heightCard});
    //                 gsap.fromTo(cards[currentIndex], {autoAlpha: 0, yPercent: 20}, {autoAlpha: 1, yPercent: 0, duration: 0.5, delay: 0.3})
    //             }
            
    //     });
    // }

    showCard(){
        if (!document.querySelectorAll(this.btn).length > 0) return;
		const btns = document.querySelectorAll(this.btn);
		const cards = document.querySelectorAll(this.card);
        let heightCard = this.heightCard;
        let offset = this.offset;
       
        
        let cardsArr = Array.from(cards)

        let state = cardsArr.filter(card=>card.classList.contains('active'));

        //console.log(cardsArr);

        //console.log(state.length);

        if(state.length){
            gsap.set(state, {autoAlpha:1, height:heightCard})
        }
        
        btns.forEach((element, index)=>{
            element.addEventListener('click', function(e) {
                let thisBtn = element;
                let currentIndex = index;
              

               

               

              

               

                btns.forEach((btn, j)=>{
                    btn.classList.remove('active');
                    cards[j].classList.remove('active');
                    gsap.to(cards[j], 0.3, {autoAlpha:0});
                    gsap.to(cards[j], 0.3, {height: 0});
                });

                if(!thisBtn.classList.contains('active')){
                    thisBtn.classList.add('active')
                    cards[currentIndex].classList.add('active');

                 
                   
                    
                    gsap.to(cards[currentIndex], 0.3, {height:heightCard, onComplete:function(){
                       
                           let innerBlock = $(this._targets[0]).children().offset().top + $(this._targets[0]).children().outerHeight();

                            let block = $(".block-type").parent().offset().top + $(".block-type").parent().outerHeight();

                       
                        setTimeout(function(){
                         
            
                        //    console.log(`innerBlock: ${innerBlock}`);
                        //    console.log(`block: ${block}`);
    
                            // console.log(innerBlock);
            
                            if(innerBlock > block) {
                               
                                offset = -(innerBlock - block) - 40;
                                console.log('выходит');
                            } else {
                                offset = 20;
                                console.log('не выходит');
                               
                            }
                           // 

                            
                        }, 300)
                      
                      
                    }});

                    gsap.to(cards[currentIndex], {autoAlpha: 1, y: offset})
                    
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
