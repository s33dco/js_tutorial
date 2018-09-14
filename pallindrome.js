// reverses a string

function reverse(string) {
	return Array.from(string).reverse().join("");
}

//returns true for pallindrome
function pallindrome(string) {
	let processedContent = string.toLowerCase();
	return processedContent === reverse(processedContent);
}