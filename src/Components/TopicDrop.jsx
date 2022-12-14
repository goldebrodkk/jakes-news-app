import { useEffect, useState } from "react";
import { getTopics } from "../api";
import { Link } from "react-router-dom";

const TopicDrop = () => {
    const [topics, setTopics] = useState([]); 

    useEffect(() => {
        getTopics()
        .then(({ data }) => {
            setTopics(data)
        })
    }, [])

    const formatTopics = topics.map((topic) => {
        return (
            <Link key={topic.slug} to={`/articles/${topic.slug}`}>
            <p className="dropdown-item">{topic.slug}</p>
            </Link>
        )
    })


    return (
            <>
            <Link to='/articles'><p className="dropdown-item">All</p></Link>
            {formatTopics}
            </>
    )
}

export default TopicDrop; 