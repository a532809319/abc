define('music.js',function(require,exports,module){
   var $ = require('jquery.js');
   var setWindow = require('common.js').setWindow;

   exports.musicPlay = function(){
      
      var musics = ['New York','Fall Again','To Co Citim'];
      var starName = ['Giabiconi','Kenny G','Kristina'];
      var num=0;
   	  var parent = $('#content_four');
      var title = parent.find('.content_title p');
      var oAudio = parent.find('audio').get(0);

      var oPlayer = parent.find('.player');  //播放器
      var music_title = oPlayer.find('.title');//歌曲名
      var oStar = oPlayer.find('.artist'); //歌手
      var oImg = oPlayer.find('.cover');  //歌曲封面
      var music_btn = oPlayer.find('.list'); //名单按钮
      var music_list = parent.find('.music_list'); //歌曲名单
      var music_term = music_list.find('li');  //单歌

      var play_btn = oPlayer.find('.play');  //播放
      var pause_btn = oPlayer.find('.pause'); //暂停
      var pre_btn = oPlayer.find('.pre');   // 上一首
      var next_btn = oPlayer.find('.next'); //下一首
     
      var oVolume = oPlayer.find('.volume'); 
      var volume_bar = oPlayer.find('.Progress_bar');  //音量进度条
      var volume_btn = oPlayer.find('.btn');    //音量按钮
     
      var tracker = oPlayer.find('.tracker');
      var Progress_bar = oPlayer.find('.big_progress');  //时长进度
      var Progress_btn = oPlayer.find('.big_btn');    //时长控制

      setWindow(title,function(){
         title.stop().animate({top:0,opacity:1},700);
         oPlayer.addClass('anifive');
		     music_list.stop().animate({opacity:0,marginTop:'-110px'},500,function(){
		     music_list.css('display','none');
		});
      },function(){
         title.css({'top':'-80px','opacity':0});
         oPlayer.removeClass('anifive');
      });

      music_btn.click(function(){
      	 if(music_list.is(':hidden')){
      	  music_list.css('display','block');
      	  music_list.stop().animate({opacity:1,marginTop:'-10px'},700);	
      	 }else{
      	  music_list.stop().animate({opacity:0,marginTop:'-110px'},500,function(){
      	  music_list.css('display','none');
      	  });	
      	 }
      });
     
      music_term.click(function(){
      	 num = $(this).index();
      	 btn_toggle();
      	 musicPlay();
      })

      pre_btn.click(function(){
          num--;
          if(num == -1){
            num = musics.length-1;
          };
          btn_toggle();
          musicPlay();
      });

      next_btn.click(function() {
         num++;
         if(num == musics.length){
           num = 0;
         };
         btn_toggle();
         musicPlay();
      });

      play_btn.click(function(){
          oAudio.play();
          btn_toggle();
          music_term.eq(num).addClass('active');
      });

      pause_btn.click(function(){
         oAudio.pause();
         pause_btn.css('display','none');
         play_btn.css('display','block');
      })
     
      function musicPlay(){
      	oAudio.src = 'music/'+musics[num]+'.mp3';
      	oStar.text(starName[num]);
      	oImg.css('backgroundImage','url(imgs/cover'+(num+1)+'.jpg)');
        music_title.text(musics[num]);
      	oAudio.play();
        music_term.each(function(index,ele){
           $(ele).removeClass('active');
        });
        music_term.eq(num).addClass('active');
      }

      function btn_toggle(){
			play_btn.css('display','none');
			pause_btn.css('display','block');
      }

     //播放设置结束
     
     

     oVolume.click(function(e){
     	var offsetL = oVolume.offset().left;
        var L = e.pageX - offsetL;
        var scale = L/$(this).outerWidth();

		if(L <= 0){
		  L = 0;
		};

		if(L >= oVolume.outerWidth()){
		  L = oVolume.outerWidth();
		}  

		if(scale <= 0){
            scale = 0;
		}  

		if(scale >= 1){
			scale = 1;
		}

        volume_bar.css('width',scale*112+'px');
        volume_btn.css('left',scale*112 +'px');
        oAudio.volume = scale;
     });
     
     volume_btn.mousedown(function(e){
     	 var disX = oVolume.offset().left;
         $(document).mousemove(fnMove);
         $(document).mouseup(fnup);

         function fnMove(e){
         	var L = e.pageX - disX;
         	if(L <= 0){
                L = 0;
         	};

         	if(L >= oVolume.outerWidth()){
               L = oVolume.outerWidth();
         	}

         	var scale = L/oVolume.outerWidth();

            volume_bar.css('width',scale*112+'px');
            volume_btn.css('left',scale*112 +'px');
         };

         function fnup(e){
           $(document).off('mousemove',fnMove);
           $(document).off('mouseup',fnup);
         };

         return false;

     });
    
     
        tracker.click(function(e){
     	var offsetL = tracker.offset().left;
        var L = e.pageX - offsetL;
        var scale = L/$(this).outerWidth();

		if(L <= 0){
		  L = 0;
		};

		if(L >= tracker.outerWidth()){
		  L = tracker.outerWidth();
		}  

		if(scale <= 0){
            scale = 0;
		}  

		if(scale >= 1){
			scale = 1;
		}

        Progress_bar.css('width',scale*285+'px');
        Progress_btn.css('left',scale*285 +'px');
        oAudio.currentTime = scale*oAudio.duration;
     });

        oAudio.ontimeupdate = function(){
        	var scale = oAudio.currentTime/oAudio.duration;
        	Progress_bar.css('width',scale*285+'px');
        }

        oAudio.onended = function(){
         num++;
         if(num == musics.length){
           num = 0;
         };
         btn_toggle();
         musicPlay();
        }

        $(function(){
        	oAudio.play();
        	btn_toggle();
        	music_term.eq(num).addClass('active');
        })
   }

})