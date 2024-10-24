const MiniArticleCard = ({title,subtitle,date}) =>{
      return(
            <div className="flex flex-col self-start max-w-64 px-6 pt-6 pb-7 bg-white rounded-xl cursor-pointer " >
                  <div className="font-bold text-sm md:text-base" >{title}</div>
                  <div className="mt-1 text-xs md:text-sm" >{subtitle}</div>
                  <div className="mt-2 text-gray-500 text-xs" >{date}</div>
            </div>
      )
}

export default MiniArticleCard;     