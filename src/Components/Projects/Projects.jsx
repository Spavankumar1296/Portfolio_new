import React, { useState } from "react";
import "./Projects.css";

const projects = [
  {
    title: "Gemini Clone",
    imgUrl: "https://camo.githubusercontent.com/5e533895d4d4e2e2466e1836cb48e7d800705ac7f6a898695d44660bbddb3e1f/68747470733a2f2f6c68332e676f6f676c6575736572636f6e74656e742e636f6d2f6544723670594b7331745430694b306e743370506876566c5032576e39366662477162576742414152525a376973656a303337675f74576f626a56387a516b784f73577a4a75454838702d666b73637a58554f657178475a5a496f5f485543646b6e38712d61346675774154443751395872733d77323435362d6c3130302d73672d726a2d633078666666666666",
    description:" The application is developed using React and the Gemini API, featuring a responsive,user-friendly interface. ",
    Repository:"https://github.com/Spavankumar1296/Gemini_Clone",
    live:"https://gemini-clone-fuh30q78a-s-pavan-kumars-projects-c9c4d3e0.vercel.app/",
  },
  {
    title: "Food Much Restaurant",
    imgUrl: "https://img.freepik.com/free-photo/view-table-with-articles-food-family_1398-5025.jpg?t=st=1740674941~exp=1740678541~hmac=413e32d29e8a50510152342093e0498cd96037082eaeb1b641dcb5b26965e117&w=1380",
    description: "Designed and developed a fully responsive website for a Food Much Restaurant,focusing on user engagement and accessibility. ",
    Repository:"https://github.com/Spavankumar1296/Static-Restaurant-website-using-HTML-CSS",
    live:"https://spavankumar1296.github.io/Static-Restaurant-website-using-HTML-CSS/",
  },
  {
    title: "Weather Appliaction",
    imgUrl: "https://img.freepik.com/free-vector/realistic-weather-widget_1284-4092.jpg?t=st=1740675293~exp=1740678893~hmac=4d07c2a02be1e9022f50b8bc01b6fd268d6c9fa46aef5abac104228a709538b2&w=900",
    description: " Built an interactive weather application that provides real-time weather updates based on user location. ",
    Repository:"https://github.com/Spavankumar1296/Static-Restaurant-website-using-HTML-CSS",
    live:"https://spavankumar1296.github.io/Weather-application/",
  },
];

const projects_ml = [
  {
    title: "Covid 19 Prediction ",
    imgUrl: "https://img.freepik.com/premium-vector/doctor-persons-with-protective-suit-spraying-covid-19-disinfection-virus-concept_24877-64161.jpg?w=996",
    description: "This project is to develop a predictive model that can forecast COVID-19 cases, deaths, or recovery rates based on historical and real-time data .",
    Repository:"https://github.com/Spavankumar1296/COVID-19-ML-MODEL",
    live:"https://covid-19-ml-model-qki8qnuqe99yu558j8ny4u.streamlit.app/",
  },
];

const projects_java=[
  {
    title:"Bharat Gas Agency",
    imgUrl:"https://img.freepik.com/free-photo/environmental-pollution-factory-exterior_23-2149057714.jpg?t=st=1742742420~exp=1742746020~hmac=e88a41284df091445e85d5076b331197afd09d26e077289520e565669c5bfa4b&w=1380",
    description:"The app offers a user-friendly interface for customers, agents, and gas agencies. Comprehensive documentation aids installation, usage, and troubleshooting.",
    Repository:"",
    live:"",
  },
]

const Projects = () => {
  const [selectedProjects, setSelectedProjects] = useState(projects);

  return (
    <div className="h-screen w-screen">
      <div className="flex flex-col md:flex-row lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 m-3 justify-center">
        <button className="buttons" onClick={() => setSelectedProjects(projects)}>
           WEB PROJECTS
        </button>
        <button className="buttons" onClick={() => setSelectedProjects(projects_ml)}>
          ML PROJECTS
        </button>
        <button className="buttons" onClick={() => setSelectedProjects(projects_java)}>
          JAVA PROJECTS
        </button>
      </div>
      <div className="container">
        {selectedProjects.map((project, index) => (
          <div key={index} className="card">
            <div>
            <img className='img-src  w-full object-fit' src={project.imgUrl} alt="Project" />
            </div>
            <div>
              <h1 className="md:text-2xl sm:text-xl md:ml-6 mt-3 mb-1 text-gray-900 dark:text-white font-semibold">{project.title}</h1>
              <p className="md:text-lg sm:text-sm text-gray-600 md:ml-6 mb-1 dark:text-white">{project.description}</p>
              <div className= "md:ml-6 md:mt-3">
                <a href={project.Repository}><button className="btn-pro mt-4 ">Code</button></a>
                <a href={project.live}><button className="btn-pro mt-4 ">View</button></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
