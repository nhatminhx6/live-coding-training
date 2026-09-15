function Du(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Fu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var yl={exports:{}},hi={},xl={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ir=Symbol.for("react.element"),Uu=Symbol.for("react.portal"),Bu=Symbol.for("react.fragment"),Vu=Symbol.for("react.strict_mode"),Ku=Symbol.for("react.profiler"),$u=Symbol.for("react.provider"),Wu=Symbol.for("react.context"),Hu=Symbol.for("react.forward_ref"),Qu=Symbol.for("react.suspense"),Ju=Symbol.for("react.memo"),Gu=Symbol.for("react.lazy"),Qa=Symbol.iterator;function Xu(e){return e===null||typeof e!="object"?null:(e=Qa&&e[Qa]||e["@@iterator"],typeof e=="function"?e:null)}var kl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},wl=Object.assign,bl={};function mn(e,t,n){this.props=e,this.context=t,this.refs=bl,this.updater=n||kl}mn.prototype.isReactComponent={};mn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};mn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Sl(){}Sl.prototype=mn.prototype;function ea(e,t,n){this.props=e,this.context=t,this.refs=bl,this.updater=n||kl}var ta=ea.prototype=new Sl;ta.constructor=ea;wl(ta,mn.prototype);ta.isPureReactComponent=!0;var Ja=Array.isArray,Cl=Object.prototype.hasOwnProperty,na={current:null},Il={key:!0,ref:!0,__self:!0,__source:!0};function El(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Cl.call(t,r)&&!Il.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),h=0;h<s;h++)l[h]=arguments[h+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:ir,type:e,key:o,ref:a,props:i,_owner:na.current}}function Yu(e,t){return{$$typeof:ir,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ra(e){return typeof e=="object"&&e!==null&&e.$$typeof===ir}function Zu(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ga=/\/+/g;function Pi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Zu(""+e.key):t.toString(36)}function Tr(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ir:case Uu:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Pi(a,0):r,Ja(i)?(n="",e!=null&&(n=e.replace(Ga,"$&/")+"/"),Tr(i,t,n,"",function(h){return h})):i!=null&&(ra(i)&&(i=Yu(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Ga,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Ja(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+Pi(o,s);a+=Tr(o,t,n,l,i)}else if(l=Xu(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+Pi(o,s++),a+=Tr(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function hr(e,t,n){if(e==null)return e;var r=[],i=0;return Tr(e,r,"","",function(o){return t.call(n,o,i++)}),r}function eh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},Pr={transition:null},th={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:Pr,ReactCurrentOwner:na};function Rl(){throw Error("act(...) is not supported in production builds of React.")}j.Children={map:hr,forEach:function(e,t,n){hr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return hr(e,function(){t++}),t},toArray:function(e){return hr(e,function(t){return t})||[]},only:function(e){if(!ra(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};j.Component=mn;j.Fragment=Bu;j.Profiler=Ku;j.PureComponent=ea;j.StrictMode=Vu;j.Suspense=Qu;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=th;j.act=Rl;j.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=wl({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=na.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Cl.call(t,l)&&!Il.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var h=0;h<l;h++)s[h]=arguments[h+2];r.children=s}return{$$typeof:ir,type:e.type,key:i,ref:o,props:r,_owner:a}};j.createContext=function(e){return e={$$typeof:Wu,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:$u,_context:e},e.Consumer=e};j.createElement=El;j.createFactory=function(e){var t=El.bind(null,e);return t.type=e,t};j.createRef=function(){return{current:null}};j.forwardRef=function(e){return{$$typeof:Hu,render:e}};j.isValidElement=ra;j.lazy=function(e){return{$$typeof:Gu,_payload:{_status:-1,_result:e},_init:eh}};j.memo=function(e,t){return{$$typeof:Ju,type:e,compare:t===void 0?null:t}};j.startTransition=function(e){var t=Pr.transition;Pr.transition={};try{e()}finally{Pr.transition=t}};j.unstable_act=Rl;j.useCallback=function(e,t){return de.current.useCallback(e,t)};j.useContext=function(e){return de.current.useContext(e)};j.useDebugValue=function(){};j.useDeferredValue=function(e){return de.current.useDeferredValue(e)};j.useEffect=function(e,t){return de.current.useEffect(e,t)};j.useId=function(){return de.current.useId()};j.useImperativeHandle=function(e,t,n){return de.current.useImperativeHandle(e,t,n)};j.useInsertionEffect=function(e,t){return de.current.useInsertionEffect(e,t)};j.useLayoutEffect=function(e,t){return de.current.useLayoutEffect(e,t)};j.useMemo=function(e,t){return de.current.useMemo(e,t)};j.useReducer=function(e,t,n){return de.current.useReducer(e,t,n)};j.useRef=function(e){return de.current.useRef(e)};j.useState=function(e){return de.current.useState(e)};j.useSyncExternalStore=function(e,t,n){return de.current.useSyncExternalStore(e,t,n)};j.useTransition=function(){return de.current.useTransition()};j.version="18.3.1";xl.exports=j;var z=xl.exports;const Tl=Fu(z),nh=Du({__proto__:null,default:Tl},[z]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rh=z,ih=Symbol.for("react.element"),oh=Symbol.for("react.fragment"),ah=Object.prototype.hasOwnProperty,sh=rh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,lh={key:!0,ref:!0,__self:!0,__source:!0};function Pl(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)ah.call(t,r)&&!lh.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:ih,type:e,key:o,ref:a,props:i,_owner:sh.current}}hi.Fragment=oh;hi.jsx=Pl;hi.jsxs=Pl;yl.exports=hi;var u=yl.exports,no={},_l={exports:{}},Ce={},Nl={exports:{}},Ol={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,N){var O=E.length;E.push(N);e:for(;0<O;){var H=O-1>>>1,Z=E[H];if(0<i(Z,N))E[H]=N,E[O]=Z,O=H;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var N=E[0],O=E.pop();if(O!==N){E[0]=O;e:for(var H=0,Z=E.length,cr=Z>>>1;H<cr;){var St=2*(H+1)-1,Ti=E[St],Ct=St+1,ur=E[Ct];if(0>i(Ti,O))Ct<Z&&0>i(ur,Ti)?(E[H]=ur,E[Ct]=O,H=Ct):(E[H]=Ti,E[St]=O,H=St);else if(Ct<Z&&0>i(ur,O))E[H]=ur,E[Ct]=O,H=Ct;else break e}}return N}function i(E,N){var O=E.sortIndex-N.sortIndex;return O!==0?O:E.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],h=[],v=1,m=null,f=3,y=!1,b=!1,k=!1,P=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(E){for(var N=n(h);N!==null;){if(N.callback===null)r(h);else if(N.startTime<=E)r(h),N.sortIndex=N.expirationTime,t(l,N);else break;N=n(h)}}function g(E){if(k=!1,p(E),!b)if(n(l)!==null)b=!0,M(w);else{var N=n(h);N!==null&&Fe(g,N.startTime-E)}}function w(E,N){b=!1,k&&(k=!1,d(R),R=-1),y=!0;var O=f;try{for(p(N),m=n(l);m!==null&&(!(m.expirationTime>N)||E&&!me());){var H=m.callback;if(typeof H=="function"){m.callback=null,f=m.priorityLevel;var Z=H(m.expirationTime<=N);N=e.unstable_now(),typeof Z=="function"?m.callback=Z:m===n(l)&&r(l),p(N)}else r(l);m=n(l)}if(m!==null)var cr=!0;else{var St=n(h);St!==null&&Fe(g,St.startTime-N),cr=!1}return cr}finally{m=null,f=O,y=!1}}var S=!1,C=null,R=-1,L=5,_=-1;function me(){return!(e.unstable_now()-_<L)}function Y(){if(C!==null){var E=e.unstable_now();_=E;var N=!0;try{N=C(!0,E)}finally{N?oe():(S=!1,C=null)}}else S=!1}var oe;if(typeof c=="function")oe=function(){c(Y)};else if(typeof MessageChannel<"u"){var De=new MessageChannel,Ri=De.port2;De.port1.onmessage=Y,oe=function(){Ri.postMessage(null)}}else oe=function(){P(Y,0)};function M(E){C=E,S||(S=!0,oe())}function Fe(E,N){R=P(function(){E(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){b||y||(b=!0,M(w))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(E){switch(f){case 1:case 2:case 3:var N=3;break;default:N=f}var O=f;f=N;try{return E()}finally{f=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,N){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var O=f;f=E;try{return N()}finally{f=O}},e.unstable_scheduleCallback=function(E,N,O){var H=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?H+O:H):O=H,E){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=O+Z,E={id:v++,callback:N,priorityLevel:E,startTime:O,expirationTime:Z,sortIndex:-1},O>H?(E.sortIndex=O,t(h,E),n(l)===null&&E===n(h)&&(k?(d(R),R=-1):k=!0,Fe(g,O-H))):(E.sortIndex=Z,t(l,E),b||y||(b=!0,M(w))),E},e.unstable_shouldYield=me,e.unstable_wrapCallback=function(E){var N=f;return function(){var O=f;f=N;try{return E.apply(this,arguments)}finally{f=O}}}})(Ol);Nl.exports=Ol;var ch=Nl.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uh=z,Se=ch;function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zl=new Set,Un={};function qt(e,t){sn(e,t),sn(e+"Capture",t)}function sn(e,t){for(Un[e]=t,e=0;e<t.length;e++)zl.add(t[e])}var Xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ro=Object.prototype.hasOwnProperty,hh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xa={},Ya={};function dh(e){return ro.call(Ya,e)?!0:ro.call(Xa,e)?!1:hh.test(e)?Ya[e]=!0:(Xa[e]=!0,!1)}function ph(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function mh(e,t,n,r){if(t===null||typeof t>"u"||ph(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pe(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var ia=/[\-:]([a-z])/g;function oa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ia,oa);ie[t]=new pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ia,oa);ie[t]=new pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ia,oa);ie[t]=new pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function aa(e,t,n,r){var i=ie.hasOwnProperty(t)?ie[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(mh(t,n,i,r)&&(n=null),r||i===null?dh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var tt=uh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,dr=Symbol.for("react.element"),Bt=Symbol.for("react.portal"),Vt=Symbol.for("react.fragment"),sa=Symbol.for("react.strict_mode"),io=Symbol.for("react.profiler"),jl=Symbol.for("react.provider"),Ll=Symbol.for("react.context"),la=Symbol.for("react.forward_ref"),oo=Symbol.for("react.suspense"),ao=Symbol.for("react.suspense_list"),ca=Symbol.for("react.memo"),it=Symbol.for("react.lazy"),Al=Symbol.for("react.offscreen"),Za=Symbol.iterator;function vn(e){return e===null||typeof e!="object"?null:(e=Za&&e[Za]||e["@@iterator"],typeof e=="function"?e:null)}var $=Object.assign,_i;function En(e){if(_i===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);_i=t&&t[1]||""}return`
`+_i+e}var Ni=!1;function Oi(e,t){if(!e||Ni)return"";Ni=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(h){var r=h}Reflect.construct(e,[],t)}else{try{t.call()}catch(h){r=h}e.call(t.prototype)}else{try{throw Error()}catch(h){r=h}e()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{Ni=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?En(e):""}function gh(e){switch(e.tag){case 5:return En(e.type);case 16:return En("Lazy");case 13:return En("Suspense");case 19:return En("SuspenseList");case 0:case 2:case 15:return e=Oi(e.type,!1),e;case 11:return e=Oi(e.type.render,!1),e;case 1:return e=Oi(e.type,!0),e;default:return""}}function so(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Vt:return"Fragment";case Bt:return"Portal";case io:return"Profiler";case sa:return"StrictMode";case oo:return"Suspense";case ao:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ll:return(e.displayName||"Context")+".Consumer";case jl:return(e._context.displayName||"Context")+".Provider";case la:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ca:return t=e.displayName||null,t!==null?t:so(e.type)||"Memo";case it:t=e._payload,e=e._init;try{return so(e(t))}catch{}}return null}function fh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return so(t);case 8:return t===sa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function yt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ml(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function vh(e){var t=Ml(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function pr(e){e._valueTracker||(e._valueTracker=vh(e))}function ql(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ml(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Fr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function lo(e,t){var n=t.checked;return $({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function es(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=yt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Dl(e,t){t=t.checked,t!=null&&aa(e,"checked",t,!1)}function co(e,t){Dl(e,t);var n=yt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?uo(e,t.type,n):t.hasOwnProperty("defaultValue")&&uo(e,t.type,yt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ts(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function uo(e,t,n){(t!=="number"||Fr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Rn=Array.isArray;function en(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+yt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ho(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return $({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ns(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(x(92));if(Rn(n)){if(1<n.length)throw Error(x(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:yt(n)}}function Fl(e,t){var n=yt(t.value),r=yt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function rs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ul(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function po(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ul(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var mr,Bl=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(mr=mr||document.createElement("div"),mr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=mr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Bn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var On={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yh=["Webkit","ms","Moz","O"];Object.keys(On).forEach(function(e){yh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),On[t]=On[e]})});function Vl(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||On.hasOwnProperty(e)&&On[e]?(""+t).trim():t+"px"}function Kl(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Vl(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var xh=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mo(e,t){if(t){if(xh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function go(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fo=null;function ua(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vo=null,tn=null,nn=null;function is(e){if(e=sr(e)){if(typeof vo!="function")throw Error(x(280));var t=e.stateNode;t&&(t=fi(t),vo(e.stateNode,e.type,t))}}function $l(e){tn?nn?nn.push(e):nn=[e]:tn=e}function Wl(){if(tn){var e=tn,t=nn;if(nn=tn=null,is(e),t)for(e=0;e<t.length;e++)is(t[e])}}function Hl(e,t){return e(t)}function Ql(){}var zi=!1;function Jl(e,t,n){if(zi)return e(t,n);zi=!0;try{return Hl(e,t,n)}finally{zi=!1,(tn!==null||nn!==null)&&(Ql(),Wl())}}function Vn(e,t){var n=e.stateNode;if(n===null)return null;var r=fi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(x(231,t,typeof n));return n}var yo=!1;if(Xe)try{var yn={};Object.defineProperty(yn,"passive",{get:function(){yo=!0}}),window.addEventListener("test",yn,yn),window.removeEventListener("test",yn,yn)}catch{yo=!1}function kh(e,t,n,r,i,o,a,s,l){var h=Array.prototype.slice.call(arguments,3);try{t.apply(n,h)}catch(v){this.onError(v)}}var zn=!1,Ur=null,Br=!1,xo=null,wh={onError:function(e){zn=!0,Ur=e}};function bh(e,t,n,r,i,o,a,s,l){zn=!1,Ur=null,kh.apply(wh,arguments)}function Sh(e,t,n,r,i,o,a,s,l){if(bh.apply(this,arguments),zn){if(zn){var h=Ur;zn=!1,Ur=null}else throw Error(x(198));Br||(Br=!0,xo=h)}}function Dt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Gl(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function os(e){if(Dt(e)!==e)throw Error(x(188))}function Ch(e){var t=e.alternate;if(!t){if(t=Dt(e),t===null)throw Error(x(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return os(i),e;if(o===r)return os(i),t;o=o.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?e:t}function Xl(e){return e=Ch(e),e!==null?Yl(e):null}function Yl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Yl(e);if(t!==null)return t;e=e.sibling}return null}var Zl=Se.unstable_scheduleCallback,as=Se.unstable_cancelCallback,Ih=Se.unstable_shouldYield,Eh=Se.unstable_requestPaint,Q=Se.unstable_now,Rh=Se.unstable_getCurrentPriorityLevel,ha=Se.unstable_ImmediatePriority,ec=Se.unstable_UserBlockingPriority,Vr=Se.unstable_NormalPriority,Th=Se.unstable_LowPriority,tc=Se.unstable_IdlePriority,di=null,Ke=null;function Ph(e){if(Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(di,e,void 0,(e.current.flags&128)===128)}catch{}}var Ae=Math.clz32?Math.clz32:Oh,_h=Math.log,Nh=Math.LN2;function Oh(e){return e>>>=0,e===0?32:31-(_h(e)/Nh|0)|0}var gr=64,fr=4194304;function Tn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Kr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=Tn(s):(o&=a,o!==0&&(r=Tn(o)))}else a=n&~i,a!==0?r=Tn(a):o!==0&&(r=Tn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ae(t),i=1<<n,r|=e[n],t&=~i;return r}function zh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Ae(o),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=zh(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function ko(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function nc(){var e=gr;return gr<<=1,!(gr&4194240)&&(gr=64),e}function ji(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function or(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ae(t),e[t]=n}function Lh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ae(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function da(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ae(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var q=0;function rc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ic,pa,oc,ac,sc,wo=!1,vr=[],ut=null,ht=null,dt=null,Kn=new Map,$n=new Map,at=[],Ah="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ss(e,t){switch(e){case"focusin":case"focusout":ut=null;break;case"dragenter":case"dragleave":ht=null;break;case"mouseover":case"mouseout":dt=null;break;case"pointerover":case"pointerout":Kn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$n.delete(t.pointerId)}}function xn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=sr(t),t!==null&&pa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Mh(e,t,n,r,i){switch(t){case"focusin":return ut=xn(ut,e,t,n,r,i),!0;case"dragenter":return ht=xn(ht,e,t,n,r,i),!0;case"mouseover":return dt=xn(dt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Kn.set(o,xn(Kn.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,$n.set(o,xn($n.get(o)||null,e,t,n,r,i)),!0}return!1}function lc(e){var t=Rt(e.target);if(t!==null){var n=Dt(t);if(n!==null){if(t=n.tag,t===13){if(t=Gl(n),t!==null){e.blockedOn=t,sc(e.priority,function(){oc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _r(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);fo=r,n.target.dispatchEvent(r),fo=null}else return t=sr(n),t!==null&&pa(t),e.blockedOn=n,!1;t.shift()}return!0}function ls(e,t,n){_r(e)&&n.delete(t)}function qh(){wo=!1,ut!==null&&_r(ut)&&(ut=null),ht!==null&&_r(ht)&&(ht=null),dt!==null&&_r(dt)&&(dt=null),Kn.forEach(ls),$n.forEach(ls)}function kn(e,t){e.blockedOn===t&&(e.blockedOn=null,wo||(wo=!0,Se.unstable_scheduleCallback(Se.unstable_NormalPriority,qh)))}function Wn(e){function t(i){return kn(i,e)}if(0<vr.length){kn(vr[0],e);for(var n=1;n<vr.length;n++){var r=vr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ut!==null&&kn(ut,e),ht!==null&&kn(ht,e),dt!==null&&kn(dt,e),Kn.forEach(t),$n.forEach(t),n=0;n<at.length;n++)r=at[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<at.length&&(n=at[0],n.blockedOn===null);)lc(n),n.blockedOn===null&&at.shift()}var rn=tt.ReactCurrentBatchConfig,$r=!0;function Dh(e,t,n,r){var i=q,o=rn.transition;rn.transition=null;try{q=1,ma(e,t,n,r)}finally{q=i,rn.transition=o}}function Fh(e,t,n,r){var i=q,o=rn.transition;rn.transition=null;try{q=4,ma(e,t,n,r)}finally{q=i,rn.transition=o}}function ma(e,t,n,r){if($r){var i=bo(e,t,n,r);if(i===null)Ki(e,t,r,Wr,n),ss(e,r);else if(Mh(i,e,t,n,r))r.stopPropagation();else if(ss(e,r),t&4&&-1<Ah.indexOf(e)){for(;i!==null;){var o=sr(i);if(o!==null&&ic(o),o=bo(e,t,n,r),o===null&&Ki(e,t,r,Wr,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ki(e,t,r,null,n)}}var Wr=null;function bo(e,t,n,r){if(Wr=null,e=ua(r),e=Rt(e),e!==null)if(t=Dt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Gl(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Wr=e,null}function cc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rh()){case ha:return 1;case ec:return 4;case Vr:case Th:return 16;case tc:return 536870912;default:return 16}default:return 16}}var lt=null,ga=null,Nr=null;function uc(){if(Nr)return Nr;var e,t=ga,n=t.length,r,i="value"in lt?lt.value:lt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Nr=i.slice(e,1<r?1-r:void 0)}function Or(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function yr(){return!0}function cs(){return!1}function Ie(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?yr:cs,this.isPropagationStopped=cs,this}return $(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=yr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=yr)},persist:function(){},isPersistent:yr}),t}var gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fa=Ie(gn),ar=$({},gn,{view:0,detail:0}),Uh=Ie(ar),Li,Ai,wn,pi=$({},ar,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:va,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wn&&(wn&&e.type==="mousemove"?(Li=e.screenX-wn.screenX,Ai=e.screenY-wn.screenY):Ai=Li=0,wn=e),Li)},movementY:function(e){return"movementY"in e?e.movementY:Ai}}),us=Ie(pi),Bh=$({},pi,{dataTransfer:0}),Vh=Ie(Bh),Kh=$({},ar,{relatedTarget:0}),Mi=Ie(Kh),$h=$({},gn,{animationName:0,elapsedTime:0,pseudoElement:0}),Wh=Ie($h),Hh=$({},gn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Qh=Ie(Hh),Jh=$({},gn,{data:0}),hs=Ie(Jh),Gh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Yh[e])?!!t[e]:!1}function va(){return Zh}var ed=$({},ar,{key:function(e){if(e.key){var t=Gh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Or(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Xh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:va,charCode:function(e){return e.type==="keypress"?Or(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Or(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),td=Ie(ed),nd=$({},pi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ds=Ie(nd),rd=$({},ar,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:va}),id=Ie(rd),od=$({},gn,{propertyName:0,elapsedTime:0,pseudoElement:0}),ad=Ie(od),sd=$({},pi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ld=Ie(sd),cd=[9,13,27,32],ya=Xe&&"CompositionEvent"in window,jn=null;Xe&&"documentMode"in document&&(jn=document.documentMode);var ud=Xe&&"TextEvent"in window&&!jn,hc=Xe&&(!ya||jn&&8<jn&&11>=jn),ps=" ",ms=!1;function dc(e,t){switch(e){case"keyup":return cd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Kt=!1;function hd(e,t){switch(e){case"compositionend":return pc(t);case"keypress":return t.which!==32?null:(ms=!0,ps);case"textInput":return e=t.data,e===ps&&ms?null:e;default:return null}}function dd(e,t){if(Kt)return e==="compositionend"||!ya&&dc(e,t)?(e=uc(),Nr=ga=lt=null,Kt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return hc&&t.locale!=="ko"?null:t.data;default:return null}}var pd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!pd[e.type]:t==="textarea"}function mc(e,t,n,r){$l(r),t=Hr(t,"onChange"),0<t.length&&(n=new fa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ln=null,Hn=null;function md(e){Ic(e,0)}function mi(e){var t=Ht(e);if(ql(t))return e}function gd(e,t){if(e==="change")return t}var gc=!1;if(Xe){var qi;if(Xe){var Di="oninput"in document;if(!Di){var fs=document.createElement("div");fs.setAttribute("oninput","return;"),Di=typeof fs.oninput=="function"}qi=Di}else qi=!1;gc=qi&&(!document.documentMode||9<document.documentMode)}function vs(){Ln&&(Ln.detachEvent("onpropertychange",fc),Hn=Ln=null)}function fc(e){if(e.propertyName==="value"&&mi(Hn)){var t=[];mc(t,Hn,e,ua(e)),Jl(md,t)}}function fd(e,t,n){e==="focusin"?(vs(),Ln=t,Hn=n,Ln.attachEvent("onpropertychange",fc)):e==="focusout"&&vs()}function vd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return mi(Hn)}function yd(e,t){if(e==="click")return mi(t)}function xd(e,t){if(e==="input"||e==="change")return mi(t)}function kd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qe=typeof Object.is=="function"?Object.is:kd;function Qn(e,t){if(qe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ro.call(t,i)||!qe(e[i],t[i]))return!1}return!0}function ys(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xs(e,t){var n=ys(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ys(n)}}function vc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yc(){for(var e=window,t=Fr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Fr(e.document)}return t}function xa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function wd(e){var t=yc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&vc(n.ownerDocument.documentElement,n)){if(r!==null&&xa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=xs(n,o);var a=xs(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var bd=Xe&&"documentMode"in document&&11>=document.documentMode,$t=null,So=null,An=null,Co=!1;function ks(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Co||$t==null||$t!==Fr(r)||(r=$t,"selectionStart"in r&&xa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),An&&Qn(An,r)||(An=r,r=Hr(So,"onSelect"),0<r.length&&(t=new fa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=$t)))}function xr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wt={animationend:xr("Animation","AnimationEnd"),animationiteration:xr("Animation","AnimationIteration"),animationstart:xr("Animation","AnimationStart"),transitionend:xr("Transition","TransitionEnd")},Fi={},xc={};Xe&&(xc=document.createElement("div").style,"AnimationEvent"in window||(delete Wt.animationend.animation,delete Wt.animationiteration.animation,delete Wt.animationstart.animation),"TransitionEvent"in window||delete Wt.transitionend.transition);function gi(e){if(Fi[e])return Fi[e];if(!Wt[e])return e;var t=Wt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in xc)return Fi[e]=t[n];return e}var kc=gi("animationend"),wc=gi("animationiteration"),bc=gi("animationstart"),Sc=gi("transitionend"),Cc=new Map,ws="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kt(e,t){Cc.set(e,t),qt(t,[e])}for(var Ui=0;Ui<ws.length;Ui++){var Bi=ws[Ui],Sd=Bi.toLowerCase(),Cd=Bi[0].toUpperCase()+Bi.slice(1);kt(Sd,"on"+Cd)}kt(kc,"onAnimationEnd");kt(wc,"onAnimationIteration");kt(bc,"onAnimationStart");kt("dblclick","onDoubleClick");kt("focusin","onFocus");kt("focusout","onBlur");kt(Sc,"onTransitionEnd");sn("onMouseEnter",["mouseout","mouseover"]);sn("onMouseLeave",["mouseout","mouseover"]);sn("onPointerEnter",["pointerout","pointerover"]);sn("onPointerLeave",["pointerout","pointerover"]);qt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qt("onBeforeInput",["compositionend","keypress","textInput","paste"]);qt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Id=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pn));function bs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Sh(r,t,void 0,e),e.currentTarget=null}function Ic(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,h=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;bs(i,s,h),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,h=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;bs(i,s,h),o=l}}}if(Br)throw e=xo,Br=!1,xo=null,e}function F(e,t){var n=t[Po];n===void 0&&(n=t[Po]=new Set);var r=e+"__bubble";n.has(r)||(Ec(t,e,2,!1),n.add(r))}function Vi(e,t,n){var r=0;t&&(r|=4),Ec(n,e,r,t)}var kr="_reactListening"+Math.random().toString(36).slice(2);function Jn(e){if(!e[kr]){e[kr]=!0,zl.forEach(function(n){n!=="selectionchange"&&(Id.has(n)||Vi(n,!1,e),Vi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[kr]||(t[kr]=!0,Vi("selectionchange",!1,t))}}function Ec(e,t,n,r){switch(cc(t)){case 1:var i=Dh;break;case 4:i=Fh;break;default:i=ma}n=i.bind(null,t,n,e),i=void 0,!yo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ki(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=Rt(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}Jl(function(){var h=o,v=ua(n),m=[];e:{var f=Cc.get(e);if(f!==void 0){var y=fa,b=e;switch(e){case"keypress":if(Or(n)===0)break e;case"keydown":case"keyup":y=td;break;case"focusin":b="focus",y=Mi;break;case"focusout":b="blur",y=Mi;break;case"beforeblur":case"afterblur":y=Mi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=us;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Vh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=id;break;case kc:case wc:case bc:y=Wh;break;case Sc:y=ad;break;case"scroll":y=Uh;break;case"wheel":y=ld;break;case"copy":case"cut":case"paste":y=Qh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=ds}var k=(t&4)!==0,P=!k&&e==="scroll",d=k?f!==null?f+"Capture":null:f;k=[];for(var c=h,p;c!==null;){p=c;var g=p.stateNode;if(p.tag===5&&g!==null&&(p=g,d!==null&&(g=Vn(c,d),g!=null&&k.push(Gn(c,g,p)))),P)break;c=c.return}0<k.length&&(f=new y(f,b,null,n,v),m.push({event:f,listeners:k}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",f&&n!==fo&&(b=n.relatedTarget||n.fromElement)&&(Rt(b)||b[Ye]))break e;if((y||f)&&(f=v.window===v?v:(f=v.ownerDocument)?f.defaultView||f.parentWindow:window,y?(b=n.relatedTarget||n.toElement,y=h,b=b?Rt(b):null,b!==null&&(P=Dt(b),b!==P||b.tag!==5&&b.tag!==6)&&(b=null)):(y=null,b=h),y!==b)){if(k=us,g="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(k=ds,g="onPointerLeave",d="onPointerEnter",c="pointer"),P=y==null?f:Ht(y),p=b==null?f:Ht(b),f=new k(g,c+"leave",y,n,v),f.target=P,f.relatedTarget=p,g=null,Rt(v)===h&&(k=new k(d,c+"enter",b,n,v),k.target=p,k.relatedTarget=P,g=k),P=g,y&&b)t:{for(k=y,d=b,c=0,p=k;p;p=Ft(p))c++;for(p=0,g=d;g;g=Ft(g))p++;for(;0<c-p;)k=Ft(k),c--;for(;0<p-c;)d=Ft(d),p--;for(;c--;){if(k===d||d!==null&&k===d.alternate)break t;k=Ft(k),d=Ft(d)}k=null}else k=null;y!==null&&Ss(m,f,y,k,!1),b!==null&&P!==null&&Ss(m,P,b,k,!0)}}e:{if(f=h?Ht(h):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var w=gd;else if(gs(f))if(gc)w=xd;else{w=vd;var S=fd}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(w=yd);if(w&&(w=w(e,h))){mc(m,w,n,v);break e}S&&S(e,f,h),e==="focusout"&&(S=f._wrapperState)&&S.controlled&&f.type==="number"&&uo(f,"number",f.value)}switch(S=h?Ht(h):window,e){case"focusin":(gs(S)||S.contentEditable==="true")&&($t=S,So=h,An=null);break;case"focusout":An=So=$t=null;break;case"mousedown":Co=!0;break;case"contextmenu":case"mouseup":case"dragend":Co=!1,ks(m,n,v);break;case"selectionchange":if(bd)break;case"keydown":case"keyup":ks(m,n,v)}var C;if(ya)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Kt?dc(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(hc&&n.locale!=="ko"&&(Kt||R!=="onCompositionStart"?R==="onCompositionEnd"&&Kt&&(C=uc()):(lt=v,ga="value"in lt?lt.value:lt.textContent,Kt=!0)),S=Hr(h,R),0<S.length&&(R=new hs(R,e,null,n,v),m.push({event:R,listeners:S}),C?R.data=C:(C=pc(n),C!==null&&(R.data=C)))),(C=ud?hd(e,n):dd(e,n))&&(h=Hr(h,"onBeforeInput"),0<h.length&&(v=new hs("onBeforeInput","beforeinput",null,n,v),m.push({event:v,listeners:h}),v.data=C))}Ic(m,t)})}function Gn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hr(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Vn(e,n),o!=null&&r.unshift(Gn(e,o,i)),o=Vn(e,t),o!=null&&r.push(Gn(e,o,i))),e=e.return}return r}function Ft(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ss(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,h=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&h!==null&&(s=h,i?(l=Vn(n,o),l!=null&&a.unshift(Gn(n,l,s))):i||(l=Vn(n,o),l!=null&&a.push(Gn(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Ed=/\r\n?/g,Rd=/\u0000|\uFFFD/g;function Cs(e){return(typeof e=="string"?e:""+e).replace(Ed,`
`).replace(Rd,"")}function wr(e,t,n){if(t=Cs(t),Cs(e)!==t&&n)throw Error(x(425))}function Qr(){}var Io=null,Eo=null;function Ro(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var To=typeof setTimeout=="function"?setTimeout:void 0,Td=typeof clearTimeout=="function"?clearTimeout:void 0,Is=typeof Promise=="function"?Promise:void 0,Pd=typeof queueMicrotask=="function"?queueMicrotask:typeof Is<"u"?function(e){return Is.resolve(null).then(e).catch(_d)}:To;function _d(e){setTimeout(function(){throw e})}function $i(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Wn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Wn(t)}function pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Es(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var fn=Math.random().toString(36).slice(2),Ve="__reactFiber$"+fn,Xn="__reactProps$"+fn,Ye="__reactContainer$"+fn,Po="__reactEvents$"+fn,Nd="__reactListeners$"+fn,Od="__reactHandles$"+fn;function Rt(e){var t=e[Ve];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ye]||n[Ve]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Es(e);e!==null;){if(n=e[Ve])return n;e=Es(e)}return t}e=n,n=e.parentNode}return null}function sr(e){return e=e[Ve]||e[Ye],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ht(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function fi(e){return e[Xn]||null}var _o=[],Qt=-1;function wt(e){return{current:e}}function U(e){0>Qt||(e.current=_o[Qt],_o[Qt]=null,Qt--)}function D(e,t){Qt++,_o[Qt]=e.current,e.current=t}var xt={},ce=wt(xt),ve=wt(!1),zt=xt;function ln(e,t){var n=e.type.contextTypes;if(!n)return xt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ye(e){return e=e.childContextTypes,e!=null}function Jr(){U(ve),U(ce)}function Rs(e,t,n){if(ce.current!==xt)throw Error(x(168));D(ce,t),D(ve,n)}function Rc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(x(108,fh(e)||"Unknown",i));return $({},n,r)}function Gr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||xt,zt=ce.current,D(ce,e),D(ve,ve.current),!0}function Ts(e,t,n){var r=e.stateNode;if(!r)throw Error(x(169));n?(e=Rc(e,t,zt),r.__reactInternalMemoizedMergedChildContext=e,U(ve),U(ce),D(ce,e)):U(ve),D(ve,n)}var He=null,vi=!1,Wi=!1;function Tc(e){He===null?He=[e]:He.push(e)}function zd(e){vi=!0,Tc(e)}function bt(){if(!Wi&&He!==null){Wi=!0;var e=0,t=q;try{var n=He;for(q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}He=null,vi=!1}catch(i){throw He!==null&&(He=He.slice(e+1)),Zl(ha,bt),i}finally{q=t,Wi=!1}}return null}var Jt=[],Gt=0,Xr=null,Yr=0,Ee=[],Re=0,jt=null,Qe=1,Je="";function It(e,t){Jt[Gt++]=Yr,Jt[Gt++]=Xr,Xr=e,Yr=t}function Pc(e,t,n){Ee[Re++]=Qe,Ee[Re++]=Je,Ee[Re++]=jt,jt=e;var r=Qe;e=Je;var i=32-Ae(r)-1;r&=~(1<<i),n+=1;var o=32-Ae(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Qe=1<<32-Ae(t)+i|n<<i|r,Je=o+e}else Qe=1<<o|n<<i|r,Je=e}function ka(e){e.return!==null&&(It(e,1),Pc(e,1,0))}function wa(e){for(;e===Xr;)Xr=Jt[--Gt],Jt[Gt]=null,Yr=Jt[--Gt],Jt[Gt]=null;for(;e===jt;)jt=Ee[--Re],Ee[Re]=null,Je=Ee[--Re],Ee[Re]=null,Qe=Ee[--Re],Ee[Re]=null}var be=null,we=null,B=!1,Le=null;function _c(e,t){var n=Te(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ps(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,be=e,we=pt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,be=e,we=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=jt!==null?{id:Qe,overflow:Je}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Te(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,be=e,we=null,!0):!1;default:return!1}}function No(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Oo(e){if(B){var t=we;if(t){var n=t;if(!Ps(e,t)){if(No(e))throw Error(x(418));t=pt(n.nextSibling);var r=be;t&&Ps(e,t)?_c(r,n):(e.flags=e.flags&-4097|2,B=!1,be=e)}}else{if(No(e))throw Error(x(418));e.flags=e.flags&-4097|2,B=!1,be=e}}}function _s(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;be=e}function br(e){if(e!==be)return!1;if(!B)return _s(e),B=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ro(e.type,e.memoizedProps)),t&&(t=we)){if(No(e))throw Nc(),Error(x(418));for(;t;)_c(e,t),t=pt(t.nextSibling)}if(_s(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){we=pt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}we=null}}else we=be?pt(e.stateNode.nextSibling):null;return!0}function Nc(){for(var e=we;e;)e=pt(e.nextSibling)}function cn(){we=be=null,B=!1}function ba(e){Le===null?Le=[e]:Le.push(e)}var jd=tt.ReactCurrentBatchConfig;function bn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,e))}return e}function Sr(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ns(e){var t=e._init;return t(e._payload)}function Oc(e){function t(d,c){if(e){var p=d.deletions;p===null?(d.deletions=[c],d.flags|=16):p.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function i(d,c){return d=vt(d,c),d.index=0,d.sibling=null,d}function o(d,c,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<c?(d.flags|=2,c):p):(d.flags|=2,c)):(d.flags|=1048576,c)}function a(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,c,p,g){return c===null||c.tag!==6?(c=Zi(p,d.mode,g),c.return=d,c):(c=i(c,p),c.return=d,c)}function l(d,c,p,g){var w=p.type;return w===Vt?v(d,c,p.props.children,g,p.key):c!==null&&(c.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===it&&Ns(w)===c.type)?(g=i(c,p.props),g.ref=bn(d,c,p),g.return=d,g):(g=Dr(p.type,p.key,p.props,null,d.mode,g),g.ref=bn(d,c,p),g.return=d,g)}function h(d,c,p,g){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=eo(p,d.mode,g),c.return=d,c):(c=i(c,p.children||[]),c.return=d,c)}function v(d,c,p,g,w){return c===null||c.tag!==7?(c=Ot(p,d.mode,g,w),c.return=d,c):(c=i(c,p),c.return=d,c)}function m(d,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Zi(""+c,d.mode,p),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case dr:return p=Dr(c.type,c.key,c.props,null,d.mode,p),p.ref=bn(d,null,c),p.return=d,p;case Bt:return c=eo(c,d.mode,p),c.return=d,c;case it:var g=c._init;return m(d,g(c._payload),p)}if(Rn(c)||vn(c))return c=Ot(c,d.mode,p,null),c.return=d,c;Sr(d,c)}return null}function f(d,c,p,g){var w=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return w!==null?null:s(d,c,""+p,g);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case dr:return p.key===w?l(d,c,p,g):null;case Bt:return p.key===w?h(d,c,p,g):null;case it:return w=p._init,f(d,c,w(p._payload),g)}if(Rn(p)||vn(p))return w!==null?null:v(d,c,p,g,null);Sr(d,p)}return null}function y(d,c,p,g,w){if(typeof g=="string"&&g!==""||typeof g=="number")return d=d.get(p)||null,s(c,d,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case dr:return d=d.get(g.key===null?p:g.key)||null,l(c,d,g,w);case Bt:return d=d.get(g.key===null?p:g.key)||null,h(c,d,g,w);case it:var S=g._init;return y(d,c,p,S(g._payload),w)}if(Rn(g)||vn(g))return d=d.get(p)||null,v(c,d,g,w,null);Sr(c,g)}return null}function b(d,c,p,g){for(var w=null,S=null,C=c,R=c=0,L=null;C!==null&&R<p.length;R++){C.index>R?(L=C,C=null):L=C.sibling;var _=f(d,C,p[R],g);if(_===null){C===null&&(C=L);break}e&&C&&_.alternate===null&&t(d,C),c=o(_,c,R),S===null?w=_:S.sibling=_,S=_,C=L}if(R===p.length)return n(d,C),B&&It(d,R),w;if(C===null){for(;R<p.length;R++)C=m(d,p[R],g),C!==null&&(c=o(C,c,R),S===null?w=C:S.sibling=C,S=C);return B&&It(d,R),w}for(C=r(d,C);R<p.length;R++)L=y(C,d,R,p[R],g),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?R:L.key),c=o(L,c,R),S===null?w=L:S.sibling=L,S=L);return e&&C.forEach(function(me){return t(d,me)}),B&&It(d,R),w}function k(d,c,p,g){var w=vn(p);if(typeof w!="function")throw Error(x(150));if(p=w.call(p),p==null)throw Error(x(151));for(var S=w=null,C=c,R=c=0,L=null,_=p.next();C!==null&&!_.done;R++,_=p.next()){C.index>R?(L=C,C=null):L=C.sibling;var me=f(d,C,_.value,g);if(me===null){C===null&&(C=L);break}e&&C&&me.alternate===null&&t(d,C),c=o(me,c,R),S===null?w=me:S.sibling=me,S=me,C=L}if(_.done)return n(d,C),B&&It(d,R),w;if(C===null){for(;!_.done;R++,_=p.next())_=m(d,_.value,g),_!==null&&(c=o(_,c,R),S===null?w=_:S.sibling=_,S=_);return B&&It(d,R),w}for(C=r(d,C);!_.done;R++,_=p.next())_=y(C,d,R,_.value,g),_!==null&&(e&&_.alternate!==null&&C.delete(_.key===null?R:_.key),c=o(_,c,R),S===null?w=_:S.sibling=_,S=_);return e&&C.forEach(function(Y){return t(d,Y)}),B&&It(d,R),w}function P(d,c,p,g){if(typeof p=="object"&&p!==null&&p.type===Vt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case dr:e:{for(var w=p.key,S=c;S!==null;){if(S.key===w){if(w=p.type,w===Vt){if(S.tag===7){n(d,S.sibling),c=i(S,p.props.children),c.return=d,d=c;break e}}else if(S.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===it&&Ns(w)===S.type){n(d,S.sibling),c=i(S,p.props),c.ref=bn(d,S,p),c.return=d,d=c;break e}n(d,S);break}else t(d,S);S=S.sibling}p.type===Vt?(c=Ot(p.props.children,d.mode,g,p.key),c.return=d,d=c):(g=Dr(p.type,p.key,p.props,null,d.mode,g),g.ref=bn(d,c,p),g.return=d,d=g)}return a(d);case Bt:e:{for(S=p.key;c!==null;){if(c.key===S)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(d,c.sibling),c=i(c,p.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=eo(p,d.mode,g),c.return=d,d=c}return a(d);case it:return S=p._init,P(d,c,S(p._payload),g)}if(Rn(p))return b(d,c,p,g);if(vn(p))return k(d,c,p,g);Sr(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(d,c.sibling),c=i(c,p),c.return=d,d=c):(n(d,c),c=Zi(p,d.mode,g),c.return=d,d=c),a(d)):n(d,c)}return P}var un=Oc(!0),zc=Oc(!1),Zr=wt(null),ei=null,Xt=null,Sa=null;function Ca(){Sa=Xt=ei=null}function Ia(e){var t=Zr.current;U(Zr),e._currentValue=t}function zo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function on(e,t){ei=e,Sa=Xt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(fe=!0),e.firstContext=null)}function _e(e){var t=e._currentValue;if(Sa!==e)if(e={context:e,memoizedValue:t,next:null},Xt===null){if(ei===null)throw Error(x(308));Xt=e,ei.dependencies={lanes:0,firstContext:e}}else Xt=Xt.next=e;return t}var Tt=null;function Ea(e){Tt===null?Tt=[e]:Tt.push(e)}function jc(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ea(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ze(e,r)}function Ze(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ot=!1;function Ra(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ge(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function mt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,A&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ze(e,n)}return i=r.interleaved,i===null?(t.next=t,Ea(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ze(e,n)}function zr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,da(e,n)}}function Os(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ti(e,t,n,r){var i=e.updateQueue;ot=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,h=l.next;l.next=null,a===null?o=h:a.next=h,a=l;var v=e.alternate;v!==null&&(v=v.updateQueue,s=v.lastBaseUpdate,s!==a&&(s===null?v.firstBaseUpdate=h:s.next=h,v.lastBaseUpdate=l))}if(o!==null){var m=i.baseState;a=0,v=h=l=null,s=o;do{var f=s.lane,y=s.eventTime;if((r&f)===f){v!==null&&(v=v.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var b=e,k=s;switch(f=t,y=n,k.tag){case 1:if(b=k.payload,typeof b=="function"){m=b.call(y,m,f);break e}m=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=k.payload,f=typeof b=="function"?b.call(y,m,f):b,f==null)break e;m=$({},m,f);break e;case 2:ot=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else y={eventTime:y,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},v===null?(h=v=y,l=m):v=v.next=y,a|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(v===null&&(l=m),i.baseState=l,i.firstBaseUpdate=h,i.lastBaseUpdate=v,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);At|=a,e.lanes=a,e.memoizedState=m}}function zs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var lr={},$e=wt(lr),Yn=wt(lr),Zn=wt(lr);function Pt(e){if(e===lr)throw Error(x(174));return e}function Ta(e,t){switch(D(Zn,t),D(Yn,e),D($e,lr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:po(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=po(t,e)}U($e),D($e,t)}function hn(){U($e),U(Yn),U(Zn)}function Ac(e){Pt(Zn.current);var t=Pt($e.current),n=po(t,e.type);t!==n&&(D(Yn,e),D($e,n))}function Pa(e){Yn.current===e&&(U($e),U(Yn))}var V=wt(0);function ni(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Hi=[];function _a(){for(var e=0;e<Hi.length;e++)Hi[e]._workInProgressVersionPrimary=null;Hi.length=0}var jr=tt.ReactCurrentDispatcher,Qi=tt.ReactCurrentBatchConfig,Lt=0,K=null,G=null,ee=null,ri=!1,Mn=!1,er=0,Ld=0;function ae(){throw Error(x(321))}function Na(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!qe(e[n],t[n]))return!1;return!0}function Oa(e,t,n,r,i,o){if(Lt=o,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,jr.current=e===null||e.memoizedState===null?Dd:Fd,e=n(r,i),Mn){o=0;do{if(Mn=!1,er=0,25<=o)throw Error(x(301));o+=1,ee=G=null,t.updateQueue=null,jr.current=Ud,e=n(r,i)}while(Mn)}if(jr.current=ii,t=G!==null&&G.next!==null,Lt=0,ee=G=K=null,ri=!1,t)throw Error(x(300));return e}function za(){var e=er!==0;return er=0,e}function Be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?K.memoizedState=ee=e:ee=ee.next=e,ee}function Ne(){if(G===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var t=ee===null?K.memoizedState:ee.next;if(t!==null)ee=t,G=e;else{if(e===null)throw Error(x(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},ee===null?K.memoizedState=ee=e:ee=ee.next=e}return ee}function tr(e,t){return typeof t=="function"?t(e):t}function Ji(e){var t=Ne(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=G,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,h=o;do{var v=h.lane;if((Lt&v)===v)l!==null&&(l=l.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:e(r,h.action);else{var m={lane:v,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};l===null?(s=l=m,a=r):l=l.next=m,K.lanes|=v,At|=v}h=h.next}while(h!==null&&h!==o);l===null?a=r:l.next=s,qe(r,t.memoizedState)||(fe=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,K.lanes|=o,At|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Gi(e){var t=Ne(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);qe(o,t.memoizedState)||(fe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Mc(){}function qc(e,t){var n=K,r=Ne(),i=t(),o=!qe(r.memoizedState,i);if(o&&(r.memoizedState=i,fe=!0),r=r.queue,ja(Uc.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,nr(9,Fc.bind(null,n,r,i,t),void 0,null),te===null)throw Error(x(349));Lt&30||Dc(n,t,i)}return i}function Dc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Fc(e,t,n,r){t.value=n,t.getSnapshot=r,Bc(t)&&Vc(e)}function Uc(e,t,n){return n(function(){Bc(t)&&Vc(e)})}function Bc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!qe(e,n)}catch{return!0}}function Vc(e){var t=Ze(e,1);t!==null&&Me(t,e,1,-1)}function js(e){var t=Be();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:tr,lastRenderedState:e},t.queue=e,e=e.dispatch=qd.bind(null,K,e),[t.memoizedState,e]}function nr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Kc(){return Ne().memoizedState}function Lr(e,t,n,r){var i=Be();K.flags|=e,i.memoizedState=nr(1|t,n,void 0,r===void 0?null:r)}function yi(e,t,n,r){var i=Ne();r=r===void 0?null:r;var o=void 0;if(G!==null){var a=G.memoizedState;if(o=a.destroy,r!==null&&Na(r,a.deps)){i.memoizedState=nr(t,n,o,r);return}}K.flags|=e,i.memoizedState=nr(1|t,n,o,r)}function Ls(e,t){return Lr(8390656,8,e,t)}function ja(e,t){return yi(2048,8,e,t)}function $c(e,t){return yi(4,2,e,t)}function Wc(e,t){return yi(4,4,e,t)}function Hc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Qc(e,t,n){return n=n!=null?n.concat([e]):null,yi(4,4,Hc.bind(null,t,e),n)}function La(){}function Jc(e,t){var n=Ne();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Na(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Gc(e,t){var n=Ne();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Na(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Xc(e,t,n){return Lt&21?(qe(n,t)||(n=nc(),K.lanes|=n,At|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,fe=!0),e.memoizedState=n)}function Ad(e,t){var n=q;q=n!==0&&4>n?n:4,e(!0);var r=Qi.transition;Qi.transition={};try{e(!1),t()}finally{q=n,Qi.transition=r}}function Yc(){return Ne().memoizedState}function Md(e,t,n){var r=ft(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Zc(e))eu(t,n);else if(n=jc(e,t,n,r),n!==null){var i=he();Me(n,e,r,i),tu(n,t,r)}}function qd(e,t,n){var r=ft(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zc(e))eu(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,qe(s,a)){var l=t.interleaved;l===null?(i.next=i,Ea(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=jc(e,t,i,r),n!==null&&(i=he(),Me(n,e,r,i),tu(n,t,r))}}function Zc(e){var t=e.alternate;return e===K||t!==null&&t===K}function eu(e,t){Mn=ri=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function tu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,da(e,n)}}var ii={readContext:_e,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},Dd={readContext:_e,useCallback:function(e,t){return Be().memoizedState=[e,t===void 0?null:t],e},useContext:_e,useEffect:Ls,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Lr(4194308,4,Hc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Lr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Lr(4,2,e,t)},useMemo:function(e,t){var n=Be();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Be();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Md.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var t=Be();return e={current:e},t.memoizedState=e},useState:js,useDebugValue:La,useDeferredValue:function(e){return Be().memoizedState=e},useTransition:function(){var e=js(!1),t=e[0];return e=Ad.bind(null,e[1]),Be().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=K,i=Be();if(B){if(n===void 0)throw Error(x(407));n=n()}else{if(n=t(),te===null)throw Error(x(349));Lt&30||Dc(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Ls(Uc.bind(null,r,o,e),[e]),r.flags|=2048,nr(9,Fc.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Be(),t=te.identifierPrefix;if(B){var n=Je,r=Qe;n=(r&~(1<<32-Ae(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=er++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ld++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Fd={readContext:_e,useCallback:Jc,useContext:_e,useEffect:ja,useImperativeHandle:Qc,useInsertionEffect:$c,useLayoutEffect:Wc,useMemo:Gc,useReducer:Ji,useRef:Kc,useState:function(){return Ji(tr)},useDebugValue:La,useDeferredValue:function(e){var t=Ne();return Xc(t,G.memoizedState,e)},useTransition:function(){var e=Ji(tr)[0],t=Ne().memoizedState;return[e,t]},useMutableSource:Mc,useSyncExternalStore:qc,useId:Yc,unstable_isNewReconciler:!1},Ud={readContext:_e,useCallback:Jc,useContext:_e,useEffect:ja,useImperativeHandle:Qc,useInsertionEffect:$c,useLayoutEffect:Wc,useMemo:Gc,useReducer:Gi,useRef:Kc,useState:function(){return Gi(tr)},useDebugValue:La,useDeferredValue:function(e){var t=Ne();return G===null?t.memoizedState=e:Xc(t,G.memoizedState,e)},useTransition:function(){var e=Gi(tr)[0],t=Ne().memoizedState;return[e,t]},useMutableSource:Mc,useSyncExternalStore:qc,useId:Yc,unstable_isNewReconciler:!1};function ze(e,t){if(e&&e.defaultProps){t=$({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function jo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:$({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var xi={isMounted:function(e){return(e=e._reactInternals)?Dt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=he(),i=ft(e),o=Ge(r,i);o.payload=t,n!=null&&(o.callback=n),t=mt(e,o,i),t!==null&&(Me(t,e,i,r),zr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=he(),i=ft(e),o=Ge(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=mt(e,o,i),t!==null&&(Me(t,e,i,r),zr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=he(),r=ft(e),i=Ge(n,r);i.tag=2,t!=null&&(i.callback=t),t=mt(e,i,r),t!==null&&(Me(t,e,r,n),zr(t,e,r))}};function As(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Qn(n,r)||!Qn(i,o):!0}function nu(e,t,n){var r=!1,i=xt,o=t.contextType;return typeof o=="object"&&o!==null?o=_e(o):(i=ye(t)?zt:ce.current,r=t.contextTypes,o=(r=r!=null)?ln(e,i):xt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=xi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ms(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&xi.enqueueReplaceState(t,t.state,null)}function Lo(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Ra(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=_e(o):(o=ye(t)?zt:ce.current,i.context=ln(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(jo(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&xi.enqueueReplaceState(i,i.state,null),ti(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function dn(e,t){try{var n="",r=t;do n+=gh(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Xi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ao(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Bd=typeof WeakMap=="function"?WeakMap:Map;function ru(e,t,n){n=Ge(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ai||(ai=!0,Wo=r),Ao(e,t)},n}function iu(e,t,n){n=Ge(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ao(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ao(e,t),typeof r!="function"&&(gt===null?gt=new Set([this]):gt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function qs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bd;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=np.bind(null,e,t,n),t.then(e,e))}function Ds(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Fs(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ge(-1,1),t.tag=2,mt(n,t,1))),n.lanes|=1),e)}var Vd=tt.ReactCurrentOwner,fe=!1;function ue(e,t,n,r){t.child=e===null?zc(t,null,n,r):un(t,e.child,n,r)}function Us(e,t,n,r,i){n=n.render;var o=t.ref;return on(t,i),r=Oa(e,t,n,r,o,i),n=za(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,et(e,t,i)):(B&&n&&ka(t),t.flags|=1,ue(e,t,r,i),t.child)}function Bs(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Va(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,ou(e,t,o,r,i)):(e=Dr(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Qn,n(a,r)&&e.ref===t.ref)return et(e,t,i)}return t.flags|=1,e=vt(o,r),e.ref=t.ref,e.return=t,t.child=e}function ou(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Qn(o,r)&&e.ref===t.ref)if(fe=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(fe=!0);else return t.lanes=e.lanes,et(e,t,i)}return Mo(e,t,n,r,i)}function au(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(Zt,ke),ke|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,D(Zt,ke),ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,D(Zt,ke),ke|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,D(Zt,ke),ke|=r;return ue(e,t,i,n),t.child}function su(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Mo(e,t,n,r,i){var o=ye(n)?zt:ce.current;return o=ln(t,o),on(t,i),n=Oa(e,t,n,r,o,i),r=za(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,et(e,t,i)):(B&&r&&ka(t),t.flags|=1,ue(e,t,n,i),t.child)}function Vs(e,t,n,r,i){if(ye(n)){var o=!0;Gr(t)}else o=!1;if(on(t,i),t.stateNode===null)Ar(e,t),nu(t,n,r),Lo(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,h=n.contextType;typeof h=="object"&&h!==null?h=_e(h):(h=ye(n)?zt:ce.current,h=ln(t,h));var v=n.getDerivedStateFromProps,m=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==h)&&Ms(t,a,r,h),ot=!1;var f=t.memoizedState;a.state=f,ti(t,r,a,i),l=t.memoizedState,s!==r||f!==l||ve.current||ot?(typeof v=="function"&&(jo(t,n,v,r),l=t.memoizedState),(s=ot||As(t,n,s,r,f,l,h))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=h,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Lc(e,t),s=t.memoizedProps,h=t.type===t.elementType?s:ze(t.type,s),a.props=h,m=t.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=_e(l):(l=ye(n)?zt:ce.current,l=ln(t,l));var y=n.getDerivedStateFromProps;(v=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==m||f!==l)&&Ms(t,a,r,l),ot=!1,f=t.memoizedState,a.state=f,ti(t,r,a,i);var b=t.memoizedState;s!==m||f!==b||ve.current||ot?(typeof y=="function"&&(jo(t,n,y,r),b=t.memoizedState),(h=ot||As(t,n,h,r,f,b,l)||!1)?(v||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,b,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,b,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),a.props=r,a.state=b,a.context=l,r=h):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return qo(e,t,n,r,o,i)}function qo(e,t,n,r,i,o){su(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Ts(t,n,!1),et(e,t,o);r=t.stateNode,Vd.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=un(t,e.child,null,o),t.child=un(t,null,s,o)):ue(e,t,s,o),t.memoizedState=r.state,i&&Ts(t,n,!0),t.child}function lu(e){var t=e.stateNode;t.pendingContext?Rs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Rs(e,t.context,!1),Ta(e,t.containerInfo)}function Ks(e,t,n,r,i){return cn(),ba(i),t.flags|=256,ue(e,t,n,r),t.child}var Do={dehydrated:null,treeContext:null,retryLane:0};function Fo(e){return{baseLanes:e,cachePool:null,transitions:null}}function cu(e,t,n){var r=t.pendingProps,i=V.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),D(V,i&1),e===null)return Oo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=bi(a,r,0,null),e=Ot(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Fo(n),t.memoizedState=Do,e):Aa(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Kd(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=vt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=vt(s,o):(o=Ot(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Fo(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Do,r}return o=e.child,e=o.sibling,r=vt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Aa(e,t){return t=bi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Cr(e,t,n,r){return r!==null&&ba(r),un(t,e.child,null,n),e=Aa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Kd(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Xi(Error(x(422))),Cr(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=bi({mode:"visible",children:r.children},i,0,null),o=Ot(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&un(t,e.child,null,a),t.child.memoizedState=Fo(a),t.memoizedState=Do,o);if(!(t.mode&1))return Cr(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(x(419)),r=Xi(o,r,void 0),Cr(e,t,a,r)}if(s=(a&e.childLanes)!==0,fe||s){if(r=te,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ze(e,i),Me(r,e,i,-1))}return Ba(),r=Xi(Error(x(421))),Cr(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=rp.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,we=pt(i.nextSibling),be=t,B=!0,Le=null,e!==null&&(Ee[Re++]=Qe,Ee[Re++]=Je,Ee[Re++]=jt,Qe=e.id,Je=e.overflow,jt=t),t=Aa(t,r.children),t.flags|=4096,t)}function $s(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),zo(e.return,t,n)}function Yi(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function uu(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ue(e,t,r.children,n),r=V.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$s(e,n,t);else if(e.tag===19)$s(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(D(V,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ni(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Yi(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ni(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Yi(t,!0,n,null,o);break;case"together":Yi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ar(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function et(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),At|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,n=vt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function $d(e,t,n){switch(t.tag){case 3:lu(t),cn();break;case 5:Ac(t);break;case 1:ye(t.type)&&Gr(t);break;case 4:Ta(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;D(Zr,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(D(V,V.current&1),t.flags|=128,null):n&t.child.childLanes?cu(e,t,n):(D(V,V.current&1),e=et(e,t,n),e!==null?e.sibling:null);D(V,V.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return uu(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),D(V,V.current),r)break;return null;case 22:case 23:return t.lanes=0,au(e,t,n)}return et(e,t,n)}var hu,Uo,du,pu;hu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Uo=function(){};du=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Pt($e.current);var o=null;switch(n){case"input":i=lo(e,i),r=lo(e,r),o=[];break;case"select":i=$({},i,{value:void 0}),r=$({},r,{value:void 0}),o=[];break;case"textarea":i=ho(e,i),r=ho(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Qr)}mo(n,r);var a;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var s=i[h];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Un.hasOwnProperty(h)?o||(o=[]):(o=o||[]).push(h,null));for(h in r){var l=r[h];if(s=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&l!==s&&(l!=null||s!=null))if(h==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(h,n)),n=l;else h==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(h,l)):h==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(h,""+l):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Un.hasOwnProperty(h)?(l!=null&&h==="onScroll"&&F("scroll",e),o||s===l||(o=[])):(o=o||[]).push(h,l))}n&&(o=o||[]).push("style",n);var h=o;(t.updateQueue=h)&&(t.flags|=4)}};pu=function(e,t,n,r){n!==r&&(t.flags|=4)};function Sn(e,t){if(!B)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Wd(e,t,n){var r=t.pendingProps;switch(wa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return ye(t.type)&&Jr(),se(t),null;case 3:return r=t.stateNode,hn(),U(ve),U(ce),_a(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(br(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Le!==null&&(Jo(Le),Le=null))),Uo(e,t),se(t),null;case 5:Pa(t);var i=Pt(Zn.current);if(n=t.type,e!==null&&t.stateNode!=null)du(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(x(166));return se(t),null}if(e=Pt($e.current),br(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ve]=t,r[Xn]=o,e=(t.mode&1)!==0,n){case"dialog":F("cancel",r),F("close",r);break;case"iframe":case"object":case"embed":F("load",r);break;case"video":case"audio":for(i=0;i<Pn.length;i++)F(Pn[i],r);break;case"source":F("error",r);break;case"img":case"image":case"link":F("error",r),F("load",r);break;case"details":F("toggle",r);break;case"input":es(r,o),F("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},F("invalid",r);break;case"textarea":ns(r,o),F("invalid",r)}mo(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&wr(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&wr(r.textContent,s,e),i=["children",""+s]):Un.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&F("scroll",r)}switch(n){case"input":pr(r),ts(r,o,!0);break;case"textarea":pr(r),rs(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Qr)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ul(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Ve]=t,e[Xn]=r,hu(e,t,!1,!1),t.stateNode=e;e:{switch(a=go(n,r),n){case"dialog":F("cancel",e),F("close",e),i=r;break;case"iframe":case"object":case"embed":F("load",e),i=r;break;case"video":case"audio":for(i=0;i<Pn.length;i++)F(Pn[i],e);i=r;break;case"source":F("error",e),i=r;break;case"img":case"image":case"link":F("error",e),F("load",e),i=r;break;case"details":F("toggle",e),i=r;break;case"input":es(e,r),i=lo(e,r),F("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=$({},r,{value:void 0}),F("invalid",e);break;case"textarea":ns(e,r),i=ho(e,r),F("invalid",e);break;default:i=r}mo(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?Kl(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Bl(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Bn(e,l):typeof l=="number"&&Bn(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Un.hasOwnProperty(o)?l!=null&&o==="onScroll"&&F("scroll",e):l!=null&&aa(e,o,l,a))}switch(n){case"input":pr(e),ts(e,r,!1);break;case"textarea":pr(e),rs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+yt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?en(e,!!r.multiple,o,!1):r.defaultValue!=null&&en(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Qr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return se(t),null;case 6:if(e&&t.stateNode!=null)pu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(x(166));if(n=Pt(Zn.current),Pt($e.current),br(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ve]=t,(o=r.nodeValue!==n)&&(e=be,e!==null))switch(e.tag){case 3:wr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&wr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ve]=t,t.stateNode=r}return se(t),null;case 13:if(U(V),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&we!==null&&t.mode&1&&!(t.flags&128))Nc(),cn(),t.flags|=98560,o=!1;else if(o=br(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(x(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(x(317));o[Ve]=t}else cn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;se(t),o=!1}else Le!==null&&(Jo(Le),Le=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||V.current&1?X===0&&(X=3):Ba())),t.updateQueue!==null&&(t.flags|=4),se(t),null);case 4:return hn(),Uo(e,t),e===null&&Jn(t.stateNode.containerInfo),se(t),null;case 10:return Ia(t.type._context),se(t),null;case 17:return ye(t.type)&&Jr(),se(t),null;case 19:if(U(V),o=t.memoizedState,o===null)return se(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Sn(o,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=ni(e),a!==null){for(t.flags|=128,Sn(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return D(V,V.current&1|2),t.child}e=e.sibling}o.tail!==null&&Q()>pn&&(t.flags|=128,r=!0,Sn(o,!1),t.lanes=4194304)}else{if(!r)if(e=ni(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Sn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!B)return se(t),null}else 2*Q()-o.renderingStartTime>pn&&n!==1073741824&&(t.flags|=128,r=!0,Sn(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Q(),t.sibling=null,n=V.current,D(V,r?n&1|2:n&1),t):(se(t),null);case 22:case 23:return Ua(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ke&1073741824&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function Hd(e,t){switch(wa(t),t.tag){case 1:return ye(t.type)&&Jr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return hn(),U(ve),U(ce),_a(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Pa(t),null;case 13:if(U(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));cn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(V),null;case 4:return hn(),null;case 10:return Ia(t.type._context),null;case 22:case 23:return Ua(),null;case 24:return null;default:return null}}var Ir=!1,le=!1,Qd=typeof WeakSet=="function"?WeakSet:Set,I=null;function Yt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){W(e,t,r)}else n.current=null}function Bo(e,t,n){try{n()}catch(r){W(e,t,r)}}var Ws=!1;function Jd(e,t){if(Io=$r,e=yc(),xa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,h=0,v=0,m=e,f=null;t:for(;;){for(var y;m!==n||i!==0&&m.nodeType!==3||(s=a+i),m!==o||r!==0&&m.nodeType!==3||(l=a+r),m.nodeType===3&&(a+=m.nodeValue.length),(y=m.firstChild)!==null;)f=m,m=y;for(;;){if(m===e)break t;if(f===n&&++h===i&&(s=a),f===o&&++v===r&&(l=a),(y=m.nextSibling)!==null)break;m=f,f=m.parentNode}m=y}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Eo={focusedElem:e,selectionRange:n},$r=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var k=b.memoizedProps,P=b.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?k:ze(t.type,k),P);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(g){W(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return b=Ws,Ws=!1,b}function qn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Bo(t,n,o)}i=i.next}while(i!==r)}}function ki(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Vo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function mu(e){var t=e.alternate;t!==null&&(e.alternate=null,mu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ve],delete t[Xn],delete t[Po],delete t[Nd],delete t[Od])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function gu(e){return e.tag===5||e.tag===3||e.tag===4}function Hs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||gu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ko(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qr));else if(r!==4&&(e=e.child,e!==null))for(Ko(e,t,n),e=e.sibling;e!==null;)Ko(e,t,n),e=e.sibling}function $o(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for($o(e,t,n),e=e.sibling;e!==null;)$o(e,t,n),e=e.sibling}var ne=null,je=!1;function nt(e,t,n){for(n=n.child;n!==null;)fu(e,t,n),n=n.sibling}function fu(e,t,n){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(di,n)}catch{}switch(n.tag){case 5:le||Yt(n,t);case 6:var r=ne,i=je;ne=null,nt(e,t,n),ne=r,je=i,ne!==null&&(je?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(je?(e=ne,n=n.stateNode,e.nodeType===8?$i(e.parentNode,n):e.nodeType===1&&$i(e,n),Wn(e)):$i(ne,n.stateNode));break;case 4:r=ne,i=je,ne=n.stateNode.containerInfo,je=!0,nt(e,t,n),ne=r,je=i;break;case 0:case 11:case 14:case 15:if(!le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Bo(n,t,a),i=i.next}while(i!==r)}nt(e,t,n);break;case 1:if(!le&&(Yt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){W(n,t,s)}nt(e,t,n);break;case 21:nt(e,t,n);break;case 22:n.mode&1?(le=(r=le)||n.memoizedState!==null,nt(e,t,n),le=r):nt(e,t,n);break;default:nt(e,t,n)}}function Qs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Qd),t.forEach(function(r){var i=ip.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Oe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:ne=s.stateNode,je=!1;break e;case 3:ne=s.stateNode.containerInfo,je=!0;break e;case 4:ne=s.stateNode.containerInfo,je=!0;break e}s=s.return}if(ne===null)throw Error(x(160));fu(o,a,i),ne=null,je=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(h){W(i,t,h)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)vu(t,e),t=t.sibling}function vu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Oe(t,e),Ue(e),r&4){try{qn(3,e,e.return),ki(3,e)}catch(k){W(e,e.return,k)}try{qn(5,e,e.return)}catch(k){W(e,e.return,k)}}break;case 1:Oe(t,e),Ue(e),r&512&&n!==null&&Yt(n,n.return);break;case 5:if(Oe(t,e),Ue(e),r&512&&n!==null&&Yt(n,n.return),e.flags&32){var i=e.stateNode;try{Bn(i,"")}catch(k){W(e,e.return,k)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Dl(i,o),go(s,a);var h=go(s,o);for(a=0;a<l.length;a+=2){var v=l[a],m=l[a+1];v==="style"?Kl(i,m):v==="dangerouslySetInnerHTML"?Bl(i,m):v==="children"?Bn(i,m):aa(i,v,m,h)}switch(s){case"input":co(i,o);break;case"textarea":Fl(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?en(i,!!o.multiple,y,!1):f!==!!o.multiple&&(o.defaultValue!=null?en(i,!!o.multiple,o.defaultValue,!0):en(i,!!o.multiple,o.multiple?[]:"",!1))}i[Xn]=o}catch(k){W(e,e.return,k)}}break;case 6:if(Oe(t,e),Ue(e),r&4){if(e.stateNode===null)throw Error(x(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(k){W(e,e.return,k)}}break;case 3:if(Oe(t,e),Ue(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Wn(t.containerInfo)}catch(k){W(e,e.return,k)}break;case 4:Oe(t,e),Ue(e);break;case 13:Oe(t,e),Ue(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Da=Q())),r&4&&Qs(e);break;case 22:if(v=n!==null&&n.memoizedState!==null,e.mode&1?(le=(h=le)||v,Oe(t,e),le=h):Oe(t,e),Ue(e),r&8192){if(h=e.memoizedState!==null,(e.stateNode.isHidden=h)&&!v&&e.mode&1)for(I=e,v=e.child;v!==null;){for(m=I=v;I!==null;){switch(f=I,y=f.child,f.tag){case 0:case 11:case 14:case 15:qn(4,f,f.return);break;case 1:Yt(f,f.return);var b=f.stateNode;if(typeof b.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(k){W(r,n,k)}}break;case 5:Yt(f,f.return);break;case 22:if(f.memoizedState!==null){Gs(m);continue}}y!==null?(y.return=f,I=y):Gs(m)}v=v.sibling}e:for(v=null,m=e;;){if(m.tag===5){if(v===null){v=m;try{i=m.stateNode,h?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=m.stateNode,l=m.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Vl("display",a))}catch(k){W(e,e.return,k)}}}else if(m.tag===6){if(v===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(k){W(e,e.return,k)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;v===m&&(v=null),m=m.return}v===m&&(v=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Oe(t,e),Ue(e),r&4&&Qs(e);break;case 21:break;default:Oe(t,e),Ue(e)}}function Ue(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(gu(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Bn(i,""),r.flags&=-33);var o=Hs(e);$o(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Hs(e);Ko(e,s,a);break;default:throw Error(x(161))}}catch(l){W(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Gd(e,t,n){I=e,yu(e)}function yu(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var i=I,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Ir;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||le;s=Ir;var h=le;if(Ir=a,(le=l)&&!h)for(I=i;I!==null;)a=I,l=a.child,a.tag===22&&a.memoizedState!==null?Xs(i):l!==null?(l.return=a,I=l):Xs(i);for(;o!==null;)I=o,yu(o),o=o.sibling;I=i,Ir=s,le=h}Js(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,I=o):Js(e)}}function Js(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:le||ki(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!le)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ze(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&zs(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}zs(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var h=t.alternate;if(h!==null){var v=h.memoizedState;if(v!==null){var m=v.dehydrated;m!==null&&Wn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}le||t.flags&512&&Vo(t)}catch(f){W(t,t.return,f)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function Gs(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function Xs(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ki(4,t)}catch(l){W(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){W(t,i,l)}}var o=t.return;try{Vo(t)}catch(l){W(t,o,l)}break;case 5:var a=t.return;try{Vo(t)}catch(l){W(t,a,l)}}}catch(l){W(t,t.return,l)}if(t===e){I=null;break}var s=t.sibling;if(s!==null){s.return=t.return,I=s;break}I=t.return}}var Xd=Math.ceil,oi=tt.ReactCurrentDispatcher,Ma=tt.ReactCurrentOwner,Pe=tt.ReactCurrentBatchConfig,A=0,te=null,J=null,re=0,ke=0,Zt=wt(0),X=0,rr=null,At=0,wi=0,qa=0,Dn=null,ge=null,Da=0,pn=1/0,We=null,ai=!1,Wo=null,gt=null,Er=!1,ct=null,si=0,Fn=0,Ho=null,Mr=-1,qr=0;function he(){return A&6?Q():Mr!==-1?Mr:Mr=Q()}function ft(e){return e.mode&1?A&2&&re!==0?re&-re:jd.transition!==null?(qr===0&&(qr=nc()),qr):(e=q,e!==0||(e=window.event,e=e===void 0?16:cc(e.type)),e):1}function Me(e,t,n,r){if(50<Fn)throw Fn=0,Ho=null,Error(x(185));or(e,n,r),(!(A&2)||e!==te)&&(e===te&&(!(A&2)&&(wi|=n),X===4&&st(e,re)),xe(e,r),n===1&&A===0&&!(t.mode&1)&&(pn=Q()+500,vi&&bt()))}function xe(e,t){var n=e.callbackNode;jh(e,t);var r=Kr(e,e===te?re:0);if(r===0)n!==null&&as(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&as(n),t===1)e.tag===0?zd(Ys.bind(null,e)):Tc(Ys.bind(null,e)),Pd(function(){!(A&6)&&bt()}),n=null;else{switch(rc(r)){case 1:n=ha;break;case 4:n=ec;break;case 16:n=Vr;break;case 536870912:n=tc;break;default:n=Vr}n=Eu(n,xu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function xu(e,t){if(Mr=-1,qr=0,A&6)throw Error(x(327));var n=e.callbackNode;if(an()&&e.callbackNode!==n)return null;var r=Kr(e,e===te?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=li(e,r);else{t=r;var i=A;A|=2;var o=wu();(te!==e||re!==t)&&(We=null,pn=Q()+500,Nt(e,t));do try{ep();break}catch(s){ku(e,s)}while(!0);Ca(),oi.current=o,A=i,J!==null?t=0:(te=null,re=0,t=X)}if(t!==0){if(t===2&&(i=ko(e),i!==0&&(r=i,t=Qo(e,i))),t===1)throw n=rr,Nt(e,0),st(e,r),xe(e,Q()),n;if(t===6)st(e,r);else{if(i=e.current.alternate,!(r&30)&&!Yd(i)&&(t=li(e,r),t===2&&(o=ko(e),o!==0&&(r=o,t=Qo(e,o))),t===1))throw n=rr,Nt(e,0),st(e,r),xe(e,Q()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(x(345));case 2:Et(e,ge,We);break;case 3:if(st(e,r),(r&130023424)===r&&(t=Da+500-Q(),10<t)){if(Kr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){he(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=To(Et.bind(null,e,ge,We),t);break}Et(e,ge,We);break;case 4:if(st(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Ae(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Xd(r/1960))-r,10<r){e.timeoutHandle=To(Et.bind(null,e,ge,We),r);break}Et(e,ge,We);break;case 5:Et(e,ge,We);break;default:throw Error(x(329))}}}return xe(e,Q()),e.callbackNode===n?xu.bind(null,e):null}function Qo(e,t){var n=Dn;return e.current.memoizedState.isDehydrated&&(Nt(e,t).flags|=256),e=li(e,t),e!==2&&(t=ge,ge=n,t!==null&&Jo(t)),e}function Jo(e){ge===null?ge=e:ge.push.apply(ge,e)}function Yd(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!qe(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function st(e,t){for(t&=~qa,t&=~wi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ae(t),r=1<<n;e[n]=-1,t&=~r}}function Ys(e){if(A&6)throw Error(x(327));an();var t=Kr(e,0);if(!(t&1))return xe(e,Q()),null;var n=li(e,t);if(e.tag!==0&&n===2){var r=ko(e);r!==0&&(t=r,n=Qo(e,r))}if(n===1)throw n=rr,Nt(e,0),st(e,t),xe(e,Q()),n;if(n===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Et(e,ge,We),xe(e,Q()),null}function Fa(e,t){var n=A;A|=1;try{return e(t)}finally{A=n,A===0&&(pn=Q()+500,vi&&bt())}}function Mt(e){ct!==null&&ct.tag===0&&!(A&6)&&an();var t=A;A|=1;var n=Pe.transition,r=q;try{if(Pe.transition=null,q=1,e)return e()}finally{q=r,Pe.transition=n,A=t,!(A&6)&&bt()}}function Ua(){ke=Zt.current,U(Zt)}function Nt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Td(n)),J!==null)for(n=J.return;n!==null;){var r=n;switch(wa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Jr();break;case 3:hn(),U(ve),U(ce),_a();break;case 5:Pa(r);break;case 4:hn();break;case 13:U(V);break;case 19:U(V);break;case 10:Ia(r.type._context);break;case 22:case 23:Ua()}n=n.return}if(te=e,J=e=vt(e.current,null),re=ke=t,X=0,rr=null,qa=wi=At=0,ge=Dn=null,Tt!==null){for(t=0;t<Tt.length;t++)if(n=Tt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Tt=null}return e}function ku(e,t){do{var n=J;try{if(Ca(),jr.current=ii,ri){for(var r=K.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ri=!1}if(Lt=0,ee=G=K=null,Mn=!1,er=0,Ma.current=null,n===null||n.return===null){X=1,rr=t,J=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=re,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=l,v=s,m=v.tag;if(!(v.mode&1)&&(m===0||m===11||m===15)){var f=v.alternate;f?(v.updateQueue=f.updateQueue,v.memoizedState=f.memoizedState,v.lanes=f.lanes):(v.updateQueue=null,v.memoizedState=null)}var y=Ds(a);if(y!==null){y.flags&=-257,Fs(y,a,s,o,t),y.mode&1&&qs(o,h,t),t=y,l=h;var b=t.updateQueue;if(b===null){var k=new Set;k.add(l),t.updateQueue=k}else b.add(l);break e}else{if(!(t&1)){qs(o,h,t),Ba();break e}l=Error(x(426))}}else if(B&&s.mode&1){var P=Ds(a);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Fs(P,a,s,o,t),ba(dn(l,s));break e}}o=l=dn(l,s),X!==4&&(X=2),Dn===null?Dn=[o]:Dn.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=ru(o,l,t);Os(o,d);break e;case 1:s=l;var c=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(gt===null||!gt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var g=iu(o,s,t);Os(o,g);break e}}o=o.return}while(o!==null)}Su(n)}catch(w){t=w,J===n&&n!==null&&(J=n=n.return);continue}break}while(!0)}function wu(){var e=oi.current;return oi.current=ii,e===null?ii:e}function Ba(){(X===0||X===3||X===2)&&(X=4),te===null||!(At&268435455)&&!(wi&268435455)||st(te,re)}function li(e,t){var n=A;A|=2;var r=wu();(te!==e||re!==t)&&(We=null,Nt(e,t));do try{Zd();break}catch(i){ku(e,i)}while(!0);if(Ca(),A=n,oi.current=r,J!==null)throw Error(x(261));return te=null,re=0,X}function Zd(){for(;J!==null;)bu(J)}function ep(){for(;J!==null&&!Ih();)bu(J)}function bu(e){var t=Iu(e.alternate,e,ke);e.memoizedProps=e.pendingProps,t===null?Su(e):J=t,Ma.current=null}function Su(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Hd(n,t),n!==null){n.flags&=32767,J=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,J=null;return}}else if(n=Wd(n,t,ke),n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);X===0&&(X=5)}function Et(e,t,n){var r=q,i=Pe.transition;try{Pe.transition=null,q=1,tp(e,t,n,r)}finally{Pe.transition=i,q=r}return null}function tp(e,t,n,r){do an();while(ct!==null);if(A&6)throw Error(x(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Lh(e,o),e===te&&(J=te=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Er||(Er=!0,Eu(Vr,function(){return an(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Pe.transition,Pe.transition=null;var a=q;q=1;var s=A;A|=4,Ma.current=null,Jd(e,n),vu(n,e),wd(Eo),$r=!!Io,Eo=Io=null,e.current=n,Gd(n),Eh(),A=s,q=a,Pe.transition=o}else e.current=n;if(Er&&(Er=!1,ct=e,si=i),o=e.pendingLanes,o===0&&(gt=null),Ph(n.stateNode),xe(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ai)throw ai=!1,e=Wo,Wo=null,e;return si&1&&e.tag!==0&&an(),o=e.pendingLanes,o&1?e===Ho?Fn++:(Fn=0,Ho=e):Fn=0,bt(),null}function an(){if(ct!==null){var e=rc(si),t=Pe.transition,n=q;try{if(Pe.transition=null,q=16>e?16:e,ct===null)var r=!1;else{if(e=ct,ct=null,si=0,A&6)throw Error(x(331));var i=A;for(A|=4,I=e.current;I!==null;){var o=I,a=o.child;if(I.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var h=s[l];for(I=h;I!==null;){var v=I;switch(v.tag){case 0:case 11:case 15:qn(8,v,o)}var m=v.child;if(m!==null)m.return=v,I=m;else for(;I!==null;){v=I;var f=v.sibling,y=v.return;if(mu(v),v===h){I=null;break}if(f!==null){f.return=y,I=f;break}I=y}}}var b=o.alternate;if(b!==null){var k=b.child;if(k!==null){b.child=null;do{var P=k.sibling;k.sibling=null,k=P}while(k!==null)}}I=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,I=a;else e:for(;I!==null;){if(o=I,o.flags&2048)switch(o.tag){case 0:case 11:case 15:qn(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,I=d;break e}I=o.return}}var c=e.current;for(I=c;I!==null;){a=I;var p=a.child;if(a.subtreeFlags&2064&&p!==null)p.return=a,I=p;else e:for(a=c;I!==null;){if(s=I,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:ki(9,s)}}catch(w){W(s,s.return,w)}if(s===a){I=null;break e}var g=s.sibling;if(g!==null){g.return=s.return,I=g;break e}I=s.return}}if(A=i,bt(),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(di,e)}catch{}r=!0}return r}finally{q=n,Pe.transition=t}}return!1}function Zs(e,t,n){t=dn(n,t),t=ru(e,t,1),e=mt(e,t,1),t=he(),e!==null&&(or(e,1,t),xe(e,t))}function W(e,t,n){if(e.tag===3)Zs(e,e,n);else for(;t!==null;){if(t.tag===3){Zs(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gt===null||!gt.has(r))){e=dn(n,e),e=iu(t,e,1),t=mt(t,e,1),e=he(),t!==null&&(or(t,1,e),xe(t,e));break}}t=t.return}}function np(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=he(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(re&n)===n&&(X===4||X===3&&(re&130023424)===re&&500>Q()-Da?Nt(e,0):qa|=n),xe(e,t)}function Cu(e,t){t===0&&(e.mode&1?(t=fr,fr<<=1,!(fr&130023424)&&(fr=4194304)):t=1);var n=he();e=Ze(e,t),e!==null&&(or(e,t,n),xe(e,n))}function rp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Cu(e,n)}function ip(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(t),Cu(e,n)}var Iu;Iu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ve.current)fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return fe=!1,$d(e,t,n);fe=!!(e.flags&131072)}else fe=!1,B&&t.flags&1048576&&Pc(t,Yr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ar(e,t),e=t.pendingProps;var i=ln(t,ce.current);on(t,n),i=Oa(null,t,r,e,i,n);var o=za();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ye(r)?(o=!0,Gr(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ra(t),i.updater=xi,t.stateNode=i,i._reactInternals=t,Lo(t,r,e,n),t=qo(null,t,r,!0,o,n)):(t.tag=0,B&&o&&ka(t),ue(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ar(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=ap(r),e=ze(r,e),i){case 0:t=Mo(null,t,r,e,n);break e;case 1:t=Vs(null,t,r,e,n);break e;case 11:t=Us(null,t,r,e,n);break e;case 14:t=Bs(null,t,r,ze(r.type,e),n);break e}throw Error(x(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ze(r,i),Mo(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ze(r,i),Vs(e,t,r,i,n);case 3:e:{if(lu(t),e===null)throw Error(x(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Lc(e,t),ti(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=dn(Error(x(423)),t),t=Ks(e,t,r,n,i);break e}else if(r!==i){i=dn(Error(x(424)),t),t=Ks(e,t,r,n,i);break e}else for(we=pt(t.stateNode.containerInfo.firstChild),be=t,B=!0,Le=null,n=zc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(cn(),r===i){t=et(e,t,n);break e}ue(e,t,r,n)}t=t.child}return t;case 5:return Ac(t),e===null&&Oo(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Ro(r,i)?a=null:o!==null&&Ro(r,o)&&(t.flags|=32),su(e,t),ue(e,t,a,n),t.child;case 6:return e===null&&Oo(t),null;case 13:return cu(e,t,n);case 4:return Ta(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=un(t,null,r,n):ue(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ze(r,i),Us(e,t,r,i,n);case 7:return ue(e,t,t.pendingProps,n),t.child;case 8:return ue(e,t,t.pendingProps.children,n),t.child;case 12:return ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,D(Zr,r._currentValue),r._currentValue=a,o!==null)if(qe(o.value,a)){if(o.children===i.children&&!ve.current){t=et(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Ge(-1,n&-n),l.tag=2;var h=o.updateQueue;if(h!==null){h=h.shared;var v=h.pending;v===null?l.next=l:(l.next=v.next,v.next=l),h.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),zo(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(x(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),zo(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}ue(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,on(t,n),i=_e(i),r=r(i),t.flags|=1,ue(e,t,r,n),t.child;case 14:return r=t.type,i=ze(r,t.pendingProps),i=ze(r.type,i),Bs(e,t,r,i,n);case 15:return ou(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ze(r,i),Ar(e,t),t.tag=1,ye(r)?(e=!0,Gr(t)):e=!1,on(t,n),nu(t,r,i),Lo(t,r,i,n),qo(null,t,r,!0,e,n);case 19:return uu(e,t,n);case 22:return au(e,t,n)}throw Error(x(156,t.tag))};function Eu(e,t){return Zl(e,t)}function op(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(e,t,n,r){return new op(e,t,n,r)}function Va(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ap(e){if(typeof e=="function")return Va(e)?1:0;if(e!=null){if(e=e.$$typeof,e===la)return 11;if(e===ca)return 14}return 2}function vt(e,t){var n=e.alternate;return n===null?(n=Te(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Dr(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Va(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Vt:return Ot(n.children,i,o,t);case sa:a=8,i|=8;break;case io:return e=Te(12,n,t,i|2),e.elementType=io,e.lanes=o,e;case oo:return e=Te(13,n,t,i),e.elementType=oo,e.lanes=o,e;case ao:return e=Te(19,n,t,i),e.elementType=ao,e.lanes=o,e;case Al:return bi(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case jl:a=10;break e;case Ll:a=9;break e;case la:a=11;break e;case ca:a=14;break e;case it:a=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=Te(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Ot(e,t,n,r){return e=Te(7,e,r,t),e.lanes=n,e}function bi(e,t,n,r){return e=Te(22,e,r,t),e.elementType=Al,e.lanes=n,e.stateNode={isHidden:!1},e}function Zi(e,t,n){return e=Te(6,e,null,t),e.lanes=n,e}function eo(e,t,n){return t=Te(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function sp(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ji(0),this.expirationTimes=ji(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ji(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ka(e,t,n,r,i,o,a,s,l){return e=new sp(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Te(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ra(o),e}function lp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ru(e){if(!e)return xt;e=e._reactInternals;e:{if(Dt(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var n=e.type;if(ye(n))return Rc(e,n,t)}return t}function Tu(e,t,n,r,i,o,a,s,l){return e=Ka(n,r,!0,e,i,o,a,s,l),e.context=Ru(null),n=e.current,r=he(),i=ft(n),o=Ge(r,i),o.callback=t??null,mt(n,o,i),e.current.lanes=i,or(e,i,r),xe(e,r),e}function Si(e,t,n,r){var i=t.current,o=he(),a=ft(i);return n=Ru(n),t.context===null?t.context=n:t.pendingContext=n,t=Ge(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=mt(i,t,a),e!==null&&(Me(e,i,a,o),zr(e,i,a)),a}function ci(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function el(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function $a(e,t){el(e,t),(e=e.alternate)&&el(e,t)}function cp(){return null}var Pu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Wa(e){this._internalRoot=e}Ci.prototype.render=Wa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));Si(e,t,null,null)};Ci.prototype.unmount=Wa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Mt(function(){Si(null,e,null,null)}),t[Ye]=null}};function Ci(e){this._internalRoot=e}Ci.prototype.unstable_scheduleHydration=function(e){if(e){var t=ac();e={blockedOn:null,target:e,priority:t};for(var n=0;n<at.length&&t!==0&&t<at[n].priority;n++);at.splice(n,0,e),n===0&&lc(e)}};function Ha(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ii(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function tl(){}function up(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var h=ci(a);o.call(h)}}var a=Tu(t,r,e,0,null,!1,!1,"",tl);return e._reactRootContainer=a,e[Ye]=a.current,Jn(e.nodeType===8?e.parentNode:e),Mt(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var h=ci(l);s.call(h)}}var l=Ka(e,0,!1,null,null,!1,!1,"",tl);return e._reactRootContainer=l,e[Ye]=l.current,Jn(e.nodeType===8?e.parentNode:e),Mt(function(){Si(t,l,n,r)}),l}function Ei(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=ci(a);s.call(l)}}Si(t,a,e,i)}else a=up(n,t,e,i,r);return ci(a)}ic=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Tn(t.pendingLanes);n!==0&&(da(t,n|1),xe(t,Q()),!(A&6)&&(pn=Q()+500,bt()))}break;case 13:Mt(function(){var r=Ze(e,1);if(r!==null){var i=he();Me(r,e,1,i)}}),$a(e,1)}};pa=function(e){if(e.tag===13){var t=Ze(e,134217728);if(t!==null){var n=he();Me(t,e,134217728,n)}$a(e,134217728)}};oc=function(e){if(e.tag===13){var t=ft(e),n=Ze(e,t);if(n!==null){var r=he();Me(n,e,t,r)}$a(e,t)}};ac=function(){return q};sc=function(e,t){var n=q;try{return q=e,t()}finally{q=n}};vo=function(e,t,n){switch(t){case"input":if(co(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=fi(r);if(!i)throw Error(x(90));ql(r),co(r,i)}}}break;case"textarea":Fl(e,n);break;case"select":t=n.value,t!=null&&en(e,!!n.multiple,t,!1)}};Hl=Fa;Ql=Mt;var hp={usingClientEntryPoint:!1,Events:[sr,Ht,fi,$l,Wl,Fa]},Cn={findFiberByHostInstance:Rt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dp={bundleType:Cn.bundleType,version:Cn.version,rendererPackageName:Cn.rendererPackageName,rendererConfig:Cn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Xl(e),e===null?null:e.stateNode},findFiberByHostInstance:Cn.findFiberByHostInstance||cp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rr.isDisabled&&Rr.supportsFiber)try{di=Rr.inject(dp),Ke=Rr}catch{}}Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hp;Ce.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ha(t))throw Error(x(200));return lp(e,t,null,n)};Ce.createRoot=function(e,t){if(!Ha(e))throw Error(x(299));var n=!1,r="",i=Pu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ka(e,1,!1,null,null,n,!1,r,i),e[Ye]=t.current,Jn(e.nodeType===8?e.parentNode:e),new Wa(t)};Ce.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=Xl(t),e=e===null?null:e.stateNode,e};Ce.flushSync=function(e){return Mt(e)};Ce.hydrate=function(e,t,n){if(!Ii(t))throw Error(x(200));return Ei(null,e,t,!0,n)};Ce.hydrateRoot=function(e,t,n){if(!Ha(e))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Pu;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Tu(t,null,e,1,n??null,i,!1,o,a),e[Ye]=t.current,Jn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ci(t)};Ce.render=function(e,t,n){if(!Ii(t))throw Error(x(200));return Ei(null,e,t,!1,n)};Ce.unmountComponentAtNode=function(e){if(!Ii(e))throw Error(x(40));return e._reactRootContainer?(Mt(function(){Ei(null,null,e,!1,function(){e._reactRootContainer=null,e[Ye]=null})}),!0):!1};Ce.unstable_batchedUpdates=Fa;Ce.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ii(n))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return Ei(e,t,n,!1,r)};Ce.version="18.3.1-next-f1338f8080-20240426";function _u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_u)}catch(e){console.error(e)}}_u(),_l.exports=Ce;var pp=_l.exports,nl=pp;no.createRoot=nl.createRoot,no.hydrateRoot=nl.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ui(){return ui=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ui.apply(null,arguments)}var _t;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(_t||(_t={}));const rl="popstate";function mp(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:s}=r.location;return Go("",{pathname:o,search:a,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ou(i)}return fp(t,n,null,e)}function Nu(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function gp(){return Math.random().toString(36).substr(2,8)}function il(e,t){return{usr:e.state,key:e.key,idx:t}}function Go(e,t,n,r){return n===void 0&&(n=null),ui({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?zu(t):t,{state:n,key:t&&t.key||r||gp()})}function Ou(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function zu(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function fp(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,s=_t.Pop,l=null,h=v();h==null&&(h=0,a.replaceState(ui({},a.state,{idx:h}),""));function v(){return(a.state||{idx:null}).idx}function m(){s=_t.Pop;let P=v(),d=P==null?null:P-h;h=P,l&&l({action:s,location:k.location,delta:d})}function f(P,d){s=_t.Push;let c=Go(k.location,P,d);h=v()+1;let p=il(c,h),g=k.createHref(c);try{a.pushState(p,"",g)}catch(w){if(w instanceof DOMException&&w.name==="DataCloneError")throw w;i.location.assign(g)}o&&l&&l({action:s,location:k.location,delta:1})}function y(P,d){s=_t.Replace;let c=Go(k.location,P,d);h=v();let p=il(c,h),g=k.createHref(c);a.replaceState(p,"",g),o&&l&&l({action:s,location:k.location,delta:0})}function b(P){let d=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof P=="string"?P:Ou(P);return c=c.replace(/ $/,"%20"),Nu(d,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,d)}let k={get action(){return s},get location(){return e(i,a)},listen(P){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(rl,m),l=P,()=>{i.removeEventListener(rl,m),l=null}},createHref(P){return t(i,P)},createURL:b,encodeLocation(P){let d=b(P);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:f,replace:y,go(P){return a.go(P)}};return k}var ol;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ol||(ol={}));function vp(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const ju=["post","put","patch","delete"];new Set(ju);const yp=["get",...ju];new Set(yp);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xo(){return Xo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xo.apply(null,arguments)}const xp=z.createContext(null),Lu=z.createContext(null);function kp(){return z.useContext(Lu)!=null}function wp(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function bp(e){let{basename:t="/",children:n=null,location:r,navigationType:i=_t.Pop,navigator:o,static:a=!1,future:s}=e;kp()&&Nu(!1);let l=t.replace(/^\/*/,"/"),h=z.useMemo(()=>({basename:l,navigator:o,static:a,future:Xo({v7_relativeSplatPath:!1},s)}),[l,s,o,a]);typeof r=="string"&&(r=zu(r));let{pathname:v="/",search:m="",hash:f="",state:y=null,key:b="default"}=r,k=z.useMemo(()=>{let P=vp(v,l);return P==null?null:{location:{pathname:P,search:m,hash:f,state:y,key:b},navigationType:i}},[l,v,m,f,y,b,i]);return k==null?null:z.createElement(xp.Provider,{value:h},z.createElement(Lu.Provider,{children:n,value:k}))}new Promise(()=>{});/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Sp="6";try{window.__reactRouterVersion=Sp}catch{}const Cp="startTransition",al=nh[Cp];function Ip(e){let{basename:t,children:n,future:r,window:i}=e,o=z.useRef();o.current==null&&(o.current=mp({window:i,v5Compat:!0}));let a=o.current,[s,l]=z.useState({action:a.action,location:a.location}),{v7_startTransition:h}=r||{},v=z.useCallback(m=>{h&&al?al(()=>l(m)):l(m)},[l,h]);return z.useLayoutEffect(()=>a.listen(v),[a,v]),z.useEffect(()=>wp(r),[r]),z.createElement(bp,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a,future:r})}var sl;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(sl||(sl={}));var ll;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ll||(ll={}));const Ep=[{id:"react-fiber-lanes-scheduling",title:"Fiber, Lanes & Scheduling",group:"React",summary:"Hiểu React biểu diễn work bằng Fiber, gán priority bằng lanes và vì sao render có thể bị ngắt nhưng commit thì không.",plainTheory:["Mỗi component đang mounted có một Fiber chứa type, props, state, child/sibling và liên kết với Fiber của lần render trước. Fiber là đơn vị công việc giúp React duyệt cây theo từng phần thay vì phải xử lý toàn bộ trong một lần.","Khi có update, React gán update đó vào một lane thể hiện mức ưu tiên. Thao tác trực tiếp như nhập liệu cần được xử lý trước transition; nhiều update tương thích có thể được batch vào cùng một lượt render.","Render phase tạo cây work-in-progress và có thể bị tạm dừng, làm lại hoặc bỏ. Vì thế component và updater phải pure. Commit phase áp thay đổi lên DOM/native host, chạy layout effects và không được để lộ một cây UI cập nhật dở dang.","Priority không làm thuật toán nặng nhanh hơn. Nó chỉ cho React quyền ưu tiên phản hồi gấp. Nếu một component tự chạy vòng lặp 100 ms trong JavaScript thì scheduler vẫn không thể chen vào giữa function đó.","Khi debug, cần phân biệt “update được schedule chậm” với “render calculation chậm” và “commit native chậm”. Ba lỗi này có cùng triệu chứng lag nhưng cách sửa hoàn toàn khác nhau."],theory:["Fiber là cấu trúc persistent kép current/work-in-progress. beginWork quyết định cập nhật hoặc bailout; completeWork tổng hợp host work và effect flags trước commit.","Lanes cho phép nhiều update priority khác nhau cùng tồn tại. Entanglement giữ các update liên quan không commit thành trạng thái nghiệp vụ nửa vời.","Render có thể interrupt/restart; commit là atomic đối với tree được chọn và gồm mutation, layout cùng passive-effect scheduling.","Scheduler chỉ yield giữa các đơn vị work mà React kiểm soát; synchronous user code dài vẫn block event loop."],useCases:["Debug concurrent rendering","Input bị lag","Transition","Profiler trace"],questions:["Vì sao concurrent rendering không đồng nghĩa React chạy render trên nhiều CPU?","Một transition bị pending lâu có thể do những bottleneck nào?","Tại sao side effect trong render nguy hiểm hơn khi React có thể restart work?"],answers:["React vẫn thực thi JavaScript component trên JS thread. Concurrent rendering là khả năng chia, ưu tiên, tạm dừng và bỏ render work trước commit; nó không tự biến function JavaScript thành parallel work.","Có thể do calculation đồng bộ dài không yield, subtree quá lớn, external store update liên tục, Suspense chờ data hoặc commit/native layout đắt. Cần đo render duration, commit duration, JS task và network thay vì quy hết cho scheduler.","Một render chưa commit có thể chạy nhiều lần hoặc bị bỏ. Gọi API, mutate singleton hay ghi storage trong đó sẽ tạo side effect dù UI tương ứng chưa bao giờ commit, dẫn đến duplicate và state bên ngoài sai."],code:`function SearchScreen({ products }) {
  const [query, setQuery] = React.useState('');
  const [visibleQuery, setVisibleQuery] = React.useState('');
  const [isPending, startTransition] = React.useTransition();

  function handleChange(nextQuery) {
    setQuery(nextQuery);

    startTransition(() => {
      setVisibleQuery(nextQuery);
    });
  }

  const filteredProducts = filterProducts(products, visibleQuery);

  return <>
    <SearchInput value={query} onChangeText={handleChange} />
    {isPending ? <LoadingIndicator /> : null}
    <ProductList products={filteredProducts} />
  </>;
}`},{id:"react-bailout-referential-identity",title:"Bailout, Referential Identity & Memoization",group:"React",summary:"Tối ưu đúng chỗ bằng cách hiểu React.memo, Object.is, identity của props và chi phí thật của memoization.",plainTheory:["React.memo chỉ có cơ hội bỏ qua việc gọi lại component khi props mới được Object.is với props cũ. Object, array và function tạo mới trong render có identity mới dù nội dung giống nhau.","useMemo lưu kết quả tính toán; useCallback lưu identity của function. Chúng không ngăn component hiện tại render và không nên phủ khắp code như một thói quen.","Memo có chi phí giữ bộ nhớ, so sánh dependency/props và làm code khó đọc. Nó đáng dùng khi profiler cho thấy subtree render đắt và props có thể giữ ổn định.","Custom comparator phải so mọi prop ảnh hưởng output, gồm function vì function capture state. Bỏ sót function có thể giữ callback cũ và tạo bug khó thấy.","Thiết kế component tốt thường hiệu quả hơn memo: giữ state gần nơi dùng, nhận children thay vì truyền config lớn và tránh Effect cập nhật state không cần thiết."],theory:["Bailout giảm render work nhưng update lane trong child hoặc context change vẫn có thể buộc React đi vào subtree.","Referential stability là contract; giữ reference của object đã mutate còn nguy hiểm hơn tạo object mới vì consumer có thể bỏ qua update thật.","Comparator sâu thường có chi phí tương đương hoặc lớn hơn render và có thể đóng băng UI nếu data structure thay đổi kích thước."],useCases:["Large subtree","Stable list item","Expensive calculation","Context optimization"],questions:["Khi nào React.memo không giúp dù props nhìn có vẻ giống nhau?","Vì sao comparator chỉ so data nhưng bỏ qua callback có thể tạo stale closure?","Anh chứng minh memoization có lợi bằng cách nào?"],answers:["Khi parent luôn tạo object/function mới, component tự có state update, context nó đọc đổi, render vốn rất rẻ hoặc comparison cost gần bằng render cost. Memo không chặn update phát sinh bên trong component.","Callback là một prop mang theo lexical state của render tạo ra nó. Nếu comparator tuyên bố hai callback khác nhau là bằng nhau, child có thể tiếp tục gọi function cũ và đọc state/props cũ.","Dùng React Profiler đo actual duration, render count và interaction trước/sau trên production build cùng workload. Chỉ giữ memo khi giảm tổng thời gian/độ trễ mà không tăng memory hoặc complexity quá mức."],code:`const ProductRow = React.memo(function ProductRow({ product, onSelect }) {
  return <Pressable onPress={() => onSelect(product.id)}>
    <Text>{product.name}</Text>
  </Pressable>;
});

function ProductList({ products, navigateToProduct }) {
  const handleSelect = React.useCallback((productId) => {
    navigateToProduct(productId);
  }, [navigateToProduct]);

  return products.map(product => (
    <ProductRow key={product.id} product={product} onSelect={handleSelect} />
  ));
}`},{id:"react-closures-event-handlers",title:"Stale Closures, Events & Async State",group:"React",summary:"Kiểm soát snapshot bị capture trong timer, callback, subscription và request bất đồng bộ.",plainTheory:["Mỗi lần render tạo một scope mới. Event handler, timer hay Promise callback giữ props/state của đúng render đã tạo nó; đây là closure bình thường chứ không phải React cập nhật biến sai.","Nếu update dựa trên state trước, dùng functional updater. Nếu callback sống lâu cần đọc giá trị mới nhất mà không resubscribe, có thể đồng bộ giá trị vào ref và đọc ref trong callback.","Ref là mutable escape hatch và thay đổi ref không render UI. Không dùng ref thay toàn bộ state; dùng khi dữ liệu không trực tiếp quyết định giao diện hoặc cần bridge giữa lifecycle.","Request async phải gắn với identity của request hoặc abort signal. Chỉ kiểm tra component còn mounted chưa đủ nếu request A và B cùng thuộc một component nhưng trả kết quả ngược thứ tự.","Dependency đúng giúp subscription luôn dùng closure đúng; nếu việc resubscribe quá đắt, tách phần reactive khỏi phần event thay vì nói dối dependency array."],theory:["Closure capture binding của từng render; React state không được mutate tại chỗ sau setState.","Functional updater được React đưa pending state mới nhất trong queue và phải pure.","Latest-ref pattern giải quyết freshness nhưng có thể che data-flow lỗi; chỉ dùng ở imperative boundary có chủ đích."],useCases:["Timer","WebSocket","Native event","Request race"],questions:["Vì sao setInterval thường đọc count mãi bằng 0?","Khi nào dùng ref để đọc latest value và khi nào phải resubscribe?","Request ID giải quyết race khác AbortController thế nào?"],answers:["Effect tạo interval với dependency rỗng nên callback capture count của render đầu. Dùng functional updater nếu chỉ cần tăng; nếu cần đọc latest value cho logic khác thì resubscribe đúng dependency hoặc dùng latest ref có chủ đích.","Dùng ref khi subscription ngoài React cần ổn định nhưng handler phải đọc dữ liệu mới. Phải resubscribe khi chính dependency quyết định resource đang kết nối, ví dụ roomId đổi thì cần rời room cũ và kết nối room mới.","AbortController cố hủy công việc và tiết kiệm tài nguyên nếu transport hỗ trợ. Request ID còn bảo vệ commit kết quả: response chỉ được áp dụng nếu ID vẫn là request hiện hành, kể cả khi cancellation đến muộn hoặc không được hỗ trợ."],code:`function useLatestRequest(loadUser) {
  const requestIdRef = React.useRef(0);
  const [user, setUser] = React.useState(null);

  async function refresh(userId) {
    requestIdRef.current++;
    const requestId = requestIdRef.current;
    const nextUser = await loadUser(userId);

    if (requestId !== requestIdRef.current) {
      return;
    }

    setUser(nextUser);
  }

  return { user, refresh };
}`},{id:"react-suspense-errors-recovery",title:"Suspense, Error Boundaries & Recovery",group:"React",summary:"Thiết kế loading, error và retry boundary sao cho một vùng lỗi không kéo sập toàn bộ trải nghiệm.",plainTheory:["Suspense xử lý trạng thái một subtree chưa sẵn sàng và hiển thị fallback gần nhất. Nó không tự fetch data; data source hoặc framework phải hỗ trợ cơ chế suspend.","Error Boundary bắt lỗi khi render/lifecycle của descendants nhưng không tự bắt lỗi trong event handler, callback async hoặc chính boundary đó.","Boundary nên theo UX domain: lỗi widget gợi ý không được che checkout. Boundary quá cao làm mất cả screen; quá nhỏ tạo loading/error UI vụn và khó phối hợp.","Retry cần reset cả error state lẫn resource gây lỗi. Đổi key có thể remount boundary/subtree, nhưng phải hiểu state nào sẽ mất trước khi dùng.","Khi refresh dữ liệu cũ, transition giúp giữ nội dung đã có thay vì thay ngay bằng fallback. Loading lần đầu và refresh nền nên có trải nghiệm khác nhau."],theory:["Suspense boundary phối hợp reveal; rejected thenable/error đi tới Error Boundary phù hợp.","Boundary placement là reliability architecture, không chỉ là UI spinner.","Recovery phải idempotent, observable và tránh retry storm khi backend đang lỗi."],useCases:["Route loading","Widget isolation","Retry flow","Partial failure"],questions:["Suspense khác Error Boundary ở contract nào?","Đặt boundary cho dashboard nhiều widget thế nào?","Tại sao đổi key để retry có thể gây mất dữ liệu người dùng?"],answers:["Suspense nhận trạng thái pending từ resource tích hợp và hiển thị fallback; Error Boundary nhận exception khi render tree và hiển thị error UI. Production thường cần cả hai quanh cùng một UX domain.","Giữ shell/navigation sống, mỗi nhóm widget có cùng lifecycle và mức criticality dùng một boundary. Widget không quan trọng lỗi vẫn không che KPI chính; error telemetry phải gắn widget, request và retry count.","Key mới làm React xem subtree là identity mới và reset toàn bộ local state bên dưới. Nếu form draft nằm trong subtree thì retry có thể xóa input; cần đưa draft lên owner bền hơn hoặc reset resource riêng."],code:`function AccountPanel({ accountId }) {
  const [retryKey, setRetryKey] = React.useState(0);

  return <AccountErrorBoundary
    resetKey={retryKey}
    onRetry={() => setRetryKey(value => value + 1)}
  >
    <React.Suspense fallback={<AccountSkeleton />}>
      <AccountDetails key={retryKey} accountId={accountId} />
    </React.Suspense>
  </AccountErrorBoundary>;
}`},{id:"rn-event-pipeline-backpressure",title:"Events, Backpressure & Cross-runtime Cost",group:"React Native",summary:"Phân tích đường đi của touch/native event và ngăn event tần suất cao làm nghẽn JavaScript.",plainTheory:["Touch bắt đầu ở platform, qua hệ thống input/gesture và có thể phát event về JavaScript. Nếu mỗi pixel scroll đều kéo logic nặng hoặc state update lớn, JS queue tích tụ dù UI thread vẫn đang vẽ.","New Architecture bỏ JSON bridge kiểu cũ nhưng không làm giao tiếp native–JS miễn phí. Chuyển object lớn, gọi sync dày đặc và tạo nhiều allocation vẫn gây latency và GC.","Coalescing giữ event mới nhất khi event cũ không còn giá trị, phù hợp với move/scroll. Throttle giới hạn tần suất; backpressure định nghĩa producer phải làm gì khi consumer xử lý không kịp.","Gesture/animation cần phản hồi từng frame nên giữ phép tính cần thiết trên UI runtime/native path. JavaScript chỉ nhận semantic event như gesture kết thúc hoặc checkpoint cần nghiệp vụ.","Metric cần gồm queue delay, handler duration, event rate và dropped/coalesced count; chỉ đo thời gian function không thấy thời gian event đã chờ trong queue."],theory:["JSI là interface gọi trực tiếp giữa runtime và C++, không phải bảo đảm zero-copy hay zero-cost.","Sync native call giữ caller chờ và có thể tạo priority inversion/deadlock nếu boundary gọi ngược thiếu kỷ luật.","High-frequency producer cần batching/coalescing và payload nhỏ, không stream raw samples qua JS nếu UI runtime xử lý được."],useCases:["Scroll telemetry","Gesture","Sensor stream","Native events"],questions:["Vì sao bỏ bridge vẫn có thể lag khi gửi event native sang JS?","Scroll mượt nhưng analytics press đến chậm cho thấy điều gì?","Khi nào được dùng synchronous JSI call?"],answers:["Vẫn có scheduling, runtime transition, host-object access, conversion/allocation và JavaScript handler work. Event rate cao có thể làm queue dồn; kiến trúc mới giảm một lớp overhead chứ không xóa giới hạn CPU/thread.","UI/gesture path có thể chạy độc lập nhưng JS thread hoặc JS event queue đang nghẽn, nên semantic callback chậm. Profile long JS tasks, render storm và event queue delay thay vì chỉ nhìn UI FPS.","Chỉ cho thao tác nhỏ, xác định, không I/O, không lock dài và thật sự cần kết quả tức thì. API phải có thread-affinity contract và benchmark; phần lớn I/O hoặc work không chắc thời gian nên async."],code:`function ScrollAnalytics() {
  const latestOffsetRef = React.useRef(0);
  const scheduledRef = React.useRef(false);

  function handleScroll(event) {
    latestOffsetRef.current = event.nativeEvent.contentOffset.y;

    if (scheduledRef.current) {
      return;
    }

    scheduledRef.current = true;

    requestAnimationFrame(() => {
      analytics.recordScrollOffset(latestOffsetRef.current);
      scheduledRef.current = false;
    });
  }

  return <ScrollView onScroll={handleScroll} scrollEventThrottle={16} />;
}`},{id:"rn-fabric-layout-commit",title:"Fabric Layout, Commit & View Flattening",group:"React Native",summary:"Đi sâu vào Shadow Tree, Yoga layout, commit contention và lý do một React render rẻ vẫn có thể tạo frame chậm.",plainTheory:["React tạo element tree; renderer xây Shadow Tree để tính props/layout trước khi mount thay đổi lên native view hierarchy. Yoga giải flex layout trên shadow representation, không phải trực tiếp trên UIView/View.","React render time và native commit/mount time là hai phép đo khác nhau. Một update ít JavaScript nhưng đổi layout của subtree lớn vẫn có thể làm UI thread quá budget.","View flattening có thể bỏ native view chỉ dùng để bố cục, giảm hierarchy và mount cost. Thêm background, opacity, transform, event hoặc accessibility semantics có thể khiến view phải materialize.","Đo layout trong vòng lặp rồi set state có thể tạo feedback loop. Layout-dependent animation nên tránh ping-pong nhiều lần giữa measurement, JavaScript state và native commit.","Khi animation và React commit cùng sửa transform/layout, phải có owner rõ. Hai nguồn cập nhật cạnh tranh có thể gây flicker, lost update hoặc commit retry."],theory:["Fabric giữ immutable Shadow Tree revisions và commit một revision hợp lệ trước mounting.","Layout invalidation có thể lan lên/xuống tree tùy constraint; độ sâu native hierarchy ảnh hưởng traversal và mount.","Synchronous layout read/write loop là dấu hiệu architecture, không chỉ là chỗ cần memo."],useCases:["Layout jank","Large screen commit","Animation conflict","Native hierarchy"],questions:["Vì sao React Profiler nhanh nhưng UI vẫn drop frame?","View flattening thay đổi ra sao khi wrapper có accessibility role?","Anh điều tra commit contention giữa animation và React update thế nào?"],answers:["Profiler chủ yếu cho thấy React render/commit phía React. Chi phí Yoga, mounting, platform layout/draw, image decode hoặc UI-thread animation có thể nằm ngoài phần nổi bật; cần native trace và slow-frame correlation.","Wrapper có semantic/accessibility behavior có thể cần tồn tại như native node để platform xây accessibility tree đúng. Không nên bỏ semantics chỉ để flatten; đo rồi tối ưu cấu trúc khác.","Ghi trace theo timeline của JS update, Shadow Tree commit, mount và animation frame; xác định property có nhiều owner. Gom update, tránh layout property mỗi frame, giữ animation trên UI runtime và tách state nghiệp vụ khỏi giá trị animation liên tục."],code:`function ExpandableCard({ expanded }) {
  const progress = useSharedValue(expanded ? 1 : 0);

  React.useEffect(() => {
    progress.value = withTiming(expanded ? 1 : 0, {
      duration: 220
    });
  }, [expanded, progress]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scaleY: 0.96 + progress.value * 0.04 }],
    opacity: progress.value
  }));

  return <Animated.View style={animatedStyle}>
    <CardContent />
  </Animated.View>;
}`},{id:"rn-turbomodule-lifecycle-threading",title:"TurboModule Contracts, Lifecycle & Thread Safety",group:"React Native",summary:"Thiết kế native boundary có schema, ownership, cancellation và thread-affinity rõ thay vì chỉ “gọi được native”.",plainTheory:["Codegen tạo contract giữa JavaScript và native từ spec. Contract cần biểu diễn nullability, error và lifecycle rõ; type compile-time không thay validation cho dữ liệu đến từ OS hoặc SDK bên thứ ba.","TurboModule có thể được tạo lazy. Không giả định module tồn tại từ startup hoặc singleton sẽ sống mãi; listener, observer và resource phải được mở/đóng theo lifecycle.","Mỗi API cần nói rõ chạy trên thread nào, callback trả về thread nào và có được gọi đồng thời không. Native mutable state thiếu synchronization sẽ tạo race mà JavaScript test khó tái hiện.","Promise rejection cần error code ổn định để JavaScript quyết định retry, permission flow hay báo lỗi. Chỉ trả một message tự do khiến client phải parse text và contract dễ vỡ.","Operation dài cần cancellation và ownership khi screen unmount hoặc app background. Nếu không, camera/location/network work tiếp tục giữ resource và callback vào consumer đã biến mất."],theory:["Spec/codegen bảo vệ ABI shape nhưng semantic contract vẫn cần versioning và tests hai phía.","HostObject getter có thể chạy thường xuyên; không đặt I/O hoặc lock không giới hạn trong property access.","Listener API cần reference count hoặc subscription token để nhiều JS consumers không vô tình dừng resource của nhau."],useCases:["Native SDK","Camera/location","Codegen API","Shared resource"],questions:["Một TurboModule production-ready cần contract gì ngoài method signature?","Tại sao singleton native module vẫn có lifecycle bug?","Thiết kế cancellation xuyên JS–native như thế nào?"],answers:["Cần nullability, error taxonomy, thread affinity, ordering, concurrency, ownership, cancellation, permission, resource limits, version compatibility, observability và test contract trên cả iOS/Android.","Singleton không tự quản lý listener, Activity/ViewController reference, app background hoặc nhiều JS consumer. Nó có thể leak context, giữ resource quá lâu hoặc remove observer khi một consumer đóng dù consumer khác còn dùng.","Trả operationId hoặc subscription object; cancel phải idempotent và propagate tới SDK/native task. Native chặn callback sau cancel, giải phóng resource, còn JS cleanup luôn gọi cancel và bỏ qua completion đến muộn như lớp bảo vệ cuối."],code:`type NativeOperation = {
  operationId: string;
};

async function loadSecureDocument(documentId) {
  const operation = await SecureDocuments.startLoad(documentId);
  let cancelled = false;

  const promise = SecureDocuments.result(operation.operationId).then(result => {
    if (cancelled) {
      throw new Error('Operation was cancelled');
    }

    return result;
  });

  return {
    promise,
    cancel() {
      cancelled = true;
      SecureDocuments.cancel(operation.operationId);
    }
  };
}`},{id:"rn-startup-bundle-hermes",title:"Startup, Bundles & Hermes",group:"Performance",summary:"Tách native launch, JS runtime, bundle evaluation và first meaningful paint để tối ưu startup bằng dữ liệu.",plainTheory:["Startup không phải một con số duy nhất. Cold start gồm process launch, native initialization, JavaScript runtime/bundle load, React render, native mount và thời điểm nội dung có ích đầu tiên xuất hiện.","Warm start và resume dùng đường khác cold start, vì process/runtime có thể còn sống. Trộn chúng vào average làm mất regression chỉ xảy ra khi mở app lần đầu.","Hermes dùng bytecode để giảm parse/compile lúc chạy, nhưng module top-level vẫn có thể thực thi nặng. Import một module không có nghĩa chỉ trả chi phí khi gọi function nếu module làm work ngay lúc evaluate.","Lazy loading chỉ có ích khi hoãn được code và work khỏi critical path. Tách bundle nhưng ngay lập tức preload mọi chunk vẫn không cải thiện first meaningful paint.","Startup dashboard phải chia theo app version, OS, device tier và cold/warm. p95/p99 phản ánh nhóm người dùng chậm mà median không nhìn thấy."],theory:["TTI cần định nghĩa theo interaction thật; splash biến mất chưa chắc screen đã usable.","Top-level side effect làm module evaluation khó hoãn và khó đo.","Startup optimization phải có performance mark xuyên native và JS với cùng clock/timeline khi có thể."],useCases:["Cold start","Bundle split","Hermes profiling","Low-end Android"],questions:["Anh chia startup timeline thành những mốc nào?","Bundle nhỏ hơn nhưng startup không nhanh hơn vì sao?","Lazy screen có thể làm UX xấu hơn trong trường hợp nào?"],answers:["Process/native start, root view creation, runtime ready, bundle load/evaluate, first React render, first native commit, first contentful/meaningful paint và interaction ready. Gắn trace ID để nối native spans với JS marks.","Bottleneck có thể là native SDK init, synchronous storage, module top-level work, React render, image/font load hoặc native layout. Kích thước transfer chỉ là một phần; phải profile CPU/evaluation và critical path.","Nếu user đi ngay tới screen nhưng chunk/resource chưa preload, họ nhận loading trễ sau thao tác. Cần preload theo xác suất/idle/network, giữ fallback ổn định và không lazy phần luôn cần cho first journey."],code:`function AppRoot() {
  React.useEffect(() => {
    performance.mark('react-root-committed');

    requestAnimationFrame(() => {
      performance.mark('first-frame-after-root');
      performance.measure(
        'root-commit-to-frame',
        'react-root-committed',
        'first-frame-after-root'
      );
    });
  }, []);

  return <RootNavigator />;
}`},{id:"rn-memory-leaks-gc",title:"Memory, Retention Paths & GC Pauses",group:"Performance",summary:"Tìm retention path xuyên JavaScript/native, phân biệt leak với peak memory và xử lý GC churn.",plainTheory:["Leak là object không còn cần nhưng vẫn reachable từ một root như global, listener, timer, cache hoặc native reference. Memory cao tạm thời khi mở ảnh lớn chưa chắc là leak nếu nó giảm sau khi đóng và GC.","Closure có thể giữ cả object graph dù callback chỉ dùng một field. Listener quên unsubscribe thường giữ screen, props, image metadata và store subscription lâu hơn dự kiến.","Native image/bitmap memory không phải lúc nào hiện đầy đủ trong JavaScript heap snapshot. Phải xem cả JS heap, native heap, graphics và process RSS.","Allocation churn tạo nhiều object ngắn hạn khiến GC chạy thường xuyên và gây frame spike dù heap cuối cùng không tăng. Ví dụ map/filter/config object mới trong handler chạy mỗi frame.","Cache phải có size/TTL/eviction và phản ứng với memory pressure. Map không giới hạn trong singleton là leak theo chính sách dù mọi entry vẫn technically reachable."],theory:["Dominator tree và retaining path trả lời ai đang giữ object, không chỉ object nào lớn.","Cross-runtime reference cycle cần lifecycle explicit vì GC ở hai runtime không nhất thiết hiểu toàn bộ ownership graph.","So heap snapshot ở cùng checkpoint sau GC; snapshot khác phase dễ tạo kết luận sai."],useCases:["Long session","Image-heavy feed","Navigation leak","OOM"],questions:["Phân biệt leak với legitimate cache thế nào?","JS heap ổn nhưng app vẫn OOM cần kiểm tra gì?","Vì sao unsubscribe trong cleanup vẫn có thể chưa đủ?"],answers:["Cache có owner, budget, eviction và hit-rate value; sau memory pressure hoặc hết TTL nó giảm. Leak tăng qua mỗi chu kỳ mở/đóng cùng flow và có retaining path không còn giá trị nghiệp vụ.","Kiểm tra native heap, bitmap/graphics, mapped bundle, WebView/video, thread stack và OS memory report. Correlate theo screen/action; JS snapshot không nhìn thấy toàn bộ allocation do platform/SDK giữ.","Callback đã được copy vào native pending work hoặc emitter khác, cleanup dùng sai function identity, subscription được tạo nhiều lần hoặc request completion vẫn capture screen. Cần cancellation idempotent và contract ownership xuyên boundary."],code:`function useBoundedImageCache(maxEntries) {
  const cacheRef = React.useRef(new Map());

  const put = React.useCallback((key, image) => {
    const cache = cacheRef.current;

    if (cache.has(key)) {
      cache.delete(key);
    }

    cache.set(key, image);

    while (cache.size > maxEntries) {
      const oldestKey = cache.keys().next().value;
      cache.delete(oldestKey);
    }
  }, [maxEntries]);

  React.useEffect(() => {
    return () => cacheRef.current.clear();
  }, []);

  return { cache: cacheRef.current, put };
}`},{id:"rn-security-mobile-boundaries",title:"Mobile Security & Trust Boundaries",group:"Architecture",summary:"Thiết kế auth, deep link, storage và native boundary dựa trên threat model thay vì tin dữ liệu từ device.",plainTheory:["Mọi dữ liệu trên client đều có thể bị sửa: AsyncStorage, deep-link params, persisted Redux state và response bị proxy. Server phải thực thi authorization; ẩn nút trên UI không phải security control.","Token nhạy cảm cần storage phù hợp với platform và threat model. Secure storage giảm rủi ro đọc trực tiếp nhưng không biến device compromised thành môi trường đáng tin.","Deep link là input bên ngoài. Phải allowlist route/action, validate type/range và không cho URL tự quyết định chuyển tiền, đổi email hoặc bypass bước xác nhận.","Log, analytics, crash breadcrumb và screenshot có thể làm lộ token/PII. Redaction phải ở boundary chung thay vì hy vọng từng developer nhớ xóa field.","Native module mở thêm attack surface: validate input ở native, giới hạn capability và không expose generic file/shell/network primitive nếu JavaScript chỉ cần một nghiệp vụ hẹp."],theory:["Threat model xác định asset, actor, entry point và impact trước khi chọn control.","Authentication chứng minh identity; authorization kiểm tra quyền trên từng resource/action.","Certificate pinning có operational trade-off và không thay server auth, input validation hay secure storage."],useCases:["Authentication","Deep links","Sensitive storage","Native SDK"],questions:["Tại sao JWT trong secure storage vẫn không đủ bảo vệ tài khoản?","Deep link thanh toán phải có những lớp kiểm tra nào?","Anh review một native module mới theo least privilege thế nào?"],answers:["Token có thể bị lạm dụng khi session policy yếu, device compromised, log lộ, backend thiếu authorization hoặc refresh/revocation sai. Cần short-lived access token, rotation/revocation, server-side permission và anomaly controls theo rủi ro.","Parse bằng allowlist, validate schema và resource ID, yêu cầu authenticated session, server authorization, hiển thị confirmation từ server truth và idempotency. URL chỉ mở flow, không phải bằng chứng cho phép giao dịch.","Liệt kê đúng capability feature cần, expose API nghiệp vụ nhỏ, validate mọi input/output, quy định permission/thread/lifecycle, không trả secret thừa, audit dependency và thêm abuse/failure tests cùng telemetry không chứa PII."],code:`const allowedRoutes = new Set(['product', 'order']);

function handleDeepLink(url) {
  const parsed = new URL(url);
  const route = parsed.hostname;
  const resourceId = parsed.searchParams.get('id');

  if (!allowedRoutes.has(route)) {
    return { accepted: false, reason: 'unsupported-route' };
  }

  if (!resourceId || !/^[a-zA-Z0-9-]{1,64}$/.test(resourceId)) {
    return { accepted: false, reason: 'invalid-id' };
  }

  return {
    accepted: true,
    destination: { route, resourceId }
  };
}`},{id:"react-usestate-interview",title:"useState: Interview Deep Dive",group:"React",summary:"Nắm state snapshot, lazy initialization, batching, functional updater và cách React quyết định có render lại hay không.",plainTheory:["useState trả về state của lần render hiện tại và một hàm yêu cầu React render lại. Gọi setter không sửa ngay biến đang cầm trong event handler; biến đó vẫn là snapshot cũ cho đến lần render tiếp theo.","Khi state mới được tính từ state trước, dùng functional updater như setCount(value => value + 1). React đưa lần lượt pending state mới nhất qua hàng đợi updater, nên nhiều update trong cùng event không ghi đè nhau.","Nếu giá trị ban đầu tốn công tính, truyền function vào useState: useState(createInitialState). React chỉ dùng function đó trong lần khởi tạo thay vì gọi lại mỗi render.","React dùng Object.is để so state mới với state hiện tại. Mutate object rồi truyền lại chính reference cũ có thể khiến React bỏ qua update; phải tạo object hoặc array mới cho phần đã thay đổi.","State được gắn với identity của component tại một vị trí trong tree. Đổi key hoặc type sẽ tạo identity mới và reset state; đây có thể là chủ đích khi reset form.","Không lưu derived state nếu có thể tính trực tiếp từ props và state. Lưu cả firstName, lastName và fullName tạo nhiều nguồn sự thật và buộc phải đồng bộ bằng Effect."],theory:["Setter enqueue update vào Fiber update queue; automatic batching có thể gom nhiều update trước một render.","Updater function phải pure vì React có thể gọi lại trong development để phát hiện impurity.","State object không được merge tự động như class setState; setter thay toàn bộ giá trị của hook đó."],useCases:["Local UI state","Form input","Toggle/modal","State interview questions"],questions:["Gọi setCount(count + 1) ba lần khác gì gọi setCount(value => value + 1) ba lần?","useState(expensiveFunction()) khác useState(expensiveFunction) thế nào?","Tại sao sửa user.name rồi gọi setUser(user) có thể không render lại?","Khi nào state bị reset dù component nhìn vẫn nằm cùng một chỗ?","Có nên lưu filteredItems bằng useState rồi cập nhật trong useEffect không?"],answers:["Ba lệnh setCount(count + 1) cùng đọc một snapshot count nên đều yêu cầu cùng một giá trị. Ba functional updater được chạy tuần tự trên pending state, vì vậy kết quả tăng đủ ba.","Cách có dấu ngoặc gọi expensiveFunction ở mọi render rồi chỉ bỏ kết quả sau lần đầu. Truyền function reference là lazy initializer, React chỉ dùng nó khi khởi tạo state của component identity đó.","Object bị mutate nhưng reference không đổi. React so bằng Object.is và có thể bailout. Hãy tạo object mới: setUser(current => ({ ...current, name: nextName })).","State gắn với type, vị trí và key. Đổi type, thay key, chuyển component sang vị trí khác hoặc unmount rồi mount lại đều tạo identity mới và reset state.","Thường không. filteredItems là dữ liệu dẫn xuất nên tính trong render; chỉ dùng useMemo nếu phép lọc thật sự đắt. State cộng Effect tạo thêm render và nguy cơ dữ liệu lệch."],code:`function QuantityPicker({ initialQuantity = 1 }) {
  const [quantity, setQuantity] = React.useState(() => {
    return Math.max(1, initialQuantity);
  });

  function increaseThreeTimes() {
    setQuantity(value => value + 1);
    setQuantity(value => value + 1);
    setQuantity(value => value + 1);
  }

  function decrease() {
    setQuantity(value => Math.max(1, value - 1));
  }

  return <View>
    <Text>{quantity}</Text>
    <Button title="Giảm" onPress={decrease} />
    <Button title="Tăng 3" onPress={increaseThreeTimes} />
  </View>;
}`},{id:"react-useref-interview",title:"useRef: Values, DOM/Native Handles & Previous State",group:"React",summary:"Phân biệt ref với state, hiểu lifecycle của ref và dùng ref đúng tại imperative boundary.",plainTheory:["useRef trả cùng một object qua các lần render. Anh có thể thay đổi ref.current nhưng React không render lại vì ref không thuộc render output contract như state.","Dùng ref cho dữ liệu cần sống qua render nhưng không trực tiếp quyết định UI: timer ID, request ID, previous value, cache nhỏ hoặc cờ chống callback đến trễ.","Ref còn giữ handle đến DOM/native component để focus, scroll, measure hoặc gọi imperative API. Chỉ gọi khi node đã commit, thường trong event handler hoặc Effect.","Không đọc hoặc ghi ref.current trong render để quyết định JSX, ngoại trừ khởi tạo ổn định có điều kiện chặt. Concurrent rendering có thể làm thao tác mutable trong render tạo kết quả không nhất quán.","forwardRef chuyển ref qua component wrapper; useImperativeHandle giới hạn API mà parent được gọi. API nhỏ như focus() tốt hơn expose toàn bộ child internals.","useRef không thay useState. Nếu thay đổi phải hiện ra màn hình thì dùng state; nếu chỉ cần ghi nhớ giá trị cho logic imperative thì ref phù hợp hơn."],theory:["Ref object giữ identity ổn định và mutation không schedule update.","React gán host instance vào ref trong commit và đặt lại null khi unmount.","Imperative handle cần dependency đúng để không expose method capture props/state cũ."],useCases:["Focus input","Timer ID","Latest request","Previous value"],questions:["useRef và useState khác nhau quan trọng nhất ở điểm nào?","Thay ref.current có làm component render lại không?","Tại sao không nên dùng let timerId ở thân component?","Khi nào dùng forwardRef và useImperativeHandle?","Có nên dùng ref để tránh dependency của useEffect không?"],answers:["Cả hai giữ dữ liệu qua render, nhưng setState schedule render và mỗi render nhận snapshot; ref là object mutable ổn định, thay current không render lại. Dữ liệu ảnh hưởng UI phải là state.","Không. React không theo dõi mutation của current. UI chỉ vô tình thấy giá trị mới khi một nguyên nhân khác làm component render lại, nên dùng ref cho dữ liệu hiển thị là bug design.","Mỗi render chạy lại component và tạo biến local mới, nên timerId cũ bị mất khỏi scope mới. Ref giữ ID ổn định để callback hoặc cleanup của các render sau vẫn clear đúng timer.","Dùng khi wrapper cần cho parent truy cập một imperative capability như focus hoặc scroll. useImperativeHandle nên expose API tối thiểu, tránh cho parent phụ thuộc cấu trúc DOM/native bên trong.","Không dùng ref để che dependency reactive. Ref chỉ hợp lý khi callback cần latest value nhưng resource subscription không nên khởi động lại; nếu dependency xác định resource như roomId thì Effect phải phụ thuộc nó."],code:`const SearchInput = React.forwardRef(function SearchInput(props, ref) {
  const inputRef = React.useRef(null);

  React.useImperativeHandle(ref, () => ({
    focus() {
      inputRef.current?.focus();
    },
    clear() {
      inputRef.current?.clear();
    }
  }), []);

  return <TextInput ref={inputRef} {...props} />;
});

function SearchScreen() {
  const searchInputRef = React.useRef(null);

  return <>
    <SearchInput ref={searchInputRef} placeholder="Tìm kiếm" />
    <Button title="Focus" onPress={() => searchInputRef.current?.focus()} />
  </>;
}`},{id:"react-effect-interview",title:"useEffect: Dependencies, Cleanup & Strict Mode",group:"React",summary:"Trả lời chính xác các câu hỏi phỏng vấn về thời điểm chạy Effect, cleanup, dependency và race condition.",plainTheory:["Không có dependency array: Effect chạy sau mỗi commit. Array rỗng: setup sau mount và cleanup khi unmount, nhưng development Strict Mode có thêm một chu kỳ setup–cleanup–setup để kiểm tra code.","Có dependency: React dùng Object.is so từng dependency; khi một giá trị đổi, cleanup với closure cũ chạy trước rồi setup mới chạy với closure mới.","Effect dành cho đồng bộ với hệ thống ngoài. Tính tổng, lọc list, format text hoặc xử lý một cú click không cần Effect.","Dependency array không phải danh sách tùy chọn để điều khiển lịch chạy. Mọi props, state và function khai báo trong component mà Effect đọc đều là reactive values cần được xử lý đúng.","Cleanup không chỉ chạy khi unmount; nó chạy trước lần setup tiếp theo. Nhờ vậy listener của room A được tháo trước khi listener room B được gắn.","Async Effect callback không được trực tiếp khai báo async vì Effect cần nhận undefined hoặc cleanup function, không phải Promise. Tạo async function bên trong rồi gọi nó."],theory:["Passive effects chạy sau commit; browser paint timing có thể khác theo loại interaction và renderer.","Strict Mode stress-test tính đối xứng và idempotency, không phải production chạy hai Effect.","Race prevention cần cancellation hoặc request identity; cleanup mounted flag chỉ giải quyết một phần."],useCases:["Subscription","Fetch lifecycle","Timer cleanup","Interview output questions"],questions:["useEffect chạy vào thời điểm nào và cleanup chạy khi nào?","Vì sao Effect chạy hai lần trong development?","Tại sao không viết useEffect(async () => {...})?","Object trong dependency khiến Effect chạy liên tục thì sửa thế nào?","Khi nào hoàn toàn không cần useEffect?"],answers:["Effect chạy sau component commit. Cleanup chạy trước setup kế tiếp khi dependency đổi và khi unmount; development Strict Mode còn chạy một cycle kiểm tra thêm ngay sau mount.","Strict Mode cố ý setup–cleanup–setup để phát hiện listener, connection, timer hoặc mutation thiếu cleanup. Sửa bằng cleanup đối xứng và setup idempotent, không dùng ref để chặn lần chạy kiểm tra.","Async function luôn trả Promise nhưng React chỉ chấp nhận cleanup function hoặc undefined. Khai báo async function bên trong Effect, gọi nó và trả cleanup đồng bộ để cancel/ignore công việc.","Tạo object bên trong Effect nếu chỉ Effect cần nó, đưa primitive thực sự cần vào dependency hoặc memo hóa object khi nó là contract chia sẻ. Không xóa dependency để né rerun.","Không cần Effect khi dữ liệu có thể derive trong render, logic xảy ra do event cụ thể, reset state bằng key, hoặc có thể khởi tạo bằng lazy initializer. Effect chỉ cần để synchronize external system."],code:`function useChatRoom(roomId) {
  const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    const connection = createConnection(roomId);

    function handleMessage(message) {
      setMessages(current => [...current, message]);
    }

    connection.on('message', handleMessage);
    connection.connect();

    return () => {
      connection.off('message', handleMessage);
      connection.disconnect();
    };
  }, [roomId]);

  return messages;
}`},{id:"react-memo-hooks-interview",title:"useMemo, useCallback & React.memo",group:"React",summary:"Phân biệt ba công cụ thường bị nhầm và biết khi nào memoization làm app chậm hoặc sai hơn.",plainTheory:["useMemo cache một giá trị tính toán giữa các render; useCallback cache function reference; React.memo cho component có thể bỏ qua render khi props không đổi theo Object.is.","useCallback(fn, deps) gần tương đương useMemo(() => fn, deps). Nó hữu ích khi function được truyền cho child đã memo hoặc là dependency của hook khác cần identity ổn định.","React.memo không ngăn component render khi state nội bộ hoặc Context nó đọc thay đổi. Nó chỉ xử lý props từ parent.","useMemo là performance optimization, không phải correctness guarantee. Code phải vẫn đúng nếu React bỏ cache; không dùng useMemo như nơi chạy side effect.","Memo hóa mọi thứ làm tăng comparison, retained memory và dependency maintenance. Primitive calculation rẻ hoặc child chưa memo thường không hưởng lợi từ useCallback.","Tối ưu đúng bắt đầu từ profiler: xác định interaction chậm, component render nhiều và calculation nào chiếm thời gian rồi mới chọn memo, virtualization hoặc thay state boundary."],theory:["Memo cache theo dependency identity và có thể bị invalidated vì các lý do runtime/development.","Stable callback vẫn có thể capture stale values nếu dependency thiếu.","Custom equality của React.memo phải so mọi input ảnh hưởng output và không được chậm hơn render."],useCases:["Expensive calculation","Memoized child","Stable hook dependency","Profiler optimization"],questions:["useMemo và useCallback khác nhau thế nào?","React.memo có chặn render do Context thay đổi không?","Khi nào useCallback hoàn toàn vô ích?","Có được dùng useMemo để gọi API không?","Dependency thiếu có thể biến optimization thành bug ra sao?"],answers:["useMemo trả lại giá trị do callback tính; useCallback trả lại chính function. Cả hai giữ identity cho tới khi dependency đổi và đều chỉ nên dùng khi có lý do performance/identity rõ.","Không. Consumer đọc Context sẽ render khi provider value liên quan đổi dù props của nó không đổi và component được bọc React.memo.","Khi callback không truyền vào memoized child, không làm dependency của hook khác hoặc chi phí tạo function không đáng kể. Child bình thường vẫn render theo parent nên stable callback không giúp.","Không. useMemo chạy trong render và phải pure; React có thể gọi lại hoặc bỏ cache. API call thuộc event handler, data layer hoặc Effect tùy nguyên nhân.","Function/value memoized giữ closure cũ và đọc props/state cũ. UI có thể trông đúng nhưng callback gửi dữ liệu cũ; exhaustive-deps giúp phát hiện loại lỗi này."],code:`const ResultList = React.memo(function ResultList({ items, onSelect }) {
  return items.map(item => (
    <ResultRow key={item.id} item={item} onSelect={onSelect} />
  ));
});

function SearchResults({ items, query, navigate }) {
  const visibleItems = React.useMemo(() => {
    return items.filter(item => item.name.includes(query));
  }, [items, query]);

  const handleSelect = React.useCallback((itemId) => {
    navigate('Detail', { itemId });
  }, [navigate]);

  return <ResultList items={visibleItems} onSelect={handleSelect} />;
}`},{id:"react-reducer-context-custom-hooks-interview",title:"useReducer, Context & Custom Hooks",group:"React",summary:"Thiết kế state transition phức tạp, Context boundary và custom hook có contract dễ test.",plainTheory:["useReducer phù hợp khi nhiều field đổi cùng nhau, transition có tên nghiệp vụ hoặc next state phụ thuộc event hiện tại. Reducer nhận state và action rồi trả state mới; nó phải pure.","Reducer không tự làm app nhanh hơn useState. Giá trị chính là gom transition và invariant vào một nơi, giúp test bằng input/output mà không cần render component.","Context giải quyết truyền dữ liệu xuyên nhiều tầng, không phải state-management hoàn chỉnh. Khi provider value đổi, consumer đọc context có thể render lại.","Tách StateContext và DispatchContext giúp component chỉ dispatch action không phải đọc state. Dispatch của useReducer có identity ổn định nên provider action ít thay đổi hơn.","Custom hook tái sử dụng stateful logic, không chia sẻ cùng state instance. Hai component gọi cùng một hook vẫn có state riêng trừ khi hook kết nối external store/context chung.","Rules of Hooks yêu cầu gọi hook ở top level và cùng thứ tự giữa các render. Không gọi trong condition, loop, callback thường hoặc sau early return thay đổi theo render."],theory:["Reducer action là domain event, nên mô tả điều đã xảy ra thay vì setter chung chung.","Context boundary nên chia theo domain và update frequency; god context khuếch đại rerender và coupling.","Custom hook contract cần ownership, cleanup, loading/error semantics và stable public surface."],useCases:["Complex form","State machine","Shared feature state","Reusable behavior"],questions:["Khi nào chọn useReducer thay useState?","Context có làm tránh prop drilling mà không gây render lại không?","Hai component gọi cùng custom hook có dùng chung state không?","Vì sao không được gọi Hook trong if?","Reducer có được gọi API hoặc sửa state cũ trực tiếp không?"],answers:["Chọn reducer khi transition phức tạp, nhiều field phải giữ invariant, nhiều event cùng tác động state hoặc cần test transition độc lập. State đơn giản, độc lập vẫn rõ hơn với useState.","Context tránh truyền prop qua component không dùng nó, nhưng consumer vẫn nhận update khi provider value đổi. Chia context, ổn định value, đặt provider gần domain và dùng external store selector nếu update rất rộng/tần suất cao.","Không. Custom hook chia sẻ code, mỗi invocation nhận hook state riêng. Muốn cùng state phải đọc chung Context, external store hoặc resource bên ngoài.","React ánh xạ hook state theo thứ tự gọi. Condition thay đổi thứ tự hoặc số hook giữa hai render làm React gắn state của hook này vào vị trí hook khác.","Không. Reducer phải pure, không mutate state và không side effect. API chạy ở event/effect/data layer; kết quả được dispatch thành action mới để reducer cập nhật state bất biến."],code:`function checkoutReducer(state, action) {
  switch (action.type) {
    case 'submissionStarted':
      return { ...state, status: 'submitting', error: null };

    case 'submissionSucceeded':
      return { ...state, status: 'success', orderId: action.orderId };

    case 'submissionFailed':
      return { ...state, status: 'error', error: action.error };

    default:
      return state;
  }
}

function useCheckout() {
  const [state, dispatch] = React.useReducer(checkoutReducer, {
    status: 'idle',
    orderId: null,
    error: null
  });

  return { state, dispatch };
}`}],_n=[{id:"js-var-let-const",title:"var, let & const",group:"JavaScript",summary:"Chọn cách khai báo biến dựa trên scope, khả năng gán lại và temporal dead zone.",theory:["var có function scope, cho phép khai báo lại và được khởi tạo với undefined khi hoist.","let và const có block scope, không thể truy cập trước dòng khai báo vì nằm trong temporal dead zone.","const chỉ ngăn gán lại binding, không làm object immutable. Ưu tiên const, dùng let khi cần gán lại và tránh var trong code mới."],useCases:["Khai báo biến an toàn","Loop scope","Tránh accidental reassignment","Đọc code legacy"],code:`const user = {
  name: 'An'
};
user.name = 'Bình'; // Hợp lệ: object vẫn mutable.
// user = {}       // TypeError: không thể gán lại binding.

if (true) {
  let message = 'block scoped';
  var legacy = 'function scoped';
}
console.log(legacy); // 'function scoped'
// console.log(message) // ReferenceError`},{id:"js-hoisting-tdz",title:"Hoisting & TDZ",group:"JavaScript",summary:"Hiểu JavaScript tạo binding trước khi chạy code và vì sao mỗi declaration có hành vi khác nhau.",theory:["Declaration được xử lý khi execution context được tạo, nhưng không phải declaration nào cũng được khởi tạo giống nhau.","Function declaration có thể gọi trước vị trí khai báo; var tồn tại với giá trị undefined.","let, const và class đã có binding nhưng chưa initialize; truy cập trong temporal dead zone gây ReferenceError."],useCases:["Dự đoán output","Debug ReferenceError","Phân biệt function declaration và expression"],code:`greet(); // 'hello'
function greet() {
  console.log('hello');
}
console.log(score); // undefined
var score = 10;

// console.log(name) // ReferenceError: TDZ
let name = 'An';

// run() // TypeError: run là undefined
var run = function () {};`},{id:"js-scope-closure",title:"Scope & Closure",group:"JavaScript",summary:"Nắm lexical scope và cách function giữ quyền truy cập biến ở nơi nó được tạo.",theory:["JavaScript dùng lexical scope: nơi viết function quyết định scope chain, không phải nơi gọi function.","Closure là function kèm lexical environment, kể cả khi outer function đã chạy xong.","Closure giúp encapsulate state nhưng cũng có thể giữ object trong bộ nhớ lâu hơn dự kiến."],useCases:["Private state","Factory function","Callback","Memoization"],code:`function createCounter(initial = 0) {
  let count = initial;
  return {
    increment() {
      count++;
      return count;
    },
    current() {
      return count;
    }
  };
}
const counter = createCounter(5);
counter.increment(); // 6
counter.current(); // 6`},{id:"js-this-functions",title:"this & Function Types",group:"JavaScript",summary:"Xác định this từ cách function được gọi và hiểu khác biệt của arrow function.",theory:["this của function phụ thuộc call site: method, constructor, call/apply/bind hoặc gọi độc lập.","Arrow function không có this riêng; nó capture this từ lexical scope bên ngoài.","Tách method khỏi object làm mất receiver. Dùng bind hoặc wrapper khi cần giữ context."],useCases:["Object method","Event callback","Class method","call/apply/bind"],code:`const account = {
  balance: 100,
  show() {
    return this.balance;
  },
  later() {
    return () => this.balance;
  }
};
account.show(); // 100

const safeShow = account.show.bind(account);
safeShow(); // 100`},{id:"js-equality-coercion",title:"Types, Coercion & Equality",group:"JavaScript",summary:"Hiểu primitive/reference, ép kiểu ngầm và sự khác nhau giữa ==, === và Object.is.",theory:["Primitive được so sánh theo giá trị; object và array được so sánh theo reference.","== thực hiện type coercion nên có nhiều trường hợp khó đoán; mặc định nên dùng ===.","Object.is xử lý NaN bằng nhau và phân biệt +0 với -0; Number.isNaN kiểm tra NaN mà không ép kiểu."],useCases:["So sánh dữ liệu","Validate input","Debug coercion","Kiểm tra NaN"],code:`0 == false; // true: có coercion
0 === false; // false: khác type
NaN === NaN; // false
Object.is(NaN, NaN); // true

const first = {
  id: 1
};
const second = {
  id: 1
};
first === second; // false: khác reference
first === first; // true`},{id:"js-array-methods",title:"Array Methods",group:"JavaScript",summary:"Phân biệt transformation, filtering, aggregation và method có mutate mảng.",theory:["map biến đổi từng phần tử, filter chọn phần tử và reduce gộp thành một kết quả.","find trả phần tử đầu tiên; some/every trả boolean; forEach dùng cho side effect và không trả mảng mới.","push, pop, splice, sort và reverse mutate mảng; map, filter, slice và toSorted trả giá trị mới."],useCases:["Data transformation","React rendering","Tổng hợp dữ liệu","Immutable update"],complexity:"Phần lớn method duyệt mảng có thời gian O(n)",code:`const products = [{
  name: 'Book',
  price: 20,
  active: true
}, {
  name: 'Pen',
  price: 5,
  active: false
}];
const total = products.filter(product => product.active).map(product => product.price).reduce((sum, price) => sum + price, 0);
console.log(total); // 20`},{id:"map-set",title:"Map & Set",group:"Data structures",summary:"Tra cứu, đếm tần suất và loại trùng mà không cần quét lại mảng.",theory:["Map lưu cặp key–value; Set chỉ lưu các giá trị duy nhất.","Cả hai thường có thao tác thêm, xóa và tìm kiếm trung bình O(1).","Dùng Map thay object khi key không chỉ là string hoặc cần giữ thứ tự chèn rõ ràng."],useCases:["Two Sum","Đếm tần suất","Kiểm tra phần tử trùng","Nhóm dữ liệu theo khóa"],complexity:"Thời gian O(n) · Bộ nhớ O(n)",code:`function countFrequency(values) {
  const frequency = new Map();
  for (const value of values) {
    frequency.set(value, (frequency.get(value) ?? 0) + 1);
  }
  return frequency;
}
countFrequency(['a', 'b', 'a']); // Map { a: 2, b: 1 }`},{id:"stack-queue",title:"Stack & Queue",group:"Data structures",summary:"Hiểu LIFO và FIFO để chọn đúng cách quản lý thứ tự xử lý.",theory:["Stack là LIFO: phần tử thêm sau được lấy ra trước. Array.push/pop là O(1).","Queue là FIFO: phần tử thêm trước được lấy ra trước.","Không nên dùng Array.shift liên tục cho queue lớn vì mỗi lần có thể tốn O(n); dùng con trỏ head."],useCases:["Valid Parentheses","Undo/redo","BFS","Xử lý tác vụ theo hàng đợi"],complexity:"Push/pop hoặc enqueue/dequeue: O(1)",code:`class Queue {
  items = [];
  head = 0;
  enqueue(value) {
    this.items.push(value);
  }
  dequeue() {
    const item = this.items[this.head];
    this.head++;
    return item;
  }
  get size() {
    return this.items.length - this.head;
  }
}
const queue = new Queue();
queue.enqueue('first');
queue.enqueue('second');
queue.dequeue(); // 'first'`},{id:"two-pointers",title:"Two Pointers",group:"Algorithms",summary:"Dùng hai con trỏ để giảm vòng lặp lồng nhau xuống một lần duyệt.",theory:["Hai con trỏ có thể đi từ hai đầu vào giữa hoặc cùng đi từ trái sang phải.","Thường cần dữ liệu đã sắp xếp hoặc một điều kiện giúp quyết định con trỏ nào cần di chuyển.","Luôn xác định invariant: phần dữ liệu nào đã được xử lý đúng sau mỗi vòng lặp."],useCases:["Palindrome","Two Sum trên mảng đã sort","Move Zeroes","Container With Most Water"],complexity:"Thường O(n) thời gian · O(1) bộ nhớ",code:`function hasPairWithSum(sortedNumbers, target) {
  let left = 0;
  let right = sortedNumbers.length - 1;
  while (left < right) {
    const sum = sortedNumbers[left] + sortedNumbers[right];
    if (sum === target) {
      return true;
    }
    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}`},{id:"sliding-window",title:"Sliding Window",group:"Algorithms",summary:"Duy trì một đoạn liên tiếp thay vì tính lại toàn bộ đoạn ở mỗi vị trí.",theory:["Fixed window dùng khi kích thước k cố định; variable window co giãn theo điều kiện.","Khi right mở rộng, cập nhật trạng thái. Khi cửa sổ không hợp lệ, tăng left và loại dữ liệu tương ứng.","Pattern này áp dụng cho substring hoặc subarray liên tiếp, không áp dụng trực tiếp cho subsequence."],useCases:["Tổng lớn nhất của k phần tử","Longest Substring","Minimum Window Substring"],complexity:"O(n) vì mỗi con trỏ đi qua mảng tối đa một lần",code:`function maxSumOfK(numbers, k) {
  if (k > numbers.length) {
    return null;
  }
  let sum = numbers.slice(0, k).reduce((a, b) => a + b, 0);
  let best = sum;
  for (let right = k; right < numbers.length; right++) {
    sum += numbers[right] - numbers[right - k];
    best = Math.max(best, sum);
  }
  return best;
}`},{id:"binary-search",title:"Binary Search",group:"Algorithms",summary:"Loại bỏ một nửa không gian tìm kiếm sau mỗi bước.",theory:["Điều kiện quan trọng là không gian tìm kiếm có tính đơn điệu.","Chọn rõ interval [left, right] hay [left, right) để tránh lỗi lệch một đơn vị.","Binary search không chỉ tìm giá trị; còn dùng để tìm biên đầu tiên/cuối cùng thỏa điều kiện."],useCases:["Tìm trong mảng đã sort","Lower bound","Binary search on answer"],complexity:"O(log n) thời gian · O(1) bộ nhớ",code:`function binarySearch(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  while (left <= right) {
    const middle = left + Math.floor((right - left) / 2);
    if (numbers[middle] === target) {
      return middle;
    }
    if (numbers[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;
}`},{id:"recursion-dfs",title:"Recursion & DFS",group:"Algorithms",summary:"Chia bài toán thành trạng thái nhỏ hơn và duyệt sâu từng nhánh.",theory:["Mỗi hàm đệ quy phải có base case và bước tiến gần hơn tới base case.","Call stack lưu trạng thái của nhánh hiện tại; input quá sâu có thể gây stack overflow.","DFS thường kết hợp visited để tránh lặp vô hạn trên graph."],useCases:["Duyệt tree/graph","Number of Islands","Backtracking","Sinh tổ hợp"],complexity:"Tùy số trạng thái và số cạnh được duyệt",code:`function depthFirstSearch(graph, start) {
  const visited = new Set();
  function visit(node) {
    if (visited.has(node)) {
      return;
    }
    visited.add(node);
    for (const neighbor of graph[node] ?? []) {
      visit(neighbor);
    }
  }
  visit(start);
  return [...visited];
}`},{id:"immutability",title:"Mutation & Immutability",group:"JavaScript",summary:"Nhận biết reference để tránh vô tình thay đổi input hoặc state dùng chung.",theory:["Object và Array được truyền bằng giá trị của reference; hai biến có thể trỏ tới cùng dữ liệu.","Spread chỉ shallow copy. Object lồng nhau vẫn dùng chung reference nếu không copy tầng đó.","Trong React, immutable update tạo reference mới để cơ chế so sánh nhận ra thay đổi."],useCases:["React state","Clone test input","Pure function","Debug side effect"],complexity:"Copy mảng/object thường tốn O(n)",code:`const user = {
  name: 'An',
  settings: {
    theme: 'light'
  }
};
const updatedUser = {
  ...user,
  settings: {
    ...user.settings,
    theme: 'dark'
  }
};
console.log(user.settings.theme); // 'light'`},{id:"async-event-loop",title:"Promise & Event Loop",group:"JavaScript",summary:"Hiểu thứ tự thực thi synchronous code, microtask và task.",theory:["Code đồng bộ chạy hết call stack trước khi callback bất đồng bộ được xử lý.","Promise callbacks thuộc microtask queue và chạy trước task như setTimeout.","await tạm dừng riêng async function; nó không block toàn bộ JavaScript thread."],useCases:["API calls","Chạy nhiều tác vụ song song","Xử lý lỗi async","Dự đoán thứ tự log"],code:`console.log('A');
setTimeout(() => console.log('B'), 0);
Promise.resolve().then(() => console.log('C'));
console.log('D');

// Thứ tự: A, D, C, B`},{id:"react-render-model",title:"Render, Reconciliation & State Snapshot",group:"React",summary:"Hiểu render là phép tính snapshot, commit mới thay đổi UI và identity quyết định state được giữ hay reset.",plainTheory:["Render nghĩa là React gọi component để tính xem giao diện nên trông như thế nào. Ở bước này React mới tạo bản mô tả giao diện, chưa thay đổi thứ người dùng đang nhìn thấy.","State là một “ảnh chụp” tại thời điểm render. Trong một lần bấm nút, biến count vẫn giữ giá trị cũ dù đã gọi setCount; setCount chỉ yêu cầu React render lại với giá trị mới.","Ví dụ: count đang là 0, gọi setCount(count + 1) ba lần vẫn là ba yêu cầu đặt count thành 1. Muốn tăng ba lần phải dùng setCount(value => value + 1), vì mỗi hàm nhận kết quả mới nhất của lần trước.","Commit là lúc React đem kết quả render so với giao diện cũ và chỉ cập nhật phần thực sự thay đổi. Component có thể render lại nhưng native view hoặc DOM không nhất thiết bị sửa.","React nhận diện một component bằng loại component, vị trí và key. Nếu identity không đổi thì state được giữ; nếu key/type đổi thì React xem đó là component mới và reset state.","Không gọi API, sửa object dùng chung hoặc ghi storage ngay trong lúc render. React có thể gọi render nhiều lần; side effect đặt ở event handler hoặc Effect để không bị chạy lặp ngoài ý muốn."],theory:["Update state chỉ enqueue một render mới; biến state trong handler hiện tại không đổi vì mỗi render giữ một snapshot riêng. Functional updater nhận state mới nhất trong queue nên là lựa chọn đúng khi update dựa trên giá trị trước.","React đi qua Trigger → Render → Commit. Render gọi component để tính element tree; commit mới áp mutation tối thiểu lên host UI. Một render có thể không tạo ra bất kỳ thay đổi host nào.","Render phase phải pure vì React có quyền gọi lại, tạm dừng, ưu tiên lại hoặc bỏ kết quả. Mutate object dùng chung, gọi API hay ghi storage trong render sẽ tạo bug không xác định dưới Strict/Concurrent rendering.","Reconciliation so sánh type và vị trí trong tree. Cùng type ở cùng vị trí giữ state; đổi type hoặc key làm subtree unmount/mount và reset toàn bộ state bên dưới.","Key chỉ cần unique giữa siblings nhưng phải ổn định qua insert/reorder. Index hoặc UUID tạo trong render làm identity trôi, khiến input giữ sai value, animation lệch và memoization mất tác dụng.","Parent render mặc định kéo theo việc React gọi lại descendants; điều đó không đồng nghĩa host view đều update. Chỉ tối ưu bằng memoization sau khi profiler chứng minh render cost đáng kể.","Strict Mode development cố ý gọi component và một số updater thêm lần nữa để phát hiện impurity; code đúng phải cho cùng output và không phụ thuộc số lần render."],useCases:["Debug stale state","Dynamic form","List reorder","Concurrent rendering"],questions:["Vì sao gọi setCount(count + 1) ba lần trong cùng handler thường chỉ tăng một?","Thiết kế key thế nào khi list hỗ trợ insert, reorder và optimistic item?","Render phase và commit phase khác nhau ra sao; phase nào được phép side effect?"],answers:["Mỗi handler đọc snapshot count của render hiện tại, nên cả ba lệnh đều yêu cầu cùng một giá trị count + 1 và React batch chúng. Dùng functional updater setCount(value => value + 1) ba lần để mỗi update nhận kết quả trước đó.","Dùng ID ổn định gắn với identity nghiệp vụ, không dùng index. Optimistic item cần client-generated ID giữ nguyên khi server trả về; nếu phải đổi sang server ID thì cần map identity có chủ đích để tránh remount và mất state.","Render phase gọi component để tính tree mới, phải pure và có thể bị chạy lại hoặc hủy. Commit phase áp thay đổi vào host UI; side effect chạy trong event handler hoặc Effect sau commit, riêng useLayoutEffect chạy đồng bộ sau mutation nhưng trước paint."],code:`function Counter() {
  const [count, setCount] = React.useState(0);
  function increaseThreeTimes() {
    setCount(value => value + 1);
    setCount(value => value + 1);
    setCount(value => value + 1);
  }
  return <Button title={String(count)} onPress={increaseThreeTimes} />;
}`},{id:"react-state-architecture",title:"State Ownership & Architecture",group:"React",summary:"Phân loại local, server, URL/navigation và global state trước khi chọn công cụ quản lý.",plainTheory:["Đầu tiên phải hỏi dữ liệu này thuộc về ai. Text đang nhập chỉ thuộc form; modal đang mở chỉ thuộc screen; session thuộc toàn app; danh sách sản phẩm đến từ server. Không phải state nào cũng đưa vào global store.","Local state nên đặt ở component gần nhất cần thay đổi nó. Chỉ đưa state lên cha khi nhiều component con phải dùng chung một giá trị; đưa quá cao sẽ làm nhiều vùng render lại và khó lần ra nơi thay đổi dữ liệu.","Server state khác client state: nó có thể cũ, cần cache, retry, refetch và xử lý nhiều request trùng. React Query hoặc một data layer tương tự quản lý việc này tốt hơn việc tự nhét response vào Redux.","Không lưu dữ liệu có thể tính được. Ví dụ đã có products và searchText thì filteredProducts nên tính từ hai giá trị đó; lưu thêm filteredProducts tạo hai nguồn dữ liệu dễ lệch nhau.","Context chỉ giúp truyền dữ liệu qua nhiều tầng, không tự làm app nhanh hơn. Khi value của Provider đổi, các component đang đọc Context có thể render lại; vì vậy không nên tạo một Context chứa mọi thứ trong app.","Ở app lớn, chia state theo feature và quy định rõ feature nào được đọc hoặc thay đổi dữ liệu nào. Screen gọi action công khai thay vì sửa trực tiếp state nội bộ của feature khác."],theory:["Trước khi chọn library, phân loại state: local UI, form draft, navigation/URL, server cache, session/global client, persisted/offline và derived data. Mỗi loại có owner, lifetime và consistency model khác nhau.","Single source of truth không có nghĩa là một global store. State nên nằm ở owner gần nhất có quyền thay đổi nó; nâng lên chỉ khi nhiều nhánh cần phối hợp và không thể derive từ input hiện có.","Không lưu derived state nếu có thể tính từ props/state trong render. Hai bản sao của cùng dữ liệu tạo synchronization bug; selector hoặc memoization chỉ cần khi calculation thực sự đắt.","Server state cần cache key chuẩn, stale policy, dedupe, retry, cancellation, invalidation và optimistic reconciliation. Global client store không tự giải quyết các semantics này.","Context truyền value xuyên tree; mọi consumer đọc context sẽ nhận update khi provider value đổi. Tách state/actions hoặc domain theo tần suất thay đổi, ổn định provider value và tránh context “god object”.","External store phù hợp khi cần selector subscription, state ngoài React, persistence/middleware hoặc update tần suất cao. Store phải hỗ trợ snapshot nhất quán với concurrent rendering, thường qua useSyncExternalStore.","Ở quy mô Tech Lead, state boundary phải khớp feature ownership: public commands/events rõ, không cho screen truy cập tùy ý internals của feature khác, và migration từng vertical slice có adapter/test bảo vệ."],useCases:["Feature boundary","Global session","Server cache","Design system"],questions:["Anh sẽ chia state của app commerce lớn thành những lớp nào và vì sao?","Khi nào Context đủ dùng, khi nào cần external store với selector?","Làm sao migrate state architecture mà không big-bang rewrite?"],answers:["Tách local UI state, form state, navigation/URL state, server cache, session/global client state và persisted/offline state. Mỗi loại có lifecycle, owner, consistency và invalidation khác nhau nên không nên gom vào một store.","Context đủ khi dữ liệu đổi ít, consumer không quá rộng và rerender chấp nhận được. External store với selector phù hợp khi state đổi thường xuyên, nhiều consumer chỉ đọc lát cắt nhỏ, cần subscription ngoài React hoặc devtools/middleware.","Đặt boundary/adaptor quanh API cũ, chọn từng vertical slice, thêm test hành vi rồi chuyển owner và consumer theo feature. Chạy song song có kiểm soát, đo render/bug, loại state cũ sau khi không còn reader thay vì thay toàn app một lần."],code:`const AuthStateContext = React.createContext(null);
const AuthActionsContext = React.createContext(null);
function AuthProvider({
  children
}) {
  const [user, setUser] = React.useState(null);
  const actions = React.useMemo(() => ({
    signOut: () => setUser(null)
  }), []);
  return <AuthActionsContext.Provider value={actions}>
      <AuthStateContext.Provider value={user}>{children}</AuthStateContext.Provider>
    </AuthActionsContext.Provider>;
}`},{id:"react-effects-sync",title:"Effects, Synchronization & Race Conditions",group:"React",summary:"Dùng Effect để đồng bộ với hệ thống ngoài, có cleanup đối xứng và chống response về sai thứ tự.",plainTheory:["Effect dùng khi React phải kết nối với thứ nằm ngoài React: gọi API, đăng ký listener, mở socket, chạy timer hoặc điều khiển native API. Nếu chỉ tính dữ liệu để render thì thường không cần Effect.","Dependency array là danh sách những giá trị Effect đang sử dụng và có thể thay đổi. Thiếu dependency làm Effect đọc dữ liệu cũ; dependency là object/function mới liên tục làm Effect chạy lại liên tục.","Cleanup là thao tác hoàn tác: đã add listener thì remove listener, đã connect thì disconnect, đã start timer thì clear timer. React chạy cleanup trước khi Effect chạy lại và khi component biến mất.","Ví dụ userId đổi từ A sang B: request A có thể trả về sau request B và ghi sai profile. Cần hủy request A bằng AbortController hoặc bỏ qua kết quả nếu nó không còn là request hiện tại.","useLayoutEffect chạy trước khi frame được vẽ nên phù hợp để đo vị trí và đặt tooltip không bị nháy. Nó chặn việc hiển thị frame, vì vậy các việc bình thường nên dùng useEffect.","Nếu nhiều Effect liên tục set state để kích hoạt lẫn nhau, luồng dữ liệu đã quá rối. Hãy chuyển quy trình đó thành reducer hoặc state machine với các trạng thái và sự kiện rõ ràng."],theory:["Effect chỉ dùng để đồng bộ React với external system như network, timer, subscription, native API hoặc imperative widget. Derived data và logic do click gây ra thuộc render/event handler, không thuộc Effect.","Dependency array không phải lịch chạy tùy chọn; nó mô tả mọi reactive value Effect đọc. Bỏ dependency tạo stale closure, còn object/function mới mỗi render có thể làm Effect reconnect liên tục.","Mỗi Effect là một process start/stop độc lập. React chạy cleanup cũ trước setup mới và cleanup khi unmount; connect/disconnect, add/remove listener, start/stop timer phải đối xứng.","Strict Mode chạy setup → cleanup → setup trong development để kiểm tra idempotency. Nếu tạo hai socket, listener hoặc request sai thì cleanup/design đang thiếu, không nên “fix” bằng ref chặn lần hai.","Fetch trong Effect dễ tạo waterfall, duplicate request và race. Request cũ phải AbortController hoặc ignore result; production app nên cân nhắc route loader/server cache để preload, dedupe và quản lý stale data.","useLayoutEffect chạy sau host mutation nhưng trước paint, chỉ dùng khi phải measure/chỉnh layout không được nháy. Công việc không liên quan layout dùng useEffect để không chặn frame.","State machine hoặc reducer thường rõ hơn nhiều Effect phụ thuộc chéo. Nếu Effect A set state kích Effect B rồi B kích C, data flow đã khó dự đoán và cần thiết kế lại."],useCases:["Network request","Subscription","Native event listener","Timer"],questions:["Vì sao Effect chạy hai lần trong development Strict Mode và nó phát hiện bug gì?","Phân biệt useEffect, useLayoutEffect và event handler bằng một case đo layout.","Làm sao tránh waterfall và race condition khi nhiều screen cùng fetch?"],answers:["Strict Mode development cố ý chạy setup → cleanup → setup để lộ Effect thiếu cleanup, subscription trùng hoặc logic phụ thuộc chỉ chạy một lần. Production không có cycle kiểm tra thêm này.","Event handler dùng cho hành động do người dùng gây ra; useEffect đồng bộ sau paint; useLayoutEffect đo và cập nhật layout trước paint để tránh nháy. Case tooltip cần measure trong useLayoutEffect, còn analytics của click ở handler.","Fetch ở route/data layer hoặc dùng shared server cache để preload và dedupe thay vì mỗi screen chờ screen trước. Abort/ignore request cũ, key cache bằng input, đặt stale policy và dùng Suspense/query orchestration khi phù hợp."],code:`function useUser(userId) {
  const [user, setUser] = React.useState(null);
  React.useEffect(() => {
    const controller = new AbortController();
    fetch('/users/' + userId, {
      signal: controller.signal
    }).then(response => response.json()).then(setUser).catch(error => {
      if (error.name !== 'AbortError') {
        throw error;
      }
    });
    return () => controller.abort();
  }, [userId]);
  return user;
}`},{id:"react-concurrency-external-store",title:"Concurrency & External Stores",group:"React",summary:"Ưu tiên update, giữ input responsive và kết nối external store an toàn với concurrent rendering.",plainTheory:["Concurrent rendering không có nghĩa React chạy component trên nhiều CPU cùng lúc. Nó có nghĩa React có thể tạm dừng một render chưa quan trọng để xử lý thao tác gấp như người dùng đang gõ.","startTransition đánh dấu một update là “có thể chờ”. Ví dụ cập nhật chữ trong ô tìm kiếm là gấp, còn render lại danh sách 5.000 item theo từ khóa mới có thể đặt trong transition.","useDeferredValue cho phần UI chậm tạm dùng giá trị cũ trong lúc React chuẩn bị giá trị mới. Nó không phải debounce: request mạng vẫn có thể được gọi nhiều lần nếu anh không tự giới hạn.","Suspense boundary quyết định vùng nào hiện loading. Đặt ở root có thể làm trắng cả màn hình; đặt quanh từng vùng dữ liệu giúp header, tab và nội dung cũ vẫn dùng được.","Tearing là lỗi hai component trên cùng màn hình đọc hai phiên bản khác nhau của một store. useSyncExternalStore cung cấp cách subscribe và lấy snapshot để React bảo đảm cả màn hình dùng cùng một phiên bản.","Transition không làm đoạn code nặng chạy nhanh hơn. Nếu filter thật sự tốn CPU, vẫn phải giảm dữ liệu, cache kết quả, chia nhỏ công việc hoặc chuyển calculation khỏi đường tương tác chính."],theory:["Concurrent rendering không làm JavaScript chạy đa luồng; nó cho React chia nhỏ, ưu tiên, interrupt và restart render trước commit. UI đã commit vẫn nhất quán, còn render dở không được lộ ra.","Urgent update như typing/press phải phản hồi ngay; startTransition đánh dấu update dẫn xuất nặng là non-urgent. Transition không được dùng để điều khiển controlled input và không làm calculation tự nhiên nhanh hơn.","useDeferredValue cho subtree chậm tiếp tục dùng value cũ trong khi React chuẩn bị value mới. Nó điều phối render priority, không giới hạn số request như debounce và không thay thế cache.","Suspense boundary quyết định phần UI nào thay bằng fallback. Boundary quá cao làm trắng cả screen; boundary quá nhỏ gây nhiều spinner. Khi refresh, transition giúp giữ content cũ thay vì fallback nhấp nháy.","Tearing là hai consumer trong cùng commit thấy hai version khác nhau của external store. useSyncExternalStore yêu cầu subscribe ổn định và getSnapshot trả cùng reference khi store chưa đổi để React kiểm tra consistency.","Memo, transition và deferred rendering xử lý các bottleneck khác nhau: memo bỏ calculation lặp, transition đổi priority, virtualization giảm lượng work. Phải xác định đúng loại bottleneck trước khi chọn.","Code trong render/effect vẫn phải cancellation-safe và idempotent vì render có thể restart. Không dựa vào giả định mỗi update chỉ render hoặc Effect setup đúng một lần."],useCases:["Search UI nặng","Large filtering","Shared store","Online status"],questions:["Tearing là gì và vì sao concurrent rendering làm external store khó hơn?","So sánh debounce, useDeferredValue và startTransition.","Suspense boundary nên đặt ở đâu để tránh toàn màn hình nhấp nháy?"],answers:["Tearing xảy ra khi hai component trong cùng một UI commit đọc hai snapshot khác nhau của external store. Concurrent render có thể tạm dừng trong lúc store đổi; useSyncExternalStore cung cấp snapshot/subscription contract để React kiểm tra nhất quán.","Debounce trì hoãn việc phát request/callback theo thời gian; useDeferredValue cho subtree chậm dùng value cũ tạm thời; startTransition đánh dấu một state update là không khẩn cấp. Chúng giải quyết ba lớp khác nhau và có thể kết hợp.","Đặt boundary quanh vùng có thể loading độc lập và giữ phần điều hướng/interaction chính ổn định. Tránh một boundary ở root làm trắng toàn màn hình; dùng nested boundaries và transition để giữ content cũ khi refresh."],code:`function Search({
  products
}) {
  const [query, setQuery] = React.useState('');
  const deferredQuery = React.useDeferredValue(query);
  const visible = React.useMemo(() => products.filter(item => item.name.includes(deferredQuery)), [products, deferredQuery]);
  return <><TextInput value={query} onChangeText={setQuery} /><ProductList data={visible} /></>;
}`},{id:"rn-rendering-threads",title:"RN Render Pipeline & Threading",group:"React Native",summary:"Theo dõi update qua Render → Commit → Mount và phân biệt trách nhiệm JS thread với UI thread.",plainTheory:["Khi component trả về View và Text, React tạo một cây mô tả giao diện. React Native sau đó tạo Shadow Tree ở C++; đây là cây nhẹ dùng để tính layout, chưa phải view thật trên màn hình.","Yoga nhận style như flex, width và padding để tính kích thước/vị trí. Text có thể cần hỏi hệ điều hành vì mỗi font và nền tảng đo chữ khác nhau.","Sau khi cây mới hoàn tất, React Native so với cây cũ và tạo danh sách thao tác cần làm. Mount là lúc UI thread tạo, xóa hoặc cập nhật native view thật theo danh sách đó.","JS thread chạy phần lớn JavaScript, React component và event handler. UI thread vẽ và điều khiển native view. JS bị nghẽn thường làm nút bấm phản hồi chậm; UI bị nghẽn làm scroll và native animation cũng giật.","Ví dụ scroll vẫn mượt nhưng onPress chậm: ScrollView có thể tiếp tục trên UI thread, còn callback phải chờ JS thread. Đây là dấu hiệu để điều tra, không phải kết luận tuyệt đối; vẫn phải profile cả hai thread.","Dùng React Profiler để tìm component render tốn thời gian; dùng native profiler để xem main thread, layout và image decoding. Chỉ nhìn FPS tổng không cho biết nghẽn nằm ở bước nào."],theory:["Render phase reduce composite components thành host components và đồng thời tạo/clones React Shadow Nodes C++. Composite component không có native view tương ứng; chỉ host component như View/Text tham gia Shadow Tree.","Commit promote immutable Shadow Tree mới thành “next tree” và chạy layout. Yoga tính phần lớn layout trong C++, nhưng Text/TextInput có thể cần platform measurement.","Mount diff Shadow Tree đã layout với tree hiện tại, tạo mutation list rồi UI thread áp nó vào Host View Tree. Pixel chỉ xuất hiện sau platform draw/composition, nên React commit chưa đồng nghĩa frame đã hiển thị.","JS thread thường chạy React render và business logic; UI thread là nơi duy nhất mutate host views. New Renderer có thể phân phối phase khác thread tùy loại update, nên không dùng mô hình “mọi layout luôn ở một thread” quá đơn giản.","JS stall làm event callback, state update và JS-driven animation trễ; UI stall làm scroll/native transition/draw giật. Cả hai có thể cùng giảm nên phải đo JS timeline và native main-thread trace.","Shadow Tree immutable cho phép nhiều candidate tree tồn tại an toàn và concurrent rendering ưu tiên urgent input. Một render thấp ưu tiên có thể bị bỏ trước mount mà không làm UI rơi vào trạng thái nửa cập nhật.","Để debug từ triệu chứng tới phase: React Profiler đo render/commit, native profiler đo main thread/layout/draw, frame metrics phân biệt JS/UI, memory profiler tìm mount/image pressure."],useCases:["Diagnose dropped frames","Layout measurement","Animation","Architecture review"],questions:["Một animation giật nhưng scroll vẫn mượt cho biết thread nào có thể đang nghẽn?","Từ setState đến pixel trên màn hình đi qua các phase nào?","Tại sao benchmark performance phải chạy release build trên device thật?"],answers:["Nghiêng về JS thread bị nghẽn vì native scroll có thể tiếp tục trên UI thread trong khi JS-driven animation bị trễ. Tuy nhiên cần trace cả hai thread vì native animation/layout nặng cũng có thể tạo triệu chứng tương tự.","setState enqueue update; React render và reconcile element tree; RN renderer tạo/clones Shadow Tree; commit chốt tree, Yoga tính layout; mount transaction cập nhật host views trên UI thread; platform compose và hiển thị pixel.","Development thêm warning, profiling hook, source map và logging; simulator không phản ánh CPU/GPU/memory của thiết bị. Release build trên device thật mới gần compiler/runtime, thermal, refresh rate và giới hạn tài nguyên production."],code:`function HeavyScreen({
  items
}) {
  const [selectedId, setSelectedId] = React.useState(null);
  const rows = React.useMemo(() => normalizeRows(items), [items]);
  return <FlatList data={rows} keyExtractor={item => item.id} renderItem={({
    item
  }) => <Row item={item} selected={item.id === selectedId} onPress={setSelectedId} />} />;
}`},{id:"rn-new-architecture",title:"New Architecture, JSI, Fabric & TurboModules",group:"React Native",summary:"Hiểu khi nào cần interop native và trade-off của giao tiếp type-safe, trực tiếp qua JSI.",plainTheory:["Kiến trúc cũ dùng Bridge: JavaScript đóng gói dữ liệu thành message rồi gửi bất đồng bộ sang native. Cách này ổn với lời gọi ít, nhưng tốn chi phí khi truyền dữ liệu lớn hoặc gọi liên tục.","JSI là lớp C++ cho JavaScript gọi trực tiếp object hoặc function native mà không phải serialize mọi thứ qua Bridge. JSI chỉ là đường giao tiếp; nó không phải renderer và cũng không tự làm code an toàn luồng.","TurboModule là cách viết native module mới trên JSI. Anh khai báo interface TypeScript, Codegen sinh phần kết nối native và module chỉ được load khi cần; API đồng bộ phải thật ngắn vì nó có thể chặn thread đang gọi.","Fabric là renderer mới của React Native. Nó quản lý Shadow Tree bất biến, hỗ trợ concurrent rendering và cho phép đọc layout đồng bộ trong những trường hợp cần thiết.","Hermes là JavaScript engine dùng để chạy code JS. Hermes, JSI, TurboModule và Fabric là bốn khái niệm ở các lớp khác nhau; không nên gọi chung tất cả là “New Architecture”.","Chỉ viết native module khi cần SDK hệ điều hành, xử lý camera/audio/dữ liệu tần suất cao hoặc code native có sẵn. Business logic thông thường giữ ở TypeScript sẽ rẻ hơn để test và bảo trì hai nền tảng.","Bật New Architecture không tự sửa list render chậm hay image quá nặng. Migration phải kiểm tra library tương thích, test hai platform và đo startup, FPS, memory trước/sau trên device thật."],theory:["Legacy Bridge serialize message thành dữ liệu có thể truyền, batch và xử lý bất đồng bộ; overhead rõ khi payload lớn/tần suất cao, đồng thời không hỗ trợ synchronous read cần cho layout/interop hiện đại.","JSI là C++ interface cho JavaScript runtime giữ reference và gọi host object/function trực tiếp. JSI là nền giao tiếp, không phải một module system hay renderer và không tự bảo đảm thread safety.","TurboModules là native module system trên JSI: Codegen sinh contract từ typed spec, module có thể lazy-load và hỗ trợ sync/async API. Sync call phải cực ngắn vì có thể block caller và tạo deadlock/jank nếu lạm dụng.","Fabric là renderer mới dùng immutable C++ Shadow Tree, synchronous layout access và concurrent features. Fabric Native Components dùng Codegen để đồng bộ props/events/commands giữa JS và platform.","Codegen giảm drift type giữa JS–native nhưng không validate business semantics. Nullability, lifecycle, thread affinity, error mapping và backward compatibility vẫn phải thiết kế và test.","Hermes là JavaScript engine, không đồng nghĩa JSI/Fabric/TurboModules. Engine, renderer và module system là các lớp riêng; cần nói đúng layer khi phân tích startup hoặc runtime bottleneck.","Migration phải audit library/native code, build cả hai platform, kiểm tra functional parity, startup/FPS/memory và rollout theo cohort. Bật New Architecture không tự tối ưu business render hay image/list bottleneck."],useCases:["Native SDK","Camera/frame processing","High-throughput data","Library migration"],questions:["Bridge cũ, JSI, TurboModule và Fabric giải quyết các lớp vấn đề nào?","Khi nào viết native module, khi nào giữ logic ở JavaScript?","Anh lập kế hoạch migration app lớn sang New Architecture thế nào để rollback an toàn?"],answers:["Bridge cũ serialize và gửi batch message JS–native; JSI là lớp giao tiếp trực tiếp với object C++; TurboModules thay hệ native module bằng contract Codegen/lazy loading; Fabric thay renderer/component system và hỗ trợ concurrent features.","Giữ ở JavaScript khi logic thuần, throughput vừa phải và không cần platform API. Viết native khi cần SDK/platform capability, xử lý dữ liệu tần suất cao, latency đồng bộ hoặc reuse native code; luôn tính chi phí maintenance đa nền tảng.","Audit dependency và native module, nâng phiên bản theo bước, bật trong CI/canary, port module nhỏ trước, thêm parity/performance tests và staged rollout. Duy trì flag/nhánh tương thích để tắt nhanh trong cửa sổ migration và theo dõi crash/performance theo architecture cohort."],code:`// NativeLocalStorage.ts — contract dùng cho Codegen
import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';
export interface Spec extends TurboModule {
  setItem(value: string, key: string): void;
  getItem(key: string): string | null;
}
export default TurboModuleRegistry.getEnforcing<Spec>('NativeLocalStorage');`},{id:"rn-list-performance",title:"Lists, Memory & Performance Profiling",group:"Performance",summary:"Đo JS/UI FPS, render count, startup và memory trước khi tối ưu danh sách hoặc component tree.",theory:["FlatList virtualize item; window quá lớn tốn memory, quá nhỏ dễ xuất hiện blank area.","Memo chỉ hữu ích khi props ổn định và render thực sự đắt; callback/object mới có thể phá memoization.","Tách urgent interaction khỏi tác vụ nặng, lazy-load feature lớn và luôn đo ở production mode."],useCases:["Feed lớn","Low-end Android","Startup time","Memory leak"],questions:["FPS trong React Native là gì? Vì sao 60 FPS tương ứng khoảng 16.67 ms cho mỗi frame?","JS FPS và UI FPS khác nhau thế nào? Mỗi loại giảm sẽ tạo ra triệu chứng gì trên ứng dụng?","Trường hợp scroll vẫn mượt nhưng nút bấm phản hồi chậm cho thấy thread nào có khả năng đang bị nghẽn?","Trường hợp animation bị giật dù JS thread vẫn ổn thì nên kiểm tra những tác vụ nào trên UI thread?","Vì sao performance đo trong development mode không đáng tin cậy? Anh sẽ thiết lập benchmark production như thế nào?","Một thao tác setState khiến component tree render mất 40 ms. Nó ảnh hưởng FPS ra sao và anh sẽ tìm nguyên nhân bằng cách nào?","Vì sao average FPS có thể đẹp nhưng người dùng vẫn cảm thấy ứng dụng giật? Nên theo dõi p95/p99 frame time, dropped frames và frozen frames thế nào?","Phân biệt JS thread stall, UI thread stall và network latency qua triệu chứng người dùng nhìn thấy.","Khi animation chạy trên UI thread, JS thread bị block có thể ảnh hưởng animation và interaction trong những trường hợp nào?","Vì sao console.log số lượng lớn có thể làm giảm JS FPS, đặc biệt trong development?","Các thuộc tính windowSize, maxToRenderPerBatch và updateCellsBatchingPeriod ảnh hưởng FPS, memory và blank area thế nào?","getItemLayout cải thiện performance trong trường hợp nào? Khi chiều cao row không cố định thì xử lý ra sao?","Vì sao tăng số item render mỗi batch có thể giảm blank area nhưng lại làm interaction kém responsive?","Khi nào React.memo, useMemo và useCallback thực sự giúp tăng FPS? Làm sao chứng minh bằng profiling?","Referential equality của object, array và callback ảnh hưởng việc render lại row trong FlatList thế nào?","Một màn hình feed chỉ giật trên Android cấu hình thấp. Anh sẽ xây quy trình reproduce và profiling ra sao?"],answers:["FPS là số frame hiển thị mỗi giây. Màn hình 60 Hz có ngân sách 1000 / 60 ≈ 16.67 ms để xử lý một frame; vượt ngân sách sẽ bỏ frame. Thiết bị 120 Hz chỉ còn khoảng 8.33 ms.","JS FPS phản ánh khả năng JS thread xử lý React, event và business logic; giảm thường làm press, state update và JS-driven animation trễ. UI FPS phản ánh main thread dựng host view; giảm làm scroll, layout hoặc native animation giật.","Khả năng cao JS thread đang nghẽn: native ScrollView vẫn chạy trên UI thread nên còn mượt, còn callback onPress phải chờ JS thread. Cần xác nhận bằng profiler thay vì kết luận chỉ từ triệu chứng.","Kiểm tra layout/draw quá nặng, hierarchy native sâu, image decode/resize, shadow/blur, animation thuộc tính gây layout, quá nhiều view được mount và công việc native chạy trên main thread.","Development có warning, instrumentation, source map, logging và nhiều check bổ sung nên chậm hơn production. Benchmark bằng release build, device thật đại diện, dữ liệu cố định, warm-up, nhiều lần chạy và so p50/p95 trên cùng kịch bản.","40 ms dài hơn ngân sách 16.67 ms nên ít nhất hai frame deadline có thể bị lỡ. Dùng React Profiler tìm commit/component đắt, đo calculation trong render, kiểm tra state đặt quá cao, props không ổn định và list render lại ngoài ý muốn.","Average làm phẳng các spike ngắn nhưng dễ cảm nhận. Theo dõi p95/p99 frame time, tỷ lệ slow frame vượt deadline, frozen frame rất dài và phân đoạn theo screen/device; đặt threshold dựa trên user journey thay vì một average toàn app.","JS stall: press/state/JS animation trễ nhưng native scroll có thể còn mượt. UI stall: scroll/native transition cũng giật. Network latency: loading kéo dài nhưng interaction local vẫn phản hồi; xác nhận bằng JS/UI timeline và network trace.","Animation UI-thread vẫn chạy nếu toàn bộ config đã nằm native/UI. Nó bị ảnh hưởng khi cần JS cung cấp frame/config mới, callback/gesture xử lý ở JS, state update giữa animation hoặc JS giữ logic quyết định bước tiếp theo.","Logging phải format/serialize dữ liệu và chuyển qua debugger/console; log object lớn hoặc trong render/scroll handler làm JS thread bận. Development còn thêm overhead của debugging nên triệu chứng rõ hơn.","windowSize lớn giảm blank area nhưng tăng memory; maxToRenderPerBatch lớn lấp nội dung nhanh nhưng chiếm JS thread lâu; updateCellsBatchingPeriod nhỏ cập nhật thường xuyên nhưng tăng scheduling work. Phải tune cùng nhau trên device yếu.","getItemLayout bỏ bước đo khi item có chiều cao cố định hoặc biết trước. Với row biến đổi, có thể chuẩn hóa layout, cache measurement theo loại item, cung cấp estimated size qua list phù hợp hoặc chấp nhận đo động và tối ưu phần khác.","Batch lớn tạo nhiều React element và mount nhiều native view trong một lượt, giúp viewport ít trắng nhưng block JS lâu hơn nên press và update khẩn cấp phải chờ. Mục tiêu là batch nhỏ nhất vẫn giữ fill rate chấp nhận được.","Chỉ dùng memoization khi profiling cho thấy render/calculation đắt, component render lặp lại và dependencies có thể ổn định. So sánh before/after bằng commit duration, render count, frame metrics và memory; nếu không cải thiện thì bỏ.","Memo dùng shallow equality. Object, array hoặc callback mới ở mỗi render làm props khác reference dù nội dung giống nhau, khiến row render lại. Ổn định data/callback có chủ đích và tránh tạo object style/handler không cần thiết trong renderItem.","Dùng đúng model máy/OS và dữ liệu production-like, chạy release build, ghi lại kịch bản scroll, đo JS/UI frames, CPU và memory. Sau đó cô lập image, row complexity, list config và state updates từng yếu tố; chốt bằng benchmark lặp lại và regression test."],code:`const ITEM_HEIGHT = 72;
const Row = React.memo(function Row({
  item,
  onPress
}) {
  return <Pressable onPress={() => onPress(item.id)}><Text>{item.title}</Text></Pressable>;
});
function Feed({
  items
}) {
  const openItem = React.useCallback(id => navigate('Detail', {
    id
  }), []);
  return <FlatList data={items} renderItem={({
    item
  }) => <Row item={item} onPress={openItem} />} keyExtractor={item => item.id} getItemLayout={(_, index) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index
  })} />;
}`},{id:"rn-tech-lead-performance-drills",title:"Tech Lead Performance Drills",group:"Performance",summary:"Đi từ triệu chứng đến bottleneck, đặt performance budget và ra quyết định rollout dựa trên percentile thay vì cảm giác.",theory:["Phân rã pipeline thành JavaScript calculation, reconciliation, Yoga layout, image decoding và native mounting trước khi tối ưu.","Average che giấu trải nghiệm xấu ở nhóm thiết bị yếu; ưu tiên percentile, dropped/frozen frames và phân đoạn theo device, OS, app version.","Performance là quality gate: mỗi user journey cần budget, baseline, regression threshold, staged rollout và điều kiện rollback."],useCases:["Performance budget","Production regression","Release gate","Capacity planning"],questions:["Làm sao xác định bottleneck nằm ở JavaScript calculation, React reconciliation, Yoga layout, image decoding hay native view mounting?","Animation thay đổi width/height khác animation dùng transform thế nào về chi phí layout và FPS?","Khi nào nên dùng native-driven animation hoặc UI-thread worklet thay vì animation chạy qua JavaScript?","Nếu optimization tăng FPS nhưng làm memory tăng mạnh, anh sẽ chọn trade-off dựa trên metric nào?","Startup FPS, navigation transition FPS và scrolling FPS nên được đo thành các scenario riêng như thế nào?","Làm sao thiết lập performance budget cho frame time, TTI, memory và JavaScript bundle size trong CI hoặc release gate?","Sau khi release, metric nào giúp phát hiện regression FPS theo device model, OS và phiên bản ứng dụng?","Một bản release làm p95 frame time tăng nhưng crash rate không đổi. Anh quyết định rollback dựa trên tiêu chí nào?"],answers:["Gắn marker cho từng phase và profile từ ngoài vào trong: JS sampling cho calculation, React Profiler cho reconciliation, layout trace cho Yoga, image instrumentation cho decode/cache và native trace cho mount/draw. Thay đổi một biến mỗi lần để chứng minh quan hệ nhân quả.","width/height làm invalidation layout, Yoga tính lại và có thể layout cả subtree; transform thường chỉ thay đổi composition nên rẻ hơn. Dùng transform/opacity cho animation khi hiệu ứng cho phép và xác nhận bằng UI-thread trace.","Dùng native-driven hoặc UI-thread worklet khi animation/gesture phải phản hồi mỗi frame và không thể phụ thuộc độ rảnh của JS thread. Giữ ở JS cho animation đơn giản, tần suất thấp hoặc cần business state JS ở mỗi bước.","Đặt budget theo phân khúc device và user journey: FPS/slow frames, peak và sustained memory, OOM rate, GC pause, battery và thermal. Chọn phương án đạt SLO tổng thể; không đổi vài frame lấy nguy cơ OOM trên device yếu.","Cold start đo từ process start tới màn hình usable; navigation đo từ action tới transition hoàn tất; scrolling đo trong kịch bản velocity/data cố định. Mỗi scenario có marker, dataset, percentile và device matrix riêng để tìm đúng regression.","Lưu baseline theo device tier, chạy benchmark ổn định nhiều lần, dùng median để giảm noise và fail khi regression vượt cả ngưỡng tuyệt đối lẫn phần trăm. CI nên cảnh báo trước; release gate chặn khi metric critical vượt budget có ý nghĩa thống kê.","Theo dõi slow/frozen frame rate và p95/p99 frame time theo screen, device model, OS, app version và rollout cohort. Kết hợp startup/navigation latency, memory/OOM và business conversion để thấy regression vừa kỹ thuật vừa tác động người dùng.","Rollback khi p95 vượt SLO hoặc regression đủ lớn trên cohort/device quan trọng, có tác động đến journey chính và confidence dữ liệu đủ cao. Dùng staged rollout/kill switch, so với control, dừng mở rộng trước rồi rollback nếu không thể giảm thiểu nhanh."],code:`const PERFORMANCE_BUDGET = {
  coldStartP95Ms: 1800,
  navigationP95Ms: 350,
  slowFrameRateMax: 0.05,
  frozenFrameRateMax: 0.001,
  memoryP95Mb: 320
};
function evaluateRelease(metrics) {
  const failures = Object.entries(PERFORMANCE_BUDGET).filter(([metric, limit]) => metrics[metric] > limit).map(([metric]) => metric);
  return {
    approved: failures.length === 0,
    failures,
    action: failures.length ? 'STOP_ROLLOUT' : 'CONTINUE_ROLLOUT'
  };
}`},{id:"rn-navigation-deep-link",title:"Navigation, Deep Links & State Restoration",group:"React Native",summary:"Thiết kế route contract typed, parse input không tin cậy và khôi phục navigation state có version.",plainTheory:["Navigation nên được xem như state: app đang ở auth flow hay main flow, stack hiện có những route nào và route nào được phép mở tiếp. Cách này dễ test hơn việc gọi navigate rải rác khắp component.","Deep link và notification là dữ liệu từ bên ngoài nên phải kiểm tra host, path, param và quyền truy cập. Không được lấy id từ URL rồi mở thẳng màn hình nhạy cảm.","Nếu deep link cần đăng nhập, hãy lưu ý định mở màn hình, chuyển sang login, rồi kiểm tra quyền và mở lại sau khi login thành công. Khi logout phải reset protected stack để nút Back không quay lại màn hình cũ.","Cold start có thể nhận cả URL và notification. Cần một coordinator gom hai nguồn thành một kiểu intent, chọn nguồn ưu tiên và đánh dấu đã xử lý để không navigate hai lần.","Chỉ persist navigation state có thể serialize và có ích. Gắn version cho dữ liệu đã lưu; khi app đổi route schema thì migrate hoặc bỏ state cũ và về màn hình an toàn.","Route param nên là id nhỏ thay vì cả object product/user. Screen lấy dữ liệu mới từ cache/database để deep link, restore và navigate bình thường đều cho cùng kết quả."],theory:["Navigation là application state machine, không chỉ chuỗi lệnh navigate. Route model typed cần định nghĩa state hợp lệ, ownership của nested navigator và transition được phép giữa auth/onboarding/main flows.","Deep link, universal/app link và notification đều là external untrusted input. Validate scheme/host/path/param, authorization và resource existence trước khi tạo route; invalid input phải về safe fallback.","Cold start có thể nhận initial URL và notification gần đồng thời. Một launch coordinator phải normalize thành intent, ưu tiên theo policy, dedupe bằng stable ID và consume đúng một lần.","Auth gate lưu pending intent, đưa người dùng qua login, kiểm tra quyền sau khi có session rồi resume. Không render screen nhạy cảm trước authorization và không để logout quay Back vào protected stack.","Persist navigation state chỉ với dữ liệu serializable và thật sự có giá trị phục hồi. Gắn schema version, migration và TTL; nếu restore fail thì reset an toàn thay vì làm app kẹt lúc startup.","Route params nên nhỏ và là identifier, không mang object cache lớn dễ stale. Screen tự resolve data từ source of truth để deep link, restore và normal navigation có cùng behavior.","Test matrix phải bao gồm foreground/background/killed, logged-in/logged-out, expired link, duplicate source, back behavior và version cũ. Telemetry cần lưu sanitized intent source và outcome."],useCases:["Universal/App Links","Push notification","Auth flow","Restore after process death"],questions:["Deep link vào màn hình cần đăng nhập phải đi qua state machine nào?","Làm sao tránh duplicate navigation khi cold start nhận cả initial URL và notification?","Route contract thay đổi giữa hai phiên bản app được migrate ra sao?"],answers:["Parse và validate link, lưu pending intent, chuyển tới auth nếu chưa có session, sau login kiểm tra authorization rồi resume đúng một lần. Invalid/expired intent phải rơi về safe route.","Chuẩn hóa mọi nguồn thành một LaunchIntent có deterministic ID, có coordinator sở hữu consumption và lưu trạng thái đã xử lý. Chờ đủ initial sources trong một timeout ngắn, ưu tiên theo policy rồi dedupe trước navigate.","Version payload/link contract, parser hỗ trợ schema cũ trong một cửa sổ tương thích và migrate sang route model hiện tại. Param thiếu/sai phải có default hoặc safe fallback; telemetry theo version giúp biết khi nào xóa compatibility."],code:`const linking = {
  prefixes: ['myapp://', 'https://app.example.com'],
  config: {
    screens: {
      Home: '',
      Product: {
        path: 'products/:id',
        parse: {
          id: value => String(value)
        }
      }
    }
  }
};
function Root() {
  return <NavigationContainer linking={linking}><AppNavigator /></NavigationContainer>;
}`},{id:"rn-offline-data",title:"Offline-first, Cache & Data Consistency",group:"Architecture",summary:"Thiết kế source of truth cục bộ, mutation queue, conflict policy và đồng bộ idempotent.",plainTheory:["Offline-first nghĩa là màn hình đọc từ database trên máy để vẫn dùng được khi mất mạng. Server vẫn là nguồn xác nhận cuối cùng, còn UI phải cho biết dữ liệu nào đang chờ đồng bộ hoặc đã lỗi.","Khi người dùng sửa dữ liệu, lưu thay đổi local và thêm một item vào outbox trong cùng transaction. Nếu app crash sau bước này, outbox vẫn còn để gửi lại khi mở app.","Mạng có thể timeout sau khi server đã xử lý thành công. Vì vậy mỗi mutation cần idempotency key; gửi lại cùng key phải nhận cùng kết quả chứ không tạo thêm order hoặc payment.","Optimistic update cho cảm giác nhanh nhưng phải có kế hoạch khi server từ chối: rollback, lấy dữ liệu server rồi merge, hoặc báo người dùng chọn. Không được âm thầm ghi đè dữ liệu mới hơn.","Conflict resolution tùy nghiệp vụ. Like có thể last-write-wins; profile có thể merge từng field; tài liệu cộng tác cần thuật toán phức tạp hơn; giao dịch tiền không được merge tùy ý.","Sync worker cần retry tăng dần, giới hạn số lần, giữ thứ tự mutation phụ thuộc nhau và tách item lỗi vĩnh viễn để một item không chặn cả queue.","Database migration phải test với dữ liệu lớn và trường hợp app bị tắt giữa chừng. Cần version, checkpoint hoặc transaction và telemetry để biết bao nhiêu thiết bị migrate thất bại."],theory:["Offline-first cần local database làm read model khả dụng ngay; server vẫn là authority theo domain policy. UI quan sát model hợp nhất gồm confirmed data, pending mutation và sync/error metadata.","Local write và outbox record phải nằm trong cùng transaction để không có trạng thái “UI đã đổi nhưng mutation bị mất”. Outbox sống qua process death và worker retry khi connectivity phù hợp.","At-least-once delivery thực tế dễ triển khai hơn exactly-once. Mỗi mutation cần durable ID/idempotency key; server lưu kết quả theo key để retry sau timeout/crash không tạo side effect trùng.","Optimistic update phải định nghĩa pending UI, rollback/rebase và lỗi cuối cùng. Không giữ snapshot vô hạn nếu entity tiếp tục đổi; reconciliation thường cần version hoặc server response canonical.","Conflict policy thuộc product/domain: last-write-wins đơn giản nhưng có thể mất dữ liệu, merge per-field cần version/clock, collaborative edit có thể cần CRDT/OT, case nhạy cảm nên yêu cầu người dùng quyết định.","Sync engine cần ordering theo entity/dependency, exponential backoff có jitter, poison-message handling và giới hạn queue. Connectivity “online” không chứng minh API reachable nên request vẫn phải timeout/retry.","Schema migration phải transactional hoặc resumable, có version/checkpoint, test trên database kích thước production và telemetry về duration/failure. Corruption/recovery path là phần của thiết kế, không phải edge case bỏ qua."],useCases:["Poor network","Optimistic UI","Background sync","Collaborative data"],questions:["Anh thiết kế mutation queue bảo đảm không gửi trùng sau app crash thế nào?","Xử lý optimistic delete khi server trả conflict ra sao?","Cache invalidation và schema migration trên device cần observability gì?"],answers:["Ghi local state và outbox trong cùng transaction, mỗi mutation có ID/idempotency key bền vững. Worker dùng trạng thái pending/in-flight, retry exponential và chỉ xóa sau ack; sau crash có thể gửi lại nhưng server dedupe theo key.","Giữ tombstone/pending state cho tới phản hồi. Với conflict, refetch server truth và áp policy sản phẩm: restore item, merge hoặc báo người dùng; không âm thầm xóa dữ liệu mới hơn. Mutation cần reversible snapshot nếu chọn rollback.","Theo dõi cache hit/stale age, sync latency, queue depth, retry/conflict rate và migration success/failure theo schema/app/device. Migration cần transaction, checkpoint/backup phù hợp, crash recovery và kill switch để tránh corrupt hàng loạt."],code:`async function saveTodo(todo) {
  const mutation = {
    id: crypto.randomUUID(),
    type: 'todo.upsert',
    payload: todo
  };
  await database.transaction(async tx => {
    await tx.todos.upsert({
      ...todo,
      syncStatus: 'pending'
    });
    await tx.outbox.insert(mutation);
  });
  scheduleSync();
}
async function flush(mutation) {
  await api.send(mutation.payload, {
    idempotencyKey: mutation.id
  });
  await database.outbox.remove(mutation.id);
}`},{id:"rn-testing-observability-delivery",title:"Testing, Observability & Delivery",group:"Architecture",summary:"Xây quality gates theo rủi ro, đo production và rollout có thể dừng hoặc rollback.",plainTheory:["Không cần E2E cho mọi thứ. Pure function kiểm tra bằng unit test; feature gọi API/storage kiểm tra bằng integration test; chỉ giữ E2E cho hành trình quan trọng như login, thanh toán và khôi phục dữ liệu.","Test nên kiểm tra hành vi người dùng nhìn thấy thay vì state nội bộ của component. Như vậy refactor implementation không làm test hỏng nếu behavior vẫn đúng.","Với payment, ngoài happy path phải test double tap, timeout sau khi server đã charge, retry, app bị kill và callback đến trễ. Đây mới là những case gây lỗi production đắt tiền.","Crash-free rate chưa đủ. Cần theo dõi startup, slow/frozen frame, API latency, memory/OOM và tỷ lệ người dùng hoàn tất hành trình; app không crash nhưng quá chậm vẫn là release xấu.","Metric phải chia theo app version, OS và device tier. Average toàn bộ có thể che việc bản mới chỉ làm Android cấu hình thấp chậm nghiêm trọng.","Rollout theo phần trăm nhỏ trước, có feature flag hoặc kill switch và đặt sẵn ngưỡng dừng. Khi sự cố xảy ra, team chỉ việc làm theo tiêu chí đã thống nhất thay vì tranh luận trong lúc production đang cháy.","Postmortem phải tạo thay đổi cụ thể: regression test, alert, owner và deadline. Viết “cẩn thận hơn lần sau” không ngăn lỗi lặp lại."],theory:["Test strategy dựa trên risk, không dựa vào tỷ lệ pyramid cứng. Unit test pure rule/state machine; integration test feature với storage/network boundary; contract test API/native module; E2E chỉ giữ critical journey giá trị cao.","Test behavior qua public surface, tránh assert implementation detail dễ vỡ khi refactor. Với async UI, chờ observable outcome thay vì sleep; fixture và clock/random/network phải deterministic.","Quality gate nên gồm typecheck, lint/static analysis, targeted regression, related integration và build native. Payment/auth/migration cần thêm idempotency, permission, rollback và failure-injection tests.","Observability phải nối technical signal với user journey: crash/ANR, JS exception, slow/frozen frame, startup/navigation, API latency/error, memory/OOM cùng conversion hoặc task completion.","Metric luôn phân đoạn theo app version, OS, device tier, architecture cohort và screen. Average toàn hệ thống che regression ở low-end Android hoặc một flow ít traffic nhưng quan trọng.","Release an toàn cần staged rollout, feature flag/kill switch, source map/symbol, dashboard và owner trực. Threshold dừng/rollback phải đặt trước release, không tranh luận khi incident đang xảy ra.","Postmortem không dừng ở lỗi cá nhân: ghi detection gap, guardrail thiếu, contributing factors và action có owner/deadline. Tech Lead theo dõi action đến khi có regression test, alert hoặc thay đổi quy trình thực sự."],useCases:["CI quality gate","Incident response","OTA/native release","Tech debt governance"],questions:["Anh xây test pyramid cho app thanh toán sao cho nhanh nhưng vẫn đủ tin cậy?","Metric nào chứng minh một refactor performance thành công ngoài average FPS?","Một rollout tăng crash 0.3%: tiêu chí dừng, rollback và postmortem là gì?"],answers:["Unit test pure payment rules và idempotency; integration test UI–state–API boundary với server giả; contract test gateway; vài E2E cho pay/retry/3DS/restore critical journey. Risk càng cao thì evidence càng gần production, nhưng E2E phải ít và ổn định.","So p50/p95/p99 latency, slow/frozen frames, render count/commit duration, memory/OOM, startup, battery và metric nghiệp vụ trên cùng device cohort. Kết quả cần baseline, confidence và không đánh đổi regression ở chiều khác.","Dừng rollout khi vượt crash SLO hoặc có severity cao trên journey chính; so cohort/control và rollback/kill switch nếu không giảm thiểu nhanh. Postmortem ghi timeline, detection gap, root cause, contributing factors, action owner và regression guard."],code:`it('retries payment without creating a duplicate charge', async () => {
  server.use(failOnceThenSucceed({
    chargeId: 'charge-1'
  }));
  render(<CheckoutScreen />);
  await user.press(screen.getByRole('button', {
    name: 'Pay'
  }));
  await user.press(screen.getByRole('button', {
    name: 'Retry'
  }));
  expect(await screen.findByText('Payment successful')).toBeVisible();
  expect(server.chargesForCurrentOrder()).toHaveLength(1);
});`},...Ep,{id:"ai-task-brief",title:"Task Brief & Context Engineering",group:"AI Skills",summary:"Giao việc bằng outcome, context, constraints và success criteria để AI tự chạy đúng hướng ngay từ đầu.",theory:["Nêu kết quả cần đạt trước, sau đó cung cấp file/phạm vi liên quan, constraint và bằng chứng hoàn thành.","Context tốt là context có liên quan; dump toàn repository hoặc lặp instruction làm tăng nhiễu và token.","Chỉ định điều AI được tự làm và hành động nào phải dừng xin approval để giảm hỏi lại mà vẫn an toàn."],useCases:["Implement feature","Fix bug","Refactor","Technical research"],questions:["Một task brief tốt cần những trường nào để agent không phải đoán intent?","Khi nào nên đưa log, screenshot, reproduction steps hay architectural constraint vào context?","Làm sao giới hạn scope mà vẫn cho AI đủ quyền tự kiểm tra và hoàn thành task?"],answers:["Cần outcome, context/file liên quan, reproduction hoặc input, constraints, non-goals, success criteria, output/evidence mong muốn và autonomy boundary. Với quyết định mở, nêu trade-off được phép thay vì bắt AI đoán.","Đưa reproduction/log khi chẩn đoán runtime; screenshot khi vấn đề thị giác; trace khi timing/performance; architectural constraint khi giải pháp có thể phá boundary. Chỉ đưa dữ liệu trực tiếp giúp phân biệt giả thuyết và loại secret.","Chỉ rõ file/module được sửa, public contract phải giữ và non-goal; đồng thời cho phép đọc code liên quan, chạy test/typecheck/build và sửa lỗi trực tiếp phát sinh trong scope. Yêu cầu approval cho external write, destructive action hoặc mở rộng kiến trúc."],code:`const taskBrief = {
  outcome: 'Fix duplicate payment submission on slow networks',
  context: ['CheckoutScreen.tsx', 'usePayment.ts', 'payment.integration.test.tsx'],
  constraints: ['Keep the public hook API', 'No new dependency', 'Preserve offline retry'],
  success: ['One charge per order', 'Regression test passes', 'Typecheck passes'],
  autonomy: {
    allowed: ['inspect files', 'edit scoped code', 'run tests'],
    approvalRequired: ['change API contract', 'delete data', 'deploy']
  }
};`},{id:"ai-engineering-loop",title:"Inspect → Change → Verify Loop",group:"AI Skills",summary:"Dùng AI theo vòng lặp kỹ thuật có evidence thay vì yêu cầu viết code rồi tin rằng đã đúng.",theory:["Bắt đầu bằng inspection: trace call flow, đọc test và tái hiện lỗi trước khi chọn giải pháp.","Mỗi thay đổi nên nhỏ, có giả thuyết rõ và được kiểm tra bằng test gần nhất với rủi ro.","Definition of done phải gồm evidence: test/typecheck/build, diff review và giới hạn chưa kiểm chứng."],useCases:["Bug fixing","Legacy code","Risky refactor","Production incident"],questions:["Anh yêu cầu AI chứng minh root cause thay vì sửa theo triệu chứng như thế nào?","Một verification ladder nên chạy unit, integration, build và manual check theo thứ tự nào?","Khi test đang xanh nhưng implementation vẫn sai, còn loại evidence nào cần xem?"],answers:["Yêu cầu trace luồng dữ liệu, reproduction trước/sau, chỉ ra invariant bị vi phạm và liên kết từng thay đổi với root cause. Thêm regression test fail trên code cũ; patch chỉ làm test xanh bằng hardcode chưa chứng minh nguyên nhân.","Chạy targeted unit trước để feedback nhanh, rồi integration cho boundary ảnh hưởng, typecheck/lint, related suite và build. Manual/E2E dùng cho UX/native/integration khó mô phỏng; thứ tự điều chỉnh theo rủi ro và chi phí.","Xem chất lượng assertion và coverage của đường lỗi, final diff, runtime logs/trace, contract với dependency, accessibility/visual behavior, concurrency và dữ liệu production-like. Test xanh chỉ chứng minh các case đã viết."],code:`async function engineeringLoop(agent, task) {
  const evidence = await agent.inspect(task);
  const hypothesis = await agent.explainRootCause(evidence);
  const patch = await agent.makeSmallestChange(hypothesis);
  const verification = await agent.runChecks(['targeted regression test', 'related test suite', 'typecheck and build', 'review final diff']);
  if (!verification.every(check => check.passed)) {
    throw new Error('Task is not done');
  }
  return {
    patch,
    evidence: verification
  };
}`},{id:"ai-reusable-skills",title:"Reusable Skills & Project Instructions",group:"AI Skills",summary:"Đóng gói quy trình lặp lại thành instruction và skill có trigger, input, validation và output rõ ràng.",theory:["Project instruction giữ convention dùng rộng; skill dành cho workflow chuyên biệt có thể tái sử dụng.","Skill tốt mô tả khi nào dùng, từng bước bắt buộc, asset/script có sẵn và điều kiện hoàn thành.","Instruction phải ngắn, không mâu thuẫn và có test case đại diện để tránh workflow bị drift theo thời gian."],useCases:["PR review","Release checklist","Generate feature","Incident audit"],questions:["Thông tin nào nên ở project instruction và thông tin nào nên tách thành skill?","Làm sao thiết kế trigger để skill không chạy sai task hoặc bỏ sót task phù hợp?","Anh version và kiểm thử một AI workflow dùng chung cho cả team như thế nào?"],answers:["Project instruction chứa convention và rule áp dụng rộng, ổn định cho repository. Skill chứa workflow chuyên biệt có trigger, trình tự, tool/script/asset và validation riêng; tránh nhét mọi quy trình vào instruction luôn được tải.","Description nêu cả dấu hiệu phải dùng và phạm vi không dùng bằng ngôn ngữ người dùng thường nói. Tạo bộ positive/negative trigger cases, theo dõi false positive/negative và giữ trigger tách biệt với chi tiết workflow.","Lưu skill trong version control, pin dependency/schema, có changelog và owner. Chạy eval set gồm task thật, edge/failure case; so pass rate, diff quality, latency/token và rollout theo team nhỏ trước khi nâng version mặc định."],code:`---
name: react-native-performance-review
description: Review React Native changes that may affect FPS, memory or startup.
---

# Workflow
1. Read the changed render path and existing performance tests.
2. Identify JS-thread, UI-thread, memory and list-virtualization risks.
3. Cite exact files and lines for every finding.
4. Run the smallest relevant benchmark when available.
5. Return findings by severity plus missing evidence.

# Done when
- Every claim has code or benchmark evidence.
- No optimization is recommended without a measurable hypothesis.`},{id:"ai-structured-delegation",title:"Structured Output, Tools & Delegation",group:"AI Skills",summary:"Ép contract đầu ra, chọn đúng tool và chỉ song song hóa các phần độc lập để giảm thời gian mà không mất kiểm soát.",theory:["Dùng schema/checklist khi output được máy hoặc bước sau tiêu thụ; prose tự do phù hợp với reasoning và review.","Chỉ cấp những tool cần thiết cho task, mô tả input/output/error và giới hạn retry rõ ràng.","Parallel work hiệu quả khi subtasks độc lập; dependency hoặc shared files cần một owner tích hợp và verify cuối."],useCases:["Repository audit","Batch migration","Research synthesis","Automated review"],questions:["Task nào nên giao song song và task nào bắt buộc chạy tuần tự?","Output schema giúp giảm lỗi handoff giữa các agent hoặc pipeline như thế nào?","Khi nhiều agent sửa chung repository, owner cuối phải kiểm tra những xung đột nào?"],answers:["Song song hóa research, audit module độc lập hoặc test matrix không dùng chung state. Chạy tuần tự khi output bước trước quyết định bước sau, cùng sửa một boundary/file, có migration order hoặc side effect cần coordination.","Schema biến handoff thành contract kiểm tra được: required field, enum, evidence và error shape rõ ràng. Consumer không phải parse prose tùy ý, có thể validate/fail fast, dedupe và tổng hợp kết quả nhất quán.","Owner kiểm tra textual và semantic conflict, assumption khác nhau, duplicate work, API/type mismatch, migration order và test bị bỏ sót. Sau merge phải đọc final diff và chạy verification ở trạng thái tích hợp, không chỉ tin test từng nhánh."],code:`const findingSchema = {
  type: 'object',
  required: ['severity', 'file', 'evidence', 'recommendation'],
  properties: {
    severity: {
      enum: ['critical', 'high', 'medium', 'low']
    },
    file: {
      type: 'string'
    },
    evidence: {
      type: 'string'
    },
    recommendation: {
      type: 'string'
    }
  },
  additionalProperties: false
};
const workstreams = ['render performance', 'data consistency', 'test coverage'];
const findings = await Promise.all(workstreams.map(scope => audit(scope, findingSchema)));`},{id:"ai-evals-review",title:"Evals, Review & Trust Boundaries",group:"AI Skills",summary:"Đánh giá AI bằng bộ case đại diện, review theo rủi ro và không để output chưa kiểm chứng đi thẳng vào production.",theory:["Eval dataset phải chứa happy path, edge case và failure từng xảy ra; pass rate cần theo dõi theo phiên bản workflow.","AI review bổ sung chứ không thay thế compiler, test, static analysis, security scan và human approval ở vùng rủi ro cao.","Không đưa secret hoặc dữ liệu nhạy cảm ngoài policy; mọi external write, deploy và destructive action cần boundary rõ."],useCases:["Prompt regression","Code review","Security boundary","Team adoption"],questions:["Làm sao biết prompt mới tốt hơn thay vì chỉ hay hơn trên một ví dụ?","Những thay đổi nào luôn cần human review dù AI đã chạy đủ test?","Anh đo ROI của AI bằng cycle time, escaped defects, review load và chi phí như thế nào?"],answers:["Chạy prompt cũ và mới trên cùng eval set đại diện, nhiều lần nếu output biến thiên. So task success, correctness, required evidence, regression theo category, latency và cost; không tối ưu dựa trên một demo đẹp.","Luôn review auth/payment/privacy, destructive data migration, permission/security, public API, dependency/supply chain, native release và thay đổi khó rollback. Test giảm rủi ro nhưng không thay quyền quyết định và accountability.","Đặt baseline trước triển khai rồi so lead/cycle time, first-pass acceptance, escaped defect, review minutes, rework, token/tool cost và developer satisfaction theo loại task. Tính cả thời gian verify/sửa output, tránh chỉ đếm code được sinh."],code:`const evalCases = [{
  name: 'happy path',
  task: fixFixture('normal'),
  mustPass: ['tests', 'typecheck']
}, {
  name: 'race condition',
  task: fixFixture('double-submit'),
  mustPass: ['idempotency-test']
}, {
  name: 'scope control',
  task: fixFixture('unrelated-files'),
  mustPass: ['no-unrelated-diff']
}];
const report = await runWorkflowEval(evalCases);
const releaseAllowed = report.passRate === 1 && report.securityFindings === 0 && report.unreviewedHighRiskChanges === 0;
if (!releaseAllowed) {
  throw new Error('AI workflow regression');
}`}];var dl,pl;for(const e of _n){if(!e.code.trim())throw new Error(`Fundamental "${e.id}" phải có code sample`);if((dl=e.questions)!=null&&dl.length){if(((pl=e.answers)==null?void 0:pl.length)!==e.questions.length)throw new Error(`Fundamental "${e.id}" phải có đúng một câu trả lời cho mỗi câu hỏi`);if(e.answers.some(t=>!t.trim()))throw new Error(`Fundamental "${e.id}" không được có câu trả lời rỗng`)}}const Rp=new RegExp("(?<comment>\\/\\/[^\\n]*|\\/\\*[\\s\\S]*?\\*\\/)|(?<string>`(?:\\\\.|[^`\\\\])*`|'(?:\\\\.|[^'\\\\])*'|\"(?:\\\\.|[^\"\\\\])*\")|(?<number>\\b(?:0x[\\da-f]+|\\d+(?:\\.\\d+)?)\\b)|(?<keyword>\\b(?:async|await|break|case|catch|class|const|continue|default|defer|do|else|enum|export|extends|false|final|for|of|from|func|function|guard|if|import|in|init|instanceof|let|new|null|private|protocol|return|static|struct|super|switch|throw|throws|true|try|typealias|typeof|undefined|var|where|while)\\b)|(?<property>@(?:State|Binding|Observable|Bindable|Environment|MainActor|Published|StateObject|ObservedObject)\\b)|(?<method>(?<=\\.)[A-Za-z_$][\\w$]*)|(?<identifier>\\b[A-Za-z_$][\\w$]*\\b)|(?<operator>===|!==|==|!=|=>|\\?\\?|\\?\\.|\\+\\+|--|&&|\\|\\||<=|>=|\\.\\.\\.|[{}()[\\];,.?:+\\-*/%=<>!&|])","gi"),Tp={comment:"text-[#b4b4b4]",string:"text-[#e99564]",number:"text-[#e99564]",keyword:"text-[#df91b4]",property:"text-[#df91b4]",identifier:"text-[#b899ef]",method:"text-[#e3e3e3]",operator:"text-[#df91b4]",punctuation:"text-[#e3e3e3]"};function Pp(e){var r;const t=[];let n=0;for(const i of e.matchAll(Rp)){const o=i.index??0;o>n&&t.push(e.slice(n,o));let a=((r=Object.entries(i.groups??{}).find(([,s])=>s!==void 0))==null?void 0:r[0])??"operator";a==="operator"&&/^(?:[{}()[\];,.?:]|=>|\.\.\.)$/.test(i[0])&&(a="punctuation"),t.push(u.jsx("span",{className:Tp[a],children:i[0]},`${o}-${a}`)),n=o+i[0].length}return n<e.length&&t.push(e.slice(n)),t}function Nn({code:e,className:t=""}){return u.jsx("pre",{className:`overflow-x-auto bg-[#212121] p-4 font-mono text-sm leading-6 text-[#e3e3e3] ${t}`,children:u.jsx("code",{children:Pp(e)})})}const In={javascript:{title:"JavaScript Basics",description:"Scope, hoisting, closure, this, type coercion và những nền tảng ngôn ngữ cần nắm chắc."},logic:{title:"Logic & Algorithms",description:"Cấu trúc dữ liệu, tư duy giải thuật và các patterns để phân tích bài toán."},reactnative:{title:"React & React Native",description:"Fiber, concurrency, Fabric/JSI, native interop, security, reliability và kiến trúc cấp Tech Lead."},performance:{title:"FPS & Performance",description:"JS/UI FPS, dropped frames, FlatList, profiling, performance budget và quyết định rollout."},ai:{title:"AI Work Skills",description:"Giao việc, context, verification, reusable skills, delegation và eval để làm việc với AI hiệu quả."}};function to(e,t){return t==="javascript"?e==="JavaScript":t==="performance"?e==="Performance":t==="ai"?e==="AI Skills":t==="reactnative"?e==="React"||e==="React Native"||e==="Architecture":e==="Data structures"||e==="Algorithms"}function _p(){var v;const[e,t]=z.useState("javascript"),[n,r]=z.useState(_n[0].id),[i,o]=z.useState(()=>new Set),a=z.useMemo(()=>_n.filter(m=>to(m.group,e)),[e]),s=z.useMemo(()=>a.find(m=>m.id===n)??a[0],[n,a]),l=m=>{const f=_n.find(y=>to(y.group,m));t(m),f&&r(f.id)},h=m=>{o(f=>{const y=new Set(f);return y.has(m)?y.delete(m):y.add(m),y})};return u.jsxs("main",{className:"mx-auto max-w-6xl px-4 pb-12 sm:px-6",children:[u.jsxs("section",{className:"mb-6 rounded-3xl border border-plum-100 bg-gradient-to-br from-plum-50 to-white p-6 dark:border-plum-900/60 dark:from-plum-950/70 dark:to-neutral-900 sm:p-8",children:[u.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.2em] text-plum-600 dark:text-plum-300",children:"Học bản chất trước"}),u.jsx("h1",{className:"mt-3 text-2xl font-bold tracking-tight text-neutral-950 dark:text-white sm:text-3xl",children:"Nền tảng & patterns"}),u.jsx("p",{className:"mt-2 max-w-3xl leading-7 text-neutral-600 dark:text-neutral-300",children:"Ôn cách hoạt động, dấu hiệu nhận biết và trade-off của từng kỹ thuật. Sau đó hãy tự giải lại bài tập mà không nhìn code mẫu."})]}),u.jsx("section",{className:"mb-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-5","aria-label":"Chọn nhóm lý thuyết",children:Object.keys(In).map(m=>{const f=e===m,y=_n.filter(b=>to(b.group,m)).length;return u.jsxs("button",{type:"button",onClick:()=>l(m),"aria-pressed":f,className:`rounded-2xl border p-5 text-left transition ${f?"border-plum-500 bg-plum-600 text-white shadow-lg shadow-plum-100 dark:shadow-none":"border-neutral-200 bg-white text-neutral-900 hover:border-plum-200 hover:bg-plum-50/40 dark:border-neutral-700 dark:bg-neutral-900 dark:text-plum-100 dark:hover:border-plum-700 dark:hover:bg-neutral-800"}`,children:[u.jsxs("span",{className:"flex items-center justify-between gap-3",children:[u.jsx("strong",{className:"text-lg",children:In[m].title}),u.jsxs("span",{className:`rounded-full px-2.5 py-1 text-xs font-bold ${f?"bg-white/15 text-white":"bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"}`,children:[y," bài"]})]}),u.jsx("span",{className:`mt-2 block text-sm leading-6 ${f?"text-plum-100":"text-neutral-500 dark:text-neutral-400"}`,children:In[m].description})]},m)})}),u.jsxs("div",{className:"grid gap-5 lg:grid-cols-[280px_1fr]",children:[u.jsxs("nav",{className:"h-fit rounded-2xl border border-neutral-200 bg-white p-2 shadow-sm dark:border-neutral-700 dark:bg-neutral-900","aria-label":`Danh sách bài ${In[e].title}`,children:[u.jsx("div",{className:"px-3 pb-2 pt-3 text-xs font-bold uppercase tracking-[0.16em] text-neutral-400",children:In[e].title}),a.map(m=>u.jsxs("button",{type:"button",onClick:()=>r(m.id),className:`w-full rounded-xl px-4 py-3 text-left transition ${n===m.id?"bg-neutral-900 text-white dark:bg-plum-600":"text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"}`,children:[u.jsxs("span",{className:"flex items-center justify-between gap-2",children:[u.jsx("span",{className:`text-[11px] font-bold uppercase tracking-wider ${n===m.id?"text-plum-300 dark:text-amber-200":"text-plum-600 dark:text-amber-300"}`,children:m.group}),u.jsx("span",{className:`rounded px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide ${n===m.id?"bg-clay-400/15 text-clay-300":"bg-clay-50 text-clay-700 dark:bg-clay-950 dark:text-clay-300"}`,children:"Code"})]}),u.jsx("span",{className:"mt-0.5 block font-semibold",children:m.title})]},m.id))]}),u.jsxs("article",{className:"overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-900",children:[u.jsxs("div",{className:"p-6 sm:p-8",children:[u.jsx("span",{className:"rounded-full bg-plum-50 px-3 py-1 text-xs font-bold text-plum-700 dark:bg-plum-950 dark:text-plum-300",children:s.group}),u.jsx("h2",{className:"mt-4 text-2xl font-bold text-neutral-950 dark:text-white",children:s.title}),u.jsx("p",{className:"mt-2 text-base leading-7 text-neutral-600 dark:text-neutral-300",children:s.summary}),u.jsxs("div",{className:"mt-7",children:[u.jsxs("section",{children:[u.jsx("h3",{className:"text-xs font-bold uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400",children:s.plainTheory?"Giải thích dễ hiểu":"Cốt lõi cần nhớ"}),u.jsx("ul",{className:"mt-3 space-y-3 text-sm leading-6 text-neutral-700 dark:text-neutral-300",children:(s.plainTheory??s.theory).map(m=>u.jsxs("li",{className:"flex gap-3",children:[u.jsx("span",{className:"mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-plum-500"}),m]},m))})]}),u.jsxs("section",{className:"mt-8 border-t border-neutral-200 pt-6 dark:border-neutral-700",children:[u.jsx("h3",{className:"text-xs font-bold uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400",children:"Khi nào dùng"}),u.jsx("div",{className:"mt-3 flex flex-wrap gap-2",children:s.useCases.map(m=>u.jsx("span",{className:"rounded-lg bg-neutral-100 px-3 py-1.5 text-sm font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300",children:m},m))}),s.complexity&&u.jsx("div",{className:"mt-5 rounded-xl border border-clay-100 bg-clay-50 p-3 text-sm font-semibold text-clay-800 dark:border-clay-900 dark:bg-clay-950/60 dark:text-clay-300",children:s.complexity})]})]}),(v=s.questions)!=null&&v.length?u.jsxs("section",{className:"mt-7 rounded-2xl border border-blush-200 bg-blush-50/70 p-5 dark:border-blush-800/70 dark:bg-neutral-900/80",children:[u.jsx("h3",{className:"text-xs font-bold uppercase tracking-[0.16em] text-blush-800 dark:text-blush-300",children:"Câu hỏi level Tech Lead"}),u.jsx("ol",{className:"mt-3 space-y-3 text-sm leading-6 text-neutral-700 dark:text-neutral-200",children:s.questions.map((m,f)=>{var P;const y=(P=s.answers)==null?void 0:P[f],b=`${s.id}-${f}`,k=i.has(b);return u.jsx("li",{className:"rounded-xl border border-blush-200/80 bg-white/70 p-4 dark:border-neutral-700 dark:bg-neutral-950/55",children:u.jsxs("div",{className:"flex gap-3",children:[u.jsxs("span",{className:"font-bold text-blush-700 dark:text-blush-300",children:[f+1,"."]}),u.jsxs("div",{className:"min-w-0 flex-1",children:[u.jsx("p",{children:m}),y?u.jsxs(u.Fragment,{children:[u.jsx("button",{type:"button",onClick:()=>h(b),"aria-expanded":k,className:"mt-3 rounded-lg border border-blush-300 px-3 py-1.5 text-xs font-bold text-blush-800 transition hover:bg-blush-100 dark:border-blush-700 dark:text-blush-300 dark:hover:bg-blush-950/60",children:k?"Đóng câu trả lời":"Xem câu trả lời"}),k?u.jsxs("div",{className:"mt-3 border-l-2 border-clay-500 pl-4 text-neutral-700 dark:text-neutral-200",children:[u.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-clay-700 dark:text-clay-400",children:"Câu trả lời mẫu"}),y]}):null]}):null]})]})},m)})})]}):null]}),u.jsxs("section",{className:"border-t border-[#292929] bg-[#212121] p-5 dark:border-[#292929] sm:p-7",children:[u.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[u.jsx("h3",{className:"text-xs font-bold uppercase tracking-[0.16em] text-neutral-400",children:"Code sample bắt buộc"}),u.jsx("span",{className:"text-xs text-neutral-500",children:"JavaScript / TypeScript"})]}),u.jsx(Nn,{code:s.code,language:"javascript",className:"!p-0"})]})]})]})]})}const Np="modulepreload",Op=function(e){return"/"+e},cl={},T=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(n.map(l=>{if(l=Op(l),l in cl)return;cl[l]=!0;const h=l.endsWith(".css"),v=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${v}`))return;const m=document.createElement("link");if(m.rel=h?"stylesheet":Np,h||(m.as="script"),m.crossOrigin="",m.href=l,s&&m.setAttribute("nonce",s),document.head.appendChild(m),h)return new Promise((f,y)=>{m.addEventListener("load",f),m.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return i.then(a=>{for(const s of a||[])s.status==="rejected"&&o(s.reason);return t().catch(o)})};function zp({value:e,onChange:t,placeholder:n="Tìm theo tên, mô tả hoặc slug…"}){const[r,i]=z.useState(e);return z.useEffect(()=>i(e),[e]),z.useEffect(()=>{const o=window.setTimeout(()=>t(r),200);return()=>window.clearTimeout(o)},[r,t]),u.jsxs("label",{className:"relative block",children:[u.jsx("span",{className:"sr-only",children:"Tìm câu hỏi"}),u.jsx("span",{className:"pointer-events-none absolute inset-y-0 left-4 flex items-center text-neutral-400",children:"⌕"}),u.jsx("input",{type:"search",value:r,onChange:o=>i(o.target.value),placeholder:n,className:"w-full rounded-2xl border border-neutral-200 bg-white py-3 pl-11 pr-4 text-sm text-neutral-900 shadow-sm outline-none transition placeholder:text-neutral-400 focus:border-plum-400 focus:ring-4 focus:ring-plum-100 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-100 dark:focus:ring-plum-950"})]})}const jp=[{slug:"two-sum",title:"Two Sum",difficulty:"easy",description:"Given an array nums and an integer target, return indices of two numbers that add up to target.",examples:["nums=[2,7,11,15], target=9 → [0,1]"],functionSignature:"function twoSum(nums, target) {}",starterCode:`function twoSum(nums, target) {
  const indexByNumber = new Map();

  for (let index = 0; index < nums.length; index++) {
    const neededNumber = target - nums[index];

    if (indexByNumber.has(neededNumber)) {
      return [indexByNumber.get(neededNumber), index];
    }
    indexByNumber.set(nums[index], index);
  }

  return [];
}`,testCases:[{input:[[2,7,11,15],9],output:[0,1]}]},{slug:"reverse-string",title:"Reverse a String",difficulty:"easy",description:"Return the reversed string.",examples:['"hello" → "olleh"'],functionSignature:"function reverseString(s) {}",starterCode:`function reverseString(text) {
  let result = '';

  for (let index = text.length - 1; index >= 0; index--) {
    result += text[index];
  }

  return result;
}`,arrayFunctionCode:`function reverseString(text) {
  const characters = text.split('');
  const reversedItems = characters.reverse();

  return reversedItems.join('');
}`,testCases:[{input:["hello"],output:"olleh"}]},{slug:"valid-anagram",title:"Valid Anagram",difficulty:"easy",description:"Return true if t is an anagram of s.",examples:['"anagram","nagaram" → true'],functionSignature:"function isAnagram(s,t) {}",starterCode:`function isAnagram(firstText, secondText) {
  if (firstText.length !== secondText.length) {
    return false;
  }

  const characterCounts = {};

  for (const char of firstText) {
    characterCounts[char] = (characterCounts[char] || 0) + 1;
  }

  for (const char of secondText) {
    if (!characterCounts[char]) {
      return false;
    }
    characterCounts[char]--;
  }

  return true;
}`,arrayFunctionCode:`function isAnagram(firstText, secondText) {
  const characters = firstText.split('');
  const sortedItems = characters.sort();
  const characters2 = secondText.split('');
  const sortedItems2 = characters2.sort();

  return sortedItems.join('') === sortedItems2.join('');
}`,testCases:[{input:["anagram","nagaram"],output:!0}]},{slug:"palindrome",title:"Palindrome String",difficulty:"easy",description:"Return true if s reads the same forward and backward.",examples:['"racecar" → true'],functionSignature:"function isPalindrome(s) {}",starterCode:`function isPalindrome(text) {
  let left = 0;
  let right = text.length - 1;

  while (left < right) {
    if (text[left] !== text[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}`,arrayFunctionCode:`function isPalindrome(text) {
  const characters = text.split('');
  const reversedItems = characters.reverse();

  return text === reversedItems.join('');
}`,testCases:[{input:["racecar"],output:!0}]},{slug:"fizz-buzz",title:"Fizz Buzz",difficulty:"easy",description:"Return array 1..n with Fizz/Buzz/FizzBuzz rules.",examples:['5 → ["1","2","Fizz","4","Buzz"]'],functionSignature:"function fizzBuzz(n) {}",starterCode:`function fizzBuzz(limit) {
  const result = [];

  for (let index = 1; index <= limit; index++) {
    if (index % 15 === 0) {
      result.push('FizzBuzz');
    } else if (index % 3 === 0) {
      result.push('Fizz');
    } else if (index % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(String(index));
    }
  }

  return result;
}`,testCases:[{input:[5],output:["1","2","Fizz","4","Buzz"]}]},{slug:"max-number",title:"Maximum Number",difficulty:"easy",description:"Return the maximum of the array.",examples:["[1,5,3] → 5"],functionSignature:"function findMax(nums) {}",starterCode:`function findMax(nums) {
  let max = nums[0];

  for (let index = 1; index < nums.length; index++) {
    if (nums[index] > max) {
      max = nums[index];
    }
  }

  return max;
}`,arrayFunctionCode:`function findMax(nums) {
  return Math.max(...nums);
}`,testCases:[{input:[[1,5,3]],output:5}]},{slug:"contains-duplicate",title:"Contains Duplicate",difficulty:"easy",description:"Return true if any value appears at least twice.",examples:["[1,2,3,1] → true"],functionSignature:"function containsDuplicate(nums) {}",starterCode:`function containsDuplicate(nums) {
  const seen = new Set();

  for (const number of nums) {
    if (seen.has(number)) {
      return true;
    }
    seen.add(number);
  }

  return false;
}`,arrayFunctionCode:`function containsDuplicate(nums) {
  return new Set(nums).size !== nums.length;
}`,testCases:[{input:[[1,2,3,1]],output:!0}]},{slug:"move-zeroes",title:"Move Zeroes",difficulty:"easy",description:"Move all zeros to end keeping relative order.",examples:["[0,1,0,3,12] → [1,3,12,0,0]"],functionSignature:"function moveZeroes(nums) {}",starterCode:`function moveZeroes(nums) {
  let nextIndex = 0;

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] !== 0) {
      [nums[index], nums[nextIndex]] = [nums[nextIndex], nums[index]];
      nextIndex++;
    }
  }

  return nums;
}`,testCases:[{input:[[0,1,0,3,12]],output:[1,3,12,0,0]}]},{slug:"plus-one",title:"Plus One",difficulty:"easy",description:"Given digits representing an integer, return digits + 1.",examples:["[1,2,3] → [1,2,4]"],functionSignature:"function plusOne(digits) {}",starterCode:`function plusOne(d) {
  for (let index = d.length - 1; index >= 0; index--) {
    if (d[index] < 9) {
      d[index]++;

      return d;
    }
    d[index] = 0;
  }
  d.unshift(1);

  return d;
}`,testCases:[{input:[[1,2,3]],output:[1,2,4]}]},{slug:"binary-search",title:"Binary Search",difficulty:"easy",description:"Return index of target in sorted array or -1.",examples:["([-1,0,3,5,9,12], 9) → 4"],functionSignature:"function search(nums,target) {}",starterCode:`function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const middle = left + right >> 1;

    if (nums[middle] === target) {
      return middle;
    }

    if (nums[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}`,testCases:[{input:[[-1,0,3,5,9,12],9],output:4}]},{slug:"first-unique-char",title:"First Unique Character",difficulty:"easy",description:"Return index of first non-repeating char, else -1.",examples:['"leetcode" → 0'],functionSignature:"function firstUniqChar(s) {}",starterCode:`function firstUniqChar(text) {
  const counts = {};

  for (const character of text) {
    counts[character] = (counts[character] || 0) + 1;
  }

  for (let index = 0; index < text.length; index++) {
    if (counts[text[index]] === 1) {
      return index;
    }
  }

  return -1;
}`,testCases:[{input:["leetcode"],output:0}]},{slug:"valid-parentheses",title:"Valid Parentheses",difficulty:"easy",description:"Check if a bracket string is valid.",examples:['"()[]{}" → true'],functionSignature:"function isValid(s) {}",starterCode:`function isValid(text) {
  const openingBrackets = [];
  const matchingOpeningBracket = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  for (const character of text) {
    if (character in matchingOpeningBracket) {
      if (openingBrackets.pop() !== matchingOpeningBracket[character]) {
        return false;
      }
    } else {
      openingBrackets.push(character);
    }
  }

  return openingBrackets.length === 0;
}`,testCases:[{input:["()[]{}"],output:!0}]},{slug:"ransom-note",title:"Ransom Note",difficulty:"easy",description:"Return true if ransom can be constructed from magazine letters.",examples:['"aa","aab" → true'],functionSignature:"function canConstruct(ransom,mag) {}",starterCode:`function canConstruct(ransom, mag) {
  const counts = {};

  for (const character of mag) {
    counts[character] = (counts[character] || 0) + 1;
  }

  for (const character of ransom) {
    if (!counts[character]) {
      return false;
    }
    counts[character]--;
  }

  return true;
}`,testCases:[{input:["aa","aab"],output:!0}]},{slug:"merge-two-sorted-arrays",title:"Merge Two Sorted Arrays",difficulty:"easy",description:"Merge two sorted arrays and return a new sorted array.",examples:["[1,2,4] & [1,3,4] → [1,1,2,3,4,4]"],functionSignature:"function mergeTwoSorted(arr1, arr2) {}",starterCode:`function mergeTwoSorted(arr1, arr2) {
  const result = [];
  let index = 0;
  let nextIndex = 0;

  while (index < arr1.length && nextIndex < arr2.length) {
    if (arr1[index] <= arr2[nextIndex]) {
      result.push(arr1[index]);
      index++;
    } else {
      result.push(arr2[nextIndex]);
      nextIndex++;
    }
  }

  while (index < arr1.length) {
    result.push(arr1[index]);
    index++;
  }

  while (nextIndex < arr2.length) {
    result.push(arr2[nextIndex]);
    nextIndex++;
  }

  return result;
}`,testCases:[{input:[[1,2,4],[1,3,4]],output:[1,1,2,3,4,4]}]},{slug:"remove-duplicates-sorted",title:"Remove Duplicates from Sorted Array",difficulty:"easy",description:"Remove duplicates in-place, return new length.",examples:["[1,1,2] → 2"],functionSignature:"function removeDuplicates(nums) {}",starterCode:`function removeDuplicates(nums) {
  let index = 0;

  for (const n of nums) {
    if (index === 0 || n !== nums[index - 1]) {
      nums[index] = n;
      index++;
    }
  }

  return index;
}`,testCases:[{input:[[1,1,2]],output:2}]},{slug:"best-time-buy-sell",title:"Best Time to Buy and Sell Stock",difficulty:"easy",description:"Max profit from one transaction.",examples:["[7,1,5,3,6,4] → 5"],functionSignature:"function maxProfit(prices) {}",starterCode:`function maxProfit(prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let index = 1; index < prices.length; index++) {
    minPrice = Math.min(minPrice, prices[index]);
    const profit = prices[index] - minPrice;
    maxProfit = Math.max(maxProfit, profit);
  }

  return maxProfit;
}`,testCases:[{input:[[7,1,5,3,6,4]],output:5}]},{slug:"intersection-two-arrays-ii",title:"Intersection of Two Arrays II",difficulty:"easy",description:"Return intersection allowing duplicates.",examples:["[1,2,2,1] & [2,2] → [2,2]"],functionSignature:"function intersect(a,b) {}",starterCode:`function intersect(firstArray, secondArray) {
  const counts = {};
  const result = [];

  for (const value of firstArray) {
    counts[value] = (counts[value] || 0) + 1;
  }

  for (const value of secondArray) {
    if (counts[value] > 0) {
      result.push(value);
      counts[value]--;
    }
  }

  return result;
}`,testCases:[{input:[[1,2,2,1],[2,2]],output:[2,2]}]},{slug:"isomorphic-strings",title:"Isomorphic Strings",difficulty:"easy",description:"Return true if s and t are isomorphic.",examples:['"egg","add" → true'],functionSignature:"function isIsomorphic(s,t) {}",starterCode:`function isIsomorphic(firstText, secondText) {
  const forwardMap = {};
  const reverseMap = {};

  for (let index = 0; index < firstText.length; index++) {
    const sourceCharacter = firstText[index];
    const targetCharacter = secondText[index];

    if (forwardMap[sourceCharacter] && forwardMap[sourceCharacter] !== targetCharacter || reverseMap[targetCharacter] && reverseMap[targetCharacter] !== sourceCharacter) {
      return false;
    }
    forwardMap[sourceCharacter] = targetCharacter;
    reverseMap[targetCharacter] = sourceCharacter;
  }

  return true;
}`,testCases:[{input:["egg","add"],output:!0}]},{slug:"climbing-stairs",title:"Climbing Stairs",difficulty:"easy",description:"Distinct ways to climb to the top (1 or 2 steps).",examples:["n=3 → 3"],functionSignature:"function climbStairs(n) {}",starterCode:`function climbStairs(steps) {
  let previousTwo = 1;
  let previousOne = 1;

  for (let index = 2; index <= steps; index++) {
    [previousTwo, previousOne] = [previousTwo + previousOne, previousTwo];
  }

  return previousTwo;
}`,testCases:[{input:[3],output:3}]},{slug:"majority-element",title:"Majority Element",difficulty:"easy",description:"Return element that appears more than n/2 times.",examples:["[3,2,3] → 3"],functionSignature:"function majorityElement(nums) {}",starterCode:`function majorityElement(nums) {
  let candidate = 0;
  let cand = null;

  for (const value of nums) {
    if (candidate === 0) {
      cand = value;
    }

    if (value === cand) {
      candidate++;
    } else {
      candidate--;
    }
  }

  return cand;
}`,testCases:[{input:[[3,2,3]],output:3}]}],Lp=[{slug:"3sum",title:"3Sum",difficulty:"medium",description:"Return all unique triplets that sum to zero.",examples:["[-1,0,1,2,-1,-4] → [[-1,-1,2],[-1,0,1]]"],functionSignature:"function threeSum(nums) {}",starterCode:`function threeSum(nums) {
  nums.sort((first, second) => {
    return first - second;
  });
  const result = [];

  for (let index = 0; index < nums.length - 2; index++) {
    if (index && nums[index] === nums[index - 1]) {
      continue;
    }

    let left = index + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[index] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[index], nums[left], nums[right]]);

        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }

        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}`,testCases:[{input:[[-1,0,1,2,-1,-4]],output:[[-1,-1,2],[-1,0,1]]}]},{slug:"longest-substring",title:"Longest Substring Without Repeating",difficulty:"medium",description:"Length of the longest substring without repeating characters.",examples:['"abcabcbb" → 3'],functionSignature:"function lengthOfLongestSubstring(s) {}",starterCode:`function lengthOfLongestSubstring(text) {
  const window = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < text.length; right++) {
    while (window.has(text[right])) {
      window.delete(text[left]);
      left++;
    }
    window.add(text[right]);
    const currentLength = right - left + 1;
    maxLength = Math.max(maxLength, currentLength);
  }

  return maxLength;
}`,testCases:[{input:["abcabcbb"],output:3}]},{slug:"group-anagrams",title:"Group Anagrams",difficulty:"medium",description:"Group strings that are anagrams.",examples:['["eat","tea","tan","ate","nat","bat"] → [["eat","tea","ate"],["tan","nat"],["bat"]]'],functionSignature:"function groupAnagrams(strs) {}",starterCode:`function groupAnagrams(strs) {
  const groups = new Map();

  for (const word of strs) {
    const values = Array(26);
    const count = values.fill(0);

    for (const char of word) {
      count[char.charCodeAt(0) - 97]++;
    }

    const key = count.join('#');

    if (!groups.has(key)) {
      groups.set(key, []);
    }

    const items = groups.get(key);
    items.push(word);
  }

  return Array.from(groups.values());
}`,testCases:[{input:[["eat","tea","tan","ate","nat","bat"]],output:[["eat","tea","ate"],["tan","nat"],["bat"]]}]},{slug:"top-k-frequent",title:"Top K Frequent Elements",difficulty:"medium",description:"Return the k most frequent elements.",examples:["[1,1,1,2,2,3], k=2 → [1,2]"],functionSignature:"function topKFrequent(nums,k) {}",starterCode:`function topKFrequent(nums, k) {
  const frequencyMap = new Map();

  for (const num of nums) {
    const currentFrequency = frequencyMap.get(num) || 0;
    const newFrequency = currentFrequency + 1;
    frequencyMap.set(num, newFrequency);
  }

  const bucketCount = nums.length + 1;
  const frequencyBuckets = Array.from({ length: bucketCount }, () => {
    return [];
  });

  for (const [number, frequency] of frequencyMap) {
    const bucket = frequencyBuckets[frequency];
    bucket.push(number);
  }

  const result = [];
  const highestFrequency = frequencyBuckets.length - 1;

  for (let frequency = highestFrequency; frequency >= 0; frequency--) {
    if (result.length >= k) {
      break;
    }

    const numbers = frequencyBuckets[frequency];

    for (const number of numbers) {
      result.push(number);

      if (result.length === k) {
        break;
      }
    }
  }

  return result;
}`,testCases:[{input:[[1,1,1,2,2,3],2],output:[1,2]}]},{slug:"product-except-self",title:"Product of Array Except Self",difficulty:"medium",description:"answer[i] = product of all elements except nums[i].",examples:["[1,2,3,4] → [24,12,8,6]"],functionSignature:"function productExceptSelf(nums) {}",starterCode:`function productExceptSelf(nums) {
  const values = Array(nums.length);
  const result = values.fill(1);
  let prefix = 1;
  let suffix = 1;

  for (let index = 0; index < nums.length; index++) {
    result[index] *= prefix;
    prefix *= nums[index];
  }

  for (let index = nums.length - 1; index >= 0; index--) {
    result[index] *= suffix;
    suffix *= nums[index];
  }

  return result;
}`,testCases:[{input:[[1,2,3,4]],output:[24,12,8,6]}]},{slug:"rotate-image",title:"Rotate Image",difficulty:"medium",description:"Rotate n×n matrix by 90 degrees clockwise in-place.",examples:["[[1,2,3],[4,5,6],[7,8,9]] → [[7,4,1],[8,5,2],[9,6,3]]"],functionSignature:"function rotate(matrix) {}",starterCode:`function rotate(matrix) {
  const n = matrix.length;

  for (let index = 0; index < n; index++) {
    for (let nextIndex = index; nextIndex < n; nextIndex++) {
      [matrix[index][nextIndex], matrix[nextIndex][index]] = [matrix[nextIndex][index], matrix[index][nextIndex]];
    }
  }

  for (let index = 0; index < n; index++) {
    matrix[index].reverse();
  }

  return matrix;
}`,testCases:[{input:[[[1,2,3],[4,5,6],[7,8,9]]],output:[[7,4,1],[8,5,2],[9,6,3]]}]},{slug:"set-matrix-zeroes",title:"Set Matrix Zeroes",difficulty:"medium",description:"If an element is 0, set its row and column to 0.",examples:["[[1,1,1],[1,0,1],[1,1,1]] → [[1,0,1],[0,0,0],[1,0,1]]"],functionSignature:"function setZeroes(matrix) {}",starterCode:`function setZeroes(matrix) {
  const zeroRows = new Set();
  const zeroColumns = new Set();

  for (let index = 0; index < matrix.length; index++) {
    for (let nextIndex = 0; nextIndex < matrix[0].length; nextIndex++) {
      if (matrix[index][nextIndex] === 0) {
        zeroRows.add(index);
        zeroColumns.add(nextIndex);
      }
    }
  }

  for (const row of zeroRows) {
    matrix[row].fill(0);
  }

  for (const column of zeroColumns) {
    for (let row = 0; row < matrix.length; row++) {
      matrix[row][column] = 0;
    }
  }

  return matrix;
}`,testCases:[{input:[[[1,1,1],[1,0,1],[1,1,1]]],output:[[1,0,1],[0,0,0],[1,0,1]]}]},{slug:"spiral-matrix",title:"Spiral Matrix",difficulty:"medium",description:"Return all elements in spiral order.",examples:["[[1,2,3],[4,5,6],[7,8,9]] → [1,2,3,6,9,8,7,4,5]"],functionSignature:"function spiralOrder(matrix) {}",starterCode:`function spiralOrder(matrix) {
  const result = [];
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    for (let index = left; index <= right; index++) {
      result.push(matrix[top][index]);
    }
    top++;

    for (let index = top; index <= bottom; index++) {
      result.push(matrix[index][right]);
    }
    right--;

    if (top <= bottom) {
      for (let index = right; index >= left; index--) {
        result.push(matrix[bottom][index]);
      }
      bottom--;
    }

    if (left <= right) {
      for (let index = bottom; index >= top; index--) {
        result.push(matrix[index][left]);
      }
      left++;
    }
  }

  return result;
}`,testCases:[{input:[[[1,2,3],[4,5,6],[7,8,9]]],output:[1,2,3,6,9,8,7,4,5]}]},{slug:"word-break",title:"Word Break",difficulty:"medium",description:"Return true if s can be segmented into words from dict.",examples:['"leetcode", ["leet","code"] → true'],functionSignature:"function wordBreak(s,wordDict) {}",starterCode:`function wordBreak(text, dictionary) {
  const set = new Set(dictionary);
  const values = Array(text.length + 1);
  const dp = values.fill(false);
  dp[0] = true;

  for (let index = 1; index <= text.length; index++) {
    for (let nextIndex = 0; nextIndex < index; nextIndex++) {
      if (dp[nextIndex] && set.has(text.slice(nextIndex, index))) {
        dp[index] = true;
        break;
      }
    }
  }

  return dp[text.length];
}`,testCases:[{input:["leetcode",["leet","code"]],output:!0}]},{slug:"coin-change",title:"Coin Change",difficulty:"medium",description:"Fewest coins to make up amount; return -1 if not possible.",examples:["[1,2,5], amount=11 → 3"],functionSignature:"function coinChange(coins,amount) {}",starterCode:`function coinChange(coins, amount) {
  const values = Array(amount + 1);
  const dp = values.fill(Infinity);
  dp[0] = 0;

  for (let currentAmount = 1; currentAmount <= amount; currentAmount++) {
    for (const coin of coins) {
      if (currentAmount - coin >= 0) {
        dp[currentAmount] = Math.min(dp[currentAmount], dp[currentAmount - coin] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}`,testCases:[{input:[[1,2,5],11],output:3}]},{slug:"combination-sum",title:"Combination Sum",difficulty:"medium",description:"Return all unique combinations where candidates sum to target.",examples:["[2,3,6,7], 7 → [[2,2,3],[7]]"],functionSignature:"function combinationSum(candidates,target) {}",starterCode:`function combinationSum(candidates, target) {
  const result = [];
  candidates.sort((first, second) => {
    return first - second;
  });
  function dfs(index, combination, currentSum) {
    if (currentSum === target) {
      result.push(combination.slice());

      return;
    }

    if (currentSum > target || index === candidates.length) {
      return;
    }
    combination.push(candidates[index]);
    dfs(index, combination, currentSum + candidates[index]);
    combination.pop();
    dfs(index + 1, combination, currentSum);
  }
  dfs(0, [], 0);

  return result;
}`,testCases:[{input:[[2,3,6,7],7],output:[[2,2,3],[7]]}]},{slug:"longest-pal-substring",title:"Longest Palindromic Substring",difficulty:"medium",description:"Return the longest palindromic substring.",examples:['"babad" → "bab" (or "aba")'],functionSignature:"function longestPalindrome(s) {}",starterCode:`function longestPalindrome(text) {
  let result = '';
  function ex(left, right) {
    while (left >= 0 && right < text.length && text[left] === text[right]) {
      if (right - left + 1 > result.length) {
        result = text.slice(left, right + 1);
      }
      left--;
      right++;
    }
  }

  for (let index = 0; index < text.length; index++) {
    ex(index, index);
    ex(index, index + 1);
  }

  return result;
}`,testCases:[{input:["babad"],output:"bab"}]},{slug:"container-most-water",title:"Container With Most Water",difficulty:"medium",description:"Find max area formed by two lines.",examples:["[1,8,6,2,5,4,8,3,7] → 49"],functionSignature:"function maxArea(height) {}",starterCode:`function maxArea(heights) {
  let left = 0;
  let right = heights.length - 1;
  let maxArea = 0;

  while (left < right) {
    const width = right - left;
    const containerHeight = Math.min(heights[left], heights[right]);
    const currentArea = width * containerHeight;
    maxArea = Math.max(maxArea, currentArea);

    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}`,testCases:[{input:[[1,8,6,2,5,4,8,3,7]],output:49}]},{slug:"meeting-rooms-ii",title:"Meeting Rooms II",difficulty:"medium",description:"Return minimum number of rooms required.",examples:["[[0,30],[5,10],[15,20]] → 2"],functionSignature:"function minMeetingRooms(intervals) {}",starterCode:`function minMeetingRooms(intervals) {
  const mappedItems = intervals.map(i => {
    return i[0];
  });
  const starts = mappedItems.sort((first, second) => {
    return first - second;
  });
  const mappedItems2 = intervals.map(i => {
    return i[1];
  });
  const ends = mappedItems2.sort((first, second) => {
    return first - second;
  });
  let index = 0;
  let nextIndex = 0;
  let rooms = 0;
  let maxR = 0;

  while (index < starts.length) {
    if (starts[index] < ends[nextIndex]) {
      rooms++;
      index++;
      maxR = Math.max(maxR, rooms);
    } else {
      rooms--;
      nextIndex++;
    }
  }

  return maxR;
}`,testCases:[{input:[[[0,30],[5,10],[15,20]]],output:2}]},{slug:"kth-largest",title:"Kth Largest Element in an Array",difficulty:"medium",description:"Find the kth largest element.",examples:["[3,2,1,5,6,4], k=2 → 5"],functionSignature:"function findKthLargest(nums,k) {}",starterCode:`function findKthLargest(nums, k) {
  const target = nums.length - k;
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const pivot = nums[right];
    let position = left;

    for (let index = left; index < right; index++) {
      if (nums[index] <= pivot) {
        [nums[index], nums[position]] = [nums[position], nums[index]];
        position++;
      }
    }
    [nums[position], nums[right]] = [nums[right], nums[position]];

    if (position === target) {
      return nums[position];
    }

    if (position < target) {
      left = position + 1;
    } else {
      right = position - 1;
    }
  }
}`,testCases:[{input:[[3,2,1,5,6,4],2],output:5}]},{slug:"course-schedule",title:"Course Schedule",difficulty:"medium",description:"Return true if you can finish all courses.",examples:["n=2, [[1,0]] → true"],functionSignature:"function canFinish(n,prereq) {}",starterCode:`function canFinish(courseCount, prerequisites) {
  const graph = Array.from({
    length: courseCount
  }, () => {
    return [];
  });
  const values = Array(courseCount);
  const inDegree = values.fill(0);

  for (const [first, second] of prerequisites) {
    graph[second].push(first);
    inDegree[first]++;
  }

  const queue = [];

  for (let index = 0; index < courseCount; index++) {
    if (inDegree[index] === 0) {
      queue.push(index);
    }
  }

  let completedCount = 0;

  while (queue.length) {
    const course = queue.shift();
    completedCount++;

    for (const nextCourse of graph[course]) {
      inDegree[nextCourse]--;

      if (inDegree[nextCourse] === 0) {
        queue.push(nextCourse);
      }
    }
  }

  return completedCount === courseCount;
}`,testCases:[{input:[2,[[1,0]]],output:!0}]},{slug:"number-of-islands",title:"Number of Islands",difficulty:"medium",description:"Count islands of '1's in a grid.",examples:["typical grid → 3"],functionSignature:"function numIslands(grid) {}",starterCode:`function numIslands(grid) {
  if (!grid.length) {
    return 0;
  }

  const rowCount = grid.length;
  const columnCount = grid[0].length;
  let islandCount = 0;
  function dfs(index, nextIndex) {
    if (index < 0 || nextIndex < 0 || index >= rowCount || nextIndex >= columnCount || grid[index][nextIndex] !== '1') {
      return;
    }
    grid[index][nextIndex] = '0';
    dfs(index + 1, nextIndex);
    dfs(index - 1, nextIndex);
    dfs(index, nextIndex + 1);
    dfs(index, nextIndex - 1);
  }

  for (let index = 0; index < rowCount; index++) {
    for (let nextIndex = 0; nextIndex < columnCount; nextIndex++) {
      if (grid[index][nextIndex] === '1') {
        islandCount++;
        dfs(index, nextIndex);
      }
    }
  }

  return islandCount;
}`,testCases:[{input:[[["1","1","0"],["0","1","0"],["1","0","1"]]],output:3}]},{slug:"min-window-substring",title:"Minimum Window Substring",difficulty:"medium",description:"Return minimum window in s containing all chars of t.",examples:['"ADOBECODEBANC","ABC" → "BANC"'],functionSignature:"function minWindow(s,t) {}",starterCode:`function minWindow(text, target) {
  const need = {};
  let needCnt = 0;

  for (const character of target) {
    need[character] = (need[character] || 0) + 1;
    needCnt++;
  }

  let left = 0;
  let result = "";
  let best = Infinity;

  for (let right = 0; right < text.length; right++) {
    const character = text[right];

    if (need[character] > 0) {
      needCnt--;
    }
    need[character] = (need[character] || 0) - 1;

    while (needCnt === 0) {
      if (right - left + 1 < best) {
        best = right - left + 1;
        result = text.slice(left, right + 1);
      }

      const leftCharacter = text[left];
      need[leftCharacter]++;

      if (need[leftCharacter] > 0) {
        needCnt++;
      }
      left++;
    }
  }

  return result;
}`,testCases:[{input:["ADOBECODEBANC","ABC"],output:"BANC"}]},{slug:"decode-ways",title:"Decode Ways",difficulty:"medium",description:"Given string digits, return number of ways to decode.",examples:['"12" → 2'],functionSignature:"function numDecodings(s) {}",starterCode:`function numDecodings(text) {
  if (!text || text[0] === '0') {
    return 0;
  }

  let previousTwo = 1;
  let previousOne = 1;

  for (let index = 1; index < text.length; index++) {
    let currentWays = 0;

    if (text[index] !== '0') {
      currentWays += previousOne;
    }

    const twoDigitValue = +(text[index - 1] + text[index]);

    if (twoDigitValue >= 10 && twoDigitValue <= 26) {
      currentWays += previousTwo;
    }
    previousTwo = previousOne;
    previousOne = currentWays;
  }

  return previousOne;
}`,testCases:[{input:["12"],output:2}]}],Ap=[{slug:"trapping-rain-water",title:"Trapping Rain Water",difficulty:"hard",description:"Compute how much water can be trapped after raining.",examples:["[0,1,0,2,1,0,1,3,2,1,2,1] → 6"],functionSignature:"function trap(height) {}",starterCode:`function trap(heights) {
  let left = 0;
  let right = heights.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let trappedWater = 0;

  while (left < right) {
    if (heights[left] < heights[right]) {
      leftMax = Math.max(leftMax, heights[left]);
      trappedWater += leftMax - heights[left];
      left++;
    } else {
      rightMax = Math.max(rightMax, heights[right]);
      trappedWater += rightMax - heights[right];
      right--;
    }
  }

  return trappedWater;
}`,testCases:[{input:[[0,1,0,2,1,0,1,3,2,1,2,1]],output:6}]},{slug:"median-two-arrays",title:"Median of Two Sorted Arrays",difficulty:"hard",description:"Return the median of two sorted arrays.",examples:["[1,3] & [2] → 2"],functionSignature:"function findMedianSortedArrays(a,b) {}",starterCode:`function findMedianSortedArrays(firstArray, secondArray) {
  if (firstArray.length > secondArray.length) {
    return findMedianSortedArrays(secondArray, firstArray);
  }

  const total = firstArray.length + secondArray.length;
  const half = Math.floor((total + 1) / 2);
  let left = 0;
  let right = firstArray.length;

  while (left <= right) {
    const index = Math.floor((left + right) / 2);
    const nextIndex = half - index;
    const firstLeft = index === 0 ? -Infinity : firstArray[index - 1];
    const firstRight = index === firstArray.length ? Infinity : firstArray[index];
    const secondLeft = nextIndex === 0 ? -Infinity : secondArray[nextIndex - 1];
    const secondRight = nextIndex === secondArray.length ? Infinity : secondArray[nextIndex];

    if (firstLeft <= secondRight && secondLeft <= firstRight) {
      if (total % 2) {
        return Math.max(firstLeft, secondLeft);
      }

      return (Math.max(firstLeft, secondLeft) + Math.min(firstRight, secondRight)) / 2;
    }

    if (firstLeft > secondRight) {
      right = index - 1;
    } else {
      left = index + 1;
    }
  }
}`,testCases:[{input:[[1,3],[2]],output:2}]},{slug:"merge-k-sorted-arrays",title:"Merge k Sorted Arrays",difficulty:"hard",description:"Merge k sorted arrays into one sorted array.",examples:["[[1,4,5],[1,3,4],[2,6]] → [1,1,2,3,4,4,5,6]"],functionSignature:"function mergeKArrays(arrs) {}",starterCode:`function mergeKArrays(first) {
  function merge(left, right) {
    const result = [];
    let index = 0;
    let nextIndex = 0;

    while (index < left.length || nextIndex < right.length) {
      if (nextIndex === right.length || index < left.length && left[index] <= right[nextIndex]) {
        result.push(left[index]);
        index++;
      } else {
        result.push(right[nextIndex]);
        nextIndex++;
      }
    }

    return result;
  }

  while (first.length > 1) {
    const next = [];

    for (let index = 0; index < first.length; index += 2) {
      next.push(index + 1 < first.length ? merge(first[index], first[index + 1]) : first[index]);
    }
    first = next;
  }

  return first[0] || [];
}`,testCases:[{input:[[[1,4,5],[1,3,4],[2,6]]],output:[1,1,2,3,4,4,5,6]}]},{slug:"word-ladder",title:"Word Ladder",difficulty:"hard",description:"Length of shortest transformation from beginWord to endWord.",examples:['"hit","cog",["hot","dot","dog","lot","log","cog"] → 5'],functionSignature:"function ladderLength(begin,end,wordList) {}",starterCode:`function ladderLength(beginWord, endWord, wordList) {
  const availableWords = new Set(wordList);

  if (!availableWords.has(endWord)) {
    return 0;
  }

  const queue = [[beginWord, 1]];

  while (queue.length) {
    const [w, d] = queue.shift();

    if (w === endWord) {
      return d;
    }

    for (let index = 0; index < w.length; index++) {
      for (const character of 'abcdefghijklmnopqrstuvwxyz') {
        const nextWord = w.slice(0, index) + character + w.slice(index + 1);

        if (availableWords.has(nextWord)) {
          availableWords.delete(nextWord);
          queue.push([nextWord, d + 1]);
        }
      }
    }
  }

  return 0;
}`,testCases:[{input:["hit","cog",["hot","dot","dog","lot","log","cog"]],output:5}]},{slug:"n-queens",title:"N Queens",difficulty:"hard",description:"Return all distinct solutions to the n-queens puzzle.",examples:["n=4 → 2 solutions"],functionSignature:"function solveNQueens(n) {}",starterCode:`function solveNQueens(boardSize) {
  const result = [];
  const values = Array(boardSize);
  const items = values.fill(0);
  const board = items.map(() => {
    const values = Array(boardSize);

    return values.fill('.');
  });
  const columns = new Set();
  const diagonals = new Set();
  const antiDiagonals = new Set();
  function bt(row) {
    if (row === boardSize) {
      result.push(board.map(value => {
        return value.join('');
      }));

      return;
    }

    for (let column = 0; column < boardSize; column++) {
      if (columns.has(column) || diagonals.has(row - column) || antiDiagonals.has(row + column)) {
        continue;
      }
      columns.add(column);
      diagonals.add(row - column);
      antiDiagonals.add(row + column);
      board[row][column] = 'Q';
      bt(row + 1);
      board[row][column] = '.';
      columns.delete(column);
      diagonals.delete(row - column);
      antiDiagonals.delete(row + column);
    }
  }
  bt(0);

  return result;
}`,testCases:[{input:[4],output:[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]}]},{slug:"sudoku-solver",title:"Sudoku Solver",difficulty:"hard",description:"Solve a 9x9 Sudoku board.",examples:["Return solved board"],functionSignature:"function solveSudoku(board) {}",starterCode:`function solveSudoku(board) {
  function ok(row, column, digit) {
    for (let index = 0; index < 9; index++) {
      const rowHasValue = board[row][index] === digit;
      const columnHasValue = board[index][column] === digit;
      const boxRow = Math.floor(row / 3) * 3 + Math.floor(index / 3);
      const boxColumn = Math.floor(column / 3) * 3 + index % 3;
      const boxHasValue = board[boxRow][boxColumn] === digit;

      if (rowHasValue || columnHasValue || boxHasValue) {
        return false;
      }
    }

    return true;
  }
  function dfs() {
    for (let row = 0; row < 9; row++) {
      for (let column = 0; column < 9; column++) {
        if (board[row][column] === '.') {
          for (const digit of '123456789') {
            if (ok(row, column, digit)) {
              board[row][column] = digit;

              if (dfs()) {
                return true;
              }
              board[row][column] = '.';
            }
          }

          return false;
        }
      }
    }

    return true;
  }
  dfs();

  return board;
}`,testCases:[{input:[[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]],output:"solved"}]},{slug:"edit-distance",title:"Edit Distance",difficulty:"hard",description:"Minimum edit distance between two strings.",examples:['"horse","ros" → 3'],functionSignature:"function minDistance(a,b) {}",starterCode:`function minDistance(firstWord, secondWord) {
  const firstLength = firstWord.length;
  const secondLength = secondWord.length;
  const dp = Array.from({
    length: firstLength + 1
  }, () => {
    const values = Array(secondLength + 1);

    return values.fill(0);
  });

  for (let index = 0; index <= firstLength; index++) {
    dp[index][0] = index;
  }

  for (let nextIndex = 0; nextIndex <= secondLength; nextIndex++) {
    dp[0][nextIndex] = nextIndex;
  }

  for (let index = 1; index <= firstLength; index++) {
    for (let nextIndex = 1; nextIndex <= secondLength; nextIndex++) {
      if (firstWord[index - 1] === secondWord[nextIndex - 1]) {
        dp[index][nextIndex] = dp[index - 1][nextIndex - 1];
      } else {
        const deleteCost = dp[index - 1][nextIndex];
        const insertCost = dp[index][nextIndex - 1];
        const replaceCost = dp[index - 1][nextIndex - 1];
        dp[index][nextIndex] = 1 + Math.min(deleteCost, insertCost, replaceCost);
      }
    }
  }

  return dp[firstLength][secondLength];
}`,testCases:[{input:["horse","ros"],output:3}]},{slug:"regex-matching",title:"Regular Expression Matching",difficulty:"hard",description:"Implement regex matching with '.' and '*'.",examples:['"aa","a*" → true'],functionSignature:"function isMatch(s,p) {}",starterCode:`function isMatch(text, pattern) {
  const textLength = text.length;
  const patternLength = pattern.length;
  const dp = Array.from({
    length: textLength + 1
  }, () => {
    const values = Array(patternLength + 1);

    return values.fill(false);
  });
  dp[0][0] = true;

  for (let nextIndex = 2; nextIndex <= patternLength; nextIndex++) {
    if (pattern[nextIndex - 1] === '*') {
      dp[0][nextIndex] = dp[0][nextIndex - 2];
    }
  }

  for (let index = 1; index <= textLength; index++) {
    for (let nextIndex = 1; nextIndex <= patternLength; nextIndex++) {
      if (pattern[nextIndex - 1] !== '*') {
        dp[index][nextIndex] = dp[index - 1][nextIndex - 1] && (pattern[nextIndex - 1] === '.' || pattern[nextIndex - 1] === text[index - 1]);
      } else {
        dp[index][nextIndex] = dp[index][nextIndex - 2] || (pattern[nextIndex - 2] === '.' || pattern[nextIndex - 2] === text[index - 1]) && dp[index - 1][nextIndex];
      }
    }
  }

  return dp[textLength][patternLength];
}`,testCases:[{input:["aa","a*"],output:!0}]},{slug:"sliding-window-maximum",title:"Sliding Window Maximum",difficulty:"hard",description:"Return max sliding window of size k.",examples:["[1,3,-1,-3,5,3,6,7], k=3 → [3,3,5,5,6,7]"],functionSignature:"function maxSlidingWindow(nums,k) {}",starterCode:`function maxSlidingWindow(nums, k) {
  const deque = [];
  const result = [];

  for (let index = 0; index < nums.length; index++) {
    while (deque.length && deque[0] <= index - k) {
      deque.shift();
    }

    while (deque.length && nums[deque[deque.length - 1]] <= nums[index]) {
      deque.pop();
    }
    deque.push(index);

    if (index >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}`,testCases:[{input:[[1,3,-1,-3,5,3,6,7],3],output:[3,3,5,5,6,7]}]},{slug:"burst-balloons",title:"Burst Balloons",difficulty:"hard",description:"Max coins by bursting balloons in optimal order.",examples:["[3,1,5,8] → 167"],functionSignature:"function maxCoins(nums) {}",starterCode:`function maxCoins(nums) {
  const balloons = [1, ...nums, 1];
  const n = balloons.length;
  const dp = Array.from({
    length: n
  }, () => {
    const values = Array(n);

    return values.fill(0);
  });

  for (let length = 2; length < n; length++) {
    for (let left = 0; left + length < n; left++) {
      const right = left + length;

      for (let last = left + 1; last < right; last++) {
        dp[left][right] = Math.max(dp[left][right], balloons[left] * balloons[last] * balloons[right] + dp[left][last] + dp[last][right]);
      }
    }
  }

  return dp[0][n - 1];
}`,testCases:[{input:[[3,1,5,8]],output:167}]},{slug:"largest-rectangle-histogram",title:"Largest Rectangle in Histogram",difficulty:"hard",description:"Find area of largest rectangle in histogram.",examples:["[2,1,5,6,2,3] → 10"],functionSignature:"function largestRectangleArea(heights) {}",starterCode:`function largestRectangleArea(heights) {
  const increasingIndices = [];
  let maxArea = 0;

  for (let rightBoundary = 0; rightBoundary <= heights.length; rightBoundary++) {
    const currentHeight = rightBoundary === heights.length ? 0 : heights[rightBoundary];

    while (increasingIndices.length > 0 && currentHeight < heights[increasingIndices[increasingIndices.length - 1]]) {
      const rectangleHeight = heights[increasingIndices.pop()];
      const leftBoundary = increasingIndices.length > 0 ? increasingIndices[increasingIndices.length - 1] + 1 : 0;
      const rectangleWidth = rightBoundary - leftBoundary;
      const currentArea = rectangleHeight * rectangleWidth;

      if (currentArea > maxArea) {
        maxArea = currentArea;
      }
    }
    increasingIndices.push(rightBoundary);
  }

  return maxArea;
}`,testCases:[{input:[[2,1,5,6,2,3]],output:10}]},{slug:"longest-consecutive",title:"Longest Consecutive Sequence",difficulty:"hard",description:"Return length of longest consecutive sequence.",examples:["[100,4,200,1,3,2] → 4"],functionSignature:"function longestConsecutive(nums) {}",starterCode:`function longestConsecutive(nums) {
  const values = new Set(nums);
  let best = 0;

  for (const value of values) {
    if (!values.has(value - 1)) {
      let nextValue = value;
      let length = 1;

      while (values.has(nextValue + 1)) {
        nextValue++;
        length++;
      }
      best = Math.max(best, length);
    }
  }

  return best;
}`,testCases:[{input:[[100,4,200,1,3,2]],output:4}]},{slug:"min-window-subsequence",title:"Minimum Window Subsequence",difficulty:"hard",description:"Minimum window in S which contains T as a subsequence.",examples:['"abcdebdde","bde" → "bcde"'],functionSignature:"function minWindowSubsequence(S,T) {}",starterCode:`function minWindowSubsequence(S, T) {
  let start = -1;
  let windowLength = Infinity;

  for (let index = 0; index < S.length; index++) {
    if (S[index] !== T[0]) {
      continue;
    }

    let source = index;
    let target = 0;

    while (source < S.length) {
      if (S[source] === T[target]) {
        target++;
      }

      if (target === T.length) {
        break;
      }
      source++;
    }

    if (target < T.length) {
      break;
    }

    let end = source;

    while (source >= index) {
      if (S[source] === T[target - 1]) {
        target--;
      }

      if (target === 0) {
        break;
      }
      source--;
    }

    if (end - source + 1 < windowLength) {
      windowLength = end - source + 1;
      start = source;
    }
  }

  return start === -1 ? '' : S.slice(start, start + windowLength);
}`,testCases:[{input:["abcdebdde","bde"],output:"bcde"}]},{slug:"palindrome-partitioning",title:"Palindrome Partitioning",difficulty:"hard",description:"Return all possible palindrome partitionings.",examples:['"aab" → [["a","a","b"],["aa","b"]]'],functionSignature:"function partition(s) {}",starterCode:`function partition(text) {
  const result = [];
  function isP(left, right) {
    while (left < right) {
      if (text[left] !== text[right]) {
        return false;
      }
      left++;
      right--;
    }

    return true;
  }
  function dfs(index, current) {
    if (index === text.length) {
      result.push(current.slice());

      return;
    }

    for (let nextIndex = index; nextIndex < text.length; nextIndex++) {
      if (isP(index, nextIndex)) {
        current.push(text.slice(index, nextIndex + 1));
        dfs(nextIndex + 1, current);
        current.pop();
      }
    }
  }
  dfs(0, []);

  return result;
}`,testCases:[{input:["aab"],output:[["a","a","b"],["aa","b"]]}]}],Au={"two-sum":`function twoSum(nums, target) {
  for (let index = 0; index < nums.length; index++) {
    for (let nextIndex = index + 1; nextIndex < nums.length; nextIndex++) {
      if (nums[index] + nums[nextIndex] === target) {
        return [index, nextIndex];
      }
    }
  }

  return [];
}`,"fizz-buzz":`function fizzBuzz(limit) {
  return Array.from({
    length: limit
  }, (_, index) => {
    const number = index + 1;

    if (number % 15 === 0) {
      return 'FizzBuzz';
    }

    if (number % 3 === 0) {
      return 'Fizz';
    }

    if (number % 5 === 0) {
      return 'Buzz';
    }

    return String(number);
  });
}`,"move-zeroes":`function moveZeroes(nums) {
  const nonZeroNumbers = nums.filter((number) => {
    return number !== 0;
  });

  const zeroCount = nums.length - nonZeroNumbers.length;
  const zeroes = Array(zeroCount).fill(0);
  const result = nonZeroNumbers.concat(zeroes);

  return result;
}`,"plus-one":`function plusOne(digits) {
  const digitText = digits.join('');
  const number = BigInt(digitText);
  const nextNumber = number + 1n;
  const nextText = String(nextNumber);
  const characters = nextText.split('');
  const result = characters.map((character) => {
    return Number(character);
  });

  return result;
}`,"binary-search":`function search(nums, target) {
  return nums.indexOf(target);
}`,"first-unique-char":`function firstUniqChar(text) {
  return [...text].findIndex(char => {
    return text.indexOf(char) === text.lastIndexOf(char);
  });
}`,"valid-parentheses":`function isValid(text) {
  let previous;
  do {
    previous = text;
    const updatedText2 = text.replace('()', '');
    const updatedText = updatedText2.replace('[]', '');
    text = updatedText.replace('{}', '');
  } while (text !== previous);

  return text.length === 0;
}`,"ransom-note":`function canConstruct(ransom, magazine) {
  return [...ransom].every(char => {
    const index = magazine.indexOf(char);

    if (index < 0) {
      return false;
    }
    magazine = magazine.slice(0, index) + magazine.slice(index + 1);

    return true;
  });
}`,"merge-two-sorted-arrays":`function mergeTwoSorted(arr1, arr2) {
  return [...arr1, ...arr2].sort((first, second) => {
    return first - second;
  });
}`,"remove-duplicates-sorted":`function removeDuplicates(nums) {
  const unique = [...new Set(nums)];
  unique.forEach((value, index) => {
    nums[index] = value;

    return nums[index];
  });

  return unique.length;
}`,"best-time-buy-sell":`function maxProfit(prices) {
  let maxProfit = 0;

  for (let buyDay = 0; buyDay < prices.length; buyDay++) {
    for (let sellDay = buyDay + 1; sellDay < prices.length; sellDay++) {
      const profit = prices[sellDay] - prices[buyDay];
      maxProfit = Math.max(maxProfit, profit);
    }
  }

  return maxProfit;
}`,"intersection-two-arrays-ii":`function intersect(firstArray, secondArray) {
  return firstArray.filter(value => {
    const index = secondArray.indexOf(value);

    if (index < 0) {
      return false;
    }
    secondArray.splice(index, 1);

    return true;
  });
}`,"isomorphic-strings":`function isIsomorphic(firstText, secondText) {
  function getPattern(text) {
    const characters = Array.from(text);
    const firstPositions = characters.map((character) => {
      return text.indexOf(character);
    });
    return firstPositions.join(',');
  }

  const firstPattern = getPattern(firstText);
  const secondPattern = getPattern(secondText);
  return firstPattern === secondPattern;
}`,"climbing-stairs":`function climbStairs(steps, memo = {}) {
  if (steps <= 2) {
    return steps;
  }

  if (memo[steps]) {
    return memo[steps];
  }
  memo[steps] = climbStairs(steps - 1, memo) + climbStairs(steps - 2, memo);

  return memo[steps];
}`,"majority-element":`function majorityElement(nums) {
  return nums.sort((first, second) => {
    return first - second;
  })[Math.floor(nums.length / 2)];
}`,"3sum":`function threeSum(nums) {
  const found = new Map();

  for (let index = 0; index < nums.length; index++) {
    for (let nextIndex = index + 1; nextIndex < nums.length; nextIndex++) {
      for (let k = nextIndex + 1; k < nums.length; k++) {
        if (nums[index] + nums[nextIndex] + nums[k] === 0) {
          const triplet = [nums[index], nums[nextIndex], nums[k]].sort((first, second) => {
            return first - second;
          });
          found.set(triplet.join(','), triplet);
        }
      }
    }
  }

  return [...found.values()];
}`,"longest-substring":`function lengthOfLongestSubstring(text) {
  let best = 0;

  for (let index = 0; index < text.length; index++) {
    for (let nextIndex = index + 1; nextIndex <= text.length; nextIndex++) {
      const part = text.slice(index, nextIndex);

      if (new Set(part).size === part.length) {
        best = Math.max(best, part.length);
      }
    }
  }

  return best;
}`,"group-anagrams":`function groupAnagrams(words) {
  const groups = {};
  words.forEach(word => {
    const sortedItems = [...word].sort();
    const key = sortedItems.join('');
    (groups[key] ??= []).push(word);
  });

  return Object.values(groups);
}`,"top-k-frequent":`function topKFrequent(nums, k) {
  const frequencyMap = new Map();

  for (const num of nums) {
    const currentFrequency = frequencyMap.get(num) || 0;
    const newFrequency = currentFrequency + 1;
    frequencyMap.set(num, newFrequency);
  }

  const frequencyArray = Array.from(frequencyMap.entries());

  frequencyArray.sort((firstItem, secondItem) => {
    const firstFrequency = firstItem[1];
    const secondFrequency = secondItem[1];
    return secondFrequency - firstFrequency;
  });

  const topKItems = frequencyArray.slice(0, k);
  const result = topKItems.map((item) => {
    const number = item[0];
    return number;
  });

  return result;
}`,"product-except-self":`function productExceptSelf(nums) {
  return nums.map((_, skippedIndex) => {
    return nums.reduce((product, number, index) => {
      if (index === skippedIndex) {
        return product;
      }

      return product * number;
    }, 1);
  });
}`,"rotate-image":`function rotate(matrix) {
  return matrix[0].map((_, column) => {
    const mappedItems = matrix.map(row => {
      return row[column];
    });

    return mappedItems.reverse();
  });
}`,"set-matrix-zeroes":`function setZeroes(matrix) {
  const flattenedItems = matrix.flatMap((row, rowIndex) => {
    return row.map((value, columnIndex) => {
      return value === 0 ? [rowIndex, columnIndex] : null;
    });
  });
  const zeroes = flattenedItems.filter(Boolean);

  return matrix.map((row, rowIndex) => {
    return row.map((value, columnIndex) => {
      const mustBeZero = zeroes.some(([zeroRow, zeroColumn]) => {
        return zeroRow === rowIndex || zeroColumn === columnIndex;
      });

      return mustBeZero ? 0 : value;
    });
  });
}`,"spiral-matrix":`function spiralOrder(matrix) {
  const result = [];

  while (matrix.length) {
    result.push(...matrix.shift());
    matrix = matrix[0]?.map((_, index) => {
      return matrix.map(row => {
        return row[row.length - 1 - index];
      });
    }) || [];
  }

  return result;
}`,"word-break":`function wordBreak(text, words, memo = {}) {
  if (!text) {
    return true;
  }

  if (text in memo) {
    return memo[text];
  }
  memo[text] = words.some(word => {
    return text.startsWith(word) && wordBreak(text.slice(word.length), words, memo);
  });

  return memo[text];
}`,"coin-change":`function coinChange(coins, amount) {
  const queue = [[0, 0]];
  const seen = new Set([0]);

  while (queue.length) {
    const [sum, count] = queue.shift();

    if (sum === amount) {
      return count;
    }

    for (const coin of coins) {
      if (sum + coin <= amount && !seen.has(sum + coin)) {
        seen.add(sum + coin);
        queue.push([sum + coin, count + 1]);
      }
    }
  }

  return -1;
}`,"combination-sum":`function combinationSum(candidates, target) {
  const result = [];
  function build(start, rest, chosen) {
    if (rest === 0) {
      return result.push(chosen);
    }

    for (let index = start; index < candidates.length; index++) {
      if (candidates[index] <= rest) {
        build(index, rest - candidates[index], [...chosen, candidates[index]]);
      }
    }
  }
  build(0, target, []);

  return result;
}`,"longest-pal-substring":`function longestPalindrome(text) {
  const parts = [...text].flatMap((_, index) => {
    return [...text.slice(index)].map((_, nextIndex) => {
      return text.slice(index, index + nextIndex + 1);
    });
  });

  return parts.filter(part => {
    const reversedItems = [...part].reverse();

    return part === reversedItems.join('');
  }).sort((first, second) => {
    return second.length - first.length;
  })[0] || '';
}`,"container-most-water":`function maxArea(height) {
  let best = 0;

  for (let left = 0; left < height.length; left++) {
    for (let right = left + 1; right < height.length; right++) {
      best = Math.max(best, Math.min(height[left], height[right]) * (right - left));
    }
  }

  return best;
}`,"meeting-rooms-ii":`function minMeetingRooms(intervals) {
  const flattenedItems = intervals.flatMap(([start, end]) => {
    return [[start, 1], [end, -1]];
  });
  const events = flattenedItems.sort((first, second) => {
    return first[0] - second[0] || first[1] - second[1];
  });
  let rooms = 0;
  let best = 0;
  events.forEach(([, change]) => {
    rooms += change;
    best = Math.max(best, rooms);
  });

  return best;
}`,"kth-largest":`function findKthLargest(nums, k) {
  const target = nums.length - k;
  function select(left, right) {
    const pivot = nums[right];
    let partitionIndex = left;

    for (let index = left; index < right; index++) {
      if (nums[index] <= pivot) {
        [nums[index], nums[partitionIndex]] = [nums[partitionIndex], nums[index]];
        partitionIndex++;
      }
    }
    [nums[partitionIndex], nums[right]] = [nums[right], nums[partitionIndex]];

    if (partitionIndex === target) {
      return nums[partitionIndex];
    }

    if (partitionIndex < target) {
      return select(partitionIndex + 1, right);
    }

    return select(left, partitionIndex - 1);
  }

  return select(0, nums.length - 1);
}`,"course-schedule":`function canFinish(courseCount, prerequisites) {
  const graph = Array.from({
    length: courseCount
  }, () => {
    return [];
  });
  const values = Array(courseCount);
  const state = values.fill(0);
  prerequisites.forEach(([course, prerequisite]) => {
    return graph[course].push(prerequisite);
  });
  function hasCycle(course) {
    if (state[course] === 1) {
      return true;
    }

    if (state[course] === 2) {
      return false;
    }
    state[course] = 1;

    if (graph[course].some(hasCycle)) {
      return true;
    }
    state[course] = 2;

    return false;
  }

  return !graph.some((_, course) => {
    return hasCycle(course);
  });
}`,"number-of-islands":`function numIslands(grid) {
  let count = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[0].length; column++) {
      if (grid[row][column] === '1') {
        count++;
        const queue = [[row, column]];
        grid[row][column] = '0';

        while (queue.length) {
          const [currentRow, currentColumn] = queue.shift();

          for (const [rowOffset, columnOffset] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
            if (grid[currentRow + rowOffset]?.[currentColumn + columnOffset] === '1') {
              grid[currentRow + rowOffset][currentColumn + columnOffset] = '0';
              queue.push([currentRow + rowOffset, currentColumn + columnOffset]);
            }
          }
        }
      }
    }
  }

  return count;
}`,"min-window-substring":`function minWindow(text, target) {
  const valid = part => {
    return [...target].every(char => {
      const countInPart = [...part].filter(value => {
        return value === char;
      }).length;
      const countInTarget = [...target].filter(value => {
        return value === char;
      }).length;

      return countInPart >= countInTarget;
    });
  };

  for (let size = target.length; size <= text.length; size++) {
    for (let index = 0; index + size <= text.length; index++) {
      if (valid(text.slice(index, index + size))) {
        return text.slice(index, index + size);
      }
    }
  }

  return '';
}`,"decode-ways":`function numDecodings(text, memo = {}) {
  if (!text.length) {
    return 1;
  }

  if (text[0] === '0') {
    return 0;
  }

  if (text in memo) {
    return memo[text];
  }

  let ways = numDecodings(text.slice(1), memo);

  if (+text.slice(0, 2) <= 26) {
    ways += numDecodings(text.slice(2), memo);
  }
  memo[text] = ways;

  return memo[text];
}`,"trapping-rain-water":`function trap(height) {
  return height.reduce((water, currentHeight, index) => {
    const left = Math.max(...height.slice(0, index + 1));
    const right = Math.max(...height.slice(index));

    return water + Math.min(left, right) - currentHeight;
  }, 0);
}`,"median-two-arrays":`function findMedianSortedArrays(firstArray, secondArray) {
  const values = [...firstArray, ...secondArray].sort((value, y) => {
    return value - y;
  });
  const middle = Math.floor(values.length / 2);

  return values.length % 2 ? values[middle] : (values[middle - 1] + values[middle]) / 2;
}`,"merge-k-sorted-arrays":`function mergeKArrays(arrays) {
  const flattenedItems = arrays.flat();

  return flattenedItems.sort((first, second) => {
    return first - second;
  });
}`,"word-ladder":`function ladderLength(begin, end, words) {
  const set = new Set(words);
  const queue = [[begin, 1]];

  while (queue.length) {
    const [word, steps] = queue.shift();

    if (word === end) {
      return steps;
    }

    for (const next of [...set]) {
      let differences = 0;

      for (let index = 0; index < word.length; index++) {
        differences += word[index] !== next[index];
      }

      if (differences === 1) {
        set.delete(next);
        queue.push([next, steps + 1]);
      }
    }
  }

  return 0;
}`,"n-queens":`function solveNQueens(boardSize) {
  const result = [];
  function place(row, columns) {
    if (row === boardSize) {
      return result.push(columns.map(column => {
        return '.'.repeat(column) + 'Q' + '.'.repeat(boardSize - column - 1);
      }));
    }

    for (let column = 0; column < boardSize; column++) {
      if (columns.every((old, previousRow) => {
        return old !== column && Math.abs(old - column) !== row - previousRow;
      })) {
        place(row + 1, [...columns, column]);
      }
    }
  }
  place(0, []);

  return result;
}`,"sudoku-solver":`function solveSudoku(board) {
  const flattenedItems = board.flatMap((row, rowIndex) => {
    return row.map((value, columnIndex) => {
      return value === '.' ? [rowIndex, columnIndex] : null;
    });
  });
  const empty = flattenedItems.filter(Boolean);
  function solve(index) {
    if (index === empty.length) {
      return true;
    }

    const [rowIndex, columnIndex] = empty[index];

    for (const value of '123456789') {
      if (!board[rowIndex].includes(value) && !board.some(row => {
        return row[columnIndex] === value;
      }) && !board.slice(rowIndex - rowIndex % 3, rowIndex - rowIndex % 3 + 3).some(row => {
        const selectedItems = row.slice(columnIndex - columnIndex % 3, columnIndex - columnIndex % 3 + 3);

        return selectedItems.includes(value);
      })) {
        board[rowIndex][columnIndex] = value;

        if (solve(index + 1)) {
          return true;
        }
        board[rowIndex][columnIndex] = '.';
      }
    }

    return false;
  }
  solve(0);

  return board;
}`,"edit-distance":`function minDistance(firstText, secondText, memo = {}) {
  const key = firstText + '|' + secondText;

  if (!firstText.length || !secondText.length) {
    return Math.max(firstText.length, secondText.length);
  }

  if (key in memo) {
    return memo[key];
  }

  if (firstText[0] === secondText[0]) {
    return minDistance(firstText.slice(1), secondText.slice(1), memo);
  }

  const deleteCost = minDistance(firstText.slice(1), secondText, memo);
  const insertCost = minDistance(firstText, secondText.slice(1), memo);
  const replaceCost = minDistance(firstText.slice(1), secondText.slice(1), memo);
  memo[key] = 1 + Math.min(deleteCost, insertCost, replaceCost);

  return memo[key];
}`,"regex-matching":`function isMatch(text, pattern, memo = {}) {
  const key = text + '|' + pattern;

  if (key in memo) {
    return memo[key];
  }

  if (!pattern) {
    return !text;
  }

  const first = !!text && (pattern[0] === '.' || pattern[0] === text[0]);

  if (pattern[1] === '*') {
    const skipPattern = isMatch(text, pattern.slice(2), memo);
    const useCharacter = first && isMatch(text.slice(1), pattern, memo);
    memo[key] = skipPattern || useCharacter;
  } else {
    memo[key] = first && isMatch(text.slice(1), pattern.slice(1), memo);
  }

  return memo[key];
}`,"sliding-window-maximum":`function maxSlidingWindow(nums, k) {
  const selectedItems = nums.slice(0, nums.length - k + 1);

  return selectedItems.map((_, index) => {
    return Math.max(...nums.slice(index, index + k));
  });
}`,"burst-balloons":`function maxCoins(nums, memo = new Map()) {
  const key = nums.join(',');

  if (memo.has(key)) {
    return memo.get(key);
  }

  let best = 0;
  nums.forEach((value, index) => {
    const leftValue = nums[index - 1] || 1;
    const rightValue = nums[index + 1] || 1;
    const remaining = nums.filter((_, itemIndex) => {
      return itemIndex !== index;
    });
    const coins = leftValue * value * rightValue + maxCoins(remaining, memo);
    best = Math.max(best, coins);
  });
  memo.set(key, best);

  return best;
}`,"largest-rectangle-histogram":`function largestRectangleArea(heights) {
  let best = 0;

  for (let left = 0; left < heights.length; left++) {
    let min = Infinity;

    for (let right = left; right < heights.length; right++) {
      min = Math.min(min, heights[right]);
      best = Math.max(best, min * (right - left + 1));
    }
  }

  return best;
}`,"longest-consecutive":`function longestConsecutive(nums) {
  const sorted = [...new Set(nums)].sort((first, second) => {
    return first - second;
  });
  let current = sorted.length ? 1 : 0;
  let best = current;

  for (let index = 1; index < sorted.length; index++) {
    current = sorted[index] === sorted[index - 1] + 1 ? current + 1 : 1;
    best = Math.max(best, current);
  }

  return best;
}`,"min-window-subsequence":`function minWindowSubsequence(text, target) {
  for (let size = target.length; size <= text.length; size++) {
    for (let index = 0; index + size <= text.length; index++) {
      const part = text.slice(index, index + size);
      let targetIndex = 0;

      for (const char of part) {
        if (char === target[targetIndex]) {
          targetIndex++;
        }
      }

      if (targetIndex === target.length) {
        return part;
      }
    }
  }

  return '';
}`,"palindrome-partitioning":`function partition(text) {
  if (!text) {
    return [[]];
  }

  return [...text].flatMap((_, index) => {
    const head = text.slice(0, index + 1);

    if (head !== [...head].reverse().join('')) {
      return [];
    }

    const values = partition(text.slice(index + 1));

    return values.map(rest => {
      return [head, ...rest];
    });
  });
}`},Yo={"two-sum":{problem:"Given an array of integers nums and an integer target, find two different elements whose sum equals target. Return their indices.",explanation:"nums[0] + nums[1] = 2 + 7 = 9, so the answer is [0, 1]."},"reverse-string":{problem:"Given a string s, return a new string containing the same characters in reverse order.",explanation:'Reading "hello" from right to left produces "olleh".'},"valid-anagram":{problem:"Given two strings s and t, return true if t contains exactly the same characters as s with the same frequencies, possibly in a different order.",explanation:"Both words contain the same letters the same number of times, so they are anagrams."},palindrome:{problem:"Given a string s, return true if it reads exactly the same from left to right and from right to left.",explanation:'Reversing "racecar" does not change it, so it is a palindrome.'},"fizz-buzz":{problem:'Given an integer n, return strings for every number from 1 through n. Use "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for multiples of both.',explanation:'3 becomes "Fizz" and 5 becomes "Buzz"; all other values remain their number as a string.'},"max-number":{problem:"Given a non-empty array of numbers, return the largest value in the array.",explanation:"Among 1, 5, and 3, the largest value is 5."},"contains-duplicate":{problem:"Given an integer array nums, return true when at least one value occurs more than once. Otherwise, return false.",explanation:"The value 1 appears at indices 0 and 3, so the array contains a duplicate."},"move-zeroes":{problem:"Move every zero to the end of the array while keeping the relative order of all non-zero values. Return the resulting array.",explanation:"The non-zero values stay in the order 1, 3, 12, followed by the two zeroes."},"plus-one":{problem:"An array of digits represents a non-negative integer, with the most significant digit first. Add one and return the resulting digits.",explanation:"The digits [1, 2, 3] represent 123. Adding one gives 124, represented by [1, 2, 4]."},"binary-search":{problem:"Given an integer array nums sorted in ascending order and a target value, return the zero-based index of target. Return -1 if target is not present.",explanation:"The target 9 is at index 4 because array indices start at 0: -1→0, 0→1, 3→2, 5→3, 9→4."},"first-unique-char":{problem:"Given a string s, return the zero-based index of its first character that appears exactly once. Return -1 if every character repeats.",explanation:'The first character "l" occurs only once, and it is at index 0.'},"valid-parentheses":{problem:"Given a string containing only (), [], and {}, return true if every opening bracket is closed by the same type in the correct nested order.",explanation:"Each opening bracket is immediately matched with the correct closing bracket."},"ransom-note":{problem:"Given strings ransom and magazine, return true if ransom can be built using letters from magazine. Each magazine letter may be used at most once.",explanation:'The magazine "aab" supplies two letter a values, enough to build "aa".'},"merge-two-sorted-arrays":{problem:"Given two arrays already sorted in ascending order, merge them into one new array that is also sorted.",explanation:"Taking the smaller available value from the two arrays produces [1, 1, 2, 3, 4, 4]."},"remove-duplicates-sorted":{problem:"Given a sorted array, remove duplicate values in place so each value appears once. Return the number of unique values.",explanation:"The unique prefix becomes [1, 2], so the new length is 2."},"best-time-buy-sell":{problem:"Given daily stock prices, choose one day to buy and a later day to sell. Return the maximum possible profit, or 0 if no profit is possible.",explanation:"Buy at price 1 and later sell at price 6 to earn the maximum profit of 5."},"intersection-two-arrays-ii":{problem:"Given two integer arrays, return their intersection. A value must appear in the result as many times as it occurs in both arrays.",explanation:"The value 2 occurs twice in each array, so the result contains two copies of 2."},"isomorphic-strings":{problem:"Return true if characters in s can be replaced consistently to produce t. Each source character must map to exactly one target character, and two source characters cannot share a target.",explanation:'Mapping e→a and g→d transforms "egg" into "add" consistently.'},"climbing-stairs":{problem:"You can climb either 1 or 2 steps at a time. Given n steps, return the number of distinct ways to reach the top.",explanation:"For 3 steps, the possible sequences are 1+1+1, 1+2, and 2+1, giving 3 ways."},"majority-element":{problem:"Given an array where one value appears more than floor(n / 2) times, return that majority value.",explanation:"The value 3 appears twice in an array of length 3, so it is the majority element."},"3sum":{problem:"Given an integer array, return every unique triplet of different indices whose values sum to zero. Do not include duplicate triplets.",explanation:"The unique value combinations that total zero are [-1, -1, 2] and [-1, 0, 1]."},"longest-substring":{problem:"Given a string s, return the length of its longest contiguous substring containing no repeated characters.",explanation:'"abc" has no repeated characters and length 3; any longer substring in the example repeats a character.'},"group-anagrams":{problem:"Given an array of strings, group words that are anagrams of one another. The order of groups does not matter.",explanation:'"eat", "tea", and "ate" share the same letters; "tan" and "nat" form another group.'},"top-k-frequent":{problem:"Given an integer array nums and integer k, return the k values that occur most frequently.",explanation:"1 occurs three times and 2 occurs twice, making them the two most frequent values."},"product-except-self":{problem:"Return an array answer where answer[i] is the product of every input value except nums[i]. Solve it without using division.",explanation:"For index 0, 2×3×4=24; similarly the other positions produce 12, 8, and 6."},"rotate-image":{problem:"Given an n × n matrix, rotate it 90 degrees clockwise. The standard interview version requires modifying the matrix in place.",explanation:"The first column read bottom-to-top becomes the first row, and the same rule applies to every column."},"set-matrix-zeroes":{problem:"If any matrix cell contains 0, set every cell in that cell’s row and column to 0. Return the updated matrix.",explanation:"The zero at row 1, column 1 causes the entire middle row and middle column to become zero."},"spiral-matrix":{problem:"Given a rectangular matrix, return all values in clockwise spiral order, starting at the top-left corner.",explanation:"Read the top row, right edge, bottom row backward, left edge upward, and finally the center."},"word-break":{problem:"Given a string s and a dictionary of words, return true if s can be split into one or more dictionary words. Words may be reused.",explanation:'"leetcode" can be split into "leet" + "code", and both words are in the dictionary.'},"coin-change":{problem:"Given coin denominations and a target amount, return the minimum number of coins needed to make that amount. Return -1 when it is impossible.",explanation:"11 can be formed with 5 + 5 + 1, using 3 coins, and no two-coin combination works."},"combination-sum":{problem:"Given distinct candidate numbers and a target, return all unique combinations that sum to target. Each candidate may be chosen any number of times.",explanation:"2+2+3 and 7 both equal the target 7, so both combinations are returned."},"longest-pal-substring":{problem:"Given a string s, return its longest contiguous substring that is a palindrome.",explanation:'"bab" reads the same in both directions and is a longest palindrome; "aba" is also valid.'},"container-most-water":{problem:"Each array value is the height of a vertical line. Choose two lines that, with the x-axis, hold the greatest amount of water and return that area.",explanation:"The lines of heights 8 and 7 are 7 positions apart, giving min(8,7) × 7 = 49."},"meeting-rooms-ii":{problem:"Given meeting intervals [start, end], return the minimum number of rooms required so overlapping meetings can run simultaneously.",explanation:"The meetings [0,30] and [5,10] overlap, requiring two rooms; no time requires a third."},"kth-largest":{problem:"Given an unsorted integer array and integer k, return the kth largest value. Duplicate values count as separate positions.",explanation:"In descending order the values are [6,5,4,3,2,1], so the second largest is 5."},"course-schedule":{problem:"There are n courses and prerequisite pairs [course, prerequisite]. Return true if all courses can be completed, or false if the dependencies contain a cycle.",explanation:"Course 0 can be taken first, followed by course 1, so all courses can be completed."},"number-of-islands":{problem:'Given a grid of "1" (land) and "0" (water), count connected groups of land. Cells connect horizontally and vertically, not diagonally.',explanation:"Flood-filling each unvisited land group in the example discovers three separate islands."},"min-window-substring":{problem:"Given strings s and t, return the shortest substring of s containing every character of t with the required frequencies. Return an empty string if none exists.",explanation:'"BANC" contains A, B, and C and no shorter substring of s contains all three.'},"decode-ways":{problem:"Digits map to letters using 1→A through 26→Z. Given a digit string, return how many valid ways it can be decoded.",explanation:'"12" can be decoded as 1+2 (AB) or 12 (L), giving 2 ways.'},"trapping-rain-water":{problem:"Given bar heights of width 1, return how many units of rainwater remain trapped between the bars after raining.",explanation:"Summing the water held above every low position in the elevation map gives 6 units."},"median-two-arrays":{problem:"Given two individually sorted arrays, return the median of all their values. The expected optimal runtime is O(log(m+n)).",explanation:"Combining the values conceptually gives [1,2,3]; the middle value is 2."},"merge-k-sorted-arrays":{problem:"Given k arrays, each sorted in ascending order, merge all their values into one sorted array.",explanation:"Repeatedly selecting the smallest available front value produces [1,1,2,3,4,4,5,6]."},"word-ladder":{problem:"Transform beginWord into endWord by changing one letter at a time. Every intermediate word must be in wordList. Return the number of words in the shortest sequence, or 0.",explanation:"A shortest sequence is hit→hot→dot→dog→cog, containing 5 words."},"n-queens":{problem:"Place n queens on an n × n chessboard so no two queens attack each other. Return every distinct valid board.",explanation:"For n=4 there are exactly two arrangements where no queens share a row, column, or diagonal."},"sudoku-solver":{problem:"Fill the empty cells of a 9 × 9 Sudoku board. Every row, column, and 3 × 3 box must contain digits 1 through 9 exactly once.",explanation:'Use the Sudoku constraints to fill every "." cell and return the completed board.'},"edit-distance":{problem:"Given two strings, return the minimum number of single-character insertions, deletions, or replacements needed to transform the first into the second.",explanation:'"horse" becomes "ros" in 3 operations: replace h→r, delete r, and delete e.'},"regex-matching":{problem:'Implement full-string matching where "." matches any one character and "*" matches zero or more copies of the preceding element.',explanation:'The pattern "a*" can match two copies of a, so it matches the entire string "aa".'},"sliding-window-maximum":{problem:"A window of size k moves from left to right across nums. Return the maximum value inside the window at every position.",explanation:"The maxima of the six size-3 windows are 3, 3, 5, 5, 6, and 7."},"burst-balloons":{problem:"Choose an order to burst all balloons. Bursting i earns left × nums[i] × right using its current neighbors. Return the maximum coins possible.",explanation:"Choosing the optimal burst order for [3,1,5,8] produces a total of 167 coins."},"largest-rectangle-histogram":{problem:"Given histogram bar heights of width 1, return the largest rectangular area that can be formed using consecutive bars.",explanation:"The bars of heights 5 and 6 support a rectangle of height 5 and width 2, giving area 10."},"longest-consecutive":{problem:"Given an unsorted integer array, return the length of its longest sequence of consecutive values. The target solution runs in O(n).",explanation:"The sequence 1,2,3,4 is consecutive and has length 4."},"min-window-subsequence":{problem:"Return the shortest substring of S in which T appears as a subsequence. Characters of T must occur in order but need not be adjacent.",explanation:'"bcde" contains b, d, e in order and is the shortest such window.'},"palindrome-partitioning":{problem:"Split string s in every possible way such that each resulting substring is a palindrome. Return all valid partitions.",explanation:'Both ["a","a","b"] and ["aa","b"] contain only palindromic parts.'}},Mp={scan:{name:"Duyệt tuyến tính",recognition:"Cần tổng hợp một đáp án từ trái sang phải và mỗi phần tử chỉ cần xử lý một lần.",mechanics:["Khởi tạo trạng thái đại diện cho phần dữ liệu đã duyệt.","Đọc từng phần tử, cập nhật trạng thái rồi giữ lại đáp án tốt nhất.","Sau vòng lặp, trạng thái phải đủ để trả lời mà không cần quét lại dữ liệu."]},hash:{name:"Hash Map / Set",recognition:"Bài cần kiểm tra đã gặp, đếm tần suất, ánh xạ hoặc tra cứu nhanh theo khóa.",mechanics:["Biến dữ liệu đã duyệt thành bảng tra cứu thay vì quét lại mảng.","Chọn Set nếu chỉ cần biết có hay không; chọn Map nếu cần lưu thêm count, index hoặc quan hệ.","Đổi thêm bộ nhớ O(n) để thao tác tra cứu trung bình còn O(1)."]},twoPointers:{name:"Two Pointers",recognition:"Dữ liệu có thứ tự, cần so sánh hai đầu hoặc duy trì một vùng hợp lệ mà không cần thử mọi cặp.",mechanics:["Đặt hai con trỏ ở hai đầu hoặc tại vị trí đọc/ghi.","Sau mỗi lần so sánh, chỉ di chuyển con trỏ chắc chắn không thể tạo đáp án tốt hơn.","Chứng minh phần bị bỏ qua không còn cần xét; đó là lý do thuật toán giảm từ hai vòng lặp xuống một lượt."]},slidingWindow:{name:"Sliding Window",recognition:"Đề hỏi đoạn con liên tiếp và điều kiện của đoạn có thể cập nhật khi thêm/bớt một phần tử.",mechanics:["right mở rộng cửa sổ và cập nhật dữ liệu của phần tử mới.","Khi cửa sổ vi phạm hoặc đã đủ điều kiện, left co lại trong vòng while.","Chỉ cập nhật đáp án ở trạng thái phù hợp: cửa sổ hợp lệ dài nhất hoặc cửa sổ đủ điều kiện ngắn nhất."]},stack:{name:"Stack / Monotonic Stack",recognition:"Cần ghép cặp theo thứ tự lồng nhau hoặc tìm phần tử gần nhất còn chưa được xử lý.",mechanics:["Stack giữ những phần tử đang chờ một đối tượng tương ứng ở tương lai.","Khi phần tử mới giải quyết được phần tử trên đỉnh, pop và tính kết quả ngay.","Với monotonic stack, mỗi phần tử chỉ push và pop tối đa một lần nên toàn bộ vẫn O(n)."]},binarySearch:{name:"Binary Search",recognition:"Không gian tìm kiếm có tính đơn điệu: biết một điểm đúng/sai cho phép loại bỏ chắc chắn một nửa.",mechanics:["Định nghĩa rõ miền [left, right] và ý nghĩa của predicate.","Tính mid an toàn, kiểm tra rồi chỉ giữ lại nửa vẫn có thể chứa đáp án.","Điều kiện dừng và cách cập nhật biên phải cùng một quy ước để tránh bỏ sót hoặc lặp vô hạn."]},dynamicProgramming:{name:"Dynamic Programming",recognition:"Bài có subproblem lặp lại và đáp án lớn có thể xây từ các đáp án nhỏ hơn.",mechanics:["Định nghĩa dp[state] bằng một câu đầy đủ trước khi viết code.","Xác định base case, công thức chuyển và thứ tự duyệt để dependency đã được tính.","Có thể nén bộ nhớ nếu trạng thái hiện tại chỉ phụ thuộc một vài lớp trước."]},backtracking:{name:"Backtracking",recognition:"Cần liệt kê cấu hình hợp lệ và mỗi bước phải thử nhiều lựa chọn rồi quay lui.",mechanics:["Chọn một khả năng, ghi nó vào state hiện tại rồi đi sâu.","Nếu vi phạm constraint thì dừng nhánh càng sớm càng tốt.","Sau khi recursion trở về phải hoàn tác chính xác để nhánh kế tiếp nhìn thấy state sạch."]},graph:{name:"Graph Traversal",recognition:"Dữ liệu mô tả node và quan hệ; cần tìm connected component, cycle hoặc đường đi.",mechanics:["Xây adjacency hoặc suy ra neighbor trực tiếp từ dữ liệu.","Đánh dấu visited đúng thời điểm để một node không bị đưa vào frontier nhiều lần.","Dùng BFS cho đường ngắn nhất không trọng số; DFS phù hợp cho flood-fill, cycle và duyệt component."]},heap:{name:"Heap / Priority Queue",recognition:"Liên tục cần lấy phần tử nhỏ nhất/lớn nhất hiện tại nhưng không cần sắp xếp toàn bộ sau mỗi update.",mechanics:["Heap giữ phần tử ưu tiên ở root với push/pop O(log n).","Chỉ giữ k phần tử nếu bài hỏi top k để giảm bộ nhớ và thời gian.","Với k nguồn đã sort, heap chỉ cần chứa phần tử đầu chưa dùng của mỗi nguồn."]},matrix:{name:"Matrix Boundary / Transformation",recognition:"Bài thao tác theo hàng, cột, lớp hoặc cần biến đổi tọa độ trong ma trận.",mechanics:["Định nghĩa rõ row/column hoặc bốn biên top, bottom, left, right.","Mỗi lượt xử lý một lớp hay một hướng rồi thu hẹp miền chưa xử lý.","Kiểm tra ma trận chữ nhật, rỗng và điều kiện biên trước khi truy cập."]},interval:{name:"Sorting / Intervals",recognition:"Quan hệ chỉ trở nên cục bộ sau khi sắp xếp theo start, end hoặc một khóa có ý nghĩa.",mechanics:["Sắp xếp để phần tử liên quan xuất hiện cạnh nhau.","Duyệt một lần và giữ trạng thái của nhóm/interval đang mở.","Xử lý rõ trường hợp hai khoảng chạm nhau có được xem là overlap hay không."]},intervalDP:{name:"Interval Dynamic Programming",recognition:"Đáp án của một đoạn [left, right] phụ thuộc việc chọn một điểm chia hoặc phần tử cuối cùng bên trong đoạn.",mechanics:["Tính đoạn ngắn trước để mọi đoạn con cần thiết đã có đáp án.","Thử từng điểm chia/điểm cuối và kết hợp hai phía độc lập.","Viết rõ ý nghĩa dp[left][right] và giá trị ở ngoài biên để công thức không mơ hồ."]}},qp={"two-sum":{pattern:"hash",approach:"Với mỗi nums[i], tính phần bù target - nums[i]. Nếu phần bù đã có trong Map thì trả hai index; nếu chưa, lưu số hiện tại sau khi kiểm tra để không dùng cùng một phần tử hai lần.",invariant:"Map chỉ chứa giá trị và index nằm trước i.",complexity:"O(n) thời gian, O(n) bộ nhớ.",pitfalls:["Lưu trước khi kiểm tra có thể dùng cùng index hai lần.","Trả value thay vì index."]},"reverse-string":{pattern:"twoPointers",approach:"Chuyển chuỗi thành mảng ký tự, đổi chỗ ký tự ở left và right rồi đưa hai con trỏ vào giữa.",invariant:"Phần nằm ngoài [left, right] đã ở đúng vị trí đảo ngược.",complexity:"O(n) thời gian, O(n) bộ nhớ do string immutable.",pitfalls:["Quên JavaScript string không sửa trực tiếp được.","Chạy tới hết mảng làm swap hai lần."]},"valid-anagram":{pattern:"hash",approach:"Đếm từng ký tự của chuỗi đầu, sau đó trừ bằng ký tự của chuỗi thứ hai. Count thiếu hoặc còn dư nghĩa là không phải anagram.",invariant:"Sau khi xử lý i ký tự của t, Map phản ánh chính xác số ký tự còn có thể dùng từ s.",complexity:"O(n) thời gian, O(k) bộ nhớ với k ký tự khác nhau.",pitfalls:["Không kiểm tra độ dài trước.","Chỉ kiểm tra ký tự tồn tại mà bỏ qua tần suất."]},palindrome:{pattern:"twoPointers",approach:"So sánh ký tự ở hai đầu và tiến dần vào giữa; chỉ một cặp khác nhau là có thể kết luận false.",invariant:"Mọi cặp nằm ngoài hai con trỏ đã đối xứng.",complexity:"O(n) thời gian, O(1) bộ nhớ.",pitfalls:["Không chuẩn hóa input nếu đề cho phép dấu cách/chữ hoa.","So sánh quá nửa chuỗi."]},"fizz-buzz":{pattern:"scan",approach:"Duyệt 1..n và kiểm tra bội của 15 trước, sau đó 3, 5 rồi mới dùng số thường.",invariant:"result đã chứa đáp án đúng cho toàn bộ số từ 1 đến i - 1.",complexity:"O(n) thời gian, O(n) bộ nhớ output.",pitfalls:["Kiểm tra 3 trước 15 làm mất FizzBuzz.","Trả number thay vì string ở nhánh thường."]},"max-number":{pattern:"scan",approach:"Khởi tạo max bằng phần tử đầu rồi cập nhật khi gặp giá trị lớn hơn.",invariant:"Sau index i, max là giá trị lớn nhất của nums[0..i].",complexity:"O(n) thời gian, O(1) bộ nhớ.",pitfalls:["Khởi tạo 0 sẽ sai với mảng toàn số âm.","Không xử lý contract mảng rỗng."]},"contains-duplicate":{pattern:"hash",approach:"Duyệt mảng; nếu Set đã chứa value thì trả true, nếu chưa thì thêm vào.",invariant:"Set chứa đúng mọi giá trị đã xuất hiện trước vị trí hiện tại.",complexity:"O(n) thời gian trung bình, O(n) bộ nhớ.",pitfalls:["Sort làm thay đổi input nếu dùng sort trực tiếp.","Dùng indexOf trong loop thành O(n²)."]},"move-zeroes":{pattern:"twoPointers",approach:"write chỉ vị trí dành cho số khác 0 tiếp theo. Duyệt read, ghi các số khác 0 theo thứ tự rồi lấp phần còn lại bằng 0.",invariant:"nums[0..write-1] là toàn bộ số khác 0 đã đọc, đúng thứ tự ban đầu.",complexity:"O(n) thời gian, O(1) bộ nhớ.",pitfalls:["Làm thay đổi thứ tự số khác 0.","Dùng splice nhiều lần thành O(n²)."]},"plus-one":{pattern:"scan",approach:"Duyệt chữ số từ phải sang trái. Nếu nhỏ hơn 9 thì tăng và kết thúc; nếu bằng 9 thì đặt 0 và tiếp tục carry. Hết mảng vẫn carry thì thêm 1 đầu mảng.",invariant:"Các chữ số bên phải i đã chứa kết quả đúng sau khi truyền carry.",complexity:"O(n) thời gian worst case, O(1) bộ nhớ ngoài output.",pitfalls:["Chuyển cả mảng thành Number gây overflow.","Quên case toàn số 9."]},"binary-search":{pattern:"binarySearch",approach:"So nums[mid] với target; nhỏ hơn thì bỏ nửa trái kể cả mid, lớn hơn thì bỏ nửa phải.",invariant:"Nếu target tồn tại thì luôn nằm trong [left, right].",complexity:"O(log n) thời gian, O(1) bộ nhớ.",pitfalls:["Cập nhật left = mid gây vòng lặp.","Áp dụng khi mảng chưa sort."]},"first-unique-char":{pattern:"hash",approach:"Lượt một đếm frequency; lượt hai đi theo thứ tự gốc và trả index đầu tiên có count bằng 1.",invariant:"Frequency hoàn chỉnh trước khi quyết định ký tự nào xuất hiện đầu tiên.",complexity:"O(n) thời gian, O(k) bộ nhớ.",pitfalls:["Duyệt Map để tìm đầu tiên có thể làm mất ý nghĩa thứ tự tùy cách xây.","Chỉ lưu ký tự trùng mà không đếm."]},"valid-parentheses":{pattern:"stack",approach:"Push dấu mở. Với dấu đóng, pop dấu mở gần nhất và kiểm tra đúng loại; cuối cùng stack phải rỗng.",invariant:"Stack chứa các dấu mở chưa được đóng theo đúng thứ tự lồng nhau.",complexity:"O(n) thời gian, O(n) bộ nhớ.",pitfalls:["Chỉ đếm số lượng mà bỏ qua thứ tự.","Không kiểm tra stack rỗng khi gặp dấu đóng."]},"ransom-note":{pattern:"hash",approach:"Đếm số lần mỗi ký tự có trong magazine, sau đó tiêu thụ count cho từng ký tự ransom.",invariant:"Count là lượng ký tự magazine chưa dùng.",complexity:"O(m+n) thời gian, O(k) bộ nhớ.",pitfalls:["Một ký tự magazine bị dùng nhiều lần.","Dùng includes lặp lại nhưng không loại ký tự đã dùng."]},"merge-two-sorted-arrays":{pattern:"twoPointers",approach:"So phần tử hiện tại của hai mảng, lấy phần nhỏ hơn vào result và tăng đúng con trỏ; khi một mảng hết thì chép phần còn lại.",invariant:"result luôn sorted và chứa đúng mọi phần tử đã đi qua.",complexity:"O(m+n) thời gian, O(m+n) bộ nhớ.",pitfalls:["Quên phần đuôi của mảng chưa hết.","Nhét điều kiện hết mảng vào một biểu thức khó đọc."]},"remove-duplicates-sorted":{pattern:"twoPointers",approach:"read duyệt mảng sorted; write chỉ vị trí unique tiếp theo. Chỉ ghi khi value khác unique cuối cùng.",invariant:"Prefix nums[0..write-1] chứa mỗi giá trị đã gặp đúng một lần.",complexity:"O(n) thời gian, O(1) bộ nhớ.",pitfalls:["Pattern phụ thuộc mảng đã sort.","Trả mảng thay vì độ dài theo contract."]},"best-time-buy-sell":{pattern:"scan",approach:"Giữ minPrice trước ngày hiện tại và tính profit nếu bán hôm nay; cập nhật maxProfit sau mỗi ngày.",invariant:"Trước khi xét bán ở ngày i, minPrice là giá mua thấp nhất trong các ngày 0..i.",complexity:"O(n) thời gian, O(1) bộ nhớ.",pitfalls:["Cho phép bán trước khi mua.","Tìm min và max độc lập nên sai thứ tự thời gian."]},"intersection-two-arrays-ii":{pattern:"hash",approach:"Đếm mảng thứ nhất; duyệt mảng thứ hai, chỉ thêm value nếu count còn dương rồi giảm count.",invariant:"Count lưu số bản sao chưa được ghép của mảng đầu.",complexity:"O(m+n) thời gian, O(min(m,n)) bộ nhớ nếu đếm mảng ngắn hơn.",pitfalls:["Dùng Set làm mất duplicate.","Không giảm count sau khi match."]},"isomorphic-strings":{pattern:"hash",approach:"Duy trì mapping hai chiều s→t và t→s; mỗi cặp ký tự phải nhất quán ở cả hai hướng.",invariant:"Mapping của toàn bộ prefix đã xử lý là song ánh.",complexity:"O(n) thời gian, O(k) bộ nhớ.",pitfalls:["Chỉ map một chiều nên hai ký tự nguồn có thể cùng trỏ một ký tự đích.","Không kiểm tra độ dài."]},"climbing-stairs":{pattern:"dynamicProgramming",approach:"Số cách tới bậc i bằng số cách từ i-1 cộng i-2; chỉ cần giữ hai trạng thái gần nhất.",invariant:"prevOne và prevTwo là đáp án đúng của hai bậc ngay trước bậc đang tính.",complexity:"O(n) thời gian, O(1) bộ nhớ.",pitfalls:["Sai base case n=1/n=2.","Recursion thuần lặp subproblem theo cấp số nhân."]},"majority-element":{pattern:"scan",approach:"Boyer–Moore giữ candidate và balance: cùng candidate thì tăng, khác thì giảm; balance về 0 thì chọn candidate mới.",invariant:"Các cặp giá trị khác nhau trong prefix có thể triệt tiêu mà không làm mất majority thật.",complexity:"O(n) thời gian, O(1) bộ nhớ.",pitfalls:["Thuật toán cần guarantee majority hoặc thêm lượt verify.","Hiểu balance là frequency thật."]},"3sum":{pattern:"twoPointers",approach:"Sort mảng; cố định i rồi dùng left/right tìm hai số có tổng bằng -nums[i], đồng thời bỏ duplicate ở cả ba vị trí.",invariant:"Với i cố định, mọi cặp ngoài [left,right] đã được loại bằng tính đơn điệu của mảng sorted.",complexity:"O(n²) thời gian, O(1) bộ nhớ ngoài output.",pitfalls:["Không sort nhưng vẫn di chuyển pointer theo tổng.","Không skip duplicate nên trả kết quả lặp."]},"longest-substring":{pattern:"slidingWindow",approach:"right thêm ký tự; Map lưu index mới nhất. Khi gặp ký tự trùng trong cửa sổ, nhảy left qua vị trí cũ rồi cập nhật độ dài lớn nhất.",invariant:"Substring s[left..right] không chứa ký tự lặp.",complexity:"O(n) thời gian, O(k) bộ nhớ.",pitfalls:["Cho left lùi ngược khi duplicate nằm ngoài window.","Nhầm substring liên tiếp với subsequence."]},"group-anagrams":{pattern:"hash",approach:"Chuẩn hóa mỗi word thành key bằng ký tự đã sort hoặc vector tần suất; các word cùng key được push vào cùng group.",invariant:"Hai từ là anagram khi và chỉ khi canonical key bằng nhau.",complexity:"O(n·k log k) với key sort, O(n·k) với count cố định.",pitfalls:["Dùng object/array làm Map key nhưng tạo reference khác.","Không tính duplicate character."]},"top-k-frequent":{pattern:"heap",approach:"Đếm frequency rồi giữ min-heap tối đa k entry; frequency lớn hơn sẽ đẩy entry nhỏ nhất ra.",invariant:"Sau mỗi entry, heap chứa tối đa k frequency lớn nhất đã xét.",complexity:"O(n log k) thời gian, O(n) bộ nhớ count.",pitfalls:["Sort toàn bộ vẫn đúng nhưng O(n log n).","Nhầm min-heap với max-heap khi chỉ giữ k phần tử."]},"product-except-self":{pattern:"scan",approach:"Lượt trái ghi prefix product trước i vào result; lượt phải nhân thêm suffix product sau i.",invariant:"Sau lượt đầu result[i] là tích bên trái; khi quét ngược suffix là tích bên phải chưa gồm i.",complexity:"O(n) thời gian, O(1) extra space ngoài output.",pitfalls:["Dùng division sai constraint và case zero.","Nhân chính nums[i] vào prefix/suffix quá sớm."]},"rotate-image":{pattern:"matrix",approach:"Transpose ma trận qua đường chéo chính rồi reverse từng row để được quay 90° theo chiều kim đồng hồ.",invariant:"Transpose đổi (row,col) thành (col,row); reverse hoàn tất ánh xạ sang (col,n-1-row).",complexity:"O(n²) thời gian, O(1) bộ nhớ.",pitfalls:["Swap cả hai nửa làm hoàn tác transpose.","Dùng ma trận mới khi đề yêu cầu in-place."]},"set-matrix-zeroes":{pattern:"matrix",approach:"Dùng row đầu và column đầu làm marker; hai cờ riêng giữ việc row/column đầu ban đầu có zero hay không.",invariant:"Sau lượt đánh dấu, marker mô tả chính xác hàng/cột phải zero mà chưa phá dữ liệu cần đọc.",complexity:"O(mn) thời gian, O(1) bộ nhớ.",pitfalls:["Zero ngay khi phát hiện làm lan zero giả.","Quên xử lý riêng hàng/cột dùng làm marker."]},"spiral-matrix":{pattern:"matrix",approach:"Giữ bốn biên và đọc lần lượt top row, right column, bottom row ngược, left column ngược; sau mỗi cạnh thu biên.",invariant:"Mọi ô ngoài bốn biên đã được thêm đúng một lần.",complexity:"O(mn) thời gian, O(1) extra space.",pitfalls:["Không kiểm tra biên trước cạnh dưới/trái nên đọc lặp ở một hàng/cột.","Sai hướng vòng lặp ngược."]},"word-break":{pattern:"dynamicProgramming",approach:"dp[i] cho biết prefix s[0..i) tách được. Thử vị trí j trước i; nếu dp[j] và s[j..i) có trong dictionary thì dp[i] đúng.",invariant:"Khi tính dp[i], mọi prefix ngắn hơn đã có đáp án chính xác.",complexity:"O(n²) phép kiểm tra substring, O(n) bộ nhớ.",pitfalls:["Greedy chọn word dài nhất không luôn đúng.","Quên dp[0]=true cho prefix rỗng."]},"coin-change":{pattern:"dynamicProgramming",approach:"dp[x] là số coin ít nhất tạo amount x. Với mỗi x, thử từng coin và lấy 1 + dp[x-coin].",invariant:"Khi tính amount tăng dần, dp[x-coin] đã là tối ưu.",complexity:"O(amount·coins) thời gian, O(amount) bộ nhớ.",pitfalls:["Khởi tạo unreachable bằng 0.","Greedy coin lớn nhất không đúng với mọi bộ denomination."]},"combination-sum":{pattern:"backtracking",approach:"Ở mỗi level thử candidate từ startIndex; giữ nguyên index khi được dùng lại và tăng index để tránh permutation trùng.",invariant:"path có tổng target - remaining và index không giảm nên mỗi combination có một thứ tự canonical.",complexity:"Exponential theo số tổ hợp, O(target/minCandidate) stack.",pitfalls:["Reset index về 0 tạo permutation lặp.","Không dừng khi remaining âm."]},"longest-pal-substring":{pattern:"twoPointers",approach:"Xem mỗi vị trí và khe giữa hai vị trí là tâm; mở rộng hai phía khi ký tự bằng nhau rồi giữ đoạn dài nhất.",invariant:"Trong mỗi lần expand, s[left+1..right-1] đã là palindrome.",complexity:"O(n²) thời gian, O(1) bộ nhớ.",pitfalls:["Chỉ xét tâm lẻ mà bỏ palindrome chẵn.","Sai chỉ số khi lấy substring với right exclusive."]},"container-most-water":{pattern:"twoPointers",approach:"Đặt hai pointer ở hai đầu, tính area rồi bỏ phía thấp hơn vì giữ chiều cao thấp mà giảm width không thể tốt hơn.",invariant:"Mọi cặp bị loại cùng pointer thấp đã có area không vượt candidate vừa xét.",complexity:"O(n) thời gian, O(1) bộ nhớ.",pitfalls:["Di chuyển phía cao hơn làm mất chứng minh.","Dùng khoảng cách right-left+1."]},"meeting-rooms-ii":{pattern:"interval",approach:"Sort start và end riêng; nếu start kế tiếp trước end sớm nhất thì cần thêm room, ngược lại giải phóng room rồi tiến end.",invariant:"rooms là số cuộc họp đang hoạt động tại thời điểm start đang xét.",complexity:"O(n log n) thời gian, O(n) bộ nhớ.",pitfalls:["Dùng <= khi meeting kết thúc đúng lúc meeting khác bắt đầu.","Chỉ merge interval nên không đếm overlap tối đa."]},"kth-largest":{pattern:"heap",approach:"Giữ min-heap size k; sau khi duyệt hết, root là phần tử lớn thứ k.",invariant:"Heap chứa k giá trị lớn nhất của prefix đã đọc.",complexity:"O(n log k) thời gian, O(k) bộ nhớ.",pitfalls:["Dùng Set làm mất duplicate.","Trả root trước khi heap đủ k."]},"course-schedule":{pattern:"graph",approach:"Xây graph prerequisite và indegree; Kahn BFS bắt đầu bằng course indegree 0, giảm indegree neighbor khi hoàn thành.",invariant:"Queue chỉ chứa course đã thỏa toàn bộ prerequisite; processed đếm node có thể học.",complexity:"O(V+E) thời gian, O(V+E) bộ nhớ.",pitfalls:["Đảo chiều edge nhưng tính indegree không tương ứng.","Chỉ kiểm tra từng cặp mà không phát hiện cycle dài."]},"number-of-islands":{pattern:"graph",approach:"Duyệt từng cell; gặp land chưa thăm thì tăng count và DFS/BFS đánh dấu toàn bộ land nối liền.",invariant:"Sau flood-fill, component vừa phát hiện sẽ không được đếm lại.",complexity:"O(rows·cols) thời gian, O(rows·cols) worst-case stack/queue.",pitfalls:["Tính diagonal là connected khi đề chỉ cho bốn hướng.","Đánh dấu visited quá muộn gây lặp."]},"min-window-substring":{pattern:"slidingWindow",approach:"Đếm requirement của t; right mở rộng và tăng formed khi một ký tự đạt đủ count. Khi formed đủ, co left để lấy window ngắn nhất.",invariant:"formed đếm số loại ký tự đã đạt đúng yêu cầu, không phải tổng ký tự match.",complexity:"O(|s|+|t|) thời gian, O(k) bộ nhớ.",pitfalls:["Chỉ dùng Set nên sai khi t có duplicate.","Cập nhật đáp án khi window chưa đủ."]},"decode-ways":{pattern:"dynamicProgramming",approach:"dp[i] đếm cách decode prefix dài i; cộng dp[i-1] nếu một chữ số hợp lệ và dp[i-2] nếu cặp 10..26 hợp lệ.",invariant:"Mỗi cách decode prefix i kết thúc bằng đúng một chữ số hoặc một cặp chữ số.",complexity:"O(n) thời gian, O(1) bộ nhớ khi nén.",pitfalls:['Cho "0" đứng riêng.',"Chấp nhận cặp bắt đầu bằng 0."]},"trapping-rain-water":{pattern:"twoPointers",approach:"Giữ leftMax/rightMax. Phía có max nhỏ hơn quyết định lượng nước chắc chắn tại pointer đó, sau đó di chuyển phía ấy.",invariant:"Ở phía được xử lý, biên đối diện đủ cao nên nước chỉ phụ thuộc max của chính phía đó.",complexity:"O(n) thời gian, O(1) bộ nhớ.",pitfalls:["Dùng height hiện tại thay vì max biên.","Cộng lượng nước âm."]},"median-two-arrays":{pattern:"binarySearch",approach:"Binary search vị trí partition trên mảng ngắn; partition còn lại được suy ra để nửa trái có đúng số phần tử và maxLeft <= minRight.",invariant:"Tổng kích thước hai nửa cố định; mỗi lần so biên biết phải dịch partition trái hay phải.",complexity:"O(log min(m,n)) thời gian, O(1) bộ nhớ.",pitfalls:["Không search mảng ngắn hơn.","Sai sentinel ở partition 0 hoặc cuối mảng."]},"merge-k-sorted-arrays":{pattern:"heap",approach:"Push phần tử đầu của mỗi mảng cùng arrayIndex/valueIndex; mỗi lần pop min thì push phần tử kế tiếp cùng mảng.",invariant:"Heap chứa phần tử chưa dùng nhỏ nhất của mỗi nguồn còn dữ liệu.",complexity:"O(N log k) thời gian, O(k) bộ nhớ.",pitfalls:["Push toàn bộ N phần tử làm heap quá lớn.","Không lưu nguồn nên không biết phần tử kế tiếp."]},"word-ladder":{pattern:"graph",approach:"Mỗi word là node; BFS tạo neighbor bằng thay từng ký tự. Đánh dấu khi enqueue để tầng đầu chạm end là đường ngắn nhất.",invariant:"Queue xử lý theo số bước tăng dần; word visited đã có đường ngắn nhất.",complexity:"O(N·L·alphabet) thời gian, O(N) bộ nhớ.",pitfalls:["DFS không đảm bảo ngắn nhất.","Đánh dấu khi dequeue làm enqueue trùng rất nhiều."]},"n-queens":{pattern:"backtracking",approach:"Đặt một queen cho từng row; Set lưu column, diagonal row-col và anti-diagonal row+col đang bị chiếm.",invariant:"Trước row hiện tại, board là cấu hình hợp lệ với đúng một queen mỗi row.",complexity:"Khoảng O(n!) thời gian, O(n) state ngoài output.",pitfalls:["Quên hoàn tác cả ba Set.","Quét lại board để kiểm tra khiến mỗi lựa chọn đắt hơn."]},"sudoku-solver":{pattern:"backtracking",approach:"Chọn ô trống, thử digit không có trong row/column/box; ghi digit, recurse và xóa lại nếu nhánh thất bại.",invariant:"Mọi ô đã điền tạm thời luôn thỏa ba constraint Sudoku.",complexity:"Exponential worst case, O(số ô trống) stack.",pitfalls:["Không hoàn tác board/Set khi backtrack.","Tính sai box index."]},"edit-distance":{pattern:"dynamicProgramming",approach:"dp[i][j] là số phép đổi prefix a dài i thành prefix b dài j. Ký tự cuối giống thì lấy đường chéo; khác thì 1 + min(delete, insert, replace).",invariant:"Mỗi transition xử lý thao tác cuối cùng nên các prefix nhỏ hơn đã tối ưu.",complexity:"O(mn) thời gian, O(mn) bộ nhớ; có thể nén O(n).",pitfalls:["Nhầm insert/delete indices.","Quên base case đổi với chuỗi rỗng."]},"regex-matching":{pattern:"dynamicProgramming",approach:"dp[i][j] match prefix. Với *, hoặc bỏ cặp x* bằng dp[i][j-2], hoặc nếu x match ký tự hiện tại thì dùng dp[i-1][j].",invariant:"Mỗi state mô tả full match của hai prefix, không phải contains match.",complexity:"O(mn) thời gian, O(mn) bộ nhớ.",pitfalls:["Hiểu * như wildcard độc lập.","Không initialize pattern như a*b* match chuỗi rỗng."]},"sliding-window-maximum":{pattern:"stack",approach:"Deque giữ index có value giảm dần. Bỏ index hết window ở đầu và bỏ value nhỏ hơn ở cuối trước khi thêm index mới.",invariant:"Đầu deque luôn là max của window; mọi index trong deque còn hợp lệ và value giảm dần.",complexity:"O(n) thời gian, O(k) bộ nhớ.",pitfalls:["Lưu value nên khó biết đã ra khỏi window.","Dùng shift thường xuyên trên Array lớn có thể tốn chi phí."]},"burst-balloons":{pattern:"intervalDP",approach:"Đảo góc nhìn: chọn balloon k bị nổ cuối trong đoạn, khi đó hai neighbor là biên cố định; kết hợp tối ưu đoạn trái, reward k và đoạn phải.",invariant:"dp[left][right] là coin tối đa khi chỉ các balloon bên trong đoạn còn cần xử lý.",complexity:"O(n³) thời gian, O(n²) bộ nhớ.",pitfalls:["Chọn balloon nổ đầu khiến neighbor thay đổi khó biểu diễn.","Sai padding 1 ở hai biên."]},"largest-rectangle-histogram":{pattern:"stack",approach:"Monotonic stack giữ index cột tăng dần. Khi gặp cột thấp hơn, pop cột cao và dùng vị trí hiện tại làm biên phải, đỉnh mới làm biên trái.",invariant:"Các index trong stack có height tăng và chưa tìm thấy cột thấp hơn bên phải.",complexity:"O(n) thời gian, O(n) bộ nhớ.",pitfalls:["Tính width sai sau pop.","Không thêm sentinel hoặc flush stack cuối vòng."]},"longest-consecutive":{pattern:"hash",approach:"Đưa mọi số vào Set; chỉ bắt đầu đếm từ x khi x-1 không tồn tại, rồi đi lên x+1 cho tới khi chuỗi kết thúc.",invariant:"Mỗi consecutive run chỉ được mở từ phần tử nhỏ nhất của run.",complexity:"O(n) thời gian trung bình, O(n) bộ nhớ.",pitfalls:["Bắt đầu từ mọi số thành O(n²) ở run dài.","Sort làm mất mục tiêu O(n)."]},"min-window-subsequence":{pattern:"dynamicProgramming",approach:"Quét tiến để tìm nơi T khớp hết theo thứ tự, sau đó quét lùi để co về start nhỏ nhất của window đó; tiếp tục từ start kế tiếp.",invariant:"Forward bảo đảm T là subsequence; backward tìm start sát nhất cho đúng endpoint.",complexity:"O(|S|·|T|) worst case, O(1) extra space cho cách quét.",pitfalls:["Nhầm với minimum window substring dùng frequency.","Reset vị trí tiếp theo sai làm bỏ window overlap."]},"palindrome-partitioning":{pattern:"backtracking",approach:"Từ start, thử mọi end; chỉ chọn substring palindrome rồi recurse từ end, khi tới cuối chuỗi thì copy path vào result.",invariant:"Mọi phần trong path đều là palindrome và ghép lại đúng prefix đã đi qua.",complexity:"O(n·2^n) thời gian gồm tạo output, O(n) stack/path.",pitfalls:["Push path reference mà không copy.","Quên pop sau recursion."]}},ul={"longest-substring":{walkthrough:['Với s = "abcabcbb", bắt đầu left = 0, maxLength = 0 và Set rỗng.','right gặp a, b rồi c. Cả ba chưa có trong Set nên cửa sổ lần lượt là "a", "ab", "abc"; maxLength tăng thành 3.',"right tiếp tục gặp a. Set đang là {a, b, c}, nên a mới bị trùng với a ở đầu cửa sổ.",'Vòng while xóa s[left] là a khỏi Set rồi tăng left từ 0 lên 1. Lúc này a không còn trùng, nên thêm a mới vào Set; cửa sổ trở thành "bca".',"Các ký tự b và c tiếp theo được xử lý tương tự. Khi gặp b cuối chuỗi, có lúc phải tiếp tục xóa từ trái cho tới khi b cũ không còn trong cửa sổ.",'Không có cửa sổ hợp lệ nào dài hơn 3, nên hàm trả về 3. Đáp án có thể là "abc", "bca" hoặc "cab", nhưng đề chỉ yêu cầu độ dài.'],codeNotes:["right luôn tiến sang phải đúng một lần trong vòng for; nó chịu trách nhiệm mở rộng cửa sổ.","while (window.has(s[right])) phải là while, không phải if: ký tự trùng có thể nằm sâu trong cửa sổ nên phải xóa nhiều ký tự từ trái mới loại được bản cũ.","window.delete(s[left]) phải chạy trước left++ để xóa đúng ký tự đang rời cửa sổ.","Chỉ thêm s[right] sau khi vòng while kết thúc, nhờ vậy Set luôn chứa các ký tự duy nhất.","Độ dài cửa sổ inclusive là right - left + 1; thiếu +1 sẽ sai một đơn vị."]}},Mu=Object.fromEntries(Object.entries(qp).map(([e,t])=>{var r,i;const n=Mp[t.pattern];return[e,{pattern:n.name,recognition:n.recognition,mechanics:[...n.mechanics],approach:t.approach,invariant:t.invariant,complexity:t.complexity,pitfalls:t.pitfalls,walkthrough:((r=ul[e])==null?void 0:r.walkthrough)??[`Bắt đầu từ input ví dụ, khởi tạo toàn bộ state mà pattern ${n.name} cần dùng.`,n.mechanics[0],t.approach,`Sau mỗi bước, tự kiểm tra invariant: ${t.invariant}`,"Khi không còn dữ liệu cần xử lý, lấy state đáp án và đối chiếu với output của ví dụ."],codeNotes:((i=ul[e])==null?void 0:i.codeNotes)??[`Các biến trạng thái trong code được chọn để duy trì invariant: ${t.invariant}`,`Mỗi lần lặp phải thực hiện đúng thứ tự cập nhật của ${n.name}; đổi thứ tự có thể làm state phản ánh sai phần dữ liệu đã xử lý.`,`Điều kiện dừng bảo đảm thuật toán không bỏ sót dữ liệu và đạt ${t.complexity}`]}]})),rt=[...jp,...Lp,...Ap];var ml,gl,fl,vl;for(const e of rt){if(!e.starterCode.trim())throw new Error(`Practice "${e.slug}" phải có bài giải code`);if(!((ml=e.arrayFunctionCode)!=null&&ml.trim())&&!((gl=Au[e.slug])!=null&&gl.trim()))throw new Error(`Practice "${e.slug}" phải có cách giải thứ 2`);if(!((fl=Yo[e.slug])!=null&&fl.problem.trim())||!((vl=Yo[e.slug])!=null&&vl.explanation.trim()))throw new Error(`Practice "${e.slug}" phải có đề bài và giải thích ví dụ dễ hiểu`);if(!Mu[e.slug])throw new Error(`Practice "${e.slug}" phải có giải thích cách tư duy`)}const Dp=Object.assign({"../practice/3sum.ts":()=>T(()=>import("./3sum-CJCtr4vI.js"),[]),"../practice/best-time-buy-sell.ts":()=>T(()=>import("./best-time-buy-sell-C8RBPlNH.js"),[]),"../practice/binary-search.ts":()=>T(()=>import("./binary-search-Dp_J-KI8.js"),[]),"../practice/burst-balloons.ts":()=>T(()=>import("./burst-balloons-B8VWmucN.js"),[]),"../practice/climbing-stairs.ts":()=>T(()=>import("./climbing-stairs-D2AOndsc.js"),[]),"../practice/coin-change.ts":()=>T(()=>import("./coin-change-COc5cef6.js"),[]),"../practice/combination-sum.ts":()=>T(()=>import("./combination-sum-vCPUn4Hd.js"),[]),"../practice/container-most-water.ts":()=>T(()=>import("./container-most-water-Cb3rp3yw.js"),[]),"../practice/contains-duplicate.ts":()=>T(()=>import("./contains-duplicate-D2AOndsc.js"),[]),"../practice/course-schedule.ts":()=>T(()=>import("./course-schedule-CcbX-6Kw.js"),[]),"../practice/decode-ways.ts":()=>T(()=>import("./decode-ways-B8VWmucN.js"),[]),"../practice/edit-distance.ts":()=>T(()=>import("./edit-distance-QjINTQ8a.js"),[]),"../practice/first-unique-char.ts":()=>T(()=>import("./first-unique-char-m1IEFDbZ.js"),[]),"../practice/fizz-buzz.ts":()=>T(()=>import("./fizz-buzz-BfU7NQ7T.js"),[]),"../practice/group-anagrams.ts":()=>T(()=>import("./group-anagrams--jMNyoJd.js"),[]),"../practice/intersection-two-arrays-ii.ts":()=>T(()=>import("./intersection-two-arrays-ii-Dp_J-KI8.js"),[]),"../practice/isomorphic-strings.ts":()=>T(()=>import("./isomorphic-strings-DafZTPKn.js"),[]),"../practice/kth-largest.ts":()=>T(()=>import("./kth-largest-C_9KO97p.js"),[]),"../practice/largest-rectangle-histogram.ts":()=>T(()=>import("./largest-rectangle-histogram-Cb3rp3yw.js"),[]),"../practice/longest-consecutive.ts":()=>T(()=>import("./longest-consecutive-DyhGAmRw.js"),[]),"../practice/longest-pal-substring.ts":()=>T(()=>import("./longest-pal-substring-DyhGAmRw.js"),[]),"../practice/longest-substring.ts":()=>T(()=>import("./longest-substring-BzaA1vnE.js"),[]),"../practice/longest-valid-parentheses.ts":()=>T(()=>import("./longest-valid-parentheses-BTOM_ca_.js"),[]),"../practice/majority-element.ts":()=>T(()=>import("./majority-element-ChUpo6jG.js"),[]),"../practice/max-number.ts":()=>T(()=>import("./max-number-fo7y6OAp.js"),[]),"../practice/median-two-arrays.ts":()=>T(()=>import("./median-two-arrays-xyZYI8ze.js"),[]),"../practice/meeting-rooms-ii.ts":()=>T(()=>import("./meeting-rooms-ii-DyhGAmRw.js"),[]),"../practice/merge-intervals.ts":()=>T(()=>import("./merge-intervals-Bo1KwrkE.js"),[]),"../practice/merge-k-sorted-arrays.ts":()=>T(()=>import("./merge-k-sorted-arrays-CHHT-Vn_.js"),[]),"../practice/merge-two-sorted-arrays.ts":()=>T(()=>import("./merge-two-sorted-arrays-DUCTXc1_.js"),[]),"../practice/min-window-subsequence.ts":()=>T(()=>import("./min-window-subsequence-uSnXU5RE.js"),[]),"../practice/min-window-substring.ts":()=>T(()=>import("./min-window-substring-C_9KO97p.js"),[]),"../practice/missing-number.ts":()=>T(()=>import("./missing-number-Ch1zlnfs.js"),[]),"../practice/move-zeroes.ts":()=>T(()=>import("./move-zeroes-17WSpar0.js"),[]),"../practice/n-queens.ts":()=>T(()=>import("./n-queens-yR1TK8-I.js"),[]),"../practice/number-of-islands.ts":()=>T(()=>import("./number-of-islands-B8VWmucN.js"),[]),"../practice/palindrome-partitioning.ts":()=>T(()=>import("./palindrome-partitioning-Cakga_BE.js"),[]),"../practice/palindrome.ts":()=>T(()=>import("./palindrome-0uEJ0Xw2.js"),[]),"../practice/plus-one.ts":()=>T(()=>import("./plus-one-D2AOndsc.js"),[]),"../practice/product-except-self.ts":()=>T(()=>import("./product-except-self-wNjcI_7V.js"),[]),"../practice/ransom-note.ts":()=>T(()=>import("./ransom-note-QjINTQ8a.js"),[]),"../practice/regex-matching.ts":()=>T(()=>import("./regex-matching-D1xakhRR.js"),[]),"../practice/remove-duplicates-sorted.ts":()=>T(()=>import("./remove-duplicates-sorted-D8O1dYv9.js"),[]),"../practice/reverse-string.ts":()=>T(()=>import("./reverse-string-C6q1dz-j.js"),[]),"../practice/rotate-image.ts":()=>T(()=>import("./rotate-image-XM7WPnam.js"),[]),"../practice/set-matrix-zeroes.ts":()=>T(()=>import("./set-matrix-zeroes-Cb3rp3yw.js"),[]),"../practice/sliding-window-maximum.ts":()=>T(()=>import("./sliding-window-maximum-DqduC5JY.js"),[]),"../practice/spiral-matrix.ts":()=>T(()=>import("./spiral-matrix-C8RBPlNH.js"),[]),"../practice/sudoku-solver.ts":()=>T(()=>import("./sudoku-solver-C27PtQZy.js"),[]),"../practice/top-k-frequent.ts":()=>T(()=>import("./top-k-frequent-C_9KO97p.js"),[]),"../practice/trapping-rain-water.ts":()=>T(()=>import("./trapping-rain-water-Bv7TWY0t.js"),[]),"../practice/two-sum.ts":()=>T(()=>import("./two-sum-C-FHkjIQ.js"),[]),"../practice/valid-anagram.ts":()=>T(()=>import("./valid-anagram-DyHtVMyA.js"),[]),"../practice/valid-parentheses.ts":()=>T(()=>import("./valid-parentheses-MJUo-MVO.js"),[]),"../practice/word-break.ts":()=>T(()=>import("./word-break-BW19mWbl.js"),[]),"../practice/word-ladder.ts":()=>T(()=>import("./word-ladder-BuDJ67jZ.js"),[])}),Fp=["all","classic","easy","medium","hard"],hl=new Set(["two-sum","valid-anagram","palindrome","binary-search","valid-parentheses","merge-two-sorted-arrays","best-time-buy-sell","climbing-stairs","3sum","longest-substring","group-anagrams","product-except-self","spiral-matrix","word-break","coin-change","container-most-water","course-schedule","number-of-islands","trapping-rain-water","median-two-arrays","n-queens","edit-distance","sliding-window-maximum","largest-rectangle-histogram"]),Up={easy:"bg-clay-50 text-clay-700 ring-clay-600/20 dark:bg-clay-950 dark:text-clay-300",medium:"bg-amber-50 text-amber-700 ring-amber-600/20 dark:bg-amber-950 dark:text-amber-300",hard:"bg-rose-50 text-rose-700 ring-rose-600/20 dark:bg-rose-950 dark:text-rose-300"};function Bp(e){return typeof structuredClone=="function"?structuredClone(e):JSON.parse(JSON.stringify(e))}function Zo(e,t){if(Object.is(e,t))return!0;if(Array.isArray(e)&&Array.isArray(t))return e.length===t.length&&e.every((n,r)=>Zo(n,t[r]));if(e&&t&&typeof e=="object"&&typeof t=="object"){const n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&n.every(i=>Object.prototype.hasOwnProperty.call(t,i)&&Zo(e[i],t[i]))}return!1}function Ut(e){if(typeof e=="string")return`"${e}"`;const t=JSON.stringify(e);return t===void 0?String(e):t}function Vp(e){var t;return((t=e.match(/\(([^)]*)\)/))==null?void 0:t[1].split(",").map(n=>n.trim()).filter(Boolean))??[]}function Kp(){const[e,t]=z.useState("all"),[n,r]=z.useState(""),[i,o]=z.useState(null),[a,s]=z.useState({}),[l,h]=z.useState({}),[v,m]=z.useState(null),[f,y]=z.useState({}),b=z.useMemo(()=>({all:rt.length,classic:rt.filter(g=>hl.has(g.slug)).length,easy:rt.filter(g=>g.difficulty==="easy").length,medium:rt.filter(g=>g.difficulty==="medium").length,hard:rt.filter(g=>g.difficulty==="hard").length}),[]),k=z.useMemo(()=>{const g=n.trim().toLocaleLowerCase();return rt.filter(w=>{const S=e==="all"||(e==="classic"?hl.has(w.slug):w.difficulty===e),C=`${w.title} ${w.slug} ${w.description}`.toLocaleLowerCase();return S&&(!g||C.includes(g))})},[e,n]),P=async g=>{m(g.slug);const w=[];try{const S=Dp[`../practice/${g.slug}.ts`];if(!S)throw new Error("Không tìm thấy file lời giải");const C=(await S()).default;for(const[R,L]of g.testCases.entries())try{const _=await C(...Bp(L.input));w.push({index:R,passed:Zo(_,L.output),expected:L.output,received:_})}catch(_){w.push({index:R,passed:!1,expected:L.output,error:_ instanceof Error?_.message:String(_)})}}catch(S){w.push({index:0,passed:!1,expected:void 0,error:S instanceof Error?S.message:String(S)})}finally{y(S=>({...S,[g.slug]:w})),m(null)}},d=z.useCallback(g=>r(g),[]),c=g=>{s(w=>({...w,[g]:!w[g]}))},p=g=>{h(w=>({...w,[g]:!w[g]}))};return u.jsxs("main",{className:"mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:py-14",children:[u.jsxs("header",{className:"mb-8",children:[u.jsx("p",{className:"mb-3 text-xs font-bold uppercase tracking-[0.24em] text-plum-600 dark:text-plum-300",children:"Live coding workspace"}),u.jsxs("div",{className:"flex flex-col justify-between gap-4 sm:flex-row sm:items-end",children:[u.jsxs("div",{children:[u.jsx("h1",{className:"text-3xl font-bold tracking-tight text-neutral-950 dark:text-white sm:text-4xl",children:"JavaScript Practices"}),u.jsx("p",{className:"mt-2 max-w-2xl text-clay-600 dark:text-neutral-300",children:"Chọn bài, mở đề và chạy test trực tiếp với lời giải trong thư mục practice."})]}),u.jsxs("div",{className:"shrink-0 rounded-2xl border border-plum-100 bg-plum-50 px-5 py-3 text-center dark:border-plum-900 dark:bg-plum-950/60",children:[u.jsx("strong",{className:"block text-2xl text-plum-700 dark:text-plum-300",children:rt.length}),u.jsx("span",{className:"text-xs font-medium uppercase tracking-wide text-plum-600",children:"câu hỏi"})]})]})]}),u.jsxs("section",{className:"mb-7 grid gap-4 rounded-3xl border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-700 dark:bg-neutral-900 md:grid-cols-[1fr_auto]",children:[u.jsx(zp,{value:n,onChange:d}),u.jsx("div",{className:"flex flex-wrap gap-2","aria-label":"Lọc theo độ khó",children:Fp.map(g=>u.jsxs("button",{type:"button",onClick:()=>t(g),"aria-pressed":e===g,className:`rounded-xl px-3.5 py-2 text-sm font-semibold transition ${e===g?"bg-neutral-900 text-white shadow-sm dark:bg-plum-600":"bg-neutral-100 text-clay-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"}`,children:[g==="all"?"Tất cả":g==="classic"?"Kinh điển":g," ",u.jsx("span",{className:"ml-1 opacity-60",children:b[g]})]},g))})]}),u.jsxs("div",{className:"mb-4 flex items-center justify-between text-sm text-neutral-500",children:[u.jsxs("span",{children:["Hiển thị ",k.length," kết quả"]}),n&&u.jsx("button",{type:"button",className:"font-medium text-plum-600 hover:text-plum-800",onClick:()=>r(""),children:"Xóa tìm kiếm"})]}),u.jsx("ul",{className:"grid gap-4",children:k.map((g,w)=>{const S=i===g.slug,C=a[g.slug]??!1,R=l[g.slug]??!1,L=f[g.slug],_=(L==null?void 0:L.filter(M=>M.passed).length)??0,me=g.arrayFunctionCode??Au[g.slug],Y=Yo[g.slug],oe=Mu[g.slug],De=g.testCases[0],Ri=Vp(g.functionSignature);return u.jsxs("li",{className:"overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:border-neutral-300 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600",children:[u.jsxs("div",{className:"flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between",children:[u.jsxs("button",{type:"button",className:"flex min-w-0 flex-1 items-start gap-4 text-left",onClick:()=>o(S?null:g.slug),"aria-expanded":S,children:[u.jsx("span",{className:"mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-sm font-bold text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400",children:String(w+1).padStart(2,"0")}),u.jsxs("span",{className:"min-w-0",children:[u.jsxs("span",{className:"flex flex-wrap items-center gap-2",children:[u.jsx("span",{className:"font-bold text-neutral-900 dark:text-neutral-100",children:g.title}),u.jsx("span",{className:`rounded-full px-2 py-0.5 text-xs font-semibold capitalize ring-1 ring-inset ${Up[g.difficulty]}`,children:g.difficulty})]}),u.jsx("span",{className:"mt-1 block truncate text-sm text-neutral-500",children:g.description})]})]}),u.jsxs("div",{className:"flex items-center gap-2 pl-13 sm:pl-0",children:[L&&u.jsxs("span",{className:`text-xs font-bold ${_===L.length?"text-clay-600":"text-rose-600"}`,children:[_,"/",L.length," passed"]}),u.jsx("button",{type:"button",onClick:()=>P(g),disabled:v===g.slug,className:"rounded-xl bg-plum-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-plum-700 disabled:cursor-wait disabled:opacity-60",children:v===g.slug?"Đang chạy…":"Chạy test"}),u.jsx("button",{type:"button",onClick:()=>o(S?null:g.slug),className:"rounded-xl border border-neutral-200 px-3 py-2 text-sm font-semibold text-clay-600 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800",children:S?"Thu gọn":"Mở đề"})]})]}),S&&u.jsxs("div",{className:"border-t border-neutral-100 bg-neutral-50/70 p-5 dark:border-neutral-700 dark:bg-neutral-950/50 sm:pl-[5.25rem]",children:[u.jsxs("div",{children:[u.jsx("h2",{className:"mb-2 text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400",children:"Problem"}),u.jsx("p",{className:"whitespace-pre-wrap text-sm leading-6 text-clay-700 dark:text-clay-300",children:(Y==null?void 0:Y.problem)??g.description})]}),De&&u.jsxs("div",{className:"mt-4",children:[u.jsx("h2",{className:"mb-2 text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400",children:"Example"}),u.jsxs("div",{className:"space-y-2 rounded-xl bg-white p-4 text-sm ring-1 ring-neutral-200 dark:bg-neutral-900 dark:ring-neutral-700",children:[u.jsxs("p",{children:[u.jsx("strong",{className:"text-neutral-900 dark:text-neutral-100",children:"Input:"})," ",u.jsx("code",{className:"text-clay-600 dark:text-neutral-300",children:De.input.map((M,Fe)=>`${Ri[Fe]||`arg${Fe+1}`} = ${Ut(M)}`).join(", ")})]}),u.jsxs("p",{children:[u.jsx("strong",{className:"text-neutral-900 dark:text-neutral-100",children:"Output:"})," ",u.jsx("code",{className:"text-clay-600 dark:text-neutral-300",children:Ut(De.output)})]}),u.jsxs("p",{className:"leading-6 text-clay-600 dark:text-neutral-300",children:[u.jsx("strong",{className:"text-neutral-900 dark:text-neutral-100",children:"Explanation:"})," ",De.explanation??(Y==null?void 0:Y.explanation)??"The output follows directly from the conditions in the problem."]})]})]}),u.jsxs("div",{className:"mt-4",children:[u.jsx("h2",{className:"mb-2 text-xs font-bold uppercase tracking-wider text-neutral-500",children:"Function signature"}),u.jsx(Nn,{code:g.functionSignature,className:"rounded-xl"})]}),oe&&u.jsxs("section",{className:"mt-4 overflow-hidden rounded-xl border border-plum-200 bg-white dark:border-plum-900 dark:bg-neutral-900",children:[u.jsxs("button",{type:"button",onClick:()=>p(g.slug),"aria-expanded":R,"aria-controls":`explanation-${g.slug}`,className:"flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-bold text-blush-800 transition hover:bg-blush-50 dark:text-blush-300 dark:hover:bg-blush-950/40",children:[u.jsx("span",{children:R?"Ẩn giải thích cách tư duy":"Xem giải thích cách tư duy"}),u.jsx("span",{className:`text-base transition-transform ${R?"rotate-180":""}`,"aria-hidden":"true",children:"⌄"})]}),R&&u.jsxs("div",{id:`explanation-${g.slug}`,className:"space-y-6 border-t border-neutral-100 p-5 text-sm leading-7 text-neutral-700 dark:border-neutral-900 dark:text-neutral-300 sm:p-6",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"font-bold text-neutral-950 dark:text-white",children:"1. Đề bài thực sự hỏi gì?"}),u.jsx("p",{className:"mt-2",children:(Y==null?void 0:Y.problem)??g.description}),De&&u.jsxs("p",{className:"mt-2 rounded-lg bg-neutral-100 px-3 py-2 dark:bg-neutral-800",children:[u.jsx("strong",{children:"Ví dụ:"})," Input ",Ut(De.input)," cho kết quả ",Ut(De.output),". ",Y==null?void 0:Y.explanation]})]}),u.jsxs("div",{children:[u.jsxs("h3",{className:"font-bold text-neutral-950 dark:text-white",children:["2. Dấu hiệu nhận ra pattern: ",oe.pattern]}),u.jsx("p",{className:"mt-2",children:oe.recognition})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"font-bold text-neutral-950 dark:text-white",children:"3. Pattern hoạt động thế nào?"}),u.jsx("ol",{className:"mt-2 space-y-2",children:oe.mechanics.map((M,Fe)=>u.jsxs("li",{className:"flex gap-3",children:[u.jsxs("span",{className:"font-bold text-clay-700 dark:text-clay-300",children:[Fe+1,"."]}),u.jsx("span",{children:M})]},M))})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"font-bold text-neutral-950 dark:text-white",children:"4. Áp dụng vào bài này"}),u.jsx("p",{className:"mt-2",children:oe.approach})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"font-bold text-neutral-950 dark:text-white",children:"5. Mô phỏng input từng bước"}),u.jsx("ol",{className:"mt-3 space-y-3",children:oe.walkthrough.map((M,Fe)=>u.jsxs("li",{className:"flex gap-3 rounded-lg bg-neutral-50 px-3 py-2 dark:bg-neutral-800/70",children:[u.jsxs("span",{className:"font-bold text-clay-700 dark:text-clay-300",children:[Fe+1,"."]}),u.jsx("span",{children:M})]},M))})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"font-bold text-neutral-950 dark:text-white",children:"6. Khung code hoàn chỉnh"}),u.jsxs("div",{className:"mt-3 overflow-hidden rounded-3xl border border-[#292929] bg-[#212121]",children:[u.jsxs("div",{className:"flex items-center justify-between bg-[#212121] px-4 py-3 text-sm font-medium text-[#e3e3e3]",children:[u.jsx("span",{children:"JavaScript"}),u.jsx("span",{children:"Đọc cùng phần giải thích bên dưới"})]}),u.jsx(Nn,{code:g.starterCode.trim()})]}),u.jsx("ul",{className:"mt-3 space-y-2",children:oe.codeNotes.map(M=>u.jsxs("li",{className:"flex gap-3",children:[u.jsx("span",{className:"font-bold text-clay-600 dark:text-neutral-400",children:"→"}),u.jsx("span",{children:M})]},M))})]}),u.jsxs("div",{className:"rounded-xl border border-neutral-100 bg-neutral-50 p-4 dark:border-neutral-900 dark:bg-neutral-950/40",children:[u.jsx("h3",{className:"font-bold text-neutral-900 dark:text-neutral-200",children:"7. Invariant phải giữ"}),u.jsx("p",{className:"mt-2",children:oe.invariant})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"font-bold text-neutral-950 dark:text-white",children:"8. Độ phức tạp"}),u.jsx("p",{className:"mt-2",children:oe.complexity})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"font-bold text-neutral-950 dark:text-white",children:"9. Lỗi thường gặp"}),u.jsx("ul",{className:"mt-2 space-y-2",children:oe.pitfalls.map(M=>u.jsxs("li",{className:"flex gap-3",children:[u.jsx("span",{className:"text-rose-500",children:"•"}),u.jsx("span",{children:M})]},M))})]})]})]}),u.jsxs("div",{className:"mt-4 overflow-hidden rounded-xl border border-plum-200 bg-white dark:border-plum-900 dark:bg-neutral-900",children:[u.jsxs("button",{type:"button",onClick:()=>c(g.slug),"aria-expanded":C,"aria-controls":`solution-${g.slug}`,className:"flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-bold text-plum-700 transition hover:bg-plum-50 dark:text-plum-300 dark:hover:bg-plum-950/40",children:[u.jsx("span",{children:C?"Ẩn bài giải":"Xem bài giải"}),u.jsx("span",{className:`text-base transition-transform ${C?"rotate-180":""}`,"aria-hidden":"true",children:"⌄"})]}),C&&u.jsxs("div",{id:`solution-${g.slug}`,className:"border-t border-plum-100 dark:border-plum-900",children:[u.jsxs("div",{className:"flex items-center justify-between bg-[#212121] px-4 py-3 text-sm font-medium text-[#e3e3e3]",children:[u.jsx("span",{children:"Cách 1 · Giải thuật"}),u.jsx("span",{children:"JavaScript"})]}),u.jsx(Nn,{code:g.starterCode.trim()}),me&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"flex items-center justify-between border-t border-neutral-700 bg-[#212121] px-4 py-3 text-sm font-medium text-[#e3e3e3]",children:[u.jsxs("span",{children:["Cách 2 · ",g.arrayFunctionCode?"Array/String functions":"Giải pháp khác"]}),u.jsx("span",{children:"Tham khảo"})]}),u.jsx(Nn,{code:me.trim()})]})]})]}),L&&u.jsx("div",{className:"mt-4 space-y-2",children:L.map(M=>u.jsxs("div",{className:`rounded-xl border p-3 text-sm ${M.passed?"border-clay-200 bg-clay-50 dark:border-clay-900 dark:bg-clay-950/60":"border-rose-200 bg-rose-50 dark:border-rose-900 dark:bg-rose-950/60"}`,children:[u.jsxs("strong",{className:M.passed?"text-clay-700 dark:text-clay-300":"text-rose-700 dark:text-rose-300",children:["Test ",M.index+1,": ",M.passed?"PASS":"FAIL"]}),M.error?u.jsx("p",{className:"mt-1 font-mono text-xs text-rose-700 dark:text-rose-300",children:M.error}):u.jsxs("p",{className:"mt-1 break-all font-mono text-xs text-clay-600 dark:text-neutral-300",children:["Expected: ",Ut(M.expected)," · Received: ",Ut(M.received)]})]},M.index))})]})]},g.slug)})}),k.length===0&&u.jsx("div",{className:"rounded-3xl border border-dashed border-neutral-300 py-16 text-center text-neutral-500 dark:border-neutral-700 dark:text-neutral-400",children:"Không tìm thấy câu hỏi phù hợp."})]})}const qu="js-practices.theme";function $p(){return localStorage.getItem(qu)==="dark"?"dark":"light"}function Wp(){const[e,t]=z.useState("fundamentals"),[n,r]=z.useState($p);return z.useEffect(()=>{document.documentElement.classList.toggle("dark",n==="dark"),localStorage.setItem(qu,n)},[n]),u.jsxs("div",{className:"min-h-screen bg-neutral-50 text-neutral-900 transition-colors dark:bg-neutral-950 dark:text-neutral-100",children:[u.jsxs("div",{className:"mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-5 sm:px-6",children:[u.jsx("button",{type:"button",onClick:()=>t("fundamentals"),className:"font-bold tracking-tight text-neutral-950 dark:text-white",children:"JS Practices"}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsxs("nav",{className:"flex rounded-xl bg-neutral-200/70 p-1 dark:bg-neutral-800","aria-label":"Khu vực học tập",children:[u.jsx("button",{type:"button",onClick:()=>t("fundamentals"),className:`rounded-lg px-3 py-2 text-sm font-semibold transition ${e==="fundamentals"?"bg-white text-plum-700 shadow-sm dark:bg-neutral-700 dark:text-plum-300":"text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"}`,children:"Nền tảng"}),u.jsx("button",{type:"button",onClick:()=>t("practices"),className:`rounded-lg px-3 py-2 text-sm font-semibold transition ${e==="practices"?"bg-white text-plum-700 shadow-sm dark:bg-neutral-700 dark:text-plum-300":"text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"}`,children:"Bài tập"})]}),u.jsx("button",{type:"button",onClick:()=>r(i=>i==="dark"?"light":"dark"),"aria-label":n==="dark"?"Chuyển sang giao diện sáng":"Chuyển sang giao diện tối",title:n==="dark"?"Light mode":"Dark mode",className:"flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-white text-lg shadow-sm transition hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-700",children:n==="dark"?"☀️":"🌙"})]})]}),e==="fundamentals"?u.jsx(_p,{}):u.jsx(Kp,{})]})}no.createRoot(document.getElementById("root")).render(u.jsx(Tl.StrictMode,{children:u.jsx(Ip,{children:u.jsx(Wp,{})})}));
