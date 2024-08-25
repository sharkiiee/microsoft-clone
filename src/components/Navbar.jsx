export function Navbar() {
  return (
    <nav className="flex justify-between p-4 items-center border border-black">
      <div className="flex justify-center items-center md:order-2">
        <div className="hamburger p-4 md:hidden">
          <div className="h-0.5 w-6 my-1 bg-black"></div>
          <div className="h-0.5 w-6 my-1 bg-black"></div>
          <div className="h-0.5 w-6 my-1 bg-black"></div>
        </div>
        <div className="search md:hidden">Search</div>
      </div>

      <div className="logo text-center flex md:order-1">
        <div>Microsoft</div>
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
  );
}
