


var dt=function dt(req,res){ 
    var app = require('express');
    var router = app.Router();
    var mysql=require('mysql');
    
     var pool=mysql.createPool({
                               host:'localhost',
                               port:'3306',
                               database:'123ht',
                               user: 'root',
                               password:'1234',
                               
                            })  
    req.on('data',function(data){
                                                                       var obj=data;
                                                                           objd=JSON.parse(obj);
                                                                         console.log(objd.name,objd.phone,objd.sex,objd.education,objd.from,objd.department);
                                                                         

                                                                          res.send("数据提交成功要发送的数据："+obj);
                                                                         pool.getConnection(function(err,connection){
                                                                                                                     if(err) console.log('与数据库连接失败');
                                                                                                                     else{
                                                                                                                      connection.query(
                                                                                                                                     'INSERT INTO user SET ?',
                                                                                                                                     {username:objd.name,phone:objd.phone,sex:objd.sex,education:objd.education,from:objd.from,department:objd.department},
                                                                                                                                     function(err,result){if(err) str='在服务器mysql数据库中插入数据失败'; else str='数据插入成功';
                                                                                                                                     connection.release();
                                                                                                                                     res.end();
                                                                                                                                     console.log(str);
                                                                                                                                 }
                                                                                                                                    )
                                                                                                                     }
                                                                                                                    })
                                                                         });
                                            
                                     
                                         }
module.exports = dt;