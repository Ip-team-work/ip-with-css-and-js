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