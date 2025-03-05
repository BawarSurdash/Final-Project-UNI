import Navbar from "./navbar";
import { Carousel } from 'antd';
import  Footer  from "./Footer";
const contentStyle = {
    margin: 0,
    height: '88vh',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    transition: 'all 0.5s',  // Add transition to content
};

const Home = () => {
    return ( 
        <div className="pt-16">
            <Navbar/>
            <Carousel 
                arrows 
                infinite={true} 
                autoplay={true}
                autoplaySpeed={5000}
                pauseOnHover={true}
                pauseOnDotsHover={true}
                speed={1000}
                className="transition-all duration-500"
                dots={{ className: 'transition-all duration-300' }}
            >
                <div className="transition-transform duration-500 ">
                    <h3 style={contentStyle}><button>Book Now</button>1</h3>
                    
                </div>
                <div className="transition-transform duration-500 ">
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div className="transition-transform duration-500 ">
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div className="transition-transform duration-500 ">
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
            <br />
            <Footer/>
        </div>
    );
}

export default Home;