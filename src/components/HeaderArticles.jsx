import HeaderArticle from './HeaderArticle'
const HeaderArticles = () => {
      
      return(
            <div className="flex flex-row flex-wrap lg:flex-nowrap p-6 justify-between mx-7 bg-gray-700 rounded-md mb-7 ">
            <HeaderArticle postnum={0}></HeaderArticle>
            <HeaderArticle postnum={1}></HeaderArticle>
            <HeaderArticle postnum={2}></HeaderArticle>
            <HeaderArticle postnum={3}></HeaderArticle>
            <HeaderArticle postnum={4}></HeaderArticle>
        </div>
      )
}

export default HeaderArticles