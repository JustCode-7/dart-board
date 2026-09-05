import{$ as E,$a as bt,$b as zu,A as Bn,Aa as yu,Ab as Bu,Ac as Zu,B as ue,Ba as hi,Bb as $,Bc as A,C as El,Ca as wu,Cb as pa,Cc as Tt,D as zi,Da as $i,Db as Vu,Dc as Ku,E as ci,Ea as Wi,Eb as Gr,Ec as wa,F as la,Fa as qi,Fb as $r,Fc as Qu,G as xe,Ga as Cu,Gb as D,H as Il,Ha as Pl,Hb as u,I as Hi,Ia as da,Ib as h,Ic as Bl,J as Vn,Ja as mi,Jb as q,Jc as Vl,K as Rl,Ka as Yi,Kb as $e,L as Tl,La as Du,Lb as Qe,Lc as qr,M as hu,Ma as Su,Mb as We,Mc as jl,N as kl,Na as xu,Nb as fa,Nc as zl,O as ca,Oa as Mu,Ob as ga,P as Ge,Pa as Eu,Pb as Re,Q as Ee,Qa as Iu,Qb as Rt,R as le,Ra as Ru,Rb as x,S as mu,Sa as pt,Sb as _a,T as Ke,Ta as Tu,Tb as k,U as W,Ua as nn,Ub as De,V as xn,Va as p,Vb as K,W as It,Wa as pi,Wb as Ut,X as _,Xa as ku,Xb as Ye,Y as O,Ya as ua,Yb as J,Z as pu,Za as Hr,Zb as ee,_ as b,_a as Ve,_b as ju,a as v,aa as l,ab as je,ac as Nl,b as se,ba as jn,bb as me,bc as it,ca as fu,cb as U,cc as va,d as _e,da as gu,db as Xi,dc as T,e as Ie,ea as nt,eb as lt,ec as rt,f as cu,fa as ht,fb as ha,fc as g,g as at,ga as we,gb as Au,gc as ae,h as y,ha as Ce,hb as ma,hc as ie,i as Oe,ia as Ui,ib as w,ic as Hu,j as Sl,ja as z,jb as L,jc as fi,k as xl,ka as F,kb as I,kc as Te,l as vt,la as di,lb as Pu,lc as Uu,m as st,ma as _u,mb as Ou,mc as ba,n as V,na as N,nb as fe,nc as ya,o as ra,oa as B,ob as he,oc as Gu,p as oa,pa as ui,pb as Fu,pc as $u,q as du,qa as Gi,qb as Ol,qc as pe,r as X,ra as j,rb as zn,rc as Be,s as jr,sa as vu,sb as Zi,sc as Wu,t as en,ta as bu,tb as Nu,tc as rn,u as Ml,ua as Ft,ub as Lu,uc as qu,v as aa,va as Fe,vb as Ur,vc as Wr,w as tn,wa as mt,wb as Fl,wc as Yu,x as sa,xa as Al,xb as yt,xc as te,y as uu,ya as P,yb as Z,yc as Ll,z as dt,za as zr,zb as G,zc as Xu}from"./chunk-P5EFIVTX.js";var Ju={name:"dart-board",version:"1.0.8",scripts:{ng:"ng",start:"ng serve",build:"ng build","build:ci":"ng build --configuration production",watch:"ng build --watch --configuration development",test:"ng test --watch=false --browsers=ChromeHeadless","deploy:gh":"ng build --configuration production --base-href=/dart-board/ --deploy-url=/dart-board/ && npx angular-cli-ghpages --dir dist/dart-board/browser --no-silent"},private:!0,dependencies:{"@angular/animations":"21.2.14","@angular/cdk":"21.2.14","@angular/common":"21.2.14","@angular/compiler":"21.2.14","@angular/core":"21.2.14","@angular/forms":"21.2.14","@angular/material":"21.2.14","@angular/platform-browser":"21.2.14","@angular/platform-browser-dynamic":"21.2.14","@angular/router":"21.2.14","@angular/service-worker":"21.2.14",bootstrap:"5.3.3",rxjs:"7.8.0",tslib:"2.8.0","zone.js":"0.15.0"},devDependencies:{"@angular-devkit/build-angular":"21.2.14","@angular/cli":"21.2.14","@angular/compiler-cli":"21.2.14","@angular/localize":"21.2.14","@playwright/test":"1.58.2","@types/node":"22.19.13","angular-cli-ghpages":"3.0.2",playwright:"^1.58.2",typescript:"~5.9.3"},overrides:{"serialize-javascript":"7.0.3",undici:"7.24.5"}};var Yr={production:!0,isRedirectWarningActive:!0,appVersion:Ju.version};var eh=null;function Nt(){return eh}function Hl(n){eh??=n}var Xr=class{},gi=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:()=>l(th),providedIn:"platform"})}return n})(),Ul=new b(""),th=(()=>{class n extends gi{_location;_history;_doc=l(F);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Nt().getBaseHref(this._doc)}onPopState(e){let t=Nt().getGlobalEventTarget(this._doc,"window");return t.addEventListener("popstate",e,!1),()=>t.removeEventListener("popstate",e)}onHashChange(e){let t=Nt().getGlobalEventTarget(this._doc,"window");return t.addEventListener("hashchange",e,!1),()=>t.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,t,r){this._history.pushState(e,t,r)}replaceState(e,t,r){this._history.replaceState(e,t,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function Ca(n,i){return n?i?n.endsWith("/")?i.startsWith("/")?n+i.slice(1):n+i:i.startsWith("/")?n+i:`${n}/${i}`:n:i}function nh(n){let i=n.search(/#|\?|$/);return n[i-1]==="/"?n.slice(0,i-1)+n.slice(i):n}function Gt(n){return n&&n[0]!=="?"?`?${n}`:n}var $t=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:()=>l(Sa),providedIn:"root"})}return n})(),Da=new b(""),Sa=(()=>{class n extends $t{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,t){super(),this._platformLocation=e,this._baseHref=t??this._platformLocation.getBaseHrefFromDOM()??l(F).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Ca(this._baseHref,e)}path(e=!1){let t=this._platformLocation.pathname+Gt(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${t}${r}`:t}pushState(e,t,r,o){let a=this.prepareExternalUrl(r+Gt(o));this._platformLocation.pushState(e,t,a)}replaceState(e,t,r,o){let a=this.prepareExternalUrl(r+Gt(o));this._platformLocation.replaceState(e,t,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(t){return new(t||n)(E(gi),E(Da,8))};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var on=(()=>{class n{_subject=new y;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let t=this._locationStrategy.getBaseHref();this._basePath=u_(nh(ih(t))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+Gt(t))}normalize(e){return n.stripTrailingSlash(d_(this._basePath,ih(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,t="",r=null){this._locationStrategy.pushState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Gt(t)),r)}replaceState(e,t="",r=null){this._locationStrategy.replaceState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Gt(t)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(t=>{this._notifyUrlChangeListeners(t.url,t.state)}),()=>{let t=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(t,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(r=>r(e,t))}subscribe(e,t,r){return this._subject.subscribe({next:e,error:t??void 0,complete:r??void 0})}static normalizeQueryParams=Gt;static joinWithSlash=Ca;static stripTrailingSlash=nh;static \u0275fac=function(t){return new(t||n)(E($t))};static \u0275prov=_({token:n,factory:()=>c_(),providedIn:"root"})}return n})();function c_(){return new on(E($t))}function d_(n,i){if(!n||!i.startsWith(n))return i;let e=i.substring(n.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function ih(n){return n.replace(/\/index.html$/,"")}function u_(n){if(new RegExp("^(https?:)?//").test(n)){let[,e]=n.split(/\/\/[^\/]+/);return e}return n}var Wl=(()=>{class n extends $t{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,t){super(),this._platformLocation=e,t!=null&&(this._baseHref=t)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let t=this._platformLocation.hash??"#";return t.length>0?t.substring(1):t}prepareExternalUrl(e){let t=Ca(this._baseHref,e);return t.length>0?"#"+t:t}pushState(e,t,r,o){let a=this.prepareExternalUrl(r+Gt(o))||this._platformLocation.pathname;this._platformLocation.pushState(e,t,a)}replaceState(e,t,r,o){let a=this.prepareExternalUrl(r+Gt(o))||this._platformLocation.pathname;this._platformLocation.replaceState(e,t,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(t){return new(t||n)(E(gi),E(Da,8))};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})();var xa=class{$implicit;ngForOf;index;count;constructor(i,e,t,r){this.$implicit=i,this.ngForOf=e,this.index=t,this.count=r}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},an=(()=>{class n{_viewContainer;_template;_differs;set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(e,t,r){this._viewContainer=e,this._template=t,this._differs=r}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;!this._differ&&e&&(this._differ=this._differs.find(e).create(this.ngForTrackBy))}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let t=this._viewContainer;e.forEachOperation((r,o,a)=>{if(r.previousIndex==null)t.createEmbeddedView(this._template,new xa(r.item,this._ngForOf,-1,-1),a===null?void 0:a);else if(a==null)t.remove(o===null?void 0:o);else if(o!==null){let s=t.get(o);t.move(s,a),rh(s,r)}});for(let r=0,o=t.length;r<o;r++){let s=t.get(r).context;s.index=r,s.count=o,s.ngForOf=this._ngForOf}e.forEachIdentityChange(r=>{let o=t.get(r.currentIndex);rh(o,r)})}static ngTemplateContextGuard(e,t){return!0}static \u0275fac=function(t){return new(t||n)(U(lt),U(bt),U(Ll))};static \u0275dir=I({type:n,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return n})();function rh(n,i){n.context.$implicit=i.item}var Wt=(()=>{class n{_viewContainer;_context=new Ma;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,t){this._viewContainer=e,this._thenTemplateRef=t}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){oh(e,!1),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){oh(e,!1),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,t){return!0}static \u0275fac=function(t){return new(t||n)(U(lt),U(bt))};static \u0275dir=I({type:n,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return n})(),Ma=class{$implicit=null;ngIf=null};function oh(n,i){if(n&&!n.createEmbeddedView)throw new W(2020,!1)}var ql=(()=>{class n{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,t,r){this._ngEl=e,this._differs=t,this._renderer=r}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,t){let[r,o]=e.split("."),a=r.indexOf("-")===-1?void 0:pi.DashCase;t!=null?this._renderer.setStyle(this._ngEl.nativeElement,r,o?`${t}${o}`:t,a):this._renderer.removeStyle(this._ngEl.nativeElement,r,a)}_applyChanges(e){e.forEachRemovedItem(t=>this._setStyle(t.key,null)),e.forEachAddedItem(t=>this._setStyle(t.key,t.currentValue)),e.forEachChangedItem(t=>this._setStyle(t.key,t.currentValue))}static \u0275fac=function(t){return new(t||n)(U(P),U(Xu),U(me))};static \u0275dir=I({type:n,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return n})(),Yl=(()=>{class n{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=l(z);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let t=this._viewContainerRef;if(this._viewRef&&t.remove(t.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=t.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,t,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,t,r):!1,get:(e,t,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,t,r)}})}static \u0275fac=function(t){return new(t||n)(U(lt))};static \u0275dir=I({type:n,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Fe]})}return n})();function h_(n,i){return new W(2100,!1)}var Gl=class{createSubscription(i,e,t){return pe(()=>i.subscribe({next:e,error:t}))}dispose(i){pe(()=>i.unsubscribe())}},$l=class{createSubscription(i,e,t){return i.then(r=>e?.(r),r=>t?.(r)),{unsubscribe:()=>{e=null,t=null}}}dispose(i){i.unsubscribe()}},m_=new $l,p_=new Gl,Zr=(()=>{class n{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;applicationErrorHandler=l(Gi);constructor(e){this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,t=>this._updateLatestValue(e,t),t=>this.applicationErrorHandler(t))}_selectStrategy(e){if(Zi(e))return m_;if(Nu(e))return p_;throw h_(n,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,t){e===this._obj&&(this._latestValue=t,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static \u0275fac=function(t){return new(t||n)(U(te,16))};static \u0275pipe=Pu({name:"async",type:n,pure:!1})}return n})();var ke=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=O({})}return n})();function Ea(n,i){i=encodeURIComponent(i);for(let e of n.split(";")){let t=e.indexOf("="),[r,o]=t==-1?[e,""]:[e.slice(0,t),e.slice(t+1)];if(r.trim()===i)return decodeURIComponent(o)}return null}var _i=class{};var Zl="browser";function sh(n){return n===Zl}var Kl=(()=>{class n{static \u0275prov=_({token:n,providedIn:"root",factory:()=>new Xl(l(F),window)})}return n})(),Xl=class{document;window;offset=()=>[0,0];constructor(i,e){this.document=i,this.window=e}setOffset(i){Array.isArray(i)?this.offset=()=>i:this.offset=i}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(i,e){this.window.scrollTo(se(v({},e),{left:i[0],top:i[1]}))}scrollToAnchor(i,e){let t=g_(this.document,i);t&&(this.scrollToElement(t,e),t.focus({preventScroll:!0}))}setHistoryScrollRestoration(i){try{this.window.history.scrollRestoration=i}catch(e){console.warn(xn(2400,!1))}}scrollToElement(i,e){let t=i.getBoundingClientRect(),r=t.left+this.window.pageXOffset,o=t.top+this.window.pageYOffset,a=this.offset();this.window.scrollTo(se(v({},e),{left:r-a[0],top:o-a[1]}))}};function g_(n,i){let e=n.getElementById(i)||n.getElementsByName(i)[0];if(e)return e;if(typeof n.createTreeWalker=="function"&&n.body&&typeof n.body.attachShadow=="function"){let t=n.createTreeWalker(n.body,NodeFilter.SHOW_ELEMENT),r=t.currentNode;for(;r;){let o=r.shadowRoot;if(o){let a=o.getElementById(i)||o.querySelector(`[name="${i}"]`);if(a)return a}r=t.nextNode()}}return null}var Kr=class{_doc;constructor(i){this._doc=i}manager},Ia=(()=>{class n extends Kr{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,r,o){return e.addEventListener(t,r,o),()=>this.removeEventListener(e,t,r,o)}removeEventListener(e,t,r,o){return e.removeEventListener(t,r,o)}static \u0275fac=function(t){return new(t||n)(E(F))};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})(),ka=new b(""),tc=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,t){this._zone=t,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof Ia));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof Ia);o&&this._plugins.push(o)}addEventListener(e,t,r,o){return this._findPluginFor(t).addEventListener(e,t,r,o)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(o=>o.supports(e)),!t)throw new W(5101,!1);return this._eventNameToPlugin.set(e,t),t}static \u0275fac=function(t){return new(t||n)(E(ka),E(B))};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})(),Ql="ng-app-id";function lh(n){for(let i of n)i.remove()}function ch(n,i){let e=i.createElement("style");return e.textContent=n,e}function __(n,i,e,t){let r=n.head?.querySelectorAll(`style[${Ql}="${i}"],link[${Ql}="${i}"]`);if(r)for(let o of r)o.removeAttribute(Ql),o instanceof HTMLLinkElement?t.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function ec(n,i){let e=i.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",n),e}var nc=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,t,r,o={}){this.doc=e,this.appId=t,this.nonce=r,__(e,t,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,t){for(let r of e)this.addUsage(r,this.inline,ch);t?.forEach(r=>this.addUsage(r,this.external,ec))}removeStyles(e,t){for(let r of e)this.removeUsage(r,this.inline);t?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,t,r){let o=t.get(e);o?o.usage++:t.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,t){let r=t.get(e);r&&(r.usage--,r.usage<=0&&(lh(r.elements),t.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])lh(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[t,{elements:r}]of this.inline)r.push(this.addElement(e,ch(t,this.doc)));for(let[t,{elements:r}]of this.external)r.push(this.addElement(e,ec(t,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,t){return this.nonce&&t.setAttribute("nonce",this.nonce),e.appendChild(t)}static \u0275fac=function(t){return new(t||n)(E(F),E(hi),E(qi,8),E($i))};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})(),Jl={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},ic=/%COMP%/g;var uh="%COMP%",v_=`_nghost-${uh}`,b_=`_ngcontent-${uh}`,y_=!0,w_=new b("",{factory:()=>y_});function C_(n){return b_.replace(ic,n)}function D_(n){return v_.replace(ic,n)}function hh(n,i){return i.map(e=>e.replace(ic,n))}var eo=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,t,r,o,a,s,c=null,d=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=c,this.tracingService=d,this.defaultRenderer=new Qr(e,a,s,this.tracingService)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,t);return r instanceof Ta?r.applyToHost(e):r instanceof Jr&&r.applyStyles(),r}getOrCreateRenderer(e,t){let r=this.rendererByCompId,o=r.get(t.id);if(!o){let a=this.doc,s=this.ngZone,c=this.eventManager,d=this.sharedStylesHost,m=this.removeStylesOnCompDestroy,f=this.tracingService;switch(t.encapsulation){case da.Emulated:o=new Ta(c,d,t,this.appId,m,a,s,f);break;case da.ShadowDom:return new Ra(c,e,t,a,s,this.nonce,f,d);case da.ExperimentalIsolatedShadowDom:return new Ra(c,e,t,a,s,this.nonce,f);default:o=new Jr(c,d,t,m,a,s,f);break}r.set(t.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(t){return new(t||n)(E(tc),E(nc),E(hi),E(w_),E(F),E(B),E(qi),E(ua,8))};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})(),Qr=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,e,t,r){this.eventManager=i,this.doc=e,this.ngZone=t,this.tracingService=r}destroy(){}destroyNode=null;createElement(i,e){return e?this.doc.createElementNS(Jl[e]||e,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,e){(dh(i)?i.content:i).appendChild(e)}insertBefore(i,e,t){i&&(dh(i)?i.content:i).insertBefore(e,t)}removeChild(i,e){e.remove()}selectRootElement(i,e){let t=typeof i=="string"?this.doc.querySelector(i):i;if(!t)throw new W(-5104,!1);return e||(t.textContent=""),t}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,e,t,r){if(r){e=r+":"+e;let o=Jl[r];o?i.setAttributeNS(o,e,t):i.setAttribute(e,t)}else i.setAttribute(e,t)}removeAttribute(i,e,t){if(t){let r=Jl[t];r?i.removeAttributeNS(r,e):i.removeAttribute(`${t}:${e}`)}else i.removeAttribute(e)}addClass(i,e){i.classList.add(e)}removeClass(i,e){i.classList.remove(e)}setStyle(i,e,t,r){r&(pi.DashCase|pi.Important)?i.style.setProperty(e,t,r&pi.Important?"important":""):i.style[e]=t}removeStyle(i,e,t){t&pi.DashCase?i.style.removeProperty(e):i.style[e]=""}setProperty(i,e,t){i!=null&&(i[e]=t)}setValue(i,e){i.nodeValue=e}listen(i,e,t,r){if(typeof i=="string"&&(i=Nt().getGlobalEventTarget(this.doc,i),!i))throw new W(5102,!1);let o=this.decoratePreventDefault(t);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(i,e,o)),this.eventManager.addEventListener(i,e,o,r)}decoratePreventDefault(i){return e=>{if(e==="__ngUnwrap__")return i;i(e)===!1&&e.preventDefault()}}};function dh(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Ra=class extends Qr{hostEl;sharedStylesHost;shadowRoot;constructor(i,e,t,r,o,a,s,c){super(i,r,o,s),this.hostEl=e,this.sharedStylesHost=c,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=t.styles;d=hh(t.id,d);for(let f of d){let S=document.createElement("style");a&&S.setAttribute("nonce",a),S.textContent=f,this.shadowRoot.appendChild(S)}let m=t.getExternalStyles?.();if(m)for(let f of m){let S=ec(f,r);a&&S.setAttribute("nonce",a),this.shadowRoot.appendChild(S)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,e){return super.appendChild(this.nodeOrShadowRoot(i),e)}insertBefore(i,e,t){return super.insertBefore(this.nodeOrShadowRoot(i),e,t)}removeChild(i,e){return super.removeChild(null,e)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Jr=class extends Qr{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(i,e,t,r,o,a,s,c){super(i,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let d=t.styles;this.styles=c?hh(c,d):d,this.styleUrls=t.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&ku.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Ta=class extends Jr{contentAttr;hostAttr;constructor(i,e,t,r,o,a,s,c){let d=r+"-"+t.id;super(i,e,t,o,a,s,c,d),this.contentAttr=C_(d),this.hostAttr=D_(d)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,"")}createElement(i,e){let t=super.createElement(i,e);return super.setAttribute(t,this.contentAttr,""),t}};var Aa=class n extends Xr{supportsDOMEvents=!0;static makeCurrent(){Hl(new n)}onAndCancel(i,e,t,r){return i.addEventListener(e,t,r),()=>{i.removeEventListener(e,t,r)}}dispatchEvent(i,e){i.dispatchEvent(e)}remove(i){i.remove()}createElement(i,e){return e=e||this.getDefaultDocument(),e.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,e){return e==="window"?window:e==="document"?i:e==="body"?i.body:null}getBaseHref(i){let e=x_();return e==null?null:M_(e)}resetBaseElement(){to=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return Ea(document.cookie,i)}},to=null;function x_(){return to=to||document.head.querySelector("base"),to?to.getAttribute("href"):null}function M_(n){return new URL(n,document.baseURI).pathname}var E_=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})(),mh=["alt","control","meta","shift"],I_={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},R_={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},ph=(()=>{class n extends Kr{constructor(e){super(e)}supports(e){return n.parseEventName(e)!=null}addEventListener(e,t,r,o){let a=n.parseEventName(t),s=n.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Nt().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let t=e.toLowerCase().split("."),r=t.shift();if(t.length===0||!(r==="keydown"||r==="keyup"))return null;let o=n._normalizeKey(t.pop()),a="",s=t.indexOf("code");if(s>-1&&(t.splice(s,1),a="code."),mh.forEach(d=>{let m=t.indexOf(d);m>-1&&(t.splice(m,1),a+=d+".")}),a+=o,t.length!=0||o.length===0)return null;let c={};return c.domEventName=r,c.fullKey=a,c}static matchEventFullKeyCode(e,t){let r=I_[e.key]||e.key,o="";return t.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),mh.forEach(a=>{if(a!==r){let s=R_[a];s(e)&&(o+=a+".")}}),o+=r,o===t)}static eventCallback(e,t,r){return o=>{n.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>t(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(t){return new(t||n)(E(F))};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})();function rc(n,i,e){return _e(this,null,function*(){let t=v({rootComponent:n},T_(i,e));return Zu(t)})}function T_(n,i){return{platformRef:i?.platformRef,appProviders:[...F_,...n?.providers??[]],platformProviders:O_}}function k_(){Aa.makeCurrent()}function A_(){return new ui}function P_(){return yu(document),document}var O_=[{provide:$i,useValue:Zl},{provide:wu,useValue:k_,multi:!0},{provide:F,useFactory:P_}];var F_=[{provide:gu,useValue:"root"},{provide:ui,useFactory:A_},{provide:ka,useClass:Ia,multi:!0},{provide:ka,useClass:ph,multi:!0},eo,nc,tc,{provide:je,useExisting:eo},{provide:_i,useClass:E_},[]];var Hn=class n{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(e=>{let t=e.indexOf(":");if(t>0){let r=e.slice(0,t),o=e.slice(t+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((e,t)=>{this.addHeaderEntry(t,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([e,t])=>{this.setHeaderEntries(e,t)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let e=this.headers.get(i.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,e){return this.clone({name:i,value:e,op:"a"})}set(i,e){return this.clone({name:i,value:e,op:"s"})}delete(i,e){return this.clone({name:i,value:e,op:"d"})}maybeSetNormalizedName(i,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,i)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init(),Array.from(i.headers.keys()).forEach(e=>{this.headers.set(e,i.headers.get(e)),this.normalizedNames.set(e,i.normalizedNames.get(e))})}clone(i){let e=new n;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([i]),e}applyUpdate(i){let e=i.name.toLowerCase();switch(i.op){case"a":case"s":let t=i.value;if(typeof t=="string"&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(i.name,e);let r=(i.op==="a"?this.headers.get(e):void 0)||[];r.push(...t),this.headers.set(e,r);break;case"d":let o=i.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(i,e){let t=i.toLowerCase();this.maybeSetNormalizedName(i,t),this.headers.has(t)?this.headers.get(t).push(e):this.headers.set(t,[e])}setHeaderEntries(i,e){let t=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=i.toLowerCase();this.headers.set(r,t),this.maybeSetNormalizedName(i,r)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>i(this.normalizedNames.get(e),this.headers.get(e)))}};var ac=class{map=new Map;set(i,e){return this.map.set(i,e),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}},sc=class{encodeKey(i){return fh(i)}encodeValue(i){return fh(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function N_(n,i){let e=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,s]=o==-1?[i.decodeKey(r),""]:[i.decodeKey(r.slice(0,o)),i.decodeValue(r.slice(o+1))],c=e.get(a)||[];c.push(s),e.set(a,c)}),e}var L_=/%(\d[a-f0-9])/gi,B_={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function fh(n){return encodeURIComponent(n).replace(L_,(i,e)=>B_[e]??i)}function Pa(n){return`${n}`}var En=class n{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new sc,i.fromString){if(i.fromObject)throw new W(2805,!1);this.map=N_(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(e=>{let t=i.fromObject[e],r=Array.isArray(t)?t.map(Pa):[Pa(t)];this.map.set(e,r)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let e=this.map.get(i);return e?e[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,e){return this.clone({param:i,value:e,op:"a"})}appendAll(i){let e=[];return Object.keys(i).forEach(t=>{let r=i[t];Array.isArray(r)?r.forEach(o=>{e.push({param:t,value:o,op:"a"})}):e.push({param:t,value:r,op:"a"})}),this.clone(e)}set(i,e){return this.clone({param:i,value:e,op:"s"})}delete(i,e){return this.clone({param:i,value:e,op:"d"})}toString(){return this.init(),this.keys().map(i=>{let e=this.encoder.encodeKey(i);return this.map.get(i).map(t=>e+"="+this.encoder.encodeValue(t)).join("&")}).filter(i=>i!=="").join("&")}clone(i){let e=new n({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(i),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(i=>this.map.set(i,this.cloneFrom.map.get(i))),this.updates.forEach(i=>{switch(i.op){case"a":case"s":let e=(i.op==="a"?this.map.get(i.param):void 0)||[];e.push(Pa(i.value)),this.map.set(i.param,e);break;case"d":if(i.value!==void 0){let t=this.map.get(i.param)||[],r=t.indexOf(Pa(i.value));r!==-1&&t.splice(r,1),t.length>0?this.map.set(i.param,t):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null)}};function V_(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function gh(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function _h(n){return typeof Blob<"u"&&n instanceof Blob}function vh(n){return typeof FormData<"u"&&n instanceof FormData}function j_(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}var bh="Content-Type",yh="Accept",wh="text/plain",Ch="application/json",z_=`${Ch}, ${wh}, */*`,Ki=class n{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(i,e,t,r){this.url=e,this.method=i.toUpperCase();let o;if(V_(this.method)||r?(this.body=t!==void 0?t:null,o=r):o=t,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new W(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new Hn,this.context??=new ac,!this.params)this.params=new En,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),c=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+c+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||gh(this.body)||_h(this.body)||vh(this.body)||j_(this.body)?this.body:this.body instanceof En?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||vh(this.body)?null:_h(this.body)?this.body.type||null:gh(this.body)?null:typeof this.body=="string"?wh:this.body instanceof En?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Ch:null}clone(i={}){let e=i.method||this.method,t=i.url||this.url,r=i.responseType||this.responseType,o=i.keepalive??this.keepalive,a=i.priority||this.priority,s=i.cache||this.cache,c=i.mode||this.mode,d=i.redirect||this.redirect,m=i.credentials||this.credentials,f=i.referrer||this.referrer,S=i.integrity||this.integrity,H=i.referrerPolicy||this.referrerPolicy,Y=i.transferCache??this.transferCache,Q=i.timeout??this.timeout,R=i.body!==void 0?i.body:this.body,oe=i.withCredentials??this.withCredentials,ye=i.reportProgress??this.reportProgress,Pe=i.headers||this.headers,Ae=i.params||this.params,ge=i.context??this.context;return i.setHeaders!==void 0&&(Pe=Object.keys(i.setHeaders).reduce((Et,_t)=>Et.set(_t,i.setHeaders[_t]),Pe)),i.setParams&&(Ae=Object.keys(i.setParams).reduce((Et,_t)=>Et.set(_t,i.setParams[_t]),Ae)),new n(e,t,R,{params:Ae,headers:Pe,context:ge,reportProgress:ye,responseType:r,withCredentials:oe,transferCache:Y,keepalive:o,cache:s,priority:a,timeout:Q,mode:c,redirect:d,credentials:m,referrer:f,integrity:S,referrerPolicy:H})}},vi=(function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n})(vi||{}),no=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(i,e=200,t="OK"){this.headers=i.headers||new Hn,this.status=i.status!==void 0?i.status:e,this.statusText=i.statusText||t,this.url=i.url||null,this.redirected=i.redirected,this.responseType=i.responseType,this.ok=this.status>=200&&this.status<300}},lc=class n extends no{constructor(i={}){super(i)}type=vi.ResponseHeader;clone(i={}){return new n({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},io=class n extends no{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=vi.Response;clone(i={}){return new n({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0,redirected:i.redirected??this.redirected,responseType:i.responseType??this.responseType})}},Qi=class extends no{name="HttpErrorResponse";message;error;ok=!1;constructor(i){super(i,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||"(unknown url)"}`:this.message=`Http failure response for ${i.url||"(unknown url)"}: ${i.status} ${i.statusText}`,this.error=i.error||null}},H_=200,U_=204;var G_=/^\)\]\}',?\n/;var $_=(()=>{class n{xhrFactory;tracingService=l(ua,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new W(-2800,!1);let t=this.xhrFactory;return V(null).pipe(Ee(()=>new at(o=>{let a=t.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((R,oe)=>a.setRequestHeader(R,oe.join(","))),e.headers.has(yh)||a.setRequestHeader(yh,z_),!e.headers.has(bh)){let R=e.detectContentTypeHeader();R!==null&&a.setRequestHeader(bh,R)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let R=e.responseType.toLowerCase();a.responseType=R!=="json"?R:"text"}let s=e.serializeBody(),c=null,d=()=>{if(c!==null)return c;let R=a.statusText||"OK",oe=new Hn(a.getAllResponseHeaders()),ye=a.responseURL||e.url;return c=new lc({headers:oe,status:a.status,statusText:R,url:ye}),c},m=this.maybePropagateTrace(()=>{let{headers:R,status:oe,statusText:ye,url:Pe}=d(),Ae=null;oe!==U_&&(Ae=typeof a.response>"u"?a.responseText:a.response),oe===0&&(oe=Ae?H_:0);let ge=oe>=200&&oe<300;if(e.responseType==="json"&&typeof Ae=="string"){let Et=Ae;Ae=Ae.replace(G_,"");try{Ae=Ae!==""?JSON.parse(Ae):null}catch(_t){Ae=Et,ge&&(ge=!1,Ae={error:_t,text:Ae})}}ge?(o.next(new io({body:Ae,headers:R,status:oe,statusText:ye,url:Pe||void 0})),o.complete()):o.error(new Qi({error:Ae,headers:R,status:oe,statusText:ye,url:Pe||void 0}))}),f=this.maybePropagateTrace(R=>{let{url:oe}=d(),ye=new Qi({error:R,status:a.status||0,statusText:a.statusText||"Unknown Error",url:oe||void 0});o.error(ye)}),S=f;e.timeout&&(S=this.maybePropagateTrace(R=>{let{url:oe}=d(),ye=new Qi({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:oe||void 0});o.error(ye)}));let H=!1,Y=this.maybePropagateTrace(R=>{H||(o.next(d()),H=!0);let oe={type:vi.DownloadProgress,loaded:R.loaded};R.lengthComputable&&(oe.total=R.total),e.responseType==="text"&&a.responseText&&(oe.partialText=a.responseText),o.next(oe)}),Q=this.maybePropagateTrace(R=>{let oe={type:vi.UploadProgress,loaded:R.loaded};R.lengthComputable&&(oe.total=R.total),o.next(oe)});return a.addEventListener("load",m),a.addEventListener("error",f),a.addEventListener("timeout",S),a.addEventListener("abort",f),e.reportProgress&&(a.addEventListener("progress",Y),s!==null&&a.upload&&a.upload.addEventListener("progress",Q)),a.send(s),o.next({type:vi.Sent}),()=>{a.removeEventListener("error",f),a.removeEventListener("abort",f),a.removeEventListener("load",m),a.removeEventListener("timeout",S),e.reportProgress&&(a.removeEventListener("progress",Y),s!==null&&a.upload&&a.upload.removeEventListener("progress",Q)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(t){return new(t||n)(E(_i))};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function W_(n,i){return i(n)}function q_(n,i,e){return(t,r)=>ht(e,()=>i(t,o=>n(o,r)))}var Y_=new b("",{factory:()=>[]}),Dh=new b(""),X_=new b("",{factory:()=>!0});var Z_=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=E($_),r},providedIn:"root"})}return n})();var K_=(()=>{class n{backend;injector;chain=null;pendingTasks=l(bu);contributeToStability=l(X_);constructor(e,t){this.backend=e,this.injector=t}handle(e){if(this.chain===null){let t=Array.from(new Set([...this.injector.get(Y_),...this.injector.get(Dh,[])]));this.chain=t.reduceRight((r,o)=>q_(r,o,this.injector),W_)}if(this.contributeToStability){let t=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(Hi(t))}else return this.chain(e,t=>this.backend.handle(t))}static \u0275fac=function(t){return new(t||n)(E(Z_),E(nt))};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Q_=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=E(K_),r},providedIn:"root"})}return n})();function oc(n,i){return{body:i,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials,credentials:n.credentials,transferCache:n.transferCache,timeout:n.timeout,keepalive:n.keepalive,priority:n.priority,cache:n.cache,mode:n.mode,redirect:n.redirect,integrity:n.integrity,referrer:n.referrer,referrerPolicy:n.referrerPolicy}}var cc=(()=>{class n{handler;constructor(e){this.handler=e}request(e,t,r={}){let o;if(e instanceof Ki)o=e;else{let c;r.headers instanceof Hn?c=r.headers:c=new Hn(r.headers);let d;r.params&&(r.params instanceof En?d=r.params:d=new En({fromObject:r.params})),o=new Ki(e,t,r.body!==void 0?r.body:null,{headers:c,context:r.context,params:d,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=V(o).pipe(ci(c=>this.handler.handle(c)));if(e instanceof Ki||r.observe==="events")return a;let s=a.pipe(ue(c=>c instanceof io));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(X(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new W(2806,!1);return c.body}));case"blob":return s.pipe(X(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new W(2807,!1);return c.body}));case"text":return s.pipe(X(c=>{if(c.body!==null&&typeof c.body!="string")throw new W(2808,!1);return c.body}));default:return s.pipe(X(c=>c.body))}case"response":return s;default:throw new W(2809,!1)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}jsonp(e,t){return this.request("JSONP",e,{params:new En().append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,t={}){return this.request("OPTIONS",e,t)}patch(e,t,r={}){return this.request("PATCH",e,oc(r,t))}post(e,t,r={}){return this.request("POST",e,oc(r,t))}put(e,t,r={}){return this.request("PUT",e,oc(r,t))}static \u0275fac=function(t){return new(t||n)(E(Q_))};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Sh=(()=>{class n{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(t){return new(t||n)(E(F))};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ro=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=E(tv),r},providedIn:"root"})}return n})(),tv=(()=>{class n extends ro{_doc;constructor(e){super(),this._doc=e}sanitize(e,t){if(t==null)return null;switch(e){case pt.NONE:return t;case pt.HTML:return Yi(t,"HTML")?mi(t):Ru(this._doc,String(t)).toString();case pt.STYLE:return Yi(t,"Style")?mi(t):t;case pt.SCRIPT:if(Yi(t,"Script"))return mi(t);throw new W(5200,!1);case pt.URL:return Yi(t,"URL")?mi(t):Iu(String(t));case pt.RESOURCE_URL:if(Yi(t,"ResourceURL"))return mi(t);throw new W(5201,!1);default:throw new W(5202,!1)}}bypassSecurityTrustHtml(e){return Du(e)}bypassSecurityTrustStyle(e){return Su(e)}bypassSecurityTrustScript(e){return xu(e)}bypassSecurityTrustUrl(e){return Mu(e)}bypassSecurityTrustResourceUrl(e){return Eu(e)}static \u0275fac=function(t){return new(t||n)(E(F))};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function In(n){return n.buttons===0||n.detail===0}function Rn(n){let i=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var dc;function Mh(){if(dc==null){let n=typeof document<"u"?document.head:null;dc=!!(n&&(n.createShadowRoot||n.attachShadow))}return dc}function bi(n){if(Mh()){let i=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function oo(){let n=typeof document<"u"&&document?document.activeElement:null;for(;n&&n.shadowRoot;){let i=n.shadowRoot.activeElement;if(i===n)break;n=i}return n}function ze(n){return n.composedPath?n.composedPath()[0]:n.target}var uc;try{uc=typeof Intl<"u"&&Intl.v8BreakIterator}catch(n){uc=!1}var ce=(()=>{class n{_platformId=l($i);isBrowser=this._platformId?sh(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||uc)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ao;function Eh(){if(ao==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>ao=!0}))}finally{ao=ao||!1}return ao}function Ji(n){return Eh()?n:!!n.capture}function Lt(n,i=0){return Ih(n)?Number(n):arguments.length===2?i:0}function Ih(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function He(n){return n instanceof P?n.nativeElement:n}var Rh=new b("cdk-input-modality-detector-options"),Th={ignoreKeys:[18,17,224,91,16]},kh=650,hc={passive:!0,capture:!0},Ah=(()=>{class n{_platform=l(ce);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Oe(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=ze(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<kh||(this._modality.next(In(e)?"keyboard":"mouse"),this._mostRecentTarget=ze(e))};_onTouchstart=e=>{if(Rn(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=ze(e)};constructor(){let e=l(B),t=l(F),r=l(Rh,{optional:!0});if(this._options=v(v({},Th),r),this.modalityDetected=this._modality.pipe(ca(1)),this.modalityChanged=this.modalityDetected.pipe(Il()),this._platform.isBrowser){let o=l(je).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(t,"keydown",this._onKeydown,hc),o.listen(t,"mousedown",this._onMousedown,hc),o.listen(t,"touchstart",this._onTouchstart,hc)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),so=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(so||{}),Ph=new b("cdk-focus-monitor-default-options"),Oa=Ji({passive:!0,capture:!0}),wt=(()=>{class n{_ngZone=l(B);_platform=l(ce);_inputModalityDetector=l(Ah);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=l(F);_stopInputModalityDetector=new y;constructor(){let e=l(Ph,{optional:!0});this._detectionMode=e?.detectionMode||so.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=ze(e);for(let r=t;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,t=!1){let r=He(e);if(!this._platform.isBrowser||r.nodeType!==1)return V();let o=bi(r)||this._document,a=this._elementInfo.get(r);if(a)return t&&(a.checkChildren=!0),a.subject;let s={checkChildren:t,subject:new y,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let t=He(e),r=this._elementInfo.get(t);r&&(r.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(r))}focusVia(e,t,r){let o=He(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,c])=>this._originChanged(s,t,c)):(this._setOrigin(t),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===so.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===so.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?kh:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,t){let r=this._elementInfo.get(t),o=ze(e);!r||!r.checkChildren&&t!==o||this._originChanged(t,this._getFocusOrigin(o),r)}_onBlur(e,t){let r=this._elementInfo.get(t);!r||r.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(r,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,r=this._rootNodeFocusListenerCount.get(t)||0;r||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,Oa),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,Oa)}),this._rootNodeFocusListenerCount.set(t,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(le(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let r=this._rootNodeFocusListenerCount.get(t);r>1?this._rootNodeFocusListenerCount.set(t,r-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Oa),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Oa),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,r){this._setClasses(e,t),this._emitOrigin(r,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&t.push([o,r])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Fa=new WeakMap,Ne=(()=>{class n{_appRef;_injector=l(z);_environmentInjector=l(nt);load(e){let t=this._appRef=this._appRef||this._injector.get(yt),r=Fa.get(t);r||(r={loaders:new Set,refs:[]},Fa.set(t,r),t.onDestroy(()=>{Fa.get(t)?.refs.forEach(o=>o.destroy()),Fa.delete(t)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(wa(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var er=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=w({type:n,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return n})(),Na;function nv(){if(Na===void 0&&(Na=null,typeof window<"u")){let n=window;n.trustedTypes!==void 0&&(Na=n.trustedTypes.createPolicy("angular#components",{createHTML:i=>i}))}return Na}function yi(n){return nv()?.createHTML(n)||n}function Oh(n,i,e){let t=e.sanitize(pt.HTML,i);n.innerHTML=yi(t||"")}function Un(n){return Array.isArray(n)?n:[n]}var Fh=new Set,wi,tr=(()=>{class n{_platform=l(ce);_nonce=l(qi,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):rv}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&iv(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function iv(n,i){if(!Fh.has(n))try{wi||(wi=document.createElement("style"),i&&wi.setAttribute("nonce",i),wi.setAttribute("type","text/css"),document.head.appendChild(wi)),wi.sheet&&(wi.sheet.insertRule(`@media ${n} {body{ }}`,0),Fh.add(n))}catch(e){console.error(e)}}function rv(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var lo=(()=>{class n{_mediaMatcher=l(tr);_zone=l(B);_queries=new Map;_destroySubject=new y;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return Nh(Un(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=Nh(Un(e)).map(a=>this._registerQuery(a).observable),o=jr(r);return o=aa(o.pipe(xe(1)),o.pipe(ca(1),la(0))),o.pipe(X(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:c,query:d})=>{s.matches=s.matches||c,s.breakpoints[d]=c}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),o={observable:new at(a=>{let s=c=>this._zone.run(()=>a.next(c));return t.addListener(s),()=>{t.removeListener(s)}}).pipe(Ge(t),X(({matches:a})=>({query:e,matches:a})),le(this._destroySubject)),mql:t};return this._queries.set(e,o),o}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Nh(n){return n.map(i=>i.split(",")).reduce((i,e)=>i.concat(e)).map(i=>i.trim())}var ov=(()=>{class n{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var La=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=O({providers:[ov]})}return n})();var Ba=(()=>{class n{_platform=l(ce);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return sv(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let t=av(fv(e));if(t&&(Lh(t)===-1||!this.isVisible(t)))return!1;let r=e.nodeName.toLowerCase(),o=Lh(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!mv(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,t){return pv(e)&&!this.isDisabled(e)&&(t?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function av(n){try{return n.frameElement}catch(i){return null}}function sv(n){return!!(n.offsetWidth||n.offsetHeight||typeof n.getClientRects=="function"&&n.getClientRects().length)}function lv(n){let i=n.nodeName.toLowerCase();return i==="input"||i==="select"||i==="button"||i==="textarea"}function cv(n){return uv(n)&&n.type=="hidden"}function dv(n){return hv(n)&&n.hasAttribute("href")}function uv(n){return n.nodeName.toLowerCase()=="input"}function hv(n){return n.nodeName.toLowerCase()=="a"}function jh(n){if(!n.hasAttribute("tabindex")||n.tabIndex===void 0)return!1;let i=n.getAttribute("tabindex");return!!(i&&!isNaN(parseInt(i,10)))}function Lh(n){if(!jh(n))return null;let i=parseInt(n.getAttribute("tabindex")||"",10);return isNaN(i)?-1:i}function mv(n){let i=n.nodeName.toLowerCase(),e=i==="input"&&n.type;return e==="text"||e==="password"||i==="select"||i==="textarea"}function pv(n){return cv(n)?!1:lv(n)||dv(n)||n.hasAttribute("contenteditable")||jh(n)}function fv(n){return n.ownerDocument&&n.ownerDocument.defaultView||window}var pc=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(i){this._enabled=i,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_enabled=!0;constructor(i,e,t,r,o=!1,a){this._element=i,this._checker=e,this._ngZone=t,this._document=r,this._injector=a,o||this.attachAnchors()}destroy(){let i=this._startAnchor,e=this._endAnchor;i&&(i.removeEventListener("focus",this.startAnchorListener),i.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(i)))})}focusFirstTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(i)))})}focusLastTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(i)))})}_getRegionBoundary(i){let e=this._element.querySelectorAll(`[cdk-focus-region-${i}], [cdkFocusRegion${i}], [cdk-focus-${i}]`);return i=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(i){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let t=this._getFirstTabbableElement(e);return t?.focus(i),!!t}return e.focus(i),!0}return this.focusFirstTabbableElement(i)}focusFirstTabbableElement(i){let e=this._getRegionBoundary("start");return e&&e.focus(i),!!e}focusLastTabbableElement(i){let e=this._getRegionBoundary("end");return e&&e.focus(i),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let t=0;t<e.length;t++){let r=e[t].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[t]):null;if(r)return r}return null}_getLastTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let t=e.length-1;t>=0;t--){let r=e[t].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[t]):null;if(r)return r}return null}_createAnchor(){let i=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,i),i.classList.add("cdk-visually-hidden"),i.classList.add("cdk-focus-trap-anchor"),i.setAttribute("aria-hidden","true"),i}_toggleAnchorTabIndex(i,e){i?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(i){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_executeOnStable(i){this._injector?Ve(i,{injector:this._injector}):setTimeout(i)}},fc=(()=>{class n{_checker=l(Ba);_ngZone=l(B);_document=l(F);_injector=l(z);constructor(){l(Ne).load(er)}create(e,t=!1){return new pc(e,this._checker,this._ngZone,this._document,t,this._injector)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var zh=new b("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),Hh=new b("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),gv=0,co=(()=>{class n{_ngZone=l(B);_defaultOptions=l(Hh,{optional:!0});_liveElement;_document=l(F);_sanitizer=l(ro);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=l(zh,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...t){let r=this._defaultOptions,o,a;return t.length===1&&typeof t[0]=="number"?a=t[0]:[o,a]=t,this.clear(),clearTimeout(this._previousTimeout),o||(o=r&&r.politeness?r.politeness:"polite"),a==null&&r&&(a=r.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(s=>this._currentResolve=s)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:Oh(this._liveElement,e,this._sanitizer),typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",t=this._document.getElementsByClassName(e),r=this._document.createElement("div");for(let o=0;o<t.length;o++)t[o].remove();return r.classList.add(e),r.classList.add("cdk-visually-hidden"),r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live","polite"),r.id=`cdk-live-announcer-${gv++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(e){let t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<t.length;r++){let o=t[r],a=o.getAttribute("aria-owns");a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Gn=(function(n){return n[n.NONE=0]="NONE",n[n.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",n[n.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",n})(Gn||{}),Bh="cdk-high-contrast-black-on-white",Vh="cdk-high-contrast-white-on-black",mc="cdk-high-contrast-active",Uh=(()=>{class n{_platform=l(ce);_hasCheckedHighContrastMode=!1;_document=l(F);_breakpointSubscription;constructor(){this._breakpointSubscription=l(lo).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return Gn.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let t=this._document.defaultView||window,r=t&&t.getComputedStyle?t.getComputedStyle(e):null,o=(r&&r.backgroundColor||"").replace(/ /g,"");switch(e.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return Gn.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return Gn.BLACK_ON_WHITE}return Gn.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(mc,Bh,Vh),this._hasCheckedHighContrastMode=!0;let t=this.getHighContrastMode();t===Gn.BLACK_ON_WHITE?e.add(mc,Bh):t===Gn.WHITE_ON_BLACK&&e.add(mc,Vh)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ci=(()=>{class n{constructor(){l(Uh)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=O({imports:[La]})}return n})();var _v=200,Va=class{_letterKeyStream=new y;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new y;selectedItem=this._selectedItem;constructor(i,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:_v;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(i),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(i){this._selectedItemIndex=i}setItems(i){this._items=i}handleKey(i){let e=i.keyCode;i.key&&i.key.length===1?this._letterKeyStream.next(i.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(i){this._letterKeyStream.pipe(Ke(e=>this._pressedLetters.push(e)),la(i),ue(()=>this._pressedLetters.length>0),X(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let r=(this._selectedItemIndex+t)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function Xe(n,...i){return i.length?i.some(e=>n[e]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var nr=class{_items;_activeItemIndex=j(-1);_activeItem=j(null);_wrap=!1;_typeaheadSubscription=Ie.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=i=>i.disabled;constructor(i,e){this._items=i,i instanceof zr?this._itemChangesSubscription=i.changes.subscribe(t=>this._itemsChanged(t.toArray())):zn(i)&&(this._effectRef=Ft(()=>this._itemsChanged(i()),{injector:e}))}tabOut=new y;change=new y;skipPredicate(i){return this._skipPredicateFn=i,this}withWrap(i=!0){return this._wrap=i,this}withVerticalOrientation(i=!0){return this._vertical=i,this}withHorizontalOrientation(i){return this._horizontal=i,this}withAllowedModifierKeys(i){return this._allowedModifierKeys=i,this}withTypeAhead(i=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Va(e,{debounceInterval:typeof i=="number"?i:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(i=!0){return this._homeAndEnd=i,this}withPageUpDown(i=!0,e=10){return this._pageUpAndDown={enabled:i,delta:e},this}setActiveItem(i){let e=this._activeItem();this.updateActiveItem(i),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(i){let e=i.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!i[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||Xe(i,"shiftKey"))&&this._typeahead?.handleKey(i);return}this._typeahead?.reset(),i.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(i){let e=this._getItemsArray(),t=typeof i=="number"?i:e.indexOf(i),r=e[t];this._activeItem.set(r??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(i){this._wrap?this._setActiveInWrapMode(i):this._setActiveInDefaultMode(i)}_setActiveInWrapMode(i){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let r=(this._activeItemIndex()+i*t+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(i){this._setActiveItemByIndex(this._activeItemIndex()+i,i)}_setActiveItemByIndex(i,e){let t=this._getItemsArray();if(t[i]){for(;this._skipPredicateFn(t[i]);)if(i+=e,!t[i])return;this.setActiveItem(i)}}_getItemsArray(){return zn(this._items)?this._items():this._items instanceof zr?this._items.toArray():this._items}_itemsChanged(i){this._typeahead?.setItems(i);let e=this._activeItem();if(e){let t=i.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t))}}};var uo=class extends nr{setActiveItem(i){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(i),this.activeItem&&this.activeItem.setActiveStyles()}};var ho=class extends nr{_origin="program";setFocusOrigin(i){return this._origin=i,this}setActiveItem(i){super.setActiveItem(i),this.activeItem&&this.activeItem.focus(this._origin)}};var gc={},ve=class n{_appId=l(hi);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,e=!1){return this._appId!=="ng"&&(i+=this._appId),gc.hasOwnProperty(i)||(gc[i]=0),`${i}${e?n._infix+"-":""}${gc[i]++}`}static \u0275fac=function(e){return new(e||n)};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})};var Wh=" ";function bc(n,i,e){let t=za(n,i);e=e.trim(),!t.some(r=>r.trim()===e)&&(t.push(e),n.setAttribute(i,t.join(Wh)))}function Ha(n,i,e){let t=za(n,i);e=e.trim();let r=t.filter(o=>o!==e);r.length?n.setAttribute(i,r.join(Wh)):n.removeAttribute(i)}function za(n,i){return n.getAttribute(i)?.match(/\S+/g)??[]}var qh="cdk-describedby-message",ja="cdk-describedby-host",vc=0,yc=(()=>{class n{_platform=l(ce);_document=l(F);_messageRegistry=new Map;_messagesContainer=null;_id=`${vc++}`;constructor(){l(Ne).load(er),this._id=l(hi)+"-"+vc++}describe(e,t,r){if(!this._canBeDescribed(e,t))return;let o=_c(t,r);typeof t!="string"?($h(t,this._id),this._messageRegistry.set(o,{messageElement:t,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(t,r),this._isElementDescribedByMessage(e,o)||this._addMessageReference(e,o)}removeDescription(e,t,r){if(!t||!this._isElementNode(e))return;let o=_c(t,r);if(this._isElementDescribedByMessage(e,o)&&this._removeMessageReference(e,o),typeof t=="string"){let a=this._messageRegistry.get(o);a&&a.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${ja}="${this._id}"]`);for(let t=0;t<e.length;t++)this._removeCdkDescribedByReferenceIds(e[t]),e[t].removeAttribute(ja);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,t){let r=this._document.createElement("div");$h(r,this._id),r.textContent=e,t&&r.setAttribute("role",t),this._createMessagesContainer(),this._messagesContainer.appendChild(r),this._messageRegistry.set(_c(e,t),{messageElement:r,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",t=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let o=0;o<t.length;o++)t[o].remove();let r=this._document.createElement("div");r.style.visibility="hidden",r.classList.add(e),r.classList.add("cdk-visually-hidden"),this._platform.isBrowser||r.setAttribute("platform","server"),this._document.body.appendChild(r),this._messagesContainer=r}_removeCdkDescribedByReferenceIds(e){let t=za(e,"aria-describedby").filter(r=>r.indexOf(qh)!=0);e.setAttribute("aria-describedby",t.join(" "))}_addMessageReference(e,t){let r=this._messageRegistry.get(t);bc(e,"aria-describedby",r.messageElement.id),e.setAttribute(ja,this._id),r.referenceCount++}_removeMessageReference(e,t){let r=this._messageRegistry.get(t);r.referenceCount--,Ha(e,"aria-describedby",r.messageElement.id),e.removeAttribute(ja)}_isElementDescribedByMessage(e,t){let r=za(e,"aria-describedby"),o=this._messageRegistry.get(t),a=o&&o.messageElement.id;return!!a&&r.indexOf(a)!=-1}_canBeDescribed(e,t){if(!this._isElementNode(e))return!1;if(t&&typeof t=="object")return!0;let r=t==null?"":`${t}`.trim(),o=e.getAttribute("aria-label");return r?!o||o.trim()!==r:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function _c(n,i){return typeof n=="string"?`${i||""}/${n}`:n}function $h(n,i){n.id||(n.id=`${qh}-${i}-${vc++}`)}var Yh={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};function wc(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function qe(n){return n==null?"":typeof n=="string"?n:`${n}px`}var vv=new b("cdk-dir-doc",{providedIn:"root",factory:()=>l(F)}),bv=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Xh(n){let i=n?.toLowerCase()||"";return i==="auto"&&typeof navigator<"u"&&navigator?.language?bv.test(navigator.language)?"rtl":"ltr":i==="rtl"?"rtl":"ltr"}var Ue=(()=>{class n{get value(){return this.valueSignal()}valueSignal=j("ltr");change=new N;constructor(){let e=l(vv,{optional:!0});if(e){let t=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(Xh(t||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var qt=(function(n){return n[n.NORMAL=0]="NORMAL",n[n.NEGATED=1]="NEGATED",n[n.INVERTED=2]="INVERTED",n})(qt||{}),Ua,Ei;function Ga(){if(Ei==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Ei=!1,Ei;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)Ei=!0;else{let n=Element.prototype.scrollTo;n?Ei=!/\{\s*\[native code\]\s*\}/.test(n.toString()):Ei=!1}}return Ei}function ir(){if(typeof document!="object"||!document)return qt.NORMAL;if(Ua==null){let n=document.createElement("div"),i=n.style;n.dir="rtl",i.width="1px",i.overflow="auto",i.visibility="hidden",i.pointerEvents="none",i.position="absolute";let e=document.createElement("div"),t=e.style;t.width="2px",t.height="1px",n.appendChild(e),document.body.appendChild(n),Ua=qt.NORMAL,n.scrollLeft===0&&(n.scrollLeft=1,Ua=n.scrollLeft===0?qt.NEGATED:qt.INVERTED),n.remove()}return Ua}var re=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=O({})}return n})();var yv=20,ln=(()=>{class n{_ngZone=l(B);_platform=l(ce);_renderer=l(je).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new y;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=yv){return this._platform.isBrowser?new at(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(El(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):V()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let r=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(ue(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&t.push(o)}),t}_scrollableContainsElement(e,t){let r=He(t),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Cc=(()=>{class n{elementRef=l(P);scrollDispatcher=l(ln);ngZone=l(B);dir=l(Ue,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new y;_renderer=l(me);_cleanupScroll;_elementScrolled=new y;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let t=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),r&&ir()!=qt.NORMAL?(e.left!=null&&(e.right=t.scrollWidth-t.clientWidth-e.left),ir()==qt.INVERTED?e.left=e.right:ir()==qt.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let t=this.elementRef.nativeElement;Ga()?t.scrollTo(e):(e.top!=null&&(t.scrollTop=e.top),e.left!=null&&(t.scrollLeft=e.left))}measureScrollOffset(e){let t="left",r="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let a=this.dir&&this.dir.value=="rtl";return e=="start"?e=a?r:t:e=="end"&&(e=a?t:r),a&&ir()==qt.INVERTED?e==t?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:a&&ir()==qt.NEGATED?e==t?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==t?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return n})(),wv=20,Bt=(()=>{class n{_platform=l(ce);_listeners;_viewportSize=null;_change=new y;_document=l(F);constructor(){let e=l(B),t=l(je).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[t.listen("window","resize",r),t.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+t,height:r,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),a=-o.top||e.body?.scrollTop||t.scrollY||r.scrollTop||0,s=-o.left||e.body?.scrollLeft||t.scrollX||r.scrollLeft||0;return{top:a,left:s}}change(e=wv){return e>0?this._change.pipe(El(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var sn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=O({})}return n})(),Dc=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=O({imports:[re,sn,re,sn]})}return n})();var mo=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},Yt=class extends mo{component;viewContainerRef;injector;projectableNodes;bindings;constructor(i,e,t,r,o){super(),this.component=i,this.viewContainerRef=e,this.injector=t,this.projectableNodes=r,this.bindings=o||null}},Xt=class extends mo{templateRef;viewContainerRef;context;injector;constructor(i,e,t,r){super(),this.templateRef=i,this.viewContainerRef=e,this.context=t,this.injector=r}get origin(){return this.templateRef.elementRef}attach(i,e=this.context){return this.context=e,super.attach(i)}detach(){return this.context=void 0,super.detach()}},Sc=class extends mo{element;constructor(i){super(),this.element=i instanceof P?i.nativeElement:i}},$n=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof Yt)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof Xt)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof Sc)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},po=class extends $n{outletElement;_appRef;_defaultInjector;constructor(i,e,t){super(),this.outletElement=i,this._appRef=e,this._defaultInjector=t}attachComponentPortal(i){let e;if(i.viewContainerRef){let t=i.injector||i.viewContainerRef.injector,r=t.get(ha,null,{optional:!0})||void 0;e=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:t,ngModuleRef:r,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,r=i.injector||this._defaultInjector||z.NULL,o=r.get(nt,t.injector);e=wa(i.component,{elementInjector:r,environmentInjector:o,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=i,e}attachTemplatePortal(i){let e=i.viewContainerRef,t=e.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return t.rootNodes.forEach(r=>this.outletElement.appendChild(r)),t.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(t);r!==-1&&e.remove(r)}),this._attachedPortal=i,t}attachDomPortal=i=>{let e=i.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=i,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}};var Wn=(()=>{class n extends $n{_moduleRef=l(ha,{optional:!0});_document=l(F);_viewContainerRef=l(lt);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new N;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return t!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),t.parentNode.insertBefore(r,t),this._getRootNode().appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(t,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[fe]})}return n})(),qn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=O({})}return n})();var Zh=Ga();function ar(n){return new $a(n.get(Bt),n.get(F))}var $a=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,e){this._viewportRuler=i,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||"",this._previousHTMLStyles.top=i.style.top||"",i.style.left=qe(-this._previousScrollPosition.left),i.style.top=qe(-this._previousScrollPosition.top),i.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,e=this._document.body,t=i.style,r=e.style,o=t.scrollBehavior||"",a=r.scrollBehavior||"";this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,i.classList.remove("cdk-global-scrollblock"),Zh&&(t.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Zh&&(t.scrollBehavior=o,r.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function im(n,i){return new Wa(n.get(ln),n.get(B),n.get(Bt),i)}var Wa=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(i,e,t,r){this._scrollDispatcher=i,this._ngZone=e,this._viewportRuler=t,this._config=r}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(this._scrollSubscription)return;let i=this._scrollDispatcher.scrolled(0).pipe(ue(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=i.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=i.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var fo=class{enable(){}disable(){}attach(){}};function xc(n,i){return i.some(e=>{let t=n.bottom<e.top,r=n.top>e.bottom,o=n.right<e.left,a=n.left>e.right;return t||r||o||a})}function Kh(n,i){return i.some(e=>{let t=n.top<e.top,r=n.bottom>e.bottom,o=n.left<e.left,a=n.right>e.right;return t||r||o||a})}function kn(n,i){return new qa(n.get(ln),n.get(Bt),n.get(B),i)}var qa=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(i,e,t,r){this._scrollDispatcher=i,this._viewportRuler=e,this._ngZone=t,this._config=r}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(!this._scrollSubscription){let i=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(i).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:r}=this._viewportRuler.getViewportSize();xc(e,[{width:t,height:r,bottom:r,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},rm=(()=>{class n{_injector=l(z);constructor(){}noop=()=>new fo;close=e=>im(this._injector,e);block=()=>ar(this._injector);reposition=e=>kn(this._injector,e);static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Zt=class{positionStrategy;scrollStrategy=new fo;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let e=Object.keys(i);for(let t of e)i[t]!==void 0&&(this[t]=i[t])}}};var Ya=class{connectionPair;scrollableViewProperties;constructor(i,e){this.connectionPair=i,this.scrollableViewProperties=e}};var om=(()=>{class n{_attachedOverlays=[];_document=l(F);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),am=(()=>{class n extends om{_ngZone=l(B);_renderer=l(je).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let r=t.length-1;r>-1;r--){let o=t[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=mt(n)))(r||n)}})();static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),sm=(()=>{class n extends om{_platform=l(ce);_ngZone=l(B);_renderer=l(je).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(t,"pointerdown",this._pointerDownListener,r),o.listen(t,"click",this._clickListener,r),o.listen(t,"auxclick",this._clickListener,r),o.listen(t,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=ze(e)};_clickListener=e=>{let t=ze(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let s=o[a],c=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,c))){if(Qh(s.overlayElement,t)||Qh(s.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>c.next(e)):c.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=mt(n)))(r||n)}})();static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Qh(n,i){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=i;for(;t;){if(t===n)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var lm=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=w({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),Ka=(()=>{class n{_platform=l(ce);_containerElement;_document=l(F);_styleLoader=l(Ne);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||wc()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let t=this._document.createElement("div");t.classList.add(e),wc()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(lm)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Mc=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,e,t,r){this._renderer=e,this._ngZone=t,this.element=i.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents="none",i.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Ec(n){return n&&n.nodeType===1}var rr=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new y;_attachments=new y;_detachments=new y;_positionStrategy;_scrollStrategy;_locationChanges=Ie.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new y;_outsidePointerEvents=new y;_afterNextRenderRef;constructor(i,e,t,r,o,a,s,c,d,m=!1,f,S){this._portalOutlet=i,this._host=e,this._pane=t,this._config=r,this._ngZone=o,this._keyboardDispatcher=a,this._document=s,this._location=c,this._outsideClickDispatcher=d,this._animationsDisabled=m,this._injector=f,this._renderer=S,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(i);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Ve(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=v(v({},this._config),i),this._updateElementSize()}setDirection(i){this._config=se(v({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i=="string"?i:i.value:"ltr"}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=qe(this._config.width),i.height=qe(this._config.height),i.minWidth=qe(this._config.minWidth),i.minHeight=qe(this._config.minHeight),i.maxWidth=qe(this._config.maxWidth),i.maxHeight=qe(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?"":"none"}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Ec(i)?i.after(this._host):i?.type==="parent"?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch(i){}}_attachBackdrop(){let i="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Mc(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,e,t){let r=Un(e||[]).filter(o=>!!o);r.length&&(t?i.classList.add(...r):i.classList.remove(...r))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=Ve(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(e){if(i)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}},Jh="cdk-overlay-connected-position-bounding-box",Dv=/([A-Za-z%]+)$/;function Ri(n,i){return new Xa(i,n.get(Bt),n.get(F),n.get(ce),n.get(Ka))}var Xa=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new y;_resizeSubscription=Ie.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(i,e,t,r,o){this._viewportRuler=e,this._document=t,this._platform=r,this._overlayContainer=o,this.setOrigin(i)}attach(i){this._overlayRef&&this._overlayRef,this._validatePositions(),i.hostElement.classList.add(Jh),this._overlayRef=i,this._boundingBox=i.hostElement,this._pane=i.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let i=this._originRect,e=this._overlayRect,t=this._viewportRect,r=this._containerRect,o=[],a;for(let s of this._preferredPositions){let c=this._getOriginPoint(i,r,s),d=this._getOverlayPoint(c,e,s),m=this._getOverlayFit(d,e,t,s);if(m.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,c);return}if(this._canFitWithFlexibleDimensions(m,d,t)){o.push({position:s,origin:c,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(c,s)});continue}(!a||a.overlayFit.visibleArea<m.visibleArea)&&(a={overlayFit:m,overlayPoint:d,originPoint:c,position:s,overlayRect:e})}if(o.length){let s=null,c=-1;for(let d of o){let m=d.boundingBoxRect.width*d.boundingBoxRect.height*(d.position.weight||1);m>c&&(c=m,s=d)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Ii(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Jh),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let i=this._lastPosition;i?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(i,this._getOriginPoint(this._originRect,this._containerRect,i))):this.apply()}withScrollableContainers(i){return this._scrollables=i,this}withPositions(i){return this._preferredPositions=i,i.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(i){return this._viewportMargin=i,this}withFlexibleDimensions(i=!0){return this._hasFlexibleDimensions=i,this}withGrowAfterOpen(i=!0){return this._growAfterOpen=i,this}withPush(i=!0){return this._canPush=i,this}withLockedPosition(i=!0){return this._positionLocked=i,this}setOrigin(i){return this._origin=i,this}withDefaultOffsetX(i){return this._offsetX=i,this}withDefaultOffsetY(i){return this._offsetY=i,this}withTransformOriginOn(i){return this._transformOriginSelector=i,this}withPopoverLocation(i){return this._popoverLocation=i,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof P?this._origin.nativeElement:Ec(this._origin)?this._origin:null}_getOriginPoint(i,e,t){let r;if(t.originX=="center")r=i.left+i.width/2;else{let a=this._isRtl()?i.right:i.left,s=this._isRtl()?i.left:i.right;r=t.originX=="start"?a:s}e.left<0&&(r-=e.left);let o;return t.originY=="center"?o=i.top+i.height/2:o=t.originY=="top"?i.top:i.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(i,e,t){let r;t.overlayX=="center"?r=-e.width/2:t.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return t.overlayY=="center"?o=-e.height/2:o=t.overlayY=="top"?0:-e.height,{x:i.x+r,y:i.y+o}}_getOverlayFit(i,e,t,r){let o=tm(e),{x:a,y:s}=i,c=this._getOffset(r,"x"),d=this._getOffset(r,"y");c&&(a+=c),d&&(s+=d);let m=0-a,f=a+o.width-t.width,S=0-s,H=s+o.height-t.height,Y=this._subtractOverflows(o.width,m,f),Q=this._subtractOverflows(o.height,S,H),R=Y*Q;return{visibleArea:R,isCompletelyWithinViewport:o.width*o.height===R,fitsInViewportVertically:Q===o.height,fitsInViewportHorizontally:Y==o.width}}_canFitWithFlexibleDimensions(i,e,t){if(this._hasFlexibleDimensions){let r=t.bottom-e.y,o=t.right-e.x,a=em(this._overlayRef.getConfig().minHeight),s=em(this._overlayRef.getConfig().minWidth),c=i.fitsInViewportVertically||a!=null&&a<=r,d=i.fitsInViewportHorizontally||s!=null&&s<=o;return c&&d}return!1}_pushOverlayOnScreen(i,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:i.x+this._previousPushAmount.x,y:i.y+this._previousPushAmount.y};let r=tm(e),o=this._viewportRect,a=Math.max(i.x+r.width-o.width,0),s=Math.max(i.y+r.height-o.height,0),c=Math.max(o.top-t.top-i.y,0),d=Math.max(o.left-t.left-i.x,0),m=0,f=0;return r.width<=o.width?m=d||-a:m=i.x<this._getViewportMarginStart()?o.left-t.left-i.x:0,r.height<=o.height?f=c||-s:f=i.y<this._getViewportMarginTop()?o.top-t.top-i.y:0,this._previousPushAmount={x:m,y:f},{x:i.x+m,y:i.y+f}}_applyPosition(i,e){if(this._setTransformOrigin(i),this._setOverlayElementStyles(e,i),this._setBoundingBoxStyles(e,i),i.panelClass&&this._addPanelClasses(i.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(i!==this._lastPosition||!this._lastScrollVisibility||!Sv(this._lastScrollVisibility,t)){let r=new Ya(i,t);this._positionChanges.next(r)}this._lastScrollVisibility=t}this._lastPosition=i,this._isInitialRender=!1}_setTransformOrigin(i){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,r=i.overlayY;i.overlayX==="center"?t="center":this._isRtl()?t=i.overlayX==="start"?"right":"left":t=i.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${t} ${r}`}_calculateBoundingBoxRect(i,e){let t=this._viewportRect,r=this._isRtl(),o,a,s;if(e.overlayY==="top")a=i.y,o=t.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=t.height-i.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=t.height-s+this._getViewportMarginTop();else{let H=Math.min(t.bottom-i.y+t.top,i.y),Y=this._lastBoundingBoxSize.height;o=H*2,a=i.y-H,o>Y&&!this._isInitialRender&&!this._growAfterOpen&&(a=i.y-Y/2)}let c=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,d=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,m,f,S;if(d)S=t.width-i.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),m=i.x-this._getViewportMarginStart();else if(c)f=i.x,m=t.right-i.x-this._getViewportMarginEnd();else{let H=Math.min(t.right-i.x+t.left,i.x),Y=this._lastBoundingBoxSize.width;m=H*2,f=i.x-H,m>Y&&!this._isInitialRender&&!this._growAfterOpen&&(f=i.x-Y/2)}return{top:a,left:f,bottom:s,right:S,width:m,height:o}}_setBoundingBoxStyles(i,e){let t=this._calculateBoundingBoxRect(i,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;r.width=qe(t.width),r.height=qe(t.height),r.top=qe(t.top)||"auto",r.bottom=qe(t.bottom)||"auto",r.left=qe(t.left)||"auto",r.right=qe(t.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=qe(o)),a&&(r.maxWidth=qe(a))}this._lastBoundingBoxSize=t,Ii(this._boundingBox.style,r)}_resetBoundingBoxStyles(){Ii(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Ii(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(i,e){let t={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(r){let m=this._viewportRuler.getViewportScrollPosition();Ii(t,this._getExactOverlayY(e,i,m)),Ii(t,this._getExactOverlayX(e,i,m))}else t.position="static";let s="",c=this._getOffset(e,"x"),d=this._getOffset(e,"y");c&&(s+=`translateX(${c}px) `),d&&(s+=`translateY(${d}px)`),t.transform=s.trim(),a.maxHeight&&(r?t.maxHeight=qe(a.maxHeight):o&&(t.maxHeight="")),a.maxWidth&&(r?t.maxWidth=qe(a.maxWidth):o&&(t.maxWidth="")),Ii(this._pane.style,t)}_getExactOverlayY(i,e,t){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,i);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t)),i.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;r.bottom=`${a-(o.y+this._overlayRect.height)}px`}else r.top=qe(o.y);return r}_getExactOverlayX(i,e,t){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,i);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t));let a;if(this._isRtl()?a=i.overlayX==="end"?"left":"right":a=i.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;r.right=`${s-(o.x+this._overlayRect.width)}px`}else r.left=qe(o.x);return r}_getScrollVisibility(){let i=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Kh(i,t),isOriginOutsideView:xc(i,t),isOverlayClipped:Kh(e,t),isOverlayOutsideView:xc(e,t)}}_subtractOverflows(i,...e){return e.reduce((t,r)=>t-Math.max(r,0),i)}_getNarrowedViewportRect(){let i=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+i-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:i-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(i,e){return e==="x"?i.offsetX==null?this._offsetX:i.offsetX:i.offsetY==null?this._offsetY:i.offsetY}_validatePositions(){}_addPanelClasses(i){this._pane&&Un(i).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(i=>{this._pane.classList.remove(i)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let i=this._origin;if(i instanceof P)return i.nativeElement.getBoundingClientRect();if(i instanceof Element)return i.getBoundingClientRect();let e=i.width||0,t=i.height||0;return{top:i.y,bottom:i.y+t,left:i.x,right:i.x+e,height:t,width:e}}_getContainerRect(){let i=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();i&&(e.style.display="block");let t=e.getBoundingClientRect();return i&&(e.style.display=""),t}};function Ii(n,i){for(let e in i)i.hasOwnProperty(e)&&(n[e]=i[e]);return n}function em(n){if(typeof n!="number"&&n!=null){let[i,e]=n.split(Dv);return!e||e==="px"?parseFloat(i):null}return n||null}function tm(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function Sv(n,i){return n===i?!0:n.isOriginClipped===i.isOriginClipped&&n.isOriginOutsideView===i.isOriginOutsideView&&n.isOverlayClipped===i.isOverlayClipped&&n.isOverlayOutsideView===i.isOverlayOutsideView}var nm="cdk-global-overlay-wrapper";function Yn(n){return new Za}var Za=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(i){let e=i.getConfig();this._overlayRef=i,this._width&&!e.width&&i.updateSize({width:this._width}),this._height&&!e.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(nm),this._isDisposed=!1}top(i=""){return this._bottomOffset="",this._topOffset=i,this._alignItems="flex-start",this}left(i=""){return this._xOffset=i,this._xPosition="left",this}bottom(i=""){return this._topOffset="",this._bottomOffset=i,this._alignItems="flex-end",this}right(i=""){return this._xOffset=i,this._xPosition="right",this}start(i=""){return this._xOffset=i,this._xPosition="start",this}end(i=""){return this._xOffset=i,this._xPosition="end",this}width(i=""){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=""){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=""){return this.left(i),this._xPosition="center",this}centerVertically(i=""){return this.top(i),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:a,maxHeight:s}=t,c=(r==="100%"||r==="100vw")&&(!a||a==="100%"||a==="100vw"),d=(o==="100%"||o==="100vh")&&(!s||s==="100%"||s==="100vh"),m=this._xPosition,f=this._xOffset,S=this._overlayRef.getConfig().direction==="rtl",H="",Y="",Q="";c?Q="flex-start":m==="center"?(Q="center",S?Y=f:H=f):S?m==="left"||m==="end"?(Q="flex-end",H=f):(m==="right"||m==="start")&&(Q="flex-start",Y=f):m==="left"||m==="start"?(Q="flex-start",H=f):(m==="right"||m==="end")&&(Q="flex-end",Y=f),i.position=this._cssPosition,i.marginLeft=c?"0":H,i.marginTop=d?"0":this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=c?"0":Y,e.justifyContent=Q,e.alignItems=d?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(nm),t.justifyContent=t.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position="",this._overlayRef=null,this._isDisposed=!0}},cm=(()=>{class n{_injector=l(z);constructor(){}global(){return Yn()}flexibleConnectedTo(e){return Ri(this._injector,e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),go=new b("OVERLAY_DEFAULT_CONFIG");function Kt(n,i){n.get(Ne).load(lm);let e=n.get(Ka),t=n.get(F),r=n.get(ve),o=n.get(yt),a=n.get(Ue),s=n.get(me,null,{optional:!0})||n.get(je).createRenderer(null,null),c=new Zt(i),d=n.get(go,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||a.value,"showPopover"in t.body?c.usePopover=i?.usePopover??d:c.usePopover=!1;let m=t.createElement("div"),f=t.createElement("div");m.id=r.getId("cdk-overlay-"),m.classList.add("cdk-overlay-pane"),f.appendChild(m),c.usePopover&&(f.setAttribute("popover","manual"),f.classList.add("cdk-overlay-popover"));let S=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return Ec(S)?S.after(f):S?.type==="parent"?S.element.appendChild(f):e.getContainerElement().appendChild(f),new rr(new po(m,o,n),f,m,c,n.get(B),n.get(am),t,n.get(on),n.get(sm),i?.disableAnimations??n.get(Wi,null,{optional:!0})==="NoopAnimations",n.get(nt),s)}var dm=(()=>{class n{scrollStrategies=l(rm);_positionBuilder=l(cm);_injector=l(z);constructor(){}create(e){return Kt(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),xv=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],Mv=new b("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let n=l(z);return()=>kn(n)}}),or=(()=>{class n{elementRef=l(P);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return n})(),um=new b("cdk-connected-overlay-default-config"),Qa=(()=>{class n{_dir=l(Ue,{optional:!0});_injector=l(z);_overlayRef;_templatePortal;_backdropSubscription=Ie.EMPTY;_attachSubscription=Ie.EMPTY;_detachSubscription=Ie.EMPTY;_positionSubscription=Ie.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=l(Mv);_ngZone=l(B);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new N;positionChange=new N;attach=new N;detach=new N;overlayKeydown=new N;overlayOutsideClick=new N;constructor(){let e=l(bt),t=l(lt),r=l(um,{optional:!0}),o=l(go,{optional:!0});this.usePopover=o?.usePopover===!1?null:"global",this._templatePortal=new Xt(e,t),this.scrollStrategy=this._scrollStrategyFactory(),r&&this._assignConfig(r)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=xv);let e=this._overlayRef=Kt(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(t=>{this.overlayKeydown.next(t),t.keyCode===27&&!this.disableClose&&!Xe(t)&&(t.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(t=>{let r=this._getOriginElement(),o=ze(t);(!r||r!==o&&!r.contains(o))&&this.overlayOutsideClick.next(t)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),t=new Zt({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(t.height=this.height),(this.minWidth||this.minWidth===0)&&(t.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(t.minHeight=this.minHeight),this.backdropClass&&(t.backdropClass=this.backdropClass),this.panelClass&&(t.panelClass=this.panelClass),t}_updatePositionStrategy(e){let t=this.positions.map(r=>({originX:r.originX,originY:r.originY,overlayX:r.overlayX,overlayY:r.overlayY,offsetX:r.offsetX||this.offsetX,offsetY:r.offsetY||this.offsetY,panelClass:r.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(t).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=Ri(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof or?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof or?this.origin.elementRef.nativeElement:this.origin instanceof P?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(t=>this.backdropClick.emit(t)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(mu(()=>this.positionChange.observers.length>0)).subscribe(t=>{this._ngZone.run(()=>this.positionChange.emit(t)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",A],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",A],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",A],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",A],push:[2,"cdkConnectedOverlayPush","push",A],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",A],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",A],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[Fe]})}return n})(),Vt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=O({providers:[dm],imports:[re,qn,Dc,Dc]})}return n})();var sr,hm=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Ic(){if(sr)return sr;if(typeof document!="object"||!document)return sr=new Set(hm),sr;let n=document.createElement("input");return sr=new Set(hm.filter(i=>(n.setAttribute("type",i),n.type===i))),sr}var Ev=new b("MATERIAL_ANIMATIONS"),mm=null;function Rc(){return l(Ev,{optional:!0})?.animationsDisabled||l(Wi,{optional:!0})==="NoopAnimations"?"di-disabled":(mm??=l(tr).matchMedia("(prefers-reduced-motion)").matches,mm?"reduced-motion":"enabled")}function Me(){return Rc()!=="enabled"}function An(n){return n!=null&&`${n}`!="false"}var kt=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(kt||{}),Ja=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=kt.HIDDEN;constructor(i,e,t,r=!1){this._renderer=i,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},pm=Ji({passive:!0,capture:!0}),Tc=class{_events=new Map;addHandler(i,e,t,r){let o=this._events.get(e);if(o){let a=o.get(t);a?a.add(r):o.set(t,new Set([r]))}else this._events.set(e,new Map([[t,new Set([r])]])),i.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,pm)})}removeHandler(i,e,t){let r=this._events.get(i);if(!r)return;let o=r.get(e);o&&(o.delete(t),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,pm)))}_delegateEventHandler=i=>{let e=ze(i);e&&this._events.get(i.type)?.forEach((t,r)=>{(r===e||r.contains(e))&&t.forEach(o=>o.handleEvent(i))})}},lr={enterDuration:225,exitDuration:150},Iv=800,fm=Ji({passive:!0,capture:!0}),gm=["mousedown","touchstart"],_m=["mouseup","mouseleave","touchend","touchcancel"],Rv=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=w({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return n})(),cr=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Tc;constructor(i,e,t,r,o){this._target=i,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=He(t)),o&&o.get(Ne).load(Rv)}fadeInRipple(i,e,t={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=v(v({},lr),t.animation);t.centered&&(i=r.left+r.width/2,e=r.top+r.height/2);let a=t.radius||Tv(i,e,r),s=i-r.left,c=e-r.top,d=o.enterDuration,m=document.createElement("div");m.classList.add("mat-ripple-element"),m.style.left=`${s-a}px`,m.style.top=`${c-a}px`,m.style.height=`${a*2}px`,m.style.width=`${a*2}px`,t.color!=null&&(m.style.backgroundColor=t.color),m.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(m);let f=window.getComputedStyle(m),S=f.transitionProperty,H=f.transitionDuration,Y=S==="none"||H==="0s"||H==="0s, 0s"||r.width===0&&r.height===0,Q=new Ja(this,m,t,Y);m.style.transform="scale3d(1, 1, 1)",Q.state=kt.FADING_IN,t.persistent||(this._mostRecentTransientRipple=Q);let R=null;return!Y&&(d||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let oe=()=>{R&&(R.fallbackTimer=null),clearTimeout(Pe),this._finishRippleTransition(Q)},ye=()=>this._destroyRipple(Q),Pe=setTimeout(ye,d+100);m.addEventListener("transitionend",oe),m.addEventListener("transitioncancel",ye),R={onTransitionEnd:oe,onTransitionCancel:ye,fallbackTimer:Pe}}),this._activeRipples.set(Q,R),(Y||!d)&&this._finishRippleTransition(Q),Q}fadeOutRipple(i){if(i.state===kt.FADING_OUT||i.state===kt.HIDDEN)return;let e=i.element,t=v(v({},lr),i.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",i.state=kt.FADING_OUT,(i._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let e=He(i);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,gm.forEach(t=>{n._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{_m.forEach(e=>{this._triggerElement.addEventListener(e,this,fm)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===kt.FADING_IN?this._startFadeOutTransition(i):i.state===kt.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let e=i===this._mostRecentTransientRipple,{persistent:t}=i.config;i.state=kt.VISIBLE,!t&&(!e||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let e=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=kt.HIDDEN,e!==null&&(i.element.removeEventListener("transitionend",e.onTransitionEnd),i.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),i.element.remove()}_onMousedown(i){let e=In(i),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Iv;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!Rn(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=i.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let e=i.state===kt.VISIBLE||i.config.terminateOnPointerUp&&i.state===kt.FADING_IN;!i.config.persistent&&e&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(gm.forEach(e=>n._eventManager.removeHandler(e,i,this)),this._pointerUpEventsRegistered&&(_m.forEach(e=>i.removeEventListener(e,this,fm)),this._pointerUpEventsRegistered=!1))}};function Tv(n,i,e){let t=Math.max(Math.abs(n-e.left),Math.abs(n-e.right)),r=Math.max(Math.abs(i-e.top),Math.abs(i-e.bottom));return Math.sqrt(t*t+r*r)}var es=new b("mat-ripple-global-options"),Je=(()=>{class n{_elementRef=l(P);_animationsDisabled=Me();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=l(B),t=l(ce),r=l(es,{optional:!0}),o=l(z);this._globalOptions=r||{},this._rippleRenderer=new cr(this,e,this._elementRef,t,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:v(v(v({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,v(v({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,v(v({},this.rippleConfig),e))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,r){t&2&&T("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return n})();var kv={capture:!0},Av=["focus","mousedown","mouseenter","touchstart"],kc="mat-ripple-loader-uninitialized",Ac="mat-ripple-loader-class-name",vm="mat-ripple-loader-centered",ts="mat-ripple-loader-disabled",bm=(()=>{class n{_document=l(F);_animationsDisabled=Me();_globalRippleOptions=l(es,{optional:!0});_platform=l(ce);_ngZone=l(B);_injector=l(z);_eventCleanups;_hosts=new Map;constructor(){let e=l(je).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Av.map(t=>e.listen(this._document,t,this._onInteraction,kv)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(kc,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(Ac))&&e.setAttribute(Ac,t.className||""),t.centered&&e.setAttribute(vm,""),t.disabled&&e.setAttribute(ts,"")}setDisabled(e,t){let r=this._hosts.get(e);r?(r.target.rippleDisabled=t,!t&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):t?e.setAttribute(ts,""):e.removeAttribute(ts)}_onInteraction=e=>{let t=ze(e);if(t instanceof HTMLElement){let r=t.closest(`[${kc}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(Ac)),e.append(t);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??lr.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??lr.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(ts),rippleConfig:{centered:e.hasAttribute(vm),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},c=new cr(s,this._ngZone,t,this._platform,this._injector),d=!s.rippleDisabled;d&&c.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:c,hasSetUpEvents:d}),e.removeAttribute(kc)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var cn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=w({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,r){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var Pv=["mat-icon-button",""],Ov=["*"],Fv=new b("MAT_BUTTON_CONFIG");function ym(n){return n==null?void 0:Tt(n)}var _o=(()=>{class n{_elementRef=l(P);_ngZone=l(B);_animationsDisabled=Me();_config=l(Fv,{optional:!0});_focusMonitor=l(wt);_cleanupClick;_renderer=l(me);_rippleLoader=l(bm);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){l(Ne).load(cn);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(t,r){t&2&&(Z("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),rt(r.color?"mat-"+r.color:""),T("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",A],disabled:[2,"disabled","disabled",A],ariaDisabled:[2,"aria-disabled","ariaDisabled",A],disabledInteractive:[2,"disabledInteractive","disabledInteractive",A],tabIndex:[2,"tabIndex","tabIndex",ym],_tabindex:[2,"tabindex","_tabindex",ym]}})}return n})(),Pn=(()=>{class n extends _o{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=w({type:n,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[fe],attrs:Pv,ngContentSelectors:Ov,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(De(),We(0,"span",0),K(1),We(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var ct=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=O({imports:[re]})}return n})();var Nv=["matButton",""],Pc=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],Oc=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"],Lv=["mat-fab",""],Bv=["mat-mini-fab",""],Vv=`.mat-mdc-fab-base {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 56px;
  height: 56px;
  padding: 0;
  border: none;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  overflow: visible;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-fab-base .mat-mdc-button-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-fab-base .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-fab-base .mdc-button__label,
.mat-mdc-fab-base .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-fab-base .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-mdc-fab-base:focus-visible > .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-fab-base._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-fab-base::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mat-mdc-fab-base[hidden] {
  display: none;
}
.mat-mdc-fab-base::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mat-mdc-fab-base:active, .mat-mdc-fab-base:focus {
  outline: none;
}
.mat-mdc-fab-base:hover {
  cursor: pointer;
}
.mat-mdc-fab-base > svg {
  width: 100%;
}
.mat-mdc-fab-base .mat-icon, .mat-mdc-fab-base .material-icons {
  transition: transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);
  fill: currentColor;
  will-change: transform;
}
.mat-mdc-fab-base .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base[disabled]:focus, .mat-mdc-fab-base.mat-mdc-button-disabled, .mat-mdc-fab-base.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-fab-base.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-fab {
  background-color: var(--mat-fab-container-color, var(--mat-sys-primary-container));
  border-radius: var(--mat-fab-container-shape, var(--mat-sys-corner-large));
  color: var(--mat-fab-foreground-color, var(--mat-sys-on-primary-container, inherit));
  box-shadow: var(--mat-fab-container-elevation-shadow, var(--mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-fab:hover {
    box-shadow: var(--mat-fab-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-fab:focus {
  box-shadow: var(--mat-fab-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-fab:active, .mat-mdc-fab:focus:active {
  box-shadow: var(--mat-fab-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-fab[disabled], .mat-mdc-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-fab-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-fab-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-fab-touch-target-size, 48px);
  display: var(--mat-fab-touch-target-display, block);
  left: 50%;
  width: var(--mat-fab-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-fab .mat-ripple-element {
  background-color: var(--mat-fab-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-state-layer-color, var(--mat-sys-on-primary-container));
}
.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-disabled-state-layer-color);
}
.mat-mdc-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-mini-fab {
  width: 40px;
  height: 40px;
  background-color: var(--mat-fab-small-container-color, var(--mat-sys-primary-container));
  border-radius: var(--mat-fab-small-container-shape, var(--mat-sys-corner-medium));
  color: var(--mat-fab-small-foreground-color, var(--mat-sys-on-primary-container, inherit));
  box-shadow: var(--mat-fab-small-container-elevation-shadow, var(--mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-mini-fab:hover {
    box-shadow: var(--mat-fab-small-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-mini-fab:focus {
  box-shadow: var(--mat-fab-small-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-mini-fab:active, .mat-mdc-mini-fab:focus:active {
  box-shadow: var(--mat-fab-small-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-mini-fab[disabled], .mat-mdc-mini-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-fab-small-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-fab-small-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-mini-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-fab-small-touch-target-size, 48px);
  display: var(--mat-fab-small-touch-target-display);
  left: 50%;
  width: var(--mat-fab-small-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-mini-fab .mat-ripple-element {
  background-color: var(--mat-fab-small-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-small-state-layer-color, var(--mat-sys-on-primary-container));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-small-disabled-state-layer-color);
}
.mat-mdc-mini-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-mini-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-mini-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-extended-fab {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  padding-left: 20px;
  padding-right: 20px;
  width: auto;
  max-width: 100%;
  line-height: normal;
  box-shadow: var(--mat-fab-extended-container-elevation-shadow, var(--mat-sys-level3));
  height: var(--mat-fab-extended-container-height, 56px);
  border-radius: var(--mat-fab-extended-container-shape, var(--mat-sys-corner-large));
  font-family: var(--mat-fab-extended-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-fab-extended-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-fab-extended-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-fab-extended-label-text-tracking, var(--mat-sys-label-large-tracking));
}
@media (hover: hover) {
  .mat-mdc-extended-fab:hover {
    box-shadow: var(--mat-fab-extended-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-extended-fab:focus {
  box-shadow: var(--mat-fab-extended-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-extended-fab:active, .mat-mdc-extended-fab:focus:active {
  box-shadow: var(--mat-fab-extended-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab[disabled]:focus, .mat-mdc-extended-fab.mat-mdc-button-disabled, .mat-mdc-extended-fab.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
[dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .mat-icon, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-icons,
.mat-mdc-extended-fab > .mat-icon,
.mat-mdc-extended-fab > .material-icons {
  margin-left: -8px;
  margin-right: 12px;
}
.mat-mdc-extended-fab .mdc-button__label + .mat-icon,
.mat-mdc-extended-fab .mdc-button__label + .material-icons, [dir=rtl] .mat-mdc-extended-fab > .mat-icon, [dir=rtl] .mat-mdc-extended-fab > .material-icons {
  margin-left: 12px;
  margin-right: -8px;
}
.mat-mdc-extended-fab .mat-mdc-button-touch-target {
  width: 100%;
}
`,wm=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Ze=(()=>{class n extends _o{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=jv(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,r=this._appearance?wm.get(this._appearance):null,o=wm.get(e);r&&t.remove(...r),t.add(...o),this._appearance=e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=w({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[fe],attrs:Nv,ngContentSelectors:Oc,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(De(Pc),We(0,"span",0),K(1),$e(2,"span",1),K(3,1),Qe(),K(4,2),We(5,"span",2)(6,"span",3)),t&2&&T("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();function jv(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}var Cm=new b("mat-mdc-fab-default-options",{providedIn:"root",factory:()=>vo}),vo={color:"accent"},dr=(()=>{class n extends _o{_options=l(Cm,{optional:!0});_isFab=!0;extended=!1;constructor(){super(),this._options=this._options||vo,this.color=this._options.color||vo.color}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=w({type:n,selectors:[["button","mat-fab",""],["a","mat-fab",""],["button","matFab",""],["a","matFab",""]],hostAttrs:[1,"mdc-fab","mat-mdc-fab-base","mat-mdc-fab"],hostVars:4,hostBindings:function(t,r){t&2&&T("mdc-fab--extended",r.extended)("mat-mdc-extended-fab",r.extended)},inputs:{extended:[2,"extended","extended",A]},exportAs:["matButton","matAnchor"],features:[fe],attrs:Lv,ngContentSelectors:Oc,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(De(Pc),We(0,"span",0),K(1),$e(2,"span",1),K(3,1),Qe(),K(4,2),We(5,"span",2)(6,"span",3)),t&2&&T("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-fab-base {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 56px;
  height: 56px;
  padding: 0;
  border: none;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  overflow: visible;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-fab-base .mat-mdc-button-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-fab-base .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-fab-base .mdc-button__label,
.mat-mdc-fab-base .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-fab-base .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-mdc-fab-base:focus-visible > .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-fab-base._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-fab-base::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mat-mdc-fab-base[hidden] {
  display: none;
}
.mat-mdc-fab-base::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mat-mdc-fab-base:active, .mat-mdc-fab-base:focus {
  outline: none;
}
.mat-mdc-fab-base:hover {
  cursor: pointer;
}
.mat-mdc-fab-base > svg {
  width: 100%;
}
.mat-mdc-fab-base .mat-icon, .mat-mdc-fab-base .material-icons {
  transition: transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);
  fill: currentColor;
  will-change: transform;
}
.mat-mdc-fab-base .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base[disabled]:focus, .mat-mdc-fab-base.mat-mdc-button-disabled, .mat-mdc-fab-base.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-fab-base.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-fab {
  background-color: var(--mat-fab-container-color, var(--mat-sys-primary-container));
  border-radius: var(--mat-fab-container-shape, var(--mat-sys-corner-large));
  color: var(--mat-fab-foreground-color, var(--mat-sys-on-primary-container, inherit));
  box-shadow: var(--mat-fab-container-elevation-shadow, var(--mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-fab:hover {
    box-shadow: var(--mat-fab-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-fab:focus {
  box-shadow: var(--mat-fab-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-fab:active, .mat-mdc-fab:focus:active {
  box-shadow: var(--mat-fab-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-fab[disabled], .mat-mdc-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-fab-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-fab-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-fab-touch-target-size, 48px);
  display: var(--mat-fab-touch-target-display, block);
  left: 50%;
  width: var(--mat-fab-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-fab .mat-ripple-element {
  background-color: var(--mat-fab-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-state-layer-color, var(--mat-sys-on-primary-container));
}
.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-disabled-state-layer-color);
}
.mat-mdc-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-mini-fab {
  width: 40px;
  height: 40px;
  background-color: var(--mat-fab-small-container-color, var(--mat-sys-primary-container));
  border-radius: var(--mat-fab-small-container-shape, var(--mat-sys-corner-medium));
  color: var(--mat-fab-small-foreground-color, var(--mat-sys-on-primary-container, inherit));
  box-shadow: var(--mat-fab-small-container-elevation-shadow, var(--mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-mini-fab:hover {
    box-shadow: var(--mat-fab-small-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-mini-fab:focus {
  box-shadow: var(--mat-fab-small-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-mini-fab:active, .mat-mdc-mini-fab:focus:active {
  box-shadow: var(--mat-fab-small-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-mini-fab[disabled], .mat-mdc-mini-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-fab-small-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-fab-small-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-mini-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-fab-small-touch-target-size, 48px);
  display: var(--mat-fab-small-touch-target-display);
  left: 50%;
  width: var(--mat-fab-small-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-mini-fab .mat-ripple-element {
  background-color: var(--mat-fab-small-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-small-state-layer-color, var(--mat-sys-on-primary-container));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-small-disabled-state-layer-color);
}
.mat-mdc-mini-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-mini-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-mini-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-extended-fab {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  padding-left: 20px;
  padding-right: 20px;
  width: auto;
  max-width: 100%;
  line-height: normal;
  box-shadow: var(--mat-fab-extended-container-elevation-shadow, var(--mat-sys-level3));
  height: var(--mat-fab-extended-container-height, 56px);
  border-radius: var(--mat-fab-extended-container-shape, var(--mat-sys-corner-large));
  font-family: var(--mat-fab-extended-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-fab-extended-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-fab-extended-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-fab-extended-label-text-tracking, var(--mat-sys-label-large-tracking));
}
@media (hover: hover) {
  .mat-mdc-extended-fab:hover {
    box-shadow: var(--mat-fab-extended-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-extended-fab:focus {
  box-shadow: var(--mat-fab-extended-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-extended-fab:active, .mat-mdc-extended-fab:focus:active {
  box-shadow: var(--mat-fab-extended-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab[disabled]:focus, .mat-mdc-extended-fab.mat-mdc-button-disabled, .mat-mdc-extended-fab.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
[dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .mat-icon, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-icons,
.mat-mdc-extended-fab > .mat-icon,
.mat-mdc-extended-fab > .material-icons {
  margin-left: -8px;
  margin-right: 12px;
}
.mat-mdc-extended-fab .mdc-button__label + .mat-icon,
.mat-mdc-extended-fab .mdc-button__label + .material-icons, [dir=rtl] .mat-mdc-extended-fab > .mat-icon, [dir=rtl] .mat-mdc-extended-fab > .material-icons {
  margin-left: 12px;
  margin-right: -8px;
}
.mat-mdc-extended-fab .mat-mdc-button-touch-target {
  width: 100%;
}
`],encapsulation:2,changeDetection:0})}return n})(),dn=(()=>{class n extends _o{_options=l(Cm,{optional:!0});_isFab=!0;constructor(){super(),this._options=this._options||vo,this.color=this._options.color||vo.color}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=w({type:n,selectors:[["button","mat-mini-fab",""],["a","mat-mini-fab",""],["button","matMiniFab",""],["a","matMiniFab",""]],hostAttrs:[1,"mdc-fab","mat-mdc-fab-base","mdc-fab--mini","mat-mdc-mini-fab"],exportAs:["matButton","matAnchor"],features:[fe],attrs:Bv,ngContentSelectors:Oc,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(De(Pc),We(0,"span",0),K(1),$e(2,"span",1),K(3,1),Qe(),K(4,2),We(5,"span",2)(6,"span",3)),t&2&&T("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[Vv],encapsulation:2,changeDetection:0})}return n})();var Se=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=O({imports:[ct,re]})}return n})();function zv(n,i){if(n&1){let e=Re();u(0,"div",1)(1,"button",2),x("click",function(){we(e);let r=k();return Ce(r.action())}),g(2),h()()}if(n&2){let e=k();p(2),ie(" ",e.data.action," ")}}var Hv=["label"];function Uv(n,i){}var Gv=Math.pow(2,31)-1,bo=class{_overlayRef;instance;containerInstance;_afterDismissed=new y;_afterOpened=new y;_onAction=new y;_durationTimeoutId;_dismissedByAction=!1;constructor(i,e){this._overlayRef=e,this.containerInstance=i,i._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(i){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(i,Gv))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},ns=new b("MatSnackBarData"),ur=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},$v=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return n})(),Wv=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return n})(),qv=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return n})(),Yv=(()=>{class n{snackBarRef=l(bo);data=l(ns);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=w({type:n,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(t,r){t&1&&(u(0,"div",0),g(1),h(),G(2,zv,3,1,"div",1)),t&2&&(p(),ie(" ",r.data.message,`
`),p(),$(r.hasAction?2:-1))},dependencies:[Ze,$v,Wv,qv],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),Fc="_mat-snack-bar-enter",Nc="_mat-snack-bar-exit",Xv=(()=>{class n extends $n{_ngZone=l(B);_elementRef=l(P);_changeDetectorRef=l(te);_platform=l(ce);_animationsDisabled=Me();snackBarConfig=l(ur);_document=l(F);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=l(z);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new y;_onExit=new y;_onEnter=new y;_animationState="void";_live;_label;_role;_liveElementId=l(ve).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===Nc?this._completeExit():e===Fc&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?Ve(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Fc)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(Fc)},200)))}exit(){return this._destroyed?V(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?Ve(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Nc)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(Nc),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(a=>e.classList.add(a)):e.classList.add(t)),this._exposeToModals();let r=this._label.nativeElement,o="mdc-snackbar__label";r.classList.toggle(o,!r.querySelector(`.${o}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<t.length;r++){let o=t[r],a=o.getAttribute("aria-owns");this._trackedModals.add(o),a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute("aria-owns");if(t){let r=t.replace(this._liveElementId,"").trim();r.length>0?e.setAttribute("aria-owns",r):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector("[aria-hidden]"),r=e.querySelector("[aria-live]");if(t&&r){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(o=document.activeElement),t.removeAttribute("aria-hidden"),r.appendChild(t),o?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=w({type:n,selectors:[["mat-snack-bar-container"]],viewQuery:function(t,r){if(t&1&&Ye(Wn,7)(Hv,7),t&2){let o;J(o=ee())&&(r._portalOutlet=o.first),J(o=ee())&&(r._label=o.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(t,r){t&1&&x("animationend",function(a){return r.onAnimationEnd(a.animationName)})("animationcancel",function(a){return r.onAnimationEnd(a.animationName)}),t&2&&T("mat-snack-bar-container-enter",r._animationState==="visible")("mat-snack-bar-container-exit",r._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!r._animationsDisabled)},features:[fe],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(t,r){t&1&&(u(0,"div",1)(1,"div",2,0)(3,"div",3),he(4,Uv,0,0,"ng-template",4),h(),q(5,"div"),h()()),t&2&&(p(5),Z("aria-live",r._live)("role",r._role)("id",r._liveElementId))},dependencies:[Wn],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));
  line-height: var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --mat-button-text-state-layer-color: currentColor;
  --mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2})}return n})(),Zv=new b("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new ur}),un=(()=>{class n{_live=l(co);_injector=l(z);_breakpointObserver=l(lo);_parentSnackBar=l(n,{optional:!0,skipSelf:!0});_defaultConfig=l(Zv);_animationsDisabled=Me();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Yv;snackBarContainerComponent=Xv;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t="",r){let o=v(v({},this._defaultConfig),r);return o.data={message:e,action:t},o.announcementMessage===e&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let r=t&&t.viewContainerRef&&t.viewContainerRef.injector,o=z.create({parent:r||this._injector,providers:[{provide:ur,useValue:t}]}),a=new Yt(this.snackBarContainerComponent,t.viewContainerRef,o),s=e.attach(a);return s.instance.snackBarConfig=t,s.instance}_attach(e,t){let r=v(v(v({},new ur),this._defaultConfig),t),o=this._createOverlay(r),a=this._attachSnackBarContainer(o,r),s=new bo(a,o);if(e instanceof bt){let c=new Xt(e,null,{$implicit:r.data,snackBarRef:s});s.instance=a.attachTemplatePortal(c)}else{let c=this._createInjector(r,s),d=new Yt(e,void 0,c),m=a.attachComponentPortal(d);s.instance=m.instance}return this._breakpointObserver.observe(Yh.HandsetPortrait).pipe(le(o.detachments())).subscribe(c=>{o.overlayElement.classList.toggle(this.handsetCssClass,c.matches)}),r.announcementMessage&&a._onAnnounce.subscribe(()=>{this._live.announce(r.announcementMessage,r.politeness)}),this._animateSnackBar(s,r),this._openedSnackBarRef=s,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let t=new Zt;t.direction=e.direction;let r=Yn(this._injector),o=e.direction==="rtl",a=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!o||e.horizontalPosition==="end"&&o,s=!a&&e.horizontalPosition!=="center";return a?r.left("0"):s?r.right("0"):r.centerHorizontally(),e.verticalPosition==="top"?r.top("0"):r.bottom("0"),t.positionStrategy=r,t.disableAnimations=this._animationsDisabled,Kt(this._injector,t)}_createInjector(e,t){let r=e&&e.viewContainerRef&&e.viewContainerRef.injector;return z.create({parent:r||this._injector,providers:[{provide:bo,useValue:t},{provide:ns,useValue:e.data}]})}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Bc="pwa_install_snooze_until",Dm=10080*60*1e3,is=(()=>{class n{constructor(e,t){this.snackBar=e,this.zone=t,this.deferredPrompt=null,this.canInstall$=new Oe(!1),window.addEventListener("beforeinstallprompt",r=>{r.preventDefault(),this.deferredPrompt=r,this.updateCanInstall(),this.maybeAutoPrompt()}),window.addEventListener("appinstalled",()=>{this.deferredPrompt=null,this.canInstall$.next(!1)}),this.updateCanInstall()}isStandalone(){let e=window.matchMedia&&window.matchMedia("(display-mode: standalone)").matches,t=window.navigator?.standalone===!0;return e||t}isSnoozed(){let e=localStorage.getItem(Bc);if(!e)return!1;let t=parseInt(e,10);return!isNaN(t)&&Date.now()<t}updateCanInstall(){let e=!!this.deferredPrompt&&!this.isStandalone();this.canInstall$.next(e)}maybeAutoPrompt(){!this.deferredPrompt||this.isStandalone()||this.isSnoozed()||this.zone.run(()=>this.askToInstall())}askToInstall(){if(!this.deferredPrompt||this.isStandalone())return;let e=this.snackBar.open("M\xF6chten Sie die Dartboard-App installieren?","Ja, gerne.",{duration:8e3,panelClass:["app-shape-morph-snack"]});e.onAction().subscribe(()=>{this.triggerInstall()}),e.afterDismissed().subscribe(t=>{if(!t.dismissedByAction){let r=Date.now()+Dm;localStorage.setItem(Bc,String(r))}})}triggerInstall(){return _e(this,null,function*(){if(this.deferredPrompt)try{if(this.deferredPrompt.prompt(),(yield this.deferredPrompt.userChoice)?.outcome!=="accepted"){let t=Date.now()+Dm;localStorage.setItem(Bc,String(t))}}catch(e){console.warn("Install prompt failed",e)}finally{this.deferredPrompt=null,this.updateCanInstall()}})}static{this.\u0275fac=function(t){return new(t||n)(E(un),E(B))}}static{this.\u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var ne="primary",ko=Symbol("RouteTitle"),Uc=class{params;constructor(i){this.params=i||{}}has(i){return Object.prototype.hasOwnProperty.call(this.params,i)}get(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e[0]:e}return null}getAll(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function ki(n){return new Uc(n)}function Vc(n,i,e){for(let t=0;t<n.length;t++){let r=n[t],o=i[t];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function km(n,i,e){let t=e.path.split("/"),r=t.indexOf("**");if(r===-1){if(t.length>n.length||e.pathMatch==="full"&&(i.hasChildren()||t.length<n.length))return null;let c={},d=n.slice(0,t.length);return Vc(t,d,c)?{consumed:d,posParams:c}:null}if(r!==t.lastIndexOf("**"))return null;let o=t.slice(0,r),a=t.slice(r+1);if(o.length+a.length>n.length||e.pathMatch==="full"&&i.hasChildren()&&e.path!=="**")return null;let s={};return!Vc(o,n.slice(0,o.length),s)||!Vc(a,n.slice(n.length-a.length),s)?null:{consumed:n,posParams:s}}function cs(n){return new Promise((i,e)=>{n.pipe(Vn()).subscribe({next:t=>i(t),error:t=>e(t)})})}function Kv(n,i){if(n.length!==i.length)return!1;for(let e=0;e<n.length;++e)if(!hn(n[e],i[e]))return!1;return!0}function hn(n,i){let e=n?Gc(n):void 0,t=i?Gc(i):void 0;if(!e||!t||e.length!=t.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!Am(n[r],i[r]))return!1;return!0}function Gc(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function Am(n,i){if(Array.isArray(n)&&Array.isArray(i)){if(n.length!==i.length)return!1;let e=[...n].sort(),t=[...i].sort();return e.every((r,o)=>t[o]===r)}else return n===i}function Qv(n){return n.length>0?n[n.length-1]:null}function Ai(n){return oa(n)?n:Zi(n)?st(Promise.resolve(n)):V(n)}function Pm(n){return oa(n)?cs(n):Promise.resolve(n)}var Jv={exact:Nm,subset:Lm},Om={exact:eb,subset:tb,ignored:()=>!0},Fm={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},$c={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function Sm(n,i,e){return Jv[e.paths](n.root,i.root,e.matrixParams)&&Om[e.queryParams](n.queryParams,i.queryParams)&&!(e.fragment==="exact"&&n.fragment!==i.fragment)}function eb(n,i){return hn(n,i)}function Nm(n,i,e){if(!Ti(n.segments,i.segments)||!as(n.segments,i.segments,e)||n.numberOfChildren!==i.numberOfChildren)return!1;for(let t in i.children)if(!n.children[t]||!Nm(n.children[t],i.children[t],e))return!1;return!0}function tb(n,i){return Object.keys(i).length<=Object.keys(n).length&&Object.keys(i).every(e=>Am(n[e],i[e]))}function Lm(n,i,e){return Bm(n,i,i.segments,e)}function Bm(n,i,e,t){if(n.segments.length>e.length){let r=n.segments.slice(0,e.length);return!(!Ti(r,e)||i.hasChildren()||!as(r,e,t))}else if(n.segments.length===e.length){if(!Ti(n.segments,e)||!as(n.segments,e,t))return!1;for(let r in i.children)if(!n.children[r]||!Lm(n.children[r],i.children[r],t))return!1;return!0}else{let r=e.slice(0,n.segments.length),o=e.slice(n.segments.length);return!Ti(n.segments,r)||!as(n.segments,r,t)||!n.children[ne]?!1:Bm(n.children[ne],i,o,t)}}function as(n,i,e){return i.every((t,r)=>Om[e](n[r].parameters,t.parameters))}var Pt=class{root;queryParams;fragment;_queryParamMap;constructor(i=new be([],{}),e={},t=null){this.root=i,this.queryParams=e,this.fragment=t}get queryParamMap(){return this._queryParamMap??=ki(this.queryParams),this._queryParamMap}toString(){return rb.serialize(this)}},be=class{segments;children;parent=null;constructor(i,e){this.segments=i,this.children=e,Object.values(e).forEach(t=>t.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return ss(this)}},Xn=class{path;parameters;_parameterMap;constructor(i,e){this.path=i,this.parameters=e}get parameterMap(){return this._parameterMap??=ki(this.parameters),this._parameterMap}toString(){return jm(this)}};function nb(n,i){return Ti(n,i)&&n.every((e,t)=>hn(e.parameters,i[t].parameters))}function Ti(n,i){return n.length!==i.length?!1:n.every((e,t)=>e.path===i[t].path)}function ib(n,i){let e=[];return Object.entries(n.children).forEach(([t,r])=>{t===ne&&(e=e.concat(i(r,t)))}),Object.entries(n.children).forEach(([t,r])=>{t!==ne&&(e=e.concat(i(r,t)))}),e}var Kn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:()=>new Fn,providedIn:"root"})}return n})(),Fn=class{parse(i){let e=new qc(i);return new Pt(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(i){let e=`/${yo(i.root,!0)}`,t=sb(i.queryParams),r=typeof i.fragment=="string"?`#${ob(i.fragment)}`:"";return`${e}${t}${r}`}},rb=new Fn;function ss(n){return n.segments.map(i=>jm(i)).join("/")}function yo(n,i){if(!n.hasChildren())return ss(n);if(i){let e=n.children[ne]?yo(n.children[ne],!1):"",t=[];return Object.entries(n.children).forEach(([r,o])=>{r!==ne&&t.push(`${r}:${yo(o,!1)}`)}),t.length>0?`${e}(${t.join("//")})`:e}else{let e=ib(n,(t,r)=>r===ne?[yo(n.children[ne],!1)]:[`${r}:${yo(t,!1)}`]);return Object.keys(n.children).length===1&&n.children[ne]!=null?`${ss(n)}/${e[0]}`:`${ss(n)}/(${e.join("//")})`}}function Vm(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function rs(n){return Vm(n).replace(/%3B/gi,";")}function ob(n){return encodeURI(n)}function Wc(n){return Vm(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function ls(n){return decodeURIComponent(n)}function xm(n){return ls(n.replace(/\+/g,"%20"))}function jm(n){return`${Wc(n.path)}${ab(n.parameters)}`}function ab(n){return Object.entries(n).map(([i,e])=>`;${Wc(i)}=${Wc(e)}`).join("")}function sb(n){let i=Object.entries(n).map(([e,t])=>Array.isArray(t)?t.map(r=>`${rs(e)}=${rs(r)}`).join("&"):`${rs(e)}=${rs(t)}`).filter(e=>e);return i.length?`?${i.join("&")}`:""}var lb=/^[^\/()?;#]+/;function jc(n){let i=n.match(lb);return i?i[0]:""}var cb=/^[^\/()?;=#]+/;function db(n){let i=n.match(cb);return i?i[0]:""}var ub=/^[^=?&#]+/;function hb(n){let i=n.match(ub);return i?i[0]:""}var mb=/^[^&#]+/;function pb(n){let i=n.match(mb);return i?i[0]:""}var qc=class{url;remaining;constructor(i){this.url=i,this.remaining=i}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new be([],{}):new be([],this.parseChildren())}parseQueryParams(){let i={};if(this.consumeOptional("?"))do this.parseQueryParam(i);while(this.consumeOptional("&"));return i}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(i=0){if(i>50)throw new W(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0,i));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,i)),(e.length>0||Object.keys(t).length>0)&&(r[ne]=new be(e,t)),r}parseSegment(){let i=jc(this.remaining);if(i===""&&this.peekStartsWith(";"))throw new W(4009,!1);return this.capture(i),new Xn(ls(i),this.parseMatrixParams())}parseMatrixParams(){let i={};for(;this.consumeOptional(";");)this.parseParam(i);return i}parseParam(i){let e=db(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let r=jc(this.remaining);r&&(t=r,this.capture(t))}i[ls(e)]=ls(t)}parseQueryParam(i){let e=hb(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let a=pb(this.remaining);a&&(t=a,this.capture(t))}let r=xm(e),o=xm(t);if(i.hasOwnProperty(r)){let a=i[r];Array.isArray(a)||(a=[a],i[r]=a),a.push(o)}else i[r]=o}parseParens(i,e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=jc(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new W(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):i&&(a=ne);let s=this.parseChildren(e+1);t[a??ne]=Object.keys(s).length===1&&s[ne]?s[ne]:new be([],s),this.consumeOptional("//")}return t}peekStartsWith(i){return this.remaining.startsWith(i)}consumeOptional(i){return this.peekStartsWith(i)?(this.remaining=this.remaining.substring(i.length),!0):!1}capture(i){if(!this.consumeOptional(i))throw new W(4011,!1)}};function zm(n){return n.segments.length>0?new be([],{[ne]:n}):n}function Hm(n){let i={};for(let[t,r]of Object.entries(n.children)){let o=Hm(r);if(t===ne&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))i[a]=s;else(o.segments.length>0||o.hasChildren())&&(i[t]=o)}let e=new be(n.segments,i);return fb(e)}function fb(n){if(n.numberOfChildren===1&&n.children[ne]){let i=n.children[ne];return new be(n.segments.concat(i.segments),i.children)}return n}function Zn(n){return n instanceof Pt}function Um(n,i,e=null,t=null,r=new Fn){let o=Gm(n);return $m(o,i,e,t,r)}function Gm(n){let i;function e(o){let a={};for(let c of o.children){let d=e(c);a[c.outlet]=d}let s=new be(o.url,a);return o===n&&(i=s),s}let t=e(n.root),r=zm(t);return i??r}function $m(n,i,e,t,r){let o=n;for(;o.parent;)o=o.parent;if(i.length===0)return zc(o,o,o,e,t,r);let a=gb(i);if(a.toRoot())return zc(o,o,new be([],{}),e,t,r);let s=_b(a,o,n),c=s.processChildren?Co(s.segmentGroup,s.index,a.commands):qm(s.segmentGroup,s.index,a.commands);return zc(o,s.segmentGroup,c,e,t,r)}function ds(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function So(n){return typeof n=="object"&&n!=null&&n.outlets}function Mm(n,i,e){n||="\u0275";let t=new Pt;return t.queryParams={[n]:i},e.parse(e.serialize(t)).queryParams[n]}function zc(n,i,e,t,r,o){let a={};for(let[d,m]of Object.entries(t??{}))a[d]=Array.isArray(m)?m.map(f=>Mm(d,f,o)):Mm(d,m,o);let s;n===i?s=e:s=Wm(n,i,e);let c=zm(Hm(s));return new Pt(c,a,r)}function Wm(n,i,e){let t={};return Object.entries(n.children).forEach(([r,o])=>{o===i?t[r]=e:t[r]=Wm(o,i,e)}),new be(n.segments,t)}var us=class{isAbsolute;numberOfDoubleDots;commands;constructor(i,e,t){if(this.isAbsolute=i,this.numberOfDoubleDots=e,this.commands=t,i&&t.length>0&&ds(t[0]))throw new W(4003,!1);let r=t.find(So);if(r&&r!==Qv(t))throw new W(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function gb(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new us(!0,0,n);let i=0,e=!1,t=n.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([c,d])=>{s[c]=typeof d=="string"?d.split("/"):d}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((s,c)=>{c==0&&s==="."||(c==0&&s===""?e=!0:s===".."?i++:s!=""&&r.push(s))}),r):[...r,o]},[]);return new us(e,i,t)}var mr=class{segmentGroup;processChildren;index;constructor(i,e,t){this.segmentGroup=i,this.processChildren=e,this.index=t}};function _b(n,i,e){if(n.isAbsolute)return new mr(i,!0,0);if(!e)return new mr(i,!1,NaN);if(e.parent===null)return new mr(e,!0,0);let t=ds(n.commands[0])?0:1,r=e.segments.length-1+t;return vb(e,r,n.numberOfDoubleDots)}function vb(n,i,e){let t=n,r=i,o=e;for(;o>r;){if(o-=r,t=t.parent,!t)throw new W(4005,!1);r=t.segments.length}return new mr(t,!1,r-o)}function bb(n){return So(n[0])?n[0].outlets:{[ne]:n}}function qm(n,i,e){if(n??=new be([],{}),n.segments.length===0&&n.hasChildren())return Co(n,i,e);let t=yb(n,i,e),r=e.slice(t.commandIndex);if(t.match&&t.pathIndex<n.segments.length){let o=new be(n.segments.slice(0,t.pathIndex),{});return o.children[ne]=new be(n.segments.slice(t.pathIndex),n.children),Co(o,0,r)}else return t.match&&r.length===0?new be(n.segments,{}):t.match&&!n.hasChildren()?Yc(n,i,e):t.match?Co(n,0,r):Yc(n,i,e)}function Co(n,i,e){if(e.length===0)return new be(n.segments,{});{let t=bb(e),r={};if(Object.keys(t).some(o=>o!==ne)&&n.children[ne]&&n.numberOfChildren===1&&n.children[ne].segments.length===0){let o=Co(n.children[ne],i,e);return new be(n.segments,o.children)}return Object.entries(t).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=qm(n.children[o],i,a))}),Object.entries(n.children).forEach(([o,a])=>{t[o]===void 0&&(r[o]=a)}),new be(n.segments,r)}}function yb(n,i,e){let t=0,r=i,o={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(t>=e.length)return o;let a=n.segments[r],s=e[t];if(So(s))break;let c=`${s}`,d=t<e.length-1?e[t+1]:null;if(r>0&&c===void 0)break;if(c&&d&&typeof d=="object"&&d.outlets===void 0){if(!Im(c,d,a))return o;t+=2}else{if(!Im(c,{},a))return o;t++}r++}return{match:!0,pathIndex:r,commandIndex:t}}function Yc(n,i,e){let t=n.segments.slice(0,i),r=0;for(;r<e.length;){let o=e[r];if(So(o)){let c=wb(o.outlets);return new be(t,c)}if(r===0&&ds(e[0])){let c=n.segments[i];t.push(new Xn(c.path,Em(e[0]))),r++;continue}let a=So(o)?o.outlets[ne]:`${o}`,s=r<e.length-1?e[r+1]:null;a&&s&&ds(s)?(t.push(new Xn(a,Em(s))),r+=2):(t.push(new Xn(a,{})),r++)}return new be(t,{})}function wb(n){let i={};return Object.entries(n).forEach(([e,t])=>{typeof t=="string"&&(t=[t]),t!==null&&(i[e]=Yc(new be([],{}),0,t))}),i}function Em(n){let i={};return Object.entries(n).forEach(([e,t])=>i[e]=`${t}`),i}function Im(n,i,e){return n==e.path&&hn(i,e.parameters)}var pr="imperative",et=(function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n})(et||{}),Ot=class{id;url;constructor(i,e){this.id=i,this.url=e}},mn=class extends Ot{type=et.NavigationStart;navigationTrigger;restoredState;constructor(i,e,t="imperative",r=null){super(i,e),this.navigationTrigger=t,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},St=class extends Ot{urlAfterRedirects;type=et.NavigationEnd;constructor(i,e,t){super(i,e),this.urlAfterRedirects=t}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},ut=(function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n[n.Aborted=4]="Aborted",n})(ut||{}),gr=(function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n})(gr||{}),Dt=class extends Ot{reason;code;type=et.NavigationCancel;constructor(i,e,t,r){super(i,e),this.reason=t,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function Ym(n){return n instanceof Dt&&(n.code===ut.Redirect||n.code===ut.SupersededByNewNavigation)}var pn=class extends Ot{reason;code;type=et.NavigationSkipped;constructor(i,e,t,r){super(i,e),this.reason=t,this.code=r}},Nn=class extends Ot{error;target;type=et.NavigationError;constructor(i,e,t,r){super(i,e),this.error=t,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},xo=class extends Ot{urlAfterRedirects;state;type=et.RoutesRecognized;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},hs=class extends Ot{urlAfterRedirects;state;type=et.GuardsCheckStart;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ms=class extends Ot{urlAfterRedirects;state;shouldActivate;type=et.GuardsCheckEnd;constructor(i,e,t,r,o){super(i,e),this.urlAfterRedirects=t,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},ps=class extends Ot{urlAfterRedirects;state;type=et.ResolveStart;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},fs=class extends Ot{urlAfterRedirects;state;type=et.ResolveEnd;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},gs=class{route;type=et.RouteConfigLoadStart;constructor(i){this.route=i}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},_s=class{route;type=et.RouteConfigLoadEnd;constructor(i){this.route=i}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},vs=class{snapshot;type=et.ChildActivationStart;constructor(i){this.snapshot=i}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},bs=class{snapshot;type=et.ChildActivationEnd;constructor(i){this.snapshot=i}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ys=class{snapshot;type=et.ActivationStart;constructor(i){this.snapshot=i}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ws=class{snapshot;type=et.ActivationEnd;constructor(i){this.snapshot=i}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},_r=class{routerEvent;position;anchor;scrollBehavior;type=et.Scroll;constructor(i,e,t,r){this.routerEvent=i,this.position=e,this.anchor=t,this.scrollBehavior=r}toString(){let i=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${i}')`}},vr=class{},Mo=class{},br=class{url;navigationBehaviorOptions;constructor(i,e){this.url=i,this.navigationBehaviorOptions=e}};function Cb(n){return!(n instanceof vr)&&!(n instanceof br)&&!(n instanceof Mo)}var Cs=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(i){this.rootInjector=i,this.children=new Pi(this.rootInjector)}},Pi=(()=>{class n{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,t){let r=this.getOrCreateContext(e);r.outlet=t,this.contexts.set(e,r)}onChildOutletDestroyed(e){let t=this.getContext(e);t&&(t.outlet=null,t.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let t=this.getContext(e);return t||(t=new Cs(this.rootInjector),this.contexts.set(e,t)),t}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(t){return new(t||n)(E(nt))};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ds=class{_root;constructor(i){this._root=i}get root(){return this._root.value}parent(i){let e=this.pathFromRoot(i);return e.length>1?e[e.length-2]:null}children(i){let e=Xc(i,this._root);return e?e.children.map(t=>t.value):[]}firstChild(i){let e=Xc(i,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(i){let e=Zc(i,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==i)}pathFromRoot(i){return Zc(i,this._root).map(e=>e.value)}};function Xc(n,i){if(n===i.value)return i;for(let e of i.children){let t=Xc(n,e);if(t)return t}return null}function Zc(n,i){if(n===i.value)return[i];for(let e of i.children){let t=Zc(n,e);if(t.length)return t.unshift(i),t}return[]}var At=class{value;children;constructor(i,e){this.value=i,this.children=e}toString(){return`TreeNode(${this.value})`}};function hr(n){let i={};return n&&n.children.forEach(e=>i[e.value.outlet]=e),i}var Eo=class extends Ds{snapshot;constructor(i,e){super(i),this.snapshot=e,od(this,i)}toString(){return this.snapshot.toString()}};function Xm(n,i){let e=Db(n,i),t=new Oe([new Xn("",{})]),r=new Oe({}),o=new Oe({}),a=new Oe({}),s=new Oe(""),c=new fn(t,r,a,s,o,ne,n,e.root);return c.snapshot=e.root,new Eo(new At(c,[]),e)}function Db(n,i){let e={},t={},r={},a=new yr([],e,r,"",t,ne,n,null,{},i);return new Io("",new At(a,[]))}var fn=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(i,e,t,r,o,a,s,c){this.urlSubject=i,this.paramsSubject=e,this.queryParamsSubject=t,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(X(d=>d[ko]))??V(void 0),this.url=i,this.params=e,this.queryParams=t,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(X(i=>ki(i))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(X(i=>ki(i))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function rd(n,i,e="emptyOnly"){let t,{routeConfig:r}=n;return i!==null&&(e==="always"||r?.path===""||!i.component&&!i.routeConfig?.loadComponent)?t={params:v(v({},i.params),n.params),data:v(v({},i.data),n.data),resolve:v(v(v(v({},n.data),i.data),r?.data),n._resolvedData)}:t={params:v({},n.params),data:v({},n.data),resolve:v(v({},n.data),n._resolvedData??{})},r&&Km(r)&&(t.resolve[ko]=r.title),t}var yr=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[ko]}constructor(i,e,t,r,o,a,s,c,d,m){this.url=i,this.params=e,this.queryParams=t,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=c,this._resolve=d,this._environmentInjector=m}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=ki(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=ki(this.queryParams),this._queryParamMap}toString(){let i=this.url.map(t=>t.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${i}', path:'${e}')`}},Io=class extends Ds{url;constructor(i,e){super(e),this.url=i,od(this,e)}toString(){return Zm(this._root)}};function od(n,i){i.value._routerState=n,i.children.forEach(e=>od(n,e))}function Zm(n){let i=n.children.length>0?` { ${n.children.map(Zm).join(", ")} } `:"";return`${n.value}${i}`}function Hc(n){if(n.snapshot){let i=n.snapshot,e=n._futureSnapshot;n.snapshot=e,hn(i.queryParams,e.queryParams)||n.queryParamsSubject.next(e.queryParams),i.fragment!==e.fragment&&n.fragmentSubject.next(e.fragment),hn(i.params,e.params)||n.paramsSubject.next(e.params),Kv(i.url,e.url)||n.urlSubject.next(e.url),hn(i.data,e.data)||n.dataSubject.next(e.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function Kc(n,i){let e=hn(n.params,i.params)&&nb(n.url,i.url),t=!n.parent!=!i.parent;return e&&!t&&(!n.parent||Kc(n.parent,i.parent))}function Km(n){return typeof n.title=="string"||n.title===null}var Qm=new b(""),Ao=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=ne;activateEvents=new N;deactivateEvents=new N;attachEvents=new N;detachEvents=new N;routerOutletData=qu();parentContexts=l(Pi);location=l(lt);changeDetector=l(te);inputBinder=l(Po,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:t,previousValue:r}=e.name;if(t)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new W(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new W(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new W(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,t){this.activated=e,this._activatedRoute=t,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,t){if(this.isActivated)throw new W(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,c=new Qc(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:c,environmentInjector:t}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Fe]})}return n})(),Qc=class{route;childContexts;parent;outletData;constructor(i,e,t,r){this.route=i,this.childContexts=e,this.parent=t,this.outletData=r}get(i,e){return i===fn?this.route:i===Pi?this.childContexts:i===Qm?this.outletData:this.parent.get(i,e)}},Po=new b(""),ad=(()=>{class n{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(e){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e)}subscribeToRouteData(e){let{activatedRoute:t}=e,r=jr([t.queryParams,t.params,t.data]).pipe(Ee(([o,a,s],c)=>(s=v(v(v({},o),a),s),c===0?V(s):Promise.resolve(s)))).subscribe(o=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==t||t.component===null){this.unsubscribeFromRouteData(e);return}let a=Qu(t.component);if(!a){this.unsubscribeFromRouteData(e);return}for(let{templateName:s}of a.inputs)e.activatedComponentRef.setInput(s,o[s])});this.outletDataSubscriptions.set(e,r)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})(),sd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=w({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(t,r){t&1&&q(0,"router-outlet")},dependencies:[Ao],encapsulation:2})}return n})();function ld(n){let i=n.children&&n.children.map(ld),e=i?se(v({},n),{children:i}):v({},n);return!e.component&&!e.loadComponent&&(i||e.loadChildren)&&e.outlet&&e.outlet!==ne&&(e.component=sd),e}function Sb(n,i,e){let t=Ro(n,i._root,e?e._root:void 0);return new Eo(t,i)}function Ro(n,i,e){if(e&&n.shouldReuseRoute(i.value,e.value.snapshot)){let t=e.value;t._futureSnapshot=i.value;let r=xb(n,i,e);return new At(t,r)}else{if(n.shouldAttach(i.value)){let o=n.retrieve(i.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=i.value,a.children=i.children.map(s=>Ro(n,s)),a}}let t=Mb(i.value),r=i.children.map(o=>Ro(n,o));return new At(t,r)}}function xb(n,i,e){return i.children.map(t=>{for(let r of e.children)if(n.shouldReuseRoute(t.value,r.value.snapshot))return Ro(n,t,r);return Ro(n,t)})}function Mb(n){return new fn(new Oe(n.url),new Oe(n.params),new Oe(n.queryParams),new Oe(n.fragment),new Oe(n.data),n.outlet,n.component,n)}var wr=class{redirectTo;navigationBehaviorOptions;constructor(i,e){this.redirectTo=i,this.navigationBehaviorOptions=e}},Jm="ngNavigationCancelingError";function Ss(n,i){let{redirectTo:e,navigationBehaviorOptions:t}=Zn(i)?{redirectTo:i,navigationBehaviorOptions:void 0}:i,r=ep(!1,ut.Redirect);return r.url=e,r.navigationBehaviorOptions=t,r}function ep(n,i){let e=new Error(`NavigationCancelingError: ${n||""}`);return e[Jm]=!0,e.cancellationCode=i,e}function Eb(n){return tp(n)&&Zn(n.url)}function tp(n){return!!n&&n[Jm]}var Jc=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(i,e,t,r,o){this.routeReuseStrategy=i,this.futureState=e,this.currState=t,this.forwardEvent=r,this.inputBindingEnabled=o}activate(i){let e=this.futureState._root,t=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,t,i),Hc(this.futureState.root),this.activateChildRoutes(e,t,i)}deactivateChildRoutes(i,e,t){let r=hr(e);i.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],t),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,t)})}deactivateRoutes(i,e,t){let r=i.value,o=e?e.value:null;if(r===o)if(r.component){let a=t.getContext(r.outlet);a&&this.deactivateChildRoutes(i,e,a.children)}else this.deactivateChildRoutes(i,e,t);else o&&this.deactivateRouteAndItsChildren(e,t)}deactivateRouteAndItsChildren(i,e){i.value.component&&this.routeReuseStrategy.shouldDetach(i.value.snapshot)?this.detachAndStoreRouteSubtree(i,e):this.deactivateRouteAndOutlet(i,e)}detachAndStoreRouteSubtree(i,e){let t=e.getContext(i.value.outlet),r=t&&i.value.component?t.children:e,o=hr(i);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(t&&t.outlet){let a=t.outlet.detach(),s=t.children.onOutletDeactivated();this.routeReuseStrategy.store(i.value.snapshot,{componentRef:a,route:i,contexts:s})}}deactivateRouteAndOutlet(i,e){let t=e.getContext(i.value.outlet),r=t&&i.value.component?t.children:e,o=hr(i);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);t&&(t.outlet&&(t.outlet.deactivate(),t.children.onOutletDeactivated()),t.attachRef=null,t.route=null)}activateChildRoutes(i,e,t){let r=hr(e);i.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],t),this.forwardEvent(new ws(o.value.snapshot))}),i.children.length&&this.forwardEvent(new bs(i.value.snapshot))}activateRoutes(i,e,t){let r=i.value,o=e?e.value:null;if(Hc(r),r===o)if(r.component){let a=t.getOrCreateContext(r.outlet);this.activateChildRoutes(i,e,a.children)}else this.activateChildRoutes(i,e,t);else if(r.component){let a=t.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),Hc(s.route.value),this.activateChildRoutes(i,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(i,null,a.children)}else this.activateChildRoutes(i,null,t)}},xs=class{path;route;constructor(i){this.path=i,this.route=this.path[this.path.length-1]}},fr=class{component;route;constructor(i,e){this.component=i,this.route=e}};function Ib(n,i,e){let t=n._root,r=i?i._root:null;return wo(t,r,e,[t.value])}function Rb(n){let i=n.routeConfig?n.routeConfig.canActivateChild:null;return!i||i.length===0?null:{node:n,guards:i}}function Dr(n,i){let e=Symbol(),t=i.get(n,e);return t===e?typeof n=="function"&&!pu(n)?n:i.get(n):t}function wo(n,i,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=hr(i);return n.children.forEach(a=>{Tb(a,o[a.value.outlet],e,t.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>Do(s,e.getContext(a),r)),r}function Tb(n,i,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=n.value,a=i?i.value:null,s=e?e.getContext(n.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let c=kb(a,o,o.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new xs(t)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?wo(n,i,s?s.children:null,t,r):wo(n,i,e,t,r),c&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new fr(s.outlet.component,a))}else a&&Do(i,s,r),r.canActivateChecks.push(new xs(t)),o.component?wo(n,null,s?s.children:null,t,r):wo(n,null,e,t,r);return r}function kb(n,i,e){if(typeof e=="function")return ht(i._environmentInjector,()=>e(n,i));switch(e){case"pathParamsChange":return!Ti(n.url,i.url);case"pathParamsOrQueryParamsChange":return!Ti(n.url,i.url)||!hn(n.queryParams,i.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Kc(n,i)||!hn(n.queryParams,i.queryParams);default:return!Kc(n,i)}}function Do(n,i,e){let t=hr(n),r=n.value;Object.entries(t).forEach(([o,a])=>{r.component?i?Do(a,i.children.getContext(o),e):Do(a,null,e):Do(a,i,e)}),r.component?i&&i.outlet&&i.outlet.isActivated?e.canDeactivateChecks.push(new fr(i.outlet.component,r)):e.canDeactivateChecks.push(new fr(null,r)):e.canDeactivateChecks.push(new fr(null,r))}function Oo(n){return typeof n=="function"}function Ab(n){return typeof n=="boolean"}function Pb(n){return n&&Oo(n.canLoad)}function Ob(n){return n&&Oo(n.canActivate)}function Fb(n){return n&&Oo(n.canActivateChild)}function Nb(n){return n&&Oo(n.canDeactivate)}function Lb(n){return n&&Oo(n.canMatch)}function np(n){return n instanceof du||n?.name==="EmptyError"}var os=Symbol("INITIAL_VALUE");function Cr(){return Ee(n=>jr(n.map(i=>i.pipe(xe(1),Ge(os)))).pipe(X(i=>{for(let e of i)if(e!==!0){if(e===os)return os;if(e===!1||Bb(e))return e}return!0}),ue(i=>i!==os),xe(1)))}function Bb(n){return Zn(n)||n instanceof wr}function ip(n){return n.aborted?V(void 0).pipe(xe(1)):new at(i=>{let e=()=>{i.next(),i.complete()};return n.addEventListener("abort",e),()=>n.removeEventListener("abort",e)})}function rp(n){return le(ip(n))}function Vb(n){return en(i=>{let{targetSnapshot:e,currentSnapshot:t,guards:{canActivateChecks:r,canDeactivateChecks:o}}=i;return o.length===0&&r.length===0?V(se(v({},i),{guardsResult:!0})):jb(o,e,t).pipe(en(a=>a&&Ab(a)?zb(e,r,n):V(a)),X(a=>se(v({},i),{guardsResult:a})))})}function jb(n,i,e){return st(n).pipe(en(t=>Wb(t.component,t.route,e,i)),Vn(t=>t!==!0,!0))}function zb(n,i,e){return st(i).pipe(ci(t=>aa(Ub(t.route.parent,e),Hb(t.route,e),$b(n,t.path),Gb(n,t.route))),Vn(t=>t!==!0,!0))}function Hb(n,i){return n!==null&&i&&i(new ys(n)),V(!0)}function Ub(n,i){return n!==null&&i&&i(new vs(n)),V(!0)}function Gb(n,i){let e=i.routeConfig?i.routeConfig.canActivate:null;if(!e||e.length===0)return V(!0);let t=e.map(r=>tn(()=>{let o=i._environmentInjector,a=Dr(r,o),s=Ob(a)?a.canActivate(i,n):ht(o,()=>a(i,n));return Ai(s).pipe(Vn())}));return V(t).pipe(Cr())}function $b(n,i){let e=i[i.length-1],r=i.slice(0,i.length-1).reverse().map(o=>Rb(o)).filter(o=>o!==null).map(o=>tn(()=>{let a=o.guards.map(s=>{let c=o.node._environmentInjector,d=Dr(s,c),m=Fb(d)?d.canActivateChild(e,n):ht(c,()=>d(e,n));return Ai(m).pipe(Vn())});return V(a).pipe(Cr())}));return V(r).pipe(Cr())}function Wb(n,i,e,t){let r=i&&i.routeConfig?i.routeConfig.canDeactivate:null;if(!r||r.length===0)return V(!0);let o=r.map(a=>{let s=i._environmentInjector,c=Dr(a,s),d=Nb(c)?c.canDeactivate(n,i,e,t):ht(s,()=>c(n,i,e,t));return Ai(d).pipe(Vn())});return V(o).pipe(Cr())}function qb(n,i,e,t,r){let o=i.canLoad;if(o===void 0||o.length===0)return V(!0);let a=o.map(s=>{let c=Dr(s,n),d=Pb(c)?c.canLoad(i,e):ht(n,()=>c(i,e)),m=Ai(d);return r?m.pipe(rp(r)):m});return V(a).pipe(Cr(),op(t))}function op(n){return cu(Ke(i=>{if(typeof i!="boolean")throw Ss(n,i)}),X(i=>i===!0))}function Yb(n,i,e,t,r,o){let a=i.canMatch;if(!a||a.length===0)return V(!0);let s=a.map(c=>{let d=Dr(c,n),m=Lb(d)?d.canMatch(i,e,r):ht(n,()=>d(i,e,r));return Ai(m).pipe(rp(o))});return V(s).pipe(Cr(),op(t))}var On=class n extends Error{segmentGroup;constructor(i){super(),this.segmentGroup=i||null,Object.setPrototypeOf(this,n.prototype)}},To=class n extends Error{urlTree;constructor(i){super(),this.urlTree=i,Object.setPrototypeOf(this,n.prototype)}};function Xb(n){throw new W(4e3,!1)}function Zb(n){throw ep(!1,ut.GuardRejected)}var ed=class{urlSerializer;urlTree;constructor(i,e){this.urlSerializer=i,this.urlTree=e}lineralizeSegments(i,e){return _e(this,null,function*(){let t=[],r=e.root;for(;;){if(t=t.concat(r.segments),r.numberOfChildren===0)return t;if(r.numberOfChildren>1||!r.children[ne])throw Xb(`${i.redirectTo}`);r=r.children[ne]}})}applyRedirectCommands(i,e,t,r,o){return _e(this,null,function*(){let a=yield Kb(e,r,o);if(a instanceof Pt)throw new To(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),i,t);if(a[0]==="/")throw new To(s);return s})}applyRedirectCreateUrlTree(i,e,t,r){let o=this.createSegmentGroup(i,e.root,t,r);return new Pt(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(i,e){let t={};return Object.entries(i).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);t[r]=e[s]}else t[r]=o}),t}createSegmentGroup(i,e,t,r){let o=this.createSegments(i,e.segments,t,r),a={};return Object.entries(e.children).forEach(([s,c])=>{a[s]=this.createSegmentGroup(i,c,t,r)}),new be(o,a)}createSegments(i,e,t,r){return e.map(o=>o.path[0]===":"?this.findPosParam(i,o,r):this.findOrReturn(o,t))}findPosParam(i,e,t){let r=t[e.path.substring(1)];if(!r)throw new W(4001,!1);return r}findOrReturn(i,e){let t=0;for(let r of e){if(r.path===i.path)return e.splice(t),r;t++}return i}};function Kb(n,i,e){if(typeof n=="string")return Promise.resolve(n);let t=n;return cs(Ai(ht(e,()=>t(i))))}function Qb(n,i){return n.providers&&!n._injector&&(n._injector=ma(n.providers,i,`Route: ${n.path}`)),n._injector??i}function Qt(n){return n.outlet||ne}function Jb(n,i){let e=n.filter(t=>Qt(t)===i);return e.push(...n.filter(t=>Qt(t)!==i)),e}var td={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function ap(n){return{routeConfig:n.routeConfig,url:n.url,params:n.params,queryParams:n.queryParams,fragment:n.fragment,data:n.data,outlet:n.outlet,title:n.title,paramMap:n.paramMap,queryParamMap:n.queryParamMap}}function ey(n,i,e,t,r,o,a){let s=sp(n,i,e);if(!s.matched)return V(s);let c=ap(o(s));return t=Qb(i,t),Yb(t,i,e,r,c,a).pipe(X(d=>d===!0?s:v({},td)))}function sp(n,i,e){if(i.path==="")return i.pathMatch==="full"&&(n.hasChildren()||e.length>0)?v({},td):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(i.matcher||km)(e,n,i);if(!r)return v({},td);let o={};Object.entries(r.posParams??{}).forEach(([s,c])=>{o[s]=c.path});let a=r.consumed.length>0?v(v({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function Rm(n,i,e,t,r){return e.length>0&&iy(n,e,t,r)?{segmentGroup:new be(i,ny(t,new be(e,n.children))),slicedSegments:[]}:e.length===0&&ry(n,e,t)?{segmentGroup:new be(n.segments,ty(n,e,t,n.children)),slicedSegments:e}:{segmentGroup:new be(n.segments,n.children),slicedSegments:e}}function ty(n,i,e,t){let r={};for(let o of e)if(Es(n,i,o)&&!t[Qt(o)]){let a=new be([],{});r[Qt(o)]=a}return v(v({},t),r)}function ny(n,i){let e={};e[ne]=i;for(let t of n)if(t.path===""&&Qt(t)!==ne){let r=new be([],{});e[Qt(t)]=r}return e}function iy(n,i,e,t){return e.some(r=>!Es(n,i,r)||!(Qt(r)!==ne)?!1:!(t!==void 0&&Qt(r)===t))}function ry(n,i,e){return e.some(t=>Es(n,i,t))}function Es(n,i,e){return(n.hasChildren()||i.length>0)&&e.pathMatch==="full"?!1:e.path===""}function oy(n,i,e){return i.length===0&&!n.children[e]}var nd=class{};function ay(n,i,e,t,r,o,a="emptyOnly",s){return _e(this,null,function*(){return new id(n,i,e,t,r,a,o,s).recognize()})}var sy=31,id=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(i,e,t,r,o,a,s,c){this.injector=i,this.configLoader=e,this.rootComponentType=t,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=c,this.applyRedirects=new ed(this.urlSerializer,this.urlTree)}noMatchError(i){return new W(4002,`'${i.segmentGroup}'`)}recognize(){return _e(this,null,function*(){let i=Rm(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:t}=yield this.match(i),r=new At(t,e),o=new Io("",r),a=Um(t,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}})}match(i){return _e(this,null,function*(){let e=new yr([],Object.freeze({}),Object.freeze(v({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),ne,this.rootComponentType,null,{},this.injector);try{return{children:yield this.processSegmentGroup(this.injector,this.config,i,ne,e),rootSnapshot:e}}catch(t){if(t instanceof To)return this.urlTree=t.urlTree,this.match(t.urlTree.root);throw t instanceof On?this.noMatchError(t):t}})}processSegmentGroup(i,e,t,r,o){return _e(this,null,function*(){if(t.segments.length===0&&t.hasChildren())return this.processChildren(i,e,t,o);let a=yield this.processSegment(i,e,t,t.segments,r,!0,o);return a instanceof At?[a]:[]})}processChildren(i,e,t,r){return _e(this,null,function*(){let o=[];for(let c of Object.keys(t.children))c==="primary"?o.unshift(c):o.push(c);let a=[];for(let c of o){let d=t.children[c],m=Jb(e,c),f=yield this.processSegmentGroup(i,m,d,c,r);a.push(...f)}let s=lp(a);return ly(s),s})}processSegment(i,e,t,r,o,a,s){return _e(this,null,function*(){for(let c of e)try{return yield this.processSegmentAgainstRoute(c._injector??i,e,c,t,r,o,a,s)}catch(d){if(d instanceof On||np(d))continue;throw d}if(oy(t,r,o))return new nd;throw new On(t)})}processSegmentAgainstRoute(i,e,t,r,o,a,s,c){return _e(this,null,function*(){if(Qt(t)!==a&&(a===ne||!Es(r,o,t)))throw new On(r);if(t.redirectTo===void 0)return this.matchSegmentAgainstRoute(i,r,t,o,a,c);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(i,r,e,t,o,a,c);throw new On(r)})}expandSegmentAgainstRouteUsingRedirect(i,e,t,r,o,a,s){return _e(this,null,function*(){let{matched:c,parameters:d,consumedSegments:m,positionalParamSegments:f,remainingSegments:S}=sp(e,r,o);if(!c)throw new On(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>sy&&(this.allowRedirects=!1));let H=this.createSnapshot(i,r,o,d,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let Y=yield this.applyRedirects.applyRedirectCommands(m,r.redirectTo,f,ap(H),i),Q=yield this.applyRedirects.lineralizeSegments(r,Y);return this.processSegment(i,t,e,Q.concat(S),a,!1,s)})}createSnapshot(i,e,t,r,o){let a=new yr(t,r,Object.freeze(v({},this.urlTree.queryParams)),this.urlTree.fragment,dy(e),Qt(e),e.component??e._loadedComponent??null,e,uy(e),i),s=rd(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}matchSegmentAgainstRoute(i,e,t,r,o,a){return _e(this,null,function*(){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=Pe=>this.createSnapshot(i,t,Pe.consumedSegments,Pe.parameters,a),c=yield cs(ey(e,t,r,i,this.urlSerializer,s,this.abortSignal));if(t.path==="**"&&(e.children={}),!c?.matched)throw new On(e);i=t._injector??i;let{routes:d}=yield this.getChildConfig(i,t,r),m=t._loadedInjector??i,{parameters:f,consumedSegments:S,remainingSegments:H}=c,Y=this.createSnapshot(i,t,S,f,a),{segmentGroup:Q,slicedSegments:R}=Rm(e,S,H,d,o);if(R.length===0&&Q.hasChildren()){let Pe=yield this.processChildren(m,d,Q,Y);return new At(Y,Pe)}if(d.length===0&&R.length===0)return new At(Y,[]);let oe=Qt(t)===o,ye=yield this.processSegment(m,d,Q,R,oe?ne:o,!0,Y);return new At(Y,ye instanceof At?[ye]:[])})}getChildConfig(i,e,t){return _e(this,null,function*(){if(e.children)return{routes:e.children,injector:i};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(i).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(yield cs(qb(i,e,t,this.urlSerializer,this.abortSignal))){let o=yield this.configLoader.loadChildren(i,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw Zb(e)}return{routes:[],injector:i}})}};function ly(n){n.sort((i,e)=>i.value.outlet===ne?-1:e.value.outlet===ne?1:i.value.outlet.localeCompare(e.value.outlet))}function cy(n){let i=n.value.routeConfig;return i&&i.path===""}function lp(n){let i=[],e=new Set;for(let t of n){if(!cy(t)){i.push(t);continue}let r=i.find(o=>t.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...t.children),e.add(r)):i.push(t)}for(let t of e){let r=lp(t.children);i.push(new At(t.value,r))}return i.filter(t=>!e.has(t))}function dy(n){return n.data||{}}function uy(n){return n.resolve||{}}function hy(n,i,e,t,r,o,a){return en(s=>_e(null,null,function*(){let{state:c,tree:d}=yield ay(n,i,e,t,s.extractedUrl,r,o,a);return se(v({},s),{targetSnapshot:c,urlAfterRedirects:d})}))}function my(n){return en(i=>{let{targetSnapshot:e,guards:{canActivateChecks:t}}=i;if(!t.length)return V(i);let r=new Set(t.map(s=>s.route)),o=new Set;for(let s of r)if(!o.has(s))for(let c of cp(s))o.add(c);let a=0;return st(o).pipe(ci(s=>r.has(s)?py(s,e,n):(s.data=rd(s,s.parent,n).resolve,V(void 0))),Ke(()=>a++),Rl(1),en(s=>a===o.size?V(i):vt))})}function cp(n){let i=n.children.map(e=>cp(e)).flat();return[n,...i]}function py(n,i,e){let t=n.routeConfig,r=n._resolve;return t?.title!==void 0&&!Km(t)&&(r[ko]=t.title),tn(()=>(n.data=rd(n,n.parent,e).resolve,fy(r,n,i).pipe(X(o=>(n._resolvedData=o,n.data=v(v({},n.data),o),null)))))}function fy(n,i,e){let t=Gc(n);if(t.length===0)return V({});let r={};return st(t).pipe(en(o=>gy(n[o],i,e).pipe(Vn(),Ke(a=>{if(a instanceof wr)throw Ss(new Fn,a);r[o]=a}))),Rl(1),X(()=>r),zi(o=>np(o)?vt:ra(o)))}function gy(n,i,e){let t=i._environmentInjector,r=Dr(n,t),o=r.resolve?r.resolve(i,e):ht(t,()=>r(i,e));return Ai(o)}function Tm(n){return Ee(i=>{let e=n(i);return e?st(e).pipe(X(()=>i)):V(i)})}var cd=(()=>{class n{buildTitle(e){let t,r=e.root;for(;r!==void 0;)t=this.getResolvedTitleForRoute(r)??t,r=r.children.find(o=>o.outlet===ne);return t}getResolvedTitleForRoute(e){return e.data[ko]}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:()=>l(dp),providedIn:"root"})}return n})(),dp=(()=>{class n extends cd{title;constructor(e){super(),this.title=e}updateTitle(e){let t=this.buildTitle(e);t!==void 0&&this.title.setTitle(t)}static \u0275fac=function(t){return new(t||n)(E(Sh))};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Qn=new b("",{factory:()=>({})}),Oi=new b(""),Is=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=l($u);loadComponent(e,t){return _e(this,null,function*(){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Promise.resolve(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let r=_e(this,null,function*(){try{let o=yield Pm(ht(e,()=>t.loadComponent())),a=yield mp(hp(o));return this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=a,a}finally{this.componentLoaders.delete(t)}});return this.componentLoaders.set(t,r),r})}loadChildren(e,t){if(this.childrenLoaders.get(t))return this.childrenLoaders.get(t);if(t._loadedRoutes)return Promise.resolve({routes:t._loadedRoutes,injector:t._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(t);let r=_e(this,null,function*(){try{let o=yield up(t,this.compiler,e,this.onLoadEndListener);return t._loadedRoutes=o.routes,t._loadedInjector=o.injector,t._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(t)}});return this.childrenLoaders.set(t,r),r}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function up(n,i,e,t){return _e(this,null,function*(){let r=yield Pm(ht(e,()=>n.loadChildren())),o=yield mp(hp(r)),a;o instanceof Au||Array.isArray(o)?a=o:a=yield i.compileModuleAsync(o),t&&t(n);let s,c,d=!1,m;return Array.isArray(a)?(c=a,d=!0):(s=a.create(e).injector,m=a,c=s.get(Oi,[],{optional:!0,self:!0}).flat()),{routes:c.map(ld),injector:s,factory:m}})}function _y(n){return n&&typeof n=="object"&&"default"in n}function hp(n){return _y(n)?n.default:n}function mp(n){return _e(this,null,function*(){return n})}var Rs=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:()=>l(vy),providedIn:"root"})}return n})(),vy=(()=>{class n{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,t){return e}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),dd=new b(""),ud=new b("");function pp(n,i,e){let t=n.get(ud),r=n.get(F);if(!r.startViewTransition||t.skipNextTransition)return t.skipNextTransition=!1,new Promise(d=>setTimeout(d));let o,a=new Promise(d=>{o=d}),s=r.startViewTransition(()=>(o(),by(n)));s.updateCallbackDone.catch(d=>{}),s.ready.catch(d=>{}),s.finished.catch(d=>{});let{onViewTransitionCreated:c}=t;return c&&ht(n,()=>c({transition:s,from:i,to:e})),a}function by(n){return new Promise(i=>{Ve({read:()=>setTimeout(i)},{injector:n})})}var yy=()=>{},hd=new b(""),Ts=(()=>{class n{currentNavigation=j(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=j(null);events=new y;transitionAbortWithErrorSubject=new y;configLoader=l(Is);environmentInjector=l(nt);destroyRef=l(di);urlSerializer=l(Kn);rootContexts=l(Pi);location=l(on);inputBindingEnabled=l(Po,{optional:!0})!==null;titleStrategy=l(cd);options=l(Qn,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=l(Rs);createViewTransition=l(dd,{optional:!0});navigationErrorHandler=l(hd,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>V(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new gs(r)),t=r=>this.events.next(new _s(r));this.configLoader.onLoadEndListener=t,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let t=++this.navigationId;pe(()=>{this.transitions?.next(se(v({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:t,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new Oe(null),this.transitions.pipe(ue(t=>t!==null),Ee(t=>{let r=!1,o=new AbortController,a=()=>!r&&this.currentTransition?.id===t.id;return V(t).pipe(Ee(s=>{if(this.navigationId>t.id)return this.cancelNavigationTransition(t,"",ut.SupersededByNewNavigation),vt;this.currentTransition=t;let c=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:c?se(v({},c),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let d=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),m=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!d&&m!=="reload")return this.events.next(new pn(s.id,this.urlSerializer.serialize(s.rawUrl),"",gr.IgnoredSameUrlNavigation)),s.resolve(!1),vt;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return V(s).pipe(Ee(f=>(this.events.next(new mn(f.id,this.urlSerializer.serialize(f.extractedUrl),f.source,f.restoredState)),f.id!==this.navigationId?vt:Promise.resolve(f))),hy(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),Ke(f=>{t.targetSnapshot=f.targetSnapshot,t.urlAfterRedirects=f.urlAfterRedirects,this.currentNavigation.update(S=>(S.finalUrl=f.urlAfterRedirects,S)),this.events.next(new Mo)}),Ee(f=>st(t.routesRecognizeHandler.deferredHandle??V(void 0)).pipe(X(()=>f))),Ke(()=>{let f=new xo(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(f)}));if(d&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:f,extractedUrl:S,source:H,restoredState:Y,extras:Q}=s,R=new mn(f,this.urlSerializer.serialize(S),H,Y);this.events.next(R);let oe=Xm(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=t=se(v({},s),{targetSnapshot:oe,urlAfterRedirects:S,extras:se(v({},Q),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(ye=>(ye.finalUrl=S,ye)),V(t)}else return this.events.next(new pn(s.id,this.urlSerializer.serialize(s.extractedUrl),"",gr.IgnoredByUrlHandlingStrategy)),s.resolve(!1),vt}),X(s=>{let c=new hs(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(c),this.currentTransition=t=se(v({},s),{guards:Ib(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),t}),Vb(s=>this.events.next(s)),Ee(s=>{if(t.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw Ss(this.urlSerializer,s.guardsResult);let c=new ms(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(c),!a())return vt;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",ut.GuardRejected),vt;if(s.guards.canActivateChecks.length===0)return V(s);let d=new ps(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(d),!a())return vt;let m=!1;return V(s).pipe(my(this.paramsInheritanceStrategy),Ke({next:()=>{m=!0;let f=new fs(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(f)},complete:()=>{m||this.cancelNavigationTransition(s,"",ut.NoDataFromResolver)}}))}),Tm(s=>{let c=m=>{let f=[];if(m.routeConfig?._loadedComponent)m.component=m.routeConfig?._loadedComponent;else if(m.routeConfig?.loadComponent){let S=m._environmentInjector;f.push(this.configLoader.loadComponent(S,m.routeConfig).then(H=>{m.component=H}))}for(let S of m.children)f.push(...c(S));return f},d=c(s.targetSnapshot.root);return d.length===0?V(s):st(Promise.all(d).then(()=>s))}),Tm(()=>this.afterPreactivation()),Ee(()=>{let{currentSnapshot:s,targetSnapshot:c}=t,d=this.createViewTransition?.(this.environmentInjector,s.root,c.root);return d?st(d).pipe(X(()=>t)):V(t)}),xe(1),Ee(s=>{let c=Sb(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=t=s=se(v({},s),{targetRouterState:c}),this.currentNavigation.update(m=>(m.targetRouterState=c,m)),this.events.next(new vr);let d=t.beforeActivateHandler.deferredHandle;return d?st(d.then(()=>s)):V(s)}),Ke(s=>{new Jc(e.routeReuseStrategy,t.targetRouterState,t.currentRouterState,c=>this.events.next(c),this.inputBindingEnabled).activate(this.rootContexts),a()&&(r=!0,this.currentNavigation.update(c=>(c.abort=yy,c)),this.lastSuccessfulNavigation.set(pe(this.currentNavigation)),this.events.next(new St(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),le(ip(o.signal).pipe(ue(()=>!r&&!t.targetRouterState),Ke(()=>{this.cancelNavigationTransition(t,o.signal.reason+"",ut.Aborted)}))),Ke({complete:()=>{r=!0}}),le(this.transitionAbortWithErrorSubject.pipe(Ke(s=>{throw s}))),Hi(()=>{o.abort(),r||this.cancelNavigationTransition(t,"",ut.SupersededByNewNavigation),this.currentTransition?.id===t.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),zi(s=>{if(r=!0,this.destroyed)return t.resolve(!1),vt;if(tp(s))this.events.next(new Dt(t.id,this.urlSerializer.serialize(t.extractedUrl),s.message,s.cancellationCode)),Eb(s)?this.events.next(new br(s.url,s.navigationBehaviorOptions)):t.resolve(!1);else{let c=new Nn(t.id,this.urlSerializer.serialize(t.extractedUrl),s,t.targetSnapshot??void 0);try{let d=ht(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(d instanceof wr){let{message:m,cancellationCode:f}=Ss(this.urlSerializer,d);this.events.next(new Dt(t.id,this.urlSerializer.serialize(t.extractedUrl),m,f)),this.events.next(new br(d.redirectTo,d.navigationBehaviorOptions))}else throw this.events.next(c),s}catch(d){this.options.resolveNavigationPromiseOnError?t.resolve(!1):t.reject(d)}}return vt}))}))}cancelNavigationTransition(e,t,r){let o=new Dt(e.id,this.urlSerializer.serialize(e.extractedUrl),t,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),t=pe(this.currentNavigation),r=t?.targetBrowserUrl??t?.extractedUrl;return e.toString()!==r?.toString()&&!t?.extras.skipLocationChange}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function wy(n){return n!==pr}var fp=new b("");var gp=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:()=>l(Cy),providedIn:"root"})}return n})(),Ms=class{shouldDetach(i){return!1}store(i,e){}shouldAttach(i){return!1}retrieve(i){return null}shouldReuseRoute(i,e){return i.routeConfig===e.routeConfig}shouldDestroyInjector(i){return!0}},Cy=(()=>{class n extends Ms{static \u0275fac=(()=>{let e;return function(r){return(e||(e=mt(n)))(r||n)}})();static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ks=(()=>{class n{urlSerializer=l(Kn);options=l(Qn,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=l(on);urlHandlingStrategy=l(Rs);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Pt;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:t,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,t):t,a=r??o;return a instanceof Pt?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:t,initialUrl:r}){t&&e?(this.currentUrlTree=t,this.rawUrlTree=this.urlHandlingStrategy.merge(t,r),this.routerState=e):this.rawUrlTree=r}routerState=Xm(null,l(nt));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:()=>l(Dy),providedIn:"root"})}return n})(),Dy=(()=>{class n extends ks{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(t=>{t.type==="popstate"&&setTimeout(()=>{e(t.url,t.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,t){e instanceof mn?this.updateStateMemento():e instanceof pn?this.commitTransition(t):e instanceof xo?this.urlUpdateStrategy==="eager"&&(t.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof vr?(this.commitTransition(t),this.urlUpdateStrategy==="deferred"&&!t.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof Dt&&!Ym(e)?this.restoreHistory(t):e instanceof Nn?this.restoreHistory(t,!0):e instanceof St&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,t){let{extras:r,id:o}=t,{replaceUrl:a,state:s}=r;if(this.location.isCurrentPathEqualTo(e)||a){let c=this.browserPageId,d=v(v({},s),this.generateNgRouterState(o,c,t));this.location.replaceState(e,"",d)}else{let c=v(v({},s),this.generateNgRouterState(o,this.browserPageId+1,t));this.location.go(e,"",c)}}restoreHistory(e,t=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(t&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,t,r){return this.canceledNavigationResolution==="computed"?v({navigationId:e,\u0275routerPageId:t},this.routerUrlState(r)):v({navigationId:e},this.routerUrlState(r))}static \u0275fac=(()=>{let e;return function(r){return(e||(e=mt(n)))(r||n)}})();static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function As(n,i){n.events.pipe(ue(e=>e instanceof St||e instanceof Dt||e instanceof Nn||e instanceof pn),X(e=>e instanceof St||e instanceof pn?0:(e instanceof Dt?e.code===ut.Redirect||e.code===ut.SupersededByNewNavigation:!1)?2:1),ue(e=>e!==2),xe(1)).subscribe(()=>{i()})}var ot=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=l(Ol);stateManager=l(ks);options=l(Qn,{optional:!0})||{};pendingTasks=l(_u);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=l(Ts);urlSerializer=l(Kn);location=l(on);urlHandlingStrategy=l(Rs);injector=l(nt);_events=new y;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=l(gp);injectorCleanup=l(fp,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=l(Oi,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!l(Po,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new Ie;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(t=>{try{let r=this.navigationTransitions.currentTransition,o=pe(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(t,o),t instanceof Dt&&t.code!==ut.Redirect&&t.code!==ut.SupersededByNewNavigation)this.navigated=!0;else if(t instanceof St)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(t instanceof br){let a=t.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(t.url,r.currentRawUrl),c=v({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||wy(r.source)},a);this.scheduleNavigation(s,pr,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}Cb(t)&&this._events.next(t)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),pr,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,t,r,o)=>{this.navigateToSyncWithBrowser(e,r,t,o)})}navigateToSyncWithBrowser(e,t,r,o){let a=r?.navigationId?r:null,s=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(o=se(v({},o),{browserUrl:e})),r){let d=v({},r);delete d.navigationId,delete d.\u0275routerPageId,delete d.\u0275routerUrl,Object.keys(d).length!==0&&(o.state=d)}let c=this.parseUrl(s);this.scheduleNavigation(c,t,a,o).catch(d=>{this.disposed||this.injector.get(Gi)(d)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return pe(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(ld),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,t={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:c}=t,d=c?this.currentUrlTree.fragment:a,m=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":m=v(v({},this.currentUrlTree.queryParams),o);break;case"preserve":m=this.currentUrlTree.queryParams;break;default:m=o||null}m!==null&&(m=this.removeEmptyProps(m));let f;try{let S=r?r.snapshot:this.routerState.snapshot.root;f=Gm(S)}catch(S){(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),f=this.currentUrlTree.root}return $m(f,e,m,d??null,this.urlSerializer)}navigateByUrl(e,t={skipLocationChange:!1}){let r=Zn(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,pr,null,t)}navigate(e,t={skipLocationChange:!1}){return Sy(e),this.navigateByUrl(this.createUrlTree(e,t),t)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch(t){return this.console.warn(xn(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,t){let r;if(t===!0?r=v({},Fm):t===!1?r=v({},$c):r=v(v({},$c),t),Zn(e))return Sm(this.currentUrlTree,e,r);let o=this.parseUrl(e);return Sm(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((t,[r,o])=>(o!=null&&(t[r]=o),t),{})}scheduleNavigation(e,t,r,o,a){if(this.disposed)return Promise.resolve(!1);let s,c,d;a?(s=a.resolve,c=a.reject,d=a.promise):d=new Promise((f,S)=>{s=f,c=S});let m=this.pendingTasks.add();return As(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(m))}),this.navigationTransitions.handleNavigationRequest({source:t,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:c,promise:d,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),d.catch(Promise.reject.bind(Promise))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Sy(n){for(let i=0;i<n.length;i++)if(n[i]==null)throw new W(4008,!1)}var My=(()=>{class n{router=l(ot);stateManager=l(ks);fragment=j("");queryParams=j({});path=j("");serializer=l(Kn);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof St&&this.updateState()})}updateState(){let{fragment:e,root:t,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new Pt(t)))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Sr=(()=>{class n{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=l(new rn("href"),{optional:!0});reactiveHref=Wu(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return pe(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return pe(this._target)}_target=j(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return pe(this._queryParams)}_queryParams=j(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return pe(this._fragment)}_fragment=j(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return pe(this._queryParamsHandling)}_queryParamsHandling=j(void 0);set state(e){this._state.set(e)}get state(){return pe(this._state)}_state=j(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return pe(this._info)}_info=j(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return pe(this._relativeTo)}_relativeTo=j(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return pe(this._preserveFragment)}_preserveFragment=j(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return pe(this._skipLocationChange)}_skipLocationChange=j(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return pe(this._replaceUrl)}_replaceUrl=j(!1);isAnchorElement;onChanges=new y;applicationErrorHandler=l(Gi);options=l(Qn,{optional:!0});reactiveRouterState=l(My);constructor(e,t,r,o,a,s){this.router=e,this.route=t,this.tabIndexAttribute=r,this.renderer=o,this.el=a,this.locationStrategy=s;let c=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=c==="a"||c==="area"||!!(typeof customElements=="object"&&customElements.get(c)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=j(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(Zn(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,t,r,o,a){let s=this._urlTree();if(s===null||this.isAnchorElement&&(e!==0||t||r||o||a||typeof this.target=="string"&&this.target!="_self"))return!0;let c={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,c)?.catch(d=>{this.applicationErrorHandler(d)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,t){let r=this.renderer,o=this.el.nativeElement;t!==null?r.setAttribute(o,e,t):r.removeAttribute(o,e)}_urlTree=Be(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r==="preserve"||r==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let t=this.routerLinkInput();return t===null||!this.router.createUrlTree?null:Zn(t)?t:this.router.createUrlTree(t,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,t)=>this.computeHref(e)===this.computeHref(t)});get urlTree(){return pe(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(t){return new(t||n)(U(ot),U(fn),Al("tabindex"),U(me),U(P),U($t))};static \u0275dir=I({type:n,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(t,r){t&1&&x("click",function(a){return r.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),t&2&&Z("href",r.reactiveHref(),Tu)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",A],skipLocationChange:[2,"skipLocationChange","skipLocationChange",A],replaceUrl:[2,"replaceUrl","replaceUrl",A],routerLink:"routerLink"},features:[Fe]})}return n})();var Fo=class{};var _p=(()=>{class n{router;injector;preloadingStrategy;loader;subscription;constructor(e,t,r,o){this.router=e,this.injector=t,this.preloadingStrategy=r,this.loader=o}setUpPreloading(){this.subscription=this.router.events.pipe(ue(e=>e instanceof St),ci(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription?.unsubscribe()}processRoutes(e,t){let r=[];for(let o of t){o.providers&&!o._injector&&(o._injector=ma(o.providers,e,""));let a=o._injector??e;o._loadedNgModuleFactory&&!o._loadedInjector&&(o._loadedInjector=o._loadedNgModuleFactory.create(a).injector);let s=o._loadedInjector??a;(o.loadChildren&&!o._loadedRoutes&&o.canLoad===void 0||o.loadComponent&&!o._loadedComponent)&&r.push(this.preloadConfig(a,o)),(o.children||o._loadedRoutes)&&r.push(this.processRoutes(s,o.children??o._loadedRoutes))}return st(r).pipe(Ml())}preloadConfig(e,t){return this.preloadingStrategy.preload(t,()=>{if(e.destroyed)return V(null);let r;t.loadChildren&&t.canLoad===void 0?r=st(this.loader.loadChildren(e,t)):r=V(null);let o=r.pipe(en(a=>a===null?V(void 0):(t._loadedRoutes=a.routes,t._loadedInjector=a.injector,t._loadedNgModuleFactory=a.factory,this.processRoutes(a.injector??e,a.routes))));if(t.loadComponent&&!t._loadedComponent){let a=this.loader.loadComponent(e,t);return st([o,a]).pipe(Ml())}else return o})}static \u0275fac=function(t){return new(t||n)(E(ot),E(nt),E(Fo),E(Is))};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),vp=new b(""),Ey=(()=>{class n{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=pr;restoredId=0;store={};isHydrating=l(Cu,{optional:!0})??!1;urlSerializer=l(Kn);zone=l(B);viewportScroller=l(Kl);transitions=l(Ts);constructor(e){this.options=e,this.options.scrollPositionRestoration||="disabled",this.options.anchorScrolling||="disabled",this.isHydrating&&l(yt).whenStable().then(()=>{this.isHydrating=!1})}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof mn?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof St?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof pn&&e.code===gr.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{if(!(e instanceof _r)||e.scrollBehavior==="manual")return;let t={behavior:"instant"};e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0],t):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position,t):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(e,t){if(this.isHydrating)return;let r=pe(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(()=>_e(this,null,function*(){yield new Promise(o=>{setTimeout(o),typeof requestAnimationFrame<"u"&&requestAnimationFrame(o)}),this.zone.run(()=>{this.transitions.events.next(new _r(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,t,r))})}))}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(t){Xi()};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})();function pd(n,...i){return jn([{provide:Oi,multi:!0,useValue:n},[],{provide:fn,useFactory:bp},{provide:Fl,multi:!0,useFactory:yp},i.map(e=>e.\u0275providers)])}function bp(){return l(ot).routerState.root}function No(n,i){return{\u0275kind:n,\u0275providers:i}}function yp(){let n=l(z);return i=>{let e=n.get(yt);if(i!==e.components[0])return;let t=n.get(ot),r=n.get(wp);n.get(fd)===1&&t.initialNavigation(),n.get(Sp,null,{optional:!0})?.setUpPreloading(),n.get(vp,null,{optional:!0})?.init(),t.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var wp=new b("",{factory:()=>new y}),fd=new b("",{factory:()=>1});function Cp(){let n=[{provide:Pl,useValue:!0},{provide:fd,useValue:0},Ur(()=>{let i=l(z);return i.get(Ul,Promise.resolve()).then(()=>new Promise(t=>{let r=i.get(ot),o=i.get(wp);As(r,()=>{t(!0)}),i.get(Ts).afterPreactivation=()=>(t(!0),o.closed?V(void 0):o),r.initialNavigation()}))})];return No(2,n)}function Dp(){let n=[Ur(()=>{l(ot).setUpLocationChangeListener()}),{provide:fd,useValue:2}];return No(3,n)}var Sp=new b("");function xp(n){return No(0,[{provide:Sp,useExisting:_p},{provide:Fo,useExisting:n}])}function Ps(){return No(8,[ad,{provide:Po,useExisting:ad}])}function Mp(n){Hr("NgRouterViewTransitions");let i=[{provide:dd,useValue:pp},{provide:ud,useValue:v({skipNextTransition:!!n?.skipInitialTransition},n)}];return No(9,i)}var Ep=[on,{provide:Kn,useClass:Fn},ot,Pi,{provide:fn,useFactory:bp},Is,[]],Fi=(()=>{class n{constructor(){}static forRoot(e,t){return{ngModule:n,providers:[Ep,[],{provide:Oi,multi:!0,useValue:e},[],t?.errorHandler?{provide:hd,useValue:t.errorHandler}:[],{provide:Qn,useValue:t||{}},t?.useHash?Ry():Ty(),Iy(),t?.preloadingStrategy?xp(t.preloadingStrategy).\u0275providers:[],t?.initialNavigation?ky(t):[],t?.bindToComponentInputs?Ps().\u0275providers:[],t?.enableViewTransitions?Mp().\u0275providers:[],Ay()]}}static forChild(e){return{ngModule:n,providers:[{provide:Oi,multi:!0,useValue:e}]}}static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=O({})}return n})();function Iy(){return{provide:vp,useFactory:()=>{let n=l(Kl),i=l(Qn);return i.scrollOffset&&n.setOffset(i.scrollOffset),new Ey(i)}}}function Ry(){return{provide:$t,useClass:Wl}}function Ty(){return{provide:$t,useClass:Sa}}function ky(n){return[n.initialNavigation==="disabled"?Dp().\u0275providers:[],n.initialNavigation==="enabledBlocking"?Cp().\u0275providers:[]]}var md=new b("");function Ay(){return[{provide:md,useFactory:yp},{provide:Fl,multi:!0,useExisting:md}]}var Py=["*",[["mat-toolbar-row"]]],Oy=["*","mat-toolbar-row"],Fy=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return n})(),Rp=(()=>{class n{_elementRef=l(P);_platform=l(ce);_document=l(F);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=w({type:n,selectors:[["mat-toolbar"]],contentQueries:function(t,r,o){if(t&1&&Ut(o,Fy,5),t&2){let a;J(a=ee())&&(r._toolbarRows=a)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(t,r){t&2&&(rt(r.color?"mat-"+r.color:""),T("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:Oy,decls:2,vars:0,template:function(t,r){t&1&&(De(Py),K(0),K(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var Tp=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=O({imports:[re]})}return n})();var Ly=["mat-menu-item",""],By=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],Vy=["mat-icon, [matMenuItemIcon]","*"];function jy(n,i){n&1&&(Ui(),u(0,"svg",2),q(1,"polygon",3),h())}var zy=["*"];function Hy(n,i){if(n&1){let e=Re();$e(0,"div",0),_a("click",function(){we(e);let r=k();return Ce(r.closed.emit("click"))})("animationstart",function(r){we(e);let o=k();return Ce(o._onAnimationStart(r.animationName))})("animationend",function(r){we(e);let o=k();return Ce(o._onAnimationDone(r.animationName))})("animationcancel",function(r){we(e);let o=k();return Ce(o._onAnimationDone(r.animationName))}),$e(1,"div",1),K(2),Qe()()}if(n&2){let e=k();rt(e._classList),T("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),Rt("id",e.panelId),Z("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}var _d=new b("MAT_MENU_PANEL"),Lo=(()=>{class n{_elementRef=l(P);_document=l(F);_focusMonitor=l(wt);_parentMenu=l(_d,{optional:!0});_changeDetectorRef=l(te);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new y;_focused=new y;_highlighted=!1;_triggersSubmenu=!1;constructor(){l(Ne).load(cn),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll("mat-icon, .material-icons");for(let r=0;r<t.length;r++)t[r].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=w({type:n,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(t,r){t&1&&x("click",function(a){return r._checkDisabled(a)})("mouseenter",function(){return r._handleMouseEnter()}),t&2&&(Z("role",r.role)("tabindex",r._getTabIndex())("aria-disabled",r.disabled)("disabled",r.disabled||null),T("mat-mdc-menu-item-highlighted",r._highlighted)("mat-mdc-menu-item-submenu-trigger",r._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",A],disableRipple:[2,"disableRipple","disableRipple",A]},exportAs:["matMenuItem"],attrs:Ly,ngContentSelectors:Vy,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,r){t&1&&(De(By),K(0),u(1,"span",0),K(2,1),h(),q(3,"div",1),G(4,jy,2,0,":svg:svg",2)),t&2&&(p(3),D("matRippleDisabled",r.disableRipple||r.disabled)("matRippleTrigger",r._getHostElement()),p(),$(r._triggersSubmenu?4:-1))},dependencies:[Je],encapsulation:2,changeDetection:0})}return n})();var Uy=new b("MatMenuContent");var Gy=new b("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),gd="_mat-menu-enter",Os="_mat-menu-exit",Mr=(()=>{class n{_elementRef=l(P);_changeDetectorRef=l(te);_injector=l(z);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=Me();_allItems;_directDescendantItems=new zr;_classList={};_panelAnimationState="void";_animationDone=new y;_isAnimating=j(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(e){let t=this._previousPanelClass,r=v({},this._classList);t&&t.length&&t.split(" ").forEach(o=>{r[o]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(o=>{r[o]=!0}),this._elementRef.nativeElement.className=""),this._classList=r}_previousPanelClass;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new N;close=this.closed;panelId=l(ve).getId("mat-menu-panel-");constructor(){let e=l(Gy);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new ho(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(Ge(this._directDescendantItems),Ee(e=>dt(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let r=e.toArray(),o=Math.max(0,Math.min(r.length-1,t.activeItemIndex||0));r[o]&&!r[o].disabled?t.setActiveItem(o):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(Ge(this._directDescendantItems),Ee(t=>dt(...t.map(r=>r._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,r=this._keyManager;switch(t){case 27:Xe(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&r.setFocusOrigin("keyboard"),r.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Ve(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let r=this._keyManager;r.setFocusOrigin(e).setFirstItemActive(),!r.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=se(v({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===Os;(t||e===gd)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(e){(e===gd||e===Os)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(Os),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?gd:Os)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(Ge(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=w({type:n,selectors:[["mat-menu"]],contentQueries:function(t,r,o){if(t&1&&Ut(o,Uy,5)(o,Lo,5)(o,Lo,4),t&2){let a;J(a=ee())&&(r.lazyContent=a.first),J(a=ee())&&(r._allItems=a),J(a=ee())&&(r.items=a)}},viewQuery:function(t,r){if(t&1&&Ye(bt,5),t&2){let o;J(o=ee())&&(r.templateRef=o.first)}},hostVars:3,hostBindings:function(t,r){t&2&&Z("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",A],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:A(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[Te([{provide:_d,useExisting:n}])],ngContentSelectors:zy,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(t,r){t&1&&(De(),Fu(0,Hy,3,12,"ng-template"))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-menu-container-color, var(--mat-sys-surface-container));
  box-shadow: var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--mat-menu-divider-color, var(--mat-sys-surface-variant));
  margin-bottom: var(--mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--mat-menu-item-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--mat-menu-item-spacing, 12px);
  height: var(--mat-menu-item-icon-size, 24px);
  width: var(--mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2,changeDetection:0})}return n})(),$y=new b("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let n=l(z);return()=>kn(n)}});var xr=new WeakMap,Wy=(()=>{class n{_canHaveBackdrop;_element=l(P);_viewContainerRef=l(lt);_menuItemInstance=l(Lo,{optional:!0,self:!0});_dir=l(Ue,{optional:!0});_focusMonitor=l(wt);_ngZone=l(B);_injector=l(z);_scrollStrategy=l($y);_changeDetectorRef=l(te);_animationsDisabled=Me();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=Ie.EMPTY;_menuCloseSubscription=Ie.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e&&(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=l(_d,{optional:!0});this._parentMaterialMenu=t instanceof Mr?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&xr.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let r=xr.get(t);xr.set(t,this),r&&r!==this&&r._closeMenu();let o=this._createOverlay(t),a=o.getConfig(),s=a.positionStrategy;this._setPosition(t,s),this._canHaveBackdrop?a.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:a.hasBackdrop=t.hasBackdrop??!1,o.hasAttached()||(o.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),t instanceof Mr&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(le(t.close)).subscribe(()=>{s.withLockedPosition(!1).reapplyLastPosition(),s.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,r=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),r instanceof Mr&&this._ownsMenu(r)?(this._pendingRemoval=r._animationDone.pipe(xe(1)).subscribe(()=>{t.detach(),xr.has(r)||r.lazyContent?.detach()}),r._setIsOpen(!1)):(t.detach(),r?.lazyContent?.detach()),r&&this._ownsMenu(r)&&xr.delete(r),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=Kt(this._injector,t),this._overlayRef.keydownEvents().subscribe(r=>{this._menu instanceof Mr&&this._menu._handleKeydown(r)})}return this._overlayRef}_getOverlayConfig(e){return new Zt({positionStrategy:Ri(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(r=>{this._ngZone.run(()=>{let o=r.connectionPair.overlayX==="start"?"after":"before",a=r.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(o,a)})})}_setPosition(e,t){let[r,o]=e.xPosition==="before"?["end","start"]:["start","end"],[a,s]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[c,d]=[a,s],[m,f]=[r,o],S=0;if(this._triggersSubmenu()){if(f=r=e.xPosition==="before"?"start":"end",o=m=r==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let H=this._parentMaterialMenu.items.first;this._parentInnerPadding=H?H._getHostElement().offsetTop:0}S=a==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(c=a==="top"?"bottom":"top",d=s==="top"?"bottom":"top");t.withPositions([{originX:r,originY:c,overlayX:m,overlayY:a,offsetY:S},{originX:o,originY:c,overlayX:f,overlayY:a,offsetY:S},{originX:r,originY:d,overlayX:m,overlayY:s,offsetY:-S},{originX:o,originY:d,overlayX:f,overlayY:s,offsetY:-S}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),r=this._parentMaterialMenu?this._parentMaterialMenu.closed:V(),o=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(ue(a=>this._menuOpen&&a!==this._menuItemInstance)):V();return dt(e,r,o,t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new Xt(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return xr.get(e)===this}_triggerIsAriaDisabled(){return A(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(t){Xi()};static \u0275dir=I({type:n})}return n})(),kp=(()=>{class n extends Wy{_cleanupTouchstart;_hoverSubscription=Ie.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new N;onMenuOpen=this.menuOpened;menuClosed=new N;onMenuClose=this.menuClosed;constructor(){super(!0);let e=l(me);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",t=>{Rn(t)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){In(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,r){t&1&&x("click",function(a){return r._handleClick(a)})("mousedown",function(a){return r._handleMousedown(a)})("keydown",function(a){return r._handleKeydown(a)}),t&2&&Z("aria-haspopup",r.menu?"menu":null)("aria-expanded",r.menuOpen)("aria-controls",r.menuOpen?r.menu==null?null:r.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[fe]})}return n})();var Ap=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=O({imports:[ct,Vt,re,sn]})}return n})();function Pp(n){return Error(`Unable to find icon with the name "${n}"`)}function Yy(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Op(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function Fp(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var Ln=class{url;svgText;options;svgElement=null;constructor(i,e,t){this.url=i,this.svgText=e,this.options=t}},Lp=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,r,o){this._httpClient=e,this._sanitizer=t,this._errorHandler=o,this._document=r}addSvgIcon(e,t,r){return this.addSvgIconInNamespace("",e,t,r)}addSvgIconLiteral(e,t,r){return this.addSvgIconLiteralInNamespace("",e,t,r)}addSvgIconInNamespace(e,t,r,o){return this._addSvgIconConfig(e,t,new Ln(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,r,o){let a=this._sanitizer.sanitize(pt.HTML,r);if(!a)throw Fp(r);let s=yi(a);return this._addSvgIconConfig(e,t,new Ln("",s,o))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,r){return this._addSvgIconSetConfig(e,new Ln(t,null,r))}addSvgIconSetLiteralInNamespace(e,t,r){let o=this._sanitizer.sanitize(pt.HTML,t);if(!o)throw Fp(t);let a=yi(o);return this._addSvgIconSetConfig(e,new Ln("",a,r))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(pt.RESOURCE_URL,e);if(!t)throw Op(e);let r=this._cachedIconsByUrl.get(t);return r?V(Fs(r)):this._loadSvgIconFromConfig(new Ln(e,null)).pipe(Ke(o=>this._cachedIconsByUrl.set(t,o)),X(o=>Fs(o)))}getNamedSvgIcon(e,t=""){let r=Np(t,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(t,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(t);return a?this._getSvgFromIconSetConfigs(e,a):ra(Pp(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?V(Fs(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(X(t=>Fs(t)))}_getSvgFromIconSetConfigs(e,t){let r=this._extractIconWithNameFromAnySet(e,t);if(r)return V(r);let o=t.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(zi(s=>{let d=`Loading icon set URL: ${this._sanitizer.sanitize(pt.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(d)),V(null)})));return sa(o).pipe(X(()=>{let a=this._extractIconWithNameFromAnySet(e,t);if(!a)throw Pp(e);return a}))}_extractIconWithNameFromAnySet(e,t){for(let r=t.length-1;r>=0;r--){let o=t[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(Ke(t=>e.svgText=t),X(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?V(null):this._fetchIcon(e).pipe(Ke(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,r){let o=e.querySelector(`[id="${t}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let s=this._svgElementFromString(yi("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,r)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let r=t.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let t=this._svgElementFromString(yi("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:a,value:s}=r[o];a!=="id"&&t.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[o].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw Yy();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let a=this._sanitizer.sanitize(pt.RESOURCE_URL,t);if(!a)throw Op(t);let s=this._inProgressUrlFetches.get(a);if(s)return s;let c=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(X(d=>yi(d)),Hi(()=>this._inProgressUrlFetches.delete(a)),hu());return this._inProgressUrlFetches.set(a,c),c}_addSvgIconConfig(e,t,r){return this._svgIconConfigs.set(Np(e,t),r),this}_addSvgIconSetConfig(e,t){let r=this._iconSetConfigs.get(e);return r?r.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](t,e);if(o)return Xy(o)?new Ln(o.url,null,o.options):new Ln(o,null)}}static \u0275fac=function(t){return new(t||n)(E(cc,8),E(ro),E(F,8),E(ui))};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Fs(n){return n.cloneNode(!0)}function Np(n,i){return n+":"+i}function Xy(n){return!!(n.url&&n.options)}var Zy=["*"],Ky=new b("MAT_ICON_DEFAULT_OPTIONS"),Qy=new b("mat-icon-location",{providedIn:"root",factory:()=>{let n=l(F),i=n?n.location:null;return{getPathname:()=>i?i.pathname+i.search:""}}}),Bp=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Jy=Bp.map(n=>`[${n}]`).join(", "),e0=/^url\(['"]?#(.*?)['"]?\)$/,gn=(()=>{class n{_elementRef=l(P);_iconRegistry=l(Lp);_location=l(Qy);_errorHandler=l(ui);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=Ie.EMPTY;constructor(){let e=l(new rn("aria-hidden"),{optional:!0}),t=l(Ky,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let r=e.childNodes[t];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),t.forEach(r=>e.classList.add(r)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(Jy),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<t.length;o++)Bp.forEach(a=>{let s=t[o],c=s.getAttribute(a),d=c?c.match(e0):null;if(d){let m=r.get(s);m||(m=[],r.set(s,m)),m.push({name:a,value:d[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,r]=this._splitIconName(e);t&&(this._svgNamespace=t),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,t).pipe(xe(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${t}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=w({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,r){t&2&&(Z("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),rt(r.color?"mat-"+r.color:""),T("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",A],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:Zy,decls:1,vars:0,template:function(t,r){t&1&&(De(),K(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),_n=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=O({imports:[re]})}return n})();var Ns=(()=>{class n{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ls=(()=>{class n{_animationsDisabled=Me();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=w({type:n,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,r){t&2&&T("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,r){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return n})();var t0=["text"],n0=[[["mat-icon"]],"*"],i0=["mat-icon","*"];function r0(n,i){if(n&1&&q(0,"mat-pseudo-checkbox",1),n&2){let e=k();D("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function o0(n,i){if(n&1&&q(0,"mat-pseudo-checkbox",3),n&2){let e=k();D("disabled",e.disabled)}}function a0(n,i){if(n&1&&(u(0,"span",4),g(1),h()),n&2){let e=k();p(),ie("(",e.group.label,")")}}var bd=new b("MAT_OPTION_PARENT_COMPONENT"),yd=new b("MatOptgroup");var vd=class{source;isUserInput;constructor(i,e=!1){this.source=i,this.isUserInput=e}},Er=(()=>{class n{_element=l(P);_changeDetectorRef=l(te);_parent=l(bd,{optional:!0});group=l(yd,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=l(ve).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=j(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new N;_text;_stateChanges=new y;constructor(){let e=l(Ne);e.load(cn),e.load(er),this._signalDisableRipple=!!this._parent&&zn(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Xe(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new vd(this,e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=w({type:n,selectors:[["mat-option"]],viewQuery:function(t,r){if(t&1&&Ye(t0,7),t&2){let o;J(o=ee())&&(r._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,r){t&1&&x("click",function(){return r._selectViaInteraction()})("keydown",function(a){return r._handleKeydown(a)}),t&2&&(Rt("id",r.id),Z("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),T("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",A]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:i0,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,r){t&1&&(De(n0),G(0,r0,1,2,"mat-pseudo-checkbox",1),K(1),u(2,"span",2,0),K(4,1),h(),G(5,o0,1,1,"mat-pseudo-checkbox",3),G(6,a0,2,1,"span",4),q(7,"div",5)),t&2&&($(r.multiple?0:-1),p(5),$(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),p(),$(r.group&&r.group._inert?6:-1),p(),D("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[Ls,Je],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return n})();function Vp(n,i,e){if(e.length){let t=i.toArray(),r=e.toArray(),o=0;for(let a=0;a<n+1;a++)t[a].group&&t[a].group===r[o]&&o++;return o}return 0}function jp(n,i,e,t){return n<e?n:n+i>e+t?Math.max(0,n-t+i):e}var zp=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=O({imports:[re]})}return n})();var wd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=O({imports:[ct,zp,Er,re]})}return n})();var Ir=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(i,e,t,r,o){this._defaultMatcher=i,this.ngControl=e,this._parentFormGroup=t,this._parentForm=r,this._stateChanges=o}updateErrorState(){let i=this.errorState,e=this._parentFormGroup||this._parentForm,t=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=t?.isErrorState(r,e)??!1;o!==i&&(this.errorState=o,this._stateChanges.next())}};var s0=["mat-internal-form-field",""],l0=["*"],Hp=(()=>{class n{labelPosition="after";static \u0275fac=function(t){return new(t||n)};static \u0275cmp=w({type:n,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(t,r){t&2&&T("mdc-form-field--align-end",r.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:s0,ngContentSelectors:l0,decls:1,vars:0,template:function(t,r){t&1&&(De(),K(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2,changeDetection:0})}return n})();function c0(n,i){}var ti=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var Dd=(()=>{class n extends $n{_elementRef=l(P);_focusTrapFactory=l(fc);_config;_interactivityChecker=l(Ba);_ngZone=l(B);_focusMonitor=l(wt);_renderer=l(me);_changeDetectorRef=l(te);_injector=l(z);_platform=l(ce);_document=l(F);_portalOutlet;_focusTrapped=new y;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=l(ti,{optional:!0})||new ti,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),a(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",r),a=this._renderer.listen(e,"mousedown",r)})),e.focus(t)}_focusByCssSelector(e,t){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,t)}_trapFocus(e){this._isDestroyed||Ve(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e=="string"?t=this._document.querySelector(e):typeof e=="boolean"?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus=="function"){let r=oo(),o=this._elementRef.nativeElement;(!r||r===this._document.body||r===o||o.contains(r))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=oo();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=oo()))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=w({type:n,selectors:[["cdk-dialog-container"]],viewQuery:function(t,r){if(t&1&&Ye(Wn,7),t&2){let o;J(o=ee())&&(r._portalOutlet=o.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(t,r){t&2&&Z("id",r._config.id||null)("role",r._config.role)("aria-modal",r._config.ariaModal)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null)},features:[fe],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,r){t&1&&he(0,c0,0,0,"ng-template",0)},dependencies:[Wn],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return n})(),Vo=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new y;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(i,e){this.overlayRef=i,this.config=e,this.disableClose=e.disableClose,this.backdropClick=i.backdropClick(),this.keydownEvents=i.keydownEvents(),this.outsidePointerEvents=i.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!Xe(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=i.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(i,e){if(this._canClose(i)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(i),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(i="",e=""){return this.overlayRef.updateSize({width:i,height:e}),this}addPanelClass(i){return this.overlayRef.addPanelClass(i),this}removePanelClass(i){return this.overlayRef.removePanelClass(i),this}_canClose(i){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(i,e,this.componentInstance))}},d0=new b("DialogScrollStrategy",{providedIn:"root",factory:()=>{let n=l(z);return()=>ar(n)}}),u0=new b("DialogData"),h0=new b("DefaultDialogConfig");function m0(n){let i=j(n),e=new N;return{valueSignal:i,get value(){return i()},change:e,ngOnDestroy(){e.complete()}}}var Sd=(()=>{class n{_injector=l(z);_defaultOptions=l(h0,{optional:!0});_parentDialog=l(n,{optional:!0,skipSelf:!0});_overlayContainer=l(Ka);_idGenerator=l(ve);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new y;_afterOpenedAtThisLevel=new y;_ariaHiddenElements=new Map;_scrollStrategy=l(d0);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=tn(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Ge(void 0)));constructor(){}open(e,t){let r=this._defaultOptions||new ti;t=v(v({},r),t),t.id=t.id||this._idGenerator.getId("cdk-dialog-"),t.id&&this.getDialogById(t.id);let o=this._getOverlayConfig(t),a=Kt(this._injector,o),s=new Vo(a,t),c=this._attachContainer(a,s,t);if(s.containerInstance=c,!this.openDialogs.length){let d=this._overlayContainer.getContainerElement();c._focusTrapped?c._focusTrapped.pipe(xe(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(d)}):this._hideNonDialogContentFromAssistiveTechnology(d)}return this._attachDialogContent(e,s,c,t),this.openDialogs.push(s),s.closed.subscribe(()=>this._removeOpenDialog(s,!0)),this.afterOpened.next(s),s}closeAll(){Cd(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){Cd(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),Cd(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new Zt({positionStrategy:e.positionStrategy||Yn().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,r){let o=r.injector||r.viewContainerRef?.injector,a=[{provide:ti,useValue:r},{provide:Vo,useValue:t},{provide:rr,useValue:e}],s;r.container?typeof r.container=="function"?s=r.container:(s=r.container.type,a.push(...r.container.providers(r))):s=Dd;let c=new Yt(s,r.viewContainerRef,z.create({parent:o||this._injector,providers:a}));return e.attach(c).instance}_attachDialogContent(e,t,r,o){if(e instanceof bt){let a=this._createInjector(o,t,r,void 0),s={$implicit:o.data,dialogRef:t};o.templateContext&&(s=v(v({},s),typeof o.templateContext=="function"?o.templateContext():o.templateContext)),r.attachTemplatePortal(new Xt(e,null,s,a))}else{let a=this._createInjector(o,t,r,this._injector),s=r.attachComponentPortal(new Yt(e,o.viewContainerRef,a));t.componentRef=s,t.componentInstance=s.instance}}_createInjector(e,t,r,o){let a=e.injector||e.viewContainerRef?.injector,s=[{provide:u0,useValue:e.data},{provide:Vo,useValue:t}];return e.providers&&(typeof e.providers=="function"?s.push(...e.providers(t,e,r)):s.push(...e.providers)),e.direction&&(!a||!a.get(Ue,null,{optional:!0}))&&s.push({provide:Ue,useValue:m0(e.direction)}),z.create({parent:a||o,providers:s})}_removeOpenDialog(e,t){let r=this.openDialogs.indexOf(e);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,a)=>{o?a.setAttribute("aria-hidden",o):a.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let r=t.length-1;r>-1;r--){let o=t[r];o!==e&&o.nodeName!=="SCRIPT"&&o.nodeName!=="STYLE"&&!o.hasAttribute("aria-live")&&!o.hasAttribute("popover")&&(this._ariaHiddenElements.set(o,o.getAttribute("aria-hidden")),o.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Cd(n,i){let e=n.length;for(;e--;)i(n[e])}var Up=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=O({providers:[Sd],imports:[Vt,qn,Ci,qn]})}return n})();function p0(n,i){}var js=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},xd="mdc-dialog--open",Gp="mdc-dialog--opening",$p="mdc-dialog--closing",f0=150,g0=75,_0=(()=>{class n extends Dd{_animationStateChanged=new N;_animationsEnabled=!Me();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?qp(this._config.enterAnimationDuration)??f0:0;_exitAnimationDuration=this._animationsEnabled?qp(this._config.exitAnimationDuration)??g0:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Wp,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Gp,xd)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(xd),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(xd),this._animationsEnabled?(this._hostElement.style.setProperty(Wp,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add($p)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Gp,$p)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),t}static \u0275fac=(()=>{let e;return function(r){return(e||(e=mt(n)))(r||n)}})();static \u0275cmp=w({type:n,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(t,r){t&2&&(Rt("id",r._config.id),Z("aria-modal",r._config.ariaModal)("role",r._config.role)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null),T("_mat-animation-noopable",!r._animationsEnabled)("mat-mdc-dialog-container-with-actions",r._actionSectionCount>0))},features:[fe],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(t,r){t&1&&(u(0,"div",0)(1,"div",1),he(2,p0,0,0,"ng-template",2),h()())},dependencies:[Wn],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2})}return n})(),Wp="--mat-dialog-transition-duration";function qp(n){return n==null?null:typeof n=="number"?n:n.endsWith("ms")?Lt(n.substring(0,n.length-2)):n.endsWith("s")?Lt(n.substring(0,n.length-1))*1e3:n==="0"?0:null}var Vs=(function(n){return n[n.OPEN=0]="OPEN",n[n.CLOSING=1]="CLOSING",n[n.CLOSED=2]="CLOSED",n})(Vs||{}),Ni=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new Sl(1);_beforeClosed=new Sl(1);_result;_closeFallbackTimeout;_state=Vs.OPEN;_closeInteractionType;constructor(i,e,t){this._ref=i,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=i.id,i.addPanelClass("mat-mdc-dialog-panel"),t._animationStateChanged.pipe(ue(r=>r.state==="opened"),xe(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(ue(r=>r.state==="closed"),xe(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),i.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),dt(this.backdropClick(),this.keydownEvents().pipe(ue(r=>r.keyCode===27&&!this.disableClose&&!Xe(r)))).subscribe(r=>{this.disableClose||(r.preventDefault(),Yp(this,r.type==="keydown"?"keyboard":"mouse"))})}close(i){let e=this._config.closePredicate;e&&!e(i,this._config,this.componentInstance)||(this._result=i,this._containerInstance._animationStateChanged.pipe(ue(t=>t.state==="closing"),xe(1)).subscribe(t=>{this._beforeClosed.next(i),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=Vs.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(i){let e=this._ref.config.positionStrategy;return i&&(i.left||i.right)?i.left?e.left(i.left):e.right(i.right):e.centerHorizontally(),i&&(i.top||i.bottom)?i.top?e.top(i.top):e.bottom(i.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(i="",e=""){return this._ref.updateSize(i,e),this}addPanelClass(i){return this._ref.addPanelClass(i),this}removePanelClass(i){return this._ref.removePanelClass(i),this}getState(){return this._state}_finishDialogClose(){this._state=Vs.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function Yp(n,i,e){return n._closeInteractionType=i,n.close(e)}var jo=new b("MatMdcDialogData"),v0=new b("mat-mdc-dialog-default-options"),b0=new b("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let n=l(z);return()=>ar(n)}}),ft=(()=>{class n{_defaultOptions=l(v0,{optional:!0});_scrollStrategy=l(b0);_parentDialog=l(n,{optional:!0,skipSelf:!0});_idGenerator=l(ve);_injector=l(z);_dialog=l(Sd);_animationsDisabled=Me();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new y;_afterOpenedAtThisLevel=new y;dialogConfigClass=js;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=tn(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Ge(void 0)));constructor(){this._dialogRefConstructor=Ni,this._dialogContainerType=_0,this._dialogDataToken=jo}open(e,t){let r;t=v(v({},this._defaultOptions||new js),t),t.id=t.id||this._idGenerator.getId("mat-mdc-dialog-"),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(e,se(v({},t),{positionStrategy:Yn(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()==="0"||t.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:ti,useValue:t}]},templateContext:()=>({dialogRef:r}),providers:(a,s,c)=>(r=new this._dialogRefConstructor(a,t,c),r.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:c},{provide:this._dialogDataToken,useValue:s.data},{provide:this._dialogRefConstructor,useValue:r}])}));return r.componentRef=o.componentRef,r.componentInstance=o.componentInstance,this.openDialogs.push(r),this.afterOpened.next(r),r.afterClosed().subscribe(()=>{let a=this.openDialogs.indexOf(r);a>-1&&(this.openDialogs.splice(a,1),this.openDialogs.length||this._getAfterAllClosed().next())}),r}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),vn=(()=>{class n{dialogRef=l(Ni,{optional:!0});_elementRef=l(P);_dialog=l(ft);ariaLabel;type="button";dialogResult;_matDialogClose;constructor(){}ngOnInit(){this.dialogRef||(this.dialogRef=Zp(this._elementRef,this._dialog.openDialogs))}ngOnChanges(e){let t=e._matDialogClose||e._matDialogCloseResult;t&&(this.dialogResult=t.currentValue)}_onButtonClick(e){Yp(this.dialogRef,e.screenX===0&&e.screenY===0?"keyboard":"mouse",this.dialogResult)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(t,r){t&1&&x("click",function(a){return r._onButtonClick(a)}),t&2&&Z("aria-label",r.ariaLabel||null)("type",r.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[Fe]})}return n})(),Xp=(()=>{class n{_dialogRef=l(Ni,{optional:!0});_elementRef=l(P);_dialog=l(ft);constructor(){}ngOnInit(){this._dialogRef||(this._dialogRef=Zp(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n})}return n})(),bn=(()=>{class n extends Xp{id=l(ve).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=mt(n)))(r||n)}})();static \u0275dir=I({type:n,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(t,r){t&2&&Rt("id",r.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[fe]})}return n})(),yn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[Ou([Cc])]})}return n})(),wn=(()=>{class n extends Xp{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=mt(n)))(r||n)}})();static \u0275dir=I({type:n,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(t,r){t&2&&T("mat-mdc-dialog-actions-align-start",r.align==="start")("mat-mdc-dialog-actions-align-center",r.align==="center")("mat-mdc-dialog-actions-align-end",r.align==="end")},inputs:{align:"align"},features:[fe]})}return n})();function Zp(n,i){let e=n.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-mdc-dialog-container");)e=e.parentElement;return e?i.find(t=>t.id===e.id):null}var Cn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=O({providers:[ft],imports:[Up,Vt,qn,re]})}return n})();var Kp=(()=>{class n{openTranslation(e){window.open(`https://translate.google.com/?hl=de&sl=de&tl=en&text=${e}&op=translate`)}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=w({type:n,selectors:[["app-cricket-info-dialog"]],decls:24,vars:0,consts:[["content",""],["mat-dialog-title",""],[1,"mt-2","material-symbols-outlined"],[1,"justify-content-end"],["mat-button","",3,"click"],["mat-button","","mat-dialog-close",""]],template:function(t,r){if(t&1){let o=Re();u(0,"h1",1),g(1,"How to win Cricket"),h(),u(2,"mat-dialog-content",null,0)(4,"p"),g(5,"Der Spieler, der alle Felder ausgeworfen hat und dessen Punktzahl nicht geringer als die eines Gegners ist, gewinnt das Spiel."),h(),u(6,"p"),g(7," Der Spieler, der die h\xF6chste Punktzahl nach dem Rundenlimit hat, gewinnt das Spiel."),h(),u(8,"p"),g(9," Bei Punktgleichheit gewinnt der Spieler mit den meisten ausgeworfenen Feldern."),h(),u(10,"p"),g(11,"Falls die Anzahl der ausgeworfenen Felder ebenfalls gleich ist, dann gibt es bis zu 10 m\xF6gliche zus\xE4tzliche W\xFCrfe, den Gewinner zu ermitteln."),h(),u(12,"span",2),g(13,"trip_origin"),h(),g(14," Bull "),q(15,"br"),u(16,"span",2),g(17,"target"),h(),g(18," Bullseye "),h(),u(19,"mat-dialog-actions",3)(20,"button",4),x("click",function(){we(o);let s=it(3);return Ce(r.openTranslation(s.innerText))}),g(21," translate "),h(),u(22,"button",5),g(23,"close"),h()()}},dependencies:[Fi,Se,Ze,Cn,vn,bn,wn,yn],encapsulation:2})}}return n})();var tt=(function(n){return n.Easy="Easy",n.Medium="Medium",n.Hard="Hard",n})(tt||{}),Qp={id:-1,name:"unknown",remainingPoints:-1,lastScore:-1,history:[],cricketMap:new Map,average:0,last3History:[]};var M=(function(n){return n.Simple501="501",n.DoubleOut501="501-DoubleOut",n.Cricket="Cricket",n.Elimination301="Elimination-301",n.Highscore="Highscore",n.RandomHit="Random-Hit",n})(M||{});var Jp=45,jt=(()=>{class n{constructor(){this.INITIAL_ROUND_COUNT=1,this.MAX_ROUND_COUNT=Jp,this.roundCount=this.INITIAL_ROUND_COUNT}setMaxRounds(e){e?this.MAX_ROUND_COUNT=e:this.MAX_ROUND_COUNT=Jp}getRemainingRounds(){let e=this.MAX_ROUND_COUNT-(this.roundCount-1);return e<0?0:e}incrementRoundCount(){this.roundCount++}reset(){this.roundCount=this.INITIAL_ROUND_COUNT}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var xt=(()=>{class n{static createPlayer(e,t){return{id:t,name:typeof e=="string"?e:e.name,isAI:typeof e=="string"?!1:e.isAI,difficulty:typeof e=="string"?void 0:e.difficulty,remainingPoints:501,lastScore:0,history:[],cricketMap:new Map,average:0,last3History:[]}}constructor(e,t,r,o,a){this.playerService=e,this.currentPlayerService=t,this.dialog=r,this.snackbar=o,this.roundCountService=a,this._gameType="",this.playerNames=[],this._hideAll=!1,this.lastPlayerId=-1}setGameType(e){this._gameType=e,this.currentPlayerService.setCurrentGameMode(e)}initPlayers(e){this.roundCountService.reset(),this.playerService.setupDartPlayers(e),this.playerNames=e.map(t=>typeof t=="string"?t:t.name),this._gameType===M.Elimination301||this._gameType===M.Highscore||this._gameType===M.RandomHit?this.playerService._players.forEach(t=>t.remainingPoints=0):this.playerService._players.forEach(t=>t.remainingPoints=501),this._hideAll=!1,this.lastPlayerId=this.playerService._players[this.playerService._players.length-1].id,this.currentPlayerService.init(this.playerService.getFirstPlayer())}score(e){let t=e.value*e.multiplier;if(this.currentPlayerService.isOvershot(t))this.displayOvershotNotification().afterDismissed().subscribe(()=>{this.switchPlayer()});else{if(this._gameType===M.Elimination301){this.scoreElimination(t);return}if(this._gameType===M.Highscore){this.scoreHighscore(t);return}if(this._gameType===M.RandomHit){this.scoreRandomHit(e);return}if(this._gameType===M.DoubleOut501){this.currentPlayerService.score501(t),this.checksFor501DoubleOut(e.multiplier);return}if(this._gameType===M.Simple501){this.currentPlayerService.score501(t),this.checksFor501();return}}}checksFor501(){this.currentPlayerService.hasReachedZeroPoints()?(this.currentPlayerService.finalizeTurn("subtract"),this.handleVictory()):this.currentPlayerService.hasNoThrowsRemaining()&&(this.currentPlayerService.finalizeTurn("subtract"),this.switchPlayer())}scoreHighscore(e){this.currentPlayerService.scoreHighscore(e),this.roundCountService.getRemainingRounds()==0&&this.isNewRound()&&this.currentPlayerService.hasNoThrowsRemaining()?(this.currentPlayerService.finalizeTurn("add"),this.handleVictoryByReachingRoundLimit()):this.currentPlayerService.hasNoThrowsRemaining()&&(this.currentPlayerService.finalizeTurn("add"),this.switchPlayer())}scoreRandomHit(e){let t=this.currentPlayerService._randomHitTarget(),r=t!==null&&e.value===t.value&&e.multiplier===t.multiplier,o=r?1:0,a=e.value*e.multiplier;this.currentPlayerService.scoreRandomHit(o,r,a),this.roundCountService.getRemainingRounds()==0&&this.isNewRound()&&this.currentPlayerService.hasNoThrowsRemaining()?(this.currentPlayerService.finalizeTurn("add"),this.handleVictoryByReachingRoundLimit()):this.currentPlayerService.hasNoThrowsRemaining()&&(this.currentPlayerService.finalizeTurn("add"),this.switchPlayer())}scoreElimination(e){this.currentPlayerService.scoreElimination(e);let t=301,r=this.currentPlayerService._currentPlayer.value,o=r.remainingPoints+this.currentPlayerService._accumulatedPoints;if(this.playerService._players.filter(a=>a.id!==r.id).forEach(a=>{a.remainingPoints===o&&(a.remainingPoints=0)}),o==t){this.currentPlayerService.finalizeTurn("add"),this.handleVictory();return}if(o>t){this.displayOvershotNotification().afterDismissed().subscribe(()=>{this.switchPlayer()});return}this.currentPlayerService.hasNoThrowsRemaining()&&(this.currentPlayerService.finalizeTurn("add"),this.switchPlayer())}checksFor501DoubleOut(e){this.currentPlayerService.hasReachedZeroPoints()?this.currentPlayerService.isDoubleOut(e)?(this.currentPlayerService.finalizeTurn("subtract"),this.handleVictory()):this.displayDoubleOutFailNotification().afterDismissed().subscribe(()=>{this.switchPlayer()}):this.currentPlayerService.hasNoThrowsRemaining()&&(this.currentPlayerService.finalizeTurn("subtract"),this.switchPlayer())}switchPlayer(){let e=this.isNewRound();this.currentPlayerService.switchPlayer(this.playerService.getNextPlayer(this.currentPlayerService._currentPlayer.value),e),this.setCurrentPlayerAsFristofList()}displayDoubleOutFailNotification(){let e=this.currentPlayerService._currentPlayer.value.name;return this.snackbar.open(`NOT DOUBLED OUT !!! Sorry ${e}, you haven't end with double. Switching players.`,"OK",{duration:2e3,horizontalPosition:"center",verticalPosition:"top",panelClass:["absolute-centered-snackbar"]})}displayOvershotNotification(){let e=this.currentPlayerService._currentPlayer.value.name;return this.snackbar.open(`OVERSHOT !!! Sorry ${e}, you have overshot. Switching players.`,"OK",{duration:2e3,horizontalPosition:"center",verticalPosition:"top",panelClass:["absolute-centered-snackbar"]})}handleVictoryByReachingRoundLimit(){let e=this.currentPlayerService.getPlayersWithHighestPoints(),t=this.playerService._players.find(r=>r.name===e[0]);t&&this.currentPlayerService._currentPlayer.next(t),this.dialog.open(ii,{data:{victoryByReachingRoundLimit:!0},disableClose:!0})}handleVictory(){this._hideAll=!0,this.dialog.open(ii,{disableClose:!0})}isNewRound(){return this.playerService._players.length===0?!1:this.currentPlayerService._currentPlayer.value.id===this.lastPlayerId}setCurrentPlayerAsFristofList(){let e=this.playerService._players.shift();this.playerService._players.push(e)}static{this.\u0275fac=function(t){return new(t||n)(E(Le),E(de),E(ft),E(un),E(jt))}}static{this.\u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var Le=(()=>{class n{constructor(){this._players=[]}setupDartPlayers(e){if(e.length==0)throw new Error("Provided array must not be empty");this._players=e.map((t,r)=>xt.createPlayer(t,r))}updatePlayer(e){let t=this._players.findIndex(r=>r.id===e.id);if(t!==-1){let r=this._players.slice();r[t]=e,this._players=r}}setupCricketPlayers(e){if(e.length==0)throw new Error("Provided array must not be empty");this._players=e.map((t,r)=>zt.createPlayer(t,r))}getFirstPlayer(){return this._players[0]}getNextPlayer(e){let t=this._players.findIndex(({id:o})=>o==e.id),r=this.getIndexOfNextPlayer(t);return this._players[r]}getIndexOfNextPlayer(e){let t=e+1;return t>=this._players.length?0:t}getPlayer(e){let t=this._players.findIndex(({id:r})=>r==e.id);return this._players[t]}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var w0=["*"];var C0=new b("MAT_CARD_CONFIG"),Hs=(()=>{class n{appearance;constructor(){let e=l(C0,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=w({type:n,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(t,r){t&2&&T("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:w0,decls:1,vars:0,template:function(t,r){t&1&&(De(),K(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return n})(),tf=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return n})();var ri=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=O({imports:[re]})}return n})();function D0(n,i){n&1&&We(0,"div",2)}var S0=new b("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var of=(()=>{class n{_elementRef=l(P);_ngZone=l(B);_changeDetectorRef=l(te);_renderer=l(me);_cleanupTransitionEnd;constructor(){let e=Rc(),t=l(S0,{optional:!0});this._isNoopAnimation=e==="di-disabled",e==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),t&&(t.color&&(this.color=this._defaultColor=t.color),this.mode=t.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";get value(){return this._value}set value(e){this._value=rf(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=rf(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new N;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(t){return new(t||n)};static \u0275cmp=w({type:n,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(t,r){t&2&&(Z("aria-valuenow",r._isIndeterminate()?null:r.value)("mode",r.mode),rt("mat-"+r.color),T("_mat-animation-noopable",r._isNoopAnimation)("mdc-linear-progress--animation-ready",!r._isNoopAnimation)("mdc-linear-progress--indeterminate",r._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",Tt],bufferValue:[2,"bufferValue","bufferValue",Tt],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(t,r){t&1&&($e(0,"div",0),We(1,"div",1),G(2,D0,1,0,"div",2),Qe(),$e(3,"div",3),We(4,"span",4),Qe(),$e(5,"div",5),We(6,"span",4),Qe()),t&2&&(p(),va("flex-basis",r._getBufferBarFlexBasis()),p(),$(r.mode==="buffer"?2:-1),p(),va("transform",r._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--mat-progress-bar-track-height, 4px), var(--mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--mat-progress-bar-track-height, 4px);
  border-radius: var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();function rf(n,i=0,e=100){return Math.max(i,Math.min(e,n))}var af=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=O({imports:[re]})}return n})();function M0(n,i){if(n&1&&(u(0,"div",11),g(1),h()),n&2){let e=k().$implicit,t=k();p(),ie(" (",t.getDiffToCurrentPlayer(e),") ")}}function E0(n,i){if(n&1&&(u(0,"div",14)(1,"div",15)(2,"span",16),g(3),h()(),u(4,"div",17),g(5),h()()),n&2){let e=i.$implicit,t=k(2).$implicit,r=k();p(),T("closed",r.getCricketHitCount(t,e)>=3),Z("title",e===25?"Bull":e),p(2),ae(e===25?"B":e),p(),T("closed",r.getCricketHitCount(t,e)>=3),p(),ie(" ",r.getCricketHitCount(t,e)," ")}}function I0(n,i){if(n&1&&(u(0,"div",12),he(1,E0,6,7,"div",13),h()),n&2){let e=k(2);p(),D("ngForOf",e.getCricketValues())}}function R0(n,i){if(n&1){let e=Re();fa(0),u(1,"div",4)(2,"div",5)(3,"div",6),g(4),h(),he(5,M0,2,1,"div",7),h(),u(6,"div",8),he(7,I0,2,1,"div",9),u(8,"span",10),x("click",function(){let r=we(e).$implicit,o=k();return Ce(o.currentPlayerService.showHistory(r))}),g(9),h()()(),ga()}if(n&2){let e=i.$implicit,t=k();p(4),ae(e.name),p(),D("ngIf",t.currentPlayerService.currentGameMode===t.GameType.Highscore||t.currentPlayerService.currentGameMode===t.GameType.Elimination301),p(2),D("ngIf",t.currentPlayerService.currentGameMode===t.GameType.Cricket),p(2),ie(" ",e.remainingPoints," ")}}var Rr=(()=>{class n{constructor(){this.playerService=l(Le),this.currentPlayerService=l(de),this.GameType=M}getDiffToCurrentPlayer(e){if(e===this.currentPlayerService._currentPlayer.getValue())return 0;let t=this.currentPlayerService._remainingPointsToDisplay();return Math.abs(t-e.remainingPoints)}getCricketValues(){return[15,16,17,18,19,20,25]}getCricketHitCount(e,t){return Be(()=>(this.currentPlayerService.last3HisSignal(),e.cricketMap.get(t)||0))()}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=w({type:n,selectors:[["app-mini-player-overview"]],decls:4,vars:1,consts:[[1,"m-1","px-1","py-1","shadow","rounded"],[1,"section","players-overview"],[1,"mini-scoreboard"],[4,"ngFor","ngForOf"],[1,"mini-player-row"],[1,"mini-player-main-info"],[1,"mini-player-name","player-name","text-wrap","text-truncate"],["class","diff-score small ms-1",4,"ngIf"],[1,"mini-player-actions","d-flex","align-items-center"],["class","cricket-mini-display d-flex me-2",4,"ngIf"],[1,"mini-player-score","fw-bold","matcardpointer",3,"click"],[1,"diff-score","small","ms-1"],[1,"cricket-mini-display","d-flex","me-2"],["class","cricket-circle-wrapper",4,"ngFor","ngForOf"],[1,"cricket-circle-wrapper"],[1,"cricket-circle"],[1,"cricket-value"],[1,"hit-count"]],template:function(t,r){t&1&&(u(0,"div",0)(1,"div",1)(2,"div",2),he(3,R0,10,4,"ng-container",3),h()()()),t&2&&(p(3),D("ngForOf",r.playerService._players))},dependencies:[ke,an,Wt],styles:[".players-overview[_ngcontent-%COMP%]{flex:1.5}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]{width:100%;height:90%;overflow-y:auto;display:flex;flex-direction:column;gap:2px;padding:2px}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]::-webkit-scrollbar{width:3px}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#fff3;border-radius:3px}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row[_ngcontent-%COMP%]{justify-content:center;display:flex;align-items:center;padding:.5rem;border-radius:4px;font-size:.75rem;min-height:34px;width:100%}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row.active-player[_ngcontent-%COMP%]{min-width:fit-content;background-color:#80d8ff33;border:1px solid rgba(128,216,255,.3)}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row[_ngcontent-%COMP%]   .mini-player-name[_ngcontent-%COMP%]{padding:.2rem;max-width:4.2rem;min-width:4.2rem;color:#80d8ff;font-weight:500}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row[_ngcontent-%COMP%]   .diff-score[_ngcontent-%COMP%]{color:#80d8ff;font-weight:500}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row[_ngcontent-%COMP%]   .mini-player-actions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row[_ngcontent-%COMP%]   .cricket-mini-display[_ngcontent-%COMP%]{width:100%;gap:.75rem;height:3rem;align-items:center}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row[_ngcontent-%COMP%]   .cricket-mini-display[_ngcontent-%COMP%]   .cricket-circle-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:1px}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row[_ngcontent-%COMP%]   .cricket-mini-display[_ngcontent-%COMP%]   .cricket-circle[_ngcontent-%COMP%]{width:18px;height:18px;border-radius:50%;background-color:#3f51b5;border:1px solid rgba(255,255,255,.4);display:flex;align-items:center;justify-content:center;transition:all .2s ease}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row[_ngcontent-%COMP%]   .cricket-mini-display[_ngcontent-%COMP%]   .cricket-circle[_ngcontent-%COMP%]   .cricket-value[_ngcontent-%COMP%]{font-size:10px;color:#fff;font-weight:700}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row[_ngcontent-%COMP%]   .cricket-mini-display[_ngcontent-%COMP%]   .cricket-circle.closed[_ngcontent-%COMP%]{background-color:#f44336;box-shadow:0 0 4px #f4433680;border-color:#ff9800}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row[_ngcontent-%COMP%]   .cricket-mini-display[_ngcontent-%COMP%]   .hit-count[_ngcontent-%COMP%]{font-size:9px;font-weight:700;color:#ffd740}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row[_ngcontent-%COMP%]   .cricket-mini-display[_ngcontent-%COMP%]   .hit-count.closed[_ngcontent-%COMP%]{color:#f44336}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row[_ngcontent-%COMP%]   .mini-player-score[_ngcontent-%COMP%]{min-width:3rem;text-align:center}"]})}}return n})();var sf=(()=>{class n{constructor(){this.GameType=M,this.playerService=l(Le),this.snackBarRef=l(un),this.data=l(ns),this.currentPlayerService=l(de),this.timeLeft=2300,this.INTERVAL=100,this.progress=j(100),this.cricketKeys=[]}ngOnInit(){this.nextPlayer=this.data.nextPlayer,this.startTimer(),this.cricketKeys=Array.from(this.nextPlayer.cricketMap.keys())}startTimer(){let e=this.timeLeft,t=setInterval(()=>{this.timeLeft>0?(this.timeLeft-=this.INTERVAL,this.progress.set(Math.floor(this.timeLeft/e*100))):(clearInterval(t),this.snackBarRef.dismiss())},this.INTERVAL)}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=w({type:n,selectors:[["app-switch-player-snack"]],decls:23,vars:8,consts:[[1,"d-flex","flex-column"],[3,"color","value"],[1,"player-name","mt-1"],[1,"text-truncate","text-warning"],[1,"dart-throw-indicator"],["mat-mini-fab","",1,"no-pointer","sum-circle"],["mat-mini-fab","","color","warn",1,"no-pointer","hit-circle"],[1,"text-light"]],template:function(t,r){t&1&&(u(0,"div",0),q(1,"mat-progress-bar",1),u(2,"div",2)(3,"h5",3),g(4),h()(),u(5,"div",0),q(6,"app-mini-player-overview"),h(),u(7,"div",4)(8,"button",5)(9,"span"),g(10),h()(),u(11,"button",6)(12,"span"),g(13),h()(),u(14,"button",6)(15,"span"),g(16),h()(),u(17,"button",6)(18,"span"),g(19),h()()(),u(20,"h3",7)(21,"strong"),g(22),h()()()),t&2&&(p(),D("color","accent")("value",r.progress()),p(3),ie(" ","NEXT: "+r.nextPlayer.name," "),p(6),ae(r.currentPlayerService._lastTurnSum),p(3),ae(r.currentPlayerService._lastTurnHits[0]??"\u27B6"),p(3),ae(r.currentPlayerService._lastTurnHits[1]??"\u27B6"),p(3),ae(r.currentPlayerService._lastTurnHits[2]??"\u27B6"),p(3),ie(" Points: ",r.currentPlayerService._currentPlayer.value.remainingPoints," "))},dependencies:[ri,Se,dn,ke,af,of,Rr],styles:[".player-name[_ngcontent-%COMP%]{min-width:50%;max-width:75%;display:inline-block}.dart-throw-indicator[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:6px;align-items:center;justify-content:center;margin:8px 0}.dart-throw-indicator[_ngcontent-%COMP%]   .sum-circle[_ngcontent-%COMP%]{background-color:#4caf50!important;color:#fff!important;transform:scale(.95);font-weight:700}.dart-throw-indicator[_ngcontent-%COMP%]   .hit-circle[_ngcontent-%COMP%]{background-color:#f44336!important;color:#fff!important;transform:scale(.75);margin:0}"]})}}return n})();function T0(n,i){if(n&1&&(u(0,"div",5)(1,"button",7)(2,"span"),g(3),h()(),u(4,"button",8)(5,"span"),g(6),h()(),u(7,"button",8)(8,"span"),g(9),h()(),u(10,"button",8)(11,"span"),g(12),h()()()),n&2){let e=i.$implicit;p(3),ae(e.sum),p(3),ae(e.hits[0]??"\u27B6"),p(3),ae(e.hits[1]??"\u27B6"),p(3),ae(e.hits[2]??"\u27B6")}}var lf=(()=>{class n{constructor(){this.historyData=l(jo)}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=w({type:n,selectors:[["app-history-dialog"]],decls:14,vars:3,consts:[[1,"minWith15vw"],["mat-dialog-title",""],[1,"mb-1"],[1,"row","justify-content-between"],[1,"text-bg-warning","rounded"],[1,"dart-throw-indicator"],["mat-raised-button","","mat-dialog-close","","color","accent"],["mat-mini-fab","",1,"no-pointer","sum-circle"],["mat-mini-fab","","color","warn",1,"no-pointer","hit-circle"]],template:function(t,r){t&1&&(u(0,"div",0)(1,"h1",1),g(2),h(),u(3,"mat-dialog-content")(4,"mat-card",2)(5,"mat-card-title",3)(6,"b",4),g(7),h(),g(8),h(),Gr(9,T0,13,4,"div",5,pa),h()(),u(11,"mat-dialog-actions")(12,"button",6),g(13,"Close"),h()()()),t&2&&(p(2),ie("Match-History - ",r.historyData.player.name),p(5),ae(r.historyData.player.remainingPoints),p(),ie(" \u2300 ",r.historyData.player.average," "),p(),$r(r.historyData.player.history))},dependencies:[Cn,vn,bn,wn,yn,Se,Ze,dn,ke,ri,Hs,tf],styles:[".minWith15vw[_ngcontent-%COMP%]{min-width:30vw}.dart-throw-indicator[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:6px;align-items:center;justify-content:center;margin:4px 0}.dart-throw-indicator[_ngcontent-%COMP%]   .sum-circle[_ngcontent-%COMP%]{background-color:#4caf50!important;color:#fff!important;transform:scale(.95);font-weight:700}.dart-throw-indicator[_ngcontent-%COMP%]   .hit-circle[_ngcontent-%COMP%]{background-color:#f44336!important;color:#fff!important;transform:scale(.75);margin:0}"]})}}return n})();var Us=(()=>{class n{constructor(){this.isSoundOn=new Oe(!0)}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var Dn=(()=>{class n{constructor(e){this.explosionElement=null,this.tripleTwentyCounter=0,this.tripleCounter=0,this.missCounter=0,this.soundToggle=l(Us),this.pfeilImage=null,this.renderer=e.createRenderer(null,null),this.preloadAssets()}preloadAssets(){this.pfeilImage=new Image,this.pfeilImage.src="assets/image/pfeil.svg"}showExplosion(e,t="red",r,o){this.removeExplosion();let s=this.renderer.createElement("div");o?(this.renderer.addClass(s,"explosion-container"),this.renderer.addClass(s,"winner-animated-position")):this.renderer.addClass(s,"explosion-container");let c=this.renderer.createElement("div");this.renderer.addClass(c,"explosion"),t!=="default"&&this.renderer.addClass(c,`explosion-${t}`);let d=this.renderer.createElement("div");this.renderer.addClass(d,"explosion-text"),this.renderer.setProperty(d,"textContent",e);for(let m=0;m<40;m++){let f=this.renderer.createElement("div");this.renderer.addClass(f,"explosion-particle"),this.renderer.appendChild(c,f)}for(let m=0;m<20;m++){let f=this.renderer.createElement("div");this.renderer.addClass(f,"explosion-trail"),this.renderer.appendChild(c,f)}this.renderer.appendChild(c,d),this.renderer.appendChild(s,c),this.renderer.appendChild(document.body,s),this.playAnimationSound(r),this.explosionElement=s,setTimeout(()=>{this.removeExplosion()},1500)}showTrajectory(e,t){let o=e.getBoundingClientRect(),a=t.getBoundingClientRect(),s=o.left+o.width/2,c=o.top+o.height/2,d=a.left+a.width/2,m=a.top+a.height/2,f=this.renderer.createElement("div");this.renderer.addClass(f,"trajectory-container"),this.renderer.appendChild(document.body,f);let S=3;for(let H=0;H<S;H++)setTimeout(()=>{this.createMovingParticle(f,s,c,d,m,1e3)},H*300);setTimeout(()=>{document.body.contains(f)&&this.renderer.removeChild(document.body,f)},1e3+S*300+500)}createMovingParticle(e,t,r,o,a,s){let c=this.renderer.createElement("div");this.renderer.addClass(c,"trajectory-particle");let d=16,m=6,f=t-d,S=r-m,H=o-d,Y=a-m,Q=(f+H)/2,R=Math.min(S,Y)-150;this.renderer.setStyle(c,"opacity","0"),this.renderer.appendChild(e,c);let oe=performance.now(),ye=Pe=>{let Ae=Pe-oe,ge=Math.min(Ae/s,1),Et=(1-ge)*(1-ge)*f+2*(1-ge)*ge*Q+ge*ge*H,_t=(1-ge)*(1-ge)*S+2*(1-ge)*ge*R+ge*ge*Y,Dl=2*(1-ge)*(Q-f)+2*ge*(H-Q),a_=2*(1-ge)*(R-S)+2*ge*(Y-R),s_=Math.atan2(a_,Dl)*(180/Math.PI);this.renderer.setStyle(c,"transform",`translate3d(${Et}px, ${_t}px, 0) rotate(${s_}deg)`),this.renderer.setStyle(c,"opacity",ge<.1?ge*10:(1-ge)*2),Math.random()>.7&&this.createTrailParticle(e,Et,_t),ge<1?requestAnimationFrame(ye):e.contains(c)&&this.renderer.removeChild(e,c)};requestAnimationFrame(ye)}createTrailParticle(e,t,r){let o=this.renderer.createElement("div");this.renderer.addClass(o,"trajectory-trail"),this.renderer.setStyle(o,"left",`${t}px`),this.renderer.setStyle(o,"top",`${r}px`),this.renderer.setStyle(o,"animation","trailFade 0.5s ease-out forwards"),this.renderer.appendChild(e,o),setTimeout(()=>{e.contains(o)&&this.renderer.removeChild(e,o)},500)}removeExplosion(){this.explosionElement&&document.body.contains(this.explosionElement)&&(this.renderer.removeChild(document.body,this.explosionElement),this.explosionElement=null)}playAnimationSound(e){try{if(!this.soundToggle.isSoundOn.getValue())return;let r=new Audio;r.src=e,r.volume=.5,r.play().catch(o=>{console.log("Audio konnte nicht abgespielt werden:",o)})}catch(t){console.log("Fehler beim Abspielen des Sounds:",t)}}static{this.\u0275fac=function(t){return new(t||n)(E(je))}}static{this.\u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var cf=(()=>{class n{constructor(){this.history=[],this.gameState=j(null)}initGame(e,t,r){let o={gameType:e,players:t,currentPlayerIndex:0,roundCount:1,remainingThrows:3,accumulatedPoints:0,randomHitTarget:r??null};this.history=[],this.saveSnapshot(o)}saveSnapshot(e){let t=JSON.stringify(e,(o,a)=>a instanceof Map?{_type:"Map",value:Array.from(a.entries())}:a),r={game:JSON.parse(t,(o,a)=>typeof a=="object"&&a!==null&&a._type==="Map"?new Map(a.value):a),timestamp:Date.now()};this.history.push(r),this.gameState.set(r.game)}undo(){if(this.history.length>1){this.history.pop();let e=this.history[this.history.length-1],t=JSON.parse(JSON.stringify(e.game,(r,o)=>o instanceof Map?{_type:"Map",value:Array.from(o.entries())}:o),(r,o)=>typeof o=="object"&&o!==null&&o._type==="Map"?new Map(o.value):o);return this.gameState.set(t),t}return null}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function df(){return()=>{}}var Sn={rippleRadius:10,rippleColor:"orange"};function uf(n){return n.reduce((i,e)=>i+" "+e,"")}var Ed=[...Array.from({length:20},(n,i)=>({value:i+1,multiplier:1})),...Array.from({length:20},(n,i)=>({value:i+1,multiplier:2})),...Array.from({length:20},(n,i)=>({value:i+1,multiplier:3})),{value:25,multiplier:1},{value:25,multiplier:2}];function hf(n){let i;do{let e=Math.floor(Math.random()*Ed.length);i=Ed[e]}while(n&&Ed.length>1&&i.value===n.value&&i.multiplier===n.multiplier);return v({},i)}function mf(n){return n?n.value===25?n.multiplier===2?"Bullseye":"Bull":`${n.multiplier===3?"Triple":n.multiplier===2?"Double":"Single"} ${n.value}`:""}var pf=3,de=(()=>{class n{setLastClickedButton(e){this.lastClickedButton=e}constructor(e,t,r){this.playerService=e,this.snackbar=t,this.dialog=r,this.roundCountService=l(jt),this.gameStore=l(cf),this.currentGameMode="",this._remainingThrows=pf,this._accumulatedPoints=0,this._remainingPointsToDisplay=j(0),this._currentPlayer=new Oe(Qp),this._last3History=[],this._lastTurnSum=0,this._lastTurnHits=[],this._lastCricketHistory=new Map,this.animationService=l(Dn),this._history=[],this._randomHitTarget=j(null),this.aiTurnSubject=new y,this.aiTurn$=this.aiTurnSubject.asObservable(),this.last3HisSignal=j(this._last3History),this.lastClickedButton=null,this.isTooLong=Be(()=>this.last3HisSignal().length>2),this.isAITurn=j(!1),this.updateButtonStatesEffect=Ft(()=>{let o=this.isTooLong();this.updateButtonStates(o)}),this.trajectoryEffect=Ft(()=>{let o=this.last3HisSignal(),a=this.isAITurn();if(o.length>0&&(a&&this.lastClickedButton,this.lastClickedButton)){let s=Array.from(document.querySelectorAll(".dart-throw-indicator button")),c=o.length-1,d=s[c];if(d){let m=this.lastClickedButton;this.lastClickedButton=null,setTimeout(()=>{this.animationService.showTrajectory(m,d)},50)}}})}isUIBlocked(){return document.querySelectorAll(".mat-mdc-dialog-container").length>0}triggerAIIfActive(){let e=this._currentPlayer.value,t=this.isUIBlocked();if(e&&e.isAI&&this.hasThrowsRemaining()){if(t){console.warn("KI trigger postponed: UI blocked (dialog open) for ",e.name);return}setTimeout(()=>{this.aiTurnSubject.next()},500)}}updateButtonStates(e){let t=document.querySelector("app-dart-board")||document.querySelector("app-cricket-component");if(!t)return;let r=t.getElementsByTagName("button");for(let o of Array.from(r)){let a=o.innerText.trim().toUpperCase();a!=="OK"&&a!=="REVERT"&&(o.disabled=e)}}generateNewRandomHitTarget(){this._randomHitTarget.set(hf(this._randomHitTarget()))}init(e){this._currentPlayer.next(e),this._remainingPointsToDisplay.set(e.remainingPoints),this._lastCricketHistory=new Map(e.cricketMap),this._last3History=[],this.last3HisSignal.set([]),this.isAITurn.set(e.isAI??!1),this.reset(),this.currentGameMode===M.RandomHit?this.generateNewRandomHitTarget():this._randomHitTarget.set(null),this.gameStore.initGame(this.currentGameMode,this.playerService._players,this._randomHitTarget()),this.triggerAIIfActive()}getCurrentGameState(){return{gameType:this.currentGameMode,players:this.playerService._players,currentPlayerIndex:this.playerService._players.indexOf(this._currentPlayer.value),roundCount:this.roundCountService.roundCount,remainingThrows:this._remainingThrows,accumulatedPoints:this._accumulatedPoints,randomHitTarget:this._randomHitTarget()}}captureState(){this.gameStore.saveSnapshot(this.getCurrentGameState())}setCurrentGameMode(e){this.currentGameMode=e}switchPlayer(e,t){t&&this.roundCountService.incrementRoundCount(),this.animationService.tripleTwentyCounter=0,this.animationService.tripleCounter=0,this.animationService.missCounter=0,this.updateButtonStates(!0),this._lastTurnSum=this.getLast3HistorySum(),this._lastTurnHits=[...this._last3History],this.roundCountService.getRemainingRounds()===0?this.displayRoundCountNotification():this.snackbar.openFromComponent(sf,{duration:3300,panelClass:["app-shape-morph-snack","switch-player-panel"],horizontalPosition:"center",verticalPosition:"bottom",data:{nextPlayer:e}}).afterDismissed().subscribe(()=>{this._currentPlayer.next(e),this._last3History=[],this.last3HisSignal.set([]),this._lastCricketHistory=new Map(e.cricketMap),this._remainingPointsToDisplay.set(e.remainingPoints),this._history=e.history,this.reset(),this.currentGameMode===M.RandomHit&&this.generateNewRandomHitTarget(),this.captureState(),this.updateButtonStates(!1),this.triggerAIIfActive()})}displayRoundCountNotification(){this.handleVictoryByReachingRoundLimit()}handleVictoryByReachingRoundLimit(){let e=this.getPlayersWithHighestPoints(),t=this.playerService._players.find(r=>r.name===e[0]);t&&this._currentPlayer.next(t),this.dialog.open(ii,{data:{victoryByReachingRoundLimit:!0},disableClose:!0})}savePointsForStatistics(){let e={sum:0,hits:[]};e.sum=this._accumulatedPoints,e.hits.push(...this._last3History),this._currentPlayer.value.history.push(e)}reset(){this._remainingThrows=pf,this._accumulatedPoints=0,this._last3History=[],this.last3HisSignal.set([]),this._currentPlayer.value&&(this._currentPlayer.value.last3History=[],this.isAITurn.set(this._currentPlayer.value.isAI??!1))}scoreRandomHit(e,t,r=e){if(this.hasThrowsRemaining()){this.calcAverage();let o=this._currentPlayer.value;this.captureState(),this._remainingPointsToDisplay.update(a=>a+e),this._last3History.push(r),o.last3History=[...this._last3History],this.last3HisSignal.update(()=>[...this._last3History]),this.accumulatePoints(e),this.decrementRemainingThrows(),t&&this.hasThrowsRemaining()&&this.generateNewRandomHitTarget(),this._currentPlayer.next(o)}}scoreElimination(e){if(this.hasThrowsRemaining()){this.calcAverage();let t=this._currentPlayer.value;this.captureState(),this._remainingPointsToDisplay.update(r=>r+e),this._last3History.push(e),t.last3History=[...this._last3History],this.last3HisSignal.update(()=>[...this._last3History]),this.accumulatePoints(e),this.decrementRemainingThrows(),this._currentPlayer.next(t)}}scoreHighscore(e){if(this.hasThrowsRemaining()){this.calcAverage();let t=this._currentPlayer.value;this.captureState(),this._remainingPointsToDisplay.update(r=>r+e),this._last3History.push(e),t.last3History=[...this._last3History],this.last3HisSignal.update(()=>[...this._last3History]),this.accumulatePoints(e),this.decrementRemainingThrows(),this._currentPlayer.next(t)}}score501(e){if(this.hasThrowsRemaining()){this.calcAverage();let t=this._currentPlayer.value;this.captureState(),this._remainingPointsToDisplay.update(r=>r-e),this._last3History.push(e),t.last3History=[...this._last3History],this.last3HisSignal.update(()=>[...this._last3History]),this.accumulatePoints(e),this.decrementRemainingThrows(),this._currentPlayer.next(t)}}scoreCricket(e){if(this.hasThrowsRemaining()){this.calcAverage();let t=this._currentPlayer.value;this.captureState(),this.evaluateCricketPoints(e),this._last3History.push(e.value*e.multiplier),t.last3History=[...this._last3History],this.last3HisSignal.update(()=>[...this._last3History]),this._remainingPointsToDisplay.set(t.remainingPoints+this._accumulatedPoints),this.decrementRemainingThrows()}}hasThrowsRemaining(){return this._remainingThrows>0}accumulatePoints(e){this._accumulatedPoints+=e}accumulateCricketPoints(e){this.checkForClosedHit(e)&&(this._accumulatedPoints+=e.value*e.multiplier)}decrementRemainingThrows(){this._remainingThrows-=1,this.triggerAIIfActive()}hasNoThrowsRemaining(){return!this.hasThrowsRemaining()}hasReachedZeroPoints(){return this._currentPlayer.value.remainingPoints-this._accumulatedPoints==0}isOvershot(e){if(this.currentGameMode===M.Highscore||this.currentGameMode===M.RandomHit)return!1;if(this.currentGameMode===M.Elimination301)return this._currentPlayer.value.remainingPoints+this._accumulatedPoints+e>301;{let t=this._currentPlayer.value.remainingPoints-this._accumulatedPoints-e;return this.currentGameMode===M.DoubleOut501?t<0||t===1:t<0}}finalizeTurn(e,t=!0){let r=this._currentPlayer.value;r.lastScore=this._accumulatedPoints,r.last3History=this._last3History,this.last3HisSignal.update(o=>[...o=this._last3History]),e==="add"?r.remainingPoints+=this._accumulatedPoints:r.remainingPoints-=this._accumulatedPoints,this._remainingPointsToDisplay.set(r.remainingPoints),t&&this.savePointsForStatistics()}calcAverage(){if(this.currentGameMode!==M.Cricket){let e=[];this._currentPlayer.value.history.forEach(r=>{r.hits.forEach(o=>{e.push(o)})});let t=e.length;if(t>0){let r=e.reduce((o,a)=>+o+ +a);this._currentPlayer.value.average=Math.round(r/t*3)}}else this._currentPlayer.value.cricketMap.size>0&&(this._currentPlayer.value.average=Math.round(this._currentPlayer.value.remainingPoints/this._currentPlayer.value.cricketMap.size))}isDoubleOut(e){return e/2==1}evaluateCricketPoints(e){let t=[15,16,17,18,19,20,25],r=this._currentPlayer.value.cricketMap,o=e.value;if(o>0&&t.includes(o)){let a=e.multiplier;if(r.has(o)){let c=r.get(o)+a;if(c<=3)r.set(o,c);else{r.set(o,3);let d=c-3;this.accumulateCricketPoints({value:o,multiplier:d})}}else if(a<=3)r.set(o,a);else{r.set(o,3);let s=a-3;this.accumulateCricketPoints({value:o,multiplier:s})}}this.sortMap(),this._currentPlayer.value.throws?.push(e)}sortMap(){this._currentPlayer.value.cricketMap=new Map([...this._currentPlayer.value.cricketMap].sort())}checkForClosedHit(e){return this.playerService._players.length<2?!0:this.playerService._players.filter(t=>t.id!==this._currentPlayer.value.id).some(t=>(t.cricketMap.get(e.value)||0)<3)}isCricketBullClosed(){return this.currentGameMode!==M.Cricket?!1:this.playerService._players.every(e=>(e.cricketMap.get(25)||0)>=3)}isCricketNumberClosed(e){return this.currentGameMode!==M.Cricket?!1:this.playerService._players.every(t=>(t.cricketMap.get(e)||0)>=3)}showHistory(e){let t={player:this.playerService.getPlayer(e??this._currentPlayer.value)};t.player.history.length>0&&this.dialog.open(lf,{data:t})}undoLastPlayerActions(){let e=this.gameStore.undo();e&&this.applyState(e)}applyState(e){this.playerService._players=e.players;let t=this.playerService._players[e.currentPlayerIndex];this._currentPlayer.next(t),this.roundCountService.roundCount=e.roundCount,this._remainingThrows=e.remainingThrows,this._accumulatedPoints=e.accumulatedPoints,this._randomHitTarget.set(e.randomHitTarget??null),this.isAITurn.set((t.isAI??!1)&&e.remainingThrows>0),this.currentGameMode===M.Highscore||this.currentGameMode===M.Elimination301||this.currentGameMode===M.Cricket||this.currentGameMode===M.RandomHit?this._remainingPointsToDisplay.set(t.remainingPoints+e.accumulatedPoints):this._remainingPointsToDisplay.set(t.remainingPoints-e.accumulatedPoints),this._history=t.history,this._last3History=t.last3History||[],this.last3HisSignal.set([...this._last3History]),this._lastCricketHistory=new Map(t.cricketMap)}getLast3HistorySum(){return this._last3History.reduce((e,t)=>e+t,0)}getPlayersWithHighestPoints(){let e=this.playerService._players;if(e.length===0)return[];let t=Math.max(...e.map(r=>r.remainingPoints));return e.filter(r=>r.remainingPoints===t).map(r=>r.name)}hasReachedTargetPoints(e){return this._currentPlayer.value.remainingPoints+this._accumulatedPoints===e}static{this.\u0275fac=function(t){return new(t||n)(E(Le),E(un),E(ft))}}static{this.\u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var ff=(()=>{class n{constructor(){this.playerService=l(Le)}addWinToPlayer(e){if(localStorage.getItem("playerNames")){let t=JSON.parse(localStorage.getItem("playerNames")),r=t.find(o=>o.name===e);r&&(r.wins++,localStorage.setItem("playerNames",JSON.stringify(t)))}}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function k0(n,i){if(n&1&&(u(0,"p"),g(1),h()),n&2){let e=k();p(),ie("You have reached the limit of ",e.roundCountService.MAX_ROUND_COUNT," rounds.")}}var ii=(()=>{class n{constructor(){this.currentPlayerService=l(de),this.data=l(jo),this.explosionAnimationService=l(Dn),this.dartService=l(xt),this.roundCountService=l(jt),this.winner="",this.victoryCountService=l(ff)}ngOnInit(){if(this.dartService._gameType===M.Highscore||this.dartService._gameType===M.Elimination301||this.dartService._gameType===M.Cricket||this.dartService._gameType===M.RandomHit?this.winner=uf(this.currentPlayerService.getPlayersWithHighestPoints()):this.winner=this.currentPlayerService._currentPlayer.value.name,typeof this.winner=="string"){let e=this.winner.replace('"',"").trim();this.victoryCountService.addWinToPlayer(e)}this.explosionAnimationService.showExplosion("WINNER: "+this.winner,"red","assets/sounds/fanfare-trumpets.mp3",!0)}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=w({type:n,selectors:[["app-victory-dialog"]],decls:11,vars:2,consts:[["mat-dialog-title",""],[1,"d-flex","flex-column"],["mat-raised-button","","color","warn","mat-dialog-close","","routerLink","/"]],template:function(t,r){t&1&&(u(0,"h1",0),g(1,"Congratulations: "),q(2,"br"),g(3),h(),u(4,"mat-dialog-content"),G(5,k0,2,1,"p"),u(6,"div",1),q(7,"app-mini-player-overview"),h()(),u(8,"mat-dialog-actions")(9,"button",2),g(10,"main menu"),h()()),t&2&&(p(3),ae(r.winner),p(2),$(r.data!=null&&r.data.victoryByReachingRoundLimit?5:-1))},dependencies:[Fi,Sr,Se,Ze,Cn,vn,bn,wn,yn,Rr],encapsulation:2})}}return n})();var zt=(()=>{class n{static createPlayer(e,t){return{id:t,name:typeof e=="string"?e:e.name,isAI:typeof e=="string"?!1:e.isAI,difficulty:typeof e=="string"?void 0:e.difficulty,remainingPoints:0,lastScore:0,history:[],cricketMap:new Map,average:0,last3History:[],throws:[]}}constructor(e,t,r,o){this.playerService=e,this.currentPlayerService=t,this.dialog=r,this.roundCountService=o,this.playerNames=[],this._gameType="",this._hideAll=!1,this.lastPlayerId=-1}setGameType(e){this._gameType=e,this.currentPlayerService.setCurrentGameMode(e)}initPlayers(e){this.roundCountService.reset(),this.playerService.setupCricketPlayers(e),this._hideAll=!1,this.lastPlayerId=this.playerService._players[this.playerService._players.length-1].id,this.currentPlayerService.init(this.playerService.getFirstPlayer())}scoreCricketWithMultiplier(e){this.currentPlayerService.scoreCricket(e),this.cricketWinCheck()?(this.currentPlayerService.finalizeTurn("add",this.currentPlayerService._remainingThrows===0),this.handleVictory()):this.currentPlayerService.hasNoThrowsRemaining()&&(this.currentPlayerService.finalizeTurn("add",this.currentPlayerService._remainingThrows===0),this.roundCountService.getRemainingRounds()===0?this.handleVictory():this.switchPlayer()),this.currentPlayerService.sortMap()}handleVictory(){this._hideAll=!0,this.roundCountService.getRemainingRounds()===0?this.handleVictoryByReachingRoundLimit():this.dialog.open(ii,{disableClose:!0})}handleVictoryByReachingRoundLimit(){let e=this.getPlayersWithHighestPoints(),t=this.playerService._players.find(r=>r.name===e[0]);t&&this.currentPlayerService._currentPlayer.next(t),this.dialog.open(ii,{data:{victoryByReachingRoundLimit:!0},disableClose:!0})}getPlayersWithHighestPoints(){let e=this.playerService._players;if(e.length===0)return[];let t=-1;e.forEach(o=>{let a=this.getEffectivePoints(o);a>t&&(t=a)});let r=e.filter(o=>this.getEffectivePoints(o)===t);if(r.length>1){let o=-1;return r.forEach(s=>{let c=this.countClosedFields(s);c>o&&(o=c)}),r.filter(s=>this.countClosedFields(s)===o).map(s=>s.name)}return r.map(o=>o.name)}countClosedFields(e){return[15,16,17,18,19,20,25].filter(r=>(e.cricketMap.get(r)||0)>=3).length}switchPlayer(){this.currentPlayerService.switchPlayer(this.playerService.getNextPlayer(this.currentPlayerService._currentPlayer.value),this.isNewRound()),this.setCurrentPlayerAsFristofList()}isNewRound(){return this.currentPlayerService._currentPlayer.value.id==this.lastPlayerId}setCurrentPlayerAsFristofList(){let e=this.playerService._players.shift();this.playerService._players.push(e)}cricketWinCheck(){if(this.playerHasAllClosed()){let e=this.currentPlayerService._currentPlayer.value.remainingPoints+this.currentPlayerService._accumulatedPoints,t=this.getPlayerWithHighestScoreIncludingAccumulatedPoints();if(e>=t)return!0}return!!(this.roundCountService.getRemainingRounds()===0&&this.currentPlayerService.hasNoThrowsRemaining())}getPlayerWithHighestScoreIncludingAccumulatedPoints(){let e=this.playerService._players,t=-1;for(let r=0;r<e.length;r++){let o=this.getEffectivePoints(e[r]);o>t&&(t=o)}return t}getEffectivePoints(e){return e.id===this.currentPlayerService._currentPlayer.value.id?e.remainingPoints+this.currentPlayerService._accumulatedPoints:e.remainingPoints}playerHasAllClosed(){let e=[15,16,17,18,19,20,25],t=this.currentPlayerService._currentPlayer.value.cricketMap;return e.every(r=>(t.get(r)||0)>=3)}static{this.\u0275fac=function(t){return new(t||n)(E(Le),E(de),E(ft),E(jt))}}static{this.\u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function P0(n,i){n&1&&(u(0,"p"),g(1," Wer zu erst die Endpunktzahl erreicht gewinnt, sonst derjenige der am Ende der Rundenazahl die meisten Punkte hat. Bei exakt der gleichen Punktzahl wird auf 0 zur\xFCckgesetzt."),h())}function O0(n,i){n&1&&(u(0,"p"),g(1," Wer am Ende der Rundenazahl die meisten Punkte hat gewinnt."),h())}function F0(n,i){n&1&&(u(0,"p"),g(1," Triff das vorgegebene zuf\xE4llige Feld (1-20 Single/Double/Triple, Bull oder Bullseye), um 1 Punkt zu erzielen. Wer am Ende der Rundenanzahl die meisten Punkte hat, gewinnt."),h())}function N0(n,i){n&1&&(u(0,"p"),g(1," Wer zu erst Null hat gewinnt, sonst derjenige der am Ende der Rundenazahl die wenigsten Punkte hat."),h())}var gf=(()=>{class n{constructor(){this.GameType=M,this.currentplayerService=l(de)}openTranslation(e){window.open(`https://translate.google.com/?hl=de&sl=de&tl=en&text=${e}&op=translate`)}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=w({type:n,selectors:[["app-dart-info-dialog"]],decls:13,vars:5,consts:[["content",""],["mat-dialog-title",""],[1,"justify-content-end"],["mat-button","",3,"click"],["mat-button","","mat-dialog-close",""]],template:function(t,r){if(t&1){let o=Re();u(0,"h1",1),g(1),h(),u(2,"mat-dialog-content",null,0),G(4,P0,2,0,"p"),G(5,O0,2,0,"p"),G(6,F0,2,0,"p"),G(7,N0,2,0,"p"),h(),u(8,"mat-dialog-actions",2)(9,"button",3),x("click",function(){we(o);let s=it(3);return Ce(r.openTranslation(s.innerText))}),g(10," translate "),h(),u(11,"button",4),g(12,"close"),h()()}t&2&&(p(),ie("How to win ",r.currentplayerService.currentGameMode),p(3),$(r.currentplayerService.currentGameMode===r.GameType.Elimination301?4:-1),p(),$(r.currentplayerService.currentGameMode===r.GameType.Highscore?5:-1),p(),$(r.currentplayerService.currentGameMode===r.GameType.RandomHit?6:-1),p(),$(r.currentplayerService.currentGameMode===r.GameType.Simple501||r.currentplayerService.currentGameMode===r.GameType.DoubleOut501?7:-1))},dependencies:[Fi,Se,Ze,Cn,vn,bn,wn,yn],encapsulation:2})}}return n})();var Tr=(()=>{class n{constructor(){this.wakeLock=null,this.isFullScreen=new Oe(!1),document.addEventListener("fullscreenchange",()=>{document.fullscreenElement?this.isFullScreen.next(!0):this.isFullScreen.next(!1)})}toggleTabFullScreenModeGame(){document.documentElement.requestFullscreen&&!document.fullscreenElement?document.documentElement.requestFullscreen().then(()=>{this.isFullScreen.next(!0),this.initDisplayAlwaysOnMode().then(()=>{console.log("full screen and display always on mode requested")})}).catch(e=>{console.warn("Fullscreen error: ",e)}):console.warn("Fullscreen API is not supported on this browser.")}toggleTabFullScreenModeMenue(){document.documentElement.requestFullscreen&&!document.fullscreenElement?document.documentElement.requestFullscreen().then(()=>{this.isFullScreen.next(!0),this.initDisplayAlwaysOnMode().then(()=>{console.log("full screen and display always on mode requested")})}):document.exitFullscreen&&document.fullscreenElement?document.exitFullscreen():console.warn("Fullscreen API is not supported or no element is in fullscreen.")}releaseDisplayAlwaysOnMode(){this.wakeLock&&this.wakeLock.release().then(()=>{this.wakeLock=null}).catch(e=>{console.error(`Error releasing wake lock: ${e.message}`)})}initDisplayAlwaysOnMode(){return _e(this,null,function*(){if(!("wakeLock"in navigator)){console.log("Wake Lock API not supported.");return}try{this.wakeLock=yield navigator.wakeLock.request("screen")}catch(e){console.log(`${e.name}, ${e.message}`)}})}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var Df=(()=>{class n{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,t){this._renderer=e,this._elementRef=t}setProperty(e,t){this._renderer.setProperty(this._elementRef.nativeElement,e,t)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(t){return new(t||n)(U(me),U(P))};static \u0275dir=I({type:n})}return n})(),L0=(()=>{class n extends Df{static \u0275fac=(()=>{let e;return function(r){return(e||(e=mt(n)))(r||n)}})();static \u0275dir=I({type:n,features:[fe]})}return n})(),Li=new b("");var B0={provide:Li,useExisting:It(()=>el),multi:!0};function V0(){let n=Nt()?Nt().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var j0=new b(""),el=(()=>{class n extends Df{_compositionMode;_composing=!1;constructor(e,t,r){super(e,t),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!V0())}writeValue(e){let t=e??"";this.setProperty("value",t)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(t){return new(t||n)(U(me),U(P),U(j0,8))};static \u0275dir=I({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,r){t&1&&x("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[Te([B0]),fe]})}return n})();function kd(n){return n==null||Ad(n)===0}function Ad(n){return n==null?null:Array.isArray(n)||typeof n=="string"?n.length:n instanceof Set?n.size:null}var ai=new b(""),Nr=new b(""),z0=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Pr=class{static min(i){return H0(i)}static max(i){return U0(i)}static required(i){return G0(i)}static requiredTrue(i){return $0(i)}static email(i){return W0(i)}static minLength(i){return q0(i)}static maxLength(i){return Y0(i)}static pattern(i){return X0(i)}static nullValidator(i){return Sf()}static compose(i){return Tf(i)}static composeAsync(i){return kf(i)}};function H0(n){return i=>{if(i.value==null||n==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e<n?{min:{min:n,actual:i.value}}:null}}function U0(n){return i=>{if(i.value==null||n==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e>n?{max:{max:n,actual:i.value}}:null}}function G0(n){return kd(n.value)?{required:!0}:null}function $0(n){return n.value===!0?null:{required:!0}}function W0(n){return kd(n.value)||z0.test(n.value)?null:{email:!0}}function q0(n){return i=>{let e=i.value?.length??Ad(i.value);return e===null||e===0?null:e<n?{minlength:{requiredLength:n,actualLength:e}}:null}}function Y0(n){return i=>{let e=i.value?.length??Ad(i.value);return e!==null&&e>n?{maxlength:{requiredLength:n,actualLength:e}}:null}}function X0(n){if(!n)return Sf;let i,e;return typeof n=="string"?(e="",n.charAt(0)!=="^"&&(e+="^"),e+=n,n.charAt(n.length-1)!=="$"&&(e+="$"),i=new RegExp(e)):(e=n.toString(),i=n),t=>{if(kd(t.value))return null;let r=t.value;return i.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function Sf(n){return null}function xf(n){return n!=null}function Mf(n){return Zi(n)?st(n):n}function Ef(n){let i={};return n.forEach(e=>{i=e!=null?v(v({},i),e):i}),Object.keys(i).length===0?null:i}function If(n,i){return i.map(e=>e(n))}function Z0(n){return!n.validate}function Rf(n){return n.map(i=>Z0(i)?i:e=>i.validate(e))}function Tf(n){if(!n)return null;let i=n.filter(xf);return i.length==0?null:function(e){return Ef(If(e,i))}}function Pd(n){return n!=null?Tf(Rf(n)):null}function kf(n){if(!n)return null;let i=n.filter(xf);return i.length==0?null:function(e){let t=If(e,i).map(Mf);return sa(t).pipe(X(Ef))}}function Od(n){return n!=null?kf(Rf(n)):null}function _f(n,i){return n===null?[i]:Array.isArray(n)?[...n,i]:[n,i]}function Af(n){return n._rawValidators}function Pf(n){return n._rawAsyncValidators}function Id(n){return n?Array.isArray(n)?n:[n]:[]}function $s(n,i){return Array.isArray(n)?n.includes(i):n===i}function vf(n,i){let e=Id(i);return Id(n).forEach(r=>{$s(e,r)||e.push(r)}),e}function bf(n,i){return Id(i).filter(e=>!$s(n,e))}var Ws=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=Pd(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=Od(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control?.reset(i)}hasError(i,e){return this.control?this.control.hasError(i,e):!1}getError(i,e){return this.control?this.control.getError(i,e):null}},Mt=class extends Ws{name;get formDirective(){return null}get path(){return null}},Jt=class extends Ws{_parent=null;name=null;valueAccessor=null},qs=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var tl=(()=>{class n extends qs{constructor(e){super(e)}static \u0275fac=function(t){return new(t||n)(U(Jt,2))};static \u0275dir=I({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,r){t&2&&T("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[fe]})}return n})(),Of=(()=>{class n extends qs{constructor(e){super(e)}static \u0275fac=function(t){return new(t||n)(U(Mt,10))};static \u0275dir=I({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(t,r){t&2&&T("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[fe]})}return n})();var zo="VALID",Gs="INVALID",kr="PENDING",Ho="DISABLED",oi=class{},Ys=class extends oi{value;source;constructor(i,e){super(),this.value=i,this.source=e}},Go=class extends oi{pristine;source;constructor(i,e){super(),this.pristine=i,this.source=e}},$o=class extends oi{touched;source;constructor(i,e){super(),this.touched=i,this.source=e}},Ar=class extends oi{status;source;constructor(i,e){super(),this.status=i,this.source=e}},Xs=class extends oi{source;constructor(i){super(),this.source=i}},qo=class extends oi{source;constructor(i){super(),this.source=i}};function Fd(n){return(nl(n)?n.validators:n)||null}function K0(n){return Array.isArray(n)?Pd(n):n||null}function Nd(n,i){return(nl(i)?i.asyncValidators:n)||null}function Q0(n){return Array.isArray(n)?Od(n):n||null}function nl(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function Ff(n,i,e){let t=n.controls;if(!(i?Object.keys(t):t).length)throw new W(1e3,"");if(!t[e])throw new W(1001,"")}function Nf(n,i,e){n._forEachChild((t,r)=>{if(e[r]===void 0)throw new W(-1002,"")})}var Or=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,e){this._assignValidators(i),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return pe(this.statusReactive)}set status(i){pe(()=>this.statusReactive.set(i))}_status=Be(()=>this.statusReactive());statusReactive=j(void 0);get valid(){return this.status===zo}get invalid(){return this.status===Gs}get pending(){return this.status===kr}get disabled(){return this.status===Ho}get enabled(){return this.status!==Ho}errors;get pristine(){return pe(this.pristineReactive)}set pristine(i){pe(()=>this.pristineReactive.set(i))}_pristine=Be(()=>this.pristineReactive());pristineReactive=j(!0);get dirty(){return!this.pristine}get touched(){return pe(this.touchedReactive)}set touched(i){pe(()=>this.touchedReactive.set(i))}_touched=Be(()=>this.touchedReactive());touchedReactive=j(!1);get untouched(){return!this.touched}_events=new y;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(vf(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(vf(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(bf(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(bf(i,this._rawAsyncValidators))}hasValidator(i){return $s(this._rawValidators,i)}hasAsyncValidator(i){return $s(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let e=this.touched===!1;this.touched=!0;let t=i.sourceControl??this;i.onlySelf||this._parent?.markAsTouched(se(v({},i),{sourceControl:t})),e&&i.emitEvent!==!1&&this._events.next(new $o(!0,t))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(i))}markAsUntouched(i={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=i.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:t})}),i.onlySelf||this._parent?._updateTouched(i,t),e&&i.emitEvent!==!1&&this._events.next(new $o(!1,t))}markAsDirty(i={}){let e=this.pristine===!0;this.pristine=!1;let t=i.sourceControl??this;i.onlySelf||this._parent?.markAsDirty(se(v({},i),{sourceControl:t})),e&&i.emitEvent!==!1&&this._events.next(new Go(!1,t))}markAsPristine(i={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=i.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),i.onlySelf||this._parent?._updatePristine(i,t),e&&i.emitEvent!==!1&&this._events.next(new Go(!0,t))}markAsPending(i={}){this.status=kr;let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Ar(this.status,e)),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.markAsPending(se(v({},i),{sourceControl:e}))}disable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=Ho,this.errors=null,this._forEachChild(r=>{r.disable(se(v({},i),{onlySelf:!0}))}),this._updateValue();let t=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Ys(this.value,t)),this._events.next(new Ar(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(se(v({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=zo,this._forEachChild(t=>{t.enable(se(v({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(se(v({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(i,e){i.onlySelf||(this._parent?.updateValueAndValidity(i),i.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===zo||this.status===kr)&&this._runAsyncValidator(t,i.emitEvent)}let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Ys(this.value,e)),this._events.next(new Ar(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.updateValueAndValidity(se(v({},i),{sourceControl:e}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Ho:zo}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,e){if(this.asyncValidator){this.status=kr,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:i!==!1};let t=Mf(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,e={}){this.errors=i,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(i){let e=i;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((t,r)=>t&&t._find(r),this)}getError(i,e){let t=e?this.get(e):this;return t?.errors?t.errors[i]:null}hasError(i,e){return!!this.getError(i,e)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,e,t){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||t)&&this._events.next(new Ar(this.status,e)),this._parent&&this._parent._updateControlsErrors(i,e,t)}_initObservables(){this.valueChanges=new N,this.statusChanges=new N}_calculateStatus(){return this._allControlsDisabled()?Ho:this.errors?Gs:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(kr)?kr:this._anyControlsHaveStatus(Gs)?Gs:zo}_anyControlsHaveStatus(i){return this._anyControls(e=>e.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,e){let t=!this._anyControlsDirty(),r=this.pristine!==t;this.pristine=t,i.onlySelf||this._parent?._updatePristine(i,e),r&&this._events.next(new Go(this.pristine,e))}_updateTouched(i={},e){this.touched=this._anyControlsTouched(),this._events.next(new $o(this.touched,e)),i.onlySelf||this._parent?._updateTouched(i,e)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){nl(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){return!i&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=K0(this._rawValidators)}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=Q0(this._rawAsyncValidators)}},Fr=class extends Or{constructor(i,e,t){super(Fd(e),Nd(t,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,e){return this.controls[i]?this.controls[i]:(this.controls[i]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(i,e,t={}){this.registerControl(i,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(i,e={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(i,e,t={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],e&&this.registerControl(i,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(i){return this.controls.hasOwnProperty(i)&&this.controls[i].enabled}setValue(i,e={}){Nf(this,!0,i),Object.keys(i).forEach(t=>{Ff(this,!0,t),this.controls[t].setValue(i[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(Object.keys(i).forEach(t=>{let r=this.controls[t];r&&r.patchValue(i[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i={},e={}){this._forEachChild((t,r)=>{t.reset(i?i[r]:null,se(v({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new qo(this))}getRawValue(){return this._reduceChildren({},(i,e,t)=>(i[t]=e.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(e,t)=>t._syncPendingControls()?!0:e);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(e=>{let t=this.controls[e];t&&i(t,e)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[e,t]of Object.entries(this.controls))if(this.contains(e)&&i(t))return!0;return!1}_reduceValue(){let i={};return this._reduceChildren(i,(e,t,r)=>((t.enabled||this.disabled)&&(e[r]=t.value),e))}_reduceChildren(i,e){let t=i;return this._forEachChild((r,o)=>{t=e(t,r,o)}),t}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return this.controls.hasOwnProperty(i)?this.controls[i]:null}};var Rd=class extends Fr{};var il=new b("",{factory:()=>Ld}),Ld="always";function Bd(n,i){return[...i.path,n]}function Zs(n,i,e=Ld){Vd(n,i),i.valueAccessor.writeValue(n.value),(n.disabled||e==="always")&&i.valueAccessor.setDisabledState?.(n.disabled),ew(n,i),nw(n,i),tw(n,i),J0(n,i)}function Ks(n,i,e=!0){let t=()=>{};i?.valueAccessor?.registerOnChange(t),i?.valueAccessor?.registerOnTouched(t),Js(n,i),n&&(i._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function Qs(n,i){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(i)})}function J0(n,i){if(i.valueAccessor.setDisabledState){let e=t=>{i.valueAccessor.setDisabledState(t)};n.registerOnDisabledChange(e),i._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}function Vd(n,i){let e=Af(n);i.validator!==null?n.setValidators(_f(e,i.validator)):typeof e=="function"&&n.setValidators([e]);let t=Pf(n);i.asyncValidator!==null?n.setAsyncValidators(_f(t,i.asyncValidator)):typeof t=="function"&&n.setAsyncValidators([t]);let r=()=>n.updateValueAndValidity();Qs(i._rawValidators,r),Qs(i._rawAsyncValidators,r)}function Js(n,i){let e=!1;if(n!==null){if(i.validator!==null){let r=Af(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==i.validator);o.length!==r.length&&(e=!0,n.setValidators(o))}}if(i.asyncValidator!==null){let r=Pf(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==i.asyncValidator);o.length!==r.length&&(e=!0,n.setAsyncValidators(o))}}}let t=()=>{};return Qs(i._rawValidators,t),Qs(i._rawAsyncValidators,t),e}function ew(n,i){i.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&Lf(n,i)})}function tw(n,i){i.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&Lf(n,i),n.updateOn!=="submit"&&n.markAsTouched()})}function Lf(n,i){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function nw(n,i){let e=(t,r)=>{i.valueAccessor.writeValue(t),r&&i.viewToModelUpdate(t)};n.registerOnChange(e),i._registerOnDestroy(()=>{n._unregisterOnChange(e)})}function Bf(n,i){n==null,Vd(n,i)}function iw(n,i){return Js(n,i)}function Vf(n,i){if(!n.hasOwnProperty("model"))return!1;let e=n.model;return e.isFirstChange()?!0:!Object.is(i,e.currentValue)}function rw(n){return Object.getPrototypeOf(n.constructor)===L0}function jf(n,i){n._syncPendingControls(),i.forEach(e=>{let t=e.control;t.updateOn==="submit"&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function zf(n,i){if(!i)return null;Array.isArray(i);let e,t,r;return i.forEach(o=>{o.constructor===el?e=o:rw(o)?t=o:r=o}),r||t||e||null}function ow(n,i){let e=n.indexOf(i);e>-1&&n.splice(e,1)}var aw={provide:Mt,useExisting:It(()=>Yo)},Uo=Promise.resolve(),Yo=(()=>{class n extends Mt{callSetDisabledState;get submitted(){return pe(this.submittedReactive)}_submitted=Be(()=>this.submittedReactive());submittedReactive=j(!1);_directives=new Set;form;ngSubmit=new N;options;constructor(e,t,r){super(),this.callSetDisabledState=r,this.form=new Fr({},Pd(e),Od(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Uo.then(()=>{let t=this._findContainer(e.path);e.control=t.registerControl(e.name,e.control),Zs(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Uo.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Uo.then(()=>{let t=this._findContainer(e.path),r=new Fr({});Bf(r,e),t.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Uo.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,t){Uo.then(()=>{this.form.get(e.path).setValue(t)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),jf(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Xs(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(t){return new(t||n)(U(ai,10),U(Nr,10),U(il,8))};static \u0275dir=I({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,r){t&1&&x("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Te([aw]),fe]})}return n})();function yf(n,i){let e=n.indexOf(i);e>-1&&n.splice(e,1)}function wf(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var Wo=class extends Or{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,e,t){super(Fd(e),Nd(t,e)),this._applyFormState(i),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),nl(e)&&(e.nonNullable||e.initialValueIsDefault)&&(wf(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,e={}){this.value=this._pendingValue=i,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(i,e={}){this.setValue(i,e)}reset(i=this.defaultValue,e={}){this._applyFormState(i),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new qo(this))}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){yf(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){yf(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){wf(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}},Hf=Wo,sw=n=>n instanceof Wo,lw=(()=>{class n extends Mt{_parent;ngOnInit(){this._checkParentType(),this.formDirective.addFormGroup(this)}ngOnDestroy(){this.formDirective?.removeFormGroup(this)}get control(){return this.formDirective.getFormGroup(this)}get path(){return Bd(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}static \u0275fac=(()=>{let e;return function(r){return(e||(e=mt(n)))(r||n)}})();static \u0275dir=I({type:n,standalone:!1,features:[fe]})}return n})();var Uf=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return n})();var Td=class extends Or{constructor(i,e,t){super(Fd(e),Nd(t,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(i){return this.controls[this._adjustIndex(i)]}push(i,e={}){Array.isArray(i)?i.forEach(t=>{this.controls.push(t),this._registerControl(t)}):(this.controls.push(i),this._registerControl(i)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(i,e,t={}){this.controls.splice(i,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent})}removeAt(i,e={}){let t=this._adjustIndex(i);t<0&&(t=0),this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(i,e,t={}){let r=this._adjustIndex(i);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),e&&(this.controls.splice(r,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(i,e={}){Nf(this,!1,i),i.forEach((t,r)=>{Ff(this,!1,r),this.at(r).setValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(i.forEach((t,r)=>{this.at(r)&&this.at(r).patchValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i=[],e={}){this._forEachChild((t,r)=>{t.reset(i[r],se(v({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new qo(this))}getRawValue(){return this.controls.map(i=>i.getRawValue())}clear(i={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:i.emitEvent}))}_adjustIndex(i){return i<0?i+this.length:i}_syncPendingControls(){let i=this.controls.reduce((e,t)=>t._syncPendingControls()?!0:e,!1);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){this.controls.forEach((e,t)=>{i(e,t)})}_updateValue(){this.value=this.controls.filter(i=>i.enabled||this.disabled).map(i=>i.value)}_anyControls(i){return this.controls.some(e=>e.enabled&&i(e))}_setUpControls(){this._forEachChild(i=>this._registerControl(i))}_allControlsDisabled(){for(let i of this.controls)if(i.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(i){i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)}_find(i){return this.at(i)??null}};var Gf=(()=>{class n extends Mt{callSetDisabledState;get submitted(){return pe(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=Be(()=>this._submittedReactive());_submittedReactive=j(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,t,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(t)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Js(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let t=this.form.get(e.path);return Zs(t,e,this.callSetDisabledState),t.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),t}getControl(e){return this.form.get(e.path)}removeControl(e){Ks(e.control||null,e,!1),ow(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,t){this.form.get(e.path).setValue(t)}onReset(){this.resetForm()}resetForm(e=void 0,t={}){this.form.reset(e,t),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,jf(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Xs(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let t=e.control,r=this.form.get(e.path);t!==r&&(Ks(t||null,e),sw(r)&&(Zs(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let t=this.form.get(e.path);Bf(t,e),t.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let t=this.form?.get(e.path);t&&iw(t,e)&&t.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Vd(this.form,this),this._oldForm&&Js(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(t){return new(t||n)(U(ai,10),U(Nr,10),U(il,8))};static \u0275dir=I({type:n,features:[fe,Fe]})}return n})();var jd=new b(""),cw={provide:Jt,useExisting:It(()=>zd)},zd=(()=>{class n extends Jt{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(e){}model;update=new N;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,t,r,o,a){super(),this._ngModelWarningConfig=o,this.callSetDisabledState=a,this._setValidators(e),this._setAsyncValidators(t),this.valueAccessor=zf(this,r)}ngOnChanges(e){if(this._isControlChanged(e)){let t=e.form.previousValue;t&&Ks(t,this,!1),Zs(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}Vf(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&Ks(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return e.hasOwnProperty("form")}static \u0275fac=function(t){return new(t||n)(U(ai,10),U(Nr,10),U(Li,10),U(jd,8),U(il,8))};static \u0275dir=I({type:n,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[Te([cw]),fe,Fe]})}return n})(),dw={provide:Mt,useExisting:It(()=>rl)},rl=(()=>{class n extends lw{name=null;constructor(e,t,r){super(),this._parent=e,this._setValidators(t),this._setAsyncValidators(r)}_checkParentType(){$f(this._parent)}static \u0275fac=function(t){return new(t||n)(U(Mt,13),U(ai,10),U(Nr,10))};static \u0275dir=I({type:n,selectors:[["","formGroupName",""]],inputs:{name:[0,"formGroupName","name"]},standalone:!1,features:[Te([dw]),fe]})}return n})(),uw={provide:Mt,useExisting:It(()=>ol)},ol=(()=>{class n extends Mt{_parent;name=null;constructor(e,t,r){super(),this._parent=e,this._setValidators(t),this._setAsyncValidators(r)}ngOnInit(){$f(this._parent),this.formDirective.addFormArray(this)}ngOnDestroy(){this.formDirective?.removeFormArray(this)}get control(){return this.formDirective.getFormArray(this)}get formDirective(){return this._parent?this._parent.formDirective:null}get path(){return Bd(this.name==null?this.name:this.name.toString(),this._parent)}static \u0275fac=function(t){return new(t||n)(U(Mt,13),U(ai,10),U(Nr,10))};static \u0275dir=I({type:n,selectors:[["","formArrayName",""]],inputs:{name:[0,"formArrayName","name"]},standalone:!1,features:[Te([uw]),fe]})}return n})();function $f(n){return!(n instanceof rl)&&!(n instanceof Gf)&&!(n instanceof ol)}var hw={provide:Jt,useExisting:It(()=>Hd)},Hd=(()=>{class n extends Jt{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new N;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,t,r,o,a){super(),this._ngModelWarningConfig=a,this._parent=e,this._setValidators(t),this._setAsyncValidators(r),this.valueAccessor=zf(this,o)}ngOnChanges(e){this._added||this._setUpControl(),Vf(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return Bd(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(t){return new(t||n)(U(Mt,13),U(ai,10),U(Nr,10),U(Li,10),U(jd,8))};static \u0275dir=I({type:n,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[Te([hw]),fe,Fe]})}return n})();var mw={provide:Mt,useExisting:It(()=>Bi)},Bi=(()=>{class n extends Gf{form=null;ngSubmit=new N;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=mt(n)))(r||n)}})();static \u0275dir=I({type:n,selectors:[["","formGroup",""]],hostBindings:function(t,r){t&1&&x("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Te([mw]),fe]})}return n})();var pw=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=O({})}return n})();function Cf(n){return!!n&&(n.asyncValidators!==void 0||n.validators!==void 0||n.updateOn!==void 0)}var Wf=(()=>{class n{useNonNullable=!1;get nonNullable(){let e=new n;return e.useNonNullable=!0,e}group(e,t=null){let r=this._reduceControls(e),o={};return Cf(t)?o=t:t!==null&&(o.validators=t.validator,o.asyncValidators=t.asyncValidator),new Fr(r,o)}record(e,t=null){let r=this._reduceControls(e);return new Rd(r,t)}control(e,t,r){let o={};return this.useNonNullable?(Cf(t)?o=t:(o.validators=t,o.asyncValidators=r),new Wo(e,se(v({},o),{nonNullable:!0}))):new Wo(e,t,r)}array(e,t,r){let o=e.map(a=>this._createControl(a));return new Td(o,t,r)}_reduceControls(e){let t={};return Object.keys(e).forEach(r=>{t[r]=this._createControl(e[r])}),t}_createControl(e){if(e instanceof Wo)return e;if(e instanceof Or)return e;if(Array.isArray(e)){let t=e[0],r=e.length>1?e[1]:null,o=e.length>2?e[2]:null;return this.control(t,r,o)}else return this.control(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var al=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:jd,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:il,useValue:e.callSetDisabledState??Ld}]}}static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=O({imports:[pw]})}return n})();var fw=["switch"],gw=["*"];function _w(n,i){n&1&&(u(0,"span",11),Ui(),u(1,"svg",13),q(2,"path",14),h(),u(3,"svg",15),q(4,"path",16),h()())}var vw=new b("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),sl=class{source;checked;constructor(i,e){this.source=i,this.checked=e}},Ud=(()=>{class n{_elementRef=l(P);_focusMonitor=l(wt);_changeDetectorRef=l(te);defaults=l(vw);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new sl(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=Me();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new N;toggleChange=new N;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){l(Ne).load(cn);let e=l(new rn("tabindex"),{optional:!0}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||"accent",this.id=this._uniqueId=l(ve).getId("mat-mdc-slide-toggle-"),this.hideIcon=t.hideIcon??!1,this.disabledInteractive=t.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new sl(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=w({type:n,selectors:[["mat-slide-toggle"]],viewQuery:function(t,r){if(t&1&&Ye(fw,5),t&2){let o;J(o=ee())&&(r._switchElement=o.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(t,r){t&2&&(Rt("id",r.id),Z("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),rt(r.color?"mat-"+r.color:""),T("mat-mdc-slide-toggle-focused",r._focused)("mat-mdc-slide-toggle-checked",r.checked)("_mat-animation-noopable",r._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",A],color:"color",disabled:[2,"disabled","disabled",A],disableRipple:[2,"disableRipple","disableRipple",A],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Tt(e)],checked:[2,"checked","checked",A],hideIcon:[2,"hideIcon","hideIcon",A],disabledInteractive:[2,"disabledInteractive","disabledInteractive",A]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[Te([{provide:Li,useExisting:It(()=>n),multi:!0},{provide:ai,useExisting:n,multi:!0}]),Fe],ngContentSelectors:gw,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(t,r){if(t&1&&(De(),u(0,"div",1)(1,"button",2,0),x("click",function(){return r._handleClick()}),q(3,"div",3)(4,"span",4),u(5,"span",5)(6,"span",6)(7,"span",7),q(8,"span",8),h(),u(9,"span",9),q(10,"span",10),h(),G(11,_w,5,0,"span",11),h()()(),u(12,"label",12),x("click",function(a){return a.stopPropagation()}),K(13),h()()),t&2){let o=it(2);D("labelPosition",r.labelPosition),p(),T("mdc-switch--selected",r.checked)("mdc-switch--unselected",!r.checked)("mdc-switch--checked",r.checked)("mdc-switch--disabled",r.disabled)("mat-mdc-slide-toggle-disabled-interactive",r.disabledInteractive),D("tabIndex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex)("disabled",r.disabled&&!r.disabledInteractive),Z("id",r.buttonId)("name",r.name)("aria-label",r.ariaLabel)("aria-labelledby",r._getAriaLabelledBy())("aria-describedby",r.ariaDescribedby)("aria-required",r.required||null)("aria-checked",r.checked)("aria-disabled",r.disabled&&r.disabledInteractive?"true":null),p(9),D("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)("matRippleCentered",!0),p(),$(r.hideIcon?-1:11),p(),D("for",r.buttonId),Z("id",r._labelId)}},dependencies:[Je,Hp],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--mat-slide-toggle-track-height, 32px);
  border-radius: var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--mat-slide-toggle-handle-width);
  height: var(--mat-slide-toggle-handle-height);
  border-radius: var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--mat-slide-toggle-selected-handle-size, 24px);
  height: var(--mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--selected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary));
}
.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface));
}
.mdc-switch--unselected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline));
}
.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--mat-slide-toggle-state-layer-size, 40px);
  height: var(--mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--selected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--mat-slide-toggle-selected-icon-size, 16px);
  height: var(--mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--mat-slide-toggle-disabled-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2,changeDetection:0})}return n})(),Yf=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=O({imports:[Ud,re]})}return n})();var yw=["tooltip"],ww=20;var Cw=new b("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let n=l(z);return()=>kn(n,{scrollThrottle:ww})}}),Dw=new b("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var Xf="tooltip-panel",Sw={passive:!0},xw=8,Mw=8,Ew=24,Iw=200,Gd=(()=>{class n{_elementRef=l(P);_ngZone=l(B);_platform=l(ce);_ariaDescriber=l(yc);_focusMonitor=l(wt);_dir=l(Ue);_injector=l(z);_viewContainerRef=l(lt);_mediaMatcher=l(tr);_document=l(F);_renderer=l(me);_animationsDisabled=Me();_defaultOptions=l(Dw,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=Zf;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=An(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=An(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=Lt(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=Lt(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new y;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=xw}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(le(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let r=this._createOverlay(t);this._detach(),this._portal=this._portal||new Yt(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=r.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(le(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let a=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&a._origin instanceof P)return this._overlayRef;this._detach()}let t=this._injector.get(ln).getAncestorScrollContainers(this._elementRef),r=`${this._cssClassPrefix}-${Xf}`,o=Ri(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation("global");return o.positionChanges.pipe(le(this._destroyed)).subscribe(a=>{this._updateCurrentPositionClass(a.connectionPair),this._tooltipInstance&&a.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=Kt(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,r]:r,scrollStrategy:this._injector.get(Cw)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(le(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(le(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(le(this._destroyed)).subscribe(a=>{a.preventDefault(),a.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(le(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,r=this._getOrigin(),o=this._getOverlayPosition();t.withPositions([this._addOffset(v(v({},r.main),o.main)),this._addOffset(v(v({},r.fallback),o.fallback))])}_addOffset(e){let t=Mw,r=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-t:e.originY==="bottom"?e.offsetY=t:e.originX==="start"?e.offsetX=r?-t:t:e.originX==="end"&&(e.offsetX=r?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",t=this.position,r;t=="above"||t=="below"?r={originX:"center",originY:t=="above"?"top":"bottom"}:t=="before"||t=="left"&&e||t=="right"&&!e?r={originX:"start",originY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(r={originX:"end",originY:"center"});let{x:o,y:a}=this._invertPosition(r.originX,r.originY);return{main:r,fallback:{originX:o,originY:a}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",t=this.position,r;t=="above"?r={overlayX:"center",overlayY:"bottom"}:t=="below"?r={overlayX:"center",overlayY:"top"}:t=="before"||t=="left"&&e||t=="right"&&!e?r={overlayX:"end",overlayY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(r={overlayX:"start",overlayY:"center"});let{x:o,y:a}=this._invertPosition(r.overlayX,r.overlayY);return{main:r,fallback:{overlayX:o,overlayY:a}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Ve(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position==="above"||this.position==="below"?t==="top"?t="bottom":t==="bottom"&&(t="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:r,originY:o}=e,a;if(t==="center"?this._dir&&this._dir.value==="rtl"?a=r==="end"?"left":"right":a=r==="start"?"left":"right":a=t==="bottom"&&o==="top"?"above":"below",a!==this._currentPosition){let s=this._overlayRef;if(s){let c=`${this._cssClassPrefix}-${Xf}-`;s.removePanelClass(c+this._currentPosition),s.addPanelClass(c+a)}this._currentPosition=a}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let t=e.targetTouches?.[0],r=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,r)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),r=this._elementRef.nativeElement;t!==r&&!r.contains(t)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,Sw))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let t=this._elementRef.nativeElement,r=t.style;(e==="on"||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA")&&(r.userSelect=r.msUserSelect=r.webkitUserSelect=r.MozUserSelect="none"),(e==="on"||!t.draggable)&&(r.webkitUserDrag="none"),r.touchAction="none",r.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||Ve({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!Xe(e):!0;static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(t,r){t&2&&T("mat-mdc-tooltip-disabled",r.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return n})(),Zf=(()=>{class n{_changeDetectorRef=l(te);_elementRef=l(P);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=Me();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new y;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>Ew&&e.width>=Iw}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,r=this._showAnimation,o=this._hideAnimation;if(t.classList.remove(e?o:r),t.classList.add(e?r:o),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let a=getComputedStyle(t);(a.getPropertyValue("animation-duration")==="0s"||a.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=w({type:n,selectors:[["mat-tooltip-component"]],viewQuery:function(t,r){if(t&1&&Ye(yw,7),t&2){let o;J(o=ee())&&(r._tooltip=o.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(t,r){t&1&&x("mouseleave",function(a){return r._handleMouseLeave(a)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(t,r){t&1&&($e(0,"div",1,0),_a("animationend",function(a){return r._handleAnimationEnd(a)}),$e(2,"div",2),g(3),Qe()()),t&2&&(rt(r.tooltipClass),T("mdc-tooltip--multiline",r._isMultiline),p(3),ae(r.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));
  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));
  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));
  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));
  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));
  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2,changeDetection:0})}return n})();var Kf=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=O({imports:[Ci,Vt,re,sn]})}return n})();var Tw=n=>({"font-size":n,color:"#3d6065"});function kw(n,i){if(n&1){let e=Re();u(0,"button",10)(1,"mat-icon"),g(2,"arrow_back"),h(),g(3," Main Menu "),h(),u(4,"button",4),x("click",function(){we(e);let r=k();return Ce(r.undoLastAction())}),u(5,"mat-icon"),g(6,"undo"),h(),g(7," r\xFCckg\xE4ngig "),h()}}function Aw(n,i){n&1&&(u(0,"mat-icon"),g(1,"close_fullscreen"),h())}function Pw(n,i){n&1&&(u(0,"mat-icon"),g(1,"fullscreen"),h())}function Ow(n,i){if(n&1){let e=Re();u(0,"span",11),g(1),h(),u(2,"button",12),x("click",function(){we(e);let r=k();return Ce(r.openGameInstructions())}),u(3,"span",13),g(4,"question_mark"),h()()}if(n&2){let e=k();p(),ae(e.getCurrentGameModeName()),p(),D("matRippleColor",e.customRipple.rippleColor)("matRippleUnbounded",!0)("matRippleRadius",e.customRipple.rippleRadius)}}function Fw(n,i){n&1&&(u(0,"mat-icon",7),g(1,"volume_up"),h()),n&2&&D("matTooltip","Spielsound ist aktiv")}var Qf=(()=>{class n{constructor(){this.installBtnHidden=!0,this.router=l(ot),this.pwa=l(is),this.appVersion=Yr.appVersion,this.soundToggleService=l(Us),this.cricketService=l(zt),this.dartService=l(xt),this.fullscreenService=l(Tr),this.currentPlayerService=l(de),this.customRipple=Sn,this.dialog=l(ft)}ngOnInit(){this.installBtnHidden=!0,this.pwa.canInstall$.subscribe(e=>{this.installBtnHidden=!e}),this.fullscreenService.initDisplayAlwaysOnMode().then(()=>{console.info("wake lock requested")}),this.checkWakelockOnNavigation()}ngOnDestroy(){this.fullscreenService.releaseDisplayAlwaysOnMode()}checkWakelockOnNavigation(){this.router.events.pipe(ue(e=>e instanceof St||e instanceof mn||e instanceof Dt||e instanceof Nn),X(()=>_e(this,null,function*(){console.error("navigate"),this.fullscreenService.initDisplayAlwaysOnMode().then(()=>{console.info("wake lock requested")})})))}openGameInstructions(){this.cricketService._gameType!==""?this.dialog.open(Kp):this.dialog.open(gf)}undoLastAction(){this.currentPlayerService.undoLastPlayerActions()}getCurrentGameModeName(){if(this.cricketService._gameType!=="")return"Cricket";let t=this.dartService._gameType;return t===M.Simple501?"501":t===M.DoubleOut501?"501 (DO)":t===M.Elimination301?"Elimination":t===M.Highscore?"Highscore":t===M.RandomHit?"Random Hit":""}setSoundMode(e){this.soundToggleService.isSoundOn.next(e)}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=w({type:n,selectors:[["app-app-toolbar"]],decls:26,vars:12,consts:[["menueItmes","matMenu"],["soundtoggle",""],[1,"d-flex","justify-content-between"],["mat-icon-button","","color","accent",1,"font-size-20",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"],["mat-menu-item",""],[3,"change","checked"],["color","accent",3,"matTooltip"],[1,"d-flex","flex-column"],[1,"d-flex","justify-content-end",3,"ngStyle"],["mat-menu-item","","routerLink",""],[1,"game-mode-display","text-accent","fw-bold","me-2"],["mat-mini-fab","","matRipple","",1,"ms-3","question-scale",3,"click","matRippleColor","matRippleUnbounded","matRippleRadius"],[1,"mt-2","material-symbols-outlined"]],template:function(t,r){if(t&1){let o=Re();u(0,"mat-toolbar",2)(1,"button",3)(2,"mat-icon"),g(3,"menu"),h()(),u(4,"mat-menu",null,0),G(6,kw,8,0),u(7,"button",4),x("click",function(){return r.fullscreenService.toggleTabFullScreenModeMenue()}),G(8,Aw,2,0,"mat-icon"),ba(9,"async"),Bu(10,Pw,2,0,"mat-icon"),g(11," Fullscreen "),h(),u(12,"p",5)(13,"mat-slide-toggle",6,1),x("change",function(){we(o);let s=it(14);return Ce(r.setSoundMode(s.checked))}),g(15,"sounds "),h()()(),u(16,"div"),G(17,Ow,5,4),G(18,Fw,2,1,"mat-icon",7),h(),u(19,"div",8)(20,"code"),g(21,"DartBoard "),h(),u(22,"div",9)(23,"mat-icon"),g(24,"linear_scale"),h(),g(25),h()()()}if(t&2){let o=it(5);p(),D("matMenuTriggerFor",o),p(5),$(r.dartService._gameType!==""||r.cricketService._gameType!==""?6:-1),p(2),$(ya(9,8,r.fullscreenService.isFullScreen)?8:10),p(5),D("checked",r.soundToggleService.isSoundOn.value),p(4),$(r.dartService._gameType!==""||r.cricketService._gameType!==""?17:-1),p(),$(r.soundToggleService.isSoundOn.value?18:-1),p(4),D("ngStyle",Uu(10,Tw,"50%")),p(3),ie(" v: ",r.appVersion," ")}},dependencies:[Tp,Rp,_n,gn,ql,Ap,Mr,Lo,kp,Se,dn,Pn,Sr,ct,Je,Yf,Ud,Kf,Gd,ke,Zr],styles:[".question-scale[_ngcontent-%COMP%]{transform:scale(.6)}"]})}}return n})();var Jf=(()=>{class n{constructor(){this.title="dart-board",this.pwa=l(is)}beforeUnloadHandler(e){navigator.userActivation.hasBeenActive&&(e.preventDefault(),e.returnValue=!0)}ngOnInit(){this.pwa.askToInstall()}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=w({type:n,selectors:[["app-root"]],hostBindings:function(t,r){t&1&&x("beforeunload",function(a){return r.beforeUnloadHandler(a)},nn)},decls:2,vars:0,template:function(t,r){t&1&&q(0,"app-app-toolbar")(1,"router-outlet")},dependencies:[Qf,Ao],encapsulation:2})}}return n})();var ll=(()=>{class n{constructor(){this.currentPlayerService=l(de),this.DARTBOARD_VALUES=[20,1,18,4,13,6,10,15,2,17,3,19,7,16,8,11,14,9,12,5]}getNextThrow(e,t,r,o){return t===M.Cricket?this.getCricketThrow(e,r,o):t===M.RandomHit?this.getRandomHitThrow(e,r):this.getPointsThrow(e,r,o,t)}getRandomHitThrow(e,t){let r=this.currentPlayerService._randomHitTarget(),o=20,a=1;return r&&(o=r.value,a=r.multiplier),this.calculateThrowWithSpread(o,a,e,t)}getPointsThrow(e,t,r,o){let a=t.remainingPoints,s=20,c=3;if(o===M.Highscore)s=20,c=3;else if(o===M.DoubleOut501||o===M.Simple501){a<=60&&(o===M.DoubleOut501?a%2===0&&a<=40?(s=a/2,c=2):a===50?(s=25,c=2):a>40&&a<=60?(s=a-40,c=1):a<40?(s=1,c=1):(s=20,c=1):a<=20?(s=a,c=1):a===25?(s=25,c=1):a===50?(s=25,c=2):(s=20,c=1));let d=s*c;o===M.DoubleOut501?a-d<2&&a-d!==0&&(s=1,c=1):a-d<0&&(s=1,c=1)}else if(o===M.Elimination301){let m=a,f=301-m,S=r.filter(Q=>Q.id!==t.id&&Q.remainingPoints>0),H=-1,Y=-1;for(let Q of S){let R=Q.remainingPoints-m;if(R>0&&R<=60){if(R<=20){H=R,Y=1;break}if(R%3===0&&R/3<=20){H=R/3,Y=3;break}if(R%2===0&&R/2<=20){H=R/2,Y=2;break}if(R===25){H=25,Y=1;break}if(R===50){H=25,Y=2;break}}}H!==-1&&(e===tt.Hard||e===tt.Medium&&Math.random()<.5)?(s=H,c=Y):f<=60?f<=20?(s=Math.max(1,f),c=1):f%3===0&&f/3<=20?(s=f/3,c=3):f%2===0&&f/2<=20?(s=f/2,c=2):f===25?(s=25,c=1):f===50?(s=25,c=2):(s=1,c=1):(s=20,c=3)}return this.calculateThrowWithSpread(s,c,e,t)}calculateThrowWithSpread(e,t,r,o){let a=40;r===tt.Medium&&(a=20),r===tt.Hard&&(a=8);let c=.85+o.id*12345%1e3/1e3*.3,d=a*c;if(o.last3History&&o.last3History.length>0){let Et=o.last3History.reduce((_t,Dl)=>_t+Dl,0)/o.last3History.length;Et<20?d*=1.2:Et>40&&(d*=.9)}let m=.9+Math.random()*.2;d*=m;let f,S=0;if(e===0)f=200;else if(e===25)f=t===2?6:12;else{let Et=2*Math.PI/20,_t=this.DARTBOARD_VALUES.indexOf(e);S=Math.PI/2-_t*Et,t===3?f=105:t===2?f=165:f=135}let H=(Math.random()-.5)*4,Y=(Math.random()-.5)*4,Q=Math.random(),R=Math.random(),oe=d*Math.sqrt(-2*Math.log(Q)),ye=f*Math.cos(S)+oe*Math.cos(2*Math.PI*R)+H,Pe=f*Math.sin(S)+oe*Math.sin(2*Math.PI*R)+Y,Ae=Math.sqrt(ye*ye+Pe*Pe),ge=Math.atan2(Pe,ye);return this.mapCoordinatesToThrow(Ae,ge)}mapCoordinatesToThrow(e,t){if(e<6.35)return{value:25,multiplier:2};if(e<15.9)return{value:25,multiplier:1};if(e>170)return{value:0,multiplier:1};let r=(Math.PI/2+Math.PI/20-t)%(2*Math.PI);r<0&&(r+=2*Math.PI);let o=2*Math.PI/20,a=Math.floor(r/o)%20;a<0&&(a+=20);let s=this.DARTBOARD_VALUES[a],c=1;return e>=99&&e<=107?c=3:e>=162&&e<=170&&(c=2),{value:s,multiplier:c}}getCricketThrow(e,t,r){let o=[20,19,18,17,16,15,25],a=t.cricketMap,s=o.filter(m=>(a.get(m)||0)<3),c,d;if(s.length>0)c=s[0];else{let m=o.filter(f=>r.some(S=>S.id!==t.id&&(S.cricketMap.get(f)||0)<3));m.length>0?c=m[0]:c=20}return c!==25?(d=3,(e===tt.Easy||e===tt.Medium&&Math.random()<.5)&&(d=1)):d=e===tt.Hard?2:1,this.calculateThrowWithSpread(c,d,e,t)}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var eg=(()=>{class n{constructor(){this.startTime=0,this.elapsedTimeSignal=j("00:00:00")}startTimer(){this.startTime=Date.now(),this.timerInterval=setInterval(()=>{let t=Date.now()-this.startTime;this.elapsedTimeSignal.set(this.formatTime(t))},1e3)}stopTimer(){this.timerInterval&&clearInterval(this.timerInterval)}resetTimer(){this.stopTimer(),this.startTimer()}formatTime(e){let t=Math.floor(e/1e3),r=Math.floor(t/3600),o=Math.floor(t%3600/60),a=t%60;return[r,o,a].map(s=>s<10?"0"+s:s).join(":")}ngOnDestroy(){this.stopTimer()}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function Nw(n,i){n&1&&(u(0,"mat-icon",21),g(1,"smart_toy"),h())}function Lw(n,i){if(n&1&&(u(0,"div",9)(1,"div",22)(2,"div",23),g(3,"ZIEL"),h(),u(4,"div",24),g(5),h()()()),n&2){let e=k();p(5),ae(e.formatTarget(e.currentPlayerService._randomHitTarget()))}}var cl=(()=>{class n{constructor(){this.playerService=l(Le),this.GameType=M,this.formatTarget=mf,this.currentPlayerService=l(de),this.roundCountService=l(jt),this.gameTimerService=l(eg)}ngOnInit(){this.gameTimerService.startTimer()}ngOnDestroy(){this.gameTimerService.stopTimer()}getProgressColor(){switch(this.currentPlayerService._remainingThrows){case 3:return"primary";case 2:return"accent";case 1:return"warn";default:return}}getRoundCount(){return this.roundCountService.roundCount<=this.roundCountService.MAX_ROUND_COUNT?this.roundCountService.roundCount:this.roundCountService.MAX_ROUND_COUNT}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=w({type:n,selectors:[["app-current-player-progress"]],decls:34,vars:15,consts:[[1,"progress-container","m-1","px-1","py-1","shadow","rounded"],[1,"section","player-info"],[1,"matcardpointer","h-100","w-100","d-flex","flex-row",3,"click"],[1,"info-card"],[1,"player-name-score-row"],[1,"player-name","text-wrap","text-truncate"],["class","ai-icon",4,"ngIf"],[1,"player-score"],[1,"player-avg","small"],[1,"section","target-info"],[1,"section","dart-status"],[1,"status-content"],[1,"dart-throw-indicator"],["mat-mini-fab","",1,"no-pointer","mat-mini-fab",3,"color"],["mat-mini-fab","",1,"no-pointer",3,"color"],[1,"d-flex","flex-row"],[1,"round-info","small","text-nowrap"],[1,"round-label"],[1,"round-value"],[1,"timer-container"],[1,"game-timer"],[1,"ai-icon"],[1,"target-card"],[1,"target-label"],[1,"target-value"]],template:function(t,r){t&1&&(u(0,"div",0)(1,"div",1)(2,"mat-card",2),x("click",function(){return r.currentPlayerService.showHistory(r.currentPlayerService._currentPlayer.value)}),u(3,"div",3)(4,"div",4)(5,"div",5),he(6,Nw,2,0,"mat-icon",6),g(7),h(),u(8,"div",7),g(9),h()(),u(10,"div",8),g(11),h()()()(),G(12,Lw,6,1,"div",9),u(13,"div",10)(14,"div",11)(15,"div",12)(16,"button",13)(17,"span"),g(18),h()(),u(19,"button",14)(20,"span"),g(21),h()(),u(22,"button",14)(23,"span"),g(24),h()()(),u(25,"div",15)(26,"div",16)(27,"span",17),g(28,"Runde"),h(),u(29,"span",18),g(30),h()(),u(31,"div",19)(32,"span",20),g(33),h()()()()()()),t&2&&(p(6),D("ngIf",r.currentPlayerService._currentPlayer.value.isAI),p(),ie(" ",r.currentPlayerService._currentPlayer.value.name||"Spieler",": "),p(2),ae(r.currentPlayerService._remainingPointsToDisplay()),p(2),ie("\u2300 ",r.currentPlayerService._currentPlayer.value.average),p(),$(r.currentPlayerService.currentGameMode===r.GameType.RandomHit&&r.currentPlayerService._randomHitTarget()?12:-1),p(3),D("@throwAdded",r.currentPlayerService.last3HisSignal().length),p(),D("color",r.currentPlayerService.last3HisSignal().length>=1?r.getProgressColor():"gray"),p(2),ae(r.currentPlayerService.last3HisSignal()[0]??"\u27B6"),p(),D("color",r.currentPlayerService.last3HisSignal().length>=2?r.getProgressColor():"gray"),p(2),ae(r.currentPlayerService.last3HisSignal()[1]??"\u27B6"),p(),D("color",r.currentPlayerService.last3HisSignal().length>=3?r.getProgressColor():"gray"),p(2),ae(r.currentPlayerService.last3HisSignal()[2]??"\u27B6"),p(6),Hu("",r.getRoundCount()," / ",r.roundCountService.MAX_ROUND_COUNT),p(3),ae(r.gameTimerService.elapsedTimeSignal()))},dependencies:[ke,Wt,ri,Hs,_n,gn,Se,dn],styles:[".progress-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;height:15vh;min-height:80px;max-height:20vh;background-color:#0003}@media screen and (orientation:landscape)and (max-height:500px){.progress-container[_ngcontent-%COMP%]{height:25vh;min-height:100px;max-height:none}}.progress-container[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:.5rem}.progress-container[_ngcontent-%COMP%]   .player-info[_ngcontent-%COMP%]{flex:1}.progress-container[_ngcontent-%COMP%]   .player-info[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;background-color:#ffffff0d}.progress-container[_ngcontent-%COMP%]   .player-info[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .player-name-score-row[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;gap:.5rem;width:100%;padding:0 .5rem}.progress-container[_ngcontent-%COMP%]   .player-info[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .player-name-score-row[_ngcontent-%COMP%]   .player-name[_ngcontent-%COMP%]{font-size:1.6rem;opacity:.8;display:flex;align-items:center;overflow:hidden}.progress-container[_ngcontent-%COMP%]   .player-info[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .player-name-score-row[_ngcontent-%COMP%]   .player-name[_ngcontent-%COMP%]   .ai-icon[_ngcontent-%COMP%]{font-size:1.2rem;width:1.2rem;height:1.2rem;margin-right:4px}.progress-container[_ngcontent-%COMP%]   .player-info[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .player-name-score-row[_ngcontent-%COMP%]   .player-score[_ngcontent-%COMP%]{font-size:1.6rem;font-weight:700;line-height:1.2}.progress-container[_ngcontent-%COMP%]   .target-info[_ngcontent-%COMP%]{flex:.8;max-width:95px;display:flex;justify-content:center;align-items:center;padding:0 .25rem}.progress-container[_ngcontent-%COMP%]   .target-info[_ngcontent-%COMP%]   .target-card[_ngcontent-%COMP%]{width:100%;max-width:90px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#ff980040,#ff572240);border:2px solid #ff9800;border-radius:8px;padding:4px 6px;box-shadow:0 0 10px #ff980066;box-sizing:border-box}.progress-container[_ngcontent-%COMP%]   .target-info[_ngcontent-%COMP%]   .target-card[_ngcontent-%COMP%]   .target-label[_ngcontent-%COMP%]{font-size:.7rem;font-weight:700;letter-spacing:1px;color:#ffb74d;text-transform:uppercase}.progress-container[_ngcontent-%COMP%]   .target-info[_ngcontent-%COMP%]   .target-card[_ngcontent-%COMP%]   .target-value[_ngcontent-%COMP%]{font-size:1.05rem;font-weight:900;color:#fff;text-shadow:0 0 8px rgba(255,152,0,.8);white-space:nowrap;text-align:center}.progress-container[_ngcontent-%COMP%]   .dart-status[_ngcontent-%COMP%]{flex:1;padding:2px 0}.progress-container[_ngcontent-%COMP%]   .dart-status[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:space-evenly;width:100%;height:100%}.progress-container[_ngcontent-%COMP%]   .dart-status[_ngcontent-%COMP%]   .dart-throw-indicator[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:4px;align-items:center;justify-content:center}.progress-container[_ngcontent-%COMP%]   .dart-status[_ngcontent-%COMP%]   .dart-throw-indicator[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{transform:scale(.75);margin:0}.progress-container[_ngcontent-%COMP%]   .dart-status[_ngcontent-%COMP%]   .round-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;font-weight:700;color:#80d8ff;line-height:1.1}.progress-container[_ngcontent-%COMP%]   .dart-status[_ngcontent-%COMP%]   .round-info[_ngcontent-%COMP%]   .round-label[_ngcontent-%COMP%]{font-size:.7rem;opacity:.7}.progress-container[_ngcontent-%COMP%]   .dart-status[_ngcontent-%COMP%]   .round-info[_ngcontent-%COMP%]   .round-value[_ngcontent-%COMP%]{font-size:.7rem}.progress-container[_ngcontent-%COMP%]   .timer-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;margin:.5rem;gap:4%}.progress-container[_ngcontent-%COMP%]   .timer-container[_ngcontent-%COMP%]   .game-timer[_ngcontent-%COMP%]{font-size:.8rem;font-family:monospace;color:#ffd740}.progress-container[_ngcontent-%COMP%]   .timer-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{transform:scale(.8);width:32px;height:32px;line-height:32px}.pow-container[_ngcontent-%COMP%]{display:none}"],data:{animation:[Bl("throwAdded",[zl(":increment",[Vl("2000ms ease-in-out",jl([qr({transform:"scale(1)",offset:0}),qr({transform:"scale(1.75)",offset:.5}),qr({transform:"scale(1)",offset:1})]))])])]}})}}return n})();var Lr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=O({imports:[Ci,re]})}return n})();var si=(()=>{class n{constructor(e,t){this.el=e,this.renderer=t,this.morphTimer=null,this.originalTransform="",this.shapeMorphClick=new N,this.currentPlayerService=l(de),this.renderer.setStyle(this.el.nativeElement,"transition","transform 0.1s ease-out")}vibrateOnClick(e){"vibrate"in navigator&&navigator.vibrate(e)}playPressAnimation(){this.morphTimer&&(clearTimeout(this.morphTimer),this.renderer.setStyle(this.el.nativeElement,"transform",this.originalTransform)),this.originalTransform=this.el.nativeElement.style.transform||"",this.renderer.setStyle(this.el.nativeElement,"transform","translate(2px, 2px) scale(0.98)"),this.morphTimer=setTimeout(()=>{this.renderer.setStyle(this.el.nativeElement,"transform",this.originalTransform),this.morphTimer=null},150)}onGlobalContextMenu(e){e.preventDefault(),e.stopPropagation()}onClick(e){e.isTrusted&&(e.preventDefault(),e.stopImmediatePropagation()),this.vibrateOnClick(50),this.playPressAnimation(),this.currentPlayerService.setLastClickedButton(this.el.nativeElement),this.shapeMorphClick.emit()}static{this.\u0275fac=function(t){return new(t||n)(U(P),U(me))}}static{this.\u0275dir=I({type:n,selectors:[["","appShapeMorph",""]],hostBindings:function(t,r){t&1&&x("contextmenu",function(a){return r.onGlobalContextMenu(a)})("click",function(a){return r.onClick(a)})},outputs:{shapeMorphClick:"shapeMorphClick"}})}}return n})();var li=(()=>{class n{constructor(){this.multiplier=j(1)}setMultiplier(e){this.multiplier.set(e)}getMultiplier(){return this.multiplier()}reset(){this.multiplier.set(1)}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var dl=(()=>{class n{constructor(){this.multiplierService=l(li),this.customRipple=Sn,this.bullClick=new N,this.bullseyeClick=new N,this.disabled=!1}scoreBull(){this.bullClick.emit()}scoreBullsEye(){this.bullseyeClick.emit()}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=w({type:n,selectors:[["app-bull-buttons"]],inputs:{disabled:"disabled"},outputs:{bullClick:"bullClick",bullseyeClick:"bullseyeClick"},decls:5,vars:8,consts:[[1,"d-flex","justify-content-center","pb-4","pe-4","gap-5"],["id","dart-btn-bull","mat-flat-button","","matRipple","","appShapeMorph","",1,"m-auto","raised-button-3d-rect","me-2",3,"shapeMorphClick","disabled","color","matRippleColor","matRippleRadius"],["id","dart-btn-bullseye","mat-flat-button","","matRipple","","appShapeMorph","",1,"m-auto","raised-button-3d-rect",3,"shapeMorphClick","disabled","color","matRippleColor","matRippleRadius"]],template:function(t,r){t&1&&(u(0,"div",0)(1,"button",1),x("shapeMorphClick",function(){return r.scoreBull()}),g(2," Bull "),h(),u(3,"button",2),x("shapeMorphClick",function(){return r.scoreBullsEye()}),g(4," BullsEye "),h()()),t&2&&(p(),D("disabled",r.disabled)("color","primary")("matRippleColor",r.customRipple.rippleColor)("matRippleRadius",r.customRipple.rippleRadius),p(2),D("disabled",r.disabled)("color","accent")("matRippleColor",r.customRipple.rippleColor)("matRippleRadius",r.customRipple.rippleRadius))},dependencies:[Se,Ze,ct,Je,si],encapsulation:2})}}return n})();function Bw(n,i){if(n&1){let e=Re();u(0,"div",11)(1,"button",12),g(2),h(),u(3,"button",13),x("shapeMorphClick",function(){let r=we(e).$implicit,o=k(2);return Ce(o.justScore(r))}),g(4),h()()}if(n&2){let e=i.$implicit,t=k(2);p(),D("disabled",t.isClosed(e)())("color","accent"),p(),ie("",t.getBadgeCountValue(e)()," "),p(),rt(fi("mt-4 raised-button-3d ",t.isScorable(e)()?"":t.border)),D("id",fi("cricket-btn-",e))("disabled",t.isClosed(e)())("color",t.buttonColor)("matRippleColor",t.customRipple.rippleColor)("matRippleUnbounded",!0)("matRippleRadius",t.customRipple.rippleRadius),p(),ie(" ",e," ")}}function Vw(n,i){if(n&1&&(u(0,"div",9),he(1,Bw,5,14,"div",10),h()),n&2){let e=i.$implicit;p(),D("ngForOf",e)}}var tg=(()=>{class n{constructor(){this.customRipple=Sn,this.buttonGroups=[[15,16],[17,18],[19,20]],this.border="border border-5 border-warning",this.animationService=l(Dn),this.multiplierService=l(li),this.cdr=l(te),this.cricketService=l(zt),this.currentPlayerService=l(de),this.playerService=l(Le),this.screenOrientation=window.screen.orientation.type}get buttonColor(){let e=this.multiplierService.multiplier();return e===2?"accent":e===3?"warn":"primary"}onResize(){this.updateOrientation(),this.cdr.detectChanges()}ngOnInit(){this.updateOrientation()}scoreBull(){this.cricketService.scoreCricketWithMultiplier({value:25,multiplier:1}),this.animationService.playAnimationSound("assets/sounds/cow-moo-sound-effect.mp3"),this.cdr.detectChanges()}scoreBullsEye(){this.cricketService.scoreCricketWithMultiplier({value:25,multiplier:2}),this.animationService.showExplosion("Bullseye","red","assets/sounds/oh-yeah.mp3"),this.cdr.detectChanges()}scoreHit(e){let t=this.multiplierService.getMultiplier();this.multiplierService.reset(),this.multiplierAnimationCheck(t,e),this.cricketService.scoreCricketWithMultiplier({value:e,multiplier:t}),this.cdr.detectChanges()}multiplierAnimationCheck(e,t){e===2&&this.animationService.playAnimationSound("assets/sounds/ship-bell-two-times.mp3"),e===3&&(t===20&&this.currentPlayerService._currentPlayer.value.cricketMap.get(t)===3?(this.animationService.tripleTwentyCounter++,this.animationService.tripleTwentyCounter===3?this.animationService.showExplosion("180","red","assets/sounds/opening-bell-triple.mp3"):this.animationService.showExplosion("T"+t.toString(),"red","assets/sounds/good-result.mp3")):(this.animationService.tripleCounter++,this.animationService.tripleCounter===3?this.animationService.showExplosion("TripleTriple last: T"+t.toString(),"red","assets/sounds/oh-yeah.mp3"):this.animationService.showExplosion("T"+t.toString(),"red","assets/sounds/firework-explosion.mp3")))}getBadgeCountValue(e){return Be(()=>(this.currentPlayerService.last3HisSignal(),this.currentPlayerService._currentPlayer.value.cricketMap.get(e)??"0"))}isClosed(e){return Be(()=>{if(this.currentPlayerService.last3HisSignal(),this.playerService._players.length===1)return!1;if(e===50||e===25){if(e===25)return this.currentPlayerService.isCricketBullClosed();if(e===50)return this.currentPlayerService.isCricketBullClosed()}return this.currentPlayerService.isCricketNumberClosed(e)})}isScorable(e){return Be(()=>(this.currentPlayerService.last3HisSignal(),this.playerService._players.length===1?!0:this.playerService._players.filter(r=>this.currentPlayerService._currentPlayer.value!==r).some(r=>r.cricketMap.get(e)!==3)))}updateOrientation(){this.screenOrientation=window.innerHeight>window.innerWidth?"portrait-primary":"landscape-primary"}justScore(e){e===25?this.scoreBull():this.scoreHit(e)}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=w({type:n,selectors:[["app-input-button-row-cricket"]],hostBindings:function(t,r){t&1&&x("resize",function(){return r.onResize()},nn)},decls:11,vars:6,consts:[[1,"container-fluid",3,"hidden"],[1,"d-flex","flex-column","align-items-center"],[1,"d-flex","flex-row","justify-content-center","mb-1"],["mat-raised-button","",1,"justify-content-center","no-pointer","fs-3","mt-2","mb-2","me-4",3,"disabled","color"],[1,"d-flex","flex-column","mx-3","pt-2","btn-scale"],[3,"bullClick","bullseyeClick","disabled"],[1,"d-flex","flex-row","flex-wrap","w-100","justify-content-center","align-items-center","pe-3"],[1,"d-flex","flex-row","flex-wrap","justify-content-center"],["class","d-flex flex-direction",4,"ngFor","ngForOf"],[1,"d-flex","flex-direction"],["class","d-flex flex-column mb-1 align-items-center",4,"ngFor","ngForOf"],[1,"d-flex","flex-column","mb-1","align-items-center"],["mat-raised-button","",1,"justify-content-center","no-pointer","fs-3","mt-4","me-1",3,"disabled","color"],["mat-fab","","matRipple","","appShapeMorph","",3,"shapeMorphClick","disabled","id","color","matRippleColor","matRippleUnbounded","matRippleRadius"]],template:function(t,r){t&1&&(u(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",1)(4,"button",3),g(5),h(),u(6,"div",4)(7,"app-bull-buttons",5),x("bullClick",function(){return r.scoreBull()})("bullseyeClick",function(){return r.scoreBullsEye()}),h()()()(),u(8,"div",6)(9,"div",7),he(10,Vw,2,1,"div",8),h()()()()),t&2&&(D("hidden",r.cricketService._hideAll),p(4),D("disabled",r.isClosed(25)())("color","accent"),p(),ie("",r.getBadgeCountValue(25)()," "),p(2),D("disabled",r.isClosed(25)()),p(3),D("ngForOf",r.buttonGroups))},dependencies:[ke,an,Se,Ze,dr,Lr,ct,Je,si,dl],styles:[".w-16-percent[_ngcontent-%COMP%]{width:16.6666666667%}@media screen and (max-width:600px){.flex-direction[_ngcontent-%COMP%]{flex-direction:row}}@media screen and (min-width:1200px){.flex-direction[_ngcontent-%COMP%]{flex-direction:column}}@media screen and (min-width:1200px){.mx-2[_ngcontent-%COMP%]{margin-left:2rem!important;margin-right:2rem!important}}.maxBtnWidth[_ngcontent-%COMP%]{max-width:15%!important;min-width:15%!important}.mat-button-toggle-checked#mat-button-toggle-1[_ngcontent-%COMP%]{background-color:#80d8ff88}.mat-button-toggle-checked#mat-button-toggle-2[_ngcontent-%COMP%]{background-color:#9c27b088}.mat-button-toggle-checked#mat-button-toggle-3[_ngcontent-%COMP%]{background-color:#f4433688}.material-symbols-outlined[_ngcontent-%COMP%]{font-size:2.5em}"]})}}return n})();var Vi=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new y;constructor(i=!1,e,t=!0,r){this._multiple=i,this._emitChanges=t,this.compareWith=r,e&&e.length&&(i?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...i){this._verifyValueAssignment(i),i.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...i){this._verifyValueAssignment(i),i.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...i){this._verifyValueAssignment(i);let e=this.selected,t=new Set(i.map(o=>this._getConcreteValue(o)));i.forEach(o=>this._markSelected(o)),e.filter(o=>!t.has(this._getConcreteValue(o,t))).forEach(o=>this._unmarkSelected(o));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=!0){this._unmarkAll();let e=this._hasQueuedChanges();return i&&this._emitChangeEvent(),e}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i))}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i))}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i))}_verifyValueAssignment(i){i.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(i,t))return t;return i}else return i}};var jw=["button"],zw=["*"];function Hw(n,i){if(n&1&&(u(0,"div",2),q(1,"mat-pseudo-checkbox",6),h()),n&2){let e=k();p(),D("disabled",e.disabled)}}var ng=new b("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})}),ig=new b("MatButtonToggleGroup"),Uw={provide:Li,useExisting:It(()=>$d),multi:!0},ul=class{source;value;constructor(i,e){this.source=i,this.value=e}},$d=(()=>{class n{_changeDetector=l(te);_dir=l(Ue,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(e){this._name=e,this._markButtonsForCheck()}_name=l(ve).getId("mat-button-toggle-group-");vertical=!1;get value(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e.map(t=>t.value):e[0]?e[0].value:void 0}set value(e){this._setSelectionByValue(e),this.valueChange.emit(this.value)}valueChange=new N;get selected(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e:e[0]||null}get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}change=new N;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(e){this._hideMultipleSelectionIndicator=e,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let e=l(ng,{optional:!0});this.appearance=e&&e.appearance?e.appearance:"standard",this._hideSingleSelectionIndicator=e?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=e?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new Vi(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(e=>e.checked)),this.multiple||this._initializeTabIndex()}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_keydown(e){if(this.multiple||this.disabled||Xe(e))return;let r=e.target.id,o=this._buttonToggles.toArray().findIndex(s=>s.buttonId===r),a=null;switch(e.keyCode){case 32:case 13:a=this._buttonToggles.get(o)||null;break;case 38:a=this._getNextButton(o,-1);break;case 37:a=this._getNextButton(o,this.dir==="ltr"?-1:1);break;case 40:a=this._getNextButton(o,1);break;case 39:a=this._getNextButton(o,this.dir==="ltr"?1:-1);break;default:return}a&&(e.preventDefault(),a._onButtonClick(),a.focus())}_emitChangeEvent(e){let t=new ul(e,this.value);this._rawValue=t.value,this._controlValueAccessorChangeFn(t.value),this.change.emit(t)}_syncButtonToggle(e,t,r=!1,o=!1){!this.multiple&&this.selected&&!e.checked&&(this.selected.checked=!1),this._selectionModel?t?this._selectionModel.select(e):this._selectionModel.deselect(e):o=!0,o?Promise.resolve().then(()=>this._updateModelValue(e,r)):this._updateModelValue(e,r)}_isSelected(e){return this._selectionModel&&this._selectionModel.isSelected(e)}_isPrechecked(e){return typeof this._rawValue>"u"?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(t=>e.value!=null&&t===e.value):e.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(e=>{e.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let e=0;e<this._buttonToggles.length;e++){let t=this._buttonToggles.get(e);if(!t.disabled){t.tabIndex=0;break}}}_getNextButton(e,t){let r=this._buttonToggles;for(let o=1;o<=r.length;o++){let a=(e+t*o+r.length)%r.length,s=r.get(a);if(s&&!s.disabled)return s}return null}_setSelectionByValue(e){if(this._rawValue=e,!this._buttonToggles)return;let t=this._buttonToggles.toArray();if(this.multiple&&e?(Array.isArray(e),this._clearSelection(),e.forEach(r=>this._selectValue(r,t))):(this._clearSelection(),this._selectValue(e,t)),!this.multiple&&t.every(r=>r.tabIndex===-1)){for(let r of t)if(!r.disabled){r.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(e=>{e.checked=!1,this.multiple||(e.tabIndex=-1)})}_selectValue(e,t){for(let r of t)if(r.value===e){r.checked=!0,this._selectionModel.select(r),this.multiple||(r.tabIndex=0);break}}_updateModelValue(e,t){t&&this._emitChangeEvent(e),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(e=>e._markForCheck())}static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["mat-button-toggle-group"]],contentQueries:function(t,r,o){if(t&1&&Ut(o,hl,5),t&2){let a;J(a=ee())&&(r._buttonToggles=a)}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(t,r){t&1&&x("keydown",function(a){return r._keydown(a)}),t&2&&(Z("role",r.multiple?"group":"radiogroup")("aria-disabled",r.disabled),T("mat-button-toggle-vertical",r.vertical)("mat-button-toggle-group-appearance-standard",r.appearance==="standard"))},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",A],value:"value",multiple:[2,"multiple","multiple",A],disabled:[2,"disabled","disabled",A],disabledInteractive:[2,"disabledInteractive","disabledInteractive",A],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",A],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",A]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[Te([Uw,{provide:ig,useExisting:n}])]})}return n})(),hl=(()=>{class n{_changeDetectorRef=l(te);_elementRef=l(P);_focusMonitor=l(wt);_idGenerator=l(ve);_animationDisabled=Me();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(e){this._tabIndex.set(e)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=e}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new N;constructor(){l(Ne).load(cn);let e=l(ig,{optional:!0}),t=l(new rn("tabindex"),{optional:!0})||"",r=l(ng,{optional:!0});this._tabIndex=j(parseInt(t)||0),this.buttonToggleGroup=e,this._appearance=r&&r.appearance?r.appearance:"standard",this._disabledInteractive=r?.disabledInteractive??!1}ngOnInit(){let e=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),e&&(e._isPrechecked(this)?this.checked=!0:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,!1,!1,!0)}focus(e){this._buttonElement.nativeElement.focus(e)}_onButtonClick(){if(this.disabled)return;let e=this.isSingleSelector()?!0:!this._checked;if(e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let t=this.buttonToggleGroup._buttonToggles.find(r=>r.tabIndex===0);t&&(t.tabIndex=-1),this.tabIndex=0}this.change.emit(new ul(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=w({type:n,selectors:[["mat-button-toggle"]],viewQuery:function(t,r){if(t&1&&Ye(jw,5),t&2){let o;J(o=ee())&&(r._buttonElement=o.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(t,r){t&1&&x("focus",function(){return r.focus()}),t&2&&(Z("aria-label",null)("aria-labelledby",null)("id",r.id)("name",null),T("mat-button-toggle-standalone",!r.buttonToggleGroup)("mat-button-toggle-checked",r.checked)("mat-button-toggle-disabled",r.disabled)("mat-button-toggle-disabled-interactive",r.disabledInteractive)("mat-button-toggle-appearance-standard",r.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",A],appearance:"appearance",checked:[2,"checked","checked",A],disabled:[2,"disabled","disabled",A],disabledInteractive:[2,"disabledInteractive","disabledInteractive",A]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:zw,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(t,r){if(t&1&&(De(),u(0,"button",1,0),x("click",function(){return r._onButtonClick()}),G(2,Hw,2,1,"div",2),u(3,"span",3),K(4),h()(),q(5,"span",4)(6,"span",5)),t&2){let o=it(1);D("id",r.buttonId)("disabled",r.disabled&&!r.disabledInteractive||null),Z("role",r.isSingleSelector()?"radio":"button")("tabindex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex)("aria-pressed",r.isSingleSelector()?null:r.checked)("aria-checked",r.isSingleSelector()?r.checked:null)("name",r._getButtonName())("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby)("aria-disabled",r.disabled&&r.disabledInteractive?"true":null),p(2),$(r.buttonToggleGroup&&(!r.buttonToggleGroup.multiple&&!r.buttonToggleGroup.hideSingleSelectionIndicator||r.buttonToggleGroup.multiple&&!r.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),p(4),D("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)}},dependencies:[Je,Ls],styles:[`.mat-button-toggle-standalone,
.mat-button-toggle-group {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  border-radius: var(--mat-button-toggle-legacy-shape);
  transform: translateZ(0);
}
.mat-button-toggle-standalone:not([class*=mat-elevation-z]),
.mat-button-toggle-group:not([class*=mat-elevation-z]) {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone,
  .mat-button-toggle-group {
    outline: solid 1px;
  }
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.mat-button-toggle-group-appearance-standard {
  border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,
.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),
.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]) {
  box-shadow: none;
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
  .mat-button-toggle-group-appearance-standard {
    outline: 0;
  }
}

.mat-button-toggle-vertical {
  flex-direction: column;
}
.mat-button-toggle-vertical .mat-button-toggle-label-content {
  display: block;
}

.mat-button-toggle {
  white-space: nowrap;
  position: relative;
  color: var(--mat-button-toggle-legacy-text-color);
  font-family: var(--mat-button-toggle-legacy-label-text-font);
  font-size: var(--mat-button-toggle-legacy-label-text-size);
  line-height: var(--mat-button-toggle-legacy-label-text-line-height);
  font-weight: var(--mat-button-toggle-legacy-label-text-weight);
  letter-spacing: var(--mat-button-toggle-legacy-label-text-tracking);
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-legacy-selected-state-text-color);
}
.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-legacy-focus-state-layer-opacity);
}
.mat-button-toggle .mat-icon svg {
  vertical-align: top;
}

.mat-button-toggle-checkbox-wrapper {
  display: inline-block;
  justify-content: flex-start;
  align-items: center;
  width: 0;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate3d(0, -50%, 0);
}
[dir=rtl] .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 16px;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: 12px;
}
[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 12px;
}
.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper {
  width: 18px;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper {
  transition: width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper {
  transition: none;
}

.mat-button-toggle-checked {
  color: var(--mat-button-toggle-legacy-selected-state-text-color);
  background-color: var(--mat-button-toggle-legacy-selected-state-background-color);
}

.mat-button-toggle-disabled {
  pointer-events: none;
  color: var(--mat-button-toggle-legacy-disabled-state-text-color);
  background-color: var(--mat-button-toggle-legacy-disabled-state-background-color);
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-legacy-disabled-state-text-color);
}
.mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: var(--mat-button-toggle-legacy-disabled-selected-state-background-color);
}

.mat-button-toggle-disabled-interactive {
  pointer-events: auto;
}

.mat-button-toggle-appearance-standard {
  color: var(--mat-button-toggle-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-button-toggle-background-color, transparent);
  font-family: var(--mat-button-toggle-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-toggle-label-text-size, var(--mat-sys-label-large-size));
  line-height: var(--mat-button-toggle-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-weight: var(--mat-button-toggle-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-button-toggle-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: none;
  border-top: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-checked {
  color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled {
  color: var(--mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-state-background-color, transparent);
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked {
  color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: var(--mat-button-toggle-state-layer-color, var(--mat-sys-on-surface));
}
.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
@media (hover: none) {
  .mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
    display: none;
  }
}

.mat-button-toggle-label-content {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  padding: 0 16px;
  line-height: var(--mat-button-toggle-legacy-height);
  position: relative;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {
  padding: 0 12px;
  line-height: var(--mat-button-toggle-height, 40px);
}

.mat-button-toggle-label-content > * {
  vertical-align: middle;
}

.mat-button-toggle-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background-color: var(--mat-button-toggle-legacy-state-layer-color);
}

@media (forced-colors: active) {
  .mat-button-toggle-checked .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
    opacity: 0.5;
    height: 0;
  }
  .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay {
    opacity: 0.6;
  }
  .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
  }
}
.mat-button-toggle .mat-button-toggle-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-button-toggle-button {
  border: 0;
  background: none;
  color: inherit;
  padding: 0;
  margin: 0;
  font: inherit;
  outline: none;
  width: 100%;
  cursor: pointer;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-button {
  transition: padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-button {
  transition: none;
}
.mat-button-toggle-disabled .mat-button-toggle-button {
  cursor: default;
}
.mat-button-toggle-button::-moz-focus-inner {
  border: 0;
}
.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 30px;
}
[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 0;
  padding-right: 30px;
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard {
  --mat-focus-indicator-border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
`],encapsulation:2,changeDetection:0})}return n})(),rg=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=O({imports:[ct,hl,re]})}return n})();var ml=(()=>{class n{constructor(){this.multiplierService=l(li),this.cdr=l(te),this.screenOrientation="portrait-primary",this.multiplierControl=new Hf("1"),Ft(()=>{this.multiplierControl.setValue(String(this.multiplierService.multiplier()),{emitEvent:!1})})}onResize(){this.updateOrientation(),this.cdr.detectChanges()}ngOnInit(){this.updateOrientation(),this.multiplierControl.valueChanges.subscribe(e=>{this.multiplierService.setMultiplier(Number(e))})}updateOrientation(){this.screenOrientation=window.innerHeight>window.innerWidth?"portrait-primary":"landscape-primary"}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=w({type:n,selectors:[["app-multiplier-toggle"]],hostBindings:function(t,r){t&1&&x("resize",function(){return r.onResize()},nn)},decls:8,vars:3,consts:[[1,"multiplier-container"],[1,"toggle-group-scale","toggle-btn-group",3,"vertical","formControl","hideSingleSelectionIndicator"],["id","multiplier-1","value","1",1,"toggle1-color"],["id","multiplier-2","value","2",1,"toggle2-color"],["id","multiplier-3","value","3",1,"toggle3-color"]],template:function(t,r){t&1&&(u(0,"div",0)(1,"mat-button-toggle-group",1)(2,"mat-button-toggle",2),g(3,"Single"),h(),u(4,"mat-button-toggle",3),g(5,"Double"),h(),u(6,"mat-button-toggle",4),g(7,"Triple"),h()()()),t&2&&(p(),D("vertical",!0)("formControl",r.multiplierControl)("hideSingleSelectionIndicator",!0))},dependencies:[ke,rg,$d,hl,al,tl,zd],styles:['@charset "UTF-8";.multiplier-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.toggle-btn-group[_ngcontent-%COMP%]{border-radius:12px;overflow:hidden;border:1px solid rgba(255,255,255,.12);background-color:#212121cc}.mat-button-toggle[_ngcontent-%COMP%]{width:4rem;height:4.5rem;display:flex;align-items:center;justify-content:center}.mat-button-toggle-checked.toggle1-color[_ngcontent-%COMP%]{background-color:#80d8ff88!important}.mat-button-toggle-checked.toggle2-color[_ngcontent-%COMP%]{background-color:#9c27b088!important}.mat-button-toggle-checked.toggle3-color[_ngcontent-%COMP%]{background-color:#f4433688!important}']})}}return n})();var pl=(()=>{class n{constructor(){this.currentPlayerService=l(de),this.dartService=l(xt),this.cricketService=l(zt),this.customRipple=Sn,this.cdr=l(te),this.animationService=l(Dn)}scoreMiss(){this.animationService.missCounter++,this.animationService.missCounter===3&&this.animationService.showExplosion("Miss","green","assets/sounds/sitcom-laugh.mp3"),this.currentPlayerService.currentGameMode==="Cricket"?this.cricketService.scoreCricketWithMultiplier({value:0,multiplier:1}):this.dartService.score({value:0,multiplier:1}),this.cdr.detectChanges()}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=w({type:n,selectors:[["app-miss-btn"]],decls:3,vars:3,consts:[[1,"d-flex","justify-content-center","align-items-center","mt-5","px-2","py-2"],["id","miss-btn","mat-raised-button","","color","warn","matRipple","","appShapeMorph","",1,"btn-scale","raised-button-3d-rect",3,"shapeMorphClick","matRippleColor","matRippleUnbounded","matRippleRadius"]],template:function(t,r){t&1&&(u(0,"div",0)(1,"button",1),x("shapeMorphClick",function(){return r.scoreMiss()}),g(2," Miss "),h()()),t&2&&(p(),D("matRippleColor",r.customRipple.rippleColor)("matRippleUnbounded",!0)("matRippleRadius",r.customRipple.rippleRadius))},dependencies:[Ze,Je,si,Lr],encapsulation:2})}}return n})();var fl=(()=>{class n{constructor(e,t){this.dialogRef=e,this.playerService=t,this.GameType=M,this.currentPlayerService=l(de)}ngOnInit(){this.dialogRef.updateSize("200%","50%")}getDiff(e){return Math.abs(this.currentPlayerService._currentPlayer.value.remainingPoints-e.remainingPoints)}static{this.\u0275fac=function(t){return new(t||n)(U(Ni),U(Le))}}static{this.\u0275cmp=w({type:n,selectors:[["app-hidden-players-dialog"]],decls:7,vars:0,consts:[["mat-dialog-title",""],["align","end"],["mat-raised-button","","mat-dialog-close","","color","accent"]],template:function(t,r){t&1&&(u(0,"mat-dialog-content")(1,"h1",0),g(2,"All Players"),h(),q(3,"app-mini-player-overview"),h(),u(4,"mat-dialog-actions",1)(5,"button",2),g(6,"OK"),h()())},dependencies:[ri,Cn,vn,bn,wn,yn,Se,Ze,Rr],encapsulation:2})}}return n})();function $w(n,i){if(n&1&&(u(0,"div",11),g(1),h()),n&2){let e=k().$implicit,t=k();p(),ie(" (",t.getDiffToCurrentPlayer(e),") ")}}function Ww(n,i){if(n&1&&(u(0,"div",14)(1,"div",15)(2,"span",16),g(3),h()(),u(4,"div",17),g(5),h()()),n&2){let e=i.$implicit,t=k(2).$implicit,r=k();p(),T("closed",r.getCricketHitCount(t,e)>=3),Z("title",e===25?"Bull":e),p(2),ae(e===25?"B":e),p(),T("closed",r.getCricketHitCount(t,e)>=3),p(),ie(" ",r.getCricketHitCount(t,e)," ")}}function qw(n,i){if(n&1&&(u(0,"div",12),he(1,Ww,6,7,"div",13),h()),n&2){let e=k(2);p(),D("ngForOf",e.getCricketValues())}}function Yw(n,i){if(n&1){let e=Re();fa(0),u(1,"div",4),ba(2,"async"),u(3,"div",5)(4,"div",6),g(5),h(),he(6,$w,2,1,"div",7),h(),u(7,"div",8),he(8,qw,2,1,"div",9),u(9,"span",10),x("click",function(){let r=we(e).$implicit,o=k();return Ce(o.currentPlayerService.showHistory(r))}),g(10),h()()(),ga()}if(n&2){let e,t=i.$implicit,r=k();p(),T("active-player",t.id===((e=ya(2,6,r.currentPlayerService._currentPlayer))==null?null:e.id)),p(4),ae(t.name),p(),D("ngIf",r.currentPlayerService.currentGameMode===r.GameType.Highscore||r.currentPlayerService.currentGameMode===r.GameType.Elimination301),p(2),D("ngIf",r.currentPlayerService.currentGameMode===r.GameType.Cricket),p(2),ie(" ",t.remainingPoints," ")}}var gl=(()=>{class n{constructor(){this.playerService=l(Le),this.currentPlayerService=l(de),this.GameType=M}getDiffToCurrentPlayer(e){if(e===this.currentPlayerService._currentPlayer.getValue())return 0;let t=this.currentPlayerService._remainingPointsToDisplay();return Math.abs(t-e.remainingPoints)}getCricketValues(){return[15,16,17,18,19,20,25]}getCricketHitCount(e,t){return Be(()=>(this.currentPlayerService.last3HisSignal(),e.cricketMap.get(t)||0))()}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=w({type:n,selectors:[["app-player-overview"]],decls:4,vars:1,consts:[[1,"m-1","px-1","py-1","shadow","rounded"],[1,"section","players-overview"],[1,"mini-scoreboard"],[4,"ngFor","ngForOf"],[1,"mini-player-row"],[1,"mini-player-main-info"],[1,"mini-player-name","player-name","text-wrap","text-truncate"],["class","diff-score small ms-1",4,"ngIf"],[1,"mini-player-actions","d-flex","align-items-center"],["class","cricket-mini-display d-flex me-2",4,"ngIf"],[1,"mini-player-score","fw-bold","matcardpointer",3,"click"],[1,"diff-score","small","ms-1"],[1,"cricket-mini-display","d-flex","me-2"],["class","cricket-circle-wrapper",4,"ngFor","ngForOf"],[1,"cricket-circle-wrapper"],[1,"cricket-circle"],[1,"cricket-value"],[1,"hit-count"]],template:function(t,r){t&1&&(u(0,"div",0)(1,"div",1)(2,"div",2),he(3,Yw,11,8,"ng-container",3),h()()()),t&2&&(p(3),D("ngForOf",r.playerService._players))},dependencies:[ke,an,Wt,Zr],styles:[".players-overview[_ngcontent-%COMP%]{flex:1;height:100%;width:100%}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]{width:100%;height:90%;overflow-y:auto;display:flex;flex-direction:column;gap:2px;padding:2px}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]::-webkit-scrollbar{width:3px}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#fff3;border-radius:3px}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row[_ngcontent-%COMP%]{justify-content:center;display:flex;align-items:center;padding:.5rem;border-radius:4px;font-size:.75rem;min-height:34px;width:100%;gap:.5rem}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row.active-player[_ngcontent-%COMP%]{background-color:#80d8ff33;border:1px solid rgba(128,216,255,.4);box-shadow:0 0 8px #80d8ff33}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row[_ngcontent-%COMP%]   .mini-player-name[_ngcontent-%COMP%]{padding:.2rem;flex:1;min-width:0;color:#80d8ff;font-weight:500;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row[_ngcontent-%COMP%]   .diff-score[_ngcontent-%COMP%]{color:#80d8ff;font-weight:500}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row[_ngcontent-%COMP%]   .mini-player-actions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row[_ngcontent-%COMP%]   .cricket-mini-display[_ngcontent-%COMP%]{width:100%;gap:.75rem;height:3rem;align-items:center}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row[_ngcontent-%COMP%]   .cricket-mini-display[_ngcontent-%COMP%]   .cricket-circle-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:1px}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row[_ngcontent-%COMP%]   .cricket-mini-display[_ngcontent-%COMP%]   .cricket-circle[_ngcontent-%COMP%]{width:18px;height:18px;border-radius:50%;background-color:#3f51b5;border:1px solid rgba(255,255,255,.4);display:flex;align-items:center;justify-content:center;transition:all .2s ease}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row[_ngcontent-%COMP%]   .cricket-mini-display[_ngcontent-%COMP%]   .cricket-circle[_ngcontent-%COMP%]   .cricket-value[_ngcontent-%COMP%]{font-size:10px;color:#fff;font-weight:700}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row[_ngcontent-%COMP%]   .cricket-mini-display[_ngcontent-%COMP%]   .cricket-circle.closed[_ngcontent-%COMP%]{background-color:#f44336;box-shadow:0 0 4px #f4433680;border-color:#ff9800}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row[_ngcontent-%COMP%]   .cricket-mini-display[_ngcontent-%COMP%]   .hit-count[_ngcontent-%COMP%]{font-size:9px;font-weight:700;color:#ffd740}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row[_ngcontent-%COMP%]   .cricket-mini-display[_ngcontent-%COMP%]   .hit-count.closed[_ngcontent-%COMP%]{color:#f44336}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row[_ngcontent-%COMP%]   .mini-player-score[_ngcontent-%COMP%]{min-width:3rem;text-align:center}"]})}}return n})();function Xw(n,i){if(n&1&&(u(0,"div",8)(1,"div",9),g(2),h()()),n&2){let e=k();p(2),ie(" ",e.currentPlayerService._currentPlayer.value.name," is acting ... ")}}var og=(()=>{class n{constructor(){this.cricketService=l(zt),this.playerService=l(Le),this.currentPlayerService=l(de),this.aiService=l(ll),this.fullscreenService=l(Tr),this.dialog=l(ft)}ngOnInit(){this.fullscreenService.toggleTabFullScreenModeGame(),this.aiSubscription=this.currentPlayerService.aiTurn$.subscribe(()=>{this.playAITurn()})}openPlayersOverviewDialog(){this.dialog.open(fl)}playAITurn(){this.aiTimeout&&clearTimeout(this.aiTimeout),this.aiTimeout=setTimeout(()=>{let e=this.currentPlayerService._currentPlayer.value;if(e.isAI&&this.currentPlayerService.hasThrowsRemaining()&&!this.currentPlayerService.isUIBlocked()){let t=this.aiService.getNextThrow(e.difficulty,M.Cricket,e,this.playerService._players);this.performClick(t)}},1500)}performClick(e){if(this.currentPlayerService.isUIBlocked())return;if(e.value===0){document.getElementById("miss-btn")?.click();return}e.multiplier>1&&e.value!==25&&document.getElementById(`multiplier-${e.multiplier}`)?.click();let t=`cricket-btn-${e.value}`;e.value===25&&(t=e.multiplier===2?"dart-btn-bullseye":"dart-btn-bull");let r=document.getElementById(t);r?r.click():this.cricketService.scoreCricketWithMultiplier(e)}ngOnDestroy(){this.cricketService._gameType="",this.aiSubscription?.unsubscribe(),this.aiTimeout&&clearTimeout(this.aiTimeout)}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=w({type:n,selectors:[["app-cricket-component"]],decls:15,vars:3,consts:[[1,"game-layout"],["class","ai-acting-overlay",4,"ngIf"],[1,"game-content-container"],[1,"pow-container","shadow","rounded","d-flex","flex-row"],["mat-icon-button","",1,"p-2",3,"click"],["id","cricket-input",1,"d-flex","flex-row"],[1,"input-container"],[1,"d-flex","multiplier-miss","flex-column","pt-5","me-2"],[1,"ai-acting-overlay"],[1,"ai-acting-text"]],template:function(t,r){t&1&&(u(0,"div",0),q(1,"app-current-player-progress"),he(2,Xw,3,1,"div",1),u(3,"div",2)(4,"div",3),q(5,"app-player-overview"),u(6,"button",4),x("click",function(){return r.openPlayersOverviewDialog()}),u(7,"mat-icon"),g(8,"groups"),h()()(),u(9,"div",5)(10,"div",6),q(11,"app-input-button-row-cricket"),h(),u(12,"div",7),q(13,"app-multiplier-toggle")(14,"app-miss-btn"),h()()()()),t&2&&(T("ai-active-border",r.currentPlayerService.isAITurn()&&r.currentPlayerService.hasThrowsRemaining()),p(2),D("ngIf",r.currentPlayerService.isAITurn()&&r.currentPlayerService.hasThrowsRemaining()))},dependencies:[ke,Wt,cl,tg,ml,pl,gl,_n,gn,Se,Pn],encapsulation:2})}}return n})();function Zw(n,i){if(n&1){let e=Re();u(0,"div",8)(1,"button",9),x("shapeMorphClick",function(){let r=we(e).$implicit,o=k(2);return Ce(o.scoreWithMultiplier(r))}),g(2),h()()}if(n&2){let e=i.$implicit,t=k(2);p(),D("id",fi("dart-btn-",e.zahl))("matRippleColor",t.customRipple.rippleColor)("matRippleUnbounded",!0)("matRippleCentered",!0)("matRippleRadius",t.customRipple.rippleRadius)("color",t.buttonColor),p(),ie(" ",e.zahl," ")}}function Kw(n,i){if(n&1&&(u(0,"div",6),he(1,Zw,3,8,"div",7),h()),n&2){let e=i.$implicit;p(),D("ngForOf",e)}}var ag=(()=>{class n{constructor(){this.dartService=l(xt),this.animationService=l(Dn),this.multiplierService=l(li),this.cdr=l(te),this.currentPlayerService=l(de),this.screenOrientation=window.screen.orientation.type,this.customRipple=Sn,this.buttonGroups=[],this.twentyButtons=[]}get buttonColor(){let e=this.multiplierService.multiplier();return e===2?"accent":e===3?"warn":"primary"}onResize(){this.updateOrientation(),this.cdr.detectChanges()}ngOnInit(){if(this.twentyButtons.length===0)for(let e=0;e<20;e++)this.twentyButtons.push({zahl:e+1,badge:!0});this.groupButtons(),this.updateOrientation()}groupButtons(){let e=this.twentyButtons;for(let t=0;t<4;t++)this.buttonGroups.push(e.slice(t*5,(t+1)*5))}scoreBull(){this.dartService.score({value:25,multiplier:1}),this.animationService.playAnimationSound("assets/sounds/cow-moo-sound-effect.mp3"),this.cdr.detectChanges()}scoreBullsEye(){this.dartService.score({value:25,multiplier:2}),this.animationService.showExplosion("Bullseye","red","assets/sounds/oh-yeah.mp3"),this.cdr.detectChanges()}scoreWithMultiplier(e){let t=this.multiplierService.getMultiplier();this.multiplierService.reset(),this.multiplierAnimationCheck(t,e),this.dartService.score({value:e.zahl,multiplier:t}),this.cdr.detectChanges()}multiplierAnimationCheck(e,t){e===2&&this.animationService.playAnimationSound("assets/sounds/ship-bell-two-times.mp3"),e===3&&(t.zahl===20?(this.animationService.tripleTwentyCounter++,this.animationService.tripleTwentyCounter===3?this.animationService.showExplosion("180","red","assets/sounds/opening-bell-triple.mp3"):this.animationService.showExplosion("T"+t.zahl.toString(),"red","assets/sounds/good-result.mp3")):(this.animationService.tripleCounter++,this.animationService.tripleCounter===3?this.animationService.showExplosion("TripleTriple last: T"+t.zahl.toString(),"red","assets/sounds/oh-yeah.mp3"):this.animationService.showExplosion("T"+t.zahl.toString(),"red","assets/sounds/firework-explosion.mp3")))}updateOrientation(){this.screenOrientation=window.innerHeight>window.innerWidth?"portrait-primary":"landscape-primary"}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=w({type:n,selectors:[["app-input-button-row"]],hostBindings:function(t,r){t&1&&x("resize",function(){return r.onResize()},nn)},decls:6,vars:2,consts:[[1,"container-fluid",3,"hidden"],[1,"d-flex","flex-row","flex-wrap","w-100","justify-content-center","align-items-center"],[1,"d-flex","flex-column","mx-3","pt-2","btn-scale"],[3,"bullClick","bullseyeClick"],[1,"d-flex","flex-row","justify-content-center","flex-wrap"],["class","d-flex flex-column",4,"ngFor","ngForOf"],[1,"d-flex","flex-column"],["class","d-flex justify-content-center",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-center"],["matRipple","","mat-fab","","appShapeMorph","",1,"raised-button-3d","input-btn-margin",3,"shapeMorphClick","id","matRippleColor","matRippleUnbounded","matRippleCentered","matRippleRadius","color"]],template:function(t,r){t&1&&(u(0,"div",0)(1,"div",1)(2,"div",2)(3,"app-bull-buttons",3),x("bullClick",function(){return r.scoreBull()})("bullseyeClick",function(){return r.scoreBullsEye()}),h(),u(4,"div",4),he(5,Kw,2,1,"div",5),h()()()()),t&2&&(D("hidden",r.dartService._hideAll),p(5),D("ngForOf",r.buttonGroups))},dependencies:[ke,an,Se,dr,Lr,ct,Je,si,dl],styles:[".w-20-percent[_ngcontent-%COMP%]{width:20%}.multiplier-btn-scale[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{transform:scale(1.4)}@media screen and (max-width:600px){.multiplier-btn-scale[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{transform:scale(1)}}@media screen and (orientation:landscape){.input-btn-margin[_ngcontent-%COMP%]{margin-left:.9rem;margin-right:1.2rem;margin-bottom:1.2rem}}@media screen and (orientation:portrait){.input-btn-margin[_ngcontent-%COMP%]{margin-right:.5rem;margin-bottom:.8rem}}.toggle-btn-scale[_ngcontent-%COMP%]{transform:scale(1.2);margin:3%}@media screen and (orientation:portrait){.toggle-btn-scale[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding-top:3px;transform:scale(.6);margin:.5%}}.mat-button-toggle-checked#mat-button-toggle-1[_ngcontent-%COMP%]{background-color:#80d8ff88}.mat-button-toggle-checked#mat-button-toggle-2[_ngcontent-%COMP%]{background-color:#9c27b088}.mat-button-toggle-checked#mat-button-toggle-3[_ngcontent-%COMP%]{background-color:#f4433688}"]})}}return n})();function Qw(n,i){if(n&1&&(u(0,"div",8)(1,"div",9),g(2),h()()),n&2){let e=k();p(2),ie(" ",e.currentPlayerService._currentPlayer.value.name," is acting ... ")}}var sg=(()=>{class n{constructor(){this.dartservice=l(xt),this.playerService=l(Le),this.currentPlayerService=l(de),this.aiService=l(ll),this.fullscreenService=l(Tr),this.dialog=l(ft)}ngOnInit(){this.fullscreenService.toggleTabFullScreenModeGame(),this.aiSubscription=this.currentPlayerService.aiTurn$.subscribe(()=>{this.playAITurn()})}openPlayersOverviewDialog(){this.dialog.open(fl)}playAITurn(){this.aiTimeout&&clearTimeout(this.aiTimeout),this.aiTimeout=setTimeout(()=>{let e=this.currentPlayerService._currentPlayer.value;if(e.isAI&&this.currentPlayerService.hasThrowsRemaining()&&!this.currentPlayerService.isUIBlocked()){let t=this.aiService.getNextThrow(e.difficulty,this.currentPlayerService.currentGameMode,e,this.playerService._players);this.performClick(t)}},1500)}performClick(e){if(this.currentPlayerService.isUIBlocked())return;if(e.value===0){let r=document.getElementById("miss-btn");r&&(this.currentPlayerService.setLastClickedButton(r),r.click());return}if(e.value===25){let r=e.multiplier===2?"dart-btn-bullseye":"dart-btn-bull",o=document.getElementById(r);o&&(this.currentPlayerService.setLastClickedButton(o),o.click());return}e.multiplier>1&&document.getElementById(`multiplier-${e.multiplier}-button`)?.click();let t=document.getElementById(`dart-btn-${e.value}`);t?(this.currentPlayerService.setLastClickedButton(t),t.click()):this.dartservice.score(e)}ngOnDestroy(){this.dartservice._gameType="",this.aiSubscription?.unsubscribe(),this.aiTimeout&&clearTimeout(this.aiTimeout)}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=w({type:n,selectors:[["app-dart-board"]],decls:15,vars:3,consts:[[1,"game-layout"],["class","ai-acting-overlay",4,"ngIf"],[1,"game-content-container"],[1,"pow-container","shadow","rounded","d-flex","flex-row"],["mat-icon-button","",1,"p-2",3,"click"],["id","dart-input",1,"d-flex","flex-row"],[1,"input-container"],[1,"d-flex","multiplier-miss","flex-column","pt-5","me-2"],[1,"ai-acting-overlay"],[1,"ai-acting-text"]],template:function(t,r){t&1&&(u(0,"div",0),q(1,"app-current-player-progress"),he(2,Qw,3,1,"div",1),u(3,"div",2)(4,"div",3),q(5,"app-player-overview"),u(6,"button",4),x("click",function(){return r.openPlayersOverviewDialog()}),u(7,"mat-icon"),g(8,"groups"),h()()(),u(9,"div",5)(10,"div",6),q(11,"app-input-button-row"),h(),u(12,"div",7),q(13,"app-multiplier-toggle")(14,"app-miss-btn"),h()()()()),t&2&&(T("ai-active-border",r.currentPlayerService.isAITurn()&&r.currentPlayerService.hasThrowsRemaining()),p(2),D("ngIf",r.currentPlayerService.isAITurn()&&r.currentPlayerService.hasThrowsRemaining()))},dependencies:[ke,Wt,cl,ag,ml,pl,gl,_n,gn,Se,Pn],encapsulation:2})}}return n})();function Yd(n){let i=n.cloneNode(!0),e=i.querySelectorAll("[id]"),t=n.nodeName.toLowerCase();i.removeAttribute("id");for(let r=0;r<e.length;r++)e[r].removeAttribute("id");return t==="canvas"?dg(n,i):(t==="input"||t==="select"||t==="textarea")&&cg(n,i),lg("canvas",n,i,dg),lg("input, textarea, select",n,i,cg),i}function lg(n,i,e,t){let r=i.querySelectorAll(n);if(r.length){let o=e.querySelectorAll(n);for(let a=0;a<r.length;a++)t(r[a],o[a])}}var Jw=0;function cg(n,i){i.type!=="file"&&(i.value=n.value),i.type==="radio"&&i.name&&(i.name=`mat-clone-${i.name}-${Jw++}`)}function dg(n,i){let e=i.getContext("2d");if(e)try{e.drawImage(n,0,0)}catch(t){}}function eu(n){let i=n.getBoundingClientRect();return{top:i.top,right:i.right,bottom:i.bottom,left:i.left,width:i.width,height:i.height,x:i.x,y:i.y}}function Xd(n,i,e){let{top:t,bottom:r,left:o,right:a}=n;return e>=t&&e<=r&&i>=o&&i<=a}function eC(n,i){let e=i.left<n.left,t=i.left+i.width>n.right,r=i.top<n.top,o=i.top+i.height>n.bottom;return e||t||r||o}function Ko(n,i,e){n.top+=i,n.bottom=n.top+n.height,n.left+=e,n.right=n.left+n.width}function ug(n,i,e,t){let{top:r,right:o,bottom:a,left:s,width:c,height:d}=n,m=c*i,f=d*i;return t>r-f&&t<a+f&&e>s-m&&e<o+m}var _l=class{_document;positions=new Map;constructor(i){this._document=i}clear(){this.positions.clear()}cache(i){this.clear(),this.positions.set(this._document,{scrollPosition:this.getViewportScrollPosition()}),i.forEach(e=>{this.positions.set(e,{scrollPosition:{top:e.scrollTop,left:e.scrollLeft},clientRect:eu(e)})})}handleScroll(i){let e=ze(i),t=this.positions.get(e);if(!t)return null;let r=t.scrollPosition,o,a;if(e===this._document){let d=this.getViewportScrollPosition();o=d.top,a=d.left}else o=e.scrollTop,a=e.scrollLeft;let s=r.top-o,c=r.left-a;return this.positions.forEach((d,m)=>{d.clientRect&&e!==m&&e.contains(m)&&Ko(d.clientRect,s,c)}),r.top=o,r.left=a,{top:s,left:c}}getViewportScrollPosition(){return{top:window.scrollY,left:window.scrollX}}};function Sg(n,i){let e=n.rootNodes;if(e.length===1&&e[0].nodeType===i.ELEMENT_NODE)return e[0];let t=i.createElement("div");return e.forEach(r=>t.appendChild(r)),t}function tu(n,i,e){for(let t in i)if(i.hasOwnProperty(t)){let r=i[t];r?n.setProperty(t,r,e?.has(t)?"important":""):n.removeProperty(t)}return n}function Br(n,i){let e=i?"":"none";tu(n.style,{"touch-action":i?"":"none","-webkit-user-drag":i?"":"none","-webkit-tap-highlight-color":i?"":"transparent","user-select":e,"-ms-user-select":e,"-webkit-user-select":e,"-moz-user-select":e})}function hg(n,i,e){tu(n.style,{position:i?"":"fixed",top:i?"":"0",opacity:i?"":"0",left:i?"":"-999em"},e)}function vl(n,i){return i&&i!="none"?n+" "+i:n}function mg(n,i){n.style.width=`${i.width}px`,n.style.height=`${i.height}px`,n.style.transform=Qo(i.left,i.top)}function Qo(n,i){return`translate3d(${Math.round(n)}px, ${Math.round(i)}px, 0)`}var Xo={capture:!0},Wd={passive:!1,capture:!0},tC=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=w({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-drag-resets-container",""],decls:0,vars:0,template:function(t,r){},styles:[`@layer cdk-resets {
  .cdk-drag-preview {
    background: none;
    border: none;
    padding: 0;
    color: inherit;
    inset: auto;
  }
}
.cdk-drag-placeholder *,
.cdk-drag-preview * {
  pointer-events: none !important;
}
`],encapsulation:2,changeDetection:0})}return n})(),nu=(()=>{class n{_ngZone=l(B);_document=l(F);_styleLoader=l(Ne);_renderer=l(je).createRenderer(null,null);_cleanupDocumentTouchmove;_scroll=new y;_dropInstances=new Set;_dragInstances=new Set;_activeDragInstances=j([]);_globalListeners;_draggingPredicate=e=>e.isDragging();_domNodesToDirectives=null;pointerMove=new y;pointerUp=new y;constructor(){}registerDropContainer(e){this._dropInstances.has(e)||this._dropInstances.add(e)}registerDragItem(e){this._dragInstances.add(e),this._dragInstances.size===1&&this._ngZone.runOutsideAngular(()=>{this._cleanupDocumentTouchmove?.(),this._cleanupDocumentTouchmove=this._renderer.listen(this._document,"touchmove",this._persistentTouchmoveListener,Wd)})}removeDropContainer(e){this._dropInstances.delete(e)}removeDragItem(e){this._dragInstances.delete(e),this.stopDragging(e),this._dragInstances.size===0&&this._cleanupDocumentTouchmove?.()}startDragging(e,t){if(!(this._activeDragInstances().indexOf(e)>-1)&&(this._styleLoader.load(tC),this._activeDragInstances.update(r=>[...r,e]),this._activeDragInstances().length===1)){let r=t.type.startsWith("touch"),o=s=>this.pointerUp.next(s),a=[["scroll",s=>this._scroll.next(s),Xo],["selectstart",this._preventDefaultWhileDragging,Wd]];r?a.push(["touchend",o,Xo],["touchcancel",o,Xo]):a.push(["mouseup",o,Xo]),r||a.push(["mousemove",s=>this.pointerMove.next(s),Wd]),this._ngZone.runOutsideAngular(()=>{this._globalListeners=a.map(([s,c,d])=>this._renderer.listen(this._document,s,c,d))})}}stopDragging(e){this._activeDragInstances.update(t=>{let r=t.indexOf(e);return r>-1?(t.splice(r,1),[...t]):t}),this._activeDragInstances().length===0&&this._clearGlobalListeners()}isDragging(e){return this._activeDragInstances().indexOf(e)>-1}scrolled(e){let t=[this._scroll];return e&&e!==this._document&&t.push(new at(r=>this._ngZone.runOutsideAngular(()=>{let o=this._renderer.listen(e,"scroll",a=>{this._activeDragInstances().length&&r.next(a)},Xo);return()=>{o()}}))),dt(...t)}registerDirectiveNode(e,t){this._domNodesToDirectives??=new WeakMap,this._domNodesToDirectives.set(e,t)}removeDirectiveNode(e){this._domNodesToDirectives?.delete(e)}getDragDirectiveForNode(e){return this._domNodesToDirectives?.get(e)||null}ngOnDestroy(){this._dragInstances.forEach(e=>this.removeDragItem(e)),this._dropInstances.forEach(e=>this.removeDropContainer(e)),this._domNodesToDirectives=null,this._clearGlobalListeners(),this.pointerMove.complete(),this.pointerUp.complete()}_preventDefaultWhileDragging=e=>{this._activeDragInstances().length>0&&e.preventDefault()};_persistentTouchmoveListener=e=>{this._activeDragInstances().length>0&&(this._activeDragInstances().some(this._draggingPredicate)&&e.preventDefault(),this.pointerMove.next(e))};_clearGlobalListeners(){this._globalListeners?.forEach(e=>e()),this._globalListeners=void 0}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function pg(n){let i=n.toLowerCase().indexOf("ms")>-1?1:1e3;return parseFloat(n)*i}function nC(n){let i=getComputedStyle(n),e=qd(i,"transition-property"),t=e.find(s=>s==="transform"||s==="all");if(!t)return 0;let r=e.indexOf(t),o=qd(i,"transition-duration"),a=qd(i,"transition-delay");return pg(o[r])+pg(a[r])}function qd(n,i){return n.getPropertyValue(i).split(",").map(t=>t.trim())}var iC=new Set(["position"]),Zd=class{_document;_rootElement;_direction;_initialDomRect;_previewTemplate;_previewClass;_pickupPositionOnPage;_initialTransform;_zIndex;_renderer;_previewEmbeddedView=null;_preview;get element(){return this._preview}constructor(i,e,t,r,o,a,s,c,d,m){this._document=i,this._rootElement=e,this._direction=t,this._initialDomRect=r,this._previewTemplate=o,this._previewClass=a,this._pickupPositionOnPage=s,this._initialTransform=c,this._zIndex=d,this._renderer=m}attach(i){this._preview=this._createPreview(),i.appendChild(this._preview),fg(this._preview)&&this._preview.showPopover()}destroy(){this._preview.remove(),this._previewEmbeddedView?.destroy(),this._preview=this._previewEmbeddedView=null}setTransform(i){this._preview.style.transform=i}getBoundingClientRect(){return this._preview.getBoundingClientRect()}addClass(i){this._preview.classList.add(i)}getTransitionDuration(){return nC(this._preview)}addEventListener(i,e){return this._renderer.listen(this._preview,i,e)}_createPreview(){let i=this._previewTemplate,e=this._previewClass,t=i?i.template:null,r;if(t&&i){let o=i.matchSize?this._initialDomRect:null,a=i.viewContainer.createEmbeddedView(t,i.context);a.detectChanges(),r=Sg(a,this._document),this._previewEmbeddedView=a,i.matchSize?mg(r,o):r.style.transform=Qo(this._pickupPositionOnPage.x,this._pickupPositionOnPage.y)}else r=Yd(this._rootElement),mg(r,this._initialDomRect),this._initialTransform&&(r.style.transform=this._initialTransform);return tu(r.style,{"pointer-events":"none",margin:fg(r)?"0 auto 0 0":"0",position:"fixed",top:"0",left:"0","z-index":this._zIndex+""},iC),Br(r,!1),r.classList.add("cdk-drag-preview"),r.setAttribute("popover","manual"),r.setAttribute("dir",this._direction),e&&(Array.isArray(e)?e.forEach(o=>r.classList.add(o)):r.classList.add(e)),r}};function fg(n){return"showPopover"in n}var rC={passive:!0},gg={passive:!1},oC={passive:!1,capture:!0},aC=800,_g="cdk-drag-placeholder",vg=new Set(["position"]);function sC(n,i,e={dragStartThreshold:5,pointerDirectionChangeThreshold:5}){let t=n.get(me,null,{optional:!0})||n.get(je).createRenderer(null,null);return new Kd(i,e,n.get(F),n.get(B),n.get(Bt),n.get(nu),t)}var Kd=class{_config;_document;_ngZone;_viewportRuler;_dragDropRegistry;_renderer;_rootElementCleanups;_cleanupShadowRootSelectStart;_preview=null;_previewContainer;_placeholderRef=null;_placeholder;_pickupPositionInElement;_pickupPositionOnPage;_marker;_anchor=null;_passiveTransform={x:0,y:0};_activeTransform={x:0,y:0};_initialTransform;_hasStartedDragging=j(!1);_hasMoved=!1;_initialContainer;_initialIndex;_parentPositions;_moveEvents=new y;_pointerDirectionDelta;_pointerPositionAtLastDirectionChange;_lastKnownPointerPosition;_rootElement;_ownerSVGElement=null;_rootElementTapHighlight;_pointerMoveSubscription=Ie.EMPTY;_pointerUpSubscription=Ie.EMPTY;_scrollSubscription=Ie.EMPTY;_resizeSubscription=Ie.EMPTY;_lastTouchEventTime;_dragStartTime;_boundaryElement=null;_nativeInteractionsEnabled=!0;_initialDomRect;_previewRect;_boundaryRect;_previewTemplate;_placeholderTemplate;_handles=[];_disabledHandles=new Set;_dropContainer;_direction="ltr";_parentDragRef=null;_cachedShadowRoot;lockAxis=null;dragStartDelay=0;previewClass;scale=1;get disabled(){return this._disabled||!!(this._dropContainer&&this._dropContainer.disabled)}set disabled(i){i!==this._disabled&&(this._disabled=i,this._toggleNativeDragInteractions(),this._handles.forEach(e=>Br(e,i)))}_disabled=!1;beforeStarted=new y;started=new y;released=new y;ended=new y;entered=new y;exited=new y;dropped=new y;moved=this._moveEvents;data;constrainPosition;constructor(i,e,t,r,o,a,s){this._config=e,this._document=t,this._ngZone=r,this._viewportRuler=o,this._dragDropRegistry=a,this._renderer=s,this.withRootElement(i).withParent(e.parentDragRef||null),this._parentPositions=new _l(t),a.registerDragItem(this)}getPlaceholderElement(){return this._placeholder}getRootElement(){return this._rootElement}getVisibleElement(){return this.isDragging()?this.getPlaceholderElement():this.getRootElement()}withHandles(i){this._handles=i.map(t=>He(t)),this._handles.forEach(t=>Br(t,this.disabled)),this._toggleNativeDragInteractions();let e=new Set;return this._disabledHandles.forEach(t=>{this._handles.indexOf(t)>-1&&e.add(t)}),this._disabledHandles=e,this}withPreviewTemplate(i){return this._previewTemplate=i,this}withPlaceholderTemplate(i){return this._placeholderTemplate=i,this}withRootElement(i){let e=He(i);if(e!==this._rootElement){this._removeRootElementListeners();let t=this._renderer;this._rootElementCleanups=this._ngZone.runOutsideAngular(()=>[t.listen(e,"mousedown",this._pointerDown,gg),t.listen(e,"touchstart",this._pointerDown,rC),t.listen(e,"dragstart",this._nativeDragStart,gg)]),this._initialTransform=void 0,this._rootElement=e}return typeof SVGElement<"u"&&this._rootElement instanceof SVGElement&&(this._ownerSVGElement=this._rootElement.ownerSVGElement),this}withBoundaryElement(i){return this._boundaryElement=i?He(i):null,this._resizeSubscription.unsubscribe(),i&&(this._resizeSubscription=this._viewportRuler.change(10).subscribe(()=>this._containInsideBoundaryOnResize())),this}withParent(i){return this._parentDragRef=i,this}dispose(){this._removeRootElementListeners(),this.isDragging()&&this._rootElement?.remove(),this._marker?.remove(),this._destroyPreview(),this._destroyPlaceholder(),this._dragDropRegistry.removeDragItem(this),this._removeListeners(),this.beforeStarted.complete(),this.started.complete(),this.released.complete(),this.ended.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this._moveEvents.complete(),this._handles=[],this._disabledHandles.clear(),this._dropContainer=void 0,this._resizeSubscription.unsubscribe(),this._parentPositions.clear(),this._boundaryElement=this._rootElement=this._ownerSVGElement=this._placeholderTemplate=this._previewTemplate=this._marker=this._parentDragRef=null}isDragging(){return this._hasStartedDragging()&&this._dragDropRegistry.isDragging(this)}reset(){this._rootElement.style.transform=this._initialTransform||"",this._activeTransform={x:0,y:0},this._passiveTransform={x:0,y:0}}resetToBoundary(){if(this._boundaryElement&&this._rootElement&&eC(this._boundaryElement.getBoundingClientRect(),this._rootElement.getBoundingClientRect())){let i=this._boundaryElement.getBoundingClientRect(),e=this._rootElement.getBoundingClientRect(),t=0,r=0;e.left<i.left?t=i.left-e.left:e.right>i.right&&(t=i.right-e.right),e.top<i.top?r=i.top-e.top:e.bottom>i.bottom&&(r=i.bottom-e.bottom);let o=this._activeTransform.x,a=this._activeTransform.y,s=o+t,c=a+r;this._rootElement.style.transform=Qo(s,c),this._activeTransform={x:s,y:c},this._passiveTransform={x:s,y:c}}}disableHandle(i){!this._disabledHandles.has(i)&&this._handles.indexOf(i)>-1&&(this._disabledHandles.add(i),Br(i,!0))}enableHandle(i){this._disabledHandles.has(i)&&(this._disabledHandles.delete(i),Br(i,this.disabled))}withDirection(i){return this._direction=i,this}_withDropContainer(i){this._dropContainer=i}getFreeDragPosition(){let i=this.isDragging()?this._activeTransform:this._passiveTransform;return{x:i.x,y:i.y}}setFreeDragPosition(i){return this._activeTransform={x:0,y:0},this._passiveTransform.x=i.x,this._passiveTransform.y=i.y,this._dropContainer||this._applyRootElementTransform(i.x,i.y),this}withPreviewContainer(i){return this._previewContainer=i,this}_sortFromLastPointerPosition(){let i=this._lastKnownPointerPosition;i&&this._dropContainer&&this._updateActiveDropContainer(this._getConstrainedPointerPosition(i),i)}_removeListeners(){this._pointerMoveSubscription.unsubscribe(),this._pointerUpSubscription.unsubscribe(),this._scrollSubscription.unsubscribe(),this._cleanupShadowRootSelectStart?.(),this._cleanupShadowRootSelectStart=void 0}_destroyPreview(){this._preview?.destroy(),this._preview=null}_destroyPlaceholder(){this._anchor?.remove(),this._placeholder?.remove(),this._placeholderRef?.destroy(),this._placeholder=this._anchor=this._placeholderRef=null}_pointerDown=i=>{if(this.beforeStarted.next(),this._handles.length){let e=this._getTargetHandle(i);e&&!this._disabledHandles.has(e)&&!this.disabled&&this._initializeDragSequence(e,i)}else this.disabled||this._initializeDragSequence(this._rootElement,i)};_pointerMove=i=>{let e=this._getPointerPositionOnPage(i);if(!this._hasStartedDragging()){let r=Math.abs(e.x-this._pickupPositionOnPage.x),o=Math.abs(e.y-this._pickupPositionOnPage.y);if(r+o>=this._config.dragStartThreshold){let s=Date.now()>=this._dragStartTime+this._getDragStartDelay(i),c=this._dropContainer;if(!s){this._endDragSequence(i);return}(!c||!c.isDragging()&&!c.isReceiving())&&(i.cancelable&&i.preventDefault(),this._hasStartedDragging.set(!0),this._ngZone.run(()=>this._startDragSequence(i)))}return}i.cancelable&&i.preventDefault();let t=this._getConstrainedPointerPosition(e);if(this._hasMoved=!0,this._lastKnownPointerPosition=e,this._updatePointerDirectionDelta(t),this._dropContainer)this._updateActiveDropContainer(t,e);else{let r=this.constrainPosition?this._initialDomRect:this._pickupPositionOnPage,o=this._activeTransform;o.x=t.x-r.x+this._passiveTransform.x,o.y=t.y-r.y+this._passiveTransform.y,this._applyRootElementTransform(o.x,o.y)}this._moveEvents.observers.length&&this._ngZone.run(()=>{this._moveEvents.next({source:this,pointerPosition:t,event:i,distance:this._getDragDistance(t),delta:this._pointerDirectionDelta})})};_pointerUp=i=>{this._endDragSequence(i)};_endDragSequence(i){if(this._dragDropRegistry.isDragging(this)&&(this._removeListeners(),this._dragDropRegistry.stopDragging(this),this._toggleNativeDragInteractions(),this._handles&&(this._rootElement.style.webkitTapHighlightColor=this._rootElementTapHighlight),!!this._hasStartedDragging()))if(this.released.next({source:this,event:i}),this._dropContainer)this._dropContainer._stopScrolling(),this._animatePreviewToPlaceholder().then(()=>{this._cleanupDragArtifacts(i),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)});else{this._passiveTransform.x=this._activeTransform.x;let e=this._getPointerPositionOnPage(i);this._passiveTransform.y=this._activeTransform.y,this._ngZone.run(()=>{this.ended.next({source:this,distance:this._getDragDistance(e),dropPoint:e,event:i})}),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)}}_startDragSequence(i){Zo(i)&&(this._lastTouchEventTime=Date.now()),this._toggleNativeDragInteractions();let e=this._getShadowRoot(),t=this._dropContainer;if(e&&this._ngZone.runOutsideAngular(()=>{this._cleanupShadowRootSelectStart=this._renderer.listen(e,"selectstart",lC,oC)}),t){let r=this._rootElement,o=r.parentNode,a=this._placeholder=this._createPlaceholderElement(),s=this._marker=this._marker||this._document.createComment("");o.insertBefore(s,r),this._initialTransform=r.style.transform||"",this._preview=new Zd(this._document,this._rootElement,this._direction,this._initialDomRect,this._previewTemplate||null,this.previewClass||null,this._pickupPositionOnPage,this._initialTransform,this._config.zIndex||1e3,this._renderer),this._preview.attach(this._getPreviewInsertionPoint(o,e)),hg(r,!1,vg),this._document.body.appendChild(o.replaceChild(a,r)),this.started.next({source:this,event:i}),t.start(),this._initialContainer=t,this._initialIndex=t.getItemIndex(this)}else this.started.next({source:this,event:i}),this._initialContainer=this._initialIndex=void 0;this._parentPositions.cache(t?t.getScrollableParents():[])}_initializeDragSequence(i,e){this._parentDragRef&&e.stopPropagation();let t=this.isDragging(),r=Zo(e),o=!r&&e.button!==0,a=this._rootElement,s=ze(e),c=!r&&this._lastTouchEventTime&&this._lastTouchEventTime+aC>Date.now(),d=r?Rn(e):In(e);if(s&&s.draggable&&e.type==="mousedown"&&e.preventDefault(),t||o||c||d)return;if(this._handles.length){let S=a.style;this._rootElementTapHighlight=S.webkitTapHighlightColor||"",S.webkitTapHighlightColor="transparent"}this._hasMoved=!1,this._hasStartedDragging.set(this._hasMoved),this._removeListeners(),this._initialDomRect=this._rootElement.getBoundingClientRect(),this._pointerMoveSubscription=this._dragDropRegistry.pointerMove.subscribe(this._pointerMove),this._pointerUpSubscription=this._dragDropRegistry.pointerUp.subscribe(this._pointerUp),this._scrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(S=>this._updateOnScroll(S)),this._boundaryElement&&(this._boundaryRect=eu(this._boundaryElement));let m=this._previewTemplate;this._pickupPositionInElement=m&&m.template&&!m.matchSize?{x:0,y:0}:this._getPointerPositionInElement(this._initialDomRect,i,e);let f=this._pickupPositionOnPage=this._lastKnownPointerPosition=this._getPointerPositionOnPage(e);this._pointerDirectionDelta={x:0,y:0},this._pointerPositionAtLastDirectionChange={x:f.x,y:f.y},this._dragStartTime=Date.now(),this._dragDropRegistry.startDragging(this,e)}_cleanupDragArtifacts(i){hg(this._rootElement,!0,vg),this._marker.parentNode.replaceChild(this._rootElement,this._marker),this._destroyPreview(),this._destroyPlaceholder(),this._initialDomRect=this._boundaryRect=this._previewRect=this._initialTransform=void 0,this._ngZone.run(()=>{let e=this._dropContainer,t=e.getItemIndex(this),r=this._getPointerPositionOnPage(i),o=this._getDragDistance(r),a=e._isOverContainer(r.x,r.y);this.ended.next({source:this,distance:o,dropPoint:r,event:i}),this.dropped.next({item:this,currentIndex:t,previousIndex:this._initialIndex,container:e,previousContainer:this._initialContainer,isPointerOverContainer:a,distance:o,dropPoint:r,event:i}),e.drop(this,t,this._initialIndex,this._initialContainer,a,o,r,i),this._dropContainer=this._initialContainer})}_updateActiveDropContainer({x:i,y:e},{x:t,y:r}){let o=this._initialContainer._getSiblingContainerFromPosition(this,i,e);!o&&this._dropContainer!==this._initialContainer&&this._initialContainer._isOverContainer(i,e)&&(o=this._initialContainer),o&&o!==this._dropContainer&&this._ngZone.run(()=>{let a=this._dropContainer.getItemIndex(this),s=this._dropContainer.getItemAtIndex(a+1)?.getVisibleElement()||null;this.exited.next({item:this,container:this._dropContainer}),this._dropContainer.exit(this),this._conditionallyInsertAnchor(o,this._dropContainer,s),this._dropContainer=o,this._dropContainer.enter(this,i,e,o===this._initialContainer&&o.sortingDisabled?this._initialIndex:void 0),this.entered.next({item:this,container:o,currentIndex:o.getItemIndex(this)})}),this.isDragging()&&(this._dropContainer._startScrollingIfNecessary(t,r),this._dropContainer._sortItem(this,i,e,this._pointerDirectionDelta),this.constrainPosition?this._applyPreviewTransform(i,e):this._applyPreviewTransform(i-this._pickupPositionInElement.x,e-this._pickupPositionInElement.y))}_animatePreviewToPlaceholder(){if(!this._hasMoved)return Promise.resolve();let i=this._placeholder.getBoundingClientRect();this._preview.addClass("cdk-drag-animating"),this._applyPreviewTransform(i.left,i.top);let e=this._preview.getTransitionDuration();return e===0?Promise.resolve():this._ngZone.runOutsideAngular(()=>new Promise(t=>{let r=s=>{(!s||this._preview&&ze(s)===this._preview.element&&s.propertyName==="transform")&&(a(),t(),clearTimeout(o))},o=setTimeout(r,e*1.5),a=this._preview.addEventListener("transitionend",r)}))}_createPlaceholderElement(){let i=this._placeholderTemplate,e=i?i.template:null,t;return e?(this._placeholderRef=i.viewContainer.createEmbeddedView(e,i.context),this._placeholderRef.detectChanges(),t=Sg(this._placeholderRef,this._document)):t=Yd(this._rootElement),t.style.pointerEvents="none",t.classList.add(_g),t}_getPointerPositionInElement(i,e,t){let r=e===this._rootElement?null:e,o=r?r.getBoundingClientRect():i,a=Zo(t)?t.targetTouches[0]:t,s=this._getViewportScrollPosition(),c=a.pageX-o.left-s.left,d=a.pageY-o.top-s.top;return{x:o.left-i.left+c,y:o.top-i.top+d}}_getPointerPositionOnPage(i){let e=this._getViewportScrollPosition(),t=Zo(i)?i.touches[0]||i.changedTouches[0]||{pageX:0,pageY:0}:i,r=t.pageX-e.left,o=t.pageY-e.top;if(this._ownerSVGElement){let a=this._ownerSVGElement.getScreenCTM();if(a){let s=this._ownerSVGElement.createSVGPoint();return s.x=r,s.y=o,s.matrixTransform(a.inverse())}}return{x:r,y:o}}_getConstrainedPointerPosition(i){let e=this._dropContainer?this._dropContainer.lockAxis:null,{x:t,y:r}=this.constrainPosition?this.constrainPosition(i,this,this._initialDomRect,this._pickupPositionInElement):i;if(this.lockAxis==="x"||e==="x"?r=this._pickupPositionOnPage.y-(this.constrainPosition?this._pickupPositionInElement.y:0):(this.lockAxis==="y"||e==="y")&&(t=this._pickupPositionOnPage.x-(this.constrainPosition?this._pickupPositionInElement.x:0)),this._boundaryRect){let{x:o,y:a}=this.constrainPosition?{x:0,y:0}:this._pickupPositionInElement,s=this._boundaryRect,{width:c,height:d}=this._getPreviewRect(),m=s.top+a,f=s.bottom-(d-a),S=s.left+o,H=s.right-(c-o);t=bg(t,S,H),r=bg(r,m,f)}return{x:t,y:r}}_updatePointerDirectionDelta(i){let{x:e,y:t}=i,r=this._pointerDirectionDelta,o=this._pointerPositionAtLastDirectionChange,a=Math.abs(e-o.x),s=Math.abs(t-o.y);return a>this._config.pointerDirectionChangeThreshold&&(r.x=e>o.x?1:-1,o.x=e),s>this._config.pointerDirectionChangeThreshold&&(r.y=t>o.y?1:-1,o.y=t),r}_toggleNativeDragInteractions(){if(!this._rootElement||!this._handles)return;let i=this._handles.length>0||!this.isDragging();i!==this._nativeInteractionsEnabled&&(this._nativeInteractionsEnabled=i,Br(this._rootElement,i))}_removeRootElementListeners(){this._rootElementCleanups?.forEach(i=>i()),this._rootElementCleanups=void 0}_applyRootElementTransform(i,e){let t=1/this.scale,r=Qo(i*t,e*t),o=this._rootElement.style;this._initialTransform==null&&(this._initialTransform=o.transform&&o.transform!="none"?o.transform:""),o.transform=vl(r,this._initialTransform)}_applyPreviewTransform(i,e){let t=this._previewTemplate?.template?void 0:this._initialTransform,r=Qo(i,e);this._preview.setTransform(vl(r,t))}_getDragDistance(i){let e=this._pickupPositionOnPage;return e?{x:i.x-e.x,y:i.y-e.y}:{x:0,y:0}}_cleanupCachedDimensions(){this._boundaryRect=this._previewRect=void 0,this._parentPositions.clear()}_containInsideBoundaryOnResize(){let{x:i,y:e}=this._passiveTransform;if(i===0&&e===0||this.isDragging()||!this._boundaryElement)return;let t=this._rootElement.getBoundingClientRect(),r=this._boundaryElement.getBoundingClientRect();if(r.width===0&&r.height===0||t.width===0&&t.height===0)return;let o=r.left-t.left,a=t.right-r.right,s=r.top-t.top,c=t.bottom-r.bottom;r.width>t.width?(o>0&&(i+=o),a>0&&(i-=a)):i=0,r.height>t.height?(s>0&&(e+=s),c>0&&(e-=c)):e=0,(i!==this._passiveTransform.x||e!==this._passiveTransform.y)&&this.setFreeDragPosition({y:e,x:i})}_getDragStartDelay(i){let e=this.dragStartDelay;return typeof e=="number"?e:Zo(i)?e.touch:e?e.mouse:0}_updateOnScroll(i){let e=this._parentPositions.handleScroll(i);if(e){let t=ze(i);this._boundaryRect&&t!==this._boundaryElement&&t.contains(this._boundaryElement)&&Ko(this._boundaryRect,e.top,e.left),this._pickupPositionOnPage.x+=e.left,this._pickupPositionOnPage.y+=e.top,this._dropContainer||(this._activeTransform.x-=e.left,this._activeTransform.y-=e.top,this._applyRootElementTransform(this._activeTransform.x,this._activeTransform.y))}}_getViewportScrollPosition(){return this._parentPositions.positions.get(this._document)?.scrollPosition||this._parentPositions.getViewportScrollPosition()}_getShadowRoot(){return this._cachedShadowRoot===void 0&&(this._cachedShadowRoot=bi(this._rootElement)),this._cachedShadowRoot}_getPreviewInsertionPoint(i,e){let t=this._previewContainer||"global";if(t==="parent")return i;if(t==="global"){let r=this._document;return e||r.fullscreenElement||r.webkitFullscreenElement||r.mozFullScreenElement||r.msFullscreenElement||r.body}return He(t)}_getPreviewRect(){return(!this._previewRect||!this._previewRect.width&&!this._previewRect.height)&&(this._previewRect=this._preview?this._preview.getBoundingClientRect():this._initialDomRect),this._previewRect}_nativeDragStart=i=>{if(this._handles.length){let e=this._getTargetHandle(i);e&&!this._disabledHandles.has(e)&&!this.disabled&&i.preventDefault()}else this.disabled||i.preventDefault()};_getTargetHandle(i){return this._handles.find(e=>i.target&&(i.target===e||e.contains(i.target)))}_conditionallyInsertAnchor(i,e,t){if(i===this._initialContainer)this._anchor?.remove(),this._anchor=null;else if(e===this._initialContainer&&e.hasAnchor){let r=this._anchor??=Yd(this._placeholder);r.classList.remove(_g),r.classList.add("cdk-drag-anchor"),r.style.transform="",t?t.before(r):He(e.element).appendChild(r)}}};function bg(n,i,e){return Math.max(i,Math.min(e,n))}function Zo(n){return n.type[0]==="t"}function lC(n){n.preventDefault()}function yl(n,i,e){let t=yg(i,n.length-1),r=yg(e,n.length-1);if(t===r)return;let o=n[t],a=r<t?-1:1;for(let s=t;s!==r;s+=a)n[s]=n[s+a];n[r]=o}function yg(n,i){return Math.max(0,Math.min(i,n))}var bl=class{_dragDropRegistry;_element;_sortPredicate;_itemPositions=[];_activeDraggables;orientation="vertical";direction="ltr";constructor(i){this._dragDropRegistry=i}_previousSwap={drag:null,delta:0,overlaps:!1};start(i){this.withItems(i)}sort(i,e,t,r){let o=this._itemPositions,a=this._getItemIndexFromPointerPosition(i,e,t,r);if(a===-1&&o.length>0)return null;let s=this.orientation==="horizontal",c=o.findIndex(R=>R.drag===i),d=o[a],m=o[c].clientRect,f=d.clientRect,S=c>a?1:-1,H=this._getItemOffsetPx(m,f,S),Y=this._getSiblingOffsetPx(c,o,S),Q=o.slice();return yl(o,c,a),o.forEach((R,oe)=>{if(Q[oe]===R)return;let ye=R.drag===i,Pe=ye?H:Y,Ae=ye?i.getPlaceholderElement():R.drag.getRootElement();R.offset+=Pe;let ge=Math.round(R.offset*(1/R.drag.scale));s?(Ae.style.transform=vl(`translate3d(${ge}px, 0, 0)`,R.initialTransform),Ko(R.clientRect,0,Pe)):(Ae.style.transform=vl(`translate3d(0, ${ge}px, 0)`,R.initialTransform),Ko(R.clientRect,Pe,0))}),this._previousSwap.overlaps=Xd(f,e,t),this._previousSwap.drag=d.drag,this._previousSwap.delta=s?r.x:r.y,{previousIndex:c,currentIndex:a}}enter(i,e,t,r){let o=this._activeDraggables,a=o.indexOf(i),s=i.getPlaceholderElement();a>-1&&o.splice(a,1);let c=r==null||r<0?this._getItemIndexFromPointerPosition(i,e,t):r,d=o[c];if(d===i&&(d=o[c+1]),!d&&(c==null||c===-1||c<o.length-1)&&this._shouldEnterAsFirstChild(e,t)&&(d=o[0]),d&&!this._dragDropRegistry.isDragging(d)){let m=d.getRootElement();m.parentElement.insertBefore(s,m),o.splice(c,0,i)}else this._element.appendChild(s),o.push(i);s.style.transform="",this._cacheItemPositions()}withItems(i){this._activeDraggables=i.slice(),this._cacheItemPositions()}withSortPredicate(i){this._sortPredicate=i}reset(){this._activeDraggables?.forEach(i=>{let e=i.getRootElement();if(e){let t=this._itemPositions.find(r=>r.drag===i)?.initialTransform;e.style.transform=t||""}}),this._itemPositions=[],this._activeDraggables=[],this._previousSwap.drag=null,this._previousSwap.delta=0,this._previousSwap.overlaps=!1}getActiveItemsSnapshot(){return this._activeDraggables}getItemIndex(i){return this._getVisualItemPositions().findIndex(e=>e.drag===i)}getItemAtIndex(i){return this._getVisualItemPositions()[i]?.drag||null}updateOnScroll(i,e){this._itemPositions.forEach(({clientRect:t})=>{Ko(t,i,e)}),this._itemPositions.forEach(({drag:t})=>{this._dragDropRegistry.isDragging(t)&&t._sortFromLastPointerPosition()})}withElementContainer(i){this._element=i}_cacheItemPositions(){let i=this.orientation==="horizontal";this._itemPositions=this._activeDraggables.map(e=>{let t=e.getVisibleElement();return{drag:e,offset:0,initialTransform:t.style.transform||"",clientRect:eu(t)}}).sort((e,t)=>i?e.clientRect.left-t.clientRect.left:e.clientRect.top-t.clientRect.top)}_getVisualItemPositions(){return this.orientation==="horizontal"&&this.direction==="rtl"?this._itemPositions.slice().reverse():this._itemPositions}_getItemOffsetPx(i,e,t){let r=this.orientation==="horizontal",o=r?e.left-i.left:e.top-i.top;return t===-1&&(o+=r?e.width-i.width:e.height-i.height),o}_getSiblingOffsetPx(i,e,t){let r=this.orientation==="horizontal",o=e[i].clientRect,a=e[i+t*-1],s=o[r?"width":"height"]*t;if(a){let c=r?"left":"top",d=r?"right":"bottom";t===-1?s-=a.clientRect[c]-o[d]:s+=o[c]-a.clientRect[d]}return s}_shouldEnterAsFirstChild(i,e){if(!this._activeDraggables.length)return!1;let t=this._itemPositions,r=this.orientation==="horizontal";if(t[0].drag!==this._activeDraggables[0]){let a=t[t.length-1].clientRect;return r?i>=a.right:e>=a.bottom}else{let a=t[0].clientRect;return r?i<=a.left:e<=a.top}}_getItemIndexFromPointerPosition(i,e,t,r){let o=this.orientation==="horizontal",a=this._itemPositions.findIndex(({drag:s,clientRect:c})=>{if(s===i)return!1;if(r){let d=o?r.x:r.y;if(s===this._previousSwap.drag&&this._previousSwap.overlaps&&d===this._previousSwap.delta)return!1}return o?e>=Math.floor(c.left)&&e<Math.floor(c.right):t>=Math.floor(c.top)&&t<Math.floor(c.bottom)});return a===-1||!this._sortPredicate(a,i)?-1:a}},Qd=class{_document;_dragDropRegistry;_element;_sortPredicate;_rootNode;_activeItems;_previousSwap={drag:null,deltaX:0,deltaY:0,overlaps:!1};_relatedNodes=[];constructor(i,e){this._document=i,this._dragDropRegistry=e}start(i){let e=this._element.childNodes;this._relatedNodes=[];for(let t=0;t<e.length;t++){let r=e[t];this._relatedNodes.push([r,r.nextSibling])}this.withItems(i)}sort(i,e,t,r){let o=this._getItemIndexFromPointerPosition(i,e,t),a=this._previousSwap;if(o===-1||this._activeItems[o]===i)return null;let s=this._activeItems[o];if(a.drag===s&&a.overlaps&&a.deltaX===r.x&&a.deltaY===r.y)return null;let c=this.getItemIndex(i),d=i.getPlaceholderElement(),m=s.getRootElement();o>c?m.after(d):m.before(d),yl(this._activeItems,c,o);let f=this._getRootNode().elementFromPoint(e,t);return a.deltaX=r.x,a.deltaY=r.y,a.drag=s,a.overlaps=m===f||m.contains(f),{previousIndex:c,currentIndex:o}}enter(i,e,t,r){let o=this._activeItems.indexOf(i);o>-1&&this._activeItems.splice(o,1);let a=r==null||r<0?this._getItemIndexFromPointerPosition(i,e,t):r;a===-1&&(a=this._getClosestItemIndexToPointer(i,e,t));let s=this._activeItems[a];s&&!this._dragDropRegistry.isDragging(s)?(this._activeItems.splice(a,0,i),s.getRootElement().before(i.getPlaceholderElement())):(this._activeItems.push(i),this._element.appendChild(i.getPlaceholderElement()))}withItems(i){this._activeItems=i.slice()}withSortPredicate(i){this._sortPredicate=i}reset(){let i=this._element,e=this._previousSwap;for(let t=this._relatedNodes.length-1;t>-1;t--){let[r,o]=this._relatedNodes[t];r.parentNode===i&&r.nextSibling!==o&&(o===null?i.appendChild(r):o.parentNode===i&&i.insertBefore(r,o))}this._relatedNodes=[],this._activeItems=[],e.drag=null,e.deltaX=e.deltaY=0,e.overlaps=!1}getActiveItemsSnapshot(){return this._activeItems}getItemIndex(i){return this._activeItems.indexOf(i)}getItemAtIndex(i){return this._activeItems[i]||null}updateOnScroll(){this._activeItems.forEach(i=>{this._dragDropRegistry.isDragging(i)&&i._sortFromLastPointerPosition()})}withElementContainer(i){i!==this._element&&(this._element=i,this._rootNode=void 0)}_getItemIndexFromPointerPosition(i,e,t){let r=this._getRootNode().elementFromPoint(Math.floor(e),Math.floor(t)),o=r?this._activeItems.findIndex(a=>{let s=a.getRootElement();return r===s||s.contains(r)}):-1;return o===-1||!this._sortPredicate(o,i)?-1:o}_getRootNode(){return this._rootNode||(this._rootNode=bi(this._element)||this._document),this._rootNode}_getClosestItemIndexToPointer(i,e,t){if(this._activeItems.length===0)return-1;if(this._activeItems.length===1)return 0;let r=1/0,o=-1;for(let a=0;a<this._activeItems.length;a++){let s=this._activeItems[a];if(s!==i){let{x:c,y:d}=s.getRootElement().getBoundingClientRect(),m=Math.hypot(e-c,t-d);m<r&&(r=m,o=a)}}return o}},wg=.05,xg=.05,Ht=(function(n){return n[n.NONE=0]="NONE",n[n.UP=1]="UP",n[n.DOWN=2]="DOWN",n})(Ht||{}),gt=(function(n){return n[n.NONE=0]="NONE",n[n.LEFT=1]="LEFT",n[n.RIGHT=2]="RIGHT",n})(gt||{});function cC(n,i){return new Jd(i,n.get(nu),n.get(F),n.get(B),n.get(Bt))}var Jd=class{_dragDropRegistry;_ngZone;_viewportRuler;element;disabled=!1;sortingDisabled=!1;lockAxis=null;autoScrollDisabled=!1;autoScrollStep=2;hasAnchor=!1;enterPredicate=()=>!0;sortPredicate=()=>!0;beforeStarted=new y;entered=new y;exited=new y;dropped=new y;sorted=new y;receivingStarted=new y;receivingStopped=new y;data;_container;_isDragging=!1;_parentPositions;_sortStrategy;_domRect;_draggables=[];_siblings=[];_activeSiblings=new Set;_viewportScrollSubscription=Ie.EMPTY;_verticalScrollDirection=Ht.NONE;_horizontalScrollDirection=gt.NONE;_scrollNode;_stopScrollTimers=new y;_cachedShadowRoot=null;_document;_scrollableElements=[];_initialScrollSnap;_direction="ltr";constructor(i,e,t,r,o){this._dragDropRegistry=e,this._ngZone=r,this._viewportRuler=o;let a=this.element=He(i);this._document=t,this.withOrientation("vertical").withElementContainer(a),e.registerDropContainer(this),this._parentPositions=new _l(t)}dispose(){this._stopScrolling(),this._stopScrollTimers.complete(),this._viewportScrollSubscription.unsubscribe(),this.beforeStarted.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this.sorted.complete(),this.receivingStarted.complete(),this.receivingStopped.complete(),this._activeSiblings.clear(),this._scrollNode=null,this._parentPositions.clear(),this._dragDropRegistry.removeDropContainer(this)}isDragging(){return this._isDragging}start(){this._draggingStarted(),this._notifyReceivingSiblings()}enter(i,e,t,r){this._draggingStarted(),r==null&&this.sortingDisabled&&(r=this._draggables.indexOf(i)),this._sortStrategy.enter(i,e,t,r),this._cacheParentPositions(),this._notifyReceivingSiblings(),this.entered.next({item:i,container:this,currentIndex:this.getItemIndex(i)})}exit(i){this._reset(),this.exited.next({item:i,container:this})}drop(i,e,t,r,o,a,s,c={}){this._reset(),this.dropped.next({item:i,currentIndex:e,previousIndex:t,container:this,previousContainer:r,isPointerOverContainer:o,distance:a,dropPoint:s,event:c})}withItems(i){let e=this._draggables;return this._draggables=i,i.forEach(t=>t._withDropContainer(this)),this.isDragging()&&(e.filter(r=>r.isDragging()).every(r=>i.indexOf(r)===-1)?this._reset():this._sortStrategy.withItems(this._draggables)),this}withDirection(i){return this._direction=i,this._sortStrategy instanceof bl&&(this._sortStrategy.direction=i),this}connectedTo(i){return this._siblings=i.slice(),this}withOrientation(i){if(i==="mixed")this._sortStrategy=new Qd(this._document,this._dragDropRegistry);else{let e=new bl(this._dragDropRegistry);e.direction=this._direction,e.orientation=i,this._sortStrategy=e}return this._sortStrategy.withElementContainer(this._container),this._sortStrategy.withSortPredicate((e,t)=>this.sortPredicate(e,t,this)),this}withScrollableParents(i){let e=this._container;return this._scrollableElements=i.indexOf(e)===-1?[e,...i]:i.slice(),this}withElementContainer(i){if(i===this._container)return this;let e=He(this.element),t=this._scrollableElements.indexOf(this._container),r=this._scrollableElements.indexOf(i);return t>-1&&this._scrollableElements.splice(t,1),r>-1&&this._scrollableElements.splice(r,1),this._sortStrategy&&this._sortStrategy.withElementContainer(i),this._cachedShadowRoot=null,this._scrollableElements.unshift(i),this._container=i,this}getScrollableParents(){return this._scrollableElements}getItemIndex(i){return this._isDragging?this._sortStrategy.getItemIndex(i):this._draggables.indexOf(i)}getItemAtIndex(i){return this._isDragging?this._sortStrategy.getItemAtIndex(i):this._draggables[i]||null}isReceiving(){return this._activeSiblings.size>0}_sortItem(i,e,t,r){if(this.sortingDisabled||!this._domRect||!ug(this._domRect,wg,e,t))return;let o=this._sortStrategy.sort(i,e,t,r);o&&this.sorted.next({previousIndex:o.previousIndex,currentIndex:o.currentIndex,container:this,item:i})}_startScrollingIfNecessary(i,e){if(this.autoScrollDisabled)return;let t,r=Ht.NONE,o=gt.NONE;if(this._parentPositions.positions.forEach((a,s)=>{s===this._document||!a.clientRect||t||ug(a.clientRect,wg,i,e)&&([r,o]=dC(s,a.clientRect,this._direction,i,e),(r||o)&&(t=s))}),!r&&!o){let{width:a,height:s}=this._viewportRuler.getViewportSize(),c={width:a,height:s,top:0,right:a,bottom:s,left:0};r=Mg(c,e),o=Eg(c,i),t=window}t&&(r!==this._verticalScrollDirection||o!==this._horizontalScrollDirection||t!==this._scrollNode)&&(this._verticalScrollDirection=r,this._horizontalScrollDirection=o,this._scrollNode=t,(r||o)&&t?this._ngZone.runOutsideAngular(this._startScrollInterval):this._stopScrolling())}_stopScrolling(){this._stopScrollTimers.next()}_draggingStarted(){let i=this._container.style;this.beforeStarted.next(),this._isDragging=!0,this._initialScrollSnap=i.msScrollSnapType||i.scrollSnapType||"",i.scrollSnapType=i.msScrollSnapType="none",this._sortStrategy.start(this._draggables),this._cacheParentPositions(),this._viewportScrollSubscription.unsubscribe(),this._listenToScrollEvents()}_cacheParentPositions(){this._parentPositions.cache(this._scrollableElements),this._domRect=this._parentPositions.positions.get(this._container).clientRect}_reset(){this._isDragging=!1;let i=this._container.style;i.scrollSnapType=i.msScrollSnapType=this._initialScrollSnap,this._siblings.forEach(e=>e._stopReceiving(this)),this._sortStrategy.reset(),this._stopScrolling(),this._viewportScrollSubscription.unsubscribe(),this._parentPositions.clear()}_startScrollInterval=()=>{this._stopScrolling(),uu(0,xl).pipe(le(this._stopScrollTimers)).subscribe(()=>{let i=this._scrollNode,e=this.autoScrollStep;this._verticalScrollDirection===Ht.UP?i.scrollBy(0,-e):this._verticalScrollDirection===Ht.DOWN&&i.scrollBy(0,e),this._horizontalScrollDirection===gt.LEFT?i.scrollBy(-e,0):this._horizontalScrollDirection===gt.RIGHT&&i.scrollBy(e,0)})};_isOverContainer(i,e){return this._domRect!=null&&Xd(this._domRect,i,e)}_getSiblingContainerFromPosition(i,e,t){return this._siblings.find(r=>r._canReceive(i,e,t))}_canReceive(i,e,t){if(!this._domRect||!Xd(this._domRect,e,t)||!this.enterPredicate(i,this))return!1;let r=this._getShadowRoot().elementFromPoint(e,t);return r?r===this._container||this._container.contains(r):!1}_startReceiving(i,e){let t=this._activeSiblings;!t.has(i)&&e.every(r=>this.enterPredicate(r,this)||this._draggables.indexOf(r)>-1)&&(t.add(i),this._cacheParentPositions(),this._listenToScrollEvents(),this.receivingStarted.next({initiator:i,receiver:this,items:e}))}_stopReceiving(i){this._activeSiblings.delete(i),this._viewportScrollSubscription.unsubscribe(),this.receivingStopped.next({initiator:i,receiver:this})}_listenToScrollEvents(){this._viewportScrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(i=>{if(this.isDragging()){let e=this._parentPositions.handleScroll(i);e&&this._sortStrategy.updateOnScroll(e.top,e.left)}else this.isReceiving()&&this._cacheParentPositions()})}_getShadowRoot(){if(!this._cachedShadowRoot){let i=bi(this._container);this._cachedShadowRoot=i||this._document}return this._cachedShadowRoot}_notifyReceivingSiblings(){let i=this._sortStrategy.getActiveItemsSnapshot().filter(e=>e.isDragging());this._siblings.forEach(e=>e._startReceiving(this,i))}};function Mg(n,i){let{top:e,bottom:t,height:r}=n,o=r*xg;return i>=e-o&&i<=e+o?Ht.UP:i>=t-o&&i<=t+o?Ht.DOWN:Ht.NONE}function Eg(n,i){let{left:e,right:t,width:r}=n,o=r*xg;return i>=e-o&&i<=e+o?gt.LEFT:i>=t-o&&i<=t+o?gt.RIGHT:gt.NONE}function dC(n,i,e,t,r){let o=Mg(i,r),a=Eg(i,t),s=Ht.NONE,c=gt.NONE;if(o){let d=n.scrollTop;o===Ht.UP?d>0&&(s=Ht.UP):n.scrollHeight-d>n.clientHeight&&(s=Ht.DOWN)}if(a){let d=n.scrollLeft;e==="rtl"?a===gt.RIGHT?d<0&&(c=gt.RIGHT):n.scrollWidth+d>n.clientWidth&&(c=gt.LEFT):a===gt.LEFT?d>0&&(c=gt.LEFT):n.scrollWidth-d>n.clientWidth&&(c=gt.RIGHT)}return[s,c]}var Cg=new b("CDK_DRAG_PARENT");var uC=new b("CdkDragHandle");var Ig=new b("CDK_DRAG_CONFIG"),Rg=new b("CdkDropList"),Tg=(()=>{class n{element=l(P);dropContainer=l(Rg,{optional:!0,skipSelf:!0});_ngZone=l(B);_viewContainerRef=l(lt);_dir=l(Ue,{optional:!0});_changeDetectorRef=l(te);_selfHandle=l(uC,{optional:!0,self:!0});_parentDrag=l(Cg,{optional:!0,skipSelf:!0});_dragDropRegistry=l(nu);_destroyed=new y;_handles=new Oe([]);_previewTemplate=null;_placeholderTemplate=null;_dragRef;data;lockAxis=null;rootElementSelector;boundaryElement;dragStartDelay;freeDragPosition;get disabled(){return this._disabled||!!(this.dropContainer&&this.dropContainer.disabled)}set disabled(e){this._disabled=e,this._dragRef.disabled=this._disabled}_disabled=!1;constrainPosition;previewClass;previewContainer;scale=1;started=new N;released=new N;ended=new N;entered=new N;exited=new N;dropped=new N;moved=new at(e=>{let t=this._dragRef.moved.pipe(X(r=>({source:this,pointerPosition:r.pointerPosition,event:r.event,delta:r.delta,distance:r.distance}))).subscribe(e);return()=>{t.unsubscribe()}});_injector=l(z);constructor(){let e=this.dropContainer,t=l(Ig,{optional:!0});this._dragRef=sC(this._injector,this.element,{dragStartThreshold:t&&t.dragStartThreshold!=null?t.dragStartThreshold:5,pointerDirectionChangeThreshold:t&&t.pointerDirectionChangeThreshold!=null?t.pointerDirectionChangeThreshold:5,zIndex:t?.zIndex}),this._dragRef.data=this,this._dragDropRegistry.registerDirectiveNode(this.element.nativeElement,this),t&&this._assignDefaults(t),e&&(e.addItem(this),e._dropListRef.beforeStarted.pipe(le(this._destroyed)).subscribe(()=>{this._dragRef.scale=this.scale})),this._syncInputs(this._dragRef),this._handleEvents(this._dragRef)}getPlaceholderElement(){return this._dragRef.getPlaceholderElement()}getRootElement(){return this._dragRef.getRootElement()}reset(){this._dragRef.reset()}resetToBoundary(){this._dragRef.resetToBoundary()}getFreeDragPosition(){return this._dragRef.getFreeDragPosition()}setFreeDragPosition(e){this._dragRef.setFreeDragPosition(e)}ngAfterViewInit(){Ve(()=>{this._updateRootElement(),this._setupHandlesListener(),this._dragRef.scale=this.scale,this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)},{injector:this._injector})}ngOnChanges(e){let t=e.rootElementSelector,r=e.freeDragPosition;t&&!t.firstChange&&this._updateRootElement(),this._dragRef.scale=this.scale,r&&!r.firstChange&&this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)}ngOnDestroy(){this.dropContainer&&this.dropContainer.removeItem(this),this._dragDropRegistry.removeDirectiveNode(this.element.nativeElement),this._ngZone.runOutsideAngular(()=>{this._handles.complete(),this._destroyed.next(),this._destroyed.complete(),this._dragRef.dispose()})}_addHandle(e){let t=this._handles.getValue();t.push(e),this._handles.next(t)}_removeHandle(e){let t=this._handles.getValue(),r=t.indexOf(e);r>-1&&(t.splice(r,1),this._handles.next(t))}_setPreviewTemplate(e){this._previewTemplate=e}_resetPreviewTemplate(e){e===this._previewTemplate&&(this._previewTemplate=null)}_setPlaceholderTemplate(e){this._placeholderTemplate=e}_resetPlaceholderTemplate(e){e===this._placeholderTemplate&&(this._placeholderTemplate=null)}_updateRootElement(){let e=this.element.nativeElement,t=e;this.rootElementSelector&&(t=e.closest!==void 0?e.closest(this.rootElementSelector):e.parentElement?.closest(this.rootElementSelector)),this._dragRef.withRootElement(t||e)}_getBoundaryElement(){let e=this.boundaryElement;return e?typeof e=="string"?this.element.nativeElement.closest(e):He(e):null}_syncInputs(e){e.beforeStarted.subscribe(()=>{if(!e.isDragging()){let t=this._dir,r=this.dragStartDelay,o=this._placeholderTemplate?{template:this._placeholderTemplate.templateRef,context:this._placeholderTemplate.data,viewContainer:this._viewContainerRef}:null,a=this._previewTemplate?{template:this._previewTemplate.templateRef,context:this._previewTemplate.data,matchSize:this._previewTemplate.matchSize,viewContainer:this._viewContainerRef}:null;e.disabled=this.disabled,e.lockAxis=this.lockAxis,e.scale=this.scale,e.dragStartDelay=typeof r=="object"&&r?r:Lt(r),e.constrainPosition=this.constrainPosition,e.previewClass=this.previewClass,e.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(o).withPreviewTemplate(a).withPreviewContainer(this.previewContainer||"global"),t&&e.withDirection(t.value)}}),e.beforeStarted.pipe(xe(1)).subscribe(()=>{if(this._parentDrag){e.withParent(this._parentDrag._dragRef);return}let t=this.element.nativeElement.parentElement;for(;t;){let r=this._dragDropRegistry.getDragDirectiveForNode(t);if(r){e.withParent(r._dragRef);break}t=t.parentElement}})}_handleEvents(e){e.started.subscribe(t=>{this.started.emit({source:this,event:t.event}),this._changeDetectorRef.markForCheck()}),e.released.subscribe(t=>{this.released.emit({source:this,event:t.event})}),e.ended.subscribe(t=>{this.ended.emit({source:this,distance:t.distance,dropPoint:t.dropPoint,event:t.event}),this._changeDetectorRef.markForCheck()}),e.entered.subscribe(t=>{this.entered.emit({container:t.container.data,item:this,currentIndex:t.currentIndex})}),e.exited.subscribe(t=>{this.exited.emit({container:t.container.data,item:this})}),e.dropped.subscribe(t=>{this.dropped.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,previousContainer:t.previousContainer.data,container:t.container.data,isPointerOverContainer:t.isPointerOverContainer,item:this,distance:t.distance,dropPoint:t.dropPoint,event:t.event})})}_assignDefaults(e){let{lockAxis:t,dragStartDelay:r,constrainPosition:o,previewClass:a,boundaryElement:s,draggingDisabled:c,rootElementSelector:d,previewContainer:m}=e;this.disabled=c??!1,this.dragStartDelay=r||0,this.lockAxis=t||null,o&&(this.constrainPosition=o),a&&(this.previewClass=a),s&&(this.boundaryElement=s),d&&(this.rootElementSelector=d),m&&(this.previewContainer=m)}_setupHandlesListener(){this._handles.pipe(Ke(e=>{let t=e.map(r=>r.element);this._selfHandle&&this.rootElementSelector&&t.push(this.element),this._dragRef.withHandles(t)}),Ee(e=>dt(...e.map(t=>t._stateChanges.pipe(Ge(t))))),le(this._destroyed)).subscribe(e=>{let t=this._dragRef,r=e.element.nativeElement;e.disabled?t.disableHandle(r):t.enableHandle(r)})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["","cdkDrag",""]],hostAttrs:[1,"cdk-drag"],hostVars:4,hostBindings:function(t,r){t&2&&T("cdk-drag-disabled",r.disabled)("cdk-drag-dragging",r._dragRef.isDragging())},inputs:{data:[0,"cdkDragData","data"],lockAxis:[0,"cdkDragLockAxis","lockAxis"],rootElementSelector:[0,"cdkDragRootElement","rootElementSelector"],boundaryElement:[0,"cdkDragBoundary","boundaryElement"],dragStartDelay:[0,"cdkDragStartDelay","dragStartDelay"],freeDragPosition:[0,"cdkDragFreeDragPosition","freeDragPosition"],disabled:[2,"cdkDragDisabled","disabled",A],constrainPosition:[0,"cdkDragConstrainPosition","constrainPosition"],previewClass:[0,"cdkDragPreviewClass","previewClass"],previewContainer:[0,"cdkDragPreviewContainer","previewContainer"],scale:[2,"cdkDragScale","scale",Tt]},outputs:{started:"cdkDragStarted",released:"cdkDragReleased",ended:"cdkDragEnded",entered:"cdkDragEntered",exited:"cdkDragExited",dropped:"cdkDragDropped",moved:"cdkDragMoved"},exportAs:["cdkDrag"],features:[Te([{provide:Cg,useExisting:n}]),Fe]})}return n})(),Dg=new b("CdkDropListGroup");var kg=(()=>{class n{element=l(P);_changeDetectorRef=l(te);_scrollDispatcher=l(ln);_dir=l(Ue,{optional:!0});_group=l(Dg,{optional:!0,skipSelf:!0});_latestSortedRefs;_destroyed=new y;_scrollableParentsResolved=!1;static _dropLists=[];_dropListRef;connectedTo=[];data;orientation="vertical";id=l(ve).getId("cdk-drop-list-");lockAxis=null;get disabled(){return this._disabled||!!this._group&&this._group.disabled}set disabled(e){this._dropListRef.disabled=this._disabled=e}_disabled=!1;sortingDisabled=!1;enterPredicate=()=>!0;sortPredicate=()=>!0;autoScrollDisabled=!1;autoScrollStep;elementContainerSelector=null;hasAnchor=!1;dropped=new N;entered=new N;exited=new N;sorted=new N;_unsortedItems=new Set;constructor(){let e=l(Ig,{optional:!0}),t=l(z);this._dropListRef=cC(t,this.element),this._dropListRef.data=this,e&&this._assignDefaults(e),this._dropListRef.enterPredicate=(r,o)=>this.enterPredicate(r.data,o.data),this._dropListRef.sortPredicate=(r,o,a)=>this.sortPredicate(r,o.data,a.data),this._setupInputSyncSubscription(this._dropListRef),this._handleEvents(this._dropListRef),n._dropLists.push(this),this._group&&this._group._items.add(this)}addItem(e){this._unsortedItems.add(e),e._dragRef._withDropContainer(this._dropListRef),this._dropListRef.isDragging()&&this._syncItemsWithRef(this.getSortedItems().map(t=>t._dragRef))}removeItem(e){if(this._unsortedItems.delete(e),this._latestSortedRefs){let t=this._latestSortedRefs.indexOf(e._dragRef);t>-1&&(this._latestSortedRefs.splice(t,1),this._syncItemsWithRef(this._latestSortedRefs))}}getSortedItems(){return Array.from(this._unsortedItems).sort((e,t)=>e._dragRef.getVisibleElement().compareDocumentPosition(t._dragRef.getVisibleElement())&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)}ngOnDestroy(){let e=n._dropLists.indexOf(this);e>-1&&n._dropLists.splice(e,1),this._group&&this._group._items.delete(this),this._latestSortedRefs=void 0,this._unsortedItems.clear(),this._dropListRef.dispose(),this._destroyed.next(),this._destroyed.complete()}_setupInputSyncSubscription(e){this._dir&&this._dir.change.pipe(Ge(this._dir.value),le(this._destroyed)).subscribe(t=>e.withDirection(t)),e.beforeStarted.subscribe(()=>{let t=Un(this.connectedTo).map(r=>{if(typeof r=="string"){let o=n._dropLists.find(a=>a.id===r);return o}return r});if(this._group&&this._group._items.forEach(r=>{t.indexOf(r)===-1&&t.push(r)}),!this._scrollableParentsResolved){let r=this._scrollDispatcher.getAncestorScrollContainers(this.element).map(o=>o.getElementRef().nativeElement);this._dropListRef.withScrollableParents(r),this._scrollableParentsResolved=!0}if(this.elementContainerSelector){let r=this.element.nativeElement.querySelector(this.elementContainerSelector);e.withElementContainer(r)}e.disabled=this.disabled,e.lockAxis=this.lockAxis,e.sortingDisabled=this.sortingDisabled,e.autoScrollDisabled=this.autoScrollDisabled,e.autoScrollStep=Lt(this.autoScrollStep,2),e.hasAnchor=this.hasAnchor,e.connectedTo(t.filter(r=>r&&r!==this).map(r=>r._dropListRef)).withOrientation(this.orientation)})}_handleEvents(e){e.beforeStarted.subscribe(()=>{this._syncItemsWithRef(this.getSortedItems().map(t=>t._dragRef)),this._changeDetectorRef.markForCheck()}),e.entered.subscribe(t=>{this.entered.emit({container:this,item:t.item.data,currentIndex:t.currentIndex})}),e.exited.subscribe(t=>{this.exited.emit({container:this,item:t.item.data}),this._changeDetectorRef.markForCheck()}),e.sorted.subscribe(t=>{this.sorted.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,container:this,item:t.item.data})}),e.dropped.subscribe(t=>{this.dropped.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,previousContainer:t.previousContainer.data,container:t.container.data,item:t.item.data,isPointerOverContainer:t.isPointerOverContainer,distance:t.distance,dropPoint:t.dropPoint,event:t.event}),this._changeDetectorRef.markForCheck()}),dt(e.receivingStarted,e.receivingStopped).subscribe(()=>this._changeDetectorRef.markForCheck())}_assignDefaults(e){let{lockAxis:t,draggingDisabled:r,sortingDisabled:o,listAutoScrollDisabled:a,listOrientation:s}=e;this.disabled=r??!1,this.sortingDisabled=o??!1,this.autoScrollDisabled=a??!1,this.orientation=s||"vertical",this.lockAxis=t||null}_syncItemsWithRef(e){this._latestSortedRefs=e,this._dropListRef.withItems(e)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["","cdkDropList",""],["cdk-drop-list"]],hostAttrs:[1,"cdk-drop-list"],hostVars:7,hostBindings:function(t,r){t&2&&(Z("id",r.id),T("cdk-drop-list-disabled",r.disabled)("cdk-drop-list-dragging",r._dropListRef.isDragging())("cdk-drop-list-receiving",r._dropListRef.isReceiving()))},inputs:{connectedTo:[0,"cdkDropListConnectedTo","connectedTo"],data:[0,"cdkDropListData","data"],orientation:[0,"cdkDropListOrientation","orientation"],id:"id",lockAxis:[0,"cdkDropListLockAxis","lockAxis"],disabled:[2,"cdkDropListDisabled","disabled",A],sortingDisabled:[2,"cdkDropListSortingDisabled","sortingDisabled",A],enterPredicate:[0,"cdkDropListEnterPredicate","enterPredicate"],sortPredicate:[0,"cdkDropListSortPredicate","sortPredicate"],autoScrollDisabled:[2,"cdkDropListAutoScrollDisabled","autoScrollDisabled",A],autoScrollStep:[0,"cdkDropListAutoScrollStep","autoScrollStep"],elementContainerSelector:[0,"cdkDropListElementContainer","elementContainerSelector"],hasAnchor:[2,"cdkDropListHasAnchor","hasAnchor",A]},outputs:{dropped:"cdkDropListDropped",entered:"cdkDropListEntered",exited:"cdkDropListExited",sorted:"cdkDropListSorted"},exportAs:["cdkDropList"],features:[Te([{provide:Dg,useValue:void 0},{provide:Rg,useExisting:n}])]})}return n})();var iu=class{_box;_destroyed=new y;_resizeSubject=new y;_resizeObserver;_elementObservables=new Map;constructor(i){this._box=i,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(i){return this._elementObservables.has(i)||this._elementObservables.set(i,new at(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(i,{box:this._box}),()=>{this._resizeObserver?.unobserve(i),t.unsubscribe(),this._elementObservables.delete(i)}}).pipe(ue(e=>e.some(t=>t.target===i)),kl({bufferSize:1,refCount:!0}),le(this._destroyed))),this._elementObservables.get(i)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Ag=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=l(B);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let r=t?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new iu(r)),this._observers.get(r).observe(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var hC=["notch"],mC=["matFormFieldNotchedOutline",""],pC=["*"],Pg=["iconPrefixContainer"],Og=["textPrefixContainer"],Fg=["iconSuffixContainer"],Ng=["textSuffixContainer"],fC=["textField"],gC=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],_C=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function vC(n,i){n&1&&q(0,"span",21)}function bC(n,i){if(n&1&&(u(0,"label",20),K(1,1),G(2,vC,1,0,"span",21),h()),n&2){let e=k(2);D("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),Z("for",e._control.disableAutomaticLabeling?null:e._control.id),p(2),$(!e.hideRequiredMarker&&e._control.required?2:-1)}}function yC(n,i){if(n&1&&G(0,bC,3,5,"label",20),n&2){let e=k();$(e._hasFloatingLabel()?0:-1)}}function wC(n,i){n&1&&q(0,"div",7)}function CC(n,i){}function DC(n,i){if(n&1&&he(0,CC,0,0,"ng-template",13),n&2){k(2);let e=it(1);D("ngTemplateOutlet",e)}}function SC(n,i){if(n&1&&(u(0,"div",9),G(1,DC,1,1,null,13),h()),n&2){let e=k();D("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),p(),$(e._forceDisplayInfixLabel()?-1:1)}}function xC(n,i){n&1&&(u(0,"div",10,2),K(2,2),h())}function MC(n,i){n&1&&(u(0,"div",11,3),K(2,3),h())}function EC(n,i){}function IC(n,i){if(n&1&&he(0,EC,0,0,"ng-template",13),n&2){k();let e=it(1);D("ngTemplateOutlet",e)}}function RC(n,i){n&1&&(u(0,"div",14,4),K(2,4),h())}function TC(n,i){n&1&&(u(0,"div",15,5),K(2,5),h())}function kC(n,i){n&1&&q(0,"div",16)}function AC(n,i){n&1&&(u(0,"div",18),K(1,6),h())}function PC(n,i){if(n&1&&(u(0,"mat-hint",22),g(1),h()),n&2){let e=k(2);D("id",e._hintLabelId),p(),ae(e.hintLabel)}}function OC(n,i){if(n&1&&(u(0,"div",19),G(1,PC,2,2,"mat-hint",22),K(2,7),q(3,"div",23),K(4,8),h()),n&2){let e=k();p(),$(e.hintLabel?1:-1)}}var Jo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["mat-label"]]})}return n})(),FC=new b("MatError");var ea=(()=>{class n{align="start";id=l(ve).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,r){t&2&&(Rt("id",r.id),Z("align",null),T("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return n})(),NC=new b("MatPrefix");var LC=new b("MatSuffix");var Ug=new b("FloatingLabelParent"),Lg=(()=>{class n{_elementRef=l(P);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=l(Ag);_ngZone=l(B);_parent=l(Ug);_resizeSubscription=new Ie;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return BC(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,r){t&2&&T("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return n})();function BC(n){let i=n;if(i.offsetParent!==null)return i.scrollWidth;let e=i.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var Bg="mdc-line-ripple--active",wl="mdc-line-ripple--deactivating",Vg=(()=>{class n{_elementRef=l(P);_cleanupTransitionEnd;constructor(){let e=l(B),t=l(me);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(wl),e.add(Bg)}deactivate(){this._elementRef.nativeElement.classList.add(wl)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,r=t.contains(wl);e.propertyName==="opacity"&&r&&t.remove(Bg,wl)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return n})(),jg=(()=>{class n{_elementRef=l(P);_ngZone=l(B);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=w({type:n,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,r){if(t&1&&Ye(hC,5),t&2){let o;J(o=ee())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,r){t&2&&T("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:mC,ngContentSelectors:pC,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,r){t&1&&(De(),We(0,"div",1),$e(1,"div",2,0),K(3),Qe(),We(4,"div",3))},encapsulation:2,changeDetection:0})}return n})(),ta=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n})}return n})();var na=new b("MatFormField"),VC=new b("MAT_FORM_FIELD_DEFAULT_OPTIONS"),zg="fill",jC="auto",Hg="fixed",zC="translateY(-50%)",Cl=(()=>{class n{_elementRef=l(P);_changeDetectorRef=l(te);_platform=l(ce);_idGenerator=l(ve);_ngZone=l(B);_defaults=l(VC,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Wr("iconPrefixContainer");_textPrefixContainerSignal=Wr("textPrefixContainer");_iconSuffixContainerSignal=Wr("iconSuffixContainer");_textSuffixContainerSignal=Wr("textSuffixContainer");_prefixSuffixContainers=Be(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Yu(Jo);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=An(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||jC}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||zg;this._appearanceSignal.set(t)}_appearanceSignal=j(zg);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Hg}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Hg}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new y;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Me();constructor(){let e=this._defaults,t=l(Ue);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Ft(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Be(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(r+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(Ge([void 0,void 0]),X(()=>[t.errorState,t.userAriaDescribedBy]),Tl(),ue(([[o,a],[s,c]])=>o!==s||a!==c)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(le(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),dt(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Ku({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Be(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let t=this._control.describedByIds,r;if(t){let o=this._describedByIds||e;r=e.concat(t.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=t?.getBoundingClientRect().width??0,c=r?.getBoundingClientRect().width??0,d=o?.getBoundingClientRect().width??0,m=this._currentDirection==="rtl"?"-1":"1",f=`${a+s}px`,H=`calc(${m} * (${f} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,Y=`var(--mat-mdc-form-field-label-transform, ${zC} translateX(${H}))`,Q=a+s+c+d;return[Y,Q]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=w({type:n,selectors:[["mat-form-field"]],contentQueries:function(t,r,o){if(t&1&&(ju(o,r._labelChild,Jo,5),Ut(o,ta,5)(o,NC,5)(o,LC,5)(o,FC,5)(o,ea,5)),t&2){Nl();let a;J(a=ee())&&(r._formFieldControl=a.first),J(a=ee())&&(r._prefixChildren=a),J(a=ee())&&(r._suffixChildren=a),J(a=ee())&&(r._errorChildren=a),J(a=ee())&&(r._hintChildren=a)}},viewQuery:function(t,r){if(t&1&&(zu(r._iconPrefixContainerSignal,Pg,5)(r._textPrefixContainerSignal,Og,5)(r._iconSuffixContainerSignal,Fg,5)(r._textSuffixContainerSignal,Ng,5),Ye(fC,5)(Pg,5)(Og,5)(Fg,5)(Ng,5)(Lg,5)(jg,5)(Vg,5)),t&2){Nl(4);let o;J(o=ee())&&(r._textField=o.first),J(o=ee())&&(r._iconPrefixContainer=o.first),J(o=ee())&&(r._textPrefixContainer=o.first),J(o=ee())&&(r._iconSuffixContainer=o.first),J(o=ee())&&(r._textSuffixContainer=o.first),J(o=ee())&&(r._floatingLabel=o.first),J(o=ee())&&(r._notchedOutline=o.first),J(o=ee())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,r){t&2&&T("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Te([{provide:na,useExisting:n},{provide:Ug,useExisting:n}])],ngContentSelectors:_C,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,r){if(t&1&&(De(gC),he(0,yC,1,1,"ng-template",null,0,Gu),u(2,"div",6,1),x("click",function(a){return r._control.onContainerClick(a)}),G(4,wC,1,0,"div",7),u(5,"div",8),G(6,SC,2,2,"div",9),G(7,xC,3,0,"div",10),G(8,MC,3,0,"div",11),u(9,"div",12),G(10,IC,1,1,null,13),K(11),h(),G(12,RC,3,0,"div",14),G(13,TC,3,0,"div",15),h(),G(14,kC,1,0,"div",16),h(),u(15,"div",17),G(16,AC,2,0,"div",18)(17,OC,5,1,"div",19),h()),t&2){let o;p(2),T("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),p(2),$(!r._hasOutline()&&!r._control.disabled?4:-1),p(2),$(r._hasOutline()?6:-1),p(),$(r._hasIconPrefix?7:-1),p(),$(r._hasTextPrefix?8:-1),p(2),$(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),p(2),$(r._hasTextSuffix?12:-1),p(),$(r._hasIconSuffix?13:-1),p(),$(r._hasOutline()?-1:14),p(),T("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();p(),$((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[Lg,jg,Yl,Vg,ea],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return n})();var ji=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=O({imports:[La,Cl,re]})}return n})();var UC=["trigger"],GC=["panel"],$C=[[["mat-select-trigger"]],"*"],WC=["mat-select-trigger","*"];function qC(n,i){if(n&1&&(u(0,"span",4),g(1),h()),n&2){let e=k();p(),ae(e.placeholder)}}function YC(n,i){n&1&&K(0)}function XC(n,i){if(n&1&&(u(0,"span",11),g(1),h()),n&2){let e=k(2);p(),ae(e.triggerValue)}}function ZC(n,i){if(n&1&&(u(0,"span",5),G(1,YC,1,0)(2,XC,2,1,"span",11),h()),n&2){let e=k();p(),$(e.customTrigger?1:2)}}function KC(n,i){if(n&1){let e=Re();u(0,"div",12,1),x("keydown",function(r){we(e);let o=k();return Ce(o._handleKeydown(r))}),K(2,1),h()}if(n&2){let e=k();rt(e.panelClass),T("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),Z("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var QC=new b("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let n=l(z);return()=>kn(n)}}),JC=new b("MAT_SELECT_CONFIG"),eD=new b("MatSelectTrigger"),ru=class{source;value;constructor(i,e){this.source=i,this.value=e}},Gg=(()=>{class n{_viewportRuler=l(Bt);_changeDetectorRef=l(te);_elementRef=l(P);_dir=l(Ue,{optional:!0});_idGenerator=l(ve);_renderer=l(me);_parentFormField=l(na,{optional:!0});ngControl=l(Jt,{self:!0,optional:!0});_liveAnnouncer=l(co);_defaultOptions=l(JC,{optional:!0});_animationsDisabled=Me();_popoverLocation;_initialized=new y;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let r=this.panel.nativeElement,o=Vp(e,this.options,this.optionGroups),a=t._getHostElement();e===0&&o===1?r.scrollTop=0:r.scrollTop=jp(a.offsetTop,a.offsetHeight,r.scrollTop,r.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new ru(this,e)}_scrollStrategyFactory=l(QC);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new y;_errorStateTracker;stateChanges=new y;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=j(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Pr.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=tn(()=>{let e=this.options;return e?e.changes.pipe(Ge(e),Ee(()=>dt(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(Ee(()=>this.optionSelectionChanges))});openedChange=new N;_openedStream=this.openedChange.pipe(ue(e=>e),X(()=>{}));_closedStream=this.openedChange.pipe(ue(e=>!e),X(()=>{}));selectionChange=new N;valueChange=new N;constructor(){let e=l(Ns),t=l(Yo,{optional:!0}),r=l(Bi,{optional:!0}),o=l(new rn("tabindex"),{optional:!0}),a=l(go,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Ir(e,this.ngControl,r,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=a?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new Vi(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(le(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(le(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(Ge(null),le(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let r=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?r.setAttribute("aria-labelledby",e):r.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(xe(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&Ha(this._trackedModal,"aria-owns",t),bc(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;Ha(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(r),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),r=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,r=t===40||t===38||t===37||t===39,o=t===13||t===32,a=this._keyManager;if(!a.isTyping()&&o&&!Xe(e)||(this.multiple||e.altKey)&&r)e.preventDefault(),this.open();else if(!this.multiple){let s=this.selected;a.onKeydown(e);let c=this.selected;c&&s!==c&&this._liveAnnouncer.announce(c.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,r=e.keyCode,o=r===40||r===38,a=t.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!a&&(r===13||r===32)&&t.activeItem&&!Xe(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!a&&this._multiple&&r===65&&e.ctrlKey){e.preventDefault();let s=this.options.some(c=>!c.disabled&&!c.selected);this.options.forEach(c=>{c.disabled||(s?c.select():c.deselect())})}else{let s=t.activeItemIndex;t.onKeydown(e),this._multiple&&o&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==s&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Xe(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(r=>{if(this._selectionModel.isSelected(r))return!1;try{return(r.value!=null||this.canSelectNullableOptions)&&this._compareWith(r.value,e)}catch(o){return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof or?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new uo(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=dt(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(le(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),dt(...this.options.map(t=>t._stateChanges)).pipe(le(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let r=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(r!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),r!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,r)=>this.sortComparator?this.sortComparator(t,r,e):e.indexOf(t)-e.indexOf(r)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(r=>r.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=ze(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=w({type:n,selectors:[["mat-select"]],contentQueries:function(t,r,o){if(t&1&&Ut(o,eD,5)(o,Er,5)(o,yd,5),t&2){let a;J(a=ee())&&(r.customTrigger=a.first),J(a=ee())&&(r.options=a),J(a=ee())&&(r.optionGroups=a)}},viewQuery:function(t,r){if(t&1&&Ye(UC,5)(GC,5)(Qa,5),t&2){let o;J(o=ee())&&(r.trigger=o.first),J(o=ee())&&(r.panel=o.first),J(o=ee())&&(r._overlayDir=o.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,r){t&1&&x("keydown",function(a){return r._handleKeydown(a)})("focus",function(){return r._onFocus()})("blur",function(){return r._onBlur()}),t&2&&(Z("id",r.id)("tabindex",r.disabled?-1:r.tabIndex)("aria-controls",r.panelOpen?r.id+"-panel":null)("aria-expanded",r.panelOpen)("aria-label",r.ariaLabel||null)("aria-required",r.required.toString())("aria-disabled",r.disabled.toString())("aria-invalid",r.errorState)("aria-activedescendant",r._getAriaActiveDescendant()),T("mat-mdc-select-disabled",r.disabled)("mat-mdc-select-invalid",r.errorState)("mat-mdc-select-required",r.required)("mat-mdc-select-empty",r.empty)("mat-mdc-select-multiple",r.multiple)("mat-select-open",r.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",A],disableRipple:[2,"disableRipple","disableRipple",A],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Tt(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",A],placeholder:"placeholder",required:[2,"required","required",A],multiple:[2,"multiple","multiple",A],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",A],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",Tt],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",A]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[Te([{provide:ta,useExisting:n},{provide:bd,useExisting:n}]),Fe],ngContentSelectors:WC,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,r){if(t&1&&(De($C),u(0,"div",2,0),x("click",function(){return r.open()}),u(3,"div",3),G(4,qC,2,1,"span",4)(5,ZC,3,1,"span",5),h(),u(6,"div",6)(7,"div",7),Ui(),u(8,"svg",8),q(9,"path",9),h()()()(),he(10,KC,3,16,"ng-template",10),x("detach",function(){return r.close()})("backdropClick",function(){return r.close()})("overlayKeydown",function(a){return r._handleOverlayKeydown(a)})),t&2){let o=it(1);p(3),Z("id",r._valueId),p(),$(r.empty?4:5),p(6),D("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",r._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",r._scrollStrategy)("cdkConnectedOverlayOrigin",r._preferredOverlayOrigin||o)("cdkConnectedOverlayPositions",r._positions)("cdkConnectedOverlayWidth",r._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",r._popoverLocation)}},dependencies:[or,Qa],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2,changeDetection:0})}return n})();var $g=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=O({imports:[Vt,wd,re,sn,ji,wd]})}return n})();var nD=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=w({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return n})(),iD={passive:!0},Wg=(()=>{class n{_platform=l(ce);_ngZone=l(B);_renderer=l(je).createRenderer(null,null);_styleLoader=l(Ne);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return vt;this._styleLoader.load(nD);let t=He(e),r=this._monitoredElements.get(t);if(r)return r.subject;let o=new y,a="cdk-text-field-autofilled",s=d=>{d.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(a)?(t.classList.add(a),this._ngZone.run(()=>o.next({target:d.target,isAutofilled:!0}))):d.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(a)&&(t.classList.remove(a),this._ngZone.run(()=>o.next({target:d.target,isAutofilled:!1})))},c=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",s,iD)));return this._monitoredElements.set(t,{subject:o,unlisten:c}),o}stopMonitoring(e){let t=He(e),r=this._monitoredElements.get(t);r&&(r.unlisten(),r.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var qg=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=O({})}return n})();var Yg=new b("MAT_INPUT_VALUE_ACCESSOR");var rD=["button","checkbox","file","hidden","image","radio","range","reset","submit"],oD=new b("MAT_INPUT_CONFIG"),Xg=(()=>{class n{_elementRef=l(P);_platform=l(ce);ngControl=l(Jt,{optional:!0,self:!0});_autofillMonitor=l(Wg);_ngZone=l(B);_formField=l(na,{optional:!0});_renderer=l(me);_uid=l(ve).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=l(oD,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new y;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=An(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Pr.required)??!1}set required(e){this._required=An(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Ic().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=An(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Ic().has(e));constructor(){let e=l(Yo,{optional:!0}),t=l(Bi,{optional:!0}),r=l(Ns),o=l(Yg,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();o?zn(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Ir(r,this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&Ft(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){rD.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,r){t&1&&x("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),t&2&&(Rt("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),Z("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),T("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",A]},exportAs:["matInput"],features:[Te([{provide:ta,useExisting:n}]),Fe]})}return n})(),Zg=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=O({imports:[ji,ji,qg,re]})}return n})();function sD(n,i){n&1&&(u(0,"mat-hint",8),g(1," Mindestens ein menschlicher Spieler wird ben\xF6tigt. "),h())}function lD(n,i){if(n&1&&(u(0,"mat-option",6),g(1),h()),n&2){let e=i.$implicit;D("value",e),p(),ae(e)}}function cD(n,i){if(n&1&&(u(0,"mat-form-field",10)(1,"mat-label"),g(2,"Max Rounds"),h(),u(3,"mat-select",18),Gr(4,lD,2,2,"mat-option",6,Vu),h()()),n&2){let e=k();p(4),$r(e.roundOptions)}}function dD(n,i){n&1&&(u(0,"mat-hint",22),g(1," fill with name please! "),h())}function uD(n,i){if(n&1&&(u(0,"mat-form-field",23)(1,"mat-label"),g(2,"KI-Difficulty"),h(),u(3,"mat-select",26)(4,"mat-option",6),g(5,"Leicht"),h(),u(6,"mat-option",6),g(7,"Mittel"),h(),u(8,"mat-option",6),g(9,"Schwer"),h()()()),n&2){let e=k(2);p(4),D("value",e.difficulty.Easy),p(2),D("value",e.difficulty.Medium),p(2),D("value",e.difficulty.Hard)}}function hD(n,i){if(n&1){let e=Re();u(0,"div",15)(1,"mat-form-field",10)(2,"mat-label"),g(3),h(),u(4,"div",19),q(5,"input",20,0),u(7,"button",21),x("click",function(){let r=we(e).$index,o=k();return Ce(o.removePlayerName(r))}),u(8,"mat-icon"),g(9,"close"),h()()(),G(10,dD,2,0,"mat-hint",22),h(),G(11,uD,10,3,"mat-form-field",23),u(12,"div",24),g(13),h(),u(14,"button",25),x("click",function(r){return r.preventDefault()}),u(15,"mat-icon"),g(16," reorder "),h()()()}if(n&2){let e,t=i.$implicit,r=i.$index,o=it(6),a=k();D("formGroupName",r),p(3),ie("Player ",r+1),p(2),D("id",fi("playerName-",r)),p(5),$(o.value===""?10:-1),p(),$((e=t.get("isAI"))!=null&&e.value?11:-1),p(2),ie(" ",a.getWins(t==null?null:t.value)," ")}}function mD(n,i){if(n&1){let e=Re();u(0,"button",27),x("click",function(){we(e);let r=k();return Ce(r.scrollToTop())}),u(1,"mat-icon"),g(2,"arrow_upward"),h()()}}function pD(n,i){if(n&1){let e=Re();u(0,"button",28),x("click",function(){we(e);let r=k();return Ce(r.scrollToBottom())}),u(1,"mat-icon"),g(2,"arrow_downward"),h()()}}var Kg=(()=>{class n{constructor(){this.gameType=M,this.difficulty=tt,this.fb=l(Wf),this.router=l(ot),this.cdr=l(te),this.showScrollTopButton=!1,this.showScrollBottomButton=!1,this.formGroup=this.fb.group({gameType:this.fb.control(M.Simple501),playerNames:this.fb.array([this.fb.group({name:this.fb.control("first"),isAI:this.fb.control(!1),difficulty:this.fb.control(tt.Medium),wins:0}),this.fb.group({name:this.fb.control("second"),isAI:this.fb.control(!1),difficulty:this.fb.control(tt.Medium),wins:0})]),maxRounds:this.fb.control(3)}),this.roundOptions=Array.from({length:15},(e,t)=>(t+1)*3),this.defaultFormState={gameType:M.Simple501,playerNames:[{name:"first",isAI:!1,difficulty:tt.Medium,wins:0},{name:"second",isAI:!1,difficulty:tt.Medium,wins:0}],maxRounds:3}}onWindowScroll(){this.checkScrollVisibility()}checkScrollVisibility(){let e=document.querySelector('button[type="submit"]');if(e){let r=e.getBoundingClientRect();this.showScrollTopButton=r.bottom<0}let t=document.querySelectorAll(".player-row");if(t.length>0){let o=t[t.length-1].getBoundingClientRect();this.showScrollBottomButton=o.top>window.innerHeight}else this.showScrollBottomButton=!1}scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}scrollToBottom(){window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})}ngOnInit(){if(localStorage.getItem("playerNames")){let e=JSON.parse(localStorage.getItem("playerNames"));e.length>0&&typeof e[0]=="string"?this.formGroup.setControl("playerNames",this.fb.array(e.map(t=>this.fb.group({name:this.fb.control(t),isAI:this.fb.control(!1),difficulty:this.fb.control(tt.Medium),wins:0})))):this.formGroup.setControl("playerNames",this.fb.array(e.map(t=>this.fb.group({name:this.fb.control(t.name),isAI:this.fb.control(t.isAI||!1),difficulty:this.fb.control(t.difficulty||tt.Medium),wins:t.wins}))))}if(localStorage.getItem("gameType")){let e=JSON.parse(localStorage.getItem("gameType"));this.formGroup.controls.gameType.setValue(this.getGameType(e))}}get playerNames(){return this.formGroup.get("playerNames")}addPlayerName(){this.playerNames.length<8&&(this.playerNames.push(this.fb.group({name:this.fb.control(""),isAI:this.fb.control(!1),difficulty:this.fb.control(tt.Medium),wins:0})),this.cdr.detectChanges(),setTimeout(()=>this.checkScrollVisibility(),100))}addAIPlayer(){if(this.playerNames.length<8){let e=["Borg","Data","Hal","Skynet","Jarvis","GlaDOS","Cortana","R2D2"],t="KI-"+e[Math.floor(Math.random()*e.length)],r=this.fb.group({name:this.fb.control(t),isAI:this.fb.control(!0),difficulty:this.fb.control(tt.Medium),wins:0});this.playerNames.push(r),this.cdr.detectChanges(),setTimeout(()=>this.checkScrollVisibility(),100)}}removePlayerName(e){this.playerNames.removeAt(e),setTimeout(()=>this.checkScrollVisibility(),100)}onSubmit(){let e=this.formGroup.controls.playerNames.value,t=this.formGroup.value.gameType,r=this.formGroup.value.maxRounds,o={gameType:t,players:JSON.stringify(e),maxRounds:r};t==M.Cricket?this.router.navigate(["cricketboard"],{queryParams:o}):this.router.navigate(["dartboard"],{queryParams:o}),localStorage.setItem("playerNames",JSON.stringify(e)),localStorage.setItem("gameType",JSON.stringify(t))}onReset(e){e.preventDefault(),this.formGroup.reset(this.defaultFormState),this.formGroup.setControl("playerNames",this.fb.array(this.defaultFormState.playerNames.map(t=>this.fb.group({name:this.fb.control(t.name),isAI:this.fb.control(t.isAI),difficulty:this.fb.control(t.difficulty),wins:0}))))}validateGameStart(e){let t=e.controls.length>0,r=!e.value.some(a=>a.name===""||a.name===null),o=e.value.some(a=>!a.isAI);return t&&r&&o}drop(e){let t=this.playerNames.getRawValue();yl(t,e.previousIndex,e.currentIndex),this.playerNames.setValue(t)}getGameType(e){switch(e){case"501":return M.Simple501;case"Cricket":return M.Cricket;case"501-DoubleOut":return M.DoubleOut501;case"Elimination-301":return M.Elimination301;case"Highscore":return M.Highscore;case"Random-Hit":case"RandomHit":return M.RandomHit;default:return M.Simple501}}getWins(e){let t=!1,r=this.formGroup.controls.playerNames.value;if(localStorage.getItem("playerNames")){let o=JSON.parse(localStorage.getItem("playerNames"));if(this.playerNames.length===o.length){let a=o.map(c=>c.name),s=r.map(c=>c.name);t=a.every(c=>s.includes(c))}}return t?e.wins:(this.formGroup.controls.playerNames.value.forEach(o=>o.wins=0),localStorage.setItem("playerNames",JSON.stringify(r)),0)}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=w({type:n,selectors:[["app-game-selection"]],hostBindings:function(t,r){t&1&&x("scroll",function(){return r.onWindowScroll()},nn)},decls:38,vars:12,consts:[["nameInput",""],[1,"d-flex","justify-content-center","ms-2","game-selection"],[1,"ms-2","mt-2","vw-100","justify-content-center",3,"ngSubmit","reset","formGroup"],["appearance","fill",1,"me-2"],[1,"text"],["formControlName","gameType"],[3,"value"],["mat-raised-button","","color","accent","type","submit",3,"disabled"],[1,"ms-2","mt-2","text-danger"],["mat-raised-button","","type","reset",1,"ms-2","me-2"],["appearance","fill"],[1,"d-flex","flex-row","my-3"],["mat-raised-button","","color","accent","type","button",3,"click"],["mat-raised-button","","color","primary","type","button",1,"ms-2",3,"click"],["formArrayName","playerNames","cdkDropList","",1,"d-flex","flex-column",3,"cdkDropListDropped"],["cdkDrag","",1,"d-flex","flex-row","rounded-3","player-row","shadow","m-1",3,"formGroupName"],["mat-fab","","color","primary",1,"scroll-btn"],["mat-fab","","color","warn",1,"scroll-btn"],["formControlName","maxRounds"],[1,"d-flex","flex-row"],["matInput","","type","text","formControlName","name",3,"id"],["mat-mini-fab","","type","button","color","warn",1,"ms-2","mb-1",3,"click"],[1,"text-bg-danger"],["appearance","fill",1,"difficulty-select","p-3"],[1,"align-content-center","text-warning","fw-bold"],["mat-icon-button","",3,"click"],["formControlName","difficulty"],["mat-fab","","color","primary",1,"scroll-btn",3,"click"],["mat-fab","","color","warn",1,"scroll-btn",3,"click"]],template:function(t,r){if(t&1&&(u(0,"div",1)(1,"form",2),x("ngSubmit",function(){return r.onSubmit()})("reset",function(a){return r.onReset(a)}),u(2,"mat-form-field",3)(3,"mat-label",4),g(4,"Game Type"),h(),u(5,"mat-select",5)(6,"mat-option",6),g(7,"501"),h(),u(8,"mat-option",6),g(9,"501 (Double Out)"),h(),u(10,"mat-option",6),g(11,"Cricket"),h(),u(12,"mat-option",6),g(13,"Elimination (301)"),h(),u(14,"mat-option",6),g(15,"Highscore"),h(),u(16,"mat-option",6),g(17,"Random Hit"),h()()(),u(18,"button",7),g(19,"Start "),h(),G(20,sD,2,0,"mat-hint",8),u(21,"button",9),g(22,"Reset"),h(),G(23,cD,6,0,"mat-form-field",10),u(24,"div",11)(25,"button",12),x("click",function(){return r.addPlayerName()}),u(26,"mat-icon"),g(27," add "),h(),g(28," Player "),h(),u(29,"button",13),x("click",function(){return r.addAIPlayer()}),u(30,"mat-icon"),g(31," smart_toy "),h(),g(32," +KI-Player "),h()(),u(33,"div",14),x("cdkDropListDropped",function(a){return r.drop(a)}),Gr(34,hD,17,7,"div",15,pa),h()(),G(36,mD,3,0,"button",16),G(37,pD,3,0,"button",17),h()),t&2){let o;p(),D("formGroup",r.formGroup),p(5),D("value",r.gameType.Simple501),p(2),D("value",r.gameType.DoubleOut501),p(2),D("value",r.gameType.Cricket),p(2),D("value",r.gameType.Elimination301),p(2),D("value",r.gameType.Highscore),p(2),D("value",r.gameType.RandomHit),p(2),D("disabled",!r.validateGameStart(r.playerNames)),p(2),$(r.playerNames.length>0&&!r.validateGameStart(r.playerNames)?20:-1),p(3),$(((o=r.formGroup.get("gameType"))==null?null:o.value)===r.gameType.Highscore||((o=r.formGroup.get("gameType"))==null?null:o.value)===r.gameType.RandomHit?23:-1),p(11),$r(r.playerNames.controls),p(2),$(r.showScrollTopButton?36:-1),p(),$(r.showScrollBottomButton?37:-1)}},dependencies:[ke,al,Uf,el,tl,Of,Bi,Hd,rl,ol,Se,Ze,dn,Pn,dr,ji,Cl,Jo,ea,$g,Gg,Er,Zg,Xg,_n,gn,kg,Tg],styles:[".cdk-drag-preview[_ngcontent-%COMP%]{border:none;box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.mw-80[_ngcontent-%COMP%]{max-width:80%}.difficulty-select[_ngcontent-%COMP%]{width:10rem}.scroll-btn[_ngcontent-%COMP%]{position:fixed;bottom:20px;right:20px;z-index:1000}.player-row[_ngcontent-%COMP%]{max-width:80%;display:flex;flex-direction:row;justify-content:space-between}.game-selection[_ngcontent-%COMP%]{overflow:hidden}"]})}}return n})();var Qg=(()=>{class n{constructor(e){this.router=e}static{this.\u0275fac=function(t){return new(t||n)(U(ot))}}static{this.\u0275cmp=w({type:n,selectors:[["app-not-found"]],decls:6,vars:1,consts:[[1,"container","text-center","mt-lg-5"]],template:function(t,r){t&1&&($e(0,"div",0)(1,"h1")(2,"code"),g(3),We(4,"br"),g(5," 404 not found"),Qe()()()),t&2&&(p(3),ie(" ",r.router.url))},encapsulation:2})}}return n})();var ou=(()=>{class n{constructor(e,t,r){this.dartService=e,this.cricketService=t,this.currentplayerService=r,this.roundCountService=l(jt)}resolve(e,t){let r=e.queryParamMap.get("gameType"),o=e.queryParamMap.get("players"),a=e.queryParamMap.getAll("playerNames"),s=e.queryParamMap.get("maxRounds"),c=[];return o?c=JSON.parse(o):a&&a.length>0&&(c=a),(r===M.Highscore||r===M.RandomHit)&&s?this.roundCountService.setMaxRounds(Number(s)):this.roundCountService.setMaxRounds(),r===M.Cricket?(this.cricketService.setGameType(M.Cricket),this.cricketService.initPlayers(c)):(this.dartService.setGameType(r),this.dartService.initPlayers(c)),this.currentplayerService.currentGameMode=r,V(!0)}static{this.\u0275fac=function(t){return new(t||n)(E(xt),E(zt),E(de))}}static{this.\u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function fD(n){return Object.values(M).some(i=>i==n)}function gD(n,i){return i===M.Elimination301?n>=2:n>0}var au=(n,i)=>{let e=n.queryParamMap.getAll("playerNames").length,t=n.queryParamMap.get("players");if(t)try{e=JSON.parse(t).length}catch(s){}let r=n.queryParamMap.get("gameType"),o=l(ot),a=l(un);if(fD(r)&&gD(e,r))return!0;{let s="Sorry, something went wrong. Please try again.";return e<2&&r==M.Elimination301&&(s="Please try again, u need at least 2 players"),o.navigate([]),a.open(s,"OK",{duration:3e3,verticalPosition:"top",panelClass:["app-shape-morph-snack"]}),!1}};var Jg=[{path:"",component:Kg},{path:"cricketboard",component:og,canActivate:[au],resolve:{gameInitialization:ou}},{path:"dartboard",component:sg,canActivate:[au],resolve:{gameInitialization:ou}},{path:"**",component:Qg}];var su="Service workers are disabled or not supported by this browser",Vr=class{serviceWorker;worker;registration;events;constructor(i,e){if(this.serviceWorker=i,!i)this.worker=this.events=this.registration=new at(t=>t.error(new W(5601,!1)));else{let t=null,r=new y;this.worker=new at(d=>(t!==null&&d.next(t),r.subscribe(m=>d.next(m))));let o=()=>{let{controller:d}=i;d!==null&&(t=d,r.next(t))};i.addEventListener("controllerchange",o),o(),this.registration=this.worker.pipe(Ee(()=>i.getRegistration().then(d=>{if(!d)throw new W(5601,!1);return d})));let a=new y;this.events=a.asObservable();let s=d=>{let{data:m}=d;m?.type&&a.next(m)};i.addEventListener("message",s),e?.get(yt,null,{optional:!0})?.onDestroy(()=>{i.removeEventListener("controllerchange",o),i.removeEventListener("message",s)})}}postMessage(i,e){return new Promise(t=>{this.worker.pipe(xe(1)).subscribe(r=>{r.postMessage(v({action:i},e)),t()})})}postMessageWithOperation(i,e,t){let r=this.waitForOperationCompleted(t),o=this.postMessage(i,e);return Promise.all([o,r]).then(([,a])=>a)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(i){let e;return typeof i=="string"?e=t=>t.type===i:e=t=>i.includes(t.type),this.events.pipe(ue(e))}nextEventOfType(i){return this.eventsOfType(i).pipe(xe(1))}waitForOperationCompleted(i){return new Promise((e,t)=>{this.eventsOfType("OPERATION_COMPLETED").pipe(ue(r=>r.nonce===i),xe(1),X(r=>{if(r.result!==void 0)return r.result;throw new Error(r.error)})).subscribe({next:e,error:t})})}get isEnabled(){return!!this.serviceWorker}},t_=(()=>{class n{sw;messages;notificationClicks;notificationCloses;pushSubscriptionChanges;subscription;get isEnabled(){return this.sw.isEnabled}pushManager=null;subscriptionChanges=new y;constructor(e){if(this.sw=e,!e.isEnabled){this.messages=Bn,this.notificationClicks=Bn,this.notificationCloses=Bn,this.pushSubscriptionChanges=Bn,this.subscription=Bn;return}this.messages=this.sw.eventsOfType("PUSH").pipe(X(r=>r.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(X(r=>r.data)),this.notificationCloses=this.sw.eventsOfType("NOTIFICATION_CLOSE").pipe(X(r=>r.data)),this.pushSubscriptionChanges=this.sw.eventsOfType("PUSH_SUBSCRIPTION_CHANGE").pipe(X(r=>r.data)),this.pushManager=this.sw.registration.pipe(X(r=>r.pushManager));let t=this.pushManager.pipe(Ee(r=>r.getSubscription()));this.subscription=new at(r=>{let o=t.subscribe(r),a=this.subscriptionChanges.subscribe(r);return()=>{o.unsubscribe(),a.unsubscribe()}})}requestSubscription(e){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(su));let t={userVisibleOnly:!0},r=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),o=new Uint8Array(new ArrayBuffer(r.length));for(let a=0;a<r.length;a++)o[a]=r.charCodeAt(a);return t.applicationServerKey=o,new Promise((a,s)=>{this.pushManager.pipe(Ee(c=>c.subscribe(t)),xe(1)).subscribe({next:c=>{this.subscriptionChanges.next(c),a(c)},error:s})})}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(su));let e=t=>{if(t===null)throw new W(5602,!1);return t.unsubscribe().then(r=>{if(!r)throw new W(5603,!1);this.subscriptionChanges.next(null)})};return new Promise((t,r)=>{this.subscription.pipe(xe(1),Ee(e)).subscribe({next:t,error:r})})}decodeBase64(e){return atob(e)}static \u0275fac=function(t){return new(t||n)(E(Vr))};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})(),n_=(()=>{class n{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled}ongoingCheckForUpdate=null;constructor(e){if(this.sw=e,!e.isEnabled){this.versionUpdates=Bn,this.unrecoverable=Bn;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(su));if(this.ongoingCheckForUpdate)return this.ongoingCheckForUpdate;let e=this.sw.generateNonce();return this.ongoingCheckForUpdate=this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e).finally(()=>{this.ongoingCheckForUpdate=null}),this.ongoingCheckForUpdate}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new W(5601,!1));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e)}static \u0275fac=function(t){return new(t||n)(E(Vr))};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})(),i_=new b("");function _D(){let n=l(ia);if(!("serviceWorker"in navigator&&n.enabled!==!1))return;let i=l(i_),e=l(B),t=l(yt);e.runOutsideAngular(()=>{let r=navigator.serviceWorker,o=()=>r.controller?.postMessage({action:"INITIALIZE"});r.addEventListener("controllerchange",o),t.onDestroy(()=>{r.removeEventListener("controllerchange",o)})}),e.runOutsideAngular(()=>{let r,{registrationStrategy:o}=n;if(typeof o=="function")r=new Promise(a=>o().subscribe(()=>a()));else{let[a,...s]=(o||"registerWhenStable:30000").split(":");switch(a){case"registerImmediately":r=Promise.resolve();break;case"registerWithDelay":r=e_(+s[0]||0);break;case"registerWhenStable":r=Promise.race([t.whenStable(),e_(+s[0])]);break;default:throw new W(5600,!1)}}r.then(()=>{t.destroyed||navigator.serviceWorker.register(i,{scope:n.scope,updateViaCache:n.updateViaCache,type:n.type}).catch(a=>console.error(xn(5604,!1)))})})}function e_(n){return new Promise(i=>setTimeout(i,n))}function vD(){let n=l(ia),i=l(z),e=!0;return new Vr(e&&n.enabled!==!1?navigator.serviceWorker:void 0,i)}var ia=class{enabled;updateViaCache;type;scope;registrationStrategy};function bD(n,i={}){return jn([t_,n_,{provide:i_,useValue:n},{provide:ia,useValue:i},{provide:Vr,useFactory:vD},Ur(_D)])}var r_=(()=>{class n{static register(e,t={}){return{ngModule:n,providers:[bD(e,t)]}}static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=O({providers:[t_,n_]})}return n})();var yD="@",wD=(()=>{class n{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=l(z);loadingSchedulerFn=l(CD,{optional:!0});_engine;constructor(e,t,r,o,a){this.doc=e,this.delegate=t,this.zone=r,this.animationType=o,this.moduleImpl=a}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-6G4QBI5X.js").then(r=>r),t;return this.loadingSchedulerFn?t=this.loadingSchedulerFn(e):t=e(),t.catch(r=>{throw new W(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:o})=>{this._engine=r(this.animationType,this.doc);let a=new o(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(e,t){let r=this.delegate.createRenderer(e,t);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let o=new lu(r);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let s=a.createRenderer(e,t);o.use(s),this.scheduler??=this.injector.get(vu,null,{optional:!0}),this.scheduler?.notify(10)}).catch(a=>{o.use(r)}),o}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(t){Xi()};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})(),lu=class{delegate;replay=[];\u0275type=1;constructor(i){this.delegate=i}use(i){if(this.delegate=i,this.replay!==null){for(let e of this.replay)e(i);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(i,e){return this.delegate.createElement(i,e)}createComment(i){return this.delegate.createComment(i)}createText(i){return this.delegate.createText(i)}get destroyNode(){return this.delegate.destroyNode}appendChild(i,e){this.delegate.appendChild(i,e)}insertBefore(i,e,t,r){this.delegate.insertBefore(i,e,t,r)}removeChild(i,e,t,r){this.delegate.removeChild(i,e,t,r)}selectRootElement(i,e){return this.delegate.selectRootElement(i,e)}parentNode(i){return this.delegate.parentNode(i)}nextSibling(i){return this.delegate.nextSibling(i)}setAttribute(i,e,t,r){this.delegate.setAttribute(i,e,t,r)}removeAttribute(i,e,t){this.delegate.removeAttribute(i,e,t)}addClass(i,e){this.delegate.addClass(i,e)}removeClass(i,e){this.delegate.removeClass(i,e)}setStyle(i,e,t,r){this.delegate.setStyle(i,e,t,r)}removeStyle(i,e,t){this.delegate.removeStyle(i,e,t)}setProperty(i,e,t){this.shouldReplay(e)&&this.replay.push(r=>r.setProperty(i,e,t)),this.delegate.setProperty(i,e,t)}setValue(i,e){this.delegate.setValue(i,e)}listen(i,e,t,r){return this.shouldReplay(e)&&this.replay.push(o=>o.listen(i,e,t,r)),this.delegate.listen(i,e,t,r)}shouldReplay(i){return this.replay!==null&&i.startsWith(yD)}},CD=new b("");function o_(n="animations"){return Hr("NgAsyncAnimations"),jn([{provide:je,useFactory:()=>new wD(l(F),l(eo),l(B),n)},{provide:Wi,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}Yr.production&&void 0;rc(Jf,{providers:[pd(Jg,Ps()),o_(),fu(r_.register("ngsw-worker.js",{enabled:Yr.production,registrationStrategy:"registerWhenStable:30000"})),{provide:Lu,useFactory:df,multi:!0}]}).catch(n=>console.error(n));
