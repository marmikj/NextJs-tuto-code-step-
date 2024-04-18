"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const [name,setname] =useState("marmik")
  const apple =(item) =>{
    alert(item)
    setname("joshi")
  }
  const innerComp=() =>{
    return(
      <h1>inner component</h1>
    )
  }

  const route = useRouter()
  const navigate =(name) =>{
    route.push(name)
  }
  return (
    <main className={styles.main}>
      <h1>Event function state {name}</h1>
      <button onClick={()=>apple("colors")}>click me  </button><hr />
      <Link href="/login">Go to LOgin </Link><br />
      <Link href="/about">Go to About </Link><br />
      <Link href="/productlist">Go to Product List</Link><hr />
      <button onClick={()=>navigate('/login')}>Go To Login Page</button><br />
      <button onClick={()=>navigate('/about')}>Go To About Page</button>
      {/* <innerComp/> */}
      {innerComp()}
      {/* <User name="marmik" />
      <User name="joshi" />
      <User />
      <div>
        <h1>hii...</h1>
      </div> */}
    </main>
  );
}

const User = (props) => {
  return <h1>Welcome to {props.name}</h1>;
};

