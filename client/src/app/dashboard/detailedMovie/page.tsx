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
          <h2 className="card-title">
            Movie Title
            <div className="badge badge-secondary">Genre</div>
            <div className="badge badge-accent">Genre</div>
          </h2>
          <p className="">
            This is the movie summary folks This is the movie summary folksThis
            is the movie summary folks This is the movie summary folks This is
            the movie summary folks This is the movie summary folks
          </p>

          {/* Director */}
          <div className="avatar">
            <div className="w-24 mask mask-squircle">
              <img src="https://cms.artcenter.edu/image/12668/b1/0.37,0.35/small" />
            </div>
          </div>

          {/* Cast */}
          <div className="avatar-group -space-x-6 rtl:space-x-reverse">
            <div className="avatar">
              <div className="w-12">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Jeffrey_Dean_Morgan_by_Gage_Skidmore_3.jpg" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src="https://miro.medium.com/v2/resize:fit:1200/1*U_dbA1HyvcWPdpe57lKEdQ.jpeg" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src="https://m.media-amazon.com/images/M/MV5BNzQyNTgzOTI2OF5BMl5BanBnXkFtZTgwNTMyMDk0NjE@._V1_FMjpg_UX1000_.jpg" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src="https://nubiapage.com/wp-content/uploads/2021/06/gettyimages-1186863312.jpg" />
              </div>
            </div>
          </div>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
