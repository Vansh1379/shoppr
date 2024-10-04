import { Fotter } from '../components/Fotter'
import { LandingCompo } from '../components/LandingCompo'
import { LandingProduct } from '../components/LandingProduct'
import { Navbar } from '../components/Navbar'


export const LandingPage = () => {
    return (
        <div className='overflow-hidden'>
            <Navbar />
            <LandingCompo />
            <LandingProduct />
            <Fotter />
        </div>
    )
}
