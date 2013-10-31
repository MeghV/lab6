//signup.js 
// add your JavaScript code to this file

// on doc ready 
$(function(){
	// populating State selection
	populateState();
});

// populates State input with state abbreviations
function populateState() {
	var stateSelect = $(".us-states");
	$.each(usStates, function() {
		var state = this["name"];
		var abbrev = this["abbreviation"];
		var optionText = "<option value=\"" + state + "\">" + abbrev + "</option>";
		stateSelect.append(optionText);
	});
}

/*validates that user entered Zip Code if they've 
already entered address
*/
$(".signup-form").submit(function(){
	var signupForm = $(this);
	var addr1Input = signupForm.find('input[name="addr-1"]');
	var addr1Value = addr1Input.val();
	if(addr1Value.length > 0) {
		var zipInput = signupForm.find('input[name="zip"]');
		var zipVal = zipInput.val();
		if(!(zipVal.length > 0)) {
			alert("Please enter a zipcode :)!");
			return false;
		}
	}
});

$(".cancel-signup").click(function(){
	window.location.replace("http://www.google.com");
}); //cancel-signup click
