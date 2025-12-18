import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const Profile = ({ userinfo }) => {
  const student = userinfo && userinfo.length > 0 ? userinfo[0] : null;
  const [notice, setNotice] = useState(null);

  // Fetch the latest notice when component mounts
  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const token = localStorage.getItem("token"); // Or wherever you store JWT
        const response = await axios.get("http://localhost:5000/student/getnotice", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.data.status) {
          setNotice(response.data.notice);
        } else {
          setNotice(null);
        }
      } catch (err) {
        console.error("Error fetching notice:", err);
        setNotice(null);
      }
    };

    fetchNotice();
  }, []);

  if (!student)
    return (
      <p className="text-center mt-10 text-gray-500 dark:text-gray-400">
        Loading...
      </p>
    );

  const stats = [
    { label: "Matric Number", value: student.matricNo || "N/A", emoji: "📝" },
    { label: "Current Level", value: student.currentLevel || "N/A", emoji: "🎓" },
    { label: "Current CGPA", value: student.result || "N/A", emoji: "📚" },
    { label: "Department", value: student.department || "N/A", emoji: "👤" },
  ];

  const CardWrapper = ({ children }) => (
    <div className="rounded-2xl shadow-2xl backdrop-blur-xl bg-white/40 dark:bg-gray-900/40 border border-white/30 dark:border-gray-700/40 hover:shadow-green-300/30 dark:hover:shadow-green-500/20 transition-all duration-300 w-full">
      {children}
    </div>
  );

  const CardContentWrapper = ({ children, className }) => (
    <div className={`p-6 flex flex-col ${className}`}>{children}</div>
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-10 relative">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="w-72 h-72 bg-green-400/30 dark:bg-green-500/20 blur-[120px] rounded-full absolute top-10 left-10" />
        <div className="w-72 h-72 bg-purple-400/30 dark:bg-purple-600/20 blur-[120px] rounded-full absolute bottom-10 right-10" />
      </div>

      {/* Welcome */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-gray-100 mb-8 sm:mb-10 tracking-wide drop-shadow-sm text-center sm:text-left"
      >
        Welcome, {student.firstname} {student.lastname}
      </motion.h1>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.12 }}
            whileHover={{ scale: 1.05 }}
            className="w-full"
          >
            <CardWrapper>
              <CardContentWrapper className="items-center text-center space-y-3">
                <p className="text-3xl sm:text-4xl">{item.emoji}</p>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 drop-shadow-sm break-words truncate max-w-full">
                  {item.value}
                </p>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 truncate max-w-full">
                  {item.label}
                </p>
              </CardContentWrapper>
            </CardWrapper>
          </motion.div>
        ))}
      </div>

      {/* Main Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
        {/* Personal Info Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <CardWrapper>
            <CardContentWrapper className="p-6 sm:p-7 w-full">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-green-800 dark:text-green-300 tracking-wide">
                Personal Information
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-gray-800 dark:text-gray-200">
                {/* Last Name */}
                <div className="flex flex-col">
                  <span className="text-sm sm:text-base font-medium text-gray-600 dark:text-gray-400">
                    Surname
                  </span>
                  <span className="break-words text-base sm:text-lg font-semibold">
                    {student.firstname}
                  </span>
                </div>

                {/* First Name */}
                <div className="flex flex-col">
                  <span className="text-sm sm:text-base font-medium text-gray-600 dark:text-gray-400">
                    Last Name
                  </span>
                  <span className="break-words text-base sm:text-lg font-semibold">
                    {student.lastname}
                  </span>
                </div>

                {/* Email */}
                <div className="flex flex-col sm:col-span-2">
                  <span className="text-sm sm:text-base font-medium text-gray-600 dark:text-gray-400">
                    Email
                  </span>
                  <div className="overflow-x-auto w-full">
                    <span
                      className="break-words text-base sm:text-lg font-semibold text-blue-700 dark:text-blue-400"
                      title={student.email}
                    >
                      {student.email}
                    </span>
                  </div>
                </div>
              </div>
            </CardContentWrapper>
          </CardWrapper>
        </motion.div>

        {/* Notice Board Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <CardWrapper>
            <CardContentWrapper className="p-6 sm:p-7 flex flex-col h-full w-full">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-red-700 dark:text-red-300 tracking-wide">
                Notice Board
              </h2>
              {notice ? (
                <div className="space-y-3 overflow-y-auto max-h-96">
                  <p className="font-bold text-lg sm:text-xl text-gray-900 dark:text-gray-100 break-words">
                    {notice.title}
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 break-words">
                    {notice.message}
                  </p>
                </div>
              ) : (
                <div className="flex-1 flex items-center justify-center text-gray-500 dark:text-gray-400 text-base sm:text-lg text-center break-words">
                  <p>No notices available at the moment.</p>
                </div>
              )}
            </CardContentWrapper>
          </CardWrapper>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
