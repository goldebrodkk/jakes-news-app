import { useState } from "react";
import { incrementVotes } from "../api";

const ArticleVotes = ({articleVotes, articleID}) => {
    const [votes, setVotes] = useState(articleVotes); 
    const [err, setErr] = useState(null); 
    const [tagClass, setTagClass] = useState('articleVotes__voteErr--hidden');
    const [isLikeActive, setIsLikeActive] = useState(false);
    const [isDislikeActive, setIsDislikeActive] = useState(false);
    const [likeClass, setLikeClass] = useState('articleVotes__button'); 
    const [dislikeClass, setDislikeClass] = useState('articleVotes__button')
      

    const handleLike = () => {
        if (!isLikeActive) {
        setVotes((currVotes) => currVotes + 1)
        incrementVotes(articleID, 1)
        .then(() => {
            setTagClass('articleVotes__voteErr--hidden'); 
            setIsLikeActive(true); 
            setLikeClass('articleVotes__button--activated'); 
        })
        .catch((err) => {
            setVotes((currVotes) => currVotes - 1);
            setTagClass('ArticleVotes__voteErr--visible')
            setErr("Could not like article, please try again")
            setIsLikeActive(false); 
            setLikeClass('articleVotes__button');
        })
      } else {
        setVotes((currVotes) => currVotes - 1)
        incrementVotes(articleID, -1)
        .then(() => {
            setTagClass('articleVotes__voteErr--hidden'); 
            setIsLikeActive(false); 
            setLikeClass('articleVotes__button')
        })
        .catch((err) => {
            setVotes((currVotes) => currVotes + 1);
            setTagClass('articleVotes__voteErr--visible')
            setErr("Could not like article, please try again")
            setIsLikeActive(true); 
            setLikeClass('articleVotes__button--activated')
        })
      }
    }

    const handleDislike = () => {
        if (!isDislikeActive) {
        setVotes((currVotes) => currVotes - 1);
        incrementVotes(articleID, 1).then(() => {
            setTagClass('articleVotes__voteErr--hidden'); 
            setIsDislikeActive(true); 
            setDislikeClass('articleVotes__button--activated');
        })
        .catch((err) => {
            setVotes((currVotes) => currVotes + 1);
            setTagClass('articleVotes__voteErr--visible');
            setErr("Could not dislike article, please try again");
            setIsDislikeActive(false); 
            setDislikeClass('articleVotes__button');
        })
      } else {
        setVotes((currVotes) => currVotes + 1);
        incrementVotes(articleID, -1).then(() => {
            setTagClass('articleVotes__voteErr--hidden'); 
            setIsDislikeActive(false);  
            setDislikeClass('articleVotes__button');
        })
        .catch((err) => {
            setVotes((currVotes) => currVotes - 1);
            setTagClass('articleVotes__voteErr--visible')
            setErr("Could not dislike article, please try again")
            setIsDislikeActive(false); 
            setDislikeClass('articleVotes__button--activated');
        })
      }
    }

    return (
        <div>
            <button className={likeClass} onClick={handleLike} disabled={isDislikeActive}><span id='likeSymbol'>&#128077;</span></button>
            <button className={dislikeClass} onClick={handleDislike} disabled={isLikeActive}><span id='dislikeSymbol'>&#128078;</span></button>
            <p>{votes}</p>
            <p className={tagClass}>{err}</p>
        </div>
    )
}

export default ArticleVotes; 