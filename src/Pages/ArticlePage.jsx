import Header from "../components/Header";
import Footer from "../components/Footer";
import ProfileCard from "../components/ProfileCard";
import { Link } from "react-router-dom";
import Tag from "../components/Tag";
import Feedback from "../components/Feedback";
import VerticalArticleCard from "../components/VerticalArticleCard";
import Comments from "../components/Comments";
import ArticleNavigation from "../components/ArticleNavigation";


const ArticlePage = ({title,subtitle,postDate,likes,comments,shares,text}) =>{
      return(
            <>
            <Header/>
            <div className="bg-article-bg bg-no-repeat bg-cover py-14 relative  ">
                  <div className="container max-w-5xl px-5 mx-auto">
                        <div className="flex flex-col justify-around">
                              <div className="flex flex-row justify-between font-semibold">
                                    <div className="text-xs uppercase text-blue-800 ">Destinations</div>
                                    <ArticleNavigation/> 
                              </div>
                              <div className="text-6xl  max-w-2xl mt-12 mb-7 text-white">{title}</div>
                              <div className="text-lg text-white max-w-xl">{subtitle}</div>
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
                        <div className="flex flex-row">
                        <div className="max-w-3xl text-lg leading-8 ">{text} Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero in error maiores voluptatibus tenetur eveniet ipsa et temporibus. Perspiciatis sequi, pariatur veritatis doloremque corporis nulla tempora sit adipisci recusandae porro reprehenderit voluptatum minus maxime ut maiores labore consequuntur rem magnam molestiae alias provident. Ducimus optio, dignissimos laudantium distinctio eius, vero numquam animi repudiandae officia voluptatum impedit enim quidem eos iusto! Nobis excepturi dicta minima ullam ipsa, itaque vero nisi eaque fuga! Nisi expedita maxime soluta perspiciatis eos. Distinctio voluptates laudantium delectus rerum? Esse iste, reprehenderit atque dignissimos nam fugiat, architecto et quos veritatis omnis voluptatem eos nesciunt! Quod ad quia neque! Non, maxime numquam mollitia pariatur et voluptas deleniti, facere enim error odit incidunt nihil quidem quisquam id? Impedit aperiam nulla consectetur accusamus, assumenda, eum eaque repellendus voluptatibus repudiandae veritatis temporibus. Obcaecati odit amet quis quisquam. Nesciunt molestias optio quia excepturi laudantium. Odio mollitia, placeat illum quod, cum omnis delectus error officiis repudiandae inventore, natus incidunt dolores explicabo! Reiciendis sed veniam exercitationem praesentium facere nam culpa tempore nobis accusamus, unde recusandae earum consequuntur fuga ratione quam quaerat in dignissimos omnis eos autem, vero reprehenderit minus sint porro. Ut repellendus esse, praesentium modi voluptatibus reprehenderit nesciunt, iusto tempore amet accusamus perferendis excepturi sunt doloribus nulla ipsum nobis dolore vitae eum facere incidunt suscipit. Doloribus libero eligendi cumque. Aut fugit doloremque est in sequi omnis nihil sit esse necessitatibus molestias molestiae dolores, consequatur aliquam quo optio ipsum sint commodi qui animi distinctio natus! Fugit, sunt sed qui voluptate et consequuntur porro ducimus doloribus unde deserunt iste corporis maiores veritatis voluptas dolorem ab! Explicabo facilis in tenetur aut distinctio consequatur, rem non numquam, tempora asperiores repellendus excepturi. Magni possimus quo asperiores eaque consequuntur ad corrupti, velit vero harum id fugiat, molestiae ut consequatur doloribus dolores eius facere maxime temporibus excepturi molestias! Praesentium officia rem repellendus quaerat. Aliquam qui sed, natus sit rerum totam voluptatibus a. Ipsa incidunt, tempora dolorem non sapiente sit, aut, hic id nihil doloribus beatae esse impedit possimus dolor tempore! Architecto minima voluptates quia impedit, nam amet soluta optio iure similique unde nemo praesentium veniam, a repellendus qui quaerat. Distinctio, animi adipisci suscipit at accusantium fugiat quisquam maxime corporis modi, temporibus iure natus praesentium, nam similique possimus fugit inventore quas? Quo ex possimus harum enim aliquid ab assumenda eligendi, repellat voluptatum corporis officia vitae error debitis saepe odio fugit et. Id qui quas aut ipsa placeat perspiciatis atque suscipit veniam ratione, facere repellendus aspernatur sit nemo odit! Placeat exercitationem aut alias saepe hic quia quos et numquam aliquam at laudantium dicta ratione cumque repudiandae, temporibus autem dolorem suscipit fugit, maiores eligendi. Magni quidem fuga sint repellat odio rem culpa, dicta alias repudiandae dolores animi voluptate corporis sed cumque, voluptates, rerum soluta in quibusdam similique? Pariatur quis similique iure. Corporis molestias ad enim. Quibusdam voluptatem odit vitae facilis sequi! Laboriosam ab alias nostrum ea blanditiis sunt incidunt, iure maxime earum ut accusamus nemo, error quae dignissimos nam animi consequatur eveniet excepturi eligendi voluptatem! Facere, quasi quo. Reprehenderit minima deserunt voluptatibus dolorum.</div>

                        </div>
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