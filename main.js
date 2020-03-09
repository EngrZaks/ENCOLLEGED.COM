
		// function ShowSignUp() {
			
		// 	document.getElementById('signup_content').style.height = "800px";
		// 	document.getElementById('signup_content').style.padding = "12px";
		// }
		// function closeSignUp() {
		// 	document.getElementById('signup_content').style.height = "0";
		// 	document.getElementById('signup_content').style.padding = "0";
        // }
        
	function ShowSignUp() {
        var x = document.getElementById("signup_content");
        if (x.style.display == "none") {
            x.style.display = "block";
            x.style.padding = "10px";  
        } else {
            x.style.display = "none"; 
            x.style.padding = "0";
        }
    }