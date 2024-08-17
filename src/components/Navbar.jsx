export function Navbar()
{
    return <nav className="flex justify-between p-4 items-center">
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
            <div className="features hidden md:flex mx-4 space-x-2">
                <div>Microsoft 365</div>
                <div>Teams</div>
                <div>Copilot</div>
                <div>Windows</div>
                <div>Surface</div>
                <div>Xbox</div>
                <div>Support</div>
            </div>
        </div>
        <div className="cart text-center md:order-3 flex">
            <div className="search hidden md:block">All microsoft Search</div>
            <div>Cart Account</div>
        </div>
    </nav>
}