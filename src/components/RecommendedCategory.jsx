const RecommendedCategory = ({color,title,subtitle,rounded}) => {
      return(
            <div className={`flex flex-col pt-4 pb-5 px-5 bg-white cursor-pointer ${rounded} border-b-2`}>
                  <div className={`pb-2 text-xs uppercase ${color}`}>{title}</div>
                  <div className="text-sm md:text-base ">{subtitle}</div>
            </div>
      )
}

export default RecommendedCategory;