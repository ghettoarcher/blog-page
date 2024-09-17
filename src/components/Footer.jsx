import FooterColumn from "./FooterColumn"
import Socials from './Socials';
import Button from "./Button";
const Footer = () => {
      return(
            <div>
          <div className="container mx-auto px-5">
              <div className="flex flex-col items-center mt-14 text-black ">
                  <div className="text-4xl font-bold">Subscribe now and get 20% off</div>
                  <div className="flex flex-row mt-6 mb-16 gap-3">
                      <input className="border-2 rounded-xl mr-2 max-w-52 pl-5 pr-5" type="text" name="" id="" placeholder="Enter your email"/>
                        <Button  text={'Subscribe'}/>
              </div>
              </div>
              <div className="flex flex-row mb-10 container">
                  <img  className="w-full"src="/src/assets/icons/Line-5.svg" alt=""/>
                  <img  className="w-full"src="/src/assets/icons/Line-4.svg" alt=""/>
                  <img  className="w-full"src="/src/assets/icons/Line-3.svg" alt=""/>
                  <img  className="w-full"src="/src/assets/icons/Line-2.svg" alt=""/>
                  <img  className="w-full"src="/src/assets/icons/Line-1.svg" alt=""/>
                  <img  className="w-full"src="/src/assets/icons/Line.svg" alt=""/>
              </div>
              <div className="flex flex-row justify-between pb-16 border-b-2 text-black">
                    <FooterColumn title={'News'} links={['Nation','World','Politics','Solar Eclipse']}/>
                    <FooterColumn title={'Arts'} links={['Art & Design','Movies','People','Video: Arts', 'Theater']}/>
                    <FooterColumn title={'Travel'} links={['Destinations','Flights','Business Travel']}/>
                    <FooterColumn title={'Sports'} links={['Olympics','Motor Sports','Volleyball','MMA','Cycling']}/>
                    <FooterColumn title={'Tech'} links={['Tech News','Tech Columnists','Tech Reviews','Talking Tech']}/>
                    <FooterColumn title={'News'} links={['Money','Markets','Business','Personal Finance','Retirement','Careers']}/>
              </div>
              <div>
                  <div className="flex flex-row items-center  justify-between py-7 border-b-2">
                      <div className="flex flex-row items-center">
                          <a href="#" className="pr-7"><img src="/src/assets/icons/Symbol.svg" alt=""/></a>
                          <a href="#" className="uppercase pr-7 font-medium text-sm md:text-md lg:text-lg">Contact Us</a>
                          <a href="#" className="uppercase pr-7 font-medium text-sm md:text-md lg:text-lg">Work with Us</a>
                          <a href="#" className="uppercase pr-7 font-medium text-sm md:text-md lg:text-lg">Advertise</a>
                          <a href="#" className="uppercase pr-7 font-medium text-sm md:text-md lg:text-lg">Your Ad Choise</a>
                      </div> 
                    <Socials/>
                  </div>
              </div>
              <div className="flex flex-row justify-between text-gray-500 mt-10 mb-14 text-sm ">
                  <div>Universal’s business concept is to offer fashion and quality at the best price in a sustainable way. Universal has since it was <br/> founded in 2015 grown into one of the world's leading fashion companies. </div>
                  <div>© 2019 Universal UI Kit</div>
              </div>
              
          </div>
        
      </div>
      )
}

export default Footer;