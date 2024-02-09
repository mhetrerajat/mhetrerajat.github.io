
'use client';

import { Navbar, Badge } from 'flowbite-react';
import { FaMedapps } from "react-icons/fa6";

const HeaderBar = () => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Rajat Mhetre
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Badge color="warning" size="xs">Work In Progress</Badge>
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/posts/">Posts</Navbar.Link>
        {/* <Navbar.Link href="/resources/">Resources</Navbar.Link> */}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default HeaderBar;


