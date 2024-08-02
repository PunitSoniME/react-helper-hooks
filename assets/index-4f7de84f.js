import{j as e,r as n,_ as p}from"./index-1951b4f9.js";import{c as u,j as x,p as m}from"./index-6373919e.js";import{M as o}from"./Muted-b5d5a17d.js";/**
 * @license lucide-react v0.306.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=u("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]),t=({text:s,check:i})=>e.jsxs(o,{className:"flex gap-2 items-center",children:[s," ",i?e.jsx(f,{color:"green",size:18}):""]});function b(){const{isMobile:s,isTablet:i,isLaptop:a,isDesktop:c,isExtraLarge:h,height:l,width:d}=x();return e.jsxs("div",{className:"flex justify-between flex-col items-start gap-3",children:[e.jsxs(o,{children:["Screen Height: ",l]}),e.jsxs(o,{children:["Screen Width: ",d]}),e.jsx("br",{}),e.jsx(t,{text:"Is Mobile ?",check:s}),e.jsx(t,{text:"Is Tablet ?",check:i}),e.jsx(t,{text:"Is Laptop ?",check:a}),e.jsx(t,{text:"Is Desktop ?",check:c}),e.jsx(t,{text:"Is Extra Large ?",check:h})]})}const g=n.lazy(()=>p(()=>import("./Documentation-194ad9f3.js"),["assets/Documentation-194ad9f3.js","assets/index-1951b4f9.js","assets/index-c701d415.css","assets/index-6373919e.js","assets/index-c02d5048.js"])),r="useWindowDimensions",j=`Helps you to get the height, width, dimensions of browser.
You can check either device is mobile or laptop or tablet or desktop or extra large device`,k=`import { ${r} } from '${m}';

const { isMobile, isTablet, isLaptop, isDesktop, isExtraLarge, height, width } = ${r}();

/*
    @params
        isMobile - boolean - Returns true if screen width <= 480
        isTablet - boolean - Returns true if screen width >= 481 & width <= 768
        isLaptop - boolean - Returns true if screen width >= 769 & width <= 1024
        isDesktop - boolean - Returns true if screen width >= 1025 & width <= 1200
        isExtraLarge - boolean - Returns true if screen width >= 1201
        height - number - Returns the height of device
        width - number - Returns the width of device
*/`;function R(){return e.jsx(n.Suspense,{fallback:e.jsx(e.Fragment,{}),children:e.jsx(g,{hook:r,info:j,usage:k,children:e.jsx(b,{})})})}export{R as default};
