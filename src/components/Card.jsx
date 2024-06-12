// function Card({ card }) {
//   return (
//     <div>
//       <div className="bg-red-900 w-[50vw] h-[50%] hover:scale-105 ease-in-out duration-500">
//         <p>{card.title}</p>

//         {/* <img
//             src={card.url}
//             className=" inline-block p-2 cursor-pointer"
//           ></img> */}
//       </div>
//       <div className="">
//         <h1>{card.title}</h1>
//       </div>
//     </div>
//   );
// }
// export default Card;

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};
export default Card;
