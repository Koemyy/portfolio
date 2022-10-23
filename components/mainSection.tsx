import AboutMe from './aboutMe';
import Navbar from './navBar';
import Icons from './icons'
import Avatar from './avatar';
import ArtSection from './artSection';


function MainSection() {
    return(
        <section className="min-h-screen">
            <Navbar title="Hey there!" href='#' label='Resume'/>
            <AboutMe name="Francine Nogueira" professional="Front-end developer and UI/UX designer." about="Systems analysis and development student, 
            I'm very interested in the front-end and UI/UX area, always looking to learn and understand the user's needs. Nice to meet you!"/>
            <Icons/>
            <Avatar/>
            <ArtSection title='My Works' subtitle="Take a look at my projects in Figma and some sites that I've made!"/>
            
        </section>
    );
}

export default MainSection;
