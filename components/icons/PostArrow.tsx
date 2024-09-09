export function PostArrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle className="fill-[#D9D9D9] group-hover:fill-[#F9B000]" cx="13" cy="13" r="13" fillOpacity="0.5" />
      <circle className="fill-[#D9D9D9] group-hover:fill-[#F9B000]" cx="13.0016" cy="12.9996" r="10.4" />
      <path
        className="fill-[#06293B] group-hover:fill-[#06293B]"
        d="M15.1712 11.7482L9.58644 17.333L8.66895 16.4155L14.2531 10.8307H9.33144V9.53296H16.4689V16.6705H15.1712V11.7482Z"
      />
    </svg>
  );
}
