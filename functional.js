let states = ["kansas", "Nebraska", "North Dakota", "South Dakota"]

// MAP !

// Kansas -> Kansas
// North Dakota -> north-dakota

// urls: Imperative version


// returns a URL-firendlt version of a string
// e.g North Dakota -> north-dakota

function urlify(string) {
	return string.toLowerCase().split(/\s+/).join("-");
}


// imperative version

function imperativeUrls(elements){
	let urls = [];
	elements.forEach(function(element){
		// console.log(element);
		urls.push(urlify(element));
		// console.log(urls);
	});
return urls;
}

console.log(imperativeUrls(states));


// functional version

function functionalUrls(elements) {
	return elements.map(element => urlify(element));
}

console.log(functionalUrls(states))


// functional version for full address


function fullFunctionalUrls(root, elements){
	return elements.map(element => ('https://' + root).concat("/", element));
}

// nested calls


console.log(fullFunctionalUrls('example.com',functionalUrls(states)))



// FILTER !

// singles :Imeperative version

function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}
console.log(imperativeSingles(states));


// functional version

function functionalSingles(elements) {
	return elements.filter(element => element.toLowerCase().split(/\s+/).length === 1);
}

console.log(functionalSingles(states));


// filter functions for the dakotas...

//includes

function dakotaOne(elements) {
	return elements.filter(element => element.includes('Dakota'));
}
console.log(dakotaOne(states));


// split.length ===2 

function dakotaTwo(elements) {
	return elements.filter(element => element.split(/\s+/).length === 2);
}
console.log(dakotaTwo(states));


// using matches

function dakotaThree(elements) {
	return elements.filter(element => element.match(/\w+\s\w+/));
}
console.log(dakotaThree(states));

function dakotaFour(elements) {
	return elements.filter(element => element.match(/akota/));
}
console.log(dakotaFour(states));


// REDUCE!

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// imperative function

function imperativeSum(elements) {
	let total = 0;
	elements.forEach(function(n) {
		total += n;
	});
return total;
}
console.log(imperativeSum(numbers));


// sum: Functional solution
function functionalSum(elements) {
  return elements.reduce((total, n) => { return total += n; });
}
console.log(functionalSum(numbers));


// lengths: Imperative solution
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
  return lengths;
}
console.log(imperativeLengths(states));




// lengths: Functional solution
function functionalLengths(elements) {
  return elements.reduce((lengths, element) => {
                          lengths[element] = element.length;
                          return lengths;
                        }, {});
}
console.log(functionalLengths(states));















