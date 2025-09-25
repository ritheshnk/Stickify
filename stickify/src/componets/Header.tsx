import Logo from '../assets/stickyOffcLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="flex items-center justify-between p-4  h-28">
      <div>
        <img src={Logo} className='w-30 h-30 sm:w-40 sm:h-40 ml-4 sm:ml-40 hover:scale-114 transition-transform duration-200' alt="" />
      </div>
  <nav className='hidden sm:block'>
        <ul className='flex space-x-4 text-lg font-bold mr-40'>
          <li className='m-4 p-6 text-2xl hover:scale-124  hover:text-red-500 transition-transform duration-200 transition-colors'><Link to="/">Home</Link></li>
          <li className='m-4 p-6 text-2xl hover:scale-124  transition-transform duration-200 hover:text-red-500 transition-colors' ><Link to="/about">About</Link></li>
          <li className='m-4 p-6 text-2xl hover:scale-124  transition-transform duration-200 hover:text-red-500 transition-colors'><Link to="/product">Products</Link></li>
          <li className='m-4 p-6 text-2xl hover:scale-124  transition-transform duration-200 hover:text-red-500 transition-colors'><Link to= "/cart">Cart <span className='hover:text-yellow-500'><FontAwesomeIcon icon={faShoppingBasket} /></span></Link></li>
        </ul>
      </nav> 
    </header>
  );
};

export default Header;