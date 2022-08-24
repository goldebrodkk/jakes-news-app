import { useEffect, useState } from "react";
import { getCommentsbyArticleID } from "../api";
import CommentCard from "./CommentCard";

const ArticleComments = ({ article_id }) => {
    const [comments, setComments] = useState([]); 
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        getCommentsbyArticleID(article_id)
        .then(({ data }) => {
            setComments(data); 
            setIsLoading(false); 
        })
    }, [])

const commentFormat = comments.map((comment) => {
        return <CommentCard comment={comment}/>
    })

    if (isLoading) return <p>Loading!</p>

    return (
        <div>
            <br></br>
            <h2>Comments: </h2>
            {commentFormat}
        </div>
    )

}

export default ArticleComments; 