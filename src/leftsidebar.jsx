// /* eslint-disable react/no-unknown-property */
// import localisation from "../assets/localisation.svg";
// import filter from "../assets/filter.svg";
// import hand from "../assets/hand.svg";
// import calender from "../assets/calender.svg";
// import pc from "../assets/pc.svg";
// import { useState } from "react";
// const Leftsidebar = () => {
//   const [i, seti] = useState(0);
//   const navlist = [
//     {
//       id: 0,
//       img: filter,
//     },
//     {
//       id: 1,
//       img: localisation,
//     },
//     {
//       id: 2,
//       img: hand,
//     },
//     {
//       id: 3,
//       img: calender,
//     },
//     {
//       id: 4,
//       img: pc,
//     },
//   ];
//   return (
//     <section className=" px-2 bg-purple-100 rounded-lg mt-10 py-2 h-fit fixed flex flex-col">
//       {navlist.map((item) => {
//         return (
//           <>
//             <button
//               onClick={() => {
//                 seti(item.id);
//               }}
//               className={` ${
//                 item.id == i ? "bg-white" : " bg-transparent"
//               } p-3 w-[50px] h-[50px] mx-auto rounded-lg transition-all duration-700`}
//             >
//               <img src={item.img} alt="" className=" w-48" />
//             </button>
//           </>
//         );
//       })}
//     </section>
//   );
// };

// export default Leftsidebar;
