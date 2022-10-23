import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {FiFigma} from 'react-icons/fi'

function Icons() {
    return(
        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-800'>
           <a className='hover:text-pink-300 ease-in duration-200' href=""><AiFillGithub /></a>
           <a className='hover:text-pink-300 ease-in duration-200' href=""><AiFillLinkedin /></a>
           <a className='hover:text-pink-300 ease-in duration-200' href=""><FiFigma /></a>
        </div>
    );
}

export default Icons;
