import Header from "../components/Header";
import Footer from "../components/Footer";
import ProfileCard from "../components/ProfileCard";
import { Link } from "react-router-dom";
import Tag from "../components/Tag";
import Feedback from "../components/Feedback";
import VerticalArticleCard from "../components/VerticalArticleCard";
import Comments from "../components/Comments";
import ArticleNavigation from "../components/ArticleNavigation";
import { useState, useEffect } from "react";

const ArticlePage = ({postDate,likes,comments,shares}) =>{

      const [post, setPost] = useState([]); // Состояние для хранения списка постов

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('https://newsapi.org/v2/everything?q=keyword&apiKey=20a4c3dc4ef54735b2f6bcb467edffd3'); // Замените на ваш URL
            const data = await response.json(); // Парсим JSON-ответ
            console.log(data.article)
            setPost(data.articles[21]); // Сохраняем данные в состояние
        };

        fetchPosts();
    }, []); // Пустой массив зависимостей означает, что эффект выполнится только один раз, при загрузке компонента

      return(
            
            <>
            <Header/>
            <div className="bg-article-bg bg-no-repeat bg-cover py-14 relative">
                  <div className="container max-w-5xl px-5 mx-auto">
                        <div className="flex flex-col justify-around">
                              <div className="flex flex-row justify-between font-semibold">
                                    <div className="text-xs uppercase text-blue-800 ">Destinations</div>
                                    <ArticleNavigation/> 
                              </div>
                              <div className="text-6xl  max-w-2xl mt-12 mb-7 text-white">{post.title}</div>
                              <div className="text-lg text-white max-w-xl">{post.description}</div>
                              <div className="flex flex-row text-white items-center mt-14 gap-5">
                                    
                                    <div className="text-xs">{postDate}</div>
                                    <div className="text-xs flex flex-row gap-1"><img src="/src/assets/icons/Heart.svg" alt="Likes" />{likes}</div>
                                    <div className="text-xs flex flex-row gap-1"><img src="/src/assets/icons/Comment.svg" alt="Comments" />{comments}</div>
                                    <div className="text-sm gap-1 flex flex-row py-2 pl-5 pr-6 rounded-2xl border-2 cursor-pointer"><img src="/src/assets/icons/Share.svg" alt="Shares" />{shares} shares</div>
                              </div>
                              
                        </div>
                        <ProfileCard name={'Mira Anderson'} occupation={'Traveler & Photographer'} articlesNum={82} avatar={"/src/assets/img/image-220.svg"}/>
                  </div>
            </div>

                  <div className="container max-w-6xl mx-auto flex flex-col pt-14">

                        <div className="max-w-3xl text-lg leading-8 ">{post.content}</div>

                        <div className="max-w-xl flex flex-row gap-2 pb-7 pt-7 mb-7 border-b-2">
                              <Tag text={"Travel"}/>
                              <Tag text={"Destinations"}/>
                              <Tag text={"Nature"}/>
                              <Tag text={"World"}/>
                              <Tag text={"Alaska"}/>
                        </div>
                        <Feedback/>
                  </div>
                  <div className="bg-slate-100">
                        <div className="container max-w-6xl mx-auto px-5">
                              <div className="flex flex-row py-14 justify-between">
                              <VerticalArticleCard title={'An Evangelist of Singaporean Food Has a New Pulpit'} img={'/src/assets/img/vertical-img.svg'} views={'1,904'} comments={'12'}/>
                              <VerticalArticleCard title={'An Evangelist of Singaporean Food Has a New Pulpit'} img={'/src/assets/img/vertical-img.svg'} views={'1,904'} comments={'12'}/>
                              <VerticalArticleCard title={'An Evangelist of Singaporean Food Has a New Pulpit'} img={'/src/assets/img/vertical-img.svg'} views={'1,904'} comments={'12'}/>
                              <VerticalArticleCard title={'An Evangelist of Singaporean Food Has a New Pulpit'} img={'/src/assets/img/vertical-img.svg'} views={'1,904'} comments={'12'}/>
                              </div>
                        </div>
                  </div>
                  <Comments/>
                  <Footer/>
            </>
      )
}


export default ArticlePage;