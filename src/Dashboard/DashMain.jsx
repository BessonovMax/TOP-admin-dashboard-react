import React from "react";
import { Card } from "./Card";
import User2 from "../assets/user2.jpg";
import User3 from "../assets/user3.jpg";
import User from "../assets/User.jpg";
import User5 from "../assets/user5.jpg";

export const DashMain = () => {
  return (
    <main className="col-start-2 col-end-3 grid grid-cols-[3fr_1fr] grid-rows-[min-content] gap-8 p-8">
      <section className="col-start-1 col-end-2">
        <h2 className="text-xl font-bold mb-4">Your projects</h2>
        <div className="grid grid-cols-2 gap-8">
          <Card title="Super Cool Project" />
          <Card title="Less Cool Project" />
          <Card title="Impossible App" />
          <Card title="Easy Peasy App" />
          <Card title="Ad Blocker" />
          <Card title="Money Maker" />
        </div>
      </section>
      <div className="grid grid-cols-1 gap-8">
        <section className=" text-sm ">
          <h2 className="text-xl font-bold mb-4">Announcements</h2>
          <div className="bg-white p-8 grid grid-cols-1 gap-4 rounded-lg shadow-md ">
            <div>
              <h3 className="font-bold">Site Maintenance</h3>
              <p className="line-clamp-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
                corrupti aliquid commodi cumque, nulla saepe unde quis
                blanditiis, molestias tempore aut? Quae corporis eveniet magni
                sunt minima adipisci nesciunt necessitatibus.
              </p>
            </div>
            <div className="border-b-2 border-gray-300"></div>
            <div>
              <h3 className="font-bold">Community Share Day</h3>
              <p className="line-clamp-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
                corrupti aliquid commodi cumque, nulla saepe unde quis
                blanditiis, molestias tempore aut? Quae corporis eveniet magni
                sunt minima adipisci nesciunt necessitatibus.
              </p>
            </div>
            <div className="border-b-2 border-gray-300"></div>
            <div>
              <h3 className="font-bold">Updated Privacy Policy</h3>
              <p className="line-clamp-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
                corrupti aliquid commodi cumque, nulla saepe unde quis
                blanditiis, molestias tempore aut? Quae corporis eveniet magni
                sunt minima adipisci nesciunt necessitatibus.
              </p>
            </div>
          </div>
        </section>
        <section className=" self-end">
          <h2 className="text-xl font-bold mb-4">Trending</h2>
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col justify-center gap-6">
            <div className="flex gap-4">
              <img
                className="h-12 w-12 shrink-0 rounded-full"
                src={User2}
                alt="#"
              />
              <div>
                <div className="font-medium">@tegan</div>
                <div className="text-black/80">World Peace Builder</div>
              </div>
            </div>
            <div className="flex gap-4">
              <img
                className="h-12 w-12 shrink-0 rounded-full"
                src={User}
                alt="#"
              />
              <div>
                <div className="font-medium">@morgan</div>
                <div className="text-black/80">Super Cool Project</div>
              </div>
            </div>
            <div className="flex gap-4">
              <img
                className="h-12 w-12 shrink-0 rounded-full"
                src={User3}
                alt="#"
              />
              <div>
                <div className="font-medium">@kendall</div>
                <div className="text-black/80">Life Changing App</div>
              </div>
            </div>
            <div className="flex gap-4">
              <img
                className="h-12 w-12 shrink-0 rounded-full"
                src={User5}
                alt="#"
              />
              <div>
                <div className="font-medium">@alex</div>
                <div className="text-black/80">No Traffic Maker</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
