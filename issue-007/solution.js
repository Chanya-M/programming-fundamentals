// implement your solution here
function superSum(a) {
	var total = 0;
	a.forEach(function(element) {
		var element2 = String(element);
		for (i = 0; i < element2.length; i ++) {
			total += +element2[i];
		}
	});
	return total;
}