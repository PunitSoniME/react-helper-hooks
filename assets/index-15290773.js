import{j as t,r as o,_ as p}from"./index-1951b4f9.js";import{C as c,p as u}from"./index-6373919e.js";const l=["A","AA","B","BB","C","CC","D","DD"].map((a,e)=>({id:e,name:`${a}`}));function m(){const e=c()(l,"name");return t.jsx("div",{className:"flex flex-col gap-3 mt-2",children:e.map(r=>t.jsxs(o.Fragment,{children:[t.jsx("div",{children:t.jsx("span",{className:"bg-slate-600 px-2 py-1 text-white rounded-md",children:r.key})}),t.jsx("ul",{style:{paddingLeft:"1rem"},children:r.children.map((n,i)=>t.jsx("li",{children:n.name},i))})]},r.key))})}const d=o.lazy(()=>p(()=>import("./Documentation-194ad9f3.js"),["assets/Documentation-194ad9f3.js","assets/index-1951b4f9.js","assets/index-c701d415.css","assets/index-6373919e.js","assets/index-c02d5048.js"])),s="useGroupByFirstLetter",x="Group by your data by first letter",y=`import { ${s} } from '${u}';

const groupByFirstLetter = ${s}();
const groupByData = groupByFirstLetter(DATA, PROPERTY_NAME_TO_GROUP);

/*
    @returns - A function that is used to get the data group by, check below for example
*/`;function h(){return t.jsx(o.Suspense,{fallback:t.jsx(t.Fragment,{}),children:t.jsx(d,{hook:s,info:x,usage:y,children:t.jsx(m,{})})})}export{h as default};
