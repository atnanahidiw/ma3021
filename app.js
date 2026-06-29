
function mod(a,n){return ((a%n)+n)%n}function gcd(a,b){a=Math.abs(a);b=Math.abs(b);while(b){let t=a%b;a=b;b=t}return a}function egcd(a,b){let r0=a,r1=b,s0=1,s1=0,t0=0,t1=1,steps=[];while(r1!==0){let q=Math.floor(r0/r1);steps.push([r0,r1,q,r0-q*r1]);[r0,r1]=[r1,r0-q*r1];[s0,s1]=[s1,s0-q*s1];[t0,t1]=[t1,t0-q*t1]}return{g:r0,x:s0,y:t0,steps}}function nums(s){let m=(s||'').match(/-?\d+/g);return m?m.map(Number):[]}function list(s){return(s||'').split(',').map(x=>x.trim()).filter(Boolean)}function parsePairs(s){let out={},multi={};list(s).forEach(p=>{let [a,b]=p.split(':').map(x=>x&&x.trim());if(a&&b){out[a]=b;(multi[a] ||= []).push(b)}});return{out,multi}}function set(id,v){const el=document.getElementById(id); if(!el) return; el.textContent=v}function html(id,v){const el=document.getElementById(id); if(!el) return; el.innerHTML=v;typeset(id)}function typeset(id){const el=document.getElementById(id); if(window.MathJax&&MathJax.typesetPromise&&el){MathJax.typesetPromise([el]).catch(()=>{})}}function poly(a,p){a=a.slice();while(a.length>1&&mod(a[a.length-1],p)===0)a.pop();let parts=[];for(let i=0;i<a.length;i++){let c=mod(a[i],p);if(!c)continue;let term=i===0?`${c}`:i===1?`${c===1?'':c}x`:`${c===1?'':c}x^${i}`;parts.unshift(term)}return parts.join(' + ')||'0'}function peval(co,x,p){let s=0,pow=1;for(let c of co){s=mod(s+c*pow,p);pow=mod(pow*x,p)}return s}function pmul(a,b,p){let r=Array(a.length+b.length-1).fill(0);for(let i=0;i<a.length;i++)for(let j=0;j<b.length;j++)r[i+j]=mod(r[i+j]+a[i]*b[j],p);return r}function svg(id,content,w=560,h=310){const el=document.getElementById(id); if(!el) return; el.innerHTML=`<svg viewBox="0 0 ${w} ${h}" role="img"><defs><marker id="arr" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#475569"/></marker></defs>${content}</svg>`}function node(x,y,label,fill="#dbeafe"){return`<circle cx="${x}" cy="${y}" r="26" fill="${fill}" stroke="#1d4ed8" stroke-width="2"/><text x="${x}" y="${y+5}" text-anchor="middle" font-size="13" font-weight="700">${label}</text>`}function arrow(x1,y1,x2,y2,label=""){return`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#475569" stroke-width="2" marker-end="url(#arr)"/><text x="${(x1+x2)/2}" y="${(y1+y2)/2-6}" text-anchor="middle" font-size="12">${label}</text>`}function feedback(id,n,ok,msg){html(`${id}_f${n}`,(ok?'<span class="good">Benar.</span> ':'<span class="bad">Belum tepat.</span> ')+msg)}function val(id){return document.getElementById(id).value}function norm(s){return(s||'').toLowerCase().replace(/\s+/g,' ').trim()}function containsAll(s,words){s=norm(s);return words.every(w=>s.includes(w))}function table(headers,rows,hit){let h='<table><tr>'+headers.map(x=>`<th>${x}</th>`).join('')+'</tr>';rows.forEach((r,i)=>{h+='<tr>'+r.map((c,j)=>`<td class="${hit&&hit(i,j,c)?'hit':''}">${c}</td>`).join('')+'</tr>'});return h+'</table>'}
const quizRules={sets1:{1:[s=>containsAll(s,['surjective'])&&containsAll(s,['not','injective']),'Fungsi ini surjektif karena a dan b muncul sebagai hasil. Fungsi ini tidak injektif karena 1 dan 2 punya output yang sama, yaitu a.'],2:[s=>containsAll(s,['one input'])&&containsAll(s,['two'])||containsAll(s,['exactly one']),'Relasi gagal menjadi fungsi jika ada input tanpa output, atau ada input yang punya lebih dari satu output.']},sets2:{1:[s=>containsAll(s,['4x'])&&containsAll(s,['1']),'(g∘f)(x)=g(2x+1)=(2x+1)^2=4x^2+4x+1.'],2:[s=>containsAll(s,['undefined'])||containsAll(s,['missing']),'Komposisi membutuhkan f(x) berada di domain g. Jika peran hilang, g(f(x)) tidak terdefinisi.']},num1:{1:[s=>nums(s)[0]===3,'7+8+2=17. Perlu 17+x habis dibagi 5, jadi x=3.'],2:[s=>containsAll(s,['mod'])||containsAll(s,['remainder']),'Penerima menghitung ulang aturan modulo. Digit yang berubah sering mengubah sisa, sehingga kode ditolak.']},num2:{1:[s=>nums(s)[0]===23,'7·23=161≡1 mod 40.'],2:[s=>containsAll(s,['gcd'])&&containsAll(s,['1']),'Invers ada hanya ketika gcd(e,m)=1.']},grp1:{1:[s=>nums(s)[0]===4,'Empat putaran seperempat menghasilkan 360°, yaitu identitas.'],2:[s=>containsAll(s,['closure','associative','identity','inverse']),'Aksioma grup adalah closure, asosiatif, identitas, dan invers.']},grp2:{1:[s=>nums(s)[0]===4,'2+2+2+2≡0 mod 8.'],2:[s=>containsAll(s,['associativity']),'Tabel yang terlihat lengkap belum menjamin (ab)c=a(bc).']},norm1:{1:[s=>containsAll(s,['2','6','10']),'2+H={2,6,10} mod 12.'],2:[s=>containsAll(s,['ab=ba'])||containsAll(s,['commutative']),'Dalam grup abelian, ah=ha, sehingga aH=Ha.']},norm2:{1:[s=>containsAll(s,['well-defined'])&&containsAll(s,['coset']),'Normalitas memastikan perkalian koset tidak bergantung pada wakil yang dipilih.'],2:[s=>containsAll(s,['a3'])||containsAll(s,['e,r,r']),'A3={e,r,r²} normal di S3.']},hom1:{1:[s=>containsAll(s,['0','3']),'Kernel adalah {0,3}.'],2:[s=>containsAll(s,['phi(a+b)'])||containsAll(s,['φ(a+b)']),'Untuk grup aditif, φ(a+b)=φ(a)+φ(b).']},hom2:{1:[s=>containsAll(s,['kernel'])&&containsAll(s,['identity']),'Homomorfisma injektif tepat ketika kernel hanya berisi identitas.'],2:[s=>containsAll(s,['0','2']),'Kernel adalah {0,2}.']},ring1:{1:[s=>containsAll(s,['1','3','5','7']),'Unit di Z8 adalah 1,3,5,7.'],2:[s=>containsAll(s,['2','3','0']),'Di Z6, 2·3=6≡0.']},ring2:{1:[s=>containsAll(s,['zero divisor'])||containsAll(s,['no inverse']),'Z6 bukan field karena memiliki pembagi nol dan tidak semua elemen bukan nol punya invers.'],2:[s=>containsAll(s,['distributive']),'Hukum distributif menghubungkan penjumlahan dan perkalian.']},field1:{1:[s=>nums(s)[0]===0,'Di GF(2), 1+1=0.'],2:[s=>containsAll(s,['byte'])||containsAll(s,['inverse'])||containsAll(s,['finite']),'Aritmetika field berhingga menjaga operasi byte tetap tertutup dan menyediakan invers aljabar.']},field2:{1:[s=>containsAll(s,['field'])&&containsAll(s,['prime']),'Z11 adalah field karena 11 prima.'],2:[s=>containsAll(s,['3'])&&containsAll(s,['0']),'Z9 bukan daerah integral karena 3·3=9≡0.']},ideal1:{1:[s=>containsAll(s,['ri'])||containsAll(s,['absorb']),'Untuk setiap r di R dan i di I, ri dan ir harus tetap berada di I.'],2:[s=>containsAll(s,['shift'])&&containsAll(s,['x^n'])||containsAll(s,['ideal']),'Geser siklik berhubungan dengan perkalian oleh x modulo x^n−1.']},ideal2:{1:[s=>containsAll(s,['0','4','8']),'Kernel adalah {0,4,8}.'],2:[s=>containsAll(s,['ideal']),'Kernel dari homomorfisma ring adalah ideal.']},poly1:{1:[s=>nums(s)[0]===3,'1+2·2+3·4=17≡3 mod 7.'],2:[s=>containsAll(s,['extra'])||containsAll(s,['points'])||containsAll(s,['redundancy']),'Evaluasi tambahan memberi titik lebih banyak daripada koefisien asli; inilah redundansi.']},poly2:{1:[s=>containsAll(s,['0']),'Kedua koefisien menjadi 0 modulo 5.'],2:[s=>containsAll(s,['i+j'])||containsAll(s,['same degree']),'Koefisien x^k diperoleh dari semua a_i b_j dengan i+j=k.']},fac1:{1:[s=>containsAll(s,['x-2'])&&containsAll(s,['x-3'])||containsAll(s,['x+2'])&&containsAll(s,['x+3']),'Akarnya 2 dan 3, jadi x²+1=(x−2)(x−3) di Z5.'],2:[s=>containsAll(s,['irreducible'])&&containsAll(s,['no root']),'Di Z3, x²+1 tidak punya akar; karena derajat 2, polinomial ini irreducible.']},fac2:{1:[s=>containsAll(s,['field'])&&containsAll(s,['different']),'Faktorisasi dapat berubah ketika field berubah.'],2:[s=>nums(s).includes(2)||nums(s).includes(3),'Akar di Z5 adalah 2 dan 3.']}};
function checkQuiz(id,n){let s=val(`${id}_q${n}`);let [fn,msg]=quizRules[id][n];feedback(id,n,fn(s),msg)}
function sets1(){let A=list(val('sets1_A')),B=list(val('sets1_B')),P=parsePairs(val('sets1_pairs')),used=[],bad=[];A.forEach(a=>{if(!P.multi[a])bad.push(`${a} tidak punya output`);else if(P.multi[a].length>1)bad.push(`${a} punya lebih dari satu output`)});Object.keys(P.multi).forEach(a=>P.multi[a].forEach(b=>{if(!B.includes(b))bad.push(`${b} berada di luar kodomain`);used.push(b)}));let im=[...new Set(used)],injective=used.length===im.length&&bad.length===0,surj=B.every(b=>im.includes(b))&&bad.length===0;html('sets1_out',`Image/hasil yang muncul = {${im.join(', ')}}\nStatus: ${bad.length?'<span class="bad">bukan fungsi</span>':'<span class="good">fungsi</span>'}\n${bad.join('\n')}\nInjektif: ${injective}\nSurjektif: ${surj}\nBijektif: ${injective&&surj}`);let sx=120,tx=420,dy=48,s='';A.forEach((a,i)=>s+=node(sx,60+i*dy,a,'#eef2ff'));B.forEach((b,i)=>s+=node(tx,75+i*dy,b,'#dcfce7'));Object.keys(P.multi).forEach(a=>P.multi[a].forEach(b=>{let ai=A.indexOf(a),bi=B.indexOf(b);if(ai>=0&&bi>=0)s+=arrow(sx+26,60+ai*dy,tx-26,75+bi*dy)}));svg('sets1_svg',s)}function sets1Bad(){document.getElementById('sets1_pairs').value='A001:Math,A001:CS,A002:CS,A003:Physics';sets1()}function sets2(){let F=parsePairs(val('sets2_f')).out,G=parsePairs(val('sets2_g')).out,rows=[],s='';Object.keys(F).forEach((u,i)=>{let role=F[u],access=G[role]||'undefined';rows.push([u,role,access]);s+=node(90,55+i*60,u,'#dbeafe')+node(270,55+i*60,role,'#fef3c7')+node(450,55+i*60,access,'#dcfce7')+arrow(116,55+i*60,244,55+i*60)+arrow(296,55+i*60,424,55+i*60)});html('sets2_out',table(['user','role','access'],rows));svg('sets2_svg',s)}
function num1(){let prefix=val('num1_prefix').replace(/\D/g,''),m=Number(val('num1_mod')),sum=[...prefix].reduce((a,c)=>a+Number(c),0),check=mod(-sum,m);document.getElementById('num1_full').value=prefix+check;html('num1_out',`Digit sum = ${sum}\nDigit pengecek = ${check}\nKode lengkap = ${prefix+check}`);drawDigits('num1_svg',prefix+check,m)}function num1Test(){let c=val('num1_full').replace(/\D/g,''),m=Number(val('num1_mod')),sum=[...c].reduce((a,d)=>a+Number(d),0);html('num1_out',`Jumlah total = ${sum}\nSisa = ${mod(sum,m)}\n${mod(sum,m)===0?'<span class="good">diterima</span>':'<span class="bad">ditolak</span>'}`);drawDigits('num1_svg',c,m)}function drawDigits(id,c,m){let s='';[...c].forEach((d,i)=>{s+=`<rect x="${35+i*52}" y="90" width="40" height="${30+Number(d)*10}" fill="#bfdbfe" stroke="#1d4ed8"/><text x="${55+i*52}" y="75" text-anchor="middle" font-weight="700">${d}</text>`});s+=`<text x="35" y="230" font-size="16">Modulo ${m} check digit turns a code menjadi a remainder test.</text>`;svg(id,s,560,270)}function num2(){let e=Number(val('num2_e')),m=Number(val('num2_m')),r=egcd(e,m);if(Math.abs(r.g)!==1){html('num2_out',`gcd(${e},${m})=${r.g}. Tidak ada invers.`)}else{let d=mod(r.x,m);html('num2_out',`d = ${d}\n${e}·${d} = ${e*d} ≡ 1 mod ${m}\nBezout: ${e}(${r.x}) + ${m}(${r.y}) = ${r.g}`)}let steps=r.steps.map((x,i)=>`<text x="40" y="${45+i*30}" font-size="14">${x[0]} = ${x[2]}·${x[1]} + ${x[3]}</text>`).join('');svg('num2_svg',steps||'<text x="40" y="50">Tidak ada langkah</text>')}
function grp1(){let seq=nums(val('grp1_seq')),angle=0,s='<text x="25" y="35" font-size="16">Robot heading after each turn</text>';seq.forEach((t,i)=>{angle=mod(angle+t,360);let x=75+i*90,y=165;s+=`<circle cx="${x}" cy="${y}" r="34" fill="#eff6ff" stroke="#1d4ed8"/><line x1="${x}" y1="${y}" x2="${x+28*Math.sin(angle*Math.PI/180)}" y2="${y-28*Math.cos(angle*Math.PI/180)}" stroke="#dc2626" stroke-width="4"/><text x="${x}" y="${y+55}" text-anchor="middle">${angle}°</text>`});html('grp1_out',`Arah akhir = ${angle}°\nKembali ke identitas: ${angle===0}`);svg('grp1_svg',s)}function grp1Order(){let a=Number(val('grp1_el')),x=0;for(let k=1;k<=20;k++){x=mod(x+a,360);if(x===0){html('grp1_out',`Orde dari ${a}° = ${k}`);return}}html('grp1_out','Tidak ditemukan orde sampai 20.')}function grp2(){let c=val('grp2_choice'),els,op;if(c==='z3'){els=['0','1','2'];op=(a,b)=>String((Number(a)+Number(b))%3)}else if(c==='v4'){els=['e','a','b','c'];let T={e:{e:'e',a:'a',b:'b',c:'c'},a:{e:'a',a:'e',b:'c',c:'b'},b:{e:'b',a:'c',b:'e',c:'a'},c:{e:'c',a:'b',b:'a',c:'e'}};op=(a,b)=>T[a][b]}else{els=['e','a','b'];let T={e:{e:'e',a:'a',b:'b'},a:{e:'a',a:'b',b:'e'},b:{e:'b',a:'e',b:'b'}};op=(a,b)=>T[a][b]}let rows=els.map(a=>[a,...els.map(b=>op(a,b))]),assoc=true;for(let a of els)for(let b of els)for(let d of els)if(op(op(a,b),d)!==op(a,op(b,d)))assoc=false;html('grp2_out',table(['*',...els],rows)+`\nAsosiatif: ${assoc}`);svg('grp2_svg',els.map((e,i)=>node(100+i*110,150,e,i===0?'#dcfce7':'#dbeafe')).join(''))}
function norm1(){let n=Number(val('norm1_n')),d=Number(val('norm1_d')),a=Number(val('norm1_a')),H=[],x=0;do{H.push(x);x=mod(x+d,n)}while(x!==0&&H.length<=n+1);H=[...new Set(H)].sort((a,b)=>a-b);let cos=H.map(h=>mod(a+h,n)).sort((a,b)=>a-b),blok=[],seen=new Set();for(let g=0;g<n;g++){if(!seen.has(g)){let c=H.map(h=>mod(g+h,n)).sort((a,b)=>a-b);c.forEach(v=>seen.add(v));blok.push(c)}}html('norm1_out',`H={${H.join(', ')}}\n${a}+H={${cos.join(', ')}}\nKoset membagi Z${n} menjadi ${blok.length} blok.`);let s='';blok.forEach((b,i)=>{s+=`<rect x="${40+i*120}" y="70" width="100" height="150" rx="14" fill="${b.includes(a)?'#dcfce7':'#eff6ff'}" stroke="#1d4ed8"/><text x="${90+i*120}" y="100" text-anchor="middle">coset</text>`;b.forEach((v,j)=>s+=`<text x="${90+i*120}" y="${130+j*24}" text-anchor="middle">${v}</text>`)});svg('norm1_svg',s)}const S3=['e','r','r2','s','sr','sr2'];const P={e:[1,2,3],r:[2,3,1],r2:[3,1,2],s:[2,1,3],sr:[1,3,2],sr2:[3,2,1]};function comp(p,q){return[p[q[0]-1],p[q[1]-1],p[q[2]-1]]}function pname(a){return Object.keys(P).find(k=>P[k].join()==a.join())}function smul(a,b){return pname(comp(P[a],P[b]))}function sinv(a){return S3.find(b=>smul(a,b)==='e'&&smul(b,a)==='e')}function norm2(){let H=val('norm2_H')==='A3'?['e','r','r2']:['e','s'],ok=true,bad='';for(let a of S3)for(let h of H){let v=smul(smul(a,h),sinv(a));if(!H.includes(v)){ok=false;bad=`${a}${h}${a}^-1=${v}`}}html('norm2_out',`H={${H.join(', ')}}\n${ok?'<span class="good">normal</span>':'<span class="bad">tidak normal</span>'}\n${bad}`);svg('norm2_svg',S3.map((e,i)=>node(80+(i%3)*150,90+Math.floor(i/3)*120,e,H.includes(e)?'#dcfce7':'#fee2e2')).join(''))}
function hom1(){let n=Number(val('hom1_n')),m=Number(val('hom1_m')),k=Number(val('hom1_k')),ok=true,fail='';for(let a=0;a<n;a++)for(let b=0;b<n;b++){let L=mod(k*mod(a+b,n),m),R=mod(k*a+k*b,m);if(L!==R){ok=false;fail=`gagal pada ${a},${b}: ${L} vs ${R}`}}let ker=[],img=[];for(let x=0;x<n;x++){let y=mod(k*x,m);if(y===0)ker.push(x);if(!img.includes(y))img.push(y)}html('hom1_out',`${ok?'<span class="good">homomorfisma</span>':'<span class="bad">bukan homomorfisma</span>'}\n${fail}\nKernel={${ker.join(', ')}}\nImage={${img.join(', ')}}`);let s='';for(let x=0;x<n;x++)s+=node(70,30+x*40,x,'#dbeafe')+node(380,30+x*40,mod(k*x,m),'#dcfce7')+arrow(96,30+x*40,354,30+x*40);svg('hom1_svg',s,500,Math.max(300,60+n*40))}function hom2(){let arr=nums(val('hom2_img'));if(arr.length!==4){html('hom2_out','Masukkan 4 bayangan.');return}let ok=true,fail='';for(let a=0;a<4;a++)for(let b=0;b<4;b++){let L=mod(arr[mod(a+b,4)],2),R=mod(arr[a]+arr[b],2);if(L!==R){ok=false;fail=`gagal pada ${a},${b}`}}let ker=[0,1,2,3].filter(x=>mod(arr[x],2)===0);html('hom2_out',`Menjaga operasi: ${ok}\n${fail}\nKernel={${ker.join(', ')}}\nImage={${[...new Set(arr.map(x=>mod(x,2)))].join(', ')}}`);svg('hom2_svg',[0,1,2,3].map((x,i)=>node(80,50+i*60,x,'#dbeafe')+node(390,50+i*60,mod(arr[x],2),'#dcfce7')+arrow(106,50+i*60,364,50+i*60)).join(''))}
function ring1(){let n=Number(val('ring1_n')),units=[],zd=[];for(let a=1;a<n;a++){gcd(a,n)===1?units.push(a):zd.push(a)}html('ring1_out',`Unit={${units.join(', ')}}\nPembagi nol={${zd.join(', ')}}\nField: ${zd.length===0}`);let s='';for(let a=0;a<n;a++){let color=a===0?'#e2e8f0':units.includes(a)?'#dcfce7':'#fee2e2';s+=node(60+(a%8)*60,65+Math.floor(a/8)*70,a,color)}svg('ring1_svg',s,560,260)}function ring2(){let n=Number(val('ring2_n')),[a,b,c]=nums(val('ring2_vals')),L=mod(a*mod(b+c,n),n),R=mod(a*b+a*c,n);html('ring2_out',`a(b+c)=${L}\nab+ac=${R}\nSama: ${L===R}`);svg('ring2_svg',`<text x="40" y="55" font-size="18">Distribusikan dulu sebelum menghitung modulo ${n}</text>${node(150,145,`a=${a}`,'#dbeafe')}${node(280,105,`b=${b}`,'#dcfce7')}${node(280,185,`c=${c}`,'#dcfce7')}${arrow(176,145,254,110)}${arrow(176,145,254,180)}`)}function ring2Tables(){let n=Number(val('ring2_n')),els=[...Array(n).keys()],rows=els.map(a=>[a,...els.map(b=>mod(a*b,n))]);html('ring2_out',table(['×',...els],rows,(i,j,c)=>c===0&&i>0&&j>0))}
function gf16mul(a,b){let res=0,steps=[];for(let i=0;i<4;i++)if((b>>i)&1){res^=a<<i;steps.push(`tambah a·x^${i}: ${res.toString(2)}`)}for(let d=7;d>=4;d--)if((res>>d)&1){res^=0b10011<<(d-4);steps.push(`reduksi derajat ${d}: ${res.toString(2)}`)}return{v:res&15,steps}}function bitsPoly(v){let parts=[];if(v&1)parts.push('1');if(v&2)parts.push('x');if(v&4)parts.push('x²');if(v&8)parts.push('x³');return parts.join('+')||'0'}function field1(){let a=Number(val('field1_a')),b=Number(val('field1_b')),r=gf16mul(a,b);html('field1_out',`${bitsPoly(a)} × ${bitsPoly(b)} = ${bitsPoly(r.v)}\nNilai ${r.v}\n${r.steps.join('\n')}`);let s='';[0,1,2,3].forEach(i=>{s+=`<rect x="${70+i*90}" y="100" width="58" height="58" rx="10" fill="${(a>>i)&1?'#dcfce7':'#f1f5f9'}" stroke="#1d4ed8"/><text x="${99+i*90}" y="134" text-anchor="middle">x^${i}</text>`});s+=`<text x="70" y="210">Bit menjadi koefisien polinomial.</text>`;svg('field1_svg',s)}function field2(){let p=Number(val('field2_p')),[a,b]=nums(val('field2_eq')),d=gcd(a,p);if(d!==1){html('field2_out',`Tidak ada invers unik karena gcd(${a},${p})=${d}.`);return}let inv=mod(egcd(a,p).x,p),x=mod(inv*b,p);html('field2_out',`${a}x=${b} in Z${p}\n${a}^-1=${inv}\nx=${x}`);svg('field2_svg',`<text x="40" y="60" font-size="18">Selesaikan dengan mengalikan kedua sisi oleh invers.</text>${node(160,150,`${a}x`,'#dbeafe')}${node(300,150,`${b}`,'#dcfce7')}${arrow(190,150,270,150,'=')}`)}

