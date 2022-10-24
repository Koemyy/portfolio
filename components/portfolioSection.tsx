import { IMAGES_MANIFEST } from 'next/dist/shared/lib/constants';
import placeholder from '../public/placeholder.png'
import PortfolioImages from './portfolioImages';

interface portfolioSection {
    title: string,
    subtitle: string,
}

const images = 
[
    {
        "image": placeholder,
    },
    {
        "image": placeholder,
    },
    {
        "image": placeholder,
    },
    {
        "image": placeholder,
    }
]

function PortfolioSection({title, subtitle}: portfolioSection) {
    return(
        <section>
            <div>
                <h3 className="font-medium text-gray-700 text-center text-3xl">{title}</h3>
                <p className="text-center text-md py-2 leading-8 text-gray-700">{subtitle}</p>
            </div>
            <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap justify-center'>
                {images.map(images => {
                        return (
                            <PortfolioImages
                            image={images.image}
                            key="Image"
                            />
                        )
                    })}
            </div>
        </section>
    );
}

export default PortfolioSection;
