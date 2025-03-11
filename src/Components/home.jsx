import Navbar from "./navbar";
import { Carousel } from 'antd';
import  Footer  from "./Footer";
import wedding from "../assets/imgs/wedding.webp";
import birthday from "../assets/imgs/birthday.jpg";
import social from "../assets/imgs/social.png";
import concert from "../assets/imgs/concert.jpg";
import glass from "../assets/imgs/glass.jpg";
import i1 from "../assets/imgs/1.jpg";
import i2 from "../assets/imgs/2.jpg";
import i3 from "../assets/imgs/3.jpg";
import i4 from "../assets/imgs/4.jpg";
import Gallery from "./gallery";
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
            <div className="text-center p-10">
            <h1 className="text-4xl font-light text-gray-700">
              Welcome to <span className="text-orange-500 font-semibold">Events</span>
            </h1>
            <p className="text-lg text-gray-600 mt-4">
              From Wedding Functions to Birthday Parties or Corporate Events to Musical Functions,  
              We offer a full range of Events Management Services that scale to your needs & budget.
            </p>
      
            <div className="grid md:grid-cols-3 gap-8 mt-10">
              {/* Card 1 */}
              <div className="text-center p-6">
                <div className="text-orange-500 text-5xl mb-4">🧩</div>
                <h2 className="text-xl font-semibold text-gray-700">Great Services</h2>
                <p className="text-gray-500 mt-2">
                  Lorem ipsum dolor sit amet consectetur elit sed lorem tempor incididunt ut labore.
                </p>
                <button className="mt-4 border px-6 py-2 rounded-md text-gray-600 hover:bg-gray-100">
                  Read More
                </button>
              </div>
      
              {/* Card 2 */}
              <div className="text-center p-6">
                <div className="text-orange-500 text-5xl mb-4">🧩</div>
                <h2 className="text-xl font-semibold text-gray-700">Great People</h2>
                <p className="text-gray-500 mt-2">
                  Lorem ipsum dolor sit amet consectetur elit sed lorem tempor incididunt ut labore.
                </p>
                <button className="mt-4 border px-6 py-2 rounded-md text-gray-600 hover:bg-gray-100">
                  Read More
                </button>
              </div>
      
              {/* Card 3 */}
              <div className="text-center p-6">
                <div className="text-orange-500 text-5xl mb-4">📊</div>
                <h2 className="text-xl font-semibold text-gray-700">Great Ideas</h2>
                <p className="text-gray-500 mt-2">
                  Lorem ipsum dolor sit amet consectetur elit sed lorem tempor incididunt ut labore.
                </p>
                <button className="mt-4 border px-6 py-2 rounded-md text-gray-600 hover:bg-gray-100">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="text-center p-10">
          {/* Section Title */}
          <h1 className="text-4xl font-light text-gray-700">
            <span className="text-orange-500 font-semibold">Events</span> Services
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            We make your events smart & impactful by personalized event management services.
          </p>

          {/* Grid Layout */}
          <div className="grid md:grid-cols-3 gap-12 mt-12 items-center">
            
            {/* Left Column */}
            <div className="space-y-12">
              <div className="flex items-center gap-6 p-4 hover:bg-gray-50 rounded-lg transition-all duration-300">
                <img src={i1} alt="Social Events" className="w-32 h-32 object-cover rounded-lg shadow-md" />
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-gray-800">Social Events</h3>
                  <p className="text-gray-600 text-md mt-2">Professional planning for corporate gatherings and social functions</p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-4 hover:bg-gray-50 rounded-lg transition-all duration-300">
                <img src={i3} alt="Corporate Seminars" className="w-32 h-32 object-cover rounded-lg shadow-md" />
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-gray-800">Corporate Seminars</h3>
                  <p className="text-gray-600 text-md mt-2">Expert organization for business conferences and meetings</p>
                </div>
              </div>
            </div>

            {/* Center Image */}
            <div className="flex justify-center">
              <div className="relative  p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src={glass} 
                  alt="All Events" 
                  className="w-64 h-80 object-cover rounded-xl border-4 border-white transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              <div className="flex items-center gap-6 p-4 hover:bg-gray-50 rounded-lg transition-all duration-300">
                <img src={i2} alt="Wedding Events" className="w-32 h-32 object-cover rounded-lg shadow-md" />
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-gray-800">Wedding Events</h3>
                  <p className="text-gray-600 text-md mt-2">Complete wedding planning and coordination services</p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-4 hover:bg-gray-50 rounded-lg transition-all duration-300">
                <img src={i4} alt="Birthday Parties" className="w-32 h-32 object-cover rounded-lg shadow-md" />
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-gray-800">Birthday Parties</h3>
                  <p className="text-gray-600 text-md mt-2">Custom birthday celebrations for all ages</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Gallery/>
            <Footer/>
            
        </div>
    );
}

export default Home;