const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav-links');
if(toggle&&nav){
  toggle.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    toggle.classList.toggle('active',open);
    toggle.setAttribute('aria-expanded',String(open));
    toggle.setAttribute('aria-label',open?'Close menu':'Open menu');
  });
}
document.querySelectorAll('.dropdown>a').forEach(a=>a.addEventListener('click',e=>{
  if(innerWidth<981){e.preventDefault();a.parentElement.classList.toggle('open')}
}));
document.querySelectorAll('.dropmenu a,.nav-links>a').forEach(a=>a.addEventListener('click',()=>{
  if(innerWidth<981&&nav&&toggle){nav.classList.remove('open');toggle.classList.remove('active');toggle.setAttribute('aria-expanded','false')}
}));
const floater=document.querySelector('.floating-call');
if(floater){const update=()=>floater.classList.toggle('show',scrollY>420);update();addEventListener('scroll',update,{passive:true});}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
