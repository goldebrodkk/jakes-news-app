const ArticlePreview = ({ article }) => {
    return (
        <>
        <h2>{article.title}</h2>
        <h3>{article.author}</h3>
        <p>{article.created_at.slice(0, 10)}</p>
        <h4>{article.topic}</h4>
        <p>Upvotes: {article.votes}</p>
        </>
    ) 
}

export default ArticlePreview; 