import { useState } from "react"

const Comment = () => {
      const [like, setLike] = useState(null);
      const [liked, setLiked] = useState(false);

      const handleLike = () => {
            if(liked == 0){
                  setLike(null);
            }
        if (liked) {
            setLike(like - 1); // Уменьшить лайк при повторном нажатии
        } else {
            setLike(like + 1); // Увеличить лайк при первом нажатии
        }

        setLiked(!liked); // Изменить состояние "лайкнут" на противоположное
    }
      const [dislike, setDisLike] = useState(null);
      const [disliked, setDisLiked] = useState(false);

      const handleDisLike = () => {
        if (disliked) {
            setDisLike(dislike - 1); // Уменьшить лайк при повторном нажатии
        } else {
            setDisLike(dislike + 1); // Увеличить лайк при первом нажатии
        }
        setDisLiked(!disliked); // Изменить состояние "лайкнут" на противоположное
    }
      
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
                        <div className="flex flex-row gap-2 cursor-pointer"><img src="/src/assets/icons/Comment.svg" alt="reply" />Reply</div>
                        <div className="flex flex-row gap-2 cursor-pointer text-green-500"><img onClick={handleLike} src="/src/assets/icons/like.svg" alt="like" />{like > 0 && <span>{like}</span>}</div>
                        <div className="flex flex-row gap-2 cursor-pointer text-red-600"><img onClick={handleDisLike} src="/src/assets/icons/dislike.svg" alt="dislike" />{dislike > 0 && <span>{dislike}</span>}</div>
                  </div>
            </div>
      </div>
      )
}

export default Comment