function dataTypeCheck(a) {
    // implement your solution here
    type = typeof(a)
    if (type === 'number') {
    	//check for integer datatypes
    	if ( a % 1 === 0 ){
    		return a / 2
    	}
    	//check for float datatypes
    	else if (parseFloat(a) == a) {
    		return a * 2;
    	} 
    	//check for NaN datatypes
    	else {
    		return 0;
    	}
    }
    else if (type === 'string') {
    	//check for strings that can be type-cast
    	if (+a) {
    		return +a;
    	}
    	//check for other string types
    	else {
    		return "hello " + a;
    	}
    }
    //check for null data types
    else if (type === 'object') {
    	return 0;
    }
    //check for undefined data types
    else if (type === 'undefined') {
    	return 0;
    }
}