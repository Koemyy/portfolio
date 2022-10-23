import cardsSection from './cards'
import Cards from './cards'
import art from '../public/art_pallete.png'
import woman from '../public/woman_tech.png'

interface artSection {
    title: string,
    subtitle: string,
}

const cards = 
[
    {
        "image": art,
        "title": "Design",
        "subtitle": "Studying design to be a UI/UX pro!",
        "paragraph": "Design tools I use",
        "tools": [
            "Figma",
            "Photoshop",
            "Illustrator"
        ]
    },
    {
        "image": woman,
        "title": "Front-end",
        "subtitle": "My stack",
        "paragraph": "Technologies that I use",
        "tools": [
            "React",
            "Typescript",
            "Tailwind"
        ]
    }
]

function ArtSection({title, subtitle}: artSection) {
    return(
        <section>
            <div className='pt-10'>
                <h3 className="font-medium text-gray-700 text-center text-3xl">{title}</h3>
                <p className="text-center text-md py-2 leading-8 text-gray-700">{subtitle}</p>
            </div>
            {cards.map(cards => {
                return (
                    <Cards 
                    image={cards.image}
                    title={cards.title}
                    subtitle={cards.subtitle}
                    paragraph={cards.paragraph}
                    tools={cards.tools}
                    />
                )
            })}
        </section>
    );
}

export default ArtSection;
