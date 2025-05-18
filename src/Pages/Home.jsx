import React from "react";
import bannerImg from "../assets/banner.jpg";

const Home = () => {
  return (
    <div>
      <div className="bg-purple-600 text-white text-center pt-10 pb-60 space-y-6 rounded-b-2xl relative z-10">
        <h1 className="text-5xl font-bold leading-snug">
          Upgrade Your Tech Experience with <br /> Gadget Heaven Accessories
        </h1>
        <p className="text-gray-200 text-xl">
          Explore the latest gadgets that will take your experience to the next
          level. <br />
          From smart devices to the coolest accessories, we have it all.
        </p>
        <button
          className="btn btn-accent bg-white text-purple-700 font-semibold hover:bg-purple-100 text-lg px-8 py-3"
          onClick={() => {
            const categorySection = document.getElementById("category");
            if (categorySection) {
              categorySection.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }}
        >
          Shop Now
        </button>
      </div>

      <div className="flex justify-center -mt-52 pb-20 relative z-20">
        <div className="relative rounded-2xl overflow-hidden flex items-center">
          <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-b from-purple-600 to-white opacity-80 backdrop-blur-md rounded-l-2xl z-0" />
          <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-b from-purple-600 to-white opacity-80 backdrop-blur-md rounded-r-2xl z-0" />
          <div className="absolute top-0 left-16 right-16 h-[20%] bg-purple-600 bg-opacity-80 backdrop-blur-md rounded-t-2xl z-10" />
          <div className="absolute top-[20%] left-16 right-16 h-[80%] bg-white bg-opacity-60 backdrop-blur-xl rounded-b-2xl z-10" />
          <img
            src={bannerImg}
            alt="Banner"
            className="relative z-20 w-[720px] max-w-full rounded-3xl border border-white p-8"
          />
        </div>
      </div>

      <div
        id="category"
        className="mb-20 rounded-xl max-w-4xl mx-auto text-center text-4xl font-extrabold mt-20"
      >
        Explore Cutting-Edge Gadgets.
      </div>
    </div>
  );
};

export default Home;
