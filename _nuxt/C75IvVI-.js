const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CYhh_NEF.js","./footer.ByS75cNu.css","./ClwYtal7.js","./skills.DTN0vVEH.css","./CgJZ4fAt.js","./error-404.CoZKRZXM.css","./D3V5mLAv.js","./error-500.D6506J9O.css"])))=>i.map(i=>d[i]);
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function vu(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const mt={},Vr=[],Pn=()=>{},Wg=()=>!1,Xs=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),xu=n=>n.startsWith("onUpdate:"),Lt=Object.assign,yu=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Xg=Object.prototype.hasOwnProperty,at=(n,e)=>Xg.call(n,e),Oe=Array.isArray,Gr=n=>wa(n)==="[object Map]",Yd=n=>wa(n)==="[object Set]",Ue=n=>typeof n=="function",xt=n=>typeof n=="string",ci=n=>typeof n=="symbol",gt=n=>n!==null&&typeof n=="object",Kd=n=>(gt(n)||Ue(n))&&Ue(n.then)&&Ue(n.catch),Zd=Object.prototype.toString,wa=n=>Zd.call(n),$g=n=>wa(n).slice(8,-1),Jd=n=>wa(n)==="[object Object]",Mu=n=>xt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Wr=vu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Aa=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},jg=/-(\w)/g,xn=Aa(n=>n.replace(jg,(e,t)=>t?t.toUpperCase():"")),qg=/\B([A-Z])/g,dr=Aa(n=>n.replace(qg,"-$1").toLowerCase()),Ra=Aa(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ja=Aa(n=>n?`on${Ra(n)}`:""),wi=(n,e)=>!Object.is(n,e),Qa=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Qd=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Yg=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Kg=n=>{const e=xt(n)?Number(n):NaN;return isNaN(e)?n:e};let If;const Ca=()=>If||(If=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function $s(n){if(Oe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=xt(i)?e_(i):$s(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(xt(n)||gt(n))return n}const Zg=/;(?![^(]*\))/g,Jg=/:([^]+)/,Qg=/\/\*[^]*?\*\//g;function e_(n){const e={};return n.replace(Qg,"").split(Zg).forEach(t=>{if(t){const i=t.split(Jg);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Pa(n){let e="";if(xt(n))e=n;else if(Oe(n))for(let t=0;t<n.length;t++){const i=Pa(n[t]);i&&(e+=i+" ")}else if(gt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}function t_(n){if(!n)return null;let{class:e,style:t}=n;return e&&!xt(e)&&(n.class=Pa(e)),t&&(n.style=$s(t)),n}const n_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",i_=vu(n_);function ep(n){return!!n||n===""}const tp=n=>!!(n&&n.__v_isRef===!0),ii=n=>xt(n)?n:n==null?"":Oe(n)||gt(n)&&(n.toString===Zd||!Ue(n.toString))?tp(n)?ii(n.value):JSON.stringify(n,np,2):String(n),np=(n,e)=>tp(e)?np(n,e.value):Gr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[el(i,s)+" =>"]=r,t),{})}:Yd(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>el(t))}:ci(e)?el(e):gt(e)&&!Oe(e)&&!Jd(e)?String(e):e,el=(n,e="")=>{var t;return ci(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Yt;class ip{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Yt,!e&&Yt&&(this.index=(Yt.scopes||(Yt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Yt;try{return Yt=this,e()}finally{Yt=t}}}on(){Yt=this}off(){Yt=this.parent}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function r_(n){return new ip(n)}function Su(){return Yt}function s_(n,e=!1){Yt&&Yt.cleanups.push(n)}let pt;const tl=new WeakSet;class rp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Yt&&Yt.active&&Yt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,tl.has(this)&&(tl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||op(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Lf(this),ap(this);const e=pt,t=In;pt=this,In=!0;try{return this.fn()}finally{lp(this),pt=e,In=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Tu(e);this.deps=this.depsTail=void 0,Lf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?tl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Jl(this)&&this.run()}get dirty(){return Jl(this)}}let sp=0,Cs,Ps;function op(n,e=!1){if(n.flags|=8,e){n.next=Ps,Ps=n;return}n.next=Cs,Cs=n}function bu(){sp++}function Eu(){if(--sp>0)return;if(Ps){let e=Ps;for(Ps=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Cs;){let e=Cs;for(Cs=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function ap(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function lp(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Tu(i),o_(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Jl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(cp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function cp(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Os))return;n.globalVersion=Os;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!Jl(n)){n.flags&=-3;return}const t=pt,i=In;pt=n,In=!0;try{ap(n);const r=n.fn(n._value);(e.version===0||wi(r,n._value))&&(n._value=r,e.version++)}catch(r){throw e.version++,r}finally{pt=t,In=i,lp(n),n.flags&=-3}}function Tu(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Tu(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function o_(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let In=!0;const up=[];function Di(){up.push(In),In=!1}function Ui(){const n=up.pop();In=n===void 0?!0:n}function Lf(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=pt;pt=void 0;try{e()}finally{pt=t}}}let Os=0;class a_{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ia{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!pt||!In||pt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==pt)t=this.activeLink=new a_(pt,this),pt.deps?(t.prevDep=pt.depsTail,pt.depsTail.nextDep=t,pt.depsTail=t):pt.deps=pt.depsTail=t,fp(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=pt.depsTail,t.nextDep=void 0,pt.depsTail.nextDep=t,pt.depsTail=t,pt.deps===t&&(pt.deps=i)}return t}trigger(e){this.version++,Os++,this.notify(e)}notify(e){bu();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Eu()}}}function fp(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)fp(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Qo=new WeakMap,ir=Symbol(""),Ql=Symbol(""),Bs=Symbol("");function Ht(n,e,t){if(In&&pt){let i=Qo.get(n);i||Qo.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Ia),r.map=i,r.key=t),r.track()}}function Qn(n,e,t,i,r,s){const o=Qo.get(n);if(!o){Os++;return}const a=l=>{l&&l.trigger()};if(bu(),e==="clear")o.forEach(a);else{const l=Oe(n),c=l&&Mu(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===Bs||!ci(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Bs)),e){case"add":l?c&&a(o.get("length")):(a(o.get(ir)),Gr(n)&&a(o.get(Ql)));break;case"delete":l||(a(o.get(ir)),Gr(n)&&a(o.get(Ql)));break;case"set":Gr(n)&&a(o.get(ir));break}}Eu()}function l_(n,e){const t=Qo.get(n);return t&&t.get(e)}function vr(n){const e=nt(n);return e===n?e:(Ht(e,"iterate",Bs),_n(n)?e:e.map(zt))}function La(n){return Ht(n=nt(n),"iterate",Bs),n}const c_={__proto__:null,[Symbol.iterator](){return nl(this,Symbol.iterator,zt)},concat(...n){return vr(this).concat(...n.map(e=>Oe(e)?vr(e):e))},entries(){return nl(this,"entries",n=>(n[1]=zt(n[1]),n))},every(n,e){return Gn(this,"every",n,e,void 0,arguments)},filter(n,e){return Gn(this,"filter",n,e,t=>t.map(zt),arguments)},find(n,e){return Gn(this,"find",n,e,zt,arguments)},findIndex(n,e){return Gn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Gn(this,"findLast",n,e,zt,arguments)},findLastIndex(n,e){return Gn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Gn(this,"forEach",n,e,void 0,arguments)},includes(...n){return il(this,"includes",n)},indexOf(...n){return il(this,"indexOf",n)},join(n){return vr(this).join(n)},lastIndexOf(...n){return il(this,"lastIndexOf",n)},map(n,e){return Gn(this,"map",n,e,void 0,arguments)},pop(){return _s(this,"pop")},push(...n){return _s(this,"push",n)},reduce(n,...e){return Df(this,"reduce",n,e)},reduceRight(n,...e){return Df(this,"reduceRight",n,e)},shift(){return _s(this,"shift")},some(n,e){return Gn(this,"some",n,e,void 0,arguments)},splice(...n){return _s(this,"splice",n)},toReversed(){return vr(this).toReversed()},toSorted(n){return vr(this).toSorted(n)},toSpliced(...n){return vr(this).toSpliced(...n)},unshift(...n){return _s(this,"unshift",n)},values(){return nl(this,"values",zt)}};function nl(n,e,t){const i=La(n),r=i[e]();return i!==n&&!_n(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const u_=Array.prototype;function Gn(n,e,t,i,r,s){const o=La(n),a=o!==n&&!_n(n),l=o[e];if(l!==u_[e]){const f=l.apply(n,s);return a?zt(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,zt(f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function Df(n,e,t,i){const r=La(n);let s=t;return r!==n&&(_n(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,zt(a),l,n)}),r[e](s,...i)}function il(n,e,t){const i=nt(n);Ht(i,"iterate",Bs);const r=i[e](...t);return(r===-1||r===!1)&&Cu(t[0])?(t[0]=nt(t[0]),i[e](...t)):r}function _s(n,e,t=[]){Di(),bu();const i=nt(n)[e].apply(n,t);return Eu(),Ui(),i}const f_=vu("__proto__,__v_isRef,__isVue"),hp=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ci));function h_(n){ci(n)||(n=String(n));const e=nt(this);return Ht(e,"has",n),e.hasOwnProperty(n)}class dp{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?S_:_p:s?gp:mp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Oe(e);if(!r){let l;if(o&&(l=c_[t]))return l;if(t==="hasOwnProperty")return h_}const a=Reflect.get(e,t,Tt(e)?e:i);return(ci(t)?hp.has(t):f_(t))||(r||Ht(e,"get",t),s)?a:Tt(a)?o&&Mu(t)?a:a.value:gt(a)?r?Au(a):Ci(a):a}}class pp extends dp{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=Pi(s);if(!_n(i)&&!Pi(i)&&(s=nt(s),i=nt(i)),!Oe(e)&&Tt(s)&&!Tt(i))return l?!1:(s.value=i,!0)}const o=Oe(e)&&Mu(t)?Number(t)<e.length:at(e,t),a=Reflect.set(e,t,i,Tt(e)?e:r);return e===nt(r)&&(o?wi(i,s)&&Qn(e,"set",t,i):Qn(e,"add",t,i)),a}deleteProperty(e,t){const i=at(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Qn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!ci(t)||!hp.has(t))&&Ht(e,"has",t),i}ownKeys(e){return Ht(e,"iterate",Oe(e)?"length":ir),Reflect.ownKeys(e)}}class d_ extends dp{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const p_=new pp,m_=new d_,g_=new pp(!0);const ec=n=>n,no=n=>Reflect.getPrototypeOf(n);function __(n,e,t){return function(...i){const r=this.__v_raw,s=nt(r),o=Gr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?ec:e?tc:zt;return!e&&Ht(s,"iterate",l?Ql:ir),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function io(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function v_(n,e){const t={get(r){const s=this.__v_raw,o=nt(s),a=nt(r);n||(wi(r,a)&&Ht(o,"get",r),Ht(o,"get",a));const{has:l}=no(o),c=e?ec:n?tc:zt;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Ht(nt(r),"iterate",ir),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=nt(s),a=nt(r);return n||(wi(r,a)&&Ht(o,"has",r),Ht(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=nt(a),c=e?ec:n?tc:zt;return!n&&Ht(l,"iterate",ir),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Lt(t,n?{add:io("add"),set:io("set"),delete:io("delete"),clear:io("clear")}:{add(r){!e&&!_n(r)&&!Pi(r)&&(r=nt(r));const s=nt(this);return no(s).has.call(s,r)||(s.add(r),Qn(s,"add",r,r)),this},set(r,s){!e&&!_n(s)&&!Pi(s)&&(s=nt(s));const o=nt(this),{has:a,get:l}=no(o);let c=a.call(o,r);c||(r=nt(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?wi(s,u)&&Qn(o,"set",r,s):Qn(o,"add",r,s),this},delete(r){const s=nt(this),{has:o,get:a}=no(s);let l=o.call(s,r);l||(r=nt(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Qn(s,"delete",r,void 0),c},clear(){const r=nt(this),s=r.size!==0,o=r.clear();return s&&Qn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=__(r,n,e)}),t}function wu(n,e){const t=v_(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(at(t,r)&&r in i?t:i,r,s)}const x_={get:wu(!1,!1)},y_={get:wu(!1,!0)},M_={get:wu(!0,!1)};const mp=new WeakMap,gp=new WeakMap,_p=new WeakMap,S_=new WeakMap;function b_(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function E_(n){return n.__v_skip||!Object.isExtensible(n)?0:b_($g(n))}function Ci(n){return Pi(n)?n:Ru(n,!1,p_,x_,mp)}function Or(n){return Ru(n,!1,g_,y_,gp)}function Au(n){return Ru(n,!0,m_,M_,_p)}function Ru(n,e,t,i,r){if(!gt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=E_(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function rr(n){return Pi(n)?rr(n.__v_raw):!!(n&&n.__v_isReactive)}function Pi(n){return!!(n&&n.__v_isReadonly)}function _n(n){return!!(n&&n.__v_isShallow)}function Cu(n){return n?!!n.__v_raw:!1}function nt(n){const e=n&&n.__v_raw;return e?nt(e):n}function T_(n){return!at(n,"__v_skip")&&Object.isExtensible(n)&&Qd(n,"__v_skip",!0),n}const zt=n=>gt(n)?Ci(n):n,tc=n=>gt(n)?Au(n):n;function Tt(n){return n?n.__v_isRef===!0:!1}function Xe(n){return vp(n,!1)}function Uf(n){return vp(n,!0)}function vp(n,e){return Tt(n)?n:new w_(n,e)}class w_{constructor(e,t){this.dep=new Ia,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:nt(e),this._value=t?e:zt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||_n(e)||Pi(e);e=i?e:nt(e),wi(e,t)&&(this._rawValue=e,this._value=i?e:zt(e),this.dep.trigger())}}function Ge(n){return Tt(n)?n.value:n}const A_={get:(n,e,t)=>e==="__v_raw"?n:Ge(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Tt(r)&&!Tt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function xp(n){return rr(n)?n:new Proxy(n,A_)}class R_{constructor(e){this.__v_isRef=!0,this._value=void 0;const t=this.dep=new Ia,{get:i,set:r}=e(t.track.bind(t),t.trigger.bind(t));this._get=i,this._set=r}get value(){return this._value=this._get()}set value(e){this._set(e)}}function C_(n){return new R_(n)}class P_{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return l_(nt(this._object),this._key)}}class I_{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function yp(n,e,t){return Tt(n)?n:Ue(n)?new I_(n):gt(n)&&arguments.length>1?L_(n,e,t):Xe(n)}function L_(n,e,t){const i=n[e];return Tt(i)?i:new P_(n,e,t)}class D_{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Ia(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Os-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&pt!==this)return op(this,!0),!0}get value(){const e=this.dep.track();return cp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Pu(n,e,t=!1){let i,r;return Ue(n)?i=n:(i=n.get,r=n.set),new D_(i,r,t)}const ro={},ea=new WeakMap;let qi;function U_(n,e=!1,t=qi){if(t){let i=ea.get(t);i||ea.set(t,i=[]),i.push(n)}}function N_(n,e,t=mt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=M=>r?M:_n(M)||r===!1||r===0?Si(M,1):Si(M);let u,f,h,d,g=!1,_=!1;if(Tt(n)?(f=()=>n.value,g=_n(n)):rr(n)?(f=()=>c(n),g=!0):Oe(n)?(_=!0,g=n.some(M=>rr(M)||_n(M)),f=()=>n.map(M=>{if(Tt(M))return M.value;if(rr(M))return c(M);if(Ue(M))return l?l(M,2):M()})):Ue(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){Di();try{h()}finally{Ui()}}const M=qi;qi=u;try{return l?l(n,3,[d]):n(d)}finally{qi=M}}:f=Pn,e&&r){const M=f,w=r===!0?1/0:r;f=()=>Si(M(),w)}const m=Su(),p=()=>{u.stop(),m&&m.active&&yu(m.effects,u)};if(s&&e){const M=e;e=(...w)=>{M(...w),p()}}let A=_?new Array(n.length).fill(ro):ro;const x=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(e){const w=u.run();if(r||g||(_?w.some((R,C)=>wi(R,A[C])):wi(w,A))){h&&h();const R=qi;qi=u;try{const C=[w,A===ro?void 0:_&&A[0]===ro?[]:A,d];l?l(e,3,C):e(...C),A=w}finally{qi=R}}}else u.run()};return a&&a(x),u=new rp(f),u.scheduler=o?()=>o(x,!1):x,d=M=>U_(M,!1,u),h=u.onStop=()=>{const M=ea.get(u);if(M){if(l)l(M,4);else for(const w of M)w();ea.delete(u)}},e?i?x(!0):A=u.run():o?o(x.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Si(n,e=1/0,t){if(e<=0||!gt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Tt(n))Si(n.value,e,t);else if(Oe(n))for(let i=0;i<n.length;i++)Si(n[i],e,t);else if(Yd(n)||Gr(n))n.forEach(i=>{Si(i,e,t)});else if(Jd(n)){for(const i in n)Si(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Si(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function js(n,e,t,i){try{return i?n(...i):n()}catch(r){us(r,e,t)}}function Hn(n,e,t,i){if(Ue(n)){const r=js(n,e,t,i);return r&&Kd(r)&&r.catch(s=>{us(s,e,t)}),r}if(Oe(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Hn(n[s],e,t,i));return r}}function us(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||mt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){Di(),js(s,null,10,[n,l,c]),Ui();return}}F_(n,t,r,i,o)}function F_(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Kt=[];let Nn=-1;const Xr=[];let xi=null,Nr=0;const Mp=Promise.resolve();let ta=null;function Da(n){const e=ta||Mp;return n?e.then(this?n.bind(this):n):e}function O_(n){let e=Nn+1,t=Kt.length;for(;e<t;){const i=e+t>>>1,r=Kt[i],s=ks(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Iu(n){if(!(n.flags&1)){const e=ks(n),t=Kt[Kt.length-1];!t||!(n.flags&2)&&e>=ks(t)?Kt.push(n):Kt.splice(O_(e),0,n),n.flags|=1,Sp()}}function Sp(){ta||(ta=Mp.then(bp))}function na(n){Oe(n)?Xr.push(...n):xi&&n.id===-1?xi.splice(Nr+1,0,n):n.flags&1||(Xr.push(n),n.flags|=1),Sp()}function Nf(n,e,t=Nn+1){for(;t<Kt.length;t++){const i=Kt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Kt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function ia(n){if(Xr.length){const e=[...new Set(Xr)].sort((t,i)=>ks(t)-ks(i));if(Xr.length=0,xi){xi.push(...e);return}for(xi=e,Nr=0;Nr<xi.length;Nr++){const t=xi[Nr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}xi=null,Nr=0}}const ks=n=>n.id==null?n.flags&2?-1:1/0:n.id;function bp(n){try{for(Nn=0;Nn<Kt.length;Nn++){const e=Kt[Nn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),js(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Nn<Kt.length;Nn++){const e=Kt[Nn];e&&(e.flags&=-2)}Nn=-1,Kt.length=0,ia(),ta=null,(Kt.length||Xr.length)&&bp()}}let Ut=null,Ep=null;function ra(n){const e=Ut;return Ut=n,Ep=n&&n.type.__scopeId||null,e}function Zr(n,e=Ut,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&jf(-1);const s=ra(e);let o;try{o=n(...r)}finally{ra(s),i._d&&jf(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Fn(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Di(),Hn(l,t,8,[n.el,a,n,e]),Ui())}}const B_=Symbol("_vte"),k_=n=>n.__isTeleport;function Lu(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Lu(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Ft(n,e){return Ue(n)?Lt({name:n.name},e,{setup:n}):n}function Du(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Hs(n,e,t,i,r=!1){if(Oe(n)){n.forEach((g,_)=>Hs(g,e&&(Oe(e)?e[_]:e),t,i,r));return}if(sr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Hs(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Gu(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===mt?a.refs={}:a.refs,f=a.setupState,h=nt(f),d=f===mt?()=>!1:g=>at(h,g);if(c!=null&&c!==l&&(xt(c)?(u[c]=null,d(c)&&(f[c]=null)):Tt(c)&&(c.value=null)),Ue(l))js(l,a,12,[o,u]);else{const g=xt(l),_=Tt(l);if(g||_){const m=()=>{if(n.f){const p=g?d(l)?f[l]:u[l]:l.value;r?Oe(p)&&yu(p,s):Oe(p)?p.includes(s)||p.push(s):g?(u[l]=[s],d(l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else g?(u[l]=o,d(l)&&(f[l]=o)):_&&(l.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,on(m,t)):m()}}}let Ff=!1;const xr=()=>{Ff||(console.error("Hydration completed but contains mismatches."),Ff=!0)},H_=n=>n.namespaceURI.includes("svg")&&n.tagName!=="foreignObject",z_=n=>n.namespaceURI.includes("MathML"),so=n=>{if(n.nodeType===1){if(H_(n))return"svg";if(z_(n))return"mathml"}},Br=n=>n.nodeType===8;function V_(n){const{mt:e,p:t,o:{patchProp:i,createText:r,nextSibling:s,parentNode:o,remove:a,insert:l,createComment:c}}=n,u=(x,M)=>{if(!M.hasChildNodes()){t(null,x,M),ia(),M._vnode=x;return}f(M.firstChild,x,null,null,null),ia(),M._vnode=x},f=(x,M,w,R,C,L=!1)=>{L=L||!!M.dynamicChildren;const T=Br(x)&&x.data==="[",S=()=>_(x,M,w,R,C,T),{type:I,ref:X,shapeFlag:z,patchFlag:Z}=M;let te=x.nodeType;M.el=x,Z===-2&&(L=!1,M.dynamicChildren=null);let k=null;switch(I){case ar:te!==3?M.children===""?(l(M.el=r(""),o(x),x),k=x):k=S():(x.data!==M.children&&(xr(),x.data=M.children),k=s(x));break;case Dn:A(x)?(k=s(x),p(M.el=x.content.firstChild,x,w)):te!==8||T?k=S():k=s(x);break;case Ls:if(T&&(x=s(x),te=x.nodeType),te===1||te===3){k=x;const ee=!M.children.length;for(let N=0;N<M.staticCount;N++)ee&&(M.children+=k.nodeType===1?k.outerHTML:k.data),N===M.staticCount-1&&(M.anchor=k),k=s(k);return T?s(k):k}else S();break;case At:T?k=g(x,M,w,R,C,L):k=S();break;default:if(z&1)(te!==1||M.type.toLowerCase()!==x.tagName.toLowerCase())&&!A(x)?k=S():k=h(x,M,w,R,C,L);else if(z&6){M.slotScopeIds=C;const ee=o(x);if(T?k=m(x):Br(x)&&x.data==="teleport start"?k=m(x,x.data,"teleport end"):k=s(x),e(M,ee,null,w,R,so(ee),L),sr(M)&&!M.type.__asyncResolved){let N;T?(N=Ke(At),N.anchor=k?k.previousSibling:ee.lastChild):N=x.nodeType===3?Ys(""):Ke("div"),N.el=x,M.component.subTree=N}}else z&64?te!==8?k=S():k=M.type.hydrate(x,M,w,R,C,L,n,d):z&128&&(k=M.type.hydrate(x,M,w,R,so(o(x)),C,L,n,f))}return X!=null&&Hs(X,null,R,M),k},h=(x,M,w,R,C,L)=>{L=L||!!M.dynamicChildren;const{type:T,props:S,patchFlag:I,shapeFlag:X,dirs:z,transition:Z}=M,te=T==="input"||T==="option";if(te||I!==-1){z&&Fn(M,null,w,"created");let k=!1;if(A(x)){k=jp(null,Z)&&w&&w.vnode.props&&w.vnode.props.appear;const N=x.content.firstChild;k&&Z.beforeEnter(N),p(N,x,w),M.el=x=N}if(X&16&&!(S&&(S.innerHTML||S.textContent))){let N=d(x.firstChild,M,x,w,R,C,L);for(;N;){oo(x,1)||xr();const ue=N;N=N.nextSibling,a(ue)}}else if(X&8){let N=M.children;N[0]===`
`&&(x.tagName==="PRE"||x.tagName==="TEXTAREA")&&(N=N.slice(1)),x.textContent!==N&&(oo(x,0)||xr(),x.textContent=M.children)}if(S){if(te||!L||I&48){const N=x.tagName.includes("-");for(const ue in S)(te&&(ue.endsWith("value")||ue==="indeterminate")||Xs(ue)&&!Wr(ue)||ue[0]==="."||N)&&i(x,ue,null,S[ue],void 0,w)}else if(S.onClick)i(x,"onClick",null,S.onClick,void 0,w);else if(I&4&&rr(S.style))for(const N in S.style)S.style[N]}let ee;(ee=S&&S.onVnodeBeforeMount)&&dn(ee,w,M),z&&Fn(M,null,w,"beforeMount"),((ee=S&&S.onVnodeMounted)||z||k)&&tm(()=>{ee&&dn(ee,w,M),k&&Z.enter(x),z&&Fn(M,null,w,"mounted")},R)}return x.nextSibling},d=(x,M,w,R,C,L,T)=>{T=T||!!M.dynamicChildren;const S=M.children,I=S.length;for(let X=0;X<I;X++){const z=T?S[X]:S[X]=an(S[X]),Z=z.type===ar;x?(Z&&!T&&X+1<I&&an(S[X+1]).type===ar&&(l(r(x.data.slice(z.children.length)),w,s(x)),x.data=z.children),x=f(x,z,R,C,L,T)):Z&&!z.children?l(z.el=r(""),w):(oo(w,1)||xr(),t(null,z,w,null,R,C,so(w),L))}return x},g=(x,M,w,R,C,L)=>{const{slotScopeIds:T}=M;T&&(C=C?C.concat(T):T);const S=o(x),I=d(s(x),M,S,w,R,C,L);return I&&Br(I)&&I.data==="]"?s(M.anchor=I):(xr(),l(M.anchor=c("]"),S,I),I)},_=(x,M,w,R,C,L)=>{if(oo(x.parentElement,1)||xr(),M.el=null,L){const I=m(x);for(;;){const X=s(x);if(X&&X!==I)a(X);else break}}const T=s(x),S=o(x);return a(x),t(null,M,S,T,w,R,so(S),C),w&&(w.vnode.el=M.el,Oa(w,M.el)),T},m=(x,M="[",w="]")=>{let R=0;for(;x;)if(x=s(x),x&&Br(x)&&(x.data===M&&R++,x.data===w)){if(R===0)return s(x);R--}return x},p=(x,M,w)=>{const R=M.parentNode;R&&R.replaceChild(x,M);let C=w;for(;C;)C.vnode.el===M&&(C.vnode.el=C.subTree.el=x),C=C.parent},A=x=>x.nodeType===1&&x.tagName==="TEMPLATE";return[u,f]}const Of="data-allow-mismatch",G_={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function oo(n,e){if(e===0||e===1)for(;n&&!n.hasAttribute(Of);)n=n.parentElement;const t=n&&n.getAttribute(Of);if(t==null)return!1;if(t==="")return!0;{const i=t.split(",");return e===0&&i.includes("children")?!0:t.split(",").includes(G_[e])}}Ca().requestIdleCallback;Ca().cancelIdleCallback;function W_(n,e){if(Br(n)&&n.data==="["){let t=1,i=n.nextSibling;for(;i;){if(i.nodeType===1){if(e(i)===!1)break}else if(Br(i))if(i.data==="]"){if(--t===0)break}else i.data==="["&&t++;i=i.nextSibling}}else e(n)}const sr=n=>!!n.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function sa(n){Ue(n)&&(n={loader:n});const{loader:e,loadingComponent:t,errorComponent:i,delay:r=200,hydrate:s,timeout:o,suspensible:a=!0,onError:l}=n;let c=null,u,f=0;const h=()=>(f++,c=null,d()),d=()=>{let g;return c||(g=c=e().catch(_=>{if(_=_ instanceof Error?_:new Error(String(_)),l)return new Promise((m,p)=>{l(_,()=>m(h()),()=>p(_),f+1)});throw _}).then(_=>g!==c&&c?c:(_&&(_.__esModule||_[Symbol.toStringTag]==="Module")&&(_=_.default),u=_,_)))};return Ft({name:"AsyncComponentWrapper",__asyncLoader:d,__asyncHydrate(g,_,m){const p=s?()=>{const A=s(m,x=>W_(g,x));A&&(_.bum||(_.bum=[])).push(A)}:m;u?p():d().then(()=>!_.isUnmounted&&p())},get __asyncResolved(){return u},setup(){const g=Rt;if(Du(g),u)return()=>rl(u,g);const _=x=>{c=null,us(x,g,13,!i)};if(a&&g.suspense||ts)return d().then(x=>()=>rl(x,g)).catch(x=>(_(x),()=>i?Ke(i,{error:x}):null));const m=Xe(!1),p=Xe(),A=Xe(!!r);return r&&setTimeout(()=>{A.value=!1},r),o!=null&&setTimeout(()=>{if(!m.value&&!p.value){const x=new Error(`Async component timed out after ${o}ms.`);_(x),p.value=x}},o),d().then(()=>{m.value=!0,g.parent&&Uu(g.parent.vnode)&&g.parent.update()}).catch(x=>{_(x),p.value=x}),()=>{if(m.value&&u)return rl(u,g);if(p.value&&i)return Ke(i,{error:p.value});if(t&&!A.value)return Ke(t)}}})}function rl(n,e){const{ref:t,props:i,children:r,ce:s}=e.vnode,o=Ke(n,i,r);return o.ref=t,o.ce=s,delete e.vnode.ce,o}const Uu=n=>n.type.__isKeepAlive;function Tp(n,e){Ap(n,"a",e)}function wp(n,e){Ap(n,"da",e)}function Ap(n,e,t=Rt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Ua(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Uu(r.parent.vnode)&&X_(i,e,t,r),r=r.parent}}function X_(n,e,t,i){const r=Ua(e,n,i,!0);Fu(()=>{yu(i[e],r)},t)}function Ua(n,e,t=Rt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{Di();const a=Ks(t),l=Hn(e,t,n,o);return a(),Ui(),l});return i?r.unshift(s):r.push(s),s}}const ui=n=>(e,t=Rt)=>{(!ts||n==="sp")&&Ua(n,(...i)=>e(...i),t)},$_=ui("bm"),yn=ui("m"),Nu=ui("bu"),Rp=ui("u"),qs=ui("bum"),Fu=ui("um"),j_=ui("sp"),q_=ui("rtg"),Y_=ui("rtc");function Cp(n,e=Rt){Ua("ec",n,e)}const Pp="components";function CC(n,e){return Lp(Pp,n,!0,e)||n}const Ip=Symbol.for("v-ndc");function K_(n){return xt(n)?Lp(Pp,n,!1)||n:n||Ip}function Lp(n,e,t=!0,i=!1){const r=Ut||Rt;if(r){const s=r.type;{const a=Hv(s,!1);if(a&&(a===e||a===xn(e)||a===Ra(xn(e))))return s}const o=Bf(r[n]||s[n],e)||Bf(r.appContext[n],e);return!o&&i?s:o}}function Bf(n,e){return n&&(n[e]||n[xn(e)]||n[Ra(xn(e))])}function Ou(n,e,t,i){let r;const s=t,o=Oe(n);if(o||xt(n)){const a=o&&rr(n);let l=!1;a&&(l=!_n(n),n=La(n)),r=new Array(n.length);for(let c=0,u=n.length;c<u;c++)r[c]=e(l?zt(n[c]):n[c],c,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(gt(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}function Na(n,e,t={},i,r){if(Ut.ce||Ut.parent&&sr(Ut.parent)&&Ut.parent.ce)return tt(),wn(At,null,[Ke("slot",t,i&&i())],64);let s=n[e];s&&s._c&&(s._d=!1),tt();const o=s&&Dp(s(t)),a=t.key||o&&o.key,l=wn(At,{key:(a&&!ci(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||(i?i():[]),o&&n._===1?64:-2);return s&&s._c&&(s._d=!0),l}function Dp(n){return n.some(e=>Qr(e)?!(e.type===Dn||e.type===At&&!Dp(e.children)):!0)?n:null}const nc=n=>n?om(n)?Gu(n):nc(n.parent):null,Is=Lt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>nc(n.parent),$root:n=>nc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Bu(n),$forceUpdate:n=>n.f||(n.f=()=>{Iu(n.update)}),$nextTick:n=>n.n||(n.n=Da.bind(n.proxy)),$watch:n=>gv.bind(n)}),sl=(n,e)=>n!==mt&&!n.__isScriptSetup&&at(n,e),Z_={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(sl(i,e))return o[e]=1,i[e];if(r!==mt&&at(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&at(c,e))return o[e]=3,s[e];if(t!==mt&&at(t,e))return o[e]=4,t[e];ic&&(o[e]=0)}}const u=Is[e];let f,h;if(u)return e==="$attrs"&&Ht(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==mt&&at(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,at(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return sl(r,e)?(r[e]=t,!0):i!==mt&&at(i,e)?(i[e]=t,!0):at(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==mt&&at(n,o)||sl(e,o)||(a=s[0])&&at(a,o)||at(i,o)||at(Is,o)||at(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:at(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function kf(n){return Oe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let ic=!0;function J_(n){const e=Bu(n),t=n.proxy,i=n.ctx;ic=!1,e.beforeCreate&&Hf(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:A,destroyed:x,unmounted:M,render:w,renderTracked:R,renderTriggered:C,errorCaptured:L,serverPrefetch:T,expose:S,inheritAttrs:I,components:X,directives:z,filters:Z}=e;if(c&&Q_(c,i,null),o)for(const ee in o){const N=o[ee];Ue(N)&&(i[ee]=N.bind(t))}if(r){const ee=r.call(t,t);gt(ee)&&(n.data=Ci(ee))}if(ic=!0,s)for(const ee in s){const N=s[ee],ue=Ue(N)?N.bind(t,t):Ue(N.get)?N.get.bind(t,t):Pn,ve=!Ue(N)&&Ue(N.set)?N.set.bind(t):Pn,Ee=Vt({get:ue,set:ve});Object.defineProperty(i,ee,{enumerable:!0,configurable:!0,get:()=>Ee.value,set:Ie=>Ee.value=Ie})}if(a)for(const ee in a)Up(a[ee],i,t,ee);if(l){const ee=Ue(l)?l.call(t):l;Reflect.ownKeys(ee).forEach(N=>{ku(N,ee[N])})}u&&Hf(u,n,"c");function k(ee,N){Oe(N)?N.forEach(ue=>ee(ue.bind(t))):N&&ee(N.bind(t))}if(k($_,f),k(yn,h),k(Nu,d),k(Rp,g),k(Tp,_),k(wp,m),k(Cp,L),k(Y_,R),k(q_,C),k(qs,A),k(Fu,M),k(j_,T),Oe(S))if(S.length){const ee=n.exposed||(n.exposed={});S.forEach(N=>{Object.defineProperty(ee,N,{get:()=>t[N],set:ue=>t[N]=ue})})}else n.exposed||(n.exposed={});w&&n.render===Pn&&(n.render=w),I!=null&&(n.inheritAttrs=I),X&&(n.components=X),z&&(n.directives=z),T&&Du(n)}function Q_(n,e,t=Pn){Oe(n)&&(n=rc(n));for(const i in n){const r=n[i];let s;gt(r)?"default"in r?s=$r(r.from||i,r.default,!0):s=$r(r.from||i):s=$r(r),Tt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Hf(n,e,t){Hn(Oe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Up(n,e,t,i){let r=i.includes(".")?Zp(t,i):()=>t[i];if(xt(n)){const s=e[n];Ue(s)&&Nt(r,s)}else if(Ue(n))Nt(r,n.bind(t));else if(gt(n))if(Oe(n))n.forEach(s=>Up(s,e,t,i));else{const s=Ue(n.handler)?n.handler.bind(t):e[n.handler];Ue(s)&&Nt(r,s,n)}}function Bu(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>oa(l,c,o,!0)),oa(l,e,o)),gt(e)&&s.set(e,l),l}function oa(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&oa(n,s,t,!0),r&&r.forEach(o=>oa(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=ev[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const ev={data:zf,props:Vf,emits:Vf,methods:As,computed:As,beforeCreate:jt,created:jt,beforeMount:jt,mounted:jt,beforeUpdate:jt,updated:jt,beforeDestroy:jt,beforeUnmount:jt,destroyed:jt,unmounted:jt,activated:jt,deactivated:jt,errorCaptured:jt,serverPrefetch:jt,components:As,directives:As,watch:nv,provide:zf,inject:tv};function zf(n,e){return e?n?function(){return Lt(Ue(n)?n.call(this,this):n,Ue(e)?e.call(this,this):e)}:e:n}function tv(n,e){return As(rc(n),rc(e))}function rc(n){if(Oe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function jt(n,e){return n?[...new Set([].concat(n,e))]:e}function As(n,e){return n?Lt(Object.create(null),n,e):e}function Vf(n,e){return n?Oe(n)&&Oe(e)?[...new Set([...n,...e])]:Lt(Object.create(null),kf(n),kf(e??{})):e}function nv(n,e){if(!n)return e;if(!e)return n;const t=Lt(Object.create(null),n);for(const i in e)t[i]=jt(n[i],e[i]);return t}function Np(){return{app:null,config:{isNativeTag:Wg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let iv=0;function rv(n,e){return function(i,r=null){Ue(i)||(i=Lt({},i)),r!=null&&!gt(r)&&(r=null);const s=Np(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:iv++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:lm,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&Ue(u.install)?(o.add(u),u.install(c,...f)):Ue(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||Ke(i,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),f&&e?e(d,u):n(d,u,h),l=!0,c._container=u,u.__vue_app__=c,Gu(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Hn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=or;or=c;try{return u()}finally{or=f}}};return c}}let or=null;function ku(n,e){if(Rt){let t=Rt.provides;const i=Rt.parent&&Rt.parent.provides;i===t&&(t=Rt.provides=Object.create(i)),t[n]=e}}function $r(n,e,t=!1){const i=Rt||Ut;if(i||or){const r=or?or._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ue(e)?e.call(i&&i.proxy):e}}function Fp(){return!!(Rt||Ut||or)}const Op={},Bp=()=>Object.create(Op),kp=n=>Object.getPrototypeOf(n)===Op;function sv(n,e,t,i=!1){const r={},s=Bp();n.propsDefaults=Object.create(null),Hp(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:Or(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function ov(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=nt(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Fa(n.emitsOptions,h))continue;const d=e[h];if(l)if(at(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const g=xn(h);r[g]=sc(l,a,g,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{Hp(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!at(e,f)&&((u=dr(f))===f||!at(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=sc(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!at(e,f))&&(delete s[f],c=!0)}c&&Qn(n.attrs,"set","")}function Hp(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Wr(l))continue;const c=e[l];let u;r&&at(r,u=xn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Fa(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=nt(t),c=a||mt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=sc(r,l,f,c[f],n,!at(c,f))}}return o}function sc(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=at(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ue(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=Ks(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===dr(t))&&(i=!0))}return i}const av=new WeakMap;function zp(n,e,t=!1){const i=t?av:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Ue(n)){const u=f=>{l=!0;const[h,d]=zp(f,e,!0);Lt(o,h),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return gt(n)&&i.set(n,Vr),Vr;if(Oe(s))for(let u=0;u<s.length;u++){const f=xn(s[u]);Gf(f)&&(o[f]=mt)}else if(s)for(const u in s){const f=xn(u);if(Gf(f)){const h=s[u],d=o[f]=Oe(h)||Ue(h)?{type:h}:Lt({},h),g=d.type;let _=!1,m=!0;if(Oe(g))for(let p=0;p<g.length;++p){const A=g[p],x=Ue(A)&&A.name;if(x==="Boolean"){_=!0;break}else x==="String"&&(m=!1)}else _=Ue(g)&&g.name==="Boolean";d[0]=_,d[1]=m,(_||at(d,"default"))&&a.push(f)}}const c=[o,a];return gt(n)&&i.set(n,c),c}function Gf(n){return n[0]!=="$"&&!Wr(n)}const Vp=n=>n[0]==="_"||n==="$stable",Hu=n=>Oe(n)?n.map(an):[an(n)],lv=(n,e,t)=>{if(e._n)return e;const i=Zr((...r)=>Hu(e(...r)),t);return i._c=!1,i},Gp=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Vp(r))continue;const s=n[r];if(Ue(s))e[r]=lv(r,s,i);else if(s!=null){const o=Hu(s);e[r]=()=>o}}},Wp=(n,e)=>{const t=Hu(e);n.slots.default=()=>t},Xp=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},cv=(n,e,t)=>{const i=n.slots=Bp();if(n.vnode.shapeFlag&32){const r=e._;r?(Xp(i,e,t),t&&Qd(i,"_",r,!0)):Gp(e,i)}else e&&Wp(n,e)},uv=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=mt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:Xp(r,e,t):(s=!e.$stable,Gp(e,r)),o=e}else e&&(Wp(n,e),o={default:1});if(s)for(const a in r)!Vp(a)&&o[a]==null&&delete r[a]},on=tm;function fv(n){return $p(n)}function hv(n){return $p(n,V_)}function $p(n,e){const t=Ca();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=Pn,insertStaticContent:g}=n,_=(P,y,q,J=null,Y=null,W=null,se=void 0,K=null,b=!!y.dynamicChildren)=>{if(P===y)return;P&&!bi(P,y)&&(J=he(P),Ie(P,Y,W,!0),P=null),y.patchFlag===-2&&(b=!1,y.dynamicChildren=null);const{type:v,ref:D,shapeFlag:O}=y;switch(v){case ar:m(P,y,q,J);break;case Dn:p(P,y,q,J);break;case Ls:P==null&&A(y,q,J,se);break;case At:X(P,y,q,J,Y,W,se,K,b);break;default:O&1?w(P,y,q,J,Y,W,se,K,b):O&6?z(P,y,q,J,Y,W,se,K,b):(O&64||O&128)&&v.process(P,y,q,J,Y,W,se,K,b,Be)}D!=null&&Y&&Hs(D,P&&P.ref,W,y||P,!y)},m=(P,y,q,J)=>{if(P==null)i(y.el=a(y.children),q,J);else{const Y=y.el=P.el;y.children!==P.children&&c(Y,y.children)}},p=(P,y,q,J)=>{P==null?i(y.el=l(y.children||""),q,J):y.el=P.el},A=(P,y,q,J)=>{[P.el,P.anchor]=g(P.children,y,q,J,P.el,P.anchor)},x=({el:P,anchor:y},q,J)=>{let Y;for(;P&&P!==y;)Y=h(P),i(P,q,J),P=Y;i(y,q,J)},M=({el:P,anchor:y})=>{let q;for(;P&&P!==y;)q=h(P),r(P),P=q;r(y)},w=(P,y,q,J,Y,W,se,K,b)=>{y.type==="svg"?se="svg":y.type==="math"&&(se="mathml"),P==null?R(y,q,J,Y,W,se,K,b):T(P,y,Y,W,se,K,b)},R=(P,y,q,J,Y,W,se,K)=>{let b,v;const{props:D,shapeFlag:O,transition:G,dirs:V}=P;if(b=P.el=o(P.type,W,D&&D.is,D),O&8?u(b,P.children):O&16&&L(P.children,b,null,J,Y,ol(P,W),se,K),V&&Fn(P,null,J,"created"),C(b,P,P.scopeId,se,J),D){for(const oe in D)oe!=="value"&&!Wr(oe)&&s(b,oe,null,D[oe],W,J);"value"in D&&s(b,"value",null,D.value,W),(v=D.onVnodeBeforeMount)&&dn(v,J,P)}V&&Fn(P,null,J,"beforeMount");const le=jp(Y,G);le&&G.beforeEnter(b),i(b,y,q),((v=D&&D.onVnodeMounted)||le||V)&&on(()=>{v&&dn(v,J,P),le&&G.enter(b),V&&Fn(P,null,J,"mounted")},Y)},C=(P,y,q,J,Y)=>{if(q&&d(P,q),J)for(let W=0;W<J.length;W++)d(P,J[W]);if(Y){let W=Y.subTree;if(y===W||Qp(W.type)&&(W.ssContent===y||W.ssFallback===y)){const se=Y.vnode;C(P,se,se.scopeId,se.slotScopeIds,Y.parent)}}},L=(P,y,q,J,Y,W,se,K,b=0)=>{for(let v=b;v<P.length;v++){const D=P[v]=K?yi(P[v]):an(P[v]);_(null,D,y,q,J,Y,W,se,K)}},T=(P,y,q,J,Y,W,se)=>{const K=y.el=P.el;let{patchFlag:b,dynamicChildren:v,dirs:D}=y;b|=P.patchFlag&16;const O=P.props||mt,G=y.props||mt;let V;if(q&&Hi(q,!1),(V=G.onVnodeBeforeUpdate)&&dn(V,q,y,P),D&&Fn(y,P,q,"beforeUpdate"),q&&Hi(q,!0),(O.innerHTML&&G.innerHTML==null||O.textContent&&G.textContent==null)&&u(K,""),v?S(P.dynamicChildren,v,K,q,J,ol(y,Y),W):se||N(P,y,K,null,q,J,ol(y,Y),W,!1),b>0){if(b&16)I(K,O,G,q,Y);else if(b&2&&O.class!==G.class&&s(K,"class",null,G.class,Y),b&4&&s(K,"style",O.style,G.style,Y),b&8){const le=y.dynamicProps;for(let oe=0;oe<le.length;oe++){const ae=le[oe],De=O[ae],re=G[ae];(re!==De||ae==="value")&&s(K,ae,De,re,Y,q)}}b&1&&P.children!==y.children&&u(K,y.children)}else!se&&v==null&&I(K,O,G,q,Y);((V=G.onVnodeUpdated)||D)&&on(()=>{V&&dn(V,q,y,P),D&&Fn(y,P,q,"updated")},J)},S=(P,y,q,J,Y,W,se)=>{for(let K=0;K<y.length;K++){const b=P[K],v=y[K],D=b.el&&(b.type===At||!bi(b,v)||b.shapeFlag&70)?f(b.el):q;_(b,v,D,null,J,Y,W,se,!0)}},I=(P,y,q,J,Y)=>{if(y!==q){if(y!==mt)for(const W in y)!Wr(W)&&!(W in q)&&s(P,W,y[W],null,Y,J);for(const W in q){if(Wr(W))continue;const se=q[W],K=y[W];se!==K&&W!=="value"&&s(P,W,K,se,Y,J)}"value"in q&&s(P,"value",y.value,q.value,Y)}},X=(P,y,q,J,Y,W,se,K,b)=>{const v=y.el=P?P.el:a(""),D=y.anchor=P?P.anchor:a("");let{patchFlag:O,dynamicChildren:G,slotScopeIds:V}=y;V&&(K=K?K.concat(V):V),P==null?(i(v,q,J),i(D,q,J),L(y.children||[],q,D,Y,W,se,K,b)):O>0&&O&64&&G&&P.dynamicChildren?(S(P.dynamicChildren,G,q,Y,W,se,K),(y.key!=null||Y&&y===Y.subTree)&&qp(P,y,!0)):N(P,y,q,D,Y,W,se,K,b)},z=(P,y,q,J,Y,W,se,K,b)=>{y.slotScopeIds=K,P==null?y.shapeFlag&512?Y.ctx.activate(y,q,J,se,b):Z(y,q,J,Y,W,se,b):te(P,y,b)},Z=(P,y,q,J,Y,W,se)=>{const K=P.component=Nv(P,J,Y);if(Uu(P)&&(K.ctx.renderer=Be),Fv(K,!1,se),K.asyncDep){if(Y&&Y.registerDep(K,k,se),!P.el){const b=K.subTree=Ke(Dn);p(null,b,y,q)}}else k(K,P,y,q,Y,W,se)},te=(P,y,q)=>{const J=y.component=P.component;if(Sv(P,y,q))if(J.asyncDep&&!J.asyncResolved){ee(J,y,q);return}else J.next=y,J.update();else y.el=P.el,J.vnode=y},k=(P,y,q,J,Y,W,se)=>{const K=()=>{if(P.isMounted){let{next:O,bu:G,u:V,parent:le,vnode:oe}=P;{const be=Yp(P);if(be){O&&(O.el=oe.el,ee(P,O,se)),be.asyncDep.then(()=>{P.isUnmounted||K()});return}}let ae=O,De;Hi(P,!1),O?(O.el=oe.el,ee(P,O,se)):O=oe,G&&Qa(G),(De=O.props&&O.props.onVnodeBeforeUpdate)&&dn(De,le,O,oe),Hi(P,!0);const re=al(P),de=P.subTree;P.subTree=re,_(de,re,f(de.el),he(de),P,Y,W),O.el=re.el,ae===null&&Oa(P,re.el),V&&on(V,Y),(De=O.props&&O.props.onVnodeUpdated)&&on(()=>dn(De,le,O,oe),Y)}else{let O;const{el:G,props:V}=y,{bm:le,m:oe,parent:ae,root:De,type:re}=P,de=sr(y);if(Hi(P,!1),le&&Qa(le),!de&&(O=V&&V.onVnodeBeforeMount)&&dn(O,ae,y),Hi(P,!0),G&&je){const be=()=>{P.subTree=al(P),je(G,P.subTree,P,Y,null)};de&&re.__asyncHydrate?re.__asyncHydrate(G,P,be):be()}else{De.ce&&De.ce._injectChildStyle(re);const be=P.subTree=al(P);_(null,be,q,J,P,Y,W),y.el=be.el}if(oe&&on(oe,Y),!de&&(O=V&&V.onVnodeMounted)){const be=y;on(()=>dn(O,ae,be),Y)}(y.shapeFlag&256||ae&&sr(ae.vnode)&&ae.vnode.shapeFlag&256)&&P.a&&on(P.a,Y),P.isMounted=!0,y=q=J=null}};P.scope.on();const b=P.effect=new rp(K);P.scope.off();const v=P.update=b.run.bind(b),D=P.job=b.runIfDirty.bind(b);D.i=P,D.id=P.uid,b.scheduler=()=>Iu(D),Hi(P,!0),v()},ee=(P,y,q)=>{y.component=P;const J=P.vnode.props;P.vnode=y,P.next=null,ov(P,y.props,J,q),uv(P,y.children,q),Di(),Nf(P),Ui()},N=(P,y,q,J,Y,W,se,K,b=!1)=>{const v=P&&P.children,D=P?P.shapeFlag:0,O=y.children,{patchFlag:G,shapeFlag:V}=y;if(G>0){if(G&128){ve(v,O,q,J,Y,W,se,K,b);return}else if(G&256){ue(v,O,q,J,Y,W,se,K,b);return}}V&8?(D&16&&Se(v,Y,W),O!==v&&u(q,O)):D&16?V&16?ve(v,O,q,J,Y,W,se,K,b):Se(v,Y,W,!0):(D&8&&u(q,""),V&16&&L(O,q,J,Y,W,se,K,b))},ue=(P,y,q,J,Y,W,se,K,b)=>{P=P||Vr,y=y||Vr;const v=P.length,D=y.length,O=Math.min(v,D);let G;for(G=0;G<O;G++){const V=y[G]=b?yi(y[G]):an(y[G]);_(P[G],V,q,null,Y,W,se,K,b)}v>D?Se(P,Y,W,!0,!1,O):L(y,q,J,Y,W,se,K,b,O)},ve=(P,y,q,J,Y,W,se,K,b)=>{let v=0;const D=y.length;let O=P.length-1,G=D-1;for(;v<=O&&v<=G;){const V=P[v],le=y[v]=b?yi(y[v]):an(y[v]);if(bi(V,le))_(V,le,q,null,Y,W,se,K,b);else break;v++}for(;v<=O&&v<=G;){const V=P[O],le=y[G]=b?yi(y[G]):an(y[G]);if(bi(V,le))_(V,le,q,null,Y,W,se,K,b);else break;O--,G--}if(v>O){if(v<=G){const V=G+1,le=V<D?y[V].el:J;for(;v<=G;)_(null,y[v]=b?yi(y[v]):an(y[v]),q,le,Y,W,se,K,b),v++}}else if(v>G)for(;v<=O;)Ie(P[v],Y,W,!0),v++;else{const V=v,le=v,oe=new Map;for(v=le;v<=G;v++){const Le=y[v]=b?yi(y[v]):an(y[v]);Le.key!=null&&oe.set(Le.key,v)}let ae,De=0;const re=G-le+1;let de=!1,be=0;const Re=new Array(re);for(v=0;v<re;v++)Re[v]=0;for(v=V;v<=O;v++){const Le=P[v];if(De>=re){Ie(Le,Y,W,!0);continue}let Ce;if(Le.key!=null)Ce=oe.get(Le.key);else for(ae=le;ae<=G;ae++)if(Re[ae-le]===0&&bi(Le,y[ae])){Ce=ae;break}Ce===void 0?Ie(Le,Y,W,!0):(Re[Ce-le]=v+1,Ce>=be?be=Ce:de=!0,_(Le,y[Ce],q,null,Y,W,se,K,b),De++)}const ye=de?dv(Re):Vr;for(ae=ye.length-1,v=re-1;v>=0;v--){const Le=le+v,Ce=y[Le],lt=Le+1<D?y[Le+1].el:J;Re[v]===0?_(null,Ce,q,lt,Y,W,se,K,b):de&&(ae<0||v!==ye[ae]?Ee(Ce,q,lt,2):ae--)}}},Ee=(P,y,q,J,Y=null)=>{const{el:W,type:se,transition:K,children:b,shapeFlag:v}=P;if(v&6){Ee(P.component.subTree,y,q,J);return}if(v&128){P.suspense.move(y,q,J);return}if(v&64){se.move(P,y,q,Be);return}if(se===At){i(W,y,q);for(let O=0;O<b.length;O++)Ee(b[O],y,q,J);i(P.anchor,y,q);return}if(se===Ls){x(P,y,q);return}if(J!==2&&v&1&&K)if(J===0)K.beforeEnter(W),i(W,y,q),on(()=>K.enter(W),Y);else{const{leave:O,delayLeave:G,afterLeave:V}=K,le=()=>i(W,y,q),oe=()=>{O(W,()=>{le(),V&&V()})};G?G(W,le,oe):oe()}else i(W,y,q)},Ie=(P,y,q,J=!1,Y=!1)=>{const{type:W,props:se,ref:K,children:b,dynamicChildren:v,shapeFlag:D,patchFlag:O,dirs:G,cacheIndex:V}=P;if(O===-2&&(Y=!1),K!=null&&Hs(K,null,q,P,!0),V!=null&&(y.renderCache[V]=void 0),D&256){y.ctx.deactivate(P);return}const le=D&1&&G,oe=!sr(P);let ae;if(oe&&(ae=se&&se.onVnodeBeforeUnmount)&&dn(ae,y,P),D&6)fe(P.component,q,J);else{if(D&128){P.suspense.unmount(q,J);return}le&&Fn(P,null,y,"beforeUnmount"),D&64?P.type.remove(P,y,q,Be,J):v&&!v.hasOnce&&(W!==At||O>0&&O&64)?Se(v,y,q,!1,!0):(W===At&&O&384||!Y&&D&16)&&Se(b,y,q),J&&rt(P)}(oe&&(ae=se&&se.onVnodeUnmounted)||le)&&on(()=>{ae&&dn(ae,y,P),le&&Fn(P,null,y,"unmounted")},q)},rt=P=>{const{type:y,el:q,anchor:J,transition:Y}=P;if(y===At){ne(q,J);return}if(y===Ls){M(P);return}const W=()=>{r(q),Y&&!Y.persisted&&Y.afterLeave&&Y.afterLeave()};if(P.shapeFlag&1&&Y&&!Y.persisted){const{leave:se,delayLeave:K}=Y,b=()=>se(q,W);K?K(P.el,W,b):b()}else W()},ne=(P,y)=>{let q;for(;P!==y;)q=h(P),r(P),P=q;r(y)},fe=(P,y,q)=>{const{bum:J,scope:Y,job:W,subTree:se,um:K,m:b,a:v}=P;Wf(b),Wf(v),J&&Qa(J),Y.stop(),W&&(W.flags|=8,Ie(se,P,y,q)),K&&on(K,y),on(()=>{P.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&P.asyncDep&&!P.asyncResolved&&P.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},Se=(P,y,q,J=!1,Y=!1,W=0)=>{for(let se=W;se<P.length;se++)Ie(P[se],y,q,J,Y)},he=P=>{if(P.shapeFlag&6)return he(P.component.subTree);if(P.shapeFlag&128)return P.suspense.next();const y=h(P.anchor||P.el),q=y&&y[B_];return q?h(q):y};let Ae=!1;const Ne=(P,y,q)=>{P==null?y._vnode&&Ie(y._vnode,null,null,!0):_(y._vnode||null,P,y,null,null,null,q),y._vnode=P,Ae||(Ae=!0,Nf(),ia(),Ae=!1)},Be={p:_,um:Ie,m:Ee,r:rt,mt:Z,mc:L,pc:N,pbc:S,n:he,o:n};let dt,je;return e&&([dt,je]=e(Be)),{render:Ne,hydrate:dt,createApp:rv(Ne,dt)}}function ol({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Hi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function jp(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function qp(n,e,t=!1){const i=n.children,r=e.children;if(Oe(i)&&Oe(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=yi(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&qp(o,a)),a.type===ar&&(a.el=o.el)}}function dv(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Yp(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Yp(e)}function Wf(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const pv=Symbol.for("v-scx"),mv=()=>$r(pv);function Kp(n,e){return zu(n,null,e)}function Nt(n,e,t){return zu(n,e,t)}function zu(n,e,t=mt){const{immediate:i,deep:r,flush:s,once:o}=t,a=Lt({},t),l=e&&i||!e&&s!=="post";let c;if(ts){if(s==="sync"){const d=mv();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Pn,d.resume=Pn,d.pause=Pn,d}}const u=Rt;a.call=(d,g,_)=>Hn(d,u,g,_);let f=!1;s==="post"?a.scheduler=d=>{on(d,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(d,g)=>{g?d():Iu(d)}),a.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=N_(n,e,a);return ts&&(c?c.push(h):l&&h()),h}function gv(n,e,t){const i=this.proxy,r=xt(n)?n.includes(".")?Zp(i,n):()=>i[n]:n.bind(i,i);let s;Ue(e)?s=e:(s=e.handler,t=e);const o=Ks(this),a=zu(r,s.bind(i),t);return o(),a}function Zp(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const _v=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${xn(e)}Modifiers`]||n[`${dr(e)}Modifiers`];function vv(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||mt;let r=t;const s=e.startsWith("update:"),o=s&&_v(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>xt(u)?u.trim():u)),o.number&&(r=t.map(Yg)));let a,l=i[a=Ja(e)]||i[a=Ja(xn(e))];!l&&s&&(l=i[a=Ja(dr(e))]),l&&Hn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Hn(c,n,6,r)}}function Jp(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Ue(n)){const l=c=>{const u=Jp(c,e,!0);u&&(a=!0,Lt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(gt(n)&&i.set(n,null),null):(Oe(s)?s.forEach(l=>o[l]=null):Lt(o,s),gt(n)&&i.set(n,o),o)}function Fa(n,e){return!n||!Xs(e)?!1:(e=e.slice(2).replace(/Once$/,""),at(n,e[0].toLowerCase()+e.slice(1))||at(n,dr(e))||at(n,e))}function al(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:g,inheritAttrs:_}=n,m=ra(n);let p,A;try{if(t.shapeFlag&4){const M=r||i,w=M;p=an(c.call(w,M,u,f,d,h,g)),A=a}else{const M=e;p=an(M.length>1?M(f,{attrs:a,slots:o,emit:l}):M(f,null)),A=e.props?a:yv(a)}}catch(M){Ds.length=0,us(M,n,1),p=Ke(Dn)}let x=p;if(A&&_!==!1){const M=Object.keys(A),{shapeFlag:w}=x;M.length&&w&7&&(s&&M.some(xu)&&(A=Mv(A,s)),x=es(x,A,!1,!0))}return t.dirs&&(x=es(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition&&Lu(x,t.transition),p=x,ra(m),p}function xv(n,e=!0){let t;for(let i=0;i<n.length;i++){const r=n[i];if(Qr(r)){if(r.type!==Dn||r.children==="v-if"){if(t)return;t=r}}else return}return t}const yv=n=>{let e;for(const t in n)(t==="class"||t==="style"||Xs(t))&&((e||(e={}))[t]=n[t]);return e},Mv=(n,e)=>{const t={};for(const i in n)(!xu(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Sv(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Xf(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!Fa(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Xf(i,o,c):!0:!!o;return!1}function Xf(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Fa(t,s))return!0}return!1}function Oa({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Qp=n=>n.__isSuspense;let oc=0;const bv={name:"Suspense",__isSuspense:!0,process(n,e,t,i,r,s,o,a,l,c){if(n==null)Tv(e,t,i,r,s,o,a,l,c);else{if(s&&s.deps>0&&!n.suspense.isInFallback){e.suspense=n.suspense,e.suspense.vnode=e,e.el=n.el;return}wv(n,e,t,i,r,o,a,l,c)}},hydrate:Av,normalize:Rv},Ev=bv;function zs(n,e){const t=n.props&&n.props[e];Ue(t)&&t()}function Tv(n,e,t,i,r,s,o,a,l){const{p:c,o:{createElement:u}}=l,f=u("div"),h=n.suspense=em(n,r,i,e,f,t,s,o,a,l);c(null,h.pendingBranch=n.ssContent,f,null,i,h,s,o),h.deps>0?(zs(n,"onPending"),zs(n,"onFallback"),c(null,n.ssFallback,e,t,i,null,s,o),jr(h,n.ssFallback)):h.resolve(!1,!0)}function wv(n,e,t,i,r,s,o,a,{p:l,um:c,o:{createElement:u}}){const f=e.suspense=n.suspense;f.vnode=e,e.el=n.el;const h=e.ssContent,d=e.ssFallback,{activeBranch:g,pendingBranch:_,isInFallback:m,isHydrating:p}=f;if(_)f.pendingBranch=h,bi(h,_)?(l(_,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0?f.resolve():m&&(p||(l(g,d,t,i,r,null,s,o,a),jr(f,d)))):(f.pendingId=oc++,p?(f.isHydrating=!1,f.activeBranch=_):c(_,r,f),f.deps=0,f.effects.length=0,f.hiddenContainer=u("div"),m?(l(null,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0?f.resolve():(l(g,d,t,i,r,null,s,o,a),jr(f,d))):g&&bi(h,g)?(l(g,h,t,i,r,f,s,o,a),f.resolve(!0)):(l(null,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0&&f.resolve()));else if(g&&bi(h,g))l(g,h,t,i,r,f,s,o,a),jr(f,h);else if(zs(e,"onPending"),f.pendingBranch=h,h.shapeFlag&512?f.pendingId=h.component.suspenseId:f.pendingId=oc++,l(null,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0)f.resolve();else{const{timeout:A,pendingId:x}=f;A>0?setTimeout(()=>{f.pendingId===x&&f.fallback(d)},A):A===0&&f.fallback(d)}}function em(n,e,t,i,r,s,o,a,l,c,u=!1){const{p:f,m:h,um:d,n:g,o:{parentNode:_,remove:m}}=c;let p;const A=Cv(n);A&&e&&e.pendingBranch&&(p=e.pendingId,e.deps++);const x=n.props?Kg(n.props.timeout):void 0,M=s,w={vnode:n,parent:e,parentComponent:t,namespace:o,container:i,hiddenContainer:r,deps:0,pendingId:oc++,timeout:typeof x=="number"?x:-1,activeBranch:null,pendingBranch:null,isInFallback:!u,isHydrating:u,isUnmounted:!1,effects:[],resolve(R=!1,C=!1){const{vnode:L,activeBranch:T,pendingBranch:S,pendingId:I,effects:X,parentComponent:z,container:Z}=w;let te=!1;w.isHydrating?w.isHydrating=!1:R||(te=T&&S.transition&&S.transition.mode==="out-in",te&&(T.transition.afterLeave=()=>{I===w.pendingId&&(h(S,Z,s===M?g(T):s,0),na(X))}),T&&(_(T.el)===Z&&(s=g(T)),d(T,z,w,!0)),te||h(S,Z,s,0)),jr(w,S),w.pendingBranch=null,w.isInFallback=!1;let k=w.parent,ee=!1;for(;k;){if(k.pendingBranch){k.effects.push(...X),ee=!0;break}k=k.parent}!ee&&!te&&na(X),w.effects=[],A&&e&&e.pendingBranch&&p===e.pendingId&&(e.deps--,e.deps===0&&!C&&e.resolve()),zs(L,"onResolve")},fallback(R){if(!w.pendingBranch)return;const{vnode:C,activeBranch:L,parentComponent:T,container:S,namespace:I}=w;zs(C,"onFallback");const X=g(L),z=()=>{w.isInFallback&&(f(null,R,S,X,T,null,I,a,l),jr(w,R))},Z=R.transition&&R.transition.mode==="out-in";Z&&(L.transition.afterLeave=z),w.isInFallback=!0,d(L,T,null,!0),Z||z()},move(R,C,L){w.activeBranch&&h(w.activeBranch,R,C,L),w.container=R},next(){return w.activeBranch&&g(w.activeBranch)},registerDep(R,C,L){const T=!!w.pendingBranch;T&&w.deps++;const S=R.vnode.el;R.asyncDep.catch(I=>{us(I,R,0)}).then(I=>{if(R.isUnmounted||w.isUnmounted||w.pendingId!==R.suspenseId)return;R.asyncResolved=!0;const{vnode:X}=R;lc(R,I,!1),S&&(X.el=S);const z=!S&&R.subTree.el;C(R,X,_(S||R.subTree.el),S?null:g(R.subTree),w,o,L),z&&m(z),Oa(R,X.el),T&&--w.deps===0&&w.resolve()})},unmount(R,C){w.isUnmounted=!0,w.activeBranch&&d(w.activeBranch,t,R,C),w.pendingBranch&&d(w.pendingBranch,t,R,C)}};return w}function Av(n,e,t,i,r,s,o,a,l){const c=e.suspense=em(e,i,t,n.parentNode,document.createElement("div"),null,r,s,o,a,!0),u=l(n,c.pendingBranch=e.ssContent,t,c,s,o);return c.deps===0&&c.resolve(!1,!0),u}function Rv(n){const{shapeFlag:e,children:t}=n,i=e&32;n.ssContent=$f(i?t.default:t),n.ssFallback=i?$f(t.fallback):Ke(Dn)}function $f(n){let e;if(Ue(n)){const t=Jr&&n._c;t&&(n._d=!1,tt()),n=n(),t&&(n._d=!0,e=Qt,nm())}return Oe(n)&&(n=xv(n)),n=an(n),e&&!n.dynamicChildren&&(n.dynamicChildren=e.filter(t=>t!==n)),n}function tm(n,e){e&&e.pendingBranch?Oe(n)?e.effects.push(...n):e.effects.push(n):na(n)}function jr(n,e){n.activeBranch=e;const{vnode:t,parentComponent:i}=n;let r=e.el;for(;!r&&e.component;)e=e.component.subTree,r=e.el;t.el=r,i&&i.subTree===t&&(i.vnode.el=r,Oa(i,r))}function Cv(n){const e=n.props&&n.props.suspensible;return e!=null&&e!==!1}const At=Symbol.for("v-fgt"),ar=Symbol.for("v-txt"),Dn=Symbol.for("v-cmt"),Ls=Symbol.for("v-stc"),Ds=[];let Qt=null;function tt(n=!1){Ds.push(Qt=n?null:[])}function nm(){Ds.pop(),Qt=Ds[Ds.length-1]||null}let Jr=1;function jf(n,e=!1){Jr+=n,n<0&&Qt&&e&&(Qt.hasOnce=!0)}function im(n){return n.dynamicChildren=Jr>0?Qt||Vr:null,nm(),Jr>0&&Qt&&Qt.push(n),n}function St(n,e,t,i,r,s){return im($e(n,e,t,i,r,s,!0))}function wn(n,e,t,i,r){return im(Ke(n,e,t,i,r,!0))}function Qr(n){return n?n.__v_isVNode===!0:!1}function bi(n,e){return n.type===e.type&&n.key===e.key}const rm=({key:n})=>n??null,zo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?xt(n)||Tt(n)||Ue(n)?{i:Ut,r:n,k:e,f:!!t}:n:null);function $e(n,e=null,t=null,i=0,r=null,s=n===At?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&rm(e),ref:e&&zo(e),scopeId:Ep,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ut};return a?(Vu(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=xt(t)?8:16),Jr>0&&!o&&Qt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Qt.push(l),l}const Ke=Pv;function Pv(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Ip)&&(n=Dn),Qr(n)){const a=es(n,e,!0);return t&&Vu(a,t),Jr>0&&!s&&Qt&&(a.shapeFlag&6?Qt[Qt.indexOf(n)]=a:Qt.push(a)),a.patchFlag=-2,a}if(zv(n)&&(n=n.__vccOpts),e){e=sm(e);let{class:a,style:l}=e;a&&!xt(a)&&(e.class=Pa(a)),gt(l)&&(Cu(l)&&!Oe(l)&&(l=Lt({},l)),e.style=$s(l))}const o=xt(n)?1:Qp(n)?128:k_(n)?64:gt(n)?4:Ue(n)?2:0;return $e(n,e,t,i,r,o,s,!0)}function sm(n){return n?Cu(n)||kp(n)?Lt({},n):n:null}function es(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?Lv(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&rm(c),ref:e&&e.ref?t&&s?Oe(s)?s.concat(zo(e)):[s,zo(e)]:zo(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==At?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&es(n.ssContent),ssFallback:n.ssFallback&&es(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Lu(u,l.clone(u)),u}function Ys(n=" ",e=0){return Ke(ar,null,n,e)}function Iv(n="",e=!1){return e?(tt(),wn(Dn,null,n)):Ke(Dn,null,n)}function an(n){return n==null||typeof n=="boolean"?Ke(Dn):Oe(n)?Ke(At,null,n.slice()):Qr(n)?yi(n):Ke(ar,null,String(n))}function yi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:es(n)}function Vu(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Oe(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Vu(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!kp(e)?e._ctx=Ut:r===3&&Ut&&(Ut.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ue(e)?(e={default:e,_ctx:Ut},t=32):(e=String(e),i&64?(t=16,e=[Ys(e)]):t=8);n.children=e,n.shapeFlag|=t}function Lv(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Pa([e.class,i.class]));else if(r==="style")e.style=$s([e.style,i.style]);else if(Xs(r)){const s=e[r],o=i[r];o&&s!==o&&!(Oe(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function dn(n,e,t,i=null){Hn(n,e,7,[t,i])}const Dv=Np();let Uv=0;function Nv(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Dv,s={uid:Uv++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ip(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zp(i,r),emitsOptions:Jp(i,r),emit:null,emitted:null,propsDefaults:mt,inheritAttrs:i.inheritAttrs,ctx:mt,data:mt,props:mt,attrs:mt,slots:mt,refs:mt,setupState:mt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=vv.bind(null,s),n.ce&&n.ce(s),s}let Rt=null;const pr=()=>Rt||Ut;let aa,ac;{const n=Ca(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};aa=e("__VUE_INSTANCE_SETTERS__",t=>Rt=t),ac=e("__VUE_SSR_SETTERS__",t=>ts=t)}const Ks=n=>{const e=Rt;return aa(n),n.scope.on(),()=>{n.scope.off(),aa(e)}},qf=()=>{Rt&&Rt.scope.off(),aa(null)};function om(n){return n.vnode.shapeFlag&4}let ts=!1;function Fv(n,e=!1,t=!1){e&&ac(e);const{props:i,children:r}=n.vnode,s=om(n);sv(n,i,s,e),cv(n,r,t);const o=s?Ov(n,e):void 0;return e&&ac(!1),o}function Ov(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Z_);const{setup:i}=t;if(i){Di();const r=n.setupContext=i.length>1?kv(n):null,s=Ks(n),o=js(i,n,0,[n.props,r]),a=Kd(o);if(Ui(),s(),(a||n.sp)&&!sr(n)&&Du(n),a){if(o.then(qf,qf),e)return o.then(l=>{lc(n,l,e)}).catch(l=>{us(l,n,0)});n.asyncDep=o}else lc(n,o,e)}else am(n,e)}function lc(n,e,t){Ue(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:gt(e)&&(n.setupState=xp(e)),am(n,t)}let Yf;function am(n,e,t){const i=n.type;if(!n.render){if(!e&&Yf&&!i.render){const r=i.template||Bu(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Lt(Lt({isCustomElement:s,delimiters:a},o),l);i.render=Yf(r,c)}}n.render=i.render||Pn}{const r=Ks(n);Di();try{J_(n)}finally{Ui(),r()}}}const Bv={get(n,e){return Ht(n,"get",""),n[e]}};function kv(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Bv),slots:n.slots,emit:n.emit,expose:e}}function Gu(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(xp(T_(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Is)return Is[t](n)},has(e,t){return t in e||t in Is}})):n.proxy}function Hv(n,e=!0){return Ue(n)?n.displayName||n.name:n.name||e&&n.__name}function zv(n){return Ue(n)&&"__vccOpts"in n}const Vt=(n,e)=>Pu(n,e,ts);function cc(n,e,t){const i=arguments.length;return i===2?gt(e)&&!Oe(e)?Qr(e)?Ke(n,null,[e]):Ke(n,e):Ke(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Qr(t)&&(t=[t]),Ke(n,e,t))}const lm="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let uc;const Kf=typeof window<"u"&&window.trustedTypes;if(Kf)try{uc=Kf.createPolicy("vue",{createHTML:n=>n})}catch{}const cm=uc?n=>uc.createHTML(n):n=>n,Vv="http://www.w3.org/2000/svg",Gv="http://www.w3.org/1998/Math/MathML",Jn=typeof document<"u"?document:null,Zf=Jn&&Jn.createElement("template"),Wv={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Jn.createElementNS(Vv,n):e==="mathml"?Jn.createElementNS(Gv,n):t?Jn.createElement(n,{is:t}):Jn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Jn.createTextNode(n),createComment:n=>Jn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Jn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Zf.innerHTML=cm(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Zf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Xv=Symbol("_vtc");function $v(n,e,t){const i=n[Xv];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Jf=Symbol("_vod"),jv=Symbol("_vsh"),um=Symbol("");function Ba(n){const e=pr();if(!e)return;const t=e.ut=(r=n(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(s=>la(s,r))},i=()=>{const r=n(e.proxy);e.ce?la(e.ce,r):fc(e.subTree,r),t(r)};Nu(()=>{na(i)}),yn(()=>{Nt(i,Pn,{flush:"post"});const r=new MutationObserver(i);r.observe(e.subTree.el.parentNode,{childList:!0}),Fu(()=>r.disconnect())})}function fc(n,e){if(n.shapeFlag&128){const t=n.suspense;n=t.activeBranch,t.pendingBranch&&!t.isHydrating&&t.effects.push(()=>{fc(t.activeBranch,e)})}for(;n.component;)n=n.component.subTree;if(n.shapeFlag&1&&n.el)la(n.el,e);else if(n.type===At)n.children.forEach(t=>fc(t,e));else if(n.type===Ls){let{el:t,anchor:i}=n;for(;t&&(la(t,e),t!==i);)t=t.nextSibling}}function la(n,e){if(n.nodeType===1){const t=n.style;let i="";for(const r in e)t.setProperty(`--${r}`,e[r]),i+=`--${r}: ${e[r]};`;t[um]=i}}const qv=/(^|;)\s*display\s*:/;function Yv(n,e,t){const i=n.style,r=xt(t);let s=!1;if(t&&!r){if(e)if(xt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Vo(i,a,"")}else for(const o in e)t[o]==null&&Vo(i,o,"");for(const o in t)o==="display"&&(s=!0),Vo(i,o,t[o])}else if(r){if(e!==t){const o=i[um];o&&(t+=";"+o),i.cssText=t,s=qv.test(t)}}else e&&n.removeAttribute("style");Jf in n&&(n[Jf]=s?i.display:"",n[jv]&&(i.display="none"))}const Qf=/\s*!important$/;function Vo(n,e,t){if(Oe(t))t.forEach(i=>Vo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Kv(n,e);Qf.test(t)?n.setProperty(dr(i),t.replace(Qf,""),"important"):n[i]=t}}const eh=["Webkit","Moz","ms"],ll={};function Kv(n,e){const t=ll[e];if(t)return t;let i=xn(e);if(i!=="filter"&&i in n)return ll[e]=i;i=Ra(i);for(let r=0;r<eh.length;r++){const s=eh[r]+i;if(s in n)return ll[e]=s}return e}const th="http://www.w3.org/1999/xlink";function nh(n,e,t,i,r,s=i_(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(th,e.slice(6,e.length)):n.setAttributeNS(th,e,t):t==null||s&&!ep(t)?n.removeAttribute(e):n.setAttribute(e,s?"":ci(t)?String(t):t)}function ih(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?cm(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=ep(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function Zv(n,e,t,i){n.addEventListener(e,t,i)}function Jv(n,e,t,i){n.removeEventListener(e,t,i)}const rh=Symbol("_vei");function Qv(n,e,t,i,r=null){const s=n[rh]||(n[rh]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=e0(e);if(i){const c=s[e]=i0(i,r);Zv(n,a,c,l)}else o&&(Jv(n,a,o,l),s[e]=void 0)}}const sh=/(?:Once|Passive|Capture)$/;function e0(n){let e;if(sh.test(n)){e={};let i;for(;i=n.match(sh);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):dr(n.slice(2)),e]}let cl=0;const t0=Promise.resolve(),n0=()=>cl||(t0.then(()=>cl=0),cl=Date.now());function i0(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Hn(r0(i,t.value),e,5,[i])};return t.value=n,t.attached=n0(),t}function r0(n,e){if(Oe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const oh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,s0=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?$v(n,i,o):e==="style"?Yv(n,t,i):Xs(e)?xu(e)||Qv(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):o0(n,e,i,o))?(ih(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&nh(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!xt(i))?ih(n,xn(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),nh(n,e,i,o))};function o0(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&oh(e)&&Ue(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return oh(e)&&xt(t)?!1:e in n}const a0=["ctrl","shift","alt","meta"],l0={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>a0.some(t=>n[`${t}Key`]&&!e.includes(t))},PC=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let o=0;o<e.length;o++){const a=l0[e[o]];if(a&&a(r,e))return}return n(r,...s)})},fm=Lt({patchProp:s0},Wv);let Us,ah=!1;function c0(){return Us||(Us=fv(fm))}function u0(){return Us=ah?Us:hv(fm),ah=!0,Us}const f0=(...n)=>{const e=c0().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=dm(i);if(!r)return;const s=e._component;!Ue(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,hm(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e},h0=(...n)=>{const e=u0().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=dm(i);if(r)return t(r,!0,hm(r))},e};function hm(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function dm(n){return xt(n)?document.querySelector(n):n}const d0=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,p0=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,m0=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function g0(n,e){if(n==="__proto__"||n==="constructor"&&e&&typeof e=="object"&&"prototype"in e){_0(n);return}return e}function _0(n){console.warn(`[destr] Dropping "${n}" key to prevent prototype pollution.`)}function ca(n,e={}){if(typeof n!="string")return n;const t=n.trim();if(n[0]==='"'&&n.endsWith('"')&&!n.includes("\\"))return t.slice(1,-1);if(t.length<=9){const i=t.toLowerCase();if(i==="true")return!0;if(i==="false")return!1;if(i==="undefined")return;if(i==="null")return null;if(i==="nan")return Number.NaN;if(i==="infinity")return Number.POSITIVE_INFINITY;if(i==="-infinity")return Number.NEGATIVE_INFINITY}if(!m0.test(n)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return n}try{if(d0.test(n)||p0.test(n)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(n,g0)}return JSON.parse(n)}catch(i){if(e.strict)throw i;return n}}const v0=/#/g,x0=/&/g,y0=/\//g,M0=/=/g,Wu=/\+/g,S0=/%5e/gi,b0=/%60/gi,E0=/%7c/gi,T0=/%20/gi;function w0(n){return encodeURI(""+n).replace(E0,"|")}function hc(n){return w0(typeof n=="string"?n:JSON.stringify(n)).replace(Wu,"%2B").replace(T0,"+").replace(v0,"%23").replace(x0,"%26").replace(b0,"`").replace(S0,"^").replace(y0,"%2F")}function ul(n){return hc(n).replace(M0,"%3D")}function ua(n=""){try{return decodeURIComponent(""+n)}catch{return""+n}}function A0(n){return ua(n.replace(Wu," "))}function R0(n){return ua(n.replace(Wu," "))}function pm(n=""){const e={};n[0]==="?"&&(n=n.slice(1));for(const t of n.split("&")){const i=t.match(/([^=]+)=?(.*)/)||[];if(i.length<2)continue;const r=A0(i[1]);if(r==="__proto__"||r==="constructor")continue;const s=R0(i[2]||"");e[r]===void 0?e[r]=s:Array.isArray(e[r])?e[r].push(s):e[r]=[e[r],s]}return e}function C0(n,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(t=>`${ul(n)}=${hc(t)}`).join("&"):`${ul(n)}=${hc(e)}`:ul(n)}function Xu(n){return Object.keys(n).filter(e=>n[e]!==void 0).map(e=>C0(e,n[e])).filter(Boolean).join("&")}const P0=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,I0=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,L0=/^([/\\]\s*){2,}[^/\\]/,D0=/^[\s\0]*(blob|data|javascript|vbscript):$/i,U0=/\/$|\/\?|\/#/,N0=/^\.?\//;function mr(n,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?P0.test(n):I0.test(n)||(e.acceptRelative?L0.test(n):!1)}function F0(n){return!!n&&D0.test(n)}function dc(n="",e){return e?U0.test(n):n.endsWith("/")}function fs(n="",e){if(!e)return(dc(n)?n.slice(0,-1):n)||"/";if(!dc(n,!0))return n||"/";let t=n,i="";const r=n.indexOf("#");r>=0&&(t=n.slice(0,r),i=n.slice(r));const[s,...o]=t.split("?");return((s.endsWith("/")?s.slice(0,-1):s)||"/")+(o.length>0?`?${o.join("?")}`:"")+i}function Vs(n="",e){if(!e)return n.endsWith("/")?n:n+"/";if(dc(n,!0))return n||"/";let t=n,i="";const r=n.indexOf("#");if(r>=0&&(t=n.slice(0,r),i=n.slice(r),!t))return i;const[s,...o]=t.split("?");return s+"/"+(o.length>0?`?${o.join("?")}`:"")+i}function O0(n=""){return n.startsWith("/")}function pc(n=""){return O0(n)?n:"/"+n}function mc(n,e){if(gm(e)||mr(n))return n;const t=fs(e);return n.startsWith(t)?n:ka(t,n)}function B0(n,e){if(gm(e))return n;const t=fs(e);if(!n.startsWith(t))return n;const i=n.slice(t.length);return i[0]==="/"?i:"/"+i}function mm(n,e){const t=$u(n),i={...pm(t.search),...e};return t.search=Xu(i),xm(t)}function gm(n){return!n||n==="/"}function k0(n){return n&&n!=="/"}function ka(n,...e){let t=n||"";for(const i of e.filter(r=>k0(r)))if(t){const r=i.replace(N0,"");t=Vs(t)+r}else t=i;return t}function _m(...n){var o,a,l,c;const e=/\/(?!\/)/,t=n.filter(Boolean),i=[];let r=0;for(const u of t)if(!(!u||u==="/")){for(const[f,h]of u.split(e).entries())if(!(!h||h===".")){if(h===".."){if(i.length===1&&mr(i[0]))continue;i.pop(),r--;continue}if(f===1&&((o=i[i.length-1])!=null&&o.endsWith(":/"))){i[i.length-1]+="/"+h;continue}i.push(h),r++}}let s=i.join("/");return r>=0?(a=t[0])!=null&&a.startsWith("/")&&!s.startsWith("/")?s="/"+s:(l=t[0])!=null&&l.startsWith("./")&&!s.startsWith("./")&&(s="./"+s):s="../".repeat(-1*r)+s,(c=t[t.length-1])!=null&&c.endsWith("/")&&!s.endsWith("/")&&(s+="/"),s}function H0(n,e,t={}){return t.trailingSlash||(n=Vs(n),e=Vs(e)),t.leadingSlash||(n=pc(n),e=pc(e)),t.encoding||(n=ua(n),e=ua(e)),n===e}const vm=Symbol.for("ufo:protocolRelative");function $u(n="",e){const t=n.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(t){const[,f,h=""]=t;return{protocol:f.toLowerCase(),pathname:h,href:f+h,auth:"",host:"",search:"",hash:""}}if(!mr(n,{acceptRelative:!0}))return lh(n);const[,i="",r,s=""]=n.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=s.match(/([^#/?]*)(.*)?/)||[];i==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:l,search:c,hash:u}=lh(a);return{protocol:i.toLowerCase(),auth:r?r.slice(0,Math.max(0,r.length-1)):"",host:o,pathname:l,search:c,hash:u,[vm]:!i}}function lh(n=""){const[e="",t="",i=""]=(n.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:t,hash:i}}function xm(n){const e=n.pathname||"",t=n.search?(n.search.startsWith("?")?"":"?")+n.search:"",i=n.hash||"",r=n.auth?n.auth+"@":"",s=n.host||"";return(n.protocol||n[vm]?(n.protocol||"")+"//":"")+r+s+e+t+i}class z0 extends Error{constructor(e,t){super(e,t),this.name="FetchError",t!=null&&t.cause&&!this.cause&&(this.cause=t.cause)}}function V0(n){var l,c,u,f,h;const e=((l=n.error)==null?void 0:l.message)||((c=n.error)==null?void 0:c.toString())||"",t=((u=n.request)==null?void 0:u.method)||((f=n.options)==null?void 0:f.method)||"GET",i=((h=n.request)==null?void 0:h.url)||String(n.request)||"/",r=`[${t}] ${JSON.stringify(i)}`,s=n.response?`${n.response.status} ${n.response.statusText}`:"<no response>",o=`${r}: ${s}${e?` ${e}`:""}`,a=new z0(o,n.error?{cause:n.error}:void 0);for(const d of["request","options","response"])Object.defineProperty(a,d,{get(){return n[d]}});for(const[d,g]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,d,{get(){return n.response&&n.response[g]}});return a}const G0=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function ch(n="GET"){return G0.has(n.toUpperCase())}function W0(n){if(n===void 0)return!1;const e=typeof n;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(n)?!0:n.buffer?!1:n.constructor&&n.constructor.name==="Object"||typeof n.toJSON=="function"}const X0=new Set(["image/svg","application/xml","application/xhtml","application/html"]),$0=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function j0(n=""){if(!n)return"json";const e=n.split(";").shift()||"";return $0.test(e)?"json":X0.has(e)||e.startsWith("text/")?"text":"blob"}function q0(n,e,t,i){const r=Y0((e==null?void 0:e.headers)??(n==null?void 0:n.headers),t==null?void 0:t.headers,i);let s;return(t!=null&&t.query||t!=null&&t.params||e!=null&&e.params||e!=null&&e.query)&&(s={...t==null?void 0:t.params,...t==null?void 0:t.query,...e==null?void 0:e.params,...e==null?void 0:e.query}),{...t,...e,query:s,params:s,headers:r}}function Y0(n,e,t){if(!e)return new t(n);const i=new t(e);if(n)for(const[r,s]of Symbol.iterator in n||Array.isArray(n)?n:new t(n))i.set(r,s);return i}async function ao(n,e){if(e)if(Array.isArray(e))for(const t of e)await t(n);else await e(n)}const K0=new Set([408,409,425,429,500,502,503,504]),Z0=new Set([101,204,205,304]);function ym(n={}){const{fetch:e=globalThis.fetch,Headers:t=globalThis.Headers,AbortController:i=globalThis.AbortController}=n;async function r(a){const l=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!l){let u;typeof a.options.retry=="number"?u=a.options.retry:u=ch(a.options.method)?0:1;const f=a.response&&a.response.status||500;if(u>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(f):K0.has(f))){const h=typeof a.options.retryDelay=="function"?a.options.retryDelay(a):a.options.retryDelay||0;return h>0&&await new Promise(d=>setTimeout(d,h)),s(a.request,{...a.options,retry:u-1})}}const c=V0(a);throw Error.captureStackTrace&&Error.captureStackTrace(c,s),c}const s=async function(l,c={}){const u={request:l,options:q0(l,c,n.defaults,t),response:void 0,error:void 0};u.options.method&&(u.options.method=u.options.method.toUpperCase()),u.options.onRequest&&await ao(u,u.options.onRequest),typeof u.request=="string"&&(u.options.baseURL&&(u.request=mc(u.request,u.options.baseURL)),u.options.query&&(u.request=mm(u.request,u.options.query),delete u.options.query),"query"in u.options&&delete u.options.query,"params"in u.options&&delete u.options.params),u.options.body&&ch(u.options.method)&&(W0(u.options.body)?(u.options.body=typeof u.options.body=="string"?u.options.body:JSON.stringify(u.options.body),u.options.headers=new t(u.options.headers||{}),u.options.headers.has("content-type")||u.options.headers.set("content-type","application/json"),u.options.headers.has("accept")||u.options.headers.set("accept","application/json")):("pipeTo"in u.options.body&&typeof u.options.body.pipeTo=="function"||typeof u.options.body.pipe=="function")&&("duplex"in u.options||(u.options.duplex="half")));let f;if(!u.options.signal&&u.options.timeout){const d=new i;f=setTimeout(()=>{const g=new Error("[TimeoutError]: The operation was aborted due to timeout");g.name="TimeoutError",g.code=23,d.abort(g)},u.options.timeout),u.options.signal=d.signal}try{u.response=await e(u.request,u.options)}catch(d){return u.error=d,u.options.onRequestError&&await ao(u,u.options.onRequestError),await r(u)}finally{f&&clearTimeout(f)}if((u.response.body||u.response._bodyInit)&&!Z0.has(u.response.status)&&u.options.method!=="HEAD"){const d=(u.options.parseResponse?"json":u.options.responseType)||j0(u.response.headers.get("content-type")||"");switch(d){case"json":{const g=await u.response.text(),_=u.options.parseResponse||ca;u.response._data=_(g);break}case"stream":{u.response._data=u.response.body||u.response._bodyInit;break}default:u.response._data=await u.response[d]()}}return u.options.onResponse&&await ao(u,u.options.onResponse),!u.options.ignoreResponseError&&u.response.status>=400&&u.response.status<600?(u.options.onResponseError&&await ao(u,u.options.onResponseError),await r(u)):u.response},o=async function(l,c){return(await s(l,c))._data};return o.raw=s,o.native=(...a)=>e(...a),o.create=(a={},l={})=>ym({...n,...l,defaults:{...n.defaults,...l.defaults,...a}}),o}const fa=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),J0=fa.fetch?(...n)=>fa.fetch(...n):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),Q0=fa.Headers,ex=fa.AbortController,tx=ym({fetch:J0,Headers:Q0,AbortController:ex}),nx=tx,ix=()=>{var n;return((n=window==null?void 0:window.__NUXT__)==null?void 0:n.config)||{}},ha=ix().app,rx=()=>ha.baseURL,sx=()=>ha.buildAssetsDir,ju=(...n)=>_m(Mm(),sx(),...n),Mm=(...n)=>{const e=ha.cdnURL||ha.baseURL;return n.length?_m(e,...n):e};globalThis.__buildAssetsURL=ju,globalThis.__publicAssetsURL=Mm;globalThis.$fetch||(globalThis.$fetch=nx.create({baseURL:rx()}));function gc(n,e={},t){for(const i in n){const r=n[i],s=t?`${t}:${i}`:i;typeof r=="object"&&r!==null?gc(r,e,s):typeof r=="function"&&(e[s]=r)}return e}const ox={run:n=>n()},ax=()=>ox,Sm=typeof console.createTask<"u"?console.createTask:ax;function lx(n,e){const t=e.shift(),i=Sm(t);return n.reduce((r,s)=>r.then(()=>i.run(()=>s(...e))),Promise.resolve())}function cx(n,e){const t=e.shift(),i=Sm(t);return Promise.all(n.map(r=>i.run(()=>r(...e))))}function fl(n,e){for(const t of[...n])t(e)}class ux{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,t,i={}){if(!e||typeof t!="function")return()=>{};const r=e;let s;for(;this._deprecatedHooks[e];)s=this._deprecatedHooks[e],e=s.to;if(s&&!i.allowDeprecated){let o=s.message;o||(o=`${r} hook has been deprecated`+(s.to?`, please use ${s.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!t.name)try{Object.defineProperty(t,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(t),()=>{t&&(this.removeHook(e,t),t=void 0)}}hookOnce(e,t){let i,r=(...s)=>(typeof i=="function"&&i(),i=void 0,r=void 0,t(...s));return i=this.hook(e,r),i}removeHook(e,t){if(this._hooks[e]){const i=this._hooks[e].indexOf(t);i!==-1&&this._hooks[e].splice(i,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,t){this._deprecatedHooks[e]=typeof t=="string"?{to:t}:t;const i=this._hooks[e]||[];delete this._hooks[e];for(const r of i)this.hook(e,r)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const t in e)this.deprecateHook(t,e[t])}addHooks(e){const t=gc(e),i=Object.keys(t).map(r=>this.hook(r,t[r]));return()=>{for(const r of i.splice(0,i.length))r()}}removeHooks(e){const t=gc(e);for(const i in t)this.removeHook(i,t[i])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...t){return t.unshift(e),this.callHookWith(lx,e,...t)}callHookParallel(e,...t){return t.unshift(e),this.callHookWith(cx,e,...t)}callHookWith(e,t,...i){const r=this._before||this._after?{name:t,args:i,context:{}}:void 0;this._before&&fl(this._before,r);const s=e(t in this._hooks?[...this._hooks[t]]:[],i);return s instanceof Promise?s.finally(()=>{this._after&&r&&fl(this._after,r)}):(this._after&&r&&fl(this._after,r),s)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const t=this._before.indexOf(e);t!==-1&&this._before.splice(t,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const t=this._after.indexOf(e);t!==-1&&this._after.splice(t,1)}}}}function bm(){return new ux}function fx(n={}){let e,t=!1;const i=o=>{if(e&&e!==o)throw new Error("Context conflict")};let r;if(n.asyncContext){const o=n.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?r=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const s=()=>{if(r&&e===void 0){const o=r.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=s();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>s(),set:(o,a)=>{a||i(o),e=o,t=!0},unset:()=>{e=void 0,t=!1},call:(o,a)=>{i(o),e=o;try{return r?r.run(o,a):a()}finally{t||(e=void 0)}},async callAsync(o,a){e=o;const l=()=>{e=o},c=()=>e===o?l:void 0;_c.add(c);try{const u=r?r.run(o,a):a();return t||(e=void 0),await u}finally{_c.delete(c)}}}}function hx(n={}){const e={};return{get(t,i={}){return e[t]||(e[t]=fx({...n,...i})),e[t]}}}const da=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},uh="__unctx__",dx=da[uh]||(da[uh]=hx()),px=(n,e={})=>dx.get(n,e),fh="__unctx_async_handlers__",_c=da[fh]||(da[fh]=new Set);function Em(n){const e=[];for(const r of _c){const s=r();s&&e.push(s)}const t=()=>{for(const r of e)r()};let i=n();return i&&typeof i=="object"&&"catch"in i&&(i=i.catch(r=>{throw t(),r})),[i,t]}const IC={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},mx=null,gx="#__nuxt",Tm="nuxt-app",hh=36e5,_x="vite:preloadError";function wm(n=Tm){return px(n,{asyncContext:!1})}const vx="__nuxt_plugin";function xx(n){var r;let e=0;const t={_id:n.id||Tm||"nuxt-app",_scope:r_(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.14.1592"},get vue(){return t.vueApp.version}},payload:Or({...((r=n.ssrContext)==null?void 0:r.payload)||{},data:Or({}),state:Ci({}),once:new Set,_errors:Or({})}),static:{data:{}},runWithContext(s){return t._scope.active&&!Su()?t._scope.run(()=>dh(t,s)):dh(t,s)},isHydrating:!0,deferHydration(){if(!t.isHydrating)return()=>{};e++;let s=!1;return()=>{if(!s&&(s=!0,e--,e===0))return t.isHydrating=!1,t.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:Or({}),_payloadRevivers:{},...n};{const s=window.__NUXT__;if(s)for(const o in s)switch(o){case"data":case"state":case"_errors":Object.assign(t.payload[o],s[o]);break;default:t.payload[o]=s[o]}}t.hooks=bm(),t.hook=t.hooks.hook,t.callHook=t.hooks.callHook,t.provide=(s,o)=>{const a="$"+s;lo(t,a,o),lo(t.vueApp.config.globalProperties,a,o)},lo(t.vueApp,"$nuxt",t),lo(t.vueApp.config.globalProperties,"$nuxt",t);{window.addEventListener(_x,o=>{t.callHook("app:chunkError",{error:o.payload}),(t.isHydrating||o.payload.message.includes("Unable to preload CSS"))&&o.preventDefault()}),window.useNuxtApp=window.useNuxtApp||wt;const s=t.hook("app:error",(...o)=>{console.error("[nuxt] error caught during app initialization",...o)});t.hook("app:mounted",s)}const i=t.payload.config;return t.provide("config",i),t}function yx(n,e){e.hooks&&n.hooks.addHooks(e.hooks)}async function Mx(n,e){if(typeof e=="function"){const{provide:t}=await n.runWithContext(()=>e(n))||{};if(t&&typeof t=="object")for(const i in t)n.provide(i,t[i])}}async function Sx(n,e){const t=[],i=[],r=[],s=[];let o=0;async function a(l){var u;const c=((u=l.dependsOn)==null?void 0:u.filter(f=>e.some(h=>h._name===f)&&!t.includes(f)))??[];if(c.length>0)i.push([new Set(c),l]);else{const f=Mx(n,l).then(async()=>{l._name&&(t.push(l._name),await Promise.all(i.map(async([h,d])=>{h.has(l._name)&&(h.delete(l._name),h.size===0&&(o++,await a(d)))})))});l.parallel?r.push(f.catch(h=>s.push(h))):await f}}for(const l of e)yx(n,l);for(const l of e)await a(l);if(await Promise.all(r),o)for(let l=0;l<o;l++)await Promise.all(r);if(s.length)throw s[0]}function tn(n){if(typeof n=="function")return n;const e=n._name||n.name;return delete n.name,Object.assign(n.setup||(()=>{}),n,{[vx]:!0,_name:e})}function dh(n,e,t){const i=()=>e();return wm(n._id).set(n),n.vueApp.runWithContext(i)}function bx(n){var t;let e;return Fp()&&(e=(t=pr())==null?void 0:t.appContext.app.$nuxt),e=e||wm(n).tryUse(),e||null}function wt(n){const e=bx(n);if(!e)throw new Error("[nuxt] instance unavailable");return e}function lr(n){return wt().$config}function lo(n,e,t){Object.defineProperty(n,e,{get:()=>t})}function Ex(n,e){return{ctx:{table:n},matchAll:t=>Rm(t,n)}}function Am(n){const e={};for(const t in n)e[t]=t==="dynamic"?new Map(Object.entries(n[t]).map(([i,r])=>[i,Am(r)])):new Map(Object.entries(n[t]));return e}function Tx(n){return Ex(Am(n))}function Rm(n,e,t){n.endsWith("/")&&(n=n.slice(0,-1)||"/");const i=[];for(const[s,o]of ph(e.wildcard))(n===s||n.startsWith(s+"/"))&&i.push(o);for(const[s,o]of ph(e.dynamic))if(n.startsWith(s+"/")){const a="/"+n.slice(s.length).split("/").splice(2).join("/");i.push(...Rm(a,o))}const r=e.static.get(n);return r&&i.push(r),i.filter(Boolean)}function ph(n){return[...n.entries()].sort((e,t)=>e[0].length-t[0].length)}function hl(n){if(n===null||typeof n!="object")return!1;const e=Object.getPrototypeOf(n);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in n?!1:Symbol.toStringTag in n?Object.prototype.toString.call(n)==="[object Module]":!0}function vc(n,e,t=".",i){if(!hl(e))return vc(n,{},t,i);const r=Object.assign({},e);for(const s in n){if(s==="__proto__"||s==="constructor")continue;const o=n[s];o!=null&&(i&&i(r,s,o,t)||(Array.isArray(o)&&Array.isArray(r[s])?r[s]=[...o,...r[s]]:hl(o)&&hl(r[s])?r[s]=vc(o,r[s],(t?`${t}.`:"")+s.toString(),i):r[s]=o))}return r}function wx(n){return(...e)=>e.reduce((t,i)=>vc(t,i,"",n),{})}const Ax=wx();function Rx(n,e){try{return e in n}catch{return!1}}var Cx=Object.defineProperty,Px=(n,e,t)=>e in n?Cx(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Yi=(n,e,t)=>(Px(n,typeof e!="symbol"?e+"":e,t),t);class xc extends Error{constructor(e,t={}){super(e,t),Yi(this,"statusCode",500),Yi(this,"fatal",!1),Yi(this,"unhandled",!1),Yi(this,"statusMessage"),Yi(this,"data"),Yi(this,"cause"),t.cause&&!this.cause&&(this.cause=t.cause)}toJSON(){const e={message:this.message,statusCode:yc(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=Cm(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}Yi(xc,"__h3_error__",!0);function Ix(n){if(typeof n=="string")return new xc(n);if(Lx(n))return n;const e=new xc(n.message??n.statusMessage??"",{cause:n.cause||n});if(Rx(n,"stack"))try{Object.defineProperty(e,"stack",{get(){return n.stack}})}catch{try{e.stack=n.stack}catch{}}if(n.data&&(e.data=n.data),n.statusCode?e.statusCode=yc(n.statusCode,e.statusCode):n.status&&(e.statusCode=yc(n.status,e.statusCode)),n.statusMessage?e.statusMessage=n.statusMessage:n.statusText&&(e.statusMessage=n.statusText),e.statusMessage){const t=e.statusMessage;Cm(e.statusMessage)!==t&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return n.fatal!==void 0&&(e.fatal=n.fatal),n.unhandled!==void 0&&(e.unhandled=n.unhandled),e}function Lx(n){var e;return((e=n==null?void 0:n.constructor)==null?void 0:e.__h3_error__)===!0}const Dx=/[^\u0009\u0020-\u007E]/g;function Cm(n=""){return n.replace(Dx,"")}function yc(n,e=200){return!n||(typeof n=="string"&&(n=Number.parseInt(n,10)),n<100||n>999)?e:n}const Pm=Symbol("route"),cr=()=>{var n;return(n=wt())==null?void 0:n.$router},Ha=()=>Fp()?$r(Pm,wt()._route):wt()._route;const Ux=()=>{try{if(wt()._processingMiddleware)return!0}catch{return!1}return!1},Nx=(n,e)=>{n||(n="/");const t=typeof n=="string"?n:"path"in n?Fx(n):cr().resolve(n).href;if(e!=null&&e.open){const{target:l="_blank",windowFeatures:c={}}=e.open,u=Object.entries(c).filter(([f,h])=>h!==void 0).map(([f,h])=>`${f.toLowerCase()}=${h}`).join(", ");return open(t,l,u),Promise.resolve()}const i=mr(t,{acceptRelative:!0}),r=(e==null?void 0:e.external)||i;if(r){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:l}=new URL(t,window.location.href);if(l&&F0(l))throw new Error(`Cannot navigate to a URL with '${l}' protocol.`)}const s=Ux();if(!r&&s)return n;const o=cr(),a=wt();return r?(a._scope.stop(),e!=null&&e.replace?location.replace(t):location.href=t,s?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?o.replace(n):o.push(n)};function Fx(n){return mm(n.path||"",n.query||{})+(n.hash||"")}const Im="__nuxt_error",qu=()=>yp(wt().payload,"error"),Ox=n=>{const e=Yu(n);try{const t=wt(),i=qu();t.hooks.callHook("app:error",e),i.value=i.value||e}catch{throw e}return e},Bx=async(n={})=>{const e=wt(),t=qu();e.callHook("app:error:cleared",n),n.redirect&&await cr().replace(n.redirect),t.value=mx},kx=n=>!!n&&typeof n=="object"&&Im in n,Yu=n=>{const e=Ix(n);return Object.defineProperty(e,Im,{value:!0,configurable:!1,writable:!1}),e};function mh(n){const e=zx(n),t=new ArrayBuffer(e.length),i=new DataView(t);for(let r=0;r<t.byteLength;r++)i.setUint8(r,e.charCodeAt(r));return t}const Hx="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function zx(n){n.length%4===0&&(n=n.replace(/==?$/,""));let e="",t=0,i=0;for(let r=0;r<n.length;r++)t<<=6,t|=Hx.indexOf(n[r]),i+=6,i===24&&(e+=String.fromCharCode((t&16711680)>>16),e+=String.fromCharCode((t&65280)>>8),e+=String.fromCharCode(t&255),t=i=0);return i===12?(t>>=4,e+=String.fromCharCode(t)):i===18&&(t>>=2,e+=String.fromCharCode((t&65280)>>8),e+=String.fromCharCode(t&255)),e}const Vx=-1,Gx=-2,Wx=-3,Xx=-4,$x=-5,jx=-6;function qx(n,e){return Yx(JSON.parse(n),e)}function Yx(n,e){if(typeof n=="number")return r(n,!0);if(!Array.isArray(n)||n.length===0)throw new Error("Invalid input");const t=n,i=Array(t.length);function r(s,o=!1){if(s===Vx)return;if(s===Wx)return NaN;if(s===Xx)return 1/0;if(s===$x)return-1/0;if(s===jx)return-0;if(o)throw new Error("Invalid input");if(s in i)return i[s];const a=t[s];if(!a||typeof a!="object")i[s]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const l=a[0],c=e==null?void 0:e[l];if(c)return i[s]=c(r(a[1]));switch(l){case"Date":i[s]=new Date(a[1]);break;case"Set":const u=new Set;i[s]=u;for(let d=1;d<a.length;d+=1)u.add(r(a[d]));break;case"Map":const f=new Map;i[s]=f;for(let d=1;d<a.length;d+=2)f.set(r(a[d]),r(a[d+1]));break;case"RegExp":i[s]=new RegExp(a[1],a[2]);break;case"Object":i[s]=Object(a[1]);break;case"BigInt":i[s]=BigInt(a[1]);break;case"null":const h=Object.create(null);i[s]=h;for(let d=1;d<a.length;d+=2)h[a[d]]=r(a[d+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const d=globalThis[l],g=a[1],_=mh(g),m=new d(_);i[s]=m;break}case"ArrayBuffer":{const d=a[1],g=mh(d);i[s]=g;break}default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(a.length);i[s]=l;for(let c=0;c<a.length;c+=1){const u=a[c];u!==Gx&&(l[c]=r(u))}}else{const l={};i[s]=l;for(const c in a){const u=a[c];l[c]=r(u)}}return i[s]}return r(0)}const Kx=new Set(["title","titleTemplate","script","style","noscript"]),Go=new Set(["base","meta","link","style","script","noscript"]),Zx=new Set(["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),Jx=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),Lm=new Set(["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"]),Qx=typeof window<"u";function pa(n){let e=9;for(let t=0;t<n.length;)e=Math.imul(e^n.charCodeAt(t++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Mc(n){if(n._h)return n._h;if(n._d)return pa(n._d);let e=`${n.tag}:${n.textContent||n.innerHTML||""}:`;for(const t in n.props)e+=`${t}:${String(n.props[t])},`;return pa(e)}function Dm(n,e){const t=[],i=e.resolveKeyData||(s=>s.key),r=e.resolveValueData||(s=>s.value);for(const[s,o]of Object.entries(n))t.push(...(Array.isArray(o)?o:[o]).map(a=>{const l={key:s,value:a},c=r(l);return typeof c=="object"?Dm(c,e):Array.isArray(c)?c:{[typeof e.key=="function"?e.key(l):e.key]:i(l),[typeof e.value=="function"?e.value(l):e.value]:c}}).flat());return t}function Um(n,e){return Object.entries(n).map(([t,i])=>{if(typeof i=="object"&&(i=Um(i,e)),e.resolve){const r=e.resolve({key:t,value:i});if(typeof r<"u")return r}return typeof i=="number"&&(i=i.toString()),typeof i=="string"&&e.wrapValue&&(i=i.replace(new RegExp(e.wrapValue,"g"),`\\${e.wrapValue}`),i=`${e.wrapValue}${i}${e.wrapValue}`),`${t}${e.keyValueSeparator||""}${i}`}).join(e.entrySeparator||"")}const Xt=n=>({keyValue:n,metaKey:"property"}),dl=n=>({keyValue:n}),Ku={appleItunesApp:{unpack:{entrySeparator:", ",resolve({key:n,value:e}){return`${ti(n)}=${e}`}}},articleExpirationTime:Xt("article:expiration_time"),articleModifiedTime:Xt("article:modified_time"),articlePublishedTime:Xt("article:published_time"),bookReleaseDate:Xt("book:release_date"),charset:{metaKey:"charset"},contentSecurityPolicy:{unpack:{entrySeparator:"; ",resolve({key:n,value:e}){return`${ti(n)} ${e}`}},metaKey:"http-equiv"},contentType:{metaKey:"http-equiv"},defaultStyle:{metaKey:"http-equiv"},fbAppId:Xt("fb:app_id"),msapplicationConfig:dl("msapplication-Config"),msapplicationTileColor:dl("msapplication-TileColor"),msapplicationTileImage:dl("msapplication-TileImage"),ogAudioSecureUrl:Xt("og:audio:secure_url"),ogAudioUrl:Xt("og:audio"),ogImageSecureUrl:Xt("og:image:secure_url"),ogImageUrl:Xt("og:image"),ogSiteName:Xt("og:site_name"),ogVideoSecureUrl:Xt("og:video:secure_url"),ogVideoUrl:Xt("og:video"),profileFirstName:Xt("profile:first_name"),profileLastName:Xt("profile:last_name"),profileUsername:Xt("profile:username"),refresh:{metaKey:"http-equiv",unpack:{entrySeparator:";",resolve({key:n,value:e}){if(n==="seconds")return`${e}`}}},robots:{unpack:{entrySeparator:", ",resolve({key:n,value:e}){return typeof e=="boolean"?`${ti(n)}`:`${ti(n)}:${e}`}}},xUaCompatible:{metaKey:"http-equiv"}},Nm=new Set(["og","book","article","profile"]);function Fm(n){var i;const e=ti(n),t=e.indexOf(":");return Nm.has(e.substring(0,t))?"property":((i=Ku[n])==null?void 0:i.metaKey)||"name"}function ey(n){var e;return((e=Ku[n])==null?void 0:e.keyValue)||ti(n)}function ti(n){const e=n.replace(/([A-Z])/g,"-$1").toLowerCase(),t=e.indexOf("-"),i=e.substring(0,t);return i==="twitter"||Nm.has(i)?n.replace(/([A-Z])/g,":$1").toLowerCase():e}function Sc(n){if(Array.isArray(n))return n.map(t=>Sc(t));if(typeof n!="object"||Array.isArray(n))return n;const e={};for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[ti(t)]=Sc(n[t]));return e}function ty(n,e){const t=Ku[e];return e==="refresh"?`${n.seconds};url=${n.url}`:Um(Sc(n),{keyValueSeparator:"=",entrySeparator:", ",resolve({value:i,key:r}){if(i===null)return"";if(typeof i=="boolean")return`${r}`},...t==null?void 0:t.unpack})}const Om=new Set(["og:image","og:video","og:audio","twitter:image"]);function Bm(n){const e={};for(const t in n){if(!Object.prototype.hasOwnProperty.call(n,t))continue;const i=n[t];String(i)!=="false"&&t&&(e[t]=i)}return e}function gh(n,e){const t=Bm(e),i=ti(n),r=Fm(i);if(Om.has(i)){const s={};for(const o in t)Object.prototype.hasOwnProperty.call(t,o)&&(s[`${n}${o==="url"?"":`${o[0].toUpperCase()}${o.slice(1)}`}`]=t[o]);return Zu(s).sort((o,a)=>{var l,c;return(((l=o[r])==null?void 0:l.length)||0)-(((c=a[r])==null?void 0:c.length)||0)})}return[{[r]:i,...t}]}function Zu(n){const e=[],t={};for(const r in n){if(!Object.prototype.hasOwnProperty.call(n,r))continue;const s=n[r];if(!Array.isArray(s)){if(typeof s=="object"&&s){if(Om.has(ti(r))){e.push(...gh(r,s));continue}t[r]=Bm(s)}else t[r]=s;continue}for(const o of s)e.push(...typeof o=="string"?Zu({[r]:o}):gh(r,o))}const i=Dm(t,{key({key:r}){return Fm(r)},value({key:r}){return r==="charset"?"charset":"content"},resolveKeyData({key:r}){return ey(r)},resolveValueData({value:r,key:s}){return r===null?"_null":typeof r=="object"?ty(r,s):typeof r=="number"?r.toString():r}});return[...e,...i].map(r=>(r.content==="_null"&&(r.content=null),r))}function ny(n,e){return n instanceof Promise?n.then(e):e(n)}function bc(n,e,t,i){const r=i||Hm(typeof e=="object"&&typeof e!="function"&&!(e instanceof Promise)?{...e}:{[n==="script"||n==="noscript"||n==="style"?"innerHTML":"textContent"]:e},n==="templateParams"||n==="titleTemplate");if(r instanceof Promise)return r.then(o=>bc(n,e,t,o));const s={tag:n,props:r};for(const o of Lm){const a=s.props[o]!==void 0?s.props[o]:t[o];a!==void 0&&((!(o==="innerHTML"||o==="textContent"||o==="children")||Kx.has(s.tag))&&(s[o==="children"?"innerHTML":o]=a),delete s.props[o])}return s.props.body&&(s.tagPosition="bodyClose",delete s.props.body),s.tag==="script"&&typeof s.innerHTML=="object"&&(s.innerHTML=JSON.stringify(s.innerHTML),s.props.type=s.props.type||"application/json"),Array.isArray(s.props.content)?s.props.content.map(o=>({...s,props:{...s.props,content:o}})):s}function iy(n,e){var i;const t=n==="class"?" ":";";return e&&typeof e=="object"&&!Array.isArray(e)&&(e=Object.entries(e).filter(([,r])=>r).map(([r,s])=>n==="style"?`${r}:${s}`:r)),(i=String(Array.isArray(e)?e.join(t):e))==null?void 0:i.split(t).filter(r=>!!r.trim()).join(t)}function km(n,e,t,i){for(let r=i;r<t.length;r+=1){const s=t[r];if(s==="class"||s==="style"){n[s]=iy(s,n[s]);continue}if(n[s]instanceof Promise)return n[s].then(o=>(n[s]=o,km(n,e,t,r)));if(!e&&!Lm.has(s)){const o=String(n[s]),a=s.startsWith("data-");o==="true"||o===""?n[s]=a?"true":!0:n[s]||(a&&o==="false"?n[s]="false":delete n[s])}}}function Hm(n,e=!1){const t=km(n,e,Object.keys(n),0);return t instanceof Promise?t.then(()=>n):n}const ry=10;function zm(n,e,t){for(let i=t;i<e.length;i+=1){const r=e[i];if(r instanceof Promise)return r.then(s=>(e[i]=s,zm(n,e,i)));Array.isArray(r)?n.push(...r):n.push(r)}}function sy(n){const e=[],t=n.resolvedInput;for(const r in t){if(!Object.prototype.hasOwnProperty.call(t,r))continue;const s=t[r];if(!(s===void 0||!Zx.has(r))){if(Array.isArray(s)){for(const o of s)e.push(bc(r,o,n));continue}e.push(bc(r,s,n))}}if(e.length===0)return[];const i=[];return ny(zm(i,e,0),()=>i.map((r,s)=>(r._e=n._i,n.mode&&(r._m=n.mode),r._p=(n._i<<ry)+s,r)))}const _h=new Set(["onload","onerror","onabort","onprogress","onloadstart"]),vh={base:-10,title:10},xh={critical:-80,high:-10,low:20};function ma(n){const e=n.tagPriority;if(typeof e=="number")return e;let t=100;return n.tag==="meta"?n.props["http-equiv"]==="content-security-policy"?t=-30:n.props.charset?t=-20:n.props.name==="viewport"&&(t=-15):n.tag==="link"&&n.props.rel==="preconnect"?t=20:n.tag in vh&&(t=vh[n.tag]),e&&e in xh?t+xh[e]:t}const oy=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],ay=["name","property","http-equiv"];function Vm(n){const{props:e,tag:t}=n;if(Jx.has(t))return t;if(t==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(e.id)return`${t}:id:${e.id}`;for(const i of ay)if(e[i]!==void 0)return`${t}:${i}:${e[i]}`;return!1}const Mi="%separator";function ly(n,e,t=!1){var r;let i;if(e==="s"||e==="pageTitle")i=n.pageTitle;else if(e.includes(".")){const s=e.indexOf(".");i=(r=n[e.substring(0,s)])==null?void 0:r[e.substring(s+1)]}else i=n[e];if(i!==void 0)return t?(i||"").replace(/"/g,'\\"'):i||""}const cy=new RegExp(`${Mi}(?:\\s*${Mi})*`,"g");function co(n,e,t,i=!1){if(typeof n!="string"||!n.includes("%"))return n;let r=n;try{r=decodeURI(n)}catch{}const s=r.match(/%\w+(?:\.\w+)?/g);if(!s)return n;const o=n.includes(Mi);return n=n.replace(/%\w+(?:\.\w+)?/g,a=>{if(a===Mi||!s.includes(a))return a;const l=ly(e,a.slice(1),i);return l!==void 0?l:a}).trim(),o&&(n.endsWith(Mi)&&(n=n.slice(0,-Mi.length)),n.startsWith(Mi)&&(n=n.slice(Mi.length)),n=n.replace(cy,t).trim()),n}function Ec(n,e){return n==null?e||null:typeof n=="function"?n(e):n}async function Gm(n,e={}){const t=e.document||n.resolvedOptions.document;if(!t||!n.dirty)return;const i={shouldRender:!0,tags:[]};if(await n.hooks.callHook("dom:beforeRender",i),!!i.shouldRender)return n._domUpdatePromise||(n._domUpdatePromise=new Promise(async r=>{var f;const s=(await n.resolveTags()).map(h=>({tag:h,id:Go.has(h.tag)?Mc(h):h.tag,shouldRender:!0}));let o=n._dom;if(!o){o={elMap:{htmlAttrs:t.documentElement,bodyAttrs:t.body}};const h=new Set;for(const d of["body","head"]){const g=(f=t[d])==null?void 0:f.children;for(const _ of g){const m=_.tagName.toLowerCase();if(!Go.has(m))continue;const p={tag:m,props:await Hm(_.getAttributeNames().reduce((w,R)=>({...w,[R]:_.getAttribute(R)}),{})),innerHTML:_.innerHTML},A=Vm(p);let x=A,M=1;for(;x&&h.has(x);)x=`${A}:${M++}`;x&&(p._d=x,h.add(x)),o.elMap[_.getAttribute("data-hid")||Mc(p)]=_}}}o.pendingSideEffects={...o.sideEffects},o.sideEffects={};function a(h,d,g){const _=`${h}:${d}`;o.sideEffects[_]=g,delete o.pendingSideEffects[_]}function l({id:h,$el:d,tag:g}){const _=g.tag.endsWith("Attrs");if(o.elMap[h]=d,_||(g.textContent&&g.textContent!==d.textContent&&(d.textContent=g.textContent),g.innerHTML&&g.innerHTML!==d.innerHTML&&(d.innerHTML=g.innerHTML),a(h,"el",()=>{var m;(m=o.elMap[h])==null||m.remove(),delete o.elMap[h]})),g._eventHandlers)for(const m in g._eventHandlers)Object.prototype.hasOwnProperty.call(g._eventHandlers,m)&&d.getAttribute(`data-${m}`)!==""&&((g.tag==="bodyAttrs"?t.defaultView:d).addEventListener(m.substring(2),g._eventHandlers[m].bind(d)),d.setAttribute(`data-${m}`,""));for(const m in g.props){if(!Object.prototype.hasOwnProperty.call(g.props,m))continue;const p=g.props[m],A=`attr:${m}`;if(m==="class"){if(!p)continue;for(const x of p.split(" "))_&&a(h,`${A}:${x}`,()=>d.classList.remove(x)),!d.classList.contains(x)&&d.classList.add(x)}else if(m==="style"){if(!p)continue;for(const x of p.split(";")){const M=x.indexOf(":"),w=x.substring(0,M).trim(),R=x.substring(M+1).trim();a(h,`${A}:${w}`,()=>{d.style.removeProperty(w)}),d.style.setProperty(w,R)}}else d.getAttribute(m)!==p&&d.setAttribute(m,p===!0?"":String(p)),_&&a(h,A,()=>d.removeAttribute(m))}}const c=[],u={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const h of s){const{tag:d,shouldRender:g,id:_}=h;if(g){if(d.tag==="title"){t.title=d.textContent;continue}h.$el=h.$el||o.elMap[_],h.$el?l(h):Go.has(d.tag)&&c.push(h)}}for(const h of c){const d=h.tag.tagPosition||"head";h.$el=t.createElement(h.tag.tag),l(h),u[d]=u[d]||t.createDocumentFragment(),u[d].appendChild(h.$el)}for(const h of s)await n.hooks.callHook("dom:renderTag",h,t,a);u.head&&t.head.appendChild(u.head),u.bodyOpen&&t.body.insertBefore(u.bodyOpen,t.body.firstChild),u.bodyClose&&t.body.appendChild(u.bodyClose);for(const h in o.pendingSideEffects)o.pendingSideEffects[h]();n._dom=o,await n.hooks.callHook("dom:rendered",{renders:s}),r()}).finally(()=>{n._domUpdatePromise=void 0,n.dirty=!1})),n._domUpdatePromise}function uy(n,e={}){const t=e.delayFn||(i=>setTimeout(i,10));return n._domDebouncedUpdatePromise=n._domDebouncedUpdatePromise||new Promise(i=>t(()=>Gm(n,e).then(()=>{delete n._domDebouncedUpdatePromise,i()})))}function fy(n){return e=>{var i,r;const t=((r=(i=e.resolvedOptions.document)==null?void 0:i.head.querySelector('script[id="unhead:payload"]'))==null?void 0:r.innerHTML)||!1;return t&&e.push(JSON.parse(t)),{mode:"client",hooks:{"entries:updated":s=>{uy(s,n)}}}}}const hy=new Set(["templateParams","htmlAttrs","bodyAttrs"]),dy={hooks:{"tag:normalise":({tag:n})=>{n.props.hid&&(n.key=n.props.hid,delete n.props.hid),n.props.vmid&&(n.key=n.props.vmid,delete n.props.vmid),n.props.key&&(n.key=n.props.key,delete n.props.key);const e=Vm(n);e&&!e.startsWith("meta:og:")&&!e.startsWith("meta:twitter:")&&delete n.key;const t=e||(n.key?`${n.tag}:${n.key}`:!1);t&&(n._d=t)},"tags:resolve":n=>{const e=Object.create(null);for(const i of n.tags){const r=(i.key?`${i.tag}:${i.key}`:i._d)||Mc(i),s=e[r];if(s){let a=i==null?void 0:i.tagDuplicateStrategy;if(!a&&hy.has(i.tag)&&(a="merge"),a==="merge"){const l=s.props;l.style&&i.props.style&&(l.style[l.style.length-1]!==";"&&(l.style+=";"),i.props.style=`${l.style} ${i.props.style}`),l.class&&i.props.class?i.props.class=`${l.class} ${i.props.class}`:l.class&&(i.props.class=l.class),e[r].props={...l,...i.props};continue}else if(i._e===s._e){s._duped=s._duped||[],i._d=`${s._d}:${s._duped.length+1}`,s._duped.push(i);continue}else if(ma(i)>ma(s))continue}if(!(i.innerHTML||i.textContent||Object.keys(i.props).length!==0)&&Go.has(i.tag)){delete e[r];continue}e[r]=i}const t=[];for(const i in e){const r=e[i],s=r._duped;t.push(r),s&&(delete r._duped,t.push(...s))}n.tags=t,n.tags=n.tags.filter(i=>!(i.tag==="meta"&&(i.props.name||i.props.property)&&!i.props.content))}}},py=new Set(["script","link","bodyAttrs"]),my=n=>({hooks:{"tags:resolve":e=>{for(const t of e.tags){if(!py.has(t.tag))continue;const i=t.props;for(const r in i){if(r[0]!=="o"||r[1]!=="n"||!Object.prototype.hasOwnProperty.call(i,r))continue;const s=i[r];typeof s=="function"&&(n.ssr&&_h.has(r)?i[r]=`this.dataset.${r}fired = true`:delete i[r],t._eventHandlers=t._eventHandlers||{},t._eventHandlers[r]=s)}n.ssr&&t._eventHandlers&&(t.props.src||t.props.href)&&(t.key=t.key||pa(t.props.src||t.props.href))}},"dom:renderTag":({$el:e,tag:t})=>{var r,s;const i=e==null?void 0:e.dataset;if(i)for(const o in i){if(!o.endsWith("fired"))continue;const a=o.slice(0,-5);_h.has(a)&&((s=(r=t._eventHandlers)==null?void 0:r[a])==null||s.call(e,new Event(a.substring(2))))}}}}),gy=new Set(["link","style","script","noscript"]),_y={hooks:{"tag:normalise":({tag:n})=>{n.key&&gy.has(n.tag)&&(n.props["data-hid"]=n._h=pa(n.key))}}},vy={mode:"server",hooks:{"tags:beforeResolve":n=>{const e={};let t=!1;for(const i of n.tags)i._m!=="server"||i.tag!=="titleTemplate"&&i.tag!=="templateParams"&&i.tag!=="title"||(e[i.tag]=i.tag==="title"||i.tag==="titleTemplate"?i.textContent:i.props,t=!0);t&&n.tags.push({tag:"script",innerHTML:JSON.stringify(e),props:{id:"unhead:payload",type:"application/json"}})}}},xy={hooks:{"tags:resolve":n=>{var e;for(const t of n.tags)if(typeof t.tagPriority=="string")for(const{prefix:i,offset:r}of oy){if(!t.tagPriority.startsWith(i))continue;const s=t.tagPriority.substring(i.length),o=(e=n.tags.find(a=>a._d===s))==null?void 0:e._p;if(o!==void 0){t._p=o+r;break}}n.tags.sort((t,i)=>{const r=ma(t),s=ma(i);return r<s?-1:r>s?1:t._p-i._p})}}},yy={meta:"content",link:"href",htmlAttrs:"lang"},My=["innerHTML","textContent"],Sy=n=>({hooks:{"tags:resolve":e=>{var o;const{tags:t}=e;let i;for(let a=0;a<t.length;a+=1)t[a].tag==="templateParams"&&(i=e.tags.splice(a,1)[0].props,a-=1);const r=i||{},s=r.separator||"|";delete r.separator,r.pageTitle=co(r.pageTitle||((o=t.find(a=>a.tag==="title"))==null?void 0:o.textContent)||"",r,s);for(const a of t){if(a.processTemplateParams===!1)continue;const l=yy[a.tag];if(l&&typeof a.props[l]=="string")a.props[l]=co(a.props[l],r,s);else if(a.processTemplateParams||a.tag==="titleTemplate"||a.tag==="title")for(const c of My)typeof a[c]=="string"&&(a[c]=co(a[c],r,s,a.tag==="script"&&a.props.type.endsWith("json")))}n._templateParams=r,n._separator=s},"tags:afterResolve":({tags:e})=>{let t;for(let i=0;i<e.length;i+=1){const r=e[i];r.tag==="title"&&r.processTemplateParams!==!1&&(t=r)}t!=null&&t.textContent&&(t.textContent=co(t.textContent,n._templateParams,n._separator))}}}),by={hooks:{"tags:resolve":n=>{const{tags:e}=n;let t,i;for(let r=0;r<e.length;r+=1){const s=e[r];s.tag==="title"?t=s:s.tag==="titleTemplate"&&(i=s)}if(i&&t){const r=Ec(i.textContent,t.textContent);r!==null?t.textContent=r||t.textContent:n.tags.splice(n.tags.indexOf(t),1)}else if(i){const r=Ec(i.textContent);r!==null&&(i.textContent=r,i.tag="title",i=void 0)}i&&n.tags.splice(n.tags.indexOf(i),1)}}},Ey={hooks:{"tags:afterResolve":n=>{for(const e of n.tags)typeof e.innerHTML=="string"&&(e.innerHTML&&(e.props.type==="application/ld+json"||e.props.type==="application/json")?e.innerHTML=e.innerHTML.replace(/</g,"\\u003C"):e.innerHTML=e.innerHTML.replace(new RegExp(`</${e.tag}`,"g"),`<\\/${e.tag}`))}}};let Wm;function Ty(n={}){const e=wy(n);return e.use(fy()),Wm=e}function yh(n,e){return!n||n==="server"&&e||n==="client"&&!e}function wy(n={}){const e=bm();e.addHooks(n.hooks||{}),n.document=n.document||(Qx?document:void 0);const t=!n.document,i=()=>{a.dirty=!0,e.callHook("entries:updated",a)};let r=0,s=[];const o=[],a={plugins:o,dirty:!1,resolvedOptions:n,hooks:e,headEntries(){return s},use(l){const c=typeof l=="function"?l(a):l;(!c.key||!o.some(u=>u.key===c.key))&&(o.push(c),yh(c.mode,t)&&e.addHooks(c.hooks||{}))},push(l,c){c==null||delete c.head;const u={_i:r++,input:l,...c};return yh(u.mode,t)&&(s.push(u),i()),{dispose(){s=s.filter(f=>f._i!==u._i),i()},patch(f){for(const h of s)h._i===u._i&&(h.input=u.input=f);i()}}},async resolveTags(){const l={tags:[],entries:[...s]};await e.callHook("entries:resolve",l);for(const c of l.entries){const u=c.resolvedInput||c.input;if(c.resolvedInput=await(c.transform?c.transform(u):u),c.resolvedInput)for(const f of await sy(c)){const h={tag:f,entry:c,resolvedOptions:a.resolvedOptions};await e.callHook("tag:normalise",h),l.tags.push(h.tag)}}return await e.callHook("tags:beforeResolve",l),await e.callHook("tags:resolve",l),await e.callHook("tags:afterResolve",l),l.tags},ssr:t};return[dy,vy,my,_y,xy,Sy,by,Ey,...(n==null?void 0:n.plugins)||[]].forEach(l=>a.use(l)),a.hooks.callHook("init",a),a}function Ay(){return Wm}const Ry=lm[0]==="3";function Cy(n){return typeof n=="function"?n():Ge(n)}function ga(n){if(n instanceof Promise||n instanceof Date||n instanceof RegExp)return n;const e=Cy(n);if(!n||!e)return e;if(Array.isArray(e))return e.map(t=>ga(t));if(typeof e=="object"){const t={};for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)){if(i==="titleTemplate"||i[0]==="o"&&i[1]==="n"){t[i]=Ge(e[i]);continue}t[i]=ga(e[i])}return t}return e}const Py={hooks:{"entries:resolve":n=>{for(const e of n.entries)e.resolvedInput=ga(e.input)}}},Xm="usehead";function Iy(n){return{install(t){Ry&&(t.config.globalProperties.$unhead=n,t.config.globalProperties.$head=n,t.provide(Xm,n))}}.install}function Ly(n={}){n.domDelayFn=n.domDelayFn||(t=>Da(()=>setTimeout(()=>t(),0)));const e=Ty(n);return e.use(Py),e.install=Iy(e),e}const Tc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},wc="__unhead_injection_handler__";function Dy(n){Tc[wc]=n}function Ju(){if(wc in Tc)return Tc[wc]();const n=$r(Xm);return n||Ay()}function Qu(n,e={}){const t=e.head||Ju();if(t)return t.ssr?t.push(n,e):Uy(t,n,e)}function Uy(n,e,t={}){const i=Xe(!1),r=Xe({});Kp(()=>{r.value=i.value?{}:ga(e)});const s=n.push(r.value,t);return Nt(r,a=>{s.patch(a)}),pr()&&(qs(()=>{s.dispose()}),wp(()=>{i.value=!0}),Tp(()=>{i.value=!1})),s}function Ny(n,e){const{title:t,titleTemplate:i,...r}=n;return Qu({title:t,titleTemplate:i,_flatMeta:r},{...e,transform(s){const o=Zu({...s._flatMeta});return delete s._flatMeta,{...s,meta:o}}})}let Wo,Xo;function Fy(){return Wo=$fetch(ju(`builds/meta/${lr().app.buildId}.json`),{responseType:"json"}),Wo.then(n=>{Xo=Tx(n.matcher)}).catch(n=>{console.error("[nuxt] Error fetching app manifest.",n)}),Wo}function za(){return Wo||Fy()}async function ef(n){if(await za(),!Xo)return console.error("[nuxt] Error creating app manifest matcher.",Xo),{};try{return Ax({},...Xo.matchAll(n).reverse())}catch(e){return console.error("[nuxt] Error matching route rules.",e),{}}}async function Mh(n,e={}){const t=await By(n,e),i=wt(),r=i._payloadCache=i._payloadCache||{};return t in r?r[t]||null:(r[t]=jm(n).then(s=>s?$m(t).then(o=>o||(delete r[t],null)):(r[t]=null,null)),r[t])}const Oy="_payload.json";async function By(n,e={}){const t=new URL(n,"http://localhost");if(t.host!=="localhost"||mr(t.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+n);const i=lr(),r=e.hash||(e.fresh?Date.now():i.app.buildId),s=i.app.cdnURL,o=s&&await jm(n)?s:i.app.baseURL;return ka(o,t.pathname,Oy+(r?`?${r}`:""))}async function $m(n){const e=fetch(n).then(t=>t.text().then(qm));try{return await e}catch(t){console.warn("[nuxt] Cannot load payload ",n,t)}return null}async function jm(n=Ha().path){if(n=fs(n),(await za()).prerendered.includes(n))return!0;const t=await ef(n);return!!t.prerender&&!t.redirect}let zi=null;async function ky(){var i;if(zi)return zi;const n=document.getElementById("__NUXT_DATA__");if(!n)return{};const e=await qm(n.textContent||""),t=n.dataset.src?await $m(n.dataset.src):void 0;return zi={...e,...t,...window.__NUXT__},(i=zi.config)!=null&&i.public&&(zi.config.public=Ci(zi.config.public)),zi}async function qm(n){return await qx(n,wt()._payloadRevivers)}function Hy(n,e){wt()._payloadRevivers[n]=e}const Ym=[["NuxtError",n=>Yu(n)],["EmptyShallowRef",n=>Uf(n==="_"?void 0:n==="0n"?BigInt(0):ca(n))],["EmptyRef",n=>Xe(n==="_"?void 0:n==="0n"?BigInt(0):ca(n))],["ShallowRef",n=>Uf(n)],["ShallowReactive",n=>Or(n)],["Ref",n=>Xe(n)],["Reactive",n=>Ci(n)]];Ym.push(["Island",({key:n,params:e,result:t})=>{const i=wt();return i.isHydrating||(i.payload.data[n]=i.payload.data[n]||$fetch(`/__nuxt_island/${n}.json`,{responseType:"json",...e?{params:e}:{}}).then(r=>(i.payload.data[n]=r,r))),{html:"",...t}}]);const zy=tn({name:"nuxt:revive-payload:client",order:-30,async setup(n){let e,t;for(const[i,r]of Ym)Hy(i,r);Object.assign(n.payload,([e,t]=Em(()=>n.runWithContext(ky)),e=await e,t(),e)),window.__NUXT__=n.payload}}),Vy=[],Gy=tn({name:"nuxt:head",enforce:"pre",setup(n){const e=Ly({plugins:Vy});Dy(()=>wt().vueApp._context.provides.usehead),n.vueApp.use(e);{let t=!0;const i=async()=>{t=!1,await Gm(e)};e.hooks.hook("dom:beforeRender",r=>{r.shouldRender=!t}),n.hooks.hook("page:start",()=>{t=!0}),n.hooks.hook("page:finish",()=>{n.isHydrating||i()}),n.hooks.hook("app:error",i),n.hooks.hook("app:suspense:resolve",i)}}}),Wy=async n=>{let e,t;const i=([e,t]=Em(()=>ef(n.path)),e=await e,t(),e);if(i.redirect)return mr(i.redirect,{acceptRelative:!0})?(window.location.href=i.redirect,!1):i.redirect},Xy=[Wy];function pl(n){typeof n=="object"&&(n=xm({pathname:n.path||"",search:Xu(n.query||{}),hash:n.hash||""}));const e=new URL(n.toString(),window.location.href);return{path:e.pathname,fullPath:n,query:pm(e.search),hash:e.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:n}}const $y=tn({name:"nuxt:router",enforce:"pre",setup(n){const e=B0(window.location.pathname,lr().app.baseURL)+window.location.search+window.location.hash,t=[],i={"navigate:before":[],"resolve:before":[],"navigate:after":[],error:[]},r=(f,h)=>(i[f].push(h),()=>i[f].splice(i[f].indexOf(h),1)),s=lr().app.baseURL,o=Ci(pl(e));async function a(f,h){try{const d=pl(f);for(const g of i["navigate:before"]){const _=await g(d,o);if(_===!1||_ instanceof Error)return;if(typeof _=="string"&&_.length)return a(_,!0)}for(const g of i["resolve:before"])await g(d,o);Object.assign(o,d),window.history[h?"replaceState":"pushState"]({},"",ka(s,d.fullPath)),n.isHydrating||await n.runWithContext(Bx);for(const g of i["navigate:after"])await g(d,o)}catch(d){for(const g of i.error)await g(d)}}const c={currentRoute:Vt(()=>o),isReady:()=>Promise.resolve(),options:{},install:()=>Promise.resolve(),push:f=>a(f,!1),replace:f=>a(f,!0),back:()=>window.history.go(-1),go:f=>window.history.go(f),forward:()=>window.history.go(1),beforeResolve:f=>r("resolve:before",f),beforeEach:f=>r("navigate:before",f),afterEach:f=>r("navigate:after",f),onError:f=>r("error",f),resolve:pl,addRoute:(f,h)=>{t.push(h)},getRoutes:()=>t,hasRoute:f=>t.some(h=>h.name===f),removeRoute:f=>{const h=t.findIndex(d=>d.name===f);h!==-1&&t.splice(h,1)}};n.vueApp.component("RouterLink",Ft({functional:!0,props:{to:{type:String,required:!0},custom:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:String},setup:(f,{slots:h})=>{const d=()=>a(f.to,f.replace);return()=>{var _;const g=c.resolve(f.to);return f.custom?(_=h.default)==null?void 0:_.call(h,{href:f.to,navigate:d,route:g}):cc("a",{href:f.to,onClick:m=>(m.preventDefault(),d())},h)}}})),window.addEventListener("popstate",f=>{const h=f.target.location;c.replace(h.href.replace(h.origin,""))}),n._route=o,n._middleware=n._middleware||{global:[],named:{}};const u=n.payload.state._layout;return n.hooks.hookOnce("app:created",async()=>{c.beforeEach(async(f,h)=>{f.meta=Ci(f.meta||{}),n.isHydrating&&u&&!Pi(f.meta.layout)&&(f.meta.layout=u),n._processingMiddleware=!0;{const d=new Set([...Xy,...n._middleware.global]);{const g=await n.runWithContext(()=>ef(f.path));if(g.appMiddleware)for(const _ in g.appMiddleware){const m=n._middleware.named[_];if(!m)return;g.appMiddleware[_]?d.add(m):d.delete(m)}}for(const g of d){const _=await n.runWithContext(()=>g(f,h));if(_!==!0&&(_||_===!1))return _}}}),c.afterEach(()=>{delete n._processingMiddleware}),await c.replace(e),H0(o.fullPath,e)||await n.runWithContext(()=>Nx(o.fullPath))}),{provide:{route:o,router:c}}}}),Sh=globalThis.requestIdleCallback||(n=>{const e=Date.now(),t={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{n(t)},1)}),LC=globalThis.cancelIdleCallback||(n=>{clearTimeout(n)}),tf=n=>{const e=wt();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{Sh(()=>n())}):Sh(()=>n())},jy="$s";function qy(...n){const e=typeof n[n.length-1]=="string"?n.pop():void 0;typeof n[0]!="string"&&n.unshift(e);const[t,i]=n;if(!t||typeof t!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+t);if(i!==void 0&&typeof i!="function")throw new Error("[nuxt] [useState] init must be a function: "+i);const r=jy+t,s=wt(),o=yp(s.payload.state,r);if(o.value===void 0&&i){const a=i();if(Tt(a))return s.payload.state[r]=a,a;o.value=a}return o}function Yy(n={}){const e=n.path||window.location.pathname;let t={};try{t=ca(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(n.force||(t==null?void 0:t.path)!==e||(t==null?void 0:t.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(n.ttl??1e4)}))}catch{}if(n.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:wt().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const Ky=tn({name:"nuxt-site-config:init",enforce:"pre",async setup(n){const e=qy("site-config");let t={};return t=e.value||window.__NUXT_SITE_CONFIG__,{provide:{nuxtSiteConfig:t}}}}),Zy=tn({name:"nuxt:payload",setup(n){cr().beforeResolve(async(e,t)=>{if(e.path===t.path)return;const i=await Mh(e.path);i&&Object.assign(n.static.data,i.data)}),tf(()=>{var e;n.hooks.hook("link:prefetch",async t=>{const{hostname:i}=new URL(t,window.location.href);i===window.location.hostname&&await Mh(t)}),((e=navigator.connection)==null?void 0:e.effectiveType)!=="slow-2g"&&setTimeout(za,1e3)})}}),Jy=tn(()=>{const n=cr();tf(()=>{n.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),Qy=tn(n=>{let e;async function t(){const i=await za();e&&clearTimeout(e),e=setTimeout(t,hh);try{const r=await $fetch(ju("builds/latest.json")+`?${Date.now()}`);r.id!==i.id&&n.hooks.callHook("app:manifest:update",r)}catch{}}tf(()=>{e=setTimeout(t,hh)})}),eM=tn({name:"nuxt:chunk-reload",setup(n){const e=cr(),t=lr(),i=new Set;e.beforeEach(()=>{i.clear()}),n.hook("app:chunkError",({error:s})=>{i.add(s)});function r(s){const a="href"in s&&s.href[0]==="#"?t.app.baseURL+s.href:ka(t.app.baseURL,s.fullPath);Yy({path:a,persistState:!0})}n.hook("app:manifest:update",()=>{e.beforeResolve(r)}),e.onError((s,o)=>{i.has(s)&&r(o)})}}),tM=tn({name:"nuxt:global-components"});function Va(n){let e;return e=wt().$nuxtSiteConfig,e||{}}const nM=tn(()=>{const n=Ju();if(!n)return;const e=Va(),t={meta:[],templateParams:{site:e,siteUrl:e.url,siteName:e.name}};e.separator&&(t.templateParams.separator=e.separator),e.titleSeparator&&(t.templateParams.titleSeparator=e.titleSeparator),e.description&&(t.templateParams.siteDescription=e.description,t.meta.push({name:"description",content:"%site.description"})),n.push(t,{tagPriority:150})});function iM(n={}){return{hooks:{entries:{resolve({entries:e}){var r,s;let t=null,i=999;for(const o of e){const a=o.resolvedInput?"resolvedInput":"input",l=o[a],c=(typeof l.titleTemplate=="object"?(r=l.titleTemplate)==null?void 0:r.tagPriority:!1)||o.tagPriority||100;l.titleTemplate!==void 0&&c<=i&&(t=l.titleTemplate,i=c)}for(const o of e){const a=o.resolvedInput?"resolvedInput":"input",l=o[a],c=l.meta||[];t=Ec(t,l.title);const u=l.title,f=(s=c.find(m=>m.name==="description"))==null?void 0:s.content,h=c.some(m=>m.property==="og:title"),d=c.some(m=>m.property==="og:image"),g=c.some(m=>m.name==="twitter:card"),_=c.some(m=>m.property==="og:description");if(o[a].meta=l.meta||[],!h&&(l.titleTemplate||l.title)){let m=(n==null?void 0:n.ogTitle)||t||l.title;typeof m=="function"&&(m=m(u)),m&&o[a].meta.push({property:"og:title",content:String(m)})}if(f&&!_){let m=(n==null?void 0:n.ogDescription)||f;typeof m=="function"&&(m=m(u)),m&&o[a].meta.push({property:"og:description",content:String(m)})}d&&!g&&o[a].meta.push({name:"twitter:card",content:(n==null?void 0:n.twitterCard)||"summary_large_image"})}}}}}}const rM=tn(()=>{const n=Ju();n&&n.use(iM())}),sM=/\d/,oM=["-","_","/","."];function aM(n=""){if(!sM.test(n))return n!==n.toLowerCase()}function lM(n,e){const t=oM,i=[];if(!n||typeof n!="string")return i;let r="",s,o;for(const a of n){const l=t.includes(a);if(l===!0){i.push(r),r="",s=void 0;continue}const c=aM(a);if(o===!1){if(s===!1&&c===!0){i.push(r),r=a,s=c;continue}if(s===!0&&c===!1&&r.length>1){const u=r.at(-1);i.push(r.slice(0,Math.max(0,r.length-1))),r=u+a,s=c;continue}}r+=a,s=c,o=l}return i.push(r),i}function cM(n){return n?n[0].toUpperCase()+n.slice(1):""}const uM=/^(a|an|and|as|at|but|by|for|if|in|is|nor|of|on|or|the|to|with)$/i;function fM(n,e){return(Array.isArray(n)?n:lM(n)).filter(Boolean).map(t=>uM.test(t)?t.toLowerCase():cM(t)).join(" ")}const hM=tn({name:"nuxt-seo:fallback-titles",env:{islands:!1},setup(){const n=Ha(),e=Vt(()=>{var s,o;if(typeof((s=n.meta)==null?void 0:s.title)=="string")return(o=n.meta)==null?void 0:o.title;const r=fs(n.path||"/").split("/").pop();return r?fM(r):null});Qu({title:()=>e.value},{tagPriority:101})}}),dM=tn(()=>{});function pM(n,e){let t=n;mr(n,{strict:!1,acceptRelative:!0})&&(t=$u(n).pathname);const i=pc(e.base||"/");i!=="/"&&t.startsWith(i)&&(t=t.slice(i.length));let r=fs(e.absolute?e.siteUrl:"");i!=="/"&&r.endsWith(i)&&(r=r.slice(0,r.indexOf(i)));const s=e.withBase?mc(i,r||"/"):r,o=mc(t,s);return t==="/"&&!e.withBase?Vs(o):gM(e.trailingSlash,o)}function mM(n){var t;return!!((t=(n.split("/").pop()||n).match(/\.[0-9a-z]+$/i))!=null&&t[0])}function gM(n,e){const t=$u(e);if(mM(t.pathname))return e;const i=n?Vs(t.pathname):fs(t.pathname);return`${t.protocol?`${t.protocol}//`:""}${t.host||""}${i}${t.search||""}${t.hash||""}`}function _M(n){return window.location.origin}function vM(n={}){const e=Va(),t=_M(),i=lr().app.baseURL||"/";return r=>Vt(()=>pM(Ge(r),{absolute:Ge(n.absolute),withBase:Ge(n.withBase),siteUrl:Ge(n.canonical)!==!1?e.url:t,trailingSlash:e.trailingSlash,base:i}))}function xM(n){const{canonicalQueryWhitelist:e}=lr().public["seo-utils"],t=Va(),i=Ha(),r=vM({withBase:!0,absolute:!0}),s=Vt(()=>{const{query:l}=i,c=r(i.path||"/").value||i.path,u=Object.fromEntries(Object.entries(l).filter(([f])=>e.includes(f)));return Object.keys(u).length?`${c}?${Xu(u)}`:c}),o={tagPriority:101};Qu({htmlAttrs:{lang:n.locale},templateParams:{site:t,siteName:t.name||""},titleTemplate:"%s %separator %siteName",link:[{rel:"canonical",href:()=>s.value}]},o);const a={ogType:"website",ogUrl:()=>s.value,ogLocale:()=>n.locale.value,ogSiteName:t.name};if(t.description&&(a.description=t.description),t.twitter){const l=t.twitter.startsWith("@")?t.twitter:`@${t.twitter}`;a.twitterCreator=l,a.twitterSite=l}Ny(a,o)}const yM=tn({name:"nuxt-seo:defaults",order:999,env:{islands:!1},setup(){const n=Va(),e=Xe(n.currentLocale||n.defaultLocale);xM({locale:e})}}),MM=[zy,Gy,$y,Ky,Zy,Jy,Qy,eM,tM,nM,rM,hM,dM,yM],SM="modulepreload",bM=function(n,e){return new URL(n,e).href},bh={},_a=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(t.map(c=>{if(c=bM(c,i),c in bh)return;bh[c]=!0;const u=c.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(!!i)for(let g=o.length-1;g>=0;g--){const _=o[g];if(_.href===c&&(!u||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${f}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":SM,u||(d.as="script"),d.crossOrigin="",d.href=c,l&&d.setAttribute("nonce",l),document.head.appendChild(d),u)return new Promise((g,_)=>{d.addEventListener("load",g),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};function EM(n,e){let t,i,r;const s=Xe(!0),o=()=>{s.value=!0,r()};Nt(n,o,{flush:"sync"});const a=typeof e=="function"?e:e.get,l=typeof e=="function"?void 0:e.set,c=C_((u,f)=>(i=u,r=f,{get(){return s.value&&(t=a(t),s.value=!1),i(),t},set(h){l==null||l(h)}}));return Object.isExtensible(c)&&(c.trigger=o),c}function ur(n){return Su()?(s_(n),!0):!1}function Ii(n){return typeof n=="function"?n():Ge(n)}const Ac=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const TM=n=>n!=null,wM=Object.prototype.toString,AM=n=>wM.call(n)==="[object Object]",$o=()=>{};function RM(n,e){var t;if(typeof n=="number")return n+e;const i=((t=n.match(/^-?\d+\.?\d*/))==null?void 0:t[0])||"",r=n.slice(i.length),s=Number.parseFloat(i)+e;return Number.isNaN(s)?n:s+r}function CM(n){return pr()}function PM(n,e=!0,t){CM()?yn(n,t):e?n():Da(n)}function IM(n,e=1e3,t={}){const{immediate:i=!0,immediateCallback:r=!1}=t;let s=null;const o=Xe(!1);function a(){s&&(clearInterval(s),s=null)}function l(){o.value=!1,a()}function c(){const u=Ii(e);u<=0||(o.value=!0,r&&n(),a(),o.value&&(s=setInterval(n,u)))}if(i&&Ac&&c(),Tt(e)||typeof e=="function"){const u=Nt(e,()=>{o.value&&Ac&&c()});ur(u)}return ur(l),{isActive:o,pause:l,resume:c}}const Ni=Ac?window:void 0;function Bn(n){var e;const t=Ii(n);return(e=t==null?void 0:t.$el)!=null?e:t}function er(...n){let e,t,i,r;if(typeof n[0]=="string"||Array.isArray(n[0])?([t,i,r]=n,e=Ni):[e,t,i,r]=n,!e)return $o;Array.isArray(t)||(t=[t]),Array.isArray(i)||(i=[i]);const s=[],o=()=>{s.forEach(u=>u()),s.length=0},a=(u,f,h,d)=>(u.addEventListener(f,h,d),()=>u.removeEventListener(f,h,d)),l=Nt(()=>[Bn(e),Ii(r)],([u,f])=>{if(o(),!u)return;const h=AM(f)?{...f}:f;s.push(...t.flatMap(d=>i.map(g=>a(u,d,g,h))))},{immediate:!0,flush:"post"}),c=()=>{l(),o()};return ur(c),c}function LM(){const n=Xe(!1),e=pr();return e&&yn(()=>{n.value=!0},e),n}function nf(n){const e=LM();return Vt(()=>(e.value,!!n()))}function Km(n,e={}){const{immediate:t=!0,fpsLimit:i=void 0,window:r=Ni}=e,s=Xe(!1),o=i?1e3/i:null;let a=0,l=null;function c(h){if(!s.value||!r)return;a||(a=h);const d=h-a;if(o&&d<o){l=r.requestAnimationFrame(c);return}a=h,n({delta:d,timestamp:h}),l=r.requestAnimationFrame(c)}function u(){!s.value&&r&&(s.value=!0,a=0,l=r.requestAnimationFrame(c))}function f(){s.value=!1,l!=null&&r&&(r.cancelAnimationFrame(l),l=null)}return t&&u(),ur(f),{isActive:Au(s),pause:f,resume:u}}function vs(n,e={}){const{window:t=Ni}=e,i=nf(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function");let r;const s=Xe(!1),o=c=>{s.value=c.matches},a=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",o):r.removeListener(o))},l=Kp(()=>{i.value&&(a(),r=t.matchMedia(Ii(n)),"addEventListener"in r?r.addEventListener("change",o):r.addListener(o),s.value=r.matches)});return ur(()=>{l(),a(),r=void 0}),s}function DM(n,e={}){function t(u,f){let h=Ii(n[Ii(u)]);return f!=null&&(h=RM(h,f)),typeof h=="number"&&(h=`${h}px`),h}const{window:i=Ni,strategy:r="min-width"}=e;function s(u){return i?i.matchMedia(u).matches:!1}const o=u=>vs(()=>`(min-width: ${t(u)})`,e),a=u=>vs(()=>`(max-width: ${t(u)})`,e),l=Object.keys(n).reduce((u,f)=>(Object.defineProperty(u,f,{get:()=>r==="min-width"?o(f):a(f),enumerable:!0,configurable:!0}),u),{});function c(){const u=Object.keys(n).map(f=>[f,o(f)]);return Vt(()=>u.filter(([,f])=>f.value).map(([f])=>f))}return Object.assign(l,{greaterOrEqual:o,smallerOrEqual:a,greater(u){return vs(()=>`(min-width: ${t(u,.1)})`,e)},smaller(u){return vs(()=>`(max-width: ${t(u,-.1)})`,e)},between(u,f){return vs(()=>`(min-width: ${t(u)}) and (max-width: ${t(f,-.1)})`,e)},isGreater(u){return s(`(min-width: ${t(u,.1)})`)},isGreaterOrEqual(u){return s(`(min-width: ${t(u)})`)},isSmaller(u){return s(`(max-width: ${t(u,-.1)})`)},isSmallerOrEqual(u){return s(`(max-width: ${t(u)})`)},isInBetween(u,f){return s(`(min-width: ${t(u)}) and (max-width: ${t(f,-.1)})`)},current:c,active(){const u=c();return Vt(()=>u.value.length===0?"":u.value.at(-1))}})}function UM(n){const e=pr(),t=EM(()=>null,()=>e.proxy.$el);return Rp(t.trigger),yn(t.trigger),t}function NM(n,e,t={}){const{window:i=Ni,...r}=t;let s;const o=nf(()=>i&&"ResizeObserver"in i),a=()=>{s&&(s.disconnect(),s=void 0)},l=Vt(()=>{const f=Ii(n);return Array.isArray(f)?f.map(h=>Bn(h)):[Bn(f)]}),c=Nt(l,f=>{if(a(),o.value&&i){s=new ResizeObserver(e);for(const h of f)h&&s.observe(h,r)}},{immediate:!0,flush:"post"}),u=()=>{a(),c()};return ur(u),{isSupported:o,stop:u}}function FM(n,e={width:0,height:0},t={}){const{window:i=Ni,box:r="content-box"}=t,s=Vt(()=>{var f,h;return(h=(f=Bn(n))==null?void 0:f.namespaceURI)==null?void 0:h.includes("svg")}),o=Xe(e.width),a=Xe(e.height),{stop:l}=NM(n,([f])=>{const h=r==="border-box"?f.borderBoxSize:r==="content-box"?f.contentBoxSize:f.devicePixelContentBoxSize;if(i&&s.value){const d=Bn(n);if(d){const g=d.getBoundingClientRect();o.value=g.width,a.value=g.height}}else if(h){const d=Array.isArray(h)?h:[h];o.value=d.reduce((g,{inlineSize:_})=>g+_,0),a.value=d.reduce((g,{blockSize:_})=>g+_,0)}else o.value=f.contentRect.width,a.value=f.contentRect.height},t);PM(()=>{const f=Bn(n);f&&(o.value="offsetWidth"in f?f.offsetWidth:e.width,a.value="offsetHeight"in f?f.offsetHeight:e.height)});const c=Nt(()=>Bn(n),f=>{o.value=f?e.width:0,a.value=f?e.height:0});function u(){l(),c()}return{width:o,height:a,stop:u}}function rf(n,e,t={}){const{root:i,rootMargin:r="0px",threshold:s=0,window:o=Ni,immediate:a=!0}=t,l=nf(()=>o&&"IntersectionObserver"in o),c=Vt(()=>{const g=Ii(n);return(Array.isArray(g)?g:[g]).map(Bn).filter(TM)});let u=$o;const f=Xe(a),h=l.value?Nt(()=>[c.value,Bn(i),f.value],([g,_])=>{if(u(),!f.value||!g.length)return;const m=new IntersectionObserver(e,{root:Bn(_),rootMargin:r,threshold:s});g.forEach(p=>p&&m.observe(p)),u=()=>{m.disconnect(),u=$o}},{immediate:a,flush:"post"}):$o,d=()=>{u(),h(),f.value=!1};return ur(d),{isSupported:l,isActive:f,pause(){u(),f.value=!1},resume(){f.value=!0},stop:d}}const OM={page:n=>[n.pageX,n.pageY],client:n=>[n.clientX,n.clientY],screen:n=>[n.screenX,n.screenY],movement:n=>n instanceof Touch?null:[n.movementX,n.movementY]};function BM(n={}){const{type:e="page",touch:t=!0,resetOnTouchEnds:i=!1,initialValue:r={x:0,y:0},window:s=Ni,target:o=s,scroll:a=!0,eventFilter:l}=n;let c=null,u=0,f=0;const h=Xe(r.x),d=Xe(r.y),g=Xe(null),_=typeof e=="function"?e:OM[e],m=C=>{const L=_(C);c=C,L&&([h.value,d.value]=L,g.value="mouse"),s&&(u=s.scrollX,f=s.scrollY)},p=C=>{if(C.touches.length>0){const L=_(C.touches[0]);L&&([h.value,d.value]=L,g.value="touch")}},A=()=>{if(!c||!s)return;const C=_(c);c instanceof MouseEvent&&C&&(h.value=C[0]+s.scrollX-u,d.value=C[1]+s.scrollY-f)},x=()=>{h.value=r.x,d.value=r.y},M=l?C=>l(()=>m(C),{}):C=>m(C),w=l?C=>l(()=>p(C),{}):C=>p(C),R=l?()=>l(()=>A(),{}):()=>A();if(o){const C={passive:!0};er(o,["mousemove","dragover"],M,C),t&&e!=="movement"&&(er(o,["touchstart","touchmove"],w,C),i&&er(o,"touchend",x,C)),a&&e==="page"&&er(s,"scroll",R,{passive:!0})}return{x:h,y:d,sourceType:g}}function DC(){const n=Xe([]);return n.value.set=e=>{e&&n.value.push(e)},Nu(()=>{n.value.length=0}),n}const Zm=Xe(0),Ga=()=>Zm,Jm=Xe(0),kM=()=>Jm;IM(()=>{Zm.value+=.1},100,{immediate:!0});Km(()=>{Jm.value+=.01});const sf=()=>{const n=Ga();return Pu(()=>{const e=.5+Math.sin(n.value)*.3,t=.5,i=.5+Math.cos(n.value)*.7;return`rgb(${e*255}, ${t*255}, ${i*255})`})},UC=()=>{const n=Ga();return Pu(()=>{const e=.5+Math.sin(n.value)*.3,t=.5,i=.5+Math.cos(n.value)*.7;return{r:e,g:t,b:i}})},HM=Ft({__name:"fluid-text",setup(n){Ba(o=>({"982f0d8e":Ge(r),"982f0d8c":Ge(s),"9bbbe584":Ge(t)}));const e=sf(),t=Vt(()=>e.value?`rgba(${e.value.match(/rgb\((.*)\)/)[1]}, 0.8)`:"255, 255, 255"),i=Xe(),r=Vt(()=>{if(!i.value)return 0;const{x:o}=i.value.getBoundingClientRect();return-o+"px"}),s=Vt(()=>{if(!i.value)return 0;const{y:o}=i.value.getBoundingClientRect();return-o+"px"});return(o,a)=>(tt(),St("span",{class:"m-fluid-text",ref_key:"root",ref:i},[Na(o.$slots,"default",{},void 0)],512))}}),cn=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},zM=cn(HM,[["__scopeId","data-v-ba399efb"]]),VM={class:"overflow-hidden text-wrap",style:{"white-space":"break-spaces","font-family":"monospace","font-size":"4rem"}},GM=Ft({__name:"random-text",props:{size:{type:[Number,String],default:10}},setup(n){const e=()=>{const s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";return s.charAt(Math.floor(Math.random()*s.length))},t=n,i=()=>{const s=Number(t.size)*Number(t.size)/2;return Array.from({length:s},e).map((o,a)=>(a+1)%Number(t.size)===0?`${o}
`:o).join("")},r=Xe();return yn(()=>{r.value=i()}),er("scroll",()=>{r.value=i()}),(s,o)=>(tt(),St("div",VM,ii(Ge(r)),1))}}),WM=[{title:"Github",href:"https://github.com/m0ksem"},{title:"LinkedIn",href:"https://www.linkedin.com/in/m0ksem/"},{title:"nedoshev@pm.me",href:"mailto:nedoshev@pm.me"}],XM=Ft({__name:"scrolldown",setup(n){const e=Xe(0);let t=-1;return yn(()=>{t=setTimeout(()=>{e.value=1},5e3)}),er("scroll",()=>{clearTimeout(t),e.value=0}),(i,r)=>(tt(),St("svg",{class:"scrolldown-icon",style:$s({opacity:Ge(e)}),xmlns:"http://www.w3.org/2000/svg",version:"1.0",width:"121.33",height:"121.33",viewBox:"0 0 91 91"},r[0]||(r[0]=[$e("path",{d:"M30.9 3.4C24.7 7.6 24 10.4 24 31s.7 23.4 6.9 27.6c3.2 2.2 4.6 2.4 14.2 2.4 9.3 0 11-.3 13.9-2.3 6.8-4.5 7.5-7 7.5-27.7S65.8 7.8 59 3.3C56.1 1.3 54.4 1 45.1 1c-9.6 0-11 .2-14.2 2.4zm26 4.2c4.2 3 5.1 7.1 5.1 23.4 0 22.9-1.4 25-17 25-15.2-.1-16-1.3-16-25s.8-24.9 16-25c7.2 0 10.1.4 11.9 1.6z"},null,-1),$e("path",{d:"M43.7 15.7c-.4.3-.7 3.1-.7 6 0 5.1.2 5.4 2.3 5.1 1.7-.2 2.3-1.1 2.5-3.7.6-6.2-1.5-10-4.1-7.4zM43.7 65.7c-.4.3-.7 4.2-.7 8.5v7.9l-2.9-2c-3.6-2.6-6.1-2.7-6.1-.4 0 2 9.1 10.3 11.2 10.3 2.3 0 11.8-8.9 11.1-10.5-.8-2.1-3.3-1.8-6 .7L48 82.3v-7.4c0-8-1.8-11.8-4.3-9.2z"},null,-1)]),4))}}),$M=cn(XM,[["__scopeId","data-v-39d50c33"]]),jM={class:"hello-section"},qM={class:"container max-w-8xl px-4 flex flex-col justify-center h-screen"},YM={class:"md:text-9xl z-10 font-bold md:-ml-2 -ml-1 text-5xl"},KM={class:"cross-line-background"},ZM={class:"cross-line-background__content"},JM=["href"],QM={class:"hello-section__scroll-icon"},eS=Ft({__name:"hello",setup(n){Ba(r=>({"5c7276ab":Ge(t)}));const e=Ga(),t=Vt(()=>{const r=.5+Math.sin(e.value+.7)*.3,s=.5,o=.5+Math.cos(e.value+.7)*.7;return`rgb(${r*255}, ${s*255}, ${o*255})`}),i=new Date().getFullYear()-2e3;return(r,s)=>(tt(),St(At,null,[$e("div",jM,[$e("div",qM,[$e("h1",YM,[Ke(zM,null,{default:Zr(()=>s[0]||(s[0]=[Ys("MAKSIM NEDOSHEV")])),_:1})]),$e("p",{style:{color:"var(--m-rgb)",filter:"brightness(0.7)"}},ii(i)+"y.o. Web Developer "),s[1]||(s[1]=$e("p",{style:{color:"var(--m-rgb)",filter:"brightness(0.5)"}}," from Kyiv, Ukraine ",-1))]),$e("div",KM,[$e("div",ZM,[(tt(!0),St(At,null,Ou(Ge(WM),({href:o,title:a})=>(tt(),St("a",{key:o,class:"link",href:o,target:"_blank"},ii(a),9,JM))),128))])]),$e("div",QM,[Ke($M)])]),Ke(GM,{size:"20",class:"absolute right-[0] top-[0] text-white -z-10 opacity-10",style:{color:"var(--m-rgb)"}})],64))}}),tS=cn(eS,[["__scopeId","data-v-8b32a19b"]]),nS=60,iS=n=>{const e=1e3/nS;let t=Number(new Date);return Km(()=>{const i=Number(new Date),r=i-t;r>e&&(t=i-r%e,n())})},Qm=(n,e)=>{const{pause:t,resume:i}=iS(e);rf(n,([{isIntersecting:r}])=>{r?i():t()})},rS=()=>{const n=Xe(window),e=Xe({x:0,y:0,isMoving:!1});let t;const i=r=>{e.value={x:r.movementX,y:r.movementY,isMoving:!0},clearTimeout(t),t=setTimeout(()=>{e.value={x:0,y:0,isMoving:!1}},2e3)};return Nt(n,(r,s)=>{s&&s.removeEventListener("mousemove",i),r&&r.addEventListener("mousemove",i)},{immediate:!0}),e},ml=(n,e,t)=>{const i=n.createProgram();if(!i)throw new Error("Can not create program");return n.attachShader(i,e),n.attachShader(i,t),n.linkProgram(i),n.useProgram(i),i},uo=(n,e,t)=>{const i=n.createShader(t);if(!i)throw new Error("Can not compile shader");return n.shaderSource(i,e),n.compileShader(i),n.getShaderParameter(i,n.COMPILE_STATUS)?i:(console.warn("Shader compile failed with: "+n.getShaderInfoLog(i)),null)},gl=(n,e,t)=>{const i=n.getAttribLocation(e,t);if(i===-1||i===null)throw`Cannot find attribute ${t}.`;return i},Eh=(n,e,t)=>{const i=n.getUniformLocation(e,t);if(i===-1||i==null)throw`Cannot find uniform ${t}.`;return i},_l=(n,e)=>{const t=n.createBuffer();if(!t)throw"Cannot create buffer";return n.bindBuffer(n.ARRAY_BUFFER,t),n.bufferData(n.ARRAY_BUFFER,e,n.STATIC_DRAW),t},sS=new Float32Array([-1,1,-1,-1,1,1,1,-1]),oS=`
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;var aS=(n,e)=>{for(const[t,i]of e)n[t]=i;return n};const Th=n=>{n.height=n.offsetHeight,n.width=n.offsetWidth},lS=Ft({name:"Shader2d",props:{ctxOptions:{type:Object,default:()=>({})},webgl:{type:String,default:"webgl"},vertex:{type:String,default:oS},fragment:{type:String,required:!0},modelValue:{type:Object,default:()=>({})}},emits:["ready","update:modelValue"],setup(n,{emit:e}){const t=Xe(),i=Xe(!1);let r,s,o,a,l=null;const c=()=>{l!=null&&cancelAnimationFrame(l),e("ready",{ctx:s,gl:s,createVertexBuffer:f=>_l(s,f),getUniform:f=>Eh(s,r,f),getAttribute:f=>gl(s,r,f),draw(f){const h=()=>{f(),l=requestAnimationFrame(h)};h()},canvas:t.value,onResize:u})},u=()=>{t.value&&Th(t.value),s&&s.viewport(0,0,s.canvas.width,s.canvas.height)};return yn(()=>{if(!t.value)return;if(Th(t.value),s=t.value.getContext(n.webgl,n.ctxOptions),!s)throw new Error("Webgl is not supported");if(o=uo(s,n.vertex,s.VERTEX_SHADER),a=uo(s,n.fragment,s.FRAGMENT_SHADER),!o||!a)return i.value=!0;r=ml(s,o,a),_l(s,sS);const f=gl(s,r,"position");s.enableVertexAttribArray(f),s.vertexAttribPointer(f,2,s.FLOAT,!1,2*4,0),e("update:modelValue",{ctx:s,gl:s,createVertexBuffer:h=>_l(s,h),getUniform:h=>Eh(s,r,h),getAttribute:h=>gl(s,r,h),canvas:t.value,onResize:u}),c(),window.addEventListener("resize",u)}),qs(()=>{window.removeEventListener("resize",u)}),Nt(()=>n.fragment,()=>{if(i.value=!1,a=uo(s,n.fragment,s.FRAGMENT_SHADER),!o||!a)return i.value=!0;r=ml(s,o,a),c()}),Nt(()=>n.vertex,()=>{if(i.value=!1,o=uo(s,n.vertex,s.VERTEX_SHADER),!o||!a)return i.value=!0;r=ml(s,o,a),c()}),()=>i.value?cc({text:"Shader compilation error"}):cc("canvas",{ref:t})}});var cS=aS(lS,[["__scopeId","data-v-6e714080"]]);const uS=cS,eg=()=>{const{proxy:n}=pr(),e=Xe();return yn(()=>{e.value=n==null?void 0:n.$el}),qs(()=>{e.value=void 0}),e},fS=`
precision highp float;

uniform float time;
uniform float width;
uniform float height;

vec2 resolution = vec2(width, height);

float strength = 0.2;
float PI = 3.14;

vec2 tornado (vec2 position, float frame) {
  float start = 2.0;
  float animation_speed = 0.1;
  float breathing_animation_speed = 0.5;
  float movement = start + cos(frame) * animation_speed;

  for (float k = 1.0; k < 11.0; k += 1.0) {
    position.x += sin(movement * 2.0 + k * position.y) * strength + frame * 0.1;
    position.y += cos(movement + k * position.x + 0.1 * position.y) * strength - 0.05;
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
  vec2 st = gl_FragCoord.xy / resolution.xy;
  vec2 t = tornado(st + 0.9, time);

  vec3 rgb = vec3(clamp(t.x * time / 2.0, 0.0, 0.5), 0.0, t.y);

  gl_FragColor = vec4(rgb * 0.5, 0.1) * st.y;
}
`,hS=Ft({__name:"fluid-background",setup(n){const e=eg(),{width:t,height:i}=FM(e),r=kM(),s=Xe(),o=l=>{s.value=l;const{gl:c,getUniform:u,draw:f}=l,h=u("time");c.uniform1f(u("width"),t.value),c.uniform1f(u("height"),i.value),c.viewport(0,0,c.canvas.width,c.canvas.height),f(()=>{c.clearColor(0,0,0,1),c.uniform1f(h,r.value/10),c.drawArrays(c.TRIANGLE_STRIP,0,4)})},a=()=>{if(!s.value)return;const{gl:l,getUniform:c}=s.value;l.uniform1f(c("width"),t.value),l.uniform1f(c("height"),i.value)};return Nt([t,i],a),er("resize",a),(l,c)=>(tt(),wn(Ge(uS),{class:"fluid-background",fragment:fS,onReady:o}))}}),dS=cn(hS,[["__scopeId","data-v-ead1a193"]]),pS={class:"star-background"},Wn=50,mS=500,wh=3,gS=2,_S=.01,Ah=.3,Rh=30,vS=500,Ch=30,xS=Ft({__name:"star-background",setup(n){const e=(_=.5)=>Math.random()<_,t=Xe(),i=sf(),r=["#1D1D1Daa","#800034","#7f00ff","#7b0046","#8000b3","#700064","#4d00ff","#410062","#76008b","#800069"],s=()=>{if(e(.5))return r[0]},o=(_,m,p)=>Math.min(Math.max(_,m),p),a=()=>{const _={x:Math.random()*2-1,y:Math.random()*2-1};return{x:Math.random()*(t.value.width-Wn),y:Math.random()*(t.value.height-Wn),size:Math.random()*wh,animation:Math.random(),velocity:_,color:s(),tail:!1}},l=_=>_>Rh?_/Rh:_,c=(_,m=.5)=>`rgb(${_.slice(4,-1).split(",").map(A=>parseInt(A)).map(A=>A*m).join(",")})`,u=(_,m)=>`rgba(${_.slice(4,-1).split(",").map(A=>parseInt(A)).join(",")}, ${m})`,f=(_,m)=>{const p=_.createLinearGradient(m.x,m.y,m.x-m.size*Ch/2*l(m.velocity.x),m.y-m.size*Ch/2*l(m.velocity.y));return p.addColorStop(0,m.color||c("rgb(255, 255, 255)",Math.random()*.5+.5)),p.addColorStop(.9,"#ffffff00"),p},h=(_,m,p)=>{const A=_.createRadialGradient(m.x,m.y,0,m.x,m.y,m.size+5*o(p,.8,1));return A.addColorStop(1,u(i.value,0)),A.addColorStop(0,m.color||u(c(i.value),.5)),A},d=rS(),g=BM();return yn(()=>{t.value.width=t.value.offsetWidth,t.value.height=t.value.offsetHeight;const _=t.value.getContext("2d");if(!_)return;const m=Array(mS).fill(0).map(a);let p=0;const A=(w,R,C,L)=>{const T=w-C,S=R-L,I=Math.sqrt(Math.pow(T,2)+Math.pow(S,2)),X=Math.abs((d.value.x+d.value.y)/2),z=o(1-Math.pow(I/vS,2),0,1)*X*.5;return{x:T/I*z,y:S/I*z}},x=(w,R)=>{_.beginPath(),_.arc(w.x,w.y,o(w.size*R,gS,wh),0,Math.PI*2),_.fill()},M=(w,R)=>{_.beginPath(),_.arc(w.x,w.y,(w.size+10)*o(R,.8,1),0,Math.PI*2),_.fill()};Qm(t,()=>{p+=_S,_.clearRect(0,0,t.value.width,t.value.height),m.forEach(w=>{const R=(Math.sin(p+w.animation)+1)/2;w.color||(_.fillStyle=h(_,w,R),M(w,R)),_.fillStyle=f(_,w),x(w,R);const C=A(w.x,w.y,g.x.value,g.y.value);w.x+=(w.velocity.x+C.x)*Ah,w.y+=(w.velocity.y+C.y)*Ah,w.x<-Wn&&(w.x=t.value.width),w.x>t.value.width+Wn&&(w.x=-Wn),w.y<-Wn&&(w.y=t.value.height+Wn),w.y>t.value.height+Wn&&(w.y=-Wn)})})}),(_,m)=>(tt(),St("div",pS,[$e("canvas",{ref_key:"canvas",ref:t},null,512),Ke(dS)]))}}),yS=cn(xS,[["__scopeId","data-v-91bc578e"]]),MS={},SS={class:"surface-bg"};function bS(n,e){return tt(),St("div",SS,[Na(n.$slots,"default",{},void 0)])}const ES=cn(MS,[["render",bS],["__scopeId","data-v-625bb13d"]]),TS=Symbol.for("nuxt:client-only"),wS=Ft({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(n,{slots:e,attrs:t}){const i=Xe(!1);return yn(()=>{i.value=!0}),ku(TS,!0),r=>{var l;if(i.value)return(l=e.default)==null?void 0:l.call(e);const s=e.fallback||e.placeholder;if(s)return s();const o=r.fallback||r.placeholder||"",a=r.fallbackTag||r.placeholderTag||"span";return St(a,t,o)}}}),AS=""+new URL("engine.DuYhVgMP.png",import.meta.url).href,RS=""+new URL("checkers.D71VM1th.png",import.meta.url).href,CS=""+new URL("tests.BbrfGl3f.png",import.meta.url).href,PS=""+new URL("napasproject.BWJi0GGl.png",import.meta.url).href,IS=""+new URL("vue-nodes.BsCMHTFC.png",import.meta.url).href,LS=[{name:"BronzeEngine",description:"WebGL game engine",link:{text:"Check repository",url:"https://github.com/m0ksem/Bronze-Engine#-bronze-engine-"},image:AS},{name:"GameCheckersBot",description:"Telegram bot",link:{text:"Check repository",url:"https://github.com/m0ksem/GameCheckersBot"},image:RS},{name:"ImproveTests",description:"Android app",link:{text:"Last release",url:"https://github.com/m0ksem/Tests/releases"},image:CS},{name:"NapasProject",description:"Website",link:{text:"Visit",url:"https://napas-project.com/"},image:PS},{name:"VueNodes",description:"Library",link:{text:"Check repository",url:"https://github.com/m0ksem/vue-nodes"},image:IS}],DS={class:"libs"},US=["href"],NS=Ft({__name:"lib-list",setup(n){const e=[{href:"https://github.com/m0ksem/unplugin-object-3d",title:"unplugin-3d-object"},{href:"https://github.com/m0ksem/vue-glsl",title:"vue-glsl"},{href:"https://github.com/m0ksem/vue-custom-scrollbar/tree/master/packages/vue-custom-scrollbar",title:"vue-custom-scrollbar"},{href:"https://github.com/m0ksem/vscode-vue3-snippets",title:"vscode-vue3-snippets"},{href:"https://github.com/m0ksem/clocks",title:"clocks"},{href:"https://github.com/m0ksem/google-calendar",title:"google-calendar"},{href:"https://github.com/m0ksem/telegram-bot-template",title:"telegram-bot-template"}];return(t,i)=>(tt(),St("div",DS,[$e("ul",null,[(tt(),St(At,null,Ou(e,({href:r,title:s})=>$e("li",{key:s},[$e("a",{href:r,target:"_blank"},ii(s),9,US)])),64))])]))}}),FS=cn(NS,[["__scopeId","data-v-b88cdd7a"]]),OS={class:"projects-list container"},BS=["href","title"],kS={class:"project"},HS={class:"project__image"},zS=["src"],VS={class:"project__text"},GS={class:"project__link-text"},WS={class:"project-wrapper"},XS={class:"project"},$S=Ft({__name:"projects-list",setup(n){return(e,t)=>(tt(),St("div",OS,[(tt(!0),St(At,null,Ou(Ge(LS),i=>(tt(),St("a",{class:"project-wrapper",key:i.name,href:i.link.url,title:i.link.text,target:"_blank"},[$e("div",kS,[$e("div",HS,[$e("img",{src:i.image},null,8,zS)]),$e("div",VS,[$e("h3",null,ii(i.name),1),$e("p",null,ii(i.description),1),$e("div",GS,[$e("span",null,ii(i.link.text),1)])])])],8,BS))),128)),$e("div",WS,[$e("div",XS,[Ke(FS)])])]))}}),jS=cn($S,[["__scopeId","data-v-c774a45e"]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const of="171",qS=0,Ph=1,YS=2,tg=1,KS=2,Zn=3,Li=0,en=1,ei=2,Ai=0,qr=1,Ih=2,Lh=3,Dh=4,ZS=5,Ji=100,JS=101,QS=102,eb=103,tb=104,nb=200,ib=201,rb=202,sb=203,Rc=204,Cc=205,ob=206,ab=207,lb=208,cb=209,ub=210,fb=211,hb=212,db=213,pb=214,Pc=0,Ic=1,Lc=2,ns=3,Dc=4,Uc=5,Nc=6,Fc=7,af=0,mb=1,gb=2,Ri=0,_b=1,vb=2,xb=3,yb=4,Mb=5,Sb=6,bb=7,Uh="attached",Eb="detached",ng=300,is=301,rs=302,Oc=303,Bc=304,Wa=306,kc=1e3,tr=1001,Hc=1002,ln=1003,Tb=1004,fo=1005,kn=1006,vl=1007,nr=1008,ai=1009,ig=1010,rg=1011,Gs=1012,lf=1013,fr=1014,Cn=1015,Zs=1016,cf=1017,uf=1018,ss=1020,sg=35902,og=1021,ag=1022,mn=1023,lg=1024,cg=1025,Yr=1026,os=1027,ff=1028,hf=1029,ug=1030,df=1031,pf=1033,jo=33776,qo=33777,Yo=33778,Ko=33779,zc=35840,Vc=35841,Gc=35842,Wc=35843,Xc=36196,$c=37492,jc=37496,qc=37808,Yc=37809,Kc=37810,Zc=37811,Jc=37812,Qc=37813,eu=37814,tu=37815,nu=37816,iu=37817,ru=37818,su=37819,ou=37820,au=37821,Zo=36492,lu=36494,cu=36495,fg=36283,uu=36284,fu=36285,hu=36286,wb=2200,Ab=2201,Rb=2202,va=2300,du=2301,xl=2302,kr=2400,Hr=2401,xa=2402,mf=2500,Cb=2501,NC=0,FC=1,OC=2,Pb=3200,Ib=3201,gf=0,Lb=1,Ei="",pn="srgb",as="srgb-linear",ya="linear",ht="srgb",yr=7680,Nh=519,Db=512,Ub=513,Nb=514,hg=515,Fb=516,Ob=517,Bb=518,kb=519,pu=35044,Fh="300 es",ni=2e3,Ma=2001;class gr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Oh=1234567;const Ns=Math.PI/180,ls=180/Math.PI;function Ln(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function qe(n,e,t){return Math.max(e,Math.min(t,n))}function _f(n,e){return(n%e+e)%e}function Hb(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function zb(n,e,t){return n!==e?(t-n)/(e-n):0}function Fs(n,e,t){return(1-t)*n+t*e}function Vb(n,e,t,i){return Fs(n,e,1-Math.exp(-t*i))}function Gb(n,e=1){return e-Math.abs(_f(n,e*2)-e)}function Wb(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Xb(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function $b(n,e){return n+Math.floor(Math.random()*(e-n+1))}function jb(n,e){return n+Math.random()*(e-n)}function qb(n){return n*(.5-Math.random())}function Yb(n){n!==void 0&&(Oh=n);let e=Oh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Kb(n){return n*Ns}function Zb(n){return n*ls}function Jb(n){return(n&n-1)===0&&n!==0}function Qb(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function eE(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function tE(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),h=o((e-i)/2),d=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*f,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function An(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ut(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const BC={DEG2RAD:Ns,RAD2DEG:ls,generateUUID:Ln,clamp:qe,euclideanModulo:_f,mapLinear:Hb,inverseLerp:zb,lerp:Fs,damp:Vb,pingpong:Gb,smoothstep:Wb,smootherstep:Xb,randInt:$b,randFloat:jb,randFloatSpread:qb,seededRandom:Yb,degToRad:Kb,radToDeg:Zb,isPowerOfTwo:Jb,ceilPowerOfTwo:Qb,floorPowerOfTwo:eE,setQuaternionFromProperEuler:tE,normalize:ut,denormalize:An};class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,i,r,s,o,a,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],_=r[0],m=r[3],p=r[6],A=r[1],x=r[4],M=r[7],w=r[2],R=r[5],C=r[8];return s[0]=o*_+a*A+l*w,s[3]=o*m+a*x+l*R,s[6]=o*p+a*M+l*C,s[1]=c*_+u*A+f*w,s[4]=c*m+u*x+f*R,s[7]=c*p+u*M+f*C,s[2]=h*_+d*A+g*w,s[5]=h*m+d*x+g*R,s[8]=h*p+d*M+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,g=t*f+i*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(yl.makeScale(e,t)),this}rotate(e){return this.premultiply(yl.makeRotation(-e)),this}translate(e,t){return this.premultiply(yl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yl=new Ve;function dg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ws(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function nE(){const n=Ws("canvas");return n.style.display="block",n}const Bh={};function Fr(n){n in Bh||(Bh[n]=!0,console.warn(n))}function iE(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function rE(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function sE(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const kh=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hh=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function oE(){const n={enabled:!0,workingColorSpace:as,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ht&&(r.r=ri(r.r),r.g=ri(r.g),r.b=ri(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ht&&(r.r=Kr(r.r),r.g=Kr(r.g),r.b=Kr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ei?ya:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[as]:{primaries:e,whitePoint:i,transfer:ya,toXYZ:kh,fromXYZ:Hh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:e,whitePoint:i,transfer:ht,toXYZ:kh,fromXYZ:Hh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}}),n}const et=oE();function ri(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Kr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Mr;class aE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Mr===void 0&&(Mr=Ws("canvas")),Mr.width=e.width,Mr.height=e.height;const i=Mr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Mr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ws("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ri(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ri(t[i]/255)*255):t[i]=ri(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lE=0;class pg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lE++}),this.uuid=Ln(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ml(r[o].image)):s.push(Ml(r[o]))}else s=Ml(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ml(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?aE.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cE=0;class Gt extends gr{constructor(e=Gt.DEFAULT_IMAGE,t=Gt.DEFAULT_MAPPING,i=tr,r=tr,s=kn,o=nr,a=mn,l=ai,c=Gt.DEFAULT_ANISOTROPY,u=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cE++}),this.uuid=Ln(),this.name="",this.source=new pg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ng)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kc:e.x=e.x-Math.floor(e.x);break;case tr:e.x=e.x<0?0:1;break;case Hc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kc:e.y=e.y-Math.floor(e.y);break;case tr:e.y=e.y<0?0:1;break;case Hc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=ng;Gt.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,i=0,r=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,M=(d+1)/2,w=(p+1)/2,R=(u+h)/4,C=(f+_)/4,L=(g+m)/4;return x>M&&x>w?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=R/i,s=C/i):M>w?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=R/r,s=L/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=C/s,r=L/s),this.set(i,r,s,t),this}let A=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(f-_)/A,this.z=(h-u)/A,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uE extends gr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Gt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new pg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hr extends uE{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class mg extends Gt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fE extends Gt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class si{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let m=1-a;const p=l*h+c*d+u*g+f*_,A=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const w=Math.sqrt(x),R=Math.atan2(w,p*A);m=Math.sin(m*R)/w,a=Math.sin(a*R)/w}const M=a*A;if(l=l*m+h*M,c=c*m+d*M,u=u*m+g*M,f=f*m+_*M,m===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-a*d,e[t+2]=c*g+u*d+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Sl.copy(this).projectOnVector(e),this.sub(Sl)}reflect(e){return this.sub(Sl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sl=new H,zh=new si;class Fi{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,bn):bn.fromBufferAttribute(s,o),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ho.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ho.copy(i.boundingBox)),ho.applyMatrix4(e.matrixWorld),this.union(ho)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xs),po.subVectors(this.max,xs),Sr.subVectors(e.a,xs),br.subVectors(e.b,xs),Er.subVectors(e.c,xs),di.subVectors(br,Sr),pi.subVectors(Er,br),Vi.subVectors(Sr,Er);let t=[0,-di.z,di.y,0,-pi.z,pi.y,0,-Vi.z,Vi.y,di.z,0,-di.x,pi.z,0,-pi.x,Vi.z,0,-Vi.x,-di.y,di.x,0,-pi.y,pi.x,0,-Vi.y,Vi.x,0];return!bl(t,Sr,br,Er,po)||(t=[1,0,0,0,1,0,0,0,1],!bl(t,Sr,br,Er,po))?!1:(mo.crossVectors(di,pi),t=[mo.x,mo.y,mo.z],bl(t,Sr,br,Er,po))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xn=[new H,new H,new H,new H,new H,new H,new H,new H],bn=new H,ho=new Fi,Sr=new H,br=new H,Er=new H,di=new H,pi=new H,Vi=new H,xs=new H,po=new H,mo=new H,Gi=new H;function bl(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Gi.fromArray(n,s);const a=r.x*Math.abs(Gi.x)+r.y*Math.abs(Gi.y)+r.z*Math.abs(Gi.z),l=e.dot(Gi),c=t.dot(Gi),u=i.dot(Gi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const hE=new Fi,ys=new H,El=new H;class fi{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):hE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ys.subVectors(e,this.center);const t=ys.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ys,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(El.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ys.copy(e.center).add(El)),this.expandByPoint(ys.copy(e.center).sub(El))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $n=new H,Tl=new H,go=new H,mi=new H,wl=new H,_o=new H,Al=new H;class Xa{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($n.copy(this.origin).addScaledVector(this.direction,t),$n.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Tl.copy(e).add(t).multiplyScalar(.5),go.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(Tl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(go),a=mi.dot(this.direction),l=-mi.dot(go),c=mi.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Tl).addScaledVector(go,h),d}intersectSphere(e,t){$n.subVectors(e.center,this.origin);const i=$n.dot(this.direction),r=$n.dot($n)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,t,i,r,s){wl.subVectors(t,e),_o.subVectors(i,e),Al.crossVectors(wl,_o);let o=this.direction.dot(Al),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mi.subVectors(this.origin,e);const l=a*this.direction.dot(_o.crossVectors(mi,_o));if(l<0)return null;const c=a*this.direction.dot(wl.cross(mi));if(c<0||l+c>o)return null;const u=-a*mi.dot(Al);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(e,t,i,r,s,o,a,l,c,u,f,h,d,g,_,m){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,d,g,_,m)}set(e,t,i,r,s,o,a,l,c,u,f,h,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Tr.setFromMatrixColumn(e,0).length(),s=1/Tr.setFromMatrixColumn(e,1).length(),o=1/Tr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h-_*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=o*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dE,e,pE)}lookAt(e,t,i){const r=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),gi.crossVectors(i,rn),gi.lengthSq()===0&&(Math.abs(i.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),gi.crossVectors(i,rn)),gi.normalize(),vo.crossVectors(rn,gi),r[0]=gi.x,r[4]=vo.x,r[8]=rn.x,r[1]=gi.y,r[5]=vo.y,r[9]=rn.y,r[2]=gi.z,r[6]=vo.z,r[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],A=i[3],x=i[7],M=i[11],w=i[15],R=r[0],C=r[4],L=r[8],T=r[12],S=r[1],I=r[5],X=r[9],z=r[13],Z=r[2],te=r[6],k=r[10],ee=r[14],N=r[3],ue=r[7],ve=r[11],Ee=r[15];return s[0]=o*R+a*S+l*Z+c*N,s[4]=o*C+a*I+l*te+c*ue,s[8]=o*L+a*X+l*k+c*ve,s[12]=o*T+a*z+l*ee+c*Ee,s[1]=u*R+f*S+h*Z+d*N,s[5]=u*C+f*I+h*te+d*ue,s[9]=u*L+f*X+h*k+d*ve,s[13]=u*T+f*z+h*ee+d*Ee,s[2]=g*R+_*S+m*Z+p*N,s[6]=g*C+_*I+m*te+p*ue,s[10]=g*L+_*X+m*k+p*ve,s[14]=g*T+_*z+m*ee+p*Ee,s[3]=A*R+x*S+M*Z+w*N,s[7]=A*C+x*I+M*te+w*ue,s[11]=A*L+x*X+M*k+w*ve,s[15]=A*T+x*z+M*ee+w*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*d-i*l*d)+_*(+t*l*d-t*c*h+s*o*h-r*o*d+r*c*u-s*l*u)+m*(+t*c*f-t*a*d-s*o*f+i*o*d+s*a*u-i*c*u)+p*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],A=f*m*c-_*h*c+_*l*d-a*m*d-f*l*p+a*h*p,x=g*h*c-u*m*c-g*l*d+o*m*d+u*l*p-o*h*p,M=u*_*c-g*f*c+g*a*d-o*_*d-u*a*p+o*f*p,w=g*f*l-u*_*l-g*a*h+o*_*h+u*a*m-o*f*m,R=t*A+i*x+r*M+s*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=A*C,e[1]=(_*h*s-f*m*s-_*r*d+i*m*d+f*r*p-i*h*p)*C,e[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*p+i*l*p)*C,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*d-i*l*d)*C,e[4]=x*C,e[5]=(u*m*s-g*h*s+g*r*d-t*m*d-u*r*p+t*h*p)*C,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*p-t*l*p)*C,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*d+t*l*d)*C,e[8]=M*C,e[9]=(g*f*s-u*_*s-g*i*d+t*_*d+u*i*p-t*f*p)*C,e[10]=(o*_*s-g*a*s+g*i*c-t*_*c-o*i*p+t*a*p)*C,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*d-t*a*d)*C,e[12]=w*C,e[13]=(u*_*r-g*f*r+g*i*h-t*_*h-u*i*m+t*f*m)*C,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*m-t*a*m)*C,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,g=s*f,_=o*u,m=o*f,p=a*f,A=l*c,x=l*u,M=l*f,w=i.x,R=i.y,C=i.z;return r[0]=(1-(_+p))*w,r[1]=(d+M)*w,r[2]=(g-x)*w,r[3]=0,r[4]=(d-M)*R,r[5]=(1-(h+p))*R,r[6]=(m+A)*R,r[7]=0,r[8]=(g+x)*C,r[9]=(m-A)*C,r[10]=(1-(h+_))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Tr.set(r[0],r[1],r[2]).length();const o=Tr.set(r[4],r[5],r[6]).length(),a=Tr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],En.copy(this);const c=1/s,u=1/o,f=1/a;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=u,En.elements[5]*=u,En.elements[6]*=u,En.elements[8]*=f,En.elements[9]*=f,En.elements[10]*=f,t.setFromRotationMatrix(En),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=ni){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let d,g;if(a===ni)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ma)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=ni){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*c,d=(i+r)*u;let g,_;if(a===ni)g=(o+s)*f,_=-2*f;else if(a===Ma)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Tr=new H,En=new Ye,dE=new H(0,0,0),pE=new H(1,1,1),gi=new H,vo=new H,rn=new H,Vh=new Ye,Gh=new si;class Un{constructor(e=0,t=0,i=0,r=Un.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Vh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gh.setFromEuler(this),this.setFromQuaternion(Gh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Un.DEFAULT_ORDER="XYZ";class gg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mE=0;const Wh=new H,wr=new si,jn=new Ye,xo=new H,Ms=new H,gE=new H,_E=new si,Xh=new H(1,0,0),$h=new H(0,1,0),jh=new H(0,0,1),qh={type:"added"},vE={type:"removed"},Ar={type:"childadded",child:null},Rl={type:"childremoved",child:null};class vt extends gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mE++}),this.uuid=Ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new H,t=new Un,i=new si,r=new H(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ye},normalMatrix:{value:new Ve}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.multiply(wr),this}rotateOnWorldAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.premultiply(wr),this}rotateX(e){return this.rotateOnAxis(Xh,e)}rotateY(e){return this.rotateOnAxis($h,e)}rotateZ(e){return this.rotateOnAxis(jh,e)}translateOnAxis(e,t){return Wh.copy(e).applyQuaternion(this.quaternion),this.position.add(Wh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xh,e)}translateY(e){return this.translateOnAxis($h,e)}translateZ(e){return this.translateOnAxis(jh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?xo.copy(e):xo.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Ms,xo,this.up):jn.lookAt(xo,Ms,this.up),this.quaternion.setFromRotationMatrix(jn),r&&(jn.extractRotation(r.matrixWorld),wr.setFromRotationMatrix(jn),this.quaternion.premultiply(wr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qh),Ar.child=e,this.dispatchEvent(Ar),Ar.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vE),Rl.child=e,this.dispatchEvent(Rl),Rl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qh),Ar.child=e,this.dispatchEvent(Ar),Ar.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,e,gE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,_E,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}vt.DEFAULT_UP=new H(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new H,qn=new H,Cl=new H,Yn=new H,Rr=new H,Cr=new H,Yh=new H,Pl=new H,Il=new H,Ll=new H,Dl=new it,Ul=new it,Nl=new it;class Rn{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Tn.subVectors(e,t),r.cross(Tn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Tn.subVectors(r,t),qn.subVectors(i,t),Cl.subVectors(e,t);const o=Tn.dot(Tn),a=Tn.dot(qn),l=Tn.dot(Cl),c=qn.dot(qn),u=qn.dot(Cl),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Yn.x),l.addScaledVector(o,Yn.y),l.addScaledVector(a,Yn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Dl.setScalar(0),Ul.setScalar(0),Nl.setScalar(0),Dl.fromBufferAttribute(e,t),Ul.fromBufferAttribute(e,i),Nl.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Dl,s.x),o.addScaledVector(Ul,s.y),o.addScaledVector(Nl,s.z),o}static isFrontFacing(e,t,i,r){return Tn.subVectors(i,t),qn.subVectors(e,t),Tn.cross(qn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),Tn.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Rn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Rr.subVectors(r,i),Cr.subVectors(s,i),Pl.subVectors(e,i);const l=Rr.dot(Pl),c=Cr.dot(Pl);if(l<=0&&c<=0)return t.copy(i);Il.subVectors(e,r);const u=Rr.dot(Il),f=Cr.dot(Il);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Rr,o);Ll.subVectors(e,s);const d=Rr.dot(Ll),g=Cr.dot(Ll);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Cr,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Yh.subVectors(s,r),a=(f-u)/(f-u+(d-g)),t.copy(r).addScaledVector(Yh,a);const p=1/(m+_+h);return o=_*p,a=h*p,t.copy(i).addScaledVector(Rr,o).addScaledVector(Cr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _g={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},yo={h:0,s:0,l:0};function Fl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class He{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=et.workingColorSpace){if(e=_f(e,1),t=qe(t,0,1),i=qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Fl(o,s,e+1/3),this.g=Fl(o,s,e),this.b=Fl(o,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,t=pn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pn){const i=_g[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ri(e.r),this.g=ri(e.g),this.b=ri(e.b),this}copyLinearToSRGB(e){return this.r=Kr(e.r),this.g=Kr(e.g),this.b=Kr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return et.fromWorkingColorSpace(kt.copy(this),e),Math.round(qe(kt.r*255,0,255))*65536+Math.round(qe(kt.g*255,0,255))*256+Math.round(qe(kt.b*255,0,255))}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(kt.copy(this),t);const i=kt.r,r=kt.g,s=kt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=pn){et.fromWorkingColorSpace(kt.copy(this),e);const t=kt.r,i=kt.g,r=kt.b;return e!==pn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+t,_i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(_i),e.getHSL(yo);const i=Fs(_i.h,yo.h,t),r=Fs(_i.s,yo.s,t),s=Fs(_i.l,yo.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new He;He.NAMES=_g;let xE=0;class Oi extends gr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xE++}),this.uuid=Ln(),this.name="",this.type="Material",this.blending=qr,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rc,this.blendDst=Cc,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yr,this.stencilZFail=yr,this.stencilZPass=yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qr&&(i.blending=this.blending),this.side!==Li&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Rc&&(i.blendSrc=this.blendSrc),this.blendDst!==Cc&&(i.blendDst=this.blendDst),this.blendEquation!==Ji&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ns&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==yr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==yr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class vg extends Oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=af,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new H,Mo=new Je;class vn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=pu,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Mo.fromBufferAttribute(this,t),Mo.applyMatrix3(e),this.setXY(t,Mo.x,Mo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=An(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=An(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=An(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=An(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=An(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),r=ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),r=ut(r,this.array),s=ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pu&&(e.usage=this.usage),e}}class xg extends vn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class yg extends vn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class oi extends vn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let yE=0;const hn=new Ye,Ol=new vt,Pr=new H,sn=new Fi,Ss=new Fi,It=new H;class hi extends gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yE++}),this.uuid=Ln(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dg(e)?yg:xg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,i){return hn.makeTranslation(e,t,i),this.applyMatrix4(hn),this}scale(e,t,i){return hn.makeScale(e,t,i),this.applyMatrix4(hn),this}lookAt(e){return Ol.lookAt(e),Ol.updateMatrix(),this.applyMatrix4(Ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new oi(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];sn.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ss.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(sn.min,Ss.min),sn.expandByPoint(It),It.addVectors(sn.max,Ss.max),sn.expandByPoint(It)):(sn.expandByPoint(Ss.min),sn.expandByPoint(Ss.max))}sn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)It.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(It));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)It.fromBufferAttribute(a,c),l&&(Pr.fromBufferAttribute(e,c),It.add(Pr)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new H,l[L]=new H;const c=new H,u=new H,f=new H,h=new Je,d=new Je,g=new Je,_=new H,m=new H;function p(L,T,S){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,S),h.fromBufferAttribute(s,L),d.fromBufferAttribute(s,T),g.fromBufferAttribute(s,S),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(I),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(I),a[L].add(_),a[T].add(_),a[S].add(_),l[L].add(m),l[T].add(m),l[S].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let L=0,T=A.length;L<T;++L){const S=A[L],I=S.start,X=S.count;for(let z=I,Z=I+X;z<Z;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const x=new H,M=new H,w=new H,R=new H;function C(L){w.fromBufferAttribute(r,L),R.copy(w);const T=a[L];x.copy(T),x.sub(w.multiplyScalar(w.dot(T))).normalize(),M.crossVectors(R,T);const I=M.dot(l[L])<0?-1:1;o.setXYZW(L,x.x,x.y,x.z,I)}for(let L=0,T=A.length;L<T;++L){const S=A[L],I=S.start,X=S.count;for(let z=I,Z=I+X;z<Z;z+=3)C(e.getX(z+0)),C(e.getX(z+1)),C(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new H,s=new H,o=new H,a=new H,l=new H,c=new H,u=new H,f=new H;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new vn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kh=new Ye,Wi=new Xa,So=new fi,Zh=new H,bo=new H,Eo=new H,To=new H,Bl=new H,wo=new H,Jh=new H,Ao=new H;class gn extends vt{constructor(e=new hi,t=new vg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){wo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Bl.fromBufferAttribute(f,e),o?wo.addScaledVector(Bl,u):wo.addScaledVector(Bl.sub(t),u))}t.add(wo)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),So.copy(i.boundingSphere),So.applyMatrix4(s),Wi.copy(e.ray).recast(e.near),!(So.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(So,Zh)===null||Wi.origin.distanceToSquared(Zh)>(e.far-e.near)**2))&&(Kh.copy(s).invert(),Wi.copy(e.ray).applyMatrix4(Kh),!(i.boundingBox!==null&&Wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Wi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],A=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=A,w=x;M<w;M+=3){const R=a.getX(M),C=a.getX(M+1),L=a.getX(M+2);r=Ro(this,p,e,i,c,u,f,R,C,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const A=a.getX(m),x=a.getX(m+1),M=a.getX(m+2);r=Ro(this,o,e,i,c,u,f,A,x,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],A=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=A,w=x;M<w;M+=3){const R=M,C=M+1,L=M+2;r=Ro(this,p,e,i,c,u,f,R,C,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const A=m,x=m+1,M=m+2;r=Ro(this,o,e,i,c,u,f,A,x,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function ME(n,e,t,i,r,s,o,a){let l;if(e.side===en?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Li,a),l===null)return null;Ao.copy(a),Ao.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ao);return c<t.near||c>t.far?null:{distance:c,point:Ao.clone(),object:n}}function Ro(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,bo),n.getVertexPosition(l,Eo),n.getVertexPosition(c,To);const u=ME(n,e,t,i,bo,Eo,To,Jh);if(u){const f=new H;Rn.getBarycoord(Jh,bo,Eo,To,f),r&&(u.uv=Rn.getInterpolatedAttribute(r,a,l,c,f,new Je)),s&&(u.uv1=Rn.getInterpolatedAttribute(s,a,l,c,f,new Je)),o&&(u.normal=Rn.getInterpolatedAttribute(o,a,l,c,f,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new H,materialIndex:0};Rn.getNormal(bo,Eo,To,h.normal),u.face=h,u.barycoord=f}return u}class hs extends hi{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new oi(c,3)),this.setAttribute("normal",new oi(u,3)),this.setAttribute("uv",new oi(f,2));function g(_,m,p,A,x,M,w,R,C,L,T){const S=M/C,I=w/L,X=M/2,z=w/2,Z=R/2,te=C+1,k=L+1;let ee=0,N=0;const ue=new H;for(let ve=0;ve<k;ve++){const Ee=ve*I-z;for(let Ie=0;Ie<te;Ie++){const rt=Ie*S-X;ue[_]=rt*A,ue[m]=Ee*x,ue[p]=Z,c.push(ue.x,ue.y,ue.z),ue[_]=0,ue[m]=0,ue[p]=R>0?1:-1,u.push(ue.x,ue.y,ue.z),f.push(Ie/C),f.push(1-ve/L),ee+=1}}for(let ve=0;ve<L;ve++)for(let Ee=0;Ee<C;Ee++){const Ie=h+Ee+te*ve,rt=h+Ee+te*(ve+1),ne=h+(Ee+1)+te*(ve+1),fe=h+(Ee+1)+te*ve;l.push(Ie,rt,fe),l.push(rt,ne,fe),N+=6}a.addGroup(d,N,T),d+=N,h+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function qt(n){const e={};for(let t=0;t<n.length;t++){const i=cs(n[t]);for(const r in i)e[r]=i[r]}return e}function SE(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Mg(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const bE={clone:cs,merge:qt};var EE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,TE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends Oi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=EE,this.fragmentShader=TE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cs(e.uniforms),this.uniformsGroups=SE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Sg extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=ni}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vi=new H,Qh=new Je,ed=new Je;class Jt extends Sg{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ls*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ns*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ls*2*Math.atan(Math.tan(Ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vi.x,vi.y).multiplyScalar(-e/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vi.x,vi.y).multiplyScalar(-e/vi.z)}getViewSize(e,t){return this.getViewBounds(e,Qh,ed),t.subVectors(ed,Qh)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ns*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ir=-90,Lr=1;class wE extends vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Jt(Ir,Lr,e,t);r.layers=this.layers,this.add(r);const s=new Jt(Ir,Lr,e,t);s.layers=this.layers,this.add(s);const o=new Jt(Ir,Lr,e,t);o.layers=this.layers,this.add(o);const a=new Jt(Ir,Lr,e,t);a.layers=this.layers,this.add(a);const l=new Jt(Ir,Lr,e,t);l.layers=this.layers,this.add(l);const c=new Jt(Ir,Lr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===ni)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ma)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class bg extends Gt{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:is,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class AE extends hr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new bg(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new hs(5,5,5),s=new li({name:"CubemapFromEquirect",uniforms:cs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:Ai});s.uniforms.tEquirect.value=t;const o=new gn(r,s),a=t.minFilter;return t.minFilter===nr&&(t.minFilter=kn),new wE(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class vf{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new He(e),this.near=t,this.far=i}clone(){return new vf(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class RE extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class kC{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=pu,this.updateRanges=[],this.version=0,this.uuid=Ln()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $t=new H;class Eg{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=An(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ut(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=An(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=An(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=An(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=An(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),r=ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),r=ut(r,this.array),s=ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new vn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Eg(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const td=new H,nd=new it,id=new it,CE=new H,rd=new Ye,Co=new H,kl=new fi,sd=new Ye,Hl=new Xa;class HC extends gn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Uh,this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Fi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Co),this.boundingBox.expandByPoint(Co)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new fi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Co),this.boundingSphere.expandByPoint(Co)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),kl.copy(this.boundingSphere),kl.applyMatrix4(r),e.ray.intersectsSphere(kl)!==!1&&(sd.copy(r).invert(),Hl.copy(e.ray).applyMatrix4(sd),!(this.boundingBox!==null&&Hl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Hl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new it,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Uh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Eb?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;nd.fromBufferAttribute(r.attributes.skinIndex,e),id.fromBufferAttribute(r.attributes.skinWeight,e),td.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=id.getComponent(s);if(o!==0){const a=nd.getComponent(s);rd.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(CE.copy(td).applyMatrix4(rd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class PE extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Tg extends Gt{constructor(e=null,t=1,i=1,r,s,o,a,l,c=ln,u=ln,f,h){super(null,o,a,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const od=new Ye,IE=new Ye;class wg{constructor(e=[],t=[]){this.uuid=Ln(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ye;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:IE;od.multiplyMatrices(a,t[s]),od.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new wg(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Tg(t,e,e,mn,Cn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new PE),this.bones.push(o),this.boneInverses.push(new Ye().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class ad extends vn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Dr=new Ye,ld=new Ye,Po=[],cd=new Fi,LE=new Ye,bs=new gn,Es=new fi;class DE extends gn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ad(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,LE)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Fi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Dr),cd.copy(e.boundingBox).applyMatrix4(Dr),this.boundingBox.union(cd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new fi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Dr),Es.copy(e.boundingSphere).applyMatrix4(Dr),this.boundingSphere.union(Es)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(bs.geometry=this.geometry,bs.material=this.material,bs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Es.copy(this.boundingSphere),Es.applyMatrix4(i),e.ray.intersectsSphere(Es)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Dr),ld.multiplyMatrices(i,Dr),bs.matrixWorld=ld,bs.raycast(e,Po);for(let o=0,a=Po.length;o<a;o++){const l=Po[o];l.instanceId=s,l.object=this,t.push(l)}Po.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ad(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Tg(new Float32Array(r*this.count),r,this.count,ff,Cn));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const zl=new H,UE=new H,NE=new Ve;class Ki{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=zl.subVectors(i,t).cross(UE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(zl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||NE.getNormalMatrix(e),r=this.coplanarPoint(zl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xi=new fi,Io=new H;class xf{constructor(e=new Ki,t=new Ki,i=new Ki,r=new Ki,s=new Ki,o=new Ki){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ni){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],g=r[9],_=r[10],m=r[11],p=r[12],A=r[13],x=r[14],M=r[15];if(i[0].setComponents(l-s,h-c,m-d,M-p).normalize(),i[1].setComponents(l+s,h+c,m+d,M+p).normalize(),i[2].setComponents(l+o,h+u,m+g,M+A).normalize(),i[3].setComponents(l-o,h-u,m-g,M-A).normalize(),i[4].setComponents(l-a,h-f,m-_,M-x).normalize(),t===ni)i[5].setComponents(l+a,h+f,m+_,M+x).normalize();else if(t===Ma)i[5].setComponents(a,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(e){return Xi.center.set(0,0,0),Xi.radius=.7071067811865476,Xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Io.x=r.normal.x>0?e.max.x:e.min.x,Io.y=r.normal.y>0?e.max.y:e.min.y,Io.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Io)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class FE extends Oi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Sa=new H,ba=new H,ud=new Ye,Ts=new Xa,Lo=new fi,Vl=new H,fd=new H;class Ag extends vt{constructor(e=new hi,t=new FE){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Sa.fromBufferAttribute(t,r-1),ba.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Sa.distanceTo(ba);e.setAttribute("lineDistance",new oi(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Lo.copy(i.boundingSphere),Lo.applyMatrix4(r),Lo.radius+=s,e.ray.intersectsSphere(Lo)===!1)return;ud.copy(r).invert(),Ts.copy(e.ray).applyMatrix4(ud);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),A=u.getX(_+1),x=Do(this,e,Ts,l,p,A);x&&t.push(x)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=Do(this,e,Ts,l,_,m);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=Do(this,e,Ts,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=Do(this,e,Ts,l,g-1,d);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Do(n,e,t,i,r,s){const o=n.geometry.attributes.position;if(Sa.fromBufferAttribute(o,r),ba.fromBufferAttribute(o,s),t.distanceSqToSegment(Sa,ba,Vl,fd)>i)return;Vl.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Vl);if(!(l<e.near||l>e.far))return{distance:l,point:fd.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}const hd=new H,dd=new H;class zC extends Ag{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)hd.fromBufferAttribute(t,r),dd.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+hd.distanceTo(dd);e.setAttribute("lineDistance",new oi(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class VC extends Ag{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class OE extends Oi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const pd=new Ye,mu=new Xa,Uo=new fi,No=new H;class GC extends vt{constructor(e=new hi,t=new OE){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Uo.copy(i.boundingSphere),Uo.applyMatrix4(r),Uo.radius+=s,e.ray.intersectsSphere(Uo)===!1)return;pd.copy(r).invert(),mu.copy(e.ray).applyMatrix4(pd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=h,_=d;g<_;g++){const m=c.getX(g);No.fromBufferAttribute(f,m),md(No,m,l,r,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,_=d;g<_;g++)No.fromBufferAttribute(f,g),md(No,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function md(n,e,t,i,r,s,o){const a=mu.distanceSqToPoint(n);if(a<t){const l=new H;mu.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Fo extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Rg extends Gt{constructor(e,t,i,r,s,o,a,l,c,u=Yr){if(u!==Yr&&u!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Yr&&(i=fr),i===void 0&&u===os&&(i=ss),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ln,this.minFilter=l!==void 0?l:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class $a extends hi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const A=p*h-o;for(let x=0;x<c;x++){const M=x*f-s;g.push(M,-A,0),_.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<a;A++){const x=A+c*p,M=A+c*(p+1),w=A+1+c*(p+1),R=A+1+c*p;d.push(x,M,R),d.push(M,w,R)}this.setIndex(d),this.setAttribute("position",new oi(g,3)),this.setAttribute("normal",new oi(_,3)),this.setAttribute("uv",new oi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $a(e.width,e.height,e.widthSegments,e.heightSegments)}}class BE extends Oi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gf,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class WC extends BE{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new He(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new He(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new He(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class XC extends Oi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new He(16777215),this.specular=new He(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gf,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=af,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kE extends Oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class HE extends Oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Oo(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function zE(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function VE(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function gd(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function Cg(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class ja{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class GE extends ja{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kr,endingEnd:kr}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Hr:s=e,a=2*t-i;break;case xa:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Hr:o=e,l=2*i-t;break;case xa:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(i-t)/(r-t),_=g*g,m=_*g,p=-h*m+2*h*_-h*g,A=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*g+1,x=(-1-d)*m+(1.5+d)*_+.5*g,M=d*m-d*_;for(let w=0;w!==a;++w)s[w]=p*o[u+w]+A*o[c+w]+x*o[l+w]+M*o[f+w];return s}}class Pg extends ja{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),f=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*f+o[l+h]*u;return s}}class WE extends ja{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class zn{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Oo(t,this.TimeBufferType),this.values=Oo(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Oo(e.times,Array),values:Oo(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new WE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Pg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new GE(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case va:t=this.InterpolantFactoryMethodDiscrete;break;case du:t=this.InterpolantFactoryMethodLinear;break;case xl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return va;case this.InterpolantFactoryMethodLinear:return du;case this.InterpolantFactoryMethodSmooth:return xl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&zE(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===xl,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const f=a*i,h=f-i,d=f+i;for(let g=0;g!==i;++g){const _=t[f+g];if(_!==t[h+g]||_!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*i,h=o*i;for(let d=0;d!==i;++d)t[h+d]=t[f+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=du;class ds extends zn{constructor(e,t,i){super(e,t,i)}}ds.prototype.ValueTypeName="bool";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=va;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;class Ig extends zn{}Ig.prototype.ValueTypeName="color";class Ea extends zn{}Ea.prototype.ValueTypeName="number";class XE extends ja{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)si.slerpFlat(s,0,o,c-a,o,c,l);return s}}class qa extends zn{InterpolantFactoryMethodLinear(e){return new XE(this.times,this.values,this.getValueSize(),e)}}qa.prototype.ValueTypeName="quaternion";qa.prototype.InterpolantFactoryMethodSmooth=void 0;class ps extends zn{constructor(e,t,i){super(e,t,i)}}ps.prototype.ValueTypeName="string";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=va;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;class Ta extends zn{}Ta.prototype.ValueTypeName="vector";class _d{constructor(e="",t=-1,i=[],r=mf){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Ln(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(jE(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(zn.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=VE(l);l=gd(l,1,u),c=gd(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Ea(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const f=u[1];let h=r[f];h||(r[f]=h=[]),h.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(f,h,d,g,_){if(d.length!==0){const m=[],p=[];Cg(d,m,p,g),m.length!==0&&_.push(new f(h,m,p))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let _=0;_<h[g].morphTargets.length;_++)d[h[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let A=0;A!==h[g].morphTargets.length;++A){const x=h[g];m.push(x.time),p.push(x.morphTarget===_?1:0)}r.push(new Ea(".morphTargetInfluence["+_+"]",m,p))}l=d.length*o}else{const d=".bones["+t[f].name+"]";i(Ta,d+".position",h,"pos",r),i(qa,d+".quaternion",h,"rot",r),i(Ta,d+".scale",h,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function $E(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ea;case"vector":case"vector2":case"vector3":case"vector4":return Ta;case"color":return Ig;case"quaternion":return qa;case"bool":case"boolean":return ds;case"string":return ps}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function jE(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=$E(n.type);if(n.times===void 0){const t=[],i=[];Cg(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Ti={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class qE{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const YE=new qE;class Js{constructor(e){this.manager=e!==void 0?e:YE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Js.DEFAULT_MATERIAL_NAME="__DEFAULT";const Kn={};class KE extends Error{constructor(e,t){super(e),this.response=t}}class $C extends Js{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ti.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Kn[e]!==void 0){Kn[e].push({onLoad:t,onProgress:i,onError:r});return}Kn[e]=[],Kn[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Kn[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){A();function A(){f.read().then(({done:x,value:M})=>{if(x)p.close();else{_+=M.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let R=0,C=u.length;R<C;R++){const L=u[R];L.onProgress&&L.onProgress(w)}p.enqueue(M),A()}},x=>{p.error(x)})}}});return new Response(m)}else throw new KE(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Ti.add(e,c);const u=Kn[e];delete Kn[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Kn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Kn[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class ZE extends Js{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ti.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ws("img");function l(){u(),Ti.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class jC extends Js{constructor(e){super(e)}load(e,t,i,r){const s=new Gt,o=new ZE(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Qs extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class qC extends Qs{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Gl=new Ye,vd=new H,xd=new H;class yf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xf,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;vd.setFromMatrixPosition(e.matrixWorld),t.position.copy(vd),xd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xd),t.updateMatrixWorld(),Gl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Gl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class JE extends yf{constructor(){super(new Jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=ls*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class YC extends Qs{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new JE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const yd=new Ye,ws=new H,Wl=new H;class QE extends yf{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Je(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ws.setFromMatrixPosition(e.matrixWorld),i.position.copy(ws),Wl.copy(i.position),Wl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Wl),i.updateMatrixWorld(),r.makeTranslation(-ws.x,-ws.y,-ws.z),yd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yd)}}class KC extends Qs{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new QE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Lg extends Sg{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class eT extends yf{constructor(){super(new Lg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ZC extends Qs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new eT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class JC extends Qs{constructor(e,t,i=10,r=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class QC{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class eP extends Js{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ti.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ti.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),Ti.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Ti.add(e,l),s.manager.itemStart(e)}}class tT extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class tP{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Md(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Md();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Md(){return performance.now()}class nT{constructor(e,t,i){this.binding=e,this.valueSize=i;let r,s,o;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:r=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,r=this.valueSize,s=e*r+r;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==r;++a)i[s+a]=i[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(i,s,0,a,r)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,r=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,r=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(i,r,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(i,r,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){a.setValue(i,r);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,r=i*this._origIndex;e.getValue(t,r);for(let s=i,o=r;s!==o;++s)t[s]=t[r+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,r,s){if(r>=.5)for(let o=0;o!==s;++o)e[t+o]=e[i+o]}_slerp(e,t,i,r){si.slerpFlat(e,t,e,t,e,i,r)}_slerpAdditive(e,t,i,r,s){const o=this._workIndex*s;si.multiplyQuaternionsFlat(e,o,e,t,e,i),si.slerpFlat(e,t,e,t,e,o,r)}_lerp(e,t,i,r,s){const o=1-r;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*o+e[i+a]*r}}_lerpAdditive(e,t,i,r,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[i+o]*r}}}const Mf="\\[\\]\\.:\\/",iT=new RegExp("["+Mf+"]","g"),Sf="[^"+Mf+"]",rT="[^"+Mf.replace("\\.","")+"]",sT=/((?:WC+[\/:])*)/.source.replace("WC",Sf),oT=/(WCOD+)?/.source.replace("WCOD",rT),aT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sf),lT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sf),cT=new RegExp("^"+sT+oT+aT+lT+"$"),uT=["material","materials","bones","map"];class fT{constructor(e,t,i){const r=i||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class ft{constructor(e,t,i){this.path=t,this.parsedPath=i||ft.parseTrackName(t),this.node=ft.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new ft.Composite(e,t,i):new ft(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(iT,"")}static parseTrackName(e){const t=cT.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);uT.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=ft.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ft.Composite=fT;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class hT{constructor(e,t,i=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=r;const s=t.tracks,o=s.length,a=new Array(o),l={endingStart:kr,endingEnd:kr};for(let c=0;c!==o;++c){const u=s[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Ab,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const r=this._clip.duration,s=e._clip.duration,o=s/r,a=r/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const r=this._mixer,s=r.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+i,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,r){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Cb:for(let u=0,f=l.length;u!==f;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case mf:default:for(let u=0,f=l.length;u!==f;++u)l[u].evaluate(o),c[u].accumulate(r,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let r=this.time+e,s=this._loopCount;const o=i===Rb;if(e===0)return s===-1?r:o&&(s&1)===1?t-r:r;if(i===wb){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=t||r<0){const a=Math.floor(r/t);r-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=r;if(o&&(s&1)===1)return t-r}return r}_setEndings(e,t,i){const r=this._interpolantSettings;i?(r.endingStart=Hr,r.endingEnd=Hr):(e?r.endingStart=this.zeroSlopeAtStart?Hr:kr:r.endingStart=xa,t?r.endingEnd=this.zeroSlopeAtEnd?Hr:kr:r.endingEnd=xa)}_scheduleFading(e,t,i){const r=this._mixer,s=r.time;let o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=i,this}}const dT=new Float32Array(1);class nP extends gr{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,r=e._clip.tracks,s=r.length,o=e._propertyBindings,a=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let f=0;f!==s;++f){const h=r[f],d=h.name;let g=u[d];if(g!==void 0)++g.referenceCount,o[f]=g;else{if(g=o[f],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,d));continue}const _=t&&t._propertyBindings[f].binding.parsedPath;g=new nT(ft.create(i,d,_),h.ValueTypeName,h.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,d),o[f]=g}a[f].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,i)}const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const s=t[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const s=t[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const r=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=r.length,r.push(e),o.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],r=e._cacheIndex;i._cacheIndex=r,t[r]=i,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const f=a.actionByRoot,h=(e._localRoot||this._root).uuid;delete f[h],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const s=t[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_addInactiveBinding(e,t,i){const r=this._bindingsByRootAndName,s=this._bindings;let o=r[t];o===void 0&&(o={},r[t]=o),o[i]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,r=i.rootNode.uuid,s=i.path,o=this._bindingsByRootAndName,a=o[r],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[r]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new Pg(new Float32Array(2),new Float32Array(2),1,dT),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=i,t[i]=s}clipAction(e,t,i){const r=t||this._root,s=r.uuid;let o=typeof e=="string"?_d.findByName(r,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(i===void 0&&(o!==null?i=o.blendMode:i=mf),l!==void 0){const f=l.actionByRoot[s];if(f!==void 0&&f.blendMode===i)return f;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const u=new hT(this,o,t,i);return this._bindAction(u,c),this._addInactiveAction(u,a,s),u}existingAction(e,t){const i=t||this._root,r=i.uuid,s=typeof e=="string"?_d.findByName(i,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[r]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,r=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(r,e,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,r=this._actionsByClip,s=r[i];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const u=c._cacheIndex,f=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,f._cacheIndex=u,t[u]=f,t.pop(),this._removeInactiveBindingsForAction(c)}delete r[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const o in i){const a=i[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}function Sd(n,e,t,i){const r=pT(i);switch(t){case og:return n*e;case lg:return n*e;case cg:return n*e*2;case ff:return n*e/r.components*r.byteLength;case hf:return n*e/r.components*r.byteLength;case ug:return n*e*2/r.components*r.byteLength;case df:return n*e*2/r.components*r.byteLength;case ag:return n*e*3/r.components*r.byteLength;case mn:return n*e*4/r.components*r.byteLength;case pf:return n*e*4/r.components*r.byteLength;case jo:case qo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Yo:case Ko:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vc:case Wc:return Math.max(n,16)*Math.max(e,8)/4;case zc:case Gc:return Math.max(n,8)*Math.max(e,8)/2;case Xc:case $c:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case jc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Kc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Zc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Jc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Qc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case eu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case tu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case nu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case iu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ru:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case su:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ou:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case au:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Zo:case lu:case cu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case fg:case uu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case fu:case hu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function pT(n){switch(n){case ai:case ig:return{byteLength:1,components:1};case Gs:case rg:case Zs:return{byteLength:2,components:1};case cf:case uf:return{byteLength:2,components:4};case fr:case lf:case Cn:return{byteLength:4,components:1};case sg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:of}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=of);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Dg(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function mT(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var gT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_T=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,MT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ST=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ET=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,TT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,AT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,RT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,CT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,PT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,IT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,LT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,DT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,UT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,NT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,FT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,OT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,BT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,kT=`#define PI 3.141592653589793
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
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,HT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
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
#endif`,zT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,VT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,GT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,WT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,XT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$T="gl_FragColor = linearToOutputTexel( gl_FragColor );",jT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qT=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,YT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,KT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ZT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,JT=`#ifdef USE_ENVMAP
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
#endif`,QT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ew=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ow=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,aw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,lw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,cw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,pw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
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
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
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
}`,mw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_w=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ew=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Tw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ww=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Aw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Lw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Uw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Nw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ow=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ww=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Xw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$w=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Jw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Qw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,eA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,iA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rA=`#ifdef USE_SKINNING
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
#endif`,sA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,uA=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,pA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_A=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,SA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,bA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,EA=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,TA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,RA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,PA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,LA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,UA=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,FA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,OA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,BA=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,HA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
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
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,VA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,WA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$A=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,qA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:gT,alphahash_pars_fragment:_T,alphamap_fragment:vT,alphamap_pars_fragment:xT,alphatest_fragment:yT,alphatest_pars_fragment:MT,aomap_fragment:ST,aomap_pars_fragment:bT,batching_pars_vertex:ET,batching_vertex:TT,begin_vertex:wT,beginnormal_vertex:AT,bsdfs:RT,iridescence_fragment:CT,bumpmap_pars_fragment:PT,clipping_planes_fragment:IT,clipping_planes_pars_fragment:LT,clipping_planes_pars_vertex:DT,clipping_planes_vertex:UT,color_fragment:NT,color_pars_fragment:FT,color_pars_vertex:OT,color_vertex:BT,common:kT,cube_uv_reflection_fragment:HT,defaultnormal_vertex:zT,displacementmap_pars_vertex:VT,displacementmap_vertex:GT,emissivemap_fragment:WT,emissivemap_pars_fragment:XT,colorspace_fragment:$T,colorspace_pars_fragment:jT,envmap_fragment:qT,envmap_common_pars_fragment:YT,envmap_pars_fragment:KT,envmap_pars_vertex:ZT,envmap_physical_pars_fragment:lw,envmap_vertex:JT,fog_vertex:QT,fog_pars_vertex:ew,fog_fragment:tw,fog_pars_fragment:nw,gradientmap_pars_fragment:iw,lightmap_pars_fragment:rw,lights_lambert_fragment:sw,lights_lambert_pars_fragment:ow,lights_pars_begin:aw,lights_toon_fragment:cw,lights_toon_pars_fragment:uw,lights_phong_fragment:fw,lights_phong_pars_fragment:hw,lights_physical_fragment:dw,lights_physical_pars_fragment:pw,lights_fragment_begin:mw,lights_fragment_maps:gw,lights_fragment_end:_w,logdepthbuf_fragment:vw,logdepthbuf_pars_fragment:xw,logdepthbuf_pars_vertex:yw,logdepthbuf_vertex:Mw,map_fragment:Sw,map_pars_fragment:bw,map_particle_fragment:Ew,map_particle_pars_fragment:Tw,metalnessmap_fragment:ww,metalnessmap_pars_fragment:Aw,morphinstance_vertex:Rw,morphcolor_vertex:Cw,morphnormal_vertex:Pw,morphtarget_pars_vertex:Iw,morphtarget_vertex:Lw,normal_fragment_begin:Dw,normal_fragment_maps:Uw,normal_pars_fragment:Nw,normal_pars_vertex:Fw,normal_vertex:Ow,normalmap_pars_fragment:Bw,clearcoat_normal_fragment_begin:kw,clearcoat_normal_fragment_maps:Hw,clearcoat_pars_fragment:zw,iridescence_pars_fragment:Vw,opaque_fragment:Gw,packing:Ww,premultiplied_alpha_fragment:Xw,project_vertex:$w,dithering_fragment:jw,dithering_pars_fragment:qw,roughnessmap_fragment:Yw,roughnessmap_pars_fragment:Kw,shadowmap_pars_fragment:Zw,shadowmap_pars_vertex:Jw,shadowmap_vertex:Qw,shadowmask_pars_fragment:eA,skinbase_vertex:tA,skinning_pars_vertex:nA,skinning_vertex:iA,skinnormal_vertex:rA,specularmap_fragment:sA,specularmap_pars_fragment:oA,tonemapping_fragment:aA,tonemapping_pars_fragment:lA,transmission_fragment:cA,transmission_pars_fragment:uA,uv_pars_fragment:fA,uv_pars_vertex:hA,uv_vertex:dA,worldpos_vertex:pA,background_vert:mA,background_frag:gA,backgroundCube_vert:_A,backgroundCube_frag:vA,cube_vert:xA,cube_frag:yA,depth_vert:MA,depth_frag:SA,distanceRGBA_vert:bA,distanceRGBA_frag:EA,equirect_vert:TA,equirect_frag:wA,linedashed_vert:AA,linedashed_frag:RA,meshbasic_vert:CA,meshbasic_frag:PA,meshlambert_vert:IA,meshlambert_frag:LA,meshmatcap_vert:DA,meshmatcap_frag:UA,meshnormal_vert:NA,meshnormal_frag:FA,meshphong_vert:OA,meshphong_frag:BA,meshphysical_vert:kA,meshphysical_frag:HA,meshtoon_vert:zA,meshtoon_frag:VA,points_vert:GA,points_frag:WA,shadow_vert:XA,shadow_frag:$A,sprite_vert:jA,sprite_frag:qA},pe={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},On={basic:{uniforms:qt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:qt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new He(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:qt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:qt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:qt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new He(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:qt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:qt([pe.points,pe.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:qt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:qt([pe.common,pe.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:qt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:qt([pe.sprite,pe.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:qt([pe.common,pe.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:qt([pe.lights,pe.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};On.physical={uniforms:qt([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Bo={r:0,b:0,g:0},$i=new Un,YA=new Ye;function KA(n,e,t,i,r,s,o){const a=new He(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(x){let M=x.isScene===!0?x.background:null;return M&&M.isTexture&&(M=(x.backgroundBlurriness>0?t:e).get(M)),M}function _(x){let M=!1;const w=g(x);w===null?p(a,l):w&&w.isColor&&(p(w,1),M=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(x,M){const w=g(M);w&&(w.isCubeTexture||w.mapping===Wa)?(u===void 0&&(u=new gn(new hs(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:cs(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),$i.copy(M.backgroundRotation),$i.x*=-1,$i.y*=-1,$i.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(YA.makeRotationFromEuler($i)),u.material.toneMapped=et.getTransfer(w.colorSpace)!==ht,(f!==w||h!==w.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=w,h=w.version,d=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new gn(new $a(2,2),new li({name:"BackgroundMaterial",uniforms:cs(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=et.getTransfer(w.colorSpace)!==ht,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||h!==w.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=w,h=w.version,d=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,M){x.getRGB(Bo,Mg(n)),i.buffers.color.setClear(Bo.r,Bo.g,Bo.b,M,o)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(x,M=1){a.set(x),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:_,addToRenderList:m,dispose:A}}function ZA(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(S,I,X,z,Z){let te=!1;const k=f(z,X,I);s!==k&&(s=k,c(s.object)),te=d(S,z,X,Z),te&&g(S,z,X,Z),Z!==null&&e.update(Z,n.ELEMENT_ARRAY_BUFFER),(te||o)&&(o=!1,M(S,I,X,z),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function f(S,I,X){const z=X.wireframe===!0;let Z=i[S.id];Z===void 0&&(Z={},i[S.id]=Z);let te=Z[I.id];te===void 0&&(te={},Z[I.id]=te);let k=te[z];return k===void 0&&(k=h(l()),te[z]=k),k}function h(S){const I=[],X=[],z=[];for(let Z=0;Z<t;Z++)I[Z]=0,X[Z]=0,z[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:X,attributeDivisors:z,object:S,attributes:{},index:null}}function d(S,I,X,z){const Z=s.attributes,te=I.attributes;let k=0;const ee=X.getAttributes();for(const N in ee)if(ee[N].location>=0){const ve=Z[N];let Ee=te[N];if(Ee===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(Ee=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(Ee=S.instanceColor)),ve===void 0||ve.attribute!==Ee||Ee&&ve.data!==Ee.data)return!0;k++}return s.attributesNum!==k||s.index!==z}function g(S,I,X,z){const Z={},te=I.attributes;let k=0;const ee=X.getAttributes();for(const N in ee)if(ee[N].location>=0){let ve=te[N];ve===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(ve=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(ve=S.instanceColor));const Ee={};Ee.attribute=ve,ve&&ve.data&&(Ee.data=ve.data),Z[N]=Ee,k++}s.attributes=Z,s.attributesNum=k,s.index=z}function _(){const S=s.newAttributes;for(let I=0,X=S.length;I<X;I++)S[I]=0}function m(S){p(S,0)}function p(S,I){const X=s.newAttributes,z=s.enabledAttributes,Z=s.attributeDivisors;X[S]=1,z[S]===0&&(n.enableVertexAttribArray(S),z[S]=1),Z[S]!==I&&(n.vertexAttribDivisor(S,I),Z[S]=I)}function A(){const S=s.newAttributes,I=s.enabledAttributes;for(let X=0,z=I.length;X<z;X++)I[X]!==S[X]&&(n.disableVertexAttribArray(X),I[X]=0)}function x(S,I,X,z,Z,te,k){k===!0?n.vertexAttribIPointer(S,I,X,Z,te):n.vertexAttribPointer(S,I,X,z,Z,te)}function M(S,I,X,z){_();const Z=z.attributes,te=X.getAttributes(),k=I.defaultAttributeValues;for(const ee in te){const N=te[ee];if(N.location>=0){let ue=Z[ee];if(ue===void 0&&(ee==="instanceMatrix"&&S.instanceMatrix&&(ue=S.instanceMatrix),ee==="instanceColor"&&S.instanceColor&&(ue=S.instanceColor)),ue!==void 0){const ve=ue.normalized,Ee=ue.itemSize,Ie=e.get(ue);if(Ie===void 0)continue;const rt=Ie.buffer,ne=Ie.type,fe=Ie.bytesPerElement,Se=ne===n.INT||ne===n.UNSIGNED_INT||ue.gpuType===lf;if(ue.isInterleavedBufferAttribute){const he=ue.data,Ae=he.stride,Ne=ue.offset;if(he.isInstancedInterleavedBuffer){for(let Be=0;Be<N.locationSize;Be++)p(N.location+Be,he.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Be=0;Be<N.locationSize;Be++)m(N.location+Be);n.bindBuffer(n.ARRAY_BUFFER,rt);for(let Be=0;Be<N.locationSize;Be++)x(N.location+Be,Ee/N.locationSize,ne,ve,Ae*fe,(Ne+Ee/N.locationSize*Be)*fe,Se)}else{if(ue.isInstancedBufferAttribute){for(let he=0;he<N.locationSize;he++)p(N.location+he,ue.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let he=0;he<N.locationSize;he++)m(N.location+he);n.bindBuffer(n.ARRAY_BUFFER,rt);for(let he=0;he<N.locationSize;he++)x(N.location+he,Ee/N.locationSize,ne,ve,Ee*fe,Ee/N.locationSize*he*fe,Se)}}else if(k!==void 0){const ve=k[ee];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(N.location,ve);break;case 3:n.vertexAttrib3fv(N.location,ve);break;case 4:n.vertexAttrib4fv(N.location,ve);break;default:n.vertexAttrib1fv(N.location,ve)}}}}A()}function w(){L();for(const S in i){const I=i[S];for(const X in I){const z=I[X];for(const Z in z)u(z[Z].object),delete z[Z];delete I[X]}delete i[S]}}function R(S){if(i[S.id]===void 0)return;const I=i[S.id];for(const X in I){const z=I[X];for(const Z in z)u(z[Z].object),delete z[Z];delete I[X]}delete i[S.id]}function C(S){for(const I in i){const X=i[I];if(X[S.id]===void 0)continue;const z=X[S.id];for(const Z in z)u(z[Z].object),delete z[Z];delete X[S.id]}}function L(){T(),o=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:T,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:A}}function JA(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];t.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*h[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function QA(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==mn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const L=C===Zs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==ai&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Cn&&!L)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:x,maxFragmentUniforms:M,vertexTextures:w,maxSamples:R}}function eR(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Ki,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const A=s?0:i,x=A*4;let M=p.clippingState||null;l.value=M,M=u(g,h,x,d);for(let w=0;w!==x;++w)M[w]=t[w];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,A=h.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,M=d;x!==_;++x,M+=4)o.copy(f[x]).applyMatrix4(A,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function tR(n){let e=new WeakMap;function t(o,a){return a===Oc?o.mapping=is:a===Bc&&(o.mapping=rs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Oc||a===Bc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new AE(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const zr=4,bd=[.125,.215,.35,.446,.526,.582],Qi=20,Xl=new Lg,Ed=new He;let $l=null,jl=0,ql=0,Yl=!1;const Zi=(1+Math.sqrt(5))/2,Ur=1/Zi,Td=[new H(-Zi,Ur,0),new H(Zi,Ur,0),new H(-Ur,0,Zi),new H(Ur,0,Zi),new H(0,Zi,-Ur),new H(0,Zi,Ur),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class wd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){$l=this._renderer.getRenderTarget(),jl=this._renderer.getActiveCubeFace(),ql=this._renderer.getActiveMipmapLevel(),Yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($l,jl,ql),this._renderer.xr.enabled=Yl,e.scissorTest=!1,ko(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===is||e.mapping===rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$l=this._renderer.getRenderTarget(),jl=this._renderer.getActiveCubeFace(),ql=this._renderer.getActiveMipmapLevel(),Yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:Zs,format:mn,colorSpace:as,depthBuffer:!1},r=Ad(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ad(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nR(s)),this._blurMaterial=iR(s,e,t)}return r}_compileMaterial(e){const t=new gn(this._lodPlanes[0],e);this._renderer.compile(t,Xl)}_sceneToCubeUV(e,t,i,r){const a=new Jt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Ed),u.toneMapping=Ri,u.autoClear=!1;const d=new vg({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),g=new gn(new hs,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Ed),_=!0);for(let p=0;p<6;p++){const A=p%3;A===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):A===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;ko(r,A*x,p>2?x:0,x,x),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===is||e.mapping===rs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rd());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new gn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ko(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Xl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Td[(r-s-1)%Td.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new gn(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Qi-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Qi;m>Qi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qi}`);const p=[];let A=0;for(let C=0;C<Qi;++C){const L=C/_,T=Math.exp(-L*L/2);p.push(T),C===0?A+=T:C<m&&(A+=2*T)}for(let C=0;C<p.length;C++)p[C]=p[C]/A;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-i;const M=this._sizeLods[r],w=3*M*(r>x-zr?r-x+zr:0),R=4*(this._cubeSize-M);ko(t,w,R,3*M,2*M),l.setRenderTarget(t),l.render(f,Xl)}}function nR(n){const e=[],t=[],i=[];let r=n;const s=n-zr+1+bd.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-zr?l=bd[o-n+zr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,m=2,p=1,A=new Float32Array(_*g*d),x=new Float32Array(m*g*d),M=new Float32Array(p*g*d);for(let R=0;R<d;R++){const C=R%3*2/3-1,L=R>2?0:-1,T=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];A.set(T,_*g*R),x.set(h,m*g*R);const S=[R,R,R,R,R,R];M.set(S,p*g*R)}const w=new hi;w.setAttribute("position",new vn(A,_)),w.setAttribute("uv",new vn(x,m)),w.setAttribute("faceIndex",new vn(M,p)),e.push(w),r>zr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ad(n,e,t){const i=new hr(n,e,t);return i.texture.mapping=Wa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ko(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function iR(n,e,t){const i=new Float32Array(Qi),r=new H(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:Qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:bf(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Rd(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bf(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Cd(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function bf(){return`

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
	`}function rR(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Oc||l===Bc,u=l===is||l===rs;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new wd(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new wd(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function sR(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Fr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function oR(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const A=d.array;_=d.version;for(let x=0,M=A.length;x<M;x+=3){const w=A[x+0],R=A[x+1],C=A[x+2];h.push(w,R,R,C,C,w)}}else if(g!==void 0){const A=g.array;_=g.version;for(let x=0,M=A.length/3-1;x<M;x+=3){const w=x+0,R=x+1,C=x+2;h.push(w,R,R,C,C,w)}}else return;const m=new(dg(h)?yg:xg)(h,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function aR(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){n.drawElements(i,d,s,h*o),t.update(d,i,1)}function c(h,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,h*o,g),t.update(d,i,g))}function u(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function f(h,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,_,0,g);let p=0;for(let A=0;A<g;A++)p+=d[A]*_[A];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function lR(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function cR(n,e,t){const i=new WeakMap,r=new it;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let T=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let x=0;d===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let M=a.attributes.position.count*x,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const R=new Float32Array(M*w*4*f),C=new mg(R,M,w,f);C.type=Cn,C.needsUpdate=!0;const L=x*4;for(let S=0;S<f;S++){const I=m[S],X=p[S],z=A[S],Z=M*w*4*S;for(let te=0;te<I.count;te++){const k=te*L;d===!0&&(r.fromBufferAttribute(I,te),R[Z+k+0]=r.x,R[Z+k+1]=r.y,R[Z+k+2]=r.z,R[Z+k+3]=0),g===!0&&(r.fromBufferAttribute(X,te),R[Z+k+4]=r.x,R[Z+k+5]=r.y,R[Z+k+6]=r.z,R[Z+k+7]=0),_===!0&&(r.fromBufferAttribute(z,te),R[Z+k+8]=r.x,R[Z+k+9]=r.y,R[Z+k+10]=r.z,R[Z+k+11]=z.itemSize===4?r.w:1)}}h={count:f,texture:C,size:new Je(M,w)},i.set(a,h),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function uR(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Ug=new Gt,Pd=new Rg(1,1),Ng=new mg,Fg=new fE,Og=new bg,Id=[],Ld=[],Dd=new Float32Array(16),Ud=new Float32Array(9),Nd=new Float32Array(4);function ms(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Id[r];if(s===void 0&&(s=new Float32Array(r),Id[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Ct(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ya(n,e){let t=Ld[e];t===void 0&&(t=new Int32Array(e),Ld[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function fR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function hR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2fv(this.addr,e),Pt(t,e)}}function dR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;n.uniform3fv(this.addr,e),Pt(t,e)}}function pR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4fv(this.addr,e),Pt(t,e)}}function mR(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,i))return;Nd.set(i),n.uniformMatrix2fv(this.addr,!1,Nd),Pt(t,i)}}function gR(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,i))return;Ud.set(i),n.uniformMatrix3fv(this.addr,!1,Ud),Pt(t,i)}}function _R(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,i))return;Dd.set(i),n.uniformMatrix4fv(this.addr,!1,Dd),Pt(t,i)}}function vR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function xR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2iv(this.addr,e),Pt(t,e)}}function yR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3iv(this.addr,e),Pt(t,e)}}function MR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4iv(this.addr,e),Pt(t,e)}}function SR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function bR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2uiv(this.addr,e),Pt(t,e)}}function ER(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3uiv(this.addr,e),Pt(t,e)}}function TR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4uiv(this.addr,e),Pt(t,e)}}function wR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Pd.compareFunction=hg,s=Pd):s=Ug,t.setTexture2D(e||s,r)}function AR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Fg,r)}function RR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Og,r)}function CR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Ng,r)}function PR(n){switch(n){case 5126:return fR;case 35664:return hR;case 35665:return dR;case 35666:return pR;case 35674:return mR;case 35675:return gR;case 35676:return _R;case 5124:case 35670:return vR;case 35667:case 35671:return xR;case 35668:case 35672:return yR;case 35669:case 35673:return MR;case 5125:return SR;case 36294:return bR;case 36295:return ER;case 36296:return TR;case 35678:case 36198:case 36298:case 36306:case 35682:return wR;case 35679:case 36299:case 36307:return AR;case 35680:case 36300:case 36308:case 36293:return RR;case 36289:case 36303:case 36311:case 36292:return CR}}function IR(n,e){n.uniform1fv(this.addr,e)}function LR(n,e){const t=ms(e,this.size,2);n.uniform2fv(this.addr,t)}function DR(n,e){const t=ms(e,this.size,3);n.uniform3fv(this.addr,t)}function UR(n,e){const t=ms(e,this.size,4);n.uniform4fv(this.addr,t)}function NR(n,e){const t=ms(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function FR(n,e){const t=ms(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function OR(n,e){const t=ms(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function BR(n,e){n.uniform1iv(this.addr,e)}function kR(n,e){n.uniform2iv(this.addr,e)}function HR(n,e){n.uniform3iv(this.addr,e)}function zR(n,e){n.uniform4iv(this.addr,e)}function VR(n,e){n.uniform1uiv(this.addr,e)}function GR(n,e){n.uniform2uiv(this.addr,e)}function WR(n,e){n.uniform3uiv(this.addr,e)}function XR(n,e){n.uniform4uiv(this.addr,e)}function $R(n,e,t){const i=this.cache,r=e.length,s=Ya(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Ug,s[o])}function jR(n,e,t){const i=this.cache,r=e.length,s=Ya(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Fg,s[o])}function qR(n,e,t){const i=this.cache,r=e.length,s=Ya(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Og,s[o])}function YR(n,e,t){const i=this.cache,r=e.length,s=Ya(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Ng,s[o])}function KR(n){switch(n){case 5126:return IR;case 35664:return LR;case 35665:return DR;case 35666:return UR;case 35674:return NR;case 35675:return FR;case 35676:return OR;case 5124:case 35670:return BR;case 35667:case 35671:return kR;case 35668:case 35672:return HR;case 35669:case 35673:return zR;case 5125:return VR;case 36294:return GR;case 36295:return WR;case 36296:return XR;case 35678:case 36198:case 36298:case 36306:case 35682:return $R;case 35679:case 36299:case 36307:return jR;case 35680:case 36300:case 36308:case 36293:return qR;case 36289:case 36303:case 36311:case 36292:return YR}}class ZR{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=PR(t.type)}}class JR{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=KR(t.type)}}class QR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Kl=/(\w+)(\])?(\[|\.)?/g;function Fd(n,e){n.seq.push(e),n.map[e.id]=e}function e1(n,e,t){const i=n.name,r=i.length;for(Kl.lastIndex=0;;){const s=Kl.exec(i),o=Kl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Fd(t,c===void 0?new ZR(a,n,e):new JR(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new QR(a),Fd(t,f)),t=f}}}class Jo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);e1(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Od(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const t1=37297;let n1=0;function i1(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Bd=new Ve;function r1(n){et._getMatrix(Bd,et.workingColorSpace,n);const e=`mat3( ${Bd.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(n)){case ya:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function kd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+i1(n.getShaderSource(e),o)}else return r}function s1(n,e){const t=r1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function o1(n,e){let t;switch(e){case _b:t="Linear";break;case vb:t="Reinhard";break;case xb:t="Cineon";break;case yb:t="ACESFilmic";break;case Sb:t="AgX";break;case bb:t="Neutral";break;case Mb:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ho=new H;function a1(){et.getLuminanceCoefficients(Ho);const n=Ho.x.toFixed(4),e=Ho.y.toFixed(4),t=Ho.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function l1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rs).join(`
`)}function c1(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function u1(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Rs(n){return n!==""}function Hd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const f1=/^[ \t]*#include +<([\w\d./]+)>/gm;function gu(n){return n.replace(f1,d1)}const h1=new Map;function d1(n,e){let t=We[e];if(t===void 0){const i=h1.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return gu(t)}const p1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vd(n){return n.replace(p1,m1)}function m1(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Gd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function g1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===tg?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===KS?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Zn&&(e="SHADOWMAP_TYPE_VSM"),e}function _1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case is:case rs:e="ENVMAP_TYPE_CUBE";break;case Wa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function v1(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case rs:e="ENVMAP_MODE_REFRACTION";break}return e}function x1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case af:e="ENVMAP_BLENDING_MULTIPLY";break;case mb:e="ENVMAP_BLENDING_MIX";break;case gb:e="ENVMAP_BLENDING_ADD";break}return e}function y1(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function M1(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=g1(t),c=_1(t),u=v1(t),f=x1(t),h=y1(t),d=l1(t),g=c1(s),_=r.createProgram();let m,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Rs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Rs).join(`
`),p.length>0&&(p+=`
`)):(m=[Gd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),p=[Gd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?We.tonemapping_pars_fragment:"",t.toneMapping!==Ri?o1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,s1("linearToOutputTexel",t.outputColorSpace),a1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rs).join(`
`)),o=gu(o),o=Hd(o,t),o=zd(o,t),a=gu(a),a=Hd(a,t),a=zd(a,t),o=Vd(o),a=Vd(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=A+m+o,M=A+p+a,w=Od(r,r.VERTEX_SHADER,x),R=Od(r,r.FRAGMENT_SHADER,M);r.attachShader(_,w),r.attachShader(_,R),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function C(I){if(n.debug.checkShaderErrors){const X=r.getProgramInfoLog(_).trim(),z=r.getShaderInfoLog(w).trim(),Z=r.getShaderInfoLog(R).trim();let te=!0,k=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(te=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,w,R);else{const ee=kd(r,w,"vertex"),N=kd(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+X+`
`+ee+`
`+N)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(z===""||Z==="")&&(k=!1);k&&(I.diagnostics={runnable:te,programLog:X,vertexShader:{log:z,prefix:m},fragmentShader:{log:Z,prefix:p}})}r.deleteShader(w),r.deleteShader(R),L=new Jo(r,_),T=u1(r,_)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,t1)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=n1++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=R,this}let S1=0;class b1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new E1(e),t.set(e,i)),i}}class E1{constructor(e){this.id=S1++,this.code=e,this.usedTimes=0}}function T1(n,e,t,i,r,s,o){const a=new gg,l=new b1,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,S,I,X,z){const Z=X.fog,te=z.geometry,k=T.isMeshStandardMaterial?X.environment:null,ee=(T.isMeshStandardMaterial?t:e).get(T.envMap||k),N=ee&&ee.mapping===Wa?ee.image.height:null,ue=g[T.type];T.precision!==null&&(d=r.getMaxPrecision(T.precision),d!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",d,"instead."));const ve=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Ee=ve!==void 0?ve.length:0;let Ie=0;te.morphAttributes.position!==void 0&&(Ie=1),te.morphAttributes.normal!==void 0&&(Ie=2),te.morphAttributes.color!==void 0&&(Ie=3);let rt,ne,fe,Se;if(ue){const ct=On[ue];rt=ct.vertexShader,ne=ct.fragmentShader}else rt=T.vertexShader,ne=T.fragmentShader,l.update(T),fe=l.getVertexShaderID(T),Se=l.getFragmentShaderID(T);const he=n.getRenderTarget(),Ae=n.state.buffers.depth.getReversed(),Ne=z.isInstancedMesh===!0,Be=z.isBatchedMesh===!0,dt=!!T.map,je=!!T.matcap,P=!!ee,y=!!T.aoMap,q=!!T.lightMap,J=!!T.bumpMap,Y=!!T.normalMap,W=!!T.displacementMap,se=!!T.emissiveMap,K=!!T.metalnessMap,b=!!T.roughnessMap,v=T.anisotropy>0,D=T.clearcoat>0,O=T.dispersion>0,G=T.iridescence>0,V=T.sheen>0,le=T.transmission>0,oe=v&&!!T.anisotropyMap,ae=D&&!!T.clearcoatMap,De=D&&!!T.clearcoatNormalMap,re=D&&!!T.clearcoatRoughnessMap,de=G&&!!T.iridescenceMap,be=G&&!!T.iridescenceThicknessMap,Re=V&&!!T.sheenColorMap,ye=V&&!!T.sheenRoughnessMap,Le=!!T.specularMap,Ce=!!T.specularColorMap,lt=!!T.specularIntensityMap,U=le&&!!T.transmissionMap,me=le&&!!T.thicknessMap,Q=!!T.gradientMap,ie=!!T.alphaMap,xe=T.alphaTest>0,_e=!!T.alphaHash,ze=!!T.extensions;let yt=Ri;T.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(yt=n.toneMapping);const Ot={shaderID:ue,shaderType:T.type,shaderName:T.name,vertexShader:rt,fragmentShader:ne,defines:T.defines,customVertexShaderID:fe,customFragmentShaderID:Se,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:d,batching:Be,batchingColor:Be&&z._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&z.instanceColor!==null,instancingMorph:Ne&&z.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:as,alphaToCoverage:!!T.alphaToCoverage,map:dt,matcap:je,envMap:P,envMapMode:P&&ee.mapping,envMapCubeUVHeight:N,aoMap:y,lightMap:q,bumpMap:J,normalMap:Y,displacementMap:h&&W,emissiveMap:se,normalMapObjectSpace:Y&&T.normalMapType===Lb,normalMapTangentSpace:Y&&T.normalMapType===gf,metalnessMap:K,roughnessMap:b,anisotropy:v,anisotropyMap:oe,clearcoat:D,clearcoatMap:ae,clearcoatNormalMap:De,clearcoatRoughnessMap:re,dispersion:O,iridescence:G,iridescenceMap:de,iridescenceThicknessMap:be,sheen:V,sheenColorMap:Re,sheenRoughnessMap:ye,specularMap:Le,specularColorMap:Ce,specularIntensityMap:lt,transmission:le,transmissionMap:U,thicknessMap:me,gradientMap:Q,opaque:T.transparent===!1&&T.blending===qr&&T.alphaToCoverage===!1,alphaMap:ie,alphaTest:xe,alphaHash:_e,combine:T.combine,mapUv:dt&&_(T.map.channel),aoMapUv:y&&_(T.aoMap.channel),lightMapUv:q&&_(T.lightMap.channel),bumpMapUv:J&&_(T.bumpMap.channel),normalMapUv:Y&&_(T.normalMap.channel),displacementMapUv:W&&_(T.displacementMap.channel),emissiveMapUv:se&&_(T.emissiveMap.channel),metalnessMapUv:K&&_(T.metalnessMap.channel),roughnessMapUv:b&&_(T.roughnessMap.channel),anisotropyMapUv:oe&&_(T.anisotropyMap.channel),clearcoatMapUv:ae&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:De&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:be&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:ye&&_(T.sheenRoughnessMap.channel),specularMapUv:Le&&_(T.specularMap.channel),specularColorMapUv:Ce&&_(T.specularColorMap.channel),specularIntensityMapUv:lt&&_(T.specularIntensityMap.channel),transmissionMapUv:U&&_(T.transmissionMap.channel),thicknessMapUv:me&&_(T.thicknessMap.channel),alphaMapUv:ie&&_(T.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(Y||v),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!te.attributes.uv&&(dt||ie),fog:!!Z,useFog:T.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ae,skinning:z.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Ie,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:yt,decodeVideoTexture:dt&&T.map.isVideoTexture===!0&&et.getTransfer(T.map.colorSpace)===ht,decodeVideoTextureEmissive:se&&T.emissiveMap.isVideoTexture===!0&&et.getTransfer(T.emissiveMap.colorSpace)===ht,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ei,flipSided:T.side===en,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:ze&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&T.extensions.multiDraw===!0||Be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ot.vertexUv1s=c.has(1),Ot.vertexUv2s=c.has(2),Ot.vertexUv3s=c.has(3),c.clear(),Ot}function p(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const I in T.defines)S.push(I),S.push(T.defines[I]);return T.isRawShaderMaterial===!1&&(A(S,T),x(S,T),S.push(n.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function A(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function x(T,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),T.push(a.mask)}function M(T){const S=g[T.type];let I;if(S){const X=On[S];I=bE.clone(X.uniforms)}else I=T.uniforms;return I}function w(T,S){let I;for(let X=0,z=u.length;X<z;X++){const Z=u[X];if(Z.cacheKey===S){I=Z,++I.usedTimes;break}}return I===void 0&&(I=new M1(n,S,T,s),u.push(I)),I}function R(T){if(--T.usedTimes===0){const S=u.indexOf(T);u[S]=u[u.length-1],u.pop(),T.destroy()}}function C(T){l.remove(T)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:w,releaseProgram:R,releaseShaderCache:C,programs:u,dispose:L}}function w1(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function A1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Wd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Xd(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,d,g,_,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function a(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||A1),i.length>1&&i.sort(h||Wd),r.length>1&&r.sort(h||Wd)}function u(){for(let f=e,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function R1(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Xd,n.set(i,[o])):r>=s.length?(o=new Xd,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function C1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new He};break;case"SpotLight":t={position:new H,direction:new H,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function P1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let I1=0;function L1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function D1(n){const e=new C1,t=P1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const r=new H,s=new Ye,o=new Ye;function a(c){let u=0,f=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,A=0,x=0,M=0,w=0,R=0,C=0;c.sort(L1);for(let T=0,S=c.length;T<S;T++){const I=c[T],X=I.color,z=I.intensity,Z=I.distance,te=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=X.r*z,f+=X.g*z,h+=X.b*z;else if(I.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(I.sh.coefficients[k],z);C++}else if(I.isDirectionalLight){const k=e.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ee=I.shadow,N=t.get(I);N.shadowIntensity=ee.intensity,N.shadowBias=ee.bias,N.shadowNormalBias=ee.normalBias,N.shadowRadius=ee.radius,N.shadowMapSize=ee.mapSize,i.directionalShadow[d]=N,i.directionalShadowMap[d]=te,i.directionalShadowMatrix[d]=I.shadow.matrix,A++}i.directional[d]=k,d++}else if(I.isSpotLight){const k=e.get(I);k.position.setFromMatrixPosition(I.matrixWorld),k.color.copy(X).multiplyScalar(z),k.distance=Z,k.coneCos=Math.cos(I.angle),k.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),k.decay=I.decay,i.spot[_]=k;const ee=I.shadow;if(I.map&&(i.spotLightMap[w]=I.map,w++,ee.updateMatrices(I),I.castShadow&&R++),i.spotLightMatrix[_]=ee.matrix,I.castShadow){const N=t.get(I);N.shadowIntensity=ee.intensity,N.shadowBias=ee.bias,N.shadowNormalBias=ee.normalBias,N.shadowRadius=ee.radius,N.shadowMapSize=ee.mapSize,i.spotShadow[_]=N,i.spotShadowMap[_]=te,M++}_++}else if(I.isRectAreaLight){const k=e.get(I);k.color.copy(X).multiplyScalar(z),k.halfWidth.set(I.width*.5,0,0),k.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=k,m++}else if(I.isPointLight){const k=e.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),k.distance=I.distance,k.decay=I.decay,I.castShadow){const ee=I.shadow,N=t.get(I);N.shadowIntensity=ee.intensity,N.shadowBias=ee.bias,N.shadowNormalBias=ee.normalBias,N.shadowRadius=ee.radius,N.shadowMapSize=ee.mapSize,N.shadowCameraNear=ee.camera.near,N.shadowCameraFar=ee.camera.far,i.pointShadow[g]=N,i.pointShadowMap[g]=te,i.pointShadowMatrix[g]=I.shadow.matrix,x++}i.point[g]=k,g++}else if(I.isHemisphereLight){const k=e.get(I);k.skyColor.copy(I.color).multiplyScalar(z),k.groundColor.copy(I.groundColor).multiplyScalar(z),i.hemi[p]=k,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const L=i.hash;(L.directionalLength!==d||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==A||L.numPointShadows!==x||L.numSpotShadows!==M||L.numSpotMaps!==w||L.numLightProbes!==C)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=M+w-R,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=C,L.directionalLength=d,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=A,L.numPointShadows=x,L.numSpotShadows=M,L.numSpotMaps=w,L.numLightProbes=C,i.version=I1++)}function l(c,u){let f=0,h=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,A=c.length;p<A;p++){const x=c[p];if(x.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),f++}else if(x.isSpotLight){const M=i.spot[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),h++}else if(x.isHemisphereLight){const M=i.hemi[_];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function $d(n){const e=new D1(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function U1(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new $d(n),e.set(r,[a])):s>=o.length?(a=new $d(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const N1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,F1=`uniform sampler2D shadow_pass;
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
}`;function O1(n,e,t){let i=new xf;const r=new Je,s=new Je,o=new it,a=new kE({depthPacking:Ib}),l=new HE,c={},u=t.maxTextureSize,f={[Li]:en,[en]:Li,[ei]:ei},h=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:N1,fragmentShader:F1}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new hi;g.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new gn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tg;let p=this.type;this.render=function(R,C,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const T=n.getRenderTarget(),S=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),X=n.state;X.setBlending(Ai),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const z=p!==Zn&&this.type===Zn,Z=p===Zn&&this.type!==Zn;for(let te=0,k=R.length;te<k;te++){const ee=R[te],N=ee.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const ue=N.getFrameExtents();if(r.multiply(ue),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ue.x),r.x=s.x*ue.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ue.y),r.y=s.y*ue.y,N.mapSize.y=s.y)),N.map===null||z===!0||Z===!0){const Ee=this.type!==Zn?{minFilter:ln,magFilter:ln}:{};N.map!==null&&N.map.dispose(),N.map=new hr(r.x,r.y,Ee),N.map.texture.name=ee.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const ve=N.getViewportCount();for(let Ee=0;Ee<ve;Ee++){const Ie=N.getViewport(Ee);o.set(s.x*Ie.x,s.y*Ie.y,s.x*Ie.z,s.y*Ie.w),X.viewport(o),N.updateMatrices(ee,Ee),i=N.getFrustum(),M(C,L,N.camera,ee,this.type)}N.isPointLightShadow!==!0&&this.type===Zn&&A(N,L),N.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,S,I)};function A(R,C){const L=e.update(_);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new hr(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(C,null,L,h,_,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(C,null,L,d,_,null)}function x(R,C,L,T){let S=null;const I=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)S=I;else if(S=L.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const X=S.uuid,z=C.uuid;let Z=c[X];Z===void 0&&(Z={},c[X]=Z);let te=Z[z];te===void 0&&(te=S.clone(),Z[z]=te,C.addEventListener("dispose",w)),S=te}if(S.visible=C.visible,S.wireframe=C.wireframe,T===Zn?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:f[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const X=n.properties.get(S);X.light=L}return S}function M(R,C,L,T,S){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===Zn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);const z=e.update(R),Z=R.material;if(Array.isArray(Z)){const te=z.groups;for(let k=0,ee=te.length;k<ee;k++){const N=te[k],ue=Z[N.materialIndex];if(ue&&ue.visible){const ve=x(R,ue,T,S);R.onBeforeShadow(n,R,C,L,z,ve,N),n.renderBufferDirect(L,null,z,ve,R,N),R.onAfterShadow(n,R,C,L,z,ve,N)}}}else if(Z.visible){const te=x(R,Z,T,S);R.onBeforeShadow(n,R,C,L,z,te,null),n.renderBufferDirect(L,null,z,te,R,null),R.onAfterShadow(n,R,C,L,z,te,null)}}const X=R.children;for(let z=0,Z=X.length;z<Z;z++)M(X[z],C,L,T,S)}function w(R){R.target.removeEventListener("dispose",w);for(const L in c){const T=c[L],S=R.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}const B1={[Pc]:Ic,[Lc]:Nc,[Dc]:Fc,[ns]:Uc,[Ic]:Pc,[Nc]:Lc,[Fc]:Dc,[Uc]:ns};function k1(n,e){function t(){let U=!1;const me=new it;let Q=null;const ie=new it(0,0,0,0);return{setMask:function(xe){Q!==xe&&!U&&(n.colorMask(xe,xe,xe,xe),Q=xe)},setLocked:function(xe){U=xe},setClear:function(xe,_e,ze,yt,Ot){Ot===!0&&(xe*=yt,_e*=yt,ze*=yt),me.set(xe,_e,ze,yt),ie.equals(me)===!1&&(n.clearColor(xe,_e,ze,yt),ie.copy(me))},reset:function(){U=!1,Q=null,ie.set(-1,0,0,0)}}}function i(){let U=!1,me=!1,Q=null,ie=null,xe=null;return{setReversed:function(_e){if(me!==_e){const ze=e.get("EXT_clip_control");me?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT);const yt=xe;xe=null,this.setClear(yt)}me=_e},getReversed:function(){return me},setTest:function(_e){_e?he(n.DEPTH_TEST):Ae(n.DEPTH_TEST)},setMask:function(_e){Q!==_e&&!U&&(n.depthMask(_e),Q=_e)},setFunc:function(_e){if(me&&(_e=B1[_e]),ie!==_e){switch(_e){case Pc:n.depthFunc(n.NEVER);break;case Ic:n.depthFunc(n.ALWAYS);break;case Lc:n.depthFunc(n.LESS);break;case ns:n.depthFunc(n.LEQUAL);break;case Dc:n.depthFunc(n.EQUAL);break;case Uc:n.depthFunc(n.GEQUAL);break;case Nc:n.depthFunc(n.GREATER);break;case Fc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ie=_e}},setLocked:function(_e){U=_e},setClear:function(_e){xe!==_e&&(me&&(_e=1-_e),n.clearDepth(_e),xe=_e)},reset:function(){U=!1,Q=null,ie=null,xe=null,me=!1}}}function r(){let U=!1,me=null,Q=null,ie=null,xe=null,_e=null,ze=null,yt=null,Ot=null;return{setTest:function(ct){U||(ct?he(n.STENCIL_TEST):Ae(n.STENCIL_TEST))},setMask:function(ct){me!==ct&&!U&&(n.stencilMask(ct),me=ct)},setFunc:function(ct,Mn,Vn){(Q!==ct||ie!==Mn||xe!==Vn)&&(n.stencilFunc(ct,Mn,Vn),Q=ct,ie=Mn,xe=Vn)},setOp:function(ct,Mn,Vn){(_e!==ct||ze!==Mn||yt!==Vn)&&(n.stencilOp(ct,Mn,Vn),_e=ct,ze=Mn,yt=Vn)},setLocked:function(ct){U=ct},setClear:function(ct){Ot!==ct&&(n.clearStencil(ct),Ot=ct)},reset:function(){U=!1,me=null,Q=null,ie=null,xe=null,_e=null,ze=null,yt=null,Ot=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,A=null,x=null,M=null,w=null,R=null,C=new He(0,0,0),L=0,T=!1,S=null,I=null,X=null,z=null,Z=null;const te=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,ee=0;const N=n.getParameter(n.VERSION);N.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(N)[1]),k=ee>=1):N.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),k=ee>=2);let ue=null,ve={};const Ee=n.getParameter(n.SCISSOR_BOX),Ie=n.getParameter(n.VIEWPORT),rt=new it().fromArray(Ee),ne=new it().fromArray(Ie);function fe(U,me,Q,ie){const xe=new Uint8Array(4),_e=n.createTexture();n.bindTexture(U,_e),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ze=0;ze<Q;ze++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(me,0,n.RGBA,1,1,ie,0,n.RGBA,n.UNSIGNED_BYTE,xe):n.texImage2D(me+ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xe);return _e}const Se={};Se[n.TEXTURE_2D]=fe(n.TEXTURE_2D,n.TEXTURE_2D,1),Se[n.TEXTURE_CUBE_MAP]=fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[n.TEXTURE_2D_ARRAY]=fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Se[n.TEXTURE_3D]=fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),he(n.DEPTH_TEST),o.setFunc(ns),J(!1),Y(Ph),he(n.CULL_FACE),y(Ai);function he(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function Ae(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function Ne(U,me){return f[U]!==me?(n.bindFramebuffer(U,me),f[U]=me,U===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=me),U===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=me),!0):!1}function Be(U,me){let Q=d,ie=!1;if(U){Q=h.get(me),Q===void 0&&(Q=[],h.set(me,Q));const xe=U.textures;if(Q.length!==xe.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let _e=0,ze=xe.length;_e<ze;_e++)Q[_e]=n.COLOR_ATTACHMENT0+_e;Q.length=xe.length,ie=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,ie=!0);ie&&n.drawBuffers(Q)}function dt(U){return g!==U?(n.useProgram(U),g=U,!0):!1}const je={[Ji]:n.FUNC_ADD,[JS]:n.FUNC_SUBTRACT,[QS]:n.FUNC_REVERSE_SUBTRACT};je[eb]=n.MIN,je[tb]=n.MAX;const P={[nb]:n.ZERO,[ib]:n.ONE,[rb]:n.SRC_COLOR,[Rc]:n.SRC_ALPHA,[ub]:n.SRC_ALPHA_SATURATE,[lb]:n.DST_COLOR,[ob]:n.DST_ALPHA,[sb]:n.ONE_MINUS_SRC_COLOR,[Cc]:n.ONE_MINUS_SRC_ALPHA,[cb]:n.ONE_MINUS_DST_COLOR,[ab]:n.ONE_MINUS_DST_ALPHA,[fb]:n.CONSTANT_COLOR,[hb]:n.ONE_MINUS_CONSTANT_COLOR,[db]:n.CONSTANT_ALPHA,[pb]:n.ONE_MINUS_CONSTANT_ALPHA};function y(U,me,Q,ie,xe,_e,ze,yt,Ot,ct){if(U===Ai){_===!0&&(Ae(n.BLEND),_=!1);return}if(_===!1&&(he(n.BLEND),_=!0),U!==ZS){if(U!==m||ct!==T){if((p!==Ji||M!==Ji)&&(n.blendEquation(n.FUNC_ADD),p=Ji,M=Ji),ct)switch(U){case qr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ih:n.blendFunc(n.ONE,n.ONE);break;case Lh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Dh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case qr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ih:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Lh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Dh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}A=null,x=null,w=null,R=null,C.set(0,0,0),L=0,m=U,T=ct}return}xe=xe||me,_e=_e||Q,ze=ze||ie,(me!==p||xe!==M)&&(n.blendEquationSeparate(je[me],je[xe]),p=me,M=xe),(Q!==A||ie!==x||_e!==w||ze!==R)&&(n.blendFuncSeparate(P[Q],P[ie],P[_e],P[ze]),A=Q,x=ie,w=_e,R=ze),(yt.equals(C)===!1||Ot!==L)&&(n.blendColor(yt.r,yt.g,yt.b,Ot),C.copy(yt),L=Ot),m=U,T=!1}function q(U,me){U.side===ei?Ae(n.CULL_FACE):he(n.CULL_FACE);let Q=U.side===en;me&&(Q=!Q),J(Q),U.blending===qr&&U.transparent===!1?y(Ai):y(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const ie=U.stencilWrite;a.setTest(ie),ie&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),se(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):Ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function J(U){S!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),S=U)}function Y(U){U!==qS?(he(n.CULL_FACE),U!==I&&(U===Ph?n.cullFace(n.BACK):U===YS?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ae(n.CULL_FACE),I=U}function W(U){U!==X&&(k&&n.lineWidth(U),X=U)}function se(U,me,Q){U?(he(n.POLYGON_OFFSET_FILL),(z!==me||Z!==Q)&&(n.polygonOffset(me,Q),z=me,Z=Q)):Ae(n.POLYGON_OFFSET_FILL)}function K(U){U?he(n.SCISSOR_TEST):Ae(n.SCISSOR_TEST)}function b(U){U===void 0&&(U=n.TEXTURE0+te-1),ue!==U&&(n.activeTexture(U),ue=U)}function v(U,me,Q){Q===void 0&&(ue===null?Q=n.TEXTURE0+te-1:Q=ue);let ie=ve[Q];ie===void 0&&(ie={type:void 0,texture:void 0},ve[Q]=ie),(ie.type!==U||ie.texture!==me)&&(ue!==Q&&(n.activeTexture(Q),ue=Q),n.bindTexture(U,me||Se[U]),ie.type=U,ie.texture=me)}function D(){const U=ve[ue];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function O(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function G(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function V(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(U){rt.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),rt.copy(U))}function ye(U){ne.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),ne.copy(U))}function Le(U,me){let Q=c.get(me);Q===void 0&&(Q=new WeakMap,c.set(me,Q));let ie=Q.get(U);ie===void 0&&(ie=n.getUniformBlockIndex(me,U.name),Q.set(U,ie))}function Ce(U,me){const ie=c.get(me).get(U);l.get(me)!==ie&&(n.uniformBlockBinding(me,ie,U.__bindingPointIndex),l.set(me,ie))}function lt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ue=null,ve={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,A=null,x=null,M=null,w=null,R=null,C=new He(0,0,0),L=0,T=!1,S=null,I=null,X=null,z=null,Z=null,rt.set(0,0,n.canvas.width,n.canvas.height),ne.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:he,disable:Ae,bindFramebuffer:Ne,drawBuffers:Be,useProgram:dt,setBlending:y,setMaterial:q,setFlipSided:J,setCullFace:Y,setLineWidth:W,setPolygonOffset:se,setScissorTest:K,activeTexture:b,bindTexture:v,unbindTexture:D,compressedTexImage2D:O,compressedTexImage3D:G,texImage2D:de,texImage3D:be,updateUBOMapping:Le,uniformBlockBinding:Ce,texStorage2D:De,texStorage3D:re,texSubImage2D:V,texSubImage3D:le,compressedTexSubImage2D:oe,compressedTexSubImage3D:ae,scissor:Re,viewport:ye,reset:lt}}function H1(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,v){return d?new OffscreenCanvas(b,v):Ws("canvas")}function _(b,v,D){let O=1;const G=K(b);if((G.width>D||G.height>D)&&(O=D/Math.max(G.width,G.height)),O<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const V=Math.floor(O*G.width),le=Math.floor(O*G.height);f===void 0&&(f=g(V,le));const oe=v?g(V,le):f;return oe.width=V,oe.height=le,oe.getContext("2d").drawImage(b,0,0,V,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+V+"x"+le+")."),oe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){n.generateMipmap(b)}function A(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(b,v,D,O,G=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let V=v;if(v===n.RED&&(D===n.FLOAT&&(V=n.R32F),D===n.HALF_FLOAT&&(V=n.R16F),D===n.UNSIGNED_BYTE&&(V=n.R8)),v===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(V=n.R8UI),D===n.UNSIGNED_SHORT&&(V=n.R16UI),D===n.UNSIGNED_INT&&(V=n.R32UI),D===n.BYTE&&(V=n.R8I),D===n.SHORT&&(V=n.R16I),D===n.INT&&(V=n.R32I)),v===n.RG&&(D===n.FLOAT&&(V=n.RG32F),D===n.HALF_FLOAT&&(V=n.RG16F),D===n.UNSIGNED_BYTE&&(V=n.RG8)),v===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(V=n.RG8UI),D===n.UNSIGNED_SHORT&&(V=n.RG16UI),D===n.UNSIGNED_INT&&(V=n.RG32UI),D===n.BYTE&&(V=n.RG8I),D===n.SHORT&&(V=n.RG16I),D===n.INT&&(V=n.RG32I)),v===n.RGB_INTEGER&&(D===n.UNSIGNED_BYTE&&(V=n.RGB8UI),D===n.UNSIGNED_SHORT&&(V=n.RGB16UI),D===n.UNSIGNED_INT&&(V=n.RGB32UI),D===n.BYTE&&(V=n.RGB8I),D===n.SHORT&&(V=n.RGB16I),D===n.INT&&(V=n.RGB32I)),v===n.RGBA_INTEGER&&(D===n.UNSIGNED_BYTE&&(V=n.RGBA8UI),D===n.UNSIGNED_SHORT&&(V=n.RGBA16UI),D===n.UNSIGNED_INT&&(V=n.RGBA32UI),D===n.BYTE&&(V=n.RGBA8I),D===n.SHORT&&(V=n.RGBA16I),D===n.INT&&(V=n.RGBA32I)),v===n.RGB&&D===n.UNSIGNED_INT_5_9_9_9_REV&&(V=n.RGB9_E5),v===n.RGBA){const le=G?ya:et.getTransfer(O);D===n.FLOAT&&(V=n.RGBA32F),D===n.HALF_FLOAT&&(V=n.RGBA16F),D===n.UNSIGNED_BYTE&&(V=le===ht?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return(V===n.R16F||V===n.R32F||V===n.RG16F||V===n.RG32F||V===n.RGBA16F||V===n.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function M(b,v){let D;return b?v===null||v===fr||v===ss?D=n.DEPTH24_STENCIL8:v===Cn?D=n.DEPTH32F_STENCIL8:v===Gs&&(D=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===fr||v===ss?D=n.DEPTH_COMPONENT24:v===Cn?D=n.DEPTH_COMPONENT32F:v===Gs&&(D=n.DEPTH_COMPONENT16),D}function w(b,v){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==ln&&b.minFilter!==kn?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function R(b){const v=b.target;v.removeEventListener("dispose",R),L(v),v.isVideoTexture&&u.delete(v)}function C(b){const v=b.target;v.removeEventListener("dispose",C),S(v)}function L(b){const v=i.get(b);if(v.__webglInit===void 0)return;const D=b.source,O=h.get(D);if(O){const G=O[v.__cacheKey];G.usedTimes--,G.usedTimes===0&&T(b),Object.keys(O).length===0&&h.delete(D)}i.remove(b)}function T(b){const v=i.get(b);n.deleteTexture(v.__webglTexture);const D=b.source,O=h.get(D);delete O[v.__cacheKey],o.memory.textures--}function S(b){const v=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(v.__webglFramebuffer[O]))for(let G=0;G<v.__webglFramebuffer[O].length;G++)n.deleteFramebuffer(v.__webglFramebuffer[O][G]);else n.deleteFramebuffer(v.__webglFramebuffer[O]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[O])}else{if(Array.isArray(v.__webglFramebuffer))for(let O=0;O<v.__webglFramebuffer.length;O++)n.deleteFramebuffer(v.__webglFramebuffer[O]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let O=0;O<v.__webglColorRenderbuffer.length;O++)v.__webglColorRenderbuffer[O]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[O]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const D=b.textures;for(let O=0,G=D.length;O<G;O++){const V=i.get(D[O]);V.__webglTexture&&(n.deleteTexture(V.__webglTexture),o.memory.textures--),i.remove(D[O])}i.remove(b)}let I=0;function X(){I=0}function z(){const b=I;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),I+=1,b}function Z(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function te(b,v){const D=i.get(b);if(b.isVideoTexture&&W(b),b.isRenderTargetTexture===!1&&b.version>0&&D.__version!==b.version){const O=b.image;if(O===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(D,b,v);return}}t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+v)}function k(b,v){const D=i.get(b);if(b.version>0&&D.__version!==b.version){ne(D,b,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+v)}function ee(b,v){const D=i.get(b);if(b.version>0&&D.__version!==b.version){ne(D,b,v);return}t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+v)}function N(b,v){const D=i.get(b);if(b.version>0&&D.__version!==b.version){fe(D,b,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+v)}const ue={[kc]:n.REPEAT,[tr]:n.CLAMP_TO_EDGE,[Hc]:n.MIRRORED_REPEAT},ve={[ln]:n.NEAREST,[Tb]:n.NEAREST_MIPMAP_NEAREST,[fo]:n.NEAREST_MIPMAP_LINEAR,[kn]:n.LINEAR,[vl]:n.LINEAR_MIPMAP_NEAREST,[nr]:n.LINEAR_MIPMAP_LINEAR},Ee={[Db]:n.NEVER,[kb]:n.ALWAYS,[Ub]:n.LESS,[hg]:n.LEQUAL,[Nb]:n.EQUAL,[Bb]:n.GEQUAL,[Fb]:n.GREATER,[Ob]:n.NOTEQUAL};function Ie(b,v){if(v.type===Cn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===kn||v.magFilter===vl||v.magFilter===fo||v.magFilter===nr||v.minFilter===kn||v.minFilter===vl||v.minFilter===fo||v.minFilter===nr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,ue[v.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,ue[v.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,ue[v.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,ve[v.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,ve[v.minFilter]),v.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Ee[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===ln||v.minFilter!==fo&&v.minFilter!==nr||v.type===Cn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function rt(b,v){let D=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",R));const O=v.source;let G=h.get(O);G===void 0&&(G={},h.set(O,G));const V=Z(v);if(V!==b.__cacheKey){G[V]===void 0&&(G[V]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,D=!0),G[V].usedTimes++;const le=G[b.__cacheKey];le!==void 0&&(G[b.__cacheKey].usedTimes--,le.usedTimes===0&&T(v)),b.__cacheKey=V,b.__webglTexture=G[V].texture}return D}function ne(b,v,D){let O=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(O=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(O=n.TEXTURE_3D);const G=rt(b,v),V=v.source;t.bindTexture(O,b.__webglTexture,n.TEXTURE0+D);const le=i.get(V);if(V.version!==le.__version||G===!0){t.activeTexture(n.TEXTURE0+D);const oe=et.getPrimaries(et.workingColorSpace),ae=v.colorSpace===Ei?null:et.getPrimaries(v.colorSpace),De=v.colorSpace===Ei||oe===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let re=_(v.image,!1,r.maxTextureSize);re=se(v,re);const de=s.convert(v.format,v.colorSpace),be=s.convert(v.type);let Re=x(v.internalFormat,de,be,v.colorSpace,v.isVideoTexture);Ie(O,v);let ye;const Le=v.mipmaps,Ce=v.isVideoTexture!==!0,lt=le.__version===void 0||G===!0,U=V.dataReady,me=w(v,re);if(v.isDepthTexture)Re=M(v.format===os,v.type),lt&&(Ce?t.texStorage2D(n.TEXTURE_2D,1,Re,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,Re,re.width,re.height,0,de,be,null));else if(v.isDataTexture)if(Le.length>0){Ce&&lt&&t.texStorage2D(n.TEXTURE_2D,me,Re,Le[0].width,Le[0].height);for(let Q=0,ie=Le.length;Q<ie;Q++)ye=Le[Q],Ce?U&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,ye.width,ye.height,de,be,ye.data):t.texImage2D(n.TEXTURE_2D,Q,Re,ye.width,ye.height,0,de,be,ye.data);v.generateMipmaps=!1}else Ce?(lt&&t.texStorage2D(n.TEXTURE_2D,me,Re,re.width,re.height),U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,re.width,re.height,de,be,re.data)):t.texImage2D(n.TEXTURE_2D,0,Re,re.width,re.height,0,de,be,re.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ce&&lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,Re,Le[0].width,Le[0].height,re.depth);for(let Q=0,ie=Le.length;Q<ie;Q++)if(ye=Le[Q],v.format!==mn)if(de!==null)if(Ce){if(U)if(v.layerUpdates.size>0){const xe=Sd(ye.width,ye.height,v.format,v.type);for(const _e of v.layerUpdates){const ze=ye.data.subarray(_e*xe/ye.data.BYTES_PER_ELEMENT,(_e+1)*xe/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,_e,ye.width,ye.height,1,de,ze)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,ye.width,ye.height,re.depth,de,ye.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Re,ye.width,ye.height,re.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ce?U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,ye.width,ye.height,re.depth,de,be,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,Re,ye.width,ye.height,re.depth,0,de,be,ye.data)}else{Ce&&lt&&t.texStorage2D(n.TEXTURE_2D,me,Re,Le[0].width,Le[0].height);for(let Q=0,ie=Le.length;Q<ie;Q++)ye=Le[Q],v.format!==mn?de!==null?Ce?U&&t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,ye.width,ye.height,de,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,Re,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?U&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,ye.width,ye.height,de,be,ye.data):t.texImage2D(n.TEXTURE_2D,Q,Re,ye.width,ye.height,0,de,be,ye.data)}else if(v.isDataArrayTexture)if(Ce){if(lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,Re,re.width,re.height,re.depth),U)if(v.layerUpdates.size>0){const Q=Sd(re.width,re.height,v.format,v.type);for(const ie of v.layerUpdates){const xe=re.data.subarray(ie*Q/re.data.BYTES_PER_ELEMENT,(ie+1)*Q/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ie,re.width,re.height,1,de,be,xe)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,de,be,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Re,re.width,re.height,re.depth,0,de,be,re.data);else if(v.isData3DTexture)Ce?(lt&&t.texStorage3D(n.TEXTURE_3D,me,Re,re.width,re.height,re.depth),U&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,de,be,re.data)):t.texImage3D(n.TEXTURE_3D,0,Re,re.width,re.height,re.depth,0,de,be,re.data);else if(v.isFramebufferTexture){if(lt)if(Ce)t.texStorage2D(n.TEXTURE_2D,me,Re,re.width,re.height);else{let Q=re.width,ie=re.height;for(let xe=0;xe<me;xe++)t.texImage2D(n.TEXTURE_2D,xe,Re,Q,ie,0,de,be,null),Q>>=1,ie>>=1}}else if(Le.length>0){if(Ce&&lt){const Q=K(Le[0]);t.texStorage2D(n.TEXTURE_2D,me,Re,Q.width,Q.height)}for(let Q=0,ie=Le.length;Q<ie;Q++)ye=Le[Q],Ce?U&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,de,be,ye):t.texImage2D(n.TEXTURE_2D,Q,Re,de,be,ye);v.generateMipmaps=!1}else if(Ce){if(lt){const Q=K(re);t.texStorage2D(n.TEXTURE_2D,me,Re,Q.width,Q.height)}U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de,be,re)}else t.texImage2D(n.TEXTURE_2D,0,Re,de,be,re);m(v)&&p(O),le.__version=V.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function fe(b,v,D){if(v.image.length!==6)return;const O=rt(b,v),G=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+D);const V=i.get(G);if(G.version!==V.__version||O===!0){t.activeTexture(n.TEXTURE0+D);const le=et.getPrimaries(et.workingColorSpace),oe=v.colorSpace===Ei?null:et.getPrimaries(v.colorSpace),ae=v.colorSpace===Ei||le===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const De=v.isCompressedTexture||v.image[0].isCompressedTexture,re=v.image[0]&&v.image[0].isDataTexture,de=[];for(let ie=0;ie<6;ie++)!De&&!re?de[ie]=_(v.image[ie],!0,r.maxCubemapSize):de[ie]=re?v.image[ie].image:v.image[ie],de[ie]=se(v,de[ie]);const be=de[0],Re=s.convert(v.format,v.colorSpace),ye=s.convert(v.type),Le=x(v.internalFormat,Re,ye,v.colorSpace),Ce=v.isVideoTexture!==!0,lt=V.__version===void 0||O===!0,U=G.dataReady;let me=w(v,be);Ie(n.TEXTURE_CUBE_MAP,v);let Q;if(De){Ce&&lt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,me,Le,be.width,be.height);for(let ie=0;ie<6;ie++){Q=de[ie].mipmaps;for(let xe=0;xe<Q.length;xe++){const _e=Q[xe];v.format!==mn?Re!==null?Ce?U&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe,0,0,_e.width,_e.height,Re,_e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe,Le,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe,0,0,_e.width,_e.height,Re,ye,_e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe,Le,_e.width,_e.height,0,Re,ye,_e.data)}}}else{if(Q=v.mipmaps,Ce&&lt){Q.length>0&&me++;const ie=K(de[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,me,Le,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(re){Ce?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,de[ie].width,de[ie].height,Re,ye,de[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Le,de[ie].width,de[ie].height,0,Re,ye,de[ie].data);for(let xe=0;xe<Q.length;xe++){const ze=Q[xe].image[ie].image;Ce?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe+1,0,0,ze.width,ze.height,Re,ye,ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe+1,Le,ze.width,ze.height,0,Re,ye,ze.data)}}else{Ce?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Re,ye,de[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Le,Re,ye,de[ie]);for(let xe=0;xe<Q.length;xe++){const _e=Q[xe];Ce?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe+1,0,0,Re,ye,_e.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe+1,Le,Re,ye,_e.image[ie])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),V.__version=G.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function Se(b,v,D,O,G,V){const le=s.convert(D.format,D.colorSpace),oe=s.convert(D.type),ae=x(D.internalFormat,le,oe,D.colorSpace),De=i.get(v),re=i.get(D);if(re.__renderTarget=v,!De.__hasExternalTextures){const de=Math.max(1,v.width>>V),be=Math.max(1,v.height>>V);G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?t.texImage3D(G,V,ae,de,be,v.depth,0,le,oe,null):t.texImage2D(G,V,ae,de,be,0,le,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),Y(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,O,G,re.__webglTexture,0,J(v)):(G===n.TEXTURE_2D||G>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,O,G,re.__webglTexture,V),t.bindFramebuffer(n.FRAMEBUFFER,null)}function he(b,v,D){if(n.bindRenderbuffer(n.RENDERBUFFER,b),v.depthBuffer){const O=v.depthTexture,G=O&&O.isDepthTexture?O.type:null,V=M(v.stencilBuffer,G),le=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=J(v);Y(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,V,v.width,v.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,V,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,V,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,b)}else{const O=v.textures;for(let G=0;G<O.length;G++){const V=O[G],le=s.convert(V.format,V.colorSpace),oe=s.convert(V.type),ae=x(V.internalFormat,le,oe,V.colorSpace),De=J(v);D&&Y(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,De,ae,v.width,v.height):Y(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,De,ae,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ae,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ae(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const O=i.get(v.depthTexture);O.__renderTarget=v,(!O.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),te(v.depthTexture,0);const G=O.__webglTexture,V=J(v);if(v.depthTexture.format===Yr)Y(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,G,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,G,0);else if(v.depthTexture.format===os)Y(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,G,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,G,0);else throw new Error("Unknown depthTexture format")}function Ne(b){const v=i.get(b),D=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){const O=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),O){const G=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,O.removeEventListener("dispose",G)};O.addEventListener("dispose",G),v.__depthDisposeCallback=G}v.__boundDepthTexture=O}if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");Ae(v.__webglFramebuffer,b)}else if(D){v.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[O]),v.__webglDepthbuffer[O]===void 0)v.__webglDepthbuffer[O]=n.createRenderbuffer(),he(v.__webglDepthbuffer[O],b,!1);else{const G=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=v.__webglDepthbuffer[O];n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,V)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),he(v.__webglDepthbuffer,b,!1);else{const O=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,O,n.RENDERBUFFER,G)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Be(b,v,D){const O=i.get(b);v!==void 0&&Se(O.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&Ne(b)}function dt(b){const v=b.texture,D=i.get(b),O=i.get(v);b.addEventListener("dispose",C);const G=b.textures,V=b.isWebGLCubeRenderTarget===!0,le=G.length>1;if(le||(O.__webglTexture===void 0&&(O.__webglTexture=n.createTexture()),O.__version=v.version,o.memory.textures++),V){D.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer[oe]=[];for(let ae=0;ae<v.mipmaps.length;ae++)D.__webglFramebuffer[oe][ae]=n.createFramebuffer()}else D.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer=[];for(let oe=0;oe<v.mipmaps.length;oe++)D.__webglFramebuffer[oe]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(le)for(let oe=0,ae=G.length;oe<ae;oe++){const De=i.get(G[oe]);De.__webglTexture===void 0&&(De.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&Y(b)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let oe=0;oe<G.length;oe++){const ae=G[oe];D.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[oe]);const De=s.convert(ae.format,ae.colorSpace),re=s.convert(ae.type),de=x(ae.internalFormat,De,re,ae.colorSpace,b.isXRRenderTarget===!0),be=J(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,be,de,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,D.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),he(D.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(V){t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture),Ie(n.TEXTURE_CUBE_MAP,v);for(let oe=0;oe<6;oe++)if(v.mipmaps&&v.mipmaps.length>0)for(let ae=0;ae<v.mipmaps.length;ae++)Se(D.__webglFramebuffer[oe][ae],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ae);else Se(D.__webglFramebuffer[oe],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){for(let oe=0,ae=G.length;oe<ae;oe++){const De=G[oe],re=i.get(De);t.bindTexture(n.TEXTURE_2D,re.__webglTexture),Ie(n.TEXTURE_2D,De),Se(D.__webglFramebuffer,b,De,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,0),m(De)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(oe=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,O.__webglTexture),Ie(oe,v),v.mipmaps&&v.mipmaps.length>0)for(let ae=0;ae<v.mipmaps.length;ae++)Se(D.__webglFramebuffer[ae],b,v,n.COLOR_ATTACHMENT0,oe,ae);else Se(D.__webglFramebuffer,b,v,n.COLOR_ATTACHMENT0,oe,0);m(v)&&p(oe),t.unbindTexture()}b.depthBuffer&&Ne(b)}function je(b){const v=b.textures;for(let D=0,O=v.length;D<O;D++){const G=v[D];if(m(G)){const V=A(b),le=i.get(G).__webglTexture;t.bindTexture(V,le),p(V),t.unbindTexture()}}}const P=[],y=[];function q(b){if(b.samples>0){if(Y(b)===!1){const v=b.textures,D=b.width,O=b.height;let G=n.COLOR_BUFFER_BIT;const V=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=i.get(b),oe=v.length>1;if(oe)for(let ae=0;ae<v.length;ae++)t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let ae=0;ae<v.length;ae++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(G|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(G|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,le.__webglColorRenderbuffer[ae]);const De=i.get(v[ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,De,0)}n.blitFramebuffer(0,0,D,O,0,0,D,O,G,n.NEAREST),l===!0&&(P.length=0,y.length=0,P.push(n.COLOR_ATTACHMENT0+ae),b.depthBuffer&&b.resolveDepthBuffer===!1&&(P.push(V),y.push(V),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,y)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,P))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let ae=0;ae<v.length;ae++){t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,le.__webglColorRenderbuffer[ae]);const De=i.get(v[ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,De,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const v=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function J(b){return Math.min(r.maxSamples,b.samples)}function Y(b){const v=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function W(b){const v=o.render.frame;u.get(b)!==v&&(u.set(b,v),b.update())}function se(b,v){const D=b.colorSpace,O=b.format,G=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||D!==as&&D!==Ei&&(et.getTransfer(D)===ht?(O!==mn||G!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),v}function K(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=X,this.setTexture2D=te,this.setTexture2DArray=k,this.setTexture3D=ee,this.setTextureCube=N,this.rebindTextures=Be,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Y}function z1(n,e){function t(i,r=Ei){let s;const o=et.getTransfer(r);if(i===ai)return n.UNSIGNED_BYTE;if(i===cf)return n.UNSIGNED_SHORT_4_4_4_4;if(i===uf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===sg)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ig)return n.BYTE;if(i===rg)return n.SHORT;if(i===Gs)return n.UNSIGNED_SHORT;if(i===lf)return n.INT;if(i===fr)return n.UNSIGNED_INT;if(i===Cn)return n.FLOAT;if(i===Zs)return n.HALF_FLOAT;if(i===og)return n.ALPHA;if(i===ag)return n.RGB;if(i===mn)return n.RGBA;if(i===lg)return n.LUMINANCE;if(i===cg)return n.LUMINANCE_ALPHA;if(i===Yr)return n.DEPTH_COMPONENT;if(i===os)return n.DEPTH_STENCIL;if(i===ff)return n.RED;if(i===hf)return n.RED_INTEGER;if(i===ug)return n.RG;if(i===df)return n.RG_INTEGER;if(i===pf)return n.RGBA_INTEGER;if(i===jo||i===qo||i===Yo||i===Ko)if(o===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===jo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Yo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===jo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===qo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Yo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ko)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===zc||i===Vc||i===Gc||i===Wc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===zc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Vc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Gc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Wc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Xc||i===$c||i===jc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Xc||i===$c)return o===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===jc)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===qc||i===Yc||i===Kc||i===Zc||i===Jc||i===Qc||i===eu||i===tu||i===nu||i===iu||i===ru||i===su||i===ou||i===au)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===qc)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Yc)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Kc)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Zc)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Jc)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Qc)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===eu)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===tu)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===nu)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===iu)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ru)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===su)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ou)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===au)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Zo||i===lu||i===cu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Zo)return o===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===lu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===cu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===fg||i===uu||i===fu||i===hu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Zo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===uu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===fu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ss?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const V1={type:"move"};class Zl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(V1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Fo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const G1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,W1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class X1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Gt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new li({vertexShader:G1,fragmentShader:W1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gn(new $a(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $1 extends gr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=new X1,m=t.getContextAttributes();let p=null,A=null;const x=[],M=[],w=new Je;let R=null;const C=new Jt;C.viewport=new it;const L=new Jt;L.viewport=new it;const T=[C,L],S=new tT;let I=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let fe=x[ne];return fe===void 0&&(fe=new Zl,x[ne]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ne){let fe=x[ne];return fe===void 0&&(fe=new Zl,x[ne]=fe),fe.getGripSpace()},this.getHand=function(ne){let fe=x[ne];return fe===void 0&&(fe=new Zl,x[ne]=fe),fe.getHandSpace()};function z(ne){const fe=M.indexOf(ne.inputSource);if(fe===-1)return;const Se=x[fe];Se!==void 0&&(Se.update(ne.inputSource,ne.frame,c||o),Se.dispatchEvent({type:ne.type,data:ne.inputSource}))}function Z(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",te);for(let ne=0;ne<x.length;ne++){const fe=M[ne];fe!==null&&(M[ne]=null,x[ne].disconnect(fe))}I=null,X=null,_.reset(),e.setRenderTarget(p),d=null,h=null,f=null,r=null,A=null,rt.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",te),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(w),r.renderState.layers===void 0){const fe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),A=new hr(d.framebufferWidth,d.framebufferHeight,{format:mn,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let fe=null,Se=null,he=null;m.depth&&(he=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=m.stencil?os:Yr,Se=m.stencil?ss:fr);const Ae={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(Ae),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),A=new hr(h.textureWidth,h.textureHeight,{format:mn,type:ai,depthTexture:new Rg(h.textureWidth,h.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),rt.setContext(r),rt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function te(ne){for(let fe=0;fe<ne.removed.length;fe++){const Se=ne.removed[fe],he=M.indexOf(Se);he>=0&&(M[he]=null,x[he].disconnect(Se))}for(let fe=0;fe<ne.added.length;fe++){const Se=ne.added[fe];let he=M.indexOf(Se);if(he===-1){for(let Ne=0;Ne<x.length;Ne++)if(Ne>=M.length){M.push(Se),he=Ne;break}else if(M[Ne]===null){M[Ne]=Se,he=Ne;break}if(he===-1)break}const Ae=x[he];Ae&&Ae.connect(Se)}}const k=new H,ee=new H;function N(ne,fe,Se){k.setFromMatrixPosition(fe.matrixWorld),ee.setFromMatrixPosition(Se.matrixWorld);const he=k.distanceTo(ee),Ae=fe.projectionMatrix.elements,Ne=Se.projectionMatrix.elements,Be=Ae[14]/(Ae[10]-1),dt=Ae[14]/(Ae[10]+1),je=(Ae[9]+1)/Ae[5],P=(Ae[9]-1)/Ae[5],y=(Ae[8]-1)/Ae[0],q=(Ne[8]+1)/Ne[0],J=Be*y,Y=Be*q,W=he/(-y+q),se=W*-y;if(fe.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(se),ne.translateZ(W),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Ae[10]===-1)ne.projectionMatrix.copy(fe.projectionMatrix),ne.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const K=Be+W,b=dt+W,v=J-se,D=Y+(he-se),O=je*dt/b*K,G=P*dt/b*K;ne.projectionMatrix.makePerspective(v,D,O,G,K,b),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function ue(ne,fe){fe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(fe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;let fe=ne.near,Se=ne.far;_.texture!==null&&(_.depthNear>0&&(fe=_.depthNear),_.depthFar>0&&(Se=_.depthFar)),S.near=L.near=C.near=fe,S.far=L.far=C.far=Se,(I!==S.near||X!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),I=S.near,X=S.far),C.layers.mask=ne.layers.mask|2,L.layers.mask=ne.layers.mask|4,S.layers.mask=C.layers.mask|L.layers.mask;const he=ne.parent,Ae=S.cameras;ue(S,he);for(let Ne=0;Ne<Ae.length;Ne++)ue(Ae[Ne],he);Ae.length===2?N(S,C,L):S.projectionMatrix.copy(C.projectionMatrix),ve(ne,S,he)};function ve(ne,fe,Se){Se===null?ne.matrix.copy(fe.matrixWorld):(ne.matrix.copy(Se.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(fe.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(fe.projectionMatrix),ne.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=ls*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(ne){l=ne,h!==null&&(h.fixedFoveation=ne),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ne)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let Ee=null;function Ie(ne,fe){if(u=fe.getViewerPose(c||o),g=fe,u!==null){const Se=u.views;d!==null&&(e.setRenderTargetFramebuffer(A,d.framebuffer),e.setRenderTarget(A));let he=!1;Se.length!==S.cameras.length&&(S.cameras.length=0,he=!0);for(let Ne=0;Ne<Se.length;Ne++){const Be=Se[Ne];let dt=null;if(d!==null)dt=d.getViewport(Be);else{const P=f.getViewSubImage(h,Be);dt=P.viewport,Ne===0&&(e.setRenderTargetTextures(A,P.colorTexture,h.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(A))}let je=T[Ne];je===void 0&&(je=new Jt,je.layers.enable(Ne),je.viewport=new it,T[Ne]=je),je.matrix.fromArray(Be.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(Be.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(dt.x,dt.y,dt.width,dt.height),Ne===0&&(S.matrix.copy(je.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),he===!0&&S.cameras.push(je)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Ne=f.getDepthInformation(Se[0]);Ne&&Ne.isValid&&Ne.texture&&_.init(e,Ne,r.renderState)}}for(let Se=0;Se<x.length;Se++){const he=M[Se],Ae=x[Se];he!==null&&Ae!==void 0&&Ae.update(he,fe,c||o)}Ee&&Ee(ne,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),g=null}const rt=new Dg;rt.setAnimationLoop(Ie),this.setAnimationLoop=function(ne){Ee=ne},this.dispose=function(){}}}const ji=new Un,j1=new Ye;function q1(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Mg(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,A,x,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,A,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===en&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===en&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=e.get(p),x=A.envMap,M=A.envMapRotation;x&&(m.envMap.value=x,ji.copy(M),ji.x*=-1,ji.y*=-1,ji.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),m.envMapRotation.value.setFromMatrix4(j1.makeRotationFromEuler(ji)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const A=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Y1(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,x){const M=x.program;i.uniformBlockBinding(A,M)}function c(A,x){let M=r[A.id];M===void 0&&(g(A),M=u(A),r[A.id]=M,A.addEventListener("dispose",m));const w=x.program;i.updateUBOMapping(A,w);const R=e.render.frame;s[A.id]!==R&&(h(A),s[A.id]=R)}function u(A){const x=f();A.__bindingPointIndex=x;const M=n.createBuffer(),w=A.__size,R=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,w,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,M),M}function f(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(A){const x=r[A.id],M=A.uniforms,w=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let R=0,C=M.length;R<C;R++){const L=Array.isArray(M[R])?M[R]:[M[R]];for(let T=0,S=L.length;T<S;T++){const I=L[T];if(d(I,R,T,w)===!0){const X=I.__offset,z=Array.isArray(I.value)?I.value:[I.value];let Z=0;for(let te=0;te<z.length;te++){const k=z[te],ee=_(k);typeof k=="number"||typeof k=="boolean"?(I.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,X+Z,I.__data)):k.isMatrix3?(I.__data[0]=k.elements[0],I.__data[1]=k.elements[1],I.__data[2]=k.elements[2],I.__data[3]=0,I.__data[4]=k.elements[3],I.__data[5]=k.elements[4],I.__data[6]=k.elements[5],I.__data[7]=0,I.__data[8]=k.elements[6],I.__data[9]=k.elements[7],I.__data[10]=k.elements[8],I.__data[11]=0):(k.toArray(I.__data,Z),Z+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,X,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(A,x,M,w){const R=A.value,C=x+"_"+M;if(w[C]===void 0)return typeof R=="number"||typeof R=="boolean"?w[C]=R:w[C]=R.clone(),!0;{const L=w[C];if(typeof R=="number"||typeof R=="boolean"){if(L!==R)return w[C]=R,!0}else if(L.equals(R)===!1)return L.copy(R),!0}return!1}function g(A){const x=A.uniforms;let M=0;const w=16;for(let C=0,L=x.length;C<L;C++){const T=Array.isArray(x[C])?x[C]:[x[C]];for(let S=0,I=T.length;S<I;S++){const X=T[S],z=Array.isArray(X.value)?X.value:[X.value];for(let Z=0,te=z.length;Z<te;Z++){const k=z[Z],ee=_(k),N=M%w,ue=N%ee.boundary,ve=N+ue;M+=ue,ve!==0&&w-ve<ee.storage&&(M+=w-ve),X.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=M,M+=ee.storage}}}const R=M%w;return R>0&&(M+=w-R),A.__size=M,A.__cache={},this}function _(A){const x={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(x.boundary=4,x.storage=4):A.isVector2?(x.boundary=8,x.storage=8):A.isVector3||A.isColor?(x.boundary=16,x.storage=12):A.isVector4?(x.boundary=16,x.storage=16):A.isMatrix3?(x.boundary=48,x.storage=48):A.isMatrix4?(x.boundary=64,x.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),x}function m(A){const x=A.target;x.removeEventListener("dispose",m);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const A in r)n.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class K1{constructor(e={}){const{canvas:t=nE(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const A=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pn,this.toneMapping=Ri,this.toneMappingExposure=1;const M=this;let w=!1,R=0,C=0,L=null,T=-1,S=null;const I=new it,X=new it;let z=null;const Z=new He(0);let te=0,k=t.width,ee=t.height,N=1,ue=null,ve=null;const Ee=new it(0,0,k,ee),Ie=new it(0,0,k,ee);let rt=!1;const ne=new xf;let fe=!1,Se=!1;const he=new Ye,Ae=new Ye,Ne=new H,Be=new it,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function P(){return L===null?N:1}let y=i;function q(E,F){return t.getContext(E,F)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${of}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",_e,!1),y===null){const F="webgl2";if(y=q(F,E),y===null)throw q(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let J,Y,W,se,K,b,v,D,O,G,V,le,oe,ae,De,re,de,be,Re,ye,Le,Ce,lt,U;function me(){J=new sR(y),J.init(),Ce=new z1(y,J),Y=new QA(y,J,e,Ce),W=new k1(y,J),Y.reverseDepthBuffer&&h&&W.buffers.depth.setReversed(!0),se=new lR(y),K=new w1,b=new H1(y,J,W,K,Y,Ce,se),v=new tR(M),D=new rR(M),O=new mT(y),lt=new ZA(y,O),G=new oR(y,O,se,lt),V=new uR(y,G,O,se),Re=new cR(y,Y,b),re=new eR(K),le=new T1(M,v,D,J,Y,lt,re),oe=new q1(M,K),ae=new R1,De=new U1(J),be=new KA(M,v,D,W,V,d,l),de=new O1(M,V,Y),U=new Y1(y,se,Y,W),ye=new JA(y,J,se),Le=new aR(y,J,se),se.programs=le.programs,M.capabilities=Y,M.extensions=J,M.properties=K,M.renderLists=ae,M.shadowMap=de,M.state=W,M.info=se}me();const Q=new $1(M,y);this.xr=Q,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){const E=J.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=J.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(E){E!==void 0&&(N=E,this.setSize(k,ee,!1))},this.getSize=function(E){return E.set(k,ee)},this.setSize=function(E,F,$=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=E,ee=F,t.width=Math.floor(E*N),t.height=Math.floor(F*N),$===!0&&(t.style.width=E+"px",t.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(k*N,ee*N).floor()},this.setDrawingBufferSize=function(E,F,$){k=E,ee=F,N=$,t.width=Math.floor(E*$),t.height=Math.floor(F*$),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(I)},this.getViewport=function(E){return E.copy(Ee)},this.setViewport=function(E,F,$,j){E.isVector4?Ee.set(E.x,E.y,E.z,E.w):Ee.set(E,F,$,j),W.viewport(I.copy(Ee).multiplyScalar(N).round())},this.getScissor=function(E){return E.copy(Ie)},this.setScissor=function(E,F,$,j){E.isVector4?Ie.set(E.x,E.y,E.z,E.w):Ie.set(E,F,$,j),W.scissor(X.copy(Ie).multiplyScalar(N).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(E){W.setScissorTest(rt=E)},this.setOpaqueSort=function(E){ue=E},this.setTransparentSort=function(E){ve=E},this.getClearColor=function(E){return E.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor.apply(be,arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha.apply(be,arguments)},this.clear=function(E=!0,F=!0,$=!0){let j=0;if(E){let B=!1;if(L!==null){const ce=L.texture.format;B=ce===pf||ce===df||ce===hf}if(B){const ce=L.texture.type,ge=ce===ai||ce===fr||ce===Gs||ce===ss||ce===cf||ce===uf,Me=be.getClearColor(),Te=be.getClearAlpha(),Fe=Me.r,ke=Me.g,we=Me.b;ge?(g[0]=Fe,g[1]=ke,g[2]=we,g[3]=Te,y.clearBufferuiv(y.COLOR,0,g)):(_[0]=Fe,_[1]=ke,_[2]=we,_[3]=Te,y.clearBufferiv(y.COLOR,0,_))}else j|=y.COLOR_BUFFER_BIT}F&&(j|=y.DEPTH_BUFFER_BIT),$&&(j|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),y.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),be.dispose(),ae.dispose(),De.dispose(),K.dispose(),v.dispose(),D.dispose(),V.dispose(),lt.dispose(),U.dispose(),le.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Ef),Q.removeEventListener("sessionend",Tf),Bi.stop()};function ie(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const E=se.autoReset,F=de.enabled,$=de.autoUpdate,j=de.needsUpdate,B=de.type;me(),se.autoReset=E,de.enabled=F,de.autoUpdate=$,de.needsUpdate=j,de.type=B}function _e(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ze(E){const F=E.target;F.removeEventListener("dispose",ze),yt(F)}function yt(E){Ot(E),K.remove(E)}function Ot(E){const F=K.get(E).programs;F!==void 0&&(F.forEach(function($){le.releaseProgram($)}),E.isShaderMaterial&&le.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,$,j,B,ce){F===null&&(F=dt);const ge=B.isMesh&&B.matrixWorld.determinant()<0,Me=kg(E,F,$,j,B);W.setMaterial(j,ge);let Te=$.index,Fe=1;if(j.wireframe===!0){if(Te=G.getWireframeAttribute($),Te===void 0)return;Fe=2}const ke=$.drawRange,we=$.attributes.position;let Ze=ke.start*Fe,st=(ke.start+ke.count)*Fe;ce!==null&&(Ze=Math.max(Ze,ce.start*Fe),st=Math.min(st,(ce.start+ce.count)*Fe)),Te!==null?(Ze=Math.max(Ze,0),st=Math.min(st,Te.count)):we!=null&&(Ze=Math.max(Ze,0),st=Math.min(st,we.count));const bt=st-Ze;if(bt<0||bt===1/0)return;lt.setup(B,j,Me,$,Te);let Mt,Qe=ye;if(Te!==null&&(Mt=O.get(Te),Qe=Le,Qe.setIndex(Mt)),B.isMesh)j.wireframe===!0?(W.setLineWidth(j.wireframeLinewidth*P()),Qe.setMode(y.LINES)):Qe.setMode(y.TRIANGLES);else if(B.isLine){let Pe=j.linewidth;Pe===void 0&&(Pe=1),W.setLineWidth(Pe*P()),B.isLineSegments?Qe.setMode(y.LINES):B.isLineLoop?Qe.setMode(y.LINE_LOOP):Qe.setMode(y.LINE_STRIP)}else B.isPoints?Qe.setMode(y.POINTS):B.isSprite&&Qe.setMode(y.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Qe.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))Qe.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Pe=B._multiDrawStarts,Dt=B._multiDrawCounts,ot=B._multiDrawCount,Sn=Te?O.get(Te).bytesPerElement:1,_r=K.get(j).currentProgram.getUniforms();for(let nn=0;nn<ot;nn++)_r.setValue(y,"_gl_DrawID",nn),Qe.render(Pe[nn]/Sn,Dt[nn])}else if(B.isInstancedMesh)Qe.renderInstances(Ze,bt,B.count);else if($.isInstancedBufferGeometry){const Pe=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Dt=Math.min($.instanceCount,Pe);Qe.renderInstances(Ze,bt,Dt)}else Qe.render(Ze,bt)};function ct(E,F,$){E.transparent===!0&&E.side===ei&&E.forceSinglePass===!1?(E.side=en,E.needsUpdate=!0,to(E,F,$),E.side=Li,E.needsUpdate=!0,to(E,F,$),E.side=ei):to(E,F,$)}this.compile=function(E,F,$=null){$===null&&($=E),p=De.get($),p.init(F),x.push(p),$.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),E!==$&&E.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const j=new Set;return E.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ce=B.material;if(ce)if(Array.isArray(ce))for(let ge=0;ge<ce.length;ge++){const Me=ce[ge];ct(Me,$,B),j.add(Me)}else ct(ce,$,B),j.add(ce)}),x.pop(),p=null,j},this.compileAsync=function(E,F,$=null){const j=this.compile(E,F,$);return new Promise(B=>{function ce(){if(j.forEach(function(ge){K.get(ge).currentProgram.isReady()&&j.delete(ge)}),j.size===0){B(E);return}setTimeout(ce,10)}J.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Mn=null;function Vn(E){Mn&&Mn(E)}function Ef(){Bi.stop()}function Tf(){Bi.start()}const Bi=new Dg;Bi.setAnimationLoop(Vn),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(E){Mn=E,Q.setAnimationLoop(E),E===null?Bi.stop():Bi.start()},Q.addEventListener("sessionstart",Ef),Q.addEventListener("sessionend",Tf),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(F),F=Q.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,F,L),p=De.get(E,x.length),p.init(F),x.push(p),Ae.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ne.setFromProjectionMatrix(Ae),Se=this.localClippingEnabled,fe=re.init(this.clippingPlanes,Se),m=ae.get(E,A.length),m.init(),A.push(m),Q.enabled===!0&&Q.isPresenting===!0){const ce=M.xr.getDepthSensingMesh();ce!==null&&Ka(ce,F,-1/0,M.sortObjects)}Ka(E,F,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(ue,ve),je=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,je&&be.addToRenderList(m,E),this.info.render.frame++,fe===!0&&re.beginShadows();const $=p.state.shadowsArray;de.render($,E,F),fe===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=m.opaque,B=m.transmissive;if(p.setupLights(),F.isArrayCamera){const ce=F.cameras;if(B.length>0)for(let ge=0,Me=ce.length;ge<Me;ge++){const Te=ce[ge];Af(j,B,E,Te)}je&&be.render(E);for(let ge=0,Me=ce.length;ge<Me;ge++){const Te=ce[ge];wf(m,E,Te,Te.viewport)}}else B.length>0&&Af(j,B,E,F),je&&be.render(E),wf(m,E,F);L!==null&&(b.updateMultisampleRenderTarget(L),b.updateRenderTargetMipmap(L)),E.isScene===!0&&E.onAfterRender(M,E,F),lt.resetDefaultState(),T=-1,S=null,x.pop(),x.length>0?(p=x[x.length-1],fe===!0&&re.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function Ka(E,F,$,j){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)$=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ne.intersectsSprite(E)){j&&Be.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ae);const ge=V.update(E),Me=E.material;Me.visible&&m.push(E,ge,Me,$,Be.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ne.intersectsObject(E))){const ge=V.update(E),Me=E.material;if(j&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Be.copy(E.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Be.copy(ge.boundingSphere.center)),Be.applyMatrix4(E.matrixWorld).applyMatrix4(Ae)),Array.isArray(Me)){const Te=ge.groups;for(let Fe=0,ke=Te.length;Fe<ke;Fe++){const we=Te[Fe],Ze=Me[we.materialIndex];Ze&&Ze.visible&&m.push(E,ge,Ze,$,Be.z,we)}}else Me.visible&&m.push(E,ge,Me,$,Be.z,null)}}const ce=E.children;for(let ge=0,Me=ce.length;ge<Me;ge++)Ka(ce[ge],F,$,j)}function wf(E,F,$,j){const B=E.opaque,ce=E.transmissive,ge=E.transparent;p.setupLightsView($),fe===!0&&re.setGlobalState(M.clippingPlanes,$),j&&W.viewport(I.copy(j)),B.length>0&&eo(B,F,$),ce.length>0&&eo(ce,F,$),ge.length>0&&eo(ge,F,$),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function Af(E,F,$,j){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new hr(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?Zs:ai,minFilter:nr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const ce=p.state.transmissionRenderTarget[j.id],ge=j.viewport||I;ce.setSize(ge.z,ge.w);const Me=M.getRenderTarget();M.setRenderTarget(ce),M.getClearColor(Z),te=M.getClearAlpha(),te<1&&M.setClearColor(16777215,.5),M.clear(),je&&be.render($);const Te=M.toneMapping;M.toneMapping=Ri;const Fe=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),fe===!0&&re.setGlobalState(M.clippingPlanes,j),eo(E,$,j),b.updateMultisampleRenderTarget(ce),b.updateRenderTargetMipmap(ce),J.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let we=0,Ze=F.length;we<Ze;we++){const st=F[we],bt=st.object,Mt=st.geometry,Qe=st.material,Pe=st.group;if(Qe.side===ei&&bt.layers.test(j.layers)){const Dt=Qe.side;Qe.side=en,Qe.needsUpdate=!0,Rf(bt,$,j,Mt,Qe,Pe),Qe.side=Dt,Qe.needsUpdate=!0,ke=!0}}ke===!0&&(b.updateMultisampleRenderTarget(ce),b.updateRenderTargetMipmap(ce))}M.setRenderTarget(Me),M.setClearColor(Z,te),Fe!==void 0&&(j.viewport=Fe),M.toneMapping=Te}function eo(E,F,$){const j=F.isScene===!0?F.overrideMaterial:null;for(let B=0,ce=E.length;B<ce;B++){const ge=E[B],Me=ge.object,Te=ge.geometry,Fe=j===null?ge.material:j,ke=ge.group;Me.layers.test($.layers)&&Rf(Me,F,$,Te,Fe,ke)}}function Rf(E,F,$,j,B,ce){E.onBeforeRender(M,F,$,j,B,ce),E.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(M,F,$,j,E,ce),B.transparent===!0&&B.side===ei&&B.forceSinglePass===!1?(B.side=en,B.needsUpdate=!0,M.renderBufferDirect($,F,j,B,E,ce),B.side=Li,B.needsUpdate=!0,M.renderBufferDirect($,F,j,B,E,ce),B.side=ei):M.renderBufferDirect($,F,j,B,E,ce),E.onAfterRender(M,F,$,j,B,ce)}function to(E,F,$){F.isScene!==!0&&(F=dt);const j=K.get(E),B=p.state.lights,ce=p.state.shadowsArray,ge=B.state.version,Me=le.getParameters(E,B.state,ce,F,$),Te=le.getProgramCacheKey(Me);let Fe=j.programs;j.environment=E.isMeshStandardMaterial?F.environment:null,j.fog=F.fog,j.envMap=(E.isMeshStandardMaterial?D:v).get(E.envMap||j.environment),j.envMapRotation=j.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Fe===void 0&&(E.addEventListener("dispose",ze),Fe=new Map,j.programs=Fe);let ke=Fe.get(Te);if(ke!==void 0){if(j.currentProgram===ke&&j.lightsStateVersion===ge)return Pf(E,Me),ke}else Me.uniforms=le.getUniforms(E),E.onBeforeCompile(Me,M),ke=le.acquireProgram(Me,Te),Fe.set(Te,ke),j.uniforms=Me.uniforms;const we=j.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(we.clippingPlanes=re.uniform),Pf(E,Me),j.needsLights=zg(E),j.lightsStateVersion=ge,j.needsLights&&(we.ambientLightColor.value=B.state.ambient,we.lightProbe.value=B.state.probe,we.directionalLights.value=B.state.directional,we.directionalLightShadows.value=B.state.directionalShadow,we.spotLights.value=B.state.spot,we.spotLightShadows.value=B.state.spotShadow,we.rectAreaLights.value=B.state.rectArea,we.ltc_1.value=B.state.rectAreaLTC1,we.ltc_2.value=B.state.rectAreaLTC2,we.pointLights.value=B.state.point,we.pointLightShadows.value=B.state.pointShadow,we.hemisphereLights.value=B.state.hemi,we.directionalShadowMap.value=B.state.directionalShadowMap,we.directionalShadowMatrix.value=B.state.directionalShadowMatrix,we.spotShadowMap.value=B.state.spotShadowMap,we.spotLightMatrix.value=B.state.spotLightMatrix,we.spotLightMap.value=B.state.spotLightMap,we.pointShadowMap.value=B.state.pointShadowMap,we.pointShadowMatrix.value=B.state.pointShadowMatrix),j.currentProgram=ke,j.uniformsList=null,ke}function Cf(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=Jo.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function Pf(E,F){const $=K.get(E);$.outputColorSpace=F.outputColorSpace,$.batching=F.batching,$.batchingColor=F.batchingColor,$.instancing=F.instancing,$.instancingColor=F.instancingColor,$.instancingMorph=F.instancingMorph,$.skinning=F.skinning,$.morphTargets=F.morphTargets,$.morphNormals=F.morphNormals,$.morphColors=F.morphColors,$.morphTargetsCount=F.morphTargetsCount,$.numClippingPlanes=F.numClippingPlanes,$.numIntersection=F.numClipIntersection,$.vertexAlphas=F.vertexAlphas,$.vertexTangents=F.vertexTangents,$.toneMapping=F.toneMapping}function kg(E,F,$,j,B){F.isScene!==!0&&(F=dt),b.resetTextureUnits();const ce=F.fog,ge=j.isMeshStandardMaterial?F.environment:null,Me=L===null?M.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:as,Te=(j.isMeshStandardMaterial?D:v).get(j.envMap||ge),Fe=j.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ke=!!$.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),we=!!$.morphAttributes.position,Ze=!!$.morphAttributes.normal,st=!!$.morphAttributes.color;let bt=Ri;j.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(bt=M.toneMapping);const Mt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Qe=Mt!==void 0?Mt.length:0,Pe=K.get(j),Dt=p.state.lights;if(fe===!0&&(Se===!0||E!==S)){const Wt=E===S&&j.id===T;re.setState(j,E,Wt)}let ot=!1;j.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Dt.state.version||Pe.outputColorSpace!==Me||B.isBatchedMesh&&Pe.batching===!1||!B.isBatchedMesh&&Pe.batching===!0||B.isBatchedMesh&&Pe.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Pe.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Pe.instancing===!1||!B.isInstancedMesh&&Pe.instancing===!0||B.isSkinnedMesh&&Pe.skinning===!1||!B.isSkinnedMesh&&Pe.skinning===!0||B.isInstancedMesh&&Pe.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Pe.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Pe.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Pe.instancingMorph===!1&&B.morphTexture!==null||Pe.envMap!==Te||j.fog===!0&&Pe.fog!==ce||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==re.numPlanes||Pe.numIntersection!==re.numIntersection)||Pe.vertexAlphas!==Fe||Pe.vertexTangents!==ke||Pe.morphTargets!==we||Pe.morphNormals!==Ze||Pe.morphColors!==st||Pe.toneMapping!==bt||Pe.morphTargetsCount!==Qe)&&(ot=!0):(ot=!0,Pe.__version=j.version);let Sn=Pe.currentProgram;ot===!0&&(Sn=to(j,F,B));let _r=!1,nn=!1,gs=!1;const _t=Sn.getUniforms(),un=Pe.uniforms;if(W.useProgram(Sn.program)&&(_r=!0,nn=!0,gs=!0),j.id!==T&&(T=j.id,nn=!0),_r||S!==E){W.buffers.depth.getReversed()?(he.copy(E.projectionMatrix),rE(he),sE(he),_t.setValue(y,"projectionMatrix",he)):_t.setValue(y,"projectionMatrix",E.projectionMatrix),_t.setValue(y,"viewMatrix",E.matrixWorldInverse);const Zt=_t.map.cameraPosition;Zt!==void 0&&Zt.setValue(y,Ne.setFromMatrixPosition(E.matrixWorld)),Y.logarithmicDepthBuffer&&_t.setValue(y,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&_t.setValue(y,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,nn=!0,gs=!0)}if(B.isSkinnedMesh){_t.setOptional(y,B,"bindMatrix"),_t.setOptional(y,B,"bindMatrixInverse");const Wt=B.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),_t.setValue(y,"boneTexture",Wt.boneTexture,b))}B.isBatchedMesh&&(_t.setOptional(y,B,"batchingTexture"),_t.setValue(y,"batchingTexture",B._matricesTexture,b),_t.setOptional(y,B,"batchingIdTexture"),_t.setValue(y,"batchingIdTexture",B._indirectTexture,b),_t.setOptional(y,B,"batchingColorTexture"),B._colorsTexture!==null&&_t.setValue(y,"batchingColorTexture",B._colorsTexture,b));const fn=$.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&Re.update(B,$,Sn),(nn||Pe.receiveShadow!==B.receiveShadow)&&(Pe.receiveShadow=B.receiveShadow,_t.setValue(y,"receiveShadow",B.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(un.envMap.value=Te,un.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&F.environment!==null&&(un.envMapIntensity.value=F.environmentIntensity),nn&&(_t.setValue(y,"toneMappingExposure",M.toneMappingExposure),Pe.needsLights&&Hg(un,gs),ce&&j.fog===!0&&oe.refreshFogUniforms(un,ce),oe.refreshMaterialUniforms(un,j,N,ee,p.state.transmissionRenderTarget[E.id]),Jo.upload(y,Cf(Pe),un,b)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Jo.upload(y,Cf(Pe),un,b),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&_t.setValue(y,"center",B.center),_t.setValue(y,"modelViewMatrix",B.modelViewMatrix),_t.setValue(y,"normalMatrix",B.normalMatrix),_t.setValue(y,"modelMatrix",B.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Wt=j.uniformsGroups;for(let Zt=0,Za=Wt.length;Zt<Za;Zt++){const ki=Wt[Zt];U.update(ki,Sn),U.bind(ki,Sn)}}return Sn}function Hg(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function zg(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(E,F,$){K.get(E.texture).__webglTexture=F,K.get(E.depthTexture).__webglTexture=$;const j=K.get(E);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=$===void 0,j.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,F){const $=K.get(E);$.__webglFramebuffer=F,$.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,$=0){L=E,R=F,C=$;let j=!0,B=null,ce=!1,ge=!1;if(E){const Te=K.get(E);if(Te.__useDefaultFramebuffer!==void 0)W.bindFramebuffer(y.FRAMEBUFFER,null),j=!1;else if(Te.__webglFramebuffer===void 0)b.setupRenderTarget(E);else if(Te.__hasExternalTextures)b.rebindTextures(E,K.get(E.texture).__webglTexture,K.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const we=E.depthTexture;if(Te.__boundDepthTexture!==we){if(we!==null&&K.has(we)&&(E.width!==we.image.width||E.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(E)}}const Fe=E.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ge=!0);const ke=K.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ke[F])?B=ke[F][$]:B=ke[F],ce=!0):E.samples>0&&b.useMultisampledRTT(E)===!1?B=K.get(E).__webglMultisampledFramebuffer:Array.isArray(ke)?B=ke[$]:B=ke,I.copy(E.viewport),X.copy(E.scissor),z=E.scissorTest}else I.copy(Ee).multiplyScalar(N).floor(),X.copy(Ie).multiplyScalar(N).floor(),z=rt;if(W.bindFramebuffer(y.FRAMEBUFFER,B)&&j&&W.drawBuffers(E,B),W.viewport(I),W.scissor(X),W.setScissorTest(z),ce){const Te=K.get(E.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+F,Te.__webglTexture,$)}else if(ge){const Te=K.get(E.texture),Fe=F||0;y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,Te.__webglTexture,$||0,Fe)}T=-1},this.readRenderTargetPixels=function(E,F,$,j,B,ce,ge){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=K.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ge!==void 0&&(Me=Me[ge]),Me){W.bindFramebuffer(y.FRAMEBUFFER,Me);try{const Te=E.texture,Fe=Te.format,ke=Te.type;if(!Y.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Y.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-j&&$>=0&&$<=E.height-B&&y.readPixels(F,$,j,B,Ce.convert(Fe),Ce.convert(ke),ce)}finally{const Te=L!==null?K.get(L).__webglFramebuffer:null;W.bindFramebuffer(y.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(E,F,$,j,B,ce,ge){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=K.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ge!==void 0&&(Me=Me[ge]),Me){const Te=E.texture,Fe=Te.format,ke=Te.type;if(!Y.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Y.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=E.width-j&&$>=0&&$<=E.height-B){W.bindFramebuffer(y.FRAMEBUFFER,Me);const we=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,we),y.bufferData(y.PIXEL_PACK_BUFFER,ce.byteLength,y.STREAM_READ),y.readPixels(F,$,j,B,Ce.convert(Fe),Ce.convert(ke),0);const Ze=L!==null?K.get(L).__webglFramebuffer:null;W.bindFramebuffer(y.FRAMEBUFFER,Ze);const st=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await iE(y,st,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,we),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,ce),y.deleteBuffer(we),y.deleteSync(st),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,F=null,$=0){E.isTexture!==!0&&(Fr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,E=arguments[1]);const j=Math.pow(2,-$),B=Math.floor(E.image.width*j),ce=Math.floor(E.image.height*j),ge=F!==null?F.x:0,Me=F!==null?F.y:0;b.setTexture2D(E,0),y.copyTexSubImage2D(y.TEXTURE_2D,$,0,0,ge,Me,B,ce),W.unbindTexture()};const Vg=y.createFramebuffer(),Gg=y.createFramebuffer();this.copyTextureToTexture=function(E,F,$=null,j=null,B=0,ce=null){E.isTexture!==!0&&(Fr("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,E=arguments[1],F=arguments[2],ce=arguments[3]||0,$=null),ce===null&&(B!==0?(Fr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ce=B,B=0):ce=0);let ge,Me,Te,Fe,ke,we,Ze,st,bt;const Mt=E.isCompressedTexture?E.mipmaps[ce]:E.image;if($!==null)ge=$.max.x-$.min.x,Me=$.max.y-$.min.y,Te=$.isBox3?$.max.z-$.min.z:1,Fe=$.min.x,ke=$.min.y,we=$.isBox3?$.min.z:0;else{const fn=Math.pow(2,-B);ge=Math.floor(Mt.width*fn),Me=Math.floor(Mt.height*fn),E.isDataArrayTexture?Te=Mt.depth:E.isData3DTexture?Te=Math.floor(Mt.depth*fn):Te=1,Fe=0,ke=0,we=0}j!==null?(Ze=j.x,st=j.y,bt=j.z):(Ze=0,st=0,bt=0);const Qe=Ce.convert(F.format),Pe=Ce.convert(F.type);let Dt;F.isData3DTexture?(b.setTexture3D(F,0),Dt=y.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(b.setTexture2DArray(F,0),Dt=y.TEXTURE_2D_ARRAY):(b.setTexture2D(F,0),Dt=y.TEXTURE_2D),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,F.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,F.unpackAlignment);const ot=y.getParameter(y.UNPACK_ROW_LENGTH),Sn=y.getParameter(y.UNPACK_IMAGE_HEIGHT),_r=y.getParameter(y.UNPACK_SKIP_PIXELS),nn=y.getParameter(y.UNPACK_SKIP_ROWS),gs=y.getParameter(y.UNPACK_SKIP_IMAGES);y.pixelStorei(y.UNPACK_ROW_LENGTH,Mt.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,Mt.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,Fe),y.pixelStorei(y.UNPACK_SKIP_ROWS,ke),y.pixelStorei(y.UNPACK_SKIP_IMAGES,we);const _t=E.isDataArrayTexture||E.isData3DTexture,un=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){const fn=K.get(E),Wt=K.get(F),Zt=K.get(fn.__renderTarget),Za=K.get(Wt.__renderTarget);W.bindFramebuffer(y.READ_FRAMEBUFFER,Zt.__webglFramebuffer),W.bindFramebuffer(y.DRAW_FRAMEBUFFER,Za.__webglFramebuffer);for(let ki=0;ki<Te;ki++)_t&&(y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,K.get(E).__webglTexture,B,we+ki),y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,K.get(F).__webglTexture,ce,bt+ki)),y.blitFramebuffer(Fe,ke,ge,Me,Ze,st,ge,Me,y.DEPTH_BUFFER_BIT,y.NEAREST);W.bindFramebuffer(y.READ_FRAMEBUFFER,null),W.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else if(B!==0||E.isRenderTargetTexture||K.has(E)){const fn=K.get(E),Wt=K.get(F);W.bindFramebuffer(y.READ_FRAMEBUFFER,Vg),W.bindFramebuffer(y.DRAW_FRAMEBUFFER,Gg);for(let Zt=0;Zt<Te;Zt++)_t?y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,fn.__webglTexture,B,we+Zt):y.framebufferTexture2D(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,fn.__webglTexture,B),un?y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,Wt.__webglTexture,ce,bt+Zt):y.framebufferTexture2D(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Wt.__webglTexture,ce),B!==0?y.blitFramebuffer(Fe,ke,ge,Me,Ze,st,ge,Me,y.COLOR_BUFFER_BIT,y.NEAREST):un?y.copyTexSubImage3D(Dt,ce,Ze,st,bt+Zt,Fe,ke,ge,Me):y.copyTexSubImage2D(Dt,ce,Ze,st,Fe,ke,ge,Me);W.bindFramebuffer(y.READ_FRAMEBUFFER,null),W.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else un?E.isDataTexture||E.isData3DTexture?y.texSubImage3D(Dt,ce,Ze,st,bt,ge,Me,Te,Qe,Pe,Mt.data):F.isCompressedArrayTexture?y.compressedTexSubImage3D(Dt,ce,Ze,st,bt,ge,Me,Te,Qe,Mt.data):y.texSubImage3D(Dt,ce,Ze,st,bt,ge,Me,Te,Qe,Pe,Mt):E.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,ce,Ze,st,ge,Me,Qe,Pe,Mt.data):E.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,ce,Ze,st,Mt.width,Mt.height,Qe,Mt.data):y.texSubImage2D(y.TEXTURE_2D,ce,Ze,st,ge,Me,Qe,Pe,Mt);y.pixelStorei(y.UNPACK_ROW_LENGTH,ot),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,Sn),y.pixelStorei(y.UNPACK_SKIP_PIXELS,_r),y.pixelStorei(y.UNPACK_SKIP_ROWS,nn),y.pixelStorei(y.UNPACK_SKIP_IMAGES,gs),ce===0&&F.generateMipmaps&&y.generateMipmap(Dt),W.unbindTexture()},this.copyTextureToTexture3D=function(E,F,$=null,j=null,B=0){return E.isTexture!==!0&&(Fr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,j=arguments[1]||null,E=arguments[2],F=arguments[3],B=arguments[4]||0),Fr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,F,$,j,B)},this.initRenderTarget=function(E){K.get(E).__webglFramebuffer===void 0&&b.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?b.setTextureCube(E,0):E.isData3DTexture?b.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?b.setTexture2DArray(E,0):b.setTexture2D(E,0),W.unbindTexture()},this.resetState=function(){R=0,C=0,L=null,W.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}const Z1=async(n,e)=>{const t={Authorization:`bearer ${n}`},i={query:`query {
          user(login: "${e}") {
            contributionsCollection {
              contributionCalendar {
                weeks {
                  contributionDays {
                    contributionCount
                  }
                }
              }
            }
          }
        }`};return(await(await fetch("https://api.github.com/graphql",{method:"POST",body:JSON.stringify(i),headers:t})).json()).data.user.contributionsCollection.contributionCalendar.weeks},J1=`precision mediump float;
precision mediump int;

varying vec3 vInstanceColor;
varying vec3 vPosition;
varying vec4 vWorldPosition;

void main()	{
  vPosition = position;
  vec4 mvPosition = vec4( position, 1.0 );
  mvPosition = instanceMatrix * mvPosition;
  vInstanceColor = instanceColor;
  vWorldPosition = modelMatrix * mvPosition;

  gl_Position = projectionMatrix * modelViewMatrix * mvPosition;
}
`,Q1=`precision mediump float;
precision mediump int;

uniform float time;

uniform vec3 fogColor;
uniform float fogNear;
uniform float fogFar;

varying vec3 vPosition;
varying vec4 vWorldPosition;
varying vec3 vInstanceColor;

void main()	{

  vec3 c = vInstanceColor;
  c.r += sin( time ) * 0.3;
  c.b += cos( time ) * 0.7;

  gl_FragColor = vec4(c, 1.0);

  #ifdef USE_FOG
    float fogWorldFactor = clamp((vWorldPosition.y) / 20.0, 0.0, 1.0);
    gl_FragColor.rgb = mix(fogColor, gl_FragColor.rgb, fogWorldFactor);
  #endif
}
`,eC=(n,e)=>{var t,i,r;return new li({uniforms:{time:{value:1},color:{value:new H().fromArray(new He(n).toArray())},fogColor:{value:(t=e.fog)==null?void 0:t.color},fogNear:{value:(i=e.fog)==null?void 0:i.near},fogFar:{value:(r=e.fog)==null?void 0:r.far}},vertexShader:J1,fragmentShader:Q1,fog:!0,transparent:!0})},Bg="rgb(255, 255, 255)",tC=n=>n==="rgba(0, 0, 0, 0)",_u=n=>{if(!n)return Bg;if(n.nodeType!==Node.ELEMENT_NODE)return _u(n.parentElement);const e=window.getComputedStyle(n).backgroundColor;return tC(e)?_u(n.parentElement):e},nC=(n=eg())=>{const e=Xe(Bg);return Nt(n,t=>{e.value=_u(t)},{immediate:!0}),e},iC=n=>{const e={value:!1};return rf(n,([{isIntersecting:t}])=>{e.value=t;const i=Ge(n);t?(i.animate([{opacity:0},{opacity:1}],{duration:300}),i.style.opacity="1"):i.style.opacity="0"}),{isIntersecting:e}},rC={class:"contributions"},sC={class:"canvas-container"},oC={href:"https://github.com/m0ksem",target:"_blank",style:{color:"var(--m-rgb)"}},aC=Ft({__name:"contributions-city.client",setup(n){const e=Ga(),t=Xe(),i=Xe(null);let r=null,s=null;const o=h=>h>20?"#fff":h>18?"#f8f9fa":h>15?"#e9ecef":h>12?"#dee2e6":h>10?"#ced4da":h>7?"#adb5bd":h>5?"#6c757d":h>2?"#495057":h>0?"#343a40":"#f8f9fa";iC(t);const a=async()=>{const h=await Z1("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","m0ksem");if(!t.value)return null;t.value.width=t.value.offsetWidth,t.value.height=t.value.offsetHeight;const d=new RE;s=new K1({canvas:t.value,antialias:!0,alpha:!0}),s.setSize(t.value.offsetWidth,t.value.offsetHeight);const g=.5,_=1,m=h.length*_+h.length*g,p=_*7+2*g,A=new vt,x=new hs,M=eC("#fff",d),w=new DE(x,M,365);return d.add(w),h.forEach((R,C)=>{R.contributionDays.forEach((L,T)=>{const S=L.contributionCount;A.scale.y=Math.sqrt(Math.max(S,0)/2)*5,A.position.set((_+g)*C-m/2,A.scale.y/2,(_+g)*T),A.updateMatrix(),w.setMatrixAt(C*7+T,A.matrix),w.setColorAt(C*7+T,new He(o(S)))})}),r=new Jt(30,t.value.offsetWidth/t.value.offsetHeight,.1,1e3),r.position.set(0,m/2.2-p,m/1.7),r.lookAt(0,0,-p),l={...r.position},Qm(t,()=>{var R,C,L;M.uniforms.time.value=e.value,M.uniforms.fogColor.value=(R=d.fog)==null?void 0:R.color,M.uniforms.fogNear.value=(C=d.fog)==null?void 0:C.near,M.uniforms.fogFar.value=(L=d.fog)==null?void 0:L.color,M.needsUpdate=!0,s==null||s.render(d,r)}),d};let l={x:0,y:0,z:0};const c=()=>{const h=t.value.getBoundingClientRect(),d=Math.max(0,h.top+h.height-window.innerHeight);r.position.z=l.z+d/50,r.position.y=l.y+d/50},u=()=>{!r||!t.value||(r.aspect=t.value.offsetWidth/t.value.offsetHeight,r.updateProjectionMatrix(),s==null||s.setSize(t.value.offsetWidth,t.value.offsetHeight))};yn(async()=>{i.value=await a(),window.addEventListener("scroll",c),window.addEventListener("resize",u)}),qs(()=>{window.removeEventListener("scroll",c),window.removeEventListener("resize",u)});const f=nC();return Nt([f,i],()=>{i.value&&(i.value.fog=new vf(f.value,30,50))}),(h,d)=>(tt(),St("div",rC,[$e("div",sC,[$e("canvas",{ref_key:"canvas",ref:t},null,512)]),$e("a",oC,[Na(h.$slots,"default",{},void 0)])]))}}),lC=cn(aC,[["__scopeId","data-v-521fc166"]]),cC=window.setInterval,uC={class:"m-heading"},fC=Ft({__name:"m-heading",props:{text:{type:String,required:!1}},setup(n){Ba(s=>({"6400d24a":Ge(i)?"var(--m-color)":"transparent"}));const e=n,t=Xe(e.text),i=Xe(!1),r=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];if(e.text){const s=UM(),{stop:o}=rf(s,([a])=>{if(!a.isIntersecting||(i.value=!0,o(),!e.text))return;let l=0,c=cC(()=>{if(l>e.text.length){clearInterval(c);return}t.value=e.text.split("").map((u,f)=>f<l?u:u==" "?" ":r[Math.floor(Math.random()*r.length)]).join(""),l+=1/4},16)},{threshold:1,rootMargin:"10px"})}return(s,o)=>(tt(),St("h1",uC,[Na(s.$slots,"default",{},()=>[Ys(ii(Ge(t)),1)])]))}}),hC=cn(fC,[["__scopeId","data-v-be52f4fd"]]),dC={class:"horizon"},pC={class:"horizon__svg-wrapper"},mC={width:"800",height:"600",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 800 600"},gC={spreadMethod:"pad",id:"m-horizon-fill"},_C=["stop-color"],vC=Ft({__name:"horizon",props:{color:{default:"var(--m-rgb)"}},setup(n){return(e,t)=>(tt(),St("div",dC,[$e("div",pC,[(tt(),St("svg",mC,[$e("defs",null,[$e("radialGradient",gC,[t[0]||(t[0]=$e("stop",{offset:"0.85","stop-color":"var(--m-background)"},null,-1)),$e("stop",{offset:"1","stop-color":n.color},null,8,_C)])]),t[1]||(t[1]=$e("g",null,[$e("ellipse",{style:{"vector-effect":"non-scaling-stroke"},transform:"translate(39.7849, -2.15054) translate(1) translate(1) translate(5.37634) translate(562.532) translate(-5.47961, -163.703) translate(-20.5485, 27.3981) translate(660, 136) scale(1.21388, 1) translate(-660, -136) translate(138, 136) scale(1.26637, 1) translate(-138, -136) translate(138, 136) scale(1, 1.77909) translate(-138, -136) translate(660, 136) scale(2.50871, 4.55471) translate(-660, -136) translate(139, 136.5) scale(1, 0.450193) translate(-139, -136.5)",ry:"100",rx:"260",id:"svg_1",cy:"237",cx:"400",fill:"url(#m-horizon-fill)"})],-1))]))])]))}}),xC=cn(vC,[["__scopeId","data-v-33952f82"]]),yC={class:"projects-section"},MC=Ft({__name:"projects",setup(n){return(e,t)=>{const i=wS;return tt(),St("div",yC,[t[1]||(t[1]=$e("div",{class:"projects-section__planet"},null,-1)),Ke(hC,{class:"text-8xl -mb-16 text-center font-bold",text:"Portfolio"}),Ke(jS,{class:"container max-w-6xl project-list"}),Ke(xC),Ke(i,null,{default:Zr(()=>[Ke(lC,null,{default:Zr(()=>t[0]||(t[0]=[Ys("View Github Profile")])),_:1})]),_:1})])}}}),SC=cn(MC,[["__scopeId","data-v-3b5e8f83"]]),bC={class:"app"},EC={class:"app__content"},TC=Ft({__name:"app",setup(n){Ba(o=>({"663419e3":Ge(i),eddc9176:Ge(r)}));const e=sa(()=>_a(()=>import("./CYhh_NEF.js"),__vite__mapDeps([0,1]),import.meta.url)),t=sa(()=>_a(()=>import("./ClwYtal7.js"),__vite__mapDeps([2,3]),import.meta.url)),i=sf(),r=Vt(()=>i.value?i.value.match(/rgb\((.*)\)/)[1]:"255, 255, 255"),{isGreater:s}=DM({mobile:768,desktop:1024});return(o,a)=>(tt(),St("div",bC,[$e("div",EC,[Ke(tS),Ke(SC,{class:"mt-24"}),Ge(s)("mobile")?(tt(),wn(ES,{key:0},{default:Zr(()=>[Ke(Ge(t),{class:"mt-24"}),Ke(Ge(e),{class:"section -mt-48"})]),_:1})):Iv("",!0),Ke(yS,{class:"star-background"})])]))}}),wC=cn(TC,[["__scopeId","data-v-d4537816"]]),AC={__name:"nuxt-error-page",props:{error:Object},setup(n){const t=n.error;t.stack&&t.stack.split(`
`).splice(1).map(f=>({text:f.replace("webpack:/","").replace(".vue",".js").trim(),internal:f.includes("node_modules")&&!f.includes(".cache")||f.includes("internal")||f.includes("new Promise")})).map(f=>`<span class="stack${f.internal?" internal":""}">${f.text}</span>`).join(`
`);const i=Number(t.statusCode||500),r=i===404,s=t.statusMessage??(r?"Page Not Found":"Internal Server Error"),o=t.message||t.toString(),a=void 0,u=r?sa(()=>_a(()=>import("./CgJZ4fAt.js"),__vite__mapDeps([4,5]),import.meta.url)):sa(()=>_a(()=>import("./D3V5mLAv.js"),__vite__mapDeps([6,7]),import.meta.url));return(f,h)=>(tt(),wn(Ge(u),t_(sm({statusCode:Ge(i),statusMessage:Ge(s),description:Ge(o),stack:Ge(a)})),null,16))}},RC={key:0},jd={__name:"nuxt-root",setup(n){const e=()=>null,t=wt(),i=t.deferHydration();if(t.isHydrating){const l=t.hooks.hookOnce("app:error",i);cr().beforeEach(l)}const r=!1;ku(Pm,Ha()),t.hooks.callHookWith(l=>l.map(c=>c()),"vue:setup");const s=qu(),o=!1;Cp((l,c,u)=>{if(t.hooks.callHook("vue:error",l,c,u).catch(f=>console.error("[nuxt] Error in `vue:error` hook",f)),kx(l)&&(l.fatal||l.unhandled))return t.runWithContext(()=>Ox(l)),!1});const a=!1;return(l,c)=>(tt(),wn(Ev,{onResolve:Ge(i)},{default:Zr(()=>[Ge(o)?(tt(),St("div",RC)):Ge(s)?(tt(),wn(Ge(AC),{key:1,error:Ge(s)},null,8,["error"])):Ge(a)?(tt(),wn(Ge(e),{key:2,context:Ge(a)},null,8,["context"])):Ge(r)?(tt(),wn(K_(Ge(r)),{key:3})):(tt(),wn(Ge(wC),{key:4}))]),_:1},8,["onResolve"]))}};let qd;{let n;qd=async function(){var o,a;if(n)return n;const i=!!(((o=window.__NUXT__)==null?void 0:o.serverRendered)??((a=document.getElementById("__NUXT_DATA__"))==null?void 0:a.dataset.ssr)==="true")?h0(jd):f0(jd),r=xx({vueApp:i});async function s(l){await r.callHook("app:error",l),r.payload.error=r.payload.error||Yu(l)}i.config.errorHandler=s,r.hook("app:suspense:resolve",()=>{i.config.errorHandler===s&&(i.config.errorHandler=void 0)});try{await Sx(r,MM)}catch(l){s(l)}try{await r.hooks.callHook("app:created",i),await r.hooks.callHook("app:beforeMount",i),i.mount(gx),await r.hooks.callHook("app:mounted",i),await Da()}catch(l){s(l)}return i},n=qd().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{YC as $,Ke as A,Zr as B,Ys as C,cC as D,Ge as E,hi as F,vn as G,OC as H,FC as I,He as J,Ki as K,Ye as L,gn as M,it as N,Zs as O,Jt as P,Fo as Q,Js as R,li as S,NC as T,bE as U,H as V,hr as W,QC as X,$C as Y,as as Z,cn as _,wt as a,vf as a$,KC as a0,ZC as a1,vg as a2,pn as a3,WC as a4,Je as a5,DE as a6,ad as a7,vt as a8,jC as a9,vl as aA,fo as aB,tr as aC,Hc as aD,va as aE,Li as aF,Eg as aG,Gt as aH,Ta as aI,Ea as aJ,qa as aK,Fi as aL,fi as aM,ja as aN,nP as aO,tP as aP,oi as aQ,XC as aR,YE as aS,qE as aT,er as aU,iS as aV,UC as aW,hs as aX,RE as aY,iC as aZ,qC as a_,eP as aa,kC as ab,kn as ac,nr as ad,kc as ae,ln as af,OE as ag,Oi as ah,FE as ai,BE as aj,ei as ak,ft as al,HC as am,zC as an,Ag as ao,VC as ap,GC as aq,BC as ar,Lg as as,wg as at,_d as au,PE as av,du as aw,et as ax,si as ay,Tb as az,tf as b,JC as b0,$a as b1,K1 as b2,$s as b3,Iv as b4,PC as b5,Na as b6,wn as b7,Ga as b8,At as b9,Ou as ba,WM as bb,Un as bc,DC as bd,$o as be,hC as bf,Sh as c,Ft as d,qs as e,LC as f,CC as g,cc as h,Vt as i,mr as j,Fx as k,ka as l,Nx as m,IC as n,yn as o,pm as p,lr as q,Xe as r,fs as s,Qu as t,cr as u,tt as v,Vs as w,St as x,$e as y,ii as z};
