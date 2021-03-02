(this["webpackJsonppocket-stocks-client"]=this["webpackJsonppocket-stocks-client"]||[]).push([[0],{24:function(e,t){},33:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(20),o=c.n(r),a=c(7),i=c(26),l=c(4),j=c(0),u=Object(n.createContext)(),d=function(e){var t=Object(n.useState)([]),c=Object(l.a)(t,2),s=c[0],r=c[1],o=Object(n.useState)(""),a=Object(l.a)(o,2),d=a[0],h=a[1],b=Object(n.useState)(""),p=Object(l.a)(b,2),O=p[0],x=p[1];return Object(j.jsx)(u.Provider,{value:{stocks:s,setStocks:r,addStock:function(e){r([].concat(Object(i.a)(s),[e]))},selectedStock:d,setSelectedStock:h,selectedTickerSymbol:O,setSelectedTickerSymbol:x},children:e.children})},h=c(2),b=(c(33),function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{className:"header",children:"Pocket Stocks"})})}),p=c(9),O=c.n(p),x=c(10),m=(c(35),function(){var e=Object(n.useContext)(u).addStock,t=Object(n.useState)(""),c=Object(l.a)(t,2),s=c[0],r=c[1],o=Object(n.useState)(0),a=Object(l.a)(o,2),i=a[0],d=a[1],h=Object(n.useState)("Select"),b=Object(l.a)(h,2),p=b[0],m=b[1],f=Object(n.useState)("Select"),k=Object(l.a)(f,2),v=k[0],S=k[1],g=Object(n.useState)("Enter up to 120 characters in a post"),y=Object(l.a)(g,2),N=y[0],w=y[1];return Object(j.jsx)("div",{className:"addStockSection",children:Object(j.jsxs)("form",{action:"submit",children:[Object(j.jsxs)("div",{className:"form-row",children:[Object(j.jsx)("div",{className:"form-column",children:Object(j.jsx)("input",{type:"text",className:"inputTickerSymbol",placeholder:"Ticker Symbol",value:s,onChange:function(e){return r(e.target.value)}})}),Object(j.jsx)("div",{className:"form-column",children:Object(j.jsx)("input",{type:"number",className:"inputPurchasePrice",placeholder:"Purchase Price",value:i,onChange:function(e){return d(e.target.value)}})}),Object(j.jsx)("div",{className:"form-column",children:Object(j.jsxs)("select",{className:"chooseStatus",value:p,onChange:function(e){return m(e.target.value)},children:[Object(j.jsx)("option",{disabled:!0,children:"Select"}),Object(j.jsx)("option",{value:"BUY",children:"BUY"}),Object(j.jsx)("option",{value:"HOLD",children:"HOLD"}),Object(j.jsx)("option",{value:"SELL",children:"SELL"})]})}),Object(j.jsx)("div",{className:"form-column",value:v,onChange:function(e){return S(e.target.value)},children:Object(j.jsxs)("select",{className:"chooseStockValue",children:[Object(j.jsx)("option",{disabled:!0,children:"Select"}),Object(j.jsx)("option",{value:"Overvalued",children:"Overvalued"}),Object(j.jsx)("option",{value:"Undervalued",children:"Undervalued"}),Object(j.jsx)("option",{value:"Accurate",children:"Accurate"})]})})]}),Object(j.jsx)("div",{className:"commentSection",children:Object(j.jsx)("textarea",{name:"comment",className:"textbox",value:N,onChange:function(e){return w(e.target.value)}})}),Object(j.jsx)("div",{onClick:function(t){t.preventDefault(),function(){var t=Object(x.a)(O.a.mark((function t(){var c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,"https://quiet-woodland-22837.herokuapp.com/api/stocks/home",c={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({ticker_symbol:s,recommendation_status:p,stock_value:v,posting:N,purchase_price:i})},t.next=5,fetch("https://quiet-woodland-22837.herokuapp.com/api/stocks/home",c).then((function(e){if(!e.ok)throw new Error("Error: "+e.status);return e.json()})).then((function(t){console.log(t),e(t)}));case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}()()},className:"postButton",children:Object(j.jsx)("button",{className:"postBtn",children:"Post!"})})]})})}),f=(c(36),function(e){var t=Object(n.useContext)(u),c=t.stocks,s=t.setStocks,r=Object(n.useContext)(u),o=(r.selectedTickerSymbol,r.setSelectedTickerSymbol),a=Object(h.f)();Object(n.useEffect)((function(){(function(){var e=Object(x.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://quiet-woodland-22837.herokuapp.com/api/stocks/home",t={method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}},e.next=5,fetch("https://quiet-woodland-22837.herokuapp.com/api/stocks/home",t).then((function(e){if(!e.ok)throw new Error("Error: "+e.status);return e.json()})).then((function(e){s(e)}));case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var i=function(){var e=Object(x.a)(O.a.mark((function e(t,n){var r,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.stopPropagation(),e.prev=1,r="https://quiet-woodland-22837.herokuapp.com/api/stocks/".concat(n),o={method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}},e.next=6,fetch(r,o).then((function(e){if(!e.ok)throw new Error("Error: "+e.status);s(c.filter((function(e){return e.id!==n})))}));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,c){return e.apply(this,arguments)}}();return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"stockHoldings",children:Object(j.jsxs)("table",{className:"holdingsTable",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{className:"tableRow",children:[Object(j.jsx)("th",{scope:"column1",children:"Ticker Symbol"}),Object(j.jsx)("th",{scope:"column2",children:"Status"}),Object(j.jsx)("th",{scope:"column3",children:"Value"}),Object(j.jsx)("th",{scope:"column7",children:"Delete"})]})}),Object(j.jsx)("tbody",{children:c.map((function(e){return Object(j.jsxs)("tr",{onClick:function(){return t=e.id,c=e.ticker_symbol,o(c),void a.push("/stocks/".concat(t,"/"));var t,c},className:"trow",children:[Object(j.jsx)("td",{children:e.ticker_symbol}),Object(j.jsx)("td",{children:e.recommendation_status}),Object(j.jsx)("td",{children:e.stock_value}),Object(j.jsx)("td",{children:Object(j.jsx)("button",{onClick:function(t){return i(t,e.id)},className:"deleteBtn",children:"Delete"})})]},e.id)}))})]})})})}),k=(c(42),function(){return Object(j.jsxs)("div",{className:"links",children:[Object(j.jsx)(a.b,{className:"landing",to:"/",children:"Home"}),Object(j.jsx)("br",{}),Object(j.jsx)(a.b,{className:"holdings",to:"/home",children:"Holdings"})]})}),v=function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)(k,{}),Object(j.jsx)(b,{}),Object(j.jsx)(m,{getStockPrice:e.getStockPrice}),Object(j.jsx)(f,{})]})},S=c(22),g=c(23),y=c(27),N=c(25),w=(c(43),function(e){Object(y.a)(c,e);var t=Object(N.a)(c);function c(){return Object(S.a)(this,c),t.apply(this,arguments)}return Object(g.a)(c,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"landingPage",children:[Object(j.jsxs)("div",{className:"links",children:[Object(j.jsx)(a.b,{className:"landing",to:"/",children:"Home"}),Object(j.jsx)("br",{}),Object(j.jsx)(a.b,{className:"holdings",to:"/home",children:"Holdings"})]}),Object(j.jsx)("header",{children:Object(j.jsx)("h1",{children:"Pocket Stocks"})}),Object(j.jsxs)("section",{className:"briefOV",children:[Object(j.jsx)("h3",{children:"Stock predictions in the palm of your hand"}),Object(j.jsx)("p",{children:'Everyone wants to say "I told you so". Say it with your stock market predictions!'})]}),Object(j.jsxs)("section",{className:"appDesc",children:[Object(j.jsx)("p",{children:"To use this app, simply navigate to the 'Holdings' page, enter the required information:"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"Ticker Symbol"}),Object(j.jsx)("li",{children:"Purchase Price"}),Object(j.jsx)("li",{children:"Recommendation Status"}),Object(j.jsx)("li",{children:"Your Post, defending your position, forecasting, or just an opinion"})]}),Object(j.jsx)("p",{children:"Your post will be added to our database where other users can read your post along with all others."})]}),Object(j.jsx)("div",{className:"navHoldings",children:Object(j.jsx)(a.b,{className:"navHold",to:"/home",children:"Get Started!"})})]})}}]),c}(n.Component)),P=function(){return Object(j.jsx)("div",{children:"Login"})},T=function(){return Object(j.jsx)("div",{children:"Sign Up"})},C=(c(44),function(e){var t=Object(h.g)().id,c=Object(n.useContext)(u),r=c.selectedStock,o=c.setSelectedStock,a=Object(n.useContext)(u),i=a.selectedTickerSymbol,d=(a.setSelectedTickerSymbol,s.a.useState("")),b=Object(l.a)(d,2),p=b[0],m=b[1],f=s.a.useState(0),v=Object(l.a)(f,2),S=v[0],g=v[1],y=s.a.useState(0),N=Object(l.a)(y,2),w=N[0],P=N[1];Object(n.useEffect)((function(){(function(){var c=Object(x.a)(O.a.mark((function c(){var n,s;return O.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,n="https://quiet-woodland-22837.herokuapp.com/api/stocks/".concat(t),s={method:"GET",mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json"}},c.next=5,fetch(n,s).then((function(e){if(!e.ok)throw new Error("Error: "+e.status);return e.json()})).then((function(t){e.setTicker(t.ticker_symbol),o(t.ticker_symbol),m(t.posting),g(t.purchase_price)}));case 5:c.next=10;break;case 7:c.prev=7,c.t0=c.catch(0),console.log(c.t0);case 10:case"end":return c.stop()}}),c,null,[[0,7]])})));return function(){return c.apply(this,arguments)}})()()}),[]);return Object(j.jsxs)("div",{className:"detailForm",children:[Object(j.jsx)(k,{}),Object(j.jsx)("h1",{children:r&&r.ticker_symbol}),Object(j.jsx)("div",{children:Object(j.jsxs)("p",{className:"currentPriceDetail",children:["Current Market Price: $",e.currentMarketPrice]})}),Object(j.jsx)("div",{children:Object(j.jsxs)("p",{className:"purchasePriceDetail",children:["Purchase price: $",S]})}),Object(j.jsx)("div",{children:Object(j.jsxs)("p",{className:"currentROIDetail",children:["ROI: ",w]})}),Object(j.jsx)("div",{children:Object(j.jsxs)("p",{className:"postDetail",children:["Post: ",p]})}),Object(j.jsx)("button",{className:"getPrice",onClick:function(){return e.getStockPrice(i)},children:"Get current price"}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{className:"updateROI",onClick:function(){var t=S,c=((e.currentMarketPrice-t)/t*100).toFixed(2)+"%";P(c)},children:"Get ROI"})]})}),E=(c(45),c(24)),_=c.n(E),D=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(k,{}),Object(j.jsx)("h1",{className:"edit-position",children:"Update Position"}),Object(j.jsx)(_.a,{})]})},H=(c(46),function(){var e=s.a.useState(0),t=Object(l.a)(e,2),c=t[0],n=t[1],r=s.a.useState(null),o=Object(l.a)(r,2),a=o[0],i=o[1],u=function(e){i(e)},d=function(e){fetch("https://twelve-data1.p.rapidapi.com/price?symbol=".concat(a,"&outputsize=30&format=json"),{method:"GET",headers:{"x-rapidapi-key":"".concat("f31f4c4ae7msh19ad0c55e44bda2p1efe8ajsn5d61ef1eec85"),"x-rapidapi-host":"twelve-data1.p.rapidapi.com"}}).then((function(e){if(e.ok)return e.json();throw new Error(e.statusText)})).then((function(e){var t=parseFloat(e.price).toFixed(2);n(t)})).catch((function(e){console.log(e)}))};return Object(j.jsx)("div",{className:"formContainer",children:Object(j.jsxs)(h.c,{children:[Object(j.jsx)(h.a,{exact:!0,path:"/",component:w}),Object(j.jsx)(h.a,{exact:!0,path:"/home",render:function(){return Object(j.jsx)(v,{getStockPrice:d})}}),Object(j.jsx)(h.a,{exact:!0,path:"/stocks/:id",render:function(){return Object(j.jsx)(C,{getStockPrice:d,selectedTickerSymbol:a,setTicker:u,currentMarketPrice:c})}}),Object(j.jsx)(h.a,{exact:!0,path:"/stocks/:id/update",component:D}),Object(j.jsx)(h.a,{exact:!0,path:"/login",component:P}),Object(j.jsx)(h.a,{exact:!0,path:"/signup",component:T})]})})});o.a.render(Object(j.jsx)(d,{children:Object(j.jsx)(a.a,{children:Object(j.jsx)(H,{})})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.a5bd3f19.chunk.js.map