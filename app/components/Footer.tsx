const Footer = () => {
  return (
    <div className="py-12 bg-natural">
      <div className="flex justify-between max-w-5xl mx-auto ">
      <p className="uppercase text-sm text-primary font-thin">Portfolio</p>

      <div className="flex gap-4 text-primary text-sm font-thin">
        <span>Github</span>
        <span>Linkend</span>
        <span>Gmail</span>
      </div>

      <span className="text-primary text-sm font-thin">© 2026 Developer Portfolio. Built with precision.</span>
    </div>
    </div>
  );
};

export default Footer;
