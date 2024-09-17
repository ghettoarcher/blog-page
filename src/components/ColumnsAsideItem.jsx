const ColumnsAsideItem = () =>{
      return(
            <div className="pl-8 pr-6 pt-8 pb-10 flex flex-col border-b-2">
                  <div className="text-sm md:text-base lg:text-lg xl:text-xl text-white font-bold max-w-52">Architecture is the thoughtful making of space</div>
                  <div className="flex flex-row items-center mt-4">
                        <img src="/src/assets/img/avatar.svg" alt="" />
                        <div className="flex flex-col ml-2 text-white ">
                              <div className="text-sm md:text-base">David Williams</div>
                              <div className="text-xs md:text-sm">Architect</div>
                        </div>
                  </div>
            </div>
      )
}

export default ColumnsAsideItem