const Sections= document.querySelectorAll(".section");
const SectBtns= document.querySelectorAll(".controls");
const SectBtn= document.querySelectorAll(".contrl");
const allSections= document.querySelectorAll(".main-content");




function PageTransitions(){
    for (let i=0; i< SectBtn.length; i++){
        SectBtn[i].addEventListener("click",function(){
    
            let currentBtn= document.querySelector(".active-btn");
            currentBtn[0].className=currentBtn[0].className.replace(".active-btn","");
            this.className +="active-btmn"
            })
        
        
        
        
        }
}
PageTransitions();