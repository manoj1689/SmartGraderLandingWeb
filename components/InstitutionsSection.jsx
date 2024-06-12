import React from "react";
import { useRouter } from "next/router";
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const cardVariants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 1,
    },
  },
};

const InstitutionsSection = () => {
  const router = useRouter();
  const sendEducationParam = () => {
    // Perform any logout logic here, e.g., clearing authentication tokens, etc.

    // Construct the URL with query parameters
    const url = new URL('http://smart-grader-app-ts.vercel.app/signUp');
    url.searchParams.append('userType', 'educational');
  

    // Redirect to the URL with parameters
    window.location.href = url.toString();
  };
  return (
    <motion.div 
      initial="offscreen" 
      whileInView="onscreen" 
      viewport={{ once: true, amount: 0.4 }} 
      className="container mx-auto flex flex-col mb-10 md:flex-row gap-5 max-w-[1250px] px-4"
      variants={cardVariants}
      style={{ marginBottom: '20px' }}
    >
      <div className="w-full md:w-1/2 flex items-center">
        <motion.img
          loading="lazy"
          src="/images/home/institutions-banner.png"
          className="w-full rounded-md lg:px-16 object-cover "
          alt="Institutions Banner"
        />
      </div>
      <div className="flex flex-col justify-center w-full md:w-1/2 text-slate-800">
        <div className='px-4 py-4'>
          <h2 className="text-3xl md:text-4xl font-spline font-medium mb-4 leading-tight">
            Robust Testing Platform <br /> for Educational Institutions
          </h2>
          <img
            loading="lazy"
            src="/images/home/HomeLine.png"
            className="mt-1.5 max-w-full aspect-[14.29] w-[307px]"
          />
           <div className="mt-8 space-y-4">
          <div className="flex items-center gap-2">
            <img
              loading="lazy"
              src="/images/home/rounded-tick-icon.png"
              className="w-6 h-6"
              alt="Tick Icon"
            />
            <span className="font-medium">Secure Testing Environment</span>
          </div>
          <p className="font-light">Maintain academic integrity with supervised exams.</p>
          <div className="flex items-center gap-2 mt-4">
            <img
              loading="lazy"
              src="/images/home/rounded-tick-icon.png"
              className="w-6 h-6"
              alt="Tick Icon"
            />
            <span className="font-medium">Comprehensive Assessments</span>
          </div>
          <p className="font-light">Test a wide range of subjects with customizable questions.</p>
          <div className="flex items-center gap-2 mt-4">
            <img
              loading="lazy"
              src="/images/home/rounded-tick-icon.png"
              className="w-6 h-6"
              alt="Tick Icon"
            />
            <span className="font-medium">Automated Grading</span>
          </div>
          <p className="font-light">Save time with accurate and fair AI grading.</p>
        </div>
          {/* Bullet points and other text details... */}
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="flex items-center justify-center cursor-pointer self-start lg:self-start w-2/3 px-4 py-2 mt-9 text-sm text-white bg-sky-500 rounded-md border border-sky-500 transition-transform duration-300"
            onClick={sendEducationParam}
          >
            <span>Enhance Academic Assessment</span>
            <FaArrowRight className="ml-2" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default InstitutionsSection;
