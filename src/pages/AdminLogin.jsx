import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import spark from "../assets/spark.png";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import Navba from "../components/Navba";

const url = "https://tazeracademybackend.onrender.com/admin/signin";

const AdminLogin = () => {
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Enter a valid email").required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const response = await axios.post(url, values);
        localStorage.setItem("adminToken", response.data.token);
        toast.success("Login successful!");
        navigate("/admindashboard/overview");
      } catch (err) {
        if (err.response) {
          toast.error(err.response.data.message || "Login failed");
        } else {
          toast.error("Something went wrong. Please try again.");
        }
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <>
    <Navba />
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 px-4">
      <div className="absolute inset-0 bg-black/40" />
      <Toaster
        position="top-right"
        toastOptions={{
          style: { background: "#020617", color: "#fff" },
          success: { iconTheme: { primary: "#22c55e", secondary: "#020617" } },
          error: { iconTheme: { primary: "#ef4444", secondary: "#020617" } },
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md rounded-3xl bg-white/95 p-8 shadow-2xl backdrop-blur"
      >
        {/* Header */}
        <div className="mb-8 text-center">
          <img src={spark} alt="Logo" className="mx-auto h-12" />
          <h2 className="mt-4 text-2xl font-bold text-gray-900">Admin Login</h2>
          <p className="mt-1 text-sm text-gray-600">
            Secure access for platform administrators
          </p>
        </div>

        <form onSubmit={formik.handleSubmit} className="space-y-5">
          {[
            { name: "email", label: "Email Address", type: "email" },
            { name: "password", label: "Password", type: "password" },
          ].map((field) => (
            <div key={field.name}>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[field.name]}
                className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 ${
                  formik.touched[field.name] && formik.errors[field.name]
                    ? "border-red-500 focus:ring-red-300"
                    : "border-gray-300 focus:ring-indigo-400"
                }`}
              />
              {formik.touched[field.name] && formik.errors[field.name] && (
                <p className="mt-1 text-xs text-red-500">{formik.errors[field.name]}</p>
              )}
            </div>
          ))}

          <div className="flex justify-end">
            <Link
              to="/forgotpassword"
              className="text-sm font-semibold text-indigo-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full rounded-xl py-3 text-sm font-semibold text-white shadow-lg transition flex items-center justify-center gap-2 ${
              loading ? "bg-indigo-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-500"
            }`}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Signing in...
              </span>
            ) : (
              "Sign in"
            )}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Not an admin?{" "}
          <Link
            to="/adminsignup"
            className="font-semibold text-indigo-600 hover:underline"
          >
            Click here to sign up
          </Link>
        </p>
      </motion.div>
    </div>
    </>
  );
};

export default AdminLogin;
