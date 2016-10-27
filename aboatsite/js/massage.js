define('massage.js',function(require,exports,module){
    
    var $ = require('jquery.js');
    var setWindow = require('common.js').setWindow;

    exports.massage = function(){
       
        var parent = $('#my_massage');
        var title = parent.find('.content_title p');
        var about_bg1 = parent.find('.about_bg1');
        var about_bg2 = parent.find('.about_bg2');
        var about = parent.find('.about');
        var about_me = parent.find('.about_me');
        var skill = parent.find('.skill');

        setWindow(about,function(){
        	title.stop().animate({top:0,'opacity':1},700);
            about.stop().animate({top:'150px',opacity:1},700,function(){
				about_bg1.stop().animate({
					left: '190px',
					opacity: 0.3
				}, 800, function() {
					about_bg1.addClass('anithree');
				});
				about_bg2.stop().animate({
					right: '210px',
					opacity: 0.3
				}, 800, function() {
					about_bg2.stop().addClass('anithree');
				});
            });
            setTimeout(function(){
              about_me.stop().animate({top:'50px','opacity':1},400); 
              skill.stop().animate({bottom:'30px','opacity':1},400);
            },700);
        },function(){
        	title.css({top:'-80px','opacity':0});
        	about_bg1.css({left:'100px','opacity':0});
        	about_bg2.css({right:'120px','opacity':0});
        	about_me.css({top:'150px',opacity:0});
        	skill.css({bottom:'-20px',opacity:0});
        	about.css({top:'300px',opacity:0});
        })
    };
})