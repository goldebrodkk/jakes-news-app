import { useContext, useState } from "react";
import { postComment } from "../api";
import { UserContext } from "./UserContext ";

const PostComment = ({ article_id, setNewComment }) => {
    const [newItem, setNewItem] = useState('')
    const [submitActive, setSubmitActive] = useState(false); 
    const [message, setMessage] = useState(''); 
    const { user } = useContext(UserContext); 

    const handleSubmit = (event) => {
        event.preventDefault()
        setSubmitActive(true); 
        postComment(article_id, user.username, newItem)
        .then(({ data }) => {
            setNewComment(data);
            setSubmitActive(false);
            setMessage('Comment Posted!');  
            setNewItem('')
        }).catch((err) => {
            setSubmitActive(false); 
            setMessage('Something went wrong, please try again'); 
        })
        
    }

    if (submitActive) return <p>Posting!</p>

    return (
       <div className="postComment__container">
        <h2 classname="postComment__message">{message}</h2>
    <form onSubmit={handleSubmit}>
        <label>
            <input type='text' className='postComment__textField' value={newItem} onChange={(event) => setNewItem(event.target.value)}/>
        </label>
        <button className="postComment__submitButton" type='submit' disabled={submitActive}>Post Comment</button>
    </form>
    </div>
    )
}

export default PostComment; 