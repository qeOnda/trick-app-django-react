(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{179:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),o=a.n(l),s=(a(93),a(4)),c=a(5),i=a(2),m=a(31),d=a.n(m),u="https://trick-app-306710.nw.r.appspot.com/api/",p=d.a.create({baseURL:u,timeout:5e3,headers:{Authorization:"JWT "+localStorage.getItem("access_token"),"Content-Type":"application/json",accept:"application/json"}});p.interceptors.response.use((function(e){return e}),(function(e){var t=e.config;if(401===e.response.status&&t.url===u+"token/refresh/")return window.location.href="/login/",Promise.reject(e);if("token_not_valid"===e.response.data.code&&401===e.response.status&&"Unauthorized"===e.response.statusText){var a=JSON.parse(localStorage.getItem("refresh_token"));if(a){var n=JSON.parse(atob(a.split(".")[1])),r=Math.ceil(Date.now()/1e3);if(console.log(n.exp),n.exp>r)return p.post("/token/refresh/",{refresh:a}).then((function(e){return localStorage.setItem("access_token",JSON.stringify(e.data.access)),localStorage.setItem("refresh_token",JSON.stringify(e.data.refresh)),p.defaults.headers.Authorization="JWT "+e.data.access,t.headers.Authorization="JWT "+e.data.access,p(t)})).catch((function(e){console.log(e)}));console.log("Refresh token is expired",n.exp,r),window.location.href="/login/"}else console.log("Refresh token not available."),window.location.href="/login/"}return Promise.reject(e)}));var g=p;var f=function(){return r.a.createElement("div",{className:"bg-gray-100 h-screen"},r.a.createElement("div",{className:"p-3 text-center"},r.a.createElement("p",null,"Loading...")))};var b=function(){var e=JSON.parse(localStorage.getItem("access_token"));if(e){var t=e.split(".")[1],a=atob(t);return JSON.parse(a)}return null},h=a(25),E=a.n(h),v=a(12),x=a.n(v),w=a(26),y=a.n(w),N=function(e){if(!e)return r.a.createElement("div",{class:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative",role:"alert"},r.a.createElement("strong",{class:"font-bold"},"Error"),r.a.createElement("span",{class:"block sm:inline"}," This is required!"))},j=Object(c.g)((function(e){var t=Object(n.useRef)(),a=Object(n.useRef)(),l=b(),o=Object(n.useState)(""),s=Object(i.a)(o,2),c=s[0],m=s[1],d=Object(n.useState)(""),u=Object(i.a)(d,2),p=u[0],f=u[1],h=Object(n.useState)(""),v=Object(i.a)(h,2),w=v[0],j=v[1],k=Object(n.useState)(""),O=Object(i.a)(k,2),S=(O[0],O[1],Object(n.useState)(!1)),C=Object(i.a)(S,2),T=C[0],J=C[1],I=Object(n.useState)(""),A=Object(i.a)(I,2),_=(A[0],A[1]),L=Object(n.useState)(""),P=Object(i.a)(L,2),z=P[0],R=P[1];return r.a.createElement("div",{className:"w-full flex justify-center bg-gray-100 h-full"},r.a.createElement(E.a,{onSubmit:function(n){if(n.preventDefault(),R(""),J(!0),t.current.validateAll(),0===a.current.context._errors.length){var r=JSON.parse(localStorage.getItem("access_token")),o={headers:{Authorization:"JWT ".concat(r)}},s={name:c,cats:p,video:w,user:l.user_id};g.post("tricks/",s,o).then(e.history.push("/"),window.location.reload()).catch((function(e){_("Please sign in or register."),J(!0)}))}},ref:t,className:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"},r.a.createElement("div",{className:"mb-8"},r.a.createElement("div",{className:"form-group  mb-4"},r.a.createElement("label",{htmlFor:"name"},"Trick Name: "),r.a.createElement(x.a,{type:"text",name:"name",value:c,className:"form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:"Trick Name",onChange:function(e){return m(e.target.value)},validations:[N]})),r.a.createElement("div",{className:"form-group mb-4"},r.a.createElement("label",{htmlFor:"name"},"Video URL: "),r.a.createElement(x.a,{type:"text",name:"video",value:w,className:"form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:"Video URL",onChange:function(e){return j(e.target.value)},validations:[N]})),r.a.createElement("div",{className:"form-group mb-4"},r.a.createElement("label",{htmlFor:"name"},"Category:",r.a.createElement("select",{value:p,onChange:function(e){return f(e.target.value)},className:"form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"},r.a.createElement("option",{value:""},"--SELECT--"),r.a.createElement("option",{value:"manual"},"Manual"),r.a.createElement("option",{value:"slide"},"Slide"),r.a.createElement("option",{value:"grind"},"Grind"),r.a.createElement("option",{value:"flip"},"Flip"))))),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{disabled:T,className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"},r.a.createElement("span",null,"Add Trick"))),z&&r.a.createElement("div",{className:"form-group"},">",r.a.createElement("div",{role:"alert"},z)),r.a.createElement(y.a,{style:{display:"none"},ref:a})))})),k=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],r=t[1];return{isShowing:a,toggle:function(){r(!a)}}},O=function(e){var t=e.isShowing,a=e.hide,n=e.onChangeLearned;return t?o.a.createPortal(r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{class:"fixed z-10 inset-0 overflow-y-auto"},r.a.createElement("div",{class:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},r.a.createElement("div",{class:"fixed inset-0 transition-opacity"},r.a.createElement("div",{class:"absolute inset-0 bg-gray-500 opacity-75"})),r.a.createElement("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen"}),"\u200b",r.a.createElement("div",{class:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",role:"dialog","aria-modal":"true","aria-labelledby":"modal-headline"},r.a.createElement("div",{class:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},r.a.createElement("div",{class:"sm:flex sm:items-start"},r.a.createElement("div",{class:"mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 sm:mx-0 sm:h-10 sm:w-10"},r.a.createElement("svg",{class:"h-6 w-6 text-yellow-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},r.a.createElement("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"}))),r.a.createElement("div",{class:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},r.a.createElement("h3",{class:"text-lg leading-6 font-medium text-gray-900",id:"modal-headline"}),r.a.createElement("div",{class:"mt-2"},r.a.createElement("p",{class:"text-sm leading-5 text-gray-500"},"Are you sure you learned this trick? This action cannot be undone."))))),r.a.createElement("div",{class:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"},r.a.createElement("span",{class:"flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto"},r.a.createElement("button",{onClick:n,type:"button",class:"inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-blue-400 text-base leading-6 font-medium text-white shadow-sm hover:bg-blue-300 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"},"Learned!")),r.a.createElement("span",{class:"mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto"},r.a.createElement("button",{onClick:a,type:"button",class:"inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"},"Cancel"))))))),document.body):null},S=function(e){var t=k(),a=t.isShowing,n=t.toggle;return e.trick.learned?r.a.createElement("div",{className:""},r.a.createElement("button",{className:"bg-blue-500 text-white font-bold py-1 px-3 rounded opacity-50 cursor-not-allowed"},"COMPLETED!")):r.a.createElement("div",{className:""},r.a.createElement("button",{onClick:n,className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"},"COMPLETED?"),r.a.createElement(O,{isShowing:a,hide:n,onChangeLearned:function(t){var a=JSON.parse(localStorage.getItem("access_token")),n={headers:{Authorization:"JWT ".concat(a)}},r={learned:!0,user:e.trick.user,name:e.trick.name,cats:e.trick.cats,video:e.trick.video};g.put("tricks/"+"".concat(e.trick.id,"/"),r,n).then(window.location.reload()).catch((function(e){console.log(e.message)}))}}))},C=function(e){var t=e.isShowing,a=e.hide,n=e.onChangeDelete;return t?o.a.createPortal(r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{class:"fixed z-10 inset-0 overflow-y-auto"},r.a.createElement("div",{class:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},r.a.createElement("div",{class:"fixed inset-0 transition-opacity"},r.a.createElement("div",{class:"absolute inset-0 bg-gray-500 opacity-75"})),r.a.createElement("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen"}),"\u200b",r.a.createElement("div",{class:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",role:"dialog","aria-modal":"true","aria-labelledby":"modal-headline"},r.a.createElement("div",{class:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},r.a.createElement("div",{class:"sm:flex sm:items-start"},r.a.createElement("div",{class:"mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 sm:mx-0 sm:h-10 sm:w-10"},r.a.createElement("svg",{class:"h-6 w-6 text-yellow-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},r.a.createElement("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"}))),r.a.createElement("div",{class:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},r.a.createElement("h3",{class:"text-lg leading-6 font-medium text-gray-900",id:"modal-headline"}),r.a.createElement("div",{class:"mt-2"},r.a.createElement("p",{class:"text-sm leading-5 text-gray-500"},"Are you sure you want to delete this trick? This action cannot be undone."))))),r.a.createElement("div",{class:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"},r.a.createElement("span",{class:"flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto"},r.a.createElement("button",{onClick:n,type:"button",class:"inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-400 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-300 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"},"DELETE")),r.a.createElement("span",{class:"mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto"},r.a.createElement("button",{onClick:a,type:"button",class:"inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"},"Cancel"))))))),document.body):null},T=function(e){var t=k(),a=t.isShowing,n=t.toggle;return r.a.createElement("div",{className:""},r.a.createElement("button",{onClick:n,className:"bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"},"DELETE"),r.a.createElement(C,{isShowing:a,hide:n,onChangeDelete:function(t){var a=JSON.parse(localStorage.getItem("access_token")),n={headers:{Authorization:"JWT ".concat(a)}};g.delete("tricks/"+"".concat(e.trick.id,"/"),n).then(window.location.reload()).catch((function(e){console.log(e.message)}))}}))};var J=function(e){var t={textTransform:"capitalize"};return r.a.createElement("div",{className:""},r.a.createElement("div",{className:"flex flex-col bg-white shadow-md rounded"},r.a.createElement("div",{className:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},r.a.createElement("div",{className:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},r.a.createElement("div",{className:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},r.a.createElement("table",{className:"min-w-full divide-y divide-gray-200"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"px-4 py-3 bg-secondary text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"},"Name"),r.a.createElement("th",{className:"px-4 py-3 bg-secondary text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"},"Category"),r.a.createElement("th",{className:"px-4 py-3 bg-secondary text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"},"Status"),r.a.createElement("th",{className:"px-4 py-3 bg-secondary text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"}))),r.a.createElement("tbody",{className:"bg-white divide-y divide-gray-200"},e.tricks.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",{className:"px-4 py-4 whitespace-no-wrap"},r.a.createElement(s.b,{to:"/categories/".concat(e.cats,"/").concat(e.id)},r.a.createElement("span",{style:t,className:"-m-3 p-3 space-x-3 rounded-md hover:bg-indigo-400 transition ease-in-out duration-150"},e.name))),r.a.createElement("td",{className:"px-4 py-4 whitespace-no-wrap",style:t},e.cats),r.a.createElement("td",{className:"px-4 py-4 whitespace-no-wrap"},e.learned?r.a.createElement("span",{class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"},"Learned!"):r.a.createElement("span",{class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-200 text-yellow-800"},"Learning")),r.a.createElement("td",{className:"px-4 py-4 whitespace-no-wrap"},r.a.createElement(S,{trick:e})),r.a.createElement("td",{className:"px-4 py-4 whitespace-no-wrap"},r.a.createElement(T,{trick:e})))})))))))))};var I=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(!1),s=Object(i.a)(o,2),c=s[0],m=s[1],d=Object(n.useState)(""),u=Object(i.a)(d,2),p=(u[0],u[1],b());Object(n.useEffect)((function(){h()}),[]);var h=function(){var e=JSON.parse(localStorage.getItem("access_token"));g.get("tricks/?format=json",{headers:{Authorization:"JWT ".concat(e)}}).then((function(e){var t=e.data;l(t),m(!0)})).catch((function(e){console.error("Error: ".concat(e)),m(!0)}))};return c?r.a.createElement("div",{className:"bg-gray-100 h-full pt-8 pb-8 pl-3 pr-3 md:p-8"},r.a.createElement("div",{className:"pb-8 text-center",style:{textTransform:"capitalize"}},r.a.createElement("h1",null,"Hello, ",p.name,"!")),r.a.createElement("div",{className:"md:flex justify-between"},r.a.createElement("div",{className:"md:w-2/3"},r.a.createElement(J,{tricks:a})),r.a.createElement("div",{className:"md:w-1/3 pt-6 md:pl-10"},r.a.createElement(j,null)))):r.a.createElement(f,null)},A=a(84),_=a(85),L=a(86),P=a(33),z=function(){localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token")},R=function(){return!!JSON.parse(localStorage.getItem("access_token"))},M=function(e){var t=Object(n.useState)(void 0),a=Object(i.a)(t,2),l=a[0],o=a[1];Object(n.useEffect)((function(){var e=R();e&&o(e)}),[]);return r.a.createElement("div",null,l?r.a.createElement("nav",{className:"grid gap-y-8"},r.a.createElement(s.b,{to:"/",onClick:e.closeMenu,className:"underline"},"TRICK APP"),r.a.createElement(s.b,{to:"/add",onClick:e.closeMenu,className:"-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-indigo-400 transition ease-in-out duration-150"},"Add Trick"),r.a.createElement(s.b,{to:"/categories",onClick:e.closeMenu,className:"-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-indigo-400 transition ease-in-out duration-150"},"Categories"),r.a.createElement(s.b,{to:"/random",onClick:e.closeMenu,className:"-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-indigo-400 transition ease-in-out duration-150"},"Random"),r.a.createElement("div",{className:"space-y-6"},r.a.createElement("span",{className:"w-full flex rounded-md shadow-sm"},r.a.createElement("a",{href:"/",onClick:function(){z()},className:"w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"},"Log Out")))):r.a.createElement("nav",{className:"grid gap-y-8"},r.a.createElement(s.b,{to:"/",onClick:e.closeMenu,className:"underline"},"TRICK APP"),r.a.createElement("div",{className:"space-y-6"},r.a.createElement(s.b,{to:"/login",onClick:e.closeMenu,className:"w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"},"Log In"),r.a.createElement(s.b,{to:"/register",onClick:e.closeMenu,className:"w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"},"Register"))))};var W=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],l=t[1],o=Object(P.b)(a,null,{from:{position:"absolute",opacity:0},enter:{opacity:1},leave:{opacity:0}}),s=Object(P.b)(a,null,{from:{opacity:0,transform:"translateX(-100%)"},enter:{opacity:1,transform:"translateX(0%)"},leave:{opacity:0,transform:"translateX(-100%)"}});return r.a.createElement("nav",null,r.a.createElement("span",null,r.a.createElement(_.a,{icon:L.a,onClick:function(){return l(!a)}})),o.map((function(e){var t=e.item,a=e.key,n=e.props;return t&&r.a.createElement(P.a.div,{key:a,style:n,className:"fixed bg-gray-500 bg-opacity-75 top-0 left-0 w-full h-screen z-50",onClick:function(){return l(!1)}})})),s.map((function(e){var t=e.item,a=e.key,n=e.props;return t&&r.a.createElement(P.a.div,{key:a,style:n,className:"fixed bg-indigo-300 top-0 left-0 w-4/5 h-full z-50 p-3 "},r.a.createElement(M,{closeMenu:function(){return l(!1)}}))})))},F=Object(A.layoutGenerator)({mobile:0,phablet:550,tablet:768,desktop:992}),D=F.isAtLeast("tablet"),U=F.isAtMost("phablet"),K=function(){var e=Object(n.useState)(void 0),t=Object(i.a)(e,2),a=t[0],l=t[1];Object(n.useEffect)((function(){var e=R();e&&l(e)}),[]);return r.a.createElement("div",{className:""},r.a.createElement(U,null,r.a.createElement("header",{className:"bg-indigo-300 shadow-lg border-b p-2 flex justify-between items-center"},r.a.createElement("span",{className:"px-6 font-bold"},r.a.createElement(s.b,{to:"/"},"TRICK APP")),r.a.createElement(W,null))),r.a.createElement(D,null,a?r.a.createElement("header",{className:"bg-white shadow-sm border-b p-2 flex justify-between"},r.a.createElement("div",null,r.a.createElement("span",{className:"px-6 font-bold"},r.a.createElement(s.b,{to:"/"},"TRICK APP")),r.a.createElement("span",{className:"px-4 space-x-8"},r.a.createElement(s.c,{to:"/add",className:"-m-2 p-2 space-x-2 rounded-md hover:bg-indigo-300 transition ease-in-out duration-150"},"Add"),r.a.createElement(s.c,{to:"/categories",className:"-m-2 p-2 space-x-2 rounded-md hover:bg-indigo-300 transition ease-in-out duration-150"},"Categories"),r.a.createElement(s.c,{to:"/random",className:"-m-2 p-2 space-x-2 rounded-md hover:bg-indigo-300 transition ease-in-out duration-150"},"Random"))),r.a.createElement("div",{className:"mr-1 px-4 items-left -m-2 p-2 space-x-2 rounded-md hover:bg-indigo-300 transition ease-in-out duration-150"},r.a.createElement("a",{href:"/",onClick:function(){z()}},"Log Out"))):r.a.createElement("header",{className:"bg-white shadow-sm border-b p-2 flex justify-between"},r.a.createElement("div",null,r.a.createElement("span",{className:"px-6 font-bold"},r.a.createElement(s.b,{to:"/"},"TRICK APP"))),r.a.createElement("div",{className:" items-left "},r.a.createElement("span",{className:"-m-2 mr-6 p-2 space-x-2 rounded-md hover:bg-indigo-300 transition ease-in-out duration-150"},r.a.createElement(s.b,{to:"/register"},"Register")),r.a.createElement("span",{className:"mr-1 px-4 -m-2 p-2 space-x-2 rounded-md hover:bg-indigo-300 transition ease-in-out duration-150"},r.a.createElement(s.b,{to:"/login"},"Log In"))))))},B=function(e){var t=e.match,a=e.data,n=(t.params.cats,a.filter((function(e){return e.cats==t.params.cats})));return r.a.createElement("div",{className:"md:w-3/4 h-3/4 w-full bg-gray-100"},r.a.createElement("div",{className:"mt-4 md:mt-0 p-4 bg-white shadow-md rounded text-center md:text-left "},n.length?r.a.createElement("ul",{className:"p-3 grid gap-y-6",style:{textTransform:"capitalize"}},n.map((function(e){return r.a.createElement("li",null,r.a.createElement(s.b,{to:"/categories/".concat(e.cats,"/").concat(e.id)},r.a.createElement("span",{className:"-m-3 p-3 space-x-3 rounded-md hover:bg-indigo-400 transition ease-in-out duration-150"},e.name," | ",e.cats," | ",e.user_name)))}))):r.a.createElement("h2",null,"You haven't logged a trick yet!")))},H=function(e){var t=e.match,a=Object(n.useState)([]),l=Object(i.a)(a,2),o=l[0],m=l[1],d=Object(n.useState)(!1),u=Object(i.a)(d,2),p=u[0],b=u[1];Object(n.useEffect)((function(){h()}),[]);var h=function(){var e=JSON.parse(localStorage.getItem("access_token"));g.get("tricks/?format=json",{headers:{Authorization:"JWT ".concat(e)}}).then((function(e){var t=e.data;m(t),b(!0)})).catch((function(e){console.error("Error: ".concat(e)),b(!0)}))},E=o.map((function(e){return e.cats})).filter((function(e,t,a){return a.indexOf(e)==t})).map((function(e){return r.a.createElement("li",null,r.a.createElement(s.b,{to:"".concat(t.url,"/").concat(e),className:"md:-m-3 md:p-3 md:space-x-3 -m-2 p-2 space-x-2 rounded-md hover:bg-indigo-400 transition ease-in-out duration-150"},e))}));return p?r.a.createElement("div",{className:"bg-gray-100 md:flex md:h-full h-screen w-screen p-8"},r.a.createElement("div",{className:"md:w-1/4 h-1/4 md:h-screen md:mr-4"},r.a.createElement("div",{className:"bg-white shadow-md rounded h-full pb-2 md:p-4"},r.a.createElement("div",{className:"invisible md:visible text-center md:text-left md:mb-8"},r.a.createElement("h1",null,"Categories")),r.a.createElement("div",{style:{textTransform:"capitalize"},className:"text-center md:text-left md:mt-4 mb-4"},r.a.createElement("ul",{className:"grid gap-y-4 md:gap-y-8"},E)))),r.a.createElement(c.b,{path:"".concat(t.url,"/:cats"),render:function(e){return r.a.createElement(B,Object.assign({data:o},e))}})):r.a.createElement(f,null)},q=a(38),X=a.n(q),G=function(e){var t=e.match,a=(e.num,e.data,Object(n.useState)([])),l=Object(i.a)(a,2),o=l[0],s=l[1],c=Object(n.useState)(!1),m=Object(i.a)(c,2),d=m[0],u=m[1],p=(t.params.cats,{textTransform:"capitalize"});Object(n.useEffect)((function(){b()}),[]);var b=function(){var e=JSON.parse(localStorage.getItem("access_token"));g.get("tricks/?format=json",{headers:{Authorization:"JWT ".concat(e)}}).then((function(e){var t=e.data;s(t),u(!0)})).catch((function(e){console.error("Error: ".concat(e)),u(!0)}))},h=o.filter((function(e){return e.cats==t.params.cats&e.id==t.params.id}));return d?r.a.createElement("div",{className:"p-8 h-full bg-gray-100"},h.length?r.a.createElement("div",{className:"md:flex bg-white shadow-md rounded p-4"},h.map((function(e){return r.a.createElement("div",{className:"md:w-1/4 text-center md:text-left p-4 h-40",style:p},r.a.createElement("p",null,"Trick Name: ",e.name),r.a.createElement("p",null,"Category: ",e.cats),r.a.createElement("p",null,"Skater: ",e.user_name))})),h.map((function(e){return r.a.createElement("div",{className:"h-3/4 md:w-3/4 h-screen bg-shadow content-center "},r.a.createElement("div",{className:"p-5"},r.a.createElement("div",{className:"player-wrapper"},r.a.createElement(X.a,{url:e.video,controls:!0,className:"react-player",width:"100%",height:"100%"}))))}))):r.a.createElement("h2",null,"Hmmm something went wrong there. Please try again.")):r.a.createElement(f,null)};var V=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(!1),s=Object(i.a)(o,2),c=s[0],m=s[1],d={textTransform:"capitalize"};Object(n.useEffect)((function(){u()}),[]);var u=function(){var e=JSON.parse(localStorage.getItem("access_token"));g.get("tricks/?format=json",{headers:{Authorization:"JWT ".concat(e)}}).then((function(e){var t=e.data,a=t[Math.floor(Math.random()*t.length)];l(a),m(!0)})).catch((function(e){console.error("Error: ".concat(e)),m(!0)}))};return c?r.a.createElement("div",{className:"p-8 h-full bg-gray-100"},a?r.a.createElement("div",{className:"md:flex bg-white shadow-md rounded p-4 "},r.a.createElement("div",{className:"md:w-1/4 text-center md:text-left p-4 h-40"},r.a.createElement("p",null,"Trick Name: ",r.a.createElement("span",{style:d},a.name)),r.a.createElement("p",null,"Category: ",r.a.createElement("span",{style:d},a.cats))),r.a.createElement("div",{className:"h-3/4 md:w-3/4 h-screen bg-shadow content-center "},r.a.createElement("div",{className:"p-5"},r.a.createElement("div",{className:"player-wrapper"},r.a.createElement(X.a,{url:a.video,controls:!0,className:"react-player",width:"100%",height:"100%"}))))):r.a.createElement("div",{className:"p-8 h-screen bg-gray-100"},r.a.createElement("h2",null,"Hmmm something went wrong there. Please try again."))):r.a.createElement(f,null)},Y=function(e){if(!e)return r.a.createElement("div",{class:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative",role:"alert"},r.a.createElement("strong",{class:"font-bold"},"Error"),r.a.createElement("span",{class:"block sm:inline"}," This is required!"))},$=Object(c.g)((function(e){var t=Object(n.useRef)(),a=Object(n.useRef)(),l=Object(n.useState)(""),o=Object(i.a)(l,2),s=o[0],c=o[1],m=Object(n.useState)(""),d=Object(i.a)(m,2),u=d[0],p=d[1],f=Object(n.useState)(""),b=Object(i.a)(f,2),h=b[0],v=b[1];return r.a.createElement("div",{className:"bg-gray-100 h-screen"},r.a.createElement("div",{className:"w-full flex justify-center pt-8"},r.a.createElement(E.a,{onSubmit:function(n){n.preventDefault(),t.current.validateAll(),0===a.current.context._errors.length&&g.post("user/create/",{username:s,password:u,email:h}).then(e.history.push("/"),window.location.reload())},ref:t,className:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"},r.a.createElement("div",{className:"mb-8"},r.a.createElement("div",{className:"form-group mb-4"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement(x.a,{type:"email",name:"email",value:h,className:"form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:"Email",onChange:function(e){return v(e.target.value)},validations:[Y]})),r.a.createElement("div",{className:"form-group mb-4"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement(x.a,{type:"text",name:"username",value:s,className:"form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:"Username",onChange:function(e){return c(e.target.value)},validations:[Y]})),r.a.createElement("div",{className:"form-group mb-4"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement(x.a,{type:"password",name:"password",value:u,className:"form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:"Password",onChange:function(e){return p(e.target.value)},validations:[Y]}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"},r.a.createElement("span",null,"Register"))),r.a.createElement(y.a,{style:{display:"none"},ref:a}))))}));var Q=function(){return r.a.createElement("div",{className:"bg-gray-100 h-screen"},r.a.createElement("div",{className:"pt-8"},r.a.createElement(j,null)))};var Z=function(){return r.a.createElement("div",{className:"bg-gray-100 h-screen"},r.a.createElement("div",{className:"p-3 text-center"},r.a.createElement("p",null,"Hmm something went wrong there. This page doesn't exist.")))},ee=function(e){if(!e)return r.a.createElement("div",{class:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative",role:"alert"},r.a.createElement("strong",{class:"font-bold"},"Error"),r.a.createElement("span",{class:"block sm:inline"}," This is required!"))},te=Object(c.g)((function(e){var t=Object(n.useRef)(),a=Object(n.useRef)(),l=Object(n.useState)(""),o=Object(i.a)(l,2),s=o[0],c=o[1],m=Object(n.useState)(""),d=Object(i.a)(m,2),u=d[0],p=d[1],f=Object(n.useState)(!1),b=Object(i.a)(f,2),h=b[0],v=b[1],w=Object(n.useState)(""),N=Object(i.a)(w,2),j=N[0],k=N[1];return r.a.createElement("div",{className:"h-screen bg-gray-100"},r.a.createElement("div",{className:"w-full flex justify-center pt-8"},r.a.createElement(E.a,{onSubmit:function(n){n.preventDefault(),k(""),v(!0),t.current.validateAll(),0===a.current.context._errors.length&&g.post("token/obtain/",{username:s,password:u}).then((function(t){try{localStorage.setItem("access_token",JSON.stringify(t.data.access)),localStorage.setItem("refresh_token",JSON.stringify(t.data.refresh)),e.history.push("/"),window.location.reload()}catch(a){console.log("The error is: "+a),k("Try again!")}}))},ref:t,className:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"},r.a.createElement("div",{className:"mb-8"},r.a.createElement("div",{className:"form-group mb-4"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement(x.a,{type:"text",name:"username",value:s,className:"form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:"Username",onChange:function(e){return c(e.target.value)},validations:[ee]})),r.a.createElement("div",{className:"form-group mb-4"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement(x.a,{type:"password",name:"password",value:u,className:"form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:"Password",onChange:function(e){return p(e.target.value)},validations:[ee]}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{disabled:h,className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"},r.a.createElement("span",null,"Log In"))),j&&r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{class:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative",role:"alert"},r.a.createElement("strong",{class:"font-bold"},"Error "),r.a.createElement("span",{class:""},j))),r.a.createElement(y.a,{style:{display:"none"},ref:a}))))}));var ae=function(){return r.a.createElement("div",{className:"bg-gray-100 h-screen"},r.a.createElement("div",{className:"p-3 text-center"},r.a.createElement("p",null,"Please ",r.a.createElement(s.b,{to:"/login"},r.a.createElement("span",{className:"text-indigo-300"},"sign in "))," or ",r.a.createElement(s.b,{to:"/register"},r.a.createElement("span",{className:"text-indigo-300"},"register")),".")))},ne=a(87),re=function(e){var t=e.component,a=(e.auth,Object(ne.a)(e,["component","auth"]));return r.a.createElement(c.b,Object.assign({},a,{render:function(e){return!0===R()?r.a.createElement(t,e):r.a.createElement(c.a,{to:"/home"})}}))};var le=function(){return r.a.createElement(s.a,null,r.a.createElement(K,null),r.a.createElement(c.d,null,r.a.createElement(c.b,{exact:!0,path:"/login"},r.a.createElement(te,null)),r.a.createElement(c.b,{path:"/register"},r.a.createElement($,null)),r.a.createElement(c.b,{path:"/home"},r.a.createElement(ae,null)),r.a.createElement(re,{exact:!0,path:"/",component:I}),r.a.createElement(re,{path:"/add",component:Q}),r.a.createElement(re,{path:"/random",component:V}),r.a.createElement(re,{path:"/categories/:cats/:id",component:G}),r.a.createElement(re,{path:"/categories",component:H}),r.a.createElement(c.b,{component:Z})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},88:function(e,t,a){e.exports=a(179)},93:function(e,t,a){}},[[88,1,2]]]);
//# sourceMappingURL=main.a86de433.chunk.js.map