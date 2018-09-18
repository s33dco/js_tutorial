
// reduce to a single number

let data = [15, 3, 20];

// let reducer = function(accumulator, item) {
// 	return accumulator + item;
// }

let reducer = ((accumulator, item) => {  return accumulator + item});

let initialValue = 0;

let total = data.reduce(reducer, initialValue);

console.log("The sum is", total);


