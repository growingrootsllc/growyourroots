$(document).ready(function(){


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

  