export function ServiceArrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="12.5" cy="12.5" r="12.5" fill="#F9B000" fill-opacity="0.5" />
      <circle cx="12.5" cy="12.5" r="10" fill="#F9B000" />
      <path
        d="M14.5842 11.2965L9.21424 16.6665L8.33203 15.7843L13.7014 10.4143H8.96904V9.1665H15.832V16.0295H14.5842V11.2965Z"
        fill="#06293B"
      />
    </svg>
  );
}
