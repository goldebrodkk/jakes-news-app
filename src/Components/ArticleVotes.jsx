import { useState } from "react";
import { decrementVotes, incrementVotes } from "../api";

const ArticleVotes = ({articleVotes, articleID}) => {
    const [votes, setVotes] = useState(articleVotes); 
    const [err, setErr] = useState(null); 
    const [tagClass, setTagClass] = useState('ArticleVotes__voteErr--hidden');

    const handleLike = () => {
        setVotes((currVotes) => currVotes + 1)
        incrementVotes(articleID)
        .then(() => {
            setTagClass('ArticleVotes__voteErr--hidden')
        })
        .catch((err) => {
            setVotes((currVotes) => currVotes - 1);
            setTagClass('ArticleVotes__voteErr--visible')
            setErr("Could not like article, please try again")
        })
    }

    const handleDislike = () => {
        setVotes((currVotes) => currVotes - 1);
        decrementVotes(articleID).then(() => {
            setTagClass('ArticleVotes__voteErr--hidden'); 
        })
        .catch((err) => {
            setVotes((currVotes) => currVotes + 1);
            setTagClass('ArticleVotes__voteErr--visible')
            setErr("Could not dislike article, please try again")
        })
    }

    return (
        <div>
            <button id='articleVotes' onClick={handleLike}><span id='likeSymbol'>&#128077;</span></button>
            <button id='articleVotes' onClick={handleDislike}><span id='dislikeSymbol'>&#128078;</span></button>
            <p>{votes}</p>
            <p className={tagClass}>{err}</p>
        </div>
    )
}

export default ArticleVotes; 