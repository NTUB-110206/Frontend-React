import axios from 'axios'
const backend_SERVERURL = process.env.REACT_APP_Heroku_backend
const nlp_SERVERURL = process.env.REACT_APP_Heroku_NLPService

export const getNews = async () => {
    try {
        console.log("GET: " + backend_SERVERURL + `/newslist?limit=50`)
        let res = await axios.get(backend_SERVERURL + `/newslist?limit=50`, {
            headers: { "content-type": "application/json" }
        })
        console.log(res)
        return res
    } catch (error) {
        return handle_Error(error);
    }
};

export const getClosedPricePic_Predict = async () => {
    try {
        console.log("GET: " + nlp_SERVERURL + `/ClosedPricePic_Predict`)
        let res = await axios.get(nlp_SERVERURL + `/ClosedPricePic_Predict`)
        console.log(res)
        return res
    } catch (error) {
        return handle_Error(error);
    }
};

export const getClosedPrice_Predict = async () => {
    try {
        console.log("GET: " + nlp_SERVERURL + `/ClosedPrice_Predict`)
        let res = await axios.get(nlp_SERVERURL + `/ClosedPrice_Predict`)
        console.log(res)
        return res
    } catch (error) {
        return handle_Error(error);
    }
};

export const get_crypto_data = async (fsym='BTC', tsym='USD', timeframe='day', limit=1, aggregate=1) => {
    try {
        console.log("GET: " + 'https://min-api.cryptocompare.com/data/v2/histo'+timeframe+'?fsym='+fsym+'&tsym='+tsym+'&limit='+limit+'&aggregate='+aggregate)
        let res = await axios.get('https://min-api.cryptocompare.com/data/v2/histo'+timeframe+'?fsym='+fsym+'&tsym='+tsym+'&limit='+limit+'&aggregate='+aggregate)
        console.log(res)
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
