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
