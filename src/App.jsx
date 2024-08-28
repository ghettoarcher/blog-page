
import Home from "./components/Home"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import ArticlePage from "./Pages/ArticlePage"

function App() {

    
return (
    <BrowserRouter>
    <Routes>
        <Route path="*" element={<Home/>}/> 
        <Route path="article-page" element={<ArticlePage title={'Five Travel Stories From 2017 to Help You Escape Into the World'} subtitle={'From the coastlines of Europe to remote Kodiak Island, Alaska, here are five of our favorite stories to help you explore the world'} postDate={'Aug 6, 10:23 pm'} likes={92} comments={21} shares={3} text={'Years ago, on a hot afternoon in a suburb of Dallas, I sat in a restaurant called Babe’s with the Texas food historian Robb Walsh and ate an enormous quantity of chicken-fried steak. We didn’t talk much because we were focused on our food, but when we did, it was about the mysteries of the delicious. A chicken-fried steak is nothing to champion, after all, at least on its face. It’s just cheap beef pounded thin, dressed in seasoned flour and fried, an Americanized taste of the schnitzel brought to Texas by German immigrants in the 19th century. Peppery cream gravy generally accompanies the steak. That gravy can be gummy when it’s not prepared well. And the steak beneath it can be dry, or soggy, or both. Ours was neither. Walsh and I marveled at the way the texture of the meat’s crisp exterior was heightened by the silkiness of the gravy, at the way sweet and salty combined in the dish and at the manner in which the whole experience was so much greater than the parts. Soon enough I went home to recreate the meal.'}/>}/> 
    </Routes>
    </BrowserRouter>
)
}

export default App
