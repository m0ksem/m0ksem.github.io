var K=Object.defineProperty;var B=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var F=(t,o,e)=>o in t?K(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,N=(t,o)=>{for(var e in o||(o={}))X.call(o,e)&&F(t,e,o[e]);if(B)for(var e of B(o))Y.call(o,e)&&F(t,e,o[e]);return t};import{_ as v,d as f,b as l,e as u,j as s,F as A,y as H,t as k,a as E,l as m,r as I,E as T,G as Z,i as ee,o as te,H as oe,m as se,s as ae,p as ne,n as re,x as G,M as ie,q as V}from"./index.c038f49d.js";import{ae as ce,a6 as le,C as O,ai as ue,ag as de,am as pe,a0 as _e,af as me,ak as ve,O as fe}from"./three.module.3b3e8318.js";var ge="/new-portfolio/assets/engine.319a40ed.png",he="/new-portfolio/assets/checkers.2cbf389f.png",be="/new-portfolio/assets/tests.7559a3d5.png",ye="/new-portfolio/assets/napasproject.cd41273d.png",ke="/new-portfolio/assets/vue-nodes.b949c856.png";const we=[{name:"BronzeEngine",description:"WebGL game engine",link:{text:"Check repository",url:"https://github.com/m0ksem/Bronze-Engine#-bronze-engine-"},image:ge},{name:"GameCheckersBot",description:"Telegram bot",link:{text:"Check repository",url:"https://github.com/m0ksem/GameCheckersBot"},image:he},{name:"ImproveTests",description:"Android app",link:{text:"Last release",url:"https://github.com/m0ksem/Tests/releases"},image:be},{name:"NapasProject",description:"Website",link:{text:"Visit",url:"https://napas-project.com/"},image:ye},{name:"VueNodes",description:"Library",link:{text:"Check repository",url:"https://github.com/m0ksem/vue-nodes"},image:ke}];const xe={class:"libs"},Ce=["href"],$e=f({setup(t){const o=[{href:"https://github.com/m0ksem/unplugin-object-3d",title:"unplugin-3d-object"},{href:"https://github.com/m0ksem/vue-glsl",title:"vue-glsl"},{href:"https://github.com/m0ksem/vue-custom-scrollbar/tree/master/packages/vue-custom-scrollbar",title:"vue-custom-scrollbar"},{href:"https://github.com/m0ksem/vscode-vue3-snippets",title:"vscode-vue3-snippets"},{href:"https://github.com/m0ksem/clocks",title:"clocks"},{href:"https://github.com/m0ksem/google-calendar",title:"google-calendar"},{href:"https://github.com/m0ksem/telegram-bot-template",title:"telegram-bot-template"}];return(e,a)=>(l(),u("div",xe,[s("ul",null,[(l(),u(A,null,H(o,({href:r,title:i})=>s("li",{key:i},[s("a",{href:r,target:"_blank"},k(i),9,Ce)])),64))])]))}});var Ee=v($e,[["__scopeId","data-v-a153ff18"]]);const Ie={class:"projects-list container"},Pe=["href","title"],Se={class:"project"},je={class:"project__image"},ze=["src"],Me={class:"project__text"},Le={class:"project__link-text"},We={class:"project-wrapper"},Be={class:"project"},Fe=f({setup(t){return(o,e)=>(l(),u("div",Ie,[(l(!0),u(A,null,H(E(we),a=>(l(),u("a",{class:"project-wrapper",key:a.name,href:a.link.url,title:a.link.text,target:"_blank"},[s("div",Se,[s("div",je,[s("img",{src:a.image},null,8,ze)]),s("div",Me,[s("h3",null,k(a.name),1),s("p",null,k(a.description),1),s("div",Le,[s("span",null,k(a.link.text),1)])])])],8,Pe))),128)),s("div",We,[s("div",Be,[m(Ee)])])]))}});var Ne=v(Fe,[["__scopeId","data-v-c315ec1a"]]);const Ge=async(t,o)=>{const e={Authorization:`bearer ${t}`},a={query:`query {
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
        }`};return(await(await fetch("https://api.github.com/graphql",{method:"POST",body:JSON.stringify(a),headers:e})).json()).data.user.contributionsCollection.contributionCalendar.weeks},Ae=`precision mediump float;
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
`,Te=(t,o)=>{var e,a,r;return new ce({uniforms:{time:{value:1},color:{value:new le().fromArray(new O(t).toArray())},fogColor:{value:(e=o.fog)==null?void 0:e.color},fogNear:{value:(a=o.fog)==null?void 0:a.near},fogFar:{value:(r=o.fog)==null?void 0:r.far}},vertexShader:Ae,fragmentShader:He,fog:!0,transparent:!0})},q="rgb(255, 255, 255)",Ve=t=>t==="rgba(0, 0, 0, 0)",P=t=>{if(!t)return q;if(t.nodeType!==Node.ELEMENT_NODE)return P(t.parentElement);const o=window.getComputedStyle(t).backgroundColor;return Ve(o)?P(t.parentElement):o},Oe=(t=Z())=>{const o=I(q);return T(t,e=>{o.value=P(e)},{immediate:!0}),o};const qe={class:"contributions"},De={class:"canvas-container"},Ue={href:"https://github.com/m0ksem",target:"_blank",style:{color:"var(--m-rgb)"}},Re=f({setup(t){const o=ae(),e=I(),a=I(null);let r=null,i=null;const U=n=>n>20?"#fff":n>18?"#f8f9fa":n>15?"#e9ecef":n>12?"#dee2e6":n>10?"#ced4da":n>7?"#adb5bd":n>5?"#6c757d":n>2?"#495057":n>0?"#343a40":"#f8f9fa",{isIntersecting:R}=ee(e),J=async()=>{if(!e.value)return null;const n=await Ge("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","m0ksem");e.value.width=e.value.offsetWidth,e.value.height=e.value.offsetHeight;const c=new de;i=new pe({canvas:e.value,antialias:!0,alpha:!0}),i.setSize(e.value.offsetWidth,e.value.offsetHeight);const g=.5,h=1,x=n.length*h+n.length*g,M=h*7+2*g,_=new _e,Q=new me,d=Te("#fff",c),C=new ve(Q,d,365);c.add(C),n.forEach((b,p)=>{b.contributionDays.forEach((y,$)=>{const W=y.contributionCount;_.scale.y=Math.sqrt(Math.max(W,0)/2)*5,_.position.set((h+g)*p-x/2,_.scale.y/2,(h+g)*$),_.updateMatrix(),C.setMatrixAt(p*7+$,_.matrix),C.setColorAt(p*7+$,new O(U(W)))})}),r=new fe(30,e.value.offsetWidth/e.value.offsetHeight,.1,1e3),r.position.set(0,x/2-M,x/2),r.lookAt(0,0,-M);const L=()=>{var b,p,y;requestAnimationFrame(L),R&&(d.uniforms.time.value=o.value,d.uniforms.fogColor.value=(b=c.fog)==null?void 0:b.color,d.uniforms.fogNear.value=(p=c.fog)==null?void 0:p.near,d.uniforms.fogFar.value=(y=c.fog)==null?void 0:y.color,d.needsUpdate=!0,i==null||i.render(c,r))};return L(),c};let w={x:0,y:0,z:0};const S=()=>{const n=e.value.getBoundingClientRect(),c=Math.max(0,n.top+n.height-window.innerHeight);r.position.z=w.z+c/50,r.position.y=w.y+c/50},j=()=>{!r||!e.value||(r.aspect=e.value.offsetWidth/e.value.offsetHeight,r.updateProjectionMatrix(),i==null||i.setSize(e.value.offsetWidth,e.value.offsetHeight))};te(async()=>{a.value=await J(),w=N({},r.position),window.addEventListener("scroll",S),window.addEventListener("resize",j)}),oe(()=>{window.removeEventListener("scroll",S),window.removeEventListener("resize",j)});const z=Oe();return T([z,a],()=>{!a.value||(a.value.fog=new ue(z.value,30,50))}),(n,c)=>(l(),u("div",qe,[s("div",De,[s("canvas",{ref_key:"canvas",ref:e},null,512)]),s("a",Ue,[se(n.$slots,"default",{},void 0,!0)])]))}});var Je=v(Re,[["__scopeId","data-v-989a11d8"]]);const D=t=>(ne("data-v-8a9218d8"),t=t(),re(),t),Qe={class:"horizon"},Ke={class:"horizon__svg-wrapper"},Xe={width:"800",height:"600",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 800 600"},Ye={spreadMethod:"pad",id:"m-horizon-fill"},Ze=D(()=>s("stop",{offset:"0.85","stop-color":"var(--m-background)"},null,-1)),et=["stop-color"],tt=D(()=>s("g",null,[s("ellipse",{style:{"vector-effect":"non-scaling-stroke"},transform:"translate(39.7849, -2.15054) translate(1) translate(1) translate(5.37634) translate(562.532) translate(-5.47961, -163.703) translate(-20.5485, 27.3981) translate(660, 136) scale(1.21388, 1) translate(-660, -136) translate(138, 136) scale(1.26637, 1) translate(-138, -136) translate(138, 136) scale(1, 1.77909) translate(-138, -136) translate(660, 136) scale(2.50871, 4.55471) translate(-660, -136) translate(139, 136.5) scale(1, 0.450193) translate(-139, -136.5)",ry:"100",rx:"260",id:"svg_1",cy:"237",cx:"400",fill:"url(#m-horizon-fill)"})],-1)),ot=f({props:{color:{default:"var(--m-rgb)"}},setup(t){return(o,e)=>(l(),u("div",Qe,[s("div",Ke,[(l(),u("svg",Xe,[s("defs",null,[s("radialGradient",Ye,[Ze,s("stop",{offset:"1","stop-color":t.color},null,8,et)])]),tt]))])]))}});var st=v(ot,[["__scopeId","data-v-8a9218d8"]]);const at={class:"projects-section"},nt=V("Portfolio"),rt=V("View Github activity"),it=f({setup(t){return(o,e)=>(l(),u("div",at,[m(ie,{class:"text-8xl -mb-16 text-center font-bold"},{default:G(()=>[nt]),_:1}),m(E(Ne),{class:"container max-w-6xl project-list"}),m(st),m(E(Je),null,{default:G(()=>[rt]),_:1})]))}});var dt=v(it,[["__scopeId","data-v-0f68de84"]]);export{dt as default};
