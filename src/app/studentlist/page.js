import Link from "next/link";
import React from "react";

const studentlist = () => {
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        <li>
          <Link href="studentlist/hitesh"> hitesh</Link>
        </li>
        <li>
          <Link href="studentlist/kishan"> kishan</Link>
        </li>
        <li>
          <Link href="studentlist/ramesh"> ramesh</Link>
        </li>
      </ul>
    </div>
  );
};

export default studentlist;
