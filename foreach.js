let a = ["ant", "bat", "cat", 42];
a.forEach(function(element) {
	console.log(element);
});

let soliloquy = "To be, or not to be, that is the question:";

Array.from(soliloquy).forEach(function(character) {
	console.log(character);
});


let z = [8, 17, 47, 99]

z.sort()

z.sort(function(a,b) {return a - b });

// numerically sorting

z = [ -99, -44, 6, 200, 12345 ];

z.sort((a,b)=> {return a - b}).forEach(element => console.log(element))