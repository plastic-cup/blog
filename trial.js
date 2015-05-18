function appendText(){
	var paragraph = document.createElement("p");
	var textnode = document.createTextNode(i + " " + "Water");
	paragraph.appendChild(textnode);
	document.body.appendChild(paragraph);
}
for(var i = 1; i <= 10000; i++){
	appendText();
}