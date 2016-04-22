module.exports = function(sentence){

  var word = sentence.split(" ");

	var longest = "";

	for (var i = 0; i < word.length; i++) {
		var newString = word[i].split(" ").join(" ").split(" ").slice(",");

		if (newString.length > longest) {
			longest = newString[i] + " " + newString[i].length;
		}
    
	}

	return longest;
}
