function saveData(){
	var firstname = document.getElementById("firstname").value;
	sessionStorage.firstname = firstname;
	var lastname = document.getElementById("lastname").value;
	sessionStorage.lastname = lastname;
	var email = document.getElementById("email").value;
	sessionStorage.email = email;
	var phoneNumber = document.getElementById("phoneNumber").value;
	sessionStorage.phoneNumber = phoneNumber;
	var age = document.getElementById("age").value;
	sessionStorage.age = age;

	var occupationChoices = document.getElementById("occupation").getElementsByTagName("input");
	for (i=0; i<occupationChoices.length; i++){
		if (occupationChoices[i].checked == true){
			sessionStorage.occupation = occupationChoices[i].value;
		}
	}

}

function prefillData(){
	if (sessionStorage.firstname != null){
		document.getElementById("firstname").value = sessionStorage.firstname;
		document.getElementById("lastname").value = sessionStorage.lastname;
		document.getElementById("email").value = sessionStorage.email;
		document.getElementById("phoneNumber").value = sessionStorage.phoneNumber;
		document.getElementById("age").value = sessionStorage.age;

		var occupationChoices = document.getElementById("occupation").getElementsByTagName("input");
		for (i=0; i<occupationChoices.length; i++){
			if (occupationChoices[i].value == sessionStorage.occupation){
				occupationChoices[i].checked = true;
			}
		}
	}

}

function init(){
	var regForm = document.getElementById("registerForm");
	regForm.onsubmit = saveData;
	prefillData();
}
window.onload = init;