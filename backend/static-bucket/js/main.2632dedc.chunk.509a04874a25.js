(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{179:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(37),o=a.n(l),c=(a(93),a(4)),s=a(5),i=a(2),m=a(30),d=a.n(m),u=d.a.create({baseURL:"https://trick-app-306710.nw.r.appspot.com/api/",timeout:5e3,headers:{Authorization:"JWT "+localStorage.getItem("access_token"),"Content-Type":"application/json",accept:"application/json"}});var p=function(){return r.a.createElement("div",{className:"bg-gray-100 h-screen"},r.a.createElement("div",{className:"p-3 text-center"},r.a.createElement("p",null,"Loading...")))};var b=function(){var e=JSON.parse(localStorage.getItem("access_token"));if(e){var t=e.split(".")[1],a=atob(t);return JSON.parse(a)}return null},f=a(24),g=a.n(f),E=a(12),h=a.n(E),v=a(25),w=a.n(v),N=function(e){if(!e)return r.a.createElement("div",{class:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative",role:"alert"},r.a.createElement("strong",{class:"font-bold"},"Error"),r.a.createElement("span",{class:"block sm:inline"}," This is required!"))},x=Object(s.g)((function(e){var t=Object(n.useRef)(),a=Object(n.useRef)(),l=b(),o=Object(n.useState)(""),c=Object(i.a)(o,2),s=c[0],m=c[1],d=Object(n.useState)(""),p=Object(i.a)(d,2),f=p[0],E=p[1],v=Object(n.useState)(""),x=Object(i.a)(v,2),y=x[0],j=x[1],O=Object(n.useState)(""),S=Object(i.a)(O,2),k=(S[0],S[1],Object(n.useState)(!1)),C=Object(i.a)(k,2),T=C[0],R=C[1],P=Object(n.useState)(""),I=Object(i.a)(P,2),A=(I[0],I[1]),_=Object(n.useState)(""),M=Object(i.a)(_,2),L=M[0],J=M[1];return r.a.createElement("div",{className:"w-full flex justify-center"},r.a.createElement(g.a,{onSubmit:function(n){n.preventDefault(),J(""),R(!0),t.current.validateAll(),0===a.current.context._errors.length&&u.post("tricks/",{name:s,cats:f,video:y,user:l.user_id}).then(e.history.push("/"),window.location.reload()).catch((function(e){A("Please sign in or register."),R(!0)}))},ref:t,className:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"},r.a.createElement("div",{className:"mb-8"},r.a.createElement("div",{className:"form-group  mb-4"},r.a.createElement("label",{htmlFor:"name"},"Trick Name: "),r.a.createElement(h.a,{type:"text",name:"name",value:s,className:"form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:"Trick Name",onChange:function(e){var t=e.target.value;m(t)},validations:[N]})),r.a.createElement("div",{className:"form-group mb-4"},r.a.createElement("label",{htmlFor:"name"},"Video URL: "),r.a.createElement(h.a,{type:"text",name:"video",value:y,className:"form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:"Video URL",onChange:function(e){var t=e.target.value;j(t)},validations:[N]})),r.a.createElement("div",{className:"form-group mb-4"},r.a.createElement("label",{htmlFor:"name"},"Category:",r.a.createElement("select",{value:f,onChange:function(e){var t=e.target.value;E(t)},className:"form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"},r.a.createElement("option",{value:""},"--SELECT--"),r.a.createElement("option",{value:"manual"},"Manual"),r.a.createElement("option",{value:"slide"},"Slide"),r.a.createElement("option",{value:"grind"},"Grind"),r.a.createElement("option",{value:"flip"},"Flip"))))),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{disabled:T,className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"},r.a.createElement("span",null,"Add Trick"))),L&&r.a.createElement("div",{className:"form-group"},">",r.a.createElement("div",{role:"alert"},L)),r.a.createElement(w.a,{style:{display:"none"},ref:a})))}));var y=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(!1),c=Object(i.a)(o,2),s=(c[0],c[1],Object(n.useState)("")),m=Object(i.a)(s,2);m[0],m[1],Object(n.useEffect)((function(){d()}),[]);var d=function(){var e=JSON.parse(localStorage.getItem("access_token"));u.get("tricks/?format=json",{headers:{Authorization:"JWT ".concat(e)}}).then((function(e){var t=e.data;l(t)})).catch((function(e){return console.error("Error: ".concat(e))}))};return a.length>0?r.a.createElement("div",null,a.map((function(e){return r.a.createElement("div",null,e.name)}))):r.a.createElement("div",null,"loading")},j=a(84),O=a(85),S=a(86),k=a(32),C=function(){localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token")},T=function(){return!!JSON.parse(localStorage.getItem("access_token"))},R=function(e){var t=Object(n.useState)(void 0),a=Object(i.a)(t,2),l=a[0],o=a[1];Object(n.useEffect)((function(){var e=T();e&&o(e)}),[]);return r.a.createElement("div",null,l?r.a.createElement("nav",{className:"grid gap-y-8"},r.a.createElement(c.b,{to:"/",onClick:e.closeMenu,className:"underline"},"TRICK APP"),r.a.createElement(c.b,{to:"/add",onClick:e.closeMenu,className:"-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-indigo-400 transition ease-in-out duration-150"},"Add Trick"),r.a.createElement(c.b,{to:"/categories",onClick:e.closeMenu,className:"-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-indigo-400 transition ease-in-out duration-150"},"Categories"),r.a.createElement(c.b,{to:"/random",onClick:e.closeMenu,className:"-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-indigo-400 transition ease-in-out duration-150"},"Random"),r.a.createElement("div",{className:"space-y-6"},r.a.createElement("span",{className:"w-full flex rounded-md shadow-sm"},r.a.createElement("a",{href:"/",onClick:function(){C()},className:"w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"},"Log Out")))):r.a.createElement("nav",{className:"grid gap-y-8"},r.a.createElement(c.b,{to:"/",onClick:e.closeMenu,className:"underline"},"TRICK APP"),r.a.createElement("div",{className:"space-y-6"},r.a.createElement(c.b,{to:"/login",onClick:e.closeMenu,className:"w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"},"Log In"),r.a.createElement(c.b,{to:"/register",onClick:e.closeMenu,className:"w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"},"Register"))))};var P=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],l=t[1],o=Object(k.b)(a,null,{from:{position:"absolute",opacity:0},enter:{opacity:1},leave:{opacity:0}}),c=Object(k.b)(a,null,{from:{opacity:0,transform:"translateX(-100%)"},enter:{opacity:1,transform:"translateX(0%)"},leave:{opacity:0,transform:"translateX(-100%)"}});return r.a.createElement("nav",null,r.a.createElement("span",null,r.a.createElement(O.a,{icon:S.a,onClick:function(){return l(!a)}})),o.map((function(e){var t=e.item,a=e.key,n=e.props;return t&&r.a.createElement(k.a.div,{key:a,style:n,className:"fixed bg-gray-500 bg-opacity-75 top-0 left-0 w-full h-screen z-50",onClick:function(){return l(!1)}})})),c.map((function(e){var t=e.item,a=e.key,n=e.props;return t&&r.a.createElement(k.a.div,{key:a,style:n,className:"fixed bg-indigo-300 top-0 left-0 w-4/5 h-full z-50 p-3 "},r.a.createElement(R,{closeMenu:function(){return l(!1)}}))})))},I=Object(j.layoutGenerator)({mobile:0,phablet:550,tablet:768,desktop:992}),A=I.isAtLeast("tablet"),_=I.isAtMost("phablet"),M=function(){var e=Object(n.useState)(void 0),t=Object(i.a)(e,2),a=t[0],l=t[1];Object(n.useEffect)((function(){var e=T();e&&l(e)}),[]);return r.a.createElement("div",{className:""},r.a.createElement(_,null,r.a.createElement("header",{className:"bg-indigo-300 shadow-lg border-b p-2 flex justify-between items-center"},r.a.createElement("span",{className:"px-6 font-bold"},r.a.createElement(c.b,{to:"/"},"TRICK APP")),r.a.createElement(P,null))),r.a.createElement(A,null,a?r.a.createElement("header",{className:"bg-white shadow-sm border-b p-2 flex justify-between"},r.a.createElement("div",null,r.a.createElement("span",{className:"px-6 font-bold"},r.a.createElement(c.b,{to:"/"},"TRICK APP")),r.a.createElement("span",{className:"px-4 space-x-8"},r.a.createElement(c.c,{to:"/add",className:"-m-2 p-2 space-x-2 rounded-md hover:bg-indigo-300 transition ease-in-out duration-150"},"Add"),r.a.createElement(c.c,{to:"/categories",className:"-m-2 p-2 space-x-2 rounded-md hover:bg-indigo-300 transition ease-in-out duration-150"},"Categories"),r.a.createElement(c.c,{to:"/random",className:"-m-2 p-2 space-x-2 rounded-md hover:bg-indigo-300 transition ease-in-out duration-150"},"Random"))),r.a.createElement("div",{className:"mr-1 px-4 items-left -m-2 p-2 space-x-2 rounded-md hover:bg-indigo-300 transition ease-in-out duration-150"},r.a.createElement("a",{href:"/",onClick:function(){C()}},"Log Out"))):r.a.createElement("header",{className:"bg-white shadow-sm border-b p-2 flex justify-between"},r.a.createElement("div",null,r.a.createElement("span",{className:"px-6 font-bold"},r.a.createElement(c.b,{to:"/"},"TRICK APP"))),r.a.createElement("div",{className:" items-left "},r.a.createElement("span",{className:"-m-2 mr-6 p-2 space-x-2 rounded-md hover:bg-indigo-300 transition ease-in-out duration-150"},r.a.createElement(c.b,{to:"/register"},"Register")),r.a.createElement("span",{className:"mr-1 px-4 -m-2 p-2 space-x-2 rounded-md hover:bg-indigo-300 transition ease-in-out duration-150"},r.a.createElement(c.b,{to:"/login"},"Log In"))))))},L=function(e){var t=e.match,a=e.data,n=(t.params.cats,a.filter((function(e){return e.cats==t.params.cats})));return r.a.createElement("div",{className:"md:w-3/4 h-3/4 w-full bg-gray-100"},r.a.createElement("div",{className:"mt-4 md:mt-0 p-4 bg-white shadow-md rounded text-center md:text-left "},n.length?r.a.createElement("ul",{className:"p-3 grid gap-y-6",style:{textTransform:"capitalize"}},n.map((function(e){return r.a.createElement("li",null,r.a.createElement(c.b,{to:"/categories/".concat(e.cats,"/").concat(e.id)},r.a.createElement("span",{className:"-m-3 p-3 space-x-3 rounded-md hover:bg-indigo-400 transition ease-in-out duration-150"},e.name," | ",e.cats," | ",e.user_name)))}))):r.a.createElement("h2",null,"You haven't logged a trick yet!")))},J=function(e){var t=e.match,a=Object(n.useState)([]),l=Object(i.a)(a,2),o=l[0],m=l[1],d=Object(n.useState)(!1),b=Object(i.a)(d,2),f=b[0],g=b[1];Object(n.useEffect)((function(){u.get("tricks/?format=json").then((function(e){m(e.data),g(!0)}))}),[]);var E=o.map((function(e){return e.cats})).filter((function(e,t,a){return a.indexOf(e)==t})).map((function(e){return r.a.createElement("li",null,r.a.createElement(c.b,{to:"".concat(t.url,"/").concat(e),className:"md:-m-3 md:p-3 md:space-x-3 -m-2 p-2 space-x-2 rounded-md hover:bg-indigo-400 transition ease-in-out duration-150"},e))}));return f?r.a.createElement("div",{className:"bg-gray-100 md:flex md:h-full h-screen w-screen p-8"},r.a.createElement("div",{className:"md:w-1/4 h-1/4 md:h-screen md:mr-4"},r.a.createElement("div",{className:"bg-white shadow-md rounded h-full pb-2 md:p-4"},r.a.createElement("div",{className:"invisible md:visible text-center md:text-left md:mb-8"},r.a.createElement("h1",null,"Categories")),r.a.createElement("div",{style:{textTransform:"capitalize"},className:"text-center md:text-left md:mt-4 mb-4"},r.a.createElement("ul",{className:"grid gap-y-4 md:gap-y-8"},E)))),r.a.createElement(s.b,{path:"".concat(t.url,"/:cats"),render:function(e){return r.a.createElement(L,Object.assign({data:o},e))}})):r.a.createElement(p,null)},F=a(38),z=a.n(F),U=function(e){var t=e.match,a=(e.num,e.data,Object(n.useState)([])),l=Object(i.a)(a,2),o=l[0],c=l[1],s=Object(n.useState)(!1),m=Object(i.a)(s,2),d=m[0],b=m[1];t.params.cats;Object(n.useEffect)((function(){u.get("tricks/?format=json").then((function(e){c(e.data),b(!0)}))}),[]);var f=o.filter((function(e){return e.cats==t.params.cats&e.id==t.params.id}));return d?r.a.createElement("div",{className:"p-8 h-full bg-gray-100"},f.length?r.a.createElement("div",{className:"md:flex bg-white shadow-md rounded p-4"},f.map((function(e){return r.a.createElement("div",{className:"md:w-1/4 text-center md:text-left p-4 h-40"},r.a.createElement("p",null,"Trick Name: ",e.name),r.a.createElement("p",null,"Category: ",e.cats),r.a.createElement("p",null,"Skater: ",e.user_name))})),f.map((function(e){return r.a.createElement("div",{className:"h-3/4 md:w-3/4 h-screen bg-shadow content-center "},r.a.createElement("div",{className:"p-5"},r.a.createElement("div",{className:"player-wrapper"},r.a.createElement(z.a,{url:e.video,controls:!0,className:"react-player",width:"100%",height:"100%"}))))}))):r.a.createElement("h2",null,"Hmmm something went wrong there. Please try again.")):r.a.createElement(p,null)};var K=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(!1),c=Object(i.a)(o,2),s=c[0],m=c[1],d={textTransform:"capitalize"};return Object(n.useEffect)((function(){u.get("tricks/?format=json").then((function(e){var t=e.data,a=t[Math.floor(Math.random()*t.length)];l(a),m(!0)}))}),[]),s?r.a.createElement("div",{className:"p-8 h-full bg-gray-100"},a?r.a.createElement("div",{className:"md:flex bg-white shadow-md rounded p-4 "},r.a.createElement("div",{className:"md:w-1/4 text-center md:text-left p-4 h-40"},r.a.createElement("p",null,"Trick Name: ",r.a.createElement("span",{style:d},a.name)),r.a.createElement("p",null,"Category: ",r.a.createElement("span",{style:d},a.cats))),r.a.createElement("div",{className:"h-3/4 md:w-3/4 h-screen bg-shadow content-center "},r.a.createElement("div",{className:"p-5"},r.a.createElement("div",{className:"player-wrapper"},r.a.createElement(z.a,{url:a.video,controls:!0,className:"react-player",width:"100%",height:"100%"}))))):r.a.createElement("div",{className:"p-8 h-screen bg-gray-100"},r.a.createElement("h2",null,"Hmmm something went wrong there. Please try again."))):r.a.createElement(p,null)},W=function(e){if(!e)return r.a.createElement("div",{class:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative",role:"alert"},r.a.createElement("strong",{class:"font-bold"},"Error"),r.a.createElement("span",{class:"block sm:inline"}," This is required!"))},q=Object(s.g)((function(e){var t=Object(n.useRef)(),a=Object(n.useRef)(),l=Object(n.useState)(""),o=Object(i.a)(l,2),c=o[0],s=o[1],m=Object(n.useState)(""),d=Object(i.a)(m,2),p=d[0],b=d[1],f=Object(n.useState)(""),E=Object(i.a)(f,2),v=E[0],N=E[1];return r.a.createElement("div",{className:"bg-gray-100 h-screen"},r.a.createElement("div",{className:"w-full flex justify-center pt-8"},r.a.createElement(g.a,{onSubmit:function(n){n.preventDefault(),t.current.validateAll(),0===a.current.context._errors.length&&u.post("user/create/",{username:c,password:p,email:v}).then(e.history.push("/"),window.location.reload())},ref:t,className:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"},r.a.createElement("div",{className:"mb-8"},r.a.createElement("div",{className:"form-group mb-4"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement(h.a,{type:"email",name:"email",value:v,className:"form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:"Email",onChange:function(e){var t=e.target.value;N(t)},validations:[W]})),r.a.createElement("div",{className:"form-group mb-4"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement(h.a,{type:"text",name:"username",value:c,className:"form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:"Username",onChange:function(e){var t=e.target.value;s(t)},validations:[W]})),r.a.createElement("div",{className:"form-group mb-4"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement(h.a,{type:"password",name:"password",value:p,className:"form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:"Password",onChange:function(e){var t=e.target.value;b(t)},validations:[W]}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"},r.a.createElement("span",null,"Register"))),r.a.createElement(w.a,{style:{display:"none"},ref:a}))))}));var D=function(){return r.a.createElement("div",{className:"bg-gray-100 h-screen"},r.a.createElement("div",{className:"pt-8"},r.a.createElement(x,null)))};var H=function(){return r.a.createElement("div",{className:"bg-gray-100 h-screen"},r.a.createElement("div",{className:"p-3 text-center"},r.a.createElement("p",null,"Hmm something went wrong there. This page doesn't exist.")))},X=function(e){if(!e)return r.a.createElement("div",{class:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative",role:"alert"},r.a.createElement("strong",{class:"font-bold"},"Error"),r.a.createElement("span",{class:"block sm:inline"}," This is required!"))},B=Object(s.g)((function(e){var t=Object(n.useRef)(),a=Object(n.useRef)(),l=Object(n.useState)(""),o=Object(i.a)(l,2),c=o[0],s=o[1],m=Object(n.useState)(""),d=Object(i.a)(m,2),p=d[0],b=d[1],f=Object(n.useState)(!1),E=Object(i.a)(f,2),v=E[0],N=E[1],x=Object(n.useState)(""),y=Object(i.a)(x,2),j=y[0],O=y[1];return r.a.createElement("div",{className:"h-screen bg-gray-100"},r.a.createElement("div",{className:"w-full flex justify-center pt-8"},r.a.createElement(g.a,{onSubmit:function(n){n.preventDefault(),O(""),N(!0),t.current.validateAll(),0===a.current.context._errors.length&&u.post("token/obtain/",{username:c,password:p}).then((function(t){try{localStorage.setItem("access_token",JSON.stringify(t.data.access)),localStorage.setItem("refresh_token",JSON.stringify(t.data.refresh)),e.history.push("/"),window.location.reload()}catch(a){console.log("The error is: "+a),O("Try again!")}}))},ref:t,className:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"},r.a.createElement("div",{className:"mb-8"},r.a.createElement("div",{className:"form-group mb-4"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement(h.a,{type:"text",name:"username",value:c,className:"form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:"Username",onChange:function(e){var t=e.target.value;s(t)},validations:[X]})),r.a.createElement("div",{className:"form-group mb-4"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement(h.a,{type:"password",name:"password",value:p,className:"form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:"Password",onChange:function(e){var t=e.target.value;b(t)},validations:[X]}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{disabled:v,className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"},r.a.createElement("span",null,"Log In"))),j&&r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{class:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative",role:"alert"},r.a.createElement("strong",{class:"font-bold"},"Error "),r.a.createElement("span",{class:""},j))),r.a.createElement(w.a,{style:{display:"none"},ref:a}))))}));var G=function(){return r.a.createElement("div",{className:"bg-gray-100 h-screen"},r.a.createElement("div",{className:"p-3 text-center"},r.a.createElement("p",null,"Please ",r.a.createElement(c.b,{to:"/login"},r.a.createElement("span",{className:"text-indigo-300"},"sign in "))," or ",r.a.createElement(c.b,{to:"/register"},r.a.createElement("span",{className:"text-indigo-300"},"register")),".")))},V=a(87),Y=function(e){var t=e.component,a=(e.auth,Object(V.a)(e,["component","auth"]));return r.a.createElement(s.b,Object.assign({},a,{render:function(e){return!0===T()?r.a.createElement(t,e):r.a.createElement(s.a,{to:"/home"})}}))};var $=function(){return r.a.createElement(c.a,null,r.a.createElement(M,null),r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/login"},r.a.createElement(B,null)),r.a.createElement(s.b,{path:"/register"},r.a.createElement(q,null)),r.a.createElement(s.b,{path:"/home"},r.a.createElement(G,null)),r.a.createElement(Y,{exact:!0,path:"/",component:y}),r.a.createElement(Y,{path:"/add",component:D}),r.a.createElement(Y,{path:"/random",component:K}),r.a.createElement(Y,{path:"/categories/:cats/:id",component:U}),r.a.createElement(Y,{path:"/categories",component:J}),r.a.createElement(s.b,{component:H})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},88:function(e,t,a){e.exports=a(179)},93:function(e,t,a){}},[[88,1,2]]]);
//# sourceMappingURL=main.2632dedc.chunk.js.map