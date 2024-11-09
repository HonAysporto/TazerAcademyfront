import React from 'react'
import spark from "../assets/spark.png"
import { Formik, useFormik } from 'formik'
import { Link } from "react-router-dom";
import * as Yup from 'yup'

const Forget = () => {

    let formik = useFormik({
        initialValues : {
            email: ""
        },
        onSubmit : (values) => {
            console.log(values);
        }, 

        validationSchema: Yup.object({
            email: Yup.string().required('This field is required').email("must be an email")
          })
    })

    
  return (
    <>
 
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 pb-40 py-12 lg:px-8  bg-purple-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
        <img
          className="mx-auto h-10 w-auto"
          src={spark}
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Reset password
        </h2>
      </div>

      <div className="mt-10 pb-40 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST" onSubmit={formik.handleSubmit} >
        
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
                className={formik.touched.email && formik.errors.email  ? "border-red-500 text-red-500 focus:outline-none focus:ring ps-5 focus:border-red-500 block w-full rounded-md border-2  py-1.5" : "block w-full rounded-md border-0 ps-5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"}
                />
                <small className='text-red-500'>{formik.touched.email && formik.errors.email}</small>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
             
            
            </div>
            
          </div>

          <div>
            <button
              type="submit"

              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send OTP
            </button>
          </div>
        </form>

        
      </div>
    </div>
  </>
  )
}

export default Forget