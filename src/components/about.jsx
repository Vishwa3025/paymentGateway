import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="flex justify-center p-5">
        <div className="w-[1100px] bg-blue-700 rounded-[40px]">
          <div className="flex justify-between p-3">
            <div className="m-1 w-1/7 px-5 flex items-end justify-center">
              <i class="fa-solid fa-star-of-life text-green-500 text-7xl"></i>
            </div>
            <div className="m-1 w-5/7 flex flex-col items-center ">
              <div className="rounded-ld bg-green-400 w-fit h-fit text-sm font-semibold rounded-3xl py-2 px-3">
                Get ready for now - start by your
              </div>
              <div className="text-white md:text-3xl lg:text-5xl py-5 px-5 mt-10">
                Together We Are Strong
              </div>
            </div>
            <div className="text-white w-1/7 flex items-start justify-center px-5 m-1">
              <i class="fa-solid fa-star-of-life text-green-500 text-7xl"></i>
            </div>
          </div>
          <div className="flex text-white mt-5">
            <div className="flex flex-col items-center w-1/3 m-1">
              <div className="md:text-5xl lg:text-8xl">20k</div>
              <div className="text-md px-10 py-3 font-semibold text-center">
                More people have take part of changes
              </div>
            </div>
            <div className="flex flex-col items-center w-1/3 m-1">
              <div className="md:text-5xl lg:text-8xl">20+</div>
              <div className="text-md px-10 py-3 font-semibold text-center">
                More than 20 countries have used the service
              </div>
            </div>
            <div className="flex flex-col items-center w-1/3 m-1">
              <div className="md:text-5xl lg:text-8xl">20M</div>
              <div className="text-md px-10 py-3 font-semibold text-center">
                More than $20M has accumulated every day
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center p-5  mt-10">
        <div className="w-[1100px] ">
          <div className="md:text-3xl lg:text-5xl text-green-400 py-1 px-5">
            Willing to Become a Volunteer ?
          </div>
          <div className="text-white md:text-2xl lg:text-3xl px-5 py-3">
            Join your hand with us for a better life and beautiful future.
          </div>
          <div className="text-white text-md px-5 py-1.5">
            The secret to happiness lies in helping others. Never underestimate
            the difference YOU can make in the lives of the poor, the abused and
            the helpless.
          </div>
          <div className=" text-blue-300 px-20 ">
            <div className=" m-1">
              <div className="flex">
                <i class="fa-solid fa-star-of-life py-2.5 px-2 text-green-400"></i>
                <div className="py-1 text-blue-300">
                  We are friendly to each other.
                </div>
              </div>
            </div>
            <div className=" m-1">
              <div className="flex">
                <i class="fa-solid fa-star-of-life py-2.5 px-2 text-green-400"></i>
                <div className="py-1 text-blue-300">
                  If you join with us,We will give you free training.
                </div>
              </div>
            </div>
            <div className=" m-1">
              <div className="flex">
                <i class="fa-solid fa-star-of-life py-2.5 px-2 text-green-400"></i>
                <div className="py-1 text-blue-300">
                  Its an opportunity to help poor children.
                </div>
              </div>
            </div>
            <div className=" m-1">
              <div className="flex">
                <i class="fa-solid fa-star-of-life py-2.5 px-2 text-green-400"></i>
                <div className="py-1 text-blue-300">No goal requirements.</div>
              </div>
            </div>
            <div className=" m-1">
              <div className="flex">
                <i class="fa-solid fa-star-of-life py-2.5 px-2 text-green-400"></i>
                <div className="py-1 text-blue-300">
                  Joining is tottaly free. We dont need any money from you
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className=" flex justify-center items-center p-5">
        <Link to="/contact">
          <div className="h-9 w-24 bg-blue-700 text-white flex justify-center items-center rounded-lg">
            Join us
          </div>
        </Link>
      </div>
    </>
  );
};

export default About;
