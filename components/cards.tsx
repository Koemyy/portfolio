import Image, { StaticImageData } from 'next/image'

interface cardsSection{
    image: StaticImageData,
    title: string,
    subtitle: string
    paragraph: string,
    tools: string[],
}

function Cards(props: cardsSection) {
    return(
        <div className='lg:mx-10 sm:w-96 md:w-96 lg:w-96 mx-auto border border-pink-200 text-center shadow-lg p-10 rounded-xl my-10 hover:bg-pink-100 ease-in duration-200'>
            <Image src={props.image} width={100} height={100}/>
            <h3 className='text-xl font-medium pt-8 pb-2'>{props.title}</h3>
            <p className='py-2'>{props.subtitle}</p>
            <h4 className='text-lg py-4 text-pink-400'>{props.paragraph}</h4>
            {props.tools.map(tools => {
                return (
                    <p key={tools} className='text-gray-700 py-1'>{tools}</p>
                )
            })}
        </div>  
    );
}

export default Cards;
