import whatwedo from '../assets/whatwedo.png'
import ourhistory from '../assets/ourhistory.png'
import whoweare from '../assets/whoweare.png'

function AboutSection() {
  return (
    <section className="py-12 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-bold text-gray-900">About Us</h2>
        </div>
        <div className="mt-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-1/2 text-center">
              <img
                src={whatwedo}
                alt="About Us"
                className="rounded-lg shadow-lg w-full h-60"
              />
              <h3 className="text-2xl font-semibold text-gray-900 my-4">What We Do</h3>
              <p className="text-gray-600 mb-4">
                Our agency offers a range of services, including an AI diagnosis tool, doctor availability and appointment scheduling, and a comprehensive library of articles about autism.
              </p>
            </div>
            <div className="w-full md:w-1/2 text-center">
              <img
                src={ourhistory}
                alt="About Us"
                className="rounded-lg shadow-lg w-full h-60"
              />
              <h3 className="text-2xl font-semibold text-gray-900 my-4">Our History</h3>
              <p className="text-gray-600 mb-4">
                Founded in 2024, our agency has been dedicated to supporting families with children on the autism spectrum by providing resources and connecting them with medical professionals.
              </p>
            </div>
            <div className="w-full md:w-1/2 text-center">
              <img
                src={whoweare}
                alt="About Us"
                className="rounded-lg shadow-lg w-full h-60"
              />
              <h3 className="text-2xl font-semibold text-gray-900 my-4">Who We Are</h3>
              <p className="text-gray-600 mb-4">
                We are a team of dedicated professionals, including doctors, therapists, and educators, committed to providing comprehensive support and resources for families affected by autism.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;