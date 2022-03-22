let menuBtn=document.querySelector('.menuBtn');
let menu=document.querySelector('.menu');
let sideNavBar=document.querySelector('.side-navbar');



sideNavBar.style.right = "-250px";

menuBtn.onclick=function(){
    if(sideNavBar.style.right==="-250px"){
        sideNavBar.style.right="0";
        menu.scr="khan.png";

    }
    else{
        sideNavBar.style.right ="-250px";
        menu.scr="menu.png";
    }
}