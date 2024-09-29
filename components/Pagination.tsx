import clsx from "clsx";

export function Pagination({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage
}: {
  totalPosts: number
  postsPerPage: number
  setCurrentPage: Function
  currentPage: number
}) {
  let pages = [];
  console.log(totalPosts, postsPerPage)
  
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i)
  }

  return (
    <div className="flex justify-center gap-5">
      <button onClick={() => setCurrentPage(--currentPage)} disabled={currentPage === 1} className="inline-flex items-center justify-center w-9 h-9">
        {"<"}
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={clsx(
            "rounded-full inline-flex items-center justify-center w-9 h-9",
            page === currentPage && "border border-black"
          )}
        >
          {page}
        </button>
      ))}
      <button onClick={() => setCurrentPage(++currentPage)} disabled={currentPage === pages.length} className="inline-flex items-center justify-center w-9 h-9">
        {">"}
      </button>
    </div>
  );
}
