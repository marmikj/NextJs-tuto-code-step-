"use client"

import React from "react";

const page = ({params}) => {
    console.log(params)
  return (
    <div>
    <h1>Student Deatils </h1>
    <h3>Name : {params.student}</h3>
    </div>
  );
};

export default page;

