function grade(s) {
    // implement your solution here
    if (s >= 80 && s <= 100 ) {
    	return 'A';
    } else if (s >= 60) {
    	return 'B';
    } else if (s >= 50) {
    	return 'C';
    } else if (s >= 40) {
    	return 'D';
    } else if (s >= 30) {
    	return 'E';
    } else if (s >= 0) {
    	return 'F';
    }
}
