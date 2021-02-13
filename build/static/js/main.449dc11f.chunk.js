(this["webpackJsonppocket-stocks-client"]=this["webpackJsonppocket-stocks-client"]||[]).push([[0],{32:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(20),a=c.n(r),o=c(11),i=c(25),l=c(2),j=c(0),u=Object(n.createContext)(),d=function(e){var t=Object(n.useState)([]),c=Object(l.a)(t,2),s=c[0],r=c[1],a=Object(n.useState)(null),o=Object(l.a)(a,2),d=o[0],h=o[1],b=Object(n.useState)(null),p=Object(l.a)(b,2),O=p[0],x=p[1];return Object(j.jsx)(u.Provider,{value:{stocks:s,setStocks:r,addStock:function(e){r([].concat(Object(i.a)(s),[e]))},selectedStock:d,setSelectedStock:h,selectedTickerSymbol:O,setSelectedTickerSymbol:x},children:e.children})},h=c(3),b=(c(32),function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{className:"header",children:"Pocket Stocks"})})}),p=c(5),O=c.n(p),x=c(9),m=(c(34),function(e){var t=Object(n.useContext)(u),c=t.addStock,s=(t.addPosting,Object(n.useState)("")),r=Object(l.a)(s,2),a=r[0],o=r[1],i=Object(n.useState)(0),d=Object(l.a)(i,2),h=d[0],b=d[1],p=Object(n.useState)("Select"),m=Object(l.a)(p,2),f=m[0],v=m[1],k=Object(n.useState)("Select"),S=Object(l.a)(k,2),g=S[0],y=S[1],N=Object(n.useState)("Enter up to 120 characters in a post"),w=Object(l.a)(N,2),E=w[0],C=w[1];return Object(j.jsx)("div",{className:"addStockSection",children:Object(j.jsxs)("form",{action:"submit",children:[Object(j.jsxs)("div",{className:"form-row",children:[Object(j.jsx)("div",{className:"form-column",children:Object(j.jsx)("input",{type:"text",className:"inputTickerSymbol",placeholder:"Ticker Symbol",value:a,onChange:function(e){return o(e.target.value)}})}),Object(j.jsx)("div",{className:"form-column",children:Object(j.jsx)("input",{type:"number",className:"inputPurchasePrice",placeholder:"Purchase Price",value:h,onChange:function(e){return b(e.target.value)}})}),Object(j.jsx)("div",{className:"form-column",children:Object(j.jsxs)("select",{className:"chooseStatus",value:f,onChange:function(e){return v(e.target.value)},children:[Object(j.jsx)("option",{disabled:!0,children:"Select"}),Object(j.jsx)("option",{value:"BUY",children:"BUY"}),Object(j.jsx)("option",{value:"HOLD",children:"HOLD"}),Object(j.jsx)("option",{value:"SELL",children:"SELL"})]})}),Object(j.jsx)("div",{className:"form-column",value:g,onChange:function(e){return y(e.target.value)},children:Object(j.jsxs)("select",{className:"chooseStockValue",children:[Object(j.jsx)("option",{disabled:!0,children:"Select"}),Object(j.jsx)("option",{value:"Overvalued",children:"Overvalued"}),Object(j.jsx)("option",{value:"Undervalued",children:"Undervalued"}),Object(j.jsx)("option",{value:"Accurate",children:"Accurate"})]})})]}),Object(j.jsx)("div",{className:"commentSection",children:Object(j.jsx)("textarea",{name:"comment",className:"textbox",value:E,onChange:function(e){return C(e.target.value)}})}),Object(j.jsx)("div",{onClick:function(e){e.preventDefault(),function(){var e=Object(x.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"http://localhost:3000/api/v1/stocks",t={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({ticker_symbol:a,recommendation_status:f,stock_value:g,posting:E,purchase_price:h})},e.next=5,fetch("http://localhost:3000/api/v1/stocks",t).then((function(e){if(!e.ok)throw new Error("Error: "+e.status);return e.json()})).then((function(e){c(e.holdings.stock)}));case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()()},className:"postButton",children:Object(j.jsx)("button",{className:"btn",children:"Post!"})})]})})}),f=(c(35),function(e){var t=Object(n.useContext)(u),c=t.stocks,s=t.setStocks,r=Object(n.useContext)(u),a=(r.selectedTickerSymbol,r.setSelectedTickerSymbol),o=Object(h.f)();Object(n.useEffect)((function(){(function(){var e=Object(x.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"http://localhost:3000/api/v1/stocks",t={method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}},e.next=5,fetch("http://localhost:3000/api/v1/stocks",t).then((function(e){if(!e.ok)throw new Error("Error: "+e.status);return e.json()})).then((function(e){s(e.holdings.stocks)}));case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var i=function(){var e=Object(x.a)(O.a.mark((function e(t,n){var r,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.stopPropagation(),e.prev=1,r="http://localhost:3000/api/v1/stocks/".concat(n),a={method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}},e.next=6,fetch(r,a).then((function(e){if(!e.ok)throw new Error("Error: "+e.status);s(c.filter((function(e){return e.id!==n})))}));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,c){return e.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"stockHoldings",children:Object(j.jsxs)("table",{className:"holdingsTable",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{className:"tableRow",children:[Object(j.jsx)("th",{scope:"column1",children:"Ticker Symbol"}),Object(j.jsx)("th",{scope:"column2",children:"Status"}),Object(j.jsx)("th",{scope:"column3",children:"Value"}),Object(j.jsx)("th",{scope:"column6",children:"Edit"}),Object(j.jsx)("th",{scope:"column7",children:"Delete"})]})}),Object(j.jsx)("tbody",{children:c&&c.map((function(e){return Object(j.jsxs)("tr",{onClick:function(){return t=e.id,c=e.ticker_symbol,a(c),void o.push("/stocks/".concat(t,"/"));var t,c},className:"trow",children:[Object(j.jsx)("td",{children:e.ticker_symbol}),Object(j.jsx)("td",{children:e.recommendation_status}),Object(j.jsx)("td",{children:e.stock_value}),Object(j.jsx)("td",{children:Object(j.jsx)("button",{onClick:function(t){return function(e,t){e.stopPropagation(),o.push("/stocks/".concat(t,"/update"))}(t,e.id)},className:"btn",children:"Edit"})}),Object(j.jsx)("td",{children:Object(j.jsx)("button",{onClick:function(t){return i(t,e.id)},className:"btn",children:"Delete"})})]},e.id)}))})]})})}),v=function(e){var t=s.a.useState(0),c=Object(l.a)(t,2);c[0],c[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)(b,{}),Object(j.jsx)(m,{getStockPrice:e.getStockPrice}),Object(j.jsx)(f,{})]})},k=c(22),S=c(23),g=c(26),y=c(24),N=(c(41),function(e){Object(g.a)(c,e);var t=Object(y.a)(c);function c(){return Object(k.a)(this,c),t.apply(this,arguments)}return Object(S.a)(c,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"landingPage",children:[Object(j.jsxs)("header",{children:[Object(j.jsx)("h1",{children:"Pocket Stocks"}),Object(j.jsx)("button",{className:"join_button",type:"submit",children:"Sign up"})]}),Object(j.jsxs)("section",{className:"briefOV",children:[Object(j.jsx)("h3",{children:"Stock predictions in the palm of your hand"}),Object(j.jsxs)("p",{children:["[",Object(j.jsx)("em",{children:"placeholder for screenshot of ROI tracker. possibly a background image related to stocks."}),"]"]}),Object(j.jsx)("p",{children:'Everyone wants to say "I told you so", especially on Wallstreet...'})]}),Object(j.jsxs)("section",{className:"appDesc",children:[Object(j.jsx)("h3",{children:"View your holdings and relative ROI"}),Object(j.jsxs)("p",{children:["[",Object(j.jsx)("em",{children:"placeholder for screenshot of holdings"}),"]"]}),Object(j.jsx)("p",{children:"Portfolio holdings, purchase price, current price, and ROI."})]}),Object(j.jsxs)("section",{className:"signUpForm",children:[Object(j.jsx)("h3",{children:"Sign up to start keeping track!"}),Object(j.jsxs)("form",{className:"signup-form",children:[Object(j.jsxs)("div",{className:"first-name",children:[Object(j.jsx)("label",{htmlFor:"first-name",children:"First name"}),Object(j.jsx)("input",{placeholder:"First Name",type:"text",name:"first-name",id:"first-name"})]}),Object(j.jsxs)("div",{className:"last-name",children:[Object(j.jsx)("label",{htmlFor:"last-name",children:"Last name"}),Object(j.jsx)("input",{type:"text",name:"last-name",id:"last-name",placeholder:"Last Name"})]}),Object(j.jsxs)("div",{className:"email",children:[Object(j.jsx)("label",{htmlFor:"email",children:"Email"}),Object(j.jsx)("input",{type:"text",name:"email",id:"email"})]}),Object(j.jsxs)("div",{className:"username",children:[Object(j.jsx)("label",{htmlFor:"username",children:"Username"}),Object(j.jsx)("input",{type:"text",name:"username",id:"username"})]}),Object(j.jsxs)("div",{className:"password",children:[Object(j.jsx)("label",{htmlFor:"password",children:"Password"}),Object(j.jsx)("input",{type:"password",name:"password",id:"password"})]}),Object(j.jsx)("button",{className:"join_button",type:"submit",children:"Sign Up"})]})]})]})}}]),c}(n.Component)),w=function(){return Object(j.jsx)("div",{children:"Login"})},E=function(){return Object(j.jsx)("div",{children:"Sign Up"})},C=function(e){var t=Object(h.g)().id,c=Object(n.useContext)(u),r=c.selectedStock,a=c.setSelectedStock,o=Object(n.useContext)(u),i=o.selectedTickerSymbol,d=(o.setSelectedTickerSymbol,s.a.useState("")),b=Object(l.a)(d,2),p=b[0],m=b[1],f=s.a.useState(0),v=Object(l.a)(f,2),k=v[0],S=v[1],g=s.a.useState(0),y=Object(l.a)(g,2),N=y[0],w=y[1];Object(n.useEffect)((function(){(function(){var c=Object(x.a)(O.a.mark((function c(){var n,s;return O.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,n="http://localhost:3000/api/v1/stocks/".concat(t),s={method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}},c.next=5,fetch(n,s).then((function(e){if(!e.ok)throw new Error("Error: "+e.status);return e.json()})).then((function(t){e.setTicker(t.holdings.stock.ticker_symbol),a(t.holdings.stock),m(t.holdings.stock.posting),S(t.holdings.stock.purchase_price)}));case 5:c.next=10;break;case 7:c.prev=7,c.t0=c.catch(0),console.log(c.t0);case 10:case"end":return c.stop()}}),c,null,[[0,7]])})));return function(){return c.apply(this,arguments)}})()()}),[]);return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:r&&r.ticker_symbol}),Object(j.jsx)("div",{children:Object(j.jsxs)("p",{children:["Current Market Price: $",e.currentMarketPrice]})}),Object(j.jsx)("div",{children:Object(j.jsxs)("p",{children:["Purchase price: $",k]})}),Object(j.jsx)("div",{children:Object(j.jsxs)("p",{children:["ROI: ",N]})}),Object(j.jsx)("div",{children:Object(j.jsxs)("p",{children:["Post: ",p]})}),Object(j.jsx)("button",{onClick:function(){return e.getStockPrice(i)},children:"Get current price"}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{onClick:function(){var t=k,c=((e.currentMarketPrice-t)/t*100).toFixed(2)+"%";w(c),console.log(c)},children:"Get ROI"})]})},P=(c(42),function(e){var t=Object(n.useState)(""),c=Object(l.a)(t,2),s=c[0],r=c[1],a=Object(n.useState)("Select"),o=Object(l.a)(a,2),i=o[0],u=o[1],d=Object(n.useState)("Select"),b=Object(l.a)(d,2),p=b[0],m=b[1],f=Object(h.g)().id,v=Object(h.f)();Object(n.useEffect)((function(){(function(){var e=Object(x.a)(O.a.mark((function e(){var t,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="http://localhost:3000/api/v1/stocks/".concat(f),c={method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}},e.next=5,fetch(t,c).then((function(e){if(!e.ok)throw new Error("Error: "+e.status);return e.json()})).then((function(e){r(e.holdings.stock.ticker_symbol),u(e.holdings.stock.recommendation_status),m(e.holdings.stock.stock_value)}));case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var k=function(){var e=Object(x.a)(O.a.mark((function e(t){var c,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,c="http://localhost:3000/api/v1/stocks/".concat(f),n={method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({ticker_symbol:s,recommendation_status:i,stock_value:p})},e.next=6,fetch(c,n).then((function(e){if(!e.ok)throw new Error("Error: "+e.status);return e.json()}));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:v.push("/home");case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("form",{action:"submit",children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"ticker_symbol",children:"Ticker Symbol"}),Object(j.jsx)("input",{value:s,onChange:function(e){return r(e.target.value)},type:"text",className:"ticker_symbol"})]}),Object(j.jsx)("label",{htmlFor:"recommendation_status",children:"BUY/HOLD/SELL"}),Object(j.jsxs)("select",{className:"chooseStatus",value:i,onChange:function(e){return u(e.target.value)},children:[Object(j.jsx)("option",{disabled:!0,children:"Select"}),Object(j.jsx)("option",{value:"BUY",children:"BUY"}),Object(j.jsx)("option",{value:"HOLD",children:"HOLD"}),Object(j.jsx)("option",{value:"SELL",children:"SELL"})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"stock_value",children:"VALUE"}),Object(j.jsxs)("select",{className:"chooseStatus",value:p,onChange:function(e){return m(e.target.value)},children:[Object(j.jsx)("option",{disabled:!0,children:"Select"}),Object(j.jsx)("option",{value:"Overvalued",children:"Overvalued"}),Object(j.jsx)("option",{value:"Undervalued",children:"Undervalued"}),Object(j.jsx)("option",{value:"Accurate",children:"Accurate"})]})]}),Object(j.jsx)("button",{type:"submit",onClick:k,className:"btn",children:"Submit"})]})})}),T=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"edit-position",children:"Update Position"}),Object(j.jsx)(P,{})]})},_=(c(43),function(){var e=s.a.useState(0),t=Object(l.a)(e,2),c=t[0],n=t[1],r=s.a.useState(null),a=Object(l.a)(r,2),o=a[0],i=a[1],u=function(e){i(e)},d=function(e){fetch("https://twelve-data1.p.rapidapi.com/price?symbol=".concat(o,"&outputsize=30&format=json"),{method:"GET",headers:{"x-rapidapi-key":"".concat("f31f4c4ae7msh19ad0c55e44bda2p1efe8ajsn5d61ef1eec85"),"x-rapidapi-host":"twelve-data1.p.rapidapi.com"}}).then((function(e){if(e.ok)return e.json();throw new Error(e.statusText)})).then((function(e){var t=parseFloat(e.price).toFixed(2);n(t)})).catch((function(e){console.log(e)}))};return Object(j.jsx)("div",{className:"formContainer",children:Object(j.jsxs)(h.c,{children:[Object(j.jsx)(h.a,{exact:!0,path:"/",component:N}),Object(j.jsx)(h.a,{exact:!0,path:"/home",render:function(){return Object(j.jsx)(v,{getStockPrice:d})}}),Object(j.jsx)(h.a,{exact:!0,path:"/stocks/:id",render:function(){return Object(j.jsx)(C,{getStockPrice:d,selectedTickerSymbol:o,setTicker:u,currentMarketPrice:c})}}),Object(j.jsx)(h.a,{exact:!0,path:"/stocks/:id/update",component:T}),Object(j.jsx)(h.a,{exact:!0,path:"/login",component:w}),Object(j.jsx)(h.a,{exact:!0,path:"/signup",component:E})]})})});a.a.render(Object(j.jsx)(d,{children:Object(j.jsx)(o.a,{children:Object(j.jsx)(_,{})})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.449dc11f.chunk.js.map