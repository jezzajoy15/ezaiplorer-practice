// components/Hero.js
export default function Hero() {
    return (
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-32 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-6">
            Welcome to Ezaiplorer
          </h1>
          <p className="text-xl mb-8">
            Explore smart ideas, AI tools, and guides to make your projects shine.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/about"
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition"
            >
              Learn More
            </a><br></br>
            <a
              href="/contact"
              className="px-6 py-3 border border-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    );
  }