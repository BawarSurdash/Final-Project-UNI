import Navbar from "./navbar";
import { Carousel } from 'antd';
import  Footer  from "./Footer";
import wedding from "../assets/imgs/wedding.webp";
import birthday from "../assets/imgs/birthday.jpg";
import social from "../assets/imgs/social.png";
import concert from "../assets/imgs/concert.jpg";
const contentStyle = {
    margin: 0,
    height: '88vh',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    position: 'relative',
    transition: 'all 0.5s',  
};

const Home = () => {
    return ( 
        <div className="pt-16">
            <Navbar/>
            <Carousel 
                arrows 
                infinite={true} 
                autoplay={false}
                autoplaySpeed={5000}
                pauseOnHover={true}
                pauseOnDotsHover={true}
                speed={1000}
                className="transition-all duration-500"
                dots={{ className: 'transition-all duration-300' }}
            >
                <div className="relative">
                    <div className="absolute inset-0 bg-black/50 z-10"></div>
                    <div style={contentStyle}>
                        <img src={wedding} alt="" className="w-full h-full object-cover opacity-70"/>
                        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center space-y-4">
                            <h2 className="text-5xl font-bold">
                                We are the Event Management Specialists
                            </h2>
                            <p className="text-xl text-gray-200">
                                We personalize your wedding events
                            </p>
                            <button className="!px-4 !py-2 !bg-orange-500 hover:!bg-orange-600 !text-white !text-sm !font-medium !rounded-md !shadow-sm transition-all duration-300 hover:shadow">
                                Book Now
                            </button>
                            
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 bg-black/50 z-10"></div>
                    <div style={contentStyle}>
                        <img src={birthday} alt="" className="w-full h-full object-cover opacity-70"/>
                        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center space-y-4">
                            <h2 className="text-5xl font-bold">
                                Birthday Event Management Specialists
                            </h2>
                            <p className="text-xl text-gray-200">
                                Celebrate Your Events That Lasts Longer
                            </p>
                            <button className="!px-4 !py-2 !bg-orange-500 hover:!bg-orange-600 !text-white !text-sm !font-medium !rounded-md !shadow-sm transition-all duration-300 hover:shadow">
                            Book Now
                        </button>
                            
                          
                        </div>
                  
                        
                    </div>
                </div>
                <div className="relative">
                <div className="absolute inset-0 bg-black/50 z-10"></div>
                <h3 style={contentStyle}>
                    <img src={social} alt="" className="w-full h-full object-cover opacity-70"/>
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center space-y-4">
                        <h2 className="text-5xl font-bold">
                            Social Event Planning Excellence
                        </h2>
                        <p className="text-xl text-gray-200">
                            Corporate Events, Parties & Social Gatherings Made Perfect
                        </p>
                        <button className="!px-4 !py-2 !bg-orange-500 hover:!bg-orange-600 !text-white !text-sm !font-medium !rounded-md !shadow-sm transition-all duration-300 hover:shadow">
                                Book Now
                            </button>
                    </div>
                </h3>
            </div>
            <div className="relative">
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <h3 style={contentStyle}>
                <img src={concert} alt="" className="w-full h-full object-cover opacity-70"/>
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center space-y-4">
                    <h2 className="text-5xl font-bold">
                        Concert & Music Event Experts
                    </h2>
                    <p className="text-xl text-gray-200">
                        Creating Unforgettable Live Music Experiences
                    </p>
                    <button className="!px-4 !py-2 !bg-orange-500 hover:!bg-orange-600 !text-white !text-sm !font-medium !rounded-md !shadow-sm transition-all duration-300 hover:shadow">
                    Book Now
                </button>
                </div>
            </h3>
        </div>
            </Carousel>
            <br />
            <Footer/>
        </div>
    );
}

export default Home;