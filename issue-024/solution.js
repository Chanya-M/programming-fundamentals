// implement your solution here
function mostFrequent(s) {
	var msg = s.toLowerCase().split(/[ (),!.";:-]+/).filter(Boolean).sort();
	var words = [];
	var count = [];
	var index;
	msg.forEach(function(item) {
		index = words.indexOf(item);
		//if the word does not exist in the array of words:
        if (index === -1) {
        	words.push(item);
        	count.push(1);
        } else {
        	count[index] += 1;	
        }
    });
    var most = count[0];
    //find the maximum count
    for (i = 1; i < count.length; i++){
    	if (count[i] > most) {
    		most = count[i];
    	}
    }
    //get the ndex of the word with the largest count
    index = count.indexOf(most);
    var frequent = words[index];
	return frequent;
}