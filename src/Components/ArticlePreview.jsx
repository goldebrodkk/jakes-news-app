const ArticlePreview = ({ article }) => {
    return (
        <div className='article-preview'>
        <h2>{article.title}</h2>
        <h3>{article.author}</h3>
        <h4>{article.topic}</h4>
        <p>{article.created_at.slice(0, 10)}</p>
        <p>&#128077; {article.votes}</p>
        </div>
    ) 
}

export default ArticlePreview; 