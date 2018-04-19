

var dt=function dt(req,res){ 
    var app = require('express');
    var router = app.Router();
    var mysql=require('mysql');
    var pool=mysql.createPool({
                               host:'localhost',
                               port:'3306',
                               database:'vue',
                               user: 'root',
                               password:'1234',
                               
                            })  

    req.on('data',function(data){ 
        var obj=data;
         
        objd=JSON.parse(obj);
       
        pool.getConnection(function(err,connection){
          if(err) {console.log('与数据库连接失败');  res.send("后台链接失败");}else{
          connection.query('UPDATE vuedata SET product = ? WHERE username = ?',
              [JSON.stringify(objd.product),objd.name],
              function(err,result){if(err) str='在服务器mysql数据库中更新数据失败'; else str='数据更新成功';
                 connection.release();
                 //console.log(JSON.stringify(objd.product));                                                                                                                
                 res.end(str);
              }  
               
            )}                                                                                                                      
        }) 	                                                                                                                         
    	
    })
}    
module.exports = dt;



