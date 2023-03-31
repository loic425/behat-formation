(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function o(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(a){if(a.ep)return;a.ep=!0;const r=o(a);fetch(a.href,r)}})();function Ls(n,s){const o=Object.create(null),l=n.split(",");for(let a=0;a<l.length;a++)o[l[a]]=!0;return s?a=>!!o[a.toLowerCase()]:a=>!!o[a]}function on(n){if(de(n)){const s={};for(let o=0;o<n.length;o++){const l=n[o],a=Ue(l)?vh(l):on(l);if(a)for(const r in a)s[r]=a[r]}return s}else{if(Ue(n))return n;if(Ne(n))return n}}const kh=/;(?![^(]*\))/g,_h=/:([^]+)/,Dh=/\/\*.*?\*\//gs;function vh(n){const s={};return n.replace(Dh,"").split(kh).forEach(o=>{if(o){const l=o.split(_h);l.length>1&&(s[l[0].trim()]=l[1].trim())}}),s}function ze(n){let s="";if(Ue(n))s=n;else if(de(n))for(let o=0;o<n.length;o++){const l=ze(n[o]);l&&(s+=l+" ")}else if(Ne(n))for(const o in n)n[o]&&(s+=o+" ");return s.trim()}function ne(n){if(!n)return null;let{class:s,style:o}=n;return s&&!Ue(s)&&(n.class=ze(s)),o&&(n.style=on(o)),n}const xh="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",wh="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",sd=Ls(xh),Eh=Ls(wh),Ih="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$h=Ls(Ih);function od(n){return!!n||n===""}const ao=n=>Ue(n)?n:n==null?"":de(n)||Ne(n)&&(n.toString===rd||!fe(n.toString))?JSON.stringify(n,td,2):String(n),td=(n,s)=>s&&s.__v_isRef?td(n,s.value):Xs(s)?{[`Map(${s.size})`]:[...s.entries()].reduce((o,[l,a])=>(o[`${l} =>`]=a,o),{})}:ad(s)?{[`Set(${s.size})`]:[...s.values()]}:Ne(s)&&!de(s)&&!id(s)?String(s):s,Re=Object.freeze({}),xo=Object.freeze([]),An=()=>{},ld=()=>!1,Sh=/^on[^a-z]/,Ot=n=>Sh.test(n),gl=n=>n.startsWith("onUpdate:"),He=Object.assign,Lr=(n,s)=>{const o=n.indexOf(s);o>-1&&n.splice(o,1)},Fh=Object.prototype.hasOwnProperty,xe=(n,s)=>Fh.call(n,s),de=Array.isArray,Xs=n=>Nt(n)==="[object Map]",ad=n=>Nt(n)==="[object Set]",Ph=n=>Nt(n)==="[object RegExp]",fe=n=>typeof n=="function",Ue=n=>typeof n=="string",Wr=n=>typeof n=="symbol",Ne=n=>n!==null&&typeof n=="object",Rr=n=>Ne(n)&&fe(n.then)&&fe(n.catch),rd=Object.prototype.toString,Nt=n=>rd.call(n),qr=n=>Nt(n).slice(8,-1),id=n=>Nt(n)==="[object Object]",Vr=n=>Ue(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,rl=Ls(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Th=Ls("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Wl=n=>{const s=Object.create(null);return o=>s[o]||(s[o]=n(o))},Mh=/-(\w)/g,Xn=Wl(n=>n.replace(Mh,(s,o)=>o?o.toUpperCase():"")),Oh=/\B([A-Z])/g,ds=Wl(n=>n.replace(Oh,"-$1").toLowerCase()),ro=Wl(n=>n.charAt(0).toUpperCase()+n.slice(1)),js=Wl(n=>n?`on${ro(n)}`:""),gt=(n,s)=>!Object.is(n,s),Ds=(n,s)=>{for(let o=0;o<n.length;o++)n[o](s)},Bl=(n,s,o)=>{Object.defineProperty(n,s,{configurable:!0,enumerable:!1,value:o})},Ra=n=>{const s=parseFloat(n);return isNaN(s)?n:s},Nh=n=>{const s=Ue(n)?Number(n):NaN;return isNaN(s)?n:s};let Wi;const cd=()=>Wi||(Wi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Al(n,...s){console.warn(`[Vue warn] ${n}`,...s)}let vn;class pd{constructor(s=!1){this.detached=s,this._active=!0,this.effects=[],this.cleanups=[],this.parent=vn,!s&&vn&&(this.index=(vn.scopes||(vn.scopes=[])).push(this)-1)}get active(){return this._active}run(s){if(this._active){const o=vn;try{return vn=this,s()}finally{vn=o}}else Al("cannot run an inactive effect scope.")}on(){vn=this}off(){vn=this.parent}stop(s){if(this._active){let o,l;for(o=0,l=this.effects.length;o<l;o++)this.effects[o].stop();for(o=0,l=this.cleanups.length;o<l;o++)this.cleanups[o]();if(this.scopes)for(o=0,l=this.scopes.length;o<l;o++)this.scopes[o].stop(!0);if(!this.detached&&this.parent&&!s){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Lh(n){return new pd(n)}function Wh(n,s=vn){s&&s.active&&s.effects.push(n)}function Ur(){return vn}function dd(n){vn?vn.cleanups.push(n):Al("onScopeDispose() is called when there is no active effect scope to be associated with.")}const jr=n=>{const s=new Set(n);return s.w=0,s.n=0,s},ud=n=>(n.w&Ms)>0,yd=n=>(n.n&Ms)>0,Rh=({deps:n})=>{if(n.length)for(let s=0;s<n.length;s++)n[s].w|=Ms},qh=n=>{const{deps:s}=n;if(s.length){let o=0;for(let l=0;l<s.length;l++){const a=s[l];ud(a)&&!yd(a)?a.delete(n):s[o++]=a,a.w&=~Ms,a.n&=~Ms}s.length=o}},Cl=new WeakMap;let Xo=0,Ms=1;const qa=30;let yn;const eo=Symbol("iterate"),Va=Symbol("Map key iterate");class Hr{constructor(s,o=null,l){this.fn=s,this.scheduler=o,this.active=!0,this.deps=[],this.parent=void 0,Wh(this,l)}run(){if(!this.active)return this.fn();let s=yn,o=Es;for(;s;){if(s===this)return;s=s.parent}try{return this.parent=yn,yn=this,Es=!0,Ms=1<<++Xo,Xo<=qa?Rh(this):Ri(this),this.fn()}finally{Xo<=qa&&qh(this),Ms=1<<--Xo,yn=this.parent,Es=o,this.parent=void 0,this.deferStop&&this.stop()}}stop(){yn===this?this.deferStop=!0:this.active&&(Ri(this),this.onStop&&this.onStop(),this.active=!1)}}function Ri(n){const{deps:s}=n;if(s.length){for(let o=0;o<s.length;o++)s[o].delete(n);s.length=0}}let Es=!0;const hd=[];function co(){hd.push(Es),Es=!1}function po(){const n=hd.pop();Es=n===void 0?!0:n}function bn(n,s,o){if(Es&&yn){let l=Cl.get(n);l||Cl.set(n,l=new Map);let a=l.get(o);a||l.set(o,a=jr()),fd(a,{effect:yn,target:n,type:s,key:o})}}function fd(n,s){let o=!1;Xo<=qa?yd(n)||(n.n|=Ms,o=!ud(n)):o=!n.has(yn),o&&(n.add(yn),yn.deps.push(n),yn.onTrack&&yn.onTrack(Object.assign({effect:yn},s)))}function us(n,s,o,l,a,r){const i=Cl.get(n);if(!i)return;let c=[];if(s==="clear")c=[...i.values()];else if(o==="length"&&de(n)){const d=Number(l);i.forEach((u,y)=>{(y==="length"||y>=d)&&c.push(u)})}else switch(o!==void 0&&c.push(i.get(o)),s){case"add":de(n)?Vr(o)&&c.push(i.get("length")):(c.push(i.get(eo)),Xs(n)&&c.push(i.get(Va)));break;case"delete":de(n)||(c.push(i.get(eo)),Xs(n)&&c.push(i.get(Va)));break;case"set":Xs(n)&&c.push(i.get(eo));break}const p={target:n,type:s,key:o,newValue:l,oldValue:a,oldTarget:r};if(c.length===1)c[0]&&Ua(c[0],p);else{const d=[];for(const u of c)u&&d.push(...u);Ua(jr(d),p)}}function Ua(n,s){const o=de(n)?n:[...n];for(const l of o)l.computed&&qi(l,s);for(const l of o)l.computed||qi(l,s)}function qi(n,s){(n!==yn||n.allowRecurse)&&(n.onTrigger&&n.onTrigger(He({effect:n},s)),n.scheduler?n.scheduler():n.run())}function Vh(n,s){var o;return(o=Cl.get(n))===null||o===void 0?void 0:o.get(s)}const Uh=Ls("__proto__,__v_isRef,__isVue"),md=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Wr)),jh=Rl(),Hh=Rl(!1,!0),Gh=Rl(!0),Kh=Rl(!0,!0),Vi=zh();function zh(){const n={};return["includes","indexOf","lastIndexOf"].forEach(s=>{n[s]=function(...o){const l=me(this);for(let r=0,i=this.length;r<i;r++)bn(l,"get",r+"");const a=l[s](...o);return a===-1||a===!1?l[s](...o.map(me)):a}}),["push","pop","shift","unshift","splice"].forEach(s=>{n[s]=function(...o){co();const l=me(this)[s].apply(this,o);return po(),l}}),n}function Yh(n){const s=me(this);return bn(s,"has",n),s.hasOwnProperty(n)}function Rl(n=!1,s=!1){return function(l,a,r){if(a==="__v_isReactive")return!n;if(a==="__v_isReadonly")return n;if(a==="__v_isShallow")return s;if(a==="__v_raw"&&r===(n?s?Dd:_d:s?kd:bd).get(l))return l;const i=de(l);if(!n){if(i&&xe(Vi,a))return Reflect.get(Vi,a,r);if(a==="hasOwnProperty")return Yh}const c=Reflect.get(l,a,r);return(Wr(a)?md.has(a):Uh(a))||(n||bn(l,"get",a),s)?c:Fe(c)?i&&Vr(a)?c:c.value:Ne(c)?n?Zn(c):je(c):c}}const Zh=gd(),Qh=gd(!0);function gd(n=!1){return function(o,l,a,r){let i=o[l];if(Os(i)&&Fe(i)&&!Fe(a))return!1;if(!n&&(!bl(a)&&!Os(a)&&(i=me(i),a=me(a)),!de(o)&&Fe(i)&&!Fe(a)))return i.value=a,!0;const c=de(o)&&Vr(l)?Number(l)<o.length:xe(o,l),p=Reflect.set(o,l,a,r);return o===me(r)&&(c?gt(a,i)&&us(o,"set",l,a,i):us(o,"add",l,a)),p}}function Jh(n,s){const o=xe(n,s),l=n[s],a=Reflect.deleteProperty(n,s);return a&&o&&us(n,"delete",s,void 0,l),a}function Xh(n,s){const o=Reflect.has(n,s);return(!Wr(s)||!md.has(s))&&bn(n,"has",s),o}function ef(n){return bn(n,"iterate",de(n)?"length":eo),Reflect.ownKeys(n)}const Bd={get:jh,set:Zh,deleteProperty:Jh,has:Xh,ownKeys:ef},Ad={get:Gh,set(n,s){return Al(`Set operation on key "${String(s)}" failed: target is readonly.`,n),!0},deleteProperty(n,s){return Al(`Delete operation on key "${String(s)}" failed: target is readonly.`,n),!0}},nf=He({},Bd,{get:Hh,set:Qh}),sf=He({},Ad,{get:Kh}),Gr=n=>n,ql=n=>Reflect.getPrototypeOf(n);function zt(n,s,o=!1,l=!1){n=n.__v_raw;const a=me(n),r=me(s);o||(s!==r&&bn(a,"get",s),bn(a,"get",r));const{has:i}=ql(a),c=l?Gr:o?Kr:Bt;if(i.call(a,s))return c(n.get(s));if(i.call(a,r))return c(n.get(r));n!==a&&n.get(s)}function Yt(n,s=!1){const o=this.__v_raw,l=me(o),a=me(n);return s||(n!==a&&bn(l,"has",n),bn(l,"has",a)),n===a?o.has(n):o.has(n)||o.has(a)}function Zt(n,s=!1){return n=n.__v_raw,!s&&bn(me(n),"iterate",eo),Reflect.get(n,"size",n)}function Ui(n){n=me(n);const s=me(this);return ql(s).has.call(s,n)||(s.add(n),us(s,"add",n,n)),this}function ji(n,s){s=me(s);const o=me(this),{has:l,get:a}=ql(o);let r=l.call(o,n);r?Cd(o,l,n):(n=me(n),r=l.call(o,n));const i=a.call(o,n);return o.set(n,s),r?gt(s,i)&&us(o,"set",n,s,i):us(o,"add",n,s),this}function Hi(n){const s=me(this),{has:o,get:l}=ql(s);let a=o.call(s,n);a?Cd(s,o,n):(n=me(n),a=o.call(s,n));const r=l?l.call(s,n):void 0,i=s.delete(n);return a&&us(s,"delete",n,void 0,r),i}function Gi(){const n=me(this),s=n.size!==0,o=Xs(n)?new Map(n):new Set(n),l=n.clear();return s&&us(n,"clear",void 0,void 0,o),l}function Qt(n,s){return function(l,a){const r=this,i=r.__v_raw,c=me(i),p=s?Gr:n?Kr:Bt;return!n&&bn(c,"iterate",eo),i.forEach((d,u)=>l.call(a,p(d),p(u),r))}}function Jt(n,s,o){return function(...l){const a=this.__v_raw,r=me(a),i=Xs(r),c=n==="entries"||n===Symbol.iterator&&i,p=n==="keys"&&i,d=a[n](...l),u=o?Gr:s?Kr:Bt;return!s&&bn(r,"iterate",p?Va:eo),{next(){const{value:y,done:h}=d.next();return h?{value:y,done:h}:{value:c?[u(y[0]),u(y[1])]:u(y),done:h}},[Symbol.iterator](){return this}}}}function gs(n){return function(...s){{const o=s[0]?`on key "${s[0]}" `:"";console.warn(`${ro(n)} operation ${o}failed: target is readonly.`,me(this))}return n==="delete"?!1:this}}function of(){const n={get(r){return zt(this,r)},get size(){return Zt(this)},has:Yt,add:Ui,set:ji,delete:Hi,clear:Gi,forEach:Qt(!1,!1)},s={get(r){return zt(this,r,!1,!0)},get size(){return Zt(this)},has:Yt,add:Ui,set:ji,delete:Hi,clear:Gi,forEach:Qt(!1,!0)},o={get(r){return zt(this,r,!0)},get size(){return Zt(this,!0)},has(r){return Yt.call(this,r,!0)},add:gs("add"),set:gs("set"),delete:gs("delete"),clear:gs("clear"),forEach:Qt(!0,!1)},l={get(r){return zt(this,r,!0,!0)},get size(){return Zt(this,!0)},has(r){return Yt.call(this,r,!0)},add:gs("add"),set:gs("set"),delete:gs("delete"),clear:gs("clear"),forEach:Qt(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Jt(r,!1,!1),o[r]=Jt(r,!0,!1),s[r]=Jt(r,!1,!0),l[r]=Jt(r,!0,!0)}),[n,o,s,l]}const[tf,lf,af,rf]=of();function Vl(n,s){const o=s?n?rf:af:n?lf:tf;return(l,a,r)=>a==="__v_isReactive"?!n:a==="__v_isReadonly"?n:a==="__v_raw"?l:Reflect.get(xe(o,a)&&a in l?o:l,a,r)}const cf={get:Vl(!1,!1)},pf={get:Vl(!1,!0)},df={get:Vl(!0,!1)},uf={get:Vl(!0,!0)};function Cd(n,s,o){const l=me(o);if(l!==o&&s.call(n,l)){const a=qr(n);console.warn(`Reactive ${a} contains both the raw and reactive versions of the same object${a==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const bd=new WeakMap,kd=new WeakMap,_d=new WeakMap,Dd=new WeakMap;function yf(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hf(n){return n.__v_skip||!Object.isExtensible(n)?0:yf(qr(n))}function je(n){return Os(n)?n:Ul(n,!1,Bd,cf,bd)}function ff(n){return Ul(n,!1,nf,pf,kd)}function Zn(n){return Ul(n,!0,Ad,df,_d)}function Do(n){return Ul(n,!0,sf,uf,Dd)}function Ul(n,s,o,l,a){if(!Ne(n))return console.warn(`value cannot be made reactive: ${String(n)}`),n;if(n.__v_raw&&!(s&&n.__v_isReactive))return n;const r=a.get(n);if(r)return r;const i=hf(n);if(i===0)return n;const c=new Proxy(n,i===2?l:o);return a.set(n,c),c}function no(n){return Os(n)?no(n.__v_raw):!!(n&&n.__v_isReactive)}function Os(n){return!!(n&&n.__v_isReadonly)}function bl(n){return!!(n&&n.__v_isShallow)}function kl(n){return no(n)||Os(n)}function me(n){const s=n&&n.__v_raw;return s?me(s):n}function jl(n){return Bl(n,"__v_skip",!0),n}const Bt=n=>Ne(n)?je(n):n,Kr=n=>Ne(n)?Zn(n):n;function zr(n){Es&&yn&&(n=me(n),fd(n.dep||(n.dep=jr()),{target:n,type:"get",key:"value"}))}function Yr(n,s){n=me(n);const o=n.dep;o&&Ua(o,{target:n,type:"set",key:"value",newValue:s})}function Fe(n){return!!(n&&n.__v_isRef===!0)}function Z(n){return vd(n,!1)}function es(n){return vd(n,!0)}function vd(n,s){return Fe(n)?n:new mf(n,s)}class mf{constructor(s,o){this.__v_isShallow=o,this.dep=void 0,this.__v_isRef=!0,this._rawValue=o?s:me(s),this._value=o?s:Bt(s)}get value(){return zr(this),this._value}set value(s){const o=this.__v_isShallow||bl(s)||Os(s);s=o?s:me(s),gt(s,this._rawValue)&&(this._rawValue=s,this._value=o?s:Bt(s),Yr(this,s))}}function v(n){return Fe(n)?n.value:n}const gf={get:(n,s,o)=>v(Reflect.get(n,s,o)),set:(n,s,o,l)=>{const a=n[s];return Fe(a)&&!Fe(o)?(a.value=o,!0):Reflect.set(n,s,o,l)}};function xd(n){return no(n)?n:new Proxy(n,gf)}class Bf{constructor(s){this.dep=void 0,this.__v_isRef=!0;const{get:o,set:l}=s(()=>zr(this),()=>Yr(this));this._get=o,this._set=l}get value(){return this._get()}set value(s){this._set(s)}}function wd(n){return new Bf(n)}function Af(n){kl(n)||console.warn("toRefs() expects a reactive object but received a plain one.");const s=de(n)?new Array(n.length):{};for(const o in n)s[o]=bf(n,o);return s}class Cf{constructor(s,o,l){this._object=s,this._key=o,this._defaultValue=l,this.__v_isRef=!0}get value(){const s=this._object[this._key];return s===void 0?this._defaultValue:s}set value(s){this._object[this._key]=s}get dep(){return Vh(me(this._object),this._key)}}function bf(n,s,o){const l=n[s];return Fe(l)?l:new Cf(n,s,o)}var Ed;class kf{constructor(s,o,l,a){this._setter=o,this.dep=void 0,this.__v_isRef=!0,this[Ed]=!1,this._dirty=!0,this.effect=new Hr(s,()=>{this._dirty||(this._dirty=!0,Yr(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=l}get value(){const s=me(this);return zr(s),(s._dirty||!s._cacheable)&&(s._dirty=!1,s._value=s.effect.run()),s._value}set value(s){this._setter(s)}}Ed="__v_isReadonly";function _f(n,s,o=!1){let l,a;const r=fe(n);r?(l=n,a=()=>{console.warn("Write operation failed: computed value is readonly")}):(l=n.get,a=n.set);const i=new kf(l,a,r||!a,o);return s&&!o&&(i.effect.onTrack=s.onTrack,i.effect.onTrigger=s.onTrigger),i}const so=[];function il(n){so.push(n)}function cl(){so.pop()}function N(n,...s){co();const o=so.length?so[so.length-1].component:null,l=o&&o.appContext.config.warnHandler,a=Df();if(l)ps(l,o,11,[n+s.join(""),o&&o.proxy,a.map(({vnode:r})=>`at <${na(o,r.type)}>`).join(`
`),a]);else{const r=[`[Vue warn]: ${n}`,...s];a.length&&r.push(`
`,...vf(a)),console.warn(...r)}po()}function Df(){let n=so[so.length-1];if(!n)return[];const s=[];for(;n;){const o=s[0];o&&o.vnode===n?o.recurseCount++:s.push({vnode:n,recurseCount:0});const l=n.component&&n.component.parent;n=l&&l.vnode}return s}function vf(n){const s=[];return n.forEach((o,l)=>{s.push(...l===0?[]:[`
`],...xf(o))}),s}function xf({vnode:n,recurseCount:s}){const o=s>0?`... (${s} recursive calls)`:"",l=n.component?n.component.parent==null:!1,a=` at <${na(n.component,n.type,l)}`,r=">"+o;return n.props?[a,...wf(n.props),r]:[a+r]}function wf(n){const s=[],o=Object.keys(n);return o.slice(0,3).forEach(l=>{s.push(...Id(l,n[l]))}),o.length>3&&s.push(" ..."),s}function Id(n,s,o){return Ue(s)?(s=JSON.stringify(s),o?s:[`${n}=${s}`]):typeof s=="number"||typeof s=="boolean"||s==null?o?s:[`${n}=${s}`]:Fe(s)?(s=Id(n,me(s.value),!0),o?s:[`${n}=Ref<`,s,">"]):fe(s)?[`${n}=fn${s.name?`<${s.name}>`:""}`]:(s=me(s),o?s:[`${n}=`,s])}function Ef(n,s){n!==void 0&&(typeof n!="number"?N(`${s} is not a valid number - got ${JSON.stringify(n)}.`):isNaN(n)&&N(`${s} is NaN - the duration expression might be incorrect.`))}const Zr={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function ps(n,s,o,l){let a;try{a=l?n(...l):n()}catch(r){Hl(r,s,o)}return a}function Mn(n,s,o,l){if(fe(n)){const r=ps(n,s,o,l);return r&&Rr(r)&&r.catch(i=>{Hl(i,s,o)}),r}const a=[];for(let r=0;r<n.length;r++)a.push(Mn(n[r],s,o,l));return a}function Hl(n,s,o,l=!0){const a=s?s.vnode:null;if(s){let r=s.parent;const i=s.proxy,c=Zr[o];for(;r;){const d=r.ec;if(d){for(let u=0;u<d.length;u++)if(d[u](n,i,c)===!1)return}r=r.parent}const p=s.appContext.config.errorHandler;if(p){ps(p,null,10,[n,i,c]);return}}If(n,o,a,l)}function If(n,s,o,l=!0){{const a=Zr[s];if(o&&il(o),N(`Unhandled error${a?` during execution of ${a}`:""}`),o&&cl(),l)throw n;console.error(n)}}let At=!1,ja=!1;const an=[];let zn=0;const wo=[];let Kn=null,bs=0;const $d=Promise.resolve();let Qr=null;const $f=100;function sn(n){const s=Qr||$d;return n?s.then(this?n.bind(this):n):s}function Sf(n){let s=zn+1,o=an.length;for(;s<o;){const l=s+o>>>1;Ct(an[l])<n?s=l+1:o=l}return s}function Gl(n){(!an.length||!an.includes(n,At&&n.allowRecurse?zn+1:zn))&&(n.id==null?an.push(n):an.splice(Sf(n.id),0,n),Sd())}function Sd(){!At&&!ja&&(ja=!0,Qr=$d.then(Td))}function Ff(n){const s=an.indexOf(n);s>zn&&an.splice(s,1)}function Fd(n){de(n)?wo.push(...n):(!Kn||!Kn.includes(n,n.allowRecurse?bs+1:bs))&&wo.push(n),Sd()}function Ki(n,s=At?zn+1:0){for(n=n||new Map;s<an.length;s++){const o=an[s];if(o&&o.pre){if(Jr(n,o))continue;an.splice(s,1),s--,o()}}}function Pd(n){if(wo.length){const s=[...new Set(wo)];if(wo.length=0,Kn){Kn.push(...s);return}for(Kn=s,n=n||new Map,Kn.sort((o,l)=>Ct(o)-Ct(l)),bs=0;bs<Kn.length;bs++)Jr(n,Kn[bs])||Kn[bs]();Kn=null,bs=0}}const Ct=n=>n.id==null?1/0:n.id,Pf=(n,s)=>{const o=Ct(n)-Ct(s);if(o===0){if(n.pre&&!s.pre)return-1;if(s.pre&&!n.pre)return 1}return o};function Td(n){ja=!1,At=!0,n=n||new Map,an.sort(Pf);const s=o=>Jr(n,o);try{for(zn=0;zn<an.length;zn++){const o=an[zn];if(o&&o.active!==!1){if(s(o))continue;ps(o,null,14)}}}finally{zn=0,an.length=0,Pd(n),At=!1,Qr=null,(an.length||wo.length)&&Td(n)}}function Jr(n,s){if(!n.has(s))n.set(s,1);else{const o=n.get(s);if(o>$f){const l=s.ownerInstance,a=l&&Dt(l.type);return N(`Maximum recursive updates exceeded${a?` in component <${a}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else n.set(s,o+1)}}let Is=!1;const bo=new Set;cd().__VUE_HMR_RUNTIME__={createRecord:ia(Md),rerender:ia(Of),reload:ia(Nf)};const io=new Map;function Tf(n){const s=n.type.__hmrId;let o=io.get(s);o||(Md(s,n.type),o=io.get(s)),o.instances.add(n)}function Mf(n){io.get(n.type.__hmrId).instances.delete(n)}function Md(n,s){return io.has(n)?!1:(io.set(n,{initialDef:tt(s),instances:new Set}),!0)}function tt(n){return hu(n)?n.__vccOpts:n}function Of(n,s){const o=io.get(n);o&&(o.initialDef.render=s,[...o.instances].forEach(l=>{s&&(l.render=s,tt(l.type).render=s),l.renderCache=[],Is=!0,l.update(),Is=!1}))}function Nf(n,s){const o=io.get(n);if(!o)return;s=tt(s),zi(o.initialDef,s);const l=[...o.instances];for(const a of l){const r=tt(a.type);bo.has(r)||(r!==o.initialDef&&zi(r,s),bo.add(r)),a.appContext.optionsCache.delete(a.type),a.ceReload?(bo.add(r),a.ceReload(s.styles),bo.delete(r)):a.parent?Gl(a.parent.update):a.appContext.reload?a.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Fd(()=>{for(const a of l)bo.delete(tt(a.type))})}function zi(n,s){He(n,s);for(const o in n)o!=="__file"&&!(o in s)&&delete n[o]}function ia(n){return(s,o)=>{try{return n(s,o)}catch(l){console.error(l),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let Yn,et=[],Ha=!1;function Lt(n,...s){Yn?Yn.emit(n,...s):Ha||et.push({event:n,args:s})}function Od(n,s){var o,l;Yn=n,Yn?(Yn.enabled=!0,et.forEach(({event:a,args:r})=>Yn.emit(a,...r)),et=[]):typeof window<"u"&&window.HTMLElement&&!(!((l=(o=window.navigator)===null||o===void 0?void 0:o.userAgent)===null||l===void 0)&&l.includes("jsdom"))?((s.__VUE_DEVTOOLS_HOOK_REPLAY__=s.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{Od(r,s)}),setTimeout(()=>{Yn||(s.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Ha=!0,et=[])},3e3)):(Ha=!0,et=[])}function Lf(n,s){Lt("app:init",n,s,{Fragment:Te,Text:Vt,Comment:Xe,Static:pl})}function Wf(n){Lt("app:unmount",n)}const Ga=Xr("component:added"),Nd=Xr("component:updated"),Rf=Xr("component:removed"),qf=n=>{Yn&&typeof Yn.cleanupBuffer=="function"&&!Yn.cleanupBuffer(n)&&Rf(n)};function Xr(n){return s=>{Lt(n,s.appContext.app,s.uid,s.parent?s.parent.uid:void 0,s)}}const Vf=Ld("perf:start"),Uf=Ld("perf:end");function Ld(n){return(s,o,l)=>{Lt(n,s.appContext.app,s.uid,s,o,l)}}function jf(n,s,o){Lt("component:emit",n.appContext.app,n,s,o)}function Hf(n,s,...o){if(n.isUnmounted)return;const l=n.vnode.props||Re;{const{emitsOptions:u,propsOptions:[y]}=n;if(u)if(!(s in u))(!y||!(js(s)in y))&&N(`Component emitted event "${s}" but it is neither declared in the emits option nor as an "${js(s)}" prop.`);else{const h=u[s];fe(h)&&(h(...o)||N(`Invalid event arguments: event validation failed for event "${s}".`))}}let a=o;const r=s.startsWith("update:"),i=r&&s.slice(7);if(i&&i in l){const u=`${i==="modelValue"?"model":i}Modifiers`,{number:y,trim:h}=l[u]||Re;h&&(a=o.map(m=>Ue(m)?m.trim():m)),y&&(a=o.map(Ra))}jf(n,s,a);{const u=s.toLowerCase();u!==s&&l[js(u)]&&N(`Event "${u}" is emitted in component ${na(n,n.type)} but the handler is registered for "${s}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${ds(s)}" instead of "${s}".`)}let c,p=l[c=js(s)]||l[c=js(Xn(s))];!p&&r&&(p=l[c=js(ds(s))]),p&&Mn(p,n,6,a);const d=l[c+"Once"];if(d){if(!n.emitted)n.emitted={};else if(n.emitted[c])return;n.emitted[c]=!0,Mn(d,n,6,a)}}function Wd(n,s,o=!1){const l=s.emitsCache,a=l.get(n);if(a!==void 0)return a;const r=n.emits;let i={},c=!1;if(!fe(n)){const p=d=>{const u=Wd(d,s,!0);u&&(c=!0,He(i,u))};!o&&s.mixins.length&&s.mixins.forEach(p),n.extends&&p(n.extends),n.mixins&&n.mixins.forEach(p)}return!r&&!c?(Ne(n)&&l.set(n,null),null):(de(r)?r.forEach(p=>i[p]=null):He(i,r),Ne(n)&&l.set(n,i),i)}function Kl(n,s){return!n||!Ot(s)?!1:(s=s.slice(2).replace(/Once$/,""),xe(n,s[0].toLowerCase()+s.slice(1))||xe(n,ds(s))||xe(n,s))}let Je=null,zl=null;function _l(n){const s=Je;return Je=n,zl=n&&n.type.__scopeId||null,s}function vx(n){zl=n}function xx(){zl=null}function x(n,s=Je,o){if(!s||n._n)return n;const l=(...a)=>{l._d&&ic(-1);const r=_l(s);let i;try{i=n(...a)}finally{_l(r),l._d&&ic(1)}return Nd(s),i};return l._n=!0,l._c=!0,l._d=!0,l}let Ka=!1;function Dl(){Ka=!0}function ca(n){const{type:s,vnode:o,proxy:l,withProxy:a,props:r,propsOptions:[i],slots:c,attrs:p,emit:d,render:u,renderCache:y,data:h,setupState:m,ctx:f,inheritAttrs:B}=n;let A,D;const b=_l(n);Ka=!1;try{if(o.shapeFlag&4){const P=a||l;A=qn(u.call(P,P,y,r,m,h,f)),D=p}else{const P=s;p===r&&Dl(),A=qn(P.length>1?P(r,{get attrs(){return Dl(),p},slots:c,emit:d}):P(r,null)),D=s.props?p:Kf(p)}}catch(P){at.length=0,Hl(P,n,1),A=I(Xe)}let _=A,w;if(A.patchFlag>0&&A.patchFlag&2048&&([_,w]=Gf(A)),D&&B!==!1){const P=Object.keys(D),{shapeFlag:W}=_;if(P.length){if(W&7)i&&P.some(gl)&&(D=zf(D,i)),_=Un(_,D);else if(!Ka&&_.type!==Xe){const K=Object.keys(p),F=[],H=[];for(let le=0,ye=K.length;le<ye;le++){const Q=K[le];Ot(Q)?gl(Q)||F.push(Q[2].toLowerCase()+Q.slice(3)):H.push(Q)}H.length&&N(`Extraneous non-props attributes (${H.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),F.length&&N(`Extraneous non-emits event listeners (${F.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return o.dirs&&(Yi(_)||N("Runtime directive used on component with non-element root node. The directives will not function as intended."),_=Un(_),_.dirs=_.dirs?_.dirs.concat(o.dirs):o.dirs),o.transition&&(Yi(_)||N("Component inside <Transition> renders non-element root node that cannot be animated."),_.transition=o.transition),w?w(_):A=_,_l(b),A}const Gf=n=>{const s=n.children,o=n.dynamicChildren,l=Rd(s);if(!l)return[n,void 0];const a=s.indexOf(l),r=o?o.indexOf(l):-1,i=c=>{s[a]=c,o&&(r>-1?o[r]=c:c.patchFlag>0&&(n.dynamicChildren=[...o,c]))};return[qn(l),i]};function Rd(n){let s;for(let o=0;o<n.length;o++){const l=n[o];if(hs(l)){if(l.type!==Xe||l.children==="v-if"){if(s)return;s=l}}else return}return s}const Kf=n=>{let s;for(const o in n)(o==="class"||o==="style"||Ot(o))&&((s||(s={}))[o]=n[o]);return s},zf=(n,s)=>{const o={};for(const l in n)(!gl(l)||!(l.slice(9)in s))&&(o[l]=n[l]);return o},Yi=n=>n.shapeFlag&7||n.type===Xe;function Yf(n,s,o){const{props:l,children:a,component:r}=n,{props:i,children:c,patchFlag:p}=s,d=r.emitsOptions;if((a||c)&&Is||s.dirs||s.transition)return!0;if(o&&p>=0){if(p&1024)return!0;if(p&16)return l?Zi(l,i,d):!!i;if(p&8){const u=s.dynamicProps;for(let y=0;y<u.length;y++){const h=u[y];if(i[h]!==l[h]&&!Kl(d,h))return!0}}}else return(a||c)&&(!c||!c.$stable)?!0:l===i?!1:l?i?Zi(l,i,d):!0:!!i;return!1}function Zi(n,s,o){const l=Object.keys(s);if(l.length!==Object.keys(n).length)return!0;for(let a=0;a<l.length;a++){const r=l[a];if(s[r]!==n[r]&&!Kl(o,r))return!0}return!1}function Zf({vnode:n,parent:s},o){for(;s&&s.subTree===n;)(n=s.vnode).el=o,s=s.parent}const qd=n=>n.__isSuspense;function Qf(n,s){s&&s.pendingBranch?de(n)?s.effects.push(...n):s.effects.push(n):Fd(n)}function xn(n,s){if(!Ge)N("provide() can only be used inside setup().");else{let o=Ge.provides;const l=Ge.parent&&Ge.parent.provides;l===o&&(o=Ge.provides=Object.create(l)),o[n]=s}}function T(n,s,o=!1){const l=Ge||Je;if(l){const a=l.parent==null?l.vnode.appContext&&l.vnode.appContext.provides:l.parent.provides;if(a&&n in a)return a[n];if(arguments.length>1)return o&&fe(s)?s.call(l.proxy):s;N(`injection "${String(n)}" not found.`)}else N("inject() can only be used inside setup() or functional components.")}function uo(n,s){return ei(n,null,s)}const Xt={};function Ce(n,s,o){return fe(s)||N("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),ei(n,s,o)}function ei(n,s,{immediate:o,deep:l,flush:a,onTrack:r,onTrigger:i}=Re){s||(o!==void 0&&N('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),l!==void 0&&N('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const c=w=>{N("Invalid watch source: ",w,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},p=Ur()===(Ge==null?void 0:Ge.scope)?Ge:null;let d,u=!1,y=!1;if(Fe(n)?(d=()=>n.value,u=bl(n)):no(n)?(d=()=>n,l=!0):de(n)?(y=!0,u=n.some(w=>no(w)||bl(w)),d=()=>n.map(w=>{if(Fe(w))return w.value;if(no(w))return Zs(w);if(fe(w))return ps(w,p,2);c(w)})):fe(n)?s?d=()=>ps(n,p,2):d=()=>{if(!(p&&p.isUnmounted))return h&&h(),Mn(n,p,3,[m])}:(d=An,c(n)),s&&l){const w=d;d=()=>Zs(w())}let h,m=w=>{h=b.onStop=()=>{ps(w,p,4)}},f;if(_t)if(m=An,s?o&&Mn(s,p,3,[d(),y?[]:void 0,m]):d(),a==="sync"){const w=og();f=w.__watcherHandles||(w.__watcherHandles=[])}else return An;let B=y?new Array(n.length).fill(Xt):Xt;const A=()=>{if(b.active)if(s){const w=b.run();(l||u||(y?w.some((P,W)=>gt(P,B[W])):gt(w,B)))&&(h&&h(),Mn(s,p,3,[w,B===Xt?void 0:y&&B[0]===Xt?[]:B,m]),B=w)}else b.run()};A.allowRecurse=!!s;let D;a==="sync"?D=A:a==="post"?D=()=>nn(A,p&&p.suspense):(A.pre=!0,p&&(A.id=p.uid),D=()=>Gl(A));const b=new Hr(d,D);b.onTrack=r,b.onTrigger=i,s?o?A():B=b.run():a==="post"?nn(b.run.bind(b),p&&p.suspense):b.run();const _=()=>{b.stop(),p&&p.scope&&Lr(p.scope.effects,b)};return f&&f.push(_),_}function Jf(n,s,o){const l=this.proxy,a=Ue(n)?n.includes(".")?Vd(l,n):()=>l[n]:n.bind(l,l);let r;fe(s)?r=s:(r=s.handler,o=s);const i=Ge;To(this);const c=ei(a,r.bind(l),o);return i?To(i):to(),c}function Vd(n,s){const o=s.split(".");return()=>{let l=n;for(let a=0;a<o.length&&l;a++)l=l[o[a]];return l}}function Zs(n,s){if(!Ne(n)||n.__v_skip||(s=s||new Set,s.has(n)))return n;if(s.add(n),Fe(n))Zs(n.value,s);else if(de(n))for(let o=0;o<n.length;o++)Zs(n[o],s);else if(ad(n)||Xs(n))n.forEach(o=>{Zs(o,s)});else if(id(n))for(const o in n)Zs(n[o],s);return n}function Ud(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return yo(()=>{n.isMounted=!0}),Rt(()=>{n.isUnmounting=!0}),n}const Sn=[Function,Array],Xf={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Sn,onEnter:Sn,onAfterEnter:Sn,onEnterCancelled:Sn,onBeforeLeave:Sn,onLeave:Sn,onAfterLeave:Sn,onLeaveCancelled:Sn,onBeforeAppear:Sn,onAppear:Sn,onAfterAppear:Sn,onAppearCancelled:Sn},setup(n,{slots:s}){const o=$n(),l=Ud();let a;return()=>{const r=s.default&&ni(s.default(),!0);if(!r||!r.length)return;let i=r[0];if(r.length>1){let B=!1;for(const A of r)if(A.type!==Xe){if(B){N("<transition> can only be used on a single element or component. Use <transition-group> for lists.");break}i=A,B=!0}}const c=me(n),{mode:p}=c;if(p&&p!=="in-out"&&p!=="out-in"&&p!=="default"&&N(`invalid <transition> mode: ${p}`),l.isLeaving)return pa(i);const d=Qi(i);if(!d)return pa(i);const u=bt(d,c,l,o);Po(d,u);const y=o.subTree,h=y&&Qi(y);let m=!1;const{getTransitionKey:f}=d.type;if(f){const B=f();a===void 0?a=B:B!==a&&(a=B,m=!0)}if(h&&h.type!==Xe&&(!xs(d,h)||m)){const B=bt(h,c,l,o);if(Po(h,B),p==="out-in")return l.isLeaving=!0,B.afterLeave=()=>{l.isLeaving=!1,o.update.active!==!1&&o.update()},pa(i);p==="in-out"&&d.type!==Xe&&(B.delayLeave=(A,D,b)=>{const _=jd(l,h);_[String(h.key)]=h,A._leaveCb=()=>{D(),A._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=b})}return i}}},em=Xf;function jd(n,s){const{leavingVNodes:o}=n;let l=o.get(s.type);return l||(l=Object.create(null),o.set(s.type,l)),l}function bt(n,s,o,l){const{appear:a,mode:r,persisted:i=!1,onBeforeEnter:c,onEnter:p,onAfterEnter:d,onEnterCancelled:u,onBeforeLeave:y,onLeave:h,onAfterLeave:m,onLeaveCancelled:f,onBeforeAppear:B,onAppear:A,onAfterAppear:D,onAppearCancelled:b}=s,_=String(n.key),w=jd(o,n),P=(F,H)=>{F&&Mn(F,l,9,H)},W=(F,H)=>{const le=H[1];P(F,H),de(F)?F.every(ye=>ye.length<=1)&&le():F.length<=1&&le()},K={mode:r,persisted:i,beforeEnter(F){let H=c;if(!o.isMounted)if(a)H=B||c;else return;F._leaveCb&&F._leaveCb(!0);const le=w[_];le&&xs(n,le)&&le.el._leaveCb&&le.el._leaveCb(),P(H,[F])},enter(F){let H=p,le=d,ye=u;if(!o.isMounted)if(a)H=A||p,le=D||d,ye=b||u;else return;let Q=!1;const _e=F._enterCb=Pe=>{Q||(Q=!0,Pe?P(ye,[F]):P(le,[F]),K.delayedLeave&&K.delayedLeave(),F._enterCb=void 0)};H?W(H,[F,_e]):_e()},leave(F,H){const le=String(n.key);if(F._enterCb&&F._enterCb(!0),o.isUnmounting)return H();P(y,[F]);let ye=!1;const Q=F._leaveCb=_e=>{ye||(ye=!0,H(),_e?P(f,[F]):P(m,[F]),F._leaveCb=void 0,w[le]===n&&delete w[le])};w[le]=n,h?W(h,[F,Q]):Q()},clone(F){return bt(F,s,o,l)}};return K}function pa(n){if(Wt(n))return n=Un(n),n.children=null,n}function Qi(n){return Wt(n)?n.children?n.children[0]:void 0:n}function Po(n,s){n.shapeFlag&6&&n.component?Po(n.component.subTree,s):n.shapeFlag&128?(n.ssContent.transition=s.clone(n.ssContent),n.ssFallback.transition=s.clone(n.ssFallback)):n.transition=s}function ni(n,s=!1,o){let l=[],a=0;for(let r=0;r<n.length;r++){let i=n[r];const c=o==null?i.key:String(o)+String(i.key!=null?i.key:r);i.type===Te?(i.patchFlag&128&&a++,l=l.concat(ni(i.children,s,c))):(s||i.type!==Xe)&&l.push(c!=null?Un(i,{key:c}):i)}if(a>1)for(let r=0;r<l.length;r++)l[r].patchFlag=-2;return l}function Me(n){return fe(n)?{setup:n,name:n.name}:n}const Eo=n=>!!n.type.__asyncLoader,Wt=n=>n.type.__isKeepAlive,nm={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(n,{slots:s}){const o=$n(),l=o.ctx;if(!l.renderer)return()=>{const b=s.default&&s.default();return b&&b.length===1?b[0]:b};const a=new Map,r=new Set;let i=null;o.__v_cache=a;const c=o.suspense,{renderer:{p,m:d,um:u,o:{createElement:y}}}=l,h=y("div");l.activate=(b,_,w,P,W)=>{const K=b.component;d(b,_,w,0,c),p(K.vnode,b,_,w,K,c,P,b.slotScopeIds,W),nn(()=>{K.isDeactivated=!1,K.a&&Ds(K.a);const F=b.props&&b.props.onVnodeMounted;F&&Fn(F,K.parent,b)},c),Ga(K)},l.deactivate=b=>{const _=b.component;d(b,h,null,1,c),nn(()=>{_.da&&Ds(_.da);const w=b.props&&b.props.onVnodeUnmounted;w&&Fn(w,_.parent,b),_.isDeactivated=!0},c),Ga(_)};function m(b){da(b),u(b,o,c,!0)}function f(b){a.forEach((_,w)=>{const P=Dt(_.type);P&&(!b||!b(P))&&B(w)})}function B(b){const _=a.get(b);!i||!xs(_,i)?m(_):i&&da(i),a.delete(b),r.delete(b)}Ce(()=>[n.include,n.exclude],([b,_])=>{b&&f(w=>nt(b,w)),_&&f(w=>!nt(_,w))},{flush:"post",deep:!0});let A=null;const D=()=>{A!=null&&a.set(A,ua(o.subTree))};return yo(D),Zl(D),Rt(()=>{a.forEach(b=>{const{subTree:_,suspense:w}=o,P=ua(_);if(b.type===P.type&&b.key===P.key){da(P);const W=P.component.da;W&&nn(W,w);return}m(b)})}),()=>{if(A=null,!s.default)return null;const b=s.default(),_=b[0];if(b.length>1)return N("KeepAlive should contain exactly one component child."),i=null,b;if(!hs(_)||!(_.shapeFlag&4)&&!(_.shapeFlag&128))return i=null,_;let w=ua(_);const P=w.type,W=Dt(Eo(w)?w.type.__asyncResolved||{}:P),{include:K,exclude:F,max:H}=n;if(K&&(!W||!nt(K,W))||F&&W&&nt(F,W))return i=w,_;const le=w.key==null?P:w.key,ye=a.get(le);return w.el&&(w=Un(w),_.shapeFlag&128&&(_.ssContent=w)),A=le,ye?(w.el=ye.el,w.component=ye.component,w.transition&&Po(w,w.transition),w.shapeFlag|=512,r.delete(le),r.add(le)):(r.add(le),H&&r.size>parseInt(H,10)&&B(r.values().next().value)),w.shapeFlag|=256,i=w,qd(_.type)?_:w}}},Hd=nm;function nt(n,s){return de(n)?n.some(o=>nt(o,s)):Ue(n)?n.split(",").includes(s):Ph(n)?n.test(s):!1}function Gd(n,s){zd(n,"a",s)}function Kd(n,s){zd(n,"da",s)}function zd(n,s,o=Ge){const l=n.__wdc||(n.__wdc=()=>{let a=o;for(;a;){if(a.isDeactivated)return;a=a.parent}return n()});if(Yl(s,l,o),o){let a=o.parent;for(;a&&a.parent;)Wt(a.parent.vnode)&&sm(l,s,o,a),a=a.parent}}function sm(n,s,o,l){const a=Yl(s,n,l,!0);Ql(()=>{Lr(l[s],a)},o)}function da(n){n.shapeFlag&=-257,n.shapeFlag&=-513}function ua(n){return n.shapeFlag&128?n.ssContent:n}function Yl(n,s,o=Ge,l=!1){if(o){const a=o[n]||(o[n]=[]),r=s.__weh||(s.__weh=(...i)=>{if(o.isUnmounted)return;co(),To(o);const c=Mn(s,o,n,i);return to(),po(),c});return l?a.unshift(r):a.push(r),r}else{const a=js(Zr[n].replace(/ hook$/,""));N(`${a} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const fs=n=>(s,o=Ge)=>(!_t||n==="sp")&&Yl(n,(...l)=>s(...l),o),om=fs("bm"),yo=fs("m"),tm=fs("bu"),Zl=fs("u"),Rt=fs("bum"),Ql=fs("um"),lm=fs("sp"),am=fs("rtg"),rm=fs("rtc");function im(n,s=Ge){Yl("ec",n,s)}function Yd(n){Th(n)&&N("Do not use built-in directive ids as custom directive id: "+n)}function Jl(n,s){const o=Je;if(o===null)return N("withDirectives can only be used inside render functions."),n;const l=ea(o)||o.proxy,a=n.dirs||(n.dirs=[]);for(let r=0;r<s.length;r++){let[i,c,p,d=Re]=s[r];i&&(fe(i)&&(i={mounted:i,updated:i}),i.deep&&Zs(c),a.push({dir:i,instance:l,value:c,oldValue:void 0,arg:p,modifiers:d}))}return n}function Ws(n,s,o,l){const a=n.dirs,r=s&&s.dirs;for(let i=0;i<a.length;i++){const c=a[i];r&&(c.oldValue=r[i].value);let p=c.dir[l];p&&(co(),Mn(p,o,8,[n.el,c,n,s]),po())}}const za="components",cm="directives";function vl(n,s){return Zd(za,n,!0,s)||n}const pm=Symbol();function Ji(n){return Zd(cm,n)}function Zd(n,s,o=!0,l=!1){const a=Je||Ge;if(a){const r=a.type;if(n===za){const c=Dt(r,!1);if(c&&(c===s||c===Xn(s)||c===ro(Xn(s))))return r}const i=Xi(a[n]||r[n],s)||Xi(a.appContext[n],s);if(!i&&l)return r;if(o&&!i){const c=n===za?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";N(`Failed to resolve ${n.slice(0,-1)}: ${s}${c}`)}return i}else N(`resolve${ro(n.slice(0,-1))} can only be used in render() or setup().`)}function Xi(n,s){return n&&(n[s]||n[Xn(s)]||n[ro(Xn(s))])}function qt(n,s,o,l){let a;const r=o&&o[l];if(de(n)||Ue(n)){a=new Array(n.length);for(let i=0,c=n.length;i<c;i++)a[i]=s(n[i],i,void 0,r&&r[i])}else if(typeof n=="number"){Number.isInteger(n)||N(`The v-for range expect an integer value but got ${n}.`),a=new Array(n);for(let i=0;i<n;i++)a[i]=s(i+1,i,void 0,r&&r[i])}else if(Ne(n))if(n[Symbol.iterator])a=Array.from(n,(i,c)=>s(i,c,void 0,r&&r[c]));else{const i=Object.keys(n);a=new Array(i.length);for(let c=0,p=i.length;c<p;c++){const d=i[c];a[c]=s(n[d],d,c,r&&r[c])}}else a=[];return o&&(o[l]=a),a}function ys(n,s,o={},l,a){if(Je.isCE||Je.parent&&Eo(Je.parent)&&Je.parent.isCE)return s!=="default"&&(o.name=s),I("slot",o,l&&l());let r=n[s];r&&r.length>1&&(N("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),r=()=>[]),r&&r._c&&(r._d=!1),k();const i=r&&Qd(r(o)),c=L(Te,{key:o.key||i&&i.key||`_${s}`},i||(l?l():[]),i&&n._===1?64:-2);return!a&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),r&&r._c&&(r._d=!0),c}function Qd(n){return n.some(s=>hs(s)?!(s.type===Xe||s.type===Te&&!Qd(s.children)):!0)?n:null}const Ya=n=>n?du(n)?ea(n)||n.proxy:Ya(n.parent):null,oo=He(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>Do(n.props),$attrs:n=>Do(n.attrs),$slots:n=>Do(n.slots),$refs:n=>Do(n.refs),$parent:n=>Ya(n.parent),$root:n=>Ya(n.root),$emit:n=>n.emit,$options:n=>oi(n),$forceUpdate:n=>n.f||(n.f=()=>Gl(n.update)),$nextTick:n=>n.n||(n.n=sn.bind(n.proxy)),$watch:n=>Jf.bind(n)}),si=n=>n==="_"||n==="$",ya=(n,s)=>n!==Re&&!n.__isScriptSetup&&xe(n,s),Jd={get({_:n},s){const{ctx:o,setupState:l,data:a,props:r,accessCache:i,type:c,appContext:p}=n;if(s==="__isVue")return!0;let d;if(s[0]!=="$"){const m=i[s];if(m!==void 0)switch(m){case 1:return l[s];case 2:return a[s];case 4:return o[s];case 3:return r[s]}else{if(ya(l,s))return i[s]=1,l[s];if(a!==Re&&xe(a,s))return i[s]=2,a[s];if((d=n.propsOptions[0])&&xe(d,s))return i[s]=3,r[s];if(o!==Re&&xe(o,s))return i[s]=4,o[s];Za&&(i[s]=0)}}const u=oo[s];let y,h;if(u)return s==="$attrs"&&(bn(n,"get",s),Dl()),u(n);if((y=c.__cssModules)&&(y=y[s]))return y;if(o!==Re&&xe(o,s))return i[s]=4,o[s];if(h=p.config.globalProperties,xe(h,s))return h[s];Je&&(!Ue(s)||s.indexOf("__v")!==0)&&(a!==Re&&si(s[0])&&xe(a,s)?N(`Property ${JSON.stringify(s)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):n===Je&&N(`Property ${JSON.stringify(s)} was accessed during render but is not defined on instance.`))},set({_:n},s,o){const{data:l,setupState:a,ctx:r}=n;return ya(a,s)?(a[s]=o,!0):a.__isScriptSetup&&xe(a,s)?(N(`Cannot mutate <script setup> binding "${s}" from Options API.`),!1):l!==Re&&xe(l,s)?(l[s]=o,!0):xe(n.props,s)?(N(`Attempting to mutate prop "${s}". Props are readonly.`),!1):s[0]==="$"&&s.slice(1)in n?(N(`Attempting to mutate public property "${s}". Properties starting with $ are reserved and readonly.`),!1):(s in n.appContext.config.globalProperties?Object.defineProperty(r,s,{enumerable:!0,configurable:!0,value:o}):r[s]=o,!0)},has({_:{data:n,setupState:s,accessCache:o,ctx:l,appContext:a,propsOptions:r}},i){let c;return!!o[i]||n!==Re&&xe(n,i)||ya(s,i)||(c=r[0])&&xe(c,i)||xe(l,i)||xe(oo,i)||xe(a.config.globalProperties,i)},defineProperty(n,s,o){return o.get!=null?n._.accessCache[s]=0:xe(o,"value")&&this.set(n,s,o.value,null),Reflect.defineProperty(n,s,o)}};Jd.ownKeys=n=>(N("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(n));function dm(n){const s={};return Object.defineProperty(s,"_",{configurable:!0,enumerable:!1,get:()=>n}),Object.keys(oo).forEach(o=>{Object.defineProperty(s,o,{configurable:!0,enumerable:!1,get:()=>oo[o](n),set:An})}),s}function um(n){const{ctx:s,propsOptions:[o]}=n;o&&Object.keys(o).forEach(l=>{Object.defineProperty(s,l,{enumerable:!0,configurable:!0,get:()=>n.props[l],set:An})})}function ym(n){const{ctx:s,setupState:o}=n;Object.keys(me(o)).forEach(l=>{if(!o.__isScriptSetup){if(si(l[0])){N(`setup() return property ${JSON.stringify(l)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(s,l,{enumerable:!0,configurable:!0,get:()=>o[l],set:An})}})}function hm(){const n=Object.create(null);return(s,o)=>{n[o]?N(`${s} property "${o}" is already defined in ${n[o]}.`):n[o]=s}}let Za=!0;function fm(n){const s=oi(n),o=n.proxy,l=n.ctx;Za=!1,s.beforeCreate&&ec(s.beforeCreate,n,"bc");const{data:a,computed:r,methods:i,watch:c,provide:p,inject:d,created:u,beforeMount:y,mounted:h,beforeUpdate:m,updated:f,activated:B,deactivated:A,beforeDestroy:D,beforeUnmount:b,destroyed:_,unmounted:w,render:P,renderTracked:W,renderTriggered:K,errorCaptured:F,serverPrefetch:H,expose:le,inheritAttrs:ye,components:Q,directives:_e,filters:Pe}=s,Ie=hm();{const[X]=n.propsOptions;if(X)for(const ue in X)Ie("Props",ue)}if(d&&mm(d,l,Ie,n.appContext.config.unwrapInjectedRef),i)for(const X in i){const ue=i[X];fe(ue)?(Object.defineProperty(l,X,{value:ue.bind(o),configurable:!0,enumerable:!0,writable:!0}),Ie("Methods",X)):N(`Method "${X}" has type "${typeof ue}" in the component definition. Did you reference the function correctly?`)}if(a){fe(a)||N("The data option must be a function. Plain object usage is no longer supported.");const X=a.call(o,o);if(Rr(X)&&N("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Ne(X))N("data() should return an object.");else{n.data=je(X);for(const ue in X)Ie("Data",ue),si(ue[0])||Object.defineProperty(l,ue,{configurable:!0,enumerable:!0,get:()=>X[ue],set:An})}}if(Za=!0,r)for(const X in r){const ue=r[X],ke=fe(ue)?ue.bind(o,o):fe(ue.get)?ue.get.bind(o,o):An;ke===An&&N(`Computed property "${X}" has no getter.`);const Le=!fe(ue)&&fe(ue.set)?ue.set.bind(o):()=>{N(`Write operation failed: computed property "${X}" is readonly.`)},kn=S({get:ke,set:Le});Object.defineProperty(l,X,{enumerable:!0,configurable:!0,get:()=>kn.value,set:tn=>kn.value=tn}),Ie("Computed",X)}if(c)for(const X in c)Xd(c[X],l,o,X);if(p){const X=fe(p)?p.call(o):p;Reflect.ownKeys(X).forEach(ue=>{xn(ue,X[ue])})}u&&ec(u,n,"c");function qe(X,ue){de(ue)?ue.forEach(ke=>X(ke.bind(o))):ue&&X(ue.bind(o))}if(qe(om,y),qe(yo,h),qe(tm,m),qe(Zl,f),qe(Gd,B),qe(Kd,A),qe(im,F),qe(rm,W),qe(am,K),qe(Rt,b),qe(Ql,w),qe(lm,H),de(le))if(le.length){const X=n.exposed||(n.exposed={});le.forEach(ue=>{Object.defineProperty(X,ue,{get:()=>o[ue],set:ke=>o[ue]=ke})})}else n.exposed||(n.exposed={});P&&n.render===An&&(n.render=P),ye!=null&&(n.inheritAttrs=ye),Q&&(n.components=Q),_e&&(n.directives=_e)}function mm(n,s,o=An,l=!1){de(n)&&(n=Qa(n));for(const a in n){const r=n[a];let i;Ne(r)?"default"in r?i=T(r.from||a,r.default,!0):i=T(r.from||a):i=T(r),Fe(i)?l?Object.defineProperty(s,a,{enumerable:!0,configurable:!0,get:()=>i.value,set:c=>i.value=c}):(N(`injected property "${a}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),s[a]=i):s[a]=i,o("Inject",a)}}function ec(n,s,o){Mn(de(n)?n.map(l=>l.bind(s.proxy)):n.bind(s.proxy),s,o)}function Xd(n,s,o,l){const a=l.includes(".")?Vd(o,l):()=>o[l];if(Ue(n)){const r=s[n];fe(r)?Ce(a,r):N(`Invalid watch handler specified by key "${n}"`,r)}else if(fe(n))Ce(a,n.bind(o));else if(Ne(n))if(de(n))n.forEach(r=>Xd(r,s,o,l));else{const r=fe(n.handler)?n.handler.bind(o):s[n.handler];fe(r)?Ce(a,r,n):N(`Invalid watch handler specified by key "${n.handler}"`,r)}else N(`Invalid watch option: "${l}"`,n)}function oi(n){const s=n.type,{mixins:o,extends:l}=s,{mixins:a,optionsCache:r,config:{optionMergeStrategies:i}}=n.appContext,c=r.get(s);let p;return c?p=c:!a.length&&!o&&!l?p=s:(p={},a.length&&a.forEach(d=>xl(p,d,i,!0)),xl(p,s,i)),Ne(s)&&r.set(s,p),p}function xl(n,s,o,l=!1){const{mixins:a,extends:r}=s;r&&xl(n,r,o,!0),a&&a.forEach(i=>xl(n,i,o,!0));for(const i in s)if(l&&i==="expose")N('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const c=gm[i]||o&&o[i];n[i]=c?c(n[i],s[i]):s[i]}return n}const gm={data:nc,props:Hs,emits:Hs,methods:Hs,computed:Hs,beforeCreate:pn,created:pn,beforeMount:pn,mounted:pn,beforeUpdate:pn,updated:pn,beforeDestroy:pn,beforeUnmount:pn,destroyed:pn,unmounted:pn,activated:pn,deactivated:pn,errorCaptured:pn,serverPrefetch:pn,components:Hs,directives:Hs,watch:Am,provide:nc,inject:Bm};function nc(n,s){return s?n?function(){return He(fe(n)?n.call(this,this):n,fe(s)?s.call(this,this):s)}:s:n}function Bm(n,s){return Hs(Qa(n),Qa(s))}function Qa(n){if(de(n)){const s={};for(let o=0;o<n.length;o++)s[n[o]]=n[o];return s}return n}function pn(n,s){return n?[...new Set([].concat(n,s))]:s}function Hs(n,s){return n?He(He(Object.create(null),n),s):s}function Am(n,s){if(!n)return s;if(!s)return n;const o=He(Object.create(null),n);for(const l in s)o[l]=pn(n[l],s[l]);return o}function Cm(n,s,o,l=!1){const a={},r={};Bl(r,Xl,1),n.propsDefaults=Object.create(null),eu(n,s,a,r);for(const i in n.propsOptions[0])i in a||(a[i]=void 0);su(s||{},a,n),o?n.props=l?a:ff(a):n.type.props?n.props=a:n.props=r,n.attrs=r}function bm(n){for(;n;){if(n.type.__hmrId)return!0;n=n.parent}}function km(n,s,o,l){const{props:a,attrs:r,vnode:{patchFlag:i}}=n,c=me(a),[p]=n.propsOptions;let d=!1;if(!bm(n)&&(l||i>0)&&!(i&16)){if(i&8){const u=n.vnode.dynamicProps;for(let y=0;y<u.length;y++){let h=u[y];if(Kl(n.emitsOptions,h))continue;const m=s[h];if(p)if(xe(r,h))m!==r[h]&&(r[h]=m,d=!0);else{const f=Xn(h);a[f]=Ja(p,c,f,m,n,!1)}else m!==r[h]&&(r[h]=m,d=!0)}}}else{eu(n,s,a,r)&&(d=!0);let u;for(const y in c)(!s||!xe(s,y)&&((u=ds(y))===y||!xe(s,u)))&&(p?o&&(o[y]!==void 0||o[u]!==void 0)&&(a[y]=Ja(p,c,y,void 0,n,!0)):delete a[y]);if(r!==c)for(const y in r)(!s||!xe(s,y))&&(delete r[y],d=!0)}d&&us(n,"set","$attrs"),su(s||{},a,n)}function eu(n,s,o,l){const[a,r]=n.propsOptions;let i=!1,c;if(s)for(let p in s){if(rl(p))continue;const d=s[p];let u;a&&xe(a,u=Xn(p))?!r||!r.includes(u)?o[u]=d:(c||(c={}))[u]=d:Kl(n.emitsOptions,p)||(!(p in l)||d!==l[p])&&(l[p]=d,i=!0)}if(r){const p=me(o),d=c||Re;for(let u=0;u<r.length;u++){const y=r[u];o[y]=Ja(a,p,y,d[y],n,!xe(d,y))}}return i}function Ja(n,s,o,l,a,r){const i=n[o];if(i!=null){const c=xe(i,"default");if(c&&l===void 0){const p=i.default;if(i.type!==Function&&fe(p)){const{propsDefaults:d}=a;o in d?l=d[o]:(To(a),l=d[o]=p.call(null,s),to())}else l=p}i[0]&&(r&&!c?l=!1:i[1]&&(l===""||l===ds(o))&&(l=!0))}return l}function nu(n,s,o=!1){const l=s.propsCache,a=l.get(n);if(a)return a;const r=n.props,i={},c=[];let p=!1;if(!fe(n)){const u=y=>{p=!0;const[h,m]=nu(y,s,!0);He(i,h),m&&c.push(...m)};!o&&s.mixins.length&&s.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!p)return Ne(n)&&l.set(n,xo),xo;if(de(r))for(let u=0;u<r.length;u++){Ue(r[u])||N("props must be strings when using array syntax.",r[u]);const y=Xn(r[u]);sc(y)&&(i[y]=Re)}else if(r){Ne(r)||N("invalid props options",r);for(const u in r){const y=Xn(u);if(sc(y)){const h=r[u],m=i[y]=de(h)||fe(h)?{type:h}:Object.assign({},h);if(m){const f=tc(Boolean,m.type),B=tc(String,m.type);m[0]=f>-1,m[1]=B<0||f<B,(f>-1||xe(m,"default"))&&c.push(y)}}}}const d=[i,c];return Ne(n)&&l.set(n,d),d}function sc(n){return n[0]!=="$"?!0:(N(`Invalid prop name: "${n}" is a reserved property.`),!1)}function Xa(n){const s=n&&n.toString().match(/^\s*(function|class) (\w+)/);return s?s[2]:n===null?"null":""}function oc(n,s){return Xa(n)===Xa(s)}function tc(n,s){return de(s)?s.findIndex(o=>oc(o,n)):fe(s)&&oc(s,n)?0:-1}function su(n,s,o){const l=me(s),a=o.propsOptions[0];for(const r in a){let i=a[r];i!=null&&_m(r,l[r],i,!xe(n,r)&&!xe(n,ds(r)))}}function _m(n,s,o,l){const{type:a,required:r,validator:i}=o;if(r&&l){N('Missing required prop: "'+n+'"');return}if(!(s==null&&!o.required)){if(a!=null&&a!==!0){let c=!1;const p=de(a)?a:[a],d=[];for(let u=0;u<p.length&&!c;u++){const{valid:y,expectedType:h}=vm(s,p[u]);d.push(h||""),c=y}if(!c){N(xm(n,s,d));return}}i&&!i(s)&&N('Invalid prop: custom validator check failed for prop "'+n+'".')}}const Dm=Ls("String,Number,Boolean,Function,Symbol,BigInt");function vm(n,s){let o;const l=Xa(s);if(Dm(l)){const a=typeof n;o=a===l.toLowerCase(),!o&&a==="object"&&(o=n instanceof s)}else l==="Object"?o=Ne(n):l==="Array"?o=de(n):l==="null"?o=n===null:o=n instanceof s;return{valid:o,expectedType:l}}function xm(n,s,o){let l=`Invalid prop: type check failed for prop "${n}". Expected ${o.map(ro).join(" | ")}`;const a=o[0],r=qr(s),i=lc(s,a),c=lc(s,r);return o.length===1&&ac(a)&&!wm(a,r)&&(l+=` with value ${i}`),l+=`, got ${r} `,ac(r)&&(l+=`with value ${c}.`),l}function lc(n,s){return s==="String"?`"${n}"`:s==="Number"?`${Number(n)}`:`${n}`}function ac(n){return["string","number","boolean"].some(o=>n.toLowerCase()===o)}function wm(...n){return n.some(s=>s.toLowerCase()==="boolean")}const ou=n=>n[0]==="_"||n==="$stable",ti=n=>de(n)?n.map(qn):[qn(n)],Em=(n,s,o)=>{if(s._n)return s;const l=x((...a)=>(Ge&&N(`Slot "${n}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),ti(s(...a))),o);return l._c=!1,l},tu=(n,s,o)=>{const l=n._ctx;for(const a in n){if(ou(a))continue;const r=n[a];if(fe(r))s[a]=Em(a,r,l);else if(r!=null){N(`Non-function value encountered for slot "${a}". Prefer function slots for better performance.`);const i=ti(r);s[a]=()=>i}}},lu=(n,s)=>{Wt(n.vnode)||N("Non-function value encountered for default slot. Prefer function slots for better performance.");const o=ti(s);n.slots.default=()=>o},Im=(n,s)=>{if(n.vnode.shapeFlag&32){const o=s._;o?(n.slots=me(s),Bl(s,"_",o)):tu(s,n.slots={})}else n.slots={},s&&lu(n,s);Bl(n.slots,Xl,1)},$m=(n,s,o)=>{const{vnode:l,slots:a}=n;let r=!0,i=Re;if(l.shapeFlag&32){const c=s._;c?Is?He(a,s):o&&c===1?r=!1:(He(a,s),!o&&c===1&&delete a._):(r=!s.$stable,tu(s,a)),i=s}else s&&(lu(n,s),i={default:1});if(r)for(const c in a)!ou(c)&&!(c in i)&&delete a[c]};function au(){return{app:null,config:{isNativeTag:ld,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Sm=0;function Fm(n,s){return function(l,a=null){fe(l)||(l=Object.assign({},l)),a!=null&&!Ne(a)&&(N("root props passed to app.mount() must be an object."),a=null);const r=au(),i=new Set;let c=!1;const p=r.app={_uid:Sm++,_component:l,_props:a,_container:null,_context:r,_instance:null,version:El,get config(){return r.config},set config(d){N("app.config cannot be replaced. Modify individual options instead.")},use(d,...u){return i.has(d)?N("Plugin has already been applied to target app."):d&&fe(d.install)?(i.add(d),d.install(p,...u)):fe(d)?(i.add(d),d(p,...u)):N('A plugin must either be a function or an object with an "install" function.'),p},mixin(d){return r.mixins.includes(d)?N("Mixin has already been applied to target app"+(d.name?`: ${d.name}`:"")):r.mixins.push(d),p},component(d,u){return sr(d,r.config),u?(r.components[d]&&N(`Component "${d}" has already been registered in target app.`),r.components[d]=u,p):r.components[d]},directive(d,u){return Yd(d),u?(r.directives[d]&&N(`Directive "${d}" has already been registered in target app.`),r.directives[d]=u,p):r.directives[d]},mount(d,u,y){if(c)N("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{d.__vue_app__&&N("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const h=I(l,a);return h.appContext=r,r.reload=()=>{n(Un(h),d,y)},u&&s?s(h,d):n(h,d,y),c=!0,p._container=d,d.__vue_app__=p,p._instance=h.component,Lf(p,El),ea(h.component)||h.component.proxy}},unmount(){c?(n(null,p._container),p._instance=null,Wf(p),delete p._container.__vue_app__):N("Cannot unmount an app that is not mounted.")},provide(d,u){return d in r.provides&&N(`App already provides property with key "${String(d)}". It will be overwritten with the new value.`),r.provides[d]=u,p}};return p}}function er(n,s,o,l,a=!1){if(de(n)){n.forEach((h,m)=>er(h,s&&(de(s)?s[m]:s),o,l,a));return}if(Eo(l)&&!a)return;const r=l.shapeFlag&4?ea(l.component)||l.component.proxy:l.el,i=a?null:r,{i:c,r:p}=n;if(!c){N("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const d=s&&s.r,u=c.refs===Re?c.refs={}:c.refs,y=c.setupState;if(d!=null&&d!==p&&(Ue(d)?(u[d]=null,xe(y,d)&&(y[d]=null)):Fe(d)&&(d.value=null)),fe(p))ps(p,c,12,[i,u]);else{const h=Ue(p),m=Fe(p);if(h||m){const f=()=>{if(n.f){const B=h?xe(y,p)?y[p]:u[p]:p.value;a?de(B)&&Lr(B,r):de(B)?B.includes(r)||B.push(r):h?(u[p]=[r],xe(y,p)&&(y[p]=u[p])):(p.value=[r],n.k&&(u[n.k]=p.value))}else h?(u[p]=i,xe(y,p)&&(y[p]=i)):m?(p.value=i,n.k&&(u[n.k]=i)):N("Invalid template ref type:",p,`(${typeof p})`)};i?(f.id=-1,nn(f,o)):f()}else N("Invalid template ref type:",p,`(${typeof p})`)}}let qo,vs;function os(n,s){n.appContext.config.performance&&wl()&&vs.mark(`vue-${s}-${n.uid}`),Vf(n,s,wl()?vs.now():Date.now())}function ts(n,s){if(n.appContext.config.performance&&wl()){const o=`vue-${s}-${n.uid}`,l=o+":end";vs.mark(l),vs.measure(`<${na(n,n.type)}> ${s}`,o,l),vs.clearMarks(o),vs.clearMarks(l)}Uf(n,s,wl()?vs.now():Date.now())}function wl(){return qo!==void 0||(typeof window<"u"&&window.performance?(qo=!0,vs=window.performance):qo=!1),qo}function Pm(){const n=[];if(n.length){const s=n.length>1;console.warn(`Feature flag${s?"s":""} ${n.join(", ")} ${s?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const nn=Qf;function Tm(n){return Mm(n)}function Mm(n,s){Pm();const o=cd();o.__VUE__=!0,Od(o.__VUE_DEVTOOLS_GLOBAL_HOOK__,o);const{insert:l,remove:a,patchProp:r,createElement:i,createText:c,createComment:p,setText:d,setElementText:u,parentNode:y,nextSibling:h,setScopeId:m=An,insertStaticContent:f}=n,B=(g,C,E,O=null,M=null,j=null,Y=!1,U=null,G=Is?!1:!!C.dynamicChildren)=>{if(g===C)return;g&&!xs(g,C)&&(O=re(g),mn(g,M,j,!0),g=null),C.patchFlag===-2&&(G=!1,C.dynamicChildren=null);const{type:R,ref:ce,shapeFlag:ie}=C;switch(R){case Vt:A(g,C,E,O);break;case Xe:D(g,C,E,O);break;case pl:g==null?b(C,E,O,Y):_(g,C,E,Y);break;case Te:_e(g,C,E,O,M,j,Y,U,G);break;default:ie&1?W(g,C,E,O,M,j,Y,U,G):ie&6?Pe(g,C,E,O,M,j,Y,U,G):ie&64||ie&128?R.process(g,C,E,O,M,j,Y,U,G,Ee):N("Invalid VNode type:",R,`(${typeof R})`)}ce!=null&&M&&er(ce,g&&g.ref,j,C||g,!C)},A=(g,C,E,O)=>{if(g==null)l(C.el=c(C.children),E,O);else{const M=C.el=g.el;C.children!==g.children&&d(M,C.children)}},D=(g,C,E,O)=>{g==null?l(C.el=p(C.children||""),E,O):C.el=g.el},b=(g,C,E,O)=>{[g.el,g.anchor]=f(g.children,C,E,O,g.el,g.anchor)},_=(g,C,E,O)=>{if(C.children!==g.children){const M=h(g.anchor);P(g),[C.el,C.anchor]=f(C.children,E,M,O)}else C.el=g.el,C.anchor=g.anchor},w=({el:g,anchor:C},E,O)=>{let M;for(;g&&g!==C;)M=h(g),l(g,E,O),g=M;l(C,E,O)},P=({el:g,anchor:C})=>{let E;for(;g&&g!==C;)E=h(g),a(g),g=E;a(C)},W=(g,C,E,O,M,j,Y,U,G)=>{Y=Y||C.type==="svg",g==null?K(C,E,O,M,j,Y,U,G):le(g,C,M,j,Y,U,G)},K=(g,C,E,O,M,j,Y,U)=>{let G,R;const{type:ce,props:ie,shapeFlag:pe,transition:Be,dirs:we}=g;if(G=g.el=i(g.type,j,ie&&ie.is,ie),pe&8?u(G,g.children):pe&16&&H(g.children,G,null,O,M,j&&ce!=="foreignObject",Y,U),we&&Ws(g,null,O,"created"),F(G,g,g.scopeId,Y,O),ie){for(const We in ie)We!=="value"&&!rl(We)&&r(G,We,null,ie[We],j,g.children,O,M,z);"value"in ie&&r(G,"value",null,ie.value),(R=ie.onVnodeBeforeMount)&&Fn(R,O,g)}Object.defineProperty(G,"__vnode",{value:g,enumerable:!1}),Object.defineProperty(G,"__vueParentComponent",{value:O,enumerable:!1}),we&&Ws(g,null,O,"beforeMount");const Ve=(!M||M&&!M.pendingBranch)&&Be&&!Be.persisted;Ve&&Be.beforeEnter(G),l(G,C,E),((R=ie&&ie.onVnodeMounted)||Ve||we)&&nn(()=>{R&&Fn(R,O,g),Ve&&Be.enter(G),we&&Ws(g,null,O,"mounted")},M)},F=(g,C,E,O,M)=>{if(E&&m(g,E),O)for(let j=0;j<O.length;j++)m(g,O[j]);if(M){let j=M.subTree;if(j.patchFlag>0&&j.patchFlag&2048&&(j=Rd(j.children)||j),C===j){const Y=M.vnode;F(g,Y,Y.scopeId,Y.slotScopeIds,M.parent)}}},H=(g,C,E,O,M,j,Y,U,G=0)=>{for(let R=G;R<g.length;R++){const ce=g[R]=U?ks(g[R]):qn(g[R]);B(null,ce,C,E,O,M,j,Y,U)}},le=(g,C,E,O,M,j,Y)=>{const U=C.el=g.el;let{patchFlag:G,dynamicChildren:R,dirs:ce}=C;G|=g.patchFlag&16;const ie=g.props||Re,pe=C.props||Re;let Be;E&&Rs(E,!1),(Be=pe.onVnodeBeforeUpdate)&&Fn(Be,E,C,g),ce&&Ws(C,g,E,"beforeUpdate"),E&&Rs(E,!0),Is&&(G=0,Y=!1,R=null);const we=M&&C.type!=="foreignObject";if(R?(ye(g.dynamicChildren,R,U,E,O,we,j),E&&E.type.__hmrId&&lt(g,C)):Y||ke(g,C,U,null,E,O,we,j,!1),G>0){if(G&16)Q(U,C,ie,pe,E,O,M);else if(G&2&&ie.class!==pe.class&&r(U,"class",null,pe.class,M),G&4&&r(U,"style",ie.style,pe.style,M),G&8){const Ve=C.dynamicProps;for(let We=0;We<Ve.length;We++){const Ye=Ve[We],Ln=ie[Ye],mo=pe[Ye];(mo!==Ln||Ye==="value")&&r(U,Ye,Ln,mo,M,g.children,E,O,z)}}G&1&&g.children!==C.children&&u(U,C.children)}else!Y&&R==null&&Q(U,C,ie,pe,E,O,M);((Be=pe.onVnodeUpdated)||ce)&&nn(()=>{Be&&Fn(Be,E,C,g),ce&&Ws(C,g,E,"updated")},O)},ye=(g,C,E,O,M,j,Y)=>{for(let U=0;U<C.length;U++){const G=g[U],R=C[U],ce=G.el&&(G.type===Te||!xs(G,R)||G.shapeFlag&70)?y(G.el):E;B(G,R,ce,null,O,M,j,Y,!0)}},Q=(g,C,E,O,M,j,Y)=>{if(E!==O){if(E!==Re)for(const U in E)!rl(U)&&!(U in O)&&r(g,U,E[U],null,Y,C.children,M,j,z);for(const U in O){if(rl(U))continue;const G=O[U],R=E[U];G!==R&&U!=="value"&&r(g,U,R,G,Y,C.children,M,j,z)}"value"in O&&r(g,"value",E.value,O.value)}},_e=(g,C,E,O,M,j,Y,U,G)=>{const R=C.el=g?g.el:c(""),ce=C.anchor=g?g.anchor:c("");let{patchFlag:ie,dynamicChildren:pe,slotScopeIds:Be}=C;(Is||ie&2048)&&(ie=0,G=!1,pe=null),Be&&(U=U?U.concat(Be):Be),g==null?(l(R,E,O),l(ce,E,O),H(C.children,E,ce,M,j,Y,U,G)):ie>0&&ie&64&&pe&&g.dynamicChildren?(ye(g.dynamicChildren,pe,E,M,j,Y,U),M&&M.type.__hmrId?lt(g,C):(C.key!=null||M&&C===M.subTree)&&lt(g,C,!0)):ke(g,C,E,ce,M,j,Y,U,G)},Pe=(g,C,E,O,M,j,Y,U,G)=>{C.slotScopeIds=U,g==null?C.shapeFlag&512?M.ctx.activate(C,E,O,Y,G):Ie(C,E,O,M,j,Y,G):qe(g,C,G)},Ie=(g,C,E,O,M,j,Y)=>{const U=g.component=Gm(g,O,M);if(U.type.__hmrId&&Tf(U),il(g),os(U,"mount"),Wt(g)&&(U.ctx.renderer=Ee),os(U,"init"),zm(U),ts(U,"init"),U.asyncDep){if(M&&M.registerDep(U,X),!g.el){const G=U.subTree=I(Xe);D(null,G,C,E)}return}X(U,g,C,E,M,j,Y),cl(),ts(U,"mount")},qe=(g,C,E)=>{const O=C.component=g.component;if(Yf(g,C,E))if(O.asyncDep&&!O.asyncResolved){il(C),ue(O,C,E),cl();return}else O.next=C,Ff(O.update),O.update();else C.el=g.el,O.vnode=C},X=(g,C,E,O,M,j,Y)=>{const U=()=>{if(g.isMounted){let{next:ce,bu:ie,u:pe,parent:Be,vnode:we}=g,Ve=ce,We;il(ce||g.vnode),Rs(g,!1),ce?(ce.el=we.el,ue(g,ce,Y)):ce=we,ie&&Ds(ie),(We=ce.props&&ce.props.onVnodeBeforeUpdate)&&Fn(We,Be,ce,we),Rs(g,!0),os(g,"render");const Ye=ca(g);ts(g,"render");const Ln=g.subTree;g.subTree=Ye,os(g,"patch"),B(Ln,Ye,y(Ln.el),re(Ln),g,M,j),ts(g,"patch"),ce.el=Ye.el,Ve===null&&Zf(g,Ye.el),pe&&nn(pe,M),(We=ce.props&&ce.props.onVnodeUpdated)&&nn(()=>Fn(We,Be,ce,we),M),Nd(g),cl()}else{let ce;const{el:ie,props:pe}=C,{bm:Be,m:we,parent:Ve}=g,We=Eo(C);if(Rs(g,!1),Be&&Ds(Be),!We&&(ce=pe&&pe.onVnodeBeforeMount)&&Fn(ce,Ve,C),Rs(g,!0),ie&&he){const Ye=()=>{os(g,"render"),g.subTree=ca(g),ts(g,"render"),os(g,"hydrate"),he(ie,g.subTree,g,M,null),ts(g,"hydrate")};We?C.type.__asyncLoader().then(()=>!g.isUnmounted&&Ye()):Ye()}else{os(g,"render");const Ye=g.subTree=ca(g);ts(g,"render"),os(g,"patch"),B(null,Ye,E,O,g,M,j),ts(g,"patch"),C.el=Ye.el}if(we&&nn(we,M),!We&&(ce=pe&&pe.onVnodeMounted)){const Ye=C;nn(()=>Fn(ce,Ve,Ye),M)}(C.shapeFlag&256||Ve&&Eo(Ve.vnode)&&Ve.vnode.shapeFlag&256)&&g.a&&nn(g.a,M),g.isMounted=!0,Ga(g),C=E=O=null}},G=g.effect=new Hr(U,()=>Gl(R),g.scope),R=g.update=()=>G.run();R.id=g.uid,Rs(g,!0),G.onTrack=g.rtc?ce=>Ds(g.rtc,ce):void 0,G.onTrigger=g.rtg?ce=>Ds(g.rtg,ce):void 0,R.ownerInstance=g,R()},ue=(g,C,E)=>{C.component=g;const O=g.vnode.props;g.vnode=C,g.next=null,km(g,C.props,O,E),$m(g,C.children,E),co(),Ki(),po()},ke=(g,C,E,O,M,j,Y,U,G=!1)=>{const R=g&&g.children,ce=g?g.shapeFlag:0,ie=C.children,{patchFlag:pe,shapeFlag:Be}=C;if(pe>0){if(pe&128){kn(R,ie,E,O,M,j,Y,U,G);return}else if(pe&256){Le(R,ie,E,O,M,j,Y,U,G);return}}Be&8?(ce&16&&z(R,M,j),ie!==R&&u(E,ie)):ce&16?Be&16?kn(R,ie,E,O,M,j,Y,U,G):z(R,M,j,!0):(ce&8&&u(E,""),Be&16&&H(ie,E,O,M,j,Y,U,G))},Le=(g,C,E,O,M,j,Y,U,G)=>{g=g||xo,C=C||xo;const R=g.length,ce=C.length,ie=Math.min(R,ce);let pe;for(pe=0;pe<ie;pe++){const Be=C[pe]=G?ks(C[pe]):qn(C[pe]);B(g[pe],Be,E,null,M,j,Y,U,G)}R>ce?z(g,M,j,!0,!1,ie):H(C,E,O,M,j,Y,U,G,ie)},kn=(g,C,E,O,M,j,Y,U,G)=>{let R=0;const ce=C.length;let ie=g.length-1,pe=ce-1;for(;R<=ie&&R<=pe;){const Be=g[R],we=C[R]=G?ks(C[R]):qn(C[R]);if(xs(Be,we))B(Be,we,E,null,M,j,Y,U,G);else break;R++}for(;R<=ie&&R<=pe;){const Be=g[ie],we=C[pe]=G?ks(C[pe]):qn(C[pe]);if(xs(Be,we))B(Be,we,E,null,M,j,Y,U,G);else break;ie--,pe--}if(R>ie){if(R<=pe){const Be=pe+1,we=Be<ce?C[Be].el:O;for(;R<=pe;)B(null,C[R]=G?ks(C[R]):qn(C[R]),E,we,M,j,Y,U,G),R++}}else if(R>pe)for(;R<=ie;)mn(g[R],M,j,!0),R++;else{const Be=R,we=R,Ve=new Map;for(R=we;R<=pe;R++){const cn=C[R]=G?ks(C[R]):qn(C[R]);cn.key!=null&&(Ve.has(cn.key)&&N("Duplicate keys found during update:",JSON.stringify(cn.key),"Make sure keys are unique."),Ve.set(cn.key,R))}let We,Ye=0;const Ln=pe-we+1;let mo=!1,Oi=0;const Ro=new Array(Ln);for(R=0;R<Ln;R++)Ro[R]=0;for(R=Be;R<=ie;R++){const cn=g[R];if(Ye>=Ln){mn(cn,M,j,!0);continue}let Gn;if(cn.key!=null)Gn=Ve.get(cn.key);else for(We=we;We<=pe;We++)if(Ro[We-we]===0&&xs(cn,C[We])){Gn=We;break}Gn===void 0?mn(cn,M,j,!0):(Ro[Gn-we]=R+1,Gn>=Oi?Oi=Gn:mo=!0,B(cn,C[Gn],E,null,M,j,Y,U,G),Ye++)}const Ni=mo?Om(Ro):xo;for(We=Ni.length-1,R=Ln-1;R>=0;R--){const cn=we+R,Gn=C[cn],Li=cn+1<ce?C[cn+1].el:O;Ro[R]===0?B(null,Gn,E,Li,M,j,Y,U,G):mo&&(We<0||R!==Ni[We]?tn(Gn,E,Li,2):We--)}}},tn=(g,C,E,O,M=null)=>{const{el:j,type:Y,transition:U,children:G,shapeFlag:R}=g;if(R&6){tn(g.component.subTree,C,E,O);return}if(R&128){g.suspense.move(C,E,O);return}if(R&64){Y.move(g,C,E,Ee);return}if(Y===Te){l(j,C,E);for(let ie=0;ie<G.length;ie++)tn(G[ie],C,E,O);l(g.anchor,C,E);return}if(Y===pl){w(g,C,E);return}if(O!==2&&R&1&&U)if(O===0)U.beforeEnter(j),l(j,C,E),nn(()=>U.enter(j),M);else{const{leave:ie,delayLeave:pe,afterLeave:Be}=U,we=()=>l(j,C,E),Ve=()=>{ie(j,()=>{we(),Be&&Be()})};pe?pe(j,we,Ve):Ve()}else l(j,C,E)},mn=(g,C,E,O=!1,M=!1)=>{const{type:j,props:Y,ref:U,children:G,dynamicChildren:R,shapeFlag:ce,patchFlag:ie,dirs:pe}=g;if(U!=null&&er(U,null,E,g,!0),ce&256){C.ctx.deactivate(g);return}const Be=ce&1&&pe,we=!Eo(g);let Ve;if(we&&(Ve=Y&&Y.onVnodeBeforeUnmount)&&Fn(Ve,C,g),ce&6)te(g.component,E,O);else{if(ce&128){g.suspense.unmount(E,O);return}Be&&Ws(g,null,C,"beforeUnmount"),ce&64?g.type.remove(g,C,E,M,Ee,O):R&&(j!==Te||ie>0&&ie&64)?z(R,C,E,!1,!0):(j===Te&&ie&384||!M&&ce&16)&&z(G,C,E),O&&ms(g)}(we&&(Ve=Y&&Y.onVnodeUnmounted)||Be)&&nn(()=>{Ve&&Fn(Ve,C,g),Be&&Ws(g,null,C,"unmounted")},E)},ms=g=>{const{type:C,el:E,anchor:O,transition:M}=g;if(C===Te){g.patchFlag>0&&g.patchFlag&2048&&M&&!M.persisted?g.children.forEach(Y=>{Y.type===Xe?a(Y.el):ms(Y)}):$(E,O);return}if(C===pl){P(g);return}const j=()=>{a(E),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(g.shapeFlag&1&&M&&!M.persisted){const{leave:Y,delayLeave:U}=M,G=()=>Y(E,j);U?U(g.el,j,G):G()}else j()},$=(g,C)=>{let E;for(;g!==C;)E=h(g),a(g),g=E;a(C)},te=(g,C,E)=>{g.type.__hmrId&&Mf(g);const{bum:O,scope:M,update:j,subTree:Y,um:U}=g;O&&Ds(O),M.stop(),j&&(j.active=!1,mn(Y,g,C,E)),U&&nn(U,C),nn(()=>{g.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve()),qf(g)},z=(g,C,E,O=!1,M=!1,j=0)=>{for(let Y=j;Y<g.length;Y++)mn(g[Y],C,E,O,M)},re=g=>g.shapeFlag&6?re(g.component.subTree):g.shapeFlag&128?g.suspense.next():h(g.anchor||g.el),De=(g,C,E)=>{g==null?C._vnode&&mn(C._vnode,null,null,!0):B(C._vnode||null,g,C,null,null,null,E),Ki(),Pd(),C._vnode=g},Ee={p:B,um:mn,m:tn,r:ms,mt:Ie,mc:H,pc:ke,pbc:ye,n:re,o:n};let ge,he;return s&&([ge,he]=s(Ee)),{render:De,hydrate:ge,createApp:Fm(De,ge)}}function Rs({effect:n,update:s},o){n.allowRecurse=s.allowRecurse=o}function lt(n,s,o=!1){const l=n.children,a=s.children;if(de(l)&&de(a))for(let r=0;r<l.length;r++){const i=l[r];let c=a[r];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=a[r]=ks(a[r]),c.el=i.el),o||lt(i,c)),c.type===Vt&&(c.el=i.el),c.type===Xe&&!c.el&&(c.el=i.el)}}function Om(n){const s=n.slice(),o=[0];let l,a,r,i,c;const p=n.length;for(l=0;l<p;l++){const d=n[l];if(d!==0){if(a=o[o.length-1],n[a]<d){s[l]=a,o.push(l);continue}for(r=0,i=o.length-1;r<i;)c=r+i>>1,n[o[c]]<d?r=c+1:i=c;d<n[o[r]]&&(r>0&&(s[l]=o[r-1]),o[r]=l)}}for(r=o.length,i=o[r-1];r-- >0;)o[r]=i,i=s[i];return o}const Nm=n=>n.__isTeleport,Io=n=>n&&(n.disabled||n.disabled===""),rc=n=>typeof SVGElement<"u"&&n instanceof SVGElement,nr=(n,s)=>{const o=n&&n.to;if(Ue(o))if(s){const l=s(o);return l||N(`Failed to locate Teleport target with selector "${o}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),l}else return N("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!o&&!Io(n)&&N(`Invalid Teleport target: ${o}`),o},Lm={__isTeleport:!0,process(n,s,o,l,a,r,i,c,p,d){const{mc:u,pc:y,pbc:h,o:{insert:m,querySelector:f,createText:B,createComment:A}}=d,D=Io(s.props);let{shapeFlag:b,children:_,dynamicChildren:w}=s;if(Is&&(p=!1,w=null),n==null){const P=s.el=A("teleport start"),W=s.anchor=A("teleport end");m(P,o,l),m(W,o,l);const K=s.target=nr(s.props,f),F=s.targetAnchor=B("");K?(m(F,K),i=i||rc(K)):D||N("Invalid Teleport target on mount:",K,`(${typeof K})`);const H=(le,ye)=>{b&16&&u(_,le,ye,a,r,i,c,p)};D?H(o,W):K&&H(K,F)}else{s.el=n.el;const P=s.anchor=n.anchor,W=s.target=n.target,K=s.targetAnchor=n.targetAnchor,F=Io(n.props),H=F?o:W,le=F?P:K;if(i=i||rc(W),w?(h(n.dynamicChildren,w,H,a,r,i,c),lt(n,s,!0)):p||y(n,s,H,le,a,r,i,c,!1),D)F||el(s,o,P,d,1);else if((s.props&&s.props.to)!==(n.props&&n.props.to)){const ye=s.target=nr(s.props,f);ye?el(s,ye,null,d,0):N("Invalid Teleport target on update:",W,`(${typeof W})`)}else F&&el(s,W,K,d,1)}ru(s)},remove(n,s,o,l,{um:a,o:{remove:r}},i){const{shapeFlag:c,children:p,anchor:d,targetAnchor:u,target:y,props:h}=n;if(y&&r(u),(i||!Io(h))&&(r(d),c&16))for(let m=0;m<p.length;m++){const f=p[m];a(f,s,o,!0,!!f.dynamicChildren)}},move:el,hydrate:Wm};function el(n,s,o,{o:{insert:l},m:a},r=2){r===0&&l(n.targetAnchor,s,o);const{el:i,anchor:c,shapeFlag:p,children:d,props:u}=n,y=r===2;if(y&&l(i,s,o),(!y||Io(u))&&p&16)for(let h=0;h<d.length;h++)a(d[h],s,o,2);y&&l(c,s,o)}function Wm(n,s,o,l,a,r,{o:{nextSibling:i,parentNode:c,querySelector:p}},d){const u=s.target=nr(s.props,p);if(u){const y=u._lpa||u.firstChild;if(s.shapeFlag&16)if(Io(s.props))s.anchor=d(i(n),s,c(n),o,l,a,r),s.targetAnchor=y;else{s.anchor=i(n);let h=y;for(;h;)if(h=i(h),h&&h.nodeType===8&&h.data==="teleport anchor"){s.targetAnchor=h,u._lpa=s.targetAnchor&&i(s.targetAnchor);break}d(y,s,u,o,l,a,r)}ru(s)}return s.anchor&&i(s.anchor)}const Rm=Lm;function ru(n){const s=n.ctx;if(s&&s.ut){let o=n.children[0].el;for(;o!==n.targetAnchor;)o.nodeType===1&&o.setAttribute("data-v-owner",s.uid),o=o.nextSibling;s.ut()}}const Te=Symbol("Fragment"),Vt=Symbol("Text"),Xe=Symbol("Comment"),pl=Symbol("Static"),at=[];let Vn=null;function k(n=!1){at.push(Vn=n?null:[])}function qm(){at.pop(),Vn=at[at.length-1]||null}let kt=1;function ic(n){kt+=n}function iu(n){return n.dynamicChildren=kt>0?Vn||xo:null,qm(),kt>0&&Vn&&Vn.push(n),n}function ae(n,s,o,l,a,r){return iu(e(n,s,o,l,a,r,!0))}function L(n,s,o,l,a){return iu(I(n,s,o,l,a,!0))}function hs(n){return n?n.__v_isVNode===!0:!1}function xs(n,s){return s.shapeFlag&6&&bo.has(s.type)?(n.shapeFlag&=-257,s.shapeFlag&=-513,!1):n.type===s.type&&n.key===s.key}const Vm=(...n)=>Um(...n),Xl="__vInternal",cu=({key:n})=>n??null,dl=({ref:n,ref_key:s,ref_for:o})=>n!=null?Ue(n)||Fe(n)||fe(n)?{i:Je,r:n,k:s,f:!!o}:n:null;function e(n,s=null,o=null,l=0,a=null,r=n===Te?0:1,i=!1,c=!1){const p={__v_isVNode:!0,__v_skip:!0,type:n,props:s,key:s&&cu(s),ref:s&&dl(s),scopeId:zl,slotScopeIds:null,children:o,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:l,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Je};return c?(li(p,o),r&128&&n.normalize(p)):o&&(p.shapeFlag|=Ue(o)?8:16),p.key!==p.key&&N("VNode created with invalid key (NaN). VNode type:",p.type),kt>0&&!i&&Vn&&(p.patchFlag>0||r&6)&&p.patchFlag!==32&&Vn.push(p),p}const I=Vm;function Um(n,s=null,o=null,l=0,a=null,r=!1){if((!n||n===pm)&&(n||N(`Invalid vnode type when creating vnode: ${n}.`),n=Xe),hs(n)){const c=Un(n,s,!0);return o&&li(c,o),kt>0&&!r&&Vn&&(c.shapeFlag&6?Vn[Vn.indexOf(n)]=c:Vn.push(c)),c.patchFlag|=-2,c}if(hu(n)&&(n=n.__vccOpts),s){s=ee(s);let{class:c,style:p}=s;c&&!Ue(c)&&(s.class=ze(c)),Ne(p)&&(kl(p)&&!de(p)&&(p=He({},p)),s.style=on(p))}const i=Ue(n)?1:qd(n)?128:Nm(n)?64:Ne(n)?4:fe(n)?2:0;return i&4&&kl(n)&&(n=me(n),N("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,n)),e(n,s,o,l,a,i,r,!0)}function ee(n){return n?kl(n)||Xl in n?He({},n):n:null}function Un(n,s,o=!1){const{props:l,ref:a,patchFlag:r,children:i}=n,c=s?J(l||{},s):l;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&cu(c),ref:s&&s.ref?o&&a?de(a)?a.concat(dl(s)):[a,dl(s)]:dl(s):a,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:r===-1&&de(i)?i.map(pu):i,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:s&&n.type!==Te?r===-1?16:r|16:r,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Un(n.ssContent),ssFallback:n.ssFallback&&Un(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function pu(n){const s=Un(n);return de(n.children)&&(s.children=n.children.map(pu)),s}function t(n=" ",s=0){return I(Vt,null,n,s)}function ve(n="",s=!1){return s?(k(),L(Xe,null,n)):I(Xe,null,n)}function qn(n){return n==null||typeof n=="boolean"?I(Xe):de(n)?I(Te,null,n.slice()):typeof n=="object"?ks(n):I(Vt,null,String(n))}function ks(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Un(n)}function li(n,s){let o=0;const{shapeFlag:l}=n;if(s==null)s=null;else if(de(s))o=16;else if(typeof s=="object")if(l&65){const a=s.default;a&&(a._c&&(a._d=!1),li(n,a()),a._c&&(a._d=!0));return}else{o=32;const a=s._;!a&&!(Xl in s)?s._ctx=Je:a===3&&Je&&(Je.slots._===1?s._=1:(s._=2,n.patchFlag|=1024))}else fe(s)?(s={default:s,_ctx:Je},o=32):(s=String(s),l&64?(o=16,s=[t(s)]):o=8);n.children=s,n.shapeFlag|=o}function J(...n){const s={};for(let o=0;o<n.length;o++){const l=n[o];for(const a in l)if(a==="class")s.class!==l.class&&(s.class=ze([s.class,l.class]));else if(a==="style")s.style=on([s.style,l.style]);else if(Ot(a)){const r=s[a],i=l[a];i&&r!==i&&!(de(r)&&r.includes(i))&&(s[a]=r?[].concat(r,i):i)}else a!==""&&(s[a]=l[a])}return s}function Fn(n,s,o,l=null){Mn(n,s,7,[o,l])}const jm=au();let Hm=0;function Gm(n,s,o){const l=n.type,a=(s?s.appContext:n.appContext)||jm,r={uid:Hm++,vnode:n,type:l,parent:s,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new pd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:s?s.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:nu(l,a),emitsOptions:Wd(l,a),emit:null,emitted:null,propsDefaults:Re,inheritAttrs:l.inheritAttrs,ctx:Re,data:Re,props:Re,attrs:Re,slots:Re,refs:Re,setupState:Re,setupContext:null,suspense:o,suspenseId:o?o.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx=dm(r),r.root=s?s.root:r,r.emit=Hf.bind(null,r),n.ce&&n.ce(r),r}let Ge=null;const $n=()=>Ge||Je,To=n=>{Ge=n,n.scope.on()},to=()=>{Ge&&Ge.scope.off(),Ge=null},Km=Ls("slot,component");function sr(n,s){const o=s.isNativeTag||ld;(Km(n)||o(n))&&N("Do not use built-in or reserved HTML elements as component id: "+n)}function du(n){return n.vnode.shapeFlag&4}let _t=!1;function zm(n,s=!1){_t=s;const{props:o,children:l}=n.vnode,a=du(n);Cm(n,o,a,s),Im(n,l);const r=a?Ym(n,s):void 0;return _t=!1,r}function Ym(n,s){var o;const l=n.type;{if(l.name&&sr(l.name,n.appContext.config),l.components){const r=Object.keys(l.components);for(let i=0;i<r.length;i++)sr(r[i],n.appContext.config)}if(l.directives){const r=Object.keys(l.directives);for(let i=0;i<r.length;i++)Yd(r[i])}l.compilerOptions&&Zm()&&N('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}n.accessCache=Object.create(null),n.proxy=jl(new Proxy(n.ctx,Jd)),um(n);const{setup:a}=l;if(a){const r=n.setupContext=a.length>1?yu(n):null;To(n),co();const i=ps(a,n,0,[Do(n.props),r]);if(po(),to(),Rr(i)){if(i.then(to,to),s)return i.then(c=>{cc(n,c,s)}).catch(c=>{Hl(c,n,0)});if(n.asyncDep=i,!n.suspense){const c=(o=l.name)!==null&&o!==void 0?o:"Anonymous";N(`Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else cc(n,i,s)}else uu(n,s)}function cc(n,s,o){fe(s)?n.type.__ssrInlineRender?n.ssrRender=s:n.render=s:Ne(s)?(hs(s)&&N("setup() should not return VNodes directly - return a render function instead."),n.devtoolsRawSetupState=s,n.setupState=xd(s),ym(n)):s!==void 0&&N(`setup() should return an object. Received: ${s===null?"null":typeof s}`),uu(n,o)}let or;const Zm=()=>!or;function uu(n,s,o){const l=n.type;if(!n.render){if(!s&&or&&!l.render){const a=l.template||oi(n).template;if(a){os(n,"compile");const{isCustomElement:r,compilerOptions:i}=n.appContext.config,{delimiters:c,compilerOptions:p}=l,d=He(He({isCustomElement:r,delimiters:c},i),p);l.render=or(a,d),ts(n,"compile")}}n.render=l.render||An}To(n),co(),fm(n),po(),to(),!l.render&&n.render===An&&!s&&(l.template?N('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):N("Component is missing template or render function."))}function Qm(n){return new Proxy(n.attrs,{get(s,o){return Dl(),bn(n,"get","$attrs"),s[o]},set(){return N("setupContext.attrs is readonly."),!1},deleteProperty(){return N("setupContext.attrs is readonly."),!1}})}function yu(n){const s=l=>{if(n.exposed&&N("expose() should be called only once per setup()."),l!=null){let a=typeof l;a==="object"&&(de(l)?a="array":Fe(l)&&(a="ref")),a!=="object"&&N(`expose() should be passed a plain object, received ${a}.`)}n.exposed=l||{}};let o;return Object.freeze({get attrs(){return o||(o=Qm(n))},get slots(){return Do(n.slots)},get emit(){return(l,...a)=>n.emit(l,...a)},expose:s})}function ea(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(xd(jl(n.exposed)),{get(s,o){if(o in s)return s[o];if(o in oo)return oo[o](n)},has(s,o){return o in s||o in oo}}))}const Jm=/(?:^|[-_])(\w)/g,Xm=n=>n.replace(Jm,s=>s.toUpperCase()).replace(/[-_]/g,"");function Dt(n,s=!0){return fe(n)?n.displayName||n.name:n.name||s&&n.__name}function na(n,s,o=!1){let l=Dt(s);if(!l&&s.__file){const a=s.__file.match(/([^/\\]+)\.\w+$/);a&&(l=a[1])}if(!l&&n&&n.parent){const a=r=>{for(const i in r)if(r[i]===s)return i};l=a(n.components||n.parent.type.components)||a(n.appContext.components)}return l?Xm(l):o?"App":"Anonymous"}function hu(n){return fe(n)&&"__vccOpts"in n}const S=(n,s)=>_f(n,s,_t);function eg(){return ng().slots}function ng(){const n=$n();return n||N("useContext() called without active instance."),n.setupContext||(n.setupContext=yu(n))}function hn(n,s,o){const l=arguments.length;return l===2?Ne(s)&&!de(s)?hs(s)?I(n,null,[s]):I(n,s):I(n,null,s):(l>3?o=Array.prototype.slice.call(arguments,2):l===3&&hs(o)&&(o=[o]),I(n,s,o))}const sg=Symbol("ssrContext"),og=()=>{{const n=T(sg);return n||N("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),n}};function ha(n){return!!(n&&n.__v_isShallow)}function tg(){if(typeof window>"u")return;const n={style:"color:#3ba776"},s={style:"color:#0b1bc9"},o={style:"color:#b62e24"},l={style:"color:#9d288c"},a={header(y){return Ne(y)?y.__isVue?["div",n,"VueInstance"]:Fe(y)?["div",{},["span",n,u(y)],"<",c(y.value),">"]:no(y)?["div",{},["span",n,ha(y)?"ShallowReactive":"Reactive"],"<",c(y),`>${Os(y)?" (readonly)":""}`]:Os(y)?["div",{},["span",n,ha(y)?"ShallowReadonly":"Readonly"],"<",c(y),">"]:null:null},hasBody(y){return y&&y.__isVue},body(y){if(y&&y.__isVue)return["div",{},...r(y.$)]}};function r(y){const h=[];y.type.props&&y.props&&h.push(i("props",me(y.props))),y.setupState!==Re&&h.push(i("setup",y.setupState)),y.data!==Re&&h.push(i("data",me(y.data)));const m=p(y,"computed");m&&h.push(i("computed",m));const f=p(y,"inject");return f&&h.push(i("injected",f)),h.push(["div",{},["span",{style:l.style+";opacity:0.66"},"$ (internal): "],["object",{object:y}]]),h}function i(y,h){return h=He({},h),Object.keys(h).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},y],["div",{style:"padding-left:1.25em"},...Object.keys(h).map(m=>["div",{},["span",l,m+": "],c(h[m],!1)])]]:["span",{}]}function c(y,h=!0){return typeof y=="number"?["span",s,y]:typeof y=="string"?["span",o,JSON.stringify(y)]:typeof y=="boolean"?["span",l,y]:Ne(y)?["object",{object:h?me(y):y}]:["span",o,String(y)]}function p(y,h){const m=y.type;if(fe(m))return;const f={};for(const B in y.ctx)d(m,B,h)&&(f[B]=y.ctx[B]);return f}function d(y,h,m){const f=y[m];if(de(f)&&f.includes(h)||Ne(f)&&h in f||y.extends&&d(y.extends,h,m)||y.mixins&&y.mixins.some(B=>d(B,h,m)))return!0}function u(y){return ha(y)?"ShallowRef":y.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(a):window.devtoolsFormatters=[a]}const El="3.2.47",lg="http://www.w3.org/2000/svg",Ks=typeof document<"u"?document:null,pc=Ks&&Ks.createElement("template"),ag={insert:(n,s,o)=>{s.insertBefore(n,o||null)},remove:n=>{const s=n.parentNode;s&&s.removeChild(n)},createElement:(n,s,o,l)=>{const a=s?Ks.createElementNS(lg,n):Ks.createElement(n,o?{is:o}:void 0);return n==="select"&&l&&l.multiple!=null&&a.setAttribute("multiple",l.multiple),a},createText:n=>Ks.createTextNode(n),createComment:n=>Ks.createComment(n),setText:(n,s)=>{n.nodeValue=s},setElementText:(n,s)=>{n.textContent=s},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ks.querySelector(n),setScopeId(n,s){n.setAttribute(s,"")},insertStaticContent(n,s,o,l,a,r){const i=o?o.previousSibling:s.lastChild;if(a&&(a===r||a.nextSibling))for(;s.insertBefore(a.cloneNode(!0),o),!(a===r||!(a=a.nextSibling)););else{pc.innerHTML=l?`<svg>${n}</svg>`:n;const c=pc.content;if(l){const p=c.firstChild;for(;p.firstChild;)c.appendChild(p.firstChild);c.removeChild(p)}s.insertBefore(c,o)}return[i?i.nextSibling:s.firstChild,o?o.previousSibling:s.lastChild]}};function rg(n,s,o){const l=n._vtc;l&&(s=(s?[s,...l]:[...l]).join(" ")),s==null?n.removeAttribute("class"):o?n.setAttribute("class",s):n.className=s}function ig(n,s,o){const l=n.style,a=Ue(o);if(o&&!a){if(s&&!Ue(s))for(const r in s)o[r]==null&&tr(l,r,"");for(const r in o)tr(l,r,o[r])}else{const r=l.display;a?s!==o&&(l.cssText=o):s&&n.removeAttribute("style"),"_vod"in n&&(l.display=r)}}const cg=/[^\\];\s*$/,dc=/\s*!important$/;function tr(n,s,o){if(de(o))o.forEach(l=>tr(n,s,l));else if(o==null&&(o=""),cg.test(o)&&N(`Unexpected semicolon at the end of '${s}' style value: '${o}'`),s.startsWith("--"))n.setProperty(s,o);else{const l=pg(n,s);dc.test(o)?n.setProperty(ds(l),o.replace(dc,""),"important"):n[l]=o}}const uc=["Webkit","Moz","ms"],fa={};function pg(n,s){const o=fa[s];if(o)return o;let l=Xn(s);if(l!=="filter"&&l in n)return fa[s]=l;l=ro(l);for(let a=0;a<uc.length;a++){const r=uc[a]+l;if(r in n)return fa[s]=r}return s}const yc="http://www.w3.org/1999/xlink";function dg(n,s,o,l,a){if(l&&s.startsWith("xlink:"))o==null?n.removeAttributeNS(yc,s.slice(6,s.length)):n.setAttributeNS(yc,s,o);else{const r=$h(s);o==null||r&&!od(o)?n.removeAttribute(s):n.setAttribute(s,r?"":o)}}function ug(n,s,o,l,a,r,i){if(s==="innerHTML"||s==="textContent"){l&&i(l,a,r),n[s]=o??"";return}if(s==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=o;const p=o??"";(n.value!==p||n.tagName==="OPTION")&&(n.value=p),o==null&&n.removeAttribute(s);return}let c=!1;if(o===""||o==null){const p=typeof n[s];p==="boolean"?o=od(o):o==null&&p==="string"?(o="",c=!0):p==="number"&&(o=0,c=!0)}try{n[s]=o}catch(p){c||N(`Failed setting prop "${s}" on <${n.tagName.toLowerCase()}>: value ${o} is invalid.`,p)}c&&n.removeAttribute(s)}function ko(n,s,o,l){n.addEventListener(s,o,l)}function yg(n,s,o,l){n.removeEventListener(s,o,l)}function hg(n,s,o,l,a=null){const r=n._vei||(n._vei={}),i=r[s];if(l&&i)i.value=l;else{const[c,p]=fg(s);if(l){const d=r[s]=Bg(l,a);ko(n,c,d,p)}else i&&(yg(n,c,i,p),r[s]=void 0)}}const hc=/(?:Once|Passive|Capture)$/;function fg(n){let s;if(hc.test(n)){s={};let l;for(;l=n.match(hc);)n=n.slice(0,n.length-l[0].length),s[l[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ds(n.slice(2)),s]}let ma=0;const mg=Promise.resolve(),gg=()=>ma||(mg.then(()=>ma=0),ma=Date.now());function Bg(n,s){const o=l=>{if(!l._vts)l._vts=Date.now();else if(l._vts<=o.attached)return;Mn(Ag(l,o.value),s,5,[l])};return o.value=n,o.attached=gg(),o}function Ag(n,s){if(de(s)){const o=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{o.call(n),n._stopped=!0},s.map(l=>a=>!a._stopped&&l&&l(a))}else return s}const fc=/^on[a-z]/,Cg=(n,s,o,l,a=!1,r,i,c,p)=>{s==="class"?rg(n,l,a):s==="style"?ig(n,o,l):Ot(s)?gl(s)||hg(n,s,o,l,i):(s[0]==="."?(s=s.slice(1),!0):s[0]==="^"?(s=s.slice(1),!1):bg(n,s,l,a))?ug(n,s,l,r,i,c,p):(s==="true-value"?n._trueValue=l:s==="false-value"&&(n._falseValue=l),dg(n,s,l,a))};function bg(n,s,o,l){return l?!!(s==="innerHTML"||s==="textContent"||s in n&&fc.test(s)&&fe(o)):s==="spellcheck"||s==="draggable"||s==="translate"||s==="form"||s==="list"&&n.tagName==="INPUT"||s==="type"&&n.tagName==="TEXTAREA"||fc.test(s)&&Ue(o)?!1:s in n}const Bs="transition",Vo="animation",fu={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},kg=He({},em.props,fu),qs=(n,s=[])=>{de(n)?n.forEach(o=>o(...s)):n&&n(...s)},mc=n=>n?de(n)?n.some(s=>s.length>1):n.length>1:!1;function _g(n){const s={};for(const Q in n)Q in fu||(s[Q]=n[Q]);if(n.css===!1)return s;const{name:o="v",type:l,duration:a,enterFromClass:r=`${o}-enter-from`,enterActiveClass:i=`${o}-enter-active`,enterToClass:c=`${o}-enter-to`,appearFromClass:p=r,appearActiveClass:d=i,appearToClass:u=c,leaveFromClass:y=`${o}-leave-from`,leaveActiveClass:h=`${o}-leave-active`,leaveToClass:m=`${o}-leave-to`}=n,f=Dg(a),B=f&&f[0],A=f&&f[1],{onBeforeEnter:D,onEnter:b,onEnterCancelled:_,onLeave:w,onLeaveCancelled:P,onBeforeAppear:W=D,onAppear:K=b,onAppearCancelled:F=_}=s,H=(Q,_e,Pe)=>{Cs(Q,_e?u:c),Cs(Q,_e?d:i),Pe&&Pe()},le=(Q,_e)=>{Q._isLeaving=!1,Cs(Q,y),Cs(Q,m),Cs(Q,h),_e&&_e()},ye=Q=>(_e,Pe)=>{const Ie=Q?K:b,qe=()=>H(_e,Q,Pe);qs(Ie,[_e,qe]),gc(()=>{Cs(_e,Q?p:r),ls(_e,Q?u:c),mc(Ie)||Bc(_e,l,B,qe)})};return He(s,{onBeforeEnter(Q){qs(D,[Q]),ls(Q,r),ls(Q,i)},onBeforeAppear(Q){qs(W,[Q]),ls(Q,p),ls(Q,d)},onEnter:ye(!1),onAppear:ye(!0),onLeave(Q,_e){Q._isLeaving=!0;const Pe=()=>le(Q,_e);ls(Q,y),gu(),ls(Q,h),gc(()=>{Q._isLeaving&&(Cs(Q,y),ls(Q,m),mc(w)||Bc(Q,l,A,Pe))}),qs(w,[Q,Pe])},onEnterCancelled(Q){H(Q,!1),qs(_,[Q])},onAppearCancelled(Q){H(Q,!0),qs(F,[Q])},onLeaveCancelled(Q){le(Q),qs(P,[Q])}})}function Dg(n){if(n==null)return null;if(Ne(n))return[ga(n.enter),ga(n.leave)];{const s=ga(n);return[s,s]}}function ga(n){const s=Nh(n);return Ef(s,"<transition> explicit duration"),s}function ls(n,s){s.split(/\s+/).forEach(o=>o&&n.classList.add(o)),(n._vtc||(n._vtc=new Set)).add(s)}function Cs(n,s){s.split(/\s+/).forEach(l=>l&&n.classList.remove(l));const{_vtc:o}=n;o&&(o.delete(s),o.size||(n._vtc=void 0))}function gc(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let vg=0;function Bc(n,s,o,l){const a=n._endId=++vg,r=()=>{a===n._endId&&l()};if(o)return setTimeout(r,o);const{type:i,timeout:c,propCount:p}=mu(n,s);if(!i)return l();const d=i+"end";let u=0;const y=()=>{n.removeEventListener(d,h),r()},h=m=>{m.target===n&&++u>=p&&y()};setTimeout(()=>{u<p&&y()},c+1),n.addEventListener(d,h)}function mu(n,s){const o=window.getComputedStyle(n),l=f=>(o[f]||"").split(", "),a=l(`${Bs}Delay`),r=l(`${Bs}Duration`),i=Ac(a,r),c=l(`${Vo}Delay`),p=l(`${Vo}Duration`),d=Ac(c,p);let u=null,y=0,h=0;s===Bs?i>0&&(u=Bs,y=i,h=r.length):s===Vo?d>0&&(u=Vo,y=d,h=p.length):(y=Math.max(i,d),u=y>0?i>d?Bs:Vo:null,h=u?u===Bs?r.length:p.length:0);const m=u===Bs&&/\b(transform|all)(,|$)/.test(l(`${Bs}Property`).toString());return{type:u,timeout:y,propCount:h,hasTransform:m}}function Ac(n,s){for(;n.length<s.length;)n=n.concat(n);return Math.max(...s.map((o,l)=>Cc(o)+Cc(n[l])))}function Cc(n){return Number(n.slice(0,-1).replace(",","."))*1e3}function gu(){return document.body.offsetHeight}const Bu=new WeakMap,Au=new WeakMap,Cu={name:"TransitionGroup",props:He({},kg,{tag:String,moveClass:String}),setup(n,{slots:s}){const o=$n(),l=Ud();let a,r;return Zl(()=>{if(!a.length)return;const i=n.moveClass||`${n.name||"v"}-move`;if(!Sg(a[0].el,o.vnode.el,i))return;a.forEach(Eg),a.forEach(Ig);const c=a.filter($g);gu(),c.forEach(p=>{const d=p.el,u=d.style;ls(d,i),u.transform=u.webkitTransform=u.transitionDuration="";const y=d._moveCb=h=>{h&&h.target!==d||(!h||/transform$/.test(h.propertyName))&&(d.removeEventListener("transitionend",y),d._moveCb=null,Cs(d,i))};d.addEventListener("transitionend",y)})}),()=>{const i=me(n),c=_g(i);let p=i.tag||Te;a=r,r=s.default?ni(s.default()):[];for(let d=0;d<r.length;d++){const u=r[d];u.key!=null?Po(u,bt(u,c,l,o)):N("<TransitionGroup> children must be keyed.")}if(a)for(let d=0;d<a.length;d++){const u=a[d];Po(u,bt(u,c,l,o)),Bu.set(u,u.el.getBoundingClientRect())}return I(p,null,r)}}},xg=n=>delete n.mode;Cu.props;const wg=Cu;function Eg(n){const s=n.el;s._moveCb&&s._moveCb(),s._enterCb&&s._enterCb()}function Ig(n){Au.set(n,n.el.getBoundingClientRect())}function $g(n){const s=Bu.get(n),o=Au.get(n),l=s.left-o.left,a=s.top-o.top;if(l||a){const r=n.el.style;return r.transform=r.webkitTransform=`translate(${l}px,${a}px)`,r.transitionDuration="0s",n}}function Sg(n,s,o){const l=n.cloneNode();n._vtc&&n._vtc.forEach(i=>{i.split(/\s+/).forEach(c=>c&&l.classList.remove(c))}),o.split(/\s+/).forEach(i=>i&&l.classList.add(i)),l.style.display="none";const a=s.nodeType===1?s:s.parentNode;a.appendChild(l);const{hasTransform:r}=mu(l);return a.removeChild(l),r}const bc=n=>{const s=n.props["onUpdate:modelValue"]||!1;return de(s)?o=>Ds(s,o):s};function Fg(n){n.target.composing=!0}function kc(n){const s=n.target;s.composing&&(s.composing=!1,s.dispatchEvent(new Event("input")))}const Pg={created(n,{modifiers:{lazy:s,trim:o,number:l}},a){n._assign=bc(a);const r=l||a.props&&a.props.type==="number";ko(n,s?"change":"input",i=>{if(i.target.composing)return;let c=n.value;o&&(c=c.trim()),r&&(c=Ra(c)),n._assign(c)}),o&&ko(n,"change",()=>{n.value=n.value.trim()}),s||(ko(n,"compositionstart",Fg),ko(n,"compositionend",kc),ko(n,"change",kc))},mounted(n,{value:s}){n.value=s??""},beforeUpdate(n,{value:s,modifiers:{lazy:o,trim:l,number:a}},r){if(n._assign=bc(r),n.composing||document.activeElement===n&&n.type!=="range"&&(o||l&&n.value.trim()===s||(a||n.type==="number")&&Ra(n.value)===s))return;const i=s??"";n.value!==i&&(n.value=i)}},Tg={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},_c=(n,s)=>o=>{if(!("key"in o))return;const l=ds(o.key);if(s.some(a=>a===l||Tg[a]===l))return n(o)},bu={beforeMount(n,{value:s},{transition:o}){n._vod=n.style.display==="none"?"":n.style.display,o&&s?o.beforeEnter(n):Uo(n,s)},mounted(n,{value:s},{transition:o}){o&&s&&o.enter(n)},updated(n,{value:s,oldValue:o},{transition:l}){!s!=!o&&(l?s?(l.beforeEnter(n),Uo(n,!0),l.enter(n)):l.leave(n,()=>{Uo(n,!1)}):Uo(n,s))},beforeUnmount(n,{value:s}){Uo(n,s)}};function Uo(n,s){n.style.display=s?n._vod:"none"}const Mg=He({patchProp:Cg},ag);let Dc;function Og(){return Dc||(Dc=Tm(Mg))}const Ng=(...n)=>{const s=Og().createApp(...n);Lg(s),Wg(s);const{mount:o}=s;return s.mount=l=>{const a=Rg(l);if(!a)return;const r=s._component;!fe(r)&&!r.render&&!r.template&&(r.template=a.innerHTML),a.innerHTML="";const i=o(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),i},s};function Lg(n){Object.defineProperty(n.config,"isNativeTag",{value:s=>sd(s)||Eh(s),writable:!1})}function Wg(n){{const s=n.config.isCustomElement;Object.defineProperty(n.config,"isCustomElement",{get(){return s},set(){N("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const o=n.config.compilerOptions,l='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(n.config,"compilerOptions",{get(){return N(l),o},set(){N(l)}})}}function Rg(n){if(Ue(n)){const s=document.querySelector(n);return s||N(`Failed to mount app: mount target selector "${n}" returned null.`),s}return window.ShadowRoot&&n instanceof window.ShadowRoot&&n.mode==="closed"&&N('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),n}function qg(){tg()}qg();function lr(n,s={},o){for(const l in n){const a=n[l],r=o?`${o}:${l}`:l;typeof a=="object"&&a!==null?lr(a,s,r):typeof a=="function"&&(s[r]=a)}return s}function Vg(n,s){return n.reduce((o,l)=>o.then(()=>l.apply(void 0,s)),Promise.resolve())}function Ug(n,s){return Promise.all(n.map(o=>o.apply(void 0,s)))}function Ba(n,s){for(const o of n)o(s)}class jg{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(s,o,l={}){if(!s||typeof o!="function")return()=>{};const a=s;let r;for(;this._deprecatedHooks[s];)r=this._deprecatedHooks[s],s=r.to;if(r&&!l.allowDeprecated){let i=r.message;i||(i=`${a} hook has been deprecated`+(r.to?`, please use ${r.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(i)||(console.warn(i),this._deprecatedMessages.add(i))}return this._hooks[s]=this._hooks[s]||[],this._hooks[s].push(o),()=>{o&&(this.removeHook(s,o),o=void 0)}}hookOnce(s,o){let l,a=(...r)=>(typeof l=="function"&&l(),l=void 0,a=void 0,o(...r));return l=this.hook(s,a),l}removeHook(s,o){if(this._hooks[s]){const l=this._hooks[s].indexOf(o);l!==-1&&this._hooks[s].splice(l,1),this._hooks[s].length===0&&delete this._hooks[s]}}deprecateHook(s,o){this._deprecatedHooks[s]=typeof o=="string"?{to:o}:o;const l=this._hooks[s]||[];this._hooks[s]=void 0;for(const a of l)this.hook(s,a)}deprecateHooks(s){Object.assign(this._deprecatedHooks,s);for(const o in s)this.deprecateHook(o,s[o])}addHooks(s){const o=lr(s),l=Object.keys(o).map(a=>this.hook(a,o[a]));return()=>{for(const a of l.splice(0,l.length))a()}}removeHooks(s){const o=lr(s);for(const l in o)this.removeHook(l,o[l])}callHook(s,...o){return this.callHookWith(Vg,s,...o)}callHookParallel(s,...o){return this.callHookWith(Ug,s,...o)}callHookWith(s,o,...l){const a=this._before||this._after?{name:o,args:l,context:{}}:void 0;this._before&&Ba(this._before,a);const r=s(this._hooks[o]||[],l);return r instanceof Promise?r.finally(()=>{this._after&&a&&Ba(this._after,a)}):(this._after&&a&&Ba(this._after,a),r)}beforeEach(s){return this._before=this._before||[],this._before.push(s),()=>{const o=this._before.indexOf(s);o!==-1&&this._before.splice(o,1)}}afterEach(s){return this._after=this._after||[],this._after.push(s),()=>{const o=this._after.indexOf(s);o!==-1&&this._after.splice(o,1)}}}function Hg(){return new jg}function Gg(n){return Array.isArray(n)?n:[n]}const ku=["title","script","style","noscript"],ai=["base","meta","link","style","script","noscript"],Kg=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],zg=["base","title","titleTemplate","bodyAttrs","htmlAttrs"],Yg=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function _u(n){let s=9;for(let o=0;o<n.length;)s=Math.imul(s^n.charCodeAt(o++),9**9);return((s^s>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Il(n){return _u(`${n.tag}:${n.textContent||n.innerHTML||""}:${Object.entries(n.props).map(([s,o])=>`${s}:${String(o)}`).join(",")}`)}function Zg(n){let s=9;for(const o of n)for(let l=0;l<o.length;)s=Math.imul(s^o.charCodeAt(l++),9**9);return((s^s>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Du(n,s){const{props:o,tag:l}=n;if(zg.includes(l))return l;if(l==="link"&&o.rel==="canonical")return"canonical";if(o.charset)return"charset";const a=["id"];l==="meta"&&a.push("name","property","http-equiv");for(const r of a)if(typeof o[r]<"u"){const i=String(o[r]);return s&&!s(i)?!1:`${l}:${r}:${i}`}return!1}const nl=(n,s=!1,o)=>{const{tag:l,$el:a}=n;a&&(Object.entries(l.props).forEach(([r,i])=>{i=String(i);const c=`attr:${r}`;if(r==="class"){if(!i)return;for(const p of i.split(" ")){const d=`${c}:${p}`;o&&o(n,d,()=>a.classList.remove(p)),a.classList.contains(p)||a.classList.add(p)}return}o&&!r.startsWith("data-h-")&&o(n,c,()=>a.removeAttribute(r)),(s||a.getAttribute(r)!==i)&&a.setAttribute(r,i)}),ku.includes(l.tag)&&(l.textContent&&l.textContent!==a.textContent?a.textContent=l.textContent:l.innerHTML&&l.innerHTML!==a.innerHTML&&(a.innerHTML=l.innerHTML)))};let jo=!1;async function vu(n,s={}){var h,m;const o={shouldRender:!0};if(await n.hooks.callHook("dom:beforeRender",o),!o.shouldRender)return;const l=s.document||n.resolvedOptions.document||window.document,a=(await n.resolveTags()).map(c);if(n.resolvedOptions.experimentalHashHydration&&(jo=jo||n._hash||!1,jo)){const f=Zg(a.map(B=>B.tag._h));if(jo===f)return;jo=f}const r=n._popSideEffectQueue();n.headEntries().map(f=>f._sde).forEach(f=>{Object.entries(f).forEach(([B,A])=>{r[B]=A})});const i=(f,B,A)=>{B=`${f.renderId}:${B}`,f.entry&&(f.entry._sde[B]=A),delete r[B]};function c(f){const B=n.headEntries().find(D=>D._i===f._e),A={renderId:f._d||Il(f),$el:null,shouldRender:!0,tag:f,entry:B,markSideEffect:(D,b)=>i(A,D,b)};return A}const p=[],d={body:[],head:[]},u=f=>{n._elMap[f.renderId]=f.$el,p.push(f),i(f,"el",()=>{var B;(B=f.$el)==null||B.remove(),delete n._elMap[f.renderId]})};for(const f of a){if(await n.hooks.callHook("dom:beforeRenderTag",f),!f.shouldRender)continue;const{tag:B}=f;if(B.tag==="title"){l.title=B.textContent||"",p.push(f);continue}if(B.tag==="htmlAttrs"||B.tag==="bodyAttrs"){f.$el=l[B.tag==="htmlAttrs"?"documentElement":"body"],nl(f,!1,i),p.push(f);continue}if(f.$el=n._elMap[f.renderId],!f.$el&&B.key&&(f.$el=l.querySelector(`${(h=B.tagPosition)!=null&&h.startsWith("body")?"body":"head"} > ${B.tag}[data-h-${B._h}]`)),f.$el){f.tag._d&&nl(f),u(f);continue}d[(m=B.tagPosition)!=null&&m.startsWith("body")?"body":"head"].push(f)}const y={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(d).forEach(([f,B])=>{var D;if(!B.length)return;const A=(D=l==null?void 0:l[f])==null?void 0:D.children;if(A){for(const b of[...A].reverse()){const _=b.tagName.toLowerCase();if(!ai.includes(_))continue;const w=b.getAttributeNames().reduce((F,H)=>({...F,[H]:b.getAttribute(H)}),{}),P={tag:_,props:w};b.innerHTML&&(P.innerHTML=b.innerHTML);const W=Il(P);let K=B.findIndex(F=>(F==null?void 0:F.renderId)===W);if(K===-1){const F=Du(P);K=B.findIndex(H=>(H==null?void 0:H.tag._d)&&H.tag._d===F)}if(K!==-1){const F=B[K];F.$el=b,nl(F),u(F),delete B[K]}}B.forEach(b=>{const _=b.tag.tagPosition||"head";y[_]=y[_]||l.createDocumentFragment(),b.$el||(b.$el=l.createElement(b.tag.tag),nl(b,!0)),y[_].appendChild(b.$el),u(b)})}}),y.head&&l.head.appendChild(y.head),y.bodyOpen&&l.body.insertBefore(y.bodyOpen,l.body.firstChild),y.bodyClose&&l.body.appendChild(y.bodyClose);for(const f of p)await n.hooks.callHook("dom:renderTag",f);Object.values(r).forEach(f=>f())}let Aa=null;async function xu(n,s={}){function o(){return Aa=null,vu(n,s)}const l=s.delayFn||(a=>setTimeout(a,10));return Aa=Aa||new Promise(a=>l(()=>a(o())))}const Qg=n=>({hooks:{"entries:updated":function(s){if(typeof(n==null?void 0:n.document)>"u"&&typeof window>"u")return;let o=n==null?void 0:n.delayFn;!o&&typeof requestAnimationFrame<"u"&&(o=requestAnimationFrame),xu(s,{document:(n==null?void 0:n.document)||window.document,delayFn:o})}}});function Jg(n){var s;return((s=n==null?void 0:n.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:s.getAttribute("content"))||!1}const vc={critical:2,high:9,low:12,base:-1,title:1,meta:10};function xc(n){if(typeof n.tagPriority=="number")return n.tagPriority;if(n.tag==="meta"){if(n.props.charset)return-2;if(n.props["http-equiv"]==="content-security-policy")return 0}const s=n.tagPriority||n.tag;return s in vc?vc[s]:10}const Xg=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function e8(){return{hooks:{"tags:resolve":n=>{const s=o=>{var l;return(l=n.tags.find(a=>a._d===o))==null?void 0:l._p};for(const{prefix:o,offset:l}of Xg)for(const a of n.tags.filter(r=>typeof r.tagPriority=="string"&&r.tagPriority.startsWith(o))){const r=s(a.tagPriority.replace(o,""));typeof r<"u"&&(a._p=r+l)}n.tags.sort((o,l)=>o._p-l._p).sort((o,l)=>xc(o)-xc(l))}}}}const wc=(n,s)=>n==null?s||null:typeof n=="function"?n(s):n.replace("%s",s??""),n8=()=>({hooks:{"tags:resolve":n=>{const{tags:s}=n;let o=s.findIndex(a=>a.tag==="titleTemplate");const l=s.findIndex(a=>a.tag==="title");if(l!==-1&&o!==-1){const a=wc(s[o].textContent,s[l].textContent);a!==null?s[l].textContent=a||s[l].textContent:delete s[l]}else if(o!==-1){const a=wc(s[o].textContent);a!==null&&(s[o].textContent=a,s[o].tag="title",o=-1)}o!==-1&&delete s[o],n.tags=s.filter(Boolean)}}}),s8=()=>({hooks:{"tag:normalise":function({tag:n}){typeof n.props.body<"u"&&(n.tagPosition="bodyClose",delete n.props.body)}}}),wu=typeof window<"u",o8=()=>({hooks:{"tag:normalise":n=>{var r,i;const{tag:s,entry:o,resolvedOptions:l}=n;l.experimentalHashHydration===!0&&(s._h=Il(s));const a=typeof s.props._dynamic<"u";!ai.includes(s.tag)||!s.key||wu||(i=(r=Iu())==null?void 0:r.resolvedOptions)!=null&&i.document||(o._m==="server"||a)&&(s._h=s._h||Il(s),s.props[`data-h-${s._h}`]="")},"tags:resolve":n=>{n.tags=n.tags.map(s=>(delete s.props._dynamic,s))}}}),Ec=["script","link","bodyAttrs"],t8=()=>{const n=(s,o)=>{const l={},a={};Object.entries(o.props).forEach(([i,c])=>{i.startsWith("on")&&typeof c=="function"?a[i]=c:l[i]=c});let r;return s==="dom"&&o.tag==="script"&&typeof l.src=="string"&&typeof a.onload<"u"&&(r=l.src,delete l.src),{props:l,eventHandlers:a,delayedSrc:r}};return{hooks:{"ssr:render":function(s){s.tags=s.tags.map(o=>(!Ec.includes(o.tag)||!Object.entries(o.props).find(([l,a])=>l.startsWith("on")&&typeof a=="function")||(o.props=n("ssr",o).props),o))},"dom:beforeRenderTag":function(s){if(!Ec.includes(s.tag.tag)||!Object.entries(s.tag.props).find(([r,i])=>r.startsWith("on")&&typeof i=="function"))return;const{props:o,eventHandlers:l,delayedSrc:a}=n("dom",s.tag);Object.keys(l).length&&(s.tag.props=o,s.tag._eventHandlers=l,s.tag._delayedSrc=a)},"dom:renderTag":function(s){const o=s.$el;if(!s.tag._eventHandlers||!o)return;const l=s.tag.tag==="bodyAttrs"&&typeof window<"u"?window:o;Object.entries(s.tag._eventHandlers).forEach(([a,r])=>{const i=`${s.tag._d||s.tag._p}:${a}`,c=a.slice(2).toLowerCase(),p=`data-h-${c}`;if(s.markSideEffect(i,()=>{}),o.hasAttribute(p))return;const d=r;o.setAttribute(p,""),l.addEventListener(c,d),s.entry&&(s.entry._sde[i]=()=>{l.removeEventListener(c,d),o.removeAttribute(p)})}),s.tag._delayedSrc&&o.setAttribute("src",s.tag._delayedSrc)}}}},l8=["templateParams","htmlAttrs","bodyAttrs"],a8=n=>{n=n||{};const s=n.dedupeKeys||["hid","vmid","key"];return{hooks:{"tag:normalise":function({tag:o}){s.forEach(a=>{o.props[a]&&(o.key=o.props[a],delete o.props[a])});const l=o.key?`${o.tag}:${o.key}`:Du(o);l&&(o._d=l)},"tags:resolve":function(o){const l={};o.tags.forEach(r=>{const i=r._d||r._p,c=l[i];if(c){let p=r==null?void 0:r.tagDuplicateStrategy;if(!p&&l8.includes(r.tag)&&(p="merge"),p==="merge"){const u=c.props;["class","style"].forEach(y=>{r.props[y]&&u[y]&&(y==="style"&&!u[y].endsWith(";")&&(u[y]+=";"),r.props[y]=`${u[y]} ${r.props[y]}`)}),l[i].props={...u,...r.props};return}else if(r._e===c._e){c._duped=c._duped||[],r._d=`${c._d}:${c._duped.length+1}`,c._duped.push(r);return}const d=Object.keys(r.props).length;if((d===0||d===1&&typeof r.props["data-h-key"]<"u")&&!r.innerHTML&&!r.textContent){delete l[i];return}}l[i]=r});const a=[];Object.values(l).forEach(r=>{const i=r._duped;delete r._duped,a.push(r),i&&a.push(...i)}),o.tags=a}}}};function Ca(n,s){const o=(a,r)=>{let i;return r==="pageTitle"||r==="s"?i=s.pageTitle:r.includes(".")?i=r.split(".").reduce((c,p)=>c[p]||"",s):i=s[r],i||""};let l=n.replace(/%(\w+\.+\w+)/g,o).replace(/%(\w+)/g,o).trim();return s.separator&&(l.endsWith(s.separator)&&(l=l.slice(0,-s.separator.length).trim()),l.startsWith(s.separator)&&(l=l.slice(s.separator.length).trim()),l=l.replace(new RegExp(`\\${s.separator}\\s*\\${s.separator}`,"g"),s.separator)),l}function r8(){return{hooks:{"tags:resolve":n=>{var r;const{tags:s}=n,o=(r=s.find(i=>i.tag==="title"))==null?void 0:r.textContent,l=s.findIndex(i=>i.tag==="templateParams"),a=l!==-1?s[l].textContent:{};a.pageTitle=a.pageTitle||o||"";for(const i of s)["titleTemplate","title"].includes(i.tag)&&typeof i.textContent=="string"?i.textContent=Ca(i.textContent,a):i.tag==="meta"&&typeof i.props.content=="string"?i.props.content=Ca(i.props.content,a):i.tag==="script"&&["application/json","application/ld+json"].includes(i.props.type)&&typeof i.innerHTML=="string"&&(i.innerHTML=Ca(i.innerHTML,a));n.tags=s.filter(i=>i.tag!=="templateParams")}}}}let Eu;const i8=n=>Eu=n,Iu=()=>Eu;async function c8(n,s){const o={tag:n,props:{}};return["title","titleTemplate","templateParams"].includes(n)?(o.textContent=s instanceof Promise?await s:s,o):typeof s=="string"?["script","noscript","style"].includes(n)?(n==="script"&&(/^(https?:)?\/\//.test(s)||s.startsWith("/"))?o.props.src=s:(o.innerHTML=s,o.key=_u(s)),o):!1:(o.props=await d8(n,{...s}),o.props.children&&(o.props.innerHTML=o.props.children),delete o.props.children,Object.keys(o.props).filter(l=>Yg.includes(l)).forEach(l=>{(!["innerHTML","textContent"].includes(l)||ku.includes(o.tag))&&(o[l]=o.props[l]),delete o.props[l]}),["innerHTML","textContent"].forEach(l=>{if(o.tag==="script"&&typeof o[l]=="string"&&["application/ld+json","application/json"].includes(o.props.type))try{o[l]=JSON.parse(o[l])}catch{o[l]=""}typeof o[l]=="object"&&(o[l]=JSON.stringify(o[l]))}),o.props.class&&(o.props.class=p8(o.props.class)),o.props.content&&Array.isArray(o.props.content)?o.props.content.map(l=>({...o,props:{...o.props,content:l}})):o)}function p8(n){return typeof n=="object"&&!Array.isArray(n)&&(n=Object.keys(n).filter(s=>n[s])),(Array.isArray(n)?n.join(" "):n).split(" ").filter(s=>s.trim()).filter(Boolean).join(" ")}async function d8(n,s){for(const o of Object.keys(s)){const l=o.startsWith("data-");s[o]instanceof Promise&&(s[o]=await s[o]),String(s[o])==="true"?s[o]=l?"true":"":String(s[o])==="false"&&(l?s[o]="false":delete s[o])}return s}const u8=10;async function y8(n){const s=[];return Object.entries(n.resolvedInput).filter(([o,l])=>typeof l<"u"&&Kg.includes(o)).forEach(([o,l])=>{const a=Gg(l);s.push(...a.map(r=>c8(o,r)).flat())}),(await Promise.all(s)).flat().filter(Boolean).map((o,l)=>(o._e=n._i,o._p=(n._i<<u8)+l,o))}const h8=()=>[a8(),e8(),r8(),n8(),o8(),t8(),s8()],f8=(n={})=>[Qg({document:n==null?void 0:n.document,delayFn:n==null?void 0:n.domDelayFn})];function m8(n={}){const s=g8({...n,plugins:[...f8(n),...(n==null?void 0:n.plugins)||[]]});return n.experimentalHashHydration&&s.resolvedOptions.document&&(s._hash=Jg(s.resolvedOptions.document)),i8(s),s}function g8(n={}){let s=[],o={},l=0;const a=Hg();n!=null&&n.hooks&&a.addHooks(n.hooks),n.plugins=[...h8(),...(n==null?void 0:n.plugins)||[]],n.plugins.forEach(c=>c.hooks&&a.addHooks(c.hooks)),n.document=n.document||(wu?document:void 0);const r=()=>a.callHook("entries:updated",i),i={resolvedOptions:n,headEntries(){return s},get hooks(){return a},use(c){c.hooks&&a.addHooks(c.hooks)},push(c,p){const d={_i:l++,input:c,_sde:{}};return p!=null&&p.mode&&(d._m=p==null?void 0:p.mode),p!=null&&p.transform&&(d._t=p==null?void 0:p.transform),s.push(d),r(),{dispose(){s=s.filter(u=>u._i!==d._i?!0:(o={...o,...u._sde||{}},u._sde={},r(),!1))},patch(u){s=s.map(y=>(y._i===d._i&&(d.input=y.input=u,r()),y))}}},async resolveTags(){const c={tags:[],entries:[...s]};await a.callHook("entries:resolve",c);for(const p of c.entries){const d=p._t||(u=>u);p.resolvedInput=d(p.resolvedInput||p.input);for(const u of await y8(p)){const y={tag:u,entry:p,resolvedOptions:i.resolvedOptions};await a.callHook("tag:normalise",y),c.tags.push(y.tag)}}return await a.callHook("tags:resolve",c),c.tags},_popSideEffectQueue(){const c={...o};return o={},c},_elMap:{}};return i.hooks.callHook("init",i),i}function B8(n){return typeof n=="function"?n():v(n)}function $l(n,s=""){if(n instanceof Promise)return n;const o=B8(n);if(!n||!o)return o;if(Array.isArray(o))return o.map(l=>$l(l,s));if(typeof o=="object"){let l=!1;const a=Object.fromEntries(Object.entries(o).map(([r,i])=>r==="titleTemplate"||r.startsWith("on")?[r,v(i)]:((typeof i=="function"||Fe(i))&&(l=!0),[r,$l(i,r)])));return l&&ai.includes(String(s))&&(a._dynamic=!0),a}return o}const A8=El.startsWith("3"),C8=typeof window<"u",$u="usehead";function ri(){return $n()&&T($u)||Iu()}function b8(n){return{install(o){A8&&(o.config.globalProperties.$unhead=n,o.config.globalProperties.$head=n,o.provide($u,n))}}.install}function k8(n={}){const s=m8({...n,domDelayFn:o=>setTimeout(()=>sn(()=>o()),10),plugins:[_8(),...(n==null?void 0:n.plugins)||[]]});return s.install=b8(s),s}const _8=()=>({hooks:{"entries:resolve":function(n){for(const s of n.entries)s.resolvedInput=$l(s.input)}}});function D8(n,s={}){const o=ri(),l=Z(!1),a=Z({});uo(()=>{a.value=l.value?{}:$l(n)});const r=o.push(a.value,s);return Ce(a,c=>{r.patch(c)}),$n()&&(Rt(()=>{r.dispose()}),Kd(()=>{l.value=!0}),Gd(()=>{l.value=!1})),r}function v8(n,s={}){return ri().push(n,s)}function ii(n,s={}){var l;const o=ri();if(o){const a=C8||!!((l=o.resolvedOptions)!=null&&l.document);return s.mode==="server"&&a||s.mode==="client"&&!a?void 0:a?D8(n,s):v8(n,s)}}const x8=n=>ii({htmlAttrs:n});function w8(n,s){const o=k8(s||{}),l={unhead:o,install(a){El.startsWith("3")&&(a.config.globalProperties.$head=o,a.provide("usehead",o))},use(a){o.use(a)},resolveTags(){return o.resolveTags()},headEntries(){return o.headEntries()},headTags(){return o.resolveTags()},push(a,r){return o.push(a,r)},addEntry(a,r){return o.push(a,r)},addHeadObjs(a,r){return o.push(a,r)},addReactiveEntry(a,r){const i=ii(a,r);return typeof i<"u"?i.dispose:()=>{}},removeHeadObjs(){},updateDOM(a,r){r?vu(o,{document:a}):xu(o,{delayFn:i=>setTimeout(()=>i(),50),document:a})},internalHooks:o.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return o.addHeadObjs=l.addHeadObjs,o.updateDOM=l.updateDOM,o.hooks.hook("dom:beforeRender",a=>{for(const r of l.hooks["before:dom"])r()===!1&&(a.shouldRender=!1)}),n&&l.addHeadObjs(n),l}const rt=Symbol("v-click-clicks"),zs=Symbol("v-click-clicks-elements"),ar=Symbol("v-click-clicks-order-map"),it=Symbol("v-click-clicks-disabled"),Su=Symbol("slidev-slide-scale"),q=Symbol("slidev-slidev-context"),E8=Symbol("slidev-route"),I8=Symbol("slidev-slide-context"),Gs="slidev-vclick-target",ba="slidev-vclick-hidden",$8="slidev-vclick-fade",ka="slidev-vclick-hidden-explicitly",Ho="slidev-vclick-current",sl="slidev-vclick-prior",S8=["localhost","127.0.0.1"];let F8=(n=21)=>crypto.getRandomValues(new Uint8Array(n)).reduce((s,o)=>(o&=63,o<36?s+=o.toString(36):o<62?s+=(o-26).toString(36).toUpperCase():o>62?s+="-":s+="_",s),"");function P8(n){return n=n??[],Array.isArray(n)?n:[n]}function rr(n,s){if(!n)return!1;const o=n.indexOf(s);return o>=0?(n.splice(o,1),!0):!1}function T8(...n){let s,o,l;n.length===1?(s=0,l=1,[o]=n):[s,o,l=1]=n;const a=[];let r=s;for(;r<o;)a.push(r),r+=l||1;return a}function M8(n){return n!=null}function O8(n,s){return Object.fromEntries(Object.entries(n).map(([o,l])=>s(o,l)).filter(M8))}const st={theme:"seriph",title:"Behat Formation",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:`<h2>Slidev Starter Template</h2>
<p>Presentation slides for developers.</p>
<p>Learn more at <a href="https://sli.dev" target="_blank" rel="noopener">Sli.dev</a></p>
`,highlighter:"shiki",lineNumbers:!1,colorSchema:"light",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"PT Serif"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:['"PT Serif"',"ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"PT Mono"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["PT Serif","PT Mono"],provider:"google",local:[],italic:!0,weights:["400","700"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",presenter:!0,htmlAttrs:{},transition:"slide-left",background:!1,class:"text-center"},Se=st,$s=Se.aspectRatio??16/9,Ss=Se.canvasWidth??980,ci=Math.ceil(Ss/$s),pi=S(()=>O8(Se.themeConfig||{},(n,s)=>[`--slidev-theme-${n}`,s]));function Nn(n,s,o){Object.defineProperty(n,s,{value:o,writable:!0,enumerable:!1})}const ho=je({page:0,clicks:0});let N8=[],L8=[];Nn(ho,"$syncUp",!0);Nn(ho,"$syncDown",!0);Nn(ho,"$paused",!1);Nn(ho,"$onSet",n=>N8.push(n));Nn(ho,"$onPatch",n=>L8.push(n));Nn(ho,"$patch",async()=>!1);function Fu(n,s,o=!1){const l=[];let a=!1,r=!1,i,c;const p=je(s);function d(m){l.push(m)}function u(m,f){p[m]!==f&&(clearTimeout(i),a=!0,p[m]=f,i=setTimeout(()=>a=!1,0))}function y(m){a||(clearTimeout(c),r=!0,Object.entries(m).forEach(([f,B])=>{p[f]=B}),c=setTimeout(()=>r=!1,0))}function h(m){let f;o?o&&window.addEventListener("storage",A=>{A&&A.key===m&&A.newValue&&y(JSON.parse(A.newValue))}):(f=new BroadcastChannel(m),f.addEventListener("message",A=>y(A.data)));function B(){!o&&f&&!r?f.postMessage(me(p)):o&&!r&&window.localStorage.setItem(m,JSON.stringify(p)),a||l.forEach(A=>A(p))}if(Ce(p,B,{deep:!0}),o){const A=window.localStorage.getItem(m);A&&y(JSON.parse(A))}}return{init:h,onPatch:d,patch:u,state:p}}const{init:W8,onPatch:R8,patch:Go,state:_a}=Fu(ho,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),fo=je({});let q8=[],V8=[];Nn(fo,"$syncUp",!0);Nn(fo,"$syncDown",!0);Nn(fo,"$paused",!1);Nn(fo,"$onSet",n=>q8.push(n));Nn(fo,"$onPatch",n=>V8.push(n));Nn(fo,"$patch",async()=>!1);const{init:U8,onPatch:j8,patch:Pu,state:Sl}=Fu(fo,{},!1),H8="modulepreload",G8=function(n){return"/behat-formation/"+n},Ic={},Fs=function(s,o,l){if(!o||o.length===0)return s();const a=document.getElementsByTagName("link");return Promise.all(o.map(r=>{if(r=G8(r),r in Ic)return;Ic[r]=!0;const i=r.endsWith(".css"),c=i?'[rel="stylesheet"]':"";if(!!l)for(let u=a.length-1;u>=0;u--){const y=a[u];if(y.href===r&&(!i||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${c}`))return;const d=document.createElement("link");if(d.rel=i?"stylesheet":H8,i||(d.as="script",d.crossOrigin=""),d.href=r,document.head.appendChild(d),i)return new Promise((u,y)=>{d.addEventListener("load",u),d.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>s())};var $c;const jn=typeof window<"u",K8=n=>typeof n<"u",z8=Object.prototype.toString,vt=n=>typeof n=="function",Y8=n=>typeof n=="number",Tu=n=>typeof n=="string",ir=n=>z8.call(n)==="[object Object]",cr=()=>+Date.now(),$o=()=>{},Z8=jn&&(($c=window==null?void 0:window.navigator)==null?void 0:$c.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function ln(n){return typeof n=="function"?n():v(n)}function Q8(n,s){function o(...l){return new Promise((a,r)=>{Promise.resolve(n(()=>s.apply(this,l),{fn:s,thisArg:this,args:l})).then(a).catch(r)})}return o}const Mu=n=>n();function J8(n=Mu){const s=Z(!0);function o(){s.value=!1}function l(){s.value=!0}const a=(...r)=>{s.value&&n(...r)};return{isActive:Zn(s),pause:o,resume:l,eventFilter:a}}function X8(n){return n}function eB(n,s){var o;if(typeof n=="number")return n+s;const l=((o=n.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:o[0])||"",a=n.slice(l.length),r=parseFloat(l)+s;return Number.isNaN(r)?n:r+a}function nB(n,s){let o,l,a;const r=Z(!0),i=()=>{r.value=!0,a()};Ce(n,i,{flush:"sync"});const c=vt(s)?s:s.get,p=vt(s)?void 0:s.set,d=wd((u,y)=>(l=u,a=y,{get(){return r.value&&(o=c(),r.value=!1),l(),o},set(h){p==null||p(h)}}));return Object.isExtensible(d)&&(d.trigger=i),d}function ns(n){return Ur()?(dd(n),!0):!1}function sB(n){if(!Fe(n))return je(n);const s=new Proxy({},{get(o,l,a){return v(Reflect.get(n.value,l,a))},set(o,l,a){return Fe(n.value[l])&&!Fe(a)?n.value[l].value=a:n.value[l]=a,!0},deleteProperty(o,l){return Reflect.deleteProperty(n.value,l)},has(o,l){return Reflect.has(n.value,l)},ownKeys(){return Object.keys(n.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return je(s)}function Ou(n){return typeof n=="function"?S(n):Z(n)}var oB=Object.defineProperty,tB=Object.defineProperties,lB=Object.getOwnPropertyDescriptors,Sc=Object.getOwnPropertySymbols,aB=Object.prototype.hasOwnProperty,rB=Object.prototype.propertyIsEnumerable,Fc=(n,s,o)=>s in n?oB(n,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[s]=o,iB=(n,s)=>{for(var o in s||(s={}))aB.call(s,o)&&Fc(n,o,s[o]);if(Sc)for(var o of Sc(s))rB.call(s,o)&&Fc(n,o,s[o]);return n},cB=(n,s)=>tB(n,lB(s));function pB(n){if(!Fe(n))return Af(n);const s=Array.isArray(n.value)?new Array(n.value.length):{};for(const o in n.value)s[o]=wd(()=>({get(){return n.value[o]},set(l){if(Array.isArray(n.value)){const a=[...n.value];a[o]=l,n.value=a}else{const a=cB(iB({},n.value),{[o]:l});Object.setPrototypeOf(a,n.value),n.value=a}}}));return s}function di(n,s=!0){$n()?yo(n):s?n():sn(n)}function dB(n){$n()&&Ql(n)}function uB(n,s=1e3,o={}){const{immediate:l=!0,immediateCallback:a=!1}=o;let r=null;const i=Z(!1);function c(){r&&(clearInterval(r),r=null)}function p(){i.value=!1,c()}function d(){const u=ln(s);u<=0||(i.value=!0,a&&n(),c(),r=setInterval(n,u))}if(l&&jn&&d(),Fe(s)||vt(s)){const u=Ce(s,()=>{i.value&&jn&&d()});ns(u)}return ns(p),{isActive:i,pause:p,resume:d}}function yB(n,s,o={}){const{immediate:l=!0}=o,a=Z(!1);let r=null;function i(){r&&(clearTimeout(r),r=null)}function c(){a.value=!1,i()}function p(...d){i(),a.value=!0,r=setTimeout(()=>{a.value=!1,r=null,n(...d)},ln(s))}return l&&(a.value=!0,jn&&p()),ns(c),{isPending:Zn(a),start:p,stop:c}}function Nu(n=!1,s={}){const{truthyValue:o=!0,falsyValue:l=!1}=s,a=Fe(n),r=Z(n);function i(c){if(arguments.length)return r.value=c,r.value;{const p=ln(o);return r.value=r.value===p?ln(l):p,r.value}}return a?i:[r,i]}var Pc=Object.getOwnPropertySymbols,hB=Object.prototype.hasOwnProperty,fB=Object.prototype.propertyIsEnumerable,mB=(n,s)=>{var o={};for(var l in n)hB.call(n,l)&&s.indexOf(l)<0&&(o[l]=n[l]);if(n!=null&&Pc)for(var l of Pc(n))s.indexOf(l)<0&&fB.call(n,l)&&(o[l]=n[l]);return o};function gB(n,s,o={}){const l=o,{eventFilter:a=Mu}=l,r=mB(l,["eventFilter"]);return Ce(n,Q8(a,s),r)}var BB=Object.defineProperty,AB=Object.defineProperties,CB=Object.getOwnPropertyDescriptors,Fl=Object.getOwnPropertySymbols,Lu=Object.prototype.hasOwnProperty,Wu=Object.prototype.propertyIsEnumerable,Tc=(n,s,o)=>s in n?BB(n,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[s]=o,bB=(n,s)=>{for(var o in s||(s={}))Lu.call(s,o)&&Tc(n,o,s[o]);if(Fl)for(var o of Fl(s))Wu.call(s,o)&&Tc(n,o,s[o]);return n},kB=(n,s)=>AB(n,CB(s)),_B=(n,s)=>{var o={};for(var l in n)Lu.call(n,l)&&s.indexOf(l)<0&&(o[l]=n[l]);if(n!=null&&Fl)for(var l of Fl(n))s.indexOf(l)<0&&Wu.call(n,l)&&(o[l]=n[l]);return o};function DB(n,s,o={}){const l=o,{eventFilter:a}=l,r=_B(l,["eventFilter"]),{eventFilter:i,pause:c,resume:p,isActive:d}=J8(a);return{stop:gB(n,s,kB(bB({},r),{eventFilter:i})),pause:c,resume:p,isActive:d}}function wn(n){var s;const o=ln(n);return(s=o==null?void 0:o.$el)!=null?s:o}const en=jn?window:void 0,Ru=jn?window.document:void 0,vB=jn?window.navigator:void 0;function be(...n){let s,o,l,a;if(Tu(n[0])||Array.isArray(n[0])?([o,l,a]=n,s=en):[s,o,l,a]=n,!s)return $o;Array.isArray(o)||(o=[o]),Array.isArray(l)||(l=[l]);const r=[],i=()=>{r.forEach(u=>u()),r.length=0},c=(u,y,h,m)=>(u.addEventListener(y,h,m),()=>u.removeEventListener(y,h,m)),p=Ce(()=>[wn(s),ln(a)],([u,y])=>{i(),u&&r.push(...o.flatMap(h=>l.map(m=>c(u,h,m,y))))},{immediate:!0,flush:"post"}),d=()=>{p(),i()};return ns(d),d}let Mc=!1;function xB(n,s,o={}){const{window:l=en,ignore:a=[],capture:r=!0,detectIframe:i=!1}=o;if(!l)return;Z8&&!Mc&&(Mc=!0,Array.from(l.document.body.children).forEach(h=>h.addEventListener("click",$o)));let c=!0;const p=h=>a.some(m=>{if(typeof m=="string")return Array.from(l.document.querySelectorAll(m)).some(f=>f===h.target||h.composedPath().includes(f));{const f=wn(m);return f&&(h.target===f||h.composedPath().includes(f))}}),u=[be(l,"click",h=>{const m=wn(n);if(!(!m||m===h.target||h.composedPath().includes(m))){if(h.detail===0&&(c=!p(h)),!c){c=!0;return}s(h)}},{passive:!0,capture:r}),be(l,"pointerdown",h=>{const m=wn(n);m&&(c=!h.composedPath().includes(m)&&!p(h))},{passive:!0}),i&&be(l,"blur",h=>{var m;const f=wn(n);((m=l.document.activeElement)==null?void 0:m.tagName)==="IFRAME"&&!(f!=null&&f.contains(l.document.activeElement))&&s(h)})].filter(Boolean);return()=>u.forEach(h=>h())}const wB=n=>typeof n=="function"?n:typeof n=="string"?s=>s.key===n:Array.isArray(n)?s=>n.includes(s.key):()=>!0;function EB(...n){let s,o,l={};n.length===3?(s=n[0],o=n[1],l=n[2]):n.length===2?typeof n[1]=="object"?(s=!0,o=n[0],l=n[1]):(s=n[0],o=n[1]):(s=!0,o=n[0]);const{target:a=en,eventName:r="keydown",passive:i=!1}=l,c=wB(s);return be(a,r,d=>{c(d)&&o(d)},i)}function IB(n={}){var s;const{window:o=en}=n,l=(s=n.document)!=null?s:o==null?void 0:o.document,a=nB(()=>null,()=>l==null?void 0:l.activeElement);return o&&(be(o,"blur",r=>{r.relatedTarget===null&&a.trigger()},!0),be(o,"focus",a.trigger,!0)),a}function Ut(n,s=!1){const o=Z(),l=()=>o.value=Boolean(n());return l(),di(l,s),o}function _o(n,s={}){const{window:o=en}=s,l=Ut(()=>o&&"matchMedia"in o&&typeof o.matchMedia=="function");let a;const r=Z(!1),i=()=>{a&&("removeEventListener"in a?a.removeEventListener("change",c):a.removeListener(c))},c=()=>{l.value&&(i(),a=o.matchMedia(Ou(n).value),r.value=a.matches,"addEventListener"in a?a.addEventListener("change",c):a.addListener(c))};return uo(c),ns(()=>i()),r}const $B={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var SB=Object.defineProperty,Oc=Object.getOwnPropertySymbols,FB=Object.prototype.hasOwnProperty,PB=Object.prototype.propertyIsEnumerable,Nc=(n,s,o)=>s in n?SB(n,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[s]=o,TB=(n,s)=>{for(var o in s||(s={}))FB.call(s,o)&&Nc(n,o,s[o]);if(Oc)for(var o of Oc(s))PB.call(s,o)&&Nc(n,o,s[o]);return n};function MB(n,s={}){function o(c,p){let d=n[c];return p!=null&&(d=eB(d,p)),typeof d=="number"&&(d=`${d}px`),d}const{window:l=en}=s;function a(c){return l?l.matchMedia(c).matches:!1}const r=c=>_o(`(min-width: ${o(c)})`,s),i=Object.keys(n).reduce((c,p)=>(Object.defineProperty(c,p,{get:()=>r(p),enumerable:!0,configurable:!0}),c),{});return TB({greater(c){return _o(`(min-width: ${o(c,.1)})`,s)},greaterOrEqual:r,smaller(c){return _o(`(max-width: ${o(c,-.1)})`,s)},smallerOrEqual(c){return _o(`(max-width: ${o(c)})`,s)},between(c,p){return _o(`(min-width: ${o(c)}) and (max-width: ${o(p,-.1)})`,s)},isGreater(c){return a(`(min-width: ${o(c,.1)})`)},isGreaterOrEqual(c){return a(`(min-width: ${o(c)})`)},isSmaller(c){return a(`(max-width: ${o(c,-.1)})`)},isSmallerOrEqual(c){return a(`(max-width: ${o(c)})`)},isInBetween(c,p){return a(`(min-width: ${o(c)}) and (max-width: ${o(p,-.1)})`)}},i)}function OB(n={}){const{navigator:s=vB,read:o=!1,source:l,copiedDuring:a=1500,legacy:r=!1}=n,i=["copy","cut"],c=Ut(()=>s&&"clipboard"in s),p=S(()=>c.value||r),d=Z(""),u=Z(!1),y=yB(()=>u.value=!1,a);function h(){c.value?s.clipboard.readText().then(A=>{d.value=A}):d.value=B()}if(p.value&&o)for(const A of i)be(A,h);async function m(A=ln(l)){p.value&&A!=null&&(c.value?await s.clipboard.writeText(A):f(A),d.value=A,u.value=!0,y.start())}function f(A){const D=document.createElement("textarea");D.value=A??"",D.style.position="absolute",D.style.opacity="0",document.body.appendChild(D),D.select(),document.execCommand("copy"),D.remove()}function B(){var A,D,b;return(b=(D=(A=document==null?void 0:document.getSelection)==null?void 0:A.call(document))==null?void 0:D.toString())!=null?b:""}return{isSupported:p,text:d,copied:u,copy:m}}function NB(n){return JSON.parse(JSON.stringify(n))}const pr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},dr="__vueuse_ssr_handlers__";pr[dr]=pr[dr]||{};const LB=pr[dr];function WB(n,s){return LB[n]||s}function RB(n){return n==null?"any":n instanceof Set?"set":n instanceof Map?"map":n instanceof Date?"date":typeof n=="boolean"?"boolean":typeof n=="string"?"string":typeof n=="object"?"object":Number.isNaN(n)?"any":"number"}var qB=Object.defineProperty,Lc=Object.getOwnPropertySymbols,VB=Object.prototype.hasOwnProperty,UB=Object.prototype.propertyIsEnumerable,Wc=(n,s,o)=>s in n?qB(n,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[s]=o,Rc=(n,s)=>{for(var o in s||(s={}))VB.call(s,o)&&Wc(n,o,s[o]);if(Lc)for(var o of Lc(s))UB.call(s,o)&&Wc(n,o,s[o]);return n};const jB={boolean:{read:n=>n==="true",write:n=>String(n)},object:{read:n=>JSON.parse(n),write:n=>JSON.stringify(n)},number:{read:n=>Number.parseFloat(n),write:n=>String(n)},any:{read:n=>n,write:n=>String(n)},string:{read:n=>n,write:n=>String(n)},map:{read:n=>new Map(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n.entries()))},set:{read:n=>new Set(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n))},date:{read:n=>new Date(n),write:n=>n.toISOString()}},qc="vueuse-storage";function HB(n,s,o,l={}){var a;const{flush:r="pre",deep:i=!0,listenToStorageChanges:c=!0,writeDefaults:p=!0,mergeDefaults:d=!1,shallow:u,window:y=en,eventFilter:h,onError:m=F=>{console.error(F)}}=l,f=(u?es:Z)(s);if(!o)try{o=WB("getDefaultStorage",()=>{var F;return(F=en)==null?void 0:F.localStorage})()}catch(F){m(F)}if(!o)return f;const B=ln(s),A=RB(B),D=(a=l.serializer)!=null?a:jB[A],{pause:b,resume:_}=DB(f,()=>w(f.value),{flush:r,deep:i,eventFilter:h});return y&&c&&(be(y,"storage",K),be(y,qc,W)),K(),f;function w(F){try{if(F==null)o.removeItem(n);else{const H=D.write(F),le=o.getItem(n);le!==H&&(o.setItem(n,H),y&&y.dispatchEvent(new CustomEvent(qc,{detail:{key:n,oldValue:le,newValue:H,storageArea:o}})))}}catch(H){m(H)}}function P(F){const H=F?F.newValue:o.getItem(n);if(H==null)return p&&B!==null&&o.setItem(n,D.write(B)),B;if(!F&&d){const le=D.read(H);return vt(d)?d(le,B):A==="object"&&!Array.isArray(le)?Rc(Rc({},B),le):le}else return typeof H!="string"?H:D.read(H)}function W(F){K(F.detail)}function K(F){if(!(F&&F.storageArea!==o)){if(F&&F.key==null){f.value=B;return}if(!(F&&F.key!==n)){b();try{f.value=P(F)}catch(H){m(H)}finally{F?sn(_):_()}}}}}function GB(n){return _o("(prefers-color-scheme: dark)",n)}var KB=Object.defineProperty,zB=Object.defineProperties,YB=Object.getOwnPropertyDescriptors,Vc=Object.getOwnPropertySymbols,ZB=Object.prototype.hasOwnProperty,QB=Object.prototype.propertyIsEnumerable,Uc=(n,s,o)=>s in n?KB(n,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[s]=o,JB=(n,s)=>{for(var o in s||(s={}))ZB.call(s,o)&&Uc(n,o,s[o]);if(Vc)for(var o of Vc(s))QB.call(s,o)&&Uc(n,o,s[o]);return n},XB=(n,s)=>zB(n,YB(s));function wx(n,s={}){var o,l,a;const r=(o=s.draggingElement)!=null?o:en,i=(l=s.handle)!=null?l:n,c=Z((a=ln(s.initialValue))!=null?a:{x:0,y:0}),p=Z(),d=f=>s.pointerTypes?s.pointerTypes.includes(f.pointerType):!0,u=f=>{ln(s.preventDefault)&&f.preventDefault(),ln(s.stopPropagation)&&f.stopPropagation()},y=f=>{var B;if(!d(f)||ln(s.exact)&&f.target!==ln(n))return;const A=ln(n).getBoundingClientRect(),D={x:f.clientX-A.left,y:f.clientY-A.top};((B=s.onStart)==null?void 0:B.call(s,D,f))!==!1&&(p.value=D,u(f))},h=f=>{var B;d(f)&&p.value&&(c.value={x:f.clientX-p.value.x,y:f.clientY-p.value.y},(B=s.onMove)==null||B.call(s,c.value,f),u(f))},m=f=>{var B;d(f)&&p.value&&(p.value=void 0,(B=s.onEnd)==null||B.call(s,c.value,f),u(f))};return jn&&(be(i,"pointerdown",y,!0),be(r,"pointermove",h,!0),be(r,"pointerup",m,!0)),XB(JB({},pB(c)),{position:c,isDragging:S(()=>!!p.value),style:S(()=>`left:${c.value.x}px;top:${c.value.y}px;`)})}var jc=Object.getOwnPropertySymbols,eA=Object.prototype.hasOwnProperty,nA=Object.prototype.propertyIsEnumerable,sA=(n,s)=>{var o={};for(var l in n)eA.call(n,l)&&s.indexOf(l)<0&&(o[l]=n[l]);if(n!=null&&jc)for(var l of jc(n))s.indexOf(l)<0&&nA.call(n,l)&&(o[l]=n[l]);return o};function oA(n,s,o={}){const l=o,{window:a=en}=l,r=sA(l,["window"]);let i;const c=Ut(()=>a&&"ResizeObserver"in a),p=()=>{i&&(i.disconnect(),i=void 0)},d=Ce(()=>wn(n),y=>{p(),c.value&&a&&y&&(i=new ResizeObserver(s),i.observe(y,r))},{immediate:!0,flush:"post"}),u=()=>{p(),d()};return ns(u),{isSupported:c,stop:u}}function tA(n,s={}){const{immediate:o=!0,window:l=en}=s,a=Z(!1);let r=0,i=null;function c(u){if(!a.value||!l)return;const y=u-r;n({delta:y,timestamp:u}),r=u,i=l.requestAnimationFrame(c)}function p(){!a.value&&l&&(a.value=!0,i=l.requestAnimationFrame(c))}function d(){a.value=!1,i!=null&&l&&(l.cancelAnimationFrame(i),i=null)}return o&&p(),ns(d),{isActive:Zn(a),pause:d,resume:p}}function lA(n,s={width:0,height:0},o={}){const{window:l=en,box:a="content-box"}=o,r=S(()=>{var p,d;return(d=(p=wn(n))==null?void 0:p.namespaceURI)==null?void 0:d.includes("svg")}),i=Z(s.width),c=Z(s.height);return oA(n,([p])=>{const d=a==="border-box"?p.borderBoxSize:a==="content-box"?p.contentBoxSize:p.devicePixelContentBoxSize;if(l&&r.value){const u=wn(n);if(u){const y=l.getComputedStyle(u);i.value=parseFloat(y.width),c.value=parseFloat(y.height)}}else if(d){const u=Array.isArray(d)?d:[d];i.value=u.reduce((y,{inlineSize:h})=>y+h,0),c.value=u.reduce((y,{blockSize:h})=>y+h,0)}else i.value=p.contentRect.width,c.value=p.contentRect.height},o),Ce(()=>wn(n),p=>{i.value=p?s.width:0,c.value=p?s.height:0}),{width:i,height:c}}const Hc=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function aA(n,s={}){const{document:o=Ru,autoExit:l=!1}=s,a=n||(o==null?void 0:o.querySelector("html")),r=Z(!1);let i=Hc[0];const c=Ut(()=>{if(o){for(const B of Hc)if(B[1]in o)return i=B,!0}else return!1;return!1}),[p,d,u,,y]=i;async function h(){c.value&&(o!=null&&o[u]&&await o[d](),r.value=!1)}async function m(){if(!c.value)return;await h();const B=wn(a);B&&(await B[p](),r.value=!0)}async function f(){r.value?await h():await m()}return o&&be(o,y,()=>{r.value=!!(o!=null&&o[u])},!1),l&&ns(h),{isSupported:c,isFullscreen:r,enter:m,exit:h,toggle:f}}function rA(n,s,o={}){const{root:l,rootMargin:a="0px",threshold:r=.1,window:i=en}=o,c=Ut(()=>i&&"IntersectionObserver"in i);let p=$o;const d=c.value?Ce(()=>({el:wn(n),root:wn(l)}),({el:y,root:h})=>{if(p(),!y)return;const m=new IntersectionObserver(s,{root:h,rootMargin:a,threshold:r});m.observe(y),p=()=>{m.disconnect(),p=$o}},{immediate:!0,flush:"post"}):$o,u=()=>{p(),d()};return ns(u),{isSupported:c,stop:u}}function Hn(n,s,o={}){const{window:l=en}=o;return HB(n,s,l==null?void 0:l.localStorage,o)}const iA={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function cA(n={}){const{reactive:s=!1,target:o=en,aliasMap:l=iA,passive:a=!0,onEventFired:r=$o}=n,i=je(new Set),c={toJSON(){return{}},current:i},p=s?je(c):c,d=new Set,u=new Set;function y(B,A){B in p&&(s?p[B]=A:p[B].value=A)}function h(){i.clear();for(const B of u)y(B,!1)}function m(B,A){var D,b;const _=(D=B.key)==null?void 0:D.toLowerCase(),P=[(b=B.code)==null?void 0:b.toLowerCase(),_].filter(Boolean);_&&(A?i.add(_):i.delete(_));for(const W of P)u.add(W),y(W,A);_==="meta"&&!A?(d.forEach(W=>{i.delete(W),y(W,!1)}),d.clear()):typeof B.getModifierState=="function"&&B.getModifierState("Meta")&&A&&[...i,...P].forEach(W=>d.add(W))}be(o,"keydown",B=>(m(B,!0),r(B)),{passive:a}),be(o,"keyup",B=>(m(B,!1),r(B)),{passive:a}),be("blur",h,{passive:!0}),be("focus",h,{passive:!0});const f=new Proxy(p,{get(B,A,D){if(typeof A!="string")return Reflect.get(B,A,D);if(A=A.toLowerCase(),A in l&&(A=l[A]),!(A in p))if(/[+_-]/.test(A)){const _=A.split(/[+_-]/g).map(w=>w.trim());p[A]=S(()=>_.every(w=>v(f[w])))}else p[A]=Z(!1);const b=Reflect.get(B,A,D);return s?v(b):b}});return f}function Ex(n={}){const{type:s="page",touch:o=!0,resetOnTouchEnds:l=!1,initialValue:a={x:0,y:0},window:r=en,eventFilter:i}=n,c=Z(a.x),p=Z(a.y),d=Z(null),u=B=>{s==="page"?(c.value=B.pageX,p.value=B.pageY):s==="client"?(c.value=B.clientX,p.value=B.clientY):s==="movement"&&(c.value=B.movementX,p.value=B.movementY),d.value="mouse"},y=()=>{c.value=a.x,p.value=a.y},h=B=>{if(B.touches.length>0){const A=B.touches[0];s==="page"?(c.value=A.pageX,p.value=A.pageY):s==="client"&&(c.value=A.clientX,p.value=A.clientY),d.value="touch"}},m=B=>i===void 0?u(B):i(()=>u(B),{}),f=B=>i===void 0?h(B):i(()=>h(B),{});return r&&(be(r,"mousemove",m,{passive:!0}),be(r,"dragover",m,{passive:!0}),o&&s!=="movement"&&(be(r,"touchstart",f,{passive:!0}),be(r,"touchmove",f,{passive:!0}),l&&be(r,"touchend",y,{passive:!0}))),{x:c,y:p,sourceType:d}}var cs;(function(n){n.UP="UP",n.RIGHT="RIGHT",n.DOWN="DOWN",n.LEFT="LEFT",n.NONE="NONE"})(cs||(cs={}));function pA(n,s={}){const o=Ou(n),{threshold:l=50,onSwipe:a,onSwipeEnd:r,onSwipeStart:i}=s,c=je({x:0,y:0}),p=(W,K)=>{c.x=W,c.y=K},d=je({x:0,y:0}),u=(W,K)=>{d.x=W,d.y=K},y=S(()=>c.x-d.x),h=S(()=>c.y-d.y),{max:m,abs:f}=Math,B=S(()=>m(f(y.value),f(h.value))>=l),A=Z(!1),D=Z(!1),b=S(()=>B.value?f(y.value)>f(h.value)?y.value>0?cs.LEFT:cs.RIGHT:h.value>0?cs.UP:cs.DOWN:cs.NONE),_=W=>{var K,F,H;const le=W.buttons===0,ye=W.buttons===1;return(H=(F=(K=s.pointerTypes)==null?void 0:K.includes(W.pointerType))!=null?F:le||ye)!=null?H:!0},w=[be(n,"pointerdown",W=>{var K,F;if(!_(W))return;D.value=!0,(F=(K=o.value)==null?void 0:K.style)==null||F.setProperty("touch-action","none");const H=W.target;H==null||H.setPointerCapture(W.pointerId);const{clientX:le,clientY:ye}=W;p(le,ye),u(le,ye),i==null||i(W)}),be(n,"pointermove",W=>{if(!_(W)||!D.value)return;const{clientX:K,clientY:F}=W;u(K,F),!A.value&&B.value&&(A.value=!0),A.value&&(a==null||a(W))}),be(n,"pointerup",W=>{var K,F;_(W)&&(A.value&&(r==null||r(W,b.value)),D.value=!1,A.value=!1,(F=(K=o.value)==null?void 0:K.style)==null||F.setProperty("touch-action","initial"))})],P=()=>w.forEach(W=>W());return{isSwiping:Zn(A),direction:Zn(b),posStart:Zn(c),posEnd:Zn(d),distanceX:y,distanceY:h,stop:P}}let dA=0;function Ix(n,s={}){const o=Z(!1),{document:l=Ru,immediate:a=!0,manual:r=!1,id:i=`vueuse_styletag_${++dA}`}=s,c=Z(n);let p=()=>{};const d=()=>{if(!l)return;const y=l.getElementById(i)||l.createElement("style");y.isConnected||(y.type="text/css",y.id=i,s.media&&(y.media=s.media),l.head.appendChild(y)),!o.value&&(p=Ce(c,h=>{y.textContent=h},{immediate:!0}),o.value=!0)},u=()=>{!l||!o.value||(p(),l.head.removeChild(l.getElementById(i)),o.value=!1)};return a&&!r&&di(d),r||ns(u),{id:i,css:c,unload:u,load:d,isLoaded:Zn(o)}}var uA=Object.defineProperty,Gc=Object.getOwnPropertySymbols,yA=Object.prototype.hasOwnProperty,hA=Object.prototype.propertyIsEnumerable,Kc=(n,s,o)=>s in n?uA(n,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[s]=o,fA=(n,s)=>{for(var o in s||(s={}))yA.call(s,o)&&Kc(n,o,s[o]);if(Gc)for(var o of Gc(s))hA.call(s,o)&&Kc(n,o,s[o]);return n};function $x(n={}){const{controls:s=!1,offset:o=0,immediate:l=!0,interval:a="requestAnimationFrame",callback:r}=n,i=Z(cr()+o),c=()=>i.value=cr()+o,p=r?()=>{c(),r(i.value)}:c,d=a==="requestAnimationFrame"?tA(p,{immediate:l}):uB(p,a,{immediate:l});return s?fA({timestamp:i},d):i}var mA=Object.defineProperty,zc=Object.getOwnPropertySymbols,gA=Object.prototype.hasOwnProperty,BA=Object.prototype.propertyIsEnumerable,Yc=(n,s,o)=>s in n?mA(n,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[s]=o,AA=(n,s)=>{for(var o in s||(s={}))gA.call(s,o)&&Yc(n,o,s[o]);if(zc)for(var o of zc(s))BA.call(s,o)&&Yc(n,o,s[o]);return n};const CA={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};AA({linear:X8},CA);function Qn(n,s,o,l={}){var a,r,i;const{clone:c=!1,passive:p=!1,eventName:d,deep:u=!1,defaultValue:y}=l,h=$n(),m=o||(h==null?void 0:h.emit)||((a=h==null?void 0:h.$emit)==null?void 0:a.bind(h))||((i=(r=h==null?void 0:h.proxy)==null?void 0:r.$emit)==null?void 0:i.bind(h==null?void 0:h.proxy));let f=d;s||(s="modelValue"),f=d||f||`update:${s.toString()}`;const B=D=>c?vt(c)?c(D):NB(D):D,A=()=>K8(n[s])?B(n[s]):y;if(p){const D=A(),b=Z(D);return Ce(()=>n[s],_=>b.value=B(_)),Ce(b,_=>{(_!==n[s]||u)&&m(f,_)},{deep:u}),b}else return S({get(){return A()},set(D){m(f,D)}})}function Sx({window:n=en}={}){if(!n)return Z(!1);const s=Z(n.document.hasFocus());return be(n,"blur",()=>{s.value=!1}),be(n,"focus",()=>{s.value=!0}),s}function bA(n={}){const{window:s=en,initialWidth:o=1/0,initialHeight:l=1/0,listenOrientation:a=!0,includeScrollbar:r=!0}=n,i=Z(o),c=Z(l),p=()=>{s&&(r?(i.value=s.innerWidth,c.value=s.innerHeight):(i.value=s.document.documentElement.clientWidth,c.value=s.document.documentElement.clientHeight))};return p(),di(p),be("resize",p,{passive:!0}),a&&be("orientationchange",p,{passive:!0}),{width:i,height:c}}function kA(){return qu().__VUE_DEVTOOLS_GLOBAL_HOOK__}function qu(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const _A=typeof Proxy=="function",DA="devtools-plugin:setup",vA="plugin:settings:set";let go,ur;function xA(){var n;return go!==void 0||(typeof window<"u"&&window.performance?(go=!0,ur=window.performance):typeof global<"u"&&(!((n=global.perf_hooks)===null||n===void 0)&&n.performance)?(go=!0,ur=global.perf_hooks.performance):go=!1),go}function wA(){return xA()?ur.now():Date.now()}class EA{constructor(s,o){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=s,this.hook=o;const l={};if(s.settings)for(const i in s.settings){const c=s.settings[i];l[i]=c.defaultValue}const a=`__vue-devtools-plugin-settings__${s.id}`;let r=Object.assign({},l);try{const i=localStorage.getItem(a),c=JSON.parse(i);Object.assign(r,c)}catch{}this.fallbacks={getSettings(){return r},setSettings(i){try{localStorage.setItem(a,JSON.stringify(i))}catch{}r=i},now(){return wA()}},o&&o.on(vA,(i,c)=>{i===this.plugin.id&&this.fallbacks.setSettings(c)}),this.proxiedOn=new Proxy({},{get:(i,c)=>this.target?this.target.on[c]:(...p)=>{this.onQueue.push({method:c,args:p})}}),this.proxiedTarget=new Proxy({},{get:(i,c)=>this.target?this.target[c]:c==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(c)?(...p)=>(this.targetQueue.push({method:c,args:p,resolve:()=>{}}),this.fallbacks[c](...p)):(...p)=>new Promise(d=>{this.targetQueue.push({method:c,args:p,resolve:d})})})}async setRealTarget(s){this.target=s;for(const o of this.onQueue)this.target.on[o.method](...o.args);for(const o of this.targetQueue)o.resolve(await this.target[o.method](...o.args))}}function IA(n,s){const o=n,l=qu(),a=kA(),r=_A&&o.enableEarlyProxy;if(a&&(l.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))a.emit(DA,n,s);else{const i=r?new EA(o,a):null;(l.__VUE_DEVTOOLS_PLUGINS__=l.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:o,setupFn:s,proxy:i}),i&&s(i.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const rs=typeof window<"u";function $A(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const Oe=Object.assign;function Da(n,s){const o={};for(const l in s){const a=s[l];o[l]=In(a)?a.map(n):n(a)}return o}const ct=()=>{},In=Array.isArray;function $e(n){const s=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+n].concat(s))}const SA=/\/$/,FA=n=>n.replace(SA,"");function va(n,s,o="/"){let l,a={},r="",i="";const c=s.indexOf("#");let p=s.indexOf("?");return c<p&&c>=0&&(p=-1),p>-1&&(l=s.slice(0,p),r=s.slice(p+1,c>-1?c:s.length),a=n(r)),c>-1&&(l=l||s.slice(0,c),i=s.slice(c,s.length)),l=MA(l??s,o),{fullPath:l+(r&&"?")+r+i,path:l,query:a,hash:i}}function PA(n,s){const o=s.query?n(s.query):"";return s.path+(o&&"?")+o+(s.hash||"")}function Zc(n,s){return!s||!n.toLowerCase().startsWith(s.toLowerCase())?n:n.slice(s.length)||"/"}function Qc(n,s,o){const l=s.matched.length-1,a=o.matched.length-1;return l>-1&&l===a&&Ns(s.matched[l],o.matched[a])&&Vu(s.params,o.params)&&n(s.query)===n(o.query)&&s.hash===o.hash}function Ns(n,s){return(n.aliasOf||n)===(s.aliasOf||s)}function Vu(n,s){if(Object.keys(n).length!==Object.keys(s).length)return!1;for(const o in n)if(!TA(n[o],s[o]))return!1;return!0}function TA(n,s){return In(n)?Jc(n,s):In(s)?Jc(s,n):n===s}function Jc(n,s){return In(s)?n.length===s.length&&n.every((o,l)=>o===s[l]):n.length===1&&n[0]===s}function MA(n,s){if(n.startsWith("/"))return n;if(!s.startsWith("/"))return $e(`Cannot resolve a relative location without an absolute path. Trying to resolve "${n}" from "${s}". It should look like "/${s}".`),n;if(!n)return s;const o=s.split("/"),l=n.split("/");let a=o.length-1,r,i;for(r=0;r<l.length;r++)if(i=l[r],i!==".")if(i==="..")a>1&&a--;else break;return o.slice(0,a).join("/")+"/"+l.slice(r-(r===l.length?1:0)).join("/")}var xt;(function(n){n.pop="pop",n.push="push"})(xt||(xt={}));var pt;(function(n){n.back="back",n.forward="forward",n.unknown=""})(pt||(pt={}));function OA(n){if(!n)if(rs){const s=document.querySelector("base");n=s&&s.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),FA(n)}const NA=/^[^#]+#/;function LA(n,s){return n.replace(NA,"#")+s}function WA(n,s){const o=document.documentElement.getBoundingClientRect(),l=n.getBoundingClientRect();return{behavior:s.behavior,left:l.left-o.left-(s.left||0),top:l.top-o.top-(s.top||0)}}const sa=()=>({left:window.pageXOffset,top:window.pageYOffset});function RA(n){let s;if("el"in n){const o=n.el,l=typeof o=="string"&&o.startsWith("#");if(typeof n.el=="string"&&(!l||!document.getElementById(n.el.slice(1))))try{const r=document.querySelector(n.el);if(l&&r){$e(`The selector "${n.el}" should be passed as "el: document.querySelector('${n.el}')" because it starts with "#".`);return}}catch{$e(`The selector "${n.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const a=typeof o=="string"?l?document.getElementById(o.slice(1)):document.querySelector(o):o;if(!a){$e(`Couldn't find element using selector "${n.el}" returned by scrollBehavior.`);return}s=WA(a,n)}else s=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(s):window.scrollTo(s.left!=null?s.left:window.pageXOffset,s.top!=null?s.top:window.pageYOffset)}function Xc(n,s){return(history.state?history.state.position-s:-1)+n}const yr=new Map;function qA(n,s){yr.set(n,s)}function VA(n){const s=yr.get(n);return yr.delete(n),s}let UA=()=>location.protocol+"//"+location.host;function Uu(n,s){const{pathname:o,search:l,hash:a}=s,r=n.indexOf("#");if(r>-1){let c=a.includes(n.slice(r))?n.slice(r).length:1,p=a.slice(c);return p[0]!=="/"&&(p="/"+p),Zc(p,"")}return Zc(o,n)+l+a}function jA(n,s,o,l){let a=[],r=[],i=null;const c=({state:h})=>{const m=Uu(n,location),f=o.value,B=s.value;let A=0;if(h){if(o.value=m,s.value=h,i&&i===f){i=null;return}A=B?h.position-B.position:0}else l(m);a.forEach(D=>{D(o.value,f,{delta:A,type:xt.pop,direction:A?A>0?pt.forward:pt.back:pt.unknown})})};function p(){i=o.value}function d(h){a.push(h);const m=()=>{const f=a.indexOf(h);f>-1&&a.splice(f,1)};return r.push(m),m}function u(){const{history:h}=window;h.state&&h.replaceState(Oe({},h.state,{scroll:sa()}),"")}function y(){for(const h of r)h();r=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",u),{pauseListeners:p,listen:d,destroy:y}}function ep(n,s,o,l=!1,a=!1){return{back:n,current:s,forward:o,replaced:l,position:window.history.length,scroll:a?sa():null}}function HA(n){const{history:s,location:o}=window,l={value:Uu(n,o)},a={value:s.state};a.value||r(l.value,{back:null,current:l.value,forward:null,position:s.length-1,replaced:!0,scroll:null},!0);function r(p,d,u){const y=n.indexOf("#"),h=y>-1?(o.host&&document.querySelector("base")?n:n.slice(y))+p:UA()+n+p;try{s[u?"replaceState":"pushState"](d,"",h),a.value=d}catch(m){$e("Error with push/replace State",m),o[u?"replace":"assign"](h)}}function i(p,d){const u=Oe({},s.state,ep(a.value.back,p,a.value.forward,!0),d,{position:a.value.position});r(p,u,!0),l.value=p}function c(p,d){const u=Oe({},a.value,s.state,{forward:p,scroll:sa()});s.state||$e(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),r(u.current,u,!0);const y=Oe({},ep(l.value,p,null),{position:u.position+1},d);r(p,y,!1),l.value=p}return{location:l,state:a,push:c,replace:i}}function GA(n){n=OA(n);const s=HA(n),o=jA(n,s.state,s.location,s.replace);function l(r,i=!0){i||o.pauseListeners(),history.go(r)}const a=Oe({location:"",base:n,go:l,createHref:LA.bind(null,n)},s,o);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>s.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>s.state.value}),a}function KA(n){return typeof n=="string"||n&&typeof n=="object"}function ju(n){return typeof n=="string"||typeof n=="symbol"}const As={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Hu=Symbol("navigation failure");var np;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(np||(np={}));const zA={[1]({location:n,currentLocation:s}){return`No match for
 ${JSON.stringify(n)}${s?`
while being at
`+JSON.stringify(s):""}`},[2]({from:n,to:s}){return`Redirected from "${n.fullPath}" to "${ZA(s)}" via a navigation guard.`},[4]({from:n,to:s}){return`Navigation aborted from "${n.fullPath}" to "${s.fullPath}" via a navigation guard.`},[8]({from:n,to:s}){return`Navigation cancelled from "${n.fullPath}" to "${s.fullPath}" with a new navigation.`},[16]({from:n,to:s}){return`Avoided redundant navigation to current location: "${n.fullPath}".`}};function Mo(n,s){return Oe(new Error(zA[n](s)),{type:n,[Hu]:!0},s)}function ss(n,s){return n instanceof Error&&Hu in n&&(s==null||!!(n.type&s))}const YA=["params","query","hash"];function ZA(n){if(typeof n=="string")return n;if("path"in n)return n.path;const s={};for(const o of YA)o in n&&(s[o]=n[o]);return JSON.stringify(s,null,2)}const sp="[^/]+?",QA={sensitive:!1,strict:!1,start:!0,end:!0},JA=/[.+*?^${}()[\]/\\]/g;function XA(n,s){const o=Oe({},QA,s),l=[];let a=o.start?"^":"";const r=[];for(const d of n){const u=d.length?[]:[90];o.strict&&!d.length&&(a+="/");for(let y=0;y<d.length;y++){const h=d[y];let m=40+(o.sensitive?.25:0);if(h.type===0)y||(a+="/"),a+=h.value.replace(JA,"\\$&"),m+=40;else if(h.type===1){const{value:f,repeatable:B,optional:A,regexp:D}=h;r.push({name:f,repeatable:B,optional:A});const b=D||sp;if(b!==sp){m+=10;try{new RegExp(`(${b})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${f}" (${b}): `+w.message)}}let _=B?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;y||(_=A&&d.length<2?`(?:/${_})`:"/"+_),A&&(_+="?"),a+=_,m+=20,A&&(m+=-8),B&&(m+=-20),b===".*"&&(m+=-50)}u.push(m)}l.push(u)}if(o.strict&&o.end){const d=l.length-1;l[d][l[d].length-1]+=.7000000000000001}o.strict||(a+="/?"),o.end?a+="$":o.strict&&(a+="(?:/|$)");const i=new RegExp(a,o.sensitive?"":"i");function c(d){const u=d.match(i),y={};if(!u)return null;for(let h=1;h<u.length;h++){const m=u[h]||"",f=r[h-1];y[f.name]=m&&f.repeatable?m.split("/"):m}return y}function p(d){let u="",y=!1;for(const h of n){(!y||!u.endsWith("/"))&&(u+="/"),y=!1;for(const m of h)if(m.type===0)u+=m.value;else if(m.type===1){const{value:f,repeatable:B,optional:A}=m,D=f in d?d[f]:"";if(In(D)&&!B)throw new Error(`Provided param "${f}" is an array but it is not repeatable (* or + modifiers)`);const b=In(D)?D.join("/"):D;if(!b)if(A)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):y=!0);else throw new Error(`Missing required param "${f}"`);u+=b}}return u||"/"}return{re:i,score:l,keys:r,parse:c,stringify:p}}function e5(n,s){let o=0;for(;o<n.length&&o<s.length;){const l=s[o]-n[o];if(l)return l;o++}return n.length<s.length?n.length===1&&n[0]===40+40?-1:1:n.length>s.length?s.length===1&&s[0]===40+40?1:-1:0}function n5(n,s){let o=0;const l=n.score,a=s.score;for(;o<l.length&&o<a.length;){const r=e5(l[o],a[o]);if(r)return r;o++}if(Math.abs(a.length-l.length)===1){if(op(l))return 1;if(op(a))return-1}return a.length-l.length}function op(n){const s=n[n.length-1];return n.length>0&&s[s.length-1]<0}const s5={type:0,value:""},o5=/[a-zA-Z0-9_]/;function t5(n){if(!n)return[[]];if(n==="/")return[[s5]];if(!n.startsWith("/"))throw new Error(`Route paths should start with a "/": "${n}" should be "/${n}".`);function s(m){throw new Error(`ERR (${o})/"${d}": ${m}`)}let o=0,l=o;const a=[];let r;function i(){r&&a.push(r),r=[]}let c=0,p,d="",u="";function y(){d&&(o===0?r.push({type:0,value:d}):o===1||o===2||o===3?(r.length>1&&(p==="*"||p==="+")&&s(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:d,regexp:u,repeatable:p==="*"||p==="+",optional:p==="*"||p==="?"})):s("Invalid state to consume buffer"),d="")}function h(){d+=p}for(;c<n.length;){if(p=n[c++],p==="\\"&&o!==2){l=o,o=4;continue}switch(o){case 0:p==="/"?(d&&y(),i()):p===":"?(y(),o=1):h();break;case 4:h(),o=l;break;case 1:p==="("?o=2:o5.test(p)?h():(y(),o=0,p!=="*"&&p!=="?"&&p!=="+"&&c--);break;case 2:p===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+p:o=3:u+=p;break;case 3:y(),o=0,p!=="*"&&p!=="?"&&p!=="+"&&c--,u="";break;default:s("Unknown state");break}}return o===2&&s(`Unfinished custom RegExp for param "${d}"`),y(),i(),a}function l5(n,s,o){const l=XA(t5(n.path),o);{const r=new Set;for(const i of l.keys)r.has(i.name)&&$e(`Found duplicated params with name "${i.name}" for path "${n.path}". Only the last one will be available on "$route.params".`),r.add(i.name)}const a=Oe(l,{record:n,parent:s,children:[],alias:[]});return s&&!a.record.aliasOf==!s.record.aliasOf&&s.children.push(a),a}function a5(n,s){const o=[],l=new Map;s=ap({strict:!1,end:!0,sensitive:!1},s);function a(u){return l.get(u)}function r(u,y,h){const m=!h,f=r5(u);d5(f,y),f.aliasOf=h&&h.record;const B=ap(s,u),A=[f];if("alias"in u){const _=typeof u.alias=="string"?[u.alias]:u.alias;for(const w of _)A.push(Oe({},f,{components:h?h.record.components:f.components,path:w,aliasOf:h?h.record:f}))}let D,b;for(const _ of A){const{path:w}=_;if(y&&w[0]!=="/"){const P=y.record.path,W=P[P.length-1]==="/"?"":"/";_.path=y.record.path+(w&&W+w)}if(_.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(D=l5(_,y,B),y&&w[0]==="/"&&u5(D,y),h?(h.alias.push(D),p5(h,D)):(b=b||D,b!==D&&b.alias.push(D),m&&u.name&&!lp(D)&&i(u.name)),f.children){const P=f.children;for(let W=0;W<P.length;W++)r(P[W],D,h&&h.children[W])}h=h||D,(D.record.components&&Object.keys(D.record.components).length||D.record.name||D.record.redirect)&&p(D)}return b?()=>{i(b)}:ct}function i(u){if(ju(u)){const y=l.get(u);y&&(l.delete(u),o.splice(o.indexOf(y),1),y.children.forEach(i),y.alias.forEach(i))}else{const y=o.indexOf(u);y>-1&&(o.splice(y,1),u.record.name&&l.delete(u.record.name),u.children.forEach(i),u.alias.forEach(i))}}function c(){return o}function p(u){let y=0;for(;y<o.length&&n5(u,o[y])>=0&&(u.record.path!==o[y].record.path||!Gu(u,o[y]));)y++;o.splice(y,0,u),u.record.name&&!lp(u)&&l.set(u.record.name,u)}function d(u,y){let h,m={},f,B;if("name"in u&&u.name){if(h=l.get(u.name),!h)throw Mo(1,{location:u});{const b=Object.keys(u.params||{}).filter(_=>!h.keys.find(w=>w.name===_));b.length&&$e(`Discarded invalid param(s) "${b.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}B=h.record.name,m=Oe(tp(y.params,h.keys.filter(b=>!b.optional).map(b=>b.name)),u.params&&tp(u.params,h.keys.map(b=>b.name))),f=h.stringify(m)}else if("path"in u)f=u.path,f.startsWith("/")||$e(`The Matcher cannot resolve relative paths but received "${f}". Unless you directly called \`matcher.resolve("${f}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),h=o.find(b=>b.re.test(f)),h&&(m=h.parse(f),B=h.record.name);else{if(h=y.name?l.get(y.name):o.find(b=>b.re.test(y.path)),!h)throw Mo(1,{location:u,currentLocation:y});B=h.record.name,m=Oe({},y.params,u.params),f=h.stringify(m)}const A=[];let D=h;for(;D;)A.unshift(D.record),D=D.parent;return{name:B,path:f,params:m,matched:A,meta:c5(A)}}return n.forEach(u=>r(u)),{addRoute:r,resolve:d,removeRoute:i,getRoutes:c,getRecordMatcher:a}}function tp(n,s){const o={};for(const l of s)l in n&&(o[l]=n[l]);return o}function r5(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:i5(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function i5(n){const s={},o=n.props||!1;if("component"in n)s.default=o;else for(const l in n.components)s[l]=typeof o=="boolean"?o:o[l];return s}function lp(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function c5(n){return n.reduce((s,o)=>Oe(s,o.meta),{})}function ap(n,s){const o={};for(const l in n)o[l]=l in s?s[l]:n[l];return o}function hr(n,s){return n.name===s.name&&n.optional===s.optional&&n.repeatable===s.repeatable}function p5(n,s){for(const o of n.keys)if(!o.optional&&!s.keys.find(hr.bind(null,o)))return $e(`Alias "${s.record.path}" and the original record: "${n.record.path}" must have the exact same param named "${o.name}"`);for(const o of s.keys)if(!o.optional&&!n.keys.find(hr.bind(null,o)))return $e(`Alias "${s.record.path}" and the original record: "${n.record.path}" must have the exact same param named "${o.name}"`)}function d5(n,s){s&&s.record.name&&!n.name&&!n.path&&$e(`The route named "${String(s.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function u5(n,s){for(const o of s.keys)if(!n.keys.find(hr.bind(null,o)))return $e(`Absolute path "${n.record.path}" must have the exact same param named "${o.name}" as its parent "${s.record.path}".`)}function Gu(n,s){return s.children.some(o=>o===n||Gu(n,o))}const Ku=/#/g,y5=/&/g,h5=/\//g,f5=/=/g,m5=/\?/g,zu=/\+/g,g5=/%5B/g,B5=/%5D/g,Yu=/%5E/g,A5=/%60/g,Zu=/%7B/g,C5=/%7C/g,Qu=/%7D/g,b5=/%20/g;function ui(n){return encodeURI(""+n).replace(C5,"|").replace(g5,"[").replace(B5,"]")}function k5(n){return ui(n).replace(Zu,"{").replace(Qu,"}").replace(Yu,"^")}function fr(n){return ui(n).replace(zu,"%2B").replace(b5,"+").replace(Ku,"%23").replace(y5,"%26").replace(A5,"`").replace(Zu,"{").replace(Qu,"}").replace(Yu,"^")}function _5(n){return fr(n).replace(f5,"%3D")}function D5(n){return ui(n).replace(Ku,"%23").replace(m5,"%3F")}function v5(n){return n==null?"":D5(n).replace(h5,"%2F")}function wt(n){try{return decodeURIComponent(""+n)}catch{$e(`Error decoding "${n}". Using original value`)}return""+n}function x5(n){const s={};if(n===""||n==="?")return s;const l=(n[0]==="?"?n.slice(1):n).split("&");for(let a=0;a<l.length;++a){const r=l[a].replace(zu," "),i=r.indexOf("="),c=wt(i<0?r:r.slice(0,i)),p=i<0?null:wt(r.slice(i+1));if(c in s){let d=s[c];In(d)||(d=s[c]=[d]),d.push(p)}else s[c]=p}return s}function rp(n){let s="";for(let o in n){const l=n[o];if(o=_5(o),l==null){l!==void 0&&(s+=(s.length?"&":"")+o);continue}(In(l)?l.map(r=>r&&fr(r)):[l&&fr(l)]).forEach(r=>{r!==void 0&&(s+=(s.length?"&":"")+o,r!=null&&(s+="="+r))})}return s}function w5(n){const s={};for(const o in n){const l=n[o];l!==void 0&&(s[o]=In(l)?l.map(a=>a==null?null:""+a):l==null?l:""+l)}return s}const E5=Symbol("router view location matched"),ip=Symbol("router view depth"),yi=Symbol("router"),Ju=Symbol("route location"),mr=Symbol("router view location");function Ko(){let n=[];function s(l){return n.push(l),()=>{const a=n.indexOf(l);a>-1&&n.splice(a,1)}}function o(){n=[]}return{add:s,list:()=>n,reset:o}}function _s(n,s,o,l,a){const r=l&&(l.enterCallbacks[a]=l.enterCallbacks[a]||[]);return()=>new Promise((i,c)=>{const p=y=>{y===!1?c(Mo(4,{from:o,to:s})):y instanceof Error?c(y):KA(y)?c(Mo(2,{from:s,to:y})):(r&&l.enterCallbacks[a]===r&&typeof y=="function"&&r.push(y),i())},d=n.call(l&&l.instances[a],s,o,I5(p,s,o));let u=Promise.resolve(d);if(n.length<3&&(u=u.then(p)),n.length>2){const y=`The "next" callback was never called inside of ${n.name?'"'+n.name+'"':""}:
${n.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof d=="object"&&"then"in d)u=u.then(h=>p._called?h:($e(y),Promise.reject(new Error("Invalid navigation guard"))));else if(d!==void 0&&!p._called){$e(y),c(new Error("Invalid navigation guard"));return}}u.catch(y=>c(y))})}function I5(n,s,o){let l=0;return function(){l++===1&&$e(`The "next" callback was called more than once in one navigation guard when going from "${o.fullPath}" to "${s.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),n._called=!0,l===1&&n.apply(null,arguments)}}function xa(n,s,o,l){const a=[];for(const r of n){!r.components&&!r.children.length&&$e(`Record with path "${r.path}" is either missing a "component(s)" or "children" property.`);for(const i in r.components){let c=r.components[i];{if(!c||typeof c!="object"&&typeof c!="function")throw $e(`Component "${i}" in record with path "${r.path}" is not a valid component. Received "${String(c)}".`),new Error("Invalid route component");if("then"in c){$e(`Component "${i}" in record with path "${r.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const p=c;c=()=>p}else c.__asyncLoader&&!c.__warnedDefineAsync&&(c.__warnedDefineAsync=!0,$e(`Component "${i}" in record with path "${r.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(s!=="beforeRouteEnter"&&!r.instances[i]))if($5(c)){const d=(c.__vccOpts||c)[s];d&&a.push(_s(d,o,l,r,i))}else{let p=c();"catch"in p||($e(`Component "${i}" in record with path "${r.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),p=Promise.resolve(p)),a.push(()=>p.then(d=>{if(!d)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${r.path}"`));const u=$A(d)?d.default:d;r.components[i]=u;const h=(u.__vccOpts||u)[s];return h&&_s(h,o,l,r,i)()}))}}}return a}function $5(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function cp(n){const s=T(yi),o=T(Ju),l=S(()=>s.resolve(v(n.to))),a=S(()=>{const{matched:p}=l.value,{length:d}=p,u=p[d-1],y=o.matched;if(!u||!y.length)return-1;const h=y.findIndex(Ns.bind(null,u));if(h>-1)return h;const m=pp(p[d-2]);return d>1&&pp(u)===m&&y[y.length-1].path!==m?y.findIndex(Ns.bind(null,p[d-2])):h}),r=S(()=>a.value>-1&&T5(o.params,l.value.params)),i=S(()=>a.value>-1&&a.value===o.matched.length-1&&Vu(o.params,l.value.params));function c(p={}){return P5(p)?s[v(n.replace)?"replace":"push"](v(n.to)).catch(ct):Promise.resolve()}if(rs){const p=$n();if(p){const d={route:l.value,isActive:r.value,isExactActive:i.value};p.__vrl_devtools=p.__vrl_devtools||[],p.__vrl_devtools.push(d),uo(()=>{d.route=l.value,d.isActive=r.value,d.isExactActive=i.value},{flush:"post"})}}return{route:l,href:S(()=>l.value.href),isActive:r,isExactActive:i,navigate:c}}const S5=Me({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:cp,setup(n,{slots:s}){const o=je(cp(n)),{options:l}=T(yi),a=S(()=>({[dp(n.activeClass,l.linkActiveClass,"router-link-active")]:o.isActive,[dp(n.exactActiveClass,l.linkExactActiveClass,"router-link-exact-active")]:o.isExactActive}));return()=>{const r=s.default&&s.default(o);return n.custom?r:hn("a",{"aria-current":o.isExactActive?n.ariaCurrentValue:null,href:o.href,onClick:o.navigate,class:a.value},r)}}}),F5=S5;function P5(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const s=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(s))return}return n.preventDefault&&n.preventDefault(),!0}}function T5(n,s){for(const o in s){const l=s[o],a=n[o];if(typeof l=="string"){if(l!==a)return!1}else if(!In(a)||a.length!==l.length||l.some((r,i)=>r!==a[i]))return!1}return!0}function pp(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const dp=(n,s,o)=>n??s??o,M5=Me({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:s,slots:o}){N5();const l=T(mr),a=S(()=>n.route||l.value),r=T(ip,0),i=S(()=>{let d=v(r);const{matched:u}=a.value;let y;for(;(y=u[d])&&!y.components;)d++;return d}),c=S(()=>a.value.matched[i.value]);xn(ip,S(()=>i.value+1)),xn(E5,c),xn(mr,a);const p=Z();return Ce(()=>[p.value,c.value,n.name],([d,u,y],[h,m,f])=>{u&&(u.instances[y]=d,m&&m!==u&&d&&d===h&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),d&&u&&(!m||!Ns(u,m)||!h)&&(u.enterCallbacks[y]||[]).forEach(B=>B(d))},{flush:"post"}),()=>{const d=a.value,u=n.name,y=c.value,h=y&&y.components[u];if(!h)return up(o.default,{Component:h,route:d});const m=y.props[u],f=m?m===!0?d.params:typeof m=="function"?m(d):m:null,A=hn(h,Oe({},f,s,{onVnodeUnmounted:D=>{D.component.isUnmounted&&(y.instances[u]=null)},ref:p}));if(rs&&A.ref){const D={depth:i.value,name:y.name,path:y.path,meta:y.meta};(In(A.ref)?A.ref.map(_=>_.i):[A.ref.i]).forEach(_=>{_.__vrv_devtools=D})}return up(o.default,{Component:A,route:d})||A}}});function up(n,s){if(!n)return null;const o=n(s);return o.length===1?o[0]:o}const O5=M5;function N5(){const n=$n(),s=n.parent&&n.parent.type.name;if(s&&(s==="KeepAlive"||s.includes("Transition"))){const o=s==="KeepAlive"?"keep-alive":"transition";$e(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`)}}function zo(n,s){const o=Oe({},n,{matched:n.matched.map(l=>G5(l,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:n.fullPath,tooltip:s,value:o}}}function ol(n){return{_custom:{display:n}}}let L5=0;function W5(n,s,o){if(s.__hasDevtools)return;s.__hasDevtools=!0;const l=L5++;IA({id:"org.vuejs.router"+(l?"."+l:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:n},a=>{typeof a.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),a.on.inspectComponent((u,y)=>{u.instanceData&&u.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:zo(s.currentRoute.value,"Current Route")})}),a.on.visitComponentTree(({treeNode:u,componentInstance:y})=>{if(y.__vrv_devtools){const h=y.__vrv_devtools;u.tags.push({label:(h.name?`${h.name.toString()}: `:"")+h.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:Xu})}In(y.__vrl_devtools)&&(y.__devtoolsApi=a,y.__vrl_devtools.forEach(h=>{let m=sy,f="";h.isExactActive?(m=ny,f="This is exactly active"):h.isActive&&(m=ey,f="This link is active"),u.tags.push({label:h.route.path,textColor:0,tooltip:f,backgroundColor:m})}))}),Ce(s.currentRoute,()=>{p(),a.notifyComponentUpdate(),a.sendInspectorTree(c),a.sendInspectorState(c)});const r="router:navigations:"+l;a.addTimelineLayer({id:r,label:`Router${l?" "+l:""} Navigations`,color:4237508}),s.onError((u,y)=>{a.addTimelineEvent({layerId:r,event:{title:"Error during Navigation",subtitle:y.fullPath,logType:"error",time:a.now(),data:{error:u},groupId:y.meta.__navigationId}})});let i=0;s.beforeEach((u,y)=>{const h={guard:ol("beforeEach"),from:zo(y,"Current Location during this navigation"),to:zo(u,"Target location")};Object.defineProperty(u.meta,"__navigationId",{value:i++}),a.addTimelineEvent({layerId:r,event:{time:a.now(),title:"Start of navigation",subtitle:u.fullPath,data:h,groupId:u.meta.__navigationId}})}),s.afterEach((u,y,h)=>{const m={guard:ol("afterEach")};h?(m.failure={_custom:{type:Error,readOnly:!0,display:h?h.message:"",tooltip:"Navigation Failure",value:h}},m.status=ol("❌")):m.status=ol("✅"),m.from=zo(y,"Current Location during this navigation"),m.to=zo(u,"Target location"),a.addTimelineEvent({layerId:r,event:{title:"End of navigation",subtitle:u.fullPath,time:a.now(),data:m,logType:h?"warning":"default",groupId:u.meta.__navigationId}})});const c="router-inspector:"+l;a.addInspector({id:c,label:"Routes"+(l?" "+l:""),icon:"book",treeFilterPlaceholder:"Search routes"});function p(){if(!d)return;const u=d;let y=o.getRoutes().filter(h=>!h.parent);y.forEach(ly),u.filter&&(y=y.filter(h=>gr(h,u.filter.toLowerCase()))),y.forEach(h=>ty(h,s.currentRoute.value)),u.rootNodes=y.map(oy)}let d;a.on.getInspectorTree(u=>{d=u,u.app===n&&u.inspectorId===c&&p()}),a.on.getInspectorState(u=>{if(u.app===n&&u.inspectorId===c){const h=o.getRoutes().find(m=>m.record.__vd_id===u.nodeId);h&&(u.state={options:q5(h)})}}),a.sendInspectorTree(c),a.sendInspectorState(c)})}function R5(n){return n.optional?n.repeatable?"*":"?":n.repeatable?"+":""}function q5(n){const{record:s}=n,o=[{editable:!1,key:"path",value:s.path}];return s.name!=null&&o.push({editable:!1,key:"name",value:s.name}),o.push({editable:!1,key:"regexp",value:n.re}),n.keys.length&&o.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:n.keys.map(l=>`${l.name}${R5(l)}`).join(" "),tooltip:"Param keys",value:n.keys}}}),s.redirect!=null&&o.push({editable:!1,key:"redirect",value:s.redirect}),n.alias.length&&o.push({editable:!1,key:"aliases",value:n.alias.map(l=>l.record.path)}),Object.keys(n.record.meta).length&&o.push({editable:!1,key:"meta",value:n.record.meta}),o.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:n.score.map(l=>l.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:n.score}}}),o}const Xu=15485081,ey=2450411,ny=8702998,V5=2282478,sy=16486972,U5=6710886;function oy(n){const s=[],{record:o}=n;o.name!=null&&s.push({label:String(o.name),textColor:0,backgroundColor:V5}),o.aliasOf&&s.push({label:"alias",textColor:0,backgroundColor:sy}),n.__vd_match&&s.push({label:"matches",textColor:0,backgroundColor:Xu}),n.__vd_exactActive&&s.push({label:"exact",textColor:0,backgroundColor:ny}),n.__vd_active&&s.push({label:"active",textColor:0,backgroundColor:ey}),o.redirect&&s.push({label:typeof o.redirect=="string"?`redirect: ${o.redirect}`:"redirects",textColor:16777215,backgroundColor:U5});let l=o.__vd_id;return l==null&&(l=String(j5++),o.__vd_id=l),{id:l,label:o.path,tags:s,children:n.children.map(oy)}}let j5=0;const H5=/^\/(.*)\/([a-z]*)$/;function ty(n,s){const o=s.matched.length&&Ns(s.matched[s.matched.length-1],n.record);n.__vd_exactActive=n.__vd_active=o,o||(n.__vd_active=s.matched.some(l=>Ns(l,n.record))),n.children.forEach(l=>ty(l,s))}function ly(n){n.__vd_match=!1,n.children.forEach(ly)}function gr(n,s){const o=String(n.re).match(H5);if(n.__vd_match=!1,!o||o.length<3)return!1;if(new RegExp(o[1].replace(/\$$/,""),o[2]).test(s))return n.children.forEach(i=>gr(i,s)),n.record.path!=="/"||s==="/"?(n.__vd_match=n.re.test(s),!0):!1;const a=n.record.path.toLowerCase(),r=wt(a);return!s.startsWith("/")&&(r.includes(s)||a.includes(s))||r.startsWith(s)||a.startsWith(s)||n.record.name&&String(n.record.name).includes(s)?!0:n.children.some(i=>gr(i,s))}function G5(n,s){const o={};for(const l in n)s.includes(l)||(o[l]=n[l]);return o}function K5(n){const s=a5(n.routes,n),o=n.parseQuery||x5,l=n.stringifyQuery||rp,a=n.history;if(!a)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const r=Ko(),i=Ko(),c=Ko(),p=es(As);let d=As;rs&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Da.bind(null,$=>""+$),y=Da.bind(null,v5),h=Da.bind(null,wt);function m($,te){let z,re;return ju($)?(z=s.getRecordMatcher($),re=te):re=$,s.addRoute(re,z)}function f($){const te=s.getRecordMatcher($);te?s.removeRoute(te):$e(`Cannot remove non-existent route "${String($)}"`)}function B(){return s.getRoutes().map($=>$.record)}function A($){return!!s.getRecordMatcher($)}function D($,te){if(te=Oe({},te||p.value),typeof $=="string"){const he=va(o,$,te.path),g=s.resolve({path:he.path},te),C=a.createHref(he.fullPath);return C.startsWith("//")?$e(`Location "${$}" resolved to "${C}". A resolved location cannot start with multiple slashes.`):g.matched.length||$e(`No match found for location with path "${$}"`),Oe(he,g,{params:h(g.params),hash:wt(he.hash),redirectedFrom:void 0,href:C})}let z;if("path"in $)"params"in $&&!("name"in $)&&Object.keys($.params).length&&$e(`Path "${$.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),z=Oe({},$,{path:va(o,$.path,te.path).path});else{const he=Oe({},$.params);for(const g in he)he[g]==null&&delete he[g];z=Oe({},$,{params:y($.params)}),te.params=y(te.params)}const re=s.resolve(z,te),De=$.hash||"";De&&!De.startsWith("#")&&$e(`A \`hash\` should always start with the character "#". Replace "${De}" with "#${De}".`),re.params=u(h(re.params));const Ee=PA(l,Oe({},$,{hash:k5(De),path:re.path})),ge=a.createHref(Ee);return ge.startsWith("//")?$e(`Location "${$}" resolved to "${ge}". A resolved location cannot start with multiple slashes.`):re.matched.length||$e(`No match found for location with path "${"path"in $?$.path:$}"`),Oe({fullPath:Ee,hash:De,query:l===rp?w5($.query):$.query||{}},re,{redirectedFrom:void 0,href:ge})}function b($){return typeof $=="string"?va(o,$,p.value.path):Oe({},$)}function _($,te){if(d!==$)return Mo(8,{from:te,to:$})}function w($){return K($)}function P($){return w(Oe(b($),{replace:!0}))}function W($){const te=$.matched[$.matched.length-1];if(te&&te.redirect){const{redirect:z}=te;let re=typeof z=="function"?z($):z;if(typeof re=="string"&&(re=re.includes("?")||re.includes("#")?re=b(re):{path:re},re.params={}),!("path"in re)&&!("name"in re))throw $e(`Invalid redirect found:
${JSON.stringify(re,null,2)}
 when navigating to "${$.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Oe({query:$.query,hash:$.hash,params:"path"in re?{}:$.params},re)}}function K($,te){const z=d=D($),re=p.value,De=$.state,Ee=$.force,ge=$.replace===!0,he=W(z);if(he)return K(Oe(b(he),{state:typeof he=="object"?Oe({},De,he.state):De,force:Ee,replace:ge}),te||z);const g=z;g.redirectedFrom=te;let C;return!Ee&&Qc(l,re,z)&&(C=Mo(16,{to:g,from:re}),Le(re,re,!0,!1)),(C?Promise.resolve(C):H(g,re)).catch(E=>ss(E)?ss(E,2)?E:ke(E):X(E,g,re)).then(E=>{if(E){if(ss(E,2))return Qc(l,D(E.to),g)&&te&&(te._count=te._count?te._count+1:1)>10?($e(`Detected an infinite redirection in a navigation guard when going from "${re.fullPath}" to "${g.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):K(Oe({replace:ge},b(E.to),{state:typeof E.to=="object"?Oe({},De,E.to.state):De,force:Ee}),te||g)}else E=ye(g,re,!0,ge,De);return le(g,re,E),E})}function F($,te){const z=_($,te);return z?Promise.reject(z):Promise.resolve()}function H($,te){let z;const[re,De,Ee]=z5($,te);z=xa(re.reverse(),"beforeRouteLeave",$,te);for(const he of re)he.leaveGuards.forEach(g=>{z.push(_s(g,$,te))});const ge=F.bind(null,$,te);return z.push(ge),Bo(z).then(()=>{z=[];for(const he of r.list())z.push(_s(he,$,te));return z.push(ge),Bo(z)}).then(()=>{z=xa(De,"beforeRouteUpdate",$,te);for(const he of De)he.updateGuards.forEach(g=>{z.push(_s(g,$,te))});return z.push(ge),Bo(z)}).then(()=>{z=[];for(const he of $.matched)if(he.beforeEnter&&!te.matched.includes(he))if(In(he.beforeEnter))for(const g of he.beforeEnter)z.push(_s(g,$,te));else z.push(_s(he.beforeEnter,$,te));return z.push(ge),Bo(z)}).then(()=>($.matched.forEach(he=>he.enterCallbacks={}),z=xa(Ee,"beforeRouteEnter",$,te),z.push(ge),Bo(z))).then(()=>{z=[];for(const he of i.list())z.push(_s(he,$,te));return z.push(ge),Bo(z)}).catch(he=>ss(he,8)?he:Promise.reject(he))}function le($,te,z){for(const re of c.list())re($,te,z)}function ye($,te,z,re,De){const Ee=_($,te);if(Ee)return Ee;const ge=te===As,he=rs?history.state:{};z&&(re||ge?a.replace($.fullPath,Oe({scroll:ge&&he&&he.scroll},De)):a.push($.fullPath,De)),p.value=$,Le($,te,z,ge),ke()}let Q;function _e(){Q||(Q=a.listen(($,te,z)=>{if(!ms.listening)return;const re=D($),De=W(re);if(De){K(Oe(De,{replace:!0}),re).catch(ct);return}d=re;const Ee=p.value;rs&&qA(Xc(Ee.fullPath,z.delta),sa()),H(re,Ee).catch(ge=>ss(ge,12)?ge:ss(ge,2)?(K(ge.to,re).then(he=>{ss(he,20)&&!z.delta&&z.type===xt.pop&&a.go(-1,!1)}).catch(ct),Promise.reject()):(z.delta&&a.go(-z.delta,!1),X(ge,re,Ee))).then(ge=>{ge=ge||ye(re,Ee,!1),ge&&(z.delta&&!ss(ge,8)?a.go(-z.delta,!1):z.type===xt.pop&&ss(ge,20)&&a.go(-1,!1)),le(re,Ee,ge)}).catch(ct)}))}let Pe=Ko(),Ie=Ko(),qe;function X($,te,z){ke($);const re=Ie.list();return re.length?re.forEach(De=>De($,te,z)):($e("uncaught error during route navigation:"),console.error($)),Promise.reject($)}function ue(){return qe&&p.value!==As?Promise.resolve():new Promise(($,te)=>{Pe.add([$,te])})}function ke($){return qe||(qe=!$,_e(),Pe.list().forEach(([te,z])=>$?z($):te()),Pe.reset()),$}function Le($,te,z,re){const{scrollBehavior:De}=n;if(!rs||!De)return Promise.resolve();const Ee=!z&&VA(Xc($.fullPath,0))||(re||!z)&&history.state&&history.state.scroll||null;return sn().then(()=>De($,te,Ee)).then(ge=>ge&&RA(ge)).catch(ge=>X(ge,$,te))}const kn=$=>a.go($);let tn;const mn=new Set,ms={currentRoute:p,listening:!0,addRoute:m,removeRoute:f,hasRoute:A,getRoutes:B,resolve:D,options:n,push:w,replace:P,go:kn,back:()=>kn(-1),forward:()=>kn(1),beforeEach:r.add,beforeResolve:i.add,afterEach:c.add,onError:Ie.add,isReady:ue,install($){const te=this;$.component("RouterLink",F5),$.component("RouterView",O5),$.config.globalProperties.$router=te,Object.defineProperty($.config.globalProperties,"$route",{enumerable:!0,get:()=>v(p)}),rs&&!tn&&p.value===As&&(tn=!0,w(a.location).catch(De=>{$e("Unexpected error when starting the router:",De)}));const z={};for(const De in As)z[De]=S(()=>p.value[De]);$.provide(yi,te),$.provide(Ju,je(z)),$.provide(mr,p);const re=$.unmount;mn.add($),$.unmount=function(){mn.delete($),mn.size<1&&(d=As,Q&&Q(),Q=null,p.value=As,tn=!1,qe=!1),re()},rs&&W5($,te,s)}};return ms}function Bo(n){return n.reduce((s,o)=>s.then(()=>o()),Promise.resolve())}function z5(n,s){const o=[],l=[],a=[],r=Math.max(s.matched.length,n.matched.length);for(let i=0;i<r;i++){const c=s.matched[i];c&&(n.matched.find(d=>Ns(d,c))?l.push(c):o.push(c));const p=n.matched[i];p&&(s.matched.find(d=>Ns(d,p))||a.push(p))}return[o,l,a]}const wa=Z(!1),dt=Z(!1),vo=Z(!1),Y5=Z(!0),Br=MB({xs:460,...$B}),lo=bA(),ay=cA(),Z5=S(()=>lo.height.value-lo.width.value/$s>180),ry=aA(jn?document.body:null),So=IB(),Q5=S(()=>{var n,s;return["INPUT","TEXTAREA"].includes(((n=So.value)==null?void 0:n.tagName)||"")||((s=So.value)==null?void 0:s.classList.contains("CodeMirror-code"))}),J5=S(()=>{var n;return["BUTTON","A"].includes(((n=So.value)==null?void 0:n.tagName)||"")});Hn("slidev-camera","default");Hn("slidev-mic","default");const ul=Hn("slidev-scale",0),dn=Hn("slidev-show-overview",!1),Ea=Hn("slidev-presenter-cursor",!0),yp=Hn("slidev-show-editor",!1);Hn("slidev-editor-width",jn?window.innerWidth*.4:100);const iy=Nu(dn);function hp(n,s,o,l=a=>a){return n*l(.5-s*(.5-o))}function X5(n){return[-n[0],-n[1]]}function Rn(n,s){return[n[0]+s[0],n[1]+s[1]]}function Pn(n,s){return[n[0]-s[0],n[1]-s[1]]}function Wn(n,s){return[n[0]*s,n[1]*s]}function e3(n,s){return[n[0]/s,n[1]/s]}function Yo(n){return[n[1],-n[0]]}function fp(n,s){return n[0]*s[0]+n[1]*s[1]}function n3(n,s){return n[0]===s[0]&&n[1]===s[1]}function s3(n){return Math.hypot(n[0],n[1])}function o3(n){return n[0]*n[0]+n[1]*n[1]}function mp(n,s){return o3(Pn(n,s))}function cy(n){return e3(n,s3(n))}function t3(n,s){return Math.hypot(n[1]-s[1],n[0]-s[0])}function Zo(n,s,o){let l=Math.sin(o),a=Math.cos(o),r=n[0]-s[0],i=n[1]-s[1],c=r*a-i*l,p=r*l+i*a;return[c+s[0],p+s[1]]}function Ar(n,s,o){return Rn(n,Wn(Pn(s,n),o))}function gp(n,s,o){return Rn(n,Wn(s,o))}var{min:Ao,PI:l3}=Math,Bp=.275,Qo=l3+1e-4;function a3(n,s={}){let{size:o=16,smoothing:l=.5,thinning:a=.5,simulatePressure:r=!0,easing:i=X=>X,start:c={},end:p={},last:d=!1}=s,{cap:u=!0,easing:y=X=>X*(2-X)}=c,{cap:h=!0,easing:m=X=>--X*X*X+1}=p;if(n.length===0||o<=0)return[];let f=n[n.length-1].runningLength,B=c.taper===!1?0:c.taper===!0?Math.max(o,f):c.taper,A=p.taper===!1?0:p.taper===!0?Math.max(o,f):p.taper,D=Math.pow(o*l,2),b=[],_=[],w=n.slice(0,10).reduce((X,ue)=>{let ke=ue.pressure;if(r){let Le=Ao(1,ue.distance/o),kn=Ao(1,1-Le);ke=Ao(1,X+(kn-X)*(Le*Bp))}return(X+ke)/2},n[0].pressure),P=hp(o,a,n[n.length-1].pressure,i),W,K=n[0].vector,F=n[0].point,H=F,le=F,ye=H,Q=!1;for(let X=0;X<n.length;X++){let{pressure:ue}=n[X],{point:ke,vector:Le,distance:kn,runningLength:tn}=n[X];if(X<n.length-1&&f-tn<3)continue;if(a){if(r){let Ee=Ao(1,kn/o),ge=Ao(1,1-Ee);ue=Ao(1,w+(ge-w)*(Ee*Bp))}P=hp(o,a,ue,i)}else P=o/2;W===void 0&&(W=P);let mn=tn<B?y(tn/B):1,ms=f-tn<A?m((f-tn)/A):1;P=Math.max(.01,P*Math.min(mn,ms));let $=(X<n.length-1?n[X+1]:n[X]).vector,te=X<n.length-1?fp(Le,$):1,z=fp(Le,K)<0&&!Q,re=te!==null&&te<0;if(z||re){let Ee=Wn(Yo(K),P);for(let ge=1/13,he=0;he<=1;he+=ge)le=Zo(Pn(ke,Ee),ke,Qo*he),b.push(le),ye=Zo(Rn(ke,Ee),ke,Qo*-he),_.push(ye);F=le,H=ye,re&&(Q=!0);continue}if(Q=!1,X===n.length-1){let Ee=Wn(Yo(Le),P);b.push(Pn(ke,Ee)),_.push(Rn(ke,Ee));continue}let De=Wn(Yo(Ar($,Le,te)),P);le=Pn(ke,De),(X<=1||mp(F,le)>D)&&(b.push(le),F=le),ye=Rn(ke,De),(X<=1||mp(H,ye)>D)&&(_.push(ye),H=ye),w=ue,K=Le}let _e=n[0].point.slice(0,2),Pe=n.length>1?n[n.length-1].point.slice(0,2):Rn(n[0].point,[1,1]),Ie=[],qe=[];if(n.length===1){if(!(B||A)||d){let X=gp(_e,cy(Yo(Pn(_e,Pe))),-(W||P)),ue=[];for(let ke=1/13,Le=ke;Le<=1;Le+=ke)ue.push(Zo(X,_e,Qo*2*Le));return ue}}else{if(!(B||A&&n.length===1))if(u)for(let ue=1/13,ke=ue;ke<=1;ke+=ue){let Le=Zo(_[0],_e,Qo*ke);Ie.push(Le)}else{let ue=Pn(b[0],_[0]),ke=Wn(ue,.5),Le=Wn(ue,.51);Ie.push(Pn(_e,ke),Pn(_e,Le),Rn(_e,Le),Rn(_e,ke))}let X=Yo(X5(n[n.length-1].vector));if(A||B&&n.length===1)qe.push(Pe);else if(h){let ue=gp(Pe,X,P);for(let ke=1/29,Le=ke;Le<1;Le+=ke)qe.push(Zo(ue,Pe,Qo*3*Le))}else qe.push(Rn(Pe,Wn(X,P)),Rn(Pe,Wn(X,P*.99)),Pn(Pe,Wn(X,P*.99)),Pn(Pe,Wn(X,P)))}return b.concat(qe,_.reverse(),Ie)}function r3(n,s={}){var o;let{streamline:l=.5,size:a=16,last:r=!1}=s;if(n.length===0)return[];let i=.15+(1-l)*.85,c=Array.isArray(n[0])?n:n.map(({x:m,y:f,pressure:B=.5})=>[m,f,B]);if(c.length===2){let m=c[1];c=c.slice(0,-1);for(let f=1;f<5;f++)c.push(Ar(c[0],m,f/4))}c.length===1&&(c=[...c,[...Rn(c[0],[1,1]),...c[0].slice(2)]]);let p=[{point:[c[0][0],c[0][1]],pressure:c[0][2]>=0?c[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],d=!1,u=0,y=p[0],h=c.length-1;for(let m=1;m<c.length;m++){let f=r&&m===h?c[m].slice(0,2):Ar(y.point,c[m],i);if(n3(y.point,f))continue;let B=t3(f,y.point);if(u+=B,m<h&&!d){if(u<a)continue;d=!0}y={point:f,pressure:c[m][2]>=0?c[m][2]:.5,vector:cy(Pn(y.point,f)),distance:B,runningLength:u},p.push(y)}return p[0].vector=((o=p[1])==null?void 0:o.vector)||[0,0],p}function i3(n,s={}){return a3(r3(n,s),s)}var c3=()=>({events:{},emit(n,...s){let o=this.events[n]||[];for(let l=0,a=o.length;l<a;l++)o[l](...s)},on(n,s){var o;return(o=this.events[n])!=null&&o.push(s)||(this.events[n]=[s]),()=>{var l;this.events[n]=(l=this.events[n])==null?void 0:l.filter(a=>s!==a)}}});function Pl(n,s){return n-s}function p3(n){return n<0?-1:1}function Tl(n){return[Math.abs(n),p3(n)]}function py(){const n=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${n()+n()}-${n()}-${n()}-${n()}-${n()}${n()}${n()}`}var d3=2,is=d3,Lo=class{constructor(n){this.drauu=n,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(n){}onUnselected(){}onStart(n){}onMove(n){return!1}onEnd(n){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(n){var s;const o=this.drauu.el,l=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const a=this.drauu.el.getBoundingClientRect();return{x:(n.pageX-a.left)*l,y:(n.pageY-a.top)*l,pressure:n.pressure}}else{const a=this.drauu.svgPoint;a.x=n.clientX,a.y=n.clientY;const r=a.matrixTransform((s=o.getScreenCTM())==null?void 0:s.inverse());return{x:r.x*l,y:r.y*l,pressure:n.pressure}}}createElement(n,s){const o=document.createElementNS("http://www.w3.org/2000/svg",n),l=s?{...this.brush,...s}:this.brush;return o.setAttribute("fill",l.fill??"transparent"),o.setAttribute("stroke",l.color),o.setAttribute("stroke-width",l.size.toString()),o.setAttribute("stroke-linecap","round"),l.dasharray&&o.setAttribute("stroke-dasharray",l.dasharray),o}attr(n,s){this.el.setAttribute(n,typeof s=="string"?s:s.toFixed(is))}_setEvent(n){this.event=n,this.point=this.getMousePosition(n)}_eventDown(n){return this._setEvent(n),this.start=this.point,this.onStart(this.point)}_eventMove(n){return this._setEvent(n),this.onMove(this.point)}_eventUp(n){return this._setEvent(n),this.onEnd(this.point)}},u3=class extends Lo{constructor(){super(...arguments),this.points=[]}onStart(n){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[n],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(n){return this.el||this.onStart(n),this.points[this.points.length-1]!==n&&this.points.push(n),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const n=this.el;return this.el=null,!!n}getSvgData(n){const s=i3(n,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!s.length)return"";const o=s.reduce((l,[a,r],i,c)=>{const[p,d]=c[(i+1)%c.length];return l.push(a,r,(a+p)/2,(r+d)/2),l},["M",...s[0],"Q"]);return o.push("Z"),o.map(l=>typeof l=="number"?l.toFixed(2):l).join(" ")}},y3=class extends Lo{onStart(n){return this.el=this.createElement("ellipse"),this.attr("cx",n.x),this.attr("cy",n.y),this.el}onMove(n){if(!this.el||!this.start)return!1;let[s,o]=Tl(n.x-this.start.x),[l,a]=Tl(n.y-this.start.y);if(this.shiftPressed){const r=Math.min(s,l);s=r,l=r}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",s),this.attr("ry",l);else{const[r,i]=[this.start.x,this.start.x+s*o].sort(Pl),[c,p]=[this.start.y,this.start.y+l*a].sort(Pl);this.attr("cx",(r+i)/2),this.attr("cy",(c+p)/2),this.attr("rx",(i-r)/2),this.attr("ry",(p-c)/2)}return!0}onEnd(){const n=this.el;return this.el=null,!(!n||!n.getTotalLength())}};function dy(n,s){const o=document.createElementNS("http://www.w3.org/2000/svg","defs"),l=document.createElementNS("http://www.w3.org/2000/svg","marker"),a=document.createElementNS("http://www.w3.org/2000/svg","path");return a.setAttribute("fill",s),l.setAttribute("id",n),l.setAttribute("viewBox","0 -5 10 10"),l.setAttribute("refX","5"),l.setAttribute("refY","0"),l.setAttribute("markerWidth","4"),l.setAttribute("markerHeight","4"),l.setAttribute("orient","auto"),a.setAttribute("d","M0,-5L10,0L0,5"),l.appendChild(a),o.appendChild(l),o}var h3=class extends Lo{onStart(n){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",n.x),this.attr("y1",n.y),this.attr("x2",n.x),this.attr("y2",n.y),this.brush.arrowEnd){const s=py(),o=document.createElementNS("http://www.w3.org/2000/svg","g");return o.append(dy(s,this.brush.color)),o.append(this.el),this.attr("marker-end",`url(#${s})`),o}return this.el}onMove(n){if(!this.el)return!1;let{x:s,y:o}=n;if(this.shiftPressed){const l=n.x-this.start.x,a=n.y-this.start.y;if(a!==0){let r=l/a;r=Math.round(r),Math.abs(r)<=1?(s=this.start.x+a*r,o=this.start.y+a):(s=this.start.x+l,o=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-s),this.attr("y1",this.start.y*2-o),this.attr("x2",s),this.attr("y2",o)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",s),this.attr("y2",o)),!0}onEnd(){const n=this.el;return this.el=null,!(!n||n.getTotalLength()<5)}},f3=class extends Lo{onStart(n){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",n.x),this.attr("y",n.y),this.el}onMove(n){if(!this.el||!this.start)return!1;let[s,o]=Tl(n.x-this.start.x),[l,a]=Tl(n.y-this.start.y);if(this.shiftPressed){const r=Math.min(s,l);s=r,l=r}if(this.altPressed)this.attr("x",this.start.x-s),this.attr("y",this.start.y-l),this.attr("width",s*2),this.attr("height",l*2);else{const[r,i]=[this.start.x,this.start.x+s*o].sort(Pl),[c,p]=[this.start.y,this.start.y+l*a].sort(Pl);this.attr("x",r),this.attr("y",c),this.attr("width",i-r),this.attr("height",p-c)}return!0}onEnd(){const n=this.el;return this.el=null,!(!n||!n.getTotalLength())}};function m3(n,s){const o=n.x-s.x,l=n.y-s.y;return o*o+l*l}function g3(n,s,o){let l=s.x,a=s.y,r=o.x-l,i=o.y-a;if(r!==0||i!==0){const c=((n.x-l)*r+(n.y-a)*i)/(r*r+i*i);c>1?(l=o.x,a=o.y):c>0&&(l+=r*c,a+=i*c)}return r=n.x-l,i=n.y-a,r*r+i*i}function B3(n,s){let o=n[0];const l=[o];let a;for(let r=1,i=n.length;r<i;r++)a=n[r],m3(a,o)>s&&(l.push(a),o=a);return o!==a&&a&&l.push(a),l}function Cr(n,s,o,l,a){let r=l,i=0;for(let c=s+1;c<o;c++){const p=g3(n[c],n[s],n[o]);p>r&&(i=c,r=p)}r>l&&(i-s>1&&Cr(n,s,i,l,a),a.push(n[i]),o-i>1&&Cr(n,i,o,l,a))}function A3(n,s){const o=n.length-1,l=[n[0]];return Cr(n,0,o,s,l),l.push(n[o]),l}function Ap(n,s,o=!1){if(n.length<=2)return n;const l=s!==void 0?s*s:1;return n=o?n:B3(n,l),n=A3(n,l),n}var C3=class extends Lo{constructor(){super(...arguments),this.points=[],this.count=0}onStart(n){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[n],this.brush.arrowEnd){this.arrowId=py();const s=dy(this.arrowId,this.brush.color);this.el.appendChild(s)}return this.el}onMove(n){return this.el||this.onStart(n),this.points[this.points.length-1]!==n&&(this.points.push(n),this.count+=1),this.count>5&&(this.points=Ap(this.points,1,!0),this.count=0),this.attr("d",bp(this.points)),!0}onEnd(){const n=this.el;return this.el=null,!(!n||(n.setAttribute("d",bp(Ap(this.points,1,!0))),!n.getTotalLength()))}};function b3(n,s){const o=s.x-n.x,l=s.y-n.y;return{length:Math.sqrt(o**2+l**2),angle:Math.atan2(l,o)}}function Cp(n,s,o,l){const a=s||n,r=o||n,i=.2,c=b3(a,r),p=c.angle+(l?Math.PI:0),d=c.length*i,u=n.x+Math.cos(p)*d,y=n.y+Math.sin(p)*d;return{x:u,y}}function k3(n,s,o){const l=Cp(o[s-1],o[s-2],n),a=Cp(n,o[s-1],o[s+1],!0);return`C ${l.x.toFixed(is)},${l.y.toFixed(is)} ${a.x.toFixed(is)},${a.y.toFixed(is)} ${n.x.toFixed(is)},${n.y.toFixed(is)}`}function bp(n){return n.reduce((s,o,l,a)=>l===0?`M ${o.x.toFixed(is)},${o.y.toFixed(is)}`:`${s} ${k3(o,l,a)}`,"")}var _3=class extends Lo{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(n){const s=(o,l)=>{if(o&&o.length)for(let a=0;a<o.length;a++){const r=o[a];if(r.getTotalLength){const i=r.getTotalLength();for(let c=0;c<this.pathSubFactor;c++){const p=r.getPointAtLength(i*c/this.pathSubFactor),d=r.getPointAtLength(i*(c+1)/this.pathSubFactor);this.pathFragments.push({x1:p.x,x2:d.x,y1:p.y,y2:d.y,segment:c,element:l||r})}}else r.children&&s(r.children,r)}};n&&s(n.children)}onUnselected(){this.pathFragments=[]}onStart(n){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=n.x,this.svgPointPrevious.y=n.y}onMove(n){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=n.x,this.svgPointCurrent.y=n.y;const s=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,s}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const n=[];if(this.pathFragments.length)for(let s=0;s<this.pathFragments.length;s++){const o=this.pathFragments[s],l={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(o,l)&&(o.element.remove(),n.push(s))}return n.length&&(this.pathFragments=this.pathFragments.filter((s,o)=>!n.includes(o))),n.length>0}lineLineIntersect(n,s){const o=n.x1,l=n.x2,a=s.x1,r=s.x2,i=n.y1,c=n.y2,p=s.y1,d=s.y2,u=(o-l)*(p-d)-(i-c)*(a-r),y=(o*c-i*l)*(a-r)-(o-l)*(a*d-p*r),h=(o*c-i*l)*(p-d)-(i-c)*(a*d-p*r),m=(f,B,A)=>f>=B&&f<=A?!0:f>=A&&f<=B;if(u===0)return!1;{const f={x:y/u,y:h/u};return m(f.x,o,l)&&m(f.y,i,c)&&m(f.x,a,r)&&m(f.y,p,d)}}};function D3(n){return{draw:new C3(n),stylus:new u3(n),line:new h3(n),rectangle:new f3(n),ellipse:new y3(n),eraseLine:new _3(n)}}var v3=class{constructor(n={}){this.options=n,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=c3(),this._models=D3(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),n.el&&this.mount(n.el,n.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(n){this._models[this.mode].onUnselected(),this.options.brush.mode=n,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(n){this.options.brush=n}resolveSelector(n){return typeof n=="string"?document.querySelector(n):n||null}mount(n,s){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(n),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const o=this.resolveSelector(s)||this.el,l=this.eventStart.bind(this),a=this.eventMove.bind(this),r=this.eventEnd.bind(this),i=this.eventKeyboard.bind(this);o.addEventListener("pointerdown",l,{passive:!1}),window.addEventListener("pointermove",a,{passive:!1}),window.addEventListener("pointerup",r,{passive:!1}),window.addEventListener("pointercancel",r,{passive:!1}),window.addEventListener("keydown",i,!1),window.addEventListener("keyup",i,!1),this._disposables.push(()=>{o.removeEventListener("pointerdown",l),window.removeEventListener("pointermove",a),window.removeEventListener("pointerup",r),window.removeEventListener("pointercancel",r),window.removeEventListener("keydown",i,!1),window.removeEventListener("keyup",i,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(n=>n()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(n,s){return this._emitter.on(n,s)}undo(){const n=this.el;return n.lastElementChild?(this._undoStack.push(n.lastElementChild.cloneNode(!0)),n.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var n;return!!((n=this.el)!=null&&n.lastElementChild)}eventMove(n){!this.acceptsInput(n)||!this.drawing||this.model._eventMove(n)&&(n.stopPropagation(),n.preventDefault(),this._emitter.emit("changed"))}eventStart(n){this.acceptsInput(n)&&(n.stopPropagation(),n.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(n),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(n){if(!this.acceptsInput(n)||!this.drawing)return;const s=this.model._eventUp(n);s?(s instanceof Element&&s!==this._currentNode&&(this._currentNode=s),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(n){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(n.pointerType)}eventKeyboard(n){this.shiftPressed===n.shiftKey&&this.altPressed===n.altKey||(this.shiftPressed=n.shiftKey,this.altPressed=n.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const n=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",n)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(n){this.clear(),this.el.innerHTML=n}};function x3(n){return new v3(n)}const br=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Jn=Hn("slidev-drawing-enabled",!1),Fx=Hn("slidev-drawing-pinned",!1),w3=Z(!1),E3=Z(!1),I3=Z(!1),Et=Z(!1),Qs=sB(Hn("slidev-drawing-brush",{color:br[0],size:4,mode:"stylus"})),kp=Z("stylus"),uy=S(()=>Se.drawings.syncAll||Bn.value);let It=!1;const Jo=S({get(){return kp.value},set(n){kp.value=n,n==="arrow"?(Qs.mode="line",Qs.arrowEnd=!0):(Qs.mode=n,Qs.arrowEnd=!1)}}),$3=je({brush:Qs,acceptsInputTypes:S(()=>Jn.value&&(!Se.drawings.presenterOnly||Bn.value)?void 0:["pen"]),coordinateTransform:!1}),fn=jl(x3($3));function S3(){fn.clear(),uy.value&&Pu(Ke.value,"")}function hi(){var n;E3.value=fn.canRedo(),w3.value=fn.canUndo(),I3.value=!!((n=fn.el)!=null&&n.children.length)}function F3(n){It=!0;const s=Sl[n||Ke.value];s!=null?fn.load(s):fn.clear(),hi(),It=!1}fn.on("changed",()=>{if(hi(),!It){const n=fn.dump(),s=Ke.value;(Sl[s]||"")!==n&&uy.value&&Pu(s,fn.dump())}});j8(n=>{It=!0,n[Ke.value]!=null&&fn.load(n[Ke.value]||""),It=!1,hi()});sn(()=>{Ce(Ke,()=>{fn.mounted&&F3()},{immediate:!0})});fn.on("start",()=>Et.value=!0);fn.on("end",()=>Et.value=!1);window.addEventListener("keydown",n=>{if(!Jn.value)return;const s=!n.ctrlKey&&!n.altKey&&!n.shiftKey&&!n.metaKey;let o=!0;n.code==="KeyZ"&&(n.ctrlKey||n.metaKey)?n.shiftKey?fn.redo():fn.undo():n.code==="Escape"?Jn.value=!1:n.code==="KeyL"&&s?Jo.value="line":n.code==="KeyA"&&s?Jo.value="arrow":n.code==="KeyS"&&s?Jo.value="stylus":n.code==="KeyR"&&s?Jo.value="rectangle":n.code==="KeyE"&&s?Jo.value="ellipse":n.code==="KeyC"&&s?S3():n.code.startsWith("Digit")&&s&&+n.code[5]<=br.length?Qs.color=br[+n.code[5]-1]:o=!1,o&&(n.preventDefault(),n.stopPropagation())},!1);function Qe(...n){return S(()=>n.every(s=>ln(s)))}function Dn(n){return S(()=>!ln(n))}const _p=GB(),Ia=Hn("slidev-color-schema","auto"),kr=S(()=>Se.colorSchema!=="auto"),fi=S({get(){return kr.value?Se.colorSchema==="dark":Ia.value==="auto"?_p.value:Ia.value==="dark"},set(n){kr.value||(Ia.value=n===_p.value?"auto":n?"dark":"light")}}),yy=Nu(fi);jn&&Ce(fi,n=>{const s=document.querySelector("html");s.classList.toggle("dark",n),s.classList.toggle("light",!n)},{immediate:!0});const yl=Z(1),hl=S(()=>Ze.length-1),En=Z(0),mi=Z(0);function P3(){En.value>yl.value&&(En.value-=1)}function T3(){En.value<hl.value&&(En.value+=1)}function M3(){if(En.value>yl.value){let n=En.value-mi.value;n<yl.value&&(n=yl.value),En.value=n}}function O3(){if(En.value<hl.value){let n=En.value+mi.value;n>hl.value&&(n=hl.value),En.value=n}}function N3(){const{escape:n,space:s,shift:o,left:l,right:a,up:r,down:i,enter:c,d:p,g:d,o:u}=ay;let y=[{name:"next_space",key:Qe(s,Dn(o)),fn:Ps,autoRepeat:!0},{name:"prev_space",key:Qe(s,o),fn:Ts,autoRepeat:!0},{name:"next_right",key:Qe(a,Dn(o),Dn(dn)),fn:Ps,autoRepeat:!0},{name:"prev_left",key:Qe(l,Dn(o),Dn(dn)),fn:Ts,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Ps,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Ts,autoRepeat:!0},{name:"next_down",key:Qe(i,Dn(dn)),fn:St,autoRepeat:!0},{name:"prev_up",key:Qe(r,Dn(dn)),fn:()=>Ft(!1),autoRepeat:!0},{name:"next_shift",key:Qe(a,o),fn:St,autoRepeat:!0},{name:"prev_shift",key:Qe(l,o),fn:()=>Ft(!1),autoRepeat:!0},{name:"toggle_dark",key:Qe(p,Dn(Jn)),fn:yy},{name:"toggle_overview",key:Qe(u,Dn(Jn)),fn:iy},{name:"hide_overview",key:Qe(n,Dn(Jn)),fn:()=>dn.value=!1},{name:"goto",key:Qe(d,Dn(Jn)),fn:()=>vo.value=!vo.value},{name:"next_overview",key:Qe(a,dn),fn:T3},{name:"prev_overview",key:Qe(l,dn),fn:P3},{name:"up_overview",key:Qe(r,dn),fn:M3},{name:"down_overview",key:Qe(i,dn),fn:O3},{name:"goto_from_overview",key:Qe(c,dn),fn:()=>{No(En.value),dn.value=!1}}];const h=new Set(y.map(f=>f.name));if(y.filter(f=>f.name&&h.has(f.name)).length===0){const f=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(f),console.warn(f)}return y}const hy=Qe(Dn(Q5),Dn(J5),Y5);function L3(n,s,o=!1){typeof n=="string"&&(n=ay[n]);const l=Qe(n,hy);let a=0,r;const i=()=>{if(clearTimeout(r),!l.value){a=0;return}o&&(r=setTimeout(i,Math.max(1e3-a*250,150)),a++),s()};return Ce(l,i,{flush:"sync"})}function W3(n,s){return EB(n,o=>{hy.value&&(o.repeat||s())})}function R3(){const n=N3();new Map(n.map(o=>[o.key,o])).forEach(o=>{o.fn&&L3(o.key,o.fn,o.autoRepeat)}),W3("f",()=>ry.toggle())}const q3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},V3=e("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),U3=[V3];function j3(n,s){return k(),ae("svg",q3,U3)}const H3={name:"carbon-close",render:j3};function gi(n,s=""){var a,r;const o=["slidev-page",s],l=(r=(a=n==null?void 0:n.meta)==null?void 0:a.slide)==null?void 0:r.no;return l!=null&&o.push(`slidev-page-${l}`),o.filter(Boolean).join(" ")}const G3=Me({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(n){const s=n;T(q);const o=Z(),l=lA(o),a=S(()=>s.width?s.width:l.width.value),r=S(()=>s.width?s.width/$s:l.height.value);s.width&&uo(()=>{o.value&&(o.value.style.width=`${a.value}px`,o.value.style.height=`${r.value}px`)});const i=S(()=>a.value/r.value),c=S(()=>s.scale&&!Oo.value?s.scale:i.value<$s?a.value/Ss:r.value*$s/Ss),p=S(()=>({height:`${ci}px`,width:`${Ss}px`,transform:`translate(-50%, -50%) scale(${c.value})`})),d=S(()=>({"select-none":!Se.selectable,"slidev-code-line-numbers":Se.lineNumbers}));return xn(Su,c),(u,y)=>(k(),ae("div",{id:"slide-container",ref_key:"root",ref:o,class:ze(v(d))},[e("div",{id:"slide-content",style:on(v(p))},[ys(u.$slots,"default")],4),ys(u.$slots,"controls")],2))}});const V=(n,s)=>{const o=n.__vccOpts||n;for(const[l,a]of s)o[l]=a;return o},fy=V(G3,[["__file","/home/runner/work/behat-formation/behat-formation/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Bi=Me({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(n,{emit:s}){const o=Qn(n,"clicks",s),l=Qn(n,"clicksElements",s),a=Qn(n,"clicksDisabled",s),r=Qn(n,"clicksOrderMap",s);l.value.length=0,xn(E8,n.route),xn(I8,n.context),xn(rt,o),xn(it,a),xn(zs,l),xn(ar,r)},render(){var n,s;return this.$props.is?hn(this.$props.is):(s=(n=this.$slots)==null?void 0:n.default)==null?void 0:s.call(n)}}),K3=["innerHTML"],z3=Me({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(n){return T(q),(s,o)=>v(Sl)[n.page]?(k(),ae("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:v(Sl)[n.page]},null,8,K3)):ve("v-if",!0)}}),my=V(z3,[["__file","/home/runner/work/behat-formation/behat-formation/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),Y3=Object.freeze(Object.defineProperty({__proto__:null,default:my},Symbol.toStringTag,{value:"Module"})),Z3={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},Q3=["onClick"],J3=Me({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(n,{emit:s}){const o=n;T(q);const l=Qn(o,"modelValue",s);function a(){l.value=!1}function r(m){No(m),a()}function i(m){return m===En.value}const c=Br.smaller("xs"),p=Br.smaller("sm"),d=4*16*2,u=2*16,y=S(()=>c.value?lo.width.value-d:p.value?(lo.width.value-d-u)/2:300),h=S(()=>Math.floor((lo.width.value-d)/(y.value+u)));return uo(()=>{En.value=Ke.value,mi.value=h.value}),(m,f)=>{const B=H3;return k(),ae(Te,null,[Jl(e("div",Z3,[e("div",{class:"grid gap-y-4 gap-x-8 w-full",style:on(`grid-template-columns: repeat(auto-fit,minmax(${v(y)}px,1fr))`)},[(k(!0),ae(Te,null,qt(v(Ze).slice(0,-1),(A,D)=>(k(),ae("div",{key:A.path,class:"relative"},[e("div",{class:ze(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":i(D+1),"border-gray-400":!i(D+1)}]),style:on(v(pi)),onClick:b=>r(+A.path)},[(k(),L(fy,{key:A.path,width:v(y),"clicks-disabled":!0,class:"pointer-events-none"},{default:x(()=>[I(v(Bi),{is:A==null?void 0:A.component,"clicks-disabled":!0,class:ze(v(gi)(A)),route:A,context:"overview"},null,8,["is","class","route"]),I(my,{page:+A.path},null,8,["page"])]),_:2},1032,["width"]))],14,Q3),e("div",{class:"absolute top-0 opacity-50",style:on(`left: ${v(y)+5}px`)},ao(D+1),5)]))),128))],4)],512),[[bu,v(l)]]),v(l)?(k(),ae("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:a},[I(B)])):ve("v-if",!0)],64)}}});const X3=V(J3,[["__file","/home/runner/work/behat-formation/behat-formation/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),eC="/behat-formation/assets/logo-b72bde5d.png",nC={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},sC=Me({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(n,{emit:s}){const o=n;T(q);const l=Qn(o,"modelValue",s);function a(){l.value=!1}return(r,i)=>(k(),L(Hd,null,[v(l)?(k(),ae("div",nC,[e("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:i[0]||(i[0]=c=>a())}),e("div",{class:ze(["m-auto rounded-md bg-main shadow",o.class]),"dark:border":"~ gray-400 opacity-10"},[ys(r.$slots,"default")],2)])):ve("v-if",!0)],1024))}}),oC=V(sC,[["__file","/home/runner/work/behat-formation/behat-formation/node_modules/@slidev/client/internals/Modal.vue"]]),tC={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},lC=["innerHTML"],aC=e("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[e("div",{class:"flex gap-1 children:my-auto"},[e("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),e("img",{class:"w-5 h-5",src:eC,alt:"Slidev"}),e("div",{style:{color:"#2082A6"}},[e("b",null,"Sli"),t("dev ")])])],-1),rC=Me({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(n,{emit:s}){const o=n;T(q);const l=Qn(o,"modelValue",s),a=S(()=>typeof Se.info=="string");return(r,i)=>(k(),L(oC,{modelValue:v(l),"onUpdate:modelValue":i[0]||(i[0]=c=>Fe(l)?l.value=c:null),class:"px-6 py-4"},{default:x(()=>[e("div",tC,[v(a)?(k(),ae("div",{key:0,class:"mb-4",innerHTML:v(Se).info},null,8,lC)):ve("v-if",!0),aC])]),_:1},8,["modelValue"]))}});const iC=V(rC,[["__file","/home/runner/work/behat-formation/behat-formation/node_modules/@slidev/client/internals/InfoDialog.vue"]]),cC=["disabled","onKeydown"],pC=Me({__name:"Goto",setup(n){T(q);const s=Z(),o=Z(""),l=S(()=>{if(o.value.startsWith("/"))return!!Ze.find(i=>i.path===o.value.substring(1));{const i=+o.value;return!isNaN(i)&&i>0&&i<=$y.value}});function a(){l.value&&(o.value.startsWith("/")?No(o.value.substring(1)):No(+o.value)),r()}function r(){vo.value=!1}return Ce(vo,async i=>{var c,p;i?(await sn(),o.value="",(c=s.value)==null||c.focus()):(p=s.value)==null||p.blur()}),Ce(o,i=>{i.match(/^[^0-9/]/)&&(o.value=o.value.substring(1))}),(i,c)=>(k(),ae("div",{id:"slidev-goto-dialog",class:ze(["fixed right-5 bg-main transform transition-all",v(vo)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[Jl(e("input",{ref_key:"input",ref:s,"onUpdate:modelValue":c[0]||(c[0]=p=>o.value=p),type:"text",disabled:!v(vo),class:ze(["outline-none bg-transparent",{"text-red-400":!v(l)&&o.value}]),placeholder:"Goto...",onKeydown:[_c(a,["enter"]),_c(r,["escape"])],onBlur:r},null,42,cC),[[Pg,o.value]])],2))}}),dC=V(pC,[["__file","/home/runner/work/behat-formation/behat-formation/node_modules/@slidev/client/internals/Goto.vue"]]),uC=Me({__name:"Controls",setup(n){T(q);const s=es(),o=es();return(l,a)=>(k(),ae(Te,null,[I(X3,{modelValue:v(dn),"onUpdate:modelValue":a[0]||(a[0]=r=>Fe(dn)?dn.value=r:null)},null,8,["modelValue"]),I(dC),v(s)?(k(),L(v(s),{key:0})):ve("v-if",!0),v(o)?(k(),L(v(o),{key:1,modelValue:v(wa),"onUpdate:modelValue":a[1]||(a[1]=r=>Fe(wa)?wa.value=r:null)},null,8,["modelValue"])):ve("v-if",!0),v(Se).info?(k(),L(iC,{key:2,modelValue:v(dt),"onUpdate:modelValue":a[2]||(a[2]=r=>Fe(dt)?dt.value=r:null)},null,8,["modelValue"])):ve("v-if",!0)],64))}}),yC=V(uC,[["__file","/home/runner/work/behat-formation/behat-formation/node_modules/@slidev/client/internals/Controls.vue"]]),hC={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},fC=e("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),mC=[fC];function gC(n,s){return k(),ae("svg",hC,mC)}const BC={name:"carbon-settings-adjust",render:gC},AC={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},CC=e("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),bC=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),kC=[CC,bC];function _C(n,s){return k(),ae("svg",AC,kC)}const DC={name:"carbon-information",render:_C},vC={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},xC=e("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),wC=[xC];function EC(n,s){return k(),ae("svg",vC,wC)}const IC={name:"carbon-download",render:EC},$C={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},SC=e("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),FC=e("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),PC=[SC,FC];function TC(n,s){return k(),ae("svg",$C,PC)}const MC={name:"carbon-user-speaker",render:TC},OC={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},NC=e("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),LC=e("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),WC=[NC,LC];function RC(n,s){return k(),ae("svg",OC,WC)}const qC={name:"carbon-presentation-file",render:RC},VC={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},UC=e("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),jC=[UC];function HC(n,s){return k(),ae("svg",VC,jC)}const GC={name:"carbon-pen",render:HC},KC={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},zC=e("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),YC=e("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),ZC=[zC,YC];function QC(n,s){return k(),ae("svg",KC,ZC)}const JC={name:"ph-cursor-duotone",render:QC},XC={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},eb=e("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),nb=[eb];function sb(n,s){return k(),ae("svg",XC,nb)}const gy={name:"ph-cursor-fill",render:sb},ob={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},tb=e("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),lb=[tb];function ab(n,s){return k(),ae("svg",ob,lb)}const rb={name:"carbon-sun",render:ab},ib={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},cb=e("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),pb=[cb];function db(n,s){return k(),ae("svg",ib,pb)}const ub={name:"carbon-moon",render:db},yb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},hb=e("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),fb=[hb];function mb(n,s){return k(),ae("svg",yb,fb)}const gb={name:"carbon-apps",render:mb},Bb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ab=e("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),Cb=[Ab];function bb(n,s){return k(),ae("svg",Bb,Cb)}const kb={name:"carbon-arrow-right",render:bb},_b={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Db=e("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),vb=[Db];function xb(n,s){return k(),ae("svg",_b,vb)}const wb={name:"carbon-arrow-left",render:xb},Eb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ib=e("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),$b=[Ib];function Sb(n,s){return k(),ae("svg",Eb,$b)}const Fb={name:"carbon-maximize",render:Sb},Pb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Tb=e("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),Mb=[Tb];function Ob(n,s){return k(),ae("svg",Pb,Mb)}const Nb={name:"carbon-minimize",render:Ob},Lb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Wb=e("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),Rb=[Wb];function qb(n,s){return k(),ae("svg",Lb,Rb)}const Vb={name:"carbon-checkmark",render:qb},Ub={class:"select-list"},jb={class:"title"},Hb={class:"items"},Gb=["onClick"],Kb=Me({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(n,{emit:s}){const o=n;T(q);const l=Qn(o,"modelValue",s,{passive:!0});return(a,r)=>{const i=Vb;return k(),ae("div",Ub,[e("div",jb,ao(n.title),1),e("div",Hb,[(k(!0),ae(Te,null,qt(n.items,c=>(k(),ae("div",{key:c.value,class:ze(["item",{active:v(l)===c.value}]),onClick:()=>{var p;l.value=c.value,(p=c.onClick)==null||p.call(c)}},[I(i,{class:ze(["text-green-500",{"opacity-0":v(l)!==c.value}])},null,8,["class"]),t(" "+ao(c.display||c.value),1)],10,Gb))),128))])])}}});const zb=V(Kb,[["__scopeId","data-v-3f89fa11"],["__file","/home/runner/work/behat-formation/behat-formation/node_modules/@slidev/client/internals/SelectList.vue"]]),Yb={class:"text-sm"},Zb=Me({__name:"Settings",setup(n){T(q);const s=[{display:"Fit",value:0},{display:"1:1",value:1}];return(o,l)=>(k(),ae("div",Yb,[I(zb,{modelValue:v(ul),"onUpdate:modelValue":l[0]||(l[0]=a=>Fe(ul)?ul.value=a:null),title:"Scale",items:s},null,8,["modelValue"])]))}}),Qb=V(Zb,[["__file","/home/runner/work/behat-formation/behat-formation/node_modules/@slidev/client/internals/Settings.vue"]]),Jb={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},Xb=Me({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(n,{emit:s}){const o=n;T(q);const l=Qn(o,"modelValue",s,{passive:!0}),a=Z();return xB(a,()=>{l.value=!1}),(r,i)=>(k(),ae("div",{ref_key:"el",ref:a,class:"flex relative"},[e("button",{class:ze({disabled:n.disabled}),onClick:i[0]||(i[0]=c=>l.value=!v(l))},[ys(r.$slots,"button",{class:ze({disabled:n.disabled})})],2),(k(),L(Hd,null,[v(l)?(k(),ae("div",Jb,[ys(r.$slots,"menu")])):ve("v-if",!0)],1024))],512))}}),ek=V(Xb,[["__file","/home/runner/work/behat-formation/behat-formation/node_modules/@slidev/client/internals/MenuButton.vue"]]),nk={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},sk={__name:"VerticalDivider",setup(n){return T(q),(s,o)=>(k(),ae("div",nk))}},tl=V(sk,[["__file","/home/runner/work/behat-formation/behat-formation/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),ok={render(){return[]}},tk={class:"slidev-icon-btn"},lk={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},ak={class:"my-auto"},rk={class:"opacity-50"},ik=Me({__name:"NavControls",props:{persist:{default:!1}},setup(n){const s=n;T(q);const o=Br.smaller("md"),{isFullscreen:l,toggle:a}=ry,r=S(()=>Dr.value?`?password=${Dr.value}`:""),i=S(()=>`/presenter/${Ke.value}${r.value}`),c=S(()=>`/${Ke.value}${r.value}`),p=Z(),d=()=>{p.value&&So.value&&p.value.contains(So.value)&&So.value.blur()},u=S(()=>s.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),y=es(),h=es();return Fs(()=>import("./DrawingControls-8fe73284.js"),[]).then(m=>h.value=m.default),(m,f)=>{const B=Nb,A=Fb,D=wb,b=kb,_=gb,w=ub,P=rb,W=gy,K=JC,F=GC,H=qC,le=vl("RouterLink"),ye=MC,Q=IC,_e=DC,Pe=BC;return k(),ae("nav",{ref_key:"root",ref:p,class:"flex flex-col"},[e("div",{class:ze(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",v(u)]),onMouseleave:d},[v(as)?ve("v-if",!0):(k(),ae("button",{key:0,class:"slidev-icon-btn",onClick:f[0]||(f[0]=(...Ie)=>v(a)&&v(a)(...Ie))},[v(l)?(k(),L(B,{key:0})):(k(),L(A,{key:1}))])),e("button",{class:ze(["slidev-icon-btn",{disabled:!v(zv)}]),onClick:f[1]||(f[1]=(...Ie)=>v(Ts)&&v(Ts)(...Ie))},[I(D)],2),e("button",{class:ze(["slidev-icon-btn",{disabled:!v(Kv)}]),title:"Next",onClick:f[2]||(f[2]=(...Ie)=>v(Ps)&&v(Ps)(...Ie))},[I(b)],2),v(as)?ve("v-if",!0):(k(),ae("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:f[3]||(f[3]=Ie=>v(iy)())},[I(_)])),v(kr)?ve("v-if",!0):(k(),ae("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:f[4]||(f[4]=Ie=>v(yy)())},[v(fi)?(k(),L(w,{key:0})):(k(),L(P,{key:1}))])),I(tl),v(as)?ve("v-if",!0):(k(),ae(Te,{key:3},[!v(Bn)&&!v(o)&&v(y)?(k(),ae(Te,{key:0},[I(v(y)),I(tl)],64)):ve("v-if",!0),v(Bn)?(k(),ae("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:f[5]||(f[5]=Ie=>Ea.value=!v(Ea))},[v(Ea)?(k(),L(W,{key:0})):(k(),L(K,{key:1,class:"opacity-50"}))])):ve("v-if",!0)],64)),(!v(Se).drawings.presenterOnly||v(Bn))&&!v(as)?(k(),ae(Te,{key:4},[e("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:f[6]||(f[6]=Ie=>Jn.value=!v(Jn))},[I(F),v(Jn)?(k(),ae("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:on({background:v(Qs).color})},null,4)):ve("v-if",!0)]),I(tl)],64)):ve("v-if",!0),v(as)?ve("v-if",!0):(k(),ae(Te,{key:5},[v(Bn)?(k(),L(le,{key:0,to:v(c),class:"slidev-icon-btn",title:"Play Mode"},{default:x(()=>[I(H)]),_:1},8,["to"])):ve("v-if",!0),v(Uv)?(k(),L(le,{key:1,to:v(i),class:"slidev-icon-btn",title:"Presenter Mode"},{default:x(()=>[I(ye)]),_:1},8,["to"])):ve("v-if",!0),ve("v-if",!0)],64)),(k(),ae(Te,{key:6},[v(Se).download?(k(),ae("button",{key:0,class:"slidev-icon-btn",onClick:f[8]||(f[8]=(...Ie)=>v(vr)&&v(vr)(...Ie))},[I(Q)])):ve("v-if",!0)],64)),!v(Bn)&&v(Se).info&&!v(as)?(k(),ae("button",{key:7,class:"slidev-icon-btn",onClick:f[9]||(f[9]=Ie=>dt.value=!v(dt))},[I(_e)])):ve("v-if",!0),!v(Bn)&&!v(as)?(k(),L(ek,{key:8},{button:x(()=>[e("button",tk,[I(Pe)])]),menu:x(()=>[I(Qb)]),_:1})):ve("v-if",!0),v(as)?ve("v-if",!0):(k(),L(tl,{key:9})),e("div",lk,[e("div",ak,[t(ao(v(Ke))+" ",1),e("span",rk,"/ "+ao(v($y)),1)])]),I(v(ok))],34)],512)}}}),ck=V(ik,[["__file","/home/runner/work/behat-formation/behat-formation/node_modules/@slidev/client/internals/NavControls.vue"]]),By={render(){return[]}},Ay={render(){return[]}},pk={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},dk=Me({__name:"PresenterMouse",setup(n){return T(q),(s,o)=>{const l=gy;return v(_a).cursor?(k(),ae("div",pk,[I(l,{class:"absolute",style:on({left:`${v(_a).cursor.x}%`,top:`${v(_a).cursor.y}%`})},null,8,["style"])])):ve("v-if",!0)}}}),uk=V(dk,[["__file","/home/runner/work/behat-formation/behat-formation/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),yk=Me({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(n){T(q),Ce(un,()=>{var l,a;(l=un.value)!=null&&l.meta&&un.value.meta.preload!==!1&&(un.value.meta.__preloaded=!0),(a=$a.value)!=null&&a.meta&&$a.value.meta.preload!==!1&&($a.value.meta.__preloaded=!0)},{immediate:!0});const s=es();Fs(()=>import("./DrawingLayer-b12c3d02.js"),[]).then(l=>s.value=l.default);const o=S(()=>Ze.filter(l=>{var a;return((a=l.meta)==null?void 0:a.__preloaded)||l===un.value}));return(l,a)=>(k(),ae(Te,null,[ve(" Global Bottom "),I(v(Ay)),ve(" Slides "),I(wg,J(v(Qv),{id:"slideshow",tag:"div"}),{default:x(()=>[(k(!0),ae(Te,null,qt(v(o),r=>{var i;return Jl((k(),L(v(Bi),{key:r.path,is:r==null?void 0:r.component,clicks:r===v(un)?v(Tn):0,"clicks-elements":((i=r.meta)==null?void 0:i.__clicksElements)||[],"clicks-disabled":!1,class:ze(v(gi)(r)),route:r,context:n.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[bu,r===v(un)]])}),128))]),_:1},16),ve(" Global Top "),I(v(By)),v(s)?(k(),L(v(s),{key:0})):ve("v-if",!0),v(Bn)?ve("v-if",!0):(k(),L(uk,{key:1}))],64))}});const hk=V(yk,[["__scopeId","data-v-afb4231e"],["__file","/home/runner/work/behat-formation/behat-formation/node_modules/@slidev/client/internals/SlidesShow.vue"]]),fk=Me({__name:"PrintStyle",setup(n){T(q);function s(o,{slots:l}){if(l.default)return hn("style",l.default())}return(o,l)=>(k(),L(s,null,{default:x(()=>[t(" @page { size: "+ao(v(Ss))+"px "+ao(v(ci))+"px; margin: 0px; } ",1)]),_:1}))}}),Cy=V(fk,[["__file","/home/runner/work/behat-formation/behat-formation/node_modules/@slidev/client/internals/PrintStyle.vue"]]),mk=Me({__name:"Play",setup(n){T(q),R3();const s=Z();function o(r){var i;yp.value||((i=r.target)==null?void 0:i.id)==="slide-container"&&(r.screenX/window.innerWidth>.6?Ps():Ts())}Jv(s);const l=S(()=>Z5.value||yp.value);es();const a=es();return Fs(()=>import("./DrawingControls-8fe73284.js"),[]).then(r=>a.value=r.default),(r,i)=>(k(),ae(Te,null,[v(Oo)?(k(),L(Cy,{key:0})):ve("v-if",!0),e("div",{id:"page-root",ref_key:"root",ref:s,class:"grid grid-cols-[1fr_max-content]",style:on(v(pi))},[I(fy,{class:"w-full h-full",style:on({background:"var(--slidev-slide-container-background, black)"}),width:v(Oo)?v(lo).width.value:void 0,scale:v(ul),onPointerdown:o},{default:x(()=>[I(hk,{context:"slide"})]),controls:x(()=>[e("div",{class:ze(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[v(l)?"opacity-100 right-0":"opacity-0 p-2",v(Et)?"pointer-events-none":""]])},[I(ck,{class:"m-auto",persist:v(l)},null,8,["persist"])],2),!v(Se).drawings.presenterOnly&&!v(as)&&v(a)?(k(),L(v(a),{key:0,class:"ml-0"})):ve("v-if",!0)]),_:1},8,["style","width","scale"]),ve("v-if",!0)],4),I(yC)],64))}}),gk=V(mk,[["__file","/home/runner/work/behat-formation/behat-formation/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function by(n){return typeof n>"u"||n===null}function Bk(n){return typeof n=="object"&&n!==null}function Ak(n){return Array.isArray(n)?n:by(n)?[]:[n]}function Ck(n,s){var o,l,a,r;if(s)for(r=Object.keys(s),o=0,l=r.length;o<l;o+=1)a=r[o],n[a]=s[a];return n}function bk(n,s){var o="",l;for(l=0;l<s;l+=1)o+=n;return o}function kk(n){return n===0&&Number.NEGATIVE_INFINITY===1/n}var _k=by,Dk=Bk,vk=Ak,xk=bk,wk=kk,Ek=Ck,Ai={isNothing:_k,isObject:Dk,toArray:vk,repeat:xk,isNegativeZero:wk,extend:Ek};function ky(n,s){var o="",l=n.reason||"(unknown reason)";return n.mark?(n.mark.name&&(o+='in "'+n.mark.name+'" '),o+="("+(n.mark.line+1)+":"+(n.mark.column+1)+")",!s&&n.mark.snippet&&(o+=`

`+n.mark.snippet),l+" "+o):l}function $t(n,s){Error.call(this),this.name="YAMLException",this.reason=n,this.mark=s,this.message=ky(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}$t.prototype=Object.create(Error.prototype);$t.prototype.constructor=$t;$t.prototype.toString=function(s){return this.name+": "+ky(this,s)};var Ys=$t,Ik=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],$k=["scalar","sequence","mapping"];function Sk(n){var s={};return n!==null&&Object.keys(n).forEach(function(o){n[o].forEach(function(l){s[String(l)]=o})}),s}function Fk(n,s){if(s=s||{},Object.keys(s).forEach(function(o){if(Ik.indexOf(o)===-1)throw new Ys('Unknown option "'+o+'" is met in definition of "'+n+'" YAML type.')}),this.options=s,this.tag=n,this.kind=s.kind||null,this.resolve=s.resolve||function(){return!0},this.construct=s.construct||function(o){return o},this.instanceOf=s.instanceOf||null,this.predicate=s.predicate||null,this.represent=s.represent||null,this.representName=s.representName||null,this.defaultStyle=s.defaultStyle||null,this.multi=s.multi||!1,this.styleAliases=Sk(s.styleAliases||null),$k.indexOf(this.kind)===-1)throw new Ys('Unknown kind "'+this.kind+'" is specified for "'+n+'" YAML type.')}var rn=Fk;function Dp(n,s){var o=[];return n[s].forEach(function(l){var a=o.length;o.forEach(function(r,i){r.tag===l.tag&&r.kind===l.kind&&r.multi===l.multi&&(a=i)}),o[a]=l}),o}function Pk(){var n={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},s,o;function l(a){a.multi?(n.multi[a.kind].push(a),n.multi.fallback.push(a)):n[a.kind][a.tag]=n.fallback[a.tag]=a}for(s=0,o=arguments.length;s<o;s+=1)arguments[s].forEach(l);return n}function _r(n){return this.extend(n)}_r.prototype.extend=function(s){var o=[],l=[];if(s instanceof rn)l.push(s);else if(Array.isArray(s))l=l.concat(s);else if(s&&(Array.isArray(s.implicit)||Array.isArray(s.explicit)))s.implicit&&(o=o.concat(s.implicit)),s.explicit&&(l=l.concat(s.explicit));else throw new Ys("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");o.forEach(function(r){if(!(r instanceof rn))throw new Ys("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(r.loadKind&&r.loadKind!=="scalar")throw new Ys("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(r.multi)throw new Ys("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),l.forEach(function(r){if(!(r instanceof rn))throw new Ys("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var a=Object.create(_r.prototype);return a.implicit=(this.implicit||[]).concat(o),a.explicit=(this.explicit||[]).concat(l),a.compiledImplicit=Dp(a,"implicit"),a.compiledExplicit=Dp(a,"explicit"),a.compiledTypeMap=Pk(a.compiledImplicit,a.compiledExplicit),a};var Tk=_r,Mk=new rn("tag:yaml.org,2002:str",{kind:"scalar",construct:function(n){return n!==null?n:""}}),Ok=new rn("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(n){return n!==null?n:[]}}),Nk=new rn("tag:yaml.org,2002:map",{kind:"mapping",construct:function(n){return n!==null?n:{}}}),Lk=new Tk({explicit:[Mk,Ok,Nk]});function Wk(n){if(n===null)return!0;var s=n.length;return s===1&&n==="~"||s===4&&(n==="null"||n==="Null"||n==="NULL")}function Rk(){return null}function qk(n){return n===null}var Vk=new rn("tag:yaml.org,2002:null",{kind:"scalar",resolve:Wk,construct:Rk,predicate:qk,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function Uk(n){if(n===null)return!1;var s=n.length;return s===4&&(n==="true"||n==="True"||n==="TRUE")||s===5&&(n==="false"||n==="False"||n==="FALSE")}function jk(n){return n==="true"||n==="True"||n==="TRUE"}function Hk(n){return Object.prototype.toString.call(n)==="[object Boolean]"}var Gk=new rn("tag:yaml.org,2002:bool",{kind:"scalar",resolve:Uk,construct:jk,predicate:Hk,represent:{lowercase:function(n){return n?"true":"false"},uppercase:function(n){return n?"TRUE":"FALSE"},camelcase:function(n){return n?"True":"False"}},defaultStyle:"lowercase"});function Kk(n){return 48<=n&&n<=57||65<=n&&n<=70||97<=n&&n<=102}function zk(n){return 48<=n&&n<=55}function Yk(n){return 48<=n&&n<=57}function Zk(n){if(n===null)return!1;var s=n.length,o=0,l=!1,a;if(!s)return!1;if(a=n[o],(a==="-"||a==="+")&&(a=n[++o]),a==="0"){if(o+1===s)return!0;if(a=n[++o],a==="b"){for(o++;o<s;o++)if(a=n[o],a!=="_"){if(a!=="0"&&a!=="1")return!1;l=!0}return l&&a!=="_"}if(a==="x"){for(o++;o<s;o++)if(a=n[o],a!=="_"){if(!Kk(n.charCodeAt(o)))return!1;l=!0}return l&&a!=="_"}if(a==="o"){for(o++;o<s;o++)if(a=n[o],a!=="_"){if(!zk(n.charCodeAt(o)))return!1;l=!0}return l&&a!=="_"}}if(a==="_")return!1;for(;o<s;o++)if(a=n[o],a!=="_"){if(!Yk(n.charCodeAt(o)))return!1;l=!0}return!(!l||a==="_")}function Qk(n){var s=n,o=1,l;if(s.indexOf("_")!==-1&&(s=s.replace(/_/g,"")),l=s[0],(l==="-"||l==="+")&&(l==="-"&&(o=-1),s=s.slice(1),l=s[0]),s==="0")return 0;if(l==="0"){if(s[1]==="b")return o*parseInt(s.slice(2),2);if(s[1]==="x")return o*parseInt(s.slice(2),16);if(s[1]==="o")return o*parseInt(s.slice(2),8)}return o*parseInt(s,10)}function Jk(n){return Object.prototype.toString.call(n)==="[object Number]"&&n%1===0&&!Ai.isNegativeZero(n)}var Xk=new rn("tag:yaml.org,2002:int",{kind:"scalar",resolve:Zk,construct:Qk,predicate:Jk,represent:{binary:function(n){return n>=0?"0b"+n.toString(2):"-0b"+n.toString(2).slice(1)},octal:function(n){return n>=0?"0o"+n.toString(8):"-0o"+n.toString(8).slice(1)},decimal:function(n){return n.toString(10)},hexadecimal:function(n){return n>=0?"0x"+n.toString(16).toUpperCase():"-0x"+n.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),e_=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function n_(n){return!(n===null||!e_.test(n)||n[n.length-1]==="_")}function s_(n){var s,o;return s=n.replace(/_/g,"").toLowerCase(),o=s[0]==="-"?-1:1,"+-".indexOf(s[0])>=0&&(s=s.slice(1)),s===".inf"?o===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:s===".nan"?NaN:o*parseFloat(s,10)}var o_=/^[-+]?[0-9]+e/;function t_(n,s){var o;if(isNaN(n))switch(s){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===n)switch(s){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===n)switch(s){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Ai.isNegativeZero(n))return"-0.0";return o=n.toString(10),o_.test(o)?o.replace("e",".e"):o}function l_(n){return Object.prototype.toString.call(n)==="[object Number]"&&(n%1!==0||Ai.isNegativeZero(n))}var a_=new rn("tag:yaml.org,2002:float",{kind:"scalar",resolve:n_,construct:s_,predicate:l_,represent:t_,defaultStyle:"lowercase"}),r_=Lk.extend({implicit:[Vk,Gk,Xk,a_]}),i_=r_,_y=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Dy=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function c_(n){return n===null?!1:_y.exec(n)!==null||Dy.exec(n)!==null}function p_(n){var s,o,l,a,r,i,c,p=0,d=null,u,y,h;if(s=_y.exec(n),s===null&&(s=Dy.exec(n)),s===null)throw new Error("Date resolve error");if(o=+s[1],l=+s[2]-1,a=+s[3],!s[4])return new Date(Date.UTC(o,l,a));if(r=+s[4],i=+s[5],c=+s[6],s[7]){for(p=s[7].slice(0,3);p.length<3;)p+="0";p=+p}return s[9]&&(u=+s[10],y=+(s[11]||0),d=(u*60+y)*6e4,s[9]==="-"&&(d=-d)),h=new Date(Date.UTC(o,l,a,r,i,c,p)),d&&h.setTime(h.getTime()-d),h}function d_(n){return n.toISOString()}var u_=new rn("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:c_,construct:p_,instanceOf:Date,represent:d_});function y_(n){return n==="<<"||n===null}var h_=new rn("tag:yaml.org,2002:merge",{kind:"scalar",resolve:y_}),Ci=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function f_(n){if(n===null)return!1;var s,o,l=0,a=n.length,r=Ci;for(o=0;o<a;o++)if(s=r.indexOf(n.charAt(o)),!(s>64)){if(s<0)return!1;l+=6}return l%8===0}function m_(n){var s,o,l=n.replace(/[\r\n=]/g,""),a=l.length,r=Ci,i=0,c=[];for(s=0;s<a;s++)s%4===0&&s&&(c.push(i>>16&255),c.push(i>>8&255),c.push(i&255)),i=i<<6|r.indexOf(l.charAt(s));return o=a%4*6,o===0?(c.push(i>>16&255),c.push(i>>8&255),c.push(i&255)):o===18?(c.push(i>>10&255),c.push(i>>2&255)):o===12&&c.push(i>>4&255),new Uint8Array(c)}function g_(n){var s="",o=0,l,a,r=n.length,i=Ci;for(l=0;l<r;l++)l%3===0&&l&&(s+=i[o>>18&63],s+=i[o>>12&63],s+=i[o>>6&63],s+=i[o&63]),o=(o<<8)+n[l];return a=r%3,a===0?(s+=i[o>>18&63],s+=i[o>>12&63],s+=i[o>>6&63],s+=i[o&63]):a===2?(s+=i[o>>10&63],s+=i[o>>4&63],s+=i[o<<2&63],s+=i[64]):a===1&&(s+=i[o>>2&63],s+=i[o<<4&63],s+=i[64],s+=i[64]),s}function B_(n){return Object.prototype.toString.call(n)==="[object Uint8Array]"}var A_=new rn("tag:yaml.org,2002:binary",{kind:"scalar",resolve:f_,construct:m_,predicate:B_,represent:g_}),C_=Object.prototype.hasOwnProperty,b_=Object.prototype.toString;function k_(n){if(n===null)return!0;var s=[],o,l,a,r,i,c=n;for(o=0,l=c.length;o<l;o+=1){if(a=c[o],i=!1,b_.call(a)!=="[object Object]")return!1;for(r in a)if(C_.call(a,r))if(!i)i=!0;else return!1;if(!i)return!1;if(s.indexOf(r)===-1)s.push(r);else return!1}return!0}function __(n){return n!==null?n:[]}var D_=new rn("tag:yaml.org,2002:omap",{kind:"sequence",resolve:k_,construct:__}),v_=Object.prototype.toString;function x_(n){if(n===null)return!0;var s,o,l,a,r,i=n;for(r=new Array(i.length),s=0,o=i.length;s<o;s+=1){if(l=i[s],v_.call(l)!=="[object Object]"||(a=Object.keys(l),a.length!==1))return!1;r[s]=[a[0],l[a[0]]]}return!0}function w_(n){if(n===null)return[];var s,o,l,a,r,i=n;for(r=new Array(i.length),s=0,o=i.length;s<o;s+=1)l=i[s],a=Object.keys(l),r[s]=[a[0],l[a[0]]];return r}var E_=new rn("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:x_,construct:w_}),I_=Object.prototype.hasOwnProperty;function $_(n){if(n===null)return!0;var s,o=n;for(s in o)if(I_.call(o,s)&&o[s]!==null)return!1;return!0}function S_(n){return n!==null?n:{}}var F_=new rn("tag:yaml.org,2002:set",{kind:"mapping",resolve:$_,construct:S_});i_.extend({implicit:[u_,h_],explicit:[A_,D_,E_,F_]});function vp(n){return n===48?"\0":n===97?"\x07":n===98?"\b":n===116||n===9?"	":n===110?`
`:n===118?"\v":n===102?"\f":n===114?"\r":n===101?"\x1B":n===32?" ":n===34?'"':n===47?"/":n===92?"\\":n===78?"":n===95?" ":n===76?"\u2028":n===80?"\u2029":""}var P_=new Array(256),T_=new Array(256);for(var Co=0;Co<256;Co++)P_[Co]=vp(Co)?1:0,T_[Co]=vp(Co);function M_(n){return Array.from(new Set(n))}function xp(...n){let s,o,l;n.length===1?(s=0,l=1,[o]=n):[s,o,l=1]=n;const a=[];let r=s;for(;r<o;)a.push(r),r+=l||1;return a}function vy(n,s){if(!s||s==="all"||s==="*")return xp(1,n+1);const o=[];for(const l of s.split(/[,;]/g))if(!l.includes("-"))o.push(+l);else{const[a,r]=l.split("-",2);o.push(...xp(+a,r?+r+1:n+1))}return M_(o).filter(l=>l<=n).sort((l,a)=>l-a)}function xy(n){const s=S(()=>n.value.path),o=S(()=>Ze.length-1),l=S(()=>parseInt(s.value.split(/\//g).slice(-1)[0])||1),a=S(()=>ta(l.value)),r=S(()=>Ze.find(h=>h.path===`${l.value}`)),i=S(()=>{var h,m,f;return(f=(m=(h=r.value)==null?void 0:h.meta)==null?void 0:m.slide)==null?void 0:f.id}),c=S(()=>{var h,m;return((m=(h=r.value)==null?void 0:h.meta)==null?void 0:m.layout)||(l.value===1?"cover":"default")}),p=S(()=>Ze.find(h=>h.path===`${Math.min(Ze.length,l.value+1)}`)),d=S(()=>Ze.filter(h=>{var m,f;return(f=(m=h.meta)==null?void 0:m.slide)==null?void 0:f.title}).reduce((h,m)=>(bi(h,m),h),[])),u=S(()=>ki(d.value,r.value)),y=S(()=>_i(u.value));return{route:n,path:s,total:o,currentPage:l,currentPath:a,currentRoute:r,currentSlideId:i,currentLayout:c,nextRoute:p,rawTree:d,treeWithActiveStatuses:u,tree:y}}function wy(n,s,o){const l=Z(0);sn(()=>{Cn.afterEach(async()=>{await sn(),l.value+=1})});const a=S(()=>{var p,d;return l.value,((d=(p=s.value)==null?void 0:p.meta)==null?void 0:d.__clicksElements)||[]}),r=S(()=>{var p,d;return+(((d=(p=s.value)==null?void 0:p.meta)==null?void 0:d.clicks)??a.value.length)}),i=S(()=>o.value<Ze.length-1||n.value<r.value),c=S(()=>o.value>1||n.value>0);return{clicks:n,clicksElements:a,clicksTotal:r,hasNext:i,hasPrev:c}}const O_=["id"],N_=Me({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(n,{emit:s}){const o=n,l=Qn(o,"clicksElements",s),a=S(()=>({height:`${ci}px`,width:`${Ss}px`})),r=es();Fs(()=>Promise.resolve().then(()=>Y3),void 0).then(d=>r.value=d.default);const i=S(()=>o.clicks),c=wy(i,o.nav.currentRoute,o.nav.currentPage),p=S(()=>`${o.route.path.toString().padStart(3,"0")}-${(i.value+1).toString().padStart(2,"0")}`);return xn(q,je({nav:{...o.nav,...c},configs:Se,themeConfigs:S(()=>Se.themeConfig)})),(d,u)=>{var y;return k(),ae("div",{id:v(p),class:"print-slide-container",style:on(v(a))},[I(v(Ay)),I(v(Bi),{is:(y=n.route)==null?void 0:y.component,"clicks-elements":v(l),"onUpdate:clicksElements":u[0]||(u[0]=h=>Fe(l)?l.value=h:null),clicks:v(i),"clicks-disabled":!1,class:ze(v(gi)(n.route)),route:n.route},null,8,["is","clicks-elements","clicks","class","route"]),v(r)?(k(),L(v(r),{key:0,page:+n.route.path},null,8,["page"])):ve("v-if",!0),I(v(By))],12,O_)}}}),wp=V(N_,[["__file","/home/runner/work/behat-formation/behat-formation/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),L_=Me({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(n){var r;const s=n;T(q);const o=je(((r=s.route.meta)==null?void 0:r.__clicksElements)||[]),l=S(()=>s.route),a=xy(l);return(i,c)=>(k(),ae(Te,null,[I(wp,{"clicks-elements":o,"onUpdate:clicksElements":c[0]||(c[0]=p=>o=p),clicks:0,nav:v(a),route:v(l)},null,8,["clicks-elements","nav","route"]),v(ut)?ve("v-if",!0):(k(!0),ae(Te,{key:0},qt(o.length,p=>(k(),L(wp,{key:p,clicks:p,nav:v(a),route:v(l)},null,8,["clicks","nav","route"]))),128))],64))}}),W_=V(L_,[["__file","/home/runner/work/behat-formation/behat-formation/node_modules/@slidev/client/internals/PrintSlide.vue"]]),R_={id:"print-content"},q_=Me({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(n){const s=n;T(q);const o=S(()=>s.width),l=S(()=>s.width/$s),a=S(()=>o.value/l.value),r=S(()=>a.value<$s?o.value/Ss:l.value*$s/Ss);let i=Ze.slice(0,-1);On.value.query.range&&(i=vy(i.length,On.value.query.range).map(d=>i[d-1]));const c=S(()=>({"select-none":!Se.selectable,"slidev-code-line-numbers":Se.lineNumbers}));return xn(Su,r),(p,d)=>(k(),ae("div",{id:"print-container",class:ze(v(c))},[e("div",R_,[(k(!0),ae(Te,null,qt(v(i),u=>(k(),L(W_,{key:u.path,route:u},null,8,["route"]))),128))]),ys(p.$slots,"controls")],2))}});const V_=V(q_,[["__file","/home/runner/work/behat-formation/behat-formation/node_modules/@slidev/client/internals/PrintContainer.vue"]]),U_=Me({__name:"Print",setup(n){return T(q),uo(()=>{Oo?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(s,o)=>(k(),ae(Te,null,[v(Oo)?(k(),L(Cy,{key:0})):ve("v-if",!0),e("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:on(v(pi))},[I(V_,{class:"w-full h-full",style:on({background:"var(--slidev-slide-container-background, black)"}),width:v(lo).width.value},null,8,["style","width"])],4)],64))}});const j_=V(U_,[["__file","/home/runner/work/behat-formation/behat-formation/node_modules/@slidev/client/internals/Print.vue"]]);const H_={class:"slidev-layout end"},G_={__name:"end",setup(n){return T(q),(s,o)=>(k(),ae("div",H_," END "))}},K_=V(G_,[["__scopeId","data-v-e532b98d"],["__file","/home/runner/work/behat-formation/behat-formation/node_modules/@slidev/client/layouts/end.vue"]]);function Ep(n){return n.startsWith("/")?"/behat-formation/"+n.slice(1):n}function z_(n,s=!1){const o=n&&["#","rgb","hsl"].some(a=>n.indexOf(a)===0),l={background:o?n:void 0,color:n&&!o?"white":void 0,backgroundImage:o?void 0:n?s?`linear-gradient(#0005, #0008), url(${Ep(n)})`:`url("${Ep(n)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return l.background||delete l.background,l}const Y_={class:"my-auto w-full"},Z_=Me({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(n){const s=n;T(q);const o=S(()=>z_(s.background,!0));return(l,a)=>(k(),ae("div",{class:"slidev-layout cover text-center",style:on(v(o))},[e("div",Y_,[ys(l.$slots,"default")])],4))}}),Q_=V(Z_,[["__file","/home/runner/work/behat-formation/behat-formation/node_modules/@slidev/theme-seriph/layouts/cover.vue"]]),J_=e("h1",null,"Behat Formation",-1),X_=e("p",null,"avec Sylius & Monofony",-1),e7=e("div",{align:"center"},[e("img",{class:"w-75",align:"center",src:"https://sylius.com/wp-content/uploads/2021/03/sylius-logo_sylius-logo-light-1024x422.jpg"})],-1),n7=e("div",{align:"center"},[e("img",{class:"w-75",src:"https://raw.githubusercontent.com/Monofony/Monofony/0.x/docs/_images/doc_logo.png"})],-1),s7={__name:"1",setup(n){const s={theme:"seriph",background:!1,class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},transition:"slide-left",colorSchema:"light",css:"unocss"};return T(q),(o,l)=>(k(),L(Q_,ne(ee(s)),{default:x(()=>[J_,X_,e7,n7]),_:1},16))}},o7=V(s7,[["__file","/@slidev/slides/1.md"]]),oa=Me({props:{every:{type:Number,default:1},at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){var r,i;const n=Ji("click"),s=Ji("after"),o=(c,p,d)=>Jl(c,[[p,this.at!=null?+this.at+d:null,"",{hide:this.hide,fade:this.fade}]]);let l=(i=(r=this.$slots).default)==null?void 0:i.call(r);if(!l)return;l=P8(l);const a=c=>c.map((p,d)=>hs(p)?o(hn(p),d%this.every===0?n:s,Math.floor(d/this.every)):p);return l.length===1&&["ul","ol"].includes(l[0].type)&&Array.isArray(l[0].children)?hn(l[0],{},[a(l[0].children)]):a(l)}}),t7={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},l7=e("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),a7=[l7];function r7(n,s){return k(),ae("svg",t7,a7)}const i7={name:"ph-clipboard",render:r7},c7={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},p7=e("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),d7=[p7];function u7(n,s){return k(),ae("svg",c7,d7)}const y7={name:"ph-check-circle",render:u7},h7=["title"],f7=Me({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(n){const s=n;T(q);const o=T(rt),l=T(zs),a=T(it);function r(y=5){const h=[],m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",f=m.length;for(let B=0;B<y;B++)h.push(m.charAt(Math.floor(Math.random()*f)));return h.join("")}const i=Z(),c=$n();yo(()=>{const y=s.at==null?l==null?void 0:l.value.length:s.at,h=S(()=>a!=null&&a.value?s.ranges.length-1:Math.min(Math.max(0,((o==null?void 0:o.value)||0)-(y||0)),s.ranges.length-1)),m=S(()=>s.ranges[h.value]||"");if(s.ranges.length>=2&&!(a!=null&&a.value)){const f=r(),B=T8(s.ranges.length-1).map(A=>f+A);l!=null&&l.value&&(l.value.push(...B),Ql(()=>B.forEach(A=>rr(l.value,A)),c))}uo(()=>{if(!i.value)return;const B=i.value.querySelector(".shiki-dark")?Array.from(i.value.querySelectorAll(".shiki")):[i.value];for(const A of B){const D=Array.from(A.querySelectorAll(".line")),b=vy(D.length,m.value);if(D.forEach((_,w)=>{const P=b.includes(w+1);_.classList.toggle(Gs,!0),_.classList.toggle("highlighted",P),_.classList.toggle("dishonored",!P)}),s.maxHeight){const _=A.querySelector(".line.highlighted");_&&_.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:p,copy:d}=OB();function u(){var h,m;const y=(m=(h=i.value)==null?void 0:h.querySelector(".slidev-code"))==null?void 0:m.textContent;y&&d(y)}return(y,h)=>{const m=y7,f=i7;return k(),ae("div",{ref_key:"el",ref:i,class:"slidev-code-wrapper relative group",style:on({"max-height":s.maxHeight,"overflow-y":s.maxHeight?"scroll":void 0})},[ys(y.$slots,"default"),v(Se).codeCopy?(k(),ae("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:v(p)?"Copied":"Copy",onClick:h[0]||(h[0]=B=>u())},[v(p)?(k(),L(m,{key:0,class:"p-2 w-8 h-8"})):(k(),L(f,{key:1,class:"p-2 w-8 h-8"}))],8,h7)):ve("v-if",!0)],4)}}}),se=V(f7,[["__file","/home/runner/work/behat-formation/behat-formation/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),m7={class:"slidev-layout default"},g7={__name:"default",setup(n){return T(q),(s,o)=>(k(),ae("div",m7,[ys(s.$slots,"default")]))}},oe=V(g7,[["__file","/home/runner/work/behat-formation/behat-formation/node_modules/@slidev/client/layouts/default.vue"]]),B7=e("h1",null,"Features",-1),A7=e("p",null,"Les features contiennent des scénarii qui décrivent les fonctionnalités de l’application.",-1),C7=e("p",null,"Exemple 1 : Browsing books",-1),b7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"@managing_books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"Feature"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Browsing books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"In "),e("span",{style:{color:"#DBD7CA"}},"order to see all books in the admin panel")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    As an Administrator")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    I want to browse books")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Background"),e("span",{style:{color:"#DBD7CA"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"there is a book with name "),e("span",{style:{color:"#C98A7D"}},'"Shinning"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"there is also an book with name "),e("span",{style:{color:"#C98A7D"}},'"Carrie"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I am logged in as an administrator")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"@ui")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Scenario"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Browsing books in the admin panel")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"When "),e("span",{style:{color:"#DBD7CA"}},"I want to browse books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Then "),e("span",{style:{color:"#DBD7CA"}},"there should be 2 books in the list")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I should see the book "),e("span",{style:{color:"#C98A7D"}},'"Shinning"'),e("span",{style:{color:"#DBD7CA"}}," in the list")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"@managing_books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"Feature"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Browsing books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"In "),e("span",{style:{color:"#393A34"}},"order to see all books in the admin panel")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    As an Administrator")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    I want to browse books")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Background"),e("span",{style:{color:"#393A34"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"there is a book with name "),e("span",{style:{color:"#B56959"}},'"Shinning"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"there is also an book with name "),e("span",{style:{color:"#B56959"}},'"Carrie"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I am logged in as an administrator")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"@ui")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Scenario"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Browsing books in the admin panel")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"When "),e("span",{style:{color:"#393A34"}},"I want to browse books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Then "),e("span",{style:{color:"#393A34"}},"there should be 2 books in the list")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I should see the book "),e("span",{style:{color:"#B56959"}},'"Shinning"'),e("span",{style:{color:"#393A34"}}," in the list")])])])],-1),k7={__name:"2",setup(n){const s={srcSequence:"./pages/01_features.md"};return T(q),(o,l)=>{const a=se,r=oa;return k(),L(oe,ne(ee(s)),{default:x(()=>[B7,I(r,null,{default:x(()=>[A7,C7,I(a,J({},{ranges:["all","1,12","2-5","7-10","12-16"]}),{default:x(()=>[b7]),_:1},16)]),_:1})]),_:1},16)}}},_7=V(k7,[["__file","/@slidev/slides/2.md"]]),D7=e("h1",null,"Features",-1),v7=e("p",null,"Les features contiennent des scénarii qui décrivent les fonctionnalités de l’application.",-1),x7=e("p",null,"Exemple 2 : Adding books",-1),w7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"@managing_books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"Feature"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Adding a new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"In "),e("span",{style:{color:"#DBD7CA"}},"order to create new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    As an Administrator")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    I want to add a book in the admin panel")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Background"),e("span",{style:{color:"#DBD7CA"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"I am logged in as an administrator")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"@ui")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Scenario"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Adding a new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"I want to create a new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"When "),e("span",{style:{color:"#DBD7CA"}},"I specify its name as "),e("span",{style:{color:"#C98A7D"}},'"Shinning"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I add it")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Then "),e("span",{style:{color:"#DBD7CA"}},"I should be notified that it has been successfully created")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"the book "),e("span",{style:{color:"#C98A7D"}},'"Shinning"'),e("span",{style:{color:"#DBD7CA"}}," should appear in the list")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"@managing_books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"Feature"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Adding a new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"In "),e("span",{style:{color:"#393A34"}},"order to create new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    As an Administrator")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    I want to add a book in the admin panel")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Background"),e("span",{style:{color:"#393A34"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"I am logged in as an administrator")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"@ui")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Scenario"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Adding a new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"I want to create a new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"When "),e("span",{style:{color:"#393A34"}},"I specify its name as "),e("span",{style:{color:"#B56959"}},'"Shinning"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I add it")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Then "),e("span",{style:{color:"#393A34"}},"I should be notified that it has been successfully created")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"the book "),e("span",{style:{color:"#B56959"}},'"Shinning"'),e("span",{style:{color:"#393A34"}}," should appear in the list")])])])],-1),E7={__name:"3",setup(n){const s={srcSequence:"./pages/01_features.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[D7,v7,x7,I(a,J({},{ranges:["all","1,10","2-5","7-8","10-16"]}),{default:x(()=>[w7]),_:1},16)]),_:1},16)}}},I7=V(E7,[["__file","/@slidev/slides/3.md"]]),$7=e("h1",null,"Suites",-1),S7=e("p",null,"Les suites définissent un ensemble de scénarios à lancer. Ils définissent les contextes associés et se basent sur les tags.",-1),F7=e("p",null,'Sur nos exemples précédents, nous avons le tag "@managing_books" ainsi que le tag "@ui".',-1),P7=e("p",null,[t("Nous pouvons ainsi créer une suite "),e("code",null,"ui_managing_books"),t(" qui est utilisée pour ces deux tags:")],-1),T7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#429988"}},"default"),e("span",{style:{color:"#858585"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#429988"}},"suites"),e("span",{style:{color:"#858585"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#429988"}},"ui_managing_books"),e("span",{style:{color:"#858585"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#429988"}},"contexts"),e("span",{style:{color:"#858585"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#858585"}},"-"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"App\\Tests\\Behat\\Context\\Hook\\DoctrineORMContext")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#858585"}},"-"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"App\\Tests\\Behat\\Context\\Setup\\AdminSecurityContext")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#858585"}},"-"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"App\\Tests\\Behat\\Context\\Setup\\BookContext")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#858585"}},"-"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"App\\Tests\\Behat\\Context\\Transform\\SharedStorageContext")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#858585"}},"-"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"App\\Tests\\Behat\\Context\\Ui\\Backend\\ManagingBooksContext")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#858585"}},"-"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"App\\Tests\\Behat\\Context\\Ui\\Backend\\NotificationContext")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#429988"}},"filters"),e("span",{style:{color:"#858585"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#429988"}},"tags"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"@managing_books&&@ui"')])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#2F8A89"}},"default"),e("span",{style:{color:"#8E8F8B"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#2F8A89"}},"suites"),e("span",{style:{color:"#8E8F8B"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#2F8A89"}},"ui_managing_books"),e("span",{style:{color:"#8E8F8B"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#2F8A89"}},"contexts"),e("span",{style:{color:"#8E8F8B"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#8E8F8B"}},"-"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"App\\Tests\\Behat\\Context\\Hook\\DoctrineORMContext")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#8E8F8B"}},"-"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"App\\Tests\\Behat\\Context\\Setup\\AdminSecurityContext")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#8E8F8B"}},"-"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"App\\Tests\\Behat\\Context\\Setup\\BookContext")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#8E8F8B"}},"-"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"App\\Tests\\Behat\\Context\\Transform\\SharedStorageContext")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#8E8F8B"}},"-"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"App\\Tests\\Behat\\Context\\Ui\\Backend\\ManagingBooksContext")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#8E8F8B"}},"-"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"App\\Tests\\Behat\\Context\\Ui\\Backend\\NotificationContext")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#2F8A89"}},"filters"),e("span",{style:{color:"#8E8F8B"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#2F8A89"}},"tags"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"@managing_books&&@ui"')])])])],-1),M7={__name:"4",setup(n){const s={srcSequence:"./pages/02_suites.md"};return T(q),(o,l)=>{const a=se,r=oa;return k(),L(oe,ne(ee(s)),{default:x(()=>[$7,I(r,null,{default:x(()=>[S7,F7,P7,I(a,J({},{ranges:["all","3","4","5","7-8","10","12-13","15"]}),{default:x(()=>[T7]),_:1},16)]),_:1})]),_:1},16)}}},O7=V(M7,[["__file","/@slidev/slides/4.md"]]),N7=e("h1",null,"Contexts",-1),L7=e("p",null,"Un contexte Behat est ce qui va permettre de convertir les phrases Gherkin en tests.",-1),W7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"<?"),e("span",{style:{color:"#D4976C"}},"php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"declare"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"strict_types"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},");")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Tests"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Behat"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Context"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Ui"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Backend"),e("span",{style:{color:"#858585"}},";")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Behat"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Behat"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Context"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Context"),e("span",{style:{color:"#858585"}},";")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"/**")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"     * @When I want to browse books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"     */")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iWantToBrowseBooks"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"        "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"<?"),e("span",{style:{color:"#A65E2B"}},"php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"declare"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"strict_types"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},");")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Tests"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Behat"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Context"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Ui"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Backend"),e("span",{style:{color:"#8E8F8B"}},";")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Behat"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Behat"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Context"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Context"),e("span",{style:{color:"#8E8F8B"}},";")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"/**")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"     * @When I want to browse books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"     */")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iWantToBrowseBooks"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"        "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),R7={__name:"5",setup(n){const s={srcSequence:"./pages/03_contexts.md"};return T(q),(o,l)=>{const a=se,r=oa;return k(),L(oe,ne(ee(s)),{default:x(()=>[N7,I(r,null,{default:x(()=>[L7,I(a,J({},{ranges:[""]}),{default:x(()=>[W7]),_:1},16)]),_:1})]),_:1},16)}}},q7=V(R7,[["__file","/@slidev/slides/5.md"]]),V7=e("h1",null,"Quelques règles",-1),U7=e("ul",null,[e("li",null,[t("Le contexte Behat doit implémenter l’interface "),e("code",null,"Behat\\Behat\\Context\\Context"),t(".")]),e("li",null,[t("Ce contexte doit être présent dans la suite "),e("code",null,"ui_managing_books"),t(" vu précédement.")])],-1),j7=e("p",null,"On peut également utiliser les attributes PHP 8:",-1),H7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"<?"),e("span",{style:{color:"#D4976C"}},"php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"declare"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"strict_types"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},");")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Tests"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Behat"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Context"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Ui"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Backend"),e("span",{style:{color:"#858585"}},";")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Behat"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Behat"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Context"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Context"),e("span",{style:{color:"#858585"}},";")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Behat"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Step"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"When"),e("span",{style:{color:"#858585"}},";")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"When"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I want to browse books'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iWantToBrowseBooks"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"        "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"<?"),e("span",{style:{color:"#A65E2B"}},"php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"declare"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"strict_types"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},");")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Tests"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Behat"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Context"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Ui"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Backend"),e("span",{style:{color:"#8E8F8B"}},";")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Behat"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Behat"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Context"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Context"),e("span",{style:{color:"#8E8F8B"}},";")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Behat"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Step"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"When"),e("span",{style:{color:"#8E8F8B"}},";")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"When"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I want to browse books'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iWantToBrowseBooks"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"        "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),G7={__name:"6",setup(n){const s={srcSequence:"./pages/03_contexts.md"};return T(q),(o,l)=>{const a=se,r=oa;return k(),L(oe,ne(ee(s)),{default:x(()=>[V7,I(r,null,{default:x(()=>[U7,j7,I(a,J({},{ranges:["all","10","7,10","12"]}),{default:x(()=>[H7]),_:1},16)]),_:1})]),_:1},16)}}},K7=V(G7,[["__file","/@slidev/slides/6.md"]]),z7=e("h1",null,"Browsing books",-1),Y7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"@managing_books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"Feature"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Browsing books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"In "),e("span",{style:{color:"#DBD7CA"}},"order to see all books in the admin panel")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    As an Administrator")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    I want to browse books")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Background"),e("span",{style:{color:"#DBD7CA"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"there is a book with name "),e("span",{style:{color:"#C98A7D"}},'"Shinning"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"there is also a book with name "),e("span",{style:{color:"#C98A7D"}},'"Carrie"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I am logged in as an administrator")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"@ui")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Scenario"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Browsing books in the admin panel")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"When "),e("span",{style:{color:"#DBD7CA"}},"I want to browse books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Then "),e("span",{style:{color:"#DBD7CA"}},"there should be 2 books in the list")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I should see the book "),e("span",{style:{color:"#C98A7D"}},'"Shinning"'),e("span",{style:{color:"#DBD7CA"}}," in the list")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"@managing_books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"Feature"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Browsing books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"In "),e("span",{style:{color:"#393A34"}},"order to see all books in the admin panel")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    As an Administrator")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    I want to browse books")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Background"),e("span",{style:{color:"#393A34"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"there is a book with name "),e("span",{style:{color:"#B56959"}},'"Shinning"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"there is also a book with name "),e("span",{style:{color:"#B56959"}},'"Carrie"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I am logged in as an administrator")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"@ui")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Scenario"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Browsing books in the admin panel")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"When "),e("span",{style:{color:"#393A34"}},"I want to browse books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Then "),e("span",{style:{color:"#393A34"}},"there should be 2 books in the list")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I should see the book "),e("span",{style:{color:"#B56959"}},'"Shinning"'),e("span",{style:{color:"#393A34"}}," in the list")])])])],-1),Z7={__name:"7",setup(n){const s={srcSequence:"./pages/04_browsing_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[z7,I(a,J({},{ranges:["all","8-9"]}),{default:x(()=>[Y7]),_:1},16)]),_:1},16)}}},Q7=V(Z7,[["__file","/@slidev/slides/7.md"]]),J7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src tests/Behat/Context/Setup/BookContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"BookContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"__construct"),e("span",{style:{color:"#858585"}},"(")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"EntityManagerInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"entityManager"),e("span",{style:{color:"#858585"}},",")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"Given"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'there is (also) a book with name :name'"),e("span",{style:{color:"#DBD7CA"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"thereIsABookWithName"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Book"),e("span",{style:{color:"#858585"}},"();")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"book"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"setName"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},");")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"entityManager"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"persist"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"book"),e("span",{style:{color:"#858585"}},");")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"entityManager"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"flush"),e("span",{style:{color:"#858585"}},"();")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src tests/Behat/Context/Setup/BookContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"BookContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"__construct"),e("span",{style:{color:"#8E8F8B"}},"(")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"EntityManagerInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"entityManager"),e("span",{style:{color:"#8E8F8B"}},",")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"Given"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'there is (also) a book with name :name'"),e("span",{style:{color:"#393A34"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"thereIsABookWithName"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Book"),e("span",{style:{color:"#8E8F8B"}},"();")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"book"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"setName"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},");")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"entityManager"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"persist"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"book"),e("span",{style:{color:"#8E8F8B"}},");")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"entityManager"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"flush"),e("span",{style:{color:"#8E8F8B"}},"();")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"}")])])])],-1),X7={__name:"8",setup(n){const s={srcSequence:"./pages/04_browsing_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[I(a,J({},{ranges:["all","3","6","10","11","13","14","16-17"]}),{default:x(()=>[J7]),_:1},16)]),_:1},16)}}},e1=V(X7,[["__file","/@slidev/slides/8.md"]]),n1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"@managing_books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"Feature"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Browsing books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"In "),e("span",{style:{color:"#DBD7CA"}},"order to see all books in the admin panel")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    As an Administrator")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    I want to browse books")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Background"),e("span",{style:{color:"#DBD7CA"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"there is a book with name "),e("span",{style:{color:"#C98A7D"}},'"Shinning"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"there is also a book with name "),e("span",{style:{color:"#C98A7D"}},'"Carrie"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I am logged in as an administrator")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"@ui")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Scenario"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Browsing books in the admin panel")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"When "),e("span",{style:{color:"#DBD7CA"}},"I want to browse books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Then "),e("span",{style:{color:"#DBD7CA"}},"there should be 2 books in the list")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I should see the book "),e("span",{style:{color:"#C98A7D"}},'"Shinning"'),e("span",{style:{color:"#DBD7CA"}}," in the list")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"@managing_books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"Feature"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Browsing books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"In "),e("span",{style:{color:"#393A34"}},"order to see all books in the admin panel")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    As an Administrator")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    I want to browse books")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Background"),e("span",{style:{color:"#393A34"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"there is a book with name "),e("span",{style:{color:"#B56959"}},'"Shinning"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"there is also a book with name "),e("span",{style:{color:"#B56959"}},'"Carrie"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I am logged in as an administrator")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"@ui")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Scenario"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Browsing books in the admin panel")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"When "),e("span",{style:{color:"#393A34"}},"I want to browse books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Then "),e("span",{style:{color:"#393A34"}},"there should be 2 books in the list")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I should see the book "),e("span",{style:{color:"#B56959"}},'"Shinning"'),e("span",{style:{color:"#393A34"}}," in the list")])])])],-1),s1={__name:"9",setup(n){const s={srcSequence:"./pages/04_browsing_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[I(a,J({},{ranges:["8-9","14"]}),{default:x(()=>[n1]),_:1},16)]),_:1},16)}}},o1=V(s1,[["__file","/@slidev/slides/9.md"]]),t1=e("h1",null,"Contexte de la gestion de books",-1),l1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"__construct"),e("span",{style:{color:"#858585"}},"(")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"IndexPage"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"indexPage"),e("span",{style:{color:"#858585"}},",")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"When"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I want to browse books'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iWantToBrowseBooks"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"indexPage"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"open"),e("span",{style:{color:"#858585"}},"();")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"__construct"),e("span",{style:{color:"#8E8F8B"}},"(")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"IndexPage"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"indexPage"),e("span",{style:{color:"#8E8F8B"}},",")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"When"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I want to browse books'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iWantToBrowseBooks"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"indexPage"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"open"),e("span",{style:{color:"#8E8F8B"}},"();")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),a1={__name:"10",setup(n){const s={srcSequence:"./pages/04_browsing_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[t1,I(a,J({},{ranges:["all","6","10","13"]}),{default:x(()=>[l1]),_:1},16)]),_:1},16)}}},r1=V(a1,[["__file","/@slidev/slides/10.md"]]),i1=e("h1",null,"Page d’index des books",-1),c1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Page/Backend/Book/Index.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Tests"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Behat"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Page"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Backend"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#858585"}},";")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Monofony"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Bridge"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Behat"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Crud"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"AbstractIndexPage"),e("span",{style:{color:"#858585"}},";")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"IndexPage"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"extends"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"AbstractIndexPage")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"getRouteName"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"string")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'app_backend_book_index'"),e("span",{style:{color:"#858585"}},";")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Page/Backend/Book/Index.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Tests"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Behat"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Page"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Backend"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#8E8F8B"}},";")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Monofony"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Bridge"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Behat"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Crud"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"AbstractIndexPage"),e("span",{style:{color:"#8E8F8B"}},";")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"IndexPage"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"extends"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"AbstractIndexPage")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"getRouteName"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"string")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'app_backend_book_index'"),e("span",{style:{color:"#8E8F8B"}},";")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),p1={__name:"11",setup(n){const s={srcSequence:"./pages/04_browsing_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[i1,I(a,J({},{ranges:["all","7","5,7","9","11"]}),{default:x(()=>[c1]),_:1},16)]),_:1},16)}}},d1=V(p1,[["__file","/@slidev/slides/11.md"]]),u1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"@managing_books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"Feature"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Browsing books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"In "),e("span",{style:{color:"#DBD7CA"}},"order to see all books in the admin panel")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    As an Administrator")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    I want to browse books")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Background"),e("span",{style:{color:"#DBD7CA"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"there is a book with name "),e("span",{style:{color:"#C98A7D"}},'"Shinning"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"there is also a book with name "),e("span",{style:{color:"#C98A7D"}},'"Carrie"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I am logged in as an administrator")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"@ui")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Scenario"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Browsing books in the admin panel")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"When "),e("span",{style:{color:"#DBD7CA"}},"I want to browse books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Then "),e("span",{style:{color:"#DBD7CA"}},"there should be 2 books in the list")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I should see the book "),e("span",{style:{color:"#C98A7D"}},'"Shinning"'),e("span",{style:{color:"#DBD7CA"}}," in the list")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"@managing_books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"Feature"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Browsing books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"In "),e("span",{style:{color:"#393A34"}},"order to see all books in the admin panel")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    As an Administrator")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    I want to browse books")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Background"),e("span",{style:{color:"#393A34"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"there is a book with name "),e("span",{style:{color:"#B56959"}},'"Shinning"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"there is also a book with name "),e("span",{style:{color:"#B56959"}},'"Carrie"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I am logged in as an administrator")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"@ui")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Scenario"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Browsing books in the admin panel")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"When "),e("span",{style:{color:"#393A34"}},"I want to browse books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Then "),e("span",{style:{color:"#393A34"}},"there should be 2 books in the list")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I should see the book "),e("span",{style:{color:"#B56959"}},'"Shinning"'),e("span",{style:{color:"#393A34"}}," in the list")])])])],-1),y1={__name:"12",setup(n){const s={srcSequence:"./pages/04_browsing_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[I(a,J({},{ranges:["14","15"]}),{default:x(()=>[u1]),_:1},16)]),_:1},16)}}},h1=V(y1,[["__file","/@slidev/slides/12.md"]]),f1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"When"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I want to browse books'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iWantToBrowseBooks"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"indexPage"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"open"),e("span",{style:{color:"#858585"}},"();")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"When"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I want to browse books'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iWantToBrowseBooks"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"indexPage"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"open"),e("span",{style:{color:"#8E8F8B"}},"();")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),m1={__name:"13",setup(n){const s={transition:"fade",srcSequence:"./pages/04_browsing_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[I(a,J({},{ranges:["10"]}),{default:x(()=>[f1]),_:1},16)]),_:1},16)}}},g1=V(m1,[["__file","/@slidev/slides/13.md"]]),B1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"/"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#CB7676"}},"..."),e("span",{style:{color:"#858585"}},"]")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"When"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I want to browse books'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iWantToBrowseBooks"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"indexPage"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"open"),e("span",{style:{color:"#858585"}},"();")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"Then"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'there should be :amount books in the list'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"thereShouldBeBooksInTheList"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"amount"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#E0A569"}},"Assert"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"eq"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"indexPage"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"countItems"),e("span",{style:{color:"#858585"}},"(),"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"amount"),e("span",{style:{color:"#858585"}},");")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"/"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#AB5959"}},"..."),e("span",{style:{color:"#8E8F8B"}},"]")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"When"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I want to browse books'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iWantToBrowseBooks"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"indexPage"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"open"),e("span",{style:{color:"#8E8F8B"}},"();")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"Then"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'there should be :amount books in the list'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"thereShouldBeBooksInTheList"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"amount"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#B58451"}},"Assert"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"eq"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"indexPage"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"countItems"),e("span",{style:{color:"#8E8F8B"}},"(),"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"amount"),e("span",{style:{color:"#8E8F8B"}},");")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),A1={__name:"14",setup(n){const s={srcSequence:"./pages/04_browsing_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[I(a,J({},{ranges:["13-19","13","14","16"]}),{default:x(()=>[B1]),_:1},16)]),_:1},16)}}},C1=V(A1,[["__file","/@slidev/slides/14.md"]]),b1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"@managing_books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"Feature"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Browsing books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"In "),e("span",{style:{color:"#DBD7CA"}},"order to see all books in the admin panel")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    As an Administrator")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    I want to browse books")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Background"),e("span",{style:{color:"#DBD7CA"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"there is a book with name "),e("span",{style:{color:"#C98A7D"}},'"Shinning"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"there is also a book with name "),e("span",{style:{color:"#C98A7D"}},'"Carrie"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I am logged in as an administrator")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"@ui")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Scenario"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Browsing books in the admin panel")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"When "),e("span",{style:{color:"#DBD7CA"}},"I want to browse books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Then "),e("span",{style:{color:"#DBD7CA"}},"there should be 2 books in the list")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I should see the book "),e("span",{style:{color:"#C98A7D"}},'"Shinning"'),e("span",{style:{color:"#DBD7CA"}}," in the list")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"@managing_books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"Feature"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Browsing books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"In "),e("span",{style:{color:"#393A34"}},"order to see all books in the admin panel")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    As an Administrator")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    I want to browse books")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Background"),e("span",{style:{color:"#393A34"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"there is a book with name "),e("span",{style:{color:"#B56959"}},'"Shinning"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"there is also a book with name "),e("span",{style:{color:"#B56959"}},'"Carrie"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I am logged in as an administrator")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"@ui")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Scenario"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Browsing books in the admin panel")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"When "),e("span",{style:{color:"#393A34"}},"I want to browse books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Then "),e("span",{style:{color:"#393A34"}},"there should be 2 books in the list")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I should see the book "),e("span",{style:{color:"#B56959"}},'"Shinning"'),e("span",{style:{color:"#393A34"}}," in the list")])])])],-1),k1={__name:"15",setup(n){const s={srcSequence:"./pages/04_browsing_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[I(a,J({},{ranges:["15","16"]}),{default:x(()=>[b1]),_:1},16)]),_:1},16)}}},_1=V(k1,[["__file","/@slidev/slides/15.md"]]),D1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"Then"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'there should be :amount books in the list'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"thereShouldBeBooksInTheList"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"amount"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#E0A569"}},"Assert"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"eq"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"indexPage"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"countItems"),e("span",{style:{color:"#858585"}},"(),"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"amount"),e("span",{style:{color:"#858585"}},");")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"Then"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'there should be :amount books in the list'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"thereShouldBeBooksInTheList"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"amount"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#B58451"}},"Assert"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"eq"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"indexPage"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"countItems"),e("span",{style:{color:"#8E8F8B"}},"(),"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"amount"),e("span",{style:{color:"#8E8F8B"}},");")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),v1={__name:"16",setup(n){const s={transition:"fade",srcSequence:"./pages/04_browsing_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[I(a,J({},{ranges:["7-11"]}),{default:x(()=>[D1]),_:1},16)]),_:1},16)}}},x1=V(v1,[["__file","/@slidev/slides/16.md"]]),w1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"Then"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'there should be :amount books in the list'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"thereShouldBeBooksInTheList"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"amount"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#E0A569"}},"Assert"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"eq"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"indexPage"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"countItems"),e("span",{style:{color:"#858585"}},"(),"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"amount"),e("span",{style:{color:"#858585"}},");")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"Then"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I should see the book :name in the list'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iShouldSeeTheBookInTheList"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#E0A569"}},"Assert"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"true"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"indexPage"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"isSingleResourceOnPage"),e("span",{style:{color:"#858585"}},"(["),e("span",{style:{color:"#C98A7D"}},"'name'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},"]));")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"Then"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'there should be :amount books in the list'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"thereShouldBeBooksInTheList"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"amount"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#B58451"}},"Assert"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"eq"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"indexPage"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"countItems"),e("span",{style:{color:"#8E8F8B"}},"(),"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"amount"),e("span",{style:{color:"#8E8F8B"}},");")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"Then"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I should see the book :name in the list'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iShouldSeeTheBookInTheList"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#B58451"}},"Assert"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"true"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"indexPage"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"isSingleResourceOnPage"),e("span",{style:{color:"#8E8F8B"}},"(["),e("span",{style:{color:"#B56959"}},"'name'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},"]));")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),E1={__name:"17",setup(n){const s={srcSequence:"./pages/04_browsing_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[I(a,J({},{ranges:["13-17","13","14","16"]}),{default:x(()=>[w1]),_:1},16)]),_:1},16)}}},I1=V(E1,[["__file","/@slidev/slides/17.md"]]),$1=e("h1",null,"Adding books",-1),S1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"@managing_books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"Feature"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Adding a new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"In "),e("span",{style:{color:"#DBD7CA"}},"order to create new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    As an Administrator")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    I want to add a book in the admin panel")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Background"),e("span",{style:{color:"#DBD7CA"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"I am logged in as an administrator")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"@ui")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Scenario"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Adding a new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"I want to create a new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"When "),e("span",{style:{color:"#DBD7CA"}},"I specify its name as "),e("span",{style:{color:"#C98A7D"}},'"Shinning"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I add it")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Then "),e("span",{style:{color:"#DBD7CA"}},"I should be notified that it has been successfully created")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"the book "),e("span",{style:{color:"#C98A7D"}},'"Shinning"'),e("span",{style:{color:"#DBD7CA"}}," should appear in the list")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"@managing_books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"Feature"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Adding a new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"In "),e("span",{style:{color:"#393A34"}},"order to create new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    As an Administrator")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    I want to add a book in the admin panel")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Background"),e("span",{style:{color:"#393A34"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"I am logged in as an administrator")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"@ui")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Scenario"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Adding a new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"I want to create a new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"When "),e("span",{style:{color:"#393A34"}},"I specify its name as "),e("span",{style:{color:"#B56959"}},'"Shinning"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I add it")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Then "),e("span",{style:{color:"#393A34"}},"I should be notified that it has been successfully created")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"the book "),e("span",{style:{color:"#B56959"}},'"Shinning"'),e("span",{style:{color:"#393A34"}}," should appear in the list")])])])],-1),F1={__name:"18",setup(n){const s={srcSequence:"./pages/05_adding_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[$1,I(a,J({},{ranges:["all","1,10","2-5","7-8","11","12"]}),{default:x(()=>[S1]),_:1},16)]),_:1},16)}}},P1=V(F1,[["__file","/@slidev/slides/18.md"]]),T1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"__construct"),e("span",{style:{color:"#858585"}},"(")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"IndexPage"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"indexPage"),e("span",{style:{color:"#858585"}},",")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"Then"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I should see the book :name in the list'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iShouldSeeTheBookInTheList"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#E0A569"}},"Assert"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"true"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"indexPage"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"isSingleResourceOnPage"),e("span",{style:{color:"#858585"}},"(["),e("span",{style:{color:"#C98A7D"}},"'name'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},"]));")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"__construct"),e("span",{style:{color:"#8E8F8B"}},"(")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"IndexPage"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"indexPage"),e("span",{style:{color:"#8E8F8B"}},",")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"Then"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I should see the book :name in the list'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iShouldSeeTheBookInTheList"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#B58451"}},"Assert"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"true"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"indexPage"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"isSingleResourceOnPage"),e("span",{style:{color:"#8E8F8B"}},"(["),e("span",{style:{color:"#B56959"}},"'name'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},"]));")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),M1={__name:"19",setup(n){const s={transition:"fade",srcSequence:"./pages/05_adding_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[I(a,J({},{ranges:["15"]}),{default:x(()=>[T1]),_:1},16)]),_:1},16)}}},O1=V(M1,[["__file","/@slidev/slides/19.md"]]),N1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"__construct"),e("span",{style:{color:"#858585"}},"(")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"IndexPage"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"indexPage"),e("span",{style:{color:"#858585"}},",")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"__construct"),e("span",{style:{color:"#8E8F8B"}},"(")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"IndexPage"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"indexPage"),e("span",{style:{color:"#8E8F8B"}},",")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),L1={__name:"20",setup(n){const s={transition:"fade",srcSequence:"./pages/05_adding_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[I(a,J({},{ranges:["all"]}),{default:x(()=>[N1]),_:1},16)]),_:1},16)}}},W1=V(L1,[["__file","/@slidev/slides/20.md"]]),R1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"__construct"),e("span",{style:{color:"#858585"}},"(")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"IndexPage"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"indexPage"),e("span",{style:{color:"#858585"}},",")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"CreatePage"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"createPage"),e("span",{style:{color:"#858585"}},",")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"Given"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I want to create a new book'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iWantToCreateANewBook"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"createPage"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"open"),e("span",{style:{color:"#858585"}},"();")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"__construct"),e("span",{style:{color:"#8E8F8B"}},"(")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"IndexPage"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"indexPage"),e("span",{style:{color:"#8E8F8B"}},",")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"CreatePage"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"createPage"),e("span",{style:{color:"#8E8F8B"}},",")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"Given"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I want to create a new book'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iWantToCreateANewBook"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"createPage"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"open"),e("span",{style:{color:"#8E8F8B"}},"();")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),q1={__name:"21",setup(n){const s={srcSequence:"./pages/05_adding_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[I(a,J({},{ranges:["all","7","13","16"]}),{default:x(()=>[R1]),_:1},16)]),_:1},16)}}},V1=V(q1,[["__file","/@slidev/slides/21.md"]]),U1=e("h1",null,"Create book page",-1),j1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Page/Backend/Book/CreatePage.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Tests"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Behat"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Page"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Backend"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#858585"}},";")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Monofony"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Bridge"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Behat"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Crud"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"AbstractCreatePage"),e("span",{style:{color:"#858585"}},";")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"CreatePage"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"extends"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"AbstractCreatePage")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"getRouteName"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"string")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'app_backend_book_create'"),e("span",{style:{color:"#858585"}},";")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Page/Backend/Book/CreatePage.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Tests"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Behat"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Page"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Backend"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#8E8F8B"}},";")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Monofony"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Bridge"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Behat"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Crud"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"AbstractCreatePage"),e("span",{style:{color:"#8E8F8B"}},";")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"CreatePage"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"extends"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"AbstractCreatePage")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"getRouteName"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"string")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'app_backend_book_create'"),e("span",{style:{color:"#8E8F8B"}},";")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),H1={__name:"22",setup(n){const s={srcSequence:"./pages/05_adding_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[U1,I(a,J({},{ranges:["all","7","5,7","9","11"]}),{default:x(()=>[j1]),_:1},16)]),_:1},16)}}},G1=V(H1,[["__file","/@slidev/slides/22.md"]]),K1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"@managing_books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"Feature"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Adding a new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"In "),e("span",{style:{color:"#DBD7CA"}},"order to create new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    As an Administrator")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    I want to add a book in the admin panel")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Background"),e("span",{style:{color:"#DBD7CA"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"I am logged in as an administrator")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"@ui")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Scenario"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Adding a new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"I want to create a new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"When "),e("span",{style:{color:"#DBD7CA"}},"I specify its name as "),e("span",{style:{color:"#C98A7D"}},'"Shinning"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I add it")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Then "),e("span",{style:{color:"#DBD7CA"}},"I should be notified that it has been successfully created")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"the book "),e("span",{style:{color:"#C98A7D"}},'"Shinning"'),e("span",{style:{color:"#DBD7CA"}}," should appear in the list")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"@managing_books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"Feature"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Adding a new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"In "),e("span",{style:{color:"#393A34"}},"order to create new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    As an Administrator")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    I want to add a book in the admin panel")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Background"),e("span",{style:{color:"#393A34"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"I am logged in as an administrator")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"@ui")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Scenario"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Adding a new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"I want to create a new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"When "),e("span",{style:{color:"#393A34"}},"I specify its name as "),e("span",{style:{color:"#B56959"}},'"Shinning"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I add it")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Then "),e("span",{style:{color:"#393A34"}},"I should be notified that it has been successfully created")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"the book "),e("span",{style:{color:"#B56959"}},'"Shinning"'),e("span",{style:{color:"#393A34"}}," should appear in the list")])])])],-1),z1={__name:"23",setup(n){const s={srcSequence:"./pages/05_adding_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[I(a,J({},{ranges:["12","13"]}),{default:x(()=>[K1]),_:1},16)]),_:1},16)}}},Y1=V(z1,[["__file","/@slidev/slides/23.md"]]),Z1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"Given"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I want to create a new book'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iWantToCreateANewBook"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"createPage"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"open"),e("span",{style:{color:"#858585"}},"();")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"Given"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I want to create a new book'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iWantToCreateANewBook"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"createPage"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"open"),e("span",{style:{color:"#8E8F8B"}},"();")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Q1={__name:"24",setup(n){const s={transition:"fade",srcSequence:"./pages/05_adding_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[I(a,J({},{ranges:["10"]}),{default:x(()=>[Z1]),_:1},16)]),_:1},16)}}},J1=V(Q1,[["__file","/@slidev/slides/24.md"]]),X1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"Given"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I want to create a new book'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iWantToCreateANewBook"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"createPage"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"open"),e("span",{style:{color:"#858585"}},"();")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"When"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I specify its name as :name'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iSpecifyItsNameAs"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"createPage"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"nameIt"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},");")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"Given"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I want to create a new book'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iWantToCreateANewBook"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"createPage"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"open"),e("span",{style:{color:"#8E8F8B"}},"();")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"When"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I specify its name as :name'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iSpecifyItsNameAs"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"createPage"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"nameIt"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},");")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),eD={__name:"25",setup(n){const s={srcSequence:"./pages/05_adding_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[I(a,J({},{ranges:["13-17","13","14","16"]}),{default:x(()=>[X1]),_:1},16)]),_:1},16)}}},nD=V(eD,[["__file","/@slidev/slides/25.md"]]),sD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Page/Backend/Book/CreatePage.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Tests"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Behat"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Page"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Backend"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#858585"}},";")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Monofony"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Bridge"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Behat"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Crud"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"AbstractCreatePage"),e("span",{style:{color:"#858585"}},";")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"CreatePage"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"extends"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"AbstractCreatePage")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"getRouteName"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"string")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'app_backend_book_create'"),e("span",{style:{color:"#858585"}},";")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Page/Backend/Book/CreatePage.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Tests"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Behat"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Page"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Backend"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#8E8F8B"}},";")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Monofony"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Bridge"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Behat"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Crud"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"AbstractCreatePage"),e("span",{style:{color:"#8E8F8B"}},";")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"CreatePage"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"extends"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"AbstractCreatePage")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"getRouteName"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"string")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'app_backend_book_create'"),e("span",{style:{color:"#8E8F8B"}},";")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),oD={__name:"26",setup(n){const s={transition:"fade",srcSequence:"./pages/05_adding_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[I(a,J({},{ranges:["11"]}),{default:x(()=>[sD]),_:1},16)]),_:1},16)}}},tD=V(oD,[["__file","/@slidev/slides/26.md"]]),lD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Page/Backend/Book/CreatePage.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Tests"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Behat"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Page"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Backend"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#858585"}},";")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Monofony"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Bridge"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Behat"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Crud"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"AbstractCreatePage"),e("span",{style:{color:"#858585"}},";")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"CreatePage"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"extends"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"AbstractCreatePage")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"getRouteName"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"string")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'app_backend_book_create'"),e("span",{style:{color:"#858585"}},";")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"nameIt"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"getElement"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'name'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"setValue"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},");")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Page/Backend/Book/CreatePage.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Tests"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Behat"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Page"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Backend"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#8E8F8B"}},";")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Monofony"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Bridge"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Behat"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Crud"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"AbstractCreatePage"),e("span",{style:{color:"#8E8F8B"}},";")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"CreatePage"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"extends"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"AbstractCreatePage")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"getRouteName"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"string")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'app_backend_book_create'"),e("span",{style:{color:"#8E8F8B"}},";")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"nameIt"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"getElement"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'name'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"setValue"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},");")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),aD={__name:"27",setup(n){const s={transition:"fade",srcSequence:"./pages/05_adding_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[I(a,J({},{ranges:["14-17","14","16"]}),{default:x(()=>[lD]),_:1},16)]),_:1},16)}}},rD=V(aD,[["__file","/@slidev/slides/27.md"]]),iD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Page/Backend/Book/CreatePage.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Tests"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Behat"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Page"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Backend"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#858585"}},";")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Monofony"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Bridge"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Behat"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Crud"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"AbstractCreatePage"),e("span",{style:{color:"#858585"}},";")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"CreatePage"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"extends"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"AbstractCreatePage")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"getRouteName"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"string")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'app_backend_book_create'"),e("span",{style:{color:"#858585"}},";")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"nameIt"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"getElement"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'name'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"setValue"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},");")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"protected"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"getDefinedElements"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"array")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#C98A7D"}},"'name'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'#book_name'"),e("span",{style:{color:"#858585"}},",")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"];")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Page/Backend/Book/CreatePage.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Tests"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Behat"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Page"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Backend"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#8E8F8B"}},";")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Monofony"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Bridge"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Behat"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Crud"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"AbstractCreatePage"),e("span",{style:{color:"#8E8F8B"}},";")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"CreatePage"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"extends"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"AbstractCreatePage")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"getRouteName"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"string")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'app_backend_book_create'"),e("span",{style:{color:"#8E8F8B"}},";")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"nameIt"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"getElement"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'name'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"setValue"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},");")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"protected"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"getDefinedElements"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"array")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"[")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#B56959"}},"'name'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'#book_name'"),e("span",{style:{color:"#8E8F8B"}},",")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"];")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),cD={__name:"28",setup(n){const s={srcSequence:"./pages/05_adding_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[I(a,J({},{ranges:["19-24","19","22"]}),{default:x(()=>[iD]),_:1},16)]),_:1},16)}}},pD=V(cD,[["__file","/@slidev/slides/28.md"]]),dD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"@managing_books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"Feature"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Adding a new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"In "),e("span",{style:{color:"#DBD7CA"}},"order to create new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    As an Administrator")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    I want to add a book in the admin panel")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Background"),e("span",{style:{color:"#DBD7CA"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"I am logged in as an administrator")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"@ui")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Scenario"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Adding a new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"I want to create a new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"When "),e("span",{style:{color:"#DBD7CA"}},"I specify its name as "),e("span",{style:{color:"#C98A7D"}},'"Shinning"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I add it")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Then "),e("span",{style:{color:"#DBD7CA"}},"I should be notified that it has been successfully created")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"the book "),e("span",{style:{color:"#C98A7D"}},'"Shinning"'),e("span",{style:{color:"#DBD7CA"}}," should appear in the list")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"@managing_books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"Feature"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Adding a new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"In "),e("span",{style:{color:"#393A34"}},"order to create new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    As an Administrator")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    I want to add a book in the admin panel")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Background"),e("span",{style:{color:"#393A34"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"I am logged in as an administrator")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"@ui")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Scenario"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Adding a new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"I want to create a new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"When "),e("span",{style:{color:"#393A34"}},"I specify its name as "),e("span",{style:{color:"#B56959"}},'"Shinning"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I add it")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Then "),e("span",{style:{color:"#393A34"}},"I should be notified that it has been successfully created")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"the book "),e("span",{style:{color:"#B56959"}},'"Shinning"'),e("span",{style:{color:"#393A34"}}," should appear in the list")])])])],-1),uD={__name:"29",setup(n){const s={srcSequence:"./pages/05_adding_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[I(a,J({},{ranges:["13","14"]}),{default:x(()=>[dD]),_:1},16)]),_:1},16)}}},yD=V(uD,[["__file","/@slidev/slides/29.md"]]),hD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"When"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I specify its name as :name'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iSpecifyItsNameAs"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"createPage"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"nameIt"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},");")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"When"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I specify its name as :name'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iSpecifyItsNameAs"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"createPage"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"nameIt"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},");")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),fD={__name:"30",setup(n){const s={transition:"fade",srcSequence:"./pages/05_adding_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[I(a,J({},{ranges:["10"]}),{default:x(()=>[hD]),_:1},16)]),_:1},16)}}},mD=V(fD,[["__file","/@slidev/slides/30.md"]]),gD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"When"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I specify its name as :name'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iSpecifyItsNameAs"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"createPage"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"nameIt"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},");")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"When"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I add it'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iAddIt"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"createPage"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"create"),e("span",{style:{color:"#858585"}},"();")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"When"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I specify its name as :name'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iSpecifyItsNameAs"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"createPage"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"nameIt"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},");")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"When"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I add it'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iAddIt"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"createPage"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"create"),e("span",{style:{color:"#8E8F8B"}},"();")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),BD={__name:"31",setup(n){const s={srcSequence:"./pages/05_adding_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[I(a,J({},{ranges:["13-17","13","14","16"]}),{default:x(()=>[gD]),_:1},16)]),_:1},16)}}},AD=V(BD,[["__file","/@slidev/slides/31.md"]]),CD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"@managing_books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"Feature"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Adding a new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"In "),e("span",{style:{color:"#DBD7CA"}},"order to create new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    As an Administrator")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    I want to add a book in the admin panel")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Background"),e("span",{style:{color:"#DBD7CA"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"I am logged in as an administrator")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"@ui")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Scenario"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Adding a new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"I want to create a new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"When "),e("span",{style:{color:"#DBD7CA"}},"I specify its name as "),e("span",{style:{color:"#C98A7D"}},'"Shinning"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I add it")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Then "),e("span",{style:{color:"#DBD7CA"}},"I should be notified that it has been successfully created")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"the book "),e("span",{style:{color:"#C98A7D"}},'"Shinning"'),e("span",{style:{color:"#DBD7CA"}}," should appear in the list")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"@managing_books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"Feature"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Adding a new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"In "),e("span",{style:{color:"#393A34"}},"order to create new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    As an Administrator")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    I want to add a book in the admin panel")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Background"),e("span",{style:{color:"#393A34"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"I am logged in as an administrator")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"@ui")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Scenario"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Adding a new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"I want to create a new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"When "),e("span",{style:{color:"#393A34"}},"I specify its name as "),e("span",{style:{color:"#B56959"}},'"Shinning"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I add it")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Then "),e("span",{style:{color:"#393A34"}},"I should be notified that it has been successfully created")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"the book "),e("span",{style:{color:"#B56959"}},'"Shinning"'),e("span",{style:{color:"#393A34"}}," should appear in the list")])])])],-1),bD={__name:"32",setup(n){const s={srcSequence:"./pages/05_adding_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[I(a,J({},{ranges:["14","15"]}),{default:x(()=>[CD]),_:1},16)]),_:1},16)}}},kD=V(bD,[["__file","/@slidev/slides/32.md"]]),_D=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Context/Ui/Backend/NotificationContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"NotificationContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"__construct"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"NotificationCheckerInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"notificationChecker"),e("span",{style:{color:"#858585"}},")")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"/**")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"     * @Then I should be notified that it has been successfully created")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"     */")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iShouldBeNotifiedItHasBeenSuccessfullyCreated"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"notificationChecker"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"checkNotification"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'has been successfully created.'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"NotificationType"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"success"),e("span",{style:{color:"#858585"}},"());")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Context/Ui/Backend/NotificationContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"NotificationContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"__construct"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"NotificationCheckerInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"notificationChecker"),e("span",{style:{color:"#8E8F8B"}},")")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"/**")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"     * @Then I should be notified that it has been successfully created")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"     */")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iShouldBeNotifiedItHasBeenSuccessfullyCreated"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"notificationChecker"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"checkNotification"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'has been successfully created.'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"NotificationType"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"success"),e("span",{style:{color:"#8E8F8B"}},"());")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),DD={__name:"33",setup(n){const s={srcSequence:"./pages/05_adding_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[I(a,J({},{ranges:["all","10","12","14"]}),{default:x(()=>[_D]),_:1},16)]),_:1},16)}}},vD=V(DD,[["__file","/@slidev/slides/33.md"]]),xD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"@managing_books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"Feature"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Adding a new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"In "),e("span",{style:{color:"#DBD7CA"}},"order to create new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    As an Administrator")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    I want to add a book in the admin panel")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Background"),e("span",{style:{color:"#DBD7CA"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"I am logged in as an administrator")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"@ui")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Scenario"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Adding a new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"I want to create a new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"When "),e("span",{style:{color:"#DBD7CA"}},"I specify its name as "),e("span",{style:{color:"#C98A7D"}},'"Shinning"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I add it")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Then "),e("span",{style:{color:"#DBD7CA"}},"I should be notified that it has been successfully created")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"the book "),e("span",{style:{color:"#C98A7D"}},'"Shinning"'),e("span",{style:{color:"#DBD7CA"}}," should appear in the list")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"@managing_books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"Feature"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Adding a new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"In "),e("span",{style:{color:"#393A34"}},"order to create new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    As an Administrator")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    I want to add a book in the admin panel")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Background"),e("span",{style:{color:"#393A34"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"I am logged in as an administrator")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"@ui")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Scenario"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Adding a new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"I want to create a new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"When "),e("span",{style:{color:"#393A34"}},"I specify its name as "),e("span",{style:{color:"#B56959"}},'"Shinning"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I add it")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Then "),e("span",{style:{color:"#393A34"}},"I should be notified that it has been successfully created")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"the book "),e("span",{style:{color:"#B56959"}},'"Shinning"'),e("span",{style:{color:"#393A34"}}," should appear in the list")])])])],-1),wD={__name:"34",setup(n){const s={srcSequence:"./pages/05_adding_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[I(a,J({},{ranges:["15","16"]}),{default:x(()=>[xD]),_:1},16)]),_:1},16)}}},ED=V(wD,[["__file","/@slidev/slides/34.md"]]),ID=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"   "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"When"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I add it'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iAddIt"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"createPage"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"create"),e("span",{style:{color:"#858585"}},"();")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"   "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"When"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I add it'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iAddIt"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"createPage"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"create"),e("span",{style:{color:"#8E8F8B"}},"();")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),$D={__name:"35",setup(n){const s={transition:"fade",srcSequence:"./pages/05_adding_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[I(a,J({},{ranges:["10"]}),{default:x(()=>[ID]),_:1},16)]),_:1},16)}}},SD=V($D,[["__file","/@slidev/slides/35.md"]]),FD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"When"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I add it'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iAddIt"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"createPage"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"create"),e("span",{style:{color:"#858585"}},"();")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"Then"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'the book :name should appear in the list'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"] ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"theBookShouldAppearInTheList"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"indexPage"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"open"),e("span",{style:{color:"#858585"}},"();")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#E0A569"}},"Assert"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"true"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"indexPage"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"isSingleResourceOnPage"),e("span",{style:{color:"#858585"}},"(["),e("span",{style:{color:"#C98A7D"}},"'name'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},"]));")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"When"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I add it'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iAddIt"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"createPage"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"create"),e("span",{style:{color:"#8E8F8B"}},"();")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"Then"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'the book :name should appear in the list'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"] ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"theBookShouldAppearInTheList"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"indexPage"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"open"),e("span",{style:{color:"#8E8F8B"}},"();")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#B58451"}},"Assert"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"true"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"indexPage"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"isSingleResourceOnPage"),e("span",{style:{color:"#8E8F8B"}},"(["),e("span",{style:{color:"#B56959"}},"'name'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},"]));")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),PD={__name:"36",setup(n){const s={srcSequence:"./pages/05_adding_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[I(a,J({},{ranges:["13-19","13","14","16","18"]}),{default:x(()=>[FD]),_:1},16)]),_:1},16)}}},TD=V(PD,[["__file","/@slidev/slides/36.md"]]),MD=e("h1",null,"Editing books",-1),OD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"@managing_books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"Feature"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Editing a book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"In "),e("span",{style:{color:"#DBD7CA"}},"order to change information about a book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    As an Administrator")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    I want to be able to edit a book")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Background"),e("span",{style:{color:"#DBD7CA"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"there is a book with name "),e("span",{style:{color:"#C98A7D"}},'"Shinning"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I am logged in as an administrator")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"@ui")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Scenario"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Renaming a book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"When "),e("span",{style:{color:"#DBD7CA"}},"I want to edit this book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I change its name to "),e("span",{style:{color:"#C98A7D"}},'"Carrie"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I save my changes")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Then "),e("span",{style:{color:"#DBD7CA"}},"I should be notified that it has been successfully edited")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"this book with name "),e("span",{style:{color:"#C98A7D"}},'"Carrie"'),e("span",{style:{color:"#DBD7CA"}}," should appear in the list")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"@managing_books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"Feature"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Editing a book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"In "),e("span",{style:{color:"#393A34"}},"order to change information about a book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    As an Administrator")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    I want to be able to edit a book")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Background"),e("span",{style:{color:"#393A34"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"there is a book with name "),e("span",{style:{color:"#B56959"}},'"Shinning"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I am logged in as an administrator")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"@ui")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Scenario"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Renaming a book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"When "),e("span",{style:{color:"#393A34"}},"I want to edit this book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I change its name to "),e("span",{style:{color:"#B56959"}},'"Carrie"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I save my changes")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Then "),e("span",{style:{color:"#393A34"}},"I should be notified that it has been successfully edited")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"this book with name "),e("span",{style:{color:"#B56959"}},'"Carrie"'),e("span",{style:{color:"#393A34"}}," should appear in the list")])])])],-1),ND={__name:"37",setup(n){const s={srcSequence:"./pages/06_editing_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[MD,I(a,J({},{ranges:["all","1,11","2-5","7-9","12","13"]}),{default:x(()=>[OD]),_:1},16)]),_:1},16)}}},LD=V(ND,[["__file","/@slidev/slides/37.md"]]),WD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Page/Backend/Book/UpdatePage.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Tests"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Behat"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Page"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Backend"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#858585"}},";")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Monofony"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Bridge"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Behat"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Behaviour"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"NamesIt"),e("span",{style:{color:"#858585"}},";")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Monofony"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Bridge"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Behat"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Crud"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"AbstractUpdatePage"),e("span",{style:{color:"#858585"}},";")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"UpdatePage"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"extends"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"AbstractUpdatePage")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"NamesIt"),e("span",{style:{color:"#858585"}},";")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"getRouteName"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"string")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'app_backend_book_update'"),e("span",{style:{color:"#858585"}},";")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Page/Backend/Book/UpdatePage.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Tests"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Behat"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Page"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Backend"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#8E8F8B"}},";")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Monofony"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Bridge"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Behat"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Behaviour"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"NamesIt"),e("span",{style:{color:"#8E8F8B"}},";")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Monofony"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Bridge"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Behat"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Crud"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"AbstractUpdatePage"),e("span",{style:{color:"#8E8F8B"}},";")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"UpdatePage"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"extends"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"AbstractUpdatePage")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"NamesIt"),e("span",{style:{color:"#8E8F8B"}},";")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"getRouteName"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"string")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'app_backend_book_update'"),e("span",{style:{color:"#8E8F8B"}},";")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),RD={__name:"38",setup(n){const s={srcSequence:"./pages/06_editing_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[I(a,J({},{ranges:["all","8","8,6","10","10,5","14"]}),{default:x(()=>[WD]),_:1},16)]),_:1},16)}}},qD=V(RD,[["__file","/@slidev/slides/38.md"]]),VD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"Given"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I want to create a new book'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iWantToCreateANewBook"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"createPage"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"open"),e("span",{style:{color:"#858585"}},"();")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"Given"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I want to create a new book'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iWantToCreateANewBook"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"createPage"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"open"),e("span",{style:{color:"#8E8F8B"}},"();")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),UD={__name:"39",setup(n){const s={transition:"fade",srcSequence:"./pages/06_editing_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[I(a,J({},{ranges:["7-11"]}),{default:x(()=>[VD]),_:1},16)]),_:1},16)}}},jD=V(UD,[["__file","/@slidev/slides/39.md"]]),HD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"Given"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I want to create a new book'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iWantToCreateANewBook"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"createPage"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"open"),e("span",{style:{color:"#858585"}},"();")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"When"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'/"),e("span",{style:{color:"#CB7676"}},"^"),e("span",{style:{color:"#C4704F"}},"I want to edit (this book)"),e("span",{style:{color:"#CB7676"}},"$"),e("span",{style:{color:"#C98A7D"}},"/'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iWantToEditThisBook"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"book"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"updatePage"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"open"),e("span",{style:{color:"#858585"}},"(["),e("span",{style:{color:"#C98A7D"}},"'id'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"book"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"getId"),e("span",{style:{color:"#858585"}},"()]);")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"Given"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I want to create a new book'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iWantToCreateANewBook"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"createPage"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"open"),e("span",{style:{color:"#8E8F8B"}},"();")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"When"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'/"),e("span",{style:{color:"#AB5959"}},"^"),e("span",{style:{color:"#AB5E3F"}},"I want to edit (this book)"),e("span",{style:{color:"#AB5959"}},"$"),e("span",{style:{color:"#B56959"}},"/'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iWantToEditThisBook"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"book"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"updatePage"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"open"),e("span",{style:{color:"#8E8F8B"}},"(["),e("span",{style:{color:"#B56959"}},"'id'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"book"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"getId"),e("span",{style:{color:"#8E8F8B"}},"()]);")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),GD={__name:"40",setup(n){const s={srcSequence:"./pages/06_editing_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[I(a,J({},{ranges:["13-17","13","14","16"]}),{default:x(()=>[HD]),_:1},16)]),_:1},16)}}},KD=V(GD,[["__file","/@slidev/slides/40.md"]]),zD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src tests/Behat/Context/Setup/BookContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"BookContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"__construct"),e("span",{style:{color:"#858585"}},"(")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"EntityManagerInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"entityManager"),e("span",{style:{color:"#858585"}},",")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"Given"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'there is (also) a book with name :name'"),e("span",{style:{color:"#858585"}},")")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#E0A569"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"thereIsABookWithName"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},": "),e("span",{style:{color:"#E0A569"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    {")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        $"),e("span",{style:{color:"#E0A569"}},"book"),e("span",{style:{color:"#DBD7CA"}}," = "),e("span",{style:{color:"#E0A569"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Book"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}},";")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        $"),e("span",{style:{color:"#E0A569"}},"book"),e("span",{style:{color:"#DBD7CA"}},"->"),e("span",{style:{color:"#E0A569"}},"setName"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},";")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        $"),e("span",{style:{color:"#E0A569"}},"this"),e("span",{style:{color:"#DBD7CA"}},"->"),e("span",{style:{color:"#E0A569"}},"entityManager"),e("span",{style:{color:"#DBD7CA"}},"->"),e("span",{style:{color:"#E0A569"}},"persist"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"book"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},";")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        $"),e("span",{style:{color:"#E0A569"}},"this"),e("span",{style:{color:"#DBD7CA"}},"->"),e("span",{style:{color:"#E0A569"}},"entityManager"),e("span",{style:{color:"#DBD7CA"}},"->"),e("span",{style:{color:"#E0A569"}},"flush"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}},";")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    }")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src tests/Behat/Context/Setup/BookContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"BookContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"__construct"),e("span",{style:{color:"#8E8F8B"}},"(")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"EntityManagerInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"entityManager"),e("span",{style:{color:"#8E8F8B"}},",")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"Given"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'there is (also) a book with name :name'"),e("span",{style:{color:"#8E8F8B"}},")")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B58451"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"thereIsABookWithName"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},": "),e("span",{style:{color:"#B58451"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    {")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        $"),e("span",{style:{color:"#B58451"}},"book"),e("span",{style:{color:"#393A34"}}," = "),e("span",{style:{color:"#B58451"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Book"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}},";")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        $"),e("span",{style:{color:"#B58451"}},"book"),e("span",{style:{color:"#393A34"}},"->"),e("span",{style:{color:"#B58451"}},"setName"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},";")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        $"),e("span",{style:{color:"#B58451"}},"this"),e("span",{style:{color:"#393A34"}},"->"),e("span",{style:{color:"#B58451"}},"entityManager"),e("span",{style:{color:"#393A34"}},"->"),e("span",{style:{color:"#B58451"}},"persist"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"book"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},";")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        $"),e("span",{style:{color:"#B58451"}},"this"),e("span",{style:{color:"#393A34"}},"->"),e("span",{style:{color:"#B58451"}},"entityManager"),e("span",{style:{color:"#393A34"}},"->"),e("span",{style:{color:"#B58451"}},"flush"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}},";")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    }")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"}")])])])],-1),YD={__name:"41",setup(n){const s={transition:"fade",srcSequence:"./pages/06_editing_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[I(a,J({},{ranges:["16-17"]}),{default:x(()=>[zD]),_:1},16)]),_:1},16)}}},ZD=V(YD,[["__file","/@slidev/slides/41.md"]]),QD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src tests/Behat/Context/Setup/BookContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"BookContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"__construct"),e("span",{style:{color:"#858585"}},"(")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"EntityManagerInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"entityManager"),e("span",{style:{color:"#858585"}},",")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"SharedStorageInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"sharedStorage"),e("span",{style:{color:"#858585"}},",")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"Given"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'there is (also) a book with name :name'"),e("span",{style:{color:"#858585"}},")")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#E0A569"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"thereIsABookWithName"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},": "),e("span",{style:{color:"#E0A569"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    {")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        $"),e("span",{style:{color:"#E0A569"}},"book"),e("span",{style:{color:"#DBD7CA"}}," = "),e("span",{style:{color:"#E0A569"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Book"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}},";")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        $"),e("span",{style:{color:"#E0A569"}},"book"),e("span",{style:{color:"#DBD7CA"}},"->"),e("span",{style:{color:"#E0A569"}},"setName"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},";")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        $"),e("span",{style:{color:"#E0A569"}},"this"),e("span",{style:{color:"#DBD7CA"}},"->"),e("span",{style:{color:"#E0A569"}},"entityManager"),e("span",{style:{color:"#DBD7CA"}},"->"),e("span",{style:{color:"#E0A569"}},"persist"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"book"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},";")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        $"),e("span",{style:{color:"#E0A569"}},"this"),e("span",{style:{color:"#DBD7CA"}},"->"),e("span",{style:{color:"#E0A569"}},"entityManager"),e("span",{style:{color:"#DBD7CA"}},"->"),e("span",{style:{color:"#E0A569"}},"flush"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}},";")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        $"),e("span",{style:{color:"#E0A569"}},"this"),e("span",{style:{color:"#DBD7CA"}},"->"),e("span",{style:{color:"#E0A569"}},"sharedStorage"),e("span",{style:{color:"#DBD7CA"}},"->"),e("span",{style:{color:"#E0A569"}},"set"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'book'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"book"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},";")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    }")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src tests/Behat/Context/Setup/BookContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"BookContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"__construct"),e("span",{style:{color:"#8E8F8B"}},"(")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"EntityManagerInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"entityManager"),e("span",{style:{color:"#8E8F8B"}},",")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"SharedStorageInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"sharedStorage"),e("span",{style:{color:"#8E8F8B"}},",")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"Given"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'there is (also) a book with name :name'"),e("span",{style:{color:"#8E8F8B"}},")")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B58451"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"thereIsABookWithName"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},": "),e("span",{style:{color:"#B58451"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    {")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        $"),e("span",{style:{color:"#B58451"}},"book"),e("span",{style:{color:"#393A34"}}," = "),e("span",{style:{color:"#B58451"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Book"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}},";")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        $"),e("span",{style:{color:"#B58451"}},"book"),e("span",{style:{color:"#393A34"}},"->"),e("span",{style:{color:"#B58451"}},"setName"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},";")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        $"),e("span",{style:{color:"#B58451"}},"this"),e("span",{style:{color:"#393A34"}},"->"),e("span",{style:{color:"#B58451"}},"entityManager"),e("span",{style:{color:"#393A34"}},"->"),e("span",{style:{color:"#B58451"}},"persist"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"book"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},";")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        $"),e("span",{style:{color:"#B58451"}},"this"),e("span",{style:{color:"#393A34"}},"->"),e("span",{style:{color:"#B58451"}},"entityManager"),e("span",{style:{color:"#393A34"}},"->"),e("span",{style:{color:"#B58451"}},"flush"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}},";")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        $"),e("span",{style:{color:"#B58451"}},"this"),e("span",{style:{color:"#393A34"}},"->"),e("span",{style:{color:"#B58451"}},"sharedStorage"),e("span",{style:{color:"#393A34"}},"->"),e("span",{style:{color:"#B58451"}},"set"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'book'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"book"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},";")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    }")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"}")])])])],-1),JD={__name:"42",setup(n){const s={srcSequence:"./pages/06_editing_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[I(a,J({},{ranges:["20","7"]}),{default:x(()=>[QD]),_:1},16)]),_:1},16)}}},XD=V(JD,[["__file","/@slidev/slides/42.md"]]),e9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Context/Transform/SharedStorageContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"SharedStorageContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"__construct"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"SharedStorageInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"sharedStorage"),e("span",{style:{color:"#858585"}},")")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"/**")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"     * @Transform /^(it|its|theirs|them)$/")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"     */")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"getLatestResource"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"mixed")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"sharedStorage"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"getLatestResource"),e("span",{style:{color:"#858585"}},"();")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"/**")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},'     * @Transform /^(?:this|that|the) ([^"]+)$/')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"     */")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"getResource"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"resource"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"mixed")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"sharedStorage"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"get"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"StringInflector"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"nameToCode"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"resource"),e("span",{style:{color:"#858585"}},"));")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Context/Transform/SharedStorageContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"SharedStorageContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"__construct"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"SharedStorageInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"sharedStorage"),e("span",{style:{color:"#8E8F8B"}},")")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"/**")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"     * @Transform /^(it|its|theirs|them)$/")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"     */")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"getLatestResource"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"mixed")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"sharedStorage"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"getLatestResource"),e("span",{style:{color:"#8E8F8B"}},"();")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"/**")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},'     * @Transform /^(?:this|that|the) ([^"]+)$/')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"     */")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"getResource"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"resource"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"mixed")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"sharedStorage"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"get"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"StringInflector"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"nameToCode"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"resource"),e("span",{style:{color:"#8E8F8B"}},"));")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),n9={__name:"43",setup(n){const s={srcSequence:"./pages/06_editing_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[I(a,J({},{ranges:["all","3","5","17-23","18","20","22"]}),{default:x(()=>[e9]),_:1},16)]),_:1},16)}}},s9=V(n9,[["__file","/@slidev/slides/43.md"]]),o9=e("h1",null,"Editing books",-1),t9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"@managing_books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"Feature"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Editing a book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"In "),e("span",{style:{color:"#DBD7CA"}},"order to change information about a book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    As an Administrator")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    I want to be able to edit a book")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Background"),e("span",{style:{color:"#DBD7CA"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"there is a book with name "),e("span",{style:{color:"#C98A7D"}},'"Shinning"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I am logged in as an administrator")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"@ui")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Scenario"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Renaming a book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"When "),e("span",{style:{color:"#DBD7CA"}},"I want to edit this book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I change its name to "),e("span",{style:{color:"#C98A7D"}},'"Carrie"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I save my changes")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Then "),e("span",{style:{color:"#DBD7CA"}},"I should be notified that it has been successfully edited")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"this book with name "),e("span",{style:{color:"#C98A7D"}},'"Carrie"'),e("span",{style:{color:"#DBD7CA"}}," should appear in the list")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"@managing_books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"Feature"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Editing a book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"In "),e("span",{style:{color:"#393A34"}},"order to change information about a book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    As an Administrator")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    I want to be able to edit a book")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Background"),e("span",{style:{color:"#393A34"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"there is a book with name "),e("span",{style:{color:"#B56959"}},'"Shinning"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I am logged in as an administrator")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"@ui")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Scenario"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Renaming a book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"When "),e("span",{style:{color:"#393A34"}},"I want to edit this book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I change its name to "),e("span",{style:{color:"#B56959"}},'"Carrie"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I save my changes")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Then "),e("span",{style:{color:"#393A34"}},"I should be notified that it has been successfully edited")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"this book with name "),e("span",{style:{color:"#B56959"}},'"Carrie"'),e("span",{style:{color:"#393A34"}}," should appear in the list")])])])],-1),l9={__name:"44",setup(n){const s={srcSequence:"./pages/06_editing_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[o9,I(a,J({},{ranges:["13","14"]}),{default:x(()=>[t9]),_:1},16)]),_:1},16)}}},a9=V(l9,[["__file","/@slidev/slides/44.md"]]),r9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"When"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I specify its name as :name'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iSpecifyItsNameAs"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"createPage"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"nameIt"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},");")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"When"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I specify its name as :name'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iSpecifyItsNameAs"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"createPage"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"nameIt"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},");")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),i9={__name:"45",setup(n){const s={transition:"fade",srcSequence:"./pages/06_editing_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[I(a,J({},{ranges:["7-11"]}),{default:x(()=>[r9]),_:1},16)]),_:1},16)}}},c9=V(i9,[["__file","/@slidev/slides/45.md"]]),p9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"When"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I specify its name as :name'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iSpecifyItsNameAs"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"createPage"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"nameIt"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},");")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"When"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I change its name to :name'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iChangeItsNameTo"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"updatePage"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"nameIt"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},");")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"When"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I specify its name as :name'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iSpecifyItsNameAs"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"createPage"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"nameIt"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},");")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"When"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I change its name to :name'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iChangeItsNameTo"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"updatePage"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"nameIt"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},");")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),d9={__name:"46",setup(n){const s={srcSequence:"./pages/06_editing_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[I(a,J({},{ranges:["13-17","13","14","16"]}),{default:x(()=>[p9]),_:1},16)]),_:1},16)}}},u9=V(d9,[["__file","/@slidev/slides/46.md"]]),y9=e("h1",null,"Editing books",-1),h9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"@managing_books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"Feature"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Editing a book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"In "),e("span",{style:{color:"#DBD7CA"}},"order to change information about a book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    As an Administrator")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    I want to be able to edit a book")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Background"),e("span",{style:{color:"#DBD7CA"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"there is a book with name "),e("span",{style:{color:"#C98A7D"}},'"Shinning"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I am logged in as an administrator")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"@ui")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Scenario"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Renaming a book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"When "),e("span",{style:{color:"#DBD7CA"}},"I want to edit this book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I change its name to "),e("span",{style:{color:"#C98A7D"}},'"Carrie"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I save my changes")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Then "),e("span",{style:{color:"#DBD7CA"}},"I should be notified that it has been successfully edited")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"this book with name "),e("span",{style:{color:"#C98A7D"}},'"Carrie"'),e("span",{style:{color:"#DBD7CA"}}," should appear in the list")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"@managing_books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"Feature"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Editing a book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"In "),e("span",{style:{color:"#393A34"}},"order to change information about a book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    As an Administrator")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    I want to be able to edit a book")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Background"),e("span",{style:{color:"#393A34"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"there is a book with name "),e("span",{style:{color:"#B56959"}},'"Shinning"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I am logged in as an administrator")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"@ui")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Scenario"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Renaming a book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"When "),e("span",{style:{color:"#393A34"}},"I want to edit this book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I change its name to "),e("span",{style:{color:"#B56959"}},'"Carrie"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I save my changes")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Then "),e("span",{style:{color:"#393A34"}},"I should be notified that it has been successfully edited")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"this book with name "),e("span",{style:{color:"#B56959"}},'"Carrie"'),e("span",{style:{color:"#393A34"}}," should appear in the list")])])])],-1),f9={__name:"47",setup(n){const s={srcSequence:"./pages/06_editing_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[y9,I(a,J({},{ranges:["14","15"]}),{default:x(()=>[h9]),_:1},16)]),_:1},16)}}},m9=V(f9,[["__file","/@slidev/slides/47.md"]]),g9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"When"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I add it'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iAddIt"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"createPage"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"create"),e("span",{style:{color:"#858585"}},"();")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"When"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I add it'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iAddIt"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"createPage"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"create"),e("span",{style:{color:"#8E8F8B"}},"();")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),B9={__name:"48",setup(n){const s={transition:"fade",srcSequence:"./pages/06_editing_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[I(a,J({},{ranges:["7-11"]}),{default:x(()=>[g9]),_:1},16)]),_:1},16)}}},A9=V(B9,[["__file","/@slidev/slides/48.md"]]),C9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"When"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I add it'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iAddIt"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"createPage"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"create"),e("span",{style:{color:"#858585"}},"();")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"When"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I save my changes'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iSaveMyChanges"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"updatePage"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"saveChanges"),e("span",{style:{color:"#858585"}},"();")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"When"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I add it'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iAddIt"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"createPage"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"create"),e("span",{style:{color:"#8E8F8B"}},"();")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"When"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I save my changes'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iSaveMyChanges"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"updatePage"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"saveChanges"),e("span",{style:{color:"#8E8F8B"}},"();")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),b9={__name:"49",setup(n){const s={srcSequence:"./pages/06_editing_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[I(a,J({},{ranges:["13-17","13","14","16"]}),{default:x(()=>[C9]),_:1},16)]),_:1},16)}}},k9=V(b9,[["__file","/@slidev/slides/49.md"]]),_9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"@managing_books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"Feature"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Editing a book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"In "),e("span",{style:{color:"#DBD7CA"}},"order to change information about a book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    As an Administrator")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    I want to be able to edit a book")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Background"),e("span",{style:{color:"#DBD7CA"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"there is a book with name "),e("span",{style:{color:"#C98A7D"}},'"Shinning"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I am logged in as an administrator")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"@ui")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Scenario"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Renaming a book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"When "),e("span",{style:{color:"#DBD7CA"}},"I want to edit this book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I change its name to "),e("span",{style:{color:"#C98A7D"}},'"Carrie"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I save my changes")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Then "),e("span",{style:{color:"#DBD7CA"}},"I should be notified that it has been successfully edited")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"this book with name "),e("span",{style:{color:"#C98A7D"}},'"Carrie"'),e("span",{style:{color:"#DBD7CA"}}," should appear in the list")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"@managing_books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"Feature"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Editing a book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"In "),e("span",{style:{color:"#393A34"}},"order to change information about a book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    As an Administrator")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    I want to be able to edit a book")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Background"),e("span",{style:{color:"#393A34"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"there is a book with name "),e("span",{style:{color:"#B56959"}},'"Shinning"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I am logged in as an administrator")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"@ui")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Scenario"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Renaming a book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"When "),e("span",{style:{color:"#393A34"}},"I want to edit this book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I change its name to "),e("span",{style:{color:"#B56959"}},'"Carrie"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I save my changes")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Then "),e("span",{style:{color:"#393A34"}},"I should be notified that it has been successfully edited")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"this book with name "),e("span",{style:{color:"#B56959"}},'"Carrie"'),e("span",{style:{color:"#393A34"}}," should appear in the list")])])])],-1),D9={__name:"50",setup(n){const s={srcSequence:"./pages/06_editing_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[I(a,J({},{ranges:["15","16","17"]}),{default:x(()=>[_9]),_:1},16)]),_:1},16)}}},v9=V(D9,[["__file","/@slidev/slides/50.md"]]),x9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"Then"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'the book :name should appear in the list'"),e("span",{style:{color:"#858585"}},")")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"Then"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'this book with name :name should appear in the list'"),e("span",{style:{color:"#858585"}},")")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#E0A569"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"theBookShouldAppearInTheList"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},": "),e("span",{style:{color:"#E0A569"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    {")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        $"),e("span",{style:{color:"#E0A569"}},"this"),e("span",{style:{color:"#DBD7CA"}},"->"),e("span",{style:{color:"#E0A569"}},"indexPage"),e("span",{style:{color:"#DBD7CA"}},"->"),e("span",{style:{color:"#E0A569"}},"open"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}},";")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#E0A569"}},"Assert"),e("span",{style:{color:"#DBD7CA"}},"::"),e("span",{style:{color:"#E0A569"}},"true"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"indexPage"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"isSingleResourceOnPage"),e("span",{style:{color:"#858585"}},"(["),e("span",{style:{color:"#C98A7D"}},"'name'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},"]))"),e("span",{style:{color:"#DBD7CA"}},";")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    }")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    // [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"Then"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'the book :name should appear in the list'"),e("span",{style:{color:"#8E8F8B"}},")")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"Then"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'this book with name :name should appear in the list'"),e("span",{style:{color:"#8E8F8B"}},")")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B58451"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"theBookShouldAppearInTheList"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},": "),e("span",{style:{color:"#B58451"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    {")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        $"),e("span",{style:{color:"#B58451"}},"this"),e("span",{style:{color:"#393A34"}},"->"),e("span",{style:{color:"#B58451"}},"indexPage"),e("span",{style:{color:"#393A34"}},"->"),e("span",{style:{color:"#B58451"}},"open"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}},";")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#B58451"}},"Assert"),e("span",{style:{color:"#393A34"}},"::"),e("span",{style:{color:"#B58451"}},"true"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"indexPage"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"isSingleResourceOnPage"),e("span",{style:{color:"#8E8F8B"}},"(["),e("span",{style:{color:"#B56959"}},"'name'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},"]))"),e("span",{style:{color:"#393A34"}},";")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    }")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    // [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),w9={__name:"51",setup(n){const s={transition:"fade",srcSequence:"./pages/06_editing_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[I(a,J({},{ranges:["7-13","7","8"]}),{default:x(()=>[x9]),_:1},16)]),_:1},16)}}},E9=V(w9,[["__file","/@slidev/slides/51.md"]]),I9=e("h1",null,"Deleting books",-1),$9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"@managing_books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"Feature"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Deleting a book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"In "),e("span",{style:{color:"#DBD7CA"}},"order to get rid of deprecated books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    As an Administrator")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    I want to be able to delete a book")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Background"),e("span",{style:{color:"#DBD7CA"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"there is a book with name "),e("span",{style:{color:"#C98A7D"}},'"Shinning"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"there is also a book with name "),e("span",{style:{color:"#C98A7D"}},'"Carrie"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I am logged in as an administrator")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"@ui")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Scenario"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Deleting a book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"I am browsing books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"When "),e("span",{style:{color:"#DBD7CA"}},"I delete book with name "),e("span",{style:{color:"#C98A7D"}},'"Shinning"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Then "),e("span",{style:{color:"#DBD7CA"}},"I should be notified that it has been successfully deleted")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"there should not be "),e("span",{style:{color:"#C98A7D"}},'"Shinning"'),e("span",{style:{color:"#DBD7CA"}}," book anymore")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"@managing_books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"Feature"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Deleting a book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"In "),e("span",{style:{color:"#393A34"}},"order to get rid of deprecated books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    As an Administrator")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    I want to be able to delete a book")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Background"),e("span",{style:{color:"#393A34"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"there is a book with name "),e("span",{style:{color:"#B56959"}},'"Shinning"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"there is also a book with name "),e("span",{style:{color:"#B56959"}},'"Carrie"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I am logged in as an administrator")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"@ui")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Scenario"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Deleting a book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"I am browsing books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"When "),e("span",{style:{color:"#393A34"}},"I delete book with name "),e("span",{style:{color:"#B56959"}},'"Shinning"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Then "),e("span",{style:{color:"#393A34"}},"I should be notified that it has been successfully deleted")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"there should not be "),e("span",{style:{color:"#B56959"}},'"Shinning"'),e("span",{style:{color:"#393A34"}}," book anymore")])])])],-1),S9={__name:"52",setup(n){const s={srcSequence:"./pages/07_deleting_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[I9,I(a,J({},{ranges:["all","3-5","7-10","14"]}),{default:x(()=>[$9]),_:1},16)]),_:1},16)}}},F9=V(S9,[["__file","/@slidev/slides/52.md"]]),P9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src tests/Behat/Context/Setup/BookContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"BookContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"When"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I want to browse books'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"Given"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I am browsing books'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iWantToBrowseBooks"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"indexPage"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"open"),e("span",{style:{color:"#858585"}},"();")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src tests/Behat/Context/Setup/BookContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"BookContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"When"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I want to browse books'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"Given"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I am browsing books'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iWantToBrowseBooks"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"indexPage"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"open"),e("span",{style:{color:"#8E8F8B"}},"();")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),T9={__name:"53",setup(n){const s={srcSequence:"./pages/07_deleting_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[I(a,J({},{ranges:["all","7","8"]}),{default:x(()=>[P9]),_:1},16)]),_:1},16)}}},M9=V(T9,[["__file","/@slidev/slides/53.md"]]),O9=e("h1",null,"Deleting books",-1),N9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"@managing_books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"Feature"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Deleting a book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"In "),e("span",{style:{color:"#DBD7CA"}},"order to get rid of deprecated books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    As an Administrator")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    I want to be able to delete a book")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Background"),e("span",{style:{color:"#DBD7CA"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"there is a book with name "),e("span",{style:{color:"#C98A7D"}},'"Shinning"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"there is also a book with name "),e("span",{style:{color:"#C98A7D"}},'"Carrie"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I am logged in as an administrator")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"@ui")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Scenario"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Deleting a book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"I am browsing books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"When "),e("span",{style:{color:"#DBD7CA"}},"I delete book with name "),e("span",{style:{color:"#C98A7D"}},'"Shinning"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Then "),e("span",{style:{color:"#DBD7CA"}},"I should be notified that it has been successfully deleted")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"there should not be "),e("span",{style:{color:"#C98A7D"}},'"Shinning"'),e("span",{style:{color:"#DBD7CA"}}," book anymore")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"@managing_books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"Feature"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Deleting a book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"In "),e("span",{style:{color:"#393A34"}},"order to get rid of deprecated books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    As an Administrator")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    I want to be able to delete a book")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Background"),e("span",{style:{color:"#393A34"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"there is a book with name "),e("span",{style:{color:"#B56959"}},'"Shinning"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"there is also a book with name "),e("span",{style:{color:"#B56959"}},'"Carrie"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I am logged in as an administrator")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"@ui")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Scenario"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Deleting a book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"I am browsing books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"When "),e("span",{style:{color:"#393A34"}},"I delete book with name "),e("span",{style:{color:"#B56959"}},'"Shinning"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Then "),e("span",{style:{color:"#393A34"}},"I should be notified that it has been successfully deleted")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"there should not be "),e("span",{style:{color:"#B56959"}},'"Shinning"'),e("span",{style:{color:"#393A34"}}," book anymore")])])])],-1),L9={__name:"54",setup(n){const s={srcSequence:"./pages/07_deleting_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[O9,I(a,J({},{ranges:["14","15"]}),{default:x(()=>[N9]),_:1},16)]),_:1},16)}}},W9=V(L9,[["__file","/@slidev/slides/54.md"]]),R9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src tests/Behat/Context/Setup/BookContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"BookContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"When"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I save my changes'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iSaveMyChanges"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"updatePage"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"saveChanges"),e("span",{style:{color:"#858585"}},"();")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src tests/Behat/Context/Setup/BookContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"BookContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"When"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I save my changes'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iSaveMyChanges"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"updatePage"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"saveChanges"),e("span",{style:{color:"#8E8F8B"}},"();")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),q9={__name:"55",setup(n){const s={transition:"fade",srcSequence:"./pages/07_deleting_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[I(a,J({},{ranges:["7-11"]}),{default:x(()=>[R9]),_:1},16)]),_:1},16)}}},V9=V(q9,[["__file","/@slidev/slides/55.md"]]),U9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src tests/Behat/Context/Setup/BookContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"BookContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"When"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I save my changes'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iSaveMyChanges"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"updatePage"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"saveChanges"),e("span",{style:{color:"#858585"}},"();")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"When"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I delete book with name :name'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iDeleteBookWithName"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"indexPage"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"deleteResourceOnPage"),e("span",{style:{color:"#858585"}},"(["),e("span",{style:{color:"#C98A7D"}},"'name'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},"]);")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src tests/Behat/Context/Setup/BookContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"BookContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"When"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I save my changes'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iSaveMyChanges"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"updatePage"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"saveChanges"),e("span",{style:{color:"#8E8F8B"}},"();")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"When"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I delete book with name :name'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iDeleteBookWithName"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"indexPage"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"deleteResourceOnPage"),e("span",{style:{color:"#8E8F8B"}},"(["),e("span",{style:{color:"#B56959"}},"'name'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},"]);")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),j9={__name:"56",setup(n){const s={srcSequence:"./pages/07_deleting_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[I(a,J({},{ranges:["13-17","13","14","16"]}),{default:x(()=>[U9]),_:1},16)]),_:1},16)}}},H9=V(j9,[["__file","/@slidev/slides/56.md"]]),G9=e("h1",null,"Deleting books",-1),K9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"@managing_books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"Feature"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Deleting a book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"In "),e("span",{style:{color:"#DBD7CA"}},"order to get rid of deprecated books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    As an Administrator")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    I want to be able to delete a book")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Background"),e("span",{style:{color:"#DBD7CA"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"there is a book with name "),e("span",{style:{color:"#C98A7D"}},'"Shinning"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"there is also a book with name "),e("span",{style:{color:"#C98A7D"}},'"Carrie"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I am logged in as an administrator")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"@ui")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Scenario"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Deleting a book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"I am browsing books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"When "),e("span",{style:{color:"#DBD7CA"}},"I delete book with name "),e("span",{style:{color:"#C98A7D"}},'"Shinning"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Then "),e("span",{style:{color:"#DBD7CA"}},"I should be notified that it has been successfully deleted")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"there should not be "),e("span",{style:{color:"#C98A7D"}},'"Shinning"'),e("span",{style:{color:"#DBD7CA"}}," book anymore")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"@managing_books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"Feature"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Deleting a book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"In "),e("span",{style:{color:"#393A34"}},"order to get rid of deprecated books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    As an Administrator")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    I want to be able to delete a book")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Background"),e("span",{style:{color:"#393A34"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"there is a book with name "),e("span",{style:{color:"#B56959"}},'"Shinning"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"there is also a book with name "),e("span",{style:{color:"#B56959"}},'"Carrie"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I am logged in as an administrator")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"@ui")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Scenario"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Deleting a book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"I am browsing books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"When "),e("span",{style:{color:"#393A34"}},"I delete book with name "),e("span",{style:{color:"#B56959"}},'"Shinning"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Then "),e("span",{style:{color:"#393A34"}},"I should be notified that it has been successfully deleted")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"there should not be "),e("span",{style:{color:"#B56959"}},'"Shinning"'),e("span",{style:{color:"#393A34"}}," book anymore")])])])],-1),z9={__name:"57",setup(n){const s={srcSequence:"./pages/07_deleting_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[G9,I(a,J({},{ranges:["15","16","17"]}),{default:x(()=>[K9]),_:1},16)]),_:1},16)}}},Y9=V(z9,[["__file","/@slidev/slides/57.md"]]),Z9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src tests/Behat/Context/Setup/BookContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"BookContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"Then"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'the book :name should appear in the list'"),e("span",{style:{color:"#858585"}},")")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"Then"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'this book with name :name should appear in the list'"),e("span",{style:{color:"#858585"}},")")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#E0A569"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"theBookShouldAppearInTheList"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},": "),e("span",{style:{color:"#E0A569"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    {")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        $"),e("span",{style:{color:"#E0A569"}},"this"),e("span",{style:{color:"#DBD7CA"}},"->"),e("span",{style:{color:"#E0A569"}},"indexPage"),e("span",{style:{color:"#DBD7CA"}},"->"),e("span",{style:{color:"#E0A569"}},"open"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}},";")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#E0A569"}},"Assert"),e("span",{style:{color:"#DBD7CA"}},"::"),e("span",{style:{color:"#E0A569"}},"true"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"indexPage"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"isSingleResourceOnPage"),e("span",{style:{color:"#858585"}},"(["),e("span",{style:{color:"#C98A7D"}},"'name'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},"]))"),e("span",{style:{color:"#DBD7CA"}},";")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    }")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    // [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src tests/Behat/Context/Setup/BookContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"BookContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"Then"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'the book :name should appear in the list'"),e("span",{style:{color:"#8E8F8B"}},")")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"Then"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'this book with name :name should appear in the list'"),e("span",{style:{color:"#8E8F8B"}},")")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B58451"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"theBookShouldAppearInTheList"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},": "),e("span",{style:{color:"#B58451"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    {")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        $"),e("span",{style:{color:"#B58451"}},"this"),e("span",{style:{color:"#393A34"}},"->"),e("span",{style:{color:"#B58451"}},"indexPage"),e("span",{style:{color:"#393A34"}},"->"),e("span",{style:{color:"#B58451"}},"open"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}},";")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#B58451"}},"Assert"),e("span",{style:{color:"#393A34"}},"::"),e("span",{style:{color:"#B58451"}},"true"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"indexPage"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"isSingleResourceOnPage"),e("span",{style:{color:"#8E8F8B"}},"(["),e("span",{style:{color:"#B56959"}},"'name'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},"]))"),e("span",{style:{color:"#393A34"}},";")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    }")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    // [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Q9={__name:"58",setup(n){const s={transition:"fade",srcSequence:"./pages/07_deleting_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[I(a,J({},{ranges:["7-14"]}),{default:x(()=>[Z9]),_:1},16)]),_:1},16)}}},J9=V(Q9,[["__file","/@slidev/slides/58.md"]]),X9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src tests/Behat/Context/Setup/BookContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"BookContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"Then"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'the book :name should appear in the list'"),e("span",{style:{color:"#858585"}},")")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"Then"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'this book with name :name should appear in the list'"),e("span",{style:{color:"#858585"}},")")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#E0A569"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"theBookShouldAppearInTheList"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},": "),e("span",{style:{color:"#E0A569"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    {")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        $"),e("span",{style:{color:"#E0A569"}},"this"),e("span",{style:{color:"#DBD7CA"}},"->"),e("span",{style:{color:"#E0A569"}},"indexPage"),e("span",{style:{color:"#DBD7CA"}},"->"),e("span",{style:{color:"#E0A569"}},"open"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}},";")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#E0A569"}},"Assert"),e("span",{style:{color:"#DBD7CA"}},"::"),e("span",{style:{color:"#E0A569"}},"true"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"indexPage"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"isSingleResourceOnPage"),e("span",{style:{color:"#858585"}},"(["),e("span",{style:{color:"#C98A7D"}},"'name'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},"]))"),e("span",{style:{color:"#DBD7CA"}},";")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    }")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"Then"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'there should not be :name book anymore'"),e("span",{style:{color:"#858585"}},")")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#E0A569"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"thereShouldNotBeBookAnymore"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},": "),e("span",{style:{color:"#E0A569"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    {")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        $"),e("span",{style:{color:"#E0A569"}},"this"),e("span",{style:{color:"#DBD7CA"}},"->"),e("span",{style:{color:"#E0A569"}},"indexPage"),e("span",{style:{color:"#DBD7CA"}},"->"),e("span",{style:{color:"#E0A569"}},"open"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}},";")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#E0A569"}},"Assert"),e("span",{style:{color:"#DBD7CA"}},"::"),e("span",{style:{color:"#E0A569"}},"false"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"indexPage"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"isSingleResourceOnPage"),e("span",{style:{color:"#858585"}},"(["),e("span",{style:{color:"#C98A7D"}},"'name'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},"]))"),e("span",{style:{color:"#DBD7CA"}},";")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    }")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    // [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src tests/Behat/Context/Setup/BookContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"BookContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"Then"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'the book :name should appear in the list'"),e("span",{style:{color:"#8E8F8B"}},")")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"Then"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'this book with name :name should appear in the list'"),e("span",{style:{color:"#8E8F8B"}},")")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B58451"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"theBookShouldAppearInTheList"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},": "),e("span",{style:{color:"#B58451"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    {")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        $"),e("span",{style:{color:"#B58451"}},"this"),e("span",{style:{color:"#393A34"}},"->"),e("span",{style:{color:"#B58451"}},"indexPage"),e("span",{style:{color:"#393A34"}},"->"),e("span",{style:{color:"#B58451"}},"open"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}},";")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#B58451"}},"Assert"),e("span",{style:{color:"#393A34"}},"::"),e("span",{style:{color:"#B58451"}},"true"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"indexPage"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"isSingleResourceOnPage"),e("span",{style:{color:"#8E8F8B"}},"(["),e("span",{style:{color:"#B56959"}},"'name'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},"]))"),e("span",{style:{color:"#393A34"}},";")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    }")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"Then"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'there should not be :name book anymore'"),e("span",{style:{color:"#8E8F8B"}},")")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B58451"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"thereShouldNotBeBookAnymore"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},": "),e("span",{style:{color:"#B58451"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    {")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        $"),e("span",{style:{color:"#B58451"}},"this"),e("span",{style:{color:"#393A34"}},"->"),e("span",{style:{color:"#B58451"}},"indexPage"),e("span",{style:{color:"#393A34"}},"->"),e("span",{style:{color:"#B58451"}},"open"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}},";")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#B58451"}},"Assert"),e("span",{style:{color:"#393A34"}},"::"),e("span",{style:{color:"#B58451"}},"false"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"indexPage"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"isSingleResourceOnPage"),e("span",{style:{color:"#8E8F8B"}},"(["),e("span",{style:{color:"#B56959"}},"'name'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},"]))"),e("span",{style:{color:"#393A34"}},";")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    }")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    // [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),ev={__name:"59",setup(n){const s={srcSequence:"./pages/07_deleting_books.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[I(a,J({},{ranges:["16-22","16","17","19","21"]}),{default:x(()=>[X9]),_:1},16)]),_:1},16)}}},nv=V(ev,[["__file","/@slidev/slides/59.md"]]),sv=e("h1",null,"Books validation",-1),ov=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"@managing_books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"Feature"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Books validation")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"In "),e("span",{style:{color:"#DBD7CA"}},"order to avoid making mistakes when managing a book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    As a Project manager")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    I want to be prevented from adding or editing it without specifying required fields")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Background"),e("span",{style:{color:"#DBD7CA"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"I am logged in as an administrator")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"@ui")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Scenario"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Trying to add a new book without specifying its name")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"When "),e("span",{style:{color:"#DBD7CA"}},"I want to create a new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I do not specify any name")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I try to add it")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Then "),e("span",{style:{color:"#DBD7CA"}},"I should be notified that name is required")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"@managing_books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"Feature"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Books validation")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"In "),e("span",{style:{color:"#393A34"}},"order to avoid making mistakes when managing a book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    As a Project manager")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    I want to be prevented from adding or editing it without specifying required fields")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Background"),e("span",{style:{color:"#393A34"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"I am logged in as an administrator")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"@ui")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Scenario"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Trying to add a new book without specifying its name")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"When "),e("span",{style:{color:"#393A34"}},"I want to create a new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I do not specify any name")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I try to add it")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Then "),e("span",{style:{color:"#393A34"}},"I should be notified that name is required")])])])],-1),tv={__name:"60",setup(n){const s={srcSequence:"./pages/08_books_validation.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[sv,I(a,J({},{ranges:["all","3-5","7-8","11","12"]}),{default:x(()=>[ov]),_:1},16)]),_:1},16)}}},lv=V(tv,[["__file","/@slidev/slides/60.md"]]),av=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"Given"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I want to create a new book'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iWantToCreateANewBook"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"createPage"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"open"),e("span",{style:{color:"#858585"}},"();")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"Given"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I want to create a new book'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iWantToCreateANewBook"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"createPage"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"open"),e("span",{style:{color:"#8E8F8B"}},"();")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),rv={__name:"61",setup(n){const s={srcSequence:"./pages/08_books_validation.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[I(a,J({},{ranges:["all","7"]}),{default:x(()=>[av]),_:1},16)]),_:1},16)}}},iv=V(rv,[["__file","/@slidev/slides/61.md"]]),cv=e("h1",null,"Books validation",-1),pv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"@managing_books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"Feature"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Books validation")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"In "),e("span",{style:{color:"#DBD7CA"}},"order to avoid making mistakes when managing a book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    As a Project manager")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    I want to be prevented from adding or editing it without specifying required fields")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Background"),e("span",{style:{color:"#DBD7CA"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"I am logged in as an administrator")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"@ui")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Scenario"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Trying to add a new book without specifying its name")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"When "),e("span",{style:{color:"#DBD7CA"}},"I want to create a new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I do not specify any name")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I try to add it")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Then "),e("span",{style:{color:"#DBD7CA"}},"I should be notified that name is required")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"@managing_books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"Feature"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Books validation")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"In "),e("span",{style:{color:"#393A34"}},"order to avoid making mistakes when managing a book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    As a Project manager")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    I want to be prevented from adding or editing it without specifying required fields")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Background"),e("span",{style:{color:"#393A34"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"I am logged in as an administrator")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"@ui")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Scenario"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Trying to add a new book without specifying its name")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"When "),e("span",{style:{color:"#393A34"}},"I want to create a new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I do not specify any name")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I try to add it")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Then "),e("span",{style:{color:"#393A34"}},"I should be notified that name is required")])])])],-1),dv={__name:"62",setup(n){const s={srcSequence:"./pages/08_books_validation.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[cv,I(a,J({},{ranges:["12","13"]}),{default:x(()=>[pv]),_:1},16)]),_:1},16)}}},uv=V(dv,[["__file","/@slidev/slides/62.md"]]),yv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"When"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I specify its name as :name'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"When"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I do not specify any name'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iSpecifyItsNameAs"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"createPage"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"nameIt"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},");")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"When"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I specify its name as :name'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"When"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I do not specify any name'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iSpecifyItsNameAs"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"createPage"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"nameIt"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},");")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),hv={__name:"63",setup(n){const s={transition:"fade",srcSequence:"./pages/08_books_validation.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[I(a,J({},{ranges:["7","8","9"]}),{default:x(()=>[yv]),_:1},16)]),_:1},16)}}},fv=V(hv,[["__file","/@slidev/slides/63.md"]]),mv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"When"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I specify its name as :name'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"When"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I do not specify any name'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iSpecifyItsNameAs"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"?"),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"createPage"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"nameIt"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},");")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"When"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I specify its name as :name'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"When"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I do not specify any name'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iSpecifyItsNameAs"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"?"),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"createPage"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"nameIt"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},");")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),gv={__name:"64",setup(n){const s={transition:"fade",srcSequence:"./pages/08_books_validation.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[I(a,J({},{ranges:["9","11"]}),{default:x(()=>[mv]),_:1},16)]),_:1},16)}}},Bv=V(gv,[["__file","/@slidev/slides/64.md"]]),Av=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"When"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I specify its name as :name'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"When"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I do not specify any name'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iSpecifyItsNameAs"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"?"),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"createPage"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"nameIt"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"??"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"''"),e("span",{style:{color:"#858585"}},");")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"When"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I specify its name as :name'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"When"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I do not specify any name'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iSpecifyItsNameAs"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"?"),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"createPage"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"nameIt"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"??"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"''"),e("span",{style:{color:"#8E8F8B"}},");")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Cv={__name:"65",setup(n){const s={srcSequence:"./pages/08_books_validation.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[I(a,J({},{ranges:["11"]}),{default:x(()=>[Av]),_:1},16)]),_:1},16)}}},bv=V(Cv,[["__file","/@slidev/slides/65.md"]]),kv=e("h1",null,"Books validation",-1),_v=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"@managing_books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"Feature"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Books validation")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"In "),e("span",{style:{color:"#DBD7CA"}},"order to avoid making mistakes when managing a book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    As a Project manager")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    I want to be prevented from adding or editing it without specifying required fields")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Background"),e("span",{style:{color:"#DBD7CA"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"I am logged in as an administrator")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"@ui")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Scenario"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Trying to add a new book without specifying its name")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"When "),e("span",{style:{color:"#DBD7CA"}},"I want to create a new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I do not specify any name")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I try to add it")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Then "),e("span",{style:{color:"#DBD7CA"}},"I should be notified that name is required")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"@managing_books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"Feature"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Books validation")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"In "),e("span",{style:{color:"#393A34"}},"order to avoid making mistakes when managing a book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    As a Project manager")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    I want to be prevented from adding or editing it without specifying required fields")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Background"),e("span",{style:{color:"#393A34"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"I am logged in as an administrator")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"@ui")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Scenario"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Trying to add a new book without specifying its name")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"When "),e("span",{style:{color:"#393A34"}},"I want to create a new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I do not specify any name")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I try to add it")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Then "),e("span",{style:{color:"#393A34"}},"I should be notified that name is required")])])])],-1),Dv={__name:"66",setup(n){const s={srcSequence:"./pages/08_books_validation.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[kv,I(a,J({},{ranges:["13","14"]}),{default:x(()=>[_v]),_:1},16)]),_:1},16)}}},vv=V(Dv,[["__file","/@slidev/slides/66.md"]]),xv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"When"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I add it'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iAddIt"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"createPage"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"create"),e("span",{style:{color:"#858585"}},"();")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"When"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I add it'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iAddIt"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"createPage"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"create"),e("span",{style:{color:"#8E8F8B"}},"();")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),wv={__name:"67",setup(n){const s={transition:"fade",srcSequence:"./pages/08_books_validation.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[I(a,J({},{ranges:["7"]}),{default:x(()=>[xv]),_:1},16)]),_:1},16)}}},Ev=V(wv,[["__file","/@slidev/slides/67.md"]]),Iv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"When"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I (try to) add it'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iAddIt"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"createPage"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"create"),e("span",{style:{color:"#858585"}},"();")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"When"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I (try to) add it'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iAddIt"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"createPage"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"create"),e("span",{style:{color:"#8E8F8B"}},"();")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),$v={__name:"68",setup(n){const s={srcSequence:"./pages/08_books_validation.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[I(a,J({},{ranges:["7"]}),{default:x(()=>[Iv]),_:1},16)]),_:1},16)}}},Sv=V($v,[["__file","/@slidev/slides/68.md"]]),Fv=e("h1",null,"Books validation",-1),Pv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"@managing_books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"Feature"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Books validation")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"In "),e("span",{style:{color:"#DBD7CA"}},"order to avoid making mistakes when managing a book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    As a Project manager")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    I want to be prevented from adding or editing it without specifying required fields")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Background"),e("span",{style:{color:"#DBD7CA"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"I am logged in as an administrator")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"@ui")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Scenario"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Trying to add a new book without specifying its name")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"When "),e("span",{style:{color:"#DBD7CA"}},"I want to create a new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I do not specify any name")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I try to add it")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Then "),e("span",{style:{color:"#DBD7CA"}},"I should be notified that name is required")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"@managing_books")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"Feature"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Books validation")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"In "),e("span",{style:{color:"#393A34"}},"order to avoid making mistakes when managing a book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    As a Project manager")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    I want to be prevented from adding or editing it without specifying required fields")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Background"),e("span",{style:{color:"#393A34"}},":")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"I am logged in as an administrator")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"@ui")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Scenario"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Trying to add a new book without specifying its name")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"When "),e("span",{style:{color:"#393A34"}},"I want to create a new book")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I do not specify any name")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I try to add it")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Then "),e("span",{style:{color:"#393A34"}},"I should be notified that name is required")])])])],-1),Tv={__name:"69",setup(n){const s={srcSequence:"./pages/08_books_validation.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[Fv,I(a,J({},{ranges:["14","15"]}),{default:x(()=>[Pv]),_:1},16)]),_:1},16)}}},Mv=V(Tv,[["__file","/@slidev/slides/69.md"]]),Ov=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"Then"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I should be notified that :element is required'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"] ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iShouldBeNotifiedThatElementIsRequired"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"element"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#E0A569"}},"Assert"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"eq"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"createPage"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"getValidationMessage"),e("span",{style:{color:"#858585"}},"(")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#E0A569"}},"StringInflector"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"nameToCode"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"element"),e("span",{style:{color:"#858585"}},")),"),e("span",{style:{color:"#DBD7CA"}}," ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#C98A7D"}},"'This value should not be blank.'"),e("span",{style:{color:"#858585"}},",")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},");")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"Then"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I should be notified that :element is required'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"] ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iShouldBeNotifiedThatElementIsRequired"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"element"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#B58451"}},"Assert"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"eq"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"createPage"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"getValidationMessage"),e("span",{style:{color:"#8E8F8B"}},"(")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#B58451"}},"StringInflector"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"nameToCode"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"element"),e("span",{style:{color:"#8E8F8B"}},")),"),e("span",{style:{color:"#393A34"}}," ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#B56959"}},"'This value should not be blank.'"),e("span",{style:{color:"#8E8F8B"}},",")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},");")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Nv={__name:"70",setup(n){const s={srcSequence:"./pages/08_books_validation.md"};return T(q),(o,l)=>{const a=se;return k(),L(oe,ne(ee(s)),{default:x(()=>[I(a,J({},{ranges:["all","7","8","10","11","12"]}),{default:x(()=>[Ov]),_:1},16)]),_:1},16)}}},Lv=V(Nv,[["__file","/@slidev/slides/70.md"]]),Wv=[{path:"1",name:"page-1",component:o7,meta:{theme:"seriph",background:!1,class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},transition:"slide-left",colorSchema:"light",css:"unocss",title:"Behat Formation",slide:{raw:`---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: false
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
# page transition
transition: slide-left
colorSchema: light
# use UnoCSS
css: unocss
---

# Behat Formation

avec Sylius & Monofony

<div align="center">
<img class="w-75" align="center" src="https://sylius.com/wp-content/uploads/2021/03/sylius-logo_sylius-logo-light-1024x422.jpg">
</div>

<div align="center">
<img class="w-75" src="https://raw.githubusercontent.com/Monofony/Monofony/0.x/docs/_images/doc_logo.png">
</div>
`,title:"Behat Formation",level:1,content:`# Behat Formation

avec Sylius & Monofony

<div align="center">
<img class="w-75" align="center" src="https://sylius.com/wp-content/uploads/2021/03/sylius-logo_sylius-logo-light-1024x422.jpg">
</div>

<div align="center">
<img class="w-75" src="https://raw.githubusercontent.com/Monofony/Monofony/0.x/docs/_images/doc_logo.png">
</div>`,frontmatter:{theme:"seriph",background:!1,class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},transition:"slide-left",colorSchema:"light",css:"unocss",title:"Behat Formation"},index:0,start:0,end:40,noteHTML:"",filepath:"/home/runner/work/behat-formation/behat-formation/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:_7,meta:{title:"Features",srcSequence:"./pages/01_features.md",slide:{raw:null,title:"Features",level:1,content:`# Features

<v-clicks>

Les features contiennent des scénarii qui décrivent les fonctionnalités de l'application.

Exemple 1 : Browsing books

\`\`\`gherkin {all|1,12|2-5|7-10|12-16}
@managing_books
Feature: Browsing books
    In order to see all books in the admin panel
    As an Administrator
    I want to browse books

    Background:
        Given there is a book with name "Shinning"
        And there is also an book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Browsing books in the admin panel
        When I want to browse books
        Then there should be 2 books in the list
        And I should see the book "Shinning" in the list
\`\`\`

</v-clicks>`,frontmatter:{title:"Features",srcSequence:"./pages/01_features.md"},index:1,start:0,end:29,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/01_features.md",raw:`# Features

<v-clicks>

Les features contiennent des scénarii qui décrivent les fonctionnalités de l'application.

Exemple 1 : Browsing books

\`\`\`gherkin {all|1,12|2-5|7-10|12-16}
@managing_books
Feature: Browsing books
    In order to see all books in the admin panel
    As an Administrator
    I want to browse books

    Background:
        Given there is a book with name "Shinning"
        And there is also an book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Browsing books in the admin panel
        When I want to browse books
        Then there should be 2 books in the list
        And I should see the book "Shinning" in the list
\`\`\`

</v-clicks>
`,title:"Features",level:1,content:`# Features

<v-clicks>

Les features contiennent des scénarii qui décrivent les fonctionnalités de l'application.

Exemple 1 : Browsing books

\`\`\`gherkin {all|1,12|2-5|7-10|12-16}
@managing_books
Feature: Browsing books
    In order to see all books in the admin panel
    As an Administrator
    I want to browse books

    Background:
        Given there is a book with name "Shinning"
        And there is also an book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Browsing books in the admin panel
        When I want to browse books
        Then there should be 2 books in the list
        And I should see the book "Shinning" in the list
\`\`\`

</v-clicks>`,frontmatter:{title:"Features"},index:0,start:0,end:29},inline:{raw:`---
src: ./pages/01_features.md
---
`,content:"",frontmatter:{},index:1,start:40,end:44},filepath:"/home/runner/work/behat-formation/behat-formation/pages/01_features.md",noteHTML:"",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:I7,meta:{srcSequence:"./pages/01_features.md",slide:{raw:`
# Features

Les features contiennent des scénarii qui décrivent les fonctionnalités de l'application.

Exemple 2 : Adding books

\`\`\`gherkin {all|1,10|2-5|7-8|10-16}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list
\`\`\`
`,title:"Features",level:1,content:`# Features

Les features contiennent des scénarii qui décrivent les fonctionnalités de l'application.

Exemple 2 : Adding books

\`\`\`gherkin {all|1,10|2-5|7-8|10-16}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list
\`\`\``,frontmatter:{srcSequence:"./pages/01_features.md"},index:2,start:30,end:56,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/01_features.md",raw:`
# Features

Les features contiennent des scénarii qui décrivent les fonctionnalités de l'application.

Exemple 2 : Adding books

\`\`\`gherkin {all|1,10|2-5|7-8|10-16}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list
\`\`\`
`,title:"Features",level:1,content:`# Features

Les features contiennent des scénarii qui décrivent les fonctionnalités de l'application.

Exemple 2 : Adding books

\`\`\`gherkin {all|1,10|2-5|7-8|10-16}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list
\`\`\``,frontmatter:{},index:1,start:30,end:56},filepath:"/home/runner/work/behat-formation/behat-formation/pages/01_features.md",noteHTML:"",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:O7,meta:{title:"Suites",srcSequence:"./pages/02_suites.md",slide:{raw:null,title:"Suites",level:1,content:`# Suites

<v-clicks>

Les suites définissent un ensemble de scénarios à lancer.
Ils définissent les contextes associés et se basent sur les tags.

Sur nos exemples précédents, nous avons le tag "@managing_books" ainsi que le tag "@ui".

Nous pouvons ainsi créer une suite \`ui_managing_books\` qui est utilisée pour ces deux tags:

\`\`\`yaml {all|3|4|5|7-8|10|12-13|15}
default:
    suites:
        ui_managing_books:
            contexts:
                - App\\Tests\\Behat\\Context\\Hook\\DoctrineORMContext

                - App\\Tests\\Behat\\Context\\Setup\\AdminSecurityContext
                - App\\Tests\\Behat\\Context\\Setup\\BookContext

                - App\\Tests\\Behat\\Context\\Transform\\SharedStorageContext

                - App\\Tests\\Behat\\Context\\Ui\\Backend\\ManagingBooksContext
                - App\\Tests\\Behat\\Context\\Ui\\Backend\\NotificationContext
            filters:
                tags: "@managing_books&&@ui"
\`\`\`

</v-clicks>`,frontmatter:{title:"Suites",srcSequence:"./pages/02_suites.md"},index:3,start:0,end:31,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/02_suites.md",raw:`# Suites

<v-clicks>

Les suites définissent un ensemble de scénarios à lancer.
Ils définissent les contextes associés et se basent sur les tags.

Sur nos exemples précédents, nous avons le tag "@managing_books" ainsi que le tag "@ui".

Nous pouvons ainsi créer une suite \`ui_managing_books\` qui est utilisée pour ces deux tags:

\`\`\`yaml {all|3|4|5|7-8|10|12-13|15}
default:
    suites:
        ui_managing_books:
            contexts:
                - App\\Tests\\Behat\\Context\\Hook\\DoctrineORMContext

                - App\\Tests\\Behat\\Context\\Setup\\AdminSecurityContext
                - App\\Tests\\Behat\\Context\\Setup\\BookContext

                - App\\Tests\\Behat\\Context\\Transform\\SharedStorageContext

                - App\\Tests\\Behat\\Context\\Ui\\Backend\\ManagingBooksContext
                - App\\Tests\\Behat\\Context\\Ui\\Backend\\NotificationContext
            filters:
                tags: "@managing_books&&@ui"
\`\`\`

</v-clicks>
`,title:"Suites",level:1,content:`# Suites

<v-clicks>

Les suites définissent un ensemble de scénarios à lancer.
Ils définissent les contextes associés et se basent sur les tags.

Sur nos exemples précédents, nous avons le tag "@managing_books" ainsi que le tag "@ui".

Nous pouvons ainsi créer une suite \`ui_managing_books\` qui est utilisée pour ces deux tags:

\`\`\`yaml {all|3|4|5|7-8|10|12-13|15}
default:
    suites:
        ui_managing_books:
            contexts:
                - App\\Tests\\Behat\\Context\\Hook\\DoctrineORMContext

                - App\\Tests\\Behat\\Context\\Setup\\AdminSecurityContext
                - App\\Tests\\Behat\\Context\\Setup\\BookContext

                - App\\Tests\\Behat\\Context\\Transform\\SharedStorageContext

                - App\\Tests\\Behat\\Context\\Ui\\Backend\\ManagingBooksContext
                - App\\Tests\\Behat\\Context\\Ui\\Backend\\NotificationContext
            filters:
                tags: "@managing_books&&@ui"
\`\`\`

</v-clicks>`,frontmatter:{title:"Suites"},index:0,start:0,end:31},inline:{raw:`---
src: ./pages/02_suites.md
---
`,content:"",frontmatter:{},index:2,start:44,end:48},filepath:"/home/runner/work/behat-formation/behat-formation/pages/02_suites.md",noteHTML:"",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:q7,meta:{title:"Contexts",srcSequence:"./pages/03_contexts.md",slide:{raw:null,title:"Contexts",level:1,content:`# Contexts

<v-clicks>

Un contexte Behat est ce qui va permettre de convertir les phrases Gherkin en tests.

\`\`\`php
<?php

declare(strict_types=1);

namespace App\\Tests\\Behat\\Context\\Ui\\Backend;

use Behat\\Behat\\Context\\Context;

final class ManagingBooksContext implements Context
{
    /**
     * @When I want to browse books
     */
    public function iWantToBrowseBooks(): void
    {
        // [...]
    }
\`\`\`

</v-clicks>`,frontmatter:{title:"Contexts",srcSequence:"./pages/03_contexts.md"},index:4,start:0,end:28,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/03_contexts.md",raw:`# Contexts

<v-clicks>

Un contexte Behat est ce qui va permettre de convertir les phrases Gherkin en tests.

\`\`\`php
<?php

declare(strict_types=1);

namespace App\\Tests\\Behat\\Context\\Ui\\Backend;

use Behat\\Behat\\Context\\Context;

final class ManagingBooksContext implements Context
{
    /**
     * @When I want to browse books
     */
    public function iWantToBrowseBooks(): void
    {
        // [...]
    }
\`\`\`

</v-clicks>
`,title:"Contexts",level:1,content:`# Contexts

<v-clicks>

Un contexte Behat est ce qui va permettre de convertir les phrases Gherkin en tests.

\`\`\`php
<?php

declare(strict_types=1);

namespace App\\Tests\\Behat\\Context\\Ui\\Backend;

use Behat\\Behat\\Context\\Context;

final class ManagingBooksContext implements Context
{
    /**
     * @When I want to browse books
     */
    public function iWantToBrowseBooks(): void
    {
        // [...]
    }
\`\`\`

</v-clicks>`,frontmatter:{title:"Contexts"},index:0,start:0,end:28},inline:{raw:`---
src: ./pages/03_contexts.md
---
`,content:"",frontmatter:{},index:3,start:48,end:52},filepath:"/home/runner/work/behat-formation/behat-formation/pages/03_contexts.md",noteHTML:"",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:K7,meta:{srcSequence:"./pages/03_contexts.md",slide:{raw:`
# Quelques règles

<v-clicks>

* Le contexte Behat doit implémenter l'interface \`Behat\\Behat\\Context\\Context\`.
* Ce contexte doit être présent dans la suite \`ui_managing_books\` vu précédement.

On peut également utiliser les attributes PHP 8:

\`\`\`php {all|10|7,10|12}
<?php

declare(strict_types=1);

namespace App\\Tests\\Behat\\Context\\Ui\\Backend;

use Behat\\Behat\\Context\\Context;
use Behat\\Step\\When;

final class ManagingBooksContext implements Context
{
    #[When('I want to browse books')]
    public function iWantToBrowseBooks(): void
    {
        // [...]
    }
\`\`\`

</v-clicks>
`,title:"Quelques règles",level:1,content:`# Quelques règles

<v-clicks>

* Le contexte Behat doit implémenter l'interface \`Behat\\Behat\\Context\\Context\`.
* Ce contexte doit être présent dans la suite \`ui_managing_books\` vu précédement.

On peut également utiliser les attributes PHP 8:

\`\`\`php {all|10|7,10|12}
<?php

declare(strict_types=1);

namespace App\\Tests\\Behat\\Context\\Ui\\Backend;

use Behat\\Behat\\Context\\Context;
use Behat\\Step\\When;

final class ManagingBooksContext implements Context
{
    #[When('I want to browse books')]
    public function iWantToBrowseBooks(): void
    {
        // [...]
    }
\`\`\`

</v-clicks>`,frontmatter:{srcSequence:"./pages/03_contexts.md"},index:5,start:29,end:60,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/03_contexts.md",raw:`
# Quelques règles

<v-clicks>

* Le contexte Behat doit implémenter l'interface \`Behat\\Behat\\Context\\Context\`.
* Ce contexte doit être présent dans la suite \`ui_managing_books\` vu précédement.

On peut également utiliser les attributes PHP 8:

\`\`\`php {all|10|7,10|12}
<?php

declare(strict_types=1);

namespace App\\Tests\\Behat\\Context\\Ui\\Backend;

use Behat\\Behat\\Context\\Context;
use Behat\\Step\\When;

final class ManagingBooksContext implements Context
{
    #[When('I want to browse books')]
    public function iWantToBrowseBooks(): void
    {
        // [...]
    }
\`\`\`

</v-clicks>
`,title:"Quelques règles",level:1,content:`# Quelques règles

<v-clicks>

* Le contexte Behat doit implémenter l'interface \`Behat\\Behat\\Context\\Context\`.
* Ce contexte doit être présent dans la suite \`ui_managing_books\` vu précédement.

On peut également utiliser les attributes PHP 8:

\`\`\`php {all|10|7,10|12}
<?php

declare(strict_types=1);

namespace App\\Tests\\Behat\\Context\\Ui\\Backend;

use Behat\\Behat\\Context\\Context;
use Behat\\Step\\When;

final class ManagingBooksContext implements Context
{
    #[When('I want to browse books')]
    public function iWantToBrowseBooks(): void
    {
        // [...]
    }
\`\`\`

</v-clicks>`,frontmatter:{},index:1,start:29,end:60},filepath:"/home/runner/work/behat-formation/behat-formation/pages/03_contexts.md",noteHTML:"",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:Q7,meta:{title:"Browsing books",srcSequence:"./pages/04_browsing_books.md",slide:{raw:null,title:"Browsing books",level:1,content:`# Browsing books

\`\`\`gherkin {all|8-9}
@managing_books
Feature: Browsing books
    In order to see all books in the admin panel
    As an Administrator
    I want to browse books

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Browsing books in the admin panel
        When I want to browse books
        Then there should be 2 books in the list
        And I should see the book "Shinning" in the list
\`\`\``,frontmatter:{title:"Browsing books",srcSequence:"./pages/04_browsing_books.md"},index:6,start:0,end:21,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/04_browsing_books.md",raw:`# Browsing books

\`\`\`gherkin {all|8-9}
@managing_books
Feature: Browsing books
    In order to see all books in the admin panel
    As an Administrator
    I want to browse books

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Browsing books in the admin panel
        When I want to browse books
        Then there should be 2 books in the list
        And I should see the book "Shinning" in the list
\`\`\`
`,title:"Browsing books",level:1,content:`# Browsing books

\`\`\`gherkin {all|8-9}
@managing_books
Feature: Browsing books
    In order to see all books in the admin panel
    As an Administrator
    I want to browse books

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Browsing books in the admin panel
        When I want to browse books
        Then there should be 2 books in the list
        And I should see the book "Shinning" in the list
\`\`\``,frontmatter:{title:"Browsing books"},index:0,start:0,end:21},inline:{raw:`---
src: ./pages/04_browsing_books.md
---
`,content:"",frontmatter:{},index:4,start:52,end:56},filepath:"/home/runner/work/behat-formation/behat-formation/pages/04_browsing_books.md",noteHTML:"",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:e1,meta:{srcSequence:"./pages/04_browsing_books.md",slide:{raw:`
\`\`\`php {all|3|6|10|11|13|14|16-17}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    public function __construct(
        private EntityManagerInterface $entityManager,
    ) {
    }

    #[Given('there is (also) a book with name :name']
    public function thereIsABookWithName(string $name): void
    {
        $book = new Book();
        $book->setName($name);

        $this->entityManager->persist($book);
        $this->entityManager->flush();
    }
}

\`\`\`
`,content:`\`\`\`php {all|3|6|10|11|13|14|16-17}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    public function __construct(
        private EntityManagerInterface $entityManager,
    ) {
    }

    #[Given('there is (also) a book with name :name']
    public function thereIsABookWithName(string $name): void
    {
        $book = new Book();
        $book->setName($name);

        $this->entityManager->persist($book);
        $this->entityManager->flush();
    }
}

\`\`\``,frontmatter:{srcSequence:"./pages/04_browsing_books.md"},index:7,start:22,end:46,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/04_browsing_books.md",raw:`
\`\`\`php {all|3|6|10|11|13|14|16-17}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    public function __construct(
        private EntityManagerInterface $entityManager,
    ) {
    }

    #[Given('there is (also) a book with name :name']
    public function thereIsABookWithName(string $name): void
    {
        $book = new Book();
        $book->setName($name);

        $this->entityManager->persist($book);
        $this->entityManager->flush();
    }
}

\`\`\`
`,content:`\`\`\`php {all|3|6|10|11|13|14|16-17}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    public function __construct(
        private EntityManagerInterface $entityManager,
    ) {
    }

    #[Given('there is (also) a book with name :name']
    public function thereIsABookWithName(string $name): void
    {
        $book = new Book();
        $book->setName($name);

        $this->entityManager->persist($book);
        $this->entityManager->flush();
    }
}

\`\`\``,frontmatter:{},index:1,start:22,end:46},filepath:"/home/runner/work/behat-formation/behat-formation/pages/04_browsing_books.md",noteHTML:"",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:o1,meta:{srcSequence:"./pages/04_browsing_books.md",slide:{raw:`
\`\`\`gherkin {8-9|14}
@managing_books
Feature: Browsing books
    In order to see all books in the admin panel
    As an Administrator
    I want to browse books

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Browsing books in the admin panel
        When I want to browse books
        Then there should be 2 books in the list
        And I should see the book "Shinning" in the list
\`\`\`
`,content:`\`\`\`gherkin {8-9|14}
@managing_books
Feature: Browsing books
    In order to see all books in the admin panel
    As an Administrator
    I want to browse books

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Browsing books in the admin panel
        When I want to browse books
        Then there should be 2 books in the list
        And I should see the book "Shinning" in the list
\`\`\``,frontmatter:{srcSequence:"./pages/04_browsing_books.md"},index:8,start:47,end:67,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/04_browsing_books.md",raw:`
\`\`\`gherkin {8-9|14}
@managing_books
Feature: Browsing books
    In order to see all books in the admin panel
    As an Administrator
    I want to browse books

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Browsing books in the admin panel
        When I want to browse books
        Then there should be 2 books in the list
        And I should see the book "Shinning" in the list
\`\`\`
`,content:`\`\`\`gherkin {8-9|14}
@managing_books
Feature: Browsing books
    In order to see all books in the admin panel
    As an Administrator
    I want to browse books

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Browsing books in the admin panel
        When I want to browse books
        Then there should be 2 books in the list
        And I should see the book "Shinning" in the list
\`\`\``,frontmatter:{},index:2,start:47,end:67},filepath:"/home/runner/work/behat-formation/behat-formation/pages/04_browsing_books.md",noteHTML:"",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:r1,meta:{srcSequence:"./pages/04_browsing_books.md",slide:{raw:`
# Contexte de la gestion de books

\`\`\`php {all|6|10|13}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    public function __construct(
        private IndexPage $indexPage,
    ) {
    }

    #[When('I want to browse books')]
    public function iWantToBrowseBooks(): void
    {
        $this->indexPage->open();
    }
\`\`\`
`,title:"Contexte de la gestion de books",level:1,content:`# Contexte de la gestion de books

\`\`\`php {all|6|10|13}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    public function __construct(
        private IndexPage $indexPage,
    ) {
    }

    #[When('I want to browse books')]
    public function iWantToBrowseBooks(): void
    {
        $this->indexPage->open();
    }
\`\`\``,frontmatter:{srcSequence:"./pages/04_browsing_books.md"},index:9,start:68,end:88,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/04_browsing_books.md",raw:`
# Contexte de la gestion de books

\`\`\`php {all|6|10|13}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    public function __construct(
        private IndexPage $indexPage,
    ) {
    }

    #[When('I want to browse books')]
    public function iWantToBrowseBooks(): void
    {
        $this->indexPage->open();
    }
\`\`\`
`,title:"Contexte de la gestion de books",level:1,content:`# Contexte de la gestion de books

\`\`\`php {all|6|10|13}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    public function __construct(
        private IndexPage $indexPage,
    ) {
    }

    #[When('I want to browse books')]
    public function iWantToBrowseBooks(): void
    {
        $this->indexPage->open();
    }
\`\`\``,frontmatter:{},index:3,start:68,end:88},filepath:"/home/runner/work/behat-formation/behat-formation/pages/04_browsing_books.md",noteHTML:"",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:d1,meta:{srcSequence:"./pages/04_browsing_books.md",slide:{raw:`
# Page d'index des books

\`\`\`php {all|7|5,7|9|11}
// tests/Behat/Page/Backend/Book/Index.php

namespace App\\Tests\\Behat\\Page\\Backend\\Book;

use Monofony\\Bridge\\Behat\\Crud\\AbstractIndexPage;

final class IndexPage extends AbstractIndexPage
{
    public function getRouteName(): string
    {
        return 'app_backend_book_index';
    }
}

\`\`\`
`,title:"Page d'index des books",level:1,content:`# Page d'index des books

\`\`\`php {all|7|5,7|9|11}
// tests/Behat/Page/Backend/Book/Index.php

namespace App\\Tests\\Behat\\Page\\Backend\\Book;

use Monofony\\Bridge\\Behat\\Crud\\AbstractIndexPage;

final class IndexPage extends AbstractIndexPage
{
    public function getRouteName(): string
    {
        return 'app_backend_book_index';
    }
}

\`\`\``,frontmatter:{srcSequence:"./pages/04_browsing_books.md"},index:10,start:89,end:109,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/04_browsing_books.md",raw:`
# Page d'index des books

\`\`\`php {all|7|5,7|9|11}
// tests/Behat/Page/Backend/Book/Index.php

namespace App\\Tests\\Behat\\Page\\Backend\\Book;

use Monofony\\Bridge\\Behat\\Crud\\AbstractIndexPage;

final class IndexPage extends AbstractIndexPage
{
    public function getRouteName(): string
    {
        return 'app_backend_book_index';
    }
}

\`\`\`
`,title:"Page d'index des books",level:1,content:`# Page d'index des books

\`\`\`php {all|7|5,7|9|11}
// tests/Behat/Page/Backend/Book/Index.php

namespace App\\Tests\\Behat\\Page\\Backend\\Book;

use Monofony\\Bridge\\Behat\\Crud\\AbstractIndexPage;

final class IndexPage extends AbstractIndexPage
{
    public function getRouteName(): string
    {
        return 'app_backend_book_index';
    }
}

\`\`\``,frontmatter:{},index:4,start:89,end:109},filepath:"/home/runner/work/behat-formation/behat-formation/pages/04_browsing_books.md",noteHTML:"",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:h1,meta:{srcSequence:"./pages/04_browsing_books.md",slide:{raw:`
\`\`\`gherkin {14|15}
@managing_books
Feature: Browsing books
    In order to see all books in the admin panel
    As an Administrator
    I want to browse books

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Browsing books in the admin panel
        When I want to browse books
        Then there should be 2 books in the list
        And I should see the book "Shinning" in the list
\`\`\`
`,content:`\`\`\`gherkin {14|15}
@managing_books
Feature: Browsing books
    In order to see all books in the admin panel
    As an Administrator
    I want to browse books

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Browsing books in the admin panel
        When I want to browse books
        Then there should be 2 books in the list
        And I should see the book "Shinning" in the list
\`\`\``,frontmatter:{srcSequence:"./pages/04_browsing_books.md"},index:11,start:110,end:130,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/04_browsing_books.md",raw:`
\`\`\`gherkin {14|15}
@managing_books
Feature: Browsing books
    In order to see all books in the admin panel
    As an Administrator
    I want to browse books

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Browsing books in the admin panel
        When I want to browse books
        Then there should be 2 books in the list
        And I should see the book "Shinning" in the list
\`\`\`
`,content:`\`\`\`gherkin {14|15}
@managing_books
Feature: Browsing books
    In order to see all books in the admin panel
    As an Administrator
    I want to browse books

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Browsing books in the admin panel
        When I want to browse books
        Then there should be 2 books in the list
        And I should see the book "Shinning" in the list
\`\`\``,frontmatter:{},index:5,start:110,end:130},filepath:"/home/runner/work/behat-formation/behat-formation/pages/04_browsing_books.md",noteHTML:"",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:g1,meta:{transition:"fade",srcSequence:"./pages/04_browsing_books.md",slide:{raw:`---
transition: fade
---

\`\`\`php {10}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I want to browse books')]
    public function iWantToBrowseBooks(): void
    {
        $this->indexPage->open();
    }
\`\`\`
`,content:`\`\`\`php {10}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I want to browse books')]
    public function iWantToBrowseBooks(): void
    {
        $this->indexPage->open();
    }
\`\`\``,frontmatter:{transition:"fade",srcSequence:"./pages/04_browsing_books.md"},index:12,start:130,end:148,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/04_browsing_books.md",raw:`---
transition: fade
---

\`\`\`php {10}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I want to browse books')]
    public function iWantToBrowseBooks(): void
    {
        $this->indexPage->open();
    }
\`\`\`
`,content:`\`\`\`php {10}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I want to browse books')]
    public function iWantToBrowseBooks(): void
    {
        $this->indexPage->open();
    }
\`\`\``,frontmatter:{transition:"fade"},index:6,start:130,end:148},filepath:"/home/runner/work/behat-formation/behat-formation/pages/04_browsing_books.md",noteHTML:"",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:C1,meta:{srcSequence:"./pages/04_browsing_books.md",slide:{raw:`
\`\`\`php {13-19|13|14|16}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    / [...]

    #[When('I want to browse books')]
    public function iWantToBrowseBooks(): void
    {
        $this->indexPage->open();
    }

    #[Then('there should be :amount books in the list')]
    public function thereShouldBeBooksInTheList(int $amount): void
    {
        Assert::eq($this->indexPage->countItems(), $amount);
    }
}    
\`\`\`
`,content:`\`\`\`php {13-19|13|14|16}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    / [...]

    #[When('I want to browse books')]
    public function iWantToBrowseBooks(): void
    {
        $this->indexPage->open();
    }

    #[Then('there should be :amount books in the list')]
    public function thereShouldBeBooksInTheList(int $amount): void
    {
        Assert::eq($this->indexPage->countItems(), $amount);
    }
}    
\`\`\``,frontmatter:{srcSequence:"./pages/04_browsing_books.md"},index:13,start:149,end:171,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/04_browsing_books.md",raw:`
\`\`\`php {13-19|13|14|16}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    / [...]

    #[When('I want to browse books')]
    public function iWantToBrowseBooks(): void
    {
        $this->indexPage->open();
    }

    #[Then('there should be :amount books in the list')]
    public function thereShouldBeBooksInTheList(int $amount): void
    {
        Assert::eq($this->indexPage->countItems(), $amount);
    }
}    
\`\`\`
`,content:`\`\`\`php {13-19|13|14|16}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    / [...]

    #[When('I want to browse books')]
    public function iWantToBrowseBooks(): void
    {
        $this->indexPage->open();
    }

    #[Then('there should be :amount books in the list')]
    public function thereShouldBeBooksInTheList(int $amount): void
    {
        Assert::eq($this->indexPage->countItems(), $amount);
    }
}    
\`\`\``,frontmatter:{},index:7,start:149,end:171},filepath:"/home/runner/work/behat-formation/behat-formation/pages/04_browsing_books.md",noteHTML:"",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:_1,meta:{srcSequence:"./pages/04_browsing_books.md",slide:{raw:`
\`\`\`gherkin {15|16}
@managing_books
Feature: Browsing books
    In order to see all books in the admin panel
    As an Administrator
    I want to browse books

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Browsing books in the admin panel
        When I want to browse books
        Then there should be 2 books in the list
        And I should see the book "Shinning" in the list
\`\`\`
`,content:`\`\`\`gherkin {15|16}
@managing_books
Feature: Browsing books
    In order to see all books in the admin panel
    As an Administrator
    I want to browse books

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Browsing books in the admin panel
        When I want to browse books
        Then there should be 2 books in the list
        And I should see the book "Shinning" in the list
\`\`\``,frontmatter:{srcSequence:"./pages/04_browsing_books.md"},index:14,start:172,end:192,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/04_browsing_books.md",raw:`
\`\`\`gherkin {15|16}
@managing_books
Feature: Browsing books
    In order to see all books in the admin panel
    As an Administrator
    I want to browse books

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Browsing books in the admin panel
        When I want to browse books
        Then there should be 2 books in the list
        And I should see the book "Shinning" in the list
\`\`\`
`,content:`\`\`\`gherkin {15|16}
@managing_books
Feature: Browsing books
    In order to see all books in the admin panel
    As an Administrator
    I want to browse books

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Browsing books in the admin panel
        When I want to browse books
        Then there should be 2 books in the list
        And I should see the book "Shinning" in the list
\`\`\``,frontmatter:{},index:8,start:172,end:192},filepath:"/home/runner/work/behat-formation/behat-formation/pages/04_browsing_books.md",noteHTML:"",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:x1,meta:{transition:"fade",srcSequence:"./pages/04_browsing_books.md",slide:{raw:`---
transition: fade
---

\`\`\`php {7-11}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Then('there should be :amount books in the list')]
    public function thereShouldBeBooksInTheList(int $amount): void
    {
        Assert::eq($this->indexPage->countItems(), $amount);
    }
}    
\`\`\`
`,content:`\`\`\`php {7-11}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Then('there should be :amount books in the list')]
    public function thereShouldBeBooksInTheList(int $amount): void
    {
        Assert::eq($this->indexPage->countItems(), $amount);
    }
}    
\`\`\``,frontmatter:{transition:"fade",srcSequence:"./pages/04_browsing_books.md"},index:15,start:192,end:211,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/04_browsing_books.md",raw:`---
transition: fade
---

\`\`\`php {7-11}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Then('there should be :amount books in the list')]
    public function thereShouldBeBooksInTheList(int $amount): void
    {
        Assert::eq($this->indexPage->countItems(), $amount);
    }
}    
\`\`\`
`,content:`\`\`\`php {7-11}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Then('there should be :amount books in the list')]
    public function thereShouldBeBooksInTheList(int $amount): void
    {
        Assert::eq($this->indexPage->countItems(), $amount);
    }
}    
\`\`\``,frontmatter:{transition:"fade"},index:9,start:192,end:211},filepath:"/home/runner/work/behat-formation/behat-formation/pages/04_browsing_books.md",noteHTML:"",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:I1,meta:{srcSequence:"./pages/04_browsing_books.md",slide:{raw:`
\`\`\`php {13-17|13|14|16}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Then('there should be :amount books in the list')]
    public function thereShouldBeBooksInTheList(int $amount): void
    {
        Assert::eq($this->indexPage->countItems(), $amount);
    }

    #[Then('I should see the book :name in the list')]
    public function iShouldSeeTheBookInTheList(string $name): void
    {
        Assert::true($this->indexPage->isSingleResourceOnPage(['name' => $name]));
    }
}
\`\`\`
`,content:`\`\`\`php {13-17|13|14|16}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Then('there should be :amount books in the list')]
    public function thereShouldBeBooksInTheList(int $amount): void
    {
        Assert::eq($this->indexPage->countItems(), $amount);
    }

    #[Then('I should see the book :name in the list')]
    public function iShouldSeeTheBookInTheList(string $name): void
    {
        Assert::true($this->indexPage->isSingleResourceOnPage(['name' => $name]));
    }
}
\`\`\``,frontmatter:{srcSequence:"./pages/04_browsing_books.md"},index:16,start:212,end:234,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/04_browsing_books.md",raw:`
\`\`\`php {13-17|13|14|16}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Then('there should be :amount books in the list')]
    public function thereShouldBeBooksInTheList(int $amount): void
    {
        Assert::eq($this->indexPage->countItems(), $amount);
    }

    #[Then('I should see the book :name in the list')]
    public function iShouldSeeTheBookInTheList(string $name): void
    {
        Assert::true($this->indexPage->isSingleResourceOnPage(['name' => $name]));
    }
}
\`\`\`
`,content:`\`\`\`php {13-17|13|14|16}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Then('there should be :amount books in the list')]
    public function thereShouldBeBooksInTheList(int $amount): void
    {
        Assert::eq($this->indexPage->countItems(), $amount);
    }

    #[Then('I should see the book :name in the list')]
    public function iShouldSeeTheBookInTheList(string $name): void
    {
        Assert::true($this->indexPage->isSingleResourceOnPage(['name' => $name]));
    }
}
\`\`\``,frontmatter:{},index:10,start:212,end:234},filepath:"/home/runner/work/behat-formation/behat-formation/pages/04_browsing_books.md",noteHTML:"",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:P1,meta:{title:"Adding books",srcSequence:"./pages/05_adding_books.md",slide:{raw:null,title:"Adding books",level:1,content:`# Adding books

\`\`\`gherkin {all|1,10|2-5|7-8|11|12}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list

\`\`\``,frontmatter:{title:"Adding books",srcSequence:"./pages/05_adding_books.md"},index:17,start:0,end:22,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/05_adding_books.md",raw:`# Adding books

\`\`\`gherkin {all|1,10|2-5|7-8|11|12}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list

\`\`\`
`,title:"Adding books",level:1,content:`# Adding books

\`\`\`gherkin {all|1,10|2-5|7-8|11|12}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list

\`\`\``,frontmatter:{title:"Adding books"},index:0,start:0,end:22},inline:{raw:`---
src: ./pages/05_adding_books.md
---
`,content:"",frontmatter:{},index:5,start:56,end:60},filepath:"/home/runner/work/behat-formation/behat-formation/pages/05_adding_books.md",noteHTML:"",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:O1,meta:{transition:"fade",srcSequence:"./pages/05_adding_books.md",slide:{raw:`---
transition: fade
---

\`\`\`php {15}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    public function __construct(
        private IndexPage $indexPage,
    ) {
    }

    // [...]

    #[Then('I should see the book :name in the list')]
    public function iShouldSeeTheBookInTheList(string $name): void
    {
        Assert::true($this->indexPage->isSingleResourceOnPage(['name' => $name]));
    }
}
\`\`\`
`,content:`\`\`\`php {15}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    public function __construct(
        private IndexPage $indexPage,
    ) {
    }

    // [...]

    #[Then('I should see the book :name in the list')]
    public function iShouldSeeTheBookInTheList(string $name): void
    {
        Assert::true($this->indexPage->isSingleResourceOnPage(['name' => $name]));
    }
}
\`\`\``,frontmatter:{transition:"fade",srcSequence:"./pages/05_adding_books.md"},index:18,start:22,end:46,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/05_adding_books.md",raw:`---
transition: fade
---

\`\`\`php {15}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    public function __construct(
        private IndexPage $indexPage,
    ) {
    }

    // [...]

    #[Then('I should see the book :name in the list')]
    public function iShouldSeeTheBookInTheList(string $name): void
    {
        Assert::true($this->indexPage->isSingleResourceOnPage(['name' => $name]));
    }
}
\`\`\`
`,content:`\`\`\`php {15}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    public function __construct(
        private IndexPage $indexPage,
    ) {
    }

    // [...]

    #[Then('I should see the book :name in the list')]
    public function iShouldSeeTheBookInTheList(string $name): void
    {
        Assert::true($this->indexPage->isSingleResourceOnPage(['name' => $name]));
    }
}
\`\`\``,frontmatter:{transition:"fade"},index:1,start:22,end:46},filepath:"/home/runner/work/behat-formation/behat-formation/pages/05_adding_books.md",noteHTML:"",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:W1,meta:{transition:"fade",srcSequence:"./pages/05_adding_books.md",slide:{raw:`---
transition: fade
---

\`\`\`php {all}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    public function __construct(
        private IndexPage $indexPage,
    ) {
    }

    // [...]
}
\`\`\`
`,content:`\`\`\`php {all}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    public function __construct(
        private IndexPage $indexPage,
    ) {
    }

    // [...]
}
\`\`\``,frontmatter:{transition:"fade",srcSequence:"./pages/05_adding_books.md"},index:19,start:46,end:64,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/05_adding_books.md",raw:`---
transition: fade
---

\`\`\`php {all}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    public function __construct(
        private IndexPage $indexPage,
    ) {
    }

    // [...]
}
\`\`\`
`,content:`\`\`\`php {all}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    public function __construct(
        private IndexPage $indexPage,
    ) {
    }

    // [...]
}
\`\`\``,frontmatter:{transition:"fade"},index:2,start:46,end:64},filepath:"/home/runner/work/behat-formation/behat-formation/pages/05_adding_books.md",noteHTML:"",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:V1,meta:{srcSequence:"./pages/05_adding_books.md",slide:{raw:`
\`\`\`php {all|7|13|16}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    public function __construct(
        private IndexPage $indexPage,
        private CreatePage $createPage,
    ) {
    }
    
    // [...]

    #[Given('I want to create a new book')]
    public function iWantToCreateANewBook(): void
    {
        $this->createPage->open();
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {all|7|13|16}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    public function __construct(
        private IndexPage $indexPage,
        private CreatePage $createPage,
    ) {
    }
    
    // [...]

    #[Given('I want to create a new book')]
    public function iWantToCreateANewBook(): void
    {
        $this->createPage->open();
    }
    
    // [...]
}
\`\`\``,frontmatter:{srcSequence:"./pages/05_adding_books.md"},index:20,start:65,end:89,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/05_adding_books.md",raw:`
\`\`\`php {all|7|13|16}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    public function __construct(
        private IndexPage $indexPage,
        private CreatePage $createPage,
    ) {
    }
    
    // [...]

    #[Given('I want to create a new book')]
    public function iWantToCreateANewBook(): void
    {
        $this->createPage->open();
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {all|7|13|16}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    public function __construct(
        private IndexPage $indexPage,
        private CreatePage $createPage,
    ) {
    }
    
    // [...]

    #[Given('I want to create a new book')]
    public function iWantToCreateANewBook(): void
    {
        $this->createPage->open();
    }
    
    // [...]
}
\`\`\``,frontmatter:{},index:3,start:65,end:89},filepath:"/home/runner/work/behat-formation/behat-formation/pages/05_adding_books.md",noteHTML:"",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:G1,meta:{srcSequence:"./pages/05_adding_books.md",slide:{raw:`
# Create book page

\`\`\`php {all|7|5,7|9|11}
// tests/Behat/Page/Backend/Book/CreatePage.php

namespace App\\Tests\\Behat\\Page\\Backend\\Book;

use Monofony\\Bridge\\Behat\\Crud\\AbstractCreatePage;

final class CreatePage extends AbstractCreatePage
{
    public function getRouteName(): string
    {
        return 'app_backend_book_create';
    }
}

\`\`\`
`,title:"Create book page",level:1,content:`# Create book page

\`\`\`php {all|7|5,7|9|11}
// tests/Behat/Page/Backend/Book/CreatePage.php

namespace App\\Tests\\Behat\\Page\\Backend\\Book;

use Monofony\\Bridge\\Behat\\Crud\\AbstractCreatePage;

final class CreatePage extends AbstractCreatePage
{
    public function getRouteName(): string
    {
        return 'app_backend_book_create';
    }
}

\`\`\``,frontmatter:{srcSequence:"./pages/05_adding_books.md"},index:21,start:90,end:110,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/05_adding_books.md",raw:`
# Create book page

\`\`\`php {all|7|5,7|9|11}
// tests/Behat/Page/Backend/Book/CreatePage.php

namespace App\\Tests\\Behat\\Page\\Backend\\Book;

use Monofony\\Bridge\\Behat\\Crud\\AbstractCreatePage;

final class CreatePage extends AbstractCreatePage
{
    public function getRouteName(): string
    {
        return 'app_backend_book_create';
    }
}

\`\`\`
`,title:"Create book page",level:1,content:`# Create book page

\`\`\`php {all|7|5,7|9|11}
// tests/Behat/Page/Backend/Book/CreatePage.php

namespace App\\Tests\\Behat\\Page\\Backend\\Book;

use Monofony\\Bridge\\Behat\\Crud\\AbstractCreatePage;

final class CreatePage extends AbstractCreatePage
{
    public function getRouteName(): string
    {
        return 'app_backend_book_create';
    }
}

\`\`\``,frontmatter:{},index:4,start:90,end:110},filepath:"/home/runner/work/behat-formation/behat-formation/pages/05_adding_books.md",noteHTML:"",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:Y1,meta:{srcSequence:"./pages/05_adding_books.md",slide:{raw:`
\`\`\`gherkin {12|13}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list

\`\`\`
`,content:`\`\`\`gherkin {12|13}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list

\`\`\``,frontmatter:{srcSequence:"./pages/05_adding_books.md"},index:22,start:111,end:132,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/05_adding_books.md",raw:`
\`\`\`gherkin {12|13}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list

\`\`\`
`,content:`\`\`\`gherkin {12|13}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list

\`\`\``,frontmatter:{},index:5,start:111,end:132},filepath:"/home/runner/work/behat-formation/behat-formation/pages/05_adding_books.md",noteHTML:"",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:J1,meta:{transition:"fade",srcSequence:"./pages/05_adding_books.md",slide:{raw:`---
transition: fade
---

\`\`\`php {10}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Given('I want to create a new book')]
    public function iWantToCreateANewBook(): void
    {
        $this->createPage->open();
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {10}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Given('I want to create a new book')]
    public function iWantToCreateANewBook(): void
    {
        $this->createPage->open();
    }
    
    // [...]
}
\`\`\``,frontmatter:{transition:"fade",srcSequence:"./pages/05_adding_books.md"},index:23,start:132,end:153,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/05_adding_books.md",raw:`---
transition: fade
---

\`\`\`php {10}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Given('I want to create a new book')]
    public function iWantToCreateANewBook(): void
    {
        $this->createPage->open();
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {10}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Given('I want to create a new book')]
    public function iWantToCreateANewBook(): void
    {
        $this->createPage->open();
    }
    
    // [...]
}
\`\`\``,frontmatter:{transition:"fade"},index:6,start:132,end:153},filepath:"/home/runner/work/behat-formation/behat-formation/pages/05_adding_books.md",noteHTML:"",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:nD,meta:{srcSequence:"./pages/05_adding_books.md",slide:{raw:`
\`\`\`php {13-17|13|14|16}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Given('I want to create a new book')]
    public function iWantToCreateANewBook(): void
    {
        $this->createPage->open();
    }

    #[When('I specify its name as :name')]
    public function iSpecifyItsNameAs(string $name): void
    {
        $this->createPage->nameIt($name);
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {13-17|13|14|16}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Given('I want to create a new book')]
    public function iWantToCreateANewBook(): void
    {
        $this->createPage->open();
    }

    #[When('I specify its name as :name')]
    public function iSpecifyItsNameAs(string $name): void
    {
        $this->createPage->nameIt($name);
    }
    
    // [...]
}
\`\`\``,frontmatter:{srcSequence:"./pages/05_adding_books.md"},index:24,start:154,end:178,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/05_adding_books.md",raw:`
\`\`\`php {13-17|13|14|16}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Given('I want to create a new book')]
    public function iWantToCreateANewBook(): void
    {
        $this->createPage->open();
    }

    #[When('I specify its name as :name')]
    public function iSpecifyItsNameAs(string $name): void
    {
        $this->createPage->nameIt($name);
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {13-17|13|14|16}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Given('I want to create a new book')]
    public function iWantToCreateANewBook(): void
    {
        $this->createPage->open();
    }

    #[When('I specify its name as :name')]
    public function iSpecifyItsNameAs(string $name): void
    {
        $this->createPage->nameIt($name);
    }
    
    // [...]
}
\`\`\``,frontmatter:{},index:7,start:154,end:178},filepath:"/home/runner/work/behat-formation/behat-formation/pages/05_adding_books.md",noteHTML:"",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:tD,meta:{transition:"fade",srcSequence:"./pages/05_adding_books.md",slide:{raw:`---
transition: fade
---

\`\`\`php {11}
// tests/Behat/Page/Backend/Book/CreatePage.php

namespace App\\Tests\\Behat\\Page\\Backend\\Book;

use Monofony\\Bridge\\Behat\\Crud\\AbstractCreatePage;

final class CreatePage extends AbstractCreatePage
{
    public function getRouteName(): string
    {
        return 'app_backend_book_create';
    }
}

\`\`\`
`,content:`\`\`\`php {11}
// tests/Behat/Page/Backend/Book/CreatePage.php

namespace App\\Tests\\Behat\\Page\\Backend\\Book;

use Monofony\\Bridge\\Behat\\Crud\\AbstractCreatePage;

final class CreatePage extends AbstractCreatePage
{
    public function getRouteName(): string
    {
        return 'app_backend_book_create';
    }
}

\`\`\``,frontmatter:{transition:"fade",srcSequence:"./pages/05_adding_books.md"},index:25,start:178,end:199,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/05_adding_books.md",raw:`---
transition: fade
---

\`\`\`php {11}
// tests/Behat/Page/Backend/Book/CreatePage.php

namespace App\\Tests\\Behat\\Page\\Backend\\Book;

use Monofony\\Bridge\\Behat\\Crud\\AbstractCreatePage;

final class CreatePage extends AbstractCreatePage
{
    public function getRouteName(): string
    {
        return 'app_backend_book_create';
    }
}

\`\`\`
`,content:`\`\`\`php {11}
// tests/Behat/Page/Backend/Book/CreatePage.php

namespace App\\Tests\\Behat\\Page\\Backend\\Book;

use Monofony\\Bridge\\Behat\\Crud\\AbstractCreatePage;

final class CreatePage extends AbstractCreatePage
{
    public function getRouteName(): string
    {
        return 'app_backend_book_create';
    }
}

\`\`\``,frontmatter:{transition:"fade"},index:8,start:178,end:199},filepath:"/home/runner/work/behat-formation/behat-formation/pages/05_adding_books.md",noteHTML:"",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:rD,meta:{transition:"fade",srcSequence:"./pages/05_adding_books.md",slide:{raw:`---
transition: fade
---

\`\`\`php {14-17|14|16}
// tests/Behat/Page/Backend/Book/CreatePage.php

namespace App\\Tests\\Behat\\Page\\Backend\\Book;

use Monofony\\Bridge\\Behat\\Crud\\AbstractCreatePage;

final class CreatePage extends AbstractCreatePage
{
    public function getRouteName(): string
    {
        return 'app_backend_book_create';
    }
    
    public function nameIt(string $name): void
    {
        $this->getElement('name')->setValue($name);
    }
}

\`\`\`
`,content:`\`\`\`php {14-17|14|16}
// tests/Behat/Page/Backend/Book/CreatePage.php

namespace App\\Tests\\Behat\\Page\\Backend\\Book;

use Monofony\\Bridge\\Behat\\Crud\\AbstractCreatePage;

final class CreatePage extends AbstractCreatePage
{
    public function getRouteName(): string
    {
        return 'app_backend_book_create';
    }
    
    public function nameIt(string $name): void
    {
        $this->getElement('name')->setValue($name);
    }
}

\`\`\``,frontmatter:{transition:"fade",srcSequence:"./pages/05_adding_books.md"},index:26,start:199,end:225,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/05_adding_books.md",raw:`---
transition: fade
---

\`\`\`php {14-17|14|16}
// tests/Behat/Page/Backend/Book/CreatePage.php

namespace App\\Tests\\Behat\\Page\\Backend\\Book;

use Monofony\\Bridge\\Behat\\Crud\\AbstractCreatePage;

final class CreatePage extends AbstractCreatePage
{
    public function getRouteName(): string
    {
        return 'app_backend_book_create';
    }
    
    public function nameIt(string $name): void
    {
        $this->getElement('name')->setValue($name);
    }
}

\`\`\`
`,content:`\`\`\`php {14-17|14|16}
// tests/Behat/Page/Backend/Book/CreatePage.php

namespace App\\Tests\\Behat\\Page\\Backend\\Book;

use Monofony\\Bridge\\Behat\\Crud\\AbstractCreatePage;

final class CreatePage extends AbstractCreatePage
{
    public function getRouteName(): string
    {
        return 'app_backend_book_create';
    }
    
    public function nameIt(string $name): void
    {
        $this->getElement('name')->setValue($name);
    }
}

\`\`\``,frontmatter:{transition:"fade"},index:9,start:199,end:225},filepath:"/home/runner/work/behat-formation/behat-formation/pages/05_adding_books.md",noteHTML:"",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:pD,meta:{srcSequence:"./pages/05_adding_books.md",slide:{raw:`
\`\`\`php {19-24|19|22}
// tests/Behat/Page/Backend/Book/CreatePage.php

namespace App\\Tests\\Behat\\Page\\Backend\\Book;

use Monofony\\Bridge\\Behat\\Crud\\AbstractCreatePage;

final class CreatePage extends AbstractCreatePage
{
    public function getRouteName(): string
    {
        return 'app_backend_book_create';
    }
    
    public function nameIt(string $name): void
    {
        $this->getElement('name')->setValue($name);
    }
    
    protected function getDefinedElements(): array
    {
        return [
            'name' => '#book_name',
        ];
    }
}

\`\`\`
`,content:`\`\`\`php {19-24|19|22}
// tests/Behat/Page/Backend/Book/CreatePage.php

namespace App\\Tests\\Behat\\Page\\Backend\\Book;

use Monofony\\Bridge\\Behat\\Crud\\AbstractCreatePage;

final class CreatePage extends AbstractCreatePage
{
    public function getRouteName(): string
    {
        return 'app_backend_book_create';
    }
    
    public function nameIt(string $name): void
    {
        $this->getElement('name')->setValue($name);
    }
    
    protected function getDefinedElements(): array
    {
        return [
            'name' => '#book_name',
        ];
    }
}

\`\`\``,frontmatter:{srcSequence:"./pages/05_adding_books.md"},index:27,start:226,end:256,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/05_adding_books.md",raw:`
\`\`\`php {19-24|19|22}
// tests/Behat/Page/Backend/Book/CreatePage.php

namespace App\\Tests\\Behat\\Page\\Backend\\Book;

use Monofony\\Bridge\\Behat\\Crud\\AbstractCreatePage;

final class CreatePage extends AbstractCreatePage
{
    public function getRouteName(): string
    {
        return 'app_backend_book_create';
    }
    
    public function nameIt(string $name): void
    {
        $this->getElement('name')->setValue($name);
    }
    
    protected function getDefinedElements(): array
    {
        return [
            'name' => '#book_name',
        ];
    }
}

\`\`\`
`,content:`\`\`\`php {19-24|19|22}
// tests/Behat/Page/Backend/Book/CreatePage.php

namespace App\\Tests\\Behat\\Page\\Backend\\Book;

use Monofony\\Bridge\\Behat\\Crud\\AbstractCreatePage;

final class CreatePage extends AbstractCreatePage
{
    public function getRouteName(): string
    {
        return 'app_backend_book_create';
    }
    
    public function nameIt(string $name): void
    {
        $this->getElement('name')->setValue($name);
    }
    
    protected function getDefinedElements(): array
    {
        return [
            'name' => '#book_name',
        ];
    }
}

\`\`\``,frontmatter:{},index:10,start:226,end:256},filepath:"/home/runner/work/behat-formation/behat-formation/pages/05_adding_books.md",noteHTML:"",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:yD,meta:{srcSequence:"./pages/05_adding_books.md",slide:{raw:`
\`\`\`gherkin {13|14}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list

\`\`\`
`,content:`\`\`\`gherkin {13|14}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list

\`\`\``,frontmatter:{srcSequence:"./pages/05_adding_books.md"},index:28,start:257,end:278,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/05_adding_books.md",raw:`
\`\`\`gherkin {13|14}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list

\`\`\`
`,content:`\`\`\`gherkin {13|14}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list

\`\`\``,frontmatter:{},index:11,start:257,end:278},filepath:"/home/runner/work/behat-formation/behat-formation/pages/05_adding_books.md",noteHTML:"",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:mD,meta:{transition:"fade",srcSequence:"./pages/05_adding_books.md",slide:{raw:`---
transition: fade
---

\`\`\`php {10}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I specify its name as :name')]
    public function iSpecifyItsNameAs(string $name): void
    {
        $this->createPage->nameIt($name);
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {10}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I specify its name as :name')]
    public function iSpecifyItsNameAs(string $name): void
    {
        $this->createPage->nameIt($name);
    }
    
    // [...]
}
\`\`\``,frontmatter:{transition:"fade",srcSequence:"./pages/05_adding_books.md"},index:29,start:278,end:299,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/05_adding_books.md",raw:`---
transition: fade
---

\`\`\`php {10}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I specify its name as :name')]
    public function iSpecifyItsNameAs(string $name): void
    {
        $this->createPage->nameIt($name);
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {10}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I specify its name as :name')]
    public function iSpecifyItsNameAs(string $name): void
    {
        $this->createPage->nameIt($name);
    }
    
    // [...]
}
\`\`\``,frontmatter:{transition:"fade"},index:12,start:278,end:299},filepath:"/home/runner/work/behat-formation/behat-formation/pages/05_adding_books.md",noteHTML:"",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:AD,meta:{srcSequence:"./pages/05_adding_books.md",slide:{raw:`
\`\`\`php {13-17|13|14|16}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I specify its name as :name')]
    public function iSpecifyItsNameAs(string $name): void
    {
        $this->createPage->nameIt($name);
    }
    
    #[When('I add it')]
    public function iAddIt(): void
    {
        $this->createPage->create();
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {13-17|13|14|16}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I specify its name as :name')]
    public function iSpecifyItsNameAs(string $name): void
    {
        $this->createPage->nameIt($name);
    }
    
    #[When('I add it')]
    public function iAddIt(): void
    {
        $this->createPage->create();
    }
    
    // [...]
}
\`\`\``,frontmatter:{srcSequence:"./pages/05_adding_books.md"},index:30,start:300,end:324,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/05_adding_books.md",raw:`
\`\`\`php {13-17|13|14|16}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I specify its name as :name')]
    public function iSpecifyItsNameAs(string $name): void
    {
        $this->createPage->nameIt($name);
    }
    
    #[When('I add it')]
    public function iAddIt(): void
    {
        $this->createPage->create();
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {13-17|13|14|16}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I specify its name as :name')]
    public function iSpecifyItsNameAs(string $name): void
    {
        $this->createPage->nameIt($name);
    }
    
    #[When('I add it')]
    public function iAddIt(): void
    {
        $this->createPage->create();
    }
    
    // [...]
}
\`\`\``,frontmatter:{},index:13,start:300,end:324},filepath:"/home/runner/work/behat-formation/behat-formation/pages/05_adding_books.md",noteHTML:"",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:kD,meta:{srcSequence:"./pages/05_adding_books.md",slide:{raw:`
\`\`\`gherkin {14|15}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list

\`\`\`
`,content:`\`\`\`gherkin {14|15}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list

\`\`\``,frontmatter:{srcSequence:"./pages/05_adding_books.md"},index:31,start:325,end:346,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/05_adding_books.md",raw:`
\`\`\`gherkin {14|15}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list

\`\`\`
`,content:`\`\`\`gherkin {14|15}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list

\`\`\``,frontmatter:{},index:14,start:325,end:346},filepath:"/home/runner/work/behat-formation/behat-formation/pages/05_adding_books.md",noteHTML:"",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:vD,meta:{srcSequence:"./pages/05_adding_books.md",slide:{raw:`
\`\`\`php {all|10|12|14}
// tests/Behat/Context/Ui/Backend/NotificationContext.php

final class NotificationContext implements Context
{
    public function __construct(private NotificationCheckerInterface $notificationChecker)
    {
    }

    /**
     * @Then I should be notified that it has been successfully created
     */
    public function iShouldBeNotifiedItHasBeenSuccessfullyCreated(): void
    {
        $this->notificationChecker->checkNotification('has been successfully created.', NotificationType::success());
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {all|10|12|14}
// tests/Behat/Context/Ui/Backend/NotificationContext.php

final class NotificationContext implements Context
{
    public function __construct(private NotificationCheckerInterface $notificationChecker)
    {
    }

    /**
     * @Then I should be notified that it has been successfully created
     */
    public function iShouldBeNotifiedItHasBeenSuccessfullyCreated(): void
    {
        $this->notificationChecker->checkNotification('has been successfully created.', NotificationType::success());
    }
    
    // [...]
}
\`\`\``,frontmatter:{srcSequence:"./pages/05_adding_books.md"},index:32,start:347,end:369,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/05_adding_books.md",raw:`
\`\`\`php {all|10|12|14}
// tests/Behat/Context/Ui/Backend/NotificationContext.php

final class NotificationContext implements Context
{
    public function __construct(private NotificationCheckerInterface $notificationChecker)
    {
    }

    /**
     * @Then I should be notified that it has been successfully created
     */
    public function iShouldBeNotifiedItHasBeenSuccessfullyCreated(): void
    {
        $this->notificationChecker->checkNotification('has been successfully created.', NotificationType::success());
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {all|10|12|14}
// tests/Behat/Context/Ui/Backend/NotificationContext.php

final class NotificationContext implements Context
{
    public function __construct(private NotificationCheckerInterface $notificationChecker)
    {
    }

    /**
     * @Then I should be notified that it has been successfully created
     */
    public function iShouldBeNotifiedItHasBeenSuccessfullyCreated(): void
    {
        $this->notificationChecker->checkNotification('has been successfully created.', NotificationType::success());
    }
    
    // [...]
}
\`\`\``,frontmatter:{},index:15,start:347,end:369},filepath:"/home/runner/work/behat-formation/behat-formation/pages/05_adding_books.md",noteHTML:"",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:ED,meta:{srcSequence:"./pages/05_adding_books.md",slide:{raw:`
\`\`\`gherkin {15|16}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list

\`\`\`
`,content:`\`\`\`gherkin {15|16}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list

\`\`\``,frontmatter:{srcSequence:"./pages/05_adding_books.md"},index:33,start:370,end:391,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/05_adding_books.md",raw:`
\`\`\`gherkin {15|16}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list

\`\`\`
`,content:`\`\`\`gherkin {15|16}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list

\`\`\``,frontmatter:{},index:16,start:370,end:391},filepath:"/home/runner/work/behat-formation/behat-formation/pages/05_adding_books.md",noteHTML:"",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:SD,meta:{transition:"fade",srcSequence:"./pages/05_adding_books.md",slide:{raw:`---
transition: fade
---

\`\`\`php {10}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
   // [...]
    
    #[When('I add it')]
    public function iAddIt(): void
    {
        $this->createPage->create();
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {10}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
   // [...]
    
    #[When('I add it')]
    public function iAddIt(): void
    {
        $this->createPage->create();
    }
    
    // [...]
}
\`\`\``,frontmatter:{transition:"fade",srcSequence:"./pages/05_adding_books.md"},index:34,start:391,end:412,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/05_adding_books.md",raw:`---
transition: fade
---

\`\`\`php {10}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
   // [...]
    
    #[When('I add it')]
    public function iAddIt(): void
    {
        $this->createPage->create();
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {10}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
   // [...]
    
    #[When('I add it')]
    public function iAddIt(): void
    {
        $this->createPage->create();
    }
    
    // [...]
}
\`\`\``,frontmatter:{transition:"fade"},index:17,start:391,end:412},filepath:"/home/runner/work/behat-formation/behat-formation/pages/05_adding_books.md",noteHTML:"",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:TD,meta:{srcSequence:"./pages/05_adding_books.md",slide:{raw:`
\`\`\`php {13-19|13|14|16|18}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[When('I add it')]
    public function iAddIt(): void
    {
        $this->createPage->create();
    }
    
    #[Then('the book :name should appear in the list')] 
    public function theBookShouldAppearInTheList(string $name): void
    {
        $this->indexPage->open();

        Assert::true($this->indexPage->isSingleResourceOnPage(['name' => $name]));
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {13-19|13|14|16|18}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[When('I add it')]
    public function iAddIt(): void
    {
        $this->createPage->create();
    }
    
    #[Then('the book :name should appear in the list')] 
    public function theBookShouldAppearInTheList(string $name): void
    {
        $this->indexPage->open();

        Assert::true($this->indexPage->isSingleResourceOnPage(['name' => $name]));
    }
    
    // [...]
}
\`\`\``,frontmatter:{srcSequence:"./pages/05_adding_books.md"},index:35,start:413,end:439,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/05_adding_books.md",raw:`
\`\`\`php {13-19|13|14|16|18}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[When('I add it')]
    public function iAddIt(): void
    {
        $this->createPage->create();
    }
    
    #[Then('the book :name should appear in the list')] 
    public function theBookShouldAppearInTheList(string $name): void
    {
        $this->indexPage->open();

        Assert::true($this->indexPage->isSingleResourceOnPage(['name' => $name]));
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {13-19|13|14|16|18}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[When('I add it')]
    public function iAddIt(): void
    {
        $this->createPage->create();
    }
    
    #[Then('the book :name should appear in the list')] 
    public function theBookShouldAppearInTheList(string $name): void
    {
        $this->indexPage->open();

        Assert::true($this->indexPage->isSingleResourceOnPage(['name' => $name]));
    }
    
    // [...]
}
\`\`\``,frontmatter:{},index:18,start:413,end:439},filepath:"/home/runner/work/behat-formation/behat-formation/pages/05_adding_books.md",noteHTML:"",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:LD,meta:{title:"Editing books",srcSequence:"./pages/06_editing_books.md",slide:{raw:null,title:"Editing books",level:1,content:`# Editing books

\`\`\`gherkin {all|1,11|2-5|7-9|12|13}
@managing_books
Feature: Editing a book
    In order to change information about a book
    As an Administrator
    I want to be able to edit a book

    Background:
        Given there is a book with name "Shinning"
        And I am logged in as an administrator

    @ui
    Scenario: Renaming a book
        When I want to edit this book
        And I change its name to "Carrie"
        And I save my changes
        Then I should be notified that it has been successfully edited
        And this book with name "Carrie" should appear in the list


\`\`\``,frontmatter:{title:"Editing books",srcSequence:"./pages/06_editing_books.md"},index:36,start:0,end:24,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/06_editing_books.md",raw:`# Editing books

\`\`\`gherkin {all|1,11|2-5|7-9|12|13}
@managing_books
Feature: Editing a book
    In order to change information about a book
    As an Administrator
    I want to be able to edit a book

    Background:
        Given there is a book with name "Shinning"
        And I am logged in as an administrator

    @ui
    Scenario: Renaming a book
        When I want to edit this book
        And I change its name to "Carrie"
        And I save my changes
        Then I should be notified that it has been successfully edited
        And this book with name "Carrie" should appear in the list


\`\`\`
`,title:"Editing books",level:1,content:`# Editing books

\`\`\`gherkin {all|1,11|2-5|7-9|12|13}
@managing_books
Feature: Editing a book
    In order to change information about a book
    As an Administrator
    I want to be able to edit a book

    Background:
        Given there is a book with name "Shinning"
        And I am logged in as an administrator

    @ui
    Scenario: Renaming a book
        When I want to edit this book
        And I change its name to "Carrie"
        And I save my changes
        Then I should be notified that it has been successfully edited
        And this book with name "Carrie" should appear in the list


\`\`\``,frontmatter:{title:"Editing books"},index:0,start:0,end:24},inline:{raw:`---
src: ./pages/06_editing_books.md
---
`,content:"",frontmatter:{},index:6,start:60,end:64},filepath:"/home/runner/work/behat-formation/behat-formation/pages/06_editing_books.md",noteHTML:"",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:qD,meta:{srcSequence:"./pages/06_editing_books.md",slide:{raw:`
\`\`\`php {all|8|8,6|10|10,5|14}
// tests/Behat/Page/Backend/Book/UpdatePage.php

namespace App\\Tests\\Behat\\Page\\Backend\\Book;

use Monofony\\Bridge\\Behat\\Behaviour\\NamesIt;
use Monofony\\Bridge\\Behat\\Crud\\AbstractUpdatePage;

final class UpdatePage extends AbstractUpdatePage
{
    use NamesIt;
    
    public function getRouteName(): string
    {
        return 'app_backend_book_update';
    }
}

\`\`\`
`,content:`\`\`\`php {all|8|8,6|10|10,5|14}
// tests/Behat/Page/Backend/Book/UpdatePage.php

namespace App\\Tests\\Behat\\Page\\Backend\\Book;

use Monofony\\Bridge\\Behat\\Behaviour\\NamesIt;
use Monofony\\Bridge\\Behat\\Crud\\AbstractUpdatePage;

final class UpdatePage extends AbstractUpdatePage
{
    use NamesIt;
    
    public function getRouteName(): string
    {
        return 'app_backend_book_update';
    }
}

\`\`\``,frontmatter:{srcSequence:"./pages/06_editing_books.md"},index:37,start:25,end:46,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/06_editing_books.md",raw:`
\`\`\`php {all|8|8,6|10|10,5|14}
// tests/Behat/Page/Backend/Book/UpdatePage.php

namespace App\\Tests\\Behat\\Page\\Backend\\Book;

use Monofony\\Bridge\\Behat\\Behaviour\\NamesIt;
use Monofony\\Bridge\\Behat\\Crud\\AbstractUpdatePage;

final class UpdatePage extends AbstractUpdatePage
{
    use NamesIt;
    
    public function getRouteName(): string
    {
        return 'app_backend_book_update';
    }
}

\`\`\`
`,content:`\`\`\`php {all|8|8,6|10|10,5|14}
// tests/Behat/Page/Backend/Book/UpdatePage.php

namespace App\\Tests\\Behat\\Page\\Backend\\Book;

use Monofony\\Bridge\\Behat\\Behaviour\\NamesIt;
use Monofony\\Bridge\\Behat\\Crud\\AbstractUpdatePage;

final class UpdatePage extends AbstractUpdatePage
{
    use NamesIt;
    
    public function getRouteName(): string
    {
        return 'app_backend_book_update';
    }
}

\`\`\``,frontmatter:{},index:1,start:25,end:46},filepath:"/home/runner/work/behat-formation/behat-formation/pages/06_editing_books.md",noteHTML:"",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:jD,meta:{transition:"fade",srcSequence:"./pages/06_editing_books.md",slide:{raw:`---
transition: fade
---

\`\`\`php {7-11}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[Given('I want to create a new book')]
    public function iWantToCreateANewBook(): void
    {
        $this->createPage->open();
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {7-11}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[Given('I want to create a new book')]
    public function iWantToCreateANewBook(): void
    {
        $this->createPage->open();
    }
    
    // [...]
}
\`\`\``,frontmatter:{transition:"fade",srcSequence:"./pages/06_editing_books.md"},index:38,start:46,end:67,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/06_editing_books.md",raw:`---
transition: fade
---

\`\`\`php {7-11}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[Given('I want to create a new book')]
    public function iWantToCreateANewBook(): void
    {
        $this->createPage->open();
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {7-11}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[Given('I want to create a new book')]
    public function iWantToCreateANewBook(): void
    {
        $this->createPage->open();
    }
    
    // [...]
}
\`\`\``,frontmatter:{transition:"fade"},index:2,start:46,end:67},filepath:"/home/runner/work/behat-formation/behat-formation/pages/06_editing_books.md",noteHTML:"",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:KD,meta:{srcSequence:"./pages/06_editing_books.md",slide:{raw:`
\`\`\`php {13-17|13|14|16}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[Given('I want to create a new book')]
    public function iWantToCreateANewBook(): void
    {
        $this->createPage->open();
    }
    
    #[When('/^I want to edit (this book)$/')]
    public function iWantToEditThisBook(Book $book): void
    {
        $this->updatePage->open(['id' => $book->getId()]);
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {13-17|13|14|16}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[Given('I want to create a new book')]
    public function iWantToCreateANewBook(): void
    {
        $this->createPage->open();
    }
    
    #[When('/^I want to edit (this book)$/')]
    public function iWantToEditThisBook(Book $book): void
    {
        $this->updatePage->open(['id' => $book->getId()]);
    }
    
    // [...]
}
\`\`\``,frontmatter:{srcSequence:"./pages/06_editing_books.md"},index:39,start:68,end:92,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/06_editing_books.md",raw:`
\`\`\`php {13-17|13|14|16}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[Given('I want to create a new book')]
    public function iWantToCreateANewBook(): void
    {
        $this->createPage->open();
    }
    
    #[When('/^I want to edit (this book)$/')]
    public function iWantToEditThisBook(Book $book): void
    {
        $this->updatePage->open(['id' => $book->getId()]);
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {13-17|13|14|16}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[Given('I want to create a new book')]
    public function iWantToCreateANewBook(): void
    {
        $this->createPage->open();
    }
    
    #[When('/^I want to edit (this book)$/')]
    public function iWantToEditThisBook(Book $book): void
    {
        $this->updatePage->open(['id' => $book->getId()]);
    }
    
    // [...]
}
\`\`\``,frontmatter:{},index:3,start:68,end:92},filepath:"/home/runner/work/behat-formation/behat-formation/pages/06_editing_books.md",noteHTML:"",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:ZD,meta:{transition:"fade",srcSequence:"./pages/06_editing_books.md",slide:{raw:`---
transition: fade
---

\`\`\`php {16-17}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    public function __construct(
        private EntityManagerInterface $entityManager,
    ) {
    }

    #[Given('there is (also) a book with name :name')
    public function thereIsABookWithName(string $name): void
    {
        $book = new Book();
        $book->setName($name);

        $this->entityManager->persist($book);
        $this->entityManager->flush();
    }
}
\`\`\`
`,content:`\`\`\`php {16-17}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    public function __construct(
        private EntityManagerInterface $entityManager,
    ) {
    }

    #[Given('there is (also) a book with name :name')
    public function thereIsABookWithName(string $name): void
    {
        $book = new Book();
        $book->setName($name);

        $this->entityManager->persist($book);
        $this->entityManager->flush();
    }
}
\`\`\``,frontmatter:{transition:"fade",srcSequence:"./pages/06_editing_books.md"},index:40,start:92,end:118,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/06_editing_books.md",raw:`---
transition: fade
---

\`\`\`php {16-17}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    public function __construct(
        private EntityManagerInterface $entityManager,
    ) {
    }

    #[Given('there is (also) a book with name :name')
    public function thereIsABookWithName(string $name): void
    {
        $book = new Book();
        $book->setName($name);

        $this->entityManager->persist($book);
        $this->entityManager->flush();
    }
}
\`\`\`
`,content:`\`\`\`php {16-17}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    public function __construct(
        private EntityManagerInterface $entityManager,
    ) {
    }

    #[Given('there is (also) a book with name :name')
    public function thereIsABookWithName(string $name): void
    {
        $book = new Book();
        $book->setName($name);

        $this->entityManager->persist($book);
        $this->entityManager->flush();
    }
}
\`\`\``,frontmatter:{transition:"fade"},index:4,start:92,end:118},filepath:"/home/runner/work/behat-formation/behat-formation/pages/06_editing_books.md",noteHTML:"",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:XD,meta:{srcSequence:"./pages/06_editing_books.md",slide:{raw:`
\`\`\`php {20|7}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    public function __construct(
        private EntityManagerInterface $entityManager,
        private SharedStorageInterface $sharedStorage,
    ) {
    }

    #[Given('there is (also) a book with name :name')
    public function thereIsABookWithName(string $name): void
    {
        $book = new Book();
        $book->setName($name);

        $this->entityManager->persist($book);
        $this->entityManager->flush();
        
        $this->sharedStorage->set('book', $book);
    }
}
\`\`\`
`,content:`\`\`\`php {20|7}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    public function __construct(
        private EntityManagerInterface $entityManager,
        private SharedStorageInterface $sharedStorage,
    ) {
    }

    #[Given('there is (also) a book with name :name')
    public function thereIsABookWithName(string $name): void
    {
        $book = new Book();
        $book->setName($name);

        $this->entityManager->persist($book);
        $this->entityManager->flush();
        
        $this->sharedStorage->set('book', $book);
    }
}
\`\`\``,frontmatter:{srcSequence:"./pages/06_editing_books.md"},index:41,start:119,end:145,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/06_editing_books.md",raw:`
\`\`\`php {20|7}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    public function __construct(
        private EntityManagerInterface $entityManager,
        private SharedStorageInterface $sharedStorage,
    ) {
    }

    #[Given('there is (also) a book with name :name')
    public function thereIsABookWithName(string $name): void
    {
        $book = new Book();
        $book->setName($name);

        $this->entityManager->persist($book);
        $this->entityManager->flush();
        
        $this->sharedStorage->set('book', $book);
    }
}
\`\`\`
`,content:`\`\`\`php {20|7}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    public function __construct(
        private EntityManagerInterface $entityManager,
        private SharedStorageInterface $sharedStorage,
    ) {
    }

    #[Given('there is (also) a book with name :name')
    public function thereIsABookWithName(string $name): void
    {
        $book = new Book();
        $book->setName($name);

        $this->entityManager->persist($book);
        $this->entityManager->flush();
        
        $this->sharedStorage->set('book', $book);
    }
}
\`\`\``,frontmatter:{},index:5,start:119,end:145},filepath:"/home/runner/work/behat-formation/behat-formation/pages/06_editing_books.md",noteHTML:"",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:s9,meta:{srcSequence:"./pages/06_editing_books.md",slide:{raw:`
\`\`\`php {all|3|5|17-23|18|20|22}
// tests/Behat/Context/Transform/SharedStorageContext.php

final class SharedStorageContext implements Context
{
    public function __construct(private SharedStorageInterface $sharedStorage)
    {
    }

    /**
     * @Transform /^(it|its|theirs|them)$/
     */
    public function getLatestResource(): mixed
    {
        return $this->sharedStorage->getLatestResource();
    }

    /**
     * @Transform /^(?:this|that|the) ([^"]+)$/
     */
    public function getResource($resource): mixed
    {
        return $this->sharedStorage->get(StringInflector::nameToCode($resource));
    }
}

\`\`\`
`,content:`\`\`\`php {all|3|5|17-23|18|20|22}
// tests/Behat/Context/Transform/SharedStorageContext.php

final class SharedStorageContext implements Context
{
    public function __construct(private SharedStorageInterface $sharedStorage)
    {
    }

    /**
     * @Transform /^(it|its|theirs|them)$/
     */
    public function getLatestResource(): mixed
    {
        return $this->sharedStorage->getLatestResource();
    }

    /**
     * @Transform /^(?:this|that|the) ([^"]+)$/
     */
    public function getResource($resource): mixed
    {
        return $this->sharedStorage->get(StringInflector::nameToCode($resource));
    }
}

\`\`\``,frontmatter:{srcSequence:"./pages/06_editing_books.md"},index:42,start:146,end:175,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/06_editing_books.md",raw:`
\`\`\`php {all|3|5|17-23|18|20|22}
// tests/Behat/Context/Transform/SharedStorageContext.php

final class SharedStorageContext implements Context
{
    public function __construct(private SharedStorageInterface $sharedStorage)
    {
    }

    /**
     * @Transform /^(it|its|theirs|them)$/
     */
    public function getLatestResource(): mixed
    {
        return $this->sharedStorage->getLatestResource();
    }

    /**
     * @Transform /^(?:this|that|the) ([^"]+)$/
     */
    public function getResource($resource): mixed
    {
        return $this->sharedStorage->get(StringInflector::nameToCode($resource));
    }
}

\`\`\`
`,content:`\`\`\`php {all|3|5|17-23|18|20|22}
// tests/Behat/Context/Transform/SharedStorageContext.php

final class SharedStorageContext implements Context
{
    public function __construct(private SharedStorageInterface $sharedStorage)
    {
    }

    /**
     * @Transform /^(it|its|theirs|them)$/
     */
    public function getLatestResource(): mixed
    {
        return $this->sharedStorage->getLatestResource();
    }

    /**
     * @Transform /^(?:this|that|the) ([^"]+)$/
     */
    public function getResource($resource): mixed
    {
        return $this->sharedStorage->get(StringInflector::nameToCode($resource));
    }
}

\`\`\``,frontmatter:{},index:6,start:146,end:175},filepath:"/home/runner/work/behat-formation/behat-formation/pages/06_editing_books.md",noteHTML:"",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:a9,meta:{srcSequence:"./pages/06_editing_books.md",slide:{raw:`
# Editing books

\`\`\`gherkin {13|14}
@managing_books
Feature: Editing a book
    In order to change information about a book
    As an Administrator
    I want to be able to edit a book

    Background:
        Given there is a book with name "Shinning"
        And I am logged in as an administrator

    @ui
    Scenario: Renaming a book
        When I want to edit this book
        And I change its name to "Carrie"
        And I save my changes
        Then I should be notified that it has been successfully edited
        And this book with name "Carrie" should appear in the list


\`\`\`
`,title:"Editing books",level:1,content:`# Editing books

\`\`\`gherkin {13|14}
@managing_books
Feature: Editing a book
    In order to change information about a book
    As an Administrator
    I want to be able to edit a book

    Background:
        Given there is a book with name "Shinning"
        And I am logged in as an administrator

    @ui
    Scenario: Renaming a book
        When I want to edit this book
        And I change its name to "Carrie"
        And I save my changes
        Then I should be notified that it has been successfully edited
        And this book with name "Carrie" should appear in the list


\`\`\``,frontmatter:{srcSequence:"./pages/06_editing_books.md"},index:43,start:176,end:201,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/06_editing_books.md",raw:`
# Editing books

\`\`\`gherkin {13|14}
@managing_books
Feature: Editing a book
    In order to change information about a book
    As an Administrator
    I want to be able to edit a book

    Background:
        Given there is a book with name "Shinning"
        And I am logged in as an administrator

    @ui
    Scenario: Renaming a book
        When I want to edit this book
        And I change its name to "Carrie"
        And I save my changes
        Then I should be notified that it has been successfully edited
        And this book with name "Carrie" should appear in the list


\`\`\`
`,title:"Editing books",level:1,content:`# Editing books

\`\`\`gherkin {13|14}
@managing_books
Feature: Editing a book
    In order to change information about a book
    As an Administrator
    I want to be able to edit a book

    Background:
        Given there is a book with name "Shinning"
        And I am logged in as an administrator

    @ui
    Scenario: Renaming a book
        When I want to edit this book
        And I change its name to "Carrie"
        And I save my changes
        Then I should be notified that it has been successfully edited
        And this book with name "Carrie" should appear in the list


\`\`\``,frontmatter:{},index:7,start:176,end:201},filepath:"/home/runner/work/behat-formation/behat-formation/pages/06_editing_books.md",noteHTML:"",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:c9,meta:{transition:"fade",srcSequence:"./pages/06_editing_books.md",slide:{raw:`---
transition: fade
---


\`\`\`php {7-11}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[When('I specify its name as :name')]
    public function iSpecifyItsNameAs(string $name): void
    {
        $this->createPage->nameIt($name);
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {7-11}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[When('I specify its name as :name')]
    public function iSpecifyItsNameAs(string $name): void
    {
        $this->createPage->nameIt($name);
    }
    
    // [...]
}
\`\`\``,frontmatter:{transition:"fade",srcSequence:"./pages/06_editing_books.md"},index:44,start:201,end:223,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/06_editing_books.md",raw:`---
transition: fade
---


\`\`\`php {7-11}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[When('I specify its name as :name')]
    public function iSpecifyItsNameAs(string $name): void
    {
        $this->createPage->nameIt($name);
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {7-11}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[When('I specify its name as :name')]
    public function iSpecifyItsNameAs(string $name): void
    {
        $this->createPage->nameIt($name);
    }
    
    // [...]
}
\`\`\``,frontmatter:{transition:"fade"},index:8,start:201,end:223},filepath:"/home/runner/work/behat-formation/behat-formation/pages/06_editing_books.md",noteHTML:"",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:u9,meta:{srcSequence:"./pages/06_editing_books.md",slide:{raw:`
\`\`\`php {13-17|13|14|16}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[When('I specify its name as :name')]
    public function iSpecifyItsNameAs(string $name): void
    {
        $this->createPage->nameIt($name);
    }
    
    #[When('I change its name to :name')]
    public function iChangeItsNameTo(string $name): void
    {
        $this->updatePage->nameIt($name);
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {13-17|13|14|16}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[When('I specify its name as :name')]
    public function iSpecifyItsNameAs(string $name): void
    {
        $this->createPage->nameIt($name);
    }
    
    #[When('I change its name to :name')]
    public function iChangeItsNameTo(string $name): void
    {
        $this->updatePage->nameIt($name);
    }
    
    // [...]
}
\`\`\``,frontmatter:{srcSequence:"./pages/06_editing_books.md"},index:45,start:224,end:248,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/06_editing_books.md",raw:`
\`\`\`php {13-17|13|14|16}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[When('I specify its name as :name')]
    public function iSpecifyItsNameAs(string $name): void
    {
        $this->createPage->nameIt($name);
    }
    
    #[When('I change its name to :name')]
    public function iChangeItsNameTo(string $name): void
    {
        $this->updatePage->nameIt($name);
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {13-17|13|14|16}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[When('I specify its name as :name')]
    public function iSpecifyItsNameAs(string $name): void
    {
        $this->createPage->nameIt($name);
    }
    
    #[When('I change its name to :name')]
    public function iChangeItsNameTo(string $name): void
    {
        $this->updatePage->nameIt($name);
    }
    
    // [...]
}
\`\`\``,frontmatter:{},index:9,start:224,end:248},filepath:"/home/runner/work/behat-formation/behat-formation/pages/06_editing_books.md",noteHTML:"",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:m9,meta:{srcSequence:"./pages/06_editing_books.md",slide:{raw:`
# Editing books

\`\`\`gherkin {14|15}
@managing_books
Feature: Editing a book
    In order to change information about a book
    As an Administrator
    I want to be able to edit a book

    Background:
        Given there is a book with name "Shinning"
        And I am logged in as an administrator

    @ui
    Scenario: Renaming a book
        When I want to edit this book
        And I change its name to "Carrie"
        And I save my changes
        Then I should be notified that it has been successfully edited
        And this book with name "Carrie" should appear in the list


\`\`\`
`,title:"Editing books",level:1,content:`# Editing books

\`\`\`gherkin {14|15}
@managing_books
Feature: Editing a book
    In order to change information about a book
    As an Administrator
    I want to be able to edit a book

    Background:
        Given there is a book with name "Shinning"
        And I am logged in as an administrator

    @ui
    Scenario: Renaming a book
        When I want to edit this book
        And I change its name to "Carrie"
        And I save my changes
        Then I should be notified that it has been successfully edited
        And this book with name "Carrie" should appear in the list


\`\`\``,frontmatter:{srcSequence:"./pages/06_editing_books.md"},index:46,start:249,end:274,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/06_editing_books.md",raw:`
# Editing books

\`\`\`gherkin {14|15}
@managing_books
Feature: Editing a book
    In order to change information about a book
    As an Administrator
    I want to be able to edit a book

    Background:
        Given there is a book with name "Shinning"
        And I am logged in as an administrator

    @ui
    Scenario: Renaming a book
        When I want to edit this book
        And I change its name to "Carrie"
        And I save my changes
        Then I should be notified that it has been successfully edited
        And this book with name "Carrie" should appear in the list


\`\`\`
`,title:"Editing books",level:1,content:`# Editing books

\`\`\`gherkin {14|15}
@managing_books
Feature: Editing a book
    In order to change information about a book
    As an Administrator
    I want to be able to edit a book

    Background:
        Given there is a book with name "Shinning"
        And I am logged in as an administrator

    @ui
    Scenario: Renaming a book
        When I want to edit this book
        And I change its name to "Carrie"
        And I save my changes
        Then I should be notified that it has been successfully edited
        And this book with name "Carrie" should appear in the list


\`\`\``,frontmatter:{},index:10,start:249,end:274},filepath:"/home/runner/work/behat-formation/behat-formation/pages/06_editing_books.md",noteHTML:"",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:A9,meta:{transition:"fade",srcSequence:"./pages/06_editing_books.md",slide:{raw:`---
transition: fade
---

\`\`\`php {7-11}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[When('I add it')]
    public function iAddIt(): void
    {
        $this->createPage->create();
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {7-11}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[When('I add it')]
    public function iAddIt(): void
    {
        $this->createPage->create();
    }
    
    // [...]
}
\`\`\``,frontmatter:{transition:"fade",srcSequence:"./pages/06_editing_books.md"},index:47,start:274,end:295,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/06_editing_books.md",raw:`---
transition: fade
---

\`\`\`php {7-11}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[When('I add it')]
    public function iAddIt(): void
    {
        $this->createPage->create();
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {7-11}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[When('I add it')]
    public function iAddIt(): void
    {
        $this->createPage->create();
    }
    
    // [...]
}
\`\`\``,frontmatter:{transition:"fade"},index:11,start:274,end:295},filepath:"/home/runner/work/behat-formation/behat-formation/pages/06_editing_books.md",noteHTML:"",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:k9,meta:{srcSequence:"./pages/06_editing_books.md",slide:{raw:`
\`\`\`php {13-17|13|14|16}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[When('I add it')]
    public function iAddIt(): void
    {
        $this->createPage->create();
    }
    
    #[When('I save my changes')]
    public function iSaveMyChanges(): void
    {
        $this->updatePage->saveChanges();
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {13-17|13|14|16}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[When('I add it')]
    public function iAddIt(): void
    {
        $this->createPage->create();
    }
    
    #[When('I save my changes')]
    public function iSaveMyChanges(): void
    {
        $this->updatePage->saveChanges();
    }
    
    // [...]
}
\`\`\``,frontmatter:{srcSequence:"./pages/06_editing_books.md"},index:48,start:296,end:320,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/06_editing_books.md",raw:`
\`\`\`php {13-17|13|14|16}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[When('I add it')]
    public function iAddIt(): void
    {
        $this->createPage->create();
    }
    
    #[When('I save my changes')]
    public function iSaveMyChanges(): void
    {
        $this->updatePage->saveChanges();
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {13-17|13|14|16}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[When('I add it')]
    public function iAddIt(): void
    {
        $this->createPage->create();
    }
    
    #[When('I save my changes')]
    public function iSaveMyChanges(): void
    {
        $this->updatePage->saveChanges();
    }
    
    // [...]
}
\`\`\``,frontmatter:{},index:12,start:296,end:320},filepath:"/home/runner/work/behat-formation/behat-formation/pages/06_editing_books.md",noteHTML:"",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:v9,meta:{srcSequence:"./pages/06_editing_books.md",slide:{raw:`
\`\`\`gherkin {15|16|17}
@managing_books
Feature: Editing a book
    In order to change information about a book
    As an Administrator
    I want to be able to edit a book

    Background:
        Given there is a book with name "Shinning"
        And I am logged in as an administrator

    @ui
    Scenario: Renaming a book
        When I want to edit this book
        And I change its name to "Carrie"
        And I save my changes
        Then I should be notified that it has been successfully edited
        And this book with name "Carrie" should appear in the list


\`\`\`
`,content:`\`\`\`gherkin {15|16|17}
@managing_books
Feature: Editing a book
    In order to change information about a book
    As an Administrator
    I want to be able to edit a book

    Background:
        Given there is a book with name "Shinning"
        And I am logged in as an administrator

    @ui
    Scenario: Renaming a book
        When I want to edit this book
        And I change its name to "Carrie"
        And I save my changes
        Then I should be notified that it has been successfully edited
        And this book with name "Carrie" should appear in the list


\`\`\``,frontmatter:{srcSequence:"./pages/06_editing_books.md"},index:49,start:321,end:344,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/06_editing_books.md",raw:`
\`\`\`gherkin {15|16|17}
@managing_books
Feature: Editing a book
    In order to change information about a book
    As an Administrator
    I want to be able to edit a book

    Background:
        Given there is a book with name "Shinning"
        And I am logged in as an administrator

    @ui
    Scenario: Renaming a book
        When I want to edit this book
        And I change its name to "Carrie"
        And I save my changes
        Then I should be notified that it has been successfully edited
        And this book with name "Carrie" should appear in the list


\`\`\`
`,content:`\`\`\`gherkin {15|16|17}
@managing_books
Feature: Editing a book
    In order to change information about a book
    As an Administrator
    I want to be able to edit a book

    Background:
        Given there is a book with name "Shinning"
        And I am logged in as an administrator

    @ui
    Scenario: Renaming a book
        When I want to edit this book
        And I change its name to "Carrie"
        And I save my changes
        Then I should be notified that it has been successfully edited
        And this book with name "Carrie" should appear in the list


\`\`\``,frontmatter:{},index:13,start:321,end:344},filepath:"/home/runner/work/behat-formation/behat-formation/pages/06_editing_books.md",noteHTML:"",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:E9,meta:{transition:"fade",srcSequence:"./pages/06_editing_books.md",slide:{raw:`---
transition: fade
---

\`\`\`php {7-13|7|8}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[Then('the book :name should appear in the list')
    #[Then('this book with name :name should appear in the list')
    public function theBookShouldAppearInTheList(string $name): void
    {
        $this->indexPage->open();

        Assert::true($this->indexPage->isSingleResourceOnPage(['name' => $name]));
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {7-13|7|8}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[Then('the book :name should appear in the list')
    #[Then('this book with name :name should appear in the list')
    public function theBookShouldAppearInTheList(string $name): void
    {
        $this->indexPage->open();

        Assert::true($this->indexPage->isSingleResourceOnPage(['name' => $name]));
    }
    
    // [...]
}
\`\`\``,frontmatter:{transition:"fade",srcSequence:"./pages/06_editing_books.md"},index:50,start:344,end:368,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/06_editing_books.md",raw:`---
transition: fade
---

\`\`\`php {7-13|7|8}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[Then('the book :name should appear in the list')
    #[Then('this book with name :name should appear in the list')
    public function theBookShouldAppearInTheList(string $name): void
    {
        $this->indexPage->open();

        Assert::true($this->indexPage->isSingleResourceOnPage(['name' => $name]));
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {7-13|7|8}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[Then('the book :name should appear in the list')
    #[Then('this book with name :name should appear in the list')
    public function theBookShouldAppearInTheList(string $name): void
    {
        $this->indexPage->open();

        Assert::true($this->indexPage->isSingleResourceOnPage(['name' => $name]));
    }
    
    // [...]
}
\`\`\``,frontmatter:{transition:"fade"},index:14,start:344,end:368},filepath:"/home/runner/work/behat-formation/behat-formation/pages/06_editing_books.md",noteHTML:"",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:F9,meta:{title:"Deleting books",srcSequence:"./pages/07_deleting_books.md",slide:{raw:null,title:"Deleting books",level:1,content:`# Deleting books

\`\`\`gherkin {all|3-5|7-10|14}
@managing_books
Feature: Deleting a book
    In order to get rid of deprecated books
    As an Administrator
    I want to be able to delete a book

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Deleting a book
        Given I am browsing books
        When I delete book with name "Shinning"
        Then I should be notified that it has been successfully deleted
        And there should not be "Shinning" book anymore

\`\`\``,frontmatter:{title:"Deleting books",srcSequence:"./pages/07_deleting_books.md"},index:51,start:0,end:23,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/07_deleting_books.md",raw:`# Deleting books

\`\`\`gherkin {all|3-5|7-10|14}
@managing_books
Feature: Deleting a book
    In order to get rid of deprecated books
    As an Administrator
    I want to be able to delete a book

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Deleting a book
        Given I am browsing books
        When I delete book with name "Shinning"
        Then I should be notified that it has been successfully deleted
        And there should not be "Shinning" book anymore

\`\`\`
`,title:"Deleting books",level:1,content:`# Deleting books

\`\`\`gherkin {all|3-5|7-10|14}
@managing_books
Feature: Deleting a book
    In order to get rid of deprecated books
    As an Administrator
    I want to be able to delete a book

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Deleting a book
        Given I am browsing books
        When I delete book with name "Shinning"
        Then I should be notified that it has been successfully deleted
        And there should not be "Shinning" book anymore

\`\`\``,frontmatter:{title:"Deleting books"},index:0,start:0,end:23},inline:{raw:`---
src: ./pages/07_deleting_books.md
---
`,content:"",frontmatter:{},index:7,start:64,end:68},filepath:"/home/runner/work/behat-formation/behat-formation/pages/07_deleting_books.md",noteHTML:"",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:M9,meta:{srcSequence:"./pages/07_deleting_books.md",slide:{raw:`
\`\`\`php {all|7|8}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    // [...]

    #[When('I want to browse books')]
    #[Given('I am browsing books')]
    public function iWantToBrowseBooks(): void
    {
        $this->indexPage->open();
    }
}

\`\`\`
`,content:`\`\`\`php {all|7|8}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    // [...]

    #[When('I want to browse books')]
    #[Given('I am browsing books')]
    public function iWantToBrowseBooks(): void
    {
        $this->indexPage->open();
    }
}

\`\`\``,frontmatter:{srcSequence:"./pages/07_deleting_books.md"},index:52,start:24,end:42,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/07_deleting_books.md",raw:`
\`\`\`php {all|7|8}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    // [...]

    #[When('I want to browse books')]
    #[Given('I am browsing books')]
    public function iWantToBrowseBooks(): void
    {
        $this->indexPage->open();
    }
}

\`\`\`
`,content:`\`\`\`php {all|7|8}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    // [...]

    #[When('I want to browse books')]
    #[Given('I am browsing books')]
    public function iWantToBrowseBooks(): void
    {
        $this->indexPage->open();
    }
}

\`\`\``,frontmatter:{},index:1,start:24,end:42},filepath:"/home/runner/work/behat-formation/behat-formation/pages/07_deleting_books.md",noteHTML:"",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:W9,meta:{srcSequence:"./pages/07_deleting_books.md",slide:{raw:`
# Deleting books

\`\`\`gherkin {14|15}
@managing_books
Feature: Deleting a book
    In order to get rid of deprecated books
    As an Administrator
    I want to be able to delete a book

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Deleting a book
        Given I am browsing books
        When I delete book with name "Shinning"
        Then I should be notified that it has been successfully deleted
        And there should not be "Shinning" book anymore

\`\`\`
`,title:"Deleting books",level:1,content:`# Deleting books

\`\`\`gherkin {14|15}
@managing_books
Feature: Deleting a book
    In order to get rid of deprecated books
    As an Administrator
    I want to be able to delete a book

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Deleting a book
        Given I am browsing books
        When I delete book with name "Shinning"
        Then I should be notified that it has been successfully deleted
        And there should not be "Shinning" book anymore

\`\`\``,frontmatter:{srcSequence:"./pages/07_deleting_books.md"},index:53,start:43,end:67,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/07_deleting_books.md",raw:`
# Deleting books

\`\`\`gherkin {14|15}
@managing_books
Feature: Deleting a book
    In order to get rid of deprecated books
    As an Administrator
    I want to be able to delete a book

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Deleting a book
        Given I am browsing books
        When I delete book with name "Shinning"
        Then I should be notified that it has been successfully deleted
        And there should not be "Shinning" book anymore

\`\`\`
`,title:"Deleting books",level:1,content:`# Deleting books

\`\`\`gherkin {14|15}
@managing_books
Feature: Deleting a book
    In order to get rid of deprecated books
    As an Administrator
    I want to be able to delete a book

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Deleting a book
        Given I am browsing books
        When I delete book with name "Shinning"
        Then I should be notified that it has been successfully deleted
        And there should not be "Shinning" book anymore

\`\`\``,frontmatter:{},index:2,start:43,end:67},filepath:"/home/runner/work/behat-formation/behat-formation/pages/07_deleting_books.md",noteHTML:"",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:V9,meta:{transition:"fade",srcSequence:"./pages/07_deleting_books.md",slide:{raw:`---
transition: fade
---

\`\`\`php {7-11}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    // [...]

    #[When('I save my changes')]
    public function iSaveMyChanges(): void
    {
        $this->updatePage->saveChanges();
    }
    
    // [...]
}

\`\`\`
`,content:`\`\`\`php {7-11}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    // [...]

    #[When('I save my changes')]
    public function iSaveMyChanges(): void
    {
        $this->updatePage->saveChanges();
    }
    
    // [...]
}

\`\`\``,frontmatter:{transition:"fade",srcSequence:"./pages/07_deleting_books.md"},index:54,start:67,end:89,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/07_deleting_books.md",raw:`---
transition: fade
---

\`\`\`php {7-11}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    // [...]

    #[When('I save my changes')]
    public function iSaveMyChanges(): void
    {
        $this->updatePage->saveChanges();
    }
    
    // [...]
}

\`\`\`
`,content:`\`\`\`php {7-11}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    // [...]

    #[When('I save my changes')]
    public function iSaveMyChanges(): void
    {
        $this->updatePage->saveChanges();
    }
    
    // [...]
}

\`\`\``,frontmatter:{transition:"fade"},index:3,start:67,end:89},filepath:"/home/runner/work/behat-formation/behat-formation/pages/07_deleting_books.md",noteHTML:"",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:H9,meta:{srcSequence:"./pages/07_deleting_books.md",slide:{raw:`
\`\`\`php {13-17|13|14|16}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    // [...]

    #[When('I save my changes')]
    public function iSaveMyChanges(): void
    {
        $this->updatePage->saveChanges();
    }
    
    #[When('I delete book with name :name')]
    public function iDeleteBookWithName(string $name): void
    {
        $this->indexPage->deleteResourceOnPage(['name' => $name]);
    }
    
    // [...]
}

\`\`\`
`,content:`\`\`\`php {13-17|13|14|16}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    // [...]

    #[When('I save my changes')]
    public function iSaveMyChanges(): void
    {
        $this->updatePage->saveChanges();
    }
    
    #[When('I delete book with name :name')]
    public function iDeleteBookWithName(string $name): void
    {
        $this->indexPage->deleteResourceOnPage(['name' => $name]);
    }
    
    // [...]
}

\`\`\``,frontmatter:{srcSequence:"./pages/07_deleting_books.md"},index:55,start:90,end:115,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/07_deleting_books.md",raw:`
\`\`\`php {13-17|13|14|16}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    // [...]

    #[When('I save my changes')]
    public function iSaveMyChanges(): void
    {
        $this->updatePage->saveChanges();
    }
    
    #[When('I delete book with name :name')]
    public function iDeleteBookWithName(string $name): void
    {
        $this->indexPage->deleteResourceOnPage(['name' => $name]);
    }
    
    // [...]
}

\`\`\`
`,content:`\`\`\`php {13-17|13|14|16}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    // [...]

    #[When('I save my changes')]
    public function iSaveMyChanges(): void
    {
        $this->updatePage->saveChanges();
    }
    
    #[When('I delete book with name :name')]
    public function iDeleteBookWithName(string $name): void
    {
        $this->indexPage->deleteResourceOnPage(['name' => $name]);
    }
    
    // [...]
}

\`\`\``,frontmatter:{},index:4,start:90,end:115},filepath:"/home/runner/work/behat-formation/behat-formation/pages/07_deleting_books.md",noteHTML:"",id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:Y9,meta:{srcSequence:"./pages/07_deleting_books.md",slide:{raw:`
# Deleting books

\`\`\`gherkin {15|16|17}
@managing_books
Feature: Deleting a book
    In order to get rid of deprecated books
    As an Administrator
    I want to be able to delete a book

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Deleting a book
        Given I am browsing books
        When I delete book with name "Shinning"
        Then I should be notified that it has been successfully deleted
        And there should not be "Shinning" book anymore

\`\`\`
`,title:"Deleting books",level:1,content:`# Deleting books

\`\`\`gherkin {15|16|17}
@managing_books
Feature: Deleting a book
    In order to get rid of deprecated books
    As an Administrator
    I want to be able to delete a book

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Deleting a book
        Given I am browsing books
        When I delete book with name "Shinning"
        Then I should be notified that it has been successfully deleted
        And there should not be "Shinning" book anymore

\`\`\``,frontmatter:{srcSequence:"./pages/07_deleting_books.md"},index:56,start:116,end:140,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/07_deleting_books.md",raw:`
# Deleting books

\`\`\`gherkin {15|16|17}
@managing_books
Feature: Deleting a book
    In order to get rid of deprecated books
    As an Administrator
    I want to be able to delete a book

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Deleting a book
        Given I am browsing books
        When I delete book with name "Shinning"
        Then I should be notified that it has been successfully deleted
        And there should not be "Shinning" book anymore

\`\`\`
`,title:"Deleting books",level:1,content:`# Deleting books

\`\`\`gherkin {15|16|17}
@managing_books
Feature: Deleting a book
    In order to get rid of deprecated books
    As an Administrator
    I want to be able to delete a book

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Deleting a book
        Given I am browsing books
        When I delete book with name "Shinning"
        Then I should be notified that it has been successfully deleted
        And there should not be "Shinning" book anymore

\`\`\``,frontmatter:{},index:5,start:116,end:140},filepath:"/home/runner/work/behat-formation/behat-formation/pages/07_deleting_books.md",noteHTML:"",id:56,no:57},__clicksElements:[],__preloaded:!1}},{path:"58",name:"page-58",component:J9,meta:{transition:"fade",srcSequence:"./pages/07_deleting_books.md",slide:{raw:`---
transition: fade
---

\`\`\`php {7-14}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    // [...]

    #[Then('the book :name should appear in the list')
    #[Then('this book with name :name should appear in the list')
    public function theBookShouldAppearInTheList(string $name): void
    {
        $this->indexPage->open();

        Assert::true($this->indexPage->isSingleResourceOnPage(['name' => $name]));
    }
    
    // [...]
}

\`\`\`
`,content:`\`\`\`php {7-14}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    // [...]

    #[Then('the book :name should appear in the list')
    #[Then('this book with name :name should appear in the list')
    public function theBookShouldAppearInTheList(string $name): void
    {
        $this->indexPage->open();

        Assert::true($this->indexPage->isSingleResourceOnPage(['name' => $name]));
    }
    
    // [...]
}

\`\`\``,frontmatter:{transition:"fade",srcSequence:"./pages/07_deleting_books.md"},index:57,start:140,end:165,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/07_deleting_books.md",raw:`---
transition: fade
---

\`\`\`php {7-14}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    // [...]

    #[Then('the book :name should appear in the list')
    #[Then('this book with name :name should appear in the list')
    public function theBookShouldAppearInTheList(string $name): void
    {
        $this->indexPage->open();

        Assert::true($this->indexPage->isSingleResourceOnPage(['name' => $name]));
    }
    
    // [...]
}

\`\`\`
`,content:`\`\`\`php {7-14}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    // [...]

    #[Then('the book :name should appear in the list')
    #[Then('this book with name :name should appear in the list')
    public function theBookShouldAppearInTheList(string $name): void
    {
        $this->indexPage->open();

        Assert::true($this->indexPage->isSingleResourceOnPage(['name' => $name]));
    }
    
    // [...]
}

\`\`\``,frontmatter:{transition:"fade"},index:6,start:140,end:165},filepath:"/home/runner/work/behat-formation/behat-formation/pages/07_deleting_books.md",noteHTML:"",id:57,no:58},__clicksElements:[],__preloaded:!1}},{path:"59",name:"page-59",component:nv,meta:{srcSequence:"./pages/07_deleting_books.md",slide:{raw:`
\`\`\`php {16-22|16|17|19|21}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    // [...]

    #[Then('the book :name should appear in the list')
    #[Then('this book with name :name should appear in the list')
    public function theBookShouldAppearInTheList(string $name): void
    {
        $this->indexPage->open();

        Assert::true($this->indexPage->isSingleResourceOnPage(['name' => $name]));
    }
    
    #[Then('there should not be :name book anymore')
    public function thereShouldNotBeBookAnymore(string $name): void
    {
        $this->indexPage->open();

        Assert::false($this->indexPage->isSingleResourceOnPage(['name' => $name]));
    }
    
    // [...]
}

\`\`\`
`,content:`\`\`\`php {16-22|16|17|19|21}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    // [...]

    #[Then('the book :name should appear in the list')
    #[Then('this book with name :name should appear in the list')
    public function theBookShouldAppearInTheList(string $name): void
    {
        $this->indexPage->open();

        Assert::true($this->indexPage->isSingleResourceOnPage(['name' => $name]));
    }
    
    #[Then('there should not be :name book anymore')
    public function thereShouldNotBeBookAnymore(string $name): void
    {
        $this->indexPage->open();

        Assert::false($this->indexPage->isSingleResourceOnPage(['name' => $name]));
    }
    
    // [...]
}

\`\`\``,frontmatter:{srcSequence:"./pages/07_deleting_books.md"},index:58,start:166,end:196,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/07_deleting_books.md",raw:`
\`\`\`php {16-22|16|17|19|21}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    // [...]

    #[Then('the book :name should appear in the list')
    #[Then('this book with name :name should appear in the list')
    public function theBookShouldAppearInTheList(string $name): void
    {
        $this->indexPage->open();

        Assert::true($this->indexPage->isSingleResourceOnPage(['name' => $name]));
    }
    
    #[Then('there should not be :name book anymore')
    public function thereShouldNotBeBookAnymore(string $name): void
    {
        $this->indexPage->open();

        Assert::false($this->indexPage->isSingleResourceOnPage(['name' => $name]));
    }
    
    // [...]
}

\`\`\`
`,content:`\`\`\`php {16-22|16|17|19|21}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    // [...]

    #[Then('the book :name should appear in the list')
    #[Then('this book with name :name should appear in the list')
    public function theBookShouldAppearInTheList(string $name): void
    {
        $this->indexPage->open();

        Assert::true($this->indexPage->isSingleResourceOnPage(['name' => $name]));
    }
    
    #[Then('there should not be :name book anymore')
    public function thereShouldNotBeBookAnymore(string $name): void
    {
        $this->indexPage->open();

        Assert::false($this->indexPage->isSingleResourceOnPage(['name' => $name]));
    }
    
    // [...]
}

\`\`\``,frontmatter:{},index:7,start:166,end:196},filepath:"/home/runner/work/behat-formation/behat-formation/pages/07_deleting_books.md",noteHTML:"",id:58,no:59},__clicksElements:[],__preloaded:!1}},{path:"60",name:"page-60",component:lv,meta:{title:"Books validation",srcSequence:"./pages/08_books_validation.md",slide:{raw:null,title:"Books validation",level:1,content:`# Books validation

\`\`\`gherkin {all|3-5|7-8|11|12}
@managing_books
Feature: Books validation
    In order to avoid making mistakes when managing a book
    As a Project manager
    I want to be prevented from adding or editing it without specifying required fields

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Trying to add a new book without specifying its name
        When I want to create a new book
        And I do not specify any name
        And I try to add it
        Then I should be notified that name is required

\`\`\``,frontmatter:{title:"Books validation",srcSequence:"./pages/08_books_validation.md"},index:59,start:0,end:21,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/08_books_validation.md",raw:`# Books validation

\`\`\`gherkin {all|3-5|7-8|11|12}
@managing_books
Feature: Books validation
    In order to avoid making mistakes when managing a book
    As a Project manager
    I want to be prevented from adding or editing it without specifying required fields

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Trying to add a new book without specifying its name
        When I want to create a new book
        And I do not specify any name
        And I try to add it
        Then I should be notified that name is required

\`\`\`
`,title:"Books validation",level:1,content:`# Books validation

\`\`\`gherkin {all|3-5|7-8|11|12}
@managing_books
Feature: Books validation
    In order to avoid making mistakes when managing a book
    As a Project manager
    I want to be prevented from adding or editing it without specifying required fields

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Trying to add a new book without specifying its name
        When I want to create a new book
        And I do not specify any name
        And I try to add it
        Then I should be notified that name is required

\`\`\``,frontmatter:{title:"Books validation"},index:0,start:0,end:21},inline:{raw:`---
src: ./pages/08_books_validation.md
---
`,content:"",frontmatter:{},index:8,start:68,end:72},filepath:"/home/runner/work/behat-formation/behat-formation/pages/08_books_validation.md",noteHTML:"",id:59,no:60},__clicksElements:[],__preloaded:!1}},{path:"61",name:"page-61",component:iv,meta:{srcSequence:"./pages/08_books_validation.md",slide:{raw:`
\`\`\`php {all|7}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Given('I want to create a new book')]
    public function iWantToCreateANewBook(): void
    {
        $this->createPage->open();
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {all|7}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Given('I want to create a new book')]
    public function iWantToCreateANewBook(): void
    {
        $this->createPage->open();
    }
    
    // [...]
}
\`\`\``,frontmatter:{srcSequence:"./pages/08_books_validation.md"},index:60,start:22,end:40,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/08_books_validation.md",raw:`
\`\`\`php {all|7}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Given('I want to create a new book')]
    public function iWantToCreateANewBook(): void
    {
        $this->createPage->open();
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {all|7}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Given('I want to create a new book')]
    public function iWantToCreateANewBook(): void
    {
        $this->createPage->open();
    }
    
    // [...]
}
\`\`\``,frontmatter:{},index:1,start:22,end:40},filepath:"/home/runner/work/behat-formation/behat-formation/pages/08_books_validation.md",noteHTML:"",id:60,no:61},__clicksElements:[],__preloaded:!1}},{path:"62",name:"page-62",component:uv,meta:{srcSequence:"./pages/08_books_validation.md",slide:{raw:`
# Books validation

\`\`\`gherkin {12|13}
@managing_books
Feature: Books validation
    In order to avoid making mistakes when managing a book
    As a Project manager
    I want to be prevented from adding or editing it without specifying required fields

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Trying to add a new book without specifying its name
        When I want to create a new book
        And I do not specify any name
        And I try to add it
        Then I should be notified that name is required

\`\`\`
`,title:"Books validation",level:1,content:`# Books validation

\`\`\`gherkin {12|13}
@managing_books
Feature: Books validation
    In order to avoid making mistakes when managing a book
    As a Project manager
    I want to be prevented from adding or editing it without specifying required fields

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Trying to add a new book without specifying its name
        When I want to create a new book
        And I do not specify any name
        And I try to add it
        Then I should be notified that name is required

\`\`\``,frontmatter:{srcSequence:"./pages/08_books_validation.md"},index:61,start:41,end:63,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/08_books_validation.md",raw:`
# Books validation

\`\`\`gherkin {12|13}
@managing_books
Feature: Books validation
    In order to avoid making mistakes when managing a book
    As a Project manager
    I want to be prevented from adding or editing it without specifying required fields

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Trying to add a new book without specifying its name
        When I want to create a new book
        And I do not specify any name
        And I try to add it
        Then I should be notified that name is required

\`\`\`
`,title:"Books validation",level:1,content:`# Books validation

\`\`\`gherkin {12|13}
@managing_books
Feature: Books validation
    In order to avoid making mistakes when managing a book
    As a Project manager
    I want to be prevented from adding or editing it without specifying required fields

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Trying to add a new book without specifying its name
        When I want to create a new book
        And I do not specify any name
        And I try to add it
        Then I should be notified that name is required

\`\`\``,frontmatter:{},index:2,start:41,end:63},filepath:"/home/runner/work/behat-formation/behat-formation/pages/08_books_validation.md",noteHTML:"",id:61,no:62},__clicksElements:[],__preloaded:!1}},{path:"63",name:"page-63",component:fv,meta:{transition:"fade",srcSequence:"./pages/08_books_validation.md",slide:{raw:`---
transition: fade
---

\`\`\`php {7|8|9}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I specify its name as :name')]
    #[When('I do not specify any name')]
    public function iSpecifyItsNameAs(string $name): void
    {
        $this->createPage->nameIt($name);
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {7|8|9}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I specify its name as :name')]
    #[When('I do not specify any name')]
    public function iSpecifyItsNameAs(string $name): void
    {
        $this->createPage->nameIt($name);
    }
    
    // [...]
}
\`\`\``,frontmatter:{transition:"fade",srcSequence:"./pages/08_books_validation.md"},index:62,start:63,end:85,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/08_books_validation.md",raw:`---
transition: fade
---

\`\`\`php {7|8|9}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I specify its name as :name')]
    #[When('I do not specify any name')]
    public function iSpecifyItsNameAs(string $name): void
    {
        $this->createPage->nameIt($name);
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {7|8|9}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I specify its name as :name')]
    #[When('I do not specify any name')]
    public function iSpecifyItsNameAs(string $name): void
    {
        $this->createPage->nameIt($name);
    }
    
    // [...]
}
\`\`\``,frontmatter:{transition:"fade"},index:3,start:63,end:85},filepath:"/home/runner/work/behat-formation/behat-formation/pages/08_books_validation.md",noteHTML:"",id:62,no:63},__clicksElements:[],__preloaded:!1}},{path:"64",name:"page-64",component:Bv,meta:{transition:"fade",srcSequence:"./pages/08_books_validation.md",slide:{raw:`---
transition: fade
---

\`\`\`php {9|11}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I specify its name as :name')]
    #[When('I do not specify any name')]
    public function iSpecifyItsNameAs(?string $name = null): void
    {
        $this->createPage->nameIt($name);
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {9|11}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I specify its name as :name')]
    #[When('I do not specify any name')]
    public function iSpecifyItsNameAs(?string $name = null): void
    {
        $this->createPage->nameIt($name);
    }
    
    // [...]
}
\`\`\``,frontmatter:{transition:"fade",srcSequence:"./pages/08_books_validation.md"},index:63,start:85,end:107,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/08_books_validation.md",raw:`---
transition: fade
---

\`\`\`php {9|11}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I specify its name as :name')]
    #[When('I do not specify any name')]
    public function iSpecifyItsNameAs(?string $name = null): void
    {
        $this->createPage->nameIt($name);
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {9|11}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I specify its name as :name')]
    #[When('I do not specify any name')]
    public function iSpecifyItsNameAs(?string $name = null): void
    {
        $this->createPage->nameIt($name);
    }
    
    // [...]
}
\`\`\``,frontmatter:{transition:"fade"},index:4,start:85,end:107},filepath:"/home/runner/work/behat-formation/behat-formation/pages/08_books_validation.md",noteHTML:"",id:63,no:64},__clicksElements:[],__preloaded:!1}},{path:"65",name:"page-65",component:bv,meta:{srcSequence:"./pages/08_books_validation.md",slide:{raw:`
\`\`\`php {11}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I specify its name as :name')]
    #[When('I do not specify any name')]
    public function iSpecifyItsNameAs(?string $name = null): void
    {
        $this->createPage->nameIt($name ?? '');
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {11}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I specify its name as :name')]
    #[When('I do not specify any name')]
    public function iSpecifyItsNameAs(?string $name = null): void
    {
        $this->createPage->nameIt($name ?? '');
    }
    
    // [...]
}
\`\`\``,frontmatter:{srcSequence:"./pages/08_books_validation.md"},index:64,start:108,end:127,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/08_books_validation.md",raw:`
\`\`\`php {11}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I specify its name as :name')]
    #[When('I do not specify any name')]
    public function iSpecifyItsNameAs(?string $name = null): void
    {
        $this->createPage->nameIt($name ?? '');
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {11}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I specify its name as :name')]
    #[When('I do not specify any name')]
    public function iSpecifyItsNameAs(?string $name = null): void
    {
        $this->createPage->nameIt($name ?? '');
    }
    
    // [...]
}
\`\`\``,frontmatter:{},index:5,start:108,end:127},filepath:"/home/runner/work/behat-formation/behat-formation/pages/08_books_validation.md",noteHTML:"",id:64,no:65},__clicksElements:[],__preloaded:!1}},{path:"66",name:"page-66",component:vv,meta:{srcSequence:"./pages/08_books_validation.md",slide:{raw:`
# Books validation

\`\`\`gherkin {13|14}
@managing_books
Feature: Books validation
    In order to avoid making mistakes when managing a book
    As a Project manager
    I want to be prevented from adding or editing it without specifying required fields

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Trying to add a new book without specifying its name
        When I want to create a new book
        And I do not specify any name
        And I try to add it
        Then I should be notified that name is required

\`\`\`
`,title:"Books validation",level:1,content:`# Books validation

\`\`\`gherkin {13|14}
@managing_books
Feature: Books validation
    In order to avoid making mistakes when managing a book
    As a Project manager
    I want to be prevented from adding or editing it without specifying required fields

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Trying to add a new book without specifying its name
        When I want to create a new book
        And I do not specify any name
        And I try to add it
        Then I should be notified that name is required

\`\`\``,frontmatter:{srcSequence:"./pages/08_books_validation.md"},index:65,start:128,end:150,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/08_books_validation.md",raw:`
# Books validation

\`\`\`gherkin {13|14}
@managing_books
Feature: Books validation
    In order to avoid making mistakes when managing a book
    As a Project manager
    I want to be prevented from adding or editing it without specifying required fields

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Trying to add a new book without specifying its name
        When I want to create a new book
        And I do not specify any name
        And I try to add it
        Then I should be notified that name is required

\`\`\`
`,title:"Books validation",level:1,content:`# Books validation

\`\`\`gherkin {13|14}
@managing_books
Feature: Books validation
    In order to avoid making mistakes when managing a book
    As a Project manager
    I want to be prevented from adding or editing it without specifying required fields

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Trying to add a new book without specifying its name
        When I want to create a new book
        And I do not specify any name
        And I try to add it
        Then I should be notified that name is required

\`\`\``,frontmatter:{},index:6,start:128,end:150},filepath:"/home/runner/work/behat-formation/behat-formation/pages/08_books_validation.md",noteHTML:"",id:65,no:66},__clicksElements:[],__preloaded:!1}},{path:"67",name:"page-67",component:Ev,meta:{transition:"fade",srcSequence:"./pages/08_books_validation.md",slide:{raw:`---
transition: fade
---

\`\`\`php {7}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I add it')]
    public function iAddIt(): void
    {
        $this->createPage->create();
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {7}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I add it')]
    public function iAddIt(): void
    {
        $this->createPage->create();
    }
    
    // [...]
}
\`\`\``,frontmatter:{transition:"fade",srcSequence:"./pages/08_books_validation.md"},index:66,start:150,end:171,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/08_books_validation.md",raw:`---
transition: fade
---

\`\`\`php {7}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I add it')]
    public function iAddIt(): void
    {
        $this->createPage->create();
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {7}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I add it')]
    public function iAddIt(): void
    {
        $this->createPage->create();
    }
    
    // [...]
}
\`\`\``,frontmatter:{transition:"fade"},index:7,start:150,end:171},filepath:"/home/runner/work/behat-formation/behat-formation/pages/08_books_validation.md",noteHTML:"",id:66,no:67},__clicksElements:[],__preloaded:!1}},{path:"68",name:"page-68",component:Sv,meta:{srcSequence:"./pages/08_books_validation.md",slide:{raw:`
\`\`\`php {7}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I (try to) add it')]
    public function iAddIt(): void
    {
        $this->createPage->create();
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {7}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I (try to) add it')]
    public function iAddIt(): void
    {
        $this->createPage->create();
    }
    
    // [...]
}
\`\`\``,frontmatter:{srcSequence:"./pages/08_books_validation.md"},index:67,start:172,end:190,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/08_books_validation.md",raw:`
\`\`\`php {7}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I (try to) add it')]
    public function iAddIt(): void
    {
        $this->createPage->create();
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {7}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I (try to) add it')]
    public function iAddIt(): void
    {
        $this->createPage->create();
    }
    
    // [...]
}
\`\`\``,frontmatter:{},index:8,start:172,end:190},filepath:"/home/runner/work/behat-formation/behat-formation/pages/08_books_validation.md",noteHTML:"",id:67,no:68},__clicksElements:[],__preloaded:!1}},{path:"69",name:"page-69",component:Mv,meta:{srcSequence:"./pages/08_books_validation.md",slide:{raw:`
# Books validation

\`\`\`gherkin {14|15}
@managing_books
Feature: Books validation
    In order to avoid making mistakes when managing a book
    As a Project manager
    I want to be prevented from adding or editing it without specifying required fields

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Trying to add a new book without specifying its name
        When I want to create a new book
        And I do not specify any name
        And I try to add it
        Then I should be notified that name is required

\`\`\`
`,title:"Books validation",level:1,content:`# Books validation

\`\`\`gherkin {14|15}
@managing_books
Feature: Books validation
    In order to avoid making mistakes when managing a book
    As a Project manager
    I want to be prevented from adding or editing it without specifying required fields

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Trying to add a new book without specifying its name
        When I want to create a new book
        And I do not specify any name
        And I try to add it
        Then I should be notified that name is required

\`\`\``,frontmatter:{srcSequence:"./pages/08_books_validation.md"},index:68,start:191,end:213,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/08_books_validation.md",raw:`
# Books validation

\`\`\`gherkin {14|15}
@managing_books
Feature: Books validation
    In order to avoid making mistakes when managing a book
    As a Project manager
    I want to be prevented from adding or editing it without specifying required fields

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Trying to add a new book without specifying its name
        When I want to create a new book
        And I do not specify any name
        And I try to add it
        Then I should be notified that name is required

\`\`\`
`,title:"Books validation",level:1,content:`# Books validation

\`\`\`gherkin {14|15}
@managing_books
Feature: Books validation
    In order to avoid making mistakes when managing a book
    As a Project manager
    I want to be prevented from adding or editing it without specifying required fields

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Trying to add a new book without specifying its name
        When I want to create a new book
        And I do not specify any name
        And I try to add it
        Then I should be notified that name is required

\`\`\``,frontmatter:{},index:9,start:191,end:213},filepath:"/home/runner/work/behat-formation/behat-formation/pages/08_books_validation.md",noteHTML:"",id:68,no:69},__clicksElements:[],__preloaded:!1}},{path:"70",name:"page-70",component:Lv,meta:{srcSequence:"./pages/08_books_validation.md",slide:{raw:`
\`\`\`php {all|7|8|10|11|12}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Then('I should be notified that :element is required')] 
    public function iShouldBeNotifiedThatElementIsRequired(string $element): void
    {
        Assert::eq($this->createPage->getValidationMessage(
            StringInflector::nameToCode($element)), 
            'This value should not be blank.',
        );
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {all|7|8|10|11|12}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Then('I should be notified that :element is required')] 
    public function iShouldBeNotifiedThatElementIsRequired(string $element): void
    {
        Assert::eq($this->createPage->getValidationMessage(
            StringInflector::nameToCode($element)), 
            'This value should not be blank.',
        );
    }
    
    // [...]
}
\`\`\``,frontmatter:{srcSequence:"./pages/08_books_validation.md"},index:69,start:214,end:235,source:{filepath:"/home/runner/work/behat-formation/behat-formation/pages/08_books_validation.md",raw:`
\`\`\`php {all|7|8|10|11|12}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Then('I should be notified that :element is required')] 
    public function iShouldBeNotifiedThatElementIsRequired(string $element): void
    {
        Assert::eq($this->createPage->getValidationMessage(
            StringInflector::nameToCode($element)), 
            'This value should not be blank.',
        );
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {all|7|8|10|11|12}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Then('I should be notified that :element is required')] 
    public function iShouldBeNotifiedThatElementIsRequired(string $element): void
    {
        Assert::eq($this->createPage->getValidationMessage(
            StringInflector::nameToCode($element)), 
            'This value should not be blank.',
        );
    }
    
    // [...]
}
\`\`\``,frontmatter:{},index:10,start:214,end:235},filepath:"/home/runner/work/behat-formation/behat-formation/pages/08_books_validation.md",noteHTML:"",id:69,no:70},__clicksElements:[],__preloaded:!1}},{path:"71",component:K_,meta:{layout:"end"}}],Ze=Wv,ot=[{name:"play",path:"/",component:gk,children:[...Ze]},{name:"print",path:"/print",component:j_},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let n=function(s){if(!st.remote||st.remote===s.query.password)return!0;if(st.remote&&s.query.password===void 0){const o=prompt("Enter password");if(st.remote===o)return!0}return s.params.no?{path:`/${s.params.no}`}:{path:""}};ot.push({path:"/presenter/print",component:()=>Fs(()=>import("./PresenterPrint-730e68db.js"),["assets/PresenterPrint-730e68db.js","assets/NoteDisplay-155857ce.js"])}),ot.push({name:"notes",path:"/notes",component:()=>Fs(()=>import("./NotesView-f69b68ff.js"),["assets/NotesView-f69b68ff.js","assets/NoteDisplay-155857ce.js"]),beforeEnter:n}),ot.push({name:"presenter",path:"/presenter/:no",component:()=>Fs(()=>import("./Presenter-d9518421.js"),["assets/Presenter-d9518421.js","assets/NoteDisplay-155857ce.js","assets/DrawingControls-8fe73284.js","assets/Presenter-aa6741a8.css"]),beforeEnter:n}),ot.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const Cn=K5({history:GA("/behat-formation/"),routes:ot});function Rv(n,s,{mode:o="replace"}={}){return S({get(){const l=Cn.currentRoute.value.query[n];return l==null?s??null:Array.isArray(l)?l.filter(Boolean):l},set(l){sn(()=>{Cn[v(o)]({query:{...Cn.currentRoute.value.query,[n]:l}})})}})}const Ey=Z(0);sn(()=>{Cn.afterEach(async()=>{await sn(),Ey.value+=1})});const Iy=Z(0),On=S(()=>Cn.currentRoute.value),Oo=S(()=>On.value.query.print!==void 0),qv=S(()=>On.value.query.print==="clicks"),as=S(()=>On.value.query.embedded!==void 0),Bn=S(()=>On.value.path.startsWith("/presenter")),Vv=S(()=>On.value.path.startsWith("/notes")),ut=S(()=>Oo.value&&!qv.value),Dr=S(()=>On.value.query.password),Uv=S(()=>!Bn.value&&(!Se.remote||Dr.value===Se.remote)),Ip=Rv("clicks","0"),$y=S(()=>Ze.length-1),jv=S(()=>On.value.path),Ke=S(()=>parseInt(jv.value.split(/\//g).slice(-1)[0])||1);S(()=>ta(Ke.value));const un=S(()=>Ze.find(n=>n.path===`${Ke.value}`));S(()=>{var n,s,o;return(o=(s=(n=un.value)==null?void 0:n.meta)==null?void 0:s.slide)==null?void 0:o.id});S(()=>{var n,s;return((s=(n=un.value)==null?void 0:n.meta)==null?void 0:s.layout)||(Ke.value===1?"cover":"default")});const $a=S(()=>Ze.find(n=>n.path===`${Math.min(Ze.length,Ke.value+1)}`)),Hv=S(()=>Ze.find(n=>n.path===`${Math.max(1,Ke.value-1)}`)),Gv=S(()=>{var n,s;return Ey.value,((s=(n=un.value)==null?void 0:n.meta)==null?void 0:s.__clicksElements)||[]}),Tn=S({get(){if(ut.value)return 99999;let n=+(Ip.value||0);return isNaN(n)&&(n=0),n},set(n){Ip.value=n.toString()}}),Ml=S(()=>{var n,s;return+(((s=(n=un.value)==null?void 0:n.meta)==null?void 0:s.clicks)??Gv.value.length)}),Kv=S(()=>Ke.value<Ze.length-1||Tn.value<Ml.value),zv=S(()=>Ke.value>1||Tn.value>0),Yv=S(()=>Ze.filter(n=>{var s,o;return(o=(s=n.meta)==null?void 0:s.slide)==null?void 0:o.title}).reduce((n,s)=>(bi(n,s),n),[])),Zv=S(()=>ki(Yv.value,un.value));S(()=>_i(Zv.value));const Qv=S(()=>s4(Iy.value,un.value,Hv.value));Ce(un,(n,s)=>{Iy.value=Number(n==null?void 0:n.path)-Number(s==null?void 0:s.path)});function Ps(){Ml.value<=Tn.value?St():Tn.value+=1}async function Ts(){Tn.value<=0?await Ft():Tn.value-=1}function ta(n){return Bn.value?`/presenter/${n}`:`/${n}`}function St(){const n=Math.min(Ze.length,Ke.value+1);return No(n)}async function Ft(n=!0){const s=Math.max(1,Ke.value-1);await No(s),n&&Ml.value&&Cn.replace({query:{...On.value.query,clicks:Ml.value}})}function No(n,s){return Cn.push({path:ta(n),query:{...On.value.query,clicks:s}})}function Jv(n){const s=Z(0),{direction:o,distanceX:l,distanceY:a}=pA(n,{onSwipeStart(r){r.pointerType==="touch"&&(Et.value||(s.value=cr()))},onSwipeEnd(r){if(r.pointerType!=="touch"||!s.value||Et.value)return;const i=Math.abs(l.value),c=Math.abs(a.value);i/window.innerWidth>.3||i>100?o.value===cs.LEFT?Ps():Ts():(c/window.innerHeight>.4||c>200)&&(o.value===cs.DOWN?Ft():St())}})}async function vr(){const{saveAs:n}=await Fs(()=>import("./FileSaver.min-17c85779.js").then(s=>s.F),[]);n(Tu(Se.download)?Se.download:Se.exportFilename?`${Se.exportFilename}.pdf`:"/behat-formation/slidev-exported.pdf",`${Se.title}.pdf`)}async function Xv(n){var s,o;if(n==null){const l=(o=(s=un.value)==null?void 0:s.meta)==null?void 0:o.slide;if(!(l!=null&&l.filepath))return!1;n=`${l.filepath}:${l.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(n)}`),!0}function bi(n,s,o=1){var a,r,i,c,p;const l=(r=(a=s.meta)==null?void 0:a.slide)==null?void 0:r.level;l&&l>o&&n.length>0?bi(n[n.length-1].children,s,o+1):n.push({children:[],level:o,path:s.path,hideInToc:Boolean((i=s.meta)==null?void 0:i.hideInToc),title:(p=(c=s.meta)==null?void 0:c.slide)==null?void 0:p.title})}function ki(n,s,o=!1,l){return n.map(a=>{const r={...a,active:a.path===(s==null?void 0:s.path),hasActiveParent:o};return r.children.length>0&&(r.children=ki(r.children,s,r.active||r.hasActiveParent,r)),l&&(r.active||r.activeParent)&&(l.activeParent=!0),r})}function _i(n,s=1){return n.filter(o=>!o.hideInToc).map(o=>({...o,children:_i(o.children,s+1)}))}const e4={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function n4(n,s=!1){if(!n||(typeof n=="string"&&(n={name:n}),!n.name))return;let o=n.name.includes("|")?n.name:e4[n.name]||n.name;if(o.includes("|")){const[l,a]=o.split("|").map(r=>r.trim());o=s?a:l}if(o)return{...n,name:o}}function s4(n,s,o){var a,r;let l=n>0?(a=o==null?void 0:o.meta)==null?void 0:a.transition:(r=s==null?void 0:s.meta)==null?void 0:r.transition;return l||(l=Se.transition),n4(l,n<0)}function o4(){const n=Se.titleTemplate.replace("%s",Se.title||"Slidev");ii({title:n}),x8(Se.htmlAttrs),W8(`${n} - shared`),U8(`${n} - drawings`);const s=`${location.origin}_${F8()}`;function o(){Vv.value||!Bn.value&&!S8.includes(location.host.split(":")[0])||(Bn.value?(Go("page",+Ke.value),Go("clicks",Tn.value)):(Go("viewerPage",+Ke.value),Go("viewerClicks",Tn.value)),Go("lastUpdate",{id:s,type:Bn.value?"presenter":"viewer",time:new Date().getTime()}))}Cn.afterEach(o),Ce(Tn,o),R8(l=>{var r;Cn.currentRoute.value.path.match(/^\/(\d+|presenter)\/?/)&&((r=l.lastUpdate)==null?void 0:r.type)==="presenter"&&(+l.page!=+Ke.value||+Tn.value!=+l.clicks)&&Cn.replace({path:ta(l.page),query:{...Cn.currentRoute.value.query,clicks:l.clicks||0}})})}const t4=Me({__name:"App",setup(n){return T(q),o4(),(s,o)=>{const l=vl("RouterView"),a=vl("StarportCarrier");return k(),ae(Te,null,[I(l),I(a)],64)}}}),l4=V(t4,[["__file","/home/runner/work/behat-formation/behat-formation/node_modules/@slidev/client/App.vue"]]);function Sa(n){return n!==null&&typeof n=="object"}function xr(n,s,o=".",l){if(!Sa(s))return xr(n,{},o,l);const a=Object.assign({},s);for(const r in n){if(r==="__proto__"||r==="constructor")continue;const i=n[r];i!=null&&(l&&l(a,r,i,o)||(Array.isArray(i)&&Array.isArray(a[r])?a[r]=[...i,...a[r]]:Sa(i)&&Sa(a[r])?a[r]=xr(i,a[r],(o?`${o}.`:"")+r.toString(),l):a[r]=i))}return a}function a4(n){return(...s)=>s.reduce((o,l)=>xr(o,l,"",n),{})}const r4=a4(),Sy=1/60*1e3,i4=typeof performance<"u"?()=>performance.now():()=>Date.now(),Fy=typeof window<"u"?n=>window.requestAnimationFrame(n):n=>setTimeout(()=>n(i4()),Sy);function c4(n){let s=[],o=[],l=0,a=!1,r=!1;const i=new WeakSet,c={schedule:(p,d=!1,u=!1)=>{const y=u&&a,h=y?s:o;return d&&i.add(p),h.indexOf(p)===-1&&(h.push(p),y&&a&&(l=s.length)),p},cancel:p=>{const d=o.indexOf(p);d!==-1&&o.splice(d,1),i.delete(p)},process:p=>{if(a){r=!0;return}if(a=!0,[s,o]=[o,s],o.length=0,l=s.length,l)for(let d=0;d<l;d++){const u=s[d];u(p),i.has(u)&&(c.schedule(u),n())}a=!1,r&&(r=!1,c.process(p))}};return c}const p4=40;let wr=!0,Pt=!1,Er=!1;const Fo={delta:0,timestamp:0},jt=["read","update","preRender","render","postRender"],la=jt.reduce((n,s)=>(n[s]=c4(()=>Pt=!0),n),{}),Ir=jt.reduce((n,s)=>{const o=la[s];return n[s]=(l,a=!1,r=!1)=>(Pt||y4(),o.schedule(l,a,r)),n},{}),d4=jt.reduce((n,s)=>(n[s]=la[s].cancel,n),{});jt.reduce((n,s)=>(n[s]=()=>la[s].process(Fo),n),{});const u4=n=>la[n].process(Fo),Py=n=>{Pt=!1,Fo.delta=wr?Sy:Math.max(Math.min(n-Fo.timestamp,p4),1),Fo.timestamp=n,Er=!0,jt.forEach(u4),Er=!1,Pt&&(wr=!1,Fy(Py))},y4=()=>{Pt=!0,wr=!0,Er||Fy(Py)},Ty=()=>Fo;function My(n,s){var o={};for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&s.indexOf(l)<0&&(o[l]=n[l]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,l=Object.getOwnPropertySymbols(n);a<l.length;a++)s.indexOf(l[a])<0&&Object.prototype.propertyIsEnumerable.call(n,l[a])&&(o[l[a]]=n[l[a]]);return o}var Di=function(){},Tt=function(){};Di=function(n,s){!n&&typeof console<"u"&&console.warn(s)},Tt=function(n,s){if(!n)throw new Error(s)};const $r=(n,s,o)=>Math.min(Math.max(o,n),s),Fa=.001,h4=.01,$p=10,f4=.05,m4=1;function g4({duration:n=800,bounce:s=.25,velocity:o=0,mass:l=1}){let a,r;Di(n<=$p*1e3,"Spring duration must be 10 seconds or less");let i=1-s;i=$r(f4,m4,i),n=$r(h4,$p,n/1e3),i<1?(a=d=>{const u=d*i,y=u*n,h=u-o,m=Sr(d,i),f=Math.exp(-y);return Fa-h/m*f},r=d=>{const y=d*i*n,h=y*o+o,m=Math.pow(i,2)*Math.pow(d,2)*n,f=Math.exp(-y),B=Sr(Math.pow(d,2),i);return(-a(d)+Fa>0?-1:1)*((h-m)*f)/B}):(a=d=>{const u=Math.exp(-d*n),y=(d-o)*n+1;return-Fa+u*y},r=d=>{const u=Math.exp(-d*n),y=(o-d)*(n*n);return u*y});const c=5/n,p=A4(a,r,c);if(n=n*1e3,isNaN(p))return{stiffness:100,damping:10,duration:n};{const d=Math.pow(p,2)*l;return{stiffness:d,damping:i*2*Math.sqrt(l*d),duration:n}}}const B4=12;function A4(n,s,o){let l=o;for(let a=1;a<B4;a++)l=l-n(l)/s(l);return l}function Sr(n,s){return n*Math.sqrt(1-s*s)}const C4=["duration","bounce"],b4=["stiffness","damping","mass"];function Sp(n,s){return s.some(o=>n[o]!==void 0)}function k4(n){let s=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},n);if(!Sp(n,b4)&&Sp(n,C4)){const o=g4(n);s=Object.assign(Object.assign(Object.assign({},s),o),{velocity:0,mass:1}),s.isResolvedFromDuration=!0}return s}function vi(n){var{from:s=0,to:o=1,restSpeed:l=2,restDelta:a}=n,r=My(n,["from","to","restSpeed","restDelta"]);const i={done:!1,value:s};let{stiffness:c,damping:p,mass:d,velocity:u,duration:y,isResolvedFromDuration:h}=k4(r),m=Fp,f=Fp;function B(){const A=u?-(u/1e3):0,D=o-s,b=p/(2*Math.sqrt(c*d)),_=Math.sqrt(c/d)/1e3;if(a===void 0&&(a=Math.min(Math.abs(o-s)/100,.4)),b<1){const w=Sr(_,b);m=P=>{const W=Math.exp(-b*_*P);return o-W*((A+b*_*D)/w*Math.sin(w*P)+D*Math.cos(w*P))},f=P=>{const W=Math.exp(-b*_*P);return b*_*W*(Math.sin(w*P)*(A+b*_*D)/w+D*Math.cos(w*P))-W*(Math.cos(w*P)*(A+b*_*D)-w*D*Math.sin(w*P))}}else if(b===1)m=w=>o-Math.exp(-_*w)*(D+(A+_*D)*w);else{const w=_*Math.sqrt(b*b-1);m=P=>{const W=Math.exp(-b*_*P),K=Math.min(w*P,300);return o-W*((A+b*_*D)*Math.sinh(K)+w*D*Math.cosh(K))/w}}}return B(),{next:A=>{const D=m(A);if(h)i.done=A>=y;else{const b=f(A)*1e3,_=Math.abs(b)<=l,w=Math.abs(o-D)<=a;i.done=_&&w}return i.value=i.done?o:D,i},flipTarget:()=>{u=-u,[s,o]=[o,s],B()}}}vi.needsInterpolation=(n,s)=>typeof n=="string"||typeof s=="string";const Fp=n=>0,Oy=(n,s,o)=>{const l=s-n;return l===0?1:(o-n)/l},xi=(n,s,o)=>-o*n+o*s+n,Ny=(n,s)=>o=>Math.max(Math.min(o,s),n),yt=n=>n%1?Number(n.toFixed(5)):n,Mt=/(-)?([\d]*\.?[\d])+/g,Fr=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,_4=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Ht(n){return typeof n=="string"}const Gt={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},ht=Object.assign(Object.assign({},Gt),{transform:Ny(0,1)}),ll=Object.assign(Object.assign({},Gt),{default:1}),wi=n=>({test:s=>Ht(s)&&s.endsWith(n)&&s.split(" ").length===1,parse:parseFloat,transform:s=>`${s}${n}`}),Vs=wi("deg"),ft=wi("%"),Ae=wi("px"),Pp=Object.assign(Object.assign({},ft),{parse:n=>ft.parse(n)/100,transform:n=>ft.transform(n*100)}),Ei=(n,s)=>o=>Boolean(Ht(o)&&_4.test(o)&&o.startsWith(n)||s&&Object.prototype.hasOwnProperty.call(o,s)),Ly=(n,s,o)=>l=>{if(!Ht(l))return l;const[a,r,i,c]=l.match(Mt);return{[n]:parseFloat(a),[s]:parseFloat(r),[o]:parseFloat(i),alpha:c!==void 0?parseFloat(c):1}},Js={test:Ei("hsl","hue"),parse:Ly("hue","saturation","lightness"),transform:({hue:n,saturation:s,lightness:o,alpha:l=1})=>"hsla("+Math.round(n)+", "+ft.transform(yt(s))+", "+ft.transform(yt(o))+", "+yt(ht.transform(l))+")"},D4=Ny(0,255),Pa=Object.assign(Object.assign({},Gt),{transform:n=>Math.round(D4(n))}),ws={test:Ei("rgb","red"),parse:Ly("red","green","blue"),transform:({red:n,green:s,blue:o,alpha:l=1})=>"rgba("+Pa.transform(n)+", "+Pa.transform(s)+", "+Pa.transform(o)+", "+yt(ht.transform(l))+")"};function v4(n){let s="",o="",l="",a="";return n.length>5?(s=n.substr(1,2),o=n.substr(3,2),l=n.substr(5,2),a=n.substr(7,2)):(s=n.substr(1,1),o=n.substr(2,1),l=n.substr(3,1),a=n.substr(4,1),s+=s,o+=o,l+=l,a+=a),{red:parseInt(s,16),green:parseInt(o,16),blue:parseInt(l,16),alpha:a?parseInt(a,16)/255:1}}const Pr={test:Ei("#"),parse:v4,transform:ws.transform},gn={test:n=>ws.test(n)||Pr.test(n)||Js.test(n),parse:n=>ws.test(n)?ws.parse(n):Js.test(n)?Js.parse(n):Pr.parse(n),transform:n=>Ht(n)?n:n.hasOwnProperty("red")?ws.transform(n):Js.transform(n)},Wy="${c}",Ry="${n}";function x4(n){var s,o,l,a;return isNaN(n)&&Ht(n)&&((o=(s=n.match(Mt))===null||s===void 0?void 0:s.length)!==null&&o!==void 0?o:0)+((a=(l=n.match(Fr))===null||l===void 0?void 0:l.length)!==null&&a!==void 0?a:0)>0}function qy(n){typeof n=="number"&&(n=`${n}`);const s=[];let o=0;const l=n.match(Fr);l&&(o=l.length,n=n.replace(Fr,Wy),s.push(...l.map(gn.parse)));const a=n.match(Mt);return a&&(n=n.replace(Mt,Ry),s.push(...a.map(Gt.parse))),{values:s,numColors:o,tokenised:n}}function Vy(n){return qy(n).values}function Uy(n){const{values:s,numColors:o,tokenised:l}=qy(n),a=s.length;return r=>{let i=l;for(let c=0;c<a;c++)i=i.replace(c<o?Wy:Ry,c<o?gn.transform(r[c]):yt(r[c]));return i}}const w4=n=>typeof n=="number"?0:n;function E4(n){const s=Vy(n);return Uy(n)(s.map(w4))}const Kt={test:x4,parse:Vy,createTransformer:Uy,getAnimatableNone:E4},I4=new Set(["brightness","contrast","saturate","opacity"]);function $4(n){let[s,o]=n.slice(0,-1).split("(");if(s==="drop-shadow")return n;const[l]=o.match(Mt)||[];if(!l)return n;const a=o.replace(l,"");let r=I4.has(s)?1:0;return l!==o&&(r*=100),s+"("+r+a+")"}const S4=/([a-z-]*)\(.*?\)/g,Tr=Object.assign(Object.assign({},Kt),{getAnimatableNone:n=>{const s=n.match(S4);return s?s.map($4).join(" "):n}});function Ta(n,s,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?n+(s-n)*6*o:o<1/2?s:o<2/3?n+(s-n)*(2/3-o)*6:n}function Tp({hue:n,saturation:s,lightness:o,alpha:l}){n/=360,s/=100,o/=100;let a=0,r=0,i=0;if(!s)a=r=i=o;else{const c=o<.5?o*(1+s):o+s-o*s,p=2*o-c;a=Ta(p,c,n+1/3),r=Ta(p,c,n),i=Ta(p,c,n-1/3)}return{red:Math.round(a*255),green:Math.round(r*255),blue:Math.round(i*255),alpha:l}}const F4=(n,s,o)=>{const l=n*n,a=s*s;return Math.sqrt(Math.max(0,o*(a-l)+l))},P4=[Pr,ws,Js],Mp=n=>P4.find(s=>s.test(n)),Op=n=>`'${n}' is not an animatable color. Use the equivalent color code instead.`,jy=(n,s)=>{let o=Mp(n),l=Mp(s);Tt(!!o,Op(n)),Tt(!!l,Op(s));let a=o.parse(n),r=l.parse(s);o===Js&&(a=Tp(a),o=ws),l===Js&&(r=Tp(r),l=ws);const i=Object.assign({},a);return c=>{for(const p in i)p!=="alpha"&&(i[p]=F4(a[p],r[p],c));return i.alpha=xi(a.alpha,r.alpha,c),o.transform(i)}},T4=n=>typeof n=="number",M4=(n,s)=>o=>s(n(o)),Hy=(...n)=>n.reduce(M4);function Gy(n,s){return T4(n)?o=>xi(n,s,o):gn.test(n)?jy(n,s):zy(n,s)}const Ky=(n,s)=>{const o=[...n],l=o.length,a=n.map((r,i)=>Gy(r,s[i]));return r=>{for(let i=0;i<l;i++)o[i]=a[i](r);return o}},O4=(n,s)=>{const o=Object.assign(Object.assign({},n),s),l={};for(const a in o)n[a]!==void 0&&s[a]!==void 0&&(l[a]=Gy(n[a],s[a]));return a=>{for(const r in l)o[r]=l[r](a);return o}};function Np(n){const s=Kt.parse(n),o=s.length;let l=0,a=0,r=0;for(let i=0;i<o;i++)l||typeof s[i]=="number"?l++:s[i].hue!==void 0?r++:a++;return{parsed:s,numNumbers:l,numRGB:a,numHSL:r}}const zy=(n,s)=>{const o=Kt.createTransformer(s),l=Np(n),a=Np(s);return l.numHSL===a.numHSL&&l.numRGB===a.numRGB&&l.numNumbers>=a.numNumbers?Hy(Ky(l.parsed,a.parsed),o):(Di(!0,`Complex values '${n}' and '${s}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),i=>`${i>0?s:n}`)},N4=(n,s)=>o=>xi(n,s,o);function L4(n){if(typeof n=="number")return N4;if(typeof n=="string")return gn.test(n)?jy:zy;if(Array.isArray(n))return Ky;if(typeof n=="object")return O4}function W4(n,s,o){const l=[],a=o||L4(n[0]),r=n.length-1;for(let i=0;i<r;i++){let c=a(n[i],n[i+1]);if(s){const p=Array.isArray(s)?s[i]:s;c=Hy(p,c)}l.push(c)}return l}function R4([n,s],[o]){return l=>o(Oy(n,s,l))}function q4(n,s){const o=n.length,l=o-1;return a=>{let r=0,i=!1;if(a<=n[0]?i=!0:a>=n[l]&&(r=l-1,i=!0),!i){let p=1;for(;p<o&&!(n[p]>a||p===l);p++);r=p-1}const c=Oy(n[r],n[r+1],a);return s[r](c)}}function Yy(n,s,{clamp:o=!0,ease:l,mixer:a}={}){const r=n.length;Tt(r===s.length,"Both input and output ranges must be the same length"),Tt(!l||!Array.isArray(l)||l.length===r-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),n[0]>n[r-1]&&(n=[].concat(n),s=[].concat(s),n.reverse(),s.reverse());const i=W4(s,l,a),c=r===2?R4(n,i):q4(n,i);return o?p=>c($r(n[0],n[r-1],p)):c}const aa=n=>s=>1-n(1-s),Ii=n=>s=>s<=.5?n(2*s)/2:(2-n(2*(1-s)))/2,V4=n=>s=>Math.pow(s,n),Zy=n=>s=>s*s*((n+1)*s-n),U4=n=>{const s=Zy(n);return o=>(o*=2)<1?.5*s(o):.5*(2-Math.pow(2,-10*(o-1)))},Qy=1.525,j4=4/11,H4=8/11,G4=9/10,Jy=n=>n,$i=V4(2),K4=aa($i),Xy=Ii($i),eh=n=>1-Math.sin(Math.acos(n)),nh=aa(eh),z4=Ii(nh),Si=Zy(Qy),Y4=aa(Si),Z4=Ii(Si),Q4=U4(Qy),J4=4356/361,X4=35442/1805,e6=16061/1805,Ol=n=>{if(n===1||n===0)return n;const s=n*n;return n<j4?7.5625*s:n<H4?9.075*s-9.9*n+3.4:n<G4?J4*s-X4*n+e6:10.8*n*n-20.52*n+10.72},n6=aa(Ol),s6=n=>n<.5?.5*(1-Ol(1-n*2)):.5*Ol(n*2-1)+.5;function o6(n,s){return n.map(()=>s||Xy).splice(0,n.length-1)}function t6(n){const s=n.length;return n.map((o,l)=>l!==0?l/(s-1):0)}function l6(n,s){return n.map(o=>o*s)}function fl({from:n=0,to:s=1,ease:o,offset:l,duration:a=300}){const r={done:!1,value:n},i=Array.isArray(s)?s:[n,s],c=l6(l&&l.length===i.length?l:t6(i),a);function p(){return Yy(c,i,{ease:Array.isArray(o)?o:o6(i,o)})}let d=p();return{next:u=>(r.value=d(u),r.done=u>=a,r),flipTarget:()=>{i.reverse(),d=p()}}}function a6({velocity:n=0,from:s=0,power:o=.8,timeConstant:l=350,restDelta:a=.5,modifyTarget:r}){const i={done:!1,value:s};let c=o*n;const p=s+c,d=r===void 0?p:r(p);return d!==p&&(c=d-s),{next:u=>{const y=-c*Math.exp(-u/l);return i.done=!(y>a||y<-a),i.value=i.done?d:d+y,i},flipTarget:()=>{}}}const Lp={keyframes:fl,spring:vi,decay:a6};function r6(n){if(Array.isArray(n.to))return fl;if(Lp[n.type])return Lp[n.type];const s=new Set(Object.keys(n));return s.has("ease")||s.has("duration")&&!s.has("dampingRatio")?fl:s.has("dampingRatio")||s.has("stiffness")||s.has("mass")||s.has("damping")||s.has("restSpeed")||s.has("restDelta")?vi:fl}function sh(n,s,o=0){return n-s-o}function i6(n,s,o=0,l=!0){return l?sh(s+-n,s,o):s-(n-s)+o}function c6(n,s,o,l){return l?n>=s+o:n<=-o}const p6=n=>{const s=({delta:o})=>n(o);return{start:()=>Ir.update(s,!0),stop:()=>d4.update(s)}};function oh(n){var s,o,{from:l,autoplay:a=!0,driver:r=p6,elapsed:i=0,repeat:c=0,repeatType:p="loop",repeatDelay:d=0,onPlay:u,onStop:y,onComplete:h,onRepeat:m,onUpdate:f}=n,B=My(n,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:A}=B,D,b=0,_=B.duration,w,P=!1,W=!0,K;const F=r6(B);!((o=(s=F).needsInterpolation)===null||o===void 0)&&o.call(s,l,A)&&(K=Yy([0,100],[l,A],{clamp:!1}),l=0,A=100);const H=F(Object.assign(Object.assign({},B),{from:l,to:A}));function le(){b++,p==="reverse"?(W=b%2===0,i=i6(i,_,d,W)):(i=sh(i,_,d),p==="mirror"&&H.flipTarget()),P=!1,m&&m()}function ye(){D.stop(),h&&h()}function Q(Pe){if(W||(Pe=-Pe),i+=Pe,!P){const Ie=H.next(Math.max(0,i));w=Ie.value,K&&(w=K(w)),P=W?Ie.done:i<=0}f==null||f(w),P&&(b===0&&(_??(_=i)),b<c?c6(i,_,d,W)&&le():ye())}function _e(){u==null||u(),D=r(Q),D.start()}return a&&_e(),{stop:()=>{y==null||y(),D.stop()}}}function th(n,s){return s?n*(1e3/s):0}function d6({from:n=0,velocity:s=0,min:o,max:l,power:a=.8,timeConstant:r=750,bounceStiffness:i=500,bounceDamping:c=10,restDelta:p=1,modifyTarget:d,driver:u,onUpdate:y,onComplete:h,onStop:m}){let f;function B(_){return o!==void 0&&_<o||l!==void 0&&_>l}function A(_){return o===void 0?l:l===void 0||Math.abs(o-_)<Math.abs(l-_)?o:l}function D(_){f==null||f.stop(),f=oh(Object.assign(Object.assign({},_),{driver:u,onUpdate:w=>{var P;y==null||y(w),(P=_.onUpdate)===null||P===void 0||P.call(_,w)},onComplete:h,onStop:m}))}function b(_){D(Object.assign({type:"spring",stiffness:i,damping:c,restDelta:p},_))}if(B(n))b({from:n,velocity:s,to:A(n)});else{let _=a*s+n;typeof d<"u"&&(_=d(_));const w=A(_),P=w===o?-1:1;let W,K;const F=H=>{W=K,K=H,s=th(H-W,Ty().delta),(P===1&&H>w||P===-1&&H<w)&&b({from:H,to:w,velocity:s})};D({type:"decay",from:n,velocity:s,timeConstant:r,power:a,restDelta:p,modifyTarget:d,onUpdate:B(_)?F:void 0})}return{stop:()=>f==null?void 0:f.stop()}}const lh=(n,s)=>1-3*s+3*n,ah=(n,s)=>3*s-6*n,rh=n=>3*n,Nl=(n,s,o)=>((lh(s,o)*n+ah(s,o))*n+rh(s))*n,ih=(n,s,o)=>3*lh(s,o)*n*n+2*ah(s,o)*n+rh(s),u6=1e-7,y6=10;function h6(n,s,o,l,a){let r,i,c=0;do i=s+(o-s)/2,r=Nl(i,l,a)-n,r>0?o=i:s=i;while(Math.abs(r)>u6&&++c<y6);return i}const f6=8,m6=.001;function g6(n,s,o,l){for(let a=0;a<f6;++a){const r=ih(s,o,l);if(r===0)return s;const i=Nl(s,o,l)-n;s-=i/r}return s}const ml=11,al=1/(ml-1);function B6(n,s,o,l){if(n===s&&o===l)return Jy;const a=new Float32Array(ml);for(let i=0;i<ml;++i)a[i]=Nl(i*al,n,o);function r(i){let c=0,p=1;const d=ml-1;for(;p!==d&&a[p]<=i;++p)c+=al;--p;const u=(i-a[p])/(a[p+1]-a[p]),y=c+u*al,h=ih(y,n,o);return h>=m6?g6(i,y,n,o):h===0?y:h6(i,c,c+al,n,o)}return i=>i===0||i===1?i:Nl(r(i),s,l)}const Ma={};class A6{constructor(){this.subscriptions=new Set}add(s){return this.subscriptions.add(s),()=>this.subscriptions.delete(s)}notify(s,o,l){if(this.subscriptions.size)for(const a of this.subscriptions)a(s,o,l)}clear(){this.subscriptions.clear()}}const Wp=n=>!isNaN(parseFloat(n));class C6{constructor(s){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new A6,this.canTrackVelocity=!1,this.updateAndNotify=o=>{this.prev=this.current,this.current=o;const{delta:l,timestamp:a}=Ty();this.lastUpdated!==a&&(this.timeDelta=l,this.lastUpdated=a),Ir.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>Ir.postRender(this.velocityCheck),this.velocityCheck=({timestamp:o})=>{this.canTrackVelocity||(this.canTrackVelocity=Wp(this.current)),o!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=s,this.canTrackVelocity=Wp(this.current)}onChange(s){return this.updateSubscribers.add(s)}clearListeners(){this.updateSubscribers.clear()}set(s){this.updateAndNotify(s)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?th(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(s){return this.stop(),new Promise(o=>{const{stop:l}=s(o);this.stopAnimation=l}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function b6(n){return new C6(n)}const{isArray:k6}=Array;function _6(){const n=Z({}),s=l=>{const a=r=>{n.value[r]&&(n.value[r].stop(),n.value[r].destroy(),delete n.value[r])};l?k6(l)?l.forEach(a):a(l):Object.keys(n.value).forEach(a)},o=(l,a,r)=>{if(n.value[l])return n.value[l];const i=b6(a);return i.onChange(c=>r[l]=c),n.value[l]=i,i};return dB(s),{motionValues:n,get:o,stop:s}}const D6=n=>Array.isArray(n),Us=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),Oa=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),v6=n=>({type:"spring",stiffness:550,damping:n===0?100:30,restDelta:.01,restSpeed:10}),Na=()=>({type:"keyframes",ease:"linear",duration:300}),x6=n=>({type:"keyframes",duration:800,values:n}),Rp={default:v6,x:Us,y:Us,z:Us,rotate:Us,rotateX:Us,rotateY:Us,rotateZ:Us,scaleX:Oa,scaleY:Oa,scale:Oa,backgroundColor:Na,color:Na,opacity:Na},ch=(n,s)=>{let o;return D6(s)?o=x6:o=Rp[n]||Rp.default,{to:s,...o(s)}},qp={...Gt,transform:Math.round},ph={color:gn,backgroundColor:gn,outlineColor:gn,fill:gn,stroke:gn,borderColor:gn,borderTopColor:gn,borderRightColor:gn,borderBottomColor:gn,borderLeftColor:gn,borderWidth:Ae,borderTopWidth:Ae,borderRightWidth:Ae,borderBottomWidth:Ae,borderLeftWidth:Ae,borderRadius:Ae,radius:Ae,borderTopLeftRadius:Ae,borderTopRightRadius:Ae,borderBottomRightRadius:Ae,borderBottomLeftRadius:Ae,width:Ae,maxWidth:Ae,height:Ae,maxHeight:Ae,size:Ae,top:Ae,right:Ae,bottom:Ae,left:Ae,padding:Ae,paddingTop:Ae,paddingRight:Ae,paddingBottom:Ae,paddingLeft:Ae,margin:Ae,marginTop:Ae,marginRight:Ae,marginBottom:Ae,marginLeft:Ae,rotate:Vs,rotateX:Vs,rotateY:Vs,rotateZ:Vs,scale:ll,scaleX:ll,scaleY:ll,scaleZ:ll,skew:Vs,skewX:Vs,skewY:Vs,distance:Ae,translateX:Ae,translateY:Ae,translateZ:Ae,x:Ae,y:Ae,z:Ae,perspective:Ae,transformPerspective:Ae,opacity:ht,originX:Pp,originY:Pp,originZ:Ae,zIndex:qp,filter:Tr,WebkitFilter:Tr,fillOpacity:ht,strokeOpacity:ht,numOctaves:qp},Fi=n=>ph[n],dh=(n,s)=>s&&typeof n=="number"&&s.transform?s.transform(n):n;function w6(n,s){let o=Fi(n);return o!==Tr&&(o=Kt),o.getAnimatableNone?o.getAnimatableNone(s):void 0}const E6={linear:Jy,easeIn:$i,easeInOut:Xy,easeOut:K4,circIn:eh,circInOut:z4,circOut:nh,backIn:Si,backInOut:Z4,backOut:Y4,anticipate:Q4,bounceIn:n6,bounceInOut:s6,bounceOut:Ol},Vp=n=>{if(Array.isArray(n)){const[s,o,l,a]=n;return B6(s,o,l,a)}else if(typeof n=="string")return E6[n];return n},I6=n=>Array.isArray(n)&&typeof n[0]!="number",Up=(n,s)=>n==="zIndex"?!1:!!(typeof s=="number"||Array.isArray(s)||typeof s=="string"&&Kt.test(s)&&!s.startsWith("url("));function $6(n){return Array.isArray(n.to)&&n.to[0]===null&&(n.to=[...n.to],n.to[0]=n.from),n}function S6({ease:n,times:s,delay:o,...l}){const a={...l};return s&&(a.offset=s),n&&(a.ease=I6(n)?n.map(Vp):Vp(n)),o&&(a.elapsed=-o),a}function F6(n,s,o){return Array.isArray(s.to)&&(n.duration||(n.duration=800)),$6(s),P6(n)||(n={...n,...ch(o,s.to)}),{...s,...S6(n)}}function P6({delay:n,repeat:s,repeatType:o,repeatDelay:l,from:a,...r}){return!!Object.keys(r).length}function T6(n,s){return n[s]||n.default||n}function M6(n,s,o,l,a){const r=T6(l,n);let i=r.from===null||r.from===void 0?s.get():r.from;const c=Up(n,o);i==="none"&&c&&typeof o=="string"&&(i=w6(n,o));const p=Up(n,i);function d(y){const h={from:i,to:o,velocity:l.velocity?l.velocity:s.getVelocity(),onUpdate:m=>s.set(m)};return r.type==="inertia"||r.type==="decay"?d6({...h,...r}):oh({...F6(r,h,n),onUpdate:m=>{h.onUpdate(m),r.onUpdate&&r.onUpdate(m)},onComplete:()=>{l.onComplete&&l.onComplete(),a&&a(),y&&y()}})}function u(y){return s.set(o),l.onComplete&&l.onComplete(),a&&a(),y&&y(),{stop:()=>{}}}return!p||!c||r.type===!1?u:d}function O6(){const{motionValues:n,stop:s,get:o}=_6();return{motionValues:n,stop:s,push:(a,r,i,c={},p)=>{const d=i[a],u=o(a,d,i);if(c&&c.immediate){u.set(r);return}const y=M6(a,u,r,c,p);u.start(y)}}}function N6(n,s={},{motionValues:o,push:l,stop:a}=O6()){const r=v(s),i=Z(!1);Ce(o,y=>{i.value=Object.values(y).filter(h=>h.isAnimating()).length>0},{immediate:!0,deep:!0});const c=y=>{if(!r||!r[y])throw new Error(`The variant ${y} does not exist.`);return r[y]},p=y=>(typeof y=="string"&&(y=c(y)),Promise.all(Object.entries(y).map(([h,m])=>{if(h!=="transition")return new Promise(f=>l(h,m,n,y.transition||ch(h,y[h]),f))}).filter(Boolean)));return{isAnimating:i,apply:p,set:y=>{const h=ir(y)?y:c(y);Object.entries(h).forEach(([m,f])=>{m!=="transition"&&l(m,f,n,{immediate:!0})})},leave:async y=>{let h;if(r&&(r.leave&&(h=r.leave),!r.leave&&r.initial&&(h=r.initial)),!h){y();return}await p(h),y()},stop:a}}const Pi=typeof window<"u",L6=()=>Pi&&window.onpointerdown===null,W6=()=>Pi&&window.ontouchstart===null,R6=()=>Pi&&window.onmousedown===null;function q6({target:n,state:s,variants:o,apply:l}){const a=v(o),r=Z(!1),i=Z(!1),c=Z(!1),p=S(()=>{let u=[];return a&&(a.hovered&&(u=[...u,...Object.keys(a.hovered)]),a.tapped&&(u=[...u,...Object.keys(a.tapped)]),a.focused&&(u=[...u,...Object.keys(a.focused)])),u}),d=S(()=>{const u={};Object.assign(u,s.value),r.value&&a.hovered&&Object.assign(u,a.hovered),i.value&&a.tapped&&Object.assign(u,a.tapped),c.value&&a.focused&&Object.assign(u,a.focused);for(const y in u)p.value.includes(y)||delete u[y];return u});a.hovered&&(be(n,"mouseenter",()=>r.value=!0),be(n,"mouseleave",()=>{r.value=!1,i.value=!1}),be(n,"mouseout",()=>{r.value=!1,i.value=!1})),a.tapped&&(R6()&&(be(n,"mousedown",()=>i.value=!0),be(n,"mouseup",()=>i.value=!1)),L6()&&(be(n,"pointerdown",()=>i.value=!0),be(n,"pointerup",()=>i.value=!1)),W6()&&(be(n,"touchstart",()=>i.value=!0),be(n,"touchend",()=>i.value=!1))),a.focused&&(be(n,"focus",()=>c.value=!0),be(n,"blur",()=>c.value=!1)),Ce(d,l)}function V6({set:n,target:s,apply:o,variants:l,variant:a}){const r=v(l);Ce(()=>s,()=>{r&&(r.initial&&n("initial"),r.enter&&(a.value="enter"))},{immediate:!0,flush:"pre"})}function U6({state:n,apply:s}){Ce(n,o=>{o&&s(o)},{immediate:!0})}function j6({target:n,variants:s,variant:o}){const l=v(s);l&&(l.visible||l.visibleOnce)&&rA(n,([{isIntersecting:a}])=>{l.visible?a?o.value="visible":o.value="initial":l.visibleOnce&&(a&&o.value!=="visibleOnce"?o.value="visibleOnce":o.value||(o.value="initial"))})}function H6(n,s={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){s.lifeCycleHooks&&V6(n),s.syncVariants&&U6(n),s.visibilityHooks&&j6(n),s.eventListeners&&q6(n)}function uh(n={}){const s=je({...n}),o=Z({});return Ce(s,()=>{const l={};for(const[a,r]of Object.entries(s)){const i=Fi(a),c=dh(r,i);l[a]=c}o.value=l},{immediate:!0,deep:!0}),{state:s,style:o}}function Ti(n,s){Ce(()=>wn(n),o=>{o&&s(o)},{immediate:!0})}const G6={x:"translateX",y:"translateY",z:"translateZ"};function yh(n={},s=!0){const o=je({...n}),l=Z("");return Ce(o,a=>{let r="",i=!1;if(s&&(a.x||a.y||a.z)){const c=[a.x||0,a.y||0,a.z||0].map(Ae.transform).join(",");r+=`translate3d(${c}) `,i=!0}for(const[c,p]of Object.entries(a)){if(s&&(c==="x"||c==="y"||c==="z"))continue;const d=Fi(c),u=dh(p,d);r+=`${G6[c]||c}(${u}) `}s&&!i&&(r+="translateZ(0px) "),l.value=r.trim()},{immediate:!0,deep:!0}),{state:o,transform:l}}const K6=["","X","Y","Z"],z6=["perspective","translate","scale","rotate","skew"],hh=["transformPerspective","x","y","z"];z6.forEach(n=>{K6.forEach(s=>{const o=n+s;hh.push(o)})});const Y6=new Set(hh);function Mi(n){return Y6.has(n)}const Z6=new Set(["originX","originY","originZ"]);function fh(n){return Z6.has(n)}function Q6(n){const s={},o={};return Object.entries(n).forEach(([l,a])=>{Mi(l)||fh(l)?s[l]=a:o[l]=a}),{transform:s,style:o}}function mh(n){const{transform:s,style:o}=Q6(n),{transform:l}=yh(s),{style:a}=uh(o);return l.value&&(a.value.transform=l.value),a.value}function J6(n,s){let o,l;const{state:a,style:r}=uh();return Ti(n,i=>{l=i;for(const c of Object.keys(ph))i.style[c]===null||i.style[c]===""||Mi(c)||fh(c)||(a[c]=i.style[c]);o&&Object.entries(o).forEach(([c,p])=>i.style[c]=p),s&&s(a)}),Ce(r,i=>{if(!l){o=i;return}for(const c in i)l.style[c]=i[c]},{immediate:!0}),{style:a}}function X6(n){const s=n.trim().split(/\) |\)/);if(s.length===1)return{};const o=l=>l.endsWith("px")||l.endsWith("deg")?parseFloat(l):isNaN(Number(l))?Number(l):l;return s.reduce((l,a)=>{if(!a)return l;const[r,i]=a.split("("),p=i.split(",").map(u=>o(u.endsWith(")")?u.replace(")",""):u.trim())),d=p.length===1?p[0]:p;return{...l,[r]:d}},{})}function e0(n,s){Object.entries(X6(s)).forEach(([o,l])=>{const a=["x","y","z"];if(o==="translate3d"){if(l===0){a.forEach(r=>n[r]=0);return}l.forEach((r,i)=>n[a[i]]=r);return}if(l=parseFloat(l),o==="translateX"){n.x=l;return}if(o==="translateY"){n.y=l;return}if(o==="translateZ"){n.z=l;return}n[o]=l})}function n0(n,s){let o,l;const{state:a,transform:r}=yh();return Ti(n,i=>{l=i,i.style.transform&&e0(a,i.style.transform),o&&(i.style.transform=o),s&&s(a)}),Ce(r,i=>{if(!l){o=i;return}l.style.transform=i},{immediate:!0}),{transform:a}}function s0(n,s){const o=je({}),l=i=>Object.entries(i).forEach(([c,p])=>o[c]=p),{style:a}=J6(n,l),{transform:r}=n0(n,l);return Ce(o,i=>{Object.entries(i).forEach(([c,p])=>{const d=Mi(c)?r:a;d[c]&&d[c]===p||(d[c]=p)})},{immediate:!0,deep:!0}),Ti(n,()=>s&&l(s)),{motionProperties:o,style:a,transform:r}}function o0(n={}){const s=v(n),o=Z();return{state:S(()=>{if(o.value)return s[o.value]}),variant:o}}function gh(n,s={},o){const{motionProperties:l}=s0(n),{variant:a,state:r}=o0(s),i=N6(l,s),c={target:n,variant:a,variants:s,state:r,motionProperties:l,...i};return H6(c,o),c}const t0=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],l0=(n,s)=>{const o=n.props?n.props:n.data&&n.data.attrs?n.data.attrs:{};o&&(o.variants&&ir(o.variants)&&(s.value={...s.value,...o.variants}),t0.forEach(l=>{if(l==="delay"){if(o&&o[l]&&Y8(o[l])){const a=o[l];s&&s.value&&(s.value.enter&&(s.value.enter.transition||(s.value.enter.transition={}),s.value.enter.transition={delay:a,...s.value.enter.transition}),s.value.visible&&(s.value.visible.transition||(s.value.visible.transition={}),s.value.visible.transition={delay:a,...s.value.visible.transition}),s.value.visibleOnce&&(s.value.visibleOnce.transition||(s.value.visibleOnce.transition={}),s.value.visibleOnce.transition={delay:a,...s.value.visibleOnce.transition}))}return}l==="visible-once"&&(l="visibleOnce"),o&&o[l]&&ir(o[l])&&(s.value[l]=o[l])}))},La=n=>({created:(o,l,a)=>{const r=l.value&&typeof l.value=="string"?l.value:a.key;r&&Ma[r]&&Ma[r].stop();const i=Z(n||{});typeof l.value=="object"&&(i.value=l.value),l0(a,i);const c=gh(o,i);o.motionInstance=c,r&&(Ma[r]=c)},getSSRProps(o,l){let{initial:a}=o.value||l&&(l==null?void 0:l.props)||{};a=v(a);const r=r4((n==null?void 0:n.initial)||{},a||{});return!r||Object.keys(r).length===0?void 0:{style:mh(r)}}}),a0={initial:{opacity:0},enter:{opacity:1}},r0={initial:{opacity:0},visible:{opacity:1}},i0={initial:{opacity:0},visibleOnce:{opacity:1}},c0={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},p0={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},d0={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},u0={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},y0={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},h0={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},f0={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},m0={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},g0={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},B0={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},A0={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},C0={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},b0={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},k0={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},_0={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},D0={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},v0={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},x0={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},w0={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},E0={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},I0={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},$0={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},S0={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},F0={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},P0={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},T0={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},M0={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Mr={__proto__:null,fade:a0,fadeVisible:r0,fadeVisibleOnce:i0,pop:c0,popVisible:p0,popVisibleOnce:d0,rollBottom:b0,rollLeft:u0,rollRight:f0,rollTop:B0,rollVisibleBottom:k0,rollVisibleLeft:y0,rollVisibleOnceBottom:_0,rollVisibleOnceLeft:h0,rollVisibleOnceRight:g0,rollVisibleOnceTop:C0,rollVisibleRight:m0,rollVisibleTop:A0,slideBottom:P0,slideLeft:D0,slideRight:w0,slideTop:$0,slideVisibleBottom:T0,slideVisibleLeft:v0,slideVisibleOnceBottom:M0,slideVisibleOnceLeft:x0,slideVisibleOnceRight:I0,slideVisibleOnceTop:F0,slideVisibleRight:E0,slideVisibleTop:S0},O0=Me({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(n){var c;const s=eg(),o=je({});if(!n.is&&!s.default)return()=>hn("div",{});const l=S(()=>{let p;return n.preset&&(p=Mr[n.preset]),p}),a=S(()=>({initial:n.initial,enter:n.enter,leave:n.leave,visible:n.visible,visibleOnce:n.visibleOnce,hovered:n.hovered,tapped:n.tapped,focused:n.focused})),r=S(()=>{const p={...a.value,...l.value||{},...n.variants||{}};return n.delay&&(p.enter.transition={...p.enter.transition},p.enter.transition.delay=parseInt(n.delay)),p}),i=S(()=>{if(!n.is)return;let p=n.is;return typeof i.value=="string"&&!sd(p)&&(p=vl(p)),p});if(((c=process==null?void 0:process.env)==null?void 0:c.NODE_ENV)==="development"||process!=null&&process.dev){const p=d=>{var u;(u=d.variants)!=null&&u.initial&&d.set("initial"),setTimeout(()=>{var y,h,m;(y=d.variants)!=null&&y.enter&&d.apply("enter"),(h=d.variants)!=null&&h.visible&&d.apply("visible"),(m=d.variants)!=null&&m.visibleOnce&&d.apply("visibleOnce")},10)};Zl(()=>Object.entries(o).forEach(([d,u])=>p(u)))}return{slots:s,component:i,motionConfig:r,instances:o}},render({slots:n,motionConfig:s,instances:o,component:l}){var c;const a=mh(s.initial||{}),r=(p,d)=>(p.props||(p.props={}),p.props.style=a,p.props.onVnodeMounted=({el:u})=>{const y=gh(u,s);o[d]=y},p);if(l){const p=hn(l,void 0,n);return r(p,0),p}return(((c=n.default)==null?void 0:c.call(n))||[]).map((p,d)=>r(p,d))}});function N0(n){const s="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",o="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",l=new RegExp(s.split("").join("|"),"g");return n.toString().replace(/[A-Z]/g,a=>`-${a}`).toLowerCase().replace(/\s+/g,"-").replace(l,a=>o.charAt(s.indexOf(a))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const L0={install(n,s){if(n.directive("motion",La()),n.component("Motion",O0),!s||s&&!s.excludePresets)for(const o in Mr){const l=Mr[o];n.directive(`motion-${N0(o)}`,La(l))}if(s&&s.directives)for(const o in s.directives){const l=s.directives[o];l.initial,n.directive(`motion-${o}`,La(l))}}};var jp;const mt=typeof window<"u",W0=Object.prototype.toString,R0=n=>W0.call(n)==="[object Object]";mt&&((jp=window==null?void 0:window.navigator)!=null&&jp.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function q0(n){return Ur()?(dd(n),!0):!1}function V0(n){var s;const o=v(n);return(s=o==null?void 0:o.$el)!=null?s:o}const U0=mt?window:void 0,Or=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Nr="__vueuse_ssr_handlers__";Or[Nr]=Or[Nr]||{};Or[Nr];function j0(n,s={}){const{immediate:o=!0,window:l=U0}=s,a=Z(!1);let r=null;function i(){!a.value||!l||(n(),r=l.requestAnimationFrame(i))}function c(){!a.value&&l&&(a.value=!0,i())}function p(){a.value=!1,r!=null&&l&&(l.cancelAnimationFrame(r),r=null)}return o&&c(),q0(p),{isActive:a,pause:p,resume:c}}var Hp;(function(n){n.UP="UP",n.RIGHT="RIGHT",n.DOWN="DOWN",n.LEFT="LEFT",n.NONE="NONE"})(Hp||(Hp={}));const ra="vue-starport-injection",Bh="vue-starport-options",H0={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},Ah={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var G0=Object.defineProperty,Ll=Object.getOwnPropertySymbols,Ch=Object.prototype.hasOwnProperty,bh=Object.prototype.propertyIsEnumerable,Gp=(n,s,o)=>s in n?G0(n,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[s]=o,K0=(n,s)=>{for(var o in s||(s={}))Ch.call(s,o)&&Gp(n,o,s[o]);if(Ll)for(var o of Ll(s))bh.call(s,o)&&Gp(n,o,s[o]);return n},Kp=(n,s)=>{var o={};for(var l in n)Ch.call(n,l)&&s.indexOf(l)<0&&(o[l]=n[l]);if(n!=null&&Ll)for(var l of Ll(n))s.indexOf(l)<0&&bh.call(n,l)&&(o[l]=n[l]);return o};const z0=Me({name:"StarportProxy",props:K0({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},Ah),setup(n,s){const o=T(ra),l=S(()=>o.getInstance(n.port,n.component)),a=Z(),r=l.value.generateId(),i=Z(!1);return l.value.isVisible||(l.value.land(),i.value=!0),yo(async()=>{if(l.value.el){console.error(`[Vue Starport] Multiple proxies of "${l.value.componentName}" with port "${n.port}" detected. The later one will be ignored.`);return}if(l.value.el=a.value,await sn(),i.value=!0,l.value.rect.update(),l.value.rect.width===0||l.value.rect.height===0){const c=l.value.rect.width===0?"width":"height";console.warn(`[Vue Starport] The proxy of component "${l.value.componentName}" (port "${n.port}") has no ${c} on initial render, have you set the size for it?`),console.warn("element:",l.value.el),console.warn("rect:",l.value.rect)}}),Rt(async()=>{l.value.rect.update(),l.value.liftOff(),l.value.el=void 0,i.value=!1,!l.value.options.keepAlive&&(await sn(),await sn(),!l.value.el&&o.dispose(l.value.port))}),Ce(()=>n,async()=>{l.value.props&&await sn();const c=n,{props:p}=c,d=Kp(c,["props"]);l.value.props=p||{},l.value.setLocalOptions(d)},{deep:!0,immediate:!0}),()=>{const c=n,{initialProps:p,mountedProps:d}=c,u=Kp(c,["initialProps","mountedProps"]),y=J(u,(i.value?d:p)||{});return hn("div",J(y,{id:r,ref:a,"data-starport-proxy":l.value.componentId,"data-starport-landed":l.value.isLanded?"true":void 0,"data-starport-floating":l.value.isLanded?void 0:"true"}),s.slots.default?hn(s.slots.default):void 0)}}});var Y0=Object.defineProperty,Z0=Object.defineProperties,Q0=Object.getOwnPropertyDescriptors,zp=Object.getOwnPropertySymbols,J0=Object.prototype.hasOwnProperty,X0=Object.prototype.propertyIsEnumerable,Yp=(n,s,o)=>s in n?Y0(n,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[s]=o,ex=(n,s)=>{for(var o in s||(s={}))J0.call(s,o)&&Yp(n,o,s[o]);if(zp)for(var o of zp(s))X0.call(s,o)&&Yp(n,o,s[o]);return n},nx=(n,s)=>Z0(n,Q0(s));const sx=Me({name:"Starport",inheritAttrs:!0,props:Ah,setup(n,s){const o=Z(!1);return yo(()=>{if(o.value=!0,!T(ra))throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.")}),()=>{var i,c;const l=(c=(i=s.slots).default)==null?void 0:c.call(i);if(!l)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(l.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${l.length}`);const a=l[0];let r=a.type;return(!R0(r)||hs(r))&&(r={render(){return l}}),hn(z0,nx(ex({},n),{key:n.port,component:jl(r),props:a.props}))}}});function ox(n){const s=je({height:0,width:0,left:0,top:0,update:l,listen:r,pause:i,margin:"0px",padding:"0px"}),o=mt?document.documentElement||document.body:void 0;function l(){if(!mt)return;const c=V0(n);if(!c)return;const{height:p,width:d,left:u,top:y}=c.getBoundingClientRect(),h=window.getComputedStyle(c),m=h.margin,f=h.padding;Object.assign(s,{height:p,width:d,left:u,top:o.scrollTop+y,margin:m,padding:f})}const a=j0(l,{immediate:!1});function r(){mt&&(l(),a.resume())}function i(){a.pause()}return s}let tx=(n,s=21)=>(o=s)=>{let l="",a=o;for(;a--;)l+=n[Math.random()*n.length|0];return l};const Zp=tx("abcdefghijklmnopqrstuvwxyz",5);function Qp(n){return n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function lx(n){var s;return n.name||((s=n.__file)==null?void 0:s.split(/[\/\\.]/).slice(-2)[0])||""}var ax=Object.defineProperty,Jp=Object.getOwnPropertySymbols,rx=Object.prototype.hasOwnProperty,ix=Object.prototype.propertyIsEnumerable,Xp=(n,s,o)=>s in n?ax(n,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[s]=o,Wa=(n,s)=>{for(var o in s||(s={}))rx.call(s,o)&&Xp(n,o,s[o]);if(Jp)for(var o of Jp(s))ix.call(s,o)&&Xp(n,o,s[o]);return n};function cx(n,s,o={}){const l=lx(s),a=Qp(l)||Zp(),r=Z(),i=Z(null),c=Z(!1),p=Z(!1),d=Lh(!0),u=Z({}),y=S(()=>Wa(Wa(Wa({},H0),o),u.value)),h=Z(0);let m;d.run(()=>{m=ox(r),Ce(r,async D=>{D&&(p.value=!0),await sn(),r.value||(p.value=!1)})});const f=Qp(n);function B(){return`starport-${a}-${f}-${Zp()}`}const A=B();return je({el:r,id:A,port:n,props:i,rect:m,scope:d,isLanded:c,isVisible:p,options:y,liftOffTime:h,component:s,componentName:l,componentId:a,generateId:B,setLocalOptions(D={}){u.value=JSON.parse(JSON.stringify(D))},elRef(){return r},liftOff(){c.value&&(c.value=!1,h.value=Date.now(),m.listen())},land(){c.value||(c.value=!0,m.pause())}})}function px(n){const s=je(new Map);function o(a,r){let i=s.get(a);return i||(i=cx(a,r,n),s.set(a,i)),i.component=r,i}function l(a){var r;(r=s.get(a))==null||r.scope.stop(),s.delete(a)}return{portMap:s,dispose:l,getInstance:o}}var dx=Object.defineProperty,ux=Object.defineProperties,yx=Object.getOwnPropertyDescriptors,ed=Object.getOwnPropertySymbols,hx=Object.prototype.hasOwnProperty,fx=Object.prototype.propertyIsEnumerable,nd=(n,s,o)=>s in n?dx(n,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[s]=o,mx=(n,s)=>{for(var o in s||(s={}))hx.call(s,o)&&nd(n,o,s[o]);if(ed)for(var o of ed(s))fx.call(s,o)&&nd(n,o,s[o]);return n},gx=(n,s)=>ux(n,yx(s));const Bx=Me({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(n){const s=T(ra);if(!s)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const o=S(()=>s.getInstance(n.port,n.component)),l=S(()=>{var i;return((i=o.value.el)==null?void 0:i.id)||o.value.id}),a=S(()=>{const i=Date.now()-o.value.liftOffTime,c=Math.max(0,o.value.options.duration-i),p=o.value.rect,d={position:"absolute",left:0,top:0,width:`${p.width}px`,height:`${p.height}px`,margin:p.margin,padding:p.padding,transform:`translate3d(${p.left}px,${p.top}px,0px)`};return!o.value.isVisible||!o.value.el?gx(mx({},d),{zIndex:-1,display:"none"}):(o.value.isLanded?d.display="none":Object.assign(d,{transitionProperty:"all",transitionDuration:`${c}ms`,transitionTimingFunction:o.value.options.easing}),d)}),r={onTransitionend(i){o.value.isLanded||console.warn(`[Vue Starport] Transition duration of component "${o.value.componentName}" is too short (${i.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${o.value.options.duration/1e3}s).`)}};return()=>{const i=!!(o.value.isLanded&&o.value.el);return hn("div",{style:a.value,"data-starport-craft":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true",onTransitionend:o.value.land},hn(Rm,{to:i?`#${l.value}`:"body",disabled:!i},hn(o.value.component,J(r,o.value.props))))}}}),Ax=Me({name:"StarportCarrier",setup(n,{slots:s}){const o=px(T(Bh,{}));return $n().appContext.app.provide(ra,o),()=>{var a;return[(a=s.default)==null?void 0:a.call(s),Array.from(o.portMap.entries()).map(([r,{component:i}])=>hn(Bx,{key:r,port:r,component:i}))]}}});function Cx(n={}){return{install(s){s.provide(Bh,n),s.component("Starport",sx),s.component("StarportCarrier",Ax)}}}function bx(n){function s(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}s(),window.addEventListener("resize",s),n.app.use(L0),n.app.use(Cx({keepAlive:!0}))}function _n(n,s,o){var l;return((l=n.instance)==null?void 0:l.$).provides[s]??o}function kx(){return{install(n){n.directive("click",{name:"v-click",mounted(s,o){var u,y,h,m;if(ut.value||(u=_n(o,it))!=null&&u.value)return;const l=_n(o,zs),a=_n(o,rt),r=_n(o,ar),i=o.modifiers.hide!==!1&&o.modifiers.hide!=null,c=o.modifiers.fade!==!1&&o.modifiers.fade!=null,p=((y=l==null?void 0:l.value)==null?void 0:y.length)||0,d=c?$8:ba;if(l&&!((h=l==null?void 0:l.value)!=null&&h.includes(s))&&l.value.push(s),o.value==null&&(o.value=l==null?void 0:l.value.length),!(r!=null&&r.value.has(o.value)))r==null||r.value.set(o.value,[s]);else if(!((m=r==null?void 0:r.value.get(o.value))!=null&&m.includes(s))){const f=(r==null?void 0:r.value.get(o.value))||[];r==null||r.value.set(o.value,[s].concat(f))}s==null||s.classList.toggle(Gs,!0),a&&Ce(a,()=>{const f=(a==null?void 0:a.value)??0,B=o.value!=null?f>=o.value:f>p;s.classList.contains(ka)||s.classList.toggle(d,!B),i!==!1&&i!==void 0&&s.classList.toggle(d,B),s.classList.toggle(Ho,!1);const A=r==null?void 0:r.value.get(f);A==null||A.forEach((D,b)=>{D.classList.toggle(sl,!1),b===A.length-1?D.classList.toggle(Ho,!0):D.classList.toggle(sl,!0)}),s.classList.contains(Ho)||s.classList.toggle(sl,B)},{immediate:!0})},unmounted(s,o){s==null||s.classList.toggle(Gs,!1);const l=_n(o,zs);l!=null&&l.value&&rr(l.value,s)}}),n.directive("after",{name:"v-after",mounted(s,o){var c,p;if(ut.value||(c=_n(o,it))!=null&&c.value)return;const l=_n(o,zs),a=_n(o,rt),r=_n(o,ar),i=l==null?void 0:l.value.length;o.value==null&&(o.value=l==null?void 0:l.value.length),r!=null&&r.value.has(o.value)?(p=r==null?void 0:r.value.get(o.value))==null||p.push(s):r==null||r.value.set(o.value,[s]),s==null||s.classList.toggle(Gs,!0),a&&Ce(a,()=>{const d=(a.value??0)>=(o.value??i??0);s.classList.contains(ka)||s.classList.toggle(ba,!d),s.classList.toggle(Ho,!1),s.classList.contains(Ho)||s.classList.toggle(sl,d)},{immediate:!0})},unmounted(s){s==null||s.classList.toggle(Gs,!0)}}),n.directive("click-hide",{name:"v-click-hide",mounted(s,o){var i,c,p;if(ut.value||(i=_n(o,it))!=null&&i.value)return;const l=_n(o,zs),a=_n(o,rt),r=((c=l==null?void 0:l.value)==null?void 0:c.length)||0;l&&!((p=l==null?void 0:l.value)!=null&&p.includes(s))&&l.value.push(s),s==null||s.classList.toggle(Gs,!0),a&&Ce(a,()=>{const d=(a==null?void 0:a.value)??0,u=o.value!=null?d>=o.value:d>r;s.classList.toggle(ba,u),s.classList.toggle(ka,u)},{immediate:!0})},unmounted(s,o){s==null||s.classList.toggle(Gs,!1);const l=_n(o,zs);l!=null&&l.value&&rr(l.value,s)}})}}}function _x(n,s){const o=xy(n),l=wy(s,o.currentRoute,o.currentPage);return{nav:{...o,...l,downloadPDF:vr,next:Ps,nextSlide:St,openInEditor:Xv,prev:Ts,prevSlide:Ft},configs:Se,themeConfigs:S(()=>Se.themeConfig)}}function Dx(){return{install(n){const s=_x(On,Tn);n.provide(q,je(s))}}}const Wo=Ng(l4);Wo.use(Cn);Wo.use(w8());Wo.use(kx());Wo.use(Dx());bx({app:Wo,router:Cn});Wo.mount("#app");export{Bi as $,Fb as A,Z as B,$x as C,un as D,ze as E,Te as F,R3 as G,Jv as H,Tn as I,Ml as J,Kv as K,$a as L,yo as M,je as N,Ex as O,Sx as P,Ce as Q,x as R,fy as S,Fe as T,dn as U,X3 as V,Et as W,Ea as X,hk as Y,gi as Z,V as _,q as a,Ke as a0,vx as a1,xx as a2,ck as a3,dC as a4,wx as a5,ys as a6,Jo as a7,Qs as a8,Jn as a9,br as aa,w3 as ab,E3 as ac,I3 as ad,S3 as ae,Jl as af,bu as ag,Fx as ah,fn as ai,tl as aj,GC as ak,Su as al,F3 as am,Rt as an,ii as b,Se as c,Me as d,_f as e,ae as f,e as g,v as h,T as i,Ze as j,$y as k,t as l,I as m,on as n,k as o,ve as p,pi as q,qt as r,Hn as s,ao as t,Ix as u,S as v,_a as w,L as x,ry as y,Nb as z};
