import React from "react";
import Img from "../../assets/Ariria.png";
import Img2 from "../../assets/ades.png";
import Img3 from "../../assets/loubia.png";
import StarRatings from "react-star-ratings";
const ServicesData = [
  {
    id: 1,
    img: Img,
    name: "H'rira",
    description:
      "\n" +
        "One distinctive feature of H'rira is its unique filling,",
  },
  {
    id: 2,
    img: Img2,
    name: "Lentils (L3ades)",
    description:
      "\n" +
        "Lentils are small, lens-shaped legumes that come in various colors, including green, brown",
  },
  {
    id: 3,
    img: Img3,
    name: "Lubia",
    description:
      " Lubia refers to beans in Arabic, and it encompasses a variety  and dietary fiber",
  },
];
const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
              Our Services
            </p>
            <h1 className="text-3xl font-bold">Services</h1>
            <p className="text-xs text-gray-400">
             <i>
               At Foodie Haven, we take pride in delivering exceptional service. Our attentive and knowledgeable staff is dedicated to ensuring your dining experience is nothing short of extraordinary. Whether you're a regular seeking your favorite dish or a first-time visitor exploring our menu, our team is here to make your visit memorable
             </i>
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                data-aos="zoom-in"
                data-aos-duration="300"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <br/><br/>
                <div className="p-4 text-center">
                  <div className="w-full ">
                    { <StarRatings
                      rating={4.5}
                      starRatedColor="yellow"
                      isSelectable={false}
                      starHoverColor="yellow"
                       starSelectingHoverColor
                      starDimension="20px"
                      changeRating={() => {}}
                      numberOfStars={5}
                      name="rating"
                    /> }
                  </div>
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
