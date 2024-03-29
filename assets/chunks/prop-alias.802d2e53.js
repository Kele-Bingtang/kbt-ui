import{h as m,l as u,r as f,o as g,g as h,c as C,b as _,a as i,w as s,d as p,t as y,F as V}from"../app.2f331f2f.js";const x=m({__name:"basic",setup(b){const d=u((()=>{const o=[];for(let e=1;e<=15;e++)o.push({key:e,label:`Option ${e}`,disabled:e%4===0});return o})()),n=u([]);return(o,e)=>{const l=f("k-transfer");return g(),h(l,{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=a=>n.value=a),data:d.value},null,8,["modelValue","data"])}}});var F=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"}));const O=_("p",{style:{"text-align":"center",margin:"0 0 20px"}}," Customize data items using render-content ",-1),T={style:{"text-align":"center"}},z=_("p",{style:{"text-align":"center",margin:"50px 0 20px"}}," Customize data items using scoped slot ",-1),S={style:{"text-align":"center"}},$=m({__name:"customizable",setup(b){const d=u((()=>{const a=[];for(let t=1;t<=15;t++)a.push({key:t,label:`Option ${t}`,disabled:t%4===0});return a})()),n=u([1]),o=u([1]),e=(a,t)=>a("span",null,t.label),l=(a,t,r)=>{console.log(a,t,r)};return(a,t)=>{const r=f("k-button"),k=f("k-transfer");return g(),C(V,null,[O,_("div",T,[i(k,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=c=>o.value=c),style:{"text-align":"left",display:"inline-block"},filterable:"","left-default-checked":[2,3],"right-default-checked":[1],"render-content":e,titles:["Source","Target"],"button-texts":["To left","To right"],format:{noChecked:"${total}",hasChecked:"${checked}/${total}"},data:d.value,onChange:l},{"left-footer":s(()=>[i(r,{class:"transfer-footer",size:"small"},{default:s(()=>[p("Operation")]),_:1})]),"right-footer":s(()=>[i(r,{class:"transfer-footer",size:"small"},{default:s(()=>[p("Operation")]),_:1})]),_:1},8,["modelValue","data"]),z,_("div",S,[i(k,{modelValue:n.value,"onUpdate:modelValue":t[1]||(t[1]=c=>n.value=c),style:{"text-align":"left",display:"inline-block"},filterable:"","left-default-checked":[2,3],"right-default-checked":[1],titles:["Source","Target"],"button-texts":["To left","To right"],format:{noChecked:"${total}",hasChecked:"${checked}/${total}"},data:d.value,onChange:l},{default:s(({option:c})=>[_("span",null,y(c.key)+" - "+y(c.label),1)]),"left-footer":s(()=>[i(r,{class:"transfer-footer",size:"small"},{default:s(()=>[p("Operation")]),_:1})]),"right-footer":s(()=>[i(r,{class:"transfer-footer",size:"small"},{default:s(()=>[p("Operation")]),_:1})]),_:1},8,["modelValue","data"])])])],64)}}});var U=Object.freeze(Object.defineProperty({__proto__:null,default:$},Symbol.toStringTag,{value:"Module"}));const D=m({__name:"filterable",setup(b){const d=u((()=>{const e=[],l=["California","Illinois","Maryland","Texas","Florida","Colorado","Connecticut "],a=["CA","IL","MD","TX","FL","CO","CT"];return l.forEach((t,r)=>{e.push({label:t,key:r,initial:a[r]})}),e})()),n=u([]),o=(e,l)=>l.initial.toLowerCase().includes(e.toLowerCase());return(e,l)=>{const a=f("k-transfer");return g(),h(a,{modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=t=>n.value=t),filterable:"","filter-method":o,"filter-placeholder":"State Abbreviations",data:d.value},null,8,["modelValue","data"])}}});var w=Object.freeze(Object.defineProperty({__proto__:null,default:D},Symbol.toStringTag,{value:"Module"}));const j=m({__name:"prop-alias",setup(b){const d=u((()=>{const o=[];for(let e=1;e<=15;e++)o.push({value:e,desc:`Option ${e}`,disabled:e%4===0});return o})()),n=u([]);return(o,e)=>{const l=f("k-transfer");return g(),h(l,{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=a=>n.value=a),props:{key:"value",label:"desc"},data:d.value},null,8,["modelValue","data"])}}});var B=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"}));export{F as _,U as a,w as b,B as c};
