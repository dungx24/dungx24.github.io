function init(){
	var htmlBtn = document.getElementById("btn");
	htmlBtn.onclick = convertButtonClick;
	var h3_content = document.getElementsByTagName("h3");
	h3_content[0].onclick = h3Clicked
}

function changeContent(id, changeTo){
	var content = document.getElementById(id);
	content.textContent = changeTo;
	return content.textContent;
}

function convertButtonClick(){
	var usd = prompt("Enter USD: ");
	var vnd = usd*25;
	changeContent("message", usd + " (USD) is equal to: " + vnd + "k (VND)");
}

function h3Clicked(){
	alert("You clicked h3");
}

window.onload = init;
