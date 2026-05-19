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
