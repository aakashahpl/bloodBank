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
        <main className="mx-10 bg-black">
            {/* Existing Navigation Section */}
            <section id="nav">
                {/* Existing Navigation Content */}
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
                            <h1 className="display-4 mt-4 py-3 font-weight-bold">Blood bag Availability</h1>
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

                    {isLoading && <p className="text-center">Loading blood bank data...</p>}
                    {error && <p className="text-center text-red-500 font-bold">Error: {error}</p>}
                </div>
            </section>
        </main>
    );
}
