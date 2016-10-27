define('web.js',function(require,exports,module){
    
    var $ = require('jquery.js');
    var setWindow = require('common.js').setWindow;

    exports.web = function(){
       var parent = $('#content_two');
       var alist = parent.find('li');
       var title = parent.find('.content_title p');
       
       function setPos(){
		  alist.eq(0).css('left','-300px');
		  alist.eq(1).css({'top':'200px',"opacity":0});
		  alist.eq(2).css({'top':'200px',"opacity":0});
		  alist.eq(3).css('left','300px');
       }
       setPos();


       setWindow(title,function(){
         title.animate({top:0,opacity:1},700);
         alist.each(function(index,ele){
            $(ele).animate({left:0,top:0,opacity:1},700);
         });
       },function(){
          setPos();
          title.css({'top':'-80px','opacity':0});
       })

       alist.hover(function(){
         if(!alist.is("animate")){
         alist.removeClass('active');
         $(this).addClass('active');
         }
       },function(){
         alist.removeClass('active');
       })
    }
})