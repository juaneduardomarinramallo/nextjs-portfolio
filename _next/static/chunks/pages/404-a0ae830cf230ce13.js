(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{2448:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return n(1635)}])},3923:function(e,r,n){"use strict";n.d(r,{Z:function(){return o}});var t=n(5893),a=n(1664),l=function(){return(0,t.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)(a.default,{href:"/",children:(0,t.jsx)("a",{className:"navbar-brand",children:"My Portfolio"})}),(0,t.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarColor03","aria-controls":"navbarColor03","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,t.jsx)("span",{className:"navbar-toggler-icon"})}),(0,t.jsx)("div",{className:"d-flex",id:"navbarColor03",children:(0,t.jsxs)("ul",{className:"navbar-nav me-auto",children:[(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(a.default,{href:"https://app.pluralsight.com/profile/ozurajean",children:(0,t.jsx)("a",{target:"_blank",className:"nav-link",children:"Skills"})})}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(a.default,{href:"/experience",children:(0,t.jsx)("a",{className:"nav-link",children:"Experience"})})}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(a.default,{href:"/projects",children:(0,t.jsx)("a",{className:"nav-link",children:"Projects"})})}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(a.default,{href:"/contactme",children:(0,t.jsx)("a",{className:"nav-link",children:"Contact me"})})}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(a.default,{href:"/resume",children:(0,t.jsx)("a",{className:"nav-link",children:"Resume"})})})]})})]})})},o=function(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l,{}),(0,t.jsx)("main",{className:"container py-4",children:e.children}),(0,t.jsx)("footer",{className:"bg-dark text-light text-center",children:(0,t.jsx)("div",{className:"container p-3",children:(0,t.jsxs)("h43",{children:["\xa9 ",(new Date).getFullYear()," Juan Marin Ramallo, All rights reserverd"]})})})]})}},8418:function(e,r,n){"use strict";function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,a,l=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(t=n.next()).done)&&(l.push(t.value),!r||l.length!==r);o=!0);}catch(c){i=!0,a=c}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return l}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=void 0;var l,o=(l=n(7294))&&l.__esModule?l:{default:l},i=n(6273),c=n(387),s=n(7190);var u={};function f(e,r,n,t){if(e&&i.isLocalURL(r)){e.prefetch(r,n,t).catch((function(e){0}));var a=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;u[r+"%"+n+(a?"%"+a:"")]=!0}}var d=function(e){var r,n=!1!==e.prefetch,t=c.useRouter(),l=o.default.useMemo((function(){var r=a(i.resolveHref(t,e.href,!0),2),n=r[0],l=r[1];return{href:n,as:e.as?i.resolveHref(t,e.as):l||n}}),[t,e.href,e.as]),d=l.href,h=l.as,v=e.children,p=e.replace,m=e.shallow,y=e.scroll,b=e.locale;"string"===typeof v&&(v=o.default.createElement("a",null,v));var x=(r=o.default.Children.only(v))&&"object"===typeof r&&r.ref,g=a(s.useIntersection({rootMargin:"200px"}),2),j=g[0],N=g[1],w=o.default.useCallback((function(e){j(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,j]);o.default.useEffect((function(){var e=N&&n&&i.isLocalURL(d),r="undefined"!==typeof b?b:t&&t.locale,a=u[d+"%"+h+(r?"%"+r:"")];e&&!a&&f(t,d,h,{locale:r})}),[h,d,N,b,n,t]);var k={ref:w,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,n,t,a,l,o,c){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==o&&t.indexOf("#")>=0&&(o=!1),r[a?"replace":"push"](n,t,{shallow:l,locale:c,scroll:o}))}(e,t,d,h,p,m,y,b)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),i.isLocalURL(d)&&f(t,d,h,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var E="undefined"!==typeof b?b:t&&t.locale,_=t&&t.isLocaleDomain&&i.getDomainLocale(h,E,t&&t.locales,t&&t.domainLocales);k.href=_||i.addBasePath(i.addLocale(h,E,t&&t.defaultLocale))}return o.default.cloneElement(r,k)};r.default=d},7190:function(e,r,n){"use strict";function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,a,l=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(t=n.next()).done)&&(l.push(t.value),!r||l.length!==r);o=!0);}catch(c){i=!0,a=c}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return l}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,n=e.rootMargin,t=e.disabled||!i,s=l.useRef(),u=a(l.useState(!1),2),f=u[0],d=u[1],h=a(l.useState(r?r.current:null),2),v=h[0],p=h[1],m=l.useCallback((function(e){s.current&&(s.current(),s.current=void 0),t||f||e&&e.tagName&&(s.current=function(e,r,n){var t=function(e){var r=e.rootMargin||"",n=c.get(r);if(n)return n;var t=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var r=t.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;r&&n&&r(n)}))}),e);return c.set(r,n={id:r,observer:a,elements:t}),n}(n),a=t.id,l=t.observer,o=t.elements;return o.set(e,r),l.observe(e),function(){o.delete(e),l.unobserve(e),0===o.size&&(l.disconnect(),c.delete(a))}}(e,(function(e){return e&&d(e)}),{root:v,rootMargin:n}))}),[t,v,n,f]);return l.useEffect((function(){if(!i&&!f){var e=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[f]),l.useEffect((function(){r&&p(r.current)}),[r]),[m,f]};var l=n(7294),o=n(9311),i="undefined"!==typeof IntersectionObserver;var c=new Map},1635:function(e,r,n){"use strict";n.r(r);var t=n(5893),a=n(3923),l=n(1664);r.default=function(){return(0,t.jsx)(a.Z,{children:(0,t.jsxs)("div",{className:"text-center",children:[(0,t.jsx)("h1",{children:"404"}),(0,t.jsx)("p",{children:"This page does not exists."}),(0,t.jsx)("p",{children:(0,t.jsx)(l.default,{href:"/",children:(0,t.jsx)("a",{children:"Please return to Home"})})})]})})}},1664:function(e,r,n){e.exports=n(8418)}},function(e){e.O(0,[774,888,179],(function(){return r=2448,e(e.s=r);var r}));var r=e.O();_N_E=r}]);