import React from 'react';
import './About.css';
import TypeEffect from './TypeEffect';

const About = () => {
  return (
    <section className='lg:h-screen w-screen grid lg:grid-cols-2 gap-6 items-center justify-between h-100% w-100% lg:p-8 bg-white dark:bg-black'>
      <div className='text-center lg:text-left p-10 lg:p-6 mt-20'>
        <h1 className='font-mono text-2xl text-start lg:text-3xl dark:text-white mb-4'>
          Hello, I'm <TypeEffect />
        </h1>
        <p className='font-mono text-start lg:text-xl dark:text-white mb-6'>
          I am a passionate and skilled developer with a foundation in web technologies and programming. I am interested in front-end and back-end development, creating responsive and dynamic web applications.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
          <a
            className="font-mono text-base lg:text-xl border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition duration-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-600 dark:hover:text-white"
            href="https://www.linkedin.com/in/seepana-pavan-kumar-1515aa2a7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="font-mono text-base lg:text-xl border-2 border-gray-800 text-black px-6 py-2 rounded-lg hover:bg-gray-900 hover:text-white transition duration-300 dark:border-gray-200 dark:text-white dark:hover:bg-gray-200 dark:hover:text-black"
            href="https://github.com/Spavankumar1296/Spavankumar1296"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="font-mono text-base lg:text-xl border-2 border-yellow-500 text-yellow-500 px-6 py-2 rounded-lg hover:bg-yellow-600 hover:text-white transition duration-300 dark:border-yellow-400 dark:text-yellow-400 dark:hover:bg-yellow-500 dark:hover:text-white"
            href="https://leetcode.com/u/Spavankumar_1_2_9_6/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LeetCode
          </a>
        </div>
      </div>
      <div className='flex justify-center lg:justify-center p-4 lg:p-6'>
        <img
          className='w-full max-w-md lg:max-w-lg shrink-0 rounded-lg'
          src="https://img.freepik.com/premium-vector/programing-concept-illustration_353829-161.jpg?w=826"
          alt="GitHub"
        />
      </div>
    </section>
  );
};

export default About;