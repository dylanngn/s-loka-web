import clsx from "clsx";

export function Pagination() {
  return (
    <div className="flex justify-center gap-5">
      <span className="inline-flex items-center justify-center w-9 h-9">
        {"<"}
      </span>
      {[1, 2, 3, 4, 5, "...", 9, 10].map((e) => (
        <span
          key={e}
          className={clsx(
            "rounded-full inline-flex items-center justify-center w-9 h-9",
            e === 1 && "border border-black"
          )}
        >
          {e}
        </span>
      ))}
      <span className="inline-flex items-center justify-center w-9 h-9">
        {">"}
      </span>
    </div>
  );
}
