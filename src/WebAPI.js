import axios from 'axios'
const backend_SERVERURL = process.env.REACT_APP_Heroku_backend
const nlp_SERVERURL = process.env.REACT_APP_Heroku_NLPService

export const getNews = async () => {
    try {
        let res = await axios.get(backend_SERVERURL + `/newslist?limit=50`, {
            headers: { "content-type": "application/json" }
        })
        return res
    } catch (error) {
        return handle_Error(error);
    }
};

export const getClosedPricePic_Predict = async () => {
    try {
        let res = await axios.get(nlp_SERVERURL + `/ClosedPricePic_Predict`)
        return res
    } catch (error) {
        return handle_Error(error);
    }
};

export const getClosedPrice_Predict = async () => {
    try {
        let res = await axios.get(nlp_SERVERURL + `/ClosedPrice_Predict`)
        return res
    } catch (error) {
        return handle_Error(error);
    }
};
const handle_Error = (error) => {
    console.log("WEBAPI error")
    if (error.response) {
        // Request made and server responded
        console.log("response");
        console.log(error.response.data + "\n" + error.response.status + "\n" + error.response.headers);
    } else if (error.request) {
        // The request was made but no response was received
        console.log("request");
        console.log(error.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error");
        console.log(error.message);
    }
}
