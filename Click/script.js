const btnGoogle =document.querySelector(".btn_google");
const btnCancel=document.querySelector(".btn_cancel");
const btnConfirm=document.querySelector(".btn_confirm");
const btnQuit=document.querySelector("i");
const closeDisplay=document.querySelector(".modal");
const conTainer=document.querySelector(".container");
btnGoogle.addEventListener("click",function(){
    conTainer.classList.add("overlay");
    closeDisplay.classList.add("active");
});
btnQuit.addEventListener("click",function(){
    conTainer.classList.remove("overlay");
    closeDisplay.classList.remove("active");
});
btnCancel.addEventListener("click",function(){
    conTainer.classList.remove("overlay");
    closeDisplay.classList.remove("active");
});

