import React from 'react';

const Profile = ({ userinfo }) => {
  const student = userinfo && userinfo.length > 0 ? userinfo[0] : null;

  if (!student) {
    // Fallback UI while data is loading
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4 md:px-8 lg:px-16">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Welcome, {student.firstname} {student.lastname}</h1>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="flex flex-col items-center justify-center shadow-lg rounded-md p-4 bg-gray-100">
          <p className="text-xl font-bold">{student.matricNo}</p>
          <p className="text-sm text-gray-600">Matric Number</p>
        </div>

        <div className="flex flex-col items-center justify-center shadow-lg rounded-md p-4 bg-gray-100">
          <p className="text-xl font-bold">{student.currentLevel}</p>
          <p className="text-sm text-gray-600">Current Level</p>
        </div>

        <div className="flex flex-col items-center justify-center shadow-lg rounded-md p-4 bg-gray-100">
          <p className="text-xl font-bold">{student.result}</p>
          <p className="text-sm text-gray-600">Current CGPA</p>
        </div>

        <div className="flex flex-col items-center justify-center shadow-lg rounded-md p-4 bg-gray-100">
          <p className="text-xl font-bold">{student.department}</p>
          <p className="text-sm text-gray-600">Department</p>
        </div>
      </div>

      {/* Personal Information and Notice Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Personal Information */}
        <div className="bg-green-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
          <div className="space-y-3">
            <h3 className="text-lg">Surname: <span className="font-medium">{student.lastname}</span></h3>
            <h3 className="text-lg">First Name: <span className="font-medium">{student.firstname}</span></h3>
            <h3 className="text-lg">Email: 
              <span className="font-medium text-blue-600 truncate">{student.email}</span>
            </h3>
          </div>
        </div>

        {/* Notice Board */}
        <div className="bg-red-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Notice Board</h2>
          <div className="h-96 flex items-center justify-center text-gray-500">
            <p>No notices available at the moment.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
