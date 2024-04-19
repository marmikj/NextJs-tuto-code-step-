"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import style from "./style.module.css"
import Image from "next/image";
import profile from "../../public/vercel.svg"
import { Josefin_Sans } from "next/font/google";

const JosefinSans =Josefin_Sans({
  weight: '700',
  subsets: ['latin'],
  display:'swap'

})
export default function Home() {
  const [name,setname] =useState("marmik")
  const [color,setColor]=useState("red")
  console.log(profile,"profile")
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
      <h1 className="main">Event function state {name}</h1>
      <button onClick={()=>apple("colors")}>click me  </button><hr />
      <Link href="/login">Go to LOgin </Link><br />
      <Link href="/about">Go to About </Link><br />
      <Link href="/productlist">Go to Product List</Link><hr />
      <button onClick={()=>navigate('/login')}>Go To Login Page</button><br />
      <button onClick={()=>navigate('/about')}>Go To About Page</button>
      <h1>statics asset in next</h1>
      <img src="./download (10).jpeg"/>
      {/* <innerComp/> */}
      {innerComp()}
      {/* <User name="marmik" />
      <User name="joshi" />
      <User />
      <div>
        <h1>hii...</h1>
      </div> */}
      <h2>the welcome</h2> <hr />

      <h1 className={color== "red"?style.red:style.green}>condtion with style</h1>
      <button onClick={()=>setColor("green")}>update color </button><hr />
      <Image src={profile} width={500} height={500}/>
      <img src={profile.src} />
      <Image  src="https://images.rawpixel.com/image_social_landscape/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2ZsMjMxNDY4ODE2NTQtaW1hZ2Uta295NWoyeG4uanBn.jpg" width={500} height={500} alt="free-photo-image-plant-yellow-sunlight"/>
       <hr />
       {/* <h1>this is welcome website</h1>
       <h1 style={{fontFamily:'roboto', fontWeight:20}}>welcome to joshi</h1> */}
      <hr/>
      <h1>this is welcome website</h1>
       <h1 style={{fontFamily:'roboto', fontWeight:20}}>welcome to joshi</h1>
       <hr/>
       <h1 className={JosefinSans.className}>Font with next FOnt feature</h1>
    </main>
  );
}

const User = (props) => {
  return <h1>Welcome to {props.name}</h1>;
};

