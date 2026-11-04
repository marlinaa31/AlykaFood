import { Link } from "react-router-dom";

const ActionButton = ({ children, to, onClick }) => {
  const buttonClass = `
    inline-flex items-center gap-1.5 sm:gap-2
    bg-[#F4AE3D] hover:bg-[#E99B25]
    text-[#2B1B12] text-sm font-semibold
    px-4 py-2 sm:px-6 sm:py-3 
    rounded-full
    shadow-[0_10px_20px_-8px_rgba(180,110,20,0.6)]
    transition
    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2B1B12]
  `;

  const content = (
    <>
      {children}
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 12h14m-7-7l7 7-7 7"
        />
      </svg>
    </>
  );

  if (onClick) {
    return (
      <button className={buttonClass} onClick={onClick}>
        {content}
      </button>
    );
  }

  return (
    <Link to={to} className={buttonClass}>
      {content}
    </Link>
  );
};

export default ActionButton;