// JavaScript Document
$(document).ready(function(e) {
//document.addEventListener("deviceready",function(){
	
	$ ('#btn_comenzar') .on ('tap' , function () { 
    navigator .vibrate (1000);
 });
	
	
	
	 $('#uno').on('click',function () {
	  
	  
	 $('#numeros').html ($('#numeros').html() + ' 1, ');
	 });
	 
	 $('#dos').on('click',function () {
		  
	 $('#numeros').html ($('#numeros').html() + ' 2, ');
	 });
	 
	 $('#tres').on('click',function () {
		  
	 
	 $('#numeros').html ($('#numeros').html() + ' 3, ');
	 });
	 
	 $('#cuatro').on('click',function () {
		  
		  
	 $('#numeros').html ($('#numeros').html() + ' 4, ');
	 });
	
	
//}); 
});

