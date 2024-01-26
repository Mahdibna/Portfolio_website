import { FaCog, FaTimes } from "react-icons/fa";
import { useEffect, useState,} from "react";
import Theme1 from '../../assets/blue-circle-png-8.png';
import Theme2 from '../../assets/Green.png';
import Theme3 from '../../assets/orange.png';
import Theme4 from '../../assets/Red.png';
import Theme5 from '../../assets/gold.png';
import Theme6 from '../../assets/Bink.png';
import Theme7 from '../../assets/Purple.png';
import Theme8 from '../../assets/Purple2.png';
import React from "react";
import './themes.css';
const ThemeItem = ({ color, img, ChangeColor }) => {
  return <img src={img} className="theme_img" onClick={() => ChangeColor(color)} />;
};
const themes = [
    {
      id: 1,
      img: Theme1,
      color: '#00A9FF',
    },
    {
      id: 2,
      img: Theme2,
      color: '#41A145',
    },
    {
      id: 3,
      img: Theme3,
      color: '#FF5C26',
    },
    {
      id: 4,
      img: Theme4,
      color: ' #C0131A',
    },
    {
      id: 5,
      img: Theme5,
      color: '#FFCD4B',
    },
    {
      id: 6,
      img: Theme6,
      color: '#FF00FF',
    },
    {
      id: 7,
      img: Theme7,
      color: '#8F1FAC',
    },
    {
      id: 8,
      img: Theme8,
      color: 'hsl(271, 76%, 53%)',
    },
  ];
const GetStorageColor = () => {
  let Color = 'hsl(271, 76%, 53%)';
  if(localStorage.getItem('Color')){
    Color = localStorage.getItem('Color');
  }
  return Color;
}
const Themes = () => {
const [Mode , setMode]=useState(localStorage.getItem('darkmode') || false);
  const [Show_switcher, SetShow_switcher] = useState(false)
  const [Color, SetColor] = useState(GetStorageColor())
  useEffect(() => {
    document.documentElement.style.setProperty('--c', Mode ? '#989898': 'black')
  },[Mode])
  useEffect(()=>{
    let check=document.getElementById('darkmode-toggle');
   check.checked=Mode;
    check.addEventListener('change',()=>{
       localStorage.setItem('darkmode' , check.checked ? true : false);
       setMode(!Mode);
    })
  },[Mode])
  const ChangeColor = (Color) => {
    SetColor(Color)
    localStorage.setItem('Color',Color)
  }
  useEffect(() => {
    document.documentElement.style.setProperty('--first-color',Color)
  },[Color])
  return (
    <div>  
      <div className={`${Show_switcher ? 'Show_switcher' : ''} Style_Switcher `}>
      <div className="dark_light">
          <input type="checkbox" id="darkmode-toggle" />
          <label htmlFor="darkmode-toggle">
            <svg
              width="25px"
              className="sun"
              height="25px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
            >
             <g id="SVGRepo_bgCarrier" stroke-width="0"/>
      
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
      
      <g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="6" stroke="#FFFFFF" stroke-width="1.5"/> <path d="M12 2V3" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"/> <path d="M12 21V22" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"/> <path d="M22 12L21 12" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"/> <path d="M3 12L2 12" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"/> <path opacity="0.5" d="M19.0708 4.92969L18.678 5.32252" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"/> <path opacity="0.5" d="M5.32178 18.6777L4.92894 19.0706" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"/> <path opacity="0.5" d="M19.0708 19.0703L18.678 18.6775" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"/> <path opacity="0.5" d="M5.32178 5.32227L4.92894 4.92943" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"/> </g>
            </svg>
            <svg
              width="169px"
              height="169px"
              className="moon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
            >
             <g id="SVGRepo_bgCarrier" stroke-width="0"/>
        
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
        
        <g id="SVGRepo_iconCarrier"> <path d="M21.0672 11.8568L20.4253 11.469L21.0672 11.8568ZM12.1432 2.93276L11.7553 2.29085V2.29085L12.1432 2.93276ZM21.25 12C21.25 17.1086 17.1086 21.25 12 21.25V22.75C17.9371 22.75 22.75 17.9371 22.75 12H21.25ZM12 21.25C6.89137 21.25 2.75 17.1086 2.75 12H1.25C1.25 17.9371 6.06294 22.75 12 22.75V21.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75V1.25C6.06294 1.25 1.25 6.06294 1.25 12H2.75ZM15.5 14.25C12.3244 14.25 9.75 11.6756 9.75 8.5H8.25C8.25 12.5041 11.4959 15.75 15.5 15.75V14.25ZM20.4253 11.469C19.4172 13.1373 17.5882 14.25 15.5 14.25V15.75C18.1349 15.75 20.4407 14.3439 21.7092 12.2447L20.4253 11.469ZM9.75 8.5C9.75 6.41182 10.8627 4.5828 12.531 3.57467L11.7553 2.29085C9.65609 3.5593 8.25 5.86509 8.25 8.5H9.75ZM12 2.75C11.9115 2.75 11.8077 2.71008 11.7324 2.63168C11.6686 2.56527 11.6538 2.50244 11.6503 2.47703C11.6461 2.44587 11.6482 2.35557 11.7553 2.29085L12.531 3.57467C13.0342 3.27065 13.196 2.71398 13.1368 2.27627C13.0754 1.82126 12.7166 1.25 12 1.25V2.75ZM21.7092 12.2447C21.6444 12.3518 21.5541 12.3539 21.523 12.3497C21.4976 12.3462 21.4347 12.3314 21.3683 12.2676C21.2899 12.1923 21.25 12.0885 21.25 12H22.75C22.75 11.2834 22.1787 10.9246 21.7237 10.8632C21.286 10.804 20.7293 10.9658 20.4253 11.469L21.7092 12.2447Z" fill="#ffffff"/> </g>
            </svg>
          </label>
        </div>
        <div className="theme_toggler" onClick={() => SetShow_switcher(!Show_switcher)} >
          <FaCog className="Switcher_icon"  />
        </div>
        <h3 className="Switcher_title">Style Switcher</h3>
        <div className="style_switcher_item">
          {themes.map((theme, index) => {
            return <ThemeItem key={index} {...theme} ChangeColor={ChangeColor} />;
          })}
        </div>
        <div className="Switcher_Close"  onClick={() => SetShow_switcher(!Show_switcher)}>
          <FaTimes className="Switcher_icon" />
        </div>
      </div>
    </div>
  );
};
export default Themes;
