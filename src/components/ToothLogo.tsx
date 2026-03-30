type ToothLogoProps = {
  className?: string;
  color?: string;
};

export default function ToothLogo({ className = "w-8 h-8", color = "currentColor" }: ToothLogoProps) {
  return (
    <svg
      viewBox="0 0 40 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Tooth body */}
      <path
        d="M20 4C14 4 8 8 6 14C4.5 18 5 22 6 25C7 28 8 30 8.5 33.5C9 37 9.5 44 12 44C14 44 14.5 38 16 35C17 33 18.5 31.5 20 31.5C21.5 31.5 23 33 24 35C25.5 38 26 44 28 44C30.5 44 31 37 31.5 33.5C32 30 33 28 34 25C35 22 35.5 18 34 14C32 8 26 4 20 4Z"
        fill={color}
        opacity="0.15"
      />
      <path
        d="M20 4C14 4 8 8 6 14C4.5 18 5 22 6 25C7 28 8 30 8.5 33.5C9 37 9.5 44 12 44C14 44 14.5 38 16 35C17 33 18.5 31.5 20 31.5C21.5 31.5 23 33 24 35C25.5 38 26 44 28 44C30.5 44 31 37 31.5 33.5C32 30 33 28 34 25C35 22 35.5 18 34 14C32 8 26 4 20 4Z"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Crown highlight line */}
      <path
        d="M13 13C13 13 16 10 20 10C24 10 27 13 27 13"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}
