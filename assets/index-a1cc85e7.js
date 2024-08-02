import{r as s,j as e,_ as l}from"./index-1951b4f9.js";import{f as d,B as u,p as h}from"./index-6373919e.js";function p(){const[t,a]=s.useState(1),{loading:o,error:r,value:c}=d(`https://reqres.in/api/users/${t}`,{},[t]);return e.jsxs(e.Fragment,{children:[e.jsx("div",{children:t}),e.jsx(u,{size:"sm",onClick:()=>a(i=>++i),children:"Fetch Next Record"}),e.jsxs("div",{className:"flex flex-col flex-wrap gap-3 mt-2",children:[e.jsxs("div",{children:["Loading: ",o.toString()]}),e.jsx("div",{children:e.jsx("pre",{className:"text-green-600 font-semibold",children:JSON.stringify(c,null,2)})}),e.jsx("div",{children:e.jsx("pre",{className:"text-red-600 font-semibold",children:JSON.stringify(r,null,2)})})]})]})}const m=s.lazy(()=>l(()=>import("./Documentation-194ad9f3.js"),["assets/Documentation-194ad9f3.js","assets/index-1951b4f9.js","assets/index-c701d415.css","assets/index-6373919e.js","assets/index-c02d5048.js"])),n="useFetch",x="Helps you to fetch any api call",f=`import { ${n} } from '${h}';

const { loading, value, error } = ${n}(URL, OBJECT_TO_SEND, [DEPENDENCIES]);

/*
    @params
        URL - string - An event name on which you want to execute the callback function
        Params - Object - An object to send with the request
        DEPENDENCIES - Array - Collection of dependencies, Callback function will execute when the value of any dependencies change

    @returns
        loading - boolean - Loading state ( true or false )
        value - any - Data we get when async process completed with success response
        error - any - Data we get when async process rejected
*/`;function E(){return e.jsx(s.Suspense,{fallback:e.jsx(e.Fragment,{}),children:e.jsx(m,{hook:n,info:x,usage:f,children:e.jsx(p,{})})})}export{E as default};
