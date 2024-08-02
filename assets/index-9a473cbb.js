import{j as o,r as s,_ as e}from"./index-1951b4f9.js";import{B as r,E as n,p as c}from"./index-6373919e.js";function a(){const l=n();return o.jsxs("div",{id:"scroll-block",className:"rounded-md bg-slate-100 mt-4 p-2 border h-[400px] overflow-y-scroll",children:[o.jsx("div",{className:"h-[600px]",children:"Scroll bottom to get scroll to top button"}),o.jsx(r,{size:"sm",onClick:()=>{l("scroll-block")},children:"Scroll To Top"})]})}const i=s.lazy(()=>e(()=>import("./Documentation-194ad9f3.js"),["assets/Documentation-194ad9f3.js","assets/index-1951b4f9.js","assets/index-c701d415.css","assets/index-6373919e.js","assets/index-c02d5048.js"])),t="useScrollToTop",p="Helps you to scroll the screen or any html element",m=`import { ${t} } from '${c}';

const scrollToTop = ${t}();

/*
    @returns
        scrollToTop - function - Returns a function that accepts 1 options parameter, Call this function to scroll to top, you can pass the id of an element which you want to scroll, default is body element
*/`;function h(){return o.jsx(s.Suspense,{fallback:o.jsx(o.Fragment,{}),children:o.jsx(i,{hook:t,info:p,usage:m,children:o.jsx(a,{})})})}export{h as default};
