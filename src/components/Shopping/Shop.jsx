import React from "react";
const Shop = () => {
  return (
    <div className="bg-dark-gradient font-outfit w-full h-full">
      <div className="relative container mx-auto md:px-10 px-4 w-full py-20">
        <div className="">
          {/* Horizontal bar of the 7 */}
          <div className="bg-gradient md:px-10 px-5 py-3 text-white justify-center bg-gradient-to-br h-full from-[#2d2d2d] to-transparent bg-opacity-20 shadow-lg rounded-xl">
            {" "}
            <div className="w-full text-xs md:text-sm font-light">
              In January 2022, I packed my bags and moved to Lagos with nothing
              but 100K in savings, a deep sense of determination, and a head
              full of questions about what my next step would be. I moved in
              with family, hoping to figure out the job or business that would
              finally bring me stability. Little did I know, the answer would
              come from an unexpected conversation.
            </div>
            {/* Diagonal bar of the 7 */}
            <div className="w-full mt-4 space-y-6 md:mt-8 md:space-y-8 text-xs md:text-sm font-light">
              <p>
                One day, I stumbled across a personal shopper sharing her
                journey and the incredible income she made monthly. Something
                clicked. Could this be the answer I was searching for? Without
                hesitation, I decided to give it a try.
              </p>
              <p>
                At first, it wasn’t easy. There were sleepless nights figuring
                out how to shop internationally, shipping challenges that
                drained my pocket, and the frustrating moments of refunding
                clients due to miscalculations. But I refused to give up.
              </p>
              <p>
                Just two months in, I hit a milestone that felt like a dream—I
                could finally replace my old, struggling phone. That moment
                marked a turning point in my life and my confidence. I realized
                that this wasn’t just a side hustle; it was an opportunity to
                build something bigger.
              </p>
              <p>
                Over time, I discovered strategies and secrets that made
                shopping internationally easier, shipping more affordable, and
                customer experiences smoother. I made every mistake so you don’t
                have to.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
