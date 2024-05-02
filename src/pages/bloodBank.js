"use client"
import React, { useEffect, useState } from 'react';
import { supabase } from '../../client';

const BloodBank = () => {
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
          console.log(data)
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error.message);
        setError(error.message); // Set error state for display
      } finally {
        setIsLoading(false); // Ensure loading state updates even on error
      }
    }

    const tableName = 'bloodbank'; // Update with your actual table name
    fetchData(tableName);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">Welcome to the Blood Bank</h1>
      <p className="text-center mb-8">Find blood donation centers near you.</p>
      {isLoading && <p className="text-center">Loading blood bank data...</p>}
      {error && <p className="text-center text-red-500 font-bold">Error: {error}</p>}
      {bloodBankData.length > 0 && (
        <table className="table-auto w-full mx-auto border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left">Bank Name</th>
              <th className="px-4 py-2 text-left">Location</th>
              <th className="px-4 py-2 text-left">Contact Info</th>
            </tr>
          </thead>
          <tbody>
            {bloodBankData.map((bank) => (
              <tr key={bank.id} className="border-b border-gray-300">
                <td className="px-4 py-2">{bank.bankname}</td>
                <td className="px-4 py-2">{bank.location}</td>
                <td className="px-4 py-2">{bank.contactinfo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BloodBank;
