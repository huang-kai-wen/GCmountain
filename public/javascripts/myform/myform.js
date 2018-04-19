    var form3=document.getElementById("data1");
    var form2=document.getElementById("form2");
     var form4=document.getElementById("pass") ;
     var tijiao=document.getElementById("tijiao");
function ge(){
         var obj=document.getElementsByName("sex");
         for (var i = 0; i<obj.length; i++) {
          	if (obj[i].checked) {sexvalue=obj[i].value;		
          	};
          };
          var form1=document.getElementById("form1"); 
        var dataobj={
        	name: form1.elements[0].value,
        	phone: form1.elements[1].value,
            sex:sexvalue,
            education:form1.elements[4].value,
            from:form1.elements[5].value,
            department:form1.elements[6].value
          };
        var datast=JSON.stringify(dataobj);
      return datast;
} 
function createXHR(){
      if (typeof XMLHttpRequest != "undefined") {
        return new XMLHttpRequest();
      }else if (typeof ActiveXObject != "undefined"){
        if (typeof arguments.callee.activeXString != "undefined") {
          var versions=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP"],i,len;
          for (i=0,len=versions.length; i < len;i++ ){
            try{
              new ActiveXObject(versions[i]);
              arguments.callee.activeXString = versions[i];
              break;
            }catch (ex){
              alert("mistake");
            }
          }
        }
         return new ActiveXObject(arguments.callee.activeXString);
      }else{ throw new Error("no XHR object available");
    }
}
tijiao.onclick=function(){
    var sss= ge();
  
   function senddata(){
      var data= ge();
      var xhr =createXHR();
      xhr.onreadystatechange=function(){ 
                                      if (xhr.readyState==4) {if ((xhr.status>=200 && xhr.status<300) ||xhr.status==304) {form2.elements[0].value=xhr.responseText; };
                                                             }else{form2.elements[0].value="request was unsuccessful";+xhr.status }
                                      }
       xhr.open('post','123.html',true);
       xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded;charset=UTF-8");
      // form2.elements[0].value=data; 
      xhr.send(data);
    }
  senddata();
 
}

// 
// function addURLParam(url,name,value){
 // url +=(url.indexOf("?")==-1 ? "?":"&");
//  url +=encodeURIComponent(name)+"="+encodeURIComponent(value);
 // return url;
  
//} 
//var url="123.js";
 //    url= addURLParam(url,"1","2");
  //   url= addURLParam(url,"3","4");
  //var xhr =createXHR();
  //  xhr.open("get","url",false);
 //   xhr.send(null);
// }  
  



//function addURLParam(url,name,value){
//  url +=(url.indexOf("?")==-1 ? "?":"&");
//  url +=encodeURIComponent(name)+"="+encodeURIComponent(value);
 // return url;
  
//} 