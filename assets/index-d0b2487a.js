import{j as e,r as o,_ as n}from"./index-1951b4f9.js";import{a0 as a,p as d}from"./index-6373919e.js";import{M as s}from"./Muted-b5d5a17d.js";function m(){const{ref:i,height:r,width:h}=a();return e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("textarea",{ref:i,defaultValue:"Resize this element to test this hook",className:"resize h-[100px] w-[300px] border bg-white rounded-md p-4"}),e.jsxs(s,{children:["Height - ",r]}),e.jsxs(s,{children:["Width - ",h]})]})}const l=o.lazy(()=>n(()=>import("./Documentation-194ad9f3.js"),["assets/Documentation-194ad9f3.js","assets/index-1951b4f9.js","assets/index-c701d415.css","assets/index-6373919e.js","assets/index-c02d5048.js"])),t="useElementSize",c="Custom hook to get the size (width and height) of a DOM element.",u=`import { ${t} } from '${d}';

const { ref, height, width } = ${t}();

/*
    @returns
        ref - use this property to attach reference
        height - get updated the height of the element 
        width - get updated the width of the element
*/`;function g(){return e.jsx(o.Suspense,{fallback:e.jsx(e.Fragment,{}),children:e.jsx(l,{hook:t,info:c,usage:u,children:e.jsx(m,{})})})}export{g as default};
