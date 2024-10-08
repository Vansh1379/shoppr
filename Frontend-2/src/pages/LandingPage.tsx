import { useEffect, useState } from 'react'
import { Fotter } from '../components/Fotter'
import { LandingCompo } from '../components/LandingCompo'
import { LandingProduct } from '../components/LandingProduct'
import { Navbar } from '../components/Navbar'
import { LoginNavbar } from '../components/LoginNavbar'

export const LandingPage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

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