import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import logo from '../assets/logoHeader.png'

function Footer() {
  const footerLinks = [
    { title: 'Pricing', href: '/pricing' },
    { title: 'About us', href: '/about' },
    { title: 'Features', href: '/features' },
    { title: 'Help Center', href: '/help' },
    { title: 'Contact us', href: '/contact' },
    { title: 'FAQs', href: '/faqs' },
    { title: 'Careers', href: '/careers' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src={logo} alt="Logo" className="h-8 w-8" />
              <span className="ml-2 text-xl font-semibold">SPECTRA</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-2">
            {footerLinks.map((link) => (
              <Link
                key={link.title}
                to={link.href}
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2024 Autism Connect • Privacy • Terms • Sitemap</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;