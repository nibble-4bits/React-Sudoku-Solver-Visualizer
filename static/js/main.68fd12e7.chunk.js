(this["webpackJsonpreact-sudoku-solver-visualizer"]=this["webpackJsonpreact-sudoku-solver-visualizer"]||[]).push([[0],{22:function(n,e,r){},27:function(n,e,r){"use strict";r.r(e);var t=r(0),o=r.n(t),i=r(13),a=r.n(i),c=(r(22),r(2)),u=r(3),l=r(6),s=r.n(l),f=r(7),d=r(5),b=r(4),h=r(14);function v(n,e,r){return n<e?e:n>r?r:n}function g(n){return n.map((function(n){return Array.isArray(n)?g(n):n}))}function p(n){return j.apply(this,arguments)}function j(){return(j=Object(f.a)(s.a.mark((function n(e){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(0!==e){n.next=2;break}return n.abrupt("return");case 2:return n.abrupt("return",new Promise((function(n){setTimeout(n,e)})));case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function O(n,e){if(n>=e)throw new Error("min param MUST be less than max");return Math.floor(Math.random()*(e-n+1))+n}function m(n){for(var e=g(n),r=e.length-1;r>0;r--){var t=O(0,r),o=e[r];e[r]=e[t],e[t]=o}return e}function x(){return Array.from({length:9},(function(){return Array.from({length:9},(function(){return 0}))}))}function w(n,e,r,t){if(n<0||e<0)return!1;for(var o=n-n%3,i=o+3,a=e-e%3,c=a+3,u=o;u<i;u++)for(var l=a;l<c;l++)if(u===r&&l===t)return!0;return!1}function y(n,e,r,t){return function(n,e,r){for(var t=0;t<r[e].length;t++){if(n===r[e][t])return!1}return!0}(n,e,t)&&function(n,e,r){for(var t=0;t<r.length;t++){if(n===r[t][e])return!1}return!0}(n,r,t)&&function(n,e,r,t){for(var o=e-e%3,i=o+3,a=r-r%3,c=a+3,u=o;u<i;u++)for(var l=a;l<c;l++){if(n===t[u][l])return!1}return!0}(n,e,r,t)}function k(n){for(var e=0;e<n.length;e++)for(var r=0;r<n[e].length;r++)if(!n[e][r])return[e,r];return null}function C(n){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=arguments.length>2?arguments[2]:void 0;r&&r.push(g(n));var t=k(n);if(!t)return!0;var o=Object(b.a)(t,2),i=o[0],a=o[1],c=[1,2,3,4,5,6,7,8,9];e||(c=m(c));var u,l=Object(h.a)(c);try{for(l.s();!(u=l.n()).done;){var s=u.value;if(y(s,i,a,n)){if(n[i][a]=s,C(n,e,r))return!0;n[i][a]=0}}}catch(f){l.e(f)}finally{l.f()}return!1}var S,A=r(1),D=u.a.input(S||(S=Object(c.a)(["\n  width: 100%;\n  height: 100%;\n  border: 1px solid #000;\n  border-left: ",";\n  border-top: ",";\n  background-color: ",";\n  outline: none;\n  font-size: 4rem;\n  text-align: center;\n  padding: 0;\n\n  &:disabled {\n    background-color: #fff;\n    color: #000;\n  }\n\n  // Hide increment/decrement arrows\n  -moz-appearance: textfield;\n  &::-webkit-outer-spin-button,\n  &::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n"])),(function(n){return n.col>0&&n.col%3===0&&"3px solid #000"}),(function(n){return n.row>0&&n.row%3===0&&"3px solid #000"}),(function(n){return n.highlight&&"#ddd"}));function F(n,e){var r=n.row,t=n.col,o=n.value,i=n.onChange,a=n.onFocus,c=n.isHighlighted,u=n.disabled,l=n.onKeyDown;return Object(A.jsx)(D,{ref:e,type:"number",min:"1",max:"9",onKeyDown:function(n){l&&l(n);var e=n.key,r=n.target.value;["ArrowUp","ArrowDown"].includes(e)&&n.preventDefault(),r&&/\d/.test(e)&&n.preventDefault()},onChange:i,onFocus:function(){a([r,t])},onBlur:function(){a([-1,-1])},value:o||"",row:r,col:t,disabled:u,highlight:c})}var z,I=Object(t.forwardRef)(F),B=u.a.div(z||(z=Object(c.a)(["\n  width: 600px;\n  height: 600px;\n  display: grid;\n  grid-template-rows: repeat(9, 1fr);\n  grid-template-columns: repeat(9, 1fr);\n  border: 5px solid #000;\n  overflow: hidden;\n"])));var R,U,E,M,T,H,K=function(n){var e=n.board,r=n.setBoardCell,o=n.disableUserInput,i=Object(t.useState)([-1,-1]),a=Object(b.a)(i,2),c=a[0],u=a[1],l=Object(b.a)(c,2),s=l[0],f=l[1],d=Object(t.useRef)(Array.from({length:9},(function(){return Array.from({length:9},(function(){return Object(t.createRef)()}))}))),h=function(n){var r,t,o,i,a=n.key,c=v(s-1,0,e.length-1),u=v(s+1,0,e.length-1),l=v(f-1,0,e.length-1),b=v(f+1,0,e.length-1);switch(a){case"ArrowUp":null===(r=d.current[c][f].current)||void 0===r||r.focus();break;case"ArrowDown":null===(t=d.current[u][f].current)||void 0===t||t.focus();break;case"ArrowLeft":null===(o=d.current[s][l].current)||void 0===o||o.focus();break;case"ArrowRight":null===(i=d.current[s][b].current)||void 0===i||i.focus()}};return Object(A.jsx)(B,{children:e.map((function(n,t){return n.map((function(n,i){return Object(A.jsx)(I,{ref:d.current[t][i],row:t,col:i,value:n,onChange:function(n){!function(n,t,o){var i=parseInt(n.target.value);y(i,t,o,e)&&r(i,t,o)}(n,t,i)},onFocus:u,isHighlighted:(l=s,b=t,!(l<0)&&l===b||(a=f,c=i,!(a<0)&&a===c)||w(s,f,t,i)),disabled:o,onKeyDown:h},t+i);var a,c,l,b}))}))})},L=u.a.div(R||(R=Object(c.a)(["\n  display: grid;\n  grid-template-rows: 10fr 4rem 4rem;\n  gap: 2rem;\n"]))),P=u.a.div(U||(U=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n"]))),J=u.a.label(E||(E=Object(c.a)(["\n  font-size: 2rem;\n"]))),G=u.a.input(M||(M=Object(c.a)(["\n  width: 10rem;\n  height: 75%;\n  text-align: center;\n  font-size: 2rem;\n"]))),q=u.a.div(T||(T=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  gap: 5rem;\n"]))),N=u.a.button(H||(H=Object(c.a)(["\n  color: #fff;\n  background-color: #267ef1;\n  font-size: 1.8rem;\n  width: 20%;\n  border: none;\n  border-radius: 5px;\n\n  &:hover {\n    background-color: #256cca;\n    cursor: pointer;\n  }\n\n  &:disabled {\n    background-color: #478fec;\n    cursor: not-allowed;\n  }\n"])));var Q,V=function(){var n=Object(t.useState)(x()),e=Object(b.a)(n,2),r=e[0],o=e[1],i=Object(t.useState)([]),a=Object(b.a)(i,2),c=a[0],u=a[1],l=Object(t.useState)("1"),h=Object(b.a)(l,2),v=h[0],j=h[1],w=Object(t.useState)({isSolving:!1,isCleared:!1}),y=Object(b.a)(w,2),k=y[0],S=y[1],D=Object(t.useRef)(0);return Object(t.useEffect)((function(){k.isCleared&&(o(x()),S((function(n){return Object(d.a)(Object(d.a)({},n),{},{isCleared:!1})})),D.current=0)}),[k.isCleared]),Object(t.useEffect)((function(){var n=parseInt(v),e=!1;function r(){return(r=Object(f.a)(s.a.mark((function r(){var t,i;return s.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(0!==n){r.next=4;break}o(c[c.length-1]),r.next=15;break;case 4:t=D.current;case 5:if(!(t<c.length)){r.next=15;break}if(i=c[t],e){r.next=12;break}return D.current=t,o(i),r.next=12,p(n);case 12:t++,r.next=5;break;case 15:case"end":return r.stop()}}),r)})))).apply(this,arguments)}return k.isSolving&&function(){r.apply(this,arguments)}(),function(){e=!0}}),[v,c,k.isSolving]),Object(A.jsxs)(L,{children:[Object(A.jsx)(K,{board:r,setBoardCell:function(n,e,t){var i=r.slice();i[e][t]=n,o(i)},disableUserInput:k.isSolving}),Object(A.jsxs)(P,{children:[Object(A.jsx)(J,{htmlFor:"solving-speed-input",children:"Solving speed (ms):"}),Object(A.jsx)(G,{id:"solving-speed-input",type:"number",min:"0",max:"3000",value:v,onChange:function(n){j(n.target.value)}})]}),Object(A.jsxs)(q,{children:[Object(A.jsx)(N,{type:"button",onClick:function(){S({isSolving:!1,isCleared:!0})},children:"Clear"}),Object(A.jsx)(N,{type:"button",onClick:function(){S((function(n){return Object(d.a)(Object(d.a)({},n),{},{isSolving:!0})}));var n=function(n){var e=[];return C(n,!0,e)?e:null}(g(r));n&&u(n),D.current=0},disabled:k.isSolving,children:"Solve"}),Object(A.jsx)(N,{type:"button",onClick:function(){o(function(){var n=Array.from({length:9},(function(){return Array.from({length:9},(function(){return 0}))})),e=[];C(n,!1);for(var r=0;r<n.length;r++)for(var t=0;t<n[r].length;t++)e.push([r,t]);for(var o=O(48,62),i=m(e).slice(0,o),a=0;a<i.length;a++){var c=Object(b.a)(i[a],2),u=c[0],l=c[1];n[u][l]=0}return n}()),S((function(n){return Object(d.a)(Object(d.a)({},n),{},{isSolving:!1})})),D.current=0},children:"Generate"})]})]})},W=u.a.div(Q||(Q=Object(c.a)(["\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));var X=function(){return Object(A.jsx)(W,{children:Object(A.jsx)(V,{})})},Y=function(n){n&&n instanceof Function&&r.e(3).then(r.bind(null,28)).then((function(e){var r=e.getCLS,t=e.getFID,o=e.getFCP,i=e.getLCP,a=e.getTTFB;r(n),t(n),o(n),i(n),a(n)}))};a.a.render(Object(A.jsx)(o.a.StrictMode,{children:Object(A.jsx)(X,{})}),document.getElementById("root")),Y()}},[[27,1,2]]]);
//# sourceMappingURL=main.68fd12e7.chunk.js.map