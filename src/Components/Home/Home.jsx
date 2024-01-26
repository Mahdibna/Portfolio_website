import './Home.css';
import Globe from 'vanta/src/vanta.globe'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';
const Home=()=>{
    useEffect(() => {
        AOS.init();
        Globe({
          el: ".parent",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 'white',
          points: 6.00,
          spacing: 14.00
        })
        
      }, []);
    return(<div className='parent'>
   <div data-aos="fade-right">
<h1>I'M MAHDI BEN AHMED A MERN <br /><span>STACK DEVELOPER</span></h1>
<p className="home-description">
I am a 20-year-old web developer based in Tunisia, specializing in the MERN stack. I am dedicated to creating clean and user-friendly experiences, and I am passionate about developing excellent software that enhances the lives of those in my community.
            </p>
            <Link to="/About" className="Btn ">
              <span>More about me </span>
              <div className="svg-wrapper-1">
                <div className="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    ></path>
                  </svg>
                </div>
              </div>
            </Link>
   </div>
</div>)
}
export default Home