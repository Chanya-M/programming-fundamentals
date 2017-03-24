// implement your solution here
function Person(name, age) {
	this.name = name;
	this.age = age;
	this.walked = 0;
	this.greet = greet;
	this.walk = walk;
}
function greet(person) {
	return 'hello ' + person.name;
}
function walk(d) {
	this.walked += d;
}