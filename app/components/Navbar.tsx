type Props = {
  children: React.ReactNode;
};

export default function Navbar({children}: Props) {
    return (
        <div className="drawer h-screen w-full max-w-screen">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content h-full w-full max-w-screen grid grid-rows-[auto_1fr]">
                <Nav/>
                <div className="h-full bg-base-200 box-border">
                    {children}
                </div>
            </div>
            <div className="drawer-side h-full">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content h-full w-80 p-4">
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>
            </div>
        </div>
    )
}

const Nav = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm top-0">
            <div className="navbar-start">
                    <label htmlFor="my-drawer" tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                    </label>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
                </button>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}