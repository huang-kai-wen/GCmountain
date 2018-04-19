window.onload=function(){
(function (){
    
    function G(s){
        return document.getElementById(s);
    }
    
    function getStyle(obj, attr){
        if(obj.currentStyle){
            return obj.currentStyle[attr];
        }else{
            return getComputedStyle(obj, false)[attr];
        }
    }
    
    function Animate(obj, json){
        if(obj.timer){
            clearInterval(obj.timer);
        }
        obj.timer = setInterval(function(){
            for(var attr in json){//new
                if (attr === "opacity"){
                 var iCur = getStyle(obj, attr) * 100;
                 var target =json[attr]*100;
                 iCur = iCur ? iCur : 0;
                 var iSpeed = (json[attr] - iCur) / 5;
                 iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
                 obj.style[attr] = iCur + iSpeed ;
                }else{
                
                 var iCur = parseInt(getStyle(obj, attr));
                 iCur = iCur ? iCur : 0;
                 var iSpeed = (json[attr] - iCur) /2;
                 iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
                 obj.style[attr] = iCur+ iSpeed + 'px';

                }
                           
               
            }
        }, 30);
    }

    
    var oList = G("product");
    var oPrevTop = G("prev"); 
    var oNextTop = G("next");
    var oListLi = oList.getElementsByTagName("li");
    var len2 = oListLi.length;
    var oListUl = oList.getElementsByTagName("ul")[0];
    var w2 = oListLi[0].offsetWidth;
    var len3=len2;
    oListUl.style.width = w2 * len3 + "px";
   var index1 =0;
   //news
    var onews = G("newslist"); 
    var onewsLi = onews.getElementsByTagName("li");
    var len4 = onewsLi .length;
    var onewsUl = onews.getElementsByTagName("ul")[0];
    var w3 = onewsLi[1].offsetheight;
    var len5 = len4+1;
    onewsUl.style.height = w3 * len5 + "px";
   //news
    function Change(){
     Animate(oListUl, {left: -index1*w2});
     if (index1<=2) {
      Animate(onewsUl, {top : -index1*40});
    }else{Animate(onewsUl, {top : -(index1-3)*40})}
    
   
    }
    oNextTop.onclick  = function(){
       index1 ++;
      index1 = index1 == len2 ? 0 : index1;
      Change();  
      }
  oPrevTop.onclick = function(){
        index1 --;
        index1 = index1 ==-1 ? 0 : index1;
        Change();
      }   
    var play = setInterval(function(){
      index1 ++;
      index1 = index1 == len2 ? 0 : index1;
      Change();          
    },4000);
        
}
)();
} //banner
