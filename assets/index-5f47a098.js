import{r as o,j as e,_ as c}from"./index-1951b4f9.js";import{J as r,B as i,p as l}from"./index-6373919e.js";function d(){const[t,a]=o.useState(10);return r(()=>alert(t),[t]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mb-3",children:t}),e.jsx(i,{size:"sm",onClick:()=>a(s=>s+1),children:"Increment"})]})}const f=o.lazy(()=>c(()=>import("./Documentation-194ad9f3.js"),["assets/Documentation-194ad9f3.js","assets/index-1951b4f9.js","assets/index-c701d415.css","assets/index-6373919e.js","assets/index-c02d5048.js"])),n="useUpdateEffect",u="Will be called after the value of dependencies changed, it will not call on first render",m=`import { ${n} } from '${l}';

${n}(CALLBACK_FUNCTION, [DEPENDENCIES]);

/*
    @params
        CALLBACK_FUNCTION - function - block of code to execute
        DEPENDENCIES - Array - Collection of dependencies, Callback function will execute when the value of any dependencies change
*/`;function x(){return e.jsx(o.Suspense,{fallback:e.jsx(e.Fragment,{}),children:e.jsx(f,{hook:n,info:u,usage:m,children:e.jsx(d,{})})})}export{x as default};
