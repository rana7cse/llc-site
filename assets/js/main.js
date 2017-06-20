(function ($){
	"use strict";

	jQuery(document).ready(function($){

		$(".video-play-btn").magnificPopup({
			type: 'video',
		});
		
		$(".upcoming-session-carousel").owlCarousel({
            items: 1,
            dots: false,
            nav: false,
			margin: 30,
            autoplay: true,
            loop: true
        });
		
		$(".logo-carousel").owlCarousel({
			items: 4,
			loop: true,
			nav: false,
			dots: false,
			margin: 30,
			autoplay: true,
		   }); 
		   
		    
		   
		/*   $(".project-list").owlCarousel({
			items: 3,
			loop: true,
			nav: false,
			dots: true,
			margin: 30,
			autoplay: false,
		   });   */  
		   
	
		$('.project-title li').on('click', function(){
            
            
           $(".project-title li").removeClass("active"); 
            $(this).addClass("active");
            
            
          var selector = $(this).attr('data-filter');
          $(".project-list").isotope({
            filter: selector 
          });
        });
	
	

});

jQuery(window).load(function(){
	jQuery(".project-list").isotope();
});

}(jQuery));