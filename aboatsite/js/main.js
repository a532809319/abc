define(function(require,exports,module){
	require('logo.js').changeLogo();
	require('tab.js').tabMove();
	require('text_move.js').moveTxt();
	require('clock.js').setClock();
	require('aside.js').aside();
	require('web.js').web();
	require('example.js').example();
	require('music.js').musicPlay();
	require('massage.js').massage();
	require('call.js').call();
	require('scroll.js').scroll();
});
