(function(){
var $=function(s,c){return(c||document).querySelector(s)},$$=function(s,c){return[].slice.call((c||document).querySelectorAll(s))};
var rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
var lg=$('#logo');lg.onerror=function(){lg.style.display='none'};
$('#burger').onclick=function(){$('#nav').classList.toggle('open')};$$('.links a').forEach(function(a){a.onclick=function(){$('#nav').classList.remove('open')}});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
$$('.reveal,.bar').forEach(function(el){io.observe(el)});
var links=$$('.links a'),so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)links.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')=='#'+e.target.id)})})},{rootMargin:'-45% 0px -50% 0px'});
$$('header[id],section[id]').forEach(function(s){so.observe(s)});
var org=$('.org'),svg=$('.org svg');
function lines(){svg.innerHTML='';if(innerWidth<=768)return;var o=org.getBoundingClientRect(),c=$('.ceo').getBoundingClientRect(),x0=c.left+c.width/2-o.left,y0=c.bottom-o.top;
$$('.dir').forEach(function(d){var r=d.getBoundingClientRect(),x=r.left+r.width/2-o.left,y=r.top-o.top,m=(y0+y)/2;svg.insertAdjacentHTML('beforeend','<path d="M'+x0+' '+y0+'V'+m+'H'+x+'V'+y+'"/>')})}
addEventListener('resize',lines);addEventListener('load',lines);lines();

var stm=$('.stm p');stm.innerHTML=stm.textContent.trim().split(/\s+/).map(function(w){return'<span>'+w+'</span>'}).join(' ');var sw=$$('.stm span'),hb=$('.hb'),hz=$('.hz'),trk=$('.trk'),pg=$('.prg i');
$$('[data-n]').forEach(function(el){new IntersectionObserver(function(e,o){if(e[0].isIntersecting){o.disconnect();var n=+el.dataset.n,t0=performance.now();(function f(t){var k=rm?1:Math.min(1,(t-t0)/1400);k=1-Math.pow(1-k,3);el.textContent=Math.round(n*k)+(el.dataset.s||'');if(k<1)requestAnimationFrame(f)})(t0)}}).observe(el)});
function sc(){var vh=innerHeight,y=scrollY;if(y<vh*1.2){var k=Math.min(1,y/vh);hb.style.transform='translate(-50%,calc(-50% + '+(-k*40)+'px)) scale('+(1+k*.18)+')';hb.style.opacity=1-k*.9}
var r=stm.getBoundingClientRect(),p=Math.min(1,Math.max(0,(vh*.85-r.top)/(vh*.6+r.height*.6))),on=Math.floor(p*sw.length*1.08);sw.forEach(function(s,i){s.classList.toggle('on',i<on)});
var h=hz.getBoundingClientRect(),q=Math.min(1,Math.max(0,-h.top/(h.height-vh)));trk.style.transform='translateX('+(-q*(trk.scrollWidth-innerWidth))+'px)';pg.style.width=q*100+'%'}
addEventListener('scroll',function(){requestAnimationFrame(sc)},{passive:true});addEventListener('resize',sc);sc();
})();
