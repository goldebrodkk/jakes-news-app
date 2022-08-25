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
            data.sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at))
            setComments(data); 
            setIsLoading(false); 
        })
    }, [article_id, newComment])

const commentFormat = comments.map((comment) => {
        return <CommentCard key={comment.created_at}comment={comment}/>
    })

    if (isLoading) return <p>Loading!</p>

    return (
        <>
        <div>
        <PostComment article_id={article_id} setNewComment={setNewComment} setComments={setComments}/>
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