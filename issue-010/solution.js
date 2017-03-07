// implement your solution here
function evenOdd(a) {
	//initialize new array to hold even numbers
	var arrEven = [];
	//initialize new array to hold odd numbers
	var arrOdd = [];
	a.forEach(function(element) {
		if (element%2 === 0){
			arrEven.push(element);
		} else {
			arrOdd.push(element);
		}
	});
	var sumEven = arrEven.reduce(function (accumulator, value){
			return accumulator + value;
	}, 0);
	var sumOdd = arrOdd.reduce(function (accumulator, value){
			return accumulator + value;
	}, 0);
	return sumEven - sumOdd;
}