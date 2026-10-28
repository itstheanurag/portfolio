export default function SectionDivider() {
  return (
    <div className="section-divider" aria-hidden="true">
      <svg
        className="size-full text-line-strong"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="section-divider-dashes"
            width="14"
            height="14"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="14"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeDasharray="3 4"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#section-divider-dashes)" />
      </svg>
    </div>
  );
}
