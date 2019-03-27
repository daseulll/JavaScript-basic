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
			div.onmouseover = function(){
				var element = this;
				this.timerid = setTimeout( function(){
					element.classList.add("image-magnified");
				}, 600 );
			}
			div.onmouseout = function(){
				clearTimeout(this.timerid);
				this.classList.remove("image-magnified");
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

function slideShow(btn){
	// image-magnified 클래스를 순차적으로 추가하며 슬라이드쇼 효과를 낸다
	var images = document.getElementsByClassName("image");
	// 확대된 이미지를 축소하고 다음 이미지를 확대
	var index = 0;
	images[index].classList.add("image-magnified");

	var intervalid = setInterval( function(){
		images[index].classList.remove("image-magnified");
		index += 1;
		if( index < images.length ){
			images[index].classList.add("image-magnified");
		}
		else{
			clearInterval(intervalid);
		}
	}, 1000 );
}
