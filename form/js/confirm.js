
function loadData(){
	var name = document.getElementById("name");
	var email = document.getElementById("email");
	var phoneNumber = document.getElementById("phoneNumber");
	var age = document.getElementById("age");
	var occupation = document.getElementById("occupation");

	name.textContent = sessionStorage.firstname + " " + sessionStorage.lastname;
	email.textContent = sessionStorage.email;
	phoneNumber.textContent = sessionStorage.phoneNumber;
	age.textContent = sessionStorage.age;
	occupation.textContent = sessionStorage.occupation;
}

function cancel(){
	window.location = "index.html";
}

function init(){
	loadData();
	var cancelButton = document.getElementById("cancelButton");
	cancelButton.onclick = cancel;

}
window.onload = init;
