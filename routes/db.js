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
        console.log(objd.password);
        pool.getConnection(function(err,connection){
          if(err) {console.log('与数据库连接失败');  res.send("后台链接失败");}else{
          connection.query('INSERT INTO  vuedata SET ?',
              {username:objd.name,password:objd.password,usertruename:objd.usertruename,phone:objd.phone,address:objd.address,product:objd.product},
              function(err,result){if(err) str='在服务器mysql数据库中插入数据失败'; else str='数据插入成功';
                 connection.release();                                                                                                                    
                 res.end(str);
                 console.log(str);} 
            )}                                                                                                                      
        }) 	                                                                                                                         
    	
    })
}    
module.exports = dt;