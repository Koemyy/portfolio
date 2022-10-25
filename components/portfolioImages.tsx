import Image, { StaticImageData } from 'next/image'

interface portfolioImages {
    image: StaticImageData,
}

function PortfolioImages(props: portfolioImages) {
    return(
        <div className='lg:mx-5 lg:basis-1/3 border-2 border-pink-200 rounded-lg  hover:border-pink-300 ease-in duration-300'>
            <div className='cursor-pointer'>
                <Image 
                className='object-cover rounded-lg' 
                src={props.image} 
                width={150} 
                height={100} 
                layout="responsive"/>
                </div>
        </div>
    );
}

export default PortfolioImages;
