import{j as e,r as s,_ as r}from"./index-1951b4f9.js";import{G as l,p as d}from"./index-6373919e.js";function c(){const{loading:t,error:o,data:{latitude:n,longitude:i}}=l();return e.jsxs("div",{className:"flex flex-col flex-wrap gap-3 mt-2",children:[e.jsxs("div",{children:["Loading: ",t==null?void 0:t.toString()]}),e.jsxs("div",{className:"text-green-600 font-semibold",children:["latitude: ",n,e.jsx("br",{}),"longitude: ",i]}),e.jsx("div",{className:"text-red-600 font-semibold",children:o==null?void 0:o.message})]})}const u=s.lazy(()=>r(()=>import("./Documentation-194ad9f3.js"),["assets/Documentation-194ad9f3.js","assets/index-1951b4f9.js","assets/index-c701d415.css","assets/index-6373919e.js","assets/index-c02d5048.js"])),a="useGeolocation",m="Get the geolocation ",x=`import { ${a} } from '${d}';

const { loading, error, data: { latitude, longitude } } = ${a}();

/*
    @params - Object ( Type of PositionOptions )

    @returns
        loading - Boolean -Loading state ( true or false )
        data - { latitude, longitude } - latitude and longitude of user
        error - any - Data we get when async process rejected
*/`;function f(){return e.jsx(s.Suspense,{fallback:e.jsx(e.Fragment,{}),children:e.jsx(u,{hook:a,info:m,usage:x,children:e.jsx(c,{})})})}export{f as default};
