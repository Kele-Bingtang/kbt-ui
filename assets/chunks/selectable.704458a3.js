import{h as i,r as _,o as b,g,l as k,c as w,a as p,u as y,b6 as x,b as f,w as m,d as L,F as C,t as S,az as z}from"../app.2f331f2f.js";const O=i({__name:"accordion",setup(u){const t=a=>{console.log(a)},n=[{label:"Level one 1",children:[{label:"Level two 1-1",children:[{label:"Level three 1-1-1"}]}]},{label:"Level one 2",children:[{label:"Level two 2-1",children:[{label:"Level three 2-1-1"}]},{label:"Level two 2-2",children:[{label:"Level three 2-2-1"}]}]},{label:"Level one 3",children:[{label:"Level two 3-1",children:[{label:"Level three 3-1-1"}]},{label:"Level two 3-2",children:[{label:"Level three 3-2-1"}]}]}],o={children:"children",label:"label"};return(a,l)=>{const e=_("k-tree");return b(),g(e,{style:{"max-width":"600px"},data:n,props:o,accordion:"",onNodeClick:t})}}});var W=Object.freeze(Object.defineProperty({__proto__:null,default:O},Symbol.toStringTag,{value:"Module"}));const j=i({__name:"basic",setup(u){const t=a=>{console.log(a)},n=[{label:"Level one 1",children:[{label:"Level two 1-1",children:[{label:"Level three 1-1-1"}]}]},{label:"Level one 2",children:[{label:"Level two 2-1",children:[{label:"Level three 2-1-1"}]},{label:"Level two 2-2",children:[{label:"Level three 2-2-1"}]}]},{label:"Level one 3",children:[{label:"Level two 3-1",children:[{label:"Level three 3-1-1"}]},{label:"Level two 3-2",children:[{label:"Level three 3-2-1"}]}]}],o={children:"children",label:"label"};return(a,l)=>{const e=_("k-tree");return b(),g(e,{style:{"max-width":"600px"},data:n,props:o,onNodeClick:t})}}});var X=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"}));const P={class:"buttons"},T=i({__name:"checking-tree",setup(u){const t=k(),n=()=>{console.log(t.value.getCheckedNodes(!1,!1))},o=()=>{console.log(t.value.getCheckedKeys(!1))},a=()=>{t.value.setCheckedNodes([{id:5,label:"Level two 2-1"},{id:9,label:"Level three 1-1-1"}],!1)},l=()=>{t.value.setCheckedKeys([3],!1)},e=()=>{t.value.setCheckedKeys([],!1)},r={children:"children",label:"label"},c=[{id:1,label:"Level one 1",children:[{id:4,label:"Level two 1-1",children:[{id:9,label:"Level three 1-1-1"},{id:10,label:"Level three 1-1-2"}]}]},{id:2,label:"Level one 2",children:[{id:5,label:"Level two 2-1"},{id:6,label:"Level two 2-2"}]},{id:3,label:"Level one 3",children:[{id:7,label:"Level two 3-1"},{id:8,label:"Level two 3-2"}]}];return(h,s)=>{const d=_("k-button");return b(),w(C,null,[p(y(x),{ref_key:"treeRef",ref:t,style:{"max-width":"600px"},data:c,"show-checkbox":"","default-expand-all":"","node-key":"id","highlight-current":"",props:r},null,512),f("div",P,[p(d,{onClick:n},{default:m(()=>[L("get by node")]),_:1}),p(d,{onClick:o},{default:m(()=>[L("get by key")]),_:1}),p(d,{onClick:a},{default:m(()=>[L("set by node")]),_:1}),p(d,{onClick:l},{default:m(()=>[L("set by key")]),_:1}),p(d,{onClick:e},{default:m(()=>[L("reset")]),_:1})])],64)}}});var Y=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"}));const D=i({__name:"custom-leaf",setup(u){const t={label:"name",children:"zones",isLeaf:"leaf"},n=(o,a)=>{if(o.level===0)return a([{name:"region"}]);if(o.level>1)return a([]);setTimeout(()=>{a([{name:"leaf",leaf:!0},{name:"zone"}])},500)};return(o,a)=>{const l=_("k-tree");return b(),g(l,{style:{"max-width":"600px"},props:t,load:n,lazy:"","show-checkbox":""})}}});var Z=Object.freeze(Object.defineProperty({__proto__:null,default:D},Symbol.toStringTag,{value:"Module"}));const $={class:"custom-tree-node-container"},M=i({__name:"custom-node-class",setup(u){const t=(o,a)=>o.isPenultimate?"is-penultimate":null,n=[{id:1,label:"Level one 1",children:[{id:4,label:"Level two 1-1",isPenultimate:!0,children:[{id:9,label:"Level three 1-1-1"},{id:10,label:"Level three 1-1-2"}]}]},{id:2,label:"Level one 2",isPenultimate:!0,children:[{id:5,label:"Level two 2-1"},{id:6,label:"Level two 2-2"}]},{id:3,label:"Level one 3",isPenultimate:!0,children:[{id:7,label:"Level two 3-1"},{id:8,label:"Level two 3-2"}]}];return(o,a)=>{const l=_("k-tree");return b(),w("div",$,[p(l,{style:{"max-width":"600px"},data:n,"show-checkbox":"","node-key":"id","default-expand-all":"","expand-on-click-node":!1,props:{class:t}},null,8,["props"])])}}});var ee=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"}));const K={class:"custom-tree-container"},R=f("p",null,"Using render-content",-1),V=f("p",null,"Using scoped slot",-1),E={class:"custom-tree-node"},B=["onClick"],F=["onClick"],U=i({__name:"customized-node",setup(u){let t=1e3;const n=e=>{const r={id:t++,label:"testtest",children:[]};e.children||(e.children=[]),e.children.push(r),l.value=[...l.value]},o=(e,r)=>{const c=e.parent,h=c.data.children||c.data,s=h.findIndex(d=>d.id===r.id);h.splice(s,1),l.value=[...l.value]},a=(e,{node:r,data:c,store:h})=>e("span",{class:"custom-tree-node"},e("span",null,r.label),e("span",null,e("a",{onClick:()=>n(c)},"Append "),e("a",{style:"margin-left: 8px",onClick:()=>o(r,c)},"Delete"))),l=k([{id:1,label:"Level one 1",children:[{id:4,label:"Level two 1-1",children:[{id:9,label:"Level three 1-1-1"},{id:10,label:"Level three 1-1-2"}]}]},{id:2,label:"Level one 2",children:[{id:5,label:"Level two 2-1"},{id:6,label:"Level two 2-2"}]},{id:3,label:"Level one 3",children:[{id:7,label:"Level two 3-1"},{id:8,label:"Level two 3-2"}]}]);return(e,r)=>{const c=_("k-tree");return b(),w("div",K,[R,p(c,{style:{"max-width":"600px"},data:l.value,"show-checkbox":"","node-key":"id","default-expand-all":"","expand-on-click-node":!1,"render-content":a},null,8,["data"]),V,p(c,{style:{"max-width":"600px"},data:l.value,"show-checkbox":"","node-key":"id","default-expand-all":"","expand-on-click-node":!1},{default:m(({node:h,data:s})=>[f("span",E,[f("span",null,S(h.label),1),f("span",null,[f("a",{onClick:d=>n(s)}," Append ",8,B),f("a",{style:{"margin-left":"8px"},onClick:d=>o(h,s)}," Delete ",8,F)])])]),_:1},8,["data"])])}}});var le=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"}));const A=i({__name:"default-state",setup(u){const t={children:"children",label:"label"},n=[{id:1,label:"Level one 1",children:[{id:4,label:"Level two 1-1",children:[{id:9,label:"Level three 1-1-1"},{id:10,label:"Level three 1-1-2"}]}]},{id:2,label:"Level one 2",children:[{id:5,label:"Level two 2-1"},{id:6,label:"Level two 2-2"}]},{id:3,label:"Level one 3",children:[{id:7,label:"Level two 3-1"},{id:8,label:"Level two 3-2"}]}];return(o,a)=>{const l=_("k-tree");return b(),g(l,{style:{"max-width":"600px"},data:n,"show-checkbox":"","node-key":"id","default-expanded-keys":[2,3],"default-checked-keys":[5],props:t})}}});var te=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"}));const I=i({__name:"disabled",setup(u){const t={children:"children",label:"label",disabled:"disabled"},n=[{id:1,label:"Level one 1",children:[{id:3,label:"Level two 2-1",children:[{id:4,label:"Level three 3-1-1"},{id:5,label:"Level three 3-1-2",disabled:!0}]},{id:2,label:"Level two 2-2",disabled:!0,children:[{id:6,label:"Level three 3-2-1"},{id:7,label:"Level three 3-2-2",disabled:!0}]}]}];return(o,a)=>{const l=_("k-tree");return b(),g(l,{style:{"max-width":"600px"},data:n,props:t,"show-checkbox":""})}}});var ae=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"}));const q=i({__name:"draggable",setup(u){const t=(s,d)=>{console.log("drag start",s)},n=(s,d,v)=>{console.log("tree drag enter:",d.label)},o=(s,d,v)=>{console.log("tree drag leave:",d.label)},a=(s,d,v)=>{console.log("tree drag over:",d.label)},l=(s,d,v,N)=>{console.log("tree drag end:",d&&d.label,v)},e=(s,d,v,N)=>{console.log("tree drop:",d.label,v)},r=(s,d,v)=>d.data.label==="Level two 3-1"?v!=="inner":!0,c=s=>!s.data.label.includes("Level three 3-1-1"),h=[{label:"Level one 1",children:[{label:"Level two 1-1",children:[{label:"Level three 1-1-1"}]}]},{label:"Level one 2",children:[{label:"Level two 2-1",children:[{label:"Level three 2-1-1"}]},{label:"Level two 2-2",children:[{label:"Level three 2-2-1"}]}]},{label:"Level one 3",children:[{label:"Level two 3-1",children:[{label:"Level three 3-1-1"}]},{label:"Level two 3-2",children:[{label:"Level three 3-2-1"}]}]}];return(s,d)=>{const v=_("k-tree");return b(),g(v,{style:{"max-width":"600px"},"allow-drop":r,"allow-drag":c,data:h,draggable:"","default-expand-all":"","node-key":"id",onNodeDragStart:t,onNodeDragEnter:n,onNodeDragLeave:o,onNodeDragOver:a,onNodeDragEnd:l,onNodeDrop:e})}}});var ne=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"}));const G=i({__name:"filtering",setup(u){const t=k(""),n=k(),o={children:"children",label:"label"};z(t,e=>{n.value.filter(e)});const a=(e,r)=>e?r.label.includes(e):!0,l=[{id:1,label:"Level one 1",children:[{id:4,label:"Level two 1-1",children:[{id:9,label:"Level three 1-1-1"},{id:10,label:"Level three 1-1-2"}]}]},{id:2,label:"Level one 2",children:[{id:5,label:"Level two 2-1"},{id:6,label:"Level two 2-2"}]},{id:3,label:"Level one 3",children:[{id:7,label:"Level two 3-1"},{id:8,label:"Level two 3-2"}]}];return(e,r)=>{const c=_("k-input");return b(),w(C,null,[p(c,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=h=>t.value=h),style:{width:"240px"},placeholder:"Filter keyword"},null,8,["modelValue"]),p(y(x),{ref_key:"treeRef",ref:n,style:{"max-width":"600px"},class:"filter-tree",data:l,props:o,"default-expand-all":"","filter-node-method":a},null,512)],64)}}});var oe=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"}));const H=i({__name:"multiple-times-load",setup(u){const t={label:"name",children:"zones",isLeaf:"leaf"};let n=0;const o=(a,l,e)=>{if(a.level===0)return l([{name:"region"}]);n++,a.level>=1&&setTimeout(()=>n>3?l([{name:"zone1",leaf:!0},{name:"zone2",leaf:!0},{name:"zone3",leaf:!0}]):e(),3e3)};return(a,l)=>{const e=_("k-tree");return b(),g(e,{style:{"max-width":"600px"},props:t,load:o,lazy:""})}}});var re=Object.freeze(Object.defineProperty({__proto__:null,default:H},Symbol.toStringTag,{value:"Module"}));const J=i({__name:"selectable",setup(u){let t=1;const n={label:"name",children:"zones"},o=(l,e,r)=>{console.log(l,e,r)},a=(l,e)=>{if(l.level===0)return e([{name:"Root1"},{name:"Root2"}]);if(l.level>3)return e([]);let r=!1;l.data.name==="region1"?r=!0:l.data.name==="region2"?r=!1:r=Math.random()>.5,setTimeout(()=>{let c=[];r?c=[{name:`zone${t++}`},{name:`zone${t++}`}]:c=[],e(c)},500)};return(l,e)=>{const r=_("k-tree");return b(),g(r,{style:{"max-width":"600px"},props:n,load:a,lazy:"","show-checkbox":"",onCheckChange:o})}}});var de=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"}));export{W as _,X as a,Y as b,Z as c,ee as d,le as e,te as f,ae as g,ne as h,oe as i,re as j,de as k};
