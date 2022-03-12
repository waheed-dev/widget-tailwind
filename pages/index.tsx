import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
      <div>
          <Head>
              <title>
                  Tailwind css widget
              </title>
          </Head>
     <div className={'mt-10 px-3 py-4 lg:py-12 lg:px-3 lg:justify-center lg:items-center mx-auto border border-gray-300 rounded-2xl shadow-xl w-[340px] lg:w-[600px]'}>
         <div className="w-full px-2 py-1.5 lg:py-3.5 lg:px-3 justify-center text-center bg-gray-300 shadow-inner shadow-slate-500 rounded-full text-sm"
         >
             <div
                 className="flex flex-row transform shadow-slate-700 space-x-1 lg:space-x-2 font-semibold lg:font-bold text-xs"
             >
                 <div className="-skew-x-12">
                     <p
                         className="py-5 px-1 w-[50px] text-[10px] lg:w-[110px] lg:py-10 lg:text-[13px] text-white bg-[#414141] rounded-tl-[50px] rounded-bl-[80px] hover:shadow-inner hover:shadow-gray-600 justify-center text-center"
                     >
                         Claim Filed
                     </p>
                 </div>
                 <div className="-skew-x-6">
                     <p
                         className="py-3 px-1 w-[60px] text-[10px] lg:w-[100px] lg:py-8 lg:text-[13px] text-white bg-[#414141] transform -skew-x-6 hover:shadow-inner hover:shadow-gray-600"
                     >
                         Claim under review
                     </p>
                 </div>
                 <div className="-skew-x-12">
                     <p
                         className="py-5 w-[66px] text-[10px] lg:w-[100px] lg:py-8 lg:text-[13px] text-white bg-[#414141] hover:shadow-inner hover:shadow-gray-600 flex-shrink"
                     >
                         Adjudication in progress
                     </p>
                 </div>
                 <div className="-skew-x-12">
                     <p
                         className="py-5 px-1 w-[58px] text-[10px] lg:w-[100px] lg:py-8 lg:text-[13px] text-white bg-[#fb4e0a] shadow-inner shadow-gray-600"
                     >
                         Claim approved
                     </p>
                 </div>
                 <div className="-skew-x-12">
                     <p
                         className="py-5 px-1 w-[50px] text-[10px] lg:w-[110px] lg:py-10 lg:text-[13px] text-white  bg-[#808080] rounded-tr-[70px] rounded-br-[45px]"
                     >
                         Claim paid
                     </p>
                 </div>
             </div>
         </div>
          <form
              className=" flex items-center justify-center gap-6 lg:gap-10 mt-2 lg:mt-4 font-semibold  lg:font-bold"
          >
              <div className="flex flex-row gap-1 lg:gap-3 items-center">
                  <input type="radio" className="accent-[#fb4e0a]" id="Absence" name="refund" value="Absence" />
                      <label htmlFor="Absence" className="text-xs lg:text-base">Absence</label>
              </div>
              <div className="flex flex-row gap-1 lg:gap-3 items-center">
                  <input type="radio" className="accent-[#fb4e0a]" id="std" name="refund" value="std" />
                      <label htmlFor="std" className="text-xs lg:text-base">STD</label>
              </div>
              <div className="flex flex-row gap-1 lg:gap-3 items-center">
                  <input type="radio" className="accent-[#fb4e0a]" id="ltd" name="refund" value="ltd" />
                      <label htmlFor="ltd" className="text-xs lg:text-base">LTD</label>
              </div>
              <div className="flex flex-row gap-1 lg:gap-3 items-center">
                  <input type="radio" className="accent-[#fb4e0a]" id="cl" name="refund" value="cl" />
                      <label htmlFor="cl" className="text-xs lg:text-base">Cl</label>
              </div>
              <div className="flex flex-row gap-1 lg:gap-3 items-center">
                  <input type="radio" className="accent-[#fb4e0a]" id="hi" name="refund" value="hi" />
                      <label htmlFor="hi" className="text-xs lg:text-base">HI</label>

              </div>

          </form>
     </div>
      </div>
  )
}

export default Home
