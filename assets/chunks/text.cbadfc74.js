import{h as u,l as _,r,o as s,g as p,f as g,c as f,b as d,a as c,F as b,s as k,v as y,u as S,au as i,av as j,aw as x}from"../app.588c199b.js";const O=u({__name:"allow-half",setup(t){const e=_();return(n,l)=>{const a=r("k-rate");return s(),p(a,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=o=>e.value=o),"allow-half":""},null,8,["modelValue"])}}});var D=Object.freeze(Object.defineProperty({__proto__:null,default:O},Symbol.toStringTag,{value:"Module"}));const V=t=>(k("data-v-38c6e267"),t=t(),y(),t),U={class:"demo-rate-block"},z=V(()=>d("span",{class:"demonstration"},"Default",-1)),F={class:"demo-rate-block"},$=V(()=>d("span",{class:"demonstration"},"Color for different levels",-1)),M=u({__name:"basic-usage",setup(t){const e=_(null),n=_(null),l=_(["#99A9BF","#F7BA2A","#FF9900"]);return(a,o)=>{const m=r("k-rate");return s(),f(b,null,[d("div",U,[z,c(m,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=v=>e.value=v)},null,8,["modelValue"])]),d("div",F,[$,c(m,{modelValue:n.value,"onUpdate:modelValue":o[1]||(o[1]=v=>n.value=v),colors:l.value},null,8,["modelValue","colors"])])],64)}}});var P=g(M,[["__scopeId","data-v-38c6e267"]]),E=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"}));const T=u({__name:"clearable",setup(t){const e=_(3);return(n,l)=>{const a=r("k-rate");return s(),p(a,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=o=>e.value=o),clearable:""},null,8,["modelValue"])}}});var q=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"}));const w=u({__name:"more-icons",setup(t){const e=_(),n=[i,j,x];return(l,a)=>{const o=r("k-rate");return s(),p(o,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=m=>e.value=m),icons:n,"void-icon":S(i),colors:["#409eff","#67c23a","#FF9900"]},null,8,["modelValue","void-icon"])}}});var G=Object.freeze(Object.defineProperty({__proto__:null,default:w},Symbol.toStringTag,{value:"Module"}));const B=u({__name:"readonly",setup(t){const e=_(3.7);return(n,l)=>{const a=r("k-rate");return s(),p(a,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=o=>e.value=o),disabled:"","show-score":"","text-color":"#ff9900","score-template":"{value} points"},null,8,["modelValue"])}}});var H=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"}));const I=d("br",null,null,-1),h=d("br",null,null,-1),A=u({__name:"sizes",setup(t){const e=_(null);return(n,l)=>{const a=r("k-rate");return s(),f(b,null,[c(a,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=o=>e.value=o),size:"large"},null,8,["modelValue"]),I,c(a,{modelValue:e.value,"onUpdate:modelValue":l[1]||(l[1]=o=>e.value=o)},null,8,["modelValue"]),h,c(a,{modelValue:e.value,"onUpdate:modelValue":l[2]||(l[2]=o=>e.value=o),size:"small"},null,8,["modelValue"])],64)}}});var J=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"}));const C=u({__name:"text",setup(t){const e=_();return(n,l)=>{const a=r("k-rate");return s(),p(a,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=o=>e.value=o),texts:["oops","disappointed","normal","good","great"],"show-text":""},null,8,["modelValue"])}}});var K=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"}));export{D as _,E as a,q as b,G as c,H as d,J as e,K as f};