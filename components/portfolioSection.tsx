import pet from '../public/pet_adoption.png'
import PortfolioImages from './portfolioImages';
import pokedex_react from '../public/pokedex_react.png';
import netflix_react from '../public/netflix-react.png';

interface portfolioSection {
    title: string,
    subtitle: string,
}

const images =
[
    {
        "image": pet,
        "link": "https://www.figma.com/community/file/1176922913252839072/pet-adoption",
    },
    {
        "image": pokedex_react,
        "link": "https://pokedex-koemyys-projects.vercel.app/"
    },
    {
        "image": netflix_react,
        "link": "https://netflix-react-80ef1.web.app/"
    },
]

function PortfolioSection({title, subtitle}: portfolioSection) {
    return(
        <section>
            <div>
                <h3 className="font-medium text-gray-700 text-center text-3xl">{title}</h3>
                <p className="text-center text-md py-2 leading-8 text-gray-700">{subtitle}</p>
            </div>
                <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap justify-center'>
                    {images.map((images, index) => {
                            return (
                                <PortfolioImages
                                image={images.image}
                                link={images.link}
                                key={index}
                                />
                            )
                        })}
                </div>
        </section>
    );
}

export default PortfolioSection;
