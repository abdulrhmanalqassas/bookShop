import Group from "../../assets/images/Group.png"


export default function HomeCard() {
  return (
    <>
   
      <div className="content-center lg:px-10 p-5">
    
        <div className="flex flex-col  justify-around  bg-blue-100 p-6 rounded-lg shadow-lg lg:flex-row">
        <img className="  lg:w-1/3 lg:h-min  "  alt="book avatar" src={Group}></img>
        <div className="  content-center h-max lg:w-1/2" >
        <h2 className=" text-2xl font-bold mb-2 text-gray-800">
            Build Your library
          </h2>
          <p className= "m-4 text-gray-700">
            buy tow selected books and get one for free!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
            sequi magni modi inventore architecto doloribus velit eos sed
            exercitationem rerum.
          </p>
        </div>
          
        </div>
      </div>
    </>
  );
}
