import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import axios from 'axios';

const ManageStudents = () => {
  const { students } = useOutletContext();
  const [studentList, setStudentList] = useState(students); // Local state for students
  const [editStudent, setEditStudent] = useState(null); // State to hold the student data being edited

  const url = 'http://localhost:5000/admin/delete';
  const updateUrl = 'http://localhost:5000/admin/edit'; // Assume you have an update API

  // Handle the edit action: Open a form with pre-filled data
  const handleEdit = (studentId) => {
    const student = studentList.find((student) => student._id === studentId);
    setEditStudent(student);
  };

  // Handle updating the student data
  const handleUpdate = () => {
    if (!editStudent) return;  // Make sure there's a student to update
    
    // Send the updated student data including result, matricNo, department, and currentLevel
    axios
      .put(updateUrl, {
        studentId: editStudent._id,
        firstname: editStudent.firstname,
        lastname: editStudent.lastname,
        email: editStudent.email,
        result: editStudent.result,     // Include result
        matricNo: editStudent.matricNo, // Include matric number
        department: editStudent.department, // Include department
        currentLevel: editStudent.currentLevel // Include current level
      })
      .then((response) => {
        console.log('Updated student:', response.data);
        
        // Optimistically update the list of students
        setStudentList((prevList) =>
          prevList.map((student) =>
            student._id === editStudent._id ? { ...student, ...editStudent } : student
          )
        );
        
        setEditStudent(null);  // Close the modal after successful update
        alert('Student updated successfully');
      })
      .catch((error) => {
        console.error('Error updating student:', error);
        alert('Error updating student');
      });
  };

  // Handle changes in the edit form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  // Handle delete action
  const handleDelete = (studentId) => {
    console.log('Deleting student with ID:', studentId);
    axios
      .post(url, { studentId })
      .then((response) => {
        console.log(response);
        alert(response.data.message);
        setStudentList((prevList) =>
          prevList.filter((student) => student._id !== studentId)
        );
      })
      .catch((error) => {
        console.error('Error deleting student:', error);
        alert('Error deleting student');
      });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Manage Students</h1>

      {studentList && studentList.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="text-left bg-indigo-600 text-white">
                <th className="px-6 py-3">First Name</th>
                <th className="px-6 py-3">Last Name</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Result</th>
                <th className="px-6 py-3">Matric No</th>
                <th className="px-6 py-3">Department</th> {/* New column for department */}
                <th className="px-6 py-3">Current Level</th> {/* New column for currentLevel */}
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {studentList.map((student) => (
                <tr key={student._id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">{student.firstname}</td>
                  <td className="px-6 py-4">{student.lastname}</td>
                  <td className="px-6 py-4">{student.email}</td>
                  <td className="px-6 py-4">{student.result || 'N/A'}</td>
                  <td className="px-6 py-4">{student.matricNo || 'N/A'}</td>
                  <td className="px-6 py-4">{student.department || 'N/A'}</td> {/* Display department */}
                  <td className="px-6 py-4">{student.currentLevel || 'N/A'}</td> {/* Display currentLevel */}
                  <td className="px-6 py-4 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                    {/* Edit Button */}
                    <button
                      onClick={() => handleEdit(student._id)}
                      className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600 focus:outline-none"
                    >
                      Edit
                    </button>
                    {/* Delete Button */}
                    <button
                      onClick={() => handleDelete(student._id)}
                      className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 focus:outline-none"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500 mt-4">No students available.</p>
      )}

      {/* Modal for editing student */}
      {editStudent && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full sm:w-1/3">
            <h2 className="text-xl font-semibold mb-4">Edit Student</h2>
            <div className="mb-4">
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                name="firstname"
                value={editStudent.firstname || ''}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastname"
                value={editStudent.lastname || ''}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={editStudent.email || ''}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            {/* New fields for result, matricNo, department, and currentLevel */}
            <div className="mb-4">
              <label className="block text-gray-700">Result</label>
              <input
                type="text"
                name="result"
                value={editStudent.result || ''}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Matric Number</label>
              <input
                type="text"
                name="matricNo"
                value={editStudent.matricNo || ''}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Department</label>
              <input
                type="text"
                name="department"
                value={editStudent.department || ''}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Current Level</label>
              <input
                type="text"
                name="currentLevel"
                value={editStudent.currentLevel || ''}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setEditStudent(null)} // Close modal
                className="bg-gray-500 text-white py-1 px-3 rounded-lg hover:bg-gray-600 focus:outline-none"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate} // Update student
                className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600 focus:outline-none"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageStudents;
