// implement your solution here
function oldAndYoung(students) {
	var min = students[0].yearOfBirth;
	var youngest = students[0].name;
	var max = students[0].yearOfBirth;
	var oldest = students[0].name;
	var obj = {};
	for (i = 1; i < students.length; i++) {
		//find youngest
		if (students[i].yearOfBirth > min) {
			min = students[i].yearOfBirth;
			youngest = students[i].name;
		} 
		//find oldest
		else if (students[i].yearOfBirth < max) {
			max = students[i].yearOfBirth;
			oldest = students[i].name;
		}
	}
	
	obj['youngest'] = youngest;
	obj['oldest'] = oldest;
	return obj;
}