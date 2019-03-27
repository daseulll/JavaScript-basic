function errfunction(){
	throw "error";
	console.log("this code will not be executed");
}

function func(){
	try{
		//정상적으로 동작할 코드
		console.log("function - 1")
		// throw로 에러를 발생시킬 수 있음 catch에 전달할 값을 입력 가능
		errfunction();
		console.log("function - 2")
	}
	finally{
		// try/catch 모든상황에서 마지막으로 실행될 코드
		console.log("finally in function - this code will always be executed");
	}
}


try{
	//정상적으로 동작할 코드
	console.log("try - 1")
	// throw로 에러를 발생시킬 수 있음 catch에 전달할 값을 입력 가능
	func();
	console.log("try - 2")
}
catch(e){
	// 에러가 발생했을 경우 실행될 코드
	console.log("catch error : ", e);
}
finally{
	// try/catch 모든상황에서 마지막으로 실행될 코드
	console.log("finally - this code will always be executed");
}