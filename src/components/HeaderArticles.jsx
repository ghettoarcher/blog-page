import HeaderArticle from './HeaderArticle'
import { useState,useEffect} from 'react';
const HeaderArticles = () => {
      const [posts, setPosts] = useState([]);
      
      useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=20a4c3dc4ef54735b2f6bcb467edffd3')
          .then(response => response.json())
          .then(data => setPosts(data.articles.slice(24, 28)))
          .catch(error => console.error('Error fetching posts:', error));
      }, []);
      return(
            <div className="flex flex-row lg:flex-nowrap p-6 justify-between mx-7 bg-gray-700 rounded-md mb-7 ">
            {posts.map((post, index) => (
                  <HeaderArticle key={index} post={post} />
             ))}
        </div>
      )
}

export default HeaderArticles