function shiftWord(w, dir, steps){
  let x = w;
  for(let k=0;k<steps;k++){
    if(!x.length) return x;
    x = dir === 'left' ? x.slice(1) + x[0] : x.slice(-1) + x.slice(0,-1);
  }
  return x;
}
function wordPoly(w){
  let parts=[];
  [...w].forEach((b,i)=>{
    if(b==='1'){
      if(i===0) parts.push('1');
      else if(i===1) parts.push('x');
      else parts.push('x^'+i);
    }
  });
  return parts.length ? parts.join(' + ') : '0';
}
function ideal1Step(){
  const inp=document.getElementById('ideal1_word');
  if(!inp) return;
  const dir=(document.getElementById('ideal1_dir')||{}).value || 'right';
  inp.value = shiftWord(inp.value.replace(/[^01]/g,''), dir, 1);
  ideal1();
}
function ideal1(){
  let w=val('ideal1_word').replace(/[^01]/g,'');
  const dir=(document.getElementById('ideal1_dir')||{}).value || 'right';
  const steps=Math.max(1, Number((document.getElementById('ideal1_steps')||{}).value || 1));
  let sh=shiftWord(w, dir, steps);
  const n=w.length;
  const directionText = dir === 'left' ? 'geser kiri' : 'geser kanan';
  html('ideal1_out',
    `codeword awal: ${w}\n`+
    `hasil ${directionText} ${steps} langkah: ${sh}\n\n`+
    `polinomial awal c(x) = ${wordPoly(w)}\n`+
    `polinomial hasil = ${wordPoly(sh)}\n\n`+
    `Makna aljabar: geser kanan satu langkah ≈ x·c(x) mod (x^${n}-1). Karena x^${n}=1, suku yang melewati batas kembali ke awal.`
  );
  const bits=[...w];
  const shifted=[...sh];
  const size=42, gap=14, startX=55, y1=95, y2=205;
  let s=`<text x="35" y="35" font-size="16" font-weight="700">Klik panah untuk geser satu langkah</text>`;
  bits.forEach((b,i)=>{
    s+=`<rect x="${startX+i*(size+gap)}" y="${y1}" width="${size}" height="${size}" rx="9" fill="${b==='1'?'#1d4ed8':'#e2e8f0'}" stroke="#334155"/>`;
    s+=`<text x="${startX+i*(size+gap)+size/2}" y="${y1+27}" text-anchor="middle" fill="${b==='1'?'white':'#334155'}" font-weight="800">${b}</text>`;
    s+=`<text x="${startX+i*(size+gap)+size/2}" y="${y1-8}" text-anchor="middle" font-size="12">x^${i}</text>`;
  });
  shifted.forEach((b,i)=>{
    s+=`<rect x="${startX+i*(size+gap)}" y="${y2}" width="${size}" height="${size}" rx="9" fill="${b==='1'?'#0f766e':'#ecfeff'}" stroke="#0f766e"/>`;
    s+=`<text x="${startX+i*(size+gap)+size/2}" y="${y2+27}" text-anchor="middle" fill="${b==='1'?'white':'#0f766e'}" font-weight="800">${b}</text>`;
  });
  const midX=startX+(Math.max(bits.length,1)*(size+gap))/2-20;
  s+=`<g onclick="ideal1Step()" style="cursor:pointer">`;
  s+=`<path d="M${midX-95} 165 C${midX-45} 135, ${midX+45} 135, ${midX+95} 165" fill="none" stroke="#f97316" stroke-width="5" marker-end="url(#arr)"/>`;
  s+=`<rect x="${midX-78}" y="145" width="156" height="34" rx="17" fill="#fff7ed" stroke="#f97316"/>`;
  s+=`<text x="${midX}" y="167" text-anchor="middle" font-size="13" font-weight="800" fill="#9a3412">klik untuk geser</text>`;
  s+=`</g>`;
  s+=`<text x="35" y="290" font-size="13">Geser siklik menjaga panjang kata kode dan memutar posisi bit seperti operasi modulo x^n−1.</text>`;
  svg('ideal1_svg',s,560,320);
}
function ideal2(){let n=Number(val('ideal2_n')),m=Number(val('ideal2_m')),ker=[];for(let x=0;x<n;x++)if(mod(x,m)===0)ker.push(x);let absorb=true;for(let r=0;r<n;r++)for(let i of ker)if(!ker.includes(mod(r*i,n)))absorb=false;html('ideal2_out',`Kernel={${ker.join(', ')}}\nAbsorption test: ${absorb}\nKernel adalah ideal.`);svg('ideal2_svg',ker.map((x,i)=>node(80+i*85,140,x,'#dcfce7')).join(''))}
function poly1(){let p=Number(val('poly1_p')),co=nums(val('poly1_coeff')),rows=[];for(let x=0;x<Math.min(p,8);x++)rows.push([x,peval(co,x,p)]);html('poly1_out',`f(x)=${poly(co,p)} di Z${p}\n`+table(['x','f(x)'],rows));let max=Math.max(...rows.map(r=>r[1]),1);svg('poly1_svg',rows.map((r,i)=>`<circle cx="${60+i*60}" cy="${230-r[1]*150/max}" r="8" fill="#1d4ed8"/><text x="${60+i*60}" y="255" text-anchor="middle">${r[0]}</text>`).join('')+'<text x="40" y="35">Titik evaluasi menjadi simbol yang dikirim.</text>')}function poly2(){let p=Number(val('poly2_p')),f=nums(val('poly2_f')),g=nums(val('poly2_g')),r=pmul(f,g,p);html('poly2_out',`f=${poly(f,p)}\ng=${poly(g,p)}\nf·g=${poly(r,p)}`);svg('poly2_svg',r.map((c,i)=>`<rect x="${55+i*70}" y="${200-c*8}" width="45" height="${c*8+20}" fill="#bfdbfe" stroke="#1d4ed8"/><text x="${77+i*70}" y="240" text-anchor="middle">x^${i}</text><text x="${77+i*70}" y="${190-c*8}" text-anchor="middle">${c}</text>`).join(''))}
function fac1(){let p=Number(val('fac1_p')),co=nums(val('fac1_coeff')),akar=[],rows=[];for(let a=0;a<p;a++){let y=peval(co,a,p);rows.push([a,y]);if(y===0)akar.push(a)}let deg=co.length-1,note=akar.length?`Faktor linear: ${akar.map(r=>'x-'+r).join(', ')}`:((deg===2||deg===3)?'Tidak ada akar. Untuk derajat 2 atau 3, ini membuktikan irreducible.':'Tidak ada akar linear.');html('fac1_out',`f=${poly(co,p)}\nAkar={${akar.join(', ')||'tidak ada'}}\n${note}\n`+table(['a','f(a)'],rows,(i,j,c)=>j===1&&c===0));svg('fac1_svg',rows.map((r,i)=>node(55+i*60,160,r[0],r[1]===0?'#dcfce7':'#fee2e2')).join(''))}function fac2(){let kind=val('fac2_poly'),ps=[2,3,5,7,11],lines=[],s='';ps.forEach((p,i)=>{let akar=[];for(let a=0;a<p;a++){let y=kind==='x2p1'?mod(a*a+1,p):mod(a*a*a+1,p);if(y===0)akar.push(a)}lines.push(`Z${p}: akar {${akar.join(', ')||'tidak ada'}}`);s+=node(70+i*95,150,`Z${p}`,akar.length?'#dcfce7':'#fee2e2')});html('fac2_out',lines.join('\n'));svg('fac2_svg',s)}
function safeRun(requiredElementId, labId, fn){
  try {
    if (document.getElementById(requiredElementId)) fn();
  } catch (e) {
    const out = document.getElementById(labId + '_out');
    if (out) out.innerHTML = '<span class="bad">Visualisasi gagal dimuat.</span> ' + e.message;
    console.error('Lab gagal:', labId, e);
  }
}
function init(){
  safeRun('sets1_A','sets1',sets1);
  safeRun('sets2_f','sets2',sets2);
  safeRun('num1_prefix','num1',num1);
  safeRun('num2_e','num2',num2);
  safeRun('grp1_seq','grp1',grp1);
  safeRun('grp2_choice','grp2',grp2);
  safeRun('norm1_n','norm1',norm1);
  safeRun('norm2_H','norm2',norm2);
  safeRun('hom1_n','hom1',hom1);
  safeRun('hom2_img','hom2',hom2);
  safeRun('ring1_n','ring1',ring1);
  safeRun('ring2_n','ring2',ring2);
  safeRun('field1_a','field1',field1);
  safeRun('field2_p','field2',field2);
  safeRun('ideal1_word','ideal1',ideal1);
  safeRun('ideal2_n','ideal2',ideal2);
  safeRun('poly1_p','poly1',poly1);
  safeRun('poly2_p','poly2',poly2);
  safeRun('fac1_p','fac1',fac1);
  safeRun('fac2_poly','fac2',fac2);
}
window.addEventListener('load',()=>{
  boxPageSections();
  init();
  if(window.MathJax&&MathJax.typesetPromise){MathJax.typesetPromise();}
})


function boxPageSections(){
  document.querySelectorAll('.toggle-body').forEach(body=>{
    if(body.dataset.boxed==='1') return;
    const direct=Array.from(body.children).filter(el=>!el.classList.contains('lab'));
    if(!direct.length) return;
    let groups=[], current=[];
    direct.forEach(el=>{
      if(el.tagName==='H3' && current.length){ groups.push(current); current=[el]; }
      else current.push(el);
    });
    if(current.length) groups.push(current);
    groups.forEach(group=>{
      if(group.length===1 && group[0].classList.contains('content-section')) return;
      const wrap=document.createElement('div');
      wrap.className='content-section';
      group[0].parentNode.insertBefore(wrap, group[0]);
      group.forEach(el=>wrap.appendChild(el));
    });
    body.dataset.boxed='1';
  });
}
