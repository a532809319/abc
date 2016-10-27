define('logo.js',function(require,exports,module){
	var $ = require('jquery.js');
 
	exports.changeLogo = function(){
      $('.massage').hover(function(){
      	 $(this).find('p').eq(0).html('被发现了!').next().html('求职啊!');
      })
	}

})