const art = document.querySelectorAll(".art");
const focused = document.querySelector(".focused");
for(let i=0; i<4; i++){
    art[i].addEventListener("click", ()=>{
        focused.setAttribute("src", art[i].getAttribute("src"));
        for(let j=0; j<4; j++){
            if(art[j].classList[1]=="active"){
                art[j].classList.remove("active");
            }
        }
        art[i].classList.add("active");
        
        for(let j=0; j<4; j++){
            art[j].style.cursor="pointer";
            if(art[j].classList[1]=="active"){
                art[j].style.cursor="default";
            }
        }
    })
    for(let j=0; j<4; j++){
        if(art[j].classList[1]=="active"){
            art[j].style.cursor="default";
        }
    }
}