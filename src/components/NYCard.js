export const NYR = ({ img, url, title, supTitle }) => {
  return (
    <div className="py-7 px-5 ">
      <div
        className=" h-max-46 h-80  w-60  text-center  overflow-hidden bg-no-repeat bg-cover rounded-lg"
        style={{
          backgroundImage:
            `url("${img}")`,
        }}
      >
        <div
          className="absolute h-80  w-60  overflow-hidden bg-fixed rounded-lg"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <div className="flex justify-center items-center h-full">
            <div className="text-white">
              <h2 className="font-semibold text-2xl mb-4">{title}</h2>
              <h4 className="font-semibold text-l mb-6">{supTitle}</h4>
              <a
                className="inline-block px-7 py-3 mb-1 border-2 border-gray-200 text-gray-200 font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                href={url}
                target="_blank"
                rel='noreferrer'
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
               see ON NY
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

