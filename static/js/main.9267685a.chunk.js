(this["webpackJsonpcurso-intro-react"]=this["webpackJsonpcurso-intro-react"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),c=n(4),a=n.n(c),l=n(6),s=n(2);var i=n(0),u=r.a.createContext();function d(e){var t=function(e,t){var n=r.a.useState(!1),o=Object(s.a)(n,2),c=o[0],a=o[1],l=r.a.useState(!0),i=Object(s.a)(l,2),u=i[0],d=i[1],j=r.a.useState(t),f=Object(s.a)(j,2),O=f[0],b=f[1];return r.a.useEffect((function(){setTimeout((function(){try{var n,o=localStorage.getItem(e);o?n=JSON.parse(o):(localStorage.setItem(e,JSON.stringify(t)),n=t),b(n),d(!1)}catch(c){a(c)}}),3e3)})),{item:O,saveItem:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e,n),b(t)}catch(c){a(c)}},loading:u,error:c}}("TODOS_V1",[]),n=t.item,o=t.saveItem,c=t.loading,a=t.error,d=r.a.useState(""),j=Object(s.a)(d,2),f=j[0],O=j[1],b=r.a.useState(!1),p=Object(s.a)(b,2),m=p[0],x=p[1],h=n.filter((function(e){return!!e.completed})).length,v=n.length,g=[];g=!f.length>=1?n:n.filter((function(e){var t=e.text.toLowerCase(),n=f.toLowerCase();return t.includes(n)}));return Object(i.jsx)(u.Provider,{value:{loading:c,error:a,totalTodos:v,completedTodos:h,searchValue:f,setSearchValue:O,searchedTodos:g,addTodo:function(e){var t=Object(l.a)(n);t.push({completed:!1,text:e}),o(t)},completeTodo:function(e){var t=n.findIndex((function(t){return t.text===e})),r=Object(l.a)(n);r[t].completed=!0,o(r)},deleteTodo:function(e){var t=n.findIndex((function(t){return t.text===e})),r=Object(l.a)(n);r.splice(t,1),o(r)},openModal:m,setOpenModal:x},children:e.children})}n(13);function j(){var e=r.a.useContext(u),t=e.totalTodos,n=e.completedTodos;return Object(i.jsxs)("h2",{className:"TodoCounter",children:["Has completado ",n," de ",t," TODOs"]})}n(14);function f(){var e=r.a.useContext(u),t=e.searchValue,n=e.setSearchValue;return Object(i.jsx)("input",{className:"TodoSearch",placeholder:"Escriba el TODO a buscar",value:t,onChange:function(e){console.log(e.target.value),n(e.target.value)}})}n(15);function O(e){return Object(i.jsx)("section",{children:Object(i.jsx)("ul",{children:e.children})})}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=o.createElement("path",{d:"M393.401,124.425L179.603,338.208c-15.832,15.835-41.514,15.835-57.361,0L11.878,227.836 c-15.838-15.835-15.838-41.52,0-57.358c15.841-15.841,41.521-15.841,57.355-0.006l81.698,81.699L336.037,67.064 c15.841-15.841,41.523-15.829,57.358,0C409.23,82.902,409.23,108.578,393.401,124.425z"});function x(e,t){var n=e.title,r=e.titleId,c=p(e,["title","titleId"]);return o.createElement("svg",b({viewBox:"0 0 405.272 405.272",xmlSpace:"preserve",ref:t,"aria-labelledby":r},c),n?o.createElement("title",{id:r},n):null,m)}var h=o.forwardRef(x);n.p;function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var y=o.createElement("path",{d:"M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85 c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563 c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85 l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554 L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"});function T(e,t){var n=e.title,r=e.titleId,c=g(e,["title","titleId"]);return o.createElement("svg",v({viewBox:"0 0 348.333 348.334",xmlSpace:"preserve",ref:t,"aria-labelledby":r},c),n?o.createElement("title",{id:r},n):null,y)}var C=o.forwardRef(T),I=(n.p,n(16),{check:function(e){return Object(i.jsx)(h,{className:"Icon-svg Icon-svg--check",fill:e})},delete:function(e){return Object(i.jsx)(C,{className:"Icon-svg Icon-svg--delete",fill:e})}});function S(e){var t=e.type,n=e.color,o=void 0===n?"gray":n,r=e.onClick;return Object(i.jsx)("span",{className:"Icon-container Icon-container--".concat(t),onClick:r,children:I[t](o)})}function N(e){var t=e.completed,n=e.onComplete;return Object(i.jsx)(S,{type:"check",color:t?"#4caf50":"gray",onClick:n})}function k(e){var t=e.onDelete;return Object(i.jsx)(S,{type:"delete",onClick:t})}n(17);function w(e){return Object(i.jsxs)("li",{className:"TodoItem",children:[Object(i.jsx)(N,{completed:e.completed,onComplete:e.onComplete}),Object(i.jsx)("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--complete"),children:e.text}),Object(i.jsx)(k,{onDelete:e.onDelete})]})}function E(){return Object(i.jsx)("p",{children:"Desesp\xe9rate, hubo un error..."})}n(18);function L(){return Object(i.jsxs)("div",{className:"LoadingTodo-container",children:[Object(i.jsx)("span",{className:"LoadingTodo-completeIcon"}),Object(i.jsx)("p",{className:"LoadingTodo-text",children:"Cargando TODOs..."}),Object(i.jsx)("span",{className:"LoadingTodo-deleteIcon"})]})}function D(){return Object(i.jsx)("p",{children:"\xa1Crea tu primer TODO!"})}n(19);function M(){var e=r.a.useState(""),t=Object(s.a)(e,2),n=t[0],o=t[1],c=r.a.useContext(u),a=c.addTodo,l=c.setOpenModal;return Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a(n),l(!1)},children:[Object(i.jsx)("label",{children:"Escribe tu nuevo TODO"}),Object(i.jsx)("textarea",{value:n,onChange:function(e){o(e.target.value)},placeholder:"Escriba el TODO que se quiere agregar."}),Object(i.jsxs)("div",{className:"TodoForm-buttonContainer",children:[Object(i.jsx)("button",{type:"button",className:"TodoForm-button TodoForm-button--cancel",onClick:function(){l(!1)},children:"Cancelar"}),Object(i.jsx)("button",{type:"submit",className:"TodoForm-button TodoForm-button--add",children:"A\xf1adir"})]})]})}n(20);function P(e){return Object(i.jsx)("button",{className:"CreateTodoButton",onClick:function(){e.setOpenModal((function(e){return!e}))},children:"+"})}n(21);function B(e){var t=e.children;return a.a.createPortal(Object(i.jsx)("div",{className:"ModalBackground",children:t}),document.getElementById("modal"))}function F(){var e=r.a.useContext(u),t=e.error,n=e.loading,o=e.searchedTodos,c=e.completeTodo,a=e.deleteTodo,l=e.openModal,s=e.setOpenModal;return Object(i.jsxs)(r.a.Fragment,{children:[Object(i.jsx)(j,{}),Object(i.jsx)(f,{}),Object(i.jsxs)(O,{children:[t&&Object(i.jsx)(E,{}),n&&Object(i.jsx)(L,{}),!n&&!o.length&&Object(i.jsx)(D,{}),o.map((function(e){return Object(i.jsx)(w,{text:e.text,completed:e.completed,onComplete:function(){return c(e.text)},onDelete:function(){return a(e.text)}},e.text)}))]}),!!l&&Object(i.jsx)(B,{children:Object(i.jsx)(M,{})}),Object(i.jsx)(P,{setOpenModal:s})]})}var J=function(){return Object(i.jsx)(d,{children:Object(i.jsx)(F,{})})};n(22);a.a.render(Object(i.jsx)(J,{}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.9267685a.chunk.js.map