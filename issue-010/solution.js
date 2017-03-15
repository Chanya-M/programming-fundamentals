// implement your solution here
function evenOdd(a) {
	var sum = 0;
	a.reduce(function (accumulator, value){
		if (sum % 2 === 0){
			sum += value;
		} else {
			sum -= value;
		}
	}, 0);
	return sum;
}
