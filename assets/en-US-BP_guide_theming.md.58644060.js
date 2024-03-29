import{o,c as p,b as n,d as s,a as t,e,_ as c}from"./app.2f331f2f.js";const l=n("h1",{id:"custom-theme",tabindex:"-1"},[s("Custom theme "),n("a",{class:"header-anchor vp-link",href:"#custom-theme","aria-hidden":"true"},"#")],-1),i=n("p",null,"Kbt UI uses BEM-styled CSS so that you can override styles easily. But if you need to replace styles at a large scale, e.g. change the theme color from blue to orange or green, maybe overriding them one by one is not a good idea.",-1),u=n("p",null,"We provide four ways to change the style variables.",-1),r=n("h2",{id:"change-theme-color",tabindex:"-1"},[s("Change theme color "),n("a",{class:"header-anchor vp-link",href:"#change-theme-color","aria-hidden":"true"},"#")],-1),k=n("p",null,"These are examples about custom theme.",-1),d={href:"https://github.com/kbt-ui/kbt-ui-vite-starter",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/kbt-ui/unplugin-element-plus",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},h=n("h3",{id:"by-scss-variables",tabindex:"-1"},[s("By SCSS variables "),n("a",{class:"header-anchor vp-link",href:"#by-scss-variables","aria-hidden":"true"},"#")],-1),g=n("code",null,"theme-chalk",-1),b={href:"https://github.com/kbt-ui/kbt-ui/blob/dev/packages/theme-chalk/src/common/var.scss",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"packages/theme-chalk/src/common/var.scss",-1),_={class:"warning custom-block"},f=n("p",{class:"custom-block-title"},"WARNING",-1),y={href:"https://sass-lang.com/documentation/values/maps",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"@use",-1),S=n("code",null,"@use",-1),C=n("code",null,"@import",-1),I={href:"https://css-tricks.com/introducing-sass-modules/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},x=n("p",null,[s("For example, We use "),n("code",null,"$colors"),s(" as a map to preserve different types of colors.")],-1),T=n("p",null,[n("code",null,"$notification"),s(" is a map where all variables of the "),n("code",null,"notification"),s(" component at.")],-1),q={href:"https://github.com/kbt-ui/kbt-ui/blob/dev/packages/theme-chalk/src/common/var.scss",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},A=e(`<div class="language-scss"><pre><code><span class="token property"><span class="token variable">$colors</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$colors</span></span><span class="token punctuation">:</span> map.<span class="token function">deep-merge</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span>
    <span class="token string">&#39;white&#39;</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">,</span>
    <span class="token string">&#39;black&#39;</span><span class="token punctuation">:</span> #000000<span class="token punctuation">,</span>
    <span class="token string">&#39;primary&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token string">&#39;base&#39;</span><span class="token punctuation">:</span> #409eff<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&#39;success&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token string">&#39;base&#39;</span><span class="token punctuation">:</span> #67c23a<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&#39;warning&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token string">&#39;base&#39;</span><span class="token punctuation">:</span> #e6a23c<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&#39;danger&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token string">&#39;base&#39;</span><span class="token punctuation">:</span> #f56c6c<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&#39;error&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token string">&#39;base&#39;</span><span class="token punctuation">:</span> #f56c6c<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&#39;info&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token string">&#39;base&#39;</span><span class="token punctuation">:</span> #909399<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token variable">$colors</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="how-to-override-it" tabindex="-1">How to override it? <a class="header-anchor vp-link" href="#how-to-override-it" aria-hidden="true">#</a></h3><p>If your project also uses SCSS, you can directly change Kbt UI style variables. Create a new style file, e.g. <code>styles/element/index.scss</code>:</p>`,3),U={class:"warning custom-block"},V=n("p",{class:"custom-block-title"},"WARNING",-1),N=n("p",null,[s("You should use "),n("code",null,"@use 'xxx.scss' as *;"),s(" instead of "),n("code",null,"@import 'xxx.scss';"),s(".")],-1),B=n("p",null,[s("Because the sass team said they will remove "),n("code",null,"@import"),s(" eventually.")],-1),P={href:"https://sass-lang.com/documentation/at-rules/use",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},K={href:"https://sass-lang.com/documentation/at-rules/import",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},E=e(`<div class="language-scss"><pre><code><span class="token comment">// styles/element/index.scss</span>
<span class="token comment">/* just override what you need */</span>
<span class="token keyword">@forward</span> <span class="token string">&#39;kbt-ui/theme-chalk/src/common/var.scss&#39;</span> <span class="token module-modifier keyword">with</span> <span class="token punctuation">(</span>
  <span class="token property"><span class="token variable">$colors</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
    <span class="token string">&#39;primary&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token string">&#39;base&#39;</span><span class="token punctuation">:</span> green<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// If you just import on demand, you can ignore the following content.</span>
<span class="token comment">// if you want to import all styles:</span>
<span class="token comment">// @use &quot;kbt-ui/theme-chalk/src/index.scss&quot; as *;</span>
</code></pre></div><p>Then in the entry file of your project, import this style file instead of Element&#39;s built CSS:</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Import <code>element/index.scss</code> before scss of kbt-ui to avoid the problem of sass mixed variables, because we need generate light-x by your custom variables.</p></div><p>Create a <code>element/index.scss</code> to combine your variables and variables of kbt-ui. (If you import them in ts, they will not be combined.)</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>In addition, you should distinguish your scss from the element variable scss. If they are mixed together, each hot update of <code>kbt-ui</code> needs to compile a large number of scss files, resulting in slow speed.</p></div><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;./styles/element/index.scss&#39;</span>
<span class="token keyword">import</span> KbtUI <span class="token keyword">from</span> <span class="token string">&#39;kbt-ui&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>KbtUI<span class="token punctuation">)</span>
</code></pre></div><p>If you are using vite, and you want to custom theme when importing on demand.</p><p>Use <code>scss.additionalData</code> to compile variables with scss of every component.</p><div class="language-ts"><pre><code><span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span>
<span class="token comment">// You can also use unplugin-vue-components</span>
<span class="token comment">// import Components from &#39;unplugin-vue-components/vite&#39;</span>
<span class="token comment">// import { KbtUIResolver } from &#39;unplugin-vue-components/resolvers&#39;</span>

<span class="token comment">// or use unplugin-element-plus</span>
<span class="token keyword">import</span> KbtUI <span class="token keyword">from</span> <span class="token string">&#39;unplugin-element-plus/vite&#39;</span>

<span class="token comment">// vite.config.ts</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  resolve<span class="token operator">:</span> <span class="token punctuation">{</span>
    alias<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;~/&#39;</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  css<span class="token operator">:</span> <span class="token punctuation">{</span>
    preprocessorOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
      scss<span class="token operator">:</span> <span class="token punctuation">{</span>
        additionalData<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">@use &quot;~/styles/element/index.scss&quot; as *;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// use unplugin-vue-components</span>
    <span class="token comment">// Components({</span>
    <span class="token comment">//   resolvers: [</span>
    <span class="token comment">//     KbtUIResolver({</span>
    <span class="token comment">//       importStyle: &quot;sass&quot;,</span>
    <span class="token comment">//       // directives: true,</span>
    <span class="token comment">//       // version: &quot;2.1.5&quot;,</span>
    <span class="token comment">//     }),</span>
    <span class="token comment">//   ],</span>
    <span class="token comment">// }),</span>
    <span class="token comment">// or use unplugin-element-plus</span>
    <span class="token function">KbtUI</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      useSource<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>If you are using webpack, and you want to custom theme when importing on demand.</p><div class="language-ts"><pre><code><span class="token comment">// webpack.config.ts</span>
<span class="token comment">// use unplugin-element-plus</span>

<span class="token keyword">import</span> KbtUI <span class="token keyword">from</span> <span class="token string">&#39;unplugin-element-plus/webpack&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  css<span class="token operator">:</span> <span class="token punctuation">{</span>
    loaderOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
      scss<span class="token operator">:</span> <span class="token punctuation">{</span>
        additionalData<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">@use &quot;~/styles/element/index.scss&quot; as *;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">KbtUI</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      useSource<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="by-css-variable" tabindex="-1">By CSS Variable <a class="header-anchor vp-link" href="#by-css-variable" aria-hidden="true">#</a></h3><p>CSS Variables is a very useful feature, already supported by almost all browsers. (IE: Wait?)</p>`,13),W={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},j=e(`<p>We have used css variables to reconstruct the style system of almost all components.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>It is compatible with the SCSS variable system. We use the function of SCSS to automatically generate css variables for use.</p></div><p>This means you can dynamically change individual variables inside the component to better customize it without having to modify scss and recompile it.</p><blockquote><p>In the future, the css variable names and role documentation for each component will be written to each component.</p></blockquote><p>Like this:</p><div class="language-css"><pre><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token property">--k-color-primary</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>If you just want to customize a particular component, just add inline styles for certain components individually.</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>k-tag</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">--k-tag-bg-color</span><span class="token punctuation">:</span> red</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>Tag<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>k-tag</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>For performance reasons, it is more recommended to custom css variables under a class rather than the global <code>:root</code>.</p><div class="language-css"><pre><code><span class="token selector">.custom-class</span> <span class="token punctuation">{</span>
  <span class="token property">--k-tag-bg-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>If you want to control css var by script, try this:</p><div class="language-ts"><pre><code><span class="token comment">// document.documentElement is global</span>
<span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement
<span class="token comment">// const el = document.getElementById(&#39;xxx&#39;)</span>

<span class="token comment">// get css var</span>
<span class="token function">getComputedStyle</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getPropertyValue</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">--k-color-primary</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>

<span class="token comment">// set css var</span>
el<span class="token punctuation">.</span>style<span class="token punctuation">[</span><span class="token string">&#39;--k-color-primary&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;red&#39;</span>
</code></pre></div>`,12),D={href:"https://vueuse.org/core/usecssvar/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},F='{"title":"Theming","description":"","frontmatter":{"title":"Theming","lang":"zh-CN"},"headers":[{"level":2,"title":"Change theme color","slug":"change-theme-color"},{"level":3,"title":"By SCSS variables","slug":"by-scss-variables"},{"level":3,"title":"How to override it?","slug":"how-to-override-it"},{"level":3,"title":"By CSS Variable","slug":"by-css-variable"}],"relativePath":"en-US-BP/guide/theming.md","lastUpdated":null}',R={},M=Object.assign(R,{__name:"theming",setup($){return(z,O)=>{const a=c;return o(),p("div",null,[l,i,u,r,k,n("ul",null,[n("li",null,[s("Full import: "),n("a",d,[s("kbt-ui-vite-starter"),t(a,{class:"link-icon"})])]),n("li",null,[s("On demand: "),n("a",m,[s("unplugin-element-plus/examples/vite"),t(a,{class:"link-icon"})])])]),h,n("p",null,[g,s(" is written in SCSS. You can find SCSS variables in "),n("a",b,[v,t(a,{class:"link-icon"})]),s(".")]),n("div",_,[f,n("p",null,[s("We use sass modules ("),n("a",y,[s("sass:map"),t(a,{class:"link-icon"})]),s("...) and "),w,s(" to refactor all SCSS variables. And by using "),S,s(" to all SCSS variables, it solves the duplicate output problem caused by "),C,s(".")]),n("blockquote",null,[n("p",null,[n("a",I,[s("Introducing Sass Modules | CSS-TRICKS"),t(a,{class:"link-icon"})])])]),x,T,n("p",null,[s("In the future, we will write documentation for variables that can be customized for each component. You can also directly checkout the source "),n("a",q,[s("var.scss"),t(a,{class:"link-icon"})]),s(".")])]),A,n("div",U,[V,N,B,n("blockquote",null,[n("p",null,[n("a",P,[s("Sass: @use"),t(a,{class:"link-icon"})]),s(" vs "),n("a",K,[s("Sass: @import"),t(a,{class:"link-icon"})])])])]),E,n("blockquote",null,[n("p",null,[s("Learn more from "),n("a",W,[s("Using CSS custom properties (variables) | MDN"),t(a,{class:"link-icon"})])])]),j,n("p",null,[s("If you want a more elegant way, check this out. "),n("a",D,[s("useCssVar | VueUse"),t(a,{class:"link-icon"})])])])}}});export{F as __pageData,M as default};
