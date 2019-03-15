 $(function(){

	var body = $("html, body");	
	var docao = $(window).height();
	$('.top1').css({'height':docao});
	$(window).resize(function() {
		var docao = $(window).height();
		$('.top1').css({'height':docao});
		return false;
	})

 	$(".menu").click(function(){
 		$(".menulist").addClass("ra");
 		return false;
 	})
	$(".icon-out").click(function(){
 		$(".menulist").removeClass("ra");
 		
 		return false;
 	})
	$('.n1').click(function(){
    body.animate({ scrollTop:$(".top1").offset().top})

    	$(".menulist").removeClass("ra");
    return false;
});
	$('.n2').click(function(){
   $("html, body").animate({ scrollTop:$(".top2").offset().top});
    	$(".menulist").removeClass("ra");
    return false;
});
	$('.n3').click(function(){
    body.animate({ scrollTop:$(".top3").offset().top});
    	$(".menulist").removeClass("ra");
    return false;
});
	$('.n4').click(function(){
    body.animate({ scrollTop:$(".top4").offset().top});
    	$(".menulist").removeClass("ra");
    return false;
});

})  ;
 