"use strict";(self.webpackChunkproject_management_app=self.webpackChunkproject_management_app||[]).push([[941],{5941:(D,m,o)=>{o.r(m),o.d(m,{AuthModule:()=>Z});var E=o(6895),L=o(805),g=o(6755),r=o(4650);let M=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-auth"]],decls:2,vars:0,template:function(n,s){1&n&&(r.TgZ(0,"p"),r._uU(1,"auth works!"),r.qZA())}}),t})();const H=[{path:"",component:(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-login-page"]],decls:1,vars:0,template:function(n,s){1&n&&r._UZ(0,"app-auth")},dependencies:[M]}),t})()}];let P=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[g.Bz.forChild(H),g.Bz]}),t})();var j=o(4482),h=o(5403),x=o(4671),z=o(9751),I=o(4986),U=o(3532),B=o(1165),J=o(8421);function v(t=1/0){let e;e=t&&"object"==typeof t?t:{count:t};const{count:n=1/0,delay:s,resetOnSuccess:c=!1}=e;return n<=0?x.y:(0,j.e)((p,i)=>{let l,a=0;const f=()=>{let S=!1;l=p.subscribe((0,h.x)(i,u=>{c&&(a=0),i.next(u)},void 0,u=>{if(a++<n){const F=()=>{l?(l.unsubscribe(),l=null,f()):S=!0};if(null!=s){const b="number"==typeof s?function K(t=0,e,n=I.P){let s=-1;return null!=e&&((0,U.K)(e)?n=e:s=e),new z.y(c=>{let p=(0,B.q)(t)?+t-n.now():t;p<0&&(p=0);let i=0;return n.schedule(function(){c.closed||(c.next(i++),0<=s?this.schedule(void 0,s):c.complete())},p)})}(s):(0,J.Xf)(s(u,a)),R=(0,h.x)(i,()=>{R.unsubscribe(),F()},()=>{i.complete()});b.subscribe(R)}else F()}else i.error(u)})),S&&(l.unsubscribe(),l=null,f())};f()})}var y=o(262),d=o(515),N=o(529);let A=(()=>{class t{constructor(n){this.httpClient=n}register(n){return this.httpClient.post("signup",n).pipe(v(4),(0,y.K)(s=>(console.log("[ERROR]: ",s),d.E)))}login(n){return this.httpClient.post("signin",n).pipe(v(4),(0,y.K)(s=>(console.log("[ERROR]: ",s),d.E)))}}return t.\u0275fac=function(n){return new(n||t)(r.LFG(N.eN))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac}),t})();var C=o(8505);let X=(()=>{class t{constructor(n){this.apiHelpers=n}loginUp(n){this.apiHelpers.register(n).pipe((0,C.b)(s=>localStorage.setItem("USER",JSON.stringify(s)))).subscribe()}loginIn(n){this.apiHelpers.login(n).pipe((0,C.b)(s=>localStorage.setItem("TOKEN",s.token))).subscribe()}}return t.\u0275fac=function(n){return new(n||t)(r.LFG(A))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac}),t})(),Z=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({providers:[A,X],imports:[E.ez,P,L.m8]}),t})()}}]);