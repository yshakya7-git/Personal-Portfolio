import Image from "next/image";
import Titlebar from "../components/section-content/Titlebar";
import baseImg from "../../public/baseImg.png";
import chameeting from "../../public/chameeting.png";
import salon from "../../public/salonImg.png";
import fabulash from "../../public/fabulash.png";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { TechnicalProficiency } from "../about/page";
import dms from "../../public/dms.jpg";

const featuredProject = [
  {
    id: 1,
    image: baseImg,
    projectName: "Channakya Base ",
    desc: "A real-time dashboard for monitoring synthetic data flows through distributed architectures.",
    technicalProficiencyData: [
      {
        id: 100,
        title: "React",
      },
      { id: 101, title: "TypeScript" },
      { id: 102, title: "REST API" },
    ],
  },
  {
    id: 2,
    image: chameeting,
    projectName: "Channakya Meeting Schedule ",
    desc: "A real-time dashboard for monitoring synthetic data flows through distributed architectures.",
    technicalProficiencyData: [
      {
        id: 201,
        title: "React",
      },
      { id: 202, title: "TypeScript" },
      { id: 203, title: "GRAPHQL" },
    ],
  },
  {
    id: 3,
    image: salon,
    projectName: "Salon Web Application",
    desc: "A real-time dashboard for monitoring synthetic data flows through distributed architectures.",
    technicalProficiencyData: [
      {
        id: 301,
        title: "Next",
      },
      { id: 302, title: "TypeScript" },
      { id: 303, title: "TailwindCSS" },
    ],
  },
  {
    id: 4,
    image: dms,
    projectName: "Document Management System",
    desc: "A real-time dashboard for monitoring synthetic data flows through distributed architectures.",
    technicalProficiencyData: [
      {
        id: 401,
        title: "React",
      },
      { id: 402, title: "TypeScript" },
      { id: 403, title: "REST API" },
    ],
  },
  {
    id: 5,
    image: fabulash,
    projectName: "Fabulash - Lashes & Nails",
    desc: "A real-time dashboard for monitoring synthetic data flows through distributed architectures.",
    technicalProficiencyData: [
      {
        id: 501,
        title: "HTML",
      },
      { id: 502, title: "TailwindCss" },
    ],
  },
];
const Service = () => {
  return (
    <div className="py-20 ">
      <div className="flex flex-col max-w-5xl mx-auto space-y-6">
        <Titlebar title="Selected Works" content="Featured Projects" />

        <div className="grid grid-cols-3 gap-8">
          {featuredProject &&
            featuredProject.map((featured) => (
              <div
                key={featured.id}
                className="bg-natural rounded-lg border border-neutral"
              >
                <Image
                  src={featured.image}
                  alt={featured.projectName}
                  className="w-full h-56 rounded-t-lg"
                />

                <div className="p-4 flex-1 justify-start items-start space-y-3">
                  <div className="flex gap-2">
                    {featured.technicalProficiencyData?.map((tech) => (
                      <TechnicalProficiency
                        key={tech.id}
                        className="bg-neutral w-fit p-2"
                        title={tech.title}
                      />
                    ))}
                  </div>
                  <p className="text-md text-font dark:text-foreground font-semibold uppercase">
                    {featured.projectName}
                  </p>

                  <p className="text-sm text-[#6B7280] dark:text-foreground/90">
                    {featured.desc}
                  </p>

                  <Link
                    href=""
                    className="text-xs flex  items-center gap-2 text-primary"
                  >
                    View
                    <span>
                      <FaArrowRightLong />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
