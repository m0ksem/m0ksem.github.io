var J=Object.defineProperty;var W=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var B=(t,o,e)=>o in t?J(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,N=(t,o)=>{for(var e in o||(o={}))Q.call(o,e)&&B(t,e,o[e]);if(W)for(var e of W(o))K.call(o,e)&&B(t,e,o[e]);return t};import{_ as v,d as f,b as l,e as u,i as s,F,x as G,t as y,a as I,C as m,r as P,E as H,G as X,o as Y,H as Z,k as ee,I as te,q as oe,p as V,m as A,v as se,s as ae}from"./index.c0803077.js";import{S as re,V as ne,C as T,ar as ie,ap as ce,au as le,O as ue,ao as de,I as pe,P as _e}from"./three.module.18e2211f.js";import{u as me}from"./use-fade-intersection.4fc563d1.js";import{M as ve}from"./m-heading.2b8f82e0.js";var fe="/assets/engine.319a40ed.png",ge="/assets/checkers.2cbf389f.png",he="/assets/tests.7559a3d5.png",be="/assets/napasproject.cd41273d.png",ke="/assets/vue-nodes.b949c856.png";const ye=[{name:"BronzeEngine",description:"WebGL game engine",link:{text:"Check repository",url:"https://github.com/m0ksem/Bronze-Engine#-bronze-engine-"},image:fe},{name:"GameCheckersBot",description:"Telegram bot",link:{text:"Check repository",url:"https://github.com/m0ksem/GameCheckersBot"},image:ge},{name:"ImproveTests",description:"Android app",link:{text:"Last release",url:"https://github.com/m0ksem/Tests/releases"},image:he},{name:"NapasProject",description:"Website",link:{text:"Visit",url:"https://napas-project.com/"},image:be},{name:"VueNodes",description:"Library",link:{text:"Check repository",url:"https://github.com/m0ksem/vue-nodes"},image:ke}];const xe={class:"libs"},we=["href"],Ce=f({setup(t){const o=[{href:"https://github.com/m0ksem/unplugin-object-3d",title:"unplugin-3d-object"},{href:"https://github.com/m0ksem/vue-glsl",title:"vue-glsl"},{href:"https://github.com/m0ksem/vue-custom-scrollbar/tree/master/packages/vue-custom-scrollbar",title:"vue-custom-scrollbar"},{href:"https://github.com/m0ksem/vscode-vue3-snippets",title:"vscode-vue3-snippets"},{href:"https://github.com/m0ksem/clocks",title:"clocks"},{href:"https://github.com/m0ksem/google-calendar",title:"google-calendar"},{href:"https://github.com/m0ksem/telegram-bot-template",title:"telegram-bot-template"}];return(e,a)=>(l(),u("div",xe,[s("ul",null,[(l(),u(F,null,G(o,({href:n,title:i})=>s("li",{key:i},[s("a",{href:n,target:"_blank"},y(i),9,we)])),64))])]))}});var $e=v(Ce,[["__scopeId","data-v-a153ff18"]]);const Ie={class:"projects-list container"},Pe=["href","title"],Se={class:"project"},Ee={class:"project__image"},je=["src"],ze={class:"project__text"},Me={class:"project__link-text"},Le={class:"project-wrapper"},We={class:"project"},Be=f({setup(t){return(o,e)=>(l(),u("div",Ie,[(l(!0),u(F,null,G(I(ye),a=>(l(),u("a",{class:"project-wrapper",key:a.name,href:a.link.url,title:a.link.text,target:"_blank"},[s("div",Se,[s("div",Ee,[s("img",{src:a.image},null,8,je)]),s("div",ze,[s("h3",null,y(a.name),1),s("p",null,y(a.description),1),s("div",Me,[s("span",null,y(a.link.text),1)])])])],8,Pe))),128)),s("div",Le,[s("div",We,[m($e)])])]))}});var Ne=v(Be,[["__scopeId","data-v-c5b9a034"]]);const Fe=async(t,o)=>{const e={Authorization:`bearer ${t}`},a={query:`query {
          user(login: "${o}") {
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
        }`};return(await(await fetch("https://api.github.com/graphql",{method:"POST",body:JSON.stringify(a),headers:e})).json()).data.user.contributionsCollection.contributionCalendar.weeks},Ge=`precision mediump float;
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
`,He=`precision mediump float;
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
`,Ve=(t,o)=>{var e,a,n;return new re({uniforms:{time:{value:1},color:{value:new ne().fromArray(new T(t).toArray())},fogColor:{value:(e=o.fog)==null?void 0:e.color},fogNear:{value:(a=o.fog)==null?void 0:a.near},fogFar:{value:(n=o.fog)==null?void 0:n.far}},vertexShader:Ge,fragmentShader:He,fog:!0,transparent:!0})},O="rgb(255, 255, 255)",Ae=t=>t==="rgba(0, 0, 0, 0)",S=t=>{if(!t)return O;if(t.nodeType!==Node.ELEMENT_NODE)return S(t.parentElement);const o=window.getComputedStyle(t).backgroundColor;return Ae(o)?S(t.parentElement):o},Te=(t=X())=>{const o=P(O);return H(t,e=>{o.value=S(e)},{immediate:!0}),o};const Oe={class:"contributions"},qe={class:"canvas-container"},De={href:"https://github.com/m0ksem",target:"_blank",style:{color:"var(--m-rgb)"}},Re=f({setup(t){const o=oe(),e=P(),a=P(null);let n=null,i=null;const D=r=>r>20?"#fff":r>18?"#f8f9fa":r>15?"#e9ecef":r>12?"#dee2e6":r>10?"#ced4da":r>7?"#adb5bd":r>5?"#6c757d":r>2?"#495057":r>0?"#343a40":"#f8f9fa";me(e);const R=async()=>{if(!e.value)return null;const r=await Fe("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","m0ksem");e.value.width=e.value.offsetWidth,e.value.height=e.value.offsetHeight;const c=new ce;i=new le({canvas:e.value,antialias:!0,alpha:!0}),i.setSize(e.value.offsetWidth,e.value.offsetHeight);const g=.5,h=1,w=r.length*h+r.length*g,M=h*7+2*g,_=new ue,U=new de,d=Ve("#fff",c),C=new pe(U,d,365);return c.add(C),r.forEach((b,p)=>{b.contributionDays.forEach((k,$)=>{const L=k.contributionCount;_.scale.y=Math.sqrt(Math.max(L,0)/2)*5,_.position.set((h+g)*p-w/2,_.scale.y/2,(h+g)*$),_.updateMatrix(),C.setMatrixAt(p*7+$,_.matrix),C.setColorAt(p*7+$,new T(D(L)))})}),n=new _e(30,e.value.offsetWidth/e.value.offsetHeight,.1,1e3),n.position.set(0,w/2.2-M,w/1.7),n.lookAt(0,0,-M),te(e,()=>{var b,p,k;d.uniforms.time.value=o.value,d.uniforms.fogColor.value=(b=c.fog)==null?void 0:b.color,d.uniforms.fogNear.value=(p=c.fog)==null?void 0:p.near,d.uniforms.fogFar.value=(k=c.fog)==null?void 0:k.color,d.needsUpdate=!0,i==null||i.render(c,n)}),c};let x={x:0,y:0,z:0};const E=()=>{const r=e.value.getBoundingClientRect(),c=Math.max(0,r.top+r.height-window.innerHeight);n.position.z=x.z+c/50,n.position.y=x.y+c/50},j=()=>{!n||!e.value||(n.aspect=e.value.offsetWidth/e.value.offsetHeight,n.updateProjectionMatrix(),i==null||i.setSize(e.value.offsetWidth,e.value.offsetHeight))};Y(async()=>{a.value=await R(),x=N({},n.position),window.addEventListener("scroll",E),window.addEventListener("resize",j)}),Z(()=>{window.removeEventListener("scroll",E),window.removeEventListener("resize",j)});const z=Te();return H([z,a],()=>{!a.value||(a.value.fog=new ie(z.value,30,50))}),(r,c)=>(l(),u("div",Oe,[s("div",qe,[s("canvas",{ref_key:"canvas",ref:e},null,512)]),s("a",De,[ee(r.$slots,"default",{},void 0,!0)])]))}});var Ue=v(Re,[["__scopeId","data-v-1ac4a62d"]]);const q=t=>(V("data-v-04d4529c"),t=t(),A(),t),Je={class:"horizon"},Qe={class:"horizon__svg-wrapper"},Ke={width:"800",height:"600",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 800 600"},Xe={spreadMethod:"pad",id:"m-horizon-fill"},Ye=q(()=>s("stop",{offset:"0.85","stop-color":"var(--m-background)"},null,-1)),Ze=["stop-color"],et=q(()=>s("g",null,[s("ellipse",{style:{"vector-effect":"non-scaling-stroke"},transform:"translate(39.7849, -2.15054) translate(1) translate(1) translate(5.37634) translate(562.532) translate(-5.47961, -163.703) translate(-20.5485, 27.3981) translate(660, 136) scale(1.21388, 1) translate(-660, -136) translate(138, 136) scale(1.26637, 1) translate(-138, -136) translate(138, 136) scale(1, 1.77909) translate(-138, -136) translate(660, 136) scale(2.50871, 4.55471) translate(-660, -136) translate(139, 136.5) scale(1, 0.450193) translate(-139, -136.5)",ry:"100",rx:"260",id:"svg_1",cy:"237",cx:"400",fill:"url(#m-horizon-fill)"})],-1)),tt=f({props:{color:{default:"var(--m-rgb)"}},setup(t){return(o,e)=>(l(),u("div",Je,[s("div",Qe,[(l(),u("svg",Ke,[s("defs",null,[s("radialGradient",Xe,[Ye,s("stop",{offset:"1","stop-color":t.color},null,8,Ze)])]),et]))])]))}});var ot=v(tt,[["__scopeId","data-v-04d4529c"]]);const st=t=>(V("data-v-6f8de804"),t=t(),A(),t),at={class:"projects-section"},rt=st(()=>s("div",{class:"projects-section__planet"},null,-1)),nt=ae("View Github Profile"),it=f({setup(t){return(o,e)=>(l(),u("div",at,[rt,m(ve,{class:"text-8xl -mb-16 text-center font-bold",text:"Portfolio"}),m(I(Ne),{class:"container max-w-6xl project-list"}),m(ot),m(I(Ue),null,{default:se(()=>[nt]),_:1})]))}});var _t=v(it,[["__scopeId","data-v-6f8de804"]]);export{_t as default};
