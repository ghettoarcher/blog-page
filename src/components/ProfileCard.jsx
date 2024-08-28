const ProfileCard = ({name,occupation,articlesNum,avatar}) =>{
      return(
            <div className="pt-9  border-2 rounded-xl absolute right-44 bg-white">
                  <div className="px-12 flex flex-col items-center justify-center">
                        <img className="w-20 h-20" src={avatar} alt="avatar" />
                        <div className="text-xl font-bold pt-4">{name}</div>
                        <div className="text-sm pt-1">{occupation}</div>
                        <di className="text-sm font-semibold pt-4">{articlesNum} articles</di>
                        <div className="flex flex-row gap-2 pt-6 pb-8">
                              <div className="cursor-pointer"><img src="/src/assets/icons/facebook-white.svg" alt="" /></div>
                              <div className="cursor-pointer"><img src="/src/assets/icons/twitter-white.svg" alt="" /></div>
                              <div className="cursor-pointer"><img src="/src/assets/icons/instagram-white.svg" alt="" /></div>
                        </div>
                        
                  </div>
                  <div className=" flex items-center justify-center cursor-pointer hover:bg-slate-100 text-sm py-3 border-t-2 font-semibold">Follow on Universal </div>
            </div>
      )
}

export default ProfileCard