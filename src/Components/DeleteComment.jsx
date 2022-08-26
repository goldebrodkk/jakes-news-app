import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { deleteComment } from '../api';
import { useState } from 'react';

const DeleteComment = ({ comment, setNewComment, setDeleteActive, setRemoveFail, removeFail}) => {
    const handleDelete = (event) => {
        event.preventDefault(); 
        setDeleteActive(true); 
        deleteComment(comment.comment_id)
        .then(({data}) => {
            setRemoveFail(false); 
            setNewComment({success: true}); 
            setDeleteActive(false); 
        }).catch((err) => {
            setRemoveFail(true);
            setNewComment({success: false});
            setDeleteActive(false);
        })
    }
if (removeFail) return (
    <>
    <button id='trash-icon' onClick={handleDelete}><FontAwesomeIcon icon={ faTrash }/></button>
    <p>Something went wrong, try again!</p>
    </>
)
    return (
        <button id='trash-icon' onClick={handleDelete}><FontAwesomeIcon icon={ faTrash }/></button>
    )
}


export default DeleteComment