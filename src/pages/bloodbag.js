"use client"
import React, { useEffect, useState } from 'react';
import { supabase } from '../../client'; // Assuming Supabase client is imported
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import MapboxMap from '@/components/map';

const inter = Inter({ subsets: ['latin'] });

// Simple Navbar component
// const Navbar = () => {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" style={{
//             paddingInline: "5rem",
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "space-between",
//             alignItems: "center"
//         }}>
//             <a href="/">
//                 <p className="navbar-brand font-bold text-3xl">BLOOD DONORS<sub><small className=" ml-2">THE REAL HEROES</small></sub></p>
//             </a>
//             <div className="text-white flex flex-row gap-16">
//                 <a href="/bloodBank">
//                     <p className="text-lg text-white">Blood Banks</p>
//                 </a>
//                 <a href="/bloodbag">
//                     <p className="text-lg text-white active">Need Blood?</p>
//                 </a>
//                 <a href="/someOtherPage">
//                     <p className="text-lg text-white">Some Other Page</p>
//                 </a>
//                 {/* Add more links as needed */}
//             </div>
//         </nav>
//     );
// };


export default function Home() {
    const [bloodBankData, setBloodBankData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData(tableName) {
            try {
                const { data, error } = await supabase
                    .from(tableName)
                    .select();

                if (error) {
                    setError(error.message);
                } else {
                    setBloodBankData(data);
                }
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error.message);
                setError(error.message); // Set error state for display
            } finally {
                setIsLoading(false); // Ensure loading state updates even on error
            }
        }

        const tableName = 'bloodbag'; // Update with your actual table name
        fetchData(tableName);
    }, []);

    return (
        <main className="px-11 bg-black min-h-screen ">

            <section id="bloodbankdata" className='pt-16 flex flex-col items-center px-20'>
                <div className="container-fluid  text-white py-24 ">
                    <div className="row text-center">
                        <div className="col-lg-12">
                            <h1 className=" mt-4 py-3 font-medium text-6xl">Available Blood</h1>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {bloodBankData.map((bank) => (
                            <div key={bank.id} className=" bg-gray-800 rounded-lg shadow-md p-6 hover:scale-105 hover:transition ease-in-out">
                                <h2 className="text-xl font-bold mb-2">{bank.bagid}</h2>
                                <p className="text-gray-400 mb-2 flex ">Blood Type:
                                    <p className=' text-red-500'>
                                        {bank.bloodtype}
                                    </p>
                                </p>
                                <p className="text-gray-400">Expiry Date: {bank.expdate ? new Date(bank.expdate).toLocaleDateString() : '-'}</p>
                                <p className='flex '>
                                    Status:
                                    <p className={bank.bagstatus === 'Available' ? 'text-green-500' : 'text-red-500'}>
                                        {bank.bagstatus}
                                    </p>
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className=' flex flex-row items-center justify-center mt-20'>
                        <h2>Contact your near Hospital Now</h2>
                    </div>

                    {isLoading && <p className="text-center">Loading blood bank data...</p>}
                    {error && <p className="text-center text-red-500 font-bold">Error: {error}</p>}
                </div>
                <div className=' w-9/12  flex justify-center items-center '>
                    <MapboxMap />
                </div>
            </section>
        </main>
    );
}
