var uniqueRandomArray = require('unique-random-array');
var starWarsNames = require('./test.json');

module.exports = {
	all: starWarsNames,
	random: uniqueRandomArray(starWarsNames)
};