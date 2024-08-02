import{j as e,r as t,_ as d}from"./index-1951b4f9.js";import{K as h,B as r,p as f}from"./index-6373919e.js";function p(){const{array:n,set:o,push:s,remove:i,filter:l,update:c,clear:m}=h([1,2,3,4,5,6]);return e.jsxs(e.Fragment,{children:[e.jsx("div",{children:n.join(", ")}),e.jsxs("div",{className:"flex flex-row flex-wrap gap-3 mt-2",children:[e.jsx(r,{size:"sm",onClick:()=>s(Math.floor(Math.random()*50)),children:"Add random number"}),e.jsx(r,{size:"sm",onClick:()=>c(1,9),children:"Update 2nd element to 9"}),e.jsx(r,{size:"sm",onClick:()=>i(1),children:"Remove Second Element"}),e.jsx(r,{size:"sm",onClick:()=>l(u=>u<3),children:"Keep numbers less than 3"}),e.jsx(r,{size:"sm",onClick:()=>o([1,2]),children:"Set 1 to 2"}),e.jsx(r,{size:"sm",onClick:m,children:"Clear"})]})]})}const x=t.lazy(()=>d(()=>import("./Documentation-194ad9f3.js"),["assets/Documentation-194ad9f3.js","assets/index-1951b4f9.js","assets/index-c701d415.css","assets/index-6373919e.js","assets/index-c02d5048.js"])),a="useArray",y="Useful to use methods of array like push, update, remove, filter, update, clear etc...",j=`import { ${a} } from '${f}';

const { array, set, push, remove, filter, update, clear } = ${a}([DATA]);

/*
    @params
        Array - The datasource as an array

    @returns
        array - Array - Data on which operation to perform
        set - function - Re-initialize the array with new data
        push - function - Insert an element in array
        remove - function - Remove an element from array
        filter - function - Filter out the data from array ( This will mutate the source )
        update - function - Update any element of array
        clear - function - Clear whole array
*/`;function A(){return e.jsx(t.Suspense,{fallback:e.jsx(e.Fragment,{}),children:e.jsx(x,{hook:a,info:y,usage:j,children:e.jsx(p,{})})})}export{A as default};
