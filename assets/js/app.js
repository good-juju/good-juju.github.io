$(document).ready(function() {
	$('#menu-toggle').on('click', function(e) {
	      $('#navigation-container').toggleClass("nav-hide");
				$('#menu-icon').toggleClass("menu-icon-close");
				if ($("#masthead-sub").length > 0) {
				  $('#masthead-sub').toggleClass("masthead-expand");
				}
	      e.preventDefault();
	    });
});