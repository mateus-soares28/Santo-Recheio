type ArrowProps = {
  diagonal?: boolean;
  left?: boolean;
};

export function Arrow({ diagonal = false, left = false }: ArrowProps) {
  const path = diagonal
    ? "M5 19 19 5M8 5h11v11"
    : left
      ? "M20 12H4m6-6-6 6 6 6"
      : "M4 12h16m-6-6 6 6-6 6";

  return (
    <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={path} />
    </svg>
  );
}
