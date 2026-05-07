const HamburgerIcon = () => {
  return (
    <div className="w-8 h-8 rounded-full bg-[#F8F6F7] flex items-center justify-center">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <line
          x1="4"
          y1="7"
          x2="20"
          y2="7"
          stroke="#1A1A1A"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          x1="4"
          y1="12"
          x2="20"
          y2="12"
          stroke="#1A1A1A"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          x1="4"
          y1="17"
          x2="20"
          y2="17"
          stroke="#1A1A1A"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default HamburgerIcon;
