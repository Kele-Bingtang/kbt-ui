import{o as l,c as o,b as a,d as n,a as t,e,_ as i}from"./app.2f331f2f.js";const p=e(`<h1 id="internationalization" tabindex="-1">Internationalization <a class="header-anchor vp-link" href="#internationalization" aria-hidden="true">#</a></h1><p>Kbt UI components are using English <strong>by default</strong>, if you wish you use other languages, you can get you answer by keep reading.</p><h2 id="global-configuration" tabindex="-1">Global configuration <a class="header-anchor vp-link" href="#global-configuration" aria-hidden="true">#</a></h2><p>Kbt UI provides global configurations</p><div class="language-typescript"><pre><code><span class="token keyword">import</span> KbtUI <span class="token keyword">from</span> <span class="token string">&#39;kbt-ui&#39;</span>
<span class="token keyword">import</span> zhCn <span class="token keyword">from</span> <span class="token string">&#39;kbt-ui/dist/locale/zh-cn.mjs&#39;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>KbtUI<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  locale<span class="token operator">:</span> zhCn<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="configprovider" tabindex="-1">ConfigProvider <a class="header-anchor vp-link" href="#configprovider" aria-hidden="true">#</a></h2><p>Kbt UI also provides a Vue component <a href="/zh-CN/component/config-provider.html" class="vp-link">ConfigProvider</a> for globally configuring locale and other settings.</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>k-config-provider</span> <span class="token attr-name">:locale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>locale<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>app</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>k-config-provider</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> KConfigProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;kbt-ui&#39;</span>

  <span class="token keyword">import</span> zhCn <span class="token keyword">from</span> <span class="token string">&#39;kbt-ui/dist/locale/zh-cn.mjs&#39;</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      KConfigProvider<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">locale</span><span class="token operator">:</span> zhCn<span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="date-and-time-localization" tabindex="-1">Date and time localization <a class="header-anchor vp-link" href="#date-and-time-localization" aria-hidden="true">#</a></h2>`,9),c={href:"https://day.js.org/docs/en/i18n/i18n",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},r=a("code",null,"DatePicker",-1),u=e(`<div class="language-"><pre><code>import &#39;dayjs/locale/zh-cn&#39;
</code></pre></div><h2 id="cdn-usage" tabindex="-1">CDN Usage <a class="header-anchor vp-link" href="#cdn-usage" aria-hidden="true">#</a></h2><p>If you are using Kbt UI via CDN, then you need to do this, let&#39;s again take unpkg as an example</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//unpkg.com/kbt-ui/dist/locale/zh-cn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>KbtUI<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">locale</span><span class="token operator">:</span> KbtUILocaleZhCn<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>Full documentation refer to: <a href="/zh-CN/component/config-provider.html" class="vp-link">ConfigProvider</a></p>`,5),k={href:"https://github.com/kbt-ui/kbt-ui/tree/dev/packages/locale/lang",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},d=e('<ul class="language-list"><li>Simplified Chinese (zh-cn)</li><li>American English (en)</li><li>Azerbaijani (az)</li><li>German (de)</li><li>Portuguese (pt)</li><li>Spanish (es)</li><li>Danish (da)</li><li>French (fr)</li><li>Norwegian (nb-NO)</li><li>Traditional Chinese (zh-tw)</li><li>Italian (it)</li><li>Korean (ko)</li><li>Japanese (ja)</li><li>Dutch (nl)</li><li>Vietnamese (vi)</li><li>Russian (ru)</li><li>Turkish (tr)</li><li>Brazilian Portuguese (pt-br)</li><li>Farsi (fa)</li><li>Thai (th)</li><li>Indonesian (id)</li><li>Bulgarian (bg)</li><li>Pashto (pa)</li><li>Polish (pl)</li><li>Finnish (fi)</li><li>Swedish (sv)</li><li>Greek (el)</li><li>Slovak (sk)</li><li>Catalunya (ca)</li><li>Czech (cs)</li><li>Ukrainian (uk)</li><li>Turkmen (tk)</li><li>Tamil (ta)</li><li>Latvian (lv)</li><li>Afrikaans (af)</li><li>Estonian (et)</li><li>Slovenian (sl)</li><li>Arabic (ar)</li><li>Hebrew (he)</li><li>Lithuanian (lt)</li><li>Mongolian (mn)</li><li>Kazakh (kk)</li><li>Hungarian (hu)</li><li>Romanian (ro)</li><li>Kurdish (ku)</li><li>Kurdish (ckb)</li><li>Uighur (ug-cn)</li><li>Khmer (km)</li><li>Serbian (sr)</li><li>Basque (eu)</li><li>Kyrgyz (ky)</li><li>Armenian (hy-am)</li><li>Croatian (hr)</li><li>Esperanto (eo)</li><li>Bengali (bn)</li></ul>',1),g={href:"https://github.com/kbt-ui/kbt-ui/pulls",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/kbt-ui/kbt-ui/tree/dev/packages/locale/lang",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},y='{"title":"Internationalization","description":"","frontmatter":{"title":"Internationalization","lang":"zh-CN"},"headers":[{"level":2,"title":"Global configuration","slug":"global-configuration"},{"level":2,"title":"ConfigProvider","slug":"configprovider"},{"level":2,"title":"Date and time localization","slug":"date-and-time-localization"},{"level":2,"title":"CDN Usage","slug":"cdn-usage"}],"relativePath":"en-US-BP/guide/i18n.md","lastUpdated":null}',_={},z=Object.assign(_,{__name:"i18n",setup(m){return(f,v)=>{const s=i;return l(),o("div",null,[p,a("p",null,[n("We use "),a("a",c,[n("Day.js"),t(s,{class:"link-icon"})]),n(" library to manage date and time in components like "),r,n(". It is important to set a proper locale in Day.js to make the internationalization fully works. You have to import Day.js's locale config separately.")]),u,a("p",null,[a("a",k,[n("Supported Language List"),t(s,{class:"link-icon"})])]),d,a("p",null,[n("If you need any other languages, "),a("a",g,[n("PR"),t(s,{class:"link-icon"})]),n(" is always welcomed, you only need to add a language file at "),a("a",h,[n("here"),t(s,{class:"link-icon"})]),n(".")])])}}});export{y as __pageData,z as default};
