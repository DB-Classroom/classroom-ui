import axios from "axios";

let Token = process.env.REACT_APP_TOKEN;
async function ApiPostService(
    link,
    data,
    headers = {
        headers: {
            Authorization: Token,
        },
    }
) {
    let url = process.env.REACT_APP_API + link;
    let res;

    console.log("Link to be sent: ", link);

    try {
        res = await axios.post(url, data, headers);

        console.log("Full response: ", res);

        if (res.data.success) {
            console.log("Data Posted!");
            return res.data;
        } else {
            console.log("Req is not completed. ", res.data.err);
            return res.data;
        }
    } catch (error) {
        console.log("Catch Error: ", error.response);
        return error.response;
    }
}
export { ApiPostService };
