import { Link } from "react-router-dom";
import ArticleImage from "./ArticleImage";
import ArticleVotes from "./ArticleVotes";

const ArticleContents = ({ singleArticle }) => {
    
    return (
        <div>
            <div className="title-container">
                <h1 id='article-title'>{singleArticle.title}</h1>
                <div className="article-details">
                    <p id='article-date'>{singleArticle.created_at.slice(0, 10)} |</p>
                    <Link to={`/articles/${singleArticle.topic}`}><h4 id='article-topic'>{singleArticle.topic}</h4></Link>
                </div>
            </div>
            <div>
                <ArticleImage topic={singleArticle.topic}/>
            </div>
            <article id="articleContents__body">{singleArticle.body}</article>
            <h3>{singleArticle.author}</h3>
            <ArticleVotes articleVotes={singleArticle.votes} articleID={singleArticle.article_id}/>
        </div>
    )
}

export default ArticleContents; 