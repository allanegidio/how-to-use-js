var die = {
	size: 4,
	totalRolls: 0,
	roll: function() { 
		var result = Math.ceil(this.size * Math.random());
		this.totalRolls++;
		return result;
	}
};


console.log(die.roll());
console.log(die.roll());
console.log(die.roll());
console.log(die.totalRolls);