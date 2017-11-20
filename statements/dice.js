var getDieRoll = function(dieSize) {
	var result = Math.ceil(dieSize * Math.random());
	return result;
};

var roll = getDieRoll(6);

console.log("You rolled a " + roll);

if(roll >= 6) {
	console.log("Great Roll");
} else if (roll == 1) {
	console.log("Terrible Roll");
} else {
	console.log("Its ok roll...");
}