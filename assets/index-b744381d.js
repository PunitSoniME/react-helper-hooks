import{r as i,j as t,_ as x}from"./index-1951b4f9.js";import{M as p,B as e,p as j}from"./index-6373919e.js";import{M as f}from"./Muted-b5d5a17d.js";function y(){const[a,n,{history:r,pointer:c,back:l,forward:d,go:h}]=p(1),[m,u]=i.useState("Punit");return t.jsxs("div",{className:"flex justify-between flex-col items-start gap-3",children:[t.jsxs("div",{children:["Total Values - ",a]}),t.jsxs("div",{children:["History - ",r.join(", ")]}),t.jsxs("div",{children:["Pointer - ",c]}),t.jsxs("div",{className:"flex gap-3 border-b pb-4",children:[t.jsx(e,{size:"sm",onClick:()=>n(s=>s*2),children:"Double"}),t.jsx(e,{size:"sm",onClick:()=>n(s=>s+1),children:"Increment"}),t.jsx(e,{size:"sm",onClick:()=>h(2),children:"Go To Index 2"}),t.jsx(e,{size:"sm",onClick:l,children:"Back"}),t.jsx(e,{size:"sm",onClick:d,children:"Forward"})]}),t.jsx("p",{children:m}),t.jsx(e,{size:"sm",variant:"outline",onClick:()=>u("Soni"),children:"Change Name"}),t.jsx(f,{children:"This change name variable is used only to show you that whole component is not rerendering when we update other variable"})]})}const k=i.lazy(()=>x(()=>import("./Documentation-194ad9f3.js"),["assets/Documentation-194ad9f3.js","assets/index-1951b4f9.js","assets/index-c701d415.css","assets/index-6373919e.js","assets/index-c02d5048.js"])),o="useStateWithHistory",v="Used to maintain history of any data",b=`import { ${o} } from '${j}';

const [value, set, { history, pointer, back, forward, go }] = ${o}(INITIAL_VALUE);

/*
    @params
        INITIAL_VALUE - any - Initial value to track history

    @returns
        value - Object- Object that stores data
        set - function- Call this function to update data
        methods - { history, pointer, back, forward, go } - Call this function to scroll to top
*/`;function _(){return t.jsx(i.Suspense,{fallback:t.jsx(t.Fragment,{}),children:t.jsx(k,{hook:o,info:v,usage:b,children:t.jsx(y,{})})})}export{_ as default};
