define('scroll.js',function(require,exports,module){
   
    var $ = require('jquery.js');
    var basic_top = $('#content_one').offset().top + $('#content_one').height()/3;
    var web_top = $('#content_two').offset().top + $('#content_two').height()/3;
    var exp_top = $('#content_three').offset().top + $('#content_three').height()/3;
    var music_top = $('#content_four').offset().top + $('#content_four').height()/3;
    var massage_top = $('#my_massage').offset().top + $('#my_massage').height()/3;
    var call_top = $('#footer').offset().top + $('#footer').height()/3;

    exports.scroll = function(){
    	
    	var arr = [];

    	var alist = $('#aside_nav li');

    	alist.each(function(index,ele){
           arr.push($(ele).text());
    	});

    	arr.splice(arr.length-1,1);

        
        $(document).on('scroll',function(){
          var scrollT = $(document).scrollTop();

    	  if(scrollT < basic_top){
            setli(arr[0]);
    	  }else if(basic_top < scrollT && scrollT < web_top){
            setli(arr[1]);
    	  }else if(scrollT > web_top && scrollT < exp_top){
            setli(arr[2]);
    	  }else if(scrollT > exp_top && scrollT < music_top){
            setli(arr[3]);
    	  }else if(scrollT > music_top && scrollT < massage_top){
            setli(arr[4]);
    	  }else if(scrollT > massage_top && scrollT < call_top){
            setli(arr[5]);
    	  }
        });


        function setli(text){
         	var query = '#aside_nav li:contains('+text+')';
         	var obj = $(query);           
            alist.removeClass('active');
            obj.addClass('active');
        }
        
        alist.click(function(){
        	if($(this).text() == arr[0]){
              $('html body').stop().animate({scrollTop:0},700);
        	}else if($(this).text()==arr[1]){
              $('html body').stop().animate({scrollTop:$('#content_two').offset().top-250},700);
        	}else if($(this).text()==arr[2]){
              $('html body').stop().animate({scrollTop:$('#content_three').offset().top-100},700);
        	}else if($(this).text()==arr[3]){
              $('html body').stop().animate({scrollTop:$('#content_four').offset().top-300},700);
        	}else if($(this).text()==arr[4]){
              $('html body').stop().animate({scrollTop:$('#my_massage').offset().top-150},700);
        	}else if($(this).text()==arr[5]){
              $('html body').stop().animate({scrollTop:$('#footer').offset().top},700);
        	}else{
        	  $('html body').stop().animate({scrollTop:0},700);
        	}
        })
    } 

})