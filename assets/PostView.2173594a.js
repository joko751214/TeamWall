import{a as n}from"./apiPost.f8b44754.js";import{K as c,r as a,o as p,a as u,f as m}from"./index.2f620184.js";import{_ as i}from"./PostCard.7f8c3624.js";import"./UserInfo.ea27dd21.js";import"./apiLike.f204e1d6.js";const P={setup(l){const e=c(),r=a(e.params.id),t=a([]),s=()=>{n.getOne(r.value).then(o=>{[t.value]=o.data.data}).catch(o=>{console.log(o)})};return p(()=>{s()}),(o,_)=>(u(),m(i,{post:t.value,onGetPosts:s},null,8,["post"]))}};export{P as default};
