import axios from 'axios'
const backend_SERVERURL = process.env.Heroku_backend

export const getNews = async () => {
    try {
        let res = await axios.get(backend_SERVERURL + `/newslist`, {
            headers: { "content-type": "application/json" }
        })
        return res
    } catch (error) {
        return handle_Error(error);
    }
};

