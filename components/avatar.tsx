import Image from 'next/image'
import me from '../public/me.png'

function Avatar() {
    return(
        <div className="mx-auto relative bg-gradient-to-b from-pink-400 rounded-full w-80 h-80 mt-10 overflow-hidden">
            <Image src={me} layout="fill" objectFit='cover'/>
        </div>
    );
}

export default Avatar;
