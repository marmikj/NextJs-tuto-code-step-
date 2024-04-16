"use client";
import Link from "next/link";
import React from "react";
import "./login.css";
import { usePathname } from "next/navigation";

const layout = ({ children }) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div>
      {pathname != "/login/loginteacher" ? 
        <ul className="login-menu">
          <li>
            <h4>Login Navbar</h4>
          </li>
          <li>
            <Link href="/login">login main</Link>
          </li>
          <li>
            <Link href="/login/loginstudent">login Student</Link>
          </li>
          <li>
            <Link href="/login/loginteacher">login Techer</Link>
          </li>
        </ul>
       : <Link href='/login'>Go To Login PAge </Link>}
      {children}
    </div>
  );
};

export default layout;
