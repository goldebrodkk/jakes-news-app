import { useEffect, useState } from "react";
import { getArticleImage } from "../api";

const ArticleImage = ({ topic }) => {
    const [image, setImage] = useState(''); 
    const [isLoading, setIsLoading] = useState(true); 

    const randomIndex = Math.floor(Math.random() * 11); 

    useEffect(() => {
        getArticleImage(topic)
        .then(({ data }) => {
            setImage(data.results[randomIndex].urls.raw); 
            setIsLoading(false); 
        })
    }, [])

console.log(image);

    if (isLoading) return <p>Loading!</p>

    return (
        <img src={image} alt='' className="article-image"/>
    )

    }
export default ArticleImage; 