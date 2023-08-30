const div=document.querySelector("#text");
const colors=document.querySelectorAll(".color");

colors.forEach(color=>{
    color.addEventListener("click",()=>{
        if(color.classList.contains("blue")){
            div.style.color="blue";
        }else if (color.classList.contains("green")){
            div.style.color="green";
        }else{
            div.style.color="red";

        }
    })
})