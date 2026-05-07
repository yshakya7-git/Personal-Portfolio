import { title } from "framer-motion/client";

interface TitlebarProps {
  title: string;
  content?: string | number;
  description?: string;
}
const Titlebar = ({ title, content, description }: TitlebarProps) => {
  return (
    <div className="space-y-2">
      <h1 className="text-md uppercase text-secondary font-thin">{title}</h1>
      <p className="font-semibold text-2xl text-font">{content}</p>
      <span className="font-medium text-base text-font">{description}</span>
    </div>
  );
};

export default Titlebar;
