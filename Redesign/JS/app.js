
$(document).ready(function(){
	$("#js-hamb").click(function(){
		$(".menu--full").toggleClass("menu--hidden");
	});
	$('.menu--full a').bind('click', function(event) {
		$(".menu--full").toggleClass("menu--hidden");
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

	$(window).scroll(function() {
    height = $(window).scrollTop();
		w_height=$("#js-first-wrapper").offset().top;
		if(height >= w_height/3){
			$(".hero__side__text, .underline").addClass("text--black");}
			else{$(".hero__side__text, .underline").removeClass("text--black");}

		if(height >= w_height/1.1){
			$(".hamb__element").removeClass("hamb--white");
			$(".hamb__element").addClass("hamb--black");
		}else{
			$(".hamb__element").removeClass("hamb--black")
			$(".hamb__element").addClass("hamb--white");
		}
		/**--Wrappers top--**/
		first_wrapper=$("#js-first-wrapper").offset().top;
		if(height >= first_wrapper){
			console.log("content");
		}
		/**--**/
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
