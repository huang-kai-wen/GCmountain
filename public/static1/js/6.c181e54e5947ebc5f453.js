webpackJsonp([6],{"6La1":function(e,t){},tFhn:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("mvHQ"),r=a.n(o),s=a("Dd8w"),l=a.n(s),i=a("mtWM"),n=a.n(i),c=a("NYxO"),m={data:function(){return{form:{mutationType:"addgoods",price:"",count:"",pic1base64:"",pic2base64:"",pic3base64:"",name:"",phone:"",type1:"",date1:"",hot:!1,isnew:!0,desc:""}}},computed:l()({},Object(c.b)(["getlocalapi"])),methods:{onSubmit:function(){var e=this;if(Date.prototype.pattern=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours()%12==0?12:this.getHours()%12,"H+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var a in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),/(E+)/.test(e)&&(e=e.replace(RegExp.$1,(RegExp.$1.length>1?RegExp.$1.length>2?"/u661f/u671f":"/u5468":"")+{0:"/u65e5",1:"/u4e00",2:"/u4e8c",3:"/u4e09",4:"/u56db",5:"/u4e94",6:"/u516d"}[this.getDay()+""])),t)new RegExp("("+a+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?t[a]:("00"+t[a]).substr((""+t[a]).length)));return e},this.form.date1=(new Date).pattern("yyyy-MM-dd hh:mm:ss"),console.log(this.form.date1),""!==this.form.price&&""!==this.form.count&&""!==this.form.pic1base64&&""!==this.form.pic2base64&&""!==this.form.pic3base64&&""!==this.form.name&&""!==this.form.type1&&""!==this.form.date1&&""!==this.form.desc)n.a.post(this.getlocalapi+"/goods",r()(this.form)).then(function(t){if("ok"==t.data.code){var a=e.$createElement;e.$message({message:a("p",null,[a("span",null,"加入成功 "),a("i",{style:"color: teal"},"")])}),e.form.price="",e.form.count="",e.form.pic1base64="",e.form.pic2base64="",e.form.pic3base64="",e.form.name="",e.form.type1="",e.form.date1="",e.form.hot=!1,e.form.isnew=!0,e.form.desc=""}}).catch(function(e){console.log(e)});else{var t=this.$createElement;this.$message({message:t("p",null,[t("span",null,"数据未填写完整 "),t("i",{style:"color: teal"},"")])})}},getpic1base64:function(){var e=this,t=new FileReader,a=this.$refs.input1.files[0];a&&(t.readAsDataURL(a),t.onload=function(a){21e5<t.result.length?alert("上传失败，请上传不大于2M的图片！"):e.form.pic1base64=t.result})},getpic2base64:function(){var e=this,t=new FileReader,a=this.$refs.input2.files[0];a&&(t.readAsDataURL(a),t.onload=function(a){21e5<t.result.length?alert("上传失败，请上传不大于2M的图片！"):e.form.pic2base64=t.result})},getpic3base64:function(){var e=this,t=new FileReader,a=this.$refs.input3.files[0];a&&(t.readAsDataURL(a),t.onload=function(a){21e5<t.result.length?alert("上传失败，请上传不大于2M的图片！"):e.form.pic3base64=t.result})}}},f={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"myupbox"}},[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"商品名称"}},[a("el-input",{model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品名称"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品价格"}},[a("el-input",{attrs:{id:"myinput",placeholder:"单位￥/元："},model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",t)},expression:"form.price"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品数量"}},[a("el-input",{attrs:{id:"myinput",placeholder:"请填入整数，不要填一个/一条/一只等等"},model:{value:e.form.count,callback:function(t){e.$set(e.form,"count",t)},expression:"form.count"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品类型"}},[a("el-select",{attrs:{placeholder:"商品类型"},model:{value:e.form.type1,callback:function(t){e.$set(e.form,"type1",t)},expression:"form.type1"}},[a("el-option",{attrs:{label:"水果",value:"fruit"}}),e._v(" "),a("el-option",{attrs:{label:"蔬菜",value:"vegetables"}}),e._v(" "),a("el-option",{attrs:{label:"鱼",value:"fish"}}),e._v(" "),a("el-option",{attrs:{label:"肉",value:"meat"}}),e._v(" "),a("el-option",{attrs:{label:"蜂蜜",value:"bee"}}),e._v(" "),a("el-option",{attrs:{label:"菜干",value:"pickles"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"特别标志"}},[a("el-checkbox",{model:{value:e.form.hot,callback:function(t){e.$set(e.form,"hot",t)},expression:"form.hot"}},[e._v("设为热卖产品")]),e._v(" "),a("el-checkbox",{model:{value:e.form.isnew,callback:function(t){e.$set(e.form,"isnew",t)},expression:"form.isnew"}},[e._v("设为上市新品")])],1),e._v(" "),a("el-form-item",{attrs:{label:"商品简要说明"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品第一张图片"}},[a("input",{ref:"input1",attrs:{type:"file"},on:{change:e.getpic1base64}}),e._v(" "),a("img",{attrs:{src:e.form.pic1base64,alt:""}})]),e._v(" "),a("el-form-item",{attrs:{label:"商品第二张图片"}},[a("input",{ref:"input2",attrs:{type:"file"},on:{change:e.getpic2base64}}),e._v(" "),a("img",{attrs:{src:e.form.pic2base64,alt:""}})]),e._v(" "),a("el-form-item",{attrs:{label:"商品第三章图片"}},[a("input",{ref:"input3",attrs:{type:"file"},on:{change:e.getpic3base64}}),e._v(" "),a("img",{attrs:{src:e.form.pic3base64,alt:""}})]),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("立即创建")]),e._v(" "),a("el-button",[e._v("取消")])],1)],1)],1)},staticRenderFns:[]};var p=a("VU/8")(m,f,!1,function(e){a("6La1")},"data-v-79c9e389",null);t.default=p.exports}});
//# sourceMappingURL=6.c181e54e5947ebc5f453.js.map