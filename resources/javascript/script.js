var database = [
	{
		username: "Joey",
		password: "GoJackets",
	},
	{
		username: "GeorgeP",
		password: "Burdell",
	},
	{
		username: "CoachO",
		password: "ILoveLSU",
	},
];

var newsfeed = [
	{
		username: "Joey",
		timeline: "Hi",
	},
	{
		username: "GeorgeP",
		timeline: "Where is everyone?",
	},
	{
		username: "CoachO",
		timeline: "GO TIGERS",
	}
];

var usernamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(user, pass) {
	for(var i=0; i<database.length; i++) {
		if (user == database[i].username &&
			pass == database[i].password) {
			return true;
		}
	}
	return false;
}

function signIn(user, pass) {
	if(isUserValid(user, pass)) {
		console.log(newsfeed);
	} else {
		alert("Sorry, could not verify account details.");
	}
}

signIn(usernamePrompt, passwordPrompt);