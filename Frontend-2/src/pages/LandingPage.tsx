import { LandingCompo } from '../components/LandingCompo'
import { Navbar } from '../components/Navbar'
import { RunningDiv } from '../components/RunningDiv'

export const LandingPage = () => {
    return (
        <div className='overflow-hidden'>
            <Navbar />
            <RunningDiv />
            <LandingCompo/>
        </div>
    )
}
