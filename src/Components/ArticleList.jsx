import { useEffect, useState } from 'react'
import { getArticles } from '../api'
import ArticlePreview from './ArticlePreview';

const ArticleList = () => {
    const [articles, setArticles] = useState([]); 
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        getArticles()
        .then(({ data }) => {
            setArticles(data)
            setIsLoading(false); 
        })
    }, [])

   if (isLoading) return  <p>Loading!</p>

    const formatArticles = articles.map((article) => {
        return (
            <ArticlePreview key={article.article_id} article={article}/>
        )
    })

    return (
        <>
        {formatArticles}
        </>
    )
}

export default ArticleList; 