(this["webpackJsonpreact-practice"]=this["webpackJsonpreact-practice"]||[]).push([[0],{174:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(62),i=n.n(r),s=n(11),j=n(2),o=n(4),u=n.n(o),l=n(0);var b=function(){var e=Object(c.useRef)(),t=function(){return e.current.style.width=0};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:u.a.top,children:Object(l.jsx)("div",{onClick:function(){return e.current.style.width="300px"},children:"Menu"})}),Object(l.jsxs)("div",{ref:e,className:u.a.menu,style:{width:0},children:[Object(l.jsx)(s.b,{to:"/",onClick:t,children:"About"}),Object(l.jsx)(s.b,{to:"/TodoList",onClick:t,children:"TodoList"}),Object(l.jsx)(s.b,{to:"/CoinGraph",onClick:t,children:"CoinGraph"}),Object(l.jsx)(s.b,{to:"/MultiCoinGraph",onClick:t,children:"MultiCoinGraph"}),Object(l.jsx)(s.b,{to:"/SubmitForm",onClick:t,children:"SubmitForm"}),Object(l.jsx)(s.b,{to:"/Temp",onClick:t,children:"\uac10\uc790\ud280\uae40"})]})]})},d=n(27),O=n(12),h=n(5),p=n(64);function x(e){var t=Object(c.useState)(e),n=Object(h.a)(t,2),a=n[0],r=n[1],i=function(e){return r(e.target.value)};return{attr:{value:a,onChange:i},entire:{value:a,onChange:i,setValue:r}}}function m(e){var t=e.value,n=e.deleteHandler,a=Object(c.useState)(!1),r=Object(h.a)(a,2),i=r[0],s=r[1],j=x(t.text).attr;return Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{onClick:n,children:"x"}),i?Object(l.jsx)("input",Object(O.a)(Object(O.a)({},j),{},{onKeyPress:function(e){"Enter"===e.key&&(console.log(i),""===j.value?n():s(!1))},onBlur:function(){return s(!1)},autoFocus:!0})):Object(l.jsx)("span",{onClick:function(){return s(!0)},children:j.value})]})}function v(){var e=Object(c.useState)(""),t=Object(h.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)({}),i=Object(h.a)(r,2),s=i[0],j=i[1],o=function(){var e={key:Object(p.uuid)(),text:n};u(e),a("")},u=function(e){var t=e.key;j(Object(O.a)(Object(O.a)({},s),{},Object(d.a)({},t,e)))};return Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{value:n,onChange:function(e){return a(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&""!==n&&o()}}),Object(l.jsx)("button",{onClick:o,children:"+"}),Object.values(s).map((function(e){return Object(l.jsx)(m,{value:e,deleteHandler:function(){return function(e){var t=Object.assign({},s);delete t[e.key],j(t)}(e)}},e.key)}))]})}var f=function(){return Object(l.jsxs)("div",{className:u.a.main,children:[Object(l.jsx)("h3",{children:"\ud560 \uc77c \ubaa9\ub85d\uc744 \uad00\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. (\ub370\uc774\ud130\ub294 \uc5b4\ub514\uc5d0\ub3c4 \uc800\uc7a5\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.)"}),Object(l.jsx)(v,{})]})};var g=function(){return Object(l.jsxs)("div",{className:u.a.main,children:[Object(l.jsx)("h1",{children:"This is my React page"}),Object(l.jsx)("img",{src:"/react-practice/favicon.ico",alt:"react icon"}),Object(l.jsx)("img",{src:"/react-practice/favicon.ico",alt:"react icon"}),Object(l.jsx)("img",{src:"/react-practice/favicon.ico",alt:"react icon"})]})},k=n(13),C=n.n(k),y=n(20),_=n(29);function S(){return(S=Object(y.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.upbit.com/v1/candles/minutes/1?market=".concat(t,"&count=200")).then((function(e){return e.json()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=function(){var e=Object(c.useState)("KRW-BTC"),t=Object(h.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)({}),i=Object(h.a)(r,2),s=i[0],j=i[1],o=Object(c.useState)({responsive:!1,scales:{xAxes:[{ticks:{display:!1}}]},elements:{line:{tension:0}}}),b=Object(h.a)(o,1)[0];return Object(c.useEffect)((function(){(function(e){return S.apply(this,arguments)})(n).then((function(e){e=e.reverse();var t={datasets:[]};t.labels=e.map((function(e){return new Date(e.candle_date_time_kst)})),t.datasets.push({label:"Trade Price",data:e.map((function(e){return e.trade_price})),backgroundColor:"rgba(0,0,0,0.1)"}),j(t)}))}),[n]),Object(l.jsxs)("div",{className:u.a.main,children:[Object(l.jsx)("h3",{children:"\uac00\uc0c1\ud654\ud3d0 \uac70\ub798\uc18c\uc5d0\uc11c \ucd5c\uadfc 200\ubd84\uc758 \uac70\ub798\uc815\ubcf4\ub97c \uac00\uc838\uc640 \uadf8\ub798\ud504\ub85c \ucd9c\ub825\ud569\ub2c8\ub2e4. "}),Object(l.jsx)("span",{children:"\uac00\uc0c1\ud654\ud3d0\ub97c \uc120\ud0dd : "}),Object(l.jsxs)("select",{value:n,onChange:function(e){return a(e.target.value)},children:[Object(l.jsx)("option",{value:"KRW-BTC",children:"\ube44\ud2b8\ucf54\uc778"}),Object(l.jsx)("option",{value:"KRW-ETH",children:"\uc774\ub354\ub9ac\uc6c0"}),Object(l.jsx)("option",{value:"KRW-PCI",children:"\ud398\uc774\ucf54\uc778"})]}),Object(l.jsx)("div",{children:Object(l.jsx)(_.Line,{width:1e3,height:500,data:s,options:b})})]})},N=n(43),T=n(65),M=n.n(T);function E(e,t){return K.apply(this,arguments)}function K(){return(K=Object(y.a)(C.a.mark((function e(t,n){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.upbit.com/v1/candles/minutes/1?market=".concat(t,"&count=").concat(n)).then((function(e){return e.json()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e){var t=e.data,n=e.name,a=t||[],r=(a=(a=(a=a.datasets||[])[0]||[]).data||[])[a.length-1],i=Math.max.apply(Math,Object(N.a)(a)),s=Math.min.apply(Math,Object(N.a)(a)),j=Math.round(1e4*(i/s-1))/100,o=Object(c.useState)({responsive:!1,legend:{display:!1},elements:{line:{borderColor:"#000000",borderWidth:1},point:{radius:0}},tooltips:{enabled:!1},scales:{yAxes:[{display:!1}],xAxes:[{display:!1}]}}),u=Object(h.a)(o,1)[0];return Object(l.jsxs)("div",{children:[Object(l.jsx)(_.Line,{width:160,height:90,data:t,options:u}),Object(l.jsxs)("span",{children:[n," ",r," : ",j,"%"]})]})}var R=function(){var e=Object(c.useState)(["PCI","DKA","ETH","NPXS","BTC","BTT","MVL","XRP"]),t=Object(h.a)(e,1)[0],n=Object(c.useState)(0),a=Object(h.a)(n,2),r=a[0],i=a[1],s=Object(c.useState)(t.map((function(e){return{}}))),j=Object(h.a)(s,2),o=j[0],b=j[1];return Object(c.useEffect)((function(){var e=setInterval(Object(y.a)(C.a.mark((function e(){var n,c,a,s,j;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=2;break}return e.abrupt("return");case 2:return n=t[r],e.next=5,E("KRW-"+n,60);case 5:c=e.sent,a=c.reverse(),c.error||((s={datasets:[]}).labels=a.map((function(e){return new Date(e.candle_date_time_kst)})),s.datasets.push({label:"Trade Price",data:a.map((function(e){return e.trade_price})),backgroundColor:"rgba(0,0,0,0.1)"}),(j=o.map((function(e){return e})))[r]=s,b(j)),i(r+1>=t.length?0:r+1);case 9:case"end":return e.stop()}}),e)}))),200);return function(){return clearInterval(e)}}),[t,r,o]),Object(l.jsxs)("div",{className:u.a.main,children:[Object(l.jsx)("h3",{children:"\uc5ec\ub7ec\uac1c\uc758 \uac00\uc0c1\ud654\ud3d0\ub97c \ud55c \ubc88\uc5d0 \ud45c\uc2dc\ud569\ub2c8\ub2e4. "}),Object(l.jsx)("div",{className:M.a.flex,children:t.map((function(e,t){return Object(l.jsx)(P,{data:o[t],name:e},t)}))})]})};var G=function(){var e=x("");return Object(l.jsxs)("div",{className:u.a.main,children:[Object(l.jsx)("h3",{children:"Form \uc758 \uac01 value \ub97c \uc720\ud6a8\uc131 \uac80\uc0ac\ub97c \ud558\uace0 submit. (\ubbf8\uc644\uc131. \ub370\uc774\ud130\ub294 \uc5b4\ub514\uc5d0\ub3c4 \uc800\uc7a5\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.)"}),Object(l.jsxs)("form",{children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:"\uc774\ub984 : "}),Object(l.jsx)("input",Object(O.a)(Object(O.a)({},e),{},{name:"userName"}))]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:"\uc131\ubcc4 : "}),Object(l.jsx)("input",{id:"male",type:"radio",name:"gender"}),Object(l.jsx)("label",{id:"male",children:"\ub0a8"}),Object(l.jsx)("input",{id:"female",type:"radio",name:"gender"}),Object(l.jsx)("label",{id:"female",children:"\uc5ec"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:"\uc0ac\uc9c4 : "}),Object(l.jsx)("input",{type:"file"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:"\uc774\uba54\uc77c : "}),Object(l.jsx)("input",{}),Object(l.jsx)("span",{children:"(focus \ub97c \uc783\uc744 \ub54c \uc774\uba54\uc77c \ud615\uc2dd\uc778\uc9c0 \uc720\ud6a8\uc131 \uac80\uc0ac \ud544\uc694)"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:"\ud734\ub300\uc804\ud654 : "}),Object(l.jsx)("input",{}),Object(l.jsx)("span",{children:"(\uc22b\uc790, - \uc678\uc758 \ubb38\uc790\ub294 \ubc1b\uc9c0 \uc54a\ub3c4\ub85d \ub9cc\ub4e4\uc5b4\uc57c \ud568)"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:"\ucde8\ubbf8 : "}),Object(l.jsxs)("select",{children:[Object(l.jsx)("option",{children:"\uadf8\ub9bc"}),Object(l.jsx)("option",{children:"\uc6b4\ub3d9"}),Object(l.jsx)("option",{children:"\uc74c\uc545\uac10\uc0c1"}),Object(l.jsx)("option",{children:"\ud504\ub85c\uadf8\ub798\ubc0d"}),Object(l.jsx)("option",{children:"\uae30\ud0c0"})]}),Object(l.jsx)("span",{children:"(\ucd5c\ub300 5 \uac00\uc9c0\uc758 \ucde8\ubbf8\ub97c \uc120\ud0dd\ud560 \uc218 \uc788\ub3c4\ub85d \ub9cc\ub4e4\uc5b4\uc57c \ud568)"})]}),Object(l.jsx)("button",{type:"submit",children:"\uc81c\ucd9c"})]})]})};var B=function(){return Object(l.jsx)("div",{className:u.a.main,children:Object(l.jsx)("h1",{children:"\ub9db\uc788\uc5b4"})})};var F=function(){return Object(l.jsxs)(s.a,{children:[Object(l.jsx)(b,{}),Object(l.jsx)(j.a,{path:"/",exact:!0,component:g}),Object(l.jsx)(j.a,{path:"/TodoList",component:f}),Object(l.jsx)(j.a,{path:"/CoinGraph",component:w}),Object(l.jsx)(j.a,{path:"/MultiCoinGraph",component:R}),Object(l.jsx)(j.a,{path:"/SubmitForm",component:G}),Object(l.jsx)(j.a,{path:"/Temp",component:B})]})};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(F,{})}),document.getElementById("root"))},4:function(e,t,n){e.exports={menu:"SideNavigator_menu__3JUCY",top:"SideNavigator_top__kNJE5",main:"SideNavigator_main__eDcdh"}},65:function(e,t,n){e.exports={flex:"MultiCoinGraph_flex__222yr"}}},[[174,1,2]]]);
//# sourceMappingURL=main.178922cc.chunk.js.map