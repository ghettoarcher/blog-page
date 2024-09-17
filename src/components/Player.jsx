const Player = ({title,time}) => {
      return(
            <div className="flex flex-row ml-7 cursor-pointer">
                  <div className="mr-2"><img src="/src/assets/icons/play.svg" alt=""/></div>
                  <div>
                        <div className="text-white text-sm md:text-lg">{title}</div>
                        <div className="text-gray-400 text-xs md:text-base">{time}</div>
                  </div>
            </div>
      )
}

export default Player;