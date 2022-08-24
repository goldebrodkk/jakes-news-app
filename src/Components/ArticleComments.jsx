import { useEffect, useState } from "react";
import { getCommentsbyArticleID } from "../api";
import CommentCard from "./CommentCard";
import PostComment from "./PostComment";

const ArticleComments = ({ article_id }) => {
    const [comments, setComments] = useState([]); 
    const [isLoading, setIsLoading] = useState(true); 
    const [newComment, setNewComment] = useState({})

    useEffect(() => {
        getCommentsbyArticleID(article_id)
        .then(({ data }) => {
            setComments(data); 
            setIsLoading(false); 
        })
    }, [article_id, newComment])

const commentFormat = comments.map((comment) => {
        return <CommentCard key={comment.comment_id}comment={comment}/>
    })

    if (isLoading) return <p>Loading!</p>

    return (
        <>
        <div>
        <PostComment article_id={article_id} newComment={newComment} setNewComment={setNewComment}/>
        </div>
        <div>
            <br></br>
            <h2>Comments: </h2>
            {commentFormat}
        </div>
        </>
    )

}

export default ArticleComments; 