// this is a change that git will track


// while loop//
var counter = 0; 
while (counter <= 10){
	console.log("Whats up Nick");
	counter++;
}

alert("I'll be back" + counter);


//for loops// accesses only 3 names because index is set to 3 so a 4th name wouldnt access.
// unless index is set to 4
var names = ["nick", "jessica", "ryder"];

for (var i = 0; i < 3; i++) {
	console.log(names[i]) + ("my friends");

	}



// .length method used to include all names of array.// 
var names = ["nick", "jessica", "ryder", "cindy"];

for (var i = 0; i < names.length; i++) {
	console.log(names[i] + " is a Sith Lord!");

	} 



var shirtSize = ["small", "medium", "large","XtraLrg"]; 
for (var i = 0; i < shirtSize.length; i++) {
    if (shirtSize[i] === "medium"){
        console.log(shirtSize[i]);
    }
}

var thompson = ["Dahl,", "Kista", "Ashley", "Jessica", "Alex", "Jessica"];
for (var i = 0; i < thompson.length; i++) {
	if (thompson[i] === "Jessica"){
		console.log(thompson[i]); 
	}
}


/////// object //////.

var thompson = {
	Dad: "Dahl",
	Mom: "Krista",
	Daughter1: "Jessica",
	Daughter2: "Ashley", 
	son: "Alex", 
	grandson: "Ryder",
	soninlaw: "Paul",
	bamfsoninlaw: "Nick AKA Krista's favorite",
    anyname: function(){
    	alert("Howdy friends!");
    }


for (var i =0; i < 0; i++){
	
}


//////loop through object/////////////////////////////////////


var nick = [
  { name: "Nick",
    lastName: "Celaya", 
    age: 28,
  
  },
  
  { name: "Jessica",
    lastName: "Celaya",
    age: 25,
  },
  {
    name:"Pete",
    lastName:"Celaya",
    age: 5,
  }

  
  ];
  
 // remove index from nick to array and both objects.  
for(var i = 0; i < nick.length; i++){ 
  console.log(nick[i]); {
    if (nick[i] < name) {
    }
  }
}

///////////////////////////////////////////////////////////////////
































$(document).ready(function(){});    ///// jQuery 
$("#red-text").addClass("shake"); 
$(".btn").addClass("shake");
$(document).ready(function(){});
$(document).ready(function(){}); 







