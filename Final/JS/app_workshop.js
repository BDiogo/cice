
$(document).ready(function(){
	height = $(window).scrollTop();
	w_height=$("#js-first-wrapper").offset().top;
	if(height >= w_height/1.1){
		$(".hamb__element").removeClass("hamb--white");
		$(".hamb__element").addClass("hamb--black");
	}else{
		$(".hamb__element").removeClass("hamb--black")
		$(".hamb__element").addClass("hamb--white");
	}
	$("#js-hamb").click(function(){
		$(".menu--full").toggleClass("menu--hidden");
		if($(".menu--full").hasClass("menu--hidden")){
			
			$(".hamb__element").removeClass("hamb--black")
			$(".hamb__element").addClass("hamb--white");

		}else{
			$(".hamb__element").removeClass("hamb--black")
			$(".hamb__element").addClass("hamb--white");
		}
		
	});
	$('.menu--full a').bind('click', function(event) {
		$(".menu--full").toggleClass("menu--hidden");
		var $anchor = $(this);
		$(".menu--full li a").removeClass("menu--full_active");
		$(this).addClass("menu--full_active");

		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});

});


$.fn.extend({
	qcss: function(css) {
		return $(this).queue(function(next) {
			$(this).css(css);
			next();
		});
	}
});
/**--End Extra Functions--**/
