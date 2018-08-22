


var dt=function dt(req,res){ 
   var myCryptoJS = require("./dao/crypto.js"); 
    var app = require('express');
    var router = app.Router();
    var mysql=require('mysql');
    
     var pool=mysql.createPool({
                               host:'localhost',
                               port:'3306',
                               database:'admin',
                               user: 'root',
                               password:'1234',
                               
                            })  
    req.on('data',function(data){
     var obj=data;
     objd=JSON.parse(obj);
     console.log(objd);
//     res.send("数据提交成功要发送的数据："+obj);
     pool.getConnection(function(err,connection){
          if(err) {console.log(err);  res.send("后台链接失败");}else{
          connection.query('SELECT password ,token FROM admin WHERE administ = ?',
               [objd.name],
              function(err,result){if(err) str='在服务器mysql数据库中查询数据失败'; else str='数据查询成功';
                 connection.release();
                 var mingwen= myCryptoJS.aesDecrypt(objd.password);
                 var ff
                 for(var row of result ){
                   ff= row.password ;

                 }
                var token
                 for(var row of result ){
                   token= row.token ;
                   console.log(token)
                 }

                 if(mingwen== ff){
                   var restaken={"code":"ok","token":token}
                   res.end(JSON.stringify(restaken));
                 }else{

                  res.end("登录失败");
                 }
                 
                }
            )}                                                                                                                       
        })  
    });
  }
module.exports = dt;