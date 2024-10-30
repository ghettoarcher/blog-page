import MiniArticleCard from "./MiniArticleCard"
import RecommendedArticles from './RecommendedArticles'
import BigArticleCards from "./BigArticleCards"
import RecommendedCategory from "./RecommendedCategory"
import PopularArticle from "./PopularArticle"
import Button from "./Button"
import Player from "./Player"
import Footer from "./Footer"
import ColumnsAside from "./ColumnsAside"
import Header from "./Header"
import { Outlet} from "react-router-dom"
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
                                    <div className="text-sky-700 mb-6 text-sm font-bold">DESTINATIONS</div>
                                <div className="text-4xl text-white mb-11">In Southeast England, White <br/> Cliffs and Fish</div>
                                <div className="flex flex-row items-center">
                                      <div><Button text={'Read more →'}/></div>
                                    <Player title= {'The chalk cliff of Beachy Head'} time={'18:05'}/>
                                </div>
                            </div>
                            
                        </div>
                        <div className="flex flex-col">
                                <div className="text-gray-900 text-sm font-bold bg-white py-5 px-6 border-b-2 rounded-tr-xl uppercase">Recommended for you</div>
                                <RecommendedCategory color={'text-teal-400'} category={"food"} subtitle={'For Chicken-Fried Steak, Too Much Is Just Enough'}/>
                                <RecommendedCategory color={'text-blue-800'} category={"Cars"} subtitle={'For Chicken-Fried Steak, Too Much Is Just Enough'}/>
                                <RecommendedCategory color={'text-purple-400'} category={"Movies"} subtitle={'For Chicken-Fried Steak, Too Much Is Just Enough'}/>
                                <RecommendedCategory color={'text-orange-400'} category={"NFL"} subtitle={'For Chicken-Fried Steak, Too Much Is Just Enough'}/>
                                <RecommendedCategory color={'text-green-400'} category={"Tech Reviews"} subtitle={'For Chicken-Fried Steak, Too Much Is Just Enough'} rounded={'rounded-br-xl'}/>
      
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
                                            <div className="text-xs md:text-sm uppercase font-semibold text-blue-500">Cars</div>
                                            <div className="text-sm md:text-2xl font-bold pt-5">The joy of replicas: A $ 5 million car for $ 50,000</div>
                                            <div className="pt-6 text-sm md:text-base">The 31-year-old self-taught engineer and former amateur racer spends his days building artful recreations of one of most iconic sports cars</div>
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
                                        <div className="flex flex-row font-semibold text-sm pt-4 px-6 pb-7 max-w-64 rounded-b-xl" >200+ Doomed Cats Saved From Euthanization</div>
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
                                <BigArticleCards/>
      
                            </div>
                            <div className="hidden sm:flex flex-col ml-7">
                                <div className=" text-gray-900 font-semibold bg-white py-4 px-6 border-b-2 rounded-t-xl">Recommended for you</div>
                                <RecommendedArticles/>
                                <div className="text-center text-sm bg-white pt-2 pb-3 font-semibold rounded-b-xl cursor-pointer">Read more</div>
                
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
                                          <h1 className='text-3xl text-white font-semibold pt-7 px-12 mb-10'>Readers Choice winners: Your wine country favorites</h1>
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