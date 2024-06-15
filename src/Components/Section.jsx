/* eslint-disable no-unused-vars */
import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { BsFillPeopleFill } from "react-icons/bs";
import Card from './Card';
import { MdOutlineLocationOn } from "react-icons/md";
import { FaPen } from "react-icons/fa";

function Section() {
    const menu=["All Posts","Article","Event","Education","Job"];
   const posts = [
  {
    title: 'Article',
    content: 'What if famous brands had regular fonts? Meet RegulaRands!',
    truncatedContent: "I've worked in UX for the better part of a decade. From now on, I plan to rel...",
    author: 'Sarthak Kamra',
    views: '1.4k',
    imageUrl: 'img1.png',
    avatarUrl: 'p1.png'
  },
  {
    title: '',
    content: 'Tax Benefits for Investment under National Pension Scheme launched for Government',
    truncatedContent: "I've worked in UX for the better part of a decade. From now on, I plan to rel...",
    author: 'Sushil Misil',
    views: '1.5k',
    imageUrl: 'img2.png',
    avatarUrl: 'p2.png'
  },
  {
    title: 'Twitter',
    content: 'Finance & Investment Elite: Social MNer-@LinkedEd',
    truncatedContent: '#FinTwits #Fin #Trading #Stocks #Bonds #Investment #BusinessAnalytics #DataScience',
    author: 'Wade Jones',
    views: '1.7k',
    imageUrl: 'img3.png',
    avatarUrl: 'p3.png'
  },
  {
    title: '',
    content: 'Software Developer',
    truncatedContent: '@MicrosoftSupport/Helpdesk • 4 hrs',
    author: 'Joseph Gray',
    views: '5.5k',
    imageUrl: '',
    avatarUrl: 'p4.png'
  }
];
    return (
        <>
        <div className="w-[80%] min-h-[100vh]  mx-[200px]">
              <div className="w-full h-[80px]  flex justify-between border-b-2 border-b-2-gray-300 items-center bg-white">
                  <div className="w-[45%] h-full  flex justify-evenly items-center">
                        {
                            menu.map((items)=>(
                                <>
                                <div className='w-[100px] h-[42px] hover:border-b-2 border-b-gray-500 mt-[40px] text-center cursor-pointer'>
                                    {items}{items == "All Posts"?"(32)":""}
                                </div>
                                </>
                            ))
                            
                        }
                  </div>
                  <div className="w-[35%] h-full  flex justify-center items-center gap-4  ">
                         <button className="w-[160px] h-[40px] bg-gray-300 ">Write a Post<IoMdArrowDropdown style={{display:"inline"}}/></button>
                         <button className="w-[160px] h-[40px] bg-blue-600 flex justify-center items-center gap-2 "><BsFillPeopleFill />Join  Group</button>
                 </div>
              </div>
              <div className="w-full min-h-[100vh] mt-3 flex">
              <div className="w-[70%] min-h-[100vh] flex flex-col gap-2">
                  {
                    posts.map((items,index)=>(
                        <>
                        <Card key={index}  {...items}/>
                        </>
                    ))
                  }
              </div>
              <div className="w-[30%] h-[50px]  flex justify-center items-center">
                          <div className="w-[250px] h-[40px] bg-white text-black flex border-b-2 border-b-gray-200   justify-center items-center gap-2  ">
                          <MdOutlineLocationOn/><input type="text" className="w-[200px] h-[30px] outline-none bg-transparent" placeholder='Enter your location'/>
                          <FaPen/>
                          </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Section
