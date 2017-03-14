function grade(a) {
    // implement your solution here
    if (a >= 80 && a <= 100 ) {
    	return 'A';
    } else if (a >= 60) {
    	return 'B';
    } else if (a >= 50) {
    	return 'C';
    } else if (a >= 40) {
    	return 'D';
    } else if (a >= 30) {
    	return 'E';
    } else if (a >= 0) {
    	return 'F';
    }
}