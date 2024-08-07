import {
  NavbarContainerStyled,
  LinksContainerStyled,
  LinkContainerStyled,
  UserContainerStyled,
  HomeContainerStyled,
  MenuContainerStyled,
  UserImageStyled,
  UserNavStyled,
  SpanStyled,
} from "./navbarStyles";

import { FaUserAlt } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  return (
    <div>
      <NavbarContainerStyled>
        <div>
          <a href="#">
            <img
              src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1658797659/coding/NucbaZappi/Assets/nucba-zappi-icon_oe3ark_xmvab5.png"
              alt="Logo"
            />
          </a>
        </div>
        <LinksContainerStyled>
          <HomeContainerStyled>
            <a href="#">
              <LinkContainerStyled home>
                <HiHome />
              </LinkContainerStyled>
              Home
            </a>
          </HomeContainerStyled>

          <UserNavStyled>
            <UserContainerStyled>
              <SpanStyled>Iniciar Sesión</SpanStyled>
              <FaUserAlt />
            </UserContainerStyled>
          </UserNavStyled>
          <MenuContainerStyled>
            <AiOutlineMenu />
          </MenuContainerStyled>
        </LinksContainerStyled>
      </NavbarContainerStyled>
    </div>
  );
}

export default Navbar;
