import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const Herovalue = () => {
  return (
    <div className="max-w-full mx-1 py-2 sm:mx-auto">
      <div className="sm:flex sm:space-x-4">
        <Card title="Resources available" count={300} />
        <Card title="Courses available" count={120} />
        <Card title="Active Volunteers" count={5000} />
        <Card title="External Resources" count={1000} />
      </div>
    </div>
  );
};

const Card = ({ title, count }) => {
  return (
    <motion.div
      className="inline-block align-bottom bg-white rounded-lg px-5 transition-transform transform-gpu hover:scale-110 mb-4 w-full sm:w-1/3 sm:my-8"
      whileHover={{ scale: 1.1 }}
    >
      <div className="bg-white pt-2">
        <div className="sm:flex sm:items-start">
          <div className="text-center sm:mt-0 sm:ml-2 sm:text-left w-full">
            <h3 className="text-sm leading-6 font-medium text-gray-400">{title}</h3>
            <CountAnimation count={count} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CountAnimation = ({ count }) => {
  return (
    <motion.p
      className="text-3xl font-bold text-black"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 260, damping: 20 }}
    >
      {count}+
    </motion.p>
  );
};

export default Herovalue;
