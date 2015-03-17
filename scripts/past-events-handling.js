$(document).ready(function(){

	// hide collapse
	$(".event_collapse").hide();

	$(".comments").hide();

	$(".meta-google-calendar").hide();


	$('a.event_expand').click( function() {
        var getID = $(this).attr("id");  
		var getCommentID = getID.slice(0,13);

	 	$('#' + getCommentID).fadeIn();
		$("#" + getID).hide();
		$('#' + getCommentID + "_collapse").show();
		return false; 
	});

	$('a.event_collapse').click( function() {
        var getID = $(this).attr("id");  
		var getCommentID = getID.slice(0,13);

	 	$('#' + getCommentID).fadeOut();
		$("#" + getID).hide();
		$('#' + getCommentID + "_expand").show();
		return false; 

	});


});

