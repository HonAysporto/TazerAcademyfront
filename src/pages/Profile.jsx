import React from 'react'

const Profile = ({userinfo}) => {
  const student = userinfo[0]
  console.log(student);

  const user = userinfo && userinfo.length > 0 ? userinfo[0] : null;

  if (!user) {
    // Fallback UI while data is loading
    return <p>Loading...</p>;
  }
  
  return (

    <>

     
        <div>
            
          <h1 className='text-sm text-gray-800 mb-7'>Welcome, {student.firstname} {student.lastname}</h1>

          <div className='flex flex-wrap text-center justify-around'>
            <div className='flex text-center justify-center flex-col shadow-md rounded-md p-3 px-7 bg-gray-100 mb-3'>
              <p className='text-xl font-bold'>{student.matricNo}</p>
              <p className='text-sm'>Matric Number</p>
            </div>

            <div className='flex text-center justify-center flex-col shadow-md rounded-md p-3 px-7 bg-gray-100 mb-3'>
              <p className='text-xl font-bold'>{student.currentLevel}</p>
              <p className='text-sm'>Current Level</p>
            </div>

            <div className='flex text-center justify-center flex-col shadow-md rounded-md p-3 px-7 bg-gray-100 mb-3'>
              <p className='text-xl font-bold'>{student.result}</p>
              <p className='text-sm'>Current CGPA</p>
            </div>

            <div className='flex text-center justify-center flex-col shadow-md rounded-md p-3 px-7 bg-gray-100 mb-3'>
              <p className='text-xl font-bold'>{student.department}</p>
              <p className='text-sm'>Department</p>
            </div>
          </div>

          <div className='flex text-center justify-between mt-7'>
            <div className='w-2/5 bg-green-100'>
              {/* Personal Information */}
                <h1 className='font-bold'>Personal Information</h1>

                <div className='mt-3 flex flex-col text-start ps-2'>
                  <h1>Surname: <span>{student.firstname}</span></h1>
                  <h1>First Name: <span>{student.lastname}</span></h1>
                  <h1>Email: <span>{student.email}</span></h1>
                </div>
        

            </div>

            <div className='w-2/5 bg-red-100'>
              {/* Notice Board */}
              <h1 className='font-bold'>Notice board</h1>

              <div className='flex justify-center text-center h-96'>
                    
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Profile
