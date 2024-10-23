import { Link } from "react-router-dom";

const HeaderArticle = ({ post }) => {
  const title = post?.title || 'Loading...';

  return (
    <Link to={`/post/${encodeURIComponent(post?.title)}`} className="flex flex-row items-center px-2 border-r-2  border-gray-500">
      <div className="text-white overflow-hidden mr-4 text-sm w-40 h-16">{title}</div>
      <div>
        <img className="w-16 h-16" src={post?.urlToImage || 'Error'} alt={title} />
      </div>
    </Link>
  );
}

export default HeaderArticle;
