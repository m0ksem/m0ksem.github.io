const am=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}};am();function tc(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const lm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",cm=tc(lm);function Ff(n){return!!n||n===""}function wn(n){if(Ie(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=mt(i)?fm(i):wn(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(mt(n))return n;if(gt(n))return n}}const um=/;(?![^(]*\))/g,hm=/:(.+)/;function fm(n){const e={};return n.split(um).forEach(t=>{if(t){const i=t.split(hm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Lr(n){let e="";if(mt(n))e=n;else if(Ie(n))for(let t=0;t<n.length;t++){const i=Lr(n[t]);i&&(e+=i+" ")}else if(gt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}function Do(n){if(!n)return null;let{class:e,style:t}=n;return e&&!mt(e)&&(n.class=Lr(e)),t&&(n.style=wn(t)),n}const dm=n=>mt(n)?n:n==null?"":Ie(n)||gt(n)&&(n.toString===zf||!Ne(n.toString))?JSON.stringify(n,Nf,2):String(n),Nf=(n,e)=>e&&e.__v_isRef?Nf(n,e.value):mr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r])=>(t[`${i} =>`]=r,t),{})}:Bf(e)?{[`Set(${e.size})`]:[...e.values()]}:gt(e)&&!Ie(e)&&!Uf(e)?String(e):e,tt={},pr=[],an=()=>{},pm=()=>!1,mm=/^on[^a-z]/,Zo=n=>mm.test(n),nc=n=>n.startsWith("onUpdate:"),Dt=Object.assign,ic=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},gm=Object.prototype.hasOwnProperty,ke=(n,e)=>gm.call(n,e),Ie=Array.isArray,mr=n=>Ko(n)==="[object Map]",Bf=n=>Ko(n)==="[object Set]",Ne=n=>typeof n=="function",mt=n=>typeof n=="string",rc=n=>typeof n=="symbol",gt=n=>n!==null&&typeof n=="object",Of=n=>gt(n)&&Ne(n.then)&&Ne(n.catch),zf=Object.prototype.toString,Ko=n=>zf.call(n),vm=n=>Ko(n).slice(8,-1),Uf=n=>Ko(n)==="[object Object]",sc=n=>mt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,To=tc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},_m=/-(\w)/g,yr=Qo(n=>n.replace(_m,(e,t)=>t?t.toUpperCase():"")),xm=/\B([A-Z])/g,Pr=Qo(n=>n.replace(xm,"-$1").toLowerCase()),Hf=Qo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Sa=Qo(n=>n?`on${Hf(n)}`:""),fs=(n,e)=>!Object.is(n,e),Ea=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},Fo=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},ym=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let iu;const bm=()=>iu||(iu=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Wt;class Mm{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Wt&&(this.parent=Wt,this.index=(Wt.scopes||(Wt.scopes=[])).push(this)-1)}run(e){if(this.active){const t=Wt;try{return Wt=this,e()}finally{Wt=t}}}on(){Wt=this}off(){Wt=this.parent}stop(e){if(this.active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function wm(n,e=Wt){e&&e.active&&e.effects.push(n)}function Sm(){return Wt}function Em(n){Wt&&Wt.cleanups.push(n)}const oc=n=>{const e=new Set(n);return e.w=0,e.n=0,e},kf=n=>(n.w&oi)>0,Vf=n=>(n.n&oi)>0,Tm=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=oi},Am=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];kf(r)&&!Vf(r)?r.delete(n):e[t++]=r,r.w&=~oi,r.n&=~oi}e.length=t}},Ml=new WeakMap;let es=0,oi=1;const wl=30;let sn;const Ai=Symbol(""),Sl=Symbol("");class ac{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,wm(this,i)}run(){if(!this.active)return this.fn();let e=sn,t=ti;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=sn,sn=this,ti=!0,oi=1<<++es,es<=wl?Tm(this):ru(this),this.fn()}finally{es<=wl&&Am(this),oi=1<<--es,sn=this.parent,ti=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){sn===this?this.deferStop=!0:this.active&&(ru(this),this.onStop&&this.onStop(),this.active=!1)}}function ru(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let ti=!0;const Gf=[];function Ir(){Gf.push(ti),ti=!1}function Dr(){const n=Gf.pop();ti=n===void 0?!0:n}function $t(n,e,t){if(ti&&sn){let i=Ml.get(n);i||Ml.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=oc()),Wf(r)}}function Wf(n,e){let t=!1;es<=wl?Vf(n)||(n.n|=oi,t=!kf(n)):t=!n.has(sn),t&&(n.add(sn),sn.deps.push(n))}function Hn(n,e,t,i,r,s){const o=Ml.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Ie(n))o.forEach((l,c)=>{(c==="length"||c>=i)&&a.push(l)});else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Ie(n)?sc(t)&&a.push(o.get("length")):(a.push(o.get(Ai)),mr(n)&&a.push(o.get(Sl)));break;case"delete":Ie(n)||(a.push(o.get(Ai)),mr(n)&&a.push(o.get(Sl)));break;case"set":mr(n)&&a.push(o.get(Ai));break}if(a.length===1)a[0]&&El(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);El(oc(l))}}function El(n,e){for(const t of Ie(n)?n:[...n])(t!==sn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Cm=tc("__proto__,__v_isRef,__isVue"),jf=new Set(Object.getOwnPropertyNames(Symbol).map(n=>Symbol[n]).filter(rc)),Rm=lc(),Lm=lc(!1,!0),Pm=lc(!0),su=Im();function Im(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=je(this);for(let s=0,o=this.length;s<o;s++)$t(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(je)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Ir();const i=je(this)[e].apply(this,t);return Dr(),i}}),n}function lc(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(n?e?Xm:Jf:e?Yf:Xf).get(i))return i;const o=Ie(i);if(!n&&o&&ke(su,r))return Reflect.get(su,r,s);const a=Reflect.get(i,r,s);return(rc(r)?jf.has(r):Cm(r))||(n||$t(i,"get",r),e)?a:yt(a)?!o||!sc(r)?a.value:a:gt(a)?n?Zf(a):ta(a):a}}const Dm=qf(),Fm=qf(!0);function qf(n=!1){return function(t,i,r,s){let o=t[i];if(ds(o)&&yt(o)&&!yt(r))return!1;if(!n&&!ds(r)&&(Kf(r)||(r=je(r),o=je(o)),!Ie(t)&&yt(o)&&!yt(r)))return o.value=r,!0;const a=Ie(t)&&sc(i)?Number(i)<t.length:ke(t,i),l=Reflect.set(t,i,r,s);return t===je(s)&&(a?fs(r,o)&&Hn(t,"set",i,r):Hn(t,"add",i,r)),l}}function Nm(n,e){const t=ke(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&Hn(n,"delete",e,void 0),i}function Bm(n,e){const t=Reflect.has(n,e);return(!rc(e)||!jf.has(e))&&$t(n,"has",e),t}function Om(n){return $t(n,"iterate",Ie(n)?"length":Ai),Reflect.ownKeys(n)}const $f={get:Rm,set:Dm,deleteProperty:Nm,has:Bm,ownKeys:Om},zm={get:Pm,set(n,e){return!0},deleteProperty(n,e){return!0}},Um=Dt({},$f,{get:Lm,set:Fm}),cc=n=>n,ea=n=>Reflect.getPrototypeOf(n);function zs(n,e,t=!1,i=!1){n=n.__v_raw;const r=je(n),s=je(e);e!==s&&!t&&$t(r,"get",e),!t&&$t(r,"get",s);const{has:o}=ea(r),a=i?cc:t?fc:ps;if(o.call(r,e))return a(n.get(e));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(e)}function Us(n,e=!1){const t=this.__v_raw,i=je(t),r=je(n);return n!==r&&!e&&$t(i,"has",n),!e&&$t(i,"has",r),n===r?t.has(n):t.has(n)||t.has(r)}function Hs(n,e=!1){return n=n.__v_raw,!e&&$t(je(n),"iterate",Ai),Reflect.get(n,"size",n)}function ou(n){n=je(n);const e=je(this);return ea(e).has.call(e,n)||(e.add(n),Hn(e,"add",n,n)),this}function au(n,e){e=je(e);const t=je(this),{has:i,get:r}=ea(t);let s=i.call(t,n);s||(n=je(n),s=i.call(t,n));const o=r.call(t,n);return t.set(n,e),s?fs(e,o)&&Hn(t,"set",n,e):Hn(t,"add",n,e),this}function lu(n){const e=je(this),{has:t,get:i}=ea(e);let r=t.call(e,n);r||(n=je(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&Hn(e,"delete",n,void 0),s}function cu(){const n=je(this),e=n.size!==0,t=n.clear();return e&&Hn(n,"clear",void 0,void 0),t}function ks(n,e){return function(i,r){const s=this,o=s.__v_raw,a=je(o),l=e?cc:n?fc:ps;return!n&&$t(a,"iterate",Ai),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Vs(n,e,t){return function(...i){const r=this.__v_raw,s=je(r),o=mr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?cc:e?fc:ps;return!e&&$t(s,"iterate",l?Sl:Ai),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Gn(n){return function(...e){return n==="delete"?!1:this}}function Hm(){const n={get(s){return zs(this,s)},get size(){return Hs(this)},has:Us,add:ou,set:au,delete:lu,clear:cu,forEach:ks(!1,!1)},e={get(s){return zs(this,s,!1,!0)},get size(){return Hs(this)},has:Us,add:ou,set:au,delete:lu,clear:cu,forEach:ks(!1,!0)},t={get(s){return zs(this,s,!0)},get size(){return Hs(this,!0)},has(s){return Us.call(this,s,!0)},add:Gn("add"),set:Gn("set"),delete:Gn("delete"),clear:Gn("clear"),forEach:ks(!0,!1)},i={get(s){return zs(this,s,!0,!0)},get size(){return Hs(this,!0)},has(s){return Us.call(this,s,!0)},add:Gn("add"),set:Gn("set"),delete:Gn("delete"),clear:Gn("clear"),forEach:ks(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Vs(s,!1,!1),t[s]=Vs(s,!0,!1),e[s]=Vs(s,!1,!0),i[s]=Vs(s,!0,!0)}),[n,t,e,i]}const[km,Vm,Gm,Wm]=Hm();function uc(n,e){const t=e?n?Wm:Gm:n?Vm:km;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(ke(t,r)&&r in i?t:i,r,s)}const jm={get:uc(!1,!1)},qm={get:uc(!1,!0)},$m={get:uc(!0,!1)},Xf=new WeakMap,Yf=new WeakMap,Jf=new WeakMap,Xm=new WeakMap;function Ym(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Jm(n){return n.__v_skip||!Object.isExtensible(n)?0:Ym(vm(n))}function ta(n){return ds(n)?n:hc(n,!1,$f,jm,Xf)}function Zm(n){return hc(n,!1,Um,qm,Yf)}function Zf(n){return hc(n,!0,zm,$m,Jf)}function hc(n,e,t,i,r){if(!gt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=Jm(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function gr(n){return ds(n)?gr(n.__v_raw):!!(n&&n.__v_isReactive)}function ds(n){return!!(n&&n.__v_isReadonly)}function Kf(n){return!!(n&&n.__v_isShallow)}function Qf(n){return gr(n)||ds(n)}function je(n){const e=n&&n.__v_raw;return e?je(e):n}function ed(n){return Fo(n,"__v_skip",!0),n}const ps=n=>gt(n)?ta(n):n,fc=n=>gt(n)?Zf(n):n;function td(n){ti&&sn&&(n=je(n),Wf(n.dep||(n.dep=oc())))}function nd(n,e){n=je(n),n.dep&&El(n.dep)}function yt(n){return!!(n&&n.__v_isRef===!0)}function qe(n){return Km(n,!1)}function Km(n,e){return yt(n)?n:new Qm(n,e)}class Qm{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:je(e),this._value=t?e:ps(e)}get value(){return td(this),this._value}set value(e){e=this.__v_isShallow?e:je(e),fs(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:ps(e),nd(this))}}function Je(n){return yt(n)?n.value:n}const e0={get:(n,e,t)=>Je(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return yt(r)&&!yt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function id(n){return gr(n)?n:new Proxy(n,e0)}class t0{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new ac(e,()=>{this._dirty||(this._dirty=!0,nd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=je(this);return td(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function dc(n,e,t=!1){let i,r;const s=Ne(n);return s?(i=n,r=an):(i=n.get,r=n.set),new t0(i,r,s||!r,t)}function ni(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){Rs(s,e,t)}return r}function ln(n,e,t,i){if(Ne(n)){const s=ni(n,e,t,i);return s&&Of(s)&&s.catch(o=>{Rs(o,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(ln(n[s],e,t,i));return r}function Rs(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){ni(l,null,10,[n,o,a]);return}}n0(n,t,r,i)}function n0(n,e,t,i=!0){console.error(n)}let No=!1,Tl=!1;const jt=[];let Bn=0;const ss=[];let ts=null,or=0;const os=[];let Kn=null,ar=0;const rd=Promise.resolve();let pc=null,Al=null;function i0(n){const e=pc||rd;return n?e.then(this?n.bind(this):n):e}function r0(n){let e=Bn+1,t=jt.length;for(;e<t;){const i=e+t>>>1;ms(jt[i])<n?e=i+1:t=i}return e}function mc(n){(!jt.length||!jt.includes(n,No&&n.allowRecurse?Bn+1:Bn))&&n!==Al&&(n.id==null?jt.push(n):jt.splice(r0(n.id),0,n),sd())}function sd(){!No&&!Tl&&(Tl=!0,pc=rd.then(ld))}function s0(n){const e=jt.indexOf(n);e>Bn&&jt.splice(e,1)}function od(n,e,t,i){Ie(n)?t.push(...n):(!e||!e.includes(n,n.allowRecurse?i+1:i))&&t.push(n),sd()}function o0(n){od(n,ts,ss,or)}function a0(n){od(n,Kn,os,ar)}function gc(n,e=null){if(ss.length){for(Al=e,ts=[...new Set(ss)],ss.length=0,or=0;or<ts.length;or++)ts[or]();ts=null,or=0,Al=null,gc(n,e)}}function ad(n){if(os.length){const e=[...new Set(os)];if(os.length=0,Kn){Kn.push(...e);return}for(Kn=e,Kn.sort((t,i)=>ms(t)-ms(i)),ar=0;ar<Kn.length;ar++)Kn[ar]();Kn=null,ar=0}}const ms=n=>n.id==null?1/0:n.id;function ld(n){Tl=!1,No=!0,gc(n),jt.sort((t,i)=>ms(t)-ms(i));const e=an;try{for(Bn=0;Bn<jt.length;Bn++){const t=jt[Bn];t&&t.active!==!1&&ni(t,null,14)}}finally{Bn=0,jt.length=0,ad(),No=!1,pc=null,(jt.length||ss.length||os.length)&&ld(n)}}function l0(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||tt;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=i[u]||tt;f?r=t.map(d=>d.trim()):h&&(r=t.map(ym))}let a,l=i[a=Sa(e)]||i[a=Sa(yr(e))];!l&&s&&(l=i[a=Sa(Pr(e))]),l&&ln(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,ln(c,n,6,r)}}function cd(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Ne(n)){const l=c=>{const u=cd(c,e,!0);u&&(a=!0,Dt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(i.set(n,null),null):(Ie(s)?s.forEach(l=>o[l]=null):Dt(o,s),i.set(n,o),o)}function na(n,e){return!n||!Zo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ke(n,e[0].toLowerCase()+e.slice(1))||ke(n,Pr(e))||ke(n,e))}let Ut=null,ia=null;function Bo(n){const e=Ut;return Ut=n,ia=n&&n.type.__scopeId||null,e}function ud(n){ia=n}function hd(){ia=null}function Ci(n,e=Ut,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&_u(-1);const s=Bo(e),o=n(...r);return Bo(s),i._d&&_u(1),o};return i._n=!0,i._c=!0,i._d=!0,i}function Ta(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:g,inheritAttrs:m}=n;let p,v;const b=Bo(n);try{if(t.shapeFlag&4){const w=r||i;p=bn(u.call(w,w,h,s,d,f,g)),v=l}else{const w=e;p=bn(w.length>1?w(s,{attrs:l,slots:a,emit:c}):w(s,null)),v=e.props?l:c0(l)}}catch(w){as.length=0,Rs(w,n,1),p=Qe(ai)}let A=p;if(v&&m!==!1){const w=Object.keys(v),{shapeFlag:T}=A;w.length&&T&7&&(o&&w.some(nc)&&(v=u0(v,o)),A=vs(A,v))}return t.dirs&&(A.dirs=A.dirs?A.dirs.concat(t.dirs):t.dirs),t.transition&&(A.transition=t.transition),p=A,Bo(b),p}const c0=n=>{let e;for(const t in n)(t==="class"||t==="style"||Zo(t))&&((e||(e={}))[t]=n[t]);return e},u0=(n,e)=>{const t={};for(const i in n)(!nc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function h0(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?uu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!na(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?uu(i,o,c):!0:!!o;return!1}function uu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!na(t,s))return!0}return!1}function f0({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const d0=n=>n.__isSuspense;function p0(n,e){e&&e.pendingBranch?Ie(n)?e.effects.push(...n):e.effects.push(n):a0(n)}function m0(n,e){if(xt){let t=xt.provides;const i=xt.parent&&xt.parent.provides;i===t&&(t=xt.provides=Object.create(i)),t[n]=e}}function Aa(n,e,t=!1){const i=xt||Ut;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ne(e)?e.call(i.proxy):e}}function g0(n,e){return vc(n,null,{flush:"post"})}const hu={};function Ht(n,e,t){return vc(n,e,t)}function vc(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:o}=tt){const a=xt;let l,c=!1,u=!1;if(yt(n)?(l=()=>n.value,c=Kf(n)):gr(n)?(l=()=>n,i=!0):Ie(n)?(u=!0,c=n.some(gr),l=()=>n.map(v=>{if(yt(v))return v.value;if(gr(v))return cr(v);if(Ne(v))return ni(v,a,2)})):Ne(n)?e?l=()=>ni(n,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),ln(n,a,3,[f])}:l=an,e&&i){const v=l;l=()=>cr(v())}let h,f=v=>{h=p.onStop=()=>{ni(v,a,4)}};if(Mr)return f=an,e?t&&ln(e,a,3,[l(),u?[]:void 0,f]):l(),an;let d=u?[]:hu;const g=()=>{if(!!p.active)if(e){const v=p.run();(i||c||(u?v.some((b,A)=>fs(b,d[A])):fs(v,d)))&&(h&&h(),ln(e,a,3,[v,d===hu?void 0:d,f]),d=v)}else p.run()};g.allowRecurse=!!e;let m;r==="sync"?m=g:r==="post"?m=()=>Bt(g,a&&a.suspense):m=()=>{!a||a.isMounted?o0(g):g()};const p=new ac(l,m);return e?t?g():d=p.run():r==="post"?Bt(p.run.bind(p),a&&a.suspense):p.run(),()=>{p.stop(),a&&a.scope&&ic(a.scope.effects,p)}}function v0(n,e,t){const i=this.proxy,r=mt(n)?n.includes(".")?fd(i,n):()=>i[n]:n.bind(i,i);let s;Ne(e)?s=e:(s=e.handler,t=e);const o=xt;br(this);const a=vc(r,s.bind(i),t);return o?br(o):Pi(),a}function fd(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function cr(n,e){if(!gt(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),yt(n))cr(n.value,e);else if(Ie(n))for(let t=0;t<n.length;t++)cr(n[t],e);else if(Bf(n)||mr(n))n.forEach(t=>{cr(t,e)});else if(Uf(n))for(const t in n)cr(n[t],e);return n}function En(n){return Ne(n)?{setup:n,name:n.name}:n}const Oo=n=>!!n.type.__asyncLoader;function Ca(n){Ne(n)&&(n={loader:n});const{loader:e,loadingComponent:t,errorComponent:i,delay:r=200,timeout:s,suspensible:o=!0,onError:a}=n;let l=null,c,u=0;const h=()=>(u++,l=null,f()),f=()=>{let d;return l||(d=l=e().catch(g=>{if(g=g instanceof Error?g:new Error(String(g)),a)return new Promise((m,p)=>{a(g,()=>m(h()),()=>p(g),u+1)});throw g}).then(g=>d!==l&&l?l:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),c=g,g)))};return En({name:"AsyncComponentWrapper",__asyncLoader:f,get __asyncResolved(){return c},setup(){const d=xt;if(c)return()=>Ra(c,d);const g=b=>{l=null,Rs(b,d,13,!i)};if(o&&d.suspense||Mr)return f().then(b=>()=>Ra(b,d)).catch(b=>(g(b),()=>i?Qe(i,{error:b}):null));const m=qe(!1),p=qe(),v=qe(!!r);return r&&setTimeout(()=>{v.value=!1},r),s!=null&&setTimeout(()=>{if(!m.value&&!p.value){const b=new Error(`Async component timed out after ${s}ms.`);g(b),p.value=b}},s),f().then(()=>{m.value=!0,d.parent&&_c(d.parent.vnode)&&mc(d.parent.update)}).catch(b=>{g(b),p.value=b}),()=>{if(m.value&&c)return Ra(c,d);if(p.value&&i)return Qe(i,{error:p.value});if(t&&!v.value)return Qe(t)}}})}function Ra(n,{vnode:{ref:e,props:t,children:i}}){const r=Qe(n,t,i);return r.ref=e,r}const _c=n=>n.type.__isKeepAlive;function _0(n,e){dd(n,"a",e)}function x0(n,e){dd(n,"da",e)}function dd(n,e,t=xt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(ra(e,i,t),t){let r=t.parent;for(;r&&r.parent;)_c(r.parent.vnode)&&y0(i,e,t,r),r=r.parent}}function y0(n,e,t,i){const r=ra(e,n,i,!0);yc(()=>{ic(i[e],r)},t)}function ra(n,e,t=xt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Ir(),br(t);const a=ln(e,t,n,o);return Pi(),Dr(),a});return i?r.unshift(s):r.push(s),s}}const kn=n=>(e,t=xt)=>(!Mr||n==="sp")&&ra(n,e,t),b0=kn("bm"),di=kn("m"),pd=kn("bu"),M0=kn("u"),xc=kn("bum"),yc=kn("um"),w0=kn("sp"),S0=kn("rtg"),E0=kn("rtc");function T0(n,e=xt){ra("ec",n,e)}let Cl=!0;function A0(n){const e=gd(n),t=n.proxy,i=n.ctx;Cl=!1,e.beforeCreate&&fu(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:m,deactivated:p,beforeDestroy:v,beforeUnmount:b,destroyed:A,unmounted:w,render:T,renderTracked:R,renderTriggered:z,errorCaptured:M,serverPrefetch:P,expose:D,inheritAttrs:B,components:le,directives:he,filters:O}=e;if(c&&C0(c,i,null,n.appContext.config.unwrapInjectedRef),o)for(const $ in o){const q=o[$];Ne(q)&&(i[$]=q.bind(t))}if(r){const $=r.call(t,t);gt($)&&(n.data=ta($))}if(Cl=!0,s)for(const $ in s){const q=s[$],j=Ne(q)?q.bind(t,t):Ne(q.get)?q.get.bind(t,t):an,Z=!Ne(q)&&Ne(q.set)?q.set.bind(t):an,ce=It({get:j,set:Z});Object.defineProperty(i,$,{enumerable:!0,configurable:!0,get:()=>ce.value,set:re=>ce.value=re})}if(a)for(const $ in a)md(a[$],i,t,$);if(l){const $=Ne(l)?l.call(t):l;Reflect.ownKeys($).forEach(q=>{m0(q,$[q])})}u&&fu(u,n,"c");function U($,q){Ie(q)?q.forEach(j=>$(j.bind(t))):q&&$(q.bind(t))}if(U(b0,h),U(di,f),U(pd,d),U(M0,g),U(_0,m),U(x0,p),U(T0,M),U(E0,R),U(S0,z),U(xc,b),U(yc,w),U(w0,P),Ie(D))if(D.length){const $=n.exposed||(n.exposed={});D.forEach(q=>{Object.defineProperty($,q,{get:()=>t[q],set:j=>t[q]=j})})}else n.exposed||(n.exposed={});T&&n.render===an&&(n.render=T),B!=null&&(n.inheritAttrs=B),le&&(n.components=le),he&&(n.directives=he)}function C0(n,e,t=an,i=!1){Ie(n)&&(n=Rl(n));for(const r in n){const s=n[r];let o;gt(s)?"default"in s?o=Aa(s.from||r,s.default,!0):o=Aa(s.from||r):o=Aa(s),yt(o)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function fu(n,e,t){ln(Ie(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function md(n,e,t,i){const r=i.includes(".")?fd(t,i):()=>t[i];if(mt(n)){const s=e[n];Ne(s)&&Ht(r,s)}else if(Ne(n))Ht(r,n.bind(t));else if(gt(n))if(Ie(n))n.forEach(s=>md(s,e,t,i));else{const s=Ne(n.handler)?n.handler.bind(t):e[n.handler];Ne(s)&&Ht(r,s,n)}}function gd(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>zo(l,c,o,!0)),zo(l,e,o)),s.set(e,l),l}function zo(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&zo(n,s,t,!0),r&&r.forEach(o=>zo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=R0[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const R0={data:du,props:yi,emits:yi,methods:yi,computed:yi,beforeCreate:Lt,created:Lt,beforeMount:Lt,mounted:Lt,beforeUpdate:Lt,updated:Lt,beforeDestroy:Lt,beforeUnmount:Lt,destroyed:Lt,unmounted:Lt,activated:Lt,deactivated:Lt,errorCaptured:Lt,serverPrefetch:Lt,components:yi,directives:yi,watch:P0,provide:du,inject:L0};function du(n,e){return e?n?function(){return Dt(Ne(n)?n.call(this,this):n,Ne(e)?e.call(this,this):e)}:e:n}function L0(n,e){return yi(Rl(n),Rl(e))}function Rl(n){if(Ie(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Lt(n,e){return n?[...new Set([].concat(n,e))]:e}function yi(n,e){return n?Dt(Dt(Object.create(null),n),e):e}function P0(n,e){if(!n)return e;if(!e)return n;const t=Dt(Object.create(null),n);for(const i in e)t[i]=Lt(n[i],e[i]);return t}function I0(n,e,t,i=!1){const r={},s={};Fo(s,sa,1),n.propsDefaults=Object.create(null),vd(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:Zm(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function D0(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=je(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(na(n.emitsOptions,f))continue;const d=e[f];if(l)if(ke(s,f))d!==s[f]&&(s[f]=d,c=!0);else{const g=yr(f);r[g]=Ll(l,a,g,d,n,!1)}else d!==s[f]&&(s[f]=d,c=!0)}}}else{vd(n,e,r,s)&&(c=!0);let u;for(const h in a)(!e||!ke(e,h)&&((u=Pr(h))===h||!ke(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(r[h]=Ll(l,a,h,void 0,n,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!ke(e,h)&&!0)&&(delete s[h],c=!0)}c&&Hn(n,"set","$attrs")}function vd(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(To(l))continue;const c=e[l];let u;r&&ke(r,u=yr(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:na(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=je(t),c=a||tt;for(let u=0;u<s.length;u++){const h=s[u];t[h]=Ll(r,l,h,c[h],n,!ke(c,h))}}return o}function Ll(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=ke(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&Ne(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(br(r),i=c[t]=l.call(null,e),Pi())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Pr(t))&&(i=!0))}return i}function _d(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Ne(n)){const u=h=>{l=!0;const[f,d]=_d(h,e,!0);Dt(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return i.set(n,pr),pr;if(Ie(s))for(let u=0;u<s.length;u++){const h=yr(s[u]);pu(h)&&(o[h]=tt)}else if(s)for(const u in s){const h=yr(u);if(pu(h)){const f=s[u],d=o[h]=Ie(f)||Ne(f)?{type:f}:f;if(d){const g=vu(Boolean,d.type),m=vu(String,d.type);d[0]=g>-1,d[1]=m<0||g<m,(g>-1||ke(d,"default"))&&a.push(h)}}}const c=[o,a];return i.set(n,c),c}function pu(n){return n[0]!=="$"}function mu(n){const e=n&&n.toString().match(/^\s*function (\w+)/);return e?e[1]:n===null?"null":""}function gu(n,e){return mu(n)===mu(e)}function vu(n,e){return Ie(e)?e.findIndex(t=>gu(t,n)):Ne(e)&&gu(e,n)?0:-1}const xd=n=>n[0]==="_"||n==="$stable",bc=n=>Ie(n)?n.map(bn):[bn(n)],F0=(n,e,t)=>{const i=Ci((...r)=>bc(e(...r)),t);return i._c=!1,i},yd=(n,e,t)=>{const i=n._ctx;for(const r in n){if(xd(r))continue;const s=n[r];if(Ne(s))e[r]=F0(r,s,i);else if(s!=null){const o=bc(s);e[r]=()=>o}}},bd=(n,e)=>{const t=bc(e);n.slots.default=()=>t},N0=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=je(e),Fo(e,"_",t)):yd(e,n.slots={})}else n.slots={},e&&bd(n,e);Fo(n.slots,sa,1)},B0=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=tt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(Dt(r,e),!t&&a===1&&delete r._):(s=!e.$stable,yd(e,r)),o=e}else e&&(bd(n,e),o={default:1});if(s)for(const a in r)!xd(a)&&!(a in o)&&delete r[a]};function mi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Ir(),ln(l,t,8,[n.el,a,n,e]),Dr())}}function Md(){return{app:null,config:{isNativeTag:pm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let O0=0;function z0(n,e){return function(i,r=null){Ne(i)||(i=Object.assign({},i)),r!=null&&!gt(r)&&(r=null);const s=Md(),o=new Set;let a=!1;const l=s.app={_uid:O0++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:ng,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ne(c.install)?(o.add(c),c.install(l,...u)):Ne(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!a){const f=Qe(i,r);return f.appContext=s,u&&e?e(f,c):n(f,c,h),a=!0,l._container=c,c.__vue_app__=l,Sc(f.component)||f.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Pl(n,e,t,i,r=!1){if(Ie(n)){n.forEach((f,d)=>Pl(f,e&&(Ie(e)?e[d]:e),t,i,r));return}if(Oo(i)&&!r)return;const s=i.shapeFlag&4?Sc(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===tt?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(mt(c)?(u[c]=null,ke(h,c)&&(h[c]=null)):yt(c)&&(c.value=null)),Ne(l))ni(l,a,12,[o,u]);else{const f=mt(l),d=yt(l);if(f||d){const g=()=>{if(n.f){const m=f?u[l]:l.value;r?Ie(m)&&ic(m,s):Ie(m)?m.includes(s)||m.push(s):f?(u[l]=[s],ke(h,l)&&(h[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else f?(u[l]=o,ke(h,l)&&(h[l]=o)):yt(l)&&(l.value=o,n.k&&(u[n.k]=o))};o?(g.id=-1,Bt(g,t)):g()}}}const Bt=p0;function U0(n){return H0(n)}function H0(n,e){const t=bm();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=an,cloneNode:g,insertStaticContent:m}=n,p=(y,E,F,N=null,G=null,X=null,J=!1,ne=null,se=!!E.dynamicChildren)=>{if(y===E)return;y&&!Gr(y,E)&&(N=Te(y),fe(y,G,X,!0),y=null),E.patchFlag===-2&&(se=!1,E.dynamicChildren=null);const{type:x,ref:_,shapeFlag:I}=E;switch(x){case Mc:v(y,E,F,N);break;case ai:b(y,E,F,N);break;case Ao:y==null&&A(E,F,N,J);break;case Pt:he(y,E,F,N,G,X,J,ne,se);break;default:I&1?R(y,E,F,N,G,X,J,ne,se):I&6?O(y,E,F,N,G,X,J,ne,se):(I&64||I&128)&&x.process(y,E,F,N,G,X,J,ne,se,ue)}_!=null&&G&&Pl(_,y&&y.ref,X,E||y,!E)},v=(y,E,F,N)=>{if(y==null)i(E.el=a(E.children),F,N);else{const G=E.el=y.el;E.children!==y.children&&c(G,E.children)}},b=(y,E,F,N)=>{y==null?i(E.el=l(E.children||""),F,N):E.el=y.el},A=(y,E,F,N)=>{[y.el,y.anchor]=m(y.children,E,F,N,y.el,y.anchor)},w=({el:y,anchor:E},F,N)=>{let G;for(;y&&y!==E;)G=f(y),i(y,F,N),y=G;i(E,F,N)},T=({el:y,anchor:E})=>{let F;for(;y&&y!==E;)F=f(y),r(y),y=F;r(E)},R=(y,E,F,N,G,X,J,ne,se)=>{J=J||E.type==="svg",y==null?z(E,F,N,G,X,J,ne,se):D(y,E,G,X,J,ne,se)},z=(y,E,F,N,G,X,J,ne)=>{let se,x;const{type:_,props:I,shapeFlag:k,transition:Q,patchFlag:oe,dirs:ve}=y;if(y.el&&g!==void 0&&oe===-1)se=y.el=g(y.el);else{if(se=y.el=o(y.type,X,I&&I.is,I),k&8?u(se,y.children):k&16&&P(y.children,se,null,N,G,X&&_!=="foreignObject",J,ne),ve&&mi(y,null,N,"created"),I){for(const xe in I)xe!=="value"&&!To(xe)&&s(se,xe,null,I[xe],X,y.children,N,G,Fe);"value"in I&&s(se,"value",null,I.value),(x=I.onVnodeBeforeMount)&&_n(x,N,y)}M(se,y,y.scopeId,J,N)}ve&&mi(y,null,N,"beforeMount");const V=(!G||G&&!G.pendingBranch)&&Q&&!Q.persisted;V&&Q.beforeEnter(se),i(se,E,F),((x=I&&I.onVnodeMounted)||V||ve)&&Bt(()=>{x&&_n(x,N,y),V&&Q.enter(se),ve&&mi(y,null,N,"mounted")},G)},M=(y,E,F,N,G)=>{if(F&&d(y,F),N)for(let X=0;X<N.length;X++)d(y,N[X]);if(G){let X=G.subTree;if(E===X){const J=G.vnode;M(y,J,J.scopeId,J.slotScopeIds,G.parent)}}},P=(y,E,F,N,G,X,J,ne,se=0)=>{for(let x=se;x<y.length;x++){const _=y[x]=ne?Qn(y[x]):bn(y[x]);p(null,_,E,F,N,G,X,J,ne)}},D=(y,E,F,N,G,X,J)=>{const ne=E.el=y.el;let{patchFlag:se,dynamicChildren:x,dirs:_}=E;se|=y.patchFlag&16;const I=y.props||tt,k=E.props||tt;let Q;F&&gi(F,!1),(Q=k.onVnodeBeforeUpdate)&&_n(Q,F,E,y),_&&mi(E,y,F,"beforeUpdate"),F&&gi(F,!0);const oe=G&&E.type!=="foreignObject";if(x?B(y.dynamicChildren,x,ne,F,N,oe,X):J||j(y,E,ne,null,F,N,oe,X,!1),se>0){if(se&16)le(ne,E,I,k,F,N,G);else if(se&2&&I.class!==k.class&&s(ne,"class",null,k.class,G),se&4&&s(ne,"style",I.style,k.style,G),se&8){const ve=E.dynamicProps;for(let V=0;V<ve.length;V++){const xe=ve[V],Ae=I[xe],ye=k[xe];(ye!==Ae||xe==="value")&&s(ne,xe,Ae,ye,G,y.children,F,N,Fe)}}se&1&&y.children!==E.children&&u(ne,E.children)}else!J&&x==null&&le(ne,E,I,k,F,N,G);((Q=k.onVnodeUpdated)||_)&&Bt(()=>{Q&&_n(Q,F,E,y),_&&mi(E,y,F,"updated")},N)},B=(y,E,F,N,G,X,J)=>{for(let ne=0;ne<E.length;ne++){const se=y[ne],x=E[ne],_=se.el&&(se.type===Pt||!Gr(se,x)||se.shapeFlag&70)?h(se.el):F;p(se,x,_,null,N,G,X,J,!0)}},le=(y,E,F,N,G,X,J)=>{if(F!==N){for(const ne in N){if(To(ne))continue;const se=N[ne],x=F[ne];se!==x&&ne!=="value"&&s(y,ne,x,se,J,E.children,G,X,Fe)}if(F!==tt)for(const ne in F)!To(ne)&&!(ne in N)&&s(y,ne,F[ne],null,J,E.children,G,X,Fe);"value"in N&&s(y,"value",F.value,N.value)}},he=(y,E,F,N,G,X,J,ne,se)=>{const x=E.el=y?y.el:a(""),_=E.anchor=y?y.anchor:a("");let{patchFlag:I,dynamicChildren:k,slotScopeIds:Q}=E;Q&&(ne=ne?ne.concat(Q):Q),y==null?(i(x,F,N),i(_,F,N),P(E.children,F,_,G,X,J,ne,se)):I>0&&I&64&&k&&y.dynamicChildren?(B(y.dynamicChildren,k,F,G,X,J,ne),(E.key!=null||G&&E===G.subTree)&&wd(y,E,!0)):j(y,E,F,_,G,X,J,ne,se)},O=(y,E,F,N,G,X,J,ne,se)=>{E.slotScopeIds=ne,y==null?E.shapeFlag&512?G.ctx.activate(E,F,N,J,se):K(E,F,N,G,X,J,se):U(y,E,se)},K=(y,E,F,N,G,X,J)=>{const ne=y.component=J0(y,N,G);if(_c(y)&&(ne.ctx.renderer=ue),Z0(ne),ne.asyncDep){if(G&&G.registerDep(ne,$),!y.el){const se=ne.subTree=Qe(ai);b(null,se,E,F)}return}$(ne,y,E,F,G,X,J)},U=(y,E,F)=>{const N=E.component=y.component;if(h0(y,E,F))if(N.asyncDep&&!N.asyncResolved){q(N,E,F);return}else N.next=E,s0(N.update),N.update();else E.component=y.component,E.el=y.el,N.vnode=E},$=(y,E,F,N,G,X,J)=>{const ne=()=>{if(y.isMounted){let{next:_,bu:I,u:k,parent:Q,vnode:oe}=y,ve=_,V;gi(y,!1),_?(_.el=oe.el,q(y,_,J)):_=oe,I&&Ea(I),(V=_.props&&_.props.onVnodeBeforeUpdate)&&_n(V,Q,_,oe),gi(y,!0);const xe=Ta(y),Ae=y.subTree;y.subTree=xe,p(Ae,xe,h(Ae.el),Te(Ae),y,G,X),_.el=xe.el,ve===null&&f0(y,xe.el),k&&Bt(k,G),(V=_.props&&_.props.onVnodeUpdated)&&Bt(()=>_n(V,Q,_,oe),G)}else{let _;const{el:I,props:k}=E,{bm:Q,m:oe,parent:ve}=y,V=Oo(E);if(gi(y,!1),Q&&Ea(Q),!V&&(_=k&&k.onVnodeBeforeMount)&&_n(_,ve,E),gi(y,!0),I&&te){const xe=()=>{y.subTree=Ta(y),te(I,y.subTree,y,G,null)};V?E.type.__asyncLoader().then(()=>!y.isUnmounted&&xe()):xe()}else{const xe=y.subTree=Ta(y);p(null,xe,F,N,y,G,X),E.el=xe.el}if(oe&&Bt(oe,G),!V&&(_=k&&k.onVnodeMounted)){const xe=E;Bt(()=>_n(_,ve,xe),G)}E.shapeFlag&256&&y.a&&Bt(y.a,G),y.isMounted=!0,E=F=N=null}},se=y.effect=new ac(ne,()=>mc(y.update),y.scope),x=y.update=se.run.bind(se);x.id=y.uid,gi(y,!0),x()},q=(y,E,F)=>{E.component=y;const N=y.vnode.props;y.vnode=E,y.next=null,D0(y,E.props,N,F),B0(y,E.children,F),Ir(),gc(void 0,y.update),Dr()},j=(y,E,F,N,G,X,J,ne,se=!1)=>{const x=y&&y.children,_=y?y.shapeFlag:0,I=E.children,{patchFlag:k,shapeFlag:Q}=E;if(k>0){if(k&128){ce(x,I,F,N,G,X,J,ne,se);return}else if(k&256){Z(x,I,F,N,G,X,J,ne,se);return}}Q&8?(_&16&&Fe(x,G,X),I!==x&&u(F,I)):_&16?Q&16?ce(x,I,F,N,G,X,J,ne,se):Fe(x,G,X,!0):(_&8&&u(F,""),Q&16&&P(I,F,N,G,X,J,ne,se))},Z=(y,E,F,N,G,X,J,ne,se)=>{y=y||pr,E=E||pr;const x=y.length,_=E.length,I=Math.min(x,_);let k;for(k=0;k<I;k++){const Q=E[k]=se?Qn(E[k]):bn(E[k]);p(y[k],Q,F,null,G,X,J,ne,se)}x>_?Fe(y,G,X,!0,!1,I):P(E,F,N,G,X,J,ne,se,I)},ce=(y,E,F,N,G,X,J,ne,se)=>{let x=0;const _=E.length;let I=y.length-1,k=_-1;for(;x<=I&&x<=k;){const Q=y[x],oe=E[x]=se?Qn(E[x]):bn(E[x]);if(Gr(Q,oe))p(Q,oe,F,null,G,X,J,ne,se);else break;x++}for(;x<=I&&x<=k;){const Q=y[I],oe=E[k]=se?Qn(E[k]):bn(E[k]);if(Gr(Q,oe))p(Q,oe,F,null,G,X,J,ne,se);else break;I--,k--}if(x>I){if(x<=k){const Q=k+1,oe=Q<_?E[Q].el:N;for(;x<=k;)p(null,E[x]=se?Qn(E[x]):bn(E[x]),F,oe,G,X,J,ne,se),x++}}else if(x>k)for(;x<=I;)fe(y[x],G,X,!0),x++;else{const Q=x,oe=x,ve=new Map;for(x=oe;x<=k;x++){const we=E[x]=se?Qn(E[x]):bn(E[x]);we.key!=null&&ve.set(we.key,x)}let V,xe=0;const Ae=k-oe+1;let ye=!1,L=0;const pe=new Array(Ae);for(x=0;x<Ae;x++)pe[x]=0;for(x=Q;x<=I;x++){const we=y[x];if(xe>=Ae){fe(we,G,X,!0);continue}let _e;if(we.key!=null)_e=ve.get(we.key);else for(V=oe;V<=k;V++)if(pe[V-oe]===0&&Gr(we,E[V])){_e=V;break}_e===void 0?fe(we,G,X,!0):(pe[_e-oe]=x+1,_e>=L?L=_e:ye=!0,p(we,E[_e],F,null,G,X,J,ne,se),xe++)}const me=ye?k0(pe):pr;for(V=me.length-1,x=Ae-1;x>=0;x--){const we=oe+x,_e=E[we],Ce=we+1<_?E[we+1].el:N;pe[x]===0?p(null,_e,F,Ce,G,X,J,ne,se):ye&&(V<0||x!==me[V]?re(_e,F,Ce,2):V--)}}},re=(y,E,F,N,G=null)=>{const{el:X,type:J,transition:ne,children:se,shapeFlag:x}=y;if(x&6){re(y.component.subTree,E,F,N);return}if(x&128){y.suspense.move(E,F,N);return}if(x&64){J.move(y,E,F,ue);return}if(J===Pt){i(X,E,F);for(let I=0;I<se.length;I++)re(se[I],E,F,N);i(y.anchor,E,F);return}if(J===Ao){w(y,E,F);return}if(N!==2&&x&1&&ne)if(N===0)ne.beforeEnter(X),i(X,E,F),Bt(()=>ne.enter(X),G);else{const{leave:I,delayLeave:k,afterLeave:Q}=ne,oe=()=>i(X,E,F),ve=()=>{I(X,()=>{oe(),Q&&Q()})};k?k(X,oe,ve):ve()}else i(X,E,F)},fe=(y,E,F,N=!1,G=!1)=>{const{type:X,props:J,ref:ne,children:se,dynamicChildren:x,shapeFlag:_,patchFlag:I,dirs:k}=y;if(ne!=null&&Pl(ne,null,F,y,!0),_&256){E.ctx.deactivate(y);return}const Q=_&1&&k,oe=!Oo(y);let ve;if(oe&&(ve=J&&J.onVnodeBeforeUnmount)&&_n(ve,E,y),_&6)ee(y.component,F,N);else{if(_&128){y.suspense.unmount(F,N);return}Q&&mi(y,null,E,"beforeUnmount"),_&64?y.type.remove(y,E,F,G,ue,N):x&&(X!==Pt||I>0&&I&64)?Fe(x,E,F,!1,!0):(X===Pt&&I&384||!G&&_&16)&&Fe(se,E,F),N&&be(y)}(oe&&(ve=J&&J.onVnodeUnmounted)||Q)&&Bt(()=>{ve&&_n(ve,E,y),Q&&mi(y,null,E,"unmounted")},F)},be=y=>{const{type:E,el:F,anchor:N,transition:G}=y;if(E===Pt){Ee(F,N);return}if(E===Ao){T(y);return}const X=()=>{r(F),G&&!G.persisted&&G.afterLeave&&G.afterLeave()};if(y.shapeFlag&1&&G&&!G.persisted){const{leave:J,delayLeave:ne}=G,se=()=>J(F,X);ne?ne(y.el,X,se):se()}else X()},Ee=(y,E)=>{let F;for(;y!==E;)F=f(y),r(y),y=F;r(E)},ee=(y,E,F)=>{const{bum:N,scope:G,update:X,subTree:J,um:ne}=y;N&&Ea(N),G.stop(),X&&(X.active=!1,fe(J,y,E,F)),ne&&Bt(ne,E),Bt(()=>{y.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},Fe=(y,E,F,N=!1,G=!1,X=0)=>{for(let J=X;J<y.length;J++)fe(y[J],E,F,N,G)},Te=y=>y.shapeFlag&6?Te(y.component.subTree):y.shapeFlag&128?y.suspense.next():f(y.anchor||y.el),Pe=(y,E,F)=>{y==null?E._vnode&&fe(E._vnode,null,null,!0):p(E._vnode||null,y,E,null,null,null,F),ad(),E._vnode=y},ue={p,um:fe,m:re,r:be,mt:K,mc:P,pc:j,pbc:B,n:Te,o:n};let Be,te;return e&&([Be,te]=e(ue)),{render:Pe,hydrate:Be,createApp:z0(Pe,Be)}}function gi({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function wd(n,e,t=!1){const i=n.children,r=e.children;if(Ie(i)&&Ie(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Qn(r[s]),a.el=o.el),t||wd(o,a))}}function k0(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const V0=n=>n.__isTeleport,G0=Symbol(),Pt=Symbol(void 0),Mc=Symbol(void 0),ai=Symbol(void 0),Ao=Symbol(void 0),as=[];let Ri=null;function At(n=!1){as.push(Ri=n?null:[])}function W0(){as.pop(),Ri=as[as.length-1]||null}let Uo=1;function _u(n){Uo+=n}function Sd(n){return n.dynamicChildren=Uo>0?Ri||pr:null,W0(),Uo>0&&Ri&&Ri.push(n),n}function cn(n,e,t,i,r,s){return Sd(dt(n,e,t,i,r,s,!0))}function Ls(n,e,t,i,r){return Sd(Qe(n,e,t,i,r,!0))}function Ho(n){return n?n.__v_isVNode===!0:!1}function Gr(n,e){return n.type===e.type&&n.key===e.key}const sa="__vInternal",Ed=({key:n})=>n!=null?n:null,Co=({ref:n,ref_key:e,ref_for:t})=>n!=null?mt(n)||yt(n)||Ne(n)?{i:Ut,r:n,k:e,f:!!t}:n:null;function dt(n,e=null,t=null,i=0,r=null,s=n===Pt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Ed(e),ref:e&&Co(e),scopeId:ia,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(wc(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=mt(t)?8:16),Uo>0&&!o&&Ri&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Ri.push(l),l}const Qe=j0;function j0(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===G0)&&(n=ai),Ho(n)){const a=vs(n,e,!0);return t&&wc(a,t),a}if(tg(n)&&(n=n.__vccOpts),e){e=gs(e);let{class:a,style:l}=e;a&&!mt(a)&&(e.class=Lr(a)),gt(l)&&(Qf(l)&&!Ie(l)&&(l=Dt({},l)),e.style=wn(l))}const o=mt(n)?1:d0(n)?128:V0(n)?64:gt(n)?4:Ne(n)?2:0;return dt(n,e,t,i,r,o,s,!0)}function gs(n){return n?Qf(n)||sa in n?Dt({},n):n:null}function vs(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:o}=n,a=e?q0(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&Ed(a),ref:e&&e.ref?t&&r?Ie(r)?r.concat(Co(e)):[r,Co(e)]:Co(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Pt?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&vs(n.ssContent),ssFallback:n.ssFallback&&vs(n.ssFallback),el:n.el,anchor:n.anchor}}function Td(n=" ",e=0){return Qe(Mc,null,n,e)}function LS(n="",e=!1){return e?(At(),Ls(ai,null,n)):Qe(ai,null,n)}function bn(n){return n==null||typeof n=="boolean"?Qe(ai):Ie(n)?Qe(Pt,null,n.slice()):typeof n=="object"?Qn(n):Qe(Mc,null,String(n))}function Qn(n){return n.el===null||n.memo?n:vs(n)}function wc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ie(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),wc(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(sa in e)?e._ctx=Ut:r===3&&Ut&&(Ut.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ne(e)?(e={default:e,_ctx:Ut},t=32):(e=String(e),i&64?(t=16,e=[Td(e)]):t=8);n.children=e,n.shapeFlag|=t}function q0(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Lr([e.class,i.class]));else if(r==="style")e.style=wn([e.style,i.style]);else if(Zo(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ie(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function _n(n,e,t,i=null){ln(n,e,7,[t,i])}function Ad(n,e,t,i){let r;const s=t&&t[i];if(Ie(n)||mt(n)){r=new Array(n.length);for(let o=0,a=n.length;o<a;o++)r[o]=e(n[o],o,void 0,s&&s[o])}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(gt(n))if(n[Symbol.iterator])r=Array.from(n,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(n);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(n[c],c,a,s&&s[a])}}else r=[];return t&&(t[i]=r),r}function Li(n,e,t={},i,r){if(Ut.isCE||Ut.parent&&Oo(Ut.parent)&&Ut.parent.isCE)return Qe("slot",e==="default"?null:{name:e},i&&i());let s=n[e];s&&s._c&&(s._d=!1),At();const o=s&&Cd(s(t)),a=Ls(Pt,{key:t.key||`_${e}`},o||(i?i():[]),o&&n._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function Cd(n){return n.some(e=>Ho(e)?!(e.type===ai||e.type===Pt&&!Cd(e.children)):!0)?n:null}const Il=n=>n?Ld(n)?Sc(n)||n.proxy:Il(n.parent):null,ko=Dt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Il(n.parent),$root:n=>Il(n.root),$emit:n=>n.emit,$options:n=>gd(n),$forceUpdate:n=>()=>mc(n.update),$nextTick:n=>i0.bind(n.proxy),$watch:n=>v0.bind(n)}),$0={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(i!==tt&&ke(i,e))return o[e]=1,i[e];if(r!==tt&&ke(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&ke(c,e))return o[e]=3,s[e];if(t!==tt&&ke(t,e))return o[e]=4,t[e];Cl&&(o[e]=0)}}const u=ko[e];let h,f;if(u)return e==="$attrs"&&$t(n,"get",e),u(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==tt&&ke(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,ke(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return r!==tt&&ke(r,e)?(r[e]=t,!0):i!==tt&&ke(i,e)?(i[e]=t,!0):ke(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==tt&&ke(n,o)||e!==tt&&ke(e,o)||(a=s[0])&&ke(a,o)||ke(i,o)||ke(ko,o)||ke(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ke(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}},X0=Md();let Y0=0;function J0(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||X0,s={uid:Y0++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Mm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_d(i,r),emitsOptions:cd(i,r),emit:null,emitted:null,propsDefaults:tt,inheritAttrs:i.inheritAttrs,ctx:tt,data:tt,props:tt,attrs:tt,slots:tt,refs:tt,setupState:tt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=l0.bind(null,s),n.ce&&n.ce(s),s}let xt=null;const Rd=()=>xt||Ut,br=n=>{xt=n,n.scope.on()},Pi=()=>{xt&&xt.scope.off(),xt=null};function Ld(n){return n.vnode.shapeFlag&4}let Mr=!1;function Z0(n,e=!1){Mr=e;const{props:t,children:i}=n.vnode,r=Ld(n);I0(n,t,r,e),N0(n,i);const s=r?K0(n,e):void 0;return Mr=!1,s}function K0(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=ed(new Proxy(n.ctx,$0));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?eg(n):null;br(n),Ir();const s=ni(i,n,0,[n.props,r]);if(Dr(),Pi(),Of(s)){if(s.then(Pi,Pi),e)return s.then(o=>{xu(n,o,e)}).catch(o=>{Rs(o,n,0)});n.asyncDep=s}else xu(n,s,e)}else Pd(n,e)}function xu(n,e,t){Ne(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:gt(e)&&(n.setupState=id(e)),Pd(n,t)}let yu;function Pd(n,e,t){const i=n.type;if(!n.render){if(!e&&yu&&!i.render){const r=i.template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Dt(Dt({isCustomElement:s,delimiters:a},o),l);i.render=yu(r,c)}}n.render=i.render||an}br(n),Ir(),A0(n),Dr(),Pi()}function Q0(n){return new Proxy(n.attrs,{get(e,t){return $t(n,"get","$attrs"),e[t]}})}function eg(n){const e=i=>{n.exposed=i||{}};let t;return{get attrs(){return t||(t=Q0(n))},slots:n.slots,emit:n.emit,expose:e}}function Sc(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(id(ed(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ko)return ko[t](n)}}))}function tg(n){return Ne(n)&&"__vccOpts"in n}const It=(n,e)=>dc(n,e,Mr);function bu(n,e,t){const i=arguments.length;return i===2?gt(e)&&!Ie(e)?Ho(e)?Qe(n,null,[e]):Qe(n,e):Qe(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Ho(t)&&(t=[t]),Qe(n,e,t))}const ng="3.2.33",ig="http://www.w3.org/2000/svg",Mi=typeof document!="undefined"?document:null,Mu=Mi&&Mi.createElement("template"),rg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?Mi.createElementNS(ig,n):Mi.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Mi.createTextNode(n),createComment:n=>Mi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Mi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},cloneNode(n){const e=n.cloneNode(!0);return"_value"in n&&(e._value=n._value),e},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Mu.innerHTML=i?`<svg>${n}</svg>`:n;const a=Mu.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function sg(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function og(n,e,t){const i=n.style,r=mt(t);if(t&&!r){for(const s in t)Dl(i,s,t[s]);if(e&&!mt(e))for(const s in e)t[s]==null&&Dl(i,s,"")}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const wu=/\s*!important$/;function Dl(n,e,t){if(Ie(t))t.forEach(i=>Dl(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=ag(n,e);wu.test(t)?n.setProperty(Pr(i),t.replace(wu,""),"important"):n[i]=t}}const Su=["Webkit","Moz","ms"],La={};function ag(n,e){const t=La[e];if(t)return t;let i=yr(e);if(i!=="filter"&&i in n)return La[e]=i;i=Hf(i);for(let r=0;r<Su.length;r++){const s=Su[r]+i;if(s in n)return La[e]=s}return e}const Eu="http://www.w3.org/1999/xlink";function lg(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Eu,e.slice(6,e.length)):n.setAttributeNS(Eu,e,t);else{const s=cm(e);t==null||s&&!Ff(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function cg(n,e,t,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),n[e]=t==null?"":t;return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const l=t==null?"":t;(n.value!==l||n.tagName==="OPTION")&&(n.value=l),t==null&&n.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=Ff(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(e)}const[Id,ug]=(()=>{let n=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(n=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(t&&Number(t[1])<=53)}return[n,e]})();let Fl=0;const hg=Promise.resolve(),fg=()=>{Fl=0},dg=()=>Fl||(hg.then(fg),Fl=Id());function pg(n,e,t,i){n.addEventListener(e,t,i)}function mg(n,e,t,i){n.removeEventListener(e,t,i)}function gg(n,e,t,i,r=null){const s=n._vei||(n._vei={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=vg(e);if(i){const c=s[e]=_g(i,r);pg(n,a,c,l)}else o&&(mg(n,a,o,l),s[e]=void 0)}}const Tu=/(?:Once|Passive|Capture)$/;function vg(n){let e;if(Tu.test(n)){e={};let t;for(;t=n.match(Tu);)n=n.slice(0,n.length-t[0].length),e[t[0].toLowerCase()]=!0}return[Pr(n.slice(2)),e]}function _g(n,e){const t=i=>{const r=i.timeStamp||Id();(ug||r>=t.attached-1)&&ln(xg(i,t.value),e,5,[i])};return t.value=n,t.attached=dg(),t}function xg(n,e){if(Ie(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Au=/^on[a-z]/,yg=(n,e,t,i,r=!1,s,o,a,l)=>{e==="class"?sg(n,i,r):e==="style"?og(n,t,i):Zo(e)?nc(e)||gg(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):bg(n,e,i,r))?cg(n,e,i,s,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),lg(n,e,i,r))};function bg(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&Au.test(e)&&Ne(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||Au.test(e)&&mt(t)?!1:e in n}function Ec(n){const e=Rd();if(!e)return;const t=()=>Nl(e.subTree,n(e.proxy));g0(t),di(()=>{const i=new MutationObserver(t);i.observe(e.subTree.el.parentNode,{childList:!0}),yc(()=>i.disconnect())})}function Nl(n,e){if(n.shapeFlag&128){const t=n.suspense;n=t.activeBranch,t.pendingBranch&&!t.isHydrating&&t.effects.push(()=>{Nl(t.activeBranch,e)})}for(;n.component;)n=n.component.subTree;if(n.shapeFlag&1&&n.el)Cu(n.el,e);else if(n.type===Pt)n.children.forEach(t=>Nl(t,e));else if(n.type===Ao){let{el:t,anchor:i}=n;for(;t&&(Cu(t,e),t!==i);)t=t.nextSibling}}function Cu(n,e){if(n.nodeType===1){const t=n.style;for(const i in e)t.setProperty(`--${i}`,e[i])}}const Mg=["ctrl","shift","alt","meta"],wg={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Mg.some(t=>n[`${t}Key`]&&!e.includes(t))},PS=(n,e)=>(t,...i)=>{for(let r=0;r<e.length;r++){const s=wg[e[r]];if(s&&s(t,e))return}return n(t,...i)},Sg=Dt({patchProp:yg},rg);let Ru;function Eg(){return Ru||(Ru=U0(Sg))}const Tg=(...n)=>{const e=Eg().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Ag(i);if(!r)return;const s=e._component;!Ne(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Ag(n){return mt(n)?document.querySelector(n):n}const Cg="modulepreload",Lu={},Rg="/new-portfolio/",Pa=function(e,t){return!t||t.length===0?e():Promise.all(t.map(i=>{if(i=`${Rg}${i}`,i in Lu)return;Lu[i]=!0;const r=i.endsWith(".css"),s=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${s}`))return;const o=document.createElement("link");if(o.rel=r?"stylesheet":Cg,r||(o.as="script",o.crossOrigin=""),o.href=i,document.head.appendChild(o),r)return new Promise((a,l)=>{o.addEventListener("load",a),o.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};var Pu;const Vo=typeof window!="undefined",Lg=n=>typeof n=="string",vr=()=>{};Vo&&((Pu=window==null?void 0:window.navigator)==null?void 0:Pu.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function wr(n){return Sm()?(Em(n),!0):!1}function Pg(n,e=1e3,t={}){const{immediate:i=!0,immediateCallback:r=!1}=t;let s=null;const o=qe(!1);function a(){s&&(clearInterval(s),s=null)}function l(){o.value=!1,a()}function c(){Je(e)<=0||(o.value=!0,r&&n(),a(),s=setInterval(n,Je(e)))}if(i&&Vo&&c(),yt(e)){const u=Ht(e,()=>{o.value&&Vo&&c()});wr(u)}return wr(l),{isActive:o,pause:l,resume:c}}function _s(n){var e;const t=Je(n);return(e=t==null?void 0:t.$el)!=null?e:t}const Ps=Vo?window:void 0;function Jt(...n){let e,t,i,r;if(Lg(n[0])?([t,i,r]=n,e=Ps):[e,t,i,r]=n,!e)return vr;let s=vr;const o=Ht(()=>_s(e),l=>{s(),l&&(l.addEventListener(t,i,r),s=()=>{l.removeEventListener(t,i,r),s=vr})},{immediate:!0,flush:"post"}),a=()=>{o(),s()};return wr(a),a}const Bl=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Ol="__vueuse_ssr_handlers__";Bl[Ol]=Bl[Ol]||{};Bl[Ol];var Iu=Object.getOwnPropertySymbols,Ig=Object.prototype.hasOwnProperty,Dg=Object.prototype.propertyIsEnumerable,Fg=(n,e)=>{var t={};for(var i in n)Ig.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&Iu)for(var i of Iu(n))e.indexOf(i)<0&&Dg.call(n,i)&&(t[i]=n[i]);return t};function Ng(n,e,t={}){const i=t,{window:r=Ps}=i,s=Fg(i,["window"]);let o;const a=r&&"ResizeObserver"in r,l=()=>{o&&(o.disconnect(),o=void 0)},c=Ht(()=>_s(n),h=>{l(),a&&r&&h&&(o=new ResizeObserver(e),o.observe(h,s))},{immediate:!0,flush:"post"}),u=()=>{l(),c()};return wr(u),{isSupported:a,stop:u}}function Dd(n,e={}){const{immediate:t=!0,window:i=Ps}=e,r=qe(!1);let s=null;function o(){!r.value||!i||(n(),s=i.requestAnimationFrame(o))}function a(){!r.value&&i&&(r.value=!0,o())}function l(){r.value=!1,s!=null&&i&&(i.cancelAnimationFrame(s),s=null)}return t&&a(),wr(l),{isActive:r,pause:l,resume:a}}function zl(n,e={width:0,height:0},t={}){const i=qe(e.width),r=qe(e.height);return Ng(n,([s])=>{i.value=s.contentRect.width,r.value=s.contentRect.height},t),Ht(()=>_s(n),s=>{i.value=s?e.width:0,r.value=s?e.height:0}),{width:i,height:r}}function Bg(n,e,t={}){const{root:i,rootMargin:r="0px",threshold:s=.1,window:o=Ps}=t,a=o&&"IntersectionObserver"in o;let l=vr;const c=a?Ht(()=>({el:_s(n),root:_s(i)}),({el:h,root:f})=>{if(l(),!h)return;const d=new IntersectionObserver(e,{root:f,rootMargin:r,threshold:s});d.observe(h),l=()=>{d.disconnect(),l=vr}},{immediate:!0,flush:"post"}):vr,u=()=>{l(),c()};return wr(u),{isSupported:a,stop:u}}function Og(n={}){const{type:e="page",touch:t=!0,resetOnTouchEnds:i=!1,initialValue:r={x:0,y:0},window:s=Ps,eventFilter:o}=n,a=qe(r.x),l=qe(r.y),c=qe(null),u=m=>{e==="page"?(a.value=m.pageX,l.value=m.pageY):e==="client"&&(a.value=m.clientX,l.value=m.clientY),c.value="mouse"},h=()=>{a.value=r.x,l.value=r.y},f=m=>{if(m.touches.length>0){const p=m.touches[0];e==="page"?(a.value=p.pageX,l.value=p.pageY):e==="client"&&(a.value=p.clientX,l.value=p.clientY),c.value="touch"}},d=m=>o===void 0?u(m):o(()=>u(m),{}),g=m=>o===void 0?f(m):o(()=>f(m),{});return s&&(Jt(s,"mousemove",d,{passive:!0}),Jt(s,"dragover",d,{passive:!0}),t&&(Jt(s,"touchstart",g,{passive:!0}),Jt(s,"touchmove",g,{passive:!0}),i&&Jt(s,"touchend",h,{passive:!0}))),{x:a,y:l,sourceType:c}}var Du;(function(n){n.UP="UP",n.RIGHT="RIGHT",n.DOWN="DOWN",n.LEFT="LEFT",n.NONE="NONE"})(Du||(Du={}));function IS(){const n=qe([]);return n.value.set=e=>{e&&n.value.push(e)},pd(()=>{n.value.length=0}),n}const Fd=qe(0),oa=()=>Fd,Nd=qe(0),zg=()=>Nd;Pg(()=>{Fd.value+=.1},100,{immediate:!0});Dd(()=>{Nd.value+=.01});const Ug=()=>{const n=oa();return dc(()=>{const e=.5+Math.sin(n.value)*.3,t=.5,i=.5+Math.cos(n.value)*.7;return`rgb(${e*255}, ${t*255}, ${i*255})`})},Hg=()=>{const n=oa();return dc(()=>{const e=.5+Math.sin(n.value)*.3,t=.5,i=.5+Math.cos(n.value)*.7;return{r:e,g:t,b:i}})};/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tc="140",kg=0,Fu=1,Vg=2,Bd=1,Gg=2,ns=3,Sr=0,un=1,li=2,Od=1,ii=0,_r=1,Nu=2,Bu=3,Ou=4,Wg=5,lr=100,jg=101,qg=102,zu=103,Uu=104,$g=200,Xg=201,Yg=202,Jg=203,zd=204,Ud=205,Zg=206,Kg=207,Qg=208,e1=209,t1=210,n1=0,i1=1,r1=2,Ul=3,s1=4,o1=5,a1=6,l1=7,aa=0,c1=1,u1=2,zn=0,h1=1,f1=2,d1=3,p1=4,m1=5,Hd=300,Er=301,Tr=302,Hl=303,kl=304,la=306,Go=1e3,on=1001,Vl=1002,_t=1003,Hu=1004,ku=1005,Ot=1006,g1=1007,ca=1008,Fi=1009,v1=1010,_1=1011,xs=1012,x1=1013,Ro=1014,ei=1015,ys=1016,y1=1017,b1=1018,xr=1020,M1=1021,w1=1022,Zt=1023,kd=1024,S1=1025,Ii=1026,Ar=1027,Vd=1028,E1=1029,T1=1030,A1=1031,C1=1033,Ia=33776,Da=33777,Fa=33778,Na=33779,Vu=35840,Gu=35841,Wu=35842,ju=35843,R1=36196,qu=37492,$u=37496,Xu=37808,Yu=37809,Ju=37810,Zu=37811,Ku=37812,Qu=37813,eh=37814,th=37815,nh=37816,ih=37817,rh=37818,sh=37819,oh=37820,ah=37821,lh=36492,L1=2200,P1=2201,I1=2202,Wo=2300,jo=2301,Ba=2302,ur=2400,hr=2401,qo=2402,Ac=2500,Gd=2501,D1=0,DS=1,FS=2,ci=3e3,it=3001,F1=3200,N1=3201,Fr=0,B1=1,Fn="srgb",Si="srgb-linear",Oa=7680,O1=519,bs=35044,$o=35048,ch="300 es",Gl=1035;class Ni{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Mt=[];for(let n=0;n<256;n++)Mt[n]=(n<16?"0":"")+n.toString(16);let uh=1234567;const ls=Math.PI/180,Ms=180/Math.PI;function Kt(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[i&255]+Mt[i>>8&255]+Mt[i>>16&255]+Mt[i>>24&255]).toLowerCase()}function wt(n,e,t){return Math.max(e,Math.min(t,n))}function Cc(n,e){return(n%e+e)%e}function z1(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function U1(n,e,t){return n!==e?(t-n)/(e-n):0}function cs(n,e,t){return(1-t)*n+t*e}function H1(n,e,t,i){return cs(n,e,1-Math.exp(-t*i))}function k1(n,e=1){return e-Math.abs(Cc(n,e*2)-e)}function V1(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function G1(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function W1(n,e){return n+Math.floor(Math.random()*(e-n+1))}function j1(n,e){return n+Math.random()*(e-n)}function q1(n){return n*(.5-Math.random())}function $1(n){n!==void 0&&(uh=n);let e=uh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function X1(n){return n*ls}function Y1(n){return n*Ms}function Wl(n){return(n&n-1)===0&&n!==0}function Wd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Xo(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function J1(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),f=o((e-i)/2),d=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Z1(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function K1(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var NS=Object.freeze({__proto__:null,DEG2RAD:ls,RAD2DEG:Ms,generateUUID:Kt,clamp:wt,euclideanModulo:Cc,mapLinear:z1,inverseLerp:U1,lerp:cs,damp:H1,pingpong:k1,smoothstep:V1,smootherstep:G1,randInt:W1,randFloat:j1,randFloatSpread:q1,seededRandom:$1,degToRad:X1,radToDeg:Y1,isPowerOfTwo:Wl,ceilPowerOfTwo:Wd,floorPowerOfTwo:Xo,setQuaternionFromProperEuler:J1,normalize:K1,denormalize:Z1});class ae{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}ae.prototype.isVector2=!0;class St{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],m=r[0],p=r[3],v=r[6],b=r[1],A=r[4],w=r[7],T=r[2],R=r[5],z=r[8];return s[0]=o*m+a*b+l*T,s[3]=o*p+a*A+l*R,s[6]=o*v+a*w+l*z,s[1]=c*m+u*b+h*T,s[4]=c*p+u*A+h*R,s[7]=c*v+u*w+h*z,s[2]=f*m+d*b+g*T,s[5]=f*p+d*A+g*R,s[8]=f*v+d*w+g*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,g=t*h+i*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=h*m,e[1]=(r*c-u*i)*m,e[2]=(a*i-r*o)*m,e[3]=f*m,e[4]=(u*t-r*l)*m,e[5]=(r*s-a*t)*m,e[6]=d*m,e[7]=(i*l-c*t)*m,e[8]=(o*t-i*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],c=r[4],u=r[7];return r[0]=t*s+i*l,r[3]=t*o+i*c,r[6]=t*a+i*u,r[1]=-i*s+t*l,r[4]=-i*o+t*c,r[7]=-i*a+t*u,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}St.prototype.isMatrix3=!0;function jd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>65535)return!0;return!1}function ws(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Di(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Lo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const za={[Fn]:{[Si]:Di},[Si]:{[Fn]:Lo}},en={legacyMode:!0,get workingColorSpace(){return Si},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(za[e]&&za[e][t]!==void 0){const i=za[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},qd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ft={r:0,g:0,b:0},tn={h:0,s:0,l:0},Gs={h:0,s:0,l:0};function Ua(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Ws(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class Me{constructor(e,t,i){return t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,en.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Si){return this.r=e,this.g=t,this.b=i,en.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Si){if(e=Cc(e,1),t=wt(t,0,1),i=wt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Ua(o,s,e+1/3),this.g=Ua(o,s,e),this.b=Ua(o,s,e-1/3)}return en.toWorkingColorSpace(this,r),this}setStyle(e,t=Fn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,en.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,en.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseInt(s[2],10)/100,u=parseInt(s[3],10)/100;return i(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,en.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,en.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Fn){const i=qd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}copyLinearToSRGB(e){return this.r=Lo(e.r),this.g=Lo(e.g),this.b=Lo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fn){return en.fromWorkingColorSpace(Ws(this,ft),e),wt(ft.r*255,0,255)<<16^wt(ft.g*255,0,255)<<8^wt(ft.b*255,0,255)<<0}getHexString(e=Fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Si){en.fromWorkingColorSpace(Ws(this,ft),t);const i=ft.r,r=ft.g,s=ft.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Si){return en.fromWorkingColorSpace(Ws(this,ft),t),e.r=ft.r,e.g=ft.g,e.b=ft.b,e}getStyle(e=Fn){return en.fromWorkingColorSpace(Ws(this,ft),e),e!==Fn?`color(${e} ${ft.r} ${ft.g} ${ft.b})`:`rgb(${ft.r*255|0},${ft.g*255|0},${ft.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(tn),tn.h+=e,tn.s+=t,tn.l+=i,this.setHSL(tn.h,tn.s,tn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(tn),e.getHSL(Gs);const i=cs(tn.h,Gs.h,t),r=cs(tn.s,Gs.s,t),s=cs(tn.l,Gs.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Me.NAMES=qd;Me.prototype.isColor=!0;Me.prototype.r=1;Me.prototype.g=1;Me.prototype.b=1;let Vi;class Bi{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vi===void 0&&(Vi=ws("canvas")),Vi.width=e.width,Vi.height=e.height;const i=Vi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Vi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=ws("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Di(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Di(t[i]/255)*255):t[i]=Di(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Rc{constructor(e=null){this.uuid=Kt(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ha(r[o].image)):s.push(Ha(r[o]))}else s=Ha(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ha(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?Bi.getDataURL(n):n.data?{data:Array.prototype.slice.call(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}Rc.prototype.isSource=!0;let Q1=0;class bt extends Ni{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,i=on,r=on,s=Ot,o=ca,a=Zt,l=Fi,c=1,u=ci){super(),Object.defineProperty(this,"id",{value:Q1++}),this.uuid=Kt(),this.name="",this.source=new Rc(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new St,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Go:e.x=e.x-Math.floor(e.x);break;case on:e.x=e.x<0?0:1;break;case Vl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Go:e.y=e.y-Math.floor(e.y);break;case on:e.y=e.y<0?0:1;break;case Vl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=Hd;bt.prototype.isTexture=!0;class et{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],m=l[2],p=l[6],v=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-m)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+m)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,w=(d+1)/2,T=(v+1)/2,R=(u+f)/4,z=(h+m)/4,M=(g+p)/4;return A>w&&A>T?A<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(A),r=R/i,s=z/i):w>T?w<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),i=R/r,s=M/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=z/s,r=M/s),this.set(i,r,s,t),this}let b=Math.sqrt((p-g)*(p-g)+(h-m)*(h-m)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(h-m)/b,this.z=(f-u)/b,this.w=Math.acos((c+d+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}et.prototype.isVector4=!0;class qt extends Ni{constructor(e,t,i={}){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new bt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ot,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Rc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}qt.prototype.isWebGLRenderTarget=!0;class ua extends bt{constructor(e=null,t=1,i=1,r=1){super(null),this.image={data:e,width:t,height:i,depth:r},this.magFilter=_t,this.minFilter=_t,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}ua.prototype.isDataArrayTexture=!0;class ev extends qt{constructor(e,t,i){super(e,t),this.depth=i,this.texture=new ua(null,e,t,i),this.texture.isRenderTargetTexture=!0}}ev.prototype.isWebGLArrayRenderTarget=!0;class Lc extends bt{constructor(e=null,t=1,i=1,r=1){super(null),this.image={data:e,width:t,height:i,depth:r},this.magFilter=_t,this.minFilter=_t,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}Lc.prototype.isData3DTexture=!0;class tv extends qt{constructor(e,t,i){super(e,t),this.depth=i,this.texture=new Lc(null,e,t,i),this.texture.isRenderTargetTexture=!0}}tv.prototype.isWebGL3DRenderTarget=!0;class nv extends qt{constructor(e,t,i,r={}){super(e,t,r);const s=this.texture;this.texture=[];for(let o=0;o<i;o++)this.texture[o]=s.clone(),this.texture[o].isRenderTargetTexture=!0}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.texture.length;r<s;r++)this.texture[r].image.width=e,this.texture[r].image.height=t,this.texture[r].image.depth=i;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.texture.length=0;for(let t=0,i=e.texture.length;t<i;t++)this.texture[t]=e.texture[t].clone(),this.texture[t].isRenderTargetTexture=!0;return this}}nv.prototype.isWebGLMultipleRenderTargets=!0;class kt{constructor(e=0,t=0,i=0,r=1){this._x=e,this._y=t,this._z=i,this._w=r}static slerp(e,t,i,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(e,t,r)}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=s[o+0],d=s[o+1],g=s[o+2],m=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=m;return}if(h!==m||l!==f||c!==d||u!==g){let p=1-a;const v=l*f+c*d+u*g+h*m,b=v>=0?1:-1,A=1-v*v;if(A>Number.EPSILON){const T=Math.sqrt(A),R=Math.atan2(T,v*b);p=Math.sin(p*R)/T,a=Math.sin(a*R)/T}const w=a*b;if(l=l*p+f*w,c=c*p+d*w,u=u*p+g*w,h=h*p+m*w,p===1-a){const T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}kt.prototype.isQuaternion=!0;class C{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(hh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*i,u=l*i+a*t-s*r,h=l*r+s*i-o*t,f=-s*t-o*i-a*r;return this.x=c*l+f*-s+u*-a-h*-o,this.y=u*l+f*-o+h*-s-c*-a,this.z=h*l+f*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ka.copy(this).projectOnVector(e),this.sub(ka)}reflect(e){return this.sub(ka.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}C.prototype.isVector3=!0;const ka=new C,hh=new kt;class fn{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<i&&(i=h),f<r&&(r=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<i&&(i=h),f<r&&(r=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)vi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(vi)}else i.boundingBox===null&&i.computeBoundingBox(),Va.copy(i.boundingBox),Va.applyMatrix4(e.matrixWorld),this.union(Va);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wr),js.subVectors(this.max,Wr),Gi.subVectors(e.a,Wr),Wi.subVectors(e.b,Wr),ji.subVectors(e.c,Wr),Wn.subVectors(Wi,Gi),jn.subVectors(ji,Wi),_i.subVectors(Gi,ji);let t=[0,-Wn.z,Wn.y,0,-jn.z,jn.y,0,-_i.z,_i.y,Wn.z,0,-Wn.x,jn.z,0,-jn.x,_i.z,0,-_i.x,-Wn.y,Wn.x,0,-jn.y,jn.x,0,-_i.y,_i.x,0];return!Ga(t,Gi,Wi,ji,js)||(t=[1,0,0,0,1,0,0,0,1],!Ga(t,Gi,Wi,ji,js))?!1:(qs.crossVectors(Wn,jn),t=[qs.x,qs.y,qs.z],Ga(t,Gi,Wi,ji,js))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return vi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}fn.prototype.isBox3=!0;const Cn=[new C,new C,new C,new C,new C,new C,new C,new C],vi=new C,Va=new fn,Gi=new C,Wi=new C,ji=new C,Wn=new C,jn=new C,_i=new C,Wr=new C,js=new C,qs=new C,xi=new C;function Ga(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){xi.fromArray(n,s);const a=r.x*Math.abs(xi.x)+r.y*Math.abs(xi.y)+r.z*Math.abs(xi.z),l=e.dot(xi),c=t.dot(xi),u=i.dot(xi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const iv=new fn,fh=new C,$s=new C,Wa=new C;class Nr{constructor(e=new C,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):iv.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Wa.subVectors(e,this.center);const t=Wa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(Wa.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?$s.set(0,0,1).multiplyScalar(e.radius):$s.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(fh.copy(e.center).add($s)),this.expandByPoint(fh.copy(e.center).sub($s)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Rn=new C,ja=new C,Xs=new C,qn=new C,qa=new C,Ys=new C,$a=new C;class Br{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rn.copy(this.direction).multiplyScalar(t).add(this.origin),Rn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ja.copy(e).add(t).multiplyScalar(.5),Xs.copy(t).sub(e).normalize(),qn.copy(this.origin).sub(ja);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Xs),a=qn.dot(this.direction),l=-qn.dot(Xs),c=qn.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const m=1/u;h*=m,f*=m,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(h).add(this.origin),r&&r.copy(Xs).multiplyScalar(f).add(ja),d}intersectSphere(e,t){Rn.subVectors(e.center,this.origin);const i=Rn.dot(this.direction),r=Rn.dot(Rn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Rn)!==null}intersectTriangle(e,t,i,r,s){qa.subVectors(t,e),Ys.subVectors(i,e),$a.crossVectors(qa,Ys);let o=this.direction.dot($a),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qn.subVectors(this.origin,e);const l=a*this.direction.dot(Ys.crossVectors(qn,Ys));if(l<0)return null;const c=a*this.direction.dot(qa.cross(qn));if(c<0||l+c>o)return null;const u=-a*qn.dot($a);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Se{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,o,a,l,c,u,h,f,d,g,m,p){const v=this.elements;return v[0]=e,v[4]=t,v[8]=i,v[12]=r,v[1]=s,v[5]=o,v[9]=a,v[13]=l,v[2]=c,v[6]=u,v[10]=h,v[14]=f,v[3]=d,v[7]=g,v[11]=m,v[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Se().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/qi.setFromMatrixColumn(e,0).length(),s=1/qi.setFromMatrixColumn(e,1).length(),o=1/qi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,m=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-m*c,t[9]=-a*l,t[2]=m-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,m=c*h;t[0]=f+m*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=m+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,m=c*h;t[0]=f-m*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=m-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,m=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+m,t[1]=l*h,t[5]=m*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=m-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-m*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+m,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=m*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rv,e,sv)}lookAt(e,t,i){const r=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),$n.crossVectors(i,Vt),$n.lengthSq()===0&&(Math.abs(i.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),$n.crossVectors(i,Vt)),$n.normalize(),Js.crossVectors(Vt,$n),r[0]=$n.x,r[4]=Js.x,r[8]=Vt.x,r[1]=$n.y,r[5]=Js.y,r[9]=Vt.y,r[2]=$n.z,r[6]=Js.z,r[10]=Vt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],m=i[6],p=i[10],v=i[14],b=i[3],A=i[7],w=i[11],T=i[15],R=r[0],z=r[4],M=r[8],P=r[12],D=r[1],B=r[5],le=r[9],he=r[13],O=r[2],K=r[6],U=r[10],$=r[14],q=r[3],j=r[7],Z=r[11],ce=r[15];return s[0]=o*R+a*D+l*O+c*q,s[4]=o*z+a*B+l*K+c*j,s[8]=o*M+a*le+l*U+c*Z,s[12]=o*P+a*he+l*$+c*ce,s[1]=u*R+h*D+f*O+d*q,s[5]=u*z+h*B+f*K+d*j,s[9]=u*M+h*le+f*U+d*Z,s[13]=u*P+h*he+f*$+d*ce,s[2]=g*R+m*D+p*O+v*q,s[6]=g*z+m*B+p*K+v*j,s[10]=g*M+m*le+p*U+v*Z,s[14]=g*P+m*he+p*$+v*ce,s[3]=b*R+A*D+w*O+T*q,s[7]=b*z+A*B+w*K+T*j,s[11]=b*M+A*le+w*U+T*Z,s[15]=b*P+A*he+w*$+T*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],m=e[7],p=e[11],v=e[15];return g*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*d-i*l*d)+m*(+t*l*d-t*c*f+s*o*f-r*o*d+r*c*u-s*l*u)+p*(+t*c*h-t*a*d-s*o*h+i*o*d+s*a*u-i*c*u)+v*(-r*a*u-t*l*h+t*a*f+r*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],m=e[13],p=e[14],v=e[15],b=h*p*c-m*f*c+m*l*d-a*p*d-h*l*v+a*f*v,A=g*f*c-u*p*c-g*l*d+o*p*d+u*l*v-o*f*v,w=u*m*c-g*h*c+g*a*d-o*m*d-u*a*v+o*h*v,T=g*h*l-u*m*l-g*a*f+o*m*f+u*a*p-o*h*p,R=t*b+i*A+r*w+s*T;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/R;return e[0]=b*z,e[1]=(m*f*s-h*p*s-m*r*d+i*p*d+h*r*v-i*f*v)*z,e[2]=(a*p*s-m*l*s+m*r*c-i*p*c-a*r*v+i*l*v)*z,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*d-i*l*d)*z,e[4]=A*z,e[5]=(u*p*s-g*f*s+g*r*d-t*p*d-u*r*v+t*f*v)*z,e[6]=(g*l*s-o*p*s-g*r*c+t*p*c+o*r*v-t*l*v)*z,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*d+t*l*d)*z,e[8]=w*z,e[9]=(g*h*s-u*m*s-g*i*d+t*m*d+u*i*v-t*h*v)*z,e[10]=(o*m*s-g*a*s+g*i*c-t*m*c-o*i*v+t*a*v)*z,e[11]=(u*a*s-o*h*s-u*i*c+t*h*c+o*i*d-t*a*d)*z,e[12]=T*z,e[13]=(u*m*r-g*h*r+g*i*f-t*m*f-u*i*p+t*h*p)*z,e[14]=(g*a*r-o*m*r-g*i*l+t*m*l+o*i*p-t*a*p)*z,e[15]=(o*h*r-u*a*r+u*i*l-t*h*l-o*i*f+t*a*f)*z,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,g=s*h,m=o*u,p=o*h,v=a*h,b=l*c,A=l*u,w=l*h,T=i.x,R=i.y,z=i.z;return r[0]=(1-(m+v))*T,r[1]=(d+w)*T,r[2]=(g-A)*T,r[3]=0,r[4]=(d-w)*R,r[5]=(1-(f+v))*R,r[6]=(p+b)*R,r[7]=0,r[8]=(g+A)*z,r[9]=(p-b)*z,r[10]=(1-(f+m))*z,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=qi.set(r[0],r[1],r[2]).length();const o=qi.set(r[4],r[5],r[6]).length(),a=qi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],nn.copy(this);const c=1/s,u=1/o,h=1/a;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=u,nn.elements[5]*=u,nn.elements[6]*=u,nn.elements[8]*=h,nn.elements[9]*=h,nn.elements[10]*=h,t.setFromRotationMatrix(nn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*s/(t-e),c=2*s/(i-r),u=(t+e)/(t-e),h=(i+r)/(i-r),f=-(o+s)/(o-s),d=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,l=1/(t-e),c=1/(i-r),u=1/(o-s),h=(t+e)*l,f=(i+r)*c,d=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}Se.prototype.isMatrix4=!0;const qi=new C,nn=new Se,rv=new C(0,0,0),sv=new C(1,1,1),$n=new C,Js=new C,Vt=new C,dh=new Se,ph=new kt;class Oi{constructor(e=0,t=0,i=0,r=Oi.DefaultOrder){this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-wt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return dh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ph.setFromEuler(this),this.setFromQuaternion(ph,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oi.prototype.isEuler=!0;Oi.DefaultOrder="XYZ";Oi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class $d{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ov=0;const mh=new C,$i=new kt,Ln=new Se,Zs=new C,jr=new C,av=new C,lv=new kt,gh=new C(1,0,0),vh=new C(0,1,0),_h=new C(0,0,1),cv={type:"added"},xh={type:"removed"};class Ze extends Ni{constructor(){super(),Object.defineProperty(this,"id",{value:ov++}),this.uuid=Kt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ze.DefaultUp.clone();const e=new C,t=new Oi,i=new kt,r=new C(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Se},normalMatrix:{value:new St}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=Ze.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new $d,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.multiply($i),this}rotateOnWorldAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.premultiply($i),this}rotateX(e){return this.rotateOnAxis(gh,e)}rotateY(e){return this.rotateOnAxis(vh,e)}rotateZ(e){return this.rotateOnAxis(_h,e)}translateOnAxis(e,t){return mh.copy(e).applyQuaternion(this.quaternion),this.position.add(mh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gh,e)}translateY(e){return this.translateOnAxis(vh,e)}translateZ(e){return this.translateOnAxis(_h,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Zs.copy(e):Zs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(jr,Zs,this.up):Ln.lookAt(Zs,jr,this.up),this.quaternion.setFromRotationMatrix(Ln),r&&(Ln.extractRotation(r.matrixWorld),$i.setFromRotationMatrix(Ln),this.quaternion.premultiply($i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(cv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(xh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,e,av),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,lv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ze.DefaultUp=new C(0,1,0);Ze.DefaultMatrixAutoUpdate=!0;Ze.prototype.isObject3D=!0;const rn=new C,Pn=new C,Xa=new C,In=new C,Xi=new C,Yi=new C,yh=new C,Ya=new C,Ja=new C,Za=new C;class ht{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),rn.subVectors(e,t),r.cross(rn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){rn.subVectors(r,t),Pn.subVectors(i,t),Xa.subVectors(e,t);const o=rn.dot(rn),a=rn.dot(Pn),l=rn.dot(Xa),c=Pn.dot(Pn),u=Pn.dot(Xa),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,In),In.x>=0&&In.y>=0&&In.x+In.y<=1}static getUV(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,In),l.set(0,0),l.addScaledVector(s,In.x),l.addScaledVector(o,In.y),l.addScaledVector(a,In.z),l}static isFrontFacing(e,t,i,r){return rn.subVectors(i,t),Pn.subVectors(e,t),rn.cross(Pn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),rn.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ht.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ht.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return ht.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ht.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ht.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Xi.subVectors(r,i),Yi.subVectors(s,i),Ya.subVectors(e,i);const l=Xi.dot(Ya),c=Yi.dot(Ya);if(l<=0&&c<=0)return t.copy(i);Ja.subVectors(e,r);const u=Xi.dot(Ja),h=Yi.dot(Ja);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Xi,o);Za.subVectors(e,s);const d=Xi.dot(Za),g=Yi.dot(Za);if(g>=0&&d<=g)return t.copy(s);const m=d*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Yi,a);const p=u*g-d*h;if(p<=0&&h-u>=0&&d-g>=0)return yh.subVectors(s,r),a=(h-u)/(h-u+(d-g)),t.copy(r).addScaledVector(yh,a);const v=1/(p+m+f);return o=m*v,a=f*v,t.copy(i).addScaledVector(Xi,o).addScaledVector(Yi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let uv=0;class lt extends Ni{constructor(){super(),Object.defineProperty(this,"id",{value:uv++}),this.uuid=Kt(),this.name="",this.type="Material",this.blending=_r,this.side=Sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=zd,this.blendDst=Ud,this.blendEquation=lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ul,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=O1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oa,this.stencilZFail=Oa,this.stencilZPass=Oa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===Od;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_r&&(i.blending=this.blending),this.side!==Sr&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}lt.prototype.isMaterial=!0;lt.fromType=function(){return null};class ha extends lt{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=aa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}ha.prototype.isMeshBasicMaterial=!0;const ut=new C,Ks=new ae;class pt{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=bs,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),o=new Me),t[i++]=o.r,t[i++]=o.g,t[i++]=o.b}return this}copyVector2sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),o=new ae),t[i++]=o.x,t[i++]=o.y}return this}copyVector3sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),o=new C),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z}return this}copyVector4sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),o=new et),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z,t[i++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ks.fromBufferAttribute(this,t),Ks.applyMatrix3(e),this.setXY(t,Ks.x,Ks.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bs&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}pt.prototype.isBufferAttribute=!0;class Xd extends pt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Yd extends pt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class hv extends pt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}hv.prototype.isFloat16BufferAttribute=!0;class st extends pt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let fv=0;const Xt=new Se,Ka=new Ze,Ji=new C,Gt=new fn,qr=new fn,vt=new C;class nt extends Ni{constructor(){super(),Object.defineProperty(this,"id",{value:fv++}),this.uuid=Kt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jd(e)?Yd:Xd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new St().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,i){return Xt.makeTranslation(e,t,i),this.applyMatrix4(Xt),this}scale(e,t,i){return Xt.makeScale(e,t,i),this.applyMatrix4(Xt),this}lookAt(e){return Ka.lookAt(e),Ka.updateMatrix(),this.applyMatrix4(Ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new st(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Gt.setFromBufferAttribute(s),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){const i=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];qr.setFromBufferAttribute(a),this.morphTargetsRelative?(vt.addVectors(Gt.min,qr.min),Gt.expandByPoint(vt),vt.addVectors(Gt.max,qr.max),Gt.expandByPoint(vt)):(Gt.expandByPoint(qr.min),Gt.expandByPoint(qr.max))}Gt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)vt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(vt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)vt.fromBufferAttribute(a,c),l&&(Ji.fromBufferAttribute(e,c),vt.add(Ji)),r=Math.max(r,i.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let D=0;D<a;D++)c[D]=new C,u[D]=new C;const h=new C,f=new C,d=new C,g=new ae,m=new ae,p=new ae,v=new C,b=new C;function A(D,B,le){h.fromArray(r,D*3),f.fromArray(r,B*3),d.fromArray(r,le*3),g.fromArray(o,D*2),m.fromArray(o,B*2),p.fromArray(o,le*2),f.sub(h),d.sub(h),m.sub(g),p.sub(g);const he=1/(m.x*p.y-p.x*m.y);!isFinite(he)||(v.copy(f).multiplyScalar(p.y).addScaledVector(d,-m.y).multiplyScalar(he),b.copy(d).multiplyScalar(m.x).addScaledVector(f,-p.x).multiplyScalar(he),c[D].add(v),c[B].add(v),c[le].add(v),u[D].add(b),u[B].add(b),u[le].add(b))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let D=0,B=w.length;D<B;++D){const le=w[D],he=le.start,O=le.count;for(let K=he,U=he+O;K<U;K+=3)A(i[K+0],i[K+1],i[K+2])}const T=new C,R=new C,z=new C,M=new C;function P(D){z.fromArray(s,D*3),M.copy(z);const B=c[D];T.copy(B),T.sub(z.multiplyScalar(z.dot(B))).normalize(),R.crossVectors(M,B);const he=R.dot(u[D])<0?-1:1;l[D*4]=T.x,l[D*4+1]=T.y,l[D*4+2]=T.z,l[D*4+3]=he}for(let D=0,B=w.length;D<B;++D){const le=w[D],he=le.start,O=le.count;for(let K=he,U=he+O;K<U;K+=3)P(i[K+0]),P(i[K+1]),P(i[K+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const r=new C,s=new C,o=new C,a=new C,l=new C,c=new C,u=new C,h=new C;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),m=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),o.fromBufferAttribute(t,p),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,m),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const r in i){if(e.attributes[r]===void 0)continue;const o=i[r].array,a=e.attributes[r],l=a.array,c=a.itemSize*t,u=Math.min(l.length,o.length-c);for(let h=0,f=c;h<u;h++,f++)o[f]=l[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let m=0,p=l.length;m<p;m++){a.isInterleavedBufferAttribute?d=l[m]*a.data.stride+a.offset:d=l[m]*u;for(let v=0;v<u;v++)f[g++]=c[d++]}return new pt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}nt.prototype.isBufferGeometry=!0;const bh=new Se,Zi=new Br,Qa=new Nr,Xn=new C,Yn=new C,Jn=new C,el=new C,tl=new C,nl=new C,Qs=new C,eo=new C,to=new C,no=new ae,io=new ae,ro=new ae,il=new C,so=new C;class Tt extends Ze{constructor(e=new nt,t=new ha){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Qa.copy(i.boundingSphere),Qa.applyMatrix4(s),e.ray.intersectsSphere(Qa)===!1)||(bh.copy(s).invert(),Zi.copy(e.ray).applyMatrix4(bh),i.boundingBox!==null&&Zi.intersectsBox(i.boundingBox)===!1))return;let o;if(i.isBufferGeometry){const a=i.index,l=i.attributes.position,c=i.morphAttributes.position,u=i.morphTargetsRelative,h=i.attributes.uv,f=i.attributes.uv2,d=i.groups,g=i.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,p=d.length;m<p;m++){const v=d[m],b=r[v.materialIndex],A=Math.max(v.start,g.start),w=Math.min(a.count,Math.min(v.start+v.count,g.start+g.count));for(let T=A,R=w;T<R;T+=3){const z=a.getX(T),M=a.getX(T+1),P=a.getX(T+2);o=oo(this,b,e,Zi,l,c,u,h,f,z,M,P),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),p=Math.min(a.count,g.start+g.count);for(let v=m,b=p;v<b;v+=3){const A=a.getX(v),w=a.getX(v+1),T=a.getX(v+2);o=oo(this,r,e,Zi,l,c,u,h,f,A,w,T),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,p=d.length;m<p;m++){const v=d[m],b=r[v.materialIndex],A=Math.max(v.start,g.start),w=Math.min(l.count,Math.min(v.start+v.count,g.start+g.count));for(let T=A,R=w;T<R;T+=3){const z=T,M=T+1,P=T+2;o=oo(this,b,e,Zi,l,c,u,h,f,z,M,P),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),p=Math.min(l.count,g.start+g.count);for(let v=m,b=p;v<b;v+=3){const A=v,w=v+1,T=v+2;o=oo(this,r,e,Zi,l,c,u,h,f,A,w,T),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}}else i.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}Tt.prototype.isMesh=!0;function dv(n,e,t,i,r,s,o,a){let l;if(e.side===un?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side!==li,a),l===null)return null;so.copy(a),so.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(so);return c<t.near||c>t.far?null:{distance:c,point:so.clone(),object:n}}function oo(n,e,t,i,r,s,o,a,l,c,u,h){Xn.fromBufferAttribute(r,c),Yn.fromBufferAttribute(r,u),Jn.fromBufferAttribute(r,h);const f=n.morphTargetInfluences;if(s&&f){Qs.set(0,0,0),eo.set(0,0,0),to.set(0,0,0);for(let g=0,m=s.length;g<m;g++){const p=f[g],v=s[g];p!==0&&(el.fromBufferAttribute(v,c),tl.fromBufferAttribute(v,u),nl.fromBufferAttribute(v,h),o?(Qs.addScaledVector(el,p),eo.addScaledVector(tl,p),to.addScaledVector(nl,p)):(Qs.addScaledVector(el.sub(Xn),p),eo.addScaledVector(tl.sub(Yn),p),to.addScaledVector(nl.sub(Jn),p)))}Xn.add(Qs),Yn.add(eo),Jn.add(to)}n.isSkinnedMesh&&(n.boneTransform(c,Xn),n.boneTransform(u,Yn),n.boneTransform(h,Jn));const d=dv(n,e,t,i,Xn,Yn,Jn,il);if(d){a&&(no.fromBufferAttribute(a,c),io.fromBufferAttribute(a,u),ro.fromBufferAttribute(a,h),d.uv=ht.getUV(il,Xn,Yn,Jn,no,io,ro,new ae)),l&&(no.fromBufferAttribute(l,c),io.fromBufferAttribute(l,u),ro.fromBufferAttribute(l,h),d.uv2=ht.getUV(il,Xn,Yn,Jn,no,io,ro,new ae));const g={a:c,b:u,c:h,normal:new C,materialIndex:0};ht.getNormal(Xn,Yn,Jn,g.normal),d.face=g}return d}class Is extends nt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(u,3)),this.setAttribute("uv",new st(h,2));function g(m,p,v,b,A,w,T,R,z,M,P){const D=w/z,B=T/M,le=w/2,he=T/2,O=R/2,K=z+1,U=M+1;let $=0,q=0;const j=new C;for(let Z=0;Z<U;Z++){const ce=Z*B-he;for(let re=0;re<K;re++){const fe=re*D-le;j[m]=fe*b,j[p]=ce*A,j[v]=O,c.push(j.x,j.y,j.z),j[m]=0,j[p]=0,j[v]=R>0?1:-1,u.push(j.x,j.y,j.z),h.push(re/z),h.push(1-Z/M),$+=1}}for(let Z=0;Z<M;Z++)for(let ce=0;ce<z;ce++){const re=f+ce+K*Z,fe=f+ce+K*(Z+1),be=f+(ce+1)+K*(Z+1),Ee=f+(ce+1)+K*Z;l.push(re,fe,Ee),l.push(fe,be,Ee),q+=6}a.addGroup(d,q,P),d+=q,f+=$}}static fromJSON(e){return new Is(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Et(n){const e={};for(let t=0;t<n.length;t++){const i=Cr(n[t]);for(const r in i)e[r]=i[r]}return e}const pv={clone:Cr,merge:Et};var mv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hn extends lt{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=mv,this.fragmentShader=gv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cr(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}hn.prototype.isShaderMaterial=!0;class fa extends Ze{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}fa.prototype.isCamera=!0;class zt extends fa{constructor(e=50,t=1,i=.1,r=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ms*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ls*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ms*2*Math.atan(Math.tan(ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ls*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}zt.prototype.isPerspectiveCamera=!0;const Ki=90,Qi=1;class Pc extends Ze{constructor(e,t,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new zt(Ki,Qi,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new C(1,0,0)),this.add(r);const s=new zt(Ki,Qi,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new C(-1,0,0)),this.add(s);const o=new zt(Ki,Qi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new C(0,1,0)),this.add(o);const a=new zt(Ki,Qi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new C(0,-1,0)),this.add(a);const l=new zt(Ki,Qi,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new C(0,0,1)),this.add(l);const c=new zt(Ki,Qi,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new C(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=zn,e.xr.enabled=!1;const d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=d,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class da extends bt{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Er,super(e,t,i,r,s,o,a,l,c,u),this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}da.prototype.isCubeTexture=!0;class Jd extends qt{constructor(e,t={}){super(e,e,t);const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new da(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ot}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Is(5,5,5),s=new hn({name:"CubemapFromEquirect",uniforms:Cr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:ii});s.uniforms.tEquirect.value=t;const o=new Tt(r,s),a=t.minFilter;return t.minFilter===ca&&(t.minFilter=Ot),new Pc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}Jd.prototype.isWebGLCubeRenderTarget=!0;const rl=new C,vv=new C,_v=new St;class Nn{constructor(e=new C(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=rl.subVectors(i,t).cross(vv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(rl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||_v.getNormalMatrix(e),r=this.coplanarPoint(rl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}Nn.prototype.isPlane=!0;const er=new Nr,ao=new C;class pa{constructor(e=new Nn,t=new Nn,i=new Nn,r=new Nn,s=new Nn,o=new Nn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],c=i[5],u=i[6],h=i[7],f=i[8],d=i[9],g=i[10],m=i[11],p=i[12],v=i[13],b=i[14],A=i[15];return t[0].setComponents(a-r,h-l,m-f,A-p).normalize(),t[1].setComponents(a+r,h+l,m+f,A+p).normalize(),t[2].setComponents(a+s,h+c,m+d,A+v).normalize(),t[3].setComponents(a-s,h-c,m-d,A-v).normalize(),t[4].setComponents(a-o,h-u,m-g,A-b).normalize(),t[5].setComponents(a+o,h+u,m+g,A+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),er.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(er)}intersectsSprite(e){return er.center.set(0,0,0),er.radius=.7071067811865476,er.applyMatrix4(e.matrixWorld),this.intersectsSphere(er)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ao.x=r.normal.x>0?e.max.x:e.min.x,ao.y=r.normal.y>0?e.max.y:e.min.y,ao.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ao)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zd(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function xv(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const h=c.array,f=c.usage,d=n.createBuffer();n.bindBuffer(u,d),n.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,d=u.updateRange;n.bindBuffer(h,c),d.count===-1?n.bufferSubData(h,0,f):(t?n.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):n.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h===void 0?i.set(c,r(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class Ic extends nt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],m=[],p=[];for(let v=0;v<u;v++){const b=v*f-o;for(let A=0;A<c;A++){const w=A*h-s;g.push(w,-b,0),m.push(0,0,1),p.push(A/a),p.push(1-v/l)}}for(let v=0;v<l;v++)for(let b=0;b<a;b++){const A=b+c*v,w=b+c*(v+1),T=b+1+c*(v+1),R=b+1+c*v;d.push(A,w,R),d.push(w,T,R)}this.setIndex(d),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(m,3)),this.setAttribute("uv",new st(p,2))}static fromJSON(e){return new Ic(e.width,e.height,e.widthSegments,e.heightSegments)}}var yv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,bv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mv=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,wv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ev=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tv="vec3 transformed = vec3( position );",Av=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cv=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Rv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Lv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Pv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Iv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ov=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,zv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Uv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Hv=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,kv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Gv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jv="gl_FragColor = linearToOutputTexel( gl_FragColor );",qv=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$v=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Xv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Jv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Kv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,e_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,t_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,n_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,i_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,r_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,s_=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,o_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,a_=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,l_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,c_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,u_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,h_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,f_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,d_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,p_=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,m_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,g_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,v_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,__=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,y_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,b_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,M_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,w_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,S_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,T_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,A_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,C_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,R_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,L_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,P_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,I_=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,D_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,B_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,O_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,z_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,U_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,H_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,k_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,V_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,G_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,W_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,j_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,q_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,X_=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Y_=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,J_=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Z_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,K_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Q_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,e2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,t2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,n2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,i2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,r2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,s2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,o2=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,a2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,l2=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,c2=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,u2=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,h2=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,f2=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,d2=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,p2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const m2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,g2=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,v2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_2=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,x2=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,y2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,b2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,M2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,w2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,E2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,T2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,A2=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,C2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R2=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L2=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,I2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,F2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,N2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,z2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,V2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,G2=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,j2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,q2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ue={alphamap_fragment:yv,alphamap_pars_fragment:bv,alphatest_fragment:Mv,alphatest_pars_fragment:wv,aomap_fragment:Sv,aomap_pars_fragment:Ev,begin_vertex:Tv,beginnormal_vertex:Av,bsdfs:Cv,bumpmap_pars_fragment:Rv,clipping_planes_fragment:Lv,clipping_planes_pars_fragment:Pv,clipping_planes_pars_vertex:Iv,clipping_planes_vertex:Dv,color_fragment:Fv,color_pars_fragment:Nv,color_pars_vertex:Bv,color_vertex:Ov,common:zv,cube_uv_reflection_fragment:Uv,defaultnormal_vertex:Hv,displacementmap_pars_vertex:kv,displacementmap_vertex:Vv,emissivemap_fragment:Gv,emissivemap_pars_fragment:Wv,encodings_fragment:jv,encodings_pars_fragment:qv,envmap_fragment:$v,envmap_common_pars_fragment:Xv,envmap_pars_fragment:Yv,envmap_pars_vertex:Jv,envmap_physical_pars_fragment:a_,envmap_vertex:Zv,fog_vertex:Kv,fog_pars_vertex:Qv,fog_fragment:e_,fog_pars_fragment:t_,gradientmap_pars_fragment:n_,lightmap_fragment:i_,lightmap_pars_fragment:r_,lights_lambert_vertex:s_,lights_pars_begin:o_,lights_toon_fragment:l_,lights_toon_pars_fragment:c_,lights_phong_fragment:u_,lights_phong_pars_fragment:h_,lights_physical_fragment:f_,lights_physical_pars_fragment:d_,lights_fragment_begin:p_,lights_fragment_maps:m_,lights_fragment_end:g_,logdepthbuf_fragment:v_,logdepthbuf_pars_fragment:__,logdepthbuf_pars_vertex:x_,logdepthbuf_vertex:y_,map_fragment:b_,map_pars_fragment:M_,map_particle_fragment:w_,map_particle_pars_fragment:S_,metalnessmap_fragment:E_,metalnessmap_pars_fragment:T_,morphcolor_vertex:A_,morphnormal_vertex:C_,morphtarget_pars_vertex:R_,morphtarget_vertex:L_,normal_fragment_begin:P_,normal_fragment_maps:I_,normal_pars_fragment:D_,normal_pars_vertex:F_,normal_vertex:N_,normalmap_pars_fragment:B_,clearcoat_normal_fragment_begin:O_,clearcoat_normal_fragment_maps:z_,clearcoat_pars_fragment:U_,output_fragment:H_,packing:k_,premultiplied_alpha_fragment:V_,project_vertex:G_,dithering_fragment:W_,dithering_pars_fragment:j_,roughnessmap_fragment:q_,roughnessmap_pars_fragment:$_,shadowmap_pars_fragment:X_,shadowmap_pars_vertex:Y_,shadowmap_vertex:J_,shadowmask_pars_fragment:Z_,skinbase_vertex:K_,skinning_pars_vertex:Q_,skinning_vertex:e2,skinnormal_vertex:t2,specularmap_fragment:n2,specularmap_pars_fragment:i2,tonemapping_fragment:r2,tonemapping_pars_fragment:s2,transmission_fragment:o2,transmission_pars_fragment:a2,uv_pars_fragment:l2,uv_pars_vertex:c2,uv_vertex:u2,uv2_pars_fragment:h2,uv2_pars_vertex:f2,uv2_vertex:d2,worldpos_vertex:p2,background_vert:m2,background_frag:g2,cube_vert:v2,cube_frag:_2,depth_vert:x2,depth_frag:y2,distanceRGBA_vert:b2,distanceRGBA_frag:M2,equirect_vert:w2,equirect_frag:S2,linedashed_vert:E2,linedashed_frag:T2,meshbasic_vert:A2,meshbasic_frag:C2,meshlambert_vert:R2,meshlambert_frag:L2,meshmatcap_vert:P2,meshmatcap_frag:I2,meshnormal_vert:D2,meshnormal_frag:F2,meshphong_vert:N2,meshphong_frag:B2,meshphysical_vert:O2,meshphysical_frag:z2,meshtoon_vert:U2,meshtoon_frag:H2,points_vert:k2,points_frag:V2,shadow_vert:G2,shadow_frag:W2,sprite_vert:j2,sprite_frag:q2},ge={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new St},uv2Transform:{value:new St},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new St}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new St}}},Mn={basic:{uniforms:Et([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Et([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.fog,ge.lights,{emissive:{value:new Me(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Et([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Et([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Et([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Me(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Et([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Et([ge.points,ge.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Et([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Et([ge.common,ge.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Et([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Et([ge.sprite,ge.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new St},t2D:{value:null}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},cube:{uniforms:Et([ge.envmap,{opacity:{value:1}}]),vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Et([ge.common,ge.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Et([ge.lights,ge.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Mn.physical={uniforms:Et([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ae(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};function $2(n,e,t,i,r,s){const o=new Me(0);let a=r===!0?0:1,l,c,u=null,h=0,f=null;function d(m,p){let v=!1,b=p.isScene===!0?p.background:null;b&&b.isTexture&&(b=e.get(b));const A=n.xr,w=A.getSession&&A.getSession();w&&w.environmentBlendMode==="additive"&&(b=null),b===null?g(o,a):b&&b.isColor&&(g(b,1),v=!0),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),b&&(b.isCubeTexture||b.mapping===la)?(c===void 0&&(c=new Tt(new Is(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:Cr(Mn.cube.uniforms),vertexShader:Mn.cube.vertexShader,fragmentShader:Mn.cube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,R,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,(u!==b||h!==b.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=b,h=b.version,f=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Tt(new Ic(2,2),new hn({name:"BackgroundMaterial",uniforms:Cr(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:Sr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||h!==b.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=b,h=b.version,f=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,p){t.buffers.color.setClear(m.r,m.g,m.b,p,s)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),a=p,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,g(o,a)},render:d}}function X2(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function h(O,K,U,$,q){let j=!1;if(o){const Z=m($,U,K);c!==Z&&(c=Z,d(c.object)),j=v(O,$,U,q),j&&b(O,$,U,q)}else{const Z=K.wireframe===!0;(c.geometry!==$.id||c.program!==U.id||c.wireframe!==Z)&&(c.geometry=$.id,c.program=U.id,c.wireframe=Z,j=!0)}q!==null&&t.update(q,34963),(j||u)&&(u=!1,M(O,K,U,$),q!==null&&n.bindBuffer(34963,t.get(q).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function d(O){return i.isWebGL2?n.bindVertexArray(O):s.bindVertexArrayOES(O)}function g(O){return i.isWebGL2?n.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function m(O,K,U){const $=U.wireframe===!0;let q=a[O.id];q===void 0&&(q={},a[O.id]=q);let j=q[K.id];j===void 0&&(j={},q[K.id]=j);let Z=j[$];return Z===void 0&&(Z=p(f()),j[$]=Z),Z}function p(O){const K=[],U=[],$=[];for(let q=0;q<r;q++)K[q]=0,U[q]=0,$[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:U,attributeDivisors:$,object:O,attributes:{},index:null}}function v(O,K,U,$){const q=c.attributes,j=K.attributes;let Z=0;const ce=U.getAttributes();for(const re in ce)if(ce[re].location>=0){const be=q[re];let Ee=j[re];if(Ee===void 0&&(re==="instanceMatrix"&&O.instanceMatrix&&(Ee=O.instanceMatrix),re==="instanceColor"&&O.instanceColor&&(Ee=O.instanceColor)),be===void 0||be.attribute!==Ee||Ee&&be.data!==Ee.data)return!0;Z++}return c.attributesNum!==Z||c.index!==$}function b(O,K,U,$){const q={},j=K.attributes;let Z=0;const ce=U.getAttributes();for(const re in ce)if(ce[re].location>=0){let be=j[re];be===void 0&&(re==="instanceMatrix"&&O.instanceMatrix&&(be=O.instanceMatrix),re==="instanceColor"&&O.instanceColor&&(be=O.instanceColor));const Ee={};Ee.attribute=be,be&&be.data&&(Ee.data=be.data),q[re]=Ee,Z++}c.attributes=q,c.attributesNum=Z,c.index=$}function A(){const O=c.newAttributes;for(let K=0,U=O.length;K<U;K++)O[K]=0}function w(O){T(O,0)}function T(O,K){const U=c.newAttributes,$=c.enabledAttributes,q=c.attributeDivisors;U[O]=1,$[O]===0&&(n.enableVertexAttribArray(O),$[O]=1),q[O]!==K&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,K),q[O]=K)}function R(){const O=c.newAttributes,K=c.enabledAttributes;for(let U=0,$=K.length;U<$;U++)K[U]!==O[U]&&(n.disableVertexAttribArray(U),K[U]=0)}function z(O,K,U,$,q,j){i.isWebGL2===!0&&(U===5124||U===5125)?n.vertexAttribIPointer(O,K,U,q,j):n.vertexAttribPointer(O,K,U,$,q,j)}function M(O,K,U,$){if(i.isWebGL2===!1&&(O.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;A();const q=$.attributes,j=U.getAttributes(),Z=K.defaultAttributeValues;for(const ce in j){const re=j[ce];if(re.location>=0){let fe=q[ce];if(fe===void 0&&(ce==="instanceMatrix"&&O.instanceMatrix&&(fe=O.instanceMatrix),ce==="instanceColor"&&O.instanceColor&&(fe=O.instanceColor)),fe!==void 0){const be=fe.normalized,Ee=fe.itemSize,ee=t.get(fe);if(ee===void 0)continue;const Fe=ee.buffer,Te=ee.type,Pe=ee.bytesPerElement;if(fe.isInterleavedBufferAttribute){const ue=fe.data,Be=ue.stride,te=fe.offset;if(ue.isInstancedInterleavedBuffer){for(let y=0;y<re.locationSize;y++)T(re.location+y,ue.meshPerAttribute);O.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let y=0;y<re.locationSize;y++)w(re.location+y);n.bindBuffer(34962,Fe);for(let y=0;y<re.locationSize;y++)z(re.location+y,Ee/re.locationSize,Te,be,Be*Pe,(te+Ee/re.locationSize*y)*Pe)}else{if(fe.isInstancedBufferAttribute){for(let ue=0;ue<re.locationSize;ue++)T(re.location+ue,fe.meshPerAttribute);O.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ue=0;ue<re.locationSize;ue++)w(re.location+ue);n.bindBuffer(34962,Fe);for(let ue=0;ue<re.locationSize;ue++)z(re.location+ue,Ee/re.locationSize,Te,be,Ee*Pe,Ee/re.locationSize*ue*Pe)}}else if(Z!==void 0){const be=Z[ce];if(be!==void 0)switch(be.length){case 2:n.vertexAttrib2fv(re.location,be);break;case 3:n.vertexAttrib3fv(re.location,be);break;case 4:n.vertexAttrib4fv(re.location,be);break;default:n.vertexAttrib1fv(re.location,be)}}}}R()}function P(){le();for(const O in a){const K=a[O];for(const U in K){const $=K[U];for(const q in $)g($[q].object),delete $[q];delete K[U]}delete a[O]}}function D(O){if(a[O.id]===void 0)return;const K=a[O.id];for(const U in K){const $=K[U];for(const q in $)g($[q].object),delete $[q];delete K[U]}delete a[O.id]}function B(O){for(const K in a){const U=a[K];if(U[O.id]===void 0)continue;const $=U[O.id];for(const q in $)g($[q].object),delete $[q];delete U[O.id]}}function le(){he(),u=!0,c!==l&&(c=l,d(c.object))}function he(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:le,resetDefaultState:he,dispose:P,releaseStatesOfGeometry:D,releaseStatesOfProgram:B,initAttributes:A,enableAttribute:w,disableUnusedAttributes:R}}function Y2(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,d;if(r)f=n,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,c,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function J2(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(z){if(z==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";z="mediump"}return z==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&n instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(34930),f=n.getParameter(35660),d=n.getParameter(3379),g=n.getParameter(34076),m=n.getParameter(34921),p=n.getParameter(36347),v=n.getParameter(36348),b=n.getParameter(36349),A=f>0,w=o||e.has("OES_texture_float"),T=A&&w,R=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:v,maxFragmentUniforms:b,vertexTextures:A,floatFragmentTextures:w,floatVertexTextures:T,maxSamples:R}}function Z2(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Nn,a=new St,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,d){const g=h.length!==0||f||i!==0||r;return r=f,t=u(h,d,0),i=h.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(h,f,d){const g=h.clippingPlanes,m=h.clipIntersection,p=h.clipShadows,v=n.get(h);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const b=s?0:i,A=b*4;let w=v.clippingState||null;l.value=w,w=u(g,f,A,d);for(let T=0;T!==A;++T)w[T]=t[T];v.clippingState=w,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,g){const m=h!==null?h.length:0;let p=null;if(m!==0){if(p=l.value,g!==!0||p===null){const v=d+m*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<v)&&(p=new Float32Array(v));for(let A=0,w=d;A!==m;++A,w+=4)o.copy(h[A]).applyMatrix4(b,a),o.normal.toArray(p,w),p[w+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}function K2(n){let e=new WeakMap;function t(o,a){return a===Hl?o.mapping=Er:a===kl&&(o.mapping=Tr),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Hl||a===kl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Jd(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Dc extends fa{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}Dc.prototype.isOrthographicCamera=!0;const fr=4,Mh=[.125,.215,.35,.446,.526,.582],wi=20,sl=new Dc,wh=new Me;let ol=null;const bi=(1+Math.sqrt(5))/2,tr=1/bi,Sh=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,bi,tr),new C(0,bi,-tr),new C(tr,0,bi),new C(-tr,0,bi),new C(bi,tr,0),new C(-bi,tr,0)];class Eh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ol=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ch(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ah(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ol),e.scissorTest=!1,lo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Er||e.mapping===Tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ol=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:ys,format:Zt,encoding:ci,depthBuffer:!1},r=Th(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Th(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Q2(s)),this._blurMaterial=ex(s,e,t)}return r}_compileMaterial(e){const t=new Tt(this._lodPlanes[0],e);this._renderer.compile(t,sl)}_sceneToCubeUV(e,t,i,r){const a=new zt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(wh),u.toneMapping=zn,u.autoClear=!1;const d=new ha({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),g=new Tt(new Is,d);let m=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,m=!0):(d.color.copy(wh),m=!0);for(let v=0;v<6;v++){const b=v%3;b===0?(a.up.set(0,l[v],0),a.lookAt(c[v],0,0)):b===1?(a.up.set(0,0,l[v]),a.lookAt(0,c[v],0)):(a.up.set(0,l[v],0),a.lookAt(0,0,c[v]));const A=this._cubeSize;lo(r,b*A,v>2?A:0,A,A),u.setRenderTarget(r),m&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Er||e.mapping===Tr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ch()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ah());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Tt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;lo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,sl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Sh[(r-1)%Sh.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Tt(this._lodPlanes[r],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*wi-1),m=s/g,p=isFinite(s)?1+Math.floor(u*m):wi;p>wi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${wi}`);const v=[];let b=0;for(let z=0;z<wi;++z){const M=z/m,P=Math.exp(-M*M/2);v.push(P),z===0?b+=P:z<p&&(b+=2*P)}for(let z=0;z<v.length;z++)v[z]=v[z]/b;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=v,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:A}=this;f.dTheta.value=g,f.mipInt.value=A-i;const w=this._sizeLods[r],T=3*w*(r>A-fr?r-A+fr:0),R=4*(this._cubeSize-w);lo(t,T,R,3*w,2*w),l.setRenderTarget(t),l.render(h,sl)}}function Q2(n){const e=[],t=[],i=[];let r=n;const s=n-fr+1+Mh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-fr?l=Mh[o-n+fr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,m=3,p=2,v=1,b=new Float32Array(m*g*d),A=new Float32Array(p*g*d),w=new Float32Array(v*g*d);for(let R=0;R<d;R++){const z=R%3*2/3-1,M=R>2?0:-1,P=[z,M,0,z+2/3,M,0,z+2/3,M+1,0,z,M,0,z+2/3,M+1,0,z,M+1,0];b.set(P,m*g*R),A.set(f,p*g*R);const D=[R,R,R,R,R,R];w.set(D,v*g*R)}const T=new nt;T.setAttribute("position",new pt(b,m)),T.setAttribute("uv",new pt(A,p)),T.setAttribute("faceIndex",new pt(w,v)),e.push(T),r>fr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Th(n,e,t){const i=new qt(n,e,t);return i.texture.mapping=la,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function lo(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function ex(n,e,t){const i=new Float32Array(wi),r=new C(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Ah(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Ch(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Fc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function tx(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Hl||l===kl,u=l===Er||l===Tr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Eh(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new Eh(n));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function nx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ix(n,e,t,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const d=h.morphAttributes;for(const g in d){const m=d[g];for(let p=0,v=m.length;p<v;p++)e.update(m[p],34962)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let m=0;if(d!==null){const b=d.array;m=d.version;for(let A=0,w=b.length;A<w;A+=3){const T=b[A+0],R=b[A+1],z=b[A+2];f.push(T,R,R,z,z,T)}}else{const b=g.array;m=g.version;for(let A=0,w=b.length/3-1;A<w;A+=3){const T=A+0,R=A+1,z=A+2;f.push(T,R,R,z,z,T)}}const p=new(jd(f)?Yd:Xd)(f,1);p.version=m;const v=s.get(h);v&&e.remove(v),s.set(h,p)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function rx(n,e,t,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,d){n.drawElements(s,d,a,f*l),t.update(d,s,1)}function h(f,d,g){if(g===0)return;let m,p;if(r)m=n,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,d,a,f*l,g),t.update(d,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function sx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function ox(n,e){return n[0]-e[0]}function ax(n,e){return Math.abs(e[1])-Math.abs(n[1])}function al(n,e){let t=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?t=127:i instanceof Int16Array?t=32767:i instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),n.divideScalar(t)}function lx(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new et,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=g!==void 0?g.length:0;let p=s.get(u);if(p===void 0||p.count!==m){let K=function(){he.dispose(),s.delete(u),u.removeEventListener("dispose",K)};p!==void 0&&p.texture.dispose();const A=u.morphAttributes.position!==void 0,w=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],z=u.morphAttributes.normal||[],M=u.morphAttributes.color||[];let P=0;A===!0&&(P=1),w===!0&&(P=2),T===!0&&(P=3);let D=u.attributes.position.count*P,B=1;D>e.maxTextureSize&&(B=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const le=new Float32Array(D*B*4*m),he=new ua(le,D,B,m);he.type=ei,he.needsUpdate=!0;const O=P*4;for(let U=0;U<m;U++){const $=R[U],q=z[U],j=M[U],Z=D*B*4*U;for(let ce=0;ce<$.count;ce++){const re=ce*O;A===!0&&(o.fromBufferAttribute($,ce),$.normalized===!0&&al(o,$),le[Z+re+0]=o.x,le[Z+re+1]=o.y,le[Z+re+2]=o.z,le[Z+re+3]=0),w===!0&&(o.fromBufferAttribute(q,ce),q.normalized===!0&&al(o,q),le[Z+re+4]=o.x,le[Z+re+5]=o.y,le[Z+re+6]=o.z,le[Z+re+7]=0),T===!0&&(o.fromBufferAttribute(j,ce),j.normalized===!0&&al(o,j),le[Z+re+8]=o.x,le[Z+re+9]=o.y,le[Z+re+10]=o.z,le[Z+re+11]=j.itemSize===4?o.w:1)}}p={count:m,texture:he,size:new ae(D,B)},s.set(u,p),u.addEventListener("dispose",K)}let v=0;for(let A=0;A<d.length;A++)v+=d[A];const b=u.morphTargetsRelative?1:1-v;f.getUniforms().setValue(n,"morphTargetBaseInfluence",b),f.getUniforms().setValue(n,"morphTargetInfluences",d),f.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const g=d===void 0?0:d.length;let m=i[u.id];if(m===void 0||m.length!==g){m=[];for(let w=0;w<g;w++)m[w]=[w,0];i[u.id]=m}for(let w=0;w<g;w++){const T=m[w];T[0]=w,T[1]=d[w]}m.sort(ax);for(let w=0;w<8;w++)w<g&&m[w][1]?(a[w][0]=m[w][0],a[w][1]=m[w][1]):(a[w][0]=Number.MAX_SAFE_INTEGER,a[w][1]=0);a.sort(ox);const p=u.morphAttributes.position,v=u.morphAttributes.normal;let b=0;for(let w=0;w<8;w++){const T=a[w],R=T[0],z=T[1];R!==Number.MAX_SAFE_INTEGER&&z?(p&&u.getAttribute("morphTarget"+w)!==p[R]&&u.setAttribute("morphTarget"+w,p[R]),v&&u.getAttribute("morphNormal"+w)!==v[R]&&u.setAttribute("morphNormal"+w,v[R]),r[w]=z,b+=z):(p&&u.hasAttribute("morphTarget"+w)===!0&&u.deleteAttribute("morphTarget"+w),v&&u.hasAttribute("morphNormal"+w)===!0&&u.deleteAttribute("morphNormal"+w),r[w]=0)}const A=u.morphTargetsRelative?1:1-b;f.getUniforms().setValue(n,"morphTargetBaseInfluence",A),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function cx(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);return r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Kd=new bt,Qd=new ua,ep=new Lc,tp=new da,Rh=[],Lh=[],Ph=new Float32Array(16),Ih=new Float32Array(9),Dh=new Float32Array(4);function Or(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Rh[r];if(s===void 0&&(s=new Float32Array(r),Rh[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Ft(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Nt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ma(n,e){let t=Lh[e];t===void 0&&(t=new Int32Array(e),Lh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ux(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function hx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2fv(this.addr,e),Nt(t,e)}}function fx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;n.uniform3fv(this.addr,e),Nt(t,e)}}function dx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4fv(this.addr,e),Nt(t,e)}}function px(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Ft(t,i))return;Dh.set(i),n.uniformMatrix2fv(this.addr,!1,Dh),Nt(t,i)}}function mx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Ft(t,i))return;Ih.set(i),n.uniformMatrix3fv(this.addr,!1,Ih),Nt(t,i)}}function gx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Ft(t,i))return;Ph.set(i),n.uniformMatrix4fv(this.addr,!1,Ph),Nt(t,i)}}function vx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function _x(n,e){const t=this.cache;Ft(t,e)||(n.uniform2iv(this.addr,e),Nt(t,e))}function xx(n,e){const t=this.cache;Ft(t,e)||(n.uniform3iv(this.addr,e),Nt(t,e))}function yx(n,e){const t=this.cache;Ft(t,e)||(n.uniform4iv(this.addr,e),Nt(t,e))}function bx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Mx(n,e){const t=this.cache;Ft(t,e)||(n.uniform2uiv(this.addr,e),Nt(t,e))}function wx(n,e){const t=this.cache;Ft(t,e)||(n.uniform3uiv(this.addr,e),Nt(t,e))}function Sx(n,e){const t=this.cache;Ft(t,e)||(n.uniform4uiv(this.addr,e),Nt(t,e))}function Ex(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Kd,r)}function Tx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ep,r)}function Ax(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||tp,r)}function Cx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Qd,r)}function Rx(n){switch(n){case 5126:return ux;case 35664:return hx;case 35665:return fx;case 35666:return dx;case 35674:return px;case 35675:return mx;case 35676:return gx;case 5124:case 35670:return vx;case 35667:case 35671:return _x;case 35668:case 35672:return xx;case 35669:case 35673:return yx;case 5125:return bx;case 36294:return Mx;case 36295:return wx;case 36296:return Sx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ex;case 35679:case 36299:case 36307:return Tx;case 35680:case 36300:case 36308:case 36293:return Ax;case 36289:case 36303:case 36311:case 36292:return Cx}}function Lx(n,e){n.uniform1fv(this.addr,e)}function Px(n,e){const t=Or(e,this.size,2);n.uniform2fv(this.addr,t)}function Ix(n,e){const t=Or(e,this.size,3);n.uniform3fv(this.addr,t)}function Dx(n,e){const t=Or(e,this.size,4);n.uniform4fv(this.addr,t)}function Fx(n,e){const t=Or(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Nx(n,e){const t=Or(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Bx(n,e){const t=Or(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Ox(n,e){n.uniform1iv(this.addr,e)}function zx(n,e){n.uniform2iv(this.addr,e)}function Ux(n,e){n.uniform3iv(this.addr,e)}function Hx(n,e){n.uniform4iv(this.addr,e)}function kx(n,e){n.uniform1uiv(this.addr,e)}function Vx(n,e){n.uniform2uiv(this.addr,e)}function Gx(n,e){n.uniform3uiv(this.addr,e)}function Wx(n,e){n.uniform4uiv(this.addr,e)}function jx(n,e,t){const i=e.length,r=ma(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2D(e[s]||Kd,r[s])}function qx(n,e,t){const i=e.length,r=ma(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture3D(e[s]||ep,r[s])}function $x(n,e,t){const i=e.length,r=ma(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTextureCube(e[s]||tp,r[s])}function Xx(n,e,t){const i=e.length,r=ma(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||Qd,r[s])}function Yx(n){switch(n){case 5126:return Lx;case 35664:return Px;case 35665:return Ix;case 35666:return Dx;case 35674:return Fx;case 35675:return Nx;case 35676:return Bx;case 5124:case 35670:return Ox;case 35667:case 35671:return zx;case 35668:case 35672:return Ux;case 35669:case 35673:return Hx;case 5125:return kx;case 36294:return Vx;case 36295:return Gx;case 36296:return Wx;case 35678:case 36198:case 36298:case 36306:case 35682:return jx;case 35679:case 36299:case 36307:return qx;case 35680:case 36300:case 36308:case 36293:return $x;case 36289:case 36303:case 36311:case 36292:return Xx}}function Jx(n,e,t){this.id=n,this.addr=t,this.cache=[],this.setValue=Rx(e.type)}function Zx(n,e,t){this.id=n,this.addr=t,this.cache=[],this.size=e.size,this.setValue=Yx(e.type)}function np(n){this.id=n,this.seq=[],this.map={}}np.prototype.setValue=function(n,e,t){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const o=i[r];o.setValue(n,e[o.id],t)}};const ll=/(\w+)(\])?(\[|\.)?/g;function Fh(n,e){n.seq.push(e),n.map[e.id]=e}function Kx(n,e,t){const i=n.name,r=i.length;for(ll.lastIndex=0;;){const s=ll.exec(i),o=ll.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Fh(t,c===void 0?new Jx(a,n,e):new Zx(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new np(a),Fh(t,h)),t=h}}}function ri(n,e){this.seq=[],this.map={};const t=n.getProgramParameter(e,35718);for(let i=0;i<t;++i){const r=n.getActiveUniform(e,i),s=n.getUniformLocation(e,r.name);Kx(r,s,this)}}ri.prototype.setValue=function(n,e,t,i){const r=this.map[e];r!==void 0&&r.setValue(n,t,i)};ri.prototype.setOptional=function(n,e,t){const i=e[t];i!==void 0&&this.setValue(n,t,i)};ri.upload=function(n,e,t,i){for(let r=0,s=e.length;r!==s;++r){const o=e[r],a=t[o.id];a.needsUpdate!==!1&&o.setValue(n,a.value,i)}};ri.seqWithValue=function(n,e){const t=[];for(let i=0,r=n.length;i!==r;++i){const s=n[i];s.id in e&&t.push(s)}return t};function Nh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let Qx=0;function ey(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++)i.push(o+1+": "+t[o]);return i.join(`
`)}function ty(n){switch(n){case ci:return["Linear","( value )"];case it:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Bh(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[0]);return t.toUpperCase()+`

`+r+`

`+ey(n.getShaderSource(e),o)}else return r}function ny(n,e){const t=ty(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function iy(n,e){let t;switch(e){case h1:t="Linear";break;case f1:t="Reinhard";break;case d1:t="OptimizedCineon";break;case p1:t="ACESFilmic";break;case m1:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ry(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(is).join(`
`)}function sy(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function oy(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function is(n){return n!==""}function Oh(n,e){return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ay=/^[ \t]*#include +<([\w\d./]+)>/gm;function jl(n){return n.replace(ay,ly)}function ly(n,e){const t=Ue[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return jl(t)}const cy=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,uy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uh(n){return n.replace(uy,ip).replace(cy,hy)}function hy(n,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),ip(n,e,t,i)}function ip(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Hh(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fy(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Bd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Gg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ns&&(e="SHADOWMAP_TYPE_VSM"),e}function dy(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Er:case Tr:e="ENVMAP_TYPE_CUBE";break;case la:e="ENVMAP_TYPE_CUBE_UV";break}return e}function py(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Tr:e="ENVMAP_MODE_REFRACTION";break}return e}function my(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case aa:e="ENVMAP_BLENDING_MULTIPLY";break;case c1:e="ENVMAP_BLENDING_MIX";break;case u1:e="ENVMAP_BLENDING_ADD";break}return e}function gy(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function vy(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=fy(t),c=dy(t),u=py(t),h=my(t),f=gy(t),d=t.isWebGL2?"":ry(t),g=sy(s),m=r.createProgram();let p,v,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(is).join(`
`),p.length>0&&(p+=`
`),v=[d,g].filter(is).join(`
`),v.length>0&&(v+=`
`)):(p=[Hh(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(is).join(`
`),v=[d,Hh(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zn?"#define TONE_MAPPING":"",t.toneMapping!==zn?Ue.tonemapping_pars_fragment:"",t.toneMapping!==zn?iy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.encodings_pars_fragment,ny("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(is).join(`
`)),o=jl(o),o=Oh(o,t),o=zh(o,t),a=jl(a),a=Oh(a,t),a=zh(a,t),o=Uh(o),a=Uh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["#define varying in",t.glslVersion===ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const A=b+p+o,w=b+v+a,T=Nh(r,35633,A),R=Nh(r,35632,w);if(r.attachShader(m,T),r.attachShader(m,R),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),n.debug.checkShaderErrors){const P=r.getProgramInfoLog(m).trim(),D=r.getShaderInfoLog(T).trim(),B=r.getShaderInfoLog(R).trim();let le=!0,he=!0;if(r.getProgramParameter(m,35714)===!1){le=!1;const O=Bh(r,T,"vertex"),K=Bh(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,35715)+`

Program Info Log: `+P+`
`+O+`
`+K)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(D===""||B==="")&&(he=!1);he&&(this.diagnostics={runnable:le,programLog:P,vertexShader:{log:D,prefix:p},fragmentShader:{log:B,prefix:v}})}r.deleteShader(T),r.deleteShader(R);let z;this.getUniforms=function(){return z===void 0&&(z=new ri(r,m)),z};let M;return this.getAttributes=function(){return M===void 0&&(M=oy(r,m)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=Qx++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=R,this}let _y=0;class xy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const i=new yy(e);t.set(e,i)}return t.get(e)}}class yy{constructor(e){this.id=_y++,this.code=e,this.usedTimes=0}}function by(n,e,t,i,r,s,o){const a=new $d,l=new xy,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M,P,D,B,le){const he=B.fog,O=le.geometry,K=M.isMeshStandardMaterial?B.environment:null,U=(M.isMeshStandardMaterial?t:e).get(M.envMap||K),$=!!U&&U.mapping===la?U.image.height:null,q=g[M.type];M.precision!==null&&(d=r.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const j=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Z=j!==void 0?j.length:0;let ce=0;O.morphAttributes.position!==void 0&&(ce=1),O.morphAttributes.normal!==void 0&&(ce=2),O.morphAttributes.color!==void 0&&(ce=3);let re,fe,be,Ee;if(q){const ue=Mn[q];re=ue.vertexShader,fe=ue.fragmentShader}else re=M.vertexShader,fe=M.fragmentShader,l.update(M),be=l.getVertexShaderID(M),Ee=l.getFragmentShaderID(M);const ee=n.getRenderTarget(),Fe=M.alphaTest>0,Te=M.clearcoat>0;return{isWebGL2:u,shaderID:q,shaderName:M.type,vertexShader:re,fragmentShader:fe,defines:M.defines,customVertexShaderID:be,customFragmentShaderID:Ee,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,instancing:le.isInstancedMesh===!0,instancingColor:le.isInstancedMesh===!0&&le.instanceColor!==null,supportsVertexTextures:f,outputEncoding:ee===null?n.outputEncoding:ee.isXRRenderTarget===!0?ee.texture.encoding:ci,map:!!M.map,matcap:!!M.matcap,envMap:!!U,envMapMode:U&&U.mapping,envMapCubeUVHeight:$,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===B1,tangentSpaceNormalMap:M.normalMapType===Fr,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===it,clearcoat:Te,clearcoatMap:Te&&!!M.clearcoatMap,clearcoatRoughnessMap:Te&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:Te&&!!M.clearcoatNormalMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===_r,alphaMap:!!M.alphaMap,alphaTest:Fe,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!O.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatNormalMap||M.transmission>0||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||M.sheen>0||!!M.sheenColorMap||!!M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!he,useFog:M.fog===!0,fogExp2:he&&he.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:h,skinning:le.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:ce,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:M.toneMapped?n.toneMapping:zn,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===li,flipSided:M.side===un,useDepthPacking:!!M.depthPacking,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const P=[];if(M.shaderID?P.push(M.shaderID):(P.push(M.customVertexShaderID),P.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)P.push(D),P.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(v(P,M),b(P,M),P.push(n.outputEncoding)),P.push(M.customProgramCacheKey),P.join()}function v(M,P){M.push(P.precision),M.push(P.outputEncoding),M.push(P.envMapMode),M.push(P.envMapCubeUVHeight),M.push(P.combine),M.push(P.vertexUvs),M.push(P.fogExp2),M.push(P.sizeAttenuation),M.push(P.morphTargetsCount),M.push(P.morphAttributeCount),M.push(P.numDirLights),M.push(P.numPointLights),M.push(P.numSpotLights),M.push(P.numHemiLights),M.push(P.numRectAreaLights),M.push(P.numDirLightShadows),M.push(P.numPointLightShadows),M.push(P.numSpotLightShadows),M.push(P.shadowMapType),M.push(P.toneMapping),M.push(P.numClippingPlanes),M.push(P.numClipIntersection),M.push(P.depthPacking)}function b(M,P){a.disableAll(),P.isWebGL2&&a.enable(0),P.supportsVertexTextures&&a.enable(1),P.instancing&&a.enable(2),P.instancingColor&&a.enable(3),P.map&&a.enable(4),P.matcap&&a.enable(5),P.envMap&&a.enable(6),P.lightMap&&a.enable(7),P.aoMap&&a.enable(8),P.emissiveMap&&a.enable(9),P.bumpMap&&a.enable(10),P.normalMap&&a.enable(11),P.objectSpaceNormalMap&&a.enable(12),P.tangentSpaceNormalMap&&a.enable(13),P.clearcoat&&a.enable(14),P.clearcoatMap&&a.enable(15),P.clearcoatRoughnessMap&&a.enable(16),P.clearcoatNormalMap&&a.enable(17),P.displacementMap&&a.enable(18),P.specularMap&&a.enable(19),P.roughnessMap&&a.enable(20),P.metalnessMap&&a.enable(21),P.gradientMap&&a.enable(22),P.alphaMap&&a.enable(23),P.alphaTest&&a.enable(24),P.vertexColors&&a.enable(25),P.vertexAlphas&&a.enable(26),P.vertexUvs&&a.enable(27),P.vertexTangents&&a.enable(28),P.uvsVertexOnly&&a.enable(29),P.fog&&a.enable(30),M.push(a.mask),a.disableAll(),P.useFog&&a.enable(0),P.flatShading&&a.enable(1),P.logarithmicDepthBuffer&&a.enable(2),P.skinning&&a.enable(3),P.morphTargets&&a.enable(4),P.morphNormals&&a.enable(5),P.morphColors&&a.enable(6),P.premultipliedAlpha&&a.enable(7),P.shadowMapEnabled&&a.enable(8),P.physicallyCorrectLights&&a.enable(9),P.doubleSided&&a.enable(10),P.flipSided&&a.enable(11),P.useDepthPacking&&a.enable(12),P.dithering&&a.enable(13),P.specularIntensityMap&&a.enable(14),P.specularColorMap&&a.enable(15),P.transmission&&a.enable(16),P.transmissionMap&&a.enable(17),P.thicknessMap&&a.enable(18),P.sheen&&a.enable(19),P.sheenColorMap&&a.enable(20),P.sheenRoughnessMap&&a.enable(21),P.decodeVideoTexture&&a.enable(22),P.opaque&&a.enable(23),M.push(a.mask)}function A(M){const P=g[M.type];let D;if(P){const B=Mn[P];D=pv.clone(B.uniforms)}else D=M.uniforms;return D}function w(M,P){let D;for(let B=0,le=c.length;B<le;B++){const he=c[B];if(he.cacheKey===P){D=he,++D.usedTimes;break}}return D===void 0&&(D=new vy(n,P,M,s),c.push(D)),D}function T(M){if(--M.usedTimes===0){const P=c.indexOf(M);c[P]=c[c.length-1],c.pop(),M.destroy()}}function R(M){l.remove(M)}function z(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:A,acquireProgram:w,releaseProgram:T,releaseShaderCache:R,programs:c,dispose:z}}function My(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function wy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function kh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Vh(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,f,d,g,m,p){let v=n[e];return v===void 0?(v={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:m,group:p},n[e]=v):(v.id=h.id,v.object=h,v.geometry=f,v.material=d,v.groupOrder=g,v.renderOrder=h.renderOrder,v.z=m,v.group=p),e++,v}function a(h,f,d,g,m,p){const v=o(h,f,d,g,m,p);d.transmission>0?i.push(v):d.transparent===!0?r.push(v):t.push(v)}function l(h,f,d,g,m,p){const v=o(h,f,d,g,m,p);d.transmission>0?i.unshift(v):d.transparent===!0?r.unshift(v):t.unshift(v)}function c(h,f){t.length>1&&t.sort(h||wy),i.length>1&&i.sort(f||kh),r.length>1&&r.sort(f||kh)}function u(){for(let h=e,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Sy(){let n=new WeakMap;function e(i,r){let s;return n.has(i)===!1?(s=new Vh,n.set(i,[s])):r>=n.get(i).length?(s=new Vh,n.get(i).push(s)):s=n.get(i)[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ey(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Me};break;case"SpotLight":t={position:new C,direction:new C,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":t={color:new Me,position:new C,halfWidth:new C,halfHeight:new C};break}return n[e.id]=t,t}}}function Ty(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Ay=0;function Cy(n,e){return(e.castShadow?1:0)-(n.castShadow?1:0)}function Ry(n,e){const t=new Ey,i=Ty(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new C);const s=new C,o=new Se,a=new Se;function l(u,h){let f=0,d=0,g=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let m=0,p=0,v=0,b=0,A=0,w=0,T=0,R=0;u.sort(Cy);const z=h!==!0?Math.PI:1;for(let P=0,D=u.length;P<D;P++){const B=u[P],le=B.color,he=B.intensity,O=B.distance,K=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)f+=le.r*he*z,d+=le.g*he*z,g+=le.b*he*z;else if(B.isLightProbe)for(let U=0;U<9;U++)r.probe[U].addScaledVector(B.sh.coefficients[U],he);else if(B.isDirectionalLight){const U=t.get(B);if(U.color.copy(B.color).multiplyScalar(B.intensity*z),B.castShadow){const $=B.shadow,q=i.get(B);q.shadowBias=$.bias,q.shadowNormalBias=$.normalBias,q.shadowRadius=$.radius,q.shadowMapSize=$.mapSize,r.directionalShadow[m]=q,r.directionalShadowMap[m]=K,r.directionalShadowMatrix[m]=B.shadow.matrix,w++}r.directional[m]=U,m++}else if(B.isSpotLight){const U=t.get(B);if(U.position.setFromMatrixPosition(B.matrixWorld),U.color.copy(le).multiplyScalar(he*z),U.distance=O,U.coneCos=Math.cos(B.angle),U.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),U.decay=B.decay,B.castShadow){const $=B.shadow,q=i.get(B);q.shadowBias=$.bias,q.shadowNormalBias=$.normalBias,q.shadowRadius=$.radius,q.shadowMapSize=$.mapSize,r.spotShadow[v]=q,r.spotShadowMap[v]=K,r.spotShadowMatrix[v]=B.shadow.matrix,R++}r.spot[v]=U,v++}else if(B.isRectAreaLight){const U=t.get(B);U.color.copy(le).multiplyScalar(he),U.halfWidth.set(B.width*.5,0,0),U.halfHeight.set(0,B.height*.5,0),r.rectArea[b]=U,b++}else if(B.isPointLight){const U=t.get(B);if(U.color.copy(B.color).multiplyScalar(B.intensity*z),U.distance=B.distance,U.decay=B.decay,B.castShadow){const $=B.shadow,q=i.get(B);q.shadowBias=$.bias,q.shadowNormalBias=$.normalBias,q.shadowRadius=$.radius,q.shadowMapSize=$.mapSize,q.shadowCameraNear=$.camera.near,q.shadowCameraFar=$.camera.far,r.pointShadow[p]=q,r.pointShadowMap[p]=K,r.pointShadowMatrix[p]=B.shadow.matrix,T++}r.point[p]=U,p++}else if(B.isHemisphereLight){const U=t.get(B);U.skyColor.copy(B.color).multiplyScalar(he*z),U.groundColor.copy(B.groundColor).multiplyScalar(he*z),r.hemi[A]=U,A++}}b>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_FLOAT_1,r.rectAreaLTC2=ge.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_HALF_1,r.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=d,r.ambient[2]=g;const M=r.hash;(M.directionalLength!==m||M.pointLength!==p||M.spotLength!==v||M.rectAreaLength!==b||M.hemiLength!==A||M.numDirectionalShadows!==w||M.numPointShadows!==T||M.numSpotShadows!==R)&&(r.directional.length=m,r.spot.length=v,r.rectArea.length=b,r.point.length=p,r.hemi.length=A,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=T,r.spotShadowMatrix.length=R,M.directionalLength=m,M.pointLength=p,M.spotLength=v,M.rectAreaLength=b,M.hemiLength=A,M.numDirectionalShadows=w,M.numPointShadows=T,M.numSpotShadows=R,r.version=Ay++)}function c(u,h){let f=0,d=0,g=0,m=0,p=0;const v=h.matrixWorldInverse;for(let b=0,A=u.length;b<A;b++){const w=u[b];if(w.isDirectionalLight){const T=r.directional[f];T.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(v),f++}else if(w.isSpotLight){const T=r.spot[g];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(v),T.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(v),g++}else if(w.isRectAreaLight){const T=r.rectArea[m];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(v),a.identity(),o.copy(w.matrixWorld),o.premultiply(v),a.extractRotation(o),T.halfWidth.set(w.width*.5,0,0),T.halfHeight.set(0,w.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),m++}else if(w.isPointLight){const T=r.point[d];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(v),d++}else if(w.isHemisphereLight){const T=r.hemi[p];T.direction.setFromMatrixPosition(w.matrixWorld),T.direction.transformDirection(v),p++}}}return{setup:l,setupView:c,state:r}}function Gh(n,e){const t=new Ry(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Ly(n,e){let t=new WeakMap;function i(s,o=0){let a;return t.has(s)===!1?(a=new Gh(n,e),t.set(s,[a])):o>=t.get(s).length?(a=new Gh(n,e),t.get(s).push(a)):a=t.get(s)[o],a}function r(){t=new WeakMap}return{get:i,dispose:r}}class Nc extends lt{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=F1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}Nc.prototype.isMeshDepthMaterial=!0;class Bc extends lt{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new C,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}Bc.prototype.isMeshDistanceMaterial=!0;const Py=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Iy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function rp(n,e,t){let i=new pa;const r=new ae,s=new ae,o=new et,a=new Nc({depthPacking:N1}),l=new Bc,c={},u=t.maxTextureSize,h={0:un,1:Sr,2:li},f=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:Py,fragmentShader:Iy}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new nt;g.setAttribute("position",new pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Tt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bd,this.render=function(w,T,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const z=n.getRenderTarget(),M=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),D=n.state;D.setBlending(ii),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let B=0,le=w.length;B<le;B++){const he=w[B],O=he.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",he,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const K=O.getFrameExtents();if(r.multiply(K),s.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/K.x),r.x=s.x*K.x,O.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/K.y),r.y=s.y*K.y,O.mapSize.y=s.y)),O.map===null&&!O.isPointLightShadow&&this.type===ns&&(O.map=new qt(r.x,r.y),O.map.texture.name=he.name+".shadowMap",O.mapPass=new qt(r.x,r.y),O.camera.updateProjectionMatrix()),O.map===null){const $={minFilter:_t,magFilter:_t,format:Zt};O.map=new qt(r.x,r.y,$),O.map.texture.name=he.name+".shadowMap",O.camera.updateProjectionMatrix()}n.setRenderTarget(O.map),n.clear();const U=O.getViewportCount();for(let $=0;$<U;$++){const q=O.getViewport($);o.set(s.x*q.x,s.y*q.y,s.x*q.z,s.y*q.w),D.viewport(o),O.updateMatrices(he,$),i=O.getFrustum(),A(T,R,O.camera,he,this.type)}!O.isPointLightShadow&&this.type===ns&&v(O,R),O.needsUpdate=!1}p.needsUpdate=!1,n.setRenderTarget(z,M,P)};function v(w,T){const R=e.update(m);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(T,null,R,f,m,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(T,null,R,d,m,null)}function b(w,T,R,z,M,P){let D=null;const B=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(B!==void 0?D=B:D=R.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0){const le=D.uuid,he=T.uuid;let O=c[le];O===void 0&&(O={},c[le]=O);let K=O[he];K===void 0&&(K=D.clone(),O[he]=K),D=K}return D.visible=T.visible,D.wireframe=T.wireframe,P===ns?D.side=T.shadowSide!==null?T.shadowSide:T.side:D.side=T.shadowSide!==null?T.shadowSide:h[T.side],D.alphaMap=T.alphaMap,D.alphaTest=T.alphaTest,D.clipShadows=T.clipShadows,D.clippingPlanes=T.clippingPlanes,D.clipIntersection=T.clipIntersection,D.displacementMap=T.displacementMap,D.displacementScale=T.displacementScale,D.displacementBias=T.displacementBias,D.wireframeLinewidth=T.wireframeLinewidth,D.linewidth=T.linewidth,R.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(R.matrixWorld),D.nearDistance=z,D.farDistance=M),D}function A(w,T,R,z,M){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===ns)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const B=e.update(w),le=w.material;if(Array.isArray(le)){const he=B.groups;for(let O=0,K=he.length;O<K;O++){const U=he[O],$=le[U.materialIndex];if($&&$.visible){const q=b(w,$,z,R.near,R.far,M);n.renderBufferDirect(R,null,B,q,w,U)}}}else if(le.visible){const he=b(w,le,z,R.near,R.far,M);n.renderBufferDirect(R,null,B,he,w,null)}}const D=w.children;for(let B=0,le=D.length;B<le;B++)A(D[B],T,R,z,M)}}function Dy(n,e,t){const i=t.isWebGL2;function r(){let L=!1;const pe=new et;let me=null;const we=new et(0,0,0,0);return{setMask:function(_e){me!==_e&&!L&&(n.colorMask(_e,_e,_e,_e),me=_e)},setLocked:function(_e){L=_e},setClear:function(_e,Ce,de,Re,$e){$e===!0&&(_e*=Re,Ce*=Re,de*=Re),pe.set(_e,Ce,de,Re),we.equals(pe)===!1&&(n.clearColor(_e,Ce,de,Re),we.copy(pe))},reset:function(){L=!1,me=null,we.set(-1,0,0,0)}}}function s(){let L=!1,pe=null,me=null,we=null;return{setTest:function(_e){_e?Ee(2929):ee(2929)},setMask:function(_e){pe!==_e&&!L&&(n.depthMask(_e),pe=_e)},setFunc:function(_e){if(me!==_e){if(_e)switch(_e){case n1:n.depthFunc(512);break;case i1:n.depthFunc(519);break;case r1:n.depthFunc(513);break;case Ul:n.depthFunc(515);break;case s1:n.depthFunc(514);break;case o1:n.depthFunc(518);break;case a1:n.depthFunc(516);break;case l1:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);me=_e}},setLocked:function(_e){L=_e},setClear:function(_e){we!==_e&&(n.clearDepth(_e),we=_e)},reset:function(){L=!1,pe=null,me=null,we=null}}}function o(){let L=!1,pe=null,me=null,we=null,_e=null,Ce=null,de=null,Re=null,$e=null;return{setTest:function(He){L||(He?Ee(2960):ee(2960))},setMask:function(He){pe!==He&&!L&&(n.stencilMask(He),pe=He)},setFunc:function(He,dn,pn){(me!==He||we!==dn||_e!==pn)&&(n.stencilFunc(He,dn,pn),me=He,we=dn,_e=pn)},setOp:function(He,dn,pn){(Ce!==He||de!==dn||Re!==pn)&&(n.stencilOp(He,dn,pn),Ce=He,de=dn,Re=pn)},setLocked:function(He){L=He},setClear:function(He){$e!==He&&(n.clearStencil(He),$e=He)},reset:function(){L=!1,pe=null,me=null,we=null,_e=null,Ce=null,de=null,Re=null,$e=null}}}const a=new r,l=new s,c=new o;let u={},h={},f=new WeakMap,d=[],g=null,m=!1,p=null,v=null,b=null,A=null,w=null,T=null,R=null,z=!1,M=null,P=null,D=null,B=null,le=null;const he=n.getParameter(35661);let O=!1,K=0;const U=n.getParameter(7938);U.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(U)[1]),O=K>=1):U.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),O=K>=2);let $=null,q={};const j=n.getParameter(3088),Z=n.getParameter(2978),ce=new et().fromArray(j),re=new et().fromArray(Z);function fe(L,pe,me){const we=new Uint8Array(4),_e=n.createTexture();n.bindTexture(L,_e),n.texParameteri(L,10241,9728),n.texParameteri(L,10240,9728);for(let Ce=0;Ce<me;Ce++)n.texImage2D(pe+Ce,0,6408,1,1,0,6408,5121,we);return _e}const be={};be[3553]=fe(3553,3553,1),be[34067]=fe(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ee(2929),l.setFunc(Ul),E(!1),F(Fu),Ee(2884),te(ii);function Ee(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function ee(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function Fe(L,pe){return h[L]!==pe?(n.bindFramebuffer(L,pe),h[L]=pe,i&&(L===36009&&(h[36160]=pe),L===36160&&(h[36009]=pe)),!0):!1}function Te(L,pe){let me=d,we=!1;if(L)if(me=f.get(pe),me===void 0&&(me=[],f.set(pe,me)),L.isWebGLMultipleRenderTargets){const _e=L.texture;if(me.length!==_e.length||me[0]!==36064){for(let Ce=0,de=_e.length;Ce<de;Ce++)me[Ce]=36064+Ce;me.length=_e.length,we=!0}}else me[0]!==36064&&(me[0]=36064,we=!0);else me[0]!==1029&&(me[0]=1029,we=!0);we&&(t.isWebGL2?n.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function Pe(L){return g!==L?(n.useProgram(L),g=L,!0):!1}const ue={[lr]:32774,[jg]:32778,[qg]:32779};if(i)ue[zu]=32775,ue[Uu]=32776;else{const L=e.get("EXT_blend_minmax");L!==null&&(ue[zu]=L.MIN_EXT,ue[Uu]=L.MAX_EXT)}const Be={[$g]:0,[Xg]:1,[Yg]:768,[zd]:770,[t1]:776,[Qg]:774,[Zg]:772,[Jg]:769,[Ud]:771,[e1]:775,[Kg]:773};function te(L,pe,me,we,_e,Ce,de,Re){if(L===ii){m===!0&&(ee(3042),m=!1);return}if(m===!1&&(Ee(3042),m=!0),L!==Wg){if(L!==p||Re!==z){if((v!==lr||w!==lr)&&(n.blendEquation(32774),v=lr,w=lr),Re)switch(L){case _r:n.blendFuncSeparate(1,771,1,771);break;case Nu:n.blendFunc(1,1);break;case Bu:n.blendFuncSeparate(0,769,0,1);break;case Ou:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case _r:n.blendFuncSeparate(770,771,1,771);break;case Nu:n.blendFunc(770,1);break;case Bu:n.blendFuncSeparate(0,769,0,1);break;case Ou:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}b=null,A=null,T=null,R=null,p=L,z=Re}return}_e=_e||pe,Ce=Ce||me,de=de||we,(pe!==v||_e!==w)&&(n.blendEquationSeparate(ue[pe],ue[_e]),v=pe,w=_e),(me!==b||we!==A||Ce!==T||de!==R)&&(n.blendFuncSeparate(Be[me],Be[we],Be[Ce],Be[de]),b=me,A=we,T=Ce,R=de),p=L,z=null}function y(L,pe){L.side===li?ee(2884):Ee(2884);let me=L.side===un;pe&&(me=!me),E(me),L.blending===_r&&L.transparent===!1?te(ii):te(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const we=L.stencilWrite;c.setTest(we),we&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),G(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ee(32926):ee(32926)}function E(L){M!==L&&(L?n.frontFace(2304):n.frontFace(2305),M=L)}function F(L){L!==kg?(Ee(2884),L!==P&&(L===Fu?n.cullFace(1029):L===Vg?n.cullFace(1028):n.cullFace(1032))):ee(2884),P=L}function N(L){L!==D&&(O&&n.lineWidth(L),D=L)}function G(L,pe,me){L?(Ee(32823),(B!==pe||le!==me)&&(n.polygonOffset(pe,me),B=pe,le=me)):ee(32823)}function X(L){L?Ee(3089):ee(3089)}function J(L){L===void 0&&(L=33984+he-1),$!==L&&(n.activeTexture(L),$=L)}function ne(L,pe){$===null&&J();let me=q[$];me===void 0&&(me={type:void 0,texture:void 0},q[$]=me),(me.type!==L||me.texture!==pe)&&(n.bindTexture(L,pe||be[L]),me.type=L,me.texture=pe)}function se(){const L=q[$];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function x(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function I(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function k(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function V(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(L){ce.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),ce.copy(L))}function Ae(L){re.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),re.copy(L))}function ye(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},$=null,q={},h={},f=new WeakMap,d=[],g=null,m=!1,p=null,v=null,b=null,A=null,w=null,T=null,R=null,z=!1,M=null,P=null,D=null,B=null,le=null,ce.set(0,0,n.canvas.width,n.canvas.height),re.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ee,disable:ee,bindFramebuffer:Fe,drawBuffers:Te,useProgram:Pe,setBlending:te,setMaterial:y,setFlipSided:E,setCullFace:F,setLineWidth:N,setPolygonOffset:G,setScissorTest:X,activeTexture:J,bindTexture:ne,unbindTexture:se,compressedTexImage2D:x,texImage2D:ve,texImage3D:V,texStorage2D:Q,texStorage3D:oe,texSubImage2D:_,texSubImage3D:I,compressedTexSubImage2D:k,scissor:xe,viewport:Ae,reset:ye}}function Fy(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(x,_){return v?new OffscreenCanvas(x,_):ws("canvas")}function A(x,_,I,k){let Q=1;if((x.width>k||x.height>k)&&(Q=k/Math.max(x.width,x.height)),Q<1||_===!0)if(typeof HTMLImageElement!="undefined"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&x instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&x instanceof ImageBitmap){const oe=_?Xo:Math.floor,ve=oe(Q*x.width),V=oe(Q*x.height);m===void 0&&(m=b(ve,V));const xe=I?b(ve,V):m;return xe.width=ve,xe.height=V,xe.getContext("2d").drawImage(x,0,0,ve,V),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+ve+"x"+V+")."),xe}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),x;return x}function w(x){return Wl(x.width)&&Wl(x.height)}function T(x){return a?!1:x.wrapS!==on||x.wrapT!==on||x.minFilter!==_t&&x.minFilter!==Ot}function R(x,_){return x.generateMipmaps&&_&&x.minFilter!==_t&&x.minFilter!==Ot}function z(x){n.generateMipmap(x)}function M(x,_,I,k,Q=!1){if(a===!1)return _;if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let oe=_;return _===6403&&(I===5126&&(oe=33326),I===5131&&(oe=33325),I===5121&&(oe=33321)),_===33319&&(I===5126&&(oe=33328),I===5131&&(oe=33327),I===5121&&(oe=33323)),_===6408&&(I===5126&&(oe=34836),I===5131&&(oe=34842),I===5121&&(oe=k===it&&Q===!1?35907:32856),I===32819&&(oe=32854),I===32820&&(oe=32855)),(oe===33325||oe===33326||oe===33327||oe===33328||oe===34842||oe===34836)&&e.get("EXT_color_buffer_float"),oe}function P(x,_,I){return R(x,I)===!0||x.isFramebufferTexture&&x.minFilter!==_t&&x.minFilter!==Ot?Math.log2(Math.max(_.width,_.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?_.mipmaps.length:1}function D(x){return x===_t||x===Hu||x===ku?9728:9729}function B(x){const _=x.target;_.removeEventListener("dispose",B),he(_),_.isVideoTexture&&g.delete(_)}function le(x){const _=x.target;_.removeEventListener("dispose",le),K(_)}function he(x){const _=i.get(x);if(_.__webglInit===void 0)return;const I=x.source,k=p.get(I);if(k){const Q=k[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&O(x),Object.keys(k).length===0&&p.delete(I)}i.remove(x)}function O(x){const _=i.get(x);n.deleteTexture(_.__webglTexture);const I=x.source,k=p.get(I);delete k[_.__cacheKey],o.memory.textures--}function K(x){const _=x.texture,I=i.get(x),k=i.get(_);if(k.__webglTexture!==void 0&&(n.deleteTexture(k.__webglTexture),o.memory.textures--),x.depthTexture&&x.depthTexture.dispose(),x.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++)n.deleteFramebuffer(I.__webglFramebuffer[Q]),I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer[Q]);else n.deleteFramebuffer(I.__webglFramebuffer),I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&n.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer&&n.deleteRenderbuffer(I.__webglColorRenderbuffer),I.__webglDepthRenderbuffer&&n.deleteRenderbuffer(I.__webglDepthRenderbuffer);if(x.isWebGLMultipleRenderTargets)for(let Q=0,oe=_.length;Q<oe;Q++){const ve=i.get(_[Q]);ve.__webglTexture&&(n.deleteTexture(ve.__webglTexture),o.memory.textures--),i.remove(_[Q])}i.remove(_),i.remove(x)}let U=0;function $(){U=0}function q(){const x=U;return x>=l&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+l),U+=1,x}function j(x){const _=[];return _.push(x.wrapS),_.push(x.wrapT),_.push(x.magFilter),_.push(x.minFilter),_.push(x.anisotropy),_.push(x.internalFormat),_.push(x.format),_.push(x.type),_.push(x.generateMipmaps),_.push(x.premultiplyAlpha),_.push(x.flipY),_.push(x.unpackAlignment),_.push(x.encoding),_.join()}function Z(x,_){const I=i.get(x);if(x.isVideoTexture&&ne(x),x.isRenderTargetTexture===!1&&x.version>0&&I.__version!==x.version){const k=x.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(I,x,_);return}}t.activeTexture(33984+_),t.bindTexture(3553,I.__webglTexture)}function ce(x,_){const I=i.get(x);if(x.version>0&&I.__version!==x.version){Te(I,x,_);return}t.activeTexture(33984+_),t.bindTexture(35866,I.__webglTexture)}function re(x,_){const I=i.get(x);if(x.version>0&&I.__version!==x.version){Te(I,x,_);return}t.activeTexture(33984+_),t.bindTexture(32879,I.__webglTexture)}function fe(x,_){const I=i.get(x);if(x.version>0&&I.__version!==x.version){Pe(I,x,_);return}t.activeTexture(33984+_),t.bindTexture(34067,I.__webglTexture)}const be={[Go]:10497,[on]:33071,[Vl]:33648},Ee={[_t]:9728,[Hu]:9984,[ku]:9986,[Ot]:9729,[g1]:9985,[ca]:9987};function ee(x,_,I){if(I?(n.texParameteri(x,10242,be[_.wrapS]),n.texParameteri(x,10243,be[_.wrapT]),(x===32879||x===35866)&&n.texParameteri(x,32882,be[_.wrapR]),n.texParameteri(x,10240,Ee[_.magFilter]),n.texParameteri(x,10241,Ee[_.minFilter])):(n.texParameteri(x,10242,33071),n.texParameteri(x,10243,33071),(x===32879||x===35866)&&n.texParameteri(x,32882,33071),(_.wrapS!==on||_.wrapT!==on)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(x,10240,D(_.magFilter)),n.texParameteri(x,10241,D(_.minFilter)),_.minFilter!==_t&&_.minFilter!==Ot&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");if(_.type===ei&&e.has("OES_texture_float_linear")===!1||a===!1&&_.type===ys&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||i.get(_).__currentAnisotropy)&&(n.texParameterf(x,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy)}}function Fe(x,_){let I=!1;x.__webglInit===void 0&&(x.__webglInit=!0,_.addEventListener("dispose",B));const k=_.source;let Q=p.get(k);Q===void 0&&(Q={},p.set(k,Q));const oe=j(_);if(oe!==x.__cacheKey){Q[oe]===void 0&&(Q[oe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,I=!0),Q[oe].usedTimes++;const ve=Q[x.__cacheKey];ve!==void 0&&(Q[x.__cacheKey].usedTimes--,ve.usedTimes===0&&O(_)),x.__cacheKey=oe,x.__webglTexture=Q[oe].texture}return I}function Te(x,_,I){let k=3553;_.isDataArrayTexture&&(k=35866),_.isData3DTexture&&(k=32879);const Q=Fe(x,_),oe=_.source;if(t.activeTexture(33984+I),t.bindTexture(k,x.__webglTexture),oe.version!==oe.__currentVersion||Q===!0){n.pixelStorei(37440,_.flipY),n.pixelStorei(37441,_.premultiplyAlpha),n.pixelStorei(3317,_.unpackAlignment),n.pixelStorei(37443,0);const ve=T(_)&&w(_.image)===!1;let V=A(_.image,ve,!1,u);V=se(_,V);const xe=w(V)||a,Ae=s.convert(_.format,_.encoding);let ye=s.convert(_.type),L=M(_.internalFormat,Ae,ye,_.encoding,_.isVideoTexture);ee(k,_,xe);let pe;const me=_.mipmaps,we=a&&_.isVideoTexture!==!0,_e=x.__version===void 0||Q===!0,Ce=P(_,V,xe);if(_.isDepthTexture)L=6402,a?_.type===ei?L=36012:_.type===Ro?L=33190:_.type===xr?L=35056:L=33189:_.type===ei&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===Ii&&L===6402&&_.type!==xs&&_.type!==Ro&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=xs,ye=s.convert(_.type)),_.format===Ar&&L===6402&&(L=34041,_.type!==xr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=xr,ye=s.convert(_.type))),_e&&(we?t.texStorage2D(3553,1,L,V.width,V.height):t.texImage2D(3553,0,L,V.width,V.height,0,Ae,ye,null));else if(_.isDataTexture)if(me.length>0&&xe){we&&_e&&t.texStorage2D(3553,Ce,L,me[0].width,me[0].height);for(let de=0,Re=me.length;de<Re;de++)pe=me[de],we?t.texSubImage2D(3553,de,0,0,pe.width,pe.height,Ae,ye,pe.data):t.texImage2D(3553,de,L,pe.width,pe.height,0,Ae,ye,pe.data);_.generateMipmaps=!1}else we?(_e&&t.texStorage2D(3553,Ce,L,V.width,V.height),t.texSubImage2D(3553,0,0,0,V.width,V.height,Ae,ye,V.data)):t.texImage2D(3553,0,L,V.width,V.height,0,Ae,ye,V.data);else if(_.isCompressedTexture){we&&_e&&t.texStorage2D(3553,Ce,L,me[0].width,me[0].height);for(let de=0,Re=me.length;de<Re;de++)pe=me[de],_.format!==Zt?Ae!==null?we?t.compressedTexSubImage2D(3553,de,0,0,pe.width,pe.height,Ae,pe.data):t.compressedTexImage2D(3553,de,L,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?t.texSubImage2D(3553,de,0,0,pe.width,pe.height,Ae,ye,pe.data):t.texImage2D(3553,de,L,pe.width,pe.height,0,Ae,ye,pe.data)}else if(_.isDataArrayTexture)we?(_e&&t.texStorage3D(35866,Ce,L,V.width,V.height,V.depth),t.texSubImage3D(35866,0,0,0,0,V.width,V.height,V.depth,Ae,ye,V.data)):t.texImage3D(35866,0,L,V.width,V.height,V.depth,0,Ae,ye,V.data);else if(_.isData3DTexture)we?(_e&&t.texStorage3D(32879,Ce,L,V.width,V.height,V.depth),t.texSubImage3D(32879,0,0,0,0,V.width,V.height,V.depth,Ae,ye,V.data)):t.texImage3D(32879,0,L,V.width,V.height,V.depth,0,Ae,ye,V.data);else if(_.isFramebufferTexture){if(_e)if(we)t.texStorage2D(3553,Ce,L,V.width,V.height);else{let de=V.width,Re=V.height;for(let $e=0;$e<Ce;$e++)t.texImage2D(3553,$e,L,de,Re,0,Ae,ye,null),de>>=1,Re>>=1}}else if(me.length>0&&xe){we&&_e&&t.texStorage2D(3553,Ce,L,me[0].width,me[0].height);for(let de=0,Re=me.length;de<Re;de++)pe=me[de],we?t.texSubImage2D(3553,de,0,0,Ae,ye,pe):t.texImage2D(3553,de,L,Ae,ye,pe);_.generateMipmaps=!1}else we?(_e&&t.texStorage2D(3553,Ce,L,V.width,V.height),t.texSubImage2D(3553,0,0,0,Ae,ye,V)):t.texImage2D(3553,0,L,Ae,ye,V);R(_,xe)&&z(k),oe.__currentVersion=oe.version,_.onUpdate&&_.onUpdate(_)}x.__version=_.version}function Pe(x,_,I){if(_.image.length!==6)return;const k=Fe(x,_),Q=_.source;if(t.activeTexture(33984+I),t.bindTexture(34067,x.__webglTexture),Q.version!==Q.__currentVersion||k===!0){n.pixelStorei(37440,_.flipY),n.pixelStorei(37441,_.premultiplyAlpha),n.pixelStorei(3317,_.unpackAlignment),n.pixelStorei(37443,0);const oe=_.isCompressedTexture||_.image[0].isCompressedTexture,ve=_.image[0]&&_.image[0].isDataTexture,V=[];for(let de=0;de<6;de++)!oe&&!ve?V[de]=A(_.image[de],!1,!0,c):V[de]=ve?_.image[de].image:_.image[de],V[de]=se(_,V[de]);const xe=V[0],Ae=w(xe)||a,ye=s.convert(_.format,_.encoding),L=s.convert(_.type),pe=M(_.internalFormat,ye,L,_.encoding),me=a&&_.isVideoTexture!==!0,we=x.__version===void 0;let _e=P(_,xe,Ae);ee(34067,_,Ae);let Ce;if(oe){me&&we&&t.texStorage2D(34067,_e,pe,xe.width,xe.height);for(let de=0;de<6;de++){Ce=V[de].mipmaps;for(let Re=0;Re<Ce.length;Re++){const $e=Ce[Re];_.format!==Zt?ye!==null?me?t.compressedTexSubImage2D(34069+de,Re,0,0,$e.width,$e.height,ye,$e.data):t.compressedTexImage2D(34069+de,Re,pe,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):me?t.texSubImage2D(34069+de,Re,0,0,$e.width,$e.height,ye,L,$e.data):t.texImage2D(34069+de,Re,pe,$e.width,$e.height,0,ye,L,$e.data)}}}else{Ce=_.mipmaps,me&&we&&(Ce.length>0&&_e++,t.texStorage2D(34067,_e,pe,V[0].width,V[0].height));for(let de=0;de<6;de++)if(ve){me?t.texSubImage2D(34069+de,0,0,0,V[de].width,V[de].height,ye,L,V[de].data):t.texImage2D(34069+de,0,pe,V[de].width,V[de].height,0,ye,L,V[de].data);for(let Re=0;Re<Ce.length;Re++){const He=Ce[Re].image[de].image;me?t.texSubImage2D(34069+de,Re+1,0,0,He.width,He.height,ye,L,He.data):t.texImage2D(34069+de,Re+1,pe,He.width,He.height,0,ye,L,He.data)}}else{me?t.texSubImage2D(34069+de,0,0,0,ye,L,V[de]):t.texImage2D(34069+de,0,pe,ye,L,V[de]);for(let Re=0;Re<Ce.length;Re++){const $e=Ce[Re];me?t.texSubImage2D(34069+de,Re+1,0,0,ye,L,$e.image[de]):t.texImage2D(34069+de,Re+1,pe,ye,L,$e.image[de])}}}R(_,Ae)&&z(34067),Q.__currentVersion=Q.version,_.onUpdate&&_.onUpdate(_)}x.__version=_.version}function ue(x,_,I,k,Q){const oe=s.convert(I.format,I.encoding),ve=s.convert(I.type),V=M(I.internalFormat,oe,ve,I.encoding);i.get(_).__hasExternalTextures||(Q===32879||Q===35866?t.texImage3D(Q,0,V,_.width,_.height,_.depth,0,oe,ve,null):t.texImage2D(Q,0,V,_.width,_.height,0,oe,ve,null)),t.bindFramebuffer(36160,x),J(_)?f.framebufferTexture2DMultisampleEXT(36160,k,Q,i.get(I).__webglTexture,0,X(_)):n.framebufferTexture2D(36160,k,Q,i.get(I).__webglTexture,0),t.bindFramebuffer(36160,null)}function Be(x,_,I){if(n.bindRenderbuffer(36161,x),_.depthBuffer&&!_.stencilBuffer){let k=33189;if(I||J(_)){const Q=_.depthTexture;Q&&Q.isDepthTexture&&(Q.type===ei?k=36012:Q.type===Ro&&(k=33190));const oe=X(_);J(_)?f.renderbufferStorageMultisampleEXT(36161,oe,k,_.width,_.height):n.renderbufferStorageMultisample(36161,oe,k,_.width,_.height)}else n.renderbufferStorage(36161,k,_.width,_.height);n.framebufferRenderbuffer(36160,36096,36161,x)}else if(_.depthBuffer&&_.stencilBuffer){const k=X(_);I&&J(_)===!1?n.renderbufferStorageMultisample(36161,k,35056,_.width,_.height):J(_)?f.renderbufferStorageMultisampleEXT(36161,k,35056,_.width,_.height):n.renderbufferStorage(36161,34041,_.width,_.height),n.framebufferRenderbuffer(36160,33306,36161,x)}else{const k=_.isWebGLMultipleRenderTargets===!0?_.texture[0]:_.texture,Q=s.convert(k.format,k.encoding),oe=s.convert(k.type),ve=M(k.internalFormat,Q,oe,k.encoding),V=X(_);I&&J(_)===!1?n.renderbufferStorageMultisample(36161,V,ve,_.width,_.height):J(_)?f.renderbufferStorageMultisampleEXT(36161,V,ve,_.width,_.height):n.renderbufferStorage(36161,ve,_.width,_.height)}n.bindRenderbuffer(36161,null)}function te(x,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,x),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Z(_.depthTexture,0);const k=i.get(_.depthTexture).__webglTexture,Q=X(_);if(_.depthTexture.format===Ii)J(_)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,k,0,Q):n.framebufferTexture2D(36160,36096,3553,k,0);else if(_.depthTexture.format===Ar)J(_)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,k,0,Q):n.framebufferTexture2D(36160,33306,3553,k,0);else throw new Error("Unknown depthTexture format")}function y(x){const _=i.get(x),I=x.isWebGLCubeRenderTarget===!0;if(x.depthTexture&&!_.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");te(_.__webglFramebuffer,x)}else if(I){_.__webglDepthbuffer=[];for(let k=0;k<6;k++)t.bindFramebuffer(36160,_.__webglFramebuffer[k]),_.__webglDepthbuffer[k]=n.createRenderbuffer(),Be(_.__webglDepthbuffer[k],x,!1)}else t.bindFramebuffer(36160,_.__webglFramebuffer),_.__webglDepthbuffer=n.createRenderbuffer(),Be(_.__webglDepthbuffer,x,!1);t.bindFramebuffer(36160,null)}function E(x,_,I){const k=i.get(x);_!==void 0&&ue(k.__webglFramebuffer,x,x.texture,36064,3553),I!==void 0&&y(x)}function F(x){const _=x.texture,I=i.get(x),k=i.get(_);x.addEventListener("dispose",le),x.isWebGLMultipleRenderTargets!==!0&&(k.__webglTexture===void 0&&(k.__webglTexture=n.createTexture()),k.__version=_.version,o.memory.textures++);const Q=x.isWebGLCubeRenderTarget===!0,oe=x.isWebGLMultipleRenderTargets===!0,ve=w(x)||a;if(Q){I.__webglFramebuffer=[];for(let V=0;V<6;V++)I.__webglFramebuffer[V]=n.createFramebuffer()}else if(I.__webglFramebuffer=n.createFramebuffer(),oe)if(r.drawBuffers){const V=x.texture;for(let xe=0,Ae=V.length;xe<Ae;xe++){const ye=i.get(V[xe]);ye.__webglTexture===void 0&&(ye.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(a&&x.samples>0&&J(x)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=n.createRenderbuffer(),n.bindRenderbuffer(36161,I.__webglColorRenderbuffer);const V=s.convert(_.format,_.encoding),xe=s.convert(_.type),Ae=M(_.internalFormat,V,xe,_.encoding),ye=X(x);n.renderbufferStorageMultisample(36161,ye,Ae,x.width,x.height),t.bindFramebuffer(36160,I.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064,36161,I.__webglColorRenderbuffer),n.bindRenderbuffer(36161,null),x.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),Be(I.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(36160,null)}if(Q){t.bindTexture(34067,k.__webglTexture),ee(34067,_,ve);for(let V=0;V<6;V++)ue(I.__webglFramebuffer[V],x,_,36064,34069+V);R(_,ve)&&z(34067),t.unbindTexture()}else if(oe){const V=x.texture;for(let xe=0,Ae=V.length;xe<Ae;xe++){const ye=V[xe],L=i.get(ye);t.bindTexture(3553,L.__webglTexture),ee(3553,ye,ve),ue(I.__webglFramebuffer,x,ye,36064+xe,3553),R(ye,ve)&&z(3553)}t.unbindTexture()}else{let V=3553;(x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(a?V=x.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(V,k.__webglTexture),ee(V,_,ve),ue(I.__webglFramebuffer,x,_,36064,V),R(_,ve)&&z(V),t.unbindTexture()}x.depthBuffer&&y(x)}function N(x){const _=w(x)||a,I=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let k=0,Q=I.length;k<Q;k++){const oe=I[k];if(R(oe,_)){const ve=x.isWebGLCubeRenderTarget?34067:3553,V=i.get(oe).__webglTexture;t.bindTexture(ve,V),z(ve),t.unbindTexture()}}}function G(x){if(a&&x.samples>0&&J(x)===!1){const _=x.width,I=x.height;let k=16384;const Q=[36064],oe=x.stencilBuffer?33306:36096;x.depthBuffer&&Q.push(oe);const ve=i.get(x),V=ve.__ignoreDepthValues!==void 0?ve.__ignoreDepthValues:!1;V===!1&&(x.depthBuffer&&(k|=256),x.stencilBuffer&&(k|=1024)),t.bindFramebuffer(36008,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ve.__webglFramebuffer),V===!0&&(n.invalidateFramebuffer(36008,[oe]),n.invalidateFramebuffer(36009,[oe])),n.blitFramebuffer(0,0,_,I,0,0,_,I,k,9728),d&&n.invalidateFramebuffer(36008,Q),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,ve.__webglMultisampledFramebuffer)}}function X(x){return Math.min(h,x.samples)}function J(x){const _=i.get(x);return a&&x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ne(x){const _=o.render.frame;g.get(x)!==_&&(g.set(x,_),x.update())}function se(x,_){const I=x.encoding,k=x.format,Q=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||x.format===Gl||I!==ci&&(I===it?a===!1?e.has("EXT_sRGB")===!0&&k===Zt?(x.format=Gl,x.minFilter=Ot,x.generateMipmaps=!1):_=Bi.sRGBToLinear(_):(k!==Zt||Q!==Fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",I)),_}this.allocateTextureUnit=q,this.resetTextureUnits=$,this.setTexture2D=Z,this.setTexture2DArray=ce,this.setTexture3D=re,this.setTextureCube=fe,this.rebindTextures=E,this.setupRenderTarget=F,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=y,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=J}function Ny(n,e,t){const i=t.isWebGL2;function r(s,o=null){let a;if(s===Fi)return 5121;if(s===y1)return 32819;if(s===b1)return 32820;if(s===v1)return 5120;if(s===_1)return 5122;if(s===xs)return 5123;if(s===x1)return 5124;if(s===Ro)return 5125;if(s===ei)return 5126;if(s===ys)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===M1)return 6406;if(s===Zt)return 6408;if(s===kd)return 6409;if(s===S1)return 6410;if(s===Ii)return 6402;if(s===Ar)return 34041;if(s===Vd)return 6403;if(s===w1)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Gl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===E1)return 36244;if(s===T1)return 33319;if(s===A1)return 33320;if(s===C1)return 36249;if(s===Ia||s===Da||s===Fa||s===Na)if(o===it)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ia)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Da)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Fa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Na)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ia)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Da)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Fa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Na)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Vu||s===Gu||s===Wu||s===ju)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Vu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Gu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Wu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ju)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===R1)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===qu||s===$u)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===qu)return o===it?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===$u)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Xu||s===Yu||s===Ju||s===Zu||s===Ku||s===Qu||s===eh||s===th||s===nh||s===ih||s===rh||s===sh||s===oh||s===ah)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Xu)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Yu)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ju)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Zu)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ku)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Qu)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===eh)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===th)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===nh)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ih)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===rh)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===sh)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===oh)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ah)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===lh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===lh)return o===it?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===xr?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class sp extends zt{constructor(e=[]){super(),this.cameras=e}}sp.prototype.isArrayCamera=!0;class Ei extends Ze{constructor(){super(),this.type="Group"}}Ei.prototype.isGroup=!0;const By={type:"move"};class cl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(r=t.getPose(e.targetRaySpace,i),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(By))),c&&e.hand){o=!0;for(const m of e.hand.values()){const p=t.getJointPose(m,i);if(c.joints[m.jointName]===void 0){const b=new Ei;b.matrixAutoUpdate=!1,b.visible=!1,c.joints[m.jointName]=b,c.add(b)}const v=c.joints[m.jointName];p!==null&&(v.matrix.fromArray(p.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=p.radius),v.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}}class op extends bt{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Ii,u!==Ii&&u!==Ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ii&&(i=xs),i===void 0&&u===Ar&&(i=xr),super(null,r,s,o,a,l,u,i,c),this.image={width:e,height:t},this.magFilter=a!==void 0?a:_t,this.minFilter=l!==void 0?l:_t,this.flipY=!1,this.generateMipmaps=!1}}op.prototype.isDepthTexture=!0;class Oy extends Ni{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=null,c=null,u=null,h=null,f=null,d=null;const g=t.getContextAttributes();let m=null,p=null;const v=[],b=new Map,A=new zt;A.layers.enable(1),A.viewport=new et;const w=new zt;w.layers.enable(2),w.viewport=new et;const T=[A,w],R=new sp;R.layers.enable(1),R.layers.enable(2);let z=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Z=v[j];return Z===void 0&&(Z=new cl,v[j]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(j){let Z=v[j];return Z===void 0&&(Z=new cl,v[j]=Z),Z.getGripSpace()},this.getHand=function(j){let Z=v[j];return Z===void 0&&(Z=new cl,v[j]=Z),Z.getHandSpace()};function P(j){const Z=b.get(j.inputSource);Z&&Z.dispatchEvent({type:j.type,data:j.inputSource})}function D(){b.forEach(function(j,Z){j.disconnect(Z)}),b.clear(),z=null,M=null,e.setRenderTarget(m),f=null,h=null,u=null,r=null,p=null,q.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return d},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",P),r.addEventListener("selectstart",P),r.addEventListener("selectend",P),r.addEventListener("squeeze",P),r.addEventListener("squeezestart",P),r.addEventListener("squeezeend",P),r.addEventListener("end",D),r.addEventListener("inputsourceschange",B),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,Z),r.updateRenderState({baseLayer:f}),p=new qt(f.framebufferWidth,f.framebufferHeight,{format:Zt,type:Fi,encoding:e.outputEncoding})}else{let Z=null,ce=null,re=null;g.depth&&(re=g.stencil?35056:33190,Z=g.stencil?Ar:Ii,ce=g.stencil?xr:xs);const fe={colorFormat:e.outputEncoding===it?35907:32856,depthFormat:re,scaleFactor:s};u=new XRWebGLBinding(r,t),h=u.createProjectionLayer(fe),r.updateRenderState({layers:[h]}),p=new qt(h.textureWidth,h.textureHeight,{format:Zt,type:Fi,depthTexture:new op(h.textureWidth,h.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const be=e.properties.get(p);be.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),o=await r.requestReferenceSpace(a),q.setContext(r),q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function B(j){const Z=r.inputSources;for(let ce=0;ce<Z.length;ce++){const re=Z[ce].handedness==="right"?1:0;b.set(Z[ce],v[re])}for(let ce=0;ce<j.removed.length;ce++){const re=j.removed[ce],fe=b.get(re);fe&&(fe.dispatchEvent({type:"disconnected",data:re}),b.delete(re))}for(let ce=0;ce<j.added.length;ce++){const re=j.added[ce],fe=b.get(re);fe&&fe.dispatchEvent({type:"connected",data:re})}}const le=new C,he=new C;function O(j,Z,ce){le.setFromMatrixPosition(Z.matrixWorld),he.setFromMatrixPosition(ce.matrixWorld);const re=le.distanceTo(he),fe=Z.projectionMatrix.elements,be=ce.projectionMatrix.elements,Ee=fe[14]/(fe[10]-1),ee=fe[14]/(fe[10]+1),Fe=(fe[9]+1)/fe[5],Te=(fe[9]-1)/fe[5],Pe=(fe[8]-1)/fe[0],ue=(be[8]+1)/be[0],Be=Ee*Pe,te=Ee*ue,y=re/(-Pe+ue),E=y*-Pe;Z.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(E),j.translateZ(y),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const F=Ee+y,N=ee+y,G=Be-E,X=te+(re-E),J=Fe*ee/N*F,ne=Te*ee/N*F;j.projectionMatrix.makePerspective(G,X,J,ne,F,N)}function K(j,Z){Z===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Z.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;R.near=w.near=A.near=j.near,R.far=w.far=A.far=j.far,(z!==R.near||M!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),z=R.near,M=R.far);const Z=j.parent,ce=R.cameras;K(R,Z);for(let fe=0;fe<ce.length;fe++)K(ce[fe],Z);R.matrixWorld.decompose(R.position,R.quaternion,R.scale),j.position.copy(R.position),j.quaternion.copy(R.quaternion),j.scale.copy(R.scale),j.matrix.copy(R.matrix),j.matrixWorld.copy(R.matrixWorld);const re=j.children;for(let fe=0,be=re.length;fe<be;fe++)re[fe].updateMatrixWorld(!0);ce.length===2?O(R,A,w):R.projectionMatrix.copy(A.projectionMatrix)},this.getCamera=function(){return R},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(j){h!==null&&(h.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)};let U=null;function $(j,Z){if(c=Z.getViewerPose(l||o),d=Z,c!==null){const re=c.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let fe=!1;re.length!==R.cameras.length&&(R.cameras.length=0,fe=!0);for(let be=0;be<re.length;be++){const Ee=re[be];let ee=null;if(f!==null)ee=f.getViewport(Ee);else{const Te=u.getViewSubImage(h,Ee);ee=Te.viewport,be===0&&(e.setRenderTargetTextures(p,Te.colorTexture,h.ignoreDepthValues?void 0:Te.depthStencilTexture),e.setRenderTarget(p))}const Fe=T[be];Fe.matrix.fromArray(Ee.transform.matrix),Fe.projectionMatrix.fromArray(Ee.projectionMatrix),Fe.viewport.set(ee.x,ee.y,ee.width,ee.height),be===0&&R.matrix.copy(Fe.matrix),fe===!0&&R.cameras.push(Fe)}}const ce=r.inputSources;for(let re=0;re<v.length;re++){const fe=ce[re],be=b.get(fe);be!==void 0&&be.update(fe,Z,l||o)}U&&U(j,Z),d=null}const q=new Zd;q.setAnimationLoop($),this.setAnimationLoop=function(j){U=j},this.dispose=function(){}}}function zy(n,e){function t(m,p){m.fogColor.value.copy(p.color),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,b,A){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),c(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,A)):p.isMeshMatcapMaterial?(r(m,p),d(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?a(m,p,v,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===un&&(m.bumpScale.value*=-1)),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===un&&m.normalScale.value.negate()),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const w=n.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*w}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let b;p.map?b=p.map:p.specularMap?b=p.specularMap:p.displacementMap?b=p.displacementMap:p.normalMap?b=p.normalMap:p.bumpMap?b=p.bumpMap:p.roughnessMap?b=p.roughnessMap:p.metalnessMap?b=p.metalnessMap:p.alphaMap?b=p.alphaMap:p.emissiveMap?b=p.emissiveMap:p.clearcoatMap?b=p.clearcoatMap:p.clearcoatNormalMap?b=p.clearcoatNormalMap:p.clearcoatRoughnessMap?b=p.clearcoatRoughnessMap:p.specularIntensityMap?b=p.specularIntensityMap:p.specularColorMap?b=p.specularColorMap:p.transmissionMap?b=p.transmissionMap:p.thicknessMap?b=p.thicknessMap:p.sheenColorMap?b=p.sheenColorMap:p.sheenRoughnessMap&&(b=p.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uvTransform.value.copy(b.matrix));let A;p.aoMap?A=p.aoMap:p.lightMap&&(A=p.lightMap),A!==void 0&&(A.isWebGLRenderTarget&&(A=A.texture),A.matrixAutoUpdate===!0&&A.updateMatrix(),m.uv2Transform.value.copy(A.matrix))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function a(m,p,v,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=b*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let A;p.map?A=p.map:p.alphaMap&&(A=p.alphaMap),A!==void 0&&(A.matrixAutoUpdate===!0&&A.updateMatrix(),m.uvTransform.value.copy(A.matrix))}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix))}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===un&&m.clearcoatNormalScale.value.negate())),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function d(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function Uy(){const n=ws("canvas");return n.style.display="block",n}function Ke(n={}){const e=n.canvas!==void 0?n.canvas:Uy(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let h=null,f=null;const d=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ci,this.physicallyCorrectLights=!1,this.toneMapping=zn,this.toneMappingExposure=1;const m=this;let p=!1,v=0,b=0,A=null,w=-1,T=null;const R=new et,z=new et;let M=null,P=e.width,D=e.height,B=1,le=null,he=null;const O=new et(0,0,P,D),K=new et(0,0,P,D);let U=!1;const $=new pa;let q=!1,j=!1,Z=null;const ce=new Se,re=new ae,fe=new C,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ee(){return A===null?B:1}let ee=t;function Fe(S,H){for(let Y=0;Y<S.length;Y++){const W=S[Y],ie=e.getContext(W,H);if(ie!==null)return ie}return null}try{const S={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Tc}`),e.addEventListener("webglcontextlost",L,!1),e.addEventListener("webglcontextrestored",pe,!1),ee===null){const H=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&H.shift(),ee=Fe(H,S),ee===null)throw Fe(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}ee.getShaderPrecisionFormat===void 0&&(ee.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Te,Pe,ue,Be,te,y,E,F,N,G,X,J,ne,se,x,_,I,k,Q,oe,ve,V,xe;function Ae(){Te=new nx(ee),Pe=new J2(ee,Te,n),Te.init(Pe),V=new Ny(ee,Te,Pe),ue=new Dy(ee,Te,Pe),Be=new sx(ee),te=new My,y=new Fy(ee,Te,ue,te,Pe,V,Be),E=new K2(m),F=new tx(m),N=new xv(ee,Pe),xe=new X2(ee,Te,N,Pe),G=new ix(ee,N,Be,xe),X=new cx(ee,G,N,Be),Q=new lx(ee,Pe,y),_=new Z2(te),J=new by(m,E,F,Te,Pe,xe,_),ne=new zy(m,te),se=new Sy,x=new Ly(Te,Pe),k=new $2(m,E,ue,X,u,o),I=new rp(m,X,Pe),oe=new Y2(ee,Te,Be,Pe),ve=new rx(ee,Te,Be,Pe),Be.programs=J.programs,m.capabilities=Pe,m.extensions=Te,m.properties=te,m.renderLists=se,m.shadowMap=I,m.state=ue,m.info=Be}Ae();const ye=new Oy(m,ee);this.xr=ye,this.getContext=function(){return ee},this.getContextAttributes=function(){return ee.getContextAttributes()},this.forceContextLoss=function(){const S=Te.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Te.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(S){S!==void 0&&(B=S,this.setSize(P,D,!1))},this.getSize=function(S){return S.set(P,D)},this.setSize=function(S,H,Y){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=S,D=H,e.width=Math.floor(S*B),e.height=Math.floor(H*B),Y!==!1&&(e.style.width=S+"px",e.style.height=H+"px"),this.setViewport(0,0,S,H)},this.getDrawingBufferSize=function(S){return S.set(P*B,D*B).floor()},this.setDrawingBufferSize=function(S,H,Y){P=S,D=H,B=Y,e.width=Math.floor(S*Y),e.height=Math.floor(H*Y),this.setViewport(0,0,S,H)},this.getCurrentViewport=function(S){return S.copy(R)},this.getViewport=function(S){return S.copy(O)},this.setViewport=function(S,H,Y,W){S.isVector4?O.set(S.x,S.y,S.z,S.w):O.set(S,H,Y,W),ue.viewport(R.copy(O).multiplyScalar(B).floor())},this.getScissor=function(S){return S.copy(K)},this.setScissor=function(S,H,Y,W){S.isVector4?K.set(S.x,S.y,S.z,S.w):K.set(S,H,Y,W),ue.scissor(z.copy(K).multiplyScalar(B).floor())},this.getScissorTest=function(){return U},this.setScissorTest=function(S){ue.setScissorTest(U=S)},this.setOpaqueSort=function(S){le=S},this.setTransparentSort=function(S){he=S},this.getClearColor=function(S){return S.copy(k.getClearColor())},this.setClearColor=function(){k.setClearColor.apply(k,arguments)},this.getClearAlpha=function(){return k.getClearAlpha()},this.setClearAlpha=function(){k.setClearAlpha.apply(k,arguments)},this.clear=function(S=!0,H=!0,Y=!0){let W=0;S&&(W|=16384),H&&(W|=256),Y&&(W|=1024),ee.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",L,!1),e.removeEventListener("webglcontextrestored",pe,!1),se.dispose(),x.dispose(),te.dispose(),E.dispose(),F.dispose(),X.dispose(),xe.dispose(),J.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",Re),ye.removeEventListener("sessionend",$e),Z&&(Z.dispose(),Z=null),He.stop()};function L(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const S=Be.autoReset,H=I.enabled,Y=I.autoUpdate,W=I.needsUpdate,ie=I.type;Ae(),Be.autoReset=S,I.enabled=H,I.autoUpdate=Y,I.needsUpdate=W,I.type=ie}function me(S){const H=S.target;H.removeEventListener("dispose",me),we(H)}function we(S){_e(S),te.remove(S)}function _e(S){const H=te.get(S).programs;H!==void 0&&(H.forEach(function(Y){J.releaseProgram(Y)}),S.isShaderMaterial&&J.releaseShaderCache(S))}this.renderBufferDirect=function(S,H,Y,W,ie,Le){H===null&&(H=be);const De=ie.isMesh&&ie.matrixWorld.determinant()<0,ze=rm(S,H,Y,W,ie);ue.setMaterial(W,De);let Oe=Y.index;const Xe=Y.attributes.position;if(Oe===null){if(Xe===void 0||Xe.count===0)return}else if(Oe.count===0)return;let Ve=1;W.wireframe===!0&&(Oe=G.getWireframeAttribute(Y),Ve=2),xe.setup(ie,W,ze,Y,Oe);let Ge,at=oe;Oe!==null&&(Ge=N.get(Oe),at=ve,at.setIndex(Ge));const pi=Oe!==null?Oe.count:Xe.count,Ui=Y.drawRange.start*Ve,Hi=Y.drawRange.count*Ve,mn=Le!==null?Le.start*Ve:0,We=Le!==null?Le.count*Ve:1/0,ki=Math.max(Ui,mn),ct=Math.min(pi,Ui+Hi,mn+We)-1,gn=Math.max(0,ct-ki+1);if(gn!==0){if(ie.isMesh)W.wireframe===!0?(ue.setLineWidth(W.wireframeLinewidth*Ee()),at.setMode(1)):at.setMode(4);else if(ie.isLine){let Vn=W.linewidth;Vn===void 0&&(Vn=1),ue.setLineWidth(Vn*Ee()),ie.isLineSegments?at.setMode(1):ie.isLineLoop?at.setMode(2):at.setMode(3)}else ie.isPoints?at.setMode(0):ie.isSprite&&at.setMode(4);if(ie.isInstancedMesh)at.renderInstances(ki,gn,ie.count);else if(Y.isInstancedBufferGeometry){const Vn=Math.min(Y.instanceCount,Y._maxInstanceCount);at.renderInstances(ki,gn,Vn)}else at.render(ki,gn)}},this.compile=function(S,H){f=x.get(S),f.init(),g.push(f),S.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(f.pushLight(Y),Y.castShadow&&f.pushShadow(Y))}),f.setupLights(m.physicallyCorrectLights),S.traverse(function(Y){const W=Y.material;if(W)if(Array.isArray(W))for(let ie=0;ie<W.length;ie++){const Le=W[ie];ba(Le,S,Y)}else ba(W,S,Y)}),g.pop(),f=null};let Ce=null;function de(S){Ce&&Ce(S)}function Re(){He.stop()}function $e(){He.start()}const He=new Zd;He.setAnimationLoop(de),typeof self!="undefined"&&He.setContext(self),this.setAnimationLoop=function(S){Ce=S,ye.setAnimationLoop(S),S===null?He.stop():He.start()},ye.addEventListener("sessionstart",Re),ye.addEventListener("sessionend",$e),this.render=function(S,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;S.autoUpdate===!0&&S.updateMatrixWorld(),H.parent===null&&H.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(H),H=ye.getCamera()),S.isScene===!0&&S.onBeforeRender(m,S,H,A),f=x.get(S,g.length),f.init(),g.push(f),ce.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),$.setFromProjectionMatrix(ce),j=this.localClippingEnabled,q=_.init(this.clippingPlanes,j,H),h=se.get(S,d.length),h.init(),d.push(h),dn(S,H,0,m.sortObjects),h.finish(),m.sortObjects===!0&&h.sort(le,he),q===!0&&_.beginShadows();const Y=f.state.shadowsArray;if(I.render(Y,S,H),q===!0&&_.endShadows(),this.info.autoReset===!0&&this.info.reset(),k.render(h,S),f.setupLights(m.physicallyCorrectLights),H.isArrayCamera){const W=H.cameras;for(let ie=0,Le=W.length;ie<Le;ie++){const De=W[ie];pn(h,S,De,De.viewport)}}else pn(h,S,H);A!==null&&(y.updateMultisampleRenderTarget(A),y.updateRenderTargetMipmap(A)),S.isScene===!0&&S.onAfterRender(m,S,H),xe.resetDefaultState(),w=-1,T=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,d.pop(),d.length>0?h=d[d.length-1]:h=null};function dn(S,H,Y,W){if(S.visible===!1)return;if(S.layers.test(H.layers)){if(S.isGroup)Y=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(H);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||$.intersectsSprite(S)){W&&fe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ce);const De=X.update(S),ze=S.material;ze.visible&&h.push(S,De,ze,Y,fe.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==Be.render.frame&&(S.skeleton.update(),S.skeleton.frame=Be.render.frame),!S.frustumCulled||$.intersectsObject(S))){W&&fe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ce);const De=X.update(S),ze=S.material;if(Array.isArray(ze)){const Oe=De.groups;for(let Xe=0,Ve=Oe.length;Xe<Ve;Xe++){const Ge=Oe[Xe],at=ze[Ge.materialIndex];at&&at.visible&&h.push(S,De,at,Y,fe.z,Ge)}}else ze.visible&&h.push(S,De,ze,Y,fe.z,null)}}const Le=S.children;for(let De=0,ze=Le.length;De<ze;De++)dn(Le[De],H,Y,W)}function pn(S,H,Y,W){const ie=S.opaque,Le=S.transmissive,De=S.transparent;f.setupLightsView(Y),Le.length>0&&nm(ie,H,Y),W&&ue.viewport(R.copy(W)),ie.length>0&&Os(ie,H,Y),Le.length>0&&Os(Le,H,Y),De.length>0&&Os(De,H,Y),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function nm(S,H,Y){const W=Pe.isWebGL2;Z===null&&(Z=new qt(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")?ys:Fi,minFilter:ca,samples:W&&s===!0?4:0})),m.getDrawingBufferSize(re),W?Z.setSize(re.x,re.y):Z.setSize(Xo(re.x),Xo(re.y));const ie=m.getRenderTarget();m.setRenderTarget(Z),m.clear();const Le=m.toneMapping;m.toneMapping=zn,Os(S,H,Y),m.toneMapping=Le,y.updateMultisampleRenderTarget(Z),y.updateRenderTargetMipmap(Z),m.setRenderTarget(ie)}function Os(S,H,Y){const W=H.isScene===!0?H.overrideMaterial:null;for(let ie=0,Le=S.length;ie<Le;ie++){const De=S[ie],ze=De.object,Oe=De.geometry,Xe=W===null?De.material:W,Ve=De.group;ze.layers.test(Y.layers)&&im(ze,H,Y,Oe,Xe,Ve)}}function im(S,H,Y,W,ie,Le){S.onBeforeRender(m,H,Y,W,ie,Le),S.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),ie.onBeforeRender(m,H,Y,W,S,Le),ie.transparent===!0&&ie.side===li?(ie.side=un,ie.needsUpdate=!0,m.renderBufferDirect(Y,H,W,ie,S,Le),ie.side=Sr,ie.needsUpdate=!0,m.renderBufferDirect(Y,H,W,ie,S,Le),ie.side=li):m.renderBufferDirect(Y,H,W,ie,S,Le),S.onAfterRender(m,H,Y,W,ie,Le)}function ba(S,H,Y){H.isScene!==!0&&(H=be);const W=te.get(S),ie=f.state.lights,Le=f.state.shadowsArray,De=ie.state.version,ze=J.getParameters(S,ie.state,Le,H,Y),Oe=J.getProgramCacheKey(ze);let Xe=W.programs;W.environment=S.isMeshStandardMaterial?H.environment:null,W.fog=H.fog,W.envMap=(S.isMeshStandardMaterial?F:E).get(S.envMap||W.environment),Xe===void 0&&(S.addEventListener("dispose",me),Xe=new Map,W.programs=Xe);let Ve=Xe.get(Oe);if(Ve!==void 0){if(W.currentProgram===Ve&&W.lightsStateVersion===De)return nu(S,ze),Ve}else ze.uniforms=J.getUniforms(S),S.onBuild(Y,ze,m),S.onBeforeCompile(ze,m),Ve=J.acquireProgram(ze,Oe),Xe.set(Oe,Ve),W.uniforms=ze.uniforms;const Ge=W.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ge.clippingPlanes=_.uniform),nu(S,ze),W.needsLights=om(S),W.lightsStateVersion=De,W.needsLights&&(Ge.ambientLightColor.value=ie.state.ambient,Ge.lightProbe.value=ie.state.probe,Ge.directionalLights.value=ie.state.directional,Ge.directionalLightShadows.value=ie.state.directionalShadow,Ge.spotLights.value=ie.state.spot,Ge.spotLightShadows.value=ie.state.spotShadow,Ge.rectAreaLights.value=ie.state.rectArea,Ge.ltc_1.value=ie.state.rectAreaLTC1,Ge.ltc_2.value=ie.state.rectAreaLTC2,Ge.pointLights.value=ie.state.point,Ge.pointLightShadows.value=ie.state.pointShadow,Ge.hemisphereLights.value=ie.state.hemi,Ge.directionalShadowMap.value=ie.state.directionalShadowMap,Ge.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Ge.spotShadowMap.value=ie.state.spotShadowMap,Ge.spotShadowMatrix.value=ie.state.spotShadowMatrix,Ge.pointShadowMap.value=ie.state.pointShadowMap,Ge.pointShadowMatrix.value=ie.state.pointShadowMatrix);const at=Ve.getUniforms(),pi=ri.seqWithValue(at.seq,Ge);return W.currentProgram=Ve,W.uniformsList=pi,Ve}function nu(S,H){const Y=te.get(S);Y.outputEncoding=H.outputEncoding,Y.instancing=H.instancing,Y.skinning=H.skinning,Y.morphTargets=H.morphTargets,Y.morphNormals=H.morphNormals,Y.morphColors=H.morphColors,Y.morphTargetsCount=H.morphTargetsCount,Y.numClippingPlanes=H.numClippingPlanes,Y.numIntersection=H.numClipIntersection,Y.vertexAlphas=H.vertexAlphas,Y.vertexTangents=H.vertexTangents,Y.toneMapping=H.toneMapping}function rm(S,H,Y,W,ie){H.isScene!==!0&&(H=be),y.resetTextureUnits();const Le=H.fog,De=W.isMeshStandardMaterial?H.environment:null,ze=A===null?m.outputEncoding:A.isXRRenderTarget===!0?A.texture.encoding:ci,Oe=(W.isMeshStandardMaterial?F:E).get(W.envMap||De),Xe=W.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ve=!!W.normalMap&&!!Y.attributes.tangent,Ge=!!Y.morphAttributes.position,at=!!Y.morphAttributes.normal,pi=!!Y.morphAttributes.color,Ui=W.toneMapped?m.toneMapping:zn,Hi=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,mn=Hi!==void 0?Hi.length:0,We=te.get(W),ki=f.state.lights;if(q===!0&&(j===!0||S!==T)){const vn=S===T&&W.id===w;_.setState(W,S,vn)}let ct=!1;W.version===We.__version?(We.needsLights&&We.lightsStateVersion!==ki.state.version||We.outputEncoding!==ze||ie.isInstancedMesh&&We.instancing===!1||!ie.isInstancedMesh&&We.instancing===!0||ie.isSkinnedMesh&&We.skinning===!1||!ie.isSkinnedMesh&&We.skinning===!0||We.envMap!==Oe||W.fog===!0&&We.fog!==Le||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==_.numPlanes||We.numIntersection!==_.numIntersection)||We.vertexAlphas!==Xe||We.vertexTangents!==Ve||We.morphTargets!==Ge||We.morphNormals!==at||We.morphColors!==pi||We.toneMapping!==Ui||Pe.isWebGL2===!0&&We.morphTargetsCount!==mn)&&(ct=!0):(ct=!0,We.__version=W.version);let gn=We.currentProgram;ct===!0&&(gn=ba(W,H,ie));let Vn=!1,kr=!1,Ma=!1;const Ct=gn.getUniforms(),Vr=We.uniforms;if(ue.useProgram(gn.program)&&(Vn=!0,kr=!0,Ma=!0),W.id!==w&&(w=W.id,kr=!0),Vn||T!==S){if(Ct.setValue(ee,"projectionMatrix",S.projectionMatrix),Pe.logarithmicDepthBuffer&&Ct.setValue(ee,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),T!==S&&(T=S,kr=!0,Ma=!0),W.isShaderMaterial||W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshStandardMaterial||W.envMap){const vn=Ct.map.cameraPosition;vn!==void 0&&vn.setValue(ee,fe.setFromMatrixPosition(S.matrixWorld))}(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ct.setValue(ee,"isOrthographic",S.isOrthographicCamera===!0),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial||W.isShadowMaterial||ie.isSkinnedMesh)&&Ct.setValue(ee,"viewMatrix",S.matrixWorldInverse)}if(ie.isSkinnedMesh){Ct.setOptional(ee,ie,"bindMatrix"),Ct.setOptional(ee,ie,"bindMatrixInverse");const vn=ie.skeleton;vn&&(Pe.floatVertexTextures?(vn.boneTexture===null&&vn.computeBoneTexture(),Ct.setValue(ee,"boneTexture",vn.boneTexture,y),Ct.setValue(ee,"boneTextureSize",vn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const wa=Y.morphAttributes;return(wa.position!==void 0||wa.normal!==void 0||wa.color!==void 0&&Pe.isWebGL2===!0)&&Q.update(ie,Y,W,gn),(kr||We.receiveShadow!==ie.receiveShadow)&&(We.receiveShadow=ie.receiveShadow,Ct.setValue(ee,"receiveShadow",ie.receiveShadow)),kr&&(Ct.setValue(ee,"toneMappingExposure",m.toneMappingExposure),We.needsLights&&sm(Vr,Ma),Le&&W.fog===!0&&ne.refreshFogUniforms(Vr,Le),ne.refreshMaterialUniforms(Vr,W,B,D,Z),ri.upload(ee,We.uniformsList,Vr,y)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ri.upload(ee,We.uniformsList,Vr,y),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ct.setValue(ee,"center",ie.center),Ct.setValue(ee,"modelViewMatrix",ie.modelViewMatrix),Ct.setValue(ee,"normalMatrix",ie.normalMatrix),Ct.setValue(ee,"modelMatrix",ie.matrixWorld),gn}function sm(S,H){S.ambientLightColor.needsUpdate=H,S.lightProbe.needsUpdate=H,S.directionalLights.needsUpdate=H,S.directionalLightShadows.needsUpdate=H,S.pointLights.needsUpdate=H,S.pointLightShadows.needsUpdate=H,S.spotLights.needsUpdate=H,S.spotLightShadows.needsUpdate=H,S.rectAreaLights.needsUpdate=H,S.hemisphereLights.needsUpdate=H}function om(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(S,H,Y){te.get(S.texture).__webglTexture=H,te.get(S.depthTexture).__webglTexture=Y;const W=te.get(S);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=Y===void 0,W.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,H){const Y=te.get(S);Y.__webglFramebuffer=H,Y.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(S,H=0,Y=0){A=S,v=H,b=Y;let W=!0;if(S){const Oe=te.get(S);Oe.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(36160,null),W=!1):Oe.__webglFramebuffer===void 0?y.setupRenderTarget(S):Oe.__hasExternalTextures&&y.rebindTextures(S,te.get(S.texture).__webglTexture,te.get(S.depthTexture).__webglTexture)}let ie=null,Le=!1,De=!1;if(S){const Oe=S.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture)&&(De=!0);const Xe=te.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(ie=Xe[H],Le=!0):Pe.isWebGL2&&S.samples>0&&y.useMultisampledRTT(S)===!1?ie=te.get(S).__webglMultisampledFramebuffer:ie=Xe,R.copy(S.viewport),z.copy(S.scissor),M=S.scissorTest}else R.copy(O).multiplyScalar(B).floor(),z.copy(K).multiplyScalar(B).floor(),M=U;if(ue.bindFramebuffer(36160,ie)&&Pe.drawBuffers&&W&&ue.drawBuffers(S,ie),ue.viewport(R),ue.scissor(z),ue.setScissorTest(M),Le){const Oe=te.get(S.texture);ee.framebufferTexture2D(36160,36064,34069+H,Oe.__webglTexture,Y)}else if(De){const Oe=te.get(S.texture),Xe=H||0;ee.framebufferTextureLayer(36160,36064,Oe.__webglTexture,Y||0,Xe)}w=-1},this.readRenderTargetPixels=function(S,H,Y,W,ie,Le,De){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=te.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&De!==void 0&&(ze=ze[De]),ze){ue.bindFramebuffer(36160,ze);try{const Oe=S.texture,Xe=Oe.format,Ve=Oe.type;if(Xe!==Zt&&V.convert(Xe)!==ee.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=Ve===ys&&(Te.has("EXT_color_buffer_half_float")||Pe.isWebGL2&&Te.has("EXT_color_buffer_float"));if(Ve!==Fi&&V.convert(Ve)!==ee.getParameter(35738)&&!(Ve===ei&&(Pe.isWebGL2||Te.has("OES_texture_float")||Te.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=S.width-W&&Y>=0&&Y<=S.height-ie&&ee.readPixels(H,Y,W,ie,V.convert(Xe),V.convert(Ve),Le)}finally{const Oe=A!==null?te.get(A).__webglFramebuffer:null;ue.bindFramebuffer(36160,Oe)}}},this.copyFramebufferToTexture=function(S,H,Y=0){if(H.isFramebufferTexture!==!0){console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");return}const W=Math.pow(2,-Y),ie=Math.floor(H.image.width*W),Le=Math.floor(H.image.height*W);y.setTexture2D(H,0),ee.copyTexSubImage2D(3553,Y,0,0,S.x,S.y,ie,Le),ue.unbindTexture()},this.copyTextureToTexture=function(S,H,Y,W=0){const ie=H.image.width,Le=H.image.height,De=V.convert(Y.format),ze=V.convert(Y.type);y.setTexture2D(Y,0),ee.pixelStorei(37440,Y.flipY),ee.pixelStorei(37441,Y.premultiplyAlpha),ee.pixelStorei(3317,Y.unpackAlignment),H.isDataTexture?ee.texSubImage2D(3553,W,S.x,S.y,ie,Le,De,ze,H.image.data):H.isCompressedTexture?ee.compressedTexSubImage2D(3553,W,S.x,S.y,H.mipmaps[0].width,H.mipmaps[0].height,De,H.mipmaps[0].data):ee.texSubImage2D(3553,W,S.x,S.y,De,ze,H.image),W===0&&Y.generateMipmaps&&ee.generateMipmap(3553),ue.unbindTexture()},this.copyTextureToTexture3D=function(S,H,Y,W,ie=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=S.max.x-S.min.x+1,De=S.max.y-S.min.y+1,ze=S.max.z-S.min.z+1,Oe=V.convert(W.format),Xe=V.convert(W.type);let Ve;if(W.isData3DTexture)y.setTexture3D(W,0),Ve=32879;else if(W.isDataArrayTexture)y.setTexture2DArray(W,0),Ve=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}ee.pixelStorei(37440,W.flipY),ee.pixelStorei(37441,W.premultiplyAlpha),ee.pixelStorei(3317,W.unpackAlignment);const Ge=ee.getParameter(3314),at=ee.getParameter(32878),pi=ee.getParameter(3316),Ui=ee.getParameter(3315),Hi=ee.getParameter(32877),mn=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;ee.pixelStorei(3314,mn.width),ee.pixelStorei(32878,mn.height),ee.pixelStorei(3316,S.min.x),ee.pixelStorei(3315,S.min.y),ee.pixelStorei(32877,S.min.z),Y.isDataTexture||Y.isData3DTexture?ee.texSubImage3D(Ve,ie,H.x,H.y,H.z,Le,De,ze,Oe,Xe,mn.data):Y.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),ee.compressedTexSubImage3D(Ve,ie,H.x,H.y,H.z,Le,De,ze,Oe,mn.data)):ee.texSubImage3D(Ve,ie,H.x,H.y,H.z,Le,De,ze,Oe,Xe,mn),ee.pixelStorei(3314,Ge),ee.pixelStorei(32878,at),ee.pixelStorei(3316,pi),ee.pixelStorei(3315,Ui),ee.pixelStorei(32877,Hi),ie===0&&W.generateMipmaps&&ee.generateMipmap(Ve),ue.unbindTexture()},this.initTexture=function(S){y.setTexture2D(S,0),ue.unbindTexture()},this.resetState=function(){v=0,b=0,A=null,ue.reset(),xe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Ke.prototype.isWebGLRenderer=!0;class Hy extends Ke{}Hy.prototype.isWebGL1Renderer=!0;class Oc{constructor(e,t=1,i=1e3){this.name="",this.color=new Me(e),this.near=t,this.far=i}clone(){return new Oc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}Oc.prototype.isFog=!0;class zc extends Ze{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}zc.prototype.isScene=!0;class Ds{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=bs,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Kt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}Ds.prototype.isInterleavedBuffer=!0;const Rt=new C;class Ss{constructor(e,t,i,r=!1){this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ss(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}Ss.prototype.isInterleavedBufferAttribute=!0;class Uc extends lt{constructor(e){super(),this.type="SpriteMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}Uc.prototype.isSpriteMaterial=!0;let nr;const $r=new C,ir=new C,rr=new C,sr=new ae,Xr=new ae,ap=new Se,co=new C,Yr=new C,uo=new C,Wh=new ae,ul=new ae,jh=new ae;class ky extends Ze{constructor(e){if(super(),this.type="Sprite",nr===void 0){nr=new nt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ds(t,5);nr.setIndex([0,1,2,0,2,3]),nr.setAttribute("position",new Ss(i,3,0,!1)),nr.setAttribute("uv",new Ss(i,2,3,!1))}this.geometry=nr,this.material=e!==void 0?e:new Uc,this.center=new ae(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ir.setFromMatrixScale(this.matrixWorld),ap.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),rr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ir.multiplyScalar(-rr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;ho(co.set(-.5,-.5,0),rr,o,ir,r,s),ho(Yr.set(.5,-.5,0),rr,o,ir,r,s),ho(uo.set(.5,.5,0),rr,o,ir,r,s),Wh.set(0,0),ul.set(1,0),jh.set(1,1);let a=e.ray.intersectTriangle(co,Yr,uo,!1,$r);if(a===null&&(ho(Yr.set(-.5,.5,0),rr,o,ir,r,s),ul.set(0,1),a=e.ray.intersectTriangle(co,uo,Yr,!1,$r),a===null))return;const l=e.ray.origin.distanceTo($r);l<e.near||l>e.far||t.push({distance:l,point:$r.clone(),uv:ht.getUV($r,co,Yr,uo,Wh,ul,jh,new ae),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}ky.prototype.isSprite=!0;function ho(n,e,t,i,r,s){sr.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Xr.x=s*sr.x-r*sr.y,Xr.y=r*sr.x+s*sr.y):Xr.copy(sr),n.copy(e),n.x+=Xr.x,n.y+=Xr.y,n.applyMatrix4(ap)}const qh=new C,$h=new et,Xh=new et,Vy=new C,Yh=new Se;class lp extends Tt{constructor(e,t){super(e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Se,this.bindMatrixInverse=new Se}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new et,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const i=this.skeleton,r=this.geometry;$h.fromBufferAttribute(r.attributes.skinIndex,e),Xh.fromBufferAttribute(r.attributes.skinWeight,e),qh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Xh.getComponent(s);if(o!==0){const a=$h.getComponent(s);Yh.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(Vy.copy(qh).applyMatrix4(Yh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}lp.prototype.isSkinnedMesh=!0;class cp extends Ze{constructor(){super(),this.type="Bone"}}cp.prototype.isBone=!0;class Hc extends bt{constructor(e=null,t=1,i=1,r,s,o,a,l,c=_t,u=_t,h,f){super(null,o,a,l,c,u,r,s,h,f),this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}Hc.prototype.isDataTexture=!0;const Jh=new Se,Gy=new Se;class up{constructor(e=[],t=[]){this.uuid=Kt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Se)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Se;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Gy;Jh.multiplyMatrices(a,t[s]),Jh.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new up(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Wd(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Hc(t,e,e,Zt,ei);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new cp),this.bones.push(o),this.boneInverses.push(new Se().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class ql extends pt{constructor(e,t,i,r=1){typeof i=="number"&&(r=i,i=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,i),this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}ql.prototype.isInstancedBufferAttribute=!0;const Zh=new Se,Kh=new Se,fo=[],Jr=new Tt;class Wy extends Tt{constructor(e,t,i){super(e,t),this.instanceMatrix=new ql(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Jr.geometry=this.geometry,Jr.material=this.material,Jr.material!==void 0)for(let s=0;s<r;s++){this.getMatrixAt(s,Zh),Kh.multiplyMatrices(i,Zh),Jr.matrixWorld=Kh,Jr.raycast(e,fo);for(let o=0,a=fo.length;o<a;o++){const l=fo[o];l.instanceId=s,l.object=this,t.push(l)}fo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ql(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}Wy.prototype.isInstancedMesh=!0;class Un extends lt{constructor(e){super(),this.type="LineBasicMaterial",this.color=new Me(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}Un.prototype.isLineBasicMaterial=!0;const Qh=new C,ef=new C,tf=new Se,hl=new Br,po=new Nr;class kc extends Ze{constructor(e=new nt,t=new Un){super(),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Qh.fromBufferAttribute(t,r-1),ef.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Qh.distanceTo(ef);e.setAttribute("lineDistance",new st(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),po.copy(i.boundingSphere),po.applyMatrix4(r),po.radius+=s,e.ray.intersectsSphere(po)===!1)return;tf.copy(r).invert(),hl.copy(e.ray).applyMatrix4(tf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new C,u=new C,h=new C,f=new C,d=this.isLineSegments?2:1;if(i.isBufferGeometry){const g=i.index,p=i.attributes.position;if(g!==null){const v=Math.max(0,o.start),b=Math.min(g.count,o.start+o.count);for(let A=v,w=b-1;A<w;A+=d){const T=g.getX(A),R=g.getX(A+1);if(c.fromBufferAttribute(p,T),u.fromBufferAttribute(p,R),hl.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(f);M<e.near||M>e.far||t.push({distance:M,point:h.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,o.start),b=Math.min(p.count,o.start+o.count);for(let A=v,w=b-1;A<w;A+=d){if(c.fromBufferAttribute(p,A),u.fromBufferAttribute(p,A+1),hl.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(f);R<e.near||R>e.far||t.push({distance:R,point:h.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}}else i.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}kc.prototype.isLine=!0;const nf=new C,rf=new C;class Es extends kc{constructor(e,t){super(e,t),this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)nf.fromBufferAttribute(t,r),rf.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+nf.distanceTo(rf);e.setAttribute("lineDistance",new st(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}Es.prototype.isLineSegments=!0;class jy extends kc{constructor(e,t){super(e,t),this.type="LineLoop"}}jy.prototype.isLineLoop=!0;class Ti extends lt{constructor(e){super(),this.type="PointsMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}Ti.prototype.isPointsMaterial=!0;const sf=new Se,$l=new Br,mo=new Nr,go=new C;class Po extends Ze{constructor(e=new nt,t=new Ti){super(),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),mo.copy(i.boundingSphere),mo.applyMatrix4(r),mo.radius+=s,e.ray.intersectsSphere(mo)===!1)return;sf.copy(r).invert(),$l.copy(e.ray).applyMatrix4(sf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a;if(i.isBufferGeometry){const c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,m=d;g<m;g++){const p=c.getX(g);go.fromBufferAttribute(h,p),of(go,p,l,r,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,m=d;g<m;g++)go.fromBufferAttribute(h,g),of(go,g,l,r,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Po.prototype.isPoints=!0;function of(n,e,t,i,r,s,o){const a=$l.distanceSqToPoint(n);if(a<t){const l=new C;$l.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class qy extends bt{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.minFilter=o!==void 0?o:Ot,this.magFilter=s!==void 0?s:Ot,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}qy.prototype.isVideoTexture=!0;class $y extends bt{constructor(e,t,i){super({width:e,height:t}),this.format=i,this.magFilter=_t,this.minFilter=_t,this.generateMipmaps=!1,this.needsUpdate=!0}}$y.prototype.isFramebufferTexture=!0;class Xy extends bt{constructor(e,t,i,r,s,o,a,l,c,u,h,f){super(null,o,a,l,c,u,r,s,h,f),this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}Xy.prototype.isCompressedTexture=!0;class Yy extends bt{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.needsUpdate=!0}}Yy.prototype.isCanvasTexture=!0;class Qt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],f=i[r+1]-u,d=(o-u)/f;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new ae:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new C,r=[],s=[],o=[],a=new C,l=new Se;for(let d=0;d<=e;d++){const g=d/e;r[d]=this.getTangentAt(g,new C)}s[0]=new C,o[0]=new C;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(wt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(wt(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],d*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ga extends Qt{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const i=t||new ae,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}ga.prototype.isEllipseCurve=!0;class hp extends ga{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.type="ArcCurve"}}hp.prototype.isArcCurve=!0;function Vc(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,r(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const vo=new C,fl=new Vc,dl=new Vc,pl=new Vc;class fp extends Qt{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new C){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(vo.subVectors(r[0],r[1]).add(r[0]),c=vo);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(vo.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=vo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(u),d);m<1e-4&&(m=1),g<1e-4&&(g=m),p<1e-4&&(p=m),fl.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,m,p),dl.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,m,p),pl.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,m,p)}else this.curveType==="catmullrom"&&(fl.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),dl.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),pl.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(fl.calc(l),dl.calc(l),pl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new C().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}fp.prototype.isCatmullRomCurve3=!0;function af(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function Jy(n,e){const t=1-n;return t*t*e}function Zy(n,e){return 2*(1-n)*n*e}function Ky(n,e){return n*n*e}function us(n,e,t,i){return Jy(n,e)+Zy(n,t)+Ky(n,i)}function Qy(n,e){const t=1-n;return t*t*t*e}function e3(n,e){const t=1-n;return 3*t*t*n*e}function t3(n,e){return 3*(1-n)*n*n*e}function n3(n,e){return n*n*n*e}function hs(n,e,t,i,r){return Qy(n,e)+e3(n,t)+t3(n,i)+n3(n,r)}class Gc extends Qt{constructor(e=new ae,t=new ae,i=new ae,r=new ae){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ae){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(hs(e,r.x,s.x,o.x,a.x),hs(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}Gc.prototype.isCubicBezierCurve=!0;class dp extends Qt{constructor(e=new C,t=new C,i=new C,r=new C){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new C){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(hs(e,r.x,s.x,o.x,a.x),hs(e,r.y,s.y,o.y,a.y),hs(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}dp.prototype.isCubicBezierCurve3=!0;class va extends Qt{constructor(e=new ae,t=new ae){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const i=t||new ae;return i.copy(this.v2).sub(this.v1).normalize(),i}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}va.prototype.isLineCurve=!0;class i3 extends Qt{constructor(e=new C,t=new C){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new C){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wc extends Qt{constructor(e=new ae,t=new ae,i=new ae){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ae){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(us(e,r.x,s.x,o.x),us(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Wc.prototype.isQuadraticBezierCurve=!0;class pp extends Qt{constructor(e=new C,t=new C,i=new C){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(us(e,r.x,s.x,o.x),us(e,r.y,s.y,o.y),us(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}pp.prototype.isQuadraticBezierCurve3=!0;class jc extends Qt{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(af(a,l.x,c.x,u.x,h.x),af(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new ae().fromArray(r))}return this}}jc.prototype.isSplineCurve=!0;var mp=Object.freeze({__proto__:null,ArcCurve:hp,CatmullRomCurve3:fp,CubicBezierCurve:Gc,CubicBezierCurve3:dp,EllipseCurve:ga,LineCurve:va,LineCurve3:i3,QuadraticBezierCurve:Wc,QuadraticBezierCurve3:pp,SplineCurve:jc});class r3 extends Qt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new va(t,e))}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new mp[r.type]().fromJSON(r))}return this}}class Xl extends r3{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new va(this.currentPoint.clone(),new ae(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new Wc(this.currentPoint.clone(),new ae(e,t),new ae(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new Gc(this.currentPoint.clone(),new ae(e,t),new ae(i,r),new ae(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new jc(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){const c=new ga(e,t,i,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}new C;new C;new C;new ht;class Fs extends Xl{constructor(e){super(e),this.uuid=Kt(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new Xl().fromJSON(r))}return this}}const s3={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=gp(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,f,d;if(i&&(s=u3(n,e,s,t)),n.length>80*t){a=c=n[0],l=u=n[1];for(let g=t;g<r;g+=t)h=n[g],f=n[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?1/d:0}return Ts(s,o,t,a,l,d),o}};function gp(n,e,t,i,r){let s,o;if(r===b3(n,e,t,i)>0)for(s=e;s<t;s+=i)o=lf(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=lf(s,n[s],n[s+1],o);return o&&_a(o,o.next)&&(Cs(o),o=o.next),o}function ui(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(_a(t,t.next)||ot(t.prev,t,t.next)===0)){if(Cs(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ts(n,e,t,i,r,s,o){if(!n)return;!o&&s&&m3(n,i,r,s);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?a3(n,i,r,s):o3(n)){e.push(l.i/t),e.push(n.i/t),e.push(c.i/t),Cs(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=l3(ui(n),e,t),Ts(n,e,t,i,r,s,2)):o===2&&c3(n,e,t,i,r,s):Ts(ui(n),e,t,i,r,s,1);break}}}function o3(n){const e=n.prev,t=n,i=n.next;if(ot(e,t,i)>=0)return!1;let r=n.next.next;for(;r!==n.prev;){if(dr(e.x,e.y,t.x,t.y,i.x,i.y,r.x,r.y)&&ot(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function a3(n,e,t,i){const r=n.prev,s=n,o=n.next;if(ot(r,s,o)>=0)return!1;const a=r.x<s.x?r.x<o.x?r.x:o.x:s.x<o.x?s.x:o.x,l=r.y<s.y?r.y<o.y?r.y:o.y:s.y<o.y?s.y:o.y,c=r.x>s.x?r.x>o.x?r.x:o.x:s.x>o.x?s.x:o.x,u=r.y>s.y?r.y>o.y?r.y:o.y:s.y>o.y?s.y:o.y,h=Yl(a,l,e,t,i),f=Yl(c,u,e,t,i);let d=n.prevZ,g=n.nextZ;for(;d&&d.z>=h&&g&&g.z<=f;){if(d!==n.prev&&d!==n.next&&dr(r.x,r.y,s.x,s.y,o.x,o.y,d.x,d.y)&&ot(d.prev,d,d.next)>=0||(d=d.prevZ,g!==n.prev&&g!==n.next&&dr(r.x,r.y,s.x,s.y,o.x,o.y,g.x,g.y)&&ot(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;d&&d.z>=h;){if(d!==n.prev&&d!==n.next&&dr(r.x,r.y,s.x,s.y,o.x,o.y,d.x,d.y)&&ot(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;g&&g.z<=f;){if(g!==n.prev&&g!==n.next&&dr(r.x,r.y,s.x,s.y,o.x,o.y,g.x,g.y)&&ot(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function l3(n,e,t){let i=n;do{const r=i.prev,s=i.next.next;!_a(r,s)&&vp(r,i,i.next,s)&&As(r,s)&&As(s,r)&&(e.push(r.i/t),e.push(i.i/t),e.push(s.i/t),Cs(i),Cs(i.next),i=n=s),i=i.next}while(i!==n);return ui(i)}function c3(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&_3(o,a)){let l=_p(o,a);o=ui(o,o.next),l=ui(l,l.next),Ts(o,e,t,i,r,s),Ts(l,e,t,i,r,s);return}a=a.next}o=o.next}while(o!==n)}function u3(n,e,t,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,c=gp(n,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(v3(c));for(r.sort(h3),s=0;s<r.length;s++)f3(r[s],t),t=ui(t,t.next);return t}function h3(n,e){return n.x-e.x}function f3(n,e){if(e=d3(n,e),e){const t=_p(e,n);ui(e,e.next),ui(t,t.next)}}function d3(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,o;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>s){if(s=f,f===i){if(r===t.y)return t;if(r===t.next.y)return t.next}o=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!o)return null;if(i===s)return o;const a=o,l=o.x,c=o.y;let u=1/0,h;t=o;do i>=t.x&&t.x>=l&&i!==t.x&&dr(r<c?i:s,r,l,c,r<c?s:i,r,t.x,t.y)&&(h=Math.abs(r-t.y)/(i-t.x),As(t,n)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&p3(o,t)))&&(o=t,u=h)),t=t.next;while(t!==a);return o}function p3(n,e){return ot(n.prev,n,e.prev)<0&&ot(e.next,n,n.next)<0}function m3(n,e,t,i){let r=n;do r.z===null&&(r.z=Yl(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,g3(r)}function g3(n){let e,t,i,r,s,o,a,l,c=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,c*=2}while(o>1);return n}function Yl(n,e,t,i,r){return n=32767*(n-t)*r,e=32767*(e-i)*r,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function v3(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function dr(n,e,t,i,r,s,o,a){return(r-o)*(e-a)-(n-o)*(s-a)>=0&&(n-o)*(i-a)-(t-o)*(e-a)>=0&&(t-o)*(s-a)-(r-o)*(i-a)>=0}function _3(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!x3(n,e)&&(As(n,e)&&As(e,n)&&y3(n,e)&&(ot(n.prev,n,e.prev)||ot(n,e.prev,e))||_a(n,e)&&ot(n.prev,n,n.next)>0&&ot(e.prev,e,e.next)>0)}function ot(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function _a(n,e){return n.x===e.x&&n.y===e.y}function vp(n,e,t,i){const r=xo(ot(n,e,t)),s=xo(ot(n,e,i)),o=xo(ot(t,i,n)),a=xo(ot(t,i,e));return!!(r!==s&&o!==a||r===0&&_o(n,t,e)||s===0&&_o(n,i,e)||o===0&&_o(t,n,i)||a===0&&_o(t,e,i))}function _o(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function xo(n){return n>0?1:n<0?-1:0}function x3(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&vp(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function As(n,e){return ot(n.prev,n,n.next)<0?ot(n,e,n.next)>=0&&ot(n,n.prev,e)>=0:ot(n,e,n.prev)<0||ot(n,n.next,e)<0}function y3(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function _p(n,e){const t=new Jl(n.i,n.x,n.y),i=new Jl(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function lf(n,e,t,i){const r=new Jl(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Cs(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Jl(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function b3(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class si{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return si.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];cf(e),uf(i,e);let o=e.length;t.forEach(cf);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,uf(i,t[l]);const a=s3.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function cf(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function uf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class zr extends nt{constructor(e=new Fs([new ae(.5,.5),new ae(-.5,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new st(r,3)),this.setAttribute("uv",new st(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1;let h=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,m=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const v=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:M3;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),h=t.amount);let A,w=!1,T,R,z,M;v&&(A=v.getSpacedPoints(u),w=!0,f=!1,T=v.computeFrenetFrames(u,!1),R=new C,z=new C,M=new C),f||(p=0,d=0,g=0,m=0);const P=a.extractPoints(c);let D=P.shape;const B=P.holes;if(!si.isClockWise(D)){D=D.reverse();for(let te=0,y=B.length;te<y;te++){const E=B[te];si.isClockWise(E)&&(B[te]=E.reverse())}}const he=si.triangulateShape(D,B),O=D;for(let te=0,y=B.length;te<y;te++){const E=B[te];D=D.concat(E)}function K(te,y,E){return y||console.error("THREE.ExtrudeGeometry: vec does not exist"),y.clone().multiplyScalar(E).add(te)}const U=D.length,$=he.length;function q(te,y,E){let F,N,G;const X=te.x-y.x,J=te.y-y.y,ne=E.x-te.x,se=E.y-te.y,x=X*X+J*J,_=X*se-J*ne;if(Math.abs(_)>Number.EPSILON){const I=Math.sqrt(x),k=Math.sqrt(ne*ne+se*se),Q=y.x-J/I,oe=y.y+X/I,ve=E.x-se/k,V=E.y+ne/k,xe=((ve-Q)*se-(V-oe)*ne)/(X*se-J*ne);F=Q+X*xe-te.x,N=oe+J*xe-te.y;const Ae=F*F+N*N;if(Ae<=2)return new ae(F,N);G=Math.sqrt(Ae/2)}else{let I=!1;X>Number.EPSILON?ne>Number.EPSILON&&(I=!0):X<-Number.EPSILON?ne<-Number.EPSILON&&(I=!0):Math.sign(J)===Math.sign(se)&&(I=!0),I?(F=-J,N=X,G=Math.sqrt(x)):(F=X,N=J,G=Math.sqrt(x/2))}return new ae(F/G,N/G)}const j=[];for(let te=0,y=O.length,E=y-1,F=te+1;te<y;te++,E++,F++)E===y&&(E=0),F===y&&(F=0),j[te]=q(O[te],O[E],O[F]);const Z=[];let ce,re=j.concat();for(let te=0,y=B.length;te<y;te++){const E=B[te];ce=[];for(let F=0,N=E.length,G=N-1,X=F+1;F<N;F++,G++,X++)G===N&&(G=0),X===N&&(X=0),ce[F]=q(E[F],E[G],E[X]);Z.push(ce),re=re.concat(ce)}for(let te=0;te<p;te++){const y=te/p,E=d*Math.cos(y*Math.PI/2),F=g*Math.sin(y*Math.PI/2)+m;for(let N=0,G=O.length;N<G;N++){const X=K(O[N],j[N],F);Fe(X.x,X.y,-E)}for(let N=0,G=B.length;N<G;N++){const X=B[N];ce=Z[N];for(let J=0,ne=X.length;J<ne;J++){const se=K(X[J],ce[J],F);Fe(se.x,se.y,-E)}}}const fe=g+m;for(let te=0;te<U;te++){const y=f?K(D[te],re[te],fe):D[te];w?(z.copy(T.normals[0]).multiplyScalar(y.x),R.copy(T.binormals[0]).multiplyScalar(y.y),M.copy(A[0]).add(z).add(R),Fe(M.x,M.y,M.z)):Fe(y.x,y.y,0)}for(let te=1;te<=u;te++)for(let y=0;y<U;y++){const E=f?K(D[y],re[y],fe):D[y];w?(z.copy(T.normals[te]).multiplyScalar(E.x),R.copy(T.binormals[te]).multiplyScalar(E.y),M.copy(A[te]).add(z).add(R),Fe(M.x,M.y,M.z)):Fe(E.x,E.y,h/u*te)}for(let te=p-1;te>=0;te--){const y=te/p,E=d*Math.cos(y*Math.PI/2),F=g*Math.sin(y*Math.PI/2)+m;for(let N=0,G=O.length;N<G;N++){const X=K(O[N],j[N],F);Fe(X.x,X.y,h+E)}for(let N=0,G=B.length;N<G;N++){const X=B[N];ce=Z[N];for(let J=0,ne=X.length;J<ne;J++){const se=K(X[J],ce[J],F);w?Fe(se.x,se.y+A[u-1].y,A[u-1].x+E):Fe(se.x,se.y,h+E)}}}be(),Ee();function be(){const te=r.length/3;if(f){let y=0,E=U*y;for(let F=0;F<$;F++){const N=he[F];Te(N[2]+E,N[1]+E,N[0]+E)}y=u+p*2,E=U*y;for(let F=0;F<$;F++){const N=he[F];Te(N[0]+E,N[1]+E,N[2]+E)}}else{for(let y=0;y<$;y++){const E=he[y];Te(E[2],E[1],E[0])}for(let y=0;y<$;y++){const E=he[y];Te(E[0]+U*u,E[1]+U*u,E[2]+U*u)}}i.addGroup(te,r.length/3-te,0)}function Ee(){const te=r.length/3;let y=0;ee(O,y),y+=O.length;for(let E=0,F=B.length;E<F;E++){const N=B[E];ee(N,y),y+=N.length}i.addGroup(te,r.length/3-te,1)}function ee(te,y){let E=te.length;for(;--E>=0;){const F=E;let N=E-1;N<0&&(N=te.length-1);for(let G=0,X=u+p*2;G<X;G++){const J=U*G,ne=U*(G+1),se=y+F+J,x=y+N+J,_=y+N+ne,I=y+F+ne;Pe(se,x,_,I)}}}function Fe(te,y,E){l.push(te),l.push(y),l.push(E)}function Te(te,y,E){ue(te),ue(y),ue(E);const F=r.length/3,N=b.generateTopUV(i,r,F-3,F-2,F-1);Be(N[0]),Be(N[1]),Be(N[2])}function Pe(te,y,E,F){ue(te),ue(y),ue(F),ue(y),ue(E),ue(F);const N=r.length/3,G=b.generateSideWallUV(i,r,N-6,N-3,N-2,N-1);Be(G[0]),Be(G[1]),Be(G[3]),Be(G[1]),Be(G[2]),Be(G[3])}function ue(te){r.push(l[te*3+0]),r.push(l[te*3+1]),r.push(l[te*3+2])}function Be(te){s.push(te.x),s.push(te.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return w3(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new mp[r.type]().fromJSON(r)),new zr(i,e.options)}}const M3={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new ae(s,o),new ae(a,l),new ae(c,u)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],f=e[r*3],d=e[r*3+1],g=e[r*3+2],m=e[s*3],p=e[s*3+1],v=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ae(o,1-l),new ae(c,1-h),new ae(f,1-g),new ae(m,1-v)]:[new ae(a,1-l),new ae(u,1-h),new ae(d,1-g),new ae(p,1-v)]}};function w3(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class qc extends nt{constructor(e=new Fs([new ae(0,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new st(r,3)),this.setAttribute("normal",new st(s,3)),this.setAttribute("uv",new st(o,2));function c(u){const h=r.length/3,f=u.extractPoints(t);let d=f.shape;const g=f.holes;si.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,v=g.length;p<v;p++){const b=g[p];si.isClockWise(b)===!0&&(g[p]=b.reverse())}const m=si.triangulateShape(d,g);for(let p=0,v=g.length;p<v;p++){const b=g[p];d=d.concat(b)}for(let p=0,v=d.length;p<v;p++){const b=d[p];r.push(b.x,b.y,0),s.push(0,0,1),o.push(b.x,b.y)}for(let p=0,v=m.length;p<v;p++){const b=m[p],A=b[0]+h,w=b[1]+h,T=b[2]+h;i.push(A,w,T),l+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return S3(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];i.push(o)}return new qc(i,e.curveSegments)}}function S3(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class xp extends lt{constructor(e){super(),this.type="ShadowMaterial",this.color=new Me(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}xp.prototype.isShadowMaterial=!0;class yp extends hn{constructor(e){super(e),this.type="RawShaderMaterial"}}yp.prototype.isRawShaderMaterial=!0;class $c extends lt{constructor(e){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fr,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}$c.prototype.isMeshStandardMaterial=!0;class bp extends $c{constructor(e){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenColor=new Me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new Me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Me(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}bp.prototype.isMeshPhysicalMaterial=!0;class xa extends lt{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new Me(16777215),this.specular=new Me(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fr,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=aa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}xa.prototype.isMeshPhongMaterial=!0;class Xc extends lt{constructor(e){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Me(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fr,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}Xc.prototype.isMeshToonMaterial=!0;class Mp extends lt{constructor(e){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fr,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}Mp.prototype.isMeshNormalMaterial=!0;class wp extends lt{constructor(e){super(),this.type="MeshLambertMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=aa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}wp.prototype.isMeshLambertMaterial=!0;class Sp extends lt{constructor(e){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Me(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fr,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}Sp.prototype.isMeshMatcapMaterial=!0;class Ep extends Un{constructor(e){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}Ep.prototype.isLineDashedMaterial=!0;const E3={ShadowMaterial:xp,SpriteMaterial:Uc,RawShaderMaterial:yp,ShaderMaterial:hn,PointsMaterial:Ti,MeshPhysicalMaterial:bp,MeshStandardMaterial:$c,MeshPhongMaterial:xa,MeshToonMaterial:Xc,MeshNormalMaterial:Mp,MeshLambertMaterial:wp,MeshDepthMaterial:Nc,MeshDistanceMaterial:Bc,MeshBasicMaterial:ha,MeshMatcapMaterial:Sp,LineDashedMaterial:Ep,LineBasicMaterial:Un,Material:lt};lt.fromType=function(n){return new E3[n]};const rt={arraySlice:function(n,e,t){return rt.isTypedArray(n)?new n.constructor(n.subarray(e,t!==void 0?t:n.length)):n.slice(e,t)},convertArray:function(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)},isTypedArray:function(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)},getKeyframeOrder:function(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i},sortedArray:function(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r},flattenJSON:function(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)},subclip:function(n,e,t,i,r=30){const s=n.clone();s.name=e;const o=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],u=c.getValueSize(),h=[],f=[];for(let d=0;d<c.times.length;++d){const g=c.times[d]*r;if(!(g<t||g>=i)){h.push(c.times[d]);for(let m=0;m<u;++m)f.push(c.values[d*u+m])}}h.length!==0&&(c.times=rt.convertArray(h,c.times.constructor),c.values=rt.convertArray(f,c.values.constructor),o.push(c))}s.tracks=o;let a=1/0;for(let l=0;l<s.tracks.length;++l)a>s.tracks[l].times[0]&&(a=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(n,e=0,t=n,i=30){i<=0&&(i=30);const r=t.tracks.length,s=e/i;for(let o=0;o<r;++o){const a=t.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=n.tracks.find(function(v){return v.name===a.name&&v.ValueTypeName===l});if(c===void 0)continue;let u=0;const h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let f=0;const d=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=d/3);const g=a.times.length-1;let m;if(s<=a.times[0]){const v=u,b=h-u;m=rt.arraySlice(a.values,v,b)}else if(s>=a.times[g]){const v=g*h+u,b=v+h-u;m=rt.arraySlice(a.values,v,b)}else{const v=a.createInterpolant(),b=u,A=h-u;v.evaluate(s),m=rt.arraySlice(v.resultBuffer,b,A)}l==="quaternion"&&new kt().fromArray(m).normalize().conjugate().toArray(m);const p=c.times.length;for(let v=0;v<p;++v){const b=v*d+f;if(l==="quaternion")kt.multiplyQuaternionsFlat(c.values,b,m,0,c.values,b);else{const A=d-f*2;for(let w=0;w<A;++w)c.values[b+w]-=m[w]}}}return n.blendMode=Gd,n}};class hi{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.afterEnd_(i-1,e,s)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,r);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,r);if(r===void 0)return i=t.length,this._cachedIndex=i,this.afterEnd_(i-1,s,e)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}hi.prototype.beforeStart_=hi.prototype.copySampleValue_;hi.prototype.afterEnd_=hi.prototype.copySampleValue_;class T3 extends hi{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ur,endingEnd:ur}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case hr:s=e,a=2*t-i;break;case qo:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case hr:o=e,l=2*i-t;break;case qo:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-t)/(r-t),m=g*g,p=m*g,v=-f*p+2*f*m-f*g,b=(1+f)*p+(-1.5-2*f)*m+(-.5+f)*g+1,A=(-1-d)*p+(1.5+d)*m+.5*g,w=d*p-d*m;for(let T=0;T!==a;++T)s[T]=v*o[u+T]+b*o[c+T]+A*o[l+T]+w*o[h+T];return s}}class Tp extends hi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}}class A3 extends hi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Tn{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=rt.convertArray(t,this.TimeBufferType),this.values=rt.convertArray(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:rt.convertArray(e.times,Array),values:rt.convertArray(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new A3(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Tp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new T3(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Wo:t=this.InterpolantFactoryMethodDiscrete;break;case jo:t=this.InterpolantFactoryMethodLinear;break;case Ba:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wo;case this.InterpolantFactoryMethodLinear:return jo;case this.InterpolantFactoryMethodSmooth:return Ba}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=rt.arraySlice(i,s,o),this.values=rt.arraySlice(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&rt.isTypedArray(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=rt.arraySlice(this.times),t=rt.arraySlice(this.values),i=this.getValueSize(),r=this.getInterpolation()===Ba,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const h=a*i,f=h-i,d=h+i;for(let g=0;g!==i;++g){const m=t[h+g];if(m!==t[f+g]||m!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=rt.arraySlice(e,0,o),this.values=rt.arraySlice(t,0,o*i)):(this.times=e,this.values=t),this}clone(){const e=rt.arraySlice(this.times,0),t=rt.arraySlice(this.values,0),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=jo;class Ur extends Tn{}Ur.prototype.ValueTypeName="bool";Ur.prototype.ValueBufferType=Array;Ur.prototype.DefaultInterpolation=Wo;Ur.prototype.InterpolantFactoryMethodLinear=void 0;Ur.prototype.InterpolantFactoryMethodSmooth=void 0;class Ap extends Tn{}Ap.prototype.ValueTypeName="color";class Yo extends Tn{}Yo.prototype.ValueTypeName="number";class C3 extends hi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)kt.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Ns extends Tn{InterpolantFactoryMethodLinear(e){return new C3(this.times,this.values,this.getValueSize(),e)}}Ns.prototype.ValueTypeName="quaternion";Ns.prototype.DefaultInterpolation=jo;Ns.prototype.InterpolantFactoryMethodSmooth=void 0;class Hr extends Tn{}Hr.prototype.ValueTypeName="string";Hr.prototype.ValueBufferType=Array;Hr.prototype.DefaultInterpolation=Wo;Hr.prototype.InterpolantFactoryMethodLinear=void 0;Hr.prototype.InterpolantFactoryMethodSmooth=void 0;class Jo extends Tn{}Jo.prototype.ValueTypeName="vector";class hf{constructor(e,t=-1,i,r=Ac){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Kt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(L3(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(Tn.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=rt.getKeyframeOrder(l);l=rt.sortedArray(l,1,u),c=rt.sortedArray(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Yo(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=r[h];f||(r[h]=f=[]),f.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,f,d,g,m){if(d.length!==0){const p=[],v=[];rt.flattenJSON(d,p,v,g),p.length!==0&&m.push(new h(f,p,v))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let m=0;m<f[g].morphTargets.length;m++)d[f[g].morphTargets[m]]=-1;for(const m in d){const p=[],v=[];for(let b=0;b!==f[g].morphTargets.length;++b){const A=f[g];p.push(A.time),v.push(A.morphTarget===m?1:0)}r.push(new Yo(".morphTargetInfluence["+m+"]",p,v))}l=d.length*o}else{const d=".bones["+t[h].name+"]";i(Jo,d+".position",f,"pos",r),i(Ns,d+".quaternion",f,"rot",r),i(Jo,d+".scale",f,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function R3(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Yo;case"vector":case"vector2":case"vector3":case"vector4":return Jo;case"color":return Ap;case"quaternion":return Ns;case"bool":case"boolean":return Ur;case"string":return Hr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function L3(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=R3(n.type);if(n.times===void 0){const t=[],i=[];rt.flattenJSON(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Rr={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Cp{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const Rp=new Cp;class An{constructor(e){this.manager=e!==void 0?e:Rp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Dn={};class Yc extends An{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Rr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Dn[e]!==void 0){Dn[e].push({onLoad:t,onProgress:i,onError:r});return}Dn[e]=[],Dn[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;const u=Dn[e],h=c.body.getReader(),f=c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let m=0;const p=new ReadableStream({start(v){b();function b(){h.read().then(({done:A,value:w})=>{if(A)v.close();else{m+=w.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:d});for(let R=0,z=u.length;R<z;R++){const M=u[R];M.onProgress&&M.onProgress(T)}v.enqueue(w),b()}})}}});return new Response(p)}else throw Error(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Rr.add(e,c);const u=Dn[e];delete Dn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Dn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Dn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Lp extends An{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Rr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=ws("img");function l(){u(),Rr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class P3 extends An{constructor(e){super(e)}load(e,t,i,r){const s=new da,o=new Lp(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(u){s.images[c]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,r)}for(let c=0;c<e.length;++c)l(c);return s}}class Pp extends An{constructor(e){super(e)}load(e,t,i,r){const s=new bt,o=new Lp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Sn extends Ze{constructor(e,t=1){super(),this.type="Light",this.color=new Me(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}Sn.prototype.isLight=!0;class I3 extends Sn{constructor(e,t,i){super(e,i),this.type="HemisphereLight",this.position.copy(Ze.DefaultUp),this.updateMatrix(),this.groundColor=new Me(t)}copy(e){return Sn.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}I3.prototype.isHemisphereLight=!0;const ff=new Se,df=new C,pf=new C;class Jc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pa,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;df.setFromMatrixPosition(e.matrixWorld),t.position.copy(df),pf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pf),t.updateMatrixWorld(),ff.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ff),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(t.projectionMatrix),i.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ip extends Jc{constructor(){super(new zt(50,1,.5,500)),this.focus=1}updateMatrices(e){const t=this.camera,i=Ms*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}Ip.prototype.isSpotLightShadow=!0;class D3 extends Sn{constructor(e,t,i=0,r=Math.PI/3,s=0,o=1){super(e,t),this.type="SpotLight",this.position.copy(Ze.DefaultUp),this.updateMatrix(),this.target=new Ze,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.shadow=new Ip}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}D3.prototype.isSpotLight=!0;const mf=new Se,Zr=new C,ml=new C;class Dp extends Jc{constructor(){super(new zt(90,1,.5,500)),this._frameExtents=new ae(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Zr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Zr),ml.copy(i.position),ml.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ml),i.updateMatrixWorld(),r.makeTranslation(-Zr.x,-Zr.y,-Zr.z),mf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mf)}}Dp.prototype.isPointLightShadow=!0;class Fp extends Sn{constructor(e,t,i=0,r=1){super(e,t),this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Dp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}Fp.prototype.isPointLight=!0;class Np extends Jc{constructor(){super(new Dc(-5,5,5,-5,.5,500))}}Np.prototype.isDirectionalLightShadow=!0;class F3 extends Sn{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(Ze.DefaultUp),this.updateMatrix(),this.target=new Ze,this.shadow=new Np}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}F3.prototype.isDirectionalLight=!0;class N3 extends Sn{constructor(e,t){super(e,t),this.type="AmbientLight"}}N3.prototype.isAmbientLight=!0;class B3 extends Sn{constructor(e,t,i=10,r=10){super(e,t),this.type="RectAreaLight",this.width=i,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}B3.prototype.isRectAreaLight=!0;class Bp{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new C)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const i=e.x,r=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*r),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*i),t.addScaledVector(o[4],1.092548*(i*r)),t.addScaledVector(o[5],1.092548*(r*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(i*s)),t.addScaledVector(o[8],.546274*(i*i-r*r)),t}getIrradianceAt(e,t){const i=e.x,r=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*r),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*i),t.addScaledVector(o[4],2*.429043*i*r),t.addScaledVector(o[5],2*.429043*r*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*i*s),t.addScaledVector(o[8],.429043*(i*i-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].fromArray(e,t+r*3);return this}toArray(e=[],t=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].toArray(e,t+r*3);return e}static getBasisAt(e,t){const i=e.x,r=e.y,s=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*s,t[3]=.488603*i,t[4]=1.092548*i*r,t[5]=1.092548*r*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*i*s,t[8]=.546274*(i*i-r*r)}}Bp.prototype.isSphericalHarmonics3=!0;class Zc extends Sn{constructor(e=new Bp,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}Zc.prototype.isLightProbe=!0;class Op{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class O3 extends nt{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}O3.prototype.isInstancedBufferGeometry=!0;class z3 extends An{constructor(e){super(e),typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Rr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){Rr.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){r&&r(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}z3.prototype.isImageBitmapLoader=!0;let yo;const U3={getContext:function(){return yo===void 0&&(yo=new(window.AudioContext||window.webkitAudioContext)),yo},setContext:function(n){yo=n}};class H3 extends An{constructor(e){super(e)}load(e,t,i,r){const s=this,o=new Yc(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{const l=a.slice(0);U3.getContext().decodeAudioData(l,function(u){t(u)})}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},i,r)}}class k3 extends Zc{constructor(e,t,i=1){super(void 0,i);const r=new Me().set(e),s=new Me().set(t),o=new C(r.r,r.g,r.b),a=new C(s.r,s.g,s.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(a).multiplyScalar(l),this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(c)}}k3.prototype.isHemisphereLightProbe=!0;class V3 extends Zc{constructor(e,t=1){super(void 0,t);const i=new Me().set(e);this.sh.coefficients[0].set(i.r,i.g,i.b).multiplyScalar(2*Math.sqrt(Math.PI))}}V3.prototype.isAmbientLightProbe=!0;class BS{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=gf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=gf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function gf(){return(typeof performance=="undefined"?Date:performance).now()}class G3 extends Ze{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class W3{constructor(e,t,i){this.binding=e,this.valueSize=i;let r,s,o;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:r=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,r=this.valueSize,s=e*r+r;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==r;++a)i[s+a]=i[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(i,s,0,a,r)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,r=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,r=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(i,r,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(i,r,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){a.setValue(i,r);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,r=i*this._origIndex;e.getValue(t,r);for(let s=i,o=r;s!==o;++s)t[s]=t[r+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,r,s){if(r>=.5)for(let o=0;o!==s;++o)e[t+o]=e[i+o]}_slerp(e,t,i,r){kt.slerpFlat(e,t,e,t,e,i,r)}_slerpAdditive(e,t,i,r,s){const o=this._workIndex*s;kt.multiplyQuaternionsFlat(e,o,e,t,e,i),kt.slerpFlat(e,t,e,t,e,o,r)}_lerp(e,t,i,r,s){const o=1-r;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*o+e[i+a]*r}}_lerpAdditive(e,t,i,r,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[i+o]*r}}}const Kc="\\[\\]\\.:\\/",j3=new RegExp("["+Kc+"]","g"),Qc="[^"+Kc+"]",q3="[^"+Kc.replace("\\.","")+"]",$3=/((?:WC+[\/:])*)/.source.replace("WC",Qc),X3=/(WCOD+)?/.source.replace("WCOD",q3),Y3=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qc),J3=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qc),Z3=new RegExp("^"+$3+X3+Y3+J3+"$"),K3=["material","materials","bones"];class Q3{constructor(e,t,i){const r=i||Ye.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Ye{constructor(e,t,i){this.path=t,this.parsedPath=i||Ye.parseTrackName(t),this.node=Ye.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Ye.Composite(e,t,i):new Ye(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(j3,"")}static parseTrackName(e){const t=Z3.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);K3.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=Ye.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ye.Composite=Q3;Ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ye.prototype.GetterByBindingType=[Ye.prototype._getValue_direct,Ye.prototype._getValue_array,Ye.prototype._getValue_arrayElement,Ye.prototype._getValue_toArray];Ye.prototype.SetterByBindingTypeAndVersioning=[[Ye.prototype._setValue_direct,Ye.prototype._setValue_direct_setNeedsUpdate,Ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_array,Ye.prototype._setValue_array_setNeedsUpdate,Ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_arrayElement,Ye.prototype._setValue_arrayElement_setNeedsUpdate,Ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_fromArray,Ye.prototype._setValue_fromArray_setNeedsUpdate,Ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class eb{constructor(e,t,i=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=r;const s=t.tracks,o=s.length,a=new Array(o),l={endingStart:ur,endingEnd:ur};for(let c=0;c!==o;++c){const u=s[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=P1,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const r=this._clip.duration,s=e._clip.duration,o=s/r,a=r/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const r=this._mixer,s=r.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+i,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,r){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*i;if(l<0||i===0)return;this._startTime=null,t=i*l}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Gd:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case Ac:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(r,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;i!==null&&(t*=i.evaluate(e)[0],e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let r=this.time+e,s=this._loopCount;const o=i===I1;if(e===0)return s===-1?r:o&&(s&1)===1?t-r:r;if(i===L1){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=t||r<0){const a=Math.floor(r/t);r-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=r;if(o&&(s&1)===1)return t-r}return r}_setEndings(e,t,i){const r=this._interpolantSettings;i?(r.endingStart=hr,r.endingEnd=hr):(e?r.endingStart=this.zeroSlopeAtStart?hr:ur:r.endingStart=qo,t?r.endingEnd=this.zeroSlopeAtEnd?hr:ur:r.endingEnd=qo)}_scheduleFading(e,t,i){const r=this._mixer,s=r.time;let o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=i,this}}class tb extends Ni{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,r=e._clip.tracks,s=r.length,o=e._propertyBindings,a=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==s;++h){const f=r[h],d=f.name;let g=u[d];if(g!==void 0)++g.referenceCount,o[h]=g;else{if(g=o[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,d));continue}const m=t&&t._propertyBindings[h].binding.parsedPath;g=new W3(Ye.create(i,d,m),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,d),o[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,i)}const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const s=t[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const s=t[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const r=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=r.length,r.push(e),o.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],r=e._cacheIndex;i._cacheIndex=r,t[r]=i,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const s=t[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_addInactiveBinding(e,t,i){const r=this._bindingsByRootAndName,s=this._bindings;let o=r[t];o===void 0&&(o={},r[t]=o),o[i]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,r=i.rootNode.uuid,s=i.path,o=this._bindingsByRootAndName,a=o[r],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[r]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new Tp(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=i,t[i]=s}clipAction(e,t,i){const r=t||this._root,s=r.uuid;let o=typeof e=="string"?hf.findByName(r,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(i===void 0&&(o!==null?i=o.blendMode:i=Ac),l!==void 0){const h=l.actionByRoot[s];if(h!==void 0&&h.blendMode===i)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const u=new eb(this,o,t,i);return this._bindAction(u,c),this._addInactiveAction(u,a,s),u}existingAction(e,t){const i=t||this._root,r=i.uuid,s=typeof e=="string"?hf.findByName(i,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[r]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,r=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(r,e,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,r=this._actionsByClip,s=r[i];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete r[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const o in i){const a=i[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}tb.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class nb extends Ds{constructor(e,t,i=1){super(e,t),this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}nb.prototype.isInstancedInterleavedBuffer=!0;const Zn=new C,bo=new Se,gl=new Se;class ib extends Es{constructor(e){const t=zp(e),i=new nt,r=[],s=[],o=new Me(0,0,1),a=new Me(0,1,0);for(let c=0;c<t.length;c++){const u=t[c];u.parent&&u.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}i.setAttribute("position",new st(r,3)),i.setAttribute("color",new st(s,3));const l=new Un({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,l),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,i=this.geometry,r=i.getAttribute("position");gl.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){const a=t[s];a.parent&&a.parent.isBone&&(bo.multiplyMatrices(gl,a.matrixWorld),Zn.setFromMatrixPosition(bo),r.setXYZ(o,Zn.x,Zn.y,Zn.z),bo.multiplyMatrices(gl,a.parent.matrixWorld),Zn.setFromMatrixPosition(bo),r.setXYZ(o+1,Zn.x,Zn.y,Zn.z),o+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function zp(n){const e=[];n.isBone===!0&&e.push(n);for(let t=0;t<n.children.length;t++)e.push.apply(e,zp(n.children[t]));return e}class rb extends Es{constructor(e=10,t=10,i=4473924,r=8947848){i=new Me(i),r=new Me(r);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,d=0,g=-a;f<=t;f++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const m=f===s?i:r;m.toArray(c,d),d+=3,m.toArray(c,d),d+=3,m.toArray(c,d),d+=3,m.toArray(c,d),d+=3}const u=new nt;u.setAttribute("position",new st(l,3)),u.setAttribute("color",new st(c,3));const h=new Un({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}}const xn=new Uint32Array(512),yn=new Uint32Array(512);for(let n=0;n<256;++n){const e=n-127;e<-27?(xn[n]=0,xn[n|256]=32768,yn[n]=24,yn[n|256]=24):e<-14?(xn[n]=1024>>-e-14,xn[n|256]=1024>>-e-14|32768,yn[n]=-e-1,yn[n|256]=-e-1):e<=15?(xn[n]=e+15<<10,xn[n|256]=e+15<<10|32768,yn[n]=13,yn[n|256]=13):e<128?(xn[n]=31744,xn[n|256]=64512,yn[n]=24,yn[n|256]=24):(xn[n]=31744,xn[n|256]=64512,yn[n]=13,yn[n|256]=13)}const Up=new Uint32Array(2048),Bs=new Uint32Array(64),sb=new Uint32Array(64);for(let n=1;n<1024;++n){let e=n<<13,t=0;for(;(e&8388608)===0;)e<<=1,t-=8388608;e&=-8388609,t+=947912704,Up[n]=e|t}for(let n=1024;n<2048;++n)Up[n]=939524096+(n-1024<<13);for(let n=1;n<31;++n)Bs[n]=n<<23;Bs[31]=1199570944;Bs[32]=2147483648;for(let n=33;n<63;++n)Bs[n]=2147483648+(n-32<<23);Bs[63]=3347054592;for(let n=1;n<64;++n)n!==32&&(sb[n]=1024);Qt.create=function(n,e){return console.log("THREE.Curve.create() has been deprecated"),n.prototype=Object.create(Qt.prototype),n.prototype.constructor=n,n.prototype.getPoint=e,n};Xl.prototype.fromPoints=function(n){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(n)};rb.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};ib.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};An.prototype.extractUrlBase=function(n){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),Op.extractUrlBase(n)};An.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};fn.prototype.center=function(n){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(n)};fn.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};fn.prototype.isIntersectionBox=function(n){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(n)};fn.prototype.isIntersectionSphere=function(n){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(n)};fn.prototype.size=function(n){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(n)};Oi.prototype.toVector3=function(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")};Nr.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};pa.prototype.setFromMatrix=function(n){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(n)};St.prototype.flattenToArrayOffset=function(n,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(n,e)};St.prototype.multiplyVector3=function(n){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),n.applyMatrix3(this)};St.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};St.prototype.applyToBufferAttribute=function(n){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),n.applyMatrix3(this)};St.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};St.prototype.getInverse=function(n){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(n).invert()};Se.prototype.extractPosition=function(n){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(n)};Se.prototype.flattenToArrayOffset=function(n,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(n,e)};Se.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new C().setFromMatrixColumn(this,3)};Se.prototype.setRotationFromQuaternion=function(n){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(n)};Se.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};Se.prototype.multiplyVector3=function(n){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)};Se.prototype.multiplyVector4=function(n){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)};Se.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};Se.prototype.rotateAxis=function(n){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),n.transformDirection(this)};Se.prototype.crossVector=function(n){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)};Se.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};Se.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};Se.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};Se.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};Se.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};Se.prototype.applyToBufferAttribute=function(n){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)};Se.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};Se.prototype.makeFrustum=function(n,e,t,i,r,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(n,e,i,t,r,s)};Se.prototype.getInverse=function(n){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(n).invert()};Nn.prototype.isIntersectionLine=function(n){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(n)};kt.prototype.multiplyVector3=function(n){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),n.applyQuaternion(this)};kt.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};Br.prototype.isIntersectionBox=function(n){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(n)};Br.prototype.isIntersectionPlane=function(n){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(n)};Br.prototype.isIntersectionSphere=function(n){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(n)};ht.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};ht.prototype.barycoordFromPoint=function(n,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(n,e)};ht.prototype.midpoint=function(n){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(n)};ht.prototypenormal=function(n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(n)};ht.prototype.plane=function(n){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(n)};ht.barycoordFromPoint=function(n,e,t,i,r){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),ht.getBarycoord(n,e,t,i,r)};ht.normal=function(n,e,t,i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),ht.getNormal(n,e,t,i)};Fs.prototype.extractAllPoints=function(n){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(n)};Fs.prototype.extrude=function(n){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new zr(this,n)};Fs.prototype.makeGeometry=function(n){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new qc(this,n)};ae.prototype.fromAttribute=function(n,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(n,e,t)};ae.prototype.distanceToManhattan=function(n){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(n)};ae.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};C.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};C.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};C.prototype.getPositionFromMatrix=function(n){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(n)};C.prototype.getScaleFromMatrix=function(n){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(n)};C.prototype.getColumnFromMatrix=function(n,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,n)};C.prototype.applyProjection=function(n){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(n)};C.prototype.fromAttribute=function(n,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(n,e,t)};C.prototype.distanceToManhattan=function(n){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(n)};C.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};et.prototype.fromAttribute=function(n,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(n,e,t)};et.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Ze.prototype.getChildByName=function(n){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(n)};Ze.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};Ze.prototype.translate=function(n,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,n)};Ze.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};Ze.prototype.applyMatrix=function(n){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(n)};Object.defineProperties(Ze.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(n){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=n}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Tt.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(Tt.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),D1},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});lp.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};zt.prototype.setLens=function(n,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(n)};Object.defineProperties(Sn.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(n){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=n}},shadowCameraLeft:{set:function(n){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=n}},shadowCameraRight:{set:function(n){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=n}},shadowCameraTop:{set:function(n){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=n}},shadowCameraBottom:{set:function(n){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=n}},shadowCameraNear:{set:function(n){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=n}},shadowCameraFar:{set:function(n){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=n}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(n){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=n}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(n){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=n}},shadowMapHeight:{set:function(n){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=n}}});Object.defineProperties(pt.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===$o},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage($o)}}});pt.prototype.setDynamic=function(n){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(n===!0?$o:bs),this};pt.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},pt.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};nt.prototype.addIndex=function(n){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(n)};nt.prototype.addAttribute=function(n,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(n,new pt(arguments[1],arguments[2]))):n==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(n,e)};nt.prototype.addDrawCall=function(n,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(n,e)};nt.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};nt.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};nt.prototype.removeAttribute=function(n){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(n)};nt.prototype.applyMatrix=function(n){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(n)};Object.defineProperties(nt.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Ds.prototype.setDynamic=function(n){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(n===!0?$o:bs),this};Ds.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};zr.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};zr.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};zr.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};zc.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(lt.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new Me}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(n){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Od}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(n){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=n}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(hn.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(n){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=n}}});Ke.prototype.clearTarget=function(n,e,t,i){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(n),this.clear(e,t,i)};Ke.prototype.animate=function(n){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(n)};Ke.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};Ke.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};Ke.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};Ke.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};Ke.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};Ke.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};Ke.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};Ke.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};Ke.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};Ke.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};Ke.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};Ke.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};Ke.prototype.enableScissorTest=function(n){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(n)};Ke.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};Ke.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};Ke.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};Ke.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};Ke.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};Ke.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};Ke.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};Ke.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};Ke.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};Ke.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(Ke.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(n){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=n}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(n){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=n}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(n){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=n===!0?it:ci}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}},gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});Object.defineProperties(rp.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(qt.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(n){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=n}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(n){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=n}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(n){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=n}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(n){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=n}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(n){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=n}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(n){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=n}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(n){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=n}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(n){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=n}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(n){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=n}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(n){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=n}}});G3.prototype.load=function(n){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new H3().load(n,function(i){e.setBuffer(i)}),this};Pc.prototype.updateCubeMap=function(n,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(n,e)};Pc.prototype.clear=function(n,e,t,i){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(n,e,t,i)};Bi.crossOrigin=void 0;Bi.loadTexture=function(n,e,t,i){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const r=new Pp;r.setCrossOrigin(this.crossOrigin);const s=r.load(n,t,void 0,i);return e&&(s.mapping=e),s};Bi.loadTextureCube=function(n,e,t,i){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const r=new P3;r.setCrossOrigin(this.crossOrigin);const s=r.load(n,t,void 0,i);return e&&(s.mapping=e),s};Bi.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};Bi.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tc}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tc);for(let n=0;n<256;n++)(n<16?"0":"")+n.toString(16);const ob=Math.PI/180;function Mo(n){return n*ob}const ab=60,Hp=n=>{const e=1e3/ab;let t=Number(new Date);return Dd(()=>{const i=Number(new Date),r=i-t;r>e&&(t=i-r%e,n())})},lb=(n,e,t=0)=>{const i=qe(t);let r=1;return{current:i,animate:o=>{i.value+=o*r,i.value>n?r=-1:i.value<e&&(r=1)}}},cb=/^[og]\s*(.+)?/,ub=/^mtllib /,hb=/^usemtl /,fb=/^usemap /,vf=new C,vl=new C,_f=new C,xf=new C,Yt=new C,wo=new Me;function db(){const n={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(r,s){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:r||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(r){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),r&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return r&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},i&&i.name&&typeof i.clone=="function"){const r=i.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){const r=this.vertices,s=this.object.geometry.vertices;s.push(r[e+0],r[e+1],r[e+2]),s.push(r[t+0],r[t+1],r[t+2]),s.push(r[i+0],r[i+1],r[i+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){const r=this.normals,s=this.object.geometry.normals;s.push(r[e+0],r[e+1],r[e+2]),s.push(r[t+0],r[t+1],r[t+2]),s.push(r[i+0],r[i+1],r[i+2])},addFaceNormal:function(e,t,i){const r=this.vertices,s=this.object.geometry.normals;vf.fromArray(r,e),vl.fromArray(r,t),_f.fromArray(r,i),Yt.subVectors(_f,vl),xf.subVectors(vf,vl),Yt.cross(xf),Yt.normalize(),s.push(Yt.x,Yt.y,Yt.z),s.push(Yt.x,Yt.y,Yt.z),s.push(Yt.x,Yt.y,Yt.z)},addColor:function(e,t,i){const r=this.colors,s=this.object.geometry.colors;r[e]!==void 0&&s.push(r[e+0],r[e+1],r[e+2]),r[t]!==void 0&&s.push(r[t+0],r[t+1],r[t+2]),r[i]!==void 0&&s.push(r[i+0],r[i+1],r[i+2])},addUV:function(e,t,i){const r=this.uvs,s=this.object.geometry.uvs;s.push(r[e+0],r[e+1]),s.push(r[t+0],r[t+1]),s.push(r[i+0],r[i+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,r,s,o,a,l,c){const u=this.vertices.length;let h=this.parseVertexIndex(e,u),f=this.parseVertexIndex(t,u),d=this.parseVertexIndex(i,u);if(this.addVertex(h,f,d),this.addColor(h,f,d),a!==void 0&&a!==""){const g=this.normals.length;h=this.parseNormalIndex(a,g),f=this.parseNormalIndex(l,g),d=this.parseNormalIndex(c,g),this.addNormal(h,f,d)}else this.addFaceNormal(h,f,d);if(r!==void 0&&r!==""){const g=this.uvs.length;h=this.parseUVIndex(r,g),f=this.parseUVIndex(s,g),d=this.parseUVIndex(o,g),this.addUV(h,f,d),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let i=0,r=e.length;i<r;i++){const s=this.parseVertexIndex(e[i],t);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const i=this.vertices.length,r=this.uvs.length;for(let s=0,o=e.length;s<o;s++)this.addVertexLine(this.parseVertexIndex(e[s],i));for(let s=0,o=t.length;s<o;s++)this.addUVLine(this.parseUVIndex(t[s],r))}};return n.startObject("",!1),n}class pb extends An{constructor(e){super(e),this.materials=null}load(e,t,i,r){const s=this,o=new Yc(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},i,r)}setMaterials(e){return this.materials=e,this}parse(e){const t=new db;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const i=e.split(`
`);let r="",s="",o=0,a=[];const l=typeof"".trimLeft=="function";for(let h=0,f=i.length;h<f;h++)if(r=i[h],r=l?r.trimLeft():r.trim(),o=r.length,o!==0&&(s=r.charAt(0),s!=="#"))if(s==="v"){const d=r.split(/\s+/);switch(d[0]){case"v":t.vertices.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3])),d.length>=7?(wo.setRGB(parseFloat(d[4]),parseFloat(d[5]),parseFloat(d[6])).convertSRGBToLinear(),t.colors.push(wo.r,wo.g,wo.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3]));break;case"vt":t.uvs.push(parseFloat(d[1]),parseFloat(d[2]));break}}else if(s==="f"){const g=r.slice(1).trim().split(/\s+/),m=[];for(let v=0,b=g.length;v<b;v++){const A=g[v];if(A.length>0){const w=A.split("/");m.push(w)}}const p=m[0];for(let v=1,b=m.length-1;v<b;v++){const A=m[v],w=m[v+1];t.addFace(p[0],A[0],w[0],p[1],A[1],w[1],p[2],A[2],w[2])}}else if(s==="l"){const d=r.substring(1).trim().split(" ");let g=[];const m=[];if(r.indexOf("/")===-1)g=d;else for(let p=0,v=d.length;p<v;p++){const b=d[p].split("/");b[0]!==""&&g.push(b[0]),b[1]!==""&&m.push(b[1])}t.addLineGeometry(g,m)}else if(s==="p"){const g=r.slice(1).trim().split(" ");t.addPointGeometry(g)}else if((a=cb.exec(r))!==null){const d=(" "+a[0].slice(1).trim()).slice(1);t.startObject(d)}else if(hb.test(r))t.object.startMaterial(r.substring(7).trim(),t.materialLibraries);else if(ub.test(r))t.materialLibraries.push(r.substring(7).trim());else if(fb.test(r))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(s==="s"){if(a=r.split(" "),a.length>1){const g=a[1].trim().toLowerCase();t.object.smooth=g!=="0"&&g!=="off"}else t.object.smooth=!0;const d=t.object.currentMaterial();d&&(d.smooth=t.object.smooth)}else{if(r==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+r+'"')}t.finalize();const c=new Ei;if(c.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let h=0,f=t.objects.length;h<f;h++){const d=t.objects[h],g=d.geometry,m=d.materials,p=g.type==="Line",v=g.type==="Points";let b=!1;if(g.vertices.length===0)continue;const A=new nt;A.setAttribute("position",new st(g.vertices,3)),g.normals.length>0&&A.setAttribute("normal",new st(g.normals,3)),g.colors.length>0&&(b=!0,A.setAttribute("color",new st(g.colors,3))),g.hasUVIndices===!0&&A.setAttribute("uv",new st(g.uvs,2));const w=[];for(let R=0,z=m.length;R<z;R++){const M=m[R],P=M.name+"_"+M.smooth+"_"+b;let D=t.materials[P];if(this.materials!==null){if(D=this.materials.create(M.name),p&&D&&!(D instanceof Un)){const B=new Un;lt.prototype.copy.call(B,D),B.color.copy(D.color),D=B}else if(v&&D&&!(D instanceof Ti)){const B=new Ti({size:10,sizeAttenuation:!1});lt.prototype.copy.call(B,D),B.color.copy(D.color),B.map=D.map,D=B}}D===void 0&&(p?D=new Un:v?D=new Ti({size:1,sizeAttenuation:!1}):D=new xa,D.name=M.name,D.flatShading=!M.smooth,D.vertexColors=b,t.materials[P]=D),w.push(D)}let T;if(w.length>1){for(let R=0,z=m.length;R<z;R++){const M=m[R];A.addGroup(M.groupStart,M.groupCount,R)}p?T=new Es(A,w):v?T=new Po(A,w):T=new Tt(A,w)}else p?T=new Es(A,w[0]):v?T=new Po(A,w[0]):T=new Tt(A,w[0]);T.name=d.name,c.add(T)}else if(t.vertices.length>0){const h=new Ti({size:1,sizeAttenuation:!1}),f=new nt;f.setAttribute("position",new st(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(f.setAttribute("color",new st(t.colors,3)),h.vertexColors=!0);const d=new Po(f,h);c.add(d)}return c}}class mb extends An{constructor(e){super(e)}load(e,t,i,r){const s=this,o=this.path===""?Op.extractUrlBase(e):this.path,a=new Yc(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{t(s.parse(l,o))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},i,r)}setMaterialOptions(e){return this.materialOptions=e,this}parse(e,t){const i=e.split(`
`);let r={};const s=/\s+/,o={};for(let l=0;l<i.length;l++){let c=i[l];if(c=c.trim(),c.length===0||c.charAt(0)==="#")continue;const u=c.indexOf(" ");let h=u>=0?c.substring(0,u):c;h=h.toLowerCase();let f=u>=0?c.substring(u+1):"";if(f=f.trim(),h==="newmtl")r={name:f},o[f]=r;else if(h==="ka"||h==="kd"||h==="ks"||h==="ke"){const d=f.split(s,3);r[h]=[parseFloat(d[0]),parseFloat(d[1]),parseFloat(d[2])]}else r[h]=f}const a=new gb(this.resourcePath||t,this.materialOptions);return a.setCrossOrigin(this.crossOrigin),a.setManager(this.manager),a.setMaterials(o),a}}class gb{constructor(e="",t={}){this.baseUrl=e,this.options=t,this.materialsInfo={},this.materials={},this.materialsArray=[],this.nameLookup={},this.crossOrigin="anonymous",this.side=this.options.side!==void 0?this.options.side:Sr,this.wrap=this.options.wrap!==void 0?this.options.wrap:Go}setCrossOrigin(e){return this.crossOrigin=e,this}setManager(e){this.manager=e}setMaterials(e){this.materialsInfo=this.convert(e),this.materials={},this.materialsArray=[],this.nameLookup={}}convert(e){if(!this.options)return e;const t={};for(const i in e){const r=e[i],s={};t[i]=s;for(const o in r){let a=!0,l=r[o];const c=o.toLowerCase();switch(c){case"kd":case"ka":case"ks":this.options&&this.options.normalizeRGB&&(l=[l[0]/255,l[1]/255,l[2]/255]),this.options&&this.options.ignoreZeroRGBs&&l[0]===0&&l[1]===0&&l[2]===0&&(a=!1);break}a&&(s[c]=l)}}return t}preload(){for(const e in this.materialsInfo)this.create(e)}getIndex(e){return this.nameLookup[e]}getAsArray(){let e=0;for(const t in this.materialsInfo)this.materialsArray[e]=this.create(t),this.nameLookup[t]=e,e++;return this.materialsArray}create(e){return this.materials[e]===void 0&&this.createMaterial_(e),this.materials[e]}createMaterial_(e){const t=this,i=this.materialsInfo[e],r={name:e,side:this.side};function s(a,l){return typeof l!="string"||l===""?"":/^https?:\/\//i.test(l)?l:a+l}function o(a,l){if(r[a])return;const c=t.getTextureParams(l,r),u=t.loadTexture(s(t.baseUrl,c.url));u.repeat.copy(c.scale),u.offset.copy(c.offset),u.wrapS=t.wrap,u.wrapT=t.wrap,(a==="map"||a==="emissiveMap")&&(u.encoding=it),r[a]=u}for(const a in i){const l=i[a];let c;if(l!=="")switch(a.toLowerCase()){case"kd":r.color=new Me().fromArray(l).convertSRGBToLinear();break;case"ks":r.specular=new Me().fromArray(l).convertSRGBToLinear();break;case"ke":r.emissive=new Me().fromArray(l).convertSRGBToLinear();break;case"map_kd":o("map",l);break;case"map_ks":o("specularMap",l);break;case"map_ke":o("emissiveMap",l);break;case"norm":o("normalMap",l);break;case"map_bump":case"bump":o("bumpMap",l);break;case"map_d":o("alphaMap",l),r.transparent=!0;break;case"ns":r.shininess=parseFloat(l);break;case"d":c=parseFloat(l),c<1&&(r.opacity=c,r.transparent=!0);break;case"tr":c=parseFloat(l),this.options&&this.options.invertTrProperty&&(c=1-c),c>0&&(r.opacity=1-c,r.transparent=!0);break}}return this.materials[e]=new xa(r),this.materials[e]}getTextureParams(e,t){const i={scale:new ae(1,1),offset:new ae(0,0)},r=e.split(/\s+/);let s;return s=r.indexOf("-bm"),s>=0&&(t.bumpScale=parseFloat(r[s+1]),r.splice(s,2)),s=r.indexOf("-s"),s>=0&&(i.scale.set(parseFloat(r[s+1]),parseFloat(r[s+2])),r.splice(s,4)),s=r.indexOf("-o"),s>=0&&(i.offset.set(parseFloat(r[s+1]),parseFloat(r[s+2])),r.splice(s,4)),i.url=r.join(" ").trim(),i}loadTexture(e,t,i,r,s){const o=this.manager!==void 0?this.manager:Rp;let a=o.getHandler(e);a===null&&(a=new Pp(o)),a.setCrossOrigin&&a.setCrossOrigin(this.crossOrigin);const l=a.load(e,i,r,s);return t!==void 0&&(l.mapping=t),l}}var yf=new pb,eu=new Cp,kp=new mb(eu);kp.manager=eu;var vb=n=>(n.mtl&&n.mtl.forEach(e=>{eu.setURLModifier(i=>e.paths[i]||i);const t=kp.parse(e.raw,"");yf.setMaterials(t)}),yf.parse(n.obj)),Kr=vb({obj:`# Blender v3.2.2 OBJ File: ''
# www.blender.org
mtllib untitled.mtl
o hand
v 8.218717 -3.345645 10.833076
v 7.464277 -3.679203 9.824027
v 2.183093 -2.057862 4.691973
v 3.818455 0.090818 19.085732
v 3.764862 1.223186 18.905001
v 3.863762 0.548653 17.643259
v 4.036685 0.944529 17.995840
v 2.155349 0.809680 19.592787
v 3.409337 1.566478 18.532228
v 3.839606 0.838484 19.705551
v 2.800296 1.455716 19.314932
v 3.391976 0.983047 20.131371
v 2.925532 1.112580 20.104713
v 3.632649 0.296572 19.920731
v 3.151025 0.420964 20.185078
v 2.549510 0.728003 20.080639
v 3.077523 2.085644 17.561768
v 2.316804 1.124269 19.712420
v 3.376006 2.707614 15.648827
v 2.424246 2.558151 15.765030
v 2.086757 1.464212 17.498518
v 2.477299 0.171431 19.663570
v 3.415262 0.238586 17.665699
v 3.195137 -0.172749 19.194138
v 3.493648 1.094109 14.839108
v 2.329299 0.212915 18.874836
v 2.258491 0.842880 17.410358
v 2.818954 0.324943 17.364161
v 2.836201 2.796847 15.557545
v 3.335286 2.769781 14.089275
v 2.572166 2.881950 13.869592
v 3.777458 2.369266 15.683901
v 3.770994 1.572730 13.979179
v 3.867831 2.037666 14.120733
v 2.085031 2.415842 14.771255
v 1.952447 1.628963 14.500470
v 2.468841 0.991599 14.862615
v 2.881576 0.894674 14.876934
v 3.418636 3.271736 11.215922
v 1.655962 2.284296 12.280283
v 2.209934 3.188983 12.101665
v 3.872519 2.158052 11.763302
v 1.608486 1.465094 12.325292
v 1.798553 2.775738 12.082911
v 2.168207 0.859608 12.577177
v 3.622668 1.334403 12.339247
v 2.994653 0.801152 12.821458
v 1.041437 1.985559 18.216267
v -0.388730 1.830572 18.776251
v 0.413042 1.853885 19.698011
v 0.055393 1.931702 19.369102
v 0.909907 1.638772 19.428810
v 1.073489 1.190253 19.357948
v -0.417514 1.259381 19.454000
v 0.513893 1.269736 19.764820
v -0.330369 2.268905 16.858593
v 0.699274 2.256092 18.271194
v 1.274046 2.548867 14.906168
v 0.449287 3.125752 15.328956
v 0.991669 2.956394 14.900968
v 0.495975 3.148261 14.540130
v -0.346084 2.965433 13.411691
v -0.554688 2.439351 14.872293
v -0.033211 3.079518 14.941423
v -0.146930 1.057576 19.524931
v -0.558761 1.568838 17.489494
v -0.047305 0.941351 16.907866
v -0.321340 1.672416 14.647713
v 0.342285 0.818203 16.890844
v -0.224300 0.709255 18.633299
v 0.431758 0.527318 18.064661
v 0.568418 0.712498 19.325281
v 1.240473 1.653627 17.567083
v 1.039625 0.873320 18.880524
v 1.204441 2.014932 12.582644
v 1.352183 2.097357 14.820928
v 0.352152 1.369344 14.387054
v -0.662117 2.809496 12.095959
v 0.479901 3.272346 13.503655
v 0.798815 1.575312 13.506041
v 1.264383 2.850609 13.072906
v -3.016274 2.051717 16.334414
v -2.254380 2.455765 16.864248
v -1.848524 2.452322 16.332396
v -1.927086 2.042909 16.830564
v -2.682887 1.876623 16.830050
v -2.615700 2.431666 16.810217
v -2.317389 2.693770 15.655012
v -1.956089 2.863903 13.891399
v -2.633746 2.754015 13.899547
v -3.020499 2.249976 14.101946
v -2.625599 1.446169 14.710567
v -2.501199 1.374023 15.839117
v -2.949891 1.623054 15.800083
v -1.913375 1.393763 14.780688
v -2.268835 1.463128 16.476929
v -2.044585 1.355574 13.333859
v -2.222269 3.095242 13.346714
v -1.803822 3.012897 13.390622
v -1.488512 2.681923 13.613320
v -2.840560 1.906300 11.734211
v -2.984732 1.793263 14.861775
v -2.169961 1.323019 11.653802
v -2.599811 1.511219 11.630484
v -1.644827 1.810744 16.170736
v -1.467667 1.661182 12.049395
v -1.931874 3.180246 11.833157
v -1.271368 2.764915 11.601274
v -1.102557 3.347612 10.833324
v -2.645613 2.888317 12.097049
v -1.771563 3.525692 10.433091
v -2.427703 3.333611 10.449349
v -2.970933 2.621799 9.056811
v -0.888067 3.012829 11.461295
v -2.897118 2.392302 11.665604
v -2.152847 0.997720 10.766974
v -1.421935 1.381383 11.489843
v -1.239655 2.294531 12.042315
v -0.786300 1.365994 11.467033
v 4.652617 0.446316 17.357779
v 5.220852 0.123639 18.781418
v 6.202790 -0.406214 18.650688
v 5.717340 -0.088862 19.000378
v 6.052921 -0.784977 18.790230
v 4.894156 -0.142124 18.836124
v 5.690413 0.304635 18.082455
v 6.184206 -0.928018 18.132057
v 6.266032 -0.126316 16.539068
v 5.398402 -0.657364 19.044043
v 4.987710 0.951040 16.429205
v 6.140026 -0.007877 17.904417
v 6.079659 0.157708 14.275197
v 6.125806 0.752738 14.652340
v 4.544414 -0.176258 18.073324
v 4.629353 -0.450021 17.453249
v 4.391648 0.622203 14.942842
v 4.595279 0.122553 15.053798
v 4.938141 -0.829225 18.708399
v 5.204566 -1.047145 17.349527
v 5.502690 -1.183878 18.386126
v 5.784549 -1.005967 17.289108
v 5.859762 1.018097 15.007515
v 5.265367 1.266537 15.141055
v 5.257303 1.432613 14.567428
v 4.492770 1.017107 15.213967
v 5.618104 1.220070 13.992205
v 4.449408 1.316913 13.390406
v 5.718212 0.976934 13.037228
v 4.933798 1.407579 13.459169
v 3.884745 0.859495 12.211451
v 3.972378 0.169361 12.127419
v 4.672069 -0.122422 13.590466
v 5.097553 -0.355768 15.420849
v 5.833910 -0.285876 14.726817
v 5.626100 0.093383 11.863802
v 5.342562 -0.352663 14.316971
v 5.032096 1.758849 11.844151
v 4.224729 1.703189 11.689183
v 3.940196 1.242451 11.980657
v 4.704120 -0.350924 11.962195
v 0.279735 3.681869 11.814412
v 1.608830 3.532689 11.290840
v -0.821674 2.032969 11.907763
v -0.413169 1.639846 12.227095
v 0.234274 1.414961 12.319815
v 0.903553 1.569027 12.309090
v 1.522382 2.695055 12.138763
v 1.582175 3.132387 11.904543
v 1.130070 3.752543 10.171070
v 0.606347 3.807317 9.304436
v 1.235564 3.489847 6.880527
v 4.036920 2.631041 10.292180
v 2.919934 3.485832 11.375740
v 3.182742 3.495211 10.112236
v 1.201859 0.758270 11.163721
v 3.409150 0.571279 11.973092
v 5.672881 0.874669 11.141023
v 4.456594 2.284365 10.560699
v 5.082626 2.031211 10.485600
v 5.278518 1.600860 8.823271
v 4.521169 2.190136 6.442635
v 5.185367 -0.369060 8.978848
v 5.649017 0.613640 8.435347
v 5.226915 -0.273037 11.804613
v 9.267575 -3.069979 9.404964
v 9.321495 -2.562456 9.466804
v 9.397985 -3.805598 10.086496
v 9.753546 -3.269136 10.102781
v 9.842338 -2.997100 10.450397
v 9.276229 -3.646386 10.650785
v 9.371159 -2.793026 10.990511
v 9.493819 -2.273641 10.465654
v 9.161646 -2.156656 9.937566
v 7.959759 -2.053679 10.616621
v 8.792765 -2.029794 10.691529
v 8.834878 -2.751573 11.118726
v 8.559645 -4.086524 10.081533
v 7.528181 -3.913282 8.899859
v 7.930849 -3.767867 8.462835
v 8.454969 -2.338711 8.085353
v 8.230518 -3.110656 8.034338
v 8.375778 -1.663756 8.391912
v 7.688475 -1.112842 8.360511
v 7.485920 -1.391517 9.436704
v 6.992373 -2.480568 9.753645
v 6.757000 -1.898006 9.061843
v 8.719264 -3.740065 10.786269
v 8.032039 -1.729268 7.431466
v 8.387138 -1.756354 7.854450
v 8.179714 -2.340005 7.396398
v 7.925729 -1.178947 8.001201
v 7.906744 -3.003896 7.423204
v 7.233732 -0.916746 7.869975
v 6.498883 -1.877558 8.592499
v 5.530034 -1.887810 7.445310
v 6.456475 -2.618548 8.545893
v 6.879853 -3.340842 8.335399
v 6.975334 -3.286074 7.436495
v 7.393443 -0.960509 7.005129
v 7.073077 -1.311820 5.009337
v 6.974019 -3.014181 6.313394
v 6.209466 -0.254131 6.977670
v 5.411975 -2.973602 5.366663
v 5.948384 -2.489390 7.535194
v 5.183784 -1.221193 7.728549
v 4.246264 -1.101437 8.022491
v 5.712793 -1.302899 7.563801
v 5.026208 -0.826139 8.156790
v -1.057953 3.373575 8.892962
v 5.321816 0.864955 4.725278
v 0.281210 3.098352 3.615244
v -2.827312 2.350735 6.560711
v 4.539148 -0.746860 8.864846
v 5.775373 0.392280 6.239113
v 5.780129 0.146544 7.421326
v -1.145423 2.798220 4.111477
v -1.845288 2.354580 3.571108
v 2.849484 3.189440 6.863345
v 3.437080 2.157473 3.116764
v 4.528486 0.933022 2.780399
v 5.977639 -1.148593 3.351958
v 6.335645 -2.249645 4.145227
v 4.375664 -2.402175 2.595642
v 5.083963 -1.551463 2.490150
v 4.217619 -2.787085 3.207026
v 2.276565 -2.414037 3.217447
v 2.648063 -1.794042 1.704748
v 2.978283 -0.868726 7.122564
v 0.148744 -1.095599 3.971162
v 0.930578 -0.870336 4.705354
v 1.011480 -1.567767 3.200668
v 1.425031 -0.345719 5.549098
v 1.937068 -0.053039 6.925788
v 3.735558 -0.664648 8.552199
v 3.683284 -0.492939 10.169400
v 3.116426 0.155995 10.952983
v 0.610469 0.247846 6.424085
v -1.222791 0.563613 8.313443
v -2.461763 0.471180 8.136229
v -3.302829 1.415583 7.548309
v -2.887494 0.132118 6.380419
v -1.460953 -0.350418 6.343174
v -1.392197 -0.977954 4.239765
v -2.424105 -0.415745 4.558660
v -1.499457 -0.240072 1.347602
v -3.061911 1.065400 4.605806
v -2.935798 0.305682 4.603875
v 2.293827 -2.013261 2.138342
v 0.203621 -1.210380 2.857297
v 3.980123 0.122580 0.520048
v -2.119332 1.654146 2.507313
v 1.833209 2.926890 3.232225
v 4.257069 -0.585665 1.720014
v 4.300082 0.363762 1.806440
v 2.110505 2.695869 0.487891
v 1.083252 3.053775 0.890731
v -1.042848 3.131574 1.751070
v -1.883295 1.855293 0.497995
v -2.156947 0.654439 1.905366
v -1.322022 2.732374 0.433994
v -0.467659 -0.546329 0.459124
v 0.494963 -0.922828 1.579144
v 1.920696 -1.164904 0.278061
v 3.640485 -1.375022 1.679326
v 3.134217 -0.239276 0.186639
v 3.536561 1.658365 1.177150
v 5.958911 -0.632472 7.319323
v 4.978884 -2.374406 6.667806
v 3.471940 -1.870895 6.433871
v 6.079021 -2.812790 6.968036
v -0.702759 1.011296 10.448255
v 6.783072 -0.357227 5.479569
v 1.112120 1.216142 12.045899
v -0.555443 0.804602 0.232063
v -1.189045 -0.315857 0.301010
v 2.677395 1.629207 0.163414
v -0.231090 3.049682 0.530439
v 1.116855 2.612406 0.050058
vn -0.2178 -0.9679 0.1256
vn 0.0760 -0.8859 0.4576
vn -0.4686 -0.3861 0.7946
vn 0.1040 0.9366 0.3345
vn 0.6891 0.7239 -0.0335
vn 0.7610 0.6276 -0.1642
vn 0.3415 0.9230 0.1774
vn 0.8651 0.2881 0.4105
vn 0.7568 -0.6501 0.0678
vn 0.9917 0.1186 0.0489
vn 0.7085 0.6833 0.1764
vn 0.7885 -0.5897 -0.1744
vn -0.0775 0.9378 0.3384
vn 0.0646 0.9344 0.3503
vn -0.6553 0.5811 0.4826
vn 0.5103 0.8143 0.2766
vn -0.9840 0.1560 0.0863
vn -0.9472 -0.0333 0.3188
vn 0.3952 0.4631 0.7933
vn 0.5838 -0.5218 0.6220
vn -0.0848 0.6309 0.7712
vn 0.0294 -0.4339 0.9005
vn -0.5271 -0.0601 0.8477
vn 0.3967 0.9034 0.1625
vn 0.8329 0.5443 0.0996
vn 0.9308 -0.3628 -0.0450
vn -0.5660 0.7952 0.2174
vn -0.8338 0.5364 0.1305
vn -0.7399 -0.6693 -0.0675
vn -0.5643 -0.7141 0.4144
vn 0.0254 -0.9939 0.1071
vn 0.2818 -0.9252 -0.2541
vn 0.5069 -0.8485 -0.1521
vn -0.9665 -0.2326 0.1088
vn -0.8599 -0.5004 -0.1005
vn -0.3550 -0.9081 -0.2220
vn -0.5366 -0.8431 -0.0357
vn 0.5329 0.8435 0.0674
vn -0.1549 0.9762 0.1517
vn -0.2448 0.9539 0.1738
vn 0.9826 0.1838 -0.0259
vn -0.8018 0.2004 0.5631
vn -0.7565 -0.1028 0.6459
vn 0.0345 -0.9942 -0.1021
vn 0.8619 -0.3924 0.3211
vn 0.2042 0.9635 0.1728
vn -0.3163 0.8602 0.4001
vn -0.4148 -0.8693 0.2688
vn 0.2663 -0.9532 0.1430
vn -0.1322 -0.7293 0.6712
vn 0.9969 0.0383 0.0688
vn 0.8449 -0.1868 0.5013
vn 0.7746 -0.6224 0.1122
vn 0.8168 0.5421 0.1974
vn 0.0575 0.6116 0.7891
vn 0.7241 0.4347 0.5354
vn 0.3506 0.8983 0.2650
vn 0.1724 -0.8552 0.4887
vn 0.1656 -0.2002 0.9657
vn 0.9227 0.3759 0.0859
vn 0.0634 0.9748 0.2137
vn -0.7430 0.6481 0.1674
vn -0.4116 0.7876 0.4586
vn 0.6103 0.7828 0.1218
vn 0.1238 0.9891 0.0792
vn -0.6197 0.7762 0.1162
vn -0.4832 0.8619 0.1539
vn 0.0847 0.9841 0.1562
vn 0.8950 0.4077 0.1809
vn -0.9747 0.2130 0.0671
vn -0.8510 0.4699 0.2345
vn 0.9939 -0.1104 -0.0043
vn -0.9941 -0.1059 -0.0240
vn -0.6177 -0.7821 0.0826
vn -0.8105 -0.0947 0.5781
vn -0.7761 -0.6264 -0.0722
vn 0.1228 -0.9881 -0.0922
vn -0.4031 -0.5624 0.7220
vn -0.2068 -0.9528 -0.2223
vn -0.5877 -0.7921 -0.1649
vn 0.4685 -0.8798 -0.0808
vn 0.9028 -0.3891 0.1834
vn -0.1701 -0.9754 -0.1403
vn -0.5934 -0.7519 0.2872
vn -0.1820 0.9635 0.1961
vn -0.5894 -0.3092 0.7463
vn -0.1196 -0.9626 0.2431
vn -0.5517 0.8254 0.1200
vn -0.9581 0.0868 0.2730
vn -0.4725 0.5971 0.6483
vn 0.1663 0.6212 0.7658
vn -0.0655 0.9887 0.1345
vn 0.6933 0.6651 0.2773
vn 0.6003 -0.1149 0.7915
vn 0.1880 0.9513 0.2443
vn -0.9677 0.2520 0.0004
vn 0.8568 0.0052 0.5156
vn 0.8315 0.5276 0.1739
vn 0.8986 -0.3466 0.2689
vn -0.7918 -0.6012 0.1081
vn -0.9116 -0.4086 -0.0450
vn -0.4174 -0.9079 -0.0377
vn -0.1983 0.9623 0.1863
vn 0.0898 0.9766 0.1957
vn -0.6885 0.7241 0.0413
vn -0.9830 0.1798 0.0368
vn -0.9411 -0.3379 0.0150
vn 0.3260 0.7611 0.5608
vn 0.1821 -0.9833 -0.0020
vn -0.0822 -0.9741 0.2106
vn -0.7130 -0.7004 -0.0313
vn 0.3860 -0.9217 0.0393
vn 0.7402 -0.6514 0.1667
vn -0.5417 0.8404 0.0184
vn -0.0672 0.9974 0.0251
vn -0.0562 0.9668 0.2493
vn -0.8653 0.4996 -0.0407
vn -0.1790 0.9803 -0.0835
vn -0.7642 0.6271 -0.1508
vn -0.4607 0.6752 0.5760
vn -0.9998 -0.0151 0.0097
vn -0.2615 -0.9230 0.2824
vn 0.1680 -0.8455 0.5069
vn -0.2040 -0.8374 0.5071
vn 0.9963 -0.0762 -0.0402
vn 0.8831 0.1985 0.4250
vn 0.7847 -0.6186 0.0403
vn 0.5886 -0.4891 0.6436
vn 0.3304 0.4904 0.8065
vn -0.0958 -0.3505 0.9317
vn 0.8153 0.5513 0.1773
vn 0.6699 0.7376 0.0850
vn 0.3322 0.8958 0.2952
vn -0.6461 0.2821 0.7092
vn -0.9716 0.0315 0.2345
vn -0.6453 -0.5948 0.4794
vn -0.8291 -0.5590 0.0094
vn -0.3989 -0.8942 -0.2033
vn -0.3698 -0.9161 -0.1547
vn -0.0371 -0.9720 0.2321
vn 0.3982 -0.8873 -0.2326
vn 0.5033 -0.8538 -0.1330
vn 0.9510 -0.2652 -0.1589
vn -0.0442 -0.9987 -0.0246
vn -0.1651 0.9420 0.2924
vn 0.0894 0.9634 0.2525
vn -0.7247 0.6625 0.1895
vn 0.1142 0.9865 0.1173
vn 0.9229 0.3799 -0.0621
vn 0.5625 0.8230 -0.0793
vn 0.1128 0.9918 0.0597
vn -0.5360 0.8263 0.1730
vn -0.9879 -0.0756 0.1356
vn -0.8327 0.2103 0.5123
vn -0.6789 -0.6304 0.3765
vn 0.1402 0.8132 0.5649
vn 0.2854 0.9257 0.2483
vn 0.8024 0.5965 -0.0187
vn -0.1590 0.4143 0.8961
vn 0.9873 0.1411 -0.0736
vn 0.8702 -0.4764 -0.1256
vn 0.4387 -0.8986 -0.0064
vn -0.1893 -0.9728 0.1334
vn -0.5058 -0.8572 0.0971
vn 0.3017 -0.7464 0.5932
vn -0.1783 -0.6851 0.7063
vn 0.6220 0.1410 0.7703
vn 0.3440 0.6612 0.6667
vn -0.4339 0.5281 0.7300
vn 0.1126 0.9571 0.2668
vn 0.0932 0.9952 0.0289
vn -0.0297 0.9985 -0.0464
vn 0.1032 0.9876 -0.1179
vn 0.6594 0.7413 0.1251
vn 0.4488 0.8922 -0.0508
vn 0.6441 0.7591 0.0947
vn 0.8836 0.3816 0.2713
vn -0.2612 -0.9329 0.2479
vn -0.3861 -0.8788 0.2803
vn 0.6795 0.7312 0.0607
vn 0.8526 0.5194 -0.0567
vn 0.6378 0.7607 -0.1205
vn 0.7659 -0.6372 0.0860
vn 0.9978 -0.0048 0.0664
vn -0.3593 -0.9129 0.1935
vn 0.7238 0.6562 0.2134
vn 0.7593 0.5752 -0.3042
vn 0.7367 -0.2700 -0.6200
vn 0.9279 -0.2952 -0.2277
vn 0.6391 -0.7631 -0.0963
vn 0.9765 -0.0106 0.2151
vn 0.4897 -0.6385 0.5938
vn 0.5072 0.0958 0.8565
vn 0.8081 0.5726 -0.1382
vn -0.4199 0.4913 0.7631
vn 0.1906 0.7754 0.6020
vn -0.2938 0.8515 0.4344
vn -0.0220 0.1024 0.9945
vn -0.0366 -0.6839 0.7287
vn -0.0077 -0.9886 0.1501
vn 0.2769 -0.8499 -0.4484
vn 0.9114 -0.0272 -0.4107
vn 0.8767 -0.1126 -0.4678
vn 0.7553 -0.4349 -0.4903
vn 0.6151 0.7860 -0.0622
vn -0.8189 0.0363 0.5728
vn -0.4867 -0.3229 0.8117
vn -0.6642 -0.6244 0.4110
vn -0.3473 -0.9344 -0.0792
vn -0.1979 -0.9609 -0.1938
vn 0.8871 0.3397 -0.3124
vn 0.8195 0.3974 -0.4129
vn 0.6183 -0.6039 -0.5030
vn -0.7352 0.3482 0.5815
vn 0.1955 0.3947 0.8977
vn -0.8576 -0.2999 0.4179
vn -0.5967 -0.3358 0.7288
vn -0.2291 0.1934 0.9540
vn -0.7821 0.4061 0.4727
vn -0.7216 -0.6903 0.0523
vn -0.6814 -0.6400 0.3552
vn 0.8828 0.1284 -0.4519
vn 0.5797 0.7189 0.3835
vn 0.6638 -0.5220 -0.5356
vn 0.7929 0.0946 -0.6019
vn -0.1690 -0.9827 0.0757
vn 0.3248 -0.8878 -0.3261
vn -0.5111 -0.7982 0.3189
vn 0.0534 -0.9552 -0.2911
vn -0.3813 -0.8014 0.4609
vn 0.2948 -0.4484 0.8438
vn 0.5977 -0.6536 0.4643
vn -0.1627 -0.8400 0.5177
vn -0.3563 0.9332 -0.0477
vn 0.3591 0.9263 -0.1139
vn 0.7088 0.6806 -0.1854
vn 0.7807 0.6233 0.0446
vn -0.0417 0.9984 -0.0377
vn -0.9666 0.1499 -0.2077
vn 0.5765 0.8010 -0.1612
vn 0.2657 0.9605 -0.0831
vn 0.7681 0.5508 -0.3267
vn 0.5994 -0.2797 -0.7500
vn -0.2819 -0.8585 -0.4284
vn 0.0053 -0.8372 -0.5469
vn 0.2920 -0.7086 -0.6423
vn 0.4076 -0.5583 -0.7226
vn -0.3834 -0.9195 -0.0865
vn -0.4602 -0.8848 0.0736
vn -0.3198 -0.9414 -0.1070
vn -0.1108 -0.9630 0.2457
vn -0.5094 -0.7885 0.3446
vn -0.2629 -0.8315 0.4894
vn -0.3915 -0.7616 0.5165
vn -0.4463 -0.8530 0.2707
vn -0.0320 -0.9290 0.3686
vn -0.5788 -0.6698 0.4652
vn -0.0588 -0.9335 0.3538
vn -0.3426 -0.9100 0.2336
vn 0.1451 -0.9605 0.2375
vn -0.0667 -0.9673 0.2447
vn 0.0614 -0.9608 0.2704
vn -0.0517 -0.9664 0.2517
vn -0.2914 -0.9552 0.0520
vn -0.6499 -0.7576 -0.0603
vn -0.9146 -0.3718 -0.1594
vn -0.7344 -0.5438 -0.4061
vn -0.2679 -0.9339 -0.2367
vn 0.7329 -0.0632 -0.6774
vn 0.7386 -0.2190 -0.6376
vn -0.9157 0.3592 -0.1803
vn -0.9030 -0.1905 -0.3851
vn 0.7457 0.5713 -0.3428
vn 0.1456 0.9683 -0.2028
vn -0.3764 0.9256 -0.0403
vn -0.6730 0.7307 -0.1144
vn -0.2928 -0.0701 -0.9536
vn -0.7681 0.0586 -0.6376
vn -0.6255 -0.3723 -0.6856
vn -0.4546 0.5795 -0.6764
vn -0.0933 0.7872 -0.6096
vn -0.7104 -0.6902 0.1376
vn -0.2074 -0.7127 -0.6701
vn 0.9373 0.1014 0.3333
vn 0.0409 0.4685 -0.8825
vn 0.4073 0.2693 -0.8727
vn 0.3032 -0.2968 -0.9055
vn -0.0193 -0.6682 -0.7437
vn -0.7950 0.5714 0.2036
vn 0.4259 0.8814 0.2043
vn -0.6690 0.6816 0.2964
vn -0.1779 0.7951 0.5798
vn -0.8635 -0.5021 -0.0472
vn 0.3281 0.8483 0.4157
vn 0.8602 0.2851 -0.4227
vn -0.4439 -0.7688 0.4602
vn 0.8570 0.2492 -0.4510
vn 0.4275 0.7670 -0.4785
usemtl hand_mtl
s 1
f 93//1 96//2 86//3
f 213//4 219//5 292//6
f 203//7 219//5 213//4
f 10//8 4//9 7//10
f 10//8 7//10 5//11
f 6//12 7//10 4//9
f 11//13 17//14 18//15
f 11//13 9//16 17//14
f 21//17 8//18 18//15
f 12//19 5//11 9//16
f 12//19 10//8 5//11
f 9//16 11//13 12//19
f 4//9 10//8 14//20
f 12//19 13//21 15//22
f 14//20 12//19 15//22
f 15//22 13//21 16//23
f 19//24 17//14 9//16
f 7//10 32//25 9//16
f 6//12 33//26 7//10
f 21//17 20//27 35//28
f 21//17 26//29 8//18
f 22//30 15//22 16//23
f 4//9 14//20 24//31
f 23//32 4//9 24//31
f 23//32 6//12 4//9
f 33//26 6//12 25//33
f 36//34 27//35 21//17
f 23//32 24//31 28//36
f 28//36 26//29 27//35
f 27//35 37//37 28//36
f 30//38 29//39 19//24
f 31//40 29//39 30//38
f 32//25 30//38 19//24
f 30//38 32//25 34//41
f 31//40 35//28 29//39
f 36//34 40//42 43//43
f 36//34 35//28 40//42
f 37//37 36//34 43//43
f 38//44 28//36 37//37
f 46//45 33//26 25//33
f 31//40 173//46 41//47
f 43//43 45//48 37//37
f 47//49 176//50 46//45
f 73//51 53//52 74//53
f 73//51 48//54 53//52
f 50//55 52//56 57//57
f 48//54 52//56 53//52
f 72//58 53//52 55//59
f 53//52 52//56 55//59
f 73//51 58//60 48//54
f 59//61 56//62 51//63
f 59//61 60//64 61//65
f 62//66 64//67 79//68
f 81//69 79//68 60//64
f 56//62 59//61 64//67
f 79//68 61//65 60//64
f 62//66 63//70 64//67
f 78//71 63//70 62//66
f 58//60 76//72 81//69
f 66//73 70//74 54//75
f 66//73 63//70 68//76
f 70//74 71//77 72//58
f 72//58 65//78 70//74
f 65//78 54//75 70//74
f 74//53 72//58 71//77
f 69//79 71//77 67//80
f 74//53 71//77 80//81
f 69//79 80//81 71//77
f 80//81 75//82 74//53
f 68//76 77//83 67//80
f 164//84 77//83 68//76
f 161//85 62//66 79//68
f 63//70 78//71 163//86
f 164//84 63//70 163//86
f 80//81 77//83 165//87
f 90//88 82//89 87//90
f 87//90 83//91 88//92
f 88//92 83//91 84//93
f 85//94 84//93 83//91
f 82//89 86//3 87//90
f 88//92 84//93 89//95
f 82//89 90//88 91//96
f 118//97 100//98 105//99
f 84//93 105//99 100//98
f 86//3 82//89 94//100
f 102//101 94//100 82//89
f 102//101 82//89 91//96
f 94//100 92//102 93//1
f 98//103 107//104 110//105
f 115//106 101//107 91//96
f 100//98 118//97 108//108
f 102//101 91//96 101//107
f 97//109 92//102 103//110
f 92//102 102//101 104//111
f 105//99 95//112 106//113
f 107//104 112//114 110//105
f 112//114 107//104 111//115
f 109//116 111//115 107//104
f 109//116 107//104 108//108
f 113//117 110//105 112//114
f 112//114 111//115 229//118
f 232//119 113//117 112//114
f 229//118 109//116 161//85
f 78//71 114//120 163//86
f 260//121 101//107 115//106
f 104//111 116//122 103//110
f 101//107 116//122 104//111
f 117//123 118//97 106//113
f 119//124 163//86 117//123
f 128//125 122//126 127//127
f 127//127 122//126 124//128
f 124//128 123//129 129//130
f 131//131 142//132 126//133
f 125//134 134//135 138//136
f 137//137 153//138 139//139
f 140//140 129//130 138//136
f 124//128 140//140 127//127
f 141//141 127//127 140//140
f 139//139 140//140 138//136
f 141//141 139//139 154//142
f 128//125 141//141 132//143
f 156//144 154//142 153//138
f 130//145 143//146 145//147
f 144//148 133//149 146//150
f 142//132 133//149 144//148
f 149//151 144//148 146//150
f 144//148 149//151 147//152
f 147//152 145//147 144//148
f 136//153 145//147 150//154
f 136//153 150//154 151//155
f 137//137 136//153 151//155
f 158//156 149//151 157//157
f 149//151 148//158 157//157
f 158//156 159//159 147//152
f 147//152 159//159 150//154
f 177//160 132//143 155//161
f 184//162 156//144 160//163
f 160//163 152//164 151//155
f 161//85 114//120 78//71
f 165//87 166//165 80//81
f 166//165 75//82 80//81
f 166//165 293//166 75//82
f 167//167 81//69 75//82
f 168//168 44//169 41//47
f 40//42 44//169 167//167
f 119//124 165//87 164//84
f 162//170 173//46 169//171
f 161//85 162//170 169//171
f 170//172 161//85 169//171
f 169//171 171//173 170//172
f 173//46 39//174 174//175
f 39//174 172//176 174//175
f 158//156 42//177 159//159
f 45//48 293//166 175//178
f 176//50 47//49 45//48
f 46//45 176//50 159//159
f 256//179 151//155 176//50
f 177//160 179//180 148//158
f 179//180 177//160 180//181
f 180//181 181//182 179//180
f 172//176 179//180 181//182
f 177//160 182//183 183//184
f 182//183 177//160 155//161
f 180//181 177//160 183//184
f 160//163 151//155 255//185
f 192//186 193//187 203//7
f 185//188 188//189 187//190
f 188//189 189//191 190//192
f 189//191 192//186 191//193
f 203//7 193//187 202//194
f 194//195 195//196 204//197
f 203//7 204//197 195//196
f 196//198 191//193 195//196
f 207//199 190//192 191//193
f 207//199 197//200 190//192
f 197//200 187//190 190//192
f 199//201 187//190 197//200
f 200//202 185//188 187//190
f 210//203 200//202 201//204
f 211//205 203//7 202//194
f 194//195 205//206 1//207
f 207//199 2//208 197//200
f 198//209 197//200 2//208
f 218//210 199//201 198//209
f 209//211 211//205 202//194
f 208//212 211//205 209//211
f 211//205 208//212 219//5
f 212//213 199//201 218//210
f 204//197 213//4 214//214
f 213//4 287//215 214//214
f 216//216 214//214 215//217
f 215//217 214//214 227//218
f 216//216 205//206 206//219
f 206//219 205//206 194//195
f 205//206 2//208 1//207
f 2//208 217//220 198//209
f 224//221 216//216 215//217
f 210//203 212//213 220//222
f 210//203 220//222 208//212
f 287//215 213//4 222//223
f 242//224 220//222 212//213
f 241//225 220//222 242//224
f 223//226 221//227 218//210
f 223//226 218//210 290//228
f 221//227 223//226 245//229
f 288//230 224//221 215//217
f 225//231 228//232 226//233
f 288//230 215//217 225//231
f 236//234 232//119 112//114
f 238//235 171//173 174//175
f 230//236 180//181 234//237
f 170//172 171//173 231//238
f 231//238 229//118 170//172
f 229//118 231//238 236//234
f 229//118 236//234 112//114
f 234//237 180//181 183//184
f 113//117 232//119 266//239
f 238//235 239//240 272//241
f 181//182 230//236 239//240
f 272//241 231//238 171//173
f 292//6 240//242 230//236
f 242//224 244//243 241//225
f 245//229 268//244 247//245
f 243//246 247//245 284//247
f 268//244 245//229 246//248
f 251//249 268//244 246//248
f 269//250 251//249 249//251
f 246//248 3//252 251//249
f 251//249 3//252 250//253
f 252//254 253//255 257//256
f 248//257 253//255 252//254
f 252//254 250//253 3//252
f 257//256 262//258 250//253
f 45//48 175//178 256//179
f 254//259 233//260 255//185
f 233//260 184//162 160//163
f 256//179 253//255 255//185
f 226//233 233//260 254//259
f 257//256 291//261 258//262
f 175//178 291//261 257//256
f 259//263 262//258 258//262
f 260//121 113//117 266//239
f 233//260 226//233 228//232
f 249//251 262//258 263//264
f 264//265 267//266 265//267
f 268//244 282//268 247//245
f 268//244 269//250 282//268
f 251//249 269//250 268//244
f 270//269 273//270 284//247
f 271//271 279//272 266//239
f 239//240 240//242 286//273
f 231//238 272//241 276//274
f 236//234 277//275 237//276
f 231//238 277//275 236//234
f 267//266 279//272 265//267
f 294//277 279//272 278//278
f 278//278 271//271 237//276
f 295//279 265//267 294//277
f 280//280 277//275 297//281
f 227//218 225//231 215//217
f 261//282 260//121 267//266
f 281//283 263//264 265//267
f 245//229 242//224 221//227
f 240//242 292//6 220//222
f 235//284 222//223 234//237
f 234//237 222//223 292//6
f 175//178 293//166 165//87
f 278//278 237//276 280//280
f 276//274 298//285 297//281
f 294//277 296//286 285//287
f 280//280 294//277 278//278
f 294//277 281//283 295//279
f 281//283 294//277 283//288
f 294//277 285//287 283//288
f 294//277 298//285 296//286
f 297//281 294//277 280//280
f 94//100 93//1 86//3
f 7//10 9//16 5//11
f 11//13 18//15 13//21
f 13//21 12//19 11//13
f 14//20 10//8 12//19
f 16//23 13//21 18//15
f 8//18 16//23 18//15
f 19//24 29//39 17//14
f 18//15 20//27 21//17
f 26//29 28//36 24//31
f 9//16 32//25 19//24
f 7//10 33//26 34//41
f 36//34 21//17 35//28
f 22//30 8//18 26//29
f 16//23 8//18 22//30
f 24//31 14//20 15//22
f 24//31 15//22 22//30
f 25//33 6//12 23//32
f 24//31 22//30 26//29
f 21//17 27//35 26//29
f 29//39 35//28 20//27
f 31//40 44//169 35//28
f 32//25 7//10 34//41
f 37//37 27//35 36//34
f 38//44 23//32 28//36
f 47//49 46//45 25//33
f 25//33 38//44 47//49
f 173//46 31//40 30//38
f 44//169 31//40 41//47
f 44//169 40//42 35//28
f 42//177 34//41 33//26
f 45//48 47//49 38//44
f 37//37 45//48 38//44
f 46//45 42//177 33//26
f 51//63 50//55 57//57
f 56//62 49//289 51//63
f 48//54 57//57 52//56
f 66//73 49//289 56//62
f 49//289 54//75 51//63
f 54//75 55//59 50//55
f 54//75 50//55 51//63
f 52//56 50//55 55//59
f 55//59 54//75 65//78
f 56//62 63//70 66//73
f 48//54 58//60 60//64
f 60//64 59//61 48//54
f 48//54 59//61 57//57
f 58//60 73//51 76//72
f 64//67 59//61 61//65
f 61//65 79//68 64//67
f 56//62 64//67 63//70
f 60//64 58//60 81//69
f 49//289 66//73 54//75
f 66//73 67//80 70//74
f 67//80 66//73 68//76
f 63//70 164//84 68//76
f 67//80 71//77 70//74
f 65//78 72//58 55//59
f 74//53 53//52 72//58
f 74//53 75//82 76//72
f 74//53 76//72 73//51
f 69//79 67//80 77//83
f 69//79 77//83 80//81
f 164//84 165//87 77//83
f 79//68 81//69 168//168
f 81//69 76//72 75//82
f 90//88 87//90 88//92
f 105//99 84//93 85//94
f 85//94 83//91 86//3
f 86//3 83//91 87//90
f 89//95 84//93 100//98
f 89//95 90//88 88//92
f 95//112 93//1 92//102
f 102//101 92//102 94//100
f 96//2 85//94 86//3
f 96//2 105//99 85//94
f 96//2 95//112 105//99
f 95//112 96//2 93//1
f 95//112 92//102 97//109
f 99//290 89//95 100//98
f 90//88 89//95 98//103
f 99//290 98//103 89//95
f 90//88 98//103 110//105
f 107//104 98//103 99//290
f 91//96 110//105 115//106
f 110//105 91//96 90//88
f 99//290 100//98 108//108
f 101//107 104//111 102//101
f 103//110 92//102 104//111
f 118//97 105//99 106//113
f 126//133 130//145 120//291
f 111//115 109//116 229//118
f 113//117 260//121 115//106
f 113//117 115//106 110//105
f 114//120 161//85 109//116
f 114//120 109//116 108//108
f 114//120 108//108 118//97
f 103//110 116//122 117//123
f 117//123 163//86 118//97
f 118//97 163//86 114//120
f 97//109 103//110 106//113
f 119//124 164//84 163//86
f 131//131 123//129 122//126
f 126//133 123//129 131//131
f 126//133 121//292 123//129
f 121//292 125//134 123//129
f 128//125 131//131 122//126
f 124//128 122//126 123//129
f 125//134 129//130 123//129
f 126//133 120//291 121//292
f 129//130 125//134 138//136
f 125//134 121//292 120//291
f 143//146 130//145 126//133
f 130//145 145//147 120//291
f 126//133 142//132 143//146
f 125//134 120//291 134//135
f 134//135 136//153 135//293
f 141//141 128//125 127//127
f 135//293 137//137 139//139
f 135//293 136//153 137//137
f 138//136 134//135 135//293
f 138//136 135//293 139//139
f 140//140 124//128 129//130
f 139//139 141//141 140//140
f 153//138 154//142 139//139
f 141//141 154//142 132//143
f 143//146 142//132 144//148
f 145//147 143//146 144//148
f 146//150 133//149 148//158
f 149//151 146//150 148//158
f 148//158 133//149 132//143
f 132//143 177//160 148//158
f 147//152 150//154 145//147
f 137//137 151//155 152//164
f 153//138 137//137 152//164
f 156//144 184//162 154//142
f 154//142 184//162 155//161
f 155//161 132//143 154//142
f 158//156 147//152 149//151
f 178//294 158//156 157//157
f 160//163 156//144 152//164
f 79//68 162//170 161//85
f 161//85 78//71 62//66
f 168//168 162//170 79//68
f 167//167 168//168 81//69
f 168//168 167//167 44//169
f 293//166 167//167 75//82
f 293//166 166//165 165//87
f 119//124 291//261 165//87
f 168//168 41//47 162//170
f 229//118 161//85 170//172
f 173//46 174//175 169//171
f 171//173 169//171 174//175
f 173//46 162//170 41//47
f 39//174 42//177 172//176
f 174//175 172//176 238//235
f 218//210 221//227 212//213
f 159//159 42//177 46//45
f 45//48 43//43 293//166
f 176//50 150//154 159//159
f 176//50 151//155 150//154
f 256//179 176//50 45//48
f 148//158 179//180 157//157
f 178//294 157//157 179//180
f 158//156 178//294 172//176
f 172//176 178//294 179//180
f 184//162 182//183 155//161
f 186//295 193//187 192//186
f 190//192 187//190 188//189
f 190//192 189//191 191//193
f 189//191 186//295 192//186
f 191//193 192//186 195//196
f 203//7 195//196 192//186
f 188//189 185//188 186//295
f 189//191 188//189 186//295
f 202//194 193//187 186//295
f 194//195 196//198 195//196
f 199//201 201//204 187//190
f 200//202 202//194 186//295
f 185//188 200//202 186//295
f 201//204 200//202 187//190
f 203//7 213//4 204//197
f 209//211 202//194 200//202
f 209//211 200//202 210//203
f 196//198 194//195 1//207
f 191//193 196//198 207//199
f 1//207 207//199 196//198
f 204//197 206//219 194//195
f 207//199 1//207 2//208
f 198//209 199//201 197//200
f 218//210 198//209 217//220
f 210//203 208//212 209//211
f 210//203 201//204 212//213
f 203//7 211//205 219//5
f 199//201 212//213 201//204
f 206//219 204//197 214//214
f 214//214 287//215 227//218
f 216//216 206//219 214//214
f 216//216 2//208 205//206
f 217//220 2//208 216//216
f 290//228 218//210 224//221
f 224//221 217//220 216//216
f 218//210 217//220 224//221
f 292//6 219//5 208//212
f 220//222 292//6 208//212
f 221//227 242//224 212//213
f 288//230 290//228 224//221
f 288//230 225//231 226//233
f 228//232 225//231 235//284
f 235//284 225//231 287//215
f 287//215 222//223 235//284
f 181//182 238//235 172//176
f 180//181 230//236 181//182
f 232//119 236//234 237//276
f 233//260 182//183 184//162
f 228//232 235//284 183//184
f 228//232 183//184 182//183
f 234//237 292//6 230//236
f 235//284 234//237 183//184
f 271//271 266//239 232//119
f 238//235 181//182 239//240
f 255//185 233//260 160//163
f 260//121 261//282 101//107
f 245//229 243//246 242//224
f 242//224 243//246 244//243
f 243//246 284//247 244//243
f 223//226 246//248 245//229
f 247//245 243//246 245//229
f 223//226 3//252 246//248
f 251//249 250//253 249//251
f 248//257 254//259 253//255
f 175//178 257//256 253//255
f 248//257 252//254 3//252
f 249//251 250//253 262//258
f 252//254 257//256 250//253
f 226//233 254//259 248//257
f 255//185 253//255 254//259
f 248//257 289//296 226//233
f 289//296 288//230 226//233
f 151//155 256//179 255//185
f 291//261 175//178 165//87
f 175//178 253//255 256//179
f 291//261 116//122 258//262
f 259//263 261//282 262//258
f 116//122 261//282 259//263
f 261//282 116//122 101//107
f 262//258 257//256 258//262
f 263//264 262//258 261//282
f 261//282 264//265 263//264
f 264//265 261//282 267//266
f 34//41 42//177 39//174 30//38
f 284//247 273//270 244//243
f 269//250 249//251 263//264
f 263//264 264//265 265//267
f 267//266 266//239 279//272
f 271//271 232//119 237//276
f 240//242 241//225 274//297
f 239//240 275//298 272//241
f 275//298 239//240 286//273
f 275//298 276//274 272//241
f 231//238 297//281 277//275
f 278//278 279//272 271//271
f 280//280 237//276 277//275
f 294//277 265//267 279//272
f 295//279 281//283 265//267
f 283//288 284//247 247//245
f 274//297 273//270 270//269
f 274//297 286//273 240//242
f 296//286 275//298 286//273
f 231//238 276//274 297//281
f 267//266 260//121 266//239
f 281//283 282//268 269//250
f 269//250 263//264 281//283
f 25//33 23//32 38//44
f 106//113 95//112 97//109
f 233//260 228//232 182//183
f 225//231 227//218 287//215
f 289//296 248//257 3//252
f 290//228 288//230 223//226
f 116//122 291//261 117//123
f 117//123 291//261 119//124
f 241//225 240//242 220//222
f 292//6 222//223 213//4
f 103//110 117//123 106//113
f 276//274 275//298 298//285
f 285//287 296//286 270//269
f 296//286 298//285 275//298
f 297//281 298//285 294//277
f 39//174 173//46 30//38
f 17//14 29//39 20//27 18//15
f 51//63 57//57 59//61
f 108//108 107//104 99//290
f 128//125 133//149 142//132 131//131
f 136//153 134//135 120//291 145//147
f 128//125 132//143 133//149
f 293//166 43//43 40//42 167//167
f 274//297 241//225 244//243 273//270
f 158//156 172//176 42//177
f 272//241 171//173 238//235
f 240//242 239//240 230//236
f 258//262 116//122 259//263
f 283//288 247//245 282//268 281//283
f 284//247 283//288 285//287 270//269
f 270//269 296//286 286//273 274//297
f 289//296 3//252 223//226 288//230
f 153//138 152//164 156//144
`,mtl:[]});var zi=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t};const _b=En({setup(n){const e=qe(),{current:t,animate:i}=lb(15,-15);return di(()=>{const r=new zc,s=new fa,o=new Ke({canvas:e.value,alpha:!0}),a=new Fp(16777215,1);a.position.set(10,10,10),r.add(a),o.setSize(e.value.clientWidth,e.value.clientHeight);const l=()=>{const f=new Uint8Array(4);for(let g=0;g<=f.length;g++)f[g]=g/f.length*256;const d=new Hc(f,f.length,1,o.capabilities.isWebGL2?Vd:kd);return d.needsUpdate=!0,d},c=new Ei;Kr.scale.set(.07,.07,.07),Kr.rotation.set(0,Mo(90),Mo(90)),Kr.rotateY(Mo(90));const u=Kr.children[0].material=new Xc({color:16777215,side:li,gradientMap:l()});u.side=li,c.add(Kr),r.add(c),r.position.y=-.5;const h=Hg();u.opacity=1,Hp(()=>{u.color=h.value,o.render(r,s),c.rotation.z=Mo(t.value),u.needsUpdate=!0,i(.5)})}),(r,s)=>(At(),cn("canvas",{class:"hand-shake",ref_key:"canvas",ref:e},null,512))}});var xb=zi(_b,[["__scopeId","data-v-3b4baea5"]]);const yb={},bb={class:"m-heading"};function Mb(n,e){return At(),cn("h1",bb,[Li(n.$slots,"default",{},void 0,!0)])}var wb=zi(yb,[["render",Mb],["__scopeId","data-v-158ac30e"]]);const _l=(n,e,t)=>{const i=n.createProgram();if(!i)throw new Error("Can not create program");return n.attachShader(i,e),n.attachShader(i,t),n.linkProgram(i),n.useProgram(i),i},So=(n,e,t)=>{const i=n.createShader(t);if(!i)throw new Error("Can not compile shader");return n.shaderSource(i,e),n.compileShader(i),n.getShaderParameter(i,n.COMPILE_STATUS)?i:(console.warn("Shader compile failed with: "+n.getShaderInfoLog(i)),null)},xl=(n,e,t)=>{const i=n.getAttribLocation(e,t);if(i===-1||i===null)throw`Cannot find attribute ${t}.`;return i},bf=(n,e,t)=>{const i=n.getUniformLocation(e,t);if(i===-1||i==null)throw`Cannot find uniform ${t}.`;return i},yl=(n,e)=>{const t=n.createBuffer();if(!t)throw"Cannot create buffer";return n.bindBuffer(n.ARRAY_BUFFER,t),n.bufferData(n.ARRAY_BUFFER,e,n.STATIC_DRAW),t},Sb=new Float32Array([-1,1,-1,-1,1,1,1,-1]),Eb=`
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;var Tb=(n,e)=>{for(const[t,i]of e)n[t]=i;return n};const Mf=n=>{n.height=n.offsetHeight,n.width=n.offsetWidth},Ab=En({name:"Shader2d",props:{ctxOptions:{type:Object,default:()=>({})},webgl:{type:String,default:"webgl"},vertex:{type:String,default:Eb},fragment:{type:String,required:!0},modelValue:{type:Object,default:()=>({})}},emits:["ready","update:modelValue"],setup(n,{emit:e}){const t=qe(),i=qe(!1);let r,s,o,a,l=null;const c=()=>{l!=null&&cancelAnimationFrame(l),e("ready",{ctx:s,gl:s,createVertexBuffer:h=>yl(s,h),getUniform:h=>bf(s,r,h),getAttribute:h=>xl(s,r,h),draw(h){const f=()=>{h(),l=requestAnimationFrame(f)};f()},canvas:t.value,onResize:u})},u=()=>{t.value&&Mf(t.value),s&&s.viewport(0,0,s.canvas.width,s.canvas.height)};return di(()=>{if(!t.value)return;if(Mf(t.value),s=t.value.getContext(n.webgl,n.ctxOptions),!s)throw new Error("Webgl is not supported");if(o=So(s,n.vertex,s.VERTEX_SHADER),a=So(s,n.fragment,s.FRAGMENT_SHADER),!o||!a)return i.value=!0;r=_l(s,o,a),yl(s,Sb);const h=xl(s,r,"position");s.enableVertexAttribArray(h),s.vertexAttribPointer(h,2,s.FLOAT,!1,2*4,0),e("update:modelValue",{ctx:s,gl:s,createVertexBuffer:f=>yl(s,f),getUniform:f=>bf(s,r,f),getAttribute:f=>xl(s,r,f),canvas:t.value,onResize:u}),c(),window.addEventListener("resize",u)}),xc(()=>{window.removeEventListener("resize",u)}),Ht(()=>n.fragment,()=>{if(i.value=!1,a=So(s,n.fragment,s.FRAGMENT_SHADER),!o||!a)return i.value=!0;r=_l(s,o,a),c()}),Ht(()=>n.vertex,()=>{if(i.value=!1,o=So(s,n.vertex,s.VERTEX_SHADER),!o||!a)return i.value=!0;r=_l(s,o,a),c()}),()=>i.value?bu({text:"Shader compilation error"}):bu("canvas",{ref:t})}});var Cb=Tb(Ab,[["__scopeId","data-v-6e714080"]]);const Rb=Cb,Lb=()=>{const{proxy:n}=Rd(),e=qe();return di(()=>{e.value=n==null?void 0:n.$el}),xc(()=>{e.value=void 0}),e};const Pb=En({setup(n){const e=`
precision highp float;

uniform float time;
uniform float width;
uniform float height;

vec2 resolution = vec2(width, height);

float strength = 0.3;
float PI = 3.14;

vec2 tornado (vec2 position, float frame) {
  float start = 3.1;
  float end = PI;
  float animation_speed = 0.2;
  float breathing_animation_speed = 0.5;
  float movement = start + cos(frame) * animation_speed;

  if (time >= end) { movement = start + cos(end + sin(frame) * breathing_animation_speed) * animation_speed; }

  for (float k = 1.0; k < 10.0; k += 1.0) {
    position.x += sin(movement + k * position.y) * strength;
    position.y += cos(movement + k * position.x) * strength;
  }

  return position;
}

float fadeY (vec2 screen_coords, float factor) {
  float inv = screen_coords.y;

  if (inv > factor) { 
    return 1.0;
  }

  return smoothstep(0.0, 1.0, inv / factor);
}

void main() {  
  vec2 t = tornado(gl_FragCoord.xy / resolution.xy, time);

  vec3 rgb = vec3(clamp(t.x * time / 2.0, 0.0, 0.5), 0.0, t.y);

  if (t.y < 0.1 || t.x < 0.1) {
    gl_FragColor = vec4(0.0);
  } else {
    gl_FragColor = vec4(rgb, 1.0);
  }

  vec2 screen = gl_FragCoord.xy / resolution.xy - vec2(0.5);
  screen.y /= resolution.x / resolution.y;

  gl_FragColor.rgb *= fadeY(gl_FragCoord.xy / resolution.xy, 0.5);
}
`,t=Lb(),{width:i,height:r}=zl(t),s=zg(),o=qe(),a=c=>{o.value=c;const{gl:u,getUniform:h,draw:f}=c,d=h("time");u.uniform1f(h("width"),i.value),u.uniform1f(h("height"),r.value),u.viewport(0,0,u.canvas.width,u.canvas.height),f(()=>{u.clearColor(0,0,0,1),u.uniform1f(d,s.value),u.drawArrays(u.TRIANGLE_STRIP,0,4)})},l=()=>{if(!o.value)return;const{gl:c,getUniform:u}=o.value;c.uniform1f(u("width"),i.value),c.uniform1f(u("height"),r.value)};return Ht([i,r],l),Jt("resize",l),(c,u)=>(At(),Ls(Je(Rb),{class:"fluid-background",fragment:e,onReady:a}))}});var Ib=zi(Pb,[["__scopeId","data-v-3b76c1a0"]]);const Db=[{title:"Github",href:"https://github.com/m0ksem"},{title:"LinkedIn",href:"https://www.linkedin.com/in/m0ksem/"},{title:"nedoshev@pm.me",href:"mailto:nedoshev@pm.me"}];const Vp=n=>(ud("data-v-c7156e82"),n=n(),hd(),n),Fb=Vp(()=>dt("path",{d:"M30.9 3.4C24.7 7.6 24 10.4 24 31s.7 23.4 6.9 27.6c3.2 2.2 4.6 2.4 14.2 2.4 9.3 0 11-.3 13.9-2.3 6.8-4.5 7.5-7 7.5-27.7S65.8 7.8 59 3.3C56.1 1.3 54.4 1 45.1 1c-9.6 0-11 .2-14.2 2.4zm26 4.2c4.2 3 5.1 7.1 5.1 23.4 0 22.9-1.4 25-17 25-15.2-.1-16-1.3-16-25s.8-24.9 16-25c7.2 0 10.1.4 11.9 1.6z"},null,-1)),Nb=Vp(()=>dt("path",{d:"M43.7 15.7c-.4.3-.7 3.1-.7 6 0 5.1.2 5.4 2.3 5.1 1.7-.2 2.3-1.1 2.5-3.7.6-6.2-1.5-10-4.1-7.4zM43.7 65.7c-.4.3-.7 4.2-.7 8.5v7.9l-2.9-2c-3.6-2.6-6.1-2.7-6.1-.4 0 2 9.1 10.3 11.2 10.3 2.3 0 11.8-8.9 11.1-10.5-.8-2.1-3.3-1.8-6 .7L48 82.3v-7.4c0-8-1.8-11.8-4.3-9.2z"},null,-1)),Bb=[Fb,Nb],Ob=En({setup(n){const e=qe(0);let t=-1;return di(()=>{t=setTimeout(()=>{e.value=1},5e3)}),Jt("scroll",()=>{clearTimeout(t),e.value=0}),(i,r)=>(At(),cn("svg",{class:"scrolldown-icon",style:wn({opacity:e.value}),xmlns:"http://www.w3.org/2000/svg",version:"1.0",width:"121.33",height:"121.33",viewBox:"0 0 91 91"},Bb,4))}});var zb=zi(Ob,[["__scopeId","data-v-c7156e82"]]);const Ub=n=>(ud("data-v-113e718d"),n=n(),hd(),n),Hb={class:"hello-section"},kb={class:"container max-w-8xl px-4 flex items-center h-screen"},Vb=Td("Maksim Nedoshev"),Gb={class:"fluid-background"},Wb=Ub(()=>dt("div",{class:"fluid-background__size-keeper"},null,-1)),jb={class:"cross-line-background"},qb={class:"cross-line-background__content"},$b=["href"],Xb={class:"hello-section__scroll-icon"},Yb=En({setup(n){Ec(r=>({f8712a16:Je(i)}));const e=oa(),t=(r,s,o)=>Math.min(Math.max(r,s),o),i=It(()=>`rgb(${Math.floor(t(e.value/2,0,.8)*255)}, 0, 255)`);return(r,s)=>(At(),cn(Pt,null,[dt("div",Hb,[dt("div",kb,[Qe(wb,null,{default:Ci(()=>[Vb]),_:1})]),dt("div",Gb,[Wb,Qe(Ib,{class:"fluid-background__image"})]),dt("div",jb,[dt("div",qb,[(At(!0),cn(Pt,null,Ad(Je(Db),({href:o,title:a})=>(At(),cn("a",{key:o,class:"link",href:o,target:"_blank"},dm(a),9,$b))),128))])]),dt("div",Xb,[Qe(zb)])]),Qe(xb,{class:"hello-section__hand"})],64))}});var Jb=zi(Yb,[["__scopeId","data-v-113e718d"]]);const Zb=(n,e)=>{const{pause:t,resume:i}=Hp(e);Bg(n,([{isIntersecting:r}])=>{r?i():t()})},Kb=()=>{const n=qe(window),e=qe({x:0,y:0,isMoving:!1});let t=-1;const i=r=>{e.value={x:r.movementX,y:r.movementY,isMoving:!0},clearTimeout(t),t=setTimeout(()=>{e.value={x:0,y:0,isMoving:!1}},2e3)};return Ht(n,(r,s)=>{s&&s.removeEventListener("mousemove",i),r&&r.addEventListener("mousemove",i)},{immediate:!0}),e},Qb=En({setup(n){const e=()=>{const T=oa();return It(()=>{const R=.5+Math.sin(T.value)*.3,z=0,M=.5+Math.cos(T.value)*.7+.3;return`rgba(${R*255}, ${z*255}, ${M*255}, 0.3)`})},t=(T=.5)=>Math.random()<T,i=qe(),r=e(),s=["#ffffff66","#800034","#7f00ff","#7b0046","#8000b3","#700064","#4d00ff","#410062","#76008b","#800069"],o=()=>{if(t(.5))return s[0];const T=Math.random()*s.length|0;return s[T]},a=(T,R,z)=>Math.min(Math.max(T,R),z),l=50,c=200,u=10,h=.01,f=.3,d=30,g=500,m=30,p=()=>{const T={x:Math.random()*2-1,y:Math.random()*2-1};return{x:Math.random()*(i.value.width-l),y:Math.random()*(i.value.height-l),size:Math.random()*u,animation:Math.random(),velocity:T,color:o(),tail:!1}},v=T=>T>d?T/d:T,b=(T,R)=>{const z=T.createLinearGradient(R.x,R.y,R.x-R.size*m/2*v(R.velocity.x),R.y-R.size*m/2*v(R.velocity.y));return z.addColorStop(0,R.color||r.value),z.addColorStop(.5,"#ffffff00"),z},A=Kb(),w=Og();return di(()=>{i.value.width=i.value.offsetWidth,i.value.height=i.value.offsetHeight;const T=i.value.getContext("2d");if(!T)return;const R=Array(c).fill(0).map(p);let z=0;const M=(D,B,le,he)=>{const O=D-le,K=B-he,U=Math.sqrt(Math.pow(O,2)+Math.pow(K,2)),$=Math.abs((A.value.x+A.value.y)/2),q=a(1-Math.pow(U/g,2),0,1)*$*.5;return{x:O/U*q,y:K/U*q}},P=(D,B)=>{T.beginPath(),T.arc(D.x,D.y,D.size*a(B,.8,1),0,Math.PI*2),T.fill()};Zb(i,()=>{z+=h,T.clearRect(0,0,i.value.width,i.value.height),R.forEach(D=>{const B=(Math.sin(z+D.animation)+1)/2;T.fillStyle=b(T,D),P(D,B);const le=M(D.x,D.y,w.x.value,w.y.value);D.x+=(D.velocity.x+le.x)*f,D.y+=(D.velocity.y+le.y)*f,D.x<-l&&(D.x=i.value.width),D.x>i.value.width+l&&(D.x=-l),D.y<-l&&(D.y=i.value.height+l),D.y>i.value.height+l&&(D.y=-l)})})}),(T,R)=>(At(),cn("canvas",{ref_key:"canvas",ref:i},null,512))}});const eM={},tM={class:"surface-bg"};function nM(n,e){return At(),cn("div",tM,[Li(n.$slots,"default",{},void 0,!0)])}var iM=zi(eM,[["render",nM],["__scopeId","data-v-208c144c"]]);const rM=()=>{},sM=Array.isArray,oM=n=>typeof n=="function",aM=n=>typeof n=="symbol";let lM;function cM(n,e=lM){e&&e.active&&e.effects.push(n)}const uM=n=>{const e=new Set(n);return e.w=0,e.n=0,e},Gp=n=>(n.w&fi)>0,Wp=n=>(n.n&fi)>0,hM=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=fi},fM=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];Gp(r)&&!Wp(r)?r.delete(n):e[t++]=r,r.w&=~fi,r.n&=~fi}e.length=t}};let rs=0,fi=1;const Zl=30;let On;class dM{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,cM(this,i)}run(){if(!this.active)return this.fn();let e=On,t=Io;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=On,On=this,Io=!0,fi=1<<++rs,rs<=Zl?hM(this):wf(this),this.fn()}finally{rs<=Zl&&fM(this),fi=1<<--rs,On=this.parent,Io=t,this.parent=void 0}}stop(){this.active&&(wf(this),this.onStop&&this.onStop(),this.active=!1)}}function wf(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let Io=!0;function pM(n,e){let t=!1;rs<=Zl?Wp(n)||(n.n|=fi,t=!Gp(n)):t=!n.has(On),t&&(n.add(On),On.deps.push(n))}function mM(n,e){for(const t of sM(n)?n:[...n])(t!==On||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}new Set(Object.getOwnPropertyNames(Symbol).map(n=>Symbol[n]).filter(aM));function ya(n){const e=n&&n.__v_raw;return e?ya(e):n}function gM(n){Io&&On&&(n=ya(n),pM(n.dep||(n.dep=uM())))}function vM(n,e){n=ya(n),n.dep&&mM(n.dep)}class _M{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new dM(e,()=>{this._dirty||(this._dirty=!0,vM(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=ya(this);return gM(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function xM(n,e,t=!1){let i,r;const s=oM(n);return s?(i=n,r=rM):(i=n.get,r=n.set),new _M(i,r,s||!r,t)}Promise.resolve();const yM=()=>xM(()=>typeof document!="undefined"?document:void 0),bM=n=>{const e=yM(),t=(s,o={})=>{if(!e.value)return null;const a=e.value.createElement(s);return Object.keys(o).forEach(l=>{a.style[l]=o[l]}),a},i=It(()=>{const s=t("div",{visibility:"hidden",overflow:"scroll"}),o=t("div");return!s||!o?{parent:s,child:o}:(s.appendChild(o),{parent:s,child:o})});return{scrollbarSize:It(()=>{var s,o,a;const{parent:l,child:c}=i.value;if(!c||!l||!e.value)return 0;(o=Je(n)||((s=e.value)==null?void 0:s.body))==null||o.appendChild(l);const u=l.offsetWidth-c.offsetWidth;return(a=l.parentElement)==null||a.removeChild(l),u})}},MM=n=>{const e=ta({x:0,y:0});Jt(n,"scroll",r=>{const s=r.target;e.x=s.scrollLeft/s.scrollWidth*100,e.y=s.scrollTop/s.scrollHeight*100});const i=()=>{const r=Je(n);!r||r.scrollTo({top:e.y/100*r.scrollHeight,left:e.x/100*r.scrollWidth})};return new Proxy(e,{set(r,s,o){return r[s]=o,i(),!0}})};var Eo=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function wM(n,e,t){var i=-1,r=n.length;e<0&&(e=-e>r?0:r+e),t=t>r?r:t,t<0&&(t+=r),r=e>t?0:t-e>>>0,e>>>=0;for(var s=Array(r);++i<r;)s[i]=n[i+e];return s}var SM=wM,EM=SM;function TM(n,e,t){var i=n.length;return t=t===void 0?i:t,!e&&t>=i?n:EM(n,e,t)}var AM=TM,CM="\\ud800-\\udfff",RM="\\u0300-\\u036f",LM="\\ufe20-\\ufe2f",PM="\\u20d0-\\u20ff",IM=RM+LM+PM,DM="\\ufe0e\\ufe0f",FM="\\u200d",NM=RegExp("["+FM+CM+IM+DM+"]");function BM(n){return NM.test(n)}var jp=BM;function OM(n){return n.split("")}var zM=OM,qp="\\ud800-\\udfff",UM="\\u0300-\\u036f",HM="\\ufe20-\\ufe2f",kM="\\u20d0-\\u20ff",VM=UM+HM+kM,GM="\\ufe0e\\ufe0f",WM="["+qp+"]",Kl="["+VM+"]",Ql="\\ud83c[\\udffb-\\udfff]",jM="(?:"+Kl+"|"+Ql+")",$p="[^"+qp+"]",Xp="(?:\\ud83c[\\udde6-\\uddff]){2}",Yp="[\\ud800-\\udbff][\\udc00-\\udfff]",qM="\\u200d",Jp=jM+"?",Zp="["+GM+"]?",$M="(?:"+qM+"(?:"+[$p,Xp,Yp].join("|")+")"+Zp+Jp+")*",XM=Zp+Jp+$M,YM="(?:"+[$p+Kl+"?",Kl,Xp,Yp,WM].join("|")+")",JM=RegExp(Ql+"(?="+Ql+")|"+YM+XM,"g");function ZM(n){return n.match(JM)||[]}var KM=ZM,QM=zM,ew=jp,tw=KM;function nw(n){return ew(n)?tw(n):QM(n)}var iw=nw,rw=typeof Eo=="object"&&Eo&&Eo.Object===Object&&Eo,sw=rw,ow=sw,aw=typeof self=="object"&&self&&self.Object===Object&&self,lw=ow||aw||Function("return this")(),cw=lw,uw=cw,hw=uw.Symbol,tu=hw;function fw(n,e){for(var t=-1,i=n==null?0:n.length,r=Array(i);++t<i;)r[t]=e(n[t],t,n);return r}var dw=fw,pw=Array.isArray,mw=pw,Sf=tu,Kp=Object.prototype,gw=Kp.hasOwnProperty,vw=Kp.toString,Qr=Sf?Sf.toStringTag:void 0;function _w(n){var e=gw.call(n,Qr),t=n[Qr];try{n[Qr]=void 0;var i=!0}catch{}var r=vw.call(n);return i&&(e?n[Qr]=t:delete n[Qr]),r}var xw=_w,yw=Object.prototype,bw=yw.toString;function Mw(n){return bw.call(n)}var ww=Mw,Ef=tu,Sw=xw,Ew=ww,Tw="[object Null]",Aw="[object Undefined]",Tf=Ef?Ef.toStringTag:void 0;function Cw(n){return n==null?n===void 0?Aw:Tw:Tf&&Tf in Object(n)?Sw(n):Ew(n)}var Rw=Cw;function Lw(n){return n!=null&&typeof n=="object"}var Pw=Lw,Iw=Rw,Dw=Pw,Fw="[object Symbol]";function Nw(n){return typeof n=="symbol"||Dw(n)&&Iw(n)==Fw}var Qp=Nw,Af=tu,Bw=dw,Ow=mw,zw=Qp,Uw=1/0,Cf=Af?Af.prototype:void 0,Rf=Cf?Cf.toString:void 0;function em(n){if(typeof n=="string")return n;if(Ow(n))return Bw(n,em)+"";if(zw(n))return Rf?Rf.call(n):"";var e=n+"";return e=="0"&&1/n==-Uw?"-0":e}var Hw=em,kw=Hw;function Vw(n){return n==null?"":kw(n)}var Gw=Vw,Ww=AM,jw=jp,qw=iw,$w=Gw;function Xw(n){return function(e){e=$w(e);var t=jw(e)?qw(e):void 0,i=t?t[0]:e.charAt(0),r=t?Ww(t,1).join(""):e.slice(1);return i[n]()+r}}var Yw=Xw,Jw=Yw,Zw=Jw("toUpperCase"),tm=Zw;const Lf=(n,e="value")=>{if(typeof n=="number")return`${n}%`;if(n.endsWith("%"))return n;throw new Error(`${tm(e)} must be string number in percents or just a number. For example 40%.`)},ec=(n,e="value")=>{if(typeof n=="number")return`${n}px`;if(n.endsWith("px"))return n;throw new Error(`${tm(e)} must be string number in pixels or just a number. For example 200px`)};function Kw(n,e,t){return n===n&&(t!==void 0&&(n=n<=t?n:t),e!==void 0&&(n=n>=e?n:e)),n}var Qw=Kw,eS=/\s/;function tS(n){for(var e=n.length;e--&&eS.test(n.charAt(e)););return e}var nS=tS,iS=nS,rS=/^\s+/;function sS(n){return n&&n.slice(0,iS(n)+1).replace(rS,"")}var oS=sS;function aS(n){var e=typeof n;return n!=null&&(e=="object"||e=="function")}var lS=aS,cS=oS,Pf=lS,uS=Qp,If=0/0,hS=/^[-+]0x[0-9a-f]+$/i,fS=/^0b[01]+$/i,dS=/^0o[0-7]+$/i,pS=parseInt;function mS(n){if(typeof n=="number")return n;if(uS(n))return If;if(Pf(n)){var e=typeof n.valueOf=="function"?n.valueOf():n;n=Pf(e)?e+"":e}if(typeof n!="string")return n===0?n:+n;n=cS(n);var t=fS.test(n);return t||dS.test(n)?pS(n.slice(2),t?2:8):hS.test(n)?If:+n}var gS=mS,vS=Qw,bl=gS;function _S(n,e,t){return t===void 0&&(t=e,e=void 0),t!==void 0&&(t=bl(t),t=t===t?t:0),e!==void 0&&(e=bl(e),e=e===e?e:0),vS(bl(n),e,t)}var Df=_S;const xS=n=>{const e=qe(!1),t=()=>{e.value=!1};return Jt(n,"mousedown",()=>{e.value=!0}),Jt("mouseup",t),Jt("blur",t),{isFocused:e}},yS=(n,e)=>{const t=qe({x:0,y:0}),{isFocused:i}=xS(e);return Jt("mousemove",s=>{var o,a;if(!i.value)return;const l=(o=Je(n))==null?void 0:o.getBoundingClientRect(),c=(a=Je(e))==null?void 0:a.getBoundingClientRect();if(!l||!c)return;const u=c.top-l.top,h=c.left-l.left,f=Df(u+s.movementY,0,l.height-c.height),d=Df(h+s.movementX,0,l.width-c.width),g=f/l.height*100,m=d/l.width*100;t.value={y:g,x:m}}),{position:t,isFocused:i}},bS={class:"track-wrapper"},MS=En({props:{modelValue:{type:Number,required:!0,validator(n){return n>=0&&n<=100}},position:{type:String,default:"right",validator(n){return["bottom","right","left","top"].includes(n)}},size:{type:[String,Number],required:!0},thickness:{type:[String,Number],default:"18px"},color:{type:String},trackColor:{type:String},hide:{type:Boolean},hideTimeout:{type:Number}},emits:["update:modelValue"],setup(n,{emit:e}){const t=n;Ec(b=>({"2fb58895":Je(g)}));const i=qe(),r=qe(),s=()=>t.position==="bottom"||t.position==="top",o=()=>s()?"width":"height",a=()=>s()?"height":"width",l=()=>s()?"left":"top",c=It(()=>({[l()]:Lf(t.modelValue),[o()]:Lf(t.size,"size"),[a()]:ec(t.thickness,"thickness")})),u=It(()=>({[a()]:ec(t.thickness,"thickness")})),h=qe(!1);let f;Ht(()=>t.modelValue,()=>{h.value=!0,clearTimeout(f),f=setTimeout(()=>{h.value=!1},300)});const d=It(()=>({["scrollbar--focused"]:p.value,["scrollbar--scrolling"]:h.value,[`scrollbar--${t.position}`]:!0,["scrollbar--hidden"]:t.hide})),g=It(()=>`${t.hideTimeout}ms`),{position:m,isFocused:p}=yS(r,i);Ht(m,({x:b,y:A})=>{const w=s()?b:A;e("update:modelValue",w)});const v=It(()=>({horizontal:s(),vertical:!s(),placement:s()?"horizontal":"vertical",focused:p.value}));return(b,A)=>(At(),cn("div",{class:Lr(["scrollbar",Je(d)]),style:wn(Je(u)),ref_key:"scrollbarRef",ref:r},[dt("div",{class:"thumb-wrapper",style:wn(Je(c)),ref_key:"thumbRef",ref:i},[Li(b.$slots,"thumb",Do(gs(Je(v))),()=>[dt("div",{class:"thumb thumb--default",style:wn({background:n.color})},null,4)])],4),dt("div",bS,[Li(b.$slots,"track",Do(gs(Je(v))),()=>[dt("div",{class:"track track--default",style:wn({background:n.trackColor})},null,4)])])],6))}});var wS=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t};const SS={class:"vue-custom-scrollbar"},ES=En({props:{top:{type:Boolean,default:!1},left:{type:Boolean,default:!1},bottom:{type:Boolean,default:!1},right:{type:Boolean,default:!1},inner:{type:Boolean,default:!1},autoHide:{type:Boolean,default:!1},autoHideTimeout:{type:Number,default:5e3},thickness:{type:[String,Number]},color:{type:String,default:"#9d4edd"},trackColor:{type:String,default:"#3c096c"}},setup(n){const e=n,{scrollbarSize:t}=bM(),i=It(()=>e.thickness||t.value),r=It(()=>{if(!e.inner)return{padding:[e.top,e.right,e.bottom,e.left].map(g=>g?ec(i.value,"thickness"):"0").join(" ")}}),s=qe(),o=qe(),a=MM(s),{width:l,height:c}=zl(s),{width:u,height:h}=zl(o),f=It(()=>({x:l.value/u.value*100,y:c.value/h.value*100})),d=It(()=>{const g=[];return e.top&&g.push({main:"x",cross:"y",position:"top"}),e.left&&g.push({main:"y",cross:"x",position:"left"}),e.right&&g.push({main:"y",cross:"x",position:"right"}),e.bottom&&g.push({main:"x",cross:"y",position:"bottom"}),g});return(g,m)=>(At(),cn("div",SS,[dt("div",{class:"vue-custom-scrollbar__scrollable",ref_key:"scrollableRef",ref:s},[dt("div",{class:"vue-custom-scrollbar__inner",style:wn(Je(r)),ref_key:"innerRef",ref:o},[Li(g.$slots,"default",{},void 0,!0)],4)],512),(At(!0),cn(Pt,null,Ad(Je(d),({main:p,position:v})=>(At(),Ls(MS,{key:v,size:Je(f)[p],position:v,thickness:Je(i),color:n.color,trackColor:n.trackColor,hide:n.autoHide,"hide-timeout":n.autoHideTimeout,modelValue:Je(a)[p],"onUpdate:modelValue":b=>Je(a)[p]=b},{thumb:Ci(b=>[Li(g.$slots,"thumb",Do(gs(b)),void 0,!0)]),track:Ci(b=>[Li(g.$slots,"track",Do(gs(b)),void 0,!0)]),_:2},1032,["size","position","thickness","color","trackColor","hide","hide-timeout","modelValue","onUpdate:modelValue"]))),128))]))}});var TS=wS(ES,[["__scopeId","data-v-5d30965f"]]);const AS={class:"app__content"},CS=En({setup(n){Ec(o=>({"8c35c258":Je(r),"64007e98":Je(s)}));const e=Ca(()=>Pa(()=>import("./footer.bbe79e5c.js"),["assets/footer.bbe79e5c.js","assets/footer.4be8fffe.css","assets/use-fade-intersection.343b0914.js"])),t=Ca(()=>Pa(()=>import("./skills.f1086715.js"),["assets/skills.f1086715.js","assets/skills.e8d4c3a1.css"])),i=Ca(()=>Pa(()=>import("./projects.3609792e.js"),["assets/projects.3609792e.js","assets/projects.009a9613.css","assets/use-fade-intersection.343b0914.js"])),r=Ug(),s=It(()=>r.value?r.value.match(/rgb\((.*)\)/)[1]:"255, 255, 255");return di(()=>{document.querySelector(".vue-custom-scrollbar__scrollable").addEventListener("scroll",a=>{window.dispatchEvent(new Event("scroll"))})}),(o,a)=>(At(),Ls(Je(TS),{class:"app",right:"",trackColor:"#00000000",thickness:"12px",inner:"","auto-hide":""},{thumb:Ci(({focused:l})=>[dt("div",{class:Lr(["custom-thumb",{"custom-thumb--focused":l}])},null,2)]),default:Ci(()=>[dt("div",AS,[Qe(Jb),Qe(Je(i)),Qe(iM,null,{default:Ci(()=>[Qe(Je(t)),Qe(Je(e))]),_:1}),Qe(Qb,{class:"star-background"})])]),_:1}))}});var RS=zi(CS,[["__scopeId","data-v-4d1d5c3e"]]);Tg(RS).mount("#app");export{NS as $,lt as A,nt as B,Me as C,F3 as D,Un as E,Yc as F,Ei as G,$c as H,z3 as I,li as J,Ye as K,An as L,Tt as M,lp as N,Es as O,zt as P,kt as Q,Go as R,hn as S,Fr as T,pv as U,C as V,qt as W,kc as X,jy as Y,Po as Z,zi as _,Je as a,Dc as a0,jo as a1,hf as a2,cp as a3,Ze as a4,up as a5,FS as a6,hi as a7,_t as a8,Hu as a9,Ke as aA,dt as aB,LS as aC,PS as aD,Li as aE,Ls as aF,ud as aG,hd as aH,oa as aI,Td as aJ,Ci as aK,Ad as aL,Db as aM,Pt as aN,Bg as aO,Oi as aP,IS as aQ,vr as aR,Qe as aS,wb as aT,Ht as aU,Lb as aV,xc as aW,Zb as aX,g1 as aa,ku as ab,on as ac,Vl as ad,Wo as ae,Sr as af,bt as ag,DS as ah,Jo as ai,Ns as aj,Yo as ak,fn as al,Nr as am,tb as an,BS as ao,vb as ap,Jt as aq,Hp as ar,Hg as as,Is as at,zc as au,I3 as av,Oc as aw,B3 as ax,Wy as ay,Ic as az,At as b,It as c,En as d,cn as e,pt as f,Nn as g,Se as h,et as i,Op as j,D3 as k,Fp as l,ha as m,bp as n,di as o,ae as p,Pp as q,qe as r,it as s,dm as t,Ec as u,Ds as v,Ss as w,Ot as x,ca as y,Ti as z};
