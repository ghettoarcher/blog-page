const VerticalArticleCard = ({img,title,views,comments}) =>{
      return(
            <div className="flex flex-col">
                  <img className="max-w-64" src={img} alt="image" />
                  <div className="max-w-64 my-4 text-base font-bold">{title}</div>
                  <div className="flex flex-row gap-2 text-sm">
                        <div className="flex flex-row gap-1"><img src="/src/assets/icons/views.svg" alt="views" />{views}</div>
                        <div className="flex flex-row gap-1"><img src="/src/assets/icons/Comment.svg" alt="comments" />{comments}</div>
                  </div>
            </div>
      )
}

export default VerticalArticleCard;