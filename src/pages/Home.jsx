import React from "react";
import Navba from "../components/Navba";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navba />

      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 pt-28 pb-20">
        {/* Background blur */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl xl:text-6xl">
                Kickstart Your Learning With <span className="text-yellow-300">TAZARH</span>
              </h1>
              <p className="mb-8 max-w-xl text-lg text-white/90">
                Learn faster, grow smarter, and build real-world skills with a modern learning platform designed for students and professionals.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="rounded-full bg-yellow-400 px-8 py-4 text-base font-semibold text-gray-900 shadow-lg transition hover:bg-yellow-300"
                >
                  <Link to="/studentlogin" >
                          Get Started
                          </Link>
                </a>
                <a
                  href="#"
                  className="rounded-full border border-white/40 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
                >
                  <Link to="/about" >
                          Learn More
                          </Link>
                </a>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative mx-auto max-w-md rounded-3xl bg-white/20 p-6 shadow-2xl backdrop-blur-xl">
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png"
                  alt="Learning illustration"
                  className="w-full rounded-2xl"
                />
              </div>

              {/* Decorative circles */}
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-yellow-400/30 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-pink-400/30 blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
