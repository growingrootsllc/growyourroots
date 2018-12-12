$(document).ready(function(){
	$("#submitContactForm").on('click', function(){
		validateForm();
	});
	checkIfBackgroundColorRequired();

});

//nav bar script for green bar on window size and resizing
$(window).scroll(function(){
	var nav = document.querySelector('#navbar');
	if(this.scrollY <= 10) nav.className = 'navbar fixed-top navbar-expand-lg navbar-dark navbar-transparent reverseText-Bold'; else nav.className = 'navbar fixed-top navbar-expand-lg navbar-dark navbar-transparent-scorlled reverseText-Bold';

});
function checkIfBackgroundColorRequired(){
	var windowSize = getWindowSize();
	addBackgroundColorToNavbar(windowSize);
}
function getWindowSize(){
	return $(window).width();
}
function addBackgroundColorToNavbar(windowSize){
	if(windowSize < 975){
		var navbar = document.querySelector('#navbarSupportedContent');
		navbar.className = 'collapse navbar-collapse bg-green';
	}
	else if(windowSize >= 975){
		var navbar = document.querySelector('#navbarSupportedContent');
		navbar.className = 'collapse navbar-collapse';
	}
}

//script for email
function submitEmailRequest(){

	var nameOnSubmission = getNameFromRequest();
	var emailAddress = getEmailAddress();
	var phoneNumber = getPhoneNumber();
	var preferredContact = getPreferredContact();
	var message = getMessage();
	var descriptionOfUser = getDescriptionOfUser();
	
	var templateParams = createTemplateParams(nameOnSubmission, emailAddress, phoneNumber, preferredContact, message, descriptionOfUser);

	sendEmail(templateParams);
}

function sendEmail(templateParams){

emailjs.send('default_service', 'contactus', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });

}

function createTemplateParams(name, email, phone, contact, userMessage, descriptionOfUser){
	var templateParams = {
		nameOnSubmission: name,
		emailAddress: email, 
		phoneNumber: phone, 
		preferredContact: contact, 
		message: userMessage,
		userDescription: descriptionOfUser
	}

	return templateParams;
}

function getDescriptionOfUser(){
	return $("#description").val();
}

function getNameFromRequest(){
	return $("#userName").val();
}

function getEmailAddress(){
	return $("#emailAddress").val();
}
function getPhoneNumber(){
	return $("#phoneNumber").val();
}
function getPreferredContact(){
	return $("#contactMethod").val();
}
function getMessage(){
	return $("#userMessage").val();
}

//script for form validation
function validateForm(){
	var isAPhoneNumber = false;
	var isAEmail = false;
	var isASelection = false;

	isAPhoneNumber = checkPhoneNumber();
	isAEmail = checkEmail();
	isASelection = checkUserDescription();

	if(isAPhoneNumber == true && isAEmail == true && isASelection == true){	
		$("#emailError").hide();
		$("#phoneNumberError").hide();
		$("#descriptionError").hide();
		submitEmailRequest();
		alert('Email Sent');
	}
}
function checkEmail(){
	var userInputEmail = $("#emailAddress").val()
	var isOkayToSubmit = false;

	if(userInputEmail.includes('@')){
		isOkayToSubmit = true;
	}
	else {
		$("#emailError").show();
	}

	return isOkayToSubmit;
}
function checkPhoneNumber(){
	var userInputPhoneNumber = $("#phoneNumber").val()
	var phoneNumberRegEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
	var isAPhoneNumber = userInputPhoneNumber.match(phoneNumberRegEx);
	var isOkayToSubmit = false;
	
	if (isAPhoneNumber == null) {
		$("#phoneNumberError").show();
	}
	else {
		isOkayToSubmit = true;
	}
	return isOkayToSubmit;
}

function checkUserDescription(){
	var descriptionSelection = $('#description').val();
	var isOkayToSubmit = false;
	if(descriptionSelection == "--Make Selection--"){
		$('#descriptionError').show();
	}
	else{
		isOkayToSubmit = true;
	}
}