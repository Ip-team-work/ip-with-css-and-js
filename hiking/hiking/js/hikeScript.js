let searchBtn=document.querySelector('#search-btn');
let searchBar=document.querySelector('.search');
let formBtn=document.querySelector('#login-btn');
let loginForm=document.querySelector('.login-form');
let menu=document.querySelector("#menu_bar");
let navBar=document.querySelector(".navBar");

window.onscroll = () =>{ 
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navBar.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navBar.classList.toggle('active'); 
});


searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active'); 
});


// formBtn.addEventListener('click', () =>{
    //     loginForm.classList.add('active');
    // });
    
    // formclose.addEventListener('click', () =>{
        //     loginForm.classList.remove('active');
// });

var log=document.getElementById("log");
// var formClose=document.getElementById("form-close");
log.style.top="-120%";
function toggleFun(){
    if(log.style.top=="-120%"){
        log.style.top="0px"
    }
    else{
        log.style.top="-120%"
    }
};


var menu_bar=document.getElementByClass("links");
// var formClose=document.getElementById("form-close");
menu_bar.style.maxHeight = "0px";
function mainMenuFun(){
    if(menu_bar.style.maxHeight=="0px"){
        menu_bar.style.maxHeight="20px"

}
else{
    menu_bar.style.maxHeight="0px"
}
}



