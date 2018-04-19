//banner
window.onload=function(){
  
(function (){
    function G(s){
        return document.getElementById(s);
    } ;
    

    
   
    
        //var fi=figure();  
    function s(y,p){
      var price=G(p);  
      var core=price.getElementsByTagName("h2")[0];  
     var elements=core.childNodes;
   if (elements.length==0) {
        
     var node=document.createTextNode("价格为："+y+"元");
     
     core.appendChild(node);
    }else{
    core.removeChild(elements[0]);var node=document.createTextNode("价格为："+y+"元");
     
      core.appendChild(node);}
     }  ;
     function getSelectedOptions(selectbox){
     var result=new Array();
    var option=null;
     for (var i=0,len=selectbox.options.length;i<len;i++){
       option=selectbox.options[i];
      if (option.selected){result.push(option);}
     }
    return result;
    }
   function figure(targetopt,targetform){
    var selectbox=G(targetopt);
    var selectedOptions=getSelectedOptions(selectbox);
    var message="";
    
     for (var i=0,len=selectedOptions.length;i<len;i++){
       message=selectedOptions[i].value;
     } 
          var  price=G(targetform);
          var priceh=price.getElementsByTagName("input")[0];
          var count=priceh.value;
        var yuan =message/200*count;
        if (count<=0||typeof(count)!=="number") {alert("请输入正整数")};
     return yuan;
    }
    var pricec=G("pass");
    pricec.onclick=function (){

                 var pos=figure("card","form0")+10;
     
                              s(pos,"form0");
                                 }
  
 var pricee1=G("pass1");
 pricee1.onclick=function (){
    var selectbox=G("card1");
    var selectedOptions=getSelectedOptions(selectbox);
     message="";
    var pos1
     for (var i=0,len=selectedOptions.length;i<len;i++){
       message=selectedOptions[i].value;
     } 
     
    var par=G("form1");
    var parte=par.getElementsByTagName("input")[0]
    var parten= parte.value;
    message1=message.toString();
    message2=parseInt(message1);
     if (parten<=0||typeof(parten)!=="number") {alert("请输入正整数")};
    if (message2==50) 
      {if(parten>=500&&parten<1000){pos1=parten*0.7;}else if
         (parten>=1000&&parten<2000){pos1=parten*0.38;}else if 
         (parten>=2000&&parten<5000){pos1=parten*0.285;}else if 
          (parten>=5000&&parten<10000) {pos1=parten*0.244;}else if 
           (parten>=10000){pos1=parten*0.175;}else {alert("500张起印")}
        }
        else if (message2==60)
           {if(parten>=500&&parten<1000){pos1=parten*0.825;}else if
           (parten>=1000&&parten<2000){pos1=parten*0.18;}else if
          (parten>=2000&&parten<5000){pos1=parten*0.14;}else if
          (parten>=5000&&parten<10000){pos1=parten*0.116;}else if
          (parten>=10000){pos1=parten*0.086;}else {alert("500张起印")} 
          }
        else if (message2==70)
         {if(parten>=500&&parten<1000){pos1=parten*0.2;}else if 
          (parten>=1000&&parten<2000){pos1=parten*0.12;}else if 
           (parten>=2000&&parten<5000){pos1=parten*0.09;}else if 
           (parten>=5000&&parten<10000){pos1=parten*0.06;}else if
            (parten>=10000){pos1=parten*0.045;}else {alert("500张起印")}
         }
        else 
          {if(parten>=500&&parten<1000){pos1=parten*0.15;}else if
           (parten>=1000&&parten<2000){pos1=parten*0.1;}else if 
           (parten>=2000&&parten<5000){pos1=parten*0.075;}else if
           (parten>=5000){pos1=parten*0.044;}else{alert("500张起印")}
          }
    
      
      
                              s(pos1,"form1");
                                 };
  
                           
var pricee2=G("pass2");
 pricee2.onclick=function (){
    var selectbox=G("card2");
    var selectedOptions=getSelectedOptions(selectbox);
     message="";
    var pos1
     for (var i=0,len=selectedOptions.length;i<len;i++){
       message=selectedOptions[i].value;
     } 
     
    var par=G("form2");
    var parte=par.getElementsByTagName("input")[0]
    var parten= parte.value;
    message1=message.toString();
    message2=parseInt(message1);
    if (parten<=0||typeof(parten)!=="number") {alert("请输入正整数")};
    if (message2==50) 
      {if(parten>=1000&&parten<2000){pos1=parten*0.07;}else if
         (parten>=2000&&parten<5000){pos1=parten*0.065}else if 
           (parten>=5000){pos1=parten*0.058;}else {alert("1000张起印")}
        }
        else if (message2==60)
           {if(parten>=1000&&parten<2000){pos1=parten*0.24;}else if
           (parten>=2000&&parten<5000){pos1=parten*0.185;}else if
           (parten>=5000&&parten<10000){pos1=parten*0.136;}else if
          (parten>=10000){pos1=parten*0.01;}else {alert("1000张起印")} 
          }
        else if (message2==70)
         {if(parten>=1000&&parten<2000){pos1=parten*0.29;}else if 
          (parten>=2000&&parten<5000){pos1=parten*0.24;}else if 
           (parten>=5000&&parten<10000){pos1=parten*0.21;}else if 
            (parten>=10000){pos1=parten*0.019;}else {alert("1000张起印")}
         }
         else if (message2==80)
         {if(parten>=1000&&parten<2000){pos1=parten*0.59;}else if 
          (parten>=2000&&parten<5000){pos1=parten*0.475;}else if 
           (parten>=5000&&parten<10000){pos1=parten*0.4425;}else if 
           
            (parten>=10000){pos1=parten*0.4225;}else {alert("1000张起印")}
         }
       else if (message2==90)
         {if(parten>=1000&&parten<2000){pos1=parten*1.2;}else if 
          (parten>=2000&&parten<5000){pos1=parten*0.9725;}else if 
           (parten>=5000&&parten<10000){pos1=parten*0.8804;}else if 
           
            (parten>=10000){pos1=parten*0.8450;}else {alert("1000张起印")}
         }   
        else 
          {if(parten>=1000&&parten<2000){pos1=parten*2.21;}else if 
          (parten>=2000&&parten<5000){pos1=parten*1.872;}else if 
           (parten>=5000&&parten<10000){pos1=parten*1.742;}else if 
           
            (parten>=10000){pos1=parten*1.1677;}else {alert("1000张起印")}
         }   
    
      
      
                              s(pos1,"form2");
                                 };

    var sexvalue ,obj;

    
 var pricee3=G("pass3");  
 
 pricee3.onclick=function (){
  var obj=document.getElementsByName("type");
         for (var i = 0; i<obj.length; i++) {
            if (obj[i].checked) {sexvalue=obj[i].value;   
            };
              };

    var selectbox=G("card3");
    var selectedOptions=getSelectedOptions(selectbox);
     message="";
    var pos1
     for (var i=0,len=selectedOptions.length;i<len;i++){
       message=selectedOptions[i].value;
     } 
     
    var par=G("form3");
    var parte=par.getElementsByTagName("input")[2];
    var parte1=par.getElementsByTagName("input")[3];
    var parten1= parte1.value;
    var parten= parte.value;
    message1=message.toString();
    message2=parseInt(message1);
    if (parten<=0||typeof(parten)!=="number"||parten1<=0||typeof(parten1)!=="number") {alert("请输入正整数")}
    if (message2==50) 
           {if(sexvalue=="3a"){pos1=(parten1*70+60)*parten;}else {pos1=(parten1*35+50)*parten;}}
        
        
        else if (message2==60)
           {if(sexvalue=="3a"){pos1=(parten1*70+50)*parten;}else {pos1=(parten1*35+40)*parten;}}
        

        else if (message2==70)
           {if(sexvalue=="3a"){pos1=(parten1*70+35)*parten;}else {pos1=(parten1*35+25)*parten;}}
        
         
         else {if(sexvalue=="3a"){pos1=(parten1*70+45)*parten;}else {pos1=(parten1*35+35)*parten;}}
        
    
      
      
                              s(pos1,"form3");
                                 }; 
 var pricee4=G("pass4");  
 
 pricee4.onclick=function (){
  var obj=document.getElementsByName("type1");
         for (var i = 0; i<obj.length; i++) {
            if (obj[i].checked) {sexvalue=obj[i].value;   
            };
              };

    var selectbox=G("card4");
    var selectedOptions=getSelectedOptions(selectbox);
     message="";
    var pos1
     for (var i=0,len=selectedOptions.length;i<len;i++){
       message=selectedOptions[i].value;
     } 
     
    var par=G("form4");
    var parte=par.getElementsByTagName("input")[2];
    var parten= parte.value;
    message1=message.toString();
    message2=parseInt(message1);
    if (parten<=0||typeof(parten)!=="number") {alert("请输入正整数")}
    if (message2==50) 
           {if(sexvalue=="3a"){ if (parten>=230&&parten<=440) {pos1=2.3*parten;} else if (parten>440) {pos1=2.2*parten;}else{alert("230本起印")}}else
            { if (parten>=240&&parten<=440) {pos1=2.4*parten;} else if (parten>460) {pos1=2.3*parten;}else{alert("230本起印")}}}
        
        
        else if (message2==60)
           {if(sexvalue=="3a"){ if (parten>=250&&parten<=480) {pos1=2.5*parten;} else if (parten>480) {pos1=2.4*parten;}else{alert("250本起印")}}else
            { if (parten>=260&&parten<=500) {pos1=2.6*parten;} else if (parten>500) {pos1=2.5*parten;}else{alert("230本起印")}}}
       
        
         
         else {if(sexvalue=="3a"){ if (parten>=410&&parten<=780) {pos1=4.1*parten;} else if (parten>780) {pos1=3.9*parten;}else{alert("410本起印")}}else
            { if (parten>=430&&parten<=820) {pos1=4.3*parten;} else if (parten>820) {pos1=4.1*parten;}else{alert("430本起印")}}}
        
    
      
      
                              s(pos1,"form4");
                                 };
 var pricee5=G("pass5");                                         
  pricee5.onclick=function (){ 
   var par=G("form5");
    var parte=par.getElementsByTagName("input")[1];
    var parten= parte.value; 
    var parte1=par.getElementsByTagName("input")[0];
    var parten1= parte.value; 
  var selectbox=G("card5");
    var selectedOptions=getSelectedOptions(selectbox);
     message="";
    var pos1
     for (var i=0,len=selectedOptions.length;i<len;i++){
       message=selectedOptions[i].value;
     }  
    message1=message.toString();
    message2=parseInt(message1); 
     if (parten*parten1<=0||typeof(parten)!=="number"||typeof(parten1)!=="number") {alert("请输入正整数")};
    if (message2==50) {pos1=5*parten*parten1;}else{pos1=4*parten*parten1;}
                          s(pos1,"form5");
                                 }; 
  var pricee6=G("pass6");                                         
  pricee6.onclick=function (){ 
  var par=G("form6");
    var parte=par.getElementsByTagName("input")[1];
    var parten= parte.value; 
    var parte1=par.getElementsByTagName("input")[0];
    var parten1= parte.value; 
    var parte2=par.getElementsByTagName("input")[2];
    var parten2= parte.value; 
    var pos1;
   if (parten*parten1*parten2<=0||typeof(parten)!=="number"||typeof(parten1)!=="number"||typeof(parten2)!=="number") {alert("请输入正整数")};
    pos1=50*parten*parten1*parten2;
                    s(pos1,"form6");
                                 }; 
  var pricee7=G("pass7");                                         
  pricee7.onclick=function (){ 
  var par=G("form7");
  var parte=par.getElementsByTagName("input")[0];
    var parten= parte.value; 
    var pos1;
     var selectbox=G("card7");
    var selectedOptions=getSelectedOptions(selectbox);
     message="";
     for (var i=0,len=selectedOptions.length;i<len;i++){
       message=selectedOptions[i].value;
     }  
    message1=message.toString();
    message2=parseInt(message1);
    if (parten<=0||typeof(parten)!=="number") {alert("请输入正整数")};
    if (message2==50) {pos1=180*parten}else {pos1=280*parten};
                    s(pos1,"form7");
                     
                                 };

 } 
)();
} //banner
