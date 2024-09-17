import { useState } from "react";

const BigArticleCard = ({className,category,title,subtitle,date,like,comment,color,img}) =>{
    const [isBookmarked , setIsBookmarked] = useState(true);
     const clickHandler = () => {
        setIsBookmarked(!isBookmarked);
        }; 

      return(
            <div className={`${className} flex flex-col lg:flex-row px-6 py-6 bg-white  border-b-2 cursor-pointer`}>
                              <img src={img} alt="article-img"/>
                              <div className="ml-6 flex flex-col justify-between">
                                <div>
                                    <div className="flex flex-row justify-between pt-3 px-2">
                                        <div className={`${color} uppercase text-xs font-semibold`}>{category}</div>
                                        {isBookmarked ? (
                                            <img onClick={clickHandler} src="/src/assets/icons/Bookmark.svg" alt="bookmark" />
                                            ) : (
                                            <img onClick={clickHandler} src="/src/assets/icons/bookmark-red.svg" alt="bookmark-filled" />
                                            )}
                                    </div>
                                    <div className="mt-4 font-semibold text-xl">{title}</div>
                                    <div className="mt-3 text-sm md:text-base">{subtitle}</div>
                                </div>

                                  <div className="flex flex-row gap-4 mt-5 text-gray-500 text-xs">
                                      <div className="mr-2 text-xs md:text-sm">{date}</div>
                                      <div className="mr-2 flex flex-row text-xs md:text-sm"><img className='mr-1' src="/src/assets/icons/Comment.svg" alt=""/>{comment}</div>
                                      <div className="flex flex-row text-xs md:text-sm" ><img className='mr-1' src="/src/assets/icons/Heart.svg" alt="like"/>{like}</div>
                                  </div>
                              </div>
                          </div>
      )
}

export default BigArticleCard;