import{r as t,j as e,_ as u}from"./index-1951b4f9.js";import{B as s,V as d,p as x}from"./index-6373919e.js";const a=t.createContext(null);function v({children:o}){const[r,n]=t.useState("Old Value");return e.jsx(a.Provider,{value:{context1Value:r,setContext1Value:n},children:o})}const i=t.createContext(null);function p({children:o}){const[r,n]=t.useState("Old Value");return e.jsx(i.Provider,{value:{context2Value:r,setContext2Value:n},children:o})}function C(){const{context1Value:o,setContext1Value:r}=t.useContext(a),{context2Value:n,setContext2Value:c}=t.useContext(i);return e.jsxs("div",{className:"space-y-3",children:[e.jsx("p",{children:"Context Usage"}),e.jsxs("p",{children:["Context 1 value - ",o]}),e.jsxs("p",{children:["Context 2 value - ",n]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx(s,{size:"sm",onClick:()=>{r("Yeah, Context 1 value updated")},children:"Update Value of Context 1 Provider"}),e.jsx(s,{size:"sm",onClick:()=>{c("Yeah, Context 2 value updated")},children:"Update Value of Context 2 Provider"})]})]})}function P(){const r=d()([[v],[p]]);return e.jsx(r,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{children:"Context Tree"}),e.jsx(C,{})]})})}const m=t.lazy(()=>u(()=>import("./Documentation-194ad9f3.js"),["assets/Documentation-194ad9f3.js","assets/index-1951b4f9.js","assets/index-c701d415.css","assets/index-6373919e.js","assets/index-c02d5048.js"])),l="useProvidersTree",j="Remove the Provider Hell in your React app and get clean code",h=`import { ${l} } from '${x}';

const buildProvidersTree = useProvidersTree();
const ProvidersTree = buildProvidersTree([
    [Provider1],
    [Provider2],
    [QueryClientProvider, { client: queryClient }],
    [ReduxProvider, { state }],
]);

/*
    @returns
        A function that accepts array of an array, check below example
*/`;function T(){return e.jsx(e.Fragment,{children:e.jsx(t.Suspense,{fallback:e.jsx(e.Fragment,{}),children:e.jsx(m,{hook:l,info:j,usage:h,children:e.jsx(P,{})})})})}export{T as default};
