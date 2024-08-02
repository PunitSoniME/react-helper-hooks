import{j as e,r as a,_ as d}from"./index-1951b4f9.js";import{N as p,O as x,B as s,p as h}from"./index-6373919e.js";function u(){const[n,r,i]=p("name","Punit"),[c,l,m]=x("city","Patan");return e.jsxs("div",{className:"flex justify-between flex-col gap-4 divide-y",children:[e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("h3",{children:"Local Storage"}),e.jsxs("p",{children:["Name: ",n]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx(s,{size:"sm",onClick:()=>r("Soni"),children:"Set Name"}),e.jsx(s,{size:"sm",onClick:i,children:"Remove Name"})]})]}),e.jsxs("div",{className:"flex flex-col gap-3 pt-2",children:[e.jsx("h3",{children:"Session Storage"}),e.jsxs("p",{children:["City: ",c]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx(s,{size:"sm",onClick:()=>l("Ahmedabad"),children:"Set City"}),e.jsx(s,{size:"sm",onClick:m,children:"Remove City"})]})]})]})}const j=a.lazy(()=>d(()=>import("./Documentation-194ad9f3.js"),["assets/Documentation-194ad9f3.js","assets/index-1951b4f9.js","assets/index-c701d415.css","assets/index-6373919e.js","assets/index-c02d5048.js"])),o="useSessionStorage",t="useLocalStorage",y="Helps you to handle sessionStorage and localStorage",f=`import { ${o}, ${t} } from '${h}';

const [property, setProperty, remove] = ${o}(PROPERTY, VALUE);
const [property, setProperty, remove] = ${t}(PROPERTY, VALUE);

/*
    @params
        PROPERTY - string - Pass an object on which you want to do operation
        VALUE - any - Pass the value you want to set it to the property

    @returns
        property - any - Object that stores data
        setProperty - function - Call this function to update data
        remove - function - Call this function to remove data
        
*/`;function v(){return e.jsx(a.Suspense,{fallback:e.jsx(e.Fragment,{}),children:e.jsx(j,{hook:`${o}, ${t}`,info:y,usage:f,children:e.jsx(u,{})})})}export{v as default};
