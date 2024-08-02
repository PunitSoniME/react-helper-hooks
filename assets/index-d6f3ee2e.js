import{j as t,r as s,_ as n}from"./index-1951b4f9.js";import{u as r,B as h,p as i}from"./index-6373919e.js";import{M as u}from"./Muted-b5d5a17d.js";function l(){const[e,o]=r();return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"mb-2",children:["Current Hash - ",e]}),t.jsx(h,{size:"sm",className:"mt-4",onClick:()=>{o("testing-hook")},children:"Update Hash"}),t.jsx(u,{className:"mt-2",children:"Clicking on above button will update the hash in url, but also it will redirect you to 404 page"})]})}const c=s.lazy(()=>n(()=>import("./Documentation-194ad9f3.js"),["assets/Documentation-194ad9f3.js","assets/index-1951b4f9.js","assets/index-c701d415.css","assets/index-6373919e.js","assets/index-c02d5048.js"])),a="useHash",m="Helps you to get current hash and allows you to update the hash of URL",p=`import { ${a} } from '${i}';

const [hash, updateHash] = ${a}(INITIAL_VALUE);

/*
    @returns
        hash - any - Variable name
        updateHash - function - The function to update the value of the variable
*/`;function j(){return t.jsx(s.Suspense,{fallback:t.jsx(t.Fragment,{}),children:t.jsx(c,{hook:a,info:m,usage:p,children:t.jsx(l,{})})})}export{j as default};
