import{j as e,r,_ as s}from"./index-1951b4f9.js";import{Z as c,p as n}from"./index-6373919e.js";function m(){const t=c();return e.jsxs(e.Fragment,{children:["Current color scheme is - ",e.jsx("b",{children:t})]})}const a=r.lazy(()=>s(()=>import("./Documentation-194ad9f3.js"),["assets/Documentation-194ad9f3.js","assets/index-1951b4f9.js","assets/index-c701d415.css","assets/index-6373919e.js","assets/index-c02d5048.js"])),o="useColorScheme",i="Use this hook to get the current color scheme either 'dark' or 'light'",h=`import { ${o} } from '${n}';

const colorScheme = ${o}();

/*
    @returns - Current color scheme - 'light' or 'dark'
*/`;function p(){return e.jsx(r.Suspense,{fallback:e.jsx(e.Fragment,{}),children:e.jsx(a,{hook:o,info:i,usage:h,children:e.jsx(m,{})})})}export{p as default};
