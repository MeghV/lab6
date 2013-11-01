//signup.js 

// on doc ready 
$(function(){
	// makes input bar for "How Did You Hear About Us" hidden
	$('input[name="refer-other"]').css("display","none");
	// populates State select box
	populateState();
});

// populates State input with state abbreviations
function populateState() {
	var stateSelect = $(".us-states");
	$.each(usStates, function() {
		// creates new option for specific state, then appends into select box
		var optionText = "<option value=\"" + this["name"] + "\">" + this["abbreviation"] + "</option>";
		stateSelect.append(optionText);
	});

}

/* validates that user has entered Zip Code if they've 
   already entered address before submitting;
   also validates that user has enter first & last name
   and email if on older versions of Safari or IE
*/
$(".signup-form").submit(function(){
	var signupForm = $(this);
	// finds value of address box
	var addr1Value = value(signupForm, 'input[name="addr-1"]');
	// checks if address is entered
	if(addr1Value.length > 0) {
		// if addressed entered, finds value of zip code box
		var zipVal = value(signupForm, 'input[name="zip"]');
		// checks if zip code is entered
		if(zipVal.length === 0) {
			alert("Please enter a zipcode :)!");
			return false;
		}
	}

	// validates first, last, and email for older browsers that 
	// don't support "required" attribute
	validateFields($('input[name="first-name"]'));
	validateFields($('input[name="last-name"]'));
	validateFields($('input[name="email"]'));
});

// returns the value of a specific input field within the passed form
function value(form, inputField) {
	var getInput = form.find(inputField);
	return getInput.val();
}

// validates that user has entered a value in "field"
function validateFields(field) {
	var reqField = signupForm.find(field);
	var reqValue = reqField.val().trim();
	if(0 === reqValue.length) {
		alert("You must enter a " + reqFiled.attr("placeholder") + ".");
	}
}

/* opens up modal when user tries to leave 
*/
$(".cancel-signup").click(function(){
	$(".cancel-signup-modal").modal();
}); //cancel-signup click

/* redirects user to Google if they really 
   really wants to leave
*/
$('.btn-abandon').click(function(){
	window.location = "http://www.google.com";
});

/* if user selects "Other" in "How Did You Hear About Us",
   shows a new input underneath select box.
   else input remains disabled and displayless
*/
$('select[name="refer"]').change(function() {
	var referSelect = $(this);
	var otherInput = $('[name="refer-other"]');
    // if user has selected "Other", shows input underneath;
    // else keeps input disabled
	if('other' === referSelect.val().toLowerCase()) {
		otherInput.removeAttr('disabled').show().focus();
	} else {
		otherInput.attr('disabled', true).hide();
	}
});