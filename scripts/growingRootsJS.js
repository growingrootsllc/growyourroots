$(document).ready(function(){
	$("#submitContactForm").on('click', function(){
		submitEmailRequest();
	});
	

});

$(window).scroll(function(){
	var nav = document.querySelector('#navbar');
	if(this.scrollY <= 10) nav.className = 'navbar fixed-top navbar-expand-lg navbar-dark navbar-transparent reverseText-Bold'; else nav.className = 'navbar fixed-top navbar-expand-lg navbar-dark navbar-transparent-scorlled reverseText-Bold';

});

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
function checkIfBackgroundColorRequired(){
	var windowSize = getWindowSize();
	addBackgroundColorToNavbar(windowSize);
}

function submitEmailRequest(){

	var nameOnSubmission = getNameFromRequest();
	var emailAddress = getEmailAddress();
	var phoneNumber = getPhoneNumber();
	var preferredContact = getPreferredContact();
	var message = getMessage();
	
	var templateParams = createTemplateParams(nameOnSubmission, emailAddress, phoneNumber, preferredContact, message);

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

function createTemplateParams(name, email, phone, contact, userMessage){
	var templateParams = {
		nameOnSubmission: name,
		emailAddress: email, 
		phoneNumber: phone, 
		preferredContact: contact, 
		message: userMessage
	}

	return templateParams;
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

