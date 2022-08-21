import React from "react";
import { axiosPublic, getBookPage } from "../../api/axiosPublic";
import Card from "../home/Card";
import Lood from "../home/lood";

export default function Search(props) {
  const [content, setContent] = React.useState([]);
  React.useEffect(() => {
    axiosPublic
      .get("/?search=dickens%20great")
      .then((res) => setContent(res.data.results))
      .then((err) => console.log(err));
  }, []);
  return (
    <>
      <h2 className="text-2xl font-bold mb-2 text-gray-800"> Your search</h2>
      <div className="container  my-12 mx-auto px-4 md:px-12">
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
      </div>
    </>
  );
}
