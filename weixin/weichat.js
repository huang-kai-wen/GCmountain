  'use strict' //设置为严格模式
var request = require('request');
const crypto = require('crypto'), //引入加密模块
       https = require('https'), //引入 htts 模块
         util = require('util'), //引入 util 工具包
           fs = require('fs'), //引入 fs 模块
       urltil = require('url'),//引入 url 模块
 accessTokenJson = require('./access_token'), //引入本地存储的 access_token
       menus  = require('./menus'), //引入微信菜单配置
  parseString = require('xml2js').parseString,//引入xml2js包
         msg = require('./msg');//引入消息处理模块
// CryptoGraphy = require('./cryptoGraphy'); //微信消息加解密模块
var mediaid="sss";

var api = {

  menu:{
    create:"https://api.weixin.qq.com/cgi-bin"+'/menu/create?', //access_token=ACCESS_TOKEN 创建菜单
    get:"https://api.weixin.qq.com/cgi-bin"+'/menu/get?', //access_token=ACCESS_TOKE 获取菜单,GET请求
    delete:"https://api.weixin.qq.com/cgi-bin"+'/menu/delete?', //access_token=ACCESS_TOKEN 删除菜单,GET请求
    getInfo:"https://api.weixin.qq.com/cgi-bin"+'get_current_selfmenu_info?', //access_token=ACCESS_TOKEN 获取自定义菜单配置接口
 upload:"https://api.weixin.qq.com/cgi-bin"+'/media/upload?' //access_token=ACCESS_上传素材配置接口
 }
}

var WeChat = function(config){
     //设置 WeChat 对象属性 config
    this.config = config;
     //设置 WeChat 对象属性 token
     this.token = config.token;
     //设置 WeChat 对象属性 appID
     this.appID = config.appID;
     //设置 WeChat 对象属性 appScrect
     this.appScrect = config.appScrect;
     //设置 WeChat 对象属性 apiDomain
     this.apiDomain = config.apiDomain;
     //设置 WeChat 对象属性 apiURL
     this.apiURL = config.apiURL;


    /**
    * 用于处理 https Get请求方法
     * @param {String} url 请求地址
      */
     this.requestGet = function(url){
        return new Promise(function(resolve,reject){
            https.get(url,function(res){
  var buffer = [],result = "";
                //监听 data 事件
                res.on('data',function(data){
                    buffer.push(data);
                });
               //监听 数据传输完成事件
                res.on('end',function(){
                  result = Buffer.concat(buffer).toString('utf-8');
                  //将最后结果返回
                 resolve(result);
                });
             }).on('error',function(err){
              reject(err);
          })
      })
   }
 this.requestPost = function(url,data){
  return new Promise(function(resolve,reject){
    //解析 url 地址
     var urlData = urltil.parse(url);
            //设置 https.request  options 传入的参数对象
             var options={
                //目标主机地址
               hostname: urlData.hostname,
                //目标地址
               path: urlData.path,
                //请求方法
                method: 'POST',
                //头部协议
                headers: {
                     'Content-Type': 'application/x-www-form-urlencoded',
                    'Content-Length': Buffer.byteLength(data,'utf-8')
                }
           }
           var req = https.request(options,function(res){
                var buffer = [],result = '';
                //用于监听 data 事件 接收数据
                res.on('data',function(data){
                 buffer.push(data);

              });
                 //用于监听 end 事件 完成数据的接收
  res.on('data',function(data){
                 buffer.push(data);

              });
                 //用于监听 end 事件 完成数据的接收
               res.on('end',function(){
                    result = Buffer.concat(buffer).toString('utf-8');
                    resolve(result);
                                  })
            })
            .on('error',function(err){
               console.log(err);
                reject(err);
            })
             //传入数据
            req.write(data);
            req.end();
         })
     }
 }
