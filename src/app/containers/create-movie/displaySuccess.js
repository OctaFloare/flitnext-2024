import React, { useEffect, useState } from 'react';

const DisplaySuccess = ({ data }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="absolute bottom-0 bg-green-100 border border-green-500 text-green-700 rounded p-4 w-full max-w-md text-center mt-4">
      <h3 className="font-bold mb-2">Newly Created Movie</h3>
      <p><strong>ID:</strong> {data.id}</p>
      <p><strong>Movie Name:</strong> {data.name}</p>
    </div>
  );
};

export default DisplaySuccess;