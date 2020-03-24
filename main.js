
        
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

    // FOR THE THEMES

    var isdark;
    function changeTheme() {
        var logo = document.getElementById("logo");
        var header = document.getElementById("header");
        var main = document.getElementById("main");
        var body = document.getElementById("body");
        if (!isdark) {
            header.setAttribute("class", "darktheme");
            main.setAttribute("class", "darktheme");
            body.setAttribute("class", "darktheme");
            logo.style.color = "black"; 
            isdark = true;
        } else{
            header.removeAttribute("class", "darktheme");
            main.removeAttribute("class", "darktheme");
            body.removeAttribute("class", "darktheme");
            isdark = false;
        }
    }