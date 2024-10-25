import { useState } from "react";
import HeartIcon from '/src/assets/icons/Heart.svg';
import CommentIcon from '/src/assets/icons/Comment.svg';
import {Link} from 'react-router-dom'
const BigArticleCard = ({post}) =>{
    const title = post?.title || 'Loading...';
    const [isBookmarked , setIsBookmarked] = useState(true);
     const clickHandler = () => {
        setIsBookmarked(!isBookmarked);
        }; 

      return(
        <Link to={`/post/${encodeURIComponent(post?.title)}`}>
            <div className= 'flex flex-col lg:flex-row px-6 py-6 bg-white  border-b-2 cursor-pointer'>
                              <img className="w-[292px] h-[195px]" src={post?.urlToImage || 'Error'} alt={title}/>
                              <div className="ml-6 flex flex-col justify-between">
                                <div>
                                    <div className="flex flex-row justify-between mb-3 pt-1 px-2 items-center">
                                        <div className={` text-red-400 uppercase text-xs font-semibold`}>News</div>
                                        {isBookmarked ? (
                                            <img onClick={clickHandler} src="/src/assets/icons/Bookmark.svg" alt="bookmark" />
                                            ) : (
                                            <img onClick={clickHandler} src="/src/assets/icons/bookmark-red.svg" alt="bookmark-filled" />
                                            )}
                                    </div>
                                    <div className=" font-semibold text-lg">{title}</div>
                                    <div className="mt-3 text-sm ">{post.description}</div>
                                </div>

                                  <div className="flex flex-row justify-start gap-4 mt-3 text-gray-500 text-xs">
                                      <div className="mr-2 text-xs">{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: '2-digit' })}</div>
                                      <div className="mr-2 flex flex-row text-xs"><img className='mr-1' src={CommentIcon} alt=""/>23</div>
                                      <div className="flex flex-row text-xs" ><img className='mr-1' src={HeartIcon} alt="like"/>21</div>
                                  </div>
                              </div>
            </div>
            </Link>
      )
}

export default BigArticleCard;