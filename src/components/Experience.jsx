import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FiBriefcase } from "react-icons/fi";
import SectionWrapper from "../hoc/SectionWrapper";
import { experiences } from "../constants";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#0d0a29",
      border: "1px solid #211c48",
      boxShadow: "none",
      borderRadius: "16px",
    }}
    contentArrowStyle={{ borderRight: "7px solid #0d0a29" }}
    date={experience.date}
    dateClassName="!text-[#8c89a6] !font-mono !text-xs"
    iconStyle={{ background: "#8452ff" }}
    icon={<FiBriefcase className="m-auto text-white" />}
  >
    <h3 className="text-lg font-semibold text-[#f1efff]">
      {experience.title}
    </h3>
    <p className="mb-3 text-sm font-medium text-[#a688ff]">
      {experience.company_name}
    </p>
    <ul className="ml-4 list-disc space-y-1.5">
      {experience.points.map((point, i) => (
        <li key={i} className="pl-1 text-sm text-[#8c89a6]">
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <div className="mb-4 flex items-baseline gap-3">
        <span className="font-mono text-xs text-[#00e5c7]">03</span>
        <h2 className="text-2xl font-semibold sm:text-3xl">Experience</h2>
      </div>
      <p className="max-w-2xl text-[#8c89a6]">
        Six years, three companies, one recurring job: making systems less
        surprising.
      </p>

      <div className="mt-8">
        <VerticalTimeline lineColor="#211c48">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} experience={exp} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
