import{o,c as p,b as n,d as s,a as t,e,_ as c}from"./app.2f331f2f.js";const l=n("h1",{id:"custom-theme",tabindex:"-1"},[s("Custom theme "),n("a",{class:"header-anchor vp-link",href:"#custom-theme","aria-hidden":"true"},"#")],-1),i=n("p",null,"Kbt UI uses BEM-styled CSS so that you can override styles easily. But if you need to replace styles at a large scale, e.g. change the theme color from blue to orange or green, maybe overriding them one by one is not a good idea.",-1),u=n("p",null,"We provide four ways to change the style variables.",-1),r=n("h2",{id:"change-theme-color",tabindex:"-1"},[s("Change theme color "),n("a",{class:"header-anchor vp-link",href:"#change-theme-color","aria-hidden":"true"},"#")],-1),k=n("p",null,"These are examples about custom theme.",-1),d={href:"https://github.com/kbt-ui/kbt-ui-vite-starter",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/kbt-ui/unplugin-element-plus",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},h=n("h3",{id:"by-scss-variables",tabindex:"-1"},[s("By SCSS variables "),n("a",{class:"header-anchor vp-link",href:"#by-scss-variables","aria-hidden":"true"},"#")],-1),g=n("code",null,"theme-chalk",-1),b={href:"https://github.com/kbt-ui/kbt-ui/blob/dev/packages/theme-chalk/src/common/var.scss",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"packages/theme-chalk/src/common/var.scss",-1),_={class:"warning custom-block"},f=n("p",{class:"custom-block-title"},"WARNING",-1),y={href:"https://sass-lang.com/documentation/values/maps",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"@use",-1),S=n("code",null,"@use",-1),C=n("code",null,"@import",-1),I={href:"https://css-tricks.com/introducing-sass-modules/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},x=n("p",null,[s("For example, We use "),n("code",null,"$colors"),s(" as a map to preserve different types of colors.")],-1),T=n("p",null,[n("code",null,"$notification"),s(" is a map where all variables of the "),n("code",null,"notification"),s(" component at.")],-1),q={href:"https://github.com/kbt-ui/kbt-ui/blob/dev/packages/theme-chalk/src/common/var.scss",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},A=e("",3),U={class:"warning custom-block"},V=n("p",{class:"custom-block-title"},"WARNING",-1),N=n("p",null,[s("You should use "),n("code",null,"@use 'xxx.scss' as *;"),s(" instead of "),n("code",null,"@import 'xxx.scss';"),s(".")],-1),B=n("p",null,[s("Because the sass team said they will remove "),n("code",null,"@import"),s(" eventually.")],-1),P={href:"https://sass-lang.com/documentation/at-rules/use",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},K={href:"https://sass-lang.com/documentation/at-rules/import",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},E=e("",13),W={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},j=e("",12),D={href:"https://vueuse.org/core/usecssvar/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},F='{"title":"Theming","description":"","frontmatter":{"title":"Theming","lang":"zh-CN"},"headers":[{"level":2,"title":"Change theme color","slug":"change-theme-color"},{"level":3,"title":"By SCSS variables","slug":"by-scss-variables"},{"level":3,"title":"How to override it?","slug":"how-to-override-it"},{"level":3,"title":"By CSS Variable","slug":"by-css-variable"}],"relativePath":"en-US-BP/guide/theming.md","lastUpdated":null}',R={},M=Object.assign(R,{__name:"theming",setup($){return(z,O)=>{const a=c;return o(),p("div",null,[l,i,u,r,k,n("ul",null,[n("li",null,[s("Full import: "),n("a",d,[s("kbt-ui-vite-starter"),t(a,{class:"link-icon"})])]),n("li",null,[s("On demand: "),n("a",m,[s("unplugin-element-plus/examples/vite"),t(a,{class:"link-icon"})])])]),h,n("p",null,[g,s(" is written in SCSS. You can find SCSS variables in "),n("a",b,[v,t(a,{class:"link-icon"})]),s(".")]),n("div",_,[f,n("p",null,[s("We use sass modules ("),n("a",y,[s("sass:map"),t(a,{class:"link-icon"})]),s("...) and "),w,s(" to refactor all SCSS variables. And by using "),S,s(" to all SCSS variables, it solves the duplicate output problem caused by "),C,s(".")]),n("blockquote",null,[n("p",null,[n("a",I,[s("Introducing Sass Modules | CSS-TRICKS"),t(a,{class:"link-icon"})])])]),x,T,n("p",null,[s("In the future, we will write documentation for variables that can be customized for each component. You can also directly checkout the source "),n("a",q,[s("var.scss"),t(a,{class:"link-icon"})]),s(".")])]),A,n("div",U,[V,N,B,n("blockquote",null,[n("p",null,[n("a",P,[s("Sass: @use"),t(a,{class:"link-icon"})]),s(" vs "),n("a",K,[s("Sass: @import"),t(a,{class:"link-icon"})])])])]),E,n("blockquote",null,[n("p",null,[s("Learn more from "),n("a",W,[s("Using CSS custom properties (variables) | MDN"),t(a,{class:"link-icon"})])])]),j,n("p",null,[s("If you want a more elegant way, check this out. "),n("a",D,[s("useCssVar | VueUse"),t(a,{class:"link-icon"})])])])}}});export{F as __pageData,M as default};