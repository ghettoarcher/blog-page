const Comment = () => {
      return(
            <div className="border-t-2 pt-5 flex flex-row items-start gap-4">
                  <img src="/src/assets/img/avatar.svg" alt="avatar" />
                  <div className="flex flex-col">
                        <div className="flex flex-row gap-2 items-center">
                              <div className="text-base font-bold">Ryan Hall</div>
                              <div className="text-xs">July 17, 6:38 pm</div>
                        </div>
                        <div>In the event, "in places like Iraq and Jordan, leaders of the new sovereign states were brought in from the outside, tailored to suit colonial interests and commitments</div>
                        <div className="flex flex-row gap-4 text-xs pt-4 pb-7">
                              <div className="flex flex-row gap-2"><img src="/src/assets/icons/Comment.svg" alt="reply" />Reply</div>
                              <div className="flex flex-row gap-2 text-green-500"><img src="/src/assets/icons/like.svg" alt="like" />+10</div>
                              <div className="flex flex-row gap-2"><img src="/src/assets/icons/dislike.svg" alt="dislike" /></div>
                        </div>
                  </div>
                        </div>
      )
}

export default Comment