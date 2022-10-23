import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {FiFigma} from 'react-icons/fi'

function Icons() {
    return(
        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-800'>
           <a href=""><AiFillGithub /></a>
           <a href=""><AiFillLinkedin /></a>
           <a href=""><FiFigma /></a>
        </div>
    );
}

export default Icons;
