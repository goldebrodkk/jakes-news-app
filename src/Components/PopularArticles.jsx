import { useEffect } from "react";
import { useState } from "react"
import { getArticles } from "../api";
import PopularArticlePreview from "./PopularArticlePreview";

const PopularArticles = () => {
    const [articles, setArticles] = useState([]); 

    useEffect(() => {
        getArticles('', 'votes', 'DESC')
        .then(({ data }) => {
            setArticles(data.slice(0, 3))
        })
    }, [])

    const formatArticles = articles.map((article) => {
        return (
            <PopularArticlePreview key={article.article_id} article={article}/>
        )
    })
    
    return (
        <>
        <h2>Popular Articles</h2>
        {formatArticles}
        </>
    )
}

export default PopularArticles