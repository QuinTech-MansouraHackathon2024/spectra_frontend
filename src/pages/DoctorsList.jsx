import { useState } from 'react';
import { FiFilter, FiGrid, FiList } from 'react-icons/fi';

function DoctorsList() {
  const [viewMode, setViewMode] = useState('grid');
  
  const doctors = [
    {
      id: 1,
      name: 'Kyle Maybury',
      phone: '(919) 833-3830',
      tags: ['referrals', 'working'],
      image: '/avatars/kyle.jpg'
    },
    {
      id: 2,
      name: 'Olivia Carter',
      phone: '(716) 692-9043',
      tags: ['open to work'],
      image: '/avatars/olivia.jpg'
    },
    // Add more doctors as needed
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Doctors</h1>
        <div className="flex space-x-4">
          <button className="px-4 py-2 border rounded-md flex items-center space-x-2">
            <FiFilter className="h-5 w-5" />
            <span>Filter</span>
          </button>
          <div className="border rounded-md flex">
            <button
              className={`px-4 py-2 ${viewMode === 'grid' ? 'bg-indigo-50 text-indigo-600' : ''}`}
              onClick={() => setViewMode('grid')}
            >
              <FiGrid className="h-5 w-5" />
            </button>
            <button
              className={`px-4 py-2 ${viewMode === 'list' ? 'bg-indigo-50 text-indigo-600' : ''}`}
              onClick={() => setViewMode('list')}
            >
              <FiList className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-6`}>
        {doctors.map((doctor) => (
          <div key={doctor.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center space-x-4">
              <img src={doctor.image} alt={doctor.name} className="h-12 w-12 rounded-full" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">{doctor.name}</h3>
                <p className="text-gray-500">{doctor.phone}</p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {doctor.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorsList;