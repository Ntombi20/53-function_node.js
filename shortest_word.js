module.exports = function(sentence){

  var word = sentence.split(" ");
	var shortest = "***********************";

	for (var i = 0; i < word.length; i++) {
		var newString = word[i];
		 if (newString.length < shortest.length) {
		 	shortest = newString;
		 }
	}

	return shortest + " " + shortest.length;
};
