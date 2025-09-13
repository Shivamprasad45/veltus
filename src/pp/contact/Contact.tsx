"use client";
import { useForm, ValidationError } from "@formspree/react";
import React from "react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("YOUR_FORMSPREE_FORM_ID");

  return (
    <section className="relative text-white py-16 overflow-hidden">
      {/* Background SVG */}
      <div className="absolute inset-0">
        <svg
          className="w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#1e293b"
            fillOpacity="1"
            d="M0,224L48,224C96,224,192,224,288,234.7C384,245,480,267,576,250.7C672,235,768,181,864,176C960,171,1056,213,1152,208C1248,203,1344,149,1392,122.7L1440,96V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-700">
          <h2 className="text-4xl font-extrabold mb-4 text-yellow-400 text-center">
            ~ Contact Us ~
          </h2>
          <p className="text-gray-400 text-center mb-8">
            Feel free to reach out anytime.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all"
                placeholder="John Doe"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
                className="text-red-400 text-sm mt-1"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all"
                placeholder="email@example.com"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-red-400 text-sm mt-1"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all"
                placeholder="Type your message..."
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-red-400 text-sm mt-1"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-yellow-400 text-gray-900 py-3 px-6 rounded-lg font-semibold hover:bg-yellow-500 transition-colors disabled:opacity-50"
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>

            {/* Success Message */}
            {state.succeeded && (
              <p className="text-green-400 text-center mt-4">
                Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
