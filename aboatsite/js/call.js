define('call.js',function(require,exports,module){
    
    var $ = require('jquery.js');
    var setWindow = require('common.js').setWindow;

    exports.call = function(){

    	var title = $('#footer .content_title p');
        var aTxt = $('#footer .contact p');
        var alist = $('#footer .contact li');
        var arr = ['18019762902','532809319','532809319','532809319@qq.com']

        setWindow(title,function(){
          title.stop().animate({top:0,'opacity':1},700);
          alist.css("transform","scale(1)").stop().animate({left:0,right:0,opacity:1},700);
        },function(){
          title.css({top:'-80px','opacity':0});
          setPos();
        });
        function setPos(){
           alist.css({"transform":"scale(3)","opacity":0});
        };

        alist.hover(function(){
            $(this).find('a').addClass('show');
            $(this).find('p').text(arr[$(this).index()]);
        },function(){
            $(this).find('a').removeClass('show');
        })
        
    }
})