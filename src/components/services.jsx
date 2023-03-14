import React from "react";
import poverty from "../assests/poverty.jpg";

const Services = () => {
  return (
    <>
      <div className="bg-black w-full font-['Catamaran']">
        <div className="flex justify-center text-white">
          <img src={poverty} className="h-[450px]" alt="" />
        </div>
        <div className="text-white flex justify-evenly absolute top-36 px-20 font-['Catamaran']">
          <div className=" w-auto h-auto  text-center lg:backdrop-blur-sm bg-white/0">
            <div className="px-4 xl:py-5 text-green-400 text-2xl lg:text-3xl xl:text-5xl">
              Profound Impact
            </div>
            <div className="px-2 py-1 xl:py-3 xl:px-3 md:text-md xl:text-xl">
              Carryon works with nonprofits near and far, small and large. At
              carry you feel good knowing your work has a significant impact on
              these organizations.
            </div>
          </div>
          <div className="w-auto h-fit  mx-5 text-center rounded-lg backdrop-blur-sm bg-white/0">
            <div className="px-5 lg:px-8 xl:py-5 text-green-400 text-2xl lg:text-3xl xl:text-5xl">
              Team Volunteer Grants
            </div>
            <div className="px-2 py-1 xl:py-3 xl:px-3 md:text-md xl:text-xl">
              We want to support volunteer outings where groups of employees
              volunteer together. Gather up five colleagues for a volunteer
              outing and we’ll either make a donation to that nonprofit or pay
              for supplies or equipment for the volunteer outing.
            </div>
          </div>
          <div className=" w-auto h-fit mx-5 text-center lg:backdrop-blur-md bg-white/0.5">
            <div className="px-4 xl:py-5 text-green-400 text-2xl lg:text-3xl xl:text-5xl">
              Fundraising Sponsorship
            </div>
            <div className="px-2 py-1 xl:py-3 xl:px-3 md:text-lg xl:text-xl">
              Fundraising for a nonprofit through a Run/Walk/Ride type of event?
              We provide a grant to kick-start your fundraising.
            </div>
          </div>
        </div>

        <div className="mt-3 text-white">
          <div className="text-blue-200 text-center text-6xl p-4">
            Our Founders
          </div>
          <div className="text-5xl xl:text-6xl px-5 py-1 xl:px-10 xl:py-4 text-green-400">
            Adam
          </div>
          <div className="px-5 xl:px-10 xl:py-5 xl:text-xl">
            Carryon was founded when Adam, Carryon’s President, was working at a
            major bank and made donations to his university, the local Big
            Brothers Big Sisters organization, and LLS. By the time he realized
            his company had a matching gift program, it was too late to get many
            of those donations matched. Discussions with multiple nonprofits
            revealed they all viewed matching gifts as bonus money. Carryon was
            started to help organizations proactively grow their matching gift
            revenue and focus more of their resources on their core mission.
          </div>
          <div className="text-5xl px-5 py-1 xl:text-6xl xl:px-10 xl:py-4 text-green-400">
            Kanwei
          </div>
          <div className="px-5 xl:px-10 xl:py-5 xl:text-xl">
            Kanwei has been programming since he was 4, starting with creating
            text adventure games on his father’s office computer. He now holds a
            master’s degree in Computer Science from Emory University, and
            resides in Atlanta. He joined Carryon in 2013. While he loves
            developing software to solve problems in the nonprofit space, he’s
            always eager to jump on calls with our largest nonprofit clients to
            help understand what our tech team can do to continue assisting them
            and thousands of other nonprofits in achieving their matching gift
            goals.
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
