 

  function picimg(pic, num) {
    var t;
    var i = 0;
    var $scrollB = $(".banner_btn");
    var $sorllBtnList = $(".banner_list");
    var $sorllBtn = $(".banner_span");
    var $sorllBtnSpan1 = $sorllBtnList.find("span");
    var $sorllBtnSpan = $sorllBtn .find("a");
    var len = $(num).length;
    $(num).click(function () {
        var $this = $(this);
        i = $this.index();
        $(pic).eq(i).fadeIn(1000).siblings().fadeOut(1000);
        return i;
        
    }); 
    t = setInterval(function () {
        if (i >= (len - 1)) {
            i = 0;
        } else {
            i++;
        }
        $sorllBtnSpan1.eq(i).addClass("current-index").siblings().removeClass("current-index");
        $sorllBtnSpan.eq(i).removeClass("current2").addClass("current1").siblings().removeClass("current1").addClass("current2");
        $(num).eq(i).trigger('click');
     }, 5000);
    
    $sorllBtn.hide(); 
    $scrollB.hover(function(){
                
                $sorllBtn.show();
            },function(){
               
                $sorllBtn.hide();       
            });
   
  $sorllBtnSpan.click(function () {
        var $this = $(this);
        i = $this.index();
        $(pic).eq(i).fadeIn(1000).siblings().fadeOut(1000);
         
        return i;
       
    }); 
   
  
}
$(function () { picimg('.pic li', '.num li'); })

//导航
$(function () {
    $('.menu li').hover(function () {
        $(this).addClass('add').children('div').stop().show();
    }, function () {
        $(this).removeClass('add').children('div').stop().hide();
    })
    $('#menu-about,#brand,#news,#resource,#contact').hover(function () {
         $(this).addClass('add').parent('li').addClass('add');
    }, function () {
        $(this).removeClass('add').parent('li').removeClass('add');
    })
});

//客服

$(function () {
    var $kefu = $(".kefu");
    var $open = $(".open");
    $open.click(function () {
        if ($kefu.css('right') == '-130px') {
            $(".kefu").animate({ right: '0px' });
            $(".open-span").show();
        } else {
            $(".kefu").animate({ right: '-130px' });
            $(".open-span").hide();
        }
    })
    function _scrollTop() {
        var _scrollTop = $(document).scrollTop() + 150; //滚动高度+top:150px
        $kefu.stop().animate({ top: _scrollTop }, 800);
    }
    $(window).scroll(_scrollTop);
})
//提示
$(function () { 
    $("#tishis").click(function () {
        $("#tishi ").find("ul").toggle();
    
    })
  
}) 
//表单
$(function () { 
     $("#form1").show();
     $("#form2").hide();
    $("#formspan span ").eq(0).click(function () {
        $("#form1").show();
        $("#form2").hide();
    })
  $("#formspan span ").eq(1).click(function () {
        $("#form2").show();
        $("#form1").hide();
    })
}) 



  
  
