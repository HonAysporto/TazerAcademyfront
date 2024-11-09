import React from 'react';
import { useOutletContext } from 'react-router-dom';

const AdminOverview = () => {
  const { count } = useOutletContext();
  console.log(count);

  
  
 

  return (
    <div className="w-full p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Total Students Card */}
        <div className="bg-blue-100 shadow-lg rounded-lg p-6 flex flex-col items-center">
          <div className="text-blue-600 text-7xl mb-4">
            {/* People Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a6 6 0 00-5-5.9M12 11a6 6 0 100-12 6 6 0 000 12zM12 14v5m0 5v-5m-7 5h5v-2a6 6 0 00-5-5.9" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold">Total Students</h2>
          <p className="text-4xl font-bold mt-2">{count}</p>
        </div>

        {/* Notices Sent Card */}
        <div className="bg-green-100 shadow-lg rounded-lg p-6 flex flex-col items-center">
          <div className="text-green-600 text-7xl mb-4">
            {/* Notifications Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 8a6 6 0 00-9.33-4.9m-3.68 8.41L4 14.55M13 10l-1.5 1.5m.84 3.76L8.42 20" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold">Notices Sent</h2>
          <p className="text-4xl font-bold mt-2">50</p>
        </div>

        {/* Active Students Card */}
        <div className="bg-yellow-100 shadow-lg rounded-lg p-6 flex flex-col items-center">
          <div className="text-yellow-600 text-7xl mb-4">
            {/* Active Students Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4a8 8 0 100 16 8 8 0 000-16zm0 6v4m0 4v.01" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold">Active Students</h2>
          <p className="text-4xl font-bold mt-2">900</p>
        </div>

        {/* New Registrations Card */}
        <div className="bg-purple-100 shadow-lg rounded-lg p-6 flex flex-col items-center">
          <div className="text-purple-600 text-7xl mb-4">
            {/* Registration Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4a8 8 0 00-8 8v8h16v-8a8 8 0 00-8-8z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold">New Registrations</h2>
          <p className="text-4xl font-bold mt-2">200</p>
        </div>

        {/* Pending Notices Card */}
        <div className="bg-pink-100 shadow-lg rounded-lg p-6 flex flex-col items-center">
          <div className="text-pink-600 text-7xl mb-4">
            {/* Pending Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M6 12h12a9.5 9.5 0 11-12 0z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold">Pending Notices</h2>
          <p className="text-4xl font-bold mt-2">15</p>
        </div>

        {/* Average Attendance Rate Card */}
        <div className="bg-teal-100 shadow-lg rounded-lg p-6 flex flex-col items-center">
          <div className="text-teal-600 text-7xl mb-4">
            {/* Attendance Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10l5 5L21 4" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold">Avg Attendance Rate</h2>
          <p className="text-4xl font-bold mt-2">85%</p>
        </div>

        {/* Courses Offered Card */}
        <div className="bg-indigo-100 shadow-lg rounded-lg p-6 flex flex-col items-center">
          <div className="text-indigo-600 text-7xl mb-4">
            {/* Courses Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 4H4v12h16V4zM4 20h16v-2H4v2z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold">Courses Offered</h2>
          <p className="text-4xl font-bold mt-2">25</p>
        </div>

        {/* Student Feedback Card */}
        <div className="bg-gray-100 shadow-lg rounded-lg p-6 flex flex-col items-center">
          <div className="text-gray-600 text-7xl mb-4">
            {/* Feedback Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8M8 12h8m-4 5h4M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold">Student Feedback</h2>
          <p className="text-4xl font-bold mt-2">100</p>
        </div>

        {/* Overall Performance Card */}
        <div className="bg-orange-100 shadow-lg rounded-lg p-6 flex flex-col items-center">
          <div className="text-orange-600 text-7xl mb-4">
            {/* Performance Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15l9-9 9 9" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold">Overall Performance</h2>
          <p className="text-4xl font-bold mt-2">78%</p>
        </div>
      </div>
    </div>
  );
};

export default AdminOverview;
