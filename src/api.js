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

const getArticlebyArticleID = (article_id) => {
    return axios.get(`https://jakes-news-api.herokuapp.com/api/articles/${article_id}`)
    .then((res) => {
        return res; 
    }).catch((err) => {
        console.log(err);
    })
}

const incrementVotes = (article_id, votes) => {
    return axios.patch(`https://jakes-news-api.herokuapp.com/api/articles/${article_id}`,
    {inc_votes: `${votes}`})
    .then((res) => {
        return res;
    })
    
}

const getCommentsbyArticleID = (article_id) => {
    return axios.get(`https://jakes-news-api.herokuapp.com/api/articles/${article_id}/comments`)
    .then((res) => {
        return res; 
    }).catch((err) => {
        console.log(err);
    })
}

const postComment = (article_id, username, body) => {
    return axios.post(`https://jakes-news-api.herokuapp.com/api/articles/${article_id}/comments`, {
        username: `${username}`,
        body: `${body}`
    }).then((res) => {
        return res; 
    })
}

const getArticleImage = (topic) => {
    return axios.get(`https://api.unsplash.com/search/photos?query=${topic}&client_id=DjTIHUxEvutYriF2d_T7SrIVNoMNdEruLAWdmZAtzWg`)
    .then((res) => {
        return res
    }).catch((err) => {
        console.log(err);
    })
}

export {
    getArticles, 
    getTopics,
    getArticlebyArticleID,
    incrementVotes, 
    getCommentsbyArticleID, 
    postComment,
    getArticleImage
}