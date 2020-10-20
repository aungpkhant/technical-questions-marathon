/* 
Question 2 
Create a method that takes an array of strings of arbitrary dimensionality (String[], String[][], String[][][], etc) and returns the sum of every separate number in each string in the array.

Examples
sum({"1", "five", "2wenty", "thr33"}) ➞ 36
sum({
  {"1X2", "t3n"},
  {"1024", "5", "64"}
}) ➞ 1099
sum({
  {
    {"0", "0x2", "z3r1"},
    {"1", "55a46"}
  },
  {
    {"1", "2", "4"},
    {"0x5fp-2", "nine", "9"},
    {"4", "4", "4"}
  },
  {
    {"03"}
  },
  {}
}) ➞ 142

Notes
- Numbers in strings can be negative, but will all be base-10 integers.
- Negative numbers may directly follow another number.
- The hyphen-minus character ("-") does not only occur in numbers.
- Arrays may be ragged or empty.
*/

const sum = (stringArrayArray) => {
	let stringifiedArray = "";

	// Recursively traverse arrays and flatten them to single string
	const traverse = (list) => {
		list.forEach((item) => {
			if (typeof item === "string") {
				stringifiedArray += `|${item}`;
			} else if (Array.isArray(item)) {
				traverse(item);
			}
		});
	};

	traverse(stringArrayArray);

	// Regex pattern matching to detect numbers and reduced to a final result
	const regexp = /-?\d+/g;
	const netSum = stringifiedArray
		.match(regexp)
		.reduce((acc, cur) => acc + parseInt(cur), 0);

	return netSum;
};

console.log(
	sum([
		[
			["0", "0x2", "z3r1"],
			["1", "55a46"],
		],
		[
			["1", "2", "4"],
			["0x5fp-2", "nine", "9"],
			["4", "4", "4"],
		],
		[["03"]],
		[],
	])
);
