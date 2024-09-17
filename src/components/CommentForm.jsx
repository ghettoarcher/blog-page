import Button from './Button';

const CommentForm = () => {
      return(
                  <div className='flex flex-row items-center rounded-xl bg-slate-100 gap-4 pl-7 pt-7 pb-9 mb-8'>
                  <img src="/src/assets/img/comment-avatar.svg" alt="avatar" />
                  <div className="flex flex-col gap-4">
                  <div className='text-xl font-bold'>What do you think?</div>
                        <textarea className=' p-2 w-96 h-32 rounded-xl' type="text"/>
                        <div className='pt-3'><Button text={'Submit  →'}/></div>
                  </div>
                  </div>
      )
}

export default CommentForm