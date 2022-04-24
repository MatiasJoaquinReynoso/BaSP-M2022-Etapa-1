window.onload = function(){
	document.getElementById('email').addEventListener('blur',reviewEmail);
	document.getElementById('email').addEventListener('focus',clearEmail);
	document.getElementById('send').addEventListener('click',logIn);
	document.getElementById('password').addEventListener('blur',reviewPassword);
	document.getElementById('password').addEventListener('focus',clearPassword);

	// blur = valido - focus = error
	
  function clearEmail(){
	var email = document.getElementById('email'); //Getting "focus" event in the input email.
	document.getElementById('wrong-email').textContent=' ';
	email.value = '';
  }
  function reviewEmail(){
	var email = document.getElementById('email').value;
	var validateEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
	if(!validateEmail.test(email)) { // I've put the "!" in order to validate if the condition is FALSE
	  document.getElementById('wrong-email').textContent='The email is not valid';
	}
  }
  function logIn(event) {
	event.preventDefault();
	var email = document.getElementById('email').value;
	var validateEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
	if(!validateEmail.test(email)) {
	  document.getElementById('email');
	}
	reviewPassword();
	return  window.confirm(' Valid user ');;
  }
  
  function clearPassword(){
	var password = document.getElementById('password'); 
	document.getElementById('wrong-password').textContent=' ';
	password.value = '';
  }
  function reviewPassword(){
	var password = document.getElementById('password').value;
	var validatePassword = ['a','b','c',"d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z",
	"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z",'0'];
	var validatePassword2 = ['1','2','3','4','5','6','7','8','9']
	var passwordToArray = password.split(''); 
	var error = false; //This is in order to display the alert or not. We presume that the password is correct.
	var isLetter = false;
	var isNumber = false;

	for (var i=0; i < password.length; i++){
	  var findLetter = validatePassword.indexOf(passwordToArray[i]);
	  var findNumber = validatePassword2.indexOf(passwordToArray[i]);
	  if(findLetter != -1){
		isLetter = true;
	  }
	  if(findNumber != -1){
		isNumber = true;
	  }
	  if (findLetter == -1 && findNumber == -1) {
		error = true; //the loop didn't find a letter or a number
		break;
	  }
	}
	if (error == true){
	  document.getElementById('wrong-password').textContent="The password is not valid";
	}else if(isLetter == false || isNumber == false){
	  document.getElementById('wrong-password').textContent="The password is not valid";
	}
  }
}