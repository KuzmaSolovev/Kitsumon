import { Menu, ConnectWalletBtn, MenuBtn } from "./StyledMenubar";
import { TiThMenu } from "react-icons/ti";
import { openNav } from "./StyledNavbar";

const Menubar = () => {
  return (
    <Menu>
      <MenuBtn onClick={openNav}>
        <TiThMenu />
      </MenuBtn>
      <ConnectWalletBtn>Connect{` `}Wallet</ConnectWalletBtn>
    </Menu>
  );
};

export default Menubar;
