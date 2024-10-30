import VerticalArticleCard from "./VerticalArticleCard";
import {useState,useEffect} from 'react'
const RecommendedArticles = () => {
      const [posts, setPosts] = useState([]);

      useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=20a4c3dc4ef54735b2f6bcb467edffd3')
          .then(response => response.json())
          .then(data => setPosts(data.articles.slice(40, 44)))
          .catch(error => console.error('Error fetching posts:', error));

      }, []);
      return(
            <div className="flex flex-row gap-7">
            {posts.map((post, index) => (
                  <VerticalArticleCard key={index} post={post} />
             ))}
           </div>
      )
}

export default RecommendedArticles;