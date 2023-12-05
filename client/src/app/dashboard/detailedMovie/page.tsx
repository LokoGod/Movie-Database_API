import Navbar from "@/components/commen_ui/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />

      <div className="card lg:card-side bg-base-100 shadow-xl m-5">
        <figure>
          <img
            src="https://c4.wallpaperflare.com/wallpaper/440/218/546/watchmen-comic-doctor-manhattan-wallpaper-preview.jpg"
            className="w-80 h-96"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
