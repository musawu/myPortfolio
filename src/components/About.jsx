import React from 'react';
import AboutImage from '../assets/synticheimg.jpeg';

const SkillBar = ({ name, width }) => {
  return (
    <div className="flex items-center">
      <label className="w-2/12">{name}</label>
      <div className="grow bg-gray-800 rounded-full h-2.5">
        <div
          className={`bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                      transform transition-transform duration-300 hover:scale-105 ${width}`}
        ></div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-stretch md:space-x-12">
          {/* Profile Image */}
          <img
            src={AboutImage}
            alt="About Me"
            className="w-72 h-[500px] rounded object-cover mb-8 md:mb-0"
          />
          {/* Description and Skill Bars */}
          <div className="flex-1 flex flex-col justify-between">
            <p className="text-lg mb-8">
              I am a passionate full-stack developer with a focus on building modern and responsive web applications. 
              With a strong foundation in both frontend and backend technologies, I strive to create seamless and 
              efficient user experiences.
            </p>
            <div className="space-y-6">
              {/* Skill Bars */}
              <SkillBar name="HTML & CSS" width="w-10/12" />
              <SkillBar name="React JS" width="w-9/12" />
              <SkillBar name="Node JS" width="w-8/12" />
              <SkillBar name="Next JS" width="w-8/12" />
              <SkillBar name="Python" width="w-10/12" />
              <SkillBar name="Django" width="w-9/12" />
              <SkillBar name="YOLO v8 & OpenCV" width="w-7/12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