WeChat.prototype.sign = function(req,res){
     var that=this
  return new Promise(function(resolve,reject){
       var signature = req.query.signature,//微信加密签名
       timestamp = req.query.timestamp,//时间戳
        nonce = req.query.nonce,//随机数
        echostr = req.query.echostr;//随机字符串
       //2.将token、timestamp、nonce三个参数进行字典序排序
        var array = [that.token ,timestamp,nonce];

         array.sort();
        //3.将三个参数字符串拼接成一个字符串进行sha1加密
        var tempStr = array.join('');
         const hashCode = crypto.createHash('sha1'); //创建加密类型
       var resultCode = hashCode.update(tempStr,'utf8').digest('hex');
       //对传入的字符串进行加密
        //4.开发者获得加密后的字符串可与signature对比，标识该请求来源于微信
        if(resultCode === signature){
             res.send(echostr);
            console.log(resultcode)
        }else{
             res.send('mismatch');
       }

  })

}
 WeChat.prototype.accesstaken = function(){
     var that = this;

  console.log("now we get accesstaken")
   return new Promise(function(resolve,reject){
   var currentTime=new Date().getTime();
    console.log(that.appID)
   var url=util.format(that.apiURL.accessTokenApi,that.apiDomain,that.appID,that.appScrect);

    if(typeof(accessTokenJson.access_token)==undefined||accessTokenJson.access_token===""||accessTokenJson.express_time<currentTime){
     that.requestGet(url).then(function(data){
    console.log("post"+data)
      var result=JSON.parse(data)
      if (data.indexOf("errcode")<0) {

        accessTokenJson.access_token=result.access_token;
        accessTokenJson.express_time= new Date().getTime() + (parseInt(result.expires_in) - 200) * 1000;
        var jsonaccess=JSON.stringify(accessTokenJson);
        fs.writeFile("./weixin/access_token.json",jsonaccess, function(err) {
    if (err) {
        throw err;
}});
        console.log("acess")
        resolve(accessTokenJson.access_token)
   }else{
            console.log("resul")
            resolve(result)
     };
     })
    }else{
            console.log("taken")
     resolve(accessTokenJson.access_token)
    }


           reject("aserr");

  })
}


/**
  * 上传图片素材
  */
WeChat.prototype.uploadmaterial  = function(){
   var form = { //构造表单
    media:fs.createReadStream("/home/aok-xf/GCmountain/public/image/erweima.jpg")
  }

 var that = this;
  return new Promise(function(resolve,reject){
    that.accesstaken().then(function(data){

      var url = api.menu.upload + 'access_token=' + data +"&type=image";
console.log(url)

request({url:url,method:'POST',formData:form,json:true},function(err,res,body){
  if(err){console.log(err)
   reject(err)

  }else{
 mediaid=body.media_id
 console.log(body.media_id)
 resolve(body.media_id)
}
})
 });
  });
}


WeChat.prototype.sentmenus  = function(){
  var that = this;
  return new Promise(function(resolve,reject){
    that.accesstaken().then(function(data){
      var url = api.menu.create + 'access_token=' + data;
     that.requestPost(url,JSON.stringify(menus)).then(function(data){


       console.log(data);
      });
    });

  });
}

WeChat.prototype.handleMsg = function(req,res){
 console.log(res)
  var buffer = [],that = this;
  req.on('data',function(data){
                buffer.push(data);
 })
  req.on('end',function(){
    var msgXml = Buffer.concat(buffer).toString('utf-8');
    //解析xml
    parseString(msgXml,{explicitArray : false},function(err,result){
      if(!err){
         result = result.xml;

      console.log(result);
      var toUser = result.ToUserName; //接收方微信
      var fromUser = result.FromUserName;//发送仿微信
      var reportMsg = ""; //声明回复消息的变量
      //判断消息类型
      if(result.MsgType.toLowerCase() === "event"){
       //判断事件类型
       switch(result.Event.toLowerCase()){
          case 'subscribe':
          var content = "'点击菜单栏“联系我们”可以获得老板微信二维码";
          reportMsg = msg.txtMsg(fromUser,toUser,content);
          break;
         case 'click':

       var mymediaid=mediaid;
      console.log(mediaid)
        reportMsg=msg.phoMsg(fromUser,toUser,mymediaid)

         //回复图文消息

          break;
        }
      }else{


          if(result.MsgType.toLowerCase() === "text"){
            //根据消息内容返回消息信息
            switch(result.Content){
              case '1':
              reportMsg = msg.txtMsg(fromUser,toUser,'点击菜单栏“联系我们”可以获得老板微信二维码');
   break;
             case '产品':


        var contentArr = [
       {Title:"",Description:"",PicUrl:"http://aokxf.com/static/images/tjy2.jpg",Url:"http://aokxf.com"},
{Title:"是吃货，不放过美味",Description:"是吃货不放过美味",PicUrl:"",Url:""},
  {Title:"",Description:"",PicUrl:"",Url:""}
     ];

     reportMsg = msg.graphicMsg(fromUser,toUser,contentArr);



               break;
               default:
                 reportMsg = msg.txtMsg(fromUser,toUser,'没有这个选项哦');
                 break;
            }
        }
    }
       res.send(reportMsg);
     }else{
 ontentArr = [
 {Title:"",Description:"",PicUrl:"http://aokxf.com/static/images/tjy2.jpg",Url:"http://aokxf.com"},


       {Title:"长按图片识别二维码添加鱼小二微信",Description:"长按图片识别二>维码添加鱼小二微信",PicUrl:"http://aokxf.com/static/images/tjy.jpg",Url:"http://aokxf.com"}
     ];

     reportMsg = msg.graphicMsg(fromUser,toUser,contentArr);
             //打印错误
                console.log(err);
    }
         });
  });
}



 //暴露可供外部访问的接口

 module.exports = WeChat;

