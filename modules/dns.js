const dns = require("dns");
const os = require("os");

let hostname = os.hostname();

dns.lookup(hostname, (err, result) => {
	let teste;
	let teste2 = result;
	console.log(teste2);
});