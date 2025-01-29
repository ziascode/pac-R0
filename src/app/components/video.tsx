// 'use client';
// import { useState } from "react";

// export default function Modal({ videoSrc }) {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleOpen = () => setIsOpen(true);
//   const handleClose = () => setIsOpen(false);

//   return (
//     <div>
//       {/* Trigger Button */}
//       <button
//         onClick={handleOpen}
//         className="px-10 py-16 rounded-[100%] bg-[#ef7b00] text-white rounded-lg hover:bg-blue-700 transition"
//       >
//         Play Video
//       </button>

//       {/* Modal */}
//       {isOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white rounded-lg p-6 shadow-lg w-[90%] max-w-3xl relative">
            
//             {/* Close Button */}
//             <button
//               onClick={handleClose}
//               className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
//             >
//               ✖
//             </button>

//             {/* Video Embed */}
//             <div className="aspect-video w-full">
//               <iframe
//                 width="560"
//                 height="315"
//                 src={videoSrc+'?autoplay=1'}
//                 title="Video"
//                 allow="autoplay; encrypted-media"
//                 allowFullScreen
//                 className="w-full h-full rounded"
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
