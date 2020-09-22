import { API_URL } from "./../config/API_URL.js";

const callApi = (uri, method="GET", data) => {
    return axios({
        url: API_URL + uri,
        method,
        data,
    });
}

export { callApi };