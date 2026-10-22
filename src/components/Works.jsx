// import { motion } from "framer-motion";
// import { FiArrowUpRight } from "react-icons/fi";
// import SectionWrapper from "../hoc/SectionWrapper";
// import { projects } from "../constants";
// import useTilt from "../utils/useTilt";

// const ProjectCard = ({ index, project }) => {
//   const tilt = useTilt(6);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 24 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       ref={tilt.ref}
//       onMouseMove={tilt.onMouseMove}
//       onMouseLeave={tilt.onMouseLeave}
//       className="panel-border group overflow-hidden rounded-2xl bg-[#0d0a29] will-change-transform"
//       style={{ transformStyle: "preserve-3d" }}
//     >
//       <div
//         className={`flex h-40 items-end justify-end bg-gradient-to-br p-4 ${project.gradient}`}
//       >
//         <a
//           href={project.source_code_link}
//           target="_blank"
//           rel="noreferrer"
//           aria-label={`Open ${project.name} source`}
//           className="flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-transform group-hover:scale-110"
//         >
//           <FiArrowUpRight size={16} />
//         </a>
//       </div>
//       <div className="p-6">
//         <h3 className="mb-2 text-lg font-semibold">{project.name}</h3>
//         <p className="mb-4 text-sm leading-relaxed text-[#8c89a6]">
//           {project.description}
//         </p>
//         <div className="flex flex-wrap gap-3 font-mono text-xs">
//           {project.tags.map((tag) => (
//             <span key={tag.name} className={tag.color}>
//               #{tag.name}
//             </span>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const Works = () => {
//   return (
//     <>
//       <div className="mb-4 flex items-baseline gap-3">
//         <span className="font-mono text-xs text-[#00e5c7]">04</span>
//         <h2 className="text-2xl font-semibold sm:text-3xl">Selected work</h2>
//       </div>
//       <p className="max-w-2xl text-[#8c89a6]">
//         A few projects that shipped, stayed up, and taught me something.
//       </p>

//       <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         {projects.map((project, i) => (
//           <ProjectCard key={project.name} index={i} project={project} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(Works, "work");

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import SectionWrapper from "../hoc/SectionWrapper";
import { projects } from "../constants";
import useTilt from "../utils/useTilt";

const ProjectCard = ({ index, project }) => {
  const tilt = useTilt(6);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className="panel-border group overflow-hidden rounded-2xl bg-[#0d0a29] will-change-transform"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Project Preview */}
      <div className="relative h-56 overflow-hidden bg-[#0d0a29]">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.name} preview`}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className={`flex h-full items-end justify-end bg-gradient-to-br p-4 ${project.gradient}`}
          />
        )}

        {/* GitHub / Project Link */}
        <a
          href={project.source_code_link}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${project.name} source`}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-transform group-hover:scale-110"
        >
          <FiArrowUpRight size={20} />
        </a>
      </div>

      {/* Project Information */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white">
          {project.name}
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-300">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-3">
          {project.tags.map((tag) => (
            <span
              key={tag.name}
              className={`text-sm font-medium ${tag.color}`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <section>
      <p className="text-sm font-semibold text-purple-300">
        04
      </p>

      <h2 className="mt-2 text-3xl font-bold text-white">
        Selected Work
      </h2>

      <p className="mt-4 max-w-2xl text-gray-400">
        A selection of projects where I applied AI, data analytics,
        machine learning, Python, and modern development technologies.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.name}
            index={i}
            project={project}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Works, "work");