import Comment from './Comment'
import CommentForm from './CommentForm'
const Comments = () => {
      return(
            <div className="max-w-3xl mx-auto flex flex-col pt-20 ">
                  <div className="flex flex-col">
                        <div className="flex flex-row justify-between pb-8">
                              <div className="flex flex-row gap-3">
                                    <div className="text-4xl font-bold">Comments</div>
                                    <div className="text-4xl text-gray-400 font-semibold">19</div>
                              </div>
                              <div className="flex flex-row border-2 py-2 px-3 gap-2 rounded-full hover:bg-slate-100 cursor-pointer">
                                    <img src="/src/assets/icons/Pencil.svg" alt="add comment" />
                                    <div className="text-sm md:text-base">Add comment</div>
                              </div>
                        </div>
                        <Comment/>
                        <Comment/>
                        <Comment/>
                        <Comment/>
                        <div className='flex flex-row gap-2 border-2 rounded-full py-4 justify-center font-bold text-sm mb-7 hover:bg-slate-100 cursor-pointer'><img src="/src/assets/icons/reload.svg" alt="load more" />Load more</div>
                        <CommentForm/>
                  </div>
            </div>

      )
}

export default Comments