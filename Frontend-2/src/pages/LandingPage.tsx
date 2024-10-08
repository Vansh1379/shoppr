import { useEffect, useState } from 'react'
import { Fotter } from '../components/Fotter'
import { LandingCompo } from '../components/LandingCompo'
import { LandingProduct } from '../components/LandingProduct'
import { Navbar } from '../components/Navbar'
import { LoginNavbar } from '../components/LoginNavbar'

const scrollbarStyles = `
  /* Fancy scrollbar styles */
  ::-webkit-scrollbar {
    width: 12px;
    background: transparent;
  }

  ::-webkit-scrollbar-track {
    background: rgba(241, 241, 241, 0.8);
    border-radius: 8px;
    margin: 4px;
    border: 2px solid transparent;
    background-clip: padding-box;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(45deg, #EC4899, #D946EF);
    border-radius: 8px;
    border: 3px solid transparent;
    background-clip: padding-box;
    transition: all 0.3s ease;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(45deg, #DB2777, #C026D3);
    border: 2px solid transparent;
  }

  /* For Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #EC4899 rgba(241, 241, 241, 0.8);
  }

  /* Make sure the page always has a scrollbar to prevent layout shifts */
  html {
    overflow-y: scroll;
  }
`

export const LandingPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = scrollbarStyles;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  return (
    <div className='overflow-hidden'>
      {isLoggedIn ? <LoginNavbar /> : <Navbar />}
      <LandingCompo />
      <LandingProduct />
      <Fotter />
    </div>
  )
}