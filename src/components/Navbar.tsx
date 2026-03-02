import { useEffect } from "react";
import M from "materialize-css";
import { Link } from "react-router-dom";
import logo from "../assets/koodimakkara_logo.png";
import "./Navbar.css";

export const Navbar = () => {
  useEffect(() => {
    const sidenavs = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenavs);
  }, []);

  return (
    <>
        <nav style={{ backgroundColor: "#d67100" }}>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo" style={{ marginLeft: "10px"}}>
                    <img src={logo} alt="Koodimakkara Logo" style={{ height: "50px", width: "50px", verticalAlign: "middle" }} />
                </Link>

             

                <Link to="#!" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
                <ul className="right hide-on-med-and-down">
                    <li><a href="https://discord.com/invite/WuJUQEz">Discord</a></li>
                    <li><a href="https://fluxer.gg/HfeyaULe">Fluxer</a></li>
                    <li><Link to="/">Minecraft</Link></li>
                    <li><Link to="/videos">Videos</Link></li>
                </ul>
            </div>
        </nav>

        <div className="sidenav-bg">
            <ul className="sidenav" id="mobile-demo">
                <li><Link to="https://discord.com/invite/WuJUQEz">Discord</Link></li>
                <li><Link to="https://fluxer.gg/HfeyaULe">Fluxer</Link></li>
                <li><Link to="/">Minecraft</Link></li>
                <li><Link to="/videos">Videos</Link></li>
            </ul>
        </div>
    </>
  );
};