import React from "react";
import bannerImg from "../assets/banner.jpg"; // Assuming the banner image is in the assets folder

const Home = () => {
  return (
    <div>
      {/* Purple background section */}
      <div className="bg-purple-600 text-white text-center p-10 space-y-6 rounded-b-2xl">
        <h1 className="text-3xl font-bold leading-snug">
          Upgrade Your Tech Experience with <br /> Gadget Heaven Accessories
        </h1>
        <p className="text-gray-200">
          Explore the latest gadgets that will take your experience to the next level. <br />
          From smart devices to the coolest accessories, we have it all.
        </p>
        <button className="btn btn-accent bg-white text-purple-700 font-semibold hover:bg-purple-100">
          Shop Now
        </button>
      </div>

      {/* Floating banner image with rounded corners */}
      <div className="flex justify-center -mt-1 z-10 relative">
        <img
          src={bannerImg}
          alt="Banner"
          className="w-3/4 max-w-4xl rounded-lg shadow-xl border-4 border-white"
        />
        
      </div>

      {/* Title */}

        <h1 className="text-2xl font-semibold text-center mt-10">
        Explore Cutting-Edge Gadgets
      </h1>
     
    </div>
  );
};

export default Home;
