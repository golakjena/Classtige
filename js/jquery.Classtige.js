;(function($){
	function mobileNav(){
		$(".btnMobileNav").on("click", function(){
			var left = parseInt($(".topNav").css("left"));
			console.log(left);
			if(left == "-180"){
				$(this).stop(true, true).animate({
					left:180
				}, 300);
				$(".topNav").stop(true, true).animate({
					left:0
				}, 300);
			}
			else{
				$(this).stop(true, true).animate({
					left:0
				}, 300);
				$(".topNav").stop(true, true).animate({
					left:-180
				}, 300);
			}
		});
	}



	$(function(){
		mobileNav();
	});

})(jQuery);




