(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{21:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var c=t(16),a=t.n(c),u=(t(21),t(7)),r=t(3),o=t(1),i=t(0),s=function(e){var n=e.name;return Object(i.jsxs)("li",{children:[n.name," ",n.number]})},l=function(e){return Object(i.jsxs)("form",{onSubmit:e.addName,children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{value:e.newName,onChange:e.handleNameChange})]}),Object(i.jsxs)("div",{children:["number:"," ",Object(i.jsx)("input",{value:e.newNumber,onChange:e.handleNumberChange})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})},d=function(e){return Object(i.jsxs)("div",{children:["filter shown with"," ",Object(i.jsx)("input",{value:e.search,onChange:e.handleSearch})]})},j=function(e){var n=e.message;return null===n?null:Object(i.jsx)("div",{className:"notification",children:n})},b=function(e){var n=e.message;return null===n?null:Object(i.jsx)("div",{className:"error",children:n})},h=t(4),f=t.n(h),m="/api/persons",O=function(){return f.a.get(m).then((function(e){return e.data}))},v=function(e){return f.a.post(m,e).then((function(e){return e.data})).catch((function(e){console.log("error")}))},x=function(e){return f.a.delete("".concat(m,"/").concat(e)).then((function(e){console.log("deleted")}))},p=function(e,n){return f.a.put("".concat(m,"/").concat(e),n).then((function(e){return e.data}))},g=function(){var e=Object(o.useState)([]),n=Object(r.a)(e,2),t=n[0],c=n[1],a=Object(o.useState)([]),h=Object(r.a)(a,2),f=h[0],m=h[1],g=Object(o.useState)(""),w=Object(r.a)(g,2),N=w[0],C=w[1],S=Object(o.useState)(""),k=Object(r.a)(S,2),y=k[0],T=k[1],D=Object(o.useState)(""),E=Object(r.a)(D,2),I=E[0],J=E[1],L=Object(o.useState)(null),A=Object(r.a)(L,2),B=A[0],P=A[1],U=Object(o.useState)(null),q=Object(r.a)(U,2),z=q[0],F=q[1];Object(o.useEffect)((function(){O().then((function(e){c(e),m(e)}))}),[]);return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(j,{message:B}),Object(i.jsx)(b,{message:z}),Object(i.jsx)(d,{search:I,handleSearch:function(e){if(J(e.target.value),""===e.target.value)m(t);else{var n=t.filter((function(n){return n.name.toLowerCase().includes(e.target.value.toLowerCase())}));m(n)}}}),Object(i.jsx)("h2",{children:"add a new"}),Object(i.jsx)(l,{addName:function(e){e.preventDefault();var n={name:N,number:y},a=t.find((function(e){return e.name===N}));a?(window.confirm("".concat(N," is already added to phonebook, replace the old number with a new one")),function(e,n){var a=t.find((function(n){return n.id===e})),r=Object(u.a)(Object(u.a)({},a),{},{number:n});p(e,r).then((function(n){c(t.map((function(t){return t.id!==e?t:n}))),m(t.map((function(t){return t.id!==e?t:n}))),P("Updated ".concat(N)),setTimeout((function(){P(null)}),5e3)})).catch((function(e){F("Information of ".concat(N," has already been removed from the server")),setTimeout((function(){F(null)}),5e3)}))}(a.id,y)):v(n).then((function(e){c(t.concat(e)),m(t.concat(e)),C(""),T(""),P("Added ".concat(N)),setTimeout((function(){P(null)}),5e3)})).catch((function(e){console.log(e.response.data),F(e.response.data)}))},newName:N,handleNameChange:function(e){C(e.target.value)},newNumber:y,handleNumberChange:function(e){T(e.target.value)}}),Object(i.jsx)("h2",{children:"Numbers"}),Object(i.jsx)("ul",{children:f.map((function(e,n){return Object(i.jsxs)("div",{children:[Object(i.jsx)(s,{name:e,number:e.number},n),Object(i.jsx)("button",{onClick:function(){return function(e,n){window.confirm("Delete ".concat(n,"?")),x(e).then((function(e){O().then((function(e){c(e),m(e)})),P("Deleted ".concat(n)),setTimeout((function(){P(null)}),5e3)}))}(e.id,e.name)},children:"delete"})]},n)}))})]})};a.a.render(Object(i.jsx)(g,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.09ddc61e.chunk.js.map