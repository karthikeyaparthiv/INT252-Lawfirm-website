import { React, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RiMenu4Line } from "react-icons/ri";
import { VscChromeClose } from "react-icons/vsc";
import { LuPhoneCall } from "react-icons/lu";
import Logo from "../../assets/image/Logo-Lawyer.png";
import style from "./nav.module.css";

export const CustomNavLink = ({ to, ...props }) => {
  let activeStyle = {
    color: "#c8ac48",
    padding: ".3rem .8rem",
    borderRadius: "3px",
  };
  return (
    <NavLink
      to={to}
      style={({ isActive }) => (isActive ? activeStyle : {})}
      {...props}
    />
  );
};

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);


  return (
    <header className={style.header}>
      <Link to="/">
        <figure className={style.figure}>
        <img src={Logo} alt="Logo" className={style.img} />
        <figcaption className={style.caption}>
          <h1 className={style.title}>M Venkata Ratnam Law Firm</h1>
          <p className={style.subtitle}>Advocates & Legal Consultants</p>
        </figcaption>
      </figure>
      </Link>
      <div className={style.menu}>
        <button onClick={toggleMenu} className={style.toggle}>
          {showMenu ? (
            <VscChromeClose className={style.icon} />
          ) : (
            <RiMenu4Line className={style.icon} />
          )}
        </button>
        <nav className={`${style.nav} ${showMenu ? style.show : ""}`}>
          <ul className={style.list}>
            <li className={style.item}>
              <CustomNavLink to="/" onClick={() => setShowMenu(false)}>
                Home
              </CustomNavLink>
            </li>
            <li className={style.item}>
              <CustomNavLink to="/about" onClick={() => setShowMenu(false)}>
                Our firm
              </CustomNavLink>
            </li>
            <li className={style.item}>
              <CustomNavLink to="/practice" onClick={() => setShowMenu(false)}>
                Practice Areas
              </CustomNavLink>
            </li>
            <li className={style.item}>
              <CustomNavLink to="/contact" onClick={() => setShowMenu(false)}>
                Contact
              </CustomNavLink>
            </li>
          </ul>
          <div className={style.phone}>
            <LuPhoneCall className={style.phone__icon} /> Message Us:{" "}
            <a href="https://wa.me/919246882929" >+91 9246882929</a>
          </div>
        </nav>
      </div>
    </header>
  );
};
