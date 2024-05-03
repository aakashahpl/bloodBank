import React from "react";
import { useEffect } from "react";
import "@/styles/globals.css";
import Head from "next/head";
import Navbar from "@/components/navbar";
import Script from "next/script";

export default function App({ Component, pageProps }) {

  return( 
    <>
  <Navbar/>   
  <Component {...pageProps} />
    </>
  )
}
