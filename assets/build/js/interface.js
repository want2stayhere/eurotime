$(document).ready(function() {
	$('body').on('click','.menu-btn', function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		//$('.menu-mobile').slideToggle();
	});

	//TABLE-WRAP
	if ($("table").length>0) {
		$("table").wrap("<div class='table-wrap'></div>");
	}
});



// functions
function test(item){
  	
}