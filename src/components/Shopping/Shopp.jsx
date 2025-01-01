import React from "react";
import hero from "../../assets/img14.jpg";
const Shopp = () => {
  return (
    <div
      className="w-full bg-white h-full font-gilroy relative"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="bg-gradient  justify-center bg-gradient-to-br h-full from-[#131313] to-transparent  
                     bg-opacity-20"
      >
        <div className="py-6 px-10 container mx-auto">
          <h1 className="text-[#fff] text-center font-bold md:text-xl text-lg capitalize">
            What we will be sharing
          </h1>

          <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 w-full gap-5 py-10">
            <div
              className="bg-gradient w-full shadow-md rounded-md  justify-center"
              style={{ background: "rgba(255, 255, 255, 0.1" }}
            >
              <div className="flex justify-center text-center py-8 px-2">
                <h1 className="text-xs text-white ">
                  How to shop from global stores seamlessly.
                </h1>
              </div>
            </div>

            <div
              className="bg-gradient w-full shadow-md  rounded-md  justify-center"
              style={{ background: "rgba(255, 255, 255, 0.1" }}
            >
              <div className="flex justify-center text-center py-8 px-2">
                <h1 className="text-xs text-white ">
                  How to shop from global stores seamlessly.
                </h1>
              </div>
            </div>

            <div
              className="bg-gradient w-full shadow-md rounded-md   justify-center"
              style={{ background: "rgba(255, 255, 255, 0.1" }}
            >
              <div className="flex justify-center text-center py-8 px-2">
                <h1 className="text-xs text-white ">
                  Shipping goods to Nigeria without paying unnecessary tariffs
                </h1>
              </div>
            </div>

            <div
              className="bg-gradient w-full shadow-md rounded-md  justify-center"
              style={{ background: "rgba(255, 255, 255, 0.1" }}
            >
              <div className="flex justify-center text-center py-8 px-2">
                <h1 className="text-xs text-white ">
                  Setting your rates like a pro
                </h1>
              </div>
            </div>

            <div
              className="bg-gradient w-full shadow-md rounded-md   justify-center"
              style={{ background: "rgba(255, 255, 255, 0.1" }}
            >
              <div className="flex justify-center text-center py-8 px-2">
                <h1 className="text-xs text-white ">
                  The best payment platforms for beginners and pros alike
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopp;
