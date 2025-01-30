import React from 'react';
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import Departments from "../components/Departments";
import MessageForm from "../components/MessageForm";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
    <Hero title={"Welcome to HospiCare Medical Support | Your Trusted Healthcare Provider "} imageUrl={"/hero.png"}/>
    <Biography imageUrl={"/about.png"}/>
    <Departments/>
    <MessageForm/>
    </>
  )
}

export default Home