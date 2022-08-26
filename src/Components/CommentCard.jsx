import { useContext, useState } from "react";
import { UserContext } from "./UserContext ";
import DeleteComment from "./DeleteComment";

const CommentCard = ({ comment, setNewComment }) => {
    const [deleteActive, setDeleteActive] = useState(false)
    const [removeFail, setRemoveFail] = useState(false); 

    const { user } = useContext(UserContext); 

    if (deleteActive) {
        return (
            <h2 className='delete-text'>deleting!</h2>
        )
    } if (user.username === comment.author) {
    return (
        <>
        <h3>{comment.author}</h3>
        <p>{comment.created_at.slice(11,16)} {comment.created_at.slice(0, 10)}</p>
        <p>{comment.body}</p>
        <p>&#128077; {comment.votes}</p>
        <DeleteComment comment={comment} setNewComment={setNewComment} setDeleteActive={setDeleteActive} setRemoveFail={setRemoveFail} removeFail={removeFail}/>
        </>
    )
    }
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