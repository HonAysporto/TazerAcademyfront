import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import spark from "../assets/spark.png";

const sendUrl = "http://localhost:5000/admin/sendnotice"; // POST
const getNoticeUrl = "http://localhost:5000/admin/getnotice"; // GET

const SendNotice = () => {
  const [loading, setLoading] = useState(false);
  const [latestNotice, setLatestNotice] = useState(null);

  // Fetch the latest notice on mount
  useEffect(() => {
    fetchLatestNotice();
  }, []);

  const fetchLatestNotice = async () => {
    try {
      const response = await axios.get(getNoticeUrl);
      if (response.data.status) {
        setLatestNotice(response.data.notice);
      } else {
        setLatestNotice(null);
      }
    } catch (err) {
      console.error("Error fetching notice:", err);
    }
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      message: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        const response = await axios.post(sendUrl, values);
        toast.success(response.data.message || "Notice sent successfully");
        resetForm();
        fetchLatestNotice(); // Refresh the latest notice after sending
      } catch (err) {
        if (err.response) {
          toast.error(err.response.data.message || "Failed to send notice");
        } else {
          toast.error("Something went wrong. Please try again");
        }
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="relative flex flex-col min-h-screen items-center justify-start bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 px-4 py-10">
      <div className="absolute inset-0 bg-black/40" />
      <Toaster
        position="top-right"
        toastOptions={{
          style: { background: "#020617", color: "#fff" },
          success: { iconTheme: { primary: "#22c55e", secondary: "#020617" } },
          error: { iconTheme: { primary: "#ef4444", secondary: "#020617" } },
        }}
      />

      {/* Form */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-lg rounded-3xl bg-white/95 p-8 shadow-2xl backdrop-blur z-10 mb-10"
      >
        <div className="mb-8 text-center">
          <img src={spark} alt="Logo" className="mx-auto h-12" />
          <h2 className="mt-4 text-2xl font-bold text-gray-900">Send Notice</h2>
          <p className="mt-1 text-sm text-gray-600">
            Notify all students with an important announcement
          </p>
        </div>

        <form onSubmit={formik.handleSubmit} className="space-y-5">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              name="title"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
              className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 ${
                formik.touched.title && formik.errors.title
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-300 focus:ring-indigo-400"
              }`}
            />
            {formik.touched.title && formik.errors.title && (
              <p className="mt-1 text-xs text-red-500">{formik.errors.title}</p>
            )}
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 ${
                formik.touched.message && formik.errors.message
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-300 focus:ring-indigo-400"
              }`}
            />
            {formik.touched.message && formik.errors.message && (
              <p className="mt-1 text-xs text-red-500">{formik.errors.message}</p>
            )}
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
                Sending notice...
              </span>
            ) : (
              "Send Notice"
            )}
          </button>
        </form>
      </motion.div>

      {/* Latest Notice Display */}
      {latestNotice && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-lg rounded-3xl bg-white/90 p-6 shadow-2xl backdrop-blur text-gray-900 z-10"
        >
          <h3 className="text-xl font-bold mb-2 text-indigo-600">{latestNotice.title}</h3>
          <p className="text-gray-700">{latestNotice.message}</p>
          <p className="text-xs text-gray-500 mt-3">
            {new Date(latestNotice.createdAt).toLocaleString()}
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default SendNotice;
