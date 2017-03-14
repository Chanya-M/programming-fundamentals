function product(a, b) {
    // implement your solution here
    if (typeof(a) === 'numbers' && typeof(b) === 'numbers') {
		return a * b;
	}
	else {
	    throw new Error ('NaN Expection');
	}
}
