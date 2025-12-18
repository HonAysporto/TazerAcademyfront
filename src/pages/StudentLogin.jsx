import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import spark from "../assets/spark.png";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import Navba from "../components/Navba";

const url = "https://tazeracademybackend.onrender.com/student/signin";

const StudentLogin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Enter a valid email")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      setLoading(true);

      axios
        .post(url, values)
        .then((response) => {
          if (response.data.status) {
            localStorage.token = response.data.token;
            toast.success("Login successful 🎉");
            navigate("/dashboard/profile");
          } else {
            toast.error(response.data.message || "Invalid login details");
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
      {/* Toasts */}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#1e1b4b", // dark indigo
            color: "#fff",
          },
          success: {
            iconTheme: {
              primary: "#facc15", // gold
              secondary: "#1e1b4b",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444", // red
              secondary: "#1e1b4b",
            },
          },
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md rounded-3xl bg-white/90 p-8 shadow-2xl backdrop-blur-lg"
      >
        {/* Header */}
        <div className="mb-8 text-center">
          <img src={spark} alt="Logo" className="mx-auto h-12" />
          <h2 className="mt-4 text-2xl font-bold text-gray-900">
            Student Login
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Access your dashboard and continue learning
          </p>
        </div>

        {/* Form */}
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Email address
            </label>
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
              <p className="mt-1 text-xs text-red-500">
                {formik.errors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <div className="mb-1 flex items-center justify-between">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Link
                to="/forgotpassword"
                className="text-xs font-semibold text-indigo-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
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
              <p className="mt-1 text-xs text-red-500">
                {formik.errors.password}
              </p>
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
              <>
                <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Signing in...
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/studentsignup"
            className="font-semibold text-indigo-600 hover:underline"
          >
            Create one
          </Link>
        </p>
      </motion.div>
    </div>
    </>
  );
};

export default StudentLogin;
