import{r as e,j as o,_ as u}from"./index-1951b4f9.js";import{B as d,A as m,p as C}from"./index-6373919e.js";import{I as T}from"./input-f7da30a4.js";let p;const t={default:"Click to copy",copied:"Copied"};function x(){const[n,r]=e.useState("Text To Copy"),l=m(),[s,i]=e.useState(t.default);return o.jsxs("div",{className:"flex w-full max-w-sm items-center space-x-2",children:[o.jsx(T,{placeholder:"Type something...",value:n,onChange:a=>{r(a.target.value)}}),o.jsx(d,{size:"sm",variant:s===t.copied?"outline":"default",disabled:s===t.copied,onClick:()=>{l(n).then(()=>{i(t.copied),p=setTimeout(()=>{i(t.default),clearTimeout(p)},3e3)}).catch(a=>{alert(a)})},children:s})]})}const y=e.lazy(()=>u(()=>import("./Documentation-194ad9f3.js"),["assets/Documentation-194ad9f3.js","assets/index-1951b4f9.js","assets/index-c701d415.css","assets/index-6373919e.js","assets/index-c02d5048.js"])),c="useCopyToClipboard",f="Helps you to copy a thing which you want",h=`import { ${c} } from '${C}';

const copyToClipboard = useCopyToClipboard();

/*
    @returns
        copyToClipboard - function - Returns async function.
*/`;function g(){return o.jsx(e.Suspense,{fallback:o.jsx(o.Fragment,{}),children:o.jsx(y,{hook:c,info:f,usage:h,children:o.jsx(x,{})})})}export{g as default};
