import { FiServer, FiLayers, FiTerminal, FiLayout } from "react-icons/fi";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { services } from "../constants";
import useTilt from "../utils/useTilt";

const icons = {
  server: FiServer,
  layers: FiLayers,
  terminal: FiTerminal,
  layout: FiLayout,
};

const ServiceCard = ({ index, title, description, icon }) => {
  const tilt = useTilt(8);
  const Icon = icons[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className="panel-border rounded-2xl bg-[#0d0a29] p-7 transition-[background,border-color] duration-300 will-change-transform hover:border-[#8452ff]/50 hover:bg-[#131035]"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#8452ff]/15 text-[#a688ff]">
        <Icon size={20} />
      </div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-sm leading-relaxed text-[#8c89a6]">{description}</p>
    </motion.div>
  );
};

const About = () => {
  return (
    <>
      <div className="mb-4 flex items-baseline gap-3">
        <span className="font-mono text-xs text-[#00e5c7]">01</span>
        <h2 className="text-2xl font-semibold sm:text-3xl">About</h2>
      </div>
      <p className="max-w-2xl text-[#8c89a6]">
        ### About Me

I’m a **BS Computer Science student and aspiring AI & Data Professional** with a strong foundation in **Web Development, Python Programming, Data Analysis, Machine Learning, and Deep Learning**.
I enjoy turning ideas and data into practical, technology-driven solutions. My technical skill set includes **Python, SQL, Power BI, Data Analytics, Machine Learning, Deep Learning, and Networking**, along with experience in building responsive and interactive web applications.
I’m particularly interested in **Artificial Intelligence, Data Science, and intelligent software solutions**, where I can combine programming, analytical thinking, and problem-solving to create meaningful projects.
As a continuous learner, I’m always exploring new technologies, improving my technical skills, and working on projects that strengthen my understanding of real-world applications. My goal is to grow as a **Software Developer, Data Analyst, and AI/ML Professional** while building innovative solutions that create real impact.

      </p>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => (
          <ServiceCard key={service.title} index={i} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
