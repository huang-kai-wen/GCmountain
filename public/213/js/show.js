//banner

$(document).ready(function () {
        
$(function () { 
     $("#form0").show().siblings().hide();
     var scre=$(window).width();
    var f=$("html").css("font-size").toString();
       fl=$("html").css("font-size").toString().length;
       fs=f.substring(0,fl-2) ;
       fsi=parseInt(fs);
        
        var k1=scre/fsi,k2=1536/16,k=k2/k1;

          scre1=k*scre/58;
     var  strscrel=scre1.toString();
     var  strscre=strscrel+"px";
     $("html").css("font-size",strscre);
     
  
    $(".formspan").click(function () {
      var i=$(this).index();
       
        $(".a142").eq(i).show().addClass("add").siblings().hide().removeClass("add");
        $("#fspan span ").eq(i).addClass("add").siblings().removeClass("add");
  
    });
    
 });  
});  
