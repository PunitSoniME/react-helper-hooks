import{r as s,j as e,_ as i}from"./index-1951b4f9.js";import{k as p,p as u}from"./index-6373919e.js";function h(){const n=p(),a=["https://reqres.in/api/users?page=1","https://reqres.in/api/users?page=2","https://reqres.in/api/users?page=3","https://reqres.in/api/users?page=4","https://reqres.in/api/users?page=5"],r=s.useCallback(async()=>{await n(a,async c=>{await fetch(c).then(o=>o.status!==200?(console.error("Looks like there was a problem. Status Code: "+o.status),null):o.json().then(function(l){console.log(l)}))}),console.log("All Executed")},[a,n]);return s.useEffect(()=>{r()},[r]),e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"This example will help you to write a code which can execute after completing all async calls ( api calls )"}),e.jsx("br",{}),e.jsx("p",{children:"Check console for the sequences"})]})}const d=s.lazy(()=>i(()=>import("./Documentation-194ad9f3.js"),["assets/Documentation-194ad9f3.js","assets/index-1951b4f9.js","assets/index-c701d415.css","assets/index-6373919e.js","assets/index-c02d5048.js"])),t="useAsyncLoop",f="Helps you to work on async functionality.",m=`import { ${t} } from '${u}';

const { loading, value, error } = ${t}(CALLBACK_FUNCTION, [DEPENDENCIES]);

/*
    @params
        CALLBACK_FUNCTION - function - block of code to execute
        DEPENDENCIES - Array<any> - Collection of dependencies, Callback function will execute when the value of any dependencies change

    @returns
        loading - boolean - Loading state ( true or false )
        value - any - Data we get when async process completed with success response
        error - any - Data we get when async process rejected
*/`;function g(){return e.jsx(s.Suspense,{fallback:e.jsx(e.Fragment,{}),children:e.jsx(d,{hook:t,info:f,usage:m,children:e.jsx(h,{})})})}export{g as default};
