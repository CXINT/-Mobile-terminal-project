$(function(){
    $('.love img').on("click",function(){
    	var panding=$(this).attr('src')
        var zhi=$(this).next('span').text()
        if(panding=='xuanjie/img/zan.png'){
            var o=parseInt(zhi) + parseInt(1);
            $(this).attr("src","xuanjie/img/zan01.png");
            $(this).next('span').text(o)     
		}else{
            var p=parseInt(zhi) - parseInt(1);
            $(this).attr("src","xuanjie/img/zan.png");
            $(this).next('span').text(p) 
        }               
    })
})
$(function(){
    $('.like img').on("click",function(){
    	var panding=$(this).attr('src')
        var zhi=$(this).next('span').text()
        if(panding=='xuanjie/img/zan.png'){
            var o=parseInt(zhi) + parseInt(1);
            $(this).attr("src","xuanjie/img/zan01.png");
            $(this).next('span').text(o)     
		}else{
            var p=parseInt(zhi) - parseInt(1);
            $(this).attr("src","xuanjie/img/zan.png");
            $(this).next('span').text(p) 
        }               
    })
})