(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[301],{8171:function(t,e,n){Promise.resolve().then(n.bind(n,4808)),Promise.resolve().then(n.bind(n,4259))},4808:function(t,e,n){"use strict";n.d(e,{default:function(){return i}});var a=n(7437),r=n(7440),o=n(5743);function i(t){let{children:e,className:n}=t;return(0,a.jsx)(o.E.div,{initial:{y:100,filter:"blur(50px)"},animate:{y:0,filter:"blur(0px)"},transition:{duration:.5,ease:"easeOut"},className:(0,r.cn)("w-full xl:max-w-[1550px] max-w-full mx-auto h-full max-h-[1000px] flex 2xl:justify-center md:justify-start justify-start flex-col overflow-y-auto overflow-x-hidden pl-4 xl:pt-2  pb-2",n),children:e})}},6338:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var a=n(7437),r=n(7440);function o(t){let{text:e,className:n,...o}=t;return(0,a.jsx)("h1",{className:(0,r.cn)(" text-font font-extrabold lg:text-7xl md:text-5xl text-4xl tracking-wider font-Orbitron",n),...o,children:e})}},8071:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});var a=n(7437),r=n(7440),o=n(8966),i=n(6338);function c(t){let{children:e,text:n,isHeading:c,className:s}=t;return(0,a.jsxs)("div",{className:" overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]",children:[c?(0,a.jsx)(i.Z,{text:n,className:s+" bg-clip-text text-transparent bg-secondary "}):(0,a.jsx)(o.Z,{text:n,className:(0,r.cn)("md:text-lg text-sm py-3 font-bold bg-clip-text text-transparent bg-secondary ",s)}),e]})}},8966:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var a=n(7437),r=n(7440);function o(t){let{text:e,className:n,...o}=t;return(0,a.jsx)("p",{className:(0,r.cn)("md:text-xl text-base font-Rajdhani text-font font-semibold tracking-wider",n),...o,children:e})}},4259:function(t,e,n){"use strict";n.d(e,{TextRevealCard:function(){return s}});var a=n(7437),r=n(2265),o=n(5743),i=n(7440),c=n(8071);let s=t=>{let{text:e,revealText:n,className:s,textClassName:u,revealedClassName:d}=t,[f,x]=(0,r.useState)(0),m=(0,r.useRef)(null),[p,h]=(0,r.useState)(0),[b,v]=(0,r.useState)(0),[g,w]=(0,r.useState)(!1);function y(){w(!1),x(0)}function j(){w(!0)}return console.log(d),(0,r.useEffect)(()=>{if(m.current){let{left:t,width:e}=m.current.getBoundingClientRect();h(t),v(e)}},[]),(0,a.jsx)("div",{onMouseEnter:j,onMouseLeave:y,onMouseMove:function(t){t.preventDefault();let{clientX:e}=t;m.current&&x((e-p)/b*100)},onTouchStart:j,onTouchEnd:y,onTouchMove:function(t){t.preventDefault();let e=t.touches[0].clientX;m.current&&x((e-p)/b*100)},ref:m,className:(0,i.cn)(" w-[90rem] rounded-lg relative overflow-hidden min-h-14",s),children:(0,a.jsxs)("div",{className:" relative flex items-center overflow-hidden",children:[(0,a.jsx)(o.E.div,{style:{width:"100%"},animate:g?{opacity:f>0?1:0,clipPath:"inset(0 ".concat(100-f,"% 0 0)")}:{clipPath:"inset(0 ".concat(100-f,"% 0 0)")},transition:g?{duration:0}:{duration:.4},className:"absolute pl-6 bg-gradient-to-r from-primary via-secondary to-accent z-20  will-change-transform min-w-40 rounded-md",children:(0,a.jsx)("p",{style:{textShadow:"4px 4px 15px rgba(0,0,0,0.5)"},className:(0,i.cn)("text-sm w-full font-Orbitron py-3 font-bold text-font bg-clip-text text-transparent bg-gradient-to-b from-white to-font",d),children:n})}),(0,a.jsx)(o.E.div,{animate:{left:"".concat(f,"%"),rotate:"".concat((f-50)*.1,"deg"),opacity:f>0?1:0},transition:g?{duration:0}:{duration:.4},className:"h-fit w-[8px] bg-gradient-to-b from-transparent via-primary/50 to-transparent absolute z-50 will-change-transform"}),(0,a.jsx)(c.Z,{text:e,className:u,children:(0,a.jsx)(l,{})})]})})},l=(0,r.memo)(()=>{let t=()=>4*Math.random()-2,e=()=>Math.random(),n=()=>Math.random();return(0,a.jsx)("div",{className:"absolute inset-0",children:[...Array(80)].map((r,i)=>(0,a.jsx)(o.E.span,{animate:{top:"calc(".concat(100*n(),"% + ").concat(t(),"px)"),left:"calc(".concat(100*n(),"% + ").concat(t(),"px)"),opacity:e(),scale:[1,1.2,0]},transition:{duration:10*n()+20,repeat:1/0,ease:"linear"},style:{position:"absolute",top:"".concat(100*n(),"%"),left:"".concat(100*n(),"%"),width:"2px",height:"2px",backgroundColor:"white",borderRadius:"50%",zIndex:1},className:"inline-block"},"star-".concat(i)))})})},7440:function(t,e,n){"use strict";n.d(e,{cn:function(){return o}});var a=n(4839),r=n(6164);function o(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return(0,r.m6)((0,a.W)(e))}}},function(t){t.O(0,[36,971,23,744],function(){return t(t.s=8171)}),_N_E=t.O()}]);