var J=Object.defineProperty;var B=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var W=(t,o,e)=>o in t?J(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,N=(t,o)=>{for(var e in o||(o={}))Q.call(o,e)&&W(t,e,o[e]);if(B)for(var e of B(o))K.call(o,e)&&W(t,e,o[e]);return t};import{_ as v,d as f,b as l,e as u,i as s,F as G,v as V,t as y,a as P,B as m,r as S,C as A,D as X,o as Y,E as Z,k as ee,G as te,n as oe,p as se,m as ae,s as F,M as re,q as H}from"./index.4e0f30d8.js";import{S as ne,V as ie,C as T,am as ce,ak as le,aq as ue,a7 as de,aj as pe,ao as _e,P as me}from"./three.module.5e5b3136.js";import{u as ve}from"./use-fade-intersection.0e1d4d5d.js";var fe="/new-portfolio/assets/engine.319a40ed.png",ge="/new-portfolio/assets/checkers.2cbf389f.png",he="/new-portfolio/assets/tests.7559a3d5.png",be="/new-portfolio/assets/napasproject.cd41273d.png",ke="/new-portfolio/assets/vue-nodes.b949c856.png";const ye=[{name:"BronzeEngine",description:"WebGL game engine",link:{text:"Check repository",url:"https://github.com/m0ksem/Bronze-Engine#-bronze-engine-"},image:fe},{name:"GameCheckersBot",description:"Telegram bot",link:{text:"Check repository",url:"https://github.com/m0ksem/GameCheckersBot"},image:ge},{name:"ImproveTests",description:"Android app",link:{text:"Last release",url:"https://github.com/m0ksem/Tests/releases"},image:he},{name:"NapasProject",description:"Website",link:{text:"Visit",url:"https://napas-project.com/"},image:be},{name:"VueNodes",description:"Library",link:{text:"Check repository",url:"https://github.com/m0ksem/vue-nodes"},image:ke}];const we={class:"libs"},xe=["href"],Ce=f({setup(t){const o=[{href:"https://github.com/m0ksem/unplugin-object-3d",title:"unplugin-3d-object"},{href:"https://github.com/m0ksem/vue-glsl",title:"vue-glsl"},{href:"https://github.com/m0ksem/vue-custom-scrollbar/tree/master/packages/vue-custom-scrollbar",title:"vue-custom-scrollbar"},{href:"https://github.com/m0ksem/vscode-vue3-snippets",title:"vscode-vue3-snippets"},{href:"https://github.com/m0ksem/clocks",title:"clocks"},{href:"https://github.com/m0ksem/google-calendar",title:"google-calendar"},{href:"https://github.com/m0ksem/telegram-bot-template",title:"telegram-bot-template"}];return(e,a)=>(l(),u("div",we,[s("ul",null,[(l(),u(G,null,V(o,({href:n,title:i})=>s("li",{key:i},[s("a",{href:n,target:"_blank"},y(i),9,xe)])),64))])]))}});var $e=v(Ce,[["__scopeId","data-v-a153ff18"]]);const Pe={class:"projects-list container"},Se=["href","title"],Ee={class:"project"},je={class:"project__image"},ze=["src"],Ie={class:"project__text"},Me={class:"project__link-text"},Le={class:"project-wrapper"},Be={class:"project"},We=f({setup(t){return(o,e)=>(l(),u("div",Pe,[(l(!0),u(G,null,V(P(ye),a=>(l(),u("a",{class:"project-wrapper",key:a.name,href:a.link.url,title:a.link.text,target:"_blank"},[s("div",Ee,[s("div",je,[s("img",{src:a.image},null,8,ze)]),s("div",Ie,[s("h3",null,y(a.name),1),s("p",null,y(a.description),1),s("div",Me,[s("span",null,y(a.link.text),1)])])])],8,Se))),128)),s("div",Le,[s("div",Be,[m($e)])])]))}});var Ne=v(We,[["__scopeId","data-v-52e24250"]]);const Fe=async(t,o)=>{const e={Authorization:`bearer ${t}`},a={query:`query {
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
`,Ve=`precision mediump float;
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
`,Ae=(t,o)=>{var e,a,n;return new ne({uniforms:{time:{value:1},color:{value:new ie().fromArray(new T(t).toArray())},fogColor:{value:(e=o.fog)==null?void 0:e.color},fogNear:{value:(a=o.fog)==null?void 0:a.near},fogFar:{value:(n=o.fog)==null?void 0:n.far}},vertexShader:Ge,fragmentShader:Ve,fog:!0,transparent:!0})},q="rgb(255, 255, 255)",He=t=>t==="rgba(0, 0, 0, 0)",E=t=>{if(!t)return q;if(t.nodeType!==Node.ELEMENT_NODE)return E(t.parentElement);const o=window.getComputedStyle(t).backgroundColor;return He(o)?E(t.parentElement):o},Te=(t=X())=>{const o=S(q);return A(t,e=>{o.value=E(e)},{immediate:!0}),o};const qe={class:"contributions"},Oe={class:"canvas-container"},De={href:"https://github.com/m0ksem",target:"_blank",style:{color:"var(--m-rgb)"}},Re=f({setup(t){const o=oe(),e=S(),a=S(null);let n=null,i=null;const D=r=>r>20?"#fff":r>18?"#f8f9fa":r>15?"#e9ecef":r>12?"#dee2e6":r>10?"#ced4da":r>7?"#adb5bd":r>5?"#6c757d":r>2?"#495057":r>0?"#343a40":"#f8f9fa";ve(e);const R=async()=>{if(!e.value)return null;const r=await Fe("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","m0ksem");e.value.width=e.value.offsetWidth,e.value.height=e.value.offsetHeight;const c=new le;i=new ue({canvas:e.value,antialias:!0,alpha:!0}),i.setSize(e.value.offsetWidth,e.value.offsetHeight);const g=.5,h=1,x=r.length*h+r.length*g,M=h*7+2*g,_=new de,U=new pe,d=Ae("#fff",c),C=new _e(U,d,365);return c.add(C),r.forEach((b,p)=>{b.contributionDays.forEach((k,$)=>{const L=k.contributionCount;_.scale.y=Math.sqrt(Math.max(L,0)/2)*5,_.position.set((h+g)*p-x/2,_.scale.y/2,(h+g)*$),_.updateMatrix(),C.setMatrixAt(p*7+$,_.matrix),C.setColorAt(p*7+$,new T(D(L)))})}),n=new me(30,e.value.offsetWidth/e.value.offsetHeight,.1,1e3),n.position.set(0,x/2.2-M,x/1.7),n.lookAt(0,0,-M),te(e,()=>{var b,p,k;d.uniforms.time.value=o.value,d.uniforms.fogColor.value=(b=c.fog)==null?void 0:b.color,d.uniforms.fogNear.value=(p=c.fog)==null?void 0:p.near,d.uniforms.fogFar.value=(k=c.fog)==null?void 0:k.color,d.needsUpdate=!0,i==null||i.render(c,n)}),c};let w={x:0,y:0,z:0};const j=()=>{const r=e.value.getBoundingClientRect(),c=Math.max(0,r.top+r.height-window.innerHeight);n.position.z=w.z+c/50,n.position.y=w.y+c/50},z=()=>{!n||!e.value||(n.aspect=e.value.offsetWidth/e.value.offsetHeight,n.updateProjectionMatrix(),i==null||i.setSize(e.value.offsetWidth,e.value.offsetHeight))};Y(async()=>{a.value=await R(),w=N({},n.position),window.addEventListener("scroll",j),window.addEventListener("resize",z)}),Z(()=>{window.removeEventListener("scroll",j),window.removeEventListener("resize",z)});const I=Te();return A([I,a],()=>{!a.value||(a.value.fog=new ce(I.value,30,50))}),(r,c)=>(l(),u("div",qe,[s("div",Oe,[s("canvas",{ref_key:"canvas",ref:e},null,512)]),s("a",De,[ee(r.$slots,"default",{},void 0,!0)])]))}});var Ue=v(Re,[["__scopeId","data-v-1ac4a62d"]]);const O=t=>(se("data-v-04d4529c"),t=t(),ae(),t),Je={class:"horizon"},Qe={class:"horizon__svg-wrapper"},Ke={width:"800",height:"600",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 800 600"},Xe={spreadMethod:"pad",id:"m-horizon-fill"},Ye=O(()=>s("stop",{offset:"0.85","stop-color":"var(--m-background)"},null,-1)),Ze=["stop-color"],et=O(()=>s("g",null,[s("ellipse",{style:{"vector-effect":"non-scaling-stroke"},transform:"translate(39.7849, -2.15054) translate(1) translate(1) translate(5.37634) translate(562.532) translate(-5.47961, -163.703) translate(-20.5485, 27.3981) translate(660, 136) scale(1.21388, 1) translate(-660, -136) translate(138, 136) scale(1.26637, 1) translate(-138, -136) translate(138, 136) scale(1, 1.77909) translate(-138, -136) translate(660, 136) scale(2.50871, 4.55471) translate(-660, -136) translate(139, 136.5) scale(1, 0.450193) translate(-139, -136.5)",ry:"100",rx:"260",id:"svg_1",cy:"237",cx:"400",fill:"url(#m-horizon-fill)"})],-1)),tt=f({props:{color:{default:"var(--m-rgb)"}},setup(t){return(o,e)=>(l(),u("div",Je,[s("div",Qe,[(l(),u("svg",Ke,[s("defs",null,[s("radialGradient",Xe,[Ye,s("stop",{offset:"1","stop-color":t.color},null,8,Ze)])]),et]))])]))}});var ot=v(tt,[["__scopeId","data-v-04d4529c"]]);const st={class:"projects-section"},at=H("Portfolio"),rt=H("View Github activity"),nt=f({setup(t){return(o,e)=>(l(),u("div",st,[m(re,{class:"text-8xl -mb-16 text-center font-bold"},{default:F(()=>[at]),_:1}),m(P(Ne),{class:"container max-w-6xl project-list"}),m(ot),m(P(Ue),null,{default:F(()=>[rt]),_:1})]))}});var dt=v(nt,[["__scopeId","data-v-2e6ac748"]]);export{dt as default};
