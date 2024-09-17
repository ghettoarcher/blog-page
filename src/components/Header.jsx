import Subscription from "./Subscription"
import TodayDate from "./TodayDate"
import Weather from "./Weather"
import { Link } from "react-router-dom"
import HeaderCategory from "./HeaderCategory"
const Header = () => {
      return (
            <header>
          <div className="container mx-auto px-5">
              <div className="flex flex-row justify-between border-b-2  ">
                      <div className="grid  grid-cols-2">
                          <div className="pe-6 flex flex-row border-r-2 pt-4">
                              <div className="mr-4">
                                  <img src="/src/assets/icons/burger-menu.svg" alt=""/>
                              </div>
                              <div className="text-base font-semibold">Sections</div>
                          </div>
                          <div className="flex flex-row pt-4 ml-6">
                              <img className="w-5 h-5 mr-2" src="/src/assets/icons/search.svg" alt=""/>
                              <input type="plac" />
                          </div>
                      </div>
                      <div className="pt-2 flex flex-row">
                          <div className="flex flex-row">
                              <div className="mr-2"><img src="/src/assets/icons/subscription-icon.svg" alt=""/></div>
                              <Subscription/>
                          </div>
                          <div className="flex flex-row items-center ml-7 cursor-pointer">
                              <div className="mr-2"><img src="/src/assets/icons/profile.svg" alt=""/></div>
                              <div className="text-base">Sign In</div>
                          </div>
                      </div>
              </div>
              <div className="flex flex-row items-center justify-between pl-7">
                  <Link to={'/'} className="hidden md:flex flex-row items-center text-sm md:text-lg"><img src="/src/assets/icons/freedom.svg" alt=""/>Boston and New York Bear Brunt</Link>

                  <Link to={'/'}><img src="/src/assets/icons/logo.svg" alt=""/></Link>
                  <div className="flex flex-row">
                      <TodayDate/>
                      <Weather/>

                  </div>
              </div>
              
          </div>
          <div className="categories bg-blue-950">
  <div className="container mx-auto px-5">
    <ul className="flex flex-wrap justify-between gap-4 py-4">
    <HeaderCategory title={"News"}/>
    <HeaderCategory title={"Travel"}/>
    <HeaderCategory title={"Business"}/>
    <HeaderCategory title={"Tech"}/>
    <HeaderCategory title={"Food"}/>
    <HeaderCategory title={"Sports"}/>
    <HeaderCategory title={"World"}/>
    <HeaderCategory title={"Health"}/>
    <HeaderCategory title={"Science"}/>
    <HeaderCategory title={"Politics"}/>
    <HeaderCategory title={"Entertainment"}/>

    </ul>
  </div>
</div>
      </header>
      )
}

export default Header;