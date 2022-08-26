const SortButtons = ({ setSearchParams, sortOn, orderBy }) => {

    const currParams = {
        sortOn, 
        orderBy
    }

    const handleDateClick = () => {
        setSearchParams({
            ...currParams,
            sortOn: 'created_at'
        })
    }

    const handleCommentClick = () => {
        setSearchParams({ 
            ...currParams,
            sortOn: 'comment_count'
        })
    }

    const handleVoteClick = () => {
        setSearchParams({
            ...currParams,
            sortOn: 'votes'
        })
    }

    const handleAscClick = () => {
        setSearchParams({
            ...currParams,
            orderBy: 'ASC'
        })
    }

    const handleDescClick = () => {
        setSearchParams({
            ...currParams,
            orderBy: 'DESC'
        })
    }

//? Is there any way that the buttons could supply something allowing for this to be handled with one click function?
    return (
        <div>
            <button onClick={handleDateClick}>Date</button>
            <button onClick={handleCommentClick}>Comment Count</button>
            <button onClick={handleVoteClick}>Votes</button>
            <button onClick={handleAscClick}>Asc</button>
            <button onClick={handleDescClick}>Desc</button>
        </div>
    )
}

export default SortButtons; 