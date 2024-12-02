import logo from '../assets/logoHeader.png';
function Logo() {
  return (
    <div className="flex items-center">
      <img src={logo} alt="Autism Connect Logo" className="h-8 w-8" />
      <span className="ml-2 text-xl font-extrabold text-indigo-600">SPECTRA</span>
    </div>
  );
}

export default Logo;