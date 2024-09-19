let hrs=document.getElementById("hrs");
let mins=document.getElementById("mins");
let sec=document.getElementById("sec");
setInterval(()=>{
    let currTime=new Date();
    hrs.innerHTML=currTime.getHours();
    mins.innerHTML=currTime.getMinutes();
    sec.innerHTML=currTime.getSeconds();
},1000)