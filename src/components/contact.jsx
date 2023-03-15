import React, { useState } from "react";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className="flex justify-center p-10 font-['Catamaran']">
      <div className="w-[300px] md:w-[1100px] bg-blue-700 rounded-lg md:flex-col ">
        <div className="flex-col flex items-center lg:flex-row">
          <div className="md:w-full md:text-center lg:w-1/2 p-3">
            <div className="text-5xl lg:text-6xl font-semibold text-white ">
              Get a Quote
            </div>
            <div className="py-4 text-lg lg:text-xl text-white">
              Fill up the form and our Team will get back to you in 24 hours
            </div>
            <div className="mt-16 font-medium hidden md:hidden lg:block">
              <div className="flex m-2 p-4 w-72 rounded-xl hover:bg-blue-600">
                <i className="fa-solid fa-phone text-green-400 py-1"></i>
                <p className="px-2 text-white">7904654890</p>
              </div>
              <div className="flex m-2 p-4 w-72 rounded-xl hover:bg-blue-600">
                <i className="fa-solid fa-envelope text-green-400 py-1"></i>
                <p className="px-2 text-white">vishwaraghu3025@gmail.com</p>
              </div>
              <div className="flex m-2 p-4 w-72 rounded-xl hover:bg-blue-600">
                <i className="fa-sharp fa-solid fa-location-dot text-green-400 py-1"></i>
                <p className="px-2 text-white">Chennai</p>
              </div>
            </div>

            <div className="hidden md:hidden lg:block">
              <div className="flex justify-center mt-24">
                <a
                  href="https://www.linkedin.com/in/vishwa-r-69b1b3204/"
                  className="px-1.5 md:px-[14.5px] md:py-2 rounded-full h-fit w-fit mx-6 hover:bg-blue-800">
                  <i className="fa-brands fa-linkedin-in text-white text-2xl md:text-3xl"></i>
                </a>
                <a
                  href="https://www.instagram.com/vishwa._.32/"
                  className="px-1.5  md:px-[15px] md:py-2 rounded-full h-auto w-auto mx-6 hover:bg-blue-800">
                  <i className="fa-brands fa-instagram text-white text-2xl md:text-3xl"></i>
                </a>
                <a
                  href="https://github.com/Vishwa3025"
                  className="px-1.5 md:px-3 md:py-2 rounded-full h-fit w-fit mx-6 hover:bg-blue-800">
                  <i className="fa-brands fa-github text-white text-2xl md:text-3xl"></i>
                </a>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="md:w-4/5 lg:w-[500px] p-5 md:p-10">
            <div className="rounded-lg bg-white">
              <div className="px-3 py-1 md:px-5 md:py-3">
                <div className="font-semibold text-blue-700 text-lg p-1 my-1">
                  Your Name
                </div>
                <div className="flex focus:border-blue-600">
                  <input
                    type="text"
                    name="name"
                    className="border-blue-400 w-full border-2 py-2 px-5 rounded-md focus:outline-none"
                  />
                </div>
              </div>
              <div className="px-3 py-1 md:px-5 md:py-3">
                <div className="font-semibold text-blue-700 text-lg p-1 my-1">
                  Mail
                </div>
                <div className="flex focus:border-blue-600">
                  <input
                    type="email"
                    name="name"
                    className="border-blue-400 w-full border-2 py-2 px-5 rounded-md focus:outline-none"
                  />
                </div>
              </div>
              <div className="px-3 py-1 md:px-5 md:py-3">
                <div className="font-semibold text-blue-700 text-lg p-1 my-1">
                  Message
                </div>
                <div className="flex focus:border-blue-600">
                  <textarea
                    type="text"
                    name="name"
                    className="border-blue-400 w-full resize-width border-2 py-2 rounded-md focus:outline-none"
                    rows={3}
                    placeholder="Leave your thoughts"
                  />
                </div>
              </div>

              <div className="flex justify-center p-5">
                <button
                  type="submit"
                  className="text-white text-lg py-2 px-8 rounded-xl bg-blue-700"
                  onClick={() => setShowModal(true)}>
                  Send Message
                </button>
              </div>
            </div>
          </form>
          {showModal ? (
            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                  <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
                </div>

                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                        <svg
                          className="h-6 w-6 text-blue-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          Form submitted
                        </h3>
                        <div className="mt-2">
                          <p className="text-sm leading-5 text-gray-500">
                            Your form has been submitted successfully.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                      <button
                        type="button"
                        onClick={() => setShowModal(false)}
                        className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-blue-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                        OK
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>

        <div className="mt-5 font-medium lg:hidden">
          <div className="flex md:m-2 p-4 md:w-72 rounded-xl hover:bg-blue-600">
            <i className="fa-solid fa-phone text-green-400 py-1"></i>
            <p className="px-2 text-white">7904654890</p>
          </div>
          <div className="flex md:m-2 p-4 md:w-72 rounded-xl hover:bg-blue-600">
            <i className="fa-solid fa-envelope text-green-400 py-1"></i>
            <p className="px-2 text-white">vishwaraghu3025@gmail.com</p>
          </div>
          <div className="flex md:m-2 p-4 md:md:w-72 rounded-xl hover:bg-blue-600">
            <i className="fa-sharp fa-solid fa-location-dot text-green-400 py-1"></i>
            <p className="px-2 text-white">Chennai</p>
          </div>
        </div>

        <div className="flex justify-center mt-10 lg:hidden">
          <a
            href="https://www.linkedin.com/in/vishwa-r-69b1b3204/"
            className="px-1.5 md:px-[14.5px] md:py-2 rounded-full h-fit w-fit mx-6 hover:bg-blue-800">
            <i className="fa-brands fa-linkedin-in text-white text-2xl md:text-3xl"></i>
          </a>
          <a
            href="https://www.instagram.com/vishwa._.32/"
            className="px-1.5  md:px-[15px] md:py-2 rounded-full h-auto w-auto mx-6 hover:bg-blue-800">
            <i className="fa-brands fa-instagram text-white text-2xl md:text-3xl"></i>
          </a>
          <a
            href="https://github.com/Vishwa3025"
            className="px-1.5 md:px-3 md:py-2 rounded-full h-fit w-fit mx-6 hover:bg-blue-800">
            <i className="fa-brands fa-github text-white text-2xl md:text-3xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
