const password=document.querySelector("#password");
const confirmation=document.querySelector("#confirmation");
const btn=document.querySelector("button");
btn.addEventListener("click",()=>{
    if(password.value!==confirmation.value){
        password.style.border="1px solid red";
        confirmation.style.border="1px solid red";
    }else{
        password.style.border="1px solid black";
        confirmation.style.border="1px solid black";

    }
})