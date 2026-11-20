(function(){var KB=window.KB,$=KB.$,$$=KB.$$,rm=KB.rm,K=KB_DATA.mats,ST=KB_DATA.stages;
var tx=$('.txt'),ds=$$('.dots span'),st=$('.sticky'),pr=$('.prod'),hero=$('.hero'),last=-1;
function sm(a,b,x){x=Math.min(1,Math.max(0,(x-a)/(b-a)));return x*x*(3-2*x)}
function prog(){var r=pr.getBoundingClientRect();return Math.min(1,Math.max(0,-r.top/(r.height-innerHeight)))}
function stage(s){if(s===last)return;last=s;var o=ST[s];tx.innerHTML='<p class="lb-l">0'+(s+1)+' / 05</p><h3>'+o[0]+'</h3><h4>'+o[1]+'</h4><p>'+o[2]+'</p>';tx.classList.remove('sw');void tx.offsetWidth;tx.classList.add('sw');ds.forEach(function(d,i){d.classList.toggle('on',i==s)})}
function fb(){document.body.classList.add('nogl');(function f(){requestAnimationFrame(f);stage(Math.min(4,Math.floor(prog()*5)))})()}
var ok=false;try{var c0=document.createElement('canvas');ok=!!(c0.getContext('webgl2')||c0.getContext('webgl'))}catch(e){}
if(!ok){fb();return}
import('https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js').then(init).catch(fb);
function init(T){
function tex(k){var w=512,h=256,c=document.createElement('canvas');c.width=w;c.height=h;var x=c.getContext('2d'),i,j;x.fillStyle=k.b;x.fillRect(0,0,w,h);
for(i=0;i<1400;i++){x.fillStyle=k.c[i%k.c.length];x.globalAlpha=.35+Math.random()*.5;x.fillRect(Math.random()*w,Math.random()*h,1+Math.random()*4,1+Math.random()*4)}
if(k.f)for(i=0;i<260;i++){x.strokeStyle=k.c[i%k.c.length];x.globalAlpha=.8;x.lineWidth=1+Math.random()*2.5;var px=Math.random()*w,py=Math.random()*h,a=Math.random()*6.28;x.beginPath();x.moveTo(px,py);for(j=0;j<8;j++){a+=(Math.random()-.5)*.9;px+=Math.cos(a)*10;py+=Math.sin(a)*10;x.lineTo(px,py)}x.stroke()}
var t=new T.CanvasTexture(c);t.colorSpace=T.SRGBColorSpace;return t}
function real(){var t=new T.TextureLoader().load(window.BRICK_TEX);t.colorSpace=T.SRGBColorSpace;return t}
var H=1.3,sc=['#8a6d1f','#4a4a1c','#a98b2e','#3d5a2a','#5a4a18'];
function mk(){var g=new T.Group(),L=[],y=-H/2,i;
[1,2,3,4,0].forEach(function(ki,i){var k=K[ki],h=k.p/100*H,t=(ki==0&&window.BRICK_TEX)?real():tex(k),m=new T.Mesh(new T.BoxGeometry(3,h,1.5),new T.MeshStandardMaterial({map:t,bumpMap:t,bumpScale:ki==0?3:1.5,roughness:.92,transparent:ki==4,opacity:ki==4?.88:1}));m.castShadow=m.receiveShadow=true;m.position.y=y+h/2;m.userData={y0:m.position.y,i:i,ki:ki};y+=h;g.add(m);L.push(m)});
var sg=new T.Group();sg.position.y=K[0].p/100*H/2;L[4].add(sg);
for(i=0;i<34;i++){var p=[],x=(Math.random()-.5)*2.7,z=(Math.random()-.5)*1.3,a=Math.random()*6.28;
for(var j=0;j<6;j++){p.push(new T.Vector3(x,.02+(j?Math.random()*.16:0),z));a+=(Math.random()-.5)*1.6;x+=Math.cos(a)*.25;z+=Math.sin(a)*.25}
sg.add(new T.Mesh(new T.TubeGeometry(new T.CatmullRomCurve3(p),20,.012+Math.random()*.01,5),new T.MeshStandardMaterial({color:sc[i%5],roughness:.9})));
if(i%4==0){var v0=new T.Mesh(new T.SphereGeometry(.035,8,8),new T.MeshStandardMaterial({color:'#6b7a2a',roughness:.6}));v0.position.copy(p[5]);sg.add(v0)}}
return{g:g,L:L,sg:sg}}
function mkR(cv){var R=new T.WebGLRenderer({canvas:cv,antialias:true,alpha:true});R.setPixelRatio(Math.min(devicePixelRatio,1.75));R.toneMapping=T.ACESFilmicToneMapping;R.toneMappingExposure=1.15;R.shadowMap.enabled=true;R.shadowMap.type=T.PCFSoftShadowMap;return R}
function lights(S,fy){S.add(new T.AmbientLight(0xffffff,.55));var d=new T.DirectionalLight(0xfff2dd,2.6);d.position.set(3,6,4);d.castShadow=true;d.shadow.mapSize.set(1024,1024);var c=d.shadow.camera;c.left=-4;c.right=4;c.top=4;c.bottom=-4;c.near=1;c.far=20;S.add(d);
var r=new T.PointLight(0x3d7a4a,28,14);r.position.set(-3.5,1.2,-2.5);S.add(r);var f=new T.PointLight(0x8fd9a0,6,10);f.position.set(3,-1,3);S.add(f);
var pl=new T.Mesh(new T.PlaneGeometry(14,14),new T.ShadowMaterial({opacity:.35}));pl.rotation.x=-Math.PI/2;pl.position.y=fy;pl.receiveShadow=true;S.add(pl)}
/* ---- producto ---- */
var cv=$('#cv'),R=mkR(cv),S=new T.Scene(),C=new T.PerspectiveCamera(35,1,.1,50),B=mk(),g=B.g,L=B.L,sg=B.sg;S.add(g);lights(S,-2);
var F=[],i;for(i=0;i<36;i++){var kk=K[i%5],f=new T.Mesh(i%3?new T.IcosahedronGeometry(.07+Math.random()*.07,0):new T.SphereGeometry(.05,8,8),new T.MeshStandardMaterial({color:kk.c[0],roughness:.9}));f.userData={a:Math.random()*6.28,r:1.9+Math.random()*.9,y:(Math.random()-.5)*2.6,s:.2+Math.random()*.4};g.add(f);F.push(f)}
var pa=new Float32Array(900);for(i=0;i<900;i++)pa[i]=(Math.random()-.5)*5;var pg=new T.BufferGeometry();pg.setAttribute('position',new T.BufferAttribute(pa,3));var pm=new T.PointsMaterial({color:'#c9b58f',size:.025,transparent:true,opacity:0});g.add(new T.Points(pg,pm));
var lw=L.map(function(m){var d=document.createElement('div');d.className='lb';d.innerHTML='<b>'+K[m.userData.ki].p+'%</b>'+K[m.userData.ki].n;st.appendChild(d);return d});
var ox=0,oy=0,vy=0,dg=false,px,py;
cv.addEventListener('pointerdown',function(e){dg=true;px=e.clientX;py=e.clientY;try{cv.setPointerCapture(e.pointerId)}catch(x){}});
cv.addEventListener('pointermove',function(e){if(!dg)return;vy=(e.clientX-px)*.008;oy+=vy;ox=Math.max(-.9,Math.min(.9,ox+(e.clientY-py)*.005));px=e.clientX;py=e.clientY});
['pointerup','pointercancel'].forEach(function(n){cv.addEventListener(n,function(){dg=false})});
/* ---- hero ---- */
var hc=$('#hc'),HR=mkR(hc),HS=new T.Scene(),HC=new T.PerspectiveCamera(32,1,.1,50),HB=mk();HS.add(HB.g);lights(HS,-1.5);var mx=0,my=0,tx0=0,ty0=0,hy=0;
addEventListener('pointermove',function(e){tx0=e.clientX/innerWidth-.5;ty0=e.clientY/innerHeight-.5});
function rs(){var w=st.clientWidth,h=st.clientHeight,mb=w<=768;R.setSize(w,h,false);C.aspect=w/h;C.position.set(0,.5,mb?10.5:7.8);C.lookAt(0,0,0);C.updateProjectionMatrix();g.position.set(mb?0:1.0,mb?.9:0,0);g.scale.setScalar(mb?.95:.82);
var hw=hc.clientWidth,hh=hc.clientHeight;HR.setSize(hw,hh,false);HC.aspect=hw/hh;HC.position.set(0,.5,hw<500?8.6:5.8);HC.lookAt(0,0,0);HC.updateProjectionMatrix()}
hero.classList.add('gl');rs();addEventListener('resize',rs);
var vis=true,hv=true,cur=0,v=new T.Vector3();new IntersectionObserver(function(e){vis=e[0].isIntersecting}).observe(pr);new IntersectionObserver(function(e){hv=e[0].isIntersecting}).observe(hero);
function fr(t){requestAnimationFrame(fr);var tt=rm?0:t;
if(hv){mx+=(tx0-mx)*.06;my+=(ty0-my)*.06;var k=Math.min(1,scrollY/innerHeight);hy+=(k-hy)*.1;HB.g.rotation.set(.3+my*.15,.6+hy*1.8+tt*.00025+mx*.5,0);HB.g.position.y=Math.sin(tt*.0012)*.07;HB.g.scale.setScalar(1+hy*.1);
var he=hy*.45;HB.L.forEach(function(m){m.position.y=m.userData.y0+(m.userData.i-2)*.5*he});HR.render(HS,HC)}
if(!vis)return;var p=prog();cur=rm?p:cur+(p-cur)*.1;
var e=sm(.15,.42,cur)*(1-sm(.8,.97,cur)),s=Math.min(4,Math.floor(cur*5));
if(!dg){oy+=vy;vy*=.95;oy*=.992;ox*=.97}
g.rotation.set(.28+ox,.5+cur*Math.PI*1.1+oy+tt*.00006,0);
L.forEach(function(m){m.position.y=m.userData.y0+(m.userData.i-2)*.62*e});sg.scale.setScalar(.001+sm(.25,.45,cur));
F.forEach(function(m){var u=m.userData,a=u.a+tt*.0003*u.s;m.position.set(Math.cos(a)*u.r,u.y,Math.sin(a)*u.r);m.scale.setScalar(.001+Math.max(0,(e-.5)*2))});
pm.opacity=Math.max(0,e-.4)*.9;
lw.forEach(function(d,i){L[i].getWorldPosition(v);v.project(C);d.style.top=((1-v.y)/2*st.clientHeight)+'px';d.style.opacity=Math.max(0,Math.min(1,(e-.7)/.3))});
stage(s);R.render(S,C)}
requestAnimationFrame(fr)}
})();
