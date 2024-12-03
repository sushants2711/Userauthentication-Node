import logo from "../Images/pngtree-letter-v-logo-png-image_3990432.png";
import { Link, NavLink } from "react-router-dom";

function handleMenu() {
    console.log("first");
}

function Header() {
    return (
        <>
            <nav className="p-2 flex bg-offwhite justify-between items-center">
                <Link to="/" id="brand" className="lg:flex gap-2 items-center">
                    <img src={logo} alt="Logo" className="object-cover max-w-12 max-h-12 border-2 border-black" />
                    <span className="text-lg font-medium font-serif">ToDesktop</span>
                </Link>

                <div className="hidden lg:flex gap-[100px] pr-[50px]" id="nav-menu">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `font-medium md:text-[20px] border-b-2 ${isActive ? 'text-blue-700 border-blue-800' : 'border-transparent hover:text-blue-700 hover:border-blue-800'}`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `font-medium md:text-[20px] border-b-2 ${isActive ? 'text-blue-700 border-blue-800' : 'border-transparent hover:text-blue-700 hover:border-blue-800'}`
                        }
                    >
                        About Us
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `font-medium md:text-[20px] border-b-2 ${isActive ? 'text-blue-700 border-blue-800' : 'border-transparent hover:text-blue-700 hover:border-blue-800'}`
                        }
                    >
                        Contact
                    </NavLink>
                    <NavLink
                        to="/projects"
                        className={({ isActive }) =>
                            `font-medium md:text-[20px] border-b-2 ${isActive ? 'text-blue-700 border-blue-800' : 'border-transparent hover:text-blue-700 hover:border-blue-800'}`
                        }
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/signin"
                        className={({ isActive }) =>
                            `font-medium md:text-[20px] border-b-2 ${isActive ? 'text-blue-700 border-blue-800' : 'border-transparent hover:text-blue-700 hover:border-blue-800'}`
                        }
                    >
                        SignUp
                    </NavLink>
                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            `font-medium md:text-[20px] border-b-2 ${isActive ? 'text-blue-700 border-blue-800' : 'border-transparent hover:text-blue-700 hover:border-blue-800'}`
                        }
                    >
                        Login
                    </NavLink>
                </div>

                <button className="pr-4 lg:hidden" onClick={handleMenu}>
                    <i className="fa-solid fa-bars text-white"></i>
                </button>

                

            </nav>
        </>
    );
}

export default Header;
