function strictCheck(a, b) {
    // implement your solution here
    //strictly equal values
    if (a === b) {
    	return 1;
    }
    //just equal values
    else if (a == b) {
    	return true;
    }
    //unequal values
    else {
    	return false;
    }
}