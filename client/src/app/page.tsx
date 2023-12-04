import React from "react";

const Home = () => {
  return (
    <div>
      <div className="text-center mt-10">
        <h1 className="text-5xl">Discover the beauty of CINEMA</h1>
        <p className="mt-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          <br></br>
          industry. Lorem Ipsum has been the industry's
          <br></br> industry. Lorem Ipsum has been
        </p>
        <div className="mt-5">
          <a href="/dashboard" className="btn btn-accent">Explore</a>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4  m-10">
        <img
          className="w-full max-h-96 object-cover rounded-3xl"
          src="https://i.ebayimg.com/images/g/jCEAAOSw-Ihd5oq6/s-l1600.jpg"
        />
        <img
          className="w-full max-h-96 object-cover rounded-3xl"
          src="https://m.media-amazon.com/images/M/MV5BYTExZTdhY2ItNGQ1YS00NjJlLWIxMjYtZTI1MzNlMzY0OTk4XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg"
        />
        <img
          className="w-full max-h-96 object-cover rounded-3xl"
          src="https://m.media-amazon.com/images/I/71Jazc-7zWL._AC_UF894,1000_QL80_.jpg"
        />
        <img
          className="w-full max-h-96 object-cover rounded-3xl"
          src="https://m.media-amazon.com/images/I/81UOBSDQh0L._AC_UF894,1000_QL80_.jpg"
        />
        <img
          className="w-full max-h-96 object-cover rounded-3xl"
          src="https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
        />
        <img
          className="w-full max-h-96 object-cover rounded-3xl"
          src="https://play-lh.googleusercontent.com/i4nYGDycJdQr65VmmvIGuD_5G_-ZJFmgCPysAZqG2B-u1nYn9KR-Suk0JKMC5P9GP5G0"
        />
        <img
          className="w-full max-h-96 object-cover rounded-3xl"
          src="https://www.belarte.co.uk/cdn/shop/products/bladerunner2049_1024x1024@2x.jpg?v=1622214870"
        />
        <img
          className="w-full max-h-96 object-cover rounded-3xl"
          src="https://i.ebayimg.com/images/g/UXQAAOSwAt1i~UTI/s-l1200.webp"
        />
        <img
          className="w-full max-h-96 object-cover rounded-3xl"
          src="https://m.media-amazon.com/images/I/91dYe4m4XXL.jpg"
        />
        <img
          className="w-full max-h-96 object-cover rounded-3xl"
          src="https://www.themoviedb.org/t/p/original/p4RafgAPk558muOjnBMHhMArjS2.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
