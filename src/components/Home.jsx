import MiniArticleCard from "./MiniArticleCard"
import RecommendedArticle from './RecommendedArticle'
import BigArticleCard from "./BigArticleCard"
import RecommendedCategory from "./RecommendedCategory"
import PopularArticle from "./PopularArticle"
import Button from "./Button"
import Player from "./Player"
import Footer from "./Footer"
import ColumnsAside from "./ColumnsAside"
import Header from "./Header"
import { Outlet,Link} from "react-router-dom"
import HeaderArticles from "./HeaderArticles"
const Home = () =>{
      return(
            <>
            <Header/>
            
            <div className="bg-blue-950 py-7">
                <div className="container mx-auto">
                    <HeaderArticles/>
                </div>
                </div>
                <div className="bg-blue-950">
                    <div className="container mx-auto px-5 pb-7">
                        <div className="flex flex-row pt-7">
                            <div className="flex flex-col justify-around bg-mountains-bg bg-cover bg-no-repeat w-full rounded-tl-xl">
                                <div className="flex flex-row top-0  ml-14">
                                    <div className="mr-2"><img src="/src/assets/img/avatar.svg" alt=""/></div>
                                    <div className="flex flex-col">
                                        <div className="text-white">
                                            By Benjamin Turner
                                        </div>
                                        <div className="text-gray-400">Traveler</div>
                                    </div>
                                </div>
                                <div className="bottom-0 ml-14">
                                    <div className="text-sky-700 mb-6">DESTINATIONS</div>
                                <div className="text-4xl text-white mb-11">In Southeast England, White <br/> Cliffs and Fish</div>
                                <div className="flex flex-row items-center">
                                      <div><Button text={'Read more →'}/></div>
                                    <Player title= {'The chalk cliff of Beachy Head'} time={'18:05'}/>
                                </div>
                            </div>
                            
                        </div>
                        <div className="flex flex-col">
                                <div className="text-gray-900 text-sm  font-semibold bg-white py-5 px-6 border-b-2 rounded-tr-xl uppercase">Recommended for you</div>
                                <RecommendedCategory color={'text-teal-400'} title={"food"} subtitle={'For Chicken-Fried Steak, Too Much Is Just Enough'}/>
                                <RecommendedCategory color={'text-teal-400'} title={"food"} subtitle={'For Chicken-Fried Steak, Too Much Is Just Enough'}/>
                                <RecommendedCategory color={'text-teal-400'} title={"food"} subtitle={'For Chicken-Fried Steak, Too Much Is Just Enough'}/>
                                <RecommendedCategory color={'text-teal-400'} title={"food"} subtitle={'For Chicken-Fried Steak, Too Much Is Just Enough'}/>
                                <RecommendedCategory color={'text-teal-400'} title={"food"} subtitle={'For Chicken-Fried Steak, Too Much Is Just Enough'} rounded={'rounded-br-xl'}/>
      
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-200">
                    <div className="container px-5 mx-auto">
                        <div className="flex flex-row pt-7 justify-between gap-7">
                        <div className="flex flex-row gap-7">
                            <div className="flex flex-col gap-7">
                                <div className="flex flex-col"> {/* car */}
                                    <div className="flex flex-row bg-white rounded-t-xl justify-between">
                                        <div className="max-w-64 pt-8 pl-8 pb-2">
                                            <div className="text-xs md:text-sm uppercase text-blue-500">Cars</div>
                                            <div className="text-sm md:text-2xl font-bold pt-5">The joy of replicas: A $ 5 million car for $ 50,000</div>
                                            <div className="pt-6 text-sm md:text-base">The 31-year-old self-taught engineer and former amateur racer spends his days building artful recreations of one of most iconic sports cars</div>
                                        </div>
                                        <div className="pt-3">
                                            <img src="/src/assets/img/car.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center bg-white border-t-2 px-7 py-3  rounded-b-xl text-sm">
                                        <div className="flex flex-row items-center font-semibold">
                                            <img src="/src/assets/img/avatar.svg" className="mr-2" alt=""/>
                                            <div>Jessica Miller:</div>
                                        </div>
                                        <div>Even as the ride-hailing service’s future remem…</div>
                                        <div className="flex flex-row text-xs"><img className="ml-2 mr-1" src="/src/assets/icons/Comment.svg" alt="comment"/>324</div>
                                    </div>    
                                </div>
                                <div className="flex flex-row gap-7">
                                <div className="flex flex-col self-start bg-white min-w-64 rounded-xl" >
                                        <img className="rounded-t-xl" src="/src/assets/img/cat.svg" alt="cat"/>
                                        <div className="flex flex-row font-semibold pt-4 px-6 pb-7 max-w-64 rounded-b-xl" >200+ Doomed Cats Saved From Euthanization</div>
                                </div>
                                <div className="flex flex-col gap-7">
                                    <MiniArticleCard title={'Is Coffee Bad for Bones?'} subtitle={'Coffee drinkers may excrete more calcium, but it doesn’t appear to weaken bones'} date={'Oct 15'}/>
                                    <MiniArticleCard title={'What We Manufacture'} subtitle={'A global history of the factory and the modern world that all should read'} date={'Oct 14'}/>
                                </div>
                                    
                                </div>
                            </div>
                            <div className="flex flex-col gap-8 justify-between " >
                                    <div className="flex flex-col gap-8 " >
                                        <PopularArticle/>
                                    <div className="flex flex-col gap-8 " >
                                        <MiniArticleCard title={'What We Manufacture'} subtitle={'A global history of the factory and the modern world that all should read'} date={'Oct 14'}/>
                                        <MiniArticleCard title={'Is Coffee Bad for Bones?'} subtitle={'Coffee drinkers may excrete more calcium, but it doesn’t appear to weaken bones'} date={'Oct 15'}/>
                                    </div>
                                    </div>
                                </div>
                        </div>
                        <ColumnsAside/>
                          </div>  
                    </div>
                </div>

                <div className="flex flex-row bg-slate-200 pb-14">
                    
                    <div className="flex flex-col ml-7 ">
                        
                    </div>
      
                </div>
                <div>
                    <div className="bg-flower-bg pt-12 pb-14 flex flex-col items-center">
                        <h1 className="text-white font-semibold text-center text-4xl pb-6">The Big Bloom or «How Flowering <br/>Plants Changed the World»</h1>
                        <Button text={"Read more"}/>
                    </div>
                </div>
                <div className=" bg-gray-400">
                    <div className="container mx-auto px-5">
                        <div className="flex flex-row py-14">
                            <div className="flex flex-col">
                                <BigArticleCard  className={'rounded-t-xl'} category={"Flights"} color={'text-blue-500'} img={'/src/assets/img/Image-0.svg'}  date={"Aug 6"} like={'23'} comment={"52"} title={'Passengers Suffer as Crowded Field Puts Pressure on Europe’s Airlines'} subtitle={"Weaker carriers have fallen by the wayside amid fierce competition, while others have been hit by bad luck. The result: thousands of canceled flights."}/>
                                <BigArticleCard  color={'text-teal-400'} category={"Food"} img={'/src/assets/img/Image-1.svg'} date={"Oct 7"} like={'830'} comment={"23"} title={'Three Courses, 20 Euros: The Affordable Dining Renaissance in Paris'} subtitle={"The Los Angeles area, for all of its culinary diversity, has not historically been thought of as a haven for bread lovers. The area has a reputation as a place where gluten fears to tread."}/>
                                <BigArticleCard  color={'text-orange-600'} category={"Science"} img={'/src/assets/img/Image-2.svg'} date={"Oct 11"} like={'129'} comment={"31"} title={'Watch the High-Flying Physics of a Plant’s Exploding Fruits'} subtitle={"Three undergradute physics majors and their professor worked out how the hairyflower wild petunia shoots tiny seeds more than 20 feet through the air"}/>
                                <BigArticleCard  color={'text-teal-400'} category={"Health"} img={'/src/assets/img/Image-3.svg'} date={"Oct 19"}  like={'284'} comment={"233"}title={'How the Shape of Your Ears Affects What You Hear'} subtitle={"We’re able to locate sound because our brains grasp the shape of our ears. When that shape changes, we need time and practice to adapt. Ears are a peculiarly individual piece of anatomy."}/>
                                <BigArticleCard color={'text-green-600'} category={"Science"} img={'/src/assets/img/Image-4.svg'} date={"Oct 22"} like={'1,293'} comment={"54"} title={'Forests Protect the Climate. A Future With More Storms Would Mean Trouble.'} subtitle={"With an increase in extreme weather expected in the years to come, forests could be changed permanently as the world continues to warm"}/>
                                <BigArticleCard  className={'rounded-b-xl'} category={"Art & Design"} color={'text-purple-500'} date={"Oct 26"} like={'82'} comment={"72"} img={'/src/assets/img/Image-1.svg'} title={'New Contemporary Institute Reverberates in Richmond’s Historic Landscape'} subtitle={"The center, which will open in April, takes a bold look at race and other social issues that still resonate in the region as well as the nation. A new Institute for Contemporary Art is set to open."}/>
      
                            </div>
                            <div className="flex flex-col ml-7">
                                <div className=" text-gray-900 font-semibold bg-white py-4 px-6 border-b-2 rounded-t-xl">Recommended for you</div>
                                <RecommendedArticle title={'Office Meetings Leave the Office'} img={"/src/assets/img/article-img-7.svg"} postTime={'5 minutes ago'}/>
                                <RecommendedArticle title={'Experimental Vocal Music in Brooklyn'} img={"/src/assets/img/article-img-5.svg"} postTime={'7 minutes ago'}/>
                                <RecommendedArticle title={'Google’s Influence Over Think Tanks'} img={"/src/assets/img/article-img-4.svg"} postTime={'9 minutes ago'}/>
                                <RecommendedArticle title={'Homes for Sale in NYC and Connecticut'} img={"/src/assets/img/article-img-3.svg"} postTime={'10 minutes ago'}/>
                                <RecommendedArticle title={'Are You There, Dad? It’s Me, Alice'} img={"/src/assets/img/article-img-2.svg"} postTime={'15 minutes ago'}/>
                                <RecommendedArticle title={'The New Punk Look: Lacy and Colorful'} img={"/src/assets/img/article-img.svg"} postTime={'30 minutes ago'}/>
                                <RecommendedArticle title={'Sunday Best in Harlem and Brooklyn'} img={"/src/assets/img/article-img-1.svg"} postTime={'34 minutes ago'}/>
                                <div className="text-center bg-white pt-2 pb-3 font-semibold rounded-b-xl cursor-pointer">Read more</div>
                
                            </div>
                    </div>
                </div>
                
      
                <div className="bg-blue-900 mx-auto">
                    <div className="container mx-auto px-5 py-14">
                        <div className="flex flex-row pb-14">
                            <div className="bg-boat-bg bg-cover bg-no-repeat flex flex-col items-center justify-between rounded-xl pt-11 pb-10 mr-7">
                                <div className="flex flex-col items-center">
                                    <div className="flex-col">
                                        <div className="flex flex-col items-center justify-center">
                                            <div><img src="/src/assets/img/avatar.svg" alt=""/></div>
                                        <div className="mt-2 text-white">By Sarah Jenkins</div>
                                        <div className="text-gray-300">Photographer</div>
                                        </div>
                                        
                                    </div>
                                          <h1 className='text-4xl text-white font-semibold pt-7 px-12 mb-10'>Readers Choice winners: Your wine country favorites</h1>
                                          <Button text={'Watch photos'}/>
                                </div>
                                <div className="flex"><img src="/src/assets/icons/Pagination.svg" alt=""/></div>
                            </div>
                            <div className="flex flex-col rounded-xl">
                                <div className="flex flex-row bg-gray-100 rounded-xl max-w-3xl mx-auto">
                                    <div className="py-6 pl-9 flex-1">
                                        <p className="text-sm text-gray-500 uppercase font-bold mb-2">Careers</p>
                                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Had a Job Interview but No Callback? Here’s What to Do</h2>
                                        <p className="text-gray-600 max-w-52 mb-6">Try to understand the culture of the company where you want to work and be authentic in your interview, experts emphasize.</p>
                                        <Button text={"Read more"}/>
                                    </div>
                                    <div className="flex-shrink-0 lg:max-w-sm mt-4 mr-7">
                                        <img className="" src="/src/assets/img/image-169.svg" alt="Interview tips"/>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between mt-8 gap-7">
                                    <MiniArticleCard title={'Is Coffee Bad for Bones?'} subtitle={'Coffee drinkers may excrete more calcium, but it doesn’t appear to weaken bones'} date={'Oct 15'}/>
                                    <MiniArticleCard title={'What We Manufacture'} subtitle={'A global history of the factory and the modern world that all should read'} date={'Oct 14'}/>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            <Outlet/>
      </>
      )
}

export default Home