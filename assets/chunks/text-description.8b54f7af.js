import{h as _,l as u,r as c,o as d,c as p,a as s,F as f,g as y,u as b,al as S,aH as U,w,b as V,D as k,aI as x,U as O}from"../app.2f331f2f.js";const j=_({__name:"basic",setup(m){const l=u(!0),n=u(!0);return(o,e)=>{const t=c("k-switch");return d(),p(f,null,[s(t,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=a=>l.value=a)},null,8,["modelValue"]),s(t,{modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=a=>n.value=a),class:"ml-2",style:{"--k-switch-on-color":"#13ce66","--k-switch-off-color":"#ff4949"}},null,8,["modelValue"])],64)}}});var q=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"}));const h=_({__name:"custom-action-icon",setup(m){const l=u(!0);return(n,o)=>{const e=c("k-switch");return d(),y(e,{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=t=>l.value=t),"active-action-icon":b(S),"inactive-action-icon":b(U)},null,8,["modelValue","active-action-icon","inactive-action-icon"])}}});var G=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"}));const P=V("span",{class:"custom-active-action"},"T",-1),$=V("span",{class:"custom-inactive-action"},"F",-1),z=_({__name:"custom-action-slot",setup(m){const l=u(!0);return(n,o)=>{const e=c("k-switch");return d(),y(e,{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=t=>l.value=t)},{"active-action":w(()=>[P]),"inactive-action":w(()=>[$]),_:1},8,["modelValue"])}}});var J=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"}));const T=V("br",null,null,-1),M=_({__name:"custom-icons",setup(m){const l=u(!0),n=u(!0);return(o,e)=>{const t=c("k-switch");return d(),p(f,null,[s(t,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=a=>l.value=a),"active-icon":b(k),"inactive-icon":b(x)},null,8,["modelValue","active-icon","inactive-icon"]),T,s(t,{modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=a=>n.value=a),class:"mt-2",style:{"margin-left":"24px"},"inline-prompt":"","active-icon":b(k),"inactive-icon":b(x)},null,8,["modelValue","active-icon","inactive-icon"])],64)}}});var L=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"}));const C=_({__name:"disabled",setup(m){const l=u(!0),n=u(!0);return(o,e)=>{const t=c("k-switch");return d(),p(f,null,[s(t,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=a=>l.value=a),disabled:""},null,8,["modelValue"]),s(t,{modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=a=>n.value=a),class:"ml-2"},null,8,["modelValue"])],64)}}});var Q=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"}));const B=_({__name:"extended-value-types",setup(m){const l=u("100");return(n,o)=>{const e=c("k-switch"),t=c("k-tooltip");return d(),y(t,{content:"Switch value: "+l.value,placement:"top"},{default:w(()=>[s(e,{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=a=>l.value=a),style:{"--k-switch-on-color":"#13ce66","--k-switch-off-color":"#ff4949"},"active-value":"100","inactive-value":"0"},null,8,["modelValue"])]),_:1},8,["content"])}}});var R=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"}));const A=_({__name:"loading",setup(m){const l=u(!0),n=u(!1);return(o,e)=>{const t=c("k-switch");return d(),p(f,null,[s(t,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=a=>l.value=a),loading:""},null,8,["modelValue"]),s(t,{modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=a=>n.value=a),loading:"",class:"ml-2"},null,8,["modelValue"])],64)}}});var W=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"}));const F=_({__name:"prevent-switching",setup(m){const l=u(!1),n=u(!1),o=u(!1),e=u(!1),t=()=>(o.value=!0,new Promise(g=>{setTimeout(()=>(o.value=!1,O.success("Switch success"),g(!0)),1e3)})),a=()=>(e.value=!0,new Promise((g,i)=>{setTimeout(()=>(e.value=!1,O.error("Switch failed"),i(new Error("Error"))),1e3)}));return(g,i)=>{const v=c("k-switch");return d(),p(f,null,[s(v,{modelValue:l.value,"onUpdate:modelValue":i[0]||(i[0]=r=>l.value=r),loading:o.value,"before-change":t},null,8,["modelValue","loading"]),s(v,{modelValue:n.value,"onUpdate:modelValue":i[1]||(i[1]=r=>n.value=r),class:"ml-2",loading:e.value,"before-change":a},null,8,["modelValue","loading"])],64)}}});var X=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"}));const E=V("br",null,null,-1),D=V("br",null,null,-1),N=_({__name:"sizes",setup(m){const l=u(!0);return(n,o)=>{const e=c("k-switch");return d(),p(f,null,[s(e,{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=t=>l.value=t),size:"large","active-text":"Open","inactive-text":"Close"},null,8,["modelValue"]),E,s(e,{modelValue:l.value,"onUpdate:modelValue":o[1]||(o[1]=t=>l.value=t),"active-text":"Open","inactive-text":"Close"},null,8,["modelValue"]),D,s(e,{modelValue:l.value,"onUpdate:modelValue":o[2]||(o[2]=t=>l.value=t),size:"small","active-text":"Open","inactive-text":"Close"},null,8,["modelValue"])],64)}}});var Z=Object.freeze(Object.defineProperty({__proto__:null,default:N},Symbol.toStringTag,{value:"Module"}));const H=V("br",null,null,-1),I=V("br",null,null,-1),K=_({__name:"text-description",setup(m){const l=u(!0),n=u(!0),o=u(!0),e=u(!0),t=u(!0),a=u(!0);return(g,i)=>{const v=c("k-switch");return d(),p(f,null,[s(v,{modelValue:l.value,"onUpdate:modelValue":i[0]||(i[0]=r=>l.value=r),class:"mb-2","active-text":"Pay by month","inactive-text":"Pay by year"},null,8,["modelValue"]),H,s(v,{modelValue:n.value,"onUpdate:modelValue":i[1]||(i[1]=r=>n.value=r),class:"mb-2",style:{"--k-switch-on-color":"#13ce66","--k-switch-off-color":"#ff4949"},"active-text":"Pay by month","inactive-text":"Pay by year"},null,8,["modelValue"]),I,s(v,{modelValue:o.value,"onUpdate:modelValue":i[2]||(i[2]=r=>o.value=r),"inline-prompt":"","active-text":"\u662F","inactive-text":"\u5426"},null,8,["modelValue"]),s(v,{modelValue:e.value,"onUpdate:modelValue":i[3]||(i[3]=r=>e.value=r),class:"ml-2","inline-prompt":"",style:{"--k-switch-on-color":"#13ce66","--k-switch-off-color":"#ff4949"},"active-text":"Y","inactive-text":"N"},null,8,["modelValue"]),s(v,{modelValue:a.value,"onUpdate:modelValue":i[4]||(i[4]=r=>a.value=r),class:"ml-2",width:"60","inline-prompt":"","active-text":"\u8D85\u51FA\u7701\u7565","inactive-text":"\u8D85\u51FA\u7701\u7565"},null,8,["modelValue"]),s(v,{modelValue:t.value,"onUpdate:modelValue":i[5]||(i[5]=r=>t.value=r),class:"ml-2","inline-prompt":"",style:{"--k-switch-on-color":"#13ce66","--k-switch-off-color":"#ff4949"},"active-text":"\u5B8C\u6574\u5C55\u793A\u591A\u4E2A\u5185\u5BB9","inactive-text":"\u591A\u4E2A\u5185\u5BB9"},null,8,["modelValue"])],64)}}});var ee=Object.freeze(Object.defineProperty({__proto__:null,default:K},Symbol.toStringTag,{value:"Module"}));export{q as _,G as a,J as b,L as c,Q as d,R as e,W as f,X as g,Z as h,ee as i};
