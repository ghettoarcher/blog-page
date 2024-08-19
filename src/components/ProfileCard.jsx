const ProfileCard = () =>{
      return(
            <div className="pt-9  border-2 rounded-xl absolute right-44 bg-white">
                  <div className="px-12 flex flex-col items-center justify-center">
                        <img className="w-20 h-20" src="/src/assets/img/image-220.svg" alt="avatar" />
                        <div className="text-xl font-bold pt-4">Mira Anderson</div>
                        <div className="text-sm pt-1">Traveler & Photographer</div>
                        <di className="text-sm font-semibold pt-4">82 articles</di>
                        <div className="flex flex-row gap-2 pt-6 pb-8">
                              <div><img src="/src/assets/icons/facebook-white.svg" alt="" /></div>
                              <div><img src="/src/assets/icons/twitter-white.svg" alt="" /></div>
                              <div><img src="/src/assets/icons/instagram-white.svg" alt="" /></div>
                        </div>
                        
                  </div>
                  <div className=" flex items-center justify-center text-sm py-3 border-t-2 font-semibold">Follow on Universal </div>
            </div>
      )
}

export default ProfileCard;