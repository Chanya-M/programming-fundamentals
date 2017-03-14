function product(a, b) {
    // implement your solution here
    if (!isNaN(a) && !isNaN(b)) {
		return a * b;
	}
	else {
	    throw new Error ('NaN Expection');
	}
}