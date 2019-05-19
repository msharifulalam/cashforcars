$(document).ready(function(){
	$('#menu').slicknav();
	//add
	//
	$(".cross").click(function(){
		$(".add").hide(2000);
		$(".container , .slider_area").css('opacity','1');
	});
  
	$(".add img").click(function(){
		$(".add").hide(2000);
		$(".container , .slider_area").css('opacity','1');
	});
});