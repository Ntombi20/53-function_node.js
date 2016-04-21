module.exports = function(username){
  if (username === undefined) {
		return "HELLO!";
	};

  return "Hello, " + username.toUpperCase();
};
