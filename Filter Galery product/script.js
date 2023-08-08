const icon =document.querySelectorAll(".icon span");
for(let i=0;i<icon.length;i++){
    icon[i].addEventListener("click",function(){
        const current=document.querySelector(".icon-active");
        current.className=current.className.replace("icon-active","");
        icon[i].className="icon-active";
    });
}

const btnBar =document.querySelectorAll(".btn-bar a");
for(let i=0;i<btnBar.length;i++){
    btnBar[i].addEventListener("click",function(){
        const current=document.querySelector(".btn-bar-active");
        current.className=current.className.replace("btn-bar-active","");
        btnBar[i].className="btn-bar-active";
    });
}
const footer=document.querySelector(".footer");

// filter Gallery 
const cards=document.querySelectorAll(".carts");
    btnBar[1].addEventListener("click",function(e){
        footer.classList.add("active");
        for(let j=0;j<cards.length;j++){
            if(cards[j].getAttribute("name")==="Car"){
                cards[j].style.display="flex";
            }
            else{
                cards[j].style.display="none";
            }
        }
    });

    btnBar[2].addEventListener("click",function(e){
        for(let j=0;j<cards.length;j++){
            footer.classList.add("active");
            if(cards[j].getAttribute("name")==="Motor"){
                cards[j].style.display="flex";
            }
            else{
                cards[j].style.display="none";
            }
        }
    });
    btnBar[3].addEventListener("click",function(e){
        for(let j=0;j<cards.length;j++){
            footer.classList.add("active");
            if(cards[j].getAttribute("name")==="Cap"){
                cards[j].style.display="flex";
            }
            else{
                cards[j].style.display="none";
            }
        }
    });
    btnBar[4].addEventListener("click",function(e){
        for(let j=0;j<cards.length;j++){
            footer.classList.add("active");
            if(cards[j].getAttribute("name")==="Speaker"){
                cards[j].style.display="flex";
            }
            else{
                cards[j].style.display="none";
            }
        }
    });
    btnBar[5].addEventListener("click",function(e){
        for(let j=0;j<cards.length;j++){
            footer.classList.add("active");
            if(cards[j].getAttribute("name")==="Musical"){
                cards[j].style.display="flex";
            }
            else{
                cards[j].style.display="none";
            }
        }
    });
    btnBar[0].addEventListener("click",function(e){
        for(let j=0;j<cards.length;j++){
            footer.classList.remove("active");
            if(cards[j].getAttribute("name")===""){
                cards[j].style.display="flex";
            }
            else{
                cards[j].style.display="flex";
            }
        }
    });
