(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{160:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),i=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=i(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),s=i(n),d=r,u=s["".concat(c,".").concat(d)]||s[d]||m[d]||o;return n?a.a.createElement(u,l(l({ref:t},p),{},{components:n})):a.a.createElement(u,l({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return i}));var r=n(2),a=n(6),o=(n(0),n(160)),c={id:"_interfaces_.tablecomponents",title:"Interface: TableComponents<Context>",sidebar_label:"TableComponents"},l={unversionedId:"api/interfaces/_interfaces_.tablecomponents",id:"api/interfaces/_interfaces_.tablecomponents",isDocsHomePage:!1,title:"Interface: TableComponents<Context>",description:'"interfaces".TableComponents',source:"@site/docs/api/interfaces/_interfaces_.tablecomponents.md",slug:"/api/interfaces/_interfaces_.tablecomponents",permalink:"/api/interfaces/_interfaces_.tablecomponents",editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/site/docs/api/interfaces/_interfaces_.tablecomponents.md",version:"current",sidebar_label:"TableComponents",sidebar:"someSidebar",previous:{title:"Interface: ScrollSeekToggle",permalink:"/api/interfaces/_interfaces_.scrollseektoggle"},next:{title:"Interface: WindowViewportInfo",permalink:"/api/interfaces/_interfaces_.windowviewportinfo"}},b=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"EmptyPlaceholder",id:"emptyplaceholder",children:[]},{value:"FillerRow",id:"fillerrow",children:[]},{value:"ScrollSeekPlaceholder",id:"scrollseekplaceholder",children:[]},{value:"Scroller",id:"scroller",children:[]},{value:"Table",id:"table",children:[]},{value:"TableBody",id:"tablebody",children:[]},{value:"TableHead",id:"tablehead",children:[]},{value:"TableRow",id:"tablerow",children:[]}]}],p={rightToc:b};function i(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/api/modules/_interfaces_"}),'"interfaces"'),".TableComponents"),Object(o.b)("p",null,"Customize the TableVirtuoso rendering by passing a set of custom components."),Object(o.b)("h2",{id:"type-parameters"},"Type parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"Context")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"unknown")))),Object(o.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"TableComponents"))),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"emptyplaceholder"},"EmptyPlaceholder"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"EmptyPlaceholder"),": ComponentType","<","{ context?: Context  }>"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/2930da2/src/interfaces.ts#L171"}),"src/interfaces.ts:171"))),Object(o.b)("p",null,"Set to render a custom UI when the list is empty."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"fillerrow"},"FillerRow"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"FillerRow"),": ComponentType","<",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/api/interfaces/_interfaces_.fillerrowprops"}),"FillerRowProps")," & { context?: Context  }>"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/2930da2/src/interfaces.ts#L181"}),"src/interfaces.ts:181"))),Object(o.b)("p",null,"Set to render an empty item placeholder."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"scrollseekplaceholder"},"ScrollSeekPlaceholder"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"ScrollSeekPlaceholder"),": ComponentType","<",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/api/interfaces/_interfaces_.scrollseekplaceholderprops"}),"ScrollSeekPlaceholderProps")," & { context?: Context  }>"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/2930da2/src/interfaces.ts#L176"}),"src/interfaces.ts:176"))),Object(o.b)("p",null,"Set to render an item placeholder when the user scrolls fast.  See the ",Object(o.b)("inlineCode",{parentName:"p"},"scrollSeek")," property for more details."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"scroller"},"Scroller"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"Scroller"),": ComponentType","<",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/api/modules/_interfaces_#scrollerprops"}),"ScrollerProps")," & { context?: Context  }>"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/2930da2/src/interfaces.ts#L161"}),"src/interfaces.ts:161"))),Object(o.b)("p",null,"Set to customize the outermost scrollable element. This should not be necessary in general,\nas the component passes its HTML attribute props to it."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"table"},"Table"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"Table"),": ComponentType","<",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/api/modules/_interfaces_#tableprops"}),"TableProps")," & { context?: Context  }>"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/2930da2/src/interfaces.ts#L144"}),"src/interfaces.ts:144"))),Object(o.b)("p",null,"Set to customize the wrapping ",Object(o.b)("inlineCode",{parentName:"p"},"table")," element."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"tablebody"},"TableBody"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"TableBody"),": ComponentType","<",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/api/modules/_interfaces_#tablebodyprops"}),"TableBodyProps")," & { context?: Context  }>"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/2930da2/src/interfaces.ts#L166"}),"src/interfaces.ts:166"))),Object(o.b)("p",null,"Set to customize the items wrapper. Default is ",Object(o.b)("inlineCode",{parentName:"p"},"tbody"),"."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"tablehead"},"TableHead"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"TableHead"),": ComponentType","<","Pick","<","ComponentPropsWithRef","<",'"',"thead",'"',">, ",'"',"style",'"'," ","|"," ",'"',"ref",'"',"> & { context?: Context  }>"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/2930da2/src/interfaces.ts#L150"}),"src/interfaces.ts:150"))),Object(o.b)("p",null,"Set to render a fixed header at the top of the table (",Object(o.b)("inlineCode",{parentName:"p"},"thead"),"). use [","[fixedHeaderHeight]","] to set the contents"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"tablerow"},"TableRow"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"TableRow"),": ComponentType","<",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/api/modules/_interfaces_#itemprops"}),"ItemProps")," & { context?: Context  }>"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/2930da2/src/interfaces.ts#L155"}),"src/interfaces.ts:155"))),Object(o.b)("p",null,"Set to customize the item wrapping element. Default is ",Object(o.b)("inlineCode",{parentName:"p"},"tr"),"."))}i.isMDXComponent=!0}}]);