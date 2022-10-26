import { MouseEventHandler } from 'react';
import {BsFillMoonStarsFill} from 'react-icons/bs';

interface navBar {
    title: string,
    action: MouseEventHandler,
}

function Navbar({title, action}: navBar) {
    return(
        <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl'>{title}</h1>
            <ul className='flex items-center'>
                <li hidden>
                    <BsFillMoonStarsFill onClick={action} className='text-gray-700 cursor-pointer text-2xl'/>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
