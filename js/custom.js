// JavaScript Document
$(document).ready(function(){
	$("#pull").click(function(){
		$(".nav ul,.left_msg,.search").slideToggle();
	})
	$(".search img").click(function(){
		$(".search form").slideToggle();
	})
	$(".col_1_3 h3").click(function(){
		$(this).parent().addClass("active").siblings().removeClass("active");
		return false;
	})
$(".left_pull").toggle(function(){
		$(".left_top").slideDown();
		$(this).css("text-indent","-9999px")

	},function(){
		$(".left_top").slideUp();
		$(this).css("text-indent","0")

	});
	
	$(".servOnline").click(function(){
	  openZoosUrl('chatwin');
	});
	
});
