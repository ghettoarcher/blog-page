import BigArticleCard from "./BigArticleCard";
import {useState,useEffect} from 'react'

const BigArticleCards = () => {
      const [posts, setPosts] = useState([]);
      
      useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=20a4c3dc4ef54735b2f6bcb467edffd3')
          .then(response => response.json())
          .then(data => setPosts(data.articles.slice(20, 25)))
          .catch(error => console.error('Error fetching posts:', error));
      }, []);

      return(
           <div className="flex flex-col">
            {posts.map((post, index) => (
                  <BigArticleCard key={index} post={post} />
             ))}
           </div>
      )
}

export default BigArticleCards;