function firstNonRepeatedChar(str) {
 // Write your code here
	let charCount = {};
	for (let c of str) {
		charCount[c] = (charCount[c] || 0) + 1;
	}

	for (let c of str) {
		if (charCount[c] === 1) {
			return c;
		}
	}
	return null;
	}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
