import{$ as b,$a as ze,$b as ee,A as dt,Aa as Kr,Ab as nc,Ac as oe,B as jn,Ba as ah,Bb as wt,Bc as rc,C as pe,Ca as Mn,Cb as Z,Cc as Fh,D as Yl,Da as sh,Db as W,Dc as Nh,E as Xi,Ea as Ji,Eb as q,Ec as F,F as pi,Fa as er,Fb as Ta,Fc as It,G as Sa,Ga as tr,Gb as xh,Gc as Fa,H as xe,Ha as lh,Hb as to,Hc as Na,I as Xl,Ia as ec,Ib as no,Ic as Lh,J as Ki,Ja as Ma,Jb as D,K as zn,Ka as _i,Kb as u,L as Kl,La as nr,Lb as h,Lc as oc,M as Zl,Ma as ch,Mb as Y,Mc as ac,N as Qu,Na as dh,Nb as Be,O as Ql,Oa as uh,Ob as qe,Oc as oo,P as xa,Pa as hh,Pb as Ve,Pc as sc,Q as We,Qa as mh,Qb as Aa,Qc as lc,R as Re,Ra as fh,Rb as ka,S as ue,Sa as ph,Sb as Te,T as Ju,Ta as ft,Tb as Rt,U as Qe,Ua as gh,Ub as S,V as O,Va as tn,Vb as Pa,W as Sn,Wa as f,Wb as T,X as en,Xa as vi,Xb as De,Y as v,Ya as _h,Yb as Q,Z as L,Za as Ea,Zb as zt,_ as eh,_a as Zr,_b as Xe,a as _,aa as E,ab as yt,ac as te,b as ie,ba as l,bb as He,bc as Mh,ca as Hn,cb as de,cc as Eh,d as ce,da as th,db as re,dc as ic,e as Gl,ea as nh,eb as ir,ec as ht,f as Ie,fa as tt,fb as Qr,fc as Oa,g as Xu,ga as nt,gb as Jr,gc as A,h as at,ha as we,hb as lt,hc as it,i as y,ia as Ce,ib as Ra,ic as g,j as je,ja as Zi,jb as vh,jc as he,k as $l,ka as H,kb as Ia,kc as ne,l as Wl,la as N,lb as w,lc as Rh,m as vt,ma as xn,mb as B,mc as yi,n as st,na as ih,nb as R,nc as Pe,o as U,oa as j,ob as bh,oc as Ih,p as ya,pa as z,pb as yh,pc as Th,q as wa,qa as gi,qb as wh,qc as Ah,r as Ku,ra as Qi,rb as Me,rc as kh,s as K,sa as k,sb as ge,sc as Ph,t as Xr,ta as rh,tb as Ch,tc as G,u as Qt,ua as oh,ub as tc,uc as V,v as ql,va as ut,vb as Un,vc as En,w as Ca,wa as Le,wb as bi,wc as nn,x as Jt,xa as bt,xb as Dh,xc as io,y as Da,ya as Jl,yb as Sh,yc as ro,z as Zu,za as P,zb as eo,zc as Oh}from"./chunk-URTFQUYS.js";var Bh={name:"dart-board",version:"1.1.1",scripts:{ng:"ng",start:"ng serve",build:"ng build","build:ci":"ng build --configuration production",watch:"ng build --watch --configuration development",test:"ng test --watch=false --browsers=ChromeHeadless","deploy:gh":"ng build --configuration production --base-href=/dart-board/ --deploy-url=/dart-board/ && npx angular-cli-ghpages --dir dist/dart-board/browser --no-silent"},private:!0,dependencies:{"@angular/animations":"21.2.14","@angular/cdk":"21.2.14","@angular/common":"21.2.14","@angular/compiler":"21.2.14","@angular/core":"21.2.14","@angular/forms":"21.2.14","@angular/material":"21.2.14","@angular/platform-browser":"21.2.14","@angular/platform-browser-dynamic":"21.2.14","@angular/router":"21.2.14","@angular/service-worker":"21.2.14",bootstrap:"5.3.3",rxjs:"7.8.0",tslib:"2.8.0","zone.js":"0.15.0"},devDependencies:{"@angular-devkit/build-angular":"21.2.14","@angular/cli":"21.2.14","@angular/compiler-cli":"21.2.14","@angular/localize":"21.2.14","@playwright/test":"1.58.2","@types/node":"22.19.13","angular-cli-ghpages":"3.0.2",playwright:"^1.58.2",typescript:"~5.9.3"},overrides:{"serialize-javascript":"7.0.3",undici:"7.24.5"}};var ao={production:!0,isRedirectWarningActive:!0,appVersion:Bh.version};var Vh=null;function Ot(){return Vh}function cc(i){Vh??=i}var so=class{},wi=(()=>{class i{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||i)};static \u0275prov=v({token:i,factory:()=>l(jh),providedIn:"platform"})}return i})(),dc=new b(""),jh=(()=>{class i extends wi{_location;_history;_doc=l(N);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Ot().getBaseHref(this._doc)}onPopState(e){let t=Ot().getGlobalEventTarget(this._doc,"window");return t.addEventListener("popstate",e,!1),()=>t.removeEventListener("popstate",e)}onHashChange(e){let t=Ot().getGlobalEventTarget(this._doc,"window");return t.addEventListener("hashchange",e,!1),()=>t.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,t,r){this._history.pushState(e,t,r)}replaceState(e,t,r){this._history.replaceState(e,t,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(t){return new(t||i)};static \u0275prov=v({token:i,factory:()=>new i,providedIn:"platform"})}return i})();function La(i,n){return i?n?i.endsWith("/")?n.startsWith("/")?i+n.slice(1):i+n:n.startsWith("/")?i+n:`${i}/${n}`:i:n}function zh(i){let n=i.search(/#|\?|$/);return i[n-1]==="/"?i.slice(0,n-1)+i.slice(n):i}function Ht(i){return i&&i[0]!=="?"?`?${i}`:i}var Ut=(()=>{class i{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||i)};static \u0275prov=v({token:i,factory:()=>l(Va),providedIn:"root"})}return i})(),Ba=new b(""),Va=(()=>{class i extends Ut{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,t){super(),this._platformLocation=e,this._baseHref=t??this._platformLocation.getBaseHrefFromDOM()??l(N).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return La(this._baseHref,e)}path(e=!1){let t=this._platformLocation.pathname+Ht(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${t}${r}`:t}pushState(e,t,r,o){let a=this.prepareExternalUrl(r+Ht(o));this._platformLocation.pushState(e,t,a)}replaceState(e,t,r,o){let a=this.prepareExternalUrl(r+Ht(o));this._platformLocation.replaceState(e,t,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(t){return new(t||i)(E(wi),E(Ba,8))};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var rn=(()=>{class i{_subject=new y;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let t=this._locationStrategy.getBaseHref();this._basePath=vv(zh(Hh(t))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+Ht(t))}normalize(e){return i.stripTrailingSlash(_v(this._basePath,Hh(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,t="",r=null){this._locationStrategy.pushState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Ht(t)),r)}replaceState(e,t="",r=null){this._locationStrategy.replaceState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Ht(t)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(t=>{this._notifyUrlChangeListeners(t.url,t.state)}),()=>{let t=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(t,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(r=>r(e,t))}subscribe(e,t,r){return this._subject.subscribe({next:e,error:t??void 0,complete:r??void 0})}static normalizeQueryParams=Ht;static joinWithSlash=La;static stripTrailingSlash=zh;static \u0275fac=function(t){return new(t||i)(E(Ut))};static \u0275prov=v({token:i,factory:()=>gv(),providedIn:"root"})}return i})();function gv(){return new rn(E(Ut))}function _v(i,n){if(!i||!n.startsWith(i))return n;let e=n.substring(i.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function Hh(i){return i.replace(/\/index.html$/,"")}function vv(i){if(new RegExp("^(https?:)?//").test(i)){let[,e]=i.split(/\/\/[^\/]+/);return e}return i}var mc=(()=>{class i extends Ut{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,t){super(),this._platformLocation=e,t!=null&&(this._baseHref=t)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let t=this._platformLocation.hash??"#";return t.length>0?t.substring(1):t}prepareExternalUrl(e){let t=La(this._baseHref,e);return t.length>0?"#"+t:t}pushState(e,t,r,o){let a=this.prepareExternalUrl(r+Ht(o))||this._platformLocation.pathname;this._platformLocation.pushState(e,t,a)}replaceState(e,t,r,o){let a=this.prepareExternalUrl(r+Ht(o))||this._platformLocation.pathname;this._platformLocation.replaceState(e,t,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(t){return new(t||i)(E(wi),E(Ba,8))};static \u0275prov=v({token:i,factory:i.\u0275fac})}return i})();var ja=class{$implicit;ngForOf;index;count;constructor(n,e,t,r){this.$implicit=n,this.ngForOf=e,this.index=t,this.count=r}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},on=(()=>{class i{_viewContainer;_template;_differs;set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(e,t,r){this._viewContainer=e,this._template=t,this._differs=r}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;!this._differ&&e&&(this._differ=this._differs.find(e).create(this.ngForTrackBy))}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let t=this._viewContainer;e.forEachOperation((r,o,a)=>{if(r.previousIndex==null)t.createEmbeddedView(this._template,new ja(r.item,this._ngForOf,-1,-1),a===null?void 0:a);else if(a==null)t.remove(o===null?void 0:o);else if(o!==null){let s=t.get(o);t.move(s,a),Uh(s,r)}});for(let r=0,o=t.length;r<o;r++){let s=t.get(r).context;s.index=r,s.count=o,s.ngForOf=this._ngForOf}e.forEachIdentityChange(r=>{let o=t.get(r.currentIndex);Uh(o,r)})}static ngTemplateContextGuard(e,t){return!0}static \u0275fac=function(t){return new(t||i)(re(lt),re(yt),re(rc))};static \u0275dir=R({type:i,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return i})();function Uh(i,n){i.context.$implicit=n.item}var Rn=(()=>{class i{_viewContainer;_context=new za;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,t){this._viewContainer=e,this._thenTemplateRef=t}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){Gh(e,!1),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){Gh(e,!1),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,t){return!0}static \u0275fac=function(t){return new(t||i)(re(lt),re(yt))};static \u0275dir=R({type:i,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return i})(),za=class{$implicit=null;ngIf=null};function Gh(i,n){if(i&&!i.createEmbeddedView)throw new O(2020,!1)}var fc=(()=>{class i{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,t,r){this._ngEl=e,this._differs=t,this._renderer=r}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,t){let[r,o]=e.split("."),a=r.indexOf("-")===-1?void 0:vi.DashCase;t!=null?this._renderer.setStyle(this._ngEl.nativeElement,r,o?`${t}${o}`:t,a):this._renderer.removeStyle(this._ngEl.nativeElement,r,a)}_applyChanges(e){e.forEachRemovedItem(t=>this._setStyle(t.key,null)),e.forEachAddedItem(t=>this._setStyle(t.key,t.currentValue)),e.forEachChangedItem(t=>this._setStyle(t.key,t.currentValue))}static \u0275fac=function(t){return new(t||i)(re(P),re(Fh),re(de))};static \u0275dir=R({type:i,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return i})(),pc=(()=>{class i{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=l(H);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let t=this._viewContainerRef;if(this._viewRef&&t.remove(t.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=t.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,t,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,t,r):!1,get:(e,t,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,t,r)}})}static \u0275fac=function(t){return new(t||i)(re(lt))};static \u0275dir=R({type:i,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Le]})}return i})();function bv(i,n){return new O(2100,!1)}var uc=class{createSubscription(n,e,t){return G(()=>n.subscribe({next:e,error:t}))}dispose(n){G(()=>n.unsubscribe())}},hc=class{createSubscription(n,e,t){return n.then(r=>e?.(r),r=>t?.(r)),{unsubscribe:()=>{e=null,t=null}}}dispose(n){n.unsubscribe()}},yv=new hc,wv=new uc,gc=(()=>{class i{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;applicationErrorHandler=l(Qi);constructor(e){this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,t=>this._updateLatestValue(e,t),t=>this.applicationErrorHandler(t))}_selectStrategy(e){if(bi(e))return yv;if(Dh(e))return wv;throw bv(i,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,t){e===this._obj&&(this._latestValue=t,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static \u0275fac=function(t){return new(t||i)(re(oe,16))};static \u0275pipe=bh({name:"async",type:i,pure:!1})}return i})();var Ae=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({})}return i})();function Ha(i,n){n=encodeURIComponent(n);for(let e of i.split(";")){let t=e.indexOf("="),[r,o]=t==-1?[e,""]:[e.slice(0,t),e.slice(t+1)];if(r.trim()===n)return decodeURIComponent(o)}return null}var Ci=class{};var vc="browser";function Wh(i){return i===vc}var bc=(()=>{class i{static \u0275prov=v({token:i,providedIn:"root",factory:()=>new _c(l(N),window)})}return i})(),_c=class{document;window;offset=()=>[0,0];constructor(n,e){this.document=n,this.window=e}setOffset(n){Array.isArray(n)?this.offset=()=>n:this.offset=n}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(n,e){this.window.scrollTo(ie(_({},e),{left:n[0],top:n[1]}))}scrollToAnchor(n,e){let t=Dv(this.document,n);t&&(this.scrollToElement(t,e),t.focus({preventScroll:!0}))}setHistoryScrollRestoration(n){try{this.window.history.scrollRestoration=n}catch(e){console.warn(Sn(2400,!1))}}scrollToElement(n,e){let t=n.getBoundingClientRect(),r=t.left+this.window.pageXOffset,o=t.top+this.window.pageYOffset,a=this.offset();this.window.scrollTo(ie(_({},e),{left:r-a[0],top:o-a[1]}))}};function Dv(i,n){let e=i.getElementById(n)||i.getElementsByName(n)[0];if(e)return e;if(typeof i.createTreeWalker=="function"&&i.body&&typeof i.body.attachShadow=="function"){let t=i.createTreeWalker(i.body,NodeFilter.SHOW_ELEMENT),r=t.currentNode;for(;r;){let o=r.shadowRoot;if(o){let a=o.getElementById(n)||o.querySelector(`[name="${n}"]`);if(a)return a}r=t.nextNode()}}return null}var lo=class{_doc;constructor(n){this._doc=n}manager},Ua=(()=>{class i extends lo{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,r,o){return e.addEventListener(t,r,o),()=>this.removeEventListener(e,t,r,o)}removeEventListener(e,t,r,o){return e.removeEventListener(t,r,o)}static \u0275fac=function(t){return new(t||i)(E(N))};static \u0275prov=v({token:i,factory:i.\u0275fac})}return i})(),Wa=new b(""),Dc=(()=>{class i{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,t){this._zone=t,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof Ua));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof Ua);o&&this._plugins.push(o)}addEventListener(e,t,r,o){return this._findPluginFor(t).addEventListener(e,t,r,o)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(o=>o.supports(e)),!t)throw new O(5101,!1);return this._eventNameToPlugin.set(e,t),t}static \u0275fac=function(t){return new(t||i)(E(Wa),E(z))};static \u0275prov=v({token:i,factory:i.\u0275fac})}return i})(),yc="ng-app-id";function qh(i){for(let n of i)n.remove()}function Yh(i,n){let e=n.createElement("style");return e.textContent=i,e}function Sv(i,n,e,t){let r=i.head?.querySelectorAll(`style[${yc}="${n}"],link[${yc}="${n}"]`);if(r)for(let o of r)o.removeAttribute(yc),o instanceof HTMLLinkElement?t.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function Cc(i,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",i),e}var Sc=(()=>{class i{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,t,r,o={}){this.doc=e,this.appId=t,this.nonce=r,Sv(e,t,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,t){for(let r of e)this.addUsage(r,this.inline,Yh);t?.forEach(r=>this.addUsage(r,this.external,Cc))}removeStyles(e,t){for(let r of e)this.removeUsage(r,this.inline);t?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,t,r){let o=t.get(e);o?o.usage++:t.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,t){let r=t.get(e);r&&(r.usage--,r.usage<=0&&(qh(r.elements),t.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])qh(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[t,{elements:r}]of this.inline)r.push(this.addElement(e,Yh(t,this.doc)));for(let[t,{elements:r}]of this.external)r.push(this.addElement(e,Cc(t,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,t){return this.nonce&&t.setAttribute("nonce",this.nonce),e.appendChild(t)}static \u0275fac=function(t){return new(t||i)(E(N),E(Mn),E(tr,8),E(Ji))};static \u0275prov=v({token:i,factory:i.\u0275fac})}return i})(),wc={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},xc=/%COMP%/g;var Kh="%COMP%",xv=`_nghost-${Kh}`,Mv=`_ngcontent-${Kh}`,Ev=!0,Rv=new b("",{factory:()=>Ev});function Iv(i){return Mv.replace(xc,i)}function Tv(i){return xv.replace(xc,i)}function Zh(i,n){return n.map(e=>e.replace(xc,i))}var ho=(()=>{class i{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,t,r,o,a,s,c=null,d=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=c,this.tracingService=d,this.defaultRenderer=new co(e,a,s,this.tracingService)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,t);return r instanceof $a?r.applyToHost(e):r instanceof uo&&r.applyStyles(),r}getOrCreateRenderer(e,t){let r=this.rendererByCompId,o=r.get(t.id);if(!o){let a=this.doc,s=this.ngZone,c=this.eventManager,d=this.sharedStylesHost,m=this.removeStylesOnCompDestroy,p=this.tracingService;switch(t.encapsulation){case Ma.Emulated:o=new $a(c,d,t,this.appId,m,a,s,p);break;case Ma.ShadowDom:return new Ga(c,e,t,a,s,this.nonce,p,d);case Ma.ExperimentalIsolatedShadowDom:return new Ga(c,e,t,a,s,this.nonce,p);default:o=new uo(c,d,t,m,a,s,p);break}r.set(t.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(t){return new(t||i)(E(Dc),E(Sc),E(Mn),E(Rv),E(N),E(z),E(tr),E(Ea,8))};static \u0275prov=v({token:i,factory:i.\u0275fac})}return i})(),co=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,t,r){this.eventManager=n,this.doc=e,this.ngZone=t,this.tracingService=r}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(wc[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(Xh(n)?n.content:n).appendChild(e)}insertBefore(n,e,t){n&&(Xh(n)?n.content:n).insertBefore(e,t)}removeChild(n,e){e.remove()}selectRootElement(n,e){let t=typeof n=="string"?this.doc.querySelector(n):n;if(!t)throw new O(-5104,!1);return e||(t.textContent=""),t}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,t,r){if(r){e=r+":"+e;let o=wc[r];o?n.setAttributeNS(o,e,t):n.setAttribute(e,t)}else n.setAttribute(e,t)}removeAttribute(n,e,t){if(t){let r=wc[t];r?n.removeAttributeNS(r,e):n.removeAttribute(`${t}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,t,r){r&(vi.DashCase|vi.Important)?n.style.setProperty(e,t,r&vi.Important?"important":""):n.style[e]=t}removeStyle(n,e,t){t&vi.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,t){n!=null&&(n[e]=t)}setValue(n,e){n.nodeValue=e}listen(n,e,t,r){if(typeof n=="string"&&(n=Ot().getGlobalEventTarget(this.doc,n),!n))throw new O(5102,!1);let o=this.decoratePreventDefault(t);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,r)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function Xh(i){return i.tagName==="TEMPLATE"&&i.content!==void 0}var Ga=class extends co{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,t,r,o,a,s,c){super(n,r,o,s),this.hostEl=e,this.sharedStylesHost=c,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=t.styles;d=Zh(t.id,d);for(let p of d){let x=document.createElement("style");a&&x.setAttribute("nonce",a),x.textContent=p,this.shadowRoot.appendChild(x)}let m=t.getExternalStyles?.();if(m)for(let p of m){let x=Cc(p,r);a&&x.setAttribute("nonce",a),this.shadowRoot.appendChild(x)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,t){return super.insertBefore(this.nodeOrShadowRoot(n),e,t)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},uo=class extends co{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,t,r,o,a,s,c){super(n,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let d=t.styles;this.styles=c?Zh(c,d):d,this.styleUrls=t.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&_h.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},$a=class extends uo{contentAttr;hostAttr;constructor(n,e,t,r,o,a,s,c){let d=r+"-"+t.id;super(n,e,t,o,a,s,c,d),this.contentAttr=Iv(d),this.hostAttr=Tv(d)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let t=super.createElement(n,e);return super.setAttribute(t,this.contentAttr,""),t}};var qa=class i extends so{supportsDOMEvents=!0;static makeCurrent(){cc(new i)}onAndCancel(n,e,t,r){return n.addEventListener(e,t,r),()=>{n.removeEventListener(e,t,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=kv();return e==null?null:Pv(e)}resetBaseElement(){mo=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return Ha(document.cookie,n)}},mo=null;function kv(){return mo=mo||document.head.querySelector("base"),mo?mo.getAttribute("href"):null}function Pv(i){return new URL(i,document.baseURI).pathname}var Ov=(()=>{class i{build(){return new XMLHttpRequest}static \u0275fac=function(t){return new(t||i)};static \u0275prov=v({token:i,factory:i.\u0275fac})}return i})(),Qh=["alt","control","meta","shift"],Fv={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Nv={alt:i=>i.altKey,control:i=>i.ctrlKey,meta:i=>i.metaKey,shift:i=>i.shiftKey},Jh=(()=>{class i extends lo{constructor(e){super(e)}supports(e){return i.parseEventName(e)!=null}addEventListener(e,t,r,o){let a=i.parseEventName(t),s=i.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Ot().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let t=e.toLowerCase().split("."),r=t.shift();if(t.length===0||!(r==="keydown"||r==="keyup"))return null;let o=i._normalizeKey(t.pop()),a="",s=t.indexOf("code");if(s>-1&&(t.splice(s,1),a="code."),Qh.forEach(d=>{let m=t.indexOf(d);m>-1&&(t.splice(m,1),a+=d+".")}),a+=o,t.length!=0||o.length===0)return null;let c={};return c.domEventName=r,c.fullKey=a,c}static matchEventFullKeyCode(e,t){let r=Fv[e.key]||e.key,o="";return t.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),Qh.forEach(a=>{if(a!==r){let s=Nv[a];s(e)&&(o+=a+".")}}),o+=r,o===t)}static eventCallback(e,t,r){return o=>{i.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>t(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(t){return new(t||i)(E(N))};static \u0275prov=v({token:i,factory:i.\u0275fac})}return i})();function Mc(i,n,e){return ce(this,null,function*(){let t=_({rootComponent:i},Lv(n,e));return Nh(t)})}function Lv(i,n){return{platformRef:n?.platformRef,appProviders:[...Hv,...i?.providers??[]],platformProviders:zv}}function Bv(){qa.makeCurrent()}function Vv(){return new gi}function jv(){return ah(document),document}var zv=[{provide:Ji,useValue:vc},{provide:sh,useValue:Bv,multi:!0},{provide:N,useFactory:jv}];var Hv=[{provide:nh,useValue:"root"},{provide:gi,useFactory:Vv},{provide:Wa,useClass:Ua,multi:!0},{provide:Wa,useClass:Jh,multi:!0},ho,Sc,Dc,{provide:He,useExisting:ho},{provide:Ci,useClass:Ov},[]];var Gn=class i{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let t=e.indexOf(":");if(t>0){let r=e.slice(0,t),o=e.slice(t+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,t)=>{this.addHeaderEntry(t,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,t])=>{this.setHeaderEntries(e,t)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof i?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new i;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof i?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let t=n.value;if(typeof t=="string"&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=(n.op==="a"?this.headers.get(e):void 0)||[];r.push(...t),this.headers.set(e,r);break;case"d":let o=n.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(n,e){let t=n.toLowerCase();this.maybeSetNormalizedName(n,t),this.headers.has(t)?this.headers.get(t).push(e):this.headers.set(t,[e])}setHeaderEntries(n,e){let t=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=n.toLowerCase();this.headers.set(r,t),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var Rc=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},Ic=class{encodeKey(n){return em(n)}encodeValue(n){return em(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function Uv(i,n){let e=new Map;return i.length>0&&i.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,s]=o==-1?[n.decodeKey(r),""]:[n.decodeKey(r.slice(0,o)),n.decodeValue(r.slice(o+1))],c=e.get(a)||[];c.push(s),e.set(a,c)}),e}var Gv=/%(\d[a-f0-9])/gi,$v={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function em(i){return encodeURIComponent(i).replace(Gv,(n,e)=>$v[e]??n)}function Ya(i){return`${i}`}var In=class i{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new Ic,n.fromString){if(n.fromObject)throw new O(2805,!1);this.map=Uv(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let t=n.fromObject[e],r=Array.isArray(t)?t.map(Ya):[Ya(t)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(t=>{let r=n[t];Array.isArray(r)?r.forEach(o=>{e.push({param:t,value:o,op:"a"})}):e.push({param:t,value:r,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(t=>e+"="+this.encoder.encodeValue(t)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new i({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push(Ya(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let t=this.map.get(n.param)||[],r=t.indexOf(Ya(n.value));r!==-1&&t.splice(r,1),t.length>0?this.map.set(n.param,t):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};function Wv(i){switch(i){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function tm(i){return typeof ArrayBuffer<"u"&&i instanceof ArrayBuffer}function nm(i){return typeof Blob<"u"&&i instanceof Blob}function im(i){return typeof FormData<"u"&&i instanceof FormData}function qv(i){return typeof URLSearchParams<"u"&&i instanceof URLSearchParams}var rm="Content-Type",om="Accept",am="text/plain",sm="application/json",Yv=`${sm}, ${am}, */*`,rr=class i{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,t,r){this.url=e,this.method=n.toUpperCase();let o;if(Wv(this.method)||r?(this.body=t!==void 0?t:null,o=r):o=t,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new O(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new Gn,this.context??=new Rc,!this.params)this.params=new In,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),c=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+c+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||tm(this.body)||nm(this.body)||im(this.body)||qv(this.body)?this.body:this.body instanceof In?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||im(this.body)?null:nm(this.body)?this.body.type||null:tm(this.body)?null:typeof this.body=="string"?am:this.body instanceof In?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?sm:null}clone(n={}){let e=n.method||this.method,t=n.url||this.url,r=n.responseType||this.responseType,o=n.keepalive??this.keepalive,a=n.priority||this.priority,s=n.cache||this.cache,c=n.mode||this.mode,d=n.redirect||this.redirect,m=n.credentials||this.credentials,p=n.referrer||this.referrer,x=n.integrity||this.integrity,$=n.referrerPolicy||this.referrerPolicy,X=n.transferCache??this.transferCache,J=n.timeout??this.timeout,I=n.body!==void 0?n.body:this.body,le=n.withCredentials??this.withCredentials,ye=n.reportProgress??this.reportProgress,Oe=n.headers||this.headers,ke=n.params||this.params,_e=n.context??this.context;return n.setHeaders!==void 0&&(Oe=Object.keys(n.setHeaders).reduce((Et,_t)=>Et.set(_t,n.setHeaders[_t]),Oe)),n.setParams&&(ke=Object.keys(n.setParams).reduce((Et,_t)=>Et.set(_t,n.setParams[_t]),ke)),new i(e,t,I,{params:ke,headers:Oe,context:_e,reportProgress:ye,responseType:r,withCredentials:le,transferCache:X,keepalive:o,cache:s,priority:a,timeout:J,mode:c,redirect:d,credentials:m,referrer:p,integrity:x,referrerPolicy:$})}},Si=(function(i){return i[i.Sent=0]="Sent",i[i.UploadProgress=1]="UploadProgress",i[i.ResponseHeader=2]="ResponseHeader",i[i.DownloadProgress=3]="DownloadProgress",i[i.Response=4]="Response",i[i.User=5]="User",i})(Si||{}),fo=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,t="OK"){this.headers=n.headers||new Gn,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||t,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},Tc=class i extends fo{constructor(n={}){super(n)}type=Si.ResponseHeader;clone(n={}){return new i({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},po=class i extends fo{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=Si.Response;clone(n={}){return new i({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},or=class extends fo{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},Xv=200,Kv=204;var Zv=/^\)\]\}',?\n/;var Qv=(()=>{class i{xhrFactory;tracingService=l(Ea,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new O(-2800,!1);let t=this.xhrFactory;return U(null).pipe(Re(()=>new at(o=>{let a=t.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((I,le)=>a.setRequestHeader(I,le.join(","))),e.headers.has(om)||a.setRequestHeader(om,Yv),!e.headers.has(rm)){let I=e.detectContentTypeHeader();I!==null&&a.setRequestHeader(rm,I)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let I=e.responseType.toLowerCase();a.responseType=I!=="json"?I:"text"}let s=e.serializeBody(),c=null,d=()=>{if(c!==null)return c;let I=a.statusText||"OK",le=new Gn(a.getAllResponseHeaders()),ye=a.responseURL||e.url;return c=new Tc({headers:le,status:a.status,statusText:I,url:ye}),c},m=this.maybePropagateTrace(()=>{let{headers:I,status:le,statusText:ye,url:Oe}=d(),ke=null;le!==Kv&&(ke=typeof a.response>"u"?a.responseText:a.response),le===0&&(le=ke?Xv:0);let _e=le>=200&&le<300;if(e.responseType==="json"&&typeof ke=="string"){let Et=ke;ke=ke.replace(Zv,"");try{ke=ke!==""?JSON.parse(ke):null}catch(_t){ke=Et,_e&&(_e=!1,ke={error:_t,text:ke})}}_e?(o.next(new po({body:ke,headers:I,status:le,statusText:ye,url:Oe||void 0})),o.complete()):o.error(new or({error:ke,headers:I,status:le,statusText:ye,url:Oe||void 0}))}),p=this.maybePropagateTrace(I=>{let{url:le}=d(),ye=new or({error:I,status:a.status||0,statusText:a.statusText||"Unknown Error",url:le||void 0});o.error(ye)}),x=p;e.timeout&&(x=this.maybePropagateTrace(I=>{let{url:le}=d(),ye=new or({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:le||void 0});o.error(ye)}));let $=!1,X=this.maybePropagateTrace(I=>{$||(o.next(d()),$=!0);let le={type:Si.DownloadProgress,loaded:I.loaded};I.lengthComputable&&(le.total=I.total),e.responseType==="text"&&a.responseText&&(le.partialText=a.responseText),o.next(le)}),J=this.maybePropagateTrace(I=>{let le={type:Si.UploadProgress,loaded:I.loaded};I.lengthComputable&&(le.total=I.total),o.next(le)});return a.addEventListener("load",m),a.addEventListener("error",p),a.addEventListener("timeout",x),a.addEventListener("abort",p),e.reportProgress&&(a.addEventListener("progress",X),s!==null&&a.upload&&a.upload.addEventListener("progress",J)),a.send(s),o.next({type:Si.Sent}),()=>{a.removeEventListener("error",p),a.removeEventListener("abort",p),a.removeEventListener("load",m),a.removeEventListener("timeout",x),e.reportProgress&&(a.removeEventListener("progress",X),s!==null&&a.upload&&a.upload.removeEventListener("progress",J)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(t){return new(t||i)(E(Ci))};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Jv(i,n){return n(i)}function eb(i,n,e){return(t,r)=>nt(e,()=>n(t,o=>i(o,r)))}var tb=new b("",{factory:()=>[]}),lm=new b(""),nb=new b("",{factory:()=>!0});var ib=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=v({token:i,factory:function(t){let r=null;return t?r=new(t||i):r=E(Qv),r},providedIn:"root"})}return i})();var rb=(()=>{class i{backend;injector;chain=null;pendingTasks=l(oh);contributeToStability=l(nb);constructor(e,t){this.backend=e,this.injector=t}handle(e){if(this.chain===null){let t=Array.from(new Set([...this.injector.get(tb),...this.injector.get(lm,[])]));this.chain=t.reduceRight((r,o)=>eb(r,o,this.injector),Jv)}if(this.contributeToStability){let t=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(Ki(t))}else return this.chain(e,t=>this.backend.handle(t))}static \u0275fac=function(t){return new(t||i)(E(ib),E(tt))};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),ob=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=v({token:i,factory:function(t){let r=null;return t?r=new(t||i):r=E(rb),r},providedIn:"root"})}return i})();function Ec(i,n){return{body:n,headers:i.headers,context:i.context,observe:i.observe,params:i.params,reportProgress:i.reportProgress,responseType:i.responseType,withCredentials:i.withCredentials,credentials:i.credentials,transferCache:i.transferCache,timeout:i.timeout,keepalive:i.keepalive,priority:i.priority,cache:i.cache,mode:i.mode,redirect:i.redirect,integrity:i.integrity,referrer:i.referrer,referrerPolicy:i.referrerPolicy}}var Ac=(()=>{class i{handler;constructor(e){this.handler=e}request(e,t,r={}){let o;if(e instanceof rr)o=e;else{let c;r.headers instanceof Gn?c=r.headers:c=new Gn(r.headers);let d;r.params&&(r.params instanceof In?d=r.params:d=new In({fromObject:r.params})),o=new rr(e,t,r.body!==void 0?r.body:null,{headers:c,context:r.context,params:d,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=U(o).pipe(pi(c=>this.handler.handle(c)));if(e instanceof rr||r.observe==="events")return a;let s=a.pipe(pe(c=>c instanceof po));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(K(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new O(2806,!1);return c.body}));case"blob":return s.pipe(K(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new O(2807,!1);return c.body}));case"text":return s.pipe(K(c=>{if(c.body!==null&&typeof c.body!="string")throw new O(2808,!1);return c.body}));default:return s.pipe(K(c=>c.body))}case"response":return s;default:throw new O(2809,!1)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}jsonp(e,t){return this.request("JSONP",e,{params:new In().append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,t={}){return this.request("OPTIONS",e,t)}patch(e,t,r={}){return this.request("PATCH",e,Ec(r,t))}post(e,t,r={}){return this.request("POST",e,Ec(r,t))}put(e,t,r={}){return this.request("PUT",e,Ec(r,t))}static \u0275fac=function(t){return new(t||i)(E(ob))};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var cm=(()=>{class i{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(t){return new(t||i)(E(N))};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var go=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=v({token:i,factory:function(t){let r=null;return t?r=new(t||i):r=E(lb),r},providedIn:"root"})}return i})(),lb=(()=>{class i extends go{_doc;constructor(e){super(),this._doc=e}sanitize(e,t){if(t==null)return null;switch(e){case ft.NONE:return t;case ft.HTML:return nr(t,"HTML")?_i(t):ph(this._doc,String(t)).toString();case ft.STYLE:return nr(t,"Style")?_i(t):t;case ft.SCRIPT:if(nr(t,"Script"))return _i(t);throw new O(5200,!1);case ft.URL:return nr(t,"URL")?_i(t):fh(String(t));case ft.RESOURCE_URL:if(nr(t,"ResourceURL"))return _i(t);throw new O(5201,!1);default:throw new O(5202,!1)}}bypassSecurityTrustHtml(e){return ch(e)}bypassSecurityTrustStyle(e){return dh(e)}bypassSecurityTrustScript(e){return uh(e)}bypassSecurityTrustUrl(e){return hh(e)}bypassSecurityTrustResourceUrl(e){return mh(e)}static \u0275fac=function(t){return new(t||i)(E(N))};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Tn(i){return i.buttons===0||i.detail===0}function An(i){let n=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var kc;function um(){if(kc==null){let i=typeof document<"u"?document.head:null;kc=!!(i&&(i.createShadowRoot||i.attachShadow))}return kc}function xi(i){if(um()){let n=i.getRootNode?i.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function _o(){let i=typeof document<"u"&&document?document.activeElement:null;for(;i&&i.shadowRoot;){let n=i.shadowRoot.activeElement;if(n===i)break;i=n}return i}function Ue(i){return i.composedPath?i.composedPath()[0]:i.target}var Pc;try{Pc=typeof Intl<"u"&&Intl.v8BreakIterator}catch(i){Pc=!1}var me=(()=>{class i{_platformId=l(Ji);isBrowser=this._platformId?Wh(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Pc)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var vo;function hm(){if(vo==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>vo=!0}))}finally{vo=vo||!1}return vo}function ar(i){return hm()?i:!!i.capture}function Ft(i,n=0){return mm(i)?Number(i):arguments.length===2?n:0}function mm(i){return!isNaN(parseFloat(i))&&!isNaN(Number(i))}function Ge(i){return i instanceof P?i.nativeElement:i}var fm=new b("cdk-input-modality-detector-options"),pm={ignoreKeys:[18,17,224,91,16]},gm=650,Oc={passive:!0,capture:!0},_m=(()=>{class i{_platform=l(me);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new je(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Ue(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<gm||(this._modality.next(Tn(e)?"keyboard":"mouse"),this._mostRecentTarget=Ue(e))};_onTouchstart=e=>{if(An(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Ue(e)};constructor(){let e=l(z),t=l(N),r=l(fm,{optional:!0});if(this._options=_(_({},pm),r),this.modalityDetected=this._modality.pipe(xa(1)),this.modalityChanged=this.modalityDetected.pipe(Xl()),this._platform.isBrowser){let o=l(He).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(t,"keydown",this._onKeydown,Oc),o.listen(t,"mousedown",this._onMousedown,Oc),o.listen(t,"touchstart",this._onTouchstart,Oc)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),bo=(function(i){return i[i.IMMEDIATE=0]="IMMEDIATE",i[i.EVENTUAL=1]="EVENTUAL",i})(bo||{}),vm=new b("cdk-focus-monitor-default-options"),Xa=ar({passive:!0,capture:!0}),Ct=(()=>{class i{_ngZone=l(z);_platform=l(me);_inputModalityDetector=l(_m);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=l(N);_stopInputModalityDetector=new y;constructor(){let e=l(vm,{optional:!0});this._detectionMode=e?.detectionMode||bo.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=Ue(e);for(let r=t;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,t=!1){let r=Ge(e);if(!this._platform.isBrowser||r.nodeType!==1)return U();let o=xi(r)||this._document,a=this._elementInfo.get(r);if(a)return t&&(a.checkChildren=!0),a.subject;let s={checkChildren:t,subject:new y,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let t=Ge(e),r=this._elementInfo.get(t);r&&(r.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(r))}focusVia(e,t,r){let o=Ge(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,c])=>this._originChanged(s,t,c)):(this._setOrigin(t),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===bo.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===bo.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?gm:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,t){let r=this._elementInfo.get(t),o=Ue(e);!r||!r.checkChildren&&t!==o||this._originChanged(t,this._getFocusOrigin(o),r)}_onBlur(e,t){let r=this._elementInfo.get(t);!r||r.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(r,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,r=this._rootNodeFocusListenerCount.get(t)||0;r||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,Xa),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,Xa)}),this._rootNodeFocusListenerCount.set(t,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(ue(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let r=this._rootNodeFocusListenerCount.get(t);r>1?this._rootNodeFocusListenerCount.set(t,r-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Xa),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Xa),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,r){this._setClasses(e,t),this._emitOrigin(r,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&t.push([o,r])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Ka=new WeakMap,Fe=(()=>{class i{_appRef;_injector=l(H);_environmentInjector=l(tt);load(e){let t=this._appRef=this._appRef||this._injector.get(wt),r=Ka.get(t);r||(r={loaders:new Set,refs:[]},Ka.set(t,r),t.onDestroy(()=>{Ka.get(t)?.refs.forEach(o=>o.destroy()),Ka.delete(t)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(Na(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var sr=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=w({type:i,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2,changeDetection:0})}return i})(),Za;function cb(){if(Za===void 0&&(Za=null,typeof window<"u")){let i=window;i.trustedTypes!==void 0&&(Za=i.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return Za}function Mi(i){return cb()?.createHTML(i)||i}function bm(i,n,e){let t=e.sanitize(ft.HTML,n);i.innerHTML=Mi(t||"")}function $n(i){return Array.isArray(i)?i:[i]}var ym=new Set,Ei,lr=(()=>{class i{_platform=l(me);_nonce=l(tr,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):ub}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&db(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function db(i,n){if(!ym.has(i))try{Ei||(Ei=document.createElement("style"),n&&Ei.setAttribute("nonce",n),Ei.setAttribute("type","text/css"),document.head.appendChild(Ei)),Ei.sheet&&(Ei.sheet.insertRule(`@media ${i} {body{ }}`,0),ym.add(i))}catch(e){console.error(e)}}function ub(i){return{matches:i==="all"||i==="",media:i,addListener:()=>{},removeListener:()=>{}}}var yo=(()=>{class i{_mediaMatcher=l(lr);_zone=l(z);_queries=new Map;_destroySubject=new y;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return wm($n(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=wm($n(e)).map(a=>this._registerQuery(a).observable),o=Xr(r);return o=Ca(o.pipe(xe(1)),o.pipe(xa(1),Sa(0))),o.pipe(K(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:c,query:d})=>{s.matches=s.matches||c,s.breakpoints[d]=c}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),o={observable:new at(a=>{let s=c=>this._zone.run(()=>a.next(c));return t.addListener(s),()=>{t.removeListener(s)}}).pipe(We(t),K(({matches:a})=>({query:e,matches:a})),ue(this._destroySubject)),mql:t};return this._queries.set(e,o),o}static \u0275fac=function(t){return new(t||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function wm(i){return i.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}var hb=(()=>{class i{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Qa=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({providers:[hb]})}return i})();var Ja=(()=>{class i{_platform=l(me);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return fb(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let t=mb(Cb(e));if(t&&(Cm(t)===-1||!this.isVisible(t)))return!1;let r=e.nodeName.toLowerCase(),o=Cm(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!yb(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,t){return wb(e)&&!this.isDisabled(e)&&(t?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function mb(i){try{return i.frameElement}catch(n){return null}}function fb(i){return!!(i.offsetWidth||i.offsetHeight||typeof i.getClientRects=="function"&&i.getClientRects().length)}function pb(i){let n=i.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function gb(i){return vb(i)&&i.type=="hidden"}function _b(i){return bb(i)&&i.hasAttribute("href")}function vb(i){return i.nodeName.toLowerCase()=="input"}function bb(i){return i.nodeName.toLowerCase()=="a"}function xm(i){if(!i.hasAttribute("tabindex")||i.tabIndex===void 0)return!1;let n=i.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function Cm(i){if(!xm(i))return null;let n=parseInt(i.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function yb(i){let n=i.nodeName.toLowerCase(),e=n==="input"&&i.type;return e==="text"||e==="password"||n==="select"||n==="textarea"}function wb(i){return gb(i)?!1:pb(i)||_b(i)||i.hasAttribute("contenteditable")||xm(i)}function Cb(i){return i.ownerDocument&&i.ownerDocument.defaultView||window}var Nc=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,e,t,r,o=!1,a){this._element=n,this._checker=e,this._ngZone=t,this._document=r,this._injector=a,o||this.attachAnchors()}destroy(){let n=this._startAnchor,e=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let e=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let t=this._getFirstTabbableElement(e);return t?.focus(n),!!t}return e.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let e=this._getRegionBoundary("start");return e&&e.focus(n),!!e}focusLastTabbableElement(n){let e=this._getRegionBoundary("end");return e&&e.focus(n),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let t=0;t<e.length;t++){let r=e[t].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[t]):null;if(r)return r}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let t=e.length-1;t>=0;t--){let r=e[t].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[t]):null;if(r)return r}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,e){n?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){this._injector?ze(n,{injector:this._injector}):setTimeout(n)}},Lc=(()=>{class i{_checker=l(Ja);_ngZone=l(z);_document=l(N);_injector=l(H);constructor(){l(Fe).load(sr)}create(e,t=!1){return new Nc(e,this._checker,this._ngZone,this._document,t,this._injector)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Mm=new b("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),Em=new b("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),Db=0,wo=(()=>{class i{_ngZone=l(z);_defaultOptions=l(Em,{optional:!0});_liveElement;_document=l(N);_sanitizer=l(go);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=l(Mm,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...t){let r=this._defaultOptions,o,a;return t.length===1&&typeof t[0]=="number"?a=t[0]:[o,a]=t,this.clear(),clearTimeout(this._previousTimeout),o||(o=r&&r.politeness?r.politeness:"polite"),a==null&&r&&(a=r.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(s=>this._currentResolve=s)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:bm(this._liveElement,e,this._sanitizer),typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",t=this._document.getElementsByClassName(e),r=this._document.createElement("div");for(let o=0;o<t.length;o++)t[o].remove();return r.classList.add(e),r.classList.add("cdk-visually-hidden"),r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live","polite"),r.id=`cdk-live-announcer-${Db++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(e){let t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<t.length;r++){let o=t[r],a=o.getAttribute("aria-owns");a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Wn=(function(i){return i[i.NONE=0]="NONE",i[i.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",i[i.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",i})(Wn||{}),Dm="cdk-high-contrast-black-on-white",Sm="cdk-high-contrast-white-on-black",Fc="cdk-high-contrast-active",Rm=(()=>{class i{_platform=l(me);_hasCheckedHighContrastMode=!1;_document=l(N);_breakpointSubscription;constructor(){this._breakpointSubscription=l(yo).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return Wn.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let t=this._document.defaultView||window,r=t&&t.getComputedStyle?t.getComputedStyle(e):null,o=(r&&r.backgroundColor||"").replace(/ /g,"");switch(e.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return Wn.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return Wn.BLACK_ON_WHITE}return Wn.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(Fc,Dm,Sm),this._hasCheckedHighContrastMode=!0;let t=this.getHighContrastMode();t===Wn.BLACK_ON_WHITE?e.add(Fc,Dm):t===Wn.WHITE_ON_BLACK&&e.add(Fc,Sm)}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Ri=(()=>{class i{constructor(){l(Rm)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({imports:[Qa]})}return i})();var Sb=200,es=class{_letterKeyStream=new y;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new y;selectedItem=this._selectedItem;constructor(n,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:Sb;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(Qe(e=>this._pressedLetters.push(e)),Sa(n),pe(()=>this._pressedLetters.length>0),K(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let r=(this._selectedItemIndex+t)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function Ke(i,...n){return n.length?n.some(e=>i[e]):i.altKey||i.shiftKey||i.ctrlKey||i.metaKey}var cr=class{_items;_activeItemIndex=k(-1);_activeItem=k(null);_wrap=!1;_typeaheadSubscription=Ie.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof Kr?this._itemChangesSubscription=n.changes.subscribe(t=>this._itemsChanged(t.toArray())):Un(n)&&(this._effectRef=ut(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new y;change=new y;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new es(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||Ke(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),t=typeof n=="number"?n:e.indexOf(n),r=e[t];this._activeItem.set(r??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let r=(this._activeItemIndex()+n*t+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let t=this._getItemsArray();if(t[n]){for(;this._skipPredicateFn(t[n]);)if(n+=e,!t[n])return;this.setActiveItem(n)}}_getItemsArray(){return Un(this._items)?this._items():this._items instanceof Kr?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let t=n.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t))}}};var Co=class extends cr{setActiveItem(n){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(n),this.activeItem&&this.activeItem.setActiveStyles()}};var Do=class extends cr{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var Bc={},ve=class i{_appId=l(Mn);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){return this._appId!=="ng"&&(n+=this._appId),Bc.hasOwnProperty(n)||(Bc[n]=0),`${n}${e?i._infix+"-":""}${Bc[n]++}`}static \u0275fac=function(e){return new(e||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})};var Am=" ";function zc(i,n,e){let t=ns(i,n);e=e.trim(),!t.some(r=>r.trim()===e)&&(t.push(e),i.setAttribute(n,t.join(Am)))}function is(i,n,e){let t=ns(i,n);e=e.trim();let r=t.filter(o=>o!==e);r.length?i.setAttribute(n,r.join(Am)):i.removeAttribute(n)}function ns(i,n){return i.getAttribute(n)?.match(/\S+/g)??[]}var km="cdk-describedby-message",ts="cdk-describedby-host",jc=0,Hc=(()=>{class i{_platform=l(me);_document=l(N);_messageRegistry=new Map;_messagesContainer=null;_id=`${jc++}`;constructor(){l(Fe).load(sr),this._id=l(Mn)+"-"+jc++}describe(e,t,r){if(!this._canBeDescribed(e,t))return;let o=Vc(t,r);typeof t!="string"?(Tm(t,this._id),this._messageRegistry.set(o,{messageElement:t,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(t,r),this._isElementDescribedByMessage(e,o)||this._addMessageReference(e,o)}removeDescription(e,t,r){if(!t||!this._isElementNode(e))return;let o=Vc(t,r);if(this._isElementDescribedByMessage(e,o)&&this._removeMessageReference(e,o),typeof t=="string"){let a=this._messageRegistry.get(o);a&&a.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${ts}="${this._id}"]`);for(let t=0;t<e.length;t++)this._removeCdkDescribedByReferenceIds(e[t]),e[t].removeAttribute(ts);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,t){let r=this._document.createElement("div");Tm(r,this._id),r.textContent=e,t&&r.setAttribute("role",t),this._createMessagesContainer(),this._messagesContainer.appendChild(r),this._messageRegistry.set(Vc(e,t),{messageElement:r,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",t=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let o=0;o<t.length;o++)t[o].remove();let r=this._document.createElement("div");r.style.visibility="hidden",r.classList.add(e),r.classList.add("cdk-visually-hidden"),this._platform.isBrowser||r.setAttribute("platform","server"),this._document.body.appendChild(r),this._messagesContainer=r}_removeCdkDescribedByReferenceIds(e){let t=ns(e,"aria-describedby").filter(r=>r.indexOf(km)!=0);e.setAttribute("aria-describedby",t.join(" "))}_addMessageReference(e,t){let r=this._messageRegistry.get(t);zc(e,"aria-describedby",r.messageElement.id),e.setAttribute(ts,this._id),r.referenceCount++}_removeMessageReference(e,t){let r=this._messageRegistry.get(t);r.referenceCount--,is(e,"aria-describedby",r.messageElement.id),e.removeAttribute(ts)}_isElementDescribedByMessage(e,t){let r=ns(e,"aria-describedby"),o=this._messageRegistry.get(t),a=o&&o.messageElement.id;return!!a&&r.indexOf(a)!=-1}_canBeDescribed(e,t){if(!this._isElementNode(e))return!1;if(t&&typeof t=="object")return!0;let r=t==null?"":`${t}`.trim(),o=e.getAttribute("aria-label");return r?!o||o.trim()!==r:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(t){return new(t||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Vc(i,n){return typeof i=="string"?`${n||""}/${i}`:i}function Tm(i,n){i.id||(i.id=`${km}-${n}-${jc++}`)}var Pm={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};function Uc(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function Ye(i){return i==null?"":typeof i=="string"?i:`${i}px`}var xb=new b("cdk-dir-doc",{providedIn:"root",factory:()=>l(N)}),Mb=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Om(i){let n=i?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?Mb.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var $e=(()=>{class i{get value(){return this.valueSignal()}valueSignal=k("ltr");change=new j;constructor(){let e=l(xb,{optional:!0});if(e){let t=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(Om(t||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Gt=(function(i){return i[i.NORMAL=0]="NORMAL",i[i.NEGATED=1]="NEGATED",i[i.INVERTED=2]="INVERTED",i})(Gt||{}),rs,Pi;function os(){if(Pi==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Pi=!1,Pi;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)Pi=!0;else{let i=Element.prototype.scrollTo;i?Pi=!/\{\s*\[native code\]\s*\}/.test(i.toString()):Pi=!1}}return Pi}function dr(){if(typeof document!="object"||!document)return Gt.NORMAL;if(rs==null){let i=document.createElement("div"),n=i.style;i.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let e=document.createElement("div"),t=e.style;t.width="2px",t.height="1px",i.appendChild(e),document.body.appendChild(i),rs=Gt.NORMAL,i.scrollLeft===0&&(i.scrollLeft=1,rs=i.scrollLeft===0?Gt.NEGATED:Gt.INVERTED),i.remove()}return rs}var se=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({})}return i})();var Eb=20,sn=(()=>{class i{_ngZone=l(z);_platform=l(me);_renderer=l(He).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new y;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=Eb){return this._platform.isBrowser?new at(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(Yl(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):U()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let r=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(pe(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&t.push(o)}),t}_scrollableContainsElement(e,t){let r=Ge(t),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(t){return new(t||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Gc=(()=>{class i{elementRef=l(P);scrollDispatcher=l(sn);ngZone=l(z);dir=l($e,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new y;_renderer=l(de);_cleanupScroll;_elementScrolled=new y;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let t=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),r&&dr()!=Gt.NORMAL?(e.left!=null&&(e.right=t.scrollWidth-t.clientWidth-e.left),dr()==Gt.INVERTED?e.left=e.right:dr()==Gt.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let t=this.elementRef.nativeElement;os()?t.scrollTo(e):(e.top!=null&&(t.scrollTop=e.top),e.left!=null&&(t.scrollLeft=e.left))}measureScrollOffset(e){let t="left",r="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let a=this.dir&&this.dir.value=="rtl";return e=="start"?e=a?r:t:e=="end"&&(e=a?t:r),a&&dr()==Gt.INVERTED?e==t?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:a&&dr()==Gt.NEGATED?e==t?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==t?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(t){return new(t||i)};static \u0275dir=R({type:i,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return i})(),Rb=20,Nt=(()=>{class i{_platform=l(me);_listeners;_viewportSize=null;_change=new y;_document=l(N);constructor(){let e=l(z),t=l(He).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[t.listen("window","resize",r),t.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+t,height:r,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),a=-o.top||e.body?.scrollTop||t.scrollY||r.scrollTop||0,s=-o.left||e.body?.scrollLeft||t.scrollX||r.scrollLeft||0;return{top:a,left:s}}change(e=Rb){return e>0?this._change.pipe(Yl(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var an=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({})}return i})(),$c=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({imports:[se,an,se,an]})}return i})();var So=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},$t=class extends So{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,e,t,r,o){super(),this.component=n,this.viewContainerRef=e,this.injector=t,this.projectableNodes=r,this.bindings=o||null}},Wt=class extends So{templateRef;viewContainerRef;context;injector;constructor(n,e,t,r){super(),this.templateRef=n,this.viewContainerRef=e,this.context=t,this.injector=r}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},Wc=class extends So{element;constructor(n){super(),this.element=n instanceof P?n.nativeElement:n}},qn=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof $t)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof Wt)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof Wc)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},xo=class extends qn{outletElement;_appRef;_defaultInjector;constructor(n,e,t){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=t}attachComponentPortal(n){let e;if(n.viewContainerRef){let t=n.injector||n.viewContainerRef.injector,r=t.get(Ra,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:t,ngModuleRef:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,r=n.injector||this._defaultInjector||H.NULL,o=r.get(tt,t.injector);e=Na(n.component,{elementInjector:r,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,t=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return t.rootNodes.forEach(r=>this.outletElement.appendChild(r)),t.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(t);r!==-1&&e.remove(r)}),this._attachedPortal=n,t}attachDomPortal=n=>{let e=n.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var Yn=(()=>{class i extends qn{_moduleRef=l(Ra,{optional:!0});_document=l(N);_viewContainerRef=l(lt);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new j;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return t!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),t.parentNode.insertBefore(r,t),this._getRootNode().appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(t,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(t){return new(t||i)};static \u0275dir=R({type:i,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[Me]})}return i})(),Xn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({})}return i})();var Fm=os();function mr(i){return new as(i.get(Nt),i.get(N))}var as=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=Ye(-this._previousScrollPosition.left),n.style.top=Ye(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,t=n.style,r=e.style,o=t.scrollBehavior||"",a=r.scrollBehavior||"";this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),Fm&&(t.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Fm&&(t.scrollBehavior=o,r.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function Hm(i,n){return new ss(i.get(sn),i.get(z),i.get(Nt),n)}var ss=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,t,r){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=t,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(pe(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Mo=class{enable(){}disable(){}attach(){}};function qc(i,n){return n.some(e=>{let t=i.bottom<e.top,r=i.top>e.bottom,o=i.right<e.left,a=i.left>e.right;return t||r||o||a})}function Nm(i,n){return n.some(e=>{let t=i.top<e.top,r=i.bottom>e.bottom,o=i.left<e.left,a=i.right>e.right;return t||r||o||a})}function Pn(i,n){return new ls(i.get(sn),i.get(Nt),i.get(z),n)}var ls=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,t,r){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=t,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:r}=this._viewportRuler.getViewportSize();qc(e,[{width:t,height:r,bottom:r,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},Um=(()=>{class i{_injector=l(H);constructor(){}noop=()=>new Mo;close=e=>Hm(this._injector,e);block=()=>mr(this._injector);reposition=e=>Pn(this._injector,e);static \u0275fac=function(t){return new(t||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),qt=class{positionStrategy;scrollStrategy=new Mo;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let t of e)n[t]!==void 0&&(this[t]=n[t])}}};var cs=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var Gm=(()=>{class i{_attachedOverlays=[];_document=l(N);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static \u0275fac=function(t){return new(t||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),$m=(()=>{class i extends Gm{_ngZone=l(z);_renderer=l(He).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let r=t.length-1;r>-1;r--){let o=t[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=bt(i)))(r||i)}})();static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Wm=(()=>{class i extends Gm{_platform=l(me);_ngZone=l(z);_renderer=l(He).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(t,"pointerdown",this._pointerDownListener,r),o.listen(t,"click",this._clickListener,r),o.listen(t,"auxclick",this._clickListener,r),o.listen(t,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Ue(e)};_clickListener=e=>{let t=Ue(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let s=o[a],c=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,c))){if(Lm(s.overlayElement,t)||Lm(s.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>c.next(e)):c.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=bt(i)))(r||i)}})();static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Lm(i,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=n;for(;t;){if(t===i)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var qm=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=w({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2,changeDetection:0})}return i})(),hs=(()=>{class i{_platform=l(me);_containerElement;_document=l(N);_styleLoader=l(Fe);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Uc()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let t=this._document.createElement("div");t.classList.add(e),Uc()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(qm)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Yc=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,t,r){this._renderer=e,this._ngZone=t,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Xc(i){return i&&i.nodeType===1}var ur=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new y;_attachments=new y;_detachments=new y;_positionStrategy;_scrollStrategy;_locationChanges=Ie.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new y;_outsidePointerEvents=new y;_afterNextRenderRef;constructor(n,e,t,r,o,a,s,c,d,m=!1,p,x){this._portalOutlet=n,this._host=e,this._pane=t,this._config=r,this._ngZone=o,this._keyboardDispatcher=a,this._document=s,this._location=c,this._outsideClickDispatcher=d,this._animationsDisabled=m,this._injector=p,this._renderer=x,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=ze(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=_(_({},this._config),n),this._updateElementSize()}setDirection(n){this._config=ie(_({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=Ye(this._config.width),n.height=Ye(this._config.height),n.minWidth=Ye(this._config.minWidth),n.minHeight=Ye(this._config.minHeight),n.maxWidth=Ye(this._config.maxWidth),n.maxHeight=Ye(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Xc(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch(n){}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Yc(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,t){let r=$n(e||[]).filter(o=>!!o);r.length&&(t?n.classList.add(...r):n.classList.remove(...r))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=ze(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},Bm="cdk-overlay-connected-position-bounding-box",Tb=/([A-Za-z%]+)$/;function Fi(i,n){return new ds(n,i.get(Nt),i.get(N),i.get(me),i.get(hs))}var ds=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new y;_resizeSubscription=Ie.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,t,r,o){this._viewportRuler=e,this._document=t,this._platform=r,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(Bm),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,t=this._viewportRect,r=this._containerRect,o=[],a;for(let s of this._preferredPositions){let c=this._getOriginPoint(n,r,s),d=this._getOverlayPoint(c,e,s),m=this._getOverlayFit(d,e,t,s);if(m.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,c);return}if(this._canFitWithFlexibleDimensions(m,d,t)){o.push({position:s,origin:c,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(c,s)});continue}(!a||a.overlayFit.visibleArea<m.visibleArea)&&(a={overlayFit:m,overlayPoint:d,originPoint:c,position:s,overlayRect:e})}if(o.length){let s=null,c=-1;for(let d of o){let m=d.boundingBoxRect.width*d.boundingBoxRect.height*(d.position.weight||1);m>c&&(c=m,s=d)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Oi(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Bm),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof P?this._origin.nativeElement:Xc(this._origin)?this._origin:null}_getOriginPoint(n,e,t){let r;if(t.originX=="center")r=n.left+n.width/2;else{let a=this._isRtl()?n.right:n.left,s=this._isRtl()?n.left:n.right;r=t.originX=="start"?a:s}e.left<0&&(r-=e.left);let o;return t.originY=="center"?o=n.top+n.height/2:o=t.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(n,e,t){let r;t.overlayX=="center"?r=-e.width/2:t.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return t.overlayY=="center"?o=-e.height/2:o=t.overlayY=="top"?0:-e.height,{x:n.x+r,y:n.y+o}}_getOverlayFit(n,e,t,r){let o=jm(e),{x:a,y:s}=n,c=this._getOffset(r,"x"),d=this._getOffset(r,"y");c&&(a+=c),d&&(s+=d);let m=0-a,p=a+o.width-t.width,x=0-s,$=s+o.height-t.height,X=this._subtractOverflows(o.width,m,p),J=this._subtractOverflows(o.height,x,$),I=X*J;return{visibleArea:I,isCompletelyWithinViewport:o.width*o.height===I,fitsInViewportVertically:J===o.height,fitsInViewportHorizontally:X==o.width}}_canFitWithFlexibleDimensions(n,e,t){if(this._hasFlexibleDimensions){let r=t.bottom-e.y,o=t.right-e.x,a=Vm(this._overlayRef.getConfig().minHeight),s=Vm(this._overlayRef.getConfig().minWidth),c=n.fitsInViewportVertically||a!=null&&a<=r,d=n.fitsInViewportHorizontally||s!=null&&s<=o;return c&&d}return!1}_pushOverlayOnScreen(n,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let r=jm(e),o=this._viewportRect,a=Math.max(n.x+r.width-o.width,0),s=Math.max(n.y+r.height-o.height,0),c=Math.max(o.top-t.top-n.y,0),d=Math.max(o.left-t.left-n.x,0),m=0,p=0;return r.width<=o.width?m=d||-a:m=n.x<this._getViewportMarginStart()?o.left-t.left-n.x:0,r.height<=o.height?p=c||-s:p=n.y<this._getViewportMarginTop()?o.top-t.top-n.y:0,this._previousPushAmount={x:m,y:p},{x:n.x+m,y:n.y+p}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!Ab(this._lastScrollVisibility,t)){let r=new cs(n,t);this._positionChanges.next(r)}this._lastScrollVisibility=t}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,r=n.overlayY;n.overlayX==="center"?t="center":this._isRtl()?t=n.overlayX==="start"?"right":"left":t=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${t} ${r}`}_calculateBoundingBoxRect(n,e){let t=this._viewportRect,r=this._isRtl(),o,a,s;if(e.overlayY==="top")a=n.y,o=t.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=t.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=t.height-s+this._getViewportMarginTop();else{let $=Math.min(t.bottom-n.y+t.top,n.y),X=this._lastBoundingBoxSize.height;o=$*2,a=n.y-$,o>X&&!this._isInitialRender&&!this._growAfterOpen&&(a=n.y-X/2)}let c=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,d=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,m,p,x;if(d)x=t.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),m=n.x-this._getViewportMarginStart();else if(c)p=n.x,m=t.right-n.x-this._getViewportMarginEnd();else{let $=Math.min(t.right-n.x+t.left,n.x),X=this._lastBoundingBoxSize.width;m=$*2,p=n.x-$,m>X&&!this._isInitialRender&&!this._growAfterOpen&&(p=n.x-X/2)}return{top:a,left:p,bottom:s,right:x,width:m,height:o}}_setBoundingBoxStyles(n,e){let t=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;r.width=Ye(t.width),r.height=Ye(t.height),r.top=Ye(t.top)||"auto",r.bottom=Ye(t.bottom)||"auto",r.left=Ye(t.left)||"auto",r.right=Ye(t.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=Ye(o)),a&&(r.maxWidth=Ye(a))}this._lastBoundingBoxSize=t,Oi(this._boundingBox.style,r)}_resetBoundingBoxStyles(){Oi(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Oi(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let t={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(r){let m=this._viewportRuler.getViewportScrollPosition();Oi(t,this._getExactOverlayY(e,n,m)),Oi(t,this._getExactOverlayX(e,n,m))}else t.position="static";let s="",c=this._getOffset(e,"x"),d=this._getOffset(e,"y");c&&(s+=`translateX(${c}px) `),d&&(s+=`translateY(${d}px)`),t.transform=s.trim(),a.maxHeight&&(r?t.maxHeight=Ye(a.maxHeight):o&&(t.maxHeight="")),a.maxWidth&&(r?t.maxWidth=Ye(a.maxWidth):o&&(t.maxWidth="")),Oi(this._pane.style,t)}_getExactOverlayY(n,e,t){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t)),n.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;r.bottom=`${a-(o.y+this._overlayRect.height)}px`}else r.top=Ye(o.y);return r}_getExactOverlayX(n,e,t){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t));let a;if(this._isRtl()?a=n.overlayX==="end"?"left":"right":a=n.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;r.right=`${s-(o.x+this._overlayRect.width)}px`}else r.left=Ye(o.x);return r}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Nm(n,t),isOriginOutsideView:qc(n,t),isOverlayClipped:Nm(e,t),isOverlayOutsideView:qc(e,t)}}_subtractOverflows(n,...e){return e.reduce((t,r)=>t-Math.max(r,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+n-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&$n(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof P)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,t=n.height||0;return{top:n.y,bottom:n.y+t,left:n.x,right:n.x+e,height:t,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let t=e.getBoundingClientRect();return n&&(e.style.display=""),t}};function Oi(i,n){for(let e in n)n.hasOwnProperty(e)&&(i[e]=n[e]);return i}function Vm(i){if(typeof i!="number"&&i!=null){let[n,e]=i.split(Tb);return!e||e==="px"?parseFloat(n):null}return i||null}function jm(i){return{top:Math.floor(i.top),right:Math.floor(i.right),bottom:Math.floor(i.bottom),left:Math.floor(i.left),width:Math.floor(i.width),height:Math.floor(i.height)}}function Ab(i,n){return i===n?!0:i.isOriginClipped===n.isOriginClipped&&i.isOriginOutsideView===n.isOriginOutsideView&&i.isOverlayClipped===n.isOverlayClipped&&i.isOverlayOutsideView===n.isOverlayOutsideView}var zm="cdk-global-overlay-wrapper";function Kn(i){return new us}var us=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(zm),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:a,maxHeight:s}=t,c=(r==="100%"||r==="100vw")&&(!a||a==="100%"||a==="100vw"),d=(o==="100%"||o==="100vh")&&(!s||s==="100%"||s==="100vh"),m=this._xPosition,p=this._xOffset,x=this._overlayRef.getConfig().direction==="rtl",$="",X="",J="";c?J="flex-start":m==="center"?(J="center",x?X=p:$=p):x?m==="left"||m==="end"?(J="flex-end",$=p):(m==="right"||m==="start")&&(J="flex-start",X=p):m==="left"||m==="start"?(J="flex-start",$=p):(m==="right"||m==="end")&&(J="flex-end",X=p),n.position=this._cssPosition,n.marginLeft=c?"0":$,n.marginTop=d?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=c?"0":X,e.justifyContent=J,e.alignItems=d?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(zm),t.justifyContent=t.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},Ym=(()=>{class i{_injector=l(H);constructor(){}global(){return Kn()}flexibleConnectedTo(e){return Fi(this._injector,e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Eo=new b("OVERLAY_DEFAULT_CONFIG");function Yt(i,n){i.get(Fe).load(qm);let e=i.get(hs),t=i.get(N),r=i.get(ve),o=i.get(wt),a=i.get($e),s=i.get(de,null,{optional:!0})||i.get(He).createRenderer(null,null),c=new qt(n),d=i.get(Eo,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||a.value,"showPopover"in t.body?c.usePopover=n?.usePopover??d:c.usePopover=!1;let m=t.createElement("div"),p=t.createElement("div");m.id=r.getId("cdk-overlay-"),m.classList.add("cdk-overlay-pane"),p.appendChild(m),c.usePopover&&(p.setAttribute("popover","manual"),p.classList.add("cdk-overlay-popover"));let x=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return Xc(x)?x.after(p):x?.type==="parent"?x.element.appendChild(p):e.getContainerElement().appendChild(p),new ur(new xo(m,o,i),p,m,c,i.get(z),i.get($m),t,i.get(rn),i.get(Wm),n?.disableAnimations??i.get(er,null,{optional:!0})==="NoopAnimations",i.get(tt),s)}var Xm=(()=>{class i{scrollStrategies=l(Um);_positionBuilder=l(Ym);_injector=l(H);constructor(){}create(e){return Yt(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(t){return new(t||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),kb=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],Pb=new b("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let i=l(H);return()=>Pn(i)}}),hr=(()=>{class i{elementRef=l(P);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=R({type:i,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return i})(),Km=new b("cdk-connected-overlay-default-config"),ms=(()=>{class i{_dir=l($e,{optional:!0});_injector=l(H);_overlayRef;_templatePortal;_backdropSubscription=Ie.EMPTY;_attachSubscription=Ie.EMPTY;_detachSubscription=Ie.EMPTY;_positionSubscription=Ie.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=l(Pb);_ngZone=l(z);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new j;positionChange=new j;attach=new j;detach=new j;overlayKeydown=new j;overlayOutsideClick=new j;constructor(){let e=l(yt),t=l(lt),r=l(Km,{optional:!0}),o=l(Eo,{optional:!0});this.usePopover=o?.usePopover===!1?null:"global",this._templatePortal=new Wt(e,t),this.scrollStrategy=this._scrollStrategyFactory(),r&&this._assignConfig(r)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=kb);let e=this._overlayRef=Yt(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(t=>{this.overlayKeydown.next(t),t.keyCode===27&&!this.disableClose&&!Ke(t)&&(t.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(t=>{let r=this._getOriginElement(),o=Ue(t);(!r||r!==o&&!r.contains(o))&&this.overlayOutsideClick.next(t)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),t=new qt({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(t.height=this.height),(this.minWidth||this.minWidth===0)&&(t.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(t.minHeight=this.minHeight),this.backdropClass&&(t.backdropClass=this.backdropClass),this.panelClass&&(t.panelClass=this.panelClass),t}_updatePositionStrategy(e){let t=this.positions.map(r=>({originX:r.originX,originY:r.originY,overlayX:r.overlayX,overlayY:r.overlayY,offsetX:r.offsetX||this.offsetX,offsetY:r.offsetY||this.offsetY,panelClass:r.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(t).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=Fi(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof hr?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof hr?this.origin.elementRef.nativeElement:this.origin instanceof P?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(t=>this.backdropClick.emit(t)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(Ju(()=>this.positionChange.observers.length>0)).subscribe(t=>{this._ngZone.run(()=>this.positionChange.emit(t)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(t){return new(t||i)};static \u0275dir=R({type:i,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",F],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",F],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",F],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",F],push:[2,"cdkConnectedOverlayPush","push",F],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",F],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",F],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[Le]})}return i})(),Lt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({providers:[Xm],imports:[se,Xn,$c,$c]})}return i})();var fr,Zm=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Kc(){if(fr)return fr;if(typeof document!="object"||!document)return fr=new Set(Zm),fr;let i=document.createElement("input");return fr=new Set(Zm.filter(n=>(i.setAttribute("type",n),i.type===n))),fr}var Ob=new b("MATERIAL_ANIMATIONS"),Qm=null;function Zc(){return l(Ob,{optional:!0})?.animationsDisabled||l(er,{optional:!0})==="NoopAnimations"?"di-disabled":(Qm??=l(lr).matchMedia("(prefers-reduced-motion)").matches,Qm?"reduced-motion":"enabled")}function Ee(){return Zc()!=="enabled"}function On(i){return i!=null&&`${i}`!="false"}var Tt=(function(i){return i[i.FADING_IN=0]="FADING_IN",i[i.VISIBLE=1]="VISIBLE",i[i.FADING_OUT=2]="FADING_OUT",i[i.HIDDEN=3]="HIDDEN",i})(Tt||{}),fs=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Tt.HIDDEN;constructor(n,e,t,r=!1){this._renderer=n,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},Jm=ar({passive:!0,capture:!0}),Qc=class{_events=new Map;addHandler(n,e,t,r){let o=this._events.get(e);if(o){let a=o.get(t);a?a.add(r):o.set(t,new Set([r]))}else this._events.set(e,new Map([[t,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Jm)})}removeHandler(n,e,t){let r=this._events.get(n);if(!r)return;let o=r.get(e);o&&(o.delete(t),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,Jm)))}_delegateEventHandler=n=>{let e=Ue(n);e&&this._events.get(n.type)?.forEach((t,r)=>{(r===e||r.contains(e))&&t.forEach(o=>o.handleEvent(n))})}},pr={enterDuration:225,exitDuration:150},Fb=800,ef=ar({passive:!0,capture:!0}),tf=["mousedown","touchstart"],nf=["mouseup","mouseleave","touchend","touchcancel"],Nb=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=w({type:i,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.mat-ripple {
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
`],encapsulation:2,changeDetection:0})}return i})(),gr=class i{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Qc;constructor(n,e,t,r,o){this._target=n,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=Ge(t)),o&&o.get(Fe).load(Nb)}fadeInRipple(n,e,t={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=_(_({},pr),t.animation);t.centered&&(n=r.left+r.width/2,e=r.top+r.height/2);let a=t.radius||Lb(n,e,r),s=n-r.left,c=e-r.top,d=o.enterDuration,m=document.createElement("div");m.classList.add("mat-ripple-element"),m.style.left=`${s-a}px`,m.style.top=`${c-a}px`,m.style.height=`${a*2}px`,m.style.width=`${a*2}px`,t.color!=null&&(m.style.backgroundColor=t.color),m.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(m);let p=window.getComputedStyle(m),x=p.transitionProperty,$=p.transitionDuration,X=x==="none"||$==="0s"||$==="0s, 0s"||r.width===0&&r.height===0,J=new fs(this,m,t,X);m.style.transform="scale3d(1, 1, 1)",J.state=Tt.FADING_IN,t.persistent||(this._mostRecentTransientRipple=J);let I=null;return!X&&(d||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let le=()=>{I&&(I.fallbackTimer=null),clearTimeout(Oe),this._finishRippleTransition(J)},ye=()=>this._destroyRipple(J),Oe=setTimeout(ye,d+100);m.addEventListener("transitionend",le),m.addEventListener("transitioncancel",ye),I={onTransitionEnd:le,onTransitionCancel:ye,fallbackTimer:Oe}}),this._activeRipples.set(J,I),(X||!d)&&this._finishRippleTransition(J),J}fadeOutRipple(n){if(n.state===Tt.FADING_OUT||n.state===Tt.HIDDEN)return;let e=n.element,t=_(_({},pr),n.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",n.state=Tt.FADING_OUT,(n._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=Ge(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,tf.forEach(t=>{i._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{nf.forEach(e=>{this._triggerElement.addEventListener(e,this,ef)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===Tt.FADING_IN?this._startFadeOutTransition(n):n.state===Tt.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:t}=n.config;n.state=Tt.VISIBLE,!t&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=Tt.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=Tn(n),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Fb;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!An(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===Tt.VISIBLE||n.config.terminateOnPointerUp&&n.state===Tt.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(tf.forEach(e=>i._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(nf.forEach(e=>n.removeEventListener(e,this,ef)),this._pointerUpEventsRegistered=!1))}};function Lb(i,n,e){let t=Math.max(Math.abs(i-e.left),Math.abs(i-e.right)),r=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(t*t+r*r)}var ps=new b("mat-ripple-global-options"),Je=(()=>{class i{_elementRef=l(P);_animationsDisabled=Ee();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=l(z),t=l(me),r=l(ps,{optional:!0}),o=l(H);this._globalOptions=r||{},this._rippleRenderer=new gr(this,e,this._elementRef,t,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:_(_(_({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,_(_({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,_(_({},this.rippleConfig),e))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=R({type:i,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,r){t&2&&A("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return i})();var Bb={capture:!0},Vb=["focus","mousedown","mouseenter","touchstart"],Jc="mat-ripple-loader-uninitialized",ed="mat-ripple-loader-class-name",rf="mat-ripple-loader-centered",gs="mat-ripple-loader-disabled",of=(()=>{class i{_document=l(N);_animationsDisabled=Ee();_globalRippleOptions=l(ps,{optional:!0});_platform=l(me);_ngZone=l(z);_injector=l(H);_eventCleanups;_hosts=new Map;constructor(){let e=l(He).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Vb.map(t=>e.listen(this._document,t,this._onInteraction,Bb)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(Jc,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(ed))&&e.setAttribute(ed,t.className||""),t.centered&&e.setAttribute(rf,""),t.disabled&&e.setAttribute(gs,"")}setDisabled(e,t){let r=this._hosts.get(e);r?(r.target.rippleDisabled=t,!t&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):t?e.setAttribute(gs,""):e.removeAttribute(gs)}_onInteraction=e=>{let t=Ue(e);if(t instanceof HTMLElement){let r=t.closest(`[${Jc}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(ed)),e.append(t);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??pr.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??pr.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(gs),rippleConfig:{centered:e.hasAttribute(rf),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},c=new gr(s,this._ngZone,t,this._platform,this._injector),d=!s.rippleDisabled;d&&c.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:c,hasSetUpEvents:d}),e.removeAttribute(Jc)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var ln=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=w({type:i,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,r){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2,changeDetection:0})}return i})();var jb=["mat-icon-button",""],zb=["*"],Hb=new b("MAT_BUTTON_CONFIG");function af(i){return i==null?void 0:It(i)}var Ro=(()=>{class i{_elementRef=l(P);_ngZone=l(z);_animationsDisabled=Ee();_config=l(Hb,{optional:!0});_focusMonitor=l(Ct);_cleanupClick;_renderer=l(de);_rippleLoader=l(of);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){l(Fe).load(ln);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=R({type:i,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(t,r){t&2&&(Z("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),it(r.color?"mat-"+r.color:""),A("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",F],disabled:[2,"disabled","disabled",F],ariaDisabled:[2,"aria-disabled","ariaDisabled",F],disabledInteractive:[2,"disabledInteractive","disabledInteractive",F],tabIndex:[2,"tabIndex","tabIndex",af],_tabindex:[2,"tabindex","_tabindex",af]}})}return i})(),Fn=(()=>{class i extends Ro{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=w({type:i,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[Me],attrs:jb,ngContentSelectors:zb,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(De(),Ve(0,"span",0),Q(1),Ve(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2,changeDetection:0})}return i})();var ct=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({imports:[se]})}return i})();var Ub=["matButton",""],td=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],nd=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"],Gb=["mat-fab",""],$b=["mat-mini-fab",""],Wb=`.mat-mdc-fab-base {
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
`,sf=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Ze=(()=>{class i extends Ro{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=qb(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,r=this._appearance?sf.get(this._appearance):null,o=sf.get(e);r&&t.remove(...r),t.add(...o),this._appearance=e}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=w({type:i,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Me],attrs:Ub,ngContentSelectors:nd,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(De(td),Ve(0,"span",0),Q(1),Be(2,"span",1),Q(3,1),qe(),Q(4,2),Ve(5,"span",2)(6,"span",3)),t&2&&A("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2,changeDetection:0})}return i})();function qb(i){return i.hasAttribute("mat-raised-button")?"elevated":i.hasAttribute("mat-stroked-button")?"outlined":i.hasAttribute("mat-flat-button")?"filled":i.hasAttribute("mat-button")?"text":null}var lf=new b("mat-mdc-fab-default-options",{providedIn:"root",factory:()=>Io}),Io={color:"accent"},_r=(()=>{class i extends Ro{_options=l(lf,{optional:!0});_isFab=!0;extended=!1;constructor(){super(),this._options=this._options||Io,this.color=this._options.color||Io.color}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=w({type:i,selectors:[["button","mat-fab",""],["a","mat-fab",""],["button","matFab",""],["a","matFab",""]],hostAttrs:[1,"mdc-fab","mat-mdc-fab-base","mat-mdc-fab"],hostVars:4,hostBindings:function(t,r){t&2&&A("mdc-fab--extended",r.extended)("mat-mdc-extended-fab",r.extended)},inputs:{extended:[2,"extended","extended",F]},exportAs:["matButton","matAnchor"],features:[Me],attrs:Gb,ngContentSelectors:nd,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(De(td),Ve(0,"span",0),Q(1),Be(2,"span",1),Q(3,1),qe(),Q(4,2),Ve(5,"span",2)(6,"span",3)),t&2&&A("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-fab-base {
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
`],encapsulation:2,changeDetection:0})}return i})(),cn=(()=>{class i extends Ro{_options=l(lf,{optional:!0});_isFab=!0;constructor(){super(),this._options=this._options||Io,this.color=this._options.color||Io.color}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=w({type:i,selectors:[["button","mat-mini-fab",""],["a","mat-mini-fab",""],["button","matMiniFab",""],["a","matMiniFab",""]],hostAttrs:[1,"mdc-fab","mat-mdc-fab-base","mdc-fab--mini","mat-mdc-mini-fab"],exportAs:["matButton","matAnchor"],features:[Me],attrs:$b,ngContentSelectors:nd,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(De(td),Ve(0,"span",0),Q(1),Be(2,"span",1),Q(3,1),qe(),Q(4,2),Ve(5,"span",2)(6,"span",3)),t&2&&A("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[Wb],encapsulation:2,changeDetection:0})}return i})();var Se=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({imports:[ct,se]})}return i})();function Yb(i,n){if(i&1){let e=Te();u(0,"div",1)(1,"button",2),S("click",function(){we(e);let r=T();return Ce(r.action())}),g(2),h()()}if(i&2){let e=T();f(2),ne(" ",e.data.action," ")}}var Xb=["label"];function Kb(i,n){}var Zb=Math.pow(2,31)-1,To=class{_overlayRef;instance;containerInstance;_afterDismissed=new y;_afterOpened=new y;_onAction=new y;_durationTimeoutId;_dismissedByAction=!1;constructor(n,e){this._overlayRef=e,this.containerInstance=n,n._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(n){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(n,Zb))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},_s=new b("MatSnackBarData"),vr=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},Qb=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=R({type:i,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return i})(),Jb=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=R({type:i,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return i})(),ey=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=R({type:i,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return i})(),ty=(()=>{class i{snackBarRef=l(To);data=l(_s);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=w({type:i,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(t,r){t&1&&(u(0,"div",0),g(1),h(),W(2,Yb,3,1,"div",1)),t&2&&(f(),ne(" ",r.data.message,`
`),f(),q(r.hasAction?2:-1))},dependencies:[Ze,Qb,Jb,ey],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return i})(),id="_mat-snack-bar-enter",rd="_mat-snack-bar-exit",ny=(()=>{class i extends qn{_ngZone=l(z);_elementRef=l(P);_changeDetectorRef=l(oe);_platform=l(me);_animationsDisabled=Ee();snackBarConfig=l(vr);_document=l(N);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=l(H);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new y;_onExit=new y;_onEnter=new y;_animationState="void";_live;_label;_role;_liveElementId=l(ve).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===rd?this._completeExit():e===id&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?ze(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(id)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(id)},200)))}exit(){return this._destroyed?U(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?ze(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(rd)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(rd),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(a=>e.classList.add(a)):e.classList.add(t)),this._exposeToModals();let r=this._label.nativeElement,o="mdc-snackbar__label";r.classList.toggle(o,!r.querySelector(`.${o}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<t.length;r++){let o=t[r],a=o.getAttribute("aria-owns");this._trackedModals.add(o),a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute("aria-owns");if(t){let r=t.replace(this._liveElementId,"").trim();r.length>0?e.setAttribute("aria-owns",r):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector("[aria-hidden]"),r=e.querySelector("[aria-live]");if(t&&r){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(o=document.activeElement),t.removeAttribute("aria-hidden"),r.appendChild(t),o?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=w({type:i,selectors:[["mat-snack-bar-container"]],viewQuery:function(t,r){if(t&1&&Xe(Yn,7)(Xb,7),t&2){let o;ee(o=te())&&(r._portalOutlet=o.first),ee(o=te())&&(r._label=o.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(t,r){t&1&&S("animationend",function(a){return r.onAnimationEnd(a.animationName)})("animationcancel",function(a){return r.onAnimationEnd(a.animationName)}),t&2&&A("mat-snack-bar-container-enter",r._animationState==="visible")("mat-snack-bar-container-exit",r._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!r._animationsDisabled)},features:[Me],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(t,r){t&1&&(u(0,"div",1)(1,"div",2,0)(3,"div",3),ge(4,Kb,0,0,"ng-template",4),h(),Y(5,"div"),h()()),t&2&&(f(5),Z("aria-live",r._live)("role",r._role)("id",r._liveElementId))},dependencies:[Yn],styles:[`@keyframes _mat-snack-bar-enter {
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
`],encapsulation:2})}return i})(),iy=new b("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new vr}),dn=(()=>{class i{_live=l(wo);_injector=l(H);_breakpointObserver=l(yo);_parentSnackBar=l(i,{optional:!0,skipSelf:!0});_defaultConfig=l(iy);_animationsDisabled=Ee();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=ty;snackBarContainerComponent=ny;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t="",r){let o=_(_({},this._defaultConfig),r);return o.data={message:e,action:t},o.announcementMessage===e&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let r=t&&t.viewContainerRef&&t.viewContainerRef.injector,o=H.create({parent:r||this._injector,providers:[{provide:vr,useValue:t}]}),a=new $t(this.snackBarContainerComponent,t.viewContainerRef,o),s=e.attach(a);return s.instance.snackBarConfig=t,s.instance}_attach(e,t){let r=_(_(_({},new vr),this._defaultConfig),t),o=this._createOverlay(r),a=this._attachSnackBarContainer(o,r),s=new To(a,o);if(e instanceof yt){let c=new Wt(e,null,{$implicit:r.data,snackBarRef:s});s.instance=a.attachTemplatePortal(c)}else{let c=this._createInjector(r,s),d=new $t(e,void 0,c),m=a.attachComponentPortal(d);s.instance=m.instance}return this._breakpointObserver.observe(Pm.HandsetPortrait).pipe(ue(o.detachments())).subscribe(c=>{o.overlayElement.classList.toggle(this.handsetCssClass,c.matches)}),r.announcementMessage&&a._onAnnounce.subscribe(()=>{this._live.announce(r.announcementMessage,r.politeness)}),this._animateSnackBar(s,r),this._openedSnackBarRef=s,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let t=new qt;t.direction=e.direction;let r=Kn(this._injector),o=e.direction==="rtl",a=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!o||e.horizontalPosition==="end"&&o,s=!a&&e.horizontalPosition!=="center";return a?r.left("0"):s?r.right("0"):r.centerHorizontally(),e.verticalPosition==="top"?r.top("0"):r.bottom("0"),t.positionStrategy=r,t.disableAnimations=this._animationsDisabled,Yt(this._injector,t)}_createInjector(e,t){let r=e&&e.viewContainerRef&&e.viewContainerRef.injector;return H.create({parent:r||this._injector,providers:[{provide:To,useValue:t},{provide:_s,useValue:e.data}]})}static \u0275fac=function(t){return new(t||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var ad="pwa_install_snooze_until",cf=10080*60*1e3,vs=(()=>{class i{constructor(e,t){this.snackBar=e,this.zone=t,this.deferredPrompt=null,this.canInstall$=new je(!1),window.addEventListener("beforeinstallprompt",r=>{r.preventDefault(),this.deferredPrompt=r,this.updateCanInstall(),this.maybeAutoPrompt()}),window.addEventListener("appinstalled",()=>{this.deferredPrompt=null,this.canInstall$.next(!1)}),this.updateCanInstall()}isStandalone(){let e=window.matchMedia&&window.matchMedia("(display-mode: standalone)").matches,t=window.navigator?.standalone===!0;return e||t}isSnoozed(){let e=localStorage.getItem(ad);if(!e)return!1;let t=parseInt(e,10);return!isNaN(t)&&Date.now()<t}updateCanInstall(){let e=!!this.deferredPrompt&&!this.isStandalone();this.canInstall$.next(e)}maybeAutoPrompt(){!this.deferredPrompt||this.isStandalone()||this.isSnoozed()||this.zone.run(()=>this.askToInstall())}askToInstall(){if(!this.deferredPrompt||this.isStandalone())return;let e=this.snackBar.open("M\xF6chten Sie die Dartboard-App installieren?","Ja, gerne.",{duration:8e3,panelClass:["app-shape-morph-snack"]});e.onAction().subscribe(()=>{this.triggerInstall()}),e.afterDismissed().subscribe(t=>{if(!t.dismissedByAction){let r=Date.now()+cf;localStorage.setItem(ad,String(r))}})}triggerInstall(){return ce(this,null,function*(){if(this.deferredPrompt)try{if(this.deferredPrompt.prompt(),(yield this.deferredPrompt.userChoice)?.outcome!=="accepted"){let t=Date.now()+cf;localStorage.setItem(ad,String(t))}}catch(e){console.warn("Install prompt failed",e)}finally{this.deferredPrompt=null,this.updateCanInstall()}})}static{this.\u0275fac=function(t){return new(t||i)(E(dn),E(z))}}static{this.\u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var ae="primary",Ho=Symbol("RouteTitle"),ud=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function Li(i){return new ud(i)}function sd(i,n,e){for(let t=0;t<i.length;t++){let r=i[t],o=n[t];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function _f(i,n,e){let t=e.path.split("/"),r=t.indexOf("**");if(r===-1){if(t.length>i.length||e.pathMatch==="full"&&(n.hasChildren()||t.length<i.length))return null;let c={},d=i.slice(0,t.length);return sd(t,d,c)?{consumed:d,posParams:c}:null}if(r!==t.lastIndexOf("**"))return null;let o=t.slice(0,r),a=t.slice(r+1);if(o.length+a.length>i.length||e.pathMatch==="full"&&n.hasChildren()&&e.path!=="**")return null;let s={};return!sd(o,i.slice(0,o.length),s)||!sd(a,i.slice(i.length-a.length),s)?null:{consumed:i,posParams:s}}function Ss(i){return new Promise((n,e)=>{i.pipe(zn()).subscribe({next:t=>n(t),error:t=>e(t)})})}function ry(i,n){if(i.length!==n.length)return!1;for(let e=0;e<i.length;++e)if(!un(i[e],n[e]))return!1;return!0}function un(i,n){let e=i?hd(i):void 0,t=n?hd(n):void 0;if(!e||!t||e.length!=t.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!vf(i[r],n[r]))return!1;return!0}function hd(i){return[...Object.keys(i),...Object.getOwnPropertySymbols(i)]}function vf(i,n){if(Array.isArray(i)&&Array.isArray(n)){if(i.length!==n.length)return!1;let e=[...i].sort(),t=[...n].sort();return e.every((r,o)=>t[o]===r)}else return i===n}function oy(i){return i.length>0?i[i.length-1]:null}function Bi(i){return wa(i)?i:bi(i)?st(Promise.resolve(i)):U(i)}function bf(i){return wa(i)?Ss(i):Promise.resolve(i)}var ay={exact:Cf,subset:Df},yf={exact:sy,subset:ly,ignored:()=>!0},wf={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},md={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function df(i,n,e){return ay[e.paths](i.root,n.root,e.matrixParams)&&yf[e.queryParams](i.queryParams,n.queryParams)&&!(e.fragment==="exact"&&i.fragment!==n.fragment)}function sy(i,n){return un(i,n)}function Cf(i,n,e){if(!Ni(i.segments,n.segments)||!ws(i.segments,n.segments,e)||i.numberOfChildren!==n.numberOfChildren)return!1;for(let t in n.children)if(!i.children[t]||!Cf(i.children[t],n.children[t],e))return!1;return!0}function ly(i,n){return Object.keys(n).length<=Object.keys(i).length&&Object.keys(n).every(e=>vf(i[e],n[e]))}function Df(i,n,e){return Sf(i,n,n.segments,e)}function Sf(i,n,e,t){if(i.segments.length>e.length){let r=i.segments.slice(0,e.length);return!(!Ni(r,e)||n.hasChildren()||!ws(r,e,t))}else if(i.segments.length===e.length){if(!Ni(i.segments,e)||!ws(i.segments,e,t))return!1;for(let r in n.children)if(!i.children[r]||!Df(i.children[r],n.children[r],t))return!1;return!0}else{let r=e.slice(0,i.segments.length),o=e.slice(i.segments.length);return!Ni(i.segments,r)||!ws(i.segments,r,t)||!i.children[ae]?!1:Sf(i.children[ae],n,o,t)}}function ws(i,n,e){return n.every((t,r)=>yf[e](i[r].parameters,t.parameters))}var kt=class{root;queryParams;fragment;_queryParamMap;constructor(n=new be([],{}),e={},t=null){this.root=n,this.queryParams=e,this.fragment=t}get queryParamMap(){return this._queryParamMap??=Li(this.queryParams),this._queryParamMap}toString(){return uy.serialize(this)}},be=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(t=>t.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Cs(this)}},Zn=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=Li(this.parameters),this._parameterMap}toString(){return Mf(this)}};function cy(i,n){return Ni(i,n)&&i.every((e,t)=>un(e.parameters,n[t].parameters))}function Ni(i,n){return i.length!==n.length?!1:i.every((e,t)=>e.path===n[t].path)}function dy(i,n){let e=[];return Object.entries(i.children).forEach(([t,r])=>{t===ae&&(e=e.concat(n(r,t)))}),Object.entries(i.children).forEach(([t,r])=>{t!==ae&&(e=e.concat(n(r,t)))}),e}var Jn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=v({token:i,factory:()=>new Ln,providedIn:"root"})}return i})(),Ln=class{parse(n){let e=new pd(n);return new kt(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${Ao(n.root,!0)}`,t=fy(n.queryParams),r=typeof n.fragment=="string"?`#${hy(n.fragment)}`:"";return`${e}${t}${r}`}},uy=new Ln;function Cs(i){return i.segments.map(n=>Mf(n)).join("/")}function Ao(i,n){if(!i.hasChildren())return Cs(i);if(n){let e=i.children[ae]?Ao(i.children[ae],!1):"",t=[];return Object.entries(i.children).forEach(([r,o])=>{r!==ae&&t.push(`${r}:${Ao(o,!1)}`)}),t.length>0?`${e}(${t.join("//")})`:e}else{let e=dy(i,(t,r)=>r===ae?[Ao(i.children[ae],!1)]:[`${r}:${Ao(t,!1)}`]);return Object.keys(i.children).length===1&&i.children[ae]!=null?`${Cs(i)}/${e[0]}`:`${Cs(i)}/(${e.join("//")})`}}function xf(i){return encodeURIComponent(i).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function bs(i){return xf(i).replace(/%3B/gi,";")}function hy(i){return encodeURI(i)}function fd(i){return xf(i).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Ds(i){return decodeURIComponent(i)}function uf(i){return Ds(i.replace(/\+/g,"%20"))}function Mf(i){return`${fd(i.path)}${my(i.parameters)}`}function my(i){return Object.entries(i).map(([n,e])=>`;${fd(n)}=${fd(e)}`).join("")}function fy(i){let n=Object.entries(i).map(([e,t])=>Array.isArray(t)?t.map(r=>`${bs(e)}=${bs(r)}`).join("&"):`${bs(e)}=${bs(t)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var py=/^[^\/()?;#]+/;function ld(i){let n=i.match(py);return n?n[0]:""}var gy=/^[^\/()?;=#]+/;function _y(i){let n=i.match(gy);return n?n[0]:""}var vy=/^[^=?&#]+/;function by(i){let n=i.match(vy);return n?n[0]:""}var yy=/^[^&#]+/;function wy(i){let n=i.match(yy);return n?n[0]:""}var pd=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new be([],{}):new be([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new O(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(e.length>0||Object.keys(t).length>0)&&(r[ae]=new be(e,t)),r}parseSegment(){let n=ld(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new O(4009,!1);return this.capture(n),new Zn(Ds(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=_y(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let r=ld(this.remaining);r&&(t=r,this.capture(t))}n[Ds(e)]=Ds(t)}parseQueryParam(n){let e=by(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let a=wy(this.remaining);a&&(t=a,this.capture(t))}let r=uf(e),o=uf(t);if(n.hasOwnProperty(r)){let a=n[r];Array.isArray(a)||(a=[a],n[r]=a),a.push(o)}else n[r]=o}parseParens(n,e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=ld(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new O(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):n&&(a=ae);let s=this.parseChildren(e+1);t[a??ae]=Object.keys(s).length===1&&s[ae]?s[ae]:new be([],s),this.consumeOptional("//")}return t}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new O(4011,!1)}};function Ef(i){return i.segments.length>0?new be([],{[ae]:i}):i}function Rf(i){let n={};for(let[t,r]of Object.entries(i.children)){let o=Rf(r);if(t===ae&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))n[a]=s;else(o.segments.length>0||o.hasChildren())&&(n[t]=o)}let e=new be(i.segments,n);return Cy(e)}function Cy(i){if(i.numberOfChildren===1&&i.children[ae]){let n=i.children[ae];return new be(i.segments.concat(n.segments),n.children)}return i}function Qn(i){return i instanceof kt}function If(i,n,e=null,t=null,r=new Ln){let o=Tf(i);return Af(o,n,e,t,r)}function Tf(i){let n;function e(o){let a={};for(let c of o.children){let d=e(c);a[c.outlet]=d}let s=new be(o.url,a);return o===i&&(n=s),s}let t=e(i.root),r=Ef(t);return n??r}function Af(i,n,e,t,r){let o=i;for(;o.parent;)o=o.parent;if(n.length===0)return cd(o,o,o,e,t,r);let a=Dy(n);if(a.toRoot())return cd(o,o,new be([],{}),e,t,r);let s=Sy(a,o,i),c=s.processChildren?Po(s.segmentGroup,s.index,a.commands):Pf(s.segmentGroup,s.index,a.commands);return cd(o,s.segmentGroup,c,e,t,r)}function xs(i){return typeof i=="object"&&i!=null&&!i.outlets&&!i.segmentPath}function Fo(i){return typeof i=="object"&&i!=null&&i.outlets}function hf(i,n,e){i||="\u0275";let t=new kt;return t.queryParams={[i]:n},e.parse(e.serialize(t)).queryParams[i]}function cd(i,n,e,t,r,o){let a={};for(let[d,m]of Object.entries(t??{}))a[d]=Array.isArray(m)?m.map(p=>hf(d,p,o)):hf(d,m,o);let s;i===n?s=e:s=kf(i,n,e);let c=Ef(Rf(s));return new kt(c,a,r)}function kf(i,n,e){let t={};return Object.entries(i.children).forEach(([r,o])=>{o===n?t[r]=e:t[r]=kf(o,n,e)}),new be(i.segments,t)}var Ms=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,t){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=t,n&&t.length>0&&xs(t[0]))throw new O(4003,!1);let r=t.find(Fo);if(r&&r!==oy(t))throw new O(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function Dy(i){if(typeof i[0]=="string"&&i.length===1&&i[0]==="/")return new Ms(!0,0,i);let n=0,e=!1,t=i.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([c,d])=>{s[c]=typeof d=="string"?d.split("/"):d}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((s,c)=>{c==0&&s==="."||(c==0&&s===""?e=!0:s===".."?n++:s!=""&&r.push(s))}),r):[...r,o]},[]);return new Ms(e,n,t)}var yr=class{segmentGroup;processChildren;index;constructor(n,e,t){this.segmentGroup=n,this.processChildren=e,this.index=t}};function Sy(i,n,e){if(i.isAbsolute)return new yr(n,!0,0);if(!e)return new yr(n,!1,NaN);if(e.parent===null)return new yr(e,!0,0);let t=xs(i.commands[0])?0:1,r=e.segments.length-1+t;return xy(e,r,i.numberOfDoubleDots)}function xy(i,n,e){let t=i,r=n,o=e;for(;o>r;){if(o-=r,t=t.parent,!t)throw new O(4005,!1);r=t.segments.length}return new yr(t,!1,r-o)}function My(i){return Fo(i[0])?i[0].outlets:{[ae]:i}}function Pf(i,n,e){if(i??=new be([],{}),i.segments.length===0&&i.hasChildren())return Po(i,n,e);let t=Ey(i,n,e),r=e.slice(t.commandIndex);if(t.match&&t.pathIndex<i.segments.length){let o=new be(i.segments.slice(0,t.pathIndex),{});return o.children[ae]=new be(i.segments.slice(t.pathIndex),i.children),Po(o,0,r)}else return t.match&&r.length===0?new be(i.segments,{}):t.match&&!i.hasChildren()?gd(i,n,e):t.match?Po(i,0,r):gd(i,n,e)}function Po(i,n,e){if(e.length===0)return new be(i.segments,{});{let t=My(e),r={};if(Object.keys(t).some(o=>o!==ae)&&i.children[ae]&&i.numberOfChildren===1&&i.children[ae].segments.length===0){let o=Po(i.children[ae],n,e);return new be(i.segments,o.children)}return Object.entries(t).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=Pf(i.children[o],n,a))}),Object.entries(i.children).forEach(([o,a])=>{t[o]===void 0&&(r[o]=a)}),new be(i.segments,r)}}function Ey(i,n,e){let t=0,r=n,o={match:!1,pathIndex:0,commandIndex:0};for(;r<i.segments.length;){if(t>=e.length)return o;let a=i.segments[r],s=e[t];if(Fo(s))break;let c=`${s}`,d=t<e.length-1?e[t+1]:null;if(r>0&&c===void 0)break;if(c&&d&&typeof d=="object"&&d.outlets===void 0){if(!ff(c,d,a))return o;t+=2}else{if(!ff(c,{},a))return o;t++}r++}return{match:!0,pathIndex:r,commandIndex:t}}function gd(i,n,e){let t=i.segments.slice(0,n),r=0;for(;r<e.length;){let o=e[r];if(Fo(o)){let c=Ry(o.outlets);return new be(t,c)}if(r===0&&xs(e[0])){let c=i.segments[n];t.push(new Zn(c.path,mf(e[0]))),r++;continue}let a=Fo(o)?o.outlets[ae]:`${o}`,s=r<e.length-1?e[r+1]:null;a&&s&&xs(s)?(t.push(new Zn(a,mf(s))),r+=2):(t.push(new Zn(a,{})),r++)}return new be(t,{})}function Ry(i){let n={};return Object.entries(i).forEach(([e,t])=>{typeof t=="string"&&(t=[t]),t!==null&&(n[e]=gd(new be([],{}),0,t))}),n}function mf(i){let n={};return Object.entries(i).forEach(([e,t])=>n[e]=`${t}`),n}function ff(i,n,e){return i==e.path&&un(n,e.parameters)}var wr="imperative",et=(function(i){return i[i.NavigationStart=0]="NavigationStart",i[i.NavigationEnd=1]="NavigationEnd",i[i.NavigationCancel=2]="NavigationCancel",i[i.NavigationError=3]="NavigationError",i[i.RoutesRecognized=4]="RoutesRecognized",i[i.ResolveStart=5]="ResolveStart",i[i.ResolveEnd=6]="ResolveEnd",i[i.GuardsCheckStart=7]="GuardsCheckStart",i[i.GuardsCheckEnd=8]="GuardsCheckEnd",i[i.RouteConfigLoadStart=9]="RouteConfigLoadStart",i[i.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",i[i.ChildActivationStart=11]="ChildActivationStart",i[i.ChildActivationEnd=12]="ChildActivationEnd",i[i.ActivationStart=13]="ActivationStart",i[i.ActivationEnd=14]="ActivationEnd",i[i.Scroll=15]="Scroll",i[i.NavigationSkipped=16]="NavigationSkipped",i})(et||{}),Pt=class{id;url;constructor(n,e){this.id=n,this.url=e}},hn=class extends Pt{type=et.NavigationStart;navigationTrigger;restoredState;constructor(n,e,t="imperative",r=null){super(n,e),this.navigationTrigger=t,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},xt=class extends Pt{urlAfterRedirects;type=et.NavigationEnd;constructor(n,e,t){super(n,e),this.urlAfterRedirects=t}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},mt=(function(i){return i[i.Redirect=0]="Redirect",i[i.SupersededByNewNavigation=1]="SupersededByNewNavigation",i[i.NoDataFromResolver=2]="NoDataFromResolver",i[i.GuardRejected=3]="GuardRejected",i[i.Aborted=4]="Aborted",i})(mt||{}),Dr=(function(i){return i[i.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",i[i.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",i})(Dr||{}),St=class extends Pt{reason;code;type=et.NavigationCancel;constructor(n,e,t,r){super(n,e),this.reason=t,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function Of(i){return i instanceof St&&(i.code===mt.Redirect||i.code===mt.SupersededByNewNavigation)}var mn=class extends Pt{reason;code;type=et.NavigationSkipped;constructor(n,e,t,r){super(n,e),this.reason=t,this.code=r}},Bn=class extends Pt{error;target;type=et.NavigationError;constructor(n,e,t,r){super(n,e),this.error=t,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},No=class extends Pt{urlAfterRedirects;state;type=et.RoutesRecognized;constructor(n,e,t,r){super(n,e),this.urlAfterRedirects=t,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Es=class extends Pt{urlAfterRedirects;state;type=et.GuardsCheckStart;constructor(n,e,t,r){super(n,e),this.urlAfterRedirects=t,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Rs=class extends Pt{urlAfterRedirects;state;shouldActivate;type=et.GuardsCheckEnd;constructor(n,e,t,r,o){super(n,e),this.urlAfterRedirects=t,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Is=class extends Pt{urlAfterRedirects;state;type=et.ResolveStart;constructor(n,e,t,r){super(n,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ts=class extends Pt{urlAfterRedirects;state;type=et.ResolveEnd;constructor(n,e,t,r){super(n,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},As=class{route;type=et.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},ks=class{route;type=et.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Ps=class{snapshot;type=et.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Os=class{snapshot;type=et.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Fs=class{snapshot;type=et.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ns=class{snapshot;type=et.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Sr=class{routerEvent;position;anchor;scrollBehavior;type=et.Scroll;constructor(n,e,t,r){this.routerEvent=n,this.position=e,this.anchor=t,this.scrollBehavior=r}toString(){let n=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${n}')`}},xr=class{},Lo=class{},Mr=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function Iy(i){return!(i instanceof xr)&&!(i instanceof Mr)&&!(i instanceof Lo)}var Ls=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new Vi(this.rootInjector)}},Vi=(()=>{class i{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,t){let r=this.getOrCreateContext(e);r.outlet=t,this.contexts.set(e,r)}onChildOutletDestroyed(e){let t=this.getContext(e);t&&(t.outlet=null,t.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let t=this.getContext(e);return t||(t=new Ls(this.rootInjector),this.contexts.set(e,t)),t}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(t){return new(t||i)(E(tt))};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Bs=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=_d(n,this._root);return e?e.children.map(t=>t.value):[]}firstChild(n){let e=_d(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=vd(n,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return vd(n,this._root).map(e=>e.value)}};function _d(i,n){if(i===n.value)return n;for(let e of n.children){let t=_d(i,e);if(t)return t}return null}function vd(i,n){if(i===n.value)return[n];for(let e of n.children){let t=vd(i,e);if(t.length)return t.unshift(n),t}return[]}var At=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function br(i){let n={};return i&&i.children.forEach(e=>n[e.value.outlet]=e),n}var Bo=class extends Bs{snapshot;constructor(n,e){super(n),this.snapshot=e,Ed(this,n)}toString(){return this.snapshot.toString()}};function Ff(i,n){let e=Ty(i,n),t=new je([new Zn("",{})]),r=new je({}),o=new je({}),a=new je({}),s=new je(""),c=new fn(t,r,a,s,o,ae,i,e.root);return c.snapshot=e.root,new Bo(new At(c,[]),e)}function Ty(i,n){let e={},t={},r={},a=new Er([],e,r,"",t,ae,i,null,{},n);return new Vo("",new At(a,[]))}var fn=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,e,t,r,o,a,s,c){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=t,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(K(d=>d[Ho]))??U(void 0),this.url=n,this.params=e,this.queryParams=t,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(K(n=>Li(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(K(n=>Li(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Md(i,n,e="emptyOnly"){let t,{routeConfig:r}=i;return n!==null&&(e==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?t={params:_(_({},n.params),i.params),data:_(_({},n.data),i.data),resolve:_(_(_(_({},i.data),n.data),r?.data),i._resolvedData)}:t={params:_({},i.params),data:_({},i.data),resolve:_(_({},i.data),i._resolvedData??{})},r&&Lf(r)&&(t.resolve[Ho]=r.title),t}var Er=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Ho]}constructor(n,e,t,r,o,a,s,c,d,m){this.url=n,this.params=e,this.queryParams=t,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=c,this._resolve=d,this._environmentInjector=m}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Li(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Li(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(t=>t.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},Vo=class extends Bs{url;constructor(n,e){super(e),this.url=n,Ed(this,e)}toString(){return Nf(this._root)}};function Ed(i,n){n.value._routerState=i,n.children.forEach(e=>Ed(i,e))}function Nf(i){let n=i.children.length>0?` { ${i.children.map(Nf).join(", ")} } `:"";return`${i.value}${n}`}function dd(i){if(i.snapshot){let n=i.snapshot,e=i._futureSnapshot;i.snapshot=e,un(n.queryParams,e.queryParams)||i.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&i.fragmentSubject.next(e.fragment),un(n.params,e.params)||i.paramsSubject.next(e.params),ry(n.url,e.url)||i.urlSubject.next(e.url),un(n.data,e.data)||i.dataSubject.next(e.data)}else i.snapshot=i._futureSnapshot,i.dataSubject.next(i._futureSnapshot.data)}function bd(i,n){let e=un(i.params,n.params)&&cy(i.url,n.url),t=!i.parent!=!n.parent;return e&&!t&&(!i.parent||bd(i.parent,n.parent))}function Lf(i){return typeof i.title=="string"||i.title===null}var Bf=new b(""),Uo=(()=>{class i{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=ae;activateEvents=new j;deactivateEvents=new j;attachEvents=new j;detachEvents=new j;routerOutletData=io();parentContexts=l(Vi);location=l(lt);changeDetector=l(oe);inputBinder=l(Go,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:t,previousValue:r}=e.name;if(t)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new O(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new O(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new O(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,t){this.activated=e,this._activatedRoute=t,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,t){if(this.isActivated)throw new O(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,c=new yd(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:c,environmentInjector:t}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=R({type:i,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Le]})}return i})(),yd=class{route;childContexts;parent;outletData;constructor(n,e,t,r){this.route=n,this.childContexts=e,this.parent=t,this.outletData=r}get(n,e){return n===fn?this.route:n===Vi?this.childContexts:n===Bf?this.outletData:this.parent.get(n,e)}},Go=new b(""),Rd=(()=>{class i{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(e){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e)}subscribeToRouteData(e){let{activatedRoute:t}=e,r=Xr([t.queryParams,t.params,t.data]).pipe(Re(([o,a,s],c)=>(s=_(_(_({},o),a),s),c===0?U(s):Promise.resolve(s)))).subscribe(o=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==t||t.component===null){this.unsubscribeFromRouteData(e);return}let a=Lh(t.component);if(!a){this.unsubscribeFromRouteData(e);return}for(let{templateName:s}of a.inputs)e.activatedComponentRef.setInput(s,o[s])});this.outletDataSubscriptions.set(e,r)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=v({token:i,factory:i.\u0275fac})}return i})(),Id=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=w({type:i,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(t,r){t&1&&Y(0,"router-outlet")},dependencies:[Uo],encapsulation:2})}return i})();function Td(i){let n=i.children&&i.children.map(Td),e=n?ie(_({},i),{children:n}):_({},i);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==ae&&(e.component=Id),e}function Ay(i,n,e){let t=jo(i,n._root,e?e._root:void 0);return new Bo(t,n)}function jo(i,n,e){if(e&&i.shouldReuseRoute(n.value,e.value.snapshot)){let t=e.value;t._futureSnapshot=n.value;let r=ky(i,n,e);return new At(t,r)}else{if(i.shouldAttach(n.value)){let o=i.retrieve(n.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=n.value,a.children=n.children.map(s=>jo(i,s)),a}}let t=Py(n.value),r=n.children.map(o=>jo(i,o));return new At(t,r)}}function ky(i,n,e){return n.children.map(t=>{for(let r of e.children)if(i.shouldReuseRoute(t.value,r.value.snapshot))return jo(i,t,r);return jo(i,t)})}function Py(i){return new fn(new je(i.url),new je(i.params),new je(i.queryParams),new je(i.fragment),new je(i.data),i.outlet,i.component,i)}var Rr=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},Vf="ngNavigationCancelingError";function Vs(i,n){let{redirectTo:e,navigationBehaviorOptions:t}=Qn(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=jf(!1,mt.Redirect);return r.url=e,r.navigationBehaviorOptions=t,r}function jf(i,n){let e=new Error(`NavigationCancelingError: ${i||""}`);return e[Vf]=!0,e.cancellationCode=n,e}function Oy(i){return zf(i)&&Qn(i.url)}function zf(i){return!!i&&i[Vf]}var wd=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,t,r,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=t,this.forwardEvent=r,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,t=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,t,n),dd(this.futureState.root),this.activateChildRoutes(e,t,n)}deactivateChildRoutes(n,e,t){let r=br(e);n.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],t),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,t)})}deactivateRoutes(n,e,t){let r=n.value,o=e?e.value:null;if(r===o)if(r.component){let a=t.getContext(r.outlet);a&&this.deactivateChildRoutes(n,e,a.children)}else this.deactivateChildRoutes(n,e,t);else o&&this.deactivateRouteAndItsChildren(e,t)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let t=e.getContext(n.value.outlet),r=t&&n.value.component?t.children:e,o=br(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(t&&t.outlet){let a=t.outlet.detach(),s=t.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:a,route:n,contexts:s})}}deactivateRouteAndOutlet(n,e){let t=e.getContext(n.value.outlet),r=t&&n.value.component?t.children:e,o=br(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);t&&(t.outlet&&(t.outlet.deactivate(),t.children.onOutletDeactivated()),t.attachRef=null,t.route=null)}activateChildRoutes(n,e,t){let r=br(e);n.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],t),this.forwardEvent(new Ns(o.value.snapshot))}),n.children.length&&this.forwardEvent(new Os(n.value.snapshot))}activateRoutes(n,e,t){let r=n.value,o=e?e.value:null;if(dd(r),r===o)if(r.component){let a=t.getOrCreateContext(r.outlet);this.activateChildRoutes(n,e,a.children)}else this.activateChildRoutes(n,e,t);else if(r.component){let a=t.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),dd(s.route.value),this.activateChildRoutes(n,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(n,null,a.children)}else this.activateChildRoutes(n,null,t)}},js=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},Cr=class{component;route;constructor(n,e){this.component=n,this.route=e}};function Fy(i,n,e){let t=i._root,r=n?n._root:null;return ko(t,r,e,[t.value])}function Ny(i){let n=i.routeConfig?i.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:i,guards:n}}function Tr(i,n){let e=Symbol(),t=n.get(i,e);return t===e?typeof i=="function"&&!eh(i)?i:n.get(i):t}function ko(i,n,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=br(n);return i.children.forEach(a=>{Ly(a,o[a.value.outlet],e,t.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>Oo(s,e.getContext(a),r)),r}function Ly(i,n,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=i.value,a=n?n.value:null,s=e?e.getContext(i.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let c=By(a,o,o.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new js(t)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?ko(i,n,s?s.children:null,t,r):ko(i,n,e,t,r),c&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new Cr(s.outlet.component,a))}else a&&Oo(n,s,r),r.canActivateChecks.push(new js(t)),o.component?ko(i,null,s?s.children:null,t,r):ko(i,null,e,t,r);return r}function By(i,n,e){if(typeof e=="function")return nt(n._environmentInjector,()=>e(i,n));switch(e){case"pathParamsChange":return!Ni(i.url,n.url);case"pathParamsOrQueryParamsChange":return!Ni(i.url,n.url)||!un(i.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!bd(i,n)||!un(i.queryParams,n.queryParams);default:return!bd(i,n)}}function Oo(i,n,e){let t=br(i),r=i.value;Object.entries(t).forEach(([o,a])=>{r.component?n?Oo(a,n.children.getContext(o),e):Oo(a,null,e):Oo(a,n,e)}),r.component?n&&n.outlet&&n.outlet.isActivated?e.canDeactivateChecks.push(new Cr(n.outlet.component,r)):e.canDeactivateChecks.push(new Cr(null,r)):e.canDeactivateChecks.push(new Cr(null,r))}function $o(i){return typeof i=="function"}function Vy(i){return typeof i=="boolean"}function jy(i){return i&&$o(i.canLoad)}function zy(i){return i&&$o(i.canActivate)}function Hy(i){return i&&$o(i.canActivateChild)}function Uy(i){return i&&$o(i.canDeactivate)}function Gy(i){return i&&$o(i.canMatch)}function Hf(i){return i instanceof Ku||i?.name==="EmptyError"}var ys=Symbol("INITIAL_VALUE");function Ir(){return Re(i=>Xr(i.map(n=>n.pipe(xe(1),We(ys)))).pipe(K(n=>{for(let e of n)if(e!==!0){if(e===ys)return ys;if(e===!1||$y(e))return e}return!0}),pe(n=>n!==ys),xe(1)))}function $y(i){return Qn(i)||i instanceof Rr}function Uf(i){return i.aborted?U(void 0).pipe(xe(1)):new at(n=>{let e=()=>{n.next(),n.complete()};return i.addEventListener("abort",e),()=>i.removeEventListener("abort",e)})}function Gf(i){return ue(Uf(i))}function Wy(i){return Qt(n=>{let{targetSnapshot:e,currentSnapshot:t,guards:{canActivateChecks:r,canDeactivateChecks:o}}=n;return o.length===0&&r.length===0?U(ie(_({},n),{guardsResult:!0})):qy(o,e,t).pipe(Qt(a=>a&&Vy(a)?Yy(e,r,i):U(a)),K(a=>ie(_({},n),{guardsResult:a})))})}function qy(i,n,e){return st(i).pipe(Qt(t=>Jy(t.component,t.route,e,n)),zn(t=>t!==!0,!0))}function Yy(i,n,e){return st(n).pipe(pi(t=>Ca(Ky(t.route.parent,e),Xy(t.route,e),Qy(i,t.path),Zy(i,t.route))),zn(t=>t!==!0,!0))}function Xy(i,n){return i!==null&&n&&n(new Fs(i)),U(!0)}function Ky(i,n){return i!==null&&n&&n(new Ps(i)),U(!0)}function Zy(i,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return U(!0);let t=e.map(r=>Jt(()=>{let o=n._environmentInjector,a=Tr(r,o),s=zy(a)?a.canActivate(n,i):nt(o,()=>a(n,i));return Bi(s).pipe(zn())}));return U(t).pipe(Ir())}function Qy(i,n){let e=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(o=>Ny(o)).filter(o=>o!==null).map(o=>Jt(()=>{let a=o.guards.map(s=>{let c=o.node._environmentInjector,d=Tr(s,c),m=Hy(d)?d.canActivateChild(e,i):nt(c,()=>d(e,i));return Bi(m).pipe(zn())});return U(a).pipe(Ir())}));return U(r).pipe(Ir())}function Jy(i,n,e,t){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return U(!0);let o=r.map(a=>{let s=n._environmentInjector,c=Tr(a,s),d=Uy(c)?c.canDeactivate(i,n,e,t):nt(s,()=>c(i,n,e,t));return Bi(d).pipe(zn())});return U(o).pipe(Ir())}function e0(i,n,e,t,r){let o=n.canLoad;if(o===void 0||o.length===0)return U(!0);let a=o.map(s=>{let c=Tr(s,i),d=jy(c)?c.canLoad(n,e):nt(i,()=>c(n,e)),m=Bi(d);return r?m.pipe(Gf(r)):m});return U(a).pipe(Ir(),$f(t))}function $f(i){return Xu(Qe(n=>{if(typeof n!="boolean")throw Vs(i,n)}),K(n=>n===!0))}function t0(i,n,e,t,r,o){let a=n.canMatch;if(!a||a.length===0)return U(!0);let s=a.map(c=>{let d=Tr(c,i),m=Gy(d)?d.canMatch(n,e,r):nt(i,()=>d(n,e,r));return Bi(m).pipe(Gf(o))});return U(s).pipe(Ir(),$f(t))}var Nn=class i extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,i.prototype)}},zo=class i extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,i.prototype)}};function n0(i){throw new O(4e3,!1)}function i0(i){throw jf(!1,mt.GuardRejected)}var Cd=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}lineralizeSegments(n,e){return ce(this,null,function*(){let t=[],r=e.root;for(;;){if(t=t.concat(r.segments),r.numberOfChildren===0)return t;if(r.numberOfChildren>1||!r.children[ae])throw n0(`${n.redirectTo}`);r=r.children[ae]}})}applyRedirectCommands(n,e,t,r,o){return ce(this,null,function*(){let a=yield r0(e,r,o);if(a instanceof kt)throw new zo(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),n,t);if(a[0]==="/")throw new zo(s);return s})}applyRedirectCreateUrlTree(n,e,t,r){let o=this.createSegmentGroup(n,e.root,t,r);return new kt(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let t={};return Object.entries(n).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);t[r]=e[s]}else t[r]=o}),t}createSegmentGroup(n,e,t,r){let o=this.createSegments(n,e.segments,t,r),a={};return Object.entries(e.children).forEach(([s,c])=>{a[s]=this.createSegmentGroup(n,c,t,r)}),new be(o,a)}createSegments(n,e,t,r){return e.map(o=>o.path[0]===":"?this.findPosParam(n,o,r):this.findOrReturn(o,t))}findPosParam(n,e,t){let r=t[e.path.substring(1)];if(!r)throw new O(4001,!1);return r}findOrReturn(n,e){let t=0;for(let r of e){if(r.path===n.path)return e.splice(t),r;t++}return n}};function r0(i,n,e){if(typeof i=="string")return Promise.resolve(i);let t=i;return Ss(Bi(nt(e,()=>t(n))))}function o0(i,n){return i.providers&&!i._injector&&(i._injector=Ia(i.providers,n,`Route: ${i.path}`)),i._injector??n}function Xt(i){return i.outlet||ae}function a0(i,n){let e=i.filter(t=>Xt(t)===n);return e.push(...i.filter(t=>Xt(t)!==n)),e}var Dd={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Wf(i){return{routeConfig:i.routeConfig,url:i.url,params:i.params,queryParams:i.queryParams,fragment:i.fragment,data:i.data,outlet:i.outlet,title:i.title,paramMap:i.paramMap,queryParamMap:i.queryParamMap}}function s0(i,n,e,t,r,o,a){let s=qf(i,n,e);if(!s.matched)return U(s);let c=Wf(o(s));return t=o0(n,t),t0(t,n,e,r,c,a).pipe(K(d=>d===!0?s:_({},Dd)))}function qf(i,n,e){if(n.path==="")return n.pathMatch==="full"&&(i.hasChildren()||e.length>0)?_({},Dd):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(n.matcher||_f)(e,i,n);if(!r)return _({},Dd);let o={};Object.entries(r.posParams??{}).forEach(([s,c])=>{o[s]=c.path});let a=r.consumed.length>0?_(_({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function pf(i,n,e,t,r){return e.length>0&&d0(i,e,t,r)?{segmentGroup:new be(n,c0(t,new be(e,i.children))),slicedSegments:[]}:e.length===0&&u0(i,e,t)?{segmentGroup:new be(i.segments,l0(i,e,t,i.children)),slicedSegments:e}:{segmentGroup:new be(i.segments,i.children),slicedSegments:e}}function l0(i,n,e,t){let r={};for(let o of e)if(Hs(i,n,o)&&!t[Xt(o)]){let a=new be([],{});r[Xt(o)]=a}return _(_({},t),r)}function c0(i,n){let e={};e[ae]=n;for(let t of i)if(t.path===""&&Xt(t)!==ae){let r=new be([],{});e[Xt(t)]=r}return e}function d0(i,n,e,t){return e.some(r=>!Hs(i,n,r)||!(Xt(r)!==ae)?!1:!(t!==void 0&&Xt(r)===t))}function u0(i,n,e){return e.some(t=>Hs(i,n,t))}function Hs(i,n,e){return(i.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function h0(i,n,e){return n.length===0&&!i.children[e]}var Sd=class{};function m0(i,n,e,t,r,o,a="emptyOnly",s){return ce(this,null,function*(){return new xd(i,n,e,t,r,a,o,s).recognize()})}var f0=31,xd=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,t,r,o,a,s,c){this.injector=n,this.configLoader=e,this.rootComponentType=t,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=c,this.applyRedirects=new Cd(this.urlSerializer,this.urlTree)}noMatchError(n){return new O(4002,`'${n.segmentGroup}'`)}recognize(){return ce(this,null,function*(){let n=pf(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:t}=yield this.match(n),r=new At(t,e),o=new Vo("",r),a=If(t,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}})}match(n){return ce(this,null,function*(){let e=new Er([],Object.freeze({}),Object.freeze(_({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),ae,this.rootComponentType,null,{},this.injector);try{return{children:yield this.processSegmentGroup(this.injector,this.config,n,ae,e),rootSnapshot:e}}catch(t){if(t instanceof zo)return this.urlTree=t.urlTree,this.match(t.urlTree.root);throw t instanceof Nn?this.noMatchError(t):t}})}processSegmentGroup(n,e,t,r,o){return ce(this,null,function*(){if(t.segments.length===0&&t.hasChildren())return this.processChildren(n,e,t,o);let a=yield this.processSegment(n,e,t,t.segments,r,!0,o);return a instanceof At?[a]:[]})}processChildren(n,e,t,r){return ce(this,null,function*(){let o=[];for(let c of Object.keys(t.children))c==="primary"?o.unshift(c):o.push(c);let a=[];for(let c of o){let d=t.children[c],m=a0(e,c),p=yield this.processSegmentGroup(n,m,d,c,r);a.push(...p)}let s=Yf(a);return p0(s),s})}processSegment(n,e,t,r,o,a,s){return ce(this,null,function*(){for(let c of e)try{return yield this.processSegmentAgainstRoute(c._injector??n,e,c,t,r,o,a,s)}catch(d){if(d instanceof Nn||Hf(d))continue;throw d}if(h0(t,r,o))return new Sd;throw new Nn(t)})}processSegmentAgainstRoute(n,e,t,r,o,a,s,c){return ce(this,null,function*(){if(Xt(t)!==a&&(a===ae||!Hs(r,o,t)))throw new Nn(r);if(t.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,t,o,a,c);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(n,r,e,t,o,a,c);throw new Nn(r)})}expandSegmentAgainstRouteUsingRedirect(n,e,t,r,o,a,s){return ce(this,null,function*(){let{matched:c,parameters:d,consumedSegments:m,positionalParamSegments:p,remainingSegments:x}=qf(e,r,o);if(!c)throw new Nn(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>f0&&(this.allowRedirects=!1));let $=this.createSnapshot(n,r,o,d,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let X=yield this.applyRedirects.applyRedirectCommands(m,r.redirectTo,p,Wf($),n),J=yield this.applyRedirects.lineralizeSegments(r,X);return this.processSegment(n,t,e,J.concat(x),a,!1,s)})}createSnapshot(n,e,t,r,o){let a=new Er(t,r,Object.freeze(_({},this.urlTree.queryParams)),this.urlTree.fragment,_0(e),Xt(e),e.component??e._loadedComponent??null,e,v0(e),n),s=Md(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}matchSegmentAgainstRoute(n,e,t,r,o,a){return ce(this,null,function*(){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=Oe=>this.createSnapshot(n,t,Oe.consumedSegments,Oe.parameters,a),c=yield Ss(s0(e,t,r,n,this.urlSerializer,s,this.abortSignal));if(t.path==="**"&&(e.children={}),!c?.matched)throw new Nn(e);n=t._injector??n;let{routes:d}=yield this.getChildConfig(n,t,r),m=t._loadedInjector??n,{parameters:p,consumedSegments:x,remainingSegments:$}=c,X=this.createSnapshot(n,t,x,p,a),{segmentGroup:J,slicedSegments:I}=pf(e,x,$,d,o);if(I.length===0&&J.hasChildren()){let Oe=yield this.processChildren(m,d,J,X);return new At(X,Oe)}if(d.length===0&&I.length===0)return new At(X,[]);let le=Xt(t)===o,ye=yield this.processSegment(m,d,J,I,le?ae:o,!0,X);return new At(X,ye instanceof At?[ye]:[])})}getChildConfig(n,e,t){return ce(this,null,function*(){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(yield Ss(e0(n,e,t,this.urlSerializer,this.abortSignal))){let o=yield this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw i0(e)}return{routes:[],injector:n}})}};function p0(i){i.sort((n,e)=>n.value.outlet===ae?-1:e.value.outlet===ae?1:n.value.outlet.localeCompare(e.value.outlet))}function g0(i){let n=i.value.routeConfig;return n&&n.path===""}function Yf(i){let n=[],e=new Set;for(let t of i){if(!g0(t)){n.push(t);continue}let r=n.find(o=>t.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...t.children),e.add(r)):n.push(t)}for(let t of e){let r=Yf(t.children);n.push(new At(t.value,r))}return n.filter(t=>!e.has(t))}function _0(i){return i.data||{}}function v0(i){return i.resolve||{}}function b0(i,n,e,t,r,o,a){return Qt(s=>ce(null,null,function*(){let{state:c,tree:d}=yield m0(i,n,e,t,s.extractedUrl,r,o,a);return ie(_({},s),{targetSnapshot:c,urlAfterRedirects:d})}))}function y0(i){return Qt(n=>{let{targetSnapshot:e,guards:{canActivateChecks:t}}=n;if(!t.length)return U(n);let r=new Set(t.map(s=>s.route)),o=new Set;for(let s of r)if(!o.has(s))for(let c of Xf(s))o.add(c);let a=0;return st(o).pipe(pi(s=>r.has(s)?w0(s,e,i):(s.data=Md(s,s.parent,i).resolve,U(void 0))),Qe(()=>a++),Kl(1),Qt(s=>a===o.size?U(n):vt))})}function Xf(i){let n=i.children.map(e=>Xf(e)).flat();return[i,...n]}function w0(i,n,e){let t=i.routeConfig,r=i._resolve;return t?.title!==void 0&&!Lf(t)&&(r[Ho]=t.title),Jt(()=>(i.data=Md(i,i.parent,e).resolve,C0(r,i,n).pipe(K(o=>(i._resolvedData=o,i.data=_(_({},i.data),o),null)))))}function C0(i,n,e){let t=hd(i);if(t.length===0)return U({});let r={};return st(t).pipe(Qt(o=>D0(i[o],n,e).pipe(zn(),Qe(a=>{if(a instanceof Rr)throw Vs(new Ln,a);r[o]=a}))),Kl(1),K(()=>r),Xi(o=>Hf(o)?vt:ya(o)))}function D0(i,n,e){let t=n._environmentInjector,r=Tr(i,t),o=r.resolve?r.resolve(n,e):nt(t,()=>r(n,e));return Bi(o)}function gf(i){return Re(n=>{let e=i(n);return e?st(e).pipe(K(()=>n)):U(n)})}var Ad=(()=>{class i{buildTitle(e){let t,r=e.root;for(;r!==void 0;)t=this.getResolvedTitleForRoute(r)??t,r=r.children.find(o=>o.outlet===ae);return t}getResolvedTitleForRoute(e){return e.data[Ho]}static \u0275fac=function(t){return new(t||i)};static \u0275prov=v({token:i,factory:()=>l(Kf),providedIn:"root"})}return i})(),Kf=(()=>{class i extends Ad{title;constructor(e){super(),this.title=e}updateTitle(e){let t=this.buildTitle(e);t!==void 0&&this.title.setTitle(t)}static \u0275fac=function(t){return new(t||i)(E(cm))};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),ei=new b("",{factory:()=>({})}),ji=new b(""),Us=(()=>{class i{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=l(Ph);loadComponent(e,t){return ce(this,null,function*(){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Promise.resolve(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let r=ce(this,null,function*(){try{let o=yield bf(nt(e,()=>t.loadComponent())),a=yield Jf(Qf(o));return this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=a,a}finally{this.componentLoaders.delete(t)}});return this.componentLoaders.set(t,r),r})}loadChildren(e,t){if(this.childrenLoaders.get(t))return this.childrenLoaders.get(t);if(t._loadedRoutes)return Promise.resolve({routes:t._loadedRoutes,injector:t._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(t);let r=ce(this,null,function*(){try{let o=yield Zf(t,this.compiler,e,this.onLoadEndListener);return t._loadedRoutes=o.routes,t._loadedInjector=o.injector,t._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(t)}});return this.childrenLoaders.set(t,r),r}static \u0275fac=function(t){return new(t||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Zf(i,n,e,t){return ce(this,null,function*(){let r=yield bf(nt(e,()=>i.loadChildren())),o=yield Jf(Qf(r)),a;o instanceof vh||Array.isArray(o)?a=o:a=yield n.compileModuleAsync(o),t&&t(i);let s,c,d=!1,m;return Array.isArray(a)?(c=a,d=!0):(s=a.create(e).injector,m=a,c=s.get(ji,[],{optional:!0,self:!0}).flat()),{routes:c.map(Td),injector:s,factory:m}})}function S0(i){return i&&typeof i=="object"&&"default"in i}function Qf(i){return S0(i)?i.default:i}function Jf(i){return ce(this,null,function*(){return i})}var Gs=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=v({token:i,factory:()=>l(x0),providedIn:"root"})}return i})(),x0=(()=>{class i{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,t){return e}static \u0275fac=function(t){return new(t||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),kd=new b(""),Pd=new b("");function ep(i,n,e){let t=i.get(Pd),r=i.get(N);if(!r.startViewTransition||t.skipNextTransition)return t.skipNextTransition=!1,new Promise(d=>setTimeout(d));let o,a=new Promise(d=>{o=d}),s=r.startViewTransition(()=>(o(),M0(i)));s.updateCallbackDone.catch(d=>{}),s.ready.catch(d=>{}),s.finished.catch(d=>{});let{onViewTransitionCreated:c}=t;return c&&nt(i,()=>c({transition:s,from:n,to:e})),a}function M0(i){return new Promise(n=>{ze({read:()=>setTimeout(n)},{injector:i})})}var E0=()=>{},Od=new b(""),$s=(()=>{class i{currentNavigation=k(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=k(null);events=new y;transitionAbortWithErrorSubject=new y;configLoader=l(Us);environmentInjector=l(tt);destroyRef=l(xn);urlSerializer=l(Jn);rootContexts=l(Vi);location=l(rn);inputBindingEnabled=l(Go,{optional:!0})!==null;titleStrategy=l(Ad);options=l(ei,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=l(Gs);createViewTransition=l(kd,{optional:!0});navigationErrorHandler=l(Od,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>U(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new As(r)),t=r=>this.events.next(new ks(r));this.configLoader.onLoadEndListener=t,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let t=++this.navigationId;G(()=>{this.transitions?.next(ie(_({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:t,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new je(null),this.transitions.pipe(pe(t=>t!==null),Re(t=>{let r=!1,o=new AbortController,a=()=>!r&&this.currentTransition?.id===t.id;return U(t).pipe(Re(s=>{if(this.navigationId>t.id)return this.cancelNavigationTransition(t,"",mt.SupersededByNewNavigation),vt;this.currentTransition=t;let c=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:c?ie(_({},c),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let d=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),m=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!d&&m!=="reload")return this.events.next(new mn(s.id,this.urlSerializer.serialize(s.rawUrl),"",Dr.IgnoredSameUrlNavigation)),s.resolve(!1),vt;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return U(s).pipe(Re(p=>(this.events.next(new hn(p.id,this.urlSerializer.serialize(p.extractedUrl),p.source,p.restoredState)),p.id!==this.navigationId?vt:Promise.resolve(p))),b0(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),Qe(p=>{t.targetSnapshot=p.targetSnapshot,t.urlAfterRedirects=p.urlAfterRedirects,this.currentNavigation.update(x=>(x.finalUrl=p.urlAfterRedirects,x)),this.events.next(new Lo)}),Re(p=>st(t.routesRecognizeHandler.deferredHandle??U(void 0)).pipe(K(()=>p))),Qe(()=>{let p=new No(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(p)}));if(d&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:p,extractedUrl:x,source:$,restoredState:X,extras:J}=s,I=new hn(p,this.urlSerializer.serialize(x),$,X);this.events.next(I);let le=Ff(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=t=ie(_({},s),{targetSnapshot:le,urlAfterRedirects:x,extras:ie(_({},J),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(ye=>(ye.finalUrl=x,ye)),U(t)}else return this.events.next(new mn(s.id,this.urlSerializer.serialize(s.extractedUrl),"",Dr.IgnoredByUrlHandlingStrategy)),s.resolve(!1),vt}),K(s=>{let c=new Es(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(c),this.currentTransition=t=ie(_({},s),{guards:Fy(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),t}),Wy(s=>this.events.next(s)),Re(s=>{if(t.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw Vs(this.urlSerializer,s.guardsResult);let c=new Rs(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(c),!a())return vt;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",mt.GuardRejected),vt;if(s.guards.canActivateChecks.length===0)return U(s);let d=new Is(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(d),!a())return vt;let m=!1;return U(s).pipe(y0(this.paramsInheritanceStrategy),Qe({next:()=>{m=!0;let p=new Ts(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(p)},complete:()=>{m||this.cancelNavigationTransition(s,"",mt.NoDataFromResolver)}}))}),gf(s=>{let c=m=>{let p=[];if(m.routeConfig?._loadedComponent)m.component=m.routeConfig?._loadedComponent;else if(m.routeConfig?.loadComponent){let x=m._environmentInjector;p.push(this.configLoader.loadComponent(x,m.routeConfig).then($=>{m.component=$}))}for(let x of m.children)p.push(...c(x));return p},d=c(s.targetSnapshot.root);return d.length===0?U(s):st(Promise.all(d).then(()=>s))}),gf(()=>this.afterPreactivation()),Re(()=>{let{currentSnapshot:s,targetSnapshot:c}=t,d=this.createViewTransition?.(this.environmentInjector,s.root,c.root);return d?st(d).pipe(K(()=>t)):U(t)}),xe(1),Re(s=>{let c=Ay(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=t=s=ie(_({},s),{targetRouterState:c}),this.currentNavigation.update(m=>(m.targetRouterState=c,m)),this.events.next(new xr);let d=t.beforeActivateHandler.deferredHandle;return d?st(d.then(()=>s)):U(s)}),Qe(s=>{new wd(e.routeReuseStrategy,t.targetRouterState,t.currentRouterState,c=>this.events.next(c),this.inputBindingEnabled).activate(this.rootContexts),a()&&(r=!0,this.currentNavigation.update(c=>(c.abort=E0,c)),this.lastSuccessfulNavigation.set(G(this.currentNavigation)),this.events.next(new xt(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),ue(Uf(o.signal).pipe(pe(()=>!r&&!t.targetRouterState),Qe(()=>{this.cancelNavigationTransition(t,o.signal.reason+"",mt.Aborted)}))),Qe({complete:()=>{r=!0}}),ue(this.transitionAbortWithErrorSubject.pipe(Qe(s=>{throw s}))),Ki(()=>{o.abort(),r||this.cancelNavigationTransition(t,"",mt.SupersededByNewNavigation),this.currentTransition?.id===t.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Xi(s=>{if(r=!0,this.destroyed)return t.resolve(!1),vt;if(zf(s))this.events.next(new St(t.id,this.urlSerializer.serialize(t.extractedUrl),s.message,s.cancellationCode)),Oy(s)?this.events.next(new Mr(s.url,s.navigationBehaviorOptions)):t.resolve(!1);else{let c=new Bn(t.id,this.urlSerializer.serialize(t.extractedUrl),s,t.targetSnapshot??void 0);try{let d=nt(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(d instanceof Rr){let{message:m,cancellationCode:p}=Vs(this.urlSerializer,d);this.events.next(new St(t.id,this.urlSerializer.serialize(t.extractedUrl),m,p)),this.events.next(new Mr(d.redirectTo,d.navigationBehaviorOptions))}else throw this.events.next(c),s}catch(d){this.options.resolveNavigationPromiseOnError?t.resolve(!1):t.reject(d)}}return vt}))}))}cancelNavigationTransition(e,t,r){let o=new St(e.id,this.urlSerializer.serialize(e.extractedUrl),t,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),t=G(this.currentNavigation),r=t?.targetBrowserUrl??t?.extractedUrl;return e.toString()!==r?.toString()&&!t?.extras.skipLocationChange}static \u0275fac=function(t){return new(t||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function R0(i){return i!==wr}var tp=new b("");var np=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=v({token:i,factory:()=>l(I0),providedIn:"root"})}return i})(),zs=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}},I0=(()=>{class i extends zs{static \u0275fac=(()=>{let e;return function(r){return(e||(e=bt(i)))(r||i)}})();static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Ws=(()=>{class i{urlSerializer=l(Jn);options=l(ei,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=l(rn);urlHandlingStrategy=l(Gs);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new kt;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:t,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,t):t,a=r??o;return a instanceof kt?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:t,initialUrl:r}){t&&e?(this.currentUrlTree=t,this.rawUrlTree=this.urlHandlingStrategy.merge(t,r),this.routerState=e):this.rawUrlTree=r}routerState=Ff(null,l(tt));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=v({token:i,factory:()=>l(T0),providedIn:"root"})}return i})(),T0=(()=>{class i extends Ws{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(t=>{t.type==="popstate"&&setTimeout(()=>{e(t.url,t.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,t){e instanceof hn?this.updateStateMemento():e instanceof mn?this.commitTransition(t):e instanceof No?this.urlUpdateStrategy==="eager"&&(t.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof xr?(this.commitTransition(t),this.urlUpdateStrategy==="deferred"&&!t.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof St&&!Of(e)?this.restoreHistory(t):e instanceof Bn?this.restoreHistory(t,!0):e instanceof xt&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,t){let{extras:r,id:o}=t,{replaceUrl:a,state:s}=r;if(this.location.isCurrentPathEqualTo(e)||a){let c=this.browserPageId,d=_(_({},s),this.generateNgRouterState(o,c,t));this.location.replaceState(e,"",d)}else{let c=_(_({},s),this.generateNgRouterState(o,this.browserPageId+1,t));this.location.go(e,"",c)}}restoreHistory(e,t=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(t&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,t,r){return this.canceledNavigationResolution==="computed"?_({navigationId:e,\u0275routerPageId:t},this.routerUrlState(r)):_({navigationId:e},this.routerUrlState(r))}static \u0275fac=(()=>{let e;return function(r){return(e||(e=bt(i)))(r||i)}})();static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function qs(i,n){i.events.pipe(pe(e=>e instanceof xt||e instanceof St||e instanceof Bn||e instanceof mn),K(e=>e instanceof xt||e instanceof mn?0:(e instanceof St?e.code===mt.Redirect||e.code===mt.SupersededByNewNavigation:!1)?2:1),pe(e=>e!==2),xe(1)).subscribe(()=>{n()})}var rt=(()=>{class i{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=l(tc);stateManager=l(Ws);options=l(ei,{optional:!0})||{};pendingTasks=l(ih);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=l($s);urlSerializer=l(Jn);location=l(rn);urlHandlingStrategy=l(Gs);injector=l(tt);_events=new y;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=l(np);injectorCleanup=l(tp,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=l(ji,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!l(Go,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new Ie;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(t=>{try{let r=this.navigationTransitions.currentTransition,o=G(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(t,o),t instanceof St&&t.code!==mt.Redirect&&t.code!==mt.SupersededByNewNavigation)this.navigated=!0;else if(t instanceof xt)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(t instanceof Mr){let a=t.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(t.url,r.currentRawUrl),c=_({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||R0(r.source)},a);this.scheduleNavigation(s,wr,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}Iy(t)&&this._events.next(t)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),wr,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,t,r,o)=>{this.navigateToSyncWithBrowser(e,r,t,o)})}navigateToSyncWithBrowser(e,t,r,o){let a=r?.navigationId?r:null,s=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(o=ie(_({},o),{browserUrl:e})),r){let d=_({},r);delete d.navigationId,delete d.\u0275routerPageId,delete d.\u0275routerUrl,Object.keys(d).length!==0&&(o.state=d)}let c=this.parseUrl(s);this.scheduleNavigation(c,t,a,o).catch(d=>{this.disposed||this.injector.get(Qi)(d)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return G(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Td),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,t={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:c}=t,d=c?this.currentUrlTree.fragment:a,m=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":m=_(_({},this.currentUrlTree.queryParams),o);break;case"preserve":m=this.currentUrlTree.queryParams;break;default:m=o||null}m!==null&&(m=this.removeEmptyProps(m));let p;try{let x=r?r.snapshot:this.routerState.snapshot.root;p=Tf(x)}catch(x){(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),p=this.currentUrlTree.root}return Af(p,e,m,d??null,this.urlSerializer)}navigateByUrl(e,t={skipLocationChange:!1}){let r=Qn(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,wr,null,t)}navigate(e,t={skipLocationChange:!1}){return A0(e),this.navigateByUrl(this.createUrlTree(e,t),t)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch(t){return this.console.warn(Sn(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,t){let r;if(t===!0?r=_({},wf):t===!1?r=_({},md):r=_(_({},md),t),Qn(e))return df(this.currentUrlTree,e,r);let o=this.parseUrl(e);return df(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((t,[r,o])=>(o!=null&&(t[r]=o),t),{})}scheduleNavigation(e,t,r,o,a){if(this.disposed)return Promise.resolve(!1);let s,c,d;a?(s=a.resolve,c=a.reject,d=a.promise):d=new Promise((p,x)=>{s=p,c=x});let m=this.pendingTasks.add();return qs(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(m))}),this.navigationTransitions.handleNavigationRequest({source:t,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:c,promise:d,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),d.catch(Promise.reject.bind(Promise))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function A0(i){for(let n=0;n<i.length;n++)if(i[n]==null)throw new O(4008,!1)}var P0=(()=>{class i{router=l(rt);stateManager=l(Ws);fragment=k("");queryParams=k({});path=k("");serializer=l(Jn);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof xt&&this.updateState()})}updateState(){let{fragment:e,root:t,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new kt(t)))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Ar=(()=>{class i{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=l(new nn("href"),{optional:!0});reactiveHref=En(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return G(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return G(this._target)}_target=k(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return G(this._queryParams)}_queryParams=k(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return G(this._fragment)}_fragment=k(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return G(this._queryParamsHandling)}_queryParamsHandling=k(void 0);set state(e){this._state.set(e)}get state(){return G(this._state)}_state=k(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return G(this._info)}_info=k(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return G(this._relativeTo)}_relativeTo=k(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return G(this._preserveFragment)}_preserveFragment=k(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return G(this._skipLocationChange)}_skipLocationChange=k(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return G(this._replaceUrl)}_replaceUrl=k(!1);isAnchorElement;onChanges=new y;applicationErrorHandler=l(Qi);options=l(ei,{optional:!0});reactiveRouterState=l(P0);constructor(e,t,r,o,a,s){this.router=e,this.route=t,this.tabIndexAttribute=r,this.renderer=o,this.el=a,this.locationStrategy=s;let c=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=c==="a"||c==="area"||!!(typeof customElements=="object"&&customElements.get(c)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=k(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(Qn(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,t,r,o,a){let s=this._urlTree();if(s===null||this.isAnchorElement&&(e!==0||t||r||o||a||typeof this.target=="string"&&this.target!="_self"))return!0;let c={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,c)?.catch(d=>{this.applicationErrorHandler(d)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,t){let r=this.renderer,o=this.el.nativeElement;t!==null?r.setAttribute(o,e,t):r.removeAttribute(o,e)}_urlTree=V(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r==="preserve"||r==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let t=this.routerLinkInput();return t===null||!this.router.createUrlTree?null:Qn(t)?t:this.router.createUrlTree(t,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,t)=>this.computeHref(e)===this.computeHref(t)});get urlTree(){return G(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(t){return new(t||i)(re(rt),re(fn),Jl("tabindex"),re(de),re(P),re(Ut))};static \u0275dir=R({type:i,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(t,r){t&1&&S("click",function(a){return r.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),t&2&&Z("href",r.reactiveHref(),gh)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",F],skipLocationChange:[2,"skipLocationChange","skipLocationChange",F],replaceUrl:[2,"replaceUrl","replaceUrl",F],routerLink:"routerLink"},features:[Le]})}return i})();var Wo=class{};var ip=(()=>{class i{router;injector;preloadingStrategy;loader;subscription;constructor(e,t,r,o){this.router=e,this.injector=t,this.preloadingStrategy=r,this.loader=o}setUpPreloading(){this.subscription=this.router.events.pipe(pe(e=>e instanceof xt),pi(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription?.unsubscribe()}processRoutes(e,t){let r=[];for(let o of t){o.providers&&!o._injector&&(o._injector=Ia(o.providers,e,""));let a=o._injector??e;o._loadedNgModuleFactory&&!o._loadedInjector&&(o._loadedInjector=o._loadedNgModuleFactory.create(a).injector);let s=o._loadedInjector??a;(o.loadChildren&&!o._loadedRoutes&&o.canLoad===void 0||o.loadComponent&&!o._loadedComponent)&&r.push(this.preloadConfig(a,o)),(o.children||o._loadedRoutes)&&r.push(this.processRoutes(s,o.children??o._loadedRoutes))}return st(r).pipe(ql())}preloadConfig(e,t){return this.preloadingStrategy.preload(t,()=>{if(e.destroyed)return U(null);let r;t.loadChildren&&t.canLoad===void 0?r=st(this.loader.loadChildren(e,t)):r=U(null);let o=r.pipe(Qt(a=>a===null?U(void 0):(t._loadedRoutes=a.routes,t._loadedInjector=a.injector,t._loadedNgModuleFactory=a.factory,this.processRoutes(a.injector??e,a.routes))));if(t.loadComponent&&!t._loadedComponent){let a=this.loader.loadComponent(e,t);return st([o,a]).pipe(ql())}else return o})}static \u0275fac=function(t){return new(t||i)(E(rt),E(tt),E(Wo),E(Us))};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),rp=new b(""),O0=(()=>{class i{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=wr;restoredId=0;store={};isHydrating=l(lh,{optional:!0})??!1;urlSerializer=l(Jn);zone=l(z);viewportScroller=l(bc);transitions=l($s);constructor(e){this.options=e,this.options.scrollPositionRestoration||="disabled",this.options.anchorScrolling||="disabled",this.isHydrating&&l(wt).whenStable().then(()=>{this.isHydrating=!1})}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof hn?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof xt?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof mn&&e.code===Dr.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{if(!(e instanceof Sr)||e.scrollBehavior==="manual")return;let t={behavior:"instant"};e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0],t):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position,t):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(e,t){if(this.isHydrating)return;let r=G(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(()=>ce(this,null,function*(){yield new Promise(o=>{setTimeout(o),typeof requestAnimationFrame<"u"&&requestAnimationFrame(o)}),this.zone.run(()=>{this.transitions.events.next(new Sr(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,t,r))})}))}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(t){ir()};static \u0275prov=v({token:i,factory:i.\u0275fac})}return i})();function Nd(i,...n){return Hn([{provide:ji,multi:!0,useValue:i},[],{provide:fn,useFactory:op},{provide:nc,multi:!0,useFactory:ap},n.map(e=>e.\u0275providers)])}function op(){return l(rt).routerState.root}function qo(i,n){return{\u0275kind:i,\u0275providers:n}}function ap(){let i=l(H);return n=>{let e=i.get(wt);if(n!==e.components[0])return;let t=i.get(rt),r=i.get(sp);i.get(Ld)===1&&t.initialNavigation(),i.get(dp,null,{optional:!0})?.setUpPreloading(),i.get(rp,null,{optional:!0})?.init(),t.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var sp=new b("",{factory:()=>new y}),Ld=new b("",{factory:()=>1});function lp(){let i=[{provide:ec,useValue:!0},{provide:Ld,useValue:0},eo(()=>{let n=l(H);return n.get(dc,Promise.resolve()).then(()=>new Promise(t=>{let r=n.get(rt),o=n.get(sp);qs(r,()=>{t(!0)}),n.get($s).afterPreactivation=()=>(t(!0),o.closed?U(void 0):o),r.initialNavigation()}))})];return qo(2,i)}function cp(){let i=[eo(()=>{l(rt).setUpLocationChangeListener()}),{provide:Ld,useValue:2}];return qo(3,i)}var dp=new b("");function up(i){return qo(0,[{provide:dp,useExisting:ip},{provide:Wo,useExisting:i}])}function Ys(){return qo(8,[Rd,{provide:Go,useExisting:Rd}])}function hp(i){Zr("NgRouterViewTransitions");let n=[{provide:kd,useValue:ep},{provide:Pd,useValue:_({skipNextTransition:!!i?.skipInitialTransition},i)}];return qo(9,n)}var mp=[rn,{provide:Jn,useClass:Ln},rt,Vi,{provide:fn,useFactory:op},Us,[]],zi=(()=>{class i{constructor(){}static forRoot(e,t){return{ngModule:i,providers:[mp,[],{provide:ji,multi:!0,useValue:e},[],t?.errorHandler?{provide:Od,useValue:t.errorHandler}:[],{provide:ei,useValue:t||{}},t?.useHash?N0():L0(),F0(),t?.preloadingStrategy?up(t.preloadingStrategy).\u0275providers:[],t?.initialNavigation?B0(t):[],t?.bindToComponentInputs?Ys().\u0275providers:[],t?.enableViewTransitions?hp().\u0275providers:[],V0()]}}static forChild(e){return{ngModule:i,providers:[{provide:ji,multi:!0,useValue:e}]}}static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({})}return i})();function F0(){return{provide:rp,useFactory:()=>{let i=l(bc),n=l(ei);return n.scrollOffset&&i.setOffset(n.scrollOffset),new O0(n)}}}function N0(){return{provide:Ut,useClass:mc}}function L0(){return{provide:Ut,useClass:Va}}function B0(i){return[i.initialNavigation==="disabled"?cp().\u0275providers:[],i.initialNavigation==="enabledBlocking"?lp().\u0275providers:[]]}var Fd=new b("");function V0(){return[{provide:Fd,useFactory:ap},{provide:nc,multi:!0,useExisting:Fd}]}var j0=["*",[["mat-toolbar-row"]]],z0=["*","mat-toolbar-row"],H0=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=R({type:i,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return i})(),pp=(()=>{class i{_elementRef=l(P);_platform=l(me);_document=l(N);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=w({type:i,selectors:[["mat-toolbar"]],contentQueries:function(t,r,o){if(t&1&&zt(o,H0,5),t&2){let a;ee(a=te())&&(r._toolbarRows=a)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(t,r){t&2&&(it(r.color?"mat-"+r.color:""),A("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:z0,decls:2,vars:0,template:function(t,r){t&1&&(De(j0),Q(0),Q(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2,changeDetection:0})}return i})();var gp=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({imports:[se]})}return i})();var G0=["mat-menu-item",""],$0=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],W0=["mat-icon, [matMenuItemIcon]","*"];function q0(i,n){i&1&&(Zi(),u(0,"svg",2),Y(1,"polygon",3),h())}var Y0=["*"];function X0(i,n){if(i&1){let e=Te();Be(0,"div",0),Pa("click",function(){we(e);let r=T();return Ce(r.closed.emit("click"))})("animationstart",function(r){we(e);let o=T();return Ce(o._onAnimationStart(r.animationName))})("animationend",function(r){we(e);let o=T();return Ce(o._onAnimationDone(r.animationName))})("animationcancel",function(r){we(e);let o=T();return Ce(o._onAnimationDone(r.animationName))}),Be(1,"div",1),Q(2),qe()()}if(i&2){let e=T();it(e._classList),A("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),Rt("id",e.panelId),Z("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}var Vd=new b("MAT_MENU_PANEL"),Yo=(()=>{class i{_elementRef=l(P);_document=l(N);_focusMonitor=l(Ct);_parentMenu=l(Vd,{optional:!0});_changeDetectorRef=l(oe);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new y;_focused=new y;_highlighted=!1;_triggersSubmenu=!1;constructor(){l(Fe).load(ln),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll("mat-icon, .material-icons");for(let r=0;r<t.length;r++)t[r].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=w({type:i,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(t,r){t&1&&S("click",function(a){return r._checkDisabled(a)})("mouseenter",function(){return r._handleMouseEnter()}),t&2&&(Z("role",r.role)("tabindex",r._getTabIndex())("aria-disabled",r.disabled)("disabled",r.disabled||null),A("mat-mdc-menu-item-highlighted",r._highlighted)("mat-mdc-menu-item-submenu-trigger",r._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",F],disableRipple:[2,"disableRipple","disableRipple",F]},exportAs:["matMenuItem"],attrs:G0,ngContentSelectors:W0,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,r){t&1&&(De($0),Q(0),u(1,"span",0),Q(2,1),h(),Y(3,"div",1),W(4,q0,2,0,":svg:svg",2)),t&2&&(f(3),D("matRippleDisabled",r.disableRipple||r.disabled)("matRippleTrigger",r._getHostElement()),f(),q(r._triggersSubmenu?4:-1))},dependencies:[Je],encapsulation:2,changeDetection:0})}return i})();var K0=new b("MatMenuContent");var Z0=new b("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),Bd="_mat-menu-enter",Xs="_mat-menu-exit",Pr=(()=>{class i{_elementRef=l(P);_changeDetectorRef=l(oe);_injector=l(H);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=Ee();_allItems;_directDescendantItems=new Kr;_classList={};_panelAnimationState="void";_animationDone=new y;_isAnimating=k(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(e){let t=this._previousPanelClass,r=_({},this._classList);t&&t.length&&t.split(" ").forEach(o=>{r[o]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(o=>{r[o]=!0}),this._elementRef.nativeElement.className=""),this._classList=r}_previousPanelClass;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new j;close=this.closed;panelId=l(ve).getId("mat-menu-panel-");constructor(){let e=l(Z0);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Do(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(We(this._directDescendantItems),Re(e=>dt(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let r=e.toArray(),o=Math.max(0,Math.min(r.length-1,t.activeItemIndex||0));r[o]&&!r[o].disabled?t.setActiveItem(o):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(We(this._directDescendantItems),Re(t=>dt(...t.map(r=>r._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,r=this._keyManager;switch(t){case 27:Ke(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&r.setFocusOrigin("keyboard"),r.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=ze(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let r=this._keyManager;r.setFocusOrigin(e).setFirstItemActive(),!r.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=ie(_({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===Xs;(t||e===Bd)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(e){(e===Bd||e===Xs)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(Xs),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?Bd:Xs)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(We(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=w({type:i,selectors:[["mat-menu"]],contentQueries:function(t,r,o){if(t&1&&zt(o,K0,5)(o,Yo,5)(o,Yo,4),t&2){let a;ee(a=te())&&(r.lazyContent=a.first),ee(a=te())&&(r._allItems=a),ee(a=te())&&(r.items=a)}},viewQuery:function(t,r){if(t&1&&Xe(yt,5),t&2){let o;ee(o=te())&&(r.templateRef=o.first)}},hostVars:3,hostBindings:function(t,r){t&2&&Z("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",F],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:F(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[Pe([{provide:Vd,useExisting:i}])],ngContentSelectors:Y0,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(t,r){t&1&&(De(),Ch(0,X0,3,12,"ng-template"))},styles:[`mat-menu {
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
`],encapsulation:2,changeDetection:0})}return i})(),Q0=new b("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let i=l(H);return()=>Pn(i)}});var kr=new WeakMap,J0=(()=>{class i{_canHaveBackdrop;_element=l(P);_viewContainerRef=l(lt);_menuItemInstance=l(Yo,{optional:!0,self:!0});_dir=l($e,{optional:!0});_focusMonitor=l(Ct);_ngZone=l(z);_injector=l(H);_scrollStrategy=l(Q0);_changeDetectorRef=l(oe);_animationsDisabled=Ee();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=Ie.EMPTY;_menuCloseSubscription=Ie.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e&&(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=l(Vd,{optional:!0});this._parentMaterialMenu=t instanceof Pr?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&kr.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let r=kr.get(t);kr.set(t,this),r&&r!==this&&r._closeMenu();let o=this._createOverlay(t),a=o.getConfig(),s=a.positionStrategy;this._setPosition(t,s),this._canHaveBackdrop?a.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:a.hasBackdrop=t.hasBackdrop??!1,o.hasAttached()||(o.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),t instanceof Pr&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(ue(t.close)).subscribe(()=>{s.withLockedPosition(!1).reapplyLastPosition(),s.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,r=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),r instanceof Pr&&this._ownsMenu(r)?(this._pendingRemoval=r._animationDone.pipe(xe(1)).subscribe(()=>{t.detach(),kr.has(r)||r.lazyContent?.detach()}),r._setIsOpen(!1)):(t.detach(),r?.lazyContent?.detach()),r&&this._ownsMenu(r)&&kr.delete(r),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=Yt(this._injector,t),this._overlayRef.keydownEvents().subscribe(r=>{this._menu instanceof Pr&&this._menu._handleKeydown(r)})}return this._overlayRef}_getOverlayConfig(e){return new qt({positionStrategy:Fi(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(r=>{this._ngZone.run(()=>{let o=r.connectionPair.overlayX==="start"?"after":"before",a=r.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(o,a)})})}_setPosition(e,t){let[r,o]=e.xPosition==="before"?["end","start"]:["start","end"],[a,s]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[c,d]=[a,s],[m,p]=[r,o],x=0;if(this._triggersSubmenu()){if(p=r=e.xPosition==="before"?"start":"end",o=m=r==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let $=this._parentMaterialMenu.items.first;this._parentInnerPadding=$?$._getHostElement().offsetTop:0}x=a==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(c=a==="top"?"bottom":"top",d=s==="top"?"bottom":"top");t.withPositions([{originX:r,originY:c,overlayX:m,overlayY:a,offsetY:x},{originX:o,originY:c,overlayX:p,overlayY:a,offsetY:x},{originX:r,originY:d,overlayX:m,overlayY:s,offsetY:-x},{originX:o,originY:d,overlayX:p,overlayY:s,offsetY:-x}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),r=this._parentMaterialMenu?this._parentMaterialMenu.closed:U(),o=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(pe(a=>this._menuOpen&&a!==this._menuItemInstance)):U();return dt(e,r,o,t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new Wt(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return kr.get(e)===this}_triggerIsAriaDisabled(){return F(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(t){ir()};static \u0275dir=R({type:i})}return i})(),_p=(()=>{class i extends J0{_cleanupTouchstart;_hoverSubscription=Ie.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new j;onMenuOpen=this.menuOpened;menuClosed=new j;onMenuClose=this.menuClosed;constructor(){super(!0);let e=l(de);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",t=>{An(t)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){Tn(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=R({type:i,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,r){t&1&&S("click",function(a){return r._handleClick(a)})("mousedown",function(a){return r._handleMousedown(a)})("keydown",function(a){return r._handleKeydown(a)}),t&2&&Z("aria-haspopup",r.menu?"menu":null)("aria-expanded",r.menuOpen)("aria-controls",r.menuOpen?r.menu==null?null:r.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[Me]})}return i})();var vp=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({imports:[ct,Lt,se,an]})}return i})();function bp(i){return Error(`Unable to find icon with the name "${i}"`)}function tw(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function yp(i){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${i}".`)}function wp(i){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${i}".`)}var Vn=class{url;svgText;options;svgElement=null;constructor(n,e,t){this.url=n,this.svgText=e,this.options=t}},Dp=(()=>{class i{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,r,o){this._httpClient=e,this._sanitizer=t,this._errorHandler=o,this._document=r}addSvgIcon(e,t,r){return this.addSvgIconInNamespace("",e,t,r)}addSvgIconLiteral(e,t,r){return this.addSvgIconLiteralInNamespace("",e,t,r)}addSvgIconInNamespace(e,t,r,o){return this._addSvgIconConfig(e,t,new Vn(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,r,o){let a=this._sanitizer.sanitize(ft.HTML,r);if(!a)throw wp(r);let s=Mi(a);return this._addSvgIconConfig(e,t,new Vn("",s,o))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,r){return this._addSvgIconSetConfig(e,new Vn(t,null,r))}addSvgIconSetLiteralInNamespace(e,t,r){let o=this._sanitizer.sanitize(ft.HTML,t);if(!o)throw wp(t);let a=Mi(o);return this._addSvgIconSetConfig(e,new Vn("",a,r))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(ft.RESOURCE_URL,e);if(!t)throw yp(e);let r=this._cachedIconsByUrl.get(t);return r?U(Ks(r)):this._loadSvgIconFromConfig(new Vn(e,null)).pipe(Qe(o=>this._cachedIconsByUrl.set(t,o)),K(o=>Ks(o)))}getNamedSvgIcon(e,t=""){let r=Cp(t,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(t,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(t);return a?this._getSvgFromIconSetConfigs(e,a):ya(bp(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?U(Ks(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(K(t=>Ks(t)))}_getSvgFromIconSetConfigs(e,t){let r=this._extractIconWithNameFromAnySet(e,t);if(r)return U(r);let o=t.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(Xi(s=>{let d=`Loading icon set URL: ${this._sanitizer.sanitize(ft.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(d)),U(null)})));return Da(o).pipe(K(()=>{let a=this._extractIconWithNameFromAnySet(e,t);if(!a)throw bp(e);return a}))}_extractIconWithNameFromAnySet(e,t){for(let r=t.length-1;r>=0;r--){let o=t[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(Qe(t=>e.svgText=t),K(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?U(null):this._fetchIcon(e).pipe(Qe(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,r){let o=e.querySelector(`[id="${t}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let s=this._svgElementFromString(Mi("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,r)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let r=t.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let t=this._svgElementFromString(Mi("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:a,value:s}=r[o];a!=="id"&&t.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[o].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw tw();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let a=this._sanitizer.sanitize(ft.RESOURCE_URL,t);if(!a)throw yp(t);let s=this._inProgressUrlFetches.get(a);if(s)return s;let c=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(K(d=>Mi(d)),Ki(()=>this._inProgressUrlFetches.delete(a)),Qu());return this._inProgressUrlFetches.set(a,c),c}_addSvgIconConfig(e,t,r){return this._svgIconConfigs.set(Cp(e,t),r),this}_addSvgIconSetConfig(e,t){let r=this._iconSetConfigs.get(e);return r?r.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](t,e);if(o)return nw(o)?new Vn(o.url,null,o.options):new Vn(o,null)}}static \u0275fac=function(t){return new(t||i)(E(Ac,8),E(go),E(N,8),E(gi))};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Ks(i){return i.cloneNode(!0)}function Cp(i,n){return i+":"+n}function nw(i){return!!(i.url&&i.options)}var iw=["*"],rw=new b("MAT_ICON_DEFAULT_OPTIONS"),ow=new b("mat-icon-location",{providedIn:"root",factory:()=>{let i=l(N),n=i?i.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),Sp=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],aw=Sp.map(i=>`[${i}]`).join(", "),sw=/^url\(['"]?#(.*?)['"]?\)$/,pn=(()=>{class i{_elementRef=l(P);_iconRegistry=l(Dp);_location=l(ow);_errorHandler=l(gi);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=Ie.EMPTY;constructor(){let e=l(new nn("aria-hidden"),{optional:!0}),t=l(rw,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let r=e.childNodes[t];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),t.forEach(r=>e.classList.add(r)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(aw),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<t.length;o++)Sp.forEach(a=>{let s=t[o],c=s.getAttribute(a),d=c?c.match(sw):null;if(d){let m=r.get(s);m||(m=[],r.set(s,m)),m.push({name:a,value:d[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,r]=this._splitIconName(e);t&&(this._svgNamespace=t),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,t).pipe(xe(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${t}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=w({type:i,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,r){t&2&&(Z("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),it(r.color?"mat-"+r.color:""),A("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",F],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:iw,decls:1,vars:0,template:function(t,r){t&1&&(De(),Q(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
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
`],encapsulation:2,changeDetection:0})}return i})(),gn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({imports:[se]})}return i})();var Zs=(()=>{class i{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Qs=(()=>{class i{_animationsDisabled=Ee();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=w({type:i,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,r){t&2&&A("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,r){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2,changeDetection:0})}return i})();var lw=["text"],cw=[[["mat-icon"]],"*"],dw=["mat-icon","*"];function uw(i,n){if(i&1&&Y(0,"mat-pseudo-checkbox",1),i&2){let e=T();D("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function hw(i,n){if(i&1&&Y(0,"mat-pseudo-checkbox",3),i&2){let e=T();D("disabled",e.disabled)}}function mw(i,n){if(i&1&&(u(0,"span",4),g(1),h()),i&2){let e=T();f(),ne("(",e.group.label,")")}}var zd=new b("MAT_OPTION_PARENT_COMPONENT"),Hd=new b("MatOptgroup");var jd=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}},Or=(()=>{class i{_element=l(P);_changeDetectorRef=l(oe);_parent=l(zd,{optional:!0});group=l(Hd,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=l(ve).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=k(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new j;_text;_stateChanges=new y;constructor(){let e=l(Fe);e.load(ln),e.load(sr),this._signalDisableRipple=!!this._parent&&Un(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Ke(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new jd(this,e))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=w({type:i,selectors:[["mat-option"]],viewQuery:function(t,r){if(t&1&&Xe(lw,7),t&2){let o;ee(o=te())&&(r._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,r){t&1&&S("click",function(){return r._selectViaInteraction()})("keydown",function(a){return r._handleKeydown(a)}),t&2&&(Rt("id",r.id),Z("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),A("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",F]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:dw,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,r){t&1&&(De(cw),W(0,uw,1,2,"mat-pseudo-checkbox",1),Q(1),u(2,"span",2,0),Q(4,1),h(),W(5,hw,1,1,"mat-pseudo-checkbox",3),W(6,mw,2,1,"span",4),Y(7,"div",5)),t&2&&(q(r.multiple?0:-1),f(5),q(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),f(),q(r.group&&r.group._inert?6:-1),f(),D("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[Qs,Je],styles:[`.mat-mdc-option {
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
`],encapsulation:2,changeDetection:0})}return i})();function xp(i,n,e){if(e.length){let t=n.toArray(),r=e.toArray(),o=0;for(let a=0;a<i+1;a++)t[a].group&&t[a].group===r[o]&&o++;return o}return 0}function Mp(i,n,e,t){return i<e?i:i+n>e+t?Math.max(0,i-t+n):e}var Ep=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({imports:[se]})}return i})();var Ud=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({imports:[ct,Ep,Or,se]})}return i})();var Fr=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,t,r,o){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=t,this._parentForm=r,this._stateChanges=o}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,t=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=t?.isErrorState(r,e)??!1;o!==n&&(this.errorState=o,this._stateChanges.next())}};var fw=["mat-internal-form-field",""],pw=["*"],Rp=(()=>{class i{labelPosition="after";static \u0275fac=function(t){return new(t||i)};static \u0275cmp=w({type:i,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(t,r){t&2&&A("mdc-form-field--align-end",r.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:fw,ngContentSelectors:pw,decls:1,vars:0,template:function(t,r){t&1&&(De(),Q(0))},styles:[`.mat-internal-form-field {
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
`],encapsulation:2,changeDetection:0})}return i})();function gw(i,n){}var ii=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var $d=(()=>{class i extends qn{_elementRef=l(P);_focusTrapFactory=l(Lc);_config;_interactivityChecker=l(Ja);_ngZone=l(z);_focusMonitor=l(Ct);_renderer=l(de);_changeDetectorRef=l(oe);_injector=l(H);_platform=l(me);_document=l(N);_portalOutlet;_focusTrapped=new y;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=l(ii,{optional:!0})||new ii,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),a(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",r),a=this._renderer.listen(e,"mousedown",r)})),e.focus(t)}_focusByCssSelector(e,t){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,t)}_trapFocus(e){this._isDestroyed||ze(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e=="string"?t=this._document.querySelector(e):typeof e=="boolean"?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus=="function"){let r=_o(),o=this._elementRef.nativeElement;(!r||r===this._document.body||r===o||o.contains(r))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=_o();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=_o()))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=w({type:i,selectors:[["cdk-dialog-container"]],viewQuery:function(t,r){if(t&1&&Xe(Yn,7),t&2){let o;ee(o=te())&&(r._portalOutlet=o.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(t,r){t&2&&Z("id",r._config.id||null)("role",r._config.role)("aria-modal",r._config.ariaModal)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null)},features:[Me],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,r){t&1&&ge(0,gw,0,0,"ng-template",0)},dependencies:[Yn],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return i})(),Ko=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new y;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(n,e){this.overlayRef=n,this.config=e,this.disableClose=e.disableClose,this.backdropClick=n.backdropClick(),this.keydownEvents=n.keydownEvents(),this.outsidePointerEvents=n.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!Ke(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=n.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(n,e){if(this._canClose(n)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(n),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(n="",e=""){return this.overlayRef.updateSize({width:n,height:e}),this}addPanelClass(n){return this.overlayRef.addPanelClass(n),this}removePanelClass(n){return this.overlayRef.removePanelClass(n),this}_canClose(n){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(n,e,this.componentInstance))}},_w=new b("DialogScrollStrategy",{providedIn:"root",factory:()=>{let i=l(H);return()=>mr(i)}}),vw=new b("DialogData"),bw=new b("DefaultDialogConfig");function yw(i){let n=k(i),e=new j;return{valueSignal:n,get value(){return n()},change:e,ngOnDestroy(){e.complete()}}}var Wd=(()=>{class i{_injector=l(H);_defaultOptions=l(bw,{optional:!0});_parentDialog=l(i,{optional:!0,skipSelf:!0});_overlayContainer=l(hs);_idGenerator=l(ve);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new y;_afterOpenedAtThisLevel=new y;_ariaHiddenElements=new Map;_scrollStrategy=l(_w);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Jt(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(We(void 0)));constructor(){}open(e,t){let r=this._defaultOptions||new ii;t=_(_({},r),t),t.id=t.id||this._idGenerator.getId("cdk-dialog-"),t.id&&this.getDialogById(t.id);let o=this._getOverlayConfig(t),a=Yt(this._injector,o),s=new Ko(a,t),c=this._attachContainer(a,s,t);if(s.containerInstance=c,!this.openDialogs.length){let d=this._overlayContainer.getContainerElement();c._focusTrapped?c._focusTrapped.pipe(xe(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(d)}):this._hideNonDialogContentFromAssistiveTechnology(d)}return this._attachDialogContent(e,s,c,t),this.openDialogs.push(s),s.closed.subscribe(()=>this._removeOpenDialog(s,!0)),this.afterOpened.next(s),s}closeAll(){Gd(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){Gd(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),Gd(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new qt({positionStrategy:e.positionStrategy||Kn().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,r){let o=r.injector||r.viewContainerRef?.injector,a=[{provide:ii,useValue:r},{provide:Ko,useValue:t},{provide:ur,useValue:e}],s;r.container?typeof r.container=="function"?s=r.container:(s=r.container.type,a.push(...r.container.providers(r))):s=$d;let c=new $t(s,r.viewContainerRef,H.create({parent:o||this._injector,providers:a}));return e.attach(c).instance}_attachDialogContent(e,t,r,o){if(e instanceof yt){let a=this._createInjector(o,t,r,void 0),s={$implicit:o.data,dialogRef:t};o.templateContext&&(s=_(_({},s),typeof o.templateContext=="function"?o.templateContext():o.templateContext)),r.attachTemplatePortal(new Wt(e,null,s,a))}else{let a=this._createInjector(o,t,r,this._injector),s=r.attachComponentPortal(new $t(e,o.viewContainerRef,a));t.componentRef=s,t.componentInstance=s.instance}}_createInjector(e,t,r,o){let a=e.injector||e.viewContainerRef?.injector,s=[{provide:vw,useValue:e.data},{provide:Ko,useValue:t}];return e.providers&&(typeof e.providers=="function"?s.push(...e.providers(t,e,r)):s.push(...e.providers)),e.direction&&(!a||!a.get($e,null,{optional:!0}))&&s.push({provide:$e,useValue:yw(e.direction)}),H.create({parent:a||o,providers:s})}_removeOpenDialog(e,t){let r=this.openDialogs.indexOf(e);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,a)=>{o?a.setAttribute("aria-hidden",o):a.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let r=t.length-1;r>-1;r--){let o=t[r];o!==e&&o.nodeName!=="SCRIPT"&&o.nodeName!=="STYLE"&&!o.hasAttribute("aria-live")&&!o.hasAttribute("popover")&&(this._ariaHiddenElements.set(o,o.getAttribute("aria-hidden")),o.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(t){return new(t||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Gd(i,n){let e=i.length;for(;e--;)n(i[e])}var Ip=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({providers:[Wd],imports:[Lt,Xn,Ri,Xn]})}return i})();function ww(i,n){}var tl=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},qd="mdc-dialog--open",Tp="mdc-dialog--opening",Ap="mdc-dialog--closing",Cw=150,Dw=75,Sw=(()=>{class i extends $d{_animationStateChanged=new j;_animationsEnabled=!Ee();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Pp(this._config.enterAnimationDuration)??Cw:0;_exitAnimationDuration=this._animationsEnabled?Pp(this._config.exitAnimationDuration)??Dw:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(kp,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Tp,qd)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(qd),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(qd),this._animationsEnabled?(this._hostElement.style.setProperty(kp,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Ap)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Tp,Ap)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),t}static \u0275fac=(()=>{let e;return function(r){return(e||(e=bt(i)))(r||i)}})();static \u0275cmp=w({type:i,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(t,r){t&2&&(Rt("id",r._config.id),Z("aria-modal",r._config.ariaModal)("role",r._config.role)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null),A("_mat-animation-noopable",!r._animationsEnabled)("mat-mdc-dialog-container-with-actions",r._actionSectionCount>0))},features:[Me],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(t,r){t&1&&(u(0,"div",0)(1,"div",1),ge(2,ww,0,0,"ng-template",2),h()())},dependencies:[Yn],styles:[`.mat-mdc-dialog-container {
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
`],encapsulation:2})}return i})(),kp="--mat-dialog-transition-duration";function Pp(i){return i==null?null:typeof i=="number"?i:i.endsWith("ms")?Ft(i.substring(0,i.length-2)):i.endsWith("s")?Ft(i.substring(0,i.length-1))*1e3:i==="0"?0:null}var el=(function(i){return i[i.OPEN=0]="OPEN",i[i.CLOSING=1]="CLOSING",i[i.CLOSED=2]="CLOSED",i})(el||{}),Hi=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new $l(1);_beforeClosed=new $l(1);_result;_closeFallbackTimeout;_state=el.OPEN;_closeInteractionType;constructor(n,e,t){this._ref=n,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=n.id,n.addPanelClass("mat-mdc-dialog-panel"),t._animationStateChanged.pipe(pe(r=>r.state==="opened"),xe(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(pe(r=>r.state==="closed"),xe(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),n.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),dt(this.backdropClick(),this.keydownEvents().pipe(pe(r=>r.keyCode===27&&!this.disableClose&&!Ke(r)))).subscribe(r=>{this.disableClose||(r.preventDefault(),Op(this,r.type==="keydown"?"keyboard":"mouse"))})}close(n){let e=this._config.closePredicate;e&&!e(n,this._config,this.componentInstance)||(this._result=n,this._containerInstance._animationStateChanged.pipe(pe(t=>t.state==="closing"),xe(1)).subscribe(t=>{this._beforeClosed.next(n),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=el.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(n){let e=this._ref.config.positionStrategy;return n&&(n.left||n.right)?n.left?e.left(n.left):e.right(n.right):e.centerHorizontally(),n&&(n.top||n.bottom)?n.top?e.top(n.top):e.bottom(n.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(n="",e=""){return this._ref.updateSize(n,e),this}addPanelClass(n){return this._ref.addPanelClass(n),this}removePanelClass(n){return this._ref.removePanelClass(n),this}getState(){return this._state}_finishDialogClose(){this._state=el.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function Op(i,n,e){return i._closeInteractionType=n,i.close(e)}var Zo=new b("MatMdcDialogData"),xw=new b("mat-mdc-dialog-default-options"),Mw=new b("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let i=l(H);return()=>mr(i)}}),pt=(()=>{class i{_defaultOptions=l(xw,{optional:!0});_scrollStrategy=l(Mw);_parentDialog=l(i,{optional:!0,skipSelf:!0});_idGenerator=l(ve);_injector=l(H);_dialog=l(Wd);_animationsDisabled=Ee();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new y;_afterOpenedAtThisLevel=new y;dialogConfigClass=tl;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Jt(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(We(void 0)));constructor(){this._dialogRefConstructor=Hi,this._dialogContainerType=Sw,this._dialogDataToken=Zo}open(e,t){let r;t=_(_({},this._defaultOptions||new tl),t),t.id=t.id||this._idGenerator.getId("mat-mdc-dialog-"),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(e,ie(_({},t),{positionStrategy:Kn(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()==="0"||t.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:ii,useValue:t}]},templateContext:()=>({dialogRef:r}),providers:(a,s,c)=>(r=new this._dialogRefConstructor(a,t,c),r.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:c},{provide:this._dialogDataToken,useValue:s.data},{provide:this._dialogRefConstructor,useValue:r}])}));return r.componentRef=o.componentRef,r.componentInstance=o.componentInstance,this.openDialogs.push(r),this.afterOpened.next(r),r.afterClosed().subscribe(()=>{let a=this.openDialogs.indexOf(r);a>-1&&(this.openDialogs.splice(a,1),this.openDialogs.length||this._getAfterAllClosed().next())}),r}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),_n=(()=>{class i{dialogRef=l(Hi,{optional:!0});_elementRef=l(P);_dialog=l(pt);ariaLabel;type="button";dialogResult;_matDialogClose;constructor(){}ngOnInit(){this.dialogRef||(this.dialogRef=Np(this._elementRef,this._dialog.openDialogs))}ngOnChanges(e){let t=e._matDialogClose||e._matDialogCloseResult;t&&(this.dialogResult=t.currentValue)}_onButtonClick(e){Op(this.dialogRef,e.screenX===0&&e.screenY===0?"keyboard":"mouse",this.dialogResult)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=R({type:i,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(t,r){t&1&&S("click",function(a){return r._onButtonClick(a)}),t&2&&Z("aria-label",r.ariaLabel||null)("type",r.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[Le]})}return i})(),Fp=(()=>{class i{_dialogRef=l(Hi,{optional:!0});_elementRef=l(P);_dialog=l(pt);constructor(){}ngOnInit(){this._dialogRef||(this._dialogRef=Np(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=R({type:i})}return i})(),vn=(()=>{class i extends Fp{id=l(ve).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=bt(i)))(r||i)}})();static \u0275dir=R({type:i,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(t,r){t&2&&Rt("id",r.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[Me]})}return i})(),bn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=R({type:i,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[wh([Gc])]})}return i})(),yn=(()=>{class i extends Fp{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=bt(i)))(r||i)}})();static \u0275dir=R({type:i,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(t,r){t&2&&A("mat-mdc-dialog-actions-align-start",r.align==="start")("mat-mdc-dialog-actions-align-center",r.align==="center")("mat-mdc-dialog-actions-align-end",r.align==="end")},inputs:{align:"align"},features:[Me]})}return i})();function Np(i,n){let e=i.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-mdc-dialog-container");)e=e.parentElement;return e?n.find(t=>t.id===e.id):null}var wn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({providers:[pt],imports:[Ip,Lt,Xn,se]})}return i})();var Lp=(()=>{class i{openTranslation(e){window.open(`https://translate.google.com/?hl=de&sl=de&tl=en&text=${e}&op=translate`)}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=w({type:i,selectors:[["app-cricket-info-dialog"]],decls:24,vars:0,consts:[["content",""],["mat-dialog-title",""],[1,"mt-2","material-symbols-outlined"],[1,"justify-content-end"],["mat-button","",3,"click"],["mat-button","","mat-dialog-close",""]],template:function(t,r){if(t&1){let o=Te();u(0,"h1",1),g(1,"How to win Cricket"),h(),u(2,"mat-dialog-content",null,0)(4,"p"),g(5,"Der Spieler, der alle Felder ausgeworfen hat und dessen Punktzahl nicht geringer als die eines Gegners ist, gewinnt das Spiel."),h(),u(6,"p"),g(7," Der Spieler, der die h\xF6chste Punktzahl nach dem Rundenlimit hat, gewinnt das Spiel."),h(),u(8,"p"),g(9," Bei Punktgleichheit gewinnt der Spieler mit den meisten ausgeworfenen Feldern."),h(),u(10,"p"),g(11,"Falls die Anzahl der ausgeworfenen Felder ebenfalls gleich ist, dann gibt es bis zu 10 m\xF6gliche zus\xE4tzliche W\xFCrfe, den Gewinner zu ermitteln."),h(),u(12,"span",2),g(13,"trip_origin"),h(),g(14," Bull "),Y(15,"br"),u(16,"span",2),g(17,"target"),h(),g(18," Bullseye "),h(),u(19,"mat-dialog-actions",3)(20,"button",4),S("click",function(){we(o);let s=ht(3);return Ce(r.openTranslation(s.innerText))}),g(21," translate "),h(),u(22,"button",5),g(23,"close"),h()()}},dependencies:[zi,Se,Ze,wn,_n,vn,yn,bn],encapsulation:2})}}return i})();var ot=(function(i){return i.Easy="Easy",i.Medium="Medium",i.Hard="Hard",i})(ot||{}),Bp={id:-1,name:"unknown",remainingPoints:-1,lastScore:-1,history:[],cricketMap:new Map,average:0,last3History:[]};var M=(function(i){return i.Simple501="501",i.DoubleOut501="501-DoubleOut",i.Cricket="Cricket",i.Elimination301="Elimination-301",i.Highscore="Highscore",i.RandomHit="Random-Hit",i})(M||{});var Vp=45,Bt=(()=>{class i{constructor(){this.INITIAL_ROUND_COUNT=1,this.MAX_ROUND_COUNT=Vp,this.roundCount=this.INITIAL_ROUND_COUNT}setMaxRounds(e){e?this.MAX_ROUND_COUNT=e:this.MAX_ROUND_COUNT=Vp}getRemainingRounds(){let e=this.MAX_ROUND_COUNT-(this.roundCount-1);return e<0?0:e}incrementRoundCount(){this.roundCount++}reset(){this.roundCount=this.INITIAL_ROUND_COUNT}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var Mt=(()=>{class i{static createPlayer(e,t){return{id:t,name:typeof e=="string"?e:e.name,isAI:typeof e=="string"?!1:e.isAI,difficulty:typeof e=="string"?void 0:e.difficulty,remainingPoints:501,lastScore:0,history:[],cricketMap:new Map,average:0,last3History:[]}}constructor(e,t,r,o,a){this.playerService=e,this.currentPlayerService=t,this.dialog=r,this.snackbar=o,this.roundCountService=a,this._gameType="",this.playerNames=[],this._hideAll=!1,this.lastPlayerId=-1}setGameType(e){this._gameType=e,this.currentPlayerService.setCurrentGameMode(e)}initPlayers(e){this.roundCountService.reset(),this.playerService.setupDartPlayers(e),this.playerNames=e.map(t=>typeof t=="string"?t:t.name),this._gameType===M.Elimination301||this._gameType===M.Highscore||this._gameType===M.RandomHit?this.playerService._players.forEach(t=>t.remainingPoints=0):this.playerService._players.forEach(t=>t.remainingPoints=501),this._hideAll=!1,this.lastPlayerId=this.playerService._players[this.playerService._players.length-1].id,this.currentPlayerService.init(this.playerService.getFirstPlayer())}score(e){let t=e.value*e.multiplier;if(this.currentPlayerService.isOvershot(t))this.displayOvershotNotification().afterDismissed().subscribe(()=>{this.switchPlayer()});else{if(this._gameType===M.Elimination301){this.scoreElimination(t);return}if(this._gameType===M.Highscore){this.scoreHighscore(t);return}if(this._gameType===M.RandomHit){this.scoreRandomHit(e);return}if(this._gameType===M.DoubleOut501){this.currentPlayerService.score501(t),this.checksFor501DoubleOut(e.multiplier);return}if(this._gameType===M.Simple501){this.currentPlayerService.score501(t),this.checksFor501();return}}}checksFor501(){this.currentPlayerService.hasReachedZeroPoints()?(this.currentPlayerService.finalizeTurn("subtract"),this.handleVictory()):this.currentPlayerService.hasNoThrowsRemaining()&&(this.currentPlayerService.finalizeTurn("subtract"),this.switchPlayer())}scoreHighscore(e){this.currentPlayerService.scoreHighscore(e),this.roundCountService.getRemainingRounds()==0&&this.isNewRound()&&this.currentPlayerService.hasNoThrowsRemaining()?(this.currentPlayerService.finalizeTurn("add"),this.handleVictoryByReachingRoundLimit()):this.currentPlayerService.hasNoThrowsRemaining()&&(this.currentPlayerService.finalizeTurn("add"),this.switchPlayer())}scoreRandomHit(e){let t=this.currentPlayerService._randomHitTarget(),r=t!==null&&e.value===t.value&&e.multiplier===t.multiplier,o=r?1:0,a=e.value*e.multiplier;this.currentPlayerService.scoreRandomHit(o,r,a),this.roundCountService.getRemainingRounds()==0&&this.isNewRound()&&this.currentPlayerService.hasNoThrowsRemaining()?(this.currentPlayerService.finalizeTurn("add"),this.handleVictoryByReachingRoundLimit()):this.currentPlayerService.hasNoThrowsRemaining()&&(this.currentPlayerService.finalizeTurn("add"),this.switchPlayer())}scoreElimination(e){this.currentPlayerService.scoreElimination(e);let t=301,r=this.currentPlayerService._currentPlayer.value,o=r.remainingPoints+this.currentPlayerService._accumulatedPoints;if(this.playerService._players.filter(a=>a.id!==r.id).forEach(a=>{a.remainingPoints===o&&(a.remainingPoints=0)}),o==t){this.currentPlayerService.finalizeTurn("add"),this.handleVictory();return}if(o>t){this.displayOvershotNotification().afterDismissed().subscribe(()=>{this.switchPlayer()});return}this.currentPlayerService.hasNoThrowsRemaining()&&(this.currentPlayerService.finalizeTurn("add"),this.switchPlayer())}checksFor501DoubleOut(e){this.currentPlayerService.hasReachedZeroPoints()?this.currentPlayerService.isDoubleOut(e)?(this.currentPlayerService.finalizeTurn("subtract"),this.handleVictory()):this.displayDoubleOutFailNotification().afterDismissed().subscribe(()=>{this.switchPlayer()}):this.currentPlayerService.hasNoThrowsRemaining()&&(this.currentPlayerService.finalizeTurn("subtract"),this.switchPlayer())}switchPlayer(){let e=this.isNewRound();this.currentPlayerService.switchPlayer(this.playerService.getNextPlayer(this.currentPlayerService._currentPlayer.value),e),this.setCurrentPlayerAsFristofList()}displayDoubleOutFailNotification(){let e=this.currentPlayerService._currentPlayer.value.name;return this.snackbar.open(`NOT DOUBLED OUT !!! Sorry ${e}, you haven't end with double. Switching players.`,"OK",{duration:2e3,horizontalPosition:"center",verticalPosition:"top",panelClass:["absolute-centered-snackbar"]})}displayOvershotNotification(){let e=this.currentPlayerService._currentPlayer.value.name;return this.snackbar.open(`OVERSHOT !!! Sorry ${e}, you have overshot. Switching players.`,"OK",{duration:2e3,horizontalPosition:"center",verticalPosition:"top",panelClass:["absolute-centered-snackbar"]})}handleVictoryByReachingRoundLimit(){let e=this.currentPlayerService.getPlayersWithHighestPoints(),t=this.playerService._players.find(r=>r.name===e[0]);t&&this.currentPlayerService._currentPlayer.next(t),this.dialog.open(oi,{data:{victoryByReachingRoundLimit:!0},disableClose:!0})}handleVictory(){this._hideAll=!0,this.dialog.open(oi,{disableClose:!0})}isNewRound(){return this.playerService._players.length===0?!1:this.currentPlayerService._currentPlayer.value.id===this.lastPlayerId}setCurrentPlayerAsFristofList(){let e=this.playerService._players.shift();this.playerService._players.push(e)}static{this.\u0275fac=function(t){return new(t||i)(E(Ne),E(fe),E(pt),E(dn),E(Bt))}}static{this.\u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var Ne=(()=>{class i{constructor(){this._players=[]}setupDartPlayers(e){if(e.length==0)throw new Error("Provided array must not be empty");this._players=e.map((t,r)=>Mt.createPlayer(t,r))}updatePlayer(e){let t=this._players.findIndex(r=>r.id===e.id);if(t!==-1){let r=this._players.slice();r[t]=e,this._players=r}}setupCricketPlayers(e){if(e.length==0)throw new Error("Provided array must not be empty");this._players=e.map((t,r)=>Vt.createPlayer(t,r))}getFirstPlayer(){return this._players[0]}getNextPlayer(e){let t=this._players.findIndex(({id:o})=>o==e.id),r=this.getIndexOfNextPlayer(t);return this._players[r]}getIndexOfNextPlayer(e){let t=e+1;return t>=this._players.length?0:t}getPlayer(e){let t=this._players.findIndex(({id:r})=>r==e.id);return this._players[t]}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var Rw=["*"];var Iw=new b("MAT_CARD_CONFIG"),il=(()=>{class i{appearance;constructor(){let e=l(Iw,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=w({type:i,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(t,r){t&2&&A("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:Rw,decls:1,vars:0,template:function(t,r){t&1&&(De(),Q(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return i})(),zp=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=R({type:i,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return i})();var ai=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({imports:[se]})}return i})();function Tw(i,n){i&1&&Ve(0,"div",2)}var Aw=new b("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var Gp=(()=>{class i{_elementRef=l(P);_ngZone=l(z);_changeDetectorRef=l(oe);_renderer=l(de);_cleanupTransitionEnd;constructor(){let e=Zc(),t=l(Aw,{optional:!0});this._isNoopAnimation=e==="di-disabled",e==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),t&&(t.color&&(this.color=this._defaultColor=t.color),this.mode=t.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";get value(){return this._value}set value(e){this._value=Up(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=Up(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new j;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(t){return new(t||i)};static \u0275cmp=w({type:i,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(t,r){t&2&&(Z("aria-valuenow",r._isIndeterminate()?null:r.value)("mode",r.mode),it("mat-"+r.color),A("_mat-animation-noopable",r._isNoopAnimation)("mdc-linear-progress--animation-ready",!r._isNoopAnimation)("mdc-linear-progress--indeterminate",r._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",It],bufferValue:[2,"bufferValue","bufferValue",It],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(t,r){t&1&&(Be(0,"div",0),Ve(1,"div",1),W(2,Tw,1,0,"div",2),qe(),Be(3,"div",3),Ve(4,"span",4),qe(),Be(5,"div",5),Ve(6,"span",4),qe()),t&2&&(f(),Oa("flex-basis",r._getBufferBarFlexBasis()),f(),q(r.mode==="buffer"?2:-1),f(),Oa("transform",r._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
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
`],encapsulation:2,changeDetection:0})}return i})();function Up(i,n=0,e=100){return Math.max(n,Math.min(e,i))}var $p=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({imports:[se]})}return i})();function Pw(i,n){if(i&1&&(u(0,"div",11),g(1),h()),i&2){let e=T().$implicit,t=T();f(),ne(" (",t.getDiffToCurrentPlayer(e),") ")}}function Ow(i,n){if(i&1&&(u(0,"div",14)(1,"div",15)(2,"span",16),g(3),h()(),u(4,"div",17),g(5),h()()),i&2){let e=n.$implicit,t=T(2).$implicit,r=T();f(),A("closed",r.getCricketHitCount(t,e)>=3),Z("title",e===25?"Bull":e),f(2),he(e===25?"B":e),f(),A("closed",r.getCricketHitCount(t,e)>=3),f(),ne(" ",r.getCricketHitCount(t,e)," ")}}function Fw(i,n){if(i&1&&(u(0,"div",12),ge(1,Ow,6,7,"div",13),h()),i&2){let e=T(2);f(),D("ngForOf",e.getCricketValues())}}function Nw(i,n){if(i&1){let e=Te();Aa(0),u(1,"div",4)(2,"div",5)(3,"div",6),g(4),h(),ge(5,Pw,2,1,"div",7),h(),u(6,"div",8),ge(7,Fw,2,1,"div",9),u(8,"span",10),S("click",function(){let r=we(e).$implicit,o=T();return Ce(o.currentPlayerService.showHistory(r))}),g(9),h()()(),ka()}if(i&2){let e=n.$implicit,t=T();f(4),he(e.name),f(),D("ngIf",t.currentPlayerService.currentGameMode===t.GameType.Highscore||t.currentPlayerService.currentGameMode===t.GameType.Elimination301),f(2),D("ngIf",t.currentPlayerService.currentGameMode===t.GameType.Cricket),f(2),ne(" ",e.remainingPoints," ")}}var Nr=(()=>{class i{constructor(){this.playerService=l(Ne),this.currentPlayerService=l(fe),this.GameType=M}getDiffToCurrentPlayer(e){if(e===this.currentPlayerService._currentPlayer.getValue())return 0;let t=this.currentPlayerService._remainingPointsToDisplay();return Math.abs(t-e.remainingPoints)}getCricketValues(){return[15,16,17,18,19,20,25]}getCricketHitCount(e,t){return V(()=>(this.currentPlayerService.last3HisSignal(),e.cricketMap.get(t)||0))()}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=w({type:i,selectors:[["app-mini-player-overview"]],decls:4,vars:1,consts:[[1,"m-1","px-1","py-1","shadow","rounded"],[1,"section","players-overview"],[1,"mini-scoreboard"],[4,"ngFor","ngForOf"],[1,"mini-player-row"],[1,"mini-player-main-info"],[1,"mini-player-name","player-name","text-wrap","text-truncate"],["class","diff-score small ms-1",4,"ngIf"],[1,"mini-player-actions","d-flex","align-items-center"],["class","cricket-mini-display d-flex me-2",4,"ngIf"],[1,"mini-player-score","fw-bold","matcardpointer",3,"click"],[1,"diff-score","small","ms-1"],[1,"cricket-mini-display","d-flex","me-2"],["class","cricket-circle-wrapper",4,"ngFor","ngForOf"],[1,"cricket-circle-wrapper"],[1,"cricket-circle"],[1,"cricket-value"],[1,"hit-count"]],template:function(t,r){t&1&&(u(0,"div",0)(1,"div",1)(2,"div",2),ge(3,Nw,10,4,"ng-container",3),h()()()),t&2&&(f(3),D("ngForOf",r.playerService._players))},dependencies:[Ae,on,Rn],styles:[".players-overview[_ngcontent-%COMP%]{flex:1.5}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]{width:100%;height:90%;overflow-y:auto;display:flex;flex-direction:column;gap:2px;padding:2px}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]::-webkit-scrollbar{width:3px}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#fff3;border-radius:3px}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row[_ngcontent-%COMP%]{justify-content:center;display:flex;align-items:center;padding:.5rem;border-radius:4px;font-size:.75rem;min-height:34px;width:100%}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row.active-player[_ngcontent-%COMP%]{min-width:fit-content;background-color:#80d8ff33;border:1px solid rgba(128,216,255,.3)}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row[_ngcontent-%COMP%]   .mini-player-name[_ngcontent-%COMP%]{padding:.2rem;max-width:4.2rem;min-width:4.2rem;color:#80d8ff;font-weight:500}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row[_ngcontent-%COMP%]   .diff-score[_ngcontent-%COMP%]{color:#80d8ff;font-weight:500}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row[_ngcontent-%COMP%]   .mini-player-actions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row[_ngcontent-%COMP%]   .cricket-mini-display[_ngcontent-%COMP%]{width:100%;gap:.75rem;height:3rem;align-items:center}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row[_ngcontent-%COMP%]   .cricket-mini-display[_ngcontent-%COMP%]   .cricket-circle-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:1px}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row[_ngcontent-%COMP%]   .cricket-mini-display[_ngcontent-%COMP%]   .cricket-circle[_ngcontent-%COMP%]{width:18px;height:18px;border-radius:50%;background-color:#3f51b5;border:1px solid rgba(255,255,255,.4);display:flex;align-items:center;justify-content:center;transition:all .2s ease}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row[_ngcontent-%COMP%]   .cricket-mini-display[_ngcontent-%COMP%]   .cricket-circle[_ngcontent-%COMP%]   .cricket-value[_ngcontent-%COMP%]{font-size:10px;color:#fff;font-weight:700}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row[_ngcontent-%COMP%]   .cricket-mini-display[_ngcontent-%COMP%]   .cricket-circle.closed[_ngcontent-%COMP%]{background-color:#f44336;box-shadow:0 0 4px #f4433680;border-color:#ff9800}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row[_ngcontent-%COMP%]   .cricket-mini-display[_ngcontent-%COMP%]   .hit-count[_ngcontent-%COMP%]{font-size:9px;font-weight:700;color:#ffd740}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row[_ngcontent-%COMP%]   .cricket-mini-display[_ngcontent-%COMP%]   .hit-count.closed[_ngcontent-%COMP%]{color:#f44336}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row[_ngcontent-%COMP%]   .mini-player-score[_ngcontent-%COMP%]{min-width:3rem;text-align:center}"]})}}return i})();var Wp=(()=>{class i{constructor(){this.GameType=M,this.playerService=l(Ne),this.snackBarRef=l(dn),this.data=l(_s),this.currentPlayerService=l(fe),this.timeLeft=2300,this.INTERVAL=100,this.progress=k(100),this.cricketKeys=[]}ngOnInit(){this.nextPlayer=this.data.nextPlayer,this.startTimer(),this.cricketKeys=Array.from(this.nextPlayer.cricketMap.keys())}startTimer(){let e=this.timeLeft,t=setInterval(()=>{this.timeLeft>0?(this.timeLeft-=this.INTERVAL,this.progress.set(Math.floor(this.timeLeft/e*100))):(clearInterval(t),this.snackBarRef.dismiss())},this.INTERVAL)}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=w({type:i,selectors:[["app-switch-player-snack"]],decls:26,vars:9,consts:[[1,"d-flex","flex-column"],[3,"color","value"],[1,"player-name","mt-1"],[1,"text-truncate","text-warning"],[1,"dart-throw-indicator"],["mat-mini-fab","",1,"no-pointer","sum-circle"],["mat-mini-fab","","color","warn",1,"no-pointer","hit-circle"],[1,"d-flex","justify-content-between","w-100"],[1,"d-inline-flex"],[1,"text-bg-warning","rounded","current-player-score"],[1,"text-white"]],template:function(t,r){t&1&&(u(0,"div",0),Y(1,"mat-progress-bar",1),u(2,"div",2)(3,"h5",3),g(4),h()(),u(5,"div",0),Y(6,"app-mini-player-overview"),h(),u(7,"div",4)(8,"button",5)(9,"span"),g(10),h()(),u(11,"button",6)(12,"span"),g(13),h()(),u(14,"button",6)(15,"span"),g(16),h()(),u(17,"button",6)(18,"span"),g(19),h()()(),u(20,"div",7)(21,"h3",8)(22,"b",9),g(23),h()(),u(24,"h3",10),g(25),h()()()),t&2&&(f(),D("color","accent")("value",r.progress()),f(3),ne(" ","Next Player - "+r.nextPlayer.name," "),f(6),he(r.currentPlayerService._lastTurnSum),f(3),he(r.currentPlayerService._lastTurnHits[0]??"\u27B6"),f(3),he(r.currentPlayerService._lastTurnHits[1]??"\u27B6"),f(3),he(r.currentPlayerService._lastTurnHits[2]??"\u27B6"),f(4),ne(" ",r.currentPlayerService._currentPlayer.value.remainingPoints," "),f(2),ne(" \u2300 ",r.currentPlayerService._currentPlayer.value.average," "))},dependencies:[ai,Se,cn,Ae,$p,Gp,Nr],styles:[".current-player-score[_ngcontent-%COMP%]{padding-left:12px;padding-right:12px}.player-name[_ngcontent-%COMP%]{min-width:50%;max-width:75%;display:inline-block}.dart-throw-indicator[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:6px;align-items:center;justify-content:center;margin:8px 0}.dart-throw-indicator[_ngcontent-%COMP%]   .sum-circle[_ngcontent-%COMP%]{background-color:#4caf50!important;color:#fff!important;transform:scale(1.2);font-weight:700}.dart-throw-indicator[_ngcontent-%COMP%]   .hit-circle[_ngcontent-%COMP%]{background-color:#f44336!important;color:#fff!important;transform:scale(.9);margin:0;font-weight:700}"]})}}return i})();function Lw(i,n){if(i&1&&(u(0,"div",5)(1,"button",7)(2,"span"),g(3),h()(),u(4,"button",8)(5,"span"),g(6),h()(),u(7,"button",8)(8,"span"),g(9),h()(),u(10,"button",8)(11,"span"),g(12),h()()()),i&2){let e=n.$implicit;f(3),he(e.sum),f(3),he(e.hits[0]??"\u27B6"),f(3),he(e.hits[1]??"\u27B6"),f(3),he(e.hits[2]??"\u27B6")}}var qp=(()=>{class i{constructor(){this.historyData=l(Zo)}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=w({type:i,selectors:[["app-history-dialog"]],decls:14,vars:3,consts:[[1,"minWith15vw"],["mat-dialog-title",""],[1,"mb-1"],[1,"row","justify-content-between"],[1,"text-bg-warning","rounded"],[1,"dart-throw-indicator"],["mat-raised-button","","mat-dialog-close","","color","accent"],["mat-mini-fab","",1,"no-pointer","sum-circle"],["mat-mini-fab","","color","warn",1,"no-pointer","hit-circle"]],template:function(t,r){t&1&&(u(0,"div",0)(1,"h1",1),g(2),h(),u(3,"mat-dialog-content")(4,"mat-card",2)(5,"mat-card-title",3)(6,"b",4),g(7),h(),g(8),h(),to(9,Lw,13,4,"div",5,Ta),h()(),u(11,"mat-dialog-actions")(12,"button",6),g(13,"Close"),h()()()),t&2&&(f(2),ne("Match-History - ",r.historyData.player.name),f(5),he(r.historyData.player.remainingPoints),f(),ne(" \u2300 ",r.historyData.player.average," "),f(),no(r.historyData.player.history))},dependencies:[wn,_n,vn,yn,bn,Se,Ze,cn,Ae,ai,il,zp],styles:[".minWith15vw[_ngcontent-%COMP%]{min-width:30vw}.dart-throw-indicator[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:6px;align-items:center;justify-content:center;margin:4px 0}.dart-throw-indicator[_ngcontent-%COMP%]   .sum-circle[_ngcontent-%COMP%]{background-color:#4caf50!important;color:#fff!important;transform:scale(.95);font-weight:700}.dart-throw-indicator[_ngcontent-%COMP%]   .hit-circle[_ngcontent-%COMP%]{background-color:#f44336!important;color:#fff!important;transform:scale(.75);margin:0}"]})}}return i})();var rl=(()=>{class i{constructor(){this.isSoundOn=new je(!0)}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var Cn=(()=>{class i{constructor(e){this.explosionElement=null,this.tripleTwentyCounter=0,this.tripleCounter=0,this.missCounter=0,this.soundToggle=l(rl),this.pfeilImage=null,this.renderer=e.createRenderer(null,null),this.preloadAssets()}preloadAssets(){this.pfeilImage=new Image,this.pfeilImage.src="assets/image/pfeil.svg"}showExplosion(e,t="red",r,o){this.removeExplosion();let s=this.renderer.createElement("div");o?(this.renderer.addClass(s,"explosion-container"),this.renderer.addClass(s,"winner-animated-position")):this.renderer.addClass(s,"explosion-container");let c=this.renderer.createElement("div");this.renderer.addClass(c,"explosion"),t!=="default"&&this.renderer.addClass(c,`explosion-${t}`);let d=this.renderer.createElement("div");this.renderer.addClass(d,"explosion-text"),this.renderer.setProperty(d,"textContent",e);for(let m=0;m<40;m++){let p=this.renderer.createElement("div");this.renderer.addClass(p,"explosion-particle"),this.renderer.appendChild(c,p)}for(let m=0;m<20;m++){let p=this.renderer.createElement("div");this.renderer.addClass(p,"explosion-trail"),this.renderer.appendChild(c,p)}this.renderer.appendChild(c,d),this.renderer.appendChild(s,c),this.renderer.appendChild(document.body,s),this.playAnimationSound(r),this.explosionElement=s,setTimeout(()=>{this.removeExplosion()},1500)}showTrajectory(e,t){let o=e.getBoundingClientRect(),a=t.getBoundingClientRect(),s=o.left+o.width/2,c=o.top+o.height/2,d=a.left+a.width/2,m=a.top+a.height/2,p=this.renderer.createElement("div");this.renderer.addClass(p,"trajectory-container"),this.renderer.appendChild(document.body,p);let x=3;for(let $=0;$<x;$++)setTimeout(()=>{this.createMovingParticle(p,s,c,d,m,1e3)},$*300);setTimeout(()=>{document.body.contains(p)&&this.renderer.removeChild(document.body,p)},1e3+x*300+500)}createMovingParticle(e,t,r,o,a,s){let c=this.renderer.createElement("div");this.renderer.addClass(c,"trajectory-particle");let d=16,m=6,p=t-d,x=r-m,$=o-d,X=a-m,J=(p+$)/2,I=Math.min(x,X)-150;this.renderer.setStyle(c,"opacity","0"),this.renderer.appendChild(e,c);let le=performance.now(),ye=Oe=>{let ke=Oe-le,_e=Math.min(ke/s,1),Et=(1-_e)*(1-_e)*p+2*(1-_e)*_e*J+_e*_e*$,_t=(1-_e)*(1-_e)*x+2*(1-_e)*_e*I+_e*_e*X,Ul=2*(1-_e)*(J-p)+2*_e*($-J),mv=2*(1-_e)*(I-x)+2*_e*(X-I),fv=Math.atan2(mv,Ul)*(180/Math.PI);this.renderer.setStyle(c,"transform",`translate3d(${Et}px, ${_t}px, 0) rotate(${fv}deg)`),this.renderer.setStyle(c,"opacity",_e<.1?_e*10:(1-_e)*2),Math.random()>.7&&this.createTrailParticle(e,Et,_t),_e<1?requestAnimationFrame(ye):e.contains(c)&&this.renderer.removeChild(e,c)};requestAnimationFrame(ye)}createTrailParticle(e,t,r){let o=this.renderer.createElement("div");this.renderer.addClass(o,"trajectory-trail"),this.renderer.setStyle(o,"left",`${t}px`),this.renderer.setStyle(o,"top",`${r}px`),this.renderer.setStyle(o,"animation","trailFade 0.5s ease-out forwards"),this.renderer.appendChild(e,o),setTimeout(()=>{e.contains(o)&&this.renderer.removeChild(e,o)},500)}removeExplosion(){this.explosionElement&&document.body.contains(this.explosionElement)&&(this.renderer.removeChild(document.body,this.explosionElement),this.explosionElement=null)}playAnimationSound(e){try{if(!this.soundToggle.isSoundOn.getValue())return;let r=new Audio;r.src=e,r.volume=.5,r.play().catch(o=>{console.log("Audio konnte nicht abgespielt werden:",o)})}catch(t){console.log("Fehler beim Abspielen des Sounds:",t)}}static{this.\u0275fac=function(t){return new(t||i)(E(He))}}static{this.\u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var Yp=(()=>{class i{constructor(){this.history=[],this.gameState=k(null)}initGame(e,t,r){let o={gameType:e,players:t,currentPlayerIndex:0,roundCount:1,remainingThrows:3,accumulatedPoints:0,randomHitTarget:r??null};this.history=[],this.saveSnapshot(o)}saveSnapshot(e){let t=JSON.stringify(e,(o,a)=>a instanceof Map?{_type:"Map",value:Array.from(a.entries())}:a),r={game:JSON.parse(t,(o,a)=>typeof a=="object"&&a!==null&&a._type==="Map"?new Map(a.value):a),timestamp:Date.now()};this.history.push(r),this.gameState.set(r.game)}undo(){if(this.history.length>1){this.history.pop();let e=this.history[this.history.length-1],t=JSON.parse(JSON.stringify(e.game,(r,o)=>o instanceof Map?{_type:"Map",value:Array.from(o.entries())}:o),(r,o)=>typeof o=="object"&&o!==null&&o._type==="Map"?new Map(o.value):o);return this.gameState.set(t),t}return null}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();function Xp(){return()=>{}}var Dn={rippleRadius:10,rippleColor:"orange"};function Kp(i){return i.reduce((n,e)=>n+" "+e,"")}var Xd=[...Array.from({length:20},(i,n)=>({value:n+1,multiplier:1})),...Array.from({length:20},(i,n)=>({value:n+1,multiplier:2})),...Array.from({length:20},(i,n)=>({value:n+1,multiplier:3})),{value:25,multiplier:1},{value:25,multiplier:2}];function Zp(i){let n;do{let e=Math.floor(Math.random()*Xd.length);n=Xd[e]}while(i&&Xd.length>1&&n.value===i.value&&n.multiplier===i.multiplier);return _({},n)}function Qp(i){return i?i.value===25?i.multiplier===2?"Bullseye":"Bull":`${i.multiplier===3?"Triple":i.multiplier===2?"Double":"Single"} ${i.value}`:""}var Jp=3,fe=(()=>{class i{setLastClickedButton(e){this.lastClickedButton=e}constructor(e,t,r){this.playerService=e,this.snackbar=t,this.dialog=r,this.roundCountService=l(Bt),this.gameStore=l(Yp),this.currentGameMode="",this._remainingThrows=Jp,this._accumulatedPoints=0,this._remainingPointsToDisplay=k(0),this._currentPlayer=new je(Bp),this._last3History=[],this._lastTurnSum=0,this._lastTurnHits=[],this._lastCricketHistory=new Map,this.animationService=l(Cn),this._history=[],this._randomHitTarget=k(null),this.aiTurnSubject=new y,this.aiTurn$=this.aiTurnSubject.asObservable(),this.last3HisSignal=k(this._last3History),this.lastClickedButton=null,this.isTooLong=V(()=>this.last3HisSignal().length>2),this.isAITurn=k(!1),this.updateButtonStatesEffect=ut(()=>{let o=this.isTooLong();this.updateButtonStates(o)}),this.trajectoryEffect=ut(()=>{let o=this.last3HisSignal(),a=this.isAITurn();if(o.length>0&&(a&&this.lastClickedButton,this.lastClickedButton)){let s=Array.from(document.querySelectorAll(".dart-throw-indicator button")),c=o.length-1,d=s[c];if(d){let m=this.lastClickedButton;this.lastClickedButton=null,setTimeout(()=>{this.animationService.showTrajectory(m,d)},50)}}})}isUIBlocked(){return document.querySelectorAll(".mat-mdc-dialog-container").length>0}triggerAIIfActive(){let e=this._currentPlayer.value,t=this.isUIBlocked();if(e&&e.isAI&&this.hasThrowsRemaining()){if(t){console.warn("KI trigger postponed: UI blocked (dialog open) for ",e.name);return}setTimeout(()=>{this.aiTurnSubject.next()},500)}}updateButtonStates(e){let t=document.querySelector("app-dart-board")||document.querySelector("app-cricket-component");if(!t)return;let r=t.getElementsByTagName("button");for(let o of Array.from(r)){let a=o.innerText.trim().toUpperCase();a!=="OK"&&a!=="REVERT"&&(o.disabled=e)}}generateNewRandomHitTarget(){this._randomHitTarget.set(Zp(this._randomHitTarget()))}init(e){this._currentPlayer.next(e),this._remainingPointsToDisplay.set(e.remainingPoints),this._lastCricketHistory=new Map(e.cricketMap),this._last3History=[],this.last3HisSignal.set([]),this.isAITurn.set(e.isAI??!1),this.reset(),this.currentGameMode===M.RandomHit?this.generateNewRandomHitTarget():this._randomHitTarget.set(null),this.gameStore.initGame(this.currentGameMode,this.playerService._players,this._randomHitTarget()),this.triggerAIIfActive()}getCurrentGameState(){return{gameType:this.currentGameMode,players:this.playerService._players,currentPlayerIndex:this.playerService._players.indexOf(this._currentPlayer.value),roundCount:this.roundCountService.roundCount,remainingThrows:this._remainingThrows,accumulatedPoints:this._accumulatedPoints,randomHitTarget:this._randomHitTarget()}}captureState(){this.gameStore.saveSnapshot(this.getCurrentGameState())}setCurrentGameMode(e){this.currentGameMode=e}switchPlayer(e,t){t&&this.roundCountService.incrementRoundCount(),this.animationService.tripleTwentyCounter=0,this.animationService.tripleCounter=0,this.animationService.missCounter=0,this.updateButtonStates(!0),this._lastTurnSum=this.getLast3HistorySum(),this._lastTurnHits=[...this._last3History],this.roundCountService.getRemainingRounds()===0?this.displayRoundCountNotification():this.snackbar.openFromComponent(Wp,{duration:3300,panelClass:["app-shape-morph-snack","switch-player-panel"],horizontalPosition:"center",verticalPosition:"bottom",data:{nextPlayer:e}}).afterDismissed().subscribe(()=>{this._currentPlayer.next(e),this._last3History=[],this.last3HisSignal.set([]),this._lastCricketHistory=new Map(e.cricketMap),this._remainingPointsToDisplay.set(e.remainingPoints),this._history=e.history,this.reset(),this.currentGameMode===M.RandomHit&&this.generateNewRandomHitTarget(),this.captureState(),this.updateButtonStates(!1),this.triggerAIIfActive()})}displayRoundCountNotification(){this.handleVictoryByReachingRoundLimit()}handleVictoryByReachingRoundLimit(){let e=this.getPlayersWithHighestPoints(),t=this.playerService._players.find(r=>r.name===e[0]);t&&this._currentPlayer.next(t),this.dialog.open(oi,{data:{victoryByReachingRoundLimit:!0},disableClose:!0})}savePointsForStatistics(){let e={sum:0,hits:[]};e.sum=this._accumulatedPoints,e.hits.push(...this._last3History),this._currentPlayer.value.history.push(e)}reset(){this._remainingThrows=Jp,this._accumulatedPoints=0,this._last3History=[],this.last3HisSignal.set([]),this._currentPlayer.value&&(this._currentPlayer.value.last3History=[],this.isAITurn.set(this._currentPlayer.value.isAI??!1))}scoreRandomHit(e,t,r=e){if(this.hasThrowsRemaining()){this.calcAverage();let o=this._currentPlayer.value;this.captureState(),this._remainingPointsToDisplay.update(a=>a+e),this._last3History.push(r),o.last3History=[...this._last3History],this.last3HisSignal.update(()=>[...this._last3History]),this.accumulatePoints(e),this.decrementRemainingThrows(),t&&this.hasThrowsRemaining()&&this.generateNewRandomHitTarget(),this._currentPlayer.next(o)}}scoreElimination(e){if(this.hasThrowsRemaining()){this.calcAverage();let t=this._currentPlayer.value;this.captureState(),this._remainingPointsToDisplay.update(r=>r+e),this._last3History.push(e),t.last3History=[...this._last3History],this.last3HisSignal.update(()=>[...this._last3History]),this.accumulatePoints(e),this.decrementRemainingThrows(),this._currentPlayer.next(t)}}scoreHighscore(e){if(this.hasThrowsRemaining()){this.calcAverage();let t=this._currentPlayer.value;this.captureState(),this._remainingPointsToDisplay.update(r=>r+e),this._last3History.push(e),t.last3History=[...this._last3History],this.last3HisSignal.update(()=>[...this._last3History]),this.accumulatePoints(e),this.decrementRemainingThrows(),this._currentPlayer.next(t)}}score501(e){if(this.hasThrowsRemaining()){this.calcAverage();let t=this._currentPlayer.value;this.captureState(),this._remainingPointsToDisplay.update(r=>r-e),this._last3History.push(e),t.last3History=[...this._last3History],this.last3HisSignal.update(()=>[...this._last3History]),this.accumulatePoints(e),this.decrementRemainingThrows(),this._currentPlayer.next(t)}}scoreCricket(e){if(this.hasThrowsRemaining()){this.calcAverage();let t=this._currentPlayer.value;this.captureState(),this.evaluateCricketPoints(e),this._last3History.push(e.value*e.multiplier),t.last3History=[...this._last3History],this.last3HisSignal.update(()=>[...this._last3History]),this._remainingPointsToDisplay.set(t.remainingPoints+this._accumulatedPoints),this.decrementRemainingThrows()}}hasThrowsRemaining(){return this._remainingThrows>0}accumulatePoints(e){this._accumulatedPoints+=e}accumulateCricketPoints(e){this.checkForClosedHit(e)&&(this._accumulatedPoints+=e.value*e.multiplier)}decrementRemainingThrows(){this._remainingThrows-=1,this.triggerAIIfActive()}hasNoThrowsRemaining(){return!this.hasThrowsRemaining()}hasReachedZeroPoints(){return this._currentPlayer.value.remainingPoints-this._accumulatedPoints==0}isOvershot(e){if(this.currentGameMode===M.Highscore||this.currentGameMode===M.RandomHit)return!1;if(this.currentGameMode===M.Elimination301)return this._currentPlayer.value.remainingPoints+this._accumulatedPoints+e>301;{let t=this._currentPlayer.value.remainingPoints-this._accumulatedPoints-e;return this.currentGameMode===M.DoubleOut501?t<0||t===1:t<0}}finalizeTurn(e,t=!0){let r=this._currentPlayer.value;r.lastScore=this._accumulatedPoints,r.last3History=this._last3History,this.last3HisSignal.update(o=>[...o=this._last3History]),e==="add"?r.remainingPoints+=this._accumulatedPoints:r.remainingPoints-=this._accumulatedPoints,this._remainingPointsToDisplay.set(r.remainingPoints),t&&this.savePointsForStatistics()}calcAverage(){if(this.currentGameMode!==M.Cricket){let e=[];this._currentPlayer.value.history.forEach(r=>{r.hits.forEach(o=>{e.push(o)})});let t=e.length;if(t>0){let r=e.reduce((o,a)=>+o+ +a);this._currentPlayer.value.average=Math.round(r/t*3)}}else this._currentPlayer.value.cricketMap.size>0&&(this._currentPlayer.value.average=Math.round(this._currentPlayer.value.remainingPoints/this._currentPlayer.value.cricketMap.size))}isDoubleOut(e){return e/2==1}evaluateCricketPoints(e){let t=[15,16,17,18,19,20,25],r=this._currentPlayer.value.cricketMap,o=e.value;if(o>0&&t.includes(o)){let a=e.multiplier;if(r.has(o)){let c=r.get(o)+a;if(c<=3)r.set(o,c);else{r.set(o,3);let d=c-3;this.accumulateCricketPoints({value:o,multiplier:d})}}else if(a<=3)r.set(o,a);else{r.set(o,3);let s=a-3;this.accumulateCricketPoints({value:o,multiplier:s})}}this.sortMap(),this._currentPlayer.value.throws?.push(e)}sortMap(){this._currentPlayer.value.cricketMap=new Map([...this._currentPlayer.value.cricketMap].sort())}checkForClosedHit(e){return this.playerService._players.length<2?!0:this.playerService._players.filter(t=>t.id!==this._currentPlayer.value.id).some(t=>(t.cricketMap.get(e.value)||0)<3)}isCricketBullClosed(){return this.currentGameMode!==M.Cricket?!1:this.playerService._players.every(e=>(e.cricketMap.get(25)||0)>=3)}isCricketNumberClosed(e){return this.currentGameMode!==M.Cricket?!1:this.playerService._players.every(t=>(t.cricketMap.get(e)||0)>=3)}showHistory(e){let t={player:this.playerService.getPlayer(e??this._currentPlayer.value)};t.player.history.length>0&&this.dialog.open(qp,{data:t})}undoLastPlayerActions(){let e=this.gameStore.undo();e&&this.applyState(e)}applyState(e){this.playerService._players=e.players;let t=this.playerService._players[e.currentPlayerIndex];this._currentPlayer.next(t),this.roundCountService.roundCount=e.roundCount,this._remainingThrows=e.remainingThrows,this._accumulatedPoints=e.accumulatedPoints,this._randomHitTarget.set(e.randomHitTarget??null),this.isAITurn.set((t.isAI??!1)&&e.remainingThrows>0),this.currentGameMode===M.Highscore||this.currentGameMode===M.Elimination301||this.currentGameMode===M.Cricket||this.currentGameMode===M.RandomHit?this._remainingPointsToDisplay.set(t.remainingPoints+e.accumulatedPoints):this._remainingPointsToDisplay.set(t.remainingPoints-e.accumulatedPoints),this._history=t.history,this._last3History=t.last3History||[],this.last3HisSignal.set([...this._last3History]),this._lastCricketHistory=new Map(t.cricketMap)}getLast3HistorySum(){return this._last3History.reduce((e,t)=>e+t,0)}getPlayersWithHighestPoints(){let e=this.playerService._players;if(e.length===0)return[];let t=Math.max(...e.map(r=>r.remainingPoints));return e.filter(r=>r.remainingPoints===t).map(r=>r.name)}hasReachedTargetPoints(e){return this._currentPlayer.value.remainingPoints+this._accumulatedPoints===e}static{this.\u0275fac=function(t){return new(t||i)(E(Ne),E(dn),E(pt))}}static{this.\u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var eg=(()=>{class i{constructor(){this.playerService=l(Ne)}addWinToPlayer(e){if(localStorage.getItem("playerNames")){let t=JSON.parse(localStorage.getItem("playerNames")),r=t.find(o=>o.name===e);r&&(r.wins++,localStorage.setItem("playerNames",JSON.stringify(t)))}}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();function Bw(i,n){if(i&1&&(u(0,"p"),g(1),h()),i&2){let e=T();f(),ne("You have reached the limit of ",e.roundCountService.MAX_ROUND_COUNT," rounds.")}}var oi=(()=>{class i{constructor(){this.currentPlayerService=l(fe),this.data=l(Zo),this.explosionAnimationService=l(Cn),this.dartService=l(Mt),this.roundCountService=l(Bt),this.winner="",this.victoryCountService=l(eg)}ngOnInit(){if(this.dartService._gameType===M.Highscore||this.dartService._gameType===M.Elimination301||this.dartService._gameType===M.Cricket||this.dartService._gameType===M.RandomHit?this.winner=Kp(this.currentPlayerService.getPlayersWithHighestPoints()):this.winner=this.currentPlayerService._currentPlayer.value.name,typeof this.winner=="string"){let e=this.winner.replace('"',"").trim();this.victoryCountService.addWinToPlayer(e)}this.explosionAnimationService.showExplosion("WINNER: "+this.winner,"red","assets/sounds/fanfare-trumpets.mp3",!0)}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=w({type:i,selectors:[["app-victory-dialog"]],decls:11,vars:2,consts:[["mat-dialog-title",""],[1,"d-flex","flex-column"],["mat-raised-button","","color","warn","mat-dialog-close","","routerLink","/"]],template:function(t,r){t&1&&(u(0,"h1",0),g(1,"Congratulations to "),Y(2,"br"),g(3),h(),u(4,"mat-dialog-content"),W(5,Bw,2,1,"p"),u(6,"div",1),Y(7,"app-mini-player-overview"),h()(),u(8,"mat-dialog-actions")(9,"button",2),g(10,"main menu"),h()()),t&2&&(f(3),he(r.winner),f(2),q(r.data!=null&&r.data.victoryByReachingRoundLimit?5:-1))},dependencies:[zi,Ar,Se,Ze,wn,_n,vn,yn,bn,Nr],encapsulation:2})}}return i})();var Vt=(()=>{class i{static createPlayer(e,t){return{id:t,name:typeof e=="string"?e:e.name,isAI:typeof e=="string"?!1:e.isAI,difficulty:typeof e=="string"?void 0:e.difficulty,remainingPoints:0,lastScore:0,history:[],cricketMap:new Map,average:0,last3History:[],throws:[]}}constructor(e,t,r,o){this.playerService=e,this.currentPlayerService=t,this.dialog=r,this.roundCountService=o,this.playerNames=[],this._gameType="",this._hideAll=!1,this.lastPlayerId=-1}setGameType(e){this._gameType=e,this.currentPlayerService.setCurrentGameMode(e)}initPlayers(e){this.roundCountService.reset(),this.playerService.setupCricketPlayers(e),this._hideAll=!1,this.lastPlayerId=this.playerService._players[this.playerService._players.length-1].id,this.currentPlayerService.init(this.playerService.getFirstPlayer())}scoreCricketWithMultiplier(e){this.currentPlayerService.scoreCricket(e),this.cricketWinCheck()?(this.currentPlayerService.finalizeTurn("add",this.currentPlayerService._remainingThrows===0),this.handleVictory()):this.currentPlayerService.hasNoThrowsRemaining()&&(this.currentPlayerService.finalizeTurn("add",this.currentPlayerService._remainingThrows===0),this.roundCountService.getRemainingRounds()===0?this.handleVictory():this.switchPlayer()),this.currentPlayerService.sortMap()}handleVictory(){this._hideAll=!0,this.roundCountService.getRemainingRounds()===0?this.handleVictoryByReachingRoundLimit():this.dialog.open(oi,{disableClose:!0})}handleVictoryByReachingRoundLimit(){let e=this.getPlayersWithHighestPoints(),t=this.playerService._players.find(r=>r.name===e[0]);t&&this.currentPlayerService._currentPlayer.next(t),this.dialog.open(oi,{data:{victoryByReachingRoundLimit:!0},disableClose:!0})}getPlayersWithHighestPoints(){let e=this.playerService._players;if(e.length===0)return[];let t=-1;e.forEach(o=>{let a=this.getEffectivePoints(o);a>t&&(t=a)});let r=e.filter(o=>this.getEffectivePoints(o)===t);if(r.length>1){let o=-1;return r.forEach(s=>{let c=this.countClosedFields(s);c>o&&(o=c)}),r.filter(s=>this.countClosedFields(s)===o).map(s=>s.name)}return r.map(o=>o.name)}countClosedFields(e){return[15,16,17,18,19,20,25].filter(r=>(e.cricketMap.get(r)||0)>=3).length}switchPlayer(){this.currentPlayerService.switchPlayer(this.playerService.getNextPlayer(this.currentPlayerService._currentPlayer.value),this.isNewRound()),this.setCurrentPlayerAsFristofList()}isNewRound(){return this.currentPlayerService._currentPlayer.value.id==this.lastPlayerId}setCurrentPlayerAsFristofList(){let e=this.playerService._players.shift();this.playerService._players.push(e)}cricketWinCheck(){if(this.playerHasAllClosed()){let e=this.currentPlayerService._currentPlayer.value.remainingPoints+this.currentPlayerService._accumulatedPoints,t=this.getPlayerWithHighestScoreIncludingAccumulatedPoints();if(e>=t)return!0}return!!(this.roundCountService.getRemainingRounds()===0&&this.currentPlayerService.hasNoThrowsRemaining())}getPlayerWithHighestScoreIncludingAccumulatedPoints(){let e=this.playerService._players,t=-1;for(let r=0;r<e.length;r++){let o=this.getEffectivePoints(e[r]);o>t&&(t=o)}return t}getEffectivePoints(e){return e.id===this.currentPlayerService._currentPlayer.value.id?e.remainingPoints+this.currentPlayerService._accumulatedPoints:e.remainingPoints}playerHasAllClosed(){let e=[15,16,17,18,19,20,25],t=this.currentPlayerService._currentPlayer.value.cricketMap;return e.every(r=>(t.get(r)||0)>=3)}static{this.\u0275fac=function(t){return new(t||i)(E(Ne),E(fe),E(pt),E(Bt))}}static{this.\u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();function jw(i,n){i&1&&(u(0,"p"),g(1," Wer zu erst die Endpunktzahl erreicht gewinnt, sonst derjenige der am Ende der Rundenazahl die meisten Punkte hat. Bei exakt der gleichen Punktzahl wird auf 0 zur\xFCckgesetzt."),h())}function zw(i,n){i&1&&(u(0,"p"),g(1," Wer am Ende der Rundenazahl die meisten Punkte hat gewinnt."),h())}function Hw(i,n){i&1&&(u(0,"p"),g(1," Triff das vorgegebene zuf\xE4llige Feld (1-20 Single/Double/Triple, Bull oder Bullseye), um 1 Punkt zu erzielen. Wer am Ende der Rundenanzahl die meisten Punkte hat, gewinnt."),h())}function Uw(i,n){i&1&&(u(0,"p"),g(1," Wer zu erst Null hat gewinnt, sonst derjenige der am Ende der Rundenazahl die wenigsten Punkte hat."),h())}var tg=(()=>{class i{constructor(){this.GameType=M,this.currentplayerService=l(fe)}openTranslation(e){window.open(`https://translate.google.com/?hl=de&sl=de&tl=en&text=${e}&op=translate`)}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=w({type:i,selectors:[["app-dart-info-dialog"]],decls:13,vars:5,consts:[["content",""],["mat-dialog-title",""],[1,"justify-content-end"],["mat-button","",3,"click"],["mat-button","","mat-dialog-close",""]],template:function(t,r){if(t&1){let o=Te();u(0,"h1",1),g(1),h(),u(2,"mat-dialog-content",null,0),W(4,jw,2,0,"p"),W(5,zw,2,0,"p"),W(6,Hw,2,0,"p"),W(7,Uw,2,0,"p"),h(),u(8,"mat-dialog-actions",2)(9,"button",3),S("click",function(){we(o);let s=ht(3);return Ce(r.openTranslation(s.innerText))}),g(10," translate "),h(),u(11,"button",4),g(12,"close"),h()()}t&2&&(f(),ne("How to win ",r.currentplayerService.currentGameMode),f(3),q(r.currentplayerService.currentGameMode===r.GameType.Elimination301?4:-1),f(),q(r.currentplayerService.currentGameMode===r.GameType.Highscore?5:-1),f(),q(r.currentplayerService.currentGameMode===r.GameType.RandomHit?6:-1),f(),q(r.currentplayerService.currentGameMode===r.GameType.Simple501||r.currentplayerService.currentGameMode===r.GameType.DoubleOut501?7:-1))},dependencies:[zi,Se,Ze,wn,_n,vn,yn,bn],encapsulation:2})}}return i})();var Lr=(()=>{class i{constructor(){this.wakeLock=null,this.isFullScreen=k(!1),document.addEventListener("fullscreenchange",()=>{document.fullscreenElement?this.isFullScreen.set(!0):this.isFullScreen.set(!1)})}toggleTabFullScreenModeGame(){document.documentElement.requestFullscreen&&!document.fullscreenElement?document.documentElement.requestFullscreen().then(()=>{this.isFullScreen.set(!0),this.initDisplayAlwaysOnMode().then(()=>{console.log("full screen and display always on mode requested")})}).catch(e=>{console.warn("Fullscreen error: ",e)}):console.warn("Fullscreen API is not supported on this browser.")}toggleTabFullScreenModeMenue(){document.documentElement.requestFullscreen&&!document.fullscreenElement?document.documentElement.requestFullscreen().then(()=>{this.isFullScreen.set(!0),this.initDisplayAlwaysOnMode().then(()=>{console.log("full screen and display always on mode requested")})}):document.exitFullscreen&&document.fullscreenElement?document.exitFullscreen():console.warn("Fullscreen API is not supported or no element is in fullscreen.")}releaseDisplayAlwaysOnMode(){this.wakeLock&&this.wakeLock.release().then(()=>{this.wakeLock=null}).catch(e=>{console.error(`Error releasing wake lock: ${e.message}`)})}initDisplayAlwaysOnMode(){return ce(this,null,function*(){if(!("wakeLock"in navigator)){console.log("Wake Lock API not supported.");return}try{this.wakeLock=yield navigator.wakeLock.request("screen")}catch(e){console.log(`${e.name}, ${e.message}`)}})}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var sg=(()=>{class i{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,t){this._renderer=e,this._elementRef=t}setProperty(e,t){this._renderer.setProperty(this._elementRef.nativeElement,e,t)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(t){return new(t||i)(re(de),re(P))};static \u0275dir=R({type:i})}return i})(),Gw=(()=>{class i extends sg{static \u0275fac=(()=>{let e;return function(r){return(e||(e=bt(i)))(r||i)}})();static \u0275dir=R({type:i,features:[Me]})}return i})(),ci=new b("");var $w={provide:ci,useExisting:en(()=>lg),multi:!0};function Ww(){let i=Ot()?Ot().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var qw=new b(""),lg=(()=>{class i extends sg{_compositionMode;_composing=!1;constructor(e,t,r){super(e,t),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!Ww())}writeValue(e){let t=e??"";this.setProperty("value",t)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(t){return new(t||i)(re(de),re(P),re(qw,8))};static \u0275dir=R({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,r){t&1&&S("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[Pe([$w]),Me]})}return i})();function Zd(i){return i==null||Qd(i)===0}function Qd(i){return i==null?null:Array.isArray(i)||typeof i=="string"?i.length:i instanceof Set?i.size:null}var ra=new b(""),Jd=new b(""),Yw=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,si=class{static min(n){return Xw(n)}static max(n){return Kw(n)}static required(n){return Zw(n)}static requiredTrue(n){return Qw(n)}static email(n){return Jw(n)}static minLength(n){return eC(n)}static maxLength(n){return tC(n)}static pattern(n){return nC(n)}static nullValidator(n){return cg()}static compose(n){return pg(n)}static composeAsync(n){return gg(n)}};function Xw(i){return n=>{if(n.value==null||i==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<i?{min:{min:i,actual:n.value}}:null}}function Kw(i){return n=>{if(n.value==null||i==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>i?{max:{max:i,actual:n.value}}:null}}function Zw(i){return Zd(i.value)?{required:!0}:null}function Qw(i){return i.value===!0?null:{required:!0}}function Jw(i){return Zd(i.value)||Yw.test(i.value)?null:{email:!0}}function eC(i){return n=>{let e=n.value?.length??Qd(n.value);return e===null||e===0?null:e<i?{minlength:{requiredLength:i,actualLength:e}}:null}}function tC(i){return n=>{let e=n.value?.length??Qd(n.value);return e!==null&&e>i?{maxlength:{requiredLength:i,actualLength:e}}:null}}function nC(i){if(!i)return cg;let n,e;return typeof i=="string"?(e="",i.charAt(0)!=="^"&&(e+="^"),e+=i,i.charAt(i.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=i.toString(),n=i),t=>{if(Zd(t.value))return null;let r=t.value;return n.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function cg(i){return null}function dg(i){return i!=null}function ug(i){return bi(i)?st(i):i}function hg(i){let n={};return i.forEach(e=>{n=e!=null?_(_({},n),e):n}),Object.keys(n).length===0?null:n}function mg(i,n){return n.map(e=>e(i))}function iC(i){return!i.validate}function fg(i){return i.map(n=>iC(n)?n:e=>n.validate(e))}function pg(i){if(!i)return null;let n=i.filter(dg);return n.length==0?null:function(e){return hg(mg(e,n))}}function eu(i){return i!=null?pg(fg(i)):null}function gg(i){if(!i)return null;let n=i.filter(dg);return n.length==0?null:function(e){let t=mg(e,n).map(ug);return Da(t).pipe(K(hg))}}function tu(i){return i!=null?gg(fg(i)):null}function ng(i,n){return i===null?[n]:Array.isArray(i)?[...i,n]:[i,n]}function _g(i){return i._rawValidators}function vg(i){return i._rawAsyncValidators}function Kd(i){return i?Array.isArray(i)?i:[i]:[]}function al(i,n){return Array.isArray(i)?i.includes(n):i===n}function ig(i,n){let e=Kd(n);return Kd(i).forEach(r=>{al(e,r)||e.push(r)}),e}function rg(i,n){return Kd(n).filter(e=>!al(i,e))}var sl=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=eu(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=tu(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},Ui=class extends sl{name;get formDirective(){return null}get path(){return null}},Kt=class extends sl{_parent=null;name=null;valueAccessor=null},ll=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var bg=(()=>{class i extends ll{constructor(e){super(e)}static \u0275fac=function(t){return new(t||i)(re(Kt,2))};static \u0275dir=R({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,r){t&2&&A("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[Me]})}return i})(),yg=(()=>{class i extends ll{constructor(e){super(e)}static \u0275fac=function(t){return new(t||i)(re(Ui,10))};static \u0275dir=R({type:i,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(t,r){t&2&&A("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[Me]})}return i})();var Qo="VALID",ol="INVALID",Br="PENDING",Jo="DISABLED",li=class{},cl=class extends li{value;source;constructor(n,e){super(),this.value=n,this.source=e}},ta=class extends li{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},na=class extends li{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},Vr=class extends li{status;source;constructor(n,e){super(),this.status=n,this.source=e}},dl=class extends li{source;constructor(n){super(),this.source=n}},ul=class extends li{source;constructor(n){super(),this.source=n}};function wg(i){return(gl(i)?i.validators:i)||null}function rC(i){return Array.isArray(i)?eu(i):i||null}function Cg(i,n){return(gl(n)?n.asyncValidators:i)||null}function oC(i){return Array.isArray(i)?tu(i):i||null}function gl(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function aC(i,n,e){let t=i.controls;if(!(n?Object.keys(t):t).length)throw new O(1e3,"");if(!t[e])throw new O(1001,"")}function sC(i,n,e){i._forEachChild((t,r)=>{if(e[r]===void 0)throw new O(-1002,"")})}var jr=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return G(this.statusReactive)}set status(n){G(()=>this.statusReactive.set(n))}_status=V(()=>this.statusReactive());statusReactive=k(void 0);get valid(){return this.status===Qo}get invalid(){return this.status===ol}get pending(){return this.status===Br}get disabled(){return this.status===Jo}get enabled(){return this.status!==Jo}errors;get pristine(){return G(this.pristineReactive)}set pristine(n){G(()=>this.pristineReactive.set(n))}_pristine=V(()=>this.pristineReactive());pristineReactive=k(!0);get dirty(){return!this.pristine}get touched(){return G(this.touchedReactive)}set touched(n){G(()=>this.touchedReactive.set(n))}_touched=V(()=>this.touchedReactive());touchedReactive=k(!1);get untouched(){return!this.touched}_events=new y;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(ig(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(ig(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(rg(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(rg(n,this._rawAsyncValidators))}hasValidator(n){return al(this._rawValidators,n)}hasAsyncValidator(n){return al(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let t=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(ie(_({},n),{sourceControl:t})),e&&n.emitEvent!==!1&&this._events.next(new na(!0,t))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:t})}),n.onlySelf||this._parent?._updateTouched(n,t),e&&n.emitEvent!==!1&&this._events.next(new na(!1,t))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let t=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(ie(_({},n),{sourceControl:t})),e&&n.emitEvent!==!1&&this._events.next(new ta(!1,t))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,t),e&&n.emitEvent!==!1&&this._events.next(new ta(!0,t))}markAsPending(n={}){this.status=Br;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Vr(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(ie(_({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Jo,this.errors=null,this._forEachChild(r=>{r.disable(ie(_({},n),{onlySelf:!0}))}),this._updateValue();let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new cl(this.value,t)),this._events.next(new Vr(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(ie(_({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Qo,this._forEachChild(t=>{t.enable(ie(_({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(ie(_({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Qo||this.status===Br)&&this._runAsyncValidator(t,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new cl(this.value,e)),this._events.next(new Vr(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(ie(_({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Jo:Qo}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=Br,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let t=ug(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((t,r)=>t&&t._find(r),this)}getError(n,e){let t=e?this.get(e):this;return t?.errors?t.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,t){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||t)&&this._events.next(new Vr(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,t)}_initObservables(){this.valueChanges=new j,this.statusChanges=new j}_calculateStatus(){return this._allControlsDisabled()?Jo:this.errors?ol:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Br)?Br:this._anyControlsHaveStatus(ol)?ol:Qo}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let t=!this._anyControlsDirty(),r=this.pristine!==t;this.pristine=t,n.onlySelf||this._parent?._updatePristine(n,e),r&&this._events.next(new ta(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new na(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){gl(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=rC(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=oC(this._rawAsyncValidators)}},ia=class extends jr{constructor(n,e,t){super(wg(e),Cg(t,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,t={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,t={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){sC(this,!0,n),Object.keys(n).forEach(t=>{aC(this,!0,t),this.controls[t].setValue(n[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(t=>{let r=this.controls[t];r&&r.patchValue(n[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((t,r)=>{t.reset(n?n[r]:null,ie(_({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new ul(this))}getRawValue(){return this._reduceChildren({},(n,e,t)=>(n[t]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,t)=>t._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let t=this.controls[e];t&&n(t,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,t]of Object.entries(this.controls))if(this.contains(e)&&n(t))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,t,r)=>((t.enabled||this.disabled)&&(e[r]=t.value),e))}_reduceChildren(n,e){let t=n;return this._forEachChild((r,o)=>{t=e(t,r,o)}),t}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var oa=new b("",{factory:()=>_l}),_l="always";function hl(i,n,e=_l){nu(i,n),n.valueAccessor.writeValue(i.value),(i.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(i.disabled),cC(i,n),uC(i,n),dC(i,n),lC(i,n)}function ml(i,n,e=!0){let t=()=>{};n?.valueAccessor?.registerOnChange(t),n?.valueAccessor?.registerOnTouched(t),pl(i,n),i&&(n._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function fl(i,n){i.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function lC(i,n){if(n.valueAccessor.setDisabledState){let e=t=>{n.valueAccessor.setDisabledState(t)};i.registerOnDisabledChange(e),n._registerOnDestroy(()=>{i._unregisterOnDisabledChange(e)})}}function nu(i,n){let e=_g(i);n.validator!==null?i.setValidators(ng(e,n.validator)):typeof e=="function"&&i.setValidators([e]);let t=vg(i);n.asyncValidator!==null?i.setAsyncValidators(ng(t,n.asyncValidator)):typeof t=="function"&&i.setAsyncValidators([t]);let r=()=>i.updateValueAndValidity();fl(n._rawValidators,r),fl(n._rawAsyncValidators,r)}function pl(i,n){let e=!1;if(i!==null){if(n.validator!==null){let r=_g(i);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.validator);o.length!==r.length&&(e=!0,i.setValidators(o))}}if(n.asyncValidator!==null){let r=vg(i);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.asyncValidator);o.length!==r.length&&(e=!0,i.setAsyncValidators(o))}}}let t=()=>{};return fl(n._rawValidators,t),fl(n._rawAsyncValidators,t),e}function cC(i,n){n.valueAccessor.registerOnChange(e=>{i._pendingValue=e,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&Dg(i,n)})}function dC(i,n){n.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&Dg(i,n),i.updateOn!=="submit"&&i.markAsTouched()})}function Dg(i,n){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function uC(i,n){let e=(t,r)=>{n.valueAccessor.writeValue(t),r&&n.viewToModelUpdate(t)};i.registerOnChange(e),n._registerOnDestroy(()=>{i._unregisterOnChange(e)})}function Sg(i,n){i==null,nu(i,n)}function hC(i,n){return pl(i,n)}function mC(i,n){if(!i.hasOwnProperty("model"))return!1;let e=i.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function fC(i){return Object.getPrototypeOf(i.constructor)===Gw}function xg(i,n){i._syncPendingControls(),n.forEach(e=>{let t=e.control;t.updateOn==="submit"&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function pC(i,n){if(!n)return null;Array.isArray(n);let e,t,r;return n.forEach(o=>{o.constructor===lg?e=o:fC(o)?t=o:r=o}),r||t||e||null}function gC(i,n){let e=i.indexOf(n);e>-1&&i.splice(e,1)}var _C={provide:Ui,useExisting:en(()=>Gi)},ea=Promise.resolve(),Gi=(()=>{class i extends Ui{callSetDisabledState;get submitted(){return G(this.submittedReactive)}_submitted=V(()=>this.submittedReactive());submittedReactive=k(!1);_directives=new Set;form;ngSubmit=new j;options;constructor(e,t,r){super(),this.callSetDisabledState=r,this.form=new ia({},eu(e),tu(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){ea.then(()=>{let t=this._findContainer(e.path);e.control=t.registerControl(e.name,e.control),hl(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){ea.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){ea.then(()=>{let t=this._findContainer(e.path),r=new ia({});Sg(r,e),t.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){ea.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,t){ea.then(()=>{this.form.get(e.path).setValue(t)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),xg(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new dl(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(t){return new(t||i)(re(ra,10),re(Jd,10),re(oa,8))};static \u0275dir=R({type:i,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,r){t&1&&S("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Pe([_C]),Me]})}return i})();function og(i,n){let e=i.indexOf(n);e>-1&&i.splice(e,1)}function ag(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var Mg=class extends jr{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,t){super(wg(e),Cg(t,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),gl(e)&&(e.nonNullable||e.initialValueIsDefault)&&(ag(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new ul(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){og(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){og(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){ag(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}},Eg=Mg,vC=i=>i instanceof Mg;var Rg=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=R({type:i,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return i})();var bC=(()=>{class i extends Ui{callSetDisabledState;get submitted(){return G(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=V(()=>this._submittedReactive());_submittedReactive=k(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,t,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(t)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(pl(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let t=this.form.get(e.path);return hl(t,e,this.callSetDisabledState),t.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),t}getControl(e){return this.form.get(e.path)}removeControl(e){ml(e.control||null,e,!1),gC(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,t){this.form.get(e.path).setValue(t)}onReset(){this.resetForm()}resetForm(e=void 0,t={}){this.form.reset(e,t),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,xg(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new dl(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let t=e.control,r=this.form.get(e.path);t!==r&&(ml(t||null,e),vC(r)&&(hl(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let t=this.form.get(e.path);Sg(t,e),t.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let t=this.form?.get(e.path);t&&hC(t,e)&&t.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){nu(this.form,this),this._oldForm&&pl(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(t){return new(t||i)(re(ra,10),re(Jd,10),re(oa,8))};static \u0275dir=R({type:i,features:[Me,Le]})}return i})();var Ig=new b(""),yC={provide:Kt,useExisting:en(()=>iu)},iu=(()=>{class i extends Kt{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(e){}model;update=new j;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,t,r,o,a){super(),this._ngModelWarningConfig=o,this.callSetDisabledState=a,this._setValidators(e),this._setAsyncValidators(t),this.valueAccessor=pC(this,r)}ngOnChanges(e){if(this._isControlChanged(e)){let t=e.form.previousValue;t&&ml(t,this,!1),hl(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}mC(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&ml(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return e.hasOwnProperty("form")}static \u0275fac=function(t){return new(t||i)(re(ra,10),re(Jd,10),re(ci,10),re(Ig,8),re(oa,8))};static \u0275dir=R({type:i,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[Pe([yC]),Me,Le]})}return i})();var wC={provide:Ui,useExisting:en(()=>aa)},aa=(()=>{class i extends bC{form=null;ngSubmit=new j;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=bt(i)))(r||i)}})();static \u0275dir=R({type:i,selectors:[["","formGroup",""]],hostBindings:function(t,r){t&1&&S("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Pe([wC]),Me]})}return i})();var Tg=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({})}return i})();var Ag=(()=>{class i{static withConfig(e){return{ngModule:i,providers:[{provide:oa,useValue:e.callSetDisabledState??_l}]}}static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({imports:[Tg]})}return i})(),vl=(()=>{class i{static withConfig(e){return{ngModule:i,providers:[{provide:Ig,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:oa,useValue:e.callSetDisabledState??_l}]}}static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({imports:[Tg]})}return i})();var CC=["switch"],DC=["*"];function SC(i,n){i&1&&(u(0,"span",11),Zi(),u(1,"svg",13),Y(2,"path",14),h(),u(3,"svg",15),Y(4,"path",16),h()())}var xC=new b("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),bl=class{source;checked;constructor(n,e){this.source=n,this.checked=e}},ru=(()=>{class i{_elementRef=l(P);_focusMonitor=l(Ct);_changeDetectorRef=l(oe);defaults=l(xC);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new bl(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=Ee();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new j;toggleChange=new j;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){l(Fe).load(ln);let e=l(new nn("tabindex"),{optional:!0}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||"accent",this.id=this._uniqueId=l(ve).getId("mat-mdc-slide-toggle-"),this.hideIcon=t.hideIcon??!1,this.disabledInteractive=t.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new bl(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=w({type:i,selectors:[["mat-slide-toggle"]],viewQuery:function(t,r){if(t&1&&Xe(CC,5),t&2){let o;ee(o=te())&&(r._switchElement=o.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(t,r){t&2&&(Rt("id",r.id),Z("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),it(r.color?"mat-"+r.color:""),A("mat-mdc-slide-toggle-focused",r._focused)("mat-mdc-slide-toggle-checked",r.checked)("_mat-animation-noopable",r._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",F],color:"color",disabled:[2,"disabled","disabled",F],disableRipple:[2,"disableRipple","disableRipple",F],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:It(e)],checked:[2,"checked","checked",F],hideIcon:[2,"hideIcon","hideIcon",F],disabledInteractive:[2,"disabledInteractive","disabledInteractive",F]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[Pe([{provide:ci,useExisting:en(()=>i),multi:!0},{provide:ra,useExisting:i,multi:!0}]),Le],ngContentSelectors:DC,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(t,r){if(t&1&&(De(),u(0,"div",1)(1,"button",2,0),S("click",function(){return r._handleClick()}),Y(3,"div",3)(4,"span",4),u(5,"span",5)(6,"span",6)(7,"span",7),Y(8,"span",8),h(),u(9,"span",9),Y(10,"span",10),h(),W(11,SC,5,0,"span",11),h()()(),u(12,"label",12),S("click",function(a){return a.stopPropagation()}),Q(13),h()()),t&2){let o=ht(2);D("labelPosition",r.labelPosition),f(),A("mdc-switch--selected",r.checked)("mdc-switch--unselected",!r.checked)("mdc-switch--checked",r.checked)("mdc-switch--disabled",r.disabled)("mat-mdc-slide-toggle-disabled-interactive",r.disabledInteractive),D("tabIndex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex)("disabled",r.disabled&&!r.disabledInteractive),Z("id",r.buttonId)("name",r.name)("aria-label",r.ariaLabel)("aria-labelledby",r._getAriaLabelledBy())("aria-describedby",r.ariaDescribedby)("aria-required",r.required||null)("aria-checked",r.checked)("aria-disabled",r.disabled&&r.disabledInteractive?"true":null),f(9),D("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)("matRippleCentered",!0),f(),q(r.hideIcon?-1:11),f(),D("for",r.buttonId),Z("id",r._labelId)}},dependencies:[Je,Rp],styles:[`.mdc-switch {
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
`],encapsulation:2,changeDetection:0})}return i})(),Pg=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({imports:[ru,se]})}return i})();var EC=["tooltip"],RC=20;var IC=new b("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let i=l(H);return()=>Pn(i,{scrollThrottle:RC})}}),TC=new b("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var Og="tooltip-panel",AC={passive:!0},kC=8,PC=8,OC=24,FC=200,ou=(()=>{class i{_elementRef=l(P);_ngZone=l(z);_platform=l(me);_ariaDescriber=l(Hc);_focusMonitor=l(Ct);_dir=l($e);_injector=l(H);_viewContainerRef=l(lt);_mediaMatcher=l(lr);_document=l(N);_renderer=l(de);_animationsDisabled=Ee();_defaultOptions=l(TC,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=Fg;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=On(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=On(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=Ft(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=Ft(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new y;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=kC}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(ue(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let r=this._createOverlay(t);this._detach(),this._portal=this._portal||new $t(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=r.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(ue(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let a=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&a._origin instanceof P)return this._overlayRef;this._detach()}let t=this._injector.get(sn).getAncestorScrollContainers(this._elementRef),r=`${this._cssClassPrefix}-${Og}`,o=Fi(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation("global");return o.positionChanges.pipe(ue(this._destroyed)).subscribe(a=>{this._updateCurrentPositionClass(a.connectionPair),this._tooltipInstance&&a.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=Yt(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,r]:r,scrollStrategy:this._injector.get(IC)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(ue(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(ue(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(ue(this._destroyed)).subscribe(a=>{a.preventDefault(),a.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(ue(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,r=this._getOrigin(),o=this._getOverlayPosition();t.withPositions([this._addOffset(_(_({},r.main),o.main)),this._addOffset(_(_({},r.fallback),o.fallback))])}_addOffset(e){let t=PC,r=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-t:e.originY==="bottom"?e.offsetY=t:e.originX==="start"?e.offsetX=r?-t:t:e.originX==="end"&&(e.offsetX=r?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",t=this.position,r;t=="above"||t=="below"?r={originX:"center",originY:t=="above"?"top":"bottom"}:t=="before"||t=="left"&&e||t=="right"&&!e?r={originX:"start",originY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(r={originX:"end",originY:"center"});let{x:o,y:a}=this._invertPosition(r.originX,r.originY);return{main:r,fallback:{originX:o,originY:a}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",t=this.position,r;t=="above"?r={overlayX:"center",overlayY:"bottom"}:t=="below"?r={overlayX:"center",overlayY:"top"}:t=="before"||t=="left"&&e||t=="right"&&!e?r={overlayX:"end",overlayY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(r={overlayX:"start",overlayY:"center"});let{x:o,y:a}=this._invertPosition(r.overlayX,r.overlayY);return{main:r,fallback:{overlayX:o,overlayY:a}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),ze(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position==="above"||this.position==="below"?t==="top"?t="bottom":t==="bottom"&&(t="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:r,originY:o}=e,a;if(t==="center"?this._dir&&this._dir.value==="rtl"?a=r==="end"?"left":"right":a=r==="start"?"left":"right":a=t==="bottom"&&o==="top"?"above":"below",a!==this._currentPosition){let s=this._overlayRef;if(s){let c=`${this._cssClassPrefix}-${Og}-`;s.removePanelClass(c+this._currentPosition),s.addPanelClass(c+a)}this._currentPosition=a}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let t=e.targetTouches?.[0],r=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,r)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),r=this._elementRef.nativeElement;t!==r&&!r.contains(t)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,AC))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let t=this._elementRef.nativeElement,r=t.style;(e==="on"||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA")&&(r.userSelect=r.msUserSelect=r.webkitUserSelect=r.MozUserSelect="none"),(e==="on"||!t.draggable)&&(r.webkitUserDrag="none"),r.touchAction="none",r.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||ze({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!Ke(e):!0;static \u0275fac=function(t){return new(t||i)};static \u0275dir=R({type:i,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(t,r){t&2&&A("mat-mdc-tooltip-disabled",r.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return i})(),Fg=(()=>{class i{_changeDetectorRef=l(oe);_elementRef=l(P);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=Ee();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new y;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>OC&&e.width>=FC}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,r=this._showAnimation,o=this._hideAnimation;if(t.classList.remove(e?o:r),t.classList.add(e?r:o),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let a=getComputedStyle(t);(a.getPropertyValue("animation-duration")==="0s"||a.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=w({type:i,selectors:[["mat-tooltip-component"]],viewQuery:function(t,r){if(t&1&&Xe(EC,7),t&2){let o;ee(o=te())&&(r._tooltip=o.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(t,r){t&1&&S("mouseleave",function(a){return r._handleMouseLeave(a)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(t,r){t&1&&(Be(0,"div",1,0),Pa("animationend",function(a){return r._handleAnimationEnd(a)}),Be(2,"div",2),g(3),qe()()),t&2&&(it(r.tooltipClass),A("mdc-tooltip--multiline",r._isMultiline),f(3),he(r.message))},styles:[`.mat-mdc-tooltip {
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
`],encapsulation:2,changeDetection:0})}return i})();var Ng=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({imports:[Ri,Lt,se,an]})}return i})();var LC=i=>({"font-size":i,color:"#3d6065"});function BC(i,n){if(i&1){let e=Te();u(0,"button",10)(1,"mat-icon"),g(2,"arrow_back"),h(),g(3," Main Menu "),h(),u(4,"button",4),S("click",function(){we(e);let r=T();return Ce(r.undoLastAction())}),u(5,"mat-icon"),g(6,"undo"),h(),g(7," r\xFCckg\xE4ngig "),h()}}function VC(i,n){i&1&&(u(0,"mat-icon"),g(1,"close_fullscreen"),h())}function jC(i,n){i&1&&(u(0,"mat-icon"),g(1,"fullscreen"),h())}function zC(i,n){if(i&1){let e=Te();u(0,"span",11),g(1),h(),u(2,"button",12),S("click",function(){we(e);let r=T();return Ce(r.openGameInstructions())}),u(3,"span",13),g(4,"question_mark"),h()()}if(i&2){let e=T();f(),he(e.getCurrentGameModeName()),f(),D("matRippleColor",e.customRipple.rippleColor)("matRippleUnbounded",!0)("matRippleRadius",e.customRipple.rippleRadius)}}function HC(i,n){i&1&&(u(0,"mat-icon",7),g(1,"volume_up"),h()),i&2&&D("matTooltip","Spielsound ist aktiv")}var Lg=(()=>{class i{constructor(){this.installBtnHidden=!0,this.router=l(rt),this.pwa=l(vs),this.appVersion=ao.appVersion,this.soundToggleService=l(rl),this.cricketService=l(Vt),this.dartService=l(Mt),this.fullscreenService=l(Lr),this.currentPlayerService=l(fe),this.customRipple=Dn,this.dialog=l(pt)}ngOnInit(){this.installBtnHidden=!0,this.pwa.canInstall$.subscribe(e=>{this.installBtnHidden=!e}),this.fullscreenService.initDisplayAlwaysOnMode().then(()=>{console.info("wake lock requested")}),this.checkWakelockOnNavigation()}ngOnDestroy(){this.fullscreenService.releaseDisplayAlwaysOnMode()}checkWakelockOnNavigation(){this.router.events.pipe(pe(e=>e instanceof xt||e instanceof hn||e instanceof St||e instanceof Bn),K(()=>ce(this,null,function*(){console.error("navigate"),this.fullscreenService.initDisplayAlwaysOnMode().then(()=>{console.info("wake lock requested")})})))}openGameInstructions(){this.cricketService._gameType!==""?this.dialog.open(Lp):this.dialog.open(tg)}undoLastAction(){this.currentPlayerService.undoLastPlayerActions()}getCurrentGameModeName(){if(this.cricketService._gameType!=="")return"Cricket";let t=this.dartService._gameType;return t===M.Simple501?"501":t===M.DoubleOut501?"501 (DO)":t===M.Elimination301?"Elimination":t===M.Highscore?"Highscore":t===M.RandomHit?"Random Hit":""}setSoundMode(e){this.soundToggleService.isSoundOn.next(e)}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=w({type:i,selectors:[["app-app-toolbar"]],decls:25,vars:10,consts:[["menueItmes","matMenu"],["soundtoggle",""],[1,"d-flex","justify-content-between"],["mat-icon-button","","color","accent",1,"font-size-20",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"],["mat-menu-item",""],[3,"change","checked"],["color","accent",3,"matTooltip"],[1,"d-flex","flex-column"],[1,"d-flex","justify-content-end",3,"ngStyle"],["mat-menu-item","","routerLink",""],[1,"game-mode-display","text-accent","fw-bold","me-2"],["mat-mini-fab","","matRipple","",1,"ms-3","question-scale",3,"click","matRippleColor","matRippleUnbounded","matRippleRadius"],[1,"mt-2","material-symbols-outlined"]],template:function(t,r){if(t&1){let o=Te();u(0,"mat-toolbar",2)(1,"button",3)(2,"mat-icon"),g(3,"menu"),h()(),u(4,"mat-menu",null,0),W(6,BC,8,0),u(7,"button",4),S("click",function(){return r.fullscreenService.toggleTabFullScreenModeMenue()}),W(8,VC,2,0,"mat-icon")(9,jC,2,0,"mat-icon"),g(10," Fullscreen "),h(),u(11,"p",5)(12,"mat-slide-toggle",6,1),S("change",function(){we(o);let s=ht(13);return Ce(r.setSoundMode(s.checked))}),g(14,"sounds "),h()()(),u(15,"div"),W(16,zC,5,4),W(17,HC,2,1,"mat-icon",7),h(),u(18,"div",8)(19,"code"),g(20,"DartBoard "),h(),u(21,"div",9)(22,"mat-icon"),g(23,"linear_scale"),h(),g(24),h()()()}if(t&2){let o=ht(5);f(),D("matMenuTriggerFor",o),f(5),q(r.dartService._gameType!==""||r.cricketService._gameType!==""?6:-1),f(2),q(r.fullscreenService.isFullScreen()?8:9),f(4),D("checked",r.soundToggleService.isSoundOn.value),f(4),q(r.dartService._gameType!==""||r.cricketService._gameType!==""?16:-1),f(),q(r.soundToggleService.isSoundOn.value?17:-1),f(4),D("ngStyle",Ih(8,LC,"50%")),f(3),ne(" v: ",r.appVersion," ")}},dependencies:[gp,pp,gn,pn,fc,vp,Pr,Yo,_p,Se,cn,Fn,Ar,ct,Je,Pg,ru,Ng,ou,Ae],styles:[".question-scale[_ngcontent-%COMP%]{transform:scale(.6)}"]})}}return i})();var Bg=(()=>{class i{constructor(){this.title="dart-board",this.pwa=l(vs)}beforeUnloadHandler(e){navigator.userActivation.hasBeenActive&&(e.preventDefault(),e.returnValue=!0)}ngOnInit(){this.pwa.askToInstall()}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=w({type:i,selectors:[["app-root"]],hostBindings:function(t,r){t&1&&S("beforeunload",function(a){return r.beforeUnloadHandler(a)},tn)},decls:2,vars:0,template:function(t,r){t&1&&Y(0,"app-app-toolbar")(1,"router-outlet")},dependencies:[Lg,Uo],encapsulation:2})}}return i})();var yl=(()=>{class i{constructor(){this.currentPlayerService=l(fe),this.DARTBOARD_VALUES=[20,1,18,4,13,6,10,15,2,17,3,19,7,16,8,11,14,9,12,5]}getNextThrow(e,t,r,o){return t===M.Cricket?this.getCricketThrow(e,r,o):t===M.RandomHit?this.getRandomHitThrow(e,r):this.getPointsThrow(e,r,o,t)}getRandomHitThrow(e,t){let r=this.currentPlayerService._randomHitTarget(),o=20,a=1;return r&&(o=r.value,a=r.multiplier),this.calculateThrowWithSpread(o,a,e,t)}getPointsThrow(e,t,r,o){let a=t.remainingPoints,s=20,c=3;if(o===M.Highscore)s=20,c=3;else if(o===M.DoubleOut501||o===M.Simple501){a<=60&&(o===M.DoubleOut501?a%2===0&&a<=40?(s=a/2,c=2):a===50?(s=25,c=2):a>40&&a<=60?(s=a-40,c=1):a<40?(s=1,c=1):(s=20,c=1):a<=20?(s=a,c=1):a===25?(s=25,c=1):a===50?(s=25,c=2):(s=20,c=1));let d=s*c;o===M.DoubleOut501?a-d<2&&a-d!==0&&(s=1,c=1):a-d<0&&(s=1,c=1)}else if(o===M.Elimination301){let m=a,p=301-m,x=r.filter(J=>J.id!==t.id&&J.remainingPoints>0),$=-1,X=-1;for(let J of x){let I=J.remainingPoints-m;if(I>0&&I<=60){if(I<=20){$=I,X=1;break}if(I%3===0&&I/3<=20){$=I/3,X=3;break}if(I%2===0&&I/2<=20){$=I/2,X=2;break}if(I===25){$=25,X=1;break}if(I===50){$=25,X=2;break}}}$!==-1&&(e===ot.Hard||e===ot.Medium&&Math.random()<.5)?(s=$,c=X):p<=60?p<=20?(s=Math.max(1,p),c=1):p%3===0&&p/3<=20?(s=p/3,c=3):p%2===0&&p/2<=20?(s=p/2,c=2):p===25?(s=25,c=1):p===50?(s=25,c=2):(s=1,c=1):(s=20,c=3)}return this.calculateThrowWithSpread(s,c,e,t)}calculateThrowWithSpread(e,t,r,o){let a=40;r===ot.Medium&&(a=20),r===ot.Hard&&(a=8);let c=.85+o.id*12345%1e3/1e3*.3,d=a*c;if(o.last3History&&o.last3History.length>0){let Et=o.last3History.reduce((_t,Ul)=>_t+Ul,0)/o.last3History.length;Et<20?d*=1.2:Et>40&&(d*=.9)}let m=.9+Math.random()*.2;d*=m;let p,x=0;if(e===0)p=200;else if(e===25)p=t===2?6:12;else{let Et=2*Math.PI/20,_t=this.DARTBOARD_VALUES.indexOf(e);x=Math.PI/2-_t*Et,t===3?p=105:t===2?p=165:p=135}let $=(Math.random()-.5)*4,X=(Math.random()-.5)*4,J=Math.random(),I=Math.random(),le=d*Math.sqrt(-2*Math.log(J)),ye=p*Math.cos(x)+le*Math.cos(2*Math.PI*I)+$,Oe=p*Math.sin(x)+le*Math.sin(2*Math.PI*I)+X,ke=Math.sqrt(ye*ye+Oe*Oe),_e=Math.atan2(Oe,ye);return this.mapCoordinatesToThrow(ke,_e)}mapCoordinatesToThrow(e,t){if(e<6.35)return{value:25,multiplier:2};if(e<15.9)return{value:25,multiplier:1};if(e>170)return{value:0,multiplier:1};let r=(Math.PI/2+Math.PI/20-t)%(2*Math.PI);r<0&&(r+=2*Math.PI);let o=2*Math.PI/20,a=Math.floor(r/o)%20;a<0&&(a+=20);let s=this.DARTBOARD_VALUES[a],c=1;return e>=99&&e<=107?c=3:e>=162&&e<=170&&(c=2),{value:s,multiplier:c}}getCricketThrow(e,t,r){let o=[20,19,18,17,16,15,25],a=t.cricketMap,s=o.filter(m=>(a.get(m)||0)<3),c,d;if(s.length>0)c=s[0];else{let m=o.filter(p=>r.some(x=>x.id!==t.id&&(x.cricketMap.get(p)||0)<3));m.length>0?c=m[0]:c=20}return c!==25?(d=3,(e===ot.Easy||e===ot.Medium&&Math.random()<.5)&&(d=1)):d=e===ot.Hard?2:1,this.calculateThrowWithSpread(c,d,e,t)}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var Vg=(()=>{class i{constructor(){this.startTime=0,this.elapsedTimeSignal=k("00:00:00")}startTimer(){this.startTime=Date.now(),this.timerInterval=setInterval(()=>{let t=Date.now()-this.startTime;this.elapsedTimeSignal.set(this.formatTime(t))},1e3)}stopTimer(){this.timerInterval&&clearInterval(this.timerInterval)}resetTimer(){this.stopTimer(),this.startTimer()}formatTime(e){let t=Math.floor(e/1e3),r=Math.floor(t/3600),o=Math.floor(t%3600/60),a=t%60;return[r,o,a].map(s=>s<10?"0"+s:s).join(":")}ngOnDestroy(){this.stopTimer()}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();function UC(i,n){i&1&&(u(0,"mat-icon",6),g(1,"smart_toy"),h())}function GC(i,n){if(i&1&&(u(0,"div",9)(1,"div",21)(2,"div",22),g(3,"ZIEL"),h(),u(4,"div",23),g(5),h()()()),i&2){let e=T();f(5),he(e.formatTarget(e.currentPlayerService._randomHitTarget()))}}var wl=(()=>{class i{constructor(){this.playerService=l(Ne),this.GameType=M,this.formatTarget=Qp,this.currentPlayerService=l(fe),this.roundCountService=l(Bt),this.gameTimerService=l(Vg)}ngOnInit(){this.gameTimerService.startTimer()}ngOnDestroy(){this.gameTimerService.stopTimer()}getProgressColor(){switch(this.currentPlayerService._remainingThrows){case 3:return"primary";case 2:return"accent";case 1:return"warn";default:return}}getRoundCount(){return this.roundCountService.roundCount<=this.roundCountService.MAX_ROUND_COUNT?this.roundCountService.roundCount:this.roundCountService.MAX_ROUND_COUNT}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=w({type:i,selectors:[["app-current-player-progress"]],decls:34,vars:15,consts:[[1,"progress-container","m-1","px-1","py-1","shadow","rounded"],[1,"section","player-info","rounded"],[1,"info-card","h-100","w-100",3,"click"],[1,"player-name-score-row"],[1,"player-name"],[1,"text-wrap","text-truncate"],[1,"ai-icon"],[1,"player-score","text-bg-warning","rounded"],[1,"player-avg","small"],[1,"section","target-info"],[1,"section","dart-status"],[1,"status-content"],[1,"dart-throw-indicator"],["mat-mini-fab","",1,"no-pointer","mat-mini-fab",3,"color"],["mat-mini-fab","",1,"no-pointer",3,"color"],[1,"d-flex","flex-row"],[1,"round-info","small","text-nowrap"],[1,"round-label"],[1,"round-value"],[1,"timer-container"],[1,"game-timer"],[1,"target-card"],[1,"target-label"],[1,"target-value"]],template:function(t,r){t&1&&(u(0,"div",0)(1,"div",1)(2,"mat-card",2),S("click",function(){return r.currentPlayerService.showHistory(r.currentPlayerService._currentPlayer.value)}),u(3,"div",3)(4,"div",4)(5,"b",5),g(6),W(7,UC,2,0,"mat-icon",6),h()(),u(8,"div",7),g(9),h()(),u(10,"b",8),g(11),h()()(),W(12,GC,6,1,"div",9),u(13,"div",10)(14,"div",11)(15,"div",12)(16,"button",13)(17,"span"),g(18),h()(),u(19,"button",14)(20,"span"),g(21),h()(),u(22,"button",14)(23,"span"),g(24),h()()(),u(25,"div",15)(26,"div",16)(27,"span",17),g(28,"Runde"),h(),u(29,"span",18),g(30),h()(),u(31,"div",19)(32,"span",20),g(33),h()()()()()()),t&2&&(f(6),ne(" ",r.currentPlayerService._currentPlayer.value.name||"Spieler"," "),f(),q(r.currentPlayerService._currentPlayer.value.isAI?7:-1),f(2),ne("",r.currentPlayerService._remainingPointsToDisplay()," "),f(2),ne("\u2300 ",r.currentPlayerService._currentPlayer.value.average),f(),q(r.currentPlayerService.currentGameMode===r.GameType.RandomHit&&r.currentPlayerService._randomHitTarget()?12:-1),f(3),D("@throwAdded",r.currentPlayerService.last3HisSignal().length),f(),D("color",r.currentPlayerService.last3HisSignal().length>=1?r.getProgressColor():"gray"),f(2),he(r.currentPlayerService.last3HisSignal()[0]??"\u27B6"),f(),D("color",r.currentPlayerService.last3HisSignal().length>=2?r.getProgressColor():"gray"),f(2),he(r.currentPlayerService.last3HisSignal()[1]??"\u27B6"),f(),D("color",r.currentPlayerService.last3HisSignal().length>=3?r.getProgressColor():"gray"),f(2),he(r.currentPlayerService.last3HisSignal()[2]??"\u27B6"),f(6),Rh("",r.getRoundCount()," / ",r.roundCountService.MAX_ROUND_COUNT),f(3),he(r.gameTimerService.elapsedTimeSignal()))},dependencies:[Ae,ai,il,gn,pn,Se,cn],styles:[".progress-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;height:15vh;min-height:80px;max-height:20vh;background-color:#0003}@media screen and (orientation:landscape)and (max-height:500px){.progress-container[_ngcontent-%COMP%]{height:25vh;min-height:100px;max-height:none}}.progress-container[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:.5rem}.progress-container[_ngcontent-%COMP%]   .player-info[_ngcontent-%COMP%]{cursor:pointer;text-align:center;background-color:green!important;flex:1;max-width:50%;min-width:40%}.progress-container[_ngcontent-%COMP%]   .player-info[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;background-color:#ffffff0d}.progress-container[_ngcontent-%COMP%]   .player-info[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .player-name-score-row[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;gap:.5rem;width:100%;padding:0 .5rem}.progress-container[_ngcontent-%COMP%]   .player-info[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .player-name-score-row[_ngcontent-%COMP%]   .player-name[_ngcontent-%COMP%]{font-size:1.4rem;opacity:.8;display:flex;align-items:center;overflow:hidden;font-weight:700}.progress-container[_ngcontent-%COMP%]   .player-info[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .player-name-score-row[_ngcontent-%COMP%]   .player-name[_ngcontent-%COMP%]   .ai-icon[_ngcontent-%COMP%]{font-size:1.2rem;width:1.2rem;height:1.2rem;margin-right:4px}.progress-container[_ngcontent-%COMP%]   .player-info[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .player-name-score-row[_ngcontent-%COMP%]   .player-score[_ngcontent-%COMP%]{font-size:1.6rem;font-weight:700;line-height:1.2;padding-left:12px;padding-right:12px}.progress-container[_ngcontent-%COMP%]   .target-info[_ngcontent-%COMP%]{flex:.8;max-width:95px;display:flex;justify-content:center;align-items:center;padding:0 .25rem}.progress-container[_ngcontent-%COMP%]   .target-info[_ngcontent-%COMP%]   .target-card[_ngcontent-%COMP%]{width:100%;max-width:90px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#ff980040,#ff572240);border:2px solid #ff9800;border-radius:8px;padding:4px 6px;box-shadow:0 0 10px #ff980066;box-sizing:border-box}.progress-container[_ngcontent-%COMP%]   .target-info[_ngcontent-%COMP%]   .target-card[_ngcontent-%COMP%]   .target-label[_ngcontent-%COMP%]{font-size:.7rem;font-weight:700;letter-spacing:1px;color:#ffb74d;text-transform:uppercase}.progress-container[_ngcontent-%COMP%]   .target-info[_ngcontent-%COMP%]   .target-card[_ngcontent-%COMP%]   .target-value[_ngcontent-%COMP%]{font-size:1.05rem;font-weight:900;color:#fff;text-shadow:0 0 8px rgba(255,152,0,.8);white-space:nowrap;text-align:center}.progress-container[_ngcontent-%COMP%]   .dart-status[_ngcontent-%COMP%]{flex:1;padding:2px 0}.progress-container[_ngcontent-%COMP%]   .dart-status[_ngcontent-%COMP%]   .status-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:space-evenly;width:100%;height:100%}.progress-container[_ngcontent-%COMP%]   .dart-status[_ngcontent-%COMP%]   .dart-throw-indicator[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:4px;align-items:center;justify-content:center}.progress-container[_ngcontent-%COMP%]   .dart-status[_ngcontent-%COMP%]   .dart-throw-indicator[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{transform:scale(.75);margin:0}.progress-container[_ngcontent-%COMP%]   .dart-status[_ngcontent-%COMP%]   .round-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;font-weight:700;color:#80d8ff;line-height:1.1}.progress-container[_ngcontent-%COMP%]   .dart-status[_ngcontent-%COMP%]   .round-info[_ngcontent-%COMP%]   .round-label[_ngcontent-%COMP%]{font-size:.7rem;opacity:.7}.progress-container[_ngcontent-%COMP%]   .dart-status[_ngcontent-%COMP%]   .round-info[_ngcontent-%COMP%]   .round-value[_ngcontent-%COMP%]{font-size:.7rem}.progress-container[_ngcontent-%COMP%]   .timer-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;margin:.5rem;gap:4%}.progress-container[_ngcontent-%COMP%]   .timer-container[_ngcontent-%COMP%]   .game-timer[_ngcontent-%COMP%]{font-size:.8rem;font-family:monospace;color:#ffd740}.progress-container[_ngcontent-%COMP%]   .timer-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{transform:scale(.8);width:32px;height:32px;line-height:32px}.pow-container[_ngcontent-%COMP%]{display:none}"],data:{animation:[oc("throwAdded",[lc(":increment",[ac("2000ms ease-in-out",sc([oo({transform:"scale(1)",offset:0}),oo({transform:"scale(1.75)",offset:.5}),oo({transform:"scale(1)",offset:1})]))])])]}})}}return i})();var zr=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({imports:[Ri,se]})}return i})();var di=(()=>{class i{constructor(e,t){this.el=e,this.renderer=t,this.morphTimer=null,this.originalTransform="",this.shapeMorphClick=new j,this.currentPlayerService=l(fe),this.renderer.setStyle(this.el.nativeElement,"transition","transform 0.1s ease-out")}vibrateOnClick(e){"vibrate"in navigator&&navigator.vibrate(e)}playPressAnimation(){this.morphTimer&&(clearTimeout(this.morphTimer),this.renderer.setStyle(this.el.nativeElement,"transform",this.originalTransform)),this.originalTransform=this.el.nativeElement.style.transform||"",this.renderer.setStyle(this.el.nativeElement,"transform","translate(2px, 2px) scale(0.98)"),this.morphTimer=setTimeout(()=>{this.renderer.setStyle(this.el.nativeElement,"transform",this.originalTransform),this.morphTimer=null},150)}onGlobalContextMenu(e){e.preventDefault(),e.stopPropagation()}onClick(e){e.isTrusted&&(e.preventDefault(),e.stopImmediatePropagation()),this.vibrateOnClick(50),this.playPressAnimation(),this.currentPlayerService.setLastClickedButton(this.el.nativeElement),this.shapeMorphClick.emit()}static{this.\u0275fac=function(t){return new(t||i)(re(P),re(de))}}static{this.\u0275dir=R({type:i,selectors:[["","appShapeMorph",""]],hostBindings:function(t,r){t&1&&S("contextmenu",function(a){return r.onGlobalContextMenu(a)})("click",function(a){return r.onClick(a)})},outputs:{shapeMorphClick:"shapeMorphClick"}})}}return i})();var ui=(()=>{class i{constructor(){this.multiplier=k(1)}setMultiplier(e){this.multiplier.set(e)}getMultiplier(){return this.multiplier()}reset(){this.multiplier.set(1)}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var Cl=(()=>{class i{constructor(){this.multiplierService=l(ui),this.customRipple=Dn,this.bullClick=new j,this.bullseyeClick=new j,this.disabled=!1}scoreBull(){this.bullClick.emit()}scoreBullsEye(){this.bullseyeClick.emit()}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=w({type:i,selectors:[["app-bull-buttons"]],inputs:{disabled:"disabled"},outputs:{bullClick:"bullClick",bullseyeClick:"bullseyeClick"},decls:5,vars:8,consts:[[1,"d-flex","justify-content-center","pb-4","pe-4","gap-5"],["id","dart-btn-bull","mat-flat-button","","matRipple","","appShapeMorph","",1,"m-auto","raised-button-3d-rect","me-2",3,"shapeMorphClick","disabled","color","matRippleColor","matRippleRadius"],["id","dart-btn-bullseye","mat-flat-button","","matRipple","","appShapeMorph","",1,"m-auto","raised-button-3d-rect",3,"shapeMorphClick","disabled","color","matRippleColor","matRippleRadius"]],template:function(t,r){t&1&&(u(0,"div",0)(1,"button",1),S("shapeMorphClick",function(){return r.scoreBull()}),g(2," Bull "),h(),u(3,"button",2),S("shapeMorphClick",function(){return r.scoreBullsEye()}),g(4," BullsEye "),h()()),t&2&&(f(),D("disabled",r.disabled)("color","primary")("matRippleColor",r.customRipple.rippleColor)("matRippleRadius",r.customRipple.rippleRadius),f(2),D("disabled",r.disabled)("color","accent")("matRippleColor",r.customRipple.rippleColor)("matRippleRadius",r.customRipple.rippleRadius))},dependencies:[Se,Ze,ct,Je,di],encapsulation:2})}}return i})();function $C(i,n){if(i&1){let e=Te();u(0,"div",11)(1,"button",12),g(2),h(),u(3,"button",13),S("shapeMorphClick",function(){let r=we(e).$implicit,o=T(2);return Ce(o.justScore(r))}),g(4),h()()}if(i&2){let e=n.$implicit,t=T(2);f(),D("disabled",t.isClosed(e)())("color","accent"),f(),ne("",t.getBadgeCountValue(e)()," "),f(),it(yi("mt-4 raised-button-3d ",t.isScorable(e)()?"":t.border)),D("id",yi("cricket-btn-",e))("disabled",t.isClosed(e)())("color",t.buttonColor)("matRippleColor",t.customRipple.rippleColor)("matRippleUnbounded",!0)("matRippleRadius",t.customRipple.rippleRadius),f(),ne(" ",e," ")}}function WC(i,n){if(i&1&&(u(0,"div",9),ge(1,$C,5,14,"div",10),h()),i&2){let e=n.$implicit;f(),D("ngForOf",e)}}var jg=(()=>{class i{constructor(){this.customRipple=Dn,this.buttonGroups=[[15,16],[17,18],[19,20]],this.border="border border-5 border-warning",this.animationService=l(Cn),this.multiplierService=l(ui),this.cdr=l(oe),this.cricketService=l(Vt),this.currentPlayerService=l(fe),this.playerService=l(Ne),this.screenOrientation=window.screen.orientation.type}get buttonColor(){let e=this.multiplierService.multiplier();return e===2?"accent":e===3?"warn":"primary"}onResize(){this.updateOrientation(),this.cdr.detectChanges()}ngOnInit(){this.updateOrientation()}scoreBull(){this.cricketService.scoreCricketWithMultiplier({value:25,multiplier:1}),this.animationService.playAnimationSound("assets/sounds/cow-moo-sound-effect.mp3"),this.cdr.detectChanges()}scoreBullsEye(){this.cricketService.scoreCricketWithMultiplier({value:25,multiplier:2}),this.animationService.showExplosion("Bullseye","red","assets/sounds/oh-yeah.mp3"),this.cdr.detectChanges()}scoreHit(e){let t=this.multiplierService.getMultiplier();this.multiplierService.reset(),this.multiplierAnimationCheck(t,e),this.cricketService.scoreCricketWithMultiplier({value:e,multiplier:t}),this.cdr.detectChanges()}multiplierAnimationCheck(e,t){e===2&&this.animationService.playAnimationSound("assets/sounds/ship-bell-two-times.mp3"),e===3&&(t===20&&this.currentPlayerService._currentPlayer.value.cricketMap.get(t)===3?(this.animationService.tripleTwentyCounter++,this.animationService.tripleTwentyCounter===3?this.animationService.showExplosion("180","red","assets/sounds/opening-bell-triple.mp3"):this.animationService.showExplosion("T"+t.toString(),"red","assets/sounds/good-result.mp3")):(this.animationService.tripleCounter++,this.animationService.tripleCounter===3?this.animationService.showExplosion("TripleTriple last: T"+t.toString(),"red","assets/sounds/oh-yeah.mp3"):this.animationService.showExplosion("T"+t.toString(),"red","assets/sounds/firework-explosion.mp3")))}getBadgeCountValue(e){return V(()=>(this.currentPlayerService.last3HisSignal(),this.currentPlayerService._currentPlayer.value.cricketMap.get(e)??"0"))}isClosed(e){return V(()=>{if(this.currentPlayerService.last3HisSignal(),this.playerService._players.length===1)return!1;if(e===50||e===25){if(e===25)return this.currentPlayerService.isCricketBullClosed();if(e===50)return this.currentPlayerService.isCricketBullClosed()}return this.currentPlayerService.isCricketNumberClosed(e)})}isScorable(e){return V(()=>(this.currentPlayerService.last3HisSignal(),this.playerService._players.length===1?!0:this.playerService._players.filter(r=>this.currentPlayerService._currentPlayer.value!==r).some(r=>r.cricketMap.get(e)!==3)))}updateOrientation(){this.screenOrientation=window.innerHeight>window.innerWidth?"portrait-primary":"landscape-primary"}justScore(e){e===25?this.scoreBull():this.scoreHit(e)}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=w({type:i,selectors:[["app-input-button-row-cricket"]],hostBindings:function(t,r){t&1&&S("resize",function(){return r.onResize()},tn)},decls:11,vars:6,consts:[[1,"container-fluid",3,"hidden"],[1,"d-flex","flex-column","align-items-center"],[1,"d-flex","flex-row","justify-content-center","mb-1"],["mat-raised-button","",1,"justify-content-center","no-pointer","fs-3","mt-2","mb-2","me-4",3,"disabled","color"],[1,"d-flex","flex-column","mx-3","pt-2","btn-scale"],[3,"bullClick","bullseyeClick","disabled"],[1,"d-flex","flex-row","flex-wrap","w-100","justify-content-center","align-items-center","pe-3"],[1,"d-flex","flex-row","flex-wrap","justify-content-center"],["class","d-flex flex-direction",4,"ngFor","ngForOf"],[1,"d-flex","flex-direction"],["class","d-flex flex-column mb-1 align-items-center",4,"ngFor","ngForOf"],[1,"d-flex","flex-column","mb-1","align-items-center"],["mat-raised-button","",1,"justify-content-center","no-pointer","fs-3","mt-4","me-1",3,"disabled","color"],["mat-fab","","matRipple","","appShapeMorph","",3,"shapeMorphClick","disabled","id","color","matRippleColor","matRippleUnbounded","matRippleRadius"]],template:function(t,r){t&1&&(u(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",1)(4,"button",3),g(5),h(),u(6,"div",4)(7,"app-bull-buttons",5),S("bullClick",function(){return r.scoreBull()})("bullseyeClick",function(){return r.scoreBullsEye()}),h()()()(),u(8,"div",6)(9,"div",7),ge(10,WC,2,1,"div",8),h()()()()),t&2&&(D("hidden",r.cricketService._hideAll),f(4),D("disabled",r.isClosed(25)())("color","accent"),f(),ne("",r.getBadgeCountValue(25)()," "),f(2),D("disabled",r.isClosed(25)()),f(3),D("ngForOf",r.buttonGroups))},dependencies:[Ae,on,Se,Ze,_r,zr,ct,Je,di,Cl],styles:[".w-16-percent[_ngcontent-%COMP%]{width:16.6666666667%}@media screen and (max-width:600px){.flex-direction[_ngcontent-%COMP%]{flex-direction:row}}@media screen and (min-width:1200px){.flex-direction[_ngcontent-%COMP%]{flex-direction:column}}@media screen and (min-width:1200px){.mx-2[_ngcontent-%COMP%]{margin-left:2rem!important;margin-right:2rem!important}}.maxBtnWidth[_ngcontent-%COMP%]{max-width:15%!important;min-width:15%!important}.mat-button-toggle-checked#mat-button-toggle-1[_ngcontent-%COMP%]{background-color:#80d8ff88}.mat-button-toggle-checked#mat-button-toggle-2[_ngcontent-%COMP%]{background-color:#9c27b088}.mat-button-toggle-checked#mat-button-toggle-3[_ngcontent-%COMP%]{background-color:#f4433688}.material-symbols-outlined[_ngcontent-%COMP%]{font-size:2.5em}"]})}}return i})();var $i=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new y;constructor(n=!1,e,t=!0,r){this._multiple=n,this._emitChanges=t,this.compareWith=r,e&&e.length&&(n?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...n){this._verifyValueAssignment(n),n.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...n){this._verifyValueAssignment(n),n.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...n){this._verifyValueAssignment(n);let e=this.selected,t=new Set(n.map(o=>this._getConcreteValue(o)));n.forEach(o=>this._markSelected(o)),e.filter(o=>!t.has(this._getConcreteValue(o,t))).forEach(o=>this._unmarkSelected(o));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(n,t))return t;return n}else return n}};var qC=["button"],YC=["*"];function XC(i,n){if(i&1&&(u(0,"div",2),Y(1,"mat-pseudo-checkbox",6),h()),i&2){let e=T();f(),D("disabled",e.disabled)}}var zg=new b("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})}),Hg=new b("MatButtonToggleGroup"),KC={provide:ci,useExisting:en(()=>au),multi:!0},Dl=class{source;value;constructor(n,e){this.source=n,this.value=e}},au=(()=>{class i{_changeDetector=l(oe);_dir=l($e,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(e){this._name=e,this._markButtonsForCheck()}_name=l(ve).getId("mat-button-toggle-group-");vertical=!1;get value(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e.map(t=>t.value):e[0]?e[0].value:void 0}set value(e){this._setSelectionByValue(e),this.valueChange.emit(this.value)}valueChange=new j;get selected(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e:e[0]||null}get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}change=new j;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(e){this._hideMultipleSelectionIndicator=e,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let e=l(zg,{optional:!0});this.appearance=e&&e.appearance?e.appearance:"standard",this._hideSingleSelectionIndicator=e?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=e?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new $i(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(e=>e.checked)),this.multiple||this._initializeTabIndex()}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_keydown(e){if(this.multiple||this.disabled||Ke(e))return;let r=e.target.id,o=this._buttonToggles.toArray().findIndex(s=>s.buttonId===r),a=null;switch(e.keyCode){case 32:case 13:a=this._buttonToggles.get(o)||null;break;case 38:a=this._getNextButton(o,-1);break;case 37:a=this._getNextButton(o,this.dir==="ltr"?-1:1);break;case 40:a=this._getNextButton(o,1);break;case 39:a=this._getNextButton(o,this.dir==="ltr"?1:-1);break;default:return}a&&(e.preventDefault(),a._onButtonClick(),a.focus())}_emitChangeEvent(e){let t=new Dl(e,this.value);this._rawValue=t.value,this._controlValueAccessorChangeFn(t.value),this.change.emit(t)}_syncButtonToggle(e,t,r=!1,o=!1){!this.multiple&&this.selected&&!e.checked&&(this.selected.checked=!1),this._selectionModel?t?this._selectionModel.select(e):this._selectionModel.deselect(e):o=!0,o?Promise.resolve().then(()=>this._updateModelValue(e,r)):this._updateModelValue(e,r)}_isSelected(e){return this._selectionModel&&this._selectionModel.isSelected(e)}_isPrechecked(e){return typeof this._rawValue>"u"?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(t=>e.value!=null&&t===e.value):e.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(e=>{e.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let e=0;e<this._buttonToggles.length;e++){let t=this._buttonToggles.get(e);if(!t.disabled){t.tabIndex=0;break}}}_getNextButton(e,t){let r=this._buttonToggles;for(let o=1;o<=r.length;o++){let a=(e+t*o+r.length)%r.length,s=r.get(a);if(s&&!s.disabled)return s}return null}_setSelectionByValue(e){if(this._rawValue=e,!this._buttonToggles)return;let t=this._buttonToggles.toArray();if(this.multiple&&e?(Array.isArray(e),this._clearSelection(),e.forEach(r=>this._selectValue(r,t))):(this._clearSelection(),this._selectValue(e,t)),!this.multiple&&t.every(r=>r.tabIndex===-1)){for(let r of t)if(!r.disabled){r.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(e=>{e.checked=!1,this.multiple||(e.tabIndex=-1)})}_selectValue(e,t){for(let r of t)if(r.value===e){r.checked=!0,this._selectionModel.select(r),this.multiple||(r.tabIndex=0);break}}_updateModelValue(e,t){t&&this._emitChangeEvent(e),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(e=>e._markForCheck())}static \u0275fac=function(t){return new(t||i)};static \u0275dir=R({type:i,selectors:[["mat-button-toggle-group"]],contentQueries:function(t,r,o){if(t&1&&zt(o,Sl,5),t&2){let a;ee(a=te())&&(r._buttonToggles=a)}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(t,r){t&1&&S("keydown",function(a){return r._keydown(a)}),t&2&&(Z("role",r.multiple?"group":"radiogroup")("aria-disabled",r.disabled),A("mat-button-toggle-vertical",r.vertical)("mat-button-toggle-group-appearance-standard",r.appearance==="standard"))},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",F],value:"value",multiple:[2,"multiple","multiple",F],disabled:[2,"disabled","disabled",F],disabledInteractive:[2,"disabledInteractive","disabledInteractive",F],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",F],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",F]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[Pe([KC,{provide:Hg,useExisting:i}])]})}return i})(),Sl=(()=>{class i{_changeDetectorRef=l(oe);_elementRef=l(P);_focusMonitor=l(Ct);_idGenerator=l(ve);_animationDisabled=Ee();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(e){this._tabIndex.set(e)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=e}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new j;constructor(){l(Fe).load(ln);let e=l(Hg,{optional:!0}),t=l(new nn("tabindex"),{optional:!0})||"",r=l(zg,{optional:!0});this._tabIndex=k(parseInt(t)||0),this.buttonToggleGroup=e,this._appearance=r&&r.appearance?r.appearance:"standard",this._disabledInteractive=r?.disabledInteractive??!1}ngOnInit(){let e=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),e&&(e._isPrechecked(this)?this.checked=!0:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,!1,!1,!0)}focus(e){this._buttonElement.nativeElement.focus(e)}_onButtonClick(){if(this.disabled)return;let e=this.isSingleSelector()?!0:!this._checked;if(e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let t=this.buttonToggleGroup._buttonToggles.find(r=>r.tabIndex===0);t&&(t.tabIndex=-1),this.tabIndex=0}this.change.emit(new Dl(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=w({type:i,selectors:[["mat-button-toggle"]],viewQuery:function(t,r){if(t&1&&Xe(qC,5),t&2){let o;ee(o=te())&&(r._buttonElement=o.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(t,r){t&1&&S("focus",function(){return r.focus()}),t&2&&(Z("aria-label",null)("aria-labelledby",null)("id",r.id)("name",null),A("mat-button-toggle-standalone",!r.buttonToggleGroup)("mat-button-toggle-checked",r.checked)("mat-button-toggle-disabled",r.disabled)("mat-button-toggle-disabled-interactive",r.disabledInteractive)("mat-button-toggle-appearance-standard",r.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",F],appearance:"appearance",checked:[2,"checked","checked",F],disabled:[2,"disabled","disabled",F],disabledInteractive:[2,"disabledInteractive","disabledInteractive",F]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:YC,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(t,r){if(t&1&&(De(),u(0,"button",1,0),S("click",function(){return r._onButtonClick()}),W(2,XC,2,1,"div",2),u(3,"span",3),Q(4),h()(),Y(5,"span",4)(6,"span",5)),t&2){let o=ht(1);D("id",r.buttonId)("disabled",r.disabled&&!r.disabledInteractive||null),Z("role",r.isSingleSelector()?"radio":"button")("tabindex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex)("aria-pressed",r.isSingleSelector()?null:r.checked)("aria-checked",r.isSingleSelector()?r.checked:null)("name",r._getButtonName())("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby)("aria-disabled",r.disabled&&r.disabledInteractive?"true":null),f(2),q(r.buttonToggleGroup&&(!r.buttonToggleGroup.multiple&&!r.buttonToggleGroup.hideSingleSelectionIndicator||r.buttonToggleGroup.multiple&&!r.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),f(4),D("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)}},dependencies:[Je,Qs],styles:[`.mat-button-toggle-standalone,
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
`],encapsulation:2,changeDetection:0})}return i})(),Ug=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({imports:[ct,Sl,se]})}return i})();var xl=(()=>{class i{constructor(){this.multiplierService=l(ui),this.cdr=l(oe),this.screenOrientation="portrait-primary",this.multiplierControl=new Eg("1"),ut(()=>{this.multiplierControl.setValue(String(this.multiplierService.multiplier()),{emitEvent:!1})})}onResize(){this.updateOrientation(),this.cdr.detectChanges()}ngOnInit(){this.updateOrientation(),this.multiplierControl.valueChanges.subscribe(e=>{this.multiplierService.setMultiplier(Number(e))})}updateOrientation(){this.screenOrientation=window.innerHeight>window.innerWidth?"portrait-primary":"landscape-primary"}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=w({type:i,selectors:[["app-multiplier-toggle"]],hostBindings:function(t,r){t&1&&S("resize",function(){return r.onResize()},tn)},decls:8,vars:3,consts:[[1,"multiplier-container"],[1,"toggle-group-scale","toggle-btn-group",3,"vertical","formControl","hideSingleSelectionIndicator"],["id","multiplier-1","value","1",1,"toggle1-color"],["id","multiplier-2","value","2",1,"toggle2-color"],["id","multiplier-3","value","3",1,"toggle3-color"]],template:function(t,r){t&1&&(u(0,"div",0)(1,"mat-button-toggle-group",1)(2,"mat-button-toggle",2),g(3,"Single"),h(),u(4,"mat-button-toggle",3),g(5,"Double"),h(),u(6,"mat-button-toggle",4),g(7,"Triple"),h()()()),t&2&&(f(),D("vertical",!0)("formControl",r.multiplierControl)("hideSingleSelectionIndicator",!0))},dependencies:[Ae,Ug,au,Sl,vl,bg,iu],styles:['@charset "UTF-8";.multiplier-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.toggle-btn-group[_ngcontent-%COMP%]{border-radius:12px;overflow:hidden;border:1px solid rgba(255,255,255,.12);background-color:#212121cc}.mat-button-toggle[_ngcontent-%COMP%]{width:4rem;height:4.5rem;display:flex;align-items:center;justify-content:center}.mat-button-toggle-checked.toggle1-color[_ngcontent-%COMP%]{background-color:#80d8ff88!important}.mat-button-toggle-checked.toggle2-color[_ngcontent-%COMP%]{background-color:#9c27b088!important}.mat-button-toggle-checked.toggle3-color[_ngcontent-%COMP%]{background-color:#f4433688!important}']})}}return i})();var Ml=(()=>{class i{constructor(){this.currentPlayerService=l(fe),this.dartService=l(Mt),this.cricketService=l(Vt),this.customRipple=Dn,this.cdr=l(oe),this.animationService=l(Cn)}scoreMiss(){this.animationService.missCounter++,this.animationService.missCounter===3&&this.animationService.showExplosion("Miss","green","assets/sounds/sitcom-laugh.mp3"),this.currentPlayerService.currentGameMode==="Cricket"?this.cricketService.scoreCricketWithMultiplier({value:0,multiplier:1}):this.dartService.score({value:0,multiplier:1}),this.cdr.detectChanges()}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=w({type:i,selectors:[["app-miss-btn"]],decls:3,vars:3,consts:[[1,"d-flex","justify-content-center","align-items-center","mt-5","px-2","py-2"],["id","miss-btn","mat-raised-button","","color","warn","matRipple","","appShapeMorph","",1,"btn-scale","raised-button-3d-rect",3,"shapeMorphClick","matRippleColor","matRippleUnbounded","matRippleRadius"]],template:function(t,r){t&1&&(u(0,"div",0)(1,"button",1),S("shapeMorphClick",function(){return r.scoreMiss()}),g(2," Miss "),h()()),t&2&&(f(),D("matRippleColor",r.customRipple.rippleColor)("matRippleUnbounded",!0)("matRippleRadius",r.customRipple.rippleRadius))},dependencies:[Ze,Je,di,zr],encapsulation:2})}}return i})();var El=(()=>{class i{constructor(e,t){this.dialogRef=e,this.playerService=t,this.GameType=M,this.currentPlayerService=l(fe)}ngOnInit(){this.dialogRef.updateSize("200%","50%")}getDiff(e){return Math.abs(this.currentPlayerService._currentPlayer.value.remainingPoints-e.remainingPoints)}static{this.\u0275fac=function(t){return new(t||i)(re(Hi),re(Ne))}}static{this.\u0275cmp=w({type:i,selectors:[["app-hidden-players-dialog"]],decls:7,vars:0,consts:[["mat-dialog-title",""],["align","end"],["mat-raised-button","","mat-dialog-close","","color","accent"]],template:function(t,r){t&1&&(u(0,"mat-dialog-content")(1,"h1",0),g(2,"All Players"),h(),Y(3,"app-mini-player-overview"),h(),u(4,"mat-dialog-actions",1)(5,"button",2),g(6,"OK"),h()())},dependencies:[ai,wn,_n,vn,yn,bn,Se,Ze,Nr],encapsulation:2})}}return i})();function QC(i,n){if(i&1&&(u(0,"div",11),g(1),h()),i&2){let e=T().$implicit,t=T();f(),ne(" (",t.getDiffToCurrentPlayer(e),") ")}}function JC(i,n){if(i&1&&(u(0,"div",14)(1,"div",15)(2,"span",16),g(3),h()(),u(4,"div",17),g(5),h()()),i&2){let e=n.$implicit,t=T(2).$implicit,r=T();f(),A("closed",r.getCricketHitCount(t,e)>=3),Z("title",e===25?"Bull":e),f(2),he(e===25?"B":e),f(),A("closed",r.getCricketHitCount(t,e)>=3),f(),ne(" ",r.getCricketHitCount(t,e)," ")}}function eD(i,n){if(i&1&&(u(0,"div",12),ge(1,JC,6,7,"div",13),h()),i&2){let e=T(2);f(),D("ngForOf",e.getCricketValues())}}function tD(i,n){if(i&1){let e=Te();Aa(0),u(1,"div",4),Th(2,"async"),u(3,"div",5)(4,"div",6),g(5),h(),ge(6,QC,2,1,"div",7),h(),u(7,"div",8),ge(8,eD,2,1,"div",9),u(9,"span",10),S("click",function(){let r=we(e).$implicit,o=T();return Ce(o.currentPlayerService.showHistory(r))}),g(10),h()()(),ka()}if(i&2){let e,t=n.$implicit,r=T();f(),A("active-player",t.id===((e=Ah(2,6,r.currentPlayerService._currentPlayer))==null?null:e.id)),f(4),he(t.name),f(),D("ngIf",r.currentPlayerService.currentGameMode===r.GameType.Highscore||r.currentPlayerService.currentGameMode===r.GameType.Elimination301),f(2),D("ngIf",r.currentPlayerService.currentGameMode===r.GameType.Cricket),f(2),ne(" ",t.remainingPoints," ")}}var Rl=(()=>{class i{constructor(){this.playerService=l(Ne),this.currentPlayerService=l(fe),this.GameType=M}getDiffToCurrentPlayer(e){if(e===this.currentPlayerService._currentPlayer.getValue())return 0;let t=this.currentPlayerService._remainingPointsToDisplay();return Math.abs(t-e.remainingPoints)}getCricketValues(){return[15,16,17,18,19,20,25]}getCricketHitCount(e,t){return V(()=>(this.currentPlayerService.last3HisSignal(),e.cricketMap.get(t)||0))()}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=w({type:i,selectors:[["app-player-overview"]],decls:4,vars:1,consts:[[1,"m-1","px-1","py-1","shadow","rounded"],[1,"section","players-overview"],[1,"mini-scoreboard"],[4,"ngFor","ngForOf"],[1,"mini-player-row"],[1,"mini-player-main-info"],[1,"mini-player-name","player-name","text-wrap","text-truncate"],["class","diff-score small ms-1",4,"ngIf"],[1,"mini-player-actions","d-flex","align-items-center"],["class","cricket-mini-display d-flex me-2",4,"ngIf"],[1,"mini-player-score","fw-bold","matcardpointer",3,"click"],[1,"diff-score","small","ms-1"],[1,"cricket-mini-display","d-flex","me-2"],["class","cricket-circle-wrapper",4,"ngFor","ngForOf"],[1,"cricket-circle-wrapper"],[1,"cricket-circle"],[1,"cricket-value"],[1,"hit-count"]],template:function(t,r){t&1&&(u(0,"div",0)(1,"div",1)(2,"div",2),ge(3,tD,11,8,"ng-container",3),h()()()),t&2&&(f(3),D("ngForOf",r.playerService._players))},dependencies:[Ae,on,Rn,gc],styles:[".players-overview[_ngcontent-%COMP%]{flex:1;height:100%;width:100%}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]{width:100%;height:90%;overflow-y:auto;display:flex;flex-direction:column;gap:2px;padding:2px}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]::-webkit-scrollbar{width:3px}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#fff3;border-radius:3px}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row[_ngcontent-%COMP%]{justify-content:center;display:flex;align-items:center;padding:.5rem;border-radius:4px;font-size:.75rem;min-height:34px;width:100%;gap:.5rem}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row.active-player[_ngcontent-%COMP%]{background-color:#80d8ff33;border:1px solid rgba(128,216,255,.4);box-shadow:0 0 8px #80d8ff33}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row[_ngcontent-%COMP%]   .mini-player-name[_ngcontent-%COMP%]{padding:.2rem;flex:1;min-width:0;color:#80d8ff;font-weight:500;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row[_ngcontent-%COMP%]   .diff-score[_ngcontent-%COMP%]{color:#80d8ff;font-weight:500}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row[_ngcontent-%COMP%]   .mini-player-actions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row[_ngcontent-%COMP%]   .cricket-mini-display[_ngcontent-%COMP%]{width:100%;gap:.75rem;height:3rem;align-items:center}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row[_ngcontent-%COMP%]   .cricket-mini-display[_ngcontent-%COMP%]   .cricket-circle-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:1px}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row[_ngcontent-%COMP%]   .cricket-mini-display[_ngcontent-%COMP%]   .cricket-circle[_ngcontent-%COMP%]{width:18px;height:18px;border-radius:50%;background-color:#3f51b5;border:1px solid rgba(255,255,255,.4);display:flex;align-items:center;justify-content:center;transition:all .2s ease}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row[_ngcontent-%COMP%]   .cricket-mini-display[_ngcontent-%COMP%]   .cricket-circle[_ngcontent-%COMP%]   .cricket-value[_ngcontent-%COMP%]{font-size:10px;color:#fff;font-weight:700}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row[_ngcontent-%COMP%]   .cricket-mini-display[_ngcontent-%COMP%]   .cricket-circle.closed[_ngcontent-%COMP%]{background-color:#f44336;box-shadow:0 0 4px #f4433680;border-color:#ff9800}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row[_ngcontent-%COMP%]   .cricket-mini-display[_ngcontent-%COMP%]   .hit-count[_ngcontent-%COMP%]{font-size:9px;font-weight:700;color:#ffd740}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row[_ngcontent-%COMP%]   .cricket-mini-display[_ngcontent-%COMP%]   .hit-count.closed[_ngcontent-%COMP%]{color:#f44336}.players-overview[_ngcontent-%COMP%]   .mini-scoreboard[_ngcontent-%COMP%]   .mini-player-row[_ngcontent-%COMP%]   .mini-player-score[_ngcontent-%COMP%]{min-width:3rem;text-align:center}"]})}}return i})();function nD(i,n){if(i&1&&(u(0,"div",8)(1,"div",9),g(2),h()()),i&2){let e=T();f(2),ne(" ",e.currentPlayerService._currentPlayer.value.name," is acting ... ")}}var Gg=(()=>{class i{constructor(){this.cricketService=l(Vt),this.playerService=l(Ne),this.currentPlayerService=l(fe),this.aiService=l(yl),this.fullscreenService=l(Lr),this.dialog=l(pt)}ngOnInit(){this.fullscreenService.toggleTabFullScreenModeGame(),this.aiSubscription=this.currentPlayerService.aiTurn$.subscribe(()=>{this.playAITurn()})}openPlayersOverviewDialog(){this.dialog.open(El)}playAITurn(){this.aiTimeout&&clearTimeout(this.aiTimeout),this.aiTimeout=setTimeout(()=>{let e=this.currentPlayerService._currentPlayer.value;if(e.isAI&&this.currentPlayerService.hasThrowsRemaining()&&!this.currentPlayerService.isUIBlocked()){let t=this.aiService.getNextThrow(e.difficulty,M.Cricket,e,this.playerService._players);this.performClick(t)}},1500)}performClick(e){if(this.currentPlayerService.isUIBlocked())return;if(e.value===0){document.getElementById("miss-btn")?.click();return}e.multiplier>1&&e.value!==25&&document.getElementById(`multiplier-${e.multiplier}`)?.click();let t=`cricket-btn-${e.value}`;e.value===25&&(t=e.multiplier===2?"dart-btn-bullseye":"dart-btn-bull");let r=document.getElementById(t);r?r.click():this.cricketService.scoreCricketWithMultiplier(e)}ngOnDestroy(){this.cricketService._gameType="",this.aiSubscription?.unsubscribe(),this.aiTimeout&&clearTimeout(this.aiTimeout)}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=w({type:i,selectors:[["app-cricket-component"]],decls:15,vars:3,consts:[[1,"game-layout"],["class","ai-acting-overlay",4,"ngIf"],[1,"game-content-container"],[1,"pow-container","shadow","rounded","d-flex","flex-row"],["mat-icon-button","",1,"p-2",3,"click"],["id","cricket-input",1,"d-flex","flex-row"],[1,"input-container"],[1,"d-flex","multiplier-miss","flex-column","pt-5","me-2"],[1,"ai-acting-overlay"],[1,"ai-acting-text"]],template:function(t,r){t&1&&(u(0,"div",0),Y(1,"app-current-player-progress"),ge(2,nD,3,1,"div",1),u(3,"div",2)(4,"div",3),Y(5,"app-player-overview"),u(6,"button",4),S("click",function(){return r.openPlayersOverviewDialog()}),u(7,"mat-icon"),g(8,"groups"),h()()(),u(9,"div",5)(10,"div",6),Y(11,"app-input-button-row-cricket"),h(),u(12,"div",7),Y(13,"app-multiplier-toggle")(14,"app-miss-btn"),h()()()()),t&2&&(A("ai-active-border",r.currentPlayerService.isAITurn()&&r.currentPlayerService.hasThrowsRemaining()),f(2),D("ngIf",r.currentPlayerService.isAITurn()&&r.currentPlayerService.hasThrowsRemaining()))},dependencies:[Ae,Rn,wl,jg,xl,Ml,Rl,gn,pn,Se,Fn],encapsulation:2})}}return i})();function iD(i,n){if(i&1){let e=Te();u(0,"div",8)(1,"button",9),S("shapeMorphClick",function(){let r=we(e).$implicit,o=T(2);return Ce(o.scoreWithMultiplier(r))}),g(2),h()()}if(i&2){let e=n.$implicit,t=T(2);f(),D("id",yi("dart-btn-",e.zahl))("matRippleColor",t.customRipple.rippleColor)("matRippleUnbounded",!0)("matRippleCentered",!0)("matRippleRadius",t.customRipple.rippleRadius)("color",t.buttonColor),f(),ne(" ",e.zahl," ")}}function rD(i,n){if(i&1&&(u(0,"div",6),ge(1,iD,3,8,"div",7),h()),i&2){let e=n.$implicit;f(),D("ngForOf",e)}}var $g=(()=>{class i{constructor(){this.dartService=l(Mt),this.animationService=l(Cn),this.multiplierService=l(ui),this.cdr=l(oe),this.currentPlayerService=l(fe),this.screenOrientation=window.screen.orientation.type,this.customRipple=Dn,this.buttonGroups=[],this.twentyButtons=[]}get buttonColor(){let e=this.multiplierService.multiplier();return e===2?"accent":e===3?"warn":"primary"}onResize(){this.updateOrientation(),this.cdr.detectChanges()}ngOnInit(){if(this.twentyButtons.length===0)for(let e=0;e<20;e++)this.twentyButtons.push({zahl:e+1,badge:!0});this.groupButtons(),this.updateOrientation()}groupButtons(){let e=this.twentyButtons;for(let t=0;t<4;t++)this.buttonGroups.push(e.slice(t*5,(t+1)*5))}scoreBull(){this.dartService.score({value:25,multiplier:1}),this.animationService.playAnimationSound("assets/sounds/cow-moo-sound-effect.mp3"),this.cdr.detectChanges()}scoreBullsEye(){this.dartService.score({value:25,multiplier:2}),this.animationService.showExplosion("Bullseye","red","assets/sounds/oh-yeah.mp3"),this.cdr.detectChanges()}scoreWithMultiplier(e){let t=this.multiplierService.getMultiplier();this.multiplierService.reset(),this.multiplierAnimationCheck(t,e),this.dartService.score({value:e.zahl,multiplier:t}),this.cdr.detectChanges()}multiplierAnimationCheck(e,t){e===2&&this.animationService.playAnimationSound("assets/sounds/ship-bell-two-times.mp3"),e===3&&(t.zahl===20?(this.animationService.tripleTwentyCounter++,this.animationService.tripleTwentyCounter===3?this.animationService.showExplosion("180","red","assets/sounds/opening-bell-triple.mp3"):this.animationService.showExplosion("T"+t.zahl.toString(),"red","assets/sounds/good-result.mp3")):(this.animationService.tripleCounter++,this.animationService.tripleCounter===3?this.animationService.showExplosion("TripleTriple last: T"+t.zahl.toString(),"red","assets/sounds/oh-yeah.mp3"):this.animationService.showExplosion("T"+t.zahl.toString(),"red","assets/sounds/firework-explosion.mp3")))}updateOrientation(){this.screenOrientation=window.innerHeight>window.innerWidth?"portrait-primary":"landscape-primary"}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=w({type:i,selectors:[["app-input-button-row"]],hostBindings:function(t,r){t&1&&S("resize",function(){return r.onResize()},tn)},decls:6,vars:2,consts:[[1,"container-fluid",3,"hidden"],[1,"d-flex","flex-row","flex-wrap","w-100","justify-content-center","align-items-center"],[1,"d-flex","flex-column","mx-3","pt-2","btn-scale"],[3,"bullClick","bullseyeClick"],[1,"d-flex","flex-row","justify-content-center","flex-wrap"],["class","d-flex flex-column",4,"ngFor","ngForOf"],[1,"d-flex","flex-column"],["class","d-flex justify-content-center",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-center"],["matRipple","","mat-fab","","appShapeMorph","",1,"raised-button-3d","input-btn-margin",3,"shapeMorphClick","id","matRippleColor","matRippleUnbounded","matRippleCentered","matRippleRadius","color"]],template:function(t,r){t&1&&(u(0,"div",0)(1,"div",1)(2,"div",2)(3,"app-bull-buttons",3),S("bullClick",function(){return r.scoreBull()})("bullseyeClick",function(){return r.scoreBullsEye()}),h(),u(4,"div",4),ge(5,rD,2,1,"div",5),h()()()()),t&2&&(D("hidden",r.dartService._hideAll),f(5),D("ngForOf",r.buttonGroups))},dependencies:[Ae,on,Se,_r,zr,ct,Je,di,Cl],styles:[".w-20-percent[_ngcontent-%COMP%]{width:20%}.multiplier-btn-scale[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{transform:scale(1.4)}@media screen and (max-width:600px){.multiplier-btn-scale[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{transform:scale(1)}}@media screen and (orientation:landscape){.input-btn-margin[_ngcontent-%COMP%]{margin-left:.9rem;margin-right:1.2rem;margin-bottom:1.2rem}}@media screen and (orientation:portrait){.input-btn-margin[_ngcontent-%COMP%]{margin-right:.5rem;margin-bottom:.8rem}}.toggle-btn-scale[_ngcontent-%COMP%]{transform:scale(1.2);margin:3%}@media screen and (orientation:portrait){.toggle-btn-scale[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding-top:3px;transform:scale(.6);margin:.5%}}.mat-button-toggle-checked#mat-button-toggle-1[_ngcontent-%COMP%]{background-color:#80d8ff88}.mat-button-toggle-checked#mat-button-toggle-2[_ngcontent-%COMP%]{background-color:#9c27b088}.mat-button-toggle-checked#mat-button-toggle-3[_ngcontent-%COMP%]{background-color:#f4433688}"]})}}return i})();function oD(i,n){if(i&1&&(u(0,"div",8)(1,"div",9),g(2),h()()),i&2){let e=T();f(2),ne(" ",e.currentPlayerService._currentPlayer.value.name," is acting ... ")}}var Wg=(()=>{class i{constructor(){this.dartservice=l(Mt),this.playerService=l(Ne),this.currentPlayerService=l(fe),this.aiService=l(yl),this.fullscreenService=l(Lr),this.dialog=l(pt)}ngOnInit(){this.fullscreenService.toggleTabFullScreenModeGame(),this.aiSubscription=this.currentPlayerService.aiTurn$.subscribe(()=>{this.playAITurn()})}openPlayersOverviewDialog(){this.dialog.open(El)}playAITurn(){this.aiTimeout&&clearTimeout(this.aiTimeout),this.aiTimeout=setTimeout(()=>{let e=this.currentPlayerService._currentPlayer.value;if(e.isAI&&this.currentPlayerService.hasThrowsRemaining()&&!this.currentPlayerService.isUIBlocked()){let t=this.aiService.getNextThrow(e.difficulty,this.currentPlayerService.currentGameMode,e,this.playerService._players);this.performClick(t)}},1500)}performClick(e){if(this.currentPlayerService.isUIBlocked())return;if(e.value===0){let r=document.getElementById("miss-btn");r&&(this.currentPlayerService.setLastClickedButton(r),r.click());return}if(e.value===25){let r=e.multiplier===2?"dart-btn-bullseye":"dart-btn-bull",o=document.getElementById(r);o&&(this.currentPlayerService.setLastClickedButton(o),o.click());return}e.multiplier>1&&document.getElementById(`multiplier-${e.multiplier}-button`)?.click();let t=document.getElementById(`dart-btn-${e.value}`);t?(this.currentPlayerService.setLastClickedButton(t),t.click()):this.dartservice.score(e)}ngOnDestroy(){this.dartservice._gameType="",this.aiSubscription?.unsubscribe(),this.aiTimeout&&clearTimeout(this.aiTimeout)}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=w({type:i,selectors:[["app-dart-board"]],decls:15,vars:3,consts:[[1,"game-layout"],["class","ai-acting-overlay",4,"ngIf"],[1,"game-content-container"],[1,"pow-container","shadow","rounded","d-flex","flex-row"],["mat-icon-button","",1,"p-2",3,"click"],["id","dart-input",1,"d-flex","flex-row"],[1,"input-container"],[1,"d-flex","multiplier-miss","flex-column","pt-5","me-2"],[1,"ai-acting-overlay"],[1,"ai-acting-text"]],template:function(t,r){t&1&&(u(0,"div",0),Y(1,"app-current-player-progress"),ge(2,oD,3,1,"div",1),u(3,"div",2)(4,"div",3),Y(5,"app-player-overview"),u(6,"button",4),S("click",function(){return r.openPlayersOverviewDialog()}),u(7,"mat-icon"),g(8,"groups"),h()()(),u(9,"div",5)(10,"div",6),Y(11,"app-input-button-row"),h(),u(12,"div",7),Y(13,"app-multiplier-toggle")(14,"app-miss-btn"),h()()()()),t&2&&(A("ai-active-border",r.currentPlayerService.isAITurn()&&r.currentPlayerService.hasThrowsRemaining()),f(2),D("ngIf",r.currentPlayerService.isAITurn()&&r.currentPlayerService.hasThrowsRemaining()))},dependencies:[Ae,Rn,wl,$g,xl,Ml,Rl,gn,pn,Se,Fn],encapsulation:2})}}return i})();function cu(i){let n=i.cloneNode(!0),e=n.querySelectorAll("[id]"),t=i.nodeName.toLowerCase();n.removeAttribute("id");for(let r=0;r<e.length;r++)e[r].removeAttribute("id");return t==="canvas"?Xg(i,n):(t==="input"||t==="select"||t==="textarea")&&Yg(i,n),qg("canvas",i,n,Xg),qg("input, textarea, select",i,n,Yg),n}function qg(i,n,e,t){let r=n.querySelectorAll(i);if(r.length){let o=e.querySelectorAll(i);for(let a=0;a<r.length;a++)t(r[a],o[a])}}var aD=0;function Yg(i,n){n.type!=="file"&&(n.value=i.value),n.type==="radio"&&n.name&&(n.name=`mat-clone-${n.name}-${aD++}`)}function Xg(i,n){let e=n.getContext("2d");if(e)try{e.drawImage(i,0,0)}catch(t){}}function pu(i){let n=i.getBoundingClientRect();return{top:n.top,right:n.right,bottom:n.bottom,left:n.left,width:n.width,height:n.height,x:n.x,y:n.y}}function du(i,n,e){let{top:t,bottom:r,left:o,right:a}=i;return e>=t&&e<=r&&n>=o&&n<=a}function sD(i,n){let e=n.left<i.left,t=n.left+n.width>i.right,r=n.top<i.top,o=n.top+n.height>i.bottom;return e||t||r||o}function ca(i,n,e){i.top+=n,i.bottom=i.top+i.height,i.left+=e,i.right=i.left+i.width}function Kg(i,n,e,t){let{top:r,right:o,bottom:a,left:s,width:c,height:d}=i,m=c*n,p=d*n;return t>r-p&&t<a+p&&e>s-m&&e<o+m}var Il=class{_document;positions=new Map;constructor(n){this._document=n}clear(){this.positions.clear()}cache(n){this.clear(),this.positions.set(this._document,{scrollPosition:this.getViewportScrollPosition()}),n.forEach(e=>{this.positions.set(e,{scrollPosition:{top:e.scrollTop,left:e.scrollLeft},clientRect:pu(e)})})}handleScroll(n){let e=Ue(n),t=this.positions.get(e);if(!t)return null;let r=t.scrollPosition,o,a;if(e===this._document){let d=this.getViewportScrollPosition();o=d.top,a=d.left}else o=e.scrollTop,a=e.scrollLeft;let s=r.top-o,c=r.left-a;return this.positions.forEach((d,m)=>{d.clientRect&&e!==m&&e.contains(m)&&ca(d.clientRect,s,c)}),r.top=o,r.left=a,{top:s,left:c}}getViewportScrollPosition(){return{top:window.scrollY,left:window.scrollX}}};function c_(i,n){let e=i.rootNodes;if(e.length===1&&e[0].nodeType===n.ELEMENT_NODE)return e[0];let t=n.createElement("div");return e.forEach(r=>t.appendChild(r)),t}function gu(i,n,e){for(let t in n)if(n.hasOwnProperty(t)){let r=n[t];r?i.setProperty(t,r,e?.has(t)?"important":""):i.removeProperty(t)}return i}function Hr(i,n){let e=n?"":"none";gu(i.style,{"touch-action":n?"":"none","-webkit-user-drag":n?"":"none","-webkit-tap-highlight-color":n?"":"transparent","user-select":e,"-ms-user-select":e,"-webkit-user-select":e,"-moz-user-select":e})}function Zg(i,n,e){gu(i.style,{position:n?"":"fixed",top:n?"":"0",opacity:n?"":"0",left:n?"":"-999em"},e)}function Tl(i,n){return n&&n!="none"?i+" "+n:i}function Qg(i,n){i.style.width=`${n.width}px`,i.style.height=`${n.height}px`,i.style.transform=da(n.left,n.top)}function da(i,n){return`translate3d(${Math.round(i)}px, ${Math.round(n)}px, 0)`}var sa={capture:!0},su={passive:!1,capture:!0},lD=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=w({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-drag-resets-container",""],decls:0,vars:0,template:function(t,r){},styles:[`@layer cdk-resets {
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
`],encapsulation:2,changeDetection:0})}return i})(),_u=(()=>{class i{_ngZone=l(z);_document=l(N);_styleLoader=l(Fe);_renderer=l(He).createRenderer(null,null);_cleanupDocumentTouchmove;_scroll=new y;_dropInstances=new Set;_dragInstances=new Set;_activeDragInstances=k([]);_globalListeners;_draggingPredicate=e=>e.isDragging();_domNodesToDirectives=null;pointerMove=new y;pointerUp=new y;constructor(){}registerDropContainer(e){this._dropInstances.has(e)||this._dropInstances.add(e)}registerDragItem(e){this._dragInstances.add(e),this._dragInstances.size===1&&this._ngZone.runOutsideAngular(()=>{this._cleanupDocumentTouchmove?.(),this._cleanupDocumentTouchmove=this._renderer.listen(this._document,"touchmove",this._persistentTouchmoveListener,su)})}removeDropContainer(e){this._dropInstances.delete(e)}removeDragItem(e){this._dragInstances.delete(e),this.stopDragging(e),this._dragInstances.size===0&&this._cleanupDocumentTouchmove?.()}startDragging(e,t){if(!(this._activeDragInstances().indexOf(e)>-1)&&(this._styleLoader.load(lD),this._activeDragInstances.update(r=>[...r,e]),this._activeDragInstances().length===1)){let r=t.type.startsWith("touch"),o=s=>this.pointerUp.next(s),a=[["scroll",s=>this._scroll.next(s),sa],["selectstart",this._preventDefaultWhileDragging,su]];r?a.push(["touchend",o,sa],["touchcancel",o,sa]):a.push(["mouseup",o,sa]),r||a.push(["mousemove",s=>this.pointerMove.next(s),su]),this._ngZone.runOutsideAngular(()=>{this._globalListeners=a.map(([s,c,d])=>this._renderer.listen(this._document,s,c,d))})}}stopDragging(e){this._activeDragInstances.update(t=>{let r=t.indexOf(e);return r>-1?(t.splice(r,1),[...t]):t}),this._activeDragInstances().length===0&&this._clearGlobalListeners()}isDragging(e){return this._activeDragInstances().indexOf(e)>-1}scrolled(e){let t=[this._scroll];return e&&e!==this._document&&t.push(new at(r=>this._ngZone.runOutsideAngular(()=>{let o=this._renderer.listen(e,"scroll",a=>{this._activeDragInstances().length&&r.next(a)},sa);return()=>{o()}}))),dt(...t)}registerDirectiveNode(e,t){this._domNodesToDirectives??=new WeakMap,this._domNodesToDirectives.set(e,t)}removeDirectiveNode(e){this._domNodesToDirectives?.delete(e)}getDragDirectiveForNode(e){return this._domNodesToDirectives?.get(e)||null}ngOnDestroy(){this._dragInstances.forEach(e=>this.removeDragItem(e)),this._dropInstances.forEach(e=>this.removeDropContainer(e)),this._domNodesToDirectives=null,this._clearGlobalListeners(),this.pointerMove.complete(),this.pointerUp.complete()}_preventDefaultWhileDragging=e=>{this._activeDragInstances().length>0&&e.preventDefault()};_persistentTouchmoveListener=e=>{this._activeDragInstances().length>0&&(this._activeDragInstances().some(this._draggingPredicate)&&e.preventDefault(),this.pointerMove.next(e))};_clearGlobalListeners(){this._globalListeners?.forEach(e=>e()),this._globalListeners=void 0}static \u0275fac=function(t){return new(t||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Jg(i){let n=i.toLowerCase().indexOf("ms")>-1?1:1e3;return parseFloat(i)*n}function cD(i){let n=getComputedStyle(i),e=lu(n,"transition-property"),t=e.find(s=>s==="transform"||s==="all");if(!t)return 0;let r=e.indexOf(t),o=lu(n,"transition-duration"),a=lu(n,"transition-delay");return Jg(o[r])+Jg(a[r])}function lu(i,n){return i.getPropertyValue(n).split(",").map(t=>t.trim())}var dD=new Set(["position"]),uu=class{_document;_rootElement;_direction;_initialDomRect;_previewTemplate;_previewClass;_pickupPositionOnPage;_initialTransform;_zIndex;_renderer;_previewEmbeddedView=null;_preview;get element(){return this._preview}constructor(n,e,t,r,o,a,s,c,d,m){this._document=n,this._rootElement=e,this._direction=t,this._initialDomRect=r,this._previewTemplate=o,this._previewClass=a,this._pickupPositionOnPage=s,this._initialTransform=c,this._zIndex=d,this._renderer=m}attach(n){this._preview=this._createPreview(),n.appendChild(this._preview),e_(this._preview)&&this._preview.showPopover()}destroy(){this._preview.remove(),this._previewEmbeddedView?.destroy(),this._preview=this._previewEmbeddedView=null}setTransform(n){this._preview.style.transform=n}getBoundingClientRect(){return this._preview.getBoundingClientRect()}addClass(n){this._preview.classList.add(n)}getTransitionDuration(){return cD(this._preview)}addEventListener(n,e){return this._renderer.listen(this._preview,n,e)}_createPreview(){let n=this._previewTemplate,e=this._previewClass,t=n?n.template:null,r;if(t&&n){let o=n.matchSize?this._initialDomRect:null,a=n.viewContainer.createEmbeddedView(t,n.context);a.detectChanges(),r=c_(a,this._document),this._previewEmbeddedView=a,n.matchSize?Qg(r,o):r.style.transform=da(this._pickupPositionOnPage.x,this._pickupPositionOnPage.y)}else r=cu(this._rootElement),Qg(r,this._initialDomRect),this._initialTransform&&(r.style.transform=this._initialTransform);return gu(r.style,{"pointer-events":"none",margin:e_(r)?"0 auto 0 0":"0",position:"fixed",top:"0",left:"0","z-index":this._zIndex+""},dD),Hr(r,!1),r.classList.add("cdk-drag-preview"),r.setAttribute("popover","manual"),r.setAttribute("dir",this._direction),e&&(Array.isArray(e)?e.forEach(o=>r.classList.add(o)):r.classList.add(e)),r}};function e_(i){return"showPopover"in i}var uD={passive:!0},t_={passive:!1},hD={passive:!1,capture:!0},mD=800,n_="cdk-drag-placeholder",i_=new Set(["position"]);function fD(i,n,e={dragStartThreshold:5,pointerDirectionChangeThreshold:5}){let t=i.get(de,null,{optional:!0})||i.get(He).createRenderer(null,null);return new hu(n,e,i.get(N),i.get(z),i.get(Nt),i.get(_u),t)}var hu=class{_config;_document;_ngZone;_viewportRuler;_dragDropRegistry;_renderer;_rootElementCleanups;_cleanupShadowRootSelectStart;_preview=null;_previewContainer;_placeholderRef=null;_placeholder;_pickupPositionInElement;_pickupPositionOnPage;_marker;_anchor=null;_passiveTransform={x:0,y:0};_activeTransform={x:0,y:0};_initialTransform;_hasStartedDragging=k(!1);_hasMoved=!1;_initialContainer;_initialIndex;_parentPositions;_moveEvents=new y;_pointerDirectionDelta;_pointerPositionAtLastDirectionChange;_lastKnownPointerPosition;_rootElement;_ownerSVGElement=null;_rootElementTapHighlight;_pointerMoveSubscription=Ie.EMPTY;_pointerUpSubscription=Ie.EMPTY;_scrollSubscription=Ie.EMPTY;_resizeSubscription=Ie.EMPTY;_lastTouchEventTime;_dragStartTime;_boundaryElement=null;_nativeInteractionsEnabled=!0;_initialDomRect;_previewRect;_boundaryRect;_previewTemplate;_placeholderTemplate;_handles=[];_disabledHandles=new Set;_dropContainer;_direction="ltr";_parentDragRef=null;_cachedShadowRoot;lockAxis=null;dragStartDelay=0;previewClass;scale=1;get disabled(){return this._disabled||!!(this._dropContainer&&this._dropContainer.disabled)}set disabled(n){n!==this._disabled&&(this._disabled=n,this._toggleNativeDragInteractions(),this._handles.forEach(e=>Hr(e,n)))}_disabled=!1;beforeStarted=new y;started=new y;released=new y;ended=new y;entered=new y;exited=new y;dropped=new y;moved=this._moveEvents;data;constrainPosition;constructor(n,e,t,r,o,a,s){this._config=e,this._document=t,this._ngZone=r,this._viewportRuler=o,this._dragDropRegistry=a,this._renderer=s,this.withRootElement(n).withParent(e.parentDragRef||null),this._parentPositions=new Il(t),a.registerDragItem(this)}getPlaceholderElement(){return this._placeholder}getRootElement(){return this._rootElement}getVisibleElement(){return this.isDragging()?this.getPlaceholderElement():this.getRootElement()}withHandles(n){this._handles=n.map(t=>Ge(t)),this._handles.forEach(t=>Hr(t,this.disabled)),this._toggleNativeDragInteractions();let e=new Set;return this._disabledHandles.forEach(t=>{this._handles.indexOf(t)>-1&&e.add(t)}),this._disabledHandles=e,this}withPreviewTemplate(n){return this._previewTemplate=n,this}withPlaceholderTemplate(n){return this._placeholderTemplate=n,this}withRootElement(n){let e=Ge(n);if(e!==this._rootElement){this._removeRootElementListeners();let t=this._renderer;this._rootElementCleanups=this._ngZone.runOutsideAngular(()=>[t.listen(e,"mousedown",this._pointerDown,t_),t.listen(e,"touchstart",this._pointerDown,uD),t.listen(e,"dragstart",this._nativeDragStart,t_)]),this._initialTransform=void 0,this._rootElement=e}return typeof SVGElement<"u"&&this._rootElement instanceof SVGElement&&(this._ownerSVGElement=this._rootElement.ownerSVGElement),this}withBoundaryElement(n){return this._boundaryElement=n?Ge(n):null,this._resizeSubscription.unsubscribe(),n&&(this._resizeSubscription=this._viewportRuler.change(10).subscribe(()=>this._containInsideBoundaryOnResize())),this}withParent(n){return this._parentDragRef=n,this}dispose(){this._removeRootElementListeners(),this.isDragging()&&this._rootElement?.remove(),this._marker?.remove(),this._destroyPreview(),this._destroyPlaceholder(),this._dragDropRegistry.removeDragItem(this),this._removeListeners(),this.beforeStarted.complete(),this.started.complete(),this.released.complete(),this.ended.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this._moveEvents.complete(),this._handles=[],this._disabledHandles.clear(),this._dropContainer=void 0,this._resizeSubscription.unsubscribe(),this._parentPositions.clear(),this._boundaryElement=this._rootElement=this._ownerSVGElement=this._placeholderTemplate=this._previewTemplate=this._marker=this._parentDragRef=null}isDragging(){return this._hasStartedDragging()&&this._dragDropRegistry.isDragging(this)}reset(){this._rootElement.style.transform=this._initialTransform||"",this._activeTransform={x:0,y:0},this._passiveTransform={x:0,y:0}}resetToBoundary(){if(this._boundaryElement&&this._rootElement&&sD(this._boundaryElement.getBoundingClientRect(),this._rootElement.getBoundingClientRect())){let n=this._boundaryElement.getBoundingClientRect(),e=this._rootElement.getBoundingClientRect(),t=0,r=0;e.left<n.left?t=n.left-e.left:e.right>n.right&&(t=n.right-e.right),e.top<n.top?r=n.top-e.top:e.bottom>n.bottom&&(r=n.bottom-e.bottom);let o=this._activeTransform.x,a=this._activeTransform.y,s=o+t,c=a+r;this._rootElement.style.transform=da(s,c),this._activeTransform={x:s,y:c},this._passiveTransform={x:s,y:c}}}disableHandle(n){!this._disabledHandles.has(n)&&this._handles.indexOf(n)>-1&&(this._disabledHandles.add(n),Hr(n,!0))}enableHandle(n){this._disabledHandles.has(n)&&(this._disabledHandles.delete(n),Hr(n,this.disabled))}withDirection(n){return this._direction=n,this}_withDropContainer(n){this._dropContainer=n}getFreeDragPosition(){let n=this.isDragging()?this._activeTransform:this._passiveTransform;return{x:n.x,y:n.y}}setFreeDragPosition(n){return this._activeTransform={x:0,y:0},this._passiveTransform.x=n.x,this._passiveTransform.y=n.y,this._dropContainer||this._applyRootElementTransform(n.x,n.y),this}withPreviewContainer(n){return this._previewContainer=n,this}_sortFromLastPointerPosition(){let n=this._lastKnownPointerPosition;n&&this._dropContainer&&this._updateActiveDropContainer(this._getConstrainedPointerPosition(n),n)}_removeListeners(){this._pointerMoveSubscription.unsubscribe(),this._pointerUpSubscription.unsubscribe(),this._scrollSubscription.unsubscribe(),this._cleanupShadowRootSelectStart?.(),this._cleanupShadowRootSelectStart=void 0}_destroyPreview(){this._preview?.destroy(),this._preview=null}_destroyPlaceholder(){this._anchor?.remove(),this._placeholder?.remove(),this._placeholderRef?.destroy(),this._placeholder=this._anchor=this._placeholderRef=null}_pointerDown=n=>{if(this.beforeStarted.next(),this._handles.length){let e=this._getTargetHandle(n);e&&!this._disabledHandles.has(e)&&!this.disabled&&this._initializeDragSequence(e,n)}else this.disabled||this._initializeDragSequence(this._rootElement,n)};_pointerMove=n=>{let e=this._getPointerPositionOnPage(n);if(!this._hasStartedDragging()){let r=Math.abs(e.x-this._pickupPositionOnPage.x),o=Math.abs(e.y-this._pickupPositionOnPage.y);if(r+o>=this._config.dragStartThreshold){let s=Date.now()>=this._dragStartTime+this._getDragStartDelay(n),c=this._dropContainer;if(!s){this._endDragSequence(n);return}(!c||!c.isDragging()&&!c.isReceiving())&&(n.cancelable&&n.preventDefault(),this._hasStartedDragging.set(!0),this._ngZone.run(()=>this._startDragSequence(n)))}return}n.cancelable&&n.preventDefault();let t=this._getConstrainedPointerPosition(e);if(this._hasMoved=!0,this._lastKnownPointerPosition=e,this._updatePointerDirectionDelta(t),this._dropContainer)this._updateActiveDropContainer(t,e);else{let r=this.constrainPosition?this._initialDomRect:this._pickupPositionOnPage,o=this._activeTransform;o.x=t.x-r.x+this._passiveTransform.x,o.y=t.y-r.y+this._passiveTransform.y,this._applyRootElementTransform(o.x,o.y)}this._moveEvents.observers.length&&this._ngZone.run(()=>{this._moveEvents.next({source:this,pointerPosition:t,event:n,distance:this._getDragDistance(t),delta:this._pointerDirectionDelta})})};_pointerUp=n=>{this._endDragSequence(n)};_endDragSequence(n){if(this._dragDropRegistry.isDragging(this)&&(this._removeListeners(),this._dragDropRegistry.stopDragging(this),this._toggleNativeDragInteractions(),this._handles&&(this._rootElement.style.webkitTapHighlightColor=this._rootElementTapHighlight),!!this._hasStartedDragging()))if(this.released.next({source:this,event:n}),this._dropContainer)this._dropContainer._stopScrolling(),this._animatePreviewToPlaceholder().then(()=>{this._cleanupDragArtifacts(n),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)});else{this._passiveTransform.x=this._activeTransform.x;let e=this._getPointerPositionOnPage(n);this._passiveTransform.y=this._activeTransform.y,this._ngZone.run(()=>{this.ended.next({source:this,distance:this._getDragDistance(e),dropPoint:e,event:n})}),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)}}_startDragSequence(n){la(n)&&(this._lastTouchEventTime=Date.now()),this._toggleNativeDragInteractions();let e=this._getShadowRoot(),t=this._dropContainer;if(e&&this._ngZone.runOutsideAngular(()=>{this._cleanupShadowRootSelectStart=this._renderer.listen(e,"selectstart",pD,hD)}),t){let r=this._rootElement,o=r.parentNode,a=this._placeholder=this._createPlaceholderElement(),s=this._marker=this._marker||this._document.createComment("");o.insertBefore(s,r),this._initialTransform=r.style.transform||"",this._preview=new uu(this._document,this._rootElement,this._direction,this._initialDomRect,this._previewTemplate||null,this.previewClass||null,this._pickupPositionOnPage,this._initialTransform,this._config.zIndex||1e3,this._renderer),this._preview.attach(this._getPreviewInsertionPoint(o,e)),Zg(r,!1,i_),this._document.body.appendChild(o.replaceChild(a,r)),this.started.next({source:this,event:n}),t.start(),this._initialContainer=t,this._initialIndex=t.getItemIndex(this)}else this.started.next({source:this,event:n}),this._initialContainer=this._initialIndex=void 0;this._parentPositions.cache(t?t.getScrollableParents():[])}_initializeDragSequence(n,e){this._parentDragRef&&e.stopPropagation();let t=this.isDragging(),r=la(e),o=!r&&e.button!==0,a=this._rootElement,s=Ue(e),c=!r&&this._lastTouchEventTime&&this._lastTouchEventTime+mD>Date.now(),d=r?An(e):Tn(e);if(s&&s.draggable&&e.type==="mousedown"&&e.preventDefault(),t||o||c||d)return;if(this._handles.length){let x=a.style;this._rootElementTapHighlight=x.webkitTapHighlightColor||"",x.webkitTapHighlightColor="transparent"}this._hasMoved=!1,this._hasStartedDragging.set(this._hasMoved),this._removeListeners(),this._initialDomRect=this._rootElement.getBoundingClientRect(),this._pointerMoveSubscription=this._dragDropRegistry.pointerMove.subscribe(this._pointerMove),this._pointerUpSubscription=this._dragDropRegistry.pointerUp.subscribe(this._pointerUp),this._scrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(x=>this._updateOnScroll(x)),this._boundaryElement&&(this._boundaryRect=pu(this._boundaryElement));let m=this._previewTemplate;this._pickupPositionInElement=m&&m.template&&!m.matchSize?{x:0,y:0}:this._getPointerPositionInElement(this._initialDomRect,n,e);let p=this._pickupPositionOnPage=this._lastKnownPointerPosition=this._getPointerPositionOnPage(e);this._pointerDirectionDelta={x:0,y:0},this._pointerPositionAtLastDirectionChange={x:p.x,y:p.y},this._dragStartTime=Date.now(),this._dragDropRegistry.startDragging(this,e)}_cleanupDragArtifacts(n){Zg(this._rootElement,!0,i_),this._marker.parentNode.replaceChild(this._rootElement,this._marker),this._destroyPreview(),this._destroyPlaceholder(),this._initialDomRect=this._boundaryRect=this._previewRect=this._initialTransform=void 0,this._ngZone.run(()=>{let e=this._dropContainer,t=e.getItemIndex(this),r=this._getPointerPositionOnPage(n),o=this._getDragDistance(r),a=e._isOverContainer(r.x,r.y);this.ended.next({source:this,distance:o,dropPoint:r,event:n}),this.dropped.next({item:this,currentIndex:t,previousIndex:this._initialIndex,container:e,previousContainer:this._initialContainer,isPointerOverContainer:a,distance:o,dropPoint:r,event:n}),e.drop(this,t,this._initialIndex,this._initialContainer,a,o,r,n),this._dropContainer=this._initialContainer})}_updateActiveDropContainer({x:n,y:e},{x:t,y:r}){let o=this._initialContainer._getSiblingContainerFromPosition(this,n,e);!o&&this._dropContainer!==this._initialContainer&&this._initialContainer._isOverContainer(n,e)&&(o=this._initialContainer),o&&o!==this._dropContainer&&this._ngZone.run(()=>{let a=this._dropContainer.getItemIndex(this),s=this._dropContainer.getItemAtIndex(a+1)?.getVisibleElement()||null;this.exited.next({item:this,container:this._dropContainer}),this._dropContainer.exit(this),this._conditionallyInsertAnchor(o,this._dropContainer,s),this._dropContainer=o,this._dropContainer.enter(this,n,e,o===this._initialContainer&&o.sortingDisabled?this._initialIndex:void 0),this.entered.next({item:this,container:o,currentIndex:o.getItemIndex(this)})}),this.isDragging()&&(this._dropContainer._startScrollingIfNecessary(t,r),this._dropContainer._sortItem(this,n,e,this._pointerDirectionDelta),this.constrainPosition?this._applyPreviewTransform(n,e):this._applyPreviewTransform(n-this._pickupPositionInElement.x,e-this._pickupPositionInElement.y))}_animatePreviewToPlaceholder(){if(!this._hasMoved)return Promise.resolve();let n=this._placeholder.getBoundingClientRect();this._preview.addClass("cdk-drag-animating"),this._applyPreviewTransform(n.left,n.top);let e=this._preview.getTransitionDuration();return e===0?Promise.resolve():this._ngZone.runOutsideAngular(()=>new Promise(t=>{let r=s=>{(!s||this._preview&&Ue(s)===this._preview.element&&s.propertyName==="transform")&&(a(),t(),clearTimeout(o))},o=setTimeout(r,e*1.5),a=this._preview.addEventListener("transitionend",r)}))}_createPlaceholderElement(){let n=this._placeholderTemplate,e=n?n.template:null,t;return e?(this._placeholderRef=n.viewContainer.createEmbeddedView(e,n.context),this._placeholderRef.detectChanges(),t=c_(this._placeholderRef,this._document)):t=cu(this._rootElement),t.style.pointerEvents="none",t.classList.add(n_),t}_getPointerPositionInElement(n,e,t){let r=e===this._rootElement?null:e,o=r?r.getBoundingClientRect():n,a=la(t)?t.targetTouches[0]:t,s=this._getViewportScrollPosition(),c=a.pageX-o.left-s.left,d=a.pageY-o.top-s.top;return{x:o.left-n.left+c,y:o.top-n.top+d}}_getPointerPositionOnPage(n){let e=this._getViewportScrollPosition(),t=la(n)?n.touches[0]||n.changedTouches[0]||{pageX:0,pageY:0}:n,r=t.pageX-e.left,o=t.pageY-e.top;if(this._ownerSVGElement){let a=this._ownerSVGElement.getScreenCTM();if(a){let s=this._ownerSVGElement.createSVGPoint();return s.x=r,s.y=o,s.matrixTransform(a.inverse())}}return{x:r,y:o}}_getConstrainedPointerPosition(n){let e=this._dropContainer?this._dropContainer.lockAxis:null,{x:t,y:r}=this.constrainPosition?this.constrainPosition(n,this,this._initialDomRect,this._pickupPositionInElement):n;if(this.lockAxis==="x"||e==="x"?r=this._pickupPositionOnPage.y-(this.constrainPosition?this._pickupPositionInElement.y:0):(this.lockAxis==="y"||e==="y")&&(t=this._pickupPositionOnPage.x-(this.constrainPosition?this._pickupPositionInElement.x:0)),this._boundaryRect){let{x:o,y:a}=this.constrainPosition?{x:0,y:0}:this._pickupPositionInElement,s=this._boundaryRect,{width:c,height:d}=this._getPreviewRect(),m=s.top+a,p=s.bottom-(d-a),x=s.left+o,$=s.right-(c-o);t=r_(t,x,$),r=r_(r,m,p)}return{x:t,y:r}}_updatePointerDirectionDelta(n){let{x:e,y:t}=n,r=this._pointerDirectionDelta,o=this._pointerPositionAtLastDirectionChange,a=Math.abs(e-o.x),s=Math.abs(t-o.y);return a>this._config.pointerDirectionChangeThreshold&&(r.x=e>o.x?1:-1,o.x=e),s>this._config.pointerDirectionChangeThreshold&&(r.y=t>o.y?1:-1,o.y=t),r}_toggleNativeDragInteractions(){if(!this._rootElement||!this._handles)return;let n=this._handles.length>0||!this.isDragging();n!==this._nativeInteractionsEnabled&&(this._nativeInteractionsEnabled=n,Hr(this._rootElement,n))}_removeRootElementListeners(){this._rootElementCleanups?.forEach(n=>n()),this._rootElementCleanups=void 0}_applyRootElementTransform(n,e){let t=1/this.scale,r=da(n*t,e*t),o=this._rootElement.style;this._initialTransform==null&&(this._initialTransform=o.transform&&o.transform!="none"?o.transform:""),o.transform=Tl(r,this._initialTransform)}_applyPreviewTransform(n,e){let t=this._previewTemplate?.template?void 0:this._initialTransform,r=da(n,e);this._preview.setTransform(Tl(r,t))}_getDragDistance(n){let e=this._pickupPositionOnPage;return e?{x:n.x-e.x,y:n.y-e.y}:{x:0,y:0}}_cleanupCachedDimensions(){this._boundaryRect=this._previewRect=void 0,this._parentPositions.clear()}_containInsideBoundaryOnResize(){let{x:n,y:e}=this._passiveTransform;if(n===0&&e===0||this.isDragging()||!this._boundaryElement)return;let t=this._rootElement.getBoundingClientRect(),r=this._boundaryElement.getBoundingClientRect();if(r.width===0&&r.height===0||t.width===0&&t.height===0)return;let o=r.left-t.left,a=t.right-r.right,s=r.top-t.top,c=t.bottom-r.bottom;r.width>t.width?(o>0&&(n+=o),a>0&&(n-=a)):n=0,r.height>t.height?(s>0&&(e+=s),c>0&&(e-=c)):e=0,(n!==this._passiveTransform.x||e!==this._passiveTransform.y)&&this.setFreeDragPosition({y:e,x:n})}_getDragStartDelay(n){let e=this.dragStartDelay;return typeof e=="number"?e:la(n)?e.touch:e?e.mouse:0}_updateOnScroll(n){let e=this._parentPositions.handleScroll(n);if(e){let t=Ue(n);this._boundaryRect&&t!==this._boundaryElement&&t.contains(this._boundaryElement)&&ca(this._boundaryRect,e.top,e.left),this._pickupPositionOnPage.x+=e.left,this._pickupPositionOnPage.y+=e.top,this._dropContainer||(this._activeTransform.x-=e.left,this._activeTransform.y-=e.top,this._applyRootElementTransform(this._activeTransform.x,this._activeTransform.y))}}_getViewportScrollPosition(){return this._parentPositions.positions.get(this._document)?.scrollPosition||this._parentPositions.getViewportScrollPosition()}_getShadowRoot(){return this._cachedShadowRoot===void 0&&(this._cachedShadowRoot=xi(this._rootElement)),this._cachedShadowRoot}_getPreviewInsertionPoint(n,e){let t=this._previewContainer||"global";if(t==="parent")return n;if(t==="global"){let r=this._document;return e||r.fullscreenElement||r.webkitFullscreenElement||r.mozFullScreenElement||r.msFullscreenElement||r.body}return Ge(t)}_getPreviewRect(){return(!this._previewRect||!this._previewRect.width&&!this._previewRect.height)&&(this._previewRect=this._preview?this._preview.getBoundingClientRect():this._initialDomRect),this._previewRect}_nativeDragStart=n=>{if(this._handles.length){let e=this._getTargetHandle(n);e&&!this._disabledHandles.has(e)&&!this.disabled&&n.preventDefault()}else this.disabled||n.preventDefault()};_getTargetHandle(n){return this._handles.find(e=>n.target&&(n.target===e||e.contains(n.target)))}_conditionallyInsertAnchor(n,e,t){if(n===this._initialContainer)this._anchor?.remove(),this._anchor=null;else if(e===this._initialContainer&&e.hasAnchor){let r=this._anchor??=cu(this._placeholder);r.classList.remove(n_),r.classList.add("cdk-drag-anchor"),r.style.transform="",t?t.before(r):Ge(e.element).appendChild(r)}}};function r_(i,n,e){return Math.max(n,Math.min(e,i))}function la(i){return i.type[0]==="t"}function pD(i){i.preventDefault()}function kl(i,n,e){let t=o_(n,i.length-1),r=o_(e,i.length-1);if(t===r)return;let o=i[t],a=r<t?-1:1;for(let s=t;s!==r;s+=a)i[s]=i[s+a];i[r]=o}function o_(i,n){return Math.max(0,Math.min(n,i))}var Al=class{_dragDropRegistry;_element;_sortPredicate;_itemPositions=[];_activeDraggables;orientation="vertical";direction="ltr";constructor(n){this._dragDropRegistry=n}_previousSwap={drag:null,delta:0,overlaps:!1};start(n){this.withItems(n)}sort(n,e,t,r){let o=this._itemPositions,a=this._getItemIndexFromPointerPosition(n,e,t,r);if(a===-1&&o.length>0)return null;let s=this.orientation==="horizontal",c=o.findIndex(I=>I.drag===n),d=o[a],m=o[c].clientRect,p=d.clientRect,x=c>a?1:-1,$=this._getItemOffsetPx(m,p,x),X=this._getSiblingOffsetPx(c,o,x),J=o.slice();return kl(o,c,a),o.forEach((I,le)=>{if(J[le]===I)return;let ye=I.drag===n,Oe=ye?$:X,ke=ye?n.getPlaceholderElement():I.drag.getRootElement();I.offset+=Oe;let _e=Math.round(I.offset*(1/I.drag.scale));s?(ke.style.transform=Tl(`translate3d(${_e}px, 0, 0)`,I.initialTransform),ca(I.clientRect,0,Oe)):(ke.style.transform=Tl(`translate3d(0, ${_e}px, 0)`,I.initialTransform),ca(I.clientRect,Oe,0))}),this._previousSwap.overlaps=du(p,e,t),this._previousSwap.drag=d.drag,this._previousSwap.delta=s?r.x:r.y,{previousIndex:c,currentIndex:a}}enter(n,e,t,r){let o=this._activeDraggables,a=o.indexOf(n),s=n.getPlaceholderElement();a>-1&&o.splice(a,1);let c=r==null||r<0?this._getItemIndexFromPointerPosition(n,e,t):r,d=o[c];if(d===n&&(d=o[c+1]),!d&&(c==null||c===-1||c<o.length-1)&&this._shouldEnterAsFirstChild(e,t)&&(d=o[0]),d&&!this._dragDropRegistry.isDragging(d)){let m=d.getRootElement();m.parentElement.insertBefore(s,m),o.splice(c,0,n)}else this._element.appendChild(s),o.push(n);s.style.transform="",this._cacheItemPositions()}withItems(n){this._activeDraggables=n.slice(),this._cacheItemPositions()}withSortPredicate(n){this._sortPredicate=n}reset(){this._activeDraggables?.forEach(n=>{let e=n.getRootElement();if(e){let t=this._itemPositions.find(r=>r.drag===n)?.initialTransform;e.style.transform=t||""}}),this._itemPositions=[],this._activeDraggables=[],this._previousSwap.drag=null,this._previousSwap.delta=0,this._previousSwap.overlaps=!1}getActiveItemsSnapshot(){return this._activeDraggables}getItemIndex(n){return this._getVisualItemPositions().findIndex(e=>e.drag===n)}getItemAtIndex(n){return this._getVisualItemPositions()[n]?.drag||null}updateOnScroll(n,e){this._itemPositions.forEach(({clientRect:t})=>{ca(t,n,e)}),this._itemPositions.forEach(({drag:t})=>{this._dragDropRegistry.isDragging(t)&&t._sortFromLastPointerPosition()})}withElementContainer(n){this._element=n}_cacheItemPositions(){let n=this.orientation==="horizontal";this._itemPositions=this._activeDraggables.map(e=>{let t=e.getVisibleElement();return{drag:e,offset:0,initialTransform:t.style.transform||"",clientRect:pu(t)}}).sort((e,t)=>n?e.clientRect.left-t.clientRect.left:e.clientRect.top-t.clientRect.top)}_getVisualItemPositions(){return this.orientation==="horizontal"&&this.direction==="rtl"?this._itemPositions.slice().reverse():this._itemPositions}_getItemOffsetPx(n,e,t){let r=this.orientation==="horizontal",o=r?e.left-n.left:e.top-n.top;return t===-1&&(o+=r?e.width-n.width:e.height-n.height),o}_getSiblingOffsetPx(n,e,t){let r=this.orientation==="horizontal",o=e[n].clientRect,a=e[n+t*-1],s=o[r?"width":"height"]*t;if(a){let c=r?"left":"top",d=r?"right":"bottom";t===-1?s-=a.clientRect[c]-o[d]:s+=o[c]-a.clientRect[d]}return s}_shouldEnterAsFirstChild(n,e){if(!this._activeDraggables.length)return!1;let t=this._itemPositions,r=this.orientation==="horizontal";if(t[0].drag!==this._activeDraggables[0]){let a=t[t.length-1].clientRect;return r?n>=a.right:e>=a.bottom}else{let a=t[0].clientRect;return r?n<=a.left:e<=a.top}}_getItemIndexFromPointerPosition(n,e,t,r){let o=this.orientation==="horizontal",a=this._itemPositions.findIndex(({drag:s,clientRect:c})=>{if(s===n)return!1;if(r){let d=o?r.x:r.y;if(s===this._previousSwap.drag&&this._previousSwap.overlaps&&d===this._previousSwap.delta)return!1}return o?e>=Math.floor(c.left)&&e<Math.floor(c.right):t>=Math.floor(c.top)&&t<Math.floor(c.bottom)});return a===-1||!this._sortPredicate(a,n)?-1:a}},mu=class{_document;_dragDropRegistry;_element;_sortPredicate;_rootNode;_activeItems;_previousSwap={drag:null,deltaX:0,deltaY:0,overlaps:!1};_relatedNodes=[];constructor(n,e){this._document=n,this._dragDropRegistry=e}start(n){let e=this._element.childNodes;this._relatedNodes=[];for(let t=0;t<e.length;t++){let r=e[t];this._relatedNodes.push([r,r.nextSibling])}this.withItems(n)}sort(n,e,t,r){let o=this._getItemIndexFromPointerPosition(n,e,t),a=this._previousSwap;if(o===-1||this._activeItems[o]===n)return null;let s=this._activeItems[o];if(a.drag===s&&a.overlaps&&a.deltaX===r.x&&a.deltaY===r.y)return null;let c=this.getItemIndex(n),d=n.getPlaceholderElement(),m=s.getRootElement();o>c?m.after(d):m.before(d),kl(this._activeItems,c,o);let p=this._getRootNode().elementFromPoint(e,t);return a.deltaX=r.x,a.deltaY=r.y,a.drag=s,a.overlaps=m===p||m.contains(p),{previousIndex:c,currentIndex:o}}enter(n,e,t,r){let o=this._activeItems.indexOf(n);o>-1&&this._activeItems.splice(o,1);let a=r==null||r<0?this._getItemIndexFromPointerPosition(n,e,t):r;a===-1&&(a=this._getClosestItemIndexToPointer(n,e,t));let s=this._activeItems[a];s&&!this._dragDropRegistry.isDragging(s)?(this._activeItems.splice(a,0,n),s.getRootElement().before(n.getPlaceholderElement())):(this._activeItems.push(n),this._element.appendChild(n.getPlaceholderElement()))}withItems(n){this._activeItems=n.slice()}withSortPredicate(n){this._sortPredicate=n}reset(){let n=this._element,e=this._previousSwap;for(let t=this._relatedNodes.length-1;t>-1;t--){let[r,o]=this._relatedNodes[t];r.parentNode===n&&r.nextSibling!==o&&(o===null?n.appendChild(r):o.parentNode===n&&n.insertBefore(r,o))}this._relatedNodes=[],this._activeItems=[],e.drag=null,e.deltaX=e.deltaY=0,e.overlaps=!1}getActiveItemsSnapshot(){return this._activeItems}getItemIndex(n){return this._activeItems.indexOf(n)}getItemAtIndex(n){return this._activeItems[n]||null}updateOnScroll(){this._activeItems.forEach(n=>{this._dragDropRegistry.isDragging(n)&&n._sortFromLastPointerPosition()})}withElementContainer(n){n!==this._element&&(this._element=n,this._rootNode=void 0)}_getItemIndexFromPointerPosition(n,e,t){let r=this._getRootNode().elementFromPoint(Math.floor(e),Math.floor(t)),o=r?this._activeItems.findIndex(a=>{let s=a.getRootElement();return r===s||s.contains(r)}):-1;return o===-1||!this._sortPredicate(o,n)?-1:o}_getRootNode(){return this._rootNode||(this._rootNode=xi(this._element)||this._document),this._rootNode}_getClosestItemIndexToPointer(n,e,t){if(this._activeItems.length===0)return-1;if(this._activeItems.length===1)return 0;let r=1/0,o=-1;for(let a=0;a<this._activeItems.length;a++){let s=this._activeItems[a];if(s!==n){let{x:c,y:d}=s.getRootElement().getBoundingClientRect(),m=Math.hypot(e-c,t-d);m<r&&(r=m,o=a)}}return o}},a_=.05,d_=.05,jt=(function(i){return i[i.NONE=0]="NONE",i[i.UP=1]="UP",i[i.DOWN=2]="DOWN",i})(jt||{}),gt=(function(i){return i[i.NONE=0]="NONE",i[i.LEFT=1]="LEFT",i[i.RIGHT=2]="RIGHT",i})(gt||{});function gD(i,n){return new fu(n,i.get(_u),i.get(N),i.get(z),i.get(Nt))}var fu=class{_dragDropRegistry;_ngZone;_viewportRuler;element;disabled=!1;sortingDisabled=!1;lockAxis=null;autoScrollDisabled=!1;autoScrollStep=2;hasAnchor=!1;enterPredicate=()=>!0;sortPredicate=()=>!0;beforeStarted=new y;entered=new y;exited=new y;dropped=new y;sorted=new y;receivingStarted=new y;receivingStopped=new y;data;_container;_isDragging=!1;_parentPositions;_sortStrategy;_domRect;_draggables=[];_siblings=[];_activeSiblings=new Set;_viewportScrollSubscription=Ie.EMPTY;_verticalScrollDirection=jt.NONE;_horizontalScrollDirection=gt.NONE;_scrollNode;_stopScrollTimers=new y;_cachedShadowRoot=null;_document;_scrollableElements=[];_initialScrollSnap;_direction="ltr";constructor(n,e,t,r,o){this._dragDropRegistry=e,this._ngZone=r,this._viewportRuler=o;let a=this.element=Ge(n);this._document=t,this.withOrientation("vertical").withElementContainer(a),e.registerDropContainer(this),this._parentPositions=new Il(t)}dispose(){this._stopScrolling(),this._stopScrollTimers.complete(),this._viewportScrollSubscription.unsubscribe(),this.beforeStarted.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this.sorted.complete(),this.receivingStarted.complete(),this.receivingStopped.complete(),this._activeSiblings.clear(),this._scrollNode=null,this._parentPositions.clear(),this._dragDropRegistry.removeDropContainer(this)}isDragging(){return this._isDragging}start(){this._draggingStarted(),this._notifyReceivingSiblings()}enter(n,e,t,r){this._draggingStarted(),r==null&&this.sortingDisabled&&(r=this._draggables.indexOf(n)),this._sortStrategy.enter(n,e,t,r),this._cacheParentPositions(),this._notifyReceivingSiblings(),this.entered.next({item:n,container:this,currentIndex:this.getItemIndex(n)})}exit(n){this._reset(),this.exited.next({item:n,container:this})}drop(n,e,t,r,o,a,s,c={}){this._reset(),this.dropped.next({item:n,currentIndex:e,previousIndex:t,container:this,previousContainer:r,isPointerOverContainer:o,distance:a,dropPoint:s,event:c})}withItems(n){let e=this._draggables;return this._draggables=n,n.forEach(t=>t._withDropContainer(this)),this.isDragging()&&(e.filter(r=>r.isDragging()).every(r=>n.indexOf(r)===-1)?this._reset():this._sortStrategy.withItems(this._draggables)),this}withDirection(n){return this._direction=n,this._sortStrategy instanceof Al&&(this._sortStrategy.direction=n),this}connectedTo(n){return this._siblings=n.slice(),this}withOrientation(n){if(n==="mixed")this._sortStrategy=new mu(this._document,this._dragDropRegistry);else{let e=new Al(this._dragDropRegistry);e.direction=this._direction,e.orientation=n,this._sortStrategy=e}return this._sortStrategy.withElementContainer(this._container),this._sortStrategy.withSortPredicate((e,t)=>this.sortPredicate(e,t,this)),this}withScrollableParents(n){let e=this._container;return this._scrollableElements=n.indexOf(e)===-1?[e,...n]:n.slice(),this}withElementContainer(n){if(n===this._container)return this;let e=Ge(this.element),t=this._scrollableElements.indexOf(this._container),r=this._scrollableElements.indexOf(n);return t>-1&&this._scrollableElements.splice(t,1),r>-1&&this._scrollableElements.splice(r,1),this._sortStrategy&&this._sortStrategy.withElementContainer(n),this._cachedShadowRoot=null,this._scrollableElements.unshift(n),this._container=n,this}getScrollableParents(){return this._scrollableElements}getItemIndex(n){return this._isDragging?this._sortStrategy.getItemIndex(n):this._draggables.indexOf(n)}getItemAtIndex(n){return this._isDragging?this._sortStrategy.getItemAtIndex(n):this._draggables[n]||null}isReceiving(){return this._activeSiblings.size>0}_sortItem(n,e,t,r){if(this.sortingDisabled||!this._domRect||!Kg(this._domRect,a_,e,t))return;let o=this._sortStrategy.sort(n,e,t,r);o&&this.sorted.next({previousIndex:o.previousIndex,currentIndex:o.currentIndex,container:this,item:n})}_startScrollingIfNecessary(n,e){if(this.autoScrollDisabled)return;let t,r=jt.NONE,o=gt.NONE;if(this._parentPositions.positions.forEach((a,s)=>{s===this._document||!a.clientRect||t||Kg(a.clientRect,a_,n,e)&&([r,o]=_D(s,a.clientRect,this._direction,n,e),(r||o)&&(t=s))}),!r&&!o){let{width:a,height:s}=this._viewportRuler.getViewportSize(),c={width:a,height:s,top:0,right:a,bottom:s,left:0};r=u_(c,e),o=h_(c,n),t=window}t&&(r!==this._verticalScrollDirection||o!==this._horizontalScrollDirection||t!==this._scrollNode)&&(this._verticalScrollDirection=r,this._horizontalScrollDirection=o,this._scrollNode=t,(r||o)&&t?this._ngZone.runOutsideAngular(this._startScrollInterval):this._stopScrolling())}_stopScrolling(){this._stopScrollTimers.next()}_draggingStarted(){let n=this._container.style;this.beforeStarted.next(),this._isDragging=!0,this._initialScrollSnap=n.msScrollSnapType||n.scrollSnapType||"",n.scrollSnapType=n.msScrollSnapType="none",this._sortStrategy.start(this._draggables),this._cacheParentPositions(),this._viewportScrollSubscription.unsubscribe(),this._listenToScrollEvents()}_cacheParentPositions(){this._parentPositions.cache(this._scrollableElements),this._domRect=this._parentPositions.positions.get(this._container).clientRect}_reset(){this._isDragging=!1;let n=this._container.style;n.scrollSnapType=n.msScrollSnapType=this._initialScrollSnap,this._siblings.forEach(e=>e._stopReceiving(this)),this._sortStrategy.reset(),this._stopScrolling(),this._viewportScrollSubscription.unsubscribe(),this._parentPositions.clear()}_startScrollInterval=()=>{this._stopScrolling(),Zu(0,Wl).pipe(ue(this._stopScrollTimers)).subscribe(()=>{let n=this._scrollNode,e=this.autoScrollStep;this._verticalScrollDirection===jt.UP?n.scrollBy(0,-e):this._verticalScrollDirection===jt.DOWN&&n.scrollBy(0,e),this._horizontalScrollDirection===gt.LEFT?n.scrollBy(-e,0):this._horizontalScrollDirection===gt.RIGHT&&n.scrollBy(e,0)})};_isOverContainer(n,e){return this._domRect!=null&&du(this._domRect,n,e)}_getSiblingContainerFromPosition(n,e,t){return this._siblings.find(r=>r._canReceive(n,e,t))}_canReceive(n,e,t){if(!this._domRect||!du(this._domRect,e,t)||!this.enterPredicate(n,this))return!1;let r=this._getShadowRoot().elementFromPoint(e,t);return r?r===this._container||this._container.contains(r):!1}_startReceiving(n,e){let t=this._activeSiblings;!t.has(n)&&e.every(r=>this.enterPredicate(r,this)||this._draggables.indexOf(r)>-1)&&(t.add(n),this._cacheParentPositions(),this._listenToScrollEvents(),this.receivingStarted.next({initiator:n,receiver:this,items:e}))}_stopReceiving(n){this._activeSiblings.delete(n),this._viewportScrollSubscription.unsubscribe(),this.receivingStopped.next({initiator:n,receiver:this})}_listenToScrollEvents(){this._viewportScrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(n=>{if(this.isDragging()){let e=this._parentPositions.handleScroll(n);e&&this._sortStrategy.updateOnScroll(e.top,e.left)}else this.isReceiving()&&this._cacheParentPositions()})}_getShadowRoot(){if(!this._cachedShadowRoot){let n=xi(this._container);this._cachedShadowRoot=n||this._document}return this._cachedShadowRoot}_notifyReceivingSiblings(){let n=this._sortStrategy.getActiveItemsSnapshot().filter(e=>e.isDragging());this._siblings.forEach(e=>e._startReceiving(this,n))}};function u_(i,n){let{top:e,bottom:t,height:r}=i,o=r*d_;return n>=e-o&&n<=e+o?jt.UP:n>=t-o&&n<=t+o?jt.DOWN:jt.NONE}function h_(i,n){let{left:e,right:t,width:r}=i,o=r*d_;return n>=e-o&&n<=e+o?gt.LEFT:n>=t-o&&n<=t+o?gt.RIGHT:gt.NONE}function _D(i,n,e,t,r){let o=u_(n,r),a=h_(n,t),s=jt.NONE,c=gt.NONE;if(o){let d=i.scrollTop;o===jt.UP?d>0&&(s=jt.UP):i.scrollHeight-d>i.clientHeight&&(s=jt.DOWN)}if(a){let d=i.scrollLeft;e==="rtl"?a===gt.RIGHT?d<0&&(c=gt.RIGHT):i.scrollWidth+d>i.clientWidth&&(c=gt.LEFT):a===gt.LEFT?d>0&&(c=gt.LEFT):i.scrollWidth-d>i.clientWidth&&(c=gt.RIGHT)}return[s,c]}var s_=new b("CDK_DRAG_PARENT");var vD=new b("CdkDragHandle");var m_=new b("CDK_DRAG_CONFIG"),f_=new b("CdkDropList"),p_=(()=>{class i{element=l(P);dropContainer=l(f_,{optional:!0,skipSelf:!0});_ngZone=l(z);_viewContainerRef=l(lt);_dir=l($e,{optional:!0});_changeDetectorRef=l(oe);_selfHandle=l(vD,{optional:!0,self:!0});_parentDrag=l(s_,{optional:!0,skipSelf:!0});_dragDropRegistry=l(_u);_destroyed=new y;_handles=new je([]);_previewTemplate=null;_placeholderTemplate=null;_dragRef;data;lockAxis=null;rootElementSelector;boundaryElement;dragStartDelay;freeDragPosition;get disabled(){return this._disabled||!!(this.dropContainer&&this.dropContainer.disabled)}set disabled(e){this._disabled=e,this._dragRef.disabled=this._disabled}_disabled=!1;constrainPosition;previewClass;previewContainer;scale=1;started=new j;released=new j;ended=new j;entered=new j;exited=new j;dropped=new j;moved=new at(e=>{let t=this._dragRef.moved.pipe(K(r=>({source:this,pointerPosition:r.pointerPosition,event:r.event,delta:r.delta,distance:r.distance}))).subscribe(e);return()=>{t.unsubscribe()}});_injector=l(H);constructor(){let e=this.dropContainer,t=l(m_,{optional:!0});this._dragRef=fD(this._injector,this.element,{dragStartThreshold:t&&t.dragStartThreshold!=null?t.dragStartThreshold:5,pointerDirectionChangeThreshold:t&&t.pointerDirectionChangeThreshold!=null?t.pointerDirectionChangeThreshold:5,zIndex:t?.zIndex}),this._dragRef.data=this,this._dragDropRegistry.registerDirectiveNode(this.element.nativeElement,this),t&&this._assignDefaults(t),e&&(e.addItem(this),e._dropListRef.beforeStarted.pipe(ue(this._destroyed)).subscribe(()=>{this._dragRef.scale=this.scale})),this._syncInputs(this._dragRef),this._handleEvents(this._dragRef)}getPlaceholderElement(){return this._dragRef.getPlaceholderElement()}getRootElement(){return this._dragRef.getRootElement()}reset(){this._dragRef.reset()}resetToBoundary(){this._dragRef.resetToBoundary()}getFreeDragPosition(){return this._dragRef.getFreeDragPosition()}setFreeDragPosition(e){this._dragRef.setFreeDragPosition(e)}ngAfterViewInit(){ze(()=>{this._updateRootElement(),this._setupHandlesListener(),this._dragRef.scale=this.scale,this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)},{injector:this._injector})}ngOnChanges(e){let t=e.rootElementSelector,r=e.freeDragPosition;t&&!t.firstChange&&this._updateRootElement(),this._dragRef.scale=this.scale,r&&!r.firstChange&&this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)}ngOnDestroy(){this.dropContainer&&this.dropContainer.removeItem(this),this._dragDropRegistry.removeDirectiveNode(this.element.nativeElement),this._ngZone.runOutsideAngular(()=>{this._handles.complete(),this._destroyed.next(),this._destroyed.complete(),this._dragRef.dispose()})}_addHandle(e){let t=this._handles.getValue();t.push(e),this._handles.next(t)}_removeHandle(e){let t=this._handles.getValue(),r=t.indexOf(e);r>-1&&(t.splice(r,1),this._handles.next(t))}_setPreviewTemplate(e){this._previewTemplate=e}_resetPreviewTemplate(e){e===this._previewTemplate&&(this._previewTemplate=null)}_setPlaceholderTemplate(e){this._placeholderTemplate=e}_resetPlaceholderTemplate(e){e===this._placeholderTemplate&&(this._placeholderTemplate=null)}_updateRootElement(){let e=this.element.nativeElement,t=e;this.rootElementSelector&&(t=e.closest!==void 0?e.closest(this.rootElementSelector):e.parentElement?.closest(this.rootElementSelector)),this._dragRef.withRootElement(t||e)}_getBoundaryElement(){let e=this.boundaryElement;return e?typeof e=="string"?this.element.nativeElement.closest(e):Ge(e):null}_syncInputs(e){e.beforeStarted.subscribe(()=>{if(!e.isDragging()){let t=this._dir,r=this.dragStartDelay,o=this._placeholderTemplate?{template:this._placeholderTemplate.templateRef,context:this._placeholderTemplate.data,viewContainer:this._viewContainerRef}:null,a=this._previewTemplate?{template:this._previewTemplate.templateRef,context:this._previewTemplate.data,matchSize:this._previewTemplate.matchSize,viewContainer:this._viewContainerRef}:null;e.disabled=this.disabled,e.lockAxis=this.lockAxis,e.scale=this.scale,e.dragStartDelay=typeof r=="object"&&r?r:Ft(r),e.constrainPosition=this.constrainPosition,e.previewClass=this.previewClass,e.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(o).withPreviewTemplate(a).withPreviewContainer(this.previewContainer||"global"),t&&e.withDirection(t.value)}}),e.beforeStarted.pipe(xe(1)).subscribe(()=>{if(this._parentDrag){e.withParent(this._parentDrag._dragRef);return}let t=this.element.nativeElement.parentElement;for(;t;){let r=this._dragDropRegistry.getDragDirectiveForNode(t);if(r){e.withParent(r._dragRef);break}t=t.parentElement}})}_handleEvents(e){e.started.subscribe(t=>{this.started.emit({source:this,event:t.event}),this._changeDetectorRef.markForCheck()}),e.released.subscribe(t=>{this.released.emit({source:this,event:t.event})}),e.ended.subscribe(t=>{this.ended.emit({source:this,distance:t.distance,dropPoint:t.dropPoint,event:t.event}),this._changeDetectorRef.markForCheck()}),e.entered.subscribe(t=>{this.entered.emit({container:t.container.data,item:this,currentIndex:t.currentIndex})}),e.exited.subscribe(t=>{this.exited.emit({container:t.container.data,item:this})}),e.dropped.subscribe(t=>{this.dropped.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,previousContainer:t.previousContainer.data,container:t.container.data,isPointerOverContainer:t.isPointerOverContainer,item:this,distance:t.distance,dropPoint:t.dropPoint,event:t.event})})}_assignDefaults(e){let{lockAxis:t,dragStartDelay:r,constrainPosition:o,previewClass:a,boundaryElement:s,draggingDisabled:c,rootElementSelector:d,previewContainer:m}=e;this.disabled=c??!1,this.dragStartDelay=r||0,this.lockAxis=t||null,o&&(this.constrainPosition=o),a&&(this.previewClass=a),s&&(this.boundaryElement=s),d&&(this.rootElementSelector=d),m&&(this.previewContainer=m)}_setupHandlesListener(){this._handles.pipe(Qe(e=>{let t=e.map(r=>r.element);this._selfHandle&&this.rootElementSelector&&t.push(this.element),this._dragRef.withHandles(t)}),Re(e=>dt(...e.map(t=>t._stateChanges.pipe(We(t))))),ue(this._destroyed)).subscribe(e=>{let t=this._dragRef,r=e.element.nativeElement;e.disabled?t.disableHandle(r):t.enableHandle(r)})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=R({type:i,selectors:[["","cdkDrag",""]],hostAttrs:[1,"cdk-drag"],hostVars:4,hostBindings:function(t,r){t&2&&A("cdk-drag-disabled",r.disabled)("cdk-drag-dragging",r._dragRef.isDragging())},inputs:{data:[0,"cdkDragData","data"],lockAxis:[0,"cdkDragLockAxis","lockAxis"],rootElementSelector:[0,"cdkDragRootElement","rootElementSelector"],boundaryElement:[0,"cdkDragBoundary","boundaryElement"],dragStartDelay:[0,"cdkDragStartDelay","dragStartDelay"],freeDragPosition:[0,"cdkDragFreeDragPosition","freeDragPosition"],disabled:[2,"cdkDragDisabled","disabled",F],constrainPosition:[0,"cdkDragConstrainPosition","constrainPosition"],previewClass:[0,"cdkDragPreviewClass","previewClass"],previewContainer:[0,"cdkDragPreviewContainer","previewContainer"],scale:[2,"cdkDragScale","scale",It]},outputs:{started:"cdkDragStarted",released:"cdkDragReleased",ended:"cdkDragEnded",entered:"cdkDragEntered",exited:"cdkDragExited",dropped:"cdkDragDropped",moved:"cdkDragMoved"},exportAs:["cdkDrag"],features:[Pe([{provide:s_,useExisting:i}]),Le]})}return i})(),l_=new b("CdkDropListGroup");var g_=(()=>{class i{element=l(P);_changeDetectorRef=l(oe);_scrollDispatcher=l(sn);_dir=l($e,{optional:!0});_group=l(l_,{optional:!0,skipSelf:!0});_latestSortedRefs;_destroyed=new y;_scrollableParentsResolved=!1;static _dropLists=[];_dropListRef;connectedTo=[];data;orientation="vertical";id=l(ve).getId("cdk-drop-list-");lockAxis=null;get disabled(){return this._disabled||!!this._group&&this._group.disabled}set disabled(e){this._dropListRef.disabled=this._disabled=e}_disabled=!1;sortingDisabled=!1;enterPredicate=()=>!0;sortPredicate=()=>!0;autoScrollDisabled=!1;autoScrollStep;elementContainerSelector=null;hasAnchor=!1;dropped=new j;entered=new j;exited=new j;sorted=new j;_unsortedItems=new Set;constructor(){let e=l(m_,{optional:!0}),t=l(H);this._dropListRef=gD(t,this.element),this._dropListRef.data=this,e&&this._assignDefaults(e),this._dropListRef.enterPredicate=(r,o)=>this.enterPredicate(r.data,o.data),this._dropListRef.sortPredicate=(r,o,a)=>this.sortPredicate(r,o.data,a.data),this._setupInputSyncSubscription(this._dropListRef),this._handleEvents(this._dropListRef),i._dropLists.push(this),this._group&&this._group._items.add(this)}addItem(e){this._unsortedItems.add(e),e._dragRef._withDropContainer(this._dropListRef),this._dropListRef.isDragging()&&this._syncItemsWithRef(this.getSortedItems().map(t=>t._dragRef))}removeItem(e){if(this._unsortedItems.delete(e),this._latestSortedRefs){let t=this._latestSortedRefs.indexOf(e._dragRef);t>-1&&(this._latestSortedRefs.splice(t,1),this._syncItemsWithRef(this._latestSortedRefs))}}getSortedItems(){return Array.from(this._unsortedItems).sort((e,t)=>e._dragRef.getVisibleElement().compareDocumentPosition(t._dragRef.getVisibleElement())&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)}ngOnDestroy(){let e=i._dropLists.indexOf(this);e>-1&&i._dropLists.splice(e,1),this._group&&this._group._items.delete(this),this._latestSortedRefs=void 0,this._unsortedItems.clear(),this._dropListRef.dispose(),this._destroyed.next(),this._destroyed.complete()}_setupInputSyncSubscription(e){this._dir&&this._dir.change.pipe(We(this._dir.value),ue(this._destroyed)).subscribe(t=>e.withDirection(t)),e.beforeStarted.subscribe(()=>{let t=$n(this.connectedTo).map(r=>{if(typeof r=="string"){let o=i._dropLists.find(a=>a.id===r);return o}return r});if(this._group&&this._group._items.forEach(r=>{t.indexOf(r)===-1&&t.push(r)}),!this._scrollableParentsResolved){let r=this._scrollDispatcher.getAncestorScrollContainers(this.element).map(o=>o.getElementRef().nativeElement);this._dropListRef.withScrollableParents(r),this._scrollableParentsResolved=!0}if(this.elementContainerSelector){let r=this.element.nativeElement.querySelector(this.elementContainerSelector);e.withElementContainer(r)}e.disabled=this.disabled,e.lockAxis=this.lockAxis,e.sortingDisabled=this.sortingDisabled,e.autoScrollDisabled=this.autoScrollDisabled,e.autoScrollStep=Ft(this.autoScrollStep,2),e.hasAnchor=this.hasAnchor,e.connectedTo(t.filter(r=>r&&r!==this).map(r=>r._dropListRef)).withOrientation(this.orientation)})}_handleEvents(e){e.beforeStarted.subscribe(()=>{this._syncItemsWithRef(this.getSortedItems().map(t=>t._dragRef)),this._changeDetectorRef.markForCheck()}),e.entered.subscribe(t=>{this.entered.emit({container:this,item:t.item.data,currentIndex:t.currentIndex})}),e.exited.subscribe(t=>{this.exited.emit({container:this,item:t.item.data}),this._changeDetectorRef.markForCheck()}),e.sorted.subscribe(t=>{this.sorted.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,container:this,item:t.item.data})}),e.dropped.subscribe(t=>{this.dropped.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,previousContainer:t.previousContainer.data,container:t.container.data,item:t.item.data,isPointerOverContainer:t.isPointerOverContainer,distance:t.distance,dropPoint:t.dropPoint,event:t.event}),this._changeDetectorRef.markForCheck()}),dt(e.receivingStarted,e.receivingStopped).subscribe(()=>this._changeDetectorRef.markForCheck())}_assignDefaults(e){let{lockAxis:t,draggingDisabled:r,sortingDisabled:o,listAutoScrollDisabled:a,listOrientation:s}=e;this.disabled=r??!1,this.sortingDisabled=o??!1,this.autoScrollDisabled=a??!1,this.orientation=s||"vertical",this.lockAxis=t||null}_syncItemsWithRef(e){this._latestSortedRefs=e,this._dropListRef.withItems(e)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=R({type:i,selectors:[["","cdkDropList",""],["cdk-drop-list"]],hostAttrs:[1,"cdk-drop-list"],hostVars:7,hostBindings:function(t,r){t&2&&(Z("id",r.id),A("cdk-drop-list-disabled",r.disabled)("cdk-drop-list-dragging",r._dropListRef.isDragging())("cdk-drop-list-receiving",r._dropListRef.isReceiving()))},inputs:{connectedTo:[0,"cdkDropListConnectedTo","connectedTo"],data:[0,"cdkDropListData","data"],orientation:[0,"cdkDropListOrientation","orientation"],id:"id",lockAxis:[0,"cdkDropListLockAxis","lockAxis"],disabled:[2,"cdkDropListDisabled","disabled",F],sortingDisabled:[2,"cdkDropListSortingDisabled","sortingDisabled",F],enterPredicate:[0,"cdkDropListEnterPredicate","enterPredicate"],sortPredicate:[0,"cdkDropListSortPredicate","sortPredicate"],autoScrollDisabled:[2,"cdkDropListAutoScrollDisabled","autoScrollDisabled",F],autoScrollStep:[0,"cdkDropListAutoScrollStep","autoScrollStep"],elementContainerSelector:[0,"cdkDropListElementContainer","elementContainerSelector"],hasAnchor:[2,"cdkDropListHasAnchor","hasAnchor",F]},outputs:{dropped:"cdkDropListDropped",entered:"cdkDropListEntered",exited:"cdkDropListExited",sorted:"cdkDropListSorted"},exportAs:["cdkDropList"],features:[Pe([{provide:l_,useValue:void 0},{provide:f_,useExisting:i}])]})}return i})();var vu=class{_box;_destroyed=new y;_resizeSubject=new y;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new at(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),t.unsubscribe(),this._elementObservables.delete(n)}}).pipe(pe(e=>e.some(t=>t.target===n)),Ql({bufferSize:1,refCount:!0}),ue(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},__=(()=>{class i{_cleanupErrorListener;_observers=new Map;_ngZone=l(z);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let r=t?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new vu(r)),this._observers.get(r).observe(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var bD=["notch"],yD=["matFormFieldNotchedOutline",""],wD=["*"],v_=["iconPrefixContainer"],b_=["textPrefixContainer"],y_=["iconSuffixContainer"],w_=["textSuffixContainer"],CD=["textField"],DD=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],SD=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function xD(i,n){i&1&&Y(0,"span",21)}function MD(i,n){if(i&1&&(u(0,"label",20),Q(1,1),W(2,xD,1,0,"span",21),h()),i&2){let e=T(2);D("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),Z("for",e._control.disableAutomaticLabeling?null:e._control.id),f(2),q(!e.hideRequiredMarker&&e._control.required?2:-1)}}function ED(i,n){if(i&1&&W(0,MD,3,5,"label",20),i&2){let e=T();q(e._hasFloatingLabel()?0:-1)}}function RD(i,n){i&1&&Y(0,"div",7)}function ID(i,n){}function TD(i,n){if(i&1&&ge(0,ID,0,0,"ng-template",13),i&2){T(2);let e=ht(1);D("ngTemplateOutlet",e)}}function AD(i,n){if(i&1&&(u(0,"div",9),W(1,TD,1,1,null,13),h()),i&2){let e=T();D("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),f(),q(e._forceDisplayInfixLabel()?-1:1)}}function kD(i,n){i&1&&(u(0,"div",10,2),Q(2,2),h())}function PD(i,n){i&1&&(u(0,"div",11,3),Q(2,3),h())}function OD(i,n){}function FD(i,n){if(i&1&&ge(0,OD,0,0,"ng-template",13),i&2){T();let e=ht(1);D("ngTemplateOutlet",e)}}function ND(i,n){i&1&&(u(0,"div",14,4),Q(2,4),h())}function LD(i,n){i&1&&(u(0,"div",15,5),Q(2,5),h())}function BD(i,n){i&1&&Y(0,"div",16)}function VD(i,n){i&1&&(u(0,"div",18),Q(1,6),h())}function jD(i,n){if(i&1&&(u(0,"mat-hint",22),g(1),h()),i&2){let e=T(2);D("id",e._hintLabelId),f(),he(e.hintLabel)}}function zD(i,n){if(i&1&&(u(0,"div",19),W(1,jD,2,2,"mat-hint",22),Q(2,7),Y(3,"div",23),Q(4,8),h()),i&2){let e=T();f(),q(e.hintLabel?1:-1)}}var ua=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=R({type:i,selectors:[["mat-label"]]})}return i})(),HD=new b("MatError");var ha=(()=>{class i{align="start";id=l(ve).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||i)};static \u0275dir=R({type:i,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,r){t&2&&(Rt("id",r.id),Z("align",null),A("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return i})(),UD=new b("MatPrefix");var GD=new b("MatSuffix");var R_=new b("FloatingLabelParent"),C_=(()=>{class i{_elementRef=l(P);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=l(__);_ngZone=l(z);_parent=l(R_);_resizeSubscription=new Ie;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return $D(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=R({type:i,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,r){t&2&&A("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return i})();function $D(i){let n=i;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var D_="mdc-line-ripple--active",Pl="mdc-line-ripple--deactivating",S_=(()=>{class i{_elementRef=l(P);_cleanupTransitionEnd;constructor(){let e=l(z),t=l(de);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Pl),e.add(D_)}deactivate(){this._elementRef.nativeElement.classList.add(Pl)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,r=t.contains(Pl);e.propertyName==="opacity"&&r&&t.remove(D_,Pl)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=R({type:i,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return i})(),x_=(()=>{class i{_elementRef=l(P);_ngZone=l(z);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=w({type:i,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,r){if(t&1&&Xe(bD,5),t&2){let o;ee(o=te())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,r){t&2&&A("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:yD,ngContentSelectors:wD,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,r){t&1&&(De(),Ve(0,"div",1),Be(1,"div",2,0),Q(3),qe(),Ve(4,"div",3))},encapsulation:2,changeDetection:0})}return i})(),ma=(()=>{class i{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||i)};static \u0275dir=R({type:i})}return i})();var fa=new b("MatFormField"),WD=new b("MAT_FORM_FIELD_DEFAULT_OPTIONS"),M_="fill",qD="auto",E_="fixed",YD="translateY(-50%)",Ol=(()=>{class i{_elementRef=l(P);_changeDetectorRef=l(oe);_platform=l(me);_idGenerator=l(ve);_ngZone=l(z);_defaults=l(WD,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=ro("iconPrefixContainer");_textPrefixContainerSignal=ro("textPrefixContainer");_iconSuffixContainerSignal=ro("iconSuffixContainer");_textSuffixContainerSignal=ro("textSuffixContainer");_prefixSuffixContainers=V(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Oh(ua);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=On(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||qD}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||M_;this._appearanceSignal.set(t)}_appearanceSignal=k(M_);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||E_}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||E_}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new y;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Ee();constructor(){let e=this._defaults,t=l($e);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),ut(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=V(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(r+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(We([void 0,void 0]),K(()=>[t.errorState,t.userAriaDescribedBy]),Zl(),pe(([[o,a],[s,c]])=>o!==s||a!==c)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(ue(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),dt(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Fa({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=V(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let t=this._control.describedByIds,r;if(t){let o=this._describedByIds||e;r=e.concat(t.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=t?.getBoundingClientRect().width??0,c=r?.getBoundingClientRect().width??0,d=o?.getBoundingClientRect().width??0,m=this._currentDirection==="rtl"?"-1":"1",p=`${a+s}px`,$=`calc(${m} * (${p} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,X=`var(--mat-mdc-form-field-label-transform, ${YD} translateX(${$}))`,J=a+s+c+d;return[X,J]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=w({type:i,selectors:[["mat-form-field"]],contentQueries:function(t,r,o){if(t&1&&(Mh(o,r._labelChild,ua,5),zt(o,ma,5)(o,UD,5)(o,GD,5)(o,HD,5)(o,ha,5)),t&2){ic();let a;ee(a=te())&&(r._formFieldControl=a.first),ee(a=te())&&(r._prefixChildren=a),ee(a=te())&&(r._suffixChildren=a),ee(a=te())&&(r._errorChildren=a),ee(a=te())&&(r._hintChildren=a)}},viewQuery:function(t,r){if(t&1&&(Eh(r._iconPrefixContainerSignal,v_,5)(r._textPrefixContainerSignal,b_,5)(r._iconSuffixContainerSignal,y_,5)(r._textSuffixContainerSignal,w_,5),Xe(CD,5)(v_,5)(b_,5)(y_,5)(w_,5)(C_,5)(x_,5)(S_,5)),t&2){ic(4);let o;ee(o=te())&&(r._textField=o.first),ee(o=te())&&(r._iconPrefixContainer=o.first),ee(o=te())&&(r._textPrefixContainer=o.first),ee(o=te())&&(r._iconSuffixContainer=o.first),ee(o=te())&&(r._textSuffixContainer=o.first),ee(o=te())&&(r._floatingLabel=o.first),ee(o=te())&&(r._notchedOutline=o.first),ee(o=te())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,r){t&2&&A("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Pe([{provide:fa,useExisting:i},{provide:R_,useExisting:i}])],ngContentSelectors:SD,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,r){if(t&1&&(De(DD),ge(0,ED,1,1,"ng-template",null,0,kh),u(2,"div",6,1),S("click",function(a){return r._control.onContainerClick(a)}),W(4,RD,1,0,"div",7),u(5,"div",8),W(6,AD,2,2,"div",9),W(7,kD,3,0,"div",10),W(8,PD,3,0,"div",11),u(9,"div",12),W(10,FD,1,1,null,13),Q(11),h(),W(12,ND,3,0,"div",14),W(13,LD,3,0,"div",15),h(),W(14,BD,1,0,"div",16),h(),u(15,"div",17),W(16,VD,2,0,"div",18)(17,zD,5,1,"div",19),h()),t&2){let o;f(2),A("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),f(2),q(!r._hasOutline()&&!r._control.disabled?4:-1),f(2),q(r._hasOutline()?6:-1),f(),q(r._hasIconPrefix?7:-1),f(),q(r._hasTextPrefix?8:-1),f(2),q(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),f(2),q(r._hasTextSuffix?12:-1),f(),q(r._hasIconSuffix?13:-1),f(),q(r._hasOutline()?-1:14),f(),A("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();f(),q((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[C_,x_,pc,S_,ha],styles:[`.mdc-text-field {
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
`],encapsulation:2,changeDetection:0})}return i})();var Wi=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({imports:[Qa,Ol,se]})}return i})();var KD=["trigger"],ZD=["panel"],QD=[[["mat-select-trigger"]],"*"],JD=["mat-select-trigger","*"];function eS(i,n){if(i&1&&(u(0,"span",4),g(1),h()),i&2){let e=T();f(),he(e.placeholder)}}function tS(i,n){i&1&&Q(0)}function nS(i,n){if(i&1&&(u(0,"span",11),g(1),h()),i&2){let e=T(2);f(),he(e.triggerValue)}}function iS(i,n){if(i&1&&(u(0,"span",5),W(1,tS,1,0)(2,nS,2,1,"span",11),h()),i&2){let e=T();f(),q(e.customTrigger?1:2)}}function rS(i,n){if(i&1){let e=Te();u(0,"div",12,1),S("keydown",function(r){we(e);let o=T();return Ce(o._handleKeydown(r))}),Q(2,1),h()}if(i&2){let e=T();it(e.panelClass),A("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),Z("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var oS=new b("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let i=l(H);return()=>Pn(i)}}),aS=new b("MAT_SELECT_CONFIG"),sS=new b("MatSelectTrigger"),bu=class{source;value;constructor(n,e){this.source=n,this.value=e}},I_=(()=>{class i{_viewportRuler=l(Nt);_changeDetectorRef=l(oe);_elementRef=l(P);_dir=l($e,{optional:!0});_idGenerator=l(ve);_renderer=l(de);_parentFormField=l(fa,{optional:!0});ngControl=l(Kt,{self:!0,optional:!0});_liveAnnouncer=l(wo);_defaultOptions=l(aS,{optional:!0});_animationsDisabled=Ee();_popoverLocation;_initialized=new y;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let r=this.panel.nativeElement,o=xp(e,this.options,this.optionGroups),a=t._getHostElement();e===0&&o===1?r.scrollTop=0:r.scrollTop=Mp(a.offsetTop,a.offsetHeight,r.scrollTop,r.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new bu(this,e)}_scrollStrategyFactory=l(oS);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new y;_errorStateTracker;stateChanges=new y;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=k(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(si.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Jt(()=>{let e=this.options;return e?e.changes.pipe(We(e),Re(()=>dt(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(Re(()=>this.optionSelectionChanges))});openedChange=new j;_openedStream=this.openedChange.pipe(pe(e=>e),K(()=>{}));_closedStream=this.openedChange.pipe(pe(e=>!e),K(()=>{}));selectionChange=new j;valueChange=new j;constructor(){let e=l(Zs),t=l(Gi,{optional:!0}),r=l(aa,{optional:!0}),o=l(new nn("tabindex"),{optional:!0}),a=l(Eo,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Fr(e,this.ngControl,r,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=a?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new $i(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(ue(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(ue(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(We(null),ue(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let r=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?r.setAttribute("aria-labelledby",e):r.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(xe(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&is(this._trackedModal,"aria-owns",t),zc(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;is(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(r),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),r=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,r=t===40||t===38||t===37||t===39,o=t===13||t===32,a=this._keyManager;if(!a.isTyping()&&o&&!Ke(e)||(this.multiple||e.altKey)&&r)e.preventDefault(),this.open();else if(!this.multiple){let s=this.selected;a.onKeydown(e);let c=this.selected;c&&s!==c&&this._liveAnnouncer.announce(c.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,r=e.keyCode,o=r===40||r===38,a=t.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!a&&(r===13||r===32)&&t.activeItem&&!Ke(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!a&&this._multiple&&r===65&&e.ctrlKey){e.preventDefault();let s=this.options.some(c=>!c.disabled&&!c.selected);this.options.forEach(c=>{c.disabled||(s?c.select():c.deselect())})}else{let s=t.activeItemIndex;t.onKeydown(e),this._multiple&&o&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==s&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Ke(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(r=>{if(this._selectionModel.isSelected(r))return!1;try{return(r.value!=null||this.canSelectNullableOptions)&&this._compareWith(r.value,e)}catch(o){return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof hr?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Co(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=dt(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(ue(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),dt(...this.options.map(t=>t._stateChanges)).pipe(ue(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let r=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(r!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),r!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,r)=>this.sortComparator?this.sortComparator(t,r,e):e.indexOf(t)-e.indexOf(r)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(r=>r.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=Ue(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=w({type:i,selectors:[["mat-select"]],contentQueries:function(t,r,o){if(t&1&&zt(o,sS,5)(o,Or,5)(o,Hd,5),t&2){let a;ee(a=te())&&(r.customTrigger=a.first),ee(a=te())&&(r.options=a),ee(a=te())&&(r.optionGroups=a)}},viewQuery:function(t,r){if(t&1&&Xe(KD,5)(ZD,5)(ms,5),t&2){let o;ee(o=te())&&(r.trigger=o.first),ee(o=te())&&(r.panel=o.first),ee(o=te())&&(r._overlayDir=o.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,r){t&1&&S("keydown",function(a){return r._handleKeydown(a)})("focus",function(){return r._onFocus()})("blur",function(){return r._onBlur()}),t&2&&(Z("id",r.id)("tabindex",r.disabled?-1:r.tabIndex)("aria-controls",r.panelOpen?r.id+"-panel":null)("aria-expanded",r.panelOpen)("aria-label",r.ariaLabel||null)("aria-required",r.required.toString())("aria-disabled",r.disabled.toString())("aria-invalid",r.errorState)("aria-activedescendant",r._getAriaActiveDescendant()),A("mat-mdc-select-disabled",r.disabled)("mat-mdc-select-invalid",r.errorState)("mat-mdc-select-required",r.required)("mat-mdc-select-empty",r.empty)("mat-mdc-select-multiple",r.multiple)("mat-select-open",r.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",F],disableRipple:[2,"disableRipple","disableRipple",F],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:It(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",F],placeholder:"placeholder",required:[2,"required","required",F],multiple:[2,"multiple","multiple",F],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",F],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",It],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",F]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[Pe([{provide:ma,useExisting:i},{provide:zd,useExisting:i}]),Le],ngContentSelectors:JD,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,r){if(t&1&&(De(QD),u(0,"div",2,0),S("click",function(){return r.open()}),u(3,"div",3),W(4,eS,2,1,"span",4)(5,iS,3,1,"span",5),h(),u(6,"div",6)(7,"div",7),Zi(),u(8,"svg",8),Y(9,"path",9),h()()()(),ge(10,rS,3,16,"ng-template",10),S("detach",function(){return r.close()})("backdropClick",function(){return r.close()})("overlayKeydown",function(a){return r._handleOverlayKeydown(a)})),t&2){let o=ht(1);f(3),Z("id",r._valueId),f(),q(r.empty?4:5),f(6),D("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",r._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",r._scrollStrategy)("cdkConnectedOverlayOrigin",r._preferredOverlayOrigin||o)("cdkConnectedOverlayPositions",r._positions)("cdkConnectedOverlayWidth",r._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",r._popoverLocation)}},dependencies:[hr,ms],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2,changeDetection:0})}return i})();var T_=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({imports:[Lt,Ud,se,an,Wi,Ud]})}return i})();var cS=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=w({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2,changeDetection:0})}return i})(),dS={passive:!0},A_=(()=>{class i{_platform=l(me);_ngZone=l(z);_renderer=l(He).createRenderer(null,null);_styleLoader=l(Fe);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return vt;this._styleLoader.load(cS);let t=Ge(e),r=this._monitoredElements.get(t);if(r)return r.subject;let o=new y,a="cdk-text-field-autofilled",s=d=>{d.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(a)?(t.classList.add(a),this._ngZone.run(()=>o.next({target:d.target,isAutofilled:!0}))):d.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(a)&&(t.classList.remove(a),this._ngZone.run(()=>o.next({target:d.target,isAutofilled:!1})))},c=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",s,dS)));return this._monitoredElements.set(t,{subject:o,unlisten:c}),o}stopMonitoring(e){let t=Ge(e),r=this._monitoredElements.get(t);r&&(r.unlisten(),r.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var k_=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({})}return i})();var P_=new b("MAT_INPUT_VALUE_ACCESSOR");var uS=["button","checkbox","file","hidden","image","radio","range","reset","submit"],hS=new b("MAT_INPUT_CONFIG"),O_=(()=>{class i{_elementRef=l(P);_platform=l(me);ngControl=l(Kt,{optional:!0,self:!0});_autofillMonitor=l(A_);_ngZone=l(z);_formField=l(fa,{optional:!0});_renderer=l(de);_uid=l(ve).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=l(hS,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new y;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=On(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(si.required)??!1}set required(e){this._required=On(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Kc().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=On(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Kc().has(e));constructor(){let e=l(Gi,{optional:!0}),t=l(aa,{optional:!0}),r=l(Zs),o=l(P_,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();o?Un(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Fr(r,this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&ut(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){uS.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||i)};static \u0275dir=R({type:i,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,r){t&1&&S("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),t&2&&(Rt("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),Z("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),A("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",F]},exportAs:["matInput"],features:[Pe([{provide:ma,useExisting:i}]),Le]})}return i})(),F_=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({imports:[Wi,Wi,k_,se]})}return i})();var N_=(()=>{class i{constructor(){this.renderer=l(de),this.document=l(N)}ngOnInit(){this.dynamicallyLoadWebcomponent("https://justcode-7.github.io/app-info-webcomponent/my-webcomponent.esm.js")}dynamicallyLoadWebcomponent(e){if(!this.document.querySelector(`script[src="${e}"]`)){let t=this.renderer.createElement("script");t.type="module",t.src=e,t.async=!0,t.onload=()=>console.log("Vue ESM Web Component erfolgreich geladen."),t.onerror=r=>console.error("Fehler beim Laden des Skripts:",r),this.renderer.appendChild(this.document.head,t)}}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=w({type:i,selectors:[["app-web-component-wrapper"]],decls:2,vars:0,consts:[[1,"d-flex","w-100","justify-content-start","p-2"],["msg","Dart-board ist eine installierbare pwa. Diese Webapp bietet verschiedene Spielmodi f\xFCr das Spiel Dart."]],template:function(t,r){t&1&&(Be(0,"div",0),Ve(1,"my-webcomponent",1),qe())},encapsulation:2})}}return i})();var wu=0;function fS(){return wu}function hi(i,n){return(...e)=>{try{return wu=n,i(...e)}finally{wu=0}}}function pS(i){return!i}function L_(i){return i}function Zt(i){return Array.isArray(i)}function Ur(i){return(typeof i=="object"||typeof i=="function")&&i!=null}var qi=Symbol(),zl=Symbol(),ga=class{predicates;fns=[];constructor(n){this.predicates=n}push(n){this.fns.push(B_(this.predicates,n))}mergeIn(n){let e=this.predicates?n.fns.map(t=>B_(this.predicates,t)):n.fns;this.fns.push(...e)}},Fl=class extends ga{get defaultValue(){return!1}compute(n){return this.fns.some(e=>{let t=e(n);return t&&t!==zl})}},Gr=class i extends ga{ignore;static ignoreNull(n){return new i(n,e=>e===null)}constructor(n,e){super(n),this.ignore=e}get defaultValue(){return[]}compute(n){return this.fns.reduce((e,t)=>{let r=t(n);return r===void 0||r===zl?e:Zt(r)?[...e,...this.ignore?r.filter(o=>!this.ignore(o)):r]:this.ignore&&this.ignore(r)?e:[...e,r]},[])}},Cu=class extends Gr{constructor(n){super(n,void 0)}},Du=class extends ga{key;get defaultValue(){return this.key.reducer.getInitial()}constructor(n,e){super(n),this.key=e}compute(n){if(this.fns.length===0)return this.key.reducer.getInitial();let e=this.key.reducer.getInitial();for(let t=0;t<this.fns.length;t++){let r=this.fns[t](n);r!==zl&&(e=this.key.reducer.reduce(e,r))}return e}};function B_(i,n){return i.length===0?n:e=>{for(let t of i){let r=e.stateOf(t.path),o=G(r.structure.pathKeys).length-t.depth;for(let a=0;a<o;a++)r=r.structure.parent;if(!t.fn(r.context))return zl}return n(e)}}var $r=class{predicates;hidden;disabledReasons;readonly;syncErrors;syncTreeErrors;asyncErrors;metadata=new Map;constructor(n){this.predicates=n,this.hidden=new Fl(n),this.disabledReasons=new Cu(n),this.readonly=new Fl(n),this.syncErrors=Gr.ignoreNull(n),this.syncTreeErrors=Gr.ignoreNull(n),this.asyncErrors=Gr.ignoreNull(n)}hasMetadata(n){return this.metadata.has(n)}getMetadataKeys(){return this.metadata.keys()}getMetadata(n){return this.metadata.has(n)||this.metadata.set(n,new Du(this.predicates,n)),this.metadata.get(n)}mergeIn(n){this.hidden.mergeIn(n.hidden),this.disabledReasons.mergeIn(n.disabledReasons),this.readonly.mergeIn(n.readonly),this.syncErrors.mergeIn(n.syncErrors),this.syncTreeErrors.mergeIn(n.syncTreeErrors),this.asyncErrors.mergeIn(n.asyncErrors);for(let e of n.getMetadataKeys()){let t=n.metadata.get(e);this.getMetadata(e).mergeIn(t)}}},Nl=class{depth;constructor(n){this.depth=n}build(){return new Ll(this,[],0)}},Wr=class i extends Nl{constructor(n){super(n)}current;all=[];addHiddenRule(n){this.getCurrent().addHiddenRule(n)}addDisabledReasonRule(n){this.getCurrent().addDisabledReasonRule(n)}addReadonlyRule(n){this.getCurrent().addReadonlyRule(n)}addSyncErrorRule(n){this.getCurrent().addSyncErrorRule(n)}addSyncTreeErrorRule(n){this.getCurrent().addSyncTreeErrorRule(n)}addAsyncErrorRule(n){this.getCurrent().addAsyncErrorRule(n)}addMetadataRule(n,e){this.getCurrent().addMetadataRule(n,e)}getChild(n){if(n===qi){let e=this.getCurrent().children;e.size>(e.has(qi)?1:0)&&(this.current=void 0)}return this.getCurrent().getChild(n)}hasLogic(n){return this===n?!0:this.all.some(({builder:e})=>e.hasLogic(n))}mergeIn(n,e){e?this.all.push({builder:n,predicate:{fn:hi(e.fn,this.depth),path:e.path}}):this.all.push({builder:n}),this.current=void 0}getCurrent(){return this.current===void 0&&(this.current=new _a(this.depth),this.all.push({builder:this.current})),this.current}static newRoot(){return new i(0)}},_a=class extends Nl{logic=new $r([]);children=new Map;constructor(n){super(n)}addHiddenRule(n){this.logic.hidden.push(hi(n,this.depth))}addDisabledReasonRule(n){this.logic.disabledReasons.push(hi(n,this.depth))}addReadonlyRule(n){this.logic.readonly.push(hi(n,this.depth))}addSyncErrorRule(n){this.logic.syncErrors.push(hi(n,this.depth))}addSyncTreeErrorRule(n){this.logic.syncTreeErrors.push(hi(n,this.depth))}addAsyncErrorRule(n){this.logic.asyncErrors.push(hi(n,this.depth))}addMetadataRule(n,e){this.logic.getMetadata(n).push(hi(e,this.depth))}getChild(n){return this.children.has(n)||this.children.set(n,new Wr(this.depth+1)),this.children.get(n)}hasLogic(n){return this===n}},Ll=class i{builder;predicates;depth;logic;constructor(n,e,t){this.builder=n,this.predicates=e,this.depth=t,this.logic=n?gS(n,e,t):new $r([])}getChild(n){let e=this.builder?z_(this.builder,n):[];if(e.length===0)return new i(void 0,[],this.depth+1);if(e.length===1){let{builder:t,predicates:r}=e[0];return new i(t,[...this.predicates,...r.map(o=>xu(o,this.depth))],this.depth+1)}else{let t=e.map(({builder:r,predicates:o})=>new i(r,[...this.predicates,...o.map(a=>xu(a,this.depth))],this.depth+1));return new Su(t)}}hasLogic(n){return this.builder?.hasLogic(n)??!1}},Su=class i{all;logic;constructor(n){this.all=n,this.logic=new $r([]);for(let e of n)this.logic.mergeIn(e.logic)}getChild(n){return new i(this.all.flatMap(e=>e.getChild(n)))}hasLogic(n){return this.all.some(e=>e.hasLogic(n))}};function z_(i,n){if(i instanceof Wr)return i.all.flatMap(({builder:e,predicate:t})=>{let r=z_(e,n);return t?r.map(({builder:o,predicates:a})=>({builder:o,predicates:[...a,t]})):r});if(i instanceof _a)return[...n!==qi&&i.children.has(qi)?[{builder:i.getChild(qi),predicates:[]}]:[],...i.children.has(n)?[{builder:i.getChild(n),predicates:[]}]:[]];throw new O(1909,!1)}function gS(i,n,e){let t=new $r(n);if(i instanceof Wr){let r=i.all.map(({builder:o,predicate:a})=>new Ll(o,a?[...n,xu(a,e)]:n,e));for(let o of r)t.mergeIn(o.logic)}else if(i instanceof _a)t.mergeIn(i.logic);else throw new O(1909,!1);return t}function xu(i,n){return ie(_({},i),{depth:n})}var H_=Symbol("PATH"),qr=class i{keys;parent;keyInParent;root;children=new Map;fieldPathProxy=new Proxy(this,_S);logicBuilder;constructor(n,e,t,r){this.keys=n,this.parent=t,this.keyInParent=r,this.root=e??this,t||(this.logicBuilder=Wr.newRoot())}get builder(){return this.logicBuilder?this.logicBuilder:this.parent.builder.getChild(this.keyInParent)}getChild(n){return this.children.has(n)||this.children.set(n,new i([...this.keys,n],this.root,this,n)),this.children.get(n)}mergeIn(n,e){let t=n.compile();this.builder.mergeIn(t.builder,e)}static unwrapFieldPath(n){return n[H_]}static newRoot(){return new i([],void 0,void 0,void 0)}},_S={get(i,n){return n===H_?i:i.getChild(n).fieldPathProxy}},yu,pa=new Map,Bl=class i{schemaFn;constructor(n){this.schemaFn=n}compile(){if(pa.has(this))return pa.get(this);let n=qr.newRoot();pa.set(this,n);let e=yu;try{yu=n,this.schemaFn(n.fieldPathProxy)}finally{yu=e}return n}static create(n){return n instanceof i?n:new i(n)}static rootCompile(n){try{return pa.clear(),n===void 0?qr.newRoot():n instanceof i?n.compile():new i(n).compile()}finally{pa.clear()}}};function vS(i){return i instanceof Bl||typeof i=="function"}var mi={list(){return{reduce:(i,n)=>n===void 0?i:[...i,n],getInitial:()=>[]}},min(){return{reduce:(i,n)=>i===void 0||n===void 0?i??n:Math.min(i,n),getInitial:()=>{}}},max(){return{reduce:(i,n)=>i===void 0||n===void 0?i??n:Math.max(i,n),getInitial:()=>{}}},or(){return{reduce:(i,n)=>i||n,getInitial:()=>!1}},and(){return{reduce:(i,n)=>i&&n,getInitial:()=>!0}},override:bS};function bS(i){return{reduce:(n,e)=>e,getInitial:()=>i?.()}}var Vl=class{reducer;create;brand;constructor(n,e){this.reducer=n,this.create=e}};function fi(i){return new Vl(i??mi.override())}var U_=fi(mi.or()),G_=fi(mi.max()),$_=fi(mi.min()),W_=fi(mi.max()),q_=fi(mi.min()),Y_=fi(mi.list());function yS(i){return i.errors().length>0?"invalid":i.pending()?"unknown":"valid"}var Mu=class{node;constructor(n){this.node=n}rawSyncTreeErrors=V(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawSyncTreeErrors()??[]]);syncErrors=V(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncErrors.compute(this.node.context),...this.syncTreeErrors(),...wS(this.node.submitState.submissionErrors())]);syncValid=V(()=>this.shouldSkipValidation()?!0:this.node.structure.reduceChildren(this.syncErrors().length===0,(n,e)=>e&&n.validationState.syncValid(),pS));syncTreeErrors=V(()=>this.rawSyncTreeErrors().filter(n=>n.fieldTree===this.node.fieldTree));rawAsyncErrors=V(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.asyncErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawAsyncErrors()??[]]);asyncErrors=V(()=>this.shouldSkipValidation()?[]:this.rawAsyncErrors().filter(n=>n==="pending"||n.fieldTree===this.node.fieldTree));parseErrors=V(()=>this.node.formFieldBindings().flatMap(n=>n.parseErrors()));errors=V(()=>[...this.parseErrors(),...this.syncErrors(),...this.asyncErrors().filter(n=>n!=="pending")]);errorSummary=V(()=>{let n=this.node.structure.reduceChildren(this.errors(),(e,t)=>[...t,...e.errorSummary()]);return G(()=>n.sort(CS)),n});pending=V(()=>this.node.structure.reduceChildren(this.asyncErrors().includes("pending"),(n,e)=>e||n.validationState.asyncErrors().includes("pending")));status=V(()=>{if(this.shouldSkipValidation())return"valid";let n=yS(this);return this.node.structure.reduceChildren(n,(e,t)=>t==="invalid"||e.validationState.status()==="invalid"?"invalid":t==="unknown"||e.validationState.status()==="unknown"?"unknown":"valid",e=>e==="invalid")});valid=V(()=>this.status()==="valid");invalid=V(()=>this.status()==="invalid");shouldSkipValidation=V(()=>this.node.hidden()||this.node.disabled()||this.node.readonly())};function wS(i){return i===void 0?[]:Zt(i)?i:[i]}function X_(i,n){if(Zt(i))for(let e of i)e.fieldTree??=n;else i&&(i.fieldTree??=n);return i}function V_(i){return i.formField?i.formField.element:i.fieldTree().formFieldBindings().reduce((n,e)=>!n||!e.element?n??e.element:n.compareDocumentPosition(e.element)&Node.DOCUMENT_POSITION_PRECEDING?e.element:n,void 0)}function CS(i,n){let e=V_(i),t=V_(n);return e===t?0:e===void 0||t===void 0?e===void 0?1:-1:e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_PRECEDING?1:-1}var Eu=fi(),Ru=class{node;cache=new WeakMap;constructor(n){this.node=n}resolve(n){if(!this.cache.has(n)){let e=V(()=>{let t=qr.unwrapFieldPath(n),r=this.node,o=fS();for(;o>0||!r.structure.logic.hasLogic(t.root.builder);)if(o--,r=r.structure.parent,r===void 0)throw new O(1900,!1);for(let a of t.keys)if(r=r.structure.getChild(a),r===void 0)throw new O(1901,!1);return r.fieldTree});this.cache.set(n,e)}return this.cache.get(n)()}get fieldTree(){return this.node.fieldProxy}get state(){return this.node}get value(){return this.node.structure.value}get key(){return this.node.structure.keyInParent}get pathKeys(){return this.node.structure.pathKeys}index=V(()=>{let n=this.key();if(!Zt(G(this.node.structure.parent.value)))throw new O(1906,!1);return Number(n)});fieldTreeOf=n=>this.resolve(n);stateOf=n=>this.resolve(n)();valueOf=n=>{let e=this.resolve(n)().value();if(e instanceof jr)throw new O(1907,!1);return e}},Iu=class{node;metadata=new Map;constructor(n){this.node=n;for(let e of this.node.logicNode.logic.getMetadataKeys())if(e.create){let t=this.node.logicNode.logic.getMetadata(e),r=G(()=>nt(this.node.structure.injector,()=>e.create(V(()=>t.compute(this.node.context)))));this.metadata.set(e,r)}}get(n){if(this.has(n)&&!this.metadata.has(n)){if(n.create)throw new O(1912,!1);let e=this.node.logicNode.logic.getMetadata(n);this.metadata.set(n,V(()=>e.compute(this.node.context)))}return this.metadata.get(n)}has(n){return this.node.logicNode.logic.hasMetadata(n)}},DS={get(i,n,e){let t=i(),r=t.structure.getChild(n);if(r!==void 0)return r.fieldTree;let o=G(t.value);if(Zt(o)){if(n==="length")return t.value().length;if(n===Symbol.iterator)return()=>(t.value(),Array.prototype[Symbol.iterator].apply(t.fieldTree))}if(Ur(o)&&n===Symbol.iterator)return function*(){for(let a in e)yield[a,e[a]]}},getOwnPropertyDescriptor(i,n){let e=G(i().value),t=Reflect.getOwnPropertyDescriptor(e,n);return t&&!t.configurable&&(t.configurable=!0),t},ownKeys(i){let n=G(i().value);return typeof n=="object"&&n!==null?Reflect.ownKeys(n):[]}};function SS(i,n){let e=V(()=>i()[n()]);return e[Gl]=i[Gl],e.set=t=>{i.update(r=>xS(r,t,n()))},e.update=t=>{e.set(t(G(e)))},e.asReadonly=()=>e,e}function xS(i,n,e){if(Zt(i)){let t=[...i];return t[e]=n,t}else return ie(_({},i),{[e]:n})}var jl=class{logic;node;createChildNode;identitySymbol=Symbol();_injector=void 0;get injector(){return this._injector??=H.create({providers:[],parent:this.fieldManager.injector}),this._injector}constructor(n,e,t){this.logic=n,this.node=e,this.createChildNode=t}children(){let n=this.childrenMap();return n===void 0?[]:Array.from(n.byPropertyKey.values()).map(e=>G(e.reader))}getChild(n){let e=n.toString(),t=G(this.childrenMap)?.byPropertyKey.get(e)?.reader;return t||(t=this.createReader(e)),t()}reduceChildren(n,e,t){let r=this.childrenMap();if(!r)return n;let o=n;for(let a of r.byPropertyKey.values()){if(t?.(o))break;o=e(G(a.reader),o)}return o}destroy(){this.injector.destroy()}createKeyInParent(n,e,t){if(n.kind==="root")return K_;if(e===void 0){let r=t;return V(()=>{if(this.parent.structure.getChild(r)!==this.node)throw new O(-1902,!1);return r})}else{let r=t;return V(()=>{let o=this.parent.structure.value();if(!Zt(o))throw new O(1903,!1);let a=o[r];if(Ur(a)&&a.hasOwnProperty(this.parent.structure.identitySymbol)&&a[this.parent.structure.identitySymbol]===e)return r;for(let s=0;s<o.length;s++){let c=o[s];if(Ur(c)&&c.hasOwnProperty(this.parent.structure.identitySymbol)&&c[this.parent.structure.identitySymbol]===e)return r=s.toString()}throw new O(1904,!1)})}}createChildrenMap(){return En({source:this.value,computation:(n,e)=>{if(!Ur(n))return;let t=e?.value??{byPropertyKey:new Map},r,o=Zt(n);t!==void 0&&(o?r=ES(t,n,this.identitySymbol):r=RS(t,n));for(let a of Object.keys(n)){let s,c=n[a];if(c===void 0){t.byPropertyKey.has(a)&&(r??=_({},t),r.byPropertyKey.delete(a));continue}o&&Ur(c)&&!Zt(c)&&(s=c[this.identitySymbol]??=Symbol(""));let d;s&&(t.byTrackingKey?.has(s)||(r??=_({},t),r.byTrackingKey??=new Map,r.byTrackingKey.set(s,this.createChildNode(a,s,o))),d=(r??t).byTrackingKey.get(s));let m=t.byPropertyKey.get(a);m===void 0?(r??=_({},t),r.byPropertyKey.set(a,{reader:this.createReader(a),node:d??this.createChildNode(a,s,o)})):d&&d!==m.node&&(r??=_({},t),m.node=d)}return r??t}})}createReader(n){return V(()=>this.childrenMap()?.byPropertyKey.get(n)?.node)}},Tu=class extends jl{fieldManager;value;get parent(){}get root(){return this.node}get pathKeys(){return MS}get keyInParent(){return K_}childrenMap;constructor(n,e,t,r,o){super(e,n,o),this.fieldManager=t,this.value=r,this.childrenMap=this.createChildrenMap()}},Au=class extends jl{logic;parent;root;pathKeys;keyInParent;value;childrenMap;get fieldManager(){return this.root.structure.fieldManager}constructor(n,e,t,r,o,a){super(e,n,a),this.logic=e,this.parent=t,this.root=this.parent.structure.root,this.keyInParent=this.createKeyInParent({kind:"child",parent:t,pathNode:void 0,logic:e,initialKeyInParent:o,identityInParent:r,fieldAdapter:void 0},r,o),this.pathKeys=V(()=>[...t.structure.pathKeys(),this.keyInParent()]),this.value=SS(this.parent.structure.value,this.keyInParent),this.childrenMap=this.createChildrenMap(),this.fieldManager.structures.add(this)}};var MS=V(()=>[]),K_=V(()=>{throw new O(1905,!1)});function ES(i,n,e){let t,r=new Set(i.byPropertyKey.keys()),o=new Set(i.byTrackingKey?.keys());for(let a=0;a<n.length;a++){let s=n[a];r.delete(a.toString()),Ur(s)&&s.hasOwnProperty(e)&&o.delete(s[e])}if(r.size>0){t??=_({},i);for(let a of r)t.byPropertyKey.delete(a)}if(o.size>0){t??=_({},i);for(let a of o)t.byTrackingKey?.delete(a)}return t}function RS(i,n){let e;for(let t of i.byPropertyKey.keys())n.hasOwnProperty(t)||(e??=_({},i),e.byPropertyKey.delete(t));return e}var ku=class{node;selfSubmitting=k(!1);submissionErrors;constructor(n){this.node=n,this.submissionErrors=En({source:this.node.structure.value,computation:()=>[]})}submitting=V(()=>this.selfSubmitting()||(this.node.structure.parent?.submitting()??!1))},va=class{structure;validationState;metadataState;nodeState;submitState;fieldAdapter;controlValue;_context=void 0;get context(){return this._context??=new Ru(this)}fieldProxy=new Proxy(()=>this,DS);pathNode;constructor(n){this.pathNode=n.pathNode,this.fieldAdapter=n.fieldAdapter,this.structure=this.fieldAdapter.createStructure(this,n),this.validationState=this.fieldAdapter.createValidationState(this,n),this.nodeState=this.fieldAdapter.createNodeState(this,n),this.metadataState=new Iu(this),this.submitState=new ku(this),this.controlValue=this.controlValueSignal()}focusBoundControl(n){this.getBindingForFocus()?.focus(n)}getBindingForFocus(){let n=this.formFieldBindings().filter(e=>e.focus!==void 0).reduce(j_,void 0);return n||this.structure.children().map(e=>e.getBindingForFocus()).reduce(j_,void 0)}pendingSync=En({source:()=>this.value(),computation:(n,e)=>{e?.value?.abort()}});get fieldTree(){return this.fieldProxy}get logicNode(){return this.structure.logic}get value(){return this.structure.value}get keyInParent(){return this.structure.keyInParent}get errors(){return this.validationState.errors}get parseErrors(){return this.validationState.parseErrors}get errorSummary(){return this.validationState.errorSummary}get pending(){return this.validationState.pending}get valid(){return this.validationState.valid}get invalid(){return this.validationState.invalid}get dirty(){return this.nodeState.dirty}get touched(){return this.nodeState.touched}get disabled(){return this.nodeState.disabled}get disabledReasons(){return this.nodeState.disabledReasons}get hidden(){return this.nodeState.hidden}get readonly(){return this.nodeState.readonly}get formFieldBindings(){return this.nodeState.formFieldBindings}get submitting(){return this.submitState.submitting}get name(){return this.nodeState.name}get max(){return this.metadata($_)}get maxLength(){return this.metadata(q_)}get min(){return this.metadata(G_)}get minLength(){return this.metadata(W_)}get pattern(){return this.metadata(Y_)??IS}get required(){return this.metadata(U_)??TS}metadata(n){return this.metadataState.get(n)}hasMetadata(n){return this.metadataState.has(n)}markAsTouched(){G(()=>{this.nodeState.markAsTouched(),this.flushSync()})}markAsDirty(){this.nodeState.markAsDirty()}markAsPristine(){this.nodeState.markAsPristine()}markAsUntouched(){this.nodeState.markAsUntouched()}reset(n){G(()=>this._reset(n))}_reset(n){n!==void 0&&this.value.set(n),this.nodeState.markAsUntouched(),this.nodeState.markAsPristine();for(let e of this.structure.children())e._reset()}controlValueSignal(){let n=En(this.value),{set:e,update:t}=n;return n.set=r=>{e(r),this.markAsDirty(),this.debounceSync()},n.update=r=>{t(r),this.markAsDirty(),this.debounceSync()},n}sync(){this.value.set(this.controlValue())}flushSync(){let n=this.pendingSync();n&&!n.signal.aborted&&(n.abort(),this.sync())}debounceSync(){return ce(this,null,function*(){let n=G(()=>(this.pendingSync()?.abort(),this.nodeState.debouncer()));if(n){let e=new AbortController,t=n(e.signal);if(t&&(this.pendingSync.set(e),yield t,e.signal.aborted))return}this.sync()})}static newRoot(n,e,t,r){return r.newRoot(n,e,t,r)}createStructure(n){return n.kind==="root"?new Tu(this,n.logic,n.fieldManager,n.value,this.newChild.bind(this)):new Au(this,n.logic,n.parent,n.identityInParent,n.initialKeyInParent,this.newChild.bind(this))}newChild(n,e,t){let r,o;return t?(r=this.pathNode.getChild(qi),o=this.structure.logic.getChild(qi)):(r=this.pathNode.getChild(n),o=this.structure.logic.getChild(n)),this.fieldAdapter.newChild({kind:"child",parent:this,pathNode:r,logic:o,initialKeyInParent:n,identityInParent:e,fieldAdapter:this.fieldAdapter})}},IS=V(()=>[]),TS=V(()=>!1);function j_(i,n){return i?n&&i.element.compareDocumentPosition(n.element)&Node.DOCUMENT_POSITION_PRECEDING?n:i:n}var Pu=class{node;selfTouched=k(!1);selfDirty=k(!1);markAsTouched(){this.selfTouched.set(!0)}markAsDirty(){this.selfDirty.set(!0)}markAsPristine(){this.selfDirty.set(!1)}markAsUntouched(){this.selfTouched.set(!1)}formFieldBindings=k([]);constructor(n){this.node=n}dirty=V(()=>{let n=this.selfDirty()&&!this.isNonInteractive();return this.node.structure.reduceChildren(n,(e,t)=>t||e.nodeState.dirty(),L_)});touched=V(()=>{let n=this.selfTouched()&&!this.isNonInteractive();return this.node.structure.reduceChildren(n,(e,t)=>t||e.nodeState.touched(),L_)});disabledReasons=V(()=>[...this.node.structure.parent?.nodeState.disabledReasons()??[],...this.node.logicNode.logic.disabledReasons.compute(this.node.context)]);disabled=V(()=>!!this.disabledReasons().length);readonly=V(()=>(this.node.structure.parent?.nodeState.readonly()||this.node.logicNode.logic.readonly.compute(this.node.context))??!1);hidden=V(()=>(this.node.structure.parent?.nodeState.hidden()||this.node.logicNode.logic.hidden.compute(this.node.context))??!1);name=V(()=>{let n=this.node.structure.parent;return n?`${n.name()}.${this.node.structure.keyInParent()}`:this.node.structure.fieldManager.rootName});debouncer=V(()=>{if(this.node.logicNode.logic.hasMetadata(Eu)){let e=this.node.logicNode.logic.getMetadata(Eu).compute(this.node.context);if(e)return t=>e(this.node.context,t)}return this.node.structure.parent?.nodeState.debouncer?.()});isNonInteractive=V(()=>this.hidden()||this.disabled()||this.readonly())},Ou=class{newRoot(n,e,t,r){return new va({kind:"root",fieldManager:n,value:e,pathNode:t,logic:t.builder.build(),fieldAdapter:r})}newChild(n){return new va(n)}createNodeState(n){return new Pu(n)}createValidationState(n){return new Mu(n)}createStructure(n,e){return n.createStructure(e)}},Fu=class{injector;rootName;submitOptions;constructor(n,e,t){this.injector=n,this.rootName=e??`${this.injector.get(Mn)}.form${AS++}`,this.submitOptions=t}structures=new Set;createFieldManagementEffect(n){ut(()=>{let e=new Set;this.markStructuresLive(n,e);for(let t of this.structures)e.has(t)||(this.structures.delete(t),G(()=>t.destroy()))},{injector:this.injector})}markStructuresLive(n,e){e.add(n);for(let t of n.children())this.markStructuresLive(t.structure,e)}},AS=0;function kS(i){let n,e,t;return i.length===3?[n,e,t]=i:i.length===2?vS(i[1])?[n,e]=i:[n,t]=i:[n]=i,[n,e,t]}function Lu(...i){let[n,e,t]=kS(i),r=t?.injector??l(H),o=nt(r,()=>Bl.rootCompile(e)),a=new Fu(r,t?.name,t?.submission),s=t?.adapter??new Ou,c=va.newRoot(a,n,o,s);return a.createFieldManagementEffect(c.structure),c.fieldTree}function Z_(i,n){return ce(this,null,function*(){let e=G(i);if(G(e.submitState.submitting))return!1;let t=n===void 0?e.structure.root.fieldProxy:i,r={root:e.structure.root.fieldProxy,submitted:i};n=typeof n=="function"?{action:n}:n??e.structure.fieldManager.submitOptions;let o=n?.action;if(!o)throw new O(1915,!1);let a=n?.onInvalid,s=n?.ignoreValidators??"pending",c=!0;G(()=>{Q_(e),s==="none"?c=e.valid():s==="pending"&&(c=!e.invalid())});try{if(c){e.submitState.selfSubmitting.set(!0);let d=yield G(()=>o?.(t,r));return d&&PS(e,d),!d||Zt(d)&&d.length===0}else G(()=>a?.(t,r));return!1}finally{e.submitState.selfSubmitting.set(!1)}})}function Q_(i){if(!i.validationState.shouldSkipValidation()){i.markAsTouched();for(let n of i.structure.children())Q_(n)}}function PS(i,n){Zt(n)||(n=[n]);let e=new Map;for(let t of n){let r=X_(t,i.fieldTree),o=r.fieldTree(),a=e.get(o);a||(a=[],e.set(o,a)),a.push(r)}for(let[t,r]of e)t.submitState.submissionErrors.set(r)}var Nu=class{kind="compat";control;fieldTree;context;message;constructor({context:n,kind:e,control:t}){this.context=n,this.kind=e,this.control=t}};function J_(i){if(i.length===0)return null;let n={};for(let e of i)n[e.kind]=e instanceof Nu?e.context:e;return n}var OS=new b("");function ev(i){return i===void 0?[]:Array.isArray(i)?i:[i]}var Bu=class{__brand=void 0;kind="";fieldTree;message;constructor(n){n&&Object.assign(this,n)}};var Vu=class extends Bu{kind="parse"};var FS=new b("");function NS(i,n,e){let t=En({source:i,computation:()=>[]}),r=o=>{let a=e(o);t.set(ev(a.error)),a.value!==void 0&&n(a.value),t.set(ev(a.error))};return{errors:t.asReadonly(),setRawValue:r}}var ju=class{field;constructor(n){this.field=n}control=this;get value(){return this.field().value()}get valid(){return this.field().valid()}get invalid(){return this.field().invalid()}get pending(){return this.field().pending()}get disabled(){return this.field().disabled()}get enabled(){return!this.field().disabled()}get errors(){return J_(this.field().errors())}get pristine(){return!this.field().dirty()}get dirty(){return this.field().dirty()}get touched(){return this.field().touched()}get untouched(){return!this.field().touched()}get status(){if(this.field().disabled())return"DISABLED";if(this.field().valid())return"VALID";if(this.field().invalid())return"INVALID";if(this.field().pending())return"PENDING";throw new O(1910,!1)}valueAccessor=null;hasValidator(n){return n===si.required?this.field().required():!1}updateValueAndValidity(){}},zu={disabled:"disabled",disabledReasons:"disabledReasons",dirty:"dirty",errors:"errors",hidden:"hidden",invalid:"invalid",max:"max",maxLength:"maxLength",min:"min",minLength:"minLength",name:"name",pattern:"pattern",pending:"pending",readonly:"readonly",required:"required",touched:"touched"},LS=(()=>{let i={};for(let n of Object.keys(zu))i[zu[n]]=n;return i})();function Hu(i,n){let e=LS[n];return i[e]?.()}var Uu=Object.values(zu);function Hl(){return{}}function Yi(i,n,e){return i[n]!==e?(i[n]=e,!0):!1}function BS(i){return i.tagName==="INPUT"||i.tagName==="SELECT"||i.tagName==="TEXTAREA"}function VS(i){if(i.tagName!=="INPUT")return!1;let n=i.type;return n==="date"||n==="datetime-local"||n==="month"||n==="number"||n==="range"||n==="time"||n==="week"}function jS(i){return i.tagName==="INPUT"||i.tagName==="TEXTAREA"}function zS(i,n){let e;if(i.validity.badInput)return{error:new Vu};switch(i.type){case"checkbox":return{value:i.checked};case"number":case"range":case"datetime-local":if(e=G(n),typeof e=="number"||e===null)return{value:i.value===""?null:i.valueAsNumber};break;case"date":case"month":case"time":case"week":if(e=G(n),e===null||e instanceof Date)return{value:i.valueAsDate};if(typeof e=="number")return{value:i.valueAsNumber};break}return{value:i.value}}function HS(i,n){switch(i.type){case"checkbox":i.checked=n;return;case"radio":i.checked=n===i.value;return;case"number":case"range":case"datetime-local":if(typeof n=="number"){tv(i,n);return}else if(n===null){i.value="";return}break;case"date":case"month":case"time":case"week":if(n===null||n instanceof Date){i.valueAsDate=n;return}else if(typeof n=="number"){tv(i,n);return}}i.value=n}function tv(i,n){isNaN(n)?i.value="":i.valueAsNumber=n}function Gu(i,n,e,t){switch(e){case"name":i.setAttribute(n,e,t);break;case"disabled":case"readonly":case"required":t?i.setAttribute(n,e,""):i.removeAttribute(n,e);break;case"max":case"min":case"minLength":case"maxLength":t!==void 0?i.setAttribute(n,e,t.toString()):i.removeAttribute(n,e);break}}function US(i,n){i.listenToCustomControlModel(t=>n.state().controlValue.set(t)),i.listenToCustomControlOutput("touchedChange",()=>n.state().markAsTouched()),n.registerAsBinding(i.customControl);let e=Hl();return()=>{let t=n.state(),r=t.controlValue();Yi(e,"controlValue",r)&&i.setCustomControlModelInput(r);for(let o of Uu){let a;o==="errors"?a=n.errors():a=Hu(t,o),Yi(e,o,a)&&(i.setInputOnDirectives(o,a),n.elementAcceptsNativeProperty(o)&&!i.customControlHasInput(o)&&Gu(n.renderer,n.nativeFormElement,o,a))}}}function GS(i,n){n.controlValueAccessor.registerOnChange(t=>n.state().controlValue.set(t)),n.controlValueAccessor.registerOnTouched(()=>n.state().markAsTouched()),n.registerAsBinding();let e=Hl();return()=>{let t=n.state(),r=t.value();Yi(e,"controlValue",r)&&G(()=>n.controlValueAccessor.writeValue(r));for(let o of Uu){let a=Hu(t,o);if(Yi(e,o,a)){let s=i.setInputOnDirectives(o,a);o==="disabled"&&n.controlValueAccessor.setDisabledState?G(()=>n.controlValueAccessor.setDisabledState(a)):!s&&n.elementAcceptsNativeProperty(o)&&Gu(n.renderer,n.nativeFormElement,o,a)}}}}function $S(i,n,e){if(typeof MutationObserver!="function")return;let t=new MutationObserver(r=>{r.some(o=>WS(o))&&n()});t.observe(i,{attributes:!0,attributeFilter:["value"],characterData:!0,childList:!0,subtree:!0}),e.onDestroy(()=>t.disconnect())}function WS(i){if(i.type==="childList"||i.type==="characterData"){if(i.target instanceof Comment)return!1;for(let n of i.addedNodes)if(!(n instanceof Comment))return!0;for(let n of i.removedNodes)if(!(n instanceof Comment))return!0;return!1}return i.type==="attributes"&&i.target instanceof HTMLOptionElement}function qS(i,n,e){let t=!1,r=n.nativeFormElement,o=NS(()=>n.state().value(),s=>n.state().controlValue.set(s),()=>zS(r,n.state().value));e.set(o.errors),i.listenToDom("input",()=>o.setRawValue(void 0)),i.listenToDom("blur",()=>n.state().markAsTouched()),n.registerAsBinding(),r.tagName==="SELECT"&&$S(r,()=>{t&&(r.value=n.state().controlValue())},n.destroyRef);let a=Hl();return()=>{let s=n.state(),c=s.controlValue();Yi(a,"controlValue",c)&&HS(r,c);for(let d of Uu){let m=Hu(s,d);Yi(a,d,m)&&(i.setInputOnDirectives(d,m),n.elementAcceptsNativeProperty(d)&&Gu(n.renderer,r,d,m))}t=!0}}var YS=Symbol(),XS=new b(""),nv=(()=>{class i{field=io.required({alias:"formField"});renderer=l(de);destroyRef=l(xn);state=V(()=>this.field()());injector=l(H);element=l(P).nativeElement;elementIsNativeFormElement=BS(this.element);elementAcceptsNumericValues=VS(this.element);elementAcceptsTextualValues=jS(this.element);nativeFormElement=this.elementIsNativeFormElement?this.element:void 0;focuser=e=>this.element.focus(e);controlValueAccessors=l(ci,{optional:!0,self:!0});config=l(OS,{optional:!0});parseErrorsSource=k(void 0);_interopNgControl;get interopNgControl(){return this._interopNgControl??=new ju(this.state)}parseErrors=V(()=>this.parseErrorsSource()?.().map(e=>ie(_({},e),{fieldTree:G(this.state).fieldTree,formField:this}))??[]);errors=V(()=>this.state().errors().filter(e=>!e.formField||e.formField===this));isFieldBinding=!1;get controlValueAccessor(){return this.controlValueAccessors?.[0]??this.interopNgControl?.valueAccessor??void 0}installClassBindingEffect(){let e=Object.entries(this.config?.classes??{}).map(([r,o])=>[r,V(()=>o(this))]);if(e.length===0)return;let t=Hl();Fa({write:()=>{for(let[r,o]of e){let a=o();Yi(t,r,a)&&(a?this.renderer.addClass(this.element,r):this.renderer.removeClass(this.element,r))}}},{injector:this.injector})}focus(e){this.focuser(e)}registerAsBinding(e){if(this.isFieldBinding)throw new O(1913,!1);this.isFieldBinding=!0,this.installClassBindingEffect(),e?.focus&&(this.focuser=t=>e.focus(t)),ut(t=>{let r=this.state();r.nodeState.formFieldBindings.update(o=>[...o,this]),t(()=>{r.nodeState.formFieldBindings.update(o=>o.filter(a=>a!==this))})},{injector:this.injector})}[YS];\u0275ngControlCreate(e){if(!e.hasPassThrough)if(this.controlValueAccessor)this.\u0275ngControlUpdate=GS(e,this);else if(e.customControl)this.\u0275ngControlUpdate=US(e,this);else if(this.elementIsNativeFormElement)this.\u0275ngControlUpdate=qS(e,this,this.parseErrorsSource);else throw new O(1914,!1)}\u0275ngControlUpdate;elementAcceptsNativeProperty(e){if(!this.elementIsNativeFormElement)return!1;switch(e){case"min":case"max":return this.elementAcceptsNumericValues;case"minLength":case"maxLength":return this.elementAcceptsTextualValues;case"disabled":case"required":case"readonly":case"name":return!0;default:return!1}}static \u0275fac=function(t){return new(t||i)};static \u0275dir=R({type:i,selectors:[["","formField",""]],inputs:{field:[1,"formField","field"]},exportAs:["formField"],features:[Pe([{provide:XS,useExisting:i},{provide:Kt,useFactory:()=>l(i).interopNgControl},{provide:FS,useFactory:()=>l(i).parseErrorsSource}]),yh("formField")]})}return i})(),iv=(()=>{class i{fieldTree=io.required({alias:"formRoot"});onSubmit(e){e.preventDefault(),Z_(this.fieldTree())}static \u0275fac=function(t){return new(t||i)};static \u0275dir=R({type:i,selectors:[["form","formRoot",""]],hostAttrs:["novalidate",""],hostBindings:function(t,r){t&1&&S("submit",function(a){return r.onSubmit(a)})},inputs:{fieldTree:[1,"formRoot","fieldTree"]}})}return i})();function KS(i,n){if(i&1&&(u(0,"mat-option",5),g(1),h()),i&2){let e=n.$implicit;D("value",e),f(),he(e)}}function ZS(i,n){if(i&1&&(u(0,"mat-form-field",2)(1,"mat-label"),g(2,"Max Rounds"),h(),u(3,"mat-select",4),to(4,KS,2,2,"mat-option",5,xh),h(),Qr(),h()),i&2){let e=T();f(3),D("formField",e.gameForm.maxRounds),Jr(),f(),no(e.roundOptions)}}function QS(i,n){i&1&&(u(0,"mat-hint",6),g(1," Mindestens ein menschlicher Spieler wird ben\xF6tigt. "),h())}function JS(i,n){i&1&&(u(0,"mat-hint",21),g(1," fill with name please! "),h())}function ex(i,n){if(i&1&&(u(0,"mat-form-field",23)(1,"mat-label"),g(2,"KI-Difficulty"),h(),u(3,"mat-select",4)(4,"mat-option",5),g(5,"Leicht"),h(),u(6,"mat-option",5),g(7,"Mittel"),h(),u(8,"mat-option",5),g(9,"Schwer"),h()(),Qr(),h()),i&2){let e=T().$implicit,t=T();f(3),D("formField",e.difficulty),Jr(),f(),D("value",t.difficulty.Easy),f(2),D("value",t.difficulty.Medium),f(2),D("value",t.difficulty.Hard)}}function tx(i,n){if(i&1){let e=Te();u(0,"div",14)(1,"mat-form-field",17)(2,"mat-label"),g(3),h(),u(4,"div",18),Y(5,"input",19),Qr(),u(6,"button",20),S("click",function(){let r=we(e).$index,o=T();return Ce(o.removePlayerName(r))}),u(7,"mat-icon"),g(8,"close"),h()()(),W(9,JS,2,0,"mat-hint",21),h(),u(10,"div",22),g(11),h(),W(12,ex,10,4,"mat-form-field",23),u(13,"button",24),S("click",function(r){return r.preventDefault()}),u(14,"mat-icon"),g(15,"reorder"),h()()()}if(i&2){let e=n.$implicit,t=n.$index,r=T();f(3),ne("Player ",t+1),f(2),D("id",yi("playerName-",t))("formField",e.name),Jr(),f(4),q(e.name().value()===""?9:-1),f(2),ne(" ",r.getWins(e().value())," "),f(),q(e.isAI().value()?12:-1)}}function nx(i,n){if(i&1){let e=Te();u(0,"button",25),S("click",function(){we(e);let r=T();return Ce(r.scrollToTop())}),u(1,"mat-icon"),g(2,"arrow_upward"),h()()}}function ix(i,n){if(i&1){let e=Te();u(0,"button",26),S("click",function(){we(e);let r=T();return Ce(r.scrollToBottom())}),u(1,"mat-icon"),g(2,"arrow_downward"),h()()}}var rv=(()=>{class i{constructor(){this.gameType=M,this.difficulty=ot,this.router=l(rt),this.cdr=l(oe),this.showScrollTopButton=!1,this.showScrollBottomButton=!1,this.roundOptions=Array.from({length:15},(e,t)=>(t+1)*3),this.gameState=k({gameType:M.Simple501,overviewPlayers:[{name:"first",isAI:!1,difficulty:ot.Medium,wins:0},{name:"second",isAI:!1,difficulty:ot.Medium,wins:0}],maxRounds:3}),this.gameForm=Lu(this.gameState,{submission:{action:e=>ce(this,null,function*(){this.onSubmit()}),ignoreValidators:"none"}}),this.defaultFormState={gameType:M.Simple501,overviewPlayers:[{name:"first",isAI:!1,difficulty:ot.Medium,wins:0},{name:"second",isAI:!1,difficulty:ot.Medium,wins:0}],maxRounds:3}}onWindowScroll(){this.checkScrollVisibility()}checkScrollVisibility(){let e=document.querySelector('button[type="submit"]');if(e){let r=e.getBoundingClientRect();this.showScrollTopButton=r.bottom<0}let t=document.querySelectorAll(".player-row-width");if(t.length>0){let o=t[t.length-1].getBoundingClientRect();this.showScrollBottomButton=o.top>window.innerHeight}else this.showScrollBottomButton=!1}scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}scrollToBottom(){window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})}ngOnInit(){if(localStorage.getItem("playerNames")){let e=JSON.parse(localStorage.getItem("playerNames"));e.length>0&&typeof e[0]=="string"?this.gameState().overviewPlayers=e.map(t=>({name:t,isAI:!1,difficulty:ot.Medium,wins:0})):this.gameState().overviewPlayers=e}if(localStorage.getItem("gameType")){let e=JSON.parse(localStorage.getItem("gameType"));this.gameState().gameType=this.getGameType(e)}}get getOverviewPlayers(){return this.gameState().overviewPlayers}addPlayerName(){this.gameState().overviewPlayers.length<8&&(this.gameState.update(t=>ie(_({},t),{overviewPlayers:[...t.overviewPlayers,{name:"",isAI:!1,difficulty:ot.Medium,wins:0}]})),setTimeout(()=>this.checkScrollVisibility(),100))}addAIPlayer(){if(this.getOverviewPlayers.length<8){let e=["Borg","Data","Hal","Skynet","Jarvis","GlaDOS","Cortana","R2D2"];e=e.filter(o=>this.gameForm.overviewPlayers().value().find(a=>a.name==="KI-"+o)===void 0);let r={name:"KI-"+e[Math.floor(Math.random()*e.length)],isAI:!0,difficulty:ot.Medium,wins:0};this.gameState.update(o=>ie(_({},o),{overviewPlayers:[...o.overviewPlayers,r]})),this.cdr.detectChanges(),setTimeout(()=>this.checkScrollVisibility(),100)}}removePlayerName(e){this.getOverviewPlayers.splice(e,1),setTimeout(()=>this.checkScrollVisibility(),100)}onSubmit(){let e=this.gameState().overviewPlayers,t=this.gameState().gameType,r=this.gameState().maxRounds,o={gameType:t,players:JSON.stringify(e),maxRounds:r};t==M.Cricket?this.router.navigate(["cricketboard"],{queryParams:o}):this.router.navigate(["dartboard"],{queryParams:o}),localStorage.setItem("playerNames",JSON.stringify(e)),localStorage.setItem("gameType",JSON.stringify(t))}onReset(e){e.preventDefault();let t=structuredClone(this.defaultFormState.overviewPlayers);this.gameState.set(ie(_({},this.defaultFormState),{overviewPlayers:t}))}validateGameStart(e){let t=e.length>0,r=!e.some(a=>a.name===""||a.name===null),o=e.some(a=>!a.isAI);return t&&r&&o}getGameType(e){switch(e){case"501":return M.Simple501;case"Cricket":return M.Cricket;case"501-DoubleOut":return M.DoubleOut501;case"Elimination-301":return M.Elimination301;case"Highscore":return M.Highscore;case"Random-Hit":case"RandomHit":return M.RandomHit;default:return M.Simple501}}getWins(e){let t=!1,r=this.gameState().overviewPlayers;if(localStorage.getItem("playerNames")){let o=JSON.parse(localStorage.getItem("playerNames"));if(this.getOverviewPlayers.length===o.length){let a=o.map(c=>c.name),s=r.map(c=>c.name);t=a.every(c=>s.includes(c))}}return t?e.wins:(r.forEach(o=>o.wins=0),localStorage.setItem("playerNames",JSON.stringify(r)),0)}drop(e){let t=[...this.gameState().overviewPlayers];kl(t,e.previousIndex,e.currentIndex),this.gameState.update(r=>ie(_({},r),{overviewPlayers:t}))}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=w({type:i,selectors:[["app-game-selection"]],hostBindings:function(t,r){t&1&&S("scroll",function(){return r.onWindowScroll()},tn)},decls:40,vars:13,consts:[[1,"d-flex","justify-content-center","ms-2","game-selection"],[1,"ms-2","mt-2","vw-100","justify-content-center",3,"reset","formRoot"],["appearance","fill",1,"me-2"],[1,"text"],[3,"formField"],[3,"value"],[1,"ms-2","mt-2","text-danger"],[1,"d-flex","flex-row","my-3","overview-btn-width","mb-5"],["color","accent","mat-raised-button","","type","submit",1,"start-btn",3,"disabled"],["color","warn","mat-raised-button","","type","reset",1,"ms-2","me-2","reset-btn","text-black"],[1,"d-flex","flex-row","my-3","overview-btn-width"],["mat-raised-button","","color","accent","type","button",3,"click"],["mat-raised-button","","color","primary","type","button",1,"ms-2",3,"click"],["cdkDropList","",1,"d-flex","flex-column",3,"cdkDropListDropped"],["cdkDrag","",1,"d-flex","flex-row","border","justify-content-between","border-warning","p-3","rounded-3","player-row-width","shadow","m-1"],["mat-fab","","color","primary",1,"scroll-btn"],["mat-fab","","color","warn",1,"scroll-btn"],["appearance","fill"],[1,"d-flex","flex-row"],["matInput","","type","text",3,"id","formField"],["mat-mini-fab","","type","button","color","warn",1,"ms-2","mb-1",3,"click"],[1,"text-bg-danger"],[1,"align-content-center","text-warning","fw-bold","p-1"],["appearance","fill",1,"difficulty-select","p-3"],["mat-icon-button","",3,"click"],["mat-fab","","color","primary",1,"scroll-btn",3,"click"],["mat-fab","","color","warn",1,"scroll-btn",3,"click"]],template:function(t,r){t&1&&(u(0,"div",0)(1,"form",1),S("reset",function(a){return r.onReset(a)}),u(2,"mat-form-field",2)(3,"mat-label",3),g(4,"Game Type"),h(),u(5,"mat-select",4)(6,"mat-option",5),g(7,"501"),h(),u(8,"mat-option",5),g(9,"501 (Double Out)"),h(),u(10,"mat-option",5),g(11,"Cricket"),h(),u(12,"mat-option",5),g(13,"Elimination (301)"),h(),u(14,"mat-option",5),g(15,"Highscore"),h(),u(16,"mat-option",5),g(17,"Random Hit"),h()(),Qr(),h(),W(18,ZS,6,1,"mat-form-field",2),W(19,QS,2,0,"mat-hint",6),u(20,"div",7)(21,"button",8),g(22,"Start "),h(),u(23,"button",9),g(24,"Reset"),h()(),u(25,"div",10)(26,"button",11),S("click",function(){return r.addPlayerName()}),u(27,"mat-icon"),g(28," add "),h(),g(29," Player "),h(),u(30,"button",12),S("click",function(){return r.addAIPlayer()}),u(31,"mat-icon"),g(32," smart_toy "),h(),g(33," +KI-Player "),h()(),u(34,"div",13),S("cdkDropListDropped",function(a){return r.drop(a)}),to(35,tx,16,7,"div",14,Ta),h()(),W(37,nx,3,0,"button",15),W(38,ix,3,0,"button",16),h(),Y(39,"app-web-component-wrapper")),t&2&&(f(),D("formRoot",r.gameForm),f(4),D("formField",r.gameForm.gameType),Jr(),f(),D("value",r.gameType.Simple501),f(2),D("value",r.gameType.DoubleOut501),f(2),D("value",r.gameType.Cricket),f(2),D("value",r.gameType.Elimination301),f(2),D("value",r.gameType.Highscore),f(2),D("value",r.gameType.RandomHit),f(2),q(r.gameState().gameType===r.gameType.Highscore||r.gameState().gameType===r.gameType.RandomHit?18:-1),f(),q(r.gameForm.overviewPlayers().value().length>0&&!r.validateGameStart(r.gameForm.overviewPlayers().value())?19:-1),f(2),D("disabled",!r.validateGameStart(r.gameForm.overviewPlayers().value())),f(14),no(r.gameForm.overviewPlayers),f(2),q(r.showScrollTopButton?37:-1),f(),q(r.showScrollBottomButton?38:-1))},dependencies:[Ae,vl,Rg,yg,Se,Ze,cn,Fn,_r,Wi,Ol,ua,ha,T_,I_,Or,F_,O_,gn,pn,g_,p_,N_,iv,Ag,Gi,nv],styles:['@charset "UTF-8";.cdk-drag-preview[_ngcontent-%COMP%]{border:none;box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.mw-80[_ngcontent-%COMP%]{max-width:80%}.difficulty-select[_ngcontent-%COMP%]{width:10rem}.scroll-btn[_ngcontent-%COMP%]{position:fixed;bottom:20px;right:20px;z-index:1000}.player-row-width[_ngcontent-%COMP%]{max-width:80%;cursor:grab}.player-row-width[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:active{border-color:green!important;cursor:grabbing;transform:scale(1.05)}.game-selection[_ngcontent-%COMP%]{overflow:hidden}.overview-btn-width[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:10rem}']})}}return i})();var ov=(()=>{class i{constructor(e){this.router=e}static{this.\u0275fac=function(t){return new(t||i)(re(rt))}}static{this.\u0275cmp=w({type:i,selectors:[["app-not-found"]],decls:6,vars:1,consts:[[1,"container","text-center","mt-lg-5"]],template:function(t,r){t&1&&(Be(0,"div",0)(1,"h1")(2,"code"),g(3),Ve(4,"br"),g(5," 404 not found"),qe()()()),t&2&&(f(3),ne(" ",r.router.url))},encapsulation:2})}}return i})();var $u=(()=>{class i{constructor(e,t,r){this.dartService=e,this.cricketService=t,this.currentplayerService=r,this.roundCountService=l(Bt)}resolve(e,t){let r=e.queryParamMap.get("gameType"),o=e.queryParamMap.get("players"),a=e.queryParamMap.getAll("playerNames"),s=e.queryParamMap.get("maxRounds"),c=[];return o?c=JSON.parse(o):a&&a.length>0&&(c=a),(r===M.Highscore||r===M.RandomHit)&&s?this.roundCountService.setMaxRounds(Number(s)):this.roundCountService.setMaxRounds(),r===M.Cricket?(this.cricketService.setGameType(M.Cricket),this.cricketService.initPlayers(c)):(this.dartService.setGameType(r),this.dartService.initPlayers(c)),this.currentplayerService.currentGameMode=r,U(!0)}static{this.\u0275fac=function(t){return new(t||i)(E(Mt),E(Vt),E(fe))}}static{this.\u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();function rx(i){return Object.values(M).some(n=>n==i)}function ox(i,n){return n===M.Elimination301?i>=2:i>0}var Wu=(i,n)=>{let e=i.queryParamMap.getAll("playerNames").length,t=i.queryParamMap.get("players");if(t)try{e=JSON.parse(t).length}catch(s){}let r=i.queryParamMap.get("gameType"),o=l(rt),a=l(dn);if(rx(r)&&ox(e,r))return!0;{let s="Sorry, something went wrong. Please try again.";return e<2&&r==M.Elimination301&&(s="Please try again, u need at least 2 players"),o.navigate([]),a.open(s,"OK",{duration:3e3,verticalPosition:"top",panelClass:["app-shape-morph-snack"]}),!1}};var av=[{path:"",component:rv},{path:"cricketboard",component:Gg,canActivate:[Wu],resolve:{gameInitialization:$u}},{path:"dartboard",component:Wg,canActivate:[Wu],resolve:{gameInitialization:$u}},{path:"**",component:ov}];var qu="Service workers are disabled or not supported by this browser",Yr=class{serviceWorker;worker;registration;events;constructor(n,e){if(this.serviceWorker=n,!n)this.worker=this.events=this.registration=new at(t=>t.error(new O(5601,!1)));else{let t=null,r=new y;this.worker=new at(d=>(t!==null&&d.next(t),r.subscribe(m=>d.next(m))));let o=()=>{let{controller:d}=n;d!==null&&(t=d,r.next(t))};n.addEventListener("controllerchange",o),o(),this.registration=this.worker.pipe(Re(()=>n.getRegistration().then(d=>{if(!d)throw new O(5601,!1);return d})));let a=new y;this.events=a.asObservable();let s=d=>{let{data:m}=d;m?.type&&a.next(m)};n.addEventListener("message",s),e?.get(wt,null,{optional:!0})?.onDestroy(()=>{n.removeEventListener("controllerchange",o),n.removeEventListener("message",s)})}}postMessage(n,e){return new Promise(t=>{this.worker.pipe(xe(1)).subscribe(r=>{r.postMessage(_({action:n},e)),t()})})}postMessageWithOperation(n,e,t){let r=this.waitForOperationCompleted(t),o=this.postMessage(n,e);return Promise.all([o,r]).then(([,a])=>a)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(n){let e;return typeof n=="string"?e=t=>t.type===n:e=t=>n.includes(t.type),this.events.pipe(pe(e))}nextEventOfType(n){return this.eventsOfType(n).pipe(xe(1))}waitForOperationCompleted(n){return new Promise((e,t)=>{this.eventsOfType("OPERATION_COMPLETED").pipe(pe(r=>r.nonce===n),xe(1),K(r=>{if(r.result!==void 0)return r.result;throw new Error(r.error)})).subscribe({next:e,error:t})})}get isEnabled(){return!!this.serviceWorker}},lv=(()=>{class i{sw;messages;notificationClicks;notificationCloses;pushSubscriptionChanges;subscription;get isEnabled(){return this.sw.isEnabled}pushManager=null;subscriptionChanges=new y;constructor(e){if(this.sw=e,!e.isEnabled){this.messages=jn,this.notificationClicks=jn,this.notificationCloses=jn,this.pushSubscriptionChanges=jn,this.subscription=jn;return}this.messages=this.sw.eventsOfType("PUSH").pipe(K(r=>r.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(K(r=>r.data)),this.notificationCloses=this.sw.eventsOfType("NOTIFICATION_CLOSE").pipe(K(r=>r.data)),this.pushSubscriptionChanges=this.sw.eventsOfType("PUSH_SUBSCRIPTION_CHANGE").pipe(K(r=>r.data)),this.pushManager=this.sw.registration.pipe(K(r=>r.pushManager));let t=this.pushManager.pipe(Re(r=>r.getSubscription()));this.subscription=new at(r=>{let o=t.subscribe(r),a=this.subscriptionChanges.subscribe(r);return()=>{o.unsubscribe(),a.unsubscribe()}})}requestSubscription(e){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(qu));let t={userVisibleOnly:!0},r=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),o=new Uint8Array(new ArrayBuffer(r.length));for(let a=0;a<r.length;a++)o[a]=r.charCodeAt(a);return t.applicationServerKey=o,new Promise((a,s)=>{this.pushManager.pipe(Re(c=>c.subscribe(t)),xe(1)).subscribe({next:c=>{this.subscriptionChanges.next(c),a(c)},error:s})})}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(qu));let e=t=>{if(t===null)throw new O(5602,!1);return t.unsubscribe().then(r=>{if(!r)throw new O(5603,!1);this.subscriptionChanges.next(null)})};return new Promise((t,r)=>{this.subscription.pipe(xe(1),Re(e)).subscribe({next:t,error:r})})}decodeBase64(e){return atob(e)}static \u0275fac=function(t){return new(t||i)(E(Yr))};static \u0275prov=v({token:i,factory:i.\u0275fac})}return i})(),cv=(()=>{class i{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled}ongoingCheckForUpdate=null;constructor(e){if(this.sw=e,!e.isEnabled){this.versionUpdates=jn,this.unrecoverable=jn;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(qu));if(this.ongoingCheckForUpdate)return this.ongoingCheckForUpdate;let e=this.sw.generateNonce();return this.ongoingCheckForUpdate=this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e).finally(()=>{this.ongoingCheckForUpdate=null}),this.ongoingCheckForUpdate}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new O(5601,!1));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e)}static \u0275fac=function(t){return new(t||i)(E(Yr))};static \u0275prov=v({token:i,factory:i.\u0275fac})}return i})(),dv=new b("");function ax(){let i=l(ba);if(!("serviceWorker"in navigator&&i.enabled!==!1))return;let n=l(dv),e=l(z),t=l(wt);e.runOutsideAngular(()=>{let r=navigator.serviceWorker,o=()=>r.controller?.postMessage({action:"INITIALIZE"});r.addEventListener("controllerchange",o),t.onDestroy(()=>{r.removeEventListener("controllerchange",o)})}),e.runOutsideAngular(()=>{let r,{registrationStrategy:o}=i;if(typeof o=="function")r=new Promise(a=>o().subscribe(()=>a()));else{let[a,...s]=(o||"registerWhenStable:30000").split(":");switch(a){case"registerImmediately":r=Promise.resolve();break;case"registerWithDelay":r=sv(+s[0]||0);break;case"registerWhenStable":r=Promise.race([t.whenStable(),sv(+s[0])]);break;default:throw new O(5600,!1)}}r.then(()=>{t.destroyed||navigator.serviceWorker.register(n,{scope:i.scope,updateViaCache:i.updateViaCache,type:i.type}).catch(a=>console.error(Sn(5604,!1)))})})}function sv(i){return new Promise(n=>setTimeout(n,i))}function sx(){let i=l(ba),n=l(H),e=!0;return new Yr(e&&i.enabled!==!1?navigator.serviceWorker:void 0,n)}var ba=class{enabled;updateViaCache;type;scope;registrationStrategy};function lx(i,n={}){return Hn([lv,cv,{provide:dv,useValue:i},{provide:ba,useValue:n},{provide:Yr,useFactory:sx},eo(ax)])}var uv=(()=>{class i{static register(e,t={}){return{ngModule:i,providers:[lx(e,t)]}}static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({providers:[lv,cv]})}return i})();var cx="@",dx=(()=>{class i{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=l(H);loadingSchedulerFn=l(ux,{optional:!0});_engine;constructor(e,t,r,o,a){this.doc=e,this.delegate=t,this.zone=r,this.animationType=o,this.moduleImpl=a}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-GRDEYZDO.js").then(r=>r),t;return this.loadingSchedulerFn?t=this.loadingSchedulerFn(e):t=e(),t.catch(r=>{throw new O(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:o})=>{this._engine=r(this.animationType,this.doc);let a=new o(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(e,t){let r=this.delegate.createRenderer(e,t);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let o=new Yu(r);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let s=a.createRenderer(e,t);o.use(s),this.scheduler??=this.injector.get(rh,null,{optional:!0}),this.scheduler?.notify(10)}).catch(a=>{o.use(r)}),o}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(t){ir()};static \u0275prov=v({token:i,factory:i.\u0275fac})}return i})(),Yu=class{delegate;replay=[];\u0275type=1;constructor(n){this.delegate=n}use(n){if(this.delegate=n,this.replay!==null){for(let e of this.replay)e(n);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(n,e){return this.delegate.createElement(n,e)}createComment(n){return this.delegate.createComment(n)}createText(n){return this.delegate.createText(n)}get destroyNode(){return this.delegate.destroyNode}appendChild(n,e){this.delegate.appendChild(n,e)}insertBefore(n,e,t,r){this.delegate.insertBefore(n,e,t,r)}removeChild(n,e,t,r){this.delegate.removeChild(n,e,t,r)}selectRootElement(n,e){return this.delegate.selectRootElement(n,e)}parentNode(n){return this.delegate.parentNode(n)}nextSibling(n){return this.delegate.nextSibling(n)}setAttribute(n,e,t,r){this.delegate.setAttribute(n,e,t,r)}removeAttribute(n,e,t){this.delegate.removeAttribute(n,e,t)}addClass(n,e){this.delegate.addClass(n,e)}removeClass(n,e){this.delegate.removeClass(n,e)}setStyle(n,e,t,r){this.delegate.setStyle(n,e,t,r)}removeStyle(n,e,t){this.delegate.removeStyle(n,e,t)}setProperty(n,e,t){this.shouldReplay(e)&&this.replay.push(r=>r.setProperty(n,e,t)),this.delegate.setProperty(n,e,t)}setValue(n,e){this.delegate.setValue(n,e)}listen(n,e,t,r){return this.shouldReplay(e)&&this.replay.push(o=>o.listen(n,e,t,r)),this.delegate.listen(n,e,t,r)}shouldReplay(n){return this.replay!==null&&n.startsWith(cx)}},ux=new b("");function hv(i="animations"){return Zr("NgAsyncAnimations"),Hn([{provide:He,useFactory:()=>new dx(l(N),l(ho),l(z),i)},{provide:er,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}ao.production&&void 0;Mc(Bg,{providers:[Nd(av,Ys()),hv(),th(uv.register("ngsw-worker.js",{enabled:ao.production,registrationStrategy:"registerWhenStable:30000"})),{provide:Sh,useFactory:Xp,multi:!0}]}).catch(i=>console.error(i));
