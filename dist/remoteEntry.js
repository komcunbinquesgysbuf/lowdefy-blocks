var _at_komcunbinquesgysbuf_slash_lowdefy_dash_blocks;(()=>{"use strict";var e,r,t,n,o,a,i,l,u,s,f,d,c,h,p,v,b,g={},y={};function m(e){if(y[e])return y[e].exports;var r=y[e]={id:e,loaded:!1,exports:{}};return g[e].call(r.exports,r,r.exports,m),r.loaded=!0,r.exports}m.m=g,m.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return m.d(r,{a:r}),r},m.d=(e,r)=>{for(var t in r)m.o(r,t)&&!m.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},m.f={},m.e=e=>Promise.all(Object.keys(m.f).reduce(((r,t)=>(m.f[t](e,r),r)),[])),m.u=e=>e+".js",m.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),m.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="@komcunbinquesgysbuf/lowdefy-blocks:",m.l=(t,n,o,a)=>{if(e[t])e[t].push(n);else{var i,l;if(void 0!==o)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var f=u[s];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==r+o){i=f;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,m.nc&&i.setAttribute("nonce",m.nc),i.setAttribute("data-webpack",r+o),i.src=t),e[t]=[n];var d=(r,n)=>{i.onerror=i.onload=null,clearTimeout(c);var o=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},c=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),l&&document.head.appendChild(i)}},m.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},m.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{m.S={};var e={},r={};m.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];m.o(m.S,t)||(m.S[t]={});var a=m.S[t],i="@komcunbinquesgysbuf/lowdefy-blocks",l=(e,r,t,n)=>{var o=a[e]=a[e]||{},l=o[r];(!l||!l.loaded&&(!n!=!l.eager?n:i>l.from))&&(o[r]={get:t,from:i,eager:!!n})},u=[];switch(t){case"default":l("@lowdefy/block-tools","3.10.1",(()=>Promise.all([m.e(693),m.e(851)]).then((()=>()=>m(5693))))),l("react","17.0.1",(()=>m.e(741).then((()=>()=>m(4741)))))}return e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),(()=>{var e;m.g.importScripts&&(e=m.g.location+"");var r=m.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),m.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],a=(typeof o)[0];if(n>=r.length)return"u"==a;var i=r[n],l=(typeof i)[0];if(a!=l)return"o"==a&&"n"==l||"s"==l||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}},o=e=>{if(1===e.length)return"*";if(0 in e){var r="",t=e[0];r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,r+="u"==(typeof(l=e[a]))[0]?"-":(n>0?".":"")+(n=2,l);return r}var i=[];for(a=1;a<e.length;a++){var l=e[a];i.push(0===l?"not("+u()+")":1===l?"("+u()+" || "+u()+")":2===l?i.pop()+" "+i.pop():o(l))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},a=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var i=0,l=1,u=!0;;l++,i++){var s,f,d=l<e.length?(typeof e[l])[0]:"";if(i>=r.length||"o"==(f=(typeof(s=r[i]))[0]))return!u||("u"==d?l>n&&!o:""==d!=o);if("u"==f){if(!u||"u"!=d)return!1}else if(u)if(d==f)if(l<=n){if(s!=e[l])return!1}else{if(o?s>e[l]:s<e[l])return!1;s!=e[l]&&(u=!1)}else if("s"!=d&&"n"!=d){if(o||l<=n)return!1;u=!1,l--}else{if(l<=n||f<d!=o)return!1;u=!1}else"s"!=d&&"n"!=d&&(u=!1,l--)}}var c=[],h=c.pop.bind(c);for(i=1;i<e.length;i++){var p=e[i];c.push(1==p?h()|h():2==p?h()&h():p?a(p,r):!h())}return!!h()},i=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},l=(e,r,t)=>"Unsatisfied version "+r+" of shared singleton module "+e+" (required "+o(t)+")",u=(e,r,t,n)=>{var o=i(e,t);return a(n,o)||"undefined"!=typeof console&&console.warn&&console.warn(l(t,o,n)),f(e[t][o])},s=(e,r,t)=>{var o=e[r];return(r=Object.keys(o).reduce(((e,r)=>!a(t,r)||e&&!n(e,r)?e:r),0))&&o[r]},f=e=>(e.loaded=1,e.get()),c=(d=e=>function(r,t,n,o){var a=m.I(r);return a&&a.then?a.then(e.bind(e,r,m.S[r],t,n,o)):e(r,m.S[r],t,n,o)})(((e,r,t,n,o)=>r&&m.o(r,t)?u(r,0,t,n):o())),h=d(((e,r,t,n,o)=>{var a=r&&m.o(r,t)&&s(r,t,n);return a?f(a):o()})),p={},v={2851:()=>c("default","react",[2,17,0,0],(()=>m.e(741).then((()=>()=>m(4741))))),327:()=>h("default","@lowdefy/block-tools",[4,3,10,1],(()=>m.e(693).then((()=>()=>m(5693)))))},b={198:[327],851:[2851]},m.f.consumes=(e,r)=>{m.o(b,e)&&b[e].forEach((e=>{if(m.o(p,e))return r.push(p[e]);var t=r=>{p[e]=0,g[e]=t=>{delete y[e],t.exports=r()}},n=r=>{delete p[e],g[e]=t=>{throw delete y[e],r}};try{var o=v[e]();o.then?r.push(p[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))},(()=>{var e={424:0};m.f.j=(r,t)=>{var n=m.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(851!=r){var o=new Promise(((t,o)=>{n=e[r]=[t,o]}));t.push(n[2]=o);var a=m.p+m.u(r),i=new Error;m.l(a,(t=>{if(m.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}else e[r]=0};var r=(r,t)=>{for(var n,o,[a,i,l]=t,u=0,s=[];u<a.length;u++)o=a[u],m.o(e,o)&&e[o]&&s.push(e[o][0]),e[o]=0;for(n in i)m.o(i,n)&&(m.m[n]=i[n]);for(l&&l(m),r&&r(t);s.length;)s.shift()()},t=self.webpackChunk_komcunbinquesgysbuf_lowdefy_blocks=self.webpackChunk_komcunbinquesgysbuf_lowdefy_blocks||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var w={};(()=>{var e=w,r={"./FileReader":()=>Promise.all([m.e(851),m.e(198)]).then((()=>()=>m(3198)))},t=(e,t)=>(m.R=t,t=m.o(r,e)?r[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),m.R=void 0,t),n=(e,r)=>{if(m.S){var t=m.S.default,n="default";if(t&&t!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return m.S[n]=e,m.I(n,r)}};m.d(e,{get:()=>t,init:()=>n})})(),_at_komcunbinquesgysbuf_slash_lowdefy_dash_blocks=w})();