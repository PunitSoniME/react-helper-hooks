import{j as e,r as o,_ as c}from"./index-1951b4f9.js";import{P as i,p as l}from"./index-6373919e.js";function d(){const{loading:s,value:t,error:a}=i(()=>new Promise((r,x)=>{setTimeout(()=>{r("Success")},1500)}));return e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:["Loading: ",s.toString()]}),e.jsxs("div",{className:"flex flex-row flex-wrap gap-3 mt-2",children:[e.jsx("div",{className:"text-green-600 font-semibold",children:t}),e.jsx("div",{className:"text-red-600 font-semibold",children:a})]})]})}const u=o.lazy(()=>c(()=>import("./Documentation-194ad9f3.js"),["assets/Documentation-194ad9f3.js","assets/index-1951b4f9.js","assets/index-c701d415.css","assets/index-6373919e.js","assets/index-c02d5048.js"])),n="useAsync",m="Hook to handle async method",p=`import { ${n} } from '${l}';

const { loading, value, error } = ${n}(CALLBACK_FUNCTION, [DEPENDENCIES]);

/*
    @params
        CALLBACK_FUNCTION - function - block of code to execute
        DEPENDENCIES - Array - Collection of dependencies, Callback function will execute when the value of any dependencies change

    @returns
        loading - boolean - Loading state ( true or false )
        value - any - Data we get when async process completed with success response'
        error - any - Data we get when async process rejected
*/`;function g(){return e.jsx(o.Suspense,{fallback:e.jsx(e.Fragment,{}),children:e.jsx(u,{hook:n,info:m,usage:p,children:e.jsx(d,{})})})}export{g as default};
