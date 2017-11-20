var book = require("./book");

exports["Add new book"] = function(test) {
	book.addBook('Anatomia do Estado');
	test.done();
}