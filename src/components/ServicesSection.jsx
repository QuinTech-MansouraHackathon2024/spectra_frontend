import { FaUserMd, FaBook, FaRobot } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function ServicesSection() {
  const services = [
    {
      icon: <FaUserMd className="h-8 w-8 text-indigo-600" />,
      title: 'Doctor Availability',
      description: 'Check and schedule appointments with available doctors specialized in autism.',
      link: '/doctorAva'
    },
    {
      icon: <FaBook className="h-8 w-8 text-indigo-600" />,
      title: 'Library of Articles',
      description: 'Access a comprehensive library of articles about autism for parents and caregivers.',
      link: '/articles'
    },
    {
      icon: <FaRobot className="h-8 w-8 text-indigo-600" />,
      title: 'AI Diagnosis Tool',
      description: 'Utilize advanced AI technology to assist in diagnosing autism symptoms effectively.',
      link: '/aiTool'
    }
  ];

  return (
    <section className="py-12 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Link
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                to={service.link}
              >
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;