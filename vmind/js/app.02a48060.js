(function(e){function t(t){for(var s,a,c=t[0],l=t[1],r=t[2],u=0,h=[];u<c.length;u++)a=c[u],i[a]&&h.push(i[a][0]),i[a]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);d&&d(t);while(h.length)h.shift()();return o.push.apply(o,r||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],s=!0,c=1;c<n.length;c++){var l=n[c];0!==i[l]&&(s=!1)}s&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var s={},i={app:0},o=[];function a(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=s,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(n,s,function(t){return e[t]}.bind(null,s));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var r=0;r<c.length;r++)t(c[r]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},4244:function(e,t,n){},"43b7":function(e,t,n){"use strict";var s=n("4244"),i=n.n(s);i.a},"507a":function(e,t,n){},5290:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var s=n("8bbf"),i=n.n(s),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("nav-bar"),n("mind-map")],1)},a=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{ref:"main",attrs:{id:"jsmind_container"}},[n("popup")],1)},l=[],r=(n("6e2c"),n("6376")),d=n.n(r),u=(n("4100"),n("9494"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],ref:"popup",staticClass:"popup-menu",style:{top:e.offsetTop,left:e.offsetLeft},on:{click:function(t){e.show=!1}}},[n("button",{staticClass:"add-node",on:{click:function(t){return e.addNode()}}},[n("span",{staticClass:"icon icon-node"}),n("span",[e._v("添加子节点")])]),n("button",{staticClass:"add-brother-node",on:{click:function(t){return e.addBrotherNode()}}},[n("span",{staticClass:"icon icon-sub-node"}),n("span",[e._v("添加兄弟节点")])]),n("button",{staticClass:"delete-node",on:{click:function(t){return e.deleteNode()}}},[n("span",{staticClass:"icon icon-delete"}),n("span",[e._v("删除")])]),n("button",{staticClass:"edit-node",on:{click:function(t){return e.editNode()}}},[n("span",{staticClass:"icon icon-edit"}),n("span",[e._v("编辑")])]),n("button",{staticClass:"toggle-node-tree",on:{click:function(t){return e.toggleNode()}}},[n("span",{staticClass:"icon icon-unfold"}),n("span",[e._v("显隐子节点")])])])}),h=[],m={data(){return{show:!1,offsetTop:"",offsetLeft:""}},methods:{addNode(){this.$bus.$emit("addNode")},addBrotherNode(){this.$bus.$emit("addBrotherNode")},deleteNode(){this.$bus.$emit("deleteNode")},editNode(){this.$bus.$emit("editNode")},toggleNode(){this.$bus.$emit("toggleNode")},setPopupPosition(e){let t=e.target;if("JMNODE"===t.tagName){this.show=!0;let e=t.offsetTop,n=t.offsetLeft;this.offsetTop=e-60+"px",this.offsetLeft=n+"px",t.scrollIntoView({block:"center",behavior:"smooth",inline:"center"})}else"BUTTON"!==t.tagName&&"SPAN"!==t.tagName&&(this.show=!1)}},mounted(){window.addEventListener("mousedown",e=>{this.setPopupPosition(e)}),this.$bus.$on("popup-hide",()=>{this.show=!1})}},p=m,f=(n("7899"),n("2877")),g=Object(f["a"])(p,u,h,!1,null,null,null),b=g.exports,v={clearLocal(){localStorage.clear()},getLocal(){let e=localStorage.getItem("vmind");return e?JSON.parse(e):e},saveLocal(e){this.clearLocal(),localStorage.setItem("vmind",JSON.stringify(e))}};n("ac6a");const w=function(e){return JSON.stringify(e)},_=function e(t){const n={data:{}};return n.data.id=t.id,n.data.text=t.topic,n.data.created=Date.now(),n.data.expandState=t.expanded?"expand":"collapse",t.children&&(n.data.children=t.children.map(t=>e(t))),n},k=function(e){const t={root:_(e.data)};return JSON.stringify(t)},C=function(e,t){return t<=6?"#".repeat(t)+" "+e.topic:"\t".repeat(t-6)+"- "+e.topic},x=function(e,t){return"\t".repeat(t)+e.topic},$=function(e,t){const n=[],s=function e(s,i){if(!s)return;let o;o="md"===t?C(s,i):x(s,i-1),n.push(o),s.children&&s.children.forEach(t=>{e(t,i+1)})};return s(e.data,1),n.join("\n")},j=function(e){return $(e,"md")},N=function(e){return $(e,"txt")},y=function(e){return e.data},S={jm:w,km:k,md:j,txt:N,mm:y};var T=(e,t)=>{return S[t](e)},M=(e,t,n)=>{const s=document.createElement("a");s.download=t+"."+n;let i=new Blob([e]);s.href=URL.createObjectURL(i),s.click(),log(s)};n("28a5"),n("9ba9");const O={jm:!0,txt:!0,md:!0,mm:!0,km:!0},B=e=>{return new Promise((t,n)=>{const s=new FileReader;s.onload=e=>{const n=e.target.result;t(n)},s.readAsText(e,"utf-8")})};var E=()=>{return new Promise((e,t)=>{const n=document.createElement("input");n.type="file",n.accept=".jm,.txt,.md,.km,.mm",n.addEventListener("change",t=>{const n=t.target.files[0],s=n.name.split("."),i=(s[0],s[1].toLocaleLowerCase());O[i]?B(n).then(t=>{e({data:t,format:i})}):alert("暂不支持此类文件")}),n.click(),n.remove()})};n("a481"),n("4917"),n("6b54");const L=()=>{return((new Date).getTime().toString(16)+Math.random().toString(16).substr(2)).substr(2,16)},P=e=>{return JSON.parse(e)},F=(e,t)=>{let n,s;if("md"===t){let t=e.match(/^#{1,6} /);null!==t?(n=t[0].length-2,s=e.split(" ")[1]):(t=e.match(/^\s*\S /),n=t[0].length+3,s=e.split(" ")[1])}else"txt"===t&&(n=e.match(/^\s*/)[0].length,s=e.replace(/^\s*/,""));return{layer:n,text:s}},J=function e(t,n,s){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";if(-1===s&&0===t.length)return;if(-1===s){let e=F(t.shift(),n);s=e.layer||0,i=e.text||"未知数据"}const o={id:0===s?"root":L(),topic:i,expanded:!0,children:[]};while(t.length>0){let i=F(t[0],n),a=i.layer,c=i.text;if(!(a>s))break;{t.shift();let s=e(t,n,a,c);o.children.push(s)}}return o},A=(e,t)=>{let n=e.split("\n"),s=J(n,t,-1);const i={meta:{name:"Vmind",author:"sdk233@outlook.com",version:"0.1"},format:"node_tree",data:{}};return i.data=s,i},V=e=>{const t={};return t.id=e.id,t.topic=e.text,t.id=e.id,t.expanded="expand"===e.expandState,e.children&&(t.children=e.children.map(e=>V(e.data))),t},D=e=>{let t=JSON.parse(e),n=V(t.root.data);return{meta:{name:"Vmind",author:"sdk233@outlook.com",version:"0.1"},format:"node_tree",data:n}},W=e=>{return{meta:{name:"Vmind",author:"sdk233@outlook.com",version:"0.1"},format:"freemind",data:e}},I={jm:P,km:D,md:A,txt:A,mm:W};var R=(e,t)=>{return I[t](e,t)},U={container:"jsmind_container",editable:!0,theme:"warning",mode:"full",view:{hmargin:100,vmargin:100,line_width:2,line_color:"#555"},layout:{hspace:50,vspace:40,pspace:13},shortcut:{enable:!0,handles:{},mapping:{addchild:9,addbrother:13,editnode:113,delnode:46,toggle:32,left:37,up:38,right:39,down:40}}},q={meta:{name:"Vmind",author:"sdk233@outlook.com",version:"0.1"},format:"node_tree",data:{id:"root",topic:"主题",expanded:!0,children:[{id:"1",topic:"分支1",expanded:!0,direction:"right"},{id:"2",topic:"分支2",expanded:!0,direction:"right"},{id:"3",topic:"分支3",expanded:!0,direction:"right"}]}},G={components:{popup:b},methods:{init(){this.jm=new d.a(U);let e=v.getLocal();e?this.jm.show(e):this.jm.show(q);let t=this.jm;this.jm.add_event_listener((e,n)=>{3===e&&(v.saveLocal(t.get_data()),this.$bus.$emit("popup-hide"))})},download(e,t){let n;"img"!==e?(n="mm"===e?this.jm.get_data("freemind"):this.jm.get_data(),n=T(n,e),M(n,t,e)):this.jm.screenshot.shootDownload()},popupBindEevent(){this.$bus.$on("addNode",()=>{let e=this.jm.get_selected_node();if(e){let t=d.a.util.uuid.newid(),n="新建节点",s=this.jm.add_node(e,t,n);this.$bus.$emit("editNode",s)}}),this.$bus.$on("addBrotherNode",()=>{let e=this.jm.get_selected_node();if(!e.isroot&&e){let t=d.a.util.uuid.newid(),n="新建节点";this.jm.insert_node_after(e,t,n),this.$bus.$emit("editNode",t)}}),this.$bus.$on("deleteNode",()=>{let e=this.jm.get_selected_node();e.isroot||e&&this.jm.remove_node(e)}),this.$bus.$on("editNode",e=>{if(e)this.jm.begin_edit(e);else{let e=this.jm.get_selected_node();e&&this.jm.begin_edit(e)}setTimeout(()=>{document.querySelector(".jsmind-editor").focus()},20)}),this.$bus.$on("toggleNode",()=>{let e=this.jm.get_selected_node();e&&this.jm.toggle_node(e)})}},created(){this.$bus.$on("download",(e,t)=>{this.download(e,t)}),this.$bus.$on("createNewMind",()=>{this.jm.show(q),v.clearLocal()}),this.$bus.$on("openFile",()=>{E().then(e=>{let t=e.data,n=e.format,s=R(t,n);this.jm.show(s)})}),this.popupBindEevent(),this.$bus.$on("selectTheme",e=>{this.jm.set_theme(e)}),this.$bus.$on("unfoldAllNodes",e=>{e?this.jm.expand_all():this.jm.collapse_all()}),window.addEventListener("keydown",e=>{if(13===e.keyCode||9===e.keyCode){let e=this.jm.get_selected_node();null!==e&&this.$bus.$emit("editNode",e)}})},mounted(){this.init()}},K=G,X=Object(f["a"])(K,c,l,!1,null,null,null),z=X.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav-bar-wrapper"},[n("file-action-menu",{attrs:{title:e.title}}),n("div",{staticClass:"file-title-wrapper"},[n("span",{staticClass:"file-title",on:{click:function(t){e.changeTitle=!0}}},[n("span",{directives:[{name:"show",rawName:"v-show",value:!e.changeTitle,expression:"!changeTitle"}],ref:"fileTitle"},[e._v("\r\n                "+e._s(e.title)+"\r\n            ")]),e.changeTitle?n("input",{directives:[{name:"focus",rawName:"v-focus"},{name:"model",rawName:"v-model",value:e.title,expression:"title"}],staticClass:"input-title",style:{width:e.inputWidth},attrs:{type:"text",placeholder:"输入新标题"},domProps:{value:e.title},on:{keydown:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.changeTitle=!1},blur:function(t){e.changeTitle=!1},input:function(t){t.target.composing||(e.title=t.target.value)}}}):e._e()])]),n("view-control")],1)},Q=[],Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"file-action"},[n("button",{staticClass:"create",on:{click:function(t){e.showMessageBox=1}}},[n("span",{staticClass:"icon icon-create"}),n("span",[e._v("新建")])]),n("button",{staticClass:"open",on:{click:function(t){e.showMessageBox=2}}},[n("span",{staticClass:"icon icon-open"}),n("span",[e._v("打开")])]),n("button",{staticClass:"download",on:{click:function(t){e.showMessageBox=3}}},[n("span",{staticClass:"icon icon-download"}),n("span",[e._v("导出")])]),0!==e.showMessageBox?n("message-box",{on:{cancel:function(t){e.showMessageBox=0},confirm:function(t){return e.clickConfirm()}}},[1===e.showMessageBox?n("p",[e._v("此操作将导致当前思维导图的数据丢失!")]):2===e.showMessageBox?n("p",[e._v("此操作将导致当前思维导图的数据丢失!")]):3===e.showMessageBox?n("div",{staticClass:"radio-group"},[n("p",{staticStyle:{padding:"0"}},[e._v("选择下载格式")]),n("label",{staticClass:"radio",on:{click:function(t){return e.toggleCheck(1)}}},[n("span",{staticClass:"radio-inner",class:{"radio-checked":1===e.checked}}),n("span",{staticClass:"radio-label"},[e._v("PNG (.png)")])]),n("label",{staticClass:"radio",on:{click:function(t){return e.toggleCheck(2)}}},[n("span",{staticClass:"radio-inner",class:{"radio-checked":2===e.checked}}),n("span",{staticClass:"radio-label"},[e._v("JMind (.jm)")])]),n("label",{staticClass:"radio",on:{click:function(t){return e.toggleCheck(3)}}},[n("span",{staticClass:"radio-inner",class:{"radio-checked":3===e.checked}}),n("span",{staticClass:"radio-label"},[e._v("MarkDown (.md)")])]),n("label",{staticClass:"radio",on:{click:function(t){return e.toggleCheck(4)}}},[n("span",{staticClass:"radio-inner",class:{"radio-checked":4===e.checked}}),n("span",{staticClass:"radio-label"},[e._v("大纲文本 (.txt)")])]),n("label",{staticClass:"radio",on:{click:function(t){return e.toggleCheck(5)}}},[n("span",{staticClass:"radio-inner",class:{"radio-checked":5===e.checked}}),n("span",{staticClass:"radio-label"},[e._v("KityMinder (百度脑图)")])]),n("label",{staticClass:"radio",on:{click:function(t){return e.toggleCheck(6)}}},[n("span",{staticClass:"radio-inner",class:{"radio-checked":6===e.checked}}),n("span",{staticClass:"radio-label"},[e._v("Freemind (XMind)")])])]):e._e()]):e._e()],1)},Z=[],ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"message-box-wrapper fadein"},[n("div",{staticClass:"mask"}),n("section",{staticClass:"message-box"},[e._m(0),n("div",{staticClass:"message-box-content"},[e._t("default")],2),n("div",{staticClass:"message-box-control"},[n("button",{staticClass:"message-box-cancel btn btn-small",on:{click:function(t){return e.cancel()}}},[e._v("取消")]),n("button",{staticClass:"message-box-confirm btn btn-small btn-primary",on:{click:function(t){return e.confirm()}}},[e._v("确定")])])])])},te=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"message-box-header"},[n("div",{staticClass:"message-box-title"},[e._v("提示")])])}],ne={methods:{cancel(){this.$emit("cancel")},confirm(){this.$emit("confirm")}}},se=ne,ie=(n("43b7"),Object(f["a"])(se,ee,te,!1,null,"2892e6bf",null)),oe=ie.exports,ae={props:["title"],components:{messageBox:oe},data(){return{showMessageBox:0,checked:0,downFormat:{1:"img",2:"jm",3:"md",4:"txt",5:"km",6:"mm"}}},methods:{toggleCheck(e){this.checked=e},download(){let e=this.downFormat[this.checked];this.$bus.$emit("download",e,this.title)},openFile(){this.$bus.$emit("openFile")},createNewMind(){this.$bus.$emit("createNewMind")},clickConfirm(){let e={1:this.createNewMind,2:this.openFile,3:this.download};e[this.showMessageBox](),this.showMessageBox=0}}},ce=ae,le=(n("9ae0"),Object(f["a"])(ce,Y,Z,!1,null,"2f392a14",null)),re=le.exports,de=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"view-control"},[n("button",{staticClass:"theme",on:{mouseover:function(t){e.showSelecter=!0},mouseout:function(t){e.showSelecter=!1}}},[n("span",{staticClass:"icon icon-theme"}),n("span",[e._v("主题")]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showSelecter,expression:"showSelecter"}],staticClass:"theme-control fadein"},[n("div",{staticClass:"theme-item",on:{click:function(t){return e.selectTheme(0)}}},[n("li",{staticStyle:{"background-color":"#409EFF"}})]),n("div",{staticClass:"theme-item",on:{click:function(t){return e.selectTheme(1)}}},[n("li",{staticStyle:{"background-color":"#67C23A"}})]),n("div",{staticClass:"theme-item",on:{click:function(t){return e.selectTheme(2)}}},[n("li",{staticStyle:{"background-color":"#E6A23C"}})]),n("div",{staticClass:"theme-item",on:{click:function(t){return e.selectTheme(3)}}},[n("li",{staticStyle:{"background-color":"#909399"}})]),n("div",{staticClass:"theme-item",on:{click:function(t){return e.selectTheme(4)}}},[n("li",{staticStyle:{"background-color":"#F56C6C"}})])])]),n("button",{staticClass:"unfold-all-nodes",on:{click:function(t){return e.unfoldAllNodes()}}},[n("span",{staticClass:"icon icon-unfold-all"}),e.unfold?n("span",[e._v("收起所有")]):n("span",[e._v("展开所有")])])])},ue=[],he={data(){return{showSelecter:!1,themes:["primary","success","warning","info","danger"],unfold:!1}},methods:{selectTheme(e){let t=this.themes[e];this.$bus.$emit("selectTheme",t)},unfoldAllNodes(){this.unfold=!this.unfold,this.$bus.$emit("unfoldAllNodes",this.unfold)}}},me=he,pe=(n("856b"),Object(f["a"])(me,de,ue,!1,null,null,null)),fe=pe.exports,ge={components:{fileActionMenu:re,viewControl:fe},data(){return{title:"未命名标题",changeTitle:!1,inputWidth:"150px"}},updated(){let e=this.$refs.fileTitle.offsetWidth;e&&(this.inputWidth=e+"px")},directives:{focus:{inserted:function(e){e.focus()}}}},be=ge,ve=(n("7d17"),Object(f["a"])(be,H,Q,!1,null,"48d2f4ef",null)),we=ve.exports,_e={name:"app",components:{mindMap:z,navBar:we}},ke=_e,Ce=Object(f["a"])(ke,o,a,!1,null,null,null),xe=Ce.exports;const $e=new i.a;i.a.prototype.$bus=$e,i.a.config.productionTip=!1,new i.a({render:e=>e(xe)}).$mount("#app")},7899:function(e,t,n){"use strict";var s=n("c974"),i=n.n(s);i.a},"7d17":function(e,t,n){"use strict";var s=n("db2c"),i=n.n(s);i.a},"856b":function(e,t,n){"use strict";var s=n("5290"),i=n.n(s);i.a},"8bbf":function(e,t){e.exports=Vue},"9ae0":function(e,t,n){"use strict";var s=n("507a"),i=n.n(s);i.a},c974:function(e,t,n){},db2c:function(e,t,n){}});
//# sourceMappingURL=app.02a48060.js.map