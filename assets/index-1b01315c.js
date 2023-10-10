var z_=Object.defineProperty;var B_=(e,t,n)=>t in e?z_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var U=(e,t,n)=>(B_(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var at=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Py(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var My={exports:{}},dl={},Oy={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ea=Symbol.for("react.element"),U_=Symbol.for("react.portal"),V_=Symbol.for("react.fragment"),W_=Symbol.for("react.strict_mode"),H_=Symbol.for("react.profiler"),G_=Symbol.for("react.provider"),Y_=Symbol.for("react.context"),X_=Symbol.for("react.forward_ref"),K_=Symbol.for("react.suspense"),Q_=Symbol.for("react.memo"),Z_=Symbol.for("react.lazy"),Kh=Symbol.iterator;function q_(e){return e===null||typeof e!="object"?null:(e=Kh&&e[Kh]||e["@@iterator"],typeof e=="function"?e:null)}var Iy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ly=Object.assign,Ny={};function Ai(e,t,n){this.props=e,this.context=t,this.refs=Ny,this.updater=n||Iy}Ai.prototype.isReactComponent={};Ai.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ai.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ry(){}Ry.prototype=Ai.prototype;function Jf(e,t,n){this.props=e,this.context=t,this.refs=Ny,this.updater=n||Iy}var ed=Jf.prototype=new Ry;ed.constructor=Jf;Ly(ed,Ai.prototype);ed.isPureReactComponent=!0;var Qh=Array.isArray,Fy=Object.prototype.hasOwnProperty,td={current:null},Dy={key:!0,ref:!0,__self:!0,__source:!0};function jy(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Fy.call(t,r)&&!Dy.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:ea,type:e,key:o,ref:a,props:i,_owner:td.current}}function J_(e,t){return{$$typeof:ea,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function nd(e){return typeof e=="object"&&e!==null&&e.$$typeof===ea}function ew(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Zh=/\/+/g;function Jl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ew(""+e.key):t.toString(36)}function os(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ea:case U_:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Jl(a,0):r,Qh(i)?(n="",e!=null&&(n=e.replace(Zh,"$&/")+"/"),os(i,t,n,"",function(u){return u})):i!=null&&(nd(i)&&(i=J_(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Zh,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Qh(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+Jl(o,s);a+=os(o,t,n,l,i)}else if(l=q_(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+Jl(o,s++),a+=os(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ma(e,t,n){if(e==null)return e;var r=[],i=0;return os(e,r,"","",function(o){return t.call(n,o,i++)}),r}function tw(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ge={current:null},as={transition:null},nw={ReactCurrentDispatcher:Ge,ReactCurrentBatchConfig:as,ReactCurrentOwner:td};G.Children={map:ma,forEach:function(e,t,n){ma(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ma(e,function(){t++}),t},toArray:function(e){return ma(e,function(t){return t})||[]},only:function(e){if(!nd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};G.Component=Ai;G.Fragment=V_;G.Profiler=H_;G.PureComponent=Jf;G.StrictMode=W_;G.Suspense=K_;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nw;G.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ly({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=td.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Fy.call(t,l)&&!Dy.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:ea,type:e.type,key:i,ref:o,props:r,_owner:a}};G.createContext=function(e){return e={$$typeof:Y_,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:G_,_context:e},e.Consumer=e};G.createElement=jy;G.createFactory=function(e){var t=jy.bind(null,e);return t.type=e,t};G.createRef=function(){return{current:null}};G.forwardRef=function(e){return{$$typeof:X_,render:e}};G.isValidElement=nd;G.lazy=function(e){return{$$typeof:Z_,_payload:{_status:-1,_result:e},_init:tw}};G.memo=function(e,t){return{$$typeof:Q_,type:e,compare:t===void 0?null:t}};G.startTransition=function(e){var t=as.transition;as.transition={};try{e()}finally{as.transition=t}};G.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};G.useCallback=function(e,t){return Ge.current.useCallback(e,t)};G.useContext=function(e){return Ge.current.useContext(e)};G.useDebugValue=function(){};G.useDeferredValue=function(e){return Ge.current.useDeferredValue(e)};G.useEffect=function(e,t){return Ge.current.useEffect(e,t)};G.useId=function(){return Ge.current.useId()};G.useImperativeHandle=function(e,t,n){return Ge.current.useImperativeHandle(e,t,n)};G.useInsertionEffect=function(e,t){return Ge.current.useInsertionEffect(e,t)};G.useLayoutEffect=function(e,t){return Ge.current.useLayoutEffect(e,t)};G.useMemo=function(e,t){return Ge.current.useMemo(e,t)};G.useReducer=function(e,t,n){return Ge.current.useReducer(e,t,n)};G.useRef=function(e){return Ge.current.useRef(e)};G.useState=function(e){return Ge.current.useState(e)};G.useSyncExternalStore=function(e,t,n){return Ge.current.useSyncExternalStore(e,t,n)};G.useTransition=function(){return Ge.current.useTransition()};G.version="18.2.0";Oy.exports=G;var V=Oy.exports;const rd=Py(V);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rw=V,iw=Symbol.for("react.element"),ow=Symbol.for("react.fragment"),aw=Object.prototype.hasOwnProperty,sw=rw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,lw={key:!0,ref:!0,__self:!0,__source:!0};function zy(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)aw.call(t,r)&&!lw.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:iw,type:e,key:o,ref:a,props:i,_owner:sw.current}}dl.Fragment=ow;dl.jsx=zy;dl.jsxs=zy;My.exports=dl;var L=My.exports,rc={},By={exports:{}},mt={},Uy={exports:{}},Vy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,M){var I=A.length;A.push(M);e:for(;0<I;){var z=I-1>>>1,B=A[z];if(0<i(B,M))A[z]=M,A[I]=B,I=z;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var M=A[0],I=A.pop();if(I!==M){A[0]=I;e:for(var z=0,B=A.length,W=B>>>1;z<W;){var K=2*(z+1)-1,de=A[K],he=K+1,Mt=A[he];if(0>i(de,I))he<B&&0>i(Mt,de)?(A[z]=Mt,A[he]=I,z=he):(A[z]=de,A[K]=I,z=K);else if(he<B&&0>i(Mt,I))A[z]=Mt,A[he]=I,z=he;else break e}}return M}function i(A,M){var I=A.sortIndex-M.sortIndex;return I!==0?I:A.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],c=1,f=null,d=3,h=!1,g=!1,m=!1,y=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(A){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=A)r(u),M.sortIndex=M.expirationTime,t(l,M);else break;M=n(u)}}function $(A){if(m=!1,b(A),!g)if(n(l)!==null)g=!0,N(_);else{var M=n(u);M!==null&&j($,M.startTime-A)}}function _(A,M){g=!1,m&&(m=!1,p(E),E=-1),h=!0;var I=d;try{for(b(M),f=n(l);f!==null&&(!(f.expirationTime>M)||A&&!w());){var z=f.callback;if(typeof z=="function"){f.callback=null,d=f.priorityLevel;var B=z(f.expirationTime<=M);M=e.unstable_now(),typeof B=="function"?f.callback=B:f===n(l)&&r(l),b(M)}else r(l);f=n(l)}if(f!==null)var W=!0;else{var K=n(u);K!==null&&j($,K.startTime-M),W=!1}return W}finally{f=null,d=I,h=!1}}var S=!1,x=null,E=-1,O=5,C=-1;function w(){return!(e.unstable_now()-C<O)}function k(){if(x!==null){var A=e.unstable_now();C=A;var M=!0;try{M=x(!0,A)}finally{M?P():(S=!1,x=null)}}else S=!1}var P;if(typeof v=="function")P=function(){v(k)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,R=D.port2;D.port1.onmessage=k,P=function(){R.postMessage(null)}}else P=function(){y(k,0)};function N(A){x=A,S||(S=!0,P())}function j(A,M){E=y(function(){A(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){g||h||(g=!0,N(_))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(A){switch(d){case 1:case 2:case 3:var M=3;break;default:M=d}var I=d;d=M;try{return A()}finally{d=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,M){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var I=d;d=A;try{return M()}finally{d=I}},e.unstable_scheduleCallback=function(A,M,I){var z=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?z+I:z):I=z,A){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=I+B,A={id:c++,callback:M,priorityLevel:A,startTime:I,expirationTime:B,sortIndex:-1},I>z?(A.sortIndex=I,t(u,A),n(l)===null&&A===n(u)&&(m?(p(E),E=-1):m=!0,j($,I-z))):(A.sortIndex=B,t(l,A),g||h||(g=!0,N(_))),A},e.unstable_shouldYield=w,e.unstable_wrapCallback=function(A){var M=d;return function(){var I=d;d=M;try{return A.apply(this,arguments)}finally{d=I}}}})(Vy);Uy.exports=Vy;var uw=Uy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wy=V,vt=uw;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hy=new Set,Oo={};function kr(e,t){hi(e,t),hi(e+"Capture",t)}function hi(e,t){for(Oo[e]=t,e=0;e<t.length;e++)Hy.add(t[e])}var hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ic=Object.prototype.hasOwnProperty,cw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qh={},Jh={};function fw(e){return ic.call(Jh,e)?!0:ic.call(qh,e)?!1:cw.test(e)?Jh[e]=!0:(qh[e]=!0,!1)}function dw(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function hw(e,t,n,r){if(t===null||typeof t>"u"||dw(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ye(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Re[e]=new Ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Re[t]=new Ye(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Re[e]=new Ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Re[e]=new Ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Re[e]=new Ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Re[e]=new Ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Re[e]=new Ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Re[e]=new Ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Re[e]=new Ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var id=/[\-:]([a-z])/g;function od(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(id,od);Re[t]=new Ye(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(id,od);Re[t]=new Ye(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(id,od);Re[t]=new Ye(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Re[e]=new Ye(e,1,!1,e.toLowerCase(),null,!1,!1)});Re.xlinkHref=new Ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Re[e]=new Ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function ad(e,t,n,r){var i=Re.hasOwnProperty(t)?Re[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(hw(t,n,i,r)&&(n=null),r||i===null?fw(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var yn=Wy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ya=Symbol.for("react.element"),Hr=Symbol.for("react.portal"),Gr=Symbol.for("react.fragment"),sd=Symbol.for("react.strict_mode"),oc=Symbol.for("react.profiler"),Gy=Symbol.for("react.provider"),Yy=Symbol.for("react.context"),ld=Symbol.for("react.forward_ref"),ac=Symbol.for("react.suspense"),sc=Symbol.for("react.suspense_list"),ud=Symbol.for("react.memo"),kn=Symbol.for("react.lazy"),Xy=Symbol.for("react.offscreen"),ep=Symbol.iterator;function Di(e){return e===null||typeof e!="object"?null:(e=ep&&e[ep]||e["@@iterator"],typeof e=="function"?e:null)}var me=Object.assign,eu;function oo(e){if(eu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);eu=t&&t[1]||""}return`
`+eu+e}var tu=!1;function nu(e,t){if(!e||tu)return"";tu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{tu=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?oo(e):""}function pw(e){switch(e.tag){case 5:return oo(e.type);case 16:return oo("Lazy");case 13:return oo("Suspense");case 19:return oo("SuspenseList");case 0:case 2:case 15:return e=nu(e.type,!1),e;case 11:return e=nu(e.type.render,!1),e;case 1:return e=nu(e.type,!0),e;default:return""}}function lc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Gr:return"Fragment";case Hr:return"Portal";case oc:return"Profiler";case sd:return"StrictMode";case ac:return"Suspense";case sc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Yy:return(e.displayName||"Context")+".Consumer";case Gy:return(e._context.displayName||"Context")+".Provider";case ld:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ud:return t=e.displayName||null,t!==null?t:lc(e.type)||"Memo";case kn:t=e._payload,e=e._init;try{return lc(e(t))}catch{}}return null}function gw(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return lc(t);case 8:return t===sd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Hn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ky(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function vw(e){var t=Ky(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ba(e){e._valueTracker||(e._valueTracker=vw(e))}function Qy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ky(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function xs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function uc(e,t){var n=t.checked;return me({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function tp(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Hn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Zy(e,t){t=t.checked,t!=null&&ad(e,"checked",t,!1)}function cc(e,t){Zy(e,t);var n=Hn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?fc(e,t.type,n):t.hasOwnProperty("defaultValue")&&fc(e,t.type,Hn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function np(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function fc(e,t,n){(t!=="number"||xs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ao=Array.isArray;function ri(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Hn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function dc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return me({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function rp(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(T(92));if(ao(n)){if(1<n.length)throw Error(T(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Hn(n)}}function qy(e,t){var n=Hn(t.value),r=Hn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ip(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Jy(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Jy(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var $a,e0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for($a=$a||document.createElement("div"),$a.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=$a.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Io(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var go={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mw=["Webkit","ms","Moz","O"];Object.keys(go).forEach(function(e){mw.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),go[t]=go[e]})});function t0(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||go.hasOwnProperty(e)&&go[e]?(""+t).trim():t+"px"}function n0(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=t0(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var yw=me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pc(e,t){if(t){if(yw[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function gc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vc=null;function cd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var mc=null,ii=null,oi=null;function op(e){if(e=ra(e)){if(typeof mc!="function")throw Error(T(280));var t=e.stateNode;t&&(t=ml(t),mc(e.stateNode,e.type,t))}}function r0(e){ii?oi?oi.push(e):oi=[e]:ii=e}function i0(){if(ii){var e=ii,t=oi;if(oi=ii=null,op(e),t)for(e=0;e<t.length;e++)op(t[e])}}function o0(e,t){return e(t)}function a0(){}var ru=!1;function s0(e,t,n){if(ru)return e(t,n);ru=!0;try{return o0(e,t,n)}finally{ru=!1,(ii!==null||oi!==null)&&(a0(),i0())}}function Lo(e,t){var n=e.stateNode;if(n===null)return null;var r=ml(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(T(231,t,typeof n));return n}var yc=!1;if(hn)try{var ji={};Object.defineProperty(ji,"passive",{get:function(){yc=!0}}),window.addEventListener("test",ji,ji),window.removeEventListener("test",ji,ji)}catch{yc=!1}function bw(e,t,n,r,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var vo=!1,Ss=null,ks=!1,bc=null,$w={onError:function(e){vo=!0,Ss=e}};function _w(e,t,n,r,i,o,a,s,l){vo=!1,Ss=null,bw.apply($w,arguments)}function ww(e,t,n,r,i,o,a,s,l){if(_w.apply(this,arguments),vo){if(vo){var u=Ss;vo=!1,Ss=null}else throw Error(T(198));ks||(ks=!0,bc=u)}}function Er(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function l0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ap(e){if(Er(e)!==e)throw Error(T(188))}function xw(e){var t=e.alternate;if(!t){if(t=Er(e),t===null)throw Error(T(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ap(i),e;if(o===r)return ap(i),t;o=o.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?e:t}function u0(e){return e=xw(e),e!==null?c0(e):null}function c0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=c0(e);if(t!==null)return t;e=e.sibling}return null}var f0=vt.unstable_scheduleCallback,sp=vt.unstable_cancelCallback,Sw=vt.unstable_shouldYield,kw=vt.unstable_requestPaint,we=vt.unstable_now,Ew=vt.unstable_getCurrentPriorityLevel,fd=vt.unstable_ImmediatePriority,d0=vt.unstable_UserBlockingPriority,Es=vt.unstable_NormalPriority,Aw=vt.unstable_LowPriority,h0=vt.unstable_IdlePriority,hl=null,Qt=null;function Tw(e){if(Qt&&typeof Qt.onCommitFiberRoot=="function")try{Qt.onCommitFiberRoot(hl,e,void 0,(e.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:Mw,Cw=Math.log,Pw=Math.LN2;function Mw(e){return e>>>=0,e===0?32:31-(Cw(e)/Pw|0)|0}var _a=64,wa=4194304;function so(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function As(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=so(s):(o&=a,o!==0&&(r=so(o)))}else a=n&~i,a!==0?r=so(a):o!==0&&(r=so(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-jt(t),i=1<<n,r|=e[n],t&=~i;return r}function Ow(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Iw(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-jt(o),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=Ow(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function $c(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function p0(){var e=_a;return _a<<=1,!(_a&4194240)&&(_a=64),e}function iu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ta(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-jt(t),e[t]=n}function Lw(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-jt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function dd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-jt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var te=0;function g0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var v0,hd,m0,y0,b0,_c=!1,xa=[],Rn=null,Fn=null,Dn=null,No=new Map,Ro=new Map,Cn=[],Nw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lp(e,t){switch(e){case"focusin":case"focusout":Rn=null;break;case"dragenter":case"dragleave":Fn=null;break;case"mouseover":case"mouseout":Dn=null;break;case"pointerover":case"pointerout":No.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(t.pointerId)}}function zi(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ra(t),t!==null&&hd(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Rw(e,t,n,r,i){switch(t){case"focusin":return Rn=zi(Rn,e,t,n,r,i),!0;case"dragenter":return Fn=zi(Fn,e,t,n,r,i),!0;case"mouseover":return Dn=zi(Dn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return No.set(o,zi(No.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ro.set(o,zi(Ro.get(o)||null,e,t,n,r,i)),!0}return!1}function $0(e){var t=lr(e.target);if(t!==null){var n=Er(t);if(n!==null){if(t=n.tag,t===13){if(t=l0(n),t!==null){e.blockedOn=t,b0(e.priority,function(){m0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ss(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=wc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);vc=r,n.target.dispatchEvent(r),vc=null}else return t=ra(n),t!==null&&hd(t),e.blockedOn=n,!1;t.shift()}return!0}function up(e,t,n){ss(e)&&n.delete(t)}function Fw(){_c=!1,Rn!==null&&ss(Rn)&&(Rn=null),Fn!==null&&ss(Fn)&&(Fn=null),Dn!==null&&ss(Dn)&&(Dn=null),No.forEach(up),Ro.forEach(up)}function Bi(e,t){e.blockedOn===t&&(e.blockedOn=null,_c||(_c=!0,vt.unstable_scheduleCallback(vt.unstable_NormalPriority,Fw)))}function Fo(e){function t(i){return Bi(i,e)}if(0<xa.length){Bi(xa[0],e);for(var n=1;n<xa.length;n++){var r=xa[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Rn!==null&&Bi(Rn,e),Fn!==null&&Bi(Fn,e),Dn!==null&&Bi(Dn,e),No.forEach(t),Ro.forEach(t),n=0;n<Cn.length;n++)r=Cn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Cn.length&&(n=Cn[0],n.blockedOn===null);)$0(n),n.blockedOn===null&&Cn.shift()}var ai=yn.ReactCurrentBatchConfig,Ts=!0;function Dw(e,t,n,r){var i=te,o=ai.transition;ai.transition=null;try{te=1,pd(e,t,n,r)}finally{te=i,ai.transition=o}}function jw(e,t,n,r){var i=te,o=ai.transition;ai.transition=null;try{te=4,pd(e,t,n,r)}finally{te=i,ai.transition=o}}function pd(e,t,n,r){if(Ts){var i=wc(e,t,n,r);if(i===null)pu(e,t,r,Cs,n),lp(e,r);else if(Rw(i,e,t,n,r))r.stopPropagation();else if(lp(e,r),t&4&&-1<Nw.indexOf(e)){for(;i!==null;){var o=ra(i);if(o!==null&&v0(o),o=wc(e,t,n,r),o===null&&pu(e,t,r,Cs,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else pu(e,t,r,null,n)}}var Cs=null;function wc(e,t,n,r){if(Cs=null,e=cd(r),e=lr(e),e!==null)if(t=Er(e),t===null)e=null;else if(n=t.tag,n===13){if(e=l0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Cs=e,null}function _0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ew()){case fd:return 1;case d0:return 4;case Es:case Aw:return 16;case h0:return 536870912;default:return 16}default:return 16}}var Mn=null,gd=null,ls=null;function w0(){if(ls)return ls;var e,t=gd,n=t.length,r,i="value"in Mn?Mn.value:Mn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return ls=i.slice(e,1<r?1-r:void 0)}function us(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Sa(){return!0}function cp(){return!1}function yt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Sa:cp,this.isPropagationStopped=cp,this}return me(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sa)},persist:function(){},isPersistent:Sa}),t}var Ti={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vd=yt(Ti),na=me({},Ti,{view:0,detail:0}),zw=yt(na),ou,au,Ui,pl=me({},na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:md,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ui&&(Ui&&e.type==="mousemove"?(ou=e.screenX-Ui.screenX,au=e.screenY-Ui.screenY):au=ou=0,Ui=e),ou)},movementY:function(e){return"movementY"in e?e.movementY:au}}),fp=yt(pl),Bw=me({},pl,{dataTransfer:0}),Uw=yt(Bw),Vw=me({},na,{relatedTarget:0}),su=yt(Vw),Ww=me({},Ti,{animationName:0,elapsedTime:0,pseudoElement:0}),Hw=yt(Ww),Gw=me({},Ti,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Yw=yt(Gw),Xw=me({},Ti,{data:0}),dp=yt(Xw),Kw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qw(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Zw[e])?!!t[e]:!1}function md(){return qw}var Jw=me({},na,{key:function(e){if(e.key){var t=Kw[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=us(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:md,charCode:function(e){return e.type==="keypress"?us(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?us(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ex=yt(Jw),tx=me({},pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hp=yt(tx),nx=me({},na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:md}),rx=yt(nx),ix=me({},Ti,{propertyName:0,elapsedTime:0,pseudoElement:0}),ox=yt(ix),ax=me({},pl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),sx=yt(ax),lx=[9,13,27,32],yd=hn&&"CompositionEvent"in window,mo=null;hn&&"documentMode"in document&&(mo=document.documentMode);var ux=hn&&"TextEvent"in window&&!mo,x0=hn&&(!yd||mo&&8<mo&&11>=mo),pp=String.fromCharCode(32),gp=!1;function S0(e,t){switch(e){case"keyup":return lx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function k0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yr=!1;function cx(e,t){switch(e){case"compositionend":return k0(t);case"keypress":return t.which!==32?null:(gp=!0,pp);case"textInput":return e=t.data,e===pp&&gp?null:e;default:return null}}function fx(e,t){if(Yr)return e==="compositionend"||!yd&&S0(e,t)?(e=w0(),ls=gd=Mn=null,Yr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return x0&&t.locale!=="ko"?null:t.data;default:return null}}var dx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!dx[e.type]:t==="textarea"}function E0(e,t,n,r){r0(r),t=Ps(t,"onChange"),0<t.length&&(n=new vd("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var yo=null,Do=null;function hx(e){F0(e,0)}function gl(e){var t=Qr(e);if(Qy(t))return e}function px(e,t){if(e==="change")return t}var A0=!1;if(hn){var lu;if(hn){var uu="oninput"in document;if(!uu){var mp=document.createElement("div");mp.setAttribute("oninput","return;"),uu=typeof mp.oninput=="function"}lu=uu}else lu=!1;A0=lu&&(!document.documentMode||9<document.documentMode)}function yp(){yo&&(yo.detachEvent("onpropertychange",T0),Do=yo=null)}function T0(e){if(e.propertyName==="value"&&gl(Do)){var t=[];E0(t,Do,e,cd(e)),s0(hx,t)}}function gx(e,t,n){e==="focusin"?(yp(),yo=t,Do=n,yo.attachEvent("onpropertychange",T0)):e==="focusout"&&yp()}function vx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gl(Do)}function mx(e,t){if(e==="click")return gl(t)}function yx(e,t){if(e==="input"||e==="change")return gl(t)}function bx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Bt=typeof Object.is=="function"?Object.is:bx;function jo(e,t){if(Bt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ic.call(t,i)||!Bt(e[i],t[i]))return!1}return!0}function bp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $p(e,t){var n=bp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bp(n)}}function C0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?C0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function P0(){for(var e=window,t=xs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=xs(e.document)}return t}function bd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function $x(e){var t=P0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&C0(n.ownerDocument.documentElement,n)){if(r!==null&&bd(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=$p(n,o);var a=$p(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var _x=hn&&"documentMode"in document&&11>=document.documentMode,Xr=null,xc=null,bo=null,Sc=!1;function _p(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sc||Xr==null||Xr!==xs(r)||(r=Xr,"selectionStart"in r&&bd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bo&&jo(bo,r)||(bo=r,r=Ps(xc,"onSelect"),0<r.length&&(t=new vd("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Xr)))}function ka(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Kr={animationend:ka("Animation","AnimationEnd"),animationiteration:ka("Animation","AnimationIteration"),animationstart:ka("Animation","AnimationStart"),transitionend:ka("Transition","TransitionEnd")},cu={},M0={};hn&&(M0=document.createElement("div").style,"AnimationEvent"in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),"TransitionEvent"in window||delete Kr.transitionend.transition);function vl(e){if(cu[e])return cu[e];if(!Kr[e])return e;var t=Kr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in M0)return cu[e]=t[n];return e}var O0=vl("animationend"),I0=vl("animationiteration"),L0=vl("animationstart"),N0=vl("transitionend"),R0=new Map,wp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xn(e,t){R0.set(e,t),kr(t,[e])}for(var fu=0;fu<wp.length;fu++){var du=wp[fu],wx=du.toLowerCase(),xx=du[0].toUpperCase()+du.slice(1);Xn(wx,"on"+xx)}Xn(O0,"onAnimationEnd");Xn(I0,"onAnimationIteration");Xn(L0,"onAnimationStart");Xn("dblclick","onDoubleClick");Xn("focusin","onFocus");Xn("focusout","onBlur");Xn(N0,"onTransitionEnd");hi("onMouseEnter",["mouseout","mouseover"]);hi("onMouseLeave",["mouseout","mouseover"]);hi("onPointerEnter",["pointerout","pointerover"]);hi("onPointerLeave",["pointerout","pointerover"]);kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sx=new Set("cancel close invalid load scroll toggle".split(" ").concat(lo));function xp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ww(r,t,void 0,e),e.currentTarget=null}function F0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;xp(i,s,u),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;xp(i,s,u),o=l}}}if(ks)throw e=bc,ks=!1,bc=null,e}function ae(e,t){var n=t[Cc];n===void 0&&(n=t[Cc]=new Set);var r=e+"__bubble";n.has(r)||(D0(t,e,2,!1),n.add(r))}function hu(e,t,n){var r=0;t&&(r|=4),D0(n,e,r,t)}var Ea="_reactListening"+Math.random().toString(36).slice(2);function zo(e){if(!e[Ea]){e[Ea]=!0,Hy.forEach(function(n){n!=="selectionchange"&&(Sx.has(n)||hu(n,!1,e),hu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ea]||(t[Ea]=!0,hu("selectionchange",!1,t))}}function D0(e,t,n,r){switch(_0(t)){case 1:var i=Dw;break;case 4:i=jw;break;default:i=pd}n=i.bind(null,t,n,e),i=void 0,!yc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function pu(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=lr(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}s0(function(){var u=o,c=cd(n),f=[];e:{var d=R0.get(e);if(d!==void 0){var h=vd,g=e;switch(e){case"keypress":if(us(n)===0)break e;case"keydown":case"keyup":h=ex;break;case"focusin":g="focus",h=su;break;case"focusout":g="blur",h=su;break;case"beforeblur":case"afterblur":h=su;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=fp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Uw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=rx;break;case O0:case I0:case L0:h=Hw;break;case N0:h=ox;break;case"scroll":h=zw;break;case"wheel":h=sx;break;case"copy":case"cut":case"paste":h=Yw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=hp}var m=(t&4)!==0,y=!m&&e==="scroll",p=m?d!==null?d+"Capture":null:d;m=[];for(var v=u,b;v!==null;){b=v;var $=b.stateNode;if(b.tag===5&&$!==null&&(b=$,p!==null&&($=Lo(v,p),$!=null&&m.push(Bo(v,$,b)))),y)break;v=v.return}0<m.length&&(d=new h(d,g,null,n,c),f.push({event:d,listeners:m}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",d&&n!==vc&&(g=n.relatedTarget||n.fromElement)&&(lr(g)||g[pn]))break e;if((h||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,h?(g=n.relatedTarget||n.toElement,h=u,g=g?lr(g):null,g!==null&&(y=Er(g),g!==y||g.tag!==5&&g.tag!==6)&&(g=null)):(h=null,g=u),h!==g)){if(m=fp,$="onMouseLeave",p="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(m=hp,$="onPointerLeave",p="onPointerEnter",v="pointer"),y=h==null?d:Qr(h),b=g==null?d:Qr(g),d=new m($,v+"leave",h,n,c),d.target=y,d.relatedTarget=b,$=null,lr(c)===u&&(m=new m(p,v+"enter",g,n,c),m.target=b,m.relatedTarget=y,$=m),y=$,h&&g)t:{for(m=h,p=g,v=0,b=m;b;b=jr(b))v++;for(b=0,$=p;$;$=jr($))b++;for(;0<v-b;)m=jr(m),v--;for(;0<b-v;)p=jr(p),b--;for(;v--;){if(m===p||p!==null&&m===p.alternate)break t;m=jr(m),p=jr(p)}m=null}else m=null;h!==null&&Sp(f,d,h,m,!1),g!==null&&y!==null&&Sp(f,y,g,m,!0)}}e:{if(d=u?Qr(u):window,h=d.nodeName&&d.nodeName.toLowerCase(),h==="select"||h==="input"&&d.type==="file")var _=px;else if(vp(d))if(A0)_=yx;else{_=vx;var S=gx}else(h=d.nodeName)&&h.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(_=mx);if(_&&(_=_(e,u))){E0(f,_,n,c);break e}S&&S(e,d,u),e==="focusout"&&(S=d._wrapperState)&&S.controlled&&d.type==="number"&&fc(d,"number",d.value)}switch(S=u?Qr(u):window,e){case"focusin":(vp(S)||S.contentEditable==="true")&&(Xr=S,xc=u,bo=null);break;case"focusout":bo=xc=Xr=null;break;case"mousedown":Sc=!0;break;case"contextmenu":case"mouseup":case"dragend":Sc=!1,_p(f,n,c);break;case"selectionchange":if(_x)break;case"keydown":case"keyup":_p(f,n,c)}var x;if(yd)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Yr?S0(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(x0&&n.locale!=="ko"&&(Yr||E!=="onCompositionStart"?E==="onCompositionEnd"&&Yr&&(x=w0()):(Mn=c,gd="value"in Mn?Mn.value:Mn.textContent,Yr=!0)),S=Ps(u,E),0<S.length&&(E=new dp(E,e,null,n,c),f.push({event:E,listeners:S}),x?E.data=x:(x=k0(n),x!==null&&(E.data=x)))),(x=ux?cx(e,n):fx(e,n))&&(u=Ps(u,"onBeforeInput"),0<u.length&&(c=new dp("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=x))}F0(f,t)})}function Bo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ps(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Lo(e,n),o!=null&&r.unshift(Bo(e,o,i)),o=Lo(e,t),o!=null&&r.push(Bo(e,o,i))),e=e.return}return r}function jr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Sp(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=Lo(n,o),l!=null&&a.unshift(Bo(n,l,s))):i||(l=Lo(n,o),l!=null&&a.push(Bo(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var kx=/\r\n?/g,Ex=/\u0000|\uFFFD/g;function kp(e){return(typeof e=="string"?e:""+e).replace(kx,`
`).replace(Ex,"")}function Aa(e,t,n){if(t=kp(t),kp(e)!==t&&n)throw Error(T(425))}function Ms(){}var kc=null,Ec=null;function Ac(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Tc=typeof setTimeout=="function"?setTimeout:void 0,Ax=typeof clearTimeout=="function"?clearTimeout:void 0,Ep=typeof Promise=="function"?Promise:void 0,Tx=typeof queueMicrotask=="function"?queueMicrotask:typeof Ep<"u"?function(e){return Ep.resolve(null).then(e).catch(Cx)}:Tc;function Cx(e){setTimeout(function(){throw e})}function gu(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Fo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Fo(t)}function jn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ap(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ci=Math.random().toString(36).slice(2),Kt="__reactFiber$"+Ci,Uo="__reactProps$"+Ci,pn="__reactContainer$"+Ci,Cc="__reactEvents$"+Ci,Px="__reactListeners$"+Ci,Mx="__reactHandles$"+Ci;function lr(e){var t=e[Kt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[pn]||n[Kt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ap(e);e!==null;){if(n=e[Kt])return n;e=Ap(e)}return t}e=n,n=e.parentNode}return null}function ra(e){return e=e[Kt]||e[pn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function ml(e){return e[Uo]||null}var Pc=[],Zr=-1;function Kn(e){return{current:e}}function le(e){0>Zr||(e.current=Pc[Zr],Pc[Zr]=null,Zr--)}function re(e,t){Zr++,Pc[Zr]=e.current,e.current=t}var Gn={},Ue=Kn(Gn),rt=Kn(!1),yr=Gn;function pi(e,t){var n=e.type.contextTypes;if(!n)return Gn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function it(e){return e=e.childContextTypes,e!=null}function Os(){le(rt),le(Ue)}function Tp(e,t,n){if(Ue.current!==Gn)throw Error(T(168));re(Ue,t),re(rt,n)}function j0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(T(108,gw(e)||"Unknown",i));return me({},n,r)}function Is(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Gn,yr=Ue.current,re(Ue,e),re(rt,rt.current),!0}function Cp(e,t,n){var r=e.stateNode;if(!r)throw Error(T(169));n?(e=j0(e,t,yr),r.__reactInternalMemoizedMergedChildContext=e,le(rt),le(Ue),re(Ue,e)):le(rt),re(rt,n)}var sn=null,yl=!1,vu=!1;function z0(e){sn===null?sn=[e]:sn.push(e)}function Ox(e){yl=!0,z0(e)}function Qn(){if(!vu&&sn!==null){vu=!0;var e=0,t=te;try{var n=sn;for(te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}sn=null,yl=!1}catch(i){throw sn!==null&&(sn=sn.slice(e+1)),f0(fd,Qn),i}finally{te=t,vu=!1}}return null}var qr=[],Jr=0,Ls=null,Ns=0,wt=[],xt=0,br=null,un=1,cn="";function ir(e,t){qr[Jr++]=Ns,qr[Jr++]=Ls,Ls=e,Ns=t}function B0(e,t,n){wt[xt++]=un,wt[xt++]=cn,wt[xt++]=br,br=e;var r=un;e=cn;var i=32-jt(r)-1;r&=~(1<<i),n+=1;var o=32-jt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,un=1<<32-jt(t)+i|n<<i|r,cn=o+e}else un=1<<o|n<<i|r,cn=e}function $d(e){e.return!==null&&(ir(e,1),B0(e,1,0))}function _d(e){for(;e===Ls;)Ls=qr[--Jr],qr[Jr]=null,Ns=qr[--Jr],qr[Jr]=null;for(;e===br;)br=wt[--xt],wt[xt]=null,cn=wt[--xt],wt[xt]=null,un=wt[--xt],wt[xt]=null}var gt=null,ht=null,fe=!1,Dt=null;function U0(e,t){var n=St(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Pp(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,gt=e,ht=jn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,gt=e,ht=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=br!==null?{id:un,overflow:cn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=St(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,gt=e,ht=null,!0):!1;default:return!1}}function Mc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Oc(e){if(fe){var t=ht;if(t){var n=t;if(!Pp(e,t)){if(Mc(e))throw Error(T(418));t=jn(n.nextSibling);var r=gt;t&&Pp(e,t)?U0(r,n):(e.flags=e.flags&-4097|2,fe=!1,gt=e)}}else{if(Mc(e))throw Error(T(418));e.flags=e.flags&-4097|2,fe=!1,gt=e}}}function Mp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;gt=e}function Ta(e){if(e!==gt)return!1;if(!fe)return Mp(e),fe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ac(e.type,e.memoizedProps)),t&&(t=ht)){if(Mc(e))throw V0(),Error(T(418));for(;t;)U0(e,t),t=jn(t.nextSibling)}if(Mp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ht=jn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ht=null}}else ht=gt?jn(e.stateNode.nextSibling):null;return!0}function V0(){for(var e=ht;e;)e=jn(e.nextSibling)}function gi(){ht=gt=null,fe=!1}function wd(e){Dt===null?Dt=[e]:Dt.push(e)}var Ix=yn.ReactCurrentBatchConfig;function Nt(e,t){if(e&&e.defaultProps){t=me({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Rs=Kn(null),Fs=null,ei=null,xd=null;function Sd(){xd=ei=Fs=null}function kd(e){var t=Rs.current;le(Rs),e._currentValue=t}function Ic(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function si(e,t){Fs=e,xd=ei=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(et=!0),e.firstContext=null)}function Ct(e){var t=e._currentValue;if(xd!==e)if(e={context:e,memoizedValue:t,next:null},ei===null){if(Fs===null)throw Error(T(308));ei=e,Fs.dependencies={lanes:0,firstContext:e}}else ei=ei.next=e;return t}var ur=null;function Ed(e){ur===null?ur=[e]:ur.push(e)}function W0(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ed(t)):(n.next=i.next,i.next=n),t.interleaved=n,gn(e,r)}function gn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var En=!1;function Ad(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function H0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function dn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function zn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Z&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,gn(e,n)}return i=r.interleaved,i===null?(t.next=t,Ed(r)):(t.next=i.next,i.next=t),r.interleaved=t,gn(e,n)}function cs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,dd(e,n)}}function Op(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ds(e,t,n,r){var i=e.updateQueue;En=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?o=u:a.next=u,a=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==a&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;a=0,c=u=l=null,s=o;do{var d=s.lane,h=s.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=e,m=s;switch(d=t,h=n,m.tag){case 1:if(g=m.payload,typeof g=="function"){f=g.call(h,f,d);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=m.payload,d=typeof g=="function"?g.call(h,f,d):g,d==null)break e;f=me({},f,d);break e;case 2:En=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[s]:d.push(s))}else h={eventTime:h,lane:d,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=h,l=f):c=c.next=h,a|=d;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;d=s,s=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);_r|=a,e.lanes=a,e.memoizedState=f}}function Ip(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var G0=new Wy.Component().refs;function Lc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:me({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var bl={isMounted:function(e){return(e=e._reactInternals)?Er(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=He(),i=Un(e),o=dn(r,i);o.payload=t,n!=null&&(o.callback=n),t=zn(e,o,i),t!==null&&(zt(t,e,i,r),cs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=He(),i=Un(e),o=dn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=zn(e,o,i),t!==null&&(zt(t,e,i,r),cs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=He(),r=Un(e),i=dn(n,r);i.tag=2,t!=null&&(i.callback=t),t=zn(e,i,r),t!==null&&(zt(t,e,r,n),cs(t,e,r))}};function Lp(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!jo(n,r)||!jo(i,o):!0}function Y0(e,t,n){var r=!1,i=Gn,o=t.contextType;return typeof o=="object"&&o!==null?o=Ct(o):(i=it(t)?yr:Ue.current,r=t.contextTypes,o=(r=r!=null)?pi(e,i):Gn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=bl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Np(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&bl.enqueueReplaceState(t,t.state,null)}function Nc(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=G0,Ad(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ct(o):(o=it(t)?yr:Ue.current,i.context=pi(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Lc(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&bl.enqueueReplaceState(i,i.state,null),Ds(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Vi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;s===G0&&(s=i.refs={}),a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,e))}return e}function Ca(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Rp(e){var t=e._init;return t(e._payload)}function X0(e){function t(p,v){if(e){var b=p.deletions;b===null?(p.deletions=[v],p.flags|=16):b.push(v)}}function n(p,v){if(!e)return null;for(;v!==null;)t(p,v),v=v.sibling;return null}function r(p,v){for(p=new Map;v!==null;)v.key!==null?p.set(v.key,v):p.set(v.index,v),v=v.sibling;return p}function i(p,v){return p=Vn(p,v),p.index=0,p.sibling=null,p}function o(p,v,b){return p.index=b,e?(b=p.alternate,b!==null?(b=b.index,b<v?(p.flags|=2,v):b):(p.flags|=2,v)):(p.flags|=1048576,v)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,v,b,$){return v===null||v.tag!==6?(v=xu(b,p.mode,$),v.return=p,v):(v=i(v,b),v.return=p,v)}function l(p,v,b,$){var _=b.type;return _===Gr?c(p,v,b.props.children,$,b.key):v!==null&&(v.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===kn&&Rp(_)===v.type)?($=i(v,b.props),$.ref=Vi(p,v,b),$.return=p,$):($=vs(b.type,b.key,b.props,null,p.mode,$),$.ref=Vi(p,v,b),$.return=p,$)}function u(p,v,b,$){return v===null||v.tag!==4||v.stateNode.containerInfo!==b.containerInfo||v.stateNode.implementation!==b.implementation?(v=Su(b,p.mode,$),v.return=p,v):(v=i(v,b.children||[]),v.return=p,v)}function c(p,v,b,$,_){return v===null||v.tag!==7?(v=vr(b,p.mode,$,_),v.return=p,v):(v=i(v,b),v.return=p,v)}function f(p,v,b){if(typeof v=="string"&&v!==""||typeof v=="number")return v=xu(""+v,p.mode,b),v.return=p,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ya:return b=vs(v.type,v.key,v.props,null,p.mode,b),b.ref=Vi(p,null,v),b.return=p,b;case Hr:return v=Su(v,p.mode,b),v.return=p,v;case kn:var $=v._init;return f(p,$(v._payload),b)}if(ao(v)||Di(v))return v=vr(v,p.mode,b,null),v.return=p,v;Ca(p,v)}return null}function d(p,v,b,$){var _=v!==null?v.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return _!==null?null:s(p,v,""+b,$);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ya:return b.key===_?l(p,v,b,$):null;case Hr:return b.key===_?u(p,v,b,$):null;case kn:return _=b._init,d(p,v,_(b._payload),$)}if(ao(b)||Di(b))return _!==null?null:c(p,v,b,$,null);Ca(p,b)}return null}function h(p,v,b,$,_){if(typeof $=="string"&&$!==""||typeof $=="number")return p=p.get(b)||null,s(v,p,""+$,_);if(typeof $=="object"&&$!==null){switch($.$$typeof){case ya:return p=p.get($.key===null?b:$.key)||null,l(v,p,$,_);case Hr:return p=p.get($.key===null?b:$.key)||null,u(v,p,$,_);case kn:var S=$._init;return h(p,v,b,S($._payload),_)}if(ao($)||Di($))return p=p.get(b)||null,c(v,p,$,_,null);Ca(v,$)}return null}function g(p,v,b,$){for(var _=null,S=null,x=v,E=v=0,O=null;x!==null&&E<b.length;E++){x.index>E?(O=x,x=null):O=x.sibling;var C=d(p,x,b[E],$);if(C===null){x===null&&(x=O);break}e&&x&&C.alternate===null&&t(p,x),v=o(C,v,E),S===null?_=C:S.sibling=C,S=C,x=O}if(E===b.length)return n(p,x),fe&&ir(p,E),_;if(x===null){for(;E<b.length;E++)x=f(p,b[E],$),x!==null&&(v=o(x,v,E),S===null?_=x:S.sibling=x,S=x);return fe&&ir(p,E),_}for(x=r(p,x);E<b.length;E++)O=h(x,p,E,b[E],$),O!==null&&(e&&O.alternate!==null&&x.delete(O.key===null?E:O.key),v=o(O,v,E),S===null?_=O:S.sibling=O,S=O);return e&&x.forEach(function(w){return t(p,w)}),fe&&ir(p,E),_}function m(p,v,b,$){var _=Di(b);if(typeof _!="function")throw Error(T(150));if(b=_.call(b),b==null)throw Error(T(151));for(var S=_=null,x=v,E=v=0,O=null,C=b.next();x!==null&&!C.done;E++,C=b.next()){x.index>E?(O=x,x=null):O=x.sibling;var w=d(p,x,C.value,$);if(w===null){x===null&&(x=O);break}e&&x&&w.alternate===null&&t(p,x),v=o(w,v,E),S===null?_=w:S.sibling=w,S=w,x=O}if(C.done)return n(p,x),fe&&ir(p,E),_;if(x===null){for(;!C.done;E++,C=b.next())C=f(p,C.value,$),C!==null&&(v=o(C,v,E),S===null?_=C:S.sibling=C,S=C);return fe&&ir(p,E),_}for(x=r(p,x);!C.done;E++,C=b.next())C=h(x,p,E,C.value,$),C!==null&&(e&&C.alternate!==null&&x.delete(C.key===null?E:C.key),v=o(C,v,E),S===null?_=C:S.sibling=C,S=C);return e&&x.forEach(function(k){return t(p,k)}),fe&&ir(p,E),_}function y(p,v,b,$){if(typeof b=="object"&&b!==null&&b.type===Gr&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case ya:e:{for(var _=b.key,S=v;S!==null;){if(S.key===_){if(_=b.type,_===Gr){if(S.tag===7){n(p,S.sibling),v=i(S,b.props.children),v.return=p,p=v;break e}}else if(S.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===kn&&Rp(_)===S.type){n(p,S.sibling),v=i(S,b.props),v.ref=Vi(p,S,b),v.return=p,p=v;break e}n(p,S);break}else t(p,S);S=S.sibling}b.type===Gr?(v=vr(b.props.children,p.mode,$,b.key),v.return=p,p=v):($=vs(b.type,b.key,b.props,null,p.mode,$),$.ref=Vi(p,v,b),$.return=p,p=$)}return a(p);case Hr:e:{for(S=b.key;v!==null;){if(v.key===S)if(v.tag===4&&v.stateNode.containerInfo===b.containerInfo&&v.stateNode.implementation===b.implementation){n(p,v.sibling),v=i(v,b.children||[]),v.return=p,p=v;break e}else{n(p,v);break}else t(p,v);v=v.sibling}v=Su(b,p.mode,$),v.return=p,p=v}return a(p);case kn:return S=b._init,y(p,v,S(b._payload),$)}if(ao(b))return g(p,v,b,$);if(Di(b))return m(p,v,b,$);Ca(p,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,v!==null&&v.tag===6?(n(p,v.sibling),v=i(v,b),v.return=p,p=v):(n(p,v),v=xu(b,p.mode,$),v.return=p,p=v),a(p)):n(p,v)}return y}var vi=X0(!0),K0=X0(!1),ia={},Zt=Kn(ia),Vo=Kn(ia),Wo=Kn(ia);function cr(e){if(e===ia)throw Error(T(174));return e}function Td(e,t){switch(re(Wo,t),re(Vo,e),re(Zt,ia),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:hc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=hc(t,e)}le(Zt),re(Zt,t)}function mi(){le(Zt),le(Vo),le(Wo)}function Q0(e){cr(Wo.current);var t=cr(Zt.current),n=hc(t,e.type);t!==n&&(re(Vo,e),re(Zt,n))}function Cd(e){Vo.current===e&&(le(Zt),le(Vo))}var pe=Kn(0);function js(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var mu=[];function Pd(){for(var e=0;e<mu.length;e++)mu[e]._workInProgressVersionPrimary=null;mu.length=0}var fs=yn.ReactCurrentDispatcher,yu=yn.ReactCurrentBatchConfig,$r=0,ve=null,Te=null,Me=null,zs=!1,$o=!1,Ho=0,Lx=0;function De(){throw Error(T(321))}function Md(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Bt(e[n],t[n]))return!1;return!0}function Od(e,t,n,r,i,o){if($r=o,ve=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,fs.current=e===null||e.memoizedState===null?Dx:jx,e=n(r,i),$o){o=0;do{if($o=!1,Ho=0,25<=o)throw Error(T(301));o+=1,Me=Te=null,t.updateQueue=null,fs.current=zx,e=n(r,i)}while($o)}if(fs.current=Bs,t=Te!==null&&Te.next!==null,$r=0,Me=Te=ve=null,zs=!1,t)throw Error(T(300));return e}function Id(){var e=Ho!==0;return Ho=0,e}function Yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?ve.memoizedState=Me=e:Me=Me.next=e,Me}function Pt(){if(Te===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var t=Me===null?ve.memoizedState:Me.next;if(t!==null)Me=t,Te=e;else{if(e===null)throw Error(T(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},Me===null?ve.memoizedState=Me=e:Me=Me.next=e}return Me}function Go(e,t){return typeof t=="function"?t(e):t}function bu(e){var t=Pt(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=Te,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,u=o;do{var c=u.lane;if(($r&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=f,a=r):l=l.next=f,ve.lanes|=c,_r|=c}u=u.next}while(u!==null&&u!==o);l===null?a=r:l.next=s,Bt(r,t.memoizedState)||(et=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ve.lanes|=o,_r|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function $u(e){var t=Pt(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Bt(o,t.memoizedState)||(et=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Z0(){}function q0(e,t){var n=ve,r=Pt(),i=t(),o=!Bt(r.memoizedState,i);if(o&&(r.memoizedState=i,et=!0),r=r.queue,Ld(t1.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,Yo(9,e1.bind(null,n,r,i,t),void 0,null),Ie===null)throw Error(T(349));$r&30||J0(n,t,i)}return i}function J0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function e1(e,t,n,r){t.value=n,t.getSnapshot=r,n1(t)&&r1(e)}function t1(e,t,n){return n(function(){n1(t)&&r1(e)})}function n1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Bt(e,n)}catch{return!0}}function r1(e){var t=gn(e,1);t!==null&&zt(t,e,1,-1)}function Fp(e){var t=Yt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Go,lastRenderedState:e},t.queue=e,e=e.dispatch=Fx.bind(null,ve,e),[t.memoizedState,e]}function Yo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function i1(){return Pt().memoizedState}function ds(e,t,n,r){var i=Yt();ve.flags|=e,i.memoizedState=Yo(1|t,n,void 0,r===void 0?null:r)}function $l(e,t,n,r){var i=Pt();r=r===void 0?null:r;var o=void 0;if(Te!==null){var a=Te.memoizedState;if(o=a.destroy,r!==null&&Md(r,a.deps)){i.memoizedState=Yo(t,n,o,r);return}}ve.flags|=e,i.memoizedState=Yo(1|t,n,o,r)}function Dp(e,t){return ds(8390656,8,e,t)}function Ld(e,t){return $l(2048,8,e,t)}function o1(e,t){return $l(4,2,e,t)}function a1(e,t){return $l(4,4,e,t)}function s1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function l1(e,t,n){return n=n!=null?n.concat([e]):null,$l(4,4,s1.bind(null,t,e),n)}function Nd(){}function u1(e,t){var n=Pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Md(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function c1(e,t){var n=Pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Md(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function f1(e,t,n){return $r&21?(Bt(n,t)||(n=p0(),ve.lanes|=n,_r|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,et=!0),e.memoizedState=n)}function Nx(e,t){var n=te;te=n!==0&&4>n?n:4,e(!0);var r=yu.transition;yu.transition={};try{e(!1),t()}finally{te=n,yu.transition=r}}function d1(){return Pt().memoizedState}function Rx(e,t,n){var r=Un(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},h1(e))p1(t,n);else if(n=W0(e,t,n,r),n!==null){var i=He();zt(n,e,r,i),g1(n,t,r)}}function Fx(e,t,n){var r=Un(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(h1(e))p1(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,Bt(s,a)){var l=t.interleaved;l===null?(i.next=i,Ed(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=W0(e,t,i,r),n!==null&&(i=He(),zt(n,e,r,i),g1(n,t,r))}}function h1(e){var t=e.alternate;return e===ve||t!==null&&t===ve}function p1(e,t){$o=zs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function g1(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,dd(e,n)}}var Bs={readContext:Ct,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},Dx={readContext:Ct,useCallback:function(e,t){return Yt().memoizedState=[e,t===void 0?null:t],e},useContext:Ct,useEffect:Dp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ds(4194308,4,s1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ds(4194308,4,e,t)},useInsertionEffect:function(e,t){return ds(4,2,e,t)},useMemo:function(e,t){var n=Yt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Yt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Rx.bind(null,ve,e),[r.memoizedState,e]},useRef:function(e){var t=Yt();return e={current:e},t.memoizedState=e},useState:Fp,useDebugValue:Nd,useDeferredValue:function(e){return Yt().memoizedState=e},useTransition:function(){var e=Fp(!1),t=e[0];return e=Nx.bind(null,e[1]),Yt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ve,i=Yt();if(fe){if(n===void 0)throw Error(T(407));n=n()}else{if(n=t(),Ie===null)throw Error(T(349));$r&30||J0(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Dp(t1.bind(null,r,o,e),[e]),r.flags|=2048,Yo(9,e1.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Yt(),t=Ie.identifierPrefix;if(fe){var n=cn,r=un;n=(r&~(1<<32-jt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ho++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Lx++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},jx={readContext:Ct,useCallback:u1,useContext:Ct,useEffect:Ld,useImperativeHandle:l1,useInsertionEffect:o1,useLayoutEffect:a1,useMemo:c1,useReducer:bu,useRef:i1,useState:function(){return bu(Go)},useDebugValue:Nd,useDeferredValue:function(e){var t=Pt();return f1(t,Te.memoizedState,e)},useTransition:function(){var e=bu(Go)[0],t=Pt().memoizedState;return[e,t]},useMutableSource:Z0,useSyncExternalStore:q0,useId:d1,unstable_isNewReconciler:!1},zx={readContext:Ct,useCallback:u1,useContext:Ct,useEffect:Ld,useImperativeHandle:l1,useInsertionEffect:o1,useLayoutEffect:a1,useMemo:c1,useReducer:$u,useRef:i1,useState:function(){return $u(Go)},useDebugValue:Nd,useDeferredValue:function(e){var t=Pt();return Te===null?t.memoizedState=e:f1(t,Te.memoizedState,e)},useTransition:function(){var e=$u(Go)[0],t=Pt().memoizedState;return[e,t]},useMutableSource:Z0,useSyncExternalStore:q0,useId:d1,unstable_isNewReconciler:!1};function yi(e,t){try{var n="",r=t;do n+=pw(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function _u(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Rc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Bx=typeof WeakMap=="function"?WeakMap:Map;function v1(e,t,n){n=dn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Vs||(Vs=!0,Gc=r),Rc(e,t)},n}function m1(e,t,n){n=dn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Rc(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Rc(e,t),typeof r!="function"&&(Bn===null?Bn=new Set([this]):Bn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function jp(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bx;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=t2.bind(null,e,t,n),t.then(e,e))}function zp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Bp(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=dn(-1,1),t.tag=2,zn(n,t,1))),n.lanes|=1),e)}var Ux=yn.ReactCurrentOwner,et=!1;function We(e,t,n,r){t.child=e===null?K0(t,null,n,r):vi(t,e.child,n,r)}function Up(e,t,n,r,i){n=n.render;var o=t.ref;return si(t,i),r=Od(e,t,n,r,o,i),n=Id(),e!==null&&!et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,vn(e,t,i)):(fe&&n&&$d(t),t.flags|=1,We(e,t,r,i),t.child)}function Vp(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Vd(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,y1(e,t,o,r,i)):(e=vs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:jo,n(a,r)&&e.ref===t.ref)return vn(e,t,i)}return t.flags|=1,e=Vn(o,r),e.ref=t.ref,e.return=t,t.child=e}function y1(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(jo(o,r)&&e.ref===t.ref)if(et=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(et=!0);else return t.lanes=e.lanes,vn(e,t,i)}return Fc(e,t,n,r,i)}function b1(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(ni,ct),ct|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,re(ni,ct),ct|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,re(ni,ct),ct|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,re(ni,ct),ct|=r;return We(e,t,i,n),t.child}function $1(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Fc(e,t,n,r,i){var o=it(n)?yr:Ue.current;return o=pi(t,o),si(t,i),n=Od(e,t,n,r,o,i),r=Id(),e!==null&&!et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,vn(e,t,i)):(fe&&r&&$d(t),t.flags|=1,We(e,t,n,i),t.child)}function Wp(e,t,n,r,i){if(it(n)){var o=!0;Is(t)}else o=!1;if(si(t,i),t.stateNode===null)hs(e,t),Y0(t,n,r),Nc(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ct(u):(u=it(n)?yr:Ue.current,u=pi(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&Np(t,a,r,u),En=!1;var d=t.memoizedState;a.state=d,Ds(t,r,a,i),l=t.memoizedState,s!==r||d!==l||rt.current||En?(typeof c=="function"&&(Lc(t,n,c,r),l=t.memoizedState),(s=En||Lp(t,n,s,r,d,l,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,H0(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Nt(t.type,s),a.props=u,f=t.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ct(l):(l=it(n)?yr:Ue.current,l=pi(t,l));var h=n.getDerivedStateFromProps;(c=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==f||d!==l)&&Np(t,a,r,l),En=!1,d=t.memoizedState,a.state=d,Ds(t,r,a,i);var g=t.memoizedState;s!==f||d!==g||rt.current||En?(typeof h=="function"&&(Lc(t,n,h,r),g=t.memoizedState),(u=En||Lp(t,n,u,r,d,g,l)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,g,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,g,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),a.props=r,a.state=g,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return Dc(e,t,n,r,o,i)}function Dc(e,t,n,r,i,o){$1(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Cp(t,n,!1),vn(e,t,o);r=t.stateNode,Ux.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=vi(t,e.child,null,o),t.child=vi(t,null,s,o)):We(e,t,s,o),t.memoizedState=r.state,i&&Cp(t,n,!0),t.child}function _1(e){var t=e.stateNode;t.pendingContext?Tp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Tp(e,t.context,!1),Td(e,t.containerInfo)}function Hp(e,t,n,r,i){return gi(),wd(i),t.flags|=256,We(e,t,n,r),t.child}var jc={dehydrated:null,treeContext:null,retryLane:0};function zc(e){return{baseLanes:e,cachePool:null,transitions:null}}function w1(e,t,n){var r=t.pendingProps,i=pe.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),re(pe,i&1),e===null)return Oc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=xl(a,r,0,null),e=vr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=zc(n),t.memoizedState=jc,e):Rd(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Vx(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Vn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Vn(s,o):(o=vr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?zc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=jc,r}return o=e.child,e=o.sibling,r=Vn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Rd(e,t){return t=xl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Pa(e,t,n,r){return r!==null&&wd(r),vi(t,e.child,null,n),e=Rd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Vx(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=_u(Error(T(422))),Pa(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=xl({mode:"visible",children:r.children},i,0,null),o=vr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&vi(t,e.child,null,a),t.child.memoizedState=zc(a),t.memoizedState=jc,o);if(!(t.mode&1))return Pa(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(T(419)),r=_u(o,r,void 0),Pa(e,t,a,r)}if(s=(a&e.childLanes)!==0,et||s){if(r=Ie,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,gn(e,i),zt(r,e,i,-1))}return Ud(),r=_u(Error(T(421))),Pa(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=n2.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ht=jn(i.nextSibling),gt=t,fe=!0,Dt=null,e!==null&&(wt[xt++]=un,wt[xt++]=cn,wt[xt++]=br,un=e.id,cn=e.overflow,br=t),t=Rd(t,r.children),t.flags|=4096,t)}function Gp(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ic(e.return,t,n)}function wu(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function x1(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(We(e,t,r.children,n),r=pe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gp(e,n,t);else if(e.tag===19)Gp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(re(pe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&js(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),wu(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&js(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}wu(t,!0,n,null,o);break;case"together":wu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function hs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function vn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),_r|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,n=Vn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Vn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Wx(e,t,n){switch(t.tag){case 3:_1(t),gi();break;case 5:Q0(t);break;case 1:it(t.type)&&Is(t);break;case 4:Td(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;re(Rs,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(re(pe,pe.current&1),t.flags|=128,null):n&t.child.childLanes?w1(e,t,n):(re(pe,pe.current&1),e=vn(e,t,n),e!==null?e.sibling:null);re(pe,pe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return x1(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),re(pe,pe.current),r)break;return null;case 22:case 23:return t.lanes=0,b1(e,t,n)}return vn(e,t,n)}var S1,Bc,k1,E1;S1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bc=function(){};k1=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,cr(Zt.current);var o=null;switch(n){case"input":i=uc(e,i),r=uc(e,r),o=[];break;case"select":i=me({},i,{value:void 0}),r=me({},r,{value:void 0}),o=[];break;case"textarea":i=dc(e,i),r=dc(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ms)}pc(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Oo.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Oo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ae("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};E1=function(e,t,n,r){n!==r&&(t.flags|=4)};function Wi(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function je(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Hx(e,t,n){var r=t.pendingProps;switch(_d(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(t),null;case 1:return it(t.type)&&Os(),je(t),null;case 3:return r=t.stateNode,mi(),le(rt),le(Ue),Pd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ta(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Dt!==null&&(Kc(Dt),Dt=null))),Bc(e,t),je(t),null;case 5:Cd(t);var i=cr(Wo.current);if(n=t.type,e!==null&&t.stateNode!=null)k1(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(T(166));return je(t),null}if(e=cr(Zt.current),Ta(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Kt]=t,r[Uo]=o,e=(t.mode&1)!==0,n){case"dialog":ae("cancel",r),ae("close",r);break;case"iframe":case"object":case"embed":ae("load",r);break;case"video":case"audio":for(i=0;i<lo.length;i++)ae(lo[i],r);break;case"source":ae("error",r);break;case"img":case"image":case"link":ae("error",r),ae("load",r);break;case"details":ae("toggle",r);break;case"input":tp(r,o),ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ae("invalid",r);break;case"textarea":rp(r,o),ae("invalid",r)}pc(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Aa(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Aa(r.textContent,s,e),i=["children",""+s]):Oo.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&ae("scroll",r)}switch(n){case"input":ba(r),np(r,o,!0);break;case"textarea":ba(r),ip(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ms)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Jy(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Kt]=t,e[Uo]=r,S1(e,t,!1,!1),t.stateNode=e;e:{switch(a=gc(n,r),n){case"dialog":ae("cancel",e),ae("close",e),i=r;break;case"iframe":case"object":case"embed":ae("load",e),i=r;break;case"video":case"audio":for(i=0;i<lo.length;i++)ae(lo[i],e);i=r;break;case"source":ae("error",e),i=r;break;case"img":case"image":case"link":ae("error",e),ae("load",e),i=r;break;case"details":ae("toggle",e),i=r;break;case"input":tp(e,r),i=uc(e,r),ae("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=me({},r,{value:void 0}),ae("invalid",e);break;case"textarea":rp(e,r),i=dc(e,r),ae("invalid",e);break;default:i=r}pc(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?n0(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&e0(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Io(e,l):typeof l=="number"&&Io(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Oo.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ae("scroll",e):l!=null&&ad(e,o,l,a))}switch(n){case"input":ba(e),np(e,r,!1);break;case"textarea":ba(e),ip(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Hn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ri(e,!!r.multiple,o,!1):r.defaultValue!=null&&ri(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ms)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return je(t),null;case 6:if(e&&t.stateNode!=null)E1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(T(166));if(n=cr(Wo.current),cr(Zt.current),Ta(t)){if(r=t.stateNode,n=t.memoizedProps,r[Kt]=t,(o=r.nodeValue!==n)&&(e=gt,e!==null))switch(e.tag){case 3:Aa(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Aa(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Kt]=t,t.stateNode=r}return je(t),null;case 13:if(le(pe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(fe&&ht!==null&&t.mode&1&&!(t.flags&128))V0(),gi(),t.flags|=98560,o=!1;else if(o=Ta(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(T(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(T(317));o[Kt]=t}else gi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;je(t),o=!1}else Dt!==null&&(Kc(Dt),Dt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||pe.current&1?Ce===0&&(Ce=3):Ud())),t.updateQueue!==null&&(t.flags|=4),je(t),null);case 4:return mi(),Bc(e,t),e===null&&zo(t.stateNode.containerInfo),je(t),null;case 10:return kd(t.type._context),je(t),null;case 17:return it(t.type)&&Os(),je(t),null;case 19:if(le(pe),o=t.memoizedState,o===null)return je(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Wi(o,!1);else{if(Ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=js(e),a!==null){for(t.flags|=128,Wi(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return re(pe,pe.current&1|2),t.child}e=e.sibling}o.tail!==null&&we()>bi&&(t.flags|=128,r=!0,Wi(o,!1),t.lanes=4194304)}else{if(!r)if(e=js(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Wi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!fe)return je(t),null}else 2*we()-o.renderingStartTime>bi&&n!==1073741824&&(t.flags|=128,r=!0,Wi(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=we(),t.sibling=null,n=pe.current,re(pe,r?n&1|2:n&1),t):(je(t),null);case 22:case 23:return Bd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ct&1073741824&&(je(t),t.subtreeFlags&6&&(t.flags|=8192)):je(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function Gx(e,t){switch(_d(t),t.tag){case 1:return it(t.type)&&Os(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mi(),le(rt),le(Ue),Pd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Cd(t),null;case 13:if(le(pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));gi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return le(pe),null;case 4:return mi(),null;case 10:return kd(t.type._context),null;case 22:case 23:return Bd(),null;case 24:return null;default:return null}}var Ma=!1,Be=!1,Yx=typeof WeakSet=="function"?WeakSet:Set,F=null;function ti(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ye(e,t,r)}else n.current=null}function Uc(e,t,n){try{n()}catch(r){ye(e,t,r)}}var Yp=!1;function Xx(e,t){if(kc=Ts,e=P0(),bd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,c=0,f=e,d=null;t:for(;;){for(var h;f!==n||i!==0&&f.nodeType!==3||(s=a+i),f!==o||r!==0&&f.nodeType!==3||(l=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(h=f.firstChild)!==null;)d=f,f=h;for(;;){if(f===e)break t;if(d===n&&++u===i&&(s=a),d===o&&++c===r&&(l=a),(h=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=h}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ec={focusedElem:e,selectionRange:n},Ts=!1,F=t;F!==null;)if(t=F,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,F=e;else for(;F!==null;){t=F;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var m=g.memoizedProps,y=g.memoizedState,p=t.stateNode,v=p.getSnapshotBeforeUpdate(t.elementType===t.type?m:Nt(t.type,m),y);p.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch($){ye(t,t.return,$)}if(e=t.sibling,e!==null){e.return=t.return,F=e;break}F=t.return}return g=Yp,Yp=!1,g}function _o(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Uc(t,n,o)}i=i.next}while(i!==r)}}function _l(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Vc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function A1(e){var t=e.alternate;t!==null&&(e.alternate=null,A1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Kt],delete t[Uo],delete t[Cc],delete t[Px],delete t[Mx])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function T1(e){return e.tag===5||e.tag===3||e.tag===4}function Xp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||T1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ms));else if(r!==4&&(e=e.child,e!==null))for(Wc(e,t,n),e=e.sibling;e!==null;)Wc(e,t,n),e=e.sibling}function Hc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Hc(e,t,n),e=e.sibling;e!==null;)Hc(e,t,n),e=e.sibling}var Le=null,Rt=!1;function _n(e,t,n){for(n=n.child;n!==null;)C1(e,t,n),n=n.sibling}function C1(e,t,n){if(Qt&&typeof Qt.onCommitFiberUnmount=="function")try{Qt.onCommitFiberUnmount(hl,n)}catch{}switch(n.tag){case 5:Be||ti(n,t);case 6:var r=Le,i=Rt;Le=null,_n(e,t,n),Le=r,Rt=i,Le!==null&&(Rt?(e=Le,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Le.removeChild(n.stateNode));break;case 18:Le!==null&&(Rt?(e=Le,n=n.stateNode,e.nodeType===8?gu(e.parentNode,n):e.nodeType===1&&gu(e,n),Fo(e)):gu(Le,n.stateNode));break;case 4:r=Le,i=Rt,Le=n.stateNode.containerInfo,Rt=!0,_n(e,t,n),Le=r,Rt=i;break;case 0:case 11:case 14:case 15:if(!Be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Uc(n,t,a),i=i.next}while(i!==r)}_n(e,t,n);break;case 1:if(!Be&&(ti(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ye(n,t,s)}_n(e,t,n);break;case 21:_n(e,t,n);break;case 22:n.mode&1?(Be=(r=Be)||n.memoizedState!==null,_n(e,t,n),Be=r):_n(e,t,n);break;default:_n(e,t,n)}}function Kp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Yx),t.forEach(function(r){var i=r2.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function It(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:Le=s.stateNode,Rt=!1;break e;case 3:Le=s.stateNode.containerInfo,Rt=!0;break e;case 4:Le=s.stateNode.containerInfo,Rt=!0;break e}s=s.return}if(Le===null)throw Error(T(160));C1(o,a,i),Le=null,Rt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ye(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)P1(t,e),t=t.sibling}function P1(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(It(t,e),Wt(e),r&4){try{_o(3,e,e.return),_l(3,e)}catch(m){ye(e,e.return,m)}try{_o(5,e,e.return)}catch(m){ye(e,e.return,m)}}break;case 1:It(t,e),Wt(e),r&512&&n!==null&&ti(n,n.return);break;case 5:if(It(t,e),Wt(e),r&512&&n!==null&&ti(n,n.return),e.flags&32){var i=e.stateNode;try{Io(i,"")}catch(m){ye(e,e.return,m)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Zy(i,o),gc(s,a);var u=gc(s,o);for(a=0;a<l.length;a+=2){var c=l[a],f=l[a+1];c==="style"?n0(i,f):c==="dangerouslySetInnerHTML"?e0(i,f):c==="children"?Io(i,f):ad(i,c,f,u)}switch(s){case"input":cc(i,o);break;case"textarea":qy(i,o);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?ri(i,!!o.multiple,h,!1):d!==!!o.multiple&&(o.defaultValue!=null?ri(i,!!o.multiple,o.defaultValue,!0):ri(i,!!o.multiple,o.multiple?[]:"",!1))}i[Uo]=o}catch(m){ye(e,e.return,m)}}break;case 6:if(It(t,e),Wt(e),r&4){if(e.stateNode===null)throw Error(T(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(m){ye(e,e.return,m)}}break;case 3:if(It(t,e),Wt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fo(t.containerInfo)}catch(m){ye(e,e.return,m)}break;case 4:It(t,e),Wt(e);break;case 13:It(t,e),Wt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(jd=we())),r&4&&Kp(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Be=(u=Be)||c,It(t,e),Be=u):It(t,e),Wt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(F=e,c=e.child;c!==null;){for(f=F=c;F!==null;){switch(d=F,h=d.child,d.tag){case 0:case 11:case 14:case 15:_o(4,d,d.return);break;case 1:ti(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(m){ye(r,n,m)}}break;case 5:ti(d,d.return);break;case 22:if(d.memoizedState!==null){Zp(f);continue}}h!==null?(h.return=d,F=h):Zp(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=t0("display",a))}catch(m){ye(e,e.return,m)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(m){ye(e,e.return,m)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:It(t,e),Wt(e),r&4&&Kp(e);break;case 21:break;default:It(t,e),Wt(e)}}function Wt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(T1(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Io(i,""),r.flags&=-33);var o=Xp(e);Hc(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Xp(e);Wc(e,s,a);break;default:throw Error(T(161))}}catch(l){ye(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Kx(e,t,n){F=e,M1(e)}function M1(e,t,n){for(var r=(e.mode&1)!==0;F!==null;){var i=F,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Ma;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||Be;s=Ma;var u=Be;if(Ma=a,(Be=l)&&!u)for(F=i;F!==null;)a=F,l=a.child,a.tag===22&&a.memoizedState!==null?qp(i):l!==null?(l.return=a,F=l):qp(i);for(;o!==null;)F=o,M1(o),o=o.sibling;F=i,Ma=s,Be=u}Qp(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,F=o):Qp(e)}}function Qp(e){for(;F!==null;){var t=F;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Be||_l(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Be)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Nt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ip(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ip(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Fo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}Be||t.flags&512&&Vc(t)}catch(d){ye(t,t.return,d)}}if(t===e){F=null;break}if(n=t.sibling,n!==null){n.return=t.return,F=n;break}F=t.return}}function Zp(e){for(;F!==null;){var t=F;if(t===e){F=null;break}var n=t.sibling;if(n!==null){n.return=t.return,F=n;break}F=t.return}}function qp(e){for(;F!==null;){var t=F;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{_l(4,t)}catch(l){ye(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ye(t,i,l)}}var o=t.return;try{Vc(t)}catch(l){ye(t,o,l)}break;case 5:var a=t.return;try{Vc(t)}catch(l){ye(t,a,l)}}}catch(l){ye(t,t.return,l)}if(t===e){F=null;break}var s=t.sibling;if(s!==null){s.return=t.return,F=s;break}F=t.return}}var Qx=Math.ceil,Us=yn.ReactCurrentDispatcher,Fd=yn.ReactCurrentOwner,At=yn.ReactCurrentBatchConfig,Z=0,Ie=null,xe=null,Ne=0,ct=0,ni=Kn(0),Ce=0,Xo=null,_r=0,wl=0,Dd=0,wo=null,qe=null,jd=0,bi=1/0,an=null,Vs=!1,Gc=null,Bn=null,Oa=!1,On=null,Ws=0,xo=0,Yc=null,ps=-1,gs=0;function He(){return Z&6?we():ps!==-1?ps:ps=we()}function Un(e){return e.mode&1?Z&2&&Ne!==0?Ne&-Ne:Ix.transition!==null?(gs===0&&(gs=p0()),gs):(e=te,e!==0||(e=window.event,e=e===void 0?16:_0(e.type)),e):1}function zt(e,t,n,r){if(50<xo)throw xo=0,Yc=null,Error(T(185));ta(e,n,r),(!(Z&2)||e!==Ie)&&(e===Ie&&(!(Z&2)&&(wl|=n),Ce===4&&Pn(e,Ne)),ot(e,r),n===1&&Z===0&&!(t.mode&1)&&(bi=we()+500,yl&&Qn()))}function ot(e,t){var n=e.callbackNode;Iw(e,t);var r=As(e,e===Ie?Ne:0);if(r===0)n!==null&&sp(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&sp(n),t===1)e.tag===0?Ox(Jp.bind(null,e)):z0(Jp.bind(null,e)),Tx(function(){!(Z&6)&&Qn()}),n=null;else{switch(g0(r)){case 1:n=fd;break;case 4:n=d0;break;case 16:n=Es;break;case 536870912:n=h0;break;default:n=Es}n=j1(n,O1.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function O1(e,t){if(ps=-1,gs=0,Z&6)throw Error(T(327));var n=e.callbackNode;if(li()&&e.callbackNode!==n)return null;var r=As(e,e===Ie?Ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Hs(e,r);else{t=r;var i=Z;Z|=2;var o=L1();(Ie!==e||Ne!==t)&&(an=null,bi=we()+500,gr(e,t));do try{Jx();break}catch(s){I1(e,s)}while(1);Sd(),Us.current=o,Z=i,xe!==null?t=0:(Ie=null,Ne=0,t=Ce)}if(t!==0){if(t===2&&(i=$c(e),i!==0&&(r=i,t=Xc(e,i))),t===1)throw n=Xo,gr(e,0),Pn(e,r),ot(e,we()),n;if(t===6)Pn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Zx(i)&&(t=Hs(e,r),t===2&&(o=$c(e),o!==0&&(r=o,t=Xc(e,o))),t===1))throw n=Xo,gr(e,0),Pn(e,r),ot(e,we()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(T(345));case 2:or(e,qe,an);break;case 3:if(Pn(e,r),(r&130023424)===r&&(t=jd+500-we(),10<t)){if(As(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){He(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Tc(or.bind(null,e,qe,an),t);break}or(e,qe,an);break;case 4:if(Pn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-jt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=we()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Qx(r/1960))-r,10<r){e.timeoutHandle=Tc(or.bind(null,e,qe,an),r);break}or(e,qe,an);break;case 5:or(e,qe,an);break;default:throw Error(T(329))}}}return ot(e,we()),e.callbackNode===n?O1.bind(null,e):null}function Xc(e,t){var n=wo;return e.current.memoizedState.isDehydrated&&(gr(e,t).flags|=256),e=Hs(e,t),e!==2&&(t=qe,qe=n,t!==null&&Kc(t)),e}function Kc(e){qe===null?qe=e:qe.push.apply(qe,e)}function Zx(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Bt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Pn(e,t){for(t&=~Dd,t&=~wl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-jt(t),r=1<<n;e[n]=-1,t&=~r}}function Jp(e){if(Z&6)throw Error(T(327));li();var t=As(e,0);if(!(t&1))return ot(e,we()),null;var n=Hs(e,t);if(e.tag!==0&&n===2){var r=$c(e);r!==0&&(t=r,n=Xc(e,r))}if(n===1)throw n=Xo,gr(e,0),Pn(e,t),ot(e,we()),n;if(n===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,or(e,qe,an),ot(e,we()),null}function zd(e,t){var n=Z;Z|=1;try{return e(t)}finally{Z=n,Z===0&&(bi=we()+500,yl&&Qn())}}function wr(e){On!==null&&On.tag===0&&!(Z&6)&&li();var t=Z;Z|=1;var n=At.transition,r=te;try{if(At.transition=null,te=1,e)return e()}finally{te=r,At.transition=n,Z=t,!(Z&6)&&Qn()}}function Bd(){ct=ni.current,le(ni)}function gr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ax(n)),xe!==null)for(n=xe.return;n!==null;){var r=n;switch(_d(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Os();break;case 3:mi(),le(rt),le(Ue),Pd();break;case 5:Cd(r);break;case 4:mi();break;case 13:le(pe);break;case 19:le(pe);break;case 10:kd(r.type._context);break;case 22:case 23:Bd()}n=n.return}if(Ie=e,xe=e=Vn(e.current,null),Ne=ct=t,Ce=0,Xo=null,Dd=wl=_r=0,qe=wo=null,ur!==null){for(t=0;t<ur.length;t++)if(n=ur[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}ur=null}return e}function I1(e,t){do{var n=xe;try{if(Sd(),fs.current=Bs,zs){for(var r=ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}zs=!1}if($r=0,Me=Te=ve=null,$o=!1,Ho=0,Fd.current=null,n===null||n.return===null){Ce=1,Xo=t,xe=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=Ne,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=zp(a);if(h!==null){h.flags&=-257,Bp(h,a,s,o,t),h.mode&1&&jp(o,u,t),t=h,l=u;var g=t.updateQueue;if(g===null){var m=new Set;m.add(l),t.updateQueue=m}else g.add(l);break e}else{if(!(t&1)){jp(o,u,t),Ud();break e}l=Error(T(426))}}else if(fe&&s.mode&1){var y=zp(a);if(y!==null){!(y.flags&65536)&&(y.flags|=256),Bp(y,a,s,o,t),wd(yi(l,s));break e}}o=l=yi(l,s),Ce!==4&&(Ce=2),wo===null?wo=[o]:wo.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=v1(o,l,t);Op(o,p);break e;case 1:s=l;var v=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof v.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Bn===null||!Bn.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var $=m1(o,s,t);Op(o,$);break e}}o=o.return}while(o!==null)}R1(n)}catch(_){t=_,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(1)}function L1(){var e=Us.current;return Us.current=Bs,e===null?Bs:e}function Ud(){(Ce===0||Ce===3||Ce===2)&&(Ce=4),Ie===null||!(_r&268435455)&&!(wl&268435455)||Pn(Ie,Ne)}function Hs(e,t){var n=Z;Z|=2;var r=L1();(Ie!==e||Ne!==t)&&(an=null,gr(e,t));do try{qx();break}catch(i){I1(e,i)}while(1);if(Sd(),Z=n,Us.current=r,xe!==null)throw Error(T(261));return Ie=null,Ne=0,Ce}function qx(){for(;xe!==null;)N1(xe)}function Jx(){for(;xe!==null&&!Sw();)N1(xe)}function N1(e){var t=D1(e.alternate,e,ct);e.memoizedProps=e.pendingProps,t===null?R1(e):xe=t,Fd.current=null}function R1(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Gx(n,t),n!==null){n.flags&=32767,xe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ce=6,xe=null;return}}else if(n=Hx(n,t,ct),n!==null){xe=n;return}if(t=t.sibling,t!==null){xe=t;return}xe=t=e}while(t!==null);Ce===0&&(Ce=5)}function or(e,t,n){var r=te,i=At.transition;try{At.transition=null,te=1,e2(e,t,n,r)}finally{At.transition=i,te=r}return null}function e2(e,t,n,r){do li();while(On!==null);if(Z&6)throw Error(T(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Lw(e,o),e===Ie&&(xe=Ie=null,Ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Oa||(Oa=!0,j1(Es,function(){return li(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=At.transition,At.transition=null;var a=te;te=1;var s=Z;Z|=4,Fd.current=null,Xx(e,n),P1(n,e),$x(Ec),Ts=!!kc,Ec=kc=null,e.current=n,Kx(n),kw(),Z=s,te=a,At.transition=o}else e.current=n;if(Oa&&(Oa=!1,On=e,Ws=i),o=e.pendingLanes,o===0&&(Bn=null),Tw(n.stateNode),ot(e,we()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Vs)throw Vs=!1,e=Gc,Gc=null,e;return Ws&1&&e.tag!==0&&li(),o=e.pendingLanes,o&1?e===Yc?xo++:(xo=0,Yc=e):xo=0,Qn(),null}function li(){if(On!==null){var e=g0(Ws),t=At.transition,n=te;try{if(At.transition=null,te=16>e?16:e,On===null)var r=!1;else{if(e=On,On=null,Ws=0,Z&6)throw Error(T(331));var i=Z;for(Z|=4,F=e.current;F!==null;){var o=F,a=o.child;if(F.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(F=u;F!==null;){var c=F;switch(c.tag){case 0:case 11:case 15:_o(8,c,o)}var f=c.child;if(f!==null)f.return=c,F=f;else for(;F!==null;){c=F;var d=c.sibling,h=c.return;if(A1(c),c===u){F=null;break}if(d!==null){d.return=h,F=d;break}F=h}}}var g=o.alternate;if(g!==null){var m=g.child;if(m!==null){g.child=null;do{var y=m.sibling;m.sibling=null,m=y}while(m!==null)}}F=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,F=a;else e:for(;F!==null;){if(o=F,o.flags&2048)switch(o.tag){case 0:case 11:case 15:_o(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,F=p;break e}F=o.return}}var v=e.current;for(F=v;F!==null;){a=F;var b=a.child;if(a.subtreeFlags&2064&&b!==null)b.return=a,F=b;else e:for(a=v;F!==null;){if(s=F,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:_l(9,s)}}catch(_){ye(s,s.return,_)}if(s===a){F=null;break e}var $=s.sibling;if($!==null){$.return=s.return,F=$;break e}F=s.return}}if(Z=i,Qn(),Qt&&typeof Qt.onPostCommitFiberRoot=="function")try{Qt.onPostCommitFiberRoot(hl,e)}catch{}r=!0}return r}finally{te=n,At.transition=t}}return!1}function eg(e,t,n){t=yi(n,t),t=v1(e,t,1),e=zn(e,t,1),t=He(),e!==null&&(ta(e,1,t),ot(e,t))}function ye(e,t,n){if(e.tag===3)eg(e,e,n);else for(;t!==null;){if(t.tag===3){eg(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Bn===null||!Bn.has(r))){e=yi(n,e),e=m1(t,e,1),t=zn(t,e,1),e=He(),t!==null&&(ta(t,1,e),ot(t,e));break}}t=t.return}}function t2(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=He(),e.pingedLanes|=e.suspendedLanes&n,Ie===e&&(Ne&n)===n&&(Ce===4||Ce===3&&(Ne&130023424)===Ne&&500>we()-jd?gr(e,0):Dd|=n),ot(e,t)}function F1(e,t){t===0&&(e.mode&1?(t=wa,wa<<=1,!(wa&130023424)&&(wa=4194304)):t=1);var n=He();e=gn(e,t),e!==null&&(ta(e,t,n),ot(e,n))}function n2(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),F1(e,n)}function r2(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(t),F1(e,n)}var D1;D1=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||rt.current)et=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return et=!1,Wx(e,t,n);et=!!(e.flags&131072)}else et=!1,fe&&t.flags&1048576&&B0(t,Ns,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;hs(e,t),e=t.pendingProps;var i=pi(t,Ue.current);si(t,n),i=Od(null,t,r,e,i,n);var o=Id();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,it(r)?(o=!0,Is(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ad(t),i.updater=bl,t.stateNode=i,i._reactInternals=t,Nc(t,r,e,n),t=Dc(null,t,r,!0,o,n)):(t.tag=0,fe&&o&&$d(t),We(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(hs(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=o2(r),e=Nt(r,e),i){case 0:t=Fc(null,t,r,e,n);break e;case 1:t=Wp(null,t,r,e,n);break e;case 11:t=Up(null,t,r,e,n);break e;case 14:t=Vp(null,t,r,Nt(r.type,e),n);break e}throw Error(T(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Nt(r,i),Fc(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Nt(r,i),Wp(e,t,r,i,n);case 3:e:{if(_1(t),e===null)throw Error(T(387));r=t.pendingProps,o=t.memoizedState,i=o.element,H0(e,t),Ds(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=yi(Error(T(423)),t),t=Hp(e,t,r,n,i);break e}else if(r!==i){i=yi(Error(T(424)),t),t=Hp(e,t,r,n,i);break e}else for(ht=jn(t.stateNode.containerInfo.firstChild),gt=t,fe=!0,Dt=null,n=K0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(gi(),r===i){t=vn(e,t,n);break e}We(e,t,r,n)}t=t.child}return t;case 5:return Q0(t),e===null&&Oc(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Ac(r,i)?a=null:o!==null&&Ac(r,o)&&(t.flags|=32),$1(e,t),We(e,t,a,n),t.child;case 6:return e===null&&Oc(t),null;case 13:return w1(e,t,n);case 4:return Td(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=vi(t,null,r,n):We(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Nt(r,i),Up(e,t,r,i,n);case 7:return We(e,t,t.pendingProps,n),t.child;case 8:return We(e,t,t.pendingProps.children,n),t.child;case 12:return We(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,re(Rs,r._currentValue),r._currentValue=a,o!==null)if(Bt(o.value,a)){if(o.children===i.children&&!rt.current){t=vn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=dn(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ic(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(T(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Ic(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}We(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,si(t,n),i=Ct(i),r=r(i),t.flags|=1,We(e,t,r,n),t.child;case 14:return r=t.type,i=Nt(r,t.pendingProps),i=Nt(r.type,i),Vp(e,t,r,i,n);case 15:return y1(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Nt(r,i),hs(e,t),t.tag=1,it(r)?(e=!0,Is(t)):e=!1,si(t,n),Y0(t,r,i),Nc(t,r,i,n),Dc(null,t,r,!0,e,n);case 19:return x1(e,t,n);case 22:return b1(e,t,n)}throw Error(T(156,t.tag))};function j1(e,t){return f0(e,t)}function i2(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function St(e,t,n,r){return new i2(e,t,n,r)}function Vd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function o2(e){if(typeof e=="function")return Vd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ld)return 11;if(e===ud)return 14}return 2}function Vn(e,t){var n=e.alternate;return n===null?(n=St(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function vs(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Vd(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Gr:return vr(n.children,i,o,t);case sd:a=8,i|=8;break;case oc:return e=St(12,n,t,i|2),e.elementType=oc,e.lanes=o,e;case ac:return e=St(13,n,t,i),e.elementType=ac,e.lanes=o,e;case sc:return e=St(19,n,t,i),e.elementType=sc,e.lanes=o,e;case Xy:return xl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Gy:a=10;break e;case Yy:a=9;break e;case ld:a=11;break e;case ud:a=14;break e;case kn:a=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=St(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function vr(e,t,n,r){return e=St(7,e,r,t),e.lanes=n,e}function xl(e,t,n,r){return e=St(22,e,r,t),e.elementType=Xy,e.lanes=n,e.stateNode={isHidden:!1},e}function xu(e,t,n){return e=St(6,e,null,t),e.lanes=n,e}function Su(e,t,n){return t=St(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function a2(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=iu(0),this.expirationTimes=iu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=iu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Wd(e,t,n,r,i,o,a,s,l){return e=new a2(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=St(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ad(o),e}function s2(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function z1(e){if(!e)return Gn;e=e._reactInternals;e:{if(Er(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(it(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var n=e.type;if(it(n))return j0(e,n,t)}return t}function B1(e,t,n,r,i,o,a,s,l){return e=Wd(n,r,!0,e,i,o,a,s,l),e.context=z1(null),n=e.current,r=He(),i=Un(n),o=dn(r,i),o.callback=t??null,zn(n,o,i),e.current.lanes=i,ta(e,i,r),ot(e,r),e}function Sl(e,t,n,r){var i=t.current,o=He(),a=Un(i);return n=z1(n),t.context===null?t.context=n:t.pendingContext=n,t=dn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=zn(i,t,a),e!==null&&(zt(e,i,a,o),cs(e,i,a)),a}function Gs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function tg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Hd(e,t){tg(e,t),(e=e.alternate)&&tg(e,t)}function l2(){return null}var U1=typeof reportError=="function"?reportError:function(e){console.error(e)};function Gd(e){this._internalRoot=e}kl.prototype.render=Gd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));Sl(e,t,null,null)};kl.prototype.unmount=Gd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wr(function(){Sl(null,e,null,null)}),t[pn]=null}};function kl(e){this._internalRoot=e}kl.prototype.unstable_scheduleHydration=function(e){if(e){var t=y0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Cn.length&&t!==0&&t<Cn[n].priority;n++);Cn.splice(n,0,e),n===0&&$0(e)}};function Yd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function El(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ng(){}function u2(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Gs(a);o.call(u)}}var a=B1(t,r,e,0,null,!1,!1,"",ng);return e._reactRootContainer=a,e[pn]=a.current,zo(e.nodeType===8?e.parentNode:e),wr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=Gs(l);s.call(u)}}var l=Wd(e,0,!1,null,null,!1,!1,"",ng);return e._reactRootContainer=l,e[pn]=l.current,zo(e.nodeType===8?e.parentNode:e),wr(function(){Sl(t,l,n,r)}),l}function Al(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=Gs(a);s.call(l)}}Sl(t,a,e,i)}else a=u2(n,t,e,i,r);return Gs(a)}v0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=so(t.pendingLanes);n!==0&&(dd(t,n|1),ot(t,we()),!(Z&6)&&(bi=we()+500,Qn()))}break;case 13:wr(function(){var r=gn(e,1);if(r!==null){var i=He();zt(r,e,1,i)}}),Hd(e,1)}};hd=function(e){if(e.tag===13){var t=gn(e,134217728);if(t!==null){var n=He();zt(t,e,134217728,n)}Hd(e,134217728)}};m0=function(e){if(e.tag===13){var t=Un(e),n=gn(e,t);if(n!==null){var r=He();zt(n,e,t,r)}Hd(e,t)}};y0=function(){return te};b0=function(e,t){var n=te;try{return te=e,t()}finally{te=n}};mc=function(e,t,n){switch(t){case"input":if(cc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ml(r);if(!i)throw Error(T(90));Qy(r),cc(r,i)}}}break;case"textarea":qy(e,n);break;case"select":t=n.value,t!=null&&ri(e,!!n.multiple,t,!1)}};o0=zd;a0=wr;var c2={usingClientEntryPoint:!1,Events:[ra,Qr,ml,r0,i0,zd]},Hi={findFiberByHostInstance:lr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},f2={bundleType:Hi.bundleType,version:Hi.version,rendererPackageName:Hi.rendererPackageName,rendererConfig:Hi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=u0(e),e===null?null:e.stateNode},findFiberByHostInstance:Hi.findFiberByHostInstance||l2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ia=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ia.isDisabled&&Ia.supportsFiber)try{hl=Ia.inject(f2),Qt=Ia}catch{}}mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=c2;mt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yd(t))throw Error(T(200));return s2(e,t,null,n)};mt.createRoot=function(e,t){if(!Yd(e))throw Error(T(299));var n=!1,r="",i=U1;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Wd(e,1,!1,null,null,n,!1,r,i),e[pn]=t.current,zo(e.nodeType===8?e.parentNode:e),new Gd(t)};mt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=u0(t),e=e===null?null:e.stateNode,e};mt.flushSync=function(e){return wr(e)};mt.hydrate=function(e,t,n){if(!El(t))throw Error(T(200));return Al(null,e,t,!0,n)};mt.hydrateRoot=function(e,t,n){if(!Yd(e))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=U1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=B1(t,null,e,1,n??null,i,!1,o,a),e[pn]=t.current,zo(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new kl(t)};mt.render=function(e,t,n){if(!El(t))throw Error(T(200));return Al(null,e,t,!1,n)};mt.unmountComponentAtNode=function(e){if(!El(e))throw Error(T(40));return e._reactRootContainer?(wr(function(){Al(null,null,e,!1,function(){e._reactRootContainer=null,e[pn]=null})}),!0):!1};mt.unstable_batchedUpdates=zd;mt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!El(n))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return Al(e,t,n,!1,r)};mt.version="18.2.0-next-9e3b772b8-20220608";function V1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(V1)}catch(e){console.error(e)}}V1(),By.exports=mt;var Qc=By.exports,rg=Qc;rc.createRoot=rg.createRoot,rc.hydrateRoot=rg.hydrateRoot;/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */function oa(e){return e+.5|0}const In=(e,t,n)=>Math.max(Math.min(e,n),t);function uo(e){return In(oa(e*2.55),0,255)}function Wn(e){return In(oa(e*255),0,255)}function ln(e){return In(oa(e/2.55)/100,0,1)}function ig(e){return In(oa(e*100),0,100)}const bt={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Zc=[..."0123456789ABCDEF"],d2=e=>Zc[e&15],h2=e=>Zc[(e&240)>>4]+Zc[e&15],La=e=>(e&240)>>4===(e&15),p2=e=>La(e.r)&&La(e.g)&&La(e.b)&&La(e.a);function g2(e){var t=e.length,n;return e[0]==="#"&&(t===4||t===5?n={r:255&bt[e[1]]*17,g:255&bt[e[2]]*17,b:255&bt[e[3]]*17,a:t===5?bt[e[4]]*17:255}:(t===7||t===9)&&(n={r:bt[e[1]]<<4|bt[e[2]],g:bt[e[3]]<<4|bt[e[4]],b:bt[e[5]]<<4|bt[e[6]],a:t===9?bt[e[7]]<<4|bt[e[8]]:255})),n}const v2=(e,t)=>e<255?t(e):"";function m2(e){var t=p2(e)?d2:h2;return e?"#"+t(e.r)+t(e.g)+t(e.b)+v2(e.a,t):void 0}const y2=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function W1(e,t,n){const r=t*Math.min(n,1-n),i=(o,a=(o+e/30)%12)=>n-r*Math.max(Math.min(a-3,9-a,1),-1);return[i(0),i(8),i(4)]}function b2(e,t,n){const r=(i,o=(i+e/60)%6)=>n-n*t*Math.max(Math.min(o,4-o,1),0);return[r(5),r(3),r(1)]}function $2(e,t,n){const r=W1(e,1,.5);let i;for(t+n>1&&(i=1/(t+n),t*=i,n*=i),i=0;i<3;i++)r[i]*=1-t-n,r[i]+=t;return r}function _2(e,t,n,r,i){return e===i?(t-n)/r+(t<n?6:0):t===i?(n-e)/r+2:(e-t)/r+4}function Xd(e){const n=e.r/255,r=e.g/255,i=e.b/255,o=Math.max(n,r,i),a=Math.min(n,r,i),s=(o+a)/2;let l,u,c;return o!==a&&(c=o-a,u=s>.5?c/(2-o-a):c/(o+a),l=_2(n,r,i,c,o),l=l*60+.5),[l|0,u||0,s]}function Kd(e,t,n,r){return(Array.isArray(t)?e(t[0],t[1],t[2]):e(t,n,r)).map(Wn)}function Qd(e,t,n){return Kd(W1,e,t,n)}function w2(e,t,n){return Kd($2,e,t,n)}function x2(e,t,n){return Kd(b2,e,t,n)}function H1(e){return(e%360+360)%360}function S2(e){const t=y2.exec(e);let n=255,r;if(!t)return;t[5]!==r&&(n=t[6]?uo(+t[5]):Wn(+t[5]));const i=H1(+t[2]),o=+t[3]/100,a=+t[4]/100;return t[1]==="hwb"?r=w2(i,o,a):t[1]==="hsv"?r=x2(i,o,a):r=Qd(i,o,a),{r:r[0],g:r[1],b:r[2],a:n}}function k2(e,t){var n=Xd(e);n[0]=H1(n[0]+t),n=Qd(n),e.r=n[0],e.g=n[1],e.b=n[2]}function E2(e){if(!e)return;const t=Xd(e),n=t[0],r=ig(t[1]),i=ig(t[2]);return e.a<255?`hsla(${n}, ${r}%, ${i}%, ${ln(e.a)})`:`hsl(${n}, ${r}%, ${i}%)`}const og={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},ag={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function A2(){const e={},t=Object.keys(ag),n=Object.keys(og);let r,i,o,a,s;for(r=0;r<t.length;r++){for(a=s=t[r],i=0;i<n.length;i++)o=n[i],s=s.replace(o,og[o]);o=parseInt(ag[a],16),e[s]=[o>>16&255,o>>8&255,o&255]}return e}let Na;function T2(e){Na||(Na=A2(),Na.transparent=[0,0,0,0]);const t=Na[e.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const C2=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function P2(e){const t=C2.exec(e);let n=255,r,i,o;if(t){if(t[7]!==r){const a=+t[7];n=t[8]?uo(a):In(a*255,0,255)}return r=+t[1],i=+t[3],o=+t[5],r=255&(t[2]?uo(r):In(r,0,255)),i=255&(t[4]?uo(i):In(i,0,255)),o=255&(t[6]?uo(o):In(o,0,255)),{r,g:i,b:o,a:n}}}function M2(e){return e&&(e.a<255?`rgba(${e.r}, ${e.g}, ${e.b}, ${ln(e.a)})`:`rgb(${e.r}, ${e.g}, ${e.b})`)}const ku=e=>e<=.0031308?e*12.92:Math.pow(e,1/2.4)*1.055-.055,zr=e=>e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4);function O2(e,t,n){const r=zr(ln(e.r)),i=zr(ln(e.g)),o=zr(ln(e.b));return{r:Wn(ku(r+n*(zr(ln(t.r))-r))),g:Wn(ku(i+n*(zr(ln(t.g))-i))),b:Wn(ku(o+n*(zr(ln(t.b))-o))),a:e.a+n*(t.a-e.a)}}function Ra(e,t,n){if(e){let r=Xd(e);r[t]=Math.max(0,Math.min(r[t]+r[t]*n,t===0?360:1)),r=Qd(r),e.r=r[0],e.g=r[1],e.b=r[2]}}function G1(e,t){return e&&Object.assign(t||{},e)}function sg(e){var t={r:0,g:0,b:0,a:255};return Array.isArray(e)?e.length>=3&&(t={r:e[0],g:e[1],b:e[2],a:255},e.length>3&&(t.a=Wn(e[3]))):(t=G1(e,{r:0,g:0,b:0,a:1}),t.a=Wn(t.a)),t}function I2(e){return e.charAt(0)==="r"?P2(e):S2(e)}class Ko{constructor(t){if(t instanceof Ko)return t;const n=typeof t;let r;n==="object"?r=sg(t):n==="string"&&(r=g2(t)||T2(t)||I2(t)),this._rgb=r,this._valid=!!r}get valid(){return this._valid}get rgb(){var t=G1(this._rgb);return t&&(t.a=ln(t.a)),t}set rgb(t){this._rgb=sg(t)}rgbString(){return this._valid?M2(this._rgb):void 0}hexString(){return this._valid?m2(this._rgb):void 0}hslString(){return this._valid?E2(this._rgb):void 0}mix(t,n){if(t){const r=this.rgb,i=t.rgb;let o;const a=n===o?.5:n,s=2*a-1,l=r.a-i.a,u=((s*l===-1?s:(s+l)/(1+s*l))+1)/2;o=1-u,r.r=255&u*r.r+o*i.r+.5,r.g=255&u*r.g+o*i.g+.5,r.b=255&u*r.b+o*i.b+.5,r.a=a*r.a+(1-a)*i.a,this.rgb=r}return this}interpolate(t,n){return t&&(this._rgb=O2(this._rgb,t._rgb,n)),this}clone(){return new Ko(this.rgb)}alpha(t){return this._rgb.a=Wn(t),this}clearer(t){const n=this._rgb;return n.a*=1-t,this}greyscale(){const t=this._rgb,n=oa(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=n,this}opaquer(t){const n=this._rgb;return n.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return Ra(this._rgb,2,t),this}darken(t){return Ra(this._rgb,2,-t),this}saturate(t){return Ra(this._rgb,1,t),this}desaturate(t){return Ra(this._rgb,1,-t),this}rotate(t){return k2(this._rgb,t),this}}/*!
 * Chart.js v4.4.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */function en(){}const L2=(()=>{let e=0;return()=>e++})();function se(e){return e===null||typeof e>"u"}function ge(e){if(Array.isArray&&Array.isArray(e))return!0;const t=Object.prototype.toString.call(e);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function q(e){return e!==null&&Object.prototype.toString.call(e)==="[object Object]"}function Oe(e){return(typeof e=="number"||e instanceof Number)&&isFinite(+e)}function ut(e,t){return Oe(e)?e:t}function X(e,t){return typeof e>"u"?t:e}const N2=(e,t)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100*t:+e;function ne(e,t,n){if(e&&typeof e.call=="function")return e.apply(n,t)}function ee(e,t,n,r){let i,o,a;if(ge(e))if(o=e.length,r)for(i=o-1;i>=0;i--)t.call(n,e[i],i);else for(i=0;i<o;i++)t.call(n,e[i],i);else if(q(e))for(a=Object.keys(e),o=a.length,i=0;i<o;i++)t.call(n,e[a[i]],a[i])}function Ys(e,t){let n,r,i,o;if(!e||!t||e.length!==t.length)return!1;for(n=0,r=e.length;n<r;++n)if(i=e[n],o=t[n],i.datasetIndex!==o.datasetIndex||i.index!==o.index)return!1;return!0}function Xs(e){if(ge(e))return e.map(Xs);if(q(e)){const t=Object.create(null),n=Object.keys(e),r=n.length;let i=0;for(;i<r;++i)t[n[i]]=Xs(e[n[i]]);return t}return e}function Y1(e){return["__proto__","prototype","constructor"].indexOf(e)===-1}function R2(e,t,n,r){if(!Y1(e))return;const i=t[e],o=n[e];q(i)&&q(o)?Qo(i,o,r):t[e]=Xs(o)}function Qo(e,t,n){const r=ge(t)?t:[t],i=r.length;if(!q(e))return e;n=n||{};const o=n.merger||R2;let a;for(let s=0;s<i;++s){if(a=r[s],!q(a))continue;const l=Object.keys(a);for(let u=0,c=l.length;u<c;++u)o(l[u],e,a,n)}return e}function So(e,t){return Qo(e,t,{merger:F2})}function F2(e,t,n){if(!Y1(e))return;const r=t[e],i=n[e];q(r)&&q(i)?So(r,i):Object.prototype.hasOwnProperty.call(t,e)||(t[e]=Xs(i))}const lg={"":e=>e,x:e=>e.x,y:e=>e.y};function D2(e){const t=e.split("."),n=[];let r="";for(const i of t)r+=i,r.endsWith("\\")?r=r.slice(0,-1)+".":(n.push(r),r="");return n}function j2(e){const t=D2(e);return n=>{for(const r of t){if(r==="")break;n=n&&n[r]}return n}}function Ks(e,t){return(lg[t]||(lg[t]=j2(t)))(e)}function Zd(e){return e.charAt(0).toUpperCase()+e.slice(1)}const Qs=e=>typeof e<"u",Yn=e=>typeof e=="function",ug=(e,t)=>{if(e.size!==t.size)return!1;for(const n of e)if(!t.has(n))return!1;return!0};function z2(e){return e.type==="mouseup"||e.type==="click"||e.type==="contextmenu"}const Se=Math.PI,Tt=2*Se,B2=Tt+Se,Zs=Number.POSITIVE_INFINITY,U2=Se/180,pt=Se/2,Jn=Se/4,cg=Se*2/3,Ln=Math.log10,$i=Math.sign;function ko(e,t,n){return Math.abs(e-t)<n}function fg(e){const t=Math.round(e);e=ko(e,t,e/1e3)?t:e;const n=Math.pow(10,Math.floor(Ln(e))),r=e/n;return(r<=1?1:r<=2?2:r<=5?5:10)*n}function V2(e){const t=[],n=Math.sqrt(e);let r;for(r=1;r<n;r++)e%r===0&&(t.push(r),t.push(e/r));return n===(n|0)&&t.push(n),t.sort((i,o)=>i-o).pop(),t}function Zo(e){return!isNaN(parseFloat(e))&&isFinite(e)}function W2(e,t){const n=Math.round(e);return n-t<=e&&n+t>=e}function X1(e,t,n){let r,i,o;for(r=0,i=e.length;r<i;r++)o=e[r][n],isNaN(o)||(t.min=Math.min(t.min,o),t.max=Math.max(t.max,o))}function Nn(e){return e*(Se/180)}function qd(e){return e*(180/Se)}function dg(e){if(!Oe(e))return;let t=1,n=0;for(;Math.round(e*t)/t!==e;)t*=10,n++;return n}function H2(e,t){const n=t.x-e.x,r=t.y-e.y,i=Math.sqrt(n*n+r*r);let o=Math.atan2(r,n);return o<-.5*Se&&(o+=Tt),{angle:o,distance:i}}function qc(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function G2(e,t){return(e-t+B2)%Tt-Se}function Ft(e){return(e%Tt+Tt)%Tt}function K1(e,t,n,r){const i=Ft(e),o=Ft(t),a=Ft(n),s=Ft(o-i),l=Ft(a-i),u=Ft(i-o),c=Ft(i-a);return i===o||i===a||r&&o===a||s>l&&u<c}function kt(e,t,n){return Math.max(t,Math.min(n,e))}function Y2(e){return kt(e,-32768,32767)}function co(e,t,n,r=1e-6){return e>=Math.min(t,n)-r&&e<=Math.max(t,n)+r}function Jd(e,t,n){n=n||(a=>e[a]<t);let r=e.length-1,i=0,o;for(;r-i>1;)o=i+r>>1,n(o)?i=o:r=o;return{lo:i,hi:r}}const fr=(e,t,n,r)=>Jd(e,n,r?i=>{const o=e[i][t];return o<n||o===n&&e[i+1][t]===n}:i=>e[i][t]<n),X2=(e,t,n)=>Jd(e,n,r=>e[r][t]>=n);function K2(e,t,n){let r=0,i=e.length;for(;r<i&&e[r]<t;)r++;for(;i>r&&e[i-1]>n;)i--;return r>0||i<e.length?e.slice(r,i):e}const Q1=["push","pop","shift","splice","unshift"];function Q2(e,t){if(e._chartjs){e._chartjs.listeners.push(t);return}Object.defineProperty(e,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),Q1.forEach(n=>{const r="_onData"+Zd(n),i=e[n];Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value(...o){const a=i.apply(this,o);return e._chartjs.listeners.forEach(s=>{typeof s[r]=="function"&&s[r](...o)}),a}})})}function hg(e,t){const n=e._chartjs;if(!n)return;const r=n.listeners,i=r.indexOf(t);i!==-1&&r.splice(i,1),!(r.length>0)&&(Q1.forEach(o=>{delete e[o]}),delete e._chartjs)}function Z2(e){const t=new Set(e);return t.size===e.length?e:Array.from(t)}const Z1=function(){return typeof window>"u"?function(e){return e()}:window.requestAnimationFrame}();function q1(e,t){let n=[],r=!1;return function(...i){n=i,r||(r=!0,Z1.call(window,()=>{r=!1,e.apply(t,n)}))}}function q2(e,t){let n;return function(...r){return t?(clearTimeout(n),n=setTimeout(e,t,r)):e.apply(this,r),t}}const eh=e=>e==="start"?"left":e==="end"?"right":"center",ze=(e,t,n)=>e==="start"?t:e==="end"?n:(t+n)/2,J2=(e,t,n,r)=>e===(r?"left":"right")?n:e==="center"?(t+n)/2:t;function eS(e,t,n){const r=t.length;let i=0,o=r;if(e._sorted){const{iScale:a,_parsed:s}=e,l=a.axis,{min:u,max:c,minDefined:f,maxDefined:d}=a.getUserBounds();f&&(i=kt(Math.min(fr(s,l,u).lo,n?r:fr(t,l,a.getPixelForValue(u)).lo),0,r-1)),d?o=kt(Math.max(fr(s,a.axis,c,!0).hi+1,n?0:fr(t,l,a.getPixelForValue(c),!0).hi+1),i,r)-i:o=r-i}return{start:i,count:o}}function tS(e){const{xScale:t,yScale:n,_scaleRanges:r}=e,i={xmin:t.min,xmax:t.max,ymin:n.min,ymax:n.max};if(!r)return e._scaleRanges=i,!0;const o=r.xmin!==t.min||r.xmax!==t.max||r.ymin!==n.min||r.ymax!==n.max;return Object.assign(r,i),o}const Fa=e=>e===0||e===1,pg=(e,t,n)=>-(Math.pow(2,10*(e-=1))*Math.sin((e-t)*Tt/n)),gg=(e,t,n)=>Math.pow(2,-10*e)*Math.sin((e-t)*Tt/n)+1,Eo={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>-e*(e-2),easeInOutQuad:e=>(e/=.5)<1?.5*e*e:-.5*(--e*(e-2)-1),easeInCubic:e=>e*e*e,easeOutCubic:e=>(e-=1)*e*e+1,easeInOutCubic:e=>(e/=.5)<1?.5*e*e*e:.5*((e-=2)*e*e+2),easeInQuart:e=>e*e*e*e,easeOutQuart:e=>-((e-=1)*e*e*e-1),easeInOutQuart:e=>(e/=.5)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2),easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>(e-=1)*e*e*e*e+1,easeInOutQuint:e=>(e/=.5)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2),easeInSine:e=>-Math.cos(e*pt)+1,easeOutSine:e=>Math.sin(e*pt),easeInOutSine:e=>-.5*(Math.cos(Se*e)-1),easeInExpo:e=>e===0?0:Math.pow(2,10*(e-1)),easeOutExpo:e=>e===1?1:-Math.pow(2,-10*e)+1,easeInOutExpo:e=>Fa(e)?e:e<.5?.5*Math.pow(2,10*(e*2-1)):.5*(-Math.pow(2,-10*(e*2-1))+2),easeInCirc:e=>e>=1?e:-(Math.sqrt(1-e*e)-1),easeOutCirc:e=>Math.sqrt(1-(e-=1)*e),easeInOutCirc:e=>(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1),easeInElastic:e=>Fa(e)?e:pg(e,.075,.3),easeOutElastic:e=>Fa(e)?e:gg(e,.075,.3),easeInOutElastic(e){return Fa(e)?e:e<.5?.5*pg(e*2,.1125,.45):.5+.5*gg(e*2-1,.1125,.45)},easeInBack(e){return e*e*((1.70158+1)*e-1.70158)},easeOutBack(e){return(e-=1)*e*((1.70158+1)*e+1.70158)+1},easeInOutBack(e){let t=1.70158;return(e/=.5)<1?.5*(e*e*(((t*=1.525)+1)*e-t)):.5*((e-=2)*e*(((t*=1.525)+1)*e+t)+2)},easeInBounce:e=>1-Eo.easeOutBounce(1-e),easeOutBounce(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},easeInOutBounce:e=>e<.5?Eo.easeInBounce(e*2)*.5:Eo.easeOutBounce(e*2-1)*.5+.5};function th(e){if(e&&typeof e=="object"){const t=e.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function vg(e){return th(e)?e:new Ko(e)}function Eu(e){return th(e)?e:new Ko(e).saturate(.5).darken(.1).hexString()}const nS=["x","y","borderWidth","radius","tension"],rS=["color","borderColor","backgroundColor"];function iS(e){e.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),e.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),e.set("animations",{colors:{type:"color",properties:rS},numbers:{type:"number",properties:nS}}),e.describe("animations",{_fallback:"animation"}),e.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function oS(e){e.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const mg=new Map;function aS(e,t){t=t||{};const n=e+JSON.stringify(t);let r=mg.get(n);return r||(r=new Intl.NumberFormat(e,t),mg.set(n,r)),r}function nh(e,t,n){return aS(t,n).format(e)}const J1={values(e){return ge(e)?e:""+e},numeric(e,t,n){if(e===0)return"0";const r=this.chart.options.locale;let i,o=e;if(n.length>1){const u=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(u<1e-4||u>1e15)&&(i="scientific"),o=sS(e,n)}const a=Ln(Math.abs(o)),s=isNaN(a)?1:Math.max(Math.min(-1*Math.floor(a),20),0),l={notation:i,minimumFractionDigits:s,maximumFractionDigits:s};return Object.assign(l,this.options.ticks.format),nh(e,r,l)},logarithmic(e,t,n){if(e===0)return"0";const r=n[t].significand||e/Math.pow(10,Math.floor(Ln(e)));return[1,2,3,5,10,15].includes(r)||t>.8*n.length?J1.numeric.call(this,e,t,n):""}};function sS(e,t){let n=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(n)>=1&&e!==Math.floor(e)&&(n=e-Math.floor(e)),n}var Tl={formatters:J1};function lS(e){e.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,n)=>n.lineWidth,tickColor:(t,n)=>n.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Tl.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),e.route("scale.ticks","color","","color"),e.route("scale.grid","color","","borderColor"),e.route("scale.border","color","","borderColor"),e.route("scale.title","color","","color"),e.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),e.describe("scales",{_fallback:"scale"}),e.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const xr=Object.create(null),Jc=Object.create(null);function Ao(e,t){if(!t)return e;const n=t.split(".");for(let r=0,i=n.length;r<i;++r){const o=n[r];e=e[o]||(e[o]=Object.create(null))}return e}function Au(e,t,n){return typeof t=="string"?Qo(Ao(e,t),n):Qo(Ao(e,""),t)}class uS{constructor(t,n){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=r=>r.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(r,i)=>Eu(i.backgroundColor),this.hoverBorderColor=(r,i)=>Eu(i.borderColor),this.hoverColor=(r,i)=>Eu(i.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(n)}set(t,n){return Au(this,t,n)}get(t){return Ao(this,t)}describe(t,n){return Au(Jc,t,n)}override(t,n){return Au(xr,t,n)}route(t,n,r,i){const o=Ao(this,t),a=Ao(this,r),s="_"+n;Object.defineProperties(o,{[s]:{value:o[n],writable:!0},[n]:{enumerable:!0,get(){const l=this[s],u=a[i];return q(l)?Object.assign({},u,l):X(l,u)},set(l){this[s]=l}}})}apply(t){t.forEach(n=>n(this))}}var _e=new uS({_scriptable:e=>!e.startsWith("on"),_indexable:e=>e!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[iS,oS,lS]);function cS(e){return!e||se(e.size)||se(e.family)?null:(e.style?e.style+" ":"")+(e.weight?e.weight+" ":"")+e.size+"px "+e.family}function qs(e,t,n,r,i){let o=t[i];return o||(o=t[i]=e.measureText(i).width,n.push(i)),o>r&&(r=o),r}function fS(e,t,n,r){r=r||{};let i=r.data=r.data||{},o=r.garbageCollect=r.garbageCollect||[];r.font!==t&&(i=r.data={},o=r.garbageCollect=[],r.font=t),e.save(),e.font=t;let a=0;const s=n.length;let l,u,c,f,d;for(l=0;l<s;l++)if(f=n[l],f!=null&&!ge(f))a=qs(e,i,o,a,f);else if(ge(f))for(u=0,c=f.length;u<c;u++)d=f[u],d!=null&&!ge(d)&&(a=qs(e,i,o,a,d));e.restore();const h=o.length/2;if(h>n.length){for(l=0;l<h;l++)delete i[o[l]];o.splice(0,h)}return a}function er(e,t,n){const r=e.currentDevicePixelRatio,i=n!==0?Math.max(n/2,.5):0;return Math.round((t-i)*r)/r+i}function yg(e,t){t=t||e.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,e.width,e.height),t.restore()}function ef(e,t,n,r){eb(e,t,n,r,null)}function eb(e,t,n,r,i){let o,a,s,l,u,c,f,d;const h=t.pointStyle,g=t.rotation,m=t.radius;let y=(g||0)*U2;if(h&&typeof h=="object"&&(o=h.toString(),o==="[object HTMLImageElement]"||o==="[object HTMLCanvasElement]")){e.save(),e.translate(n,r),e.rotate(y),e.drawImage(h,-h.width/2,-h.height/2,h.width,h.height),e.restore();return}if(!(isNaN(m)||m<=0)){switch(e.beginPath(),h){default:i?e.ellipse(n,r,i/2,m,0,0,Tt):e.arc(n,r,m,0,Tt),e.closePath();break;case"triangle":c=i?i/2:m,e.moveTo(n+Math.sin(y)*c,r-Math.cos(y)*m),y+=cg,e.lineTo(n+Math.sin(y)*c,r-Math.cos(y)*m),y+=cg,e.lineTo(n+Math.sin(y)*c,r-Math.cos(y)*m),e.closePath();break;case"rectRounded":u=m*.516,l=m-u,a=Math.cos(y+Jn)*l,f=Math.cos(y+Jn)*(i?i/2-u:l),s=Math.sin(y+Jn)*l,d=Math.sin(y+Jn)*(i?i/2-u:l),e.arc(n-f,r-s,u,y-Se,y-pt),e.arc(n+d,r-a,u,y-pt,y),e.arc(n+f,r+s,u,y,y+pt),e.arc(n-d,r+a,u,y+pt,y+Se),e.closePath();break;case"rect":if(!g){l=Math.SQRT1_2*m,c=i?i/2:l,e.rect(n-c,r-l,2*c,2*l);break}y+=Jn;case"rectRot":f=Math.cos(y)*(i?i/2:m),a=Math.cos(y)*m,s=Math.sin(y)*m,d=Math.sin(y)*(i?i/2:m),e.moveTo(n-f,r-s),e.lineTo(n+d,r-a),e.lineTo(n+f,r+s),e.lineTo(n-d,r+a),e.closePath();break;case"crossRot":y+=Jn;case"cross":f=Math.cos(y)*(i?i/2:m),a=Math.cos(y)*m,s=Math.sin(y)*m,d=Math.sin(y)*(i?i/2:m),e.moveTo(n-f,r-s),e.lineTo(n+f,r+s),e.moveTo(n+d,r-a),e.lineTo(n-d,r+a);break;case"star":f=Math.cos(y)*(i?i/2:m),a=Math.cos(y)*m,s=Math.sin(y)*m,d=Math.sin(y)*(i?i/2:m),e.moveTo(n-f,r-s),e.lineTo(n+f,r+s),e.moveTo(n+d,r-a),e.lineTo(n-d,r+a),y+=Jn,f=Math.cos(y)*(i?i/2:m),a=Math.cos(y)*m,s=Math.sin(y)*m,d=Math.sin(y)*(i?i/2:m),e.moveTo(n-f,r-s),e.lineTo(n+f,r+s),e.moveTo(n+d,r-a),e.lineTo(n-d,r+a);break;case"line":a=i?i/2:Math.cos(y)*m,s=Math.sin(y)*m,e.moveTo(n-a,r-s),e.lineTo(n+a,r+s);break;case"dash":e.moveTo(n,r),e.lineTo(n+Math.cos(y)*(i?i/2:m),r+Math.sin(y)*m);break;case!1:e.closePath();break}e.fill(),t.borderWidth>0&&e.stroke()}}function fn(e,t,n){return n=n||.5,!t||e&&e.x>t.left-n&&e.x<t.right+n&&e.y>t.top-n&&e.y<t.bottom+n}function rh(e,t){e.save(),e.beginPath(),e.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),e.clip()}function ih(e){e.restore()}function dS(e,t,n,r,i){if(!t)return e.lineTo(n.x,n.y);if(i==="middle"){const o=(t.x+n.x)/2;e.lineTo(o,t.y),e.lineTo(o,n.y)}else i==="after"!=!!r?e.lineTo(t.x,n.y):e.lineTo(n.x,t.y);e.lineTo(n.x,n.y)}function hS(e,t,n,r){if(!t)return e.lineTo(n.x,n.y);e.bezierCurveTo(r?t.cp1x:t.cp2x,r?t.cp1y:t.cp2y,r?n.cp2x:n.cp1x,r?n.cp2y:n.cp1y,n.x,n.y)}function pS(e,t){t.translation&&e.translate(t.translation[0],t.translation[1]),se(t.rotation)||e.rotate(t.rotation),t.color&&(e.fillStyle=t.color),t.textAlign&&(e.textAlign=t.textAlign),t.textBaseline&&(e.textBaseline=t.textBaseline)}function gS(e,t,n,r,i){if(i.strikethrough||i.underline){const o=e.measureText(r),a=t-o.actualBoundingBoxLeft,s=t+o.actualBoundingBoxRight,l=n-o.actualBoundingBoxAscent,u=n+o.actualBoundingBoxDescent,c=i.strikethrough?(l+u)/2:u;e.strokeStyle=e.fillStyle,e.beginPath(),e.lineWidth=i.decorationWidth||2,e.moveTo(a,c),e.lineTo(s,c),e.stroke()}}function vS(e,t){const n=e.fillStyle;e.fillStyle=t.color,e.fillRect(t.left,t.top,t.width,t.height),e.fillStyle=n}function Sr(e,t,n,r,i,o={}){const a=ge(t)?t:[t],s=o.strokeWidth>0&&o.strokeColor!=="";let l,u;for(e.save(),e.font=i.string,pS(e,o),l=0;l<a.length;++l)u=a[l],o.backdrop&&vS(e,o.backdrop),s&&(o.strokeColor&&(e.strokeStyle=o.strokeColor),se(o.strokeWidth)||(e.lineWidth=o.strokeWidth),e.strokeText(u,n,r,o.maxWidth)),e.fillText(u,n,r,o.maxWidth),gS(e,n,r,u,o),r+=Number(i.lineHeight);e.restore()}function Js(e,t){const{x:n,y:r,w:i,h:o,radius:a}=t;e.arc(n+a.topLeft,r+a.topLeft,a.topLeft,1.5*Se,Se,!0),e.lineTo(n,r+o-a.bottomLeft),e.arc(n+a.bottomLeft,r+o-a.bottomLeft,a.bottomLeft,Se,pt,!0),e.lineTo(n+i-a.bottomRight,r+o),e.arc(n+i-a.bottomRight,r+o-a.bottomRight,a.bottomRight,pt,0,!0),e.lineTo(n+i,r+a.topRight),e.arc(n+i-a.topRight,r+a.topRight,a.topRight,0,-pt,!0),e.lineTo(n+a.topLeft,r)}const mS=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,yS=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function bS(e,t){const n=(""+e).match(mS);if(!n||n[1]==="normal")return t*1.2;switch(e=+n[2],n[3]){case"px":return e;case"%":e/=100;break}return t*e}const $S=e=>+e||0;function tb(e,t){const n={},r=q(t),i=r?Object.keys(t):t,o=q(e)?r?a=>X(e[a],e[t[a]]):a=>e[a]:()=>e;for(const a of i)n[a]=$S(o(a));return n}function _S(e){return tb(e,{top:"y",right:"x",bottom:"y",left:"x"})}function ui(e){return tb(e,["topLeft","topRight","bottomLeft","bottomRight"])}function Ve(e){const t=_S(e);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function Pe(e,t){e=e||{},t=t||_e.font;let n=X(e.size,t.size);typeof n=="string"&&(n=parseInt(n,10));let r=X(e.style,t.style);r&&!(""+r).match(yS)&&(console.warn('Invalid font style specified: "'+r+'"'),r=void 0);const i={family:X(e.family,t.family),lineHeight:bS(X(e.lineHeight,t.lineHeight),n),size:n,style:r,weight:X(e.weight,t.weight),string:""};return i.string=cS(i),i}function Da(e,t,n,r){let i=!0,o,a,s;for(o=0,a=e.length;o<a;++o)if(s=e[o],s!==void 0&&(t!==void 0&&typeof s=="function"&&(s=s(t),i=!1),n!==void 0&&ge(s)&&(s=s[n%s.length],i=!1),s!==void 0))return r&&!i&&(r.cacheable=!1),s}function wS(e,t,n){const{min:r,max:i}=e,o=N2(t,(i-r)/2),a=(s,l)=>n&&s===0?0:s+l;return{min:a(r,-Math.abs(o)),max:a(i,o)}}function Zn(e,t){return Object.assign(Object.create(e),t)}function oh(e,t=[""],n,r,i=()=>e[0]){const o=n||e;typeof r>"u"&&(r=ob("_fallback",e));const a={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:e,_rootScopes:o,_fallback:r,_getTarget:i,override:s=>oh([s,...e],t,o,r)};return new Proxy(a,{deleteProperty(s,l){return delete s[l],delete s._keys,delete e[0][l],!0},get(s,l){return rb(s,l,()=>PS(l,t,e,s))},getOwnPropertyDescriptor(s,l){return Reflect.getOwnPropertyDescriptor(s._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(e[0])},has(s,l){return $g(s).includes(l)},ownKeys(s){return $g(s)},set(s,l,u){const c=s._storage||(s._storage=i());return s[l]=c[l]=u,delete s._keys,!0}})}function _i(e,t,n,r){const i={_cacheable:!1,_proxy:e,_context:t,_subProxy:n,_stack:new Set,_descriptors:nb(e,r),setContext:o=>_i(e,o,n,r),override:o=>_i(e.override(o),t,n,r)};return new Proxy(i,{deleteProperty(o,a){return delete o[a],delete e[a],!0},get(o,a,s){return rb(o,a,()=>SS(o,a,s))},getOwnPropertyDescriptor(o,a){return o._descriptors.allKeys?Reflect.has(e,a)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(e,a)},getPrototypeOf(){return Reflect.getPrototypeOf(e)},has(o,a){return Reflect.has(e,a)},ownKeys(){return Reflect.ownKeys(e)},set(o,a,s){return e[a]=s,delete o[a],!0}})}function nb(e,t={scriptable:!0,indexable:!0}){const{_scriptable:n=t.scriptable,_indexable:r=t.indexable,_allKeys:i=t.allKeys}=e;return{allKeys:i,scriptable:n,indexable:r,isScriptable:Yn(n)?n:()=>n,isIndexable:Yn(r)?r:()=>r}}const xS=(e,t)=>e?e+Zd(t):t,ah=(e,t)=>q(t)&&e!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function rb(e,t,n){if(Object.prototype.hasOwnProperty.call(e,t))return e[t];const r=n();return e[t]=r,r}function SS(e,t,n){const{_proxy:r,_context:i,_subProxy:o,_descriptors:a}=e;let s=r[t];return Yn(s)&&a.isScriptable(t)&&(s=kS(t,s,e,n)),ge(s)&&s.length&&(s=ES(t,s,e,a.isIndexable)),ah(t,s)&&(s=_i(s,i,o&&o[t],a)),s}function kS(e,t,n,r){const{_proxy:i,_context:o,_subProxy:a,_stack:s}=n;if(s.has(e))throw new Error("Recursion detected: "+Array.from(s).join("->")+"->"+e);s.add(e);let l=t(o,a||r);return s.delete(e),ah(e,l)&&(l=sh(i._scopes,i,e,l)),l}function ES(e,t,n,r){const{_proxy:i,_context:o,_subProxy:a,_descriptors:s}=n;if(typeof o.index<"u"&&r(e))return t[o.index%t.length];if(q(t[0])){const l=t,u=i._scopes.filter(c=>c!==l);t=[];for(const c of l){const f=sh(u,i,e,c);t.push(_i(f,o,a&&a[e],s))}}return t}function ib(e,t,n){return Yn(e)?e(t,n):e}const AS=(e,t)=>e===!0?t:typeof e=="string"?Ks(t,e):void 0;function TS(e,t,n,r,i){for(const o of t){const a=AS(n,o);if(a){e.add(a);const s=ib(a._fallback,n,i);if(typeof s<"u"&&s!==n&&s!==r)return s}else if(a===!1&&typeof r<"u"&&n!==r)return null}return!1}function sh(e,t,n,r){const i=t._rootScopes,o=ib(t._fallback,n,r),a=[...e,...i],s=new Set;s.add(r);let l=bg(s,a,n,o||n,r);return l===null||typeof o<"u"&&o!==n&&(l=bg(s,a,o,l,r),l===null)?!1:oh(Array.from(s),[""],i,o,()=>CS(t,n,r))}function bg(e,t,n,r,i){for(;n;)n=TS(e,t,n,r,i);return n}function CS(e,t,n){const r=e._getTarget();t in r||(r[t]={});const i=r[t];return ge(i)&&q(n)?n:i||{}}function PS(e,t,n,r){let i;for(const o of t)if(i=ob(xS(o,e),n),typeof i<"u")return ah(e,i)?sh(n,r,e,i):i}function ob(e,t){for(const n of t){if(!n)continue;const r=n[e];if(typeof r<"u")return r}}function $g(e){let t=e._keys;return t||(t=e._keys=MS(e._scopes)),t}function MS(e){const t=new Set;for(const n of e)for(const r of Object.keys(n).filter(i=>!i.startsWith("_")))t.add(r);return Array.from(t)}const OS=Number.EPSILON||1e-14,wi=(e,t)=>t<e.length&&!e[t].skip&&e[t],ab=e=>e==="x"?"y":"x";function IS(e,t,n,r){const i=e.skip?t:e,o=t,a=n.skip?t:n,s=qc(o,i),l=qc(a,o);let u=s/(s+l),c=l/(s+l);u=isNaN(u)?0:u,c=isNaN(c)?0:c;const f=r*u,d=r*c;return{previous:{x:o.x-f*(a.x-i.x),y:o.y-f*(a.y-i.y)},next:{x:o.x+d*(a.x-i.x),y:o.y+d*(a.y-i.y)}}}function LS(e,t,n){const r=e.length;let i,o,a,s,l,u=wi(e,0);for(let c=0;c<r-1;++c)if(l=u,u=wi(e,c+1),!(!l||!u)){if(ko(t[c],0,OS)){n[c]=n[c+1]=0;continue}i=n[c]/t[c],o=n[c+1]/t[c],s=Math.pow(i,2)+Math.pow(o,2),!(s<=9)&&(a=3/Math.sqrt(s),n[c]=i*a*t[c],n[c+1]=o*a*t[c])}}function NS(e,t,n="x"){const r=ab(n),i=e.length;let o,a,s,l=wi(e,0);for(let u=0;u<i;++u){if(a=s,s=l,l=wi(e,u+1),!s)continue;const c=s[n],f=s[r];a&&(o=(c-a[n])/3,s[`cp1${n}`]=c-o,s[`cp1${r}`]=f-o*t[u]),l&&(o=(l[n]-c)/3,s[`cp2${n}`]=c+o,s[`cp2${r}`]=f+o*t[u])}}function RS(e,t="x"){const n=ab(t),r=e.length,i=Array(r).fill(0),o=Array(r);let a,s,l,u=wi(e,0);for(a=0;a<r;++a)if(s=l,l=u,u=wi(e,a+1),!!l){if(u){const c=u[t]-l[t];i[a]=c!==0?(u[n]-l[n])/c:0}o[a]=s?u?$i(i[a-1])!==$i(i[a])?0:(i[a-1]+i[a])/2:i[a-1]:i[a]}LS(e,i,o),NS(e,o,t)}function ja(e,t,n){return Math.max(Math.min(e,n),t)}function FS(e,t){let n,r,i,o,a,s=fn(e[0],t);for(n=0,r=e.length;n<r;++n)a=o,o=s,s=n<r-1&&fn(e[n+1],t),o&&(i=e[n],a&&(i.cp1x=ja(i.cp1x,t.left,t.right),i.cp1y=ja(i.cp1y,t.top,t.bottom)),s&&(i.cp2x=ja(i.cp2x,t.left,t.right),i.cp2y=ja(i.cp2y,t.top,t.bottom)))}function DS(e,t,n,r,i){let o,a,s,l;if(t.spanGaps&&(e=e.filter(u=>!u.skip)),t.cubicInterpolationMode==="monotone")RS(e,i);else{let u=r?e[e.length-1]:e[0];for(o=0,a=e.length;o<a;++o)s=e[o],l=IS(u,s,e[Math.min(o+1,a-(r?0:1))%a],t.tension),s.cp1x=l.previous.x,s.cp1y=l.previous.y,s.cp2x=l.next.x,s.cp2y=l.next.y,u=s}t.capBezierPoints&&FS(e,n)}function sb(){return typeof window<"u"&&typeof document<"u"}function lh(e){let t=e.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function el(e,t,n){let r;return typeof e=="string"?(r=parseInt(e,10),e.indexOf("%")!==-1&&(r=r/100*t.parentNode[n])):r=e,r}const Cl=e=>e.ownerDocument.defaultView.getComputedStyle(e,null);function jS(e,t){return Cl(e).getPropertyValue(t)}const zS=["top","right","bottom","left"];function mr(e,t,n){const r={};n=n?"-"+n:"";for(let i=0;i<4;i++){const o=zS[i];r[o]=parseFloat(e[t+"-"+o+n])||0}return r.width=r.left+r.right,r.height=r.top+r.bottom,r}const BS=(e,t,n)=>(e>0||t>0)&&(!n||!n.shadowRoot);function US(e,t){const n=e.touches,r=n&&n.length?n[0]:e,{offsetX:i,offsetY:o}=r;let a=!1,s,l;if(BS(i,o,e.target))s=i,l=o;else{const u=t.getBoundingClientRect();s=r.clientX-u.left,l=r.clientY-u.top,a=!0}return{x:s,y:l,box:a}}function ar(e,t){if("native"in e)return e;const{canvas:n,currentDevicePixelRatio:r}=t,i=Cl(n),o=i.boxSizing==="border-box",a=mr(i,"padding"),s=mr(i,"border","width"),{x:l,y:u,box:c}=US(e,n),f=a.left+(c&&s.left),d=a.top+(c&&s.top);let{width:h,height:g}=t;return o&&(h-=a.width+s.width,g-=a.height+s.height),{x:Math.round((l-f)/h*n.width/r),y:Math.round((u-d)/g*n.height/r)}}function VS(e,t,n){let r,i;if(t===void 0||n===void 0){const o=lh(e);if(!o)t=e.clientWidth,n=e.clientHeight;else{const a=o.getBoundingClientRect(),s=Cl(o),l=mr(s,"border","width"),u=mr(s,"padding");t=a.width-u.width-l.width,n=a.height-u.height-l.height,r=el(s.maxWidth,o,"clientWidth"),i=el(s.maxHeight,o,"clientHeight")}}return{width:t,height:n,maxWidth:r||Zs,maxHeight:i||Zs}}const za=e=>Math.round(e*10)/10;function WS(e,t,n,r){const i=Cl(e),o=mr(i,"margin"),a=el(i.maxWidth,e,"clientWidth")||Zs,s=el(i.maxHeight,e,"clientHeight")||Zs,l=VS(e,t,n);let{width:u,height:c}=l;if(i.boxSizing==="content-box"){const d=mr(i,"border","width"),h=mr(i,"padding");u-=h.width+d.width,c-=h.height+d.height}return u=Math.max(0,u-o.width),c=Math.max(0,r?u/r:c-o.height),u=za(Math.min(u,a,l.maxWidth)),c=za(Math.min(c,s,l.maxHeight)),u&&!c&&(c=za(u/2)),(t!==void 0||n!==void 0)&&r&&l.height&&c>l.height&&(c=l.height,u=za(Math.floor(c*r))),{width:u,height:c}}function _g(e,t,n){const r=t||1,i=Math.floor(e.height*r),o=Math.floor(e.width*r);e.height=Math.floor(e.height),e.width=Math.floor(e.width);const a=e.canvas;return a.style&&(n||!a.style.height&&!a.style.width)&&(a.style.height=`${e.height}px`,a.style.width=`${e.width}px`),e.currentDevicePixelRatio!==r||a.height!==i||a.width!==o?(e.currentDevicePixelRatio=r,a.height=i,a.width=o,e.ctx.setTransform(r,0,0,r,0,0),!0):!1}const HS=function(){let e=!1;try{const t={get passive(){return e=!0,!1}};window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch{}return e}();function wg(e,t){const n=jS(e,t),r=n&&n.match(/^(\d+)(\.\d+)?px$/);return r?+r[1]:void 0}function sr(e,t,n,r){return{x:e.x+n*(t.x-e.x),y:e.y+n*(t.y-e.y)}}function GS(e,t,n,r){return{x:e.x+n*(t.x-e.x),y:r==="middle"?n<.5?e.y:t.y:r==="after"?n<1?e.y:t.y:n>0?t.y:e.y}}function YS(e,t,n,r){const i={x:e.cp2x,y:e.cp2y},o={x:t.cp1x,y:t.cp1y},a=sr(e,i,n),s=sr(i,o,n),l=sr(o,t,n),u=sr(a,s,n),c=sr(s,l,n);return sr(u,c,n)}const XS=function(e,t){return{x(n){return e+e+t-n},setWidth(n){t=n},textAlign(n){return n==="center"?n:n==="right"?"left":"right"},xPlus(n,r){return n-r},leftForLtr(n,r){return n-r}}},KS=function(){return{x(e){return e},setWidth(e){},textAlign(e){return e},xPlus(e,t){return e+t},leftForLtr(e,t){return e}}};function ci(e,t,n){return e?XS(t,n):KS()}function lb(e,t){let n,r;(t==="ltr"||t==="rtl")&&(n=e.canvas.style,r=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",t,"important"),e.prevTextDirection=r)}function ub(e,t){t!==void 0&&(delete e.prevTextDirection,e.canvas.style.setProperty("direction",t[0],t[1]))}function cb(e){return e==="angle"?{between:K1,compare:G2,normalize:Ft}:{between:co,compare:(t,n)=>t-n,normalize:t=>t}}function xg({start:e,end:t,count:n,loop:r,style:i}){return{start:e%n,end:t%n,loop:r&&(t-e+1)%n===0,style:i}}function QS(e,t,n){const{property:r,start:i,end:o}=n,{between:a,normalize:s}=cb(r),l=t.length;let{start:u,end:c,loop:f}=e,d,h;if(f){for(u+=l,c+=l,d=0,h=l;d<h&&a(s(t[u%l][r]),i,o);++d)u--,c--;u%=l,c%=l}return c<u&&(c+=l),{start:u,end:c,loop:f,style:e.style}}function ZS(e,t,n){if(!n)return[e];const{property:r,start:i,end:o}=n,a=t.length,{compare:s,between:l,normalize:u}=cb(r),{start:c,end:f,loop:d,style:h}=QS(e,t,n),g=[];let m=!1,y=null,p,v,b;const $=()=>l(i,b,p)&&s(i,b)!==0,_=()=>s(o,p)===0||l(o,b,p),S=()=>m||$(),x=()=>!m||_();for(let E=c,O=c;E<=f;++E)v=t[E%a],!v.skip&&(p=u(v[r]),p!==b&&(m=l(p,i,o),y===null&&S()&&(y=s(p,i)===0?E:O),y!==null&&x()&&(g.push(xg({start:y,end:E,loop:d,count:a,style:h})),y=null),O=E,b=p));return y!==null&&g.push(xg({start:y,end:f,loop:d,count:a,style:h})),g}function qS(e,t){const n=[],r=e.segments;for(let i=0;i<r.length;i++){const o=ZS(r[i],e.points,t);o.length&&n.push(...o)}return n}function JS(e,t,n,r){let i=0,o=t-1;if(n&&!r)for(;i<t&&!e[i].skip;)i++;for(;i<t&&e[i].skip;)i++;for(i%=t,n&&(o+=i);o>i&&e[o%t].skip;)o--;return o%=t,{start:i,end:o}}function ek(e,t,n,r){const i=e.length,o=[];let a=t,s=e[t],l;for(l=t+1;l<=n;++l){const u=e[l%i];u.skip||u.stop?s.skip||(r=!1,o.push({start:t%i,end:(l-1)%i,loop:r}),t=a=u.stop?l:null):(a=l,s.skip&&(t=l)),s=u}return a!==null&&o.push({start:t%i,end:a%i,loop:r}),o}function tk(e,t){const n=e.points,r=e.options.spanGaps,i=n.length;if(!i)return[];const o=!!e._loop,{start:a,end:s}=JS(n,i,o,r);if(r===!0)return Sg(e,[{start:a,end:s,loop:o}],n,t);const l=s<a?s+i:s,u=!!e._fullLoop&&a===0&&s===i-1;return Sg(e,ek(n,a,l,u),n,t)}function Sg(e,t,n,r){return!r||!r.setContext||!n?t:nk(e,t,n,r)}function nk(e,t,n,r){const i=e._chart.getContext(),o=kg(e.options),{_datasetIndex:a,options:{spanGaps:s}}=e,l=n.length,u=[];let c=o,f=t[0].start,d=f;function h(g,m,y,p){const v=s?-1:1;if(g!==m){for(g+=l;n[g%l].skip;)g-=v;for(;n[m%l].skip;)m+=v;g%l!==m%l&&(u.push({start:g%l,end:m%l,loop:y,style:p}),c=p,f=m%l)}}for(const g of t){f=s?f:g.start;let m=n[f%l],y;for(d=f+1;d<=g.end;d++){const p=n[d%l];y=kg(r.setContext(Zn(i,{type:"segment",p0:m,p1:p,p0DataIndex:(d-1)%l,p1DataIndex:d%l,datasetIndex:a}))),rk(y,c)&&h(f,d-1,g.loop,c),m=p,c=y}f<d-1&&h(f,d-1,g.loop,c)}return u}function kg(e){return{backgroundColor:e.backgroundColor,borderCapStyle:e.borderCapStyle,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderJoinStyle:e.borderJoinStyle,borderWidth:e.borderWidth,borderColor:e.borderColor}}function rk(e,t){if(!t)return!1;const n=[],r=function(i,o){return th(o)?(n.includes(o)||n.push(o),n.indexOf(o)):o};return JSON.stringify(e,r)!==JSON.stringify(t,r)}/*!
 * Chart.js v4.4.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */class ik{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,n,r,i){const o=n.listeners[i],a=n.duration;o.forEach(s=>s({chart:t,initial:n.initial,numSteps:a,currentStep:Math.min(r-n.start,a)}))}_refresh(){this._request||(this._running=!0,this._request=Z1.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let n=0;this._charts.forEach((r,i)=>{if(!r.running||!r.items.length)return;const o=r.items;let a=o.length-1,s=!1,l;for(;a>=0;--a)l=o[a],l._active?(l._total>r.duration&&(r.duration=l._total),l.tick(t),s=!0):(o[a]=o[o.length-1],o.pop());s&&(i.draw(),this._notify(i,r,t,"progress")),o.length||(r.running=!1,this._notify(i,r,t,"complete"),r.initial=!1),n+=o.length}),this._lastDate=t,n===0&&(this._running=!1)}_getAnims(t){const n=this._charts;let r=n.get(t);return r||(r={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},n.set(t,r)),r}listen(t,n,r){this._getAnims(t).listeners[n].push(r)}add(t,n){!n||!n.length||this._getAnims(t).items.push(...n)}has(t){return this._getAnims(t).items.length>0}start(t){const n=this._charts.get(t);n&&(n.running=!0,n.start=Date.now(),n.duration=n.items.reduce((r,i)=>Math.max(r,i._duration),0),this._refresh())}running(t){if(!this._running)return!1;const n=this._charts.get(t);return!(!n||!n.running||!n.items.length)}stop(t){const n=this._charts.get(t);if(!n||!n.items.length)return;const r=n.items;let i=r.length-1;for(;i>=0;--i)r[i].cancel();n.items=[],this._notify(t,n,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var rn=new ik;const Eg="transparent",ok={boolean(e,t,n){return n>.5?t:e},color(e,t,n){const r=vg(e||Eg),i=r.valid&&vg(t||Eg);return i&&i.valid?i.mix(r,n).hexString():t},number(e,t,n){return e+(t-e)*n}};class ak{constructor(t,n,r,i){const o=n[r];i=Da([t.to,i,o,t.from]);const a=Da([t.from,o,i]);this._active=!0,this._fn=t.fn||ok[t.type||typeof a],this._easing=Eo[t.easing]||Eo.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=n,this._prop=r,this._from=a,this._to=i,this._promises=void 0}active(){return this._active}update(t,n,r){if(this._active){this._notify(!1);const i=this._target[this._prop],o=r-this._start,a=this._duration-o;this._start=r,this._duration=Math.floor(Math.max(a,t.duration)),this._total+=o,this._loop=!!t.loop,this._to=Da([t.to,n,i,t.from]),this._from=Da([t.from,i,n])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const n=t-this._start,r=this._duration,i=this._prop,o=this._from,a=this._loop,s=this._to;let l;if(this._active=o!==s&&(a||n<r),!this._active){this._target[i]=s,this._notify(!0);return}if(n<0){this._target[i]=o;return}l=n/r%2,l=a&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[i]=this._fn(o,s,l)}wait(){const t=this._promises||(this._promises=[]);return new Promise((n,r)=>{t.push({res:n,rej:r})})}_notify(t){const n=t?"res":"rej",r=this._promises||[];for(let i=0;i<r.length;i++)r[i][n]()}}class fb{constructor(t,n){this._chart=t,this._properties=new Map,this.configure(n)}configure(t){if(!q(t))return;const n=Object.keys(_e.animation),r=this._properties;Object.getOwnPropertyNames(t).forEach(i=>{const o=t[i];if(!q(o))return;const a={};for(const s of n)a[s]=o[s];(ge(o.properties)&&o.properties||[i]).forEach(s=>{(s===i||!r.has(s))&&r.set(s,a)})})}_animateOptions(t,n){const r=n.options,i=lk(t,r);if(!i)return[];const o=this._createAnimations(i,r);return r.$shared&&sk(t.options.$animations,r).then(()=>{t.options=r},()=>{}),o}_createAnimations(t,n){const r=this._properties,i=[],o=t.$animations||(t.$animations={}),a=Object.keys(n),s=Date.now();let l;for(l=a.length-1;l>=0;--l){const u=a[l];if(u.charAt(0)==="$")continue;if(u==="options"){i.push(...this._animateOptions(t,n));continue}const c=n[u];let f=o[u];const d=r.get(u);if(f)if(d&&f.active()){f.update(d,c,s);continue}else f.cancel();if(!d||!d.duration){t[u]=c;continue}o[u]=f=new ak(d,t,u,c),i.push(f)}return i}update(t,n){if(this._properties.size===0){Object.assign(t,n);return}const r=this._createAnimations(t,n);if(r.length)return rn.add(this._chart,r),!0}}function sk(e,t){const n=[],r=Object.keys(t);for(let i=0;i<r.length;i++){const o=e[r[i]];o&&o.active()&&n.push(o.wait())}return Promise.all(n)}function lk(e,t){if(!t)return;let n=e.options;if(!n){e.options=t;return}return n.$shared&&(e.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function Ag(e,t){const n=e&&e.options||{},r=n.reverse,i=n.min===void 0?t:0,o=n.max===void 0?t:0;return{start:r?o:i,end:r?i:o}}function uk(e,t,n){if(n===!1)return!1;const r=Ag(e,n),i=Ag(t,n);return{top:i.end,right:r.end,bottom:i.start,left:r.start}}function ck(e){let t,n,r,i;return q(e)?(t=e.top,n=e.right,r=e.bottom,i=e.left):t=n=r=i=e,{top:t,right:n,bottom:r,left:i,disabled:e===!1}}function db(e,t){const n=[],r=e._getSortedDatasetMetas(t);let i,o;for(i=0,o=r.length;i<o;++i)n.push(r[i].index);return n}function Tg(e,t,n,r={}){const i=e.keys,o=r.mode==="single";let a,s,l,u;if(t!==null){for(a=0,s=i.length;a<s;++a){if(l=+i[a],l===n){if(r.all)continue;break}u=e.values[l],Oe(u)&&(o||t===0||$i(t)===$i(u))&&(t+=u)}return t}}function fk(e){const t=Object.keys(e),n=new Array(t.length);let r,i,o;for(r=0,i=t.length;r<i;++r)o=t[r],n[r]={x:o,y:e[o]};return n}function Cg(e,t){const n=e&&e.options.stacked;return n||n===void 0&&t.stack!==void 0}function dk(e,t,n){return`${e.id}.${t.id}.${n.stack||n.type}`}function hk(e){const{min:t,max:n,minDefined:r,maxDefined:i}=e.getUserBounds();return{min:r?t:Number.NEGATIVE_INFINITY,max:i?n:Number.POSITIVE_INFINITY}}function pk(e,t,n){const r=e[t]||(e[t]={});return r[n]||(r[n]={})}function Pg(e,t,n,r){for(const i of t.getMatchingVisibleMetas(r).reverse()){const o=e[i.index];if(n&&o>0||!n&&o<0)return i.index}return null}function Mg(e,t){const{chart:n,_cachedMeta:r}=e,i=n._stacks||(n._stacks={}),{iScale:o,vScale:a,index:s}=r,l=o.axis,u=a.axis,c=dk(o,a,r),f=t.length;let d;for(let h=0;h<f;++h){const g=t[h],{[l]:m,[u]:y}=g,p=g._stacks||(g._stacks={});d=p[u]=pk(i,c,m),d[s]=y,d._top=Pg(d,a,!0,r.type),d._bottom=Pg(d,a,!1,r.type);const v=d._visualValues||(d._visualValues={});v[s]=y}}function Tu(e,t){const n=e.scales;return Object.keys(n).filter(r=>n[r].axis===t).shift()}function gk(e,t){return Zn(e,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function vk(e,t,n){return Zn(e,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:n,index:t,mode:"default",type:"data"})}function Gi(e,t){const n=e.controller.index,r=e.vScale&&e.vScale.axis;if(r){t=t||e._parsed;for(const i of t){const o=i._stacks;if(!o||o[r]===void 0||o[r][n]===void 0)return;delete o[r][n],o[r]._visualValues!==void 0&&o[r]._visualValues[n]!==void 0&&delete o[r]._visualValues[n]}}}const Cu=e=>e==="reset"||e==="none",Og=(e,t)=>t?e:Object.assign({},e),mk=(e,t,n)=>e&&!t.hidden&&t._stacked&&{keys:db(n,!0),values:null};class To{constructor(t,n){this.chart=t,this._ctx=t.ctx,this.index=n,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=Cg(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&Gi(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,n=this._cachedMeta,r=this.getDataset(),i=(f,d,h,g)=>f==="x"?d:f==="r"?g:h,o=n.xAxisID=X(r.xAxisID,Tu(t,"x")),a=n.yAxisID=X(r.yAxisID,Tu(t,"y")),s=n.rAxisID=X(r.rAxisID,Tu(t,"r")),l=n.indexAxis,u=n.iAxisID=i(l,o,a,s),c=n.vAxisID=i(l,a,o,s);n.xScale=this.getScaleForId(o),n.yScale=this.getScaleForId(a),n.rScale=this.getScaleForId(s),n.iScale=this.getScaleForId(u),n.vScale=this.getScaleForId(c)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const n=this._cachedMeta;return t===n.iScale?n.vScale:n.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&hg(this._data,this),t._stacked&&Gi(t)}_dataCheck(){const t=this.getDataset(),n=t.data||(t.data=[]),r=this._data;if(q(n))this._data=fk(n);else if(r!==n){if(r){hg(r,this);const i=this._cachedMeta;Gi(i),i._parsed=[]}n&&Object.isExtensible(n)&&Q2(n,this),this._syncList=[],this._data=n}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const n=this._cachedMeta,r=this.getDataset();let i=!1;this._dataCheck();const o=n._stacked;n._stacked=Cg(n.vScale,n),n.stack!==r.stack&&(i=!0,Gi(n),n.stack=r.stack),this._resyncElements(t),(i||o!==n._stacked)&&Mg(this,n._parsed)}configure(){const t=this.chart.config,n=t.datasetScopeKeys(this._type),r=t.getOptionScopes(this.getDataset(),n,!0);this.options=t.createResolver(r,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,n){const{_cachedMeta:r,_data:i}=this,{iScale:o,_stacked:a}=r,s=o.axis;let l=t===0&&n===i.length?!0:r._sorted,u=t>0&&r._parsed[t-1],c,f,d;if(this._parsing===!1)r._parsed=i,r._sorted=!0,d=i;else{ge(i[t])?d=this.parseArrayData(r,i,t,n):q(i[t])?d=this.parseObjectData(r,i,t,n):d=this.parsePrimitiveData(r,i,t,n);const h=()=>f[s]===null||u&&f[s]<u[s];for(c=0;c<n;++c)r._parsed[c+t]=f=d[c],l&&(h()&&(l=!1),u=f);r._sorted=l}a&&Mg(this,d)}parsePrimitiveData(t,n,r,i){const{iScale:o,vScale:a}=t,s=o.axis,l=a.axis,u=o.getLabels(),c=o===a,f=new Array(i);let d,h,g;for(d=0,h=i;d<h;++d)g=d+r,f[d]={[s]:c||o.parse(u[g],g),[l]:a.parse(n[g],g)};return f}parseArrayData(t,n,r,i){const{xScale:o,yScale:a}=t,s=new Array(i);let l,u,c,f;for(l=0,u=i;l<u;++l)c=l+r,f=n[c],s[l]={x:o.parse(f[0],c),y:a.parse(f[1],c)};return s}parseObjectData(t,n,r,i){const{xScale:o,yScale:a}=t,{xAxisKey:s="x",yAxisKey:l="y"}=this._parsing,u=new Array(i);let c,f,d,h;for(c=0,f=i;c<f;++c)d=c+r,h=n[d],u[c]={x:o.parse(Ks(h,s),d),y:a.parse(Ks(h,l),d)};return u}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,n,r){const i=this.chart,o=this._cachedMeta,a=n[t.axis],s={keys:db(i,!0),values:n._stacks[t.axis]._visualValues};return Tg(s,a,o.index,{mode:r})}updateRangeFromParsed(t,n,r,i){const o=r[n.axis];let a=o===null?NaN:o;const s=i&&r._stacks[n.axis];i&&s&&(i.values=s,a=Tg(i,o,this._cachedMeta.index)),t.min=Math.min(t.min,a),t.max=Math.max(t.max,a)}getMinMax(t,n){const r=this._cachedMeta,i=r._parsed,o=r._sorted&&t===r.iScale,a=i.length,s=this._getOtherScale(t),l=mk(n,r,this.chart),u={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:c,max:f}=hk(s);let d,h;function g(){h=i[d];const m=h[s.axis];return!Oe(h[t.axis])||c>m||f<m}for(d=0;d<a&&!(!g()&&(this.updateRangeFromParsed(u,t,h,l),o));++d);if(o){for(d=a-1;d>=0;--d)if(!g()){this.updateRangeFromParsed(u,t,h,l);break}}return u}getAllParsedValues(t){const n=this._cachedMeta._parsed,r=[];let i,o,a;for(i=0,o=n.length;i<o;++i)a=n[i][t.axis],Oe(a)&&r.push(a);return r}getMaxOverflow(){return!1}getLabelAndValue(t){const n=this._cachedMeta,r=n.iScale,i=n.vScale,o=this.getParsed(t);return{label:r?""+r.getLabelForValue(o[r.axis]):"",value:i?""+i.getLabelForValue(o[i.axis]):""}}_update(t){const n=this._cachedMeta;this.update(t||"default"),n._clip=ck(X(this.options.clip,uk(n.xScale,n.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,n=this.chart,r=this._cachedMeta,i=r.data||[],o=n.chartArea,a=[],s=this._drawStart||0,l=this._drawCount||i.length-s,u=this.options.drawActiveElementsOnTop;let c;for(r.dataset&&r.dataset.draw(t,o,s,l),c=s;c<s+l;++c){const f=i[c];f.hidden||(f.active&&u?a.push(f):f.draw(t,o))}for(c=0;c<a.length;++c)a[c].draw(t,o)}getStyle(t,n){const r=n?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(r):this.resolveDataElementOptions(t||0,r)}getContext(t,n,r){const i=this.getDataset();let o;if(t>=0&&t<this._cachedMeta.data.length){const a=this._cachedMeta.data[t];o=a.$context||(a.$context=vk(this.getContext(),t,a)),o.parsed=this.getParsed(t),o.raw=i.data[t],o.index=o.dataIndex=t}else o=this.$context||(this.$context=gk(this.chart.getContext(),this.index)),o.dataset=i,o.index=o.datasetIndex=this.index;return o.active=!!n,o.mode=r,o}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,n){return this._resolveElementOptions(this.dataElementType.id,n,t)}_resolveElementOptions(t,n="default",r){const i=n==="active",o=this._cachedDataOpts,a=t+"-"+n,s=o[a],l=this.enableOptionSharing&&Qs(r);if(s)return Og(s,l);const u=this.chart.config,c=u.datasetElementScopeKeys(this._type,t),f=i?[`${t}Hover`,"hover",t,""]:[t,""],d=u.getOptionScopes(this.getDataset(),c),h=Object.keys(_e.elements[t]),g=()=>this.getContext(r,i,n),m=u.resolveNamedOptions(d,h,g,f);return m.$shared&&(m.$shared=l,o[a]=Object.freeze(Og(m,l))),m}_resolveAnimations(t,n,r){const i=this.chart,o=this._cachedDataOpts,a=`animation-${n}`,s=o[a];if(s)return s;let l;if(i.options.animation!==!1){const c=this.chart.config,f=c.datasetAnimationScopeKeys(this._type,n),d=c.getOptionScopes(this.getDataset(),f);l=c.createResolver(d,this.getContext(t,r,n))}const u=new fb(i,l&&l.animations);return l&&l._cacheable&&(o[a]=Object.freeze(u)),u}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,n){return!n||Cu(t)||this.chart._animationsDisabled}_getSharedOptions(t,n){const r=this.resolveDataElementOptions(t,n),i=this._sharedOptions,o=this.getSharedOptions(r),a=this.includeOptions(n,o)||o!==i;return this.updateSharedOptions(o,n,r),{sharedOptions:o,includeOptions:a}}updateElement(t,n,r,i){Cu(i)?Object.assign(t,r):this._resolveAnimations(n,i).update(t,r)}updateSharedOptions(t,n,r){t&&!Cu(n)&&this._resolveAnimations(void 0,n).update(t,r)}_setStyle(t,n,r,i){t.active=i;const o=this.getStyle(n,i);this._resolveAnimations(n,r,i).update(t,{options:!i&&this.getSharedOptions(o)||o})}removeHoverStyle(t,n,r){this._setStyle(t,r,"active",!1)}setHoverStyle(t,n,r){this._setStyle(t,r,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const n=this._data,r=this._cachedMeta.data;for(const[s,l,u]of this._syncList)this[s](l,u);this._syncList=[];const i=r.length,o=n.length,a=Math.min(o,i);a&&this.parse(0,a),o>i?this._insertElements(i,o-i,t):o<i&&this._removeElements(o,i-o)}_insertElements(t,n,r=!0){const i=this._cachedMeta,o=i.data,a=t+n;let s;const l=u=>{for(u.length+=n,s=u.length-1;s>=a;s--)u[s]=u[s-n]};for(l(o),s=t;s<a;++s)o[s]=new this.dataElementType;this._parsing&&l(i._parsed),this.parse(t,n),r&&this.updateElements(o,t,n,"reset")}updateElements(t,n,r,i){}_removeElements(t,n){const r=this._cachedMeta;if(this._parsing){const i=r._parsed.splice(t,n);r._stacked&&Gi(r,i)}r.data.splice(t,n)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[n,r,i]=t;this[n](r,i)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,n){n&&this._sync(["_removeElements",t,n]);const r=arguments.length-2;r&&this._sync(["_insertElements",t,r])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}U(To,"defaults",{}),U(To,"datasetElementType",null),U(To,"dataElementType",null);class ms extends To{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const n=this._cachedMeta,{dataset:r,data:i=[],_dataset:o}=n,a=this.chart._animationsDisabled;let{start:s,count:l}=eS(n,i,a);this._drawStart=s,this._drawCount=l,tS(n)&&(s=0,l=i.length),r._chart=this.chart,r._datasetIndex=this.index,r._decimated=!!o._decimated,r.points=i;const u=this.resolveDatasetElementOptions(t);this.options.showLine||(u.borderWidth=0),u.segment=this.options.segment,this.updateElement(r,void 0,{animated:!a,options:u},t),this.updateElements(i,s,l,t)}updateElements(t,n,r,i){const o=i==="reset",{iScale:a,vScale:s,_stacked:l,_dataset:u}=this._cachedMeta,{sharedOptions:c,includeOptions:f}=this._getSharedOptions(n,i),d=a.axis,h=s.axis,{spanGaps:g,segment:m}=this.options,y=Zo(g)?g:Number.POSITIVE_INFINITY,p=this.chart._animationsDisabled||o||i==="none",v=n+r,b=t.length;let $=n>0&&this.getParsed(n-1);for(let _=0;_<b;++_){const S=t[_],x=p?S:{};if(_<n||_>=v){x.skip=!0;continue}const E=this.getParsed(_),O=se(E[h]),C=x[d]=a.getPixelForValue(E[d],_),w=x[h]=o||O?s.getBasePixel():s.getPixelForValue(l?this.applyStack(s,E,l):E[h],_);x.skip=isNaN(C)||isNaN(w)||O,x.stop=_>0&&Math.abs(E[d]-$[d])>y,m&&(x.parsed=E,x.raw=u.data[_]),f&&(x.options=c||this.resolveDataElementOptions(_,S.active?"active":i)),p||this.updateElement(S,_,x,i),$=E}}getMaxOverflow(){const t=this._cachedMeta,n=t.dataset,r=n.options&&n.options.borderWidth||0,i=t.data||[];if(!i.length)return r;const o=i[0].size(this.resolveDataElementOptions(0)),a=i[i.length-1].size(this.resolveDataElementOptions(i.length-1));return Math.max(r,o,a)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}U(ms,"id","line"),U(ms,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),U(ms,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});function tr(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class uh{constructor(t){U(this,"options");this.options=t||{}}static override(t){Object.assign(uh.prototype,t)}init(){}formats(){return tr()}parse(){return tr()}format(){return tr()}add(){return tr()}diff(){return tr()}startOf(){return tr()}endOf(){return tr()}}var yk={_date:uh};function bk(e,t,n,r){const{controller:i,data:o,_sorted:a}=e,s=i._cachedMeta.iScale;if(s&&t===s.axis&&t!=="r"&&a&&o.length){const l=s._reversePixels?X2:fr;if(r){if(i._sharedOptions){const u=o[0],c=typeof u.getRange=="function"&&u.getRange(t);if(c){const f=l(o,t,n-c),d=l(o,t,n+c);return{lo:f.lo,hi:d.hi}}}}else return l(o,t,n)}return{lo:0,hi:o.length-1}}function aa(e,t,n,r,i){const o=e.getSortedVisibleDatasetMetas(),a=n[t];for(let s=0,l=o.length;s<l;++s){const{index:u,data:c}=o[s],{lo:f,hi:d}=bk(o[s],t,a,i);for(let h=f;h<=d;++h){const g=c[h];g.skip||r(g,u,h)}}}function $k(e){const t=e.indexOf("x")!==-1,n=e.indexOf("y")!==-1;return function(r,i){const o=t?Math.abs(r.x-i.x):0,a=n?Math.abs(r.y-i.y):0;return Math.sqrt(Math.pow(o,2)+Math.pow(a,2))}}function Pu(e,t,n,r,i){const o=[];return!i&&!e.isPointInArea(t)||aa(e,n,t,function(s,l,u){!i&&!fn(s,e.chartArea,0)||s.inRange(t.x,t.y,r)&&o.push({element:s,datasetIndex:l,index:u})},!0),o}function _k(e,t,n,r){let i=[];function o(a,s,l){const{startAngle:u,endAngle:c}=a.getProps(["startAngle","endAngle"],r),{angle:f}=H2(a,{x:t.x,y:t.y});K1(f,u,c)&&i.push({element:a,datasetIndex:s,index:l})}return aa(e,n,t,o),i}function wk(e,t,n,r,i,o){let a=[];const s=$k(n);let l=Number.POSITIVE_INFINITY;function u(c,f,d){const h=c.inRange(t.x,t.y,i);if(r&&!h)return;const g=c.getCenterPoint(i);if(!(!!o||e.isPointInArea(g))&&!h)return;const y=s(t,g);y<l?(a=[{element:c,datasetIndex:f,index:d}],l=y):y===l&&a.push({element:c,datasetIndex:f,index:d})}return aa(e,n,t,u),a}function Mu(e,t,n,r,i,o){return!o&&!e.isPointInArea(t)?[]:n==="r"&&!r?_k(e,t,n,i):wk(e,t,n,r,i,o)}function Ig(e,t,n,r,i){const o=[],a=n==="x"?"inXRange":"inYRange";let s=!1;return aa(e,n,t,(l,u,c)=>{l[a](t[n],i)&&(o.push({element:l,datasetIndex:u,index:c}),s=s||l.inRange(t.x,t.y,i))}),r&&!s?[]:o}var xk={evaluateInteractionItems:aa,modes:{index(e,t,n,r){const i=ar(t,e),o=n.axis||"x",a=n.includeInvisible||!1,s=n.intersect?Pu(e,i,o,r,a):Mu(e,i,o,!1,r,a),l=[];return s.length?(e.getSortedVisibleDatasetMetas().forEach(u=>{const c=s[0].index,f=u.data[c];f&&!f.skip&&l.push({element:f,datasetIndex:u.index,index:c})}),l):[]},dataset(e,t,n,r){const i=ar(t,e),o=n.axis||"xy",a=n.includeInvisible||!1;let s=n.intersect?Pu(e,i,o,r,a):Mu(e,i,o,!1,r,a);if(s.length>0){const l=s[0].datasetIndex,u=e.getDatasetMeta(l).data;s=[];for(let c=0;c<u.length;++c)s.push({element:u[c],datasetIndex:l,index:c})}return s},point(e,t,n,r){const i=ar(t,e),o=n.axis||"xy",a=n.includeInvisible||!1;return Pu(e,i,o,r,a)},nearest(e,t,n,r){const i=ar(t,e),o=n.axis||"xy",a=n.includeInvisible||!1;return Mu(e,i,o,n.intersect,r,a)},x(e,t,n,r){const i=ar(t,e);return Ig(e,i,"x",n.intersect,r)},y(e,t,n,r){const i=ar(t,e);return Ig(e,i,"y",n.intersect,r)}}};const hb=["left","top","right","bottom"];function Yi(e,t){return e.filter(n=>n.pos===t)}function Lg(e,t){return e.filter(n=>hb.indexOf(n.pos)===-1&&n.box.axis===t)}function Xi(e,t){return e.sort((n,r)=>{const i=t?r:n,o=t?n:r;return i.weight===o.weight?i.index-o.index:i.weight-o.weight})}function Sk(e){const t=[];let n,r,i,o,a,s;for(n=0,r=(e||[]).length;n<r;++n)i=e[n],{position:o,options:{stack:a,stackWeight:s=1}}=i,t.push({index:n,box:i,pos:o,horizontal:i.isHorizontal(),weight:i.weight,stack:a&&o+a,stackWeight:s});return t}function kk(e){const t={};for(const n of e){const{stack:r,pos:i,stackWeight:o}=n;if(!r||!hb.includes(i))continue;const a=t[r]||(t[r]={count:0,placed:0,weight:0,size:0});a.count++,a.weight+=o}return t}function Ek(e,t){const n=kk(e),{vBoxMaxWidth:r,hBoxMaxHeight:i}=t;let o,a,s;for(o=0,a=e.length;o<a;++o){s=e[o];const{fullSize:l}=s.box,u=n[s.stack],c=u&&s.stackWeight/u.weight;s.horizontal?(s.width=c?c*r:l&&t.availableWidth,s.height=i):(s.width=r,s.height=c?c*i:l&&t.availableHeight)}return n}function Ak(e){const t=Sk(e),n=Xi(t.filter(u=>u.box.fullSize),!0),r=Xi(Yi(t,"left"),!0),i=Xi(Yi(t,"right")),o=Xi(Yi(t,"top"),!0),a=Xi(Yi(t,"bottom")),s=Lg(t,"x"),l=Lg(t,"y");return{fullSize:n,leftAndTop:r.concat(o),rightAndBottom:i.concat(l).concat(a).concat(s),chartArea:Yi(t,"chartArea"),vertical:r.concat(i).concat(l),horizontal:o.concat(a).concat(s)}}function Ng(e,t,n,r){return Math.max(e[n],t[n])+Math.max(e[r],t[r])}function pb(e,t){e.top=Math.max(e.top,t.top),e.left=Math.max(e.left,t.left),e.bottom=Math.max(e.bottom,t.bottom),e.right=Math.max(e.right,t.right)}function Tk(e,t,n,r){const{pos:i,box:o}=n,a=e.maxPadding;if(!q(i)){n.size&&(e[i]-=n.size);const f=r[n.stack]||{size:0,count:1};f.size=Math.max(f.size,n.horizontal?o.height:o.width),n.size=f.size/f.count,e[i]+=n.size}o.getPadding&&pb(a,o.getPadding());const s=Math.max(0,t.outerWidth-Ng(a,e,"left","right")),l=Math.max(0,t.outerHeight-Ng(a,e,"top","bottom")),u=s!==e.w,c=l!==e.h;return e.w=s,e.h=l,n.horizontal?{same:u,other:c}:{same:c,other:u}}function Ck(e){const t=e.maxPadding;function n(r){const i=Math.max(t[r]-e[r],0);return e[r]+=i,i}e.y+=n("top"),e.x+=n("left"),n("right"),n("bottom")}function Pk(e,t){const n=t.maxPadding;function r(i){const o={left:0,top:0,right:0,bottom:0};return i.forEach(a=>{o[a]=Math.max(t[a],n[a])}),o}return r(e?["left","right"]:["top","bottom"])}function fo(e,t,n,r){const i=[];let o,a,s,l,u,c;for(o=0,a=e.length,u=0;o<a;++o){s=e[o],l=s.box,l.update(s.width||t.w,s.height||t.h,Pk(s.horizontal,t));const{same:f,other:d}=Tk(t,n,s,r);u|=f&&i.length,c=c||d,l.fullSize||i.push(s)}return u&&fo(i,t,n,r)||c}function Ba(e,t,n,r,i){e.top=n,e.left=t,e.right=t+r,e.bottom=n+i,e.width=r,e.height=i}function Rg(e,t,n,r){const i=n.padding;let{x:o,y:a}=t;for(const s of e){const l=s.box,u=r[s.stack]||{count:1,placed:0,weight:1},c=s.stackWeight/u.weight||1;if(s.horizontal){const f=t.w*c,d=u.size||l.height;Qs(u.start)&&(a=u.start),l.fullSize?Ba(l,i.left,a,n.outerWidth-i.right-i.left,d):Ba(l,t.left+u.placed,a,f,d),u.start=a,u.placed+=f,a=l.bottom}else{const f=t.h*c,d=u.size||l.width;Qs(u.start)&&(o=u.start),l.fullSize?Ba(l,o,i.top,d,n.outerHeight-i.bottom-i.top):Ba(l,o,t.top+u.placed,d,f),u.start=o,u.placed+=f,o=l.right}}t.x=o,t.y=a}var Et={addBox(e,t){e.boxes||(e.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(n){t.draw(n)}}]},e.boxes.push(t)},removeBox(e,t){const n=e.boxes?e.boxes.indexOf(t):-1;n!==-1&&e.boxes.splice(n,1)},configure(e,t,n){t.fullSize=n.fullSize,t.position=n.position,t.weight=n.weight},update(e,t,n,r){if(!e)return;const i=Ve(e.options.layout.padding),o=Math.max(t-i.width,0),a=Math.max(n-i.height,0),s=Ak(e.boxes),l=s.vertical,u=s.horizontal;ee(e.boxes,m=>{typeof m.beforeLayout=="function"&&m.beforeLayout()});const c=l.reduce((m,y)=>y.box.options&&y.box.options.display===!1?m:m+1,0)||1,f=Object.freeze({outerWidth:t,outerHeight:n,padding:i,availableWidth:o,availableHeight:a,vBoxMaxWidth:o/2/c,hBoxMaxHeight:a/2}),d=Object.assign({},i);pb(d,Ve(r));const h=Object.assign({maxPadding:d,w:o,h:a,x:i.left,y:i.top},i),g=Ek(l.concat(u),f);fo(s.fullSize,h,f,g),fo(l,h,f,g),fo(u,h,f,g)&&fo(l,h,f,g),Ck(h),Rg(s.leftAndTop,h,f,g),h.x+=h.w,h.y+=h.h,Rg(s.rightAndBottom,h,f,g),e.chartArea={left:h.left,top:h.top,right:h.left+h.w,bottom:h.top+h.h,height:h.h,width:h.w},ee(s.chartArea,m=>{const y=m.box;Object.assign(y,e.chartArea),y.update(h.w,h.h,{left:0,top:0,right:0,bottom:0})})}};class gb{acquireContext(t,n){}releaseContext(t){return!1}addEventListener(t,n,r){}removeEventListener(t,n,r){}getDevicePixelRatio(){return 1}getMaximumSize(t,n,r,i){return n=Math.max(0,n||t.width),r=r||t.height,{width:n,height:Math.max(0,i?Math.floor(n/i):r)}}isAttached(t){return!0}updateConfig(t){}}class Mk extends gb{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const ys="$chartjs",Ok={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},Fg=e=>e===null||e==="";function Ik(e,t){const n=e.style,r=e.getAttribute("height"),i=e.getAttribute("width");if(e[ys]={initial:{height:r,width:i,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",n.boxSizing=n.boxSizing||"border-box",Fg(i)){const o=wg(e,"width");o!==void 0&&(e.width=o)}if(Fg(r))if(e.style.height==="")e.height=e.width/(t||2);else{const o=wg(e,"height");o!==void 0&&(e.height=o)}return e}const vb=HS?{passive:!0}:!1;function Lk(e,t,n){e.addEventListener(t,n,vb)}function Nk(e,t,n){e.canvas.removeEventListener(t,n,vb)}function Rk(e,t){const n=Ok[e.type]||e.type,{x:r,y:i}=ar(e,t);return{type:n,chart:t,native:e,x:r!==void 0?r:null,y:i!==void 0?i:null}}function tl(e,t){for(const n of e)if(n===t||n.contains(t))return!0}function Fk(e,t,n){const r=e.canvas,i=new MutationObserver(o=>{let a=!1;for(const s of o)a=a||tl(s.addedNodes,r),a=a&&!tl(s.removedNodes,r);a&&n()});return i.observe(document,{childList:!0,subtree:!0}),i}function Dk(e,t,n){const r=e.canvas,i=new MutationObserver(o=>{let a=!1;for(const s of o)a=a||tl(s.removedNodes,r),a=a&&!tl(s.addedNodes,r);a&&n()});return i.observe(document,{childList:!0,subtree:!0}),i}const qo=new Map;let Dg=0;function mb(){const e=window.devicePixelRatio;e!==Dg&&(Dg=e,qo.forEach((t,n)=>{n.currentDevicePixelRatio!==e&&t()}))}function jk(e,t){qo.size||window.addEventListener("resize",mb),qo.set(e,t)}function zk(e){qo.delete(e),qo.size||window.removeEventListener("resize",mb)}function Bk(e,t,n){const r=e.canvas,i=r&&lh(r);if(!i)return;const o=q1((s,l)=>{const u=i.clientWidth;n(s,l),u<i.clientWidth&&n()},window),a=new ResizeObserver(s=>{const l=s[0],u=l.contentRect.width,c=l.contentRect.height;u===0&&c===0||o(u,c)});return a.observe(i),jk(e,o),a}function Ou(e,t,n){n&&n.disconnect(),t==="resize"&&zk(e)}function Uk(e,t,n){const r=e.canvas,i=q1(o=>{e.ctx!==null&&n(Rk(o,e))},e);return Lk(r,t,i),i}class Vk extends gb{acquireContext(t,n){const r=t&&t.getContext&&t.getContext("2d");return r&&r.canvas===t?(Ik(t,n),r):null}releaseContext(t){const n=t.canvas;if(!n[ys])return!1;const r=n[ys].initial;["height","width"].forEach(o=>{const a=r[o];se(a)?n.removeAttribute(o):n.setAttribute(o,a)});const i=r.style||{};return Object.keys(i).forEach(o=>{n.style[o]=i[o]}),n.width=n.width,delete n[ys],!0}addEventListener(t,n,r){this.removeEventListener(t,n);const i=t.$proxies||(t.$proxies={}),a={attach:Fk,detach:Dk,resize:Bk}[n]||Uk;i[n]=a(t,n,r)}removeEventListener(t,n){const r=t.$proxies||(t.$proxies={}),i=r[n];if(!i)return;({attach:Ou,detach:Ou,resize:Ou}[n]||Nk)(t,n,i),r[n]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,n,r,i){return WS(t,n,r,i)}isAttached(t){const n=lh(t);return!!(n&&n.isConnected)}}function Wk(e){return!sb()||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas?Mk:Vk}class mn{constructor(){U(this,"x");U(this,"y");U(this,"active",!1);U(this,"options");U(this,"$animations")}tooltipPosition(t){const{x:n,y:r}=this.getProps(["x","y"],t);return{x:n,y:r}}hasValue(){return Zo(this.x)&&Zo(this.y)}getProps(t,n){const r=this.$animations;if(!n||!r)return this;const i={};return t.forEach(o=>{i[o]=r[o]&&r[o].active()?r[o]._to:this[o]}),i}}U(mn,"defaults",{}),U(mn,"defaultRoutes");function Hk(e,t){const n=e.options.ticks,r=Gk(e),i=Math.min(n.maxTicksLimit||r,r),o=n.major.enabled?Xk(t):[],a=o.length,s=o[0],l=o[a-1],u=[];if(a>i)return Kk(t,u,o,a/i),u;const c=Yk(o,t,i);if(a>0){let f,d;const h=a>1?Math.round((l-s)/(a-1)):null;for(Ua(t,u,c,se(h)?0:s-h,s),f=0,d=a-1;f<d;f++)Ua(t,u,c,o[f],o[f+1]);return Ua(t,u,c,l,se(h)?t.length:l+h),u}return Ua(t,u,c),u}function Gk(e){const t=e.options.offset,n=e._tickSize(),r=e._length/n+(t?0:1),i=e._maxLength/n;return Math.floor(Math.min(r,i))}function Yk(e,t,n){const r=Qk(e),i=t.length/n;if(!r)return Math.max(i,1);const o=V2(r);for(let a=0,s=o.length-1;a<s;a++){const l=o[a];if(l>i)return l}return Math.max(i,1)}function Xk(e){const t=[];let n,r;for(n=0,r=e.length;n<r;n++)e[n].major&&t.push(n);return t}function Kk(e,t,n,r){let i=0,o=n[0],a;for(r=Math.ceil(r),a=0;a<e.length;a++)a===o&&(t.push(e[a]),i++,o=n[i*r])}function Ua(e,t,n,r,i){const o=X(r,0),a=Math.min(X(i,e.length),e.length);let s=0,l,u,c;for(n=Math.ceil(n),i&&(l=i-r,n=l/Math.floor(l/n)),c=o;c<0;)s++,c=Math.round(o+s*n);for(u=Math.max(o,0);u<a;u++)u===c&&(t.push(e[u]),s++,c=Math.round(o+s*n))}function Qk(e){const t=e.length;let n,r;if(t<2)return!1;for(r=e[0],n=1;n<t;++n)if(e[n]-e[n-1]!==r)return!1;return r}const Zk=e=>e==="left"?"right":e==="right"?"left":e,jg=(e,t,n)=>t==="top"||t==="left"?e[t]+n:e[t]-n,zg=(e,t)=>Math.min(t||e,e);function Bg(e,t){const n=[],r=e.length/t,i=e.length;let o=0;for(;o<i;o+=r)n.push(e[Math.floor(o)]);return n}function qk(e,t,n){const r=e.ticks.length,i=Math.min(t,r-1),o=e._startPixel,a=e._endPixel,s=1e-6;let l=e.getPixelForTick(i),u;if(!(n&&(r===1?u=Math.max(l-o,a-l):t===0?u=(e.getPixelForTick(1)-l)/2:u=(l-e.getPixelForTick(i-1))/2,l+=i<t?u:-u,l<o-s||l>a+s)))return l}function Jk(e,t){ee(e,n=>{const r=n.gc,i=r.length/2;let o;if(i>t){for(o=0;o<i;++o)delete n.data[r[o]];r.splice(0,i)}})}function Ki(e){return e.drawTicks?e.tickLength:0}function Ug(e,t){if(!e.display)return 0;const n=Pe(e.font,t),r=Ve(e.padding);return(ge(e.text)?e.text.length:1)*n.lineHeight+r.height}function eE(e,t){return Zn(e,{scale:t,type:"scale"})}function tE(e,t,n){return Zn(e,{tick:n,index:t,type:"tick"})}function nE(e,t,n){let r=eh(e);return(n&&t!=="right"||!n&&t==="right")&&(r=Zk(r)),r}function rE(e,t,n,r){const{top:i,left:o,bottom:a,right:s,chart:l}=e,{chartArea:u,scales:c}=l;let f=0,d,h,g;const m=a-i,y=s-o;if(e.isHorizontal()){if(h=ze(r,o,s),q(n)){const p=Object.keys(n)[0],v=n[p];g=c[p].getPixelForValue(v)+m-t}else n==="center"?g=(u.bottom+u.top)/2+m-t:g=jg(e,n,t);d=s-o}else{if(q(n)){const p=Object.keys(n)[0],v=n[p];h=c[p].getPixelForValue(v)-y+t}else n==="center"?h=(u.left+u.right)/2-y+t:h=jg(e,n,t);g=ze(r,a,i),f=n==="left"?-pt:pt}return{titleX:h,titleY:g,maxWidth:d,rotation:f}}class Ar extends mn{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,n){return t}getUserBounds(){let{_userMin:t,_userMax:n,_suggestedMin:r,_suggestedMax:i}=this;return t=ut(t,Number.POSITIVE_INFINITY),n=ut(n,Number.NEGATIVE_INFINITY),r=ut(r,Number.POSITIVE_INFINITY),i=ut(i,Number.NEGATIVE_INFINITY),{min:ut(t,r),max:ut(n,i),minDefined:Oe(t),maxDefined:Oe(n)}}getMinMax(t){let{min:n,max:r,minDefined:i,maxDefined:o}=this.getUserBounds(),a;if(i&&o)return{min:n,max:r};const s=this.getMatchingVisibleMetas();for(let l=0,u=s.length;l<u;++l)a=s[l].controller.getMinMax(this,t),i||(n=Math.min(n,a.min)),o||(r=Math.max(r,a.max));return n=o&&n>r?r:n,r=i&&n>r?n:r,{min:ut(n,ut(r,n)),max:ut(r,ut(n,r))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){ne(this.options.beforeUpdate,[this])}update(t,n,r){const{beginAtZero:i,grace:o,ticks:a}=this.options,s=a.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=n,this._margins=r=Object.assign({left:0,right:0,top:0,bottom:0},r),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+r.left+r.right:this.height+r.top+r.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=wS(this,o,i),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=s<this.ticks.length;this._convertTicksToLabels(l?Bg(this.ticks,s):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),a.display&&(a.autoSkip||a.source==="auto")&&(this.ticks=Hk(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,n,r;this.isHorizontal()?(n=this.left,r=this.right):(n=this.top,r=this.bottom,t=!t),this._startPixel=n,this._endPixel=r,this._reversePixels=t,this._length=r-n,this._alignToPixels=this.options.alignToPixels}afterUpdate(){ne(this.options.afterUpdate,[this])}beforeSetDimensions(){ne(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){ne(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),ne(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){ne(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const n=this.options.ticks;let r,i,o;for(r=0,i=t.length;r<i;r++)o=t[r],o.label=ne(n.callback,[o.value,r,t],this)}afterTickToLabelConversion(){ne(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){ne(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,n=t.ticks,r=zg(this.ticks.length,t.ticks.maxTicksLimit),i=n.minRotation||0,o=n.maxRotation;let a=i,s,l,u;if(!this._isVisible()||!n.display||i>=o||r<=1||!this.isHorizontal()){this.labelRotation=i;return}const c=this._getLabelSizes(),f=c.widest.width,d=c.highest.height,h=kt(this.chart.width-f,0,this.maxWidth);s=t.offset?this.maxWidth/r:h/(r-1),f+6>s&&(s=h/(r-(t.offset?.5:1)),l=this.maxHeight-Ki(t.grid)-n.padding-Ug(t.title,this.chart.options.font),u=Math.sqrt(f*f+d*d),a=qd(Math.min(Math.asin(kt((c.highest.height+6)/s,-1,1)),Math.asin(kt(l/u,-1,1))-Math.asin(kt(d/u,-1,1)))),a=Math.max(i,Math.min(o,a))),this.labelRotation=a}afterCalculateLabelRotation(){ne(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){ne(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:n,options:{ticks:r,title:i,grid:o}}=this,a=this._isVisible(),s=this.isHorizontal();if(a){const l=Ug(i,n.options.font);if(s?(t.width=this.maxWidth,t.height=Ki(o)+l):(t.height=this.maxHeight,t.width=Ki(o)+l),r.display&&this.ticks.length){const{first:u,last:c,widest:f,highest:d}=this._getLabelSizes(),h=r.padding*2,g=Nn(this.labelRotation),m=Math.cos(g),y=Math.sin(g);if(s){const p=r.mirror?0:y*f.width+m*d.height;t.height=Math.min(this.maxHeight,t.height+p+h)}else{const p=r.mirror?0:m*f.width+y*d.height;t.width=Math.min(this.maxWidth,t.width+p+h)}this._calculatePadding(u,c,y,m)}}this._handleMargins(),s?(this.width=this._length=n.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=n.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,n,r,i){const{ticks:{align:o,padding:a},position:s}=this.options,l=this.labelRotation!==0,u=s!=="top"&&this.axis==="x";if(this.isHorizontal()){const c=this.getPixelForTick(0)-this.left,f=this.right-this.getPixelForTick(this.ticks.length-1);let d=0,h=0;l?u?(d=i*t.width,h=r*n.height):(d=r*t.height,h=i*n.width):o==="start"?h=n.width:o==="end"?d=t.width:o!=="inner"&&(d=t.width/2,h=n.width/2),this.paddingLeft=Math.max((d-c+a)*this.width/(this.width-c),0),this.paddingRight=Math.max((h-f+a)*this.width/(this.width-f),0)}else{let c=n.height/2,f=t.height/2;o==="start"?(c=0,f=t.height):o==="end"&&(c=n.height,f=0),this.paddingTop=c+a,this.paddingBottom=f+a}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){ne(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:n}=this.options;return n==="top"||n==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let n,r;for(n=0,r=t.length;n<r;n++)se(t[n].label)&&(t.splice(n,1),r--,n--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const n=this.options.ticks.sampleSize;let r=this.ticks;n<r.length&&(r=Bg(r,n)),this._labelSizes=t=this._computeLabelSizes(r,r.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,n,r){const{ctx:i,_longestTextCache:o}=this,a=[],s=[],l=Math.floor(n/zg(n,r));let u=0,c=0,f,d,h,g,m,y,p,v,b,$,_;for(f=0;f<n;f+=l){if(g=t[f].label,m=this._resolveTickFontOptions(f),i.font=y=m.string,p=o[y]=o[y]||{data:{},gc:[]},v=m.lineHeight,b=$=0,!se(g)&&!ge(g))b=qs(i,p.data,p.gc,b,g),$=v;else if(ge(g))for(d=0,h=g.length;d<h;++d)_=g[d],!se(_)&&!ge(_)&&(b=qs(i,p.data,p.gc,b,_),$+=v);a.push(b),s.push($),u=Math.max(b,u),c=Math.max($,c)}Jk(o,n);const S=a.indexOf(u),x=s.indexOf(c),E=O=>({width:a[O]||0,height:s[O]||0});return{first:E(0),last:E(n-1),widest:E(S),highest:E(x),widths:a,heights:s}}getLabelForValue(t){return t}getPixelForValue(t,n){return NaN}getValueForPixel(t){}getPixelForTick(t){const n=this.ticks;return t<0||t>n.length-1?null:this.getPixelForValue(n[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const n=this._startPixel+t*this._length;return Y2(this._alignToPixels?er(this.chart,n,0):n)}getDecimalForPixel(t){const n=(t-this._startPixel)/this._length;return this._reversePixels?1-n:n}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:n}=this;return t<0&&n<0?n:t>0&&n>0?t:0}getContext(t){const n=this.ticks||[];if(t>=0&&t<n.length){const r=n[t];return r.$context||(r.$context=tE(this.getContext(),t,r))}return this.$context||(this.$context=eE(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,n=Nn(this.labelRotation),r=Math.abs(Math.cos(n)),i=Math.abs(Math.sin(n)),o=this._getLabelSizes(),a=t.autoSkipPadding||0,s=o?o.widest.width+a:0,l=o?o.highest.height+a:0;return this.isHorizontal()?l*r>s*i?s/r:l/i:l*i<s*r?l/r:s/i}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const n=this.axis,r=this.chart,i=this.options,{grid:o,position:a,border:s}=i,l=o.offset,u=this.isHorizontal(),f=this.ticks.length+(l?1:0),d=Ki(o),h=[],g=s.setContext(this.getContext()),m=g.display?g.width:0,y=m/2,p=function(N){return er(r,N,m)};let v,b,$,_,S,x,E,O,C,w,k,P;if(a==="top")v=p(this.bottom),x=this.bottom-d,O=v-y,w=p(t.top)+y,P=t.bottom;else if(a==="bottom")v=p(this.top),w=t.top,P=p(t.bottom)-y,x=v+y,O=this.top+d;else if(a==="left")v=p(this.right),S=this.right-d,E=v-y,C=p(t.left)+y,k=t.right;else if(a==="right")v=p(this.left),C=t.left,k=p(t.right)-y,S=v+y,E=this.left+d;else if(n==="x"){if(a==="center")v=p((t.top+t.bottom)/2+.5);else if(q(a)){const N=Object.keys(a)[0],j=a[N];v=p(this.chart.scales[N].getPixelForValue(j))}w=t.top,P=t.bottom,x=v+y,O=x+d}else if(n==="y"){if(a==="center")v=p((t.left+t.right)/2);else if(q(a)){const N=Object.keys(a)[0],j=a[N];v=p(this.chart.scales[N].getPixelForValue(j))}S=v-y,E=S-d,C=t.left,k=t.right}const D=X(i.ticks.maxTicksLimit,f),R=Math.max(1,Math.ceil(f/D));for(b=0;b<f;b+=R){const N=this.getContext(b),j=o.setContext(N),A=s.setContext(N),M=j.lineWidth,I=j.color,z=A.dash||[],B=A.dashOffset,W=j.tickWidth,K=j.tickColor,de=j.tickBorderDash||[],he=j.tickBorderDashOffset;$=qk(this,b,l),$!==void 0&&(_=er(r,$,M),u?S=E=C=k=_:x=O=w=P=_,h.push({tx1:S,ty1:x,tx2:E,ty2:O,x1:C,y1:w,x2:k,y2:P,width:M,color:I,borderDash:z,borderDashOffset:B,tickWidth:W,tickColor:K,tickBorderDash:de,tickBorderDashOffset:he}))}return this._ticksLength=f,this._borderValue=v,h}_computeLabelItems(t){const n=this.axis,r=this.options,{position:i,ticks:o}=r,a=this.isHorizontal(),s=this.ticks,{align:l,crossAlign:u,padding:c,mirror:f}=o,d=Ki(r.grid),h=d+c,g=f?-c:h,m=-Nn(this.labelRotation),y=[];let p,v,b,$,_,S,x,E,O,C,w,k,P="middle";if(i==="top")S=this.bottom-g,x=this._getXAxisLabelAlignment();else if(i==="bottom")S=this.top+g,x=this._getXAxisLabelAlignment();else if(i==="left"){const R=this._getYAxisLabelAlignment(d);x=R.textAlign,_=R.x}else if(i==="right"){const R=this._getYAxisLabelAlignment(d);x=R.textAlign,_=R.x}else if(n==="x"){if(i==="center")S=(t.top+t.bottom)/2+h;else if(q(i)){const R=Object.keys(i)[0],N=i[R];S=this.chart.scales[R].getPixelForValue(N)+h}x=this._getXAxisLabelAlignment()}else if(n==="y"){if(i==="center")_=(t.left+t.right)/2-h;else if(q(i)){const R=Object.keys(i)[0],N=i[R];_=this.chart.scales[R].getPixelForValue(N)}x=this._getYAxisLabelAlignment(d).textAlign}n==="y"&&(l==="start"?P="top":l==="end"&&(P="bottom"));const D=this._getLabelSizes();for(p=0,v=s.length;p<v;++p){b=s[p],$=b.label;const R=o.setContext(this.getContext(p));E=this.getPixelForTick(p)+o.labelOffset,O=this._resolveTickFontOptions(p),C=O.lineHeight,w=ge($)?$.length:1;const N=w/2,j=R.color,A=R.textStrokeColor,M=R.textStrokeWidth;let I=x;a?(_=E,x==="inner"&&(p===v-1?I=this.options.reverse?"left":"right":p===0?I=this.options.reverse?"right":"left":I="center"),i==="top"?u==="near"||m!==0?k=-w*C+C/2:u==="center"?k=-D.highest.height/2-N*C+C:k=-D.highest.height+C/2:u==="near"||m!==0?k=C/2:u==="center"?k=D.highest.height/2-N*C:k=D.highest.height-w*C,f&&(k*=-1),m!==0&&!R.showLabelBackdrop&&(_+=C/2*Math.sin(m))):(S=E,k=(1-w)*C/2);let z;if(R.showLabelBackdrop){const B=Ve(R.backdropPadding),W=D.heights[p],K=D.widths[p];let de=k-B.top,he=0-B.left;switch(P){case"middle":de-=W/2;break;case"bottom":de-=W;break}switch(x){case"center":he-=K/2;break;case"right":he-=K;break}z={left:he,top:de,width:K+B.width,height:W+B.height,color:R.backdropColor}}y.push({label:$,font:O,textOffset:k,options:{rotation:m,color:j,strokeColor:A,strokeWidth:M,textAlign:I,textBaseline:P,translation:[_,S],backdrop:z}})}return y}_getXAxisLabelAlignment(){const{position:t,ticks:n}=this.options;if(-Nn(this.labelRotation))return t==="top"?"left":"right";let i="center";return n.align==="start"?i="left":n.align==="end"?i="right":n.align==="inner"&&(i="inner"),i}_getYAxisLabelAlignment(t){const{position:n,ticks:{crossAlign:r,mirror:i,padding:o}}=this.options,a=this._getLabelSizes(),s=t+o,l=a.widest.width;let u,c;return n==="left"?i?(c=this.right+o,r==="near"?u="left":r==="center"?(u="center",c+=l/2):(u="right",c+=l)):(c=this.right-s,r==="near"?u="right":r==="center"?(u="center",c-=l/2):(u="left",c=this.left)):n==="right"?i?(c=this.left+o,r==="near"?u="right":r==="center"?(u="center",c-=l/2):(u="left",c-=l)):(c=this.left+s,r==="near"?u="left":r==="center"?(u="center",c+=l/2):(u="right",c=this.right)):u="right",{textAlign:u,x:c}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,n=this.options.position;if(n==="left"||n==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(n==="top"||n==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:n},left:r,top:i,width:o,height:a}=this;n&&(t.save(),t.fillStyle=n,t.fillRect(r,i,o,a),t.restore())}getLineWidthForValue(t){const n=this.options.grid;if(!this._isVisible()||!n.display)return 0;const i=this.ticks.findIndex(o=>o.value===t);return i>=0?n.setContext(this.getContext(i)).lineWidth:0}drawGrid(t){const n=this.options.grid,r=this.ctx,i=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let o,a;const s=(l,u,c)=>{!c.width||!c.color||(r.save(),r.lineWidth=c.width,r.strokeStyle=c.color,r.setLineDash(c.borderDash||[]),r.lineDashOffset=c.borderDashOffset,r.beginPath(),r.moveTo(l.x,l.y),r.lineTo(u.x,u.y),r.stroke(),r.restore())};if(n.display)for(o=0,a=i.length;o<a;++o){const l=i[o];n.drawOnChartArea&&s({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),n.drawTicks&&s({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:n,options:{border:r,grid:i}}=this,o=r.setContext(this.getContext()),a=r.display?o.width:0;if(!a)return;const s=i.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let u,c,f,d;this.isHorizontal()?(u=er(t,this.left,a)-a/2,c=er(t,this.right,s)+s/2,f=d=l):(f=er(t,this.top,a)-a/2,d=er(t,this.bottom,s)+s/2,u=c=l),n.save(),n.lineWidth=o.width,n.strokeStyle=o.color,n.beginPath(),n.moveTo(u,f),n.lineTo(c,d),n.stroke(),n.restore()}drawLabels(t){if(!this.options.ticks.display)return;const r=this.ctx,i=this._computeLabelArea();i&&rh(r,i);const o=this.getLabelItems(t);for(const a of o){const s=a.options,l=a.font,u=a.label,c=a.textOffset;Sr(r,u,0,c,l,s)}i&&ih(r)}drawTitle(){const{ctx:t,options:{position:n,title:r,reverse:i}}=this;if(!r.display)return;const o=Pe(r.font),a=Ve(r.padding),s=r.align;let l=o.lineHeight/2;n==="bottom"||n==="center"||q(n)?(l+=a.bottom,ge(r.text)&&(l+=o.lineHeight*(r.text.length-1))):l+=a.top;const{titleX:u,titleY:c,maxWidth:f,rotation:d}=rE(this,l,n,s);Sr(t,r.text,0,0,o,{color:r.color,maxWidth:f,rotation:d,textAlign:nE(s,n,i),textBaseline:"middle",translation:[u,c]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,n=t.ticks&&t.ticks.z||0,r=X(t.grid&&t.grid.z,-1),i=X(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==Ar.prototype.draw?[{z:n,draw:o=>{this.draw(o)}}]:[{z:r,draw:o=>{this.drawBackground(),this.drawGrid(o),this.drawTitle()}},{z:i,draw:()=>{this.drawBorder()}},{z:n,draw:o=>{this.drawLabels(o)}}]}getMatchingVisibleMetas(t){const n=this.chart.getSortedVisibleDatasetMetas(),r=this.axis+"AxisID",i=[];let o,a;for(o=0,a=n.length;o<a;++o){const s=n[o];s[r]===this.id&&(!t||s.type===t)&&i.push(s)}return i}_resolveTickFontOptions(t){const n=this.options.ticks.setContext(this.getContext(t));return Pe(n.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class Va{constructor(t,n,r){this.type=t,this.scope=n,this.override=r,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const n=Object.getPrototypeOf(t);let r;aE(n)&&(r=this.register(n));const i=this.items,o=t.id,a=this.scope+"."+o;if(!o)throw new Error("class does not have id: "+t);return o in i||(i[o]=t,iE(t,a,r),this.override&&_e.override(t.id,t.overrides)),a}get(t){return this.items[t]}unregister(t){const n=this.items,r=t.id,i=this.scope;r in n&&delete n[r],i&&r in _e[i]&&(delete _e[i][r],this.override&&delete xr[r])}}function iE(e,t,n){const r=Qo(Object.create(null),[n?_e.get(n):{},_e.get(t),e.defaults]);_e.set(t,r),e.defaultRoutes&&oE(t,e.defaultRoutes),e.descriptors&&_e.describe(t,e.descriptors)}function oE(e,t){Object.keys(t).forEach(n=>{const r=n.split("."),i=r.pop(),o=[e].concat(r).join("."),a=t[n].split("."),s=a.pop(),l=a.join(".");_e.route(o,i,l,s)})}function aE(e){return"id"in e&&"defaults"in e}class sE{constructor(){this.controllers=new Va(To,"datasets",!0),this.elements=new Va(mn,"elements"),this.plugins=new Va(Object,"plugins"),this.scales=new Va(Ar,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,n,r){[...n].forEach(i=>{const o=r||this._getRegistryForType(i);r||o.isForType(i)||o===this.plugins&&i.id?this._exec(t,o,i):ee(i,a=>{const s=r||this._getRegistryForType(a);this._exec(t,s,a)})})}_exec(t,n,r){const i=Zd(t);ne(r["before"+i],[],r),n[t](r),ne(r["after"+i],[],r)}_getRegistryForType(t){for(let n=0;n<this._typedRegistries.length;n++){const r=this._typedRegistries[n];if(r.isForType(t))return r}return this.plugins}_get(t,n,r){const i=n.get(t);if(i===void 0)throw new Error('"'+t+'" is not a registered '+r+".");return i}}var Xt=new sE;class lE{constructor(){this._init=[]}notify(t,n,r,i){n==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install"));const o=i?this._descriptors(t).filter(i):this._descriptors(t),a=this._notify(o,t,n,r);return n==="afterDestroy"&&(this._notify(o,t,"stop"),this._notify(this._init,t,"uninstall")),a}_notify(t,n,r,i){i=i||{};for(const o of t){const a=o.plugin,s=a[r],l=[n,i,o.options];if(ne(s,l,a)===!1&&i.cancelable)return!1}return!0}invalidate(){se(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const n=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),n}_createDescriptors(t,n){const r=t&&t.config,i=X(r.options&&r.options.plugins,{}),o=uE(r);return i===!1&&!n?[]:fE(t,o,i,n)}_notifyStateChanges(t){const n=this._oldCache||[],r=this._cache,i=(o,a)=>o.filter(s=>!a.some(l=>s.plugin.id===l.plugin.id));this._notify(i(n,r),t,"stop"),this._notify(i(r,n),t,"start")}}function uE(e){const t={},n=[],r=Object.keys(Xt.plugins.items);for(let o=0;o<r.length;o++)n.push(Xt.getPlugin(r[o]));const i=e.plugins||[];for(let o=0;o<i.length;o++){const a=i[o];n.indexOf(a)===-1&&(n.push(a),t[a.id]=!0)}return{plugins:n,localIds:t}}function cE(e,t){return!t&&e===!1?null:e===!0?{}:e}function fE(e,{plugins:t,localIds:n},r,i){const o=[],a=e.getContext();for(const s of t){const l=s.id,u=cE(r[l],i);u!==null&&o.push({plugin:s,options:dE(e.config,{plugin:s,local:n[l]},u,a)})}return o}function dE(e,{plugin:t,local:n},r,i){const o=e.pluginScopeKeys(t),a=e.getOptionScopes(r,o);return n&&t.defaults&&a.push(t.defaults),e.createResolver(a,i,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function tf(e,t){const n=_e.datasets[e]||{};return((t.datasets||{})[e]||{}).indexAxis||t.indexAxis||n.indexAxis||"x"}function hE(e,t){let n=e;return e==="_index_"?n=t:e==="_value_"&&(n=t==="x"?"y":"x"),n}function pE(e,t){return e===t?"_index_":"_value_"}function Vg(e){if(e==="x"||e==="y"||e==="r")return e}function gE(e){if(e==="top"||e==="bottom")return"x";if(e==="left"||e==="right")return"y"}function nf(e,...t){if(Vg(e))return e;for(const n of t){const r=n.axis||gE(n.position)||e.length>1&&Vg(e[0].toLowerCase());if(r)return r}throw new Error(`Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`)}function Wg(e,t,n){if(n[t+"AxisID"]===e)return{axis:t}}function vE(e,t){if(t.data&&t.data.datasets){const n=t.data.datasets.filter(r=>r.xAxisID===e||r.yAxisID===e);if(n.length)return Wg(e,"x",n[0])||Wg(e,"y",n[0])}return{}}function mE(e,t){const n=xr[e.type]||{scales:{}},r=t.scales||{},i=tf(e.type,t),o=Object.create(null);return Object.keys(r).forEach(a=>{const s=r[a];if(!q(s))return console.error(`Invalid scale configuration for scale: ${a}`);if(s._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${a}`);const l=nf(a,s,vE(a,e),_e.scales[s.type]),u=pE(l,i),c=n.scales||{};o[a]=So(Object.create(null),[{axis:l},s,c[l],c[u]])}),e.data.datasets.forEach(a=>{const s=a.type||e.type,l=a.indexAxis||tf(s,t),c=(xr[s]||{}).scales||{};Object.keys(c).forEach(f=>{const d=hE(f,l),h=a[d+"AxisID"]||d;o[h]=o[h]||Object.create(null),So(o[h],[{axis:d},r[h],c[f]])})}),Object.keys(o).forEach(a=>{const s=o[a];So(s,[_e.scales[s.type],_e.scale])}),o}function yb(e){const t=e.options||(e.options={});t.plugins=X(t.plugins,{}),t.scales=mE(e,t)}function bb(e){return e=e||{},e.datasets=e.datasets||[],e.labels=e.labels||[],e}function yE(e){return e=e||{},e.data=bb(e.data),yb(e),e}const Hg=new Map,$b=new Set;function Wa(e,t){let n=Hg.get(e);return n||(n=t(),Hg.set(e,n),$b.add(n)),n}const Qi=(e,t,n)=>{const r=Ks(t,n);r!==void 0&&e.add(r)};class bE{constructor(t){this._config=yE(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=bb(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),yb(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return Wa(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,n){return Wa(`${t}.transition.${n}`,()=>[[`datasets.${t}.transitions.${n}`,`transitions.${n}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,n){return Wa(`${t}-${n}`,()=>[[`datasets.${t}.elements.${n}`,`datasets.${t}`,`elements.${n}`,""]])}pluginScopeKeys(t){const n=t.id,r=this.type;return Wa(`${r}-plugin-${n}`,()=>[[`plugins.${n}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,n){const r=this._scopeCache;let i=r.get(t);return(!i||n)&&(i=new Map,r.set(t,i)),i}getOptionScopes(t,n,r){const{options:i,type:o}=this,a=this._cachedScopes(t,r),s=a.get(n);if(s)return s;const l=new Set;n.forEach(c=>{t&&(l.add(t),c.forEach(f=>Qi(l,t,f))),c.forEach(f=>Qi(l,i,f)),c.forEach(f=>Qi(l,xr[o]||{},f)),c.forEach(f=>Qi(l,_e,f)),c.forEach(f=>Qi(l,Jc,f))});const u=Array.from(l);return u.length===0&&u.push(Object.create(null)),$b.has(n)&&a.set(n,u),u}chartOptionScopes(){const{options:t,type:n}=this;return[t,xr[n]||{},_e.datasets[n]||{},{type:n},_e,Jc]}resolveNamedOptions(t,n,r,i=[""]){const o={$shared:!0},{resolver:a,subPrefixes:s}=Gg(this._resolverCache,t,i);let l=a;if(_E(a,n)){o.$shared=!1,r=Yn(r)?r():r;const u=this.createResolver(t,r,s);l=_i(a,r,u)}for(const u of n)o[u]=l[u];return o}createResolver(t,n,r=[""],i){const{resolver:o}=Gg(this._resolverCache,t,r);return q(n)?_i(o,n,void 0,i):o}}function Gg(e,t,n){let r=e.get(t);r||(r=new Map,e.set(t,r));const i=n.join();let o=r.get(i);return o||(o={resolver:oh(t,n),subPrefixes:n.filter(s=>!s.toLowerCase().includes("hover"))},r.set(i,o)),o}const $E=e=>q(e)&&Object.getOwnPropertyNames(e).reduce((t,n)=>t||Yn(e[n]),!1);function _E(e,t){const{isScriptable:n,isIndexable:r}=nb(e);for(const i of t){const o=n(i),a=r(i),s=(a||o)&&e[i];if(o&&(Yn(s)||$E(s))||a&&ge(s))return!0}return!1}var wE="4.4.0";const xE=["top","bottom","left","right","chartArea"];function Yg(e,t){return e==="top"||e==="bottom"||xE.indexOf(e)===-1&&t==="x"}function Xg(e,t){return function(n,r){return n[e]===r[e]?n[t]-r[t]:n[e]-r[e]}}function Kg(e){const t=e.chart,n=t.options.animation;t.notifyPlugins("afterRender"),ne(n&&n.onComplete,[e],t)}function SE(e){const t=e.chart,n=t.options.animation;ne(n&&n.onProgress,[e],t)}function _b(e){return sb()&&typeof e=="string"?e=document.getElementById(e):e&&e.length&&(e=e[0]),e&&e.canvas&&(e=e.canvas),e}const bs={},Qg=e=>{const t=_b(e);return Object.values(bs).filter(n=>n.canvas===t).pop()};function kE(e,t,n){const r=Object.keys(e);for(const i of r){const o=+i;if(o>=t){const a=e[i];delete e[i],(n>0||o>t)&&(e[o+n]=a)}}}function EE(e,t,n,r){return!n||e.type==="mouseout"?null:r?t:e}function Ha(e,t,n){return e.options.clip?e[n]:t[n]}function AE(e,t){const{xScale:n,yScale:r}=e;return n&&r?{left:Ha(n,t,"left"),right:Ha(n,t,"right"),top:Ha(r,t,"top"),bottom:Ha(r,t,"bottom")}:t}var Sn;let Pl=(Sn=class{static register(...t){Xt.add(...t),Zg()}static unregister(...t){Xt.remove(...t),Zg()}constructor(t,n){const r=this.config=new bE(n),i=_b(t),o=Qg(i);if(o)throw new Error("Canvas is already in use. Chart with ID '"+o.id+"' must be destroyed before the canvas with ID '"+o.canvas.id+"' can be reused.");const a=r.createResolver(r.chartOptionScopes(),this.getContext());this.platform=new(r.platform||Wk(i)),this.platform.updateConfig(r);const s=this.platform.acquireContext(i,a.aspectRatio),l=s&&s.canvas,u=l&&l.height,c=l&&l.width;if(this.id=L2(),this.ctx=s,this.canvas=l,this.width=c,this.height=u,this._options=a,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new lE,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=q2(f=>this.update(f),a.resizeDelay||0),this._dataChanges=[],bs[this.id]=this,!s||!l){console.error("Failed to create chart: can't acquire context from the given item");return}rn.listen(this,"complete",Kg),rn.listen(this,"progress",SE),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:n},width:r,height:i,_aspectRatio:o}=this;return se(t)?n&&o?o:i?r/i:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return Xt}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():_g(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return yg(this.canvas,this.ctx),this}stop(){return rn.stop(this),this}resize(t,n){rn.running(this)?this._resizeBeforeDraw={width:t,height:n}:this._resize(t,n)}_resize(t,n){const r=this.options,i=this.canvas,o=r.maintainAspectRatio&&this.aspectRatio,a=this.platform.getMaximumSize(i,t,n,o),s=r.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=a.width,this.height=a.height,this._aspectRatio=this.aspectRatio,_g(this,s,!0)&&(this.notifyPlugins("resize",{size:a}),ne(r.onResize,[this,a],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const n=this.options.scales||{};ee(n,(r,i)=>{r.id=i})}buildOrUpdateScales(){const t=this.options,n=t.scales,r=this.scales,i=Object.keys(r).reduce((a,s)=>(a[s]=!1,a),{});let o=[];n&&(o=o.concat(Object.keys(n).map(a=>{const s=n[a],l=nf(a,s),u=l==="r",c=l==="x";return{options:s,dposition:u?"chartArea":c?"bottom":"left",dtype:u?"radialLinear":c?"category":"linear"}}))),ee(o,a=>{const s=a.options,l=s.id,u=nf(l,s),c=X(s.type,a.dtype);(s.position===void 0||Yg(s.position,u)!==Yg(a.dposition))&&(s.position=a.dposition),i[l]=!0;let f=null;if(l in r&&r[l].type===c)f=r[l];else{const d=Xt.getScale(c);f=new d({id:l,type:c,ctx:this.ctx,chart:this}),r[f.id]=f}f.init(s,t)}),ee(i,(a,s)=>{a||delete r[s]}),ee(r,a=>{Et.configure(this,a,a.options),Et.addBox(this,a)})}_updateMetasets(){const t=this._metasets,n=this.data.datasets.length,r=t.length;if(t.sort((i,o)=>i.index-o.index),r>n){for(let i=n;i<r;++i)this._destroyDatasetMeta(i);t.splice(n,r-n)}this._sortedMetasets=t.slice(0).sort(Xg("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:n}}=this;t.length>n.length&&delete this._stacks,t.forEach((r,i)=>{n.filter(o=>o===r._dataset).length===0&&this._destroyDatasetMeta(i)})}buildOrUpdateControllers(){const t=[],n=this.data.datasets;let r,i;for(this._removeUnreferencedMetasets(),r=0,i=n.length;r<i;r++){const o=n[r];let a=this.getDatasetMeta(r);const s=o.type||this.config.type;if(a.type&&a.type!==s&&(this._destroyDatasetMeta(r),a=this.getDatasetMeta(r)),a.type=s,a.indexAxis=o.indexAxis||tf(s,this.options),a.order=o.order||0,a.index=r,a.label=""+o.label,a.visible=this.isDatasetVisible(r),a.controller)a.controller.updateIndex(r),a.controller.linkScales();else{const l=Xt.getController(s),{datasetElementType:u,dataElementType:c}=_e.datasets[s];Object.assign(l,{dataElementType:Xt.getElement(c),datasetElementType:u&&Xt.getElement(u)}),a.controller=new l(this,r),t.push(a.controller)}}return this._updateMetasets(),t}_resetElements(){ee(this.data.datasets,(t,n)=>{this.getDatasetMeta(n).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const n=this.config;n.update();const r=this._options=n.createResolver(n.chartOptionScopes(),this.getContext()),i=this._animationsDisabled=!r.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const o=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let a=0;for(let u=0,c=this.data.datasets.length;u<c;u++){const{controller:f}=this.getDatasetMeta(u),d=!i&&o.indexOf(f)===-1;f.buildOrUpdateElements(d),a=Math.max(+f.getMaxOverflow(),a)}a=this._minPadding=r.layout.autoPadding?a:0,this._updateLayout(a),i||ee(o,u=>{u.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(Xg("z","_idx"));const{_active:s,_lastEvent:l}=this;l?this._eventHandler(l,!0):s.length&&this._updateHoverStyles(s,s,!0),this.render()}_updateScales(){ee(this.scales,t=>{Et.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,n=new Set(Object.keys(this._listeners)),r=new Set(t.events);(!ug(n,r)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,n=this._getUniformDataChanges()||[];for(const{method:r,start:i,count:o}of n){const a=r==="_removeElements"?-o:o;kE(t,i,a)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const n=this.data.datasets.length,r=o=>new Set(t.filter(a=>a[0]===o).map((a,s)=>s+","+a.splice(1).join(","))),i=r(0);for(let o=1;o<n;o++)if(!ug(i,r(o)))return;return Array.from(i).map(o=>o.split(",")).map(o=>({method:o[1],start:+o[2],count:+o[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;Et.update(this,this.width,this.height,t);const n=this.chartArea,r=n.width<=0||n.height<=0;this._layers=[],ee(this.boxes,i=>{r&&i.position==="chartArea"||(i.configure&&i.configure(),this._layers.push(...i._layers()))},this),this._layers.forEach((i,o)=>{i._idx=o}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let n=0,r=this.data.datasets.length;n<r;++n)this.getDatasetMeta(n).controller.configure();for(let n=0,r=this.data.datasets.length;n<r;++n)this._updateDataset(n,Yn(t)?t({datasetIndex:n}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,n){const r=this.getDatasetMeta(t),i={meta:r,index:t,mode:n,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",i)!==!1&&(r.controller._update(n),i.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",i))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(rn.has(this)?this.attached&&!rn.running(this)&&rn.start(this):(this.draw(),Kg({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:r,height:i}=this._resizeBeforeDraw;this._resize(r,i),this._resizeBeforeDraw=null}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const n=this._layers;for(t=0;t<n.length&&n[t].z<=0;++t)n[t].draw(this.chartArea);for(this._drawDatasets();t<n.length;++t)n[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const n=this._sortedMetasets,r=[];let i,o;for(i=0,o=n.length;i<o;++i){const a=n[i];(!t||a.visible)&&r.push(a)}return r}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let n=t.length-1;n>=0;--n)this._drawDataset(t[n]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const n=this.ctx,r=t._clip,i=!r.disabled,o=AE(t,this.chartArea),a={meta:t,index:t.index,cancelable:!0};this.notifyPlugins("beforeDatasetDraw",a)!==!1&&(i&&rh(n,{left:r.left===!1?0:o.left-r.left,right:r.right===!1?this.width:o.right+r.right,top:r.top===!1?0:o.top-r.top,bottom:r.bottom===!1?this.height:o.bottom+r.bottom}),t.controller.draw(),i&&ih(n),a.cancelable=!1,this.notifyPlugins("afterDatasetDraw",a))}isPointInArea(t){return fn(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,n,r,i){const o=xk.modes[n];return typeof o=="function"?o(this,t,r,i):[]}getDatasetMeta(t){const n=this.data.datasets[t],r=this._metasets;let i=r.filter(o=>o&&o._dataset===n).pop();return i||(i={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:n&&n.order||0,index:t,_dataset:n,_parsed:[],_sorted:!1},r.push(i)),i}getContext(){return this.$context||(this.$context=Zn(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const n=this.data.datasets[t];if(!n)return!1;const r=this.getDatasetMeta(t);return typeof r.hidden=="boolean"?!r.hidden:!n.hidden}setDatasetVisibility(t,n){const r=this.getDatasetMeta(t);r.hidden=!n}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,n,r){const i=r?"show":"hide",o=this.getDatasetMeta(t),a=o.controller._resolveAnimations(void 0,i);Qs(n)?(o.data[n].hidden=!r,this.update()):(this.setDatasetVisibility(t,r),a.update(o,{visible:r}),this.update(s=>s.datasetIndex===t?i:void 0))}hide(t,n){this._updateVisibility(t,n,!1)}show(t,n){this._updateVisibility(t,n,!0)}_destroyDatasetMeta(t){const n=this._metasets[t];n&&n.controller&&n.controller._destroy(),delete this._metasets[t]}_stop(){let t,n;for(this.stop(),rn.remove(this),t=0,n=this.data.datasets.length;t<n;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:n}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),yg(t,n),this.platform.releaseContext(n),this.canvas=null,this.ctx=null),delete bs[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,n=this.platform,r=(o,a)=>{n.addEventListener(this,o,a),t[o]=a},i=(o,a,s)=>{o.offsetX=a,o.offsetY=s,this._eventHandler(o)};ee(this.options.events,o=>r(o,i))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,n=this.platform,r=(l,u)=>{n.addEventListener(this,l,u),t[l]=u},i=(l,u)=>{t[l]&&(n.removeEventListener(this,l,u),delete t[l])},o=(l,u)=>{this.canvas&&this.resize(l,u)};let a;const s=()=>{i("attach",s),this.attached=!0,this.resize(),r("resize",o),r("detach",a)};a=()=>{this.attached=!1,i("resize",o),this._stop(),this._resize(0,0),r("attach",s)},n.isAttached(this.canvas)?s():a()}unbindEvents(){ee(this._listeners,(t,n)=>{this.platform.removeEventListener(this,n,t)}),this._listeners={},ee(this._responsiveListeners,(t,n)=>{this.platform.removeEventListener(this,n,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,n,r){const i=r?"set":"remove";let o,a,s,l;for(n==="dataset"&&(o=this.getDatasetMeta(t[0].datasetIndex),o.controller["_"+i+"DatasetHoverStyle"]()),s=0,l=t.length;s<l;++s){a=t[s];const u=a&&this.getDatasetMeta(a.datasetIndex).controller;u&&u[i+"HoverStyle"](a.element,a.datasetIndex,a.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const n=this._active||[],r=t.map(({datasetIndex:o,index:a})=>{const s=this.getDatasetMeta(o);if(!s)throw new Error("No dataset found at index "+o);return{datasetIndex:o,element:s.data[a],index:a}});!Ys(r,n)&&(this._active=r,this._lastEvent=null,this._updateHoverStyles(r,n))}notifyPlugins(t,n,r){return this._plugins.notify(this,t,n,r)}isPluginEnabled(t){return this._plugins._cache.filter(n=>n.plugin.id===t).length===1}_updateHoverStyles(t,n,r){const i=this.options.hover,o=(l,u)=>l.filter(c=>!u.some(f=>c.datasetIndex===f.datasetIndex&&c.index===f.index)),a=o(n,t),s=r?t:o(t,n);a.length&&this.updateHoverStyle(a,i.mode,!1),s.length&&i.mode&&this.updateHoverStyle(s,i.mode,!0)}_eventHandler(t,n){const r={event:t,replay:n,cancelable:!0,inChartArea:this.isPointInArea(t)},i=a=>(a.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",r,i)===!1)return;const o=this._handleEvent(t,n,r.inChartArea);return r.cancelable=!1,this.notifyPlugins("afterEvent",r,i),(o||r.changed)&&this.render(),this}_handleEvent(t,n,r){const{_active:i=[],options:o}=this,a=n,s=this._getActiveElements(t,i,r,a),l=z2(t),u=EE(t,this._lastEvent,r,l);r&&(this._lastEvent=null,ne(o.onHover,[t,s,this],this),l&&ne(o.onClick,[t,s,this],this));const c=!Ys(s,i);return(c||n)&&(this._active=s,this._updateHoverStyles(s,i,n)),this._lastEvent=u,c}_getActiveElements(t,n,r,i){if(t.type==="mouseout")return[];if(!r)return n;const o=this.options.hover;return this.getElementsAtEventForMode(t,o.mode,o,i)}},U(Sn,"defaults",_e),U(Sn,"instances",bs),U(Sn,"overrides",xr),U(Sn,"registry",Xt),U(Sn,"version",wE),U(Sn,"getChart",Qg),Sn);function Zg(){return ee(Pl.instances,e=>e._plugins.invalidate())}function wb(e,t,n=t){e.lineCap=X(n.borderCapStyle,t.borderCapStyle),e.setLineDash(X(n.borderDash,t.borderDash)),e.lineDashOffset=X(n.borderDashOffset,t.borderDashOffset),e.lineJoin=X(n.borderJoinStyle,t.borderJoinStyle),e.lineWidth=X(n.borderWidth,t.borderWidth),e.strokeStyle=X(n.borderColor,t.borderColor)}function TE(e,t,n){e.lineTo(n.x,n.y)}function CE(e){return e.stepped?dS:e.tension||e.cubicInterpolationMode==="monotone"?hS:TE}function xb(e,t,n={}){const r=e.length,{start:i=0,end:o=r-1}=n,{start:a,end:s}=t,l=Math.max(i,a),u=Math.min(o,s),c=i<a&&o<a||i>s&&o>s;return{count:r,start:l,loop:t.loop,ilen:u<l&&!c?r+u-l:u-l}}function PE(e,t,n,r){const{points:i,options:o}=t,{count:a,start:s,loop:l,ilen:u}=xb(i,n,r),c=CE(o);let{move:f=!0,reverse:d}=r||{},h,g,m;for(h=0;h<=u;++h)g=i[(s+(d?u-h:h))%a],!g.skip&&(f?(e.moveTo(g.x,g.y),f=!1):c(e,m,g,d,o.stepped),m=g);return l&&(g=i[(s+(d?u:0))%a],c(e,m,g,d,o.stepped)),!!l}function ME(e,t,n,r){const i=t.points,{count:o,start:a,ilen:s}=xb(i,n,r),{move:l=!0,reverse:u}=r||{};let c=0,f=0,d,h,g,m,y,p;const v=$=>(a+(u?s-$:$))%o,b=()=>{m!==y&&(e.lineTo(c,y),e.lineTo(c,m),e.lineTo(c,p))};for(l&&(h=i[v(0)],e.moveTo(h.x,h.y)),d=0;d<=s;++d){if(h=i[v(d)],h.skip)continue;const $=h.x,_=h.y,S=$|0;S===g?(_<m?m=_:_>y&&(y=_),c=(f*c+$)/++f):(b(),e.lineTo($,_),g=S,f=0,m=y=_),p=_}b()}function rf(e){const t=e.options,n=t.borderDash&&t.borderDash.length;return!e._decimated&&!e._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!n?ME:PE}function OE(e){return e.stepped?GS:e.tension||e.cubicInterpolationMode==="monotone"?YS:sr}function IE(e,t,n,r){let i=t._path;i||(i=t._path=new Path2D,t.path(i,n,r)&&i.closePath()),wb(e,t.options),e.stroke(i)}function LE(e,t,n,r){const{segments:i,options:o}=t,a=rf(t);for(const s of i)wb(e,o,s.style),e.beginPath(),a(e,t,s,{start:n,end:n+r-1})&&e.closePath(),e.stroke()}const NE=typeof Path2D=="function";function RE(e,t,n,r){NE&&!t.options.segment?IE(e,t,n,r):LE(e,t,n,r)}class ho extends mn{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,n){const r=this.options;if((r.tension||r.cubicInterpolationMode==="monotone")&&!r.stepped&&!this._pointsUpdated){const i=r.spanGaps?this._loop:this._fullLoop;DS(this._points,r,t,i,n),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=tk(this,this.options.segment))}first(){const t=this.segments,n=this.points;return t.length&&n[t[0].start]}last(){const t=this.segments,n=this.points,r=t.length;return r&&n[t[r-1].end]}interpolate(t,n){const r=this.options,i=t[n],o=this.points,a=qS(this,{property:n,start:i,end:i});if(!a.length)return;const s=[],l=OE(r);let u,c;for(u=0,c=a.length;u<c;++u){const{start:f,end:d}=a[u],h=o[f],g=o[d];if(h===g){s.push(h);continue}const m=Math.abs((i-h[n])/(g[n]-h[n])),y=l(h,g,m,r.stepped);y[n]=t[n],s.push(y)}return s.length===1?s[0]:s}pathSegment(t,n,r){return rf(this)(t,this,n,r)}path(t,n,r){const i=this.segments,o=rf(this);let a=this._loop;n=n||0,r=r||this.points.length-n;for(const s of i)a&=o(t,this,s,{start:n,end:n+r-1});return!!a}draw(t,n,r,i){const o=this.options||{};(this.points||[]).length&&o.borderWidth&&(t.save(),RE(t,this,r,i),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}U(ho,"id","line"),U(ho,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),U(ho,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),U(ho,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function qg(e,t,n,r){const i=e.options,{[n]:o}=e.getProps([n],r);return Math.abs(t-o)<i.radius+i.hitRadius}class $s extends mn{constructor(n){super();U(this,"parsed");U(this,"skip");U(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,n&&Object.assign(this,n)}inRange(n,r,i){const o=this.options,{x:a,y:s}=this.getProps(["x","y"],i);return Math.pow(n-a,2)+Math.pow(r-s,2)<Math.pow(o.hitRadius+o.radius,2)}inXRange(n,r){return qg(this,n,"x",r)}inYRange(n,r){return qg(this,n,"y",r)}getCenterPoint(n){const{x:r,y:i}=this.getProps(["x","y"],n);return{x:r,y:i}}size(n){n=n||this.options||{};let r=n.radius||0;r=Math.max(r,r&&n.hoverRadius||0);const i=r&&n.borderWidth||0;return(r+i)*2}draw(n,r){const i=this.options;this.skip||i.radius<.1||!fn(this,r,this.size(i)/2)||(n.strokeStyle=i.borderColor,n.lineWidth=i.borderWidth,n.fillStyle=i.backgroundColor,ef(n,i,this.x,this.y))}getRange(){const n=this.options||{};return n.radius+n.hitRadius}}U($s,"id","point"),U($s,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),U($s,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});const Jg=(e,t)=>{let{boxHeight:n=t,boxWidth:r=t}=e;return e.usePointStyle&&(n=Math.min(n,t),r=e.pointStyleWidth||Math.min(r,t)),{boxWidth:r,boxHeight:n,itemHeight:Math.max(t,n)}},FE=(e,t)=>e!==null&&t!==null&&e.datasetIndex===t.datasetIndex&&e.index===t.index;class ev extends mn{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,n,r){this.maxWidth=t,this.maxHeight=n,this._margins=r,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let n=ne(t.generateLabels,[this.chart],this)||[];t.filter&&(n=n.filter(r=>t.filter(r,this.chart.data))),t.sort&&(n=n.sort((r,i)=>t.sort(r,i,this.chart.data))),this.options.reverse&&n.reverse(),this.legendItems=n}fit(){const{options:t,ctx:n}=this;if(!t.display){this.width=this.height=0;return}const r=t.labels,i=Pe(r.font),o=i.size,a=this._computeTitleHeight(),{boxWidth:s,itemHeight:l}=Jg(r,o);let u,c;n.font=i.string,this.isHorizontal()?(u=this.maxWidth,c=this._fitRows(a,o,s,l)+10):(c=this.maxHeight,u=this._fitCols(a,i,s,l)+10),this.width=Math.min(u,t.maxWidth||this.maxWidth),this.height=Math.min(c,t.maxHeight||this.maxHeight)}_fitRows(t,n,r,i){const{ctx:o,maxWidth:a,options:{labels:{padding:s}}}=this,l=this.legendHitBoxes=[],u=this.lineWidths=[0],c=i+s;let f=t;o.textAlign="left",o.textBaseline="middle";let d=-1,h=-c;return this.legendItems.forEach((g,m)=>{const y=r+n/2+o.measureText(g.text).width;(m===0||u[u.length-1]+y+2*s>a)&&(f+=c,u[u.length-(m>0?0:1)]=0,h+=c,d++),l[m]={left:0,top:h,row:d,width:y,height:i},u[u.length-1]+=y+s}),f}_fitCols(t,n,r,i){const{ctx:o,maxHeight:a,options:{labels:{padding:s}}}=this,l=this.legendHitBoxes=[],u=this.columnSizes=[],c=a-t;let f=s,d=0,h=0,g=0,m=0;return this.legendItems.forEach((y,p)=>{const{itemWidth:v,itemHeight:b}=DE(r,n,o,y,i);p>0&&h+b+2*s>c&&(f+=d+s,u.push({width:d,height:h}),g+=d+s,m++,d=h=0),l[p]={left:g,top:h,col:m,width:v,height:b},d=Math.max(d,v),h+=b+s}),f+=d,u.push({width:d,height:h}),f}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:n,options:{align:r,labels:{padding:i},rtl:o}}=this,a=ci(o,this.left,this.width);if(this.isHorizontal()){let s=0,l=ze(r,this.left+i,this.right-this.lineWidths[s]);for(const u of n)s!==u.row&&(s=u.row,l=ze(r,this.left+i,this.right-this.lineWidths[s])),u.top+=this.top+t+i,u.left=a.leftForLtr(a.x(l),u.width),l+=u.width+i}else{let s=0,l=ze(r,this.top+t+i,this.bottom-this.columnSizes[s].height);for(const u of n)u.col!==s&&(s=u.col,l=ze(r,this.top+t+i,this.bottom-this.columnSizes[s].height)),u.top=l,u.left+=this.left+i,u.left=a.leftForLtr(a.x(u.left),u.width),l+=u.height+i}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;rh(t,this),this._draw(),ih(t)}}_draw(){const{options:t,columnSizes:n,lineWidths:r,ctx:i}=this,{align:o,labels:a}=t,s=_e.color,l=ci(t.rtl,this.left,this.width),u=Pe(a.font),{padding:c}=a,f=u.size,d=f/2;let h;this.drawTitle(),i.textAlign=l.textAlign("left"),i.textBaseline="middle",i.lineWidth=.5,i.font=u.string;const{boxWidth:g,boxHeight:m,itemHeight:y}=Jg(a,f),p=function(S,x,E){if(isNaN(g)||g<=0||isNaN(m)||m<0)return;i.save();const O=X(E.lineWidth,1);if(i.fillStyle=X(E.fillStyle,s),i.lineCap=X(E.lineCap,"butt"),i.lineDashOffset=X(E.lineDashOffset,0),i.lineJoin=X(E.lineJoin,"miter"),i.lineWidth=O,i.strokeStyle=X(E.strokeStyle,s),i.setLineDash(X(E.lineDash,[])),a.usePointStyle){const C={radius:m*Math.SQRT2/2,pointStyle:E.pointStyle,rotation:E.rotation,borderWidth:O},w=l.xPlus(S,g/2),k=x+d;eb(i,C,w,k,a.pointStyleWidth&&g)}else{const C=x+Math.max((f-m)/2,0),w=l.leftForLtr(S,g),k=ui(E.borderRadius);i.beginPath(),Object.values(k).some(P=>P!==0)?Js(i,{x:w,y:C,w:g,h:m,radius:k}):i.rect(w,C,g,m),i.fill(),O!==0&&i.stroke()}i.restore()},v=function(S,x,E){Sr(i,E.text,S,x+y/2,u,{strikethrough:E.hidden,textAlign:l.textAlign(E.textAlign)})},b=this.isHorizontal(),$=this._computeTitleHeight();b?h={x:ze(o,this.left+c,this.right-r[0]),y:this.top+c+$,line:0}:h={x:this.left+c,y:ze(o,this.top+$+c,this.bottom-n[0].height),line:0},lb(this.ctx,t.textDirection);const _=y+c;this.legendItems.forEach((S,x)=>{i.strokeStyle=S.fontColor,i.fillStyle=S.fontColor;const E=i.measureText(S.text).width,O=l.textAlign(S.textAlign||(S.textAlign=a.textAlign)),C=g+d+E;let w=h.x,k=h.y;l.setWidth(this.width),b?x>0&&w+C+c>this.right&&(k=h.y+=_,h.line++,w=h.x=ze(o,this.left+c,this.right-r[h.line])):x>0&&k+_>this.bottom&&(w=h.x=w+n[h.line].width+c,h.line++,k=h.y=ze(o,this.top+$+c,this.bottom-n[h.line].height));const P=l.x(w);if(p(P,k,S),w=J2(O,w+g+d,b?w+C:this.right,t.rtl),v(l.x(w),k,S),b)h.x+=C+c;else if(typeof S.text!="string"){const D=u.lineHeight;h.y+=Sb(S,D)+c}else h.y+=_}),ub(this.ctx,t.textDirection)}drawTitle(){const t=this.options,n=t.title,r=Pe(n.font),i=Ve(n.padding);if(!n.display)return;const o=ci(t.rtl,this.left,this.width),a=this.ctx,s=n.position,l=r.size/2,u=i.top+l;let c,f=this.left,d=this.width;if(this.isHorizontal())d=Math.max(...this.lineWidths),c=this.top+u,f=ze(t.align,f,this.right-d);else{const g=this.columnSizes.reduce((m,y)=>Math.max(m,y.height),0);c=u+ze(t.align,this.top,this.bottom-g-t.labels.padding-this._computeTitleHeight())}const h=ze(s,f,f+d);a.textAlign=o.textAlign(eh(s)),a.textBaseline="middle",a.strokeStyle=n.color,a.fillStyle=n.color,a.font=r.string,Sr(a,n.text,h,c,r)}_computeTitleHeight(){const t=this.options.title,n=Pe(t.font),r=Ve(t.padding);return t.display?n.lineHeight+r.height:0}_getLegendItemAt(t,n){let r,i,o;if(co(t,this.left,this.right)&&co(n,this.top,this.bottom)){for(o=this.legendHitBoxes,r=0;r<o.length;++r)if(i=o[r],co(t,i.left,i.left+i.width)&&co(n,i.top,i.top+i.height))return this.legendItems[r]}return null}handleEvent(t){const n=this.options;if(!BE(t.type,n))return;const r=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const i=this._hoveredItem,o=FE(i,r);i&&!o&&ne(n.onLeave,[t,i,this],this),this._hoveredItem=r,r&&!o&&ne(n.onHover,[t,r,this],this)}else r&&ne(n.onClick,[t,r,this],this)}}function DE(e,t,n,r,i){const o=jE(r,e,t,n),a=zE(i,r,t.lineHeight);return{itemWidth:o,itemHeight:a}}function jE(e,t,n,r){let i=e.text;return i&&typeof i!="string"&&(i=i.reduce((o,a)=>o.length>a.length?o:a)),t+n.size/2+r.measureText(i).width}function zE(e,t,n){let r=e;return typeof t.text!="string"&&(r=Sb(t,n)),r}function Sb(e,t){const n=e.text?e.text.length:0;return t*n}function BE(e,t){return!!((e==="mousemove"||e==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(e==="click"||e==="mouseup"))}var UE={id:"legend",_element:ev,start(e,t,n){const r=e.legend=new ev({ctx:e.ctx,options:n,chart:e});Et.configure(e,r,n),Et.addBox(e,r)},stop(e){Et.removeBox(e,e.legend),delete e.legend},beforeUpdate(e,t,n){const r=e.legend;Et.configure(e,r,n),r.options=n},afterUpdate(e){const t=e.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(e,t){t.replay||e.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(e,t,n){const r=t.datasetIndex,i=n.chart;i.isDatasetVisible(r)?(i.hide(r),t.hidden=!0):(i.show(r),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:e=>e.chart.options.color,boxWidth:40,padding:10,generateLabels(e){const t=e.data.datasets,{labels:{usePointStyle:n,pointStyle:r,textAlign:i,color:o,useBorderRadius:a,borderRadius:s}}=e.legend.options;return e._getSortedDatasetMetas().map(l=>{const u=l.controller.getStyle(n?0:void 0),c=Ve(u.borderWidth);return{text:t[l.index].label,fillStyle:u.backgroundColor,fontColor:o,hidden:!l.visible,lineCap:u.borderCapStyle,lineDash:u.borderDash,lineDashOffset:u.borderDashOffset,lineJoin:u.borderJoinStyle,lineWidth:(c.width+c.height)/4,strokeStyle:u.borderColor,pointStyle:r||u.pointStyle,rotation:u.rotation,textAlign:i||u.textAlign,borderRadius:a&&(s||u.borderRadius),datasetIndex:l.index}},this)}},title:{color:e=>e.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:e=>!e.startsWith("on"),labels:{_scriptable:e=>!["generateLabels","filter","sort"].includes(e)}}};class kb extends mn{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,n){const r=this.options;if(this.left=0,this.top=0,!r.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=n;const i=ge(r.text)?r.text.length:1;this._padding=Ve(r.padding);const o=i*Pe(r.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=o:this.width=o}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:n,left:r,bottom:i,right:o,options:a}=this,s=a.align;let l=0,u,c,f;return this.isHorizontal()?(c=ze(s,r,o),f=n+t,u=o-r):(a.position==="left"?(c=r+t,f=ze(s,i,n),l=Se*-.5):(c=o-t,f=ze(s,n,i),l=Se*.5),u=i-n),{titleX:c,titleY:f,maxWidth:u,rotation:l}}draw(){const t=this.ctx,n=this.options;if(!n.display)return;const r=Pe(n.font),o=r.lineHeight/2+this._padding.top,{titleX:a,titleY:s,maxWidth:l,rotation:u}=this._drawArgs(o);Sr(t,n.text,0,0,r,{color:n.color,maxWidth:l,rotation:u,textAlign:eh(n.align),textBaseline:"middle",translation:[a,s]})}}function VE(e,t){const n=new kb({ctx:e.ctx,options:t,chart:e});Et.configure(e,n,t),Et.addBox(e,n),e.titleBlock=n}var WE={id:"title",_element:kb,start(e,t,n){VE(e,n)},stop(e){const t=e.titleBlock;Et.removeBox(e,t),delete e.titleBlock},beforeUpdate(e,t,n){const r=e.titleBlock;Et.configure(e,r,n),r.options=n},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const po={average(e){if(!e.length)return!1;let t,n,r=0,i=0,o=0;for(t=0,n=e.length;t<n;++t){const a=e[t].element;if(a&&a.hasValue()){const s=a.tooltipPosition();r+=s.x,i+=s.y,++o}}return{x:r/o,y:i/o}},nearest(e,t){if(!e.length)return!1;let n=t.x,r=t.y,i=Number.POSITIVE_INFINITY,o,a,s;for(o=0,a=e.length;o<a;++o){const l=e[o].element;if(l&&l.hasValue()){const u=l.getCenterPoint(),c=qc(t,u);c<i&&(i=c,s=l)}}if(s){const l=s.tooltipPosition();n=l.x,r=l.y}return{x:n,y:r}}};function Gt(e,t){return t&&(ge(t)?Array.prototype.push.apply(e,t):e.push(t)),e}function on(e){return(typeof e=="string"||e instanceof String)&&e.indexOf(`
`)>-1?e.split(`
`):e}function HE(e,t){const{element:n,datasetIndex:r,index:i}=t,o=e.getDatasetMeta(r).controller,{label:a,value:s}=o.getLabelAndValue(i);return{chart:e,label:a,parsed:o.getParsed(i),raw:e.data.datasets[r].data[i],formattedValue:s,dataset:o.getDataset(),dataIndex:i,datasetIndex:r,element:n}}function tv(e,t){const n=e.chart.ctx,{body:r,footer:i,title:o}=e,{boxWidth:a,boxHeight:s}=t,l=Pe(t.bodyFont),u=Pe(t.titleFont),c=Pe(t.footerFont),f=o.length,d=i.length,h=r.length,g=Ve(t.padding);let m=g.height,y=0,p=r.reduce(($,_)=>$+_.before.length+_.lines.length+_.after.length,0);if(p+=e.beforeBody.length+e.afterBody.length,f&&(m+=f*u.lineHeight+(f-1)*t.titleSpacing+t.titleMarginBottom),p){const $=t.displayColors?Math.max(s,l.lineHeight):l.lineHeight;m+=h*$+(p-h)*l.lineHeight+(p-1)*t.bodySpacing}d&&(m+=t.footerMarginTop+d*c.lineHeight+(d-1)*t.footerSpacing);let v=0;const b=function($){y=Math.max(y,n.measureText($).width+v)};return n.save(),n.font=u.string,ee(e.title,b),n.font=l.string,ee(e.beforeBody.concat(e.afterBody),b),v=t.displayColors?a+2+t.boxPadding:0,ee(r,$=>{ee($.before,b),ee($.lines,b),ee($.after,b)}),v=0,n.font=c.string,ee(e.footer,b),n.restore(),y+=g.width,{width:y,height:m}}function GE(e,t){const{y:n,height:r}=t;return n<r/2?"top":n>e.height-r/2?"bottom":"center"}function YE(e,t,n,r){const{x:i,width:o}=r,a=n.caretSize+n.caretPadding;if(e==="left"&&i+o+a>t.width||e==="right"&&i-o-a<0)return!0}function XE(e,t,n,r){const{x:i,width:o}=n,{width:a,chartArea:{left:s,right:l}}=e;let u="center";return r==="center"?u=i<=(s+l)/2?"left":"right":i<=o/2?u="left":i>=a-o/2&&(u="right"),YE(u,e,t,n)&&(u="center"),u}function nv(e,t,n){const r=n.yAlign||t.yAlign||GE(e,n);return{xAlign:n.xAlign||t.xAlign||XE(e,t,n,r),yAlign:r}}function KE(e,t){let{x:n,width:r}=e;return t==="right"?n-=r:t==="center"&&(n-=r/2),n}function QE(e,t,n){let{y:r,height:i}=e;return t==="top"?r+=n:t==="bottom"?r-=i+n:r-=i/2,r}function rv(e,t,n,r){const{caretSize:i,caretPadding:o,cornerRadius:a}=e,{xAlign:s,yAlign:l}=n,u=i+o,{topLeft:c,topRight:f,bottomLeft:d,bottomRight:h}=ui(a);let g=KE(t,s);const m=QE(t,l,u);return l==="center"?s==="left"?g+=u:s==="right"&&(g-=u):s==="left"?g-=Math.max(c,d)+i:s==="right"&&(g+=Math.max(f,h)+i),{x:kt(g,0,r.width-t.width),y:kt(m,0,r.height-t.height)}}function Ga(e,t,n){const r=Ve(n.padding);return t==="center"?e.x+e.width/2:t==="right"?e.x+e.width-r.right:e.x+r.left}function iv(e){return Gt([],on(e))}function ZE(e,t,n){return Zn(e,{tooltip:t,tooltipItems:n,type:"tooltip"})}function ov(e,t){const n=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return n?e.override(n):e}const Eb={beforeTitle:en,title(e){if(e.length>0){const t=e[0],n=t.chart.data.labels,r=n?n.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(r>0&&t.dataIndex<r)return n[t.dataIndex]}return""},afterTitle:en,beforeBody:en,beforeLabel:en,label(e){if(this&&this.options&&this.options.mode==="dataset")return e.label+": "+e.formattedValue||e.formattedValue;let t=e.dataset.label||"";t&&(t+=": ");const n=e.formattedValue;return se(n)||(t+=n),t},labelColor(e){const n=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{borderColor:n.borderColor,backgroundColor:n.backgroundColor,borderWidth:n.borderWidth,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(e){const n=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{pointStyle:n.pointStyle,rotation:n.rotation}},afterLabel:en,afterBody:en,beforeFooter:en,footer:en,afterFooter:en};function Xe(e,t,n,r){const i=e[t].call(n,r);return typeof i>"u"?Eb[t].call(n,r):i}class of extends mn{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const n=this.chart,r=this.options.setContext(this.getContext()),i=r.enabled&&n.options.animation&&r.animations,o=new fb(this.chart,i);return i._cacheable&&(this._cachedAnimations=Object.freeze(o)),o}getContext(){return this.$context||(this.$context=ZE(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,n){const{callbacks:r}=n,i=Xe(r,"beforeTitle",this,t),o=Xe(r,"title",this,t),a=Xe(r,"afterTitle",this,t);let s=[];return s=Gt(s,on(i)),s=Gt(s,on(o)),s=Gt(s,on(a)),s}getBeforeBody(t,n){return iv(Xe(n.callbacks,"beforeBody",this,t))}getBody(t,n){const{callbacks:r}=n,i=[];return ee(t,o=>{const a={before:[],lines:[],after:[]},s=ov(r,o);Gt(a.before,on(Xe(s,"beforeLabel",this,o))),Gt(a.lines,Xe(s,"label",this,o)),Gt(a.after,on(Xe(s,"afterLabel",this,o))),i.push(a)}),i}getAfterBody(t,n){return iv(Xe(n.callbacks,"afterBody",this,t))}getFooter(t,n){const{callbacks:r}=n,i=Xe(r,"beforeFooter",this,t),o=Xe(r,"footer",this,t),a=Xe(r,"afterFooter",this,t);let s=[];return s=Gt(s,on(i)),s=Gt(s,on(o)),s=Gt(s,on(a)),s}_createItems(t){const n=this._active,r=this.chart.data,i=[],o=[],a=[];let s=[],l,u;for(l=0,u=n.length;l<u;++l)s.push(HE(this.chart,n[l]));return t.filter&&(s=s.filter((c,f,d)=>t.filter(c,f,d,r))),t.itemSort&&(s=s.sort((c,f)=>t.itemSort(c,f,r))),ee(s,c=>{const f=ov(t.callbacks,c);i.push(Xe(f,"labelColor",this,c)),o.push(Xe(f,"labelPointStyle",this,c)),a.push(Xe(f,"labelTextColor",this,c))}),this.labelColors=i,this.labelPointStyles=o,this.labelTextColors=a,this.dataPoints=s,s}update(t,n){const r=this.options.setContext(this.getContext()),i=this._active;let o,a=[];if(!i.length)this.opacity!==0&&(o={opacity:0});else{const s=po[r.position].call(this,i,this._eventPosition);a=this._createItems(r),this.title=this.getTitle(a,r),this.beforeBody=this.getBeforeBody(a,r),this.body=this.getBody(a,r),this.afterBody=this.getAfterBody(a,r),this.footer=this.getFooter(a,r);const l=this._size=tv(this,r),u=Object.assign({},s,l),c=nv(this.chart,r,u),f=rv(r,u,c,this.chart);this.xAlign=c.xAlign,this.yAlign=c.yAlign,o={opacity:1,x:f.x,y:f.y,width:l.width,height:l.height,caretX:s.x,caretY:s.y}}this._tooltipItems=a,this.$context=void 0,o&&this._resolveAnimations().update(this,o),t&&r.external&&r.external.call(this,{chart:this.chart,tooltip:this,replay:n})}drawCaret(t,n,r,i){const o=this.getCaretPosition(t,r,i);n.lineTo(o.x1,o.y1),n.lineTo(o.x2,o.y2),n.lineTo(o.x3,o.y3)}getCaretPosition(t,n,r){const{xAlign:i,yAlign:o}=this,{caretSize:a,cornerRadius:s}=r,{topLeft:l,topRight:u,bottomLeft:c,bottomRight:f}=ui(s),{x:d,y:h}=t,{width:g,height:m}=n;let y,p,v,b,$,_;return o==="center"?($=h+m/2,i==="left"?(y=d,p=y-a,b=$+a,_=$-a):(y=d+g,p=y+a,b=$-a,_=$+a),v=y):(i==="left"?p=d+Math.max(l,c)+a:i==="right"?p=d+g-Math.max(u,f)-a:p=this.caretX,o==="top"?(b=h,$=b-a,y=p-a,v=p+a):(b=h+m,$=b+a,y=p+a,v=p-a),_=b),{x1:y,x2:p,x3:v,y1:b,y2:$,y3:_}}drawTitle(t,n,r){const i=this.title,o=i.length;let a,s,l;if(o){const u=ci(r.rtl,this.x,this.width);for(t.x=Ga(this,r.titleAlign,r),n.textAlign=u.textAlign(r.titleAlign),n.textBaseline="middle",a=Pe(r.titleFont),s=r.titleSpacing,n.fillStyle=r.titleColor,n.font=a.string,l=0;l<o;++l)n.fillText(i[l],u.x(t.x),t.y+a.lineHeight/2),t.y+=a.lineHeight+s,l+1===o&&(t.y+=r.titleMarginBottom-s)}}_drawColorBox(t,n,r,i,o){const a=this.labelColors[r],s=this.labelPointStyles[r],{boxHeight:l,boxWidth:u}=o,c=Pe(o.bodyFont),f=Ga(this,"left",o),d=i.x(f),h=l<c.lineHeight?(c.lineHeight-l)/2:0,g=n.y+h;if(o.usePointStyle){const m={radius:Math.min(u,l)/2,pointStyle:s.pointStyle,rotation:s.rotation,borderWidth:1},y=i.leftForLtr(d,u)+u/2,p=g+l/2;t.strokeStyle=o.multiKeyBackground,t.fillStyle=o.multiKeyBackground,ef(t,m,y,p),t.strokeStyle=a.borderColor,t.fillStyle=a.backgroundColor,ef(t,m,y,p)}else{t.lineWidth=q(a.borderWidth)?Math.max(...Object.values(a.borderWidth)):a.borderWidth||1,t.strokeStyle=a.borderColor,t.setLineDash(a.borderDash||[]),t.lineDashOffset=a.borderDashOffset||0;const m=i.leftForLtr(d,u),y=i.leftForLtr(i.xPlus(d,1),u-2),p=ui(a.borderRadius);Object.values(p).some(v=>v!==0)?(t.beginPath(),t.fillStyle=o.multiKeyBackground,Js(t,{x:m,y:g,w:u,h:l,radius:p}),t.fill(),t.stroke(),t.fillStyle=a.backgroundColor,t.beginPath(),Js(t,{x:y,y:g+1,w:u-2,h:l-2,radius:p}),t.fill()):(t.fillStyle=o.multiKeyBackground,t.fillRect(m,g,u,l),t.strokeRect(m,g,u,l),t.fillStyle=a.backgroundColor,t.fillRect(y,g+1,u-2,l-2))}t.fillStyle=this.labelTextColors[r]}drawBody(t,n,r){const{body:i}=this,{bodySpacing:o,bodyAlign:a,displayColors:s,boxHeight:l,boxWidth:u,boxPadding:c}=r,f=Pe(r.bodyFont);let d=f.lineHeight,h=0;const g=ci(r.rtl,this.x,this.width),m=function(E){n.fillText(E,g.x(t.x+h),t.y+d/2),t.y+=d+o},y=g.textAlign(a);let p,v,b,$,_,S,x;for(n.textAlign=a,n.textBaseline="middle",n.font=f.string,t.x=Ga(this,y,r),n.fillStyle=r.bodyColor,ee(this.beforeBody,m),h=s&&y!=="right"?a==="center"?u/2+c:u+2+c:0,$=0,S=i.length;$<S;++$){for(p=i[$],v=this.labelTextColors[$],n.fillStyle=v,ee(p.before,m),b=p.lines,s&&b.length&&(this._drawColorBox(n,t,$,g,r),d=Math.max(f.lineHeight,l)),_=0,x=b.length;_<x;++_)m(b[_]),d=f.lineHeight;ee(p.after,m)}h=0,d=f.lineHeight,ee(this.afterBody,m),t.y-=o}drawFooter(t,n,r){const i=this.footer,o=i.length;let a,s;if(o){const l=ci(r.rtl,this.x,this.width);for(t.x=Ga(this,r.footerAlign,r),t.y+=r.footerMarginTop,n.textAlign=l.textAlign(r.footerAlign),n.textBaseline="middle",a=Pe(r.footerFont),n.fillStyle=r.footerColor,n.font=a.string,s=0;s<o;++s)n.fillText(i[s],l.x(t.x),t.y+a.lineHeight/2),t.y+=a.lineHeight+r.footerSpacing}}drawBackground(t,n,r,i){const{xAlign:o,yAlign:a}=this,{x:s,y:l}=t,{width:u,height:c}=r,{topLeft:f,topRight:d,bottomLeft:h,bottomRight:g}=ui(i.cornerRadius);n.fillStyle=i.backgroundColor,n.strokeStyle=i.borderColor,n.lineWidth=i.borderWidth,n.beginPath(),n.moveTo(s+f,l),a==="top"&&this.drawCaret(t,n,r,i),n.lineTo(s+u-d,l),n.quadraticCurveTo(s+u,l,s+u,l+d),a==="center"&&o==="right"&&this.drawCaret(t,n,r,i),n.lineTo(s+u,l+c-g),n.quadraticCurveTo(s+u,l+c,s+u-g,l+c),a==="bottom"&&this.drawCaret(t,n,r,i),n.lineTo(s+h,l+c),n.quadraticCurveTo(s,l+c,s,l+c-h),a==="center"&&o==="left"&&this.drawCaret(t,n,r,i),n.lineTo(s,l+f),n.quadraticCurveTo(s,l,s+f,l),n.closePath(),n.fill(),i.borderWidth>0&&n.stroke()}_updateAnimationTarget(t){const n=this.chart,r=this.$animations,i=r&&r.x,o=r&&r.y;if(i||o){const a=po[t.position].call(this,this._active,this._eventPosition);if(!a)return;const s=this._size=tv(this,t),l=Object.assign({},a,this._size),u=nv(n,t,l),c=rv(t,l,u,n);(i._to!==c.x||o._to!==c.y)&&(this.xAlign=u.xAlign,this.yAlign=u.yAlign,this.width=s.width,this.height=s.height,this.caretX=a.x,this.caretY=a.y,this._resolveAnimations().update(this,c))}}_willRender(){return!!this.opacity}draw(t){const n=this.options.setContext(this.getContext());let r=this.opacity;if(!r)return;this._updateAnimationTarget(n);const i={width:this.width,height:this.height},o={x:this.x,y:this.y};r=Math.abs(r)<.001?0:r;const a=Ve(n.padding),s=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;n.enabled&&s&&(t.save(),t.globalAlpha=r,this.drawBackground(o,t,i,n),lb(t,n.textDirection),o.y+=a.top,this.drawTitle(o,t,n),this.drawBody(o,t,n),this.drawFooter(o,t,n),ub(t,n.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,n){const r=this._active,i=t.map(({datasetIndex:s,index:l})=>{const u=this.chart.getDatasetMeta(s);if(!u)throw new Error("Cannot find a dataset at index "+s);return{datasetIndex:s,element:u.data[l],index:l}}),o=!Ys(r,i),a=this._positionChanged(i,n);(o||a)&&(this._active=i,this._eventPosition=n,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,n,r=!0){if(n&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const i=this.options,o=this._active||[],a=this._getActiveElements(t,o,n,r),s=this._positionChanged(a,t),l=n||!Ys(a,o)||s;return l&&(this._active=a,(i.enabled||i.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,n))),l}_getActiveElements(t,n,r,i){const o=this.options;if(t.type==="mouseout")return[];if(!i)return n;const a=this.chart.getElementsAtEventForMode(t,o.mode,o,r);return o.reverse&&a.reverse(),a}_positionChanged(t,n){const{caretX:r,caretY:i,options:o}=this,a=po[o.position].call(this,t,n);return a!==!1&&(r!==a.x||i!==a.y)}}U(of,"positioners",po);var qE={id:"tooltip",_element:of,positioners:po,afterInit(e,t,n){n&&(e.tooltip=new of({chart:e,options:n}))},beforeUpdate(e,t,n){e.tooltip&&e.tooltip.initialize(n)},reset(e,t,n){e.tooltip&&e.tooltip.initialize(n)},afterDraw(e){const t=e.tooltip;if(t&&t._willRender()){const n={tooltip:t};if(e.notifyPlugins("beforeTooltipDraw",{...n,cancelable:!0})===!1)return;t.draw(e.ctx),e.notifyPlugins("afterTooltipDraw",n)}},afterEvent(e,t){if(e.tooltip){const n=t.replay;e.tooltip.handleEvent(t.event,n,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(e,t)=>t.bodyFont.size,boxWidth:(e,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:Eb},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:e=>e!=="filter"&&e!=="itemSort"&&e!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};const JE=(e,t,n,r)=>(typeof t=="string"?(n=e.push(t)-1,r.unshift({index:n,label:t})):isNaN(t)&&(n=null),n);function eA(e,t,n,r){const i=e.indexOf(t);if(i===-1)return JE(e,t,n,r);const o=e.lastIndexOf(t);return i!==o?n:i}const tA=(e,t)=>e===null?null:kt(Math.round(e),0,t);function av(e){const t=this.getLabels();return e>=0&&e<t.length?t[e]:e}class af extends Ar{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const n=this._addedLabels;if(n.length){const r=this.getLabels();for(const{index:i,label:o}of n)r[i]===o&&r.splice(i,1);this._addedLabels=[]}super.init(t)}parse(t,n){if(se(t))return null;const r=this.getLabels();return n=isFinite(n)&&r[n]===t?n:eA(r,t,X(n,t),this._addedLabels),tA(n,r.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:n}=this.getUserBounds();let{min:r,max:i}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(r=0),n||(i=this.getLabels().length-1)),this.min=r,this.max=i}buildTicks(){const t=this.min,n=this.max,r=this.options.offset,i=[];let o=this.getLabels();o=t===0&&n===o.length-1?o:o.slice(t,n+1),this._valueRange=Math.max(o.length-(r?0:1),1),this._startValue=this.min-(r?.5:0);for(let a=t;a<=n;a++)i.push({value:a});return i}getLabelForValue(t){return av.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const n=this.ticks;return t<0||t>n.length-1?null:this.getPixelForValue(n[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}U(af,"id","category"),U(af,"defaults",{ticks:{callback:av}});function nA(e,t){const n=[],{bounds:i,step:o,min:a,max:s,precision:l,count:u,maxTicks:c,maxDigits:f,includeBounds:d}=e,h=o||1,g=c-1,{min:m,max:y}=t,p=!se(a),v=!se(s),b=!se(u),$=(y-m)/(f+1);let _=fg((y-m)/g/h)*h,S,x,E,O;if(_<1e-14&&!p&&!v)return[{value:m},{value:y}];O=Math.ceil(y/_)-Math.floor(m/_),O>g&&(_=fg(O*_/g/h)*h),se(l)||(S=Math.pow(10,l),_=Math.ceil(_*S)/S),i==="ticks"?(x=Math.floor(m/_)*_,E=Math.ceil(y/_)*_):(x=m,E=y),p&&v&&o&&W2((s-a)/o,_/1e3)?(O=Math.round(Math.min((s-a)/_,c)),_=(s-a)/O,x=a,E=s):b?(x=p?a:x,E=v?s:E,O=u-1,_=(E-x)/O):(O=(E-x)/_,ko(O,Math.round(O),_/1e3)?O=Math.round(O):O=Math.ceil(O));const C=Math.max(dg(_),dg(x));S=Math.pow(10,se(l)?C:l),x=Math.round(x*S)/S,E=Math.round(E*S)/S;let w=0;for(p&&(d&&x!==a?(n.push({value:a}),x<a&&w++,ko(Math.round((x+w*_)*S)/S,a,sv(a,$,e))&&w++):x<a&&w++);w<O;++w){const k=Math.round((x+w*_)*S)/S;if(v&&k>s)break;n.push({value:k})}return v&&d&&E!==s?n.length&&ko(n[n.length-1].value,s,sv(s,$,e))?n[n.length-1].value=s:n.push({value:s}):(!v||E===s)&&n.push({value:E}),n}function sv(e,t,{horizontal:n,minRotation:r}){const i=Nn(r),o=(n?Math.sin(i):Math.cos(i))||.001,a=.75*t*(""+e).length;return Math.min(t/o,a)}class nl extends Ar{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,n){return se(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:n,maxDefined:r}=this.getUserBounds();let{min:i,max:o}=this;const a=l=>i=n?i:l,s=l=>o=r?o:l;if(t){const l=$i(i),u=$i(o);l<0&&u<0?s(0):l>0&&u>0&&a(0)}if(i===o){let l=o===0?1:Math.abs(o*.05);s(o+l),t||a(i-l)}this.min=i,this.max=o}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:n,stepSize:r}=t,i;return r?(i=Math.ceil(this.max/r)-Math.floor(this.min/r)+1,i>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${r} would result generating up to ${i} ticks. Limiting to 1000.`),i=1e3)):(i=this.computeTickLimit(),n=n||11),n&&(i=Math.min(n,i)),i}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,n=t.ticks;let r=this.getTickLimit();r=Math.max(2,r);const i={maxTicks:r,bounds:t.bounds,min:t.min,max:t.max,precision:n.precision,step:n.stepSize,count:n.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:n.minRotation||0,includeBounds:n.includeBounds!==!1},o=this._range||this,a=nA(i,o);return t.bounds==="ticks"&&X1(a,this,"value"),t.reverse?(a.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),a}configure(){const t=this.ticks;let n=this.min,r=this.max;if(super.configure(),this.options.offset&&t.length){const i=(r-n)/Math.max(t.length-1,1)/2;n-=i,r+=i}this._startValue=n,this._endValue=r,this._valueRange=r-n}getLabelForValue(t){return nh(t,this.chart.options.locale,this.options.ticks.format)}}class sf extends nl{determineDataLimits(){const{min:t,max:n}=this.getMinMax(!0);this.min=Oe(t)?t:0,this.max=Oe(n)?n:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),n=t?this.width:this.height,r=Nn(this.options.ticks.minRotation),i=(t?Math.sin(r):Math.cos(r))||.001,o=this._resolveTickFontOptions(0);return Math.ceil(n/Math.min(40,o.lineHeight/i))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}U(sf,"id","linear"),U(sf,"defaults",{ticks:{callback:Tl.formatters.numeric}});const Jo=e=>Math.floor(Ln(e)),nr=(e,t)=>Math.pow(10,Jo(e)+t);function lv(e){return e/Math.pow(10,Jo(e))===1}function uv(e,t,n){const r=Math.pow(10,n),i=Math.floor(e/r);return Math.ceil(t/r)-i}function rA(e,t){const n=t-e;let r=Jo(n);for(;uv(e,t,r)>10;)r++;for(;uv(e,t,r)<10;)r--;return Math.min(r,Jo(e))}function iA(e,{min:t,max:n}){t=ut(e.min,t);const r=[],i=Jo(t);let o=rA(t,n),a=o<0?Math.pow(10,Math.abs(o)):1;const s=Math.pow(10,o),l=i>o?Math.pow(10,i):0,u=Math.round((t-l)*a)/a,c=Math.floor((t-l)/s/10)*s*10;let f=Math.floor((u-c)/Math.pow(10,o)),d=ut(e.min,Math.round((l+c+f*Math.pow(10,o))*a)/a);for(;d<n;)r.push({value:d,major:lv(d),significand:f}),f>=10?f=f<15?15:20:f++,f>=20&&(o++,f=2,a=o>=0?1:a),d=Math.round((l+c+f*Math.pow(10,o))*a)/a;const h=ut(e.max,d);return r.push({value:h,major:lv(h),significand:f}),r}class cv extends Ar{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,n){const r=nl.prototype.parse.apply(this,[t,n]);if(r===0){this._zero=!0;return}return Oe(r)&&r>0?r:null}determineDataLimits(){const{min:t,max:n}=this.getMinMax(!0);this.min=Oe(t)?Math.max(0,t):null,this.max=Oe(n)?Math.max(0,n):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!Oe(this._userMin)&&(this.min=t===nr(this.min,0)?nr(this.min,-1):nr(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:n}=this.getUserBounds();let r=this.min,i=this.max;const o=s=>r=t?r:s,a=s=>i=n?i:s;r===i&&(r<=0?(o(1),a(10)):(o(nr(r,-1)),a(nr(i,1)))),r<=0&&o(nr(i,-1)),i<=0&&a(nr(r,1)),this.min=r,this.max=i}buildTicks(){const t=this.options,n={min:this._userMin,max:this._userMax},r=iA(n,this);return t.bounds==="ticks"&&X1(r,this,"value"),t.reverse?(r.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),r}getLabelForValue(t){return t===void 0?"0":nh(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=Ln(t),this._valueRange=Ln(this.max)-Ln(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(Ln(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const n=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+n*this._valueRange)}}U(cv,"id","logarithmic"),U(cv,"defaults",{ticks:{callback:Tl.formatters.logarithmic,major:{enabled:!0}}});function lf(e){const t=e.ticks;if(t.display&&e.display){const n=Ve(t.backdropPadding);return X(t.font&&t.font.size,_e.font.size)+n.height}return 0}function oA(e,t,n){return n=ge(n)?n:[n],{w:fS(e,t.string,n),h:n.length*t.lineHeight}}function fv(e,t,n,r,i){return e===r||e===i?{start:t-n/2,end:t+n/2}:e<r||e>i?{start:t-n,end:t}:{start:t,end:t+n}}function aA(e){const t={l:e.left+e._padding.left,r:e.right-e._padding.right,t:e.top+e._padding.top,b:e.bottom-e._padding.bottom},n=Object.assign({},t),r=[],i=[],o=e._pointLabels.length,a=e.options.pointLabels,s=a.centerPointLabels?Se/o:0;for(let l=0;l<o;l++){const u=a.setContext(e.getPointLabelContext(l));i[l]=u.padding;const c=e.getPointPosition(l,e.drawingArea+i[l],s),f=Pe(u.font),d=oA(e.ctx,f,e._pointLabels[l]);r[l]=d;const h=Ft(e.getIndexAngle(l)+s),g=Math.round(qd(h)),m=fv(g,c.x,d.w,0,180),y=fv(g,c.y,d.h,90,270);sA(n,t,h,m,y)}e.setCenterPoint(t.l-n.l,n.r-t.r,t.t-n.t,n.b-t.b),e._pointLabelItems=cA(e,r,i)}function sA(e,t,n,r,i){const o=Math.abs(Math.sin(n)),a=Math.abs(Math.cos(n));let s=0,l=0;r.start<t.l?(s=(t.l-r.start)/o,e.l=Math.min(e.l,t.l-s)):r.end>t.r&&(s=(r.end-t.r)/o,e.r=Math.max(e.r,t.r+s)),i.start<t.t?(l=(t.t-i.start)/a,e.t=Math.min(e.t,t.t-l)):i.end>t.b&&(l=(i.end-t.b)/a,e.b=Math.max(e.b,t.b+l))}function lA(e,t,n){const r=e.drawingArea,{extra:i,additionalAngle:o,padding:a,size:s}=n,l=e.getPointPosition(t,r+i+a,o),u=Math.round(qd(Ft(l.angle+pt))),c=hA(l.y,s.h,u),f=fA(u),d=dA(l.x,s.w,f);return{visible:!0,x:l.x,y:c,textAlign:f,left:d,top:c,right:d+s.w,bottom:c+s.h}}function uA(e,t){if(!t)return!0;const{left:n,top:r,right:i,bottom:o}=e;return!(fn({x:n,y:r},t)||fn({x:n,y:o},t)||fn({x:i,y:r},t)||fn({x:i,y:o},t))}function cA(e,t,n){const r=[],i=e._pointLabels.length,o=e.options,{centerPointLabels:a,display:s}=o.pointLabels,l={extra:lf(o)/2,additionalAngle:a?Se/i:0};let u;for(let c=0;c<i;c++){l.padding=n[c],l.size=t[c];const f=lA(e,c,l);r.push(f),s==="auto"&&(f.visible=uA(f,u),f.visible&&(u=f))}return r}function fA(e){return e===0||e===180?"center":e<180?"left":"right"}function dA(e,t,n){return n==="right"?e-=t:n==="center"&&(e-=t/2),e}function hA(e,t,n){return n===90||n===270?e-=t/2:(n>270||n<90)&&(e-=t),e}function pA(e,t,n){const{left:r,top:i,right:o,bottom:a}=n,{backdropColor:s}=t;if(!se(s)){const l=ui(t.borderRadius),u=Ve(t.backdropPadding);e.fillStyle=s;const c=r-u.left,f=i-u.top,d=o-r+u.width,h=a-i+u.height;Object.values(l).some(g=>g!==0)?(e.beginPath(),Js(e,{x:c,y:f,w:d,h,radius:l}),e.fill()):e.fillRect(c,f,d,h)}}function gA(e,t){const{ctx:n,options:{pointLabels:r}}=e;for(let i=t-1;i>=0;i--){const o=e._pointLabelItems[i];if(!o.visible)continue;const a=r.setContext(e.getPointLabelContext(i));pA(n,a,o);const s=Pe(a.font),{x:l,y:u,textAlign:c}=o;Sr(n,e._pointLabels[i],l,u+s.lineHeight/2,s,{color:a.color,textAlign:c,textBaseline:"middle"})}}function Ab(e,t,n,r){const{ctx:i}=e;if(n)i.arc(e.xCenter,e.yCenter,t,0,Tt);else{let o=e.getPointPosition(0,t);i.moveTo(o.x,o.y);for(let a=1;a<r;a++)o=e.getPointPosition(a,t),i.lineTo(o.x,o.y)}}function vA(e,t,n,r,i){const o=e.ctx,a=t.circular,{color:s,lineWidth:l}=t;!a&&!r||!s||!l||n<0||(o.save(),o.strokeStyle=s,o.lineWidth=l,o.setLineDash(i.dash),o.lineDashOffset=i.dashOffset,o.beginPath(),Ab(e,n,a,r),o.closePath(),o.stroke(),o.restore())}function mA(e,t,n){return Zn(e,{label:n,index:t,type:"pointLabel"})}class Ya extends nl{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=Ve(lf(this.options)/2),n=this.width=this.maxWidth-t.width,r=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+n/2+t.left),this.yCenter=Math.floor(this.top+r/2+t.top),this.drawingArea=Math.floor(Math.min(n,r)/2)}determineDataLimits(){const{min:t,max:n}=this.getMinMax(!1);this.min=Oe(t)&&!isNaN(t)?t:0,this.max=Oe(n)&&!isNaN(n)?n:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/lf(this.options))}generateTickLabels(t){nl.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((n,r)=>{const i=ne(this.options.pointLabels.callback,[n,r],this);return i||i===0?i:""}).filter((n,r)=>this.chart.getDataVisibility(r))}fit(){const t=this.options;t.display&&t.pointLabels.display?aA(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,n,r,i){this.xCenter+=Math.floor((t-n)/2),this.yCenter+=Math.floor((r-i)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,n,r,i))}getIndexAngle(t){const n=Tt/(this._pointLabels.length||1),r=this.options.startAngle||0;return Ft(t*n+Nn(r))}getDistanceFromCenterForValue(t){if(se(t))return NaN;const n=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*n:(t-this.min)*n}getValueForDistanceFromCenter(t){if(se(t))return NaN;const n=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-n:this.min+n}getPointLabelContext(t){const n=this._pointLabels||[];if(t>=0&&t<n.length){const r=n[t];return mA(this.getContext(),t,r)}}getPointPosition(t,n,r=0){const i=this.getIndexAngle(t)-pt+r;return{x:Math.cos(i)*n+this.xCenter,y:Math.sin(i)*n+this.yCenter,angle:i}}getPointPositionForValue(t,n){return this.getPointPosition(t,this.getDistanceFromCenterForValue(n))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:n,top:r,right:i,bottom:o}=this._pointLabelItems[t];return{left:n,top:r,right:i,bottom:o}}drawBackground(){const{backgroundColor:t,grid:{circular:n}}=this.options;if(t){const r=this.ctx;r.save(),r.beginPath(),Ab(this,this.getDistanceFromCenterForValue(this._endValue),n,this._pointLabels.length),r.closePath(),r.fillStyle=t,r.fill(),r.restore()}}drawGrid(){const t=this.ctx,n=this.options,{angleLines:r,grid:i,border:o}=n,a=this._pointLabels.length;let s,l,u;if(n.pointLabels.display&&gA(this,a),i.display&&this.ticks.forEach((c,f)=>{if(f!==0){l=this.getDistanceFromCenterForValue(c.value);const d=this.getContext(f),h=i.setContext(d),g=o.setContext(d);vA(this,h,l,a,g)}}),r.display){for(t.save(),s=a-1;s>=0;s--){const c=r.setContext(this.getPointLabelContext(s)),{color:f,lineWidth:d}=c;!d||!f||(t.lineWidth=d,t.strokeStyle=f,t.setLineDash(c.borderDash),t.lineDashOffset=c.borderDashOffset,l=this.getDistanceFromCenterForValue(n.ticks.reverse?this.min:this.max),u=this.getPointPosition(s,l),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(u.x,u.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,n=this.options,r=n.ticks;if(!r.display)return;const i=this.getIndexAngle(0);let o,a;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(i),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((s,l)=>{if(l===0&&!n.reverse)return;const u=r.setContext(this.getContext(l)),c=Pe(u.font);if(o=this.getDistanceFromCenterForValue(this.ticks[l].value),u.showLabelBackdrop){t.font=c.string,a=t.measureText(s.label).width,t.fillStyle=u.backdropColor;const f=Ve(u.backdropPadding);t.fillRect(-a/2-f.left,-o-c.size/2-f.top,a+f.width,c.size+f.height)}Sr(t,s.label,0,-o,c,{color:u.color,strokeColor:u.textStrokeColor,strokeWidth:u.textStrokeWidth})}),t.restore()}drawTitle(){}}U(Ya,"id","radialLinear"),U(Ya,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Tl.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),U(Ya,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),U(Ya,"descriptors",{angleLines:{_fallback:"grid"}});const Ml={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Je=Object.keys(Ml);function dv(e,t){return e-t}function hv(e,t){if(se(t))return null;const n=e._adapter,{parser:r,round:i,isoWeekday:o}=e._parseOpts;let a=t;return typeof r=="function"&&(a=r(a)),Oe(a)||(a=typeof r=="string"?n.parse(a,r):n.parse(a)),a===null?null:(i&&(a=i==="week"&&(Zo(o)||o===!0)?n.startOf(a,"isoWeek",o):n.startOf(a,i)),+a)}function pv(e,t,n,r){const i=Je.length;for(let o=Je.indexOf(e);o<i-1;++o){const a=Ml[Je[o]],s=a.steps?a.steps:Number.MAX_SAFE_INTEGER;if(a.common&&Math.ceil((n-t)/(s*a.size))<=r)return Je[o]}return Je[i-1]}function yA(e,t,n,r,i){for(let o=Je.length-1;o>=Je.indexOf(n);o--){const a=Je[o];if(Ml[a].common&&e._adapter.diff(i,r,a)>=t-1)return a}return Je[n?Je.indexOf(n):0]}function bA(e){for(let t=Je.indexOf(e)+1,n=Je.length;t<n;++t)if(Ml[Je[t]].common)return Je[t]}function gv(e,t,n){if(!n)e[t]=!0;else if(n.length){const{lo:r,hi:i}=Jd(n,t),o=n[r]>=t?n[r]:n[i];e[o]=!0}}function $A(e,t,n,r){const i=e._adapter,o=+i.startOf(t[0].value,r),a=t[t.length-1].value;let s,l;for(s=o;s<=a;s=+i.add(s,1,r))l=n[s],l>=0&&(t[l].major=!0);return t}function vv(e,t,n){const r=[],i={},o=t.length;let a,s;for(a=0;a<o;++a)s=t[a],i[s]=a,r.push({value:s,major:!1});return o===0||!n?r:$A(e,r,i,n)}class rl extends Ar{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,n={}){const r=t.time||(t.time={}),i=this._adapter=new yk._date(t.adapters.date);i.init(n),So(r.displayFormats,i.formats()),this._parseOpts={parser:r.parser,round:r.round,isoWeekday:r.isoWeekday},super.init(t),this._normalized=n.normalized}parse(t,n){return t===void 0?null:hv(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,n=this._adapter,r=t.time.unit||"day";let{min:i,max:o,minDefined:a,maxDefined:s}=this.getUserBounds();function l(u){!a&&!isNaN(u.min)&&(i=Math.min(i,u.min)),!s&&!isNaN(u.max)&&(o=Math.max(o,u.max))}(!a||!s)&&(l(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&l(this.getMinMax(!1))),i=Oe(i)&&!isNaN(i)?i:+n.startOf(Date.now(),r),o=Oe(o)&&!isNaN(o)?o:+n.endOf(Date.now(),r)+1,this.min=Math.min(i,o-1),this.max=Math.max(i+1,o)}_getLabelBounds(){const t=this.getLabelTimestamps();let n=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;return t.length&&(n=t[0],r=t[t.length-1]),{min:n,max:r}}buildTicks(){const t=this.options,n=t.time,r=t.ticks,i=r.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&i.length&&(this.min=this._userMin||i[0],this.max=this._userMax||i[i.length-1]);const o=this.min,a=this.max,s=K2(i,o,a);return this._unit=n.unit||(r.autoSkip?pv(n.minUnit,this.min,this.max,this._getLabelCapacity(o)):yA(this,s.length,n.minUnit,this.min,this.max)),this._majorUnit=!r.major.enabled||this._unit==="year"?void 0:bA(this._unit),this.initOffsets(i),t.reverse&&s.reverse(),vv(this,s,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let n=0,r=0,i,o;this.options.offset&&t.length&&(i=this.getDecimalForValue(t[0]),t.length===1?n=1-i:n=(this.getDecimalForValue(t[1])-i)/2,o=this.getDecimalForValue(t[t.length-1]),t.length===1?r=o:r=(o-this.getDecimalForValue(t[t.length-2]))/2);const a=t.length<3?.5:.25;n=kt(n,0,a),r=kt(r,0,a),this._offsets={start:n,end:r,factor:1/(n+1+r)}}_generate(){const t=this._adapter,n=this.min,r=this.max,i=this.options,o=i.time,a=o.unit||pv(o.minUnit,n,r,this._getLabelCapacity(n)),s=X(i.ticks.stepSize,1),l=a==="week"?o.isoWeekday:!1,u=Zo(l)||l===!0,c={};let f=n,d,h;if(u&&(f=+t.startOf(f,"isoWeek",l)),f=+t.startOf(f,u?"day":a),t.diff(r,n,a)>1e5*s)throw new Error(n+" and "+r+" are too far apart with stepSize of "+s+" "+a);const g=i.ticks.source==="data"&&this.getDataTimestamps();for(d=f,h=0;d<r;d=+t.add(d,s,a),h++)gv(c,d,g);return(d===r||i.bounds==="ticks"||h===1)&&gv(c,d,g),Object.keys(c).sort(dv).map(m=>+m)}getLabelForValue(t){const n=this._adapter,r=this.options.time;return r.tooltipFormat?n.format(t,r.tooltipFormat):n.format(t,r.displayFormats.datetime)}format(t,n){const i=this.options.time.displayFormats,o=this._unit,a=n||i[o];return this._adapter.format(t,a)}_tickFormatFunction(t,n,r,i){const o=this.options,a=o.ticks.callback;if(a)return ne(a,[t,n,r],this);const s=o.time.displayFormats,l=this._unit,u=this._majorUnit,c=l&&s[l],f=u&&s[u],d=r[n],h=u&&f&&d&&d.major;return this._adapter.format(t,i||(h?f:c))}generateTickLabels(t){let n,r,i;for(n=0,r=t.length;n<r;++n)i=t[n],i.label=this._tickFormatFunction(i.value,n,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const n=this._offsets,r=this.getDecimalForValue(t);return this.getPixelForDecimal((n.start+r)*n.factor)}getValueForPixel(t){const n=this._offsets,r=this.getDecimalForPixel(t)/n.factor-n.end;return this.min+r*(this.max-this.min)}_getLabelSize(t){const n=this.options.ticks,r=this.ctx.measureText(t).width,i=Nn(this.isHorizontal()?n.maxRotation:n.minRotation),o=Math.cos(i),a=Math.sin(i),s=this._resolveTickFontOptions(0).size;return{w:r*o+s*a,h:r*a+s*o}}_getLabelCapacity(t){const n=this.options.time,r=n.displayFormats,i=r[n.unit]||r.millisecond,o=this._tickFormatFunction(t,0,vv(this,[t],this._majorUnit),i),a=this._getLabelSize(o),s=Math.floor(this.isHorizontal()?this.width/a.w:this.height/a.h)-1;return s>0?s:1}getDataTimestamps(){let t=this._cache.data||[],n,r;if(t.length)return t;const i=this.getMatchingVisibleMetas();if(this._normalized&&i.length)return this._cache.data=i[0].controller.getAllParsedValues(this);for(n=0,r=i.length;n<r;++n)t=t.concat(i[n].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let n,r;if(t.length)return t;const i=this.getLabels();for(n=0,r=i.length;n<r;++n)t.push(hv(this,i[n]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return Z2(t.sort(dv))}}U(rl,"id","time"),U(rl,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function Xa(e,t,n){let r=0,i=e.length-1,o,a,s,l;n?(t>=e[r].pos&&t<=e[i].pos&&({lo:r,hi:i}=fr(e,"pos",t)),{pos:o,time:s}=e[r],{pos:a,time:l}=e[i]):(t>=e[r].time&&t<=e[i].time&&({lo:r,hi:i}=fr(e,"time",t)),{time:o,pos:s}=e[r],{time:a,pos:l}=e[i]);const u=a-o;return u?s+(l-s)*(t-o)/u:s}class mv extends rl{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),n=this._table=this.buildLookupTable(t);this._minPos=Xa(n,this.min),this._tableRange=Xa(n,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:n,max:r}=this,i=[],o=[];let a,s,l,u,c;for(a=0,s=t.length;a<s;++a)u=t[a],u>=n&&u<=r&&i.push(u);if(i.length<2)return[{time:n,pos:0},{time:r,pos:1}];for(a=0,s=i.length;a<s;++a)c=i[a+1],l=i[a-1],u=i[a],Math.round((c+l)/2)!==u&&o.push({time:u,pos:a/(s-1)});return o}_generate(){const t=this.min,n=this.max;let r=super.getDataTimestamps();return(!r.includes(t)||!r.length)&&r.splice(0,0,t),(!r.includes(n)||r.length===1)&&r.push(n),r.sort((i,o)=>i-o)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const n=this.getDataTimestamps(),r=this.getLabelTimestamps();return n.length&&r.length?t=this.normalize(n.concat(r)):t=n.length?n:r,t=this._cache.all=t,t}getDecimalForValue(t){return(Xa(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const n=this._offsets,r=this.getDecimalForPixel(t)/n.factor-n.end;return Xa(this._table,r*this._tableRange+this._minPos,!0)}}U(mv,"id","timeseries"),U(mv,"defaults",rl.defaults);const Tb="label";function yv(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function _A(e,t){const n=e.options;n&&t&&Object.assign(n,t)}function Cb(e,t){e.labels=t}function Pb(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Tb;const r=[];e.datasets=t.map(i=>{const o=e.datasets.find(a=>a[n]===i[n]);return!o||!i.data||r.includes(o)?{...i}:(r.push(o),Object.assign(o,i),o)})}function wA(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Tb;const n={labels:[],datasets:[]};return Cb(n,e.labels),Pb(n,e.datasets,t),n}function xA(e,t){const{height:n=150,width:r=300,redraw:i=!1,datasetIdKey:o,type:a,data:s,options:l,plugins:u=[],fallbackContent:c,updateMode:f,...d}=e,h=V.useRef(null),g=V.useRef(),m=()=>{h.current&&(g.current=new Pl(h.current,{type:a,data:wA(s,o),options:l&&{...l},plugins:u}),yv(t,g.current))},y=()=>{yv(t,null),g.current&&(g.current.destroy(),g.current=null)};return V.useEffect(()=>{!i&&g.current&&l&&_A(g.current,l)},[i,l]),V.useEffect(()=>{!i&&g.current&&Cb(g.current.config.data,s.labels)},[i,s.labels]),V.useEffect(()=>{!i&&g.current&&s.datasets&&Pb(g.current.config.data,s.datasets,o)},[i,s.datasets]),V.useEffect(()=>{g.current&&(i?(y(),setTimeout(m)):g.current.update(f))},[i,l,s.labels,s.datasets,f]),V.useEffect(()=>{g.current&&(y(),setTimeout(m))},[a]),V.useEffect(()=>(m(),()=>y()),[]),rd.createElement("canvas",Object.assign({ref:h,role:"img",height:n,width:r},d),c)}const SA=V.forwardRef(xA);function kA(e,t){return Pl.register(t),V.forwardRef((n,r)=>rd.createElement(SA,Object.assign({},n,{ref:r,type:e})))}const Br=kA("line",ms);/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var EA=typeof Object.defineProperty=="function"?Object.defineProperty:null,AA=EA;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var TA=AA;function CA(){try{return TA({},"x",{}),!0}catch{return!1}}var PA=CA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var MA=Object.defineProperty,OA=MA;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function IA(e){return typeof e=="number"}var Mb=IA;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function LA(e){return e[0]==="-"}function bv(e){var t="",n;for(n=0;n<e;n++)t+="0";return t}function NA(e,t,n){var r=!1,i=t-e.length;return i<0||(LA(e)&&(r=!0,e=e.substr(1)),e=n?e+bv(i):bv(i)+e,r&&(e="-"+e)),e}var Ob=NA;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var RA=Mb,$v=Ob,FA=String.prototype.toLowerCase,_v=String.prototype.toUpperCase;function DA(e){var t,n,r;switch(e.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;case"d":case"i":case"u":default:t=10;break}if(n=e.arg,r=parseInt(n,10),!isFinite(r)){if(!RA(n))throw new Error("invalid integer. Value: "+n);r=0}return r<0&&(e.specifier==="u"||t!==10)&&(r=4294967295+r+1),r<0?(n=(-r).toString(t),e.precision&&(n=$v(n,e.precision,e.padRight)),n="-"+n):(n=r.toString(t),!r&&!e.precision?n="":e.precision&&(n=$v(n,e.precision,e.padRight)),e.sign&&(n=e.sign+n)),t===16&&(e.alternate&&(n="0x"+n),n=e.specifier===_v.call(e.specifier)?_v.call(n):FA.call(n)),t===8&&e.alternate&&n.charAt(0)!=="0"&&(n="0"+n),n}var jA=DA;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function zA(e){return typeof e=="string"}var BA=zA;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var UA=Mb,VA=Math.abs,WA=String.prototype.toLowerCase,wv=String.prototype.toUpperCase,rr=String.prototype.replace,HA=/e\+(\d)$/,GA=/e-(\d)$/,YA=/^(\d+)$/,XA=/^(\d+)e/,KA=/\.0$/,QA=/\.0*e/,ZA=/(\..*[^0])0*e/;function qA(e){var t,n,r=parseFloat(e.arg);if(!isFinite(r)){if(!UA(e.arg))throw new Error("invalid floating-point number. Value: "+n);r=e.arg}switch(e.specifier){case"e":case"E":n=r.toExponential(e.precision);break;case"f":case"F":n=r.toFixed(e.precision);break;case"g":case"G":VA(r)<1e-4?(t=e.precision,t>0&&(t-=1),n=r.toExponential(t)):n=r.toPrecision(e.precision),e.alternate||(n=rr.call(n,ZA,"$1e"),n=rr.call(n,QA,"e"),n=rr.call(n,KA,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=rr.call(n,HA,"e+0$1"),n=rr.call(n,GA,"e-0$1"),e.alternate&&(n=rr.call(n,YA,"$1."),n=rr.call(n,XA,"$1.e")),r>=0&&e.sign&&(n=e.sign+n),n=e.specifier===wv.call(e.specifier)?wv.call(n):WA.call(n),n}var JA=qA;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function xv(e){var t="",n;for(n=0;n<e;n++)t+=" ";return t}function eT(e,t,n){var r=t-e.length;return r<0||(e=n?e+xv(r):xv(r)+e),e}var tT=eT;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nT=jA,rT=BA,iT=JA,oT=tT,aT=Ob,sT=String.fromCharCode,Ka=isNaN,lT=Array.isArray;function uT(e){var t={};return t.specifier=e.specifier,t.precision=e.precision===void 0?1:e.precision,t.width=e.width,t.flags=e.flags||"",t.mapping=e.mapping,t}function cT(e){var t,n,r,i,o,a,s,l,u;if(!lT(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",s=1,l=0;l<e.length;l++)if(r=e[l],rT(r))a+=r;else{if(t=r.precision!==void 0,r=uT(r),!r.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+r+"`.");for(r.mapping&&(s=r.mapping),n=r.flags,u=0;u<n.length;u++)switch(i=n.charAt(u),i){case" ":r.sign=" ";break;case"+":r.sign="+";break;case"-":r.padRight=!0,r.padZeros=!1;break;case"0":r.padZeros=n.indexOf("-")<0;break;case"#":r.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if(r.width==="*"){if(r.width=parseInt(arguments[s],10),s+=1,Ka(r.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+r.width+"`.");r.width<0&&(r.padRight=!0,r.width=-r.width)}if(t&&r.precision==="*"){if(r.precision=parseInt(arguments[s],10),s+=1,Ka(r.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+r.precision+"`.");r.precision<0&&(r.precision=1,t=!1)}switch(r.arg=arguments[s],r.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(r.padZeros=!1),r.arg=nT(r);break;case"s":r.maxWidth=t?r.precision:-1;break;case"c":if(!Ka(r.arg)){if(o=parseInt(r.arg,10),o<0||o>127)throw new Error("invalid character code. Value: "+r.arg);r.arg=Ka(o)?String(r.arg):sT(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(r.precision=6),r.arg=iT(r);break;default:throw new Error("invalid specifier: "+r.specifier)}r.maxWidth>=0&&r.arg.length>r.maxWidth&&(r.arg=r.arg.substring(0,r.maxWidth)),r.padZeros?r.arg=aT(r.arg,r.width||r.precision,r.padRight):r.width&&(r.arg=oT(r.arg,r.width,r.padRight)),a+=r.arg||"",s+=1}return a}var fT=cT;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dT=fT,hT=dT;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qa=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function pT(e){var t={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return e[4]==="."&&e[5]===void 0&&(t.precision="1"),t}function gT(e){var t,n,r,i;for(n=[],i=0,r=Qa.exec(e);r;)t=e.slice(i,Qa.lastIndex-r[0].length),t.length&&n.push(t),n.push(pT(r)),i=Qa.lastIndex,r=Qa.exec(e);return t=e.slice(i),t.length&&n.push(t),n}var vT=gT;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mT=vT,yT=mT;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function bT(e){return typeof e=="string"}var $T=bT;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _T=hT,wT=yT,xT=$T;function Ib(e){var t,n,r;if(!xT(e))throw new TypeError(Ib("invalid argument. First argument must be a string. Value: `%s`.",e));for(t=wT(e),n=new Array(arguments.length),n[0]=t,r=1;r<n.length;r++)n[r]=arguments[r];return _T.apply(null,n)}var ST=Ib;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kT=ST,ie=kT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sv=ie,Pi=Object.prototype,kv=Pi.toString,Ev=Pi.__defineGetter__,Av=Pi.__defineSetter__,ET=Pi.__lookupGetter__,AT=Pi.__lookupSetter__;function TT(e,t,n){var r,i,o,a;if(typeof e!="object"||e===null||kv.call(e)==="[object Array]")throw new TypeError(Sv("invalid argument. First argument must be an object. Value: `%s`.",e));if(typeof n!="object"||n===null||kv.call(n)==="[object Array]")throw new TypeError(Sv("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if(i="value"in n,i&&(ET.call(e,t)||AT.call(e,t)?(r=e.__proto__,e.__proto__=Pi,delete e[t],e[t]=n.value,e.__proto__=r):e[t]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&Ev&&Ev.call(e,t,n.get),a&&Av&&Av.call(e,t,n.set),e}var CT=TT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var PT=PA,MT=OA,OT=CT,uf;PT()?uf=MT:uf=OT;var ch=uf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var IT=ch;function LT(e,t,n){IT(e,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var NT=LT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var RT=NT,Ut=RT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var FT=ch;function DT(e,t,n){FT(e,t,{configurable:!1,enumerable:!1,get:n})}var jT=DT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zT=jT,Lb=zT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var BT=ch;function UT(e,t,n,r){BT(e,t,{configurable:!1,enumerable:!1,get:n,set:r})}var VT=UT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var WT=VT,Nb=WT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function HT(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}var GT=HT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var YT=GT,XT=YT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var KT=XT,QT=KT();function ZT(){return QT&&typeof Symbol.toStringTag=="symbol"}var qT=ZT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var JT=qT,fh=JT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eC=Object.prototype.toString,Rb=eC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tC=Rb;function nC(e){return tC.call(e)}var rC=nC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iC=Object.prototype.hasOwnProperty;function oC(e,t){return e==null?!1:iC.call(e,t)}var aC=oC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sC=aC,Ol=sC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lC=typeof Symbol=="function"?Symbol:void 0,uC=lC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cC=uC,Tr=cC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tv=Tr,fC=typeof Tv=="function"?Tv.toStringTag:"",dC=fC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hC=Ol,Zi=dC,Iu=Rb;function pC(e){var t,n,r;if(e==null)return Iu.call(e);n=e[Zi],t=hC(e,Zi);try{e[Zi]=void 0}catch{return Iu.call(e)}return r=Iu.call(e),t?e[Zi]=n:delete e[Zi],r}var gC=pC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vC=fh,mC=rC,yC=gC,cf;vC()?cf=yC:cf=mC;var st=cf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bC=st,ff;function $C(e){return bC(e)==="[object Array]"}Array.isArray?ff=Array.isArray:ff=$C;var _C=ff;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wC=_C,xC=wC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var SC=xC;function kC(e){return typeof e=="object"&&e!==null&&!SC(e)}var EC=kC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var AC=EC,TC=AC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var CC=/./,PC=CC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function MC(e){return typeof e=="boolean"}var Fb=MC;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var OC=Boolean,IC=OC;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var LC=IC,dh=LC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var NC=Boolean.prototype.toString,RC=NC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var FC=RC;function DC(e){try{return FC.call(e),!0}catch{return!1}}var jC=DC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zC=fh,BC=st,UC=dh,VC=jC,WC=zC();function HC(e){return typeof e=="object"?e instanceof UC?!0:WC?VC(e):BC(e)==="[object Boolean]":!1}var Db=HC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var GC=Fb,YC=Db;function XC(e){return GC(e)||YC(e)}var KC=XC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jb=Ut,hh=KC,QC=Fb,ZC=Db;jb(hh,"isPrimitive",QC);jb(hh,"isObject",ZC);var zb=hh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function qC(){return new Function("return this;")()}var JC=qC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e3=typeof self=="object"?self:null,t3=e3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n3=typeof window=="object"?window:null,r3=n3;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var i3=typeof globalThis=="object"?globalThis:null,o3=i3;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a3=zb.isPrimitive,s3=ie,l3=JC,Cv=t3,Pv=r3,Mv=o3;function u3(e){if(arguments.length){if(!a3(e))throw new TypeError(s3("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return l3()}if(Mv)return Mv;if(Cv)return Cv;if(Pv)return Pv;throw new Error("unexpected error. Unable to resolve global object.")}var c3=u3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var f3=c3,Ov=f3(),d3=Ov.document&&Ov.document.childNodes,h3=d3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var p3=Int8Array,g3=p3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var v3=PC,m3=h3,y3=g3;function b3(){return typeof v3=="function"||typeof y3=="object"||typeof m3=="function"}var $3=b3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function _3(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}var w3=_3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var x3=w3,S3=x3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k3=S3,E3=k3();function A3(){return E3&&typeof Symbol.toStringTag=="symbol"}var T3=A3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var C3=T3,P3=C3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var M3=Object.prototype.toString,Bb=M3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O3=Bb;function I3(e){return O3.call(e)}var L3=I3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var N3=Object.prototype.hasOwnProperty;function R3(e,t){return e==null?!1:N3.call(e,t)}var F3=R3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D3=F3,j3=D3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Iv=Tr,z3=typeof Iv=="function"?Iv.toStringTag:"",B3=z3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U3=j3,qi=B3,Lu=Bb;function V3(e){var t,n,r;if(e==null)return Lu.call(e);n=e[qi],t=U3(e,qi);try{e[qi]=void 0}catch{return Lu.call(e)}return r=Lu.call(e),t?e[qi]=n:delete e[qi],r}var W3=V3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var H3=P3,G3=L3,Y3=W3,df;H3()?df=Y3:df=G3;var Ub=df;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var X3=typeof Object.defineProperty=="function"?Object.defineProperty:null,K3=X3;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Q3=K3;function Z3(){try{return Q3({},"x",{}),!0}catch{return!1}}var q3=Z3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var J3=Object.defineProperty,eP=J3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lv=ie,Mi=Object.prototype,Nv=Mi.toString,Rv=Mi.__defineGetter__,Fv=Mi.__defineSetter__,tP=Mi.__lookupGetter__,nP=Mi.__lookupSetter__;function rP(e,t,n){var r,i,o,a;if(typeof e!="object"||e===null||Nv.call(e)==="[object Array]")throw new TypeError(Lv("invalid argument. First argument must be an object. Value: `%s`.",e));if(typeof n!="object"||n===null||Nv.call(n)==="[object Array]")throw new TypeError(Lv("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if(i="value"in n,i&&(tP.call(e,t)||nP.call(e,t)?(r=e.__proto__,e.__proto__=Mi,delete e[t],e[t]=n.value,e.__proto__=r):e[t]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&Rv&&Rv.call(e,t,n.get),a&&Fv&&Fv.call(e,t,n.set),e}var iP=rP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oP=q3,aP=eP,sP=iP,hf;oP()?hf=aP:hf=sP;var lP=hf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uP=lP;function cP(e,t,n){uP(e,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var fP=cP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dP=fP,Vb=dP;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function hP(){return/^\s*function\s*([^(]*)/i}var Wb=hP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pP=Wb,gP=pP(),vP=gP;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mP=Vb,Hb=Wb,yP=vP;mP(Hb,"REGEXP",yP);var bP=Hb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $P=Ub,pf;function _P(e){return $P(e)==="[object Array]"}Array.isArray?pf=Array.isArray:pf=_P;var wP=pf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xP=wP,SP=xP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kP=SP,EP=ie;function AP(e){if(typeof e!="function")throw new TypeError(EP("invalid argument. Must provide a function. Value: `%s`.",e));return t;function t(n){var r,i;if(!kP(n)||(r=n.length,r===0))return!1;for(i=0;i<r;i++)if(e(n[i])===!1)return!1;return!0}}var TP=AP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var CP=TP,PP=CP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function MP(e){return e!==null&&typeof e=="object"}var OP=MP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var IP=Vb,LP=PP,ph=OP,NP=LP(ph);IP(ph,"isObjectLikeArray",NP);var RP=ph;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var FP=RP;function DP(e){return FP(e)&&(e._isBuffer||e.constructor&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e))}var jP=DP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zP=jP,BP=zP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var UP=Ub,VP=bP.REGEXP,WP=BP;function HP(e){var t,n,r;if(n=UP(e).slice(8,-1),(n==="Object"||n==="Error")&&e.constructor){if(r=e.constructor,typeof r.name=="string")return r.name;if(t=VP.exec(r.toString()),t)return t[1]}return WP(e)?"Buffer":n}var GP=HP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var YP=GP,qt=YP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var XP=qt;function KP(e){var t;return e===null?"null":(t=typeof e,t==="object"?XP(e).toLowerCase():t)}var QP=KP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ZP=qt;function qP(e){return ZP(e).toLowerCase()}var JP=qP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eM=$3,tM=QP,nM=JP,rM=eM()?nM:tM,iM=rM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oM=iM;function aM(e){return oM(e)==="function"}var sM=aM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lM=sM,Il=lM;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uM=Object,cM=uM;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fM=cM,dM=fM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hM=Object.getPrototypeOf,pM=hM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function gM(e){return e.__proto__}var vM=gM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mM=st,yM=vM;function bM(e){var t=yM(e);return t||t===null?t:mM(e.constructor)==="[object Function]"?e.constructor.prototype:e instanceof Object?Object.prototype:null}var $M=bM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _M=Il,wM=pM,xM=$M,gf;_M(Object.getPrototypeOf)?gf=wM:gf=xM;var SM=gf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kM=dM,EM=SM;function AM(e){return e==null?null:(e=kM(e),EM(e))}var TM=AM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var CM=TM,Ll=CM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var PM=TC,Dv=Il,MM=Ll,_s=Ol,OM=st,IM=Object.prototype;function LM(e){var t;for(t in e)if(!_s(e,t))return!1;return!0}function NM(e){var t;return PM(e)?(t=MM(e),t?!_s(e,"constructor")&&_s(t,"constructor")&&Dv(t.constructor)&&OM(t.constructor)==="[object Function]"&&_s(t,"isPrototypeOf")&&Dv(t.isPrototypeOf)&&(t===IM||LM(e)):!0):!1}var RM=NM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var FM=RM,Gb=FM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function DM(e){return t;function t(){return e}}var jM=DM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zM=jM,BM=zM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function UM(){}var VM=UM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var WM=VM,HM=WM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var GM=Math.floor,YM=GM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var XM=YM,Yb=XM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var KM=Yb;function QM(e){return KM(e)===e}var ZM=QM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qM=ZM,Xb=qM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var JM=9007199254740991,eO=JM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tO=Xb,nO=eO;function rO(e){return typeof e=="object"&&e!==null&&typeof e.length=="number"&&tO(e.length)&&e.length>=0&&e.length<=nO}var iO=rO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oO=iO,aO=oO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sO=st,lO=typeof Uint32Array=="function";function uO(e){return lO&&e instanceof Uint32Array||sO(e)==="[object Uint32Array]"}var cO=uO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fO=cO,Kb=fO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function dO(e){return typeof e=="number"}var Qb=dO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hO=Number;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pO=hO,gh=pO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gO=gh,vO=gO.prototype.toString,mO=vO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yO=mO;function bO(e){try{return yO.call(e),!0}catch{return!1}}var $O=bO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _O=fh,wO=st,xO=gh,SO=$O,kO=_O();function EO(e){return typeof e=="object"?e instanceof xO?!0:kO?SO(e):wO(e)==="[object Number]":!1}var Zb=EO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var AO=Qb,TO=Zb;function CO(e){return AO(e)||TO(e)}var PO=CO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qb=Ut,vh=PO,MO=Qb,OO=Zb;qb(vh,"isPrimitive",MO);qb(vh,"isObject",OO);var sa=vh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var IO=Number.POSITIVE_INFINITY,Nl=IO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var LO=gh,NO=LO.NEGATIVE_INFINITY,RO=NO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var FO=Nl,DO=RO,jO=Xb;function zO(e){return e<FO&&e>DO&&jO(e)}var Jb=zO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var BO=sa.isPrimitive,UO=Jb;function VO(e){return BO(e)&&UO(e)}var e$=VO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var WO=sa.isObject,HO=Jb;function GO(e){return WO(e)&&HO(e.valueOf())}var t$=GO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var YO=e$,XO=t$;function KO(e){return YO(e)||XO(e)}var QO=KO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n$=Ut,mh=QO,ZO=e$,qO=t$;n$(mh,"isPrimitive",ZO);n$(mh,"isObject",qO);var r$=mh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var JO=r$.isPrimitive;function eI(e){return JO(e)&&e>0}var i$=eI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tI=r$.isObject;function nI(e){return tI(e)&&e.valueOf()>0}var o$=nI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rI=i$,iI=o$;function oI(e){return rI(e)||iI(e)}var aI=oI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a$=Ut,yh=aI,sI=i$,lI=o$;a$(yh,"isPrimitive",sI);a$(yh,"isObject",lI);var uI=yh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cI=9007199254740991,fI=cI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dI=4294967295,bh=dI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hI=typeof Uint32Array=="function"?Uint32Array:null,pI=hI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gI=Kb,Nu=bh,jv=pI;function vI(){var e,t;if(typeof jv!="function")return!1;try{t=[1,3.14,-3.14,Nu+1,Nu+2],t=new jv(t),e=gI(t)&&t[0]===1&&t[1]===3&&t[2]===Nu-2&&t[3]===0&&t[4]===1}catch{e=!1}return e}var mI=vI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yI=mI,bI=yI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $I=typeof Uint32Array=="function"?Uint32Array:void 0,_I=$I;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function wI(){throw new Error("not implemented")}var xI=wI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var SI=bI,kI=_I,EI=xI,vf;SI()?vf=kI:vf=EI;var $h=vf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var AI=Nl;function TI(e){return e===0&&1/e===AI}var CI=TI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var PI=CI,MI=PI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function OI(e){return e!==e}var II=OI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var LI=II,Rl=LI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var NI=MI,zv=Rl,Ru=Nl;function RI(e,t){return zv(e)||zv(t)?NaN:e===Ru||t===Ru?Ru:e===t&&e===0?NI(e)?e:t:e>t?e:t}var FI=RI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var DI=FI,jI=DI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bv=65535;function zI(e,t){var n,r,i,o,a,s;return e>>>=0,t>>>=0,i=e>>>16>>>0,o=t>>>16>>>0,a=(e&Bv)>>>0,s=(t&Bv)>>>0,n=a*s>>>0,r=i*s+a*o<<16>>>0,n+r>>>0}var BI=zI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var UI=BI,VI=UI;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Uv="function";function WI(e){return typeof e.get===Uv&&typeof e.set===Uv}var HI=WI;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var GI=HI,YI=GI;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vv={float64:XI,float32:KI,int32:QI,int16:ZI,int8:qI,uint32:JI,uint16:e4,uint8:t4,uint8c:n4,generic:r4,default:i4};function XI(e,t){return e[t]}function KI(e,t){return e[t]}function QI(e,t){return e[t]}function ZI(e,t){return e[t]}function qI(e,t){return e[t]}function JI(e,t){return e[t]}function e4(e,t){return e[t]}function t4(e,t){return e[t]}function n4(e,t){return e[t]}function r4(e,t){return e[t]}function i4(e,t){return e[t]}function o4(e){var t=Vv[e];return typeof t=="function"?t:Vv.default}var a4=o4;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var s4=a4,_h=s4;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wv={float64:l4,float32:u4,int32:c4,int16:f4,int8:d4,uint32:h4,uint16:p4,uint8:g4,uint8c:v4,generic:m4,default:y4};function l4(e,t,n){e[t]=n}function u4(e,t,n){e[t]=n}function c4(e,t,n){e[t]=n}function f4(e,t,n){e[t]=n}function d4(e,t,n){e[t]=n}function h4(e,t,n){e[t]=n}function p4(e,t,n){e[t]=n}function g4(e,t,n){e[t]=n}function v4(e,t,n){e[t]=n}function m4(e,t,n){e[t]=n}function y4(e,t,n){e[t]=n}function b4(e){var t=Wv[e];return typeof t=="function"?t:Wv.default}var $4=b4;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _4=$4,w4=_4;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hv={complex128:x4,complex64:S4,default:k4};function x4(e,t){return e.get(t)}function S4(e,t){return e.get(t)}function k4(e,t){return e.get(t)}function E4(e){var t=Hv[e];return typeof t=="function"?t:Hv.default}var A4=E4;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var T4=A4,wh=T4;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gv={complex128:C4,complex64:P4,default:M4};function C4(e,t,n){e.set(n,t)}function P4(e,t,n){e.set(n,t)}function M4(e,t,n){e.set(n,t)}function O4(e){var t=Gv[e];return typeof t=="function"?t:Gv.default}var I4=O4;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var L4=I4,N4=L4;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var R4=typeof Object.defineProperty=="function"?Object.defineProperty:null,F4=R4;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D4=F4;function j4(){try{return D4({},"x",{}),!0}catch{return!1}}var z4=j4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B4=Object.defineProperty,U4=B4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yv=ie,Oi=Object.prototype,Xv=Oi.toString,Kv=Oi.__defineGetter__,Qv=Oi.__defineSetter__,V4=Oi.__lookupGetter__,W4=Oi.__lookupSetter__;function H4(e,t,n){var r,i,o,a;if(typeof e!="object"||e===null||Xv.call(e)==="[object Array]")throw new TypeError(Yv("invalid argument. First argument must be an object. Value: `%s`.",e));if(typeof n!="object"||n===null||Xv.call(n)==="[object Array]")throw new TypeError(Yv("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if(i="value"in n,i&&(V4.call(e,t)||W4.call(e,t)?(r=e.__proto__,e.__proto__=Oi,delete e[t],e[t]=n.value,e.__proto__=r):e[t]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&Kv&&Kv.call(e,t,n.get),a&&Qv&&Qv.call(e,t,n.set),e}var G4=H4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Y4=z4,X4=U4,K4=G4,mf;Y4()?mf=X4:mf=K4;var Q4=mf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Z4=Q4;function q4(e,t,n){Z4(e,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var J4=q4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eL=J4,tL=eL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function nL(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}var rL=nL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iL=rL,oL=iL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aL=oL,sL=aL();function lL(){return sL&&typeof Symbol.toStringTag=="symbol"}var uL=lL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cL=uL,fL=cL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dL=Object.prototype.toString,s$=dL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hL=s$;function pL(e){return hL.call(e)}var gL=pL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vL=Object.prototype.hasOwnProperty;function mL(e,t){return e==null?!1:vL.call(e,t)}var yL=mL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bL=yL,$L=bL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zv=Tr,_L=typeof Zv=="function"?Zv.toStringTag:"",wL=_L;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xL=$L,Ji=wL,Fu=s$;function SL(e){var t,n,r;if(e==null)return Fu.call(e);n=e[Ji],t=xL(e,Ji);try{e[Ji]=void 0}catch{return Fu.call(e)}return r=Fu.call(e),t?e[Ji]=n:delete e[Ji],r}var kL=SL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var EL=fL,AL=gL,TL=kL,yf;EL()?yf=TL:yf=AL;var Jt=yf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var CL=Jt,bf;function PL(e){return CL(e)==="[object Array]"}Array.isArray?bf=Array.isArray:bf=PL;var ML=bf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var OL=ML,l$=OL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var IL=l$,LL=ie;function NL(e){if(typeof e!="function")throw new TypeError(LL("invalid argument. Must provide a function. Value: `%s`.",e));return t;function t(n){var r,i;if(!IL(n)||(r=n.length,r===0))return!1;for(i=0;i<r;i++)if(e(n[i])===!1)return!1;return!0}}var RL=NL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var FL=RL,DL=FL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function jL(e){return e!==null&&typeof e=="object"}var zL=jL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var BL=tL,UL=DL,xh=zL,VL=UL(xh);BL(xh,"isObjectLikeArray",VL);var WL=xh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var HL=WL;function GL(e){return HL(e)&&(e._isBuffer||e.constructor&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e))}var YL=GL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var XL=YL,KL=XL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var QL={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},ZL=QL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qL=Jt,JL=typeof Float64Array=="function";function eN(e){return JL&&e instanceof Float64Array||qL(e)==="[object Float64Array]"}var tN=eN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nN=tN,rN=nN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iN=typeof Float64Array=="function"?Float64Array:null,oN=iN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aN=rN,qv=oN;function sN(){var e,t;if(typeof qv!="function")return!1;try{t=new qv([1,3.14,-3.14,NaN]),e=aN(t)&&t[0]===1&&t[1]===3.14&&t[2]===-3.14&&t[3]!==t[3]}catch{e=!1}return e}var lN=sN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uN=lN,cN=uN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fN=typeof Float64Array=="function"?Float64Array:void 0,dN=fN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function hN(){throw new Error("not implemented")}var pN=hN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gN=cN,vN=dN,mN=pN,$f;gN()?$f=vN:$f=mN;var yN=$f;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bN=Jt,$N=typeof Float32Array=="function";function _N(e){return $N&&e instanceof Float32Array||bN(e)==="[object Float32Array]"}var wN=_N;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xN=wN,SN=xN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kN=Number.POSITIVE_INFINITY,EN=kN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var AN=typeof Float32Array=="function"?Float32Array:null,TN=AN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var CN=SN,PN=EN,Jv=TN;function MN(){var e,t;if(typeof Jv!="function")return!1;try{t=new Jv([1,3.14,-3.14,5e40]),e=CN(t)&&t[0]===1&&t[1]===3.140000104904175&&t[2]===-3.140000104904175&&t[3]===PN}catch{e=!1}return e}var ON=MN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var IN=ON,LN=IN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var NN=typeof Float32Array=="function"?Float32Array:void 0,RN=NN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function FN(){throw new Error("not implemented")}var DN=FN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jN=LN,zN=RN,BN=DN,_f;jN()?_f=zN:_f=BN;var UN=_f;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var VN=Jt,WN=typeof Uint32Array=="function";function HN(e){return WN&&e instanceof Uint32Array||VN(e)==="[object Uint32Array]"}var GN=HN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var YN=GN,XN=YN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var KN=4294967295,QN=KN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ZN=typeof Uint32Array=="function"?Uint32Array:null,qN=ZN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var JN=XN,Du=QN,em=qN;function eR(){var e,t;if(typeof em!="function")return!1;try{t=[1,3.14,-3.14,Du+1,Du+2],t=new em(t),e=JN(t)&&t[0]===1&&t[1]===3&&t[2]===Du-2&&t[3]===0&&t[4]===1}catch{e=!1}return e}var tR=eR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nR=tR,rR=nR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iR=typeof Uint32Array=="function"?Uint32Array:void 0,oR=iR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function aR(){throw new Error("not implemented")}var sR=aR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lR=rR,uR=oR,cR=sR,wf;lR()?wf=uR:wf=cR;var fR=wf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dR=Jt,hR=typeof Int32Array=="function";function pR(e){return hR&&e instanceof Int32Array||dR(e)==="[object Int32Array]"}var gR=pR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vR=gR,mR=vR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yR=2147483647,bR=yR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $R=-2147483648,_R=$R;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wR=typeof Int32Array=="function"?Int32Array:null,xR=wR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var SR=mR,kR=bR,ER=_R,tm=xR;function AR(){var e,t;if(typeof tm!="function")return!1;try{t=new tm([1,3.14,-3.14,kR+1]),e=SR(t)&&t[0]===1&&t[1]===3&&t[2]===-3&&t[3]===ER}catch{e=!1}return e}var TR=AR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var CR=TR,PR=CR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var MR=typeof Int32Array=="function"?Int32Array:void 0,OR=MR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function IR(){throw new Error("not implemented")}var LR=IR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var NR=PR,RR=OR,FR=LR,xf;NR()?xf=RR:xf=FR;var DR=xf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jR=Jt,zR=typeof Uint16Array=="function";function BR(e){return zR&&e instanceof Uint16Array||jR(e)==="[object Uint16Array]"}var UR=BR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var VR=UR,WR=VR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var HR=65535,GR=HR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var YR=typeof Uint16Array=="function"?Uint16Array:null,XR=YR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var KR=WR,ju=GR,nm=XR;function QR(){var e,t;if(typeof nm!="function")return!1;try{t=[1,3.14,-3.14,ju+1,ju+2],t=new nm(t),e=KR(t)&&t[0]===1&&t[1]===3&&t[2]===ju-2&&t[3]===0&&t[4]===1}catch{e=!1}return e}var ZR=QR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qR=ZR,JR=qR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eF=typeof Uint16Array=="function"?Uint16Array:void 0,tF=eF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function nF(){throw new Error("not implemented")}var rF=nF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iF=JR,oF=tF,aF=rF,Sf;iF()?Sf=oF:Sf=aF;var sF=Sf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lF=Jt,uF=typeof Int16Array=="function";function cF(e){return uF&&e instanceof Int16Array||lF(e)==="[object Int16Array]"}var fF=cF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dF=fF,hF=dF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pF=32767,gF=pF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vF=-32768,mF=vF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yF=typeof Int16Array=="function"?Int16Array:null,bF=yF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $F=hF,_F=gF,wF=mF,rm=bF;function xF(){var e,t;if(typeof rm!="function")return!1;try{t=new rm([1,3.14,-3.14,_F+1]),e=$F(t)&&t[0]===1&&t[1]===3&&t[2]===-3&&t[3]===wF}catch{e=!1}return e}var SF=xF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kF=SF,EF=kF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var AF=typeof Int16Array=="function"?Int16Array:void 0,TF=AF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function CF(){throw new Error("not implemented")}var PF=CF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var MF=EF,OF=TF,IF=PF,kf;MF()?kf=OF:kf=IF;var LF=kf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var NF=Jt,RF=typeof Uint8Array=="function";function FF(e){return RF&&e instanceof Uint8Array||NF(e)==="[object Uint8Array]"}var DF=FF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jF=DF,zF=jF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var BF=255,UF=BF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var VF=typeof Uint8Array=="function"?Uint8Array:null,WF=VF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var HF=zF,zu=UF,im=WF;function GF(){var e,t;if(typeof im!="function")return!1;try{t=[1,3.14,-3.14,zu+1,zu+2],t=new im(t),e=HF(t)&&t[0]===1&&t[1]===3&&t[2]===zu-2&&t[3]===0&&t[4]===1}catch{e=!1}return e}var YF=GF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var XF=YF,KF=XF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var QF=typeof Uint8Array=="function"?Uint8Array:void 0,ZF=QF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function qF(){throw new Error("not implemented")}var JF=qF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eD=KF,tD=ZF,nD=JF,Ef;eD()?Ef=tD:Ef=nD;var rD=Ef;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iD=Jt,oD=typeof Uint8ClampedArray=="function";function aD(e){return oD&&e instanceof Uint8ClampedArray||iD(e)==="[object Uint8ClampedArray]"}var sD=aD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lD=sD,uD=lD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cD=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null,fD=cD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dD=uD,om=fD;function hD(){var e,t;if(typeof om!="function")return!1;try{t=new om([-1,0,1,3.14,4.99,255,256]),e=dD(t)&&t[0]===0&&t[1]===0&&t[2]===1&&t[3]===3&&t[4]===5&&t[5]===255&&t[6]===255}catch{e=!1}return e}var pD=hD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gD=pD,vD=gD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mD=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0,yD=mD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function bD(){throw new Error("not implemented")}var $D=bD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _D=vD,wD=yD,xD=$D,Af;_D()?Af=wD:Af=xD;var SD=Af;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kD=Jt,ED=typeof Int8Array=="function";function AD(e){return ED&&e instanceof Int8Array||kD(e)==="[object Int8Array]"}var TD=AD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var CD=TD,PD=CD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var MD=127,OD=MD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ID=-128,LD=ID;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ND=typeof Int8Array=="function"?Int8Array:null,RD=ND;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var FD=PD,DD=OD,jD=LD,am=RD;function zD(){var e,t;if(typeof am!="function")return!1;try{t=new am([1,3.14,-3.14,DD+1]),e=FD(t)&&t[0]===1&&t[1]===3&&t[2]===-3&&t[3]===jD}catch{e=!1}return e}var BD=zD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var UD=BD,VD=UD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var WD=typeof Int8Array=="function"?Int8Array:void 0,HD=WD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function GD(){throw new Error("not implemented")}var YD=GD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var XD=VD,KD=HD,QD=YD,Tf;XD()?Tf=KD:Tf=QD;var ZD=Tf;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qD=typeof Object.defineProperty=="function"?Object.defineProperty:null,JD=qD;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e5=JD;function t5(){try{return e5({},"x",{}),!0}catch{return!1}}var n5=t5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r5=Object.defineProperty,i5=r5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sm=ie,Ii=Object.prototype,lm=Ii.toString,um=Ii.__defineGetter__,cm=Ii.__defineSetter__,o5=Ii.__lookupGetter__,a5=Ii.__lookupSetter__;function s5(e,t,n){var r,i,o,a;if(typeof e!="object"||e===null||lm.call(e)==="[object Array]")throw new TypeError(sm("invalid argument. First argument must be an object. Value: `%s`.",e));if(typeof n!="object"||n===null||lm.call(n)==="[object Array]")throw new TypeError(sm("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if(i="value"in n,i&&(o5.call(e,t)||a5.call(e,t)?(r=e.__proto__,e.__proto__=Ii,delete e[t],e[t]=n.value,e.__proto__=r):e[t]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&um&&um.call(e,t,n.get),a&&cm&&cm.call(e,t,n.set),e}var l5=s5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u5=n5,c5=i5,f5=l5,Cf;u5()?Cf=c5:Cf=f5;var Fl=Cf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var d5=Fl;function h5(e,t,n){d5(e,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var p5=h5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g5=p5,Cr=g5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function v5(e){return typeof e=="number"}var u$=v5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function m5(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}var y5=m5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b5=y5,$5=b5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _5=$5,w5=_5();function x5(){return w5&&typeof Symbol.toStringTag=="symbol"}var S5=x5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k5=S5,Sh=k5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var E5=Object.prototype.toString,c$=E5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var A5=c$;function T5(e){return A5.call(e)}var C5=T5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var P5=Object.prototype.hasOwnProperty;function M5(e,t){return e==null?!1:P5.call(e,t)}var O5=M5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var I5=O5,f$=I5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fm=Tr,L5=typeof fm=="function"?fm.toStringTag:"",N5=L5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var R5=f$,eo=N5,Bu=c$;function F5(e){var t,n,r;if(e==null)return Bu.call(e);n=e[eo],t=R5(e,eo);try{e[eo]=void 0}catch{return Bu.call(e)}return r=Bu.call(e),t?e[eo]=n:delete e[eo],r}var D5=F5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j5=Sh,z5=C5,B5=D5,Pf;j5()?Pf=B5:Pf=z5;var Li=Pf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U5=Number;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V5=U5,kh=V5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var W5=kh,H5=W5.prototype.toString,G5=H5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Y5=G5;function X5(e){try{return Y5.call(e),!0}catch{return!1}}var K5=X5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Q5=Sh,Z5=Li,q5=kh,J5=K5,ej=Q5();function tj(e){return typeof e=="object"?e instanceof q5?!0:ej?J5(e):Z5(e)==="[object Number]":!1}var d$=tj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nj=u$,rj=d$;function ij(e){return nj(e)||rj(e)}var oj=ij;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var h$=Cr,Eh=oj,aj=u$,sj=d$;h$(Eh,"isPrimitive",aj);h$(Eh,"isObject",sj);var Dl=Eh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lj=Number.POSITIVE_INFINITY,p$=lj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uj=kh,cj=uj.NEGATIVE_INFINITY,fj=cj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dj=Math.floor,hj=dj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pj=hj,gj=pj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vj=gj;function mj(e){return vj(e)===e}var yj=mj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bj=yj,la=bj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $j=p$,_j=fj,wj=la;function xj(e){return e<$j&&e>_j&&wj(e)}var g$=xj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sj=Dl.isPrimitive,kj=g$;function Ej(e){return Sj(e)&&kj(e)}var v$=Ej;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Aj=Dl.isObject,Tj=g$;function Cj(e){return Aj(e)&&Tj(e.valueOf())}var m$=Cj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pj=v$,Mj=m$;function Oj(e){return Pj(e)||Mj(e)}var Ij=Oj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y$=Cr,Ah=Ij,Lj=v$,Nj=m$;y$(Ah,"isPrimitive",Lj);y$(Ah,"isObject",Nj);var b$=Ah;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rj=b$.isPrimitive;function Fj(e){return Rj(e)&&e>=0}var $$=Fj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dj=b$.isObject;function jj(e){return Dj(e)&&e.valueOf()>=0}var _$=jj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zj=$$,Bj=_$;function Uj(e){return zj(e)||Bj(e)}var Vj=Uj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var w$=Cr,Th=Vj,Wj=$$,Hj=_$;w$(Th,"isPrimitive",Wj);w$(Th,"isObject",Hj);var Gj=Th;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yj=4294967295,Xj=Yj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kj=la,Qj=Xj;function Zj(e){return typeof e=="object"&&e!==null&&typeof e.length=="number"&&Kj(e.length)&&e.length>=0&&e.length<=Qj}var qj=Zj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jj=qj,Ch=Jj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e6=9007199254740991,t6=e6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n6=la,r6=t6;function i6(e){return typeof e=="object"&&e!==null&&typeof e.length=="number"&&n6(e.length)&&e.length>=0&&e.length<=r6}var o6=i6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a6=o6,s6=a6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var l6=Li,u6=typeof ArrayBuffer=="function";function c6(e){return u6&&e instanceof ArrayBuffer||l6(e)==="[object ArrayBuffer]"}var f6=c6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var d6=f6,h6=d6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var p6=Li,Mf;function g6(e){return p6(e)==="[object Array]"}Array.isArray?Mf=Array.isArray:Mf=g6;var v6=Mf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var m6=v6,x$=m6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y6=x$;function b6(e){return typeof e=="object"&&e!==null&&!y6(e)}var $6=b6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _6=$6,w6=_6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var x6=/./,S6=x6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function k6(e){return typeof e=="boolean"}var S$=k6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var E6=Boolean.prototype.toString,A6=E6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var T6=A6;function C6(e){try{return T6.call(e),!0}catch{return!1}}var P6=C6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var M6=Sh,O6=Li,I6=dh,L6=P6,N6=M6();function R6(e){return typeof e=="object"?e instanceof I6?!0:N6?L6(e):O6(e)==="[object Boolean]":!1}var k$=R6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F6=S$,D6=k$;function j6(e){return F6(e)||D6(e)}var z6=j6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var E$=Cr,Ph=z6,B6=S$,U6=k$;E$(Ph,"isPrimitive",B6);E$(Ph,"isObject",U6);var V6=Ph;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function W6(){return new Function("return this;")()}var H6=W6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var G6=typeof self=="object"?self:null,Y6=G6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var X6=typeof window=="object"?window:null,K6=X6;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Q6=typeof globalThis=="object"?globalThis:null,Z6=Q6;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var q6=V6.isPrimitive,J6=ie,ez=H6,dm=Y6,hm=K6,pm=Z6;function tz(e){if(arguments.length){if(!q6(e))throw new TypeError(J6("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return ez()}if(pm)return pm;if(dm)return dm;if(hm)return hm;throw new Error("unexpected error. Unable to resolve global object.")}var nz=tz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rz=nz,gm=rz(),iz=gm.document&&gm.document.childNodes,oz=iz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var az=Int8Array,sz=az;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lz=S6,uz=oz,cz=sz;function fz(){return typeof lz=="function"||typeof cz=="object"||typeof uz=="function"}var dz=fz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hz=qt;function pz(e){var t;return e===null?"null":(t=typeof e,t==="object"?hz(e).toLowerCase():t)}var gz=pz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vz=qt;function mz(e){return vz(e).toLowerCase()}var yz=mz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bz=dz,$z=gz,_z=yz,wz=bz()?_z:$z,xz=wz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sz=xz;function kz(e){return Sz(e)==="function"}var Ez=kz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Az=Ez,Tz=Az;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Cz(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i",e}var Pz=Cz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Mz(){var e={};return e.type="Complex128",e.re=this.re,e.im=this.im,e}var Oz=Mz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vm=Dl.isPrimitive,mm=Fl,ua=Cr,ym=ie,Iz=Pz,Lz=Oz;function Pr(e,t){if(!(this instanceof Pr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!vm(e))throw new TypeError(ym("invalid argument. Real component must be a number. Value: `%s`.",e));if(!vm(t))throw new TypeError(ym("invalid argument. Imaginary component must be a number. Value: `%s`.",t));return mm(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),mm(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:t}),this}ua(Pr,"BYTES_PER_ELEMENT",8);ua(Pr.prototype,"BYTES_PER_ELEMENT",8);ua(Pr.prototype,"byteLength",16);ua(Pr.prototype,"toString",Iz);ua(Pr.prototype,"toJSON",Lz);var Nz=Pr;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rz=Nz,Fz=Rz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dz=typeof Math.fround=="function"?Math.fround:null,jz=Dz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zz=Li,Bz=typeof Float32Array=="function";function Uz(e){return Bz&&e instanceof Float32Array||zz(e)==="[object Float32Array]"}var Vz=Uz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wz=Vz,Hz=Wz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gz=typeof Float32Array=="function"?Float32Array:null,Yz=Gz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xz=Hz,Kz=p$,bm=Yz;function Qz(){var e,t;if(typeof bm!="function")return!1;try{t=new bm([1,3.14,-3.14,5e40]),e=Xz(t)&&t[0]===1&&t[1]===3.140000104904175&&t[2]===-3.140000104904175&&t[3]===Kz}catch{e=!1}return e}var Zz=Qz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qz=Zz,Jz=qz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e8=typeof Float32Array=="function"?Float32Array:void 0,t8=e8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function n8(){throw new Error("not implemented")}var r8=n8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var i8=Jz,o8=t8,a8=r8,Of;i8()?Of=o8:Of=a8;var Mh=Of;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var s8=Mh,$m=new s8(1);function l8(e){return $m[0]=e,$m[0]}var u8=l8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _m=jz,c8=u8,If;typeof _m=="function"?If=_m:If=c8;var f8=If;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function d8(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i",e}var h8=d8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function p8(){var e={};return e.type="Complex64",e.re=this.re,e.im=this.im,e}var g8=p8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wm=Dl.isPrimitive,xm=Fl,ca=Cr,Sm=f8,km=ie,v8=h8,m8=g8;function Mr(e,t){if(!(this instanceof Mr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!wm(e))throw new TypeError(km("invalid argument. Real component must be a number. Value: `%s`.",e));if(!wm(t))throw new TypeError(km("invalid argument. Imaginary component must be a number. Value: `%s`.",t));return xm(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Sm(e)}),xm(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Sm(t)}),this}ca(Mr,"BYTES_PER_ELEMENT",4);ca(Mr.prototype,"BYTES_PER_ELEMENT",4);ca(Mr.prototype,"byteLength",8);ca(Mr.prototype,"toString",v8);ca(Mr.prototype,"toJSON",m8);var y8=Mr;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b8=y8,A$=b8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $8=Fz,_8=A$;function w8(e){return e instanceof $8||e instanceof _8?!0:typeof e=="object"&&e!==null&&typeof e.re=="number"&&typeof e.im=="number"}var x8=w8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var S8=x8,jl=S8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k8=la;function E8(e){return k8(e/2)}var A8=E8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var T8=A8,C8=T8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var P8=f$,Za=Tr;function M8(){return typeof Za=="function"&&typeof Za("foo")=="symbol"&&P8(Za,"iterator")&&typeof Za.iterator=="symbol"}var O8=M8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var I8=O8,T$=I8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var L8=T$,N8=L8()?Symbol.iterator:null,R8=N8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F8=R8,D8=F8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j8=Fl;function z8(e,t,n){j8(e,t,{configurable:!1,enumerable:!1,get:n})}var B8=z8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U8=B8,V8=U8;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function W8(e){return e.re}var H8=W8;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var G8=H8,zl=G8;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Y8(e){return e.im}var X8=Y8;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var K8=X8,Bl=K8;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Q8=Mh;function Z8(e,t){return new Q8(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*t,2*(e.length-t))}var q8=Z8;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var J8=q8,eB=J8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tB=Li,nB=typeof Float64Array=="function";function rB(e){return nB&&e instanceof Float64Array||tB(e)==="[object Float64Array]"}var iB=rB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oB=iB,aB=oB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sB=typeof Float64Array=="function"?Float64Array:null,lB=sB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uB=aB,Em=lB;function cB(){var e,t;if(typeof Em!="function")return!1;try{t=new Em([1,3.14,-3.14,NaN]),e=uB(t)&&t[0]===1&&t[1]===3.14&&t[2]===-3.14&&t[3]!==t[3]}catch{e=!1}return e}var fB=cB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dB=fB,hB=dB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pB=typeof Float64Array=="function"?Float64Array:void 0,gB=pB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function vB(){throw new Error("not implemented")}var mB=vB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yB=hB,bB=gB,$B=mB,Lf;yB()?Lf=bB:Lf=$B;var _B=Lf;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wB=_B;function xB(e,t){return new wB(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*t,2*(e.length-t))}var SB=xB;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kB=SB,EB=kB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var AB=Ch,TB=jl,CB=zl,PB=Bl,MB=ie;function OB(e){var t,n,r;for(t=[];n=e.next(),!n.done;)if(r=n.value,AB(r)&&r.length>=2)t.push(r[0],r[1]);else if(TB(r))t.push(CB(r),PB(r));else return new TypeError(MB("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",r));return t}var IB=OB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var LB=Ch,NB=jl,RB=zl,FB=Bl,DB=ie;function jB(e,t,n){var r,i,o,a;for(r=[],a=-1;i=e.next(),!i.done;)if(a+=1,o=t.call(n,i.value,a),LB(o)&&o.length>=2)r.push(o[0],o[1]);else if(NB(o))r.push(RB(o),FB(o));else return new TypeError(DB("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));return r}var zB=jB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var BB=jl,UB=zl,VB=Bl;function WB(e,t){var n,r,i,o;for(n=t.length,o=0,i=0;i<n;i++){if(r=t[i],!BB(r))return null;e[o]=UB(r),e[o+1]=VB(r),o+=2}return e}var HB=WB,Co=Gj.isPrimitive,Am=Ch,Oh=s6,Tm=h6,C$=w6,GB=x$,dr=Tz,fi=jl,il=C8,Uu=la,YB=T$,xi=D8,tt=Cr,Ul=V8,$t=Mh,P$=A$,ue=ie,ol=zl,al=Bl,XB=eB,KB=EB,QB=_h,ZB=wh,M$=IB,qB=zB,JB=HB,ft=$t.BYTES_PER_ELEMENT*2,O$=YB();function Si(e){return e instanceof be||typeof e=="object"&&e!==null&&(e.constructor.name==="Complex64Array"||e.constructor.name==="Complex128Array")&&typeof e._length=="number"&&typeof e._buffer=="object"}function I$(e){return e===be||e.name==="Complex128Array"}function eU(e){return typeof e=="object"&&e!==null&&e.constructor.name==="Complex64Array"&&e.BYTES_PER_ELEMENT===ft}function tU(e){return typeof e=="object"&&e!==null&&e.constructor.name==="Complex128Array"&&e.BYTES_PER_ELEMENT===ft*2}function be(){var e,t,n,r;if(t=arguments.length,!(this instanceof be))return t===0?new be:t===1?new be(arguments[0]):t===2?new be(arguments[0],arguments[1]):new be(arguments[0],arguments[1],arguments[2]);if(t===0)n=new $t(0);else if(t===1)if(Co(arguments[0]))n=new $t(arguments[0]*2);else if(Oh(arguments[0]))if(n=arguments[0],r=n.length,r&&GB(n)&&fi(n[0])){if(n=JB(new $t(r*2),n),n===null){if(!il(r))throw new RangeError(ue("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",r));n=new $t(arguments[0])}}else{if(eU(n))n=XB(n,0);else if(tU(n))n=KB(n,0);else if(!il(r))throw new RangeError(ue("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",r));n=new $t(n)}else if(Tm(arguments[0])){if(n=arguments[0],!Uu(n.byteLength/ft))throw new RangeError(ue("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",ft,n.byteLength));n=new $t(n)}else if(C$(arguments[0])){if(n=arguments[0],O$===!1)throw new TypeError(ue("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",n));if(!dr(n[xi]))throw new TypeError(ue("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",n));if(n=n[xi](),!dr(n.next))throw new TypeError(ue("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",n));if(n=M$(n),n instanceof Error)throw n;n=new $t(n)}else throw new TypeError(ue("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(n=arguments[0],!Tm(n))throw new TypeError(ue("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",n));if(e=arguments[1],!Co(e))throw new TypeError(ue("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!Uu(e/ft))throw new RangeError(ue("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",ft,e));if(t===2){if(r=n.byteLength-e,!Uu(r/ft))throw new RangeError(ue("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",ft,r));n=new $t(n,e)}else{if(r=arguments[2],!Co(r))throw new TypeError(ue("invalid argument. Length must be a nonnegative integer. Value: `%s`.",r));if(r*ft>n.byteLength-e)throw new RangeError(ue("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",r*ft));n=new $t(n,e,r*2)}}return tt(this,"_buffer",n),tt(this,"_length",n.length/2),this}tt(be,"BYTES_PER_ELEMENT",ft);tt(be,"name","Complex64Array");tt(be,"from",function(t){var n,r,i,o,a,s,l,u,c,f,d,h;if(!dr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!I$(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(r=arguments.length,r>1){if(i=arguments[1],!dr(i))throw new TypeError(ue("invalid argument. Second argument must be a function. Value: `%s`.",i));r>2&&(n=arguments[2])}if(Si(t)){if(u=t.length,i){for(o=new this(u),a=o._buffer,h=0,d=0;d<u;d++){if(f=i.call(n,t.get(d),d),fi(f))a[h]=ol(f),a[h+1]=al(f);else if(Am(f)&&f.length>=2)a[h]=f[0],a[h+1]=f[1];else throw new TypeError(ue("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",f));h+=2}return o}return new this(t)}if(Oh(t)){if(i){for(u=t.length,t.get&&t.set?l=ZB("default"):l=QB("default"),d=0;d<u;d++)if(!fi(l(t,d))){c=!0;break}if(c){if(!il(u))throw new RangeError(ue("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,u));for(o=new this(u/2),a=o._buffer,d=0;d<u;d++)a[d]=i.call(n,l(t,d),d);return o}for(o=new this(u),a=o._buffer,h=0,d=0;d<u;d++){if(f=i.call(n,l(t,d),d),fi(f))a[h]=ol(f),a[h+1]=al(f);else if(Am(f)&&f.length>=2)a[h]=f[0],a[h+1]=f[1];else throw new TypeError(ue("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",f));h+=2}return o}return new this(t)}if(C$(t)&&O$&&dr(t[xi])){if(a=t[xi](),!dr(a.next))throw new TypeError(ue("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",t));if(i?s=qB(a,i,n):s=M$(a),s instanceof Error)throw s;for(u=s.length/2,o=new this(u),a=o._buffer,d=0;d<u;d++)a[d]=s[d];return o}throw new TypeError(ue("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",t))});tt(be,"of",function(){var t,n;if(!dr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!I$(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(t=[],n=0;n<arguments.length;n++)t.push(arguments[n]);return new this(t)});Ul(be.prototype,"buffer",function(){return this._buffer.buffer});Ul(be.prototype,"byteLength",function(){return this._buffer.byteLength});Ul(be.prototype,"byteOffset",function(){return this._buffer.byteOffset});tt(be.prototype,"BYTES_PER_ELEMENT",be.BYTES_PER_ELEMENT);tt(be.prototype,"copyWithin",function(t,n){if(!Si(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(t*2,n*2):this._buffer.copyWithin(t*2,n*2,arguments[2]*2),this});tt(be.prototype,"entries",function(){var t,n,r,i,o,a,s;if(!Si(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return n=this,t=this._buffer,i=this._length,a=-1,s=-2,r={},tt(r,"next",l),tt(r,"return",u),xi&&tt(r,xi,c),r;function l(){var f;return a+=1,o||a>=i?{done:!0}:(s+=2,f=new P$(t[s],t[s+1]),{value:[a,f],done:!1})}function u(f){return o=!0,arguments.length?{value:f,done:!0}:{done:!0}}function c(){return n.entries()}});tt(be.prototype,"get",function(t){var n;if(!Si(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Co(t))throw new TypeError(ue("invalid argument. Must provide a nonnegative integer. Value: `%s`.",t));if(!(t>=this._length))return n=this._buffer,t*=2,new P$(n[t],n[t+1])});Ul(be.prototype,"length",function(){return this._length});tt(be.prototype,"set",function(t){var n,r,i,o,a,s,l,u,c;if(!Si(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=this._buffer,arguments.length>1){if(r=arguments[1],!Co(r))throw new TypeError(ue("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",r))}else r=0;if(fi(t)){if(r>=this._length)throw new RangeError(ue("invalid argument. Index argument is out-of-bounds. Value: `%u`.",r));r*=2,i[r]=ol(t),i[r+1]=al(t);return}if(Si(t)){if(s=t._length,r+s>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(n=t._buffer,c=i.byteOffset+r*ft,n.buffer===i.buffer&&n.byteOffset<c&&n.byteOffset+n.byteLength>c){for(o=new $t(n.length),u=0;u<n.length;u++)o[u]=n[u];n=o}for(r*=2,c=0,u=0;u<s;u++)i[r]=n[c],i[r+1]=n[c+1],r+=2,c+=2;return}if(Oh(t)){for(s=t.length,u=0;u<s;u++)if(!fi(t[u])){a=!0;break}if(a){if(!il(s))throw new RangeError(ue("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",s));if(r+s/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(n=t,c=i.byteOffset+r*ft,n.buffer===i.buffer&&n.byteOffset<c&&n.byteOffset+n.byteLength>c){for(o=new $t(s),u=0;u<s;u++)o[u]=n[u];n=o}for(r*=2,s/=2,c=0,u=0;u<s;u++)i[r]=n[c],i[r+1]=n[c+1],r+=2,c+=2;return}if(r+s>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(r*=2,u=0;u<s;u++)l=t[u],i[r]=ol(l),i[r+1]=al(l),r+=2;return}throw new TypeError(ue("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",t))});var nU=be;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rU=nU,Ih=rU;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iU=typeof Object.defineProperty=="function"?Object.defineProperty:null,oU=iU;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aU=oU;function sU(){try{return aU({},"x",{}),!0}catch{return!1}}var lU=sU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uU=Object.defineProperty,cU=uU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cm=ie,Ni=Object.prototype,Pm=Ni.toString,Mm=Ni.__defineGetter__,Om=Ni.__defineSetter__,fU=Ni.__lookupGetter__,dU=Ni.__lookupSetter__;function hU(e,t,n){var r,i,o,a;if(typeof e!="object"||e===null||Pm.call(e)==="[object Array]")throw new TypeError(Cm("invalid argument. First argument must be an object. Value: `%s`.",e));if(typeof n!="object"||n===null||Pm.call(n)==="[object Array]")throw new TypeError(Cm("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if(i="value"in n,i&&(fU.call(e,t)||dU.call(e,t)?(r=e.__proto__,e.__proto__=Ni,delete e[t],e[t]=n.value,e.__proto__=r):e[t]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&Mm&&Mm.call(e,t,n.get),a&&Om&&Om.call(e,t,n.set),e}var pU=hU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gU=lU,vU=cU,mU=pU,Nf;gU()?Nf=vU:Nf=mU;var Vl=Nf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yU=Vl;function bU(e,t,n){yU(e,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var $U=bU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _U=$U,Or=_U;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function wU(e){return typeof e=="number"}var L$=wU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function xU(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}var SU=xU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kU=SU,EU=kU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var AU=EU,TU=AU();function CU(){return TU&&typeof Symbol.toStringTag=="symbol"}var PU=CU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var MU=PU,Lh=MU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var OU=Object.prototype.toString,N$=OU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var IU=N$;function LU(e){return IU.call(e)}var NU=LU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var RU=Object.prototype.hasOwnProperty;function FU(e,t){return e==null?!1:RU.call(e,t)}var DU=FU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jU=DU,R$=jU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Im=Tr,zU=typeof Im=="function"?Im.toStringTag:"",BU=zU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var UU=R$,to=BU,Vu=N$;function VU(e){var t,n,r;if(e==null)return Vu.call(e);n=e[to],t=UU(e,to);try{e[to]=void 0}catch{return Vu.call(e)}return r=Vu.call(e),t?e[to]=n:delete e[to],r}var WU=VU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var HU=Lh,GU=NU,YU=WU,Rf;HU()?Rf=YU:Rf=GU;var Ri=Rf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var XU=Number;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var KU=XU,Nh=KU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var QU=Nh,ZU=QU.prototype.toString,qU=ZU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var JU=qU;function eV(e){try{return JU.call(e),!0}catch{return!1}}var tV=eV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nV=Lh,rV=Ri,iV=Nh,oV=tV,aV=nV();function sV(e){return typeof e=="object"?e instanceof iV?!0:aV?oV(e):rV(e)==="[object Number]":!1}var F$=sV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lV=L$,uV=F$;function cV(e){return lV(e)||uV(e)}var fV=cV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D$=Or,Rh=fV,dV=L$,hV=F$;D$(Rh,"isPrimitive",dV);D$(Rh,"isObject",hV);var Wl=Rh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pV=Number.POSITIVE_INFINITY,j$=pV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gV=Nh,vV=gV.NEGATIVE_INFINITY,mV=vV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yV=Math.floor,bV=yV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $V=bV,_V=$V;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wV=_V;function xV(e){return wV(e)===e}var SV=xV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kV=SV,fa=kV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var EV=j$,AV=mV,TV=fa;function CV(e){return e<EV&&e>AV&&TV(e)}var z$=CV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var PV=Wl.isPrimitive,MV=z$;function OV(e){return PV(e)&&MV(e)}var B$=OV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var IV=Wl.isObject,LV=z$;function NV(e){return IV(e)&&LV(e.valueOf())}var U$=NV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var RV=B$,FV=U$;function DV(e){return RV(e)||FV(e)}var jV=DV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V$=Or,Fh=jV,zV=B$,BV=U$;V$(Fh,"isPrimitive",zV);V$(Fh,"isObject",BV);var W$=Fh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var UV=W$.isPrimitive;function VV(e){return UV(e)&&e>=0}var H$=VV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var WV=W$.isObject;function HV(e){return WV(e)&&e.valueOf()>=0}var G$=HV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var GV=H$,YV=G$;function XV(e){return GV(e)||YV(e)}var KV=XV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Y$=Or,Dh=KV,QV=H$,ZV=G$;Y$(Dh,"isPrimitive",QV);Y$(Dh,"isObject",ZV);var qV=Dh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var JV=4294967295,e9=JV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t9=fa,n9=e9;function r9(e){return typeof e=="object"&&e!==null&&typeof e.length=="number"&&t9(e.length)&&e.length>=0&&e.length<=n9}var i9=r9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var o9=i9,jh=o9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a9=9007199254740991,s9=a9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var l9=fa,u9=s9;function c9(e){return typeof e=="object"&&e!==null&&typeof e.length=="number"&&l9(e.length)&&e.length>=0&&e.length<=u9}var f9=c9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var d9=f9,h9=d9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var p9=Ri,g9=typeof ArrayBuffer=="function";function v9(e){return g9&&e instanceof ArrayBuffer||p9(e)==="[object ArrayBuffer]"}var m9=v9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y9=m9,b9=y9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $9=Ri,Ff;function _9(e){return $9(e)==="[object Array]"}Array.isArray?Ff=Array.isArray:Ff=_9;var w9=Ff;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var x9=w9,X$=x9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var S9=X$;function k9(e){return typeof e=="object"&&e!==null&&!S9(e)}var E9=k9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var A9=E9,T9=A9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var C9=/./,P9=C9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function M9(e){return typeof e=="boolean"}var K$=M9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O9=Boolean.prototype.toString,I9=O9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var L9=I9;function N9(e){try{return L9.call(e),!0}catch{return!1}}var R9=N9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F9=Lh,D9=Ri,j9=dh,z9=R9,B9=F9();function U9(e){return typeof e=="object"?e instanceof j9?!0:B9?z9(e):D9(e)==="[object Boolean]":!1}var Q$=U9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V9=K$,W9=Q$;function H9(e){return V9(e)||W9(e)}var G9=H9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Z$=Or,zh=G9,Y9=K$,X9=Q$;Z$(zh,"isPrimitive",Y9);Z$(zh,"isObject",X9);var K9=zh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Q9(){return new Function("return this;")()}var Z9=Q9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var q9=typeof self=="object"?self:null,J9=q9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eW=typeof window=="object"?window:null,tW=eW;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nW=typeof globalThis=="object"?globalThis:null,rW=nW;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iW=K9.isPrimitive,oW=ie,aW=Z9,Lm=J9,Nm=tW,Rm=rW;function sW(e){if(arguments.length){if(!iW(e))throw new TypeError(oW("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return aW()}if(Rm)return Rm;if(Lm)return Lm;if(Nm)return Nm;throw new Error("unexpected error. Unable to resolve global object.")}var lW=sW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uW=lW,Fm=uW(),cW=Fm.document&&Fm.document.childNodes,fW=cW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dW=Int8Array,hW=dW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pW=P9,gW=fW,vW=hW;function mW(){return typeof pW=="function"||typeof vW=="object"||typeof gW=="function"}var yW=mW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bW=qt;function $W(e){var t;return e===null?"null":(t=typeof e,t==="object"?bW(e).toLowerCase():t)}var _W=$W;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wW=qt;function xW(e){return wW(e).toLowerCase()}var SW=xW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kW=yW,EW=_W,AW=SW,TW=kW()?AW:EW,CW=TW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var PW=CW;function MW(e){return PW(e)==="function"}var OW=MW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var IW=OW,LW=IW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function NW(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i",e}var RW=NW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function FW(){var e={};return e.type="Complex128",e.re=this.re,e.im=this.im,e}var DW=FW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dm=Wl.isPrimitive,jm=Vl,da=Or,zm=ie,jW=RW,zW=DW;function Ir(e,t){if(!(this instanceof Ir))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Dm(e))throw new TypeError(zm("invalid argument. Real component must be a number. Value: `%s`.",e));if(!Dm(t))throw new TypeError(zm("invalid argument. Imaginary component must be a number. Value: `%s`.",t));return jm(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),jm(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:t}),this}da(Ir,"BYTES_PER_ELEMENT",8);da(Ir.prototype,"BYTES_PER_ELEMENT",8);da(Ir.prototype,"byteLength",16);da(Ir.prototype,"toString",jW);da(Ir.prototype,"toJSON",zW);var BW=Ir;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var UW=BW,q$=UW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var VW=typeof Math.fround=="function"?Math.fround:null,WW=VW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var HW=Ri,GW=typeof Float32Array=="function";function YW(e){return GW&&e instanceof Float32Array||HW(e)==="[object Float32Array]"}var XW=YW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var KW=XW,QW=KW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ZW=typeof Float32Array=="function"?Float32Array:null,qW=ZW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var JW=QW,eH=j$,Bm=qW;function tH(){var e,t;if(typeof Bm!="function")return!1;try{t=new Bm([1,3.14,-3.14,5e40]),e=JW(t)&&t[0]===1&&t[1]===3.140000104904175&&t[2]===-3.140000104904175&&t[3]===eH}catch{e=!1}return e}var nH=tH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rH=nH,iH=rH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oH=typeof Float32Array=="function"?Float32Array:void 0,aH=oH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function sH(){throw new Error("not implemented")}var lH=sH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uH=iH,cH=aH,fH=lH,Df;uH()?Df=cH:Df=fH;var J$=Df;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dH=J$,Um=new dH(1);function hH(e){return Um[0]=e,Um[0]}var pH=hH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vm=WW,gH=pH,jf;typeof Vm=="function"?jf=Vm:jf=gH;var vH=jf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function mH(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i",e}var yH=mH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function bH(){var e={};return e.type="Complex64",e.re=this.re,e.im=this.im,e}var $H=bH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wm=Wl.isPrimitive,Hm=Vl,ha=Or,Gm=vH,Ym=ie,_H=yH,wH=$H;function Lr(e,t){if(!(this instanceof Lr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Wm(e))throw new TypeError(Ym("invalid argument. Real component must be a number. Value: `%s`.",e));if(!Wm(t))throw new TypeError(Ym("invalid argument. Imaginary component must be a number. Value: `%s`.",t));return Hm(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Gm(e)}),Hm(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Gm(t)}),this}ha(Lr,"BYTES_PER_ELEMENT",4);ha(Lr.prototype,"BYTES_PER_ELEMENT",4);ha(Lr.prototype,"byteLength",8);ha(Lr.prototype,"toString",_H);ha(Lr.prototype,"toJSON",wH);var xH=Lr;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var SH=xH,kH=SH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var EH=q$,AH=kH;function TH(e){return e instanceof EH||e instanceof AH?!0:typeof e=="object"&&e!==null&&typeof e.re=="number"&&typeof e.im=="number"}var CH=TH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var PH=CH,Hl=PH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var MH=fa;function OH(e){return MH(e/2)}var IH=OH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var LH=IH,NH=LH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var RH=R$,qa=Tr;function FH(){return typeof qa=="function"&&typeof qa("foo")=="symbol"&&RH(qa,"iterator")&&typeof qa.iterator=="symbol"}var DH=FH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jH=DH,e_=jH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zH=e_,BH=zH()?Symbol.iterator:null,UH=BH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var VH=UH,WH=VH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var HH=Vl;function GH(e,t,n){HH(e,t,{configurable:!1,enumerable:!1,get:n})}var YH=GH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var XH=YH,KH=XH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var QH=Ri,ZH=typeof Float64Array=="function";function qH(e){return ZH&&e instanceof Float64Array||QH(e)==="[object Float64Array]"}var JH=qH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e7=JH,t7=e7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n7=typeof Float64Array=="function"?Float64Array:null,r7=n7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var i7=t7,Xm=r7;function o7(){var e,t;if(typeof Xm!="function")return!1;try{t=new Xm([1,3.14,-3.14,NaN]),e=i7(t)&&t[0]===1&&t[1]===3.14&&t[2]===-3.14&&t[3]!==t[3]}catch{e=!1}return e}var a7=o7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var s7=a7,l7=s7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u7=typeof Float64Array=="function"?Float64Array:void 0,c7=u7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function f7(){throw new Error("not implemented")}var d7=f7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var h7=l7,p7=c7,g7=d7,zf;h7()?zf=p7:zf=g7;var t_=zf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function v7(e){return e.re}var m7=v7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y7=m7,Gl=y7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function b7(e){return e.im}var $7=b7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _7=$7,Yl=_7;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var w7=J$;function x7(e,t){return new w7(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*t,2*(e.length-t))}var S7=x7;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k7=S7,E7=k7;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var A7=t_;function T7(e,t){return new A7(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*t,2*(e.length-t))}var C7=T7;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var P7=C7,M7=P7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O7=jh,I7=Hl,L7=ie,N7=Gl,R7=Yl;function F7(e){var t,n,r;for(t=[];n=e.next(),!n.done;)if(r=n.value,O7(r)&&r.length>=2)t.push(r[0],r[1]);else if(I7(r))t.push(N7(r),R7(r));else return new TypeError(L7("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",r));return t}var D7=F7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j7=jh,z7=Hl,B7=ie,U7=Gl,V7=Yl;function W7(e,t,n){var r,i,o,a;for(r=[],a=-1;i=e.next(),!i.done;)if(a+=1,o=t.call(n,i.value,a),j7(o)&&o.length>=2)r.push(o[0],o[1]);else if(z7(o))r.push(U7(o),V7(o));else return new TypeError(B7("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));return r}var H7=W7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var G7=Hl,Y7=Gl,X7=Yl;function K7(e,t){var n,r,i,o;for(n=t.length,o=0,i=0;i<n;i++){if(r=t[i],!G7(r))return null;e[o]=Y7(r),e[o+1]=X7(r),o+=2}return e}var Q7=K7,Po=qV.isPrimitive,Km=jh,Bh=h9,Qm=b9,n_=T9,Z7=X$,hr=LW,di=Hl,sl=NH,Wu=fa,q7=e_,ki=WH,nt=Or,Xl=KH,_t=t_,r_=q$,ll=Gl,ul=Yl,J7=E7,eG=M7,tG=_h,nG=wh,ce=ie,i_=D7,rG=H7,iG=Q7,dt=_t.BYTES_PER_ELEMENT*2,o_=q7();function Ei(e){return e instanceof $e||typeof e=="object"&&e!==null&&(e.constructor.name==="Complex64Array"||e.constructor.name==="Complex128Array")&&typeof e._length=="number"&&typeof e._buffer=="object"}function a_(e){return e===$e||e.name==="Complex64Array"}function oG(e){return typeof e=="object"&&e!==null&&e.constructor.name==="Complex64Array"&&e.BYTES_PER_ELEMENT===dt/2}function aG(e){return typeof e=="object"&&e!==null&&e.constructor.name==="Complex128Array"&&e.BYTES_PER_ELEMENT===dt}function $e(){var e,t,n,r;if(t=arguments.length,!(this instanceof $e))return t===0?new $e:t===1?new $e(arguments[0]):t===2?new $e(arguments[0],arguments[1]):new $e(arguments[0],arguments[1],arguments[2]);if(t===0)n=new _t(0);else if(t===1)if(Po(arguments[0]))n=new _t(arguments[0]*2);else if(Bh(arguments[0]))if(n=arguments[0],r=n.length,r&&Z7(n)&&di(n[0])){if(n=iG(new _t(r*2),n),n===null){if(!sl(r))throw new RangeError(ce("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",r));n=new _t(arguments[0])}}else{if(oG(n))n=J7(n,0);else if(aG(n))n=eG(n,0);else if(!sl(r))throw new RangeError(ce("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",r));n=new _t(n)}else if(Qm(arguments[0])){if(n=arguments[0],!Wu(n.byteLength/dt))throw new RangeError(ce("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",dt,n.byteLength));n=new _t(n)}else if(n_(arguments[0])){if(n=arguments[0],o_===!1)throw new TypeError(ce("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",n));if(!hr(n[ki]))throw new TypeError(ce("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",n));if(n=n[ki](),!hr(n.next))throw new TypeError(ce("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",n));if(n=i_(n),n instanceof Error)throw n;n=new _t(n)}else throw new TypeError(ce("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(n=arguments[0],!Qm(n))throw new TypeError(ce("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",n));if(e=arguments[1],!Po(e))throw new TypeError(ce("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!Wu(e/dt))throw new RangeError(ce("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",dt,e));if(t===2){if(r=n.byteLength-e,!Wu(r/dt))throw new RangeError(ce("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",dt,r));n=new _t(n,e)}else{if(r=arguments[2],!Po(r))throw new TypeError(ce("invalid argument. Length must be a nonnegative integer. Value: `%s`.",r));if(r*dt>n.byteLength-e)throw new RangeError(ce("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",r*dt));n=new _t(n,e,r*2)}}return nt(this,"_buffer",n),nt(this,"_length",n.length/2),this}nt($e,"BYTES_PER_ELEMENT",dt);nt($e,"name","Complex128Array");nt($e,"from",function(t){var n,r,i,o,a,s,l,u,c,f,d,h;if(!hr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!a_(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(r=arguments.length,r>1){if(i=arguments[1],!hr(i))throw new TypeError(ce("invalid argument. Second argument must be a function. Value: `%s`.",i));r>2&&(n=arguments[2])}if(Ei(t)){if(u=t.length,i){for(o=new this(u),a=o._buffer,h=0,d=0;d<u;d++){if(f=i.call(n,t.get(d),d),di(f))a[h]=ll(f),a[h+1]=ul(f);else if(Km(f)&&f.length>=2)a[h]=f[0],a[h+1]=f[1];else throw new TypeError(ce("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",f));h+=2}return o}return new this(t)}if(Bh(t)){if(i){for(u=t.length,t.get&&t.set?l=nG("default"):l=tG("default"),d=0;d<u;d++)if(!di(l(t,d))){c=!0;break}if(c){if(!sl(u))throw new RangeError(ce("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",u));for(o=new this(u/2),a=o._buffer,d=0;d<u;d++)a[d]=i.call(n,l(t,d),d);return o}for(o=new this(u),a=o._buffer,h=0,d=0;d<u;d++){if(f=i.call(n,l(t,d),d),di(f))a[h]=ll(f),a[h+1]=ul(f);else if(Km(f)&&f.length>=2)a[h]=f[0],a[h+1]=f[1];else throw new TypeError(ce("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",f));h+=2}return o}return new this(t)}if(n_(t)&&o_&&hr(t[ki])){if(a=t[ki](),!hr(a.next))throw new TypeError(ce("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",t));if(i?s=rG(a,i,n):s=i_(a),s instanceof Error)throw s;for(u=s.length/2,o=new this(u),a=o._buffer,d=0;d<u;d++)a[d]=s[d];return o}throw new TypeError(ce("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",t))});nt($e,"of",function(){var t,n;if(!hr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!a_(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(t=[],n=0;n<arguments.length;n++)t.push(arguments[n]);return new this(t)});Xl($e.prototype,"buffer",function(){return this._buffer.buffer});Xl($e.prototype,"byteLength",function(){return this._buffer.byteLength});Xl($e.prototype,"byteOffset",function(){return this._buffer.byteOffset});nt($e.prototype,"BYTES_PER_ELEMENT",$e.BYTES_PER_ELEMENT);nt($e.prototype,"copyWithin",function(t,n){if(!Ei(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(t*2,n*2):this._buffer.copyWithin(t*2,n*2,arguments[2]*2),this});nt($e.prototype,"entries",function(){var t,n,r,i,o,a,s;if(!Ei(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return n=this,t=this._buffer,i=this._length,a=-1,s=-2,r={},nt(r,"next",l),nt(r,"return",u),ki&&nt(r,ki,c),r;function l(){var f;return a+=1,o||a>=i?{done:!0}:(s+=2,f=new r_(t[s],t[s+1]),{value:[a,f],done:!1})}function u(f){return o=!0,arguments.length?{value:f,done:!0}:{done:!0}}function c(){return n.entries()}});nt($e.prototype,"get",function(t){var n;if(!Ei(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Po(t))throw new TypeError(ce("invalid argument. Must provide a nonnegative integer. Value: `%s`.",t));if(!(t>=this._length))return n=this._buffer,t*=2,new r_(n[t],n[t+1])});Xl($e.prototype,"length",function(){return this._length});nt($e.prototype,"set",function(t){var n,r,i,o,a,s,l,u,c;if(!Ei(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=this._buffer,arguments.length>1){if(r=arguments[1],!Po(r))throw new TypeError(ce("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",r))}else r=0;if(di(t)){if(r>=this._length)throw new RangeError(ce("invalid argument. Index argument is out-of-bounds. Value: `%u`.",r));r*=2,i[r]=ll(t),i[r+1]=ul(t);return}if(Ei(t)){if(s=t._length,r+s>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(n=t._buffer,c=i.byteOffset+r*dt,n.buffer===i.buffer&&n.byteOffset<c&&n.byteOffset+n.byteLength>c){for(o=new _t(n.length),u=0;u<n.length;u++)o[u]=n[u];n=o}for(r*=2,c=0,u=0;u<s;u++)i[r]=n[c],i[r+1]=n[c+1],r+=2,c+=2;return}if(Bh(t)){for(s=t.length,u=0;u<s;u++)if(!di(t[u])){a=!0;break}if(a){if(!sl(s))throw new RangeError(ce("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",s));if(r+s/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(n=t,c=i.byteOffset+r*dt,n.buffer===i.buffer&&n.byteOffset<c&&n.byteOffset+n.byteLength>c){for(o=new _t(s),u=0;u<s;u++)o[u]=n[u];n=o}for(r*=2,s/=2,c=0,u=0;u<s;u++)i[r]=n[c],i[r+1]=n[c+1],r+=2,c+=2;return}if(r+s>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(r*=2,u=0;u<s;u++)l=t[u],i[r]=ll(l),i[r+1]=ul(l),r+=2;return}throw new TypeError(ce("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",t))});var sG=$e;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lG=sG,Uh=lG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uG=yN,cG=UN,fG=fR,dG=DR,hG=sF,pG=LF,gG=rD,vG=SD,mG=ZD,yG=Ih,bG=Uh,$G=[uG,cG,dG,fG,pG,hG,mG,gG,vG,yG,bG],_G=$G;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wG=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],xG=wG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var SG=KL,kG=l$,EG=qt,AG=ZL,TG=_G,s_=xG,CG=s_.length;function PG(e){var t;if(kG(e))return"generic";if(SG(e))return null;for(t=0;t<CG;t++)if(e instanceof TG[t])return s_[t];return AG[EG(e)]||null}var MG=PG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var OG=MG,IG=OG;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var LG=YI,NG=_h,RG=w4,FG=wh,DG=N4,jG=IG;function zG(e){var t=jG(e);return LG(e)?{accessorProtocol:!0,accessors:[FG(t),DG(t)]}:{accessorProtocol:!1,accessors:[NG(t),RG(t)]}}var BG=zG;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var UG=BG,VG=UG;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var WG=VG;function HG(e){var t=WG(e);return{data:e,accessorProtocol:t.accessorProtocol,accessors:t.accessors}}var GG=HG;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var YG=GG,l_=YG;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function XG(e,t,n,r,i,o,a){var s,l,u,c,f,d,h;for(s=t.data,l=i.data,c=t.accessors[0],u=i.accessors[1],f=r,d=a,h=0;h<e;h++)u(l,d,c(s,f)),f+=n,d+=o;return t}var u_=XG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zm=l_,KG=u_,Hu=8;function QG(e,t,n,r,i){var o,a,s,l,u,c;if(e<=0)return r;if(s=Zm(t),l=Zm(r),s.accessorProtocol||l.accessorProtocol)return n<0?o=(1-e)*n:o=0,i<0?a=(1-e)*i:a=0,KG(e,s,n,o,l,i,a),l.data;if(n===1&&i===1){if(u=e%Hu,u>0)for(c=0;c<u;c++)r[c]=t[c];if(e<Hu)return r;for(c=u;c<e;c+=Hu)r[c]=t[c],r[c+1]=t[c+1],r[c+2]=t[c+2],r[c+3]=t[c+3],r[c+4]=t[c+4],r[c+5]=t[c+5],r[c+6]=t[c+6],r[c+7]=t[c+7];return r}for(n<0?o=(1-e)*n:o=0,i<0?a=(1-e)*i:a=0,c=0;c<e;c++)r[a]=t[o],o+=n,a+=i;return r}var ZG=QG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qm=l_,qG=u_,no=8;function JG(e,t,n,r,i,o,a){var s,l,u,c,f,d;if(e<=0)return i;if(u=qm(t),c=qm(i),u.accessorProtocol||c.accessorProtocol)return qG(e,u,n,r,c,o,a),c.data;if(s=r,l=a,n===1&&o===1){if(f=e%no,f>0)for(d=0;d<f;d++)i[l]=t[s],s+=n,l+=o;if(e<no)return i;for(d=f;d<e;d+=no)i[l]=t[s],i[l+1]=t[s+1],i[l+2]=t[s+2],i[l+3]=t[s+3],i[l+4]=t[s+4],i[l+5]=t[s+5],i[l+6]=t[s+6],i[l+7]=t[s+7],s+=no,l+=no;return i}for(d=0;d<e;d++)i[l]=t[s],s+=n,l+=o;return i}var eY=JG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tY=Ut,c_=ZG,nY=eY;tY(c_,"ndarray",nY);var rY=c_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function iY(){}var oY=iY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aY=oY;function sY(){return aY.name==="foo"}var lY=sY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uY=lY,cY=uY;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function fY(){return/^\s*function\s*([^(]*)/i}var f_=fY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dY=f_,hY=dY(),pY=hY;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gY=Ut,d_=f_,vY=pY;gY(d_,"REGEXP",vY);var mY=d_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yY=Il,bY=cY,$Y=ie,_Y=mY.REGEXP,wY=bY();function xY(e){if(yY(e)===!1)throw new TypeError($Y("invalid argument. Must provide a function. Value: `%s`.",e));return wY?e.name:_Y.exec(e.toString())[1]}var SY=xY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kY=SY,EY=kY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var AY=st,TY=typeof Float64Array=="function";function CY(e){return TY&&e instanceof Float64Array||AY(e)==="[object Float64Array]"}var PY=CY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var MY=PY,OY=MY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var IY=typeof Float64Array=="function"?Float64Array:null,LY=IY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var NY=OY,Jm=LY;function RY(){var e,t;if(typeof Jm!="function")return!1;try{t=new Jm([1,3.14,-3.14,NaN]),e=NY(t)&&t[0]===1&&t[1]===3.14&&t[2]===-3.14&&t[3]!==t[3]}catch{e=!1}return e}var FY=RY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var DY=FY,h_=DY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jY=typeof Float64Array=="function"?Float64Array:void 0,zY=jY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function BY(){throw new Error("not implemented")}var UY=BY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var VY=h_,WY=zY,HY=UY,Bf;VY()?Bf=WY:Bf=HY;var Kl=Bf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var GY=st,YY=typeof Int8Array=="function";function XY(e){return YY&&e instanceof Int8Array||GY(e)==="[object Int8Array]"}var KY=XY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var QY=KY,ZY=QY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qY=127,JY=qY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eX=-128,tX=eX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nX=typeof Int8Array=="function"?Int8Array:null,rX=nX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iX=ZY,oX=JY,aX=tX,ey=rX;function sX(){var e,t;if(typeof ey!="function")return!1;try{t=new ey([1,3.14,-3.14,oX+1]),e=iX(t)&&t[0]===1&&t[1]===3&&t[2]===-3&&t[3]===aX}catch{e=!1}return e}var lX=sX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uX=lX,cX=uX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fX=typeof Int8Array=="function"?Int8Array:void 0,dX=fX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function hX(){throw new Error("not implemented")}var pX=hX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gX=cX,vX=dX,mX=pX,Uf;gX()?Uf=vX:Uf=mX;var p_=Uf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yX=st,bX=typeof Uint8Array=="function";function $X(e){return bX&&e instanceof Uint8Array||yX(e)==="[object Uint8Array]"}var _X=$X;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wX=_X,xX=wX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var SX=255,kX=SX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var EX=typeof Uint8Array=="function"?Uint8Array:null,AX=EX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var TX=xX,Gu=kX,ty=AX;function CX(){var e,t;if(typeof ty!="function")return!1;try{t=[1,3.14,-3.14,Gu+1,Gu+2],t=new ty(t),e=TX(t)&&t[0]===1&&t[1]===3&&t[2]===Gu-2&&t[3]===0&&t[4]===1}catch{e=!1}return e}var PX=CX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var MX=PX,OX=MX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var IX=typeof Uint8Array=="function"?Uint8Array:void 0,LX=IX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function NX(){throw new Error("not implemented")}var RX=NX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var FX=OX,DX=LX,jX=RX,Vf;FX()?Vf=DX:Vf=jX;var g_=Vf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zX=st,BX=typeof Uint8ClampedArray=="function";function UX(e){return BX&&e instanceof Uint8ClampedArray||zX(e)==="[object Uint8ClampedArray]"}var VX=UX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var WX=VX,HX=WX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var GX=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null,YX=GX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var XX=HX,ny=YX;function KX(){var e,t;if(typeof ny!="function")return!1;try{t=new ny([-1,0,1,3.14,4.99,255,256]),e=XX(t)&&t[0]===0&&t[1]===0&&t[2]===1&&t[3]===3&&t[4]===5&&t[5]===255&&t[6]===255}catch{e=!1}return e}var QX=KX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ZX=QX,qX=ZX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var JX=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0,eK=JX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function tK(){throw new Error("not implemented")}var nK=tK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rK=qX,iK=eK,oK=nK,Wf;rK()?Wf=iK:Wf=oK;var v_=Wf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aK=st,sK=typeof Int16Array=="function";function lK(e){return sK&&e instanceof Int16Array||aK(e)==="[object Int16Array]"}var uK=lK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cK=uK,fK=cK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dK=32767,hK=dK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pK=-32768,gK=pK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vK=typeof Int16Array=="function"?Int16Array:null,mK=vK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yK=fK,bK=hK,$K=gK,ry=mK;function _K(){var e,t;if(typeof ry!="function")return!1;try{t=new ry([1,3.14,-3.14,bK+1]),e=yK(t)&&t[0]===1&&t[1]===3&&t[2]===-3&&t[3]===$K}catch{e=!1}return e}var wK=_K;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xK=wK,SK=xK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kK=typeof Int16Array=="function"?Int16Array:void 0,EK=kK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function AK(){throw new Error("not implemented")}var TK=AK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var CK=SK,PK=EK,MK=TK,Hf;CK()?Hf=PK:Hf=MK;var m_=Hf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var OK=st,IK=typeof Uint16Array=="function";function LK(e){return IK&&e instanceof Uint16Array||OK(e)==="[object Uint16Array]"}var NK=LK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var RK=NK,FK=RK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var DK=65535,jK=DK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zK=typeof Uint16Array=="function"?Uint16Array:null,BK=zK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var UK=FK,Yu=jK,iy=BK;function VK(){var e,t;if(typeof iy!="function")return!1;try{t=[1,3.14,-3.14,Yu+1,Yu+2],t=new iy(t),e=UK(t)&&t[0]===1&&t[1]===3&&t[2]===Yu-2&&t[3]===0&&t[4]===1}catch{e=!1}return e}var WK=VK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var HK=WK,GK=HK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var YK=typeof Uint16Array=="function"?Uint16Array:void 0,XK=YK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function KK(){throw new Error("not implemented")}var QK=KK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ZK=GK,qK=XK,JK=QK,Gf;ZK()?Gf=qK:Gf=JK;var y_=Gf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eQ=st,tQ=typeof Int32Array=="function";function nQ(e){return tQ&&e instanceof Int32Array||eQ(e)==="[object Int32Array]"}var rQ=nQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iQ=rQ,oQ=iQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aQ=2147483647,sQ=aQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lQ=-2147483648,uQ=lQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cQ=typeof Int32Array=="function"?Int32Array:null,fQ=cQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dQ=oQ,hQ=sQ,pQ=uQ,oy=fQ;function gQ(){var e,t;if(typeof oy!="function")return!1;try{t=new oy([1,3.14,-3.14,hQ+1]),e=dQ(t)&&t[0]===1&&t[1]===3&&t[2]===-3&&t[3]===pQ}catch{e=!1}return e}var vQ=gQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mQ=vQ,yQ=mQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bQ=typeof Int32Array=="function"?Int32Array:void 0,$Q=bQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function _Q(){throw new Error("not implemented")}var wQ=_Q;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xQ=yQ,SQ=$Q,kQ=wQ,Yf;xQ()?Yf=SQ:Yf=kQ;var b_=Yf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var EQ=st,AQ=typeof Float32Array=="function";function TQ(e){return AQ&&e instanceof Float32Array||EQ(e)==="[object Float32Array]"}var CQ=TQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var PQ=CQ,MQ=PQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var OQ=typeof Float32Array=="function"?Float32Array:null,IQ=OQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var LQ=MQ,NQ=Nl,ay=IQ;function RQ(){var e,t;if(typeof ay!="function")return!1;try{t=new ay([1,3.14,-3.14,5e40]),e=LQ(t)&&t[0]===1&&t[1]===3.140000104904175&&t[2]===-3.140000104904175&&t[3]===NQ}catch{e=!1}return e}var FQ=RQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var DQ=FQ,jQ=DQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zQ=typeof Float32Array=="function"?Float32Array:void 0,BQ=zQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function UQ(){throw new Error("not implemented")}var VQ=UQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var WQ=jQ,HQ=BQ,GQ=VQ,Xf;WQ()?Xf=HQ:Xf=GQ;var Vh=Xf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var YQ=p_,XQ=g_,KQ=v_,QQ=m_,ZQ=y_,qQ=b_,JQ=$h,eZ=Vh,tZ=Kl,nZ=[tZ,eZ,qQ,JQ,QQ,ZQ,YQ,XQ,KQ],rZ=nZ;const iZ=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"];/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oZ=qt,aZ=EY,$_=Ll,sZ=h_,lZ=Kl,sy=rZ,ly=iZ,ws=sZ()?$_(lZ):__;ws=aZ(ws)==="TypedArray"?ws:__;function __(){}function uZ(e){var t,n;if(typeof e!="object"||e===null)return!1;if(e instanceof ws)return!0;for(n=0;n<sy.length;n++)if(e instanceof sy[n])return!0;for(;e;){for(t=oZ(e),n=0;n<ly.length;n++)if(ly[n]===t)return!0;e=$_(e)}return!1}var cZ=uZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fZ=cZ,dZ=fZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hZ=Ih,pZ=Uh,gZ=[pZ,hZ],vZ=gZ;const mZ=["Complex64Array","Complex128Array"];/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yZ=qt,bZ=Ll,uy=vZ,cy=mZ;function $Z(e){var t,n;if(typeof e!="object"||e===null)return!1;for(n=0;n<uy.length;n++)if(e instanceof uy[n])return!0;for(;e;){for(t=yZ(e),n=0;n<cy.length;n++)if(cy[n]===t)return!0;e=bZ(e)}return!1}var _Z=$Z;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wZ=_Z,xZ=wZ;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var SZ=Vh;function kZ(e,t){return new SZ(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*t,2*(e.length-t))}var EZ=kZ;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var AZ=EZ,TZ=AZ;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var CZ=Kl;function PZ(e,t){return new CZ(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*t,2*(e.length-t))}var MZ=PZ;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var OZ=MZ,IZ=OZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var LZ=ie;function NZ(e,t){if(typeof t!="function")throw new TypeError(LZ("invalid argument. Second argument must be callable. Value: `%s`.",t));return e instanceof t}var RZ=NZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var FZ=RZ,DZ=FZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jZ=p_,zZ=g_,BZ=v_,UZ=m_,VZ=y_,WZ=b_,HZ=$h,GZ=Vh,YZ=Kl,XZ=Ih,KZ=Uh,QZ=[[YZ,"Float64Array"],[GZ,"Float32Array"],[WZ,"Int32Array"],[HZ,"Uint32Array"],[UZ,"Int16Array"],[VZ,"Uint16Array"],[jZ,"Int8Array"],[zZ,"Uint8Array"],[BZ,"Uint8ClampedArray"],[XZ,"Complex64Array"],[KZ,"Complex128Array"]],ZZ=QZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qZ=DZ,JZ=qt,eq=Ll,Ur=ZZ;function tq(e){var t,n;for(n=0;n<Ur.length;n++)if(qZ(e,Ur[n][0]))return Ur[n][1];for(;e;){for(t=JZ(e),n=0;n<Ur.length;n++)if(t===Ur[n][1])return Ur[n][1];e=eq(e)}}var nq=tq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rq=dZ,iq=xZ,oq=TZ,aq=IZ,sq=ie,lq=nq;function uq(e){var t,n,r;if(rq(e))t=e;else if(iq(e))e.BYTES_PER_ELEMENT===8?t=oq(e,0):t=aq(e,0);else throw new TypeError(sq("invalid argument. Must provide a typed array. Value: `%s`.",e));for(n={type:lq(e),data:[]},r=0;r<t.length;r++)n.data.push(t[r]);return n}var cq=uq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fq=cq,w_=fq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dq=bh,hq=Yb,pq=dq-1;function gq(){var e=hq(1+pq*Math.random());return e>>>0}var x_=gq,tn=Ut,wn=Lb,fy=Nb,Xu=Ol,vq=Gb,mq=aO,dy=Kb,yq=zb.isPrimitive,hy=uI.isPrimitive,S_=fI,k_=bh,Ke=$h,bq=jI,Kf=VI,Vr=rY,$q=w_,Ze=ie,py=x_,Ae=624,Ku=397,gy=k_>>>0,_q=19650218,Qu=2147483648,Zu=2147483647,wq=1812433253,xq=1664525,Sq=1566083941,kq=2636928640,Eq=4022730752,Aq=2567483615,qu=[0,Aq>>>0],E_=1/(S_+1),Tq=67108864,Cq=2147483648,Ju=1,Pq=S_*E_,cl=1,fl=3,An=2,Tn=Ae+3,Qe=Ae+5,Mo=Ae+6;function vy(e,t){var n;return t?n="option":n="argument",e.length<Mo+1?new RangeError(Ze("invalid %s. `state` array has insufficient length.",n)):e[0]!==cl?new RangeError(Ze("invalid %s. `state` array has an incompatible schema version. Expected: `%s`. Actual: `%s.`",n,cl,e[0])):e[1]!==fl?new RangeError(Ze("invalid %s. `state` array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",n,fl,e[1])):e[An]!==Ae?new RangeError(Ze("invalid %s. `state` array has an incompatible state length. Expected: `%u`. Actual: `%u`.",n,Ae,e[An])):e[Tn]!==1?new RangeError(Ze("invalid %s. `state` array has an incompatible section length. Expected: `%u`. Actual: `%u`.",n,1,e[Tn])):e[Qe]!==e.length-Mo?new RangeError(Ze("invalid %s. `state` array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",n,e.length-Mo,e[Qe])):null}function my(e,t,n){var r;for(e[0]=n>>>0,r=1;r<t;r++)n=e[r-1]>>>0,n=(n^n>>>30)>>>0,e[r]=Kf(n,wq)+r>>>0;return e}function Mq(e,t,n,r){var i,o,a,s;for(o=1,a=0,s=bq(t,r);s>0;s--)i=e[o-1]>>>0,i=(i^i>>>30)>>>0,i=Kf(i,xq)>>>0,e[o]=(e[o]>>>0^i)+n[a]+a>>>0,o+=1,a+=1,o>=t&&(e[0]=e[t-1],o=1),a>=r&&(a=0);for(s=t-1;s>0;s--)i=e[o-1]>>>0,i=(i^i>>>30)>>>0,i=Kf(i,Sq)>>>0,e[o]=(e[o]>>>0^i)-o>>>0,o+=1,o>=t&&(e[0]=e[t-1],o=1);return e[0]=Cq,e}function Oq(e){var t,n,r,i;for(i=Ae-Ku,n=0;n<i;n++)t=e[n]&Qu|e[n+1]&Zu,e[n]=e[n+Ku]^t>>>1^qu[t&Ju];for(r=Ae-1;n<r;n++)t=e[n]&Qu|e[n+1]&Zu,e[n]=e[n-i]^t>>>1^qu[t&Ju];return t=e[r]&Qu|e[0]&Zu,e[r]=e[Ku-1]^t>>>1^qu[t&Ju],e}function Iq(e){var t,n,r,i,o,a;if(r={},arguments.length){if(!vq(e))throw new TypeError(Ze("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Xu(e,"copy")&&(r.copy=e.copy,!yq(e.copy)))throw new TypeError(Ze("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",e.copy));if(Xu(e,"state")){if(n=e.state,r.state=!0,!dy(n))throw new TypeError(Ze("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n));if(a=vy(n,!0),a)throw a;r.copy===!1?t=n:(t=new Ke(n.length),Vr(n.length,n,1,t,1)),n=new Ke(t.buffer,t.byteOffset+(An+1)*t.BYTES_PER_ELEMENT,Ae),i=new Ke(t.buffer,t.byteOffset+(Qe+1)*t.BYTES_PER_ELEMENT,n[Qe])}if(i===void 0)if(Xu(e,"seed"))if(i=e.seed,r.seed=!0,hy(i)){if(i>gy)throw new RangeError(Ze("invalid option. `%s` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",i));i>>>=0}else{if(mq(i)===!1||i.length<1)throw new TypeError(Ze("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",i));if(i.length===1){if(i=i[0],!hy(i))throw new TypeError(Ze("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",i));if(i>gy)throw new RangeError(Ze("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",i));i>>>=0}else o=i.length,t=new Ke(Mo+o),t[0]=cl,t[1]=fl,t[An]=Ae,t[Tn]=1,t[Tn+1]=Ae,t[Qe]=o,Vr.ndarray(o,i,1,0,t,1,Qe+1),n=new Ke(t.buffer,t.byteOffset+(An+1)*t.BYTES_PER_ELEMENT,Ae),i=new Ke(t.buffer,t.byteOffset+(Qe+1)*t.BYTES_PER_ELEMENT,o),n=my(n,Ae,_q),n=Mq(n,Ae,i,o)}else i=py()>>>0}else i=py()>>>0;return n===void 0&&(t=new Ke(Mo+1),t[0]=cl,t[1]=fl,t[An]=Ae,t[Tn]=1,t[Tn+1]=Ae,t[Qe]=1,t[Qe+1]=i,n=new Ke(t.buffer,t.byteOffset+(An+1)*t.BYTES_PER_ELEMENT,Ae),i=new Ke(t.buffer,t.byteOffset+(Qe+1)*t.BYTES_PER_ELEMENT,1),n=my(n,Ae,i)),tn(g,"NAME","mt19937"),wn(g,"seed",s),wn(g,"seedLength",l),fy(g,"state",f,d),wn(g,"stateLength",u),wn(g,"byteLength",c),tn(g,"toJSON",h),tn(g,"MIN",0),tn(g,"MAX",k_),tn(g,"normalized",m),tn(m,"NAME",g.NAME),wn(m,"seed",s),wn(m,"seedLength",l),fy(m,"state",f,d),wn(m,"stateLength",u),wn(m,"byteLength",c),tn(m,"toJSON",h),tn(m,"MIN",0),tn(m,"MAX",Pq),g;function s(){var y=t[Qe];return Vr(y,i,1,new Ke(y),1)}function l(){return t[Qe]}function u(){return t.length}function c(){return t.byteLength}function f(){var y=t.length;return Vr(y,t,1,new Ke(y),1)}function d(y){var p;if(!dy(y))throw new TypeError(Ze("invalid argument. Must provide a Uint32Array. Value: `%s`.",y));if(p=vy(y,!1),p)throw p;r.copy===!1?r.state&&y.length===t.length?Vr(y.length,y,1,t,1):(t=y,r.state=!0):(y.length!==t.length&&(t=new Ke(y.length)),Vr(y.length,y,1,t,1)),n=new Ke(t.buffer,t.byteOffset+(An+1)*t.BYTES_PER_ELEMENT,Ae),i=new Ke(t.buffer,t.byteOffset+(Qe+1)*t.BYTES_PER_ELEMENT,t[Qe])}function h(){var y={};return y.type="PRNG",y.name=g.NAME,y.state=$q(t),y.params=[],y}function g(){var y,p;return p=t[Tn+1],p>=Ae&&(n=Oq(n),p=0),y=n[p],t[Tn+1]=p+1,y^=y>>>11,y^=y<<7&kq,y^=y<<15&Eq,y^=y>>>18,y>>>0}function m(){var y=g()>>>5,p=g()>>>6;return(y*Tq+p)*E_}}var A_=Iq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lq=A_,Nq=x_,Rq=Lq({seed:Nq()}),Fq=Rq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dq=Ut,T_=Fq,jq=A_;Dq(T_,"factory",jq);var zq=T_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bq=sa.isPrimitive,Uq=Rl;function Vq(e){return Bq(e)&&Uq(e)}var C_=Vq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wq=sa.isObject,Hq=Rl;function Gq(e){return Wq(e)&&Hq(e.valueOf())}var P_=Gq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yq=C_,Xq=P_;function Kq(e){return Yq(e)||Xq(e)}var Qq=Kq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var M_=Ut,Wh=Qq,Zq=C_,qq=P_;M_(Wh,"isPrimitive",Zq);M_(Wh,"isObject",qq);var Jq=Wh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ec=sa.isPrimitive,Ja=ie,tc=Jq;function eJ(e,t,n){return!ec(e)||tc(e)?new TypeError(Ja("invalid argument. First argument must be a number and not NaN. Value: `%s`.",e)):!ec(t)||tc(t)?new TypeError(Ja("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",t)):!ec(n)||tc(n)?new TypeError(Ja("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",n)):e<=n&&n<=t?null:new RangeError(Ja("invalid arguments. Parameters must satisfy the following condition: %s. a: `%f`. b: `%f`. c: `%f`.","a <= c <= b",e,t,n))}var tJ=eJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nJ=Math.sqrt,rJ=nJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iJ=rJ,oJ=iJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yy=oJ;function aJ(e,t,n,r){var i,o,a;return i=(r-t)/(n-t),a=e(),a<i?(o=(n-t)*(r-t),t+yy(o*a)):(o=(n-t)*(n-r),n-yy(o*(1-a)))}var sJ=aJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nn=Ut,es=Lb,by=Nb,$y=Gb,_y=Il,wy=Ol,xy=BM,lJ=HM,ts=zq.factory,nc=Rl,uJ=w_,ns=ie,cJ=tJ,Sy=sJ;function fJ(){var e,t,n,r,i,o,a;if(arguments.length===0)t=ts();else if(arguments.length===1){if(e=arguments[0],!$y(e))throw new TypeError(ns("invalid argument. Options argument must be an object. Value: `%s`.",e));if(wy(e,"prng")){if(!_y(e.prng))throw new TypeError(ns("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=ts(e)}else{if(i=arguments[0],o=arguments[1],a=arguments[2],r=cJ(i,o,a),r)throw r;if(arguments.length>3){if(e=arguments[3],!$y(e))throw new TypeError(ns("invalid argument. Options argument must be an object. Value: `%s`.",e));if(wy(e,"prng")){if(!_y(e.prng))throw new TypeError(ns("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=ts(e)}else t=ts()}return i===void 0?n=m:n=g,nn(n,"NAME","triangular"),e&&e.prng?(nn(n,"seed",null),nn(n,"seedLength",null),by(n,"state",xy(null),lJ),nn(n,"stateLength",null),nn(n,"byteLength",null),nn(n,"toJSON",xy(null)),nn(n,"PRNG",t)):(es(n,"seed",s),es(n,"seedLength",l),by(n,"state",f,d),es(n,"stateLength",u),es(n,"byteLength",c),nn(n,"toJSON",h),nn(n,"PRNG",t),t=t.normalized),n;function s(){return t.seed}function l(){return t.seedLength}function u(){return t.stateLength}function c(){return t.byteLength}function f(){return t.state}function d(y){t.state=y}function h(){var y={};return y.type="PRNG",y.name=n.NAME,y.state=uJ(t.state),i===void 0?y.params=[]:y.params=[i,o,a],y}function g(){return Sy(t,i,o,a)}function m(y,p,v){return nc(y)||nc(p)||nc(v)||!(y<=v&&v<=p)?NaN:Sy(t,y,p,v)}}var O_=fJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dJ=O_,hJ=dJ(),pJ=hJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gJ=Ut,I_=pJ,vJ=O_;gJ(I_,"factory",vJ);var mJ=I_;const ky=Py(mJ);function yJ(){for(var e=0,t,n,r="";e<arguments.length;)(t=arguments[e++])&&(n=L_(t))&&(r&&(r+=" "),r+=n);return r}function L_(e){if(typeof e=="string")return e;for(var t,n="",r=0;r<e.length;r++)e[r]&&(t=L_(e[r]))&&(n&&(n+=" "),n+=t);return n}var Hh="-";function bJ(e){var t=_J(e),n=e.conflictingClassGroups,r=e.conflictingClassGroupModifiers,i=r===void 0?{}:r;function o(s){var l=s.split(Hh);return l[0]===""&&l.length!==1&&l.shift(),N_(l,t)||$J(s)}function a(s,l){var u=n[s]||[];return l&&i[s]?[].concat(u,i[s]):u}return{getClassGroupId:o,getConflictingClassGroupIds:a}}function N_(e,t){var a;if(e.length===0)return t.classGroupId;var n=e[0],r=t.nextPart.get(n),i=r?N_(e.slice(1),r):void 0;if(i)return i;if(t.validators.length!==0){var o=e.join(Hh);return(a=t.validators.find(function(s){var l=s.validator;return l(o)}))==null?void 0:a.classGroupId}}var Ey=/^\[(.+)\]$/;function $J(e){if(Ey.test(e)){var t=Ey.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}}function _J(e){var t=e.theme,n=e.prefix,r={nextPart:new Map,validators:[]},i=xJ(Object.entries(e.classGroups),n);return i.forEach(function(o){var a=o[0],s=o[1];Qf(s,r,a,t)}),r}function Qf(e,t,n,r){e.forEach(function(i){if(typeof i=="string"){var o=i===""?t:Ay(t,i);o.classGroupId=n;return}if(typeof i=="function"){if(wJ(i)){Qf(i(r),t,n,r);return}t.validators.push({validator:i,classGroupId:n});return}Object.entries(i).forEach(function(a){var s=a[0],l=a[1];Qf(l,Ay(t,s),n,r)})})}function Ay(e,t){var n=e;return t.split(Hh).forEach(function(r){n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n}function wJ(e){return e.isThemeGetter}function xJ(e,t){return t?e.map(function(n){var r=n[0],i=n[1],o=i.map(function(a){return typeof a=="string"?t+a:typeof a=="object"?Object.fromEntries(Object.entries(a).map(function(s){var l=s[0],u=s[1];return[t+l,u]})):a});return[r,o]}):e}function SJ(e){if(e<1)return{get:function(){},set:function(){}};var t=0,n=new Map,r=new Map;function i(o,a){n.set(o,a),t++,t>e&&(t=0,r=n,n=new Map)}return{get:function(a){var s=n.get(a);if(s!==void 0)return s;if((s=r.get(a))!==void 0)return i(a,s),s},set:function(a,s){n.has(a)?n.set(a,s):i(a,s)}}}var R_="!";function kJ(e){var t=e.separator||":",n=t.length===1,r=t[0],i=t.length;return function(a){for(var s=[],l=0,u=0,c,f=0;f<a.length;f++){var d=a[f];if(l===0){if(d===r&&(n||a.slice(f,f+i)===t)){s.push(a.slice(u,f)),u=f+i;continue}if(d==="/"){c=f;continue}}d==="["?l++:d==="]"&&l--}var h=s.length===0?a:a.substring(u),g=h.startsWith(R_),m=g?h.substring(1):h,y=c&&c>u?c-u:void 0;return{modifiers:s,hasImportantModifier:g,baseClassName:m,maybePostfixModifierPosition:y}}}function EJ(e){if(e.length<=1)return e;var t=[],n=[];return e.forEach(function(r){var i=r[0]==="[";i?(t.push.apply(t,n.sort().concat([r])),n=[]):n.push(r)}),t.push.apply(t,n.sort()),t}function AJ(e){return{cache:SJ(e.cacheSize),splitModifiers:kJ(e),...bJ(e)}}var TJ=/\s+/;function CJ(e,t){var n=t.splitModifiers,r=t.getClassGroupId,i=t.getConflictingClassGroupIds,o=new Set;return e.trim().split(TJ).map(function(a){var s=n(a),l=s.modifiers,u=s.hasImportantModifier,c=s.baseClassName,f=s.maybePostfixModifierPosition,d=r(f?c.substring(0,f):c),h=!!f;if(!d){if(!f)return{isTailwindClass:!1,originalClassName:a};if(d=r(c),!d)return{isTailwindClass:!1,originalClassName:a};h=!1}var g=EJ(l).join(":"),m=u?g+R_:g;return{isTailwindClass:!0,modifierId:m,classGroupId:d,originalClassName:a,hasPostfixModifier:h}}).reverse().filter(function(a){if(!a.isTailwindClass)return!0;var s=a.modifierId,l=a.classGroupId,u=a.hasPostfixModifier,c=s+l;return o.has(c)?!1:(o.add(c),i(l,u).forEach(function(f){return o.add(s+f)}),!0)}).reverse().map(function(a){return a.originalClassName}).join(" ")}function PJ(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r,i,o,a=s;function s(u){var c=t[0],f=t.slice(1),d=f.reduce(function(h,g){return g(h)},c());return r=AJ(d),i=r.cache.get,o=r.cache.set,a=l,l(u)}function l(u){var c=i(u);if(c)return c;var f=CJ(u,r);return o(u,f),f}return function(){return a(yJ.apply(null,arguments))}}function oe(e){var t=function(r){return r[e]||[]};return t.isThemeGetter=!0,t}var F_=/^\[(?:([a-z-]+):)?(.+)\]$/i,MJ=/^\d+\/\d+$/,OJ=new Set(["px","full","screen"]),IJ=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,LJ=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,NJ=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function Lt(e){return pr(e)||OJ.has(e)||MJ.test(e)||Zf(e)}function Zf(e){return Nr(e,"length",BJ)}function RJ(e){return Nr(e,"size",D_)}function FJ(e){return Nr(e,"position",D_)}function DJ(e){return Nr(e,"url",UJ)}function rs(e){return Nr(e,"number",pr)}function pr(e){return!Number.isNaN(Number(e))}function jJ(e){return e.endsWith("%")&&pr(e.slice(0,-1))}function ro(e){return Ty(e)||Nr(e,"number",Ty)}function H(e){return F_.test(e)}function io(){return!0}function xn(e){return IJ.test(e)}function zJ(e){return Nr(e,"",VJ)}function Nr(e,t,n){var r=F_.exec(e);return r?r[1]?r[1]===t:n(r[2]):!1}function BJ(e){return LJ.test(e)}function D_(){return!1}function UJ(e){return e.startsWith("url(")}function Ty(e){return Number.isInteger(Number(e))}function VJ(e){return NJ.test(e)}function WJ(){var e=oe("colors"),t=oe("spacing"),n=oe("blur"),r=oe("brightness"),i=oe("borderColor"),o=oe("borderRadius"),a=oe("borderSpacing"),s=oe("borderWidth"),l=oe("contrast"),u=oe("grayscale"),c=oe("hueRotate"),f=oe("invert"),d=oe("gap"),h=oe("gradientColorStops"),g=oe("gradientColorStopPositions"),m=oe("inset"),y=oe("margin"),p=oe("opacity"),v=oe("padding"),b=oe("saturate"),$=oe("scale"),_=oe("sepia"),S=oe("skew"),x=oe("space"),E=oe("translate"),O=function(){return["auto","contain","none"]},C=function(){return["auto","hidden","clip","visible","scroll"]},w=function(){return["auto",H,t]},k=function(){return[H,t]},P=function(){return["",Lt]},D=function(){return["auto",pr,H]},R=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},N=function(){return["solid","dashed","dotted","double","none"]},j=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},A=function(){return["start","end","center","between","around","evenly","stretch"]},M=function(){return["","0",H]},I=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},z=function(){return[pr,rs]},B=function(){return[pr,H]};return{cacheSize:500,theme:{colors:[io],spacing:[Lt],blur:["none","",xn,H],brightness:z(),borderColor:[e],borderRadius:["none","","full",xn,H],borderSpacing:k(),borderWidth:P(),contrast:z(),grayscale:M(),hueRotate:B(),invert:M(),gap:k(),gradientColorStops:[e],gradientColorStopPositions:[jJ,Zf],inset:w(),margin:w(),opacity:z(),padding:k(),saturate:z(),scale:z(),sepia:M(),skew:B(),space:k(),translate:k()},classGroups:{aspect:[{aspect:["auto","square","video",H]}],container:["container"],columns:[{columns:[xn]}],"break-after":[{"break-after":I()}],"break-before":[{"break-before":I()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(R(),[H])}],overflow:[{overflow:C()}],"overflow-x":[{"overflow-x":C()}],"overflow-y":[{"overflow-y":C()}],overscroll:[{overscroll:O()}],"overscroll-x":[{"overscroll-x":O()}],"overscroll-y":[{"overscroll-y":O()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",ro]}],basis:[{basis:w()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",H]}],grow:[{grow:M()}],shrink:[{shrink:M()}],order:[{order:["first","last","none",ro]}],"grid-cols":[{"grid-cols":[io]}],"col-start-end":[{col:["auto",{span:["full",ro]},H]}],"col-start":[{"col-start":D()}],"col-end":[{"col-end":D()}],"grid-rows":[{"grid-rows":[io]}],"row-start-end":[{row:["auto",{span:[ro]},H]}],"row-start":[{"row-start":D()}],"row-end":[{"row-end":D()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",H]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",H]}],gap:[{gap:[d]}],"gap-x":[{"gap-x":[d]}],"gap-y":[{"gap-y":[d]}],"justify-content":[{justify:["normal"].concat(A())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(A(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(A(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[v]}],px:[{px:[v]}],py:[{py:[v]}],ps:[{ps:[v]}],pe:[{pe:[v]}],pt:[{pt:[v]}],pr:[{pr:[v]}],pb:[{pb:[v]}],pl:[{pl:[v]}],m:[{m:[y]}],mx:[{mx:[y]}],my:[{my:[y]}],ms:[{ms:[y]}],me:[{me:[y]}],mt:[{mt:[y]}],mr:[{mr:[y]}],mb:[{mb:[y]}],ml:[{ml:[y]}],"space-x":[{"space-x":[x]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[x]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",H,t]}],"min-w":[{"min-w":["min","max","fit",H,Lt]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[xn]},xn,H]}],h:[{h:[H,t,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",H,Lt]}],"max-h":[{"max-h":[H,t,"min","max","fit"]}],"font-size":[{text:["base",xn,Zf]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",rs]}],"font-family":[{font:[io]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",H]}],"line-clamp":[{"line-clamp":["none",pr,rs]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",H,Lt]}],"list-image":[{"list-image":["none",H]}],"list-style-type":[{list:["none","disc","decimal",H]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[p]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[p]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(N(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",Lt]}],"underline-offset":[{"underline-offset":["auto",H,Lt]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:k()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",H]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",H]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[p]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(R(),[FJ])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",RJ]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},DJ]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[g]}],"gradient-via-pos":[{via:[g]}],"gradient-to-pos":[{to:[g]}],"gradient-from":[{from:[h]}],"gradient-via":[{via:[h]}],"gradient-to":[{to:[h]}],rounded:[{rounded:[o]}],"rounded-s":[{"rounded-s":[o]}],"rounded-e":[{"rounded-e":[o]}],"rounded-t":[{"rounded-t":[o]}],"rounded-r":[{"rounded-r":[o]}],"rounded-b":[{"rounded-b":[o]}],"rounded-l":[{"rounded-l":[o]}],"rounded-ss":[{"rounded-ss":[o]}],"rounded-se":[{"rounded-se":[o]}],"rounded-ee":[{"rounded-ee":[o]}],"rounded-es":[{"rounded-es":[o]}],"rounded-tl":[{"rounded-tl":[o]}],"rounded-tr":[{"rounded-tr":[o]}],"rounded-br":[{"rounded-br":[o]}],"rounded-bl":[{"rounded-bl":[o]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[p]}],"border-style":[{border:[].concat(N(),["hidden"])}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[p]}],"divide-style":[{divide:N()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:[""].concat(N())}],"outline-offset":[{"outline-offset":[H,Lt]}],"outline-w":[{outline:[Lt]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:P()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[p]}],"ring-offset-w":[{"ring-offset":[Lt]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",xn,zJ]}],"shadow-color":[{shadow:[io]}],opacity:[{opacity:[p]}],"mix-blend":[{"mix-blend":j()}],"bg-blend":[{"bg-blend":j()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",xn,H]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[c]}],invert:[{invert:[f]}],saturate:[{saturate:[b]}],sepia:[{sepia:[_]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[c]}],"backdrop-invert":[{"backdrop-invert":[f]}],"backdrop-opacity":[{"backdrop-opacity":[p]}],"backdrop-saturate":[{"backdrop-saturate":[b]}],"backdrop-sepia":[{"backdrop-sepia":[_]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",H]}],duration:[{duration:B()}],ease:[{ease:["linear","in","out","in-out",H]}],delay:[{delay:B()}],animate:[{animate:["none","spin","ping","pulse","bounce",H]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[$]}],"scale-x":[{"scale-x":[$]}],"scale-y":[{"scale-y":[$]}],rotate:[{rotate:[ro,H]}],"translate-x":[{"translate-x":[E]}],"translate-y":[{"translate-y":[E]}],"skew-x":[{"skew-x":[S]}],"skew-y":[{"skew-y":[S]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",H]}],accent:[{accent:["auto",e]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",H]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":k()}],"scroll-mx":[{"scroll-mx":k()}],"scroll-my":[{"scroll-my":k()}],"scroll-ms":[{"scroll-ms":k()}],"scroll-me":[{"scroll-me":k()}],"scroll-mt":[{"scroll-mt":k()}],"scroll-mr":[{"scroll-mr":k()}],"scroll-mb":[{"scroll-mb":k()}],"scroll-ml":[{"scroll-ml":k()}],"scroll-p":[{"scroll-p":k()}],"scroll-px":[{"scroll-px":k()}],"scroll-py":[{"scroll-py":k()}],"scroll-ps":[{"scroll-ps":k()}],"scroll-pe":[{"scroll-pe":k()}],"scroll-pt":[{"scroll-pt":k()}],"scroll-pr":[{"scroll-pr":k()}],"scroll-pb":[{"scroll-pb":k()}],"scroll-pl":[{"scroll-pl":k()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",H]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[Lt,rs]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}var HJ=PJ(WJ),qf={},Gh={},Yh={},Ql={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Direction=void 0,function(t){t.Right="to right",t.Left="to left",t.Down="to bottom",t.Up="to top"}(e.Direction||(e.Direction={}))})(Ql);(function(e){var t=at&&at.__spreadArray||function(w,k,P){if(P||arguments.length===2)for(var D=0,R=k.length,N;D<R;D++)(N||!(D in k))&&(N||(N=Array.prototype.slice.call(k,0,D)),N[D]=k[D]);return w.concat(N||Array.prototype.slice.call(k))};Object.defineProperty(e,"__esModule",{value:!0}),e.useThumbOverlap=e.assertUnreachable=e.voidFn=e.getTrackBackground=e.replaceAt=e.schd=e.translate=e.getClosestThumbIndex=e.translateThumbs=e.getPaddingAndBorder=e.getMargin=e.checkInitialOverlap=e.checkValuesAgainstBoundaries=e.checkBoundaries=e.isVertical=e.relativeValue=e.normalizeValue=e.isStepDivisible=e.isTouchEvent=e.getStepDecimals=void 0;var n=V,r=Ql,i=function(w){var k=w.toString().split(".")[1];return k?k.length:0};e.getStepDecimals=i;function o(w){return w.touches&&w.touches.length||w.changedTouches&&w.changedTouches.length}e.isTouchEvent=o;function a(w,k,P){var D=(k-w)/P,R=8,N=Number(D.toFixed(R));return parseInt(N.toString(),10)===N}e.isStepDivisible=a;function s(w,k,P,D,R,N,j){var A=1e11;if(w=Math.round(w*A)/A,!N){var M=j[k-1],I=j[k+1];if(M&&M>w)return M;if(I&&I<w)return I}if(w>D)return D;if(w<P)return P;var z=Math.floor(w*A-P*A)%Math.floor(R*A),B=Math.floor(w*A-Math.abs(z)),W=z===0?w:B/A,K=Math.abs(z/A)<R/2?W:W+R,de=(0,e.getStepDecimals)(R);return parseFloat(K.toFixed(de))}e.normalizeValue=s;function l(w,k,P){return(w-k)/(P-k)}e.relativeValue=l;function u(w){return w===r.Direction.Up||w===r.Direction.Down}e.isVertical=u;function c(w,k,P){if(k>=P)throw new RangeError("min (".concat(k,") is equal/bigger than max (").concat(P,")"));if(w<k)throw new RangeError("value (".concat(w,") is smaller than min (").concat(k,")"));if(w>P)throw new RangeError("value (".concat(w,") is bigger than max (").concat(P,")"))}e.checkBoundaries=c;function f(w,k,P){return w<k?k:w>P?P:w}e.checkValuesAgainstBoundaries=f;function d(w){if(!(w.length<2)&&!w.slice(1).every(function(k,P){return w[P]<=k}))throw new RangeError("values={[".concat(w,"]} needs to be sorted when allowOverlap={false}"))}e.checkInitialOverlap=d;function h(w){var k=window.getComputedStyle(w);return{top:parseInt(k["margin-top"],10),bottom:parseInt(k["margin-bottom"],10),left:parseInt(k["margin-left"],10),right:parseInt(k["margin-right"],10)}}e.getMargin=h;function g(w){var k=window.getComputedStyle(w);return{top:parseInt(k["padding-top"],10)+parseInt(k["border-top-width"],10),bottom:parseInt(k["padding-bottom"],10)+parseInt(k["border-bottom-width"],10),left:parseInt(k["padding-left"],10)+parseInt(k["border-left-width"],10),right:parseInt(k["padding-right"],10)+parseInt(k["border-right-width"],10)}}e.getPaddingAndBorder=g;function m(w,k,P){var D=P?-1:1;w.forEach(function(R,N){return p(R,D*k[N].x,k[N].y)})}e.translateThumbs=m;function y(w,k,P,D){for(var R=0,N=C(w[0],k,P,D),j=1;j<w.length;j++){var A=C(w[j],k,P,D);A<N&&(N=A,R=j)}return R}e.getClosestThumbIndex=y;function p(w,k,P){w.style.transform="translate(".concat(k,"px, ").concat(P,"px)")}e.translate=p;var v=function(w){var k=[],P=null,D=function(){for(var R=[],N=0;N<arguments.length;N++)R[N]=arguments[N];k=R,!P&&(P=requestAnimationFrame(function(){P=null,w.apply(void 0,k)}))};return D};e.schd=v;function b(w,k,P){var D=w.slice(0);return D[k]=P,D}e.replaceAt=b;function $(w){var k=w.values,P=w.colors,D=w.min,R=w.max,N=w.direction,j=N===void 0?r.Direction.Right:N,A=w.rtl,M=A===void 0?!1:A;M&&j===r.Direction.Right?j=r.Direction.Left:M&&r.Direction.Left&&(j=r.Direction.Right);var I=k.slice(0).sort(function(B,W){return B-W}).map(function(B){return(B-D)/(R-D)*100}),z=I.reduce(function(B,W,K){return"".concat(B,", ").concat(P[K]," ").concat(W,"%, ").concat(P[K+1]," ").concat(W,"%")},"");return"linear-gradient(".concat(j,", ").concat(P[0]," 0%").concat(z,", ").concat(P[P.length-1]," 100%)")}e.getTrackBackground=$;function _(){}e.voidFn=_;function S(w){throw new Error("Didn't expect to get here")}e.assertUnreachable=S;var x=function(w,k,P,D,R){R===void 0&&(R=function(j){return j});var N=Math.ceil(t([w],Array.from(w.children),!0).reduce(function(j,A){var M=Math.ceil(A.getBoundingClientRect().width);if(A.innerText&&A.innerText.includes(P)&&A.childElementCount===0){var I=A.cloneNode(!0);I.innerHTML=R(k.toFixed(D)),I.style.visibility="hidden",document.body.appendChild(I),M=Math.ceil(I.getBoundingClientRect().width),document.body.removeChild(I)}return M>j?M:j},w.getBoundingClientRect().width));return N},E=function(w,k,P,D,R,N,j){j===void 0&&(j=function(I){return I});var A=[],M=function(I){var z=x(P[I],D[I],R,N,j),B=k[I].x;k.forEach(function(W,K){var de=W.x,he=x(P[K],D[K],R,N,j);I!==K&&(B>=de&&B<=de+he||B+z>=de&&B+z<=de+he)&&(A.includes(K)||(A.push(I),A.push(K),A=t(t([],A,!0),[I,K],!1),M(K)))})};return M(w),Array.from(new Set(A.sort()))},O=function(w,k,P,D,R,N){D===void 0&&(D=.1),R===void 0&&(R=" - "),N===void 0&&(N=function(K){return K});var j=(0,e.getStepDecimals)(D),A=(0,n.useState)({}),M=A[0],I=A[1],z=(0,n.useState)(N(k[P].toFixed(j))),B=z[0],W=z[1];return(0,n.useEffect)(function(){if(w){var K=w.getThumbs();if(K.length<1)return;var de={},he=w.getOffsets(),Mt=E(P,he,K,k,R,j,N),pa=N(k[P].toFixed(j));if(Mt.length){var Rr=Mt.reduce(function(bn,va,Dr,Fi){return bn.length?t(t([],bn,!0),[he[Fi[Dr]].x],!1):[he[Fi[Dr]].x]},[]);if(Math.min.apply(Math,Rr)===he[P].x){var ga=[];Mt.forEach(function(bn){ga.push(k[bn].toFixed(j))}),pa=Array.from(new Set(ga.sort(function(bn,va){return parseFloat(bn)-parseFloat(va)}))).map(N).join(R);var Fr=Math.min.apply(Math,Rr),qn=Math.max.apply(Math,Rr),Zl=K[Mt[Rr.indexOf(qn)]].getBoundingClientRect().width;de.left="".concat(Math.abs(Fr-(qn+Zl))/2,"px"),de.transform="translate(-50%, 0)"}else de.visibility="hidden"}W(pa),I(de)}},[w,k]),[B,M]};e.useThumbOverlap=O;function C(w,k,P,D){var R=w.getBoundingClientRect(),N=R.left,j=R.top,A=R.width,M=R.height;return u(D)?Math.abs(P-(j+M/2)):Math.abs(k-(N+A/2))}})(Yh);var GJ=at&&at.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),YJ=at&&at.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),XJ=at&&at.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),KJ=at&&at.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&YJ(t,e,n);return XJ(t,e),t},Cy=at&&at.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(Gh,"__esModule",{value:!0});var is=KJ(V),Q=Yh,Ee=Ql,QJ=["ArrowRight","ArrowUp","k","PageUp"],ZJ=["ArrowLeft","ArrowDown","j","PageDown"],qJ=function(e){GJ(t,e);function t(n){var r=e.call(this,n)||this;if(r.trackRef=is.createRef(),r.thumbRefs=[],r.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(r.props.values.length).fill(0).map(function(i,o){return o}),isChanged:!1,markOffsets:[]},r.getOffsets=function(){var i=r.props,o=i.direction,a=i.values,s=i.min,l=i.max,u=r.trackRef.current,c=u.getBoundingClientRect(),f=(0,Q.getPaddingAndBorder)(u);return r.getThumbs().map(function(d,h){var g={x:0,y:0},m=d.getBoundingClientRect(),y=(0,Q.getMargin)(d);switch(o){case Ee.Direction.Right:return g.x=(y.left+f.left)*-1,g.y=((m.height-c.height)/2+f.top)*-1,g.x+=c.width*(0,Q.relativeValue)(a[h],s,l)-m.width/2,g;case Ee.Direction.Left:return g.x=(y.right+f.right)*-1,g.y=((m.height-c.height)/2+f.top)*-1,g.x+=c.width-c.width*(0,Q.relativeValue)(a[h],s,l)-m.width/2,g;case Ee.Direction.Up:return g.x=((m.width-c.width)/2+y.left+f.left)*-1,g.y=-f.left,g.y+=c.height-c.height*(0,Q.relativeValue)(a[h],s,l)-m.height/2,g;case Ee.Direction.Down:return g.x=((m.width-c.width)/2+y.left+f.left)*-1,g.y=-f.left,g.y+=c.height*(0,Q.relativeValue)(a[h],s,l)-m.height/2,g;default:return(0,Q.assertUnreachable)(o)}})},r.getThumbs=function(){return r.trackRef&&r.trackRef.current?Array.from(r.trackRef.current.children).filter(function(i){return i.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},r.getTargetIndex=function(i){return r.getThumbs().findIndex(function(o){return o===i.target||o.contains(i.target)})},r.addTouchEvents=function(i){document.addEventListener("touchmove",r.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",r.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",r.schdOnEnd,{passive:!1})},r.addMouseEvents=function(i){document.addEventListener("mousemove",r.schdOnMouseMove),document.addEventListener("mouseup",r.schdOnEnd)},r.onMouseDownTrack=function(i){var o;if(i.button===0)if(i.persist(),i.preventDefault(),r.addMouseEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(s){var l;return(l=s.current)===null||l===void 0?void 0:l.contains(i.target)}))return;r.setState({draggedTrackPos:[i.clientX,i.clientY]},function(){return r.onMove(i.clientX,i.clientY)})}else{var a=(0,Q.getClosestThumbIndex)(r.thumbRefs.map(function(s){return s.current}),i.clientX,i.clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.clientX,i.clientY)})}},r.onResize=function(){(0,Q.translateThumbs)(r.getThumbs(),r.getOffsets(),r.props.rtl),r.calculateMarkOffsets()},r.onTouchStartTrack=function(i){var o;if(i.persist(),r.addTouchEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(s){var l;return(l=s.current)===null||l===void 0?void 0:l.contains(i.target)}))return;r.setState({draggedTrackPos:[i.touches[0].clientX,i.touches[0].clientY]},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}else{var a=(0,Q.getClosestThumbIndex)(r.thumbRefs.map(function(s){return s.current}),i.touches[0].clientX,i.touches[0].clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}},r.onMouseOrTouchStart=function(i){if(!r.props.disabled){var o=(0,Q.isTouchEvent)(i);if(!(!o&&i.button!==0)){var a=r.getTargetIndex(i);a!==-1&&(o?r.addTouchEvents(i):r.addMouseEvents(i),r.setState({draggedThumbIndex:a,thumbZIndexes:r.state.thumbZIndexes.map(function(s,l){return l===a?Math.max.apply(Math,r.state.thumbZIndexes):s<=r.state.thumbZIndexes[a]?s:s-1})}))}}},r.onMouseMove=function(i){i.preventDefault(),r.onMove(i.clientX,i.clientY)},r.onTouchMove=function(i){i.preventDefault(),r.onMove(i.touches[0].clientX,i.touches[0].clientY)},r.onKeyDown=function(i){var o=r.props,a=o.values,s=o.onChange,l=o.step,u=o.rtl,c=o.direction,f=r.state.isChanged,d=r.getTargetIndex(i.nativeEvent),h=u||c===Ee.Direction.Left||c===Ee.Direction.Down?-1:1;d!==-1&&(QJ.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:d,isChanged:!0}),s((0,Q.replaceAt)(a,d,r.normalizeValue(a[d]+h*(i.key==="PageUp"?l*10:l),d)))):ZJ.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:d,isChanged:!0}),s((0,Q.replaceAt)(a,d,r.normalizeValue(a[d]-h*(i.key==="PageDown"?l*10:l),d)))):i.key==="Tab"?r.setState({draggedThumbIndex:-1},function(){f&&r.fireOnFinalChange()}):f&&r.fireOnFinalChange())},r.onKeyUp=function(i){var o=r.state.isChanged;r.setState({draggedThumbIndex:-1},function(){o&&r.fireOnFinalChange()})},r.onMove=function(i,o){var a=r.state,s=a.draggedThumbIndex,l=a.draggedTrackPos,u=r.props,c=u.direction,f=u.min,d=u.max,h=u.onChange,g=u.values,m=u.step,y=u.rtl;if(s===-1&&l[0]===-1&&l[1]===-1)return null;var p=r.trackRef.current;if(!p)return null;var v=p.getBoundingClientRect(),b=(0,Q.isVertical)(c)?v.height:v.width;if(l[0]!==-1&&l[1]!==-1){var $=i-l[0],_=o-l[1],S=0;switch(c){case Ee.Direction.Right:case Ee.Direction.Left:S=$/b*(d-f);break;case Ee.Direction.Down:case Ee.Direction.Up:S=_/b*(d-f);break;default:(0,Q.assertUnreachable)(c)}if(y&&(S*=-1),Math.abs(S)>=m/2){for(var x=0;x<r.thumbRefs.length;x++){if(g[x]===d&&Math.sign(S)===1||g[x]===f&&Math.sign(S)===-1)return;var E=g[x]+S;E>d?S=d-g[x]:E<f&&(S=f-g[x])}for(var O=g.slice(0),x=0;x<r.thumbRefs.length;x++)O=(0,Q.replaceAt)(O,x,r.normalizeValue(g[x]+S,x));r.setState({draggedTrackPos:[i,o]}),h(O)}}else{var C=0;switch(c){case Ee.Direction.Right:C=(i-v.left)/b*(d-f)+f;break;case Ee.Direction.Left:C=(b-(i-v.left))/b*(d-f)+f;break;case Ee.Direction.Down:C=(o-v.top)/b*(d-f)+f;break;case Ee.Direction.Up:C=(b-(o-v.top))/b*(d-f)+f;break;default:(0,Q.assertUnreachable)(c)}y&&(C=d+f-C),Math.abs(g[s]-C)>=m/2&&h((0,Q.replaceAt)(g,s,r.normalizeValue(C,s)))}},r.normalizeValue=function(i,o){var a=r.props,s=a.min,l=a.max,u=a.step,c=a.allowOverlap,f=a.values;return(0,Q.normalizeValue)(i,o,s,l,u,c,f)},r.onEnd=function(i){if(i.preventDefault(),document.removeEventListener("mousemove",r.schdOnMouseMove),document.removeEventListener("touchmove",r.schdOnTouchMove),document.removeEventListener("mouseup",r.schdOnEnd),document.removeEventListener("touchend",r.schdOnEnd),document.removeEventListener("touchcancel",r.schdOnEnd),r.state.draggedThumbIndex===-1&&r.state.draggedTrackPos[0]===-1&&r.state.draggedTrackPos[1]===-1)return null;r.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){r.fireOnFinalChange()})},r.fireOnFinalChange=function(){r.setState({isChanged:!1});var i=r.props,o=i.onFinalChange,a=i.values;o&&o(a)},r.updateMarkRefs=function(i){if(!i.renderMark){r.numOfMarks=void 0,r.markRefs=void 0;return}r.numOfMarks=(i.max-i.min)/r.props.step,r.markRefs=[];for(var o=0;o<r.numOfMarks+1;o++)r.markRefs[o]=is.createRef()},r.calculateMarkOffsets=function(){if(!(!r.props.renderMark||!r.trackRef||!r.numOfMarks||!r.markRefs||r.trackRef.current===null)){for(var i=window.getComputedStyle(r.trackRef.current),o=parseInt(i.width,10),a=parseInt(i.height,10),s=parseInt(i.paddingLeft,10),l=parseInt(i.paddingTop,10),u=[],c=0;c<r.numOfMarks+1;c++){var f=9999,d=9999;if(r.markRefs[c].current){var h=r.markRefs[c].current.getBoundingClientRect();f=h.height,d=h.width}r.props.direction===Ee.Direction.Left||r.props.direction===Ee.Direction.Right?u.push([Math.round(o/r.numOfMarks*c+s-d/2),-Math.round((f-a)/2)]):u.push([Math.round(a/r.numOfMarks*c+l-f/2),-Math.round((d-o)/2)])}r.setState({markOffsets:u})}},n.step===0)throw new Error('"step" property should be a positive number');return r.schdOnMouseMove=(0,Q.schd)(r.onMouseMove),r.schdOnTouchMove=(0,Q.schd)(r.onTouchMove),r.schdOnEnd=(0,Q.schd)(r.onEnd),r.thumbRefs=n.values.map(function(){return is.createRef()}),r.updateMarkRefs(n),r}return t.prototype.componentDidMount=function(){var n=this,r=this.props,i=r.values,o=r.min,a=r.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",n.onResize)},unobserve:function(){return window.removeEventListener("resize",n.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,Q.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(s){return(0,Q.checkBoundaries)(s,n.props.min,n.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,Q.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),i.forEach(function(s){(0,Q.isStepDivisible)(o,s,a)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},t.prototype.componentDidUpdate=function(n,r){var i=this.props,o=i.max,a=i.min,s=i.step,l=i.values,u=i.rtl;(n.max!==o||n.min!==a||n.step!==s)&&this.updateMarkRefs(this.props),(0,Q.translateThumbs)(this.getThumbs(),this.getOffsets(),u),(n.max!==o||n.min!==a||n.step!==s||r.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),l.forEach(function(c){(0,Q.isStepDivisible)(a,c,s)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},t.prototype.componentWillUnmount=function(){var n={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,n),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},t.prototype.render=function(){var n=this,r=this.props,i=r.renderTrack,o=r.renderThumb,a=r.renderMark,s=a===void 0?function(){return null}:a,l=r.values,u=r.min,c=r.max,f=r.allowOverlap,d=r.disabled,h=this.state,g=h.draggedThumbIndex,m=h.thumbZIndexes,y=h.markOffsets;return i({props:{style:{transform:"scale(1)",cursor:g>-1?"grabbing":this.props.draggableTrack?(0,Q.isVertical)(this.props.direction)?"ns-resize":"ew-resize":l.length===1&&!d?"pointer":"inherit"},onMouseDown:d?Q.voidFn:this.onMouseDownTrack,onTouchStart:d?Q.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:d,children:Cy(Cy([],y.map(function(p,v,b){return s({props:{style:n.props.direction===Ee.Direction.Left||n.props.direction===Ee.Direction.Right?{position:"absolute",left:"".concat(p[0],"px"),marginTop:"".concat(p[1],"px")}:{position:"absolute",top:"".concat(p[0],"px"),marginLeft:"".concat(p[1],"px")},key:"mark".concat(v),ref:n.markRefs[v]},index:v})}),!0),l.map(function(p,v){var b=n.state.draggedThumbIndex===v;return o({index:v,value:p,isDragged:b,props:{style:{position:"absolute",zIndex:m[v],cursor:d?"inherit":b?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:v,tabIndex:d?void 0:0,"aria-valuemax":f?c:l[v+1]||c,"aria-valuemin":f?u:l[v-1]||u,"aria-valuenow":p,draggable:!1,ref:n.thumbRefs[v],role:"slider",onKeyDown:d?Q.voidFn:n.onKeyDown,onKeyUp:d?Q.voidFn:n.onKeyUp}})}),!0)})},t.defaultProps={step:1,direction:Ee.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},t}(is.Component);Gh.default=qJ;(function(e){var t=at&&at.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(e,"__esModule",{value:!0}),e.checkValuesAgainstBoundaries=e.relativeValue=e.useThumbOverlap=e.Direction=e.getTrackBackground=e.Range=void 0;var n=t(Gh);e.Range=n.default;var r=Yh;Object.defineProperty(e,"getTrackBackground",{enumerable:!0,get:function(){return r.getTrackBackground}}),Object.defineProperty(e,"useThumbOverlap",{enumerable:!0,get:function(){return r.useThumbOverlap}}),Object.defineProperty(e,"relativeValue",{enumerable:!0,get:function(){return r.relativeValue}}),Object.defineProperty(e,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return r.checkValuesAgainstBoundaries}});var i=Ql;Object.defineProperty(e,"Direction",{enumerable:!0,get:function(){return i.Direction}})})(qf);const Ht=({min:e,max:t,step:n=1,values:r,onChange:i})=>L.jsx(qf.Range,{step:n,min:e,max:t,values:r,onChange:i,renderTrack:({props:o,children:a})=>L.jsx("div",{onMouseDown:o.onMouseDown,onTouchStart:o.onTouchStart,style:{...o.style,height:"36px",display:"flex",width:"100%"},children:L.jsx("div",{ref:o.ref,style:{height:"5px",width:"100%",borderRadius:"4px",background:qf.getTrackBackground({values:r,colors:r.length===1?["#548BF4","#ccc"]:["#ccc","#548BF4","#ccc"],min:e,max:t}),alignSelf:"center"},children:a})}),renderThumb:({props:o,isDragged:a,value:s})=>L.jsx("div",{...o,style:{...o.style,height:"1.5rem",width:"1.5rem",borderRadius:"2px",backgroundColor:"#FFF",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"0px 2px 6px #AAA"},children:L.jsx("div",{className:HJ("h-2 w-1 bg-[#CCC] relative",a&&"bg-[#548BF4]"),children:L.jsx("div",{className:"absolute rounded-sm -top-8 left-1/2 text-sm -translate-x-1/2 bg-white shadow p-[2px]",children:s})})})});Pl.register(af,sf,$s,ho,WE,qE,UE);const JJ=(e,t)=>{const n=e+Math.random()*(t+1-e);return Math.floor(n)},Wr=new Intl.NumberFormat("ru-RU",{style:"currency",currency:"RUB"}).format,eee=()=>{const[e,t]=V.useState(1e5),[n,r]=V.useState(.2),[i,o]=V.useState(.5),[a,s]=V.useState(5e4),[l,u]=V.useState(5e4),[c,f]=V.useState(10),[d,h]=V.useState([500,2e3]),[g,m]=V.useState([5e4,2e5]),[y,p]=V.useState(5e4),[v,b]=V.useState(100),[$,_]=V.useState([{name:"Пицца Гавайская",price:300},{name:"Пицца Сырная",price:200},{name:"Пицца Ветчина и сыр",price:400},{name:"Пицца Мясная",price:450},{name:"Пицца Мясная",price:450}]),S=V.useRef(null),[x,E]=V.useState(!1),[O,C]=V.useState(!1),[w,k]=V.useState(0),[P,D]=V.useState(0),[R,N]=V.useState(0),[j,A]=V.useState(0),[M,I]=V.useState([]),[z,B]=V.useState([]),[W,K]=V.useState([]),[de,he]=V.useState([]),[Mt,pa]=V.useState([]),[Rr,ga]=V.useState([]),Fr=Y=>Math.floor(Y*300),qn=(Y,ke)=>Y-ke,Zl=Y=>{Y.preventDefault(),O||(A(n),N(e),C(!0)),E(!0)},bn=()=>{E(!1)},va=(Y,ke)=>{const lt=Number(ke);isNaN(lt)||_(Fe=>Fe.map(Vt=>Vt.name!==Y?Vt:{name:Y,price:lt}))},Dr=Fr(i),Fi=M[M.length-1]??0,Xh=z[z.length-1]??0,j_=qn(Xh,Fi);return V.useEffect(()=>{const Y=()=>{const lt=Math.min(Fr(j),Dr),Fe=[...$].sort((Ot,$n)=>$n.price-Ot.price);let Vt=0;for(let Ot=0;Ot<lt;Ot++){const $n=d[0]+(d[1]-d[0])*.2;let J=ky(d[0],d[1],$n);for(const ql of Fe)for(;J>=ql.price;)Vt+=ql.price,J-=ql.price}return Vt},ke=lt=>{let Fe=0;if(Fe+=lt*.5,w%30===0&&(Fe+=l,Fe+=a,w!==0)){const Ot=W.slice(w-29,w).reduce(($n,J)=>$n+J);Fe+=Ot*(c/100)}if(w%7===0){const Vt=g[0]+(g[1]-g[0])*.3,Ot=ky(g[0],g[1],Vt);Fe+=Ot}return Fe};return x?S.current=setTimeout(()=>{const lt=Y()+(w===0?e:0),Fe=ke(lt),Vt=qn(lt,Fe);Qc.flushSync(()=>{k(J=>J+1),A(J=>+(J+JJ(-1,1)/100).toFixed(2)),D(J=>J+Fe),N(J=>J+lt),I(J=>[...J,Fe]),B(J=>[...J,lt]),K(J=>[...J,Vt])});const Ot=qn(R,P),$n=Math.max(Fr(j)-Dr,0);Qc.flushSync(()=>{he(J=>[...J,Ot]),A(J=>+(J-$n*.001).toFixed(2)),w%14===0&&j<i&&Ot>l+a&&(A(J=>+(J+.1).toFixed(2)),D(J=>J+y))}),pa(J=>[...J,j]),ga(J=>[...J,$n])},v):S.current!==null&&clearTimeout(S.current),()=>{S.current!==null&&clearTimeout(S.current)}},[w,v,j,l,a,R,P,y,x,$,d,g,e,W,c,i,Dr]),L.jsxs("div",{className:"main-container",children:[L.jsx("header",{className:"mb-10",children:L.jsx("h1",{className:"text-2xl py-4",children:"Цифровой двойник пиццерии"})}),L.jsxs("form",{onSubmit:Zl,className:"mb-10",children:[L.jsxs("div",{className:"grid grid-cols-2 gap-20 mb-4",children:[L.jsxs("div",{className:"flex flex-col gap-4",children:[L.jsxs("label",{className:"flex items-center whitespace-nowrap gap-4",children:["Стартовый капитал:",L.jsx("div",{className:"max-w-xs w-full",children:L.jsx(Ht,{min:1e5,max:1e6,values:[e],onChange:Y=>t(Y[0])})})]}),L.jsxs("label",{className:"flex items-center whitespace-nowrap gap-4",children:["Стартовая популярность:",L.jsx("div",{className:"max-w-xs w-full",children:L.jsx(Ht,{min:.1,max:1,step:.1,values:[n],onChange:Y=>r(Y[0])})})]}),L.jsxs("label",{className:"flex items-center whitespace-nowrap gap-4",children:["Желаемая популярность:",L.jsx("div",{className:"max-w-xs w-full",children:L.jsx(Ht,{min:.1,max:1,step:.1,values:[i],onChange:Y=>o(Y[0])})})]}),L.jsxs("label",{className:"flex items-center whitespace-nowrap gap-4",children:["Аренда помещения (раз в месяц):",L.jsx("div",{className:"max-w-xs w-full",children:L.jsx(Ht,{min:5e4,max:1e6,values:[a],onChange:Y=>s(Y[0])})})]}),L.jsxs("label",{className:"flex items-center whitespace-nowrap gap-4",children:["Зарплата сотрудников, всего (раз в месяц):",L.jsx("div",{className:"max-w-xs w-full",children:L.jsx(Ht,{min:5e4,max:1e6,values:[l],onChange:Y=>u(Y[0])})})]}),L.jsxs("label",{className:"flex items-center whitespace-nowrap gap-4",children:["Налоги (%):",L.jsx("div",{className:"max-w-xs w-full",children:L.jsx(Ht,{min:0,max:100,values:[c],onChange:Y=>f(Y[0])})})]}),L.jsxs("label",{className:"flex items-center whitespace-nowrap gap-4",children:["Кошелёк покупателя:",L.jsx("div",{className:"max-w-xs w-full",children:L.jsx(Ht,{min:500,max:15e3,values:d,onChange:h})})]}),L.jsxs("label",{className:"flex items-center whitespace-nowrap gap-4",children:["Стоимость разрешения инцидентов:",L.jsx("div",{className:"max-w-xs w-full",children:L.jsx(Ht,{min:5e4,max:3e5,values:g,onChange:m})})]}),L.jsxs("label",{className:"flex items-center whitespace-nowrap gap-4",children:["Стоимость одной рекламы:",L.jsx("div",{className:"max-w-xs w-full",children:L.jsx(Ht,{min:5e4,max:2e6,values:[y],onChange:Y=>p(Y[0])})})]}),L.jsxs("label",{className:"flex items-center whitespace-nowrap gap-4",children:["Скорость дня (мс):",L.jsx("div",{className:"max-w-xs w-full",children:L.jsx(Ht,{min:1,max:1e4,values:[v],onChange:Y=>b(Y[0])})})]})]}),L.jsx("div",{className:"flex flex-col gap-1",children:$.map(({name:Y,price:ke},lt)=>L.jsxs("label",{children:[Y,":"," ",L.jsx("input",{type:"text",value:ke,onChange:Fe=>va(Y,Fe.target.value)})]},lt))})]}),L.jsxs("div",{className:"flex items-center gap-3",children:[L.jsx("button",{className:"bg-[#548BF4] px-6 py-2 rounded text-white font-semibold",children:"Начать"}),x&&L.jsx("button",{className:"bg-red-500 px-6 py-2 rounded text-white font-semibold",onClick:bn,type:"button",children:"Стоп"})]})]}),L.jsxs("div",{className:"mb-10",children:[L.jsxs("p",{children:["День: ",w]}),L.jsxs("p",{children:["Расходы всего: ",Wr(P)]}),L.jsxs("p",{children:["Доходы всего: ",Wr(R)]}),L.jsxs("p",{children:["Прибыль всего: ",Wr(qn(R,P))]}),L.jsxs("p",{children:["Популярность: ",j]}),L.jsxs("p",{children:["Клиентов сегодня: ",Fr(j)]}),L.jsxs("p",{children:["Расходы сегодня: ",Wr(Fi)]}),L.jsxs("p",{children:["Доходы сегодня: ",Wr(Xh)]}),L.jsxs("p",{children:["Прибыль сегодня: ",Wr(j_)]})]}),L.jsxs("div",{className:"grid grid-cols-2 gap-4 px-10 pb-32",children:[L.jsx("div",{children:L.jsx(Br,{options:{responsive:!0},data:{labels:new Array(w).fill(0).map((Y,ke)=>ke),datasets:[{label:"Расходы",data:M,borderColor:"rgb(255, 99, 132)",backgroundColor:"rgba(255, 99, 132, 0.5)"}]}})}),L.jsx("div",{children:L.jsx(Br,{options:{responsive:!0},data:{labels:new Array(w).fill(0).map((Y,ke)=>ke),datasets:[{label:"Доходы",data:z,borderColor:"rgb(53, 162, 235)",backgroundColor:"rgba(53, 162, 235, 0.5)"}]}})}),L.jsx("div",{children:L.jsx(Br,{options:{responsive:!0},data:{labels:new Array(w).fill(0).map((Y,ke)=>ke),datasets:[{label:"Прибыль",data:de,borderColor:"rgb(53, 162, 53)",backgroundColor:"rgba(53, 162, 53, 0.5)"}]}})}),L.jsx("div",{children:L.jsx(Br,{options:{responsive:!0},data:{labels:new Array(w).fill(0).map((Y,ke)=>ke),datasets:[{label:"Расходы",data:M,borderColor:"rgb(255, 99, 132)",backgroundColor:"rgba(255, 99, 132, 0.5)"},{label:"Доходы",data:z,borderColor:"rgb(53, 162, 235)",backgroundColor:"rgba(53, 162, 235, 0.5)"}]}})}),L.jsx("div",{children:L.jsx(Br,{options:{responsive:!0},data:{labels:new Array(w).fill(0).map((Y,ke)=>ke),datasets:[{label:"Уровень популярности",data:Mt,borderColor:"rgb(53, 162, 235)",backgroundColor:"rgba(53, 162, 235, 0.5)"}]}})}),L.jsx("div",{children:L.jsx(Br,{options:{responsive:!0},data:{labels:new Array(w).fill(0).map((Y,ke)=>ke),datasets:[{label:"Необслуженные клиенты",data:Rr,borderColor:"rgb(255, 99, 132)",backgroundColor:"rgba(255, 99, 132, 0.5)"}]}})})]})]})};rc.createRoot(document.getElementById("root")).render(L.jsx(rd.StrictMode,{children:L.jsx(eee,{})}));
