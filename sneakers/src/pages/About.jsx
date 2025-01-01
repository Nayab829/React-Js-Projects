const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-16 opacity-90">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            About <span className="text-red-500">Us</span>
          </h1>
          <p className="text-lg md:text-xl">
            Redefining sneaker culture with quality, comfort, and style.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg leading-7">
                At <span className="font-semibold">SneakerSpot</span>, our mission is to provide premium sneakers that blend
                comfort, durability, and cutting-edge design. Whether you're on the street, at the gym, or anywhere in between,
                we ensure your every step is stylish and confident.
              </p>
            </div>
            <div>
              <img
                src="/about.jpeg"
                alt="Sneaker Mission"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-500 text-white w-16 h-16 flex items-center justify-center opacity-75 rounded-full text-4xl mx-auto mb-4">
                🌍
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p>We focus on eco-friendly practices to ensure a better future for our planet.</p>
            </div>
            <div className="text-center">
              <div className="bg-red-500 text-white w-16 h-16 flex items-center justify-center text-4xl rounded-full opacity-80 mx-auto mb-4">
                👟
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p>We stay ahead of trends to bring you the latest in sneaker technology and style.</p>
            </div>
            <div className="text-center">
              <div className="bg-red-500 text-white w-16 h-16 flex items-center justify-center text-4xl rounded-full opacity-80 mx-auto mb-4">
                ❤️
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
              <p>Your satisfaction is our top priority, every step of the way.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:px-12 text-center bg-gray-900 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Sneaker Revolution</h2>
        <p className="text-lg mb-6">
          Stay updated on the latest trends and exclusive drops. Sign up now!
        </p>
        <button className="bg-red-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-red-400 transition">
          Sign Up
        </button>
      </section>
    </div>
  );
};

export default About;
