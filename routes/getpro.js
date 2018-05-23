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
        //console.log(objd.name);
        pool.getConnection(function(err,connection){
          if(err) {console.log('与数据库连接失败');  res.send("后台链接失败");}else{
          connection.query('SELECT product FROM vuedata WHERE username = ?',
               [objd.name],
              function(err,result){if(err) str='在服务器mysql数据库中查询数据失败'; else str='数据查询成功';
                 connection.release();
                 
                                                                                                                                
                 var ff
                 for(var row of result ){
                   ff= JSON.parse(row.product) ;
                   console.log(ff)
                 }
                 
                  res.end(JSON.stringify(ff));}
            )}                                                                                                                       
        })                                                                                                                           
      
    })            
    
}    
module.exports = dt;