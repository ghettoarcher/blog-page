import Header from "../components/Header";
import Footer from "../components/Footer";
import ProfileCard from "../components/ProfileCard";
import { Link } from "react-router-dom";
import MaterialOnTheme from "../components/MaterialOnTheme";
import Tag from "../components/Tag";
import Feedback from "../components/Feedback";
import VerticalArticleCard from "../components/VerticalArticleCard";
import Comments from "../components/Comments";
const ArticlePage = () =>{
      return(
            <>
            <Header/>
            
            <div className="bg-article-bg bg-no-repeat bg-cover py-14 relative  ">
                  <div className="container max-w-5xl px-5 mx-auto">
                        <div className="flex flex-col justify-around">
                              <div className="flex flex-row justify-between font-semibold">
                                    <div className="text-xs uppercase text-blue-800 ">Destinations</div>
                                    <div className="flex flex-row text-sm text-white ">
                                          <Link to={'/'} className="flex flex-row gap-1 items-center mr-8"><img src="/src/assets/icons/Home.svg" alt="Back home" />Back to main</Link>
                                          <Link className="flex flex-row mr-5 gap-1"><img src="/src/assets/icons/arrow-left.svg" alt="Previous" />Prev</Link>
                                          <Link className="flex flex-row gap-1">Next<img src="/src/assets/icons/arrow-right.svg" alt="Next" /></Link>
                                    </div> 
                              </div>
                              <div className="text-6xl  max-w-2xl mt-12 mb-7 text-white">Five Travel Stories From 2017 to Help You Escape Into the World</div>
                              <div className="text-lg text-white max-w-xl">From the coastlines of Europe to remote Kodiak Island, Alaska, here are five of our favorite stories to help you explore the world</div>
                              <div className="flex flex-row text-white items-center mt-14 gap-5">
                                    <div className="text-xs">Aug 6, 10:23 pm</div>
                                    <div className="text-xs flex flex-row gap-1"><img src="/src/assets/icons/Heart.svg" alt="Likes" />830</div>
                                    <div className="text-xs flex flex-row gap-1"><img src="/src/assets/icons/Comment.svg" alt="Comments" />19</div>
                                    <div className="text-sm gap-1 flex flex-row py-2 pl-5 pr-6 rounded-2xl border-2 cursor-pointer"><img src="/src/assets/icons/Share.svg" alt="Shares" />142 shares</div>
                              </div>
                              
                        </div>
                        <ProfileCard/>
                  </div>
            </div>
            <div className="pt-14">
                  <div className="container max-w-5xl mx-auto  top-0 right-0">
                        <div className="max-w-xl text-lg ">
                        <div>Many geographers are trained in toponymy and cartology, this is not their main preoccupation. Geographers study the space and the temporal database distribution of phenomena,processes, and features as well as the interaction of humans and their environment. Because space and place affect a variety of topics, such as economics, health, climate, plants and animals, geography is highly interdisciplinary. The interdisciplinary nature of the geographical approach depends on an attentiveness to the relationship between physical and human phenomena and its spatial patterns.</div>
                        <div>
                              <h3 className="text-2xl font-bold py-8">Integrated Geography</h3>
                              <p>Geography as a discipline can be split broadly into two main subsidiary fields: human geography and physical geography. The former largely focuses on the built environment and how humans create, view, manage, and influence space. The latter examines the natural environment, and how organisms, climate, soil, water, and landforms produce and interact.</p>
                              <p className="pt-5">The accompanying text mentions seven outer regions beyond the encircling ocean. The descriptions of five of them have survived. In contrast to the Imago Mundi, an earlier Babylonian world map dating back to the 9th century BC depicted Babylon as being further north from the center of the world, though it is not certain what that center was supposed to represent. </p>
                              <p className="pt-5">The accompanying text mentions seven outer regions beyond the encircling ocean. The descriptions of five of them have survived. In contrast to the Imago Mundi, an earlier Babylonian world map dating back to the 9th century BC depicted Babylon as being further north from the center of the world, though it is not certain what that center was supposed to represent. </p>
                        </div>
                        </div>
                        
                  </div>
            </div>
            <div>
                  <div className="container px-5 mx-auto">
                        <div className="pt-11 pb-7">
                        <img className="w-full " src="/src/assets/img/Image-221.svg" alt="" />
                        <div className="border-2 rounded-b-xl flex flex-row items-center justify-between">
                              <div className="pl-8 text-sm">Geostatistics deal with quantitative data analysis, specifically the application of statistical methodology</div>
                              <div className="flex flex-row border-l-2 py-3 pl-7">
                                    <img src="/src/assets/img/avatar.svg" alt="" />
                                    <div className="flex flex-col pr-9 pl-2">
                                    <div className="text-sm font-semibold">David Williams</div>
                                    <div className="text-xs">Architect</div>
                                    </div>
                                    
                              </div>
                        </div>
                        </div>
                  </div>
            </div>
                  <div className="container max-w-5xl mx-auto flex flex-col">
                        <div className="flex flex-row">
                        <div className="max-w-xl text-lg ">
                              <div>Many geographers are trained in toponymy and cartology, this is not their main preoccupation. Geographers study the space and the temporal database distribution of phenomena,processes, and features as well as the interaction of humans and their environment. Because space and place affect a variety of topics, such as economics, health, climate, plants and animals, geography is highly interdisciplinary. The interdisciplinary nature of the geographical approach depends on an attentiveness to the relationship between physical and human phenomena and its spatial patterns.</div>
                              <div>
                                    <p>Geography as a discipline can be split broadly into two main subsidiary fields: human geography and physical geography. The former largely focuses on the built environment and how humans create, view, manage, and influence space. The latter examines the natural environment, and how organisms, climate, soil, water, and landforms produce and interact.</p>
                                    <p className="pt-5">The accompanying text mentions seven outer regions beyond the encircling ocean. The descriptions of five of them have survived. In contrast to the Imago Mundi, an earlier Babylonian world map dating back to the 9th century BC depicted Babylon as being further north from the center of the world, though it is not certain what that center was supposed to represent. </p>
                                    <p className="pt-5">The accompanying text mentions seven outer regions beyond the encircling ocean. The descriptions of five of them have survived. In contrast to the Imago Mundi, an earlier Babylonian world map dating back to the 9th century BC depicted Babylon as being further north from the center of the world, though it is not certain what that center was supposed to represent. </p>
                              </div>
                        </div>
                        <MaterialOnTheme img={"/src/assets/img/materialOnTheme.svg"} title={'Application of Postcolonial Theory in the Middle East'} subtitle={'In the essays "Overstating the Arab State", by Nazih Ayubi, and "Is Jordan Palestine?", by Raphael Israel, the authors deal with the psychologically fragmented postcolonial identity.'} views={'1623'} comments={'23'}/>
                        </div>
                        <div className="flex flex-row max-w-xl mt-16">
                              <p className="font-bold text-2xl">Names of places... are not geography... know by heart a whole gazetteer full of them would not, in itself, constitute anyone a geographer. Geography has higher aims than this: it seeks to classify phenomena.</p>
                              <div className="flex flex-col pl-8">
                                    <img src="/src/assets/img/avatar.svg" alt="avatar" />
                                    <div className="text-lg font-semibold">David Williams</div>
                                    <div className="text-sm">Architect</div>
                  
                              </div>
                        </div>
                        <div className="max-w-xl mt-7 mb-7">
                        <p className="text-lg">The Greeks, who were the first to explore geography as both art and science, achieved this through Cartography, Philosophy, and Literature, or through Mathematics. There is some debate about who was the first person to assert that the Earth is spherical in shape, with the credit going either to Parmenides or Pythagoras. Anaxagoras was able to demonstrate that the profile of the Earth was circular by explaining eclipses. However, he still believed that the Earth was a flat disk, as did many of his contemporaries.</p>
                        <p className="text-lg mt-4">The first rigorous system of latitude and longitude lines is credited to Hipparchus. He employed a sexagesimal system that was derived from Babylonian mathematics.</p>
                        </div>
                        <div className=" max-w-xl flex flex-row gap-2 pb-7 mb-7 border-b-2">
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