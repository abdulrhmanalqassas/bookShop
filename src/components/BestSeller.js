// /books?topic=children

import React from "react";
import { axiosPublic } from "./../api/axiosPublic";
import Card from "./home/Card";
import Lood from "./home/load";

import Avatar from "../assets/images/avatar.png";
export default function BestSeller() {
  const url = "children";
  const [content, setContent] = React.useState([]);
  const [Looding, setLooding] = React.useState(false);
  React.useEffect(() => {
    setLooding(true);
    axiosPublic
      .get(`/?topic=${url}`)
      .then((res) => {
        setLooding(false);
        setContent(res.data.results);
      })
      .then((err) => console.log(err));
  }, [url]);
  return (
    <>
      {" "}
      <img
        className="fixed top-0 -z-20 blur-sm opacity-50"
        alt="mkjkgv"
        src={Avatar}
      />{" "}
      {Looding ? (
        <Lood></Lood>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-2 text-gray-800">
            {" "}
            Your search
          </h2>
          <div className="container  my-12 mx-auto px-4 md:px-12">
            <div className="flex flex-wrap items-center justify-around -mx-1 lg:-mx-4">
              {content.map((elem, index) => {
                return (
                  <Card
                    book={elem}
                    id={elem.id}
                    authors={elem.authors[0] ? elem.authors[0].name : ""}
                    title={elem.title}
                  />
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
}
