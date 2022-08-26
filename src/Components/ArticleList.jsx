import { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'; 
import { getArticles } from '../api'
import ArticlePreview from './ArticlePreview';
import SortButtons from './SortButtons';
import TopicDrop from './TopicDrop';

const ArticleList = () => {
    const [articles, setArticles] = useState([]); 
    const [isLoading, setIsLoading] = useState(true); 
    const [searchParams, setSearchParams] = useSearchParams({
        sortOn: 'created_at', 
        orderBy: 'DESC'
    }); 
    const [err, setErr] = useState(null); 
    const { topic } = useParams()

    const sortOn = searchParams.get('sortOn'); 
    const orderBy = searchParams.get('orderBy'); 

    useEffect(() => {
        getArticles(topic, sortOn, orderBy)
        .then(({ data }) => {
            setArticles(data)
            setIsLoading(false); 
        }).catch((err) => {
            setErr(err); 
        })
    }, [topic, searchParams])

    if (err) return <h1>404: topic Not found </h1>

   if (isLoading) return  <p>Loading!</p>

    const formatArticles = articles.map((article) => {
        return (
            <ArticlePreview key={article.article_id} article={article}/>
        )
    })

    return (
        <>
        
        <TopicDrop />
        <SortButtons setSearchParams={setSearchParams} sortOn={sortOn} orderBy={orderBy}/>
        {formatArticles}
        </>
    )
}

export default ArticleList; 