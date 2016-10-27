define('text_move.js',function(require,exports,module){
      
      var $ = require('jquery.js');
      var getMove = require('common.js').getMove;
      var setWindow = require('common.js').setWindow;

      exports.moveTxt = function(){
      	var oParent = $('#star');
      	var oTxt = oParent.children();

       setWindow(oParent,function(){
        setTxt(1,500);
       },function(){
        setTxt(0,30);
       })

      function setTxt(scale,time){
	      oTxt.eq(0).stop().animate({opacity:scale},time,function(){
    	   oTxt.eq(1).stop().animate({opacity:scale},time,function(){
    		   oTxt.eq(2).stop().animate({opacity:scale});
    	 })
      })
    };
   }
})