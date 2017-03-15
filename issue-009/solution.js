// implement your solution here
function sumEven(a) {
	var sum = 0;
	a.reduce(function (accumulator, value){
		if (value % 2 == 0){
			sum += value;
		}
	}, 0);
	return sum;
}
