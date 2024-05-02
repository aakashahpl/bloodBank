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
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error.message);
        setError(error.message);
        setIsLoading(false);
      }
    }

    const tableName = 'bloodbank';
    fetchData(tableName);
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Welcome to the Blood Bank</h1>
        <p className="text-lg text-center mb-8">Find blood donation centers near you.</p>
        {isLoading && <p className="text-center">Loading blood bank data...</p>}
        {error && <p className="text-center text-red-500 font-bold">Error: {error}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bloodBankData.map((bank) => (
            <div key={bank.id} className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-2">{bank.bankname}</h2>
              <p className="text-gray-400 mb-2">{bank.location}</p>
              <p className="text-gray-400">{bank.contactinfo}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BloodBank;
