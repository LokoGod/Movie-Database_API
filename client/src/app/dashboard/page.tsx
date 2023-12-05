import Navbar from "@/components/commen_ui/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />

      <a
        href="/dashboard/detailedMovie"
        className="card w-96 bg-base-100 shadow-xl m-5"
      >
        <figure>
          <img
            src="https://c4.wallpaperflare.com/wallpaper/440/218/546/watchmen-comic-doctor-manhattan-wallpaper-preview.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Watchmen
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </a>

      <h1 className="text-3xl font-bold text-center">Completed List</h1>

      <div className="card w-96 bg-base-100 shadow-xl m-5">
        <figure>
          <img
            src="https://images5.alphacoders.com/125/1257951.jpeg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Oppenheimer
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
