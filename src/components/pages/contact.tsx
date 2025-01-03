import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactForm = () => {
  return (
    <section className=" bg-gray-200 py-16  flex flex-col items-center">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mt-10">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg mb-12">
            Feel free to reach out to us for any inquiries or assistance. We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-3xl text-yellow-400" />
              <div>
                <h4 className="font-bold text-xl">Our Address</h4>
                <p>1234 Street Name, City, Country</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone className="text-3xl text-green-400" />
              <div>
                <h4 className="font-bold text-xl">Phone</h4>
                <p>+123 456 7890</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-3xl text-blue-400" />
              <div>
                <h4 className="font-bold text-xl">Email</h4>
                <p>contact@example.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className=" w-full px-6 py-3 text-white bg-gray-600 rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
