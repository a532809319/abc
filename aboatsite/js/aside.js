define('aside.js',function(require,exports,module){

      var $ = require('jquery.js');
      var setWindow = require('common.js').setWindow;

      exports.aside = function(){
      	$(document).ready(function(){
			var aside = $('#aside_nav');
			var list = aside.find('li');
			aside.css('top','-35%');

			setWindow(aside,function(){
			aside.stop().animate({
			 top:'28%',opacity:1},700);
			});
      	});
      }


})