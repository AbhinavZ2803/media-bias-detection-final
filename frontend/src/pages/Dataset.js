import React from 'react';

const Dataset = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-center mb-4">Dataset</h2>
      <p className="text-lg mb-6 text-center">This dataset contains news articles used to train our models to detect bias. It includes various categories such as political, group, and individual bias.</p>

      <div className="flex justify-center mb-6">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg">Download Sample Dataset</button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="p-2 border">Article ID</th>
              <th className="p-2 border">Category</th>
              <th className="p-2 border">Bias Type</th>
              <th className="p-2 border">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">1</td>
              <td className="p-2 border">Politics</td>
              <td className="p-2 border">Political Bias</td>
              <td className="p-2 border">2024-01-01</td>
            </tr>
            <tr>
              <td className="p-2 border">2</td>
              <td className="p-2 border">Group</td>
              <td className="p-2 border">Group Bias</td>
              <td className="p-2 border">2024-02-15</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dataset;
