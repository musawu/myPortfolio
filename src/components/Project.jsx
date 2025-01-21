import React from "react";
import QuizApp from '../assets/quizApp.png'
import MovieBooking from '../assets/movie-booking.png'
import HospitalSystem from'../assets/hospitalsystem.png'

const projects = [
  {
    id: 1,
    name: "Quiz App",
    technologies: "Next.js with React and Firebase stack",
    image: QuizApp,
    github: "https://github.com/musawu/QuizApp",
    hostUrl:"https://quiz-app-musawusyntiche.vercel.app/"
  },
  {
    id: 2,
    name: "Movie Booking App",
    technologies: "Next.js with React and JSON",
    image: MovieBooking,
    github: "https://github.com/musawu/Movie-Booking-",
    hostUrl:""
  },
  {
    id: 3,
    name: "Hospital-Management-System",
    technologies: "React, Node.js, Express, MongoDB",
    image: HospitalSystem,
    github: "https://github.com/musawu/Hospital-Management-System",
    hostUrl:""
  }
];

const Project = () => {
  return (
    <div className="bg-black text-white py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>

              <div className="flex justify-between gap-4">
                <a
                  href={project.github}
                  className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>

                {project.hostUrl && (
                  <a
                    href={project.hostUrl}
                    className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Go Live
                  </a>
  )}
</div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
