function eventHandler(){
	console.log("eventHendler");
	function innerFunction(){
		console.log("innerFunction");
	}
	for(var i=0; i<2; i++){
		innerFunction();
	}
}