(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{nVOV:function(n,t,e){"use strict";e.r(t);var l=e("CcnG"),i=function(){return function(){}}(),u=e("pMnS"),o=e("ZYCi"),r=e("F/XL"),c=e("vubp"),s=e("jvbL"),a=(e("hzLA"),function(){function n(n,t,e,l,i){this.communicator=n,this.themeService=t,this.router=e,this.analytics=l,this.document=i,this.alive=!0}return n.prototype.ngOnInit=function(){this.setupId(),this.subscribeOnThemeSwitch(),this.analytics.trackEvent("initExampleView",this.id)},n.prototype.ngAfterViewInit=function(){var n=this;Object(r.a)(null).pipe(Object(c.a)(500)).subscribe(function(){return n.sendHeight()})},n.prototype.ngOnDestroy=function(){this.alive=!1},n.prototype.setupId=function(){this.id=this.getId()},n.prototype.subscribeOnThemeSwitch=function(){var n=this;this.communicator.receive(this.id).pipe(Object(s.a)(function(){return n.alive})).subscribe(function(t){return n.changeTheme(t)})},n.prototype.changeTheme=function(n){this.themeService.changeTheme(n.theme),this.sendHeight()},n.prototype.getId=function(){var n=this.router.url.split("/");return n.splice(0,2),n.join("/")},n.prototype.sendHeight=function(){this.communicator.send({id:this.id,height:this.document.body.clientHeight})},n}()),h=e("VkvS"),p=e("4vXS"),b=e("LA7j"),d=e("MGne"),f=l.tb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;background-color:#f1f2f3}"]],data:{}});function m(n){return l.Pb(0,[(n()(),l.vb(0,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),l.ub(1,212992,null,0,o.q,[o.b,l.S,l.j,[8,null],l.h],null,null)],function(n,t){n(t,1,0)},null)}function g(n){return l.Pb(0,[(n()(),l.vb(0,0,null,null,1,"ngd-example",[],null,null,null,m,f)),l.ub(1,4440064,null,0,a,[h.a,p.a,o.l,b.a,d.b],null,null)],function(n,t){n(t,1,0)},null)}var y=l.rb("ngd-example",a,g,{},{},[]),v=function(){return function(n){this.themeService=n,this.themeService.changeTheme("default")}}(),x=l.tb({encapsulation:0,styles:[["[_nghost-%COMP%]{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;color:gray;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:5rem}"]],data:{}});function w(n){return l.Pb(0,[(n()(),l.Nb(-1,null,[" Example not found. "]))],null,null)}function j(n){return l.Pb(0,[(n()(),l.vb(0,0,null,null,1,"ngd-example-404",[],null,null,null,w,x)),l.ub(1,49152,null,0,v,[p.a],null,null)],null,null)}var k=l.rb("ngd-example-404",v,j,{},{},[]),O=function(){return function(){}}();e.d(t,"NgdExampleModuleNgFactory",function(){return S});var S=l.sb(i,[],function(n){return l.Cb([l.Db(512,l.j,l.eb,[[8,[u.a,y,k]],[3,l.j],l.y]),l.Db(1073742336,o.p,o.p,[[2,o.u],[2,o.l]]),l.Db(1073742336,O,O,[]),l.Db(1073742336,i,i,[]),l.Db(1024,o.j,function(){return[[{path:"",component:a,children:[{path:"",loadChildren:"../../../src/playground/playground.module#PlaygroundModule"},{path:"**",component:v}]}]]},[])])})}}]);