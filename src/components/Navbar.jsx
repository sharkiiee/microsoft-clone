export function Navbar() {
  return (
    <>
      <div className="container mx-auto">
        <nav className="flex justify-between p-4 items-center">
          <div className="flex justify-center items-center md:order-2">
            <div className="hamburger p-4 md:hidden">
              <div className="h-0.5 w-6 my-1 bg-black"></div>
              <div className="h-0.5 w-6 my-1 bg-black"></div>
              <div className="h-0.5 w-6 my-1 bg-black"></div>
            </div>
            <div className="search md:hidden">Search</div>
          </div>

          <div className="logo text-center flex md:order-1">
            <div className="flex justify-center items-center">
              <img src="./images/micro.png" alt="" className="h-7" />
              <div className="text-2xl">Microsoft</div>
            </div>
            <div className="features w-fit absolute md:static inset-0 md:flex md:mx-4 md:space-x-2 -translate-x-96 md:translate-x-0 bg-gray-200 md:bg-transparent">
              <div className="border border-purple-300">Microsoft 365</div>
              <div className="border border-purple-300">Teams</div>
              <div className="border border-purple-300">Copilot</div>
              <div className="border border-purple-300">Windows</div>
              <div className="border border-purple-300">Surface</div>
              <div className="border border-purple-300">Xbox</div>
              <div className="border border-purple-300">Support</div>
            </div>
          </div>

          <div className="cart text-center md:order-3 flex">
            <div className="search border border-pink-500 hidden md:block">
              All microsoft Search
            </div>
            <div className="border border-blue-600">Cart Account</div>
          </div>
        </nav>

        {/* MainContent */}

        <div className="slider flex flex-col-reverse md:flex-row bg-[#e7f0f9] md:mx-4">
          <div className="leftBox flex flex-col justify-center items-center md:items-baseline text-center md:text-left py-10">
            <h1 className="text-2xl font-medium mx-6 md:text-4xl">Surface Laptop 4</h1>
            <p className="mx-6">
              This laptop's unrivalled flexibility and AI features like Live
              Captions and Cocreator, enable you to do more than you ever imagined.
            </p>
            <button className="text-white bg-black px-4 py-2 mx-5 my-6 font-bold">Shop Now</button>
          </div>
          <div className="rightBox">
            <img src="./images/main-pc.avif" alt="" className="hidden md:block" />
            <img src="./images/app-main-pc.avif" alt="" className="md:hidden" />
          </div>
        </div>

        {/* Promo code */}

        <div className="promo flex flex-wrap text-center justify-center space-x-12">

          <div className="items flex flex-col justify-center items-center my-3">
            <img src="./images/coin1.svg" alt="image error" className="h-12" />
            <span className="font-medium">Choose your Microsoft 365</span>
          </div>
          <div className="items flex flex-col justify-center items-center my-3">
            <img src="./images/coin2.svg" alt="image error" className="h-12" />
            <span className="font-medium">Shop xbox</span>
          </div>
          <div className="items flex flex-col justify-center items-center my-3">
            <img src="./images/coin3.svg" alt="image error" className="h-12" />
            <span className="font-medium">Get Window 11</span>
          </div>
          <div className="items flex flex-col justify-center items-center my-3">
            <img src="./images/coin4.svg" alt="image error" className="h-12" />
            <span className="font-medium">Explore Surface devices</span>
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
}
