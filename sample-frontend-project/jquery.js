
  window.onload = function() {
   $("#button1").fadeTo("fast", 0.5);
   }

 
function myfunction1() {

    document.getElementById("maintb").style.backgroundImage = "  url('photos/tomato plate.png')  ";
    document.getElementById("b-image1").src = "photos/start point.png";
    $("#button1").fadeTo("fast", 0.4);
    $("#button2").fadeTo("fast", 1);
    $("#button3").fadeTo("fast", 1);
    
	console.log("button1-pressed");
}


function myfunction2() {
     
    document.getElementById("maintb").style.backgroundImage = "  url('photos/chili bowl.png')  ";
    document.getElementById("b-image1").src = "photos/special pack.png";
    $("#button2").fadeTo("fast", 0.4);
    $("#button3").fadeTo("fast", 1);
    $("#button1").fadeTo("fast", 1);

	console.log("button2-pressed");
}

function myfunction3() {
     
    document.getElementById("maintb").style.backgroundImage = "  url('photos/strawberries-bowl.png')  ";
    document.getElementById("b-image1").src = "photos/20percent.png";
    $("#button3").fadeTo("fast", 0.4);
    $("#button1").fadeTo("fast", 1);
    $("#button2").fadeTo("fast", 1);
	console.log("button3-pressed");
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}