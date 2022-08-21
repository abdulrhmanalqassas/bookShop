import * as React from "react";
import { axiosPublic } from "../../api/axiosPublic";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const[ searchValue,setSearchValue ]= React.useState("")
  const search = (e) => {
    //http://gutendex.com/books/
    console.log(e)
    navigate("/search",{state:{searchValue:e}});
  };

  return (
    <nav className="relative flex flex-wrap flex-col  px-2 py-3 bg-white-500 mb-3">
      <div className="flex items-center w-100  flex-nowrap flex-row">
        <h1 className="text-2xl ml-6 font-bold">book</h1>
        <div className="pt-2 relative mx-auto  text-gray-600">
          <input
            className="border-2 w-96  border-gray-300 bg-slate-200	 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search for any book"
            onChange={(e)=>setSearchValue(e.target.value)}
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

        <div className="flex items-center mr-6">
          <button className="  w-10 h-10  rounded-full bg-purple-600">0</button>
          <h1>en</h1>
        </div>
      </div>
      <div className="flex justify-center items-center  ">
        <div
          onClick={() => navigate("/")}
          className="px-2  cursor-pointer py-7 hover:border-b-4 border-solid  border-sky-500 hover:bg-slate-100"
        >
          HOME
        </div>
        <div
          onClick={() => navigate("/book")}
          className="px-2 py-7 cursor-pointer hover:border-b-4 border-solid  border-sky-500 hover:bg-slate-100"
        >
          BESTSELLER
        </div>
        <div className="px-2 py-7 hover:border-b-4 border-solid  border-sky-500 hover:bg-slate-100">
          BLOG
        </div>
        <div className="px-2 py-7 hover:border-b-4 border-solid  border-sky-500 hover:bg-slate-100">
          BLOG
        </div>
      </div>
    </nav>
  );
}

export default Header;
