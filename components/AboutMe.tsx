import React from 'react';

const AboutMe = () => {
  return (
    <div>
      {/* Title Section */}
      <div className="text-white text-center mt-60">
        <span className="heading text-purple">About </span>
      </div>

      {/* About Me Section */}
      <section className="about-me bg-[#13162d] text-white py-20 px-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="relative">
            <img 
              src="headshot.jpg" 
              alt="Tanisha Panchal" 
              className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
            {/* Optional Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-purple-500 opacity-30 rounded-lg hover:opacity-0 transition duration-300"></div>
          </div>

          {/* Text Section */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-lg leading-relaxed mb-4">
              Hi! I'm <span className="text-purple font-bold">Tanisha Panchal</span>, 
              a passionate Software Developer and junior studying Computer Science at the 
              <span className="font-bold text-blue-500"> University of Michigan</span>.
            </p>
            <p className="text-lg leading-relaxed">
              With a strong interest in <span className="text-purple-300">software engineering</span>, 
              I thrive on creating unique and innovative solutions to complex problems. 
              I love exploring jazz music, cooking, and astronomy. Thanks for visiting my site!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
