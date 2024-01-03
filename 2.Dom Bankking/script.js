"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
// btnsOpenModal.forEach(btn=>{
//     btn.addEventListener("click",openModal);
// })
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

///////////////////////////////////////////
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML = `We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Accept Cookie</button>`;
document.body.prepend(message);
// document.body.append(message);
// document.body.append(message.cloneNode(true));
// document.body.after(message);
// document.body.before(message);
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    // message.remove();
    message.parentElement.removeChild(message);
    const nav = document.querySelector(".nav");
    nav.classList.add("removeCookied");
  });
console.log(getComputedStyle(message).height);
//getComputedStyle(vari).cssProperties : for check value css
//style.setProperty('varRoot','var2')  : change varRoot and put var2 into Element
//vari.alt : for setAttribute alt
//vari.src : for setAttribute src
//vari.name : for setAttribute name
//vari.getAttribute('') : for getAttribute src,alt,name,href...

// message.style.height=Number.parseFloat(getComputedStyle(message).height)+40+'px';
console.log(getComputedStyle(message).height);
// document.documentElement.style.setProperty('--color-tertiary','blue');
const logo = document.querySelector(".nav__logo");
console.log(logo.alt);
console.log(logo.src);
console.log(logo.dataset.versionNumber);
console.log(logo.getAttribute("alt"));
console.log(logo.setAttribute("company", "Bankist"));

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());
  console.log("current Scroll (x/y): ", window.pageXOffset, pageYOffset);
  console.log(
    "Height/width responsive ",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  console.log(s1coords.left);
  console.log(s1coords.y);
  //scroll
  // window.scrollTo(s1coords);
  // window.scrollTo(s1coords.left,s1coords.top);
  // window.scrollTo(s1coords.left+window.pageXOffset,s1coords.top+window.pageYOffset);
  // window.scrollTo({
  //   left: s1coords.left+window.pageXOffset,
  //   top: '1900',
  //   behavior:'smooth'
  // });
  section1.scrollIntoView({ behavior: "smooth" });
});
// const h1=document.querySelector('h1');
// h1.closest('.header__title').style.background='red';
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");
console.log(tabsContainer);


tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target;
  console.log(clicked);
  if (!clicked) return;
  tabs.forEach(t => t.classList.remove("operations__tab--active"));
  tabsContent.forEach(c => c.classList.remove("operations__content--active"));
  clicked.classList.add("operations__tab--active");
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});


const nav=document.querySelector('.nav');


nav.addEventListener('mouseover',function(e){
  if(e.target.classList.contains('nav__link')){
    const link=e.target;
    console.log(link);
    const siblings=link.closest('.nav').querySelectorAll('.nav__link');
    console.log(siblings);
    const logo=link.closest('.nav').querySelector('img');
    siblings.forEach(el=>{
      if(el!==link){
        el.style.opacity=0.5;
      }
    });
    logo.style.opacity=1;
  }
});

nav.addEventListener('mouseout',function(e){
  if(e.target.classList.contains('nav__link')){
    const link=e.target;
    console.log(link);
    const siblings=link.closest('.nav').querySelectorAll('.nav__link');
    console.log(siblings);
    const logo=link.closest('.nav').querySelector('img');
    siblings.forEach(el=>{
      if(el!==link){
        el.style.opacity=1;
      }
    });
    logo.style.opacity=1;
  }
});



// const initialCoords=section1.getBoundingClientRect();
// window.addEventListener('scroll',function(){
//   console.log(window.scrollY);
//   if(window.scrollY>initialCoords.top){
//     nav.classList.add('sticky');
//   }
//   else{
//     nav.classList.remove('sticky');
//   }
// });
const header=document.querySelector('.header');
const navHeight=nav.getBoundingClientRect().height;
console.log(navHeight);
const headerObserver=new IntersectionObserver(entries=>{
  const [entry]=entries;
  console.log(entry);
  console.log(entry.target)
  if(!entry.isIntersecting){
    nav.classList.add('sticky');  
    // headerObserver.unobserve(header);
  }
  else{
    nav.classList.remove('sticky');
  }
},
{
  root:null,
  threshold:0,
  rootMargin:`-${navHeight}px`
});

headerObserver.observe(header);


//reveal section
const allSection=document.querySelectorAll('.section');


const sectionObserver=new IntersectionObserver((entries,observer)=>{
  const [entry]=entries;
  console.log(entry);
  if(!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
},{
root:null,
threshold:0.2,
});
allSection.forEach(function(section){
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});
  

//slider
const slides=document.querySelectorAll('.slide');
const  slider=document.querySelector('.slider')
const btnLeft=document.querySelector('.slider__btn--left');
const btnRight=document.querySelector('.slider__btn--right');
const dotContainer=document.querySelector('.dots');
let curSlide=0;
const maxSlide=slides.length;

//new
const createDots=function(){
  slides.forEach(function(_,i){
    dotContainer.insertAdjacentHTML('beforeend',`
    <button class="dots__dot" data-slide="${i}"></button>`);
  });
}

const activeDot=function(slide){
  document.querySelectorAll('.dots__dot').forEach(dot=>dot.classList.remove('dots__dot--active'));
  document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
}


// slider.style.transform='scale(0.3)';
// slider.style.overflow="visible";
slides.forEach((s,i)=>{
  s.style.transform=`translateX(${100 * i}%)`;
});
//goto slide
const goToSlide=function(slide){
  slides.forEach((s,i)=>{
    console.log(i,slide);
    s.style.transform=`translateX(${100*(i-slide)}%)`;
  });
};

//next slide
const nextSlide=function(){
  console.log("click");
  if(curSlide===maxSlide-1){
    curSlide=0;
  }
  else{
    curSlide++;
  }
    goToSlide(curSlide);
    activeDot(curSlide);   //new
}
//previous slide
const previousSlide=function(){
  if(curSlide===0){
    curSlide=maxSlide-1;
  }
  else{
    curSlide--;
  }
  goToSlide(curSlide);
  activeDot(curSlide);  //new
}

//new
const init=function(){
  goToSlide(0);
  createDots();
  activeDot(0);
}
init();



btnRight.addEventListener('click',nextSlide);
btnLeft.addEventListener('click',previousSlide);


//new
document.addEventListener('keydown',function(e){
  if(e.key=='ArrowLeft') {
    previousSlide();
  }
  else if(e.key==`ArrowRight`){
    nextSlide();
  }
});



dotContainer.addEventListener('click',function(e){
  console.log(dotContainer);
  console.log('click',e.target);
if(e.target.classList.contains('dots__dot')){
  const{slide}=e.target.dataset;
  console.log(slide);
  goToSlide(slide);
  activeDot(slide);
}
});
// .dots__dot[data-slide="${slide}"]  =>array
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built!', e);
});

window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  console.log(e);
  e.returnValue = '';
});




