document.addEventListener('DOMContentLoaded',function(){
 document.querySelectorAll('[data-tbd-scroll]').forEach(function(el){el.addEventListener('mouseenter',function(){el.style.animationPlayState='paused'});el.addEventListener('mouseleave',function(){el.style.animationPlayState='running'})});
});
