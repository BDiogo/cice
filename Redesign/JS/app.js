
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
		var scroll= $(window).scrollTop();
		var first = $('#particles')[0].scrollHeight-50;
		if($(".menu--full").hasClass("menu--hidden")){
			if(scroll>first){
				console.log("black");
				$(".hamb__element").removeClass("hamb--white")
				$(".hamb__element").addClass("hamb--black");
			}else{
				console.log("white");

				$(".hamb__element").removeClass("hamb--black")
				$(".hamb__element").addClass("hamb--white");
			}
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

	$(window).scroll(function() {
		var particles=$('#particles')[0].scrollHeight;
		var sobre= $('#js-first-wrapper')[0].scrollHeight ;
		var programacao= $('#js-second-wrapper')[0].scrollHeight;
		var workshops= $('#js-third-wrapper')[0].scrollHeight;
		var exposicao= $('#js-fourd-wrapper')[0].scrollHeight;

		var top_particles=0;
		var top_sobre= particles ;
		var top_programacao= top_sobre+ sobre;
		var top_workshops= top_programacao +programacao;
		var top_exposicao=top_workshops+workshops;

		var active="";
		

		height = $(window).scrollTop();

		w_height=$("#js-first-wrapper").offset().top;
		if(height >= w_height/3){
			$(".hero__side__text, .underline").addClass("text--black");}
			else{$(".hero__side__text, .underline").removeClass("text--black");}


			// só muda a cor quando do hamb quando o menu esta escondido
			if($(".menu--full").hasClass("menu--hidden")){
				if(height >= w_height/1.1){
					$(".hamb__element").removeClass("hamb--white");
					$(".hamb__element").addClass("hamb--black");
				}else{
					$(".hamb__element").removeClass("hamb--black")
					$(".hamb__element").addClass("hamb--white");
				}
			}
			/**--Wrappers top--**/
			first_wrapper=$("#js-first-wrapper").offset().top;
			if(height >= first_wrapper){
				active="";
			}

			if(height >= top_sobre && height < top_programacao){
				if(active!="sobre"){
					active="sobre";
					$(".menu--full li a").removeClass("menu--full_active");
					$('a[href="#js-first-wrapper"]').addClass("menu--full_active");
					
				}
			}
			else if(height >= top_programacao && height < top_workshops){
				if(active!="programacao"){
					active="programacao";
					$(".menu--full li a").removeClass("menu--full_active");
					$('a[href="#js-second-wrapper"]').addClass("menu--full_active");
				}
			}
			else if(height >= top_workshops && height < top_exposicao){
				if(active!="workshops"){
					active="workshops";
					$(".menu--full li a").removeClass("menu--full_active");
					$('a[href="#js-third-wrapper"]').addClass("menu--full_active");
					
				}
			}
			else if(height >= top_exposicao ){
				if(active!="exposicao"){
					active="exposicao";
					$(".menu--full li a").removeClass("menu--full_active");
					$('a[href="#js-fourd-wrapper"]').addClass("menu--full_active");
					
				}
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
