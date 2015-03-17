$(document).ready(function(){

	// hide messages 
	$("#error").hide();
	$("#success").hide();
	
	// on submit...
	$("#contactForm #submit").click(function() {
		$("#error").hide();
		
		//required:
		
		//name
		var name = $("input#name").val();
		if(name == ""){
			$("#error").fadeIn().text("Name required.");
			$("input#name").focus();
			return false;
		}
		
		// email
		var email = $("input#email").val();
		if(email == ""){
			$("#error").fadeIn().text("Email required");
			$("input#email").focus();
			return false;
		}


		// check email validity
		var atpos=email.indexOf("@");
		var dotpos=email.lastIndexOf(".");
		if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length)
		{
			$("#error").fadeIn().text("Invalid email address");
			$("input#email").focus();
			return false;
	        }
		
	
		// email
		var subject = $("input#subject").val();
		if(subject == ""){
			subject = "Sent from McGill IEEE - No Subject Entered";
		}

		// comments
		var comments = $("#comment").val();
		if(comments == ""){
			$("#error").fadeIn().text("Message required");
			$("textarea#comment").focus();
			return false;
		}


		var to_email = "ieee.mcgill@gmail.com";
		location.href = 'mailto:'+to_email+'?subject='+subject+'&body='+comments;

		
	});  	
	
    return false;
});

