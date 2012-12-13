
$("#loginButton").click(function() {

	console.log ("heelloooo!!!!!");
	
	var me = "nothing";
//		 FB.login() is a function.
		 FB.login(function(response) {
		 	console.log(response);
		 	if(response.authResponse) {
			 	console.log("LOGGED IN");

		 		FB.api("/me",function(response) {
		 			var me = response;
		 			console.log (me.id);
		 			//vars.jsFb = me.id; //store the ID of this facebook user to the global variable vars.jsFb
		 			sessionStorage.jsFb = me.id;

		 			console.log("API FOR ME FINISHED");
		 			$('.modal').fadeOut(300);
		 			
		 		});
		 	}
		 	else {
		 		alert("YOU HIT CANCEL, YOU ASSHOLE");
		 	}
		 });		
	});
	
