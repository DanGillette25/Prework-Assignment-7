// When the factButton is clicked
$("#factButton").on("click", function() {
	// Generate a random number between 1 and 4 and tie it to the booFacts array
	var number = Math.floor((Math.random() * booFacts.length));
	// Display the value from the booFacts array relative to the number that was generated
	$("#factText").text(booFacts[number])
})

// This array contains the randon Boo Facts
var booFacts = ["Boo is a pomeranian, Boo's best friend is another pomeranian named Buddy", "Boo the Pomeranian was born on March 16, making him a Pisces", "Boo's favourite food is grass", "Boo has released two books",]

// When the textPink button is pressed
$("#textPink").on("click", function() {
	// Change funText to pink.
	$("#funText").css("color", "pink")
})

// When the textOrange button is pressed
$("#textOrange").on("click", function() {
	// Change funText to orange.
	$("#funText").css("color", "orange")
})

// When the textGreen button is pressed
$("#textGreen").on("click", function() {
	// Change funText to green.
	$("#funText").css("color", "green")
})


// When the boxGrow button is clicked 
$("#boxGrow").on("click", function() {
	// Increase the size of the box.
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})

// When the boxShrink button is clicked
$("#boxShrink").on("click", function() {
	// Decrease the size of the box.
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})