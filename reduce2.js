// reduce to an array


let votes = [
	"angular",
	"angular",
	"react",
	"react",
	"react",
	"angular",
	"ember",
	"react",
	"vanilla"
];

let initialValue = {};

// let reducer = function(tally, vote) {
// 	if (!tally[vote]) {
// 		tally[vote] = 1;
// 	} else {
// 		tally[vote] = tally[vote] + 1;
// 	}
// 	return tally;
// }


let reducer = ((tally, vote) => {
	if (!tally[vote]) {
		tally[vote] = 1;
	} else {
		tally[vote] = tally[vote] + 1;
	}
	return tally;
});

let result = votes.reduce(reducer, initialValue);
console.log(result);