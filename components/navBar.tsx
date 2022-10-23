import {BsFillMoonStarsFill} from 'react-icons/bs';

interface navBar {
    title: string,
    label: string,
    href: string,
}

function Navbar({title, label, href}: navBar) {
    return(
        <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl'>{title}</h1>
            <ul className='flex items-center'>
                <li>
                    <BsFillMoonStarsFill className='text-gray-700 cursor-pointer text-2xl'/>
                </li>
                <li>
                    <a className='bg-gradient-to-r from-pink-400 to-pink-300 text-white px-4 py-2 rounded-md ml-8' href={href}>{label}</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
