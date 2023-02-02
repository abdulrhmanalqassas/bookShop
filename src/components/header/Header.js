import * as React from "react";
// 
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = React.useState("");
  const search = (e) => {
    //http://gutendex.com/books/
    console.log(e);
    navigate("/search", { state: { searchValue: e } });
  };

  return (
    <nav className="sticky top-0 bg-slate-100 z-50  flex flex-wrap flex-col  px-1 py-0.5 bg-white-500 mb-3 shadow-lg">
      <div className="flex sticky  items-center w-50  flex-nowrap flex-row">
        <h1 className="text-2xl md:ml-6 font-bold">book</h1>
        <div className="pt-2 relative mx-auto  text-gray-600">
          <input
            className="border-2  md:w-96  border-gray-300 bg-slate-200	 h-10 px-5  rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search for any book"
            onKeyDown={(e)=>e.key==='Enter' && search(searchValue) }
            onChange={(e) => setSearchValue(e.target.value)}
          ></input>

          <button
            type="submit"
            onClick={() => search(searchValue)}
            className="absolute right-0 top-0 mt-5 mr-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

        
      </div>
      <div className="flex justify-center items-center  ">
        <div
          onClick={() => navigate("/")}
          className="px-2  cursor-pointer py-6 hover:border-b-4 border-solid  border-sky-500 hover:bg-slate-100"
        >
          HOME
        </div>
        <div
          onClick={() => navigate("/bestseller")}
          className="px-2 py-6 cursor-pointer hover:border-b-4 border-solid  border-sky-500 hover:bg-slate-100"
        >
          BESTSELLER
        </div>
        <div 
        onClick={() => navigate("/ny")}
        className="px-2 py-6  cursor-pointer hover:border-b-4 border-solid  border-sky-500 hover:bg-slate-100">
        NEW York Review
        </div>
        <div className="px-2 py-6 cursor-pointer hover:border-b-4 border-solid  border-sky-500 hover:bg-slate-100">
          BLOG
        </div>
      </div>
    </nav>
  );
}

export default Header;
