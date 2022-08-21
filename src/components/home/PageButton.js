const PageButton = ({ pg, setPage }) => {
  return <button className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium" onClick={() => setPage(pg)}>{pg}</button>;
};

export default PageButton;
