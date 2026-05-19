import Image from "next/image";
import me from "../../public/me.jpeg";
import { FaReact } from "react-icons/fa";
import { TbApi, TbBrandFramerMotion, TbBrandTypescript } from "react-icons/tb";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiCodesignal } from "react-icons/si";
import Titlebar from "../components/section-content/Titlebar";
import { TechnicalProficiency } from "../components/section-content/TechnicalProficiency";

const technicalProficiencyData = [
  {
    id: 1,
    icon: <FaReact size={20} />,
    title: "React / Next.js",
  },
  {
    id: 2,
    icon: <TbBrandTypescript size={20} />,
    title: "TypeScript",
  },
  {
    id: 3,
    icon: <RiTailwindCssLine size={20} />,
    title: "Tailwind CSS",
  },
  {
    id: 4,
    icon: <TbBrandFramerMotion size={20} />,
    title: "Framer Motion",
  },
  {
    id: 5,
    icon: <TbApi size={20} />,
    title: "GraphQL / REST",
  },
  {
    id: 6,
    icon: <SiCodesignal size={20} />,
    title: "Design Systems",
  },
];
const About = () => {
  return (
    <div className="bg-natural py-20">
      <div className="flex gap-10 justify-center items-center max-w-5xl mx-auto">
        <Image
          src={me}
          alt=""
          className="object-contain shadow-md rounded-md border opacity-95"
        />

        <div className="space-y-6">
          <Titlebar
            title="Yunika Shakya"
            content="Blending logic with aesthetics to build better products."
          />

          <p className="text-justify font-thin text-secondary-font">
            I’m Yunika Shakya, a web designer and developer from Kathmandu,
            Nepal. I build modern interfaces using React.js and Next.js, along
            with clean HTML templates focused on simplicity, performance, and
            great user experience. I enjoy turning ideas into functional and
            visually engaging digital products that are easy to use and
            maintain.<br></br> Over the past few years, I’ve worked on a variety
            of projects ranging from landing pages and admin dashboards to fully
            responsive web applications. My focus is always on writing clean,
            reusable code and creating designs that feel intuitive and
            accessible across all devices.<br></br> I believe good design is not just
            about how it looks, but how it works. That’s why I pay close
            attention to structure, usability, and performance in every project
            I build. I continuously explore new technologies and best practices
            to improve my workflow and deliver better digital experiences.
          </p>

          <div className="space-y-4">
            <h1 className="text-sm text-secondary font-medium">
              Technical Proficiency
            </h1>
            <div className="grid grid-cols-3 gap-6">
              {technicalProficiencyData.map((tech) => (
                <TechnicalProficiency
                  key={tech.id}
                  icon={tech.icon}
                  title={tech.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


