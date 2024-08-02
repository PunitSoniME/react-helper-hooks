import{j as e,r as o,_ as l}from"./index-1951b4f9.js";import{e as i,B as s,p as r}from"./index-6373919e.js";function c(){const[n,t]=i(!1);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mb-2",children:n.toString()}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx(s,{size:"sm",onClick:t,children:"Toggle"}),e.jsx(s,{size:"sm",onClick:()=>t(!0),children:"Make True"}),e.jsx(s,{size:"sm",onClick:()=>t(!1),children:"Make False"})]})]})}const g=o.lazy(()=>l(()=>import("./Documentation-194ad9f3.js"),["assets/Documentation-194ad9f3.js","assets/index-1951b4f9.js","assets/index-c701d415.css","assets/index-6373919e.js","assets/index-c02d5048.js"])),a="useToggle",d="Used to handle the toggeling of the variable",m=`import { ${a} } from '${r}';

const [isSelected, toggleSelected] = ${a}(INITIAL_VALUE);

/*
    @params
        INITIAL_VALUE - any - Initial value of variable

    @returns
        isSelected - any - Variable name
        toggleSelected - function - The function to update the value of the variable
*/`;function h(){return e.jsx(o.Suspense,{fallback:e.jsx(e.Fragment,{}),children:e.jsx(g,{hook:a,info:d,usage:m,children:e.jsx(c,{})})})}export{h as default};
