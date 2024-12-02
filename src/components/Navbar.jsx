import { Link } from 'react-router-dom';
import Logo from './Logo';

function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Logo />
          <div className="flex space-x-4">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 px-3 py-2">Home</Link>
            {/* <Link to="/about" className="text-gray-700 hover:text-indigo-600 px-3 py-2">About Us</Link>
            <Link to="/services" className="text-gray-700 hover:text-indigo-600 px-3 py-2">Services</Link> */}
            <a className="text-gray-700 hover:text-indigo-600 px-3 py-2" href="#about">About Us</a>
            <a className="text-gray-700 hover:text-indigo-600 px-3 py-2" href="#services">Services</a>
            <Link to="/doctors" className="text-gray-700 hover:text-indigo-600 px-3 py-2">Doctors</Link>
            <Link to="/login" className="text-gray-700 hover:text-indigo-600 px-3 py-2">Login</Link>
            <Link to="/signup" className="bg-indigo-600 text-white px-4 py-2 rounded-md">Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;