var C_=Object.defineProperty;var P_=(e,t,n)=>t in e?C_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var U=(e,t,n)=>(P_(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var st=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function by(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $y={exports:{}},ol={},_y={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xo=Symbol.for("react.element"),M_=Symbol.for("react.portal"),O_=Symbol.for("react.fragment"),I_=Symbol.for("react.strict_mode"),L_=Symbol.for("react.profiler"),N_=Symbol.for("react.provider"),R_=Symbol.for("react.context"),F_=Symbol.for("react.forward_ref"),D_=Symbol.for("react.suspense"),j_=Symbol.for("react.memo"),z_=Symbol.for("react.lazy"),Dh=Symbol.iterator;function B_(e){return e===null||typeof e!="object"?null:(e=Dh&&e[Dh]||e["@@iterator"],typeof e=="function"?e:null)}var wy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xy=Object.assign,Sy={};function _i(e,t,n){this.props=e,this.context=t,this.refs=Sy,this.updater=n||wy}_i.prototype.isReactComponent={};_i.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};_i.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ky(){}ky.prototype=_i.prototype;function Vf(e,t,n){this.props=e,this.context=t,this.refs=Sy,this.updater=n||wy}var Wf=Vf.prototype=new ky;Wf.constructor=Vf;xy(Wf,_i.prototype);Wf.isPureReactComponent=!0;var jh=Array.isArray,Ey=Object.prototype.hasOwnProperty,Hf={current:null},Ay={key:!0,ref:!0,__self:!0,__source:!0};function Ty(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Ey.call(t,r)&&!Ay.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Xo,type:e,key:o,ref:a,props:i,_owner:Hf.current}}function U_(e,t){return{$$typeof:Xo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Gf(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xo}function V_(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var zh=/\/+/g;function Wl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?V_(""+e.key):t.toString(36)}function qa(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Xo:case M_:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Wl(a,0):r,jh(i)?(n="",e!=null&&(n=e.replace(zh,"$&/")+"/"),qa(i,t,n,"",function(u){return u})):i!=null&&(Gf(i)&&(i=U_(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(zh,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",jh(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+Wl(o,s);a+=qa(o,t,n,l,i)}else if(l=B_(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+Wl(o,s++),a+=qa(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ua(e,t,n){if(e==null)return e;var r=[],i=0;return qa(e,r,"","",function(o){return t.call(n,o,i++)}),r}function W_(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ge={current:null},Ja={transition:null},H_={ReactCurrentDispatcher:Ge,ReactCurrentBatchConfig:Ja,ReactCurrentOwner:Hf};H.Children={map:ua,forEach:function(e,t,n){ua(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ua(e,function(){t++}),t},toArray:function(e){return ua(e,function(t){return t})||[]},only:function(e){if(!Gf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=_i;H.Fragment=O_;H.Profiler=L_;H.PureComponent=Vf;H.StrictMode=I_;H.Suspense=D_;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H_;H.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=xy({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Hf.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Ey.call(t,l)&&!Ay.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Xo,type:e.type,key:i,ref:o,props:r,_owner:a}};H.createContext=function(e){return e={$$typeof:R_,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:N_,_context:e},e.Consumer=e};H.createElement=Ty;H.createFactory=function(e){var t=Ty.bind(null,e);return t.type=e,t};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:F_,render:e}};H.isValidElement=Gf;H.lazy=function(e){return{$$typeof:z_,_payload:{_status:-1,_result:e},_init:W_}};H.memo=function(e,t){return{$$typeof:j_,type:e,compare:t===void 0?null:t}};H.startTransition=function(e){var t=Ja.transition;Ja.transition={};try{e()}finally{Ja.transition=t}};H.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};H.useCallback=function(e,t){return Ge.current.useCallback(e,t)};H.useContext=function(e){return Ge.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return Ge.current.useDeferredValue(e)};H.useEffect=function(e,t){return Ge.current.useEffect(e,t)};H.useId=function(){return Ge.current.useId()};H.useImperativeHandle=function(e,t,n){return Ge.current.useImperativeHandle(e,t,n)};H.useInsertionEffect=function(e,t){return Ge.current.useInsertionEffect(e,t)};H.useLayoutEffect=function(e,t){return Ge.current.useLayoutEffect(e,t)};H.useMemo=function(e,t){return Ge.current.useMemo(e,t)};H.useReducer=function(e,t,n){return Ge.current.useReducer(e,t,n)};H.useRef=function(e){return Ge.current.useRef(e)};H.useState=function(e){return Ge.current.useState(e)};H.useSyncExternalStore=function(e,t,n){return Ge.current.useSyncExternalStore(e,t,n)};H.useTransition=function(){return Ge.current.useTransition()};H.version="18.2.0";_y.exports=H;var G=_y.exports;const Yf=by(G);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G_=G,Y_=Symbol.for("react.element"),X_=Symbol.for("react.fragment"),K_=Object.prototype.hasOwnProperty,Q_=G_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Z_={key:!0,ref:!0,__self:!0,__source:!0};function Cy(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)K_.call(t,r)&&!Z_.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Y_,type:e,key:o,ref:a,props:i,_owner:Q_.current}}ol.Fragment=X_;ol.jsx=Cy;ol.jsxs=Cy;$y.exports=ol;var F=$y.exports,Xu={},Py={exports:{}},yt={},My={exports:{}},Oy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,I){var O=A.length;A.push(I);e:for(;0<O;){var B=O-1>>>1,z=A[B];if(0<i(z,I))A[B]=I,A[O]=z,O=B;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var I=A[0],O=A.pop();if(O!==I){A[0]=O;e:for(var B=0,z=A.length,V=z>>>1;B<V;){var X=2*(B+1)-1,he=A[X],ue=X+1,$t=A[ue];if(0>i(he,O))ue<z&&0>i($t,he)?(A[B]=$t,A[ue]=O,B=ue):(A[B]=he,A[X]=O,B=X);else if(ue<z&&0>i($t,O))A[B]=$t,A[ue]=O,B=ue;else break e}}return I}function i(A,I){var O=A.sortIndex-I.sortIndex;return O!==0?O:A.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],c=1,f=null,d=3,h=!1,v=!1,m=!1,y=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(A){for(var I=n(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=A)r(u),I.sortIndex=I.expirationTime,t(l,I);else break;I=n(u)}}function $(A){if(m=!1,b(A),!v)if(n(l)!==null)v=!0,N(_);else{var I=n(u);I!==null&&j($,I.startTime-A)}}function _(A,I){v=!1,m&&(m=!1,p(E),E=-1),h=!0;var O=d;try{for(b(I),f=n(l);f!==null&&(!(f.expirationTime>I)||A&&!x());){var B=f.callback;if(typeof B=="function"){f.callback=null,d=f.priorityLevel;var z=B(f.expirationTime<=I);I=e.unstable_now(),typeof z=="function"?f.callback=z:f===n(l)&&r(l),b(I)}else r(l);f=n(l)}if(f!==null)var V=!0;else{var X=n(u);X!==null&&j($,X.startTime-I),V=!1}return V}finally{f=null,d=O,h=!1}}var k=!1,w=null,E=-1,M=5,C=-1;function x(){return!(e.unstable_now()-C<M)}function S(){if(w!==null){var A=e.unstable_now();C=A;var I=!0;try{I=w(!0,A)}finally{I?P():(k=!1,w=null)}}else k=!1}var P;if(typeof g=="function")P=function(){g(S)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,L=D.port2;D.port1.onmessage=S,P=function(){L.postMessage(null)}}else P=function(){y(S,0)};function N(A){w=A,k||(k=!0,P())}function j(A,I){E=y(function(){A(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){v||h||(v=!0,N(_))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(A){switch(d){case 1:case 2:case 3:var I=3;break;default:I=d}var O=d;d=I;try{return A()}finally{d=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,I){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var O=d;d=A;try{return I()}finally{d=O}},e.unstable_scheduleCallback=function(A,I,O){var B=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?B+O:B):O=B,A){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=O+z,A={id:c++,callback:I,priorityLevel:A,startTime:O,expirationTime:z,sortIndex:-1},O>B?(A.sortIndex=O,t(u,A),n(l)===null&&A===n(u)&&(m?(p(E),E=-1):m=!0,j($,O-B))):(A.sortIndex=z,t(l,A),v||h||(v=!0,N(_))),A},e.unstable_shouldYield=x,e.unstable_wrapCallback=function(A){var I=d;return function(){var O=d;d=I;try{return A.apply(this,arguments)}finally{d=O}}}})(Oy);My.exports=Oy;var q_=My.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iy=G,mt=q_;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ly=new Set,Eo={};function _r(e,t){si(e,t),si(e+"Capture",t)}function si(e,t){for(Eo[e]=t,e=0;e<t.length;e++)Ly.add(t[e])}var fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ku=Object.prototype.hasOwnProperty,J_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bh={},Uh={};function ew(e){return Ku.call(Uh,e)?!0:Ku.call(Bh,e)?!1:J_.test(e)?Uh[e]=!0:(Bh[e]=!0,!1)}function tw(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function nw(e,t,n,r){if(t===null||typeof t>"u"||tw(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ye(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Fe[e]=new Ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Fe[t]=new Ye(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Fe[e]=new Ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Fe[e]=new Ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Fe[e]=new Ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Fe[e]=new Ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Fe[e]=new Ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Fe[e]=new Ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Fe[e]=new Ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var Xf=/[\-:]([a-z])/g;function Kf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Xf,Kf);Fe[t]=new Ye(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Xf,Kf);Fe[t]=new Ye(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Xf,Kf);Fe[t]=new Ye(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Fe[e]=new Ye(e,1,!1,e.toLowerCase(),null,!1,!1)});Fe.xlinkHref=new Ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Fe[e]=new Ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function Qf(e,t,n,r){var i=Fe.hasOwnProperty(t)?Fe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(nw(t,n,i,r)&&(n=null),r||i===null?ew(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var vn=Iy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ca=Symbol.for("react.element"),jr=Symbol.for("react.portal"),zr=Symbol.for("react.fragment"),Zf=Symbol.for("react.strict_mode"),Qu=Symbol.for("react.profiler"),Ny=Symbol.for("react.provider"),Ry=Symbol.for("react.context"),qf=Symbol.for("react.forward_ref"),Zu=Symbol.for("react.suspense"),qu=Symbol.for("react.suspense_list"),Jf=Symbol.for("react.memo"),wn=Symbol.for("react.lazy"),Fy=Symbol.for("react.offscreen"),Vh=Symbol.iterator;function Oi(e){return e===null||typeof e!="object"?null:(e=Vh&&e[Vh]||e["@@iterator"],typeof e=="function"?e:null)}var me=Object.assign,Hl;function Ji(e){if(Hl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Hl=t&&t[1]||""}return`
`+Hl+e}var Gl=!1;function Yl(e,t){if(!e||Gl)return"";Gl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{Gl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ji(e):""}function rw(e){switch(e.tag){case 5:return Ji(e.type);case 16:return Ji("Lazy");case 13:return Ji("Suspense");case 19:return Ji("SuspenseList");case 0:case 2:case 15:return e=Yl(e.type,!1),e;case 11:return e=Yl(e.type.render,!1),e;case 1:return e=Yl(e.type,!0),e;default:return""}}function Ju(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case zr:return"Fragment";case jr:return"Portal";case Qu:return"Profiler";case Zf:return"StrictMode";case Zu:return"Suspense";case qu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ry:return(e.displayName||"Context")+".Consumer";case Ny:return(e._context.displayName||"Context")+".Provider";case qf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Jf:return t=e.displayName||null,t!==null?t:Ju(e.type)||"Memo";case wn:t=e._payload,e=e._init;try{return Ju(e(t))}catch{}}return null}function iw(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ju(t);case 8:return t===Zf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Un(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Dy(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ow(e){var t=Dy(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fa(e){e._valueTracker||(e._valueTracker=ow(e))}function jy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Dy(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function vs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ec(e,t){var n=t.checked;return me({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Wh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Un(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function zy(e,t){t=t.checked,t!=null&&Qf(e,"checked",t,!1)}function tc(e,t){zy(e,t);var n=Un(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?nc(e,t.type,n):t.hasOwnProperty("defaultValue")&&nc(e,t.type,Un(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Hh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function nc(e,t,n){(t!=="number"||vs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var eo=Array.isArray;function Zr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Un(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function rc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return me({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Gh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(T(92));if(eo(n)){if(1<n.length)throw Error(T(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Un(n)}}function By(e,t){var n=Un(t.value),r=Un(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Yh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Uy(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ic(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Uy(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var da,Vy=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(da=da||document.createElement("div"),da.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=da.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ao(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var lo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},aw=["Webkit","ms","Moz","O"];Object.keys(lo).forEach(function(e){aw.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),lo[t]=lo[e]})});function Wy(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||lo.hasOwnProperty(e)&&lo[e]?(""+t).trim():t+"px"}function Hy(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Wy(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var sw=me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oc(e,t){if(t){if(sw[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function ac(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sc=null;function ed(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var lc=null,qr=null,Jr=null;function Xh(e){if(e=Zo(e)){if(typeof lc!="function")throw Error(T(280));var t=e.stateNode;t&&(t=cl(t),lc(e.stateNode,e.type,t))}}function Gy(e){qr?Jr?Jr.push(e):Jr=[e]:qr=e}function Yy(){if(qr){var e=qr,t=Jr;if(Jr=qr=null,Xh(e),t)for(e=0;e<t.length;e++)Xh(t[e])}}function Xy(e,t){return e(t)}function Ky(){}var Xl=!1;function Qy(e,t,n){if(Xl)return e(t,n);Xl=!0;try{return Xy(e,t,n)}finally{Xl=!1,(qr!==null||Jr!==null)&&(Ky(),Yy())}}function To(e,t){var n=e.stateNode;if(n===null)return null;var r=cl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(T(231,t,typeof n));return n}var uc=!1;if(fn)try{var Ii={};Object.defineProperty(Ii,"passive",{get:function(){uc=!0}}),window.addEventListener("test",Ii,Ii),window.removeEventListener("test",Ii,Ii)}catch{uc=!1}function lw(e,t,n,r,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var uo=!1,ms=null,ys=!1,cc=null,uw={onError:function(e){uo=!0,ms=e}};function cw(e,t,n,r,i,o,a,s,l){uo=!1,ms=null,lw.apply(uw,arguments)}function fw(e,t,n,r,i,o,a,s,l){if(cw.apply(this,arguments),uo){if(uo){var u=ms;uo=!1,ms=null}else throw Error(T(198));ys||(ys=!0,cc=u)}}function wr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Zy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Kh(e){if(wr(e)!==e)throw Error(T(188))}function dw(e){var t=e.alternate;if(!t){if(t=wr(e),t===null)throw Error(T(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Kh(i),e;if(o===r)return Kh(i),t;o=o.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?e:t}function qy(e){return e=dw(e),e!==null?Jy(e):null}function Jy(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Jy(e);if(t!==null)return t;e=e.sibling}return null}var e0=mt.unstable_scheduleCallback,Qh=mt.unstable_cancelCallback,hw=mt.unstable_shouldYield,pw=mt.unstable_requestPaint,we=mt.unstable_now,gw=mt.unstable_getCurrentPriorityLevel,td=mt.unstable_ImmediatePriority,t0=mt.unstable_UserBlockingPriority,bs=mt.unstable_NormalPriority,vw=mt.unstable_LowPriority,n0=mt.unstable_IdlePriority,al=null,Xt=null;function mw(e){if(Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(al,e,void 0,(e.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:$w,yw=Math.log,bw=Math.LN2;function $w(e){return e>>>=0,e===0?32:31-(yw(e)/bw|0)|0}var ha=64,pa=4194304;function to(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function $s(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=to(s):(o&=a,o!==0&&(r=to(o)))}else a=n&~i,a!==0?r=to(a):o!==0&&(r=to(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-jt(t),i=1<<n,r|=e[n],t&=~i;return r}function _w(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ww(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-jt(o),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=_w(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function fc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function r0(){var e=ha;return ha<<=1,!(ha&4194240)&&(ha=64),e}function Kl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ko(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-jt(t),e[t]=n}function xw(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-jt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function nd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-jt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var te=0;function i0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var o0,rd,a0,s0,l0,dc=!1,ga=[],In=null,Ln=null,Nn=null,Co=new Map,Po=new Map,En=[],Sw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zh(e,t){switch(e){case"focusin":case"focusout":In=null;break;case"dragenter":case"dragleave":Ln=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":Co.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(t.pointerId)}}function Li(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Zo(t),t!==null&&rd(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function kw(e,t,n,r,i){switch(t){case"focusin":return In=Li(In,e,t,n,r,i),!0;case"dragenter":return Ln=Li(Ln,e,t,n,r,i),!0;case"mouseover":return Nn=Li(Nn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Co.set(o,Li(Co.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Po.set(o,Li(Po.get(o)||null,e,t,n,r,i)),!0}return!1}function u0(e){var t=ir(e.target);if(t!==null){var n=wr(t);if(n!==null){if(t=n.tag,t===13){if(t=Zy(n),t!==null){e.blockedOn=t,l0(e.priority,function(){a0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function es(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=hc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);sc=r,n.target.dispatchEvent(r),sc=null}else return t=Zo(n),t!==null&&rd(t),e.blockedOn=n,!1;t.shift()}return!0}function qh(e,t,n){es(e)&&n.delete(t)}function Ew(){dc=!1,In!==null&&es(In)&&(In=null),Ln!==null&&es(Ln)&&(Ln=null),Nn!==null&&es(Nn)&&(Nn=null),Co.forEach(qh),Po.forEach(qh)}function Ni(e,t){e.blockedOn===t&&(e.blockedOn=null,dc||(dc=!0,mt.unstable_scheduleCallback(mt.unstable_NormalPriority,Ew)))}function Mo(e){function t(i){return Ni(i,e)}if(0<ga.length){Ni(ga[0],e);for(var n=1;n<ga.length;n++){var r=ga[n];r.blockedOn===e&&(r.blockedOn=null)}}for(In!==null&&Ni(In,e),Ln!==null&&Ni(Ln,e),Nn!==null&&Ni(Nn,e),Co.forEach(t),Po.forEach(t),n=0;n<En.length;n++)r=En[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<En.length&&(n=En[0],n.blockedOn===null);)u0(n),n.blockedOn===null&&En.shift()}var ei=vn.ReactCurrentBatchConfig,_s=!0;function Aw(e,t,n,r){var i=te,o=ei.transition;ei.transition=null;try{te=1,id(e,t,n,r)}finally{te=i,ei.transition=o}}function Tw(e,t,n,r){var i=te,o=ei.transition;ei.transition=null;try{te=4,id(e,t,n,r)}finally{te=i,ei.transition=o}}function id(e,t,n,r){if(_s){var i=hc(e,t,n,r);if(i===null)ou(e,t,r,ws,n),Zh(e,r);else if(kw(i,e,t,n,r))r.stopPropagation();else if(Zh(e,r),t&4&&-1<Sw.indexOf(e)){for(;i!==null;){var o=Zo(i);if(o!==null&&o0(o),o=hc(e,t,n,r),o===null&&ou(e,t,r,ws,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ou(e,t,r,null,n)}}var ws=null;function hc(e,t,n,r){if(ws=null,e=ed(r),e=ir(e),e!==null)if(t=wr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Zy(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ws=e,null}function c0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gw()){case td:return 1;case t0:return 4;case bs:case vw:return 16;case n0:return 536870912;default:return 16}default:return 16}}var Tn=null,od=null,ts=null;function f0(){if(ts)return ts;var e,t=od,n=t.length,r,i="value"in Tn?Tn.value:Tn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return ts=i.slice(e,1<r?1-r:void 0)}function ns(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function va(){return!0}function Jh(){return!1}function bt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?va:Jh,this.isPropagationStopped=Jh,this}return me(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=va)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=va)},persist:function(){},isPersistent:va}),t}var wi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ad=bt(wi),Qo=me({},wi,{view:0,detail:0}),Cw=bt(Qo),Ql,Zl,Ri,sl=me({},Qo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ri&&(Ri&&e.type==="mousemove"?(Ql=e.screenX-Ri.screenX,Zl=e.screenY-Ri.screenY):Zl=Ql=0,Ri=e),Ql)},movementY:function(e){return"movementY"in e?e.movementY:Zl}}),ep=bt(sl),Pw=me({},sl,{dataTransfer:0}),Mw=bt(Pw),Ow=me({},Qo,{relatedTarget:0}),ql=bt(Ow),Iw=me({},wi,{animationName:0,elapsedTime:0,pseudoElement:0}),Lw=bt(Iw),Nw=me({},wi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Rw=bt(Nw),Fw=me({},wi,{data:0}),tp=bt(Fw),Dw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bw(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=zw[e])?!!t[e]:!1}function sd(){return Bw}var Uw=me({},Qo,{key:function(e){if(e.key){var t=Dw[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ns(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sd,charCode:function(e){return e.type==="keypress"?ns(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ns(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vw=bt(Uw),Ww=me({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),np=bt(Ww),Hw=me({},Qo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sd}),Gw=bt(Hw),Yw=me({},wi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xw=bt(Yw),Kw=me({},sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qw=bt(Kw),Zw=[9,13,27,32],ld=fn&&"CompositionEvent"in window,co=null;fn&&"documentMode"in document&&(co=document.documentMode);var qw=fn&&"TextEvent"in window&&!co,d0=fn&&(!ld||co&&8<co&&11>=co),rp=String.fromCharCode(32),ip=!1;function h0(e,t){switch(e){case"keyup":return Zw.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function p0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Br=!1;function Jw(e,t){switch(e){case"compositionend":return p0(t);case"keypress":return t.which!==32?null:(ip=!0,rp);case"textInput":return e=t.data,e===rp&&ip?null:e;default:return null}}function ex(e,t){if(Br)return e==="compositionend"||!ld&&h0(e,t)?(e=f0(),ts=od=Tn=null,Br=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return d0&&t.locale!=="ko"?null:t.data;default:return null}}var tx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function op(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!tx[e.type]:t==="textarea"}function g0(e,t,n,r){Gy(r),t=xs(t,"onChange"),0<t.length&&(n=new ad("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var fo=null,Oo=null;function nx(e){E0(e,0)}function ll(e){var t=Wr(e);if(jy(t))return e}function rx(e,t){if(e==="change")return t}var v0=!1;if(fn){var Jl;if(fn){var eu="oninput"in document;if(!eu){var ap=document.createElement("div");ap.setAttribute("oninput","return;"),eu=typeof ap.oninput=="function"}Jl=eu}else Jl=!1;v0=Jl&&(!document.documentMode||9<document.documentMode)}function sp(){fo&&(fo.detachEvent("onpropertychange",m0),Oo=fo=null)}function m0(e){if(e.propertyName==="value"&&ll(Oo)){var t=[];g0(t,Oo,e,ed(e)),Qy(nx,t)}}function ix(e,t,n){e==="focusin"?(sp(),fo=t,Oo=n,fo.attachEvent("onpropertychange",m0)):e==="focusout"&&sp()}function ox(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ll(Oo)}function ax(e,t){if(e==="click")return ll(t)}function sx(e,t){if(e==="input"||e==="change")return ll(t)}function lx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Bt=typeof Object.is=="function"?Object.is:lx;function Io(e,t){if(Bt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ku.call(t,i)||!Bt(e[i],t[i]))return!1}return!0}function lp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function up(e,t){var n=lp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=lp(n)}}function y0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?y0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function b0(){for(var e=window,t=vs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=vs(e.document)}return t}function ud(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ux(e){var t=b0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&y0(n.ownerDocument.documentElement,n)){if(r!==null&&ud(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=up(n,o);var a=up(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var cx=fn&&"documentMode"in document&&11>=document.documentMode,Ur=null,pc=null,ho=null,gc=!1;function cp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gc||Ur==null||Ur!==vs(r)||(r=Ur,"selectionStart"in r&&ud(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ho&&Io(ho,r)||(ho=r,r=xs(pc,"onSelect"),0<r.length&&(t=new ad("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ur)))}function ma(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Vr={animationend:ma("Animation","AnimationEnd"),animationiteration:ma("Animation","AnimationIteration"),animationstart:ma("Animation","AnimationStart"),transitionend:ma("Transition","TransitionEnd")},tu={},$0={};fn&&($0=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function ul(e){if(tu[e])return tu[e];if(!Vr[e])return e;var t=Vr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $0)return tu[e]=t[n];return e}var _0=ul("animationend"),w0=ul("animationiteration"),x0=ul("animationstart"),S0=ul("transitionend"),k0=new Map,fp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hn(e,t){k0.set(e,t),_r(t,[e])}for(var nu=0;nu<fp.length;nu++){var ru=fp[nu],fx=ru.toLowerCase(),dx=ru[0].toUpperCase()+ru.slice(1);Hn(fx,"on"+dx)}Hn(_0,"onAnimationEnd");Hn(w0,"onAnimationIteration");Hn(x0,"onAnimationStart");Hn("dblclick","onDoubleClick");Hn("focusin","onFocus");Hn("focusout","onBlur");Hn(S0,"onTransitionEnd");si("onMouseEnter",["mouseout","mouseover"]);si("onMouseLeave",["mouseout","mouseover"]);si("onPointerEnter",["pointerout","pointerover"]);si("onPointerLeave",["pointerout","pointerover"]);_r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_r("onBeforeInput",["compositionend","keypress","textInput","paste"]);_r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var no="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hx=new Set("cancel close invalid load scroll toggle".split(" ").concat(no));function dp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,fw(r,t,void 0,e),e.currentTarget=null}function E0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;dp(i,s,u),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;dp(i,s,u),o=l}}}if(ys)throw e=cc,ys=!1,cc=null,e}function ae(e,t){var n=t[$c];n===void 0&&(n=t[$c]=new Set);var r=e+"__bubble";n.has(r)||(A0(t,e,2,!1),n.add(r))}function iu(e,t,n){var r=0;t&&(r|=4),A0(n,e,r,t)}var ya="_reactListening"+Math.random().toString(36).slice(2);function Lo(e){if(!e[ya]){e[ya]=!0,Ly.forEach(function(n){n!=="selectionchange"&&(hx.has(n)||iu(n,!1,e),iu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ya]||(t[ya]=!0,iu("selectionchange",!1,t))}}function A0(e,t,n,r){switch(c0(t)){case 1:var i=Aw;break;case 4:i=Tw;break;default:i=id}n=i.bind(null,t,n,e),i=void 0,!uc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ou(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=ir(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}Qy(function(){var u=o,c=ed(n),f=[];e:{var d=k0.get(e);if(d!==void 0){var h=ad,v=e;switch(e){case"keypress":if(ns(n)===0)break e;case"keydown":case"keyup":h=Vw;break;case"focusin":v="focus",h=ql;break;case"focusout":v="blur",h=ql;break;case"beforeblur":case"afterblur":h=ql;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=ep;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Mw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Gw;break;case _0:case w0:case x0:h=Lw;break;case S0:h=Xw;break;case"scroll":h=Cw;break;case"wheel":h=Qw;break;case"copy":case"cut":case"paste":h=Rw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=np}var m=(t&4)!==0,y=!m&&e==="scroll",p=m?d!==null?d+"Capture":null:d;m=[];for(var g=u,b;g!==null;){b=g;var $=b.stateNode;if(b.tag===5&&$!==null&&(b=$,p!==null&&($=To(g,p),$!=null&&m.push(No(g,$,b)))),y)break;g=g.return}0<m.length&&(d=new h(d,v,null,n,c),f.push({event:d,listeners:m}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",d&&n!==sc&&(v=n.relatedTarget||n.fromElement)&&(ir(v)||v[dn]))break e;if((h||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,h?(v=n.relatedTarget||n.toElement,h=u,v=v?ir(v):null,v!==null&&(y=wr(v),v!==y||v.tag!==5&&v.tag!==6)&&(v=null)):(h=null,v=u),h!==v)){if(m=ep,$="onMouseLeave",p="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(m=np,$="onPointerLeave",p="onPointerEnter",g="pointer"),y=h==null?d:Wr(h),b=v==null?d:Wr(v),d=new m($,g+"leave",h,n,c),d.target=y,d.relatedTarget=b,$=null,ir(c)===u&&(m=new m(p,g+"enter",v,n,c),m.target=b,m.relatedTarget=y,$=m),y=$,h&&v)t:{for(m=h,p=v,g=0,b=m;b;b=Lr(b))g++;for(b=0,$=p;$;$=Lr($))b++;for(;0<g-b;)m=Lr(m),g--;for(;0<b-g;)p=Lr(p),b--;for(;g--;){if(m===p||p!==null&&m===p.alternate)break t;m=Lr(m),p=Lr(p)}m=null}else m=null;h!==null&&hp(f,d,h,m,!1),v!==null&&y!==null&&hp(f,y,v,m,!0)}}e:{if(d=u?Wr(u):window,h=d.nodeName&&d.nodeName.toLowerCase(),h==="select"||h==="input"&&d.type==="file")var _=rx;else if(op(d))if(v0)_=sx;else{_=ox;var k=ix}else(h=d.nodeName)&&h.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(_=ax);if(_&&(_=_(e,u))){g0(f,_,n,c);break e}k&&k(e,d,u),e==="focusout"&&(k=d._wrapperState)&&k.controlled&&d.type==="number"&&nc(d,"number",d.value)}switch(k=u?Wr(u):window,e){case"focusin":(op(k)||k.contentEditable==="true")&&(Ur=k,pc=u,ho=null);break;case"focusout":ho=pc=Ur=null;break;case"mousedown":gc=!0;break;case"contextmenu":case"mouseup":case"dragend":gc=!1,cp(f,n,c);break;case"selectionchange":if(cx)break;case"keydown":case"keyup":cp(f,n,c)}var w;if(ld)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Br?h0(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(d0&&n.locale!=="ko"&&(Br||E!=="onCompositionStart"?E==="onCompositionEnd"&&Br&&(w=f0()):(Tn=c,od="value"in Tn?Tn.value:Tn.textContent,Br=!0)),k=xs(u,E),0<k.length&&(E=new tp(E,e,null,n,c),f.push({event:E,listeners:k}),w?E.data=w:(w=p0(n),w!==null&&(E.data=w)))),(w=qw?Jw(e,n):ex(e,n))&&(u=xs(u,"onBeforeInput"),0<u.length&&(c=new tp("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=w))}E0(f,t)})}function No(e,t,n){return{instance:e,listener:t,currentTarget:n}}function xs(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=To(e,n),o!=null&&r.unshift(No(e,o,i)),o=To(e,t),o!=null&&r.push(No(e,o,i))),e=e.return}return r}function Lr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function hp(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=To(n,o),l!=null&&a.unshift(No(n,l,s))):i||(l=To(n,o),l!=null&&a.push(No(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var px=/\r\n?/g,gx=/\u0000|\uFFFD/g;function pp(e){return(typeof e=="string"?e:""+e).replace(px,`
`).replace(gx,"")}function ba(e,t,n){if(t=pp(t),pp(e)!==t&&n)throw Error(T(425))}function Ss(){}var vc=null,mc=null;function yc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bc=typeof setTimeout=="function"?setTimeout:void 0,vx=typeof clearTimeout=="function"?clearTimeout:void 0,gp=typeof Promise=="function"?Promise:void 0,mx=typeof queueMicrotask=="function"?queueMicrotask:typeof gp<"u"?function(e){return gp.resolve(null).then(e).catch(yx)}:bc;function yx(e){setTimeout(function(){throw e})}function au(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Mo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Mo(t)}function Rn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function vp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var xi=Math.random().toString(36).slice(2),Yt="__reactFiber$"+xi,Ro="__reactProps$"+xi,dn="__reactContainer$"+xi,$c="__reactEvents$"+xi,bx="__reactListeners$"+xi,$x="__reactHandles$"+xi;function ir(e){var t=e[Yt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[dn]||n[Yt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=vp(e);e!==null;){if(n=e[Yt])return n;e=vp(e)}return t}e=n,n=e.parentNode}return null}function Zo(e){return e=e[Yt]||e[dn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Wr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function cl(e){return e[Ro]||null}var _c=[],Hr=-1;function Gn(e){return{current:e}}function le(e){0>Hr||(e.current=_c[Hr],_c[Hr]=null,Hr--)}function re(e,t){Hr++,_c[Hr]=e.current,e.current=t}var Vn={},Ue=Gn(Vn),it=Gn(!1),pr=Vn;function li(e,t){var n=e.type.contextTypes;if(!n)return Vn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ot(e){return e=e.childContextTypes,e!=null}function ks(){le(it),le(Ue)}function mp(e,t,n){if(Ue.current!==Vn)throw Error(T(168));re(Ue,t),re(it,n)}function T0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(T(108,iw(e)||"Unknown",i));return me({},n,r)}function Es(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Vn,pr=Ue.current,re(Ue,e),re(it,it.current),!0}function yp(e,t,n){var r=e.stateNode;if(!r)throw Error(T(169));n?(e=T0(e,t,pr),r.__reactInternalMemoizedMergedChildContext=e,le(it),le(Ue),re(Ue,e)):le(it),re(it,n)}var on=null,fl=!1,su=!1;function C0(e){on===null?on=[e]:on.push(e)}function _x(e){fl=!0,C0(e)}function Yn(){if(!su&&on!==null){su=!0;var e=0,t=te;try{var n=on;for(te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}on=null,fl=!1}catch(i){throw on!==null&&(on=on.slice(e+1)),e0(td,Yn),i}finally{te=t,su=!1}}return null}var Gr=[],Yr=0,As=null,Ts=0,St=[],kt=0,gr=null,sn=1,ln="";function er(e,t){Gr[Yr++]=Ts,Gr[Yr++]=As,As=e,Ts=t}function P0(e,t,n){St[kt++]=sn,St[kt++]=ln,St[kt++]=gr,gr=e;var r=sn;e=ln;var i=32-jt(r)-1;r&=~(1<<i),n+=1;var o=32-jt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,sn=1<<32-jt(t)+i|n<<i|r,ln=o+e}else sn=1<<o|n<<i|r,ln=e}function cd(e){e.return!==null&&(er(e,1),P0(e,1,0))}function fd(e){for(;e===As;)As=Gr[--Yr],Gr[Yr]=null,Ts=Gr[--Yr],Gr[Yr]=null;for(;e===gr;)gr=St[--kt],St[kt]=null,ln=St[--kt],St[kt]=null,sn=St[--kt],St[kt]=null}var vt=null,pt=null,de=!1,Dt=null;function M0(e,t){var n=Et(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function bp(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,vt=e,pt=Rn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,vt=e,pt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=gr!==null?{id:sn,overflow:ln}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Et(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,vt=e,pt=null,!0):!1;default:return!1}}function wc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function xc(e){if(de){var t=pt;if(t){var n=t;if(!bp(e,t)){if(wc(e))throw Error(T(418));t=Rn(n.nextSibling);var r=vt;t&&bp(e,t)?M0(r,n):(e.flags=e.flags&-4097|2,de=!1,vt=e)}}else{if(wc(e))throw Error(T(418));e.flags=e.flags&-4097|2,de=!1,vt=e}}}function $p(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;vt=e}function $a(e){if(e!==vt)return!1;if(!de)return $p(e),de=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yc(e.type,e.memoizedProps)),t&&(t=pt)){if(wc(e))throw O0(),Error(T(418));for(;t;)M0(e,t),t=Rn(t.nextSibling)}if($p(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){pt=Rn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}pt=null}}else pt=vt?Rn(e.stateNode.nextSibling):null;return!0}function O0(){for(var e=pt;e;)e=Rn(e.nextSibling)}function ui(){pt=vt=null,de=!1}function dd(e){Dt===null?Dt=[e]:Dt.push(e)}var wx=vn.ReactCurrentBatchConfig;function Nt(e,t){if(e&&e.defaultProps){t=me({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Cs=Gn(null),Ps=null,Xr=null,hd=null;function pd(){hd=Xr=Ps=null}function gd(e){var t=Cs.current;le(Cs),e._currentValue=t}function Sc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ti(e,t){Ps=e,hd=Xr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(tt=!0),e.firstContext=null)}function Mt(e){var t=e._currentValue;if(hd!==e)if(e={context:e,memoizedValue:t,next:null},Xr===null){if(Ps===null)throw Error(T(308));Xr=e,Ps.dependencies={lanes:0,firstContext:e}}else Xr=Xr.next=e;return t}var or=null;function vd(e){or===null?or=[e]:or.push(e)}function I0(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,vd(t)):(n.next=i.next,i.next=n),t.interleaved=n,hn(e,r)}function hn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var xn=!1;function md(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function L0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function cn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Fn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Z&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,hn(e,n)}return i=r.interleaved,i===null?(t.next=t,vd(r)):(t.next=i.next,i.next=t),r.interleaved=t,hn(e,n)}function rs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nd(e,n)}}function _p(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ms(e,t,n,r){var i=e.updateQueue;xn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?o=u:a.next=u,a=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==a&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;a=0,c=u=l=null,s=o;do{var d=s.lane,h=s.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,m=s;switch(d=t,h=n,m.tag){case 1:if(v=m.payload,typeof v=="function"){f=v.call(h,f,d);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=m.payload,d=typeof v=="function"?v.call(h,f,d):v,d==null)break e;f=me({},f,d);break e;case 2:xn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[s]:d.push(s))}else h={eventTime:h,lane:d,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=h,l=f):c=c.next=h,a|=d;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;d=s,s=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);mr|=a,e.lanes=a,e.memoizedState=f}}function wp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var N0=new Iy.Component().refs;function kc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:me({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var dl={isMounted:function(e){return(e=e._reactInternals)?wr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=He(),i=jn(e),o=cn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Fn(e,o,i),t!==null&&(zt(t,e,i,r),rs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=He(),i=jn(e),o=cn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Fn(e,o,i),t!==null&&(zt(t,e,i,r),rs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=He(),r=jn(e),i=cn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Fn(e,i,r),t!==null&&(zt(t,e,r,n),rs(t,e,r))}};function xp(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Io(n,r)||!Io(i,o):!0}function R0(e,t,n){var r=!1,i=Vn,o=t.contextType;return typeof o=="object"&&o!==null?o=Mt(o):(i=ot(t)?pr:Ue.current,r=t.contextTypes,o=(r=r!=null)?li(e,i):Vn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=dl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Sp(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&dl.enqueueReplaceState(t,t.state,null)}function Ec(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=N0,md(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Mt(o):(o=ot(t)?pr:Ue.current,i.context=li(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(kc(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&dl.enqueueReplaceState(i,i.state,null),Ms(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Fi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;s===N0&&(s=i.refs={}),a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,e))}return e}function _a(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function kp(e){var t=e._init;return t(e._payload)}function F0(e){function t(p,g){if(e){var b=p.deletions;b===null?(p.deletions=[g],p.flags|=16):b.push(g)}}function n(p,g){if(!e)return null;for(;g!==null;)t(p,g),g=g.sibling;return null}function r(p,g){for(p=new Map;g!==null;)g.key!==null?p.set(g.key,g):p.set(g.index,g),g=g.sibling;return p}function i(p,g){return p=zn(p,g),p.index=0,p.sibling=null,p}function o(p,g,b){return p.index=b,e?(b=p.alternate,b!==null?(b=b.index,b<g?(p.flags|=2,g):b):(p.flags|=2,g)):(p.flags|=1048576,g)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,g,b,$){return g===null||g.tag!==6?(g=pu(b,p.mode,$),g.return=p,g):(g=i(g,b),g.return=p,g)}function l(p,g,b,$){var _=b.type;return _===zr?c(p,g,b.props.children,$,b.key):g!==null&&(g.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===wn&&kp(_)===g.type)?($=i(g,b.props),$.ref=Fi(p,g,b),$.return=p,$):($=us(b.type,b.key,b.props,null,p.mode,$),$.ref=Fi(p,g,b),$.return=p,$)}function u(p,g,b,$){return g===null||g.tag!==4||g.stateNode.containerInfo!==b.containerInfo||g.stateNode.implementation!==b.implementation?(g=gu(b,p.mode,$),g.return=p,g):(g=i(g,b.children||[]),g.return=p,g)}function c(p,g,b,$,_){return g===null||g.tag!==7?(g=dr(b,p.mode,$,_),g.return=p,g):(g=i(g,b),g.return=p,g)}function f(p,g,b){if(typeof g=="string"&&g!==""||typeof g=="number")return g=pu(""+g,p.mode,b),g.return=p,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ca:return b=us(g.type,g.key,g.props,null,p.mode,b),b.ref=Fi(p,null,g),b.return=p,b;case jr:return g=gu(g,p.mode,b),g.return=p,g;case wn:var $=g._init;return f(p,$(g._payload),b)}if(eo(g)||Oi(g))return g=dr(g,p.mode,b,null),g.return=p,g;_a(p,g)}return null}function d(p,g,b,$){var _=g!==null?g.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return _!==null?null:s(p,g,""+b,$);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ca:return b.key===_?l(p,g,b,$):null;case jr:return b.key===_?u(p,g,b,$):null;case wn:return _=b._init,d(p,g,_(b._payload),$)}if(eo(b)||Oi(b))return _!==null?null:c(p,g,b,$,null);_a(p,b)}return null}function h(p,g,b,$,_){if(typeof $=="string"&&$!==""||typeof $=="number")return p=p.get(b)||null,s(g,p,""+$,_);if(typeof $=="object"&&$!==null){switch($.$$typeof){case ca:return p=p.get($.key===null?b:$.key)||null,l(g,p,$,_);case jr:return p=p.get($.key===null?b:$.key)||null,u(g,p,$,_);case wn:var k=$._init;return h(p,g,b,k($._payload),_)}if(eo($)||Oi($))return p=p.get(b)||null,c(g,p,$,_,null);_a(g,$)}return null}function v(p,g,b,$){for(var _=null,k=null,w=g,E=g=0,M=null;w!==null&&E<b.length;E++){w.index>E?(M=w,w=null):M=w.sibling;var C=d(p,w,b[E],$);if(C===null){w===null&&(w=M);break}e&&w&&C.alternate===null&&t(p,w),g=o(C,g,E),k===null?_=C:k.sibling=C,k=C,w=M}if(E===b.length)return n(p,w),de&&er(p,E),_;if(w===null){for(;E<b.length;E++)w=f(p,b[E],$),w!==null&&(g=o(w,g,E),k===null?_=w:k.sibling=w,k=w);return de&&er(p,E),_}for(w=r(p,w);E<b.length;E++)M=h(w,p,E,b[E],$),M!==null&&(e&&M.alternate!==null&&w.delete(M.key===null?E:M.key),g=o(M,g,E),k===null?_=M:k.sibling=M,k=M);return e&&w.forEach(function(x){return t(p,x)}),de&&er(p,E),_}function m(p,g,b,$){var _=Oi(b);if(typeof _!="function")throw Error(T(150));if(b=_.call(b),b==null)throw Error(T(151));for(var k=_=null,w=g,E=g=0,M=null,C=b.next();w!==null&&!C.done;E++,C=b.next()){w.index>E?(M=w,w=null):M=w.sibling;var x=d(p,w,C.value,$);if(x===null){w===null&&(w=M);break}e&&w&&x.alternate===null&&t(p,w),g=o(x,g,E),k===null?_=x:k.sibling=x,k=x,w=M}if(C.done)return n(p,w),de&&er(p,E),_;if(w===null){for(;!C.done;E++,C=b.next())C=f(p,C.value,$),C!==null&&(g=o(C,g,E),k===null?_=C:k.sibling=C,k=C);return de&&er(p,E),_}for(w=r(p,w);!C.done;E++,C=b.next())C=h(w,p,E,C.value,$),C!==null&&(e&&C.alternate!==null&&w.delete(C.key===null?E:C.key),g=o(C,g,E),k===null?_=C:k.sibling=C,k=C);return e&&w.forEach(function(S){return t(p,S)}),de&&er(p,E),_}function y(p,g,b,$){if(typeof b=="object"&&b!==null&&b.type===zr&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case ca:e:{for(var _=b.key,k=g;k!==null;){if(k.key===_){if(_=b.type,_===zr){if(k.tag===7){n(p,k.sibling),g=i(k,b.props.children),g.return=p,p=g;break e}}else if(k.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===wn&&kp(_)===k.type){n(p,k.sibling),g=i(k,b.props),g.ref=Fi(p,k,b),g.return=p,p=g;break e}n(p,k);break}else t(p,k);k=k.sibling}b.type===zr?(g=dr(b.props.children,p.mode,$,b.key),g.return=p,p=g):($=us(b.type,b.key,b.props,null,p.mode,$),$.ref=Fi(p,g,b),$.return=p,p=$)}return a(p);case jr:e:{for(k=b.key;g!==null;){if(g.key===k)if(g.tag===4&&g.stateNode.containerInfo===b.containerInfo&&g.stateNode.implementation===b.implementation){n(p,g.sibling),g=i(g,b.children||[]),g.return=p,p=g;break e}else{n(p,g);break}else t(p,g);g=g.sibling}g=gu(b,p.mode,$),g.return=p,p=g}return a(p);case wn:return k=b._init,y(p,g,k(b._payload),$)}if(eo(b))return v(p,g,b,$);if(Oi(b))return m(p,g,b,$);_a(p,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,g!==null&&g.tag===6?(n(p,g.sibling),g=i(g,b),g.return=p,p=g):(n(p,g),g=pu(b,p.mode,$),g.return=p,p=g),a(p)):n(p,g)}return y}var ci=F0(!0),D0=F0(!1),qo={},Kt=Gn(qo),Fo=Gn(qo),Do=Gn(qo);function ar(e){if(e===qo)throw Error(T(174));return e}function yd(e,t){switch(re(Do,t),re(Fo,e),re(Kt,qo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ic(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ic(t,e)}le(Kt),re(Kt,t)}function fi(){le(Kt),le(Fo),le(Do)}function j0(e){ar(Do.current);var t=ar(Kt.current),n=ic(t,e.type);t!==n&&(re(Fo,e),re(Kt,n))}function bd(e){Fo.current===e&&(le(Kt),le(Fo))}var pe=Gn(0);function Os(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var lu=[];function $d(){for(var e=0;e<lu.length;e++)lu[e]._workInProgressVersionPrimary=null;lu.length=0}var is=vn.ReactCurrentDispatcher,uu=vn.ReactCurrentBatchConfig,vr=0,ve=null,Ae=null,Me=null,Is=!1,po=!1,jo=0,xx=0;function De(){throw Error(T(321))}function _d(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Bt(e[n],t[n]))return!1;return!0}function wd(e,t,n,r,i,o){if(vr=o,ve=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,is.current=e===null||e.memoizedState===null?Ax:Tx,e=n(r,i),po){o=0;do{if(po=!1,jo=0,25<=o)throw Error(T(301));o+=1,Me=Ae=null,t.updateQueue=null,is.current=Cx,e=n(r,i)}while(po)}if(is.current=Ls,t=Ae!==null&&Ae.next!==null,vr=0,Me=Ae=ve=null,Is=!1,t)throw Error(T(300));return e}function xd(){var e=jo!==0;return jo=0,e}function Ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?ve.memoizedState=Me=e:Me=Me.next=e,Me}function Ot(){if(Ae===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=Me===null?ve.memoizedState:Me.next;if(t!==null)Me=t,Ae=e;else{if(e===null)throw Error(T(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},Me===null?ve.memoizedState=Me=e:Me=Me.next=e}return Me}function zo(e,t){return typeof t=="function"?t(e):t}function cu(e){var t=Ot(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=Ae,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,u=o;do{var c=u.lane;if((vr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=f,a=r):l=l.next=f,ve.lanes|=c,mr|=c}u=u.next}while(u!==null&&u!==o);l===null?a=r:l.next=s,Bt(r,t.memoizedState)||(tt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ve.lanes|=o,mr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function fu(e){var t=Ot(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Bt(o,t.memoizedState)||(tt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function z0(){}function B0(e,t){var n=ve,r=Ot(),i=t(),o=!Bt(r.memoizedState,i);if(o&&(r.memoizedState=i,tt=!0),r=r.queue,Sd(W0.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,Bo(9,V0.bind(null,n,r,i,t),void 0,null),Ie===null)throw Error(T(349));vr&30||U0(n,t,i)}return i}function U0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function V0(e,t,n,r){t.value=n,t.getSnapshot=r,H0(t)&&G0(e)}function W0(e,t,n){return n(function(){H0(t)&&G0(e)})}function H0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Bt(e,n)}catch{return!0}}function G0(e){var t=hn(e,1);t!==null&&zt(t,e,1,-1)}function Ep(e){var t=Ht();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:e},t.queue=e,e=e.dispatch=Ex.bind(null,ve,e),[t.memoizedState,e]}function Bo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Y0(){return Ot().memoizedState}function os(e,t,n,r){var i=Ht();ve.flags|=e,i.memoizedState=Bo(1|t,n,void 0,r===void 0?null:r)}function hl(e,t,n,r){var i=Ot();r=r===void 0?null:r;var o=void 0;if(Ae!==null){var a=Ae.memoizedState;if(o=a.destroy,r!==null&&_d(r,a.deps)){i.memoizedState=Bo(t,n,o,r);return}}ve.flags|=e,i.memoizedState=Bo(1|t,n,o,r)}function Ap(e,t){return os(8390656,8,e,t)}function Sd(e,t){return hl(2048,8,e,t)}function X0(e,t){return hl(4,2,e,t)}function K0(e,t){return hl(4,4,e,t)}function Q0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Z0(e,t,n){return n=n!=null?n.concat([e]):null,hl(4,4,Q0.bind(null,t,e),n)}function kd(){}function q0(e,t){var n=Ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_d(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function J0(e,t){var n=Ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_d(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function e1(e,t,n){return vr&21?(Bt(n,t)||(n=r0(),ve.lanes|=n,mr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,tt=!0),e.memoizedState=n)}function Sx(e,t){var n=te;te=n!==0&&4>n?n:4,e(!0);var r=uu.transition;uu.transition={};try{e(!1),t()}finally{te=n,uu.transition=r}}function t1(){return Ot().memoizedState}function kx(e,t,n){var r=jn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},n1(e))r1(t,n);else if(n=I0(e,t,n,r),n!==null){var i=He();zt(n,e,r,i),i1(n,t,r)}}function Ex(e,t,n){var r=jn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(n1(e))r1(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,Bt(s,a)){var l=t.interleaved;l===null?(i.next=i,vd(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=I0(e,t,i,r),n!==null&&(i=He(),zt(n,e,r,i),i1(n,t,r))}}function n1(e){var t=e.alternate;return e===ve||t!==null&&t===ve}function r1(e,t){po=Is=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function i1(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nd(e,n)}}var Ls={readContext:Mt,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},Ax={readContext:Mt,useCallback:function(e,t){return Ht().memoizedState=[e,t===void 0?null:t],e},useContext:Mt,useEffect:Ap,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,os(4194308,4,Q0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return os(4194308,4,e,t)},useInsertionEffect:function(e,t){return os(4,2,e,t)},useMemo:function(e,t){var n=Ht();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ht();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=kx.bind(null,ve,e),[r.memoizedState,e]},useRef:function(e){var t=Ht();return e={current:e},t.memoizedState=e},useState:Ep,useDebugValue:kd,useDeferredValue:function(e){return Ht().memoizedState=e},useTransition:function(){var e=Ep(!1),t=e[0];return e=Sx.bind(null,e[1]),Ht().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ve,i=Ht();if(de){if(n===void 0)throw Error(T(407));n=n()}else{if(n=t(),Ie===null)throw Error(T(349));vr&30||U0(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Ap(W0.bind(null,r,o,e),[e]),r.flags|=2048,Bo(9,V0.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ht(),t=Ie.identifierPrefix;if(de){var n=ln,r=sn;n=(r&~(1<<32-jt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=jo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=xx++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Tx={readContext:Mt,useCallback:q0,useContext:Mt,useEffect:Sd,useImperativeHandle:Z0,useInsertionEffect:X0,useLayoutEffect:K0,useMemo:J0,useReducer:cu,useRef:Y0,useState:function(){return cu(zo)},useDebugValue:kd,useDeferredValue:function(e){var t=Ot();return e1(t,Ae.memoizedState,e)},useTransition:function(){var e=cu(zo)[0],t=Ot().memoizedState;return[e,t]},useMutableSource:z0,useSyncExternalStore:B0,useId:t1,unstable_isNewReconciler:!1},Cx={readContext:Mt,useCallback:q0,useContext:Mt,useEffect:Sd,useImperativeHandle:Z0,useInsertionEffect:X0,useLayoutEffect:K0,useMemo:J0,useReducer:fu,useRef:Y0,useState:function(){return fu(zo)},useDebugValue:kd,useDeferredValue:function(e){var t=Ot();return Ae===null?t.memoizedState=e:e1(t,Ae.memoizedState,e)},useTransition:function(){var e=fu(zo)[0],t=Ot().memoizedState;return[e,t]},useMutableSource:z0,useSyncExternalStore:B0,useId:t1,unstable_isNewReconciler:!1};function di(e,t){try{var n="",r=t;do n+=rw(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function du(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ac(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Px=typeof WeakMap=="function"?WeakMap:Map;function o1(e,t,n){n=cn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Rs||(Rs=!0,Fc=r),Ac(e,t)},n}function a1(e,t,n){n=cn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ac(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ac(e,t),typeof r!="function"&&(Dn===null?Dn=new Set([this]):Dn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Tp(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Px;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Wx.bind(null,e,t,n),t.then(e,e))}function Cp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Pp(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=cn(-1,1),t.tag=2,Fn(n,t,1))),n.lanes|=1),e)}var Mx=vn.ReactCurrentOwner,tt=!1;function We(e,t,n,r){t.child=e===null?D0(t,null,n,r):ci(t,e.child,n,r)}function Mp(e,t,n,r,i){n=n.render;var o=t.ref;return ti(t,i),r=wd(e,t,n,r,o,i),n=xd(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,pn(e,t,i)):(de&&n&&cd(t),t.flags|=1,We(e,t,r,i),t.child)}function Op(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Id(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,s1(e,t,o,r,i)):(e=us(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Io,n(a,r)&&e.ref===t.ref)return pn(e,t,i)}return t.flags|=1,e=zn(o,r),e.ref=t.ref,e.return=t,t.child=e}function s1(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Io(o,r)&&e.ref===t.ref)if(tt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(tt=!0);else return t.lanes=e.lanes,pn(e,t,i)}return Tc(e,t,n,r,i)}function l1(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(Qr,ft),ft|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,re(Qr,ft),ft|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,re(Qr,ft),ft|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,re(Qr,ft),ft|=r;return We(e,t,i,n),t.child}function u1(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Tc(e,t,n,r,i){var o=ot(n)?pr:Ue.current;return o=li(t,o),ti(t,i),n=wd(e,t,n,r,o,i),r=xd(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,pn(e,t,i)):(de&&r&&cd(t),t.flags|=1,We(e,t,n,i),t.child)}function Ip(e,t,n,r,i){if(ot(n)){var o=!0;Es(t)}else o=!1;if(ti(t,i),t.stateNode===null)as(e,t),R0(t,n,r),Ec(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Mt(u):(u=ot(n)?pr:Ue.current,u=li(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&Sp(t,a,r,u),xn=!1;var d=t.memoizedState;a.state=d,Ms(t,r,a,i),l=t.memoizedState,s!==r||d!==l||it.current||xn?(typeof c=="function"&&(kc(t,n,c,r),l=t.memoizedState),(s=xn||xp(t,n,s,r,d,l,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,L0(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Nt(t.type,s),a.props=u,f=t.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Mt(l):(l=ot(n)?pr:Ue.current,l=li(t,l));var h=n.getDerivedStateFromProps;(c=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==f||d!==l)&&Sp(t,a,r,l),xn=!1,d=t.memoizedState,a.state=d,Ms(t,r,a,i);var v=t.memoizedState;s!==f||d!==v||it.current||xn?(typeof h=="function"&&(kc(t,n,h,r),v=t.memoizedState),(u=xn||xp(t,n,u,r,d,v,l)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),a.props=r,a.state=v,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return Cc(e,t,n,r,o,i)}function Cc(e,t,n,r,i,o){u1(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&yp(t,n,!1),pn(e,t,o);r=t.stateNode,Mx.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=ci(t,e.child,null,o),t.child=ci(t,null,s,o)):We(e,t,s,o),t.memoizedState=r.state,i&&yp(t,n,!0),t.child}function c1(e){var t=e.stateNode;t.pendingContext?mp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&mp(e,t.context,!1),yd(e,t.containerInfo)}function Lp(e,t,n,r,i){return ui(),dd(i),t.flags|=256,We(e,t,n,r),t.child}var Pc={dehydrated:null,treeContext:null,retryLane:0};function Mc(e){return{baseLanes:e,cachePool:null,transitions:null}}function f1(e,t,n){var r=t.pendingProps,i=pe.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),re(pe,i&1),e===null)return xc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=vl(a,r,0,null),e=dr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Mc(n),t.memoizedState=Pc,e):Ed(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Ox(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=zn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=zn(s,o):(o=dr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Mc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Pc,r}return o=e.child,e=o.sibling,r=zn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ed(e,t){return t=vl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function wa(e,t,n,r){return r!==null&&dd(r),ci(t,e.child,null,n),e=Ed(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ox(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=du(Error(T(422))),wa(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=vl({mode:"visible",children:r.children},i,0,null),o=dr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&ci(t,e.child,null,a),t.child.memoizedState=Mc(a),t.memoizedState=Pc,o);if(!(t.mode&1))return wa(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(T(419)),r=du(o,r,void 0),wa(e,t,a,r)}if(s=(a&e.childLanes)!==0,tt||s){if(r=Ie,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,hn(e,i),zt(r,e,i,-1))}return Od(),r=du(Error(T(421))),wa(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Hx.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,pt=Rn(i.nextSibling),vt=t,de=!0,Dt=null,e!==null&&(St[kt++]=sn,St[kt++]=ln,St[kt++]=gr,sn=e.id,ln=e.overflow,gr=t),t=Ed(t,r.children),t.flags|=4096,t)}function Np(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Sc(e.return,t,n)}function hu(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function d1(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(We(e,t,r.children,n),r=pe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Np(e,n,t);else if(e.tag===19)Np(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(re(pe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Os(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),hu(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Os(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}hu(t,!0,n,null,o);break;case"together":hu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function as(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function pn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),mr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,n=zn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=zn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ix(e,t,n){switch(t.tag){case 3:c1(t),ui();break;case 5:j0(t);break;case 1:ot(t.type)&&Es(t);break;case 4:yd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;re(Cs,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(re(pe,pe.current&1),t.flags|=128,null):n&t.child.childLanes?f1(e,t,n):(re(pe,pe.current&1),e=pn(e,t,n),e!==null?e.sibling:null);re(pe,pe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return d1(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),re(pe,pe.current),r)break;return null;case 22:case 23:return t.lanes=0,l1(e,t,n)}return pn(e,t,n)}var h1,Oc,p1,g1;h1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Oc=function(){};p1=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,ar(Kt.current);var o=null;switch(n){case"input":i=ec(e,i),r=ec(e,r),o=[];break;case"select":i=me({},i,{value:void 0}),r=me({},r,{value:void 0}),o=[];break;case"textarea":i=rc(e,i),r=rc(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ss)}oc(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Eo.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Eo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ae("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};g1=function(e,t,n,r){n!==r&&(t.flags|=4)};function Di(e,t){if(!de)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function je(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Lx(e,t,n){var r=t.pendingProps;switch(fd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(t),null;case 1:return ot(t.type)&&ks(),je(t),null;case 3:return r=t.stateNode,fi(),le(it),le(Ue),$d(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&($a(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Dt!==null&&(zc(Dt),Dt=null))),Oc(e,t),je(t),null;case 5:bd(t);var i=ar(Do.current);if(n=t.type,e!==null&&t.stateNode!=null)p1(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(T(166));return je(t),null}if(e=ar(Kt.current),$a(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Yt]=t,r[Ro]=o,e=(t.mode&1)!==0,n){case"dialog":ae("cancel",r),ae("close",r);break;case"iframe":case"object":case"embed":ae("load",r);break;case"video":case"audio":for(i=0;i<no.length;i++)ae(no[i],r);break;case"source":ae("error",r);break;case"img":case"image":case"link":ae("error",r),ae("load",r);break;case"details":ae("toggle",r);break;case"input":Wh(r,o),ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ae("invalid",r);break;case"textarea":Gh(r,o),ae("invalid",r)}oc(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&ba(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&ba(r.textContent,s,e),i=["children",""+s]):Eo.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&ae("scroll",r)}switch(n){case"input":fa(r),Hh(r,o,!0);break;case"textarea":fa(r),Yh(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ss)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Uy(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Yt]=t,e[Ro]=r,h1(e,t,!1,!1),t.stateNode=e;e:{switch(a=ac(n,r),n){case"dialog":ae("cancel",e),ae("close",e),i=r;break;case"iframe":case"object":case"embed":ae("load",e),i=r;break;case"video":case"audio":for(i=0;i<no.length;i++)ae(no[i],e);i=r;break;case"source":ae("error",e),i=r;break;case"img":case"image":case"link":ae("error",e),ae("load",e),i=r;break;case"details":ae("toggle",e),i=r;break;case"input":Wh(e,r),i=ec(e,r),ae("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=me({},r,{value:void 0}),ae("invalid",e);break;case"textarea":Gh(e,r),i=rc(e,r),ae("invalid",e);break;default:i=r}oc(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?Hy(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Vy(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ao(e,l):typeof l=="number"&&Ao(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Eo.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ae("scroll",e):l!=null&&Qf(e,o,l,a))}switch(n){case"input":fa(e),Hh(e,r,!1);break;case"textarea":fa(e),Yh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Un(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Zr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Zr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ss)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return je(t),null;case 6:if(e&&t.stateNode!=null)g1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(T(166));if(n=ar(Do.current),ar(Kt.current),$a(t)){if(r=t.stateNode,n=t.memoizedProps,r[Yt]=t,(o=r.nodeValue!==n)&&(e=vt,e!==null))switch(e.tag){case 3:ba(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ba(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Yt]=t,t.stateNode=r}return je(t),null;case 13:if(le(pe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(de&&pt!==null&&t.mode&1&&!(t.flags&128))O0(),ui(),t.flags|=98560,o=!1;else if(o=$a(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(T(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(T(317));o[Yt]=t}else ui(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;je(t),o=!1}else Dt!==null&&(zc(Dt),Dt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||pe.current&1?Te===0&&(Te=3):Od())),t.updateQueue!==null&&(t.flags|=4),je(t),null);case 4:return fi(),Oc(e,t),e===null&&Lo(t.stateNode.containerInfo),je(t),null;case 10:return gd(t.type._context),je(t),null;case 17:return ot(t.type)&&ks(),je(t),null;case 19:if(le(pe),o=t.memoizedState,o===null)return je(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Di(o,!1);else{if(Te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Os(e),a!==null){for(t.flags|=128,Di(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return re(pe,pe.current&1|2),t.child}e=e.sibling}o.tail!==null&&we()>hi&&(t.flags|=128,r=!0,Di(o,!1),t.lanes=4194304)}else{if(!r)if(e=Os(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Di(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!de)return je(t),null}else 2*we()-o.renderingStartTime>hi&&n!==1073741824&&(t.flags|=128,r=!0,Di(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=we(),t.sibling=null,n=pe.current,re(pe,r?n&1|2:n&1),t):(je(t),null);case 22:case 23:return Md(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ft&1073741824&&(je(t),t.subtreeFlags&6&&(t.flags|=8192)):je(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function Nx(e,t){switch(fd(t),t.tag){case 1:return ot(t.type)&&ks(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fi(),le(it),le(Ue),$d(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return bd(t),null;case 13:if(le(pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));ui()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return le(pe),null;case 4:return fi(),null;case 10:return gd(t.type._context),null;case 22:case 23:return Md(),null;case 24:return null;default:return null}}var xa=!1,Be=!1,Rx=typeof WeakSet=="function"?WeakSet:Set,R=null;function Kr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ye(e,t,r)}else n.current=null}function Ic(e,t,n){try{n()}catch(r){ye(e,t,r)}}var Rp=!1;function Fx(e,t){if(vc=_s,e=b0(),ud(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,c=0,f=e,d=null;t:for(;;){for(var h;f!==n||i!==0&&f.nodeType!==3||(s=a+i),f!==o||r!==0&&f.nodeType!==3||(l=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(h=f.firstChild)!==null;)d=f,f=h;for(;;){if(f===e)break t;if(d===n&&++u===i&&(s=a),d===o&&++c===r&&(l=a),(h=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=h}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(mc={focusedElem:e,selectionRange:n},_s=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var m=v.memoizedProps,y=v.memoizedState,p=t.stateNode,g=p.getSnapshotBeforeUpdate(t.elementType===t.type?m:Nt(t.type,m),y);p.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch($){ye(t,t.return,$)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return v=Rp,Rp=!1,v}function go(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ic(t,n,o)}i=i.next}while(i!==r)}}function pl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Lc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function v1(e){var t=e.alternate;t!==null&&(e.alternate=null,v1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Yt],delete t[Ro],delete t[$c],delete t[bx],delete t[$x])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function m1(e){return e.tag===5||e.tag===3||e.tag===4}function Fp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||m1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Nc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ss));else if(r!==4&&(e=e.child,e!==null))for(Nc(e,t,n),e=e.sibling;e!==null;)Nc(e,t,n),e=e.sibling}function Rc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Rc(e,t,n),e=e.sibling;e!==null;)Rc(e,t,n),e=e.sibling}var Ne=null,Rt=!1;function mn(e,t,n){for(n=n.child;n!==null;)y1(e,t,n),n=n.sibling}function y1(e,t,n){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(al,n)}catch{}switch(n.tag){case 5:Be||Kr(n,t);case 6:var r=Ne,i=Rt;Ne=null,mn(e,t,n),Ne=r,Rt=i,Ne!==null&&(Rt?(e=Ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ne.removeChild(n.stateNode));break;case 18:Ne!==null&&(Rt?(e=Ne,n=n.stateNode,e.nodeType===8?au(e.parentNode,n):e.nodeType===1&&au(e,n),Mo(e)):au(Ne,n.stateNode));break;case 4:r=Ne,i=Rt,Ne=n.stateNode.containerInfo,Rt=!0,mn(e,t,n),Ne=r,Rt=i;break;case 0:case 11:case 14:case 15:if(!Be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Ic(n,t,a),i=i.next}while(i!==r)}mn(e,t,n);break;case 1:if(!Be&&(Kr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ye(n,t,s)}mn(e,t,n);break;case 21:mn(e,t,n);break;case 22:n.mode&1?(Be=(r=Be)||n.memoizedState!==null,mn(e,t,n),Be=r):mn(e,t,n);break;default:mn(e,t,n)}}function Dp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Rx),t.forEach(function(r){var i=Gx.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function It(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:Ne=s.stateNode,Rt=!1;break e;case 3:Ne=s.stateNode.containerInfo,Rt=!0;break e;case 4:Ne=s.stateNode.containerInfo,Rt=!0;break e}s=s.return}if(Ne===null)throw Error(T(160));y1(o,a,i),Ne=null,Rt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ye(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)b1(t,e),t=t.sibling}function b1(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(It(t,e),Vt(e),r&4){try{go(3,e,e.return),pl(3,e)}catch(m){ye(e,e.return,m)}try{go(5,e,e.return)}catch(m){ye(e,e.return,m)}}break;case 1:It(t,e),Vt(e),r&512&&n!==null&&Kr(n,n.return);break;case 5:if(It(t,e),Vt(e),r&512&&n!==null&&Kr(n,n.return),e.flags&32){var i=e.stateNode;try{Ao(i,"")}catch(m){ye(e,e.return,m)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&zy(i,o),ac(s,a);var u=ac(s,o);for(a=0;a<l.length;a+=2){var c=l[a],f=l[a+1];c==="style"?Hy(i,f):c==="dangerouslySetInnerHTML"?Vy(i,f):c==="children"?Ao(i,f):Qf(i,c,f,u)}switch(s){case"input":tc(i,o);break;case"textarea":By(i,o);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?Zr(i,!!o.multiple,h,!1):d!==!!o.multiple&&(o.defaultValue!=null?Zr(i,!!o.multiple,o.defaultValue,!0):Zr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ro]=o}catch(m){ye(e,e.return,m)}}break;case 6:if(It(t,e),Vt(e),r&4){if(e.stateNode===null)throw Error(T(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(m){ye(e,e.return,m)}}break;case 3:if(It(t,e),Vt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Mo(t.containerInfo)}catch(m){ye(e,e.return,m)}break;case 4:It(t,e),Vt(e);break;case 13:It(t,e),Vt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Cd=we())),r&4&&Dp(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Be=(u=Be)||c,It(t,e),Be=u):It(t,e),Vt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(R=e,c=e.child;c!==null;){for(f=R=c;R!==null;){switch(d=R,h=d.child,d.tag){case 0:case 11:case 14:case 15:go(4,d,d.return);break;case 1:Kr(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(m){ye(r,n,m)}}break;case 5:Kr(d,d.return);break;case 22:if(d.memoizedState!==null){zp(f);continue}}h!==null?(h.return=d,R=h):zp(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Wy("display",a))}catch(m){ye(e,e.return,m)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(m){ye(e,e.return,m)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:It(t,e),Vt(e),r&4&&Dp(e);break;case 21:break;default:It(t,e),Vt(e)}}function Vt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(m1(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ao(i,""),r.flags&=-33);var o=Fp(e);Rc(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Fp(e);Nc(e,s,a);break;default:throw Error(T(161))}}catch(l){ye(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Dx(e,t,n){R=e,$1(e)}function $1(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var i=R,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||xa;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||Be;s=xa;var u=Be;if(xa=a,(Be=l)&&!u)for(R=i;R!==null;)a=R,l=a.child,a.tag===22&&a.memoizedState!==null?Bp(i):l!==null?(l.return=a,R=l):Bp(i);for(;o!==null;)R=o,$1(o),o=o.sibling;R=i,xa=s,Be=u}jp(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,R=o):jp(e)}}function jp(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Be||pl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Be)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Nt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&wp(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}wp(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Mo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}Be||t.flags&512&&Lc(t)}catch(d){ye(t,t.return,d)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function zp(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function Bp(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{pl(4,t)}catch(l){ye(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ye(t,i,l)}}var o=t.return;try{Lc(t)}catch(l){ye(t,o,l)}break;case 5:var a=t.return;try{Lc(t)}catch(l){ye(t,a,l)}}}catch(l){ye(t,t.return,l)}if(t===e){R=null;break}var s=t.sibling;if(s!==null){s.return=t.return,R=s;break}R=t.return}}var jx=Math.ceil,Ns=vn.ReactCurrentDispatcher,Ad=vn.ReactCurrentOwner,Ct=vn.ReactCurrentBatchConfig,Z=0,Ie=null,xe=null,Re=0,ft=0,Qr=Gn(0),Te=0,Uo=null,mr=0,gl=0,Td=0,vo=null,Je=null,Cd=0,hi=1/0,rn=null,Rs=!1,Fc=null,Dn=null,Sa=!1,Cn=null,Fs=0,mo=0,Dc=null,ss=-1,ls=0;function He(){return Z&6?we():ss!==-1?ss:ss=we()}function jn(e){return e.mode&1?Z&2&&Re!==0?Re&-Re:wx.transition!==null?(ls===0&&(ls=r0()),ls):(e=te,e!==0||(e=window.event,e=e===void 0?16:c0(e.type)),e):1}function zt(e,t,n,r){if(50<mo)throw mo=0,Dc=null,Error(T(185));Ko(e,n,r),(!(Z&2)||e!==Ie)&&(e===Ie&&(!(Z&2)&&(gl|=n),Te===4&&An(e,Re)),at(e,r),n===1&&Z===0&&!(t.mode&1)&&(hi=we()+500,fl&&Yn()))}function at(e,t){var n=e.callbackNode;ww(e,t);var r=$s(e,e===Ie?Re:0);if(r===0)n!==null&&Qh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Qh(n),t===1)e.tag===0?_x(Up.bind(null,e)):C0(Up.bind(null,e)),mx(function(){!(Z&6)&&Yn()}),n=null;else{switch(i0(r)){case 1:n=td;break;case 4:n=t0;break;case 16:n=bs;break;case 536870912:n=n0;break;default:n=bs}n=T1(n,_1.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function _1(e,t){if(ss=-1,ls=0,Z&6)throw Error(T(327));var n=e.callbackNode;if(ni()&&e.callbackNode!==n)return null;var r=$s(e,e===Ie?Re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ds(e,r);else{t=r;var i=Z;Z|=2;var o=x1();(Ie!==e||Re!==t)&&(rn=null,hi=we()+500,fr(e,t));do try{Ux();break}catch(s){w1(e,s)}while(1);pd(),Ns.current=o,Z=i,xe!==null?t=0:(Ie=null,Re=0,t=Te)}if(t!==0){if(t===2&&(i=fc(e),i!==0&&(r=i,t=jc(e,i))),t===1)throw n=Uo,fr(e,0),An(e,r),at(e,we()),n;if(t===6)An(e,r);else{if(i=e.current.alternate,!(r&30)&&!zx(i)&&(t=Ds(e,r),t===2&&(o=fc(e),o!==0&&(r=o,t=jc(e,o))),t===1))throw n=Uo,fr(e,0),An(e,r),at(e,we()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(T(345));case 2:tr(e,Je,rn);break;case 3:if(An(e,r),(r&130023424)===r&&(t=Cd+500-we(),10<t)){if($s(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){He(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=bc(tr.bind(null,e,Je,rn),t);break}tr(e,Je,rn);break;case 4:if(An(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-jt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=we()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*jx(r/1960))-r,10<r){e.timeoutHandle=bc(tr.bind(null,e,Je,rn),r);break}tr(e,Je,rn);break;case 5:tr(e,Je,rn);break;default:throw Error(T(329))}}}return at(e,we()),e.callbackNode===n?_1.bind(null,e):null}function jc(e,t){var n=vo;return e.current.memoizedState.isDehydrated&&(fr(e,t).flags|=256),e=Ds(e,t),e!==2&&(t=Je,Je=n,t!==null&&zc(t)),e}function zc(e){Je===null?Je=e:Je.push.apply(Je,e)}function zx(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Bt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function An(e,t){for(t&=~Td,t&=~gl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-jt(t),r=1<<n;e[n]=-1,t&=~r}}function Up(e){if(Z&6)throw Error(T(327));ni();var t=$s(e,0);if(!(t&1))return at(e,we()),null;var n=Ds(e,t);if(e.tag!==0&&n===2){var r=fc(e);r!==0&&(t=r,n=jc(e,r))}if(n===1)throw n=Uo,fr(e,0),An(e,t),at(e,we()),n;if(n===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,tr(e,Je,rn),at(e,we()),null}function Pd(e,t){var n=Z;Z|=1;try{return e(t)}finally{Z=n,Z===0&&(hi=we()+500,fl&&Yn())}}function yr(e){Cn!==null&&Cn.tag===0&&!(Z&6)&&ni();var t=Z;Z|=1;var n=Ct.transition,r=te;try{if(Ct.transition=null,te=1,e)return e()}finally{te=r,Ct.transition=n,Z=t,!(Z&6)&&Yn()}}function Md(){ft=Qr.current,le(Qr)}function fr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,vx(n)),xe!==null)for(n=xe.return;n!==null;){var r=n;switch(fd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ks();break;case 3:fi(),le(it),le(Ue),$d();break;case 5:bd(r);break;case 4:fi();break;case 13:le(pe);break;case 19:le(pe);break;case 10:gd(r.type._context);break;case 22:case 23:Md()}n=n.return}if(Ie=e,xe=e=zn(e.current,null),Re=ft=t,Te=0,Uo=null,Td=gl=mr=0,Je=vo=null,or!==null){for(t=0;t<or.length;t++)if(n=or[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}or=null}return e}function w1(e,t){do{var n=xe;try{if(pd(),is.current=Ls,Is){for(var r=ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Is=!1}if(vr=0,Me=Ae=ve=null,po=!1,jo=0,Ad.current=null,n===null||n.return===null){Te=1,Uo=t,xe=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=Re,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=Cp(a);if(h!==null){h.flags&=-257,Pp(h,a,s,o,t),h.mode&1&&Tp(o,u,t),t=h,l=u;var v=t.updateQueue;if(v===null){var m=new Set;m.add(l),t.updateQueue=m}else v.add(l);break e}else{if(!(t&1)){Tp(o,u,t),Od();break e}l=Error(T(426))}}else if(de&&s.mode&1){var y=Cp(a);if(y!==null){!(y.flags&65536)&&(y.flags|=256),Pp(y,a,s,o,t),dd(di(l,s));break e}}o=l=di(l,s),Te!==4&&(Te=2),vo===null?vo=[o]:vo.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=o1(o,l,t);_p(o,p);break e;case 1:s=l;var g=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Dn===null||!Dn.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var $=a1(o,s,t);_p(o,$);break e}}o=o.return}while(o!==null)}k1(n)}catch(_){t=_,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(1)}function x1(){var e=Ns.current;return Ns.current=Ls,e===null?Ls:e}function Od(){(Te===0||Te===3||Te===2)&&(Te=4),Ie===null||!(mr&268435455)&&!(gl&268435455)||An(Ie,Re)}function Ds(e,t){var n=Z;Z|=2;var r=x1();(Ie!==e||Re!==t)&&(rn=null,fr(e,t));do try{Bx();break}catch(i){w1(e,i)}while(1);if(pd(),Z=n,Ns.current=r,xe!==null)throw Error(T(261));return Ie=null,Re=0,Te}function Bx(){for(;xe!==null;)S1(xe)}function Ux(){for(;xe!==null&&!hw();)S1(xe)}function S1(e){var t=A1(e.alternate,e,ft);e.memoizedProps=e.pendingProps,t===null?k1(e):xe=t,Ad.current=null}function k1(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Nx(n,t),n!==null){n.flags&=32767,xe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Te=6,xe=null;return}}else if(n=Lx(n,t,ft),n!==null){xe=n;return}if(t=t.sibling,t!==null){xe=t;return}xe=t=e}while(t!==null);Te===0&&(Te=5)}function tr(e,t,n){var r=te,i=Ct.transition;try{Ct.transition=null,te=1,Vx(e,t,n,r)}finally{Ct.transition=i,te=r}return null}function Vx(e,t,n,r){do ni();while(Cn!==null);if(Z&6)throw Error(T(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(xw(e,o),e===Ie&&(xe=Ie=null,Re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Sa||(Sa=!0,T1(bs,function(){return ni(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ct.transition,Ct.transition=null;var a=te;te=1;var s=Z;Z|=4,Ad.current=null,Fx(e,n),b1(n,e),ux(mc),_s=!!vc,mc=vc=null,e.current=n,Dx(n),pw(),Z=s,te=a,Ct.transition=o}else e.current=n;if(Sa&&(Sa=!1,Cn=e,Fs=i),o=e.pendingLanes,o===0&&(Dn=null),mw(n.stateNode),at(e,we()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Rs)throw Rs=!1,e=Fc,Fc=null,e;return Fs&1&&e.tag!==0&&ni(),o=e.pendingLanes,o&1?e===Dc?mo++:(mo=0,Dc=e):mo=0,Yn(),null}function ni(){if(Cn!==null){var e=i0(Fs),t=Ct.transition,n=te;try{if(Ct.transition=null,te=16>e?16:e,Cn===null)var r=!1;else{if(e=Cn,Cn=null,Fs=0,Z&6)throw Error(T(331));var i=Z;for(Z|=4,R=e.current;R!==null;){var o=R,a=o.child;if(R.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(R=u;R!==null;){var c=R;switch(c.tag){case 0:case 11:case 15:go(8,c,o)}var f=c.child;if(f!==null)f.return=c,R=f;else for(;R!==null;){c=R;var d=c.sibling,h=c.return;if(v1(c),c===u){R=null;break}if(d!==null){d.return=h,R=d;break}R=h}}}var v=o.alternate;if(v!==null){var m=v.child;if(m!==null){v.child=null;do{var y=m.sibling;m.sibling=null,m=y}while(m!==null)}}R=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,R=a;else e:for(;R!==null;){if(o=R,o.flags&2048)switch(o.tag){case 0:case 11:case 15:go(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,R=p;break e}R=o.return}}var g=e.current;for(R=g;R!==null;){a=R;var b=a.child;if(a.subtreeFlags&2064&&b!==null)b.return=a,R=b;else e:for(a=g;R!==null;){if(s=R,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:pl(9,s)}}catch(_){ye(s,s.return,_)}if(s===a){R=null;break e}var $=s.sibling;if($!==null){$.return=s.return,R=$;break e}R=s.return}}if(Z=i,Yn(),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(al,e)}catch{}r=!0}return r}finally{te=n,Ct.transition=t}}return!1}function Vp(e,t,n){t=di(n,t),t=o1(e,t,1),e=Fn(e,t,1),t=He(),e!==null&&(Ko(e,1,t),at(e,t))}function ye(e,t,n){if(e.tag===3)Vp(e,e,n);else for(;t!==null;){if(t.tag===3){Vp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Dn===null||!Dn.has(r))){e=di(n,e),e=a1(t,e,1),t=Fn(t,e,1),e=He(),t!==null&&(Ko(t,1,e),at(t,e));break}}t=t.return}}function Wx(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=He(),e.pingedLanes|=e.suspendedLanes&n,Ie===e&&(Re&n)===n&&(Te===4||Te===3&&(Re&130023424)===Re&&500>we()-Cd?fr(e,0):Td|=n),at(e,t)}function E1(e,t){t===0&&(e.mode&1?(t=pa,pa<<=1,!(pa&130023424)&&(pa=4194304)):t=1);var n=He();e=hn(e,t),e!==null&&(Ko(e,t,n),at(e,n))}function Hx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),E1(e,n)}function Gx(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(t),E1(e,n)}var A1;A1=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||it.current)tt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return tt=!1,Ix(e,t,n);tt=!!(e.flags&131072)}else tt=!1,de&&t.flags&1048576&&P0(t,Ts,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;as(e,t),e=t.pendingProps;var i=li(t,Ue.current);ti(t,n),i=wd(null,t,r,e,i,n);var o=xd();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ot(r)?(o=!0,Es(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,md(t),i.updater=dl,t.stateNode=i,i._reactInternals=t,Ec(t,r,e,n),t=Cc(null,t,r,!0,o,n)):(t.tag=0,de&&o&&cd(t),We(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(as(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Xx(r),e=Nt(r,e),i){case 0:t=Tc(null,t,r,e,n);break e;case 1:t=Ip(null,t,r,e,n);break e;case 11:t=Mp(null,t,r,e,n);break e;case 14:t=Op(null,t,r,Nt(r.type,e),n);break e}throw Error(T(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Nt(r,i),Tc(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Nt(r,i),Ip(e,t,r,i,n);case 3:e:{if(c1(t),e===null)throw Error(T(387));r=t.pendingProps,o=t.memoizedState,i=o.element,L0(e,t),Ms(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=di(Error(T(423)),t),t=Lp(e,t,r,n,i);break e}else if(r!==i){i=di(Error(T(424)),t),t=Lp(e,t,r,n,i);break e}else for(pt=Rn(t.stateNode.containerInfo.firstChild),vt=t,de=!0,Dt=null,n=D0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ui(),r===i){t=pn(e,t,n);break e}We(e,t,r,n)}t=t.child}return t;case 5:return j0(t),e===null&&xc(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,yc(r,i)?a=null:o!==null&&yc(r,o)&&(t.flags|=32),u1(e,t),We(e,t,a,n),t.child;case 6:return e===null&&xc(t),null;case 13:return f1(e,t,n);case 4:return yd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ci(t,null,r,n):We(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Nt(r,i),Mp(e,t,r,i,n);case 7:return We(e,t,t.pendingProps,n),t.child;case 8:return We(e,t,t.pendingProps.children,n),t.child;case 12:return We(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,re(Cs,r._currentValue),r._currentValue=a,o!==null)if(Bt(o.value,a)){if(o.children===i.children&&!it.current){t=pn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=cn(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Sc(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(T(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Sc(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}We(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ti(t,n),i=Mt(i),r=r(i),t.flags|=1,We(e,t,r,n),t.child;case 14:return r=t.type,i=Nt(r,t.pendingProps),i=Nt(r.type,i),Op(e,t,r,i,n);case 15:return s1(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Nt(r,i),as(e,t),t.tag=1,ot(r)?(e=!0,Es(t)):e=!1,ti(t,n),R0(t,r,i),Ec(t,r,i,n),Cc(null,t,r,!0,e,n);case 19:return d1(e,t,n);case 22:return l1(e,t,n)}throw Error(T(156,t.tag))};function T1(e,t){return e0(e,t)}function Yx(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Et(e,t,n,r){return new Yx(e,t,n,r)}function Id(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xx(e){if(typeof e=="function")return Id(e)?1:0;if(e!=null){if(e=e.$$typeof,e===qf)return 11;if(e===Jf)return 14}return 2}function zn(e,t){var n=e.alternate;return n===null?(n=Et(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function us(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Id(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case zr:return dr(n.children,i,o,t);case Zf:a=8,i|=8;break;case Qu:return e=Et(12,n,t,i|2),e.elementType=Qu,e.lanes=o,e;case Zu:return e=Et(13,n,t,i),e.elementType=Zu,e.lanes=o,e;case qu:return e=Et(19,n,t,i),e.elementType=qu,e.lanes=o,e;case Fy:return vl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ny:a=10;break e;case Ry:a=9;break e;case qf:a=11;break e;case Jf:a=14;break e;case wn:a=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=Et(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function dr(e,t,n,r){return e=Et(7,e,r,t),e.lanes=n,e}function vl(e,t,n,r){return e=Et(22,e,r,t),e.elementType=Fy,e.lanes=n,e.stateNode={isHidden:!1},e}function pu(e,t,n){return e=Et(6,e,null,t),e.lanes=n,e}function gu(e,t,n){return t=Et(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Kx(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kl(0),this.expirationTimes=Kl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ld(e,t,n,r,i,o,a,s,l){return e=new Kx(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Et(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},md(o),e}function Qx(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:jr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function C1(e){if(!e)return Vn;e=e._reactInternals;e:{if(wr(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ot(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var n=e.type;if(ot(n))return T0(e,n,t)}return t}function P1(e,t,n,r,i,o,a,s,l){return e=Ld(n,r,!0,e,i,o,a,s,l),e.context=C1(null),n=e.current,r=He(),i=jn(n),o=cn(r,i),o.callback=t??null,Fn(n,o,i),e.current.lanes=i,Ko(e,i,r),at(e,r),e}function ml(e,t,n,r){var i=t.current,o=He(),a=jn(i);return n=C1(n),t.context===null?t.context=n:t.pendingContext=n,t=cn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Fn(i,t,a),e!==null&&(zt(e,i,a,o),rs(e,i,a)),a}function js(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Wp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Nd(e,t){Wp(e,t),(e=e.alternate)&&Wp(e,t)}function Zx(){return null}var M1=typeof reportError=="function"?reportError:function(e){console.error(e)};function Rd(e){this._internalRoot=e}yl.prototype.render=Rd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));ml(e,t,null,null)};yl.prototype.unmount=Rd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;yr(function(){ml(null,e,null,null)}),t[dn]=null}};function yl(e){this._internalRoot=e}yl.prototype.unstable_scheduleHydration=function(e){if(e){var t=s0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<En.length&&t!==0&&t<En[n].priority;n++);En.splice(n,0,e),n===0&&u0(e)}};function Fd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Hp(){}function qx(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=js(a);o.call(u)}}var a=P1(t,r,e,0,null,!1,!1,"",Hp);return e._reactRootContainer=a,e[dn]=a.current,Lo(e.nodeType===8?e.parentNode:e),yr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=js(l);s.call(u)}}var l=Ld(e,0,!1,null,null,!1,!1,"",Hp);return e._reactRootContainer=l,e[dn]=l.current,Lo(e.nodeType===8?e.parentNode:e),yr(function(){ml(t,l,n,r)}),l}function $l(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=js(a);s.call(l)}}ml(t,a,e,i)}else a=qx(n,t,e,i,r);return js(a)}o0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=to(t.pendingLanes);n!==0&&(nd(t,n|1),at(t,we()),!(Z&6)&&(hi=we()+500,Yn()))}break;case 13:yr(function(){var r=hn(e,1);if(r!==null){var i=He();zt(r,e,1,i)}}),Nd(e,1)}};rd=function(e){if(e.tag===13){var t=hn(e,134217728);if(t!==null){var n=He();zt(t,e,134217728,n)}Nd(e,134217728)}};a0=function(e){if(e.tag===13){var t=jn(e),n=hn(e,t);if(n!==null){var r=He();zt(n,e,t,r)}Nd(e,t)}};s0=function(){return te};l0=function(e,t){var n=te;try{return te=e,t()}finally{te=n}};lc=function(e,t,n){switch(t){case"input":if(tc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=cl(r);if(!i)throw Error(T(90));jy(r),tc(r,i)}}}break;case"textarea":By(e,n);break;case"select":t=n.value,t!=null&&Zr(e,!!n.multiple,t,!1)}};Xy=Pd;Ky=yr;var Jx={usingClientEntryPoint:!1,Events:[Zo,Wr,cl,Gy,Yy,Pd]},ji={findFiberByHostInstance:ir,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},e2={bundleType:ji.bundleType,version:ji.version,rendererPackageName:ji.rendererPackageName,rendererConfig:ji.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=qy(e),e===null?null:e.stateNode},findFiberByHostInstance:ji.findFiberByHostInstance||Zx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ka=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ka.isDisabled&&ka.supportsFiber)try{al=ka.inject(e2),Xt=ka}catch{}}yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jx;yt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fd(t))throw Error(T(200));return Qx(e,t,null,n)};yt.createRoot=function(e,t){if(!Fd(e))throw Error(T(299));var n=!1,r="",i=M1;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ld(e,1,!1,null,null,n,!1,r,i),e[dn]=t.current,Lo(e.nodeType===8?e.parentNode:e),new Rd(t)};yt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=qy(t),e=e===null?null:e.stateNode,e};yt.flushSync=function(e){return yr(e)};yt.hydrate=function(e,t,n){if(!bl(t))throw Error(T(200));return $l(null,e,t,!0,n)};yt.hydrateRoot=function(e,t,n){if(!Fd(e))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=M1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=P1(t,null,e,1,n??null,i,!1,o,a),e[dn]=t.current,Lo(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new yl(t)};yt.render=function(e,t,n){if(!bl(t))throw Error(T(200));return $l(null,e,t,!1,n)};yt.unmountComponentAtNode=function(e){if(!bl(e))throw Error(T(40));return e._reactRootContainer?(yr(function(){$l(null,null,e,!1,function(){e._reactRootContainer=null,e[dn]=null})}),!0):!1};yt.unstable_batchedUpdates=Pd;yt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!bl(n))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return $l(e,t,n,!1,r)};yt.version="18.2.0-next-9e3b772b8-20220608";function O1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O1)}catch(e){console.error(e)}}O1(),Py.exports=yt;var I1=Py.exports,Gp=I1;Xu.createRoot=Gp.createRoot,Xu.hydrateRoot=Gp.hydrateRoot;/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */function Jo(e){return e+.5|0}const Pn=(e,t,n)=>Math.max(Math.min(e,n),t);function ro(e){return Pn(Jo(e*2.55),0,255)}function Bn(e){return Pn(Jo(e*255),0,255)}function an(e){return Pn(Jo(e/2.55)/100,0,1)}function Yp(e){return Pn(Jo(e*100),0,100)}const _t={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Bc=[..."0123456789ABCDEF"],t2=e=>Bc[e&15],n2=e=>Bc[(e&240)>>4]+Bc[e&15],Ea=e=>(e&240)>>4===(e&15),r2=e=>Ea(e.r)&&Ea(e.g)&&Ea(e.b)&&Ea(e.a);function i2(e){var t=e.length,n;return e[0]==="#"&&(t===4||t===5?n={r:255&_t[e[1]]*17,g:255&_t[e[2]]*17,b:255&_t[e[3]]*17,a:t===5?_t[e[4]]*17:255}:(t===7||t===9)&&(n={r:_t[e[1]]<<4|_t[e[2]],g:_t[e[3]]<<4|_t[e[4]],b:_t[e[5]]<<4|_t[e[6]],a:t===9?_t[e[7]]<<4|_t[e[8]]:255})),n}const o2=(e,t)=>e<255?t(e):"";function a2(e){var t=r2(e)?t2:n2;return e?"#"+t(e.r)+t(e.g)+t(e.b)+o2(e.a,t):void 0}const s2=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function L1(e,t,n){const r=t*Math.min(n,1-n),i=(o,a=(o+e/30)%12)=>n-r*Math.max(Math.min(a-3,9-a,1),-1);return[i(0),i(8),i(4)]}function l2(e,t,n){const r=(i,o=(i+e/60)%6)=>n-n*t*Math.max(Math.min(o,4-o,1),0);return[r(5),r(3),r(1)]}function u2(e,t,n){const r=L1(e,1,.5);let i;for(t+n>1&&(i=1/(t+n),t*=i,n*=i),i=0;i<3;i++)r[i]*=1-t-n,r[i]+=t;return r}function c2(e,t,n,r,i){return e===i?(t-n)/r+(t<n?6:0):t===i?(n-e)/r+2:(e-t)/r+4}function Dd(e){const n=e.r/255,r=e.g/255,i=e.b/255,o=Math.max(n,r,i),a=Math.min(n,r,i),s=(o+a)/2;let l,u,c;return o!==a&&(c=o-a,u=s>.5?c/(2-o-a):c/(o+a),l=c2(n,r,i,c,o),l=l*60+.5),[l|0,u||0,s]}function jd(e,t,n,r){return(Array.isArray(t)?e(t[0],t[1],t[2]):e(t,n,r)).map(Bn)}function zd(e,t,n){return jd(L1,e,t,n)}function f2(e,t,n){return jd(u2,e,t,n)}function d2(e,t,n){return jd(l2,e,t,n)}function N1(e){return(e%360+360)%360}function h2(e){const t=s2.exec(e);let n=255,r;if(!t)return;t[5]!==r&&(n=t[6]?ro(+t[5]):Bn(+t[5]));const i=N1(+t[2]),o=+t[3]/100,a=+t[4]/100;return t[1]==="hwb"?r=f2(i,o,a):t[1]==="hsv"?r=d2(i,o,a):r=zd(i,o,a),{r:r[0],g:r[1],b:r[2],a:n}}function p2(e,t){var n=Dd(e);n[0]=N1(n[0]+t),n=zd(n),e.r=n[0],e.g=n[1],e.b=n[2]}function g2(e){if(!e)return;const t=Dd(e),n=t[0],r=Yp(t[1]),i=Yp(t[2]);return e.a<255?`hsla(${n}, ${r}%, ${i}%, ${an(e.a)})`:`hsl(${n}, ${r}%, ${i}%)`}const Xp={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Kp={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function v2(){const e={},t=Object.keys(Kp),n=Object.keys(Xp);let r,i,o,a,s;for(r=0;r<t.length;r++){for(a=s=t[r],i=0;i<n.length;i++)o=n[i],s=s.replace(o,Xp[o]);o=parseInt(Kp[a],16),e[s]=[o>>16&255,o>>8&255,o&255]}return e}let Aa;function m2(e){Aa||(Aa=v2(),Aa.transparent=[0,0,0,0]);const t=Aa[e.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const y2=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function b2(e){const t=y2.exec(e);let n=255,r,i,o;if(t){if(t[7]!==r){const a=+t[7];n=t[8]?ro(a):Pn(a*255,0,255)}return r=+t[1],i=+t[3],o=+t[5],r=255&(t[2]?ro(r):Pn(r,0,255)),i=255&(t[4]?ro(i):Pn(i,0,255)),o=255&(t[6]?ro(o):Pn(o,0,255)),{r,g:i,b:o,a:n}}}function $2(e){return e&&(e.a<255?`rgba(${e.r}, ${e.g}, ${e.b}, ${an(e.a)})`:`rgb(${e.r}, ${e.g}, ${e.b})`)}const vu=e=>e<=.0031308?e*12.92:Math.pow(e,1/2.4)*1.055-.055,Nr=e=>e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4);function _2(e,t,n){const r=Nr(an(e.r)),i=Nr(an(e.g)),o=Nr(an(e.b));return{r:Bn(vu(r+n*(Nr(an(t.r))-r))),g:Bn(vu(i+n*(Nr(an(t.g))-i))),b:Bn(vu(o+n*(Nr(an(t.b))-o))),a:e.a+n*(t.a-e.a)}}function Ta(e,t,n){if(e){let r=Dd(e);r[t]=Math.max(0,Math.min(r[t]+r[t]*n,t===0?360:1)),r=zd(r),e.r=r[0],e.g=r[1],e.b=r[2]}}function R1(e,t){return e&&Object.assign(t||{},e)}function Qp(e){var t={r:0,g:0,b:0,a:255};return Array.isArray(e)?e.length>=3&&(t={r:e[0],g:e[1],b:e[2],a:255},e.length>3&&(t.a=Bn(e[3]))):(t=R1(e,{r:0,g:0,b:0,a:1}),t.a=Bn(t.a)),t}function w2(e){return e.charAt(0)==="r"?b2(e):h2(e)}class Vo{constructor(t){if(t instanceof Vo)return t;const n=typeof t;let r;n==="object"?r=Qp(t):n==="string"&&(r=i2(t)||m2(t)||w2(t)),this._rgb=r,this._valid=!!r}get valid(){return this._valid}get rgb(){var t=R1(this._rgb);return t&&(t.a=an(t.a)),t}set rgb(t){this._rgb=Qp(t)}rgbString(){return this._valid?$2(this._rgb):void 0}hexString(){return this._valid?a2(this._rgb):void 0}hslString(){return this._valid?g2(this._rgb):void 0}mix(t,n){if(t){const r=this.rgb,i=t.rgb;let o;const a=n===o?.5:n,s=2*a-1,l=r.a-i.a,u=((s*l===-1?s:(s+l)/(1+s*l))+1)/2;o=1-u,r.r=255&u*r.r+o*i.r+.5,r.g=255&u*r.g+o*i.g+.5,r.b=255&u*r.b+o*i.b+.5,r.a=a*r.a+(1-a)*i.a,this.rgb=r}return this}interpolate(t,n){return t&&(this._rgb=_2(this._rgb,t._rgb,n)),this}clone(){return new Vo(this.rgb)}alpha(t){return this._rgb.a=Bn(t),this}clearer(t){const n=this._rgb;return n.a*=1-t,this}greyscale(){const t=this._rgb,n=Jo(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=n,this}opaquer(t){const n=this._rgb;return n.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return Ta(this._rgb,2,t),this}darken(t){return Ta(this._rgb,2,-t),this}saturate(t){return Ta(this._rgb,1,t),this}desaturate(t){return Ta(this._rgb,1,-t),this}rotate(t){return p2(this._rgb,t),this}}/*!
 * Chart.js v4.4.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */function qt(){}const x2=(()=>{let e=0;return()=>e++})();function se(e){return e===null||typeof e>"u"}function ge(e){if(Array.isArray&&Array.isArray(e))return!0;const t=Object.prototype.toString.call(e);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function J(e){return e!==null&&Object.prototype.toString.call(e)==="[object Object]"}function Oe(e){return(typeof e=="number"||e instanceof Number)&&isFinite(+e)}function ct(e,t){return Oe(e)?e:t}function Y(e,t){return typeof e>"u"?t:e}const S2=(e,t)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100*t:+e;function ne(e,t,n){if(e&&typeof e.call=="function")return e.apply(n,t)}function ee(e,t,n,r){let i,o,a;if(ge(e))if(o=e.length,r)for(i=o-1;i>=0;i--)t.call(n,e[i],i);else for(i=0;i<o;i++)t.call(n,e[i],i);else if(J(e))for(a=Object.keys(e),o=a.length,i=0;i<o;i++)t.call(n,e[a[i]],a[i])}function zs(e,t){let n,r,i,o;if(!e||!t||e.length!==t.length)return!1;for(n=0,r=e.length;n<r;++n)if(i=e[n],o=t[n],i.datasetIndex!==o.datasetIndex||i.index!==o.index)return!1;return!0}function Bs(e){if(ge(e))return e.map(Bs);if(J(e)){const t=Object.create(null),n=Object.keys(e),r=n.length;let i=0;for(;i<r;++i)t[n[i]]=Bs(e[n[i]]);return t}return e}function F1(e){return["__proto__","prototype","constructor"].indexOf(e)===-1}function k2(e,t,n,r){if(!F1(e))return;const i=t[e],o=n[e];J(i)&&J(o)?Wo(i,o,r):t[e]=Bs(o)}function Wo(e,t,n){const r=ge(t)?t:[t],i=r.length;if(!J(e))return e;n=n||{};const o=n.merger||k2;let a;for(let s=0;s<i;++s){if(a=r[s],!J(a))continue;const l=Object.keys(a);for(let u=0,c=l.length;u<c;++u)o(l[u],e,a,n)}return e}function yo(e,t){return Wo(e,t,{merger:E2})}function E2(e,t,n){if(!F1(e))return;const r=t[e],i=n[e];J(r)&&J(i)?yo(r,i):Object.prototype.hasOwnProperty.call(t,e)||(t[e]=Bs(i))}const Zp={"":e=>e,x:e=>e.x,y:e=>e.y};function A2(e){const t=e.split("."),n=[];let r="";for(const i of t)r+=i,r.endsWith("\\")?r=r.slice(0,-1)+".":(n.push(r),r="");return n}function T2(e){const t=A2(e);return n=>{for(const r of t){if(r==="")break;n=n&&n[r]}return n}}function Us(e,t){return(Zp[t]||(Zp[t]=T2(t)))(e)}function Bd(e){return e.charAt(0).toUpperCase()+e.slice(1)}const Vs=e=>typeof e<"u",Wn=e=>typeof e=="function",qp=(e,t)=>{if(e.size!==t.size)return!1;for(const n of e)if(!t.has(n))return!1;return!0};function C2(e){return e.type==="mouseup"||e.type==="click"||e.type==="contextmenu"}const Se=Math.PI,Pt=2*Se,P2=Pt+Se,Ws=Number.POSITIVE_INFINITY,M2=Se/180,gt=Se/2,Kn=Se/4,Jp=Se*2/3,Mn=Math.log10,pi=Math.sign;function bo(e,t,n){return Math.abs(e-t)<n}function eg(e){const t=Math.round(e);e=bo(e,t,e/1e3)?t:e;const n=Math.pow(10,Math.floor(Mn(e))),r=e/n;return(r<=1?1:r<=2?2:r<=5?5:10)*n}function O2(e){const t=[],n=Math.sqrt(e);let r;for(r=1;r<n;r++)e%r===0&&(t.push(r),t.push(e/r));return n===(n|0)&&t.push(n),t.sort((i,o)=>i-o).pop(),t}function Ho(e){return!isNaN(parseFloat(e))&&isFinite(e)}function I2(e,t){const n=Math.round(e);return n-t<=e&&n+t>=e}function D1(e,t,n){let r,i,o;for(r=0,i=e.length;r<i;r++)o=e[r][n],isNaN(o)||(t.min=Math.min(t.min,o),t.max=Math.max(t.max,o))}function On(e){return e*(Se/180)}function Ud(e){return e*(180/Se)}function tg(e){if(!Oe(e))return;let t=1,n=0;for(;Math.round(e*t)/t!==e;)t*=10,n++;return n}function L2(e,t){const n=t.x-e.x,r=t.y-e.y,i=Math.sqrt(n*n+r*r);let o=Math.atan2(r,n);return o<-.5*Se&&(o+=Pt),{angle:o,distance:i}}function Uc(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function N2(e,t){return(e-t+P2)%Pt-Se}function Ft(e){return(e%Pt+Pt)%Pt}function j1(e,t,n,r){const i=Ft(e),o=Ft(t),a=Ft(n),s=Ft(o-i),l=Ft(a-i),u=Ft(i-o),c=Ft(i-a);return i===o||i===a||r&&o===a||s>l&&u<c}function At(e,t,n){return Math.max(t,Math.min(n,e))}function R2(e){return At(e,-32768,32767)}function io(e,t,n,r=1e-6){return e>=Math.min(t,n)-r&&e<=Math.max(t,n)+r}function Vd(e,t,n){n=n||(a=>e[a]<t);let r=e.length-1,i=0,o;for(;r-i>1;)o=i+r>>1,n(o)?i=o:r=o;return{lo:i,hi:r}}const sr=(e,t,n,r)=>Vd(e,n,r?i=>{const o=e[i][t];return o<n||o===n&&e[i+1][t]===n}:i=>e[i][t]<n),F2=(e,t,n)=>Vd(e,n,r=>e[r][t]>=n);function D2(e,t,n){let r=0,i=e.length;for(;r<i&&e[r]<t;)r++;for(;i>r&&e[i-1]>n;)i--;return r>0||i<e.length?e.slice(r,i):e}const z1=["push","pop","shift","splice","unshift"];function j2(e,t){if(e._chartjs){e._chartjs.listeners.push(t);return}Object.defineProperty(e,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),z1.forEach(n=>{const r="_onData"+Bd(n),i=e[n];Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value(...o){const a=i.apply(this,o);return e._chartjs.listeners.forEach(s=>{typeof s[r]=="function"&&s[r](...o)}),a}})})}function ng(e,t){const n=e._chartjs;if(!n)return;const r=n.listeners,i=r.indexOf(t);i!==-1&&r.splice(i,1),!(r.length>0)&&(z1.forEach(o=>{delete e[o]}),delete e._chartjs)}function z2(e){const t=new Set(e);return t.size===e.length?e:Array.from(t)}const B1=function(){return typeof window>"u"?function(e){return e()}:window.requestAnimationFrame}();function U1(e,t){let n=[],r=!1;return function(...i){n=i,r||(r=!0,B1.call(window,()=>{r=!1,e.apply(t,n)}))}}function B2(e,t){let n;return function(...r){return t?(clearTimeout(n),n=setTimeout(e,t,r)):e.apply(this,r),t}}const Wd=e=>e==="start"?"left":e==="end"?"right":"center",ze=(e,t,n)=>e==="start"?t:e==="end"?n:(t+n)/2,U2=(e,t,n,r)=>e===(r?"left":"right")?n:e==="center"?(t+n)/2:t;function V2(e,t,n){const r=t.length;let i=0,o=r;if(e._sorted){const{iScale:a,_parsed:s}=e,l=a.axis,{min:u,max:c,minDefined:f,maxDefined:d}=a.getUserBounds();f&&(i=At(Math.min(sr(s,l,u).lo,n?r:sr(t,l,a.getPixelForValue(u)).lo),0,r-1)),d?o=At(Math.max(sr(s,a.axis,c,!0).hi+1,n?0:sr(t,l,a.getPixelForValue(c),!0).hi+1),i,r)-i:o=r-i}return{start:i,count:o}}function W2(e){const{xScale:t,yScale:n,_scaleRanges:r}=e,i={xmin:t.min,xmax:t.max,ymin:n.min,ymax:n.max};if(!r)return e._scaleRanges=i,!0;const o=r.xmin!==t.min||r.xmax!==t.max||r.ymin!==n.min||r.ymax!==n.max;return Object.assign(r,i),o}const Ca=e=>e===0||e===1,rg=(e,t,n)=>-(Math.pow(2,10*(e-=1))*Math.sin((e-t)*Pt/n)),ig=(e,t,n)=>Math.pow(2,-10*e)*Math.sin((e-t)*Pt/n)+1,$o={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>-e*(e-2),easeInOutQuad:e=>(e/=.5)<1?.5*e*e:-.5*(--e*(e-2)-1),easeInCubic:e=>e*e*e,easeOutCubic:e=>(e-=1)*e*e+1,easeInOutCubic:e=>(e/=.5)<1?.5*e*e*e:.5*((e-=2)*e*e+2),easeInQuart:e=>e*e*e*e,easeOutQuart:e=>-((e-=1)*e*e*e-1),easeInOutQuart:e=>(e/=.5)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2),easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>(e-=1)*e*e*e*e+1,easeInOutQuint:e=>(e/=.5)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2),easeInSine:e=>-Math.cos(e*gt)+1,easeOutSine:e=>Math.sin(e*gt),easeInOutSine:e=>-.5*(Math.cos(Se*e)-1),easeInExpo:e=>e===0?0:Math.pow(2,10*(e-1)),easeOutExpo:e=>e===1?1:-Math.pow(2,-10*e)+1,easeInOutExpo:e=>Ca(e)?e:e<.5?.5*Math.pow(2,10*(e*2-1)):.5*(-Math.pow(2,-10*(e*2-1))+2),easeInCirc:e=>e>=1?e:-(Math.sqrt(1-e*e)-1),easeOutCirc:e=>Math.sqrt(1-(e-=1)*e),easeInOutCirc:e=>(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1),easeInElastic:e=>Ca(e)?e:rg(e,.075,.3),easeOutElastic:e=>Ca(e)?e:ig(e,.075,.3),easeInOutElastic(e){return Ca(e)?e:e<.5?.5*rg(e*2,.1125,.45):.5+.5*ig(e*2-1,.1125,.45)},easeInBack(e){return e*e*((1.70158+1)*e-1.70158)},easeOutBack(e){return(e-=1)*e*((1.70158+1)*e+1.70158)+1},easeInOutBack(e){let t=1.70158;return(e/=.5)<1?.5*(e*e*(((t*=1.525)+1)*e-t)):.5*((e-=2)*e*(((t*=1.525)+1)*e+t)+2)},easeInBounce:e=>1-$o.easeOutBounce(1-e),easeOutBounce(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},easeInOutBounce:e=>e<.5?$o.easeInBounce(e*2)*.5:$o.easeOutBounce(e*2-1)*.5+.5};function Hd(e){if(e&&typeof e=="object"){const t=e.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function og(e){return Hd(e)?e:new Vo(e)}function mu(e){return Hd(e)?e:new Vo(e).saturate(.5).darken(.1).hexString()}const H2=["x","y","borderWidth","radius","tension"],G2=["color","borderColor","backgroundColor"];function Y2(e){e.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),e.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),e.set("animations",{colors:{type:"color",properties:G2},numbers:{type:"number",properties:H2}}),e.describe("animations",{_fallback:"animation"}),e.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function X2(e){e.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const ag=new Map;function K2(e,t){t=t||{};const n=e+JSON.stringify(t);let r=ag.get(n);return r||(r=new Intl.NumberFormat(e,t),ag.set(n,r)),r}function Gd(e,t,n){return K2(t,n).format(e)}const V1={values(e){return ge(e)?e:""+e},numeric(e,t,n){if(e===0)return"0";const r=this.chart.options.locale;let i,o=e;if(n.length>1){const u=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(u<1e-4||u>1e15)&&(i="scientific"),o=Q2(e,n)}const a=Mn(Math.abs(o)),s=isNaN(a)?1:Math.max(Math.min(-1*Math.floor(a),20),0),l={notation:i,minimumFractionDigits:s,maximumFractionDigits:s};return Object.assign(l,this.options.ticks.format),Gd(e,r,l)},logarithmic(e,t,n){if(e===0)return"0";const r=n[t].significand||e/Math.pow(10,Math.floor(Mn(e)));return[1,2,3,5,10,15].includes(r)||t>.8*n.length?V1.numeric.call(this,e,t,n):""}};function Q2(e,t){let n=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(n)>=1&&e!==Math.floor(e)&&(n=e-Math.floor(e)),n}var _l={formatters:V1};function Z2(e){e.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,n)=>n.lineWidth,tickColor:(t,n)=>n.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:_l.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),e.route("scale.ticks","color","","color"),e.route("scale.grid","color","","borderColor"),e.route("scale.border","color","","borderColor"),e.route("scale.title","color","","color"),e.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),e.describe("scales",{_fallback:"scale"}),e.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const br=Object.create(null),Vc=Object.create(null);function _o(e,t){if(!t)return e;const n=t.split(".");for(let r=0,i=n.length;r<i;++r){const o=n[r];e=e[o]||(e[o]=Object.create(null))}return e}function yu(e,t,n){return typeof t=="string"?Wo(_o(e,t),n):Wo(_o(e,""),t)}class q2{constructor(t,n){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=r=>r.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(r,i)=>mu(i.backgroundColor),this.hoverBorderColor=(r,i)=>mu(i.borderColor),this.hoverColor=(r,i)=>mu(i.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(n)}set(t,n){return yu(this,t,n)}get(t){return _o(this,t)}describe(t,n){return yu(Vc,t,n)}override(t,n){return yu(br,t,n)}route(t,n,r,i){const o=_o(this,t),a=_o(this,r),s="_"+n;Object.defineProperties(o,{[s]:{value:o[n],writable:!0},[n]:{enumerable:!0,get(){const l=this[s],u=a[i];return J(l)?Object.assign({},u,l):Y(l,u)},set(l){this[s]=l}}})}apply(t){t.forEach(n=>n(this))}}var _e=new q2({_scriptable:e=>!e.startsWith("on"),_indexable:e=>e!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[Y2,X2,Z2]);function J2(e){return!e||se(e.size)||se(e.family)?null:(e.style?e.style+" ":"")+(e.weight?e.weight+" ":"")+e.size+"px "+e.family}function Hs(e,t,n,r,i){let o=t[i];return o||(o=t[i]=e.measureText(i).width,n.push(i)),o>r&&(r=o),r}function eS(e,t,n,r){r=r||{};let i=r.data=r.data||{},o=r.garbageCollect=r.garbageCollect||[];r.font!==t&&(i=r.data={},o=r.garbageCollect=[],r.font=t),e.save(),e.font=t;let a=0;const s=n.length;let l,u,c,f,d;for(l=0;l<s;l++)if(f=n[l],f!=null&&!ge(f))a=Hs(e,i,o,a,f);else if(ge(f))for(u=0,c=f.length;u<c;u++)d=f[u],d!=null&&!ge(d)&&(a=Hs(e,i,o,a,d));e.restore();const h=o.length/2;if(h>n.length){for(l=0;l<h;l++)delete i[o[l]];o.splice(0,h)}return a}function Qn(e,t,n){const r=e.currentDevicePixelRatio,i=n!==0?Math.max(n/2,.5):0;return Math.round((t-i)*r)/r+i}function sg(e,t){t=t||e.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,e.width,e.height),t.restore()}function Wc(e,t,n,r){W1(e,t,n,r,null)}function W1(e,t,n,r,i){let o,a,s,l,u,c,f,d;const h=t.pointStyle,v=t.rotation,m=t.radius;let y=(v||0)*M2;if(h&&typeof h=="object"&&(o=h.toString(),o==="[object HTMLImageElement]"||o==="[object HTMLCanvasElement]")){e.save(),e.translate(n,r),e.rotate(y),e.drawImage(h,-h.width/2,-h.height/2,h.width,h.height),e.restore();return}if(!(isNaN(m)||m<=0)){switch(e.beginPath(),h){default:i?e.ellipse(n,r,i/2,m,0,0,Pt):e.arc(n,r,m,0,Pt),e.closePath();break;case"triangle":c=i?i/2:m,e.moveTo(n+Math.sin(y)*c,r-Math.cos(y)*m),y+=Jp,e.lineTo(n+Math.sin(y)*c,r-Math.cos(y)*m),y+=Jp,e.lineTo(n+Math.sin(y)*c,r-Math.cos(y)*m),e.closePath();break;case"rectRounded":u=m*.516,l=m-u,a=Math.cos(y+Kn)*l,f=Math.cos(y+Kn)*(i?i/2-u:l),s=Math.sin(y+Kn)*l,d=Math.sin(y+Kn)*(i?i/2-u:l),e.arc(n-f,r-s,u,y-Se,y-gt),e.arc(n+d,r-a,u,y-gt,y),e.arc(n+f,r+s,u,y,y+gt),e.arc(n-d,r+a,u,y+gt,y+Se),e.closePath();break;case"rect":if(!v){l=Math.SQRT1_2*m,c=i?i/2:l,e.rect(n-c,r-l,2*c,2*l);break}y+=Kn;case"rectRot":f=Math.cos(y)*(i?i/2:m),a=Math.cos(y)*m,s=Math.sin(y)*m,d=Math.sin(y)*(i?i/2:m),e.moveTo(n-f,r-s),e.lineTo(n+d,r-a),e.lineTo(n+f,r+s),e.lineTo(n-d,r+a),e.closePath();break;case"crossRot":y+=Kn;case"cross":f=Math.cos(y)*(i?i/2:m),a=Math.cos(y)*m,s=Math.sin(y)*m,d=Math.sin(y)*(i?i/2:m),e.moveTo(n-f,r-s),e.lineTo(n+f,r+s),e.moveTo(n+d,r-a),e.lineTo(n-d,r+a);break;case"star":f=Math.cos(y)*(i?i/2:m),a=Math.cos(y)*m,s=Math.sin(y)*m,d=Math.sin(y)*(i?i/2:m),e.moveTo(n-f,r-s),e.lineTo(n+f,r+s),e.moveTo(n+d,r-a),e.lineTo(n-d,r+a),y+=Kn,f=Math.cos(y)*(i?i/2:m),a=Math.cos(y)*m,s=Math.sin(y)*m,d=Math.sin(y)*(i?i/2:m),e.moveTo(n-f,r-s),e.lineTo(n+f,r+s),e.moveTo(n+d,r-a),e.lineTo(n-d,r+a);break;case"line":a=i?i/2:Math.cos(y)*m,s=Math.sin(y)*m,e.moveTo(n-a,r-s),e.lineTo(n+a,r+s);break;case"dash":e.moveTo(n,r),e.lineTo(n+Math.cos(y)*(i?i/2:m),r+Math.sin(y)*m);break;case!1:e.closePath();break}e.fill(),t.borderWidth>0&&e.stroke()}}function un(e,t,n){return n=n||.5,!t||e&&e.x>t.left-n&&e.x<t.right+n&&e.y>t.top-n&&e.y<t.bottom+n}function Yd(e,t){e.save(),e.beginPath(),e.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),e.clip()}function Xd(e){e.restore()}function tS(e,t,n,r,i){if(!t)return e.lineTo(n.x,n.y);if(i==="middle"){const o=(t.x+n.x)/2;e.lineTo(o,t.y),e.lineTo(o,n.y)}else i==="after"!=!!r?e.lineTo(t.x,n.y):e.lineTo(n.x,t.y);e.lineTo(n.x,n.y)}function nS(e,t,n,r){if(!t)return e.lineTo(n.x,n.y);e.bezierCurveTo(r?t.cp1x:t.cp2x,r?t.cp1y:t.cp2y,r?n.cp2x:n.cp1x,r?n.cp2y:n.cp1y,n.x,n.y)}function rS(e,t){t.translation&&e.translate(t.translation[0],t.translation[1]),se(t.rotation)||e.rotate(t.rotation),t.color&&(e.fillStyle=t.color),t.textAlign&&(e.textAlign=t.textAlign),t.textBaseline&&(e.textBaseline=t.textBaseline)}function iS(e,t,n,r,i){if(i.strikethrough||i.underline){const o=e.measureText(r),a=t-o.actualBoundingBoxLeft,s=t+o.actualBoundingBoxRight,l=n-o.actualBoundingBoxAscent,u=n+o.actualBoundingBoxDescent,c=i.strikethrough?(l+u)/2:u;e.strokeStyle=e.fillStyle,e.beginPath(),e.lineWidth=i.decorationWidth||2,e.moveTo(a,c),e.lineTo(s,c),e.stroke()}}function oS(e,t){const n=e.fillStyle;e.fillStyle=t.color,e.fillRect(t.left,t.top,t.width,t.height),e.fillStyle=n}function $r(e,t,n,r,i,o={}){const a=ge(t)?t:[t],s=o.strokeWidth>0&&o.strokeColor!=="";let l,u;for(e.save(),e.font=i.string,rS(e,o),l=0;l<a.length;++l)u=a[l],o.backdrop&&oS(e,o.backdrop),s&&(o.strokeColor&&(e.strokeStyle=o.strokeColor),se(o.strokeWidth)||(e.lineWidth=o.strokeWidth),e.strokeText(u,n,r,o.maxWidth)),e.fillText(u,n,r,o.maxWidth),iS(e,n,r,u,o),r+=Number(i.lineHeight);e.restore()}function Gs(e,t){const{x:n,y:r,w:i,h:o,radius:a}=t;e.arc(n+a.topLeft,r+a.topLeft,a.topLeft,1.5*Se,Se,!0),e.lineTo(n,r+o-a.bottomLeft),e.arc(n+a.bottomLeft,r+o-a.bottomLeft,a.bottomLeft,Se,gt,!0),e.lineTo(n+i-a.bottomRight,r+o),e.arc(n+i-a.bottomRight,r+o-a.bottomRight,a.bottomRight,gt,0,!0),e.lineTo(n+i,r+a.topRight),e.arc(n+i-a.topRight,r+a.topRight,a.topRight,0,-gt,!0),e.lineTo(n+a.topLeft,r)}const aS=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,sS=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function lS(e,t){const n=(""+e).match(aS);if(!n||n[1]==="normal")return t*1.2;switch(e=+n[2],n[3]){case"px":return e;case"%":e/=100;break}return t*e}const uS=e=>+e||0;function H1(e,t){const n={},r=J(t),i=r?Object.keys(t):t,o=J(e)?r?a=>Y(e[a],e[t[a]]):a=>e[a]:()=>e;for(const a of i)n[a]=uS(o(a));return n}function cS(e){return H1(e,{top:"y",right:"x",bottom:"y",left:"x"})}function ri(e){return H1(e,["topLeft","topRight","bottomLeft","bottomRight"])}function Ve(e){const t=cS(e);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function Ce(e,t){e=e||{},t=t||_e.font;let n=Y(e.size,t.size);typeof n=="string"&&(n=parseInt(n,10));let r=Y(e.style,t.style);r&&!(""+r).match(sS)&&(console.warn('Invalid font style specified: "'+r+'"'),r=void 0);const i={family:Y(e.family,t.family),lineHeight:lS(Y(e.lineHeight,t.lineHeight),n),size:n,style:r,weight:Y(e.weight,t.weight),string:""};return i.string=J2(i),i}function Pa(e,t,n,r){let i=!0,o,a,s;for(o=0,a=e.length;o<a;++o)if(s=e[o],s!==void 0&&(t!==void 0&&typeof s=="function"&&(s=s(t),i=!1),n!==void 0&&ge(s)&&(s=s[n%s.length],i=!1),s!==void 0))return r&&!i&&(r.cacheable=!1),s}function fS(e,t,n){const{min:r,max:i}=e,o=S2(t,(i-r)/2),a=(s,l)=>n&&s===0?0:s+l;return{min:a(r,-Math.abs(o)),max:a(i,o)}}function Xn(e,t){return Object.assign(Object.create(e),t)}function Kd(e,t=[""],n,r,i=()=>e[0]){const o=n||e;typeof r>"u"&&(r=K1("_fallback",e));const a={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:e,_rootScopes:o,_fallback:r,_getTarget:i,override:s=>Kd([s,...e],t,o,r)};return new Proxy(a,{deleteProperty(s,l){return delete s[l],delete s._keys,delete e[0][l],!0},get(s,l){return Y1(s,l,()=>bS(l,t,e,s))},getOwnPropertyDescriptor(s,l){return Reflect.getOwnPropertyDescriptor(s._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(e[0])},has(s,l){return ug(s).includes(l)},ownKeys(s){return ug(s)},set(s,l,u){const c=s._storage||(s._storage=i());return s[l]=c[l]=u,delete s._keys,!0}})}function gi(e,t,n,r){const i={_cacheable:!1,_proxy:e,_context:t,_subProxy:n,_stack:new Set,_descriptors:G1(e,r),setContext:o=>gi(e,o,n,r),override:o=>gi(e.override(o),t,n,r)};return new Proxy(i,{deleteProperty(o,a){return delete o[a],delete e[a],!0},get(o,a,s){return Y1(o,a,()=>hS(o,a,s))},getOwnPropertyDescriptor(o,a){return o._descriptors.allKeys?Reflect.has(e,a)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(e,a)},getPrototypeOf(){return Reflect.getPrototypeOf(e)},has(o,a){return Reflect.has(e,a)},ownKeys(){return Reflect.ownKeys(e)},set(o,a,s){return e[a]=s,delete o[a],!0}})}function G1(e,t={scriptable:!0,indexable:!0}){const{_scriptable:n=t.scriptable,_indexable:r=t.indexable,_allKeys:i=t.allKeys}=e;return{allKeys:i,scriptable:n,indexable:r,isScriptable:Wn(n)?n:()=>n,isIndexable:Wn(r)?r:()=>r}}const dS=(e,t)=>e?e+Bd(t):t,Qd=(e,t)=>J(t)&&e!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function Y1(e,t,n){if(Object.prototype.hasOwnProperty.call(e,t))return e[t];const r=n();return e[t]=r,r}function hS(e,t,n){const{_proxy:r,_context:i,_subProxy:o,_descriptors:a}=e;let s=r[t];return Wn(s)&&a.isScriptable(t)&&(s=pS(t,s,e,n)),ge(s)&&s.length&&(s=gS(t,s,e,a.isIndexable)),Qd(t,s)&&(s=gi(s,i,o&&o[t],a)),s}function pS(e,t,n,r){const{_proxy:i,_context:o,_subProxy:a,_stack:s}=n;if(s.has(e))throw new Error("Recursion detected: "+Array.from(s).join("->")+"->"+e);s.add(e);let l=t(o,a||r);return s.delete(e),Qd(e,l)&&(l=Zd(i._scopes,i,e,l)),l}function gS(e,t,n,r){const{_proxy:i,_context:o,_subProxy:a,_descriptors:s}=n;if(typeof o.index<"u"&&r(e))return t[o.index%t.length];if(J(t[0])){const l=t,u=i._scopes.filter(c=>c!==l);t=[];for(const c of l){const f=Zd(u,i,e,c);t.push(gi(f,o,a&&a[e],s))}}return t}function X1(e,t,n){return Wn(e)?e(t,n):e}const vS=(e,t)=>e===!0?t:typeof e=="string"?Us(t,e):void 0;function mS(e,t,n,r,i){for(const o of t){const a=vS(n,o);if(a){e.add(a);const s=X1(a._fallback,n,i);if(typeof s<"u"&&s!==n&&s!==r)return s}else if(a===!1&&typeof r<"u"&&n!==r)return null}return!1}function Zd(e,t,n,r){const i=t._rootScopes,o=X1(t._fallback,n,r),a=[...e,...i],s=new Set;s.add(r);let l=lg(s,a,n,o||n,r);return l===null||typeof o<"u"&&o!==n&&(l=lg(s,a,o,l,r),l===null)?!1:Kd(Array.from(s),[""],i,o,()=>yS(t,n,r))}function lg(e,t,n,r,i){for(;n;)n=mS(e,t,n,r,i);return n}function yS(e,t,n){const r=e._getTarget();t in r||(r[t]={});const i=r[t];return ge(i)&&J(n)?n:i||{}}function bS(e,t,n,r){let i;for(const o of t)if(i=K1(dS(o,e),n),typeof i<"u")return Qd(e,i)?Zd(n,r,e,i):i}function K1(e,t){for(const n of t){if(!n)continue;const r=n[e];if(typeof r<"u")return r}}function ug(e){let t=e._keys;return t||(t=e._keys=$S(e._scopes)),t}function $S(e){const t=new Set;for(const n of e)for(const r of Object.keys(n).filter(i=>!i.startsWith("_")))t.add(r);return Array.from(t)}const _S=Number.EPSILON||1e-14,vi=(e,t)=>t<e.length&&!e[t].skip&&e[t],Q1=e=>e==="x"?"y":"x";function wS(e,t,n,r){const i=e.skip?t:e,o=t,a=n.skip?t:n,s=Uc(o,i),l=Uc(a,o);let u=s/(s+l),c=l/(s+l);u=isNaN(u)?0:u,c=isNaN(c)?0:c;const f=r*u,d=r*c;return{previous:{x:o.x-f*(a.x-i.x),y:o.y-f*(a.y-i.y)},next:{x:o.x+d*(a.x-i.x),y:o.y+d*(a.y-i.y)}}}function xS(e,t,n){const r=e.length;let i,o,a,s,l,u=vi(e,0);for(let c=0;c<r-1;++c)if(l=u,u=vi(e,c+1),!(!l||!u)){if(bo(t[c],0,_S)){n[c]=n[c+1]=0;continue}i=n[c]/t[c],o=n[c+1]/t[c],s=Math.pow(i,2)+Math.pow(o,2),!(s<=9)&&(a=3/Math.sqrt(s),n[c]=i*a*t[c],n[c+1]=o*a*t[c])}}function SS(e,t,n="x"){const r=Q1(n),i=e.length;let o,a,s,l=vi(e,0);for(let u=0;u<i;++u){if(a=s,s=l,l=vi(e,u+1),!s)continue;const c=s[n],f=s[r];a&&(o=(c-a[n])/3,s[`cp1${n}`]=c-o,s[`cp1${r}`]=f-o*t[u]),l&&(o=(l[n]-c)/3,s[`cp2${n}`]=c+o,s[`cp2${r}`]=f+o*t[u])}}function kS(e,t="x"){const n=Q1(t),r=e.length,i=Array(r).fill(0),o=Array(r);let a,s,l,u=vi(e,0);for(a=0;a<r;++a)if(s=l,l=u,u=vi(e,a+1),!!l){if(u){const c=u[t]-l[t];i[a]=c!==0?(u[n]-l[n])/c:0}o[a]=s?u?pi(i[a-1])!==pi(i[a])?0:(i[a-1]+i[a])/2:i[a-1]:i[a]}xS(e,i,o),SS(e,o,t)}function Ma(e,t,n){return Math.max(Math.min(e,n),t)}function ES(e,t){let n,r,i,o,a,s=un(e[0],t);for(n=0,r=e.length;n<r;++n)a=o,o=s,s=n<r-1&&un(e[n+1],t),o&&(i=e[n],a&&(i.cp1x=Ma(i.cp1x,t.left,t.right),i.cp1y=Ma(i.cp1y,t.top,t.bottom)),s&&(i.cp2x=Ma(i.cp2x,t.left,t.right),i.cp2y=Ma(i.cp2y,t.top,t.bottom)))}function AS(e,t,n,r,i){let o,a,s,l;if(t.spanGaps&&(e=e.filter(u=>!u.skip)),t.cubicInterpolationMode==="monotone")kS(e,i);else{let u=r?e[e.length-1]:e[0];for(o=0,a=e.length;o<a;++o)s=e[o],l=wS(u,s,e[Math.min(o+1,a-(r?0:1))%a],t.tension),s.cp1x=l.previous.x,s.cp1y=l.previous.y,s.cp2x=l.next.x,s.cp2y=l.next.y,u=s}t.capBezierPoints&&ES(e,n)}function Z1(){return typeof window<"u"&&typeof document<"u"}function qd(e){let t=e.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function Ys(e,t,n){let r;return typeof e=="string"?(r=parseInt(e,10),e.indexOf("%")!==-1&&(r=r/100*t.parentNode[n])):r=e,r}const wl=e=>e.ownerDocument.defaultView.getComputedStyle(e,null);function TS(e,t){return wl(e).getPropertyValue(t)}const CS=["top","right","bottom","left"];function hr(e,t,n){const r={};n=n?"-"+n:"";for(let i=0;i<4;i++){const o=CS[i];r[o]=parseFloat(e[t+"-"+o+n])||0}return r.width=r.left+r.right,r.height=r.top+r.bottom,r}const PS=(e,t,n)=>(e>0||t>0)&&(!n||!n.shadowRoot);function MS(e,t){const n=e.touches,r=n&&n.length?n[0]:e,{offsetX:i,offsetY:o}=r;let a=!1,s,l;if(PS(i,o,e.target))s=i,l=o;else{const u=t.getBoundingClientRect();s=r.clientX-u.left,l=r.clientY-u.top,a=!0}return{x:s,y:l,box:a}}function nr(e,t){if("native"in e)return e;const{canvas:n,currentDevicePixelRatio:r}=t,i=wl(n),o=i.boxSizing==="border-box",a=hr(i,"padding"),s=hr(i,"border","width"),{x:l,y:u,box:c}=MS(e,n),f=a.left+(c&&s.left),d=a.top+(c&&s.top);let{width:h,height:v}=t;return o&&(h-=a.width+s.width,v-=a.height+s.height),{x:Math.round((l-f)/h*n.width/r),y:Math.round((u-d)/v*n.height/r)}}function OS(e,t,n){let r,i;if(t===void 0||n===void 0){const o=qd(e);if(!o)t=e.clientWidth,n=e.clientHeight;else{const a=o.getBoundingClientRect(),s=wl(o),l=hr(s,"border","width"),u=hr(s,"padding");t=a.width-u.width-l.width,n=a.height-u.height-l.height,r=Ys(s.maxWidth,o,"clientWidth"),i=Ys(s.maxHeight,o,"clientHeight")}}return{width:t,height:n,maxWidth:r||Ws,maxHeight:i||Ws}}const Oa=e=>Math.round(e*10)/10;function IS(e,t,n,r){const i=wl(e),o=hr(i,"margin"),a=Ys(i.maxWidth,e,"clientWidth")||Ws,s=Ys(i.maxHeight,e,"clientHeight")||Ws,l=OS(e,t,n);let{width:u,height:c}=l;if(i.boxSizing==="content-box"){const d=hr(i,"border","width"),h=hr(i,"padding");u-=h.width+d.width,c-=h.height+d.height}return u=Math.max(0,u-o.width),c=Math.max(0,r?u/r:c-o.height),u=Oa(Math.min(u,a,l.maxWidth)),c=Oa(Math.min(c,s,l.maxHeight)),u&&!c&&(c=Oa(u/2)),(t!==void 0||n!==void 0)&&r&&l.height&&c>l.height&&(c=l.height,u=Oa(Math.floor(c*r))),{width:u,height:c}}function cg(e,t,n){const r=t||1,i=Math.floor(e.height*r),o=Math.floor(e.width*r);e.height=Math.floor(e.height),e.width=Math.floor(e.width);const a=e.canvas;return a.style&&(n||!a.style.height&&!a.style.width)&&(a.style.height=`${e.height}px`,a.style.width=`${e.width}px`),e.currentDevicePixelRatio!==r||a.height!==i||a.width!==o?(e.currentDevicePixelRatio=r,a.height=i,a.width=o,e.ctx.setTransform(r,0,0,r,0,0),!0):!1}const LS=function(){let e=!1;try{const t={get passive(){return e=!0,!1}};window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch{}return e}();function fg(e,t){const n=TS(e,t),r=n&&n.match(/^(\d+)(\.\d+)?px$/);return r?+r[1]:void 0}function rr(e,t,n,r){return{x:e.x+n*(t.x-e.x),y:e.y+n*(t.y-e.y)}}function NS(e,t,n,r){return{x:e.x+n*(t.x-e.x),y:r==="middle"?n<.5?e.y:t.y:r==="after"?n<1?e.y:t.y:n>0?t.y:e.y}}function RS(e,t,n,r){const i={x:e.cp2x,y:e.cp2y},o={x:t.cp1x,y:t.cp1y},a=rr(e,i,n),s=rr(i,o,n),l=rr(o,t,n),u=rr(a,s,n),c=rr(s,l,n);return rr(u,c,n)}const FS=function(e,t){return{x(n){return e+e+t-n},setWidth(n){t=n},textAlign(n){return n==="center"?n:n==="right"?"left":"right"},xPlus(n,r){return n-r},leftForLtr(n,r){return n-r}}},DS=function(){return{x(e){return e},setWidth(e){},textAlign(e){return e},xPlus(e,t){return e+t},leftForLtr(e,t){return e}}};function ii(e,t,n){return e?FS(t,n):DS()}function q1(e,t){let n,r;(t==="ltr"||t==="rtl")&&(n=e.canvas.style,r=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",t,"important"),e.prevTextDirection=r)}function J1(e,t){t!==void 0&&(delete e.prevTextDirection,e.canvas.style.setProperty("direction",t[0],t[1]))}function eb(e){return e==="angle"?{between:j1,compare:N2,normalize:Ft}:{between:io,compare:(t,n)=>t-n,normalize:t=>t}}function dg({start:e,end:t,count:n,loop:r,style:i}){return{start:e%n,end:t%n,loop:r&&(t-e+1)%n===0,style:i}}function jS(e,t,n){const{property:r,start:i,end:o}=n,{between:a,normalize:s}=eb(r),l=t.length;let{start:u,end:c,loop:f}=e,d,h;if(f){for(u+=l,c+=l,d=0,h=l;d<h&&a(s(t[u%l][r]),i,o);++d)u--,c--;u%=l,c%=l}return c<u&&(c+=l),{start:u,end:c,loop:f,style:e.style}}function zS(e,t,n){if(!n)return[e];const{property:r,start:i,end:o}=n,a=t.length,{compare:s,between:l,normalize:u}=eb(r),{start:c,end:f,loop:d,style:h}=jS(e,t,n),v=[];let m=!1,y=null,p,g,b;const $=()=>l(i,b,p)&&s(i,b)!==0,_=()=>s(o,p)===0||l(o,b,p),k=()=>m||$(),w=()=>!m||_();for(let E=c,M=c;E<=f;++E)g=t[E%a],!g.skip&&(p=u(g[r]),p!==b&&(m=l(p,i,o),y===null&&k()&&(y=s(p,i)===0?E:M),y!==null&&w()&&(v.push(dg({start:y,end:E,loop:d,count:a,style:h})),y=null),M=E,b=p));return y!==null&&v.push(dg({start:y,end:f,loop:d,count:a,style:h})),v}function BS(e,t){const n=[],r=e.segments;for(let i=0;i<r.length;i++){const o=zS(r[i],e.points,t);o.length&&n.push(...o)}return n}function US(e,t,n,r){let i=0,o=t-1;if(n&&!r)for(;i<t&&!e[i].skip;)i++;for(;i<t&&e[i].skip;)i++;for(i%=t,n&&(o+=i);o>i&&e[o%t].skip;)o--;return o%=t,{start:i,end:o}}function VS(e,t,n,r){const i=e.length,o=[];let a=t,s=e[t],l;for(l=t+1;l<=n;++l){const u=e[l%i];u.skip||u.stop?s.skip||(r=!1,o.push({start:t%i,end:(l-1)%i,loop:r}),t=a=u.stop?l:null):(a=l,s.skip&&(t=l)),s=u}return a!==null&&o.push({start:t%i,end:a%i,loop:r}),o}function WS(e,t){const n=e.points,r=e.options.spanGaps,i=n.length;if(!i)return[];const o=!!e._loop,{start:a,end:s}=US(n,i,o,r);if(r===!0)return hg(e,[{start:a,end:s,loop:o}],n,t);const l=s<a?s+i:s,u=!!e._fullLoop&&a===0&&s===i-1;return hg(e,VS(n,a,l,u),n,t)}function hg(e,t,n,r){return!r||!r.setContext||!n?t:HS(e,t,n,r)}function HS(e,t,n,r){const i=e._chart.getContext(),o=pg(e.options),{_datasetIndex:a,options:{spanGaps:s}}=e,l=n.length,u=[];let c=o,f=t[0].start,d=f;function h(v,m,y,p){const g=s?-1:1;if(v!==m){for(v+=l;n[v%l].skip;)v-=g;for(;n[m%l].skip;)m+=g;v%l!==m%l&&(u.push({start:v%l,end:m%l,loop:y,style:p}),c=p,f=m%l)}}for(const v of t){f=s?f:v.start;let m=n[f%l],y;for(d=f+1;d<=v.end;d++){const p=n[d%l];y=pg(r.setContext(Xn(i,{type:"segment",p0:m,p1:p,p0DataIndex:(d-1)%l,p1DataIndex:d%l,datasetIndex:a}))),GS(y,c)&&h(f,d-1,v.loop,c),m=p,c=y}f<d-1&&h(f,d-1,v.loop,c)}return u}function pg(e){return{backgroundColor:e.backgroundColor,borderCapStyle:e.borderCapStyle,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderJoinStyle:e.borderJoinStyle,borderWidth:e.borderWidth,borderColor:e.borderColor}}function GS(e,t){if(!t)return!1;const n=[],r=function(i,o){return Hd(o)?(n.includes(o)||n.push(o),n.indexOf(o)):o};return JSON.stringify(e,r)!==JSON.stringify(t,r)}/*!
 * Chart.js v4.4.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */class YS{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,n,r,i){const o=n.listeners[i],a=n.duration;o.forEach(s=>s({chart:t,initial:n.initial,numSteps:a,currentStep:Math.min(r-n.start,a)}))}_refresh(){this._request||(this._running=!0,this._request=B1.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let n=0;this._charts.forEach((r,i)=>{if(!r.running||!r.items.length)return;const o=r.items;let a=o.length-1,s=!1,l;for(;a>=0;--a)l=o[a],l._active?(l._total>r.duration&&(r.duration=l._total),l.tick(t),s=!0):(o[a]=o[o.length-1],o.pop());s&&(i.draw(),this._notify(i,r,t,"progress")),o.length||(r.running=!1,this._notify(i,r,t,"complete"),r.initial=!1),n+=o.length}),this._lastDate=t,n===0&&(this._running=!1)}_getAnims(t){const n=this._charts;let r=n.get(t);return r||(r={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},n.set(t,r)),r}listen(t,n,r){this._getAnims(t).listeners[n].push(r)}add(t,n){!n||!n.length||this._getAnims(t).items.push(...n)}has(t){return this._getAnims(t).items.length>0}start(t){const n=this._charts.get(t);n&&(n.running=!0,n.start=Date.now(),n.duration=n.items.reduce((r,i)=>Math.max(r,i._duration),0),this._refresh())}running(t){if(!this._running)return!1;const n=this._charts.get(t);return!(!n||!n.running||!n.items.length)}stop(t){const n=this._charts.get(t);if(!n||!n.items.length)return;const r=n.items;let i=r.length-1;for(;i>=0;--i)r[i].cancel();n.items=[],this._notify(t,n,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var tn=new YS;const gg="transparent",XS={boolean(e,t,n){return n>.5?t:e},color(e,t,n){const r=og(e||gg),i=r.valid&&og(t||gg);return i&&i.valid?i.mix(r,n).hexString():t},number(e,t,n){return e+(t-e)*n}};class KS{constructor(t,n,r,i){const o=n[r];i=Pa([t.to,i,o,t.from]);const a=Pa([t.from,o,i]);this._active=!0,this._fn=t.fn||XS[t.type||typeof a],this._easing=$o[t.easing]||$o.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=n,this._prop=r,this._from=a,this._to=i,this._promises=void 0}active(){return this._active}update(t,n,r){if(this._active){this._notify(!1);const i=this._target[this._prop],o=r-this._start,a=this._duration-o;this._start=r,this._duration=Math.floor(Math.max(a,t.duration)),this._total+=o,this._loop=!!t.loop,this._to=Pa([t.to,n,i,t.from]),this._from=Pa([t.from,i,n])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const n=t-this._start,r=this._duration,i=this._prop,o=this._from,a=this._loop,s=this._to;let l;if(this._active=o!==s&&(a||n<r),!this._active){this._target[i]=s,this._notify(!0);return}if(n<0){this._target[i]=o;return}l=n/r%2,l=a&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[i]=this._fn(o,s,l)}wait(){const t=this._promises||(this._promises=[]);return new Promise((n,r)=>{t.push({res:n,rej:r})})}_notify(t){const n=t?"res":"rej",r=this._promises||[];for(let i=0;i<r.length;i++)r[i][n]()}}class tb{constructor(t,n){this._chart=t,this._properties=new Map,this.configure(n)}configure(t){if(!J(t))return;const n=Object.keys(_e.animation),r=this._properties;Object.getOwnPropertyNames(t).forEach(i=>{const o=t[i];if(!J(o))return;const a={};for(const s of n)a[s]=o[s];(ge(o.properties)&&o.properties||[i]).forEach(s=>{(s===i||!r.has(s))&&r.set(s,a)})})}_animateOptions(t,n){const r=n.options,i=ZS(t,r);if(!i)return[];const o=this._createAnimations(i,r);return r.$shared&&QS(t.options.$animations,r).then(()=>{t.options=r},()=>{}),o}_createAnimations(t,n){const r=this._properties,i=[],o=t.$animations||(t.$animations={}),a=Object.keys(n),s=Date.now();let l;for(l=a.length-1;l>=0;--l){const u=a[l];if(u.charAt(0)==="$")continue;if(u==="options"){i.push(...this._animateOptions(t,n));continue}const c=n[u];let f=o[u];const d=r.get(u);if(f)if(d&&f.active()){f.update(d,c,s);continue}else f.cancel();if(!d||!d.duration){t[u]=c;continue}o[u]=f=new KS(d,t,u,c),i.push(f)}return i}update(t,n){if(this._properties.size===0){Object.assign(t,n);return}const r=this._createAnimations(t,n);if(r.length)return tn.add(this._chart,r),!0}}function QS(e,t){const n=[],r=Object.keys(t);for(let i=0;i<r.length;i++){const o=e[r[i]];o&&o.active()&&n.push(o.wait())}return Promise.all(n)}function ZS(e,t){if(!t)return;let n=e.options;if(!n){e.options=t;return}return n.$shared&&(e.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function vg(e,t){const n=e&&e.options||{},r=n.reverse,i=n.min===void 0?t:0,o=n.max===void 0?t:0;return{start:r?o:i,end:r?i:o}}function qS(e,t,n){if(n===!1)return!1;const r=vg(e,n),i=vg(t,n);return{top:i.end,right:r.end,bottom:i.start,left:r.start}}function JS(e){let t,n,r,i;return J(e)?(t=e.top,n=e.right,r=e.bottom,i=e.left):t=n=r=i=e,{top:t,right:n,bottom:r,left:i,disabled:e===!1}}function nb(e,t){const n=[],r=e._getSortedDatasetMetas(t);let i,o;for(i=0,o=r.length;i<o;++i)n.push(r[i].index);return n}function mg(e,t,n,r={}){const i=e.keys,o=r.mode==="single";let a,s,l,u;if(t!==null){for(a=0,s=i.length;a<s;++a){if(l=+i[a],l===n){if(r.all)continue;break}u=e.values[l],Oe(u)&&(o||t===0||pi(t)===pi(u))&&(t+=u)}return t}}function ek(e){const t=Object.keys(e),n=new Array(t.length);let r,i,o;for(r=0,i=t.length;r<i;++r)o=t[r],n[r]={x:o,y:e[o]};return n}function yg(e,t){const n=e&&e.options.stacked;return n||n===void 0&&t.stack!==void 0}function tk(e,t,n){return`${e.id}.${t.id}.${n.stack||n.type}`}function nk(e){const{min:t,max:n,minDefined:r,maxDefined:i}=e.getUserBounds();return{min:r?t:Number.NEGATIVE_INFINITY,max:i?n:Number.POSITIVE_INFINITY}}function rk(e,t,n){const r=e[t]||(e[t]={});return r[n]||(r[n]={})}function bg(e,t,n,r){for(const i of t.getMatchingVisibleMetas(r).reverse()){const o=e[i.index];if(n&&o>0||!n&&o<0)return i.index}return null}function $g(e,t){const{chart:n,_cachedMeta:r}=e,i=n._stacks||(n._stacks={}),{iScale:o,vScale:a,index:s}=r,l=o.axis,u=a.axis,c=tk(o,a,r),f=t.length;let d;for(let h=0;h<f;++h){const v=t[h],{[l]:m,[u]:y}=v,p=v._stacks||(v._stacks={});d=p[u]=rk(i,c,m),d[s]=y,d._top=bg(d,a,!0,r.type),d._bottom=bg(d,a,!1,r.type);const g=d._visualValues||(d._visualValues={});g[s]=y}}function bu(e,t){const n=e.scales;return Object.keys(n).filter(r=>n[r].axis===t).shift()}function ik(e,t){return Xn(e,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function ok(e,t,n){return Xn(e,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:n,index:t,mode:"default",type:"data"})}function zi(e,t){const n=e.controller.index,r=e.vScale&&e.vScale.axis;if(r){t=t||e._parsed;for(const i of t){const o=i._stacks;if(!o||o[r]===void 0||o[r][n]===void 0)return;delete o[r][n],o[r]._visualValues!==void 0&&o[r]._visualValues[n]!==void 0&&delete o[r]._visualValues[n]}}}const $u=e=>e==="reset"||e==="none",_g=(e,t)=>t?e:Object.assign({},e),ak=(e,t,n)=>e&&!t.hidden&&t._stacked&&{keys:nb(n,!0),values:null};class wo{constructor(t,n){this.chart=t,this._ctx=t.ctx,this.index=n,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=yg(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&zi(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,n=this._cachedMeta,r=this.getDataset(),i=(f,d,h,v)=>f==="x"?d:f==="r"?v:h,o=n.xAxisID=Y(r.xAxisID,bu(t,"x")),a=n.yAxisID=Y(r.yAxisID,bu(t,"y")),s=n.rAxisID=Y(r.rAxisID,bu(t,"r")),l=n.indexAxis,u=n.iAxisID=i(l,o,a,s),c=n.vAxisID=i(l,a,o,s);n.xScale=this.getScaleForId(o),n.yScale=this.getScaleForId(a),n.rScale=this.getScaleForId(s),n.iScale=this.getScaleForId(u),n.vScale=this.getScaleForId(c)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const n=this._cachedMeta;return t===n.iScale?n.vScale:n.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&ng(this._data,this),t._stacked&&zi(t)}_dataCheck(){const t=this.getDataset(),n=t.data||(t.data=[]),r=this._data;if(J(n))this._data=ek(n);else if(r!==n){if(r){ng(r,this);const i=this._cachedMeta;zi(i),i._parsed=[]}n&&Object.isExtensible(n)&&j2(n,this),this._syncList=[],this._data=n}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const n=this._cachedMeta,r=this.getDataset();let i=!1;this._dataCheck();const o=n._stacked;n._stacked=yg(n.vScale,n),n.stack!==r.stack&&(i=!0,zi(n),n.stack=r.stack),this._resyncElements(t),(i||o!==n._stacked)&&$g(this,n._parsed)}configure(){const t=this.chart.config,n=t.datasetScopeKeys(this._type),r=t.getOptionScopes(this.getDataset(),n,!0);this.options=t.createResolver(r,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,n){const{_cachedMeta:r,_data:i}=this,{iScale:o,_stacked:a}=r,s=o.axis;let l=t===0&&n===i.length?!0:r._sorted,u=t>0&&r._parsed[t-1],c,f,d;if(this._parsing===!1)r._parsed=i,r._sorted=!0,d=i;else{ge(i[t])?d=this.parseArrayData(r,i,t,n):J(i[t])?d=this.parseObjectData(r,i,t,n):d=this.parsePrimitiveData(r,i,t,n);const h=()=>f[s]===null||u&&f[s]<u[s];for(c=0;c<n;++c)r._parsed[c+t]=f=d[c],l&&(h()&&(l=!1),u=f);r._sorted=l}a&&$g(this,d)}parsePrimitiveData(t,n,r,i){const{iScale:o,vScale:a}=t,s=o.axis,l=a.axis,u=o.getLabels(),c=o===a,f=new Array(i);let d,h,v;for(d=0,h=i;d<h;++d)v=d+r,f[d]={[s]:c||o.parse(u[v],v),[l]:a.parse(n[v],v)};return f}parseArrayData(t,n,r,i){const{xScale:o,yScale:a}=t,s=new Array(i);let l,u,c,f;for(l=0,u=i;l<u;++l)c=l+r,f=n[c],s[l]={x:o.parse(f[0],c),y:a.parse(f[1],c)};return s}parseObjectData(t,n,r,i){const{xScale:o,yScale:a}=t,{xAxisKey:s="x",yAxisKey:l="y"}=this._parsing,u=new Array(i);let c,f,d,h;for(c=0,f=i;c<f;++c)d=c+r,h=n[d],u[c]={x:o.parse(Us(h,s),d),y:a.parse(Us(h,l),d)};return u}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,n,r){const i=this.chart,o=this._cachedMeta,a=n[t.axis],s={keys:nb(i,!0),values:n._stacks[t.axis]._visualValues};return mg(s,a,o.index,{mode:r})}updateRangeFromParsed(t,n,r,i){const o=r[n.axis];let a=o===null?NaN:o;const s=i&&r._stacks[n.axis];i&&s&&(i.values=s,a=mg(i,o,this._cachedMeta.index)),t.min=Math.min(t.min,a),t.max=Math.max(t.max,a)}getMinMax(t,n){const r=this._cachedMeta,i=r._parsed,o=r._sorted&&t===r.iScale,a=i.length,s=this._getOtherScale(t),l=ak(n,r,this.chart),u={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:c,max:f}=nk(s);let d,h;function v(){h=i[d];const m=h[s.axis];return!Oe(h[t.axis])||c>m||f<m}for(d=0;d<a&&!(!v()&&(this.updateRangeFromParsed(u,t,h,l),o));++d);if(o){for(d=a-1;d>=0;--d)if(!v()){this.updateRangeFromParsed(u,t,h,l);break}}return u}getAllParsedValues(t){const n=this._cachedMeta._parsed,r=[];let i,o,a;for(i=0,o=n.length;i<o;++i)a=n[i][t.axis],Oe(a)&&r.push(a);return r}getMaxOverflow(){return!1}getLabelAndValue(t){const n=this._cachedMeta,r=n.iScale,i=n.vScale,o=this.getParsed(t);return{label:r?""+r.getLabelForValue(o[r.axis]):"",value:i?""+i.getLabelForValue(o[i.axis]):""}}_update(t){const n=this._cachedMeta;this.update(t||"default"),n._clip=JS(Y(this.options.clip,qS(n.xScale,n.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,n=this.chart,r=this._cachedMeta,i=r.data||[],o=n.chartArea,a=[],s=this._drawStart||0,l=this._drawCount||i.length-s,u=this.options.drawActiveElementsOnTop;let c;for(r.dataset&&r.dataset.draw(t,o,s,l),c=s;c<s+l;++c){const f=i[c];f.hidden||(f.active&&u?a.push(f):f.draw(t,o))}for(c=0;c<a.length;++c)a[c].draw(t,o)}getStyle(t,n){const r=n?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(r):this.resolveDataElementOptions(t||0,r)}getContext(t,n,r){const i=this.getDataset();let o;if(t>=0&&t<this._cachedMeta.data.length){const a=this._cachedMeta.data[t];o=a.$context||(a.$context=ok(this.getContext(),t,a)),o.parsed=this.getParsed(t),o.raw=i.data[t],o.index=o.dataIndex=t}else o=this.$context||(this.$context=ik(this.chart.getContext(),this.index)),o.dataset=i,o.index=o.datasetIndex=this.index;return o.active=!!n,o.mode=r,o}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,n){return this._resolveElementOptions(this.dataElementType.id,n,t)}_resolveElementOptions(t,n="default",r){const i=n==="active",o=this._cachedDataOpts,a=t+"-"+n,s=o[a],l=this.enableOptionSharing&&Vs(r);if(s)return _g(s,l);const u=this.chart.config,c=u.datasetElementScopeKeys(this._type,t),f=i?[`${t}Hover`,"hover",t,""]:[t,""],d=u.getOptionScopes(this.getDataset(),c),h=Object.keys(_e.elements[t]),v=()=>this.getContext(r,i,n),m=u.resolveNamedOptions(d,h,v,f);return m.$shared&&(m.$shared=l,o[a]=Object.freeze(_g(m,l))),m}_resolveAnimations(t,n,r){const i=this.chart,o=this._cachedDataOpts,a=`animation-${n}`,s=o[a];if(s)return s;let l;if(i.options.animation!==!1){const c=this.chart.config,f=c.datasetAnimationScopeKeys(this._type,n),d=c.getOptionScopes(this.getDataset(),f);l=c.createResolver(d,this.getContext(t,r,n))}const u=new tb(i,l&&l.animations);return l&&l._cacheable&&(o[a]=Object.freeze(u)),u}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,n){return!n||$u(t)||this.chart._animationsDisabled}_getSharedOptions(t,n){const r=this.resolveDataElementOptions(t,n),i=this._sharedOptions,o=this.getSharedOptions(r),a=this.includeOptions(n,o)||o!==i;return this.updateSharedOptions(o,n,r),{sharedOptions:o,includeOptions:a}}updateElement(t,n,r,i){$u(i)?Object.assign(t,r):this._resolveAnimations(n,i).update(t,r)}updateSharedOptions(t,n,r){t&&!$u(n)&&this._resolveAnimations(void 0,n).update(t,r)}_setStyle(t,n,r,i){t.active=i;const o=this.getStyle(n,i);this._resolveAnimations(n,r,i).update(t,{options:!i&&this.getSharedOptions(o)||o})}removeHoverStyle(t,n,r){this._setStyle(t,r,"active",!1)}setHoverStyle(t,n,r){this._setStyle(t,r,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const n=this._data,r=this._cachedMeta.data;for(const[s,l,u]of this._syncList)this[s](l,u);this._syncList=[];const i=r.length,o=n.length,a=Math.min(o,i);a&&this.parse(0,a),o>i?this._insertElements(i,o-i,t):o<i&&this._removeElements(o,i-o)}_insertElements(t,n,r=!0){const i=this._cachedMeta,o=i.data,a=t+n;let s;const l=u=>{for(u.length+=n,s=u.length-1;s>=a;s--)u[s]=u[s-n]};for(l(o),s=t;s<a;++s)o[s]=new this.dataElementType;this._parsing&&l(i._parsed),this.parse(t,n),r&&this.updateElements(o,t,n,"reset")}updateElements(t,n,r,i){}_removeElements(t,n){const r=this._cachedMeta;if(this._parsing){const i=r._parsed.splice(t,n);r._stacked&&zi(r,i)}r.data.splice(t,n)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[n,r,i]=t;this[n](r,i)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,n){n&&this._sync(["_removeElements",t,n]);const r=arguments.length-2;r&&this._sync(["_insertElements",t,r])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}U(wo,"defaults",{}),U(wo,"datasetElementType",null),U(wo,"dataElementType",null);class cs extends wo{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const n=this._cachedMeta,{dataset:r,data:i=[],_dataset:o}=n,a=this.chart._animationsDisabled;let{start:s,count:l}=V2(n,i,a);this._drawStart=s,this._drawCount=l,W2(n)&&(s=0,l=i.length),r._chart=this.chart,r._datasetIndex=this.index,r._decimated=!!o._decimated,r.points=i;const u=this.resolveDatasetElementOptions(t);this.options.showLine||(u.borderWidth=0),u.segment=this.options.segment,this.updateElement(r,void 0,{animated:!a,options:u},t),this.updateElements(i,s,l,t)}updateElements(t,n,r,i){const o=i==="reset",{iScale:a,vScale:s,_stacked:l,_dataset:u}=this._cachedMeta,{sharedOptions:c,includeOptions:f}=this._getSharedOptions(n,i),d=a.axis,h=s.axis,{spanGaps:v,segment:m}=this.options,y=Ho(v)?v:Number.POSITIVE_INFINITY,p=this.chart._animationsDisabled||o||i==="none",g=n+r,b=t.length;let $=n>0&&this.getParsed(n-1);for(let _=0;_<b;++_){const k=t[_],w=p?k:{};if(_<n||_>=g){w.skip=!0;continue}const E=this.getParsed(_),M=se(E[h]),C=w[d]=a.getPixelForValue(E[d],_),x=w[h]=o||M?s.getBasePixel():s.getPixelForValue(l?this.applyStack(s,E,l):E[h],_);w.skip=isNaN(C)||isNaN(x)||M,w.stop=_>0&&Math.abs(E[d]-$[d])>y,m&&(w.parsed=E,w.raw=u.data[_]),f&&(w.options=c||this.resolveDataElementOptions(_,k.active?"active":i)),p||this.updateElement(k,_,w,i),$=E}}getMaxOverflow(){const t=this._cachedMeta,n=t.dataset,r=n.options&&n.options.borderWidth||0,i=t.data||[];if(!i.length)return r;const o=i[0].size(this.resolveDataElementOptions(0)),a=i[i.length-1].size(this.resolveDataElementOptions(i.length-1));return Math.max(r,o,a)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}U(cs,"id","line"),U(cs,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),U(cs,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});function Zn(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Jd{constructor(t){U(this,"options");this.options=t||{}}static override(t){Object.assign(Jd.prototype,t)}init(){}formats(){return Zn()}parse(){return Zn()}format(){return Zn()}add(){return Zn()}diff(){return Zn()}startOf(){return Zn()}endOf(){return Zn()}}var sk={_date:Jd};function lk(e,t,n,r){const{controller:i,data:o,_sorted:a}=e,s=i._cachedMeta.iScale;if(s&&t===s.axis&&t!=="r"&&a&&o.length){const l=s._reversePixels?F2:sr;if(r){if(i._sharedOptions){const u=o[0],c=typeof u.getRange=="function"&&u.getRange(t);if(c){const f=l(o,t,n-c),d=l(o,t,n+c);return{lo:f.lo,hi:d.hi}}}}else return l(o,t,n)}return{lo:0,hi:o.length-1}}function ea(e,t,n,r,i){const o=e.getSortedVisibleDatasetMetas(),a=n[t];for(let s=0,l=o.length;s<l;++s){const{index:u,data:c}=o[s],{lo:f,hi:d}=lk(o[s],t,a,i);for(let h=f;h<=d;++h){const v=c[h];v.skip||r(v,u,h)}}}function uk(e){const t=e.indexOf("x")!==-1,n=e.indexOf("y")!==-1;return function(r,i){const o=t?Math.abs(r.x-i.x):0,a=n?Math.abs(r.y-i.y):0;return Math.sqrt(Math.pow(o,2)+Math.pow(a,2))}}function _u(e,t,n,r,i){const o=[];return!i&&!e.isPointInArea(t)||ea(e,n,t,function(s,l,u){!i&&!un(s,e.chartArea,0)||s.inRange(t.x,t.y,r)&&o.push({element:s,datasetIndex:l,index:u})},!0),o}function ck(e,t,n,r){let i=[];function o(a,s,l){const{startAngle:u,endAngle:c}=a.getProps(["startAngle","endAngle"],r),{angle:f}=L2(a,{x:t.x,y:t.y});j1(f,u,c)&&i.push({element:a,datasetIndex:s,index:l})}return ea(e,n,t,o),i}function fk(e,t,n,r,i,o){let a=[];const s=uk(n);let l=Number.POSITIVE_INFINITY;function u(c,f,d){const h=c.inRange(t.x,t.y,i);if(r&&!h)return;const v=c.getCenterPoint(i);if(!(!!o||e.isPointInArea(v))&&!h)return;const y=s(t,v);y<l?(a=[{element:c,datasetIndex:f,index:d}],l=y):y===l&&a.push({element:c,datasetIndex:f,index:d})}return ea(e,n,t,u),a}function wu(e,t,n,r,i,o){return!o&&!e.isPointInArea(t)?[]:n==="r"&&!r?ck(e,t,n,i):fk(e,t,n,r,i,o)}function wg(e,t,n,r,i){const o=[],a=n==="x"?"inXRange":"inYRange";let s=!1;return ea(e,n,t,(l,u,c)=>{l[a](t[n],i)&&(o.push({element:l,datasetIndex:u,index:c}),s=s||l.inRange(t.x,t.y,i))}),r&&!s?[]:o}var dk={evaluateInteractionItems:ea,modes:{index(e,t,n,r){const i=nr(t,e),o=n.axis||"x",a=n.includeInvisible||!1,s=n.intersect?_u(e,i,o,r,a):wu(e,i,o,!1,r,a),l=[];return s.length?(e.getSortedVisibleDatasetMetas().forEach(u=>{const c=s[0].index,f=u.data[c];f&&!f.skip&&l.push({element:f,datasetIndex:u.index,index:c})}),l):[]},dataset(e,t,n,r){const i=nr(t,e),o=n.axis||"xy",a=n.includeInvisible||!1;let s=n.intersect?_u(e,i,o,r,a):wu(e,i,o,!1,r,a);if(s.length>0){const l=s[0].datasetIndex,u=e.getDatasetMeta(l).data;s=[];for(let c=0;c<u.length;++c)s.push({element:u[c],datasetIndex:l,index:c})}return s},point(e,t,n,r){const i=nr(t,e),o=n.axis||"xy",a=n.includeInvisible||!1;return _u(e,i,o,r,a)},nearest(e,t,n,r){const i=nr(t,e),o=n.axis||"xy",a=n.includeInvisible||!1;return wu(e,i,o,n.intersect,r,a)},x(e,t,n,r){const i=nr(t,e);return wg(e,i,"x",n.intersect,r)},y(e,t,n,r){const i=nr(t,e);return wg(e,i,"y",n.intersect,r)}}};const rb=["left","top","right","bottom"];function Bi(e,t){return e.filter(n=>n.pos===t)}function xg(e,t){return e.filter(n=>rb.indexOf(n.pos)===-1&&n.box.axis===t)}function Ui(e,t){return e.sort((n,r)=>{const i=t?r:n,o=t?n:r;return i.weight===o.weight?i.index-o.index:i.weight-o.weight})}function hk(e){const t=[];let n,r,i,o,a,s;for(n=0,r=(e||[]).length;n<r;++n)i=e[n],{position:o,options:{stack:a,stackWeight:s=1}}=i,t.push({index:n,box:i,pos:o,horizontal:i.isHorizontal(),weight:i.weight,stack:a&&o+a,stackWeight:s});return t}function pk(e){const t={};for(const n of e){const{stack:r,pos:i,stackWeight:o}=n;if(!r||!rb.includes(i))continue;const a=t[r]||(t[r]={count:0,placed:0,weight:0,size:0});a.count++,a.weight+=o}return t}function gk(e,t){const n=pk(e),{vBoxMaxWidth:r,hBoxMaxHeight:i}=t;let o,a,s;for(o=0,a=e.length;o<a;++o){s=e[o];const{fullSize:l}=s.box,u=n[s.stack],c=u&&s.stackWeight/u.weight;s.horizontal?(s.width=c?c*r:l&&t.availableWidth,s.height=i):(s.width=r,s.height=c?c*i:l&&t.availableHeight)}return n}function vk(e){const t=hk(e),n=Ui(t.filter(u=>u.box.fullSize),!0),r=Ui(Bi(t,"left"),!0),i=Ui(Bi(t,"right")),o=Ui(Bi(t,"top"),!0),a=Ui(Bi(t,"bottom")),s=xg(t,"x"),l=xg(t,"y");return{fullSize:n,leftAndTop:r.concat(o),rightAndBottom:i.concat(l).concat(a).concat(s),chartArea:Bi(t,"chartArea"),vertical:r.concat(i).concat(l),horizontal:o.concat(a).concat(s)}}function Sg(e,t,n,r){return Math.max(e[n],t[n])+Math.max(e[r],t[r])}function ib(e,t){e.top=Math.max(e.top,t.top),e.left=Math.max(e.left,t.left),e.bottom=Math.max(e.bottom,t.bottom),e.right=Math.max(e.right,t.right)}function mk(e,t,n,r){const{pos:i,box:o}=n,a=e.maxPadding;if(!J(i)){n.size&&(e[i]-=n.size);const f=r[n.stack]||{size:0,count:1};f.size=Math.max(f.size,n.horizontal?o.height:o.width),n.size=f.size/f.count,e[i]+=n.size}o.getPadding&&ib(a,o.getPadding());const s=Math.max(0,t.outerWidth-Sg(a,e,"left","right")),l=Math.max(0,t.outerHeight-Sg(a,e,"top","bottom")),u=s!==e.w,c=l!==e.h;return e.w=s,e.h=l,n.horizontal?{same:u,other:c}:{same:c,other:u}}function yk(e){const t=e.maxPadding;function n(r){const i=Math.max(t[r]-e[r],0);return e[r]+=i,i}e.y+=n("top"),e.x+=n("left"),n("right"),n("bottom")}function bk(e,t){const n=t.maxPadding;function r(i){const o={left:0,top:0,right:0,bottom:0};return i.forEach(a=>{o[a]=Math.max(t[a],n[a])}),o}return r(e?["left","right"]:["top","bottom"])}function oo(e,t,n,r){const i=[];let o,a,s,l,u,c;for(o=0,a=e.length,u=0;o<a;++o){s=e[o],l=s.box,l.update(s.width||t.w,s.height||t.h,bk(s.horizontal,t));const{same:f,other:d}=mk(t,n,s,r);u|=f&&i.length,c=c||d,l.fullSize||i.push(s)}return u&&oo(i,t,n,r)||c}function Ia(e,t,n,r,i){e.top=n,e.left=t,e.right=t+r,e.bottom=n+i,e.width=r,e.height=i}function kg(e,t,n,r){const i=n.padding;let{x:o,y:a}=t;for(const s of e){const l=s.box,u=r[s.stack]||{count:1,placed:0,weight:1},c=s.stackWeight/u.weight||1;if(s.horizontal){const f=t.w*c,d=u.size||l.height;Vs(u.start)&&(a=u.start),l.fullSize?Ia(l,i.left,a,n.outerWidth-i.right-i.left,d):Ia(l,t.left+u.placed,a,f,d),u.start=a,u.placed+=f,a=l.bottom}else{const f=t.h*c,d=u.size||l.width;Vs(u.start)&&(o=u.start),l.fullSize?Ia(l,o,i.top,d,n.outerHeight-i.bottom-i.top):Ia(l,o,t.top+u.placed,d,f),u.start=o,u.placed+=f,o=l.right}}t.x=o,t.y=a}var Tt={addBox(e,t){e.boxes||(e.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(n){t.draw(n)}}]},e.boxes.push(t)},removeBox(e,t){const n=e.boxes?e.boxes.indexOf(t):-1;n!==-1&&e.boxes.splice(n,1)},configure(e,t,n){t.fullSize=n.fullSize,t.position=n.position,t.weight=n.weight},update(e,t,n,r){if(!e)return;const i=Ve(e.options.layout.padding),o=Math.max(t-i.width,0),a=Math.max(n-i.height,0),s=vk(e.boxes),l=s.vertical,u=s.horizontal;ee(e.boxes,m=>{typeof m.beforeLayout=="function"&&m.beforeLayout()});const c=l.reduce((m,y)=>y.box.options&&y.box.options.display===!1?m:m+1,0)||1,f=Object.freeze({outerWidth:t,outerHeight:n,padding:i,availableWidth:o,availableHeight:a,vBoxMaxWidth:o/2/c,hBoxMaxHeight:a/2}),d=Object.assign({},i);ib(d,Ve(r));const h=Object.assign({maxPadding:d,w:o,h:a,x:i.left,y:i.top},i),v=gk(l.concat(u),f);oo(s.fullSize,h,f,v),oo(l,h,f,v),oo(u,h,f,v)&&oo(l,h,f,v),yk(h),kg(s.leftAndTop,h,f,v),h.x+=h.w,h.y+=h.h,kg(s.rightAndBottom,h,f,v),e.chartArea={left:h.left,top:h.top,right:h.left+h.w,bottom:h.top+h.h,height:h.h,width:h.w},ee(s.chartArea,m=>{const y=m.box;Object.assign(y,e.chartArea),y.update(h.w,h.h,{left:0,top:0,right:0,bottom:0})})}};class ob{acquireContext(t,n){}releaseContext(t){return!1}addEventListener(t,n,r){}removeEventListener(t,n,r){}getDevicePixelRatio(){return 1}getMaximumSize(t,n,r,i){return n=Math.max(0,n||t.width),r=r||t.height,{width:n,height:Math.max(0,i?Math.floor(n/i):r)}}isAttached(t){return!0}updateConfig(t){}}class $k extends ob{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const fs="$chartjs",_k={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},Eg=e=>e===null||e==="";function wk(e,t){const n=e.style,r=e.getAttribute("height"),i=e.getAttribute("width");if(e[fs]={initial:{height:r,width:i,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",n.boxSizing=n.boxSizing||"border-box",Eg(i)){const o=fg(e,"width");o!==void 0&&(e.width=o)}if(Eg(r))if(e.style.height==="")e.height=e.width/(t||2);else{const o=fg(e,"height");o!==void 0&&(e.height=o)}return e}const ab=LS?{passive:!0}:!1;function xk(e,t,n){e.addEventListener(t,n,ab)}function Sk(e,t,n){e.canvas.removeEventListener(t,n,ab)}function kk(e,t){const n=_k[e.type]||e.type,{x:r,y:i}=nr(e,t);return{type:n,chart:t,native:e,x:r!==void 0?r:null,y:i!==void 0?i:null}}function Xs(e,t){for(const n of e)if(n===t||n.contains(t))return!0}function Ek(e,t,n){const r=e.canvas,i=new MutationObserver(o=>{let a=!1;for(const s of o)a=a||Xs(s.addedNodes,r),a=a&&!Xs(s.removedNodes,r);a&&n()});return i.observe(document,{childList:!0,subtree:!0}),i}function Ak(e,t,n){const r=e.canvas,i=new MutationObserver(o=>{let a=!1;for(const s of o)a=a||Xs(s.removedNodes,r),a=a&&!Xs(s.addedNodes,r);a&&n()});return i.observe(document,{childList:!0,subtree:!0}),i}const Go=new Map;let Ag=0;function sb(){const e=window.devicePixelRatio;e!==Ag&&(Ag=e,Go.forEach((t,n)=>{n.currentDevicePixelRatio!==e&&t()}))}function Tk(e,t){Go.size||window.addEventListener("resize",sb),Go.set(e,t)}function Ck(e){Go.delete(e),Go.size||window.removeEventListener("resize",sb)}function Pk(e,t,n){const r=e.canvas,i=r&&qd(r);if(!i)return;const o=U1((s,l)=>{const u=i.clientWidth;n(s,l),u<i.clientWidth&&n()},window),a=new ResizeObserver(s=>{const l=s[0],u=l.contentRect.width,c=l.contentRect.height;u===0&&c===0||o(u,c)});return a.observe(i),Tk(e,o),a}function xu(e,t,n){n&&n.disconnect(),t==="resize"&&Ck(e)}function Mk(e,t,n){const r=e.canvas,i=U1(o=>{e.ctx!==null&&n(kk(o,e))},e);return xk(r,t,i),i}class Ok extends ob{acquireContext(t,n){const r=t&&t.getContext&&t.getContext("2d");return r&&r.canvas===t?(wk(t,n),r):null}releaseContext(t){const n=t.canvas;if(!n[fs])return!1;const r=n[fs].initial;["height","width"].forEach(o=>{const a=r[o];se(a)?n.removeAttribute(o):n.setAttribute(o,a)});const i=r.style||{};return Object.keys(i).forEach(o=>{n.style[o]=i[o]}),n.width=n.width,delete n[fs],!0}addEventListener(t,n,r){this.removeEventListener(t,n);const i=t.$proxies||(t.$proxies={}),a={attach:Ek,detach:Ak,resize:Pk}[n]||Mk;i[n]=a(t,n,r)}removeEventListener(t,n){const r=t.$proxies||(t.$proxies={}),i=r[n];if(!i)return;({attach:xu,detach:xu,resize:xu}[n]||Sk)(t,n,i),r[n]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,n,r,i){return IS(t,n,r,i)}isAttached(t){const n=qd(t);return!!(n&&n.isConnected)}}function Ik(e){return!Z1()||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas?$k:Ok}class gn{constructor(){U(this,"x");U(this,"y");U(this,"active",!1);U(this,"options");U(this,"$animations")}tooltipPosition(t){const{x:n,y:r}=this.getProps(["x","y"],t);return{x:n,y:r}}hasValue(){return Ho(this.x)&&Ho(this.y)}getProps(t,n){const r=this.$animations;if(!n||!r)return this;const i={};return t.forEach(o=>{i[o]=r[o]&&r[o].active()?r[o]._to:this[o]}),i}}U(gn,"defaults",{}),U(gn,"defaultRoutes");function Lk(e,t){const n=e.options.ticks,r=Nk(e),i=Math.min(n.maxTicksLimit||r,r),o=n.major.enabled?Fk(t):[],a=o.length,s=o[0],l=o[a-1],u=[];if(a>i)return Dk(t,u,o,a/i),u;const c=Rk(o,t,i);if(a>0){let f,d;const h=a>1?Math.round((l-s)/(a-1)):null;for(La(t,u,c,se(h)?0:s-h,s),f=0,d=a-1;f<d;f++)La(t,u,c,o[f],o[f+1]);return La(t,u,c,l,se(h)?t.length:l+h),u}return La(t,u,c),u}function Nk(e){const t=e.options.offset,n=e._tickSize(),r=e._length/n+(t?0:1),i=e._maxLength/n;return Math.floor(Math.min(r,i))}function Rk(e,t,n){const r=jk(e),i=t.length/n;if(!r)return Math.max(i,1);const o=O2(r);for(let a=0,s=o.length-1;a<s;a++){const l=o[a];if(l>i)return l}return Math.max(i,1)}function Fk(e){const t=[];let n,r;for(n=0,r=e.length;n<r;n++)e[n].major&&t.push(n);return t}function Dk(e,t,n,r){let i=0,o=n[0],a;for(r=Math.ceil(r),a=0;a<e.length;a++)a===o&&(t.push(e[a]),i++,o=n[i*r])}function La(e,t,n,r,i){const o=Y(r,0),a=Math.min(Y(i,e.length),e.length);let s=0,l,u,c;for(n=Math.ceil(n),i&&(l=i-r,n=l/Math.floor(l/n)),c=o;c<0;)s++,c=Math.round(o+s*n);for(u=Math.max(o,0);u<a;u++)u===c&&(t.push(e[u]),s++,c=Math.round(o+s*n))}function jk(e){const t=e.length;let n,r;if(t<2)return!1;for(r=e[0],n=1;n<t;++n)if(e[n]-e[n-1]!==r)return!1;return r}const zk=e=>e==="left"?"right":e==="right"?"left":e,Tg=(e,t,n)=>t==="top"||t==="left"?e[t]+n:e[t]-n,Cg=(e,t)=>Math.min(t||e,e);function Pg(e,t){const n=[],r=e.length/t,i=e.length;let o=0;for(;o<i;o+=r)n.push(e[Math.floor(o)]);return n}function Bk(e,t,n){const r=e.ticks.length,i=Math.min(t,r-1),o=e._startPixel,a=e._endPixel,s=1e-6;let l=e.getPixelForTick(i),u;if(!(n&&(r===1?u=Math.max(l-o,a-l):t===0?u=(e.getPixelForTick(1)-l)/2:u=(l-e.getPixelForTick(i-1))/2,l+=i<t?u:-u,l<o-s||l>a+s)))return l}function Uk(e,t){ee(e,n=>{const r=n.gc,i=r.length/2;let o;if(i>t){for(o=0;o<i;++o)delete n.data[r[o]];r.splice(0,i)}})}function Vi(e){return e.drawTicks?e.tickLength:0}function Mg(e,t){if(!e.display)return 0;const n=Ce(e.font,t),r=Ve(e.padding);return(ge(e.text)?e.text.length:1)*n.lineHeight+r.height}function Vk(e,t){return Xn(e,{scale:t,type:"scale"})}function Wk(e,t,n){return Xn(e,{tick:n,index:t,type:"tick"})}function Hk(e,t,n){let r=Wd(e);return(n&&t!=="right"||!n&&t==="right")&&(r=zk(r)),r}function Gk(e,t,n,r){const{top:i,left:o,bottom:a,right:s,chart:l}=e,{chartArea:u,scales:c}=l;let f=0,d,h,v;const m=a-i,y=s-o;if(e.isHorizontal()){if(h=ze(r,o,s),J(n)){const p=Object.keys(n)[0],g=n[p];v=c[p].getPixelForValue(g)+m-t}else n==="center"?v=(u.bottom+u.top)/2+m-t:v=Tg(e,n,t);d=s-o}else{if(J(n)){const p=Object.keys(n)[0],g=n[p];h=c[p].getPixelForValue(g)-y+t}else n==="center"?h=(u.left+u.right)/2-y+t:h=Tg(e,n,t);v=ze(r,a,i),f=n==="left"?-gt:gt}return{titleX:h,titleY:v,maxWidth:d,rotation:f}}class xr extends gn{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,n){return t}getUserBounds(){let{_userMin:t,_userMax:n,_suggestedMin:r,_suggestedMax:i}=this;return t=ct(t,Number.POSITIVE_INFINITY),n=ct(n,Number.NEGATIVE_INFINITY),r=ct(r,Number.POSITIVE_INFINITY),i=ct(i,Number.NEGATIVE_INFINITY),{min:ct(t,r),max:ct(n,i),minDefined:Oe(t),maxDefined:Oe(n)}}getMinMax(t){let{min:n,max:r,minDefined:i,maxDefined:o}=this.getUserBounds(),a;if(i&&o)return{min:n,max:r};const s=this.getMatchingVisibleMetas();for(let l=0,u=s.length;l<u;++l)a=s[l].controller.getMinMax(this,t),i||(n=Math.min(n,a.min)),o||(r=Math.max(r,a.max));return n=o&&n>r?r:n,r=i&&n>r?n:r,{min:ct(n,ct(r,n)),max:ct(r,ct(n,r))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){ne(this.options.beforeUpdate,[this])}update(t,n,r){const{beginAtZero:i,grace:o,ticks:a}=this.options,s=a.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=n,this._margins=r=Object.assign({left:0,right:0,top:0,bottom:0},r),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+r.left+r.right:this.height+r.top+r.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=fS(this,o,i),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=s<this.ticks.length;this._convertTicksToLabels(l?Pg(this.ticks,s):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),a.display&&(a.autoSkip||a.source==="auto")&&(this.ticks=Lk(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,n,r;this.isHorizontal()?(n=this.left,r=this.right):(n=this.top,r=this.bottom,t=!t),this._startPixel=n,this._endPixel=r,this._reversePixels=t,this._length=r-n,this._alignToPixels=this.options.alignToPixels}afterUpdate(){ne(this.options.afterUpdate,[this])}beforeSetDimensions(){ne(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){ne(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),ne(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){ne(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const n=this.options.ticks;let r,i,o;for(r=0,i=t.length;r<i;r++)o=t[r],o.label=ne(n.callback,[o.value,r,t],this)}afterTickToLabelConversion(){ne(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){ne(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,n=t.ticks,r=Cg(this.ticks.length,t.ticks.maxTicksLimit),i=n.minRotation||0,o=n.maxRotation;let a=i,s,l,u;if(!this._isVisible()||!n.display||i>=o||r<=1||!this.isHorizontal()){this.labelRotation=i;return}const c=this._getLabelSizes(),f=c.widest.width,d=c.highest.height,h=At(this.chart.width-f,0,this.maxWidth);s=t.offset?this.maxWidth/r:h/(r-1),f+6>s&&(s=h/(r-(t.offset?.5:1)),l=this.maxHeight-Vi(t.grid)-n.padding-Mg(t.title,this.chart.options.font),u=Math.sqrt(f*f+d*d),a=Ud(Math.min(Math.asin(At((c.highest.height+6)/s,-1,1)),Math.asin(At(l/u,-1,1))-Math.asin(At(d/u,-1,1)))),a=Math.max(i,Math.min(o,a))),this.labelRotation=a}afterCalculateLabelRotation(){ne(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){ne(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:n,options:{ticks:r,title:i,grid:o}}=this,a=this._isVisible(),s=this.isHorizontal();if(a){const l=Mg(i,n.options.font);if(s?(t.width=this.maxWidth,t.height=Vi(o)+l):(t.height=this.maxHeight,t.width=Vi(o)+l),r.display&&this.ticks.length){const{first:u,last:c,widest:f,highest:d}=this._getLabelSizes(),h=r.padding*2,v=On(this.labelRotation),m=Math.cos(v),y=Math.sin(v);if(s){const p=r.mirror?0:y*f.width+m*d.height;t.height=Math.min(this.maxHeight,t.height+p+h)}else{const p=r.mirror?0:m*f.width+y*d.height;t.width=Math.min(this.maxWidth,t.width+p+h)}this._calculatePadding(u,c,y,m)}}this._handleMargins(),s?(this.width=this._length=n.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=n.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,n,r,i){const{ticks:{align:o,padding:a},position:s}=this.options,l=this.labelRotation!==0,u=s!=="top"&&this.axis==="x";if(this.isHorizontal()){const c=this.getPixelForTick(0)-this.left,f=this.right-this.getPixelForTick(this.ticks.length-1);let d=0,h=0;l?u?(d=i*t.width,h=r*n.height):(d=r*t.height,h=i*n.width):o==="start"?h=n.width:o==="end"?d=t.width:o!=="inner"&&(d=t.width/2,h=n.width/2),this.paddingLeft=Math.max((d-c+a)*this.width/(this.width-c),0),this.paddingRight=Math.max((h-f+a)*this.width/(this.width-f),0)}else{let c=n.height/2,f=t.height/2;o==="start"?(c=0,f=t.height):o==="end"&&(c=n.height,f=0),this.paddingTop=c+a,this.paddingBottom=f+a}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){ne(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:n}=this.options;return n==="top"||n==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let n,r;for(n=0,r=t.length;n<r;n++)se(t[n].label)&&(t.splice(n,1),r--,n--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const n=this.options.ticks.sampleSize;let r=this.ticks;n<r.length&&(r=Pg(r,n)),this._labelSizes=t=this._computeLabelSizes(r,r.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,n,r){const{ctx:i,_longestTextCache:o}=this,a=[],s=[],l=Math.floor(n/Cg(n,r));let u=0,c=0,f,d,h,v,m,y,p,g,b,$,_;for(f=0;f<n;f+=l){if(v=t[f].label,m=this._resolveTickFontOptions(f),i.font=y=m.string,p=o[y]=o[y]||{data:{},gc:[]},g=m.lineHeight,b=$=0,!se(v)&&!ge(v))b=Hs(i,p.data,p.gc,b,v),$=g;else if(ge(v))for(d=0,h=v.length;d<h;++d)_=v[d],!se(_)&&!ge(_)&&(b=Hs(i,p.data,p.gc,b,_),$+=g);a.push(b),s.push($),u=Math.max(b,u),c=Math.max($,c)}Uk(o,n);const k=a.indexOf(u),w=s.indexOf(c),E=M=>({width:a[M]||0,height:s[M]||0});return{first:E(0),last:E(n-1),widest:E(k),highest:E(w),widths:a,heights:s}}getLabelForValue(t){return t}getPixelForValue(t,n){return NaN}getValueForPixel(t){}getPixelForTick(t){const n=this.ticks;return t<0||t>n.length-1?null:this.getPixelForValue(n[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const n=this._startPixel+t*this._length;return R2(this._alignToPixels?Qn(this.chart,n,0):n)}getDecimalForPixel(t){const n=(t-this._startPixel)/this._length;return this._reversePixels?1-n:n}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:n}=this;return t<0&&n<0?n:t>0&&n>0?t:0}getContext(t){const n=this.ticks||[];if(t>=0&&t<n.length){const r=n[t];return r.$context||(r.$context=Wk(this.getContext(),t,r))}return this.$context||(this.$context=Vk(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,n=On(this.labelRotation),r=Math.abs(Math.cos(n)),i=Math.abs(Math.sin(n)),o=this._getLabelSizes(),a=t.autoSkipPadding||0,s=o?o.widest.width+a:0,l=o?o.highest.height+a:0;return this.isHorizontal()?l*r>s*i?s/r:l/i:l*i<s*r?l/r:s/i}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const n=this.axis,r=this.chart,i=this.options,{grid:o,position:a,border:s}=i,l=o.offset,u=this.isHorizontal(),f=this.ticks.length+(l?1:0),d=Vi(o),h=[],v=s.setContext(this.getContext()),m=v.display?v.width:0,y=m/2,p=function(N){return Qn(r,N,m)};let g,b,$,_,k,w,E,M,C,x,S,P;if(a==="top")g=p(this.bottom),w=this.bottom-d,M=g-y,x=p(t.top)+y,P=t.bottom;else if(a==="bottom")g=p(this.top),x=t.top,P=p(t.bottom)-y,w=g+y,M=this.top+d;else if(a==="left")g=p(this.right),k=this.right-d,E=g-y,C=p(t.left)+y,S=t.right;else if(a==="right")g=p(this.left),C=t.left,S=p(t.right)-y,k=g+y,E=this.left+d;else if(n==="x"){if(a==="center")g=p((t.top+t.bottom)/2+.5);else if(J(a)){const N=Object.keys(a)[0],j=a[N];g=p(this.chart.scales[N].getPixelForValue(j))}x=t.top,P=t.bottom,w=g+y,M=w+d}else if(n==="y"){if(a==="center")g=p((t.left+t.right)/2);else if(J(a)){const N=Object.keys(a)[0],j=a[N];g=p(this.chart.scales[N].getPixelForValue(j))}k=g-y,E=k-d,C=t.left,S=t.right}const D=Y(i.ticks.maxTicksLimit,f),L=Math.max(1,Math.ceil(f/D));for(b=0;b<f;b+=L){const N=this.getContext(b),j=o.setContext(N),A=s.setContext(N),I=j.lineWidth,O=j.color,B=A.dash||[],z=A.dashOffset,V=j.tickWidth,X=j.tickColor,he=j.tickBorderDash||[],ue=j.tickBorderDashOffset;$=Bk(this,b,l),$!==void 0&&(_=Qn(r,$,I),u?k=E=C=S=_:w=M=x=P=_,h.push({tx1:k,ty1:w,tx2:E,ty2:M,x1:C,y1:x,x2:S,y2:P,width:I,color:O,borderDash:B,borderDashOffset:z,tickWidth:V,tickColor:X,tickBorderDash:he,tickBorderDashOffset:ue}))}return this._ticksLength=f,this._borderValue=g,h}_computeLabelItems(t){const n=this.axis,r=this.options,{position:i,ticks:o}=r,a=this.isHorizontal(),s=this.ticks,{align:l,crossAlign:u,padding:c,mirror:f}=o,d=Vi(r.grid),h=d+c,v=f?-c:h,m=-On(this.labelRotation),y=[];let p,g,b,$,_,k,w,E,M,C,x,S,P="middle";if(i==="top")k=this.bottom-v,w=this._getXAxisLabelAlignment();else if(i==="bottom")k=this.top+v,w=this._getXAxisLabelAlignment();else if(i==="left"){const L=this._getYAxisLabelAlignment(d);w=L.textAlign,_=L.x}else if(i==="right"){const L=this._getYAxisLabelAlignment(d);w=L.textAlign,_=L.x}else if(n==="x"){if(i==="center")k=(t.top+t.bottom)/2+h;else if(J(i)){const L=Object.keys(i)[0],N=i[L];k=this.chart.scales[L].getPixelForValue(N)+h}w=this._getXAxisLabelAlignment()}else if(n==="y"){if(i==="center")_=(t.left+t.right)/2-h;else if(J(i)){const L=Object.keys(i)[0],N=i[L];_=this.chart.scales[L].getPixelForValue(N)}w=this._getYAxisLabelAlignment(d).textAlign}n==="y"&&(l==="start"?P="top":l==="end"&&(P="bottom"));const D=this._getLabelSizes();for(p=0,g=s.length;p<g;++p){b=s[p],$=b.label;const L=o.setContext(this.getContext(p));E=this.getPixelForTick(p)+o.labelOffset,M=this._resolveTickFontOptions(p),C=M.lineHeight,x=ge($)?$.length:1;const N=x/2,j=L.color,A=L.textStrokeColor,I=L.textStrokeWidth;let O=w;a?(_=E,w==="inner"&&(p===g-1?O=this.options.reverse?"left":"right":p===0?O=this.options.reverse?"right":"left":O="center"),i==="top"?u==="near"||m!==0?S=-x*C+C/2:u==="center"?S=-D.highest.height/2-N*C+C:S=-D.highest.height+C/2:u==="near"||m!==0?S=C/2:u==="center"?S=D.highest.height/2-N*C:S=D.highest.height-x*C,f&&(S*=-1),m!==0&&!L.showLabelBackdrop&&(_+=C/2*Math.sin(m))):(k=E,S=(1-x)*C/2);let B;if(L.showLabelBackdrop){const z=Ve(L.backdropPadding),V=D.heights[p],X=D.widths[p];let he=S-z.top,ue=0-z.left;switch(P){case"middle":he-=V/2;break;case"bottom":he-=V;break}switch(w){case"center":ue-=X/2;break;case"right":ue-=X;break}B={left:ue,top:he,width:X+z.width,height:V+z.height,color:L.backdropColor}}y.push({label:$,font:M,textOffset:S,options:{rotation:m,color:j,strokeColor:A,strokeWidth:I,textAlign:O,textBaseline:P,translation:[_,k],backdrop:B}})}return y}_getXAxisLabelAlignment(){const{position:t,ticks:n}=this.options;if(-On(this.labelRotation))return t==="top"?"left":"right";let i="center";return n.align==="start"?i="left":n.align==="end"?i="right":n.align==="inner"&&(i="inner"),i}_getYAxisLabelAlignment(t){const{position:n,ticks:{crossAlign:r,mirror:i,padding:o}}=this.options,a=this._getLabelSizes(),s=t+o,l=a.widest.width;let u,c;return n==="left"?i?(c=this.right+o,r==="near"?u="left":r==="center"?(u="center",c+=l/2):(u="right",c+=l)):(c=this.right-s,r==="near"?u="right":r==="center"?(u="center",c-=l/2):(u="left",c=this.left)):n==="right"?i?(c=this.left+o,r==="near"?u="right":r==="center"?(u="center",c-=l/2):(u="left",c-=l)):(c=this.left+s,r==="near"?u="left":r==="center"?(u="center",c+=l/2):(u="right",c=this.right)):u="right",{textAlign:u,x:c}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,n=this.options.position;if(n==="left"||n==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(n==="top"||n==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:n},left:r,top:i,width:o,height:a}=this;n&&(t.save(),t.fillStyle=n,t.fillRect(r,i,o,a),t.restore())}getLineWidthForValue(t){const n=this.options.grid;if(!this._isVisible()||!n.display)return 0;const i=this.ticks.findIndex(o=>o.value===t);return i>=0?n.setContext(this.getContext(i)).lineWidth:0}drawGrid(t){const n=this.options.grid,r=this.ctx,i=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let o,a;const s=(l,u,c)=>{!c.width||!c.color||(r.save(),r.lineWidth=c.width,r.strokeStyle=c.color,r.setLineDash(c.borderDash||[]),r.lineDashOffset=c.borderDashOffset,r.beginPath(),r.moveTo(l.x,l.y),r.lineTo(u.x,u.y),r.stroke(),r.restore())};if(n.display)for(o=0,a=i.length;o<a;++o){const l=i[o];n.drawOnChartArea&&s({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),n.drawTicks&&s({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:n,options:{border:r,grid:i}}=this,o=r.setContext(this.getContext()),a=r.display?o.width:0;if(!a)return;const s=i.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let u,c,f,d;this.isHorizontal()?(u=Qn(t,this.left,a)-a/2,c=Qn(t,this.right,s)+s/2,f=d=l):(f=Qn(t,this.top,a)-a/2,d=Qn(t,this.bottom,s)+s/2,u=c=l),n.save(),n.lineWidth=o.width,n.strokeStyle=o.color,n.beginPath(),n.moveTo(u,f),n.lineTo(c,d),n.stroke(),n.restore()}drawLabels(t){if(!this.options.ticks.display)return;const r=this.ctx,i=this._computeLabelArea();i&&Yd(r,i);const o=this.getLabelItems(t);for(const a of o){const s=a.options,l=a.font,u=a.label,c=a.textOffset;$r(r,u,0,c,l,s)}i&&Xd(r)}drawTitle(){const{ctx:t,options:{position:n,title:r,reverse:i}}=this;if(!r.display)return;const o=Ce(r.font),a=Ve(r.padding),s=r.align;let l=o.lineHeight/2;n==="bottom"||n==="center"||J(n)?(l+=a.bottom,ge(r.text)&&(l+=o.lineHeight*(r.text.length-1))):l+=a.top;const{titleX:u,titleY:c,maxWidth:f,rotation:d}=Gk(this,l,n,s);$r(t,r.text,0,0,o,{color:r.color,maxWidth:f,rotation:d,textAlign:Hk(s,n,i),textBaseline:"middle",translation:[u,c]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,n=t.ticks&&t.ticks.z||0,r=Y(t.grid&&t.grid.z,-1),i=Y(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==xr.prototype.draw?[{z:n,draw:o=>{this.draw(o)}}]:[{z:r,draw:o=>{this.drawBackground(),this.drawGrid(o),this.drawTitle()}},{z:i,draw:()=>{this.drawBorder()}},{z:n,draw:o=>{this.drawLabels(o)}}]}getMatchingVisibleMetas(t){const n=this.chart.getSortedVisibleDatasetMetas(),r=this.axis+"AxisID",i=[];let o,a;for(o=0,a=n.length;o<a;++o){const s=n[o];s[r]===this.id&&(!t||s.type===t)&&i.push(s)}return i}_resolveTickFontOptions(t){const n=this.options.ticks.setContext(this.getContext(t));return Ce(n.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class Na{constructor(t,n,r){this.type=t,this.scope=n,this.override=r,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const n=Object.getPrototypeOf(t);let r;Kk(n)&&(r=this.register(n));const i=this.items,o=t.id,a=this.scope+"."+o;if(!o)throw new Error("class does not have id: "+t);return o in i||(i[o]=t,Yk(t,a,r),this.override&&_e.override(t.id,t.overrides)),a}get(t){return this.items[t]}unregister(t){const n=this.items,r=t.id,i=this.scope;r in n&&delete n[r],i&&r in _e[i]&&(delete _e[i][r],this.override&&delete br[r])}}function Yk(e,t,n){const r=Wo(Object.create(null),[n?_e.get(n):{},_e.get(t),e.defaults]);_e.set(t,r),e.defaultRoutes&&Xk(t,e.defaultRoutes),e.descriptors&&_e.describe(t,e.descriptors)}function Xk(e,t){Object.keys(t).forEach(n=>{const r=n.split("."),i=r.pop(),o=[e].concat(r).join("."),a=t[n].split("."),s=a.pop(),l=a.join(".");_e.route(o,i,l,s)})}function Kk(e){return"id"in e&&"defaults"in e}class Qk{constructor(){this.controllers=new Na(wo,"datasets",!0),this.elements=new Na(gn,"elements"),this.plugins=new Na(Object,"plugins"),this.scales=new Na(xr,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,n,r){[...n].forEach(i=>{const o=r||this._getRegistryForType(i);r||o.isForType(i)||o===this.plugins&&i.id?this._exec(t,o,i):ee(i,a=>{const s=r||this._getRegistryForType(a);this._exec(t,s,a)})})}_exec(t,n,r){const i=Bd(t);ne(r["before"+i],[],r),n[t](r),ne(r["after"+i],[],r)}_getRegistryForType(t){for(let n=0;n<this._typedRegistries.length;n++){const r=this._typedRegistries[n];if(r.isForType(t))return r}return this.plugins}_get(t,n,r){const i=n.get(t);if(i===void 0)throw new Error('"'+t+'" is not a registered '+r+".");return i}}var Gt=new Qk;class Zk{constructor(){this._init=[]}notify(t,n,r,i){n==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install"));const o=i?this._descriptors(t).filter(i):this._descriptors(t),a=this._notify(o,t,n,r);return n==="afterDestroy"&&(this._notify(o,t,"stop"),this._notify(this._init,t,"uninstall")),a}_notify(t,n,r,i){i=i||{};for(const o of t){const a=o.plugin,s=a[r],l=[n,i,o.options];if(ne(s,l,a)===!1&&i.cancelable)return!1}return!0}invalidate(){se(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const n=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),n}_createDescriptors(t,n){const r=t&&t.config,i=Y(r.options&&r.options.plugins,{}),o=qk(r);return i===!1&&!n?[]:eE(t,o,i,n)}_notifyStateChanges(t){const n=this._oldCache||[],r=this._cache,i=(o,a)=>o.filter(s=>!a.some(l=>s.plugin.id===l.plugin.id));this._notify(i(n,r),t,"stop"),this._notify(i(r,n),t,"start")}}function qk(e){const t={},n=[],r=Object.keys(Gt.plugins.items);for(let o=0;o<r.length;o++)n.push(Gt.getPlugin(r[o]));const i=e.plugins||[];for(let o=0;o<i.length;o++){const a=i[o];n.indexOf(a)===-1&&(n.push(a),t[a.id]=!0)}return{plugins:n,localIds:t}}function Jk(e,t){return!t&&e===!1?null:e===!0?{}:e}function eE(e,{plugins:t,localIds:n},r,i){const o=[],a=e.getContext();for(const s of t){const l=s.id,u=Jk(r[l],i);u!==null&&o.push({plugin:s,options:tE(e.config,{plugin:s,local:n[l]},u,a)})}return o}function tE(e,{plugin:t,local:n},r,i){const o=e.pluginScopeKeys(t),a=e.getOptionScopes(r,o);return n&&t.defaults&&a.push(t.defaults),e.createResolver(a,i,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Hc(e,t){const n=_e.datasets[e]||{};return((t.datasets||{})[e]||{}).indexAxis||t.indexAxis||n.indexAxis||"x"}function nE(e,t){let n=e;return e==="_index_"?n=t:e==="_value_"&&(n=t==="x"?"y":"x"),n}function rE(e,t){return e===t?"_index_":"_value_"}function Og(e){if(e==="x"||e==="y"||e==="r")return e}function iE(e){if(e==="top"||e==="bottom")return"x";if(e==="left"||e==="right")return"y"}function Gc(e,...t){if(Og(e))return e;for(const n of t){const r=n.axis||iE(n.position)||e.length>1&&Og(e[0].toLowerCase());if(r)return r}throw new Error(`Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`)}function Ig(e,t,n){if(n[t+"AxisID"]===e)return{axis:t}}function oE(e,t){if(t.data&&t.data.datasets){const n=t.data.datasets.filter(r=>r.xAxisID===e||r.yAxisID===e);if(n.length)return Ig(e,"x",n[0])||Ig(e,"y",n[0])}return{}}function aE(e,t){const n=br[e.type]||{scales:{}},r=t.scales||{},i=Hc(e.type,t),o=Object.create(null);return Object.keys(r).forEach(a=>{const s=r[a];if(!J(s))return console.error(`Invalid scale configuration for scale: ${a}`);if(s._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${a}`);const l=Gc(a,s,oE(a,e),_e.scales[s.type]),u=rE(l,i),c=n.scales||{};o[a]=yo(Object.create(null),[{axis:l},s,c[l],c[u]])}),e.data.datasets.forEach(a=>{const s=a.type||e.type,l=a.indexAxis||Hc(s,t),c=(br[s]||{}).scales||{};Object.keys(c).forEach(f=>{const d=nE(f,l),h=a[d+"AxisID"]||d;o[h]=o[h]||Object.create(null),yo(o[h],[{axis:d},r[h],c[f]])})}),Object.keys(o).forEach(a=>{const s=o[a];yo(s,[_e.scales[s.type],_e.scale])}),o}function lb(e){const t=e.options||(e.options={});t.plugins=Y(t.plugins,{}),t.scales=aE(e,t)}function ub(e){return e=e||{},e.datasets=e.datasets||[],e.labels=e.labels||[],e}function sE(e){return e=e||{},e.data=ub(e.data),lb(e),e}const Lg=new Map,cb=new Set;function Ra(e,t){let n=Lg.get(e);return n||(n=t(),Lg.set(e,n),cb.add(n)),n}const Wi=(e,t,n)=>{const r=Us(t,n);r!==void 0&&e.add(r)};class lE{constructor(t){this._config=sE(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=ub(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),lb(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return Ra(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,n){return Ra(`${t}.transition.${n}`,()=>[[`datasets.${t}.transitions.${n}`,`transitions.${n}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,n){return Ra(`${t}-${n}`,()=>[[`datasets.${t}.elements.${n}`,`datasets.${t}`,`elements.${n}`,""]])}pluginScopeKeys(t){const n=t.id,r=this.type;return Ra(`${r}-plugin-${n}`,()=>[[`plugins.${n}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,n){const r=this._scopeCache;let i=r.get(t);return(!i||n)&&(i=new Map,r.set(t,i)),i}getOptionScopes(t,n,r){const{options:i,type:o}=this,a=this._cachedScopes(t,r),s=a.get(n);if(s)return s;const l=new Set;n.forEach(c=>{t&&(l.add(t),c.forEach(f=>Wi(l,t,f))),c.forEach(f=>Wi(l,i,f)),c.forEach(f=>Wi(l,br[o]||{},f)),c.forEach(f=>Wi(l,_e,f)),c.forEach(f=>Wi(l,Vc,f))});const u=Array.from(l);return u.length===0&&u.push(Object.create(null)),cb.has(n)&&a.set(n,u),u}chartOptionScopes(){const{options:t,type:n}=this;return[t,br[n]||{},_e.datasets[n]||{},{type:n},_e,Vc]}resolveNamedOptions(t,n,r,i=[""]){const o={$shared:!0},{resolver:a,subPrefixes:s}=Ng(this._resolverCache,t,i);let l=a;if(cE(a,n)){o.$shared=!1,r=Wn(r)?r():r;const u=this.createResolver(t,r,s);l=gi(a,r,u)}for(const u of n)o[u]=l[u];return o}createResolver(t,n,r=[""],i){const{resolver:o}=Ng(this._resolverCache,t,r);return J(n)?gi(o,n,void 0,i):o}}function Ng(e,t,n){let r=e.get(t);r||(r=new Map,e.set(t,r));const i=n.join();let o=r.get(i);return o||(o={resolver:Kd(t,n),subPrefixes:n.filter(s=>!s.toLowerCase().includes("hover"))},r.set(i,o)),o}const uE=e=>J(e)&&Object.getOwnPropertyNames(e).reduce((t,n)=>t||Wn(e[n]),!1);function cE(e,t){const{isScriptable:n,isIndexable:r}=G1(e);for(const i of t){const o=n(i),a=r(i),s=(a||o)&&e[i];if(o&&(Wn(s)||uE(s))||a&&ge(s))return!0}return!1}var fE="4.4.0";const dE=["top","bottom","left","right","chartArea"];function Rg(e,t){return e==="top"||e==="bottom"||dE.indexOf(e)===-1&&t==="x"}function Fg(e,t){return function(n,r){return n[e]===r[e]?n[t]-r[t]:n[e]-r[e]}}function Dg(e){const t=e.chart,n=t.options.animation;t.notifyPlugins("afterRender"),ne(n&&n.onComplete,[e],t)}function hE(e){const t=e.chart,n=t.options.animation;ne(n&&n.onProgress,[e],t)}function fb(e){return Z1()&&typeof e=="string"?e=document.getElementById(e):e&&e.length&&(e=e[0]),e&&e.canvas&&(e=e.canvas),e}const ds={},jg=e=>{const t=fb(e);return Object.values(ds).filter(n=>n.canvas===t).pop()};function pE(e,t,n){const r=Object.keys(e);for(const i of r){const o=+i;if(o>=t){const a=e[i];delete e[i],(n>0||o>t)&&(e[o+n]=a)}}}function gE(e,t,n,r){return!n||e.type==="mouseout"?null:r?t:e}function Fa(e,t,n){return e.options.clip?e[n]:t[n]}function vE(e,t){const{xScale:n,yScale:r}=e;return n&&r?{left:Fa(n,t,"left"),right:Fa(n,t,"right"),top:Fa(r,t,"top"),bottom:Fa(r,t,"bottom")}:t}var _n;let xl=(_n=class{static register(...t){Gt.add(...t),zg()}static unregister(...t){Gt.remove(...t),zg()}constructor(t,n){const r=this.config=new lE(n),i=fb(t),o=jg(i);if(o)throw new Error("Canvas is already in use. Chart with ID '"+o.id+"' must be destroyed before the canvas with ID '"+o.canvas.id+"' can be reused.");const a=r.createResolver(r.chartOptionScopes(),this.getContext());this.platform=new(r.platform||Ik(i)),this.platform.updateConfig(r);const s=this.platform.acquireContext(i,a.aspectRatio),l=s&&s.canvas,u=l&&l.height,c=l&&l.width;if(this.id=x2(),this.ctx=s,this.canvas=l,this.width=c,this.height=u,this._options=a,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new Zk,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=B2(f=>this.update(f),a.resizeDelay||0),this._dataChanges=[],ds[this.id]=this,!s||!l){console.error("Failed to create chart: can't acquire context from the given item");return}tn.listen(this,"complete",Dg),tn.listen(this,"progress",hE),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:n},width:r,height:i,_aspectRatio:o}=this;return se(t)?n&&o?o:i?r/i:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return Gt}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():cg(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return sg(this.canvas,this.ctx),this}stop(){return tn.stop(this),this}resize(t,n){tn.running(this)?this._resizeBeforeDraw={width:t,height:n}:this._resize(t,n)}_resize(t,n){const r=this.options,i=this.canvas,o=r.maintainAspectRatio&&this.aspectRatio,a=this.platform.getMaximumSize(i,t,n,o),s=r.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=a.width,this.height=a.height,this._aspectRatio=this.aspectRatio,cg(this,s,!0)&&(this.notifyPlugins("resize",{size:a}),ne(r.onResize,[this,a],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const n=this.options.scales||{};ee(n,(r,i)=>{r.id=i})}buildOrUpdateScales(){const t=this.options,n=t.scales,r=this.scales,i=Object.keys(r).reduce((a,s)=>(a[s]=!1,a),{});let o=[];n&&(o=o.concat(Object.keys(n).map(a=>{const s=n[a],l=Gc(a,s),u=l==="r",c=l==="x";return{options:s,dposition:u?"chartArea":c?"bottom":"left",dtype:u?"radialLinear":c?"category":"linear"}}))),ee(o,a=>{const s=a.options,l=s.id,u=Gc(l,s),c=Y(s.type,a.dtype);(s.position===void 0||Rg(s.position,u)!==Rg(a.dposition))&&(s.position=a.dposition),i[l]=!0;let f=null;if(l in r&&r[l].type===c)f=r[l];else{const d=Gt.getScale(c);f=new d({id:l,type:c,ctx:this.ctx,chart:this}),r[f.id]=f}f.init(s,t)}),ee(i,(a,s)=>{a||delete r[s]}),ee(r,a=>{Tt.configure(this,a,a.options),Tt.addBox(this,a)})}_updateMetasets(){const t=this._metasets,n=this.data.datasets.length,r=t.length;if(t.sort((i,o)=>i.index-o.index),r>n){for(let i=n;i<r;++i)this._destroyDatasetMeta(i);t.splice(n,r-n)}this._sortedMetasets=t.slice(0).sort(Fg("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:n}}=this;t.length>n.length&&delete this._stacks,t.forEach((r,i)=>{n.filter(o=>o===r._dataset).length===0&&this._destroyDatasetMeta(i)})}buildOrUpdateControllers(){const t=[],n=this.data.datasets;let r,i;for(this._removeUnreferencedMetasets(),r=0,i=n.length;r<i;r++){const o=n[r];let a=this.getDatasetMeta(r);const s=o.type||this.config.type;if(a.type&&a.type!==s&&(this._destroyDatasetMeta(r),a=this.getDatasetMeta(r)),a.type=s,a.indexAxis=o.indexAxis||Hc(s,this.options),a.order=o.order||0,a.index=r,a.label=""+o.label,a.visible=this.isDatasetVisible(r),a.controller)a.controller.updateIndex(r),a.controller.linkScales();else{const l=Gt.getController(s),{datasetElementType:u,dataElementType:c}=_e.datasets[s];Object.assign(l,{dataElementType:Gt.getElement(c),datasetElementType:u&&Gt.getElement(u)}),a.controller=new l(this,r),t.push(a.controller)}}return this._updateMetasets(),t}_resetElements(){ee(this.data.datasets,(t,n)=>{this.getDatasetMeta(n).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const n=this.config;n.update();const r=this._options=n.createResolver(n.chartOptionScopes(),this.getContext()),i=this._animationsDisabled=!r.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const o=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let a=0;for(let u=0,c=this.data.datasets.length;u<c;u++){const{controller:f}=this.getDatasetMeta(u),d=!i&&o.indexOf(f)===-1;f.buildOrUpdateElements(d),a=Math.max(+f.getMaxOverflow(),a)}a=this._minPadding=r.layout.autoPadding?a:0,this._updateLayout(a),i||ee(o,u=>{u.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(Fg("z","_idx"));const{_active:s,_lastEvent:l}=this;l?this._eventHandler(l,!0):s.length&&this._updateHoverStyles(s,s,!0),this.render()}_updateScales(){ee(this.scales,t=>{Tt.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,n=new Set(Object.keys(this._listeners)),r=new Set(t.events);(!qp(n,r)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,n=this._getUniformDataChanges()||[];for(const{method:r,start:i,count:o}of n){const a=r==="_removeElements"?-o:o;pE(t,i,a)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const n=this.data.datasets.length,r=o=>new Set(t.filter(a=>a[0]===o).map((a,s)=>s+","+a.splice(1).join(","))),i=r(0);for(let o=1;o<n;o++)if(!qp(i,r(o)))return;return Array.from(i).map(o=>o.split(",")).map(o=>({method:o[1],start:+o[2],count:+o[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;Tt.update(this,this.width,this.height,t);const n=this.chartArea,r=n.width<=0||n.height<=0;this._layers=[],ee(this.boxes,i=>{r&&i.position==="chartArea"||(i.configure&&i.configure(),this._layers.push(...i._layers()))},this),this._layers.forEach((i,o)=>{i._idx=o}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let n=0,r=this.data.datasets.length;n<r;++n)this.getDatasetMeta(n).controller.configure();for(let n=0,r=this.data.datasets.length;n<r;++n)this._updateDataset(n,Wn(t)?t({datasetIndex:n}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,n){const r=this.getDatasetMeta(t),i={meta:r,index:t,mode:n,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",i)!==!1&&(r.controller._update(n),i.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",i))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(tn.has(this)?this.attached&&!tn.running(this)&&tn.start(this):(this.draw(),Dg({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:r,height:i}=this._resizeBeforeDraw;this._resize(r,i),this._resizeBeforeDraw=null}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const n=this._layers;for(t=0;t<n.length&&n[t].z<=0;++t)n[t].draw(this.chartArea);for(this._drawDatasets();t<n.length;++t)n[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const n=this._sortedMetasets,r=[];let i,o;for(i=0,o=n.length;i<o;++i){const a=n[i];(!t||a.visible)&&r.push(a)}return r}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let n=t.length-1;n>=0;--n)this._drawDataset(t[n]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const n=this.ctx,r=t._clip,i=!r.disabled,o=vE(t,this.chartArea),a={meta:t,index:t.index,cancelable:!0};this.notifyPlugins("beforeDatasetDraw",a)!==!1&&(i&&Yd(n,{left:r.left===!1?0:o.left-r.left,right:r.right===!1?this.width:o.right+r.right,top:r.top===!1?0:o.top-r.top,bottom:r.bottom===!1?this.height:o.bottom+r.bottom}),t.controller.draw(),i&&Xd(n),a.cancelable=!1,this.notifyPlugins("afterDatasetDraw",a))}isPointInArea(t){return un(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,n,r,i){const o=dk.modes[n];return typeof o=="function"?o(this,t,r,i):[]}getDatasetMeta(t){const n=this.data.datasets[t],r=this._metasets;let i=r.filter(o=>o&&o._dataset===n).pop();return i||(i={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:n&&n.order||0,index:t,_dataset:n,_parsed:[],_sorted:!1},r.push(i)),i}getContext(){return this.$context||(this.$context=Xn(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const n=this.data.datasets[t];if(!n)return!1;const r=this.getDatasetMeta(t);return typeof r.hidden=="boolean"?!r.hidden:!n.hidden}setDatasetVisibility(t,n){const r=this.getDatasetMeta(t);r.hidden=!n}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,n,r){const i=r?"show":"hide",o=this.getDatasetMeta(t),a=o.controller._resolveAnimations(void 0,i);Vs(n)?(o.data[n].hidden=!r,this.update()):(this.setDatasetVisibility(t,r),a.update(o,{visible:r}),this.update(s=>s.datasetIndex===t?i:void 0))}hide(t,n){this._updateVisibility(t,n,!1)}show(t,n){this._updateVisibility(t,n,!0)}_destroyDatasetMeta(t){const n=this._metasets[t];n&&n.controller&&n.controller._destroy(),delete this._metasets[t]}_stop(){let t,n;for(this.stop(),tn.remove(this),t=0,n=this.data.datasets.length;t<n;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:n}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),sg(t,n),this.platform.releaseContext(n),this.canvas=null,this.ctx=null),delete ds[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,n=this.platform,r=(o,a)=>{n.addEventListener(this,o,a),t[o]=a},i=(o,a,s)=>{o.offsetX=a,o.offsetY=s,this._eventHandler(o)};ee(this.options.events,o=>r(o,i))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,n=this.platform,r=(l,u)=>{n.addEventListener(this,l,u),t[l]=u},i=(l,u)=>{t[l]&&(n.removeEventListener(this,l,u),delete t[l])},o=(l,u)=>{this.canvas&&this.resize(l,u)};let a;const s=()=>{i("attach",s),this.attached=!0,this.resize(),r("resize",o),r("detach",a)};a=()=>{this.attached=!1,i("resize",o),this._stop(),this._resize(0,0),r("attach",s)},n.isAttached(this.canvas)?s():a()}unbindEvents(){ee(this._listeners,(t,n)=>{this.platform.removeEventListener(this,n,t)}),this._listeners={},ee(this._responsiveListeners,(t,n)=>{this.platform.removeEventListener(this,n,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,n,r){const i=r?"set":"remove";let o,a,s,l;for(n==="dataset"&&(o=this.getDatasetMeta(t[0].datasetIndex),o.controller["_"+i+"DatasetHoverStyle"]()),s=0,l=t.length;s<l;++s){a=t[s];const u=a&&this.getDatasetMeta(a.datasetIndex).controller;u&&u[i+"HoverStyle"](a.element,a.datasetIndex,a.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const n=this._active||[],r=t.map(({datasetIndex:o,index:a})=>{const s=this.getDatasetMeta(o);if(!s)throw new Error("No dataset found at index "+o);return{datasetIndex:o,element:s.data[a],index:a}});!zs(r,n)&&(this._active=r,this._lastEvent=null,this._updateHoverStyles(r,n))}notifyPlugins(t,n,r){return this._plugins.notify(this,t,n,r)}isPluginEnabled(t){return this._plugins._cache.filter(n=>n.plugin.id===t).length===1}_updateHoverStyles(t,n,r){const i=this.options.hover,o=(l,u)=>l.filter(c=>!u.some(f=>c.datasetIndex===f.datasetIndex&&c.index===f.index)),a=o(n,t),s=r?t:o(t,n);a.length&&this.updateHoverStyle(a,i.mode,!1),s.length&&i.mode&&this.updateHoverStyle(s,i.mode,!0)}_eventHandler(t,n){const r={event:t,replay:n,cancelable:!0,inChartArea:this.isPointInArea(t)},i=a=>(a.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",r,i)===!1)return;const o=this._handleEvent(t,n,r.inChartArea);return r.cancelable=!1,this.notifyPlugins("afterEvent",r,i),(o||r.changed)&&this.render(),this}_handleEvent(t,n,r){const{_active:i=[],options:o}=this,a=n,s=this._getActiveElements(t,i,r,a),l=C2(t),u=gE(t,this._lastEvent,r,l);r&&(this._lastEvent=null,ne(o.onHover,[t,s,this],this),l&&ne(o.onClick,[t,s,this],this));const c=!zs(s,i);return(c||n)&&(this._active=s,this._updateHoverStyles(s,i,n)),this._lastEvent=u,c}_getActiveElements(t,n,r,i){if(t.type==="mouseout")return[];if(!r)return n;const o=this.options.hover;return this.getElementsAtEventForMode(t,o.mode,o,i)}},U(_n,"defaults",_e),U(_n,"instances",ds),U(_n,"overrides",br),U(_n,"registry",Gt),U(_n,"version",fE),U(_n,"getChart",jg),_n);function zg(){return ee(xl.instances,e=>e._plugins.invalidate())}function db(e,t,n=t){e.lineCap=Y(n.borderCapStyle,t.borderCapStyle),e.setLineDash(Y(n.borderDash,t.borderDash)),e.lineDashOffset=Y(n.borderDashOffset,t.borderDashOffset),e.lineJoin=Y(n.borderJoinStyle,t.borderJoinStyle),e.lineWidth=Y(n.borderWidth,t.borderWidth),e.strokeStyle=Y(n.borderColor,t.borderColor)}function mE(e,t,n){e.lineTo(n.x,n.y)}function yE(e){return e.stepped?tS:e.tension||e.cubicInterpolationMode==="monotone"?nS:mE}function hb(e,t,n={}){const r=e.length,{start:i=0,end:o=r-1}=n,{start:a,end:s}=t,l=Math.max(i,a),u=Math.min(o,s),c=i<a&&o<a||i>s&&o>s;return{count:r,start:l,loop:t.loop,ilen:u<l&&!c?r+u-l:u-l}}function bE(e,t,n,r){const{points:i,options:o}=t,{count:a,start:s,loop:l,ilen:u}=hb(i,n,r),c=yE(o);let{move:f=!0,reverse:d}=r||{},h,v,m;for(h=0;h<=u;++h)v=i[(s+(d?u-h:h))%a],!v.skip&&(f?(e.moveTo(v.x,v.y),f=!1):c(e,m,v,d,o.stepped),m=v);return l&&(v=i[(s+(d?u:0))%a],c(e,m,v,d,o.stepped)),!!l}function $E(e,t,n,r){const i=t.points,{count:o,start:a,ilen:s}=hb(i,n,r),{move:l=!0,reverse:u}=r||{};let c=0,f=0,d,h,v,m,y,p;const g=$=>(a+(u?s-$:$))%o,b=()=>{m!==y&&(e.lineTo(c,y),e.lineTo(c,m),e.lineTo(c,p))};for(l&&(h=i[g(0)],e.moveTo(h.x,h.y)),d=0;d<=s;++d){if(h=i[g(d)],h.skip)continue;const $=h.x,_=h.y,k=$|0;k===v?(_<m?m=_:_>y&&(y=_),c=(f*c+$)/++f):(b(),e.lineTo($,_),v=k,f=0,m=y=_),p=_}b()}function Yc(e){const t=e.options,n=t.borderDash&&t.borderDash.length;return!e._decimated&&!e._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!n?$E:bE}function _E(e){return e.stepped?NS:e.tension||e.cubicInterpolationMode==="monotone"?RS:rr}function wE(e,t,n,r){let i=t._path;i||(i=t._path=new Path2D,t.path(i,n,r)&&i.closePath()),db(e,t.options),e.stroke(i)}function xE(e,t,n,r){const{segments:i,options:o}=t,a=Yc(t);for(const s of i)db(e,o,s.style),e.beginPath(),a(e,t,s,{start:n,end:n+r-1})&&e.closePath(),e.stroke()}const SE=typeof Path2D=="function";function kE(e,t,n,r){SE&&!t.options.segment?wE(e,t,n,r):xE(e,t,n,r)}class ao extends gn{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,n){const r=this.options;if((r.tension||r.cubicInterpolationMode==="monotone")&&!r.stepped&&!this._pointsUpdated){const i=r.spanGaps?this._loop:this._fullLoop;AS(this._points,r,t,i,n),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=WS(this,this.options.segment))}first(){const t=this.segments,n=this.points;return t.length&&n[t[0].start]}last(){const t=this.segments,n=this.points,r=t.length;return r&&n[t[r-1].end]}interpolate(t,n){const r=this.options,i=t[n],o=this.points,a=BS(this,{property:n,start:i,end:i});if(!a.length)return;const s=[],l=_E(r);let u,c;for(u=0,c=a.length;u<c;++u){const{start:f,end:d}=a[u],h=o[f],v=o[d];if(h===v){s.push(h);continue}const m=Math.abs((i-h[n])/(v[n]-h[n])),y=l(h,v,m,r.stepped);y[n]=t[n],s.push(y)}return s.length===1?s[0]:s}pathSegment(t,n,r){return Yc(this)(t,this,n,r)}path(t,n,r){const i=this.segments,o=Yc(this);let a=this._loop;n=n||0,r=r||this.points.length-n;for(const s of i)a&=o(t,this,s,{start:n,end:n+r-1});return!!a}draw(t,n,r,i){const o=this.options||{};(this.points||[]).length&&o.borderWidth&&(t.save(),kE(t,this,r,i),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}U(ao,"id","line"),U(ao,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),U(ao,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),U(ao,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function Bg(e,t,n,r){const i=e.options,{[n]:o}=e.getProps([n],r);return Math.abs(t-o)<i.radius+i.hitRadius}class hs extends gn{constructor(n){super();U(this,"parsed");U(this,"skip");U(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,n&&Object.assign(this,n)}inRange(n,r,i){const o=this.options,{x:a,y:s}=this.getProps(["x","y"],i);return Math.pow(n-a,2)+Math.pow(r-s,2)<Math.pow(o.hitRadius+o.radius,2)}inXRange(n,r){return Bg(this,n,"x",r)}inYRange(n,r){return Bg(this,n,"y",r)}getCenterPoint(n){const{x:r,y:i}=this.getProps(["x","y"],n);return{x:r,y:i}}size(n){n=n||this.options||{};let r=n.radius||0;r=Math.max(r,r&&n.hoverRadius||0);const i=r&&n.borderWidth||0;return(r+i)*2}draw(n,r){const i=this.options;this.skip||i.radius<.1||!un(this,r,this.size(i)/2)||(n.strokeStyle=i.borderColor,n.lineWidth=i.borderWidth,n.fillStyle=i.backgroundColor,Wc(n,i,this.x,this.y))}getRange(){const n=this.options||{};return n.radius+n.hitRadius}}U(hs,"id","point"),U(hs,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),U(hs,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});const Ug=(e,t)=>{let{boxHeight:n=t,boxWidth:r=t}=e;return e.usePointStyle&&(n=Math.min(n,t),r=e.pointStyleWidth||Math.min(r,t)),{boxWidth:r,boxHeight:n,itemHeight:Math.max(t,n)}},EE=(e,t)=>e!==null&&t!==null&&e.datasetIndex===t.datasetIndex&&e.index===t.index;class Vg extends gn{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,n,r){this.maxWidth=t,this.maxHeight=n,this._margins=r,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let n=ne(t.generateLabels,[this.chart],this)||[];t.filter&&(n=n.filter(r=>t.filter(r,this.chart.data))),t.sort&&(n=n.sort((r,i)=>t.sort(r,i,this.chart.data))),this.options.reverse&&n.reverse(),this.legendItems=n}fit(){const{options:t,ctx:n}=this;if(!t.display){this.width=this.height=0;return}const r=t.labels,i=Ce(r.font),o=i.size,a=this._computeTitleHeight(),{boxWidth:s,itemHeight:l}=Ug(r,o);let u,c;n.font=i.string,this.isHorizontal()?(u=this.maxWidth,c=this._fitRows(a,o,s,l)+10):(c=this.maxHeight,u=this._fitCols(a,i,s,l)+10),this.width=Math.min(u,t.maxWidth||this.maxWidth),this.height=Math.min(c,t.maxHeight||this.maxHeight)}_fitRows(t,n,r,i){const{ctx:o,maxWidth:a,options:{labels:{padding:s}}}=this,l=this.legendHitBoxes=[],u=this.lineWidths=[0],c=i+s;let f=t;o.textAlign="left",o.textBaseline="middle";let d=-1,h=-c;return this.legendItems.forEach((v,m)=>{const y=r+n/2+o.measureText(v.text).width;(m===0||u[u.length-1]+y+2*s>a)&&(f+=c,u[u.length-(m>0?0:1)]=0,h+=c,d++),l[m]={left:0,top:h,row:d,width:y,height:i},u[u.length-1]+=y+s}),f}_fitCols(t,n,r,i){const{ctx:o,maxHeight:a,options:{labels:{padding:s}}}=this,l=this.legendHitBoxes=[],u=this.columnSizes=[],c=a-t;let f=s,d=0,h=0,v=0,m=0;return this.legendItems.forEach((y,p)=>{const{itemWidth:g,itemHeight:b}=AE(r,n,o,y,i);p>0&&h+b+2*s>c&&(f+=d+s,u.push({width:d,height:h}),v+=d+s,m++,d=h=0),l[p]={left:v,top:h,col:m,width:g,height:b},d=Math.max(d,g),h+=b+s}),f+=d,u.push({width:d,height:h}),f}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:n,options:{align:r,labels:{padding:i},rtl:o}}=this,a=ii(o,this.left,this.width);if(this.isHorizontal()){let s=0,l=ze(r,this.left+i,this.right-this.lineWidths[s]);for(const u of n)s!==u.row&&(s=u.row,l=ze(r,this.left+i,this.right-this.lineWidths[s])),u.top+=this.top+t+i,u.left=a.leftForLtr(a.x(l),u.width),l+=u.width+i}else{let s=0,l=ze(r,this.top+t+i,this.bottom-this.columnSizes[s].height);for(const u of n)u.col!==s&&(s=u.col,l=ze(r,this.top+t+i,this.bottom-this.columnSizes[s].height)),u.top=l,u.left+=this.left+i,u.left=a.leftForLtr(a.x(u.left),u.width),l+=u.height+i}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;Yd(t,this),this._draw(),Xd(t)}}_draw(){const{options:t,columnSizes:n,lineWidths:r,ctx:i}=this,{align:o,labels:a}=t,s=_e.color,l=ii(t.rtl,this.left,this.width),u=Ce(a.font),{padding:c}=a,f=u.size,d=f/2;let h;this.drawTitle(),i.textAlign=l.textAlign("left"),i.textBaseline="middle",i.lineWidth=.5,i.font=u.string;const{boxWidth:v,boxHeight:m,itemHeight:y}=Ug(a,f),p=function(k,w,E){if(isNaN(v)||v<=0||isNaN(m)||m<0)return;i.save();const M=Y(E.lineWidth,1);if(i.fillStyle=Y(E.fillStyle,s),i.lineCap=Y(E.lineCap,"butt"),i.lineDashOffset=Y(E.lineDashOffset,0),i.lineJoin=Y(E.lineJoin,"miter"),i.lineWidth=M,i.strokeStyle=Y(E.strokeStyle,s),i.setLineDash(Y(E.lineDash,[])),a.usePointStyle){const C={radius:m*Math.SQRT2/2,pointStyle:E.pointStyle,rotation:E.rotation,borderWidth:M},x=l.xPlus(k,v/2),S=w+d;W1(i,C,x,S,a.pointStyleWidth&&v)}else{const C=w+Math.max((f-m)/2,0),x=l.leftForLtr(k,v),S=ri(E.borderRadius);i.beginPath(),Object.values(S).some(P=>P!==0)?Gs(i,{x,y:C,w:v,h:m,radius:S}):i.rect(x,C,v,m),i.fill(),M!==0&&i.stroke()}i.restore()},g=function(k,w,E){$r(i,E.text,k,w+y/2,u,{strikethrough:E.hidden,textAlign:l.textAlign(E.textAlign)})},b=this.isHorizontal(),$=this._computeTitleHeight();b?h={x:ze(o,this.left+c,this.right-r[0]),y:this.top+c+$,line:0}:h={x:this.left+c,y:ze(o,this.top+$+c,this.bottom-n[0].height),line:0},q1(this.ctx,t.textDirection);const _=y+c;this.legendItems.forEach((k,w)=>{i.strokeStyle=k.fontColor,i.fillStyle=k.fontColor;const E=i.measureText(k.text).width,M=l.textAlign(k.textAlign||(k.textAlign=a.textAlign)),C=v+d+E;let x=h.x,S=h.y;l.setWidth(this.width),b?w>0&&x+C+c>this.right&&(S=h.y+=_,h.line++,x=h.x=ze(o,this.left+c,this.right-r[h.line])):w>0&&S+_>this.bottom&&(x=h.x=x+n[h.line].width+c,h.line++,S=h.y=ze(o,this.top+$+c,this.bottom-n[h.line].height));const P=l.x(x);if(p(P,S,k),x=U2(M,x+v+d,b?x+C:this.right,t.rtl),g(l.x(x),S,k),b)h.x+=C+c;else if(typeof k.text!="string"){const D=u.lineHeight;h.y+=pb(k,D)+c}else h.y+=_}),J1(this.ctx,t.textDirection)}drawTitle(){const t=this.options,n=t.title,r=Ce(n.font),i=Ve(n.padding);if(!n.display)return;const o=ii(t.rtl,this.left,this.width),a=this.ctx,s=n.position,l=r.size/2,u=i.top+l;let c,f=this.left,d=this.width;if(this.isHorizontal())d=Math.max(...this.lineWidths),c=this.top+u,f=ze(t.align,f,this.right-d);else{const v=this.columnSizes.reduce((m,y)=>Math.max(m,y.height),0);c=u+ze(t.align,this.top,this.bottom-v-t.labels.padding-this._computeTitleHeight())}const h=ze(s,f,f+d);a.textAlign=o.textAlign(Wd(s)),a.textBaseline="middle",a.strokeStyle=n.color,a.fillStyle=n.color,a.font=r.string,$r(a,n.text,h,c,r)}_computeTitleHeight(){const t=this.options.title,n=Ce(t.font),r=Ve(t.padding);return t.display?n.lineHeight+r.height:0}_getLegendItemAt(t,n){let r,i,o;if(io(t,this.left,this.right)&&io(n,this.top,this.bottom)){for(o=this.legendHitBoxes,r=0;r<o.length;++r)if(i=o[r],io(t,i.left,i.left+i.width)&&io(n,i.top,i.top+i.height))return this.legendItems[r]}return null}handleEvent(t){const n=this.options;if(!PE(t.type,n))return;const r=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const i=this._hoveredItem,o=EE(i,r);i&&!o&&ne(n.onLeave,[t,i,this],this),this._hoveredItem=r,r&&!o&&ne(n.onHover,[t,r,this],this)}else r&&ne(n.onClick,[t,r,this],this)}}function AE(e,t,n,r,i){const o=TE(r,e,t,n),a=CE(i,r,t.lineHeight);return{itemWidth:o,itemHeight:a}}function TE(e,t,n,r){let i=e.text;return i&&typeof i!="string"&&(i=i.reduce((o,a)=>o.length>a.length?o:a)),t+n.size/2+r.measureText(i).width}function CE(e,t,n){let r=e;return typeof t.text!="string"&&(r=pb(t,n)),r}function pb(e,t){const n=e.text?e.text.length:0;return t*n}function PE(e,t){return!!((e==="mousemove"||e==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(e==="click"||e==="mouseup"))}var ME={id:"legend",_element:Vg,start(e,t,n){const r=e.legend=new Vg({ctx:e.ctx,options:n,chart:e});Tt.configure(e,r,n),Tt.addBox(e,r)},stop(e){Tt.removeBox(e,e.legend),delete e.legend},beforeUpdate(e,t,n){const r=e.legend;Tt.configure(e,r,n),r.options=n},afterUpdate(e){const t=e.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(e,t){t.replay||e.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(e,t,n){const r=t.datasetIndex,i=n.chart;i.isDatasetVisible(r)?(i.hide(r),t.hidden=!0):(i.show(r),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:e=>e.chart.options.color,boxWidth:40,padding:10,generateLabels(e){const t=e.data.datasets,{labels:{usePointStyle:n,pointStyle:r,textAlign:i,color:o,useBorderRadius:a,borderRadius:s}}=e.legend.options;return e._getSortedDatasetMetas().map(l=>{const u=l.controller.getStyle(n?0:void 0),c=Ve(u.borderWidth);return{text:t[l.index].label,fillStyle:u.backgroundColor,fontColor:o,hidden:!l.visible,lineCap:u.borderCapStyle,lineDash:u.borderDash,lineDashOffset:u.borderDashOffset,lineJoin:u.borderJoinStyle,lineWidth:(c.width+c.height)/4,strokeStyle:u.borderColor,pointStyle:r||u.pointStyle,rotation:u.rotation,textAlign:i||u.textAlign,borderRadius:a&&(s||u.borderRadius),datasetIndex:l.index}},this)}},title:{color:e=>e.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:e=>!e.startsWith("on"),labels:{_scriptable:e=>!["generateLabels","filter","sort"].includes(e)}}};class gb extends gn{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,n){const r=this.options;if(this.left=0,this.top=0,!r.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=n;const i=ge(r.text)?r.text.length:1;this._padding=Ve(r.padding);const o=i*Ce(r.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=o:this.width=o}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:n,left:r,bottom:i,right:o,options:a}=this,s=a.align;let l=0,u,c,f;return this.isHorizontal()?(c=ze(s,r,o),f=n+t,u=o-r):(a.position==="left"?(c=r+t,f=ze(s,i,n),l=Se*-.5):(c=o-t,f=ze(s,n,i),l=Se*.5),u=i-n),{titleX:c,titleY:f,maxWidth:u,rotation:l}}draw(){const t=this.ctx,n=this.options;if(!n.display)return;const r=Ce(n.font),o=r.lineHeight/2+this._padding.top,{titleX:a,titleY:s,maxWidth:l,rotation:u}=this._drawArgs(o);$r(t,n.text,0,0,r,{color:n.color,maxWidth:l,rotation:u,textAlign:Wd(n.align),textBaseline:"middle",translation:[a,s]})}}function OE(e,t){const n=new gb({ctx:e.ctx,options:t,chart:e});Tt.configure(e,n,t),Tt.addBox(e,n),e.titleBlock=n}var IE={id:"title",_element:gb,start(e,t,n){OE(e,n)},stop(e){const t=e.titleBlock;Tt.removeBox(e,t),delete e.titleBlock},beforeUpdate(e,t,n){const r=e.titleBlock;Tt.configure(e,r,n),r.options=n},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const so={average(e){if(!e.length)return!1;let t,n,r=0,i=0,o=0;for(t=0,n=e.length;t<n;++t){const a=e[t].element;if(a&&a.hasValue()){const s=a.tooltipPosition();r+=s.x,i+=s.y,++o}}return{x:r/o,y:i/o}},nearest(e,t){if(!e.length)return!1;let n=t.x,r=t.y,i=Number.POSITIVE_INFINITY,o,a,s;for(o=0,a=e.length;o<a;++o){const l=e[o].element;if(l&&l.hasValue()){const u=l.getCenterPoint(),c=Uc(t,u);c<i&&(i=c,s=l)}}if(s){const l=s.tooltipPosition();n=l.x,r=l.y}return{x:n,y:r}}};function Wt(e,t){return t&&(ge(t)?Array.prototype.push.apply(e,t):e.push(t)),e}function nn(e){return(typeof e=="string"||e instanceof String)&&e.indexOf(`
`)>-1?e.split(`
`):e}function LE(e,t){const{element:n,datasetIndex:r,index:i}=t,o=e.getDatasetMeta(r).controller,{label:a,value:s}=o.getLabelAndValue(i);return{chart:e,label:a,parsed:o.getParsed(i),raw:e.data.datasets[r].data[i],formattedValue:s,dataset:o.getDataset(),dataIndex:i,datasetIndex:r,element:n}}function Wg(e,t){const n=e.chart.ctx,{body:r,footer:i,title:o}=e,{boxWidth:a,boxHeight:s}=t,l=Ce(t.bodyFont),u=Ce(t.titleFont),c=Ce(t.footerFont),f=o.length,d=i.length,h=r.length,v=Ve(t.padding);let m=v.height,y=0,p=r.reduce(($,_)=>$+_.before.length+_.lines.length+_.after.length,0);if(p+=e.beforeBody.length+e.afterBody.length,f&&(m+=f*u.lineHeight+(f-1)*t.titleSpacing+t.titleMarginBottom),p){const $=t.displayColors?Math.max(s,l.lineHeight):l.lineHeight;m+=h*$+(p-h)*l.lineHeight+(p-1)*t.bodySpacing}d&&(m+=t.footerMarginTop+d*c.lineHeight+(d-1)*t.footerSpacing);let g=0;const b=function($){y=Math.max(y,n.measureText($).width+g)};return n.save(),n.font=u.string,ee(e.title,b),n.font=l.string,ee(e.beforeBody.concat(e.afterBody),b),g=t.displayColors?a+2+t.boxPadding:0,ee(r,$=>{ee($.before,b),ee($.lines,b),ee($.after,b)}),g=0,n.font=c.string,ee(e.footer,b),n.restore(),y+=v.width,{width:y,height:m}}function NE(e,t){const{y:n,height:r}=t;return n<r/2?"top":n>e.height-r/2?"bottom":"center"}function RE(e,t,n,r){const{x:i,width:o}=r,a=n.caretSize+n.caretPadding;if(e==="left"&&i+o+a>t.width||e==="right"&&i-o-a<0)return!0}function FE(e,t,n,r){const{x:i,width:o}=n,{width:a,chartArea:{left:s,right:l}}=e;let u="center";return r==="center"?u=i<=(s+l)/2?"left":"right":i<=o/2?u="left":i>=a-o/2&&(u="right"),RE(u,e,t,n)&&(u="center"),u}function Hg(e,t,n){const r=n.yAlign||t.yAlign||NE(e,n);return{xAlign:n.xAlign||t.xAlign||FE(e,t,n,r),yAlign:r}}function DE(e,t){let{x:n,width:r}=e;return t==="right"?n-=r:t==="center"&&(n-=r/2),n}function jE(e,t,n){let{y:r,height:i}=e;return t==="top"?r+=n:t==="bottom"?r-=i+n:r-=i/2,r}function Gg(e,t,n,r){const{caretSize:i,caretPadding:o,cornerRadius:a}=e,{xAlign:s,yAlign:l}=n,u=i+o,{topLeft:c,topRight:f,bottomLeft:d,bottomRight:h}=ri(a);let v=DE(t,s);const m=jE(t,l,u);return l==="center"?s==="left"?v+=u:s==="right"&&(v-=u):s==="left"?v-=Math.max(c,d)+i:s==="right"&&(v+=Math.max(f,h)+i),{x:At(v,0,r.width-t.width),y:At(m,0,r.height-t.height)}}function Da(e,t,n){const r=Ve(n.padding);return t==="center"?e.x+e.width/2:t==="right"?e.x+e.width-r.right:e.x+r.left}function Yg(e){return Wt([],nn(e))}function zE(e,t,n){return Xn(e,{tooltip:t,tooltipItems:n,type:"tooltip"})}function Xg(e,t){const n=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return n?e.override(n):e}const vb={beforeTitle:qt,title(e){if(e.length>0){const t=e[0],n=t.chart.data.labels,r=n?n.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(r>0&&t.dataIndex<r)return n[t.dataIndex]}return""},afterTitle:qt,beforeBody:qt,beforeLabel:qt,label(e){if(this&&this.options&&this.options.mode==="dataset")return e.label+": "+e.formattedValue||e.formattedValue;let t=e.dataset.label||"";t&&(t+=": ");const n=e.formattedValue;return se(n)||(t+=n),t},labelColor(e){const n=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{borderColor:n.borderColor,backgroundColor:n.backgroundColor,borderWidth:n.borderWidth,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(e){const n=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{pointStyle:n.pointStyle,rotation:n.rotation}},afterLabel:qt,afterBody:qt,beforeFooter:qt,footer:qt,afterFooter:qt};function Ke(e,t,n,r){const i=e[t].call(n,r);return typeof i>"u"?vb[t].call(n,r):i}class Xc extends gn{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const n=this.chart,r=this.options.setContext(this.getContext()),i=r.enabled&&n.options.animation&&r.animations,o=new tb(this.chart,i);return i._cacheable&&(this._cachedAnimations=Object.freeze(o)),o}getContext(){return this.$context||(this.$context=zE(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,n){const{callbacks:r}=n,i=Ke(r,"beforeTitle",this,t),o=Ke(r,"title",this,t),a=Ke(r,"afterTitle",this,t);let s=[];return s=Wt(s,nn(i)),s=Wt(s,nn(o)),s=Wt(s,nn(a)),s}getBeforeBody(t,n){return Yg(Ke(n.callbacks,"beforeBody",this,t))}getBody(t,n){const{callbacks:r}=n,i=[];return ee(t,o=>{const a={before:[],lines:[],after:[]},s=Xg(r,o);Wt(a.before,nn(Ke(s,"beforeLabel",this,o))),Wt(a.lines,Ke(s,"label",this,o)),Wt(a.after,nn(Ke(s,"afterLabel",this,o))),i.push(a)}),i}getAfterBody(t,n){return Yg(Ke(n.callbacks,"afterBody",this,t))}getFooter(t,n){const{callbacks:r}=n,i=Ke(r,"beforeFooter",this,t),o=Ke(r,"footer",this,t),a=Ke(r,"afterFooter",this,t);let s=[];return s=Wt(s,nn(i)),s=Wt(s,nn(o)),s=Wt(s,nn(a)),s}_createItems(t){const n=this._active,r=this.chart.data,i=[],o=[],a=[];let s=[],l,u;for(l=0,u=n.length;l<u;++l)s.push(LE(this.chart,n[l]));return t.filter&&(s=s.filter((c,f,d)=>t.filter(c,f,d,r))),t.itemSort&&(s=s.sort((c,f)=>t.itemSort(c,f,r))),ee(s,c=>{const f=Xg(t.callbacks,c);i.push(Ke(f,"labelColor",this,c)),o.push(Ke(f,"labelPointStyle",this,c)),a.push(Ke(f,"labelTextColor",this,c))}),this.labelColors=i,this.labelPointStyles=o,this.labelTextColors=a,this.dataPoints=s,s}update(t,n){const r=this.options.setContext(this.getContext()),i=this._active;let o,a=[];if(!i.length)this.opacity!==0&&(o={opacity:0});else{const s=so[r.position].call(this,i,this._eventPosition);a=this._createItems(r),this.title=this.getTitle(a,r),this.beforeBody=this.getBeforeBody(a,r),this.body=this.getBody(a,r),this.afterBody=this.getAfterBody(a,r),this.footer=this.getFooter(a,r);const l=this._size=Wg(this,r),u=Object.assign({},s,l),c=Hg(this.chart,r,u),f=Gg(r,u,c,this.chart);this.xAlign=c.xAlign,this.yAlign=c.yAlign,o={opacity:1,x:f.x,y:f.y,width:l.width,height:l.height,caretX:s.x,caretY:s.y}}this._tooltipItems=a,this.$context=void 0,o&&this._resolveAnimations().update(this,o),t&&r.external&&r.external.call(this,{chart:this.chart,tooltip:this,replay:n})}drawCaret(t,n,r,i){const o=this.getCaretPosition(t,r,i);n.lineTo(o.x1,o.y1),n.lineTo(o.x2,o.y2),n.lineTo(o.x3,o.y3)}getCaretPosition(t,n,r){const{xAlign:i,yAlign:o}=this,{caretSize:a,cornerRadius:s}=r,{topLeft:l,topRight:u,bottomLeft:c,bottomRight:f}=ri(s),{x:d,y:h}=t,{width:v,height:m}=n;let y,p,g,b,$,_;return o==="center"?($=h+m/2,i==="left"?(y=d,p=y-a,b=$+a,_=$-a):(y=d+v,p=y+a,b=$-a,_=$+a),g=y):(i==="left"?p=d+Math.max(l,c)+a:i==="right"?p=d+v-Math.max(u,f)-a:p=this.caretX,o==="top"?(b=h,$=b-a,y=p-a,g=p+a):(b=h+m,$=b+a,y=p+a,g=p-a),_=b),{x1:y,x2:p,x3:g,y1:b,y2:$,y3:_}}drawTitle(t,n,r){const i=this.title,o=i.length;let a,s,l;if(o){const u=ii(r.rtl,this.x,this.width);for(t.x=Da(this,r.titleAlign,r),n.textAlign=u.textAlign(r.titleAlign),n.textBaseline="middle",a=Ce(r.titleFont),s=r.titleSpacing,n.fillStyle=r.titleColor,n.font=a.string,l=0;l<o;++l)n.fillText(i[l],u.x(t.x),t.y+a.lineHeight/2),t.y+=a.lineHeight+s,l+1===o&&(t.y+=r.titleMarginBottom-s)}}_drawColorBox(t,n,r,i,o){const a=this.labelColors[r],s=this.labelPointStyles[r],{boxHeight:l,boxWidth:u}=o,c=Ce(o.bodyFont),f=Da(this,"left",o),d=i.x(f),h=l<c.lineHeight?(c.lineHeight-l)/2:0,v=n.y+h;if(o.usePointStyle){const m={radius:Math.min(u,l)/2,pointStyle:s.pointStyle,rotation:s.rotation,borderWidth:1},y=i.leftForLtr(d,u)+u/2,p=v+l/2;t.strokeStyle=o.multiKeyBackground,t.fillStyle=o.multiKeyBackground,Wc(t,m,y,p),t.strokeStyle=a.borderColor,t.fillStyle=a.backgroundColor,Wc(t,m,y,p)}else{t.lineWidth=J(a.borderWidth)?Math.max(...Object.values(a.borderWidth)):a.borderWidth||1,t.strokeStyle=a.borderColor,t.setLineDash(a.borderDash||[]),t.lineDashOffset=a.borderDashOffset||0;const m=i.leftForLtr(d,u),y=i.leftForLtr(i.xPlus(d,1),u-2),p=ri(a.borderRadius);Object.values(p).some(g=>g!==0)?(t.beginPath(),t.fillStyle=o.multiKeyBackground,Gs(t,{x:m,y:v,w:u,h:l,radius:p}),t.fill(),t.stroke(),t.fillStyle=a.backgroundColor,t.beginPath(),Gs(t,{x:y,y:v+1,w:u-2,h:l-2,radius:p}),t.fill()):(t.fillStyle=o.multiKeyBackground,t.fillRect(m,v,u,l),t.strokeRect(m,v,u,l),t.fillStyle=a.backgroundColor,t.fillRect(y,v+1,u-2,l-2))}t.fillStyle=this.labelTextColors[r]}drawBody(t,n,r){const{body:i}=this,{bodySpacing:o,bodyAlign:a,displayColors:s,boxHeight:l,boxWidth:u,boxPadding:c}=r,f=Ce(r.bodyFont);let d=f.lineHeight,h=0;const v=ii(r.rtl,this.x,this.width),m=function(E){n.fillText(E,v.x(t.x+h),t.y+d/2),t.y+=d+o},y=v.textAlign(a);let p,g,b,$,_,k,w;for(n.textAlign=a,n.textBaseline="middle",n.font=f.string,t.x=Da(this,y,r),n.fillStyle=r.bodyColor,ee(this.beforeBody,m),h=s&&y!=="right"?a==="center"?u/2+c:u+2+c:0,$=0,k=i.length;$<k;++$){for(p=i[$],g=this.labelTextColors[$],n.fillStyle=g,ee(p.before,m),b=p.lines,s&&b.length&&(this._drawColorBox(n,t,$,v,r),d=Math.max(f.lineHeight,l)),_=0,w=b.length;_<w;++_)m(b[_]),d=f.lineHeight;ee(p.after,m)}h=0,d=f.lineHeight,ee(this.afterBody,m),t.y-=o}drawFooter(t,n,r){const i=this.footer,o=i.length;let a,s;if(o){const l=ii(r.rtl,this.x,this.width);for(t.x=Da(this,r.footerAlign,r),t.y+=r.footerMarginTop,n.textAlign=l.textAlign(r.footerAlign),n.textBaseline="middle",a=Ce(r.footerFont),n.fillStyle=r.footerColor,n.font=a.string,s=0;s<o;++s)n.fillText(i[s],l.x(t.x),t.y+a.lineHeight/2),t.y+=a.lineHeight+r.footerSpacing}}drawBackground(t,n,r,i){const{xAlign:o,yAlign:a}=this,{x:s,y:l}=t,{width:u,height:c}=r,{topLeft:f,topRight:d,bottomLeft:h,bottomRight:v}=ri(i.cornerRadius);n.fillStyle=i.backgroundColor,n.strokeStyle=i.borderColor,n.lineWidth=i.borderWidth,n.beginPath(),n.moveTo(s+f,l),a==="top"&&this.drawCaret(t,n,r,i),n.lineTo(s+u-d,l),n.quadraticCurveTo(s+u,l,s+u,l+d),a==="center"&&o==="right"&&this.drawCaret(t,n,r,i),n.lineTo(s+u,l+c-v),n.quadraticCurveTo(s+u,l+c,s+u-v,l+c),a==="bottom"&&this.drawCaret(t,n,r,i),n.lineTo(s+h,l+c),n.quadraticCurveTo(s,l+c,s,l+c-h),a==="center"&&o==="left"&&this.drawCaret(t,n,r,i),n.lineTo(s,l+f),n.quadraticCurveTo(s,l,s+f,l),n.closePath(),n.fill(),i.borderWidth>0&&n.stroke()}_updateAnimationTarget(t){const n=this.chart,r=this.$animations,i=r&&r.x,o=r&&r.y;if(i||o){const a=so[t.position].call(this,this._active,this._eventPosition);if(!a)return;const s=this._size=Wg(this,t),l=Object.assign({},a,this._size),u=Hg(n,t,l),c=Gg(t,l,u,n);(i._to!==c.x||o._to!==c.y)&&(this.xAlign=u.xAlign,this.yAlign=u.yAlign,this.width=s.width,this.height=s.height,this.caretX=a.x,this.caretY=a.y,this._resolveAnimations().update(this,c))}}_willRender(){return!!this.opacity}draw(t){const n=this.options.setContext(this.getContext());let r=this.opacity;if(!r)return;this._updateAnimationTarget(n);const i={width:this.width,height:this.height},o={x:this.x,y:this.y};r=Math.abs(r)<.001?0:r;const a=Ve(n.padding),s=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;n.enabled&&s&&(t.save(),t.globalAlpha=r,this.drawBackground(o,t,i,n),q1(t,n.textDirection),o.y+=a.top,this.drawTitle(o,t,n),this.drawBody(o,t,n),this.drawFooter(o,t,n),J1(t,n.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,n){const r=this._active,i=t.map(({datasetIndex:s,index:l})=>{const u=this.chart.getDatasetMeta(s);if(!u)throw new Error("Cannot find a dataset at index "+s);return{datasetIndex:s,element:u.data[l],index:l}}),o=!zs(r,i),a=this._positionChanged(i,n);(o||a)&&(this._active=i,this._eventPosition=n,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,n,r=!0){if(n&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const i=this.options,o=this._active||[],a=this._getActiveElements(t,o,n,r),s=this._positionChanged(a,t),l=n||!zs(a,o)||s;return l&&(this._active=a,(i.enabled||i.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,n))),l}_getActiveElements(t,n,r,i){const o=this.options;if(t.type==="mouseout")return[];if(!i)return n;const a=this.chart.getElementsAtEventForMode(t,o.mode,o,r);return o.reverse&&a.reverse(),a}_positionChanged(t,n){const{caretX:r,caretY:i,options:o}=this,a=so[o.position].call(this,t,n);return a!==!1&&(r!==a.x||i!==a.y)}}U(Xc,"positioners",so);var BE={id:"tooltip",_element:Xc,positioners:so,afterInit(e,t,n){n&&(e.tooltip=new Xc({chart:e,options:n}))},beforeUpdate(e,t,n){e.tooltip&&e.tooltip.initialize(n)},reset(e,t,n){e.tooltip&&e.tooltip.initialize(n)},afterDraw(e){const t=e.tooltip;if(t&&t._willRender()){const n={tooltip:t};if(e.notifyPlugins("beforeTooltipDraw",{...n,cancelable:!0})===!1)return;t.draw(e.ctx),e.notifyPlugins("afterTooltipDraw",n)}},afterEvent(e,t){if(e.tooltip){const n=t.replay;e.tooltip.handleEvent(t.event,n,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(e,t)=>t.bodyFont.size,boxWidth:(e,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:vb},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:e=>e!=="filter"&&e!=="itemSort"&&e!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};const UE=(e,t,n,r)=>(typeof t=="string"?(n=e.push(t)-1,r.unshift({index:n,label:t})):isNaN(t)&&(n=null),n);function VE(e,t,n,r){const i=e.indexOf(t);if(i===-1)return UE(e,t,n,r);const o=e.lastIndexOf(t);return i!==o?n:i}const WE=(e,t)=>e===null?null:At(Math.round(e),0,t);function Kg(e){const t=this.getLabels();return e>=0&&e<t.length?t[e]:e}class Kc extends xr{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const n=this._addedLabels;if(n.length){const r=this.getLabels();for(const{index:i,label:o}of n)r[i]===o&&r.splice(i,1);this._addedLabels=[]}super.init(t)}parse(t,n){if(se(t))return null;const r=this.getLabels();return n=isFinite(n)&&r[n]===t?n:VE(r,t,Y(n,t),this._addedLabels),WE(n,r.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:n}=this.getUserBounds();let{min:r,max:i}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(r=0),n||(i=this.getLabels().length-1)),this.min=r,this.max=i}buildTicks(){const t=this.min,n=this.max,r=this.options.offset,i=[];let o=this.getLabels();o=t===0&&n===o.length-1?o:o.slice(t,n+1),this._valueRange=Math.max(o.length-(r?0:1),1),this._startValue=this.min-(r?.5:0);for(let a=t;a<=n;a++)i.push({value:a});return i}getLabelForValue(t){return Kg.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const n=this.ticks;return t<0||t>n.length-1?null:this.getPixelForValue(n[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}U(Kc,"id","category"),U(Kc,"defaults",{ticks:{callback:Kg}});function HE(e,t){const n=[],{bounds:i,step:o,min:a,max:s,precision:l,count:u,maxTicks:c,maxDigits:f,includeBounds:d}=e,h=o||1,v=c-1,{min:m,max:y}=t,p=!se(a),g=!se(s),b=!se(u),$=(y-m)/(f+1);let _=eg((y-m)/v/h)*h,k,w,E,M;if(_<1e-14&&!p&&!g)return[{value:m},{value:y}];M=Math.ceil(y/_)-Math.floor(m/_),M>v&&(_=eg(M*_/v/h)*h),se(l)||(k=Math.pow(10,l),_=Math.ceil(_*k)/k),i==="ticks"?(w=Math.floor(m/_)*_,E=Math.ceil(y/_)*_):(w=m,E=y),p&&g&&o&&I2((s-a)/o,_/1e3)?(M=Math.round(Math.min((s-a)/_,c)),_=(s-a)/M,w=a,E=s):b?(w=p?a:w,E=g?s:E,M=u-1,_=(E-w)/M):(M=(E-w)/_,bo(M,Math.round(M),_/1e3)?M=Math.round(M):M=Math.ceil(M));const C=Math.max(tg(_),tg(w));k=Math.pow(10,se(l)?C:l),w=Math.round(w*k)/k,E=Math.round(E*k)/k;let x=0;for(p&&(d&&w!==a?(n.push({value:a}),w<a&&x++,bo(Math.round((w+x*_)*k)/k,a,Qg(a,$,e))&&x++):w<a&&x++);x<M;++x){const S=Math.round((w+x*_)*k)/k;if(g&&S>s)break;n.push({value:S})}return g&&d&&E!==s?n.length&&bo(n[n.length-1].value,s,Qg(s,$,e))?n[n.length-1].value=s:n.push({value:s}):(!g||E===s)&&n.push({value:E}),n}function Qg(e,t,{horizontal:n,minRotation:r}){const i=On(r),o=(n?Math.sin(i):Math.cos(i))||.001,a=.75*t*(""+e).length;return Math.min(t/o,a)}class Ks extends xr{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,n){return se(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:n,maxDefined:r}=this.getUserBounds();let{min:i,max:o}=this;const a=l=>i=n?i:l,s=l=>o=r?o:l;if(t){const l=pi(i),u=pi(o);l<0&&u<0?s(0):l>0&&u>0&&a(0)}if(i===o){let l=o===0?1:Math.abs(o*.05);s(o+l),t||a(i-l)}this.min=i,this.max=o}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:n,stepSize:r}=t,i;return r?(i=Math.ceil(this.max/r)-Math.floor(this.min/r)+1,i>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${r} would result generating up to ${i} ticks. Limiting to 1000.`),i=1e3)):(i=this.computeTickLimit(),n=n||11),n&&(i=Math.min(n,i)),i}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,n=t.ticks;let r=this.getTickLimit();r=Math.max(2,r);const i={maxTicks:r,bounds:t.bounds,min:t.min,max:t.max,precision:n.precision,step:n.stepSize,count:n.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:n.minRotation||0,includeBounds:n.includeBounds!==!1},o=this._range||this,a=HE(i,o);return t.bounds==="ticks"&&D1(a,this,"value"),t.reverse?(a.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),a}configure(){const t=this.ticks;let n=this.min,r=this.max;if(super.configure(),this.options.offset&&t.length){const i=(r-n)/Math.max(t.length-1,1)/2;n-=i,r+=i}this._startValue=n,this._endValue=r,this._valueRange=r-n}getLabelForValue(t){return Gd(t,this.chart.options.locale,this.options.ticks.format)}}class Qc extends Ks{determineDataLimits(){const{min:t,max:n}=this.getMinMax(!0);this.min=Oe(t)?t:0,this.max=Oe(n)?n:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),n=t?this.width:this.height,r=On(this.options.ticks.minRotation),i=(t?Math.sin(r):Math.cos(r))||.001,o=this._resolveTickFontOptions(0);return Math.ceil(n/Math.min(40,o.lineHeight/i))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}U(Qc,"id","linear"),U(Qc,"defaults",{ticks:{callback:_l.formatters.numeric}});const Yo=e=>Math.floor(Mn(e)),qn=(e,t)=>Math.pow(10,Yo(e)+t);function Zg(e){return e/Math.pow(10,Yo(e))===1}function qg(e,t,n){const r=Math.pow(10,n),i=Math.floor(e/r);return Math.ceil(t/r)-i}function GE(e,t){const n=t-e;let r=Yo(n);for(;qg(e,t,r)>10;)r++;for(;qg(e,t,r)<10;)r--;return Math.min(r,Yo(e))}function YE(e,{min:t,max:n}){t=ct(e.min,t);const r=[],i=Yo(t);let o=GE(t,n),a=o<0?Math.pow(10,Math.abs(o)):1;const s=Math.pow(10,o),l=i>o?Math.pow(10,i):0,u=Math.round((t-l)*a)/a,c=Math.floor((t-l)/s/10)*s*10;let f=Math.floor((u-c)/Math.pow(10,o)),d=ct(e.min,Math.round((l+c+f*Math.pow(10,o))*a)/a);for(;d<n;)r.push({value:d,major:Zg(d),significand:f}),f>=10?f=f<15?15:20:f++,f>=20&&(o++,f=2,a=o>=0?1:a),d=Math.round((l+c+f*Math.pow(10,o))*a)/a;const h=ct(e.max,d);return r.push({value:h,major:Zg(h),significand:f}),r}class Jg extends xr{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,n){const r=Ks.prototype.parse.apply(this,[t,n]);if(r===0){this._zero=!0;return}return Oe(r)&&r>0?r:null}determineDataLimits(){const{min:t,max:n}=this.getMinMax(!0);this.min=Oe(t)?Math.max(0,t):null,this.max=Oe(n)?Math.max(0,n):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!Oe(this._userMin)&&(this.min=t===qn(this.min,0)?qn(this.min,-1):qn(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:n}=this.getUserBounds();let r=this.min,i=this.max;const o=s=>r=t?r:s,a=s=>i=n?i:s;r===i&&(r<=0?(o(1),a(10)):(o(qn(r,-1)),a(qn(i,1)))),r<=0&&o(qn(i,-1)),i<=0&&a(qn(r,1)),this.min=r,this.max=i}buildTicks(){const t=this.options,n={min:this._userMin,max:this._userMax},r=YE(n,this);return t.bounds==="ticks"&&D1(r,this,"value"),t.reverse?(r.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),r}getLabelForValue(t){return t===void 0?"0":Gd(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=Mn(t),this._valueRange=Mn(this.max)-Mn(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(Mn(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const n=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+n*this._valueRange)}}U(Jg,"id","logarithmic"),U(Jg,"defaults",{ticks:{callback:_l.formatters.logarithmic,major:{enabled:!0}}});function Zc(e){const t=e.ticks;if(t.display&&e.display){const n=Ve(t.backdropPadding);return Y(t.font&&t.font.size,_e.font.size)+n.height}return 0}function XE(e,t,n){return n=ge(n)?n:[n],{w:eS(e,t.string,n),h:n.length*t.lineHeight}}function ev(e,t,n,r,i){return e===r||e===i?{start:t-n/2,end:t+n/2}:e<r||e>i?{start:t-n,end:t}:{start:t,end:t+n}}function KE(e){const t={l:e.left+e._padding.left,r:e.right-e._padding.right,t:e.top+e._padding.top,b:e.bottom-e._padding.bottom},n=Object.assign({},t),r=[],i=[],o=e._pointLabels.length,a=e.options.pointLabels,s=a.centerPointLabels?Se/o:0;for(let l=0;l<o;l++){const u=a.setContext(e.getPointLabelContext(l));i[l]=u.padding;const c=e.getPointPosition(l,e.drawingArea+i[l],s),f=Ce(u.font),d=XE(e.ctx,f,e._pointLabels[l]);r[l]=d;const h=Ft(e.getIndexAngle(l)+s),v=Math.round(Ud(h)),m=ev(v,c.x,d.w,0,180),y=ev(v,c.y,d.h,90,270);QE(n,t,h,m,y)}e.setCenterPoint(t.l-n.l,n.r-t.r,t.t-n.t,n.b-t.b),e._pointLabelItems=JE(e,r,i)}function QE(e,t,n,r,i){const o=Math.abs(Math.sin(n)),a=Math.abs(Math.cos(n));let s=0,l=0;r.start<t.l?(s=(t.l-r.start)/o,e.l=Math.min(e.l,t.l-s)):r.end>t.r&&(s=(r.end-t.r)/o,e.r=Math.max(e.r,t.r+s)),i.start<t.t?(l=(t.t-i.start)/a,e.t=Math.min(e.t,t.t-l)):i.end>t.b&&(l=(i.end-t.b)/a,e.b=Math.max(e.b,t.b+l))}function ZE(e,t,n){const r=e.drawingArea,{extra:i,additionalAngle:o,padding:a,size:s}=n,l=e.getPointPosition(t,r+i+a,o),u=Math.round(Ud(Ft(l.angle+gt))),c=nA(l.y,s.h,u),f=eA(u),d=tA(l.x,s.w,f);return{visible:!0,x:l.x,y:c,textAlign:f,left:d,top:c,right:d+s.w,bottom:c+s.h}}function qE(e,t){if(!t)return!0;const{left:n,top:r,right:i,bottom:o}=e;return!(un({x:n,y:r},t)||un({x:n,y:o},t)||un({x:i,y:r},t)||un({x:i,y:o},t))}function JE(e,t,n){const r=[],i=e._pointLabels.length,o=e.options,{centerPointLabels:a,display:s}=o.pointLabels,l={extra:Zc(o)/2,additionalAngle:a?Se/i:0};let u;for(let c=0;c<i;c++){l.padding=n[c],l.size=t[c];const f=ZE(e,c,l);r.push(f),s==="auto"&&(f.visible=qE(f,u),f.visible&&(u=f))}return r}function eA(e){return e===0||e===180?"center":e<180?"left":"right"}function tA(e,t,n){return n==="right"?e-=t:n==="center"&&(e-=t/2),e}function nA(e,t,n){return n===90||n===270?e-=t/2:(n>270||n<90)&&(e-=t),e}function rA(e,t,n){const{left:r,top:i,right:o,bottom:a}=n,{backdropColor:s}=t;if(!se(s)){const l=ri(t.borderRadius),u=Ve(t.backdropPadding);e.fillStyle=s;const c=r-u.left,f=i-u.top,d=o-r+u.width,h=a-i+u.height;Object.values(l).some(v=>v!==0)?(e.beginPath(),Gs(e,{x:c,y:f,w:d,h,radius:l}),e.fill()):e.fillRect(c,f,d,h)}}function iA(e,t){const{ctx:n,options:{pointLabels:r}}=e;for(let i=t-1;i>=0;i--){const o=e._pointLabelItems[i];if(!o.visible)continue;const a=r.setContext(e.getPointLabelContext(i));rA(n,a,o);const s=Ce(a.font),{x:l,y:u,textAlign:c}=o;$r(n,e._pointLabels[i],l,u+s.lineHeight/2,s,{color:a.color,textAlign:c,textBaseline:"middle"})}}function mb(e,t,n,r){const{ctx:i}=e;if(n)i.arc(e.xCenter,e.yCenter,t,0,Pt);else{let o=e.getPointPosition(0,t);i.moveTo(o.x,o.y);for(let a=1;a<r;a++)o=e.getPointPosition(a,t),i.lineTo(o.x,o.y)}}function oA(e,t,n,r,i){const o=e.ctx,a=t.circular,{color:s,lineWidth:l}=t;!a&&!r||!s||!l||n<0||(o.save(),o.strokeStyle=s,o.lineWidth=l,o.setLineDash(i.dash),o.lineDashOffset=i.dashOffset,o.beginPath(),mb(e,n,a,r),o.closePath(),o.stroke(),o.restore())}function aA(e,t,n){return Xn(e,{label:n,index:t,type:"pointLabel"})}class ja extends Ks{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=Ve(Zc(this.options)/2),n=this.width=this.maxWidth-t.width,r=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+n/2+t.left),this.yCenter=Math.floor(this.top+r/2+t.top),this.drawingArea=Math.floor(Math.min(n,r)/2)}determineDataLimits(){const{min:t,max:n}=this.getMinMax(!1);this.min=Oe(t)&&!isNaN(t)?t:0,this.max=Oe(n)&&!isNaN(n)?n:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Zc(this.options))}generateTickLabels(t){Ks.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((n,r)=>{const i=ne(this.options.pointLabels.callback,[n,r],this);return i||i===0?i:""}).filter((n,r)=>this.chart.getDataVisibility(r))}fit(){const t=this.options;t.display&&t.pointLabels.display?KE(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,n,r,i){this.xCenter+=Math.floor((t-n)/2),this.yCenter+=Math.floor((r-i)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,n,r,i))}getIndexAngle(t){const n=Pt/(this._pointLabels.length||1),r=this.options.startAngle||0;return Ft(t*n+On(r))}getDistanceFromCenterForValue(t){if(se(t))return NaN;const n=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*n:(t-this.min)*n}getValueForDistanceFromCenter(t){if(se(t))return NaN;const n=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-n:this.min+n}getPointLabelContext(t){const n=this._pointLabels||[];if(t>=0&&t<n.length){const r=n[t];return aA(this.getContext(),t,r)}}getPointPosition(t,n,r=0){const i=this.getIndexAngle(t)-gt+r;return{x:Math.cos(i)*n+this.xCenter,y:Math.sin(i)*n+this.yCenter,angle:i}}getPointPositionForValue(t,n){return this.getPointPosition(t,this.getDistanceFromCenterForValue(n))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:n,top:r,right:i,bottom:o}=this._pointLabelItems[t];return{left:n,top:r,right:i,bottom:o}}drawBackground(){const{backgroundColor:t,grid:{circular:n}}=this.options;if(t){const r=this.ctx;r.save(),r.beginPath(),mb(this,this.getDistanceFromCenterForValue(this._endValue),n,this._pointLabels.length),r.closePath(),r.fillStyle=t,r.fill(),r.restore()}}drawGrid(){const t=this.ctx,n=this.options,{angleLines:r,grid:i,border:o}=n,a=this._pointLabels.length;let s,l,u;if(n.pointLabels.display&&iA(this,a),i.display&&this.ticks.forEach((c,f)=>{if(f!==0){l=this.getDistanceFromCenterForValue(c.value);const d=this.getContext(f),h=i.setContext(d),v=o.setContext(d);oA(this,h,l,a,v)}}),r.display){for(t.save(),s=a-1;s>=0;s--){const c=r.setContext(this.getPointLabelContext(s)),{color:f,lineWidth:d}=c;!d||!f||(t.lineWidth=d,t.strokeStyle=f,t.setLineDash(c.borderDash),t.lineDashOffset=c.borderDashOffset,l=this.getDistanceFromCenterForValue(n.ticks.reverse?this.min:this.max),u=this.getPointPosition(s,l),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(u.x,u.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,n=this.options,r=n.ticks;if(!r.display)return;const i=this.getIndexAngle(0);let o,a;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(i),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((s,l)=>{if(l===0&&!n.reverse)return;const u=r.setContext(this.getContext(l)),c=Ce(u.font);if(o=this.getDistanceFromCenterForValue(this.ticks[l].value),u.showLabelBackdrop){t.font=c.string,a=t.measureText(s.label).width,t.fillStyle=u.backdropColor;const f=Ve(u.backdropPadding);t.fillRect(-a/2-f.left,-o-c.size/2-f.top,a+f.width,c.size+f.height)}$r(t,s.label,0,-o,c,{color:u.color,strokeColor:u.textStrokeColor,strokeWidth:u.textStrokeWidth})}),t.restore()}drawTitle(){}}U(ja,"id","radialLinear"),U(ja,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:_l.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),U(ja,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),U(ja,"descriptors",{angleLines:{_fallback:"grid"}});const Sl={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},et=Object.keys(Sl);function tv(e,t){return e-t}function nv(e,t){if(se(t))return null;const n=e._adapter,{parser:r,round:i,isoWeekday:o}=e._parseOpts;let a=t;return typeof r=="function"&&(a=r(a)),Oe(a)||(a=typeof r=="string"?n.parse(a,r):n.parse(a)),a===null?null:(i&&(a=i==="week"&&(Ho(o)||o===!0)?n.startOf(a,"isoWeek",o):n.startOf(a,i)),+a)}function rv(e,t,n,r){const i=et.length;for(let o=et.indexOf(e);o<i-1;++o){const a=Sl[et[o]],s=a.steps?a.steps:Number.MAX_SAFE_INTEGER;if(a.common&&Math.ceil((n-t)/(s*a.size))<=r)return et[o]}return et[i-1]}function sA(e,t,n,r,i){for(let o=et.length-1;o>=et.indexOf(n);o--){const a=et[o];if(Sl[a].common&&e._adapter.diff(i,r,a)>=t-1)return a}return et[n?et.indexOf(n):0]}function lA(e){for(let t=et.indexOf(e)+1,n=et.length;t<n;++t)if(Sl[et[t]].common)return et[t]}function iv(e,t,n){if(!n)e[t]=!0;else if(n.length){const{lo:r,hi:i}=Vd(n,t),o=n[r]>=t?n[r]:n[i];e[o]=!0}}function uA(e,t,n,r){const i=e._adapter,o=+i.startOf(t[0].value,r),a=t[t.length-1].value;let s,l;for(s=o;s<=a;s=+i.add(s,1,r))l=n[s],l>=0&&(t[l].major=!0);return t}function ov(e,t,n){const r=[],i={},o=t.length;let a,s;for(a=0;a<o;++a)s=t[a],i[s]=a,r.push({value:s,major:!1});return o===0||!n?r:uA(e,r,i,n)}class Qs extends xr{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,n={}){const r=t.time||(t.time={}),i=this._adapter=new sk._date(t.adapters.date);i.init(n),yo(r.displayFormats,i.formats()),this._parseOpts={parser:r.parser,round:r.round,isoWeekday:r.isoWeekday},super.init(t),this._normalized=n.normalized}parse(t,n){return t===void 0?null:nv(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,n=this._adapter,r=t.time.unit||"day";let{min:i,max:o,minDefined:a,maxDefined:s}=this.getUserBounds();function l(u){!a&&!isNaN(u.min)&&(i=Math.min(i,u.min)),!s&&!isNaN(u.max)&&(o=Math.max(o,u.max))}(!a||!s)&&(l(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&l(this.getMinMax(!1))),i=Oe(i)&&!isNaN(i)?i:+n.startOf(Date.now(),r),o=Oe(o)&&!isNaN(o)?o:+n.endOf(Date.now(),r)+1,this.min=Math.min(i,o-1),this.max=Math.max(i+1,o)}_getLabelBounds(){const t=this.getLabelTimestamps();let n=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;return t.length&&(n=t[0],r=t[t.length-1]),{min:n,max:r}}buildTicks(){const t=this.options,n=t.time,r=t.ticks,i=r.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&i.length&&(this.min=this._userMin||i[0],this.max=this._userMax||i[i.length-1]);const o=this.min,a=this.max,s=D2(i,o,a);return this._unit=n.unit||(r.autoSkip?rv(n.minUnit,this.min,this.max,this._getLabelCapacity(o)):sA(this,s.length,n.minUnit,this.min,this.max)),this._majorUnit=!r.major.enabled||this._unit==="year"?void 0:lA(this._unit),this.initOffsets(i),t.reverse&&s.reverse(),ov(this,s,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let n=0,r=0,i,o;this.options.offset&&t.length&&(i=this.getDecimalForValue(t[0]),t.length===1?n=1-i:n=(this.getDecimalForValue(t[1])-i)/2,o=this.getDecimalForValue(t[t.length-1]),t.length===1?r=o:r=(o-this.getDecimalForValue(t[t.length-2]))/2);const a=t.length<3?.5:.25;n=At(n,0,a),r=At(r,0,a),this._offsets={start:n,end:r,factor:1/(n+1+r)}}_generate(){const t=this._adapter,n=this.min,r=this.max,i=this.options,o=i.time,a=o.unit||rv(o.minUnit,n,r,this._getLabelCapacity(n)),s=Y(i.ticks.stepSize,1),l=a==="week"?o.isoWeekday:!1,u=Ho(l)||l===!0,c={};let f=n,d,h;if(u&&(f=+t.startOf(f,"isoWeek",l)),f=+t.startOf(f,u?"day":a),t.diff(r,n,a)>1e5*s)throw new Error(n+" and "+r+" are too far apart with stepSize of "+s+" "+a);const v=i.ticks.source==="data"&&this.getDataTimestamps();for(d=f,h=0;d<r;d=+t.add(d,s,a),h++)iv(c,d,v);return(d===r||i.bounds==="ticks"||h===1)&&iv(c,d,v),Object.keys(c).sort(tv).map(m=>+m)}getLabelForValue(t){const n=this._adapter,r=this.options.time;return r.tooltipFormat?n.format(t,r.tooltipFormat):n.format(t,r.displayFormats.datetime)}format(t,n){const i=this.options.time.displayFormats,o=this._unit,a=n||i[o];return this._adapter.format(t,a)}_tickFormatFunction(t,n,r,i){const o=this.options,a=o.ticks.callback;if(a)return ne(a,[t,n,r],this);const s=o.time.displayFormats,l=this._unit,u=this._majorUnit,c=l&&s[l],f=u&&s[u],d=r[n],h=u&&f&&d&&d.major;return this._adapter.format(t,i||(h?f:c))}generateTickLabels(t){let n,r,i;for(n=0,r=t.length;n<r;++n)i=t[n],i.label=this._tickFormatFunction(i.value,n,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const n=this._offsets,r=this.getDecimalForValue(t);return this.getPixelForDecimal((n.start+r)*n.factor)}getValueForPixel(t){const n=this._offsets,r=this.getDecimalForPixel(t)/n.factor-n.end;return this.min+r*(this.max-this.min)}_getLabelSize(t){const n=this.options.ticks,r=this.ctx.measureText(t).width,i=On(this.isHorizontal()?n.maxRotation:n.minRotation),o=Math.cos(i),a=Math.sin(i),s=this._resolveTickFontOptions(0).size;return{w:r*o+s*a,h:r*a+s*o}}_getLabelCapacity(t){const n=this.options.time,r=n.displayFormats,i=r[n.unit]||r.millisecond,o=this._tickFormatFunction(t,0,ov(this,[t],this._majorUnit),i),a=this._getLabelSize(o),s=Math.floor(this.isHorizontal()?this.width/a.w:this.height/a.h)-1;return s>0?s:1}getDataTimestamps(){let t=this._cache.data||[],n,r;if(t.length)return t;const i=this.getMatchingVisibleMetas();if(this._normalized&&i.length)return this._cache.data=i[0].controller.getAllParsedValues(this);for(n=0,r=i.length;n<r;++n)t=t.concat(i[n].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let n,r;if(t.length)return t;const i=this.getLabels();for(n=0,r=i.length;n<r;++n)t.push(nv(this,i[n]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return z2(t.sort(tv))}}U(Qs,"id","time"),U(Qs,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function za(e,t,n){let r=0,i=e.length-1,o,a,s,l;n?(t>=e[r].pos&&t<=e[i].pos&&({lo:r,hi:i}=sr(e,"pos",t)),{pos:o,time:s}=e[r],{pos:a,time:l}=e[i]):(t>=e[r].time&&t<=e[i].time&&({lo:r,hi:i}=sr(e,"time",t)),{time:o,pos:s}=e[r],{time:a,pos:l}=e[i]);const u=a-o;return u?s+(l-s)*(t-o)/u:s}class av extends Qs{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),n=this._table=this.buildLookupTable(t);this._minPos=za(n,this.min),this._tableRange=za(n,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:n,max:r}=this,i=[],o=[];let a,s,l,u,c;for(a=0,s=t.length;a<s;++a)u=t[a],u>=n&&u<=r&&i.push(u);if(i.length<2)return[{time:n,pos:0},{time:r,pos:1}];for(a=0,s=i.length;a<s;++a)c=i[a+1],l=i[a-1],u=i[a],Math.round((c+l)/2)!==u&&o.push({time:u,pos:a/(s-1)});return o}_generate(){const t=this.min,n=this.max;let r=super.getDataTimestamps();return(!r.includes(t)||!r.length)&&r.splice(0,0,t),(!r.includes(n)||r.length===1)&&r.push(n),r.sort((i,o)=>i-o)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const n=this.getDataTimestamps(),r=this.getLabelTimestamps();return n.length&&r.length?t=this.normalize(n.concat(r)):t=n.length?n:r,t=this._cache.all=t,t}getDecimalForValue(t){return(za(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const n=this._offsets,r=this.getDecimalForPixel(t)/n.factor-n.end;return za(this._table,r*this._tableRange+this._minPos,!0)}}U(av,"id","timeseries"),U(av,"defaults",Qs.defaults);const yb="label";function sv(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function cA(e,t){const n=e.options;n&&t&&Object.assign(n,t)}function bb(e,t){e.labels=t}function $b(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:yb;const r=[];e.datasets=t.map(i=>{const o=e.datasets.find(a=>a[n]===i[n]);return!o||!i.data||r.includes(o)?{...i}:(r.push(o),Object.assign(o,i),o)})}function fA(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:yb;const n={labels:[],datasets:[]};return bb(n,e.labels),$b(n,e.datasets,t),n}function dA(e,t){const{height:n=150,width:r=300,redraw:i=!1,datasetIdKey:o,type:a,data:s,options:l,plugins:u=[],fallbackContent:c,updateMode:f,...d}=e,h=G.useRef(null),v=G.useRef(),m=()=>{h.current&&(v.current=new xl(h.current,{type:a,data:fA(s,o),options:l&&{...l},plugins:u}),sv(t,v.current))},y=()=>{sv(t,null),v.current&&(v.current.destroy(),v.current=null)};return G.useEffect(()=>{!i&&v.current&&l&&cA(v.current,l)},[i,l]),G.useEffect(()=>{!i&&v.current&&bb(v.current.config.data,s.labels)},[i,s.labels]),G.useEffect(()=>{!i&&v.current&&s.datasets&&$b(v.current.config.data,s.datasets,o)},[i,s.datasets]),G.useEffect(()=>{v.current&&(i?(y(),setTimeout(m)):v.current.update(f))},[i,l,s.labels,s.datasets,f]),G.useEffect(()=>{v.current&&(y(),setTimeout(m))},[a]),G.useEffect(()=>(m(),()=>y()),[]),Yf.createElement("canvas",Object.assign({ref:h,role:"img",height:n,width:r},d),c)}const hA=G.forwardRef(dA);function pA(e,t){return xl.register(t),G.forwardRef((n,r)=>Yf.createElement(hA,Object.assign({},n,{ref:r,type:e})))}const Ba=pA("line",cs);/**
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
*/var gA=typeof Object.defineProperty=="function"?Object.defineProperty:null,vA=gA;/**
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
*/var mA=vA;function yA(){try{return mA({},"x",{}),!0}catch{return!1}}var bA=yA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $A=Object.defineProperty,_A=$A;/**
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
*/function wA(e){return typeof e=="number"}var _b=wA;/**
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
*/function xA(e){return e[0]==="-"}function lv(e){var t="",n;for(n=0;n<e;n++)t+="0";return t}function SA(e,t,n){var r=!1,i=t-e.length;return i<0||(xA(e)&&(r=!0,e=e.substr(1)),e=n?e+lv(i):lv(i)+e,r&&(e="-"+e)),e}var wb=SA;/**
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
*/var kA=_b,uv=wb,EA=String.prototype.toLowerCase,cv=String.prototype.toUpperCase;function AA(e){var t,n,r;switch(e.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;case"d":case"i":case"u":default:t=10;break}if(n=e.arg,r=parseInt(n,10),!isFinite(r)){if(!kA(n))throw new Error("invalid integer. Value: "+n);r=0}return r<0&&(e.specifier==="u"||t!==10)&&(r=4294967295+r+1),r<0?(n=(-r).toString(t),e.precision&&(n=uv(n,e.precision,e.padRight)),n="-"+n):(n=r.toString(t),!r&&!e.precision?n="":e.precision&&(n=uv(n,e.precision,e.padRight)),e.sign&&(n=e.sign+n)),t===16&&(e.alternate&&(n="0x"+n),n=e.specifier===cv.call(e.specifier)?cv.call(n):EA.call(n)),t===8&&e.alternate&&n.charAt(0)!=="0"&&(n="0"+n),n}var TA=AA;/**
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
*/function CA(e){return typeof e=="string"}var PA=CA;/**
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
*/var MA=_b,OA=Math.abs,IA=String.prototype.toLowerCase,fv=String.prototype.toUpperCase,Jn=String.prototype.replace,LA=/e\+(\d)$/,NA=/e-(\d)$/,RA=/^(\d+)$/,FA=/^(\d+)e/,DA=/\.0$/,jA=/\.0*e/,zA=/(\..*[^0])0*e/;function BA(e){var t,n,r=parseFloat(e.arg);if(!isFinite(r)){if(!MA(e.arg))throw new Error("invalid floating-point number. Value: "+n);r=e.arg}switch(e.specifier){case"e":case"E":n=r.toExponential(e.precision);break;case"f":case"F":n=r.toFixed(e.precision);break;case"g":case"G":OA(r)<1e-4?(t=e.precision,t>0&&(t-=1),n=r.toExponential(t)):n=r.toPrecision(e.precision),e.alternate||(n=Jn.call(n,zA,"$1e"),n=Jn.call(n,jA,"e"),n=Jn.call(n,DA,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=Jn.call(n,LA,"e+0$1"),n=Jn.call(n,NA,"e-0$1"),e.alternate&&(n=Jn.call(n,RA,"$1."),n=Jn.call(n,FA,"$1.e")),r>=0&&e.sign&&(n=e.sign+n),n=e.specifier===fv.call(e.specifier)?fv.call(n):IA.call(n),n}var UA=BA;/**
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
*/function dv(e){var t="",n;for(n=0;n<e;n++)t+=" ";return t}function VA(e,t,n){var r=t-e.length;return r<0||(e=n?e+dv(r):dv(r)+e),e}var WA=VA;/**
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
*/var HA=TA,GA=PA,YA=UA,XA=WA,KA=wb,QA=String.fromCharCode,Ua=isNaN,ZA=Array.isArray;function qA(e){var t={};return t.specifier=e.specifier,t.precision=e.precision===void 0?1:e.precision,t.width=e.width,t.flags=e.flags||"",t.mapping=e.mapping,t}function JA(e){var t,n,r,i,o,a,s,l,u;if(!ZA(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",s=1,l=0;l<e.length;l++)if(r=e[l],GA(r))a+=r;else{if(t=r.precision!==void 0,r=qA(r),!r.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+r+"`.");for(r.mapping&&(s=r.mapping),n=r.flags,u=0;u<n.length;u++)switch(i=n.charAt(u),i){case" ":r.sign=" ";break;case"+":r.sign="+";break;case"-":r.padRight=!0,r.padZeros=!1;break;case"0":r.padZeros=n.indexOf("-")<0;break;case"#":r.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if(r.width==="*"){if(r.width=parseInt(arguments[s],10),s+=1,Ua(r.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+r.width+"`.");r.width<0&&(r.padRight=!0,r.width=-r.width)}if(t&&r.precision==="*"){if(r.precision=parseInt(arguments[s],10),s+=1,Ua(r.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+r.precision+"`.");r.precision<0&&(r.precision=1,t=!1)}switch(r.arg=arguments[s],r.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(r.padZeros=!1),r.arg=HA(r);break;case"s":r.maxWidth=t?r.precision:-1;break;case"c":if(!Ua(r.arg)){if(o=parseInt(r.arg,10),o<0||o>127)throw new Error("invalid character code. Value: "+r.arg);r.arg=Ua(o)?String(r.arg):QA(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(r.precision=6),r.arg=YA(r);break;default:throw new Error("invalid specifier: "+r.specifier)}r.maxWidth>=0&&r.arg.length>r.maxWidth&&(r.arg=r.arg.substring(0,r.maxWidth)),r.padZeros?r.arg=KA(r.arg,r.width||r.precision,r.padRight):r.width&&(r.arg=XA(r.arg,r.width,r.padRight)),a+=r.arg||"",s+=1}return a}var eT=JA;/**
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
*/var tT=eT,nT=tT;/**
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
*/var Va=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function rT(e){var t={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return e[4]==="."&&e[5]===void 0&&(t.precision="1"),t}function iT(e){var t,n,r,i;for(n=[],i=0,r=Va.exec(e);r;)t=e.slice(i,Va.lastIndex-r[0].length),t.length&&n.push(t),n.push(rT(r)),i=Va.lastIndex,r=Va.exec(e);return t=e.slice(i),t.length&&n.push(t),n}var oT=iT;/**
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
*/var aT=oT,sT=aT;/**
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
*/function lT(e){return typeof e=="string"}var uT=lT;/**
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
*/var cT=nT,fT=sT,dT=uT;function xb(e){var t,n,r;if(!dT(e))throw new TypeError(xb("invalid argument. First argument must be a string. Value: `%s`.",e));for(t=fT(e),n=new Array(arguments.length),n[0]=t,r=1;r<n.length;r++)n[r]=arguments[r];return cT.apply(null,n)}var hT=xb;/**
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
*/var pT=hT,ie=pT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hv=ie,Si=Object.prototype,pv=Si.toString,gv=Si.__defineGetter__,vv=Si.__defineSetter__,gT=Si.__lookupGetter__,vT=Si.__lookupSetter__;function mT(e,t,n){var r,i,o,a;if(typeof e!="object"||e===null||pv.call(e)==="[object Array]")throw new TypeError(hv("invalid argument. First argument must be an object. Value: `%s`.",e));if(typeof n!="object"||n===null||pv.call(n)==="[object Array]")throw new TypeError(hv("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if(i="value"in n,i&&(gT.call(e,t)||vT.call(e,t)?(r=e.__proto__,e.__proto__=Si,delete e[t],e[t]=n.value,e.__proto__=r):e[t]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&gv&&gv.call(e,t,n.get),a&&vv&&vv.call(e,t,n.set),e}var yT=mT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bT=bA,$T=_A,_T=yT,qc;bT()?qc=$T:qc=_T;var eh=qc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wT=eh;function xT(e,t,n){wT(e,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var ST=xT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kT=ST,Ut=kT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ET=eh;function AT(e,t,n){ET(e,t,{configurable:!1,enumerable:!1,get:n})}var TT=AT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var CT=TT,Sb=CT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var PT=eh;function MT(e,t,n,r){PT(e,t,{configurable:!1,enumerable:!1,get:n,set:r})}var OT=MT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var IT=OT,kb=IT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function LT(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}var NT=LT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var RT=NT,FT=RT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var DT=FT,jT=DT();function zT(){return jT&&typeof Symbol.toStringTag=="symbol"}var BT=zT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var UT=BT,th=UT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var VT=Object.prototype.toString,Eb=VT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var WT=Eb;function HT(e){return WT.call(e)}var GT=HT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var YT=Object.prototype.hasOwnProperty;function XT(e,t){return e==null?!1:YT.call(e,t)}var KT=XT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var QT=KT,kl=QT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ZT=typeof Symbol=="function"?Symbol:void 0,qT=ZT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var JT=qT,Sr=JT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mv=Sr,eC=typeof mv=="function"?mv.toStringTag:"",tC=eC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nC=kl,Hi=tC,Su=Eb;function rC(e){var t,n,r;if(e==null)return Su.call(e);n=e[Hi],t=nC(e,Hi);try{e[Hi]=void 0}catch{return Su.call(e)}return r=Su.call(e),t?e[Hi]=n:delete e[Hi],r}var iC=rC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oC=th,aC=GT,sC=iC,Jc;oC()?Jc=sC:Jc=aC;var lt=Jc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lC=lt,ef;function uC(e){return lC(e)==="[object Array]"}Array.isArray?ef=Array.isArray:ef=uC;var cC=ef;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fC=cC,dC=fC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hC=dC;function pC(e){return typeof e=="object"&&e!==null&&!hC(e)}var gC=pC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vC=gC,mC=vC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yC=/./,bC=yC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function $C(e){return typeof e=="boolean"}var Ab=$C;/**
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
*/var _C=Boolean,wC=_C;/**
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
*/var xC=wC,nh=xC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var SC=Boolean.prototype.toString,kC=SC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var EC=kC;function AC(e){try{return EC.call(e),!0}catch{return!1}}var TC=AC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var CC=th,PC=lt,MC=nh,OC=TC,IC=CC();function LC(e){return typeof e=="object"?e instanceof MC?!0:IC?OC(e):PC(e)==="[object Boolean]":!1}var Tb=LC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var NC=Ab,RC=Tb;function FC(e){return NC(e)||RC(e)}var DC=FC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cb=Ut,rh=DC,jC=Ab,zC=Tb;Cb(rh,"isPrimitive",jC);Cb(rh,"isObject",zC);var Pb=rh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function BC(){return new Function("return this;")()}var UC=BC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var VC=typeof self=="object"?self:null,WC=VC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var HC=typeof window=="object"?window:null,GC=HC;/**
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
*/var YC=typeof globalThis=="object"?globalThis:null,XC=YC;/**
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
*/var KC=Pb.isPrimitive,QC=ie,ZC=UC,yv=WC,bv=GC,$v=XC;function qC(e){if(arguments.length){if(!KC(e))throw new TypeError(QC("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return ZC()}if($v)return $v;if(yv)return yv;if(bv)return bv;throw new Error("unexpected error. Unable to resolve global object.")}var JC=qC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e3=JC,_v=e3(),t3=_v.document&&_v.document.childNodes,n3=t3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r3=Int8Array,i3=r3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var o3=bC,a3=n3,s3=i3;function l3(){return typeof o3=="function"||typeof s3=="object"||typeof a3=="function"}var u3=l3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function c3(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}var f3=c3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var d3=f3,h3=d3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var p3=h3,g3=p3();function v3(){return g3&&typeof Symbol.toStringTag=="symbol"}var m3=v3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y3=m3,b3=y3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $3=Object.prototype.toString,Mb=$3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _3=Mb;function w3(e){return _3.call(e)}var x3=w3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var S3=Object.prototype.hasOwnProperty;function k3(e,t){return e==null?!1:S3.call(e,t)}var E3=k3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var A3=E3,T3=A3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wv=Sr,C3=typeof wv=="function"?wv.toStringTag:"",P3=C3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var M3=T3,Gi=P3,ku=Mb;function O3(e){var t,n,r;if(e==null)return ku.call(e);n=e[Gi],t=M3(e,Gi);try{e[Gi]=void 0}catch{return ku.call(e)}return r=ku.call(e),t?e[Gi]=n:delete e[Gi],r}var I3=O3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var L3=b3,N3=x3,R3=I3,tf;L3()?tf=R3:tf=N3;var Ob=tf;/**
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
*/var F3=typeof Object.defineProperty=="function"?Object.defineProperty:null,D3=F3;/**
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
*/var j3=D3;function z3(){try{return j3({},"x",{}),!0}catch{return!1}}var B3=z3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U3=Object.defineProperty,V3=U3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xv=ie,ki=Object.prototype,Sv=ki.toString,kv=ki.__defineGetter__,Ev=ki.__defineSetter__,W3=ki.__lookupGetter__,H3=ki.__lookupSetter__;function G3(e,t,n){var r,i,o,a;if(typeof e!="object"||e===null||Sv.call(e)==="[object Array]")throw new TypeError(xv("invalid argument. First argument must be an object. Value: `%s`.",e));if(typeof n!="object"||n===null||Sv.call(n)==="[object Array]")throw new TypeError(xv("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if(i="value"in n,i&&(W3.call(e,t)||H3.call(e,t)?(r=e.__proto__,e.__proto__=ki,delete e[t],e[t]=n.value,e.__proto__=r):e[t]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&kv&&kv.call(e,t,n.get),a&&Ev&&Ev.call(e,t,n.set),e}var Y3=G3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var X3=B3,K3=V3,Q3=Y3,nf;X3()?nf=K3:nf=Q3;var Z3=nf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var q3=Z3;function J3(e,t,n){q3(e,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var eP=J3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tP=eP,Ib=tP;/**
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
*/function nP(){return/^\s*function\s*([^(]*)/i}var Lb=nP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rP=Lb,iP=rP(),oP=iP;/**
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
*/var aP=Ib,Nb=Lb,sP=oP;aP(Nb,"REGEXP",sP);var lP=Nb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uP=Ob,rf;function cP(e){return uP(e)==="[object Array]"}Array.isArray?rf=Array.isArray:rf=cP;var fP=rf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dP=fP,hP=dP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pP=hP,gP=ie;function vP(e){if(typeof e!="function")throw new TypeError(gP("invalid argument. Must provide a function. Value: `%s`.",e));return t;function t(n){var r,i;if(!pP(n)||(r=n.length,r===0))return!1;for(i=0;i<r;i++)if(e(n[i])===!1)return!1;return!0}}var mP=vP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yP=mP,bP=yP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function $P(e){return e!==null&&typeof e=="object"}var _P=$P;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wP=Ib,xP=bP,ih=_P,SP=xP(ih);wP(ih,"isObjectLikeArray",SP);var kP=ih;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var EP=kP;function AP(e){return EP(e)&&(e._isBuffer||e.constructor&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e))}var TP=AP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var MP=Ob,OP=lP.REGEXP,IP=PP;function LP(e){var t,n,r;if(n=MP(e).slice(8,-1),(n==="Object"||n==="Error")&&e.constructor){if(r=e.constructor,typeof r.name=="string")return r.name;if(t=OP.exec(r.toString()),t)return t[1]}return IP(e)?"Buffer":n}var NP=LP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var RP=NP,Qt=RP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var FP=Qt;function DP(e){var t;return e===null?"null":(t=typeof e,t==="object"?FP(e).toLowerCase():t)}var jP=DP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zP=Qt;function BP(e){return zP(e).toLowerCase()}var UP=BP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var VP=u3,WP=jP,HP=UP,GP=VP()?HP:WP,YP=GP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var XP=YP;function KP(e){return XP(e)==="function"}var QP=KP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ZP=QP,El=ZP;/**
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
*/var qP=Object,JP=qP;/**
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
*/var eM=JP,tM=eM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nM=Object.getPrototypeOf,rM=nM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function iM(e){return e.__proto__}var oM=iM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aM=lt,sM=oM;function lM(e){var t=sM(e);return t||t===null?t:aM(e.constructor)==="[object Function]"?e.constructor.prototype:e instanceof Object?Object.prototype:null}var uM=lM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cM=El,fM=rM,dM=uM,of;cM(Object.getPrototypeOf)?of=fM:of=dM;var hM=of;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pM=tM,gM=hM;function vM(e){return e==null?null:(e=pM(e),gM(e))}var mM=vM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yM=mM,Al=yM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bM=mC,Av=El,$M=Al,ps=kl,_M=lt,wM=Object.prototype;function xM(e){var t;for(t in e)if(!ps(e,t))return!1;return!0}function SM(e){var t;return bM(e)?(t=$M(e),t?!ps(e,"constructor")&&ps(t,"constructor")&&Av(t.constructor)&&_M(t.constructor)==="[object Function]"&&ps(t,"isPrototypeOf")&&Av(t.isPrototypeOf)&&(t===wM||xM(e)):!0):!1}var kM=SM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var EM=kM,Rb=EM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function AM(e){return t;function t(){return e}}var TM=AM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var CM=TM,PM=CM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function MM(){}var OM=MM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var NM=Math.floor,RM=NM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var FM=RM,Fb=FM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var DM=Fb;function jM(e){return DM(e)===e}var zM=jM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var BM=zM,Db=BM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var UM=9007199254740991,VM=UM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var WM=Db,HM=VM;function GM(e){return typeof e=="object"&&e!==null&&typeof e.length=="number"&&WM(e.length)&&e.length>=0&&e.length<=HM}var YM=GM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var XM=YM,KM=XM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var QM=lt,ZM=typeof Uint32Array=="function";function qM(e){return ZM&&e instanceof Uint32Array||QM(e)==="[object Uint32Array]"}var JM=qM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eO=JM,jb=eO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function tO(e){return typeof e=="number"}var zb=tO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nO=Number;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rO=nO,oh=rO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iO=oh,oO=iO.prototype.toString,aO=oO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sO=aO;function lO(e){try{return sO.call(e),!0}catch{return!1}}var uO=lO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cO=th,fO=lt,dO=oh,hO=uO,pO=cO();function gO(e){return typeof e=="object"?e instanceof dO?!0:pO?hO(e):fO(e)==="[object Number]":!1}var Bb=gO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vO=zb,mO=Bb;function yO(e){return vO(e)||mO(e)}var bO=yO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ub=Ut,ah=bO,$O=zb,_O=Bb;Ub(ah,"isPrimitive",$O);Ub(ah,"isObject",_O);var ta=ah;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wO=Number.POSITIVE_INFINITY,Tl=wO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xO=oh,SO=xO.NEGATIVE_INFINITY,kO=SO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var EO=Tl,AO=kO,TO=Db;function CO(e){return e<EO&&e>AO&&TO(e)}var Vb=CO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var PO=ta.isPrimitive,MO=Vb;function OO(e){return PO(e)&&MO(e)}var Wb=OO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var IO=ta.isObject,LO=Vb;function NO(e){return IO(e)&&LO(e.valueOf())}var Hb=NO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var RO=Wb,FO=Hb;function DO(e){return RO(e)||FO(e)}var jO=DO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gb=Ut,sh=jO,zO=Wb,BO=Hb;Gb(sh,"isPrimitive",zO);Gb(sh,"isObject",BO);var Yb=sh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var UO=Yb.isPrimitive;function VO(e){return UO(e)&&e>0}var Xb=VO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var WO=Yb.isObject;function HO(e){return WO(e)&&e.valueOf()>0}var Kb=HO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var GO=Xb,YO=Kb;function XO(e){return GO(e)||YO(e)}var KO=XO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qb=Ut,lh=KO,QO=Xb,ZO=Kb;Qb(lh,"isPrimitive",QO);Qb(lh,"isObject",ZO);var qO=lh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var JO=9007199254740991,eI=JO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tI=4294967295,uh=tI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nI=typeof Uint32Array=="function"?Uint32Array:null,rI=nI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iI=jb,Eu=uh,Tv=rI;function oI(){var e,t;if(typeof Tv!="function")return!1;try{t=[1,3.14,-3.14,Eu+1,Eu+2],t=new Tv(t),e=iI(t)&&t[0]===1&&t[1]===3&&t[2]===Eu-2&&t[3]===0&&t[4]===1}catch{e=!1}return e}var aI=oI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sI=aI,lI=sI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uI=typeof Uint32Array=="function"?Uint32Array:void 0,cI=uI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function fI(){throw new Error("not implemented")}var dI=fI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hI=lI,pI=cI,gI=dI,af;hI()?af=pI:af=gI;var ch=af;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vI=Tl;function mI(e){return e===0&&1/e===vI}var yI=mI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bI=yI,$I=bI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function _I(e){return e!==e}var wI=_I;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xI=wI,Cl=xI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var SI=$I,Cv=Cl,Au=Tl;function kI(e,t){return Cv(e)||Cv(t)?NaN:e===Au||t===Au?Au:e===t&&e===0?SI(e)?e:t:e>t?e:t}var EI=kI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var AI=EI,TI=AI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pv=65535;function CI(e,t){var n,r,i,o,a,s;return e>>>=0,t>>>=0,i=e>>>16>>>0,o=t>>>16>>>0,a=(e&Pv)>>>0,s=(t&Pv)>>>0,n=a*s>>>0,r=i*s+a*o<<16>>>0,n+r>>>0}var PI=CI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Mv="function";function II(e){return typeof e.get===Mv&&typeof e.set===Mv}var LI=II;/**
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
*/var NI=LI,RI=NI;/**
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
*/var Ov={float64:FI,float32:DI,int32:jI,int16:zI,int8:BI,uint32:UI,uint16:VI,uint8:WI,uint8c:HI,generic:GI,default:YI};function FI(e,t){return e[t]}function DI(e,t){return e[t]}function jI(e,t){return e[t]}function zI(e,t){return e[t]}function BI(e,t){return e[t]}function UI(e,t){return e[t]}function VI(e,t){return e[t]}function WI(e,t){return e[t]}function HI(e,t){return e[t]}function GI(e,t){return e[t]}function YI(e,t){return e[t]}function XI(e){var t=Ov[e];return typeof t=="function"?t:Ov.default}var KI=XI;/**
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
*/var QI=KI,fh=QI;/**
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
*/var Iv={float64:ZI,float32:qI,int32:JI,int16:e4,int8:t4,uint32:n4,uint16:r4,uint8:i4,uint8c:o4,generic:a4,default:s4};function ZI(e,t,n){e[t]=n}function qI(e,t,n){e[t]=n}function JI(e,t,n){e[t]=n}function e4(e,t,n){e[t]=n}function t4(e,t,n){e[t]=n}function n4(e,t,n){e[t]=n}function r4(e,t,n){e[t]=n}function i4(e,t,n){e[t]=n}function o4(e,t,n){e[t]=n}function a4(e,t,n){e[t]=n}function s4(e,t,n){e[t]=n}function l4(e){var t=Iv[e];return typeof t=="function"?t:Iv.default}var u4=l4;/**
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
*/var c4=u4,f4=c4;/**
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
*/var Lv={complex128:d4,complex64:h4,default:p4};function d4(e,t){return e.get(t)}function h4(e,t){return e.get(t)}function p4(e,t){return e.get(t)}function g4(e){var t=Lv[e];return typeof t=="function"?t:Lv.default}var v4=g4;/**
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
*/var m4=v4,dh=m4;/**
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
*/var Nv={complex128:y4,complex64:b4,default:$4};function y4(e,t,n){e.set(n,t)}function b4(e,t,n){e.set(n,t)}function $4(e,t,n){e.set(n,t)}function _4(e){var t=Nv[e];return typeof t=="function"?t:Nv.default}var w4=_4;/**
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
*/var x4=w4,S4=x4;/**
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
*/var k4=typeof Object.defineProperty=="function"?Object.defineProperty:null,E4=k4;/**
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
*/var A4=E4;function T4(){try{return A4({},"x",{}),!0}catch{return!1}}var C4=T4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var P4=Object.defineProperty,M4=P4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rv=ie,Ei=Object.prototype,Fv=Ei.toString,Dv=Ei.__defineGetter__,jv=Ei.__defineSetter__,O4=Ei.__lookupGetter__,I4=Ei.__lookupSetter__;function L4(e,t,n){var r,i,o,a;if(typeof e!="object"||e===null||Fv.call(e)==="[object Array]")throw new TypeError(Rv("invalid argument. First argument must be an object. Value: `%s`.",e));if(typeof n!="object"||n===null||Fv.call(n)==="[object Array]")throw new TypeError(Rv("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if(i="value"in n,i&&(O4.call(e,t)||I4.call(e,t)?(r=e.__proto__,e.__proto__=Ei,delete e[t],e[t]=n.value,e.__proto__=r):e[t]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&Dv&&Dv.call(e,t,n.get),a&&jv&&jv.call(e,t,n.set),e}var N4=L4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var R4=C4,F4=M4,D4=N4,sf;R4()?sf=F4:sf=D4;var j4=sf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var z4=j4;function B4(e,t,n){z4(e,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var U4=B4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V4=U4,W4=V4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function H4(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}var G4=H4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var K4=X4,Q4=K4();function Z4(){return Q4&&typeof Symbol.toStringTag=="symbol"}var q4=Z4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var J4=q4,eL=J4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tL=Object.prototype.toString,Zb=tL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nL=Zb;function rL(e){return nL.call(e)}var iL=rL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oL=Object.prototype.hasOwnProperty;function aL(e,t){return e==null?!1:oL.call(e,t)}var sL=aL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lL=sL,uL=lL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zv=Sr,cL=typeof zv=="function"?zv.toStringTag:"",fL=cL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dL=uL,Yi=fL,Tu=Zb;function hL(e){var t,n,r;if(e==null)return Tu.call(e);n=e[Yi],t=dL(e,Yi);try{e[Yi]=void 0}catch{return Tu.call(e)}return r=Tu.call(e),t?e[Yi]=n:delete e[Yi],r}var pL=hL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gL=eL,vL=iL,mL=pL,lf;gL()?lf=mL:lf=vL;var Zt=lf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yL=Zt,uf;function bL(e){return yL(e)==="[object Array]"}Array.isArray?uf=Array.isArray:uf=bL;var $L=uf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _L=$L,qb=_L;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wL=qb,xL=ie;function SL(e){if(typeof e!="function")throw new TypeError(xL("invalid argument. Must provide a function. Value: `%s`.",e));return t;function t(n){var r,i;if(!wL(n)||(r=n.length,r===0))return!1;for(i=0;i<r;i++)if(e(n[i])===!1)return!1;return!0}}var kL=SL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var EL=kL,AL=EL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function TL(e){return e!==null&&typeof e=="object"}var CL=TL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var PL=W4,ML=AL,hh=CL,OL=ML(hh);PL(hh,"isObjectLikeArray",OL);var IL=hh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var LL=IL;function NL(e){return LL(e)&&(e._isBuffer||e.constructor&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e))}var RL=NL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var jL={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},zL=jL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var BL=Zt,UL=typeof Float64Array=="function";function VL(e){return UL&&e instanceof Float64Array||BL(e)==="[object Float64Array]"}var WL=VL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var HL=WL,GL=HL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var YL=typeof Float64Array=="function"?Float64Array:null,XL=YL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var KL=GL,Bv=XL;function QL(){var e,t;if(typeof Bv!="function")return!1;try{t=new Bv([1,3.14,-3.14,NaN]),e=KL(t)&&t[0]===1&&t[1]===3.14&&t[2]===-3.14&&t[3]!==t[3]}catch{e=!1}return e}var ZL=QL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qL=ZL,JL=qL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eN=typeof Float64Array=="function"?Float64Array:void 0,tN=eN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function nN(){throw new Error("not implemented")}var rN=nN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iN=JL,oN=tN,aN=rN,cf;iN()?cf=oN:cf=aN;var sN=cf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lN=Zt,uN=typeof Float32Array=="function";function cN(e){return uN&&e instanceof Float32Array||lN(e)==="[object Float32Array]"}var fN=cN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dN=fN,hN=dN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pN=Number.POSITIVE_INFINITY,gN=pN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vN=typeof Float32Array=="function"?Float32Array:null,mN=vN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yN=hN,bN=gN,Uv=mN;function $N(){var e,t;if(typeof Uv!="function")return!1;try{t=new Uv([1,3.14,-3.14,5e40]),e=yN(t)&&t[0]===1&&t[1]===3.140000104904175&&t[2]===-3.140000104904175&&t[3]===bN}catch{e=!1}return e}var _N=$N;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var SN=typeof Float32Array=="function"?Float32Array:void 0,kN=SN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var TN=xN,CN=kN,PN=AN,ff;TN()?ff=CN:ff=PN;var MN=ff;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ON=Zt,IN=typeof Uint32Array=="function";function LN(e){return IN&&e instanceof Uint32Array||ON(e)==="[object Uint32Array]"}var NN=LN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var RN=NN,FN=RN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var DN=4294967295,jN=DN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zN=typeof Uint32Array=="function"?Uint32Array:null,BN=zN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var UN=FN,Cu=jN,Vv=BN;function VN(){var e,t;if(typeof Vv!="function")return!1;try{t=[1,3.14,-3.14,Cu+1,Cu+2],t=new Vv(t),e=UN(t)&&t[0]===1&&t[1]===3&&t[2]===Cu-2&&t[3]===0&&t[4]===1}catch{e=!1}return e}var WN=VN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var YN=typeof Uint32Array=="function"?Uint32Array:void 0,XN=YN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ZN=GN,qN=XN,JN=QN,df;ZN()?df=qN:df=JN;var eR=df;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tR=Zt,nR=typeof Int32Array=="function";function rR(e){return nR&&e instanceof Int32Array||tR(e)==="[object Int32Array]"}var iR=rR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oR=iR,aR=oR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sR=2147483647,lR=sR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uR=-2147483648,cR=uR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fR=typeof Int32Array=="function"?Int32Array:null,dR=fR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hR=aR,pR=lR,gR=cR,Wv=dR;function vR(){var e,t;if(typeof Wv!="function")return!1;try{t=new Wv([1,3.14,-3.14,pR+1]),e=hR(t)&&t[0]===1&&t[1]===3&&t[2]===-3&&t[3]===gR}catch{e=!1}return e}var mR=vR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yR=mR,bR=yR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $R=typeof Int32Array=="function"?Int32Array:void 0,_R=$R;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function wR(){throw new Error("not implemented")}var xR=wR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var SR=bR,kR=_R,ER=xR,hf;SR()?hf=kR:hf=ER;var AR=hf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var TR=Zt,CR=typeof Uint16Array=="function";function PR(e){return CR&&e instanceof Uint16Array||TR(e)==="[object Uint16Array]"}var MR=PR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var OR=MR,IR=OR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var LR=65535,NR=LR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var RR=typeof Uint16Array=="function"?Uint16Array:null,FR=RR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var DR=IR,Pu=NR,Hv=FR;function jR(){var e,t;if(typeof Hv!="function")return!1;try{t=[1,3.14,-3.14,Pu+1,Pu+2],t=new Hv(t),e=DR(t)&&t[0]===1&&t[1]===3&&t[2]===Pu-2&&t[3]===0&&t[4]===1}catch{e=!1}return e}var zR=jR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var BR=zR,UR=BR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var VR=typeof Uint16Array=="function"?Uint16Array:void 0,WR=VR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function HR(){throw new Error("not implemented")}var GR=HR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var YR=UR,XR=WR,KR=GR,pf;YR()?pf=XR:pf=KR;var QR=pf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ZR=Zt,qR=typeof Int16Array=="function";function JR(e){return qR&&e instanceof Int16Array||ZR(e)==="[object Int16Array]"}var eF=JR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tF=eF,nF=tF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rF=32767,iF=rF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oF=-32768,aF=oF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sF=typeof Int16Array=="function"?Int16Array:null,lF=sF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uF=nF,cF=iF,fF=aF,Gv=lF;function dF(){var e,t;if(typeof Gv!="function")return!1;try{t=new Gv([1,3.14,-3.14,cF+1]),e=uF(t)&&t[0]===1&&t[1]===3&&t[2]===-3&&t[3]===fF}catch{e=!1}return e}var hF=dF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pF=hF,gF=pF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vF=typeof Int16Array=="function"?Int16Array:void 0,mF=vF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function yF(){throw new Error("not implemented")}var bF=yF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $F=gF,_F=mF,wF=bF,gf;$F()?gf=_F:gf=wF;var xF=gf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var SF=Zt,kF=typeof Uint8Array=="function";function EF(e){return kF&&e instanceof Uint8Array||SF(e)==="[object Uint8Array]"}var AF=EF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var TF=AF,CF=TF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var PF=255,MF=PF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var OF=typeof Uint8Array=="function"?Uint8Array:null,IF=OF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var LF=CF,Mu=MF,Yv=IF;function NF(){var e,t;if(typeof Yv!="function")return!1;try{t=[1,3.14,-3.14,Mu+1,Mu+2],t=new Yv(t),e=LF(t)&&t[0]===1&&t[1]===3&&t[2]===Mu-2&&t[3]===0&&t[4]===1}catch{e=!1}return e}var RF=NF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var FF=RF,DF=FF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jF=typeof Uint8Array=="function"?Uint8Array:void 0,zF=jF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function BF(){throw new Error("not implemented")}var UF=BF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var VF=DF,WF=zF,HF=UF,vf;VF()?vf=WF:vf=HF;var GF=vf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var YF=Zt,XF=typeof Uint8ClampedArray=="function";function KF(e){return XF&&e instanceof Uint8ClampedArray||YF(e)==="[object Uint8ClampedArray]"}var QF=KF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ZF=QF,qF=ZF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var JF=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null,eD=JF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tD=qF,Xv=eD;function nD(){var e,t;if(typeof Xv!="function")return!1;try{t=new Xv([-1,0,1,3.14,4.99,255,256]),e=tD(t)&&t[0]===0&&t[1]===0&&t[2]===1&&t[3]===3&&t[4]===5&&t[5]===255&&t[6]===255}catch{e=!1}return e}var rD=nD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iD=rD,oD=iD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aD=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0,sD=aD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function lD(){throw new Error("not implemented")}var uD=lD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cD=oD,fD=sD,dD=uD,mf;cD()?mf=fD:mf=dD;var hD=mf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pD=Zt,gD=typeof Int8Array=="function";function vD(e){return gD&&e instanceof Int8Array||pD(e)==="[object Int8Array]"}var mD=vD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yD=mD,bD=yD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $D=127,_D=$D;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wD=-128,xD=wD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var SD=typeof Int8Array=="function"?Int8Array:null,kD=SD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ED=bD,AD=_D,TD=xD,Kv=kD;function CD(){var e,t;if(typeof Kv!="function")return!1;try{t=new Kv([1,3.14,-3.14,AD+1]),e=ED(t)&&t[0]===1&&t[1]===3&&t[2]===-3&&t[3]===TD}catch{e=!1}return e}var PD=CD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var MD=PD,OD=MD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ID=typeof Int8Array=="function"?Int8Array:void 0,LD=ID;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function ND(){throw new Error("not implemented")}var RD=ND;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var FD=OD,DD=LD,jD=RD,yf;FD()?yf=DD:yf=jD;var zD=yf;/**
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
*/var BD=typeof Object.defineProperty=="function"?Object.defineProperty:null,UD=BD;/**
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
*/var VD=UD;function WD(){try{return VD({},"x",{}),!0}catch{return!1}}var HD=WD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var GD=Object.defineProperty,YD=GD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qv=ie,Ai=Object.prototype,Zv=Ai.toString,qv=Ai.__defineGetter__,Jv=Ai.__defineSetter__,XD=Ai.__lookupGetter__,KD=Ai.__lookupSetter__;function QD(e,t,n){var r,i,o,a;if(typeof e!="object"||e===null||Zv.call(e)==="[object Array]")throw new TypeError(Qv("invalid argument. First argument must be an object. Value: `%s`.",e));if(typeof n!="object"||n===null||Zv.call(n)==="[object Array]")throw new TypeError(Qv("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if(i="value"in n,i&&(XD.call(e,t)||KD.call(e,t)?(r=e.__proto__,e.__proto__=Ai,delete e[t],e[t]=n.value,e.__proto__=r):e[t]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&qv&&qv.call(e,t,n.get),a&&Jv&&Jv.call(e,t,n.set),e}var ZD=QD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qD=HD,JD=YD,e5=ZD,bf;qD()?bf=JD:bf=e5;var Pl=bf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t5=Pl;function n5(e,t,n){t5(e,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var r5=n5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var i5=r5,kr=i5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function o5(e){return typeof e=="number"}var Jb=o5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function a5(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}var s5=a5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var l5=s5,u5=l5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var c5=u5,f5=c5();function d5(){return f5&&typeof Symbol.toStringTag=="symbol"}var h5=d5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var p5=h5,ph=p5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g5=Object.prototype.toString,e$=g5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var v5=e$;function m5(e){return v5.call(e)}var y5=m5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b5=Object.prototype.hasOwnProperty;function $5(e,t){return e==null?!1:b5.call(e,t)}var _5=$5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var w5=_5,t$=w5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var em=Sr,x5=typeof em=="function"?em.toStringTag:"",S5=x5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k5=t$,Xi=S5,Ou=e$;function E5(e){var t,n,r;if(e==null)return Ou.call(e);n=e[Xi],t=k5(e,Xi);try{e[Xi]=void 0}catch{return Ou.call(e)}return r=Ou.call(e),t?e[Xi]=n:delete e[Xi],r}var A5=E5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var T5=ph,C5=y5,P5=A5,$f;T5()?$f=P5:$f=C5;var Ti=$f;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var M5=Number;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O5=M5,gh=O5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var I5=gh,L5=I5.prototype.toString,N5=L5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var R5=N5;function F5(e){try{return R5.call(e),!0}catch{return!1}}var D5=F5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j5=ph,z5=Ti,B5=gh,U5=D5,V5=j5();function W5(e){return typeof e=="object"?e instanceof B5?!0:V5?U5(e):z5(e)==="[object Number]":!1}var n$=W5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var H5=Jb,G5=n$;function Y5(e){return H5(e)||G5(e)}var X5=Y5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r$=kr,vh=X5,K5=Jb,Q5=n$;r$(vh,"isPrimitive",K5);r$(vh,"isObject",Q5);var Ml=vh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Z5=Number.POSITIVE_INFINITY,i$=Z5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var q5=gh,J5=q5.NEGATIVE_INFINITY,e6=J5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t6=Math.floor,n6=t6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r6=n6,i6=r6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var o6=i6;function a6(e){return o6(e)===e}var s6=a6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var l6=s6,na=l6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u6=i$,c6=e6,f6=na;function d6(e){return e<u6&&e>c6&&f6(e)}var o$=d6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var h6=Ml.isPrimitive,p6=o$;function g6(e){return h6(e)&&p6(e)}var a$=g6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var v6=Ml.isObject,m6=o$;function y6(e){return v6(e)&&m6(e.valueOf())}var s$=y6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b6=a$,$6=s$;function _6(e){return b6(e)||$6(e)}var w6=_6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var l$=kr,mh=w6,x6=a$,S6=s$;l$(mh,"isPrimitive",x6);l$(mh,"isObject",S6);var u$=mh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k6=u$.isPrimitive;function E6(e){return k6(e)&&e>=0}var c$=E6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var A6=u$.isObject;function T6(e){return A6(e)&&e.valueOf()>=0}var f$=T6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var C6=c$,P6=f$;function M6(e){return C6(e)||P6(e)}var O6=M6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var d$=kr,yh=O6,I6=c$,L6=f$;d$(yh,"isPrimitive",I6);d$(yh,"isObject",L6);var N6=yh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var R6=4294967295,F6=R6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D6=na,j6=F6;function z6(e){return typeof e=="object"&&e!==null&&typeof e.length=="number"&&D6(e.length)&&e.length>=0&&e.length<=j6}var B6=z6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U6=B6,bh=U6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V6=9007199254740991,W6=V6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var H6=na,G6=W6;function Y6(e){return typeof e=="object"&&e!==null&&typeof e.length=="number"&&H6(e.length)&&e.length>=0&&e.length<=G6}var X6=Y6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var K6=X6,Q6=K6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Z6=Ti,q6=typeof ArrayBuffer=="function";function J6(e){return q6&&e instanceof ArrayBuffer||Z6(e)==="[object ArrayBuffer]"}var ej=J6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tj=ej,nj=tj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rj=Ti,_f;function ij(e){return rj(e)==="[object Array]"}Array.isArray?_f=Array.isArray:_f=ij;var oj=_f;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aj=oj,h$=aj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sj=h$;function lj(e){return typeof e=="object"&&e!==null&&!sj(e)}var uj=lj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cj=uj,fj=cj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dj=/./,hj=dj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function pj(e){return typeof e=="boolean"}var p$=pj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gj=Boolean.prototype.toString,vj=gj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mj=vj;function yj(e){try{return mj.call(e),!0}catch{return!1}}var bj=yj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $j=ph,_j=Ti,wj=nh,xj=bj,Sj=$j();function kj(e){return typeof e=="object"?e instanceof wj?!0:Sj?xj(e):_j(e)==="[object Boolean]":!1}var g$=kj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ej=p$,Aj=g$;function Tj(e){return Ej(e)||Aj(e)}var Cj=Tj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var v$=kr,$h=Cj,Pj=p$,Mj=g$;v$($h,"isPrimitive",Pj);v$($h,"isObject",Mj);var Oj=$h;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ij(){return new Function("return this;")()}var Lj=Ij;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nj=typeof self=="object"?self:null,Rj=Nj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fj=typeof window=="object"?window:null,Dj=Fj;/**
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
*/var jj=typeof globalThis=="object"?globalThis:null,zj=jj;/**
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
*/var Bj=Oj.isPrimitive,Uj=ie,Vj=Lj,tm=Rj,nm=Dj,rm=zj;function Wj(e){if(arguments.length){if(!Bj(e))throw new TypeError(Uj("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Vj()}if(rm)return rm;if(tm)return tm;if(nm)return nm;throw new Error("unexpected error. Unable to resolve global object.")}var Hj=Wj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gj=Hj,im=Gj(),Yj=im.document&&im.document.childNodes,Xj=Yj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kj=Int8Array,Qj=Kj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zj=hj,qj=Xj,Jj=Qj;function ez(){return typeof Zj=="function"||typeof Jj=="object"||typeof qj=="function"}var tz=ez;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nz=Qt;function rz(e){var t;return e===null?"null":(t=typeof e,t==="object"?nz(e).toLowerCase():t)}var iz=rz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oz=Qt;function az(e){return oz(e).toLowerCase()}var sz=az;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lz=tz,uz=iz,cz=sz,fz=lz()?cz:uz,dz=fz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hz=dz;function pz(e){return hz(e)==="function"}var gz=pz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vz=gz,mz=vz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function yz(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i",e}var bz=yz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function $z(){var e={};return e.type="Complex128",e.re=this.re,e.im=this.im,e}var _z=$z;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var om=Ml.isPrimitive,am=Pl,ra=kr,sm=ie,wz=bz,xz=_z;function Er(e,t){if(!(this instanceof Er))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!om(e))throw new TypeError(sm("invalid argument. Real component must be a number. Value: `%s`.",e));if(!om(t))throw new TypeError(sm("invalid argument. Imaginary component must be a number. Value: `%s`.",t));return am(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),am(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:t}),this}ra(Er,"BYTES_PER_ELEMENT",8);ra(Er.prototype,"BYTES_PER_ELEMENT",8);ra(Er.prototype,"byteLength",16);ra(Er.prototype,"toString",wz);ra(Er.prototype,"toJSON",xz);var Sz=Er;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kz=Sz,Ez=kz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Az=typeof Math.fround=="function"?Math.fround:null,Tz=Az;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cz=Ti,Pz=typeof Float32Array=="function";function Mz(e){return Pz&&e instanceof Float32Array||Cz(e)==="[object Float32Array]"}var Oz=Mz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Iz=Oz,Lz=Iz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nz=typeof Float32Array=="function"?Float32Array:null,Rz=Nz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fz=Lz,Dz=i$,lm=Rz;function jz(){var e,t;if(typeof lm!="function")return!1;try{t=new lm([1,3.14,-3.14,5e40]),e=Fz(t)&&t[0]===1&&t[1]===3.140000104904175&&t[2]===-3.140000104904175&&t[3]===Dz}catch{e=!1}return e}var zz=jz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bz=zz,Uz=Bz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vz=typeof Float32Array=="function"?Float32Array:void 0,Wz=Vz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Hz(){throw new Error("not implemented")}var Gz=Hz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yz=Uz,Xz=Wz,Kz=Gz,wf;Yz()?wf=Xz:wf=Kz;var _h=wf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qz=_h,um=new Qz(1);function Zz(e){return um[0]=e,um[0]}var qz=Zz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cm=Tz,Jz=qz,xf;typeof cm=="function"?xf=cm:xf=Jz;var e8=xf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function t8(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i",e}var n8=t8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function r8(){var e={};return e.type="Complex64",e.re=this.re,e.im=this.im,e}var i8=r8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fm=Ml.isPrimitive,dm=Pl,ia=kr,hm=e8,pm=ie,o8=n8,a8=i8;function Ar(e,t){if(!(this instanceof Ar))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!fm(e))throw new TypeError(pm("invalid argument. Real component must be a number. Value: `%s`.",e));if(!fm(t))throw new TypeError(pm("invalid argument. Imaginary component must be a number. Value: `%s`.",t));return dm(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:hm(e)}),dm(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:hm(t)}),this}ia(Ar,"BYTES_PER_ELEMENT",4);ia(Ar.prototype,"BYTES_PER_ELEMENT",4);ia(Ar.prototype,"byteLength",8);ia(Ar.prototype,"toString",o8);ia(Ar.prototype,"toJSON",a8);var s8=Ar;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var l8=s8,m$=l8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u8=Ez,c8=m$;function f8(e){return e instanceof u8||e instanceof c8?!0:typeof e=="object"&&e!==null&&typeof e.re=="number"&&typeof e.im=="number"}var d8=f8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var h8=d8,Ol=h8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var p8=na;function g8(e){return p8(e/2)}var v8=g8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var m8=v8,y8=m8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b8=t$,Wa=Sr;function $8(){return typeof Wa=="function"&&typeof Wa("foo")=="symbol"&&b8(Wa,"iterator")&&typeof Wa.iterator=="symbol"}var _8=$8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var w8=_8,y$=w8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var x8=y$,S8=x8()?Symbol.iterator:null,k8=S8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var E8=k8,A8=E8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var T8=Pl;function C8(e,t,n){T8(e,t,{configurable:!1,enumerable:!1,get:n})}var P8=C8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var M8=P8,O8=M8;/**
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
*/function I8(e){return e.re}var L8=I8;/**
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
*/var N8=L8,Il=N8;/**
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
*/function R8(e){return e.im}var F8=R8;/**
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
*/var D8=F8,Ll=D8;/**
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
*/var j8=_h;function z8(e,t){return new j8(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*t,2*(e.length-t))}var B8=z8;/**
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
*/var U8=B8,V8=U8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var W8=Ti,H8=typeof Float64Array=="function";function G8(e){return H8&&e instanceof Float64Array||W8(e)==="[object Float64Array]"}var Y8=G8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var X8=Y8,K8=X8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Q8=typeof Float64Array=="function"?Float64Array:null,Z8=Q8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var q8=K8,gm=Z8;function J8(){var e,t;if(typeof gm!="function")return!1;try{t=new gm([1,3.14,-3.14,NaN]),e=q8(t)&&t[0]===1&&t[1]===3.14&&t[2]===-3.14&&t[3]!==t[3]}catch{e=!1}return e}var eB=J8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tB=eB,nB=tB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rB=typeof Float64Array=="function"?Float64Array:void 0,iB=rB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function oB(){throw new Error("not implemented")}var aB=oB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sB=nB,lB=iB,uB=aB,Sf;sB()?Sf=lB:Sf=uB;var cB=Sf;/**
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
*/var fB=cB;function dB(e,t){return new fB(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*t,2*(e.length-t))}var hB=dB;/**
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
*/var pB=hB,gB=pB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vB=bh,mB=Ol,yB=Il,bB=Ll,$B=ie;function _B(e){var t,n,r;for(t=[];n=e.next(),!n.done;)if(r=n.value,vB(r)&&r.length>=2)t.push(r[0],r[1]);else if(mB(r))t.push(yB(r),bB(r));else return new TypeError($B("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",r));return t}var wB=_B;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xB=bh,SB=Ol,kB=Il,EB=Ll,AB=ie;function TB(e,t,n){var r,i,o,a;for(r=[],a=-1;i=e.next(),!i.done;)if(a+=1,o=t.call(n,i.value,a),xB(o)&&o.length>=2)r.push(o[0],o[1]);else if(SB(o))r.push(kB(o),EB(o));else return new TypeError(AB("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));return r}var CB=TB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var PB=Ol,MB=Il,OB=Ll;function IB(e,t){var n,r,i,o;for(n=t.length,o=0,i=0;i<n;i++){if(r=t[i],!PB(r))return null;e[o]=MB(r),e[o+1]=OB(r),o+=2}return e}var LB=IB,xo=N6.isPrimitive,vm=bh,wh=Q6,mm=nj,b$=fj,NB=h$,lr=mz,oi=Ol,Zs=y8,Iu=na,RB=y$,mi=A8,nt=kr,Nl=O8,wt=_h,$$=m$,ce=ie,qs=Il,Js=Ll,FB=V8,DB=gB,jB=fh,zB=dh,_$=wB,BB=CB,UB=LB,dt=wt.BYTES_PER_ELEMENT*2,w$=RB();function yi(e){return e instanceof be||typeof e=="object"&&e!==null&&(e.constructor.name==="Complex64Array"||e.constructor.name==="Complex128Array")&&typeof e._length=="number"&&typeof e._buffer=="object"}function x$(e){return e===be||e.name==="Complex128Array"}function VB(e){return typeof e=="object"&&e!==null&&e.constructor.name==="Complex64Array"&&e.BYTES_PER_ELEMENT===dt}function WB(e){return typeof e=="object"&&e!==null&&e.constructor.name==="Complex128Array"&&e.BYTES_PER_ELEMENT===dt*2}function be(){var e,t,n,r;if(t=arguments.length,!(this instanceof be))return t===0?new be:t===1?new be(arguments[0]):t===2?new be(arguments[0],arguments[1]):new be(arguments[0],arguments[1],arguments[2]);if(t===0)n=new wt(0);else if(t===1)if(xo(arguments[0]))n=new wt(arguments[0]*2);else if(wh(arguments[0]))if(n=arguments[0],r=n.length,r&&NB(n)&&oi(n[0])){if(n=UB(new wt(r*2),n),n===null){if(!Zs(r))throw new RangeError(ce("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",r));n=new wt(arguments[0])}}else{if(VB(n))n=FB(n,0);else if(WB(n))n=DB(n,0);else if(!Zs(r))throw new RangeError(ce("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",r));n=new wt(n)}else if(mm(arguments[0])){if(n=arguments[0],!Iu(n.byteLength/dt))throw new RangeError(ce("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",dt,n.byteLength));n=new wt(n)}else if(b$(arguments[0])){if(n=arguments[0],w$===!1)throw new TypeError(ce("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",n));if(!lr(n[mi]))throw new TypeError(ce("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",n));if(n=n[mi](),!lr(n.next))throw new TypeError(ce("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",n));if(n=_$(n),n instanceof Error)throw n;n=new wt(n)}else throw new TypeError(ce("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(n=arguments[0],!mm(n))throw new TypeError(ce("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",n));if(e=arguments[1],!xo(e))throw new TypeError(ce("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!Iu(e/dt))throw new RangeError(ce("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",dt,e));if(t===2){if(r=n.byteLength-e,!Iu(r/dt))throw new RangeError(ce("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",dt,r));n=new wt(n,e)}else{if(r=arguments[2],!xo(r))throw new TypeError(ce("invalid argument. Length must be a nonnegative integer. Value: `%s`.",r));if(r*dt>n.byteLength-e)throw new RangeError(ce("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",r*dt));n=new wt(n,e,r*2)}}return nt(this,"_buffer",n),nt(this,"_length",n.length/2),this}nt(be,"BYTES_PER_ELEMENT",dt);nt(be,"name","Complex64Array");nt(be,"from",function(t){var n,r,i,o,a,s,l,u,c,f,d,h;if(!lr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!x$(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(r=arguments.length,r>1){if(i=arguments[1],!lr(i))throw new TypeError(ce("invalid argument. Second argument must be a function. Value: `%s`.",i));r>2&&(n=arguments[2])}if(yi(t)){if(u=t.length,i){for(o=new this(u),a=o._buffer,h=0,d=0;d<u;d++){if(f=i.call(n,t.get(d),d),oi(f))a[h]=qs(f),a[h+1]=Js(f);else if(vm(f)&&f.length>=2)a[h]=f[0],a[h+1]=f[1];else throw new TypeError(ce("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",f));h+=2}return o}return new this(t)}if(wh(t)){if(i){for(u=t.length,t.get&&t.set?l=zB("default"):l=jB("default"),d=0;d<u;d++)if(!oi(l(t,d))){c=!0;break}if(c){if(!Zs(u))throw new RangeError(ce("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,u));for(o=new this(u/2),a=o._buffer,d=0;d<u;d++)a[d]=i.call(n,l(t,d),d);return o}for(o=new this(u),a=o._buffer,h=0,d=0;d<u;d++){if(f=i.call(n,l(t,d),d),oi(f))a[h]=qs(f),a[h+1]=Js(f);else if(vm(f)&&f.length>=2)a[h]=f[0],a[h+1]=f[1];else throw new TypeError(ce("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",f));h+=2}return o}return new this(t)}if(b$(t)&&w$&&lr(t[mi])){if(a=t[mi](),!lr(a.next))throw new TypeError(ce("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",t));if(i?s=BB(a,i,n):s=_$(a),s instanceof Error)throw s;for(u=s.length/2,o=new this(u),a=o._buffer,d=0;d<u;d++)a[d]=s[d];return o}throw new TypeError(ce("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",t))});nt(be,"of",function(){var t,n;if(!lr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!x$(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(t=[],n=0;n<arguments.length;n++)t.push(arguments[n]);return new this(t)});Nl(be.prototype,"buffer",function(){return this._buffer.buffer});Nl(be.prototype,"byteLength",function(){return this._buffer.byteLength});Nl(be.prototype,"byteOffset",function(){return this._buffer.byteOffset});nt(be.prototype,"BYTES_PER_ELEMENT",be.BYTES_PER_ELEMENT);nt(be.prototype,"copyWithin",function(t,n){if(!yi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(t*2,n*2):this._buffer.copyWithin(t*2,n*2,arguments[2]*2),this});nt(be.prototype,"entries",function(){var t,n,r,i,o,a,s;if(!yi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return n=this,t=this._buffer,i=this._length,a=-1,s=-2,r={},nt(r,"next",l),nt(r,"return",u),mi&&nt(r,mi,c),r;function l(){var f;return a+=1,o||a>=i?{done:!0}:(s+=2,f=new $$(t[s],t[s+1]),{value:[a,f],done:!1})}function u(f){return o=!0,arguments.length?{value:f,done:!0}:{done:!0}}function c(){return n.entries()}});nt(be.prototype,"get",function(t){var n;if(!yi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!xo(t))throw new TypeError(ce("invalid argument. Must provide a nonnegative integer. Value: `%s`.",t));if(!(t>=this._length))return n=this._buffer,t*=2,new $$(n[t],n[t+1])});Nl(be.prototype,"length",function(){return this._length});nt(be.prototype,"set",function(t){var n,r,i,o,a,s,l,u,c;if(!yi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=this._buffer,arguments.length>1){if(r=arguments[1],!xo(r))throw new TypeError(ce("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",r))}else r=0;if(oi(t)){if(r>=this._length)throw new RangeError(ce("invalid argument. Index argument is out-of-bounds. Value: `%u`.",r));r*=2,i[r]=qs(t),i[r+1]=Js(t);return}if(yi(t)){if(s=t._length,r+s>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(n=t._buffer,c=i.byteOffset+r*dt,n.buffer===i.buffer&&n.byteOffset<c&&n.byteOffset+n.byteLength>c){for(o=new wt(n.length),u=0;u<n.length;u++)o[u]=n[u];n=o}for(r*=2,c=0,u=0;u<s;u++)i[r]=n[c],i[r+1]=n[c+1],r+=2,c+=2;return}if(wh(t)){for(s=t.length,u=0;u<s;u++)if(!oi(t[u])){a=!0;break}if(a){if(!Zs(s))throw new RangeError(ce("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",s));if(r+s/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(n=t,c=i.byteOffset+r*dt,n.buffer===i.buffer&&n.byteOffset<c&&n.byteOffset+n.byteLength>c){for(o=new wt(s),u=0;u<s;u++)o[u]=n[u];n=o}for(r*=2,s/=2,c=0,u=0;u<s;u++)i[r]=n[c],i[r+1]=n[c+1],r+=2,c+=2;return}if(r+s>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(r*=2,u=0;u<s;u++)l=t[u],i[r]=qs(l),i[r+1]=Js(l),r+=2;return}throw new TypeError(ce("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",t))});var HB=be;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var GB=HB,xh=GB;/**
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
*/var YB=typeof Object.defineProperty=="function"?Object.defineProperty:null,XB=YB;/**
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
*/var KB=XB;function QB(){try{return KB({},"x",{}),!0}catch{return!1}}var ZB=QB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qB=Object.defineProperty,JB=qB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ym=ie,Ci=Object.prototype,bm=Ci.toString,$m=Ci.__defineGetter__,_m=Ci.__defineSetter__,eU=Ci.__lookupGetter__,tU=Ci.__lookupSetter__;function nU(e,t,n){var r,i,o,a;if(typeof e!="object"||e===null||bm.call(e)==="[object Array]")throw new TypeError(ym("invalid argument. First argument must be an object. Value: `%s`.",e));if(typeof n!="object"||n===null||bm.call(n)==="[object Array]")throw new TypeError(ym("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if(i="value"in n,i&&(eU.call(e,t)||tU.call(e,t)?(r=e.__proto__,e.__proto__=Ci,delete e[t],e[t]=n.value,e.__proto__=r):e[t]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&$m&&$m.call(e,t,n.get),a&&_m&&_m.call(e,t,n.set),e}var rU=nU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iU=ZB,oU=JB,aU=rU,kf;iU()?kf=oU:kf=aU;var Rl=kf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sU=Rl;function lU(e,t,n){sU(e,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var uU=lU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cU=uU,Tr=cU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function fU(e){return typeof e=="number"}var S$=fU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function dU(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}var hU=dU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pU=hU,gU=pU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vU=gU,mU=vU();function yU(){return mU&&typeof Symbol.toStringTag=="symbol"}var bU=yU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $U=bU,Sh=$U;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _U=Object.prototype.toString,k$=_U;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wU=k$;function xU(e){return wU.call(e)}var SU=xU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kU=Object.prototype.hasOwnProperty;function EU(e,t){return e==null?!1:kU.call(e,t)}var AU=EU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var TU=AU,E$=TU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wm=Sr,CU=typeof wm=="function"?wm.toStringTag:"",PU=CU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var MU=E$,Ki=PU,Lu=k$;function OU(e){var t,n,r;if(e==null)return Lu.call(e);n=e[Ki],t=MU(e,Ki);try{e[Ki]=void 0}catch{return Lu.call(e)}return r=Lu.call(e),t?e[Ki]=n:delete e[Ki],r}var IU=OU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var LU=Sh,NU=SU,RU=IU,Ef;LU()?Ef=RU:Ef=NU;var Pi=Ef;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var FU=Number;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var DU=FU,kh=DU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jU=kh,zU=jU.prototype.toString,BU=zU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var UU=BU;function VU(e){try{return UU.call(e),!0}catch{return!1}}var WU=VU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var HU=Sh,GU=Pi,YU=kh,XU=WU,KU=HU();function QU(e){return typeof e=="object"?e instanceof YU?!0:KU?XU(e):GU(e)==="[object Number]":!1}var A$=QU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ZU=S$,qU=A$;function JU(e){return ZU(e)||qU(e)}var eV=JU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var T$=Tr,Eh=eV,tV=S$,nV=A$;T$(Eh,"isPrimitive",tV);T$(Eh,"isObject",nV);var Fl=Eh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rV=Number.POSITIVE_INFINITY,C$=rV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iV=kh,oV=iV.NEGATIVE_INFINITY,aV=oV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sV=Math.floor,lV=sV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uV=lV,cV=uV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fV=cV;function dV(e){return fV(e)===e}var hV=dV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pV=hV,oa=pV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gV=C$,vV=aV,mV=oa;function yV(e){return e<gV&&e>vV&&mV(e)}var P$=yV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bV=Fl.isPrimitive,$V=P$;function _V(e){return bV(e)&&$V(e)}var M$=_V;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wV=Fl.isObject,xV=P$;function SV(e){return wV(e)&&xV(e.valueOf())}var O$=SV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kV=M$,EV=O$;function AV(e){return kV(e)||EV(e)}var TV=AV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var I$=Tr,Ah=TV,CV=M$,PV=O$;I$(Ah,"isPrimitive",CV);I$(Ah,"isObject",PV);var L$=Ah;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var MV=L$.isPrimitive;function OV(e){return MV(e)&&e>=0}var N$=OV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var IV=L$.isObject;function LV(e){return IV(e)&&e.valueOf()>=0}var R$=LV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var NV=N$,RV=R$;function FV(e){return NV(e)||RV(e)}var DV=FV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F$=Tr,Th=DV,jV=N$,zV=R$;F$(Th,"isPrimitive",jV);F$(Th,"isObject",zV);var BV=Th;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var UV=4294967295,VV=UV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var WV=oa,HV=VV;function GV(e){return typeof e=="object"&&e!==null&&typeof e.length=="number"&&WV(e.length)&&e.length>=0&&e.length<=HV}var YV=GV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var XV=YV,Ch=XV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var KV=9007199254740991,QV=KV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ZV=oa,qV=QV;function JV(e){return typeof e=="object"&&e!==null&&typeof e.length=="number"&&ZV(e.length)&&e.length>=0&&e.length<=qV}var eW=JV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tW=eW,nW=tW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rW=Pi,iW=typeof ArrayBuffer=="function";function oW(e){return iW&&e instanceof ArrayBuffer||rW(e)==="[object ArrayBuffer]"}var aW=oW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sW=aW,lW=sW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uW=Pi,Af;function cW(e){return uW(e)==="[object Array]"}Array.isArray?Af=Array.isArray:Af=cW;var fW=Af;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dW=fW,D$=dW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hW=D$;function pW(e){return typeof e=="object"&&e!==null&&!hW(e)}var gW=pW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vW=gW,mW=vW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yW=/./,bW=yW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function $W(e){return typeof e=="boolean"}var j$=$W;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _W=Boolean.prototype.toString,wW=_W;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xW=wW;function SW(e){try{return xW.call(e),!0}catch{return!1}}var kW=SW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var EW=Sh,AW=Pi,TW=nh,CW=kW,PW=EW();function MW(e){return typeof e=="object"?e instanceof TW?!0:PW?CW(e):AW(e)==="[object Boolean]":!1}var z$=MW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var OW=j$,IW=z$;function LW(e){return OW(e)||IW(e)}var NW=LW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B$=Tr,Ph=NW,RW=j$,FW=z$;B$(Ph,"isPrimitive",RW);B$(Ph,"isObject",FW);var DW=Ph;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function jW(){return new Function("return this;")()}var zW=jW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var BW=typeof self=="object"?self:null,UW=BW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var VW=typeof window=="object"?window:null,WW=VW;/**
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
*/var HW=typeof globalThis=="object"?globalThis:null,GW=HW;/**
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
*/var YW=DW.isPrimitive,XW=ie,KW=zW,xm=UW,Sm=WW,km=GW;function QW(e){if(arguments.length){if(!YW(e))throw new TypeError(XW("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return KW()}if(km)return km;if(xm)return xm;if(Sm)return Sm;throw new Error("unexpected error. Unable to resolve global object.")}var ZW=QW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qW=ZW,Em=qW(),JW=Em.document&&Em.document.childNodes,e9=JW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t9=Int8Array,n9=t9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r9=bW,i9=e9,o9=n9;function a9(){return typeof r9=="function"||typeof o9=="object"||typeof i9=="function"}var s9=a9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var l9=Qt;function u9(e){var t;return e===null?"null":(t=typeof e,t==="object"?l9(e).toLowerCase():t)}var c9=u9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var f9=Qt;function d9(e){return f9(e).toLowerCase()}var h9=d9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var p9=s9,g9=c9,v9=h9,m9=p9()?v9:g9,y9=m9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b9=y9;function $9(e){return b9(e)==="function"}var _9=$9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var w9=_9,x9=w9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function S9(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i",e}var k9=S9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function E9(){var e={};return e.type="Complex128",e.re=this.re,e.im=this.im,e}var A9=E9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Am=Fl.isPrimitive,Tm=Rl,aa=Tr,Cm=ie,T9=k9,C9=A9;function Cr(e,t){if(!(this instanceof Cr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Am(e))throw new TypeError(Cm("invalid argument. Real component must be a number. Value: `%s`.",e));if(!Am(t))throw new TypeError(Cm("invalid argument. Imaginary component must be a number. Value: `%s`.",t));return Tm(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),Tm(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:t}),this}aa(Cr,"BYTES_PER_ELEMENT",8);aa(Cr.prototype,"BYTES_PER_ELEMENT",8);aa(Cr.prototype,"byteLength",16);aa(Cr.prototype,"toString",T9);aa(Cr.prototype,"toJSON",C9);var P9=Cr;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var M9=P9,U$=M9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O9=typeof Math.fround=="function"?Math.fround:null,I9=O9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var L9=Pi,N9=typeof Float32Array=="function";function R9(e){return N9&&e instanceof Float32Array||L9(e)==="[object Float32Array]"}var F9=R9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D9=F9,j9=D9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var z9=typeof Float32Array=="function"?Float32Array:null,B9=z9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U9=j9,V9=C$,Pm=B9;function W9(){var e,t;if(typeof Pm!="function")return!1;try{t=new Pm([1,3.14,-3.14,5e40]),e=U9(t)&&t[0]===1&&t[1]===3.140000104904175&&t[2]===-3.140000104904175&&t[3]===V9}catch{e=!1}return e}var H9=W9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var G9=H9,Y9=G9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var X9=typeof Float32Array=="function"?Float32Array:void 0,K9=X9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Q9(){throw new Error("not implemented")}var Z9=Q9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var q9=Y9,J9=K9,eH=Z9,Tf;q9()?Tf=J9:Tf=eH;var V$=Tf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tH=V$,Mm=new tH(1);function nH(e){return Mm[0]=e,Mm[0]}var rH=nH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Om=I9,iH=rH,Cf;typeof Om=="function"?Cf=Om:Cf=iH;var oH=Cf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function aH(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i",e}var sH=aH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function lH(){var e={};return e.type="Complex64",e.re=this.re,e.im=this.im,e}var uH=lH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Im=Fl.isPrimitive,Lm=Rl,sa=Tr,Nm=oH,Rm=ie,cH=sH,fH=uH;function Pr(e,t){if(!(this instanceof Pr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Im(e))throw new TypeError(Rm("invalid argument. Real component must be a number. Value: `%s`.",e));if(!Im(t))throw new TypeError(Rm("invalid argument. Imaginary component must be a number. Value: `%s`.",t));return Lm(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Nm(e)}),Lm(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Nm(t)}),this}sa(Pr,"BYTES_PER_ELEMENT",4);sa(Pr.prototype,"BYTES_PER_ELEMENT",4);sa(Pr.prototype,"byteLength",8);sa(Pr.prototype,"toString",cH);sa(Pr.prototype,"toJSON",fH);var dH=Pr;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hH=dH,pH=hH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gH=U$,vH=pH;function mH(e){return e instanceof gH||e instanceof vH?!0:typeof e=="object"&&e!==null&&typeof e.re=="number"&&typeof e.im=="number"}var yH=mH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bH=yH,Dl=bH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $H=oa;function _H(e){return $H(e/2)}var wH=_H;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xH=wH,SH=xH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kH=E$,Ha=Sr;function EH(){return typeof Ha=="function"&&typeof Ha("foo")=="symbol"&&kH(Ha,"iterator")&&typeof Ha.iterator=="symbol"}var AH=EH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var TH=AH,W$=TH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var CH=W$,PH=CH()?Symbol.iterator:null,MH=PH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var OH=MH,IH=OH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var LH=Rl;function NH(e,t,n){LH(e,t,{configurable:!1,enumerable:!1,get:n})}var RH=NH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var FH=RH,DH=FH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jH=Pi,zH=typeof Float64Array=="function";function BH(e){return zH&&e instanceof Float64Array||jH(e)==="[object Float64Array]"}var UH=BH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var HH=typeof Float64Array=="function"?Float64Array:null,GH=HH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var YH=WH,Fm=GH;function XH(){var e,t;if(typeof Fm!="function")return!1;try{t=new Fm([1,3.14,-3.14,NaN]),e=YH(t)&&t[0]===1&&t[1]===3.14&&t[2]===-3.14&&t[3]!==t[3]}catch{e=!1}return e}var KH=XH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var QH=KH,ZH=QH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qH=typeof Float64Array=="function"?Float64Array:void 0,JH=qH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function e7(){throw new Error("not implemented")}var t7=e7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n7=ZH,r7=JH,i7=t7,Pf;n7()?Pf=r7:Pf=i7;var H$=Pf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function o7(e){return e.re}var a7=o7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var s7=a7,jl=s7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function l7(e){return e.im}var u7=l7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var c7=u7,zl=c7;/**
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
*/var f7=V$;function d7(e,t){return new f7(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*t,2*(e.length-t))}var h7=d7;/**
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
*/var p7=h7,g7=p7;/**
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
*/var v7=H$;function m7(e,t){return new v7(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*t,2*(e.length-t))}var y7=m7;/**
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
*/var b7=y7,$7=b7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _7=Ch,w7=Dl,x7=ie,S7=jl,k7=zl;function E7(e){var t,n,r;for(t=[];n=e.next(),!n.done;)if(r=n.value,_7(r)&&r.length>=2)t.push(r[0],r[1]);else if(w7(r))t.push(S7(r),k7(r));else return new TypeError(x7("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",r));return t}var A7=E7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var T7=Ch,C7=Dl,P7=ie,M7=jl,O7=zl;function I7(e,t,n){var r,i,o,a;for(r=[],a=-1;i=e.next(),!i.done;)if(a+=1,o=t.call(n,i.value,a),T7(o)&&o.length>=2)r.push(o[0],o[1]);else if(C7(o))r.push(M7(o),O7(o));else return new TypeError(P7("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));return r}var L7=I7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var N7=Dl,R7=jl,F7=zl;function D7(e,t){var n,r,i,o;for(n=t.length,o=0,i=0;i<n;i++){if(r=t[i],!N7(r))return null;e[o]=R7(r),e[o+1]=F7(r),o+=2}return e}var j7=D7,So=BV.isPrimitive,Dm=Ch,Mh=nW,jm=lW,G$=mW,z7=D$,ur=x9,ai=Dl,el=SH,Nu=oa,B7=W$,bi=IH,rt=Tr,Bl=DH,xt=H$,Y$=U$,tl=jl,nl=zl,U7=g7,V7=$7,W7=fh,H7=dh,fe=ie,X$=A7,G7=L7,Y7=j7,ht=xt.BYTES_PER_ELEMENT*2,K$=B7();function $i(e){return e instanceof $e||typeof e=="object"&&e!==null&&(e.constructor.name==="Complex64Array"||e.constructor.name==="Complex128Array")&&typeof e._length=="number"&&typeof e._buffer=="object"}function Q$(e){return e===$e||e.name==="Complex64Array"}function X7(e){return typeof e=="object"&&e!==null&&e.constructor.name==="Complex64Array"&&e.BYTES_PER_ELEMENT===ht/2}function K7(e){return typeof e=="object"&&e!==null&&e.constructor.name==="Complex128Array"&&e.BYTES_PER_ELEMENT===ht}function $e(){var e,t,n,r;if(t=arguments.length,!(this instanceof $e))return t===0?new $e:t===1?new $e(arguments[0]):t===2?new $e(arguments[0],arguments[1]):new $e(arguments[0],arguments[1],arguments[2]);if(t===0)n=new xt(0);else if(t===1)if(So(arguments[0]))n=new xt(arguments[0]*2);else if(Mh(arguments[0]))if(n=arguments[0],r=n.length,r&&z7(n)&&ai(n[0])){if(n=Y7(new xt(r*2),n),n===null){if(!el(r))throw new RangeError(fe("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",r));n=new xt(arguments[0])}}else{if(X7(n))n=U7(n,0);else if(K7(n))n=V7(n,0);else if(!el(r))throw new RangeError(fe("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",r));n=new xt(n)}else if(jm(arguments[0])){if(n=arguments[0],!Nu(n.byteLength/ht))throw new RangeError(fe("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",ht,n.byteLength));n=new xt(n)}else if(G$(arguments[0])){if(n=arguments[0],K$===!1)throw new TypeError(fe("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",n));if(!ur(n[bi]))throw new TypeError(fe("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",n));if(n=n[bi](),!ur(n.next))throw new TypeError(fe("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",n));if(n=X$(n),n instanceof Error)throw n;n=new xt(n)}else throw new TypeError(fe("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(n=arguments[0],!jm(n))throw new TypeError(fe("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",n));if(e=arguments[1],!So(e))throw new TypeError(fe("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!Nu(e/ht))throw new RangeError(fe("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",ht,e));if(t===2){if(r=n.byteLength-e,!Nu(r/ht))throw new RangeError(fe("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",ht,r));n=new xt(n,e)}else{if(r=arguments[2],!So(r))throw new TypeError(fe("invalid argument. Length must be a nonnegative integer. Value: `%s`.",r));if(r*ht>n.byteLength-e)throw new RangeError(fe("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",r*ht));n=new xt(n,e,r*2)}}return rt(this,"_buffer",n),rt(this,"_length",n.length/2),this}rt($e,"BYTES_PER_ELEMENT",ht);rt($e,"name","Complex128Array");rt($e,"from",function(t){var n,r,i,o,a,s,l,u,c,f,d,h;if(!ur(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Q$(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(r=arguments.length,r>1){if(i=arguments[1],!ur(i))throw new TypeError(fe("invalid argument. Second argument must be a function. Value: `%s`.",i));r>2&&(n=arguments[2])}if($i(t)){if(u=t.length,i){for(o=new this(u),a=o._buffer,h=0,d=0;d<u;d++){if(f=i.call(n,t.get(d),d),ai(f))a[h]=tl(f),a[h+1]=nl(f);else if(Dm(f)&&f.length>=2)a[h]=f[0],a[h+1]=f[1];else throw new TypeError(fe("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",f));h+=2}return o}return new this(t)}if(Mh(t)){if(i){for(u=t.length,t.get&&t.set?l=H7("default"):l=W7("default"),d=0;d<u;d++)if(!ai(l(t,d))){c=!0;break}if(c){if(!el(u))throw new RangeError(fe("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",u));for(o=new this(u/2),a=o._buffer,d=0;d<u;d++)a[d]=i.call(n,l(t,d),d);return o}for(o=new this(u),a=o._buffer,h=0,d=0;d<u;d++){if(f=i.call(n,l(t,d),d),ai(f))a[h]=tl(f),a[h+1]=nl(f);else if(Dm(f)&&f.length>=2)a[h]=f[0],a[h+1]=f[1];else throw new TypeError(fe("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",f));h+=2}return o}return new this(t)}if(G$(t)&&K$&&ur(t[bi])){if(a=t[bi](),!ur(a.next))throw new TypeError(fe("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",t));if(i?s=G7(a,i,n):s=X$(a),s instanceof Error)throw s;for(u=s.length/2,o=new this(u),a=o._buffer,d=0;d<u;d++)a[d]=s[d];return o}throw new TypeError(fe("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",t))});rt($e,"of",function(){var t,n;if(!ur(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Q$(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(t=[],n=0;n<arguments.length;n++)t.push(arguments[n]);return new this(t)});Bl($e.prototype,"buffer",function(){return this._buffer.buffer});Bl($e.prototype,"byteLength",function(){return this._buffer.byteLength});Bl($e.prototype,"byteOffset",function(){return this._buffer.byteOffset});rt($e.prototype,"BYTES_PER_ELEMENT",$e.BYTES_PER_ELEMENT);rt($e.prototype,"copyWithin",function(t,n){if(!$i(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(t*2,n*2):this._buffer.copyWithin(t*2,n*2,arguments[2]*2),this});rt($e.prototype,"entries",function(){var t,n,r,i,o,a,s;if(!$i(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return n=this,t=this._buffer,i=this._length,a=-1,s=-2,r={},rt(r,"next",l),rt(r,"return",u),bi&&rt(r,bi,c),r;function l(){var f;return a+=1,o||a>=i?{done:!0}:(s+=2,f=new Y$(t[s],t[s+1]),{value:[a,f],done:!1})}function u(f){return o=!0,arguments.length?{value:f,done:!0}:{done:!0}}function c(){return n.entries()}});rt($e.prototype,"get",function(t){var n;if(!$i(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!So(t))throw new TypeError(fe("invalid argument. Must provide a nonnegative integer. Value: `%s`.",t));if(!(t>=this._length))return n=this._buffer,t*=2,new Y$(n[t],n[t+1])});Bl($e.prototype,"length",function(){return this._length});rt($e.prototype,"set",function(t){var n,r,i,o,a,s,l,u,c;if(!$i(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=this._buffer,arguments.length>1){if(r=arguments[1],!So(r))throw new TypeError(fe("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",r))}else r=0;if(ai(t)){if(r>=this._length)throw new RangeError(fe("invalid argument. Index argument is out-of-bounds. Value: `%u`.",r));r*=2,i[r]=tl(t),i[r+1]=nl(t);return}if($i(t)){if(s=t._length,r+s>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(n=t._buffer,c=i.byteOffset+r*ht,n.buffer===i.buffer&&n.byteOffset<c&&n.byteOffset+n.byteLength>c){for(o=new xt(n.length),u=0;u<n.length;u++)o[u]=n[u];n=o}for(r*=2,c=0,u=0;u<s;u++)i[r]=n[c],i[r+1]=n[c+1],r+=2,c+=2;return}if(Mh(t)){for(s=t.length,u=0;u<s;u++)if(!ai(t[u])){a=!0;break}if(a){if(!el(s))throw new RangeError(fe("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",s));if(r+s/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(n=t,c=i.byteOffset+r*ht,n.buffer===i.buffer&&n.byteOffset<c&&n.byteOffset+n.byteLength>c){for(o=new xt(s),u=0;u<s;u++)o[u]=n[u];n=o}for(r*=2,s/=2,c=0,u=0;u<s;u++)i[r]=n[c],i[r+1]=n[c+1],r+=2,c+=2;return}if(r+s>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(r*=2,u=0;u<s;u++)l=t[u],i[r]=tl(l),i[r+1]=nl(l),r+=2;return}throw new TypeError(fe("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",t))});var Q7=$e;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Z7=Q7,Oh=Z7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var q7=sN,J7=MN,eG=eR,tG=AR,nG=QR,rG=xF,iG=GF,oG=hD,aG=zD,sG=xh,lG=Oh,uG=[q7,J7,tG,eG,rG,nG,aG,iG,oG,sG,lG],cG=uG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fG=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],dG=fG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hG=DL,pG=qb,gG=Qt,vG=zL,mG=cG,Z$=dG,yG=Z$.length;function bG(e){var t;if(pG(e))return"generic";if(hG(e))return null;for(t=0;t<yG;t++)if(e instanceof mG[t])return Z$[t];return vG[gG(e)]||null}var $G=bG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _G=$G,wG=_G;/**
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
*/var xG=RI,SG=fh,kG=f4,EG=dh,AG=S4,TG=wG;function CG(e){var t=TG(e);return xG(e)?{accessorProtocol:!0,accessors:[EG(t),AG(t)]}:{accessorProtocol:!1,accessors:[SG(t),kG(t)]}}var PG=CG;/**
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
*/var MG=PG,OG=MG;/**
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
*/var IG=OG;function LG(e){var t=IG(e);return{data:e,accessorProtocol:t.accessorProtocol,accessors:t.accessors}}var NG=LG;/**
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
*/var RG=NG,q$=RG;/**
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
*/function FG(e,t,n,r,i,o,a){var s,l,u,c,f,d,h;for(s=t.data,l=i.data,c=t.accessors[0],u=i.accessors[1],f=r,d=a,h=0;h<e;h++)u(l,d,c(s,f)),f+=n,d+=o;return t}var J$=FG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zm=q$,DG=J$,Ru=8;function jG(e,t,n,r,i){var o,a,s,l,u,c;if(e<=0)return r;if(s=zm(t),l=zm(r),s.accessorProtocol||l.accessorProtocol)return n<0?o=(1-e)*n:o=0,i<0?a=(1-e)*i:a=0,DG(e,s,n,o,l,i,a),l.data;if(n===1&&i===1){if(u=e%Ru,u>0)for(c=0;c<u;c++)r[c]=t[c];if(e<Ru)return r;for(c=u;c<e;c+=Ru)r[c]=t[c],r[c+1]=t[c+1],r[c+2]=t[c+2],r[c+3]=t[c+3],r[c+4]=t[c+4],r[c+5]=t[c+5],r[c+6]=t[c+6],r[c+7]=t[c+7];return r}for(n<0?o=(1-e)*n:o=0,i<0?a=(1-e)*i:a=0,c=0;c<e;c++)r[a]=t[o],o+=n,a+=i;return r}var zG=jG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bm=q$,BG=J$,Qi=8;function UG(e,t,n,r,i,o,a){var s,l,u,c,f,d;if(e<=0)return i;if(u=Bm(t),c=Bm(i),u.accessorProtocol||c.accessorProtocol)return BG(e,u,n,r,c,o,a),c.data;if(s=r,l=a,n===1&&o===1){if(f=e%Qi,f>0)for(d=0;d<f;d++)i[l]=t[s],s+=n,l+=o;if(e<Qi)return i;for(d=f;d<e;d+=Qi)i[l]=t[s],i[l+1]=t[s+1],i[l+2]=t[s+2],i[l+3]=t[s+3],i[l+4]=t[s+4],i[l+5]=t[s+5],i[l+6]=t[s+6],i[l+7]=t[s+7],s+=Qi,l+=Qi;return i}for(d=0;d<e;d++)i[l]=t[s],s+=n,l+=o;return i}var VG=UG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var WG=Ut,e_=zG,HG=VG;WG(e_,"ndarray",HG);var GG=e_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function YG(){}var XG=YG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var KG=XG;function QG(){return KG.name==="foo"}var ZG=QG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qG=ZG,JG=qG;/**
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
*/function eY(){return/^\s*function\s*([^(]*)/i}var t_=eY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tY=t_,nY=tY(),rY=nY;/**
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
*/var iY=Ut,n_=t_,oY=rY;iY(n_,"REGEXP",oY);var aY=n_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sY=El,lY=JG,uY=ie,cY=aY.REGEXP,fY=lY();function dY(e){if(sY(e)===!1)throw new TypeError(uY("invalid argument. Must provide a function. Value: `%s`.",e));return fY?e.name:cY.exec(e.toString())[1]}var hY=dY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pY=hY,gY=pY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vY=lt,mY=typeof Float64Array=="function";function yY(e){return mY&&e instanceof Float64Array||vY(e)==="[object Float64Array]"}var bY=yY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $Y=bY,_Y=$Y;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wY=typeof Float64Array=="function"?Float64Array:null,xY=wY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var SY=_Y,Um=xY;function kY(){var e,t;if(typeof Um!="function")return!1;try{t=new Um([1,3.14,-3.14,NaN]),e=SY(t)&&t[0]===1&&t[1]===3.14&&t[2]===-3.14&&t[3]!==t[3]}catch{e=!1}return e}var EY=kY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var AY=EY,r_=AY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var TY=typeof Float64Array=="function"?Float64Array:void 0,CY=TY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function PY(){throw new Error("not implemented")}var MY=PY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var OY=r_,IY=CY,LY=MY,Mf;OY()?Mf=IY:Mf=LY;var Ul=Mf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var NY=lt,RY=typeof Int8Array=="function";function FY(e){return RY&&e instanceof Int8Array||NY(e)==="[object Int8Array]"}var DY=FY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jY=DY,zY=jY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var BY=127,UY=BY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var VY=-128,WY=VY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var HY=typeof Int8Array=="function"?Int8Array:null,GY=HY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var YY=zY,XY=UY,KY=WY,Vm=GY;function QY(){var e,t;if(typeof Vm!="function")return!1;try{t=new Vm([1,3.14,-3.14,XY+1]),e=YY(t)&&t[0]===1&&t[1]===3&&t[2]===-3&&t[3]===KY}catch{e=!1}return e}var ZY=QY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qY=ZY,JY=qY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eX=typeof Int8Array=="function"?Int8Array:void 0,tX=eX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function nX(){throw new Error("not implemented")}var rX=nX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iX=JY,oX=tX,aX=rX,Of;iX()?Of=oX:Of=aX;var i_=Of;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sX=lt,lX=typeof Uint8Array=="function";function uX(e){return lX&&e instanceof Uint8Array||sX(e)==="[object Uint8Array]"}var cX=uX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fX=cX,dX=fX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hX=255,pX=hX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gX=typeof Uint8Array=="function"?Uint8Array:null,vX=gX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mX=dX,Fu=pX,Wm=vX;function yX(){var e,t;if(typeof Wm!="function")return!1;try{t=[1,3.14,-3.14,Fu+1,Fu+2],t=new Wm(t),e=mX(t)&&t[0]===1&&t[1]===3&&t[2]===Fu-2&&t[3]===0&&t[4]===1}catch{e=!1}return e}var bX=yX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $X=bX,_X=$X;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wX=typeof Uint8Array=="function"?Uint8Array:void 0,xX=wX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function SX(){throw new Error("not implemented")}var kX=SX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var EX=_X,AX=xX,TX=kX,If;EX()?If=AX:If=TX;var o_=If;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var CX=lt,PX=typeof Uint8ClampedArray=="function";function MX(e){return PX&&e instanceof Uint8ClampedArray||CX(e)==="[object Uint8ClampedArray]"}var OX=MX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var IX=OX,LX=IX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var NX=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null,RX=NX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var FX=LX,Hm=RX;function DX(){var e,t;if(typeof Hm!="function")return!1;try{t=new Hm([-1,0,1,3.14,4.99,255,256]),e=FX(t)&&t[0]===0&&t[1]===0&&t[2]===1&&t[3]===3&&t[4]===5&&t[5]===255&&t[6]===255}catch{e=!1}return e}var jX=DX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zX=jX,BX=zX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var UX=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0,VX=UX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function WX(){throw new Error("not implemented")}var HX=WX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var GX=BX,YX=VX,XX=HX,Lf;GX()?Lf=YX:Lf=XX;var a_=Lf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var KX=lt,QX=typeof Int16Array=="function";function ZX(e){return QX&&e instanceof Int16Array||KX(e)==="[object Int16Array]"}var qX=ZX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var JX=qX,eK=JX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tK=32767,nK=tK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rK=-32768,iK=rK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oK=typeof Int16Array=="function"?Int16Array:null,aK=oK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sK=eK,lK=nK,uK=iK,Gm=aK;function cK(){var e,t;if(typeof Gm!="function")return!1;try{t=new Gm([1,3.14,-3.14,lK+1]),e=sK(t)&&t[0]===1&&t[1]===3&&t[2]===-3&&t[3]===uK}catch{e=!1}return e}var fK=cK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dK=fK,hK=dK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pK=typeof Int16Array=="function"?Int16Array:void 0,gK=pK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function vK(){throw new Error("not implemented")}var mK=vK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yK=hK,bK=gK,$K=mK,Nf;yK()?Nf=bK:Nf=$K;var s_=Nf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _K=lt,wK=typeof Uint16Array=="function";function xK(e){return wK&&e instanceof Uint16Array||_K(e)==="[object Uint16Array]"}var SK=xK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kK=SK,EK=kK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var AK=65535,TK=AK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var CK=typeof Uint16Array=="function"?Uint16Array:null,PK=CK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var MK=EK,Du=TK,Ym=PK;function OK(){var e,t;if(typeof Ym!="function")return!1;try{t=[1,3.14,-3.14,Du+1,Du+2],t=new Ym(t),e=MK(t)&&t[0]===1&&t[1]===3&&t[2]===Du-2&&t[3]===0&&t[4]===1}catch{e=!1}return e}var IK=OK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var LK=IK,NK=LK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var RK=typeof Uint16Array=="function"?Uint16Array:void 0,FK=RK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function DK(){throw new Error("not implemented")}var jK=DK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zK=NK,BK=FK,UK=jK,Rf;zK()?Rf=BK:Rf=UK;var l_=Rf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var VK=lt,WK=typeof Int32Array=="function";function HK(e){return WK&&e instanceof Int32Array||VK(e)==="[object Int32Array]"}var GK=HK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var YK=GK,XK=YK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var KK=2147483647,QK=KK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ZK=-2147483648,qK=ZK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var JK=typeof Int32Array=="function"?Int32Array:null,eQ=JK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tQ=XK,nQ=QK,rQ=qK,Xm=eQ;function iQ(){var e,t;if(typeof Xm!="function")return!1;try{t=new Xm([1,3.14,-3.14,nQ+1]),e=tQ(t)&&t[0]===1&&t[1]===3&&t[2]===-3&&t[3]===rQ}catch{e=!1}return e}var oQ=iQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aQ=oQ,sQ=aQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lQ=typeof Int32Array=="function"?Int32Array:void 0,uQ=lQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function cQ(){throw new Error("not implemented")}var fQ=cQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dQ=sQ,hQ=uQ,pQ=fQ,Ff;dQ()?Ff=hQ:Ff=pQ;var u_=Ff;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gQ=lt,vQ=typeof Float32Array=="function";function mQ(e){return vQ&&e instanceof Float32Array||gQ(e)==="[object Float32Array]"}var yQ=mQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bQ=yQ,$Q=bQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _Q=typeof Float32Array=="function"?Float32Array:null,wQ=_Q;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xQ=$Q,SQ=Tl,Km=wQ;function kQ(){var e,t;if(typeof Km!="function")return!1;try{t=new Km([1,3.14,-3.14,5e40]),e=xQ(t)&&t[0]===1&&t[1]===3.140000104904175&&t[2]===-3.140000104904175&&t[3]===SQ}catch{e=!1}return e}var EQ=kQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var AQ=EQ,TQ=AQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var CQ=typeof Float32Array=="function"?Float32Array:void 0,PQ=CQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function MQ(){throw new Error("not implemented")}var OQ=MQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var IQ=TQ,LQ=PQ,NQ=OQ,Df;IQ()?Df=LQ:Df=NQ;var Ih=Df;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var RQ=i_,FQ=o_,DQ=a_,jQ=s_,zQ=l_,BQ=u_,UQ=ch,VQ=Ih,WQ=Ul,HQ=[WQ,VQ,BQ,UQ,jQ,zQ,RQ,FQ,DQ],GQ=HQ;const YQ=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"];/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var XQ=Qt,KQ=gY,c_=Al,QQ=r_,ZQ=Ul,Qm=GQ,Zm=YQ,gs=QQ()?c_(ZQ):f_;gs=KQ(gs)==="TypedArray"?gs:f_;function f_(){}function qQ(e){var t,n;if(typeof e!="object"||e===null)return!1;if(e instanceof gs)return!0;for(n=0;n<Qm.length;n++)if(e instanceof Qm[n])return!0;for(;e;){for(t=XQ(e),n=0;n<Zm.length;n++)if(Zm[n]===t)return!0;e=c_(e)}return!1}var JQ=qQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eZ=JQ,tZ=eZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nZ=xh,rZ=Oh,iZ=[rZ,nZ],oZ=iZ;const aZ=["Complex64Array","Complex128Array"];/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sZ=Qt,lZ=Al,qm=oZ,Jm=aZ;function uZ(e){var t,n;if(typeof e!="object"||e===null)return!1;for(n=0;n<qm.length;n++)if(e instanceof qm[n])return!0;for(;e;){for(t=sZ(e),n=0;n<Jm.length;n++)if(Jm[n]===t)return!0;e=lZ(e)}return!1}var cZ=uZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var hZ=Ih;function pZ(e,t){return new hZ(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*t,2*(e.length-t))}var gZ=pZ;/**
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
*/var vZ=gZ,mZ=vZ;/**
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
*/var yZ=Ul;function bZ(e,t){return new yZ(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*t,2*(e.length-t))}var $Z=bZ;/**
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
*/var _Z=$Z,wZ=_Z;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xZ=ie;function SZ(e,t){if(typeof t!="function")throw new TypeError(xZ("invalid argument. Second argument must be callable. Value: `%s`.",t));return e instanceof t}var kZ=SZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var EZ=kZ,AZ=EZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var TZ=i_,CZ=o_,PZ=a_,MZ=s_,OZ=l_,IZ=u_,LZ=ch,NZ=Ih,RZ=Ul,FZ=xh,DZ=Oh,jZ=[[RZ,"Float64Array"],[NZ,"Float32Array"],[IZ,"Int32Array"],[LZ,"Uint32Array"],[MZ,"Int16Array"],[OZ,"Uint16Array"],[TZ,"Int8Array"],[CZ,"Uint8Array"],[PZ,"Uint8ClampedArray"],[FZ,"Complex64Array"],[DZ,"Complex128Array"]],zZ=jZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var BZ=AZ,UZ=Qt,VZ=Al,Rr=zZ;function WZ(e){var t,n;for(n=0;n<Rr.length;n++)if(BZ(e,Rr[n][0]))return Rr[n][1];for(;e;){for(t=UZ(e),n=0;n<Rr.length;n++)if(t===Rr[n][1])return Rr[n][1];e=VZ(e)}}var HZ=WZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var GZ=tZ,YZ=dZ,XZ=mZ,KZ=wZ,QZ=ie,ZZ=HZ;function qZ(e){var t,n,r;if(GZ(e))t=e;else if(YZ(e))e.BYTES_PER_ELEMENT===8?t=XZ(e,0):t=KZ(e,0);else throw new TypeError(QZ("invalid argument. Must provide a typed array. Value: `%s`.",e));for(n={type:ZZ(e),data:[]},r=0;r<t.length;r++)n.data.push(t[r]);return n}var JZ=qZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eq=JZ,d_=eq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tq=uh,nq=Fb,rq=tq-1;function iq(){var e=nq(1+rq*Math.random());return e>>>0}var h_=iq,Jt=Ut,yn=Sb,ey=kb,ju=kl,oq=Rb,aq=KM,ty=jb,sq=Pb.isPrimitive,ny=qO.isPrimitive,p_=eI,g_=uh,Qe=ch,lq=TI,jf=OI,Fr=GG,uq=d_,qe=ie,ry=h_,Ee=624,zu=397,iy=g_>>>0,cq=19650218,Bu=2147483648,Uu=2147483647,fq=1812433253,dq=1664525,hq=1566083941,pq=2636928640,gq=4022730752,vq=2567483615,Vu=[0,vq>>>0],v_=1/(p_+1),mq=67108864,yq=2147483648,Wu=1,bq=p_*v_,rl=1,il=3,Sn=2,kn=Ee+3,Ze=Ee+5,ko=Ee+6;function oy(e,t){var n;return t?n="option":n="argument",e.length<ko+1?new RangeError(qe("invalid %s. `state` array has insufficient length.",n)):e[0]!==rl?new RangeError(qe("invalid %s. `state` array has an incompatible schema version. Expected: `%s`. Actual: `%s.`",n,rl,e[0])):e[1]!==il?new RangeError(qe("invalid %s. `state` array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",n,il,e[1])):e[Sn]!==Ee?new RangeError(qe("invalid %s. `state` array has an incompatible state length. Expected: `%u`. Actual: `%u`.",n,Ee,e[Sn])):e[kn]!==1?new RangeError(qe("invalid %s. `state` array has an incompatible section length. Expected: `%u`. Actual: `%u`.",n,1,e[kn])):e[Ze]!==e.length-ko?new RangeError(qe("invalid %s. `state` array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",n,e.length-ko,e[Ze])):null}function ay(e,t,n){var r;for(e[0]=n>>>0,r=1;r<t;r++)n=e[r-1]>>>0,n=(n^n>>>30)>>>0,e[r]=jf(n,fq)+r>>>0;return e}function $q(e,t,n,r){var i,o,a,s;for(o=1,a=0,s=lq(t,r);s>0;s--)i=e[o-1]>>>0,i=(i^i>>>30)>>>0,i=jf(i,dq)>>>0,e[o]=(e[o]>>>0^i)+n[a]+a>>>0,o+=1,a+=1,o>=t&&(e[0]=e[t-1],o=1),a>=r&&(a=0);for(s=t-1;s>0;s--)i=e[o-1]>>>0,i=(i^i>>>30)>>>0,i=jf(i,hq)>>>0,e[o]=(e[o]>>>0^i)-o>>>0,o+=1,o>=t&&(e[0]=e[t-1],o=1);return e[0]=yq,e}function _q(e){var t,n,r,i;for(i=Ee-zu,n=0;n<i;n++)t=e[n]&Bu|e[n+1]&Uu,e[n]=e[n+zu]^t>>>1^Vu[t&Wu];for(r=Ee-1;n<r;n++)t=e[n]&Bu|e[n+1]&Uu,e[n]=e[n-i]^t>>>1^Vu[t&Wu];return t=e[r]&Bu|e[0]&Uu,e[r]=e[zu-1]^t>>>1^Vu[t&Wu],e}function wq(e){var t,n,r,i,o,a;if(r={},arguments.length){if(!oq(e))throw new TypeError(qe("invalid argument. Options argument must be an object. Value: `%s`.",e));if(ju(e,"copy")&&(r.copy=e.copy,!sq(e.copy)))throw new TypeError(qe("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",e.copy));if(ju(e,"state")){if(n=e.state,r.state=!0,!ty(n))throw new TypeError(qe("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n));if(a=oy(n,!0),a)throw a;r.copy===!1?t=n:(t=new Qe(n.length),Fr(n.length,n,1,t,1)),n=new Qe(t.buffer,t.byteOffset+(Sn+1)*t.BYTES_PER_ELEMENT,Ee),i=new Qe(t.buffer,t.byteOffset+(Ze+1)*t.BYTES_PER_ELEMENT,n[Ze])}if(i===void 0)if(ju(e,"seed"))if(i=e.seed,r.seed=!0,ny(i)){if(i>iy)throw new RangeError(qe("invalid option. `%s` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",i));i>>>=0}else{if(aq(i)===!1||i.length<1)throw new TypeError(qe("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",i));if(i.length===1){if(i=i[0],!ny(i))throw new TypeError(qe("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",i));if(i>iy)throw new RangeError(qe("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",i));i>>>=0}else o=i.length,t=new Qe(ko+o),t[0]=rl,t[1]=il,t[Sn]=Ee,t[kn]=1,t[kn+1]=Ee,t[Ze]=o,Fr.ndarray(o,i,1,0,t,1,Ze+1),n=new Qe(t.buffer,t.byteOffset+(Sn+1)*t.BYTES_PER_ELEMENT,Ee),i=new Qe(t.buffer,t.byteOffset+(Ze+1)*t.BYTES_PER_ELEMENT,o),n=ay(n,Ee,cq),n=$q(n,Ee,i,o)}else i=ry()>>>0}else i=ry()>>>0;return n===void 0&&(t=new Qe(ko+1),t[0]=rl,t[1]=il,t[Sn]=Ee,t[kn]=1,t[kn+1]=Ee,t[Ze]=1,t[Ze+1]=i,n=new Qe(t.buffer,t.byteOffset+(Sn+1)*t.BYTES_PER_ELEMENT,Ee),i=new Qe(t.buffer,t.byteOffset+(Ze+1)*t.BYTES_PER_ELEMENT,1),n=ay(n,Ee,i)),Jt(v,"NAME","mt19937"),yn(v,"seed",s),yn(v,"seedLength",l),ey(v,"state",f,d),yn(v,"stateLength",u),yn(v,"byteLength",c),Jt(v,"toJSON",h),Jt(v,"MIN",0),Jt(v,"MAX",g_),Jt(v,"normalized",m),Jt(m,"NAME",v.NAME),yn(m,"seed",s),yn(m,"seedLength",l),ey(m,"state",f,d),yn(m,"stateLength",u),yn(m,"byteLength",c),Jt(m,"toJSON",h),Jt(m,"MIN",0),Jt(m,"MAX",bq),v;function s(){var y=t[Ze];return Fr(y,i,1,new Qe(y),1)}function l(){return t[Ze]}function u(){return t.length}function c(){return t.byteLength}function f(){var y=t.length;return Fr(y,t,1,new Qe(y),1)}function d(y){var p;if(!ty(y))throw new TypeError(qe("invalid argument. Must provide a Uint32Array. Value: `%s`.",y));if(p=oy(y,!1),p)throw p;r.copy===!1?r.state&&y.length===t.length?Fr(y.length,y,1,t,1):(t=y,r.state=!0):(y.length!==t.length&&(t=new Qe(y.length)),Fr(y.length,y,1,t,1)),n=new Qe(t.buffer,t.byteOffset+(Sn+1)*t.BYTES_PER_ELEMENT,Ee),i=new Qe(t.buffer,t.byteOffset+(Ze+1)*t.BYTES_PER_ELEMENT,t[Ze])}function h(){var y={};return y.type="PRNG",y.name=v.NAME,y.state=uq(t),y.params=[],y}function v(){var y,p;return p=t[kn+1],p>=Ee&&(n=_q(n),p=0),y=n[p],t[kn+1]=p+1,y^=y>>>11,y^=y<<7&pq,y^=y<<15&gq,y^=y>>>18,y>>>0}function m(){var y=v()>>>5,p=v()>>>6;return(y*mq+p)*v_}}var m_=wq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xq=m_,Sq=h_,kq=xq({seed:Sq()}),Eq=kq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Aq=Ut,y_=Eq,Tq=m_;Aq(y_,"factory",Tq);var Cq=y_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pq=ta.isPrimitive,Mq=Cl;function Oq(e){return Pq(e)&&Mq(e)}var b_=Oq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Iq=ta.isObject,Lq=Cl;function Nq(e){return Iq(e)&&Lq(e.valueOf())}var $_=Nq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rq=b_,Fq=$_;function Dq(e){return Rq(e)||Fq(e)}var jq=Dq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var __=Ut,Lh=jq,zq=b_,Bq=$_;__(Lh,"isPrimitive",zq);__(Lh,"isObject",Bq);var Uq=Lh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hu=ta.isPrimitive,Ga=ie,Gu=Uq;function Vq(e,t,n){return!Hu(e)||Gu(e)?new TypeError(Ga("invalid argument. First argument must be a number and not NaN. Value: `%s`.",e)):!Hu(t)||Gu(t)?new TypeError(Ga("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",t)):!Hu(n)||Gu(n)?new TypeError(Ga("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",n)):e<=n&&n<=t?null:new RangeError(Ga("invalid arguments. Parameters must satisfy the following condition: %s. a: `%f`. b: `%f`. c: `%f`.","a <= c <= b",e,t,n))}var Wq=Vq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hq=Math.sqrt,Gq=Hq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yq=Gq,Xq=Yq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sy=Xq;function Kq(e,t,n,r){var i,o,a;return i=(r-t)/(n-t),a=e(),a<i?(o=(n-t)*(r-t),t+sy(o*a)):(o=(n-t)*(n-r),n-sy(o*(1-a)))}var Qq=Kq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var en=Ut,Ya=Sb,ly=kb,uy=Rb,cy=El,fy=kl,dy=PM,Zq=LM,Xa=Cq.factory,Yu=Cl,qq=d_,Ka=ie,Jq=Wq,hy=Qq;function eJ(){var e,t,n,r,i,o,a;if(arguments.length===0)t=Xa();else if(arguments.length===1){if(e=arguments[0],!uy(e))throw new TypeError(Ka("invalid argument. Options argument must be an object. Value: `%s`.",e));if(fy(e,"prng")){if(!cy(e.prng))throw new TypeError(Ka("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Xa(e)}else{if(i=arguments[0],o=arguments[1],a=arguments[2],r=Jq(i,o,a),r)throw r;if(arguments.length>3){if(e=arguments[3],!uy(e))throw new TypeError(Ka("invalid argument. Options argument must be an object. Value: `%s`.",e));if(fy(e,"prng")){if(!cy(e.prng))throw new TypeError(Ka("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Xa(e)}else t=Xa()}return i===void 0?n=m:n=v,en(n,"NAME","triangular"),e&&e.prng?(en(n,"seed",null),en(n,"seedLength",null),ly(n,"state",dy(null),Zq),en(n,"stateLength",null),en(n,"byteLength",null),en(n,"toJSON",dy(null)),en(n,"PRNG",t)):(Ya(n,"seed",s),Ya(n,"seedLength",l),ly(n,"state",f,d),Ya(n,"stateLength",u),Ya(n,"byteLength",c),en(n,"toJSON",h),en(n,"PRNG",t),t=t.normalized),n;function s(){return t.seed}function l(){return t.seedLength}function u(){return t.stateLength}function c(){return t.byteLength}function f(){return t.state}function d(y){t.state=y}function h(){var y={};return y.type="PRNG",y.name=n.NAME,y.state=qq(t.state),i===void 0?y.params=[]:y.params=[i,o,a],y}function v(){return hy(t,i,o,a)}function m(y,p,g){return Yu(y)||Yu(p)||Yu(g)||!(y<=g&&g<=p)?NaN:hy(t,y,p,g)}}var w_=eJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tJ=w_,nJ=tJ(),rJ=nJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iJ=Ut,x_=rJ,oJ=w_;iJ(x_,"factory",oJ);var aJ=x_;const py=by(aJ);function sJ(){for(var e=0,t,n,r="";e<arguments.length;)(t=arguments[e++])&&(n=S_(t))&&(r&&(r+=" "),r+=n);return r}function S_(e){if(typeof e=="string")return e;for(var t,n="",r=0;r<e.length;r++)e[r]&&(t=S_(e[r]))&&(n&&(n+=" "),n+=t);return n}var Nh="-";function lJ(e){var t=cJ(e),n=e.conflictingClassGroups,r=e.conflictingClassGroupModifiers,i=r===void 0?{}:r;function o(s){var l=s.split(Nh);return l[0]===""&&l.length!==1&&l.shift(),k_(l,t)||uJ(s)}function a(s,l){var u=n[s]||[];return l&&i[s]?[].concat(u,i[s]):u}return{getClassGroupId:o,getConflictingClassGroupIds:a}}function k_(e,t){var a;if(e.length===0)return t.classGroupId;var n=e[0],r=t.nextPart.get(n),i=r?k_(e.slice(1),r):void 0;if(i)return i;if(t.validators.length!==0){var o=e.join(Nh);return(a=t.validators.find(function(s){var l=s.validator;return l(o)}))==null?void 0:a.classGroupId}}var gy=/^\[(.+)\]$/;function uJ(e){if(gy.test(e)){var t=gy.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}}function cJ(e){var t=e.theme,n=e.prefix,r={nextPart:new Map,validators:[]},i=dJ(Object.entries(e.classGroups),n);return i.forEach(function(o){var a=o[0],s=o[1];zf(s,r,a,t)}),r}function zf(e,t,n,r){e.forEach(function(i){if(typeof i=="string"){var o=i===""?t:vy(t,i);o.classGroupId=n;return}if(typeof i=="function"){if(fJ(i)){zf(i(r),t,n,r);return}t.validators.push({validator:i,classGroupId:n});return}Object.entries(i).forEach(function(a){var s=a[0],l=a[1];zf(l,vy(t,s),n,r)})})}function vy(e,t){var n=e;return t.split(Nh).forEach(function(r){n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n}function fJ(e){return e.isThemeGetter}function dJ(e,t){return t?e.map(function(n){var r=n[0],i=n[1],o=i.map(function(a){return typeof a=="string"?t+a:typeof a=="object"?Object.fromEntries(Object.entries(a).map(function(s){var l=s[0],u=s[1];return[t+l,u]})):a});return[r,o]}):e}function hJ(e){if(e<1)return{get:function(){},set:function(){}};var t=0,n=new Map,r=new Map;function i(o,a){n.set(o,a),t++,t>e&&(t=0,r=n,n=new Map)}return{get:function(a){var s=n.get(a);if(s!==void 0)return s;if((s=r.get(a))!==void 0)return i(a,s),s},set:function(a,s){n.has(a)?n.set(a,s):i(a,s)}}}var E_="!";function pJ(e){var t=e.separator||":",n=t.length===1,r=t[0],i=t.length;return function(a){for(var s=[],l=0,u=0,c,f=0;f<a.length;f++){var d=a[f];if(l===0){if(d===r&&(n||a.slice(f,f+i)===t)){s.push(a.slice(u,f)),u=f+i;continue}if(d==="/"){c=f;continue}}d==="["?l++:d==="]"&&l--}var h=s.length===0?a:a.substring(u),v=h.startsWith(E_),m=v?h.substring(1):h,y=c&&c>u?c-u:void 0;return{modifiers:s,hasImportantModifier:v,baseClassName:m,maybePostfixModifierPosition:y}}}function gJ(e){if(e.length<=1)return e;var t=[],n=[];return e.forEach(function(r){var i=r[0]==="[";i?(t.push.apply(t,n.sort().concat([r])),n=[]):n.push(r)}),t.push.apply(t,n.sort()),t}function vJ(e){return{cache:hJ(e.cacheSize),splitModifiers:pJ(e),...lJ(e)}}var mJ=/\s+/;function yJ(e,t){var n=t.splitModifiers,r=t.getClassGroupId,i=t.getConflictingClassGroupIds,o=new Set;return e.trim().split(mJ).map(function(a){var s=n(a),l=s.modifiers,u=s.hasImportantModifier,c=s.baseClassName,f=s.maybePostfixModifierPosition,d=r(f?c.substring(0,f):c),h=!!f;if(!d){if(!f)return{isTailwindClass:!1,originalClassName:a};if(d=r(c),!d)return{isTailwindClass:!1,originalClassName:a};h=!1}var v=gJ(l).join(":"),m=u?v+E_:v;return{isTailwindClass:!0,modifierId:m,classGroupId:d,originalClassName:a,hasPostfixModifier:h}}).reverse().filter(function(a){if(!a.isTailwindClass)return!0;var s=a.modifierId,l=a.classGroupId,u=a.hasPostfixModifier,c=s+l;return o.has(c)?!1:(o.add(c),i(l,u).forEach(function(f){return o.add(s+f)}),!0)}).reverse().map(function(a){return a.originalClassName}).join(" ")}function bJ(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r,i,o,a=s;function s(u){var c=t[0],f=t.slice(1),d=f.reduce(function(h,v){return v(h)},c());return r=vJ(d),i=r.cache.get,o=r.cache.set,a=l,l(u)}function l(u){var c=i(u);if(c)return c;var f=yJ(u,r);return o(u,f),f}return function(){return a(sJ.apply(null,arguments))}}function oe(e){var t=function(r){return r[e]||[]};return t.isThemeGetter=!0,t}var A_=/^\[(?:([a-z-]+):)?(.+)\]$/i,$J=/^\d+\/\d+$/,_J=new Set(["px","full","screen"]),wJ=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,xJ=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,SJ=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function Lt(e){return cr(e)||_J.has(e)||$J.test(e)||Bf(e)}function Bf(e){return Mr(e,"length",PJ)}function kJ(e){return Mr(e,"size",T_)}function EJ(e){return Mr(e,"position",T_)}function AJ(e){return Mr(e,"url",MJ)}function Qa(e){return Mr(e,"number",cr)}function cr(e){return!Number.isNaN(Number(e))}function TJ(e){return e.endsWith("%")&&cr(e.slice(0,-1))}function Zi(e){return my(e)||Mr(e,"number",my)}function W(e){return A_.test(e)}function qi(){return!0}function bn(e){return wJ.test(e)}function CJ(e){return Mr(e,"",OJ)}function Mr(e,t,n){var r=A_.exec(e);return r?r[1]?r[1]===t:n(r[2]):!1}function PJ(e){return xJ.test(e)}function T_(){return!1}function MJ(e){return e.startsWith("url(")}function my(e){return Number.isInteger(Number(e))}function OJ(e){return SJ.test(e)}function IJ(){var e=oe("colors"),t=oe("spacing"),n=oe("blur"),r=oe("brightness"),i=oe("borderColor"),o=oe("borderRadius"),a=oe("borderSpacing"),s=oe("borderWidth"),l=oe("contrast"),u=oe("grayscale"),c=oe("hueRotate"),f=oe("invert"),d=oe("gap"),h=oe("gradientColorStops"),v=oe("gradientColorStopPositions"),m=oe("inset"),y=oe("margin"),p=oe("opacity"),g=oe("padding"),b=oe("saturate"),$=oe("scale"),_=oe("sepia"),k=oe("skew"),w=oe("space"),E=oe("translate"),M=function(){return["auto","contain","none"]},C=function(){return["auto","hidden","clip","visible","scroll"]},x=function(){return["auto",W,t]},S=function(){return[W,t]},P=function(){return["",Lt]},D=function(){return["auto",cr,W]},L=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},N=function(){return["solid","dashed","dotted","double","none"]},j=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},A=function(){return["start","end","center","between","around","evenly","stretch"]},I=function(){return["","0",W]},O=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},B=function(){return[cr,Qa]},z=function(){return[cr,W]};return{cacheSize:500,theme:{colors:[qi],spacing:[Lt],blur:["none","",bn,W],brightness:B(),borderColor:[e],borderRadius:["none","","full",bn,W],borderSpacing:S(),borderWidth:P(),contrast:B(),grayscale:I(),hueRotate:z(),invert:I(),gap:S(),gradientColorStops:[e],gradientColorStopPositions:[TJ,Bf],inset:x(),margin:x(),opacity:B(),padding:S(),saturate:B(),scale:B(),sepia:I(),skew:z(),space:S(),translate:S()},classGroups:{aspect:[{aspect:["auto","square","video",W]}],container:["container"],columns:[{columns:[bn]}],"break-after":[{"break-after":O()}],"break-before":[{"break-before":O()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(L(),[W])}],overflow:[{overflow:C()}],"overflow-x":[{"overflow-x":C()}],"overflow-y":[{"overflow-y":C()}],overscroll:[{overscroll:M()}],"overscroll-x":[{"overscroll-x":M()}],"overscroll-y":[{"overscroll-y":M()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Zi]}],basis:[{basis:x()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",W]}],grow:[{grow:I()}],shrink:[{shrink:I()}],order:[{order:["first","last","none",Zi]}],"grid-cols":[{"grid-cols":[qi]}],"col-start-end":[{col:["auto",{span:["full",Zi]},W]}],"col-start":[{"col-start":D()}],"col-end":[{"col-end":D()}],"grid-rows":[{"grid-rows":[qi]}],"row-start-end":[{row:["auto",{span:[Zi]},W]}],"row-start":[{"row-start":D()}],"row-end":[{"row-end":D()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",W]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",W]}],gap:[{gap:[d]}],"gap-x":[{"gap-x":[d]}],"gap-y":[{"gap-y":[d]}],"justify-content":[{justify:["normal"].concat(A())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(A(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(A(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[g]}],px:[{px:[g]}],py:[{py:[g]}],ps:[{ps:[g]}],pe:[{pe:[g]}],pt:[{pt:[g]}],pr:[{pr:[g]}],pb:[{pb:[g]}],pl:[{pl:[g]}],m:[{m:[y]}],mx:[{mx:[y]}],my:[{my:[y]}],ms:[{ms:[y]}],me:[{me:[y]}],mt:[{mt:[y]}],mr:[{mr:[y]}],mb:[{mb:[y]}],ml:[{ml:[y]}],"space-x":[{"space-x":[w]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[w]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",W,t]}],"min-w":[{"min-w":["min","max","fit",W,Lt]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[bn]},bn,W]}],h:[{h:[W,t,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",W,Lt]}],"max-h":[{"max-h":[W,t,"min","max","fit"]}],"font-size":[{text:["base",bn,Bf]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Qa]}],"font-family":[{font:[qi]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",W]}],"line-clamp":[{"line-clamp":["none",cr,Qa]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",W,Lt]}],"list-image":[{"list-image":["none",W]}],"list-style-type":[{list:["none","disc","decimal",W]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[p]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[p]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(N(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",Lt]}],"underline-offset":[{"underline-offset":["auto",W,Lt]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:S()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",W]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",W]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[p]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(L(),[EJ])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",kJ]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},AJ]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[v]}],"gradient-via-pos":[{via:[v]}],"gradient-to-pos":[{to:[v]}],"gradient-from":[{from:[h]}],"gradient-via":[{via:[h]}],"gradient-to":[{to:[h]}],rounded:[{rounded:[o]}],"rounded-s":[{"rounded-s":[o]}],"rounded-e":[{"rounded-e":[o]}],"rounded-t":[{"rounded-t":[o]}],"rounded-r":[{"rounded-r":[o]}],"rounded-b":[{"rounded-b":[o]}],"rounded-l":[{"rounded-l":[o]}],"rounded-ss":[{"rounded-ss":[o]}],"rounded-se":[{"rounded-se":[o]}],"rounded-ee":[{"rounded-ee":[o]}],"rounded-es":[{"rounded-es":[o]}],"rounded-tl":[{"rounded-tl":[o]}],"rounded-tr":[{"rounded-tr":[o]}],"rounded-br":[{"rounded-br":[o]}],"rounded-bl":[{"rounded-bl":[o]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[p]}],"border-style":[{border:[].concat(N(),["hidden"])}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[p]}],"divide-style":[{divide:N()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:[""].concat(N())}],"outline-offset":[{"outline-offset":[W,Lt]}],"outline-w":[{outline:[Lt]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:P()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[p]}],"ring-offset-w":[{"ring-offset":[Lt]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",bn,CJ]}],"shadow-color":[{shadow:[qi]}],opacity:[{opacity:[p]}],"mix-blend":[{"mix-blend":j()}],"bg-blend":[{"bg-blend":j()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",bn,W]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[c]}],invert:[{invert:[f]}],saturate:[{saturate:[b]}],sepia:[{sepia:[_]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[c]}],"backdrop-invert":[{"backdrop-invert":[f]}],"backdrop-opacity":[{"backdrop-opacity":[p]}],"backdrop-saturate":[{"backdrop-saturate":[b]}],"backdrop-sepia":[{"backdrop-sepia":[_]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",W]}],duration:[{duration:z()}],ease:[{ease:["linear","in","out","in-out",W]}],delay:[{delay:z()}],animate:[{animate:["none","spin","ping","pulse","bounce",W]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[$]}],"scale-x":[{"scale-x":[$]}],"scale-y":[{"scale-y":[$]}],rotate:[{rotate:[Zi,W]}],"translate-x":[{"translate-x":[E]}],"translate-y":[{"translate-y":[E]}],"skew-x":[{"skew-x":[k]}],"skew-y":[{"skew-y":[k]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",W]}],accent:[{accent:["auto",e]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",W]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":S()}],"scroll-mx":[{"scroll-mx":S()}],"scroll-my":[{"scroll-my":S()}],"scroll-ms":[{"scroll-ms":S()}],"scroll-me":[{"scroll-me":S()}],"scroll-mt":[{"scroll-mt":S()}],"scroll-mr":[{"scroll-mr":S()}],"scroll-mb":[{"scroll-mb":S()}],"scroll-ml":[{"scroll-ml":S()}],"scroll-p":[{"scroll-p":S()}],"scroll-px":[{"scroll-px":S()}],"scroll-py":[{"scroll-py":S()}],"scroll-ps":[{"scroll-ps":S()}],"scroll-pe":[{"scroll-pe":S()}],"scroll-pt":[{"scroll-pt":S()}],"scroll-pr":[{"scroll-pr":S()}],"scroll-pb":[{"scroll-pb":S()}],"scroll-pl":[{"scroll-pl":S()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",W]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[Lt,Qa]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}var LJ=bJ(IJ),Uf={},Rh={},Fh={},Vl={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Direction=void 0,function(t){t.Right="to right",t.Left="to left",t.Down="to bottom",t.Up="to top"}(e.Direction||(e.Direction={}))})(Vl);(function(e){var t=st&&st.__spreadArray||function(x,S,P){if(P||arguments.length===2)for(var D=0,L=S.length,N;D<L;D++)(N||!(D in S))&&(N||(N=Array.prototype.slice.call(S,0,D)),N[D]=S[D]);return x.concat(N||Array.prototype.slice.call(S))};Object.defineProperty(e,"__esModule",{value:!0}),e.useThumbOverlap=e.assertUnreachable=e.voidFn=e.getTrackBackground=e.replaceAt=e.schd=e.translate=e.getClosestThumbIndex=e.translateThumbs=e.getPaddingAndBorder=e.getMargin=e.checkInitialOverlap=e.checkValuesAgainstBoundaries=e.checkBoundaries=e.isVertical=e.relativeValue=e.normalizeValue=e.isStepDivisible=e.isTouchEvent=e.getStepDecimals=void 0;var n=G,r=Vl,i=function(x){var S=x.toString().split(".")[1];return S?S.length:0};e.getStepDecimals=i;function o(x){return x.touches&&x.touches.length||x.changedTouches&&x.changedTouches.length}e.isTouchEvent=o;function a(x,S,P){var D=(S-x)/P,L=8,N=Number(D.toFixed(L));return parseInt(N.toString(),10)===N}e.isStepDivisible=a;function s(x,S,P,D,L,N,j){var A=1e11;if(x=Math.round(x*A)/A,!N){var I=j[S-1],O=j[S+1];if(I&&I>x)return I;if(O&&O<x)return O}if(x>D)return D;if(x<P)return P;var B=Math.floor(x*A-P*A)%Math.floor(L*A),z=Math.floor(x*A-Math.abs(B)),V=B===0?x:z/A,X=Math.abs(B/A)<L/2?V:V+L,he=(0,e.getStepDecimals)(L);return parseFloat(X.toFixed(he))}e.normalizeValue=s;function l(x,S,P){return(x-S)/(P-S)}e.relativeValue=l;function u(x){return x===r.Direction.Up||x===r.Direction.Down}e.isVertical=u;function c(x,S,P){if(S>=P)throw new RangeError("min (".concat(S,") is equal/bigger than max (").concat(P,")"));if(x<S)throw new RangeError("value (".concat(x,") is smaller than min (").concat(S,")"));if(x>P)throw new RangeError("value (".concat(x,") is bigger than max (").concat(P,")"))}e.checkBoundaries=c;function f(x,S,P){return x<S?S:x>P?P:x}e.checkValuesAgainstBoundaries=f;function d(x){if(!(x.length<2)&&!x.slice(1).every(function(S,P){return x[P]<=S}))throw new RangeError("values={[".concat(x,"]} needs to be sorted when allowOverlap={false}"))}e.checkInitialOverlap=d;function h(x){var S=window.getComputedStyle(x);return{top:parseInt(S["margin-top"],10),bottom:parseInt(S["margin-bottom"],10),left:parseInt(S["margin-left"],10),right:parseInt(S["margin-right"],10)}}e.getMargin=h;function v(x){var S=window.getComputedStyle(x);return{top:parseInt(S["padding-top"],10)+parseInt(S["border-top-width"],10),bottom:parseInt(S["padding-bottom"],10)+parseInt(S["border-bottom-width"],10),left:parseInt(S["padding-left"],10)+parseInt(S["border-left-width"],10),right:parseInt(S["padding-right"],10)+parseInt(S["border-right-width"],10)}}e.getPaddingAndBorder=v;function m(x,S,P){var D=P?-1:1;x.forEach(function(L,N){return p(L,D*S[N].x,S[N].y)})}e.translateThumbs=m;function y(x,S,P,D){for(var L=0,N=C(x[0],S,P,D),j=1;j<x.length;j++){var A=C(x[j],S,P,D);A<N&&(N=A,L=j)}return L}e.getClosestThumbIndex=y;function p(x,S,P){x.style.transform="translate(".concat(S,"px, ").concat(P,"px)")}e.translate=p;var g=function(x){var S=[],P=null,D=function(){for(var L=[],N=0;N<arguments.length;N++)L[N]=arguments[N];S=L,!P&&(P=requestAnimationFrame(function(){P=null,x.apply(void 0,S)}))};return D};e.schd=g;function b(x,S,P){var D=x.slice(0);return D[S]=P,D}e.replaceAt=b;function $(x){var S=x.values,P=x.colors,D=x.min,L=x.max,N=x.direction,j=N===void 0?r.Direction.Right:N,A=x.rtl,I=A===void 0?!1:A;I&&j===r.Direction.Right?j=r.Direction.Left:I&&r.Direction.Left&&(j=r.Direction.Right);var O=S.slice(0).sort(function(z,V){return z-V}).map(function(z){return(z-D)/(L-D)*100}),B=O.reduce(function(z,V,X){return"".concat(z,", ").concat(P[X]," ").concat(V,"%, ").concat(P[X+1]," ").concat(V,"%")},"");return"linear-gradient(".concat(j,", ").concat(P[0]," 0%").concat(B,", ").concat(P[P.length-1]," 100%)")}e.getTrackBackground=$;function _(){}e.voidFn=_;function k(x){throw new Error("Didn't expect to get here")}e.assertUnreachable=k;var w=function(x,S,P,D,L){L===void 0&&(L=function(j){return j});var N=Math.ceil(t([x],Array.from(x.children),!0).reduce(function(j,A){var I=Math.ceil(A.getBoundingClientRect().width);if(A.innerText&&A.innerText.includes(P)&&A.childElementCount===0){var O=A.cloneNode(!0);O.innerHTML=L(S.toFixed(D)),O.style.visibility="hidden",document.body.appendChild(O),I=Math.ceil(O.getBoundingClientRect().width),document.body.removeChild(O)}return I>j?I:j},x.getBoundingClientRect().width));return N},E=function(x,S,P,D,L,N,j){j===void 0&&(j=function(O){return O});var A=[],I=function(O){var B=w(P[O],D[O],L,N,j),z=S[O].x;S.forEach(function(V,X){var he=V.x,ue=w(P[X],D[X],L,N,j);O!==X&&(z>=he&&z<=he+ue||z+B>=he&&z+B<=he+ue)&&(A.includes(X)||(A.push(O),A.push(X),A=t(t([],A,!0),[O,X],!1),I(X)))})};return I(x),Array.from(new Set(A.sort()))},M=function(x,S,P,D,L,N){D===void 0&&(D=.1),L===void 0&&(L=" - "),N===void 0&&(N=function(X){return X});var j=(0,e.getStepDecimals)(D),A=(0,n.useState)({}),I=A[0],O=A[1],B=(0,n.useState)(N(S[P].toFixed(j))),z=B[0],V=B[1];return(0,n.useEffect)(function(){if(x){var X=x.getThumbs();if(X.length<1)return;var he={},ue=x.getOffsets(),$t=E(P,ue,X,S,L,j,N),la=N(S[P].toFixed(j));if($t.length){var K=$t.reduce(function(q,Or,Mi,Ir){return q.length?t(t([],q,!0),[ue[Ir[Mi]].x],!1):[ue[Ir[Mi]].x]},[]);if(Math.min.apply(Math,K)===ue[P].x){var Pe=[];$t.forEach(function(q){Pe.push(S[q].toFixed(j))}),la=Array.from(new Set(Pe.sort(function(q,Or){return parseFloat(q)-parseFloat(Or)}))).map(N).join(L);var Xe=Math.min.apply(Math,K),Le=Math.max.apply(Math,K),ut=X[$t[K.indexOf(Le)]].getBoundingClientRect().width;he.left="".concat(Math.abs(Xe-(Le+ut))/2,"px"),he.transform="translate(-50%, 0)"}else he.visibility="hidden"}V(la),O(he)}},[x,S]),[z,I]};e.useThumbOverlap=M;function C(x,S,P,D){var L=x.getBoundingClientRect(),N=L.left,j=L.top,A=L.width,I=L.height;return u(D)?Math.abs(P-(j+I/2)):Math.abs(S-(N+A/2))}})(Fh);var NJ=st&&st.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),RJ=st&&st.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),FJ=st&&st.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),DJ=st&&st.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&RJ(t,e,n);return FJ(t,e),t},yy=st&&st.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(Rh,"__esModule",{value:!0});var Za=DJ(G),Q=Fh,ke=Vl,jJ=["ArrowRight","ArrowUp","k","PageUp"],zJ=["ArrowLeft","ArrowDown","j","PageDown"],BJ=function(e){NJ(t,e);function t(n){var r=e.call(this,n)||this;if(r.trackRef=Za.createRef(),r.thumbRefs=[],r.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(r.props.values.length).fill(0).map(function(i,o){return o}),isChanged:!1,markOffsets:[]},r.getOffsets=function(){var i=r.props,o=i.direction,a=i.values,s=i.min,l=i.max,u=r.trackRef.current,c=u.getBoundingClientRect(),f=(0,Q.getPaddingAndBorder)(u);return r.getThumbs().map(function(d,h){var v={x:0,y:0},m=d.getBoundingClientRect(),y=(0,Q.getMargin)(d);switch(o){case ke.Direction.Right:return v.x=(y.left+f.left)*-1,v.y=((m.height-c.height)/2+f.top)*-1,v.x+=c.width*(0,Q.relativeValue)(a[h],s,l)-m.width/2,v;case ke.Direction.Left:return v.x=(y.right+f.right)*-1,v.y=((m.height-c.height)/2+f.top)*-1,v.x+=c.width-c.width*(0,Q.relativeValue)(a[h],s,l)-m.width/2,v;case ke.Direction.Up:return v.x=((m.width-c.width)/2+y.left+f.left)*-1,v.y=-f.left,v.y+=c.height-c.height*(0,Q.relativeValue)(a[h],s,l)-m.height/2,v;case ke.Direction.Down:return v.x=((m.width-c.width)/2+y.left+f.left)*-1,v.y=-f.left,v.y+=c.height*(0,Q.relativeValue)(a[h],s,l)-m.height/2,v;default:return(0,Q.assertUnreachable)(o)}})},r.getThumbs=function(){return r.trackRef&&r.trackRef.current?Array.from(r.trackRef.current.children).filter(function(i){return i.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},r.getTargetIndex=function(i){return r.getThumbs().findIndex(function(o){return o===i.target||o.contains(i.target)})},r.addTouchEvents=function(i){document.addEventListener("touchmove",r.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",r.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",r.schdOnEnd,{passive:!1})},r.addMouseEvents=function(i){document.addEventListener("mousemove",r.schdOnMouseMove),document.addEventListener("mouseup",r.schdOnEnd)},r.onMouseDownTrack=function(i){var o;if(i.button===0)if(i.persist(),i.preventDefault(),r.addMouseEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(s){var l;return(l=s.current)===null||l===void 0?void 0:l.contains(i.target)}))return;r.setState({draggedTrackPos:[i.clientX,i.clientY]},function(){return r.onMove(i.clientX,i.clientY)})}else{var a=(0,Q.getClosestThumbIndex)(r.thumbRefs.map(function(s){return s.current}),i.clientX,i.clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.clientX,i.clientY)})}},r.onResize=function(){(0,Q.translateThumbs)(r.getThumbs(),r.getOffsets(),r.props.rtl),r.calculateMarkOffsets()},r.onTouchStartTrack=function(i){var o;if(i.persist(),r.addTouchEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(s){var l;return(l=s.current)===null||l===void 0?void 0:l.contains(i.target)}))return;r.setState({draggedTrackPos:[i.touches[0].clientX,i.touches[0].clientY]},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}else{var a=(0,Q.getClosestThumbIndex)(r.thumbRefs.map(function(s){return s.current}),i.touches[0].clientX,i.touches[0].clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}},r.onMouseOrTouchStart=function(i){if(!r.props.disabled){var o=(0,Q.isTouchEvent)(i);if(!(!o&&i.button!==0)){var a=r.getTargetIndex(i);a!==-1&&(o?r.addTouchEvents(i):r.addMouseEvents(i),r.setState({draggedThumbIndex:a,thumbZIndexes:r.state.thumbZIndexes.map(function(s,l){return l===a?Math.max.apply(Math,r.state.thumbZIndexes):s<=r.state.thumbZIndexes[a]?s:s-1})}))}}},r.onMouseMove=function(i){i.preventDefault(),r.onMove(i.clientX,i.clientY)},r.onTouchMove=function(i){i.preventDefault(),r.onMove(i.touches[0].clientX,i.touches[0].clientY)},r.onKeyDown=function(i){var o=r.props,a=o.values,s=o.onChange,l=o.step,u=o.rtl,c=o.direction,f=r.state.isChanged,d=r.getTargetIndex(i.nativeEvent),h=u||c===ke.Direction.Left||c===ke.Direction.Down?-1:1;d!==-1&&(jJ.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:d,isChanged:!0}),s((0,Q.replaceAt)(a,d,r.normalizeValue(a[d]+h*(i.key==="PageUp"?l*10:l),d)))):zJ.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:d,isChanged:!0}),s((0,Q.replaceAt)(a,d,r.normalizeValue(a[d]-h*(i.key==="PageDown"?l*10:l),d)))):i.key==="Tab"?r.setState({draggedThumbIndex:-1},function(){f&&r.fireOnFinalChange()}):f&&r.fireOnFinalChange())},r.onKeyUp=function(i){var o=r.state.isChanged;r.setState({draggedThumbIndex:-1},function(){o&&r.fireOnFinalChange()})},r.onMove=function(i,o){var a=r.state,s=a.draggedThumbIndex,l=a.draggedTrackPos,u=r.props,c=u.direction,f=u.min,d=u.max,h=u.onChange,v=u.values,m=u.step,y=u.rtl;if(s===-1&&l[0]===-1&&l[1]===-1)return null;var p=r.trackRef.current;if(!p)return null;var g=p.getBoundingClientRect(),b=(0,Q.isVertical)(c)?g.height:g.width;if(l[0]!==-1&&l[1]!==-1){var $=i-l[0],_=o-l[1],k=0;switch(c){case ke.Direction.Right:case ke.Direction.Left:k=$/b*(d-f);break;case ke.Direction.Down:case ke.Direction.Up:k=_/b*(d-f);break;default:(0,Q.assertUnreachable)(c)}if(y&&(k*=-1),Math.abs(k)>=m/2){for(var w=0;w<r.thumbRefs.length;w++){if(v[w]===d&&Math.sign(k)===1||v[w]===f&&Math.sign(k)===-1)return;var E=v[w]+k;E>d?k=d-v[w]:E<f&&(k=f-v[w])}for(var M=v.slice(0),w=0;w<r.thumbRefs.length;w++)M=(0,Q.replaceAt)(M,w,r.normalizeValue(v[w]+k,w));r.setState({draggedTrackPos:[i,o]}),h(M)}}else{var C=0;switch(c){case ke.Direction.Right:C=(i-g.left)/b*(d-f)+f;break;case ke.Direction.Left:C=(b-(i-g.left))/b*(d-f)+f;break;case ke.Direction.Down:C=(o-g.top)/b*(d-f)+f;break;case ke.Direction.Up:C=(b-(o-g.top))/b*(d-f)+f;break;default:(0,Q.assertUnreachable)(c)}y&&(C=d+f-C),Math.abs(v[s]-C)>=m/2&&h((0,Q.replaceAt)(v,s,r.normalizeValue(C,s)))}},r.normalizeValue=function(i,o){var a=r.props,s=a.min,l=a.max,u=a.step,c=a.allowOverlap,f=a.values;return(0,Q.normalizeValue)(i,o,s,l,u,c,f)},r.onEnd=function(i){if(i.preventDefault(),document.removeEventListener("mousemove",r.schdOnMouseMove),document.removeEventListener("touchmove",r.schdOnTouchMove),document.removeEventListener("mouseup",r.schdOnEnd),document.removeEventListener("touchend",r.schdOnEnd),document.removeEventListener("touchcancel",r.schdOnEnd),r.state.draggedThumbIndex===-1&&r.state.draggedTrackPos[0]===-1&&r.state.draggedTrackPos[1]===-1)return null;r.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){r.fireOnFinalChange()})},r.fireOnFinalChange=function(){r.setState({isChanged:!1});var i=r.props,o=i.onFinalChange,a=i.values;o&&o(a)},r.updateMarkRefs=function(i){if(!i.renderMark){r.numOfMarks=void 0,r.markRefs=void 0;return}r.numOfMarks=(i.max-i.min)/r.props.step,r.markRefs=[];for(var o=0;o<r.numOfMarks+1;o++)r.markRefs[o]=Za.createRef()},r.calculateMarkOffsets=function(){if(!(!r.props.renderMark||!r.trackRef||!r.numOfMarks||!r.markRefs||r.trackRef.current===null)){for(var i=window.getComputedStyle(r.trackRef.current),o=parseInt(i.width,10),a=parseInt(i.height,10),s=parseInt(i.paddingLeft,10),l=parseInt(i.paddingTop,10),u=[],c=0;c<r.numOfMarks+1;c++){var f=9999,d=9999;if(r.markRefs[c].current){var h=r.markRefs[c].current.getBoundingClientRect();f=h.height,d=h.width}r.props.direction===ke.Direction.Left||r.props.direction===ke.Direction.Right?u.push([Math.round(o/r.numOfMarks*c+s-d/2),-Math.round((f-a)/2)]):u.push([Math.round(a/r.numOfMarks*c+l-f/2),-Math.round((d-o)/2)])}r.setState({markOffsets:u})}},n.step===0)throw new Error('"step" property should be a positive number');return r.schdOnMouseMove=(0,Q.schd)(r.onMouseMove),r.schdOnTouchMove=(0,Q.schd)(r.onTouchMove),r.schdOnEnd=(0,Q.schd)(r.onEnd),r.thumbRefs=n.values.map(function(){return Za.createRef()}),r.updateMarkRefs(n),r}return t.prototype.componentDidMount=function(){var n=this,r=this.props,i=r.values,o=r.min,a=r.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",n.onResize)},unobserve:function(){return window.removeEventListener("resize",n.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,Q.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(s){return(0,Q.checkBoundaries)(s,n.props.min,n.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,Q.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),i.forEach(function(s){(0,Q.isStepDivisible)(o,s,a)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},t.prototype.componentDidUpdate=function(n,r){var i=this.props,o=i.max,a=i.min,s=i.step,l=i.values,u=i.rtl;(n.max!==o||n.min!==a||n.step!==s)&&this.updateMarkRefs(this.props),(0,Q.translateThumbs)(this.getThumbs(),this.getOffsets(),u),(n.max!==o||n.min!==a||n.step!==s||r.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),l.forEach(function(c){(0,Q.isStepDivisible)(a,c,s)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},t.prototype.componentWillUnmount=function(){var n={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,n),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},t.prototype.render=function(){var n=this,r=this.props,i=r.renderTrack,o=r.renderThumb,a=r.renderMark,s=a===void 0?function(){return null}:a,l=r.values,u=r.min,c=r.max,f=r.allowOverlap,d=r.disabled,h=this.state,v=h.draggedThumbIndex,m=h.thumbZIndexes,y=h.markOffsets;return i({props:{style:{transform:"scale(1)",cursor:v>-1?"grabbing":this.props.draggableTrack?(0,Q.isVertical)(this.props.direction)?"ns-resize":"ew-resize":l.length===1&&!d?"pointer":"inherit"},onMouseDown:d?Q.voidFn:this.onMouseDownTrack,onTouchStart:d?Q.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:d,children:yy(yy([],y.map(function(p,g,b){return s({props:{style:n.props.direction===ke.Direction.Left||n.props.direction===ke.Direction.Right?{position:"absolute",left:"".concat(p[0],"px"),marginTop:"".concat(p[1],"px")}:{position:"absolute",top:"".concat(p[0],"px"),marginLeft:"".concat(p[1],"px")},key:"mark".concat(g),ref:n.markRefs[g]},index:g})}),!0),l.map(function(p,g){var b=n.state.draggedThumbIndex===g;return o({index:g,value:p,isDragged:b,props:{style:{position:"absolute",zIndex:m[g],cursor:d?"inherit":b?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:g,tabIndex:d?void 0:0,"aria-valuemax":f?c:l[g+1]||c,"aria-valuemin":f?u:l[g-1]||u,"aria-valuenow":p,draggable:!1,ref:n.thumbRefs[g],role:"slider",onKeyDown:d?Q.voidFn:n.onKeyDown,onKeyUp:d?Q.voidFn:n.onKeyUp}})}),!0)})},t.defaultProps={step:1,direction:ke.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},t}(Za.Component);Rh.default=BJ;(function(e){var t=st&&st.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(e,"__esModule",{value:!0}),e.checkValuesAgainstBoundaries=e.relativeValue=e.useThumbOverlap=e.Direction=e.getTrackBackground=e.Range=void 0;var n=t(Rh);e.Range=n.default;var r=Fh;Object.defineProperty(e,"getTrackBackground",{enumerable:!0,get:function(){return r.getTrackBackground}}),Object.defineProperty(e,"useThumbOverlap",{enumerable:!0,get:function(){return r.useThumbOverlap}}),Object.defineProperty(e,"relativeValue",{enumerable:!0,get:function(){return r.relativeValue}}),Object.defineProperty(e,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return r.checkValuesAgainstBoundaries}});var i=Vl;Object.defineProperty(e,"Direction",{enumerable:!0,get:function(){return i.Direction}})})(Uf);const $n=({min:e,max:t,step:n=1,values:r,onChange:i})=>F.jsx(Uf.Range,{step:n,min:e,max:t,values:r,onChange:i,renderTrack:({props:o,children:a})=>F.jsx("div",{onMouseDown:o.onMouseDown,onTouchStart:o.onTouchStart,style:{...o.style,height:"36px",display:"flex",width:"100%"},children:F.jsx("div",{ref:o.ref,style:{height:"5px",width:"100%",borderRadius:"4px",background:Uf.getTrackBackground({values:r,colors:r.length===1?["#548BF4","#ccc"]:["#ccc","#548BF4","#ccc"],min:e,max:t}),alignSelf:"center"},children:a})}),renderThumb:({props:o,isDragged:a,value:s})=>F.jsx("div",{...o,style:{...o.style,height:"1.5rem",width:"1.5rem",borderRadius:"2px",backgroundColor:"#FFF",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"0px 2px 6px #AAA"},children:F.jsx("div",{className:LJ("h-2 w-1 bg-[#CCC] relative",a&&"bg-[#548BF4]"),children:F.jsx("div",{className:"absolute rounded-sm -top-8 left-1/2 text-sm -translate-x-1/2 bg-white shadow p-[2px]",children:s})})})});xl.register(Kc,Qc,hs,ao,IE,BE,ME);const UJ=(e,t)=>{const n=e+Math.random()*(t+1-e);return Math.floor(n)},Dr=new Intl.NumberFormat("ru-RU",{style:"currency",currency:"RUB"}).format,VJ=()=>{const[e,t]=G.useState(1e5),[n,r]=G.useState(.2),[i,o]=G.useState(5e4),[a,s]=G.useState(5e4),[l,u]=G.useState([500,2e3]),[c,f]=G.useState([5e4,2e5]),[d,h]=G.useState(5e4),[v,m]=G.useState(100),[y,p]=G.useState([{name:"Пицца Гавайская",price:300},{name:"Пицца Сырная",price:200},{name:"Пицца Ветчина и сыр",price:400},{name:"Пицца Мясная",price:450},{name:"Пицца Мясная",price:450}]),g=G.useRef(null),[b,$]=G.useState(!1),[_,k]=G.useState(!1),[w,E]=G.useState(0),[M,C]=G.useState(0),[x,S]=G.useState(0),[P,D]=G.useState(0),[L,N]=G.useState([]),[j,A]=G.useState([]),[I,O]=G.useState([]),B=K=>Math.floor(K*300),z=(K,Pe)=>K-Pe,V=K=>{K.preventDefault(),_||(D(n),S(e),k(!0)),$(!0)},X=()=>{$(!1)},he=(K,Pe)=>{const Xe=Number(Pe);isNaN(Xe)||p(Le=>Le.map(ut=>ut.name!==K?ut:{name:K,price:Xe}))},ue=L[L.length-1]??0,$t=j[j.length-1]??0,la=z($t,ue);return G.useEffect(()=>{const K=()=>{const Xe=B(P),Le=[...y].sort((q,Or)=>Or.price-q.price);let ut=0;for(let q=0;q<Xe;q++){const Or=l[0]+(l[1]-l[0])*.2;let Mi=py(l[0],l[1],Or);for(const Ir of Le)for(;Mi>=Ir.price;)ut+=Ir.price,Mi-=Ir.price}return ut},Pe=Xe=>{let Le=0;if(Le+=Xe*.5,w%30===0&&(Le+=a,Le+=i),w%7===0){const ut=c[0]+(c[1]-c[0])*.3,q=py(c[0],c[1],ut);Le+=q}return Le};return b?g.current=setTimeout(()=>{const Xe=K()+(w===0?e:0),Le=Pe(Xe);I1.flushSync(()=>{E(q=>q+1),D(q=>+(q+UJ(-1,1)/100).toFixed(2)),C(q=>q+Le),S(q=>q+Xe),N(q=>[...q,Le]),A(q=>[...q,Xe])});const ut=z(x,M);O(q=>[...q,ut]),ut>0&&ut>d*10&&w%120===0&&(D(q=>+(q+.1).toFixed(2)),C(q=>q+d))},v):g.current!==null&&clearTimeout(g.current),()=>{g.current!==null&&clearTimeout(g.current)}},[w,v,P,a,i,x,M,d,b,y,l,c,e]),F.jsxs("div",{className:"main-container",children:[F.jsx("header",{className:"mb-10",children:F.jsx("h1",{className:"text-2xl py-4",children:"Цифровой двойник пиццерии"})}),F.jsxs("form",{onSubmit:V,className:"mb-10",children:[F.jsxs("div",{className:"grid grid-cols-2 gap-20 mb-4",children:[F.jsxs("div",{className:"flex flex-col gap-4",children:[F.jsxs("label",{className:"flex items-center whitespace-nowrap gap-4",children:["Стартовый капитал:",F.jsx("div",{className:"max-w-xs w-full",children:F.jsx($n,{min:1e5,max:1e6,values:[e],onChange:K=>t(K[0])})})]}),F.jsxs("label",{className:"flex items-center whitespace-nowrap gap-4",children:["Стартовая популярность:",F.jsx("div",{className:"max-w-xs w-full",children:F.jsx($n,{min:.1,max:1,step:.1,values:[n],onChange:K=>r(K[0])})})]}),F.jsxs("label",{className:"flex items-center whitespace-nowrap gap-4",children:["Аренда помещения (раз в месяц):",F.jsx("div",{className:"max-w-xs w-full",children:F.jsx($n,{min:5e4,max:1e6,values:[i],onChange:K=>o(K[0])})})]}),F.jsxs("label",{className:"flex items-center whitespace-nowrap gap-4",children:["Зарплата сотрудников, всего (раз в месяц):",F.jsx("div",{className:"max-w-xs w-full",children:F.jsx($n,{min:5e4,max:1e6,values:[a],onChange:K=>s(K[0])})})]}),F.jsxs("label",{className:"flex items-center whitespace-nowrap gap-4",children:["Кошелёк покупателя:",F.jsx("div",{className:"max-w-xs w-full",children:F.jsx($n,{min:500,max:15e3,values:l,onChange:u})})]}),F.jsxs("label",{className:"flex items-center whitespace-nowrap gap-4",children:["Стоимость разрешения инцидентов:",F.jsx("div",{className:"max-w-xs w-full",children:F.jsx($n,{min:5e4,max:3e5,values:c,onChange:f})})]}),F.jsxs("label",{className:"flex items-center whitespace-nowrap gap-4",children:["Стоимость одной рекламы:",F.jsx("div",{className:"max-w-xs w-full",children:F.jsx($n,{min:5e4,max:2e6,values:[d],onChange:K=>h(K[0])})})]}),F.jsxs("label",{className:"flex items-center whitespace-nowrap gap-4",children:["Скорость дня (мс):",F.jsx("div",{className:"max-w-xs w-full",children:F.jsx($n,{min:1,max:1e4,values:[v],onChange:K=>m(K[0])})})]})]}),F.jsx("div",{className:"flex flex-col gap-1",children:y.map(({name:K,price:Pe},Xe)=>F.jsxs("label",{children:[K,":"," ",F.jsx("input",{type:"text",value:Pe,onChange:Le=>he(K,Le.target.value)})]},Xe))})]}),F.jsxs("div",{className:"flex items-center gap-3",children:[F.jsx("button",{className:"bg-[#548BF4] px-6 py-2 rounded text-white font-semibold",children:"Начать"}),b&&F.jsx("button",{className:"bg-red-500 px-6 py-2 rounded text-white font-semibold",onClick:X,type:"button",children:"Стоп"})]})]}),F.jsxs("div",{className:"mb-10",children:[F.jsxs("p",{children:["День: ",w]}),F.jsxs("p",{children:["Расходы всего: ",Dr(M)]}),F.jsxs("p",{children:["Доходы всего: ",Dr(x)]}),F.jsxs("p",{children:["Прибыль всего: ",Dr(z(x,M))]}),F.jsxs("p",{children:["Популярность: ",P]}),F.jsxs("p",{children:["Клиентов сегодня: ",B(P)]}),F.jsxs("p",{children:["Расходы сегодня: ",Dr(ue)]}),F.jsxs("p",{children:["Доходы сегодня: ",Dr($t)]}),F.jsxs("p",{children:["Прибыль сегодня: ",Dr(la)]})]}),F.jsxs("div",{className:"grid grid-cols-2 gap-4 px-10 pb-32",children:[F.jsx("div",{children:F.jsx(Ba,{options:{responsive:!0},data:{labels:new Array(w).fill(0).map((K,Pe)=>Pe),datasets:[{label:"Расходы",data:L,borderColor:"rgb(255, 99, 132)",backgroundColor:"rgba(255, 99, 132, 0.5)"}]}})}),F.jsx("div",{children:F.jsx(Ba,{options:{responsive:!0},data:{labels:new Array(w).fill(0).map((K,Pe)=>Pe),datasets:[{label:"Доходы",data:j,borderColor:"rgb(53, 162, 235)",backgroundColor:"rgba(53, 162, 235, 0.5)"}]}})}),F.jsx("div",{children:F.jsx(Ba,{options:{responsive:!0},data:{labels:new Array(w).fill(0).map((K,Pe)=>Pe),datasets:[{label:"Прибыль",data:I,borderColor:"rgb(53, 162, 53)",backgroundColor:"rgba(53, 162, 53, 0.5)"}]}})}),F.jsx("div",{children:F.jsx(Ba,{options:{responsive:!0},data:{labels:new Array(w).fill(0).map((K,Pe)=>Pe),datasets:[{label:"Расходы",data:L,borderColor:"rgb(255, 99, 132)",backgroundColor:"rgba(255, 99, 132, 0.5)"},{label:"Доходы",data:j,borderColor:"rgb(53, 162, 235)",backgroundColor:"rgba(53, 162, 235, 0.5)"}]}})})]})]})};Xu.createRoot(document.getElementById("root")).render(F.jsx(Yf.StrictMode,{children:F.jsx(VJ,{})}));
