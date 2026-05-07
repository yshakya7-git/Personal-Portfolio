import { GrCertificate } from "react-icons/gr";
import Titlebar from "../components/section-content/Titlebar";
import { BriefcaseIcon } from "@heroicons/react/20/solid";
import { BiCommentAdd } from "react-icons/bi";

const experiences = [
  {
    id: 1,
    title: "Winter Intake Code Camp (WICC)",
    company: "Infodevelopers Pvt. Ltd.",
    year: "2022",
  },
  {
    id: 2,
    title: "Data Research",
    company: "Outlines Research and Development",
    year: "2016",
  },
  {
    id: 3,
    title: "Web Design",
    company: "Yala Tech Pvt. Ltd.",
    year: "2016",
  },
];

const careerData = [
  {
    id: 1,
    date: "MAR 2024 - PRESENT",
    role: "Junior React Developer",
    company: "Channakya Software",
    location: "New Baneshwor",
    description:
      "Currently leading frontend initiatives for core software products, focusing on component modularity and state management optimization within the React ecosystem.",
    active: true,
  },
  {
    id: 2,
    date: "DEC 2023 - FEB 2024",
    role: "Trainee",
    company: "Channakya Software",
    location: "Sinamangal",
    description:
      "Intensive technical training period focused on enterprise software patterns, SQL databases, and internal development workflows.",
  },
  {
    id: 3,
    date: "NOV 2022 - FEB 2023",
    role: "Internship",
    company: "Infodevelopers Pvt. Ltd.",
    location: "Sanepa, Lalitpur",
    description:
      "Collaborated with the development team on production-level codebases, assisting in UI bug fixes and feature implementation using modern JS frameworks.",
  },
];
const Experience = () => {
  return (
    <div className="py-20 bg-natural ">
      <div className="flex flex-col max-w-5xl mx-auto space-y-10">
        <Titlebar
          title="Professional Experience"
          description="A journey of continuous learning and technical growth, specializing in React development and modern web architectures. Dedicated to building performant, user-centric software solutions."
        />

        <div className="flex justify-between gap-6">
          <section className="w-[70%] space-y-6">
            <div className="flex items-center gap-3">
              <BiCommentAdd size={25} />
              <h2 className="text-3xl font-medium">Career Path</h2>
            </div>

            <div className="relative border-l border-gray-300">
              {careerData.map((item) => (
                <div key={item.id} className="ml-8 mb-12 relative">
                  <span
                    className={`absolute -left-10 top-1 h-4 w-4 rounded-full ${
                      item.active ? "bg-primary" : "bg-gray-400"
                    }`}
                  />

                  <p className="text-sm font-semibold text-primary tracking-widest">
                    {item.date}
                  </p>

                  <h3 className="text-2xl font-semibold mt-1 text-secondary">
                    {item.role}
                  </h3>

                  <p className="text-gray-600 mt-1 text-sm">
                    {item.company} •{" "}
                    <span className="italic">{item.location}</span>
                  </p>

                  <div className="mt-4 bg-natural border border-neutral p-5 rounded-xl text-gray-700 shadow-md">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="w-[30%] rounded-md bg-neutral p-6 h-fit border border-neutral shadow-lg">
            <div className="flex  items-center gap-2">
              <GrCertificate size={18} />
              <h1 className="font-medium text-xl">Certifications</h1>
            </div>

            <div>
              {experiences.map((item) => (
                <div
                  key={item.id}
                  className="py-6 border-b last:border-none space-y-1"
                >
                  <div className="flex justify-between items-start gap-6">
                    <h3 className="text-sm font-medium ">{item.title}</h3>

                    <span className="text-sm font-semibold">{item.year}</span>
                  </div>

                  <p className="text-gray-600 text-sm">{item.company}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Experience;
