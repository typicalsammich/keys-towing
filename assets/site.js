const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav-links');
if(toggle&&nav){toggle.addEventListener('click',()=>nav.classList.toggle('open'));}
document.querySelectorAll('.dropdown>a').forEach(a=>a.addEventListener('click',e=>{if(innerWidth<981){e.preventDefault();a.parentElement.classList.toggle('open')}}));
const floater=document.querySelector('.floating-call');
if(floater){const update=()=>floater.classList.toggle('show',scrollY>420);update();addEventListener('scroll',update,{passive:true});}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
