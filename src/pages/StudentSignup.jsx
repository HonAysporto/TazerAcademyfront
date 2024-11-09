import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Formik, useFormik  } from 'formik'
import spark from "../assets/spark.png"
import * as Yup from 'yup'




let url = "http://localhost:5000/student/signup"




const StudentSignup = () => {

  const navigate = useNavigate()
  // const [login, setlogin] = useState("")
  //  let  navigate = useNavigate()
  //   const [email, setemail] = useState("")
  //   const [password, setpassword] = useState("")
  //   let url = "http://localhost:5000/user/signin"
  //   const signin = () => {
  //       axios.post(url, {email, password}).then((response)=> {
  //         if(!response.data.status) {
  //             console.log(response.data.message);
  //             setlogin(response.data.message)
  //         } else {
  //           navigate('/dashboard')
  //         }
  //       })
  //   } 




let formik = useFormik({
  initialValues : {
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  },
  onSubmit : (values)=> {
    console.log(values);
    axios.post(url, values).then((response)=> {
      if(!response.data.status) {
        console.log(response.data.message);
      

      } else {
        console.log(response.data.message)
        alert(response.data.message)
        navigate('/studentlogin')

      }
    })
  },

  validationSchema: Yup.object({
    firstname: Yup.string().required('This field is required'),
    lastname: Yup.string().required('This field is required').min(3, 'must be atleast 3 characters'),
    email: Yup.string().required('This field is required').email("must be an email"),
    password: Yup.string().required('This field is required')
  })
})
console.log(formik.errors);


  return (
   <>

    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8  bg-purple-100">
      <div>
        
      </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm shadow-lg p-6 pt-3  pb-3  bg-purple-100rounded-t-md">
          <img
            className="mx-auto h-10 w-auto"
            src={spark}
            alt="Your Company"
          />
          <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up
          </h2>
        </div>
        
        <div className=" sm:mx-auto sm:w-full sm:max-w-sm shadow-lg p-6 mb-6 mt-0 bg-purple-100 rounded-b-md">
          <form className="space-y-6 " action="#" method="POST" onSubmit={formik.handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
             First Name
              </label>
              <div className="mt-2">
                <input
                  id="firstname"
                  name="firstname"
                  type="text"
                  autoComplete='name'
                  required
                  onChange={formik.handleChange}
                  value={formik.values.firstname}
                  onBlur={formik.handleBlur}
          
                  className={formik.touched.firstname && formik.errors.firstname   ? "border-red-500 text-red-500 focus:outline-none focus:ring focus:border-red-500 block w-full rounded-md border-2 py-1.5" : "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"}
                /> 
                <small className='text-red-500'>{formik.touched.firstname && formik.errors.firstname}</small>
              </div>
            </div>


            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Last Name
              </label>
              <div className="mt-2">
                <input
                  id="lastname"
                  name="lastname"
                  type="text"
                  autoComplete="email"
                  required
                  onChange={formik.handleChange}
                  value={formik.values.lastname}
                  onBlur={formik.handleBlur}
                  className={formik.touched.lastname && formik.errors.lastname   ? "border-red-500 text-red-500 focus:outline-none focus:ring focus:border-red-500 block w-full rounded-md border-2 py-1.5" : "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"}
                />
                <small className='text-red-500'>{formik.touched.lastname && formik.errors.lastname}</small>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  className={formik.touched.email && formik.errors.email  ? "border-red-500 text-red-500 focus:outline-none focus:ring focus:border-red-500 block w-full rounded-md border-2 py-1.5" : "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"}
                />
                <small className='text-red-500'>{formik.touched.email && formik.errors.email}</small>
              </div>
            </div>


            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
               
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                 
                  className={formik.touched.password && formik.errors.password   ? "border-red-500 text-red-500 focus:outline-none focus:ring focus:border-red-500 block w-full rounded-md border-2 py-1.5" : "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"}
                />
                <small className='text-red-500'>{formik.touched.password && formik.errors.password}</small>
              </div>
            </div>

            <div>
              <button
                type="submit"
              
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
          Already signed up?{' '}
          <Link to="/studentlogin" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Click here to login
          </Link>
        </p>
        </div>
      </div>

   </>
  )
}

export default StudentSignup