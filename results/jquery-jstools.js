(function(d,c){var b=d.document,a=function(){var a=function(b,c){return new a.fn.init(b,c)},J=d.jQuery,s=d.$,g,G=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,H=/\S/,u=/\s/,l=/^\s+/,o=/\s+$/,E=/\W/,I=/\d/,w=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,x=/^[\],:{}\s]*$/,B=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,z=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,y=/(?:^|:|,)(?:\s*\[)+/g,v=/(webkit)[ \/]([\w.]+)/,A=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,D=/(mozilla)(?:.*? rv:([\w.]+))?/,F=navigator.userAgent,h,n=false,f=[],e,C=Object.prototype.toString,j=Object.prototype.hasOwnProperty,i=Array.prototype.push,k=Array.prototype.slice,r=String.prototype.trim,p=Array.prototype.indexOf,m={};
a.fn=a.prototype={init:function(d,e){var h,i,f,j;
if(!d)return this;
if(d.nodeType){this.context=this[0]=d;
this.length=1;
return this}if(d==="body"&&!e&&b.body){this.context=b;
this[0]=b.body;
this.selector="body";
this.length=1;
return this}if(typeof d==="string"){h=G.exec(d);
if(h&&(h[1]||!e)){if(h[1]){j=e?e.ownerDocument||e:b;
f=w.exec(d);
f?a.isPlainObject(e)?(d=[b.createElement(f[1])],a.fn.attr.call(d,e,true)):d=[j.createElement(f[1])]:(f=a.buildFragment([h[1]],[j]),d=(f.cacheable?f.fragment.cloneNode(true):f.fragment).childNodes);
return a.merge(this,d)}i=b.getElementById(h[2]);
if(i&&i.parentNode){if(i.id!==h[2])return g.find(d);
this.length=1;
this[0]=i}this.context=b;
this.selector=d;
return this}if(!e&&!E.test(d)){this.selector=d;
this.context=b;
d=b.getElementsByTagName(d);
return a.merge(this,d)}return!e||e.jquery?(e||g).find(d):a(e).find(d)}if(a.isFunction(d))return g.ready(d);
d.selector!==c&&(this.selector=d.selector,this.context=d.context);
return a.makeArray(d,this)},
selector:"",
jquery:"1.4.4pre",
length:0,
size:function(){return this.length},
toArray:function(){return k.call(this,0)},
get:function(a){return a==null?this.toArray():a<0?this.slice(a)[0]:this[a]},
pushStack:function(d,c,e){var b=a();
a.isArray(d)?i.apply(b,d):a.merge(b,d);
b.prevObject=this;
b.context=this.context;
c==="find"?b.selector=this.selector+(this.selector?" ":"")+e:c&&(b.selector=this.selector+"."+c+"("+e+")");
return b},
each:function(c,b){return a.each(this,c,b)},
ready:function(c){a.bindReady();
a.isReady?c.call(b,a):f&&f.push(c);
return this},
eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},
first:function(){return this.eq(0)},
last:function(){return this.eq(-1)},
slice:function(){return this.pushStack(k.apply(this,arguments),"slice",k.call(arguments).join(","))},
map:function(b){return this.pushStack(a.map(this,function(a,c){return b.call(a,c,a)}))},
end:function(){return this.prevObject||a(null)},
push:i,
sort:[].sort,
splice:[].splice};
a.fn.init.prototype=a.fn;
a.extend=a.fn.extend=function(){var b=arguments[0]||{},f=1,l=arguments.length,i=false,h,g,e,d,k,j;
typeof b==="boolean"&&(i=b,b=arguments[1]||{},f=2);
typeof b!=="object"&&!a.isFunction(b)&&(b={});
l===f&&(b=this,--f);
for(;
f<l;
f++)if((h=arguments[f])!=null)for(g in h){e=b[g];
d=h[g];
if(b===d)continue;
i&&d&&(a.isPlainObject(d)||(k=a.isArray(d)))?(k?(k=false,j=e&&a.isArray(e)?e:[]):j=e&&a.isPlainObject(e)?e:{},b[g]=a.extend(i,j,d)):d!==c&&(b[g]=d)}return b};
a.extend({noConflict:function(b){d.$=s;
b&&(d.jQuery=J);
return a},
isReady:false,
readyWait:1,
ready:function(c){c===true&&a.readyWait--;
if(!a.readyWait||c!==true&&!a.isReady){if(!b.body)return setTimeout(a.ready,1);
a.isReady=true;
if(c!==true&&--a.readyWait>0)return;
if(f){var d,e=0;
while(d=f[e++])d.call(b,a);
f=null}a.fn.trigger&&a(b).trigger("ready").unbind("ready")}},
bindReady:function(){if(n)return;
n=true;
if(b.readyState==="complete")return setTimeout(a.ready,1);
if(b.addEventListener)b.addEventListener("DOMContentLoaded",e,false),d.addEventListener("load",a.ready,false);
else if(b.attachEvent){b.attachEvent("onreadystatechange",e);
d.attachEvent("onload",a.ready);
var c=false;
try{c=d.frameElement==null}catch(f){}b.documentElement.doScroll&&c&&q()}},
isFunction:function(b){return a.type(b)==="function"},
isArray:Array.isArray||function(b){return a.type(b)==="array"},
isWindow:function(a){return a&&typeof a==="object"&&"setInterval"in a},
isNaN:function(a){return a==null||!I.test(a)||isNaN(a)},
type:function(a){return a==null?String(a):m[C.call(a)]||"object"},
isPlainObject:function(b){if(!b||a.type(b)!=="object"||b.nodeType||a.isWindow(b))return false;
if(b.constructor&&!j.call(b,"constructor")&&!j.call(b.constructor.prototype,"isPrototypeOf"))return false;
var d;
for(d in b);
return d===c||j.call(b,d)},
isEmptyObject:function(b){for(var a in b)return false;
return true},
error:function(a){throw a},
parseJSON:function(b){if(typeof b!=="string"||!b)return null;
b=a.trim(b);
if(x.test(b.replace(B,"@").replace(z,"]").replace(y,"")))return d.JSON&&d.JSON.parse?d.JSON.parse(b):new Function("return "+b)();
a.error("Invalid JSON: "+b)},
noop:function(){},
globalEval:function(d){if(d&&H.test(d)){var e=b.getElementsByTagName("head")[0]||b.documentElement,c=b.createElement("script");
c.type="text/javascript";
a.support.scriptEval?c.appendChild(b.createTextNode(d)):c.text=d;
e.insertBefore(c,e.firstChild);
e.removeChild(c)}},
nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},
each:function(b,f,i){var d,e=0,g=b.length,j=g===c||a.isFunction(b),h;
if(i){if(j){for(d in b)if(f.apply(b[d],i)===false)break}else for(;
e<g;
)if(f.apply(b[e++],i)===false)break}else if(j){for(d in b)if(f.call(b[d],d,b[d])===false)break}else for(h=b[0];
e<g&&f.call(h,e,h)!==false;
h=b[++e]);
return b},
trim:r?function(a){return a==null?"":r.call(a)}:function(a){return a==null?"":a.toString().replace(l,"").replace(o,"")},
makeArray:function(b,e){var c=e||[],d;
if(b!=null){d=a.type(b);
b.length==null||d==="string"||d==="function"||d==="regexp"||a.isWindow(b)?i.call(c,b):a.merge(c,b)}return c},
inArray:function(c,a){if(a.indexOf)return a.indexOf(c);
for(var b=0,d=a.length;
b<d;
b++)if(a[b]===c)return b;
return-1},
merge:function(a,d){var e=a.length,b=0,f;
if(typeof d.length==="number")for(f=d.length;
b<f;
b++)a[e++]=d[b];
else while(d[b]!==c)a[e++]=d[b++];
a.length=e;
return a},
grep:function(b,g,c){var d=[],e,a,f;
c=!!c;
for(a=0,f=b.length;
a<f;
a++)e=!!g(b[a],a),c!==e&&d.push(b[a]);
return d},
map:function(d,g,e){for(var b=[],c,a=0,f=d.length;
a<f;
a++)c=g(d[a],a,e),c!=null&&(b[b.length]=c);
return b.concat.apply([],b)},
guid:1,
proxy:function(d,b,e){arguments.length===2&&(typeof b==="string"?(e=d,d=e[b],b=c):b&&!a.isFunction(b)&&(e=b,b=c));
!b&&d&&(b=function(){return d.apply(e||this,arguments)});
d&&(b.guid=d.guid=d.guid||b.guid||a.guid++);
return b},
access:function(b,e,f,g,h,j){var k=b.length,i,d;
if(typeof e==="object"){for(i in e)a.access(b,i,e[i],g,h,f);
return b}if(f!==c){g=!j&&g&&a.isFunction(f);
for(d=0;
d<k;
d++)h(b[d],e,g?f.call(b[d],d,h(b[d],e)):f,j);
return b}return k?h(b[0],e):c},
now:function(){return new Date().getTime()},
uaMatch:function(a){a=a.toLowerCase();
var b=v.exec(a)||A.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&D.exec(a)||[];
return{browser:b[1]||"",
version:b[2]||"0"}},
browser:{}});
a.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(b,a){m["[object "+a+"]"]=a.toLowerCase()});
h=a.uaMatch(F);
h.browser&&(a.browser[h.browser]=true,a.browser.version=h.version);
a.browser.webkit&&(a.browser.safari=true);
p&&(a.inArray=function(a,b){return p.call(b,a)});
u.test("\u00a0")||(l=/^[\s\xA0]+/,o=/[\s\xA0]+$/);
g=a(b);
b.addEventListener?e=function(){b.removeEventListener("DOMContentLoaded",e,false);
a.ready()}:b.attachEvent&&(e=function(){b.readyState==="complete"&&(b.detachEvent("onreadystatechange",e),a.ready())});
function q(){if(a.isReady)return;
try{b.documentElement.doScroll("left")}catch(c){setTimeout(q,1);
return}a.ready()}return d.jQuery=d.$=a}(),T,bL,R,s,by,bc,Y,X,bM,M,o,q,bJ,bn,bb,bh,K,L,E,i,Q,n,N,W,bz,bj,bd,bp,bl,F,k,D,O,bt,bD,y,A,bB,e,I,Z,bK,bf,w,bC,bu,bE,bH,h,bm,bF,bg,bq,bi,bx,bs,V,g,p,bG,bA,br,bv,H,v,be,ba,m,C,bk,B;
(function(){a.support={};
var g=b.documentElement,e=b.createElement("script"),c=b.createElement("div"),h="script"+a.now(),i,f,j,m,l,k;
c.style.display="none";
c.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
i=c.getElementsByTagName("*"),f=c.getElementsByTagName("a")[0],j=b.createElement("select"),m=j.appendChild(b.createElement("option"));
if(!i||!i.length||!f)return;
a.support={leadingWhitespace:c.firstChild.nodeType===3,
tbody:!c.getElementsByTagName("tbody").length,
htmlSerialize:!!c.getElementsByTagName("link").length,
style:/red/.test(f.getAttribute("style")),
hrefNormalized:f.getAttribute("href")==="/a",
opacity:/^0.55$/.test(f.style.opacity),
cssFloat:!!f.style.cssFloat,
checkOn:c.getElementsByTagName("input")[0].value==="on",
optSelected:m.selected,
deleteExpando:true,
optDisabled:false,
checkClone:false,
scriptEval:false,
noCloneEvent:true,
boxModel:null,
inlineBlockNeedsLayout:false,
shrinkWrapBlocks:false,
reliableHiddenOffsets:true};
j.disabled=true;
a.support.optDisabled=!m.disabled;
e.type="text/javascript";
try{e.appendChild(b.createTextNode("window."+h+"=1;"))}catch(o){}g.insertBefore(e,g.firstChild);
d[h]&&(a.support.scriptEval=true,delete d[h]);
try{delete e.test}catch(o){a.support.deleteExpando=false}g.removeChild(e);
c.attachEvent&&c.fireEvent&&(c.attachEvent("onclick",function n(){a.support.noCloneEvent=false;
c.detachEvent("onclick",n)}),c.cloneNode(true).fireEvent("onclick"));
c=b.createElement("div");
c.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";
l=b.createDocumentFragment();
l.appendChild(c.firstChild);
a.support.checkClone=l.cloneNode(true).cloneNode(true).lastChild.checked;
a(function(){var c=b.createElement("div"),d;
c.style.width=c.style.paddingLeft="1px";
b.body.appendChild(c);
a.boxModel=a.support.boxModel=c.offsetWidth===2;
"zoom"in c.style&&(c.style.display="inline",c.style.zoom=1,a.support.inlineBlockNeedsLayout=c.offsetWidth===2,c.style.display="",c.innerHTML="<div style='width:4px;'></div>",a.support.shrinkWrapBlocks=c.offsetWidth!==2);
c.innerHTML="<table><tr><td style='padding:0;display:none'></td><td>t</td></tr></table>";
d=c.getElementsByTagName("td");
a.support.reliableHiddenOffsets=d[0].offsetHeight===0;
d[0].style.display="";
d[1].style.display="none";
a.support.reliableHiddenOffsets=a.support.reliableHiddenOffsets&&d[0].offsetHeight===0;
c.innerHTML="";
b.body.removeChild(c).style.display="none";
c=d=null});
k=function(a){var c=b.createElement("div"),d;
a="on"+a;
d=(a in c);
d||(c.setAttribute(a,"return;"),d=typeof c[a]==="function");
c=null;
return d};
a.support.submitBubbles=k("submit");
a.support.changeBubbles=k("change");
g=e=c=i=f=null})();
T={},bL=/^(?:\{.*\}|\[.*\])$/;
a.extend({cache:{},
uuid:0,
expando:"jQuery"+a.now(),
noData:{embed:true,
object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
applet:true},
data:function(e,g,j){if(!a.acceptData(e))return;
e=e==d?T:e;
var h=e.nodeType,b=h?e[a.expando]:null,f=a.cache,i;
if(h&&!b&&typeof g==="string"&&j===c)return;
h?b||(e[a.expando]=b=++a.uuid):f=e;
typeof g==="object"?h?f[b]=a.extend(f[b],g):a.extend(f,g):h&&!f[b]&&(f[b]={});
i=h?f[b]:f;
j!==c&&(i[g]=j);
return typeof g==="string"?i[g]:i},
removeData:function(b,i){if(!a.acceptData(b))return;
b=b==d?T:b;
var c=b.nodeType,e=c?b[a.expando]:b,h=a.cache,f=c?h[e]:e,g;
if(i)f&&(delete f[i],c&&a.isEmptyObject(f)&&a.removeData(b));
else if(c&&a.support.deleteExpando)delete b[a.expando];
else if(b.removeAttribute)b.removeAttribute(a.expando);
else if(c)delete h[e];
else for(g in b)delete b[g]},
acceptData:function(c){if(c.nodeName){var b=a.noData[c.nodeName.toLowerCase()];
if(b)return!(b===true||c.getAttribute("classid")!==b)}return true}});
a.fn.extend({data:function(e,g){var b=null,i,f,h,j,d;
if(typeof e==="undefined"){if(this.length){i=this[0].attributes;
b=a.data(this[0]);
for(h=0,j=i.length;
h<j;
h++)f=i[h].name,f.indexOf("data-")===0&&(f=f.substr(5),J(this[0],f,b[f]))}return b}if(typeof e==="object")return this.each(function(){a.data(this,e)});
d=e.split(".");
d[1]=d[1]?"."+d[1]:"";
if(g===c){b=this.triggerHandler("getData"+d[1]+"!",[d[0]]);
b===c&&this.length&&(b=a.data(this[0],e),b=J(this[0],e,b));
return b===c&&d[1]?this.data(d[0]):b}return this.each(function(){var b=a(this),c=[d[0],g];
b.triggerHandler("setData"+d[1]+"!",c);
a.data(this,e,g);
b.triggerHandler("changeData"+d[1]+"!",c)})},
removeData:function(b){return this.each(function(){a.removeData(this,b)})}});
function J(d,e,b){if(b===c&&d.nodeType===1){b=d.getAttribute("data-"+e);
if(typeof b==="string"){try{b=b==="true"?true:b==="false"?false:b==="null"?null:a.isNaN(b)?bL.test(b)?a.parseJSON(b):b:parseFloat(b)}catch(f){}a.data(d,e,b)}else b=c}return b}a.extend({queue:function(e,d,c){if(!e)return;
d=(d||"fx")+"queue";
var b=a.data(e,d);
if(!c)return b||[];
!b||a.isArray(c)?b=a.data(e,d,a.makeArray(c)):b.push(c);
return b},
dequeue:function(d,b){b=b||"fx";
var e=a.queue(d,b),c=e.shift();
c==="inprogress"&&(c=e.shift());
c&&(b==="fx"&&e.unshift("inprogress"),c.call(d,function(){a.dequeue(d,b)}))}});
a.fn.extend({queue:function(b,d){typeof b!=="string"&&(d=b,b="fx");
if(d===c)return a.queue(this[0],b);
return this.each(function(){var c=a.queue(this,b,d);
b==="fx"&&c[0]!=="inprogress"&&a.dequeue(this,b)})},
dequeue:function(b){return this.each(function(){a.dequeue(this,b)})},
delay:function(b,c){b=a.fx?a.fx.speeds[b]||b:b;
c=c||"fx";
return this.queue(c,function(){var d=this;
setTimeout(function(){a.dequeue(d,c)},b)})},
clearQueue:function(a){return this.queue(a||"fx",[])}});
R=/[\n\t]/g,s=/\s+/,by=/\r/g,bc=/^(?:href|src|style)$/,Y=/^(?:button|input)$/i,X=/^(?:button|input|object|select|textarea)$/i,bM=/^a(?:rea)?$/i,M=/^(?:radio|checkbox)$/i;
a.props={"for":"htmlFor",
"class":"className",
readonly:"readOnly",
maxlength:"maxLength",
cellspacing:"cellSpacing",
rowspan:"rowSpan",
colspan:"colSpan",
tabindex:"tabIndex",
usemap:"useMap",
frameborder:"frameBorder"};
a.fn.extend({attr:function(c,b){return a.access(this,c,b,true,a.attr)},
removeAttr:function(b){return this.each(function(){a.attr(this,b,"");
this.nodeType===1&&this.removeAttribute(b)})},
addClass:function(c){if(a.isFunction(c))return this.each(function(d){var b=a(this);
b.addClass(c.call(this,d,b.attr("class")))});
if(c&&typeof c==="string"){for(var e=(c||"").split(s),f=0,h=this.length,b,j,g,d,i;
f<h;
f++){b=this[f];
if(b.nodeType===1){if(!b.className)b.className=c;
else{j=" "+b.className+" ",g=b.className,d=0,i=e.length;
for(;
d<i;
d++)j.indexOf(" "+e[d]+" ")<0&&(g+=" "+e[d]);
b.className=a.trim(g)}}}}return this},
removeClass:function(b){if(a.isFunction(b))return this.each(function(d){var c=a(this);
c.removeClass(b.call(this,d,c.attr("class")))});
if(b&&typeof b==="string"||b===c){for(var h=(b||"").split(s),f=0,i=this.length,d,e,g,j;
f<i;
f++){d=this[f];
if(d.nodeType===1&&d.className){if(b){e=(" "+d.className+" ").replace(R," "),g=0,j=h.length;
for(;
g<j;
g++)e=e.replace(" "+h[g]+" "," ");
d.className=a.trim(e)}else d.className=""}}}return this},
toggleClass:function(b,c){var d=typeof b,e=typeof c==="boolean";
if(a.isFunction(b))return this.each(function(e){var d=a(this);
d.toggleClass(b.call(this,e,d.attr("class"),c),c)});
return this.each(function(){if(d==="string"){var g,j=0,h=a(this),f=c,i=b.split(s);
while(g=i[j++])f=e?f:!h.hasClass(g),h[f?"addClass":"removeClass"](g)}else(d==="undefined"||d==="boolean")&&(this.className&&a.data(this,"__className__",this.className),this.className=this.className||b===false?"":a.data(this,"__className__")||"")})},
hasClass:function(b){for(var d=" "+b+" ",a=0,c=this.length;
a<c;
a++)if((" "+this[a].className+" ").replace(R," ").indexOf(d)>-1)return true;
return false},
val:function(d){if(!arguments.length){var b=this[0],k,h,j,i,f,g,m,e,l;
if(b){if(a.nodeName(b,"option")){k=b.attributes.value;
return!k||k.specified?b.value:b.text}if(a.nodeName(b,"select")){h=b.selectedIndex,j=[],i=b.options,f=b.type==="select-one";
if(h<0)return null;
for(g=f?h:0,m=f?h+1:i.length;
g<m;
g++){e=i[g];
if(e.selected&&(a.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!a.nodeName(e.parentNode,"optgroup"))){d=a(e).val();
if(f)return d;
j.push(d)}}return j}if(M.test(b.type)&&!a.support.checkOn)return b.getAttribute("value")===null?"on":b.value;
return(b.value||"").replace(by,"")}return c}l=a.isFunction(d);
return this.each(function(f){var e=a(this),b=d,c;
if(this.nodeType!==1)return;
l&&(b=d.call(this,f,e.val()));
b==null?b="":typeof b==="number"?b+="":a.isArray(b)&&(b=a.map(b,function(a){return a==null?"":a+""}));
if(a.isArray(b)&&M.test(this.type))this.checked=a.inArray(e.val(),b)>=0;
else if(a.nodeName(this,"select")){c=a.makeArray(b);
a("option",this).each(function(){this.selected=a.inArray(a(this).val(),c)>=0});
c.length||(this.selectedIndex=-1)}else this.value=b})}});
a.extend({attrFn:{val:true,
css:true,
html:true,
text:true,
data:true,
width:true,
height:true,
offset:true},
attr:function(b,d,e,l){if(!b||b.nodeType===3||b.nodeType===8)return c;
if(l&&d in a.attrFn)return a(b)[d](e);
var f=b.nodeType!==1||!a.isXMLDoc(b),i=e!==c,k,g,h,j;
d=f&&a.props[d]||d;
if(b.nodeType===1){k=bc.test(d);
if(d==="selected"&&!a.support.optSelected){g=b.parentNode;
g&&(g.selectedIndex,g.parentNode&&g.parentNode.selectedIndex)}if((d in b||b[d]!==c)&&f&&!k){i&&(d==="type"&&Y.test(b.nodeName)&&b.parentNode&&a.error("type property can't be changed"),e===null?b.nodeType===1&&b.removeAttribute(d):b[d]=e);
if(a.nodeName(b,"form")&&b.getAttributeNode(d))return b.getAttributeNode(d).nodeValue;
if(d==="tabIndex"){h=b.getAttributeNode("tabIndex");
return h&&h.specified?h.value:X.test(b.nodeName)||bM.test(b.nodeName)&&b.href?0:c}return b[d]}if(!a.support.style&&f&&d==="style"){i&&(b.style.cssText=""+e);
return b.style.cssText}i&&b.setAttribute(d,""+e);
if(!b.attributes[d]&&(b.hasAttribute&&!b.hasAttribute(d)))return c;
j=!a.support.hrefNormalized&&f&&k?b.getAttribute(d,2):b.getAttribute(d);
return j===null?c:j}}});
o=/\.(.*)$/,q=/^(?:textarea|input|select)$/i,bJ=/\./g,bn=/ /g,bb=/[^\w\s.|`]/g,bh=function(a){return a.replace(bb,"\\$&")},K={focusin:0,
focusout:0};
a.event={add:function(b,o,f,q){if(b.nodeType===3||b.nodeType===8)return;
a.isWindow(b)&&(b!==d&&!b.frameElement)&&(b=d);
if(f===false)f=j;
else if(!f)return;
var m,g,k,r,h,i,e,s,l,p,n;
f.handler&&(m=f,f=m.handler);
f.guid||(f.guid=a.guid++);
k=a.data(b);
if(!k)return;
r=b.nodeType?"events":"__events__",h=k[r],i=k.handle;
typeof h==="function"?(i=h.handle,h=h.events):h||(b.nodeType||(k[r]=k=function(){}),k.events=h={});
i||(k.handle=i=function(){return typeof a!=="undefined"&&!a.event.triggered?a.event.handle.apply(i.elem,arguments):c});
i.elem=b;
o=o.split(" ");
s=0;
while(e=o[s++]){g=m?a.extend({},m):{handler:f,
data:q};
e.indexOf(".")>-1?(l=e.split("."),e=l.shift(),g.namespace=l.slice(0).sort().join(".")):(l=[],g.namespace="");
g.type=e;
g.guid||(g.guid=f.guid);
p=h[e],n=a.event.special[e]||{};
p||(p=h[e]=[],(!n.setup||n.setup.call(b,q,l,i)===false)&&(b.addEventListener?b.addEventListener(e,i,false):b.attachEvent&&b.attachEvent("on"+e,i)));
n.add&&(n.add.call(b,g),g.handler.guid||(g.handler.guid=f.guid));
p.push(g);
a.event.global[e]=true}b=null},
global:{},
remove:function(d,b,l,n){if(d.nodeType===3||d.nodeType===8)return;
l===false&&(l=j);
var t,c,e,u=0,o,m,p,k,g,i,r,q=d.nodeType?"events":"__events__",f=a.data(d),h=f&&f[q],s;
if(!f||!h)return;
typeof h==="function"&&(f=h,h=h.events);
b&&b.type&&(l=b.handler,b=b.type);
if(!b||typeof b==="string"&&b.charAt(0)==="."){b=b||"";
for(c in h)a.event.remove(d,c+b);
return}b=b.split(" ");
while(c=b[u++]){r=c;
i=null;
o=c.indexOf(".")<0;
m=[];
o||(m=c.split("."),c=m.shift(),p=new RegExp("(^|\\.)"+a.map(m.slice(0).sort(),bh).join("\\.(?:.*\\.)?")+"(\\.|$)"));
g=h[c];
if(!g)continue;
if(!l){for(e=0;
e<g.length;
e++)i=g[e],(o||p.test(i.namespace))&&(a.event.remove(d,r,i.handler,e),g.splice(e--,1));
continue}k=a.event.special[c]||{};
for(e=n||0;
e<g.length;
e++){i=g[e];
if(l.guid===i.guid){(o||p.test(i.namespace))&&(n==null&&g.splice(e--,1),k.remove&&k.remove.call(d,i));
if(n!=null)break}}(g.length===0||n!=null&&g.length===1)&&((!k.teardown||k.teardown.call(d,m)===false)&&a.removeEvent(d,c,f.handle),t=null,delete h[c])}if(a.isEmptyObject(h)){s=f.handle;
s&&(s.elem=null);
delete f.events;
delete f.handle;
typeof f==="function"?a.removeData(d,q):a.isEmptyObject(f)&&a.removeData(d)}},
trigger:function(b,g,d){var e=b.type||b,m=arguments[3],l,k,f,i,h,n,j;
if(!m){b=typeof b==="object"?b[a.expando]?b:a.extend(a.Event(e),b):a.Event(e);
e.indexOf("!")>=0&&(b.type=e=e.slice(0,-1),b.exclusive=true);
d||(b.stopPropagation(),a.event.global[e]&&a.each(a.cache,function(){this.events&&this.events[e]&&a.event.trigger(b,g,this.handle.elem)}));
if(!d||d.nodeType===3||d.nodeType===8)return c;
b.result=c;
b.target=d;
g=a.makeArray(g);
g.unshift(b)}b.currentTarget=d;
l=d.nodeType?a.data(d,"handle"):(a.data(d,"__events__")||{}).handle;
l&&l.apply(d,g);
k=d.parentNode||d.ownerDocument;
try{d&&d.nodeName&&a.noData[d.nodeName.toLowerCase()]||d["on"+e]&&d["on"+e].apply(d,g)===false&&(b.result=false,b.preventDefault())}catch(q){}if(!b.isPropagationStopped()&&k)a.event.trigger(b,g,k,true);
else if(!b.isDefaultPrevented()){f=b.target,h=e.replace(o,""),n=a.nodeName(f,"a")&&h==="click",j=a.event.special[h]||{};
if((!j._default||j._default.call(d,b)===false)&&!n&&!(f&&f.nodeName&&a.noData[f.nodeName.toLowerCase()])){try{f[h]&&(i=f["on"+h],i&&(f["on"+h]=null),a.event.triggered=true,f[h]())}catch(p){}i&&(f["on"+h]=i);
a.event.triggered=false}}},
handle:function(b){var l,f,i,h=[],m,e,n=a.makeArray(arguments),k,o,g,j;
b=n[0]=a.event.fix(b||d.event);
b.currentTarget=this;
l=b.type.indexOf(".")<0&&!b.exclusive;
l||(i=b.type.split("."),b.type=i.shift(),h=i.slice(0).sort(),m=new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.)?")+"(\\.|$)"));
b.namespace=b.namespace||h.join(".");
e=a.data(this,this.nodeType?"events":"__events__");
typeof e==="function"&&(e=e.events);
f=(e||{})[b.type];
if(e&&f){f=f.slice(0);
for(k=0,o=f.length;
k<o;
k++){g=f[k];
if(l||m.test(g.namespace)){b.handler=g.handler;
b.data=g.data;
b.handleObj=g;
j=g.handler.apply(this,n);
j!==c&&(b.result=j,j===false&&(b.preventDefault(),b.stopPropagation()));
if(b.isImmediatePropagationStopped())break}}}return b.result},
props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
fix:function(d){if(d[a.expando])return d;
var i=d,h,g,e,f;
d=a.Event(i);
for(h=this.props.length;
h;
)g=this.props[--h],d[g]=i[g];
d.target||(d.target=d.srcElement||b);
d.target.nodeType===3&&(d.target=d.target.parentNode);
!d.relatedTarget&&d.fromElement&&(d.relatedTarget=d.fromElement===d.target?d.toElement:d.fromElement);
if(d.pageX==null&&d.clientX!=null){e=b.documentElement,f=b.body;
d.pageX=d.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0);
d.pageY=d.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)}d.which==null&&(d.charCode!=null||d.keyCode!=null)&&(d.which=d.charCode!=null?d.charCode:d.keyCode);
!d.metaKey&&d.ctrlKey&&(d.metaKey=d.ctrlKey);
!d.which&&d.button!==c&&(d.which=d.button&1?1:d.button&2?3:d.button&4?2:0);
return d},
guid:100000000,
proxy:a.proxy,
special:{ready:{setup:a.bindReady,
teardown:a.noop},
live:{add:function(b){a.event.add(this,l(b.origType,b.selector),a.extend({},b,{handler:bo,
guid:b.handler.guid}))},
remove:function(b){a.event.remove(this,l(b.origType,b.selector),b)}},
beforeunload:{setup:function(d,c,b){a.isWindow(this)&&(this.onbeforeunload=b)},
teardown:function(b,a){this.onbeforeunload===a&&(this.onbeforeunload=null)}}}};
a.removeEvent=b.removeEventListener?function(a,c,b){a.removeEventListener&&a.removeEventListener(c,b,false)}:function(a,c,b){a.detachEvent&&a.detachEvent("on"+c,b)};
a.Event=function(b){if(!this.preventDefault)return new a.Event(b);
b&&b.type?(this.originalEvent=b,this.type=b.type):this.type=b;
this.timeStamp=a.now();
this[a.expando]=true};
function j(){return false}function t(){return true}a.Event.prototype={preventDefault:function(){this.isDefaultPrevented=t;
var a=this.originalEvent;
if(!a)return;
a.preventDefault?a.preventDefault():a.returnValue=false},
stopPropagation:function(){this.isPropagationStopped=t;
var a=this.originalEvent;
if(!a)return;
a.stopPropagation&&a.stopPropagation();
a.cancelBubble=true},
stopImmediatePropagation:function(){this.isImmediatePropagationStopped=t;
this.stopPropagation()},
isDefaultPrevented:j,
isPropagationStopped:j,
isImmediatePropagationStopped:j};
L=function(c){var b=c.relatedTarget;
try{while(b&&b!==this)b=b.parentNode;
b!==this&&(c.type=c.data,a.event.handle.apply(this,arguments))}catch(d){}},E=function(b){b.type=b.data;
a.event.handle.apply(this,arguments)};
a.each({mouseenter:"mouseover",
mouseleave:"mouseout"},function(b,c){a.event.special[b]={setup:function(d){a.event.add(this,c,d&&d.selector?E:L,b)},
teardown:function(b){a.event.remove(this,c,b&&b.selector?E:L)}}});
a.support.submitBubbles||(a.event.special.submit={setup:function(){if(this.nodeName.toLowerCase()!=="form")a.event.add(this,"click.specialSubmit",function(d){var b=d.target,e=b.type;
if((e==="submit"||e==="image")&&a(b).closest("form").length){d.liveFired=c;
return P("submit",this,arguments)}}),a.event.add(this,"keypress.specialSubmit",function(b){var d=b.target,e=d.type;
if((e==="text"||e==="password")&&a(d).closest("form").length&&b.keyCode===13){b.liveFired=c;
return P("submit",this,arguments)}});
else return false},
teardown:function(){a.event.remove(this,".specialSubmit")}});
if(!a.support.changeBubbles){Q=function(b){var d=b.type,c=b.value;
d==="radio"||d==="checkbox"?c=b.checked:d==="select-multiple"?c=b.selectedIndex>-1?a.map(b.options,function(a){return a.selected}).join("-"):"":b.nodeName.toLowerCase()==="select"&&(c=b.selectedIndex);
return c},n=function n(d){var b=d.target,f,e;
if(!q.test(b.nodeName)||b.readOnly)return;
f=a.data(b,"_change_data");
e=Q(b);
(d.type!=="focusout"||b.type!=="radio")&&a.data(b,"_change_data",e);
if(f===c||e===f)return;
if(f!=null||e){d.type="change";
d.liveFired=c;
return a.event.trigger(d,arguments[1],b)}};
a.event.special.change={filters:{focusout:n,
beforedeactivate:n,
click:function(b){var a=b.target,c=a.type;
if(c==="radio"||c==="checkbox"||a.nodeName.toLowerCase()==="select")return n.call(this,b)},
keydown:function(a){var c=a.target,b=c.type;
if(a.keyCode===13&&c.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(b==="checkbox"||b==="radio")||b==="select-multiple")return n.call(this,a)},
beforeactivate:function(c){var b=c.target;
a.data(b,"_change_data",Q(b))}},
setup:function(){if(this.type==="file")return false;
for(var b in i)a.event.add(this,b+".specialChange",i[b]);
return q.test(this.nodeName)},
teardown:function(){a.event.remove(this,".specialChange");
return q.test(this.nodeName)}};
i=a.event.special.change.filters;
i.focus=i.beforeactivate}function P(d,c,b){b[0].type=d;
return a.event.handle.apply(c,b)}b.addEventListener&&a.each({focus:"focusin",
blur:"focusout"},function(d,c){a.event.special[c]={setup:function(){K[c]++===0&&b.addEventListener(d,e,true)},
teardown:function(){--K[c]===0&&b.removeEventListener(d,e,true)}};
function e(b){b=a.event.fix(b);
b.type=c;
return a.event.trigger(b,null,b.target)}});
a.each(["bind","one"],function(d,b){a.fn[b]=function(f,d,e){if(typeof f==="object"){for(h in f)this[b](h,d,f[h],e);
return this}(a.isFunction(d)||d===false)&&(e=d,d=c);
var i=b==="one"?a.proxy(e,function(b){a(this).unbind(b,i);
return e.apply(this,arguments)}):e,h,g,j;
if(f==="unload"&&b!=="one")this.one(f,d,e);
else for(g=0,j=this.length;
g<j;
g++)a.event.add(this[g],f,i,d);
return this}});
a.fn.extend({unbind:function(b,e){if(typeof b==="object"&&!b.preventDefault)for(c in b)this.unbind(c,b[c]);
else for(var d=0,f=this.length,c;
d<f;
d++)a.event.remove(this[d],b,e);
return this},
delegate:function(a,c,d,b){return this.live(c,d,b,a)},
undelegate:function(a,c,b){return arguments.length===0?this.unbind("live"):this.die(c,null,b,a)},
trigger:function(c,b){return this.each(function(){a.event.trigger(c,b,this)})},
triggerHandler:function(d,c){if(this[0]){var b=a.Event(d);
b.preventDefault();
b.stopPropagation();
a.event.trigger(b,c,this[0]);
return b.result}},
toggle:function(b){var c=arguments,d=1;
while(d<c.length)a.proxy(b,c[d++]);
return this.click(a.proxy(b,function(f){var e=(a.data(this,"lastToggle"+b.guid)||0)%d;
a.data(this,"lastToggle"+b.guid,e+1);
f.preventDefault();
return c[e].apply(this,arguments)||false}))},
hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});
N={focus:"focusin",
blur:"focusout",
mouseenter:"mouseover",
mouseleave:"mouseout"};
a.each(["live","die"],function(d,b){a.fn[b]=function(e,g,h,p){var d,s=0,k,f,q,i=p||this.selector,j=p?this:a(this.context),m,n,r;
if(typeof e==="object"&&!e.preventDefault){for(m in e)j[b](m,g,e[m],i);
return this}a.isFunction(g)&&(h=g,g=c);
e=(e||"").split(" ");
while((d=e[s++])!=null){k=o.exec(d);
f="";
k&&(f=k[0],d=d.replace(o,""));
if(d==="hover"){e.push("mouseenter"+f,"mouseleave"+f);
continue}q=d;
d==="focus"||d==="blur"?(e.push(N[d]+f),d=d+f):d=(N[d]||d)+f;
if(b==="live")for(n=0,r=j.length;
n<r;
n++)a.event.add(j[n],"live."+l(d,i),{data:g,
selector:i,
handler:h,
origType:d,
origHandler:h,
preType:q});
else j.unbind("live."+l(d,i),h)}return this}});
function bo(b){var s,l,q=[],r=[],k,c,d,n,e,f,j,i,p,m,g=a.data(this,this.nodeType?"events":"__events__"),h;
typeof g==="function"&&(g=g.events);
if(b.liveFired===this||!g||!g.live||b.button&&b.type==="click")return;
b.namespace&&(p=new RegExp("(^|\\.)"+b.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)"));
b.liveFired=this;
h=g.live.slice(0);
for(e=0;
e<h.length;
e++)d=h[e],d.origType.replace(o,"")===b.type?r.push(d.selector):h.splice(e--,1);
c=a(b.target).closest(r,b.currentTarget);
for(f=0,j=c.length;
f<j;
f++){i=c[f];
for(e=0;
e<h.length;
e++)d=h[e],i.selector===d.selector&&(!p||p.test(d.namespace))&&(n=i.elem,k=null,(d.preType==="mouseenter"||d.preType==="mouseleave")&&(b.type=d.preType,k=a(b.relatedTarget).closest(d.selector)[0]),(!k||k!==n)&&q.push({elem:n,
handleObj:d,
level:i.level}))}for(f=0,j=q.length;
f<j;
f++){c=q[f];
if(l&&c.level>l)break;
b.currentTarget=c.elem;
b.data=c.handleObj.data;
b.handleObj=c.handleObj;
m=c.handleObj.origHandler.apply(c.elem,arguments);
if(m===false||b.isPropagationStopped()){l=c.level;
m===false&&(s=false);
if(b.isImmediatePropagationStopped())break}}return s}function l(a,b){return(a&&a!=="*"?a+".":"")+b.replace(bJ,"`").replace(bn,"&")}a.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(c,b){a.fn[b]=function(c,a){a==null&&(a=c,c=null);
return arguments.length>0?this.bind(b,c,a):this.trigger(b)};
a.attrFn&&(a.attrFn[b]=true)});
d.attachEvent&&!d.addEventListener&&a(d).bind("unload",function(){for(b in a.cache)if(a.cache[b].handle)try{a.event.remove(a.cache[b].handle.elem)}catch(c){}var b});
(function(){var k=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,l=0,n=Object.prototype.toString,j=false,o=true,d,e,r,s,g,f,i,h,p;
[0,0].sort(function(){o=false;
return 0});
d=function(l,c,i,t){i=i||[];
c=c||b;
var y=c,a,o,m,g,v,w,u,x,j,q,s,h;
if(c.nodeType!==1&&c.nodeType!==9)return[];
if(!l||typeof l!=="string")return i;
a=[],w=true,u=d.isXML(c),x=l;
do{k.exec("");
o=k.exec(x);
if(o){x=o[3];
a.push(o[1]);
if(o[2]){v=o[3];
break}}}while(o);
if(a.length>1&&r.exec(l)){if(a.length===2&&e.relative[a[0]])m=p(a[0]+a[1],c);
else{m=e.relative[a[0]]?[c]:d(a.shift(),c);
while(a.length)l=a.shift(),e.relative[l]&&(l+=a.shift()),m=p(l,m)}}else{!t&&a.length>1&&c.nodeType===9&&!u&&e.match.ID.test(a[0])&&!e.match.ID.test(a[a.length-1])&&(j=d.find(a.shift(),c,u),c=j.expr?d.filter(j.expr,j.set)[0]:j.set[0]);
if(c){j=t?{expr:a.pop(),
set:f(t)}:d.find(a.pop(),a.length===1&&(a[0]==="~"||a[0]==="+")&&c.parentNode?c.parentNode:c,u);
m=j.expr?d.filter(j.expr,j.set):j.set;
a.length>0?g=f(m):w=false;
while(a.length)q=a.pop(),s=q,e.relative[q]?s=a.pop():q="",s==null&&(s=c),e.relative[q](g,s,u)}else g=a=[]}g||(g=m);
g||d.error(q||l);
if(n.call(g)==="[object Array]"){if(!w)i.push.apply(i,g);
else if(c&&c.nodeType===1)for(h=0;
g[h]!=null;
h++)g[h]&&(g[h]===true||g[h].nodeType===1&&d.contains(c,g[h]))&&i.push(m[h]);
else for(h=0;
g[h]!=null;
h++)g[h]&&g[h].nodeType===1&&i.push(m[h])}else f(g,i);
v&&(d(v,y,i,t),d.uniqueSort(i));
return i};
d.uniqueSort=function(a){if(i){j=o;
a.sort(i);
if(j)for(var b=1;
b<a.length;
b++)a[b]===a[b-1]&&a.splice(b--,1)}return a};
d.matches=function(b,a){return d(b,null,null,a)};
d.matchesSelector=function(b,a){return d(a,null,null,[b]).length>0};
d.find=function(b,h,i){var c,f,j,d,a,g;
if(!b)return[];
for(f=0,j=e.order.length;
f<j;
f++){d=e.order[f];
if(a=e.leftMatch[d].exec(b)){g=a[1];
a.splice(1,1);
if(g.substr(g.length-1)!=="\\"){a[1]=(a[1]||"").replace(/\\/g,"");
c=e.find[d](a,h,i);
if(c!=null){b=b.replace(e.match[d],"");
break}}}}c||(c=h.getElementsByTagName("*"));
return{set:c,
expr:b}};
d.filter=function(b,k,n,p){var r=b,j=[],f=k,a,g,t=k&&k[0]&&d.isXML(k[0]),h,s,i,l,o,m,q;
while(b&&k.length){for(h in e.filter)if((a=e.leftMatch[h].exec(b))!=null&&a[2]){s=e.filter[h],o=a[1];
g=false;
a.splice(1,1);
if(o.substr(o.length-1)==="\\")continue;
f===j&&(j=[]);
if(e.preFilter[h]){a=e.preFilter[h](a,f,n,j,p,t);
if(!a)g=i=true;
else if(a===true)continue}if(a)for(m=0;
(l=f[m])!=null;
m++)if(l){i=s(l,a,m,f);
q=p^!!i;
n&&i!=null?q?g=true:f[m]=false:q&&(j.push(l),g=true)}if(i!==c){n||(f=j);
b=b.replace(e.match[h],"");
if(!g)return[];
break}}if(b===r){if(g==null)d.error(b);
else break}r=b}return f};
d.error=function(a){throw "Syntax error, unrecognized expression: "+a};
e=d.selectors={order:["ID","NAME","TAG"],
match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+\-]*)\))?/,
POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},
leftMatch:{},
attrMap:{"class":"className",
"for":"htmlFor"},
attrHandle:{href:function(a){return a.getAttribute("href")}},
relative:{"+":function(e,b){var h=typeof b==="string",g=h&&!/\W/.test(b),f=h&&!g,c,i,a;
g&&(b=b.toLowerCase());
for(c=0,i=e.length;
c<i;
c++)if(a=e[c]){while((a=a.previousSibling)&&a.nodeType!==1);
e[c]=f||a&&a.nodeName.toLowerCase()===b?a||false:a===b}f&&d.filter(b,e,true)},
">":function(e,c){var f=typeof c==="string",b,a=0,g=e.length,h;
if(f&&!/\W/.test(c)){c=c.toLowerCase();
for(;
a<g;
a++){b=e[a];
if(b){h=b.parentNode;
e[a]=h.nodeName.toLowerCase()===c?h:false}}}else{for(;
a<g;
a++)b=e[a],b&&(e[a]=f?b.parentNode:b.parentNode===c);
f&&d.filter(c,e,true)}},
"":function(f,a,d){var e=l++,b=m,c;
typeof a==="string"&&!/\W/.test(a)&&(a=a.toLowerCase(),c=a,b=q);
b("parentNode",a,e,f,c,d)},
"~":function(f,a,d){var e=l++,b=m,c;
typeof a==="string"&&!/\W/.test(a)&&(a=a.toLowerCase(),c=a,b=q);
b("previousSibling",a,e,f,c,d)}},
find:{ID:function(d,b,c){if(typeof b.getElementById!=="undefined"&&!c){var a=b.getElementById(d[1]);
return a&&a.parentNode?[a]:[]}},
NAME:function(d,e){if(typeof e.getElementsByName!=="undefined"){for(var c=[],b=e.getElementsByName(d[1]),a=0,f=b.length;
a<f;
a++)b[a].getAttribute("name")===d[1]&&c.push(b[a]);
return c.length===0?null:c}},
TAG:function(b,a){return a.getElementsByTagName(b[1])}},
preFilter:{CLASS:function(b,e,d,h,g,f){b=" "+b[1].replace(/\\/g,"")+" ";
if(f)return b;
for(var c=0,a;
(a=e[c])!=null;
c++)a&&(g^(a.className&&(" "+a.className+" ").replace(/[\t\n]/g," ").indexOf(b)>=0)?d||h.push(a):d&&(e[c]=false));
return false},
ID:function(a){return a[1].replace(/\\/g,"")},
TAG:function(a){return a[1].toLowerCase()},
CHILD:function(a){if(a[1]==="nth"){var b=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);
a[2]=(b[1]+(b[2]||1))-0;
a[3]=b[3]-0}a[0]=l++;
return a},
ATTR:function(a,g,d,h,f,c){var b=a[1].replace(/\\/g,"");
!c&&e.attrMap[b]&&(a[1]=e.attrMap[b]);
a[2]==="~="&&(a[4]=" "+a[4]+" ");
return a},
PSEUDO:function(a,c,b,f,h){if(a[1]==="not"){if((k.exec(a[3])||"").length>1||/^\w/.test(a[3]))a[3]=d(a[3],null,null,c);
else{var g=d.filter(a[3],c,b,true^h);
b||f.push.apply(f,g);
return false}}else if(e.match.POS.test(a[0])||e.match.CHILD.test(a[0]))return true;
return a},
POS:function(a){a.unshift(true);
return a}},
filters:{enabled:function(a){return a.disabled===false&&a.type!=="hidden"},
disabled:function(a){return a.disabled===true},
checked:function(a){return a.checked===true},
selected:function(a){a.parentNode.selectedIndex;
return a.selected===true},
parent:function(a){return!!a.firstChild},
empty:function(a){return!a.firstChild},
has:function(b,c,a){return!!d(a[3],b).length},
header:function(a){return/h\d/i.test(a.nodeName)},
text:function(a){return"text"===a.type},
radio:function(a){return"radio"===a.type},
checkbox:function(a){return"checkbox"===a.type},
file:function(a){return"file"===a.type},
password:function(a){return"password"===a.type},
submit:function(a){return"submit"===a.type},
image:function(a){return"image"===a.type},
reset:function(a){return"reset"===a.type},
button:function(a){return"button"===a.type||a.nodeName.toLowerCase()==="button"},
input:function(a){return/input|select|textarea|button/i.test(a.nodeName)}},
setFilters:{first:function(b,a){return a===0},
last:function(d,b,c,a){return b===a.length-1},
even:function(b,a){return a%2===0},
odd:function(b,a){return a%2===1},
lt:function(c,b,a){return b<a[3]-0},
gt:function(c,b,a){return b>a[3]-0},
nth:function(c,b,a){return a[3]-0===b},
eq:function(c,b,a){return a[3]-0===b}},
filter:{PSEUDO:function(a,b,k,i){var c=b[1],h=e.filters[c],g,f,j;
if(h)return h(a,k,b,i);
if(c==="contains")return(a.textContent||a.innerText||d.getText([a])||"").indexOf(b[3])>=0;
if(c==="not"){g=b[3],f=0,j=g.length;
for(;
f<j;
f++)if(g[f]===a)return false;
return true}d.error("Syntax error, unrecognized expression: "+c)},
CHILD:function(b,d){var g=d[1],a=b,c,i,h,e,j,f;
switch(g){case"only":case"first":while(a=a.previousSibling)if(a.nodeType===1)return false;
if(g==="first")return true;
a=b;
case"last":while(a=a.nextSibling)if(a.nodeType===1)return false;
return true;
case"nth":c=d[2],i=d[3];
if(c===1&&i===0)return true;
h=d[0],e=b.parentNode;
if(e&&(e.sizcache!==h||!b.nodeIndex)){j=0;
for(a=e.firstChild;
a;
a=a.nextSibling)a.nodeType===1&&(a.nodeIndex=++j);
e.sizcache=h};
f=b.nodeIndex-i;
return c===0?f===0:f%c===0&&f/c>=0}},
ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},
TAG:function(b,a){return a==="*"&&b.nodeType===1||b.nodeName.toLowerCase()===a},
CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},
ATTR:function(f,g){var d=g[1],h=e.attrHandle[d]?e.attrHandle[d](f):f[d]!=null?f[d]:f.getAttribute(d),b=h+"",c=g[2],a=g[4];
return h==null?c==="!=":c==="="?b===a:c==="*="?b.indexOf(a)>=0:c==="~="?(" "+b+" ").indexOf(a)>=0:a?c==="!="?b!==a:c==="^="?b.indexOf(a)===0:c==="$="?b.substr(b.length-a.length)===a:c==="|="?b===a||b.substr(0,a.length+1)===a+"-":false:b&&h!==false},
POS:function(c,a,f,d){var g=a[2],b=e.setFilters[g];
if(b)return b(c,f,a,d)}}},r=e.match.POS,s=function(b,a){return"\\"+(a-0+1)};
for(g in e.match)e.match[g]=new RegExp(e.match[g].source+/(?![^\[]*\])(?![^\(]*\))/.source),e.leftMatch[g]=new RegExp(/(^(?:.|\r|\n)*?)/.source+e.match[g].source.replace(/\\(\d+)/g,s));
f=function(b,a){b=Array.prototype.slice.call(b,0);
if(a){a.push.apply(a,b);
return a}return b};
try{Array.prototype.slice.call(b.documentElement.childNodes,0)[0].nodeType}catch(t){f=function(a,e){var c=e||[],b=0,d;
if(n.call(a)==="[object Array]")Array.prototype.push.apply(c,a);
else if(typeof a.length==="number")for(d=a.length;
b<d;
b++)c.push(a[b]);
else for(;
a[b];
b++)c.push(a[b]);
return c}}b.documentElement.compareDocumentPosition?(i=function(a,b){if(a===b){j=true;
return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;
return a.compareDocumentPosition(b)&4?-1:1}):(i=function(f,e){var d=[],c=[],g=f.parentNode,k=e.parentNode,b=g,i,l,a;
if(f===e){j=true;
return 0}if(g===k)return h(f,e);
if(!g)return-1;
if(!k)return 1;
while(b)d.unshift(b),b=b.parentNode;
b=k;
while(b)c.unshift(b),b=b.parentNode;
i=d.length;
l=c.length;
for(a=0;
a<i&&a<l;
a++)if(d[a]!==c[a])return h(d[a],c[a]);
return a===i?h(f,c[a],-1):h(d[a],e,1)},h=function(c,b,d){if(c===b)return d;
var a=c.nextSibling;
while(a){if(a===b)return-1;
a=a.nextSibling}return 1});
d.getText=function(e){for(var b="",a,c=0;
e[c];
c++)a=e[c],a.nodeType===3||a.nodeType===4?b+=a.nodeValue:a.nodeType!==8&&(b+=d.getText(a.childNodes));
return b};
(function(){var a=b.createElement("div"),f="script"+new Date().getTime(),d;
a.innerHTML="<a name='"+f+"'/>";
d=b.documentElement;
d.insertBefore(a,d.firstChild);
b.getElementById(f)&&(e.find.ID=function(b,d,e){if(typeof d.getElementById!=="undefined"&&!e){var a=d.getElementById(b[1]);
return a?a.id===b[1]||typeof a.getAttributeNode!=="undefined"&&a.getAttributeNode("id").nodeValue===b[1]?[a]:c:[]}},e.filter.ID=function(a,c){var b=typeof a.getAttributeNode!=="undefined"&&a.getAttributeNode("id");
return a.nodeType===1&&b&&b.nodeValue===c});
d.removeChild(a);
d=a=null})();
(function(){var a=b.createElement("div");
a.appendChild(b.createComment(""));
a.getElementsByTagName("*").length>0&&(e.find.TAG=function(c,e){var a=e.getElementsByTagName(c[1]),d,b;
if(c[1]==="*"){d=[],b=0;
for(;
a[b];
b++)a[b].nodeType===1&&d.push(a[b]);
a=d}return a});
a.innerHTML="<a href='#'></a>";
a.firstChild&&typeof a.firstChild.getAttribute!=="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(e.attrHandle.href=function(a){return a.getAttribute("href",2)});
a=null})();
b.querySelectorAll&&(function(){var e=d,a=b.createElement("div"),c;
a.innerHTML="<p class='TEST'></p>";
if(a.querySelectorAll&&a.querySelectorAll(".TEST").length===0)return;
d=function(c,a,g,h){a=a||b;
if(!h&&!d.isXML(a)){if(a.nodeType===9)try{return f(a.querySelectorAll(c),g)}catch(k){}else if(a.nodeType===1&&a.nodeName.toLowerCase()!=="object"){var i=a.getAttribute("id"),j=a.id="__sizzle__";
try{return f(a.querySelectorAll("#"+j+" "+c),g)}catch(l){}finally{i?a.id=i:a.removeAttribute("id")}}}return e(c,a,g,h)};
for(c in e)d[c]=e[c];
a=null})();
(function(){var a=b.documentElement,c=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector,f=false;
try{c.call(b.documentElement,"[test!='']:sizzle")}catch(g){f=true}c&&(d.matchesSelector=function(b,a){if(!d.isXML(b))try{if(f||!e.match.PSEUDO.test(a)&&!/!=/.test(a))return c.call(b,a)}catch(g){}return d(a,null,null,[b]).length>0})})();
(function(){var a=b.createElement("div");
a.innerHTML="<div class='test e'></div><div class='test'></div>";
if(!a.getElementsByClassName||a.getElementsByClassName("e").length===0)return;
a.lastChild.className="e";
if(a.getElementsByClassName("e").length===1)return;
e.order.splice(1,0,"CLASS");
e.find.CLASS=function(c,a,b){if(typeof a.getElementsByClassName!=="undefined"&&!b)return a.getElementsByClassName(c[1])};
a=null})();
function q(e,h,f,c,j,g){for(var b=0,i=c.length,a,d;
b<i;
b++){a=c[b];
if(a){a=a[e];
d=false;
while(a){if(a.sizcache===f){d=c[a.sizset];
break}a.nodeType===1&&!g&&(a.sizcache=f,a.sizset=b);
if(a.nodeName.toLowerCase()===h){d=a;
break}a=a[e]}c[b]=d}}}function m(g,f,h,e,k,i){for(var b=0,j=e.length,a,c;
b<j;
b++){a=e[b];
if(a){a=a[g];
c=false;
while(a){if(a.sizcache===h){c=e[a.sizset];
break}if(a.nodeType===1){i||(a.sizcache=h,a.sizset=b);
if(typeof f!=="string"){if(a===f){c=true;
break}}else if(d.filter(f,[a]).length>0){c=a;
break}}a=a[g]}e[b]=c}}}d.contains=b.documentElement.contains?function(a,b){return a!==b&&(a.contains?a.contains(b):true)}:b.documentElement.compareDocumentPosition?function(b,a){return!!(b.compareDocumentPosition(a)&16)}:function(){return false};
d.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;
return b?b.nodeName!=="HTML":false};
p=function(a,b){var h=[],i="",f,g=b.nodeType?[b]:b,c,j;
while(f=e.match.PSEUDO.exec(a))i+=f[0],a=a.replace(e.match.PSEUDO,"");
a=e.relative[a]?a+"*":a;
for(c=0,j=g.length;
c<j;
c++)d(a,g[c],h);
return d.filter(i,h)};
a.find=d;
a.expr=d.selectors;
a.expr[":"]=a.expr.filters;
a.unique=d.uniqueSort;
a.text=d.getText;
a.isXMLDoc=d.isXML;
a.contains=d.contains})();
W=/Until$/,bz=/^(?:parents|prevUntil|prevAll)/,bj=/,/,bd=/^.[^:#\[\.,]*$/,bp=Array.prototype.slice,bl=a.expr.match.POS;
a.fn.extend({find:function(g){for(var b=this.pushStack("","find",g),f=0,d=0,h=this.length,c,e;
d<h;
d++){f=b.length;
a.find(g,this[d],b);
if(d>0)for(c=f;
c<b.length;
c++)for(e=0;
e<f;
e++)if(b[e]===b[c]){b.splice(c--,1);
break}}return b},
has:function(c){var b=a(c);
return this.filter(function(){for(var c=0,d=b.length;
c<d;
c++)if(a.contains(this,b[c]))return true})},
not:function(a){return this.pushStack(z(this,a,false),"not",a)},
filter:function(a){return this.pushStack(z(this,a,true),"filter",a)},
is:function(b){return!!b&&a.filter(b,this).length>0},
closest:function(d,h){var e=[],f,j,b=this[0],g,i,c,l,k;
if(a.isArray(d)){i={},l=1;
if(b&&d.length){for(f=0,j=d.length;
f<j;
f++)c=d[f],i[c]||(i[c]=a.expr.match.POS.test(c)?a(c,h||this.context):c);
while(b&&b.ownerDocument&&b!==h){for(c in i)g=i[c],(g.jquery?g.index(b)>-1:a(b).is(g))&&e.push({selector:c,
elem:b,
level:l});
b=b.parentNode;
l++}}return e}k=bl.test(d)?a(d,h||this.context):null;
for(f=0,j=this.length;
f<j;
f++){b=this[f];
while(b)if(k?k.index(b)>-1:a.find.matchesSelector(b,d)){e.push(b);
break}else{b=b.parentNode;
if(!b||!b.ownerDocument||b===h)break}}e=e.length>1?a.unique(e):e;
return this.pushStack(e,"closest",d)},
index:function(b){if(!b||typeof b==="string")return a.inArray(this[0],b?a(b):this.parent().children());
return a.inArray(b.jquery?b[0]:b,this)},
add:function(b,e){var d=typeof b==="string"?a(b,e||this.context):a.makeArray(b),c=a.merge(this.get(),d);
return this.pushStack(S(d[0])||S(c[0])?c:a.unique(c))},
andSelf:function(){return this.add(this.prevObject)}});
function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}a.each({parent:function(b){var a=b.parentNode;
return a&&a.nodeType!==11?a:null},
parents:function(b){return a.dir(b,"parentNode")},
parentsUntil:function(c,d,b){return a.dir(c,"parentNode",b)},
next:function(b){return a.nth(b,2,"nextSibling")},
prev:function(b){return a.nth(b,2,"previousSibling")},
nextAll:function(b){return a.dir(b,"nextSibling")},
prevAll:function(b){return a.dir(b,"previousSibling")},
nextUntil:function(c,d,b){return a.dir(c,"nextSibling",b)},
prevUntil:function(c,d,b){return a.dir(c,"previousSibling",b)},
siblings:function(b){return a.sibling(b.parentNode.firstChild,b)},
children:function(b){return a.sibling(b.firstChild)},
contents:function(b){return a.nodeName(b,"iframe")?b.contentDocument||b.contentWindow.document:a.makeArray(b.childNodes)}},function(b,c){a.fn[b]=function(f,e){var d=a.map(this,c,f);
W.test(b)||(e=f);
e&&typeof e==="string"&&(d=a.filter(e,d));
d=this.length>1?a.unique(d):d;
(this.length>1||bj.test(e))&&bz.test(b)&&(d=d.reverse());
return this.pushStack(d,b,bp.call(arguments).join(","))}});
a.extend({filter:function(c,b,d){d&&(c=":not("+c+")");
return b.length===1?a.find.matchesSelector(b[0],c)?[b[0]]:[]:a.find.matches(c,b)},
dir:function(g,e,d){var f=[],b=g[e];
while(b&&b.nodeType!==9&&(d===c||b.nodeType!==1||!a(b).is(d)))b.nodeType===1&&f.push(b),b=b[e];
return f},
nth:function(a,b,c){b=b||1;
for(var d=0;
a;
a=a[c])if(a.nodeType===1&&++d===b)break;
return a},
sibling:function(a,c){for(var b=[];
a;
a=a.nextSibling)a.nodeType===1&&a!==c&&b.push(a);
return b}});
function z(d,b,c){if(a.isFunction(b))return a.grep(d,function(a,e){var d=!!b.call(a,e,a);
return d===c});
if(b.nodeType)return a.grep(d,function(a){return(a===b)===c});
if(typeof b==="string"){var e=a.grep(d,function(a){return a.nodeType===1});
if(bd.test(b))return a.filter(b,e,!c);
b=a.filter(b,e)}return a.grep(d,function(d){return a.inArray(d,b)>=0===c})}F=/ jQuery\d+="(?:\d+|null)"/g,k=/^\s+/,D=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,O=/<([\w:]+)/,bt=/<tbody/i,bD=/<|&#?\w+;/,y=/<(?:script|object|embed|option|style)/i,A=/checked\s*(?:[^=]|=\s*.checked.)/i,bB=/\=([^="'>\s]+\/)>/g,e={option:[1,"<select multiple='multiple'>","</select>"],
legend:[1,"<fieldset>","</fieldset>"],
thead:[1,"<table>","</table>"],
tr:[2,"<table><tbody>","</tbody></table>"],
td:[3,"<table><tbody><tr>","</tr></tbody></table>"],
col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],
area:[1,"<map>","</map>"],
_default:[0,"",""]};
e.optgroup=e.option;
e.tbody=e.tfoot=e.colgroup=e.caption=e.thead;
e.th=e.td;
a.support.htmlSerialize||(e._default=[1,"div<div>","</div>"]);
a.fn.extend({text:function(d){if(a.isFunction(d))return this.each(function(c){var b=a(this);
b.text(d.call(this,c,b.text()))});
if(typeof d!=="object"&&d!==c)return this.empty().append((this[0]&&this[0].ownerDocument||b).createTextNode(d));
return a.text(this)},
wrapAll:function(b){if(a.isFunction(b))return this.each(function(c){a(this).wrapAll(b.call(this,c))});
if(this[0]){var c=a(b,this[0].ownerDocument).eq(0).clone(true);
this[0].parentNode&&c.insertBefore(this[0]);
c.map(function(){var a=this;
while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;
return a}).append(this)}return this},
wrapInner:function(b){if(a.isFunction(b))return this.each(function(c){a(this).wrapInner(b.call(this,c))});
return this.each(function(){var d=a(this),c=d.contents();
c.length?c.wrapAll(b):d.append(b)})},
wrap:function(b){return this.each(function(){a(this).wrapAll(b)})},
unwrap:function(){return this.parent().each(function(){a.nodeName(this,"body")||a(this).replaceWith(this.childNodes)}).end()},
append:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.appendChild(a)})},
prepend:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},
before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(a){this.parentNode.insertBefore(a,this)});
if(arguments.length){var b=a(arguments[0]);
b.push.apply(b,this.toArray());
return this.pushStack(b,"before",arguments)}},
after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(a){this.parentNode.insertBefore(a,this.nextSibling)});
if(arguments.length){var b=this.pushStack(this,"after",arguments);
b.push.apply(b,a(arguments[0]).toArray());
return b}},
remove:function(c,e){for(var d=0,b;
(b=this[d])!=null;
d++)(!c||a.filter(c,[b]).length)&&(!e&&b.nodeType===1&&(a.cleanData(b.getElementsByTagName("*")),a.cleanData([b])),b.parentNode&&b.parentNode.removeChild(b));
return this},
empty:function(){for(var c=0,b;
(b=this[c])!=null;
c++){b.nodeType===1&&a.cleanData(b.getElementsByTagName("*"));
while(b.firstChild)b.removeChild(b.firstChild)}return this},
clone:function(c){var b=this.map(function(){if(!a.support.noCloneEvent&&!a.isXMLDoc(this)){var b=this.outerHTML,c=this.ownerDocument,d;
if(!b){d=c.createElement("div");
d.appendChild(this.cloneNode(true));
b=d.innerHTML}return a.clean([b.replace(F,"").replace(bB,"=\"$1\">").replace(k,"")],c)[0]}return this.cloneNode(true)});
c===true&&(U(this,b),U(this.find("*"),b.find("*")));
return b},
html:function(b){if(b===c)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(F,""):null;
if(typeof b==="string"&&!y.test(b)&&(a.support.leadingWhitespace||!k.test(b))&&!e[(O.exec(b)||["",""])[1].toLowerCase()]){b=b.replace(D,"<$1></$2>");
try{for(var d=0,f=this.length;
d<f;
d++)this[d].nodeType===1&&(a.cleanData(this[d].getElementsByTagName("*")),this[d].innerHTML=b)}catch(g){this.empty().append(b)}}else a.isFunction(b)?this.each(function(d){var c=a(this);
c.html(b.call(this,d,c.html()))}):this.empty().append(b);
return this},
replaceWith:function(b){if(this[0]&&this[0].parentNode){if(a.isFunction(b))return this.each(function(e){var c=a(this),d=c.html();
c.replaceWith(b.call(this,e,d))});
typeof b!=="string"&&(b=a(b).detach());
return this.each(function(){var c=this.nextSibling,d=this.parentNode;
a(this).remove();
c?a(c).before(b):a(d).append(b)})}return this.pushStack(a(a.isFunction(b)?b():b),"replaceWith",b)},
detach:function(a){return this.remove(a,true)},
domManip:function(g,d,l){var j,f,e=g[0],k=[],b,h,i,m;
if(!a.support.checkClone&&arguments.length===3&&typeof e==="string"&&A.test(e))return this.each(function(){a(this).domManip(g,d,l,true)});
if(a.isFunction(e))return this.each(function(f){var b=a(this);
g[0]=e.call(this,f,d?b.html():c);
b.domManip(g,d,l)});
if(this[0]){h=e&&e.parentNode;
j=a.support.parentNode&&h&&h.nodeType===11&&h.childNodes.length===this.length?{fragment:h}:a.buildFragment(g,this,k);
b=j.fragment;
f=b.childNodes.length===1?b=b.firstChild:b.firstChild;
if(f){d=d&&a.nodeName(f,"tr");
for(i=0,m=this.length;
i<m;
i++)l.call(d?bw(this[i],f):this[i],i>0||j.cacheable||this.length>1?b.cloneNode(true):b)}k.length&&a.each(k,bI)}return this}});
function bw(b){return a.nodeName(b,"table")?b.getElementsByTagName("tbody")[0]||b.appendChild(b.ownerDocument.createElement("tbody")):b}function U(b,d){var c=0;
d.each(function(){if(this.nodeName!==(b[c]&&b[c].nodeName))return;
var g=a.data(b[c++]),h=a.data(this,g),d=g&&g.events,e,f;
if(d){delete h.handle;
h.events={};
for(e in d)for(f in d[e])a.event.add(this,e,d[e][f],d[e][f].data)}})}a.buildFragment=function(c,f,i){var d,h,e,g=(f&&f[0]?f[0].ownerDocument||f[0]:b);
c.length===1&&typeof c[0]==="string"&&c[0].length<512&&g===b&&!y.test(c[0])&&(a.support.checkClone||!A.test(c[0]))&&(h=true,e=a.fragments[c[0]],e&&e!==1&&(d=e));
d||(d=g.createDocumentFragment(),a.clean(c,g,d,i));
h&&(a.fragments[c[0]]=e?d:1);
return{fragment:d,
cacheable:h}};
a.fragments={};
a.each({appendTo:"append",
prependTo:"prepend",
insertBefore:"before",
insertAfter:"after",
replaceAll:"replaceWith"},function(c,b){a.fn[c]=function(i){var f=[],d=a(i),g=this.length===1&&this[0].parentNode,e,j,h;
if(g&&g.nodeType===11&&g.childNodes.length===1&&d.length===1){d[b](this[0]);
return this}for(e=0,j=d.length;
e<j;
e++){h=(e>0?this.clone(true):this).get();
a(d[e])[b](h);
f=f.concat(h)}return this.pushStack(f,c,d.selector)}});
a.extend({clean:function(r,g,p,n){g=g||b;
typeof g.createElement==="undefined"&&(g=g.ownerDocument||g[0]&&g[0].ownerDocument||b);
for(var d=[],f=0,c,o,l,q,h,m,j,i;
(c=r[f])!=null;
f++){typeof c==="number"&&(c+="");
if(!c)continue;
if(typeof c==="string"&&!bD.test(c))c=g.createTextNode(c);
else if(typeof c==="string"){c=c.replace(D,"<$1></$2>");
o=(O.exec(c)||["",""])[1].toLowerCase(),l=e[o]||e._default,q=l[0],h=g.createElement("div");
h.innerHTML=l[1]+c+l[2];
while(q--)h=h.lastChild;
if(!a.support.tbody){m=bt.test(c),j=o==="table"&&!m?h.firstChild&&h.firstChild.childNodes:l[1]==="<table>"&&!m?h.childNodes:[],i=j.length-1;
for(;
i>=0;
--i)a.nodeName(j[i],"tbody")&&!j[i].childNodes.length&&j[i].parentNode.removeChild(j[i])}!a.support.leadingWhitespace&&k.test(c)&&h.insertBefore(g.createTextNode(k.exec(c)[0]),h.firstChild);
c=h.childNodes}c.nodeType?d.push(c):d=a.merge(d,c)}if(p)for(f=0;
d[f];
f++)n&&a.nodeName(d[f],"script")&&(!d[f].type||d[f].type.toLowerCase()==="text/javascript")?n.push(d[f].parentNode?d[f].parentNode.removeChild(d[f]):d[f]):(d[f].nodeType===1&&d.splice.apply(d,[f+1,0].concat(a.makeArray(d[f].getElementsByTagName("script")))),p.appendChild(d[f]));
return d},
cleanData:function(i){for(var c,d,f=a.cache,h=a.event.special,j=a.support.deleteExpando,g=0,b,e;
(b=i[g])!=null;
g++){if(b.nodeName&&a.noData[b.nodeName.toLowerCase()])continue;
d=b[a.expando];
if(d){c=f[d];
if(c&&c.events)for(e in c.events)h[e]?a.event.remove(b,e):a.removeEvent(b,e,c.handle);
j?delete b[a.expando]:b.removeAttribute&&b.removeAttribute(a.expando);
delete f[d]}}}});
function bI(c,b){b.src?a.ajax({url:b.src,
async:false,
dataType:"script"}):a.globalEval(b.text||b.textContent||b.innerHTML||"");
b.parentNode&&b.parentNode.removeChild(b)}I=/alpha\([^)]*\)/i,Z=/opacity=([^)]*)/,bK=/-([a-z])/ig,bf=/([A-Z])/g,w=/^-?\d+(?:px)?$/i,bC=/^-?\d/,bu={position:"absolute",
visibility:"hidden",
display:"block"},bE=["Left","Right"],bH=["Top","Bottom"],bm=b.defaultView&&b.defaultView.getComputedStyle,bF=function(b,a){return a.toUpperCase()};
a.fn.css=function(d,b){if(arguments.length===2&&b===c)return this;
return a.access(this,d,b,true,function(e,b,d){return d!==c?a.style(e,b,d):a.css(e,b)})};
a.extend({cssHooks:{opacity:{get:function(b,c){if(c){var a=h(b,"opacity","opacity");
return a===""?"1":a}return b.style.opacity}}},
cssNumber:{zIndex:true,
fontWeight:true,
opacity:true,
zoom:true,
lineHeight:true},
cssProps:{"float":a.support.cssFloat?"cssFloat":"styleFloat"},
style:function(d,g,b,j){if(!d||d.nodeType===3||d.nodeType===8||!d.style)return;
var h,f=a.camelCase(g),i=d.style,e=a.cssHooks[f];
g=a.cssProps[f]||f;
if(b!==c){if(typeof b==="number"&&isNaN(b)||b==null)return;
typeof b==="number"&&!a.cssNumber[f]&&(b+="px");
if(!e||!("set"in e)||(b=e.set(d,b))!==c)try{i[g]=b}catch(k){}}else{if(e&&"get"in e&&(h=e.get(d,false,j))!==c)return h;
return i[g]}},
css:function(g,e,i){var f,b=a.camelCase(e),d=a.cssHooks[b];
e=a.cssProps[b]||b;
if(d&&"get"in d&&(f=d.get(g,true,i))!==c)return f;
if(h)return h(g,e,b)},
swap:function(b,c,e){var d={},a;
for(a in c)d[a]=b.style[a],b.style[a]=c[a];
e.call(b);
for(a in c)b.style[a]=d[a]},
camelCase:function(a){return a.replace(bK,bF)}});
a.curCSS=a.css;
a.each(["height","width"],function(c,b){a.cssHooks[b]={get:function(d,f,e){var c;
if(f){d.offsetWidth!==0?c=x(d,b,e):a.swap(d,bu,function(){c=x(d,b,e)});
if(c<=0){c=h(d,b,b);
if(c!=null)return c==="auto"?"":c}if(c<0||c==null)return d.style[b];
return typeof c==="string"?c:c+"px"}},
set:function(b,a){if(w.test(a)){a=parseFloat(a);
if(a>=0)return a+"px"}else return a}}});
a.support.opacity||(a.cssHooks.opacity={get:function(a,b){return Z.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},
set:function(f,c){var b=f.style,e,d;
b.zoom=1;
e=a.isNaN(c)?"":"alpha(opacity="+c*100+")",d=b.filter||"";
b.filter=I.test(d)?d.replace(I,e):b.filter+" "+e}});
bm?(h=function(b,h,e){var d,g,f;
e=e.replace(bf,"-$1").toLowerCase();
if(!(g=b.ownerDocument.defaultView))return c;
(f=g.getComputedStyle(b,null))&&(d=f.getPropertyValue(e),d===""&&!a.contains(b.ownerDocument.documentElement,b)&&(d=a.style(b,e)));
return d}):b.documentElement.currentStyle&&(h=function(a,e){var d,f,b=a.currentStyle&&a.currentStyle[e],c=a.style;
!w.test(b)&&bC.test(b)&&(d=c.left,f=a.runtimeStyle.left,a.runtimeStyle.left=a.currentStyle.left,c.left=e==="fontSize"?"1em":b||0,b=c.pixelLeft+"px",c.left=d,a.runtimeStyle.left=f);
return b});
function x(b,e,d){var f=e==="width"?bE:bH,c=e==="width"?b.offsetWidth:b.offsetHeight;
if(d==="border")return c;
a.each(f,function(){d||(c-=parseFloat(a.css(b,"padding"+this))||0);
d==="margin"?c+=parseFloat(a.css(b,"margin"+this))||0:c-=parseFloat(a.css(b,"border"+this+"Width"))||0});
return c}a.expr&&a.expr.filters&&(a.expr.filters.hidden=function(b){var d=b.offsetWidth,c=b.offsetHeight;
return d===0&&c===0||!a.support.reliableHiddenOffsets&&(b.style.display||a.css(b,"display"))==="none"},a.expr.filters.visible=function(b){return!a.expr.filters.hidden(b)});
bg=a.now(),bq=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bi=/^(?:select|textarea)/i,bx=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bs=/^(?:GET|HEAD)$/,V=/\[\]$/,g=/\=\?(&|$)/,p=/\?/,bG=/([?&])_=[^&]*/,bA=/^(\w+:)?\/\/([^\/?#]+)/,br=/%20/g,bv=/#.*$/,H=a.fn.load;
a.fn.extend({load:function(c,b,e){if(typeof c!=="string"&&H)return H.apply(this,arguments);
if(!this.length)return this;
var d=c.indexOf(" "),f,g,h;
if(d>=0){f=c.slice(d,c.length);
c=c.slice(0,d)}g="GET";
b&&(a.isFunction(b)?(e=b,b=null):typeof b==="object"&&(b=a.param(b,a.ajaxSettings.traditional),g="POST"));
h=this;
a.ajax({url:c,
type:g,
dataType:"html",
data:b,
complete:function(b,c){(c==="success"||c==="notmodified")&&h.html(f?a("<div>").append(b.responseText.replace(bq,"")).find(f):b.responseText);
e&&h.each(e,[b.responseText,c,b])}});
return this},
serialize:function(){return a.param(this.serializeArray())},
serializeArray:function(){return this.map(function(){return this.elements?a.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bi.test(this.nodeName)||bx.test(this.type))}).map(function(d,c){var b=a(this).val();
return b==null?null:a.isArray(b)?a.map(b,function(a){return{name:c.name,
value:a}}):{name:c.name,
value:b}}).get()}});
a.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(c,b){a.fn[b]=function(a){return this.bind(b,a)}});
a.extend({get:function(e,b,d,c){a.isFunction(b)&&(c=c||d,d=b,b=null);
return a.ajax({type:"GET",
url:e,
data:b,
success:d,
dataType:c})},
getScript:function(c,b){return a.get(c,null,b,"script")},
getJSON:function(d,b,c){return a.get(d,b,c,"json")},
post:function(e,b,d,c){a.isFunction(b)&&(c=c||d,d=b,b={});
return a.ajax({type:"POST",
url:e,
data:b,
success:d,
dataType:c})},
ajaxSetup:function(b){a.extend(a.ajaxSettings,b)},
ajaxSettings:{url:location.href,
global:true,
type:"GET",
contentType:"application/x-www-form-urlencoded",
processData:true,
async:true,
xhr:function(){return new d.XMLHttpRequest()},
accepts:{xml:"application/xml, text/xml",
html:"text/html",
script:"text/javascript, application/javascript",
json:"application/json, text/javascript",
text:"text/plain",
_default:"*/*"}},
ajax:function(l){var e=a.extend(true,{},a.ajaxSettings,l),k,h,j,n=e.type.toUpperCase(),r=bs.test(n),u,w,v,q,x,m,i,y,o,f,s,t;
e.url=e.url.replace(bv,"");
e.context=l&&l.context!=null?l.context:e;
e.data&&e.processData&&typeof e.data!=="string"&&(e.data=a.param(e.data,e.traditional));
e.dataType==="jsonp"&&(n==="GET"?g.test(e.url)||(e.url+=(p.test(e.url)?"&":"?")+(e.jsonp||"callback")+"=?"):(!e.data||!g.test(e.data))&&(e.data=(e.data?e.data+"&":"")+(e.jsonp||"callback")+"=?"),e.dataType="json");
if(e.dataType==="json"&&(e.data&&g.test(e.data)||g.test(e.url))){k=e.jsonpCallback||"jsonp"+bg++;
e.data&&(e.data=(e.data+"").replace(g,"="+k+"$1"));
e.url=e.url.replace(g,"="+k+"$1");
e.dataType="script";
u=d[k];
d[k]=function(b){if(a.isFunction(u))u(b);
else{d[k]=c;
try{delete d[k]}catch(g){}}j=b;
a.handleSuccess(e,f,h,j);
a.handleComplete(e,f,h,j);
m&&m.removeChild(i)}}e.dataType==="script"&&e.cache===null&&(e.cache=false);
if(e.cache===false&&r){w=a.now(),v=e.url.replace(bG,"$1_="+w);
e.url=v+(v===e.url?(p.test(e.url)?"&":"?")+"_="+w:"")}e.data&&r&&(e.url+=(p.test(e.url)?"&":"?")+e.data);
e.global&&a.active++===0&&a.event.trigger("ajaxStart");
q=bA.exec(e.url),x=q&&(q[1]&&q[1].toLowerCase()!==location.protocol||q[2].toLowerCase()!==location.host);
if(e.dataType==="script"&&n==="GET"&&x){m=b.getElementsByTagName("head")[0]||b.documentElement,i=b.createElement("script");
e.scriptCharset&&(i.charset=e.scriptCharset);
i.src=e.url;
if(!k){y=false;
i.onload=i.onreadystatechange=function(){!y&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")&&(y=true,a.handleSuccess(e,f,h,j),a.handleComplete(e,f,h,j),i.onload=i.onreadystatechange=null,m&&i.parentNode&&m.removeChild(i))}}m.insertBefore(i,m.firstChild);
return c}o=false,f=e.xhr();
if(!f)return;
e.username?f.open(n,e.url,e.async,e.username,e.password):f.open(n,e.url,e.async);
try{(e.data!=null&&!r||l&&l.contentType)&&f.setRequestHeader("Content-Type",e.contentType);
e.ifModified&&(a.lastModified[e.url]&&f.setRequestHeader("If-Modified-Since",a.lastModified[e.url]),a.etag[e.url]&&f.setRequestHeader("If-None-Match",a.etag[e.url]));
x||f.setRequestHeader("X-Requested-With","XMLHttpRequest");
f.setRequestHeader("Accept",e.dataType&&e.accepts[e.dataType]?e.accepts[e.dataType]+", */*; q=0.01":e.accepts._default)}catch(A){}if(e.beforeSend&&e.beforeSend.call(e.context,f,e)===false){e.global&&a.active--===1&&a.event.trigger("ajaxStop");
f.abort();
return false}e.global&&a.triggerGlobal(e,"ajaxSend",[f,e]);
s=f.onreadystatechange=function(b){if(!f||f.readyState===0||b==="abort")o||a.handleComplete(e,f,h,j),o=true,f&&(f.onreadystatechange=a.noop);
else if(!o&&f&&(f.readyState===4||b==="timeout")){o=true;
f.onreadystatechange=a.noop;
h=b==="timeout"?"timeout":a.httpSuccess(f)?e.ifModified&&a.httpNotModified(f,e.url)?"notmodified":"success":"error";
var c;
if(h==="success")try{j=a.httpData(f,e.dataType,e)}catch(d){h="parsererror";
c=d}h==="success"||h==="notmodified"?k||a.handleSuccess(e,f,h,j):a.handleError(e,f,h,c);
k||a.handleComplete(e,f,h,j);
b==="timeout"&&f.abort();
e.async&&(f=null)}};
try{t=f.abort;
f.abort=function(){f&&t.call&&t.call(f);
s("abort")}}catch(B){}e.async&&e.timeout>0&&setTimeout(function(){f&&!o&&s("timeout")},e.timeout);
try{f.send(r||e.data==null?null:e.data)}catch(z){a.handleError(e,f,null,z);
a.handleComplete(e,f,h,j)}e.async||s();
return f},
param:function(b,f){var e=[],g=function(c,b){b=a.isFunction(b)?b():b;
e[e.length]=encodeURIComponent(c)+"="+encodeURIComponent(b)},d;
f===c&&(f=a.ajaxSettings.traditional);
if(a.isArray(b)||b.jquery)a.each(b,function(){g(this.name,this.value)});
else for(d in b)u(d,b[d],f,g);
return e.join("&").replace(br,"+")}});
function u(c,b,e,d){a.isArray(b)&&b.length?a.each(b,function(f,b){e||V.test(c)?d(c,b):u(c+"["+(typeof b==="object"||a.isArray(b)?f:"")+"]",b,e,d)}):!e&&b!=null&&typeof b==="object"?a.isEmptyObject(b)?d(c,""):a.each(b,function(b,a){u(c+"["+b+"]",a,e,d)}):d(c,b)}a.extend({active:0,
lastModified:{},
etag:{},
handleError:function(b,d,e,c){b.error&&b.error.call(b.context,d,e,c);
b.global&&a.triggerGlobal(b,"ajaxError",[d,b,c])},
handleSuccess:function(b,c,e,d){b.success&&b.success.call(b.context,d,e,c);
b.global&&a.triggerGlobal(b,"ajaxSuccess",[c,b])},
handleComplete:function(b,c,d){b.complete&&b.complete.call(b.context,c,d);
b.global&&a.triggerGlobal(b,"ajaxComplete",[c,b]);
b.global&&a.active--===1&&a.event.trigger("ajaxStop")},
triggerGlobal:function(b,c,d){(b.context&&b.context.url==null?a(b.context):a.event).trigger(c,d)},
httpSuccess:function(a){try{return!a.status&&location.protocol==="file:"||a.status>=200&&a.status<300||a.status===304||a.status===1223}catch(b){}return false},
httpNotModified:function(b,e){var c=b.getResponseHeader("Last-Modified"),d=b.getResponseHeader("Etag");
c&&(a.lastModified[e]=c);
d&&(a.etag[e]=d);
return b.status===304},
httpData:function(f,c,e){var d=f.getResponseHeader("content-type")||"",g=c==="xml"||!c&&d.indexOf("xml")>=0,b=g?f.responseXML:f.responseText;
g&&b.documentElement.nodeName==="parsererror"&&a.error("parsererror");
e&&e.dataFilter&&(b=e.dataFilter(b,c));
typeof b==="string"&&(c==="json"||!c&&d.indexOf("json")>=0?b=a.parseJSON(b):(c==="script"||!c&&d.indexOf("javascript")>=0)&&a.globalEval(b));
return b}});
d.ActiveXObject&&(a.ajaxSettings.xhr=function(){if(d.location.protocol!=="file:")try{return new d.XMLHttpRequest()}catch(b){}try{return new d.ActiveXObject("Microsoft.XMLHTTP")}catch(a){}});
a.support.ajax=!!a.ajaxSettings.xhr();
v={},be=/^(?:toggle|show|hide)$/,ba=/^([+\-]=)?([\d+.\-]+)(.*)$/,C=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];
a.fn.extend({show:function(e,h,i){var b,c,d,g;
if(e||e===0)return this.animate(f("show",3),e,h,i);
for(d=0,g=this.length;
d<g;
d++)b=this[d],c=b.style.display,!a.data(b,"olddisplay")&&c==="none"&&(c=b.style.display=""),c===""&&a.css(b,"display")==="none"&&a.data(b,"olddisplay",G(b.nodeName));
for(d=0;
d<g;
d++)b=this[d],c=b.style.display,(c===""||c==="none")&&(b.style.display=a.data(b,"olddisplay")||"");
return this},
hide:function(c,g,h){if(c||c===0)return this.animate(f("hide",3),c,g,h);
for(var b=0,e=this.length,d;
b<e;
b++){d=a.css(this[b],"display");
d!=="none"&&a.data(this[b],"olddisplay",d)}for(b=0;
b<e;
b++)this[b].style.display="none";
return this},
_toggle:a.fn.toggle,
toggle:function(b,c,e){var d=typeof b==="boolean";
a.isFunction(b)&&a.isFunction(c)?this._toggle.apply(this,arguments):b==null||d?this.each(function(){var c=d?b:a(this).is(":hidden");
a(this)[c?"show":"hide"]()}):this.animate(f("toggle",3),b,c,e);
return this},
fadeTo:function(b,d,c,a){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:d},b,c,a)},
animate:function(b,e,f,d){var c=a.speed(e,f,d);
if(a.isEmptyObject(b))return this.each(c.complete);
return this[c.queue===false?"each":"queue"](function(){var e=a.extend({},c),d,i=this.nodeType===1,f=i&&a(this).is(":hidden"),g=this,h,j;
for(d in b){h=a.camelCase(d);
d!==h&&(b[h]=b[d],delete b[d],d=h);
if(b[d]==="hide"&&f||b[d]==="show"&&!f)return e.complete.call(this);
if(i&&(d==="height"||d==="width")){e.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];
if(a.css(this,"display")==="inline"&&a.css(this,"float")==="none"){if(!a.support.inlineBlockNeedsLayout)this.style.display="inline-block";
else{j=G(this.nodeName);
j==="inline"?this.style.display="inline-block":(this.style.display="inline",this.style.zoom=1)}}}a.isArray(b[d])&&((e.specialEasing=e.specialEasing||{})[d]=b[d][1],b[d]=b[d][0])}e.overflow!=null&&(this.style.overflow="hidden");
e.curAnim=a.extend({},b);
a.each(b,function(l,h){var d=new a.fx(g,e,l),j,c,i,k;
if(be.test(h))d[h==="toggle"?f?"show":"hide":h](b);
else{j=ba.exec(h),c=d.cur()||0;
if(j){i=parseFloat(j[2]),k=j[3]||"px";
k!=="px"&&(a.style(g,l,(i||1)+k),c=((i||1)/d.cur())*c,a.style(g,l,c+k));
j[1]&&(i=(j[1]==="-="?-1:1)*i+c);
d.custom(c,i,k)}else d.custom(c,h,"")}});
return true})},
stop:function(d,c){var b=a.timers;
d&&this.queue([]);
this.each(function(){for(var a=b.length-1;
a>=0;
a--)b[a].elem===this&&(c&&b[a](true),b.splice(a,1))});
c||this.dequeue();
return this}});
function f(c,d){var b={};
a.each(C.concat.apply([],C.slice(0,d)),function(){b[this]=c});
return b}a.each({slideDown:f("show",1),
slideUp:f("hide",1),
slideToggle:f("toggle",1),
fadeIn:{opacity:"show"},
fadeOut:{opacity:"hide"},
fadeToggle:{opacity:"toggle"}},function(c,b){a.fn[c]=function(c,d,a){return this.animate(b,c,d,a)}});
a.extend({speed:function(c,d,e){var b=c&&typeof c==="object"?a.extend({},c):{complete:e||!e&&d||a.isFunction(c)&&c,
duration:c,
easing:e&&d||d&&!a.isFunction(d)&&d};
b.duration=a.fx.off?0:typeof b.duration==="number"?b.duration:b.duration in a.fx.speeds?a.fx.speeds[b.duration]:a.fx.speeds._default;
b.old=b.complete;
b.complete=function(){b.queue!==false&&a(this).dequeue();
a.isFunction(b.old)&&b.old.call(this)};
return b},
easing:{linear:function(c,d,b,a){return b+a*c},
swing:function(c,d,b,a){return(-Math.cos(c*Math.PI)/2+.5)*a+b}},
timers:[],
fx:function(c,a,b){this.options=a;
this.elem=c;
this.prop=b;
a.orig||(a.orig={})}});
a.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this);
(a.fx.step[this.prop]||a.fx.step._default)(this)},
cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];
var b=parseFloat(a.css(this.elem,this.prop));
return b&&b>-10000?b:0},
custom:function(f,g,d){this.startTime=a.now();
this.start=f;
this.end=g;
this.unit=d||this.unit||"px";
this.now=this.start;
this.pos=this.state=0;
var e=this,c=a.fx;
function b(a){return e.step(a)}b.elem=this.elem;
b()&&a.timers.push(b)&&!m&&(m=setInterval(c.tick,c.interval))},
show:function(){this.options.orig[this.prop]=a.style(this.elem,this.prop);
this.options.show=true;
this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());
a(this.elem).show()},
hide:function(){this.options.orig[this.prop]=a.style(this.elem,this.prop);
this.options.hide=true;
this.custom(this.cur(),0)},
step:function(h){var d=a.now(),e=true,f,j,g,b,c,i,k;
if(h||d>=this.options.duration+this.startTime){this.now=this.end;
this.pos=this.state=1;
this.update();
this.options.curAnim[this.prop]=true;
for(f in this.options.curAnim)this.options.curAnim[f]!==true&&(e=false);
if(e){if(this.options.overflow!=null&&!a.support.shrinkWrapBlocks){j=this.elem,g=this.options;
a.each(["","X","Y"],function(b,a){j.style["overflow"+a]=g.overflow[b]})}this.options.hide&&a(this.elem).hide();
if(this.options.hide||this.options.show)for(b in this.options.curAnim)a.style(this.elem,b,this.options.orig[b]);
this.options.complete.call(this.elem)}return false}c=d-this.startTime;
this.state=c/this.options.duration;
i=this.options.specialEasing&&this.options.specialEasing[this.prop],k=this.options.easing||(a.easing.swing?"swing":"linear");
this.pos=a.easing[i||k](this.state,c,0,1,this.options.duration);
this.now=this.start+(this.end-this.start)*this.pos;
this.update();
return true}};
a.extend(a.fx,{tick:function(){for(var b=a.timers,c=0;
c<b.length;
c++)b[c]()||b.splice(c--,1);
b.length||a.fx.stop()},
interval:13,
stop:function(){clearInterval(m);
m=null},
speeds:{slow:600,
fast:200,
_default:400},
step:{opacity:function(b){a.style(b.elem,"opacity",b.now)},
_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit:a.elem[a.prop]=a.now}}});
a.expr&&a.expr.filters&&(a.expr.filters.animated=function(b){return a.grep(a.timers,function(a){return b===a.elem}).length});
function G(b){if(!v[b]){var d=a("<"+b+">").appendTo("body"),c=d.css("display");
d.remove();
(c==="none"||c==="")&&(c="block");
v[b]=c}return v[b]}bk=/^t(?:able|d|h)$/i,B=/^(?:body|html)$/i;
"getBoundingClientRect"in b.documentElement?(a.fn.offset=function(g){var b=this[0],d,f,c,e,h,k,n,j,l,m,i;
if(g)return this.each(function(b){a.offset.setOffset(this,g,b)});
if(!b||!b.ownerDocument)return null;
if(b===b.ownerDocument.body)return a.offset.bodyOffset(b);
try{d=b.getBoundingClientRect()}catch(o){}f=b.ownerDocument,c=f.documentElement;
if(!d||!a.contains(c,b))return d||{top:0,
left:0};
e=f.body,h=r(f),k=c.clientTop||e.clientTop||0,n=c.clientLeft||e.clientLeft||0,j=(h.pageYOffset||a.support.boxModel&&c.scrollTop||e.scrollTop),l=(h.pageXOffset||a.support.boxModel&&c.scrollLeft||e.scrollLeft),m=d.top+j-k,i=d.left+l-n;
return{top:m,
left:i}}):a.fn.offset=function(l){var b=this[0],j,m,k,e,i,g,h,f,d,c;
if(l)return this.each(function(b){a.offset.setOffset(this,l,b)});
if(!b||!b.ownerDocument)return null;
if(b===b.ownerDocument.body)return a.offset.bodyOffset(b);
a.offset.initialize();
j=b.offsetParent,m=b,k=b.ownerDocument,i=k.documentElement,g=k.body,h=k.defaultView,f=h?h.getComputedStyle(b,null):b.currentStyle,d=b.offsetTop,c=b.offsetLeft;
while((b=b.parentNode)&&b!==g&&b!==i){if(a.offset.supportsFixedPosition&&f.position==="fixed")break;
e=h?h.getComputedStyle(b,null):b.currentStyle;
d-=b.scrollTop;
c-=b.scrollLeft;
b===j&&(d+=b.offsetTop,c+=b.offsetLeft,a.offset.doesNotAddBorder&&!(a.offset.doesAddBorderForTableAndCells&&bk.test(b.nodeName))&&(d+=parseFloat(e.borderTopWidth)||0,c+=parseFloat(e.borderLeftWidth)||0),m=j,j=b.offsetParent);
a.offset.subtractsBorderForOverflowNotVisible&&e.overflow!=="visible"&&(d+=parseFloat(e.borderTopWidth)||0,c+=parseFloat(e.borderLeftWidth)||0);
f=e}(f.position==="relative"||f.position==="static")&&(d+=g.offsetTop,c+=g.offsetLeft);
a.offset.supportsFixedPosition&&f.position==="fixed"&&(d+=Math.max(i.scrollTop,g.scrollTop),c+=Math.max(i.scrollLeft,g.scrollLeft));
return{top:d,
left:c}};
a.offset={initialize:function(){var f=b.body,d=b.createElement("div"),e,c,h,g,j=parseFloat(a.css(f,"marginTop"))||0,i="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
a.extend(d.style,{position:"absolute",
top:0,
left:0,
margin:0,
border:0,
width:"1px",
height:"1px",
visibility:"hidden"});
d.innerHTML=i;
f.insertBefore(d,f.firstChild);
e=d.firstChild;
c=e.firstChild;
g=e.nextSibling.firstChild.firstChild;
this.doesNotAddBorder=c.offsetTop!==5;
this.doesAddBorderForTableAndCells=g.offsetTop===5;
c.style.position="fixed";
c.style.top="20px";
this.supportsFixedPosition=c.offsetTop===20||c.offsetTop===15;
c.style.position=c.style.top="";
e.style.overflow="hidden";
e.style.position="relative";
this.subtractsBorderForOverflowNotVisible=c.offsetTop===-5;
this.doesNotIncludeMarginInBodyOffset=f.offsetTop!==j;
f.removeChild(d);
f=d=e=c=h=g=null;
a.offset.initialize=a.noop},
bodyOffset:function(b){var d=b.offsetTop,c=b.offsetLeft;
a.offset.initialize();
a.offset.doesNotIncludeMarginInBodyOffset&&(d+=parseFloat(a.css(b,"marginTop"))||0,c+=parseFloat(a.css(b,"marginLeft"))||0);
return{top:d,
left:c}},
setOffset:function(c,b,n){var i=a.css(c,"position"),h,e,m,k,f,d,g,j,l;
i==="static"&&(c.style.position="relative");
h=a(c),e=h.offset(),m=a.css(c,"top"),k=a.css(c,"left"),f=(i==="absolute"&&a.inArray("auto",[m,k])>-1),d={},g={};
f&&(g=h.position());
j=f?g.top:parseInt(m,10)||0;
l=f?g.left:parseInt(k,10)||0;
a.isFunction(b)&&(b=b.call(c,n,e));
b.top!=null&&(d.top=(b.top-e.top)+j);
b.left!=null&&(d.left=(b.left-e.left)+l);
"using"in b?b.using.call(c,d):h.css(d)}};
a.fn.extend({position:function(){if(!this[0])return null;
var e=this[0],d=this.offsetParent(),b=this.offset(),c=B.test(d[0].nodeName)?{top:0,
left:0}:d.offset();
b.top-=parseFloat(a.css(e,"marginTop"))||0;
b.left-=parseFloat(a.css(e,"marginLeft"))||0;
c.top+=parseFloat(a.css(d[0],"borderTopWidth"))||0;
c.left+=parseFloat(a.css(d[0],"borderLeftWidth"))||0;
return{top:b.top-c.top,
left:b.left-c.left}},
offsetParent:function(){return this.map(function(){var c=this.offsetParent||b.body;
while(c&&(!B.test(c.nodeName)&&a.css(c,"position")==="static"))c=c.offsetParent;
return c})}});
a.each(["Left","Top"],function(d,e){var b="scroll"+e;
a.fn[b]=function(f){var g=this[0],e;
if(!g)return null;
if(f!==c)return this.each(function(){e=r(this);
e?e.scrollTo(d?a(e).scrollLeft():f,d?f:a(e).scrollTop()):this[b]=f});
e=r(g);
return e?"pageXOffset"in e?e[d?"pageYOffset":"pageXOffset"]:a.support.boxModel&&e.document.documentElement[b]||e.document.body[b]:g[b]}});
function r(b){return a.isWindow(b)?b:b.nodeType===9?b.defaultView||b.parentWindow:false}a.each(["Height","Width"],function(e,b){var d=b.toLowerCase();
a.fn["inner"+b]=function(){return this[0]?parseFloat(a.css(this[0],d,"padding")):null};
a.fn["outer"+b]=function(b){return this[0]?parseFloat(a.css(this[0],d,b?"margin":"border")):null};
a.fn[d]=function(f){var e=this[0],h,g;
if(!e)return f==null?null:this;
if(a.isFunction(f))return this.each(function(c){var b=a(this);
b[d](f.call(this,c,b[d]()))});
if(a.isWindow(e))return e.document.compatMode==="CSS1Compat"&&e.document.documentElement["client"+b]||e.document.body["client"+b];
if(e.nodeType===9)return Math.max(e.documentElement["client"+b],e.body["scroll"+b],e.documentElement["scroll"+b],e.body["offset"+b],e.documentElement["offset"+b]);
if(f===c){h=a.css(e,d),g=parseFloat(h);
return a.isNaN(g)?h:g}return this.css(d,typeof f==="string"?f:f+"px")}})})(window);

