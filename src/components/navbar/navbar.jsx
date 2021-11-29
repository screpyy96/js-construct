import React, { useState, useEffect } from "react";
import Burger from "../burger/burger";
import Menu from "../menu/menu";
import DesktopNav from "../menu/desktop-nav";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [desktop, setDesktop] = useState(false);
  useEffect(() => {

    const isDesktop = window.innerWidth > 768;
    setDesktop(isDesktop);
  }, [])
  return (
    <>
      <div>
        {desktop ? (
          <DesktopNav open={open} />
        ) : (
          <div>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
