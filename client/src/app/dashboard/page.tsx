"use client";

import Navbar from "@/components/commen_ui/Navbar";
import React from "react";
import { FaCheckToSlot, FaRegTrashCan } from "react-icons/fa6";
import { useState, useEffect } from "react";

import axios from "axios";

type DataType = {
  // Define the data structure received from the API
  id: number;
  title: string;
};

const page = () => {
  const [movieData, setMovieData] = useState<DataType[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get<DataType[]>(
        "http://localhost:5000/api/v1/movie"
      );
      console.log("response.data:", response.data);
      setMovieData(response.data);
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="card w-96 bg-base-100 shadow-xl m-5">
        <figure>
          <a href="/dashboard/detailedMovie">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/440/218/546/watchmen-comic-doctor-manhattan-wallpaper-preview.jpg"
              alt="Shoes"
            />
          </a>
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Watchmen
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <a href="" className="badge badge-outline">
              <FaRegTrashCan />
            </a>
            <a href="" className="badge badge-outline">
              <FaCheckToSlot />
            </a>
          </div>
        </div>
      </div>

      {/* Rendered data "test" */}

      {movieData.map(
        (
          movieData // Changed 'movie' to 'movieData'
        ) => (
          <div key={movieData.id}>
            <h2>{movieData.title}</h2>
          </div>
        )
      )}

      {/* Rendered data "test" */}

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
