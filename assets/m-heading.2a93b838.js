import{_ as d,d as f,u as v,r as i,C as x,y as m,b as g,e as h,k as I,q as M,t as y}from"./index.4d5552a2.js";const C={class:"m-heading"},b=f({props:{text:{type:String,required:!1}},setup(c){const e=c;v(t=>({"41f542fc":a.value?"var(--m-color)":"transparent"}));const s=i(e.text),a=i(!1),n=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];if(e.text){const t=x(),{stop:o}=m(t,([u])=>{if(!u.isIntersecting||(a.value=!0,o(),!e.text))return;let r=0,p=setInterval(()=>{if(r>e.text.length){clearInterval(p);return}s.value=e.text.split("").map((l,_)=>_<r?l:l==" "?" ":n[Math.floor(Math.random()*n.length)]).join(""),r+=1/4},16)},{threshold:1,rootMargin:"10px"})}return(t,o)=>(g(),h("h1",C,[I(t.$slots,"default",{},()=>[M(y(s.value),1)],!0)]))}});var V=d(b,[["__scopeId","data-v-1cdb12a4"]]);export{V as M};