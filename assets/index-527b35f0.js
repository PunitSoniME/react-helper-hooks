import{j as e,r,_ as n}from"./index-1951b4f9.js";import{a1 as a,p as i}from"./index-6373919e.js";import{M as c}from"./Muted-b5d5a17d.js";function l(){const[s,o]=a();return e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("textarea",{ref:s,defaultValue:"Resize this element to test this hook",className:"resize h-[100px] w-[300px] border bg-white rounded-md p-4"}),e.jsxs(c,{children:["Rect - ",e.jsx("code",{children:JSON.stringify(o)})]})]})}const m=r.lazy(()=>n(()=>import("./Documentation-194ad9f3.js"),["assets/Documentation-194ad9f3.js","assets/index-1951b4f9.js","assets/index-c701d415.css","assets/index-6373919e.js","assets/index-c02d5048.js"])),t="useResizeObserver",u="Custom hook to observe and get the bounding client rect of a DOM element.",d=`import { ${t} } from '${i}';

const { ref, rect } = ${t}();

/*
    @returns
        ref - React ref to be attached to the target element
        rect - Current bounding client rect of the element.
*/`;function p(){return e.jsx(r.Suspense,{fallback:e.jsx(e.Fragment,{}),children:e.jsx(m,{hook:t,info:u,usage:d,children:e.jsx(l,{})})})}export{p as default};
