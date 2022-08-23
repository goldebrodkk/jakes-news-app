import axios from "axios";

const getArticles = () => {
   return axios.get('https://jakes-news-api.herokuapp.com/api/articles')
    .then((res) => {
        return res
    }).catch((err) => {
        console.log(err);
    })
}

export {
    getArticles, 
}