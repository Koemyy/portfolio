import Image, { StaticImageData } from 'next/image'

interface portfolioImages {
    image: StaticImageData,
    link: string | undefined,
}

function PortfolioImages(props: portfolioImages) {
    return(
        <div className='lg:mx-5 lg:basis-1/3 border-2 border-pink-200 rounded-lg  hover:border-pink-300 ease-in duration-300'>
            <a href={props.link} target="_blank" rel="noreferrer">
                <div className='cursor-pointer'>
                    <Image
                    className='object-cover rounded-lg'
                    src={props.image}
                    width={150}
                    height={100}
                    layout="responsive"/>
                    </div>
            </a>
        </div>
    );
}

export default PortfolioImages;
