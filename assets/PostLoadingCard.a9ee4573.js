import{_ as b,a as n,c as i,d as e,r as _,w as u,D as h,x as m,z as v,b as s,I as f,s as x}from"./index.dd3d41c1.js";import{_ as p}from"./UserInfo.2fc967f7.js";const w={},g={fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},y=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"},null,-1),k=[y];function $(d,r){return n(),i("svg",g,k)}var V=b(w,[["render",$]]);const B={class:"mb-4 grid gap-x-3 gap-y-1.5 md:grid-cols-3"},K=e("option",{value:"1",selected:""},"\u6700\u65B0\u8CBC\u6587",-1),U=e("option",{value:"2"},"\u6700\u820A\u8CBC\u6587",-1),j=e("option",{value:"3"},"\u71B1\u9580\u8CBC\u6587",-1),z=[K,U,j],C={class:"md:col-span-2"},I={class:"flex h-11 border-2 border-black"},M=["onKeyup"],G={emits:["get-posts"],setup(d,{emit:r}){const t=_(""),l=_(1),a=()=>{r("get-posts",l.value,t.value)};return(q,o)=>(n(),i("div",B,[e("div",null,[u(e("select",{class:"h-11 w-full border-2 border-black",name:"category","onUpdate:modelValue":o[0]||(o[0]=c=>l.value=c),onChange:a},z,544),[[h,l.value,void 0,{number:!0}]])]),e("div",C,[e("div",I,[u(e("input",{class:"w-full border-0",type:"text",placeholder:"\u641C\u5C0B\u8CBC\u6587","onUpdate:modelValue":o[1]||(o[1]=c=>t.value=c),onKeyup:v(a,["enter"])},null,40,M),[[m,t.value,void 0,{trim:!0}]]),e("button",{type:"button",class:"flex w-11 items-center justify-center border-l-2 border-black bg-primary",onClick:a},[s(V,{class:"h-8 w-8 text-white"})])])])]))}},T={class:"animate-pulse rounded-lg border-2 border-black bg-white p-6 shadow-post"},D=e("p",{class:"mb-4 h-10 whitespace-pre"},"Loading...",-1),N={type:"button",class:"flex items-center justify-center py-5"},P={class:"mb-5 flex items-center"},S=e("div",{class:"flex w-full"},[e("input",{class:"w-full border-2 border-black",type:"text"}),e("button",{class:"inline-block w-full max-w-[128px] border-2 border-black bg-primary text-base text-white"}," \u7559\u8A00 ")],-1),E={class:"mb-4 rounded-lg bg-secondary px-4 py-5"},L=e("p",{class:"mb-4 whitespace-pre"},null,-1),H={setup(d){return(r,t)=>(n(),i("div",T,[s(p,{class:"mb-4",subTitle:"loading..."}),D,e("div",null,[e("button",N,[s(f,{class:"mr-2 h-5 w-5"})])]),e("div",P,[s(x,{class:"mx-2",size:"40"}),S]),e("div",E,[s(p,{class:"mb-4",userPageUrl:"#"}),L])]))}};export{G as _,H as a};
