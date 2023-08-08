const contact=document.querySelector(".contact");
const test=document.querySelector(".test");
contact.addEventListener("click",function(){
test.classList.toggle("active");
});
document.addEventListener("click",function(e){
if(!e.target.closest(".contact")){
    contact.classList.remove("active");
}
});
console.log(contact);