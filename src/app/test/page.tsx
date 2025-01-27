

'use clinet';
import Image from "next/image";
import Link from "next/link";
import bg from "./assets/r03.webp"


export default function Home() {
  return (
   <div>

    <div className="h-[130vh] pb-10 flex-col space-y-[75vh] justify-center align-bottom gap-8 items-end bg-cover bg-no-repeat bg-[url('./assets/bk.webp')] ">
    
      <div className="flex justify-center align-middle">
        <div className="flex-col justify-center text-center">
          <p>GET READY FOR</p>
          <h1>Ramadan 2025</h1>
        </div>
      </div>

      {/* 3 CTA container */}
      <div className="flex justify-center align-bottom gap-3 items-end">
        {/* <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 opacity-95">
          <div className="flex justify-end">
            <svg class="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
            </svg>
            </div>
            <a href="#">
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Emergency Response</h5>
            </a>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
            <div className="">
            <Link href="#">
              <button className="py-3 px-5 bg-white rounded-full">
                Donate
              </button>
            </Link>
            
            </div>
        </div> */}


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

        
    </div>

    <div className="h-[100vh] bg-[#14263C] dark:bg-gray-800">

    </div>


   </div>
  );
}
