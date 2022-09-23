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
        <div className="comment-container">
        <div className="comment-header">
        <h3 className="comment-author">{comment.author}</h3>
        <p className="comment-created">|  {comment.created_at.slice(11,16)}  {comment.created_at.slice(0, 10)}</p>
        </div>
        <p className="comment-body">{comment.body}</p>
        <div className="vote-delete-container">
        <p className="comment-votes">&#128077; {comment.votes}</p>
        <DeleteComment comment={comment} setNewComment={setNewComment} setDeleteActive={setDeleteActive} setRemoveFail={setRemoveFail} removeFail={removeFail}/>
        </div>
        </div>
    )
    }
    return (
        <div className="comment-container">
        <div className="comment-header">
        <h3 className="comment-author">{comment.author}</h3>
        <p className="comment-created">|  {comment.created_at.slice(11,16)} {comment.created_at.slice(0, 10)}</p>
        </div>
        <p className="comment-body">{comment.body}</p>
        <p className="comment-votes">&#128077; {comment.votes}</p>
        </div>
    )
  }


export default CommentCard; 