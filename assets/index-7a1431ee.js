var I_=Object.defineProperty;var L_=(e,t,n)=>t in e?I_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var U=(e,t,n)=>(L_(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var st=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function xy(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Sy={exports:{}},ll={},ky={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xo=Symbol.for("react.element"),R_=Symbol.for("react.portal"),N_=Symbol.for("react.fragment"),F_=Symbol.for("react.strict_mode"),D_=Symbol.for("react.profiler"),j_=Symbol.for("react.provider"),z_=Symbol.for("react.context"),B_=Symbol.for("react.forward_ref"),U_=Symbol.for("react.suspense"),V_=Symbol.for("react.memo"),W_=Symbol.for("react.lazy"),Uh=Symbol.iterator;function H_(e){return e===null||typeof e!="object"?null:(e=Uh&&e[Uh]||e["@@iterator"],typeof e=="function"?e:null)}var Ey={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ay=Object.assign,Ty={};function _i(e,t,n){this.props=e,this.context=t,this.refs=Ty,this.updater=n||Ey}_i.prototype.isReactComponent={};_i.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};_i.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Cy(){}Cy.prototype=_i.prototype;function Yf(e,t,n){this.props=e,this.context=t,this.refs=Ty,this.updater=n||Ey}var Xf=Yf.prototype=new Cy;Xf.constructor=Yf;Ay(Xf,_i.prototype);Xf.isPureReactComponent=!0;var Vh=Array.isArray,Py=Object.prototype.hasOwnProperty,Kf={current:null},My={key:!0,ref:!0,__self:!0,__source:!0};function Oy(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Py.call(t,r)&&!My.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Xo,type:e,key:o,ref:a,props:i,_owner:Kf.current}}function G_(e,t){return{$$typeof:Xo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Qf(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xo}function Y_(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Wh=/\/+/g;function Xl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Y_(""+e.key):t.toString(36)}function ts(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Xo:case R_:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Xl(a,0):r,Vh(i)?(n="",e!=null&&(n=e.replace(Wh,"$&/")+"/"),ts(i,t,n,"",function(u){return u})):i!=null&&(Qf(i)&&(i=G_(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Wh,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Vh(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+Xl(o,s);a+=ts(o,t,n,l,i)}else if(l=H_(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+Xl(o,s++),a+=ts(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function da(e,t,n){if(e==null)return e;var r=[],i=0;return ts(e,r,"","",function(o){return t.call(n,o,i++)}),r}function X_(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ye={current:null},ns={transition:null},K_={ReactCurrentDispatcher:Ye,ReactCurrentBatchConfig:ns,ReactCurrentOwner:Kf};G.Children={map:da,forEach:function(e,t,n){da(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return da(e,function(){t++}),t},toArray:function(e){return da(e,function(t){return t})||[]},only:function(e){if(!Qf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};G.Component=_i;G.Fragment=N_;G.Profiler=D_;G.PureComponent=Yf;G.StrictMode=F_;G.Suspense=U_;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K_;G.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ay({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Kf.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Py.call(t,l)&&!My.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Xo,type:e.type,key:i,ref:o,props:r,_owner:a}};G.createContext=function(e){return e={$$typeof:z_,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:j_,_context:e},e.Consumer=e};G.createElement=Oy;G.createFactory=function(e){var t=Oy.bind(null,e);return t.type=e,t};G.createRef=function(){return{current:null}};G.forwardRef=function(e){return{$$typeof:B_,render:e}};G.isValidElement=Qf;G.lazy=function(e){return{$$typeof:W_,_payload:{_status:-1,_result:e},_init:X_}};G.memo=function(e,t){return{$$typeof:V_,type:e,compare:t===void 0?null:t}};G.startTransition=function(e){var t=ns.transition;ns.transition={};try{e()}finally{ns.transition=t}};G.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};G.useCallback=function(e,t){return Ye.current.useCallback(e,t)};G.useContext=function(e){return Ye.current.useContext(e)};G.useDebugValue=function(){};G.useDeferredValue=function(e){return Ye.current.useDeferredValue(e)};G.useEffect=function(e,t){return Ye.current.useEffect(e,t)};G.useId=function(){return Ye.current.useId()};G.useImperativeHandle=function(e,t,n){return Ye.current.useImperativeHandle(e,t,n)};G.useInsertionEffect=function(e,t){return Ye.current.useInsertionEffect(e,t)};G.useLayoutEffect=function(e,t){return Ye.current.useLayoutEffect(e,t)};G.useMemo=function(e,t){return Ye.current.useMemo(e,t)};G.useReducer=function(e,t,n){return Ye.current.useReducer(e,t,n)};G.useRef=function(e){return Ye.current.useRef(e)};G.useState=function(e){return Ye.current.useState(e)};G.useSyncExternalStore=function(e,t,n){return Ye.current.useSyncExternalStore(e,t,n)};G.useTransition=function(){return Ye.current.useTransition()};G.version="18.2.0";ky.exports=G;var W=ky.exports;const Zf=xy(W);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q_=W,Z_=Symbol.for("react.element"),q_=Symbol.for("react.fragment"),J_=Object.prototype.hasOwnProperty,ew=Q_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tw={key:!0,ref:!0,__self:!0,__source:!0};function Iy(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)J_.call(t,r)&&!tw.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Z_,type:e,key:o,ref:a,props:i,_owner:ew.current}}ll.Fragment=q_;ll.jsx=Iy;ll.jsxs=Iy;Sy.exports=ll;var N=Sy.exports,qu={},Ly={exports:{}},yt={},Ry={exports:{}},Ny={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,O){var I=A.length;A.push(O);e:for(;0<I;){var B=I-1>>>1,z=A[B];if(0<i(z,O))A[B]=O,A[I]=z,I=B;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var O=A[0],I=A.pop();if(I!==O){A[0]=I;e:for(var B=0,z=A.length,V=z>>>1;B<V;){var X=2*(B+1)-1,ce=A[X],te=X+1,It=A[te];if(0>i(ce,I))te<z&&0>i(It,ce)?(A[B]=It,A[te]=I,B=te):(A[B]=ce,A[X]=I,B=X);else if(te<z&&0>i(It,I))A[B]=It,A[te]=I,B=te;else break e}}return O}function i(A,O){var I=A.sortIndex-O.sortIndex;return I!==0?I:A.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],c=1,f=null,d=3,h=!1,g=!1,m=!1,y=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(A){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=A)r(u),O.sortIndex=O.expirationTime,t(l,O);else break;O=n(u)}}function $(A){if(m=!1,b(A),!g)if(n(l)!==null)g=!0,L(_);else{var O=n(u);O!==null&&j($,O.startTime-A)}}function _(A,O){g=!1,m&&(m=!1,p(E),E=-1),h=!0;var I=d;try{for(b(O),f=n(l);f!==null&&(!(f.expirationTime>O)||A&&!x());){var B=f.callback;if(typeof B=="function"){f.callback=null,d=f.priorityLevel;var z=B(f.expirationTime<=O);O=e.unstable_now(),typeof z=="function"?f.callback=z:f===n(l)&&r(l),b(O)}else r(l);f=n(l)}if(f!==null)var V=!0;else{var X=n(u);X!==null&&j($,X.startTime-O),V=!1}return V}finally{f=null,d=I,h=!1}}var k=!1,w=null,E=-1,C=5,P=-1;function x(){return!(e.unstable_now()-P<C)}function S(){if(w!==null){var A=e.unstable_now();P=A;var O=!0;try{O=w(!0,A)}finally{O?M():(k=!1,w=null)}}else k=!1}var M;if(typeof v=="function")M=function(){v(S)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,R=D.port2;D.port1.onmessage=S,M=function(){R.postMessage(null)}}else M=function(){y(S,0)};function L(A){w=A,k||(k=!0,M())}function j(A,O){E=y(function(){A(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){g||h||(g=!0,L(_))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(A){switch(d){case 1:case 2:case 3:var O=3;break;default:O=d}var I=d;d=O;try{return A()}finally{d=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,O){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var I=d;d=A;try{return O()}finally{d=I}},e.unstable_scheduleCallback=function(A,O,I){var B=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?B+I:B):I=B,A){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=I+z,A={id:c++,callback:O,priorityLevel:A,startTime:I,expirationTime:z,sortIndex:-1},I>B?(A.sortIndex=I,t(u,A),n(l)===null&&A===n(u)&&(m?(p(E),E=-1):m=!0,j($,I-B))):(A.sortIndex=z,t(l,A),g||h||(g=!0,L(_))),A},e.unstable_shouldYield=x,e.unstable_wrapCallback=function(A){var O=d;return function(){var I=d;d=O;try{return A.apply(this,arguments)}finally{d=I}}}})(Ny);Ry.exports=Ny;var nw=Ry.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fy=W,mt=nw;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Dy=new Set,Eo={};function wr(e,t){si(e,t),si(e+"Capture",t)}function si(e,t){for(Eo[e]=t,e=0;e<t.length;e++)Dy.add(t[e])}var hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ju=Object.prototype.hasOwnProperty,rw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hh={},Gh={};function iw(e){return Ju.call(Gh,e)?!0:Ju.call(Hh,e)?!1:rw.test(e)?Gh[e]=!0:(Hh[e]=!0,!1)}function ow(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function aw(e,t,n,r){if(t===null||typeof t>"u"||ow(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Xe(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Fe[e]=new Xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Fe[t]=new Xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Fe[e]=new Xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Fe[e]=new Xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Fe[e]=new Xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Fe[e]=new Xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Fe[e]=new Xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Fe[e]=new Xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Fe[e]=new Xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var qf=/[\-:]([a-z])/g;function Jf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(qf,Jf);Fe[t]=new Xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(qf,Jf);Fe[t]=new Xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(qf,Jf);Fe[t]=new Xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Fe[e]=new Xe(e,1,!1,e.toLowerCase(),null,!1,!1)});Fe.xlinkHref=new Xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Fe[e]=new Xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function ed(e,t,n,r){var i=Fe.hasOwnProperty(t)?Fe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(aw(t,n,i,r)&&(n=null),r||i===null?iw(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var yn=Fy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ha=Symbol.for("react.element"),jr=Symbol.for("react.portal"),zr=Symbol.for("react.fragment"),td=Symbol.for("react.strict_mode"),ec=Symbol.for("react.profiler"),jy=Symbol.for("react.provider"),zy=Symbol.for("react.context"),nd=Symbol.for("react.forward_ref"),tc=Symbol.for("react.suspense"),nc=Symbol.for("react.suspense_list"),rd=Symbol.for("react.memo"),xn=Symbol.for("react.lazy"),By=Symbol.for("react.offscreen"),Yh=Symbol.iterator;function Oi(e){return e===null||typeof e!="object"?null:(e=Yh&&e[Yh]||e["@@iterator"],typeof e=="function"?e:null)}var me=Object.assign,Kl;function Ji(e){if(Kl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Kl=t&&t[1]||""}return`
`+Kl+e}var Ql=!1;function Zl(e,t){if(!e||Ql)return"";Ql=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{Ql=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ji(e):""}function sw(e){switch(e.tag){case 5:return Ji(e.type);case 16:return Ji("Lazy");case 13:return Ji("Suspense");case 19:return Ji("SuspenseList");case 0:case 2:case 15:return e=Zl(e.type,!1),e;case 11:return e=Zl(e.type.render,!1),e;case 1:return e=Zl(e.type,!0),e;default:return""}}function rc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case zr:return"Fragment";case jr:return"Portal";case ec:return"Profiler";case td:return"StrictMode";case tc:return"Suspense";case nc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case zy:return(e.displayName||"Context")+".Consumer";case jy:return(e._context.displayName||"Context")+".Provider";case nd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case rd:return t=e.displayName||null,t!==null?t:rc(e.type)||"Memo";case xn:t=e._payload,e=e._init;try{return rc(e(t))}catch{}}return null}function lw(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return rc(t);case 8:return t===td?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Vn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Uy(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function uw(e){var t=Uy(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function pa(e){e._valueTracker||(e._valueTracker=uw(e))}function Vy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Uy(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function bs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ic(e,t){var n=t.checked;return me({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Xh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Vn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Wy(e,t){t=t.checked,t!=null&&ed(e,"checked",t,!1)}function oc(e,t){Wy(e,t);var n=Vn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ac(e,t.type,n):t.hasOwnProperty("defaultValue")&&ac(e,t.type,Vn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Kh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ac(e,t,n){(t!=="number"||bs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var eo=Array.isArray;function Zr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Vn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function sc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return me({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Qh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(T(92));if(eo(n)){if(1<n.length)throw Error(T(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Vn(n)}}function Hy(e,t){var n=Vn(t.value),r=Vn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Zh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Gy(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Gy(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ga,Yy=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ga=ga||document.createElement("div"),ga.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ga.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ao(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var lo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cw=["Webkit","ms","Moz","O"];Object.keys(lo).forEach(function(e){cw.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),lo[t]=lo[e]})});function Xy(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||lo.hasOwnProperty(e)&&lo[e]?(""+t).trim():t+"px"}function Ky(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Xy(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var fw=me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function uc(e,t){if(t){if(fw[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function cc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fc=null;function id(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dc=null,qr=null,Jr=null;function qh(e){if(e=Zo(e)){if(typeof dc!="function")throw Error(T(280));var t=e.stateNode;t&&(t=hl(t),dc(e.stateNode,e.type,t))}}function Qy(e){qr?Jr?Jr.push(e):Jr=[e]:qr=e}function Zy(){if(qr){var e=qr,t=Jr;if(Jr=qr=null,qh(e),t)for(e=0;e<t.length;e++)qh(t[e])}}function qy(e,t){return e(t)}function Jy(){}var ql=!1;function e0(e,t,n){if(ql)return e(t,n);ql=!0;try{return qy(e,t,n)}finally{ql=!1,(qr!==null||Jr!==null)&&(Jy(),Zy())}}function To(e,t){var n=e.stateNode;if(n===null)return null;var r=hl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(T(231,t,typeof n));return n}var hc=!1;if(hn)try{var Ii={};Object.defineProperty(Ii,"passive",{get:function(){hc=!0}}),window.addEventListener("test",Ii,Ii),window.removeEventListener("test",Ii,Ii)}catch{hc=!1}function dw(e,t,n,r,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var uo=!1,$s=null,_s=!1,pc=null,hw={onError:function(e){uo=!0,$s=e}};function pw(e,t,n,r,i,o,a,s,l){uo=!1,$s=null,dw.apply(hw,arguments)}function gw(e,t,n,r,i,o,a,s,l){if(pw.apply(this,arguments),uo){if(uo){var u=$s;uo=!1,$s=null}else throw Error(T(198));_s||(_s=!0,pc=u)}}function xr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function t0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Jh(e){if(xr(e)!==e)throw Error(T(188))}function vw(e){var t=e.alternate;if(!t){if(t=xr(e),t===null)throw Error(T(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Jh(i),e;if(o===r)return Jh(i),t;o=o.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?e:t}function n0(e){return e=vw(e),e!==null?r0(e):null}function r0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=r0(e);if(t!==null)return t;e=e.sibling}return null}var i0=mt.unstable_scheduleCallback,ep=mt.unstable_cancelCallback,mw=mt.unstable_shouldYield,yw=mt.unstable_requestPaint,xe=mt.unstable_now,bw=mt.unstable_getCurrentPriorityLevel,od=mt.unstable_ImmediatePriority,o0=mt.unstable_UserBlockingPriority,ws=mt.unstable_NormalPriority,$w=mt.unstable_LowPriority,a0=mt.unstable_IdlePriority,ul=null,Kt=null;function _w(e){if(Kt&&typeof Kt.onCommitFiberRoot=="function")try{Kt.onCommitFiberRoot(ul,e,void 0,(e.current.flags&128)===128)}catch{}}var zt=Math.clz32?Math.clz32:Sw,ww=Math.log,xw=Math.LN2;function Sw(e){return e>>>=0,e===0?32:31-(ww(e)/xw|0)|0}var va=64,ma=4194304;function to(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function xs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=to(s):(o&=a,o!==0&&(r=to(o)))}else a=n&~i,a!==0?r=to(a):o!==0&&(r=to(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-zt(t),i=1<<n,r|=e[n],t&=~i;return r}function kw(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ew(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-zt(o),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=kw(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function gc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function s0(){var e=va;return va<<=1,!(va&4194240)&&(va=64),e}function Jl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ko(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-zt(t),e[t]=n}function Aw(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-zt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function ad(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-zt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ee=0;function l0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var u0,sd,c0,f0,d0,vc=!1,ya=[],Ln=null,Rn=null,Nn=null,Co=new Map,Po=new Map,An=[],Tw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tp(e,t){switch(e){case"focusin":case"focusout":Ln=null;break;case"dragenter":case"dragleave":Rn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":Co.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(t.pointerId)}}function Li(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Zo(t),t!==null&&sd(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Cw(e,t,n,r,i){switch(t){case"focusin":return Ln=Li(Ln,e,t,n,r,i),!0;case"dragenter":return Rn=Li(Rn,e,t,n,r,i),!0;case"mouseover":return Nn=Li(Nn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Co.set(o,Li(Co.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Po.set(o,Li(Po.get(o)||null,e,t,n,r,i)),!0}return!1}function h0(e){var t=or(e.target);if(t!==null){var n=xr(t);if(n!==null){if(t=n.tag,t===13){if(t=t0(n),t!==null){e.blockedOn=t,d0(e.priority,function(){c0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function rs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=mc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);fc=r,n.target.dispatchEvent(r),fc=null}else return t=Zo(n),t!==null&&sd(t),e.blockedOn=n,!1;t.shift()}return!0}function np(e,t,n){rs(e)&&n.delete(t)}function Pw(){vc=!1,Ln!==null&&rs(Ln)&&(Ln=null),Rn!==null&&rs(Rn)&&(Rn=null),Nn!==null&&rs(Nn)&&(Nn=null),Co.forEach(np),Po.forEach(np)}function Ri(e,t){e.blockedOn===t&&(e.blockedOn=null,vc||(vc=!0,mt.unstable_scheduleCallback(mt.unstable_NormalPriority,Pw)))}function Mo(e){function t(i){return Ri(i,e)}if(0<ya.length){Ri(ya[0],e);for(var n=1;n<ya.length;n++){var r=ya[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ln!==null&&Ri(Ln,e),Rn!==null&&Ri(Rn,e),Nn!==null&&Ri(Nn,e),Co.forEach(t),Po.forEach(t),n=0;n<An.length;n++)r=An[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<An.length&&(n=An[0],n.blockedOn===null);)h0(n),n.blockedOn===null&&An.shift()}var ei=yn.ReactCurrentBatchConfig,Ss=!0;function Mw(e,t,n,r){var i=ee,o=ei.transition;ei.transition=null;try{ee=1,ld(e,t,n,r)}finally{ee=i,ei.transition=o}}function Ow(e,t,n,r){var i=ee,o=ei.transition;ei.transition=null;try{ee=4,ld(e,t,n,r)}finally{ee=i,ei.transition=o}}function ld(e,t,n,r){if(Ss){var i=mc(e,t,n,r);if(i===null)uu(e,t,r,ks,n),tp(e,r);else if(Cw(i,e,t,n,r))r.stopPropagation();else if(tp(e,r),t&4&&-1<Tw.indexOf(e)){for(;i!==null;){var o=Zo(i);if(o!==null&&u0(o),o=mc(e,t,n,r),o===null&&uu(e,t,r,ks,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else uu(e,t,r,null,n)}}var ks=null;function mc(e,t,n,r){if(ks=null,e=id(r),e=or(e),e!==null)if(t=xr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=t0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ks=e,null}function p0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bw()){case od:return 1;case o0:return 4;case ws:case $w:return 16;case a0:return 536870912;default:return 16}default:return 16}}var Cn=null,ud=null,is=null;function g0(){if(is)return is;var e,t=ud,n=t.length,r,i="value"in Cn?Cn.value:Cn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return is=i.slice(e,1<r?1-r:void 0)}function os(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ba(){return!0}function rp(){return!1}function bt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ba:rp,this.isPropagationStopped=rp,this}return me(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ba)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ba)},persist:function(){},isPersistent:ba}),t}var wi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cd=bt(wi),Qo=me({},wi,{view:0,detail:0}),Iw=bt(Qo),eu,tu,Ni,cl=me({},Qo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ni&&(Ni&&e.type==="mousemove"?(eu=e.screenX-Ni.screenX,tu=e.screenY-Ni.screenY):tu=eu=0,Ni=e),eu)},movementY:function(e){return"movementY"in e?e.movementY:tu}}),ip=bt(cl),Lw=me({},cl,{dataTransfer:0}),Rw=bt(Lw),Nw=me({},Qo,{relatedTarget:0}),nu=bt(Nw),Fw=me({},wi,{animationName:0,elapsedTime:0,pseudoElement:0}),Dw=bt(Fw),jw=me({},wi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zw=bt(jw),Bw=me({},wi,{data:0}),op=bt(Bw),Uw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ww={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hw(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ww[e])?!!t[e]:!1}function fd(){return Hw}var Gw=me({},Qo,{key:function(e){if(e.key){var t=Uw[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=os(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fd,charCode:function(e){return e.type==="keypress"?os(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?os(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Yw=bt(Gw),Xw=me({},cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ap=bt(Xw),Kw=me({},Qo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fd}),Qw=bt(Kw),Zw=me({},wi,{propertyName:0,elapsedTime:0,pseudoElement:0}),qw=bt(Zw),Jw=me({},cl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ex=bt(Jw),tx=[9,13,27,32],dd=hn&&"CompositionEvent"in window,co=null;hn&&"documentMode"in document&&(co=document.documentMode);var nx=hn&&"TextEvent"in window&&!co,v0=hn&&(!dd||co&&8<co&&11>=co),sp=String.fromCharCode(32),lp=!1;function m0(e,t){switch(e){case"keyup":return tx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function y0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Br=!1;function rx(e,t){switch(e){case"compositionend":return y0(t);case"keypress":return t.which!==32?null:(lp=!0,sp);case"textInput":return e=t.data,e===sp&&lp?null:e;default:return null}}function ix(e,t){if(Br)return e==="compositionend"||!dd&&m0(e,t)?(e=g0(),is=ud=Cn=null,Br=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return v0&&t.locale!=="ko"?null:t.data;default:return null}}var ox={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function up(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ox[e.type]:t==="textarea"}function b0(e,t,n,r){Qy(r),t=Es(t,"onChange"),0<t.length&&(n=new cd("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var fo=null,Oo=null;function ax(e){P0(e,0)}function fl(e){var t=Wr(e);if(Vy(t))return e}function sx(e,t){if(e==="change")return t}var $0=!1;if(hn){var ru;if(hn){var iu="oninput"in document;if(!iu){var cp=document.createElement("div");cp.setAttribute("oninput","return;"),iu=typeof cp.oninput=="function"}ru=iu}else ru=!1;$0=ru&&(!document.documentMode||9<document.documentMode)}function fp(){fo&&(fo.detachEvent("onpropertychange",_0),Oo=fo=null)}function _0(e){if(e.propertyName==="value"&&fl(Oo)){var t=[];b0(t,Oo,e,id(e)),e0(ax,t)}}function lx(e,t,n){e==="focusin"?(fp(),fo=t,Oo=n,fo.attachEvent("onpropertychange",_0)):e==="focusout"&&fp()}function ux(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fl(Oo)}function cx(e,t){if(e==="click")return fl(t)}function fx(e,t){if(e==="input"||e==="change")return fl(t)}function dx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ut=typeof Object.is=="function"?Object.is:dx;function Io(e,t){if(Ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ju.call(t,i)||!Ut(e[i],t[i]))return!1}return!0}function dp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hp(e,t){var n=dp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=dp(n)}}function w0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?w0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function x0(){for(var e=window,t=bs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=bs(e.document)}return t}function hd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function hx(e){var t=x0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&w0(n.ownerDocument.documentElement,n)){if(r!==null&&hd(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=hp(n,o);var a=hp(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var px=hn&&"documentMode"in document&&11>=document.documentMode,Ur=null,yc=null,ho=null,bc=!1;function pp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bc||Ur==null||Ur!==bs(r)||(r=Ur,"selectionStart"in r&&hd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ho&&Io(ho,r)||(ho=r,r=Es(yc,"onSelect"),0<r.length&&(t=new cd("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ur)))}function $a(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Vr={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionend:$a("Transition","TransitionEnd")},ou={},S0={};hn&&(S0=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function dl(e){if(ou[e])return ou[e];if(!Vr[e])return e;var t=Vr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in S0)return ou[e]=t[n];return e}var k0=dl("animationend"),E0=dl("animationiteration"),A0=dl("animationstart"),T0=dl("transitionend"),C0=new Map,gp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gn(e,t){C0.set(e,t),wr(t,[e])}for(var au=0;au<gp.length;au++){var su=gp[au],gx=su.toLowerCase(),vx=su[0].toUpperCase()+su.slice(1);Gn(gx,"on"+vx)}Gn(k0,"onAnimationEnd");Gn(E0,"onAnimationIteration");Gn(A0,"onAnimationStart");Gn("dblclick","onDoubleClick");Gn("focusin","onFocus");Gn("focusout","onBlur");Gn(T0,"onTransitionEnd");si("onMouseEnter",["mouseout","mouseover"]);si("onMouseLeave",["mouseout","mouseover"]);si("onPointerEnter",["pointerout","pointerover"]);si("onPointerLeave",["pointerout","pointerover"]);wr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wr("onBeforeInput",["compositionend","keypress","textInput","paste"]);wr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var no="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mx=new Set("cancel close invalid load scroll toggle".split(" ").concat(no));function vp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,gw(r,t,void 0,e),e.currentTarget=null}function P0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;vp(i,s,u),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;vp(i,s,u),o=l}}}if(_s)throw e=pc,_s=!1,pc=null,e}function se(e,t){var n=t[Sc];n===void 0&&(n=t[Sc]=new Set);var r=e+"__bubble";n.has(r)||(M0(t,e,2,!1),n.add(r))}function lu(e,t,n){var r=0;t&&(r|=4),M0(n,e,r,t)}var _a="_reactListening"+Math.random().toString(36).slice(2);function Lo(e){if(!e[_a]){e[_a]=!0,Dy.forEach(function(n){n!=="selectionchange"&&(mx.has(n)||lu(n,!1,e),lu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_a]||(t[_a]=!0,lu("selectionchange",!1,t))}}function M0(e,t,n,r){switch(p0(t)){case 1:var i=Mw;break;case 4:i=Ow;break;default:i=ld}n=i.bind(null,t,n,e),i=void 0,!hc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function uu(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=or(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}e0(function(){var u=o,c=id(n),f=[];e:{var d=C0.get(e);if(d!==void 0){var h=cd,g=e;switch(e){case"keypress":if(os(n)===0)break e;case"keydown":case"keyup":h=Yw;break;case"focusin":g="focus",h=nu;break;case"focusout":g="blur",h=nu;break;case"beforeblur":case"afterblur":h=nu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=ip;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Rw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Qw;break;case k0:case E0:case A0:h=Dw;break;case T0:h=qw;break;case"scroll":h=Iw;break;case"wheel":h=ex;break;case"copy":case"cut":case"paste":h=zw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=ap}var m=(t&4)!==0,y=!m&&e==="scroll",p=m?d!==null?d+"Capture":null:d;m=[];for(var v=u,b;v!==null;){b=v;var $=b.stateNode;if(b.tag===5&&$!==null&&(b=$,p!==null&&($=To(v,p),$!=null&&m.push(Ro(v,$,b)))),y)break;v=v.return}0<m.length&&(d=new h(d,g,null,n,c),f.push({event:d,listeners:m}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",d&&n!==fc&&(g=n.relatedTarget||n.fromElement)&&(or(g)||g[pn]))break e;if((h||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,h?(g=n.relatedTarget||n.toElement,h=u,g=g?or(g):null,g!==null&&(y=xr(g),g!==y||g.tag!==5&&g.tag!==6)&&(g=null)):(h=null,g=u),h!==g)){if(m=ip,$="onMouseLeave",p="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(m=ap,$="onPointerLeave",p="onPointerEnter",v="pointer"),y=h==null?d:Wr(h),b=g==null?d:Wr(g),d=new m($,v+"leave",h,n,c),d.target=y,d.relatedTarget=b,$=null,or(c)===u&&(m=new m(p,v+"enter",g,n,c),m.target=b,m.relatedTarget=y,$=m),y=$,h&&g)t:{for(m=h,p=g,v=0,b=m;b;b=Lr(b))v++;for(b=0,$=p;$;$=Lr($))b++;for(;0<v-b;)m=Lr(m),v--;for(;0<b-v;)p=Lr(p),b--;for(;v--;){if(m===p||p!==null&&m===p.alternate)break t;m=Lr(m),p=Lr(p)}m=null}else m=null;h!==null&&mp(f,d,h,m,!1),g!==null&&y!==null&&mp(f,y,g,m,!0)}}e:{if(d=u?Wr(u):window,h=d.nodeName&&d.nodeName.toLowerCase(),h==="select"||h==="input"&&d.type==="file")var _=sx;else if(up(d))if($0)_=fx;else{_=ux;var k=lx}else(h=d.nodeName)&&h.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(_=cx);if(_&&(_=_(e,u))){b0(f,_,n,c);break e}k&&k(e,d,u),e==="focusout"&&(k=d._wrapperState)&&k.controlled&&d.type==="number"&&ac(d,"number",d.value)}switch(k=u?Wr(u):window,e){case"focusin":(up(k)||k.contentEditable==="true")&&(Ur=k,yc=u,ho=null);break;case"focusout":ho=yc=Ur=null;break;case"mousedown":bc=!0;break;case"contextmenu":case"mouseup":case"dragend":bc=!1,pp(f,n,c);break;case"selectionchange":if(px)break;case"keydown":case"keyup":pp(f,n,c)}var w;if(dd)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Br?m0(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(v0&&n.locale!=="ko"&&(Br||E!=="onCompositionStart"?E==="onCompositionEnd"&&Br&&(w=g0()):(Cn=c,ud="value"in Cn?Cn.value:Cn.textContent,Br=!0)),k=Es(u,E),0<k.length&&(E=new op(E,e,null,n,c),f.push({event:E,listeners:k}),w?E.data=w:(w=y0(n),w!==null&&(E.data=w)))),(w=nx?rx(e,n):ix(e,n))&&(u=Es(u,"onBeforeInput"),0<u.length&&(c=new op("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=w))}P0(f,t)})}function Ro(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Es(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=To(e,n),o!=null&&r.unshift(Ro(e,o,i)),o=To(e,t),o!=null&&r.push(Ro(e,o,i))),e=e.return}return r}function Lr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function mp(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=To(n,o),l!=null&&a.unshift(Ro(n,l,s))):i||(l=To(n,o),l!=null&&a.push(Ro(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var yx=/\r\n?/g,bx=/\u0000|\uFFFD/g;function yp(e){return(typeof e=="string"?e:""+e).replace(yx,`
`).replace(bx,"")}function wa(e,t,n){if(t=yp(t),yp(e)!==t&&n)throw Error(T(425))}function As(){}var $c=null,_c=null;function wc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xc=typeof setTimeout=="function"?setTimeout:void 0,$x=typeof clearTimeout=="function"?clearTimeout:void 0,bp=typeof Promise=="function"?Promise:void 0,_x=typeof queueMicrotask=="function"?queueMicrotask:typeof bp<"u"?function(e){return bp.resolve(null).then(e).catch(wx)}:xc;function wx(e){setTimeout(function(){throw e})}function cu(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Mo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Mo(t)}function Fn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function $p(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var xi=Math.random().toString(36).slice(2),Xt="__reactFiber$"+xi,No="__reactProps$"+xi,pn="__reactContainer$"+xi,Sc="__reactEvents$"+xi,xx="__reactListeners$"+xi,Sx="__reactHandles$"+xi;function or(e){var t=e[Xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[pn]||n[Xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$p(e);e!==null;){if(n=e[Xt])return n;e=$p(e)}return t}e=n,n=e.parentNode}return null}function Zo(e){return e=e[Xt]||e[pn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Wr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function hl(e){return e[No]||null}var kc=[],Hr=-1;function Yn(e){return{current:e}}function ue(e){0>Hr||(e.current=kc[Hr],kc[Hr]=null,Hr--)}function re(e,t){Hr++,kc[Hr]=e.current,e.current=t}var Wn={},Ve=Yn(Wn),it=Yn(!1),gr=Wn;function li(e,t){var n=e.type.contextTypes;if(!n)return Wn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ot(e){return e=e.childContextTypes,e!=null}function Ts(){ue(it),ue(Ve)}function _p(e,t,n){if(Ve.current!==Wn)throw Error(T(168));re(Ve,t),re(it,n)}function O0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(T(108,lw(e)||"Unknown",i));return me({},n,r)}function Cs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Wn,gr=Ve.current,re(Ve,e),re(it,it.current),!0}function wp(e,t,n){var r=e.stateNode;if(!r)throw Error(T(169));n?(e=O0(e,t,gr),r.__reactInternalMemoizedMergedChildContext=e,ue(it),ue(Ve),re(Ve,e)):ue(it),re(it,n)}var sn=null,pl=!1,fu=!1;function I0(e){sn===null?sn=[e]:sn.push(e)}function kx(e){pl=!0,I0(e)}function Xn(){if(!fu&&sn!==null){fu=!0;var e=0,t=ee;try{var n=sn;for(ee=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}sn=null,pl=!1}catch(i){throw sn!==null&&(sn=sn.slice(e+1)),i0(od,Xn),i}finally{ee=t,fu=!1}}return null}var Gr=[],Yr=0,Ps=null,Ms=0,St=[],kt=0,vr=null,un=1,cn="";function tr(e,t){Gr[Yr++]=Ms,Gr[Yr++]=Ps,Ps=e,Ms=t}function L0(e,t,n){St[kt++]=un,St[kt++]=cn,St[kt++]=vr,vr=e;var r=un;e=cn;var i=32-zt(r)-1;r&=~(1<<i),n+=1;var o=32-zt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,un=1<<32-zt(t)+i|n<<i|r,cn=o+e}else un=1<<o|n<<i|r,cn=e}function pd(e){e.return!==null&&(tr(e,1),L0(e,1,0))}function gd(e){for(;e===Ps;)Ps=Gr[--Yr],Gr[Yr]=null,Ms=Gr[--Yr],Gr[Yr]=null;for(;e===vr;)vr=St[--kt],St[kt]=null,cn=St[--kt],St[kt]=null,un=St[--kt],St[kt]=null}var vt=null,pt=null,he=!1,jt=null;function R0(e,t){var n=Et(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function xp(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,vt=e,pt=Fn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,vt=e,pt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=vr!==null?{id:un,overflow:cn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Et(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,vt=e,pt=null,!0):!1;default:return!1}}function Ec(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ac(e){if(he){var t=pt;if(t){var n=t;if(!xp(e,t)){if(Ec(e))throw Error(T(418));t=Fn(n.nextSibling);var r=vt;t&&xp(e,t)?R0(r,n):(e.flags=e.flags&-4097|2,he=!1,vt=e)}}else{if(Ec(e))throw Error(T(418));e.flags=e.flags&-4097|2,he=!1,vt=e}}}function Sp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;vt=e}function xa(e){if(e!==vt)return!1;if(!he)return Sp(e),he=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!wc(e.type,e.memoizedProps)),t&&(t=pt)){if(Ec(e))throw N0(),Error(T(418));for(;t;)R0(e,t),t=Fn(t.nextSibling)}if(Sp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){pt=Fn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}pt=null}}else pt=vt?Fn(e.stateNode.nextSibling):null;return!0}function N0(){for(var e=pt;e;)e=Fn(e.nextSibling)}function ui(){pt=vt=null,he=!1}function vd(e){jt===null?jt=[e]:jt.push(e)}var Ex=yn.ReactCurrentBatchConfig;function Nt(e,t){if(e&&e.defaultProps){t=me({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Os=Yn(null),Is=null,Xr=null,md=null;function yd(){md=Xr=Is=null}function bd(e){var t=Os.current;ue(Os),e._currentValue=t}function Tc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ti(e,t){Is=e,md=Xr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(tt=!0),e.firstContext=null)}function Mt(e){var t=e._currentValue;if(md!==e)if(e={context:e,memoizedValue:t,next:null},Xr===null){if(Is===null)throw Error(T(308));Xr=e,Is.dependencies={lanes:0,firstContext:e}}else Xr=Xr.next=e;return t}var ar=null;function $d(e){ar===null?ar=[e]:ar.push(e)}function F0(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,$d(t)):(n.next=i.next,i.next=n),t.interleaved=n,gn(e,r)}function gn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Sn=!1;function _d(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function D0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function dn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Dn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Z&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,gn(e,n)}return i=r.interleaved,i===null?(t.next=t,$d(r)):(t.next=i.next,i.next=t),r.interleaved=t,gn(e,n)}function as(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ad(e,n)}}function kp(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ls(e,t,n,r){var i=e.updateQueue;Sn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?o=u:a.next=u,a=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==a&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;a=0,c=u=l=null,s=o;do{var d=s.lane,h=s.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=e,m=s;switch(d=t,h=n,m.tag){case 1:if(g=m.payload,typeof g=="function"){f=g.call(h,f,d);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=m.payload,d=typeof g=="function"?g.call(h,f,d):g,d==null)break e;f=me({},f,d);break e;case 2:Sn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[s]:d.push(s))}else h={eventTime:h,lane:d,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=h,l=f):c=c.next=h,a|=d;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;d=s,s=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);yr|=a,e.lanes=a,e.memoizedState=f}}function Ep(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var j0=new Fy.Component().refs;function Cc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:me({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var gl={isMounted:function(e){return(e=e._reactInternals)?xr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ge(),i=zn(e),o=dn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Dn(e,o,i),t!==null&&(Bt(t,e,i,r),as(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ge(),i=zn(e),o=dn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Dn(e,o,i),t!==null&&(Bt(t,e,i,r),as(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ge(),r=zn(e),i=dn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Dn(e,i,r),t!==null&&(Bt(t,e,r,n),as(t,e,r))}};function Ap(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Io(n,r)||!Io(i,o):!0}function z0(e,t,n){var r=!1,i=Wn,o=t.contextType;return typeof o=="object"&&o!==null?o=Mt(o):(i=ot(t)?gr:Ve.current,r=t.contextTypes,o=(r=r!=null)?li(e,i):Wn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=gl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Tp(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&gl.enqueueReplaceState(t,t.state,null)}function Pc(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=j0,_d(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Mt(o):(o=ot(t)?gr:Ve.current,i.context=li(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Cc(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&gl.enqueueReplaceState(i,i.state,null),Ls(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Fi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;s===j0&&(s=i.refs={}),a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,e))}return e}function Sa(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Cp(e){var t=e._init;return t(e._payload)}function B0(e){function t(p,v){if(e){var b=p.deletions;b===null?(p.deletions=[v],p.flags|=16):b.push(v)}}function n(p,v){if(!e)return null;for(;v!==null;)t(p,v),v=v.sibling;return null}function r(p,v){for(p=new Map;v!==null;)v.key!==null?p.set(v.key,v):p.set(v.index,v),v=v.sibling;return p}function i(p,v){return p=Bn(p,v),p.index=0,p.sibling=null,p}function o(p,v,b){return p.index=b,e?(b=p.alternate,b!==null?(b=b.index,b<v?(p.flags|=2,v):b):(p.flags|=2,v)):(p.flags|=1048576,v)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,v,b,$){return v===null||v.tag!==6?(v=yu(b,p.mode,$),v.return=p,v):(v=i(v,b),v.return=p,v)}function l(p,v,b,$){var _=b.type;return _===zr?c(p,v,b.props.children,$,b.key):v!==null&&(v.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===xn&&Cp(_)===v.type)?($=i(v,b.props),$.ref=Fi(p,v,b),$.return=p,$):($=ds(b.type,b.key,b.props,null,p.mode,$),$.ref=Fi(p,v,b),$.return=p,$)}function u(p,v,b,$){return v===null||v.tag!==4||v.stateNode.containerInfo!==b.containerInfo||v.stateNode.implementation!==b.implementation?(v=bu(b,p.mode,$),v.return=p,v):(v=i(v,b.children||[]),v.return=p,v)}function c(p,v,b,$,_){return v===null||v.tag!==7?(v=hr(b,p.mode,$,_),v.return=p,v):(v=i(v,b),v.return=p,v)}function f(p,v,b){if(typeof v=="string"&&v!==""||typeof v=="number")return v=yu(""+v,p.mode,b),v.return=p,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ha:return b=ds(v.type,v.key,v.props,null,p.mode,b),b.ref=Fi(p,null,v),b.return=p,b;case jr:return v=bu(v,p.mode,b),v.return=p,v;case xn:var $=v._init;return f(p,$(v._payload),b)}if(eo(v)||Oi(v))return v=hr(v,p.mode,b,null),v.return=p,v;Sa(p,v)}return null}function d(p,v,b,$){var _=v!==null?v.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return _!==null?null:s(p,v,""+b,$);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ha:return b.key===_?l(p,v,b,$):null;case jr:return b.key===_?u(p,v,b,$):null;case xn:return _=b._init,d(p,v,_(b._payload),$)}if(eo(b)||Oi(b))return _!==null?null:c(p,v,b,$,null);Sa(p,b)}return null}function h(p,v,b,$,_){if(typeof $=="string"&&$!==""||typeof $=="number")return p=p.get(b)||null,s(v,p,""+$,_);if(typeof $=="object"&&$!==null){switch($.$$typeof){case ha:return p=p.get($.key===null?b:$.key)||null,l(v,p,$,_);case jr:return p=p.get($.key===null?b:$.key)||null,u(v,p,$,_);case xn:var k=$._init;return h(p,v,b,k($._payload),_)}if(eo($)||Oi($))return p=p.get(b)||null,c(v,p,$,_,null);Sa(v,$)}return null}function g(p,v,b,$){for(var _=null,k=null,w=v,E=v=0,C=null;w!==null&&E<b.length;E++){w.index>E?(C=w,w=null):C=w.sibling;var P=d(p,w,b[E],$);if(P===null){w===null&&(w=C);break}e&&w&&P.alternate===null&&t(p,w),v=o(P,v,E),k===null?_=P:k.sibling=P,k=P,w=C}if(E===b.length)return n(p,w),he&&tr(p,E),_;if(w===null){for(;E<b.length;E++)w=f(p,b[E],$),w!==null&&(v=o(w,v,E),k===null?_=w:k.sibling=w,k=w);return he&&tr(p,E),_}for(w=r(p,w);E<b.length;E++)C=h(w,p,E,b[E],$),C!==null&&(e&&C.alternate!==null&&w.delete(C.key===null?E:C.key),v=o(C,v,E),k===null?_=C:k.sibling=C,k=C);return e&&w.forEach(function(x){return t(p,x)}),he&&tr(p,E),_}function m(p,v,b,$){var _=Oi(b);if(typeof _!="function")throw Error(T(150));if(b=_.call(b),b==null)throw Error(T(151));for(var k=_=null,w=v,E=v=0,C=null,P=b.next();w!==null&&!P.done;E++,P=b.next()){w.index>E?(C=w,w=null):C=w.sibling;var x=d(p,w,P.value,$);if(x===null){w===null&&(w=C);break}e&&w&&x.alternate===null&&t(p,w),v=o(x,v,E),k===null?_=x:k.sibling=x,k=x,w=C}if(P.done)return n(p,w),he&&tr(p,E),_;if(w===null){for(;!P.done;E++,P=b.next())P=f(p,P.value,$),P!==null&&(v=o(P,v,E),k===null?_=P:k.sibling=P,k=P);return he&&tr(p,E),_}for(w=r(p,w);!P.done;E++,P=b.next())P=h(w,p,E,P.value,$),P!==null&&(e&&P.alternate!==null&&w.delete(P.key===null?E:P.key),v=o(P,v,E),k===null?_=P:k.sibling=P,k=P);return e&&w.forEach(function(S){return t(p,S)}),he&&tr(p,E),_}function y(p,v,b,$){if(typeof b=="object"&&b!==null&&b.type===zr&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case ha:e:{for(var _=b.key,k=v;k!==null;){if(k.key===_){if(_=b.type,_===zr){if(k.tag===7){n(p,k.sibling),v=i(k,b.props.children),v.return=p,p=v;break e}}else if(k.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===xn&&Cp(_)===k.type){n(p,k.sibling),v=i(k,b.props),v.ref=Fi(p,k,b),v.return=p,p=v;break e}n(p,k);break}else t(p,k);k=k.sibling}b.type===zr?(v=hr(b.props.children,p.mode,$,b.key),v.return=p,p=v):($=ds(b.type,b.key,b.props,null,p.mode,$),$.ref=Fi(p,v,b),$.return=p,p=$)}return a(p);case jr:e:{for(k=b.key;v!==null;){if(v.key===k)if(v.tag===4&&v.stateNode.containerInfo===b.containerInfo&&v.stateNode.implementation===b.implementation){n(p,v.sibling),v=i(v,b.children||[]),v.return=p,p=v;break e}else{n(p,v);break}else t(p,v);v=v.sibling}v=bu(b,p.mode,$),v.return=p,p=v}return a(p);case xn:return k=b._init,y(p,v,k(b._payload),$)}if(eo(b))return g(p,v,b,$);if(Oi(b))return m(p,v,b,$);Sa(p,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,v!==null&&v.tag===6?(n(p,v.sibling),v=i(v,b),v.return=p,p=v):(n(p,v),v=yu(b,p.mode,$),v.return=p,p=v),a(p)):n(p,v)}return y}var ci=B0(!0),U0=B0(!1),qo={},Qt=Yn(qo),Fo=Yn(qo),Do=Yn(qo);function sr(e){if(e===qo)throw Error(T(174));return e}function wd(e,t){switch(re(Do,t),re(Fo,e),re(Qt,qo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:lc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=lc(t,e)}ue(Qt),re(Qt,t)}function fi(){ue(Qt),ue(Fo),ue(Do)}function V0(e){sr(Do.current);var t=sr(Qt.current),n=lc(t,e.type);t!==n&&(re(Fo,e),re(Qt,n))}function xd(e){Fo.current===e&&(ue(Qt),ue(Fo))}var pe=Yn(0);function Rs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var du=[];function Sd(){for(var e=0;e<du.length;e++)du[e]._workInProgressVersionPrimary=null;du.length=0}var ss=yn.ReactCurrentDispatcher,hu=yn.ReactCurrentBatchConfig,mr=0,ve=null,Ce=null,Oe=null,Ns=!1,po=!1,jo=0,Ax=0;function je(){throw Error(T(321))}function kd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ut(e[n],t[n]))return!1;return!0}function Ed(e,t,n,r,i,o){if(mr=o,ve=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ss.current=e===null||e.memoizedState===null?Mx:Ox,e=n(r,i),po){o=0;do{if(po=!1,jo=0,25<=o)throw Error(T(301));o+=1,Oe=Ce=null,t.updateQueue=null,ss.current=Ix,e=n(r,i)}while(po)}if(ss.current=Fs,t=Ce!==null&&Ce.next!==null,mr=0,Oe=Ce=ve=null,Ns=!1,t)throw Error(T(300));return e}function Ad(){var e=jo!==0;return jo=0,e}function Gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?ve.memoizedState=Oe=e:Oe=Oe.next=e,Oe}function Ot(){if(Ce===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Ce.next;var t=Oe===null?ve.memoizedState:Oe.next;if(t!==null)Oe=t,Ce=e;else{if(e===null)throw Error(T(310));Ce=e,e={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Oe===null?ve.memoizedState=Oe=e:Oe=Oe.next=e}return Oe}function zo(e,t){return typeof t=="function"?t(e):t}function pu(e){var t=Ot(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=Ce,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,u=o;do{var c=u.lane;if((mr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=f,a=r):l=l.next=f,ve.lanes|=c,yr|=c}u=u.next}while(u!==null&&u!==o);l===null?a=r:l.next=s,Ut(r,t.memoizedState)||(tt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ve.lanes|=o,yr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function gu(e){var t=Ot(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Ut(o,t.memoizedState)||(tt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function W0(){}function H0(e,t){var n=ve,r=Ot(),i=t(),o=!Ut(r.memoizedState,i);if(o&&(r.memoizedState=i,tt=!0),r=r.queue,Td(X0.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Oe!==null&&Oe.memoizedState.tag&1){if(n.flags|=2048,Bo(9,Y0.bind(null,n,r,i,t),void 0,null),Le===null)throw Error(T(349));mr&30||G0(n,t,i)}return i}function G0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Y0(e,t,n,r){t.value=n,t.getSnapshot=r,K0(t)&&Q0(e)}function X0(e,t,n){return n(function(){K0(t)&&Q0(e)})}function K0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ut(e,n)}catch{return!0}}function Q0(e){var t=gn(e,1);t!==null&&Bt(t,e,1,-1)}function Pp(e){var t=Gt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:e},t.queue=e,e=e.dispatch=Px.bind(null,ve,e),[t.memoizedState,e]}function Bo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Z0(){return Ot().memoizedState}function ls(e,t,n,r){var i=Gt();ve.flags|=e,i.memoizedState=Bo(1|t,n,void 0,r===void 0?null:r)}function vl(e,t,n,r){var i=Ot();r=r===void 0?null:r;var o=void 0;if(Ce!==null){var a=Ce.memoizedState;if(o=a.destroy,r!==null&&kd(r,a.deps)){i.memoizedState=Bo(t,n,o,r);return}}ve.flags|=e,i.memoizedState=Bo(1|t,n,o,r)}function Mp(e,t){return ls(8390656,8,e,t)}function Td(e,t){return vl(2048,8,e,t)}function q0(e,t){return vl(4,2,e,t)}function J0(e,t){return vl(4,4,e,t)}function e1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function t1(e,t,n){return n=n!=null?n.concat([e]):null,vl(4,4,e1.bind(null,t,e),n)}function Cd(){}function n1(e,t){var n=Ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&kd(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function r1(e,t){var n=Ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&kd(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function i1(e,t,n){return mr&21?(Ut(n,t)||(n=s0(),ve.lanes|=n,yr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,tt=!0),e.memoizedState=n)}function Tx(e,t){var n=ee;ee=n!==0&&4>n?n:4,e(!0);var r=hu.transition;hu.transition={};try{e(!1),t()}finally{ee=n,hu.transition=r}}function o1(){return Ot().memoizedState}function Cx(e,t,n){var r=zn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},a1(e))s1(t,n);else if(n=F0(e,t,n,r),n!==null){var i=Ge();Bt(n,e,r,i),l1(n,t,r)}}function Px(e,t,n){var r=zn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(a1(e))s1(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,Ut(s,a)){var l=t.interleaved;l===null?(i.next=i,$d(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=F0(e,t,i,r),n!==null&&(i=Ge(),Bt(n,e,r,i),l1(n,t,r))}}function a1(e){var t=e.alternate;return e===ve||t!==null&&t===ve}function s1(e,t){po=Ns=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function l1(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ad(e,n)}}var Fs={readContext:Mt,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useInsertionEffect:je,useLayoutEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useMutableSource:je,useSyncExternalStore:je,useId:je,unstable_isNewReconciler:!1},Mx={readContext:Mt,useCallback:function(e,t){return Gt().memoizedState=[e,t===void 0?null:t],e},useContext:Mt,useEffect:Mp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ls(4194308,4,e1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ls(4194308,4,e,t)},useInsertionEffect:function(e,t){return ls(4,2,e,t)},useMemo:function(e,t){var n=Gt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Gt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Cx.bind(null,ve,e),[r.memoizedState,e]},useRef:function(e){var t=Gt();return e={current:e},t.memoizedState=e},useState:Pp,useDebugValue:Cd,useDeferredValue:function(e){return Gt().memoizedState=e},useTransition:function(){var e=Pp(!1),t=e[0];return e=Tx.bind(null,e[1]),Gt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ve,i=Gt();if(he){if(n===void 0)throw Error(T(407));n=n()}else{if(n=t(),Le===null)throw Error(T(349));mr&30||G0(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Mp(X0.bind(null,r,o,e),[e]),r.flags|=2048,Bo(9,Y0.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Gt(),t=Le.identifierPrefix;if(he){var n=cn,r=un;n=(r&~(1<<32-zt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=jo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ax++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ox={readContext:Mt,useCallback:n1,useContext:Mt,useEffect:Td,useImperativeHandle:t1,useInsertionEffect:q0,useLayoutEffect:J0,useMemo:r1,useReducer:pu,useRef:Z0,useState:function(){return pu(zo)},useDebugValue:Cd,useDeferredValue:function(e){var t=Ot();return i1(t,Ce.memoizedState,e)},useTransition:function(){var e=pu(zo)[0],t=Ot().memoizedState;return[e,t]},useMutableSource:W0,useSyncExternalStore:H0,useId:o1,unstable_isNewReconciler:!1},Ix={readContext:Mt,useCallback:n1,useContext:Mt,useEffect:Td,useImperativeHandle:t1,useInsertionEffect:q0,useLayoutEffect:J0,useMemo:r1,useReducer:gu,useRef:Z0,useState:function(){return gu(zo)},useDebugValue:Cd,useDeferredValue:function(e){var t=Ot();return Ce===null?t.memoizedState=e:i1(t,Ce.memoizedState,e)},useTransition:function(){var e=gu(zo)[0],t=Ot().memoizedState;return[e,t]},useMutableSource:W0,useSyncExternalStore:H0,useId:o1,unstable_isNewReconciler:!1};function di(e,t){try{var n="",r=t;do n+=sw(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function vu(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Mc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Lx=typeof WeakMap=="function"?WeakMap:Map;function u1(e,t,n){n=dn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){js||(js=!0,Bc=r),Mc(e,t)},n}function c1(e,t,n){n=dn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Mc(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Mc(e,t),typeof r!="function"&&(jn===null?jn=new Set([this]):jn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Op(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Lx;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Xx.bind(null,e,t,n),t.then(e,e))}function Ip(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Lp(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=dn(-1,1),t.tag=2,Dn(n,t,1))),n.lanes|=1),e)}var Rx=yn.ReactCurrentOwner,tt=!1;function He(e,t,n,r){t.child=e===null?U0(t,null,n,r):ci(t,e.child,n,r)}function Rp(e,t,n,r,i){n=n.render;var o=t.ref;return ti(t,i),r=Ed(e,t,n,r,o,i),n=Ad(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,vn(e,t,i)):(he&&n&&pd(t),t.flags|=1,He(e,t,r,i),t.child)}function Np(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Fd(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,f1(e,t,o,r,i)):(e=ds(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Io,n(a,r)&&e.ref===t.ref)return vn(e,t,i)}return t.flags|=1,e=Bn(o,r),e.ref=t.ref,e.return=t,t.child=e}function f1(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Io(o,r)&&e.ref===t.ref)if(tt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(tt=!0);else return t.lanes=e.lanes,vn(e,t,i)}return Oc(e,t,n,r,i)}function d1(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(Qr,ft),ft|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,re(Qr,ft),ft|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,re(Qr,ft),ft|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,re(Qr,ft),ft|=r;return He(e,t,i,n),t.child}function h1(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Oc(e,t,n,r,i){var o=ot(n)?gr:Ve.current;return o=li(t,o),ti(t,i),n=Ed(e,t,n,r,o,i),r=Ad(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,vn(e,t,i)):(he&&r&&pd(t),t.flags|=1,He(e,t,n,i),t.child)}function Fp(e,t,n,r,i){if(ot(n)){var o=!0;Cs(t)}else o=!1;if(ti(t,i),t.stateNode===null)us(e,t),z0(t,n,r),Pc(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Mt(u):(u=ot(n)?gr:Ve.current,u=li(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&Tp(t,a,r,u),Sn=!1;var d=t.memoizedState;a.state=d,Ls(t,r,a,i),l=t.memoizedState,s!==r||d!==l||it.current||Sn?(typeof c=="function"&&(Cc(t,n,c,r),l=t.memoizedState),(s=Sn||Ap(t,n,s,r,d,l,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,D0(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Nt(t.type,s),a.props=u,f=t.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Mt(l):(l=ot(n)?gr:Ve.current,l=li(t,l));var h=n.getDerivedStateFromProps;(c=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==f||d!==l)&&Tp(t,a,r,l),Sn=!1,d=t.memoizedState,a.state=d,Ls(t,r,a,i);var g=t.memoizedState;s!==f||d!==g||it.current||Sn?(typeof h=="function"&&(Cc(t,n,h,r),g=t.memoizedState),(u=Sn||Ap(t,n,u,r,d,g,l)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,g,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,g,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),a.props=r,a.state=g,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return Ic(e,t,n,r,o,i)}function Ic(e,t,n,r,i,o){h1(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&wp(t,n,!1),vn(e,t,o);r=t.stateNode,Rx.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=ci(t,e.child,null,o),t.child=ci(t,null,s,o)):He(e,t,s,o),t.memoizedState=r.state,i&&wp(t,n,!0),t.child}function p1(e){var t=e.stateNode;t.pendingContext?_p(e,t.pendingContext,t.pendingContext!==t.context):t.context&&_p(e,t.context,!1),wd(e,t.containerInfo)}function Dp(e,t,n,r,i){return ui(),vd(i),t.flags|=256,He(e,t,n,r),t.child}var Lc={dehydrated:null,treeContext:null,retryLane:0};function Rc(e){return{baseLanes:e,cachePool:null,transitions:null}}function g1(e,t,n){var r=t.pendingProps,i=pe.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),re(pe,i&1),e===null)return Ac(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=bl(a,r,0,null),e=hr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Rc(n),t.memoizedState=Lc,e):Pd(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Nx(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Bn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Bn(s,o):(o=hr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Rc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Lc,r}return o=e.child,e=o.sibling,r=Bn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Pd(e,t){return t=bl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ka(e,t,n,r){return r!==null&&vd(r),ci(t,e.child,null,n),e=Pd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Nx(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=vu(Error(T(422))),ka(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=bl({mode:"visible",children:r.children},i,0,null),o=hr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&ci(t,e.child,null,a),t.child.memoizedState=Rc(a),t.memoizedState=Lc,o);if(!(t.mode&1))return ka(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(T(419)),r=vu(o,r,void 0),ka(e,t,a,r)}if(s=(a&e.childLanes)!==0,tt||s){if(r=Le,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,gn(e,i),Bt(r,e,i,-1))}return Nd(),r=vu(Error(T(421))),ka(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Kx.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,pt=Fn(i.nextSibling),vt=t,he=!0,jt=null,e!==null&&(St[kt++]=un,St[kt++]=cn,St[kt++]=vr,un=e.id,cn=e.overflow,vr=t),t=Pd(t,r.children),t.flags|=4096,t)}function jp(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Tc(e.return,t,n)}function mu(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function v1(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(He(e,t,r.children,n),r=pe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jp(e,n,t);else if(e.tag===19)jp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(re(pe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Rs(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),mu(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Rs(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}mu(t,!0,n,null,o);break;case"together":mu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function us(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function vn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),yr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,n=Bn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Bn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Fx(e,t,n){switch(t.tag){case 3:p1(t),ui();break;case 5:V0(t);break;case 1:ot(t.type)&&Cs(t);break;case 4:wd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;re(Os,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(re(pe,pe.current&1),t.flags|=128,null):n&t.child.childLanes?g1(e,t,n):(re(pe,pe.current&1),e=vn(e,t,n),e!==null?e.sibling:null);re(pe,pe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return v1(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),re(pe,pe.current),r)break;return null;case 22:case 23:return t.lanes=0,d1(e,t,n)}return vn(e,t,n)}var m1,Nc,y1,b1;m1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Nc=function(){};y1=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,sr(Qt.current);var o=null;switch(n){case"input":i=ic(e,i),r=ic(e,r),o=[];break;case"select":i=me({},i,{value:void 0}),r=me({},r,{value:void 0}),o=[];break;case"textarea":i=sc(e,i),r=sc(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=As)}uc(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Eo.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Eo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&se("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};b1=function(e,t,n,r){n!==r&&(t.flags|=4)};function Di(e,t){if(!he)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Dx(e,t,n){var r=t.pendingProps;switch(gd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return ot(t.type)&&Ts(),ze(t),null;case 3:return r=t.stateNode,fi(),ue(it),ue(Ve),Sd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(xa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,jt!==null&&(Wc(jt),jt=null))),Nc(e,t),ze(t),null;case 5:xd(t);var i=sr(Do.current);if(n=t.type,e!==null&&t.stateNode!=null)y1(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(T(166));return ze(t),null}if(e=sr(Qt.current),xa(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Xt]=t,r[No]=o,e=(t.mode&1)!==0,n){case"dialog":se("cancel",r),se("close",r);break;case"iframe":case"object":case"embed":se("load",r);break;case"video":case"audio":for(i=0;i<no.length;i++)se(no[i],r);break;case"source":se("error",r);break;case"img":case"image":case"link":se("error",r),se("load",r);break;case"details":se("toggle",r);break;case"input":Xh(r,o),se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},se("invalid",r);break;case"textarea":Qh(r,o),se("invalid",r)}uc(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&wa(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&wa(r.textContent,s,e),i=["children",""+s]):Eo.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&se("scroll",r)}switch(n){case"input":pa(r),Kh(r,o,!0);break;case"textarea":pa(r),Zh(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=As)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Gy(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Xt]=t,e[No]=r,m1(e,t,!1,!1),t.stateNode=e;e:{switch(a=cc(n,r),n){case"dialog":se("cancel",e),se("close",e),i=r;break;case"iframe":case"object":case"embed":se("load",e),i=r;break;case"video":case"audio":for(i=0;i<no.length;i++)se(no[i],e);i=r;break;case"source":se("error",e),i=r;break;case"img":case"image":case"link":se("error",e),se("load",e),i=r;break;case"details":se("toggle",e),i=r;break;case"input":Xh(e,r),i=ic(e,r),se("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=me({},r,{value:void 0}),se("invalid",e);break;case"textarea":Qh(e,r),i=sc(e,r),se("invalid",e);break;default:i=r}uc(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?Ky(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Yy(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ao(e,l):typeof l=="number"&&Ao(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Eo.hasOwnProperty(o)?l!=null&&o==="onScroll"&&se("scroll",e):l!=null&&ed(e,o,l,a))}switch(n){case"input":pa(e),Kh(e,r,!1);break;case"textarea":pa(e),Zh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Vn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Zr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Zr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=As)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ze(t),null;case 6:if(e&&t.stateNode!=null)b1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(T(166));if(n=sr(Do.current),sr(Qt.current),xa(t)){if(r=t.stateNode,n=t.memoizedProps,r[Xt]=t,(o=r.nodeValue!==n)&&(e=vt,e!==null))switch(e.tag){case 3:wa(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&wa(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xt]=t,t.stateNode=r}return ze(t),null;case 13:if(ue(pe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(he&&pt!==null&&t.mode&1&&!(t.flags&128))N0(),ui(),t.flags|=98560,o=!1;else if(o=xa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(T(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(T(317));o[Xt]=t}else ui(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ze(t),o=!1}else jt!==null&&(Wc(jt),jt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||pe.current&1?Pe===0&&(Pe=3):Nd())),t.updateQueue!==null&&(t.flags|=4),ze(t),null);case 4:return fi(),Nc(e,t),e===null&&Lo(t.stateNode.containerInfo),ze(t),null;case 10:return bd(t.type._context),ze(t),null;case 17:return ot(t.type)&&Ts(),ze(t),null;case 19:if(ue(pe),o=t.memoizedState,o===null)return ze(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Di(o,!1);else{if(Pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Rs(e),a!==null){for(t.flags|=128,Di(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return re(pe,pe.current&1|2),t.child}e=e.sibling}o.tail!==null&&xe()>hi&&(t.flags|=128,r=!0,Di(o,!1),t.lanes=4194304)}else{if(!r)if(e=Rs(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Di(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!he)return ze(t),null}else 2*xe()-o.renderingStartTime>hi&&n!==1073741824&&(t.flags|=128,r=!0,Di(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=xe(),t.sibling=null,n=pe.current,re(pe,r?n&1|2:n&1),t):(ze(t),null);case 22:case 23:return Rd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ft&1073741824&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function jx(e,t){switch(gd(t),t.tag){case 1:return ot(t.type)&&Ts(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fi(),ue(it),ue(Ve),Sd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return xd(t),null;case 13:if(ue(pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));ui()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ue(pe),null;case 4:return fi(),null;case 10:return bd(t.type._context),null;case 22:case 23:return Rd(),null;case 24:return null;default:return null}}var Ea=!1,Ue=!1,zx=typeof WeakSet=="function"?WeakSet:Set,F=null;function Kr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){be(e,t,r)}else n.current=null}function Fc(e,t,n){try{n()}catch(r){be(e,t,r)}}var zp=!1;function Bx(e,t){if($c=Ss,e=x0(),hd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,c=0,f=e,d=null;t:for(;;){for(var h;f!==n||i!==0&&f.nodeType!==3||(s=a+i),f!==o||r!==0&&f.nodeType!==3||(l=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(h=f.firstChild)!==null;)d=f,f=h;for(;;){if(f===e)break t;if(d===n&&++u===i&&(s=a),d===o&&++c===r&&(l=a),(h=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=h}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(_c={focusedElem:e,selectionRange:n},Ss=!1,F=t;F!==null;)if(t=F,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,F=e;else for(;F!==null;){t=F;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var m=g.memoizedProps,y=g.memoizedState,p=t.stateNode,v=p.getSnapshotBeforeUpdate(t.elementType===t.type?m:Nt(t.type,m),y);p.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch($){be(t,t.return,$)}if(e=t.sibling,e!==null){e.return=t.return,F=e;break}F=t.return}return g=zp,zp=!1,g}function go(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Fc(t,n,o)}i=i.next}while(i!==r)}}function ml(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Dc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function $1(e){var t=e.alternate;t!==null&&(e.alternate=null,$1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Xt],delete t[No],delete t[Sc],delete t[xx],delete t[Sx])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _1(e){return e.tag===5||e.tag===3||e.tag===4}function Bp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function jc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=As));else if(r!==4&&(e=e.child,e!==null))for(jc(e,t,n),e=e.sibling;e!==null;)jc(e,t,n),e=e.sibling}function zc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(zc(e,t,n),e=e.sibling;e!==null;)zc(e,t,n),e=e.sibling}var Re=null,Ft=!1;function bn(e,t,n){for(n=n.child;n!==null;)w1(e,t,n),n=n.sibling}function w1(e,t,n){if(Kt&&typeof Kt.onCommitFiberUnmount=="function")try{Kt.onCommitFiberUnmount(ul,n)}catch{}switch(n.tag){case 5:Ue||Kr(n,t);case 6:var r=Re,i=Ft;Re=null,bn(e,t,n),Re=r,Ft=i,Re!==null&&(Ft?(e=Re,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Re.removeChild(n.stateNode));break;case 18:Re!==null&&(Ft?(e=Re,n=n.stateNode,e.nodeType===8?cu(e.parentNode,n):e.nodeType===1&&cu(e,n),Mo(e)):cu(Re,n.stateNode));break;case 4:r=Re,i=Ft,Re=n.stateNode.containerInfo,Ft=!0,bn(e,t,n),Re=r,Ft=i;break;case 0:case 11:case 14:case 15:if(!Ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Fc(n,t,a),i=i.next}while(i!==r)}bn(e,t,n);break;case 1:if(!Ue&&(Kr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){be(n,t,s)}bn(e,t,n);break;case 21:bn(e,t,n);break;case 22:n.mode&1?(Ue=(r=Ue)||n.memoizedState!==null,bn(e,t,n),Ue=r):bn(e,t,n);break;default:bn(e,t,n)}}function Up(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new zx),t.forEach(function(r){var i=Qx.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Lt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:Re=s.stateNode,Ft=!1;break e;case 3:Re=s.stateNode.containerInfo,Ft=!0;break e;case 4:Re=s.stateNode.containerInfo,Ft=!0;break e}s=s.return}if(Re===null)throw Error(T(160));w1(o,a,i),Re=null,Ft=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){be(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)x1(t,e),t=t.sibling}function x1(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Lt(t,e),Wt(e),r&4){try{go(3,e,e.return),ml(3,e)}catch(m){be(e,e.return,m)}try{go(5,e,e.return)}catch(m){be(e,e.return,m)}}break;case 1:Lt(t,e),Wt(e),r&512&&n!==null&&Kr(n,n.return);break;case 5:if(Lt(t,e),Wt(e),r&512&&n!==null&&Kr(n,n.return),e.flags&32){var i=e.stateNode;try{Ao(i,"")}catch(m){be(e,e.return,m)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Wy(i,o),cc(s,a);var u=cc(s,o);for(a=0;a<l.length;a+=2){var c=l[a],f=l[a+1];c==="style"?Ky(i,f):c==="dangerouslySetInnerHTML"?Yy(i,f):c==="children"?Ao(i,f):ed(i,c,f,u)}switch(s){case"input":oc(i,o);break;case"textarea":Hy(i,o);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?Zr(i,!!o.multiple,h,!1):d!==!!o.multiple&&(o.defaultValue!=null?Zr(i,!!o.multiple,o.defaultValue,!0):Zr(i,!!o.multiple,o.multiple?[]:"",!1))}i[No]=o}catch(m){be(e,e.return,m)}}break;case 6:if(Lt(t,e),Wt(e),r&4){if(e.stateNode===null)throw Error(T(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(m){be(e,e.return,m)}}break;case 3:if(Lt(t,e),Wt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Mo(t.containerInfo)}catch(m){be(e,e.return,m)}break;case 4:Lt(t,e),Wt(e);break;case 13:Lt(t,e),Wt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Id=xe())),r&4&&Up(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Ue=(u=Ue)||c,Lt(t,e),Ue=u):Lt(t,e),Wt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(F=e,c=e.child;c!==null;){for(f=F=c;F!==null;){switch(d=F,h=d.child,d.tag){case 0:case 11:case 14:case 15:go(4,d,d.return);break;case 1:Kr(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(m){be(r,n,m)}}break;case 5:Kr(d,d.return);break;case 22:if(d.memoizedState!==null){Wp(f);continue}}h!==null?(h.return=d,F=h):Wp(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Xy("display",a))}catch(m){be(e,e.return,m)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(m){be(e,e.return,m)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Lt(t,e),Wt(e),r&4&&Up(e);break;case 21:break;default:Lt(t,e),Wt(e)}}function Wt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(_1(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ao(i,""),r.flags&=-33);var o=Bp(e);zc(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Bp(e);jc(e,s,a);break;default:throw Error(T(161))}}catch(l){be(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ux(e,t,n){F=e,S1(e)}function S1(e,t,n){for(var r=(e.mode&1)!==0;F!==null;){var i=F,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Ea;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||Ue;s=Ea;var u=Ue;if(Ea=a,(Ue=l)&&!u)for(F=i;F!==null;)a=F,l=a.child,a.tag===22&&a.memoizedState!==null?Hp(i):l!==null?(l.return=a,F=l):Hp(i);for(;o!==null;)F=o,S1(o),o=o.sibling;F=i,Ea=s,Ue=u}Vp(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,F=o):Vp(e)}}function Vp(e){for(;F!==null;){var t=F;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ue||ml(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ue)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Nt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ep(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ep(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Mo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}Ue||t.flags&512&&Dc(t)}catch(d){be(t,t.return,d)}}if(t===e){F=null;break}if(n=t.sibling,n!==null){n.return=t.return,F=n;break}F=t.return}}function Wp(e){for(;F!==null;){var t=F;if(t===e){F=null;break}var n=t.sibling;if(n!==null){n.return=t.return,F=n;break}F=t.return}}function Hp(e){for(;F!==null;){var t=F;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ml(4,t)}catch(l){be(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){be(t,i,l)}}var o=t.return;try{Dc(t)}catch(l){be(t,o,l)}break;case 5:var a=t.return;try{Dc(t)}catch(l){be(t,a,l)}}}catch(l){be(t,t.return,l)}if(t===e){F=null;break}var s=t.sibling;if(s!==null){s.return=t.return,F=s;break}F=t.return}}var Vx=Math.ceil,Ds=yn.ReactCurrentDispatcher,Md=yn.ReactCurrentOwner,Ct=yn.ReactCurrentBatchConfig,Z=0,Le=null,Se=null,Ne=0,ft=0,Qr=Yn(0),Pe=0,Uo=null,yr=0,yl=0,Od=0,vo=null,Je=null,Id=0,hi=1/0,an=null,js=!1,Bc=null,jn=null,Aa=!1,Pn=null,zs=0,mo=0,Uc=null,cs=-1,fs=0;function Ge(){return Z&6?xe():cs!==-1?cs:cs=xe()}function zn(e){return e.mode&1?Z&2&&Ne!==0?Ne&-Ne:Ex.transition!==null?(fs===0&&(fs=s0()),fs):(e=ee,e!==0||(e=window.event,e=e===void 0?16:p0(e.type)),e):1}function Bt(e,t,n,r){if(50<mo)throw mo=0,Uc=null,Error(T(185));Ko(e,n,r),(!(Z&2)||e!==Le)&&(e===Le&&(!(Z&2)&&(yl|=n),Pe===4&&Tn(e,Ne)),at(e,r),n===1&&Z===0&&!(t.mode&1)&&(hi=xe()+500,pl&&Xn()))}function at(e,t){var n=e.callbackNode;Ew(e,t);var r=xs(e,e===Le?Ne:0);if(r===0)n!==null&&ep(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ep(n),t===1)e.tag===0?kx(Gp.bind(null,e)):I0(Gp.bind(null,e)),_x(function(){!(Z&6)&&Xn()}),n=null;else{switch(l0(r)){case 1:n=od;break;case 4:n=o0;break;case 16:n=ws;break;case 536870912:n=a0;break;default:n=ws}n=O1(n,k1.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function k1(e,t){if(cs=-1,fs=0,Z&6)throw Error(T(327));var n=e.callbackNode;if(ni()&&e.callbackNode!==n)return null;var r=xs(e,e===Le?Ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Bs(e,r);else{t=r;var i=Z;Z|=2;var o=A1();(Le!==e||Ne!==t)&&(an=null,hi=xe()+500,dr(e,t));do try{Gx();break}catch(s){E1(e,s)}while(1);yd(),Ds.current=o,Z=i,Se!==null?t=0:(Le=null,Ne=0,t=Pe)}if(t!==0){if(t===2&&(i=gc(e),i!==0&&(r=i,t=Vc(e,i))),t===1)throw n=Uo,dr(e,0),Tn(e,r),at(e,xe()),n;if(t===6)Tn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Wx(i)&&(t=Bs(e,r),t===2&&(o=gc(e),o!==0&&(r=o,t=Vc(e,o))),t===1))throw n=Uo,dr(e,0),Tn(e,r),at(e,xe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(T(345));case 2:nr(e,Je,an);break;case 3:if(Tn(e,r),(r&130023424)===r&&(t=Id+500-xe(),10<t)){if(xs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ge(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=xc(nr.bind(null,e,Je,an),t);break}nr(e,Je,an);break;case 4:if(Tn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-zt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Vx(r/1960))-r,10<r){e.timeoutHandle=xc(nr.bind(null,e,Je,an),r);break}nr(e,Je,an);break;case 5:nr(e,Je,an);break;default:throw Error(T(329))}}}return at(e,xe()),e.callbackNode===n?k1.bind(null,e):null}function Vc(e,t){var n=vo;return e.current.memoizedState.isDehydrated&&(dr(e,t).flags|=256),e=Bs(e,t),e!==2&&(t=Je,Je=n,t!==null&&Wc(t)),e}function Wc(e){Je===null?Je=e:Je.push.apply(Je,e)}function Wx(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ut(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Tn(e,t){for(t&=~Od,t&=~yl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-zt(t),r=1<<n;e[n]=-1,t&=~r}}function Gp(e){if(Z&6)throw Error(T(327));ni();var t=xs(e,0);if(!(t&1))return at(e,xe()),null;var n=Bs(e,t);if(e.tag!==0&&n===2){var r=gc(e);r!==0&&(t=r,n=Vc(e,r))}if(n===1)throw n=Uo,dr(e,0),Tn(e,t),at(e,xe()),n;if(n===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,nr(e,Je,an),at(e,xe()),null}function Ld(e,t){var n=Z;Z|=1;try{return e(t)}finally{Z=n,Z===0&&(hi=xe()+500,pl&&Xn())}}function br(e){Pn!==null&&Pn.tag===0&&!(Z&6)&&ni();var t=Z;Z|=1;var n=Ct.transition,r=ee;try{if(Ct.transition=null,ee=1,e)return e()}finally{ee=r,Ct.transition=n,Z=t,!(Z&6)&&Xn()}}function Rd(){ft=Qr.current,ue(Qr)}function dr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,$x(n)),Se!==null)for(n=Se.return;n!==null;){var r=n;switch(gd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ts();break;case 3:fi(),ue(it),ue(Ve),Sd();break;case 5:xd(r);break;case 4:fi();break;case 13:ue(pe);break;case 19:ue(pe);break;case 10:bd(r.type._context);break;case 22:case 23:Rd()}n=n.return}if(Le=e,Se=e=Bn(e.current,null),Ne=ft=t,Pe=0,Uo=null,Od=yl=yr=0,Je=vo=null,ar!==null){for(t=0;t<ar.length;t++)if(n=ar[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}ar=null}return e}function E1(e,t){do{var n=Se;try{if(yd(),ss.current=Fs,Ns){for(var r=ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ns=!1}if(mr=0,Oe=Ce=ve=null,po=!1,jo=0,Md.current=null,n===null||n.return===null){Pe=1,Uo=t,Se=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=Ne,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=Ip(a);if(h!==null){h.flags&=-257,Lp(h,a,s,o,t),h.mode&1&&Op(o,u,t),t=h,l=u;var g=t.updateQueue;if(g===null){var m=new Set;m.add(l),t.updateQueue=m}else g.add(l);break e}else{if(!(t&1)){Op(o,u,t),Nd();break e}l=Error(T(426))}}else if(he&&s.mode&1){var y=Ip(a);if(y!==null){!(y.flags&65536)&&(y.flags|=256),Lp(y,a,s,o,t),vd(di(l,s));break e}}o=l=di(l,s),Pe!==4&&(Pe=2),vo===null?vo=[o]:vo.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=u1(o,l,t);kp(o,p);break e;case 1:s=l;var v=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof v.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(jn===null||!jn.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var $=c1(o,s,t);kp(o,$);break e}}o=o.return}while(o!==null)}C1(n)}catch(_){t=_,Se===n&&n!==null&&(Se=n=n.return);continue}break}while(1)}function A1(){var e=Ds.current;return Ds.current=Fs,e===null?Fs:e}function Nd(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),Le===null||!(yr&268435455)&&!(yl&268435455)||Tn(Le,Ne)}function Bs(e,t){var n=Z;Z|=2;var r=A1();(Le!==e||Ne!==t)&&(an=null,dr(e,t));do try{Hx();break}catch(i){E1(e,i)}while(1);if(yd(),Z=n,Ds.current=r,Se!==null)throw Error(T(261));return Le=null,Ne=0,Pe}function Hx(){for(;Se!==null;)T1(Se)}function Gx(){for(;Se!==null&&!mw();)T1(Se)}function T1(e){var t=M1(e.alternate,e,ft);e.memoizedProps=e.pendingProps,t===null?C1(e):Se=t,Md.current=null}function C1(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=jx(n,t),n!==null){n.flags&=32767,Se=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Pe=6,Se=null;return}}else if(n=Dx(n,t,ft),n!==null){Se=n;return}if(t=t.sibling,t!==null){Se=t;return}Se=t=e}while(t!==null);Pe===0&&(Pe=5)}function nr(e,t,n){var r=ee,i=Ct.transition;try{Ct.transition=null,ee=1,Yx(e,t,n,r)}finally{Ct.transition=i,ee=r}return null}function Yx(e,t,n,r){do ni();while(Pn!==null);if(Z&6)throw Error(T(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Aw(e,o),e===Le&&(Se=Le=null,Ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Aa||(Aa=!0,O1(ws,function(){return ni(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ct.transition,Ct.transition=null;var a=ee;ee=1;var s=Z;Z|=4,Md.current=null,Bx(e,n),x1(n,e),hx(_c),Ss=!!$c,_c=$c=null,e.current=n,Ux(n),yw(),Z=s,ee=a,Ct.transition=o}else e.current=n;if(Aa&&(Aa=!1,Pn=e,zs=i),o=e.pendingLanes,o===0&&(jn=null),_w(n.stateNode),at(e,xe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(js)throw js=!1,e=Bc,Bc=null,e;return zs&1&&e.tag!==0&&ni(),o=e.pendingLanes,o&1?e===Uc?mo++:(mo=0,Uc=e):mo=0,Xn(),null}function ni(){if(Pn!==null){var e=l0(zs),t=Ct.transition,n=ee;try{if(Ct.transition=null,ee=16>e?16:e,Pn===null)var r=!1;else{if(e=Pn,Pn=null,zs=0,Z&6)throw Error(T(331));var i=Z;for(Z|=4,F=e.current;F!==null;){var o=F,a=o.child;if(F.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(F=u;F!==null;){var c=F;switch(c.tag){case 0:case 11:case 15:go(8,c,o)}var f=c.child;if(f!==null)f.return=c,F=f;else for(;F!==null;){c=F;var d=c.sibling,h=c.return;if($1(c),c===u){F=null;break}if(d!==null){d.return=h,F=d;break}F=h}}}var g=o.alternate;if(g!==null){var m=g.child;if(m!==null){g.child=null;do{var y=m.sibling;m.sibling=null,m=y}while(m!==null)}}F=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,F=a;else e:for(;F!==null;){if(o=F,o.flags&2048)switch(o.tag){case 0:case 11:case 15:go(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,F=p;break e}F=o.return}}var v=e.current;for(F=v;F!==null;){a=F;var b=a.child;if(a.subtreeFlags&2064&&b!==null)b.return=a,F=b;else e:for(a=v;F!==null;){if(s=F,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:ml(9,s)}}catch(_){be(s,s.return,_)}if(s===a){F=null;break e}var $=s.sibling;if($!==null){$.return=s.return,F=$;break e}F=s.return}}if(Z=i,Xn(),Kt&&typeof Kt.onPostCommitFiberRoot=="function")try{Kt.onPostCommitFiberRoot(ul,e)}catch{}r=!0}return r}finally{ee=n,Ct.transition=t}}return!1}function Yp(e,t,n){t=di(n,t),t=u1(e,t,1),e=Dn(e,t,1),t=Ge(),e!==null&&(Ko(e,1,t),at(e,t))}function be(e,t,n){if(e.tag===3)Yp(e,e,n);else for(;t!==null;){if(t.tag===3){Yp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jn===null||!jn.has(r))){e=di(n,e),e=c1(t,e,1),t=Dn(t,e,1),e=Ge(),t!==null&&(Ko(t,1,e),at(t,e));break}}t=t.return}}function Xx(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ge(),e.pingedLanes|=e.suspendedLanes&n,Le===e&&(Ne&n)===n&&(Pe===4||Pe===3&&(Ne&130023424)===Ne&&500>xe()-Id?dr(e,0):Od|=n),at(e,t)}function P1(e,t){t===0&&(e.mode&1?(t=ma,ma<<=1,!(ma&130023424)&&(ma=4194304)):t=1);var n=Ge();e=gn(e,t),e!==null&&(Ko(e,t,n),at(e,n))}function Kx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),P1(e,n)}function Qx(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(t),P1(e,n)}var M1;M1=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||it.current)tt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return tt=!1,Fx(e,t,n);tt=!!(e.flags&131072)}else tt=!1,he&&t.flags&1048576&&L0(t,Ms,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;us(e,t),e=t.pendingProps;var i=li(t,Ve.current);ti(t,n),i=Ed(null,t,r,e,i,n);var o=Ad();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ot(r)?(o=!0,Cs(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,_d(t),i.updater=gl,t.stateNode=i,i._reactInternals=t,Pc(t,r,e,n),t=Ic(null,t,r,!0,o,n)):(t.tag=0,he&&o&&pd(t),He(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(us(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=qx(r),e=Nt(r,e),i){case 0:t=Oc(null,t,r,e,n);break e;case 1:t=Fp(null,t,r,e,n);break e;case 11:t=Rp(null,t,r,e,n);break e;case 14:t=Np(null,t,r,Nt(r.type,e),n);break e}throw Error(T(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Nt(r,i),Oc(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Nt(r,i),Fp(e,t,r,i,n);case 3:e:{if(p1(t),e===null)throw Error(T(387));r=t.pendingProps,o=t.memoizedState,i=o.element,D0(e,t),Ls(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=di(Error(T(423)),t),t=Dp(e,t,r,n,i);break e}else if(r!==i){i=di(Error(T(424)),t),t=Dp(e,t,r,n,i);break e}else for(pt=Fn(t.stateNode.containerInfo.firstChild),vt=t,he=!0,jt=null,n=U0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ui(),r===i){t=vn(e,t,n);break e}He(e,t,r,n)}t=t.child}return t;case 5:return V0(t),e===null&&Ac(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,wc(r,i)?a=null:o!==null&&wc(r,o)&&(t.flags|=32),h1(e,t),He(e,t,a,n),t.child;case 6:return e===null&&Ac(t),null;case 13:return g1(e,t,n);case 4:return wd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ci(t,null,r,n):He(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Nt(r,i),Rp(e,t,r,i,n);case 7:return He(e,t,t.pendingProps,n),t.child;case 8:return He(e,t,t.pendingProps.children,n),t.child;case 12:return He(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,re(Os,r._currentValue),r._currentValue=a,o!==null)if(Ut(o.value,a)){if(o.children===i.children&&!it.current){t=vn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=dn(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Tc(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(T(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Tc(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}He(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ti(t,n),i=Mt(i),r=r(i),t.flags|=1,He(e,t,r,n),t.child;case 14:return r=t.type,i=Nt(r,t.pendingProps),i=Nt(r.type,i),Np(e,t,r,i,n);case 15:return f1(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Nt(r,i),us(e,t),t.tag=1,ot(r)?(e=!0,Cs(t)):e=!1,ti(t,n),z0(t,r,i),Pc(t,r,i,n),Ic(null,t,r,!0,e,n);case 19:return v1(e,t,n);case 22:return d1(e,t,n)}throw Error(T(156,t.tag))};function O1(e,t){return i0(e,t)}function Zx(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Et(e,t,n,r){return new Zx(e,t,n,r)}function Fd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qx(e){if(typeof e=="function")return Fd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===nd)return 11;if(e===rd)return 14}return 2}function Bn(e,t){var n=e.alternate;return n===null?(n=Et(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ds(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Fd(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case zr:return hr(n.children,i,o,t);case td:a=8,i|=8;break;case ec:return e=Et(12,n,t,i|2),e.elementType=ec,e.lanes=o,e;case tc:return e=Et(13,n,t,i),e.elementType=tc,e.lanes=o,e;case nc:return e=Et(19,n,t,i),e.elementType=nc,e.lanes=o,e;case By:return bl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case jy:a=10;break e;case zy:a=9;break e;case nd:a=11;break e;case rd:a=14;break e;case xn:a=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=Et(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function hr(e,t,n,r){return e=Et(7,e,r,t),e.lanes=n,e}function bl(e,t,n,r){return e=Et(22,e,r,t),e.elementType=By,e.lanes=n,e.stateNode={isHidden:!1},e}function yu(e,t,n){return e=Et(6,e,null,t),e.lanes=n,e}function bu(e,t,n){return t=Et(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Jx(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jl(0),this.expirationTimes=Jl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Dd(e,t,n,r,i,o,a,s,l){return e=new Jx(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Et(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_d(o),e}function e2(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:jr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function I1(e){if(!e)return Wn;e=e._reactInternals;e:{if(xr(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ot(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var n=e.type;if(ot(n))return O0(e,n,t)}return t}function L1(e,t,n,r,i,o,a,s,l){return e=Dd(n,r,!0,e,i,o,a,s,l),e.context=I1(null),n=e.current,r=Ge(),i=zn(n),o=dn(r,i),o.callback=t??null,Dn(n,o,i),e.current.lanes=i,Ko(e,i,r),at(e,r),e}function $l(e,t,n,r){var i=t.current,o=Ge(),a=zn(i);return n=I1(n),t.context===null?t.context=n:t.pendingContext=n,t=dn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Dn(i,t,a),e!==null&&(Bt(e,i,a,o),as(e,i,a)),a}function Us(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Xp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function jd(e,t){Xp(e,t),(e=e.alternate)&&Xp(e,t)}function t2(){return null}var R1=typeof reportError=="function"?reportError:function(e){console.error(e)};function zd(e){this._internalRoot=e}_l.prototype.render=zd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));$l(e,t,null,null)};_l.prototype.unmount=zd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;br(function(){$l(null,e,null,null)}),t[pn]=null}};function _l(e){this._internalRoot=e}_l.prototype.unstable_scheduleHydration=function(e){if(e){var t=f0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<An.length&&t!==0&&t<An[n].priority;n++);An.splice(n,0,e),n===0&&h0(e)}};function Bd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function wl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Kp(){}function n2(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Us(a);o.call(u)}}var a=L1(t,r,e,0,null,!1,!1,"",Kp);return e._reactRootContainer=a,e[pn]=a.current,Lo(e.nodeType===8?e.parentNode:e),br(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=Us(l);s.call(u)}}var l=Dd(e,0,!1,null,null,!1,!1,"",Kp);return e._reactRootContainer=l,e[pn]=l.current,Lo(e.nodeType===8?e.parentNode:e),br(function(){$l(t,l,n,r)}),l}function xl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=Us(a);s.call(l)}}$l(t,a,e,i)}else a=n2(n,t,e,i,r);return Us(a)}u0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=to(t.pendingLanes);n!==0&&(ad(t,n|1),at(t,xe()),!(Z&6)&&(hi=xe()+500,Xn()))}break;case 13:br(function(){var r=gn(e,1);if(r!==null){var i=Ge();Bt(r,e,1,i)}}),jd(e,1)}};sd=function(e){if(e.tag===13){var t=gn(e,134217728);if(t!==null){var n=Ge();Bt(t,e,134217728,n)}jd(e,134217728)}};c0=function(e){if(e.tag===13){var t=zn(e),n=gn(e,t);if(n!==null){var r=Ge();Bt(n,e,t,r)}jd(e,t)}};f0=function(){return ee};d0=function(e,t){var n=ee;try{return ee=e,t()}finally{ee=n}};dc=function(e,t,n){switch(t){case"input":if(oc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=hl(r);if(!i)throw Error(T(90));Vy(r),oc(r,i)}}}break;case"textarea":Hy(e,n);break;case"select":t=n.value,t!=null&&Zr(e,!!n.multiple,t,!1)}};qy=Ld;Jy=br;var r2={usingClientEntryPoint:!1,Events:[Zo,Wr,hl,Qy,Zy,Ld]},ji={findFiberByHostInstance:or,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},i2={bundleType:ji.bundleType,version:ji.version,rendererPackageName:ji.rendererPackageName,rendererConfig:ji.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=n0(e),e===null?null:e.stateNode},findFiberByHostInstance:ji.findFiberByHostInstance||t2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ta=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ta.isDisabled&&Ta.supportsFiber)try{ul=Ta.inject(i2),Kt=Ta}catch{}}yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r2;yt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bd(t))throw Error(T(200));return e2(e,t,null,n)};yt.createRoot=function(e,t){if(!Bd(e))throw Error(T(299));var n=!1,r="",i=R1;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Dd(e,1,!1,null,null,n,!1,r,i),e[pn]=t.current,Lo(e.nodeType===8?e.parentNode:e),new zd(t)};yt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=n0(t),e=e===null?null:e.stateNode,e};yt.flushSync=function(e){return br(e)};yt.hydrate=function(e,t,n){if(!wl(t))throw Error(T(200));return xl(null,e,t,!0,n)};yt.hydrateRoot=function(e,t,n){if(!Bd(e))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=R1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=L1(t,null,e,1,n??null,i,!1,o,a),e[pn]=t.current,Lo(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new _l(t)};yt.render=function(e,t,n){if(!wl(t))throw Error(T(200));return xl(null,e,t,!1,n)};yt.unmountComponentAtNode=function(e){if(!wl(e))throw Error(T(40));return e._reactRootContainer?(br(function(){xl(null,null,e,!1,function(){e._reactRootContainer=null,e[pn]=null})}),!0):!1};yt.unstable_batchedUpdates=Ld;yt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!wl(n))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return xl(e,t,n,!1,r)};yt.version="18.2.0-next-9e3b772b8-20220608";function N1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(N1)}catch(e){console.error(e)}}N1(),Ly.exports=yt;var F1=Ly.exports,Qp=F1;qu.createRoot=Qp.createRoot,qu.hydrateRoot=Qp.hydrateRoot;/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */function Jo(e){return e+.5|0}const Mn=(e,t,n)=>Math.max(Math.min(e,n),t);function ro(e){return Mn(Jo(e*2.55),0,255)}function Un(e){return Mn(Jo(e*255),0,255)}function ln(e){return Mn(Jo(e/2.55)/100,0,1)}function Zp(e){return Mn(Jo(e*100),0,100)}const _t={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Hc=[..."0123456789ABCDEF"],o2=e=>Hc[e&15],a2=e=>Hc[(e&240)>>4]+Hc[e&15],Ca=e=>(e&240)>>4===(e&15),s2=e=>Ca(e.r)&&Ca(e.g)&&Ca(e.b)&&Ca(e.a);function l2(e){var t=e.length,n;return e[0]==="#"&&(t===4||t===5?n={r:255&_t[e[1]]*17,g:255&_t[e[2]]*17,b:255&_t[e[3]]*17,a:t===5?_t[e[4]]*17:255}:(t===7||t===9)&&(n={r:_t[e[1]]<<4|_t[e[2]],g:_t[e[3]]<<4|_t[e[4]],b:_t[e[5]]<<4|_t[e[6]],a:t===9?_t[e[7]]<<4|_t[e[8]]:255})),n}const u2=(e,t)=>e<255?t(e):"";function c2(e){var t=s2(e)?o2:a2;return e?"#"+t(e.r)+t(e.g)+t(e.b)+u2(e.a,t):void 0}const f2=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function D1(e,t,n){const r=t*Math.min(n,1-n),i=(o,a=(o+e/30)%12)=>n-r*Math.max(Math.min(a-3,9-a,1),-1);return[i(0),i(8),i(4)]}function d2(e,t,n){const r=(i,o=(i+e/60)%6)=>n-n*t*Math.max(Math.min(o,4-o,1),0);return[r(5),r(3),r(1)]}function h2(e,t,n){const r=D1(e,1,.5);let i;for(t+n>1&&(i=1/(t+n),t*=i,n*=i),i=0;i<3;i++)r[i]*=1-t-n,r[i]+=t;return r}function p2(e,t,n,r,i){return e===i?(t-n)/r+(t<n?6:0):t===i?(n-e)/r+2:(e-t)/r+4}function Ud(e){const n=e.r/255,r=e.g/255,i=e.b/255,o=Math.max(n,r,i),a=Math.min(n,r,i),s=(o+a)/2;let l,u,c;return o!==a&&(c=o-a,u=s>.5?c/(2-o-a):c/(o+a),l=p2(n,r,i,c,o),l=l*60+.5),[l|0,u||0,s]}function Vd(e,t,n,r){return(Array.isArray(t)?e(t[0],t[1],t[2]):e(t,n,r)).map(Un)}function Wd(e,t,n){return Vd(D1,e,t,n)}function g2(e,t,n){return Vd(h2,e,t,n)}function v2(e,t,n){return Vd(d2,e,t,n)}function j1(e){return(e%360+360)%360}function m2(e){const t=f2.exec(e);let n=255,r;if(!t)return;t[5]!==r&&(n=t[6]?ro(+t[5]):Un(+t[5]));const i=j1(+t[2]),o=+t[3]/100,a=+t[4]/100;return t[1]==="hwb"?r=g2(i,o,a):t[1]==="hsv"?r=v2(i,o,a):r=Wd(i,o,a),{r:r[0],g:r[1],b:r[2],a:n}}function y2(e,t){var n=Ud(e);n[0]=j1(n[0]+t),n=Wd(n),e.r=n[0],e.g=n[1],e.b=n[2]}function b2(e){if(!e)return;const t=Ud(e),n=t[0],r=Zp(t[1]),i=Zp(t[2]);return e.a<255?`hsla(${n}, ${r}%, ${i}%, ${ln(e.a)})`:`hsl(${n}, ${r}%, ${i}%)`}const qp={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Jp={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function $2(){const e={},t=Object.keys(Jp),n=Object.keys(qp);let r,i,o,a,s;for(r=0;r<t.length;r++){for(a=s=t[r],i=0;i<n.length;i++)o=n[i],s=s.replace(o,qp[o]);o=parseInt(Jp[a],16),e[s]=[o>>16&255,o>>8&255,o&255]}return e}let Pa;function _2(e){Pa||(Pa=$2(),Pa.transparent=[0,0,0,0]);const t=Pa[e.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const w2=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function x2(e){const t=w2.exec(e);let n=255,r,i,o;if(t){if(t[7]!==r){const a=+t[7];n=t[8]?ro(a):Mn(a*255,0,255)}return r=+t[1],i=+t[3],o=+t[5],r=255&(t[2]?ro(r):Mn(r,0,255)),i=255&(t[4]?ro(i):Mn(i,0,255)),o=255&(t[6]?ro(o):Mn(o,0,255)),{r,g:i,b:o,a:n}}}function S2(e){return e&&(e.a<255?`rgba(${e.r}, ${e.g}, ${e.b}, ${ln(e.a)})`:`rgb(${e.r}, ${e.g}, ${e.b})`)}const $u=e=>e<=.0031308?e*12.92:Math.pow(e,1/2.4)*1.055-.055,Rr=e=>e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4);function k2(e,t,n){const r=Rr(ln(e.r)),i=Rr(ln(e.g)),o=Rr(ln(e.b));return{r:Un($u(r+n*(Rr(ln(t.r))-r))),g:Un($u(i+n*(Rr(ln(t.g))-i))),b:Un($u(o+n*(Rr(ln(t.b))-o))),a:e.a+n*(t.a-e.a)}}function Ma(e,t,n){if(e){let r=Ud(e);r[t]=Math.max(0,Math.min(r[t]+r[t]*n,t===0?360:1)),r=Wd(r),e.r=r[0],e.g=r[1],e.b=r[2]}}function z1(e,t){return e&&Object.assign(t||{},e)}function eg(e){var t={r:0,g:0,b:0,a:255};return Array.isArray(e)?e.length>=3&&(t={r:e[0],g:e[1],b:e[2],a:255},e.length>3&&(t.a=Un(e[3]))):(t=z1(e,{r:0,g:0,b:0,a:1}),t.a=Un(t.a)),t}function E2(e){return e.charAt(0)==="r"?x2(e):m2(e)}class Vo{constructor(t){if(t instanceof Vo)return t;const n=typeof t;let r;n==="object"?r=eg(t):n==="string"&&(r=l2(t)||_2(t)||E2(t)),this._rgb=r,this._valid=!!r}get valid(){return this._valid}get rgb(){var t=z1(this._rgb);return t&&(t.a=ln(t.a)),t}set rgb(t){this._rgb=eg(t)}rgbString(){return this._valid?S2(this._rgb):void 0}hexString(){return this._valid?c2(this._rgb):void 0}hslString(){return this._valid?b2(this._rgb):void 0}mix(t,n){if(t){const r=this.rgb,i=t.rgb;let o;const a=n===o?.5:n,s=2*a-1,l=r.a-i.a,u=((s*l===-1?s:(s+l)/(1+s*l))+1)/2;o=1-u,r.r=255&u*r.r+o*i.r+.5,r.g=255&u*r.g+o*i.g+.5,r.b=255&u*r.b+o*i.b+.5,r.a=a*r.a+(1-a)*i.a,this.rgb=r}return this}interpolate(t,n){return t&&(this._rgb=k2(this._rgb,t._rgb,n)),this}clone(){return new Vo(this.rgb)}alpha(t){return this._rgb.a=Un(t),this}clearer(t){const n=this._rgb;return n.a*=1-t,this}greyscale(){const t=this._rgb,n=Jo(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=n,this}opaquer(t){const n=this._rgb;return n.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return Ma(this._rgb,2,t),this}darken(t){return Ma(this._rgb,2,-t),this}saturate(t){return Ma(this._rgb,1,t),this}desaturate(t){return Ma(this._rgb,1,-t),this}rotate(t){return y2(this._rgb,t),this}}/*!
 * Chart.js v4.4.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */function Jt(){}const A2=(()=>{let e=0;return()=>e++})();function le(e){return e===null||typeof e>"u"}function ge(e){if(Array.isArray&&Array.isArray(e))return!0;const t=Object.prototype.toString.call(e);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function q(e){return e!==null&&Object.prototype.toString.call(e)==="[object Object]"}function Ie(e){return(typeof e=="number"||e instanceof Number)&&isFinite(+e)}function ct(e,t){return Ie(e)?e:t}function Y(e,t){return typeof e>"u"?t:e}const T2=(e,t)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100*t:+e;function ne(e,t,n){if(e&&typeof e.call=="function")return e.apply(n,t)}function J(e,t,n,r){let i,o,a;if(ge(e))if(o=e.length,r)for(i=o-1;i>=0;i--)t.call(n,e[i],i);else for(i=0;i<o;i++)t.call(n,e[i],i);else if(q(e))for(a=Object.keys(e),o=a.length,i=0;i<o;i++)t.call(n,e[a[i]],a[i])}function Vs(e,t){let n,r,i,o;if(!e||!t||e.length!==t.length)return!1;for(n=0,r=e.length;n<r;++n)if(i=e[n],o=t[n],i.datasetIndex!==o.datasetIndex||i.index!==o.index)return!1;return!0}function Ws(e){if(ge(e))return e.map(Ws);if(q(e)){const t=Object.create(null),n=Object.keys(e),r=n.length;let i=0;for(;i<r;++i)t[n[i]]=Ws(e[n[i]]);return t}return e}function B1(e){return["__proto__","prototype","constructor"].indexOf(e)===-1}function C2(e,t,n,r){if(!B1(e))return;const i=t[e],o=n[e];q(i)&&q(o)?Wo(i,o,r):t[e]=Ws(o)}function Wo(e,t,n){const r=ge(t)?t:[t],i=r.length;if(!q(e))return e;n=n||{};const o=n.merger||C2;let a;for(let s=0;s<i;++s){if(a=r[s],!q(a))continue;const l=Object.keys(a);for(let u=0,c=l.length;u<c;++u)o(l[u],e,a,n)}return e}function yo(e,t){return Wo(e,t,{merger:P2})}function P2(e,t,n){if(!B1(e))return;const r=t[e],i=n[e];q(r)&&q(i)?yo(r,i):Object.prototype.hasOwnProperty.call(t,e)||(t[e]=Ws(i))}const tg={"":e=>e,x:e=>e.x,y:e=>e.y};function M2(e){const t=e.split("."),n=[];let r="";for(const i of t)r+=i,r.endsWith("\\")?r=r.slice(0,-1)+".":(n.push(r),r="");return n}function O2(e){const t=M2(e);return n=>{for(const r of t){if(r==="")break;n=n&&n[r]}return n}}function Hs(e,t){return(tg[t]||(tg[t]=O2(t)))(e)}function Hd(e){return e.charAt(0).toUpperCase()+e.slice(1)}const Gs=e=>typeof e<"u",Hn=e=>typeof e=="function",ng=(e,t)=>{if(e.size!==t.size)return!1;for(const n of e)if(!t.has(n))return!1;return!0};function I2(e){return e.type==="mouseup"||e.type==="click"||e.type==="contextmenu"}const ke=Math.PI,Pt=2*ke,L2=Pt+ke,Ys=Number.POSITIVE_INFINITY,R2=ke/180,gt=ke/2,Qn=ke/4,rg=ke*2/3,On=Math.log10,pi=Math.sign;function bo(e,t,n){return Math.abs(e-t)<n}function ig(e){const t=Math.round(e);e=bo(e,t,e/1e3)?t:e;const n=Math.pow(10,Math.floor(On(e))),r=e/n;return(r<=1?1:r<=2?2:r<=5?5:10)*n}function N2(e){const t=[],n=Math.sqrt(e);let r;for(r=1;r<n;r++)e%r===0&&(t.push(r),t.push(e/r));return n===(n|0)&&t.push(n),t.sort((i,o)=>i-o).pop(),t}function Ho(e){return!isNaN(parseFloat(e))&&isFinite(e)}function F2(e,t){const n=Math.round(e);return n-t<=e&&n+t>=e}function U1(e,t,n){let r,i,o;for(r=0,i=e.length;r<i;r++)o=e[r][n],isNaN(o)||(t.min=Math.min(t.min,o),t.max=Math.max(t.max,o))}function In(e){return e*(ke/180)}function Gd(e){return e*(180/ke)}function og(e){if(!Ie(e))return;let t=1,n=0;for(;Math.round(e*t)/t!==e;)t*=10,n++;return n}function D2(e,t){const n=t.x-e.x,r=t.y-e.y,i=Math.sqrt(n*n+r*r);let o=Math.atan2(r,n);return o<-.5*ke&&(o+=Pt),{angle:o,distance:i}}function Gc(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function j2(e,t){return(e-t+L2)%Pt-ke}function Dt(e){return(e%Pt+Pt)%Pt}function V1(e,t,n,r){const i=Dt(e),o=Dt(t),a=Dt(n),s=Dt(o-i),l=Dt(a-i),u=Dt(i-o),c=Dt(i-a);return i===o||i===a||r&&o===a||s>l&&u<c}function At(e,t,n){return Math.max(t,Math.min(n,e))}function z2(e){return At(e,-32768,32767)}function io(e,t,n,r=1e-6){return e>=Math.min(t,n)-r&&e<=Math.max(t,n)+r}function Yd(e,t,n){n=n||(a=>e[a]<t);let r=e.length-1,i=0,o;for(;r-i>1;)o=i+r>>1,n(o)?i=o:r=o;return{lo:i,hi:r}}const lr=(e,t,n,r)=>Yd(e,n,r?i=>{const o=e[i][t];return o<n||o===n&&e[i+1][t]===n}:i=>e[i][t]<n),B2=(e,t,n)=>Yd(e,n,r=>e[r][t]>=n);function U2(e,t,n){let r=0,i=e.length;for(;r<i&&e[r]<t;)r++;for(;i>r&&e[i-1]>n;)i--;return r>0||i<e.length?e.slice(r,i):e}const W1=["push","pop","shift","splice","unshift"];function V2(e,t){if(e._chartjs){e._chartjs.listeners.push(t);return}Object.defineProperty(e,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),W1.forEach(n=>{const r="_onData"+Hd(n),i=e[n];Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value(...o){const a=i.apply(this,o);return e._chartjs.listeners.forEach(s=>{typeof s[r]=="function"&&s[r](...o)}),a}})})}function ag(e,t){const n=e._chartjs;if(!n)return;const r=n.listeners,i=r.indexOf(t);i!==-1&&r.splice(i,1),!(r.length>0)&&(W1.forEach(o=>{delete e[o]}),delete e._chartjs)}function W2(e){const t=new Set(e);return t.size===e.length?e:Array.from(t)}const H1=function(){return typeof window>"u"?function(e){return e()}:window.requestAnimationFrame}();function G1(e,t){let n=[],r=!1;return function(...i){n=i,r||(r=!0,H1.call(window,()=>{r=!1,e.apply(t,n)}))}}function H2(e,t){let n;return function(...r){return t?(clearTimeout(n),n=setTimeout(e,t,r)):e.apply(this,r),t}}const Xd=e=>e==="start"?"left":e==="end"?"right":"center",Be=(e,t,n)=>e==="start"?t:e==="end"?n:(t+n)/2,G2=(e,t,n,r)=>e===(r?"left":"right")?n:e==="center"?(t+n)/2:t;function Y2(e,t,n){const r=t.length;let i=0,o=r;if(e._sorted){const{iScale:a,_parsed:s}=e,l=a.axis,{min:u,max:c,minDefined:f,maxDefined:d}=a.getUserBounds();f&&(i=At(Math.min(lr(s,l,u).lo,n?r:lr(t,l,a.getPixelForValue(u)).lo),0,r-1)),d?o=At(Math.max(lr(s,a.axis,c,!0).hi+1,n?0:lr(t,l,a.getPixelForValue(c),!0).hi+1),i,r)-i:o=r-i}return{start:i,count:o}}function X2(e){const{xScale:t,yScale:n,_scaleRanges:r}=e,i={xmin:t.min,xmax:t.max,ymin:n.min,ymax:n.max};if(!r)return e._scaleRanges=i,!0;const o=r.xmin!==t.min||r.xmax!==t.max||r.ymin!==n.min||r.ymax!==n.max;return Object.assign(r,i),o}const Oa=e=>e===0||e===1,sg=(e,t,n)=>-(Math.pow(2,10*(e-=1))*Math.sin((e-t)*Pt/n)),lg=(e,t,n)=>Math.pow(2,-10*e)*Math.sin((e-t)*Pt/n)+1,$o={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>-e*(e-2),easeInOutQuad:e=>(e/=.5)<1?.5*e*e:-.5*(--e*(e-2)-1),easeInCubic:e=>e*e*e,easeOutCubic:e=>(e-=1)*e*e+1,easeInOutCubic:e=>(e/=.5)<1?.5*e*e*e:.5*((e-=2)*e*e+2),easeInQuart:e=>e*e*e*e,easeOutQuart:e=>-((e-=1)*e*e*e-1),easeInOutQuart:e=>(e/=.5)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2),easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>(e-=1)*e*e*e*e+1,easeInOutQuint:e=>(e/=.5)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2),easeInSine:e=>-Math.cos(e*gt)+1,easeOutSine:e=>Math.sin(e*gt),easeInOutSine:e=>-.5*(Math.cos(ke*e)-1),easeInExpo:e=>e===0?0:Math.pow(2,10*(e-1)),easeOutExpo:e=>e===1?1:-Math.pow(2,-10*e)+1,easeInOutExpo:e=>Oa(e)?e:e<.5?.5*Math.pow(2,10*(e*2-1)):.5*(-Math.pow(2,-10*(e*2-1))+2),easeInCirc:e=>e>=1?e:-(Math.sqrt(1-e*e)-1),easeOutCirc:e=>Math.sqrt(1-(e-=1)*e),easeInOutCirc:e=>(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1),easeInElastic:e=>Oa(e)?e:sg(e,.075,.3),easeOutElastic:e=>Oa(e)?e:lg(e,.075,.3),easeInOutElastic(e){return Oa(e)?e:e<.5?.5*sg(e*2,.1125,.45):.5+.5*lg(e*2-1,.1125,.45)},easeInBack(e){return e*e*((1.70158+1)*e-1.70158)},easeOutBack(e){return(e-=1)*e*((1.70158+1)*e+1.70158)+1},easeInOutBack(e){let t=1.70158;return(e/=.5)<1?.5*(e*e*(((t*=1.525)+1)*e-t)):.5*((e-=2)*e*(((t*=1.525)+1)*e+t)+2)},easeInBounce:e=>1-$o.easeOutBounce(1-e),easeOutBounce(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},easeInOutBounce:e=>e<.5?$o.easeInBounce(e*2)*.5:$o.easeOutBounce(e*2-1)*.5+.5};function Kd(e){if(e&&typeof e=="object"){const t=e.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function ug(e){return Kd(e)?e:new Vo(e)}function _u(e){return Kd(e)?e:new Vo(e).saturate(.5).darken(.1).hexString()}const K2=["x","y","borderWidth","radius","tension"],Q2=["color","borderColor","backgroundColor"];function Z2(e){e.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),e.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),e.set("animations",{colors:{type:"color",properties:Q2},numbers:{type:"number",properties:K2}}),e.describe("animations",{_fallback:"animation"}),e.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function q2(e){e.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const cg=new Map;function J2(e,t){t=t||{};const n=e+JSON.stringify(t);let r=cg.get(n);return r||(r=new Intl.NumberFormat(e,t),cg.set(n,r)),r}function Qd(e,t,n){return J2(t,n).format(e)}const Y1={values(e){return ge(e)?e:""+e},numeric(e,t,n){if(e===0)return"0";const r=this.chart.options.locale;let i,o=e;if(n.length>1){const u=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(u<1e-4||u>1e15)&&(i="scientific"),o=eS(e,n)}const a=On(Math.abs(o)),s=isNaN(a)?1:Math.max(Math.min(-1*Math.floor(a),20),0),l={notation:i,minimumFractionDigits:s,maximumFractionDigits:s};return Object.assign(l,this.options.ticks.format),Qd(e,r,l)},logarithmic(e,t,n){if(e===0)return"0";const r=n[t].significand||e/Math.pow(10,Math.floor(On(e)));return[1,2,3,5,10,15].includes(r)||t>.8*n.length?Y1.numeric.call(this,e,t,n):""}};function eS(e,t){let n=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(n)>=1&&e!==Math.floor(e)&&(n=e-Math.floor(e)),n}var Sl={formatters:Y1};function tS(e){e.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,n)=>n.lineWidth,tickColor:(t,n)=>n.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Sl.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),e.route("scale.ticks","color","","color"),e.route("scale.grid","color","","borderColor"),e.route("scale.border","color","","borderColor"),e.route("scale.title","color","","color"),e.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),e.describe("scales",{_fallback:"scale"}),e.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const $r=Object.create(null),Yc=Object.create(null);function _o(e,t){if(!t)return e;const n=t.split(".");for(let r=0,i=n.length;r<i;++r){const o=n[r];e=e[o]||(e[o]=Object.create(null))}return e}function wu(e,t,n){return typeof t=="string"?Wo(_o(e,t),n):Wo(_o(e,""),t)}class nS{constructor(t,n){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=r=>r.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(r,i)=>_u(i.backgroundColor),this.hoverBorderColor=(r,i)=>_u(i.borderColor),this.hoverColor=(r,i)=>_u(i.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(n)}set(t,n){return wu(this,t,n)}get(t){return _o(this,t)}describe(t,n){return wu(Yc,t,n)}override(t,n){return wu($r,t,n)}route(t,n,r,i){const o=_o(this,t),a=_o(this,r),s="_"+n;Object.defineProperties(o,{[s]:{value:o[n],writable:!0},[n]:{enumerable:!0,get(){const l=this[s],u=a[i];return q(l)?Object.assign({},u,l):Y(l,u)},set(l){this[s]=l}}})}apply(t){t.forEach(n=>n(this))}}var we=new nS({_scriptable:e=>!e.startsWith("on"),_indexable:e=>e!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[Z2,q2,tS]);function rS(e){return!e||le(e.size)||le(e.family)?null:(e.style?e.style+" ":"")+(e.weight?e.weight+" ":"")+e.size+"px "+e.family}function Xs(e,t,n,r,i){let o=t[i];return o||(o=t[i]=e.measureText(i).width,n.push(i)),o>r&&(r=o),r}function iS(e,t,n,r){r=r||{};let i=r.data=r.data||{},o=r.garbageCollect=r.garbageCollect||[];r.font!==t&&(i=r.data={},o=r.garbageCollect=[],r.font=t),e.save(),e.font=t;let a=0;const s=n.length;let l,u,c,f,d;for(l=0;l<s;l++)if(f=n[l],f!=null&&!ge(f))a=Xs(e,i,o,a,f);else if(ge(f))for(u=0,c=f.length;u<c;u++)d=f[u],d!=null&&!ge(d)&&(a=Xs(e,i,o,a,d));e.restore();const h=o.length/2;if(h>n.length){for(l=0;l<h;l++)delete i[o[l]];o.splice(0,h)}return a}function Zn(e,t,n){const r=e.currentDevicePixelRatio,i=n!==0?Math.max(n/2,.5):0;return Math.round((t-i)*r)/r+i}function fg(e,t){t=t||e.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,e.width,e.height),t.restore()}function Xc(e,t,n,r){X1(e,t,n,r,null)}function X1(e,t,n,r,i){let o,a,s,l,u,c,f,d;const h=t.pointStyle,g=t.rotation,m=t.radius;let y=(g||0)*R2;if(h&&typeof h=="object"&&(o=h.toString(),o==="[object HTMLImageElement]"||o==="[object HTMLCanvasElement]")){e.save(),e.translate(n,r),e.rotate(y),e.drawImage(h,-h.width/2,-h.height/2,h.width,h.height),e.restore();return}if(!(isNaN(m)||m<=0)){switch(e.beginPath(),h){default:i?e.ellipse(n,r,i/2,m,0,0,Pt):e.arc(n,r,m,0,Pt),e.closePath();break;case"triangle":c=i?i/2:m,e.moveTo(n+Math.sin(y)*c,r-Math.cos(y)*m),y+=rg,e.lineTo(n+Math.sin(y)*c,r-Math.cos(y)*m),y+=rg,e.lineTo(n+Math.sin(y)*c,r-Math.cos(y)*m),e.closePath();break;case"rectRounded":u=m*.516,l=m-u,a=Math.cos(y+Qn)*l,f=Math.cos(y+Qn)*(i?i/2-u:l),s=Math.sin(y+Qn)*l,d=Math.sin(y+Qn)*(i?i/2-u:l),e.arc(n-f,r-s,u,y-ke,y-gt),e.arc(n+d,r-a,u,y-gt,y),e.arc(n+f,r+s,u,y,y+gt),e.arc(n-d,r+a,u,y+gt,y+ke),e.closePath();break;case"rect":if(!g){l=Math.SQRT1_2*m,c=i?i/2:l,e.rect(n-c,r-l,2*c,2*l);break}y+=Qn;case"rectRot":f=Math.cos(y)*(i?i/2:m),a=Math.cos(y)*m,s=Math.sin(y)*m,d=Math.sin(y)*(i?i/2:m),e.moveTo(n-f,r-s),e.lineTo(n+d,r-a),e.lineTo(n+f,r+s),e.lineTo(n-d,r+a),e.closePath();break;case"crossRot":y+=Qn;case"cross":f=Math.cos(y)*(i?i/2:m),a=Math.cos(y)*m,s=Math.sin(y)*m,d=Math.sin(y)*(i?i/2:m),e.moveTo(n-f,r-s),e.lineTo(n+f,r+s),e.moveTo(n+d,r-a),e.lineTo(n-d,r+a);break;case"star":f=Math.cos(y)*(i?i/2:m),a=Math.cos(y)*m,s=Math.sin(y)*m,d=Math.sin(y)*(i?i/2:m),e.moveTo(n-f,r-s),e.lineTo(n+f,r+s),e.moveTo(n+d,r-a),e.lineTo(n-d,r+a),y+=Qn,f=Math.cos(y)*(i?i/2:m),a=Math.cos(y)*m,s=Math.sin(y)*m,d=Math.sin(y)*(i?i/2:m),e.moveTo(n-f,r-s),e.lineTo(n+f,r+s),e.moveTo(n+d,r-a),e.lineTo(n-d,r+a);break;case"line":a=i?i/2:Math.cos(y)*m,s=Math.sin(y)*m,e.moveTo(n-a,r-s),e.lineTo(n+a,r+s);break;case"dash":e.moveTo(n,r),e.lineTo(n+Math.cos(y)*(i?i/2:m),r+Math.sin(y)*m);break;case!1:e.closePath();break}e.fill(),t.borderWidth>0&&e.stroke()}}function fn(e,t,n){return n=n||.5,!t||e&&e.x>t.left-n&&e.x<t.right+n&&e.y>t.top-n&&e.y<t.bottom+n}function Zd(e,t){e.save(),e.beginPath(),e.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),e.clip()}function qd(e){e.restore()}function oS(e,t,n,r,i){if(!t)return e.lineTo(n.x,n.y);if(i==="middle"){const o=(t.x+n.x)/2;e.lineTo(o,t.y),e.lineTo(o,n.y)}else i==="after"!=!!r?e.lineTo(t.x,n.y):e.lineTo(n.x,t.y);e.lineTo(n.x,n.y)}function aS(e,t,n,r){if(!t)return e.lineTo(n.x,n.y);e.bezierCurveTo(r?t.cp1x:t.cp2x,r?t.cp1y:t.cp2y,r?n.cp2x:n.cp1x,r?n.cp2y:n.cp1y,n.x,n.y)}function sS(e,t){t.translation&&e.translate(t.translation[0],t.translation[1]),le(t.rotation)||e.rotate(t.rotation),t.color&&(e.fillStyle=t.color),t.textAlign&&(e.textAlign=t.textAlign),t.textBaseline&&(e.textBaseline=t.textBaseline)}function lS(e,t,n,r,i){if(i.strikethrough||i.underline){const o=e.measureText(r),a=t-o.actualBoundingBoxLeft,s=t+o.actualBoundingBoxRight,l=n-o.actualBoundingBoxAscent,u=n+o.actualBoundingBoxDescent,c=i.strikethrough?(l+u)/2:u;e.strokeStyle=e.fillStyle,e.beginPath(),e.lineWidth=i.decorationWidth||2,e.moveTo(a,c),e.lineTo(s,c),e.stroke()}}function uS(e,t){const n=e.fillStyle;e.fillStyle=t.color,e.fillRect(t.left,t.top,t.width,t.height),e.fillStyle=n}function _r(e,t,n,r,i,o={}){const a=ge(t)?t:[t],s=o.strokeWidth>0&&o.strokeColor!=="";let l,u;for(e.save(),e.font=i.string,sS(e,o),l=0;l<a.length;++l)u=a[l],o.backdrop&&uS(e,o.backdrop),s&&(o.strokeColor&&(e.strokeStyle=o.strokeColor),le(o.strokeWidth)||(e.lineWidth=o.strokeWidth),e.strokeText(u,n,r,o.maxWidth)),e.fillText(u,n,r,o.maxWidth),lS(e,n,r,u,o),r+=Number(i.lineHeight);e.restore()}function Ks(e,t){const{x:n,y:r,w:i,h:o,radius:a}=t;e.arc(n+a.topLeft,r+a.topLeft,a.topLeft,1.5*ke,ke,!0),e.lineTo(n,r+o-a.bottomLeft),e.arc(n+a.bottomLeft,r+o-a.bottomLeft,a.bottomLeft,ke,gt,!0),e.lineTo(n+i-a.bottomRight,r+o),e.arc(n+i-a.bottomRight,r+o-a.bottomRight,a.bottomRight,gt,0,!0),e.lineTo(n+i,r+a.topRight),e.arc(n+i-a.topRight,r+a.topRight,a.topRight,0,-gt,!0),e.lineTo(n+a.topLeft,r)}const cS=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,fS=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function dS(e,t){const n=(""+e).match(cS);if(!n||n[1]==="normal")return t*1.2;switch(e=+n[2],n[3]){case"px":return e;case"%":e/=100;break}return t*e}const hS=e=>+e||0;function K1(e,t){const n={},r=q(t),i=r?Object.keys(t):t,o=q(e)?r?a=>Y(e[a],e[t[a]]):a=>e[a]:()=>e;for(const a of i)n[a]=hS(o(a));return n}function pS(e){return K1(e,{top:"y",right:"x",bottom:"y",left:"x"})}function ri(e){return K1(e,["topLeft","topRight","bottomLeft","bottomRight"])}function We(e){const t=pS(e);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function Me(e,t){e=e||{},t=t||we.font;let n=Y(e.size,t.size);typeof n=="string"&&(n=parseInt(n,10));let r=Y(e.style,t.style);r&&!(""+r).match(fS)&&(console.warn('Invalid font style specified: "'+r+'"'),r=void 0);const i={family:Y(e.family,t.family),lineHeight:dS(Y(e.lineHeight,t.lineHeight),n),size:n,style:r,weight:Y(e.weight,t.weight),string:""};return i.string=rS(i),i}function Ia(e,t,n,r){let i=!0,o,a,s;for(o=0,a=e.length;o<a;++o)if(s=e[o],s!==void 0&&(t!==void 0&&typeof s=="function"&&(s=s(t),i=!1),n!==void 0&&ge(s)&&(s=s[n%s.length],i=!1),s!==void 0))return r&&!i&&(r.cacheable=!1),s}function gS(e,t,n){const{min:r,max:i}=e,o=T2(t,(i-r)/2),a=(s,l)=>n&&s===0?0:s+l;return{min:a(r,-Math.abs(o)),max:a(i,o)}}function Kn(e,t){return Object.assign(Object.create(e),t)}function Jd(e,t=[""],n,r,i=()=>e[0]){const o=n||e;typeof r>"u"&&(r=J1("_fallback",e));const a={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:e,_rootScopes:o,_fallback:r,_getTarget:i,override:s=>Jd([s,...e],t,o,r)};return new Proxy(a,{deleteProperty(s,l){return delete s[l],delete s._keys,delete e[0][l],!0},get(s,l){return Z1(s,l,()=>xS(l,t,e,s))},getOwnPropertyDescriptor(s,l){return Reflect.getOwnPropertyDescriptor(s._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(e[0])},has(s,l){return hg(s).includes(l)},ownKeys(s){return hg(s)},set(s,l,u){const c=s._storage||(s._storage=i());return s[l]=c[l]=u,delete s._keys,!0}})}function gi(e,t,n,r){const i={_cacheable:!1,_proxy:e,_context:t,_subProxy:n,_stack:new Set,_descriptors:Q1(e,r),setContext:o=>gi(e,o,n,r),override:o=>gi(e.override(o),t,n,r)};return new Proxy(i,{deleteProperty(o,a){return delete o[a],delete e[a],!0},get(o,a,s){return Z1(o,a,()=>mS(o,a,s))},getOwnPropertyDescriptor(o,a){return o._descriptors.allKeys?Reflect.has(e,a)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(e,a)},getPrototypeOf(){return Reflect.getPrototypeOf(e)},has(o,a){return Reflect.has(e,a)},ownKeys(){return Reflect.ownKeys(e)},set(o,a,s){return e[a]=s,delete o[a],!0}})}function Q1(e,t={scriptable:!0,indexable:!0}){const{_scriptable:n=t.scriptable,_indexable:r=t.indexable,_allKeys:i=t.allKeys}=e;return{allKeys:i,scriptable:n,indexable:r,isScriptable:Hn(n)?n:()=>n,isIndexable:Hn(r)?r:()=>r}}const vS=(e,t)=>e?e+Hd(t):t,eh=(e,t)=>q(t)&&e!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function Z1(e,t,n){if(Object.prototype.hasOwnProperty.call(e,t))return e[t];const r=n();return e[t]=r,r}function mS(e,t,n){const{_proxy:r,_context:i,_subProxy:o,_descriptors:a}=e;let s=r[t];return Hn(s)&&a.isScriptable(t)&&(s=yS(t,s,e,n)),ge(s)&&s.length&&(s=bS(t,s,e,a.isIndexable)),eh(t,s)&&(s=gi(s,i,o&&o[t],a)),s}function yS(e,t,n,r){const{_proxy:i,_context:o,_subProxy:a,_stack:s}=n;if(s.has(e))throw new Error("Recursion detected: "+Array.from(s).join("->")+"->"+e);s.add(e);let l=t(o,a||r);return s.delete(e),eh(e,l)&&(l=th(i._scopes,i,e,l)),l}function bS(e,t,n,r){const{_proxy:i,_context:o,_subProxy:a,_descriptors:s}=n;if(typeof o.index<"u"&&r(e))return t[o.index%t.length];if(q(t[0])){const l=t,u=i._scopes.filter(c=>c!==l);t=[];for(const c of l){const f=th(u,i,e,c);t.push(gi(f,o,a&&a[e],s))}}return t}function q1(e,t,n){return Hn(e)?e(t,n):e}const $S=(e,t)=>e===!0?t:typeof e=="string"?Hs(t,e):void 0;function _S(e,t,n,r,i){for(const o of t){const a=$S(n,o);if(a){e.add(a);const s=q1(a._fallback,n,i);if(typeof s<"u"&&s!==n&&s!==r)return s}else if(a===!1&&typeof r<"u"&&n!==r)return null}return!1}function th(e,t,n,r){const i=t._rootScopes,o=q1(t._fallback,n,r),a=[...e,...i],s=new Set;s.add(r);let l=dg(s,a,n,o||n,r);return l===null||typeof o<"u"&&o!==n&&(l=dg(s,a,o,l,r),l===null)?!1:Jd(Array.from(s),[""],i,o,()=>wS(t,n,r))}function dg(e,t,n,r,i){for(;n;)n=_S(e,t,n,r,i);return n}function wS(e,t,n){const r=e._getTarget();t in r||(r[t]={});const i=r[t];return ge(i)&&q(n)?n:i||{}}function xS(e,t,n,r){let i;for(const o of t)if(i=J1(vS(o,e),n),typeof i<"u")return eh(e,i)?th(n,r,e,i):i}function J1(e,t){for(const n of t){if(!n)continue;const r=n[e];if(typeof r<"u")return r}}function hg(e){let t=e._keys;return t||(t=e._keys=SS(e._scopes)),t}function SS(e){const t=new Set;for(const n of e)for(const r of Object.keys(n).filter(i=>!i.startsWith("_")))t.add(r);return Array.from(t)}const kS=Number.EPSILON||1e-14,vi=(e,t)=>t<e.length&&!e[t].skip&&e[t],eb=e=>e==="x"?"y":"x";function ES(e,t,n,r){const i=e.skip?t:e,o=t,a=n.skip?t:n,s=Gc(o,i),l=Gc(a,o);let u=s/(s+l),c=l/(s+l);u=isNaN(u)?0:u,c=isNaN(c)?0:c;const f=r*u,d=r*c;return{previous:{x:o.x-f*(a.x-i.x),y:o.y-f*(a.y-i.y)},next:{x:o.x+d*(a.x-i.x),y:o.y+d*(a.y-i.y)}}}function AS(e,t,n){const r=e.length;let i,o,a,s,l,u=vi(e,0);for(let c=0;c<r-1;++c)if(l=u,u=vi(e,c+1),!(!l||!u)){if(bo(t[c],0,kS)){n[c]=n[c+1]=0;continue}i=n[c]/t[c],o=n[c+1]/t[c],s=Math.pow(i,2)+Math.pow(o,2),!(s<=9)&&(a=3/Math.sqrt(s),n[c]=i*a*t[c],n[c+1]=o*a*t[c])}}function TS(e,t,n="x"){const r=eb(n),i=e.length;let o,a,s,l=vi(e,0);for(let u=0;u<i;++u){if(a=s,s=l,l=vi(e,u+1),!s)continue;const c=s[n],f=s[r];a&&(o=(c-a[n])/3,s[`cp1${n}`]=c-o,s[`cp1${r}`]=f-o*t[u]),l&&(o=(l[n]-c)/3,s[`cp2${n}`]=c+o,s[`cp2${r}`]=f+o*t[u])}}function CS(e,t="x"){const n=eb(t),r=e.length,i=Array(r).fill(0),o=Array(r);let a,s,l,u=vi(e,0);for(a=0;a<r;++a)if(s=l,l=u,u=vi(e,a+1),!!l){if(u){const c=u[t]-l[t];i[a]=c!==0?(u[n]-l[n])/c:0}o[a]=s?u?pi(i[a-1])!==pi(i[a])?0:(i[a-1]+i[a])/2:i[a-1]:i[a]}AS(e,i,o),TS(e,o,t)}function La(e,t,n){return Math.max(Math.min(e,n),t)}function PS(e,t){let n,r,i,o,a,s=fn(e[0],t);for(n=0,r=e.length;n<r;++n)a=o,o=s,s=n<r-1&&fn(e[n+1],t),o&&(i=e[n],a&&(i.cp1x=La(i.cp1x,t.left,t.right),i.cp1y=La(i.cp1y,t.top,t.bottom)),s&&(i.cp2x=La(i.cp2x,t.left,t.right),i.cp2y=La(i.cp2y,t.top,t.bottom)))}function MS(e,t,n,r,i){let o,a,s,l;if(t.spanGaps&&(e=e.filter(u=>!u.skip)),t.cubicInterpolationMode==="monotone")CS(e,i);else{let u=r?e[e.length-1]:e[0];for(o=0,a=e.length;o<a;++o)s=e[o],l=ES(u,s,e[Math.min(o+1,a-(r?0:1))%a],t.tension),s.cp1x=l.previous.x,s.cp1y=l.previous.y,s.cp2x=l.next.x,s.cp2y=l.next.y,u=s}t.capBezierPoints&&PS(e,n)}function tb(){return typeof window<"u"&&typeof document<"u"}function nh(e){let t=e.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function Qs(e,t,n){let r;return typeof e=="string"?(r=parseInt(e,10),e.indexOf("%")!==-1&&(r=r/100*t.parentNode[n])):r=e,r}const kl=e=>e.ownerDocument.defaultView.getComputedStyle(e,null);function OS(e,t){return kl(e).getPropertyValue(t)}const IS=["top","right","bottom","left"];function pr(e,t,n){const r={};n=n?"-"+n:"";for(let i=0;i<4;i++){const o=IS[i];r[o]=parseFloat(e[t+"-"+o+n])||0}return r.width=r.left+r.right,r.height=r.top+r.bottom,r}const LS=(e,t,n)=>(e>0||t>0)&&(!n||!n.shadowRoot);function RS(e,t){const n=e.touches,r=n&&n.length?n[0]:e,{offsetX:i,offsetY:o}=r;let a=!1,s,l;if(LS(i,o,e.target))s=i,l=o;else{const u=t.getBoundingClientRect();s=r.clientX-u.left,l=r.clientY-u.top,a=!0}return{x:s,y:l,box:a}}function rr(e,t){if("native"in e)return e;const{canvas:n,currentDevicePixelRatio:r}=t,i=kl(n),o=i.boxSizing==="border-box",a=pr(i,"padding"),s=pr(i,"border","width"),{x:l,y:u,box:c}=RS(e,n),f=a.left+(c&&s.left),d=a.top+(c&&s.top);let{width:h,height:g}=t;return o&&(h-=a.width+s.width,g-=a.height+s.height),{x:Math.round((l-f)/h*n.width/r),y:Math.round((u-d)/g*n.height/r)}}function NS(e,t,n){let r,i;if(t===void 0||n===void 0){const o=nh(e);if(!o)t=e.clientWidth,n=e.clientHeight;else{const a=o.getBoundingClientRect(),s=kl(o),l=pr(s,"border","width"),u=pr(s,"padding");t=a.width-u.width-l.width,n=a.height-u.height-l.height,r=Qs(s.maxWidth,o,"clientWidth"),i=Qs(s.maxHeight,o,"clientHeight")}}return{width:t,height:n,maxWidth:r||Ys,maxHeight:i||Ys}}const Ra=e=>Math.round(e*10)/10;function FS(e,t,n,r){const i=kl(e),o=pr(i,"margin"),a=Qs(i.maxWidth,e,"clientWidth")||Ys,s=Qs(i.maxHeight,e,"clientHeight")||Ys,l=NS(e,t,n);let{width:u,height:c}=l;if(i.boxSizing==="content-box"){const d=pr(i,"border","width"),h=pr(i,"padding");u-=h.width+d.width,c-=h.height+d.height}return u=Math.max(0,u-o.width),c=Math.max(0,r?u/r:c-o.height),u=Ra(Math.min(u,a,l.maxWidth)),c=Ra(Math.min(c,s,l.maxHeight)),u&&!c&&(c=Ra(u/2)),(t!==void 0||n!==void 0)&&r&&l.height&&c>l.height&&(c=l.height,u=Ra(Math.floor(c*r))),{width:u,height:c}}function pg(e,t,n){const r=t||1,i=Math.floor(e.height*r),o=Math.floor(e.width*r);e.height=Math.floor(e.height),e.width=Math.floor(e.width);const a=e.canvas;return a.style&&(n||!a.style.height&&!a.style.width)&&(a.style.height=`${e.height}px`,a.style.width=`${e.width}px`),e.currentDevicePixelRatio!==r||a.height!==i||a.width!==o?(e.currentDevicePixelRatio=r,a.height=i,a.width=o,e.ctx.setTransform(r,0,0,r,0,0),!0):!1}const DS=function(){let e=!1;try{const t={get passive(){return e=!0,!1}};window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch{}return e}();function gg(e,t){const n=OS(e,t),r=n&&n.match(/^(\d+)(\.\d+)?px$/);return r?+r[1]:void 0}function ir(e,t,n,r){return{x:e.x+n*(t.x-e.x),y:e.y+n*(t.y-e.y)}}function jS(e,t,n,r){return{x:e.x+n*(t.x-e.x),y:r==="middle"?n<.5?e.y:t.y:r==="after"?n<1?e.y:t.y:n>0?t.y:e.y}}function zS(e,t,n,r){const i={x:e.cp2x,y:e.cp2y},o={x:t.cp1x,y:t.cp1y},a=ir(e,i,n),s=ir(i,o,n),l=ir(o,t,n),u=ir(a,s,n),c=ir(s,l,n);return ir(u,c,n)}const BS=function(e,t){return{x(n){return e+e+t-n},setWidth(n){t=n},textAlign(n){return n==="center"?n:n==="right"?"left":"right"},xPlus(n,r){return n-r},leftForLtr(n,r){return n-r}}},US=function(){return{x(e){return e},setWidth(e){},textAlign(e){return e},xPlus(e,t){return e+t},leftForLtr(e,t){return e}}};function ii(e,t,n){return e?BS(t,n):US()}function nb(e,t){let n,r;(t==="ltr"||t==="rtl")&&(n=e.canvas.style,r=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",t,"important"),e.prevTextDirection=r)}function rb(e,t){t!==void 0&&(delete e.prevTextDirection,e.canvas.style.setProperty("direction",t[0],t[1]))}function ib(e){return e==="angle"?{between:V1,compare:j2,normalize:Dt}:{between:io,compare:(t,n)=>t-n,normalize:t=>t}}function vg({start:e,end:t,count:n,loop:r,style:i}){return{start:e%n,end:t%n,loop:r&&(t-e+1)%n===0,style:i}}function VS(e,t,n){const{property:r,start:i,end:o}=n,{between:a,normalize:s}=ib(r),l=t.length;let{start:u,end:c,loop:f}=e,d,h;if(f){for(u+=l,c+=l,d=0,h=l;d<h&&a(s(t[u%l][r]),i,o);++d)u--,c--;u%=l,c%=l}return c<u&&(c+=l),{start:u,end:c,loop:f,style:e.style}}function WS(e,t,n){if(!n)return[e];const{property:r,start:i,end:o}=n,a=t.length,{compare:s,between:l,normalize:u}=ib(r),{start:c,end:f,loop:d,style:h}=VS(e,t,n),g=[];let m=!1,y=null,p,v,b;const $=()=>l(i,b,p)&&s(i,b)!==0,_=()=>s(o,p)===0||l(o,b,p),k=()=>m||$(),w=()=>!m||_();for(let E=c,C=c;E<=f;++E)v=t[E%a],!v.skip&&(p=u(v[r]),p!==b&&(m=l(p,i,o),y===null&&k()&&(y=s(p,i)===0?E:C),y!==null&&w()&&(g.push(vg({start:y,end:E,loop:d,count:a,style:h})),y=null),C=E,b=p));return y!==null&&g.push(vg({start:y,end:f,loop:d,count:a,style:h})),g}function HS(e,t){const n=[],r=e.segments;for(let i=0;i<r.length;i++){const o=WS(r[i],e.points,t);o.length&&n.push(...o)}return n}function GS(e,t,n,r){let i=0,o=t-1;if(n&&!r)for(;i<t&&!e[i].skip;)i++;for(;i<t&&e[i].skip;)i++;for(i%=t,n&&(o+=i);o>i&&e[o%t].skip;)o--;return o%=t,{start:i,end:o}}function YS(e,t,n,r){const i=e.length,o=[];let a=t,s=e[t],l;for(l=t+1;l<=n;++l){const u=e[l%i];u.skip||u.stop?s.skip||(r=!1,o.push({start:t%i,end:(l-1)%i,loop:r}),t=a=u.stop?l:null):(a=l,s.skip&&(t=l)),s=u}return a!==null&&o.push({start:t%i,end:a%i,loop:r}),o}function XS(e,t){const n=e.points,r=e.options.spanGaps,i=n.length;if(!i)return[];const o=!!e._loop,{start:a,end:s}=GS(n,i,o,r);if(r===!0)return mg(e,[{start:a,end:s,loop:o}],n,t);const l=s<a?s+i:s,u=!!e._fullLoop&&a===0&&s===i-1;return mg(e,YS(n,a,l,u),n,t)}function mg(e,t,n,r){return!r||!r.setContext||!n?t:KS(e,t,n,r)}function KS(e,t,n,r){const i=e._chart.getContext(),o=yg(e.options),{_datasetIndex:a,options:{spanGaps:s}}=e,l=n.length,u=[];let c=o,f=t[0].start,d=f;function h(g,m,y,p){const v=s?-1:1;if(g!==m){for(g+=l;n[g%l].skip;)g-=v;for(;n[m%l].skip;)m+=v;g%l!==m%l&&(u.push({start:g%l,end:m%l,loop:y,style:p}),c=p,f=m%l)}}for(const g of t){f=s?f:g.start;let m=n[f%l],y;for(d=f+1;d<=g.end;d++){const p=n[d%l];y=yg(r.setContext(Kn(i,{type:"segment",p0:m,p1:p,p0DataIndex:(d-1)%l,p1DataIndex:d%l,datasetIndex:a}))),QS(y,c)&&h(f,d-1,g.loop,c),m=p,c=y}f<d-1&&h(f,d-1,g.loop,c)}return u}function yg(e){return{backgroundColor:e.backgroundColor,borderCapStyle:e.borderCapStyle,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderJoinStyle:e.borderJoinStyle,borderWidth:e.borderWidth,borderColor:e.borderColor}}function QS(e,t){if(!t)return!1;const n=[],r=function(i,o){return Kd(o)?(n.includes(o)||n.push(o),n.indexOf(o)):o};return JSON.stringify(e,r)!==JSON.stringify(t,r)}/*!
 * Chart.js v4.4.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */class ZS{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,n,r,i){const o=n.listeners[i],a=n.duration;o.forEach(s=>s({chart:t,initial:n.initial,numSteps:a,currentStep:Math.min(r-n.start,a)}))}_refresh(){this._request||(this._running=!0,this._request=H1.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let n=0;this._charts.forEach((r,i)=>{if(!r.running||!r.items.length)return;const o=r.items;let a=o.length-1,s=!1,l;for(;a>=0;--a)l=o[a],l._active?(l._total>r.duration&&(r.duration=l._total),l.tick(t),s=!0):(o[a]=o[o.length-1],o.pop());s&&(i.draw(),this._notify(i,r,t,"progress")),o.length||(r.running=!1,this._notify(i,r,t,"complete"),r.initial=!1),n+=o.length}),this._lastDate=t,n===0&&(this._running=!1)}_getAnims(t){const n=this._charts;let r=n.get(t);return r||(r={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},n.set(t,r)),r}listen(t,n,r){this._getAnims(t).listeners[n].push(r)}add(t,n){!n||!n.length||this._getAnims(t).items.push(...n)}has(t){return this._getAnims(t).items.length>0}start(t){const n=this._charts.get(t);n&&(n.running=!0,n.start=Date.now(),n.duration=n.items.reduce((r,i)=>Math.max(r,i._duration),0),this._refresh())}running(t){if(!this._running)return!1;const n=this._charts.get(t);return!(!n||!n.running||!n.items.length)}stop(t){const n=this._charts.get(t);if(!n||!n.items.length)return;const r=n.items;let i=r.length-1;for(;i>=0;--i)r[i].cancel();n.items=[],this._notify(t,n,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var rn=new ZS;const bg="transparent",qS={boolean(e,t,n){return n>.5?t:e},color(e,t,n){const r=ug(e||bg),i=r.valid&&ug(t||bg);return i&&i.valid?i.mix(r,n).hexString():t},number(e,t,n){return e+(t-e)*n}};class JS{constructor(t,n,r,i){const o=n[r];i=Ia([t.to,i,o,t.from]);const a=Ia([t.from,o,i]);this._active=!0,this._fn=t.fn||qS[t.type||typeof a],this._easing=$o[t.easing]||$o.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=n,this._prop=r,this._from=a,this._to=i,this._promises=void 0}active(){return this._active}update(t,n,r){if(this._active){this._notify(!1);const i=this._target[this._prop],o=r-this._start,a=this._duration-o;this._start=r,this._duration=Math.floor(Math.max(a,t.duration)),this._total+=o,this._loop=!!t.loop,this._to=Ia([t.to,n,i,t.from]),this._from=Ia([t.from,i,n])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const n=t-this._start,r=this._duration,i=this._prop,o=this._from,a=this._loop,s=this._to;let l;if(this._active=o!==s&&(a||n<r),!this._active){this._target[i]=s,this._notify(!0);return}if(n<0){this._target[i]=o;return}l=n/r%2,l=a&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[i]=this._fn(o,s,l)}wait(){const t=this._promises||(this._promises=[]);return new Promise((n,r)=>{t.push({res:n,rej:r})})}_notify(t){const n=t?"res":"rej",r=this._promises||[];for(let i=0;i<r.length;i++)r[i][n]()}}class ob{constructor(t,n){this._chart=t,this._properties=new Map,this.configure(n)}configure(t){if(!q(t))return;const n=Object.keys(we.animation),r=this._properties;Object.getOwnPropertyNames(t).forEach(i=>{const o=t[i];if(!q(o))return;const a={};for(const s of n)a[s]=o[s];(ge(o.properties)&&o.properties||[i]).forEach(s=>{(s===i||!r.has(s))&&r.set(s,a)})})}_animateOptions(t,n){const r=n.options,i=tk(t,r);if(!i)return[];const o=this._createAnimations(i,r);return r.$shared&&ek(t.options.$animations,r).then(()=>{t.options=r},()=>{}),o}_createAnimations(t,n){const r=this._properties,i=[],o=t.$animations||(t.$animations={}),a=Object.keys(n),s=Date.now();let l;for(l=a.length-1;l>=0;--l){const u=a[l];if(u.charAt(0)==="$")continue;if(u==="options"){i.push(...this._animateOptions(t,n));continue}const c=n[u];let f=o[u];const d=r.get(u);if(f)if(d&&f.active()){f.update(d,c,s);continue}else f.cancel();if(!d||!d.duration){t[u]=c;continue}o[u]=f=new JS(d,t,u,c),i.push(f)}return i}update(t,n){if(this._properties.size===0){Object.assign(t,n);return}const r=this._createAnimations(t,n);if(r.length)return rn.add(this._chart,r),!0}}function ek(e,t){const n=[],r=Object.keys(t);for(let i=0;i<r.length;i++){const o=e[r[i]];o&&o.active()&&n.push(o.wait())}return Promise.all(n)}function tk(e,t){if(!t)return;let n=e.options;if(!n){e.options=t;return}return n.$shared&&(e.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function $g(e,t){const n=e&&e.options||{},r=n.reverse,i=n.min===void 0?t:0,o=n.max===void 0?t:0;return{start:r?o:i,end:r?i:o}}function nk(e,t,n){if(n===!1)return!1;const r=$g(e,n),i=$g(t,n);return{top:i.end,right:r.end,bottom:i.start,left:r.start}}function rk(e){let t,n,r,i;return q(e)?(t=e.top,n=e.right,r=e.bottom,i=e.left):t=n=r=i=e,{top:t,right:n,bottom:r,left:i,disabled:e===!1}}function ab(e,t){const n=[],r=e._getSortedDatasetMetas(t);let i,o;for(i=0,o=r.length;i<o;++i)n.push(r[i].index);return n}function _g(e,t,n,r={}){const i=e.keys,o=r.mode==="single";let a,s,l,u;if(t!==null){for(a=0,s=i.length;a<s;++a){if(l=+i[a],l===n){if(r.all)continue;break}u=e.values[l],Ie(u)&&(o||t===0||pi(t)===pi(u))&&(t+=u)}return t}}function ik(e){const t=Object.keys(e),n=new Array(t.length);let r,i,o;for(r=0,i=t.length;r<i;++r)o=t[r],n[r]={x:o,y:e[o]};return n}function wg(e,t){const n=e&&e.options.stacked;return n||n===void 0&&t.stack!==void 0}function ok(e,t,n){return`${e.id}.${t.id}.${n.stack||n.type}`}function ak(e){const{min:t,max:n,minDefined:r,maxDefined:i}=e.getUserBounds();return{min:r?t:Number.NEGATIVE_INFINITY,max:i?n:Number.POSITIVE_INFINITY}}function sk(e,t,n){const r=e[t]||(e[t]={});return r[n]||(r[n]={})}function xg(e,t,n,r){for(const i of t.getMatchingVisibleMetas(r).reverse()){const o=e[i.index];if(n&&o>0||!n&&o<0)return i.index}return null}function Sg(e,t){const{chart:n,_cachedMeta:r}=e,i=n._stacks||(n._stacks={}),{iScale:o,vScale:a,index:s}=r,l=o.axis,u=a.axis,c=ok(o,a,r),f=t.length;let d;for(let h=0;h<f;++h){const g=t[h],{[l]:m,[u]:y}=g,p=g._stacks||(g._stacks={});d=p[u]=sk(i,c,m),d[s]=y,d._top=xg(d,a,!0,r.type),d._bottom=xg(d,a,!1,r.type);const v=d._visualValues||(d._visualValues={});v[s]=y}}function xu(e,t){const n=e.scales;return Object.keys(n).filter(r=>n[r].axis===t).shift()}function lk(e,t){return Kn(e,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function uk(e,t,n){return Kn(e,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:n,index:t,mode:"default",type:"data"})}function zi(e,t){const n=e.controller.index,r=e.vScale&&e.vScale.axis;if(r){t=t||e._parsed;for(const i of t){const o=i._stacks;if(!o||o[r]===void 0||o[r][n]===void 0)return;delete o[r][n],o[r]._visualValues!==void 0&&o[r]._visualValues[n]!==void 0&&delete o[r]._visualValues[n]}}}const Su=e=>e==="reset"||e==="none",kg=(e,t)=>t?e:Object.assign({},e),ck=(e,t,n)=>e&&!t.hidden&&t._stacked&&{keys:ab(n,!0),values:null};class wo{constructor(t,n){this.chart=t,this._ctx=t.ctx,this.index=n,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=wg(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&zi(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,n=this._cachedMeta,r=this.getDataset(),i=(f,d,h,g)=>f==="x"?d:f==="r"?g:h,o=n.xAxisID=Y(r.xAxisID,xu(t,"x")),a=n.yAxisID=Y(r.yAxisID,xu(t,"y")),s=n.rAxisID=Y(r.rAxisID,xu(t,"r")),l=n.indexAxis,u=n.iAxisID=i(l,o,a,s),c=n.vAxisID=i(l,a,o,s);n.xScale=this.getScaleForId(o),n.yScale=this.getScaleForId(a),n.rScale=this.getScaleForId(s),n.iScale=this.getScaleForId(u),n.vScale=this.getScaleForId(c)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const n=this._cachedMeta;return t===n.iScale?n.vScale:n.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&ag(this._data,this),t._stacked&&zi(t)}_dataCheck(){const t=this.getDataset(),n=t.data||(t.data=[]),r=this._data;if(q(n))this._data=ik(n);else if(r!==n){if(r){ag(r,this);const i=this._cachedMeta;zi(i),i._parsed=[]}n&&Object.isExtensible(n)&&V2(n,this),this._syncList=[],this._data=n}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const n=this._cachedMeta,r=this.getDataset();let i=!1;this._dataCheck();const o=n._stacked;n._stacked=wg(n.vScale,n),n.stack!==r.stack&&(i=!0,zi(n),n.stack=r.stack),this._resyncElements(t),(i||o!==n._stacked)&&Sg(this,n._parsed)}configure(){const t=this.chart.config,n=t.datasetScopeKeys(this._type),r=t.getOptionScopes(this.getDataset(),n,!0);this.options=t.createResolver(r,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,n){const{_cachedMeta:r,_data:i}=this,{iScale:o,_stacked:a}=r,s=o.axis;let l=t===0&&n===i.length?!0:r._sorted,u=t>0&&r._parsed[t-1],c,f,d;if(this._parsing===!1)r._parsed=i,r._sorted=!0,d=i;else{ge(i[t])?d=this.parseArrayData(r,i,t,n):q(i[t])?d=this.parseObjectData(r,i,t,n):d=this.parsePrimitiveData(r,i,t,n);const h=()=>f[s]===null||u&&f[s]<u[s];for(c=0;c<n;++c)r._parsed[c+t]=f=d[c],l&&(h()&&(l=!1),u=f);r._sorted=l}a&&Sg(this,d)}parsePrimitiveData(t,n,r,i){const{iScale:o,vScale:a}=t,s=o.axis,l=a.axis,u=o.getLabels(),c=o===a,f=new Array(i);let d,h,g;for(d=0,h=i;d<h;++d)g=d+r,f[d]={[s]:c||o.parse(u[g],g),[l]:a.parse(n[g],g)};return f}parseArrayData(t,n,r,i){const{xScale:o,yScale:a}=t,s=new Array(i);let l,u,c,f;for(l=0,u=i;l<u;++l)c=l+r,f=n[c],s[l]={x:o.parse(f[0],c),y:a.parse(f[1],c)};return s}parseObjectData(t,n,r,i){const{xScale:o,yScale:a}=t,{xAxisKey:s="x",yAxisKey:l="y"}=this._parsing,u=new Array(i);let c,f,d,h;for(c=0,f=i;c<f;++c)d=c+r,h=n[d],u[c]={x:o.parse(Hs(h,s),d),y:a.parse(Hs(h,l),d)};return u}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,n,r){const i=this.chart,o=this._cachedMeta,a=n[t.axis],s={keys:ab(i,!0),values:n._stacks[t.axis]._visualValues};return _g(s,a,o.index,{mode:r})}updateRangeFromParsed(t,n,r,i){const o=r[n.axis];let a=o===null?NaN:o;const s=i&&r._stacks[n.axis];i&&s&&(i.values=s,a=_g(i,o,this._cachedMeta.index)),t.min=Math.min(t.min,a),t.max=Math.max(t.max,a)}getMinMax(t,n){const r=this._cachedMeta,i=r._parsed,o=r._sorted&&t===r.iScale,a=i.length,s=this._getOtherScale(t),l=ck(n,r,this.chart),u={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:c,max:f}=ak(s);let d,h;function g(){h=i[d];const m=h[s.axis];return!Ie(h[t.axis])||c>m||f<m}for(d=0;d<a&&!(!g()&&(this.updateRangeFromParsed(u,t,h,l),o));++d);if(o){for(d=a-1;d>=0;--d)if(!g()){this.updateRangeFromParsed(u,t,h,l);break}}return u}getAllParsedValues(t){const n=this._cachedMeta._parsed,r=[];let i,o,a;for(i=0,o=n.length;i<o;++i)a=n[i][t.axis],Ie(a)&&r.push(a);return r}getMaxOverflow(){return!1}getLabelAndValue(t){const n=this._cachedMeta,r=n.iScale,i=n.vScale,o=this.getParsed(t);return{label:r?""+r.getLabelForValue(o[r.axis]):"",value:i?""+i.getLabelForValue(o[i.axis]):""}}_update(t){const n=this._cachedMeta;this.update(t||"default"),n._clip=rk(Y(this.options.clip,nk(n.xScale,n.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,n=this.chart,r=this._cachedMeta,i=r.data||[],o=n.chartArea,a=[],s=this._drawStart||0,l=this._drawCount||i.length-s,u=this.options.drawActiveElementsOnTop;let c;for(r.dataset&&r.dataset.draw(t,o,s,l),c=s;c<s+l;++c){const f=i[c];f.hidden||(f.active&&u?a.push(f):f.draw(t,o))}for(c=0;c<a.length;++c)a[c].draw(t,o)}getStyle(t,n){const r=n?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(r):this.resolveDataElementOptions(t||0,r)}getContext(t,n,r){const i=this.getDataset();let o;if(t>=0&&t<this._cachedMeta.data.length){const a=this._cachedMeta.data[t];o=a.$context||(a.$context=uk(this.getContext(),t,a)),o.parsed=this.getParsed(t),o.raw=i.data[t],o.index=o.dataIndex=t}else o=this.$context||(this.$context=lk(this.chart.getContext(),this.index)),o.dataset=i,o.index=o.datasetIndex=this.index;return o.active=!!n,o.mode=r,o}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,n){return this._resolveElementOptions(this.dataElementType.id,n,t)}_resolveElementOptions(t,n="default",r){const i=n==="active",o=this._cachedDataOpts,a=t+"-"+n,s=o[a],l=this.enableOptionSharing&&Gs(r);if(s)return kg(s,l);const u=this.chart.config,c=u.datasetElementScopeKeys(this._type,t),f=i?[`${t}Hover`,"hover",t,""]:[t,""],d=u.getOptionScopes(this.getDataset(),c),h=Object.keys(we.elements[t]),g=()=>this.getContext(r,i,n),m=u.resolveNamedOptions(d,h,g,f);return m.$shared&&(m.$shared=l,o[a]=Object.freeze(kg(m,l))),m}_resolveAnimations(t,n,r){const i=this.chart,o=this._cachedDataOpts,a=`animation-${n}`,s=o[a];if(s)return s;let l;if(i.options.animation!==!1){const c=this.chart.config,f=c.datasetAnimationScopeKeys(this._type,n),d=c.getOptionScopes(this.getDataset(),f);l=c.createResolver(d,this.getContext(t,r,n))}const u=new ob(i,l&&l.animations);return l&&l._cacheable&&(o[a]=Object.freeze(u)),u}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,n){return!n||Su(t)||this.chart._animationsDisabled}_getSharedOptions(t,n){const r=this.resolveDataElementOptions(t,n),i=this._sharedOptions,o=this.getSharedOptions(r),a=this.includeOptions(n,o)||o!==i;return this.updateSharedOptions(o,n,r),{sharedOptions:o,includeOptions:a}}updateElement(t,n,r,i){Su(i)?Object.assign(t,r):this._resolveAnimations(n,i).update(t,r)}updateSharedOptions(t,n,r){t&&!Su(n)&&this._resolveAnimations(void 0,n).update(t,r)}_setStyle(t,n,r,i){t.active=i;const o=this.getStyle(n,i);this._resolveAnimations(n,r,i).update(t,{options:!i&&this.getSharedOptions(o)||o})}removeHoverStyle(t,n,r){this._setStyle(t,r,"active",!1)}setHoverStyle(t,n,r){this._setStyle(t,r,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const n=this._data,r=this._cachedMeta.data;for(const[s,l,u]of this._syncList)this[s](l,u);this._syncList=[];const i=r.length,o=n.length,a=Math.min(o,i);a&&this.parse(0,a),o>i?this._insertElements(i,o-i,t):o<i&&this._removeElements(o,i-o)}_insertElements(t,n,r=!0){const i=this._cachedMeta,o=i.data,a=t+n;let s;const l=u=>{for(u.length+=n,s=u.length-1;s>=a;s--)u[s]=u[s-n]};for(l(o),s=t;s<a;++s)o[s]=new this.dataElementType;this._parsing&&l(i._parsed),this.parse(t,n),r&&this.updateElements(o,t,n,"reset")}updateElements(t,n,r,i){}_removeElements(t,n){const r=this._cachedMeta;if(this._parsing){const i=r._parsed.splice(t,n);r._stacked&&zi(r,i)}r.data.splice(t,n)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[n,r,i]=t;this[n](r,i)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,n){n&&this._sync(["_removeElements",t,n]);const r=arguments.length-2;r&&this._sync(["_insertElements",t,r])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}U(wo,"defaults",{}),U(wo,"datasetElementType",null),U(wo,"dataElementType",null);class hs extends wo{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const n=this._cachedMeta,{dataset:r,data:i=[],_dataset:o}=n,a=this.chart._animationsDisabled;let{start:s,count:l}=Y2(n,i,a);this._drawStart=s,this._drawCount=l,X2(n)&&(s=0,l=i.length),r._chart=this.chart,r._datasetIndex=this.index,r._decimated=!!o._decimated,r.points=i;const u=this.resolveDatasetElementOptions(t);this.options.showLine||(u.borderWidth=0),u.segment=this.options.segment,this.updateElement(r,void 0,{animated:!a,options:u},t),this.updateElements(i,s,l,t)}updateElements(t,n,r,i){const o=i==="reset",{iScale:a,vScale:s,_stacked:l,_dataset:u}=this._cachedMeta,{sharedOptions:c,includeOptions:f}=this._getSharedOptions(n,i),d=a.axis,h=s.axis,{spanGaps:g,segment:m}=this.options,y=Ho(g)?g:Number.POSITIVE_INFINITY,p=this.chart._animationsDisabled||o||i==="none",v=n+r,b=t.length;let $=n>0&&this.getParsed(n-1);for(let _=0;_<b;++_){const k=t[_],w=p?k:{};if(_<n||_>=v){w.skip=!0;continue}const E=this.getParsed(_),C=le(E[h]),P=w[d]=a.getPixelForValue(E[d],_),x=w[h]=o||C?s.getBasePixel():s.getPixelForValue(l?this.applyStack(s,E,l):E[h],_);w.skip=isNaN(P)||isNaN(x)||C,w.stop=_>0&&Math.abs(E[d]-$[d])>y,m&&(w.parsed=E,w.raw=u.data[_]),f&&(w.options=c||this.resolveDataElementOptions(_,k.active?"active":i)),p||this.updateElement(k,_,w,i),$=E}}getMaxOverflow(){const t=this._cachedMeta,n=t.dataset,r=n.options&&n.options.borderWidth||0,i=t.data||[];if(!i.length)return r;const o=i[0].size(this.resolveDataElementOptions(0)),a=i[i.length-1].size(this.resolveDataElementOptions(i.length-1));return Math.max(r,o,a)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}U(hs,"id","line"),U(hs,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),U(hs,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});function qn(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class rh{constructor(t){U(this,"options");this.options=t||{}}static override(t){Object.assign(rh.prototype,t)}init(){}formats(){return qn()}parse(){return qn()}format(){return qn()}add(){return qn()}diff(){return qn()}startOf(){return qn()}endOf(){return qn()}}var fk={_date:rh};function dk(e,t,n,r){const{controller:i,data:o,_sorted:a}=e,s=i._cachedMeta.iScale;if(s&&t===s.axis&&t!=="r"&&a&&o.length){const l=s._reversePixels?B2:lr;if(r){if(i._sharedOptions){const u=o[0],c=typeof u.getRange=="function"&&u.getRange(t);if(c){const f=l(o,t,n-c),d=l(o,t,n+c);return{lo:f.lo,hi:d.hi}}}}else return l(o,t,n)}return{lo:0,hi:o.length-1}}function ea(e,t,n,r,i){const o=e.getSortedVisibleDatasetMetas(),a=n[t];for(let s=0,l=o.length;s<l;++s){const{index:u,data:c}=o[s],{lo:f,hi:d}=dk(o[s],t,a,i);for(let h=f;h<=d;++h){const g=c[h];g.skip||r(g,u,h)}}}function hk(e){const t=e.indexOf("x")!==-1,n=e.indexOf("y")!==-1;return function(r,i){const o=t?Math.abs(r.x-i.x):0,a=n?Math.abs(r.y-i.y):0;return Math.sqrt(Math.pow(o,2)+Math.pow(a,2))}}function ku(e,t,n,r,i){const o=[];return!i&&!e.isPointInArea(t)||ea(e,n,t,function(s,l,u){!i&&!fn(s,e.chartArea,0)||s.inRange(t.x,t.y,r)&&o.push({element:s,datasetIndex:l,index:u})},!0),o}function pk(e,t,n,r){let i=[];function o(a,s,l){const{startAngle:u,endAngle:c}=a.getProps(["startAngle","endAngle"],r),{angle:f}=D2(a,{x:t.x,y:t.y});V1(f,u,c)&&i.push({element:a,datasetIndex:s,index:l})}return ea(e,n,t,o),i}function gk(e,t,n,r,i,o){let a=[];const s=hk(n);let l=Number.POSITIVE_INFINITY;function u(c,f,d){const h=c.inRange(t.x,t.y,i);if(r&&!h)return;const g=c.getCenterPoint(i);if(!(!!o||e.isPointInArea(g))&&!h)return;const y=s(t,g);y<l?(a=[{element:c,datasetIndex:f,index:d}],l=y):y===l&&a.push({element:c,datasetIndex:f,index:d})}return ea(e,n,t,u),a}function Eu(e,t,n,r,i,o){return!o&&!e.isPointInArea(t)?[]:n==="r"&&!r?pk(e,t,n,i):gk(e,t,n,r,i,o)}function Eg(e,t,n,r,i){const o=[],a=n==="x"?"inXRange":"inYRange";let s=!1;return ea(e,n,t,(l,u,c)=>{l[a](t[n],i)&&(o.push({element:l,datasetIndex:u,index:c}),s=s||l.inRange(t.x,t.y,i))}),r&&!s?[]:o}var vk={evaluateInteractionItems:ea,modes:{index(e,t,n,r){const i=rr(t,e),o=n.axis||"x",a=n.includeInvisible||!1,s=n.intersect?ku(e,i,o,r,a):Eu(e,i,o,!1,r,a),l=[];return s.length?(e.getSortedVisibleDatasetMetas().forEach(u=>{const c=s[0].index,f=u.data[c];f&&!f.skip&&l.push({element:f,datasetIndex:u.index,index:c})}),l):[]},dataset(e,t,n,r){const i=rr(t,e),o=n.axis||"xy",a=n.includeInvisible||!1;let s=n.intersect?ku(e,i,o,r,a):Eu(e,i,o,!1,r,a);if(s.length>0){const l=s[0].datasetIndex,u=e.getDatasetMeta(l).data;s=[];for(let c=0;c<u.length;++c)s.push({element:u[c],datasetIndex:l,index:c})}return s},point(e,t,n,r){const i=rr(t,e),o=n.axis||"xy",a=n.includeInvisible||!1;return ku(e,i,o,r,a)},nearest(e,t,n,r){const i=rr(t,e),o=n.axis||"xy",a=n.includeInvisible||!1;return Eu(e,i,o,n.intersect,r,a)},x(e,t,n,r){const i=rr(t,e);return Eg(e,i,"x",n.intersect,r)},y(e,t,n,r){const i=rr(t,e);return Eg(e,i,"y",n.intersect,r)}}};const sb=["left","top","right","bottom"];function Bi(e,t){return e.filter(n=>n.pos===t)}function Ag(e,t){return e.filter(n=>sb.indexOf(n.pos)===-1&&n.box.axis===t)}function Ui(e,t){return e.sort((n,r)=>{const i=t?r:n,o=t?n:r;return i.weight===o.weight?i.index-o.index:i.weight-o.weight})}function mk(e){const t=[];let n,r,i,o,a,s;for(n=0,r=(e||[]).length;n<r;++n)i=e[n],{position:o,options:{stack:a,stackWeight:s=1}}=i,t.push({index:n,box:i,pos:o,horizontal:i.isHorizontal(),weight:i.weight,stack:a&&o+a,stackWeight:s});return t}function yk(e){const t={};for(const n of e){const{stack:r,pos:i,stackWeight:o}=n;if(!r||!sb.includes(i))continue;const a=t[r]||(t[r]={count:0,placed:0,weight:0,size:0});a.count++,a.weight+=o}return t}function bk(e,t){const n=yk(e),{vBoxMaxWidth:r,hBoxMaxHeight:i}=t;let o,a,s;for(o=0,a=e.length;o<a;++o){s=e[o];const{fullSize:l}=s.box,u=n[s.stack],c=u&&s.stackWeight/u.weight;s.horizontal?(s.width=c?c*r:l&&t.availableWidth,s.height=i):(s.width=r,s.height=c?c*i:l&&t.availableHeight)}return n}function $k(e){const t=mk(e),n=Ui(t.filter(u=>u.box.fullSize),!0),r=Ui(Bi(t,"left"),!0),i=Ui(Bi(t,"right")),o=Ui(Bi(t,"top"),!0),a=Ui(Bi(t,"bottom")),s=Ag(t,"x"),l=Ag(t,"y");return{fullSize:n,leftAndTop:r.concat(o),rightAndBottom:i.concat(l).concat(a).concat(s),chartArea:Bi(t,"chartArea"),vertical:r.concat(i).concat(l),horizontal:o.concat(a).concat(s)}}function Tg(e,t,n,r){return Math.max(e[n],t[n])+Math.max(e[r],t[r])}function lb(e,t){e.top=Math.max(e.top,t.top),e.left=Math.max(e.left,t.left),e.bottom=Math.max(e.bottom,t.bottom),e.right=Math.max(e.right,t.right)}function _k(e,t,n,r){const{pos:i,box:o}=n,a=e.maxPadding;if(!q(i)){n.size&&(e[i]-=n.size);const f=r[n.stack]||{size:0,count:1};f.size=Math.max(f.size,n.horizontal?o.height:o.width),n.size=f.size/f.count,e[i]+=n.size}o.getPadding&&lb(a,o.getPadding());const s=Math.max(0,t.outerWidth-Tg(a,e,"left","right")),l=Math.max(0,t.outerHeight-Tg(a,e,"top","bottom")),u=s!==e.w,c=l!==e.h;return e.w=s,e.h=l,n.horizontal?{same:u,other:c}:{same:c,other:u}}function wk(e){const t=e.maxPadding;function n(r){const i=Math.max(t[r]-e[r],0);return e[r]+=i,i}e.y+=n("top"),e.x+=n("left"),n("right"),n("bottom")}function xk(e,t){const n=t.maxPadding;function r(i){const o={left:0,top:0,right:0,bottom:0};return i.forEach(a=>{o[a]=Math.max(t[a],n[a])}),o}return r(e?["left","right"]:["top","bottom"])}function oo(e,t,n,r){const i=[];let o,a,s,l,u,c;for(o=0,a=e.length,u=0;o<a;++o){s=e[o],l=s.box,l.update(s.width||t.w,s.height||t.h,xk(s.horizontal,t));const{same:f,other:d}=_k(t,n,s,r);u|=f&&i.length,c=c||d,l.fullSize||i.push(s)}return u&&oo(i,t,n,r)||c}function Na(e,t,n,r,i){e.top=n,e.left=t,e.right=t+r,e.bottom=n+i,e.width=r,e.height=i}function Cg(e,t,n,r){const i=n.padding;let{x:o,y:a}=t;for(const s of e){const l=s.box,u=r[s.stack]||{count:1,placed:0,weight:1},c=s.stackWeight/u.weight||1;if(s.horizontal){const f=t.w*c,d=u.size||l.height;Gs(u.start)&&(a=u.start),l.fullSize?Na(l,i.left,a,n.outerWidth-i.right-i.left,d):Na(l,t.left+u.placed,a,f,d),u.start=a,u.placed+=f,a=l.bottom}else{const f=t.h*c,d=u.size||l.width;Gs(u.start)&&(o=u.start),l.fullSize?Na(l,o,i.top,d,n.outerHeight-i.bottom-i.top):Na(l,o,t.top+u.placed,d,f),u.start=o,u.placed+=f,o=l.right}}t.x=o,t.y=a}var Tt={addBox(e,t){e.boxes||(e.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(n){t.draw(n)}}]},e.boxes.push(t)},removeBox(e,t){const n=e.boxes?e.boxes.indexOf(t):-1;n!==-1&&e.boxes.splice(n,1)},configure(e,t,n){t.fullSize=n.fullSize,t.position=n.position,t.weight=n.weight},update(e,t,n,r){if(!e)return;const i=We(e.options.layout.padding),o=Math.max(t-i.width,0),a=Math.max(n-i.height,0),s=$k(e.boxes),l=s.vertical,u=s.horizontal;J(e.boxes,m=>{typeof m.beforeLayout=="function"&&m.beforeLayout()});const c=l.reduce((m,y)=>y.box.options&&y.box.options.display===!1?m:m+1,0)||1,f=Object.freeze({outerWidth:t,outerHeight:n,padding:i,availableWidth:o,availableHeight:a,vBoxMaxWidth:o/2/c,hBoxMaxHeight:a/2}),d=Object.assign({},i);lb(d,We(r));const h=Object.assign({maxPadding:d,w:o,h:a,x:i.left,y:i.top},i),g=bk(l.concat(u),f);oo(s.fullSize,h,f,g),oo(l,h,f,g),oo(u,h,f,g)&&oo(l,h,f,g),wk(h),Cg(s.leftAndTop,h,f,g),h.x+=h.w,h.y+=h.h,Cg(s.rightAndBottom,h,f,g),e.chartArea={left:h.left,top:h.top,right:h.left+h.w,bottom:h.top+h.h,height:h.h,width:h.w},J(s.chartArea,m=>{const y=m.box;Object.assign(y,e.chartArea),y.update(h.w,h.h,{left:0,top:0,right:0,bottom:0})})}};class ub{acquireContext(t,n){}releaseContext(t){return!1}addEventListener(t,n,r){}removeEventListener(t,n,r){}getDevicePixelRatio(){return 1}getMaximumSize(t,n,r,i){return n=Math.max(0,n||t.width),r=r||t.height,{width:n,height:Math.max(0,i?Math.floor(n/i):r)}}isAttached(t){return!0}updateConfig(t){}}class Sk extends ub{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const ps="$chartjs",kk={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},Pg=e=>e===null||e==="";function Ek(e,t){const n=e.style,r=e.getAttribute("height"),i=e.getAttribute("width");if(e[ps]={initial:{height:r,width:i,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",n.boxSizing=n.boxSizing||"border-box",Pg(i)){const o=gg(e,"width");o!==void 0&&(e.width=o)}if(Pg(r))if(e.style.height==="")e.height=e.width/(t||2);else{const o=gg(e,"height");o!==void 0&&(e.height=o)}return e}const cb=DS?{passive:!0}:!1;function Ak(e,t,n){e.addEventListener(t,n,cb)}function Tk(e,t,n){e.canvas.removeEventListener(t,n,cb)}function Ck(e,t){const n=kk[e.type]||e.type,{x:r,y:i}=rr(e,t);return{type:n,chart:t,native:e,x:r!==void 0?r:null,y:i!==void 0?i:null}}function Zs(e,t){for(const n of e)if(n===t||n.contains(t))return!0}function Pk(e,t,n){const r=e.canvas,i=new MutationObserver(o=>{let a=!1;for(const s of o)a=a||Zs(s.addedNodes,r),a=a&&!Zs(s.removedNodes,r);a&&n()});return i.observe(document,{childList:!0,subtree:!0}),i}function Mk(e,t,n){const r=e.canvas,i=new MutationObserver(o=>{let a=!1;for(const s of o)a=a||Zs(s.removedNodes,r),a=a&&!Zs(s.addedNodes,r);a&&n()});return i.observe(document,{childList:!0,subtree:!0}),i}const Go=new Map;let Mg=0;function fb(){const e=window.devicePixelRatio;e!==Mg&&(Mg=e,Go.forEach((t,n)=>{n.currentDevicePixelRatio!==e&&t()}))}function Ok(e,t){Go.size||window.addEventListener("resize",fb),Go.set(e,t)}function Ik(e){Go.delete(e),Go.size||window.removeEventListener("resize",fb)}function Lk(e,t,n){const r=e.canvas,i=r&&nh(r);if(!i)return;const o=G1((s,l)=>{const u=i.clientWidth;n(s,l),u<i.clientWidth&&n()},window),a=new ResizeObserver(s=>{const l=s[0],u=l.contentRect.width,c=l.contentRect.height;u===0&&c===0||o(u,c)});return a.observe(i),Ok(e,o),a}function Au(e,t,n){n&&n.disconnect(),t==="resize"&&Ik(e)}function Rk(e,t,n){const r=e.canvas,i=G1(o=>{e.ctx!==null&&n(Ck(o,e))},e);return Ak(r,t,i),i}class Nk extends ub{acquireContext(t,n){const r=t&&t.getContext&&t.getContext("2d");return r&&r.canvas===t?(Ek(t,n),r):null}releaseContext(t){const n=t.canvas;if(!n[ps])return!1;const r=n[ps].initial;["height","width"].forEach(o=>{const a=r[o];le(a)?n.removeAttribute(o):n.setAttribute(o,a)});const i=r.style||{};return Object.keys(i).forEach(o=>{n.style[o]=i[o]}),n.width=n.width,delete n[ps],!0}addEventListener(t,n,r){this.removeEventListener(t,n);const i=t.$proxies||(t.$proxies={}),a={attach:Pk,detach:Mk,resize:Lk}[n]||Rk;i[n]=a(t,n,r)}removeEventListener(t,n){const r=t.$proxies||(t.$proxies={}),i=r[n];if(!i)return;({attach:Au,detach:Au,resize:Au}[n]||Tk)(t,n,i),r[n]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,n,r,i){return FS(t,n,r,i)}isAttached(t){const n=nh(t);return!!(n&&n.isConnected)}}function Fk(e){return!tb()||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas?Sk:Nk}class mn{constructor(){U(this,"x");U(this,"y");U(this,"active",!1);U(this,"options");U(this,"$animations")}tooltipPosition(t){const{x:n,y:r}=this.getProps(["x","y"],t);return{x:n,y:r}}hasValue(){return Ho(this.x)&&Ho(this.y)}getProps(t,n){const r=this.$animations;if(!n||!r)return this;const i={};return t.forEach(o=>{i[o]=r[o]&&r[o].active()?r[o]._to:this[o]}),i}}U(mn,"defaults",{}),U(mn,"defaultRoutes");function Dk(e,t){const n=e.options.ticks,r=jk(e),i=Math.min(n.maxTicksLimit||r,r),o=n.major.enabled?Bk(t):[],a=o.length,s=o[0],l=o[a-1],u=[];if(a>i)return Uk(t,u,o,a/i),u;const c=zk(o,t,i);if(a>0){let f,d;const h=a>1?Math.round((l-s)/(a-1)):null;for(Fa(t,u,c,le(h)?0:s-h,s),f=0,d=a-1;f<d;f++)Fa(t,u,c,o[f],o[f+1]);return Fa(t,u,c,l,le(h)?t.length:l+h),u}return Fa(t,u,c),u}function jk(e){const t=e.options.offset,n=e._tickSize(),r=e._length/n+(t?0:1),i=e._maxLength/n;return Math.floor(Math.min(r,i))}function zk(e,t,n){const r=Vk(e),i=t.length/n;if(!r)return Math.max(i,1);const o=N2(r);for(let a=0,s=o.length-1;a<s;a++){const l=o[a];if(l>i)return l}return Math.max(i,1)}function Bk(e){const t=[];let n,r;for(n=0,r=e.length;n<r;n++)e[n].major&&t.push(n);return t}function Uk(e,t,n,r){let i=0,o=n[0],a;for(r=Math.ceil(r),a=0;a<e.length;a++)a===o&&(t.push(e[a]),i++,o=n[i*r])}function Fa(e,t,n,r,i){const o=Y(r,0),a=Math.min(Y(i,e.length),e.length);let s=0,l,u,c;for(n=Math.ceil(n),i&&(l=i-r,n=l/Math.floor(l/n)),c=o;c<0;)s++,c=Math.round(o+s*n);for(u=Math.max(o,0);u<a;u++)u===c&&(t.push(e[u]),s++,c=Math.round(o+s*n))}function Vk(e){const t=e.length;let n,r;if(t<2)return!1;for(r=e[0],n=1;n<t;++n)if(e[n]-e[n-1]!==r)return!1;return r}const Wk=e=>e==="left"?"right":e==="right"?"left":e,Og=(e,t,n)=>t==="top"||t==="left"?e[t]+n:e[t]-n,Ig=(e,t)=>Math.min(t||e,e);function Lg(e,t){const n=[],r=e.length/t,i=e.length;let o=0;for(;o<i;o+=r)n.push(e[Math.floor(o)]);return n}function Hk(e,t,n){const r=e.ticks.length,i=Math.min(t,r-1),o=e._startPixel,a=e._endPixel,s=1e-6;let l=e.getPixelForTick(i),u;if(!(n&&(r===1?u=Math.max(l-o,a-l):t===0?u=(e.getPixelForTick(1)-l)/2:u=(l-e.getPixelForTick(i-1))/2,l+=i<t?u:-u,l<o-s||l>a+s)))return l}function Gk(e,t){J(e,n=>{const r=n.gc,i=r.length/2;let o;if(i>t){for(o=0;o<i;++o)delete n.data[r[o]];r.splice(0,i)}})}function Vi(e){return e.drawTicks?e.tickLength:0}function Rg(e,t){if(!e.display)return 0;const n=Me(e.font,t),r=We(e.padding);return(ge(e.text)?e.text.length:1)*n.lineHeight+r.height}function Yk(e,t){return Kn(e,{scale:t,type:"scale"})}function Xk(e,t,n){return Kn(e,{tick:n,index:t,type:"tick"})}function Kk(e,t,n){let r=Xd(e);return(n&&t!=="right"||!n&&t==="right")&&(r=Wk(r)),r}function Qk(e,t,n,r){const{top:i,left:o,bottom:a,right:s,chart:l}=e,{chartArea:u,scales:c}=l;let f=0,d,h,g;const m=a-i,y=s-o;if(e.isHorizontal()){if(h=Be(r,o,s),q(n)){const p=Object.keys(n)[0],v=n[p];g=c[p].getPixelForValue(v)+m-t}else n==="center"?g=(u.bottom+u.top)/2+m-t:g=Og(e,n,t);d=s-o}else{if(q(n)){const p=Object.keys(n)[0],v=n[p];h=c[p].getPixelForValue(v)-y+t}else n==="center"?h=(u.left+u.right)/2-y+t:h=Og(e,n,t);g=Be(r,a,i),f=n==="left"?-gt:gt}return{titleX:h,titleY:g,maxWidth:d,rotation:f}}class Sr extends mn{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,n){return t}getUserBounds(){let{_userMin:t,_userMax:n,_suggestedMin:r,_suggestedMax:i}=this;return t=ct(t,Number.POSITIVE_INFINITY),n=ct(n,Number.NEGATIVE_INFINITY),r=ct(r,Number.POSITIVE_INFINITY),i=ct(i,Number.NEGATIVE_INFINITY),{min:ct(t,r),max:ct(n,i),minDefined:Ie(t),maxDefined:Ie(n)}}getMinMax(t){let{min:n,max:r,minDefined:i,maxDefined:o}=this.getUserBounds(),a;if(i&&o)return{min:n,max:r};const s=this.getMatchingVisibleMetas();for(let l=0,u=s.length;l<u;++l)a=s[l].controller.getMinMax(this,t),i||(n=Math.min(n,a.min)),o||(r=Math.max(r,a.max));return n=o&&n>r?r:n,r=i&&n>r?n:r,{min:ct(n,ct(r,n)),max:ct(r,ct(n,r))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){ne(this.options.beforeUpdate,[this])}update(t,n,r){const{beginAtZero:i,grace:o,ticks:a}=this.options,s=a.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=n,this._margins=r=Object.assign({left:0,right:0,top:0,bottom:0},r),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+r.left+r.right:this.height+r.top+r.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=gS(this,o,i),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=s<this.ticks.length;this._convertTicksToLabels(l?Lg(this.ticks,s):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),a.display&&(a.autoSkip||a.source==="auto")&&(this.ticks=Dk(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,n,r;this.isHorizontal()?(n=this.left,r=this.right):(n=this.top,r=this.bottom,t=!t),this._startPixel=n,this._endPixel=r,this._reversePixels=t,this._length=r-n,this._alignToPixels=this.options.alignToPixels}afterUpdate(){ne(this.options.afterUpdate,[this])}beforeSetDimensions(){ne(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){ne(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),ne(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){ne(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const n=this.options.ticks;let r,i,o;for(r=0,i=t.length;r<i;r++)o=t[r],o.label=ne(n.callback,[o.value,r,t],this)}afterTickToLabelConversion(){ne(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){ne(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,n=t.ticks,r=Ig(this.ticks.length,t.ticks.maxTicksLimit),i=n.minRotation||0,o=n.maxRotation;let a=i,s,l,u;if(!this._isVisible()||!n.display||i>=o||r<=1||!this.isHorizontal()){this.labelRotation=i;return}const c=this._getLabelSizes(),f=c.widest.width,d=c.highest.height,h=At(this.chart.width-f,0,this.maxWidth);s=t.offset?this.maxWidth/r:h/(r-1),f+6>s&&(s=h/(r-(t.offset?.5:1)),l=this.maxHeight-Vi(t.grid)-n.padding-Rg(t.title,this.chart.options.font),u=Math.sqrt(f*f+d*d),a=Gd(Math.min(Math.asin(At((c.highest.height+6)/s,-1,1)),Math.asin(At(l/u,-1,1))-Math.asin(At(d/u,-1,1)))),a=Math.max(i,Math.min(o,a))),this.labelRotation=a}afterCalculateLabelRotation(){ne(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){ne(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:n,options:{ticks:r,title:i,grid:o}}=this,a=this._isVisible(),s=this.isHorizontal();if(a){const l=Rg(i,n.options.font);if(s?(t.width=this.maxWidth,t.height=Vi(o)+l):(t.height=this.maxHeight,t.width=Vi(o)+l),r.display&&this.ticks.length){const{first:u,last:c,widest:f,highest:d}=this._getLabelSizes(),h=r.padding*2,g=In(this.labelRotation),m=Math.cos(g),y=Math.sin(g);if(s){const p=r.mirror?0:y*f.width+m*d.height;t.height=Math.min(this.maxHeight,t.height+p+h)}else{const p=r.mirror?0:m*f.width+y*d.height;t.width=Math.min(this.maxWidth,t.width+p+h)}this._calculatePadding(u,c,y,m)}}this._handleMargins(),s?(this.width=this._length=n.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=n.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,n,r,i){const{ticks:{align:o,padding:a},position:s}=this.options,l=this.labelRotation!==0,u=s!=="top"&&this.axis==="x";if(this.isHorizontal()){const c=this.getPixelForTick(0)-this.left,f=this.right-this.getPixelForTick(this.ticks.length-1);let d=0,h=0;l?u?(d=i*t.width,h=r*n.height):(d=r*t.height,h=i*n.width):o==="start"?h=n.width:o==="end"?d=t.width:o!=="inner"&&(d=t.width/2,h=n.width/2),this.paddingLeft=Math.max((d-c+a)*this.width/(this.width-c),0),this.paddingRight=Math.max((h-f+a)*this.width/(this.width-f),0)}else{let c=n.height/2,f=t.height/2;o==="start"?(c=0,f=t.height):o==="end"&&(c=n.height,f=0),this.paddingTop=c+a,this.paddingBottom=f+a}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){ne(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:n}=this.options;return n==="top"||n==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let n,r;for(n=0,r=t.length;n<r;n++)le(t[n].label)&&(t.splice(n,1),r--,n--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const n=this.options.ticks.sampleSize;let r=this.ticks;n<r.length&&(r=Lg(r,n)),this._labelSizes=t=this._computeLabelSizes(r,r.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,n,r){const{ctx:i,_longestTextCache:o}=this,a=[],s=[],l=Math.floor(n/Ig(n,r));let u=0,c=0,f,d,h,g,m,y,p,v,b,$,_;for(f=0;f<n;f+=l){if(g=t[f].label,m=this._resolveTickFontOptions(f),i.font=y=m.string,p=o[y]=o[y]||{data:{},gc:[]},v=m.lineHeight,b=$=0,!le(g)&&!ge(g))b=Xs(i,p.data,p.gc,b,g),$=v;else if(ge(g))for(d=0,h=g.length;d<h;++d)_=g[d],!le(_)&&!ge(_)&&(b=Xs(i,p.data,p.gc,b,_),$+=v);a.push(b),s.push($),u=Math.max(b,u),c=Math.max($,c)}Gk(o,n);const k=a.indexOf(u),w=s.indexOf(c),E=C=>({width:a[C]||0,height:s[C]||0});return{first:E(0),last:E(n-1),widest:E(k),highest:E(w),widths:a,heights:s}}getLabelForValue(t){return t}getPixelForValue(t,n){return NaN}getValueForPixel(t){}getPixelForTick(t){const n=this.ticks;return t<0||t>n.length-1?null:this.getPixelForValue(n[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const n=this._startPixel+t*this._length;return z2(this._alignToPixels?Zn(this.chart,n,0):n)}getDecimalForPixel(t){const n=(t-this._startPixel)/this._length;return this._reversePixels?1-n:n}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:n}=this;return t<0&&n<0?n:t>0&&n>0?t:0}getContext(t){const n=this.ticks||[];if(t>=0&&t<n.length){const r=n[t];return r.$context||(r.$context=Xk(this.getContext(),t,r))}return this.$context||(this.$context=Yk(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,n=In(this.labelRotation),r=Math.abs(Math.cos(n)),i=Math.abs(Math.sin(n)),o=this._getLabelSizes(),a=t.autoSkipPadding||0,s=o?o.widest.width+a:0,l=o?o.highest.height+a:0;return this.isHorizontal()?l*r>s*i?s/r:l/i:l*i<s*r?l/r:s/i}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const n=this.axis,r=this.chart,i=this.options,{grid:o,position:a,border:s}=i,l=o.offset,u=this.isHorizontal(),f=this.ticks.length+(l?1:0),d=Vi(o),h=[],g=s.setContext(this.getContext()),m=g.display?g.width:0,y=m/2,p=function(L){return Zn(r,L,m)};let v,b,$,_,k,w,E,C,P,x,S,M;if(a==="top")v=p(this.bottom),w=this.bottom-d,C=v-y,x=p(t.top)+y,M=t.bottom;else if(a==="bottom")v=p(this.top),x=t.top,M=p(t.bottom)-y,w=v+y,C=this.top+d;else if(a==="left")v=p(this.right),k=this.right-d,E=v-y,P=p(t.left)+y,S=t.right;else if(a==="right")v=p(this.left),P=t.left,S=p(t.right)-y,k=v+y,E=this.left+d;else if(n==="x"){if(a==="center")v=p((t.top+t.bottom)/2+.5);else if(q(a)){const L=Object.keys(a)[0],j=a[L];v=p(this.chart.scales[L].getPixelForValue(j))}x=t.top,M=t.bottom,w=v+y,C=w+d}else if(n==="y"){if(a==="center")v=p((t.left+t.right)/2);else if(q(a)){const L=Object.keys(a)[0],j=a[L];v=p(this.chart.scales[L].getPixelForValue(j))}k=v-y,E=k-d,P=t.left,S=t.right}const D=Y(i.ticks.maxTicksLimit,f),R=Math.max(1,Math.ceil(f/D));for(b=0;b<f;b+=R){const L=this.getContext(b),j=o.setContext(L),A=s.setContext(L),O=j.lineWidth,I=j.color,B=A.dash||[],z=A.dashOffset,V=j.tickWidth,X=j.tickColor,ce=j.tickBorderDash||[],te=j.tickBorderDashOffset;$=Hk(this,b,l),$!==void 0&&(_=Zn(r,$,O),u?k=E=P=S=_:w=C=x=M=_,h.push({tx1:k,ty1:w,tx2:E,ty2:C,x1:P,y1:x,x2:S,y2:M,width:O,color:I,borderDash:B,borderDashOffset:z,tickWidth:V,tickColor:X,tickBorderDash:ce,tickBorderDashOffset:te}))}return this._ticksLength=f,this._borderValue=v,h}_computeLabelItems(t){const n=this.axis,r=this.options,{position:i,ticks:o}=r,a=this.isHorizontal(),s=this.ticks,{align:l,crossAlign:u,padding:c,mirror:f}=o,d=Vi(r.grid),h=d+c,g=f?-c:h,m=-In(this.labelRotation),y=[];let p,v,b,$,_,k,w,E,C,P,x,S,M="middle";if(i==="top")k=this.bottom-g,w=this._getXAxisLabelAlignment();else if(i==="bottom")k=this.top+g,w=this._getXAxisLabelAlignment();else if(i==="left"){const R=this._getYAxisLabelAlignment(d);w=R.textAlign,_=R.x}else if(i==="right"){const R=this._getYAxisLabelAlignment(d);w=R.textAlign,_=R.x}else if(n==="x"){if(i==="center")k=(t.top+t.bottom)/2+h;else if(q(i)){const R=Object.keys(i)[0],L=i[R];k=this.chart.scales[R].getPixelForValue(L)+h}w=this._getXAxisLabelAlignment()}else if(n==="y"){if(i==="center")_=(t.left+t.right)/2-h;else if(q(i)){const R=Object.keys(i)[0],L=i[R];_=this.chart.scales[R].getPixelForValue(L)}w=this._getYAxisLabelAlignment(d).textAlign}n==="y"&&(l==="start"?M="top":l==="end"&&(M="bottom"));const D=this._getLabelSizes();for(p=0,v=s.length;p<v;++p){b=s[p],$=b.label;const R=o.setContext(this.getContext(p));E=this.getPixelForTick(p)+o.labelOffset,C=this._resolveTickFontOptions(p),P=C.lineHeight,x=ge($)?$.length:1;const L=x/2,j=R.color,A=R.textStrokeColor,O=R.textStrokeWidth;let I=w;a?(_=E,w==="inner"&&(p===v-1?I=this.options.reverse?"left":"right":p===0?I=this.options.reverse?"right":"left":I="center"),i==="top"?u==="near"||m!==0?S=-x*P+P/2:u==="center"?S=-D.highest.height/2-L*P+P:S=-D.highest.height+P/2:u==="near"||m!==0?S=P/2:u==="center"?S=D.highest.height/2-L*P:S=D.highest.height-x*P,f&&(S*=-1),m!==0&&!R.showLabelBackdrop&&(_+=P/2*Math.sin(m))):(k=E,S=(1-x)*P/2);let B;if(R.showLabelBackdrop){const z=We(R.backdropPadding),V=D.heights[p],X=D.widths[p];let ce=S-z.top,te=0-z.left;switch(M){case"middle":ce-=V/2;break;case"bottom":ce-=V;break}switch(w){case"center":te-=X/2;break;case"right":te-=X;break}B={left:te,top:ce,width:X+z.width,height:V+z.height,color:R.backdropColor}}y.push({label:$,font:C,textOffset:S,options:{rotation:m,color:j,strokeColor:A,strokeWidth:O,textAlign:I,textBaseline:M,translation:[_,k],backdrop:B}})}return y}_getXAxisLabelAlignment(){const{position:t,ticks:n}=this.options;if(-In(this.labelRotation))return t==="top"?"left":"right";let i="center";return n.align==="start"?i="left":n.align==="end"?i="right":n.align==="inner"&&(i="inner"),i}_getYAxisLabelAlignment(t){const{position:n,ticks:{crossAlign:r,mirror:i,padding:o}}=this.options,a=this._getLabelSizes(),s=t+o,l=a.widest.width;let u,c;return n==="left"?i?(c=this.right+o,r==="near"?u="left":r==="center"?(u="center",c+=l/2):(u="right",c+=l)):(c=this.right-s,r==="near"?u="right":r==="center"?(u="center",c-=l/2):(u="left",c=this.left)):n==="right"?i?(c=this.left+o,r==="near"?u="right":r==="center"?(u="center",c-=l/2):(u="left",c-=l)):(c=this.left+s,r==="near"?u="left":r==="center"?(u="center",c+=l/2):(u="right",c=this.right)):u="right",{textAlign:u,x:c}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,n=this.options.position;if(n==="left"||n==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(n==="top"||n==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:n},left:r,top:i,width:o,height:a}=this;n&&(t.save(),t.fillStyle=n,t.fillRect(r,i,o,a),t.restore())}getLineWidthForValue(t){const n=this.options.grid;if(!this._isVisible()||!n.display)return 0;const i=this.ticks.findIndex(o=>o.value===t);return i>=0?n.setContext(this.getContext(i)).lineWidth:0}drawGrid(t){const n=this.options.grid,r=this.ctx,i=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let o,a;const s=(l,u,c)=>{!c.width||!c.color||(r.save(),r.lineWidth=c.width,r.strokeStyle=c.color,r.setLineDash(c.borderDash||[]),r.lineDashOffset=c.borderDashOffset,r.beginPath(),r.moveTo(l.x,l.y),r.lineTo(u.x,u.y),r.stroke(),r.restore())};if(n.display)for(o=0,a=i.length;o<a;++o){const l=i[o];n.drawOnChartArea&&s({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),n.drawTicks&&s({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:n,options:{border:r,grid:i}}=this,o=r.setContext(this.getContext()),a=r.display?o.width:0;if(!a)return;const s=i.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let u,c,f,d;this.isHorizontal()?(u=Zn(t,this.left,a)-a/2,c=Zn(t,this.right,s)+s/2,f=d=l):(f=Zn(t,this.top,a)-a/2,d=Zn(t,this.bottom,s)+s/2,u=c=l),n.save(),n.lineWidth=o.width,n.strokeStyle=o.color,n.beginPath(),n.moveTo(u,f),n.lineTo(c,d),n.stroke(),n.restore()}drawLabels(t){if(!this.options.ticks.display)return;const r=this.ctx,i=this._computeLabelArea();i&&Zd(r,i);const o=this.getLabelItems(t);for(const a of o){const s=a.options,l=a.font,u=a.label,c=a.textOffset;_r(r,u,0,c,l,s)}i&&qd(r)}drawTitle(){const{ctx:t,options:{position:n,title:r,reverse:i}}=this;if(!r.display)return;const o=Me(r.font),a=We(r.padding),s=r.align;let l=o.lineHeight/2;n==="bottom"||n==="center"||q(n)?(l+=a.bottom,ge(r.text)&&(l+=o.lineHeight*(r.text.length-1))):l+=a.top;const{titleX:u,titleY:c,maxWidth:f,rotation:d}=Qk(this,l,n,s);_r(t,r.text,0,0,o,{color:r.color,maxWidth:f,rotation:d,textAlign:Kk(s,n,i),textBaseline:"middle",translation:[u,c]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,n=t.ticks&&t.ticks.z||0,r=Y(t.grid&&t.grid.z,-1),i=Y(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==Sr.prototype.draw?[{z:n,draw:o=>{this.draw(o)}}]:[{z:r,draw:o=>{this.drawBackground(),this.drawGrid(o),this.drawTitle()}},{z:i,draw:()=>{this.drawBorder()}},{z:n,draw:o=>{this.drawLabels(o)}}]}getMatchingVisibleMetas(t){const n=this.chart.getSortedVisibleDatasetMetas(),r=this.axis+"AxisID",i=[];let o,a;for(o=0,a=n.length;o<a;++o){const s=n[o];s[r]===this.id&&(!t||s.type===t)&&i.push(s)}return i}_resolveTickFontOptions(t){const n=this.options.ticks.setContext(this.getContext(t));return Me(n.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class Da{constructor(t,n,r){this.type=t,this.scope=n,this.override=r,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const n=Object.getPrototypeOf(t);let r;Jk(n)&&(r=this.register(n));const i=this.items,o=t.id,a=this.scope+"."+o;if(!o)throw new Error("class does not have id: "+t);return o in i||(i[o]=t,Zk(t,a,r),this.override&&we.override(t.id,t.overrides)),a}get(t){return this.items[t]}unregister(t){const n=this.items,r=t.id,i=this.scope;r in n&&delete n[r],i&&r in we[i]&&(delete we[i][r],this.override&&delete $r[r])}}function Zk(e,t,n){const r=Wo(Object.create(null),[n?we.get(n):{},we.get(t),e.defaults]);we.set(t,r),e.defaultRoutes&&qk(t,e.defaultRoutes),e.descriptors&&we.describe(t,e.descriptors)}function qk(e,t){Object.keys(t).forEach(n=>{const r=n.split("."),i=r.pop(),o=[e].concat(r).join("."),a=t[n].split("."),s=a.pop(),l=a.join(".");we.route(o,i,l,s)})}function Jk(e){return"id"in e&&"defaults"in e}class eE{constructor(){this.controllers=new Da(wo,"datasets",!0),this.elements=new Da(mn,"elements"),this.plugins=new Da(Object,"plugins"),this.scales=new Da(Sr,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,n,r){[...n].forEach(i=>{const o=r||this._getRegistryForType(i);r||o.isForType(i)||o===this.plugins&&i.id?this._exec(t,o,i):J(i,a=>{const s=r||this._getRegistryForType(a);this._exec(t,s,a)})})}_exec(t,n,r){const i=Hd(t);ne(r["before"+i],[],r),n[t](r),ne(r["after"+i],[],r)}_getRegistryForType(t){for(let n=0;n<this._typedRegistries.length;n++){const r=this._typedRegistries[n];if(r.isForType(t))return r}return this.plugins}_get(t,n,r){const i=n.get(t);if(i===void 0)throw new Error('"'+t+'" is not a registered '+r+".");return i}}var Yt=new eE;class tE{constructor(){this._init=[]}notify(t,n,r,i){n==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install"));const o=i?this._descriptors(t).filter(i):this._descriptors(t),a=this._notify(o,t,n,r);return n==="afterDestroy"&&(this._notify(o,t,"stop"),this._notify(this._init,t,"uninstall")),a}_notify(t,n,r,i){i=i||{};for(const o of t){const a=o.plugin,s=a[r],l=[n,i,o.options];if(ne(s,l,a)===!1&&i.cancelable)return!1}return!0}invalidate(){le(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const n=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),n}_createDescriptors(t,n){const r=t&&t.config,i=Y(r.options&&r.options.plugins,{}),o=nE(r);return i===!1&&!n?[]:iE(t,o,i,n)}_notifyStateChanges(t){const n=this._oldCache||[],r=this._cache,i=(o,a)=>o.filter(s=>!a.some(l=>s.plugin.id===l.plugin.id));this._notify(i(n,r),t,"stop"),this._notify(i(r,n),t,"start")}}function nE(e){const t={},n=[],r=Object.keys(Yt.plugins.items);for(let o=0;o<r.length;o++)n.push(Yt.getPlugin(r[o]));const i=e.plugins||[];for(let o=0;o<i.length;o++){const a=i[o];n.indexOf(a)===-1&&(n.push(a),t[a.id]=!0)}return{plugins:n,localIds:t}}function rE(e,t){return!t&&e===!1?null:e===!0?{}:e}function iE(e,{plugins:t,localIds:n},r,i){const o=[],a=e.getContext();for(const s of t){const l=s.id,u=rE(r[l],i);u!==null&&o.push({plugin:s,options:oE(e.config,{plugin:s,local:n[l]},u,a)})}return o}function oE(e,{plugin:t,local:n},r,i){const o=e.pluginScopeKeys(t),a=e.getOptionScopes(r,o);return n&&t.defaults&&a.push(t.defaults),e.createResolver(a,i,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Kc(e,t){const n=we.datasets[e]||{};return((t.datasets||{})[e]||{}).indexAxis||t.indexAxis||n.indexAxis||"x"}function aE(e,t){let n=e;return e==="_index_"?n=t:e==="_value_"&&(n=t==="x"?"y":"x"),n}function sE(e,t){return e===t?"_index_":"_value_"}function Ng(e){if(e==="x"||e==="y"||e==="r")return e}function lE(e){if(e==="top"||e==="bottom")return"x";if(e==="left"||e==="right")return"y"}function Qc(e,...t){if(Ng(e))return e;for(const n of t){const r=n.axis||lE(n.position)||e.length>1&&Ng(e[0].toLowerCase());if(r)return r}throw new Error(`Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`)}function Fg(e,t,n){if(n[t+"AxisID"]===e)return{axis:t}}function uE(e,t){if(t.data&&t.data.datasets){const n=t.data.datasets.filter(r=>r.xAxisID===e||r.yAxisID===e);if(n.length)return Fg(e,"x",n[0])||Fg(e,"y",n[0])}return{}}function cE(e,t){const n=$r[e.type]||{scales:{}},r=t.scales||{},i=Kc(e.type,t),o=Object.create(null);return Object.keys(r).forEach(a=>{const s=r[a];if(!q(s))return console.error(`Invalid scale configuration for scale: ${a}`);if(s._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${a}`);const l=Qc(a,s,uE(a,e),we.scales[s.type]),u=sE(l,i),c=n.scales||{};o[a]=yo(Object.create(null),[{axis:l},s,c[l],c[u]])}),e.data.datasets.forEach(a=>{const s=a.type||e.type,l=a.indexAxis||Kc(s,t),c=($r[s]||{}).scales||{};Object.keys(c).forEach(f=>{const d=aE(f,l),h=a[d+"AxisID"]||d;o[h]=o[h]||Object.create(null),yo(o[h],[{axis:d},r[h],c[f]])})}),Object.keys(o).forEach(a=>{const s=o[a];yo(s,[we.scales[s.type],we.scale])}),o}function db(e){const t=e.options||(e.options={});t.plugins=Y(t.plugins,{}),t.scales=cE(e,t)}function hb(e){return e=e||{},e.datasets=e.datasets||[],e.labels=e.labels||[],e}function fE(e){return e=e||{},e.data=hb(e.data),db(e),e}const Dg=new Map,pb=new Set;function ja(e,t){let n=Dg.get(e);return n||(n=t(),Dg.set(e,n),pb.add(n)),n}const Wi=(e,t,n)=>{const r=Hs(t,n);r!==void 0&&e.add(r)};class dE{constructor(t){this._config=fE(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=hb(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),db(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return ja(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,n){return ja(`${t}.transition.${n}`,()=>[[`datasets.${t}.transitions.${n}`,`transitions.${n}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,n){return ja(`${t}-${n}`,()=>[[`datasets.${t}.elements.${n}`,`datasets.${t}`,`elements.${n}`,""]])}pluginScopeKeys(t){const n=t.id,r=this.type;return ja(`${r}-plugin-${n}`,()=>[[`plugins.${n}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,n){const r=this._scopeCache;let i=r.get(t);return(!i||n)&&(i=new Map,r.set(t,i)),i}getOptionScopes(t,n,r){const{options:i,type:o}=this,a=this._cachedScopes(t,r),s=a.get(n);if(s)return s;const l=new Set;n.forEach(c=>{t&&(l.add(t),c.forEach(f=>Wi(l,t,f))),c.forEach(f=>Wi(l,i,f)),c.forEach(f=>Wi(l,$r[o]||{},f)),c.forEach(f=>Wi(l,we,f)),c.forEach(f=>Wi(l,Yc,f))});const u=Array.from(l);return u.length===0&&u.push(Object.create(null)),pb.has(n)&&a.set(n,u),u}chartOptionScopes(){const{options:t,type:n}=this;return[t,$r[n]||{},we.datasets[n]||{},{type:n},we,Yc]}resolveNamedOptions(t,n,r,i=[""]){const o={$shared:!0},{resolver:a,subPrefixes:s}=jg(this._resolverCache,t,i);let l=a;if(pE(a,n)){o.$shared=!1,r=Hn(r)?r():r;const u=this.createResolver(t,r,s);l=gi(a,r,u)}for(const u of n)o[u]=l[u];return o}createResolver(t,n,r=[""],i){const{resolver:o}=jg(this._resolverCache,t,r);return q(n)?gi(o,n,void 0,i):o}}function jg(e,t,n){let r=e.get(t);r||(r=new Map,e.set(t,r));const i=n.join();let o=r.get(i);return o||(o={resolver:Jd(t,n),subPrefixes:n.filter(s=>!s.toLowerCase().includes("hover"))},r.set(i,o)),o}const hE=e=>q(e)&&Object.getOwnPropertyNames(e).reduce((t,n)=>t||Hn(e[n]),!1);function pE(e,t){const{isScriptable:n,isIndexable:r}=Q1(e);for(const i of t){const o=n(i),a=r(i),s=(a||o)&&e[i];if(o&&(Hn(s)||hE(s))||a&&ge(s))return!0}return!1}var gE="4.4.0";const vE=["top","bottom","left","right","chartArea"];function zg(e,t){return e==="top"||e==="bottom"||vE.indexOf(e)===-1&&t==="x"}function Bg(e,t){return function(n,r){return n[e]===r[e]?n[t]-r[t]:n[e]-r[e]}}function Ug(e){const t=e.chart,n=t.options.animation;t.notifyPlugins("afterRender"),ne(n&&n.onComplete,[e],t)}function mE(e){const t=e.chart,n=t.options.animation;ne(n&&n.onProgress,[e],t)}function gb(e){return tb()&&typeof e=="string"?e=document.getElementById(e):e&&e.length&&(e=e[0]),e&&e.canvas&&(e=e.canvas),e}const gs={},Vg=e=>{const t=gb(e);return Object.values(gs).filter(n=>n.canvas===t).pop()};function yE(e,t,n){const r=Object.keys(e);for(const i of r){const o=+i;if(o>=t){const a=e[i];delete e[i],(n>0||o>t)&&(e[o+n]=a)}}}function bE(e,t,n,r){return!n||e.type==="mouseout"?null:r?t:e}function za(e,t,n){return e.options.clip?e[n]:t[n]}function $E(e,t){const{xScale:n,yScale:r}=e;return n&&r?{left:za(n,t,"left"),right:za(n,t,"right"),top:za(r,t,"top"),bottom:za(r,t,"bottom")}:t}var wn;let El=(wn=class{static register(...t){Yt.add(...t),Wg()}static unregister(...t){Yt.remove(...t),Wg()}constructor(t,n){const r=this.config=new dE(n),i=gb(t),o=Vg(i);if(o)throw new Error("Canvas is already in use. Chart with ID '"+o.id+"' must be destroyed before the canvas with ID '"+o.canvas.id+"' can be reused.");const a=r.createResolver(r.chartOptionScopes(),this.getContext());this.platform=new(r.platform||Fk(i)),this.platform.updateConfig(r);const s=this.platform.acquireContext(i,a.aspectRatio),l=s&&s.canvas,u=l&&l.height,c=l&&l.width;if(this.id=A2(),this.ctx=s,this.canvas=l,this.width=c,this.height=u,this._options=a,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new tE,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=H2(f=>this.update(f),a.resizeDelay||0),this._dataChanges=[],gs[this.id]=this,!s||!l){console.error("Failed to create chart: can't acquire context from the given item");return}rn.listen(this,"complete",Ug),rn.listen(this,"progress",mE),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:n},width:r,height:i,_aspectRatio:o}=this;return le(t)?n&&o?o:i?r/i:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return Yt}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():pg(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return fg(this.canvas,this.ctx),this}stop(){return rn.stop(this),this}resize(t,n){rn.running(this)?this._resizeBeforeDraw={width:t,height:n}:this._resize(t,n)}_resize(t,n){const r=this.options,i=this.canvas,o=r.maintainAspectRatio&&this.aspectRatio,a=this.platform.getMaximumSize(i,t,n,o),s=r.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=a.width,this.height=a.height,this._aspectRatio=this.aspectRatio,pg(this,s,!0)&&(this.notifyPlugins("resize",{size:a}),ne(r.onResize,[this,a],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const n=this.options.scales||{};J(n,(r,i)=>{r.id=i})}buildOrUpdateScales(){const t=this.options,n=t.scales,r=this.scales,i=Object.keys(r).reduce((a,s)=>(a[s]=!1,a),{});let o=[];n&&(o=o.concat(Object.keys(n).map(a=>{const s=n[a],l=Qc(a,s),u=l==="r",c=l==="x";return{options:s,dposition:u?"chartArea":c?"bottom":"left",dtype:u?"radialLinear":c?"category":"linear"}}))),J(o,a=>{const s=a.options,l=s.id,u=Qc(l,s),c=Y(s.type,a.dtype);(s.position===void 0||zg(s.position,u)!==zg(a.dposition))&&(s.position=a.dposition),i[l]=!0;let f=null;if(l in r&&r[l].type===c)f=r[l];else{const d=Yt.getScale(c);f=new d({id:l,type:c,ctx:this.ctx,chart:this}),r[f.id]=f}f.init(s,t)}),J(i,(a,s)=>{a||delete r[s]}),J(r,a=>{Tt.configure(this,a,a.options),Tt.addBox(this,a)})}_updateMetasets(){const t=this._metasets,n=this.data.datasets.length,r=t.length;if(t.sort((i,o)=>i.index-o.index),r>n){for(let i=n;i<r;++i)this._destroyDatasetMeta(i);t.splice(n,r-n)}this._sortedMetasets=t.slice(0).sort(Bg("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:n}}=this;t.length>n.length&&delete this._stacks,t.forEach((r,i)=>{n.filter(o=>o===r._dataset).length===0&&this._destroyDatasetMeta(i)})}buildOrUpdateControllers(){const t=[],n=this.data.datasets;let r,i;for(this._removeUnreferencedMetasets(),r=0,i=n.length;r<i;r++){const o=n[r];let a=this.getDatasetMeta(r);const s=o.type||this.config.type;if(a.type&&a.type!==s&&(this._destroyDatasetMeta(r),a=this.getDatasetMeta(r)),a.type=s,a.indexAxis=o.indexAxis||Kc(s,this.options),a.order=o.order||0,a.index=r,a.label=""+o.label,a.visible=this.isDatasetVisible(r),a.controller)a.controller.updateIndex(r),a.controller.linkScales();else{const l=Yt.getController(s),{datasetElementType:u,dataElementType:c}=we.datasets[s];Object.assign(l,{dataElementType:Yt.getElement(c),datasetElementType:u&&Yt.getElement(u)}),a.controller=new l(this,r),t.push(a.controller)}}return this._updateMetasets(),t}_resetElements(){J(this.data.datasets,(t,n)=>{this.getDatasetMeta(n).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const n=this.config;n.update();const r=this._options=n.createResolver(n.chartOptionScopes(),this.getContext()),i=this._animationsDisabled=!r.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const o=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let a=0;for(let u=0,c=this.data.datasets.length;u<c;u++){const{controller:f}=this.getDatasetMeta(u),d=!i&&o.indexOf(f)===-1;f.buildOrUpdateElements(d),a=Math.max(+f.getMaxOverflow(),a)}a=this._minPadding=r.layout.autoPadding?a:0,this._updateLayout(a),i||J(o,u=>{u.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(Bg("z","_idx"));const{_active:s,_lastEvent:l}=this;l?this._eventHandler(l,!0):s.length&&this._updateHoverStyles(s,s,!0),this.render()}_updateScales(){J(this.scales,t=>{Tt.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,n=new Set(Object.keys(this._listeners)),r=new Set(t.events);(!ng(n,r)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,n=this._getUniformDataChanges()||[];for(const{method:r,start:i,count:o}of n){const a=r==="_removeElements"?-o:o;yE(t,i,a)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const n=this.data.datasets.length,r=o=>new Set(t.filter(a=>a[0]===o).map((a,s)=>s+","+a.splice(1).join(","))),i=r(0);for(let o=1;o<n;o++)if(!ng(i,r(o)))return;return Array.from(i).map(o=>o.split(",")).map(o=>({method:o[1],start:+o[2],count:+o[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;Tt.update(this,this.width,this.height,t);const n=this.chartArea,r=n.width<=0||n.height<=0;this._layers=[],J(this.boxes,i=>{r&&i.position==="chartArea"||(i.configure&&i.configure(),this._layers.push(...i._layers()))},this),this._layers.forEach((i,o)=>{i._idx=o}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let n=0,r=this.data.datasets.length;n<r;++n)this.getDatasetMeta(n).controller.configure();for(let n=0,r=this.data.datasets.length;n<r;++n)this._updateDataset(n,Hn(t)?t({datasetIndex:n}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,n){const r=this.getDatasetMeta(t),i={meta:r,index:t,mode:n,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",i)!==!1&&(r.controller._update(n),i.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",i))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(rn.has(this)?this.attached&&!rn.running(this)&&rn.start(this):(this.draw(),Ug({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:r,height:i}=this._resizeBeforeDraw;this._resize(r,i),this._resizeBeforeDraw=null}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const n=this._layers;for(t=0;t<n.length&&n[t].z<=0;++t)n[t].draw(this.chartArea);for(this._drawDatasets();t<n.length;++t)n[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const n=this._sortedMetasets,r=[];let i,o;for(i=0,o=n.length;i<o;++i){const a=n[i];(!t||a.visible)&&r.push(a)}return r}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let n=t.length-1;n>=0;--n)this._drawDataset(t[n]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const n=this.ctx,r=t._clip,i=!r.disabled,o=$E(t,this.chartArea),a={meta:t,index:t.index,cancelable:!0};this.notifyPlugins("beforeDatasetDraw",a)!==!1&&(i&&Zd(n,{left:r.left===!1?0:o.left-r.left,right:r.right===!1?this.width:o.right+r.right,top:r.top===!1?0:o.top-r.top,bottom:r.bottom===!1?this.height:o.bottom+r.bottom}),t.controller.draw(),i&&qd(n),a.cancelable=!1,this.notifyPlugins("afterDatasetDraw",a))}isPointInArea(t){return fn(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,n,r,i){const o=vk.modes[n];return typeof o=="function"?o(this,t,r,i):[]}getDatasetMeta(t){const n=this.data.datasets[t],r=this._metasets;let i=r.filter(o=>o&&o._dataset===n).pop();return i||(i={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:n&&n.order||0,index:t,_dataset:n,_parsed:[],_sorted:!1},r.push(i)),i}getContext(){return this.$context||(this.$context=Kn(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const n=this.data.datasets[t];if(!n)return!1;const r=this.getDatasetMeta(t);return typeof r.hidden=="boolean"?!r.hidden:!n.hidden}setDatasetVisibility(t,n){const r=this.getDatasetMeta(t);r.hidden=!n}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,n,r){const i=r?"show":"hide",o=this.getDatasetMeta(t),a=o.controller._resolveAnimations(void 0,i);Gs(n)?(o.data[n].hidden=!r,this.update()):(this.setDatasetVisibility(t,r),a.update(o,{visible:r}),this.update(s=>s.datasetIndex===t?i:void 0))}hide(t,n){this._updateVisibility(t,n,!1)}show(t,n){this._updateVisibility(t,n,!0)}_destroyDatasetMeta(t){const n=this._metasets[t];n&&n.controller&&n.controller._destroy(),delete this._metasets[t]}_stop(){let t,n;for(this.stop(),rn.remove(this),t=0,n=this.data.datasets.length;t<n;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:n}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),fg(t,n),this.platform.releaseContext(n),this.canvas=null,this.ctx=null),delete gs[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,n=this.platform,r=(o,a)=>{n.addEventListener(this,o,a),t[o]=a},i=(o,a,s)=>{o.offsetX=a,o.offsetY=s,this._eventHandler(o)};J(this.options.events,o=>r(o,i))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,n=this.platform,r=(l,u)=>{n.addEventListener(this,l,u),t[l]=u},i=(l,u)=>{t[l]&&(n.removeEventListener(this,l,u),delete t[l])},o=(l,u)=>{this.canvas&&this.resize(l,u)};let a;const s=()=>{i("attach",s),this.attached=!0,this.resize(),r("resize",o),r("detach",a)};a=()=>{this.attached=!1,i("resize",o),this._stop(),this._resize(0,0),r("attach",s)},n.isAttached(this.canvas)?s():a()}unbindEvents(){J(this._listeners,(t,n)=>{this.platform.removeEventListener(this,n,t)}),this._listeners={},J(this._responsiveListeners,(t,n)=>{this.platform.removeEventListener(this,n,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,n,r){const i=r?"set":"remove";let o,a,s,l;for(n==="dataset"&&(o=this.getDatasetMeta(t[0].datasetIndex),o.controller["_"+i+"DatasetHoverStyle"]()),s=0,l=t.length;s<l;++s){a=t[s];const u=a&&this.getDatasetMeta(a.datasetIndex).controller;u&&u[i+"HoverStyle"](a.element,a.datasetIndex,a.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const n=this._active||[],r=t.map(({datasetIndex:o,index:a})=>{const s=this.getDatasetMeta(o);if(!s)throw new Error("No dataset found at index "+o);return{datasetIndex:o,element:s.data[a],index:a}});!Vs(r,n)&&(this._active=r,this._lastEvent=null,this._updateHoverStyles(r,n))}notifyPlugins(t,n,r){return this._plugins.notify(this,t,n,r)}isPluginEnabled(t){return this._plugins._cache.filter(n=>n.plugin.id===t).length===1}_updateHoverStyles(t,n,r){const i=this.options.hover,o=(l,u)=>l.filter(c=>!u.some(f=>c.datasetIndex===f.datasetIndex&&c.index===f.index)),a=o(n,t),s=r?t:o(t,n);a.length&&this.updateHoverStyle(a,i.mode,!1),s.length&&i.mode&&this.updateHoverStyle(s,i.mode,!0)}_eventHandler(t,n){const r={event:t,replay:n,cancelable:!0,inChartArea:this.isPointInArea(t)},i=a=>(a.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",r,i)===!1)return;const o=this._handleEvent(t,n,r.inChartArea);return r.cancelable=!1,this.notifyPlugins("afterEvent",r,i),(o||r.changed)&&this.render(),this}_handleEvent(t,n,r){const{_active:i=[],options:o}=this,a=n,s=this._getActiveElements(t,i,r,a),l=I2(t),u=bE(t,this._lastEvent,r,l);r&&(this._lastEvent=null,ne(o.onHover,[t,s,this],this),l&&ne(o.onClick,[t,s,this],this));const c=!Vs(s,i);return(c||n)&&(this._active=s,this._updateHoverStyles(s,i,n)),this._lastEvent=u,c}_getActiveElements(t,n,r,i){if(t.type==="mouseout")return[];if(!r)return n;const o=this.options.hover;return this.getElementsAtEventForMode(t,o.mode,o,i)}},U(wn,"defaults",we),U(wn,"instances",gs),U(wn,"overrides",$r),U(wn,"registry",Yt),U(wn,"version",gE),U(wn,"getChart",Vg),wn);function Wg(){return J(El.instances,e=>e._plugins.invalidate())}function vb(e,t,n=t){e.lineCap=Y(n.borderCapStyle,t.borderCapStyle),e.setLineDash(Y(n.borderDash,t.borderDash)),e.lineDashOffset=Y(n.borderDashOffset,t.borderDashOffset),e.lineJoin=Y(n.borderJoinStyle,t.borderJoinStyle),e.lineWidth=Y(n.borderWidth,t.borderWidth),e.strokeStyle=Y(n.borderColor,t.borderColor)}function _E(e,t,n){e.lineTo(n.x,n.y)}function wE(e){return e.stepped?oS:e.tension||e.cubicInterpolationMode==="monotone"?aS:_E}function mb(e,t,n={}){const r=e.length,{start:i=0,end:o=r-1}=n,{start:a,end:s}=t,l=Math.max(i,a),u=Math.min(o,s),c=i<a&&o<a||i>s&&o>s;return{count:r,start:l,loop:t.loop,ilen:u<l&&!c?r+u-l:u-l}}function xE(e,t,n,r){const{points:i,options:o}=t,{count:a,start:s,loop:l,ilen:u}=mb(i,n,r),c=wE(o);let{move:f=!0,reverse:d}=r||{},h,g,m;for(h=0;h<=u;++h)g=i[(s+(d?u-h:h))%a],!g.skip&&(f?(e.moveTo(g.x,g.y),f=!1):c(e,m,g,d,o.stepped),m=g);return l&&(g=i[(s+(d?u:0))%a],c(e,m,g,d,o.stepped)),!!l}function SE(e,t,n,r){const i=t.points,{count:o,start:a,ilen:s}=mb(i,n,r),{move:l=!0,reverse:u}=r||{};let c=0,f=0,d,h,g,m,y,p;const v=$=>(a+(u?s-$:$))%o,b=()=>{m!==y&&(e.lineTo(c,y),e.lineTo(c,m),e.lineTo(c,p))};for(l&&(h=i[v(0)],e.moveTo(h.x,h.y)),d=0;d<=s;++d){if(h=i[v(d)],h.skip)continue;const $=h.x,_=h.y,k=$|0;k===g?(_<m?m=_:_>y&&(y=_),c=(f*c+$)/++f):(b(),e.lineTo($,_),g=k,f=0,m=y=_),p=_}b()}function Zc(e){const t=e.options,n=t.borderDash&&t.borderDash.length;return!e._decimated&&!e._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!n?SE:xE}function kE(e){return e.stepped?jS:e.tension||e.cubicInterpolationMode==="monotone"?zS:ir}function EE(e,t,n,r){let i=t._path;i||(i=t._path=new Path2D,t.path(i,n,r)&&i.closePath()),vb(e,t.options),e.stroke(i)}function AE(e,t,n,r){const{segments:i,options:o}=t,a=Zc(t);for(const s of i)vb(e,o,s.style),e.beginPath(),a(e,t,s,{start:n,end:n+r-1})&&e.closePath(),e.stroke()}const TE=typeof Path2D=="function";function CE(e,t,n,r){TE&&!t.options.segment?EE(e,t,n,r):AE(e,t,n,r)}class ao extends mn{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,n){const r=this.options;if((r.tension||r.cubicInterpolationMode==="monotone")&&!r.stepped&&!this._pointsUpdated){const i=r.spanGaps?this._loop:this._fullLoop;MS(this._points,r,t,i,n),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=XS(this,this.options.segment))}first(){const t=this.segments,n=this.points;return t.length&&n[t[0].start]}last(){const t=this.segments,n=this.points,r=t.length;return r&&n[t[r-1].end]}interpolate(t,n){const r=this.options,i=t[n],o=this.points,a=HS(this,{property:n,start:i,end:i});if(!a.length)return;const s=[],l=kE(r);let u,c;for(u=0,c=a.length;u<c;++u){const{start:f,end:d}=a[u],h=o[f],g=o[d];if(h===g){s.push(h);continue}const m=Math.abs((i-h[n])/(g[n]-h[n])),y=l(h,g,m,r.stepped);y[n]=t[n],s.push(y)}return s.length===1?s[0]:s}pathSegment(t,n,r){return Zc(this)(t,this,n,r)}path(t,n,r){const i=this.segments,o=Zc(this);let a=this._loop;n=n||0,r=r||this.points.length-n;for(const s of i)a&=o(t,this,s,{start:n,end:n+r-1});return!!a}draw(t,n,r,i){const o=this.options||{};(this.points||[]).length&&o.borderWidth&&(t.save(),CE(t,this,r,i),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}U(ao,"id","line"),U(ao,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),U(ao,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),U(ao,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function Hg(e,t,n,r){const i=e.options,{[n]:o}=e.getProps([n],r);return Math.abs(t-o)<i.radius+i.hitRadius}class vs extends mn{constructor(n){super();U(this,"parsed");U(this,"skip");U(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,n&&Object.assign(this,n)}inRange(n,r,i){const o=this.options,{x:a,y:s}=this.getProps(["x","y"],i);return Math.pow(n-a,2)+Math.pow(r-s,2)<Math.pow(o.hitRadius+o.radius,2)}inXRange(n,r){return Hg(this,n,"x",r)}inYRange(n,r){return Hg(this,n,"y",r)}getCenterPoint(n){const{x:r,y:i}=this.getProps(["x","y"],n);return{x:r,y:i}}size(n){n=n||this.options||{};let r=n.radius||0;r=Math.max(r,r&&n.hoverRadius||0);const i=r&&n.borderWidth||0;return(r+i)*2}draw(n,r){const i=this.options;this.skip||i.radius<.1||!fn(this,r,this.size(i)/2)||(n.strokeStyle=i.borderColor,n.lineWidth=i.borderWidth,n.fillStyle=i.backgroundColor,Xc(n,i,this.x,this.y))}getRange(){const n=this.options||{};return n.radius+n.hitRadius}}U(vs,"id","point"),U(vs,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),U(vs,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});const Gg=(e,t)=>{let{boxHeight:n=t,boxWidth:r=t}=e;return e.usePointStyle&&(n=Math.min(n,t),r=e.pointStyleWidth||Math.min(r,t)),{boxWidth:r,boxHeight:n,itemHeight:Math.max(t,n)}},PE=(e,t)=>e!==null&&t!==null&&e.datasetIndex===t.datasetIndex&&e.index===t.index;class Yg extends mn{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,n,r){this.maxWidth=t,this.maxHeight=n,this._margins=r,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let n=ne(t.generateLabels,[this.chart],this)||[];t.filter&&(n=n.filter(r=>t.filter(r,this.chart.data))),t.sort&&(n=n.sort((r,i)=>t.sort(r,i,this.chart.data))),this.options.reverse&&n.reverse(),this.legendItems=n}fit(){const{options:t,ctx:n}=this;if(!t.display){this.width=this.height=0;return}const r=t.labels,i=Me(r.font),o=i.size,a=this._computeTitleHeight(),{boxWidth:s,itemHeight:l}=Gg(r,o);let u,c;n.font=i.string,this.isHorizontal()?(u=this.maxWidth,c=this._fitRows(a,o,s,l)+10):(c=this.maxHeight,u=this._fitCols(a,i,s,l)+10),this.width=Math.min(u,t.maxWidth||this.maxWidth),this.height=Math.min(c,t.maxHeight||this.maxHeight)}_fitRows(t,n,r,i){const{ctx:o,maxWidth:a,options:{labels:{padding:s}}}=this,l=this.legendHitBoxes=[],u=this.lineWidths=[0],c=i+s;let f=t;o.textAlign="left",o.textBaseline="middle";let d=-1,h=-c;return this.legendItems.forEach((g,m)=>{const y=r+n/2+o.measureText(g.text).width;(m===0||u[u.length-1]+y+2*s>a)&&(f+=c,u[u.length-(m>0?0:1)]=0,h+=c,d++),l[m]={left:0,top:h,row:d,width:y,height:i},u[u.length-1]+=y+s}),f}_fitCols(t,n,r,i){const{ctx:o,maxHeight:a,options:{labels:{padding:s}}}=this,l=this.legendHitBoxes=[],u=this.columnSizes=[],c=a-t;let f=s,d=0,h=0,g=0,m=0;return this.legendItems.forEach((y,p)=>{const{itemWidth:v,itemHeight:b}=ME(r,n,o,y,i);p>0&&h+b+2*s>c&&(f+=d+s,u.push({width:d,height:h}),g+=d+s,m++,d=h=0),l[p]={left:g,top:h,col:m,width:v,height:b},d=Math.max(d,v),h+=b+s}),f+=d,u.push({width:d,height:h}),f}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:n,options:{align:r,labels:{padding:i},rtl:o}}=this,a=ii(o,this.left,this.width);if(this.isHorizontal()){let s=0,l=Be(r,this.left+i,this.right-this.lineWidths[s]);for(const u of n)s!==u.row&&(s=u.row,l=Be(r,this.left+i,this.right-this.lineWidths[s])),u.top+=this.top+t+i,u.left=a.leftForLtr(a.x(l),u.width),l+=u.width+i}else{let s=0,l=Be(r,this.top+t+i,this.bottom-this.columnSizes[s].height);for(const u of n)u.col!==s&&(s=u.col,l=Be(r,this.top+t+i,this.bottom-this.columnSizes[s].height)),u.top=l,u.left+=this.left+i,u.left=a.leftForLtr(a.x(u.left),u.width),l+=u.height+i}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;Zd(t,this),this._draw(),qd(t)}}_draw(){const{options:t,columnSizes:n,lineWidths:r,ctx:i}=this,{align:o,labels:a}=t,s=we.color,l=ii(t.rtl,this.left,this.width),u=Me(a.font),{padding:c}=a,f=u.size,d=f/2;let h;this.drawTitle(),i.textAlign=l.textAlign("left"),i.textBaseline="middle",i.lineWidth=.5,i.font=u.string;const{boxWidth:g,boxHeight:m,itemHeight:y}=Gg(a,f),p=function(k,w,E){if(isNaN(g)||g<=0||isNaN(m)||m<0)return;i.save();const C=Y(E.lineWidth,1);if(i.fillStyle=Y(E.fillStyle,s),i.lineCap=Y(E.lineCap,"butt"),i.lineDashOffset=Y(E.lineDashOffset,0),i.lineJoin=Y(E.lineJoin,"miter"),i.lineWidth=C,i.strokeStyle=Y(E.strokeStyle,s),i.setLineDash(Y(E.lineDash,[])),a.usePointStyle){const P={radius:m*Math.SQRT2/2,pointStyle:E.pointStyle,rotation:E.rotation,borderWidth:C},x=l.xPlus(k,g/2),S=w+d;X1(i,P,x,S,a.pointStyleWidth&&g)}else{const P=w+Math.max((f-m)/2,0),x=l.leftForLtr(k,g),S=ri(E.borderRadius);i.beginPath(),Object.values(S).some(M=>M!==0)?Ks(i,{x,y:P,w:g,h:m,radius:S}):i.rect(x,P,g,m),i.fill(),C!==0&&i.stroke()}i.restore()},v=function(k,w,E){_r(i,E.text,k,w+y/2,u,{strikethrough:E.hidden,textAlign:l.textAlign(E.textAlign)})},b=this.isHorizontal(),$=this._computeTitleHeight();b?h={x:Be(o,this.left+c,this.right-r[0]),y:this.top+c+$,line:0}:h={x:this.left+c,y:Be(o,this.top+$+c,this.bottom-n[0].height),line:0},nb(this.ctx,t.textDirection);const _=y+c;this.legendItems.forEach((k,w)=>{i.strokeStyle=k.fontColor,i.fillStyle=k.fontColor;const E=i.measureText(k.text).width,C=l.textAlign(k.textAlign||(k.textAlign=a.textAlign)),P=g+d+E;let x=h.x,S=h.y;l.setWidth(this.width),b?w>0&&x+P+c>this.right&&(S=h.y+=_,h.line++,x=h.x=Be(o,this.left+c,this.right-r[h.line])):w>0&&S+_>this.bottom&&(x=h.x=x+n[h.line].width+c,h.line++,S=h.y=Be(o,this.top+$+c,this.bottom-n[h.line].height));const M=l.x(x);if(p(M,S,k),x=G2(C,x+g+d,b?x+P:this.right,t.rtl),v(l.x(x),S,k),b)h.x+=P+c;else if(typeof k.text!="string"){const D=u.lineHeight;h.y+=yb(k,D)+c}else h.y+=_}),rb(this.ctx,t.textDirection)}drawTitle(){const t=this.options,n=t.title,r=Me(n.font),i=We(n.padding);if(!n.display)return;const o=ii(t.rtl,this.left,this.width),a=this.ctx,s=n.position,l=r.size/2,u=i.top+l;let c,f=this.left,d=this.width;if(this.isHorizontal())d=Math.max(...this.lineWidths),c=this.top+u,f=Be(t.align,f,this.right-d);else{const g=this.columnSizes.reduce((m,y)=>Math.max(m,y.height),0);c=u+Be(t.align,this.top,this.bottom-g-t.labels.padding-this._computeTitleHeight())}const h=Be(s,f,f+d);a.textAlign=o.textAlign(Xd(s)),a.textBaseline="middle",a.strokeStyle=n.color,a.fillStyle=n.color,a.font=r.string,_r(a,n.text,h,c,r)}_computeTitleHeight(){const t=this.options.title,n=Me(t.font),r=We(t.padding);return t.display?n.lineHeight+r.height:0}_getLegendItemAt(t,n){let r,i,o;if(io(t,this.left,this.right)&&io(n,this.top,this.bottom)){for(o=this.legendHitBoxes,r=0;r<o.length;++r)if(i=o[r],io(t,i.left,i.left+i.width)&&io(n,i.top,i.top+i.height))return this.legendItems[r]}return null}handleEvent(t){const n=this.options;if(!LE(t.type,n))return;const r=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const i=this._hoveredItem,o=PE(i,r);i&&!o&&ne(n.onLeave,[t,i,this],this),this._hoveredItem=r,r&&!o&&ne(n.onHover,[t,r,this],this)}else r&&ne(n.onClick,[t,r,this],this)}}function ME(e,t,n,r,i){const o=OE(r,e,t,n),a=IE(i,r,t.lineHeight);return{itemWidth:o,itemHeight:a}}function OE(e,t,n,r){let i=e.text;return i&&typeof i!="string"&&(i=i.reduce((o,a)=>o.length>a.length?o:a)),t+n.size/2+r.measureText(i).width}function IE(e,t,n){let r=e;return typeof t.text!="string"&&(r=yb(t,n)),r}function yb(e,t){const n=e.text?e.text.length:0;return t*n}function LE(e,t){return!!((e==="mousemove"||e==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(e==="click"||e==="mouseup"))}var RE={id:"legend",_element:Yg,start(e,t,n){const r=e.legend=new Yg({ctx:e.ctx,options:n,chart:e});Tt.configure(e,r,n),Tt.addBox(e,r)},stop(e){Tt.removeBox(e,e.legend),delete e.legend},beforeUpdate(e,t,n){const r=e.legend;Tt.configure(e,r,n),r.options=n},afterUpdate(e){const t=e.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(e,t){t.replay||e.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(e,t,n){const r=t.datasetIndex,i=n.chart;i.isDatasetVisible(r)?(i.hide(r),t.hidden=!0):(i.show(r),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:e=>e.chart.options.color,boxWidth:40,padding:10,generateLabels(e){const t=e.data.datasets,{labels:{usePointStyle:n,pointStyle:r,textAlign:i,color:o,useBorderRadius:a,borderRadius:s}}=e.legend.options;return e._getSortedDatasetMetas().map(l=>{const u=l.controller.getStyle(n?0:void 0),c=We(u.borderWidth);return{text:t[l.index].label,fillStyle:u.backgroundColor,fontColor:o,hidden:!l.visible,lineCap:u.borderCapStyle,lineDash:u.borderDash,lineDashOffset:u.borderDashOffset,lineJoin:u.borderJoinStyle,lineWidth:(c.width+c.height)/4,strokeStyle:u.borderColor,pointStyle:r||u.pointStyle,rotation:u.rotation,textAlign:i||u.textAlign,borderRadius:a&&(s||u.borderRadius),datasetIndex:l.index}},this)}},title:{color:e=>e.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:e=>!e.startsWith("on"),labels:{_scriptable:e=>!["generateLabels","filter","sort"].includes(e)}}};class bb extends mn{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,n){const r=this.options;if(this.left=0,this.top=0,!r.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=n;const i=ge(r.text)?r.text.length:1;this._padding=We(r.padding);const o=i*Me(r.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=o:this.width=o}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:n,left:r,bottom:i,right:o,options:a}=this,s=a.align;let l=0,u,c,f;return this.isHorizontal()?(c=Be(s,r,o),f=n+t,u=o-r):(a.position==="left"?(c=r+t,f=Be(s,i,n),l=ke*-.5):(c=o-t,f=Be(s,n,i),l=ke*.5),u=i-n),{titleX:c,titleY:f,maxWidth:u,rotation:l}}draw(){const t=this.ctx,n=this.options;if(!n.display)return;const r=Me(n.font),o=r.lineHeight/2+this._padding.top,{titleX:a,titleY:s,maxWidth:l,rotation:u}=this._drawArgs(o);_r(t,n.text,0,0,r,{color:n.color,maxWidth:l,rotation:u,textAlign:Xd(n.align),textBaseline:"middle",translation:[a,s]})}}function NE(e,t){const n=new bb({ctx:e.ctx,options:t,chart:e});Tt.configure(e,n,t),Tt.addBox(e,n),e.titleBlock=n}var FE={id:"title",_element:bb,start(e,t,n){NE(e,n)},stop(e){const t=e.titleBlock;Tt.removeBox(e,t),delete e.titleBlock},beforeUpdate(e,t,n){const r=e.titleBlock;Tt.configure(e,r,n),r.options=n},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const so={average(e){if(!e.length)return!1;let t,n,r=0,i=0,o=0;for(t=0,n=e.length;t<n;++t){const a=e[t].element;if(a&&a.hasValue()){const s=a.tooltipPosition();r+=s.x,i+=s.y,++o}}return{x:r/o,y:i/o}},nearest(e,t){if(!e.length)return!1;let n=t.x,r=t.y,i=Number.POSITIVE_INFINITY,o,a,s;for(o=0,a=e.length;o<a;++o){const l=e[o].element;if(l&&l.hasValue()){const u=l.getCenterPoint(),c=Gc(t,u);c<i&&(i=c,s=l)}}if(s){const l=s.tooltipPosition();n=l.x,r=l.y}return{x:n,y:r}}};function Ht(e,t){return t&&(ge(t)?Array.prototype.push.apply(e,t):e.push(t)),e}function on(e){return(typeof e=="string"||e instanceof String)&&e.indexOf(`
`)>-1?e.split(`
`):e}function DE(e,t){const{element:n,datasetIndex:r,index:i}=t,o=e.getDatasetMeta(r).controller,{label:a,value:s}=o.getLabelAndValue(i);return{chart:e,label:a,parsed:o.getParsed(i),raw:e.data.datasets[r].data[i],formattedValue:s,dataset:o.getDataset(),dataIndex:i,datasetIndex:r,element:n}}function Xg(e,t){const n=e.chart.ctx,{body:r,footer:i,title:o}=e,{boxWidth:a,boxHeight:s}=t,l=Me(t.bodyFont),u=Me(t.titleFont),c=Me(t.footerFont),f=o.length,d=i.length,h=r.length,g=We(t.padding);let m=g.height,y=0,p=r.reduce(($,_)=>$+_.before.length+_.lines.length+_.after.length,0);if(p+=e.beforeBody.length+e.afterBody.length,f&&(m+=f*u.lineHeight+(f-1)*t.titleSpacing+t.titleMarginBottom),p){const $=t.displayColors?Math.max(s,l.lineHeight):l.lineHeight;m+=h*$+(p-h)*l.lineHeight+(p-1)*t.bodySpacing}d&&(m+=t.footerMarginTop+d*c.lineHeight+(d-1)*t.footerSpacing);let v=0;const b=function($){y=Math.max(y,n.measureText($).width+v)};return n.save(),n.font=u.string,J(e.title,b),n.font=l.string,J(e.beforeBody.concat(e.afterBody),b),v=t.displayColors?a+2+t.boxPadding:0,J(r,$=>{J($.before,b),J($.lines,b),J($.after,b)}),v=0,n.font=c.string,J(e.footer,b),n.restore(),y+=g.width,{width:y,height:m}}function jE(e,t){const{y:n,height:r}=t;return n<r/2?"top":n>e.height-r/2?"bottom":"center"}function zE(e,t,n,r){const{x:i,width:o}=r,a=n.caretSize+n.caretPadding;if(e==="left"&&i+o+a>t.width||e==="right"&&i-o-a<0)return!0}function BE(e,t,n,r){const{x:i,width:o}=n,{width:a,chartArea:{left:s,right:l}}=e;let u="center";return r==="center"?u=i<=(s+l)/2?"left":"right":i<=o/2?u="left":i>=a-o/2&&(u="right"),zE(u,e,t,n)&&(u="center"),u}function Kg(e,t,n){const r=n.yAlign||t.yAlign||jE(e,n);return{xAlign:n.xAlign||t.xAlign||BE(e,t,n,r),yAlign:r}}function UE(e,t){let{x:n,width:r}=e;return t==="right"?n-=r:t==="center"&&(n-=r/2),n}function VE(e,t,n){let{y:r,height:i}=e;return t==="top"?r+=n:t==="bottom"?r-=i+n:r-=i/2,r}function Qg(e,t,n,r){const{caretSize:i,caretPadding:o,cornerRadius:a}=e,{xAlign:s,yAlign:l}=n,u=i+o,{topLeft:c,topRight:f,bottomLeft:d,bottomRight:h}=ri(a);let g=UE(t,s);const m=VE(t,l,u);return l==="center"?s==="left"?g+=u:s==="right"&&(g-=u):s==="left"?g-=Math.max(c,d)+i:s==="right"&&(g+=Math.max(f,h)+i),{x:At(g,0,r.width-t.width),y:At(m,0,r.height-t.height)}}function Ba(e,t,n){const r=We(n.padding);return t==="center"?e.x+e.width/2:t==="right"?e.x+e.width-r.right:e.x+r.left}function Zg(e){return Ht([],on(e))}function WE(e,t,n){return Kn(e,{tooltip:t,tooltipItems:n,type:"tooltip"})}function qg(e,t){const n=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return n?e.override(n):e}const $b={beforeTitle:Jt,title(e){if(e.length>0){const t=e[0],n=t.chart.data.labels,r=n?n.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(r>0&&t.dataIndex<r)return n[t.dataIndex]}return""},afterTitle:Jt,beforeBody:Jt,beforeLabel:Jt,label(e){if(this&&this.options&&this.options.mode==="dataset")return e.label+": "+e.formattedValue||e.formattedValue;let t=e.dataset.label||"";t&&(t+=": ");const n=e.formattedValue;return le(n)||(t+=n),t},labelColor(e){const n=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{borderColor:n.borderColor,backgroundColor:n.backgroundColor,borderWidth:n.borderWidth,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(e){const n=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{pointStyle:n.pointStyle,rotation:n.rotation}},afterLabel:Jt,afterBody:Jt,beforeFooter:Jt,footer:Jt,afterFooter:Jt};function Ke(e,t,n,r){const i=e[t].call(n,r);return typeof i>"u"?$b[t].call(n,r):i}class qc extends mn{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const n=this.chart,r=this.options.setContext(this.getContext()),i=r.enabled&&n.options.animation&&r.animations,o=new ob(this.chart,i);return i._cacheable&&(this._cachedAnimations=Object.freeze(o)),o}getContext(){return this.$context||(this.$context=WE(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,n){const{callbacks:r}=n,i=Ke(r,"beforeTitle",this,t),o=Ke(r,"title",this,t),a=Ke(r,"afterTitle",this,t);let s=[];return s=Ht(s,on(i)),s=Ht(s,on(o)),s=Ht(s,on(a)),s}getBeforeBody(t,n){return Zg(Ke(n.callbacks,"beforeBody",this,t))}getBody(t,n){const{callbacks:r}=n,i=[];return J(t,o=>{const a={before:[],lines:[],after:[]},s=qg(r,o);Ht(a.before,on(Ke(s,"beforeLabel",this,o))),Ht(a.lines,Ke(s,"label",this,o)),Ht(a.after,on(Ke(s,"afterLabel",this,o))),i.push(a)}),i}getAfterBody(t,n){return Zg(Ke(n.callbacks,"afterBody",this,t))}getFooter(t,n){const{callbacks:r}=n,i=Ke(r,"beforeFooter",this,t),o=Ke(r,"footer",this,t),a=Ke(r,"afterFooter",this,t);let s=[];return s=Ht(s,on(i)),s=Ht(s,on(o)),s=Ht(s,on(a)),s}_createItems(t){const n=this._active,r=this.chart.data,i=[],o=[],a=[];let s=[],l,u;for(l=0,u=n.length;l<u;++l)s.push(DE(this.chart,n[l]));return t.filter&&(s=s.filter((c,f,d)=>t.filter(c,f,d,r))),t.itemSort&&(s=s.sort((c,f)=>t.itemSort(c,f,r))),J(s,c=>{const f=qg(t.callbacks,c);i.push(Ke(f,"labelColor",this,c)),o.push(Ke(f,"labelPointStyle",this,c)),a.push(Ke(f,"labelTextColor",this,c))}),this.labelColors=i,this.labelPointStyles=o,this.labelTextColors=a,this.dataPoints=s,s}update(t,n){const r=this.options.setContext(this.getContext()),i=this._active;let o,a=[];if(!i.length)this.opacity!==0&&(o={opacity:0});else{const s=so[r.position].call(this,i,this._eventPosition);a=this._createItems(r),this.title=this.getTitle(a,r),this.beforeBody=this.getBeforeBody(a,r),this.body=this.getBody(a,r),this.afterBody=this.getAfterBody(a,r),this.footer=this.getFooter(a,r);const l=this._size=Xg(this,r),u=Object.assign({},s,l),c=Kg(this.chart,r,u),f=Qg(r,u,c,this.chart);this.xAlign=c.xAlign,this.yAlign=c.yAlign,o={opacity:1,x:f.x,y:f.y,width:l.width,height:l.height,caretX:s.x,caretY:s.y}}this._tooltipItems=a,this.$context=void 0,o&&this._resolveAnimations().update(this,o),t&&r.external&&r.external.call(this,{chart:this.chart,tooltip:this,replay:n})}drawCaret(t,n,r,i){const o=this.getCaretPosition(t,r,i);n.lineTo(o.x1,o.y1),n.lineTo(o.x2,o.y2),n.lineTo(o.x3,o.y3)}getCaretPosition(t,n,r){const{xAlign:i,yAlign:o}=this,{caretSize:a,cornerRadius:s}=r,{topLeft:l,topRight:u,bottomLeft:c,bottomRight:f}=ri(s),{x:d,y:h}=t,{width:g,height:m}=n;let y,p,v,b,$,_;return o==="center"?($=h+m/2,i==="left"?(y=d,p=y-a,b=$+a,_=$-a):(y=d+g,p=y+a,b=$-a,_=$+a),v=y):(i==="left"?p=d+Math.max(l,c)+a:i==="right"?p=d+g-Math.max(u,f)-a:p=this.caretX,o==="top"?(b=h,$=b-a,y=p-a,v=p+a):(b=h+m,$=b+a,y=p+a,v=p-a),_=b),{x1:y,x2:p,x3:v,y1:b,y2:$,y3:_}}drawTitle(t,n,r){const i=this.title,o=i.length;let a,s,l;if(o){const u=ii(r.rtl,this.x,this.width);for(t.x=Ba(this,r.titleAlign,r),n.textAlign=u.textAlign(r.titleAlign),n.textBaseline="middle",a=Me(r.titleFont),s=r.titleSpacing,n.fillStyle=r.titleColor,n.font=a.string,l=0;l<o;++l)n.fillText(i[l],u.x(t.x),t.y+a.lineHeight/2),t.y+=a.lineHeight+s,l+1===o&&(t.y+=r.titleMarginBottom-s)}}_drawColorBox(t,n,r,i,o){const a=this.labelColors[r],s=this.labelPointStyles[r],{boxHeight:l,boxWidth:u}=o,c=Me(o.bodyFont),f=Ba(this,"left",o),d=i.x(f),h=l<c.lineHeight?(c.lineHeight-l)/2:0,g=n.y+h;if(o.usePointStyle){const m={radius:Math.min(u,l)/2,pointStyle:s.pointStyle,rotation:s.rotation,borderWidth:1},y=i.leftForLtr(d,u)+u/2,p=g+l/2;t.strokeStyle=o.multiKeyBackground,t.fillStyle=o.multiKeyBackground,Xc(t,m,y,p),t.strokeStyle=a.borderColor,t.fillStyle=a.backgroundColor,Xc(t,m,y,p)}else{t.lineWidth=q(a.borderWidth)?Math.max(...Object.values(a.borderWidth)):a.borderWidth||1,t.strokeStyle=a.borderColor,t.setLineDash(a.borderDash||[]),t.lineDashOffset=a.borderDashOffset||0;const m=i.leftForLtr(d,u),y=i.leftForLtr(i.xPlus(d,1),u-2),p=ri(a.borderRadius);Object.values(p).some(v=>v!==0)?(t.beginPath(),t.fillStyle=o.multiKeyBackground,Ks(t,{x:m,y:g,w:u,h:l,radius:p}),t.fill(),t.stroke(),t.fillStyle=a.backgroundColor,t.beginPath(),Ks(t,{x:y,y:g+1,w:u-2,h:l-2,radius:p}),t.fill()):(t.fillStyle=o.multiKeyBackground,t.fillRect(m,g,u,l),t.strokeRect(m,g,u,l),t.fillStyle=a.backgroundColor,t.fillRect(y,g+1,u-2,l-2))}t.fillStyle=this.labelTextColors[r]}drawBody(t,n,r){const{body:i}=this,{bodySpacing:o,bodyAlign:a,displayColors:s,boxHeight:l,boxWidth:u,boxPadding:c}=r,f=Me(r.bodyFont);let d=f.lineHeight,h=0;const g=ii(r.rtl,this.x,this.width),m=function(E){n.fillText(E,g.x(t.x+h),t.y+d/2),t.y+=d+o},y=g.textAlign(a);let p,v,b,$,_,k,w;for(n.textAlign=a,n.textBaseline="middle",n.font=f.string,t.x=Ba(this,y,r),n.fillStyle=r.bodyColor,J(this.beforeBody,m),h=s&&y!=="right"?a==="center"?u/2+c:u+2+c:0,$=0,k=i.length;$<k;++$){for(p=i[$],v=this.labelTextColors[$],n.fillStyle=v,J(p.before,m),b=p.lines,s&&b.length&&(this._drawColorBox(n,t,$,g,r),d=Math.max(f.lineHeight,l)),_=0,w=b.length;_<w;++_)m(b[_]),d=f.lineHeight;J(p.after,m)}h=0,d=f.lineHeight,J(this.afterBody,m),t.y-=o}drawFooter(t,n,r){const i=this.footer,o=i.length;let a,s;if(o){const l=ii(r.rtl,this.x,this.width);for(t.x=Ba(this,r.footerAlign,r),t.y+=r.footerMarginTop,n.textAlign=l.textAlign(r.footerAlign),n.textBaseline="middle",a=Me(r.footerFont),n.fillStyle=r.footerColor,n.font=a.string,s=0;s<o;++s)n.fillText(i[s],l.x(t.x),t.y+a.lineHeight/2),t.y+=a.lineHeight+r.footerSpacing}}drawBackground(t,n,r,i){const{xAlign:o,yAlign:a}=this,{x:s,y:l}=t,{width:u,height:c}=r,{topLeft:f,topRight:d,bottomLeft:h,bottomRight:g}=ri(i.cornerRadius);n.fillStyle=i.backgroundColor,n.strokeStyle=i.borderColor,n.lineWidth=i.borderWidth,n.beginPath(),n.moveTo(s+f,l),a==="top"&&this.drawCaret(t,n,r,i),n.lineTo(s+u-d,l),n.quadraticCurveTo(s+u,l,s+u,l+d),a==="center"&&o==="right"&&this.drawCaret(t,n,r,i),n.lineTo(s+u,l+c-g),n.quadraticCurveTo(s+u,l+c,s+u-g,l+c),a==="bottom"&&this.drawCaret(t,n,r,i),n.lineTo(s+h,l+c),n.quadraticCurveTo(s,l+c,s,l+c-h),a==="center"&&o==="left"&&this.drawCaret(t,n,r,i),n.lineTo(s,l+f),n.quadraticCurveTo(s,l,s+f,l),n.closePath(),n.fill(),i.borderWidth>0&&n.stroke()}_updateAnimationTarget(t){const n=this.chart,r=this.$animations,i=r&&r.x,o=r&&r.y;if(i||o){const a=so[t.position].call(this,this._active,this._eventPosition);if(!a)return;const s=this._size=Xg(this,t),l=Object.assign({},a,this._size),u=Kg(n,t,l),c=Qg(t,l,u,n);(i._to!==c.x||o._to!==c.y)&&(this.xAlign=u.xAlign,this.yAlign=u.yAlign,this.width=s.width,this.height=s.height,this.caretX=a.x,this.caretY=a.y,this._resolveAnimations().update(this,c))}}_willRender(){return!!this.opacity}draw(t){const n=this.options.setContext(this.getContext());let r=this.opacity;if(!r)return;this._updateAnimationTarget(n);const i={width:this.width,height:this.height},o={x:this.x,y:this.y};r=Math.abs(r)<.001?0:r;const a=We(n.padding),s=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;n.enabled&&s&&(t.save(),t.globalAlpha=r,this.drawBackground(o,t,i,n),nb(t,n.textDirection),o.y+=a.top,this.drawTitle(o,t,n),this.drawBody(o,t,n),this.drawFooter(o,t,n),rb(t,n.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,n){const r=this._active,i=t.map(({datasetIndex:s,index:l})=>{const u=this.chart.getDatasetMeta(s);if(!u)throw new Error("Cannot find a dataset at index "+s);return{datasetIndex:s,element:u.data[l],index:l}}),o=!Vs(r,i),a=this._positionChanged(i,n);(o||a)&&(this._active=i,this._eventPosition=n,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,n,r=!0){if(n&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const i=this.options,o=this._active||[],a=this._getActiveElements(t,o,n,r),s=this._positionChanged(a,t),l=n||!Vs(a,o)||s;return l&&(this._active=a,(i.enabled||i.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,n))),l}_getActiveElements(t,n,r,i){const o=this.options;if(t.type==="mouseout")return[];if(!i)return n;const a=this.chart.getElementsAtEventForMode(t,o.mode,o,r);return o.reverse&&a.reverse(),a}_positionChanged(t,n){const{caretX:r,caretY:i,options:o}=this,a=so[o.position].call(this,t,n);return a!==!1&&(r!==a.x||i!==a.y)}}U(qc,"positioners",so);var HE={id:"tooltip",_element:qc,positioners:so,afterInit(e,t,n){n&&(e.tooltip=new qc({chart:e,options:n}))},beforeUpdate(e,t,n){e.tooltip&&e.tooltip.initialize(n)},reset(e,t,n){e.tooltip&&e.tooltip.initialize(n)},afterDraw(e){const t=e.tooltip;if(t&&t._willRender()){const n={tooltip:t};if(e.notifyPlugins("beforeTooltipDraw",{...n,cancelable:!0})===!1)return;t.draw(e.ctx),e.notifyPlugins("afterTooltipDraw",n)}},afterEvent(e,t){if(e.tooltip){const n=t.replay;e.tooltip.handleEvent(t.event,n,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(e,t)=>t.bodyFont.size,boxWidth:(e,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:$b},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:e=>e!=="filter"&&e!=="itemSort"&&e!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};const GE=(e,t,n,r)=>(typeof t=="string"?(n=e.push(t)-1,r.unshift({index:n,label:t})):isNaN(t)&&(n=null),n);function YE(e,t,n,r){const i=e.indexOf(t);if(i===-1)return GE(e,t,n,r);const o=e.lastIndexOf(t);return i!==o?n:i}const XE=(e,t)=>e===null?null:At(Math.round(e),0,t);function Jg(e){const t=this.getLabels();return e>=0&&e<t.length?t[e]:e}class Jc extends Sr{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const n=this._addedLabels;if(n.length){const r=this.getLabels();for(const{index:i,label:o}of n)r[i]===o&&r.splice(i,1);this._addedLabels=[]}super.init(t)}parse(t,n){if(le(t))return null;const r=this.getLabels();return n=isFinite(n)&&r[n]===t?n:YE(r,t,Y(n,t),this._addedLabels),XE(n,r.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:n}=this.getUserBounds();let{min:r,max:i}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(r=0),n||(i=this.getLabels().length-1)),this.min=r,this.max=i}buildTicks(){const t=this.min,n=this.max,r=this.options.offset,i=[];let o=this.getLabels();o=t===0&&n===o.length-1?o:o.slice(t,n+1),this._valueRange=Math.max(o.length-(r?0:1),1),this._startValue=this.min-(r?.5:0);for(let a=t;a<=n;a++)i.push({value:a});return i}getLabelForValue(t){return Jg.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const n=this.ticks;return t<0||t>n.length-1?null:this.getPixelForValue(n[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}U(Jc,"id","category"),U(Jc,"defaults",{ticks:{callback:Jg}});function KE(e,t){const n=[],{bounds:i,step:o,min:a,max:s,precision:l,count:u,maxTicks:c,maxDigits:f,includeBounds:d}=e,h=o||1,g=c-1,{min:m,max:y}=t,p=!le(a),v=!le(s),b=!le(u),$=(y-m)/(f+1);let _=ig((y-m)/g/h)*h,k,w,E,C;if(_<1e-14&&!p&&!v)return[{value:m},{value:y}];C=Math.ceil(y/_)-Math.floor(m/_),C>g&&(_=ig(C*_/g/h)*h),le(l)||(k=Math.pow(10,l),_=Math.ceil(_*k)/k),i==="ticks"?(w=Math.floor(m/_)*_,E=Math.ceil(y/_)*_):(w=m,E=y),p&&v&&o&&F2((s-a)/o,_/1e3)?(C=Math.round(Math.min((s-a)/_,c)),_=(s-a)/C,w=a,E=s):b?(w=p?a:w,E=v?s:E,C=u-1,_=(E-w)/C):(C=(E-w)/_,bo(C,Math.round(C),_/1e3)?C=Math.round(C):C=Math.ceil(C));const P=Math.max(og(_),og(w));k=Math.pow(10,le(l)?P:l),w=Math.round(w*k)/k,E=Math.round(E*k)/k;let x=0;for(p&&(d&&w!==a?(n.push({value:a}),w<a&&x++,bo(Math.round((w+x*_)*k)/k,a,ev(a,$,e))&&x++):w<a&&x++);x<C;++x){const S=Math.round((w+x*_)*k)/k;if(v&&S>s)break;n.push({value:S})}return v&&d&&E!==s?n.length&&bo(n[n.length-1].value,s,ev(s,$,e))?n[n.length-1].value=s:n.push({value:s}):(!v||E===s)&&n.push({value:E}),n}function ev(e,t,{horizontal:n,minRotation:r}){const i=In(r),o=(n?Math.sin(i):Math.cos(i))||.001,a=.75*t*(""+e).length;return Math.min(t/o,a)}class qs extends Sr{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,n){return le(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:n,maxDefined:r}=this.getUserBounds();let{min:i,max:o}=this;const a=l=>i=n?i:l,s=l=>o=r?o:l;if(t){const l=pi(i),u=pi(o);l<0&&u<0?s(0):l>0&&u>0&&a(0)}if(i===o){let l=o===0?1:Math.abs(o*.05);s(o+l),t||a(i-l)}this.min=i,this.max=o}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:n,stepSize:r}=t,i;return r?(i=Math.ceil(this.max/r)-Math.floor(this.min/r)+1,i>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${r} would result generating up to ${i} ticks. Limiting to 1000.`),i=1e3)):(i=this.computeTickLimit(),n=n||11),n&&(i=Math.min(n,i)),i}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,n=t.ticks;let r=this.getTickLimit();r=Math.max(2,r);const i={maxTicks:r,bounds:t.bounds,min:t.min,max:t.max,precision:n.precision,step:n.stepSize,count:n.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:n.minRotation||0,includeBounds:n.includeBounds!==!1},o=this._range||this,a=KE(i,o);return t.bounds==="ticks"&&U1(a,this,"value"),t.reverse?(a.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),a}configure(){const t=this.ticks;let n=this.min,r=this.max;if(super.configure(),this.options.offset&&t.length){const i=(r-n)/Math.max(t.length-1,1)/2;n-=i,r+=i}this._startValue=n,this._endValue=r,this._valueRange=r-n}getLabelForValue(t){return Qd(t,this.chart.options.locale,this.options.ticks.format)}}class ef extends qs{determineDataLimits(){const{min:t,max:n}=this.getMinMax(!0);this.min=Ie(t)?t:0,this.max=Ie(n)?n:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),n=t?this.width:this.height,r=In(this.options.ticks.minRotation),i=(t?Math.sin(r):Math.cos(r))||.001,o=this._resolveTickFontOptions(0);return Math.ceil(n/Math.min(40,o.lineHeight/i))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}U(ef,"id","linear"),U(ef,"defaults",{ticks:{callback:Sl.formatters.numeric}});const Yo=e=>Math.floor(On(e)),Jn=(e,t)=>Math.pow(10,Yo(e)+t);function tv(e){return e/Math.pow(10,Yo(e))===1}function nv(e,t,n){const r=Math.pow(10,n),i=Math.floor(e/r);return Math.ceil(t/r)-i}function QE(e,t){const n=t-e;let r=Yo(n);for(;nv(e,t,r)>10;)r++;for(;nv(e,t,r)<10;)r--;return Math.min(r,Yo(e))}function ZE(e,{min:t,max:n}){t=ct(e.min,t);const r=[],i=Yo(t);let o=QE(t,n),a=o<0?Math.pow(10,Math.abs(o)):1;const s=Math.pow(10,o),l=i>o?Math.pow(10,i):0,u=Math.round((t-l)*a)/a,c=Math.floor((t-l)/s/10)*s*10;let f=Math.floor((u-c)/Math.pow(10,o)),d=ct(e.min,Math.round((l+c+f*Math.pow(10,o))*a)/a);for(;d<n;)r.push({value:d,major:tv(d),significand:f}),f>=10?f=f<15?15:20:f++,f>=20&&(o++,f=2,a=o>=0?1:a),d=Math.round((l+c+f*Math.pow(10,o))*a)/a;const h=ct(e.max,d);return r.push({value:h,major:tv(h),significand:f}),r}class rv extends Sr{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,n){const r=qs.prototype.parse.apply(this,[t,n]);if(r===0){this._zero=!0;return}return Ie(r)&&r>0?r:null}determineDataLimits(){const{min:t,max:n}=this.getMinMax(!0);this.min=Ie(t)?Math.max(0,t):null,this.max=Ie(n)?Math.max(0,n):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!Ie(this._userMin)&&(this.min=t===Jn(this.min,0)?Jn(this.min,-1):Jn(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:n}=this.getUserBounds();let r=this.min,i=this.max;const o=s=>r=t?r:s,a=s=>i=n?i:s;r===i&&(r<=0?(o(1),a(10)):(o(Jn(r,-1)),a(Jn(i,1)))),r<=0&&o(Jn(i,-1)),i<=0&&a(Jn(r,1)),this.min=r,this.max=i}buildTicks(){const t=this.options,n={min:this._userMin,max:this._userMax},r=ZE(n,this);return t.bounds==="ticks"&&U1(r,this,"value"),t.reverse?(r.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),r}getLabelForValue(t){return t===void 0?"0":Qd(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=On(t),this._valueRange=On(this.max)-On(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(On(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const n=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+n*this._valueRange)}}U(rv,"id","logarithmic"),U(rv,"defaults",{ticks:{callback:Sl.formatters.logarithmic,major:{enabled:!0}}});function tf(e){const t=e.ticks;if(t.display&&e.display){const n=We(t.backdropPadding);return Y(t.font&&t.font.size,we.font.size)+n.height}return 0}function qE(e,t,n){return n=ge(n)?n:[n],{w:iS(e,t.string,n),h:n.length*t.lineHeight}}function iv(e,t,n,r,i){return e===r||e===i?{start:t-n/2,end:t+n/2}:e<r||e>i?{start:t-n,end:t}:{start:t,end:t+n}}function JE(e){const t={l:e.left+e._padding.left,r:e.right-e._padding.right,t:e.top+e._padding.top,b:e.bottom-e._padding.bottom},n=Object.assign({},t),r=[],i=[],o=e._pointLabels.length,a=e.options.pointLabels,s=a.centerPointLabels?ke/o:0;for(let l=0;l<o;l++){const u=a.setContext(e.getPointLabelContext(l));i[l]=u.padding;const c=e.getPointPosition(l,e.drawingArea+i[l],s),f=Me(u.font),d=qE(e.ctx,f,e._pointLabels[l]);r[l]=d;const h=Dt(e.getIndexAngle(l)+s),g=Math.round(Gd(h)),m=iv(g,c.x,d.w,0,180),y=iv(g,c.y,d.h,90,270);eA(n,t,h,m,y)}e.setCenterPoint(t.l-n.l,n.r-t.r,t.t-n.t,n.b-t.b),e._pointLabelItems=rA(e,r,i)}function eA(e,t,n,r,i){const o=Math.abs(Math.sin(n)),a=Math.abs(Math.cos(n));let s=0,l=0;r.start<t.l?(s=(t.l-r.start)/o,e.l=Math.min(e.l,t.l-s)):r.end>t.r&&(s=(r.end-t.r)/o,e.r=Math.max(e.r,t.r+s)),i.start<t.t?(l=(t.t-i.start)/a,e.t=Math.min(e.t,t.t-l)):i.end>t.b&&(l=(i.end-t.b)/a,e.b=Math.max(e.b,t.b+l))}function tA(e,t,n){const r=e.drawingArea,{extra:i,additionalAngle:o,padding:a,size:s}=n,l=e.getPointPosition(t,r+i+a,o),u=Math.round(Gd(Dt(l.angle+gt))),c=aA(l.y,s.h,u),f=iA(u),d=oA(l.x,s.w,f);return{visible:!0,x:l.x,y:c,textAlign:f,left:d,top:c,right:d+s.w,bottom:c+s.h}}function nA(e,t){if(!t)return!0;const{left:n,top:r,right:i,bottom:o}=e;return!(fn({x:n,y:r},t)||fn({x:n,y:o},t)||fn({x:i,y:r},t)||fn({x:i,y:o},t))}function rA(e,t,n){const r=[],i=e._pointLabels.length,o=e.options,{centerPointLabels:a,display:s}=o.pointLabels,l={extra:tf(o)/2,additionalAngle:a?ke/i:0};let u;for(let c=0;c<i;c++){l.padding=n[c],l.size=t[c];const f=tA(e,c,l);r.push(f),s==="auto"&&(f.visible=nA(f,u),f.visible&&(u=f))}return r}function iA(e){return e===0||e===180?"center":e<180?"left":"right"}function oA(e,t,n){return n==="right"?e-=t:n==="center"&&(e-=t/2),e}function aA(e,t,n){return n===90||n===270?e-=t/2:(n>270||n<90)&&(e-=t),e}function sA(e,t,n){const{left:r,top:i,right:o,bottom:a}=n,{backdropColor:s}=t;if(!le(s)){const l=ri(t.borderRadius),u=We(t.backdropPadding);e.fillStyle=s;const c=r-u.left,f=i-u.top,d=o-r+u.width,h=a-i+u.height;Object.values(l).some(g=>g!==0)?(e.beginPath(),Ks(e,{x:c,y:f,w:d,h,radius:l}),e.fill()):e.fillRect(c,f,d,h)}}function lA(e,t){const{ctx:n,options:{pointLabels:r}}=e;for(let i=t-1;i>=0;i--){const o=e._pointLabelItems[i];if(!o.visible)continue;const a=r.setContext(e.getPointLabelContext(i));sA(n,a,o);const s=Me(a.font),{x:l,y:u,textAlign:c}=o;_r(n,e._pointLabels[i],l,u+s.lineHeight/2,s,{color:a.color,textAlign:c,textBaseline:"middle"})}}function _b(e,t,n,r){const{ctx:i}=e;if(n)i.arc(e.xCenter,e.yCenter,t,0,Pt);else{let o=e.getPointPosition(0,t);i.moveTo(o.x,o.y);for(let a=1;a<r;a++)o=e.getPointPosition(a,t),i.lineTo(o.x,o.y)}}function uA(e,t,n,r,i){const o=e.ctx,a=t.circular,{color:s,lineWidth:l}=t;!a&&!r||!s||!l||n<0||(o.save(),o.strokeStyle=s,o.lineWidth=l,o.setLineDash(i.dash),o.lineDashOffset=i.dashOffset,o.beginPath(),_b(e,n,a,r),o.closePath(),o.stroke(),o.restore())}function cA(e,t,n){return Kn(e,{label:n,index:t,type:"pointLabel"})}class Ua extends qs{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=We(tf(this.options)/2),n=this.width=this.maxWidth-t.width,r=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+n/2+t.left),this.yCenter=Math.floor(this.top+r/2+t.top),this.drawingArea=Math.floor(Math.min(n,r)/2)}determineDataLimits(){const{min:t,max:n}=this.getMinMax(!1);this.min=Ie(t)&&!isNaN(t)?t:0,this.max=Ie(n)&&!isNaN(n)?n:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/tf(this.options))}generateTickLabels(t){qs.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((n,r)=>{const i=ne(this.options.pointLabels.callback,[n,r],this);return i||i===0?i:""}).filter((n,r)=>this.chart.getDataVisibility(r))}fit(){const t=this.options;t.display&&t.pointLabels.display?JE(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,n,r,i){this.xCenter+=Math.floor((t-n)/2),this.yCenter+=Math.floor((r-i)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,n,r,i))}getIndexAngle(t){const n=Pt/(this._pointLabels.length||1),r=this.options.startAngle||0;return Dt(t*n+In(r))}getDistanceFromCenterForValue(t){if(le(t))return NaN;const n=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*n:(t-this.min)*n}getValueForDistanceFromCenter(t){if(le(t))return NaN;const n=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-n:this.min+n}getPointLabelContext(t){const n=this._pointLabels||[];if(t>=0&&t<n.length){const r=n[t];return cA(this.getContext(),t,r)}}getPointPosition(t,n,r=0){const i=this.getIndexAngle(t)-gt+r;return{x:Math.cos(i)*n+this.xCenter,y:Math.sin(i)*n+this.yCenter,angle:i}}getPointPositionForValue(t,n){return this.getPointPosition(t,this.getDistanceFromCenterForValue(n))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:n,top:r,right:i,bottom:o}=this._pointLabelItems[t];return{left:n,top:r,right:i,bottom:o}}drawBackground(){const{backgroundColor:t,grid:{circular:n}}=this.options;if(t){const r=this.ctx;r.save(),r.beginPath(),_b(this,this.getDistanceFromCenterForValue(this._endValue),n,this._pointLabels.length),r.closePath(),r.fillStyle=t,r.fill(),r.restore()}}drawGrid(){const t=this.ctx,n=this.options,{angleLines:r,grid:i,border:o}=n,a=this._pointLabels.length;let s,l,u;if(n.pointLabels.display&&lA(this,a),i.display&&this.ticks.forEach((c,f)=>{if(f!==0){l=this.getDistanceFromCenterForValue(c.value);const d=this.getContext(f),h=i.setContext(d),g=o.setContext(d);uA(this,h,l,a,g)}}),r.display){for(t.save(),s=a-1;s>=0;s--){const c=r.setContext(this.getPointLabelContext(s)),{color:f,lineWidth:d}=c;!d||!f||(t.lineWidth=d,t.strokeStyle=f,t.setLineDash(c.borderDash),t.lineDashOffset=c.borderDashOffset,l=this.getDistanceFromCenterForValue(n.ticks.reverse?this.min:this.max),u=this.getPointPosition(s,l),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(u.x,u.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,n=this.options,r=n.ticks;if(!r.display)return;const i=this.getIndexAngle(0);let o,a;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(i),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((s,l)=>{if(l===0&&!n.reverse)return;const u=r.setContext(this.getContext(l)),c=Me(u.font);if(o=this.getDistanceFromCenterForValue(this.ticks[l].value),u.showLabelBackdrop){t.font=c.string,a=t.measureText(s.label).width,t.fillStyle=u.backdropColor;const f=We(u.backdropPadding);t.fillRect(-a/2-f.left,-o-c.size/2-f.top,a+f.width,c.size+f.height)}_r(t,s.label,0,-o,c,{color:u.color,strokeColor:u.textStrokeColor,strokeWidth:u.textStrokeWidth})}),t.restore()}drawTitle(){}}U(Ua,"id","radialLinear"),U(Ua,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Sl.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),U(Ua,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),U(Ua,"descriptors",{angleLines:{_fallback:"grid"}});const Al={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},et=Object.keys(Al);function ov(e,t){return e-t}function av(e,t){if(le(t))return null;const n=e._adapter,{parser:r,round:i,isoWeekday:o}=e._parseOpts;let a=t;return typeof r=="function"&&(a=r(a)),Ie(a)||(a=typeof r=="string"?n.parse(a,r):n.parse(a)),a===null?null:(i&&(a=i==="week"&&(Ho(o)||o===!0)?n.startOf(a,"isoWeek",o):n.startOf(a,i)),+a)}function sv(e,t,n,r){const i=et.length;for(let o=et.indexOf(e);o<i-1;++o){const a=Al[et[o]],s=a.steps?a.steps:Number.MAX_SAFE_INTEGER;if(a.common&&Math.ceil((n-t)/(s*a.size))<=r)return et[o]}return et[i-1]}function fA(e,t,n,r,i){for(let o=et.length-1;o>=et.indexOf(n);o--){const a=et[o];if(Al[a].common&&e._adapter.diff(i,r,a)>=t-1)return a}return et[n?et.indexOf(n):0]}function dA(e){for(let t=et.indexOf(e)+1,n=et.length;t<n;++t)if(Al[et[t]].common)return et[t]}function lv(e,t,n){if(!n)e[t]=!0;else if(n.length){const{lo:r,hi:i}=Yd(n,t),o=n[r]>=t?n[r]:n[i];e[o]=!0}}function hA(e,t,n,r){const i=e._adapter,o=+i.startOf(t[0].value,r),a=t[t.length-1].value;let s,l;for(s=o;s<=a;s=+i.add(s,1,r))l=n[s],l>=0&&(t[l].major=!0);return t}function uv(e,t,n){const r=[],i={},o=t.length;let a,s;for(a=0;a<o;++a)s=t[a],i[s]=a,r.push({value:s,major:!1});return o===0||!n?r:hA(e,r,i,n)}class Js extends Sr{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,n={}){const r=t.time||(t.time={}),i=this._adapter=new fk._date(t.adapters.date);i.init(n),yo(r.displayFormats,i.formats()),this._parseOpts={parser:r.parser,round:r.round,isoWeekday:r.isoWeekday},super.init(t),this._normalized=n.normalized}parse(t,n){return t===void 0?null:av(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,n=this._adapter,r=t.time.unit||"day";let{min:i,max:o,minDefined:a,maxDefined:s}=this.getUserBounds();function l(u){!a&&!isNaN(u.min)&&(i=Math.min(i,u.min)),!s&&!isNaN(u.max)&&(o=Math.max(o,u.max))}(!a||!s)&&(l(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&l(this.getMinMax(!1))),i=Ie(i)&&!isNaN(i)?i:+n.startOf(Date.now(),r),o=Ie(o)&&!isNaN(o)?o:+n.endOf(Date.now(),r)+1,this.min=Math.min(i,o-1),this.max=Math.max(i+1,o)}_getLabelBounds(){const t=this.getLabelTimestamps();let n=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;return t.length&&(n=t[0],r=t[t.length-1]),{min:n,max:r}}buildTicks(){const t=this.options,n=t.time,r=t.ticks,i=r.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&i.length&&(this.min=this._userMin||i[0],this.max=this._userMax||i[i.length-1]);const o=this.min,a=this.max,s=U2(i,o,a);return this._unit=n.unit||(r.autoSkip?sv(n.minUnit,this.min,this.max,this._getLabelCapacity(o)):fA(this,s.length,n.minUnit,this.min,this.max)),this._majorUnit=!r.major.enabled||this._unit==="year"?void 0:dA(this._unit),this.initOffsets(i),t.reverse&&s.reverse(),uv(this,s,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let n=0,r=0,i,o;this.options.offset&&t.length&&(i=this.getDecimalForValue(t[0]),t.length===1?n=1-i:n=(this.getDecimalForValue(t[1])-i)/2,o=this.getDecimalForValue(t[t.length-1]),t.length===1?r=o:r=(o-this.getDecimalForValue(t[t.length-2]))/2);const a=t.length<3?.5:.25;n=At(n,0,a),r=At(r,0,a),this._offsets={start:n,end:r,factor:1/(n+1+r)}}_generate(){const t=this._adapter,n=this.min,r=this.max,i=this.options,o=i.time,a=o.unit||sv(o.minUnit,n,r,this._getLabelCapacity(n)),s=Y(i.ticks.stepSize,1),l=a==="week"?o.isoWeekday:!1,u=Ho(l)||l===!0,c={};let f=n,d,h;if(u&&(f=+t.startOf(f,"isoWeek",l)),f=+t.startOf(f,u?"day":a),t.diff(r,n,a)>1e5*s)throw new Error(n+" and "+r+" are too far apart with stepSize of "+s+" "+a);const g=i.ticks.source==="data"&&this.getDataTimestamps();for(d=f,h=0;d<r;d=+t.add(d,s,a),h++)lv(c,d,g);return(d===r||i.bounds==="ticks"||h===1)&&lv(c,d,g),Object.keys(c).sort(ov).map(m=>+m)}getLabelForValue(t){const n=this._adapter,r=this.options.time;return r.tooltipFormat?n.format(t,r.tooltipFormat):n.format(t,r.displayFormats.datetime)}format(t,n){const i=this.options.time.displayFormats,o=this._unit,a=n||i[o];return this._adapter.format(t,a)}_tickFormatFunction(t,n,r,i){const o=this.options,a=o.ticks.callback;if(a)return ne(a,[t,n,r],this);const s=o.time.displayFormats,l=this._unit,u=this._majorUnit,c=l&&s[l],f=u&&s[u],d=r[n],h=u&&f&&d&&d.major;return this._adapter.format(t,i||(h?f:c))}generateTickLabels(t){let n,r,i;for(n=0,r=t.length;n<r;++n)i=t[n],i.label=this._tickFormatFunction(i.value,n,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const n=this._offsets,r=this.getDecimalForValue(t);return this.getPixelForDecimal((n.start+r)*n.factor)}getValueForPixel(t){const n=this._offsets,r=this.getDecimalForPixel(t)/n.factor-n.end;return this.min+r*(this.max-this.min)}_getLabelSize(t){const n=this.options.ticks,r=this.ctx.measureText(t).width,i=In(this.isHorizontal()?n.maxRotation:n.minRotation),o=Math.cos(i),a=Math.sin(i),s=this._resolveTickFontOptions(0).size;return{w:r*o+s*a,h:r*a+s*o}}_getLabelCapacity(t){const n=this.options.time,r=n.displayFormats,i=r[n.unit]||r.millisecond,o=this._tickFormatFunction(t,0,uv(this,[t],this._majorUnit),i),a=this._getLabelSize(o),s=Math.floor(this.isHorizontal()?this.width/a.w:this.height/a.h)-1;return s>0?s:1}getDataTimestamps(){let t=this._cache.data||[],n,r;if(t.length)return t;const i=this.getMatchingVisibleMetas();if(this._normalized&&i.length)return this._cache.data=i[0].controller.getAllParsedValues(this);for(n=0,r=i.length;n<r;++n)t=t.concat(i[n].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let n,r;if(t.length)return t;const i=this.getLabels();for(n=0,r=i.length;n<r;++n)t.push(av(this,i[n]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return W2(t.sort(ov))}}U(Js,"id","time"),U(Js,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function Va(e,t,n){let r=0,i=e.length-1,o,a,s,l;n?(t>=e[r].pos&&t<=e[i].pos&&({lo:r,hi:i}=lr(e,"pos",t)),{pos:o,time:s}=e[r],{pos:a,time:l}=e[i]):(t>=e[r].time&&t<=e[i].time&&({lo:r,hi:i}=lr(e,"time",t)),{time:o,pos:s}=e[r],{time:a,pos:l}=e[i]);const u=a-o;return u?s+(l-s)*(t-o)/u:s}class cv extends Js{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),n=this._table=this.buildLookupTable(t);this._minPos=Va(n,this.min),this._tableRange=Va(n,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:n,max:r}=this,i=[],o=[];let a,s,l,u,c;for(a=0,s=t.length;a<s;++a)u=t[a],u>=n&&u<=r&&i.push(u);if(i.length<2)return[{time:n,pos:0},{time:r,pos:1}];for(a=0,s=i.length;a<s;++a)c=i[a+1],l=i[a-1],u=i[a],Math.round((c+l)/2)!==u&&o.push({time:u,pos:a/(s-1)});return o}_generate(){const t=this.min,n=this.max;let r=super.getDataTimestamps();return(!r.includes(t)||!r.length)&&r.splice(0,0,t),(!r.includes(n)||r.length===1)&&r.push(n),r.sort((i,o)=>i-o)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const n=this.getDataTimestamps(),r=this.getLabelTimestamps();return n.length&&r.length?t=this.normalize(n.concat(r)):t=n.length?n:r,t=this._cache.all=t,t}getDecimalForValue(t){return(Va(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const n=this._offsets,r=this.getDecimalForPixel(t)/n.factor-n.end;return Va(this._table,r*this._tableRange+this._minPos,!0)}}U(cv,"id","timeseries"),U(cv,"defaults",Js.defaults);const wb="label";function fv(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function pA(e,t){const n=e.options;n&&t&&Object.assign(n,t)}function xb(e,t){e.labels=t}function Sb(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:wb;const r=[];e.datasets=t.map(i=>{const o=e.datasets.find(a=>a[n]===i[n]);return!o||!i.data||r.includes(o)?{...i}:(r.push(o),Object.assign(o,i),o)})}function gA(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:wb;const n={labels:[],datasets:[]};return xb(n,e.labels),Sb(n,e.datasets,t),n}function vA(e,t){const{height:n=150,width:r=300,redraw:i=!1,datasetIdKey:o,type:a,data:s,options:l,plugins:u=[],fallbackContent:c,updateMode:f,...d}=e,h=W.useRef(null),g=W.useRef(),m=()=>{h.current&&(g.current=new El(h.current,{type:a,data:gA(s,o),options:l&&{...l},plugins:u}),fv(t,g.current))},y=()=>{fv(t,null),g.current&&(g.current.destroy(),g.current=null)};return W.useEffect(()=>{!i&&g.current&&l&&pA(g.current,l)},[i,l]),W.useEffect(()=>{!i&&g.current&&xb(g.current.config.data,s.labels)},[i,s.labels]),W.useEffect(()=>{!i&&g.current&&s.datasets&&Sb(g.current.config.data,s.datasets,o)},[i,s.datasets]),W.useEffect(()=>{g.current&&(i?(y(),setTimeout(m)):g.current.update(f))},[i,l,s.labels,s.datasets,f]),W.useEffect(()=>{g.current&&(y(),setTimeout(m))},[a]),W.useEffect(()=>(m(),()=>y()),[]),Zf.createElement("canvas",Object.assign({ref:h,role:"img",height:n,width:r},d),c)}const mA=W.forwardRef(vA);function yA(e,t){return El.register(t),W.forwardRef((n,r)=>Zf.createElement(mA,Object.assign({},n,{ref:r,type:e})))}const Wa=yA("line",hs);/**
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
*/var bA=typeof Object.defineProperty=="function"?Object.defineProperty:null,$A=bA;/**
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
*/var _A=$A;function wA(){try{return _A({},"x",{}),!0}catch{return!1}}var xA=wA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var SA=Object.defineProperty,kA=SA;/**
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
*/function EA(e){return typeof e=="number"}var kb=EA;/**
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
*/function AA(e){return e[0]==="-"}function dv(e){var t="",n;for(n=0;n<e;n++)t+="0";return t}function TA(e,t,n){var r=!1,i=t-e.length;return i<0||(AA(e)&&(r=!0,e=e.substr(1)),e=n?e+dv(i):dv(i)+e,r&&(e="-"+e)),e}var Eb=TA;/**
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
*/var CA=kb,hv=Eb,PA=String.prototype.toLowerCase,pv=String.prototype.toUpperCase;function MA(e){var t,n,r;switch(e.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;case"d":case"i":case"u":default:t=10;break}if(n=e.arg,r=parseInt(n,10),!isFinite(r)){if(!CA(n))throw new Error("invalid integer. Value: "+n);r=0}return r<0&&(e.specifier==="u"||t!==10)&&(r=4294967295+r+1),r<0?(n=(-r).toString(t),e.precision&&(n=hv(n,e.precision,e.padRight)),n="-"+n):(n=r.toString(t),!r&&!e.precision?n="":e.precision&&(n=hv(n,e.precision,e.padRight)),e.sign&&(n=e.sign+n)),t===16&&(e.alternate&&(n="0x"+n),n=e.specifier===pv.call(e.specifier)?pv.call(n):PA.call(n)),t===8&&e.alternate&&n.charAt(0)!=="0"&&(n="0"+n),n}var OA=MA;/**
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
*/function IA(e){return typeof e=="string"}var LA=IA;/**
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
*/var RA=kb,NA=Math.abs,FA=String.prototype.toLowerCase,gv=String.prototype.toUpperCase,er=String.prototype.replace,DA=/e\+(\d)$/,jA=/e-(\d)$/,zA=/^(\d+)$/,BA=/^(\d+)e/,UA=/\.0$/,VA=/\.0*e/,WA=/(\..*[^0])0*e/;function HA(e){var t,n,r=parseFloat(e.arg);if(!isFinite(r)){if(!RA(e.arg))throw new Error("invalid floating-point number. Value: "+n);r=e.arg}switch(e.specifier){case"e":case"E":n=r.toExponential(e.precision);break;case"f":case"F":n=r.toFixed(e.precision);break;case"g":case"G":NA(r)<1e-4?(t=e.precision,t>0&&(t-=1),n=r.toExponential(t)):n=r.toPrecision(e.precision),e.alternate||(n=er.call(n,WA,"$1e"),n=er.call(n,VA,"e"),n=er.call(n,UA,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=er.call(n,DA,"e+0$1"),n=er.call(n,jA,"e-0$1"),e.alternate&&(n=er.call(n,zA,"$1."),n=er.call(n,BA,"$1.e")),r>=0&&e.sign&&(n=e.sign+n),n=e.specifier===gv.call(e.specifier)?gv.call(n):FA.call(n),n}var GA=HA;/**
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
*/function vv(e){var t="",n;for(n=0;n<e;n++)t+=" ";return t}function YA(e,t,n){var r=t-e.length;return r<0||(e=n?e+vv(r):vv(r)+e),e}var XA=YA;/**
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
*/var KA=OA,QA=LA,ZA=GA,qA=XA,JA=Eb,eT=String.fromCharCode,Ha=isNaN,tT=Array.isArray;function nT(e){var t={};return t.specifier=e.specifier,t.precision=e.precision===void 0?1:e.precision,t.width=e.width,t.flags=e.flags||"",t.mapping=e.mapping,t}function rT(e){var t,n,r,i,o,a,s,l,u;if(!tT(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",s=1,l=0;l<e.length;l++)if(r=e[l],QA(r))a+=r;else{if(t=r.precision!==void 0,r=nT(r),!r.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+r+"`.");for(r.mapping&&(s=r.mapping),n=r.flags,u=0;u<n.length;u++)switch(i=n.charAt(u),i){case" ":r.sign=" ";break;case"+":r.sign="+";break;case"-":r.padRight=!0,r.padZeros=!1;break;case"0":r.padZeros=n.indexOf("-")<0;break;case"#":r.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if(r.width==="*"){if(r.width=parseInt(arguments[s],10),s+=1,Ha(r.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+r.width+"`.");r.width<0&&(r.padRight=!0,r.width=-r.width)}if(t&&r.precision==="*"){if(r.precision=parseInt(arguments[s],10),s+=1,Ha(r.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+r.precision+"`.");r.precision<0&&(r.precision=1,t=!1)}switch(r.arg=arguments[s],r.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(r.padZeros=!1),r.arg=KA(r);break;case"s":r.maxWidth=t?r.precision:-1;break;case"c":if(!Ha(r.arg)){if(o=parseInt(r.arg,10),o<0||o>127)throw new Error("invalid character code. Value: "+r.arg);r.arg=Ha(o)?String(r.arg):eT(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(r.precision=6),r.arg=ZA(r);break;default:throw new Error("invalid specifier: "+r.specifier)}r.maxWidth>=0&&r.arg.length>r.maxWidth&&(r.arg=r.arg.substring(0,r.maxWidth)),r.padZeros?r.arg=JA(r.arg,r.width||r.precision,r.padRight):r.width&&(r.arg=qA(r.arg,r.width,r.padRight)),a+=r.arg||"",s+=1}return a}var iT=rT;/**
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
*/var oT=iT,aT=oT;/**
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
*/var Ga=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function sT(e){var t={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return e[4]==="."&&e[5]===void 0&&(t.precision="1"),t}function lT(e){var t,n,r,i;for(n=[],i=0,r=Ga.exec(e);r;)t=e.slice(i,Ga.lastIndex-r[0].length),t.length&&n.push(t),n.push(sT(r)),i=Ga.lastIndex,r=Ga.exec(e);return t=e.slice(i),t.length&&n.push(t),n}var uT=lT;/**
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
*/var cT=uT,fT=cT;/**
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
*/function dT(e){return typeof e=="string"}var hT=dT;/**
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
*/var pT=aT,gT=fT,vT=hT;function Ab(e){var t,n,r;if(!vT(e))throw new TypeError(Ab("invalid argument. First argument must be a string. Value: `%s`.",e));for(t=gT(e),n=new Array(arguments.length),n[0]=t,r=1;r<n.length;r++)n[r]=arguments[r];return pT.apply(null,n)}var mT=Ab;/**
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
*/var yT=mT,ie=yT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mv=ie,Si=Object.prototype,yv=Si.toString,bv=Si.__defineGetter__,$v=Si.__defineSetter__,bT=Si.__lookupGetter__,$T=Si.__lookupSetter__;function _T(e,t,n){var r,i,o,a;if(typeof e!="object"||e===null||yv.call(e)==="[object Array]")throw new TypeError(mv("invalid argument. First argument must be an object. Value: `%s`.",e));if(typeof n!="object"||n===null||yv.call(n)==="[object Array]")throw new TypeError(mv("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if(i="value"in n,i&&(bT.call(e,t)||$T.call(e,t)?(r=e.__proto__,e.__proto__=Si,delete e[t],e[t]=n.value,e.__proto__=r):e[t]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&bv&&bv.call(e,t,n.get),a&&$v&&$v.call(e,t,n.set),e}var wT=_T;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xT=xA,ST=kA,kT=wT,nf;xT()?nf=ST:nf=kT;var ih=nf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ET=ih;function AT(e,t,n){ET(e,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var TT=AT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var CT=TT,Vt=CT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var PT=ih;function MT(e,t,n){PT(e,t,{configurable:!1,enumerable:!1,get:n})}var OT=MT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var IT=OT,Tb=IT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var LT=ih;function RT(e,t,n,r){LT(e,t,{configurable:!1,enumerable:!1,get:n,set:r})}var NT=RT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var FT=NT,Cb=FT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function DT(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}var jT=DT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zT=jT,BT=zT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var UT=BT,VT=UT();function WT(){return VT&&typeof Symbol.toStringTag=="symbol"}var HT=WT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var GT=HT,oh=GT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var YT=Object.prototype.toString,Pb=YT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var XT=Pb;function KT(e){return XT.call(e)}var QT=KT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ZT=Object.prototype.hasOwnProperty;function qT(e,t){return e==null?!1:ZT.call(e,t)}var JT=qT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eC=JT,Tl=eC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tC=typeof Symbol=="function"?Symbol:void 0,nC=tC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rC=nC,kr=rC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _v=kr,iC=typeof _v=="function"?_v.toStringTag:"",oC=iC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aC=Tl,Hi=oC,Tu=Pb;function sC(e){var t,n,r;if(e==null)return Tu.call(e);n=e[Hi],t=aC(e,Hi);try{e[Hi]=void 0}catch{return Tu.call(e)}return r=Tu.call(e),t?e[Hi]=n:delete e[Hi],r}var lC=sC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uC=oh,cC=QT,fC=lC,rf;uC()?rf=fC:rf=cC;var lt=rf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dC=lt,of;function hC(e){return dC(e)==="[object Array]"}Array.isArray?of=Array.isArray:of=hC;var pC=of;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gC=pC,vC=gC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mC=vC;function yC(e){return typeof e=="object"&&e!==null&&!mC(e)}var bC=yC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $C=bC,_C=$C;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wC=/./,xC=wC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function SC(e){return typeof e=="boolean"}var Mb=SC;/**
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
*/var kC=Boolean,EC=kC;/**
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
*/var AC=EC,ah=AC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var TC=Boolean.prototype.toString,CC=TC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var PC=CC;function MC(e){try{return PC.call(e),!0}catch{return!1}}var OC=MC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var IC=oh,LC=lt,RC=ah,NC=OC,FC=IC();function DC(e){return typeof e=="object"?e instanceof RC?!0:FC?NC(e):LC(e)==="[object Boolean]":!1}var Ob=DC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jC=Mb,zC=Ob;function BC(e){return jC(e)||zC(e)}var UC=BC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ib=Vt,sh=UC,VC=Mb,WC=Ob;Ib(sh,"isPrimitive",VC);Ib(sh,"isObject",WC);var Lb=sh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function HC(){return new Function("return this;")()}var GC=HC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var YC=typeof self=="object"?self:null,XC=YC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var KC=typeof window=="object"?window:null,QC=KC;/**
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
*/var ZC=typeof globalThis=="object"?globalThis:null,qC=ZC;/**
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
*/var JC=Lb.isPrimitive,e3=ie,t3=GC,wv=XC,xv=QC,Sv=qC;function n3(e){if(arguments.length){if(!JC(e))throw new TypeError(e3("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return t3()}if(Sv)return Sv;if(wv)return wv;if(xv)return xv;throw new Error("unexpected error. Unable to resolve global object.")}var r3=n3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var i3=r3,kv=i3(),o3=kv.document&&kv.document.childNodes,a3=o3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var s3=Int8Array,l3=s3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u3=xC,c3=a3,f3=l3;function d3(){return typeof u3=="function"||typeof f3=="object"||typeof c3=="function"}var h3=d3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function p3(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}var g3=p3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var v3=g3,m3=v3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y3=m3,b3=y3();function $3(){return b3&&typeof Symbol.toStringTag=="symbol"}var _3=$3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var w3=_3,x3=w3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var S3=Object.prototype.toString,Rb=S3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k3=Rb;function E3(e){return k3.call(e)}var A3=E3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var T3=Object.prototype.hasOwnProperty;function C3(e,t){return e==null?!1:T3.call(e,t)}var P3=C3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var M3=P3,O3=M3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ev=kr,I3=typeof Ev=="function"?Ev.toStringTag:"",L3=I3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var R3=O3,Gi=L3,Cu=Rb;function N3(e){var t,n,r;if(e==null)return Cu.call(e);n=e[Gi],t=R3(e,Gi);try{e[Gi]=void 0}catch{return Cu.call(e)}return r=Cu.call(e),t?e[Gi]=n:delete e[Gi],r}var F3=N3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D3=x3,j3=A3,z3=F3,af;D3()?af=z3:af=j3;var Nb=af;/**
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
*/var B3=typeof Object.defineProperty=="function"?Object.defineProperty:null,U3=B3;/**
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
*/var V3=U3;function W3(){try{return V3({},"x",{}),!0}catch{return!1}}var H3=W3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var G3=Object.defineProperty,Y3=G3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Av=ie,ki=Object.prototype,Tv=ki.toString,Cv=ki.__defineGetter__,Pv=ki.__defineSetter__,X3=ki.__lookupGetter__,K3=ki.__lookupSetter__;function Q3(e,t,n){var r,i,o,a;if(typeof e!="object"||e===null||Tv.call(e)==="[object Array]")throw new TypeError(Av("invalid argument. First argument must be an object. Value: `%s`.",e));if(typeof n!="object"||n===null||Tv.call(n)==="[object Array]")throw new TypeError(Av("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if(i="value"in n,i&&(X3.call(e,t)||K3.call(e,t)?(r=e.__proto__,e.__proto__=ki,delete e[t],e[t]=n.value,e.__proto__=r):e[t]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&Cv&&Cv.call(e,t,n.get),a&&Pv&&Pv.call(e,t,n.set),e}var Z3=Q3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var q3=H3,J3=Y3,eP=Z3,sf;q3()?sf=J3:sf=eP;var tP=sf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nP=tP;function rP(e,t,n){nP(e,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var iP=rP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oP=iP,Fb=oP;/**
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
*/function aP(){return/^\s*function\s*([^(]*)/i}var Db=aP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sP=Db,lP=sP(),uP=lP;/**
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
*/var cP=Fb,jb=Db,fP=uP;cP(jb,"REGEXP",fP);var dP=jb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hP=Nb,lf;function pP(e){return hP(e)==="[object Array]"}Array.isArray?lf=Array.isArray:lf=pP;var gP=lf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vP=gP,mP=vP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yP=mP,bP=ie;function $P(e){if(typeof e!="function")throw new TypeError(bP("invalid argument. Must provide a function. Value: `%s`.",e));return t;function t(n){var r,i;if(!yP(n)||(r=n.length,r===0))return!1;for(i=0;i<r;i++)if(e(n[i])===!1)return!1;return!0}}var _P=$P;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wP=_P,xP=wP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function SP(e){return e!==null&&typeof e=="object"}var kP=SP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var EP=Fb,AP=xP,lh=kP,TP=AP(lh);EP(lh,"isObjectLikeArray",TP);var CP=lh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var PP=CP;function MP(e){return PP(e)&&(e._isBuffer||e.constructor&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e))}var OP=MP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var IP=OP,LP=IP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var RP=Nb,NP=dP.REGEXP,FP=LP;function DP(e){var t,n,r;if(n=RP(e).slice(8,-1),(n==="Object"||n==="Error")&&e.constructor){if(r=e.constructor,typeof r.name=="string")return r.name;if(t=NP.exec(r.toString()),t)return t[1]}return FP(e)?"Buffer":n}var jP=DP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zP=jP,Zt=zP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var BP=Zt;function UP(e){var t;return e===null?"null":(t=typeof e,t==="object"?BP(e).toLowerCase():t)}var VP=UP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var WP=Zt;function HP(e){return WP(e).toLowerCase()}var GP=HP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var YP=h3,XP=VP,KP=GP,QP=YP()?KP:XP,ZP=QP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qP=ZP;function JP(e){return qP(e)==="function"}var eM=JP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tM=eM,Cl=tM;/**
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
*/var nM=Object,rM=nM;/**
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
*/var iM=rM,oM=iM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aM=Object.getPrototypeOf,sM=aM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function lM(e){return e.__proto__}var uM=lM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cM=lt,fM=uM;function dM(e){var t=fM(e);return t||t===null?t:cM(e.constructor)==="[object Function]"?e.constructor.prototype:e instanceof Object?Object.prototype:null}var hM=dM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pM=Cl,gM=sM,vM=hM,uf;pM(Object.getPrototypeOf)?uf=gM:uf=vM;var mM=uf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yM=oM,bM=mM;function $M(e){return e==null?null:(e=yM(e),bM(e))}var _M=$M;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wM=_M,Pl=wM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xM=_C,Mv=Cl,SM=Pl,ms=Tl,kM=lt,EM=Object.prototype;function AM(e){var t;for(t in e)if(!ms(e,t))return!1;return!0}function TM(e){var t;return xM(e)?(t=SM(e),t?!ms(e,"constructor")&&ms(t,"constructor")&&Mv(t.constructor)&&kM(t.constructor)==="[object Function]"&&ms(t,"isPrototypeOf")&&Mv(t.isPrototypeOf)&&(t===EM||AM(e)):!0):!1}var CM=TM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var PM=CM,zb=PM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function MM(e){return t;function t(){return e}}var OM=MM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var IM=OM,LM=IM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function RM(){}var NM=RM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var FM=NM,DM=FM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jM=Math.floor,zM=jM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var BM=zM,Bb=BM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var UM=Bb;function VM(e){return UM(e)===e}var WM=VM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var HM=WM,Ub=HM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var GM=9007199254740991,YM=GM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var XM=Ub,KM=YM;function QM(e){return typeof e=="object"&&e!==null&&typeof e.length=="number"&&XM(e.length)&&e.length>=0&&e.length<=KM}var ZM=QM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qM=ZM,JM=qM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eO=lt,tO=typeof Uint32Array=="function";function nO(e){return tO&&e instanceof Uint32Array||eO(e)==="[object Uint32Array]"}var rO=nO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iO=rO,Vb=iO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function oO(e){return typeof e=="number"}var Wb=oO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aO=Number;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sO=aO,uh=sO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lO=uh,uO=lO.prototype.toString,cO=uO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fO=cO;function dO(e){try{return fO.call(e),!0}catch{return!1}}var hO=dO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pO=oh,gO=lt,vO=uh,mO=hO,yO=pO();function bO(e){return typeof e=="object"?e instanceof vO?!0:yO?mO(e):gO(e)==="[object Number]":!1}var Hb=bO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $O=Wb,_O=Hb;function wO(e){return $O(e)||_O(e)}var xO=wO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gb=Vt,ch=xO,SO=Wb,kO=Hb;Gb(ch,"isPrimitive",SO);Gb(ch,"isObject",kO);var ta=ch;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var EO=Number.POSITIVE_INFINITY,Ml=EO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var AO=uh,TO=AO.NEGATIVE_INFINITY,CO=TO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var PO=Ml,MO=CO,OO=Ub;function IO(e){return e<PO&&e>MO&&OO(e)}var Yb=IO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var LO=ta.isPrimitive,RO=Yb;function NO(e){return LO(e)&&RO(e)}var Xb=NO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var FO=ta.isObject,DO=Yb;function jO(e){return FO(e)&&DO(e.valueOf())}var Kb=jO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zO=Xb,BO=Kb;function UO(e){return zO(e)||BO(e)}var VO=UO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qb=Vt,fh=VO,WO=Xb,HO=Kb;Qb(fh,"isPrimitive",WO);Qb(fh,"isObject",HO);var Zb=fh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var GO=Zb.isPrimitive;function YO(e){return GO(e)&&e>0}var qb=YO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var XO=Zb.isObject;function KO(e){return XO(e)&&e.valueOf()>0}var Jb=KO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var QO=qb,ZO=Jb;function qO(e){return QO(e)||ZO(e)}var JO=qO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e$=Vt,dh=JO,eI=qb,tI=Jb;e$(dh,"isPrimitive",eI);e$(dh,"isObject",tI);var nI=dh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rI=9007199254740991,iI=rI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oI=4294967295,hh=oI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aI=typeof Uint32Array=="function"?Uint32Array:null,sI=aI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lI=Vb,Pu=hh,Ov=sI;function uI(){var e,t;if(typeof Ov!="function")return!1;try{t=[1,3.14,-3.14,Pu+1,Pu+2],t=new Ov(t),e=lI(t)&&t[0]===1&&t[1]===3&&t[2]===Pu-2&&t[3]===0&&t[4]===1}catch{e=!1}return e}var cI=uI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fI=cI,dI=fI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hI=typeof Uint32Array=="function"?Uint32Array:void 0,pI=hI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function gI(){throw new Error("not implemented")}var vI=gI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mI=dI,yI=pI,bI=vI,cf;mI()?cf=yI:cf=bI;var ph=cf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $I=Ml;function _I(e){return e===0&&1/e===$I}var wI=_I;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xI=wI,SI=xI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function kI(e){return e!==e}var EI=kI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var AI=EI,Ol=AI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var TI=SI,Iv=Ol,Mu=Ml;function CI(e,t){return Iv(e)||Iv(t)?NaN:e===Mu||t===Mu?Mu:e===t&&e===0?TI(e)?e:t:e>t?e:t}var PI=CI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var MI=PI,OI=MI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lv=65535;function II(e,t){var n,r,i,o,a,s;return e>>>=0,t>>>=0,i=e>>>16>>>0,o=t>>>16>>>0,a=(e&Lv)>>>0,s=(t&Lv)>>>0,n=a*s>>>0,r=i*s+a*o<<16>>>0,n+r>>>0}var LI=II;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var RI=LI,NI=RI;/**
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
*/var Rv="function";function FI(e){return typeof e.get===Rv&&typeof e.set===Rv}var DI=FI;/**
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
*/var jI=DI,zI=jI;/**
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
*/var Nv={float64:BI,float32:UI,int32:VI,int16:WI,int8:HI,uint32:GI,uint16:YI,uint8:XI,uint8c:KI,generic:QI,default:ZI};function BI(e,t){return e[t]}function UI(e,t){return e[t]}function VI(e,t){return e[t]}function WI(e,t){return e[t]}function HI(e,t){return e[t]}function GI(e,t){return e[t]}function YI(e,t){return e[t]}function XI(e,t){return e[t]}function KI(e,t){return e[t]}function QI(e,t){return e[t]}function ZI(e,t){return e[t]}function qI(e){var t=Nv[e];return typeof t=="function"?t:Nv.default}var JI=qI;/**
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
*/var e4=JI,gh=e4;/**
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
*/var Fv={float64:t4,float32:n4,int32:r4,int16:i4,int8:o4,uint32:a4,uint16:s4,uint8:l4,uint8c:u4,generic:c4,default:f4};function t4(e,t,n){e[t]=n}function n4(e,t,n){e[t]=n}function r4(e,t,n){e[t]=n}function i4(e,t,n){e[t]=n}function o4(e,t,n){e[t]=n}function a4(e,t,n){e[t]=n}function s4(e,t,n){e[t]=n}function l4(e,t,n){e[t]=n}function u4(e,t,n){e[t]=n}function c4(e,t,n){e[t]=n}function f4(e,t,n){e[t]=n}function d4(e){var t=Fv[e];return typeof t=="function"?t:Fv.default}var h4=d4;/**
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
*/var p4=h4,g4=p4;/**
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
*/var Dv={complex128:v4,complex64:m4,default:y4};function v4(e,t){return e.get(t)}function m4(e,t){return e.get(t)}function y4(e,t){return e.get(t)}function b4(e){var t=Dv[e];return typeof t=="function"?t:Dv.default}var $4=b4;/**
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
*/var _4=$4,vh=_4;/**
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
*/var jv={complex128:w4,complex64:x4,default:S4};function w4(e,t,n){e.set(n,t)}function x4(e,t,n){e.set(n,t)}function S4(e,t,n){e.set(n,t)}function k4(e){var t=jv[e];return typeof t=="function"?t:jv.default}var E4=k4;/**
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
*/var A4=E4,T4=A4;/**
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
*/var C4=typeof Object.defineProperty=="function"?Object.defineProperty:null,P4=C4;/**
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
*/var M4=P4;function O4(){try{return M4({},"x",{}),!0}catch{return!1}}var I4=O4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var L4=Object.defineProperty,R4=L4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zv=ie,Ei=Object.prototype,Bv=Ei.toString,Uv=Ei.__defineGetter__,Vv=Ei.__defineSetter__,N4=Ei.__lookupGetter__,F4=Ei.__lookupSetter__;function D4(e,t,n){var r,i,o,a;if(typeof e!="object"||e===null||Bv.call(e)==="[object Array]")throw new TypeError(zv("invalid argument. First argument must be an object. Value: `%s`.",e));if(typeof n!="object"||n===null||Bv.call(n)==="[object Array]")throw new TypeError(zv("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if(i="value"in n,i&&(N4.call(e,t)||F4.call(e,t)?(r=e.__proto__,e.__proto__=Ei,delete e[t],e[t]=n.value,e.__proto__=r):e[t]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&Uv&&Uv.call(e,t,n.get),a&&Vv&&Vv.call(e,t,n.set),e}var j4=D4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var z4=I4,B4=R4,U4=j4,ff;z4()?ff=B4:ff=U4;var V4=ff;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var W4=V4;function H4(e,t,n){W4(e,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var G4=H4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Y4=G4,X4=Y4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function K4(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}var Q4=K4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Z4=Q4,q4=Z4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var J4=q4,eL=J4();function tL(){return eL&&typeof Symbol.toStringTag=="symbol"}var nL=tL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rL=nL,iL=rL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oL=Object.prototype.toString,t$=oL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aL=t$;function sL(e){return aL.call(e)}var lL=sL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uL=Object.prototype.hasOwnProperty;function cL(e,t){return e==null?!1:uL.call(e,t)}var fL=cL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dL=fL,hL=dL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wv=kr,pL=typeof Wv=="function"?Wv.toStringTag:"",gL=pL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vL=hL,Yi=gL,Ou=t$;function mL(e){var t,n,r;if(e==null)return Ou.call(e);n=e[Yi],t=vL(e,Yi);try{e[Yi]=void 0}catch{return Ou.call(e)}return r=Ou.call(e),t?e[Yi]=n:delete e[Yi],r}var yL=mL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bL=iL,$L=lL,_L=yL,df;bL()?df=_L:df=$L;var qt=df;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wL=qt,hf;function xL(e){return wL(e)==="[object Array]"}Array.isArray?hf=Array.isArray:hf=xL;var SL=hf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kL=SL,n$=kL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var EL=n$,AL=ie;function TL(e){if(typeof e!="function")throw new TypeError(AL("invalid argument. Must provide a function. Value: `%s`.",e));return t;function t(n){var r,i;if(!EL(n)||(r=n.length,r===0))return!1;for(i=0;i<r;i++)if(e(n[i])===!1)return!1;return!0}}var CL=TL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var PL=CL,ML=PL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function OL(e){return e!==null&&typeof e=="object"}var IL=OL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var LL=X4,RL=ML,mh=IL,NL=RL(mh);LL(mh,"isObjectLikeArray",NL);var FL=mh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var DL=FL;function jL(e){return DL(e)&&(e._isBuffer||e.constructor&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e))}var zL=jL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var BL=zL,UL=BL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var VL={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},WL=VL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var HL=qt,GL=typeof Float64Array=="function";function YL(e){return GL&&e instanceof Float64Array||HL(e)==="[object Float64Array]"}var XL=YL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var KL=XL,QL=KL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ZL=typeof Float64Array=="function"?Float64Array:null,qL=ZL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var JL=QL,Hv=qL;function eR(){var e,t;if(typeof Hv!="function")return!1;try{t=new Hv([1,3.14,-3.14,NaN]),e=JL(t)&&t[0]===1&&t[1]===3.14&&t[2]===-3.14&&t[3]!==t[3]}catch{e=!1}return e}var tR=eR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var iR=typeof Float64Array=="function"?Float64Array:void 0,oR=iR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var lR=rR,uR=oR,cR=sR,pf;lR()?pf=uR:pf=cR;var fR=pf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dR=qt,hR=typeof Float32Array=="function";function pR(e){return hR&&e instanceof Float32Array||dR(e)==="[object Float32Array]"}var gR=pR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var yR=Number.POSITIVE_INFINITY,bR=yR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $R=typeof Float32Array=="function"?Float32Array:null,_R=$R;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wR=mR,xR=bR,Gv=_R;function SR(){var e,t;if(typeof Gv!="function")return!1;try{t=new Gv([1,3.14,-3.14,5e40]),e=wR(t)&&t[0]===1&&t[1]===3.140000104904175&&t[2]===-3.140000104904175&&t[3]===xR}catch{e=!1}return e}var kR=SR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ER=kR,AR=ER;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var TR=typeof Float32Array=="function"?Float32Array:void 0,CR=TR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function PR(){throw new Error("not implemented")}var MR=PR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var OR=AR,IR=CR,LR=MR,gf;OR()?gf=IR:gf=LR;var RR=gf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var NR=qt,FR=typeof Uint32Array=="function";function DR(e){return FR&&e instanceof Uint32Array||NR(e)==="[object Uint32Array]"}var jR=DR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zR=jR,BR=zR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var UR=4294967295,VR=UR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var WR=typeof Uint32Array=="function"?Uint32Array:null,HR=WR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var GR=BR,Iu=VR,Yv=HR;function YR(){var e,t;if(typeof Yv!="function")return!1;try{t=[1,3.14,-3.14,Iu+1,Iu+2],t=new Yv(t),e=GR(t)&&t[0]===1&&t[1]===3&&t[2]===Iu-2&&t[3]===0&&t[4]===1}catch{e=!1}return e}var XR=YR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var KR=XR,QR=KR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ZR=typeof Uint32Array=="function"?Uint32Array:void 0,qR=ZR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function JR(){throw new Error("not implemented")}var eN=JR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tN=QR,nN=qR,rN=eN,vf;tN()?vf=nN:vf=rN;var iN=vf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oN=qt,aN=typeof Int32Array=="function";function sN(e){return aN&&e instanceof Int32Array||oN(e)==="[object Int32Array]"}var lN=sN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var fN=2147483647,dN=fN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hN=-2147483648,pN=hN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gN=typeof Int32Array=="function"?Int32Array:null,vN=gN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mN=cN,yN=dN,bN=pN,Xv=vN;function $N(){var e,t;if(typeof Xv!="function")return!1;try{t=new Xv([1,3.14,-3.14,yN+1]),e=mN(t)&&t[0]===1&&t[1]===3&&t[2]===-3&&t[3]===bN}catch{e=!1}return e}var _N=$N;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wN=_N,xN=wN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var SN=typeof Int32Array=="function"?Int32Array:void 0,kN=SN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function EN(){throw new Error("not implemented")}var AN=EN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var TN=xN,CN=kN,PN=AN,mf;TN()?mf=CN:mf=PN;var MN=mf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ON=qt,IN=typeof Uint16Array=="function";function LN(e){return IN&&e instanceof Uint16Array||ON(e)==="[object Uint16Array]"}var RN=LN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var NN=RN,FN=NN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var DN=65535,jN=DN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zN=typeof Uint16Array=="function"?Uint16Array:null,BN=zN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var UN=FN,Lu=jN,Kv=BN;function VN(){var e,t;if(typeof Kv!="function")return!1;try{t=[1,3.14,-3.14,Lu+1,Lu+2],t=new Kv(t),e=UN(t)&&t[0]===1&&t[1]===3&&t[2]===Lu-2&&t[3]===0&&t[4]===1}catch{e=!1}return e}var WN=VN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var HN=WN,GN=HN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var YN=typeof Uint16Array=="function"?Uint16Array:void 0,XN=YN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function KN(){throw new Error("not implemented")}var QN=KN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ZN=GN,qN=XN,JN=QN,yf;ZN()?yf=qN:yf=JN;var eF=yf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tF=qt,nF=typeof Int16Array=="function";function rF(e){return nF&&e instanceof Int16Array||tF(e)==="[object Int16Array]"}var iF=rF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oF=iF,aF=oF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sF=32767,lF=sF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uF=-32768,cF=uF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fF=typeof Int16Array=="function"?Int16Array:null,dF=fF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hF=aF,pF=lF,gF=cF,Qv=dF;function vF(){var e,t;if(typeof Qv!="function")return!1;try{t=new Qv([1,3.14,-3.14,pF+1]),e=hF(t)&&t[0]===1&&t[1]===3&&t[2]===-3&&t[3]===gF}catch{e=!1}return e}var mF=vF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yF=mF,bF=yF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $F=typeof Int16Array=="function"?Int16Array:void 0,_F=$F;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function wF(){throw new Error("not implemented")}var xF=wF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var SF=bF,kF=_F,EF=xF,bf;SF()?bf=kF:bf=EF;var AF=bf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var TF=qt,CF=typeof Uint8Array=="function";function PF(e){return CF&&e instanceof Uint8Array||TF(e)==="[object Uint8Array]"}var MF=PF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var OF=MF,IF=OF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var LF=255,RF=LF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var NF=typeof Uint8Array=="function"?Uint8Array:null,FF=NF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var DF=IF,Ru=RF,Zv=FF;function jF(){var e,t;if(typeof Zv!="function")return!1;try{t=[1,3.14,-3.14,Ru+1,Ru+2],t=new Zv(t),e=DF(t)&&t[0]===1&&t[1]===3&&t[2]===Ru-2&&t[3]===0&&t[4]===1}catch{e=!1}return e}var zF=jF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var BF=zF,UF=BF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var VF=typeof Uint8Array=="function"?Uint8Array:void 0,WF=VF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function HF(){throw new Error("not implemented")}var GF=HF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var YF=UF,XF=WF,KF=GF,$f;YF()?$f=XF:$f=KF;var QF=$f;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ZF=qt,qF=typeof Uint8ClampedArray=="function";function JF(e){return qF&&e instanceof Uint8ClampedArray||ZF(e)==="[object Uint8ClampedArray]"}var eD=JF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tD=eD,nD=tD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rD=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null,iD=rD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oD=nD,qv=iD;function aD(){var e,t;if(typeof qv!="function")return!1;try{t=new qv([-1,0,1,3.14,4.99,255,256]),e=oD(t)&&t[0]===0&&t[1]===0&&t[2]===1&&t[3]===3&&t[4]===5&&t[5]===255&&t[6]===255}catch{e=!1}return e}var sD=aD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var cD=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0,fD=cD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function dD(){throw new Error("not implemented")}var hD=dD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pD=uD,gD=fD,vD=hD,_f;pD()?_f=gD:_f=vD;var mD=_f;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yD=qt,bD=typeof Int8Array=="function";function $D(e){return bD&&e instanceof Int8Array||yD(e)==="[object Int8Array]"}var _D=$D;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wD=_D,xD=wD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var SD=127,kD=SD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ED=-128,AD=ED;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var TD=typeof Int8Array=="function"?Int8Array:null,CD=TD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var PD=xD,MD=kD,OD=AD,Jv=CD;function ID(){var e,t;if(typeof Jv!="function")return!1;try{t=new Jv([1,3.14,-3.14,MD+1]),e=PD(t)&&t[0]===1&&t[1]===3&&t[2]===-3&&t[3]===OD}catch{e=!1}return e}var LD=ID;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var RD=LD,ND=RD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var FD=typeof Int8Array=="function"?Int8Array:void 0,DD=FD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function jD(){throw new Error("not implemented")}var zD=jD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var BD=ND,UD=DD,VD=zD,wf;BD()?wf=UD:wf=VD;var WD=wf;/**
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
*/var HD=typeof Object.defineProperty=="function"?Object.defineProperty:null,GD=HD;/**
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
*/var YD=GD;function XD(){try{return YD({},"x",{}),!0}catch{return!1}}var KD=XD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var QD=Object.defineProperty,ZD=QD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var em=ie,Ai=Object.prototype,tm=Ai.toString,nm=Ai.__defineGetter__,rm=Ai.__defineSetter__,qD=Ai.__lookupGetter__,JD=Ai.__lookupSetter__;function e5(e,t,n){var r,i,o,a;if(typeof e!="object"||e===null||tm.call(e)==="[object Array]")throw new TypeError(em("invalid argument. First argument must be an object. Value: `%s`.",e));if(typeof n!="object"||n===null||tm.call(n)==="[object Array]")throw new TypeError(em("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if(i="value"in n,i&&(qD.call(e,t)||JD.call(e,t)?(r=e.__proto__,e.__proto__=Ai,delete e[t],e[t]=n.value,e.__proto__=r):e[t]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&nm&&nm.call(e,t,n.get),a&&rm&&rm.call(e,t,n.set),e}var t5=e5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n5=KD,r5=ZD,i5=t5,xf;n5()?xf=r5:xf=i5;var Il=xf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var o5=Il;function a5(e,t,n){o5(e,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var s5=a5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var l5=s5,Er=l5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function u5(e){return typeof e=="number"}var r$=u5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function c5(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}var f5=c5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var d5=f5,h5=d5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var p5=h5,g5=p5();function v5(){return g5&&typeof Symbol.toStringTag=="symbol"}var m5=v5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y5=m5,yh=y5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b5=Object.prototype.toString,i$=b5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $5=i$;function _5(e){return $5.call(e)}var w5=_5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var x5=Object.prototype.hasOwnProperty;function S5(e,t){return e==null?!1:x5.call(e,t)}var k5=S5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var E5=k5,o$=E5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var im=kr,A5=typeof im=="function"?im.toStringTag:"",T5=A5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var C5=o$,Xi=T5,Nu=i$;function P5(e){var t,n,r;if(e==null)return Nu.call(e);n=e[Xi],t=C5(e,Xi);try{e[Xi]=void 0}catch{return Nu.call(e)}return r=Nu.call(e),t?e[Xi]=n:delete e[Xi],r}var M5=P5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O5=yh,I5=w5,L5=M5,Sf;O5()?Sf=L5:Sf=I5;var Ti=Sf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var R5=Number;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var N5=R5,bh=N5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F5=bh,D5=F5.prototype.toString,j5=D5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var z5=j5;function B5(e){try{return z5.call(e),!0}catch{return!1}}var U5=B5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V5=yh,W5=Ti,H5=bh,G5=U5,Y5=V5();function X5(e){return typeof e=="object"?e instanceof H5?!0:Y5?G5(e):W5(e)==="[object Number]":!1}var a$=X5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var K5=r$,Q5=a$;function Z5(e){return K5(e)||Q5(e)}var q5=Z5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var s$=Er,$h=q5,J5=r$,ej=a$;s$($h,"isPrimitive",J5);s$($h,"isObject",ej);var Ll=$h;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tj=Number.POSITIVE_INFINITY,l$=tj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nj=bh,rj=nj.NEGATIVE_INFINITY,ij=rj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oj=Math.floor,aj=oj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sj=aj,lj=sj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uj=lj;function cj(e){return uj(e)===e}var fj=cj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dj=fj,na=dj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hj=l$,pj=ij,gj=na;function vj(e){return e<hj&&e>pj&&gj(e)}var u$=vj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mj=Ll.isPrimitive,yj=u$;function bj(e){return mj(e)&&yj(e)}var c$=bj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $j=Ll.isObject,_j=u$;function wj(e){return $j(e)&&_j(e.valueOf())}var f$=wj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xj=c$,Sj=f$;function kj(e){return xj(e)||Sj(e)}var Ej=kj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var d$=Er,_h=Ej,Aj=c$,Tj=f$;d$(_h,"isPrimitive",Aj);d$(_h,"isObject",Tj);var h$=_h;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cj=h$.isPrimitive;function Pj(e){return Cj(e)&&e>=0}var p$=Pj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mj=h$.isObject;function Oj(e){return Mj(e)&&e.valueOf()>=0}var g$=Oj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ij=p$,Lj=g$;function Rj(e){return Ij(e)||Lj(e)}var Nj=Rj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var v$=Er,wh=Nj,Fj=p$,Dj=g$;v$(wh,"isPrimitive",Fj);v$(wh,"isObject",Dj);var jj=wh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zj=4294967295,Bj=zj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Uj=na,Vj=Bj;function Wj(e){return typeof e=="object"&&e!==null&&typeof e.length=="number"&&Uj(e.length)&&e.length>=0&&e.length<=Vj}var Hj=Wj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gj=Hj,xh=Gj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yj=9007199254740991,Xj=Yj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kj=na,Qj=Xj;function Zj(e){return typeof e=="object"&&e!==null&&typeof e.length=="number"&&Kj(e.length)&&e.length>=0&&e.length<=Qj}var qj=Zj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jj=qj,e6=Jj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t6=Ti,n6=typeof ArrayBuffer=="function";function r6(e){return n6&&e instanceof ArrayBuffer||t6(e)==="[object ArrayBuffer]"}var i6=r6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var o6=i6,a6=o6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var s6=Ti,kf;function l6(e){return s6(e)==="[object Array]"}Array.isArray?kf=Array.isArray:kf=l6;var u6=kf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var c6=u6,m$=c6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var f6=m$;function d6(e){return typeof e=="object"&&e!==null&&!f6(e)}var h6=d6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var p6=h6,g6=p6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var v6=/./,m6=v6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function y6(e){return typeof e=="boolean"}var y$=y6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b6=Boolean.prototype.toString,$6=b6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _6=$6;function w6(e){try{return _6.call(e),!0}catch{return!1}}var x6=w6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var S6=yh,k6=Ti,E6=ah,A6=x6,T6=S6();function C6(e){return typeof e=="object"?e instanceof E6?!0:T6?A6(e):k6(e)==="[object Boolean]":!1}var b$=C6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var P6=y$,M6=b$;function O6(e){return P6(e)||M6(e)}var I6=O6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $$=Er,Sh=I6,L6=y$,R6=b$;$$(Sh,"isPrimitive",L6);$$(Sh,"isObject",R6);var N6=Sh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function F6(){return new Function("return this;")()}var D6=F6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j6=typeof self=="object"?self:null,z6=j6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B6=typeof window=="object"?window:null,U6=B6;/**
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
*/var V6=typeof globalThis=="object"?globalThis:null,W6=V6;/**
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
*/var H6=N6.isPrimitive,G6=ie,Y6=D6,om=z6,am=U6,sm=W6;function X6(e){if(arguments.length){if(!H6(e))throw new TypeError(G6("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Y6()}if(sm)return sm;if(om)return om;if(am)return am;throw new Error("unexpected error. Unable to resolve global object.")}var K6=X6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Q6=K6,lm=Q6(),Z6=lm.document&&lm.document.childNodes,q6=Z6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var J6=Int8Array,ez=J6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tz=m6,nz=q6,rz=ez;function iz(){return typeof tz=="function"||typeof rz=="object"||typeof nz=="function"}var oz=iz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var az=Zt;function sz(e){var t;return e===null?"null":(t=typeof e,t==="object"?az(e).toLowerCase():t)}var lz=sz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uz=Zt;function cz(e){return uz(e).toLowerCase()}var fz=cz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dz=oz,hz=lz,pz=fz,gz=dz()?pz:hz,vz=gz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mz=vz;function yz(e){return mz(e)==="function"}var bz=yz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $z=bz,_z=$z;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function wz(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i",e}var xz=wz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Sz(){var e={};return e.type="Complex128",e.re=this.re,e.im=this.im,e}var kz=Sz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var um=Ll.isPrimitive,cm=Il,ra=Er,fm=ie,Ez=xz,Az=kz;function Ar(e,t){if(!(this instanceof Ar))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!um(e))throw new TypeError(fm("invalid argument. Real component must be a number. Value: `%s`.",e));if(!um(t))throw new TypeError(fm("invalid argument. Imaginary component must be a number. Value: `%s`.",t));return cm(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),cm(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:t}),this}ra(Ar,"BYTES_PER_ELEMENT",8);ra(Ar.prototype,"BYTES_PER_ELEMENT",8);ra(Ar.prototype,"byteLength",16);ra(Ar.prototype,"toString",Ez);ra(Ar.prototype,"toJSON",Az);var Tz=Ar;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cz=Tz,Pz=Cz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mz=typeof Math.fround=="function"?Math.fround:null,Oz=Mz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Iz=Ti,Lz=typeof Float32Array=="function";function Rz(e){return Lz&&e instanceof Float32Array||Iz(e)==="[object Float32Array]"}var Nz=Rz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fz=Nz,Dz=Fz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jz=typeof Float32Array=="function"?Float32Array:null,zz=jz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bz=Dz,Uz=l$,dm=zz;function Vz(){var e,t;if(typeof dm!="function")return!1;try{t=new dm([1,3.14,-3.14,5e40]),e=Bz(t)&&t[0]===1&&t[1]===3.140000104904175&&t[2]===-3.140000104904175&&t[3]===Uz}catch{e=!1}return e}var Wz=Vz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hz=Wz,Gz=Hz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yz=typeof Float32Array=="function"?Float32Array:void 0,Xz=Yz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Kz(){throw new Error("not implemented")}var Qz=Kz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zz=Gz,qz=Xz,Jz=Qz,Ef;Zz()?Ef=qz:Ef=Jz;var kh=Ef;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e8=kh,hm=new e8(1);function t8(e){return hm[0]=e,hm[0]}var n8=t8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pm=Oz,r8=n8,Af;typeof pm=="function"?Af=pm:Af=r8;var i8=Af;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function o8(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i",e}var a8=o8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function s8(){var e={};return e.type="Complex64",e.re=this.re,e.im=this.im,e}var l8=s8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gm=Ll.isPrimitive,vm=Il,ia=Er,mm=i8,ym=ie,u8=a8,c8=l8;function Tr(e,t){if(!(this instanceof Tr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!gm(e))throw new TypeError(ym("invalid argument. Real component must be a number. Value: `%s`.",e));if(!gm(t))throw new TypeError(ym("invalid argument. Imaginary component must be a number. Value: `%s`.",t));return vm(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:mm(e)}),vm(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:mm(t)}),this}ia(Tr,"BYTES_PER_ELEMENT",4);ia(Tr.prototype,"BYTES_PER_ELEMENT",4);ia(Tr.prototype,"byteLength",8);ia(Tr.prototype,"toString",u8);ia(Tr.prototype,"toJSON",c8);var f8=Tr;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var d8=f8,_$=d8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var h8=Pz,p8=_$;function g8(e){return e instanceof h8||e instanceof p8?!0:typeof e=="object"&&e!==null&&typeof e.re=="number"&&typeof e.im=="number"}var v8=g8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var m8=v8,Rl=m8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y8=na;function b8(e){return y8(e/2)}var $8=b8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _8=$8,w8=_8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var x8=o$,Ya=kr;function S8(){return typeof Ya=="function"&&typeof Ya("foo")=="symbol"&&x8(Ya,"iterator")&&typeof Ya.iterator=="symbol"}var k8=S8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var E8=k8,w$=E8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var A8=w$,T8=A8()?Symbol.iterator:null,C8=T8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var P8=C8,M8=P8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O8=Il;function I8(e,t,n){O8(e,t,{configurable:!1,enumerable:!1,get:n})}var L8=I8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var R8=L8,N8=R8;/**
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
*/function F8(e){return e.re}var D8=F8;/**
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
*/var j8=D8,Nl=j8;/**
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
*/function z8(e){return e.im}var B8=z8;/**
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
*/var U8=B8,Fl=U8;/**
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
*/var V8=kh;function W8(e,t){return new V8(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*t,2*(e.length-t))}var H8=W8;/**
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
*/var G8=H8,Y8=G8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var X8=Ti,K8=typeof Float64Array=="function";function Q8(e){return K8&&e instanceof Float64Array||X8(e)==="[object Float64Array]"}var Z8=Q8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var q8=Z8,J8=q8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eB=typeof Float64Array=="function"?Float64Array:null,tB=eB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nB=J8,bm=tB;function rB(){var e,t;if(typeof bm!="function")return!1;try{t=new bm([1,3.14,-3.14,NaN]),e=nB(t)&&t[0]===1&&t[1]===3.14&&t[2]===-3.14&&t[3]!==t[3]}catch{e=!1}return e}var iB=rB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var sB=typeof Float64Array=="function"?Float64Array:void 0,lB=sB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function uB(){throw new Error("not implemented")}var cB=uB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fB=aB,dB=lB,hB=cB,Tf;fB()?Tf=dB:Tf=hB;var pB=Tf;/**
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
*/var gB=pB;function vB(e,t){return new gB(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*t,2*(e.length-t))}var mB=vB;/**
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
*/var yB=mB,bB=yB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $B=xh,_B=Rl,wB=Nl,xB=Fl,SB=ie;function kB(e){var t,n,r;for(t=[];n=e.next(),!n.done;)if(r=n.value,$B(r)&&r.length>=2)t.push(r[0],r[1]);else if(_B(r))t.push(wB(r),xB(r));else return new TypeError(SB("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",r));return t}var EB=kB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var AB=xh,TB=Rl,CB=Nl,PB=Fl,MB=ie;function OB(e,t,n){var r,i,o,a;for(r=[],a=-1;i=e.next(),!i.done;)if(a+=1,o=t.call(n,i.value,a),AB(o)&&o.length>=2)r.push(o[0],o[1]);else if(TB(o))r.push(CB(o),PB(o));else return new TypeError(MB("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));return r}var IB=OB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var LB=Rl,RB=Nl,NB=Fl;function FB(e,t){var n,r,i,o;for(n=t.length,o=0,i=0;i<n;i++){if(r=t[i],!LB(r))return null;e[o]=RB(r),e[o+1]=NB(r),o+=2}return e}var DB=FB,xo=jj.isPrimitive,$m=xh,Eh=e6,_m=a6,x$=g6,jB=m$,ur=_z,oi=Rl,el=w8,Fu=na,zB=w$,mi=M8,nt=Er,Dl=N8,wt=kh,S$=_$,fe=ie,tl=Nl,nl=Fl,BB=Y8,UB=bB,VB=gh,WB=vh,k$=EB,HB=IB,GB=DB,dt=wt.BYTES_PER_ELEMENT*2,E$=zB();function yi(e){return e instanceof $e||typeof e=="object"&&e!==null&&(e.constructor.name==="Complex64Array"||e.constructor.name==="Complex128Array")&&typeof e._length=="number"&&typeof e._buffer=="object"}function A$(e){return e===$e||e.name==="Complex128Array"}function YB(e){return typeof e=="object"&&e!==null&&e.constructor.name==="Complex64Array"&&e.BYTES_PER_ELEMENT===dt}function XB(e){return typeof e=="object"&&e!==null&&e.constructor.name==="Complex128Array"&&e.BYTES_PER_ELEMENT===dt*2}function $e(){var e,t,n,r;if(t=arguments.length,!(this instanceof $e))return t===0?new $e:t===1?new $e(arguments[0]):t===2?new $e(arguments[0],arguments[1]):new $e(arguments[0],arguments[1],arguments[2]);if(t===0)n=new wt(0);else if(t===1)if(xo(arguments[0]))n=new wt(arguments[0]*2);else if(Eh(arguments[0]))if(n=arguments[0],r=n.length,r&&jB(n)&&oi(n[0])){if(n=GB(new wt(r*2),n),n===null){if(!el(r))throw new RangeError(fe("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",r));n=new wt(arguments[0])}}else{if(YB(n))n=BB(n,0);else if(XB(n))n=UB(n,0);else if(!el(r))throw new RangeError(fe("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",r));n=new wt(n)}else if(_m(arguments[0])){if(n=arguments[0],!Fu(n.byteLength/dt))throw new RangeError(fe("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",dt,n.byteLength));n=new wt(n)}else if(x$(arguments[0])){if(n=arguments[0],E$===!1)throw new TypeError(fe("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",n));if(!ur(n[mi]))throw new TypeError(fe("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",n));if(n=n[mi](),!ur(n.next))throw new TypeError(fe("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",n));if(n=k$(n),n instanceof Error)throw n;n=new wt(n)}else throw new TypeError(fe("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(n=arguments[0],!_m(n))throw new TypeError(fe("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",n));if(e=arguments[1],!xo(e))throw new TypeError(fe("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!Fu(e/dt))throw new RangeError(fe("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",dt,e));if(t===2){if(r=n.byteLength-e,!Fu(r/dt))throw new RangeError(fe("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",dt,r));n=new wt(n,e)}else{if(r=arguments[2],!xo(r))throw new TypeError(fe("invalid argument. Length must be a nonnegative integer. Value: `%s`.",r));if(r*dt>n.byteLength-e)throw new RangeError(fe("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",r*dt));n=new wt(n,e,r*2)}}return nt(this,"_buffer",n),nt(this,"_length",n.length/2),this}nt($e,"BYTES_PER_ELEMENT",dt);nt($e,"name","Complex64Array");nt($e,"from",function(t){var n,r,i,o,a,s,l,u,c,f,d,h;if(!ur(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!A$(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(r=arguments.length,r>1){if(i=arguments[1],!ur(i))throw new TypeError(fe("invalid argument. Second argument must be a function. Value: `%s`.",i));r>2&&(n=arguments[2])}if(yi(t)){if(u=t.length,i){for(o=new this(u),a=o._buffer,h=0,d=0;d<u;d++){if(f=i.call(n,t.get(d),d),oi(f))a[h]=tl(f),a[h+1]=nl(f);else if($m(f)&&f.length>=2)a[h]=f[0],a[h+1]=f[1];else throw new TypeError(fe("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",f));h+=2}return o}return new this(t)}if(Eh(t)){if(i){for(u=t.length,t.get&&t.set?l=WB("default"):l=VB("default"),d=0;d<u;d++)if(!oi(l(t,d))){c=!0;break}if(c){if(!el(u))throw new RangeError(fe("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,u));for(o=new this(u/2),a=o._buffer,d=0;d<u;d++)a[d]=i.call(n,l(t,d),d);return o}for(o=new this(u),a=o._buffer,h=0,d=0;d<u;d++){if(f=i.call(n,l(t,d),d),oi(f))a[h]=tl(f),a[h+1]=nl(f);else if($m(f)&&f.length>=2)a[h]=f[0],a[h+1]=f[1];else throw new TypeError(fe("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",f));h+=2}return o}return new this(t)}if(x$(t)&&E$&&ur(t[mi])){if(a=t[mi](),!ur(a.next))throw new TypeError(fe("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",t));if(i?s=HB(a,i,n):s=k$(a),s instanceof Error)throw s;for(u=s.length/2,o=new this(u),a=o._buffer,d=0;d<u;d++)a[d]=s[d];return o}throw new TypeError(fe("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",t))});nt($e,"of",function(){var t,n;if(!ur(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!A$(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(t=[],n=0;n<arguments.length;n++)t.push(arguments[n]);return new this(t)});Dl($e.prototype,"buffer",function(){return this._buffer.buffer});Dl($e.prototype,"byteLength",function(){return this._buffer.byteLength});Dl($e.prototype,"byteOffset",function(){return this._buffer.byteOffset});nt($e.prototype,"BYTES_PER_ELEMENT",$e.BYTES_PER_ELEMENT);nt($e.prototype,"copyWithin",function(t,n){if(!yi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(t*2,n*2):this._buffer.copyWithin(t*2,n*2,arguments[2]*2),this});nt($e.prototype,"entries",function(){var t,n,r,i,o,a,s;if(!yi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return n=this,t=this._buffer,i=this._length,a=-1,s=-2,r={},nt(r,"next",l),nt(r,"return",u),mi&&nt(r,mi,c),r;function l(){var f;return a+=1,o||a>=i?{done:!0}:(s+=2,f=new S$(t[s],t[s+1]),{value:[a,f],done:!1})}function u(f){return o=!0,arguments.length?{value:f,done:!0}:{done:!0}}function c(){return n.entries()}});nt($e.prototype,"get",function(t){var n;if(!yi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!xo(t))throw new TypeError(fe("invalid argument. Must provide a nonnegative integer. Value: `%s`.",t));if(!(t>=this._length))return n=this._buffer,t*=2,new S$(n[t],n[t+1])});Dl($e.prototype,"length",function(){return this._length});nt($e.prototype,"set",function(t){var n,r,i,o,a,s,l,u,c;if(!yi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=this._buffer,arguments.length>1){if(r=arguments[1],!xo(r))throw new TypeError(fe("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",r))}else r=0;if(oi(t)){if(r>=this._length)throw new RangeError(fe("invalid argument. Index argument is out-of-bounds. Value: `%u`.",r));r*=2,i[r]=tl(t),i[r+1]=nl(t);return}if(yi(t)){if(s=t._length,r+s>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(n=t._buffer,c=i.byteOffset+r*dt,n.buffer===i.buffer&&n.byteOffset<c&&n.byteOffset+n.byteLength>c){for(o=new wt(n.length),u=0;u<n.length;u++)o[u]=n[u];n=o}for(r*=2,c=0,u=0;u<s;u++)i[r]=n[c],i[r+1]=n[c+1],r+=2,c+=2;return}if(Eh(t)){for(s=t.length,u=0;u<s;u++)if(!oi(t[u])){a=!0;break}if(a){if(!el(s))throw new RangeError(fe("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",s));if(r+s/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(n=t,c=i.byteOffset+r*dt,n.buffer===i.buffer&&n.byteOffset<c&&n.byteOffset+n.byteLength>c){for(o=new wt(s),u=0;u<s;u++)o[u]=n[u];n=o}for(r*=2,s/=2,c=0,u=0;u<s;u++)i[r]=n[c],i[r+1]=n[c+1],r+=2,c+=2;return}if(r+s>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(r*=2,u=0;u<s;u++)l=t[u],i[r]=tl(l),i[r+1]=nl(l),r+=2;return}throw new TypeError(fe("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",t))});var KB=$e;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var QB=KB,Ah=QB;/**
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
*/var ZB=typeof Object.defineProperty=="function"?Object.defineProperty:null,qB=ZB;/**
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
*/var JB=qB;function eU(){try{return JB({},"x",{}),!0}catch{return!1}}var tU=eU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nU=Object.defineProperty,rU=nU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wm=ie,Ci=Object.prototype,xm=Ci.toString,Sm=Ci.__defineGetter__,km=Ci.__defineSetter__,iU=Ci.__lookupGetter__,oU=Ci.__lookupSetter__;function aU(e,t,n){var r,i,o,a;if(typeof e!="object"||e===null||xm.call(e)==="[object Array]")throw new TypeError(wm("invalid argument. First argument must be an object. Value: `%s`.",e));if(typeof n!="object"||n===null||xm.call(n)==="[object Array]")throw new TypeError(wm("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if(i="value"in n,i&&(iU.call(e,t)||oU.call(e,t)?(r=e.__proto__,e.__proto__=Ci,delete e[t],e[t]=n.value,e.__proto__=r):e[t]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&Sm&&Sm.call(e,t,n.get),a&&km&&km.call(e,t,n.set),e}var sU=aU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lU=tU,uU=rU,cU=sU,Cf;lU()?Cf=uU:Cf=cU;var jl=Cf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fU=jl;function dU(e,t,n){fU(e,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var hU=dU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pU=hU,Cr=pU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function gU(e){return typeof e=="number"}var T$=gU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function vU(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}var mU=vU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yU=mU,bU=yU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $U=bU,_U=$U();function wU(){return _U&&typeof Symbol.toStringTag=="symbol"}var xU=wU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var SU=xU,Th=SU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kU=Object.prototype.toString,C$=kU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var EU=C$;function AU(e){return EU.call(e)}var TU=AU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var CU=Object.prototype.hasOwnProperty;function PU(e,t){return e==null?!1:CU.call(e,t)}var MU=PU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var OU=MU,P$=OU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Em=kr,IU=typeof Em=="function"?Em.toStringTag:"",LU=IU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var RU=P$,Ki=LU,Du=C$;function NU(e){var t,n,r;if(e==null)return Du.call(e);n=e[Ki],t=RU(e,Ki);try{e[Ki]=void 0}catch{return Du.call(e)}return r=Du.call(e),t?e[Ki]=n:delete e[Ki],r}var FU=NU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var DU=Th,jU=TU,zU=FU,Pf;DU()?Pf=zU:Pf=jU;var Pi=Pf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var BU=Number;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var UU=BU,Ch=UU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var VU=Ch,WU=VU.prototype.toString,HU=WU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var GU=HU;function YU(e){try{return GU.call(e),!0}catch{return!1}}var XU=YU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var KU=Th,QU=Pi,ZU=Ch,qU=XU,JU=KU();function eV(e){return typeof e=="object"?e instanceof ZU?!0:JU?qU(e):QU(e)==="[object Number]":!1}var M$=eV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tV=T$,nV=M$;function rV(e){return tV(e)||nV(e)}var iV=rV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O$=Cr,Ph=iV,oV=T$,aV=M$;O$(Ph,"isPrimitive",oV);O$(Ph,"isObject",aV);var zl=Ph;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sV=Number.POSITIVE_INFINITY,I$=sV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lV=Ch,uV=lV.NEGATIVE_INFINITY,cV=uV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fV=Math.floor,dV=fV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hV=dV,pV=hV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gV=pV;function vV(e){return gV(e)===e}var mV=vV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yV=mV,oa=yV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bV=I$,$V=cV,_V=oa;function wV(e){return e<bV&&e>$V&&_V(e)}var L$=wV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xV=zl.isPrimitive,SV=L$;function kV(e){return xV(e)&&SV(e)}var R$=kV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var EV=zl.isObject,AV=L$;function TV(e){return EV(e)&&AV(e.valueOf())}var N$=TV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var CV=R$,PV=N$;function MV(e){return CV(e)||PV(e)}var OV=MV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F$=Cr,Mh=OV,IV=R$,LV=N$;F$(Mh,"isPrimitive",IV);F$(Mh,"isObject",LV);var D$=Mh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var RV=D$.isPrimitive;function NV(e){return RV(e)&&e>=0}var j$=NV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var FV=D$.isObject;function DV(e){return FV(e)&&e.valueOf()>=0}var z$=DV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jV=j$,zV=z$;function BV(e){return jV(e)||zV(e)}var UV=BV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B$=Cr,Oh=UV,VV=j$,WV=z$;B$(Oh,"isPrimitive",VV);B$(Oh,"isObject",WV);var HV=Oh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var GV=4294967295,YV=GV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var XV=oa,KV=YV;function QV(e){return typeof e=="object"&&e!==null&&typeof e.length=="number"&&XV(e.length)&&e.length>=0&&e.length<=KV}var ZV=QV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qV=ZV,Ih=qV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var JV=9007199254740991,e9=JV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t9=oa,n9=e9;function r9(e){return typeof e=="object"&&e!==null&&typeof e.length=="number"&&t9(e.length)&&e.length>=0&&e.length<=n9}var i9=r9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var o9=i9,a9=o9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var s9=Pi,l9=typeof ArrayBuffer=="function";function u9(e){return l9&&e instanceof ArrayBuffer||s9(e)==="[object ArrayBuffer]"}var c9=u9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var f9=c9,d9=f9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var h9=Pi,Mf;function p9(e){return h9(e)==="[object Array]"}Array.isArray?Mf=Array.isArray:Mf=p9;var g9=Mf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var v9=g9,U$=v9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var m9=U$;function y9(e){return typeof e=="object"&&e!==null&&!m9(e)}var b9=y9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $9=b9,_9=$9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var w9=/./,x9=w9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function S9(e){return typeof e=="boolean"}var V$=S9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k9=Boolean.prototype.toString,E9=k9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var A9=E9;function T9(e){try{return A9.call(e),!0}catch{return!1}}var C9=T9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var P9=Th,M9=Pi,O9=ah,I9=C9,L9=P9();function R9(e){return typeof e=="object"?e instanceof O9?!0:L9?I9(e):M9(e)==="[object Boolean]":!1}var W$=R9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var N9=V$,F9=W$;function D9(e){return N9(e)||F9(e)}var j9=D9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var H$=Cr,Lh=j9,z9=V$,B9=W$;H$(Lh,"isPrimitive",z9);H$(Lh,"isObject",B9);var U9=Lh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function V9(){return new Function("return this;")()}var W9=V9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var H9=typeof self=="object"?self:null,G9=H9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Y9=typeof window=="object"?window:null,X9=Y9;/**
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
*/var K9=typeof globalThis=="object"?globalThis:null,Q9=K9;/**
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
*/var Z9=U9.isPrimitive,q9=ie,J9=W9,Am=G9,Tm=X9,Cm=Q9;function eW(e){if(arguments.length){if(!Z9(e))throw new TypeError(q9("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return J9()}if(Cm)return Cm;if(Am)return Am;if(Tm)return Tm;throw new Error("unexpected error. Unable to resolve global object.")}var tW=eW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nW=tW,Pm=nW(),rW=Pm.document&&Pm.document.childNodes,iW=rW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oW=Int8Array,aW=oW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sW=x9,lW=iW,uW=aW;function cW(){return typeof sW=="function"||typeof uW=="object"||typeof lW=="function"}var fW=cW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dW=Zt;function hW(e){var t;return e===null?"null":(t=typeof e,t==="object"?dW(e).toLowerCase():t)}var pW=hW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gW=Zt;function vW(e){return gW(e).toLowerCase()}var mW=vW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yW=fW,bW=pW,$W=mW,_W=yW()?$W:bW,wW=_W;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xW=wW;function SW(e){return xW(e)==="function"}var kW=SW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var EW=kW,AW=EW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function TW(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i",e}var CW=TW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function PW(){var e={};return e.type="Complex128",e.re=this.re,e.im=this.im,e}var MW=PW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mm=zl.isPrimitive,Om=jl,aa=Cr,Im=ie,OW=CW,IW=MW;function Pr(e,t){if(!(this instanceof Pr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Mm(e))throw new TypeError(Im("invalid argument. Real component must be a number. Value: `%s`.",e));if(!Mm(t))throw new TypeError(Im("invalid argument. Imaginary component must be a number. Value: `%s`.",t));return Om(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),Om(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:t}),this}aa(Pr,"BYTES_PER_ELEMENT",8);aa(Pr.prototype,"BYTES_PER_ELEMENT",8);aa(Pr.prototype,"byteLength",16);aa(Pr.prototype,"toString",OW);aa(Pr.prototype,"toJSON",IW);var LW=Pr;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var RW=LW,G$=RW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var NW=typeof Math.fround=="function"?Math.fround:null,FW=NW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var DW=Pi,jW=typeof Float32Array=="function";function zW(e){return jW&&e instanceof Float32Array||DW(e)==="[object Float32Array]"}var BW=zW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var UW=BW,VW=UW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var WW=typeof Float32Array=="function"?Float32Array:null,HW=WW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var GW=VW,YW=I$,Lm=HW;function XW(){var e,t;if(typeof Lm!="function")return!1;try{t=new Lm([1,3.14,-3.14,5e40]),e=GW(t)&&t[0]===1&&t[1]===3.140000104904175&&t[2]===-3.140000104904175&&t[3]===YW}catch{e=!1}return e}var KW=XW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var QW=KW,ZW=QW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qW=typeof Float32Array=="function"?Float32Array:void 0,JW=qW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function eH(){throw new Error("not implemented")}var tH=eH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nH=ZW,rH=JW,iH=tH,Of;nH()?Of=rH:Of=iH;var Y$=Of;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oH=Y$,Rm=new oH(1);function aH(e){return Rm[0]=e,Rm[0]}var sH=aH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nm=FW,lH=sH,If;typeof Nm=="function"?If=Nm:If=lH;var uH=If;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function cH(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i",e}var fH=cH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function dH(){var e={};return e.type="Complex64",e.re=this.re,e.im=this.im,e}var hH=dH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fm=zl.isPrimitive,Dm=jl,sa=Cr,jm=uH,zm=ie,pH=fH,gH=hH;function Mr(e,t){if(!(this instanceof Mr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Fm(e))throw new TypeError(zm("invalid argument. Real component must be a number. Value: `%s`.",e));if(!Fm(t))throw new TypeError(zm("invalid argument. Imaginary component must be a number. Value: `%s`.",t));return Dm(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:jm(e)}),Dm(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:jm(t)}),this}sa(Mr,"BYTES_PER_ELEMENT",4);sa(Mr.prototype,"BYTES_PER_ELEMENT",4);sa(Mr.prototype,"byteLength",8);sa(Mr.prototype,"toString",pH);sa(Mr.prototype,"toJSON",gH);var vH=Mr;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mH=vH,yH=mH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bH=G$,$H=yH;function _H(e){return e instanceof bH||e instanceof $H?!0:typeof e=="object"&&e!==null&&typeof e.re=="number"&&typeof e.im=="number"}var wH=_H;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xH=wH,Bl=xH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var SH=oa;function kH(e){return SH(e/2)}var EH=kH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var AH=EH,TH=AH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var CH=P$,Xa=kr;function PH(){return typeof Xa=="function"&&typeof Xa("foo")=="symbol"&&CH(Xa,"iterator")&&typeof Xa.iterator=="symbol"}var MH=PH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var OH=MH,X$=OH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var IH=X$,LH=IH()?Symbol.iterator:null,RH=LH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var NH=RH,FH=NH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var DH=jl;function jH(e,t,n){DH(e,t,{configurable:!1,enumerable:!1,get:n})}var zH=jH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var BH=zH,UH=BH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var VH=Pi,WH=typeof Float64Array=="function";function HH(e){return WH&&e instanceof Float64Array||VH(e)==="[object Float64Array]"}var GH=HH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var YH=GH,XH=YH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var KH=typeof Float64Array=="function"?Float64Array:null,QH=KH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ZH=XH,Bm=QH;function qH(){var e,t;if(typeof Bm!="function")return!1;try{t=new Bm([1,3.14,-3.14,NaN]),e=ZH(t)&&t[0]===1&&t[1]===3.14&&t[2]===-3.14&&t[3]!==t[3]}catch{e=!1}return e}var JH=qH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var n7=typeof Float64Array=="function"?Float64Array:void 0,r7=n7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function i7(){throw new Error("not implemented")}var o7=i7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a7=t7,s7=r7,l7=o7,Lf;a7()?Lf=s7:Lf=l7;var K$=Lf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function u7(e){return e.re}var c7=u7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var f7=c7,Ul=f7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function d7(e){return e.im}var h7=d7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var p7=h7,Vl=p7;/**
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
*/var g7=Y$;function v7(e,t){return new g7(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*t,2*(e.length-t))}var m7=v7;/**
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
*/var y7=m7,b7=y7;/**
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
*/var $7=K$;function _7(e,t){return new $7(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*t,2*(e.length-t))}var w7=_7;/**
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
*/var x7=w7,S7=x7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k7=Ih,E7=Bl,A7=ie,T7=Ul,C7=Vl;function P7(e){var t,n,r;for(t=[];n=e.next(),!n.done;)if(r=n.value,k7(r)&&r.length>=2)t.push(r[0],r[1]);else if(E7(r))t.push(T7(r),C7(r));else return new TypeError(A7("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",r));return t}var M7=P7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O7=Ih,I7=Bl,L7=ie,R7=Ul,N7=Vl;function F7(e,t,n){var r,i,o,a;for(r=[],a=-1;i=e.next(),!i.done;)if(a+=1,o=t.call(n,i.value,a),O7(o)&&o.length>=2)r.push(o[0],o[1]);else if(I7(o))r.push(R7(o),N7(o));else return new TypeError(L7("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));return r}var D7=F7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j7=Bl,z7=Ul,B7=Vl;function U7(e,t){var n,r,i,o;for(n=t.length,o=0,i=0;i<n;i++){if(r=t[i],!j7(r))return null;e[o]=z7(r),e[o+1]=B7(r),o+=2}return e}var V7=U7,So=HV.isPrimitive,Um=Ih,Rh=a9,Vm=d9,Q$=_9,W7=U$,cr=AW,ai=Bl,rl=TH,ju=oa,H7=X$,bi=FH,rt=Cr,Wl=UH,xt=K$,Z$=G$,il=Ul,ol=Vl,G7=b7,Y7=S7,X7=gh,K7=vh,de=ie,q$=M7,Q7=D7,Z7=V7,ht=xt.BYTES_PER_ELEMENT*2,J$=H7();function $i(e){return e instanceof _e||typeof e=="object"&&e!==null&&(e.constructor.name==="Complex64Array"||e.constructor.name==="Complex128Array")&&typeof e._length=="number"&&typeof e._buffer=="object"}function e_(e){return e===_e||e.name==="Complex64Array"}function q7(e){return typeof e=="object"&&e!==null&&e.constructor.name==="Complex64Array"&&e.BYTES_PER_ELEMENT===ht/2}function J7(e){return typeof e=="object"&&e!==null&&e.constructor.name==="Complex128Array"&&e.BYTES_PER_ELEMENT===ht}function _e(){var e,t,n,r;if(t=arguments.length,!(this instanceof _e))return t===0?new _e:t===1?new _e(arguments[0]):t===2?new _e(arguments[0],arguments[1]):new _e(arguments[0],arguments[1],arguments[2]);if(t===0)n=new xt(0);else if(t===1)if(So(arguments[0]))n=new xt(arguments[0]*2);else if(Rh(arguments[0]))if(n=arguments[0],r=n.length,r&&W7(n)&&ai(n[0])){if(n=Z7(new xt(r*2),n),n===null){if(!rl(r))throw new RangeError(de("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",r));n=new xt(arguments[0])}}else{if(q7(n))n=G7(n,0);else if(J7(n))n=Y7(n,0);else if(!rl(r))throw new RangeError(de("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",r));n=new xt(n)}else if(Vm(arguments[0])){if(n=arguments[0],!ju(n.byteLength/ht))throw new RangeError(de("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",ht,n.byteLength));n=new xt(n)}else if(Q$(arguments[0])){if(n=arguments[0],J$===!1)throw new TypeError(de("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",n));if(!cr(n[bi]))throw new TypeError(de("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",n));if(n=n[bi](),!cr(n.next))throw new TypeError(de("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",n));if(n=q$(n),n instanceof Error)throw n;n=new xt(n)}else throw new TypeError(de("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(n=arguments[0],!Vm(n))throw new TypeError(de("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",n));if(e=arguments[1],!So(e))throw new TypeError(de("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!ju(e/ht))throw new RangeError(de("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",ht,e));if(t===2){if(r=n.byteLength-e,!ju(r/ht))throw new RangeError(de("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",ht,r));n=new xt(n,e)}else{if(r=arguments[2],!So(r))throw new TypeError(de("invalid argument. Length must be a nonnegative integer. Value: `%s`.",r));if(r*ht>n.byteLength-e)throw new RangeError(de("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",r*ht));n=new xt(n,e,r*2)}}return rt(this,"_buffer",n),rt(this,"_length",n.length/2),this}rt(_e,"BYTES_PER_ELEMENT",ht);rt(_e,"name","Complex128Array");rt(_e,"from",function(t){var n,r,i,o,a,s,l,u,c,f,d,h;if(!cr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!e_(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(r=arguments.length,r>1){if(i=arguments[1],!cr(i))throw new TypeError(de("invalid argument. Second argument must be a function. Value: `%s`.",i));r>2&&(n=arguments[2])}if($i(t)){if(u=t.length,i){for(o=new this(u),a=o._buffer,h=0,d=0;d<u;d++){if(f=i.call(n,t.get(d),d),ai(f))a[h]=il(f),a[h+1]=ol(f);else if(Um(f)&&f.length>=2)a[h]=f[0],a[h+1]=f[1];else throw new TypeError(de("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",f));h+=2}return o}return new this(t)}if(Rh(t)){if(i){for(u=t.length,t.get&&t.set?l=K7("default"):l=X7("default"),d=0;d<u;d++)if(!ai(l(t,d))){c=!0;break}if(c){if(!rl(u))throw new RangeError(de("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",u));for(o=new this(u/2),a=o._buffer,d=0;d<u;d++)a[d]=i.call(n,l(t,d),d);return o}for(o=new this(u),a=o._buffer,h=0,d=0;d<u;d++){if(f=i.call(n,l(t,d),d),ai(f))a[h]=il(f),a[h+1]=ol(f);else if(Um(f)&&f.length>=2)a[h]=f[0],a[h+1]=f[1];else throw new TypeError(de("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",f));h+=2}return o}return new this(t)}if(Q$(t)&&J$&&cr(t[bi])){if(a=t[bi](),!cr(a.next))throw new TypeError(de("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",t));if(i?s=Q7(a,i,n):s=q$(a),s instanceof Error)throw s;for(u=s.length/2,o=new this(u),a=o._buffer,d=0;d<u;d++)a[d]=s[d];return o}throw new TypeError(de("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",t))});rt(_e,"of",function(){var t,n;if(!cr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!e_(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(t=[],n=0;n<arguments.length;n++)t.push(arguments[n]);return new this(t)});Wl(_e.prototype,"buffer",function(){return this._buffer.buffer});Wl(_e.prototype,"byteLength",function(){return this._buffer.byteLength});Wl(_e.prototype,"byteOffset",function(){return this._buffer.byteOffset});rt(_e.prototype,"BYTES_PER_ELEMENT",_e.BYTES_PER_ELEMENT);rt(_e.prototype,"copyWithin",function(t,n){if(!$i(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(t*2,n*2):this._buffer.copyWithin(t*2,n*2,arguments[2]*2),this});rt(_e.prototype,"entries",function(){var t,n,r,i,o,a,s;if(!$i(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return n=this,t=this._buffer,i=this._length,a=-1,s=-2,r={},rt(r,"next",l),rt(r,"return",u),bi&&rt(r,bi,c),r;function l(){var f;return a+=1,o||a>=i?{done:!0}:(s+=2,f=new Z$(t[s],t[s+1]),{value:[a,f],done:!1})}function u(f){return o=!0,arguments.length?{value:f,done:!0}:{done:!0}}function c(){return n.entries()}});rt(_e.prototype,"get",function(t){var n;if(!$i(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!So(t))throw new TypeError(de("invalid argument. Must provide a nonnegative integer. Value: `%s`.",t));if(!(t>=this._length))return n=this._buffer,t*=2,new Z$(n[t],n[t+1])});Wl(_e.prototype,"length",function(){return this._length});rt(_e.prototype,"set",function(t){var n,r,i,o,a,s,l,u,c;if(!$i(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=this._buffer,arguments.length>1){if(r=arguments[1],!So(r))throw new TypeError(de("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",r))}else r=0;if(ai(t)){if(r>=this._length)throw new RangeError(de("invalid argument. Index argument is out-of-bounds. Value: `%u`.",r));r*=2,i[r]=il(t),i[r+1]=ol(t);return}if($i(t)){if(s=t._length,r+s>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(n=t._buffer,c=i.byteOffset+r*ht,n.buffer===i.buffer&&n.byteOffset<c&&n.byteOffset+n.byteLength>c){for(o=new xt(n.length),u=0;u<n.length;u++)o[u]=n[u];n=o}for(r*=2,c=0,u=0;u<s;u++)i[r]=n[c],i[r+1]=n[c+1],r+=2,c+=2;return}if(Rh(t)){for(s=t.length,u=0;u<s;u++)if(!ai(t[u])){a=!0;break}if(a){if(!rl(s))throw new RangeError(de("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",s));if(r+s/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(n=t,c=i.byteOffset+r*ht,n.buffer===i.buffer&&n.byteOffset<c&&n.byteOffset+n.byteLength>c){for(o=new xt(s),u=0;u<s;u++)o[u]=n[u];n=o}for(r*=2,s/=2,c=0,u=0;u<s;u++)i[r]=n[c],i[r+1]=n[c+1],r+=2,c+=2;return}if(r+s>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(r*=2,u=0;u<s;u++)l=t[u],i[r]=il(l),i[r+1]=ol(l),r+=2;return}throw new TypeError(de("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",t))});var eG=_e;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tG=eG,Nh=tG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nG=fR,rG=RR,iG=iN,oG=MN,aG=eF,sG=AF,lG=QF,uG=mD,cG=WD,fG=Ah,dG=Nh,hG=[nG,rG,oG,iG,sG,aG,cG,lG,uG,fG,dG],pG=hG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gG=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],vG=gG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mG=UL,yG=n$,bG=Zt,$G=WL,_G=pG,t_=vG,wG=t_.length;function xG(e){var t;if(yG(e))return"generic";if(mG(e))return null;for(t=0;t<wG;t++)if(e instanceof _G[t])return t_[t];return $G[bG(e)]||null}var SG=xG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kG=SG,EG=kG;/**
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
*/var AG=zI,TG=gh,CG=g4,PG=vh,MG=T4,OG=EG;function IG(e){var t=OG(e);return AG(e)?{accessorProtocol:!0,accessors:[PG(t),MG(t)]}:{accessorProtocol:!1,accessors:[TG(t),CG(t)]}}var LG=IG;/**
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
*/var RG=LG,NG=RG;/**
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
*/var FG=NG;function DG(e){var t=FG(e);return{data:e,accessorProtocol:t.accessorProtocol,accessors:t.accessors}}var jG=DG;/**
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
*/var zG=jG,n_=zG;/**
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
*/function BG(e,t,n,r,i,o,a){var s,l,u,c,f,d,h;for(s=t.data,l=i.data,c=t.accessors[0],u=i.accessors[1],f=r,d=a,h=0;h<e;h++)u(l,d,c(s,f)),f+=n,d+=o;return t}var r_=BG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wm=n_,UG=r_,zu=8;function VG(e,t,n,r,i){var o,a,s,l,u,c;if(e<=0)return r;if(s=Wm(t),l=Wm(r),s.accessorProtocol||l.accessorProtocol)return n<0?o=(1-e)*n:o=0,i<0?a=(1-e)*i:a=0,UG(e,s,n,o,l,i,a),l.data;if(n===1&&i===1){if(u=e%zu,u>0)for(c=0;c<u;c++)r[c]=t[c];if(e<zu)return r;for(c=u;c<e;c+=zu)r[c]=t[c],r[c+1]=t[c+1],r[c+2]=t[c+2],r[c+3]=t[c+3],r[c+4]=t[c+4],r[c+5]=t[c+5],r[c+6]=t[c+6],r[c+7]=t[c+7];return r}for(n<0?o=(1-e)*n:o=0,i<0?a=(1-e)*i:a=0,c=0;c<e;c++)r[a]=t[o],o+=n,a+=i;return r}var WG=VG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hm=n_,HG=r_,Qi=8;function GG(e,t,n,r,i,o,a){var s,l,u,c,f,d;if(e<=0)return i;if(u=Hm(t),c=Hm(i),u.accessorProtocol||c.accessorProtocol)return HG(e,u,n,r,c,o,a),c.data;if(s=r,l=a,n===1&&o===1){if(f=e%Qi,f>0)for(d=0;d<f;d++)i[l]=t[s],s+=n,l+=o;if(e<Qi)return i;for(d=f;d<e;d+=Qi)i[l]=t[s],i[l+1]=t[s+1],i[l+2]=t[s+2],i[l+3]=t[s+3],i[l+4]=t[s+4],i[l+5]=t[s+5],i[l+6]=t[s+6],i[l+7]=t[s+7],s+=Qi,l+=Qi;return i}for(d=0;d<e;d++)i[l]=t[s],s+=n,l+=o;return i}var YG=GG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var XG=Vt,i_=WG,KG=YG;XG(i_,"ndarray",KG);var QG=i_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function ZG(){}var qG=ZG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var JG=qG;function eY(){return JG.name==="foo"}var tY=eY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nY=tY,rY=nY;/**
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
*/function iY(){return/^\s*function\s*([^(]*)/i}var o_=iY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oY=o_,aY=oY(),sY=aY;/**
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
*/var lY=Vt,a_=o_,uY=sY;lY(a_,"REGEXP",uY);var cY=a_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fY=Cl,dY=rY,hY=ie,pY=cY.REGEXP,gY=dY();function vY(e){if(fY(e)===!1)throw new TypeError(hY("invalid argument. Must provide a function. Value: `%s`.",e));return gY?e.name:pY.exec(e.toString())[1]}var mY=vY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yY=mY,bY=yY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $Y=lt,_Y=typeof Float64Array=="function";function wY(e){return _Y&&e instanceof Float64Array||$Y(e)==="[object Float64Array]"}var xY=wY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var SY=xY,kY=SY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var EY=typeof Float64Array=="function"?Float64Array:null,AY=EY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var TY=kY,Gm=AY;function CY(){var e,t;if(typeof Gm!="function")return!1;try{t=new Gm([1,3.14,-3.14,NaN]),e=TY(t)&&t[0]===1&&t[1]===3.14&&t[2]===-3.14&&t[3]!==t[3]}catch{e=!1}return e}var PY=CY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var MY=PY,s_=MY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var OY=typeof Float64Array=="function"?Float64Array:void 0,IY=OY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function LY(){throw new Error("not implemented")}var RY=LY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var NY=s_,FY=IY,DY=RY,Rf;NY()?Rf=FY:Rf=DY;var Hl=Rf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jY=lt,zY=typeof Int8Array=="function";function BY(e){return zY&&e instanceof Int8Array||jY(e)==="[object Int8Array]"}var UY=BY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var VY=UY,WY=VY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var HY=127,GY=HY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var YY=-128,XY=YY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var KY=typeof Int8Array=="function"?Int8Array:null,QY=KY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ZY=WY,qY=GY,JY=XY,Ym=QY;function eX(){var e,t;if(typeof Ym!="function")return!1;try{t=new Ym([1,3.14,-3.14,qY+1]),e=ZY(t)&&t[0]===1&&t[1]===3&&t[2]===-3&&t[3]===JY}catch{e=!1}return e}var tX=eX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nX=tX,rX=nX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iX=typeof Int8Array=="function"?Int8Array:void 0,oX=iX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function aX(){throw new Error("not implemented")}var sX=aX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lX=rX,uX=oX,cX=sX,Nf;lX()?Nf=uX:Nf=cX;var l_=Nf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fX=lt,dX=typeof Uint8Array=="function";function hX(e){return dX&&e instanceof Uint8Array||fX(e)==="[object Uint8Array]"}var pX=hX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gX=pX,vX=gX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mX=255,yX=mX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bX=typeof Uint8Array=="function"?Uint8Array:null,$X=bX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _X=vX,Bu=yX,Xm=$X;function wX(){var e,t;if(typeof Xm!="function")return!1;try{t=[1,3.14,-3.14,Bu+1,Bu+2],t=new Xm(t),e=_X(t)&&t[0]===1&&t[1]===3&&t[2]===Bu-2&&t[3]===0&&t[4]===1}catch{e=!1}return e}var xX=wX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var SX=xX,kX=SX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var EX=typeof Uint8Array=="function"?Uint8Array:void 0,AX=EX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function TX(){throw new Error("not implemented")}var CX=TX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var PX=kX,MX=AX,OX=CX,Ff;PX()?Ff=MX:Ff=OX;var u_=Ff;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var IX=lt,LX=typeof Uint8ClampedArray=="function";function RX(e){return LX&&e instanceof Uint8ClampedArray||IX(e)==="[object Uint8ClampedArray]"}var NX=RX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var FX=NX,DX=FX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jX=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null,zX=jX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var BX=DX,Km=zX;function UX(){var e,t;if(typeof Km!="function")return!1;try{t=new Km([-1,0,1,3.14,4.99,255,256]),e=BX(t)&&t[0]===0&&t[1]===0&&t[2]===1&&t[3]===3&&t[4]===5&&t[5]===255&&t[6]===255}catch{e=!1}return e}var VX=UX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var GX=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0,YX=GX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function XX(){throw new Error("not implemented")}var KX=XX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var QX=HX,ZX=YX,qX=KX,Df;QX()?Df=ZX:Df=qX;var c_=Df;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var JX=lt,eK=typeof Int16Array=="function";function tK(e){return eK&&e instanceof Int16Array||JX(e)==="[object Int16Array]"}var nK=tK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rK=nK,iK=rK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oK=32767,aK=oK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sK=-32768,lK=sK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uK=typeof Int16Array=="function"?Int16Array:null,cK=uK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fK=iK,dK=aK,hK=lK,Qm=cK;function pK(){var e,t;if(typeof Qm!="function")return!1;try{t=new Qm([1,3.14,-3.14,dK+1]),e=fK(t)&&t[0]===1&&t[1]===3&&t[2]===-3&&t[3]===hK}catch{e=!1}return e}var gK=pK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vK=gK,mK=vK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yK=typeof Int16Array=="function"?Int16Array:void 0,bK=yK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function $K(){throw new Error("not implemented")}var _K=$K;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wK=mK,xK=bK,SK=_K,jf;wK()?jf=xK:jf=SK;var f_=jf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kK=lt,EK=typeof Uint16Array=="function";function AK(e){return EK&&e instanceof Uint16Array||kK(e)==="[object Uint16Array]"}var TK=AK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var CK=TK,PK=CK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var MK=65535,OK=MK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var IK=typeof Uint16Array=="function"?Uint16Array:null,LK=IK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var RK=PK,Uu=OK,Zm=LK;function NK(){var e,t;if(typeof Zm!="function")return!1;try{t=[1,3.14,-3.14,Uu+1,Uu+2],t=new Zm(t),e=RK(t)&&t[0]===1&&t[1]===3&&t[2]===Uu-2&&t[3]===0&&t[4]===1}catch{e=!1}return e}var FK=NK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var DK=FK,jK=DK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zK=typeof Uint16Array=="function"?Uint16Array:void 0,BK=zK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function UK(){throw new Error("not implemented")}var VK=UK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var WK=jK,HK=BK,GK=VK,zf;WK()?zf=HK:zf=GK;var d_=zf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var YK=lt,XK=typeof Int32Array=="function";function KK(e){return XK&&e instanceof Int32Array||YK(e)==="[object Int32Array]"}var QK=KK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ZK=QK,qK=ZK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var JK=2147483647,eQ=JK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tQ=-2147483648,nQ=tQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rQ=typeof Int32Array=="function"?Int32Array:null,iQ=rQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oQ=qK,aQ=eQ,sQ=nQ,qm=iQ;function lQ(){var e,t;if(typeof qm!="function")return!1;try{t=new qm([1,3.14,-3.14,aQ+1]),e=oQ(t)&&t[0]===1&&t[1]===3&&t[2]===-3&&t[3]===sQ}catch{e=!1}return e}var uQ=lQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cQ=uQ,fQ=cQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dQ=typeof Int32Array=="function"?Int32Array:void 0,hQ=dQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function pQ(){throw new Error("not implemented")}var gQ=pQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vQ=fQ,mQ=hQ,yQ=gQ,Bf;vQ()?Bf=mQ:Bf=yQ;var h_=Bf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bQ=lt,$Q=typeof Float32Array=="function";function _Q(e){return $Q&&e instanceof Float32Array||bQ(e)==="[object Float32Array]"}var wQ=_Q;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xQ=wQ,SQ=xQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kQ=typeof Float32Array=="function"?Float32Array:null,EQ=kQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var AQ=SQ,TQ=Ml,Jm=EQ;function CQ(){var e,t;if(typeof Jm!="function")return!1;try{t=new Jm([1,3.14,-3.14,5e40]),e=AQ(t)&&t[0]===1&&t[1]===3.140000104904175&&t[2]===-3.140000104904175&&t[3]===TQ}catch{e=!1}return e}var PQ=CQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var MQ=PQ,OQ=MQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var IQ=typeof Float32Array=="function"?Float32Array:void 0,LQ=IQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function RQ(){throw new Error("not implemented")}var NQ=RQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var FQ=OQ,DQ=LQ,jQ=NQ,Uf;FQ()?Uf=DQ:Uf=jQ;var Fh=Uf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zQ=l_,BQ=u_,UQ=c_,VQ=f_,WQ=d_,HQ=h_,GQ=ph,YQ=Fh,XQ=Hl,KQ=[XQ,YQ,HQ,GQ,VQ,WQ,zQ,BQ,UQ],QQ=KQ;const ZQ=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"];/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qQ=Zt,JQ=bY,p_=Pl,eZ=s_,tZ=Hl,ey=QQ,ty=ZQ,ys=eZ()?p_(tZ):g_;ys=JQ(ys)==="TypedArray"?ys:g_;function g_(){}function nZ(e){var t,n;if(typeof e!="object"||e===null)return!1;if(e instanceof ys)return!0;for(n=0;n<ey.length;n++)if(e instanceof ey[n])return!0;for(;e;){for(t=qQ(e),n=0;n<ty.length;n++)if(ty[n]===t)return!0;e=p_(e)}return!1}var rZ=nZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iZ=rZ,oZ=iZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aZ=Ah,sZ=Nh,lZ=[sZ,aZ],uZ=lZ;const cZ=["Complex64Array","Complex128Array"];/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fZ=Zt,dZ=Pl,ny=uZ,ry=cZ;function hZ(e){var t,n;if(typeof e!="object"||e===null)return!1;for(n=0;n<ny.length;n++)if(e instanceof ny[n])return!0;for(;e;){for(t=fZ(e),n=0;n<ry.length;n++)if(ry[n]===t)return!0;e=dZ(e)}return!1}var pZ=hZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gZ=pZ,vZ=gZ;/**
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
*/var mZ=Fh;function yZ(e,t){return new mZ(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*t,2*(e.length-t))}var bZ=yZ;/**
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
*/var $Z=bZ,_Z=$Z;/**
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
*/var wZ=Hl;function xZ(e,t){return new wZ(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*t,2*(e.length-t))}var SZ=xZ;/**
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
*/var kZ=SZ,EZ=kZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var AZ=ie;function TZ(e,t){if(typeof t!="function")throw new TypeError(AZ("invalid argument. Second argument must be callable. Value: `%s`.",t));return e instanceof t}var CZ=TZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var PZ=CZ,MZ=PZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var OZ=l_,IZ=u_,LZ=c_,RZ=f_,NZ=d_,FZ=h_,DZ=ph,jZ=Fh,zZ=Hl,BZ=Ah,UZ=Nh,VZ=[[zZ,"Float64Array"],[jZ,"Float32Array"],[FZ,"Int32Array"],[DZ,"Uint32Array"],[RZ,"Int16Array"],[NZ,"Uint16Array"],[OZ,"Int8Array"],[IZ,"Uint8Array"],[LZ,"Uint8ClampedArray"],[BZ,"Complex64Array"],[UZ,"Complex128Array"]],WZ=VZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var HZ=MZ,GZ=Zt,YZ=Pl,Nr=WZ;function XZ(e){var t,n;for(n=0;n<Nr.length;n++)if(HZ(e,Nr[n][0]))return Nr[n][1];for(;e;){for(t=GZ(e),n=0;n<Nr.length;n++)if(t===Nr[n][1])return Nr[n][1];e=YZ(e)}}var KZ=XZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var QZ=oZ,ZZ=vZ,qZ=_Z,JZ=EZ,eq=ie,tq=KZ;function nq(e){var t,n,r;if(QZ(e))t=e;else if(ZZ(e))e.BYTES_PER_ELEMENT===8?t=qZ(e,0):t=JZ(e,0);else throw new TypeError(eq("invalid argument. Must provide a typed array. Value: `%s`.",e));for(n={type:tq(e),data:[]},r=0;r<t.length;r++)n.data.push(t[r]);return n}var rq=nq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iq=rq,v_=iq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oq=hh,aq=Bb,sq=oq-1;function lq(){var e=aq(1+sq*Math.random());return e>>>0}var m_=lq,en=Vt,$n=Tb,iy=Cb,Vu=Tl,uq=zb,cq=JM,oy=Vb,fq=Lb.isPrimitive,ay=nI.isPrimitive,y_=iI,b_=hh,Qe=ph,dq=OI,Vf=NI,Fr=QG,hq=v_,qe=ie,sy=m_,Te=624,Wu=397,ly=b_>>>0,pq=19650218,Hu=2147483648,Gu=2147483647,gq=1812433253,vq=1664525,mq=1566083941,yq=2636928640,bq=4022730752,$q=2567483615,Yu=[0,$q>>>0],$_=1/(y_+1),_q=67108864,wq=2147483648,Xu=1,xq=y_*$_,al=1,sl=3,kn=2,En=Te+3,Ze=Te+5,ko=Te+6;function uy(e,t){var n;return t?n="option":n="argument",e.length<ko+1?new RangeError(qe("invalid %s. `state` array has insufficient length.",n)):e[0]!==al?new RangeError(qe("invalid %s. `state` array has an incompatible schema version. Expected: `%s`. Actual: `%s.`",n,al,e[0])):e[1]!==sl?new RangeError(qe("invalid %s. `state` array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",n,sl,e[1])):e[kn]!==Te?new RangeError(qe("invalid %s. `state` array has an incompatible state length. Expected: `%u`. Actual: `%u`.",n,Te,e[kn])):e[En]!==1?new RangeError(qe("invalid %s. `state` array has an incompatible section length. Expected: `%u`. Actual: `%u`.",n,1,e[En])):e[Ze]!==e.length-ko?new RangeError(qe("invalid %s. `state` array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",n,e.length-ko,e[Ze])):null}function cy(e,t,n){var r;for(e[0]=n>>>0,r=1;r<t;r++)n=e[r-1]>>>0,n=(n^n>>>30)>>>0,e[r]=Vf(n,gq)+r>>>0;return e}function Sq(e,t,n,r){var i,o,a,s;for(o=1,a=0,s=dq(t,r);s>0;s--)i=e[o-1]>>>0,i=(i^i>>>30)>>>0,i=Vf(i,vq)>>>0,e[o]=(e[o]>>>0^i)+n[a]+a>>>0,o+=1,a+=1,o>=t&&(e[0]=e[t-1],o=1),a>=r&&(a=0);for(s=t-1;s>0;s--)i=e[o-1]>>>0,i=(i^i>>>30)>>>0,i=Vf(i,mq)>>>0,e[o]=(e[o]>>>0^i)-o>>>0,o+=1,o>=t&&(e[0]=e[t-1],o=1);return e[0]=wq,e}function kq(e){var t,n,r,i;for(i=Te-Wu,n=0;n<i;n++)t=e[n]&Hu|e[n+1]&Gu,e[n]=e[n+Wu]^t>>>1^Yu[t&Xu];for(r=Te-1;n<r;n++)t=e[n]&Hu|e[n+1]&Gu,e[n]=e[n-i]^t>>>1^Yu[t&Xu];return t=e[r]&Hu|e[0]&Gu,e[r]=e[Wu-1]^t>>>1^Yu[t&Xu],e}function Eq(e){var t,n,r,i,o,a;if(r={},arguments.length){if(!uq(e))throw new TypeError(qe("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Vu(e,"copy")&&(r.copy=e.copy,!fq(e.copy)))throw new TypeError(qe("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",e.copy));if(Vu(e,"state")){if(n=e.state,r.state=!0,!oy(n))throw new TypeError(qe("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n));if(a=uy(n,!0),a)throw a;r.copy===!1?t=n:(t=new Qe(n.length),Fr(n.length,n,1,t,1)),n=new Qe(t.buffer,t.byteOffset+(kn+1)*t.BYTES_PER_ELEMENT,Te),i=new Qe(t.buffer,t.byteOffset+(Ze+1)*t.BYTES_PER_ELEMENT,n[Ze])}if(i===void 0)if(Vu(e,"seed"))if(i=e.seed,r.seed=!0,ay(i)){if(i>ly)throw new RangeError(qe("invalid option. `%s` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",i));i>>>=0}else{if(cq(i)===!1||i.length<1)throw new TypeError(qe("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",i));if(i.length===1){if(i=i[0],!ay(i))throw new TypeError(qe("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",i));if(i>ly)throw new RangeError(qe("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",i));i>>>=0}else o=i.length,t=new Qe(ko+o),t[0]=al,t[1]=sl,t[kn]=Te,t[En]=1,t[En+1]=Te,t[Ze]=o,Fr.ndarray(o,i,1,0,t,1,Ze+1),n=new Qe(t.buffer,t.byteOffset+(kn+1)*t.BYTES_PER_ELEMENT,Te),i=new Qe(t.buffer,t.byteOffset+(Ze+1)*t.BYTES_PER_ELEMENT,o),n=cy(n,Te,pq),n=Sq(n,Te,i,o)}else i=sy()>>>0}else i=sy()>>>0;return n===void 0&&(t=new Qe(ko+1),t[0]=al,t[1]=sl,t[kn]=Te,t[En]=1,t[En+1]=Te,t[Ze]=1,t[Ze+1]=i,n=new Qe(t.buffer,t.byteOffset+(kn+1)*t.BYTES_PER_ELEMENT,Te),i=new Qe(t.buffer,t.byteOffset+(Ze+1)*t.BYTES_PER_ELEMENT,1),n=cy(n,Te,i)),en(g,"NAME","mt19937"),$n(g,"seed",s),$n(g,"seedLength",l),iy(g,"state",f,d),$n(g,"stateLength",u),$n(g,"byteLength",c),en(g,"toJSON",h),en(g,"MIN",0),en(g,"MAX",b_),en(g,"normalized",m),en(m,"NAME",g.NAME),$n(m,"seed",s),$n(m,"seedLength",l),iy(m,"state",f,d),$n(m,"stateLength",u),$n(m,"byteLength",c),en(m,"toJSON",h),en(m,"MIN",0),en(m,"MAX",xq),g;function s(){var y=t[Ze];return Fr(y,i,1,new Qe(y),1)}function l(){return t[Ze]}function u(){return t.length}function c(){return t.byteLength}function f(){var y=t.length;return Fr(y,t,1,new Qe(y),1)}function d(y){var p;if(!oy(y))throw new TypeError(qe("invalid argument. Must provide a Uint32Array. Value: `%s`.",y));if(p=uy(y,!1),p)throw p;r.copy===!1?r.state&&y.length===t.length?Fr(y.length,y,1,t,1):(t=y,r.state=!0):(y.length!==t.length&&(t=new Qe(y.length)),Fr(y.length,y,1,t,1)),n=new Qe(t.buffer,t.byteOffset+(kn+1)*t.BYTES_PER_ELEMENT,Te),i=new Qe(t.buffer,t.byteOffset+(Ze+1)*t.BYTES_PER_ELEMENT,t[Ze])}function h(){var y={};return y.type="PRNG",y.name=g.NAME,y.state=hq(t),y.params=[],y}function g(){var y,p;return p=t[En+1],p>=Te&&(n=kq(n),p=0),y=n[p],t[En+1]=p+1,y^=y>>>11,y^=y<<7&yq,y^=y<<15&bq,y^=y>>>18,y>>>0}function m(){var y=g()>>>5,p=g()>>>6;return(y*_q+p)*$_}}var __=Eq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Aq=__,Tq=m_,Cq=Aq({seed:Tq()}),Pq=Cq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mq=Vt,w_=Pq,Oq=__;Mq(w_,"factory",Oq);var Iq=w_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lq=ta.isPrimitive,Rq=Ol;function Nq(e){return Lq(e)&&Rq(e)}var x_=Nq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fq=ta.isObject,Dq=Ol;function jq(e){return Fq(e)&&Dq(e.valueOf())}var S_=jq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zq=x_,Bq=S_;function Uq(e){return zq(e)||Bq(e)}var Vq=Uq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k_=Vt,Dh=Vq,Wq=x_,Hq=S_;k_(Dh,"isPrimitive",Wq);k_(Dh,"isObject",Hq);var Gq=Dh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ku=ta.isPrimitive,Ka=ie,Qu=Gq;function Yq(e,t,n){return!Ku(e)||Qu(e)?new TypeError(Ka("invalid argument. First argument must be a number and not NaN. Value: `%s`.",e)):!Ku(t)||Qu(t)?new TypeError(Ka("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",t)):!Ku(n)||Qu(n)?new TypeError(Ka("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",n)):e<=n&&n<=t?null:new RangeError(Ka("invalid arguments. Parameters must satisfy the following condition: %s. a: `%f`. b: `%f`. c: `%f`.","a <= c <= b",e,t,n))}var Xq=Yq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kq=Math.sqrt,Qq=Kq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zq=Qq,qq=Zq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fy=qq;function Jq(e,t,n,r){var i,o,a;return i=(r-t)/(n-t),a=e(),a<i?(o=(n-t)*(r-t),t+fy(o*a)):(o=(n-t)*(n-r),n-fy(o*(1-a)))}var eJ=Jq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tn=Vt,Qa=Tb,dy=Cb,hy=zb,py=Cl,gy=Tl,vy=LM,tJ=DM,Za=Iq.factory,Zu=Ol,nJ=v_,qa=ie,rJ=Xq,my=eJ;function iJ(){var e,t,n,r,i,o,a;if(arguments.length===0)t=Za();else if(arguments.length===1){if(e=arguments[0],!hy(e))throw new TypeError(qa("invalid argument. Options argument must be an object. Value: `%s`.",e));if(gy(e,"prng")){if(!py(e.prng))throw new TypeError(qa("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Za(e)}else{if(i=arguments[0],o=arguments[1],a=arguments[2],r=rJ(i,o,a),r)throw r;if(arguments.length>3){if(e=arguments[3],!hy(e))throw new TypeError(qa("invalid argument. Options argument must be an object. Value: `%s`.",e));if(gy(e,"prng")){if(!py(e.prng))throw new TypeError(qa("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Za(e)}else t=Za()}return i===void 0?n=m:n=g,tn(n,"NAME","triangular"),e&&e.prng?(tn(n,"seed",null),tn(n,"seedLength",null),dy(n,"state",vy(null),tJ),tn(n,"stateLength",null),tn(n,"byteLength",null),tn(n,"toJSON",vy(null)),tn(n,"PRNG",t)):(Qa(n,"seed",s),Qa(n,"seedLength",l),dy(n,"state",f,d),Qa(n,"stateLength",u),Qa(n,"byteLength",c),tn(n,"toJSON",h),tn(n,"PRNG",t),t=t.normalized),n;function s(){return t.seed}function l(){return t.seedLength}function u(){return t.stateLength}function c(){return t.byteLength}function f(){return t.state}function d(y){t.state=y}function h(){var y={};return y.type="PRNG",y.name=n.NAME,y.state=nJ(t.state),i===void 0?y.params=[]:y.params=[i,o,a],y}function g(){return my(t,i,o,a)}function m(y,p,v){return Zu(y)||Zu(p)||Zu(v)||!(y<=v&&v<=p)?NaN:my(t,y,p,v)}}var E_=iJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oJ=E_,aJ=oJ(),sJ=aJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lJ=Vt,A_=sJ,uJ=E_;lJ(A_,"factory",uJ);var cJ=A_;const yy=xy(cJ);function fJ(){for(var e=0,t,n,r="";e<arguments.length;)(t=arguments[e++])&&(n=T_(t))&&(r&&(r+=" "),r+=n);return r}function T_(e){if(typeof e=="string")return e;for(var t,n="",r=0;r<e.length;r++)e[r]&&(t=T_(e[r]))&&(n&&(n+=" "),n+=t);return n}var jh="-";function dJ(e){var t=pJ(e),n=e.conflictingClassGroups,r=e.conflictingClassGroupModifiers,i=r===void 0?{}:r;function o(s){var l=s.split(jh);return l[0]===""&&l.length!==1&&l.shift(),C_(l,t)||hJ(s)}function a(s,l){var u=n[s]||[];return l&&i[s]?[].concat(u,i[s]):u}return{getClassGroupId:o,getConflictingClassGroupIds:a}}function C_(e,t){var a;if(e.length===0)return t.classGroupId;var n=e[0],r=t.nextPart.get(n),i=r?C_(e.slice(1),r):void 0;if(i)return i;if(t.validators.length!==0){var o=e.join(jh);return(a=t.validators.find(function(s){var l=s.validator;return l(o)}))==null?void 0:a.classGroupId}}var by=/^\[(.+)\]$/;function hJ(e){if(by.test(e)){var t=by.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}}function pJ(e){var t=e.theme,n=e.prefix,r={nextPart:new Map,validators:[]},i=vJ(Object.entries(e.classGroups),n);return i.forEach(function(o){var a=o[0],s=o[1];Wf(s,r,a,t)}),r}function Wf(e,t,n,r){e.forEach(function(i){if(typeof i=="string"){var o=i===""?t:$y(t,i);o.classGroupId=n;return}if(typeof i=="function"){if(gJ(i)){Wf(i(r),t,n,r);return}t.validators.push({validator:i,classGroupId:n});return}Object.entries(i).forEach(function(a){var s=a[0],l=a[1];Wf(l,$y(t,s),n,r)})})}function $y(e,t){var n=e;return t.split(jh).forEach(function(r){n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n}function gJ(e){return e.isThemeGetter}function vJ(e,t){return t?e.map(function(n){var r=n[0],i=n[1],o=i.map(function(a){return typeof a=="string"?t+a:typeof a=="object"?Object.fromEntries(Object.entries(a).map(function(s){var l=s[0],u=s[1];return[t+l,u]})):a});return[r,o]}):e}function mJ(e){if(e<1)return{get:function(){},set:function(){}};var t=0,n=new Map,r=new Map;function i(o,a){n.set(o,a),t++,t>e&&(t=0,r=n,n=new Map)}return{get:function(a){var s=n.get(a);if(s!==void 0)return s;if((s=r.get(a))!==void 0)return i(a,s),s},set:function(a,s){n.has(a)?n.set(a,s):i(a,s)}}}var P_="!";function yJ(e){var t=e.separator||":",n=t.length===1,r=t[0],i=t.length;return function(a){for(var s=[],l=0,u=0,c,f=0;f<a.length;f++){var d=a[f];if(l===0){if(d===r&&(n||a.slice(f,f+i)===t)){s.push(a.slice(u,f)),u=f+i;continue}if(d==="/"){c=f;continue}}d==="["?l++:d==="]"&&l--}var h=s.length===0?a:a.substring(u),g=h.startsWith(P_),m=g?h.substring(1):h,y=c&&c>u?c-u:void 0;return{modifiers:s,hasImportantModifier:g,baseClassName:m,maybePostfixModifierPosition:y}}}function bJ(e){if(e.length<=1)return e;var t=[],n=[];return e.forEach(function(r){var i=r[0]==="[";i?(t.push.apply(t,n.sort().concat([r])),n=[]):n.push(r)}),t.push.apply(t,n.sort()),t}function $J(e){return{cache:mJ(e.cacheSize),splitModifiers:yJ(e),...dJ(e)}}var _J=/\s+/;function wJ(e,t){var n=t.splitModifiers,r=t.getClassGroupId,i=t.getConflictingClassGroupIds,o=new Set;return e.trim().split(_J).map(function(a){var s=n(a),l=s.modifiers,u=s.hasImportantModifier,c=s.baseClassName,f=s.maybePostfixModifierPosition,d=r(f?c.substring(0,f):c),h=!!f;if(!d){if(!f)return{isTailwindClass:!1,originalClassName:a};if(d=r(c),!d)return{isTailwindClass:!1,originalClassName:a};h=!1}var g=bJ(l).join(":"),m=u?g+P_:g;return{isTailwindClass:!0,modifierId:m,classGroupId:d,originalClassName:a,hasPostfixModifier:h}}).reverse().filter(function(a){if(!a.isTailwindClass)return!0;var s=a.modifierId,l=a.classGroupId,u=a.hasPostfixModifier,c=s+l;return o.has(c)?!1:(o.add(c),i(l,u).forEach(function(f){return o.add(s+f)}),!0)}).reverse().map(function(a){return a.originalClassName}).join(" ")}function xJ(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r,i,o,a=s;function s(u){var c=t[0],f=t.slice(1),d=f.reduce(function(h,g){return g(h)},c());return r=$J(d),i=r.cache.get,o=r.cache.set,a=l,l(u)}function l(u){var c=i(u);if(c)return c;var f=wJ(u,r);return o(u,f),f}return function(){return a(fJ.apply(null,arguments))}}function ae(e){var t=function(r){return r[e]||[]};return t.isThemeGetter=!0,t}var M_=/^\[(?:([a-z-]+):)?(.+)\]$/i,SJ=/^\d+\/\d+$/,kJ=new Set(["px","full","screen"]),EJ=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,AJ=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,TJ=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function Rt(e){return fr(e)||kJ.has(e)||SJ.test(e)||Hf(e)}function Hf(e){return Or(e,"length",LJ)}function CJ(e){return Or(e,"size",O_)}function PJ(e){return Or(e,"position",O_)}function MJ(e){return Or(e,"url",RJ)}function Ja(e){return Or(e,"number",fr)}function fr(e){return!Number.isNaN(Number(e))}function OJ(e){return e.endsWith("%")&&fr(e.slice(0,-1))}function Zi(e){return _y(e)||Or(e,"number",_y)}function H(e){return M_.test(e)}function qi(){return!0}function _n(e){return EJ.test(e)}function IJ(e){return Or(e,"",NJ)}function Or(e,t,n){var r=M_.exec(e);return r?r[1]?r[1]===t:n(r[2]):!1}function LJ(e){return AJ.test(e)}function O_(){return!1}function RJ(e){return e.startsWith("url(")}function _y(e){return Number.isInteger(Number(e))}function NJ(e){return TJ.test(e)}function FJ(){var e=ae("colors"),t=ae("spacing"),n=ae("blur"),r=ae("brightness"),i=ae("borderColor"),o=ae("borderRadius"),a=ae("borderSpacing"),s=ae("borderWidth"),l=ae("contrast"),u=ae("grayscale"),c=ae("hueRotate"),f=ae("invert"),d=ae("gap"),h=ae("gradientColorStops"),g=ae("gradientColorStopPositions"),m=ae("inset"),y=ae("margin"),p=ae("opacity"),v=ae("padding"),b=ae("saturate"),$=ae("scale"),_=ae("sepia"),k=ae("skew"),w=ae("space"),E=ae("translate"),C=function(){return["auto","contain","none"]},P=function(){return["auto","hidden","clip","visible","scroll"]},x=function(){return["auto",H,t]},S=function(){return[H,t]},M=function(){return["",Rt]},D=function(){return["auto",fr,H]},R=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},L=function(){return["solid","dashed","dotted","double","none"]},j=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},A=function(){return["start","end","center","between","around","evenly","stretch"]},O=function(){return["","0",H]},I=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},B=function(){return[fr,Ja]},z=function(){return[fr,H]};return{cacheSize:500,theme:{colors:[qi],spacing:[Rt],blur:["none","",_n,H],brightness:B(),borderColor:[e],borderRadius:["none","","full",_n,H],borderSpacing:S(),borderWidth:M(),contrast:B(),grayscale:O(),hueRotate:z(),invert:O(),gap:S(),gradientColorStops:[e],gradientColorStopPositions:[OJ,Hf],inset:x(),margin:x(),opacity:B(),padding:S(),saturate:B(),scale:B(),sepia:O(),skew:z(),space:S(),translate:S()},classGroups:{aspect:[{aspect:["auto","square","video",H]}],container:["container"],columns:[{columns:[_n]}],"break-after":[{"break-after":I()}],"break-before":[{"break-before":I()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(R(),[H])}],overflow:[{overflow:P()}],"overflow-x":[{"overflow-x":P()}],"overflow-y":[{"overflow-y":P()}],overscroll:[{overscroll:C()}],"overscroll-x":[{"overscroll-x":C()}],"overscroll-y":[{"overscroll-y":C()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Zi]}],basis:[{basis:x()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",H]}],grow:[{grow:O()}],shrink:[{shrink:O()}],order:[{order:["first","last","none",Zi]}],"grid-cols":[{"grid-cols":[qi]}],"col-start-end":[{col:["auto",{span:["full",Zi]},H]}],"col-start":[{"col-start":D()}],"col-end":[{"col-end":D()}],"grid-rows":[{"grid-rows":[qi]}],"row-start-end":[{row:["auto",{span:[Zi]},H]}],"row-start":[{"row-start":D()}],"row-end":[{"row-end":D()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",H]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",H]}],gap:[{gap:[d]}],"gap-x":[{"gap-x":[d]}],"gap-y":[{"gap-y":[d]}],"justify-content":[{justify:["normal"].concat(A())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(A(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(A(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[v]}],px:[{px:[v]}],py:[{py:[v]}],ps:[{ps:[v]}],pe:[{pe:[v]}],pt:[{pt:[v]}],pr:[{pr:[v]}],pb:[{pb:[v]}],pl:[{pl:[v]}],m:[{m:[y]}],mx:[{mx:[y]}],my:[{my:[y]}],ms:[{ms:[y]}],me:[{me:[y]}],mt:[{mt:[y]}],mr:[{mr:[y]}],mb:[{mb:[y]}],ml:[{ml:[y]}],"space-x":[{"space-x":[w]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[w]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",H,t]}],"min-w":[{"min-w":["min","max","fit",H,Rt]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[_n]},_n,H]}],h:[{h:[H,t,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",H,Rt]}],"max-h":[{"max-h":[H,t,"min","max","fit"]}],"font-size":[{text:["base",_n,Hf]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Ja]}],"font-family":[{font:[qi]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",H]}],"line-clamp":[{"line-clamp":["none",fr,Ja]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",H,Rt]}],"list-image":[{"list-image":["none",H]}],"list-style-type":[{list:["none","disc","decimal",H]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[p]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[p]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(L(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",Rt]}],"underline-offset":[{"underline-offset":["auto",H,Rt]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:S()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",H]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",H]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[p]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(R(),[PJ])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",CJ]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},MJ]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[g]}],"gradient-via-pos":[{via:[g]}],"gradient-to-pos":[{to:[g]}],"gradient-from":[{from:[h]}],"gradient-via":[{via:[h]}],"gradient-to":[{to:[h]}],rounded:[{rounded:[o]}],"rounded-s":[{"rounded-s":[o]}],"rounded-e":[{"rounded-e":[o]}],"rounded-t":[{"rounded-t":[o]}],"rounded-r":[{"rounded-r":[o]}],"rounded-b":[{"rounded-b":[o]}],"rounded-l":[{"rounded-l":[o]}],"rounded-ss":[{"rounded-ss":[o]}],"rounded-se":[{"rounded-se":[o]}],"rounded-ee":[{"rounded-ee":[o]}],"rounded-es":[{"rounded-es":[o]}],"rounded-tl":[{"rounded-tl":[o]}],"rounded-tr":[{"rounded-tr":[o]}],"rounded-br":[{"rounded-br":[o]}],"rounded-bl":[{"rounded-bl":[o]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[p]}],"border-style":[{border:[].concat(L(),["hidden"])}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[p]}],"divide-style":[{divide:L()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:[""].concat(L())}],"outline-offset":[{"outline-offset":[H,Rt]}],"outline-w":[{outline:[Rt]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:M()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[p]}],"ring-offset-w":[{"ring-offset":[Rt]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",_n,IJ]}],"shadow-color":[{shadow:[qi]}],opacity:[{opacity:[p]}],"mix-blend":[{"mix-blend":j()}],"bg-blend":[{"bg-blend":j()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",_n,H]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[c]}],invert:[{invert:[f]}],saturate:[{saturate:[b]}],sepia:[{sepia:[_]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[c]}],"backdrop-invert":[{"backdrop-invert":[f]}],"backdrop-opacity":[{"backdrop-opacity":[p]}],"backdrop-saturate":[{"backdrop-saturate":[b]}],"backdrop-sepia":[{"backdrop-sepia":[_]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",H]}],duration:[{duration:z()}],ease:[{ease:["linear","in","out","in-out",H]}],delay:[{delay:z()}],animate:[{animate:["none","spin","ping","pulse","bounce",H]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[$]}],"scale-x":[{"scale-x":[$]}],"scale-y":[{"scale-y":[$]}],rotate:[{rotate:[Zi,H]}],"translate-x":[{"translate-x":[E]}],"translate-y":[{"translate-y":[E]}],"skew-x":[{"skew-x":[k]}],"skew-y":[{"skew-y":[k]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",H]}],accent:[{accent:["auto",e]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",H]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":S()}],"scroll-mx":[{"scroll-mx":S()}],"scroll-my":[{"scroll-my":S()}],"scroll-ms":[{"scroll-ms":S()}],"scroll-me":[{"scroll-me":S()}],"scroll-mt":[{"scroll-mt":S()}],"scroll-mr":[{"scroll-mr":S()}],"scroll-mb":[{"scroll-mb":S()}],"scroll-ml":[{"scroll-ml":S()}],"scroll-p":[{"scroll-p":S()}],"scroll-px":[{"scroll-px":S()}],"scroll-py":[{"scroll-py":S()}],"scroll-ps":[{"scroll-ps":S()}],"scroll-pe":[{"scroll-pe":S()}],"scroll-pt":[{"scroll-pt":S()}],"scroll-pr":[{"scroll-pr":S()}],"scroll-pb":[{"scroll-pb":S()}],"scroll-pl":[{"scroll-pl":S()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",H]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[Rt,Ja]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}var DJ=xJ(FJ),Gf={},zh={},Bh={},Gl={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Direction=void 0,function(t){t.Right="to right",t.Left="to left",t.Down="to bottom",t.Up="to top"}(e.Direction||(e.Direction={}))})(Gl);(function(e){var t=st&&st.__spreadArray||function(x,S,M){if(M||arguments.length===2)for(var D=0,R=S.length,L;D<R;D++)(L||!(D in S))&&(L||(L=Array.prototype.slice.call(S,0,D)),L[D]=S[D]);return x.concat(L||Array.prototype.slice.call(S))};Object.defineProperty(e,"__esModule",{value:!0}),e.useThumbOverlap=e.assertUnreachable=e.voidFn=e.getTrackBackground=e.replaceAt=e.schd=e.translate=e.getClosestThumbIndex=e.translateThumbs=e.getPaddingAndBorder=e.getMargin=e.checkInitialOverlap=e.checkValuesAgainstBoundaries=e.checkBoundaries=e.isVertical=e.relativeValue=e.normalizeValue=e.isStepDivisible=e.isTouchEvent=e.getStepDecimals=void 0;var n=W,r=Gl,i=function(x){var S=x.toString().split(".")[1];return S?S.length:0};e.getStepDecimals=i;function o(x){return x.touches&&x.touches.length||x.changedTouches&&x.changedTouches.length}e.isTouchEvent=o;function a(x,S,M){var D=(S-x)/M,R=8,L=Number(D.toFixed(R));return parseInt(L.toString(),10)===L}e.isStepDivisible=a;function s(x,S,M,D,R,L,j){var A=1e11;if(x=Math.round(x*A)/A,!L){var O=j[S-1],I=j[S+1];if(O&&O>x)return O;if(I&&I<x)return I}if(x>D)return D;if(x<M)return M;var B=Math.floor(x*A-M*A)%Math.floor(R*A),z=Math.floor(x*A-Math.abs(B)),V=B===0?x:z/A,X=Math.abs(B/A)<R/2?V:V+R,ce=(0,e.getStepDecimals)(R);return parseFloat(X.toFixed(ce))}e.normalizeValue=s;function l(x,S,M){return(x-S)/(M-S)}e.relativeValue=l;function u(x){return x===r.Direction.Up||x===r.Direction.Down}e.isVertical=u;function c(x,S,M){if(S>=M)throw new RangeError("min (".concat(S,") is equal/bigger than max (").concat(M,")"));if(x<S)throw new RangeError("value (".concat(x,") is smaller than min (").concat(S,")"));if(x>M)throw new RangeError("value (".concat(x,") is bigger than max (").concat(M,")"))}e.checkBoundaries=c;function f(x,S,M){return x<S?S:x>M?M:x}e.checkValuesAgainstBoundaries=f;function d(x){if(!(x.length<2)&&!x.slice(1).every(function(S,M){return x[M]<=S}))throw new RangeError("values={[".concat(x,"]} needs to be sorted when allowOverlap={false}"))}e.checkInitialOverlap=d;function h(x){var S=window.getComputedStyle(x);return{top:parseInt(S["margin-top"],10),bottom:parseInt(S["margin-bottom"],10),left:parseInt(S["margin-left"],10),right:parseInt(S["margin-right"],10)}}e.getMargin=h;function g(x){var S=window.getComputedStyle(x);return{top:parseInt(S["padding-top"],10)+parseInt(S["border-top-width"],10),bottom:parseInt(S["padding-bottom"],10)+parseInt(S["border-bottom-width"],10),left:parseInt(S["padding-left"],10)+parseInt(S["border-left-width"],10),right:parseInt(S["padding-right"],10)+parseInt(S["border-right-width"],10)}}e.getPaddingAndBorder=g;function m(x,S,M){var D=M?-1:1;x.forEach(function(R,L){return p(R,D*S[L].x,S[L].y)})}e.translateThumbs=m;function y(x,S,M,D){for(var R=0,L=P(x[0],S,M,D),j=1;j<x.length;j++){var A=P(x[j],S,M,D);A<L&&(L=A,R=j)}return R}e.getClosestThumbIndex=y;function p(x,S,M){x.style.transform="translate(".concat(S,"px, ").concat(M,"px)")}e.translate=p;var v=function(x){var S=[],M=null,D=function(){for(var R=[],L=0;L<arguments.length;L++)R[L]=arguments[L];S=R,!M&&(M=requestAnimationFrame(function(){M=null,x.apply(void 0,S)}))};return D};e.schd=v;function b(x,S,M){var D=x.slice(0);return D[S]=M,D}e.replaceAt=b;function $(x){var S=x.values,M=x.colors,D=x.min,R=x.max,L=x.direction,j=L===void 0?r.Direction.Right:L,A=x.rtl,O=A===void 0?!1:A;O&&j===r.Direction.Right?j=r.Direction.Left:O&&r.Direction.Left&&(j=r.Direction.Right);var I=S.slice(0).sort(function(z,V){return z-V}).map(function(z){return(z-D)/(R-D)*100}),B=I.reduce(function(z,V,X){return"".concat(z,", ").concat(M[X]," ").concat(V,"%, ").concat(M[X+1]," ").concat(V,"%")},"");return"linear-gradient(".concat(j,", ").concat(M[0]," 0%").concat(B,", ").concat(M[M.length-1]," 100%)")}e.getTrackBackground=$;function _(){}e.voidFn=_;function k(x){throw new Error("Didn't expect to get here")}e.assertUnreachable=k;var w=function(x,S,M,D,R){R===void 0&&(R=function(j){return j});var L=Math.ceil(t([x],Array.from(x.children),!0).reduce(function(j,A){var O=Math.ceil(A.getBoundingClientRect().width);if(A.innerText&&A.innerText.includes(M)&&A.childElementCount===0){var I=A.cloneNode(!0);I.innerHTML=R(S.toFixed(D)),I.style.visibility="hidden",document.body.appendChild(I),O=Math.ceil(I.getBoundingClientRect().width),document.body.removeChild(I)}return O>j?O:j},x.getBoundingClientRect().width));return L},E=function(x,S,M,D,R,L,j){j===void 0&&(j=function(I){return I});var A=[],O=function(I){var B=w(M[I],D[I],R,L,j),z=S[I].x;S.forEach(function(V,X){var ce=V.x,te=w(M[X],D[X],R,L,j);I!==X&&(z>=ce&&z<=ce+te||z+B>=ce&&z+B<=ce+te)&&(A.includes(X)||(A.push(I),A.push(X),A=t(t([],A,!0),[I,X],!1),O(X)))})};return O(x),Array.from(new Set(A.sort()))},C=function(x,S,M,D,R,L){D===void 0&&(D=.1),R===void 0&&(R=" - "),L===void 0&&(L=function(X){return X});var j=(0,e.getStepDecimals)(D),A=(0,n.useState)({}),O=A[0],I=A[1],B=(0,n.useState)(L(S[M].toFixed(j))),z=B[0],V=B[1];return(0,n.useEffect)(function(){if(x){var X=x.getThumbs();if(X.length<1)return;var ce={},te=x.getOffsets(),It=E(M,te,X,S,R,j,L),la=L(S[M].toFixed(j));if(It.length){var Ir=It.reduce(function(ye,De,Ee,ut){return ye.length?t(t([],ye,!0),[te[ut[Ee]].x],!1):[te[ut[Ee]].x]},[]);if(Math.min.apply(Math,Ir)===te[M].x){var Mi=[];It.forEach(function(ye){Mi.push(S[ye].toFixed(j))}),la=Array.from(new Set(Mi.sort(function(ye,De){return parseFloat(ye)-parseFloat(De)}))).map(L).join(R);var ua=Math.min.apply(Math,Ir),ca=Math.max.apply(Math,Ir),K=X[It[Ir.indexOf(ca)]].getBoundingClientRect().width;ce.left="".concat(Math.abs(ua-(ca+K))/2,"px"),ce.transform="translate(-50%, 0)"}else ce.visibility="hidden"}V(la),I(ce)}},[x,S]),[z,O]};e.useThumbOverlap=C;function P(x,S,M,D){var R=x.getBoundingClientRect(),L=R.left,j=R.top,A=R.width,O=R.height;return u(D)?Math.abs(M-(j+O/2)):Math.abs(S-(L+A/2))}})(Bh);var jJ=st&&st.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),zJ=st&&st.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),BJ=st&&st.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),UJ=st&&st.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&zJ(t,e,n);return BJ(t,e),t},wy=st&&st.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(zh,"__esModule",{value:!0});var es=UJ(W),Q=Bh,Ae=Gl,VJ=["ArrowRight","ArrowUp","k","PageUp"],WJ=["ArrowLeft","ArrowDown","j","PageDown"],HJ=function(e){jJ(t,e);function t(n){var r=e.call(this,n)||this;if(r.trackRef=es.createRef(),r.thumbRefs=[],r.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(r.props.values.length).fill(0).map(function(i,o){return o}),isChanged:!1,markOffsets:[]},r.getOffsets=function(){var i=r.props,o=i.direction,a=i.values,s=i.min,l=i.max,u=r.trackRef.current,c=u.getBoundingClientRect(),f=(0,Q.getPaddingAndBorder)(u);return r.getThumbs().map(function(d,h){var g={x:0,y:0},m=d.getBoundingClientRect(),y=(0,Q.getMargin)(d);switch(o){case Ae.Direction.Right:return g.x=(y.left+f.left)*-1,g.y=((m.height-c.height)/2+f.top)*-1,g.x+=c.width*(0,Q.relativeValue)(a[h],s,l)-m.width/2,g;case Ae.Direction.Left:return g.x=(y.right+f.right)*-1,g.y=((m.height-c.height)/2+f.top)*-1,g.x+=c.width-c.width*(0,Q.relativeValue)(a[h],s,l)-m.width/2,g;case Ae.Direction.Up:return g.x=((m.width-c.width)/2+y.left+f.left)*-1,g.y=-f.left,g.y+=c.height-c.height*(0,Q.relativeValue)(a[h],s,l)-m.height/2,g;case Ae.Direction.Down:return g.x=((m.width-c.width)/2+y.left+f.left)*-1,g.y=-f.left,g.y+=c.height*(0,Q.relativeValue)(a[h],s,l)-m.height/2,g;default:return(0,Q.assertUnreachable)(o)}})},r.getThumbs=function(){return r.trackRef&&r.trackRef.current?Array.from(r.trackRef.current.children).filter(function(i){return i.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},r.getTargetIndex=function(i){return r.getThumbs().findIndex(function(o){return o===i.target||o.contains(i.target)})},r.addTouchEvents=function(i){document.addEventListener("touchmove",r.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",r.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",r.schdOnEnd,{passive:!1})},r.addMouseEvents=function(i){document.addEventListener("mousemove",r.schdOnMouseMove),document.addEventListener("mouseup",r.schdOnEnd)},r.onMouseDownTrack=function(i){var o;if(i.button===0)if(i.persist(),i.preventDefault(),r.addMouseEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(s){var l;return(l=s.current)===null||l===void 0?void 0:l.contains(i.target)}))return;r.setState({draggedTrackPos:[i.clientX,i.clientY]},function(){return r.onMove(i.clientX,i.clientY)})}else{var a=(0,Q.getClosestThumbIndex)(r.thumbRefs.map(function(s){return s.current}),i.clientX,i.clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.clientX,i.clientY)})}},r.onResize=function(){(0,Q.translateThumbs)(r.getThumbs(),r.getOffsets(),r.props.rtl),r.calculateMarkOffsets()},r.onTouchStartTrack=function(i){var o;if(i.persist(),r.addTouchEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(s){var l;return(l=s.current)===null||l===void 0?void 0:l.contains(i.target)}))return;r.setState({draggedTrackPos:[i.touches[0].clientX,i.touches[0].clientY]},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}else{var a=(0,Q.getClosestThumbIndex)(r.thumbRefs.map(function(s){return s.current}),i.touches[0].clientX,i.touches[0].clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}},r.onMouseOrTouchStart=function(i){if(!r.props.disabled){var o=(0,Q.isTouchEvent)(i);if(!(!o&&i.button!==0)){var a=r.getTargetIndex(i);a!==-1&&(o?r.addTouchEvents(i):r.addMouseEvents(i),r.setState({draggedThumbIndex:a,thumbZIndexes:r.state.thumbZIndexes.map(function(s,l){return l===a?Math.max.apply(Math,r.state.thumbZIndexes):s<=r.state.thumbZIndexes[a]?s:s-1})}))}}},r.onMouseMove=function(i){i.preventDefault(),r.onMove(i.clientX,i.clientY)},r.onTouchMove=function(i){i.preventDefault(),r.onMove(i.touches[0].clientX,i.touches[0].clientY)},r.onKeyDown=function(i){var o=r.props,a=o.values,s=o.onChange,l=o.step,u=o.rtl,c=o.direction,f=r.state.isChanged,d=r.getTargetIndex(i.nativeEvent),h=u||c===Ae.Direction.Left||c===Ae.Direction.Down?-1:1;d!==-1&&(VJ.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:d,isChanged:!0}),s((0,Q.replaceAt)(a,d,r.normalizeValue(a[d]+h*(i.key==="PageUp"?l*10:l),d)))):WJ.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:d,isChanged:!0}),s((0,Q.replaceAt)(a,d,r.normalizeValue(a[d]-h*(i.key==="PageDown"?l*10:l),d)))):i.key==="Tab"?r.setState({draggedThumbIndex:-1},function(){f&&r.fireOnFinalChange()}):f&&r.fireOnFinalChange())},r.onKeyUp=function(i){var o=r.state.isChanged;r.setState({draggedThumbIndex:-1},function(){o&&r.fireOnFinalChange()})},r.onMove=function(i,o){var a=r.state,s=a.draggedThumbIndex,l=a.draggedTrackPos,u=r.props,c=u.direction,f=u.min,d=u.max,h=u.onChange,g=u.values,m=u.step,y=u.rtl;if(s===-1&&l[0]===-1&&l[1]===-1)return null;var p=r.trackRef.current;if(!p)return null;var v=p.getBoundingClientRect(),b=(0,Q.isVertical)(c)?v.height:v.width;if(l[0]!==-1&&l[1]!==-1){var $=i-l[0],_=o-l[1],k=0;switch(c){case Ae.Direction.Right:case Ae.Direction.Left:k=$/b*(d-f);break;case Ae.Direction.Down:case Ae.Direction.Up:k=_/b*(d-f);break;default:(0,Q.assertUnreachable)(c)}if(y&&(k*=-1),Math.abs(k)>=m/2){for(var w=0;w<r.thumbRefs.length;w++){if(g[w]===d&&Math.sign(k)===1||g[w]===f&&Math.sign(k)===-1)return;var E=g[w]+k;E>d?k=d-g[w]:E<f&&(k=f-g[w])}for(var C=g.slice(0),w=0;w<r.thumbRefs.length;w++)C=(0,Q.replaceAt)(C,w,r.normalizeValue(g[w]+k,w));r.setState({draggedTrackPos:[i,o]}),h(C)}}else{var P=0;switch(c){case Ae.Direction.Right:P=(i-v.left)/b*(d-f)+f;break;case Ae.Direction.Left:P=(b-(i-v.left))/b*(d-f)+f;break;case Ae.Direction.Down:P=(o-v.top)/b*(d-f)+f;break;case Ae.Direction.Up:P=(b-(o-v.top))/b*(d-f)+f;break;default:(0,Q.assertUnreachable)(c)}y&&(P=d+f-P),Math.abs(g[s]-P)>=m/2&&h((0,Q.replaceAt)(g,s,r.normalizeValue(P,s)))}},r.normalizeValue=function(i,o){var a=r.props,s=a.min,l=a.max,u=a.step,c=a.allowOverlap,f=a.values;return(0,Q.normalizeValue)(i,o,s,l,u,c,f)},r.onEnd=function(i){if(i.preventDefault(),document.removeEventListener("mousemove",r.schdOnMouseMove),document.removeEventListener("touchmove",r.schdOnTouchMove),document.removeEventListener("mouseup",r.schdOnEnd),document.removeEventListener("touchend",r.schdOnEnd),document.removeEventListener("touchcancel",r.schdOnEnd),r.state.draggedThumbIndex===-1&&r.state.draggedTrackPos[0]===-1&&r.state.draggedTrackPos[1]===-1)return null;r.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){r.fireOnFinalChange()})},r.fireOnFinalChange=function(){r.setState({isChanged:!1});var i=r.props,o=i.onFinalChange,a=i.values;o&&o(a)},r.updateMarkRefs=function(i){if(!i.renderMark){r.numOfMarks=void 0,r.markRefs=void 0;return}r.numOfMarks=(i.max-i.min)/r.props.step,r.markRefs=[];for(var o=0;o<r.numOfMarks+1;o++)r.markRefs[o]=es.createRef()},r.calculateMarkOffsets=function(){if(!(!r.props.renderMark||!r.trackRef||!r.numOfMarks||!r.markRefs||r.trackRef.current===null)){for(var i=window.getComputedStyle(r.trackRef.current),o=parseInt(i.width,10),a=parseInt(i.height,10),s=parseInt(i.paddingLeft,10),l=parseInt(i.paddingTop,10),u=[],c=0;c<r.numOfMarks+1;c++){var f=9999,d=9999;if(r.markRefs[c].current){var h=r.markRefs[c].current.getBoundingClientRect();f=h.height,d=h.width}r.props.direction===Ae.Direction.Left||r.props.direction===Ae.Direction.Right?u.push([Math.round(o/r.numOfMarks*c+s-d/2),-Math.round((f-a)/2)]):u.push([Math.round(a/r.numOfMarks*c+l-f/2),-Math.round((d-o)/2)])}r.setState({markOffsets:u})}},n.step===0)throw new Error('"step" property should be a positive number');return r.schdOnMouseMove=(0,Q.schd)(r.onMouseMove),r.schdOnTouchMove=(0,Q.schd)(r.onTouchMove),r.schdOnEnd=(0,Q.schd)(r.onEnd),r.thumbRefs=n.values.map(function(){return es.createRef()}),r.updateMarkRefs(n),r}return t.prototype.componentDidMount=function(){var n=this,r=this.props,i=r.values,o=r.min,a=r.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",n.onResize)},unobserve:function(){return window.removeEventListener("resize",n.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,Q.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(s){return(0,Q.checkBoundaries)(s,n.props.min,n.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,Q.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),i.forEach(function(s){(0,Q.isStepDivisible)(o,s,a)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},t.prototype.componentDidUpdate=function(n,r){var i=this.props,o=i.max,a=i.min,s=i.step,l=i.values,u=i.rtl;(n.max!==o||n.min!==a||n.step!==s)&&this.updateMarkRefs(this.props),(0,Q.translateThumbs)(this.getThumbs(),this.getOffsets(),u),(n.max!==o||n.min!==a||n.step!==s||r.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),l.forEach(function(c){(0,Q.isStepDivisible)(a,c,s)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},t.prototype.componentWillUnmount=function(){var n={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,n),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},t.prototype.render=function(){var n=this,r=this.props,i=r.renderTrack,o=r.renderThumb,a=r.renderMark,s=a===void 0?function(){return null}:a,l=r.values,u=r.min,c=r.max,f=r.allowOverlap,d=r.disabled,h=this.state,g=h.draggedThumbIndex,m=h.thumbZIndexes,y=h.markOffsets;return i({props:{style:{transform:"scale(1)",cursor:g>-1?"grabbing":this.props.draggableTrack?(0,Q.isVertical)(this.props.direction)?"ns-resize":"ew-resize":l.length===1&&!d?"pointer":"inherit"},onMouseDown:d?Q.voidFn:this.onMouseDownTrack,onTouchStart:d?Q.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:d,children:wy(wy([],y.map(function(p,v,b){return s({props:{style:n.props.direction===Ae.Direction.Left||n.props.direction===Ae.Direction.Right?{position:"absolute",left:"".concat(p[0],"px"),marginTop:"".concat(p[1],"px")}:{position:"absolute",top:"".concat(p[0],"px"),marginLeft:"".concat(p[1],"px")},key:"mark".concat(v),ref:n.markRefs[v]},index:v})}),!0),l.map(function(p,v){var b=n.state.draggedThumbIndex===v;return o({index:v,value:p,isDragged:b,props:{style:{position:"absolute",zIndex:m[v],cursor:d?"inherit":b?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:v,tabIndex:d?void 0:0,"aria-valuemax":f?c:l[v+1]||c,"aria-valuemin":f?u:l[v-1]||u,"aria-valuenow":p,draggable:!1,ref:n.thumbRefs[v],role:"slider",onKeyDown:d?Q.voidFn:n.onKeyDown,onKeyUp:d?Q.voidFn:n.onKeyUp}})}),!0)})},t.defaultProps={step:1,direction:Ae.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},t}(es.Component);zh.default=HJ;(function(e){var t=st&&st.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(e,"__esModule",{value:!0}),e.checkValuesAgainstBoundaries=e.relativeValue=e.useThumbOverlap=e.Direction=e.getTrackBackground=e.Range=void 0;var n=t(zh);e.Range=n.default;var r=Bh;Object.defineProperty(e,"getTrackBackground",{enumerable:!0,get:function(){return r.getTrackBackground}}),Object.defineProperty(e,"useThumbOverlap",{enumerable:!0,get:function(){return r.useThumbOverlap}}),Object.defineProperty(e,"relativeValue",{enumerable:!0,get:function(){return r.relativeValue}}),Object.defineProperty(e,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return r.checkValuesAgainstBoundaries}});var i=Gl;Object.defineProperty(e,"Direction",{enumerable:!0,get:function(){return i.Direction}})})(Gf);const nn=({min:e,max:t,step:n=1,values:r,onChange:i})=>N.jsx(Gf.Range,{step:n,min:e,max:t,values:r,onChange:i,renderTrack:({props:o,children:a})=>N.jsx("div",{onMouseDown:o.onMouseDown,onTouchStart:o.onTouchStart,style:{...o.style,height:"36px",display:"flex",width:"100%"},children:N.jsx("div",{ref:o.ref,style:{height:"5px",width:"100%",borderRadius:"4px",background:Gf.getTrackBackground({values:r,colors:r.length===1?["#548BF4","#ccc"]:["#ccc","#548BF4","#ccc"],min:e,max:t}),alignSelf:"center"},children:a})}),renderThumb:({props:o,isDragged:a,value:s})=>N.jsx("div",{...o,style:{...o.style,height:"1.5rem",width:"1.5rem",borderRadius:"2px",backgroundColor:"#FFF",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"0px 2px 6px #AAA"},children:N.jsx("div",{className:DJ("h-2 w-1 bg-[#CCC] relative",a&&"bg-[#548BF4]"),children:N.jsx("div",{className:"absolute rounded-sm -top-8 left-1/2 text-sm -translate-x-1/2 bg-white shadow p-[2px]",children:s})})})});El.register(Jc,ef,vs,ao,FE,HE,RE);const GJ=(e,t)=>{const n=e+Math.random()*(t+1-e);return Math.floor(n)},Dr=new Intl.NumberFormat("ru-RU",{style:"currency",currency:"RUB"}).format,YJ=()=>{const[e,t]=W.useState(1e5),[n,r]=W.useState(.2),[i,o]=W.useState(5e4),[a,s]=W.useState(5e4),[l,u]=W.useState(10),[c,f]=W.useState([500,2e3]),[d,h]=W.useState([5e4,2e5]),[g,m]=W.useState(5e4),[y,p]=W.useState(100),[v,b]=W.useState([{name:"Пицца Гавайская",price:300},{name:"Пицца Сырная",price:200},{name:"Пицца Ветчина и сыр",price:400},{name:"Пицца Мясная",price:450},{name:"Пицца Мясная",price:450}]),$=W.useRef(null),[_,k]=W.useState(!1),[w,E]=W.useState(!1),[C,P]=W.useState(0),[x,S]=W.useState(0),[M,D]=W.useState(0),[R,L]=W.useState(0),[j,A]=W.useState([]),[O,I]=W.useState([]),[B,z]=W.useState([]),[V,X]=W.useState([]),ce=K=>Math.floor(K*300),te=(K,ye)=>K-ye,It=K=>{K.preventDefault(),w||(L(n),D(e),E(!0)),k(!0)},la=()=>{k(!1)},Ir=(K,ye)=>{const De=Number(ye);isNaN(De)||b(Ee=>Ee.map(ut=>ut.name!==K?ut:{name:K,price:De}))},Mi=j[j.length-1]??0,ua=O[O.length-1]??0,ca=te(ua,Mi);return W.useEffect(()=>{const K=()=>{const De=ce(R),Ee=[...v].sort(($t,oe)=>oe.price-$t.price);let ut=0;for(let $t=0;$t<De;$t++){const oe=c[0]+(c[1]-c[0])*.2;let fa=yy(c[0],c[1],oe);for(const Yl of Ee)for(;fa>=Yl.price;)ut+=Yl.price,fa-=Yl.price}return ut},ye=De=>{let Ee=0;if(Ee+=De*.5,C%30===0&&(Ee+=a,Ee+=i,C!==0)){const $t=B.slice(C-29,C).reduce((oe,fa)=>oe+fa);Ee+=$t*(l/100)}if(C%7===0){const ut=d[0]+(d[1]-d[0])*.3,$t=yy(d[0],d[1],ut);Ee+=$t}return Ee};return _?$.current=setTimeout(()=>{const De=K()+(C===0?e:0),Ee=ye(De),ut=te(De,Ee);F1.flushSync(()=>{P(oe=>oe+1),L(oe=>+(oe+GJ(-1,1)/100).toFixed(2)),S(oe=>oe+Ee),D(oe=>oe+De),A(oe=>[...oe,Ee]),I(oe=>[...oe,De]),z(oe=>[...oe,ut])});const $t=te(M,x);X(oe=>[...oe,$t]),$t>0&&$t>g*10&&C%120===0&&(L(oe=>+(oe+.1).toFixed(2)),S(oe=>oe+g))},y):$.current!==null&&clearTimeout($.current),()=>{$.current!==null&&clearTimeout($.current)}},[C,y,R,a,i,M,x,g,_,v,c,d,e]),N.jsxs("div",{className:"main-container",children:[N.jsx("header",{className:"mb-10",children:N.jsx("h1",{className:"text-2xl py-4",children:"Цифровой двойник пиццерии"})}),N.jsxs("form",{onSubmit:It,className:"mb-10",children:[N.jsxs("div",{className:"grid grid-cols-2 gap-20 mb-4",children:[N.jsxs("div",{className:"flex flex-col gap-4",children:[N.jsxs("label",{className:"flex items-center whitespace-nowrap gap-4",children:["Стартовый капитал:",N.jsx("div",{className:"max-w-xs w-full",children:N.jsx(nn,{min:1e5,max:1e6,values:[e],onChange:K=>t(K[0])})})]}),N.jsxs("label",{className:"flex items-center whitespace-nowrap gap-4",children:["Стартовая популярность:",N.jsx("div",{className:"max-w-xs w-full",children:N.jsx(nn,{min:.1,max:1,step:.1,values:[n],onChange:K=>r(K[0])})})]}),N.jsxs("label",{className:"flex items-center whitespace-nowrap gap-4",children:["Аренда помещения (раз в месяц):",N.jsx("div",{className:"max-w-xs w-full",children:N.jsx(nn,{min:5e4,max:1e6,values:[i],onChange:K=>o(K[0])})})]}),N.jsxs("label",{className:"flex items-center whitespace-nowrap gap-4",children:["Зарплата сотрудников, всего (раз в месяц):",N.jsx("div",{className:"max-w-xs w-full",children:N.jsx(nn,{min:5e4,max:1e6,values:[a],onChange:K=>s(K[0])})})]}),N.jsxs("label",{className:"flex items-center whitespace-nowrap gap-4",children:["Налоги (%):",N.jsx("div",{className:"max-w-xs w-full",children:N.jsx(nn,{min:0,max:100,values:[l],onChange:K=>u(K[0])})})]}),N.jsxs("label",{className:"flex items-center whitespace-nowrap gap-4",children:["Кошелёк покупателя:",N.jsx("div",{className:"max-w-xs w-full",children:N.jsx(nn,{min:500,max:15e3,values:c,onChange:f})})]}),N.jsxs("label",{className:"flex items-center whitespace-nowrap gap-4",children:["Стоимость разрешения инцидентов:",N.jsx("div",{className:"max-w-xs w-full",children:N.jsx(nn,{min:5e4,max:3e5,values:d,onChange:h})})]}),N.jsxs("label",{className:"flex items-center whitespace-nowrap gap-4",children:["Стоимость одной рекламы:",N.jsx("div",{className:"max-w-xs w-full",children:N.jsx(nn,{min:5e4,max:2e6,values:[g],onChange:K=>m(K[0])})})]}),N.jsxs("label",{className:"flex items-center whitespace-nowrap gap-4",children:["Скорость дня (мс):",N.jsx("div",{className:"max-w-xs w-full",children:N.jsx(nn,{min:1,max:1e4,values:[y],onChange:K=>p(K[0])})})]})]}),N.jsx("div",{className:"flex flex-col gap-1",children:v.map(({name:K,price:ye},De)=>N.jsxs("label",{children:[K,":"," ",N.jsx("input",{type:"text",value:ye,onChange:Ee=>Ir(K,Ee.target.value)})]},De))})]}),N.jsxs("div",{className:"flex items-center gap-3",children:[N.jsx("button",{className:"bg-[#548BF4] px-6 py-2 rounded text-white font-semibold",children:"Начать"}),_&&N.jsx("button",{className:"bg-red-500 px-6 py-2 rounded text-white font-semibold",onClick:la,type:"button",children:"Стоп"})]})]}),N.jsxs("div",{className:"mb-10",children:[N.jsxs("p",{children:["День: ",C]}),N.jsxs("p",{children:["Расходы всего: ",Dr(x)]}),N.jsxs("p",{children:["Доходы всего: ",Dr(M)]}),N.jsxs("p",{children:["Прибыль всего: ",Dr(te(M,x))]}),N.jsxs("p",{children:["Популярность: ",R]}),N.jsxs("p",{children:["Клиентов сегодня: ",ce(R)]}),N.jsxs("p",{children:["Расходы сегодня: ",Dr(Mi)]}),N.jsxs("p",{children:["Доходы сегодня: ",Dr(ua)]}),N.jsxs("p",{children:["Прибыль сегодня: ",Dr(ca)]})]}),N.jsxs("div",{className:"grid grid-cols-2 gap-4 px-10 pb-32",children:[N.jsx("div",{children:N.jsx(Wa,{options:{responsive:!0},data:{labels:new Array(C).fill(0).map((K,ye)=>ye),datasets:[{label:"Расходы",data:j,borderColor:"rgb(255, 99, 132)",backgroundColor:"rgba(255, 99, 132, 0.5)"}]}})}),N.jsx("div",{children:N.jsx(Wa,{options:{responsive:!0},data:{labels:new Array(C).fill(0).map((K,ye)=>ye),datasets:[{label:"Доходы",data:O,borderColor:"rgb(53, 162, 235)",backgroundColor:"rgba(53, 162, 235, 0.5)"}]}})}),N.jsx("div",{children:N.jsx(Wa,{options:{responsive:!0},data:{labels:new Array(C).fill(0).map((K,ye)=>ye),datasets:[{label:"Прибыль",data:V,borderColor:"rgb(53, 162, 53)",backgroundColor:"rgba(53, 162, 53, 0.5)"}]}})}),N.jsx("div",{children:N.jsx(Wa,{options:{responsive:!0},data:{labels:new Array(C).fill(0).map((K,ye)=>ye),datasets:[{label:"Расходы",data:j,borderColor:"rgb(255, 99, 132)",backgroundColor:"rgba(255, 99, 132, 0.5)"},{label:"Доходы",data:O,borderColor:"rgb(53, 162, 235)",backgroundColor:"rgba(53, 162, 235, 0.5)"}]}})})]})]})};qu.createRoot(document.getElementById("root")).render(N.jsx(Zf.StrictMode,{children:N.jsx(YJ,{})}));
