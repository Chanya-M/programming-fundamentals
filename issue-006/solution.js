// implement your solution here
function selectSum(a) {
	total = 0;
	a.forEach(function(element) {
		if (typeof(element) == 'numbers'){
			total += element;
		}
	});
	return total;
}
