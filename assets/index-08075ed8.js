import{r as o,j as i,_ as me}from"./index-1951b4f9.js";import{$ as $e,o as pe,q as V,r as be,_ as C,t as A,v as N,w as Z,x as he,y as Se,z as xe,B as ve,A as ge,p as we}from"./index-6373919e.js";import{$ as ye}from"./index-c02d5048.js";import{T as Ee,d as Re,b as G,e as P}from"./table-551aa7c5.js";import{C as Ce}from"./check-506d2784.js";function Be(e){const t=o.useRef({value:e,previous:e});return o.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}function _e(e){const[t,n]=o.useState(void 0);return $e(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const a=new ResizeObserver(c=>{if(!Array.isArray(c)||!c.length)return;const r=c[0];let d,s;if("borderBoxSize"in r){const u=r.borderBoxSize,f=Array.isArray(u)?u[0]:u;d=f.inlineSize,s=f.blockSize}else d=e.offsetWidth,s=e.offsetHeight;n({width:d,height:s})});return a.observe(e,{box:"border-box"}),()=>a.unobserve(e)}else n(void 0)},[e]),t}const ee=["PageUp","PageDown"],te=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],ne={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},I="Slider",[H,De,Pe]=ye(I),[oe,it]=pe(I,[Pe]),[je,O]=oe(I),Ae=o.forwardRef((e,t)=>{const{name:n,min:a=0,max:c=100,step:r=1,orientation:d="horizontal",disabled:s=!1,minStepsBetweenThumbs:u=0,defaultValue:f=[a],value:x,onValueChange:l=()=>{},onValueCommit:m=()=>{},inverted:v=!1,...w}=e,[$,b]=o.useState(null),g=V(t,S=>b(S)),h=o.useRef(new Set),p=o.useRef(0),R=d==="horizontal",M=$?!!$.closest("form"):!0,Y=R?Ve:Me,[y=[],ce]=be({prop:x,defaultProp:f,onChange:S=>{var E;(E=[...h.current][p.current])===null||E===void 0||E.focus(),l(S)}}),W=o.useRef(y);function de(S){const E=Ge(y,S);T(S,E)}function ue(S){T(S,p.current)}function fe(){const S=W.current[p.current];y[p.current]!==S&&m(y)}function T(S,E,{commit:k}={commit:!1}){const X=Ye(r),L=We(Math.round((S-a)/r)*r+a,X),K=Z(L,[a,c]);ce((D=[])=>{const B=Oe(D,K,E);if(Ue(B,u*r)){p.current=B.indexOf(K);const q=String(B)!==String(D);return q&&k&&m(B),q?B:D}else return D})}return o.createElement(je,{scope:e.__scopeSlider,disabled:s,min:a,max:c,valueIndexToChangeRef:p,thumbs:h.current,values:y,orientation:d},o.createElement(H.Provider,{scope:e.__scopeSlider},o.createElement(H.Slot,{scope:e.__scopeSlider},o.createElement(Y,C({"aria-disabled":s,"data-disabled":s?"":void 0},w,{ref:g,onPointerDown:A(w.onPointerDown,()=>{s||(W.current=y)}),min:a,max:c,inverted:v,onSlideStart:s?void 0:de,onSlideMove:s?void 0:ue,onSlideEnd:s?void 0:fe,onHomeKeyDown:()=>!s&&T(a,0,{commit:!0}),onEndKeyDown:()=>!s&&T(c,y.length-1,{commit:!0}),onStepKeyDown:({event:S,direction:E})=>{if(!s){const L=ee.includes(S.key)||S.shiftKey&&te.includes(S.key)?10:1,K=p.current,D=y[K],B=r*L*E;T(D+B,K,{commit:!0})}}})))),M&&y.map((S,E)=>o.createElement(Ne,{key:E,name:n?n+(y.length>1?"[]":""):void 0,value:S})))}),[re,ae]=oe(I,{startEdge:"left",endEdge:"right",size:"width",direction:1}),Ve=o.forwardRef((e,t)=>{const{min:n,max:a,dir:c,inverted:r,onSlideStart:d,onSlideMove:s,onSlideEnd:u,onStepKeyDown:f,...x}=e,[l,m]=o.useState(null),v=V(t,p=>m(p)),w=o.useRef(),$=he(c),b=$==="ltr",g=b&&!r||!b&&r;function h(p){const R=w.current||l.getBoundingClientRect(),M=[0,R.width],y=U(M,g?[n,a]:[a,n]);return w.current=R,y(p-R.left)}return o.createElement(re,{scope:e.__scopeSlider,startEdge:g?"left":"right",endEdge:g?"right":"left",direction:g?1:-1,size:"width"},o.createElement(se,C({dir:$,"data-orientation":"horizontal"},x,{ref:v,style:{...x.style,["--radix-slider-thumb-transform"]:"translateX(-50%)"},onSlideStart:p=>{const R=h(p.clientX);d==null||d(R)},onSlideMove:p=>{const R=h(p.clientX);s==null||s(R)},onSlideEnd:()=>{w.current=void 0,u==null||u()},onStepKeyDown:p=>{const M=ne[g?"from-left":"from-right"].includes(p.key);f==null||f({event:p,direction:M?-1:1})}})))}),Me=o.forwardRef((e,t)=>{const{min:n,max:a,inverted:c,onSlideStart:r,onSlideMove:d,onSlideEnd:s,onStepKeyDown:u,...f}=e,x=o.useRef(null),l=V(t,x),m=o.useRef(),v=!c;function w($){const b=m.current||x.current.getBoundingClientRect(),g=[0,b.height],p=U(g,v?[a,n]:[n,a]);return m.current=b,p($-b.top)}return o.createElement(re,{scope:e.__scopeSlider,startEdge:v?"bottom":"top",endEdge:v?"top":"bottom",size:"height",direction:v?1:-1},o.createElement(se,C({"data-orientation":"vertical"},f,{ref:l,style:{...f.style,["--radix-slider-thumb-transform"]:"translateY(50%)"},onSlideStart:$=>{const b=w($.clientY);r==null||r(b)},onSlideMove:$=>{const b=w($.clientY);d==null||d(b)},onSlideEnd:()=>{m.current=void 0,s==null||s()},onStepKeyDown:$=>{const g=ne[v?"from-bottom":"from-top"].includes($.key);u==null||u({event:$,direction:g?-1:1})}})))}),se=o.forwardRef((e,t)=>{const{__scopeSlider:n,onSlideStart:a,onSlideMove:c,onSlideEnd:r,onHomeKeyDown:d,onEndKeyDown:s,onStepKeyDown:u,...f}=e,x=O(I,n);return o.createElement(N.span,C({},f,{ref:t,onKeyDown:A(e.onKeyDown,l=>{l.key==="Home"?(d(l),l.preventDefault()):l.key==="End"?(s(l),l.preventDefault()):ee.concat(te).includes(l.key)&&(u(l),l.preventDefault())}),onPointerDown:A(e.onPointerDown,l=>{const m=l.target;m.setPointerCapture(l.pointerId),l.preventDefault(),x.thumbs.has(m)?m.focus():a(l)}),onPointerMove:A(e.onPointerMove,l=>{l.target.hasPointerCapture(l.pointerId)&&c(l)}),onPointerUp:A(e.onPointerUp,l=>{const m=l.target;m.hasPointerCapture(l.pointerId)&&(m.releasePointerCapture(l.pointerId),r(l))})}))}),Te="SliderTrack",Ke=o.forwardRef((e,t)=>{const{__scopeSlider:n,...a}=e,c=O(Te,n);return o.createElement(N.span,C({"data-disabled":c.disabled?"":void 0,"data-orientation":c.orientation},a,{ref:t}))}),J="SliderRange",Ie=o.forwardRef((e,t)=>{const{__scopeSlider:n,...a}=e,c=O(J,n),r=ae(J,n),d=o.useRef(null),s=V(t,d),u=c.values.length,f=c.values.map(m=>ie(m,c.min,c.max)),x=u>1?Math.min(...f):0,l=100-Math.max(...f);return o.createElement(N.span,C({"data-orientation":c.orientation,"data-disabled":c.disabled?"":void 0},a,{ref:s,style:{...e.style,[r.startEdge]:x+"%",[r.endEdge]:l+"%"}}))}),Q="SliderThumb",ke=o.forwardRef((e,t)=>{const n=De(e.__scopeSlider),[a,c]=o.useState(null),r=V(t,s=>c(s)),d=o.useMemo(()=>a?n().findIndex(s=>s.ref.current===a):-1,[n,a]);return o.createElement(ze,C({},e,{ref:r,index:d}))}),ze=o.forwardRef((e,t)=>{const{__scopeSlider:n,index:a,...c}=e,r=O(Q,n),d=ae(Q,n),[s,u]=o.useState(null),f=V(t,b=>u(b)),x=_e(s),l=r.values[a],m=l===void 0?0:ie(l,r.min,r.max),v=Le(a,r.values.length),w=x==null?void 0:x[d.size],$=w?He(w,m,d.direction):0;return o.useEffect(()=>{if(s)return r.thumbs.add(s),()=>{r.thumbs.delete(s)}},[s,r.thumbs]),o.createElement("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[d.startEdge]:`calc(${m}% + ${$}px)`}},o.createElement(H.ItemSlot,{scope:e.__scopeSlider},o.createElement(N.span,C({role:"slider","aria-label":e["aria-label"]||v,"aria-valuemin":r.min,"aria-valuenow":l,"aria-valuemax":r.max,"aria-orientation":r.orientation,"data-orientation":r.orientation,"data-disabled":r.disabled?"":void 0,tabIndex:r.disabled?void 0:0},c,{ref:f,style:l===void 0?{display:"none"}:e.style,onFocus:A(e.onFocus,()=>{r.valueIndexToChangeRef.current=a})}))))}),Ne=e=>{const{value:t,...n}=e,a=o.useRef(null),c=Be(t);return o.useEffect(()=>{const r=a.current,d=window.HTMLInputElement.prototype,u=Object.getOwnPropertyDescriptor(d,"value").set;if(c!==t&&u){const f=new Event("input",{bubbles:!0});u.call(r,t),r.dispatchEvent(f)}},[c,t]),o.createElement("input",C({style:{display:"none"}},n,{ref:a,defaultValue:t}))};function Oe(e=[],t,n){const a=[...e];return a[n]=t,a.sort((c,r)=>c-r)}function ie(e,t,n){const r=100/(n-t)*(e-t);return Z(r,[0,100])}function Le(e,t){return t>2?`Value ${e+1} of ${t}`:t===2?["Minimum","Maximum"][e]:void 0}function Ge(e,t){if(e.length===1)return 0;const n=e.map(c=>Math.abs(c-t)),a=Math.min(...n);return n.indexOf(a)}function He(e,t,n){const a=e/2,r=U([0,50],[0,a]);return(a-r(t)*n)*n}function Fe(e){return e.slice(0,-1).map((t,n)=>e[n+1]-t)}function Ue(e,t){if(t>0){const n=Fe(e);return Math.min(...n)>=t}return!0}function U(e,t){return n=>{if(e[0]===e[1]||t[0]===t[1])return t[0];const a=(t[1]-t[0])/(e[1]-e[0]);return t[0]+a*(n-e[0])}}function Ye(e){return(String(e).split(".")[1]||"").length}function We(e,t){const n=Math.pow(10,t);return Math.round(e*n)/n}const le=Ae,Xe=Ke,qe=Ie,Je=ke,_=o.forwardRef(({className:e,...t},n)=>i.jsxs(le,{ref:n,className:Se("relative flex w-full touch-none select-none items-center",e),...t,children:[i.jsx(Xe,{className:"relative h-2 w-full grow overflow-hidden rounded-full bg-secondary",children:i.jsx(qe,{className:"absolute h-full bg-primary"})}),i.jsx(Je,{className:"block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"})]}));_.displayName=le.displayName;const j=({color:e,section:t,value:n})=>i.jsxs("div",{className:`text-${e.toLowerCase()}-600 mb-2 font-semibold`,children:[e," ",t," - ",n]}),z={default:"Copy RGB Blend Color Combination",copied:"Copied"};function Qe(){const e=ge(),[t,n]=o.useState(z.default),[a,c]=o.useState(100),[r,d]=o.useState(65),[s,u]=o.useState(250),[f,x]=o.useState(3),[l,m]=o.useState(204),[v,w]=o.useState(99),[$,b,g]=xe([a,r,s],[f,l,v]);return i.jsxs(i.Fragment,{children:[i.jsx(Ee,{className:"border-x border-y my-2",children:i.jsxs(Re,{children:[i.jsxs(G,{children:[i.jsxs(P,{width:"50%",children:[i.jsx(j,{color:"Red",section:"A",value:a}),i.jsx(_,{defaultValue:[a],onValueChange:h=>{c(h[0])},max:255,min:0,step:1})]}),i.jsxs(P,{width:"50%",children:[i.jsx(j,{color:"Red",section:"B",value:f}),i.jsx(_,{defaultValue:[f],onValueChange:h=>{x(h[0])},max:255,min:0,step:1})]})]}),i.jsxs(G,{children:[i.jsxs(P,{children:[i.jsx(j,{color:"Green",section:"A",value:r}),i.jsx(_,{defaultValue:[r],onValueChange:h=>{d(h[0])},max:255,min:0,step:1})]}),i.jsxs(P,{children:[i.jsx(j,{color:"Green",section:"B",value:l}),i.jsx(_,{defaultValue:[l],onValueChange:h=>{m(h[0])},max:255,min:0,step:1})]})]}),i.jsxs(G,{children:[i.jsxs(P,{children:[i.jsx(j,{color:"Blue",section:"A",value:s}),i.jsx(_,{defaultValue:[s],onValueChange:h=>{u(h[0])},max:255,min:0,step:1})]}),i.jsxs(P,{children:[i.jsx(j,{color:"Blue",section:"B",value:v}),i.jsx(_,{defaultValue:[v],onValueChange:h=>{w(h[0])},max:255,min:0,step:1})]})]})]})}),i.jsxs("div",{className:"px-6 py-4 rounded",style:{backgroundColor:`rgb(${$}, ${b}, ${g})`},children:[i.jsxs("div",{children:["Red - ",$," - ( Mixture of Red A and Red B )"]}),i.jsxs("div",{children:["Green - ",b," - ( Mixture of Green A and Green B )"]}),i.jsxs("div",{children:["Blue - ",g," - ( Mixture of Blue A and Blue B )"]})]}),i.jsxs(ve,{disabled:t===z.copied,className:"mt-3 min-w-[150px]",onClick:()=>{e(`rgb(${$}, ${b}, ${g})`).then(()=>{n(z.copied),setTimeout(()=>{n(z.default)},3e3)})},children:[t==="Copied"?i.jsx(Ce,{className:"pr-2 h-6 w-6"}):"",t]})]})}const Ze=o.lazy(()=>me(()=>import("./Documentation-194ad9f3.js"),["assets/Documentation-194ad9f3.js","assets/index-1951b4f9.js","assets/index-c701d415.css","assets/index-6373919e.js","assets/index-c02d5048.js"])),F="useColorBlend",et='Generate blend color by passing 2 array, Values must be between 0 to 255, you can pass either 205 or "205"',tt=`import { ${F} } from '${we}';

const { red, green, blue } = ${F}([RED, GREEN, BLUE], [RED, GREEN, BLUE]);

/*
    @params - Array
        [RED, GREEN, BLUE] - Array - Pass value from 0 - 255 either in number or string, eg. [25, 53, 243]
          
    @returns - Object
        red - number - Value of Red color ( 0 - 255 )
        green - number - Value of Green color ( 0 - 255 )
        blue - number - Value of Blue color ( 0 - 255 )
*/`;function lt(){return i.jsx(o.Suspense,{fallback:i.jsx(i.Fragment,{}),children:i.jsx(Ze,{hook:F,info:et,usage:tt,children:i.jsx(Qe,{})})})}export{lt as default};