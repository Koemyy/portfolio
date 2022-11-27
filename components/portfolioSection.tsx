import { IMAGES_MANIFEST } from 'next/dist/shared/lib/constants';
import placeholder from '../public/placeholder.png'
import pet from '../public/pet_adoption.png'
import PortfolioImages from './portfolioImages';
import pokedex_react from '../public/pokedex_react.gif';

interface portfolioSection {
    title: string,
    subtitle: string,
}

const images =
[
    {
        "image": pet,
        "link": "https://dribbble.com/shots/19874290-Pet-Adoption-App",
    },
    {
        "image": pokedex_react,
        "link": "https://github.com/Koemyy/pokedex-react"
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
