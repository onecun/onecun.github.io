(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-002e499f"],{"037b":function(e,t,n){"use strict";var r=n("72b5"),s=n.n(r);s.a},"05d7":function(e,t,n){"use strict";var r=n("63b8"),s=n.n(r);s.a},1009:function(e,t,n){},"63b8":function(e,t,n){},"6f1c":function(e,t,n){"use strict";var r=n("a2f2"),s=n.n(r);s.a},"72b5":function(e,t,n){},"968f":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"reader",class:e.curTheme},[n("SidebarReader"),n("ReaderWrap",{class:e.curFontFamily}),n("ReaderSetBar",{on:{popup:function(t){e.showPopup=!e.showPopup}}}),e.showPopup?n("div",[n("SettingPopup",{attrs:{curFontSize:e.curFontSize},on:{"hide-popup":function(t){e.showPopup=!1},"switch-theme":function(t){return e.switchTheme(t)},"switch-fontfamily":function(t){return e.switchFontFamily(t)},"set-font-size":function(t){return e.setFontSize(t)}}})],1):e._e()],1)},s=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("aside",{staticClass:"sidebar"},[n("header",{staticClass:"sidebar-item-title",on:{click:function(t){return t.target!==t.currentTarget?null:e.show(1)}}},[e._v("目录")]),n("div",{directives:[{name:"show",rawName:"v-show",value:1===e.isShow,expression:"isShow === 1"}],staticClass:"catalog"},e._l(e.secList,function(t,r){return n("div",{key:r,staticClass:"sidebar-item-book"},[n("div",{staticClass:"sidebar-sec-name sidebar-collapse-item",on:{click:function(n){return e.jumpTo(t.sectionUrl)}}},[e._v(e._s(t.secName))])])}),0)])},o=[],a=n("d4bd"),c={mixins:[a["a"]],data(){return{currSection:0}},computed:{secList(){return this.$store.state.secList}},methods:{jumpTo(e){this.$store.commit("changeurl",e)}}},u=c,l=(n("6f1c"),n("2877")),h=Object(l["a"])(u,i,o,!1,null,null,null),d=h.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"reader-wrap"},[n("div",{staticClass:"reader-item-content",domProps:{innerHTML:e._s(e.content)}}),n("paging",{on:{"page-turing":function(t){return e.pageTurning(t)}}})],1)},p=[],f=(n("a481"),n("5a72")),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"paging-wrap"},[n("div",{staticClass:"pre-page",on:{click:function(t){return e.prePage()}}},[e._v("上一页")]),n("div",{staticClass:"next-page",on:{click:function(t){return e.nextPage()}}},[e._v("下一页")])])},b=[],v={methods:{getBookData(){let e=this.$route.params.bookname,t=this.$route.query.section;return[e,t]},prePage(){let e=this.getBookData();Object(f["b"])(e[0]).then(()=>{return f["a"].read(e[0],e[1]-1)}).then(e=>{this.$emit("page-turing",e)})},nextPage(){let e=this.getBookData();Object(f["b"])(e[0]).then(()=>{return f["a"].read(e[0],e[1]+1)}).then(e=>{this.$emit("page-turing",e)}).catch(e=>{})}}},k=v,w=(n("05d7"),Object(l["a"])(k,g,b,!1,null,null,null)),F=w.exports,S={components:{paging:F},data(){return{currBook:"",content:"",domparser:""}},computed:{currUrl(){return this.$store.state.readerCurrContentUrl}},methods:{removeLink(e){""===this.domparser&&(this.domparser=new DOMParser);let t=this.domparser.parseFromString(e,"text/html"),n=t.querySelectorAll("a");for(let r=0;r<n.length;r++){const e=n[r];e.setAttribute("href","#")}return`${t.querySelector("body").innerHTML}`},changeAddress(e){let t=this.$route.params.bookname;this.$router.replace({name:"reader",params:{bookname:t},query:{section:e}})},pageTurning(e){this.content=this.removeLink(e.content),this.changeAddress(e.section)}},watch:{currUrl:function(e){Object(f["b"])(this.currBook).then(()=>{return f["a"].indexRead(this.currBook,e)}).then(e=>{this.content=this.removeLink(e.content),this.changeAddress(e.section)})}},mounted(){this.currBook=this.$route.params.bookname,Object(f["b"])(this.currBook).then(()=>{let e=0;return f["a"].read(this.currBook,e)}).then(e=>{e.map(e=>{this.$store.commit("addsec",e)});let t=1;return f["a"].read(this.currBook,t)}).then(e=>{this.content=this.removeLink(e.content)}),this.changeAddress(1)}},y=S,_=(n("e03b"),Object(l["a"])(y,m,p,!1,null,null,null)),$=_.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"reader-set",staticStyle:{background:"rgba(0,0,0,0) !important"}},[n("div",{staticClass:"setting-wrap",on:{click:function(t){return e.$emit("popup")}}},[e._v("设置")]),n("div",{staticClass:"go-top",on:{click:function(t){return e.goTop()}}},[e._v("回到顶部")])])},C=[],x={methods:{goTop(){let e=document.querySelector(".reader-wrap").offsetHeight,t=-e/100;const n=function e(){window.scrollBy(0,t),0!==document.documentElement.scrollTop&&requestAnimationFrame(e)};requestAnimationFrame(n)}}},B=x,P=(n("9dec"),Object(l["a"])(B,T,C,!1,null,null,null)),j=P.exports,O={data(){return{showPopup:!1,selectTheme:0,selectFontFamily:"",curFontSize:18}},computed:{curTheme(){let e={1:{"theme-1":!0},2:{"theme-2":!0},3:{"theme-3":!0},4:{"theme-4":!0}};return e[this.selectTheme]},curFontFamily(){let e={"雅黑":{yahei:!0},"宋体":{song:!0},"楷体":{kai:!0}};return e[this.selectFontFamily]}},components:{SidebarReader:d,ReaderWrap:$,ReaderSetBar:j,SettingPopup:()=>n.e("chunk-dbba60c4").then(n.bind(null,"33e4"))},methods:{switchTheme(e){this.selectTheme=e},switchFontFamily(e){this.selectFontFamily=e},setFontSize(e){e>48||e<12||(this.curFontSize=e,document.querySelector(".reader-item-content").style.fontSize=`${e}px`)}}},L=O,q=(n("037b"),Object(l["a"])(L,r,s,!1,null,null,null));t["default"]=q.exports},"9dec":function(e,t,n){"use strict";var r=n("ea0f"),s=n.n(r);s.a},a2f2:function(e,t,n){},e03b:function(e,t,n){"use strict";var r=n("1009"),s=n.n(r);s.a},ea0f:function(e,t,n){}}]);
//# sourceMappingURL=chunk-002e499f.d4cf48be.js.map