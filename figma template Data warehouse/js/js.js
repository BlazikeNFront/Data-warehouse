



document.addEventListener('DOMContentLoaded',()=>{

    //Menu open and navigate through site on mobile, its based on translate in div which overflow is set to hidden
    const menuButton = document.querySelector('.btnMenu');
    const menu = document.querySelector('.navLinks');
    let clickab = true;
    let menuOpen = false;
    function clickChange(){
       
        if(clickab == false){clickab = true};
       
    }


    menuButton.addEventListener('click',()=> {
    
        if (menuOpen  == false && clickab == true) {
            clickab = false;
           
            menu.classList.remove('displayNone');
            menu.classList.add('openMenu');     
            menu.classList.remove('closeMenu');
    
           setTimeout(clickChange,505);
            
            menuOpen = true;
    
            
            
        }
        else if(clickab == true && menuOpen == true) {
            clickab = false
            menu.classList.remove('openMenu');
            menu.classList.add('closeMenu');
            menuOpen = false;
            setTimeout(clickChange,505);
            
            
            
            
           
        }
        
    })



// Featerues slider based on animation in div which have overflow set to hidden and gives higher z-index slides that should be active/visible to user
    const slideChangeDuration = 1000;
    const featureItems = Array.from(document.querySelectorAll('.featureListItem'));

    featureItems.forEach(item => item.setAttribute(`style`,
    `transition:transform ${slideChangeDuration}ms ease;
    animation-duration: ${slideChangeDuration}ms`))

    const nextButton = document.querySelector('.nextSlide');
    const prevButton = document.querySelector('.prevSlide');
    
    let clickable = true;
    function clickableChange(){clickable = true}
    let active;
    let newActive;
    

    function changeSlide(forward){
      console.log(clickable)
        
    if(clickable==true){
        clickable = false;
        active = document.querySelector('.active');
        let activeIndex = featureItems.indexOf(active);
        
        if (forward==true){
            
       
        newActive = featureItems[(activeIndex + 1) % featureItems.length];
        active.classList.add('slideFromRight');
        active.addEventListener('animationend', () => {
            
            active.classList.remove('active','slideFromRight');
            active.classList.add('slideFromRight2');
           active.addEventListener('animationend',() => {
         active.classList.remove('slideFromRight2');
                
            })
            
        })

        
        newActive.classList.add('active');
        setTimeout(clickableChange,2050) /* Because there are 2 transition/animation, adding second event listener that checks if second transitions has ended to makes slider clickable again does not work,
        (second listener also initiliazed after first transition - makes the slider buggy when user clic after first animation), so there timeout that chagne clickable value to true after time of animation*/
        


     }
         else  {
       
        
        newActive = featureItems[(activeIndex + featureItems.length - 1) % featureItems.length];
       
       
        
       active.classList.add('slideFromLeft');
       active.addEventListener('animationend', () => {
           
           active.classList.remove('active','slideFromLeft');
           active.classList.add('slideFromLeft2');
          active.addEventListener('animationend',() => {
               active.classList.remove('slideFromLeft2');
               
           })
           
       })

       
       newActive.classList.add('active');
       setTimeout(clickableChange,2050)
       


    }

        }
    }
    
    




    
nextButton.addEventListener('click', () => changeSlide(true));
prevButton.addEventListener('click', () => changeSlide(false));
   
// Testiomonials Slider based on simply switch based on sliders counting(translateCount)

const testimonials = document.querySelector('.testimonialsFlex');
let clickableForTestimionals = true

const slideLeftButton = document.querySelector('.prevTestSlide');
const slideRightButton = document.querySelector('.nextTestSlide');
let translateCount = 0;
const dotsArray = Array.from(document.querySelectorAll('.sliderDot'))
console.log(dotsArray[0])

slideLeftButton.addEventListener('click',()=>{
  if(clickableForTestimionals === true) {
    clickableForTestimionals = false;
    switch (translateCount){
        case 0 :
            clickableForTestimionals = true;
            break;
        case 1:
            testimonials.classList.add('testiomonialsSlider0');
            testimonials.classList.remove('testiomonialsSlider1');
            dotsArray[1].classList.remove('activeDot');
            dotsArray[0].classList.add('activeDot');
        translateCount--;
            break;

        case 2:
            testimonials.classList.add('testiomonialsSlider1');
            testimonials.classList.remove('testiomonialsSlider2');
            dotsArray[2].classList.remove('activeDot');
            dotsArray[1].classList.add('activeDot');
        translateCount--;
            break;
        case 3:
            testimonials.classList.add('testiomonialsSlider2');
            testimonials.classList.remove('testiomonialsSlider3');
            dotsArray[3].classList.remove('activeDot');
            dotsArray[2].classList.add('activeDot');
        translateCount--;
            break;

}}
console.log(translateCount)
testimonials.addEventListener('transitionend', ()=>{clickableForTestimionals = true}
    )


});

slideRightButton.addEventListener('click',()=>{
    if(clickableForTestimionals === true) {
        clickableForTestimionals = false;
        switch (translateCount){

        case 0:testimonials.classList.add('testiomonialsSlider1');
            testimonials.classList.remove('testiomonialsSlider2');
            dotsArray[0].classList.remove('activeDot');
            dotsArray[1].classList.add('activeDot');
        translateCount++;
            break;

        case 1:
            testimonials.classList.add('testiomonialsSlider2');
            testimonials.classList.remove('testiomonialsSlider1');
            dotsArray[1].classList.remove('activeDot');
            dotsArray[2].classList.add('activeDot');
        translateCount++;
            break;

        case 2:
            testimonials.classList.add('testiomonialsSlider3');
            testimonials.classList.remove('testiomonialsSlider2');
            dotsArray[2].classList.remove('activeDot');
            dotsArray[3].classList.add('activeDot');
        translateCount++;
            break;
        case 3:
            clickableForTestimionals = true;
            break;
    }}
    
    testimonials.addEventListener('transitionend', ()=>{clickableForTestimionals = true})
        
    
    
    
});

//probably its not neccesery

const widthOutput = document.querySelector('#width');

function displayWindowSize(){
    
    let width = document.documentElement.clientWidth;
    if (width>768){
        menu.classList.remove('closeMenu')
    }
    
    
    console.log(width)
}

const divMenuContainer = document.querySelector(".menu-container");

window.addEventListener("resize", displayWindowSize);
    
    





})