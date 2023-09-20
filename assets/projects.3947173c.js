var Y=Object.defineProperty;var B=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var W=(t,o,e)=>o in t?Y(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,N=(t,o)=>{for(var e in o||(o={}))Z.call(o,e)&&W(t,e,o[e]);if(B)for(var e of B(o))ee.call(o,e)&&W(t,e,o[e]);return t};import{_ as v,d as f,b as l,e as u,i as s,F as G,v as V,t as y,a as I,B as p,r as w,o as A,C as H,D as te,E as T,k as oe,G as se,n as ae,p as q,m as O,s as F,q as D}from"./index.d6df57b2.js";import{S as ne,V as re,C as R,am as ie,ak as ce,aq as le,a7 as ue,aj as de,ao as _e,P as me}from"./three.module.5e5b3136.js";import{u as pe}from"./use-fade-intersection.85c281f9.js";import{M as ve}from"./m-heading.a9417f66.js";var fe="/assets/engine.319a40ed.png",ge="/assets/checkers.2cbf389f.png",he="/assets/tests.7559a3d5.png",be="/assets/napasproject.cd41273d.png",ke="/assets/vue-nodes.b949c856.png";const ye=[{name:"BronzeEngine",description:"WebGL game engine",link:{text:"Check repository",url:"https://github.com/m0ksem/Bronze-Engine#-bronze-engine-"},image:fe},{name:"GameCheckersBot",description:"Telegram bot",link:{text:"Check repository",url:"https://github.com/m0ksem/GameCheckersBot"},image:ge},{name:"ImproveTests",description:"Android app",link:{text:"Last release",url:"https://github.com/m0ksem/Tests/releases"},image:he},{name:"NapasProject",description:"Website",link:{text:"Visit",url:"https://napas-project.com/"},image:be},{name:"VueNodes",description:"Library",link:{text:"Check repository",url:"https://github.com/m0ksem/vue-nodes"},image:ke}];const we={class:"libs"},xe=["href"],Ce=f({setup(t){const o=[{href:"https://github.com/m0ksem/unplugin-object-3d",title:"unplugin-3d-object"},{href:"https://github.com/m0ksem/vue-glsl",title:"vue-glsl"},{href:"https://github.com/m0ksem/vue-custom-scrollbar/tree/master/packages/vue-custom-scrollbar",title:"vue-custom-scrollbar"},{href:"https://github.com/m0ksem/vscode-vue3-snippets",title:"vscode-vue3-snippets"},{href:"https://github.com/m0ksem/clocks",title:"clocks"},{href:"https://github.com/m0ksem/google-calendar",title:"google-calendar"},{href:"https://github.com/m0ksem/telegram-bot-template",title:"telegram-bot-template"}];return(e,a)=>(l(),u("div",we,[s("ul",null,[(l(),u(G,null,V(o,({href:r,title:i})=>s("li",{key:i},[s("a",{href:r,target:"_blank"},y(i),9,xe)])),64))])]))}});var $e=v(Ce,[["__scopeId","data-v-a153ff18"]]);const Se={class:"projects-list container"},Ie=["href","title"],Pe={class:"project"},je={class:"project__image"},Ee=["src"],ze={class:"project__text"},Me={class:"project__link-text"},Le={class:"project-wrapper"},Be={class:"project"},We=f({setup(t){return(o,e)=>(l(),u("div",Se,[(l(!0),u(G,null,V(I(ye),a=>(l(),u("a",{class:"project-wrapper",key:a.name,href:a.link.url,title:a.link.text,target:"_blank"},[s("div",Pe,[s("div",je,[s("img",{src:a.image},null,8,Ee)]),s("div",ze,[s("h3",null,y(a.name),1),s("p",null,y(a.description),1),s("div",Me,[s("span",null,y(a.link.text),1)])])])],8,Ie))),128)),s("div",Le,[s("div",Be,[p($e)])])]))}});var Ne=v(We,[["__scopeId","data-v-27a0802c"]]);const Fe=async(t,o)=>{const e={Authorization:`bearer ${t}`},a={query:`query {
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
`,Ae=(t,o)=>{var e,a,r;return new ne({uniforms:{time:{value:1},color:{value:new re().fromArray(new R(t).toArray())},fogColor:{value:(e=o.fog)==null?void 0:e.color},fogNear:{value:(a=o.fog)==null?void 0:a.near},fogFar:{value:(r=o.fog)==null?void 0:r.far}},vertexShader:Ge,fragmentShader:Ve,fog:!0,transparent:!0})},He=()=>{const{proxy:t}=te(),o=w();return A(()=>{o.value=t==null?void 0:t.$el}),H(()=>{o.value=void 0}),o},U="rgb(255, 255, 255)",Te=t=>t==="rgba(0, 0, 0, 0)",P=t=>{if(!t)return U;if(t.nodeType!==Node.ELEMENT_NODE)return P(t.parentElement);const o=window.getComputedStyle(t).backgroundColor;return Te(o)?P(t.parentElement):o},qe=(t=He())=>{const o=w(U);return T(t,e=>{o.value=P(e)},{immediate:!0}),o};const Oe={class:"contributions"},De={class:"canvas-container"},Re={href:"https://github.com/m0ksem",target:"_blank",style:{color:"var(--m-rgb)"}},Ue=f({setup(t){const o=ae(),e=w(),a=w(null);let r=null,i=null;const Q=n=>n>20?"#fff":n>18?"#f8f9fa":n>15?"#e9ecef":n>12?"#dee2e6":n>10?"#ced4da":n>7?"#adb5bd":n>5?"#6c757d":n>2?"#495057":n>0?"#343a40":"#f8f9fa";pe(e);const K=async()=>{if(!e.value)return null;const n=await Fe("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","m0ksem");e.value.width=e.value.offsetWidth,e.value.height=e.value.offsetHeight;const c=new ce;i=new le({canvas:e.value,antialias:!0,alpha:!0}),i.setSize(e.value.offsetWidth,e.value.offsetHeight);const g=.5,h=1,C=n.length*h+n.length*g,M=h*7+2*g,m=new ue,X=new de,d=Ae("#fff",c),$=new _e(X,d,365);return c.add($),n.forEach((b,_)=>{b.contributionDays.forEach((k,S)=>{const L=k.contributionCount;m.scale.y=Math.sqrt(Math.max(L,0)/2)*5,m.position.set((h+g)*_-C/2,m.scale.y/2,(h+g)*S),m.updateMatrix(),$.setMatrixAt(_*7+S,m.matrix),$.setColorAt(_*7+S,new R(Q(L)))})}),r=new me(30,e.value.offsetWidth/e.value.offsetHeight,.1,1e3),r.position.set(0,C/2.2-M,C/1.7),r.lookAt(0,0,-M),se(e,()=>{var b,_,k;d.uniforms.time.value=o.value,d.uniforms.fogColor.value=(b=c.fog)==null?void 0:b.color,d.uniforms.fogNear.value=(_=c.fog)==null?void 0:_.near,d.uniforms.fogFar.value=(k=c.fog)==null?void 0:k.color,d.needsUpdate=!0,i==null||i.render(c,r)}),c};let x={x:0,y:0,z:0};const j=()=>{const n=e.value.getBoundingClientRect(),c=Math.max(0,n.top+n.height-window.innerHeight);r.position.z=x.z+c/50,r.position.y=x.y+c/50},E=()=>{!r||!e.value||(r.aspect=e.value.offsetWidth/e.value.offsetHeight,r.updateProjectionMatrix(),i==null||i.setSize(e.value.offsetWidth,e.value.offsetHeight))};A(async()=>{a.value=await K(),x=N({},r.position),window.addEventListener("scroll",j),window.addEventListener("resize",E)}),H(()=>{window.removeEventListener("scroll",j),window.removeEventListener("resize",E)});const z=qe();return T([z,a],()=>{!a.value||(a.value.fog=new ie(z.value,30,50))}),(n,c)=>(l(),u("div",Oe,[s("div",De,[s("canvas",{ref_key:"canvas",ref:e},null,512)]),s("a",Re,[oe(n.$slots,"default",{},void 0,!0)])]))}});var Je=v(Ue,[["__scopeId","data-v-1ac4a62d"]]);const J=t=>(q("data-v-04d4529c"),t=t(),O(),t),Qe={class:"horizon"},Ke={class:"horizon__svg-wrapper"},Xe={width:"800",height:"600",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 800 600"},Ye={spreadMethod:"pad",id:"m-horizon-fill"},Ze=J(()=>s("stop",{offset:"0.85","stop-color":"var(--m-background)"},null,-1)),et=["stop-color"],tt=J(()=>s("g",null,[s("ellipse",{style:{"vector-effect":"non-scaling-stroke"},transform:"translate(39.7849, -2.15054) translate(1) translate(1) translate(5.37634) translate(562.532) translate(-5.47961, -163.703) translate(-20.5485, 27.3981) translate(660, 136) scale(1.21388, 1) translate(-660, -136) translate(138, 136) scale(1.26637, 1) translate(-138, -136) translate(138, 136) scale(1, 1.77909) translate(-138, -136) translate(660, 136) scale(2.50871, 4.55471) translate(-660, -136) translate(139, 136.5) scale(1, 0.450193) translate(-139, -136.5)",ry:"100",rx:"260",id:"svg_1",cy:"237",cx:"400",fill:"url(#m-horizon-fill)"})],-1)),ot=f({props:{color:{default:"var(--m-rgb)"}},setup(t){return(o,e)=>(l(),u("div",Qe,[s("div",Ke,[(l(),u("svg",Xe,[s("defs",null,[s("radialGradient",Ye,[Ze,s("stop",{offset:"1","stop-color":t.color},null,8,et)])]),tt]))])]))}});var st=v(ot,[["__scopeId","data-v-04d4529c"]]);const at=t=>(q("data-v-78c518dc"),t=t(),O(),t),nt={class:"projects-section"},rt=at(()=>s("div",{class:"projects-section__planet"},null,-1)),it=D("Portfolio"),ct=D("View Github activity"),lt=f({setup(t){return(o,e)=>(l(),u("div",nt,[rt,p(ve,{class:"text-8xl -mb-16 text-center font-bold"},{default:F(()=>[it]),_:1}),p(I(Ne),{class:"container max-w-6xl project-list"}),p(st),p(I(Je),null,{default:F(()=>[ct]),_:1})]))}});var vt=v(lt,[["__scopeId","data-v-78c518dc"]]);export{vt as default};
