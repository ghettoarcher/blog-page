const RecommendedArticle = ({img,postTime,title}) => {
      return(
            <div className="flex flex-row bg-white min-w-64 pb-5 pt-4 px-6 border-b-2 cursor-pointer">
                              <img src={img} alt=""/>
                              <div className="flex flex-col ml-2 justify-between">
                                  <div className="text-sm md:text-base">{title}</div>
                                  <div className="text-xs text-gray-500">{postTime}</div>
                              </div>
                          </div>
      )
}

export default RecommendedArticle;