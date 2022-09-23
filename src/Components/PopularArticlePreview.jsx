import { Link } from "react-router-dom"; 
import ArticleImage from "./ArticleImage";

const PopularArticlePreview = ({ article }) => {
    return (
        <div className='article-preview'>
        <ArticleImage className='popular-image'topic={article.topic}/>
        <div className='article-preview-body'>
        <Link to={`/article/${article.article_id}`}><h2>{article.title}</h2></Link>
        <h3>{article.author}</h3>
        <h4>{article.topic}</h4>
        <p>{article.created_at.slice(0, 10)}</p>
        <p>&#128077; {article.votes}</p>
        </div>
        </div>
        
    ) 
}

export default PopularArticlePreview