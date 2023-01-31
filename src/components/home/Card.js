import * as React from "react";
import { useNavigate } from "react-router";



function Card(props) {

    const navigate = useNavigate()
  return (
    <div onClick={() => navigate("/book",{state:{id:props.id,name:props.name}}) }className="max-w-xs cursor-pointer ma my-1 rounded overflow-hidden shadow-lg bg-sky-300/40 ">
      <div className="  ">
        <div className="bg-gradient-to-r from-cyan-300 to-fuchsia-300 flex items-center flex-col justify-around  font-bold text-5xl text-white h-52  mb-2">
          {props.title.split(" ").map((elem, index) => {
            if (index < 3) {
              return (
                <p className={index === 1 && "text-gray-700"}>{`${elem} `}</p>
              );
            }
          })}
        </div>
        <div className="h-max-46 h-46  text-left ">
          <p className="font-bold text-base">
            book title :{" "}
            {props.title.length < 50
              ? props.title
              : props.title.split(" ").slice(0, 4).join(" ") + "..."}
          </p>
          <p className="text-gray-700 text-base">{props.authors}</p>
          <p className="text-gray-700  w-96 text-base text-left ">
            book title : {props.title.length}
          </p>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2"></div>
    </div>
  );
}

export default Card;
