webpackJsonp([0],{QnNH:function(t,e,a){t.exports=a.p+"static/img/bgimg.66791b4.png"},leWn:function(t,e){},zD52:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={name:"Sharepage",data:function(){return{note:{backgroundImage:"url("+a("QnNH")+")",backgroundRepeat:"no-repeat",backgroundSize:"100% 100%"},inputWidth:{width:window.screen.width-76+"px"},params:{phone:"",password:"",userId:""},userfrom:""}},methods:{isSystm:function(){var t=navigator.userAgent;navigator.appVersion;return{ios:!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:t.indexOf("Android")>-1||t.indexOf("Linux")>-1}},getuserInfo:function(t){var e=this;this.$api.getInfor(t).then(function(t){e.userfrom=t.user})},downkyt:function(){this.isSystm().ios&&(window.location.href="itms-apps://itunes.apple.com/app/id1441515723"),this.isSystm().android&&(window.location.href="https://sj.qq.com/myapp/detail.htm?apkName=com.xsr.kyt")},startOpen:function(){var t=this;/^[1][3,4,5,7,8][0-9]{9}$/.test(this.params.phone)?this.params.password.length<6?this.$toast("请输入正确密码"):this.$api.shareRegister(this.params).then(function(e){setTimeout(function(e){t.downkyt()},1e3)}):this.$toast("请输入正确的手机号")}},mounted:function(){for(var t=[],e=this.$geturl.getL(),a=0;a<e.length;a++)t.push(e[a].split("=")[1]);this.params.userId=t[0],this.getuserInfo(this.params.userId)}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagesbg",style:t.note},[a("header",{staticClass:"mod"},[a("img",{staticStyle:{height:"24px",width:"24px",float:"left"},attrs:{src:t.userfrom.headImage,alt:""}}),t._v(" "),a("span",[t._v(t._s(t.userfrom.nickName)+"邀你开启跨业之旅")])]),t._v(" "),a("footer",{staticClass:"mod1"},[a("div",{staticStyle:{height:"auto",position:"fixed",bottom:"0px"},style:t.inputWidth},[a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.params.phone,expression:"params.phone"}],attrs:{type:"text",placeholder:"请输入手机号码"},domProps:{value:t.params.phone},on:{input:function(e){e.target.composing||t.$set(t.params,"phone",e.target.value)}}})]),t._v(" "),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.params.password,expression:"params.password"}],attrs:{type:"text",placeholder:"请输入密码"},domProps:{value:t.params.password},on:{input:function(e){e.target.composing||t.$set(t.params,"password",e.target.value)}}})]),t._v(" "),a("div",{staticStyle:{"margin-bottom":"0"}},[a("button",{staticStyle:{float:"left"},attrs:{type:"button"},on:{click:function(e){t.downkyt()}}},[t._v("直接下载")]),t._v(" "),a("button",{staticStyle:{float:"right"},attrs:{type:"button"},on:{click:function(e){t.startOpen()}}},[t._v("立即注册")])])])])])},staticRenderFns:[]};var i=a("VU/8")(s,n,!1,function(t){a("leWn")},"data-v-78f170d8",null);e.default=i.exports}});
//# sourceMappingURL=0.9641a9a56f98ec3e919d.js.map