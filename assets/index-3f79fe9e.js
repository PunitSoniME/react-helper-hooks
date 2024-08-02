import{r as i,j as e,_ as u}from"./index-1951b4f9.js";import{H as d,B as s,p as h}from"./index-6373919e.js";const n=15e3/1e3;function x({defaultTimeout:t}){const[c,r]=i.useState(10),{clear:l,reset:a}=d(()=>r(0),t);return e.jsxs(e.Fragment,{children:[e.jsxs("ul",{className:"list-decimal pl-5 mb-5",children:[e.jsxs("li",{children:["In this example, when page reloads, it will wait for ",n," seconds and then value will be changed to 0"]}),e.jsxs("li",{children:["If you click on Clear Timeout button with in ",n," seconds, then it will not change the value"]}),e.jsxs("li",{children:["If you click on Reset Timeout button, it will restart the timer of ",n," seconds"]})]}),e.jsx("div",{className:"mb-2",children:c}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx(s,{size:"sm",onClick:()=>r(m=>m+1),children:"Increment"}),e.jsx(s,{size:"sm",onClick:l,children:"Clear Timeout"}),e.jsx(s,{size:"sm",onClick:a,children:"Reset Timeout"})]})]})}const f=i.lazy(()=>u(()=>import("./Documentation-194ad9f3.js"),["assets/Documentation-194ad9f3.js","assets/index-1951b4f9.js","assets/index-c701d415.css","assets/index-6373919e.js","assets/index-c02d5048.js"])),o="useTimeout",T="Works just like setTimeout, however we created one single hook which can also do reset and clear timeout",j=`import { ${o} } from '${h}';

const { clear, reset } = ${o}(CALLBACK_FUNCTION, TIMEOUT);

/*
    @params
        CALLBACK_FUNCTION - function - Block of code to execute
        TIMEOUT - number - Timer in milliseconds

    @returns
        clear - function - To clear already running timeout
        reset - function - The function to reset the timer again
*/`;function g({defaultTimeout:t}){return e.jsx(e.Fragment,{children:e.jsx(i.Suspense,{fallback:e.jsx(e.Fragment,{}),children:e.jsx(f,{hook:o,info:T,usage:j,children:e.jsx(x,{defaultTimeout:t})})})})}export{g as default};
