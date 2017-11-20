var die = {
	size: 4,
	count: 1,
	roll: function() { 
		var result = Math.ceil(this.size * Math.random());
		return result;
	}
};

console.log(die);
console.log(die.roll(6));