'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		/*$('.jumbotron h1').text("Experience Chan! It's not a lot of questions.\n"+
			"Too many questions is the Chan disease.\n"+
			"The best way is just to observe the noise of the world.\n"+
			"The answer to your questions?\n"+
			"Ask your own heart.");*/
		$("#testjs").text("Please wait...");
		$(".jumbotron p").addClass("active");
		$(".jumbotron p").toggleClass("active");
	});
	$("a.thumbnail").click(projectClick);
    function projectClick(e) {
    	e.preventDefault();
    	var containingProject = $(this).closest(".project");
	    var description = $(containingProject).find(".project-description");
	    if (description.length == 0) {
	       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
	    } else {
	       description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
	    }
	}
	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}