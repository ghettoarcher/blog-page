const PopularArticle = () =>{
      return(
            <div className="bg-card-bg bg-no-repeat flex flex-col justify-between rounded-xl pt-4 pb-6 pl-4 pr-5 text-white" >
            <div className="text-sm bg-green-500 py-1 px-2 rounded-xl">Popular</div>
            <div>
                <div className="uppercase text-pink-200 text-xs">Art & Design</div>
                <div className="text-base font-semibold max-w-48 pt-2 uppercase" >Invisible ink: the weird world of tattoo removal – in&nbsp;pictures</div>
                <div className="flex flex-row pt-2" >
                    <img className="mr-2" src="/src/assets/img/avatar.svg" alt=""/>
                    <div>
                        <div className="text-sm">By Sarah Jenkins</div>
                        <div className="flex flex-row text-gray-400 text-xs" >
                            <div className="mr-2">Sept 26</div>
                            <div className="flex flex-row mr-2"><img className="mr-1" src="/src/assets/icons/Comment.svg" alt=""/>16</div>
                            <div className="flex flex-row"><img className="mr-1" src="/src/assets/icons/Heart.svg" alt=""/>832</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
}

export default PopularArticle;