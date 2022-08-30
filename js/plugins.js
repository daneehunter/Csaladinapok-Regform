$(document).ready(function() {

	var current_fs, next_fs, previous_fs;
	var left, opacity, scale;

	$(".next").click(function(){

		current_fs = $(this).parent();
		next_fs = $(this).parent().next();

		// Activate next step 
		$(".progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

		// show next fieldset
		next_fs.show();

		// hide current fieldset
		current_fs.animate({opacity: 0}, {
			step: function(now, mx){
				// scale current_fs down 80%
				scale = 1 - (1 - now) * 0.2;

				// bring next_fs from right 50%
				left = (now * 50) + "%";

				// increase opacity of next_fs to 1 as it moves
				opacity = 1 - now;
				current_fs.css({"transfrom": "scale(" + scale + ")"});
				next_fs.css({"left": left, "opacity": opacity });
			},
			duration: 800,
			complete: function(){
				current_fs.hide();
			},
			easing: "easeInOutBack"
		})

	})

	$(".previous").click(function(){

		current_fs = $(this).parent();
		previous_fs = $(this).parent().prev();

		// Activate next step 
		$(".progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

		// show next fieldset
		previous_fs.show();

		// hide current fieldset
		current_fs.animate({opacity: 0}, {
			step: function(now, mx){
				// scale current_fs down 80%
				scale = 0.8 + (1 - now) * 0.2;

				// bring next_fs from right 50%
				left = (( 1 - now ) * 50) + "%";

				// increase opacity of next_fs to 1 as it moves
				opacity = 1 - now;
				current_fs.css({"left": left});
				previous_fs.css({"transfrom": "scale(" + scale + ")", "opacity": opacity });
			},
			duration: 800,
			complete: function(){
				current_fs.hide();
			},
			easing: "easeInOutBack"
		})
	})



	/// note dwon Mult select
	$("select[multiple]").focus(function() {

		$(this).next(".bg-info").show(400).delay(3000).hide(400);
	})


});