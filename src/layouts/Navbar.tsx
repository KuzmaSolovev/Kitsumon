import { useEffect, useRef, useState } from "react";
import {
  Nav,
  NavLogo,
  NavMenu,
  NavLink,
  openNav,
  closeNav,
  Img,
} from "./StyledNavbar";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [state] = useState({ mobileView: false });
  const { mobileView } = state;
  const dropMenuRef = useRef<any>(null);

  useEffect(() => {
    const setResponsiveness = () => {
      window.innerWidth >= 700 ? openNav() : closeNav();
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickOutside = (e: any) => {
    if (dropMenuRef.current && dropMenuRef.current.contains(e.target)) {
      return;
    }
    closeNav();
  };

  document.addEventListener("mousedown", handleClickOutside);

  return (
    <Nav ref={dropMenuRef} mobile={mobileView} id="Nav">
      <NavLogo to="/">
        <Img src={Logo} />
      </NavLogo>
      <NavMenu>
        <NavLink to="#" onClick={closeNav}>
          HOME
        </NavLink>
        <NavLink to="#" onClick={closeNav}>
          MARKET
        </NavLink>
        <NavLink to="#" onClick={closeNav}>
          WHITE PAPER
        </NavLink>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
