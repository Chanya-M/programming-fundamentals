// implement your solution here
function sum() {
	var arr = Array.from(arguments);
	var total = 0;
	arr.forEach(function(element) {
		total += element;
	});
	return total;
}