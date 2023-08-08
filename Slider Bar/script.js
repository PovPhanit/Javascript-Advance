const arrow =document.querySelector(".arrow");
const arrow1 =document.querySelector(".arrow1");
const menu_bar1=document.querySelector(".Menu-bar1");
const menu_bar2=document.querySelector(".Menu-bar2");
const clickArrow=document.querySelector(".clickArrow");
const clickArrow1=document.querySelector(".clickArrow1");

clickArrow.addEventListener("click",function(){
    arrow.classList.toggle("active");
    menu_bar1.classList.toggle("active");
    arrow1.classList.remove("active");
    menu_bar2.classList.remove("active");
});
clickArrow1.addEventListener("click",function(){
    arrow1.classList.toggle("active");
    menu_bar2.classList.toggle("active");
    arrow.classList.remove("active");
    menu_bar1.classList.remove("active");
    
});
const btn_menu=document.querySelector(".btn-menu1");
const sideBar=document.querySelector(".side-bar");
const content=document.querySelector(".content");
const btn_close=document.querySelector(".btn-close1");
btn_menu.addEventListener("click",function(){
sideBar.classList.add("active");
content.classList.add("active");
btn_close.classList.add("active");
});
btn_close.addEventListener("click",function(){
    sideBar.classList.remove("active");
    content.classList.remove("active");
    btn_close.classList.remove("active");
});
btn_menu.addEventListener("click",function(e){
    e.preventDefault();
});
btn_close.addEventListener("click",function(e){
    e.preventDefault();
});
clickArrow.addEventListener("click",function(e){
    e.preventDefault();
});
clickArrow1.addEventListener("click",function(e){
    e.preventDefault();
});