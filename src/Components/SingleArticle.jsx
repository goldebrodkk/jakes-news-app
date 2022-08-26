import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticlebyArticleID } from "../api";
import ArticleContents from "./ArticleContents";
import ArticleComments from "./ArticleComments";

const SingleArticle = () => {
    const [singleArticle, setSingleArticle] = useState({}); 
    const [isLoading, setIsLoading] = useState(true); 
    const [err, setErr] = useState(null); 
    const { article_id } = useParams(); 

    useEffect(() => {
        getArticlebyArticleID(article_id)
        .then(({ data }) => {
            setSingleArticle(data); 
            setIsLoading(false);
        }).catch((err) => {
            setErr(err); 
        })
    }, [article_id])

    if (err) return <h1>404: article not found!</h1>; 

    if (isLoading) return <p>Loading!</p>

    return (
        <>
        <ArticleContents singleArticle={singleArticle}/>
        <ArticleComments article_id={article_id}/>
        </>
    )
    
}

export default SingleArticle; 