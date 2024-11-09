import React from 'react'
import { Formik, useFormik  } from 'formik'
import spark from "../assets/spark.png"
import * as Yup from 'yup'
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



let url = "http://localhost:5000/student/signin"

const StudentLogin = () => {

  const navigate = useNavigate();

   let formik = useFormik({
    initialValues : {
      email: "",
      password: ""
    },
    onSubmit : (values)=> {
      console.log(values);
      axios.post(url, values).then((response)=> {
        if(!response.data.status) {
          console.log(response.data.message);
          // alert(response.data.message)
        } else {
          console.log(response.data.message)
          // alert(response.data.message)
          localStorage.token = response.data.token
          navigate('/dashboard/profile')
        }
      })
    }, 

    validationSchema: Yup.object({
      email: Yup.string().required('This field is required').email("must be an email"),
      password: Yup.string().required('This field is required')
    })
   })


 
 
  return (

    <>
 
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8  bg-purple-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
        <img
          className="mx-auto h-10 w-auto"
          src={spark}
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Student Account
        </h2>
      </div>

      <div className="mt-10 pb-40 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST" onSubmit={formik.handleSubmit}>
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
                className={formik.touched.email && formik.errors.email  ? "border-red-500 text-red-500 focus:outline-none focus:ring focus:border-red-500 block w-full rounded-md border-2 py-1.5 p-5" : "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 p-5"}
                />
                <small className='text-red-500'>{formik.touched.email && formik.errors.email}</small>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="text-sm">
                <Link to="/forgotpassword" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </Link>
              </div>
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
                  className={formik.touched.password && formik.errors.password   ? "border-red-500 text-red-500 focus:outline-none focus:ring focus:border-red-500 block w-full rounded-md border-2 py-1.5 p-5" : "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 p-5"}
                  />
                  <small className='text-red-500'>{formik.touched.password && formik.errors.password}</small>
            </div>
          </div>

          <div>
            <button
              type="submit"

              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{' '}
          <Link to="/studentsignup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Click here to sign up
          </Link>
        </p>
      </div>
    </div>
  </>
  )
}

export default StudentLogin