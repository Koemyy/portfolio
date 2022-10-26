import AboutMe from './aboutMe';
import Navbar from './navBar';
import Icons from './icons'
import Avatar from './avatar';
import ArtSection from './artSection';
import PortfolioSection from './portfolioSection';
import {useState} from 'react';

function MainSection() {
    const [darkMode, setDarkMode] = useState(false);
    
    return(
        <section className="min-h-screen">
            <div className={darkMode ? 'dark': ""}>
                <Navbar title="Welcome ;)" action={() => setDarkMode(prev => prev)}/>
                <AboutMe name="Francine Nogueira" professional="Front-end developer and UI/UX designer." about="Systems analysis and development student, 
                I'm very interested in the front-end and UI/UX area, always looking to learn and understand the user's needs."/>
                <Icons/>
                <Avatar/>
                <ArtSection title='About me' subtitle="Tools and technologies that I use!"/>
                <PortfolioSection title="Portfolio" subtitle="Take a look at my projects in Figma and some sites that I've made!"/>
            </div>
        </section>
    );
}

export default MainSection;
