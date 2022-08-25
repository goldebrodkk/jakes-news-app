const CommentCard = ({ comment }) => {
    return (
        <>
        <h3>{comment.author}</h3>
        <p>{comment.created_at.slice(11,16)} {comment.created_at.slice(0, 10)}</p>
        <p>{comment.body}</p>
        <p>&#128077; {comment.votes}</p>
        </>
    )
}

export default CommentCard; 