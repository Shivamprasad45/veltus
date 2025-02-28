"use client";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("YOUR_FORMSPREE_FORM_ID");

  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-yellow-400 text-center">
            ~ Contact Us ~
          </h2>
          <p className="text-gray-400 text-center mb-8">
            Feel free to contact with us any time.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all"
                placeholder="Jhon Doe"
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
                Mail address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all"
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
                Type your message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all"
                placeholder="Message..."
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
              {state.submitting ? "Sending..." : "Send your message"}
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
