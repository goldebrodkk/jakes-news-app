import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticlebyArticleID } from "../api";
import ArticleContents from "./ArticleContents";

const SingleArticle = () => {
    const [singleArticle, setSingleArticle] = useState({}); 
    const [isLoading, setIsLoading] = useState(true); 
    const { article_id } = useParams(); 

    useEffect(() => {
        getArticlebyArticleID(article_id)
        .then(({ data }) => {
            setSingleArticle(data); 
            setIsLoading(false);
        })
    }, [article_id])


    if (isLoading) return <p>Loading!</p>

    return (
        <ArticleContents singleArticle={singleArticle}/>
    )
    
}

export default SingleArticle; 