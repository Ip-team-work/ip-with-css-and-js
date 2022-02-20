const slide=document.querySelector('#slider');
const prevbtn=document.querySelector('#prevbtn');
const nextbtn=document.querySelector('#nextbtn');
const img=document.querySelectorAll('#slider img');

let counter=1;
let size=img[1].clientWidth;

slide.style.transform='translateX(' + +(-size * counter) + 'px)';


nextbtn.addEventListener('click',function()
{
    if(counter >= img.length-1) return;
    slide.style.transition='transform 0.6s ease-in';
    counter++;
    slide.style.transform='translateX(' + +(-size * counter) + 'px)';

})

prevbtn.addEventListener('click',function()
{
    if(counter <= 0 ) return;
    slide.style.transition='transform 0.6s ease-in';
    counter--;
    slide.style.transform='translateX(' + +(-size * counter) + 'px)';

})

slide.addEventListener('transitionend',function(){
    if(img[counter].id==='lastclone')
    {
        slide.style.transition='none';
        counter=img.length - 2;
        slide.style.transform='translateX(' + +(-size * counter) + 'px)';
    }
    if(img[counter].id==='firstclone')
    {
        slide.style.transition='none';
        counter=img.length - counter;
        slide.style.transform='translateX(' + +(-size * counter) + 'px)';
    }
})