import { Link } from "react-router-dom";
import ArticleVotes from "./ArticleVotes";

const ArticleContents = ({ singleArticle }) => {
    
    return (
        <div>
        <h1>{singleArticle.title}</h1>
        <h2>{singleArticle.author}</h2>
        <Link to={`/articles/${singleArticle.topic}`}><h3>{singleArticle.topic}</h3></Link>
        <article id="articleContents__body">{singleArticle.body}</article>
        <p>{singleArticle.created_at.slice(0, 10)}</p>
        <ArticleVotes articleVotes={singleArticle.votes} articleID={singleArticle.article_id}/>
        {/* <p>&#128077;&#128078; {singleArticle.votes}</p> */}
        </div>
    )
}

export default ArticleContents; 