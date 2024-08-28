import { Link } from "react-router-dom"

const ArticleNavigation = () => {
  return (
      <div className="flex flex-row text-sm text-white ">
      <Link to={'/'} className="flex flex-row gap-1 items-center mr-8"><img src="/src/assets/icons/Home.svg" alt="Back home" />Back to main</Link>
      <Link className="flex flex-row mr-5 gap-1"><img src="/src/assets/icons/arrow-left.svg" alt="Previous" />Prev</Link>
      <Link className="flex flex-row gap-1">Next<img src="/src/assets/icons/arrow-right.svg" alt="Next" /></Link>
      </div>
  )
}

export default ArticleNavigation