define('tab.js',function(require,exprots,module){
    var $ = require('jquery.js');
    var setWindow = require('common.js').setWindow;

    exprots.tabMove = function(){
       var content = $('.navbar');
       var left = $('.left_btn');
       var right = $('.right_btn');
       var oul = $('.navbar_content ul');
       var btn_list = $('.btn_list li');
       var num = 0;
       var timer = null;
       var offok = true;
  
       var clone = oul.children().first().clone();
       oul.append(clone);
       var list = oul.find('li');
       var oWidth = list.width();
       
       oul.css('width',oWidth*(list.length));

       timer = setInterval(go,2000); 

       content.hover(function(){
        clearInterval(timer);
       },function(){
        timer = setInterval(go,2000);
       });

       btn_list.click(function(){
          if(!offok){
            return;
          }
          offok = false;
          var index = $(this).index();
          num = index;
          move();
       });

       left.click(function(){
           if(!offok){
            return;
          }
          offok = false;
         num++;
         move();
       });
       right.click(function(){
           if(!offok){
            return;
          }
          offok = false;
         num--;
         move();
       });

      function move(){
        if(num == list.length){
          oul.css('left',0);
          num = 1;
        }
        if(num == -1){
           oul.css('left',-(list.length-1)*oWidth);
           num = list.length-2;
        }
        oul.stop().animate({left:-num*oWidth},500,function(){
            offok = true;
        });
        
        if(num == list.length-1){
           btn_list.eq(0).addClass('active').siblings().removeClass('active');
        }else{
           btn_list.eq(num).addClass('active').siblings().removeClass('active');
        }
       
      }


       function go(){
          num++;
          move();
       }
       setWindow(content,function(){
          content.stop(true).animate({opacity:1,left:0},700,function(){
          left.stop().animate({'margin-top':0,opacity:0.5},100);
          right.stop().animate({'margin-top':0,opacity:0.5},100);
          });   
       },function(){
          content.stop(true,true).animate({opacity:0,left:-300},16); 
          left.css({"margin-top":'-10%',"opacity":0});
          right.css({"margin-top":'10%',"opacity":0});
       });

   };
});