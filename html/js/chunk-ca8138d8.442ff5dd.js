(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ca8138d8"],{"2d0c":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("CommentComponent",{attrs:{platform:t.playNow.platform||"163","comment-type":0,id:t.playNow.id,comments:t.comments}}),n("SendComment",{attrs:{type:0,platform:t.playNow.platform||"163","success-cb":t.initComments}})],1)},c=[],i=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),s=n("2f62"),r=n("ceb6"),a=n("3f0b"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:"write-comment-container "+(t.commentInfo.open&&"open")},[n("div",{staticClass:"comment-main"},[t.commentInfo.commentId?t._e():n("div",{staticClass:"ft_14 pl_5",staticStyle:{color:"#fff9","line-height":"20px"}},[t._v(" 为 "),n("span",{staticClass:"comment-title"},[t._v(t._s(t.commentInfo.title))]),t._v(" 献上评论")]),t.commentInfo.commentId?n("div",{staticClass:"ft_14 pl_5",staticStyle:{color:"#fff9","line-height":"20px"}},[t._v(" 回复 @"),n("span",{staticClass:"comment-title"},[t._v(t._s(t.commentInfo.nick))])]):t._e(),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.commentInfo.val,expression:"commentInfo.val"}],staticClass:"comment-input",attrs:{rows:2,placeholder:"说些啥呢"},domProps:{value:t.commentInfo.val},on:{input:function(e){e.target.composing||t.$set(t.commentInfo,"val",e.target.value)}}})]),n("i",{staticClass:"iconfont icon-cancel pointer",on:{click:t.closeComment}}),n("div",{staticClass:"plane-icon",on:{click:t.clickPlane}},[n("i",{staticClass:"iconfont icon-plane pointer"})])])},l=[];n("7f7f"),n("c5f6");function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var f={name:"SendComment",props:{successCb:Function,type:Number,platform:String},data:function(){return{loading:!1}},computed:u({},Object(s["b"])({commentInfo:"getCommentInfo",playNow:"getPlaying"})),methods:{clickPlane:function(){var t=this,e=this.commentInfo,n=this.platform,o=this.type,c=o,i=0,s=e.title;if(e.open){if(!e.val)return this.$message.warning("无话可说？");if(e.val.length>300)return this.$message.warning("话有点多？");if(this.loading)return;if(this.loading=!0,"qq"===e.platform)return Object(r["c"])({api:"QQ_COMMENT_SEND",method:"post",data:{id:e.id,content:e.val,biztype:e.type}}).then((function(){t.loading=!1,t.successCb()}),(function(){return t.$message.error("评论失败了")}));Object(r["c"])({api:"COMMENT",data:{t:e.commentId?2:1,type:o,id:e.id,content:e.val,commentId:e.commentId},cache:!0}).then((function(){t.loading=!1,t.successCb()}),(function(){return t.$message.error("评论失败了")}))}else{switch("".concat(n,"-").concat(o)){case"163-0":i=this.playNow.id,s=this.playNow.name;break;case"qq-0":i=this.playNow.songid,s=this.playNow.name,c=1;break}this.$store.dispatch("updateCommentInfo",{type:c,id:i,title:s,open:!0,platform:n,success:!1})}},closeComment:function(){this.$store.dispatch("updateCommentInfo",{open:!1})}}},d=f,h=(n("9be4"),n("2877")),b=Object(h["a"])(d,m,l,!1,null,"fe07b3e8",null),g=b.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:"comments-page-container "+(t.show&&"show"),on:{scroll:t.onScroll}},t._l(t.type,(function(e){return t.comments&&t.comments[e].length>0?n("div",{key:"list-"+e,staticClass:"comment-type-block"},[n("div",{staticClass:"comment-type-title"},[t._v(t._s(e.toUpperCase()))]),n("div",{staticClass:"comments-list"},t._l(t.comments[e],(function(o){return n("div",{key:o.id,staticClass:"comment-item"},[n("img",{staticClass:"user-avatar",attrs:{src:o.user.avatarUrl+"?param=50y50"}}),n("div",{staticClass:"comment-content"},[n("div",{staticClass:"user-name-block"},[n("a",{attrs:{href:"#/user?id="+o.user.userId}},[n("b",{staticClass:"user-name"},[t._v(t._s(o.user.nickname))])]),n("span",{staticClass:"pl_20 comment-time"},[t._v(t._s(t.getTime(o.time)))])]),n("div",{staticClass:"content",domProps:{innerHTML:t._s(o.content)}}),o.beReplied&&o.beReplied[0]?n("blockquote",{staticClass:"be-replied"},[n("a",{staticClass:"user-name",attrs:{href:"#/user?id="+o.user.userId}},[t._v("@"+t._s(o.beReplied[0].user.nickname))]),t._v("\n            ："),n("span",{domProps:{innerHTML:t._s(o.beReplied[0].content)}})]):t._e(),n("div",{staticClass:"mt_10"},[n("i",{class:"iconfont pointer "+o.newLike+" icon-zan"+(o.liked?"":"-o"),on:{click:function(n){return t.likeComment(o,e)}}}),n("span",{staticClass:"pl_10 ft_12"},[t._v(t._s(t.numberHandle(o.likedCount)))]),"163"===t.platform?n("i",{staticClass:"iconfont icon-reply ml_20 pointer",staticStyle:{"vertical-align":"-1px"},on:{click:function(e){return t.reply(o)}}}):t._e(),o.canDelete||"163"===t.platform&&o.user.userId===t.user.userId?n("i",{staticClass:"iconfont icon-delete ml_20 pointer",on:{click:function(e){return t.delComment(o.commentId)}}}):t._e()])])])})),0)]):t._e()})),0)},O=[],v=(n("7514"),n("75fc")),C=(n("96cf"),n("3b8d")),w=n("0828"),j=n("1157"),_=n.n(j),k=n("aa67");function I(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?I(Object(n),!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var N={name:"Comment",props:{commentType:Number,id:Number|String,comments:Object,platform:String},data:function(){return{loading:!1,show:!1,type:["hot","latest"]}},computed:P({},Object(s["b"])({playNow:"getPlaying",user:"getUser",playingPercent:"getPlayingPercent",commentInfo:"getCommentInfo"})),watch:{commentInfo:{handler:function(t){t.success&&this.getComments(!0)},deep:!0}},created:function(){var t=this;setTimeout((function(){return t.show=!0}))},methods:{delComment:function(){var t=Object(C["a"])(regeneratorRuntime.mark((function t(e){var n,o,c,i,s,a,m,l=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=this.id,o=this.commentType,c=this.playNow,i=[c][o].comments,t.prev=2,t.next=5,this.$confirm("确认删除？");case 5:if(s=t.sent,"confirm"===s){t.next=8;break}return t.abrupt("return");case 8:if(a=function(){i.hot=i.hot.filter((function(t){return t.commentId!==e})),i.latest=i.latest.filter((function(t){return t.commentId!==e})),i.total-=1,l.$store.dispatch(["updateSongDetail"][o],{id:n,comments:i}),l.$message.success("删除成功")},"qq"!==this.platform){t.next=11;break}return t.abrupt("return",Object(r["c"])({api:"QQ_COMMENT_DELETE",data:{id:e}}).then(a,(function(){return l.$message.error("删除失败")})));case 11:return t.next=13,Object(r["c"])({api:"COMMENT",data:{t:0,type:o,id:n,commentId:e},cache:!0});case 13:m=t.sent,200===m.code?a():this.$message.error("删除失败"),t.next=20;break;case 17:t.prev=17,t.t0=t["catch"](2),console.log(t.t0);case 20:case"end":return t.stop()}}),t,this,[[2,17]])})));function e(e){return t.apply(this,arguments)}return e}(),reply:function(){var t=Object(C["a"])(regeneratorRuntime.mark((function t(e){var n,o,c,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.commentId,o=e.user,c=this.id,i=this.platform,this.$store.dispatch("updateCommentInfo",{type:0,id:c,commentId:n,open:!0,nick:o.nickname,beReplied:e,platform:i});case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),getComments:function(t){var e=this,n=this.playNow,o=this.commentType,c=[n][o],i=c.comments,s=c.id;if(!i)return!1;var a=i.offset,m=i.total;t&&(a=0);var l=20;a+l>m||this.loading||(this.loading=!0,t&&(i.latest=[]),"qq"===this.platform?Object(r["c"])({api:"QQ_GET_COMMENT",data:{id:n.songid,pageNo:a/20+1}}).then((function(t){i.offset+=l,i.total=t.data.comment.commenttotal,i.latest=[].concat(Object(v["a"])(i.latest),Object(v["a"])(Object(r["k"])(t.data.comment.commentlist))),e.$store.dispatch(["updateSongDetail"][o],{id:s,comments:i}),e.loading=!1})):Object(r["c"])({api:["MUSIC_COMMENTS"][o],data:{offset:a,limit:20,total:m,id:s}}).then((function(t){i.offset+=l,i.total=t.total,i.latest=[].concat(Object(v["a"])(i.latest),Object(v["a"])(t.comments)),e.loading=!1,e.$store.dispatch(["updateSongDetail"][o],{id:s,comments:i})})))},onScroll:function(){var t=this.comments,e=this.loading;if(t){var n=t.offset,o=t.total,c=_()(".comments-page-container"),i=c.height(),s=c.get(0).scrollHeight,r=c.scrollTop();s-i-r<300&&n<o&&!e&&this.getComments()}},getTime:function(t){return Object(a["a"])(t).str("YY-MM-DD HH:mm:ss")},numberHandle:w["d"],likeComment:function(t,e){var n=this,o=this.playNow,c=this.commentType,i=Number(!t.liked),s=function(){var s=[o][c].comments[e].find((function(e){return e.commentId===t.commentId}));s.likedCount+=2*i-1,s.liked=!t.liked,s.newLike=t.liked?"new-like":"",n.$store.dispatch(["updateSongDetail"][c],o)};if("qq"===this.platform)return"1"!==k["a"].get("haveQCookie")?this.$message.warning("请先前往设置页设置 Cookie"):Object(r["c"])({api:"QQ_COMMENT_LIKE",data:{id:t.commentId,type:-1*i+2}}).then(s);Object(r["c"])({api:"LIKE_COMMENT",data:{t:i,type:c,cid:t.commentId,id:this.id}}).then((function(t){t&&s()}))}}},E=N,S=(n("3edc"),Object(h["a"])(E,y,O,!1,null,"70cb985a",null)),$=S.exports;function D(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?D(Object(n),!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var T={name:"Comment",components:{SendComment:g,CommentComponent:$},data:function(){return{comments:null,loading:!1,type:["hot","latest"],show:!1}},computed:M({},Object(s["b"])({playNow:"getPlaying",user:"getUser"})),watch:{playNow:function(t){var e=t.comments;this.comments=e}},created:function(){this.comments=this.playNow.comments,this.$store.dispatch("updateCommentInfo",{type:0,id:0,val:"",title:"",open:!1})},methods:{initComments:function(){this.$message.success("发送成功~"),this.$store.dispatch("updateCommentInfo",{type:0,id:0,val:"",title:"",open:!1,success:!0})}}},x=T,q=Object(h["a"])(x,o,c,!1,null,"24fbdada",null);e["default"]=q.exports},"3edc":function(t,e,n){"use strict";var o=n("8844"),c=n.n(o);c.a},8844:function(t,e,n){},"9be4":function(t,e,n){"use strict";var o=n("c2b5"),c=n.n(o);c.a},c2b5:function(t,e,n){}}]);
//# sourceMappingURL=chunk-ca8138d8.442ff5dd.js.map