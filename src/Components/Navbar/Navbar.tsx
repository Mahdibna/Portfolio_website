import { Link ,useLocation} from "react-router-dom";
import './navbar.css';
import { useEffect } from "react";
const Navbar = () => {
  const location = useLocation();
  let loc = location.pathname;
  useEffect(()=>{
    loc=='/' ? loc='Home':null;
    let links=document.querySelectorAll('.child_nav a');
    links.forEach(link=>(link.textContent).includes(loc.slice(1))?link.classList.add('focus'):link.classList.remove('focus'))
    console.log(loc)
  },[loc])

  useEffect(() => {
    var nav = document.getElementsByClassName('nav')[0];
var prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', () => {
  var currentScrollPos = window.pageYOffset;

  if (currentScrollPos > prevScrollPos && currentScrollPos>100) {
    nav.classList.add('hide')
  } else {
    nav.classList.remove('hide');
  }
  });

  
    document.addEventListener('DOMContentLoaded', function () {
      console.log("DOMContentLoaded event triggered");
      const darkModeToggle = document.getElementById('darkmode-toggle') as HTMLInputElement;
      const isDarkMode = localStorage.getItem('darkMode');
      if (isDarkMode === 'true') {
        darkModeToggle.checked = true;
      }
      darkModeToggle.addEventListener('change', function () {
        if (darkModeToggle.checked) {
          localStorage.setItem('darkMode', 'true');
        } else {
          localStorage.setItem('darkMode', 'false');
        }
      });
    });
    let menuElement = document.querySelector('.menu') as HTMLInputElement;
    const aElements = document.querySelectorAll('.child_nav a');
    aElements.forEach((aElement) => {
      aElement.addEventListener('click', function () {
        menuElement.checked ? (menuElement.checked = false) : null;
      });
    });
    window.addEventListener('resize', () => {
      let x = window.innerWidth;
      if (x > 700 || menuElement.checked) {
        menuElement.checked = false;
        console.log(menuElement.checked);
      }
    });
  }, []);
  return (
    <div className="nav">
      <input
        type="checkbox"
        role="button"
        aria-label="Display the menu"
        className="menu"
      />
      <div className="child_nav">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Services">Services</Link>
        <Link to="/Hire">Hire Me</Link>
        <Link to="/Contact">Contact Me</Link>
      </div>
    </div>
  );
};

export default Navbar;

