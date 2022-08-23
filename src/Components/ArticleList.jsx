import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'; 
import { getArticles } from '../api'
import ArticlePreview from './ArticlePreview';
import TopicDrop from './TopicDrop';

const ArticleList = () => {
    const [articles, setArticles] = useState([]); 
    const [isLoading, setIsLoading] = useState(true); 
    const { topic } = useParams()

    useEffect(() => {
        getArticles(topic)
        .then(({ data }) => {
            setArticles(data)
            setIsLoading(false); 
        })
    }, [topic])

   if (isLoading) return  <p>Loading!</p>

    const formatArticles = articles.map((article) => {
        return (
            <ArticlePreview key={article.article_id} article={article}/>
        )
    })

    return (
        <>
        <TopicDrop />
        {formatArticles}
        </>
    )
}

export default ArticleList; 