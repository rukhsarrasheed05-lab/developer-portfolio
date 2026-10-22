import SectionWrapper from "../hoc/SectionWrapper";
import { technologies } from "../constants";
import TechOrb from "./canvas/TechOrb";

const Tech = () => {
  return (
    <>
      <div className="mb-4 flex items-baseline gap-3">
        <span className="font-mono text-xs text-[#00e5c7]">02</span>
        <h2 className="text-2xl font-semibold sm:text-3xl">Stack</h2>
      </div>
      <p className="max-w-2xl text-[#8c89a6]">
        Tools I reach for most. Depth over breadth &mdash; I'd rather know
        five things well than twenty things shallowly.
      </p>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {technologies.map((tech) => (
          <div key={tech.name} className="h-28 w-full sm:h-32">
            <TechOrb name={tech.name} color={tech.color} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
