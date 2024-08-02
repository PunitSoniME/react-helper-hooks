import{r as e,j as t,_ as m}from"./index-1951b4f9.js";import{n as d,B as p,p as j}from"./index-6373919e.js";import{I as r}from"./input-f7da30a4.js";import{M as f}from"./Muted-b5d5a17d.js";function h(){const[s,c]=e.useState("Punit"),[n,u]=e.useState("punit.soni33@gmail.com"),[o,l]=d({id:1,name:s,email:n});return e.useEffect(()=>{console.log("json updated - ",o)},[o]),t.jsxs("div",{className:"flex justify-between flex-col items-start gap-3",children:[t.jsxs("div",{children:["Json - ",JSON.stringify(o)]}),t.jsx(f,{children:"Note: Check console log for json updated ( When you click Update JSON button continuously without changing name or email, it will not rerender the component )"}),t.jsx(r,{type:"text",value:s,onChange:a=>c(a.target.value)}),t.jsx(r,{type:"email",value:n,onChange:a=>u(a.target.value)}),t.jsx(p,{size:"sm",onClick:()=>{l({...o,name:s,email:n})},children:"Update JSON"})]})}const g=e.lazy(()=>m(()=>import("./Documentation-194ad9f3.js"),["assets/Documentation-194ad9f3.js","assets/index-1951b4f9.js","assets/index-c701d415.css","assets/index-6373919e.js","assets/index-c02d5048.js"])),i="useStateJson",x=`Stores a state as a JSON string to prevent unnecessary render updates.
Updates of values that serialize to the same string are ignored.
Can be used to ignore duplicate updates of the state including object values.`,v=`import { ${i} } from '${j}';

const [json, setJson] = ${i}(OBJECT);

/*
    @params
        object - Object - Pass an object on which you want to do operation

    @returns
        json - Object - Object that stores data
        setJson - function - A function to update the variable
*/`;function O(){return t.jsx(e.Suspense,{fallback:t.jsx(t.Fragment,{}),children:t.jsx(g,{hook:i,info:x,usage:v,children:t.jsx(h,{})})})}export{O as default};
