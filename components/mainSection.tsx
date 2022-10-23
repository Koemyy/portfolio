import AboutMe from './aboutMe';
import Navbar from './navBar';
import Icons from './icons'

interface mainSection {
    title: string,
}

function MainSection({title}: mainSection) {
    return(
        <section className="min-h-screen">
            <Navbar title="Hey there!" href='#' label='Resume'/>
            <AboutMe name="Francine Nogueira" professional="Front-end developer and UI/UX designer." about="Systems analysis and development student, 
            I'm very interested in the front-end and UI/UX area, always looking to learn and understand the user's needs. Nice to meet you!"/>
            <Icons/>
        </section>
    );
}

export default MainSection;
