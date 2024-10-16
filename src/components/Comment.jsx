import { useState } from "react"

const Comment = () => {
      const [like, setLike] = useState(10); 
      const [dislike, setDislike] = useState(2); 
      const [isLiked, setIsLiked] = useState(false); 
      const [isDisliked, setIsDisliked] = useState(false);
    const handleLike = () => {
        if (isLiked) {
            setLike(like - 1);
            setIsLiked(false);
        } else {
            setLike(like + 1);
            if (isDisliked) {
                setDislike(dislike - 1);
                setIsDisliked(false);
            }
            setIsLiked(true);
        }
    };

    const handleDislike = () => {
        if (isDisliked) {
            setDislike(dislike - 1)
            setIsDisliked(false);
        } else {
            setDislike(dislike + 1);
            if (isLiked) {
                setLike(like - 1);
                setIsLiked(false);
            }
            setIsDisliked(true);
        }
    };

      
return(
      <div className="border-t-2 pt-5 flex flex-row items-start gap-4">
            <img src="/src/assets/img/avatar.svg" alt="avatar" />
            <div className="flex flex-col">
                  <div className="flex flex-row gap-2 items-center">
                        <div className="text-sm font-bold">Ryan Hall</div>
                        <div className="text-xs">July 17, 6:38 pm</div>
                  </div>
                  <div className="text-sm">In the event, "in places like Iraq and Jordan, leaders of the new sovereign states were brought in from the outside, tailored to suit colonial interests and commitments</div>
                  <div className="flex flex-row gap-4 text-xs pt-4 pb-7">
                        <div className="flex sm:text-sm flex-row gap-2 cursor-pointer"><img src="/src/assets/icons/Comment.svg" alt="reply" />Reply</div>
                        <div onClick={handleLike} className="flex sm:text-sm flex-row gap-2 cursor-pointer text-green-500">{like > 0 && <span>{like}</span>}{isLiked ? (<img  src="/src/assets/icons/Aniket-Suvarna-Box-Bxs-like.16.png" alt="like" />) : (<img  src="/src/assets/icons/like.svg" alt="like" />)}</div>
                        <div onClick={handleDislike} className="flex sm:text-sm flex-row gap-2 cursor-pointer text-red-600">{dislike > 0 && <span>{dislike}</span>} {isDisliked ? (<img  src="/src/assets/icons/Aniket-Suvarna-Box-Bxs-dislike.16.png" alt="dislike" />) : (<img  src="/src/assets/icons/dislike.svg" alt="dislike"/>)}</div>
                  </div>
            </div>
      </div>
      )
}

export default Comment