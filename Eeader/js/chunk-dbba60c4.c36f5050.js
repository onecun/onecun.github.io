(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dbba60c4"],{"33e4":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"popup-setting-wrap"},[i("h4",{staticClass:"popup-setting-title"},[i("span",[t._v("设置")]),i("span",{staticClass:"popup-setting-cancel",on:{click:function(e){return t.hide()}}},[t._v("+")])]),i("div",{staticClass:"setting-list-group"},[i("ul",[i("li",{staticClass:"theme-list"},[i("header",[t._v("阅读主题")]),t._l(t.themeList,function(e,s){return i("span",{key:s,staticClass:"theme-item",class:{"popup-setting-selected":s==t.themeSelected},style:e.style,attrs:{title:e.title},on:{click:function(i){return t.switchTheme(e.num,s)}}})})],2),i("li",{staticClass:"font-family"},[i("header",[t._v("正文字体")]),t._l(t.fontFamilyList,function(e,s){return i("span",{key:s,staticClass:"font-family-item",class:{"popup-setting-selected":s==t.fontFamilySelected},on:{click:function(i){return t.switchFontFamily(e,s)}}},[t._v(t._s(e))])})],2),i("li",{staticClass:"font-size"},[i("header",[t._v("字体大小")]),i("span",{staticClass:"font-size-item font-size-decrease",on:{click:function(e){return t.decreaseSize()}}},[t._v("A-")]),i("span",{staticClass:"font-size-item font-size-now"},[t._v(t._s(t.curFontSize))]),i("span",{staticClass:"font-size-item font-size-crease",on:{click:function(e){return t.creaseSize()}}},[t._v("A+")])])])])])},n=[],c={props:["curFontSize"],data(){return{themeList:[{title:"默认",num:"1",style:"background: #f6f1e7 !important;"},{title:"牛皮纸",num:"2",style:"background: #f3e9c7 !important;"},{title:"灰色",num:"3",style:"background: #dcdcdc !important;"},{title:"黑色",num:"4",style:"background: #161819 !important; border: 1px solid #ccc;"}],fontFamilyList:["雅黑","宋体","楷体"],themeSelected:0,fontFamilySelected:0}},computed:{selected(){}},methods:{hide(){this.$emit("hide-popup")},switchTheme(t,e){this.$emit("switch-theme",t),this.themeSelected=e},switchFontFamily(t,e){this.$emit("switch-fontfamily",t),this.fontFamilySelected=e},decreaseSize(){this.$emit("set-font-size",this.curFontSize-2)},creaseSize(){this.$emit("set-font-size",this.curFontSize+2)}}},a=c,l=(i("ab37"),i("2877")),o=Object(l["a"])(a,s,n,!1,null,null,null);e["default"]=o.exports},5400:function(t,e,i){},ab37:function(t,e,i){"use strict";var s=i("5400"),n=i.n(s);n.a}}]);
//# sourceMappingURL=chunk-dbba60c4.c36f5050.js.map