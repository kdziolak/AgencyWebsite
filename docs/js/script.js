"use strict";var bar=document.querySelector(".fa-bars"),list=document.querySelector(".nav-list"),home=document.querySelector(".arrow-home"),body=document.documentElement,scrollToY=function(e,t,o){var n=e.scrollTop,c=t-n,s=0;!function t(){s+=20;var l=Math.easeInOutQuad(s,n,c,o);e.scrollTop=l,s<o&&setTimeout(t,20)}()};Math.easeInOutQuad=function(e,t,o,n){return(e/=n/2)<1?o/2*e*e+t:-o/2*(--e*(e-2)-1)+t};var getChild=function(e){var t=document.querySelector(".line"),o=document.querySelector(".lamp"),n=document.querySelector(".divide"),c=document.querySelector(".profile"),s=document.querySelector(".top-foot");switch(e.target.className){case"home":scrollToY(document.documentElement,0,1e3);break;case"isama":scrollToY(document.documentElement,o.offsetTop,1e3);break;case"what-do":scrollToY(document.documentElement,t.offsetTop,1e3);break;case"our-projects":scrollToY(document.documentElement,n.offsetTop,1e3);break;case"team":scrollToY(document.documentElement,c.offsetTop,1e3);break;case"contact":scrollToY(document.documentElement,s.offsetTop,1e3)}},goPageHeader=function(){scrollToY(document.documentElement,0,1e3)},showMenu=function(){var e=document.getElementsByTagName("nav")[0];"0vh"!==e.style.left&&(e.style.left="0vh")},menu=function(e){var t=document.getElementsByTagName("nav")[0];"0vh"!==t.style.left||e.target===t||e.target.classList.contains("nav-list")?e.target.classList.contains("fa-bars")&&showMenu():t.style.left="-200vh"};home.addEventListener("click",goPageHeader),list.addEventListener("click",getChild),document.addEventListener("click",menu),$(document).ready(function(){$(".slider-items").slick({infinite:!0,speed:1e3,autoplay:!0,autoplaySpeed:3e3,slidesToShow:2,slidesToScroll:1,prevArrow:null,nextArrow:'<button type="button" class="slick-next"><span class="fas fa-chevron-right"></span></button>',responsive:[{breakpoint:700,settings:{slidesToShow:1,slidesToScroll:1}}]})});