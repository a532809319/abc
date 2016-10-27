define('common.js',function(require,exports,module){
    
    var $ = require('jquery.js');  

    exports.getMove = function(obj,fn1,fn2){
       var objT = obj.offset().top;       //对象到页面顶端距离
       var objH = obj.outerHeight(true);  //对象大小
       var scrT = $(window).scrollTop();  //滚动高
       var scrH = $(window).height();     //可视区
        
       if(scrT > (objT+objH) || scrT<(objT-scrH)){          //scrT > (objT+objH) 超出
           fn2&&fn2();
       }else{
          fn1&&fn1();
       }
    }

    exports.setWindow = function(obj,fn1,fn2){
       $(window).bind('resize scroll load',function(){
       	 if(!obj.is(":animated")){
              exports.getMove(obj,fn1,fn2);
          }
       })
    };

})