import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { fetchPavukData } from "../api"

const HeaderArticle = ({postnum}) => {
  const [title, setTitle] = useState('')

  useEffect(() => {
    async function getTitle() {
      try {
        const data = await fetchPavukData({
          startDateTime: 1725872952,
          endDateTime: 1726477752,
          mediaType: 'News',
          query: '',
          skip: 0,
          limit: 100,
          token: 'ecb0d860bfb52a045584f0333d2c8aa7'
        });
        
        if (data && data.data[postnum] && data.data[postnum].title) {
          setTitle(data.data[postnum].title)
        }
      } catch (error) {
        console.error('Error fetching title:', error)
      }
    }
    
    // getTitle()
  }, [])

  return (
    <Link to="article-page" className="flex flex-row items-center px-2 border-r-2 pr-6 border-gray-500">
      <div className="w-36 text-white mr-4 text-base">{title.substring(0,30) || 'Loading...'}</div>
      <div>
        <img src="/src/assets/img/image-174.png" alt=""/>
      </div>
    </Link>
  );
}

export default HeaderArticle;