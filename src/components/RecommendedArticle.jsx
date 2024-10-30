import { Link } from "react-router-dom";
const RecommendedArticle = ({post}) => {
    const title = post?.title || 'Loading...';
    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
      };
      return(
        <Link to={`/post/${encodeURIComponent(post?.title)}`}>
            <div className="flex flex-row bg-white min-w-64 pb-5 pt-4 px-6 border-b-2 cursor-pointer">
                              <img className="w-[60px] h-[60px]" src={post?.urlToImage || 'Error'} alt={title}/>
                              <div className="flex flex-col ml-2 justify-between">
                                  <div className="text-sm">{truncateText(title, 40)}</div>
                                  <div className="text-xs text-gray-500">{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: '2-digit' })}</div>
                              </div>
                          </div>
                          </Link>
      )
}

export default RecommendedArticle;