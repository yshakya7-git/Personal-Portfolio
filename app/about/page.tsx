import Image from "next/image";
import me from "../../public/me.jpeg";
import { FaReact } from "react-icons/fa";
import { TbApi, TbBrandFramerMotion, TbBrandTypescript } from "react-icons/tb";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiCodesignal } from "react-icons/si";
import Titlebar from "../components/section-content/Titlebar";

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
            I'm Yunika Shakya. I am a webdesigner and developer based in
            Kathmandu, Nepal. I create lot of creative html templates and
            wordpress themes. You can easily use those themes a single click for
            a better user experience and an easier setup overall, simply add
            your own content and images. No coding required, that’s a promise! I
            believe that code is a tool for storytelling. For the past 5 years,
            I've worked at the intersection of design and engineering, helping
            startups turn complex ideas into intuitive digital interfaces. My
            approach is rooted in structural clarity and a deep respect for user
            experience.
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

export const TechnicalProficiency = ({
  icon,
  title,
  className,
}: {
  icon?: React.ReactNode;
  title: string;
  className?: string;
}) => {
  return (
    <div
      className={`${className ? className : "bg-gray-200/90 border border-neutral  p-3 "} flex items-center gap-2 rounded-xs`}
      key={title}
    >
      {icon}
      <p className="text-sm text-secondary font-thin">{title}</p>
    </div>
  );
};
