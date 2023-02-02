import { useLocation } from "react-router-dom";
import React from "react";
import Avatar from "../assets/images/avatar.png";
export default function Book() {
  const location = useLocation();
  console.log("booook>>>", location.state.id);
  let book = location.state.book;
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <img
        className="fixed top-0 -z-20 blur-sm opacity-50"
        alt="mkjkgv"
        src={Avatar}
      />
      <div className="p-16">
        <div className="p-8 bg-white shadow mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
              <div>
                <p className="font-bold text-gray-700 text-xl">
                  {book.download_count}
                </p>
                <p className="text-gray-400">Download Count</p>
              </div>
              <div>
                <p className="font-bold text-gray-700 text-xl">{book.id}</p>
                <p className="text-gray-400">book Id</p>
              </div>
              <div>
                <p className="font-bold text-gray-700 text-xl">89</p>
                <p className="text-gray-400">Comments</p>
              </div>
            </div>
            <div className="relative">
              <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                <img
                  className="w-56 h-56 rounded-xl  shadow-2xlopacity-90"
                  alt="{book.subjects[0]},"
                  src={book.formats["image/jpeg"]}
                />
                {console.log(
                  ">>>>><><><><><><><>>>>>>>>",
                  book.formats["image/jpeg"]
                )}
                {
                !book.formats["image/jpeg"] && <svg
                    fill="#000000"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 66.824 66.824"
                    xmlSpace="preserve"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g>
                        {" "}
                        <path d="M65.658,12.408H33.755l-0.002-0.002L5.723,3.887C5.366,3.778,4.985,3.843,4.688,4.065c-0.296,0.219-0.472,0.57-0.472,0.936 v7.407H1.168C0.523,12.408,0,12.934,0,13.576v41.286c0,0.644,0.523,1.168,1.168,1.168h24.216v4.624h-4.429v1.168v1.167h24.912 v-1.167v-1.168H41.44V56.03h24.216c0.641,0,1.168-0.524,1.168-1.168V13.576C66.826,12.93,66.302,12.408,65.658,12.408z M6.55,12.408V6.578l19.179,5.831l3.843,1.168l2.672,0.813v0.355v38.489L6.55,45.423V14.744v-1.168V12.408z M64.49,53.696H34.58 V14.744h4.59v4.333l2.272-1.438l2.276,1.438v-4.333h20.778v38.95H64.49V53.696z M28.285,21.885l-9.105-2.77v-1.538l9.105,2.774 V21.885z M28.285,27.749l-9.105-2.771v-1.542l9.105,2.772V27.749z M28.285,33.66l-18.208-5.539v-1.534l18.208,5.536V33.66z M28.285,39.518l-18.208-5.535v-1.54l18.208,5.535V39.518z M28.285,45.435l-18.208-5.538v-1.538l18.208,5.534V45.435z M11.634,23.135l0.475-1.546l2.743,0.832l0.488,1.838l0.796,0.243l0.801,0.243l-2.555-9.089l-0.876-0.264l-0.875-0.264 l-2.556,7.533l0.784,0.241L11.634,23.135z M13.488,17.242l0.957,3.627l-1.915-0.582L13.488,17.242z M39.606,21.962h21.17v1.534 h-21.17V21.962z M39.606,27.815h21.17v1.542h-21.17V27.815z M39.837,33.731h20.944v1.536H39.837V33.731z M39.837,39.591h20.944 v1.542H39.837V39.591z M39.837,45.503h20.944v1.54H39.837V45.503z"></path>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                  /* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  />
                </svg> */
                }
              </div>
            </div>

            <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
              <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                Download
              </button>
              <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                MORE
              </button>
            </div>
          </div>

          <div className="mt-20 text-center border-b pb-12">
            <h1 className="text-4xl font-medium text-gray-700">
              {book.title}
              <span className="font-light text-gray-500">
                {" "}
                {book.languages[0]}
              </span>
            </h1>
            <p className="font-light text-gray-600 mt-3">
              {book.subjects[0]}, {book.subjects[0]}
            </p>

            <p className="mt-8 text-gray-500">
              authors - {book.authors[0].name}
            </p>
            <p className="mt-2 text-gray-500">
              bookshelves {book.bookshelves[0]},
            </p>
          </div>

          <div className="mt-12 flex flex-col justify-center">
            <p className="text-gray-600 text-center font-light lg:px-16">
              {""}
            </p>
            <button className="text-indigo-500 py-2 px-4  font-medium mt-4">
              Show more
            </button>
          </div>
        </div>
      </div>
     
    </>
  );
}
