(this.webpackJsonprecipe=this.webpackJsonprecipe||[]).push([[0],[,,,function(e,t,a){e.exports={recipe:"recipe_recipe__3y8zs",image:"recipe_image__nzwUB"}},,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),i=a.n(r),o=(a(12),a(1)),s=a(2),l=a.n(s),u=a(6),m=a(3),p=a.n(m),f=function(e){var t=e.title,a=e.calories,n=e.image,r=e.ingredients;return c.a.createElement("div",{className:p.a.recipe},c.a.createElement("h1",null,t),c.a.createElement("ol",null,r.map((function(e){return c.a.createElement("li",null,e.text)}))),c.a.createElement("p",null,a),c.a.createElement("img",{className:p.a.image,src:n}))};a(14),a(15);var d=function(){var e=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(b,"&app_id=").concat("94c843ff","&app_key=").concat("ac86e1db11807bb4dc523d571d4748b9"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,i(a.hits),console.log(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=Object(n.useState)([]),a=Object(o.a)(t,2),r=a[0],i=a[1],s=Object(n.useState)(""),m=Object(o.a)(s,2),p=m[0],d=m[1],h=Object(n.useState)("chicken"),g=Object(o.a)(h,2),b=g[0],v=g[1];return Object(n.useEffect)((function(){e()}),[b]),c.a.createElement("div",{className:"App"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),v(p)},className:"search-form"},c.a.createElement("input",{className:"search-bar",type:"text",value:p,onChange:function(e){d(e.target.value),console.log(e.target.value)}}),c.a.createElement("button",{className:"search-button",type:"submit"}," Search ")),c.a.createElement("div",{className:"recipes"},r.map((function(e){return c.a.createElement(f,{key:e.recipe.label,title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.8ff7a84a.chunk.js.map