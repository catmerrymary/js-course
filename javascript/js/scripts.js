var greeting = "Hello, ";
var name = "Mary";
var doButton = document.querySelector("#do_button"); 


function sayHello(){
	console.info(greeting + name);
	alert(greeting + name);
}


//doButton.onclick = wordBlanks;



//alert("Hello from the console!");
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  console.info("hello from Wordblanks");
  var result = "The " +myAdjective+" "+myNoun+" "+myVerb+" "+myAdverb+", "+greeting;

  // Your code above this line
  alert(result);
  return result;
  
}

// Change the words here to test your function
doButton.onclick = function() {
	console.info("HELLOOOO");
	wordBlanks("dog", "big", "ran", "quickly");
}