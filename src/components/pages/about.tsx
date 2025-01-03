import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex justify-center items-center h-full ">
      <div className="max-w-screen-xl w-full p-6 sm:p-12 bg-gray-100 shadow-lg  rounded-lg flex flex-col items-center">
        {/* Hero Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-lg text-gray-600">
            Welcome to our blog! Discover who we are, our values, and the passion that drives us to create
            meaningful content for our readers.
          </p>
        </div>

        {/* Image Section */}
        <div className="mb-10">
          <Image
            src="/images/about.webp"
            alt="Team"
            width={400}
            height={400}
            className="mx-auto rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* About Description */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              At our blog, our mission is to empower individuals through knowledge and creativity. We believe in the
              transformative power of information and aim to equip our audience with tools, tips, and inspiration to
              excel in their endeavors.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Whether you're looking for in-depth tutorials, engaging stories, or practical advice, we're here to make
              a positive impact on your journey.
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Offer</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Comprehensive guides and step-by-step tutorials on technology, design, and development.</li>
              <li>Inspirational articles that foster personal growth and creativity.</li>
              <li>Expert opinions and insights into current industry trends.</li>
              <li>A supportive community that values sharing, learning, and connection.</li>
            </ul>
          </div>
        </div>

        {/* Additional Content */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            Our journey began with a simple idea: to create a space where knowledge meets creativity. Over the years,
            we have evolved into a vibrant platform that bridges gaps, sparks innovation, and brings people closer
            to their goals. Our team is fueled by a shared passion for excellence and a commitment to making every
            piece of content meaningful and impactful.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Meet the Team</h2>
          <p className="text-gray-600 leading-relaxed">
            Behind the scenes, our team comprises writers, developers, designers, and dreamers who bring their unique
            talents to the table. Together, we collaborate to deliver a seamless experience for our readers. We are
            passionate about learning, growing, and making a difference in the digital world.
          </p>
        </div>

        {/* Button Section */}
        <div className="text-center mt-10">
          <a
            href="/"
            className="inline-block px-6 py-3 text-white bg-gray-600 rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Go to Home
          </a>
        </div>
      </div>
    </div>
  );
}
