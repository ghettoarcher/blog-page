
import Home from "./components/Home"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import ArticlePage from "./Pages/ArticlePage"

function App() {

return (
    <BrowserRouter>
    <Routes>
        <Route path="*" element={<Home/>}/> 
        <Route path="article-page" element={<ArticlePage/>}/> 
    </Routes>
    </BrowserRouter>
)
}

export default App
