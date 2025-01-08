// import React from "react";
// import { useLocation } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = () => {
//     const location = useLocation(); // Get the current location

//     const handleScroll = (e, id) => {
//         e.preventDefault();
//         const section = document.getElementById(id);
//         if (section) {
//             section.scrollIntoView({ behavior: "smooth" });
//         }
//     };

//     return (
//         <nav className="navbar navbar-expand-lg">
//             <div className="container">
//                 <a className="navbar-brand" href="./">
//                     <i className="material-icons">Yo !</i>
//                     <img
//                         src="https://i.pinimg.com/736x/21/e9/80/21e9802ecaa6c3bdd416a8805e607812.jpg"
//                         alt="Logo"
//                         className="rounded-circle"
//                         style={{ width: "50px", height: "50px", marginLeft: "10px" }}
//                     />
//                 </a>

//                 <button
//                     className="navbar-toggler"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#navbarNav"
//                     aria-controls="navbarNav"
//                     aria-expanded="false"
//                     aria-label="Toggle navigation"
//                 >
//                     <span className="navbar-toggler-icon"></span>
//                 </button>

//                 <div className="collapse navbar-collapse" id="navbarNav">
//                     <ul className="navbar-nav ms-auto">
//                         {["home", "about", "services", "project", "contact"].map((id) => (
//                             <li className="nav-item" key={id}>
//                                 <a
//                                     className="nav-link"
//                                     href={`#${id}`}
//                                     onClick={(e) => handleScroll(e, id)}
//                                 >
//                                     {id.charAt(0).toUpperCase() + id.slice(1)}
//                                 </a>
//                             </li>
//                         ))}
//                         {/* Conditionally render the Blog link */}
//                         {location.pathname !== "/blog" && (
//                             <li className="nav-item">
//                                 <a
//                                     className="nav-link"
//                                     href="/blog"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                 >
//                                     Blog
//                                 </a>
//                             </li>
//                         )}
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;


import React from "react";
import { useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const location = useLocation(); // Get the current location

    const handleScroll = (e, id) => {
        e.preventDefault();
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <i className="material-icons">Yo !</i>
                    <img
                        src="https://i.pinimg.com/736x/21/e9/80/21e9802ecaa6c3bdd416a8805e607812.jpg"
                        alt="Logo"
                        className="rounded-circle"
                        style={{ width: "50px", height: "50px", marginLeft: "10px" }}
                    />
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {location.pathname === "/blog" ? (
                            // Show only the "Home" link on the Blog page
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    Home
                                </a>
                            </li>
                        ) : (
                            // Show all other links on other pages
                            <>
                                {["about", "services", "project", "contact"].map((id) => (
                                    <li className="nav-item" key={id}>
                                        <a
                                            className="nav-link"
                                            href={`#${id}`}
                                            onClick={(e) => handleScroll(e, id)}
                                        >
                                            {id.charAt(0).toUpperCase() + id.slice(1)}
                                        </a>
                                    </li>
                                ))}
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="/blog"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Blog
                                    </a>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
