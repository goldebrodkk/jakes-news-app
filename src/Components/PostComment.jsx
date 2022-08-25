import { useContext, useState } from "react";
import { postComment } from "../api";
import { UserContext } from "./UserContext ";

const PostComment = ({ article_id, setNewComment, setComments }) => {
    const [newItem, setNewItem] = useState('')
    const [submitActive, setSubmitActive] = useState(false); 
    const [message, setMessage] = useState(''); 
    const { user } = useContext(UserContext); 

    const handleSubmit = (event) => {
        event.preventDefault()
        setSubmitActive(true); 
        setComments((prevComms) => {
            const commBody = {
                created_at: Date.now().toString(),
                username: user.username,
                body: newItem, 
                votes: 0,
            }
            return [commBody, ...prevComms];
        })
        postComment(article_id, user.username, newItem)
        .then(({ data }) => {
            setNewComment(data);
            setSubmitActive(false);
            setMessage('Comment Posted!');  
            setNewItem('')
        }).catch((err) => {
            setSubmitActive(false); 
            setMessage('Something went wrong, please try again'); 
            setNewComment({})
        })
        
    }

    if (submitActive) return <p>Posting!</p>

    return (
       <div className="postComment__container">
        <h2 className="postComment__message">{message}</h2>
    <form onSubmit={handleSubmit}>
        <label>
            <div className="postComment__textcontainer">
            <textarea type='text' className='postComment__textField' placeholder='Post a comment!' value={newItem} onChange={(event) => setNewItem(event.target.value)}/>
            </div>
        </label>
        <div className="postComment__submitcontainer">
        <button className="postComment__submitButton" type='submit' disabled={submitActive}>Post Comment</button>
        </div>
    </form>
    </div>
    )
}

export default PostComment; 