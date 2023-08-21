import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  //<a href="#home">home</a>
  //Also has unique key prop
  const anchors = links.map((link)=> (
    <a key={link} href={"#" + link}>
    {link}
    </a>
  ));
  return <nav>{anchors}</nav>
}

export default NavBar;
