define('clock',function(require,exports,module){
   
   var $ = require('jquery.js');

   var setWindow = require('common.js').setWindow;
  
   exports.setClock = function(){
      var box = $('.clock_box');
   	  var clock_box = $('.min_clock');
      var osecond = clock_box.find('.second');
      var ohour = clock_box.find('.hour');
      var ominute = clock_box.find('.minute');

      box.css('top','100px');

      setWindow(box,function(){
        box.stop().animate({top:0,opacity:1},700);
      },function(){
        box.stop().animate({top:-100,opacity:0},30);
      });
      
      setInterval(function(){
		var now = new Date();
		var h = now.getHours();
		var m = now.getMinutes();
		var s = now.getSeconds();
		var ms = now.getMilliseconds(); 

		osecond.css('transform','rotate('+(s+ms/1000)/10*360+'deg)');
		ohour.css('transform','rotate('+(h+m/60)/12*360+'deg)');	
		ominute.css('transform','rotate('+(m+s/60)/60*360+'deg)');
	},16);
   };
})