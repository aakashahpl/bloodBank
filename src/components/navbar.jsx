import React from 'react';
import Link from 'next/link';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" style={{
        paddingInline: "5rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position:"fixed"
      }}>
        <a className="navbar-brand font-bold text-3xl" href="/">BLOOD DONORS<sub><small className=" ml-2">THE REAL HEROS</small></sub></a>
        <div className="text-white flex flex-row gap-16">
          <Link href="/bloodBank"> <h3 className=" text-lg text-white no-underline">Blood Banks</h3></Link>
          <a href="/bloodbag"> <h3 className=" text-lg text-white ">Need Blood?</h3></a>
          <a href="/donate"> <h3 className=" text-lg text-white ">Donate</h3></a>
          <h3 className=" text-lg">BloodBanks</h3>

        </div>

      </nav>
  );
};

export default Navbar;
