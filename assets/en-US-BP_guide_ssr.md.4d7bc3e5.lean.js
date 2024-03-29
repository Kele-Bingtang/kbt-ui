import{o as e,c as o,b as n,d as s,a as t,e as p,_ as c}from"./app.2f331f2f.js";const l=n("h1",{id:"server-side-rendering-ssr",tabindex:"-1"},[s("Server-Side Rendering (SSR) "),n("a",{class:"header-anchor vp-link",href:"#server-side-rendering-ssr","aria-hidden":"true"},"#")],-1),u=n("p",null,"When using Kbt UI for SSR development, you need to carry out special handling during SSR to avoid hydrate errors.",-1),i={class:"tip custom-block"},r=n("p",{class:"custom-block-title"},"TIP",-1),k={href:"https://github.com/kbt-ui/kbt-ui-nuxt",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},d=p("",7),g={href:"https://vuejs.org/guide/scaling-up/ssr.html#teleports",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},m=p("",8),h={class:"warning custom-block"},_=n("p",{class:"custom-block-title"},"WARNING",-1),v={href:"https://github.com/vuejs/core/issues?q=is%3Aissue+is%3Aopen+ssr+teleport+",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},y=n("ol",null,[n("li",null,[s("The "),n("code",null,"teleported"),s(" attribute in all components based on KTooltip should be consistent, it is recommended to use the default value.")]),n("li",null,[s("The "),n("code",null,"append-to-body"),s(" attribute value of KDialog and KDrawer should be consistent, it is recommended to enable the "),n("code",null,"append-to-body"),s(".")]),n("li",null,[s("When the KSubMenu component has a multi-layer popup, It is recommended to enable the "),n("code",null,"teleported")])],-1),f=p("",5),x='{"title":"SSR","description":"","frontmatter":{"title":"SSR","lang":"zh-CN"},"headers":[{"level":2,"title":"Provide an ID","slug":"provide-an-id"},{"level":2,"title":"Provide ZIndex","slug":"provide-zindex"},{"level":2,"title":"Teleports","slug":"teleports"},{"level":3,"title":"Render the Teleport on the mount","slug":"render-the-teleport-on-the-mount"},{"level":3,"title":"Inject the teleport markup","slug":"inject-the-teleport-markup"}],"relativePath":"en-US-BP/guide/ssr.md","lastUpdated":null}',b={},q=Object.assign(b,{__name:"ssr",setup(w){return(T,I)=>{const a=c;return e(),o("div",null,[l,u,n("div",i,[r,n("p",null,[s("For Nuxt users, we provide a "),n("a",k,[s("Nuxt module"),t(a,{class:"link-icon"})]),s(" that contains these special processes. You only need to install it.")])]),d,n("p",null,[n("a",g,[s("Teleport"),t(a,{class:"link-icon"})]),s(" is used internally by multiple components in Kbt UI (eg. KDialog, KDrawer, KTooltip, KDropdown, KSelect, KDatePicker ...), so special handling is required during SSR.")]),m,n("div",h,[_,n("p",null,[s("There may be some "),n("a",v,[s("SSR problems with teleport"),t(a,{class:"link-icon"})]),s(", so you should pay attention to the following precautions.")]),y]),f])}}});export{x as __pageData,q as default};