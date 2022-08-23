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
            <Link to={`/articles/${topic.slug}`}>
            <p>{topic.slug}</p>
            </Link>
        )
    })

    return (
        <>
        <Link to='/articles'><p>All</p></Link>
        {formatTopics}
        </>
    )
}

export default TopicDrop; 