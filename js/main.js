$( document ).ready(function() {

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

});