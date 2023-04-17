var K=Object.defineProperty;var W=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var B=(t,o,e)=>o in t?K(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,N=(t,o)=>{for(var e in o||(o={}))X.call(o,e)&&B(t,e,o[e]);if(W)for(var e of W(o))Y.call(o,e)&&B(t,e,o[e]);return t};import{_ as v,d as f,b as l,e as u,aB as s,aN as G,aL as V,t as k,a as S,aS as m,S as Z,V as ee,C as A,r as I,aT as H,aU as te,o as oe,aV as se,aw as ae,aE as ne,au as re,aA as ie,a4 as ce,at as le,ay as ue,P as de,aW as _e,aI as pe,aG as T,aH as O,aK as F,aJ as U}from"./index.aa1fff64.js";import{u as me}from"./use-fade-intersection.2916a9cf.js";import{M as ve}from"./m-heading.ef027d01.js";var fe="/assets/engine.319a40ed.png",ge="/assets/checkers.2cbf389f.png",he="/assets/tests.7559a3d5.png",be="/assets/napasproject.cd41273d.png",ye="/assets/vue-nodes.b949c856.png";const ke=[{name:"BronzeEngine",description:"WebGL game engine",link:{text:"Check repository",url:"https://github.com/m0ksem/Bronze-Engine#-bronze-engine-"},image:fe},{name:"GameCheckersBot",description:"Telegram bot",link:{text:"Check repository",url:"https://github.com/m0ksem/GameCheckersBot"},image:ge},{name:"ImproveTests",description:"Android app",link:{text:"Last release",url:"https://github.com/m0ksem/Tests/releases"},image:he},{name:"NapasProject",description:"Website",link:{text:"Visit",url:"https://napas-project.com/"},image:be},{name:"VueNodes",description:"Library",link:{text:"Check repository",url:"https://github.com/m0ksem/vue-nodes"},image:ye}];const we={class:"libs"},xe=["href"],Ce=f({setup(t){const o=[{href:"https://github.com/m0ksem/unplugin-object-3d",title:"unplugin-3d-object"},{href:"https://github.com/m0ksem/vue-glsl",title:"vue-glsl"},{href:"https://github.com/m0ksem/vue-custom-scrollbar/tree/master/packages/vue-custom-scrollbar",title:"vue-custom-scrollbar"},{href:"https://github.com/m0ksem/vscode-vue3-snippets",title:"vscode-vue3-snippets"},{href:"https://github.com/m0ksem/clocks",title:"clocks"},{href:"https://github.com/m0ksem/google-calendar",title:"google-calendar"},{href:"https://github.com/m0ksem/telegram-bot-template",title:"telegram-bot-template"}];return(e,a)=>(l(),u("div",we,[s("ul",null,[(l(),u(G,null,V(o,({href:r,title:i})=>s("li",{key:i},[s("a",{href:r,target:"_blank"},k(i),9,xe)])),64))])]))}});var $e=v(Ce,[["__scopeId","data-v-a153ff18"]]);const Se={class:"projects-list container"},Ie=["href","title"],Pe={class:"project"},Ee={class:"project__image"},je=["src"],ze={class:"project__text"},Le={class:"project__link-text"},Me={class:"project-wrapper"},We={class:"project"},Be=f({setup(t){return(o,e)=>(l(),u("div",Se,[(l(!0),u(G,null,V(S(ke),a=>(l(),u("a",{class:"project-wrapper",key:a.name,href:a.link.url,title:a.link.text,target:"_blank"},[s("div",Pe,[s("div",Ee,[s("img",{src:a.image},null,8,je)]),s("div",ze,[s("h3",null,k(a.name),1),s("p",null,k(a.description),1),s("div",Le,[s("span",null,k(a.link.text),1)])])])],8,Ie))),128)),s("div",Me,[s("div",We,[m($e)])])]))}});var Ne=v(Be,[["__scopeId","data-v-27a0802c"]]);const Fe=async(t,o)=>{const e={Authorization:`bearer ${t}`},a={query:`query {
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
`,Ae=(t,o)=>{var e,a,r;return new Z({uniforms:{time:{value:1},color:{value:new ee().fromArray(new A(t).toArray())},fogColor:{value:(e=o.fog)==null?void 0:e.color},fogNear:{value:(a=o.fog)==null?void 0:a.near},fogFar:{value:(r=o.fog)==null?void 0:r.far}},vertexShader:Ge,fragmentShader:Ve,fog:!0,transparent:!0})},q="rgb(255, 255, 255)",He=t=>t==="rgba(0, 0, 0, 0)",P=t=>{if(!t)return q;if(t.nodeType!==Node.ELEMENT_NODE)return P(t.parentElement);const o=window.getComputedStyle(t).backgroundColor;return He(o)?P(t.parentElement):o},Te=(t=te())=>{const o=I(q);return H(t,e=>{o.value=P(e)},{immediate:!0}),o};const Oe={class:"contributions"},Ue={class:"canvas-container"},qe={href:"https://github.com/m0ksem",target:"_blank",style:{color:"var(--m-rgb)"}},De=f({setup(t){const o=pe(),e=I(),a=I(null);let r=null,i=null;const R=n=>n>20?"#fff":n>18?"#f8f9fa":n>15?"#e9ecef":n>12?"#dee2e6":n>10?"#ced4da":n>7?"#adb5bd":n>5?"#6c757d":n>2?"#495057":n>0?"#343a40":"#f8f9fa";me(e);const J=async()=>{if(!e.value)return null;const n=await Fe("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","m0ksem");e.value.width=e.value.offsetWidth,e.value.height=e.value.offsetHeight;const c=new re;i=new ie({canvas:e.value,antialias:!0,alpha:!0}),i.setSize(e.value.offsetWidth,e.value.offsetHeight);const g=.5,h=1,x=n.length*h+n.length*g,L=h*7+2*g,p=new ce,Q=new le,d=Ae("#fff",c),C=new ue(Q,d,365);return c.add(C),n.forEach((b,_)=>{b.contributionDays.forEach((y,$)=>{const M=y.contributionCount;p.scale.y=Math.sqrt(Math.max(M,0)/2)*5,p.position.set((h+g)*_-x/2,p.scale.y/2,(h+g)*$),p.updateMatrix(),C.setMatrixAt(_*7+$,p.matrix),C.setColorAt(_*7+$,new A(R(M)))})}),r=new de(30,e.value.offsetWidth/e.value.offsetHeight,.1,1e3),r.position.set(0,x/2.2-L,x/1.7),r.lookAt(0,0,-L),_e(e,()=>{var b,_,y;d.uniforms.time.value=o.value,d.uniforms.fogColor.value=(b=c.fog)==null?void 0:b.color,d.uniforms.fogNear.value=(_=c.fog)==null?void 0:_.near,d.uniforms.fogFar.value=(y=c.fog)==null?void 0:y.color,d.needsUpdate=!0,i==null||i.render(c,r)}),c};let w={x:0,y:0,z:0};const E=()=>{const n=e.value.getBoundingClientRect(),c=Math.max(0,n.top+n.height-window.innerHeight);r.position.z=w.z+c/50,r.position.y=w.y+c/50},j=()=>{!r||!e.value||(r.aspect=e.value.offsetWidth/e.value.offsetHeight,r.updateProjectionMatrix(),i==null||i.setSize(e.value.offsetWidth,e.value.offsetHeight))};oe(async()=>{a.value=await J(),w=N({},r.position),window.addEventListener("scroll",E),window.addEventListener("resize",j)}),se(()=>{window.removeEventListener("scroll",E),window.removeEventListener("resize",j)});const z=Te();return H([z,a],()=>{!a.value||(a.value.fog=new ae(z.value,30,50))}),(n,c)=>(l(),u("div",Oe,[s("div",Ue,[s("canvas",{ref_key:"canvas",ref:e},null,512)]),s("a",qe,[ne(n.$slots,"default",{},void 0,!0)])]))}});var Re=v(De,[["__scopeId","data-v-1ac4a62d"]]);const D=t=>(T("data-v-04d4529c"),t=t(),O(),t),Je={class:"horizon"},Qe={class:"horizon__svg-wrapper"},Ke={width:"800",height:"600",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 800 600"},Xe={spreadMethod:"pad",id:"m-horizon-fill"},Ye=D(()=>s("stop",{offset:"0.85","stop-color":"var(--m-background)"},null,-1)),Ze=["stop-color"],et=D(()=>s("g",null,[s("ellipse",{style:{"vector-effect":"non-scaling-stroke"},transform:"translate(39.7849, -2.15054) translate(1) translate(1) translate(5.37634) translate(562.532) translate(-5.47961, -163.703) translate(-20.5485, 27.3981) translate(660, 136) scale(1.21388, 1) translate(-660, -136) translate(138, 136) scale(1.26637, 1) translate(-138, -136) translate(138, 136) scale(1, 1.77909) translate(-138, -136) translate(660, 136) scale(2.50871, 4.55471) translate(-660, -136) translate(139, 136.5) scale(1, 0.450193) translate(-139, -136.5)",ry:"100",rx:"260",id:"svg_1",cy:"237",cx:"400",fill:"url(#m-horizon-fill)"})],-1)),tt=f({props:{color:{default:"var(--m-rgb)"}},setup(t){return(o,e)=>(l(),u("div",Je,[s("div",Qe,[(l(),u("svg",Ke,[s("defs",null,[s("radialGradient",Xe,[Ye,s("stop",{offset:"1","stop-color":t.color},null,8,Ze)])]),et]))])]))}});var ot=v(tt,[["__scopeId","data-v-04d4529c"]]);const st=t=>(T("data-v-78c518dc"),t=t(),O(),t),at={class:"projects-section"},nt=st(()=>s("div",{class:"projects-section__planet"},null,-1)),rt=U("Portfolio"),it=U("View Github activity"),ct=f({setup(t){return(o,e)=>(l(),u("div",at,[nt,m(ve,{class:"text-8xl -mb-16 text-center font-bold"},{default:F(()=>[rt]),_:1}),m(S(Ne),{class:"container max-w-6xl project-list"}),m(ot),m(S(Re),null,{default:F(()=>[it]),_:1})]))}});var pt=v(ct,[["__scopeId","data-v-78c518dc"]]);export{pt as default};
