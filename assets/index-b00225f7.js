import{j as s,r,_ as t}from"./index-1951b4f9.js";import{D as i,p as n}from"./index-6373919e.js";import{M as l}from"./Muted-b5d5a17d.js";function c(){const{loading:o,error:a}=i("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js");return o?s.jsx("div",{children:"Loading..."}):a?s.jsx("div",{children:"Error in loading script"}):s.jsxs(s.Fragment,{children:[s.jsxs(l,{children:["In this example we are using lodash's external url - ",s.jsx("code",{children:"https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"})]}),s.jsxs("div",{className:"flex flex-col gap-4 my-2",children:[s.jsx("div",{className:"text-sm",children:s.jsxs("code",{children:["(window)._.sum([1, 2, 3]) - ",window==null?void 0:window._.sum([1,2,3])]})}),s.jsx("div",{className:"text-sm",children:s.jsxs("code",{children:["(window)._.multiply(2, 5) - ",window==null?void 0:window._.multiply(2,5)]})})]})]})}const d=r.lazy(()=>t(()=>import("./Documentation-194ad9f3.js"),["assets/Documentation-194ad9f3.js","assets/index-1951b4f9.js","assets/index-c701d415.css","assets/index-6373919e.js","assets/index-c02d5048.js"])),e="useScript",m="Helps you to import external javascript library",p=`import { ${e} } from '${n}';

${e}(EVENT_NAME, CALLBACK_FUNCTION);

/*
    @params
        URL - string - Pass url of the script which you want to add in your application

    @returns
        loading - boolean - Loading state ( true or false )
        error - any - Data we get when async process rejected
*/`;function h(){return s.jsx(r.Suspense,{fallback:s.jsx(s.Fragment,{}),children:s.jsx(d,{hook:e,info:m,usage:p,children:s.jsx(c,{})})})}export{h as default};
