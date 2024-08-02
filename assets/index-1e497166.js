import{j as o,r as i,_ as t}from"./index-1951b4f9.js";import{l as r,p as a}from"./index-6373919e.js";import{M as n}from"./Muted-b5d5a17d.js";function c(){const s=r();return o.jsxs("div",{className:"flex justify-between flex-col items-start gap-3",children:[o.jsx(n,{children:"Things will be visible if your focus is in the application"}),o.jsxs(n,{children:["Sensitive information is ",o.jsx("span",{className:`font-semibold ${s?"text-green-600":"text-red-600"}`,children:s?"VISIBLE":"HIDDEN"})]})]})}const u=i.lazy(()=>t(()=>import("./Documentation-194ad9f3.js"),["assets/Documentation-194ad9f3.js","assets/index-1951b4f9.js","assets/index-c701d415.css","assets/index-6373919e.js","assets/index-c02d5048.js"])),e="useWindowFocus",l="Helps you to hide/show the sensitive information. Below example will help you to understand",d=`import { ${e} } from '${a}';

const windowFocus = ${e}();

/*
    @returns
        windowFocus - boolean - Returns true if your focus is in current window
*/`;function x(){return o.jsx(i.Suspense,{fallback:o.jsx(o.Fragment,{}),children:o.jsx(u,{hook:e,info:l,usage:d,children:o.jsx(c,{})})})}export{x as default};
