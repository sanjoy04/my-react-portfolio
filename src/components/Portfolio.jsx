import React from "react";
import hostelManagment from "../assets/portfolio/hostelManagment.jpg";
// import installNode from "../assets/portfolio/installNode.jpg";
import reactTicTacToe from "../assets/portfolio/reactTicTacToe.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
// import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
// import weather from "../assets/portfolio/weather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: hostelManagment,
      github: "https://github.com/sanjoy04/CGEC-Hostel",
      href: "https://cgechostel.herokuapp.com/"
    },
    {
      id: 2,
      src: reactWeather,
      github: "https://github.com/sanjoy04/react-weather-app",
      href: "https://oeather.netlify.app/"
    },
    {
      id: 3,
      src: reactTicTacToe,
      github: "https://github.com/sanjoy04/react-tic-tac-toe",
      href: "https://letstictactoe.netlify.app/"
    },
    // {
    //   id: 4,
    //   src: reactSmooth,
    // },
    // {
    //   id: 5,
    //   src: installNode,
    // },
    // {
    //   id: 6,
    //   src: weather,
    // },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, github, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button onClick={()=> window.open(href, "_blank")} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button onClick={()=> window.open(github, "_blank")} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
