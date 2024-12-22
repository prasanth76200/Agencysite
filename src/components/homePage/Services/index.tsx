// // import Image from '../../../../public/assets/down-left.png';
// // import { BsPersonWorkspace } from 'react-icons/bs';
// // import GlowCard from "../../helper/GlowCards";

// const Services = () => {
//   // Define the experiences data array
//   const experiences = [
//     {
//       id: 1,
//       duration: "Jan 2023 - Present",
//       title: "Full Stack Developer",
//       company: "Tech Innovators Ltd.",
//     },
   
//   ];

//   return (
//     <div >
//       <div className="mt-[80px] lg:mt-[100px] mx-auto my-auto">
//         <div className="flex justify-center">
//           <h1 className="text-black bg-white px-4 rounded-lg font-sans shadow-lg shadow-primary font-bold text-[50px] md:text-[56px] lg:text-[40px] xl:text-[50px] xl:whitespace-nowrap">
//             Our Game-Changing Solutions
//           </h1>
//           &nbsp;
//         </div>
//       </div>

//       <div className="">
//         {experiences.map((experience) => (
//           <GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
//             <div className="p-3 relative">
//               {/* <Image
//                 src="/blur-23.svg"
//                 alt="Hero"
//                 width={1080}
//                 height={200}
//                 className="absolute bottom-0 opacity-80"
//               /> */}
//               <div className="flex justify-center">
//                 <p className="text-xs sm:text-sm text-[#16f2b3]">
//                   {experience.duration}
//                 </p>
//               </div>
//               <div className="flex items-center gap-x-8 px-3 py-5">
//                 <div className="text-violet-500 transition-all duration-300 hover:scale-125">
//                   {/* <BsPersonWorkspace size={36} /> */}
//                 </div>
//                 <div>
//                   <p className="text-base sm:text-xl mb-2 font-medium uppercase">
//                     {experience.title}
//                   </p>
//                   <p className="text-sm sm:text-base">{experience.company}</p>
//                 </div>
//               </div>
//             </div>
//           </GlowCard>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;
