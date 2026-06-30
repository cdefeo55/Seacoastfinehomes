document.addEventListener('DOMContentLoaded',function(){
  const toggle=document.querySelector('.nav-toggle');
  const nav=document.querySelector('.main-nav');
  if(toggle&&nav){toggle.addEventListener('click',function(){const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open?'true':'false');toggle.textContent=open?'×':'☰';});}
  document.querySelectorAll('.dropdown .dropbtn').forEach(btn=>btn.addEventListener('click',function(e){if(window.matchMedia('(max-width:900px)').matches){e.preventDefault();this.closest('.dropdown').classList.toggle('open');}}));
});
