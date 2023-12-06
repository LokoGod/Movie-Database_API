import Navbar from "@/components/commen_ui/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Add a movie to your list</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Movie Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Title"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Summary</span>
                </label>
                <textarea className="input input-bordered h-20" required />
              </div>

              <div className="form-control m-5">
                <select className="select select-bordered w-full max-w-xs">
                  <option disabled selected>
                    Choose Genre
                  </option>
                  <option>example</option>
                  <option>example2</option>
                </select>
              </div>

              <div className="form-control ">
                <select className="select select-bordered w-full max-w-xs">
                  <option disabled selected>
                    Choose Director
                  </option>
                  <option>example</option>
                  <option>example2</option>
                </select>
              </div>

              <div className="form-control mt-3">
                <select className="select select-bordered w-full max-w-xs">
                  <option disabled selected>
                    Choose Actor
                  </option>
                  <option>example</option>
                  <option>example2</option>
                </select>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
