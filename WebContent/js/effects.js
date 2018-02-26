////PRELOADER
//$(window).on("load", function() {
//	// executes when complete page is fully loaded, including all frames, objects and images
//	$("#preloader").fadeOut("slow",function() {
//		$(this).remove();
//	});
//});

//INPUT LOGIN COLOR
$(function() {
    $('input:required,textarea:required').on('blur', function() {
       if($(this).val()!=='') {  //assuming the form doesn't have some fields populated by default.
         $(this).addClass('green-border');
       } else {
         $(this).removeClass('green-border');
       }
   });
});

$(document).ready(function() {
		
	$("#tutorialDialog").modal("show");
		
//	$("#cambiaColore").click(function() {
//	    $("#pannelloColori").toggle();
//	});
	
//	BUBBLE
    var $element = $('#bubble');
    var phrases = [
        'Prenotati subito!',
        'cosa aspetti?',
        'Affrettati e assicurati la tua prenotazione...',
        '...in modo semplice e veloce.'
    ];
    var index = -1;
    (function loopAnimation() {
        index = (index + 1) % phrases.length;
        bubbleText({
            element: $element,
            newText: phrases[index],
            letterSpeed: 70,
            callback: function() {
                setTimeout(loopAnimation, 1200);
            },
        });
    })();
   
});

function changeColor(c) {	
	 $(".navbar").css("background-color",c); 
	 $(".nav-item #navbar-text").css("background-color",c); 
}
	


