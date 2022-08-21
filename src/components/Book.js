import { useLocation } from "react-router-dom";

export default function Book() {
  const location = useLocation();
  console.log("booook>>>", location.state.id);
  return (
    <>
      <h1>book</h1>
      <h1>bookid : {location.state.id}</h1>
    </>
  );
}
