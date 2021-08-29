import axios from "axios";

async function ApiPostService(link, data) {
let url = process.env.REACT_APP_API + link;
let res;

console.log("Link to be sent: ", link);

try {
	let Token = process.env.REACT_APP_TOKEN;
	res = await axios.post(url, data, {
		headers: {
			Authorization: Token,
		},
	});

	console.log("Full response: ", res);

	if (res.data.success) {
		console.log("Data Posted!");
		return res.data;
	} 
	else {
		console.log("Req is not completed. ", res.data.err);
		return res.data;
	}
	}
	catch (error) {
		console.log("Catch Error: ", error.response);
		return error.response;
	}
}
export {ApiPostService};