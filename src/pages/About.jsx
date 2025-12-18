import React from "react";
import Navba from "../components/Navba";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Navba />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 pt-28 pb-20">
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
                About <span className="text-yellow-300">TAZARH</span>
              </h1>
              <p className="mb-8 max-w-xl text-lg text-white/90">
                TAZARH is a modern learning platform dedicated to helping students and professionals grow smarter and faster. Our mission is to bridge the gap between theory and real-world skills, providing hands-on learning experiences.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#mission"
                  className="rounded-full bg-yellow-400 px-8 py-4 text-base font-semibold text-gray-900 shadow-lg transition hover:bg-yellow-300"
                >
                  Our Mission
                </a>
                <a
                  href="#values"
                  className="rounded-full border border-white/40 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
                >
                  Our Values
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
                  alt="About illustration"
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

      {/* Mission Section */}
      <section id="mission" className="relative bg-white dark:bg-gray-900 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl">
              To empower learners with practical skills and knowledge that are applicable in the real world. We focus on interactive learning, mentorship, and cutting-edge resources to create the ultimate learning experience.
            </p>
          </motion.div>

          {/* Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Learn Faster", description: "Engage with hands-on projects and interactive lessons to accelerate your learning journey.", color: "bg-purple-600/80" },
              { title: "Grow Smarter", description: "Develop critical thinking and problem-solving skills that apply directly to real-world challenges.", color: "bg-indigo-600/80" },
              { title: "Build Real Skills", description: "Master in-demand skills to succeed in your career and stand out in your industry.", color: "bg-blue-600/80" },
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`rounded-3xl p-6 text-white shadow-2xl backdrop-blur-xl ${card.color} hover:scale-105 transition transform`}
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-3">{card.title}</h3>
                <p className="text-base sm:text-lg">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="relative bg-gray-50 dark:bg-gray-800 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl">
              We believe in integrity, innovation, and inclusivity. Our approach ensures every learner feels supported and motivated to achieve their goals.
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "Integrity", icon: "✅", color: "bg-yellow-400/30" },
              { value: "Innovation", icon: "💡", color: "bg-pink-400/30" },
              { value: "Inclusivity", icon: "🌍", color: "bg-green-400/30" },
              { value: "Excellence", icon: "🏆", color: "bg-blue-400/30" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-2xl backdrop-blur-xl ${item.color} hover:scale-105 transition transform`}
              >
                <p className="text-4xl mb-4">{item.icon}</p>
                <p className="text-lg font-bold text-gray-900 dark:text-white">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 py-20 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-extrabold mb-6"
        >
          Ready to Join TAZARH?
        </motion.h2>
        <motion.a
          href="#"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block rounded-full bg-yellow-400 px-10 py-4 text-lg font-semibold text-gray-900 shadow-lg hover:bg-yellow-300 transition"
        >
           <Link to="/">Get Started</Link>
        </motion.a>
      </section>
    </>
  );
};

export default About;
