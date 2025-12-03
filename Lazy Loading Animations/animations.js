const header = document.querySelector('[data-header]');

const boxesOne = document.querySelectorAll('[data-box-one]');
const sectionOne = document.querySelector('[data-section-one]');

const boxesTwo = document.querySelectorAll('[data-box-two]');
const sectionTwo = document.querySelector('[data-section-two]');

const boxesThree = document.querySelectorAll('[data-box-three]');
const sectionThree = document.querySelector('[data-section-three]');

document.addEventListener('scroll', () => {start(sectionOne, boxesOne, 0.3);});
window.addEventListener('resize', () => {start(sectionOne, boxesOne, 0.3);});

document.addEventListener('scroll', () => {start(sectionTwo, boxesTwo, 0.3);});
window.addEventListener('resize', () => {start(sectionTwo, boxesTwo, 0.3);});

document.addEventListener('scroll', () => {start(sectionThree, boxesThree, 0.3);});
window.addEventListener('resize', () => {start(sectionThree, boxesThree, 0.3);});


function calculateStart(section, percent) {

    const windowIH = Number(window.innerHeight);
    const windowSY = Number(window.scrollY);

    const sectionOT = section.offsetTop;
    const heightWhenStartToAnimate = section.offsetHeight * percent;
    
    if((windowIH + windowSY) >= (sectionOT + heightWhenStartToAnimate)) {
        return true;      
    } else {
        return false;
    }
}

function start(parent, movingElements, heightPercent) {     

  if(calculateStart(parent, heightPercent)) { 
      
        /* Mobile */        

        if(window.innerWidth < 700) {

        let delay = 0;        
            
        movingElements.forEach((i) => {            
            
            i.style = `transform: translate(-50%, 0); left: 50%; transition-delay: ${delay}s;`;  
            delay = delay + 0.2;            
            });   

        /* Desktop */ 

        } else {

        let delay = 0;
        let elementWidth = 0;
          
        movingElements.forEach((p) => {
            elementWidth += p.scrollWidth;
        });
          
        let freeSpaceWidth = window.innerWidth - elementWidth;
        let movingElementsPlusOne = 1 + movingElements.length;
                    
        let x = freeSpaceWidth / movingElementsPlusOne;                        
        let distance = x;           
             
        movingElements.forEach((i) => {                            
        
            i.style = `left: ${distance}px; transition-delay: ${delay}s;`;  
            delay = delay + 0.2;                
            distance += x + i.scrollWidth;                                     
            });            
        }

    } else {      

        let delayR = 0.2;

        movingElements.forEach((i) => {
            i.style = `left: ${-1 * (i.scrollWidth)}px; transition-delay: ${delayR}s;`;
            delayR = delayR - 0.1;                                   
        });   
    }   
}
