import { useQuery } from "react-query";
import React from "react";
import { getBookPage } from "../../api/axiosPublic";
import Card from "./Card";
import Load from "./load";
import PageButton from "./PageButton";
import HomeCard from "./HomeCard";

export default function CardCont() {
  const [page, setPage] = React.useState(1);

  const { isLoading, isError, error, data, isFetching, isPreviousData } =
    useQuery([page], () => getBookPage(page), {
      keepPreviousData: true,
    });

  if (isLoading)
    return (
      <div className="container items-center pl- mx-auto">
        <Load />
      </div>
    );

  if (isError) return <p>Error: {error.message}</p>;

  const content = data.data.results;
  const pgs = data.data.count / 32;
  console.log("pgs", data.data.count, pgs);
  const pagesArray = Array(parseInt(pgs))
    .fill()
    .map((_, index) => index + 1);
  const lastPage = () => setPage(pgs);
  const firstPage = () => setPage(1);
  const nextPage = () => setPage((prev) => prev + 1);
  const prevPage = () => setPage((prev) => prev - 1);
  const nav = (
    <nav
      className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
      aria-label="Pagination"
    >
      <button
        className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        onClick={prevPage}
        disabled={isPreviousData || page === 1}
      >
        &lt;&lt;
      </button>

      {pagesArray.slice(page, page + 4).map((pg) => (
        <PageButton key={pg} pg={pg} setPage={setPage} />
      ))}
      <button
        className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        onClick={nextPage}
        disabled={isPreviousData || page === pgs}
      >
        &gt;&gt;
      </button>
    </nav>
  );

  return (
    <>
      <HomeCard />

      <div className="container  my-12 mx-auto px-4 md:px-12">
        {nav}
        <div className="flex flex-wrap items-center justify-around -mx-1 lg:-mx-4">
          {content.map((elem, index) => {
            return (
              <Card
                id={elem.id}
                authors={elem.authors[0] ? elem.authors[0].name : ""}
                title={elem.title}
              />
            );
          })}
        </div>

        {nav}
      </div>
    </>
  );
}
