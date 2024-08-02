import{r as o,j as e,_ as r}from"./index-1951b4f9.js";import{I as u,p as m}from"./index-6373919e.js";import{I as p}from"./input-f7da30a4.js";const t=1e3;function d(){const[s,a]=o.useState(""),[c,l]=o.useState("");return u(()=>{l(s)},t,[s]),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("p",{children:["This hook will change the value of debounced variable after ",t/1e3," second whenever you stop typing."]}),e.jsx(p,{className:"w-full lg:w-1/2",type:"search",placeholder:"Type something...",value:s,onChange:i=>{a(i.target.value)}}),e.jsxs("div",{className:"flex flex-col gap-1 mt-2",children:[e.jsxs("p",{className:"text-sm",children:["Value - ",s]}),e.jsxs("p",{className:"text-sm",children:["Debounced Value - ",c]})]})]})}const h=o.lazy(()=>r(()=>import("./Documentation-194ad9f3.js"),["assets/Documentation-194ad9f3.js","assets/index-1951b4f9.js","assets/index-c701d415.css","assets/index-6373919e.js","assets/index-c02d5048.js"])),n="useDebounce",f="This hook execution will wait for sometime once user stop typing anything",x=`import { ${n} } from '${m}';

${n}(() => { CODE_TO_EXECUTE }, TIMER, [DEPENDENCIES]);

/*
    @params
        CALLBACK_FUNCTION - function - A function to execute on debounce.
        TIMER - number - Pass seconds in milliseconds format.
        DEPENDENCIES - Array - Collection of dependencies, Callback function will execute when the value of any dependencies change
*/`;function b(){return e.jsx(o.Suspense,{fallback:e.jsx(e.Fragment,{}),children:e.jsx(h,{hook:n,info:f,usage:x,children:e.jsx(d,{})})})}export{b as default};
