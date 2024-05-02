import React, { useEffect, useState } from 'react';
import { supabase } from '../../client'; // Assuming Supabase client is imported
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

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
        <main className="px-11 bg-black">
            {/* Existing Navigation Section */}
            <section id="nav">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" style={{
                    paddingInline: "5rem",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    {/* Existing Navigation Links */}
                    <a className="navbar-brand font-bold text-3xl" href="#">BLOOD DONORS<sub><small className=" ml-2">THE REAL HEROS</small></sub></a>
                    <div className="text-white flex flex-row gap-16">
                        <a href="/bloodBank"> <h3 className=" text-lg text-white ">Blood Banks</h3></a>
                        <a href="/bloodbag"> <h3 className=" text-lg text-white active">Need Blood?</h3></a>
                        <h3 className=" text-lg">BloodBanks</h3>
                        <h3 className=" text-lg">BloodBanks</h3>
                    </div>
                </nav>
            </section>

            {/* Existing Banner Section */}
            <section id="banner">
                {/* Existing Banner Content */}
            </section>

            {/* Existing Donation Process Section */}
            <section id="donationprocess" className="bg-secondary">
                {/* Existing donation process content */}
            </section>

            {/* Blood Bank Data Section */}
            <section id="bloodbankdata">
                <div className="container-fluid bg-secondary text-white">
                    <div className="row text-center">
                        <div className="col-lg-12">
                            <h1 className="display-4 mt-4 py-3 font-weight-bold">Blood Bank Availability</h1>
                        </div>
                    </div>

                    {isLoading && <p className="text-center">Loading blood bank data...</p>}
                    {error && <p className="text-center text-red-500 font-bold">Error: {error}</p>}
                    {bloodBankData.length > 0 && (
                        <table className="table-auto w-full mx-auto border border-gray-300">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="px-4 py-2 text-left">Bag ID</th>
                                    <th className="px-4 py-2 text-left">Blood Type</th>
                                    <th className="px-4 py-2 text-left">Expiry Date</th>
                                    <th className="px-4 py-2 text-left">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bloodBankData.map((bank) => (
                                    <tr key={bank.id} className="border-b border-gray-300">
                                        <td className="px-4 py-2">{bank.bagid}</td>
                                        <td className="px-4 py-2">{bank.bloodtype}</td>
                                        <td className="px-4 py-2">
                                            {bank.expdate ? new Date(bank.expdate).toLocaleDateString() : '-'}
                                        </td>
                                        <td className="px-4 py-2">{bank.bagstatus}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )
                    }
                </div>
            </section>
        </main>
    )
}
