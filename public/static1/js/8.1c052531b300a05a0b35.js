webpackJsonp([8],{TDiA:function(e,t){},ptbx:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("mvHQ"),o=a.n(n),d=a("Dd8w"),s=a.n(d),l=a("mtWM"),r=a.n(l),c=a("NYxO"),u={data:function(){return{currentPage1:1,allData:[{orderid:"D1524987",date:"2018-05-12 12:34",goodsname:"荔枝",pay:"150",address:"广西钦州永福大街15号",name:"张三",phone:"15607812256",sentflag:"",sendedcode:""},{orderid:"D1524987",date:"2018-05-12 12:34",goodsname:"荔枝",pay:"150",address:"广西钦州永福大街15号",name:"张三",phone:"15607812256",sentflag:"",sendedcode:""},{orderid:"D1524987",date:"2018-05-12 12:34",goodsname:"荔枝",pay:"150",address:"广西钦州永福大街15号",name:"张三",phone:"15607812256",sentflag:"",sendedcode:""},{orderid:"D1524987",date:"2018-05-12 12:34",goodsname:"荔枝",pay:"150",address:"广西钦州永福大街15号",name:"张三",phone:"15607812256",sentflag:"",sendedcode:""},{orderid:"D1524987",date:"2018-05-12 12:34",goodsname:"荔枝",pay:"150",address:"广西钦州永福大街15号",name:"张三",phone:"15607812256",sentflag:"",sendedcode:""},{orderid:"D1524987",date:"2018-05-12 12:34",goodsname:"荔枝",pay:"150",address:"广西钦州永福大街15号",name:"张三",phone:"15607812256",sentflag:"",sendedcode:""},{orderid:"D1524987",date:"2018-05-12 12:34",goodsname:"荔枝",pay:"150",address:"广西钦州永福大街15号",name:"张三",phone:"15607812256",sentflag:"",sendedcode:""},{orderid:"D1524987",date:"2018-05-12 12:34",goodsname:"荔枝",pay:"150",address:"广西钦州永福大街15号",name:"张三",phone:"15607812256",sentflag:"",sendedcode:""},{orderid:"D1524987",date:"2018-05-12 12:34",goodsname:"荔枝",pay:"150",address:"广西钦州永福大街15号",name:"张三",phone:"15607812256",sentflag:"",sendedcode:""}]}},computed:s()({},Object(c.b)(["getlocalapi"])),methods:{handleCurrentChange:function(e){},handremake:function(e){},handdelectde:function(e){var t=this;console.log(e);var a={mutationType:"delectonegoods",goodsid:e};r.a.post(this.getlocalapi+"/goods",o()(a)).then(function(e){if("ok"==e.data.code){t.getdata();var a=t.$createElement;t.$message({message:a("p",null,[a("span",null,"删除成功 "),a("i",{style:"color: teal"},"")])})}}).catch(function(e){console.log(e)})},handsentdata:function(e){console.log(e.sentflag),console.log(e.sendedcode)},senddata:function(){var e=this;Date.prototype.pattern=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours()%12==0?12:this.getHours()%12,"H+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var a in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),/(E+)/.test(e)&&(e=e.replace(RegExp.$1,(RegExp.$1.length>1?RegExp.$1.length>2?"/u661f/u671f":"/u5468":"")+{0:"/u65e5",1:"/u4e00",2:"/u4e8c",3:"/u4e09",4:"/u56db",5:"/u4e94",6:"/u516d"}[this.getDay()+""])),t)new RegExp("("+a+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?t[a]:("00"+t[a]).substr((""+t[a]).length)));return e};r.a.post(this.getlocalapi+"/goods",o()({mutationType:"getallgoods"})).then(function(t){for(var a=[],n=0;n<t.data.length;n++){var o=t.data[n].googsloadtime;o=new Date(o).pattern("yyyy-MM-dd hh:mm:ss"),t.data[n].googsloadtime=o,a.push(t.data[n])}e.allData=a}).catch(function(e){console.log(e)})}},created:function(){}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"mytable"}},[a("el-pagination",{attrs:{fit:"false",size:"mini","current-page":e.currentPage1,"page-size":5,layout:"total, prev, pager, next",total:this.allData.length},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage1=t}}}),e._v(" "),a("el-table",{staticStyle:{"text-align":"left"},attrs:{data:e.allData.slice(5*(e.currentPage1-1),5*e.currentPage1),stripe:"",border:!0,height:"550"}},[a("el-table-column",{attrs:{prop:"orderid",label:"订单号",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("h5",[e._v(e._s(t.row.orderid))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"date",label:"下单日期",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("h5",[e._v(e._s(t.row.date))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"goodsname",label:"所订购产品",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("h5",[e._v(e._s(t.row.goodsname))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"pay",label:"成交金额",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("h5",[e._v(e._s(t.row.pay))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"收货地址",width:"230"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("h5",[e._v(e._s(t.row.address))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"收件人姓名",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("h5",[e._v(e._s(t.row.name))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"phone",label:"收货人手机号",width:"115"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("h5",[e._v(e._s(t.row.phone))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"sentflag",label:"是否发货",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-checkbox",{model:{value:t.row.sentflag,callback:function(a){e.$set(t.row,"sentflag",a)},expression:"scope.row.sentflag"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"sendedcode",label:"关联快递运单号",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{model:{value:t.row.sendedcode,callback:function(a){e.$set(t.row,"sendedcode",a)},expression:"scope.row.sendedcode"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"token",label:"操作",width:"145"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"big"},on:{click:function(a){e.handsentdata(t.row)}}},[e._v("确认")])]}}])})],1)],1)},staticRenderFns:[]};var p=a("VU/8")(u,i,!1,function(e){a("TDiA")},"data-v-215e76ba",null);t.default=p.exports}});
//# sourceMappingURL=8.1c052531b300a05a0b35.js.map