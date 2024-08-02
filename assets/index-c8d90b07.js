import{r as n,j as e,_ as a}from"./index-1951b4f9.js";import{F as i,p as c}from"./index-6373919e.js";function u(){const[o,s]=n.useState("");return i("keydown",r=>{s(r.key)}),e.jsxs("div",{children:["Press any key to test the keydown event listener: ",e.jsx("b",{children:o})]})}const l=n.lazy(()=>a(()=>import("./Documentation-194ad9f3.js"),["assets/Documentation-194ad9f3.js","assets/index-1951b4f9.js","assets/index-c701d415.css","assets/index-6373919e.js","assets/index-c02d5048.js"])),t="useEventListener",m="Helps you to handle eventListener functionalities",p=`import { ${t} } from '${c}';

${t}(EVENT_NAME, CALLBACK_FUNCTION);

/*
    @params
        EVENT_NAME - string - An event name on which you want to execute the callback function
        CALLBACK_FUNCTION - function - A function to execute on event catch.
*/`;function x(){return e.jsx(n.Suspense,{fallback:e.jsx(e.Fragment,{}),children:e.jsx(l,{hook:t,info:m,usage:p,children:e.jsx(u,{})})})}export{x as default};
