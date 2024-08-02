import{j as o,r as n,_ as r}from"./index-1951b4f9.js";import{m as a,p as e}from"./index-6373919e.js";import{M as i}from"./Muted-b5d5a17d.js";function u(){const t=a(0);return o.jsxs(i,{children:["Your application's sub domain is - ",o.jsx("b",{children:t})]})}const m=n.lazy(()=>r(()=>import("./Documentation-194ad9f3.js"),["assets/Documentation-194ad9f3.js","assets/index-1951b4f9.js","assets/index-c701d415.css","assets/index-6373919e.js","assets/index-c02d5048.js"])),s="useSubdomain",c="Returns the subdomain of the application from url",d=`import { ${s} } from '${e}';

const subdomain = ${s}();

/*
    @returns
        subdomain - string - Returns the subdomain
*/`;function f(){return o.jsx(n.Suspense,{fallback:o.jsx(o.Fragment,{}),children:o.jsx(m,{hook:s,info:c,usage:d,children:o.jsx(u,{})})})}export{f as default};
