(this.webpackJsonpinfoskjerm=this.webpackJsonpinfoskjerm||[]).push([[0],{27:function(e,t,n){e.exports=n(70)},32:function(e,t,n){},33:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},34:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(25),r=n.n(c),l=(n(32),n(33),n(34),n(5)),i=function(){var e=Object(a.useState)({}),t=Object(l.a)(e,2),n=t[0],c=t[1];return console.log(n),Object(a.useEffect)((function(){fetch("https://www.reddit.com/r/dadjokes/top.json?t=day&limit=1").then((function(e){return e.json()})).then((function(e){return c(e.data.children[0].data)})).catch((function(e){return console.error(e)}))}),[]),n?o.a.createElement("div",{className:"reddit"},o.a.createElement("p",null,n.title),o.a.createElement("p",null,n.selftext)):o.a.createElement(o.a.Fragment,null)},s=n(26),u=n.n(s)()({clientName:"wilson-infoskjerm"}),m=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){u.getBikeRentalStationsByPosition({latitude:59.9204566,longitude:10.7619009},230).then((function(e){return c(e)}))}),[]),o.a.createElement("div",{className:"bikeStations"},o.a.createElement("h3",null," Bysykkel "),n.map((function(e){return o.a.createElement(d,{key:e.id,station:e})})))},d=function(e){var t=e.station;return o.a.createElement("div",{className:"station"},t.name," - ",t.bikesAvailable," : ",t.spacesAvailable)},f=n(12),E=function(){var e=f.DateTime.local().setLocale("nb-NO");return o.a.createElement("div",{className:"clock"},o.a.createElement("h2",{className:"time"},e.toLocaleString(f.DateTime.TIME_24_SIMPLE)),o.a.createElement("h2",{className:"date"},e.toLocaleString({weekday:"long",day:"numeric",month:"long"})))};var h=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Infoskjerm"),o.a.createElement(E,null),o.a.createElement(i,null),o.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.7c0a6188.chunk.js.map