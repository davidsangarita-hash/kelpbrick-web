(function(){var KB=window.KB,$=KB.$,C=KB_DATA.cmp,cm=$('#cm'),ct=$('#ct');if(!ct)return;var on={k:1,a:1,c:1,s:1};
cm.innerHTML=C.mats.map(function(m){return'<button class="chip on" data-i="'+m.id+'">'+m.n+'</button>'}).join('');
function draw(){var M=C.mats.filter(function(m){return on[m.id]}),cl=function(m){return m.id=='k'?' class="k"':''};
var h='<thead><tr><th>Característica</th>'+M.map(function(m){return'<th'+cl(m)+'>'+m.n+'<br><span class="sb">'+m.s+'</span></th>'}).join('')+'</tr></thead><tbody>';
C.rows.forEach(function(r){h+='<tr><td>'+r[0]+'</td>'+M.map(function(m){return'<td'+cl(m)+'>'+r[1][m.id]+'</td>'}).join('')+'</tr>'});
ct.innerHTML=h+'</tbody>'}
cm.onclick=function(e){var b=e.target.closest('.chip');if(!b)return;var i=b.dataset.i;if(on[i]&&Object.keys(on).filter(function(k){return on[k]}).length==1)return;on[i]=!on[i];b.classList.toggle('on',!!on[i]);draw()};draw()})();
