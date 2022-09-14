import Head from "next/head";
import { useState } from "react";
import Expert from "../components/Expert";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hire from "../components/Hire";
import Main from "../components/Main";
import People from "../components/People";
import Recruitment from "../components/Recruitment";

export default function Home() {
  const [showUseDrop, setShowUseDrop] = useState(false);
  return (
    <div>
      <Head>
        <title>Lucy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/icon.svg" />
      </Head>
      <Header showUseDrop={showUseDrop} setShowUseDrop={setShowUseDrop}/>
      <Main showUseDrop={showUseDrop} setShowUseDrop={setShowUseDrop}/>
      <Recruitment />
      <Hire />
      <People />
      <Expert/>
      <Footer />
    </div>
  );
}
