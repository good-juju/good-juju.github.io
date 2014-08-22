$(document).ready(function() {
	$('#menu-toggle').on('click', function(e) {
	      $('#navigation-container').toggleClass("nav-hide"); //you can list several class names 
	      e.preventDefault();
	    });
});