'use client';
import './globals.css';
import Link from "next/link";
import SectionTwo from './components/sectiontwo';
import { Poppins } from 'next/font/google';
// import Modal from './components/video';


const poppins700 = Poppins({
  subsets: ["latin"],
  weight: "700"
})


// const poppins600 = Poppins({
//   subsets: ["latin"],
//   weight: "600"
// })

export default function Home() {
  return (
   <div>

        <div className="flex flex-col  h-[250vh] bg-[#ef7c00]  align-bottom bg-gradient-to-b from-orange-500 to-orange-300  "> {/*  */}
            <div>

              {/*  */}
              <div className={`flex flex-col ${poppins700.className}`}>
                  <div className="flex justify-center text-center font-[Outfit] px-[27vw] pt-24 pb-5">
                      <h1 className='font-sans font-bold text-5xl text-gray-900'>This Ramadan <br/> Support the Ummah Where Most Needed</h1>
                  </div>
                  <div className='flex justify-center'>
                      <Link href="https://pennyappeal.ca/">
                      <button className='mb-36 px-10 py-3 bg-white border-white-10 rounded-full'>Donate</button>
                      </Link>
                  </div>
                  
              </div>

              
                          
              {/* 3 CTA container */}
              <div className="flex justify-center  gap-5 px-10">
                  


                      <div className="shadow-lime-400 shadow-lg  max-w-sm p-6 pt-60 w-[100vw] border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 opacity-95 relative bg-[url('https://pennyappeal.ca/wp-content/uploads/2024/01/img2.jpg')] bg-cover bg-center">
                              
                              {/* Gradient Overlay inside the card */}
                              <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-gray-900 to-transparent opacity-90 rounded-b-xl z-0"></div>

                              {/* Card Content */}
                              <div className="relative z-10">
                                  <div className="flex justify-end">
                                  <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                      <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
                                  </svg>
                                  </div>
                                  <a href="#">
                                  <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Emergency Response</h5>
                                  </a>
                                  <div className="flex justify-between">
                                  <p className="mb-3 font-normal text-gray-500 dark:text-gray-300">Test</p>
                                  <div className="">
                                      <button className="py-3 px-5 bg-white rounded-full">
                                      Donate
                                      </button>
                                  </div>
                                  </div>
                              </div>
                          </div>


                          
                          <div className="max-w-sm p-6 pt-60 w-[100vw] border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 opacity-95 relative bg-[url('https://pennyappeal.ca/wp-content/uploads/2024/01/img1.jpg')] bg-cover bg-center">
                              
                              {/* Gradient Overlay inside the card */}
                              <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-gray-900 to-transparent opacity-90 rounded-b-xl z-0"></div>

                              {/* Card Content */}
                              <div className="relative z-10">
                              <div className="flex justify-end">
                                  <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
                                  </svg>
                              </div>
                              <a href="#">
                                  <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Emergency Response</h5>
                              </a>
                              <div className="flex justify-between">
                                  <p className="mb-3 font-normal text-gray-500 dark:text-gray-300">Test</p>
                                  <div className="">
                                  <button className="py-3 px-5 bg-white rounded-full">
                                      Donate
                                  </button>
                                  </div>
                              </div>
                              </div>
                          </div>

                              <div className="max-w-sm p-6 pt-60 w-[100vw] border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 opacity-95 relative bg-[url('https://pennyappeal.ca/wp-content/uploads/2024/03/hands-praynew.jpg')] bg-cover bg-center">
                              
                                  {/* Gradient Overlay inside the card */}
                                  <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-gray-900 to-transparent opacity-90 rounded-b-xl z-0"></div>

                                  {/* Card Content */}
                                  <div className="relative z-10">
                                  <div className="flex justify-end">
                                      <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                      <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
                                      </svg>
                                  </div>
                                  <a href="#">
                                      <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Emergency Response</h5>
                                  </a>
                                  <div className="flex justify-between">
                                      <p className="mb-3 font-normal text-gray-500 dark:text-gray-300">Test</p>
                                      <div className="">
                                      <button className="py-3 px-5 bg-white rounded-full">
                                          Donate
                                      </button>
                                      </div>
                                  </div>
                                  </div>
                              </div>

                              <div className="max-w-sm p-6 pt-60 w-[100vw] border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 opacity-95 relative bg-[url('https://pennyappeal.ca/wp-content/uploads/2024/01/img4.jpg')] bg-cover bg-center">
                              
                                  {/* Gradient Overlay inside the card */}
                                  <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-gray-900 to-transparent opacity-90 rounded-b-xl z-0"></div>

                                  {/* Card Content */}
                                  <div className="relative z-10">
                                  <div className="flex justify-end">
                                      <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                      <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
                                      </svg>
                                  </div>
                                  <a href="#">
                                      <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Emergency Response</h5>
                                  </a>
                                  <div className="flex justify-between">
                                      <p className="mb-3 font-normal text-gray-500 dark:text-gray-300">Test</p>
                                      <div className="">
                                      <button className="py-3 px-5 bg-white rounded-full">
                                          Donate
                                      </button>
                                      </div>
                                  </div>
                                  </div>
                              </div>

                              <div className="max-w-sm p-6 pt-60 w-[100vw] border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 opacity-95 relative bg-[url('https://pennyappeal.ca/wp-content/uploads/2024/04/RS33823_DSC05806-Edit-scaled-e1713265081474.jpg')] bg-cover bg-center">
                              
                                  {/* Gradient Overlay inside the card */}
                                  <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-gray-900 to-transparent opacity-90 rounded-b-xl z-0"></div>

                                  {/* Card Content */}
                                  <div className="relative z-10">
                                  <div className="flex justify-end">
                                      <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                      <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
                                      </svg>
                                  </div>
                                  <a href="#">
                                      <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Emergency Response</h5>
                                  </a>
                                  <div className="flex justify-between">
                                      <p className="mb-3 font-normal text-gray-500 dark:text-gray-300">Test</p>
                                      <div className="">
                                      <button className="py-3 px-5 bg-white rounded-full">
                                          Donate
                                      </button>
                                      </div>
                                  </div>
                                  </div>
                              </div>

              </div>
              
              {/* Video section */}
              {/* <div className='flex justify-center py-40 max-w-[80vw] gap-10'>
                
                 <div className="rounded-xl shadow-xl dark:bg-gray-800 dark:border-gray-700 py-28 px-24 bg-[url('https://pennyappeal.ca/wp-content/uploads/2024/04/RS33823_DSC05806-Edit-scaled-e1713265081474.jpg')]  bg-cover bg-center">
                  
                  <div className="relative flex items-center justify-center bg-gray-100 rounded-[100%]">
                    <Modal videoSrc="https://www.youtube.com/embed/NwhNFZdm8zc" />
                  </div>

                </div>

                <div className='mx-0 px-2 max-w-[30vw] mr-[-25vw]'>
                  <div>
                  <h2 className={`text-5xl ${poppins600.className}`}>What is Where Most Needed?</h2>
                  <p> Descripton Goes Here Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                </div>

               
              </div> */}
              

              </div>
              
        </div>

        <SectionTwo />

    

   </div>
  );
}


