

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
                               
                            });  
    var buffer = [],result = ""; 
    req.on('data',function(data){ 
      buffer.push(data);
     }); 
    req.on('end',function(){ 
        result = Buffer.concat(buffer).toString('utf-8');

      
     var obj=result;  
    var objd=JSON.parse(obj);
      console.log(objd.mutationType)
     if(objd.mutationType=='change') {
        pool.getConnection(function(err,connection){
           function randomString(len) {
　　          len = len || 32;
　　          var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
　　          var maxPos = $chars.length;
　　          var pwd = '';
　　          for (i = 0; i < len; i++) {
　　　　            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
　　          }
　　             return pwd;
            }
            var token=randomString(32)
            console.log(token)
            var mingwen= myCryptoJS.aesDecrypt(objd.password);
          
          if(err) {console.log('与数据库连接失败');  res.send("后台链接失败");}else{
          connection.query('UPDATE admin SET administ = ?,password = ?, token = ?,phone= ? ,job = ?,strbase64 = ? WHERE administ = ?',
              [objd.username,mingwen,token,"",objd.job,objd.picbase64,objd.username],
              function(err,result){if(err) str='在服务器mysql数据库中更新数据失败'; else str='数据更新成功';
                 connection.release();
                 //console.log(JSON.stringify(objd.product));                                                                                                                
                 res.end(str);
              }  
               
            )}                                                                                                                      
        }) 	                                                                                                                         
    	}else if(objd.mutationType=='getallinfo'){
        pool.getConnection(function(err,connection){
          if(err) {console.log(err);  res.send("后台链接失败");}else{
          connection.query('SELECT administ,job,strbase64 FROM admin WHERE token = ?',
               [objd.tokon],
              function(err,result){if(err) str='在服务器mysql数据库中查询数据失败'; else str='数据查询成功';
                 connection.release();
                 var administ
                 for(var row of result ){
                  administ= row.administ ;

                 }
                var job
                 for(var row of result ){
                   job= row.job ;
                  
                 }
                var strbase64
                 for(var row of result ){
                   strbase64= row.strbase64 ;
                  
                 }
                
                   var restaken={"code":"ok","administ":administ,"job":job,"strbase64":strbase64}
                   res.end(JSON.stringify(restaken));
                 

                  
              }
          )}                                                                                                                       
        })   
      }else if(objd.mutationType=='addadmins'){
           function randomString(len) {
　　          len = len || 32;
　　          var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
　　          var maxPos = $chars.length;
　　          var pwd = '';
　　          for (i = 0; i < len; i++) {
　　　　            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
　　          }
　　             return pwd;
            }
            var newtoken=randomString(32)
            var newobjdpassword = myCryptoJS.aesDecrypt(objd.password);
            console.log(objd.username)
          pool.getConnection(function(err,connection){
            if(err) {console.log(err);  res.send("后台链接失败");}else{
                connection.query('INSERT INTO  admin SET ?',
                {administ:objd.username,password:newobjdpassword,phone:'',token:newtoken,job:objd.job,strbase64:objd.picbase64},
                function(err,result){if(err)  console.log(err);
                 connection.release();
                 var recode={"code":"ok"}                                                                                                                    
                 res.send(JSON.stringify(recode));
                 console.log('数据插入成功')
                 } 
            )}                                                                                                                      
          })        

      }else if(objd.mutationType=='getalladmin'){
          pool.getConnection(function(err,connection){
            if(err) {console.log('与数据库连接失败');  res.send("后台链接失败");}else{
                connection.query('select * from admin ', [],
                
                function(err,result){if(err)  console.log(err);
                 connection.release();
                 
                 var items=[];
                 for (var i=0; i<result.length; i++) { 
                          var alljob=result[i].job
                          var alladminist= result[i].administ  
                          var picbase64string= result[i].strbase64
                          var alltoken=result[i].token
                          var resaobj={"jod":alljob,"administ":alladminist,"picbase64":picbase64string,"token":alltoken}
                          items.push(resaobj);
                       } 
                  console.log(items.length)
                  res.send(JSON.stringify(items))
                 
                 } 
            )}                                                                                                                      
          })        

      }else if(objd.mutationType=='delectoneadmin'){
         pool.getConnection(function(err,connection){
            if(err) {console.log(err);  res.send("后台链接失败");}else{
                connection.query('DELETE FROM admin WHERE token = ?',
                [objd.token],
                function(err,result){if(err)  console.log(err);
                 connection.release();
                 var recode={"code":"ok"}                                                                                                                    
                 res.send(JSON.stringify(recode));
                 console.log('删除管理员成功')
                 } 
            )}                                                                                                                      
          })       
      }//zheli
   }); 
}    
module.exports = dt;



