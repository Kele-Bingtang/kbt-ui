import{_ as u,a as C,b as r}from"./chunks/time-range.2ebc9042.js";import{_ as d}from"./chunks/contributors.d28e9b99.js";import{r as i,o as D,c as k,b as s,d as t,a as n,w as o,u as c,_ as F}from"./app.2f331f2f.js";const m=s("h1",{id:"timeselect",tabindex:"-1"},[t("TimeSelect "),s("a",{class:"header-anchor vp-link",href:"#timeselect","aria-hidden":"true"},"#")],-1),_=s("p",null,"Use Time Select for time input.",-1),h=s("p",null,"The available time range is 00:00 to 23:59",-1),A={class:"tip custom-block"},g=s("p",{class:"custom-block-title"},"TIP",-1),v=s("code",null,"<client-only></client-only>",-1),f={href:"https://nuxt.com/v3",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},b={href:"https://vitepress.vuejs.org/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},y=s("h2",{id:"fixed-time-picker",tabindex:"-1"},[t("Fixed time picker "),s("a",{class:"header-anchor vp-link",href:"#fixed-time-picker","aria-hidden":"true"},"#")],-1),x=s("p",null,"Provide a list of fixed time for users to choose.",-1),w=s("p",null,"time-select/basic",-1),q=s("h2",{id:"time-formats",tabindex:"-1"},[t("Time Formats "),s("a",{class:"header-anchor vp-link",href:"#time-formats","aria-hidden":"true"},"#")],-1),B=s("p",null,[t("Use "),s("code",null,"format"),t(" to control format of time(hours and minutes).")],-1),T={href:"https://day.js.org/docs/en/display/format#list-of-all-available-formats",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},S=s("div",{class:"warning custom-block"},[s("p",{class:"custom-block-title"},"WARNING"),s("p",null,"Pay attention to capitalization")],-1),I=s("p",null,"time-select/time-formats",-1),N=s("h2",{id:"fixed-time-range",tabindex:"-1"},[t("Fixed time range "),s("a",{class:"header-anchor vp-link",href:"#fixed-time-range","aria-hidden":"true"},"#")],-1),j=s("p",null,"If start( end ) time is picked at first, then the status of end( start ) time's options will change accordingly.",-1),P=s("p",null,"time-select/time-range",-1),z=s("h2",{id:"api",tabindex:"-1"},[t("API "),s("a",{class:"header-anchor vp-link",href:"#api","aria-hidden":"true"},"#")],-1),U=s("h3",{id:"attributes",tabindex:"-1"},[t("Attributes "),s("a",{class:"header-anchor vp-link",href:"#attributes","aria-hidden":"true"},"#")],-1),V={class:"vp-table"},G=s("thead",null,[s("tr",null,[s("th",null,"Name"),s("th",null,"Description"),s("th",null,"Type"),s("th",null,"Default")])],-1),H=s("td",null,"model-value / v-model",-1),K=s("td",null,"binding value",-1),R=s("td",null,"\u2014",-1),M=s("td",null,"disabled",-1),O=s("td",null,"whether TimeSelect is disabled",-1),W=s("td",null,"false",-1),J=s("td",null,"editable",-1),L=s("td",null,"whether the input is editable",-1),Q=s("td",null,"true",-1),X=s("td",null,"clearable",-1),Y=s("td",null,"whether to show clear button",-1),Z=s("td",null,"true",-1),$=s("td",null,"size",-1),s2=s("td",null,"size of Input",-1),n2=s("td",null,"default",-1),t2=s("td",null,"placeholder",-1),a2=s("td",null,"placeholder in non-range mode",-1),e2=s("td",null,"\u2014",-1),l2=s("td",null,"name",-1),p2=s("td",null,[t("same as "),s("code",null,"name"),t(" in native input")],-1),o2=s("td",null,"\u2014",-1),c2=s("td",null,"effect",-1),i2=s("td",null,[t("Tooltip theme, built-in theme: "),s("code",null,"dark"),t(" / "),s("code",null,"light")],-1),E2=s("td",null,"light",-1),u2=s("td",null,"prefix-icon",-1),C2=s("td",null,"custom prefix icon component",-1),r2=s("td",null,"Clock",-1),d2=s("td",null,"clear-icon",-1),D2=s("td",null,"custom clear icon component",-1),k2=s("td",null,"CircleClose",-1),F2=s("td",null,"start",-1),m2=s("td",null,"start time",-1),_2=s("td",null,"09:00",-1),h2=s("td",null,"end",-1),A2=s("td",null,"end time",-1),g2=s("td",null,"18:00",-1),v2=s("td",null,"step",-1),f2=s("td",null,"time step",-1),b2=s("td",null,"00:30",-1),y2=s("td",null,"min-time",-1),x2=s("td",null,"minimum time, any time before this time will be disabled",-1),w2=s("td",null,"\u2014",-1),q2=s("td",null,"max-time",-1),B2=s("td",null,"maximum time, any time after this time will be disabled",-1),T2=s("td",null,"\u2014",-1),S2=s("td",null,"format",-1),I2=s("td",null,"set format of time",-1),N2={href:"https://day.js.org/docs/en/display/format#list-of-all-available-formats",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},j2=s("td",null,"HH:mm",-1),P2=s("h3",{id:"events",tabindex:"-1"},[t("Events "),s("a",{class:"header-anchor vp-link",href:"#events","aria-hidden":"true"},"#")],-1),z2={class:"vp-table"},U2=s("thead",null,[s("tr",null,[s("th",null,"Name"),s("th",null,"Description"),s("th",null,"Type")])],-1),V2=s("td",null,"change",-1),G2=s("td",null,"triggers when user confirms the value",-1),H2=s("td",null,"blur",-1),K2=s("td",null,"triggers when Input blurs",-1),R2=s("td",null,"focus",-1),M2=s("td",null,"triggers when Input focuses",-1),O2=s("h3",{id:"exposes",tabindex:"-1"},[t("Exposes "),s("a",{class:"header-anchor vp-link",href:"#exposes","aria-hidden":"true"},"#")],-1),W2={class:"vp-table"},J2=s("thead",null,[s("tr",null,[s("th",null,"Method"),s("th",null,"Description"),s("th",null,"Type")])],-1),L2=s("td",null,"focus",-1),Q2=s("td",null,"focus the Input component",-1),X2=s("td",null,"blur",-1),Y2=s("td",null,"blur the Input component",-1),Z2=s("h2",{id:"source",tabindex:"-1"},[t("Source "),s("a",{class:"header-anchor vp-link",href:"#source","aria-hidden":"true"},"#")],-1),$2={href:"https://github.com/Kele-Bingtang/kbt-ui/tree/dev/packages/components/time-select",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},ss={href:"https://github.com/Kele-Bingtang/kbt-ui/blob/dev/docs/zh-CN/component/time-select.md",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},ns=s("h2",{id:"contributors",tabindex:"-1"},[t("Contributors "),s("a",{class:"header-anchor vp-link",href:"#contributors","aria-hidden":"true"},"#")],-1),is='{"title":"TimeSelect","description":"","frontmatter":{"title":"TimeSelect","lang":"zh-CN"},"headers":[{"level":2,"title":"Fixed time picker","slug":"fixed-time-picker"},{"level":2,"title":"Time Formats","slug":"time-formats"},{"level":2,"title":"Fixed time range","slug":"fixed-time-range"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Attributes","slug":"attributes"},{"level":3,"title":"Events","slug":"events"},{"level":3,"title":"Exposes","slug":"exposes"},{"level":2,"title":"Source","slug":"source"},{"level":2,"title":"Contributors","slug":"contributors"}],"relativePath":"en-US-BP/component/time-select.md","lastUpdated":null}',ts={},Es=Object.assign(ts,{__name:"time-select",setup(as){const l={"../../examples/time-select/basic.vue":u,"../../examples/time-select/time-formats.vue":C,"../../examples/time-select/time-range.vue":r};return(es,ls)=>{const e=F,p=i("Demo"),a=i("api-typing"),E=d;return D(),k("div",null,[m,_,h,s("div",A,[g,s("p",null,[t("This component requires the "),v,t(" wrap when used in SSR (eg: "),s("a",f,[t("Nuxt"),n(e,{class:"link-icon"})]),t(") and SSG (eg: "),s("a",b,[t("VitePress"),n(e,{class:"link-icon"})]),t(").")])]),y,x,n(p,{demos:c(l),source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ek-time-select%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Ev-model%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Evalue%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20special-attr%22%3E%3Cspan%20class%3D%22token%20attr-name%22%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20value%20css%20language-css%22%3E%3Cspan%20class%3D%22token%20property%22%3Ewidth%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20240px%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Estart%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E08%3A30%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Estep%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E00%3A15%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Eend%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E18%3A30%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Eplaceholder%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3ESelect%20time%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20ref%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue'%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20value%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E''%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"time-select/basic","raw-source":"%3Ctemplate%3E%0A%20%20%3Ck-time-select%0A%20%20%20%20v-model%3D%22value%22%0A%20%20%20%20style%3D%22width%3A%20240px%22%0A%20%20%20%20start%3D%2208%3A30%22%0A%20%20%20%20step%3D%2200%3A15%22%0A%20%20%20%20end%3D%2218%3A30%22%0A%20%20%20%20placeholder%3D%22Select%20time%22%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%0Aconst%20value%20%3D%20ref('')%0A%3C%2Fscript%3E%0A",description:"%3Cp%3EUse%20%3Ccode%3Ek-time-select%3C%2Fcode%3E%20label%2C%20then%20assign%20start%20time%2C%20end%20time%20and%20time%20step%20with%20%3Ccode%3Estart%3C%2Fcode%3E%2C%20%3Ccode%3Eend%3C%2Fcode%3E%20and%20%3Ccode%3Estep%3C%2Fcode%3E.%3C%2Fp%3E%0A"},{default:o(()=>[w]),_:1},8,["demos"]),q,B,s("p",null,[t("Check the list "),s("a",T,[t("here"),n(e,{class:"link-icon"})]),t(" of all available formats of Day.js.")]),S,n(p,{demos:c(l),source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ek-time-select%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Ev-model%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Evalue%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20special-attr%22%3E%3Cspan%20class%3D%22token%20attr-name%22%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20value%20css%20language-css%22%3E%3Cspan%20class%3D%22token%20property%22%3Ewidth%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20240px%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Estart%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E00%3A00%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Estep%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E00%3A30%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Eend%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E23%3A59%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Eplaceholder%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3ESelect%20time%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Eformat%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ehh%3Amm%20A%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20ref%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue'%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20value%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E''%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"time-select/time-formats","raw-source":"%3Ctemplate%3E%0A%20%20%3Ck-time-select%0A%20%20%20%20v-model%3D%22value%22%0A%20%20%20%20style%3D%22width%3A%20240px%22%0A%20%20%20%20start%3D%2200%3A00%22%0A%20%20%20%20step%3D%2200%3A30%22%0A%20%20%20%20end%3D%2223%3A59%22%0A%20%20%20%20placeholder%3D%22Select%20time%22%0A%20%20%20%20format%3D%22hh%3Amm%20A%22%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%0Aconst%20value%20%3D%20ref('')%0A%3C%2Fscript%3E%0A",description:""},{default:o(()=>[I]),_:1},8,["demos"]),N,j,n(p,{demos:c(l),source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Edemo-time-range%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ek-time-select%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Ev-model%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EstartTime%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20special-attr%22%3E%3Cspan%20class%3D%22token%20attr-name%22%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20value%20css%20language-css%22%3E%3Cspan%20class%3D%22token%20property%22%3Ewidth%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20240px%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Amax-time%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EendTime%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Emr-4%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Eplaceholder%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EStart%20time%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Estart%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E08%3A30%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Estep%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E00%3A15%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Eend%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E18%3A30%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ek-time-select%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Ev-model%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EendTime%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20special-attr%22%3E%3Cspan%20class%3D%22token%20attr-name%22%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20value%20css%20language-css%22%3E%3Cspan%20class%3D%22token%20property%22%3Ewidth%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20240px%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Amin-time%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EstartTime%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Eplaceholder%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EEnd%20time%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Estart%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E08%3A30%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Estep%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E00%3A15%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Eend%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E18%3A30%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20ref%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue'%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20startTime%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E''%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20endTime%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E''%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"time-select/time-range","raw-source":"%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22demo-time-range%22%3E%0A%20%20%20%20%3Ck-time-select%0A%20%20%20%20%20%20v-model%3D%22startTime%22%0A%20%20%20%20%20%20style%3D%22width%3A%20240px%22%0A%20%20%20%20%20%20%3Amax-time%3D%22endTime%22%0A%20%20%20%20%20%20class%3D%22mr-4%22%0A%20%20%20%20%20%20placeholder%3D%22Start%20time%22%0A%20%20%20%20%20%20start%3D%2208%3A30%22%0A%20%20%20%20%20%20step%3D%2200%3A15%22%0A%20%20%20%20%20%20end%3D%2218%3A30%22%0A%20%20%20%20%2F%3E%0A%20%20%20%20%3Ck-time-select%0A%20%20%20%20%20%20v-model%3D%22endTime%22%0A%20%20%20%20%20%20style%3D%22width%3A%20240px%22%0A%20%20%20%20%20%20%3Amin-time%3D%22startTime%22%0A%20%20%20%20%20%20placeholder%3D%22End%20time%22%0A%20%20%20%20%20%20start%3D%2208%3A30%22%0A%20%20%20%20%20%20step%3D%2200%3A15%22%0A%20%20%20%20%20%20end%3D%2218%3A30%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%0Aconst%20startTime%20%3D%20ref('')%0Aconst%20endTime%20%3D%20ref('')%0A%3C%2Fscript%3E%0A",description:""},{default:o(()=>[P]),_:1},8,["demos"]),z,U,s("div",V,[s("table",null,[G,s("tbody",null,[s("tr",null,[H,K,s("td",null,[n(a,{type:"string",details:""})]),R]),s("tr",null,[M,O,s("td",null,[n(a,{type:"boolean",details:""})]),W]),s("tr",null,[J,L,s("td",null,[n(a,{type:"boolean",details:""})]),Q]),s("tr",null,[X,Y,s("td",null,[n(a,{type:"boolean",details:""})]),Z]),s("tr",null,[$,s2,s("td",null,[n(a,{type:"enum",details:"'large' | 'default' | 'small'"})]),n2]),s("tr",null,[t2,a2,s("td",null,[n(a,{type:"string",details:""})]),e2]),s("tr",null,[l2,p2,s("td",null,[n(a,{type:"string",details:""})]),o2]),s("tr",null,[c2,i2,s("td",null,[n(a,{type:"string",details:""}),t(" / "),n(a,{type:"enum",details:"'dark' | 'light'"})]),E2]),s("tr",null,[u2,C2,s("td",null,[n(a,{type:"string",details:""}),t(" / "),n(a,{type:"Component",details:""})]),r2]),s("tr",null,[d2,D2,s("td",null,[n(a,{type:"string",details:""}),t(" / "),n(a,{type:"Component",details:""})]),k2]),s("tr",null,[F2,m2,s("td",null,[n(a,{type:"string",details:""})]),_2]),s("tr",null,[h2,A2,s("td",null,[n(a,{type:"string",details:""})]),g2]),s("tr",null,[v2,f2,s("td",null,[n(a,{type:"string",details:""})]),b2]),s("tr",null,[y2,x2,s("td",null,[n(a,{type:"string",details:""})]),w2]),s("tr",null,[q2,B2,s("td",null,[n(a,{type:"string",details:""})]),T2]),s("tr",null,[S2,I2,s("td",null,[n(a,{type:"string",details:""}),t(" see "),s("a",N2,[t("formats"),n(e,{class:"link-icon"})])]),j2])])])]),P2,s("div",z2,[s("table",null,[U2,s("tbody",null,[s("tr",null,[V2,G2,s("td",null,[n(a,{type:"Function",details:"(value: string) => void"})])]),s("tr",null,[H2,K2,s("td",null,[n(a,{type:"Function",details:"(event: FocusEvent) => void"})])]),s("tr",null,[R2,M2,s("td",null,[n(a,{type:"Function",details:"(event: FocusEvent) => void"})])])])])]),O2,s("div",W2,[s("table",null,[J2,s("tbody",null,[s("tr",null,[L2,Q2,s("td",null,[n(a,{type:"Function",details:"() => void"})])]),s("tr",null,[X2,Y2,s("td",null,[n(a,{type:"Function",details:"() => void"})])])])])]),Z2,s("p",null,[s("a",$2,[t("Component"),n(e,{class:"link-icon"})]),t(" \u2022 "),s("a",ss,[t("Docs"),n(e,{class:"link-icon"})])]),ns,n(E,{id:"time-select"})])}}});export{is as __pageData,Es as default};
