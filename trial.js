function appendText(){
	var paragraph = document.createElement("");
	var textnode = document.createTextNode(i + " " + "Water");
	paragraph.appendChild(textnode);
	document.body.appendChild(paragraph);
}
for(var i = 1; i <= 1000; i++){
	insertPic();
}

function insertPic(){
  
  var element = document.createElement('img');
  console.log(element);
  element.src = 'images/mina.jpg' + i++;
  //element.onload = function (){ insertPic() };
  document.body.appendChild(element);
  
 }