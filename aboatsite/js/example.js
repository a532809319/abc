define('example.js',function(require,exports,module){
    
    var $ = require('jquery.js');
    var setWindow =  require('common.js').setWindow;

    exports.example = function(){

    	var parent = $('#content_three');
        var title = parent.find('.content_title p');

        var alist = parent.find("li:gt(0)");
        var bigImg = parent.find("li:first");
 
        var arr = [];
        var offok = true;
        
        for(var i=500;i>0;i-=50){
           arr.push(i,-i);
        };

        arr.push(0);

        function shake(obj,attr){
            if(!offok){
              return;
            }

            var pos = obj.position()[attr];
            var num = 0;

            clearInterval(obj.shake);
            obj.shake = setInterval(function(){
                obj.css(attr,pos+arr[num]);
                num++;
                if(num == arr.length){
                   clearInterval(obj.shake);
                   offok = true;
                }
            },50);
        }


        
        alist.addClass('css3d');

        setWindow(title,function(){
            title.animate({top:0,opacity:1},1000);
            bigImg.animate({opacity:1},700);  
        },function(){
            title.css({'top':'-80px','opacity':'0'});
        })

        alist.each(function(index,ele){        	
            setWindow($(ele),function(){
              alist.addClass('active');
            },function(){
              alist.removeClass('active');
            })
        });
        
        alist.click(function(){
            clearInterval($(this).shake);
            shake($(this),'left');
        })
       
    } 
})