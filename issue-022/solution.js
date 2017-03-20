// implement your solution here
function objectValues(a) {
	keys = Object.keys(a);
	values = [];
	keys.sort();
	keys.forEach(function(item) {
        values.push(a[item]);
    });
    return values;
}