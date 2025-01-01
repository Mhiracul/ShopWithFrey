const Loader = () => {
  return (
    <div className="loader-container flex justify-center items-center h-screen bg-dark-gradient">
      <div className="flex flex-col items-center text-center relative">
        {/* Rotating border */}

        {/* Center content */}
        <div className=" flex justify-center items-center loader-circle z-10 animate-slow-spin">
          <h1 className="uppercase bg-clip-text text-transparent bg-text-gradient md:text-3xl text-base  font-bold">
            frey digitals
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Loader;
