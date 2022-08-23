import axios from "axios";

const getArticles = (topic = '') => {
   return axios.get('https://jakes-news-api.herokuapp.com/api/articles', {
    params: {
        term: `${topic}`
    }
   })
    .then((res) => {
        return res
    }).catch((err) => {
        console.log(err);
    })
}

const getTopics = () => {
    return axios.get('https://jakes-news-api.herokuapp.com/api/topics')
    .then((res) => {
        return res
    }).catch((err) => {
        console.log(err);
    })
}

export {
    getArticles, 
    getTopics
}