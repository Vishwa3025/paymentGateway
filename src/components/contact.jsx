import React from "react";

const Contact = () => {
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
                <i class="fa-solid fa-envelope text-green-400 py-1"></i>
                <p className="px-2 text-white">vishwaraghu3025@gmail.com</p>
              </div>
              <div className="flex m-2 p-4 w-72 rounded-xl hover:bg-blue-600">
                <i class="fa-sharp fa-solid fa-location-dot text-green-400 py-1"></i>
                <p className="px-2 text-white">Chennai</p>
              </div>
            </div>

            <div className="hidden md:hidden lg:block">
              <div className="flex justify-center mt-24">
                <div className="px-[14.5px] py-2 rounded-full h-fit w-fit mx-6 hover:bg-blue-800">
                  <i class="fa-brands fa-linkedin-in text-white text-3xl"></i>
                </div>
                <div className="px-[15px] py-2 rounded-full h-fit w-fit mx-6 hover:bg-blue-800">
                  <i class="fa-brands fa-instagram text-white text-3xl"></i>
                </div>
                <div className="px-3 py-2 rounded-full h-fit w-fit mx-6 hover:bg-blue-800">
                  <i class="fa-brands fa-github text-white text-3xl"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-4/5 lg:w-[500px] p-5 md:p-10">
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
                    type="text"
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
                  className="text-white text-lg py-2 px-8 rounded-xl bg-blue-700">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 font-medium lg:hidden">
          <div className="flex md:m-2 p-4 md:w-72 rounded-xl hover:bg-blue-600">
            <i className="fa-solid fa-phone text-green-400 py-1"></i>
            <p className="px-2 text-white">7904654890</p>
          </div>
          <div className="flex md:m-2 p-4 md:w-72 rounded-xl hover:bg-blue-600">
            <i class="fa-solid fa-envelope text-green-400 py-1"></i>
            <p className="px-2 text-white">vishwaraghu3025@gmail.com</p>
          </div>
          <div className="flex md:m-2 p-4 md:md:w-72 rounded-xl hover:bg-blue-600">
            <i class="fa-sharp fa-solid fa-location-dot text-green-400 py-1"></i>
            <p className="px-2 text-white">Chennai</p>
          </div>
        </div>

        <div className="flex justify-center mt-10 lg:hidden">
          <div className="px-1.5 md:px-[14.5px] md:py-2 border-2 rounded-full h-fit w-fit mx-6 hover:bg-blue-800">
            <i class="fa-brands fa-linkedin-in text-white text-2xl md:text-3xl"></i>
          </div>
          <div className="px-1.5  md:px-[15px] md:py-2 border-2 rounded-full h-auto w-auto mx-6 hover:bg-blue-800">
            <i class="fa-brands fa-instagram text-white text-2xl md:text-3xl"></i>
          </div>
          <div className="px-1.5 md:px-3 md:py-2 border-2 rounded-full h-fit w-fit mx-6 hover:bg-blue-800">
            <i class="fa-brands fa-github text-white text-2xl md:text-3xl"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
