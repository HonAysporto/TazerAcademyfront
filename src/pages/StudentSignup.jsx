import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import spark from "../assets/spark.png";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import Navba from "../components/Navba";

const url = "https://tazeracademybackend.onrender.com/student/signup";

const StudentSignup = () => {
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("First name is required"),
      lastname: Yup.string().min(3, "At least 3 characters").required("Last name is required"),
      email: Yup.string().email("Enter a valid email").required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      setLoading(true);
      axios.post(url, values)
        .then((response) => {
          if (response.data.status) {
            toast.success(response.data.message || "Account created successfully");
            navigate("/studentlogin");
          } else {
            toast.error(response.data.message || "Signup failed");
            console.log(response);
            
          }
        })
        .catch(() => {
          toast.error("Something went wrong. Please try again.");
        })
        .finally(() => setLoading(false));
    },
  });

  return (
    <>
      <Navba />
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 px-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      <Toaster position="top-right" toastOptions={{
        style: {
          background: "#1e1b4b",
          color: "#fff",
        },
        success: {
          iconTheme: { primary: "#facc15", secondary: "#1e1b4b" },
        },
        error: {
          iconTheme: { primary: "#ef4444", secondary: "#1e1b4b" },
        },
      }} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md rounded-3xl bg-white/90 p-8 shadow-2xl backdrop-blur-lg"
      >
        {/* Header */}
        <div className="mb-8 text-center">
          <img src={spark} alt="Logo" className="mx-auto h-12" />
          <h2 className="mt-4 text-2xl font-bold text-gray-900">Create Student Account</h2>
          <p className="mt-1 text-sm text-gray-600">
            Join TAZARH and start your learning journey
          </p>
        </div>

        {/* Form */}
        <form onSubmit={formik.handleSubmit} className="space-y-5">
          {/* First Name */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              name="firstname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstname}
              className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 ${
                formik.touched.firstname && formik.errors.firstname
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-300 focus:ring-indigo-400"
              }`}
            />
            {formik.touched.firstname && formik.errors.firstname && (
              <p className="mt-1 text-xs text-red-500">{formik.errors.firstname}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              name="lastname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastname}
              className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 ${
                formik.touched.lastname && formik.errors.lastname
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-300 focus:ring-indigo-400"
              }`}
            />
            {formik.touched.lastname && formik.errors.lastname && (
              <p className="mt-1 text-xs text-red-500">{formik.errors.lastname}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-300 focus:ring-indigo-400"
              }`}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="mt-1 text-xs text-red-500">{formik.errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 ${
                formik.touched.password && formik.errors.password
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-300 focus:ring-indigo-400"
              }`}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="mt-1 text-xs text-red-500">{formik.errors.password}</p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full rounded-xl py-3 text-sm font-semibold text-white shadow-lg transition flex items-center justify-center gap-2 ${
              loading
                ? "bg-indigo-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-500"
            }`}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Creating account...
              </span>
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/studentlogin" className="font-semibold text-indigo-600 hover:underline">
            Sign in
          </Link>
        </p>
      </motion.div>
    </div>
    </>
  );
};

export default StudentSignup;
