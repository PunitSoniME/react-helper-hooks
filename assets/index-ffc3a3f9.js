import{r as s,j as e,_ as a}from"./index-1951b4f9.js";import{X as n,B as l,R as c,Y as u,U as d,T as p,p as f}from"./index-6373919e.js";function m(){const[i,o]=s.useState(!1),r=n(()=>{o(!1)});return e.jsxs("div",{className:"flex justify-between flex-col items-start gap-3",children:[e.jsx(l,{type:"button",onClick:()=>{o(!0)},children:"Click to see the alert"}),i?e.jsxs(c,{ref:r,variant:"destructive",children:[e.jsx(u,{className:"h-4 w-4"}),e.jsx(d,{children:"This is alert"}),e.jsx(p,{children:"Click Outside to close this alert"})]}):""]})}const h=s.lazy(()=>a(()=>import("./Documentation-194ad9f3.js"),["assets/Documentation-194ad9f3.js","assets/index-1951b4f9.js","assets/index-c701d415.css","assets/index-6373919e.js","assets/index-c02d5048.js"])),t="useClickOutside",k="The 'useClickOutside' hook is a custom React hook designed to handle click events that occur outside of a specified HTML element. It provides a straightforward way to detect and respond to clicks outside a given component, making it particularly useful for closing dropdowns, modals, tooltips, or any other pop-up elements.",x=`import { ${t} } from '${f}';

const ref = ${t}(CALLBACK_FUNCTION);

/*
    @returns
        ref - Returns ref to handle the click outside functionality
*/`;function g(){return e.jsx(s.Suspense,{fallback:e.jsx(e.Fragment,{}),children:e.jsx(h,{hook:t,info:k,usage:x,children:e.jsx(m,{})})})}export{g as default};
