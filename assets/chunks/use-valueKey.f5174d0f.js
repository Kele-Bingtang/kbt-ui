import{h as g,l as r,r as p,o as d,c as V,b as i,a as c,u as m,f as $,F as w,g as y,w as b,d as k,ay as M,az as U,m as A,A as z,t as j,j as C}from"../app.588c199b.js";const T={style:{flex:"auto"}},N=i("p",{style:{"margin-top":"20px","margin-bottom":"8px"}}," set reserve-keyword false ",-1),I=g({__name:"allow-create",setup(f){const u=["a","b","c","d","e","f","g","h","i","j"],t=r([]),a=r(),s=r([]),e=Array.from({length:1e3}).map((o,l)=>({value:`Option ${l+1}`,label:`${u[l%10]}${l}`}));return(o,l)=>{const n=p("k-select-v2");return d(),V("div",T,[i("div",null,[c(n,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=_=>t.value=_),options:m(e),placeholder:"Please select",style:{width:"240px","margin-right":"16px","vertical-align":"middle"},"allow-create":"",filterable:"",multiple:"",clearable:""},null,8,["modelValue","options"]),c(n,{modelValue:a.value,"onUpdate:modelValue":l[1]||(l[1]=_=>a.value=_),options:m(e),placeholder:"Please select",style:{width:"240px","vertical-align":"middle"},"allow-create":"",filterable:"",clearable:""},null,8,["modelValue","options"])]),i("div",null,[N,c(n,{modelValue:s.value,"onUpdate:modelValue":l[2]||(l[2]=_=>s.value=_),options:m(e),placeholder:"Please select",style:{width:"240px","margin-right":"16px","vertical-align":"middle"},"allow-create":"",filterable:"",multiple:"",clearable:"","reserve-keyword":!1},null,8,["modelValue","options"])])])}}});var ke=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"}));const F={class:"flex flex-wrap gap-4 items-center"},D=g({__name:"basic-usage",setup(f){const u=["a","b","c","d","e","f","g","h","i","j"],t=r(),a=Array.from({length:1e3}).map((s,e)=>({value:`Option ${e+1}`,label:`${u[e%10]}${e}`}));return(s,e)=>{const o=p("k-select-v2");return d(),V("div",F,[c(o,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=l=>t.value=l),options:m(a),placeholder:"Please select",size:"large",style:{width:"240px"}},null,8,["modelValue","options"]),c(o,{modelValue:t.value,"onUpdate:modelValue":e[1]||(e[1]=l=>t.value=l),options:m(a),placeholder:"Please select",style:{width:"240px"}},null,8,["modelValue","options"]),c(o,{modelValue:t.value,"onUpdate:modelValue":e[2]||(e[2]=l=>t.value=l),options:m(a),placeholder:"Please select",size:"small",style:{width:"240px"}},null,8,["modelValue","options"])])}}});var L=$(D,[["__scopeId","data-v-29fb790c"]]),$e=Object.freeze(Object.defineProperty({__proto__:null,default:L},Symbol.toStringTag,{value:"Module"}));const W=g({__name:"clearable",setup(f){const u=["a","b","c","d","e","f","g","h","i","j"],t=r([]),a=r(),s=Array.from({length:1e3}).map((e,o)=>({value:`Option ${o+1}`,label:`${u[o%10]}${o}`}));return(e,o)=>{const l=p("k-select-v2");return d(),V(w,null,[c(l,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=n=>t.value=n),options:m(s),placeholder:"Please select",style:{width:"240px","margin-right":"16px","vertical-align":"middle"},multiple:"",clearable:""},null,8,["modelValue","options"]),c(l,{modelValue:a.value,"onUpdate:modelValue":o[1]||(o[1]=n=>a.value=n),options:m(s),placeholder:"Please select",style:{width:"240px","vertical-align":"middle"},clearable:""},null,8,["modelValue","options"])],64)}}});var we=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"}));const K={key:1,class:"select-footer"},B=g({__name:"custom-footer",setup(f){const u=["a","b","c","d","e","f","g","h","i","j"],t=r(null),a=r(!1),s=r([]),e=r(""),o=r(Array.from({length:1e3}).map((h,v)=>({value:`Option ${v+1}`,label:`${u[v%10]}${v}`}))),l=()=>{a.value=!0},n=()=>{e.value&&(o.value.push({label:e.value,value:e.value}),_(),M(()=>{var h;(h=t.value)==null||h.scrollTo(o.value.length-1)}))},_=()=>{e.value="",a.value=!1};return(h,v)=>{const x=p("k-button"),S=p("k-input"),P=p("k-select-v2");return d(),y(P,{ref_key:"select",ref:t,modelValue:s.value,"onUpdate:modelValue":v[1]||(v[1]=O=>s.value=O),options:o.value,placeholder:"Select",style:{width:"240px"}},{footer:b(()=>[a.value?(d(),V("div",K,[c(S,{modelValue:e.value,"onUpdate:modelValue":v[0]||(v[0]=O=>e.value=O),class:"option-input",placeholder:"input option name",size:"small"},null,8,["modelValue"]),i("div",null,[c(x,{type:"primary",size:"small",onClick:n},{default:b(()=>[k(" confirm ")]),_:1}),c(x,{size:"small",onClick:_},{default:b(()=>[k("cancel")]),_:1})])])):(d(),y(x,{key:0,text:"",bg:"",size:"small",onClick:l},{default:b(()=>[k(" Add an option ")]),_:1}))]),_:1},8,["modelValue","options"])}}});var E=$(B,[["__scopeId","data-v-812fe280"]]),xe=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"}));const H=g({__name:"custom-header",setup(f){const u=["a","b","c","d","e","f","g","h","i","j"],t=r(!1),a=r(!1),s=r([]),e=r(Array.from({length:1e3}).map((l,n)=>({value:`Option ${n+1}`,label:`${u[n%10]}${n}`})));U(s,l=>{l.length===0?(t.value=!1,a.value=!1):l.length===e.value.length?(t.value=!0,a.value=!1):a.value=!0});const o=l=>{a.value=!1,l?s.value=e.value.map(n=>n.value):s.value=[]};return(l,n)=>{const _=p("k-checkbox"),h=p("k-select-v2");return d(),y(h,{modelValue:s.value,"onUpdate:modelValue":n[1]||(n[1]=v=>s.value=v),options:e.value,multiple:"",clearable:"","collapse-tags":"",placeholder:"Select","popper-class":"custom-header","max-collapse-tags":1,style:{width:"240px"}},{header:b(()=>[c(_,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=v=>t.value=v),indeterminate:a.value,onChange:o},{default:b(()=>[k(" All ")]),_:1},8,["modelValue","indeterminate"])]),_:1},8,["modelValue","options"])}}});var Oe=Object.freeze(Object.defineProperty({__proto__:null,default:H},Symbol.toStringTag,{value:"Module"}));const G={class:"flex flex-wrap"},J={class:"m-4"},R=i("p",null,"loading icon1",-1),Y=i("svg",{class:"circular",viewBox:"0 0 50 50"},[i("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none"})],-1),Q={class:"m-4"},X=i("p",null,"loading icon2",-1),Z=i("svg",{class:"circular",viewBox:"0 0 20 20"},[i("g",{class:"path2 loading-path","stroke-width":"0",style:{animation:"none",stroke:"none"}},[i("circle",{r:"3.375",class:"dot1",rx:"0",ry:"0"}),i("circle",{r:"3.375",class:"dot2",rx:"0",ry:"0"}),i("circle",{r:"3.375",class:"dot4",rx:"0",ry:"0"}),i("circle",{r:"3.375",class:"dot3",rx:"0",ry:"0"})])],-1),q=g({__name:"custom-loading",setup(f){const u=r([]),t=r([]),a=r([]),s=r(!1);A(()=>{u.value=o.map(l=>({value:`value:${l}`,label:`label:${l}`}))});const e=l=>{l?(s.value=!0,setTimeout(()=>{s.value=!1,t.value=u.value.filter(n=>n.label.toLowerCase().includes(l.toLowerCase()))},3e3)):t.value=[]},o=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];return(l,n)=>{const _=p("k-select-v2"),h=p("k-icon");return d(),V("div",G,[i("div",J,[R,c(_,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=v=>a.value=v),multiple:"",filterable:"",remote:"","reserve-keyword":"",placeholder:"Please enter a keyword","remote-method":e,loading:s.value,options:t.value,style:{width:"240px"}},{loading:b(()=>[Y]),_:1},8,["modelValue","loading","options"])]),i("div",Q,[X,c(_,{modelValue:a.value,"onUpdate:modelValue":n[1]||(n[1]=v=>a.value=v),multiple:"",filterable:"",remote:"","reserve-keyword":"",placeholder:"Please enter a keyword","remote-method":e,loading:s.value,options:t.value,style:{width:"240px"}},{loading:b(()=>[c(h,{class:"is-loading"},{default:b(()=>[Z]),_:1})]),_:1},8,["modelValue","loading","options"])])])}}});var je=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"}));const ee={class:"flex items-center"},le=g({__name:"custom-tag",setup(f){const u=r([]),t=[{value:"#E63415",label:"red"},{value:"#FF6600",label:"orange"},{value:"#FFDE0A",label:"yellow"},{value:"#1EC79D",label:"green"},{value:"#14CCCC",label:"cyan"},{value:"#4167F0",label:"blue"},{value:"#6222C9",label:"purple"}];return t.forEach(a=>{u.value.push(a.value)}),(a,s)=>{const e=p("k-tag"),o=p("k-select-v2");return d(),y(o,{modelValue:u.value,"onUpdate:modelValue":s[0]||(s[0]=l=>u.value=l),multiple:"",placeholder:"Select",options:t,style:{width:"240px"}},{default:b(({item:l})=>[i("div",ee,[c(e,{color:l.value,style:{"margin-right":"8px"},size:"small"},null,8,["color"]),i("span",{style:z({color:l.value})},j(l.label),5)])]),tag:b(()=>[(d(!0),V(w,null,C(u.value,l=>(d(),y(e,{key:l.value,color:l},null,8,["color"]))),128))]),_:1},8,["modelValue"])}}});var te=$(le,[["__scopeId","data-v-7c9052fe"]]),Se=Object.freeze(Object.defineProperty({__proto__:null,default:te},Symbol.toStringTag,{value:"Module"}));const oe={style:{"margin-right":"8px"}},ae={style:{color:"var(--k-text-color-secondary)","font-size":"13px"}},se=g({__name:"customized-option",setup(f){const u=["a","b","c","d","e","f","g","h","i","j"],t=r([]),a=Array.from({length:1e3}).map((s,e)=>({value:`Option ${e+1}`,label:`${u[e%10]}${e}`}));return(s,e)=>{const o=p("k-select-v2");return d(),y(o,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=l=>t.value=l),filterable:"",options:m(a),placeholder:"Please select",style:{width:"240px"},multiple:""},{default:b(({item:l})=>[i("span",oe,j(l.label),1),i("span",ae,j(l.value),1)]),_:1},8,["modelValue","options"])}}});var Pe=Object.freeze(Object.defineProperty({__proto__:null,default:se},Symbol.toStringTag,{value:"Module"}));const ne=g({__name:"disabled",setup(f){const u=["a","b","c","d","e","f","g","h","i","j"],t=r([]),a=Array.from({length:1e3}).map((s,e)=>({value:`Option${e+1}`,label:`${u[e%10]}${e}`,disabled:e%10===0}));return(s,e)=>{const o=p("k-select-v2");return d(),V(w,null,[c(o,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=l=>t.value=l),filterable:"",options:m(a),placeholder:"Please select",style:{width:"240px","margin-right":"16px","vertical-align":"middle"},multiple:""},null,8,["modelValue","options"]),c(o,{modelValue:t.value,"onUpdate:modelValue":e[1]||(e[1]=l=>t.value=l),disabled:"",filterable:"",options:m(a),placeholder:"Please select",style:{width:"240px","vertical-align":"middle"},multiple:""},null,8,["modelValue","options"])],64)}}});var Me=Object.freeze(Object.defineProperty({__proto__:null,default:ne},Symbol.toStringTag,{value:"Module"}));const ue=g({__name:"filterable",setup(f){const u=["a","b","c","d","e","f","g","h","i","j"],t=r([]),a=Array.from({length:1e3}).map((s,e)=>({value:`Option${e+1}`,label:`${u[e%10]}${e}`}));return(s,e)=>{const o=p("k-select-v2");return d(),y(o,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=l=>t.value=l),filterable:"",options:m(a),placeholder:"Please select",style:{width:"240px"},multiple:""},null,8,["modelValue","options"])}}});var Ue=Object.freeze(Object.defineProperty({__proto__:null,default:ue},Symbol.toStringTag,{value:"Module"}));const re=g({__name:"grouping",setup(f){const u=["a","b","c","d","e","f","g","h","i","j"],t=r([]),a=Array.from({length:10}).map((s,e)=>{const o=e+1;return{value:`Group ${o}`,label:`Group ${o}`,options:Array.from({length:10}).map((l,n)=>({value:`Option ${n+1+10*o}`,label:`${u[n%10]}${n+1+10*o}`}))}});return(s,e)=>{const o=p("k-select-v2");return d(),y(o,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=l=>t.value=l),filterable:"",options:m(a),placeholder:"Please select",style:{width:"240px"},multiple:""},null,8,["modelValue","options"])}}});var Ae=Object.freeze(Object.defineProperty({__proto__:null,default:re},Symbol.toStringTag,{value:"Module"}));const ie={class:"m-4"},_e=i("p",null,"use collapse-tags",-1),pe={class:"m-4"},ce=i("p",null,"use collapse-tags-tooltip",-1),de={class:"m-4"},me=i("p",null,"use max-collapse-tags",-1),ve=g({__name:"hide-extra-tags",setup(f){const u=["a","b","c","d","e","f","g","h","i","j"],t=r([]),a=r([]),s=r([]),e=Array.from({length:1e3}).map((o,l)=>({value:`Option ${l+1}`,label:`${u[l%10]}${l}`}));return(o,l)=>{const n=p("k-select-v2");return d(),V(w,null,[i("div",ie,[_e,c(n,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=_=>t.value=_),options:m(e),placeholder:"Please select",style:{width:"240px"},multiple:"","collapse-tags":""},null,8,["modelValue","options"])]),i("div",pe,[ce,c(n,{modelValue:a.value,"onUpdate:modelValue":l[1]||(l[1]=_=>a.value=_),options:m(e),placeholder:"Please select",style:{width:"240px"},multiple:"","collapse-tags":"","collapse-tags-tooltip":""},null,8,["modelValue","options"])]),i("div",de,[me,c(n,{modelValue:s.value,"onUpdate:modelValue":l[2]||(l[2]=_=>s.value=_),options:m(e),placeholder:"Please select",style:{width:"240px"},multiple:"","collapse-tags":"","collapse-tags-tooltip":"","max-collapse-tags":3},null,8,["modelValue","options"])])],64)}}});var ze=Object.freeze(Object.defineProperty({__proto__:null,default:ve},Symbol.toStringTag,{value:"Module"}));const ge=g({__name:"multiple",setup(f){const u=["a","b","c","d","e","f","g","h","i","j"],t=r([]),a=r(Array.from({length:1e3}).map((s,e)=>({value:`Option ${e+1}`,label:`${u[e%10]}${e}`})));return(s,e)=>{const o=p("k-select-v2");return d(),y(o,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=l=>t.value=l),options:a.value,placeholder:"Please select",style:{width:"240px"},multiple:""},null,8,["modelValue","options"])}}});var Ce=Object.freeze(Object.defineProperty({__proto__:null,default:ge},Symbol.toStringTag,{value:"Module"}));const fe=g({__name:"props",setup(f){const u=["a","b","c","d","e","f","g","h","i","j"],t={label:"name",value:"id"},a=r([]),s=Array.from({length:1e3}).map((e,o)=>({id:`Option ${o+1}`,name:`${u[o%10]}${o}`}));return(e,o)=>{const l=p("k-select-v2");return d(),y(l,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=n=>a.value=n),options:m(s),props:t,placeholder:"Please select",style:{width:"240px"},filterable:"",multiple:""},null,8,["modelValue","options"])}}});var Te=Object.freeze(Object.defineProperty({__proto__:null,default:fe},Symbol.toStringTag,{value:"Module"}));const be=g({__name:"remote-search",setup(f){const t=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"].map(l=>({value:`value:${l}`,label:`label:${l}`})),a=r([]),s=r([]),e=r(!1),o=l=>{l!==""?(e.value=!0,setTimeout(()=>{e.value=!1,s.value=t.filter(n=>n.label.toLowerCase().includes(l.toLowerCase()))},200)):s.value=[]};return(l,n)=>{const _=p("k-select-v2");return d(),y(_,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=h=>a.value=h),style:{width:"240px"},multiple:"",filterable:"",remote:"","remote-method":o,clearable:"",options:s.value,loading:e.value,placeholder:"Please enter a keyword"},null,8,["modelValue","options","loading"])}}});var Ne=Object.freeze(Object.defineProperty({__proto__:null,default:be},Symbol.toStringTag,{value:"Module"}));const ye=g({__name:"use-valueKey",setup(f){const u=["a","b","c","d","e","f","g","h","i","j"],t=r({name:"Option 1",test:"test 0"}),a=Array.from({length:1e3}).map((s,e)=>({value:{name:`Option ${e+1}`,test:`test ${e%3}`},label:`${u[e%10]}${e}`}));return(s,e)=>{const o=p("k-select-v2");return d(),y(o,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=l=>t.value=l),options:m(a),placeholder:"Please select","value-key":"name",style:{width:"240px"}},null,8,["modelValue","options"])}}});var he=$(ye,[["__scopeId","data-v-1f0f6392"]]),Ie=Object.freeze(Object.defineProperty({__proto__:null,default:he},Symbol.toStringTag,{value:"Module"}));export{ke as _,$e as a,we as b,xe as c,Oe as d,je as e,Se as f,Pe as g,Me as h,Ue as i,Ae as j,ze as k,Ce as l,Te as m,Ne as n,Ie as o};