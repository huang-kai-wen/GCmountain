webpackJsonp([8],{D6cs:function(t,e){},TSqz:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("mvHQ"),l=a.n(n),o=a("Dd8w"),r=a.n(o),c=a("mtWM"),i=a.n(c),s=a("NYxO"),u={data:function(){return{currentPage1:1,allData:[]}},computed:r()({},Object(s.b)(["getlocalapi"])),methods:{handleCurrentChange:function(t){},handdelectde:function(t,e){var a=this,n={mutationType:"delectoneadmin",token:t};if("aokxf"==e){var o=this.$createElement;this.$message({message:o("p",null,[o("span",null,"aokxf禁止更改他的信息 "),o("i",{style:"color: teal"},"")])})}else i.a.post(this.getlocalapi+"/MTadmin",l()(n)).then(function(t){if("ok"==t.data.code){var e=a.$createElement;a.$message({message:e("p",null,[e("span",null,"删除成功 "),e("i",{style:"color: teal"},"")])}),a.getdata()}}).catch(function(t){console.log(t)})},getdata:function(){var t=this;i.a.post(this.getlocalapi+"/MTadmin",l()({mutationType:"getalladmin"})).then(function(e){t.allData=e.data}).catch(function(t){console.log(t)})}},created:function(){this.getdata()}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"mytable"}},[a("el-pagination",{attrs:{"current-page":t.currentPage1,"page-size":5,layout:"total, prev, pager, next",total:this.allData.length},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage1=e}}}),t._v(" "),a("el-table",{staticStyle:{"text-align":"left"},attrs:{data:t.allData.slice(5*(t.currentPage1-1),5*t.currentPage1),stripe:"",fixed:!0,border:!0}},[a("el-table-column",{attrs:{prop:"picbase64",label:"头像",width:"180"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{staticClass:"head_pic",attrs:{src:t.row.picbase64,width:"40",height:"40"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"administ",label:"姓名",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"jod",label:"职位"}}),t._v(" "),a("el-table-column",{attrs:{prop:"token",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"danger",round:""},on:{click:function(a){t.handdelectde(e.row.token,e.row.administ)}}},[t._v("删除该管理员")])]}}])})],1)],1)},staticRenderFns:[]};var p=a("VU/8")(u,d,!1,function(t){a("D6cs")},"data-v-3cf70f9c",null);e.default=p.exports}});
//# sourceMappingURL=8.9e3c440c5ffb955c57c2.js.map