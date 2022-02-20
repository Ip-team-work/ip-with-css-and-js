let asselement=Array.from(document.querySelector('.aos'));
console.log(asselement);

window.addEventListener('scroll',throttle(scanElement,50));
function scanElement(e){
    console.count(e);
    asselement.forEach(element=>{
        if(isvisible(element)){
            element.classList.add('active');
        }else{
            element.classList.remove('active')
        }
    });
}


function isvisible(element){
    const elementdiv=element.getBoundingClientRect();
    let distanceFromTop=-300;
    return elementdiv.top-window.innerHeight < distanceFromTop ? true:false;
}

function throttle(fn,delay){
    let lastCall=0;
    return(...args)=>{
        let context=this;
        let current=  new Date().getTime();

        if(current-lastCall<delay){
            return 
        }
        lastCall=current;
        return fn.apply(context,...args)
    }
}