interface aboutMe {
    name: string,
    professional: string,
    about: string,
}

function AboutMe({name, professional, about}: aboutMe) {
    return(
        <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-pink-400 font-medium'>{name}</h2>
            <h3 className='text-2xl py-2'>{professional}</h3>
            <p className='text-md py-5 leading-8 text-gray-700'>{about}</p>
        </div>
    );
}

export default AboutMe;
