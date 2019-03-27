var req = new XMLHttpRequest();
req.open("GET", "./json/image_list.json");
req.onreadystatechange = function(){
	if( this.readyState == 4 ){
		// console.log(this.response);
		var data = JSON.parse(this.response);
		for(var i=0 ; i<data.length ; i++){
			var div = document.createElement("div");
			div.setAttribute("class", "image");
			div.onclick = function(){
				// if( this.getAttribute("class").indexOf("image-selected") == -1 ){
				//    // indexOf에 해당 문자열이 없으면 -1 반환
				// 	this.setAttribute("class", "image image-selected");
				// }
				// else{
				// 	this.setAttribute("class", "image");
				// }
				this.classList.toggle("image-selected");
			}
			var img = document.createElement("img");
			img.src = data[i];
			div.appendChild(img);
			document.body.appendChild(div);
		}
	}
}
req.send();

function selectAll(btn){
	var images = document.getElementsByClassName("image");
	for( var i=0 ; i<images.length ; i++){
		if( btn.value == "Select All" ){
			images[i].classList.add("image-selected");
		}else{
			images[i].classList.remove("image-selected");
		}
	}
	if( btn.value == "Select All" ){
		btn.value = "Unselect All";
	}else{
		btn.value = "Select All";
	}
}