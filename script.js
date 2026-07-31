// mobile nav toggle
const toggleBtn = document.querySelector('.navToggle');
const navlinks = document.querySelector('.navlinks');
if(toggleBtn){
  toggleBtn.addEventListener('click', ()=> navlinks.classList.toggle('open'));
  navlinks.querySelectorAll('a').forEach(a => a.addEventListener('click', ()=> navlinks.classList.remove('open')));
}

// scroll reveal
const revealEls = document.querySelectorAll('[data-reveal]');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.15 });
revealEls.forEach(el=>io.observe(el));

// typed terminal (only runs if #typedText exists on the page)
const typedEl = document.getElementById('typedText');
if(typedEl){
  const lines = [
    "whoami --role \"Pentester\"",
    "whoami --role \"System Designer\"",
    "whoami --role \"ICT/SMC Trader\"",
    "whoami --role \"Founder, EASTLINK\""
  ];
  let li = 0, ci = 0, deleting = false;
  function tick(){
    const current = lines[li];
    if(!deleting){
      ci++;
      typedEl.textContent = current.slice(0, ci);
      if(ci === current.length){ deleting = true; setTimeout(tick, 1400); return; }
    } else {
      ci--;
      typedEl.textContent = current.slice(0, ci);
      if(ci === 0){ deleting = false; li = (li+1) % lines.length; }
    }
    setTimeout(tick, deleting ? 35 : 55);
  }
  tick();
}
