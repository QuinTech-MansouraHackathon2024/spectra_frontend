function NewsletterSection() {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Subscribe to our newsletter</h2>
          <form className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Type your email"
                className="flex-1 px-4 py-2 rounded-md text-gray-900"
              />
              <button
                type="submit"
                className="bg-indigo-600 px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;