import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id='contact'>
    <div className="bg-gradient-to-br from-gray-900 to-purple-800 text-white py-20 px-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-5">
          Contact <span className="text-purple">Me</span>
        </h1>
        <p className="text-lg">Feel free to reach out to me through any of the platforms below!</p>
      </div>

      <div className="flex flex-col items-center space-y-5">
        {/* Email */}
        <div className="flex items-center space-x-3">
          <FaEnvelope size={24} className="text-purple-400" />
          <p className="text-xl text-white">
            Email:{' '}
            <a
              href="mailto:thpanchal91@gmail.com"
              className="text-purple hover:underline"
            >
              thpanchal91@gmail.com
            </a>
          </p>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center space-x-3">
          <FaLinkedin size={24} className="text-purple-400" />
          <p className="text-xl text-white">
            LinkedIn:{' '}
            <a
              href="https://www.linkedin.com/in/tanisha-panchal/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple hover:underline"
            >
              Tanisha Panchal LinkedIn
            </a>
          </p>
        </div>

        {/* GitHub */}
        <div className="flex items-center space-x-3">
          <FaGithub size={24} className="text-purple-400" />
          <p className="text-xl text-white">
            GitHub:{' '}
            <a
              href="https://github.com/Tanishapanchal"
              target="_blank"
              
              className="text-purple hover:underline"
            >
              Tanisha Panchal Github
            </a>
          </p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Contact;
