/*
Question 1 
Create a method that takes a URL (string), removes duplicate URL query parameters and they are specified within the 2nd argument (which will be an optional array).

Examples 
stripUrlParams("https://google.com?a=1&b=2&a=2") ➞ "https://google.com?a=2&b=2"
stripUrlParams("https://google.com?a=1&b=2&a=2", ["b"]) ➞ "https://google.com?a=2"
stripUrlParams("https://google.com", ["b"]) ➞ "https://google.com"

Notes:
- The 2nd argument paramsToStrip is optional.
- paramsToStrip can contain multiple params.
- If there are duplicate query parameters with different values, use the value of the last occurring parameter (see examples #1 and #2 above). 
*/

const stripUrlParams = (urlString, paramsToStrip = []) => {
	let newParams = {};
	const [url, params] = urlString.split("?");

	if (!params) {
		return url;
	}

	const paramsList = params.split("&");

	// Saving key value pairs to newParams object
	// The later value overwrites previous versions
	paramsList.forEach((param) => {
		const [key, val] = param.split("=");
		newParams[key] = val;
	});

	// Filtering unwanted params
	paramsToStrip.forEach((param) => delete newParams[param]);

	const newParamString = Object.entries(newParams)
		.map((pair) => {
			const [key, val] = pair;
			return `${key}=${val}`;
		})
		.join("&");
	return `${url}?${newParamString}`;
};

console.log(
	"Result after strip: ",
	stripUrlParams("https://google.com", ["b"])
);
