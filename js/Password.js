let input = document.querySelector(".pass");
let button = document.querySelector(".but");
button.onclick = function () {
	let type = input.getAttribute("type");
	
	if (type === "password") {
		button.innerHTML = "hide";
		input.setAttribute("type" , "text")
	}else {
		button.innerHTML = "show";
		input.setAttribute("type" , "password")
	}
	
}