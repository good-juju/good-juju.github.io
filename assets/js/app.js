$(document).ready(function() {
	$('#menu-toggle').on('click', function(e) {
	      $('#navigation-container').toggleClass("nav-hide");
				if ($("#masthead-sub").length > 0) {
				  $('#masthead-sub').toggleClass("nav-expand");
				}
	      e.preventDefault();
	    });
});