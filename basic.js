console.log(20);

var name = "i am rayhan";
console.log(name.toUpperCase());


var text ="i am a student ,my passion is to be a coder"
console.log(text.indexOf("student"));
console.log(text.split(" "));

//object reverse
function stringReverese(str) {
    return str.split('').reverse().join('');
 };

 console.log(stringReverese('Hello World!'));
 
 
//convert inch to feet
 function converter(inchconvert){
	 document.getElementById("output").innerHTML=inchconvert/12;
 }

// leap year
function leapp(year){
	if((year%100 != 0) && (year%4 == 0) || (year%400 == 0)){
		document.getElementById("leapOutput").innerHTML=" Hurray! Leap year";
	}else{
		document.getElementById("leapOutput").innerHTML=" oh! shit not Leap year";
	}
}


//factorial
	function fac(n){
		var fact = n;
		 for(var i =1; i<=n;i++){
			 var fact = fact*i;
		 }
		return fact;
	}
	var result= fac(10)
	console.log(result);

 //another way of finding factorial
	 function factorial(n){
		var fact = 1;
		for(var i = 1; i <= n; i++ /*var i = n; i >= 1; i--*/){
			var fact = fact*i;
		}
		document.getElementById("factOutput").innerHTML=fact;
	}
	
	
//Fibonacci 

 function fibonacci(n){
		var fibo = [0,1];
		for(var i = 2; i <= n; i++ /*var i = n; i >= 1; i--*/){
			fibo[i] = fibo[i-1] + fibo[i-2];
		} 
		document.getElementById("fiboOutput").innerHTML=fibo;
	}
	
// prime number

	function prime(number){
		var flag =0;
		for(var i = 2; i < number; i++){
			if(number % i == 0){
				document.getElementById("primeOutput").innerHTML="oh! not prime number";
				return false;
			}
		}	
		document.getElementById("primeOutput").innerHTML="Hurray! Prime number";
		return true;
	}











