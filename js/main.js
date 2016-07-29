$( document ).ready(function() {

	// Menu Toggle Script
	$('[data-toggle="tooltip"]').tooltip();

	// controle the scrolling events
	$(window).scroll(function() {

		var $this = $(this)

		if ($this.scrollTop() > 0) {
			$(".navbar").addClass("scrolled");
			$(".cta-nav").addClass("scrolled");
		} else {
			$(".navbar").removeClass("scrolled");
			$(".cta-nav").removeClass("scrolled");
		}    
	})

	// toggle side menu on mobile
	$("#menu-toggle").click(function(e) {
    	e.preventDefault();
   	 	$("#wrapper").toggleClass("toggled");
    	$(".navbar").toggleClass("navbar-slide");
	});

});