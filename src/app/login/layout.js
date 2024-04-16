import Link from "next/link";
import React from "react";
import "./login.css";

const layout = ({ children }) => {
  return (
    <div>
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
      {children}
    </div>
  );
};

export default layout;
