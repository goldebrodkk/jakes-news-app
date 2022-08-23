import { Link } from "react-router-dom";

const ArticleContents = ({ singleArticle }) => {

    return (
        <>
        <h1>{singleArticle.title}</h1>
        <h2>{singleArticle.author}</h2>
        <Link to={`/articles/${singleArticle.topic}`}><h3>{singleArticle.topic}</h3></Link>
        <article>{singleArticle.body}</article>
        <p>{singleArticle.created_at.slice(0, 10)}</p>
        <p>&#128077; {singleArticle.votes}</p>
        </>
    )
}

export default ArticleContents; 