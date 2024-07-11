import React from 'react';

const DisplayError = ({ error }) => {
  return (
    <div className="text-red-600 border border-red-600 rounded p-4 w-full max-w-md text-center">
      {error.message}
    </div>
  );
};

export default DisplayError;