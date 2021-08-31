import axios from 'axios'
let Token = process.env.REACT_APP_TOKEN;

async function GetRefreshToken() {
    let link = process.env.REACT_APP_REFRESH;
    let data = { 'refresh': localStorage.getItem('refresh') }
    let url = process.env.REACT_APP_API + link;
    let res;

    console.log("Link to be sent: ", link);

    try {
        res = await axios.post(url, data, {
            headers: {
                Authorization: Token,
            },
        });

        console.log("Full response: ", res);

        if (res.data.success) {
            console.log("Data Posted!", res);
            // localStorage.setItem('access_token')

            return res.data;
        } else {
            console.log("Req is not completed. ", res.data.err);
            return res.data;
        }
    } catch (error) {
        console.log("error:",error.response)
        // if (error.response.status === 401) {
        //     localStorage.removeItem("isCRLogged")
        //     window.alert("Session Closed LOGIN AGAIN...")
        //     window.location = '/signing'
        // }
        // console.log("Catch Error res: ", error.response);
        return null;
    }
}

export default GetRefreshToken;