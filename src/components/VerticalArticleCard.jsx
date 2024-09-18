const VerticalArticleCard = ({img,title,views,comments}) =>{
      return(
            <div className="flex flex-col cursor-pointer">
                  <img className="max-w-64" src={img} alt="image" />
                  <div className="max-w-64 mt-4 mb-1 text-base font-bold">{title}</div>
                  <div className="flex flex-row gap-3 text-sm">
                        <div className="flex flex-row gap-1"><img src="/src/assets/icons/views.svg" alt="views" />{views}</div>
                        <div className="flex flex-row gap-1"><img src="/src/assets/icons/Comment.svg" alt="comments" />{comments}</div>
                  </div>
            </div>
      )
}

export default VerticalArticleCard;