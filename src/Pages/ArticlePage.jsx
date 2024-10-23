import Header from "../components/Header";
import Footer from "../components/Footer";
import ProfileCard from "../components/ProfileCard";
import Tag from "../components/Tag";
import Feedback from "../components/Feedback";
import VerticalArticleCard from "../components/VerticalArticleCard";
import Comments from "../components/Comments";
import ArticleNavigation from "../components/ArticleNavigation";
import HeartIcon from '/src/assets/icons/Heart.svg';
import CommentIcon from '/src/assets/icons/Comment.svg';
import ShareIcon from '/src/assets/icons/Share.svg';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const ArticlePage = ({postDate,likes,comments,shares}) =>{
      const { title } = useParams(); 
      const [post, setPost] = useState(null);
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`https://newsapi.org/v2/everything?q=${encodeURIComponent(title)}&apiKey=20a4c3dc4ef54735b2f6bcb467edffd3`);
            const data = await response.json();

            if (data.articles.length > 0) {
              setPost(data.articles[0]);
            } else {
              console.error("No articles found");
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, [title]);
    
      if (!post) return <div>Loading...</div>;
  


      return(
            
            <>
            <Header/>
            <div className="bg-no-repeat bg-cover py-14 relative" 
            style={{
          backgroundImage: `url(${post.urlToImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Полупрозрачный черный слой
          backgroundBlendMode: 'overlay', // Смешивание фона с цветом
        }}>
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
                                    <div className="text-xs flex flex-row gap-1"><img src={HeartIcon} alt="Likes" />{likes}</div>
                                    <div className="text-xs flex flex-row gap-1"><img src={CommentIcon} alt="Comments" />{comments}</div>
                                    <div className="text-sm gap-1 flex flex-row py-2 pl-5 pr-6 rounded-2xl border-2 cursor-pointer"><img src={ShareIcon} alt="Shares" />{shares} shares</div>
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
                        <div className="container max-w-6xl mx-auto px-5 ">
                              <div className="flex flex-row flex-wrap lg:flex-nowrap py-14 justify-between gap-2">
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