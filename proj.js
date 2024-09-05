// function menuclick(){
//    const menu=document.querySelector(".nav-links");
//    menu.classList.toggle("menulist")

// }
const menu=document.querySelector(".nav-links");
const menubar=document.querySelector(".menu");
menubar.addEventListener("click",()=>{
    menu.classList.toggle("menulist")
})

window.onscroll =function(){headershadow()};

function headershadow(){
    const header=document.querySelector("#header");
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop >50){
        header.style.boxhadow="0px 5px 15px rgba(0,0,0,0.525) "
         header.style.height="70px"
 header.style.lineheight="70px"

 
    }
    else{
        header.style.boxhadow="none";
        header.style.height="90px"
header.style.lineheight="90px"

    }
}
const section=document.querySelectorAll("section");
const header=document.querySelectorAll("h1");

const lists=document.querySelectorAll(".unordered-list .lists a");
window.onscroll =()=>{
    section.forEach(sec=>{
        let top =window.scrollY;
        let offset =sec.offsetTop-150;
        let height =sec.offsetHeight;
        let id=sec.getAttribute('id');


        if(top >= offset && top < offset + height){
    lists.forEach(link=>{
        link.classList.remove("active");
        document.querySelector('.unordered-list .lists a[href*='+ id +']').classList.add("active");
              
    });
        };
    });
};
const card1=document.querySelector(".cardinner1");
const h41=document.querySelector(".h4-1");

var startval1=0;
var endval1=85;
// console.log(startval1++);
let process1=setInterval(()=>{
     console.log(startval1++);
    if(startval1==endval1){
clearInterval(process1);

    }
h41.textContent=  `${startval1}%`;
card1.style.background=`conic-gradient( rgb(75, 75, 77)${startval1 * 3.5}deg,#333 0deg)`;
})
const card2=document.querySelector(".cardinner2");
const h42=document.querySelector(".h4-2");

var startval2=0;
var endval2=85;
// console.log(startval1++);
let process2=setInterval(()=>{
    startval2++;
    if(startval2==endval2){
clearInterval(process2);

    }
h42.textContent=  `${startval2}%`;
card2.style.background=`conic-gradient( rgb(75, 75, 77)${startval2 * 3.5}deg,#333 0deg)`;
})
const card3=document.querySelector(".cardinner3");
const h43=document.querySelector(" .cardinner3 .h4-3");

var startval3=0;
var endval3=70;
// console.log(startval1++);
let process3=setInterval(()=>{
     startval3++;
    if(startval3==endval3){
clearInterval(process3);
    }
h43.textContent=  `${startval3}%`;
card3.style.background=`conic-gradient( rgb(75, 75, 77)${startval3 * 3.5}deg,#333 0deg)`;
})

const card4=document.querySelector(".cardinner4");
const h44=document.querySelector(" .cardinner4 .h4-4");

var startval4=0;
var endval4=60;
// console.log(startval1++);
let process4=setInterval(()=>{
     startval4++;
    if(startval4==endval4){
clearInterval(process4);
    }
h44.textContent=  `${startval4}%`;
card4.style.background=`conic-gradient( rgb(75, 75, 77)${startval4 * 3.5}deg,#333 0deg)`;
})
const card5=document.querySelector(".cardinner5");
const h45=document.querySelector(" .cardinner5 .h4-5");

var startval5=0;
var endval5=60;
// console.log(startval1++);
let process5=setInterval(()=>{
     startval5++;
    if(startval5==endval5){
clearInterval(process5);
    }
h45.textContent=  `${startval5}%`;
card5.style.background=`conic-gradient( rgb(75, 75, 77)${startval5 * 3.5}deg,#333 0deg)`;
})

const prev=document.querySelector(".prev")
const next=document.querySelector(".next")
const h4=document.querySelector(".cert-h4")
const img2=document.querySelector(".cert-img")

const data=[
    {
        coursestype:"html",
            Image:"https://i.ibb.co/C6DPQQn/Html-0001.jpg",,
        },
    {
        coursestype:"css",
            Image:"C:\Users/rupes/OneDrive/Documents/css.jpg",
        },
{
            coursestype:"bootstrap",
            Image:"C:\Users/rupes/OneDrive/Documents/bootstrap-0001.jpg",
        },
        
        {
            coursestype:"javascript",
            Image:"C:\Users/rupes/OneDrive/Documents/javascript-0001.jpg",
        },
        {
            coursestype:"jquery",
            Image:"C:\Users/rupes/OneDrive/Documents/jquery-0001.jpg",
        },

            
    ]
let index=0;
window.addEventListener("DOMContentLoaded",function(){
    const certcarousel=data[0]
    load(certcarousel)
})
function load(data){
img2.src=data.Image;
h4.textContent=data.coursestype;
}
next.addEventListener("click",()=>{
index++
if(index > data.length ){
index=0
// load(data[index])
}
load(data[index])
})
prev.addEventListener("click",()=>{
    index--;

    if(index < 0){
        index=data.length-1
        }
        load(data[index])
})
