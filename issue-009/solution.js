// implement your solution here
function sumEven(a) {
	//create new array, from given array, with only even numbers
	var arrEven = [];
	a.forEach(function(element) {
		if (element%2 === 0){
			arrEven.push(element);
		}
	});
	var total = arrEven.reduce(function (accumulator, value){
			return accumulator + value;
	}, 0);
	return total;
}