


var dt=function dt(req,res){ 
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
    var buffer = [],result = ""; 
    req.on('data',function(data){ 
      buffer.push(data);
     }); 
    req.on('end',function(){ 
      result = Buffer.concat(buffer).toString('utf-8');
      var obj=result;  
      var objd=JSON.parse(obj);
      if(objd.mutationType=='addgoods'){
         pool.getConnection(function(err,connection){
            if(err) {console.log(err);  res.send("后台链接失败");}else{
                 connection.query('INSERT INTO  goods SET ?',
                    {isnew:objd.isnew,hot:objd.hot,introd:objd.desc,type:objd.type1,price:objd.price,count:objd.count,loadtime:objd.date1,phone:objd.phone,goodsname:objd.name,pic1base64:objd.pic1base64,pic2base64:objd.pic2base64,pic3base64:objd.pic3base64,},
                    function(err,result){if(err)  console.log(err);
                      connection.release();
                      var recode={"code":"ok"}                                                                                                                    
                      res.send(JSON.stringify(recode));
                      console.log('数据插入成功')
                    } 
                  )
              }                                                                                                                      
          })   
      }else if(objd.mutationType=='getallgoods'){
         pool.getConnection(function(err,connection){
            if(err) {console.log('与数据库连接失败');  res.send("后台链接失败");}else{
            connection.query('select * from goods ', [],
                
                function(err,result){if(err)  console.log(err);
                 connection.release();
                 
                 var items=[];
                 for (var i=0; i<result.length; i++) { 
                          var googsid=result[i].id
                          var googsisnew= result[i].isnew 
                          var googshot= result[i].hot
                          var googsintrod=result[i].introd
                          var googstype=result[i].type
                          var googsprice=result[i].price
                          var googscount=result[i].count    
                          var googsloadtime=result[i].loadtime
                          var goodsname=result[i].goodsname 
                          var googspic1base64=result[i].pic1base64
                          var googspic2base64=result[i].pic2base64
                          var googspic3base64=result[i].pic3base64
                          var googs={"googsid":googsid,"googsisnew":googsisnew,"googshot":googshot,"googsintrod":googsintrod,"googstype":googstype,
                          "googsprice":googsprice,"googscount":googscount,"googsloadtime":googsloadtime,"goodsname":goodsname,
                           "googspic1base64":googspic1base64,"googspic2base64":googspic2base64,"googspic3base64":googspic3base64}
                          items.push(googs);
                       } 
                  console.log(items.length)
                  res.send(JSON.stringify(items))
                 
                } 
            )}                                                                                                                      
          })        
      }else if(objd.mutationType=='delectonegoods'){
           console.log(objd.goodsid)
          pool.getConnection(function(err,connection){
            if(err) {console.log(err);  res.send("后台链接失败");}else{
                connection.query('DELETE FROM goods WHERE id = ?',
                [objd.goodsid],
                function(err,result){if(err)  console.log(err);
                 connection.release();
                 var recode={"code":"ok"}                                                                                                                    
                 res.send(JSON.stringify(recode));
                 console.log('删除成功')
                 } 
            )}                                                                                                                      
          })     
      }else if(objd.mutationType=='changesinglegoodsinfo'){
          console.log('changesinglegoodsinfo')
         pool.getConnection(function(err,connection){
            if(err) {console.log(err);  res.send("后台链接失败");}else{
                connection.query('UPDATE goods SET isnew = ?,hot = ?, introd = ?,type= ? ,price = ?,count = ?, goodsname = ?,pic1base64= ? ,pic2base64 = ?,pic3base64 = ? WHERE id = ?',
                  [objd.isnew,objd.hot,objd.desc,objd.type1,objd.price,objd.count,objd.name,objd.pic1base64,objd.pic2base64,objd.pic3base64,objd.id],
                 function(err,result){if(err) str='在服务器mysql数据库中更新数据失败'; else str='数据更新成功';
                   connection.release();
                   var recode={"code":"ok"}                                                                                                                    
                   res.send(JSON.stringify(recode));
                    console.log('修改单个商品成功')
                  }  
                )     
            }//
         })
      }//zheli
    })
  }
module.exports = dt;