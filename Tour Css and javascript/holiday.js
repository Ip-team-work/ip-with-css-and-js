
var angle = 0;
function galleryspin(sign) { 
spinner = document.querySelector("#spinner");
if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
}
/* sliding carousel end  */

const navSlide=()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks= document.querySelectorAll('.nav-links li');

    burger.addEventListener('click',()=>{
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //animation links
        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation='';
            }
            else{ 
                link.style.animation= `navLinkFade .5s ease forwards ${index/7 + 0 }s`;
            }
        });
    });
}
navSlide();


/* nav bar scrolling  */

var navbar= document.getElementById("navbar");
var menu = document.getElementById("menu");
window.onscroll=function(){
    console.log("widnow");
    if(window.pageYOffset<=menu.offsetTop){
        navbar.classList.add("navadd");
        console.log('ifhere');
    }
    else{
        
        navbar.classList.remove("navadd");
        console.log("elseifhere");
    }
}
/* nav bar scrolling end */



/* sliding carousel */

console.log("hello");
const carouselSlide= document.querySelector('.sliding-carousel');
const carouselImages= document.querySelectorAll('.sliding-carousel img');

//button
const prevbut=document.querySelector('#prevbut');
const nextbut=document.querySelector('#nextbut');

//Counter
let counter=1;
const size= carouselImages[0].clientWidth;

carouselSlide.style.transform ='translateX('+ (-size * counter)+'px)';



 //button listeners

nextbut.addEventListener('click',()=>{
    if(counter>=(counter.length-1))return;
    
    carouselSlide.style.transition="transform 0.6s ease-in-out";
    counter++;
    carouselSlide.style.transform ='translateX('+ (-size * counter)+'px)';
    console.log("click");
});

prevbut.addEventListener('click',()=>{
    if(counter<=0)return;
    console.log('1');
    carouselSlide.style.transition="transform 0.6s ease-in-out";
    counter--;
    carouselSlide.style.transform ='translateX('+ (-size * counter)+'px)';
});

carouselSlide.addEventListener('transitionend',()=>{
    if(carouselImages[counter].id=='lastclone'){
        carouselSlide.style.transition="none";
        counter= carouselImages.length -2;
        carouselSlide.style.transform="translate 0.6s ease-in-out";
    }
    if(carouselImages[counter].id=='firstclone'){
        carouselSlide.style.trnasition="none";
        counter=carouselImages.length-counter;
        carouselSlide.style.transform="translate 0.6s ease-in-out";
    }
});

