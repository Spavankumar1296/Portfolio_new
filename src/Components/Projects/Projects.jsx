import React, { useState } from "react";
import "./Projects.css";

const projects = [
  {
    title: "Gemini Clone",
    imgUrl: "https://camo.githubusercontent.com/5e533895d4d4e2e2466e1836cb48e7d800705ac7f6a898695d44660bbddb3e1f/68747470733a2f2f6c68332e676f6f676c6575736572636f6e74656e742e636f6d2f6544723670594b7331745430694b306e743370506876566c5032576e39366662477162576742414152525a376973656a303337675f74576f626a56387a516b784f73577a4a75454838702d666b73637a58554f657178475a5a496f5f485543646b6e38712d61346675774154443751395872733d77323435362d6c3130302d73672d726a2d633078666666666666",
    description:" The application is developed using React and the Gemini API, featuring a responsive,user-friendly interface. ",
  },
  {
    title: "Food Much Restaurant",
    imgUrl: "https://img.freepik.com/free-photo/view-table-with-articles-food-family_1398-5025.jpg?t=st=1740674941~exp=1740678541~hmac=413e32d29e8a50510152342093e0498cd96037082eaeb1b641dcb5b26965e117&w=1380",
    description: "Designed and developed a fully responsive website for a Food Much Restaurant,focusing on user engagement and accessibility. ",
  },
  {
    title: "weather Appliaction",
    imgUrl: "https://img.freepik.com/free-vector/realistic-weather-widget_1284-4092.jpg?t=st=1740675293~exp=1740678893~hmac=4d07c2a02be1e9022f50b8bc01b6fd268d6c9fa46aef5abac104228a709538b2&w=900",
    description: " Built an interactive weather application that provides real-time weather updates based on user location. ",
  },
];

const projects_ml = [
  {
    title: "ML Project 1",
    imgUrl: "https://img.freepik.com/premium-vector/programing-concept-illustration_353829-161.jpg?w=826",
    description: "This is a machine learning project.",
  },
  {
    title: "ML Project 2",
    imgUrl: "https://img.freepik.com/premium-vector/programing-concept-illustration_353829-161.jpg?w=826",
    description: "This is a machine learning project.",
  },
  {
    title: "ML Project 3",
    imgUrl: "https://img.freepik.com/premium-vector/programing-concept-illustration_353829-161.jpg?w=826",
    description: "This is a machine learning project.",
  },
];

const Projects = () => {
  const [selectedProjects, setSelectedProjects] = useState(projects);

  return (
    <div className="h-screen w-screen">
      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 m-3 justify-center">
        <button className="btn btn-primary" onClick={() => setSelectedProjects(projects)}>
           Web Projects
        </button>
        <button className="btn btn-secondary" onClick={() => setSelectedProjects(projects_ml)}>
          ML Projects
        </button>
        <button className="btn btn-secondary" onClick={() => setSelectedProjects(projects_ml)}>
          Java Projects
        </button>
      </div>
      <div className="container">
        {selectedProjects.map((project, index) => (
          <div key={index} className="card">
            <div>
            <img className='img-src  w-full object-fit' src={project.imgUrl} alt="Project" />
            </div>
            <div>
              <h1 className="text-2xl lg:ml-6  text-gray-900 dark:text-white font-semibold">{project.title}</h1>
              <p className="text-lg text-black lg:ml-6 dark:text-white">{project.description}</p>
              
              <button className="btn btn-primary mt-4 lg:ml-6">Click Me</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
