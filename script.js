let date=document.querySelector('.date');
let time_now=new Date().getHours();
let show_time=time_now>=6 && time_now<12 ? "Good Morning" :
time_now>=12 && time_now<16 ? "Good Afternoon" :
time_now>=16 && time_now<19 ? "Good Evening" : "Good Night";
date.innerHTML=show_time;