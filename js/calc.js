(function(){var KB=window.KB,$=KB.$,D=KB_DATA.calc,rz=$('#rz');if(!rz)return;
var qr=$('#qr'),qn=$('#qn'),eq=false,fm=function(n){return'$'+Math.round(n).toLocaleString('es-CO')},rg=function(a,b){return a==b?fm(a):fm(a)+' – '+fm(b)};
function run(){var n=Math.max(0,Math.floor(+qn.value)||0),ins=n*D.insumo,lo=ins+(eq?D.equipoLo:0),hi=ins+(eq?D.equipoHi:0),c=[['Ladrillos',n.toLocaleString('es-CO')],['Insumos ($5.000 por ladrillo)',fm(ins)]];
if(eq)c.push(['Maquinaria y equipos',rg(D.equipoLo,D.equipoHi)]);
c.push(['Costo total',rg(lo,hi)]);if(n>0)c.push(['Costo por ladrillo',rg(lo/n,hi/n)]);
rz.innerHTML=c.map(function(x,i){return'<div><p class="lb-l">'+x[0]+'</p><b'+(x[0]=='Costo total'?' class="tot"':'')+'>'+x[1]+'</b></div>'}).join('')}
qr.oninput=function(){qn.value=qr.value;run()};qn.oninput=function(){qr.value=Math.min(+qn.value||0,+qr.max);run()};
[].forEach.call(document.querySelectorAll('[data-m]'),function(b){b.onclick=function(){eq=b.dataset.m=='e';[].forEach.call(document.querySelectorAll('[data-m]'),function(x){x.classList.toggle('on',x==b)});run()}});
run()})();
