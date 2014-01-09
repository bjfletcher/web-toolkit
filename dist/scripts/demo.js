"undefined"==typeof toolkit&&(toolkit={}),toolkit.focus=function(){function e(){$(document).on("click keyup",i).on("keydown",o).on("focus","a, input, button, select, *[tabindex]",t).on("blur","a, input, button, select, *[tabindex]",n)}function t(e){s&&$(e.currentTarget).addClass(r)}function n(e){$(e.currentTarget).removeClass(r)}function o(e){var t=window.event?event.keyCode:e.keyCode;9==t&&(s=!0)}function i(e){var t=window.event?event.keyCode:e.keyCode;9==t&&(s=!1)}function a(e){$(e).addClass(r),e.focus()}var s=!1,r="has-focus";return e(),{apply:a,className:r}},"function"==typeof window.define&&window.define.amd?define("utils/focus",[],function(){return toolkit.focus()}):toolkit.focus=toolkit.focus(),"undefined"==typeof toolkit&&(toolkit={}),toolkit.hashManager=function(){function e(){$(window).on("hashchange",t);var e=document.documentMode,n="onhashchange"in window&&(void 0===e||e>7);n||(c.hash=document.location.hash,setInterval(function(){document.location.hash!==c.hash&&$(window).trigger("hashchange")},200)),c.windowLoaded=!0}function t(e){var t,n;e=r("string"==typeof e?e:location.hash),e?(t=c.globalHashList[e],n="callback",c.lastExecutor=e):c.lastExecutor&&(t=c.globalHashList[c.lastExecutor],n="undo"),t&&"function"==typeof t[n]?t[n](e):"callback"===n&&c.fallback.callback?c.fallback.callback(e):"undo"===n&&c.fallback.undo&&c.fallback.undo(e)}function n(){var e=window.location;"pushState"in history?(location.hash="!",history.pushState("",document.title,e.pathname+e.search)):location.hash="!"}function o(e){location.hash="!"+e}function i(e,n,o){var i=c.globalHashList;$(e).each(function(e,a){if(a=r(a),i[a]){var s="hashManager: hash ("+a+") already exists";throw new Error(s)}i[a]={callback:n,undo:o},c.windowLoaded&&a===r(location.hash)&&t(a)})}function a(){c.globalHashList=[]}function s(e,n){c.fallback.callback=e,c.fallback.undo=n,t()}function r(e){return e.replace(/[#!]/g,"")}var c={globalHashList:{},hasLoaded:!1,windowLoaded:!1,lastExecutor:null,hash:null,fallback:{callback:null,undo:null}};return e(),{register:i,registerFallback:s,change:o,remove:n,onHashChange:t,resetHash:a,cleanHash:r}},"function"==typeof window.define&&window.define.amd?define("utils/hashManager",[],function(){return toolkit.hashManager()}):toolkit.hashManager=toolkit.hashManager(),"undefined"==typeof toolkit&&(toolkit={}),toolkit.lightbox=function(e,t,n){function o(t,n){var o=e(n);o.attr("data-tabindex",o.attr("tabindex")),o.attr("tabindex",-1)}function i(t,n){var o=e(n);o.attr("data-tabindex")?(o.attr("tabindex",o.attr("data-tabindex")),o.removeAttr("data-tabindex")):o.removeAttr("tabindex")}function a(){e("a, input, select, textarea, button, *[tabindex]").each(o)}function s(e){e.find("*[tabindex]").each(i)}function r(e){e&&e.focus()}function c(e,n){e.hasClass(t.className)?t.apply(n[0]):n[0].focus()}function l(){e("body").css({overflow:"hidden","padding-right":f+"px"})}function d(){e("body").removeAttr("style")}function h(t,n,o){var i=e("#"+t.replace("lightbox/",""));this.id=t,this.$container=i.hasClass(u.main)?i:i.closest("."+u.main),this.$contents=this.$container.length?this.$container.find("."+u.content):i,this.$closeIcon=this.$container.find("."+u.closeButton),this.$lightboxLink=n,this.$container.length||(this.create(),this.bindEvents()),o&&(this.onShow=o.onShow,this.onClose=o.onClose)}var u={main:"lightbox",closing:"lightbox-closing",content:"lightbox-content",closeButton:"lightbox-close",open:"lightbox-open"},f=function(){var e,t=document.createElement("div");return t.className="lightbox-scrollbar-measure",document.body.appendChild(t),e=t.offsetWidth-t.clientWidth,document.body.removeChild(t),e}();h.prototype={bindEvents:function(){n.register([this.id],this.open.bind(this)),this.$lightboxLink.on("click",this.open.bind(this)),this.$container.on("click",this.close.bind(this)),this.$closeIcon.on("click",this.close.bind(this)),this.$contents.on("click",function(){return!1})},create:function(){var t=this.$contents,n=this.$contents.parent(),o=e('<div class="'+u.main+'"></div>'),i=e('<div class="skycom-container lightbox-container clearfix"></div>'),a=e('<a class="internal-link '+u.closeButton+' skycon-close" href="#!"><span class="speak">Close</span></a>');t.addClass(u.content+" skycom-10 skycom-offset1").attr("role","dialog"),t.prepend(a),i.append(t),o.append(i),n.append(o),this.$container=o,this.$closeIcon=a},open:function(){this.$container.hasClass(u.open)||(this.onShow&&this.onShow(),l(),this.$container.addClass(u.open),c(this.$lightboxLink,this.$closeIcon),a(),s(this.$container))},close:function(t){var o=this;t.preventDefault(),this.$container.hasClass(u.closing)||(this.$container.addClass(u.closing),n.remove(),window.setTimeout(function(){o.$container.removeClass(u.open+" "+u.closing),r(o.$lightboxLink),d(),s(e("body")),o.onClose&&o.onClose()},500))}},e.fn.lightbox=function(t){return this.each(function(){new h(e(this).attr("href").replace("#!",""),e(this),t)})}},"function"==typeof window.define&&window.define.amd?define("components/lightbox",["utils/focus","utils/hashManager"],function(e,t){return toolkit.lightbox(jQuery,e,t)}):toolkit.lightbox=toolkit.lightbox(jQuery,toolkit.focus,toolkit.hashManager);var hljs=new function(){function e(e){return e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function t(e){for(var t=e.firstChild;t;t=t.nextSibling){if("CODE"==t.nodeName.toUpperCase())return t;if(3!=t.nodeType||!t.nodeValue.match(/\s+/))break}}function n(e,t){return Array.prototype.map.call(e.childNodes,function(e){return 3==e.nodeType?t?e.nodeValue.replace(/\n/g,""):e.nodeValue:"BR"==e.nodeName.toUpperCase()?"\n":n(e,t)}).join("")}function o(e){var t=(e.className+" "+(e.parentNode?e.parentNode.className:"")).split(/\s+/);t=t.map(function(e){return e.replace(/^language-/,"")});for(var n=0;n<t.length;n++)if(f[t[n]]||"no-highlight"==t[n])return t[n]}function i(e){var t=[];return function n(e,o){for(var i=e.firstChild;i;i=i.nextSibling)3==i.nodeType?o+=i.nodeValue.length:"BR"==i.nodeName.toUpperCase()?o+=1:1==i.nodeType&&(t.push({event:"start",offset:o,node:i}),o=n(i,o),t.push({event:"stop",offset:o,node:i}));return o}(e,0),t}function a(t,n,o){function i(){return t.length&&n.length?t[0].offset!=n[0].offset?t[0].offset<n[0].offset?t:n:"start"==n[0].event?t:n:t.length?t:n}function a(t){function n(t){return" "+t.nodeName+'="'+e(t.value)+'"'}l+="<"+t.nodeName.toLowerCase()+Array.prototype.map.call(t.attributes,n).join("")+">"}function s(e){l+="</"+e.nodeName.toLowerCase()+">"}function r(e){("start"==e.event?a:s)(e.node)}for(var c=0,l="",d=[];t.length||n.length;){var h=i();if(l+=e(o.substr(c,h[0].offset-c)),c=h[0].offset,h==t){d.reverse().forEach(s);do r(h.splice(0,1)[0]),h=i();while(h==t&&h.length&&h[0].offset==c);d.reverse().forEach(a)}else"start"==h[0].event?d.push(h[0].node):d.pop(),r(h.splice(0,1)[0])}return l+e(o.substr(c))}function s(e){function t(e){return e&&e.source||e}function n(n,o){return RegExp(t(n),"m"+(e.cI?"i":"")+(o?"g":""))}function o(i,a){function s(t,n){e.cI&&(n=n.toLowerCase()),n.split(" ").forEach(function(e){var n=e.split("|");c[n[0]]=[t,n[1]?Number(n[1]):1],r.push(n[0])})}if(!i.compiled){i.compiled=!0;var r=[];if(i.k){var c={};if(i.lR=n(i.l||"\\b"+hljs.IR+"\\b(?!\\.)",!0),"string"==typeof i.k)s("keyword",i.k);else for(var l in i.k)i.k.hasOwnProperty(l)&&s(l,i.k[l]);i.k=c}a&&(i.bWK&&(i.b="\\b("+r.join("|")+")\\b(?!\\.)\\s*"),i.bR=n(i.b?i.b:"\\B|\\b"),i.e||i.eW||(i.e="\\B|\\b"),i.e&&(i.eR=n(i.e)),i.tE=t(i.e)||"",i.eW&&a.tE&&(i.tE+=(i.e?"|":"")+a.tE)),i.i&&(i.iR=n(i.i)),void 0===i.r&&(i.r=1),i.c||(i.c=[]);for(var d=0;d<i.c.length;d++)"self"==i.c[d]&&(i.c[d]=i),o(i.c[d],i);i.starts&&o(i.starts,a);for(var h=[],d=0;d<i.c.length;d++)h.push(t(i.c[d].b));i.tE&&h.push(t(i.tE)),i.i&&h.push(t(i.i)),i.t=h.length?n(h.join("|"),!0):{exec:function(){return null}}}}o(e)}function r(t,n,o,i){function a(e,t){for(var n=0;n<t.c.length;n++){var o=t.c[n].bR.exec(e);if(o&&0==o.index)return t.c[n]}}function l(e,t){return e.e&&e.eR.test(t)?e:e.eW?l(e.parent,t):void 0}function d(e,t){return!o&&t.i&&t.iR.test(e)}function h(e,t){var n=v.cI?t[0].toLowerCase():t[0];return e.k.hasOwnProperty(n)&&e.k[n]}function u(){var t=e($);if(!k.k)return t;var n="",o=0;k.lR.lastIndex=0;for(var i=k.lR.exec(t);i;){n+=t.substr(o,i.index-o);var a=h(k,i);a?(x+=a[1],n+='<span class="'+a[0]+'">'+i[0]+"</span>"):n+=i[0],o=k.lR.lastIndex,i=k.lR.exec(t)}return n+t.substr(o)}function p(){if(k.sL&&!f[k.sL])return e($);var t="continuous"==k.subLanguageMode?k.top:void 0,n=k.sL?r(k.sL,$,!0,t):c($);return k.r>0&&(x+=n.keyword_count,N+=n.r),k.top=n.top,'<span class="'+n.language+'">'+n.value+"</span>"}function b(){return void 0!==k.sL?p():u()}function m(t,n){var o=t.cN?'<span class="'+t.cN+'">':"";t.rB?(w+=o,$=""):t.eB?(w+=e(n)+o,$=""):(w+=o,$=n),k=Object.create(t,{parent:{value:k}})}function g(t,n){if($+=t,void 0===n)return w+=b(),0;var o=a(n,k);if(o)return w+=b(),m(o,n),o.rB?0:n.length;var i=l(k,n);if(i){var s=k;s.rE||s.eE||($+=n),w+=b();do k.cN&&(w+="</span>"),N+=k.r,k=k.parent;while(k!=i.parent);return s.eE&&(w+=e(n)),$="",i.starts&&m(i.starts,""),s.rE?0:n.length}if(d(n,k))throw new Error('Illegal lexem "'+n+'" for mode "'+(k.cN||"<unnamed>")+'"');return $+=n,n.length||1}var v=f[t];if(!v)throw new Error('Unknown language: "'+t+'"');s(v);for(var k=i||v,w="",y=k;y!=v;y=y.parent)y.cN&&(w='<span class="'+y.cN+'">'+w);var $="",N=0,x=0;try{for(var C,E,L=0;;){if(k.t.lastIndex=L,C=k.t.exec(n),!C)break;E=g(n.substr(L,C.index-L),C[0]),L=C.index+E}g(n.substr(L));for(var y=k;y.parent;y=y.parent)y.cN&&(w+="</span>");return{r:N,keyword_count:x,value:w,language:t,top:k}}catch(M){if(-1!=M.message.indexOf("Illegal"))return{r:0,keyword_count:0,value:e(n)};throw M}}function c(t){var n={keyword_count:0,r:0,value:e(t)},o=n;for(var i in f)if(f.hasOwnProperty(i)){var a=r(i,t,!1);a.language=i,a.keyword_count+a.r>o.keyword_count+o.r&&(o=a),a.keyword_count+a.r>n.keyword_count+n.r&&(o=n,n=a)}return o.language&&(n.second_best=o),n}function l(e,t,n){return t&&(e=e.replace(/^((<[^>]+>|\t)+)/gm,function(e,n){return n.replace(/\t/g,t)})),n&&(e=e.replace(/\n/g,"<br>")),e}function d(e,t,s){var d=n(e,s),h=o(e);if("no-highlight"!=h){var u=h?r(h,d,!0):c(d);h=u.language;var f=i(e);if(f.length){var p=document.createElementNS("http://www.w3.org/1999/xhtml","pre");p.innerHTML=u.value,u.value=a(f,i(p),d)}u.value=l(u.value,t,s);var b=e.className;b.match("(\\s|^)(language-)?"+h+"(\\s|$)")||(b=b?b+" "+h:h),e.innerHTML=u.value,e.className=b,e.result={language:h,kw:u.keyword_count,re:u.r},u.second_best&&(e.second_best={language:u.second_best.language,kw:u.second_best.keyword_count,re:u.second_best.r})}}function h(){h.called||(h.called=!0,Array.prototype.map.call(document.getElementsByTagNameNS("http://www.w3.org/1999/xhtml","pre"),t).filter(Boolean).forEach(function(e){d(e,hljs.tabReplace)}))}function u(){window.addEventListener("DOMContentLoaded",h,!1),window.addEventListener("load",h,!1)}var f={};this.LANGUAGES=f,this.highlight=r,this.highlightAuto=c,this.fixMarkup=l,this.highlightBlock=d,this.initHighlighting=h,this.initHighlightingOnLoad=u,this.IR="[a-zA-Z][a-zA-Z0-9_]*",this.UIR="[a-zA-Z_][a-zA-Z0-9_]*",this.NR="\\b\\d+(\\.\\d+)?",this.CNR="(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",this.BNR="\\b(0b[01]+)",this.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|\\.|-|-=|/|/=|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",this.BE={b:"\\\\[\\s\\S]",r:0},this.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[this.BE],r:0},this.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[this.BE],r:0},this.CLCM={cN:"comment",b:"//",e:"$"},this.CBLCLM={cN:"comment",b:"/\\*",e:"\\*/"},this.HCM={cN:"comment",b:"#",e:"$"},this.NM={cN:"number",b:this.NR,r:0},this.CNM={cN:"number",b:this.CNR,r:0},this.BNM={cN:"number",b:this.BNR,r:0},this.REGEXP_MODE={cN:"regexp",b:/\//,e:/\/[gim]*/,i:/\n/,c:[this.BE,{b:/\[/,e:/\]/,r:0,c:[this.BE]}]},this.inherit=function(e,t){var n={};for(var o in e)n[o]=e[o];if(t)for(var o in t)n[o]=t[o];return n}};hljs.LANGUAGES.diff=function(){return{c:[{cN:"chunk",b:"^\\@\\@ +\\-\\d+,\\d+ +\\+\\d+,\\d+ +\\@\\@$",r:10},{cN:"chunk",b:"^\\*\\*\\* +\\d+,\\d+ +\\*\\*\\*\\*$",r:10},{cN:"chunk",b:"^\\-\\-\\- +\\d+,\\d+ +\\-\\-\\-\\-$",r:10},{cN:"header",b:"Index: ",e:"$"},{cN:"header",b:"=====",e:"=====$"},{cN:"header",b:"^\\-\\-\\-",e:"$"},{cN:"header",b:"^\\*{3} ",e:"$"},{cN:"header",b:"^\\+\\+\\+",e:"$"},{cN:"header",b:"\\*{5}",e:"\\*{5}$"},{cN:"addition",b:"^\\+",e:"$"},{cN:"deletion",b:"^\\-",e:"$"},{cN:"change",b:"^\\!",e:"$"}]}}(hljs),hljs.LANGUAGES.javascript=function(e){return{k:{keyword:"in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const",literal:"true false null undefined NaN Infinity"},c:[e.ASM,e.QSM,e.CLCM,e.CBLCLM,e.CNM,{b:"("+e.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[e.CLCM,e.CBLCLM,e.REGEXP_MODE,{b:/</,e:/>;/,sL:"xml"}],r:0},{cN:"function",bWK:!0,e:/{/,k:"function",c:[{cN:"title",b:/[A-Za-z$_][0-9A-Za-z$_]*/},{cN:"params",b:/\(/,e:/\)/,c:[e.CLCM,e.CBLCLM],i:/["'\(]/}],i:/\[|%/}]}}(hljs),hljs.LANGUAGES.css=function(e){var t="[a-zA-Z-][a-zA-Z0-9_-]*",n={cN:"function",b:t+"\\(",e:"\\)",c:["self",e.NM,e.ASM,e.QSM]};return{cI:!0,i:"[=/|']",c:[e.CBLCLM,{cN:"id",b:"\\#[A-Za-z0-9_-]+"},{cN:"class",b:"\\.[A-Za-z0-9_-]+",r:0},{cN:"attr_selector",b:"\\[",e:"\\]",i:"$"},{cN:"pseudo",b:":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"},{cN:"at_rule",b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{cN:"at_rule",b:"@",e:"[{;]",c:[{cN:"keyword",b:/\S+/},{b:/\s/,eW:!0,eE:!0,r:0,c:[n,e.ASM,e.QSM,e.NM]}]},{cN:"tag",b:t,r:0},{cN:"rules",b:"{",e:"}",i:"[^\\s]",r:0,c:[e.CBLCLM,{cN:"rule",b:"[^\\s]",rB:!0,e:";",eW:!0,c:[{cN:"attribute",b:"[A-Z\\_\\.\\-]+",e:":",eE:!0,i:"[^\\s]",starts:{cN:"value",eW:!0,eE:!0,c:[n,e.NM,e.QSM,e.ASM,e.CBLCLM,{cN:"hexcolor",b:"#[0-9A-Fa-f]+"},{cN:"important",b:"!important"}]}}]}]}]}}(hljs),hljs.LANGUAGES.xml=function(){var e="[A-Za-z0-9\\._:-]+",t={eW:!0,r:0,c:[{cN:"attribute",b:e,r:0},{b:'="',rB:!0,e:'"',c:[{cN:"value",b:'"',eW:!0}]},{b:"='",rB:!0,e:"'",c:[{cN:"value",b:"'",eW:!0}]},{b:"=",c:[{cN:"value",b:"[^\\s/>]+"}]}]};return{cI:!0,c:[{cN:"pi",b:"<\\?",e:"\\?>",r:10},{cN:"doctype",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},{cN:"comment",b:"<!--",e:"-->",r:10},{cN:"cdata",b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{title:"style"},c:[t],starts:{e:"</style>",rE:!0,sL:"css"}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{title:"script"},c:[t],starts:{e:"</script>",rE:!0,sL:"javascript"}},{b:"<%",e:"%>",sL:"vbscript"},{cN:"tag",b:"</?",e:"/?>",r:0,c:[{cN:"title",b:"[^ /><]+"},t]}]}}(hljs),hljs.LANGUAGES.http=function(){return{i:"\\S",c:[{cN:"status",b:"^HTTP/[0-9\\.]+",e:"$",c:[{cN:"number",b:"\\b\\d{3}\\b"}]},{cN:"request",b:"^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",rB:!0,e:"$",c:[{cN:"string",b:" ",e:" ",eB:!0,eE:!0}]},{cN:"attribute",b:"^\\w",e:": ",eE:!0,i:"\\n|\\s|=",starts:{cN:"string",e:"$"}},{b:"\\n\\n",starts:{sL:"",eW:!0}}]}}(hljs),hljs.LANGUAGES.json=function(e){var t={literal:"true false null"},n=[e.QSM,e.CNM],o={cN:"value",e:",",eW:!0,eE:!0,c:n,k:t},i={b:"{",e:"}",c:[{cN:"attribute",b:'\\s*"',e:'"\\s*:\\s*',eB:!0,eE:!0,c:[e.BE],i:"\\n",starts:o}],i:"\\S"},a={b:"\\[",e:"\\]",c:[e.inherit(o,{cN:null})],i:"\\S"};return n.splice(n.length,0,i,a),{c:n,k:t,i:"\\S"}}(hljs),"function"==typeof window.define&&window.define.amd&&define("lib/highlight",[],function(){return hljs}),"undefined"==typeof demo&&(demo={}),demo.displayCode=function(e,t){function n(e,t,n){var o=$(n.replace(/{{ site.version }}/g,$("#current-version").text()));t.indexOf("js")>-1&&(o=$.parseHTML(o)),$(document.getElementById(e+t+"-table")).append(o)}function o(e,n,o,i){var a=document.getElementById(e+n+"-table"),s=document.createElement("tr"),r=document.createElement("td"),c=document.createElement("td"),l=document.createTextNode(o),d=document.createTextNode(i);r.className="codekolom",c.className="bredecode",r.appendChild(l),c.appendChild(d),s.appendChild(r),s.appendChild(c),a.appendChild(s),t.highlightBlock(c)}function i(e){this.header=e.header,this.feature=e.feature,this.dir=e.dir,this.fileNames=e.fileNames,this.styled=e.styled,this.$lightboxLink=$('a[href*="#!lightbox/code-'+this.feature+'"]'),$("#code-"+this.feature).length||this.getCode()}return i.prototype.getCode=function(){this.fileCount=0,this.filesReceived=0,this.getFile(this.dir,"notes","html",!0);for(var e in this.fileNames)this.getFile(this.dir,this.fileNames[e],"html"),this.getFile(this.dir,this.fileNames[e],"notes.html",!0),this.getFile(this.dir,this.fileNames[e],"js"),this.getFile(this.dir,this.fileNames[e],"require.js")},i.prototype.getFile=function(e,t,n,o){this.fileCount++;var i=this,a=$.ajax({crossDomain:!0,cache:!1,dataType:"html",url:e+"/"+t+"."+n});a.always(function(e){i.filesReceived++,i[i.feature+"-"+t+n]="string"==typeof e?e:"",i.addToPage(t,n,o)})},i.prototype.addToPage=function(e,t,n){this.$container=this.$lightboxLink.parent().parent().find(".code-container"),this.$tabList=this.$container.find(".tabs"),this.addContainer(),this.addTab(e,t,n),this.show(e,t,n),this.fileCount===this.filesReceived&&($("#code-"+this.feature).inPageNav(),this.$lightboxLink.lightbox())},i.prototype.addContainer=function(){this.$container.length||(this.$container=$('<div class="code-container clearfix tabs-container page-nav" data-function="tabs" id="code-'+this.feature+'"><h3 class="code-h3">'+this.header+'</h3><div id="'+this.feature+'-noteshtml-table" class="feature-notes"></div></div>'),this.$tabList=$('<ul class="tabs clearfix" role="tablist" ><div class="dropdown-tab-select"><a href="#!" aria-controls="dropdown" aria-label="more tabs" class="medium">&hellip;</a><ul class="more-tabs"></ul></div></ul>'),this.$container.append(this.$tabList),this.$lightboxLink.parent().parent().append(this.$container))},i.prototype.createTable=function(e,t,n){var o=this.feature+"-"+e+t+"-table";return this.styled||n?$('<div id="'+o+'" class="styled '+t+'"></div> '):$("<pre><table class=language-"+t.replace("require.","")+'><thead><tr><th colspan="3">'+t.toUpperCase()+'</th></tr></thead><tbody id="'+o+'"></tbody></table></pre>')},i.prototype.addTab=function(e,t){var n=this.feature+"-"+e;if(!this.$container.find("#"+n+"-tab").length&&"notes"!==e){var o=$('<li id="'+n+'-tab" aria-controls="'+n+'-tab-contents" role="tab" class="tab"><a href="#!'+n+'-tab-contents" class="skycom-ellipsis internal-link"><span>'+(e?e:"default")+"</span></a></li>");this.$tabList.prepend(o);var i=$('<div class="tabpanel" id="'+n+'-tab-contents" class="tabpanel selected" aria-labeledby="'+n+'-tab" role="tabpanel"></div>'),a=$('<section class="tabcontents clearfix"></section>');a.append(this.createTable(e,"notes.html",t)).append(this.createTable(e,"html")).append(this.createTable(e,"require.js")).append(this.createTable(e,"js")),i.append(a),this.$container.append(i)}},i.prototype.show=function(e,t,i){var a=this.feature+"-"+e;if(this.styled||i)n(a,t,this[a+t]);else{var s=this[a+t]?this[a+t].split("\n"):"";for(var r in s){var c=s[r];o(a,t,parseInt(r,10)+1,c)}}},i},"function"==typeof window.define&&window.define.amd?define("demo/displayCode",["components/lightbox","lib/highlight"],function(e,t){return demo.displayCode(e,t)}):demo.displayCode=demo.displayCode(toolkit.lightbox,hljs),"undefined"==typeof demo&&(demo={}),demo.menu=function(){function e(){$(window).on("scroll",a),$("#toolkit-menu-tabs [role=tablist] li").on("mouseenter mouseleave",t),$("#toolkit-menu-tabs .tabpanel").on("mouseenter mouseleave",t)}function t(e){"mouseleave"===e.type?s=setTimeout(function(){n(),i()},250):(clearTimeout(s),o($("#"+$(this).attr("aria-controls"))))}function n(){$("#toolkit-menu-tabs .tabpanel").removeClass("selected")}function o(e){e.length&&(n(),e.addClass("selected"))}function i(){$("#toolkit-menu-tabs .tabpanel li.selected").closest(".tabpanel").addClass("selected")}function a(){var e=window.scrollY;r&&c>e?(r=!1,$("#toolkit-menu-tabs").removeClass("stick"),$("h1.demo-header").removeAttr("style")):!r&&e>c&&(r=!0,$("#toolkit-menu-tabs").addClass("stick"),$("h1.demo-header").attr("style","padding-bottom:"+$("#toolkit-menu-tabs").height()+"px"))}var s,r=!1,c=$("#toolkit-menu-tabs").offset().top;e()},"function"==typeof window.define&&window.define.amd?define("demo/menu",[],function(){return demo.menu()}):demo.menu(),"undefined"==typeof demo&&(demo={}),demo.tests=function(){function e(e){var n=e.replace("test/",""),a=document.createElement("script");a.src="/test/specs/"+n+".js",a.onload=function(){var a=$('a[href*="#'+e+'"]'),s=$('<div id="mocha" class="mocha-container"></div>');a.parent().after(s);var r=window[n]();mocha.grep(r),mocha.run(function(){t(a,s),s.attr("id","mocha-"+n)}),a.removeAttr("href"),$("html, body").animate({scrollTop:s.parent().prev().offset().top},200),i(s,n),a.on("click",function(){o($("#"+n+"-lightbox"))})},document.head.appendChild(a)}function t(e,t){var n=t.find(".failures em").text();"0"===n?e.prepend("<span class='dev-button result-summary'><i class='skycon-tick colour' aria-hidden='true'></i> Tests Passed</span>"):e.prepend("<span class='dev-button result-summary error'><i class='skycon-warning colour' aria-hidden='true'></i> Tests Failed</span>")}function n(e,t){e.preventDefault();var n=$(e.target).hasClass("lightbox-close")||!$(e.target).hasClass("lightbox-content")&&!$(e.target).parents(".lightbox-content").length;n&&t.hide().removeClass("lightbox-open")}function o(e){e.show().addClass("lightbox-open")}function i(e,t){var i=document.createElement("div"),a=document.createElement("div"),s=document.createElement("article"),r=$('<a class="internal-link lightbox-close skycon-close black" href="#"><span class="speak">Close</span></a>');i.className="lightbox",i.id=t+"-lightbox",a.className="skycom-container lightbox-container clearfix",s.className="lightbox-content skycom-10 skycom-offset1",$(s).append(r),$(s).append(e.find("#mocha-stats")),$(s).append(e.find("#mocha-report")),$(a).append($(s)),$(i).append($(a)),e.append($(i)),o($("#"+t+"-lightbox")),r.add($(i)).on("click",function(e){n(e,$("#"+t+"-lightbox"))})}function a(){if(!window.require||!window.describe)return setTimeout(a,250),void 0;var t=[];$(".run-test").each(function(){t.push($(this).attr("href").split("#")[1])}),window.toolkit.hashManager.register(t,e)}a()},"function"==typeof window.define&&window.define.amd?define("demo/tests",["utils/hashManager","components/lightbox"],function(e,t){return demo.tests(e,t)}):demo.tests(toolkit.hash,toolkit.lightbox),"undefined"==typeof demo&&(demo={}),demo.skycons=function(){function e(){var e=[],t=$("#wiki-skycons tbody tr");t.each(function(t){e.push({i:t,skycon:$(this).find("td").first().text().trim()})}),e.sort(function(e,t){return e.skycon>t.skycon?1:e.skycon<t.skycon?-1:0}),$("#wiki-skycons tbody tr").remove();for(var n=0;n<e.length;n++)$("#wiki-skycons tbody").append($(t[e[n].i]))}e()},"function"==typeof window.define&&window.define.amd?define("demo/skycons",[],function(){return demo.skycons()}):demo.skycons(),"undefined"==typeof demo&&(demo={}),demo.main=function(e){function t(){$(document).on("click",".toggler",i),$(document).on("click",".code-download",o),$(".sky-form").on("submit",n)}function n(e){e.preventDefault();var t,n=$("#version").val(),o=$("#current-version").text(),i="http://web-toolkit.global.sky.com",a=t="_site/_includes";0===location.hostname.indexOf("local")&&(i="http://"+location.host,t="../_includes"),(n.split(".").length<3||n.split(".")[0]<1)&&$(".sky-form .error").text("The version number is required, and must be '1.0.0' or higher"),(1===parseFloat(n,10)||"0"===n.split(".")[0])&&(n="0.6.9"),window.toolkit.diff({oldRoute:i+"/"+n+"/"+a,newRoute:i+"/"+o+"/"+t})}function o(){var t=!1,n=$(this).attr("href").replace("#!lightbox/code-",""),o=$("#current-version").text(),i="http://web-toolkit.global.sky.com",a="_site/_includes";0===location.hostname.indexOf("local")&&(i="http://"+location.host,a="../_includes");var s,r,c;$(this).attr("data-docs")?(s=$(this).attr("data-docs"),r=n,c=i+"/"+o+"/"+a+"/"+r,t=!0):(s=$('a[href*="#'+n+'"]').attr("data-diff-demos"),r=$('a[href*="#'+n+'"]').attr("data-diff"),c=i+"/"+o+"/"+a+"/"+r),new e({header:$(this).parent().text().replace($(this).text(),"").trim(),feature:n,dir:c,fileNames:s.split(","),styled:t})}function i(){var e=$(this),t=$("div[data-toggle="+e.attr("for")+"]");t.hasClass("open")?(e.removeClass("open"),t.removeClass("open")):(e.addClass("open"),t.addClass("open"))}t()},"function"==typeof window.define&&window.define.amd?define("demo",["demo/displayCode","demo/menu","demo/tests","demo/skycons"],function(e,t,n,o){return demo.main(e,t,n,o)}):demo.main(demo.displayCode,demo.menu,demo.tests,demo.skycons);