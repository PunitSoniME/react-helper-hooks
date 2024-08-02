import{r as s,j as e,_ as c}from"./index-1951b4f9.js";import{L as d,B as o,p as m}from"./index-6373919e.js";import{M as h}from"./Muted-b5d5a17d.js";function x(){const[t,r]=s.useState(0),[n,i]=s.useState("Punit"),l=d(t);return e.jsxs("div",{className:"flex flex-col gap-3 mt-2",children:[e.jsxs("div",{className:"flex flex-col gap-2 items-start",children:[e.jsxs("div",{children:[e.jsxs("div",{children:["Current Value: ",t]}),e.jsxs("div",{children:["Previous Value: ",l]})]}),e.jsx(o,{size:"sm",onClick:()=>r(u=>u+1),children:"Increment"})]}),e.jsx("hr",{}),e.jsxs("div",{className:"flex flex-col gap-2 items-start",children:[e.jsx("div",{children:n}),e.jsx(o,{size:"sm",onClick:()=>i("Soni"),children:"Change Name"})]}),e.jsx(h,{children:"This change name variable is used only to show you that whole component is not rerendering when we update other variable"})]})}const v=s.lazy(()=>c(()=>import("./Documentation-194ad9f3.js"),["assets/Documentation-194ad9f3.js","assets/index-1951b4f9.js","assets/index-c701d415.css","assets/index-6373919e.js","assets/index-c02d5048.js"])),a="usePrevious",p="Returns the previous value of defined variable",f=`import { ${a} } from '${m}';

const previousValue = ${a}(STATE_VARIABLE_TO_TRACK);

/*
    @param
        STATE_VARIABLE_TO_TRACK - Pass the variable you declared as useState

    @returns
        Last stored value of the variable you passed in hook
*/`;function T(){return e.jsx(s.Suspense,{fallback:e.jsx(e.Fragment,{children:"Loading..."}),children:e.jsx(v,{hook:a,info:p,usage:f,children:e.jsx(x,{})})})}export{T as default};
