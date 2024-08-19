const Feedback = () => {
      return(
            <div className="flex flex-col py-7">
                  <h2 className="text-2xl font-bold mb-6">Show Your Support</h2>
                  <div className="flex flex-row gap-4 text-white">
                        <div className="flex flex-row items-center gap-3 bg-red-500 hover:bg-red-600 cursor-pointer rounded-full px-6">
                              <img className="w-5 h-5" src="/src/assets/icons/like-white.svg" alt="like" />
                              <div>Like</div>
                        </div>
                        <div className="flex flex-row items-center gap-3 bg-blue-800 hover:bg-blue-900 cursor-pointer rounded-full px-6">
                              <img className="w-5 h-5" src="/src/assets/icons/f-icon.svg" alt="facebook-share" />
                              <span>Share</span>
                        </div>
                        <div className="flex flex-row items-center gap-3 bg-blue-400 hover:bg-blue-500 cursor-pointer rounded-full px-6">
                              <img className="w-5 h-5" src="/src/assets/icons/twitter-icon.svg" alt="twitter-share" />
                              <span>Tweet</span>
                        </div>
                        <img className="cursor-pointer" src="/src/assets/icons/other.svg" alt="" />
                  </div>
            </div>
      )
}

export default Feedback;