let e,t,n=!1;const l="undefined"!=typeof window?window:{},s=l.document||{head:{}},o={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},r=e=>Promise.resolve(e),i=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),c=new WeakMap,u=e=>"sc-"+e.o,a={},f=e=>"object"==(e=typeof e)||"function"===e,$=(e,t,...n)=>{let l=null,s=!1,o=!1,r=[];const i=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?i(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof e&&!f(l))&&(l+=""),s&&o?r[r.length-1].i+=l:r.push(s?d(null,l):l),o=s)};if(i(n),t){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}const c=d(e,null);return c.u=t,r.length>0&&(c.$=r),c},d=(e,t)=>({t:0,h:e,i:t,m:null,$:null,u:null}),h={},m=(e,t,n,l,s,o)=>{if(n!==l){let r=F(e,t);if(t.toLowerCase(),"class"===t){const t=e.classList,s=p(n),o=p(l);t.remove(...s.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!s.includes(e))))}else{const i=f(l);if((r||i&&null!==l)&&!s)try{if(e.tagName.includes("-"))e[t]=l;else{let s=null==l?"":l;"list"===t?r=!1:null!=n&&e[t]==s||(e[t]=s)}}catch(e){}null==l||!1===l?!1===l&&""!==e.getAttribute(t)||e.removeAttribute(t):(!r||4&o||s)&&!i&&e.setAttribute(t,l=!0===l?"":l)}}},y=/\s/,p=e=>e?e.split(y):[],b=(e,t,n,l)=>{const s=11===t.m.nodeType&&t.m.host?t.m.host:t.m,o=e&&e.u||a,r=t.u||a;for(l in o)l in r||m(s,l,o[l],void 0,n,t.t);for(l in r)m(s,l,o[l],r[l],n,t.t)},w=(t,n,l)=>{let o,r,i=n.$[l],c=0;if(null!==i.i)o=i.m=s.createTextNode(i.i);else if(o=i.m=s.createElement(i.h),b(null,i,!1),null!=e&&o["s-si"]!==e&&o.classList.add(o["s-si"]=e),i.$)for(c=0;c<i.$.length;++c)r=w(t,i,c),r&&o.appendChild(r);return o},S=(e,n,l,s,o,r)=>{let i,c=e;for(c.shadowRoot&&c.tagName===t&&(c=c.shadowRoot);o<=r;++o)s[o]&&(i=w(null,l,o),i&&(s[o].m=i,c.insertBefore(i,n)))},g=(e,t,n,l)=>{for(;t<=n;++t)(l=e[t])&&l.m.remove()},j=(e,t)=>e.h===t.h,M=(e,t)=>{const n=t.m=e.m,l=e.$,s=t.$,o=t.i;null===o?("slot"===t.h||b(e,t,!1),null!==l&&null!==s?((e,t,n,l)=>{let s,o=0,r=0,i=t.length-1,c=t[0],u=t[i],a=l.length-1,f=l[0],$=l[a];for(;o<=i&&r<=a;)null==c?c=t[++o]:null==u?u=t[--i]:null==f?f=l[++r]:null==$?$=l[--a]:j(c,f)?(M(c,f),c=t[++o],f=l[++r]):j(u,$)?(M(u,$),u=t[--i],$=l[--a]):j(c,$)?(M(c,$),e.insertBefore(c.m,u.m.nextSibling),c=t[++o],$=l[--a]):j(u,f)?(M(u,f),e.insertBefore(u.m,c.m),u=t[--i],f=l[++r]):(s=w(t&&t[r],n,r),f=l[++r],s&&c.m.parentNode.insertBefore(s,c.m));o>i?S(e,null==l[a+1]?null:l[a+1].m,n,l,r,a):r>a&&g(t,o,i)})(n,l,t,s):null!==s?(null!==e.i&&(n.textContent=""),S(n,null,t,s,0,s.length-1)):null!==l&&g(l,0,l.length-1)):e.i!==o&&(n.data=o)},v=e=>U(e).p,k=(e,t)=>{t&&!e.S&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.S=t)))},C=(e,t)=>{if(e.t|=16,!(4&e.t))return k(e,e.g),Y((()=>O(e,t)));e.t|=512},O=(e,t)=>{const n=e.j;let l;return t&&(l=E(n,"componentWillLoad")),l=L(l,(()=>E(n,"componentWillRender"))),L(l,(()=>P(e,n,t)))},P=async(e,t,n)=>{const l=e.p,o=l["s-rc"];n&&(e=>{const t=e.M,n=e.p,l=t.t,o=((e,t)=>{let n=u(t),l=B.get(n);if(e=11===e.nodeType?e:s,l)if("string"==typeof l){let t,o=c.get(e=e.head||e);o||c.set(e,o=new Set),o.has(n)||(t=s.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"),2&l&&n.classList.add(o+"-s"))})(e);R(e,t),o&&(o.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>W(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},R=(n,l)=>{try{l=l.render(),n.t&=-17,n.t|=2,((n,l)=>{const s=n.p,o=n.v||d(null,null),r=(e=>e&&e.h===h)(l)?l:$(null,null,l);t=s.tagName,r.h=null,r.t|=4,n.v=r,r.m=o.m=s.shadowRoot||s,e=s["s-sc"],M(o,r)})(n,l)}catch(e){V(e,n.p)}return null},W=e=>{const t=e.p,n=e.g;E(e.j,"componentDidRender"),64&e.t||(e.t|=64,N(t),e.k(t),n||x()),e.S&&(e.S(),e.S=void 0),512&e.t&&X((()=>C(e,!1))),e.t&=-517},x=()=>{N(s.documentElement),X((()=>(e=>{const t=o.ce("appload",{detail:{namespace:"hybrid-animations"}});return e.dispatchEvent(t),t})(l)))},E=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){V(e)}},L=(e,t)=>e&&e.then?e.then(t):t(),N=e=>e.classList.add("hydrated"),T=(e,t,n)=>{if(t.C){const l=Object.entries(t.C),s=e.prototype;if(l.map((([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(s,e,{get(){return((e,t)=>U(this).O.get(t))(0,e)},set(n){((e,t,n,l)=>{const s=U(e),o=s.O.get(t),r=s.t,i=s.j;n=((e,t)=>null==e||f(e)?e:1&t?e+"":e)(n,l.C[t][0]),8&r&&void 0!==o||n===o||Number.isNaN(o)&&Number.isNaN(n)||(s.O.set(t,n),i&&2==(18&r)&&C(s,!1))})(this,e,n,t)},configurable:!0,enumerable:!0})})),1&n){const t=new Map;s.attributeChangedCallback=function(e,n,l){o.jmp((()=>{const n=t.get(e);if(this.hasOwnProperty(n))l=this[n],delete this[n];else if(s.hasOwnProperty(n)&&"number"==typeof this[n]&&this[n]==l)return;this[n]=(null!==l||"boolean"!=typeof this[n])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,n])=>{const l=n[1]||e;return t.set(l,e),l}))}}return e},A=(e,t={})=>{const n=[],r=t.exclude||[],c=l.customElements,a=s.head,f=a.querySelector("meta[charset]"),$=s.createElement("style"),d=[];let h,m=!0;Object.assign(o,t),o.l=new URL(t.resourcesUrl||"./",s.baseURI).href,e.map((e=>{e[1].map((t=>{const l={t:t[0],o:t[1],C:t[2],P:t[3]};l.C=t[2];const s=l.o,a=class extends HTMLElement{constructor(e){super(e),D(e=this,l),1&l.t&&e.attachShadow({mode:"open"})}connectedCallback(){h&&(clearTimeout(h),h=null),m?d.push(this):o.jmp((()=>(e=>{if(0==(1&o.t)){const t=U(e),n=t.M,l=()=>{};if(!(1&t.t)){t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){k(t,t.g=n);break}}n.C&&Object.entries(n.C).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=z(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(T(s,n,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(e){V(e)}t.t&=-9,e()}if(s.style){let e=s.style;const t=u(n);if(!B.has(t)){const l=()=>{};((e,t,n)=>{let l=B.get(e);i&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,B.set(e,l)})(t,e,!!(1&n.t)),l()}}}const o=t.g,r=()=>C(t,!0);o&&o["s-rc"]?o["s-rc"].push(r):r()})(0,t,n)}l()}})(this)))}disconnectedCallback(){o.jmp((()=>{}))}componentOnReady(){return U(this).R}};l.W=e[0],r.includes(s)||c.get(s)||(n.push(s),c.define(s,T(a,l,1)))}))})),$.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",$.setAttribute("data-styles",""),a.insertBefore($,f?f.nextSibling:a.firstChild),m=!1,d.length?d.map((e=>e.connectedCallback())):o.jmp((()=>h=setTimeout(x,30)))},H=new WeakMap,U=e=>H.get(e),q=(e,t)=>H.set(t.j=e,t),D=(e,t)=>{const n={t:0,p:e,M:t,O:new Map};return n.R=new Promise((e=>n.k=e)),e["s-p"]=[],e["s-rc"]=[],H.set(e,n)},F=(e,t)=>t in e,V=(e,t)=>(0,console.error)(e,t),_=new Map,z=e=>{const t=e.o.replace(/-/g,"_"),n=e.W,l=_.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(_.set(n,e),e[t])),V)},B=new Map,G=[],I=[],J=(e,t)=>l=>{e.push(l),n||(n=!0,t&&4&o.t?X(Q):o.raf(Q))},K=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){V(e)}e.length=0},Q=()=>{K(G),K(I),(n=G.length>0)&&o.raf(Q)},X=e=>r().then(e),Y=J(I,!0);export{h as H,A as b,v as g,$ as h,r as p,q as r}