function appendText(){
	var paragraph = document.createElement("");
	var textnode = document.createTextNode(i + " " + "Water");
	paragraph.appendChild(textnode);
	document.body.appendChild(paragraph);
}
for(var i = 1; i <= 2000; i++){
	insertPic();
}
var i = 0;
function insertPic(){
  
  var element = document.createElement('img');
  console.log(element);
  element.src = 'images/mina.jpg' + i++;
  //element.onload = function (){ insertPic() };
  document.body.appendChild(element);
  
 }