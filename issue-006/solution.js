// implement your solution here
function selectSum(a) {
	total = 0;
	a.forEach(function(element) {
		if (!isNaN(element)){
			total += element;
		}
	});
	return total;
}