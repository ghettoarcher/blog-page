import { Link } from "react-router-dom";
const VerticalArticleCard = ({post}) =>{
      const title = post?.title || 'Loading...';
      //TODO добавить прокрутку на самый вверх при переходе на страницу
      const truncateText = (text, maxLength) => {
            return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
          };
      return(
            <Link to={`/post/${encodeURIComponent(post?.title)}`}>

                  <div className="flex flex-col cursor-pointer">
            <img className="w-[263px] h-[180px]" src={post?.urlToImage || 'Error'} alt={title}/>
                  <div className="max-w-64 mt-4 mb-1 text-base font-bold">{truncateText(title, 60)}</div>
                  <div className="flex flex-row gap-3 pt-1 text-xs">
                        <div className="flex flex-row gap-1"><img src="/src/assets/icons/views.svg" alt="views" />321</div>
                        <div className="flex flex-row gap-1"><img src="/src/assets/icons/Comment.svg" alt="comments" />13</div>
                  </div>
            </div>
            </Link>
      )
}

export default VerticalArticleCard;