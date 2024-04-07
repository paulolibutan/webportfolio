import ProjectsCard from "./ProjectsCard";
import { works } from "../data";

const Projects = () => {
  return (
    <div
      id="work"
      className="scroll-mt-20 max-w-xl container flex flex-col px-5 py-3 md:py-5 md:px-0 justify-center items-center md:items-start"
    >
      <h1 className="px-10 text-2xl md:text-3xl font-bold underline underline-offset-8 decoration-indigo-500 decoration-4">
        My Works
      </h1>
      <div>
        {works.map((item, index) => {
          return (
            <ProjectsCard
              key={index}
              name={item.name}
              description={item.description}
              codeLink={item.codeLink}
              demoLink={item.demoLink}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
