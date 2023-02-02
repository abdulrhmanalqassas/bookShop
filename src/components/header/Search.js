import React from "react";
import { axiosPublic, axiosNY } from "../../api/axiosPublic";
import Card from "../home/Card";
import Lood from "../home/load";
import { useLocation } from "react-router";
import Avatar from "../../assets/images/girl.png";

export default function Search() {
  const location = useLocation();
  const searchValue = location.state.searchValue
    ? location.state.searchValue
    : " ";
  const url = searchValue.split(" ").slice(0, 4).join("%20");
  const [content, setContent] = React.useState([]);
  const [Looding, setLooding] = React.useState(false);
  const [reviews, setReviews] = React.useState([]);
  React.useEffect(() => {
    axiosNY.get(``).then((res) => {
      setReviews(res.data.results);
      console.log(res.data.results);
    });
    setLooding(true);
    axiosPublic
      .get(`/?search=${url}`)
      .then((res) => {
        setLooding(false);
        setContent(res.data.results);
      })
      .then((err) => console.log(err));
  }, [url]);
  return Looding ? (
    <Lood></Lood>
  ) : (
    <>
      <img
        className="fixed top-0 -z-20 blur-sm opacity-50"
        alt="mkjkgv"
        src={Avatar}
      />
      <h2 className="text-2xl font-bold mb-2 text-gray-800"> Your search</h2>
      <div className="container  my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap items-center justify-around -mx-1 lg:-mx-4">
          {content.length === 0 && (
            <h2 className="text-2xl font-bold mb-2 bg-slate-800 text-gray-100">
              {" "}
              Your search - {searchValue} - did not match any documents.{" "}
            </h2>
          )}
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

      {/* {////////////////////////////////////////////////////////////////////} */}



      {/* {/////////////////////////////////////////////////////////////////////} */}
    </>
  );
}
