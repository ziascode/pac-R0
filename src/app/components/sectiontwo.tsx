'use clinet';
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins100 = Poppins({
  subsets: ["latin"],
  weight: "200"
});

const poppins600 = Poppins({
  subsets: ["latin"],
  weight: "600"
})



const SectionTwo = () => {
  return(
    <div className="h-[130vh] bg-[#cce5f4] px-32 bg-[url('./assets/r13new.jpg')] bg-cover">
      <section className="max-w-[80vw] flex flex-col gap-20 ">

        {/* Text*/}
        <div className="max-w-2xl pt-32 flex flex-col gap-5 text-white"> 
          <h2 className={`text-7xl ${poppins600.className}`}>Make powerful impacts</h2>
          {/* <p className={`text-xl ${poppins100.className}`}>By giving to the Where Most Needed Fund, you ensure that your donation goes to those that need it most. Your dollar will be distrubted between all of our programs</p> */}
        </div>
        
        {/* impact box */}
        <div className="relative  max-w-full p-6 pt-64 w-[50vw] border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 opacity-95 relative bg-[url('https://pennyappeal.ca/wp-content/uploads/2024/01/img2.jpg')] bg-cover bg-center">
        
          {/* numbers */}
          <div className="flex justify-center text-5xl space-x-24 flex-wrap">
            <div>
              <h1>500 Meals</h1>
            </div>
            <div>
              <h1>500 Meals</h1>
            </div>
            <div>
              <h1>500 Meals</h1>
            </div>
            <div>
              <h1>500Meals</h1>
            </div>
          </div>
          <div className='flex justify-center'>
                    <Link href="https://pennyappeal.ca/">
                    <button className='mb-36 px-10 py-3 bg-white border-white-10 rounded-full'>Donate</button>
                    </Link>
                </div></div>

      </section>
    </div>
  )
}

export default SectionTwo;