import ColumnsAsideItem from "./ColumnsAsideItem"
const ColumnsAside = () =>{
      return(
            <div className="flex flex-col self-start min-w-64 bg-blue-300  rounded-xl flex-nowrap">
                  <div className=" px-5 pb-5 pt-6 uppercase text-white font-semibold text-sm md:text-base border-b-2">Columns</div>
                  <ColumnsAsideItem/>      
                  <ColumnsAsideItem/>      
                  <ColumnsAsideItem/>      
                  <div className="text-center text-white pt-2 pb-3  font-semibold rounded-b-xl">
                        <p>Read more</p>
                  </div>
            </div>
      )
}

export default ColumnsAside